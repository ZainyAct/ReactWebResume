import train
import test
import torch

if __name__ == "__main__":
    # Train the model
    train.train_dqn(1000)

    # Save the trained model
    torch.save(train.qnetwork.state_dict(), "trained_qnetwork.pth")

    # Test the trained model
    test.test_dqn(10)
