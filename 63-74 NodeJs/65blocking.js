const fs=require('node:fs');
// synchronous / blocking : line by line execution
console.log(' Sync : \n'+
    fs.readFileSync('written.txt','utf-8')
);
console.log('This is a message after file read Synchronous');
// Asynchronous / non-blocking : line by line execution not guranted
//  callbacks will fire
fs.readFile('written.txt','utf-8',(error,data)=>{
    console.log(' Async : \n'+ error,data);
}); // call back fun evaluate in background & after evaluation it executes
console.log('This is a message after file read Asynchronous');