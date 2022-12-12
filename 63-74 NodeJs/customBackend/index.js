const http=require('http');
const fs=require('fs');
const { connect } = require('http2');
const { url } = require('inspector');

const home=fs.readFileSync('./index.html');
const about=fs.readFileSync('./about.html');
const services=fs.readFileSync('./services.html');
const contact=fs.readFileSync('./contact.html');


const hostname='127.0.0.1';
const port=3000;
const server=http.createServer((req,res)=>{
    console.log(req.url);
    let url=req.url;
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    // res.end(home);
    if (url=='/') {
        
        res.end(home);
    } else if (url=='/about') {
        
        res.end(about);
    }
    else if (url=='/contact') {
        
        res.end(contact);
    }
    else if (url=='/services') {
        
        res.end(services);
    }
    // else if (url=='/index') {
        
    //     res.end(home);
    // }
    else{
        res.statusCode=404;
        res.end(`<h1>404 Not Found</h1>`);

    }

});
server.listen(port,hostname,()=>{
    console.log(`Server live at http://${hostname}:${port}`);
});

