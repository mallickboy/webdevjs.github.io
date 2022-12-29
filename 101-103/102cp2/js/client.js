const socket=io('http://localhost:80');

const form=document.getElementById('send-container');
const messageInput=document.getElementById('messageInp');
const messageContainer=document.querySelector('.container');

let name =prompt("Enter your name to join");
socket.emit('new-user-joined',name);
