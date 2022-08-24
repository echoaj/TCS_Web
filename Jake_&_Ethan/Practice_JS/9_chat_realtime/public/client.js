const socket = io('http://localhost:3000');
const btnMsg = document.getElementById('sendMessage');
const inputMsg = document.getElementById('message');
const chatLine = document.getElementById('chatLine');

btnMsg.addEventListener('click', () => {
    const msg = inputMsg.value;
    socket.emit('chat message', msg);
});


socket.on("chat message", (message) => {
    chatLine.innerHTML += message + '<br>';
})