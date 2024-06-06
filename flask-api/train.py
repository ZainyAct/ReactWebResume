import numpy as np
import torch
from dqn_agent import DQNAgent
from environment import create_environment  # Your environment creation function

device = 'cuda' if torch.cuda.is_available() else 'cpu'

def preprocess(state):
    if isinstance(state, tuple):
        state = state[0]
    return np.array(state, dtype=np.float32)

def train_dqn(episodes, max_steps_per_episode=200):
    env = create_environment()
    state_size = 4  # Example state size, change as per your environment
    action_size = 2  # Example action size, change as per your environment

    agent = DQNAgent(state_size, action_size, seed=0)

    for episode in range(1, episodes + 1):
        state = env.reset()
        state = preprocess(state)
        total_reward = 0
        for step in range(max_steps_per_episode):
            action = agent.act(state)
            next_state, reward, done, _ = env.step(action)
            next_state = preprocess(next_state)
            agent.step(state, action, reward, next_state, done)
            state = next_state
            total_reward += reward
            if done:
                break
        print(f"Episode {episode}, Total Reward: {total_reward}")
        if episode % 100 == 0:
            torch.save(agent.qnetwork_local.state_dict(), f"qnetwork_checkpoint_{episode}.pth")

if __name__ == "__main__":
    train_dqn(1000)
