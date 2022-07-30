const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = 3000;

// Middleware
app.use(express.static('public'));

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});


io.on('connection', (socket) => {
    console.log('A user connected: ', socket.id);

    socket.on('chat message', (message) => {
        console.log("Meesage Received: ", message);
        io.sockets.emit('chat message', message);
    })

})