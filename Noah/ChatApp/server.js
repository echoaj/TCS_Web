const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = 3000;


// Middleware
app.use(express.static('public'))

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})


io.on('connection', (socket) => {
    console.log('New user connected', socket.id);

    socket.username = "Anonymous";

    socket.on('chat message', (message) => {
        console.log("Received message from client: " + message);
        // Send message to all clients
        io.sockets.emit('chat message', {"message": message, "username": socket.username});
        // Send message to all clients except the sender
        // send mesage to only the sender
        // socket.emit('chat message', message);
    })


    socket.on('username', (username) => {
        socket.username = username;
    });

})