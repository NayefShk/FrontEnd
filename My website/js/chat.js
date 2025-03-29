// chat.js - Basic Functionality
document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.querySelector('.chat-messages');
    const sendButton = document.querySelector('.send-button');

    function addMessage(text, isUser = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${text}</p>
            </div>
            <span class="message-time">${time}</span>
        `;

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll
    }

    // Send message on button click
    sendButton.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if(message) {
            addMessage(message, true);
            chatInput.value = '';
            
            // Add fake bot response (replace with real API call later)
            setTimeout(() => {
                addMessage("I understand. Can you tell me more about what's been bothering you?", false);
            }, 1000);
        }
    });

    // Send message on Enter key
    chatInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            sendButton.click();
        }
    });
});