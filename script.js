// Add an event listener to the input field
document.getElementById('user-input').addEventListener('keyup', function(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.keyCode === 13) {
        // Call the sendMessage function
        sendMessage();
    }
});

function sendMessage() {
    var userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') return;

    var currentDateTime = new Date().toLocaleString();

    // Display user message
    displayMessage(currentDateTime, 'You', userInput, 'user-message');

    // Process user input and generate Jamie's reply
    var jamieReply = getJamieReply(userInput);

    // Display Jamie's reply
    displayMessage(currentDateTime, 'Jamie', jamieReply, 'jamie-message');

    // Clear user input
    document.getElementById('user-input').value = '';

    // Scroll to the bottom to show the latest messages
    scrollToBottom();
}

function displayMessage(timestamp, sender, message, messageClass) {
    var chatBody = document.getElementById('chat-body');
    chatBody.innerHTML += `<div class="message ${messageClass}">
        <strong>${sender}:</strong> ${message} <br>
        <span class="timestamp">${timestamp}</span>
    </div>`;
}

function getJamieReply(userInput) {
    userInput = userInput.toLowerCase();

    if(userInput.includes('hi')){
    return "Hello! Nice to meet you";
    }
    else if(userInput.includes('jamie') && !userInput.includes(' ')) {
        return 'Can I help you?';
    } else if (userInput.endsWith('?')) {
        return 'Yes';
    } else if (userInput.includes('fast')) {
        return 'Please give me some time to resolve the issue, Please remain calm'
    } else {
        return 'Sorry, I don’t understand.';
    }
}

function scrollToBottom() {
    var chatBody = document.getElementById('chat-body');
    chatBody.scrollTop = chatBody.scrollHeight;
}
