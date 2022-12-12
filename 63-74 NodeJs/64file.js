const fs= require("node:fs");
const { connect } = require("node:http2");

let text=fs.readFileSync("del.txt",'utf-8');
text=text.replace("\\n\\n",'Tamal');
text=text.replace("apple",'Asia');
console.log(text);

console.log('Creating a new file');
fs.writeFileSync('written.txt',text);
console.log('This is a message after file read');
