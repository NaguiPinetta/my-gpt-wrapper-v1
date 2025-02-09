<script>
    let message = "";
    let messages = [];
  
    // Handle sending a message to the backend
    const sendMessage = async () => {
      if (message.trim() !== "") {
        messages.push({ text: message, type: "user" });
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message })
        });
        const data = await response.json();
        messages.push({ text: data.reply, type: "bot" });
        message = ""; // Clear input field
      }
    };
  </script>
  
  <style>
    /* Basic styles for chat */
    .chat-container {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      border: 1px solid #ccc;
      max-width: 400px;
      margin: auto;
    }
    .chat-message {
      margin-bottom: 1rem;
    }
    .user {
      text-align: right;
    }
    .bot {
      text-align: left;
    }
  </style>
  
  <div class="chat-container">
    <div class="messages">
      {#each messages as { text, type }}
        <div class="chat-message {type}">{text}</div>
      {/each}
    </div>
    <input type="text" bind:value={message} placeholder="Type a message" />
    <button on:click={sendMessage}>Send</button>
  </div>
  