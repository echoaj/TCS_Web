const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = 3000;

app.use(express.static('public'));

server.listen(PORT, () => {
    console.log('listening on http://localhost:3000')
});

io.on('connection', (socket) => { 

    socket.on("chat message", (msg) => {
        io.sockets.emit("chat message", msg);
    });
});