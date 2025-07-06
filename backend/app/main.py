from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from llama_cpp import Llama
import asyncio
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS (optional if same domain)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Use specific domain in production
    allow_methods=["*"],
    allow_headers=["*"],
)

# Shared model instance
llm = Llama(
    model_path="./models/llama-pro-8b-instruct.Q4_K_M.gguf",
    n_ctx=4096,
    n_gpu_layers=30,
    chat_format="chatml"
)

# Global lock to serialize model access
llm_lock = asyncio.Lock()
@app.get("/health")
async def health():
    return ({"message": "ok"})
@app.get("/chat/stream-client")
async def stream_chat_get(message: str):
    persona = open("persona.txt", encoding="utf-8").read()
    messages = [
        {"role": "system", "content": persona},
        {"role": "user", "content": message}
    ]

    def generate():
        try:
            token_count = 0
            for chunk in llm.create_chat_completion(
                messages=messages,
                stream=True,
                max_tokens=250,
                temperature=0.7,
                top_p=0.9,
                stop=["</s>"]
            ):
                token = chunk["choices"][0]["delta"].get("content", "")
                if token:
                    yield token
                    token_count += 1
                    if token_count >= 250:
                        break
        except Exception as e:
            yield f"[error: {str(e)}]"


    async def to_async_generator(sync_gen):
        for item in sync_gen:
            yield item
            await asyncio.sleep(0.001)

    async def streamer():
        async with llm_lock:  # prevent concurrent access
            async for word in to_async_generator(generate()):
                yield f"data: {word}\n\n"

    return StreamingResponse(
        streamer(),
        media_type="text/event-stream",
    )
