<script>
    import { getChatResponse } from './chat.js'; // Import the function from chat.js

    let messages = [];
    let inputMessage = "";

    const sendMessage = async () => {
        if (inputMessage.trim() !== "") {
            messages = [...messages, { text: inputMessage, fromUser: true }];
            inputMessage = "";

            // Wait for the bot response from the backend API
            const botResponse = await getChatResponse(inputMessage);

            messages = [
                ...messages,
                { text: botResponse, fromUser: false },
            ];
        }
    };
</script>

<style>
    .chat-container {
        max-width: 400px;
        margin: 0 auto;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 10px;
        background-color: #f9f9f9;
    }

    .message-container {
        margin-bottom: 1rem;
    }

    .message {
        padding: 10px;
        border-radius: 10px;
        margin: 5px 0;
        max-width: 75%;
        word-wrap: break-word;
    }

    .from-user {
        background-color: #007bff;
        color: white;
        text-align: right;
        margin-left: auto;
    }

    .from-bot {
        background-color: #ccc;
        color: black;
        text-align: left;
        margin-right: auto;
    }

    .input-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
    }

    input[type="text"] {
        width: 85%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button {
        width: 12%;
        padding: 10px;
        border: none;
        background-color: #007bff;
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>

<div class="chat-container">
    <div class="message-container">
        {#each messages as { text, fromUser }}
            <div class="message {fromUser ? 'from-user' : 'from-bot'}">
                {text}
            </div>
        {/each}
    </div>

    <div class="input-container">
        <input
            type="text"
            bind:value={inputMessage}
            placeholder="Type a message..."
        />
        <button on:click={sendMessage}>Send</button>
    </div>
</div>
