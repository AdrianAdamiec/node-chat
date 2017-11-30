let socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'asd@asd.com',
        text: 'elo'
    });

    socket.emit('createMessage', {
        from: 'asd@asd.com',
        text: 'elo2'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (email) {
    console.log('New message: ', JSON.stringify(email, undefined, 2));
});
