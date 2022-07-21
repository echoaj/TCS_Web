const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = 3000;

// Middleware
app.use(express.static('public'));

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});