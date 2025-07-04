from llama_cpp import Llama

llm = Llama(model_path="./models/llama-pro-8b-instruct.Q4_K_M.gguf",    
    n_gpu_layers=35,
    n_ctx=2048,
    verbose=True
)

output = llm("Q: What is the capital of France?\nA:", max_tokens=32)
print(output)