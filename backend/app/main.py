# app_stream.py
from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from llama_cpp import Llama
import asyncio

app = FastAPI()

# Load the GGUF model
llm = Llama(
    model_path="./models/llama-pro-8b-instruct.Q4_K_M.gguf",
    n_ctx=4096,
    n_gpu_layers=40,
    chat_format="chatml"  # LLaMA 3 uses ChatML
)

class ChatRequest(BaseModel):
    message: str

@app.post("/chat/stream")
async def stream_chat(req: ChatRequest):
    persona = open("persona.txt", encoding="utf-8").read()
    
    messages = [
        {"role": "system", "content": persona},
        {"role": "user", "content": req.message}
    ]

    def generate():
        for chunk in llm.create_chat_completion(
            messages=messages,
            stream=True,
            max_tokens=512,
            temperature=0.7,
            top_p=0.9,
            stop=["</s>"]
        ):
            yield chunk["choices"][0]["delta"].get("content", "")

    async def streamer():
        for token in generate():
            yield f"data: {token}\n\n"
            await asyncio.sleep(0.001)

    return StreamingResponse(streamer(), media_type="text/event-stream")
