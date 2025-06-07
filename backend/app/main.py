# app_stream.py
from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from transformers import AutoTokenizer, AutoModelForCausalLM, TextIteratorStreamer
import torch
import threading

app = FastAPI()

# Load model + tokenizer
model_path = "./models/Meta-Llama-3-8B-GPTQ"
tokenizer = AutoTokenizer.from_pretrained(
    model_path, 
    trust_remote_code=True, 
    local_files_only=True
)

model = AutoModelForCausalLM.from_pretrained(
    model_path,
    device_map="auto",
    trust_remote_code=True,
    torch_dtype=torch.float16,
    local_files_only=True
)

class ChatRequest(BaseModel):
    message: str

@app.post("/chat/stream")
async def stream_chat(req: ChatRequest):
    prompt = open("persona.txt").read() + f"\nUser: {req.message}\nZain:"

    streamer = TextIteratorStreamer(tokenizer, skip_prompt=True, skip_special_tokens=True)
    
    inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

    generation_kwargs = dict(
        **inputs,
        streamer=streamer,
        max_new_tokens=200,
        temperature=0.7,
        do_sample=True,
        top_p=0.9,
        top_k=50
    )

    # Run generation in a background thread
    thread = threading.Thread(target=model.generate, kwargs=generation_kwargs)
    thread.start()

    async def token_streamer():
        for token in streamer:
            yield token

    return StreamingResponse(token_streamer(), media_type="text/event-stream")
