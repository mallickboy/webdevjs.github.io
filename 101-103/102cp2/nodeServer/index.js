// Node server which will handle socket io connections
const io = require('socket.io')(80)

const users = {};

io.on('connection', socket =>{
    console.log('\t\tConnection Established');
    // If any new user joins, let other users connected to the server know!
    socket.on('new-user-joined', name =>{ 
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    // If someone sends a message, broadcast it to other people
    socket.on('send', message =>{
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
    });
})