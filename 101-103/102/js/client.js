// const { getSystemErrorName } = require("util");

const socket = io('http://localhost:8000');

// audio for notification
var ring = new Audio('../static/ting.mp3');

// Get DOM elements in respective Js variables
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")

// function will append  event info into the container
const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if (position != 'right') {
        ring.play();
    }
    messageContainer.scrollTop = messageContainer.scrollHeight;// auto scrolling the container div
}

// If the form get submitted , send message to the server
form.addEventListener('submit', (e) => {
    e.preventDefault(); //no reload
    const message = messageInput.value;
    append(`You : ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = '';
})

// Ask new user for his/her name and let the server know

let name = prompt("Enter your name to join");

if (name == '' || name == null) {
    name = new Date().getTime(); // getting time in milliseconds format
    name = String(name).slice(6, 12);//get last 6/13 digits as a string
    name = Number(name);// Converting to number
    name = `user[ ${name} ]`;
}
socket.emit('new-user-joined', name);





// Show name of new user from the server
socket.on('user-joined', name => {
    append(`${name} joined the chat`, 'middleIn');
})

// receive new message from the server and & show it 
socket.on('receive', data => {
    append(`${data.name} : ${data.message}`, 'left');
})

//If a user leaves the chat , get from server and show others
socket.on('leftChat', name => {
    append(`${name} left the chat`, 'middleOut');
})

