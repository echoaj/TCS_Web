const socket = io.connect('http://localhost:3000');
const btnSendMsg = document.getElementById('sendMessage');


btnSendMsg.addEventListener('click', () => {
    const msgInput = document.getElementById('message');
    socket.emit('message', msgInput.value);
});

socket.on('connection');

socket.on('message', (message) => {
    console.log("Client Recieved Message: ", message);
    const msgLine =  document.getElementById('chatLine');
    msgLine.innerHTML += message + "<br>";
});