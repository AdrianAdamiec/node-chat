require('./config/config');
const path = require('path');

const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

const app = express();
const port = process.env.PORT;

let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'test@test.com',
        text: 'siema',
        createdAt: Date.now()
    });

    socket.emit('newMessage', {
        from: 'test@test.com',
        text: 'siema 2',
        createdAt: Date.now()
    });

    socket.on('createMessage', (newEmail) => {
        console.log('createMessage', newEmail);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(port, () => {
    console.log('Started on port 3000')
});

module.exports = {app};