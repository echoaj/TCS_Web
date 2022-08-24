const msgInput = document.getElementById('msg_input');
const btnMsg = document.getElementById('btn_msg');
const chat = document.getElementById('chat');


btnMsg.addEventListener('click', () => {
    const msg = msgInput.value;
    const h2 = document.createElement('h2');
    h2.innerText = msg;
    chat.appendChild(h2)
});