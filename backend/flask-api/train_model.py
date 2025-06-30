import json
import torch
from transformers import GPT2Tokenizer, GPT2LMHeadModel, Trainer, TrainingArguments, DataCollatorForLanguageModeling
from datasets import Dataset, DatasetDict

# Check if GPU is available
device = 'cuda' if torch.cuda.is_available() else 'cpu'
print(f"Using device: {device}")

# Load data from JSON file
with open('zainDataSet.json', 'r') as f:
    data = json.load(f)

# Convert to Hugging Face Dataset format
dataset = Dataset.from_list(data)

# Load tokenizer and model
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")  # Use a smaller model
model = GPT2LMHeadModel.from_pretrained("gpt2")

# Split the dataset into training and evaluation sets
dataset = dataset.train_test_split(test_size=0.2)
train_dataset = dataset['train']
eval_dataset = dataset['test']

# Add a new padding token
tokenizer.add_special_tokens({'pad_token': '[PAD]'})

# Resize model embedding to match the tokenizer
model.resize_token_embeddings(len(tokenizer))

# Enable gradient checkpointing
model.gradient_checkpointing_enable()

# Move model to GPU
model.to(device)

# Function to preprocess and tokenize the data
def preprocess_function(examples):
    inputs = examples['prompt']
    outputs = examples['response']
    inputs_outputs = [inp + tokenizer.eos_token + out for inp, out in zip(inputs, outputs)]
    tokenized_inputs = tokenizer(inputs_outputs, truncation=True, padding='max_length', max_length=512)
    tokenized_inputs["labels"] = tokenized_inputs["input_ids"].copy()  # Add labels
    return tokenized_inputs

def load_data_collator(tokenizer, mlm=False):
    data_collator = DataCollatorForLanguageModeling(
        tokenizer = tokenizer,
        mlm=mlm
    )
    return data_collator

# Preprocess and tokenize the training and evaluation datasets
train_dataset = train_dataset.map(preprocess_function, batched=True, remove_columns=["prompt", "response"])
eval_dataset = eval_dataset.map(preprocess_function, batched=True, remove_columns=["prompt", "response"])
data_collator = load_data_collator(tokenizer)

training_args = TrainingArguments(
    output_dir="./results",
    evaluation_strategy="epoch",  # Ensure correct spelling and usage
    learning_rate=2e-5,
    per_device_train_batch_size=5,  # Try increasing batch size if memory allows
    per_device_eval_batch_size=5,   # Try increasing batch size if memory allows
    gradient_accumulation_steps=5,  # Adjust if you increase batch size
    fp16=True,                      # Enable mixed precision training
    num_train_epochs=40,            # Start with fewer epochs
    weight_decay=0.01,
    logging_dir='./logs',           # Directory for storing logs
    logging_steps=10,
    save_total_limit=3,             # Limit the total number of checkpoints
    save_strategy="epoch",          # Save checkpoints every epoch
)

# Create trainer
trainer = Trainer(
    model=model,
    data_collator=data_collator,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=eval_dataset,  # Include evaluation dataset
)

# Fine-tune the model
trainer.train()

# Save the fine-tuned model
model.save_pretrained("./fine-tuned-gpt2")
tokenizer.save_pretrained("./fine-tuned-gpt2")
