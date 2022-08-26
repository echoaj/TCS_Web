const socket = io('http://localhost:3000');
const msgInput = document.getElementById('msg_input');
const btnMsg = document.getElementById('btn_msg');
const chat = document.getElementById('chat');

const btnUsr = document.getElementById('btn_user');
const usrInput = document.getElementById('username');


btnMsg.addEventListener('click', () => {
    const msg = msgInput.value;
    socket.emit('chat message', msg);
});

btnUsr.addEventListener('click', () => {
    const usr = usrInput.value;
    socket.emit('username', usr);
});


socket.on('chat message', (data) => {
    console.log('Received message from server: ' + data.message);
    const h2 = document.createElement('h2');
    h2.innerText = data.username + ": " + data.message;
    chat.appendChild(h2);
});