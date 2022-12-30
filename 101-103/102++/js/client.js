// const { getSystemErrorName } = require("util");

const socket = io('http://localhost:8000');

// audio for notification
var ring = new Audio('../static/ting.mp3');

// Get DOM elements in respective Js variables
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageButton=document.getElementById('messageBtn');
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
let name;

form.addEventListener('submit', (e) => {
    e.preventDefault(); //no reload
    if (name == '' || name == null) {
        // e.preventDefault(); //no reload
        // Ask new user for his/her name and let the server know
        btnName();
    } else {
        const message = messageInput.value;
        append(`You : ${message}`, 'right');
        socket.emit('send', message);
    }
    messageInput.value = '';
})


// function btnName() {
//     // name = prompt("Enter your name to join");
//     name=document.getElementById('nameInp').value;
//     if (name == '' || name == null) {
//         name = new Date().getTime(); // getting time in milliseconds format
//         name = String(name).slice(6, 12);//get last 6/13 digits as a string
//         name = Number(name);// Converting to number
//         name = `user[ ${name} ]`;
//     }
//     socket.emit('new-user-joined', name);
//     // alert(name);
//     document.getElementById('nameInp').style.display='none';
//     document.getElementById('nameBtn').style.display='none';
//     document.getElementById('messageInp').style.display='inline-block';
//     document.getElementById('messageBtn').style.display='inline-block';

// }
function btnName() {
    // name = prompt("Enter your name to join");
    name = messageInput.value;
    if (name == '' || name == null) {
        name = new Date().getTime(); // getting time in milliseconds format
        name = String(name).slice(6, 12);//get last 6/13 digits as a string
        name = Number(name);// Converting to number
        name = `user[ ${name} ]`;
    }
    // If the name get submitted , send message to the server
    socket.emit('new-user-joined', name);
    // alert(name);
    messageInput.placeholder='Type message here';
    messageButton.innerHTML='Send';

}

// Show name of new user from the server
socket.on('user-joined', usrname => {
    // if (name != null ) {  // only joined users can see who are joining
    //     append(`${usrname} joined the chat`, 'middleIn');
    // }
        append(`${usrname} joined the chat`, 'middleIn');
})

// receive new message from the server and & show it 
socket.on('receive', data => {
    if (name !=null) {
        append(`${data.name} : ${data.message}`, 'left');
    }
})

//If a user leaves the chat , get from server and show others
socket.on('leftChat', usrname => {
    if (name != null && usrname != null) {// only joined users can see who are leaving & leavers are joined users not crowd/refresh
        append(`${usrname} left the chat`, 'middleOut');
    }
})

