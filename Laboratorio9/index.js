
function sendMessage(user) {
    let inputId = user === 'user-one' ? 'messageUserOne' : 'messageUserTwo';
    let messageInput = document.getElementById(inputId);
    let messageText = messageInput.value.trim();

    
    if (messageText !== '') {
        let messageContainer = document.getElementById('messages');
        let newMessage = document.createElement('div');
        newMessage.classList.add('message', user); 

        let messageContent = document.createTextNode(messageText);
        newMessage.appendChild(messageContent);

        
        messageContainer.appendChild(newMessage);

       
        messageInput.value = '';

        
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
}


document.getElementById('btnUserOne').addEventListener('click', function() {
    sendMessage('user-one');
});

document.getElementById('btnUserTwo').addEventListener('click', function() {
    sendMessage('user-two');
});


