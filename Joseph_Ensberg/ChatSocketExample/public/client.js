const socket = io("http://localhost:3000");
const btnSendMsg = document.getElementById('sendMessage');
const btnSetUser = document.getElementById('setUsername');


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
    const chatLine = document.getElementById('chatLine');
    let message = data['message'];
    let user = data['user'];
    chatLine.innerHTML += user + ": " + message + '<br>';
});

socket.on('joined chat', (user) => {
    const chatLine = document.getElementById('chatLine');
    chatLine.innerHTML += user + " joined the chat" + '<br>';
});