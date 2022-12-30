// server-side
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://127.0.0.1:5502", // allowing the port
    allowedHeaders: ["GET", "POST"],// giving specific permissions to the allowed port
    credentials: true // validating the allowence
  }
});

const users = {};// User name field

io.on('connection', socket => {
  // console.log('\t\tConnection Established');
  // If any new user joins, let other users connected to the server know!
  socket.on('new-user-joined', name => {
    
    users[socket.id] = name;
    // console.log(name, " joined");
    socket.broadcast.emit('user-joined', name);
  });

  // If someone sends a message, broadcast it to other people
  socket.on('send', message => {
    socket.broadcast.emit('receive', { message: message, name: users[socket.id] })
  });
  // If someone leaves the chat inform other
  socket.on('disconnect', message => {  // disconnect is built in event
    socket.broadcast.emit('leftChat', users[socket.id])
    delete users[socket.id]; // deleting the id
  });
})
httpServer.listen(8000);