// frontend/src/routes/chat.js
export async function getChatResponse(message) {
    const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    });

    const data = await response.json();
    return data.response;  // Adjust according to your API response structure
}
