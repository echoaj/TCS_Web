
const btnSendMsg = document.getElementById('sendMessage');


btnSendMsg.addEventListener('click', () => {
    const msgInput = document.getElementById('message');
    const msgLine =  document.getElementById('chatLine');
    msgLine.innerHTML += msgInput.value + "<br>";
});