const socket = io("http://localhost:3000");
const btnSendMsg = document.getElementById('sendMessage');
const btnSetUser = document.getElementById('setUsername');
const chat = document.getElementById('chat');


btnSetUser.addEventListener('click', () => {
    const username = document.getElementById('username');
    const user = username.value;
    socket.emit('username', user);
});

btnSendMsg.addEventListener('click', () => {
    const msgInput = document.getElementById('message');
    const msg = msgInput.value;
    socket.emit('chat message', msg);
});

socket.on('chat message', (data) => {
    const h2 = document.createElement('h2');
    h2.innerText = data.username + ": " + data.message;
    chat.appendChild(h2);
});

socket.on('joined chat', (user) => {
    const h2 = document.createElement('h2');
    h2.innerText = user + ": joined the chat";
    chat.appendChild(h2);
});