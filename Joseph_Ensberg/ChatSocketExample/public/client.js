const socket = io("http://localhost:3000");
const btnSendMsg = document.getElementById('sendMessage');


btnSendMsg.addEventListener('click', () => {
    const msgInput = document.getElementById('message');
    const msg = msgInput.value;
    socket.emit('chat message', msg);
});


socket.on('chat message', (message) => {
    const chatLine = document.getElementById('chatLine');
    chatLine.innerHTML += message + '<br>';
});