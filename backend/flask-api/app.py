from transformers import GPT2Tokenizer, GPT2LMHeadModel
import torch

# Load tokenizer and model
tokenizer = GPT2Tokenizer.from_pretrained("./fine-tuned-gpt2")
model = GPT2LMHeadModel.from_pretrained("./fine-tuned-gpt2")

# Add a new padding token if not already added
tokenizer.add_special_tokens({'pad_token': '[PAD]'})
model.resize_token_embeddings(len(tokenizer))

# Move model to GPU
device = 'cuda' if torch.cuda.is_available() else 'cpu'
model.to(device)

# Function to generate a response
def generate_response(prompt):
    # Tokenize input prompt
    tokenized_inputs = tokenizer(prompt, return_tensors='pt', padding=True, truncation=True, max_length=512)

    # Move input tensors to the same device as the model
    tokenized_inputs = {key: value.to(device) for key, value in tokenized_inputs.items()}

    # Generate response with adjusted parameters
    output = model.generate(
        tokenized_inputs['input_ids'],
        max_length=50,                # Set a reasonable max_length for a single sentence
        num_return_sequences=1,       # Only return one sequence
        pad_token_id=tokenizer.eos_token_id,
        attention_mask=tokenized_inputs['attention_mask'],
        do_sample=True,               # Enable sampling
        temperature=0.7,              # Control the randomness of predictions
        top_k=50,                     # Limit the next token predictions to the top K tokens
        top_p=0.9,                    # Limit the next token predictions to the top P probability mass
        eos_token_id=tokenizer.eos_token_id,  # Stop generation at the end of the sentence
    )
    # Decode and return the response
    response = tokenizer.decode(output[0], skip_special_tokens=True)
    return response

# Example prompt

prompt = input("")
response = generate_response(prompt)
print(response)
