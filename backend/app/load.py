from transformers import AutoTokenizer, AutoModelForCausalLM, pipeline
import torch

model_path = "./models/Meta-Llama-3-8B-GPTQ"

tokenizer = AutoTokenizer.from_pretrained(model_path, trust_remote_code=True)
model = AutoModelForCausalLM.from_pretrained(
    model_path,
    device_map="auto",
    trust_remote_code=True,
    torch_dtype=torch.float16,
    low_cpu_mem_usage=True
)

generator = pipeline("text-generation", model=model, tokenizer=tokenizer)
