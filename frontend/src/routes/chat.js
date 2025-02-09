export async function post({ request }) {
    const { message } = await request.json();
  
    // Call your GPT wrapper with the message
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" }
    });
  
    const data = await response.json();
  
    return {
      status: 200,
      body: { reply: data.reply }
    };
  }
  