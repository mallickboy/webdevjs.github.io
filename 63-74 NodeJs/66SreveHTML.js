const http=require('http')
const fs=require('fs')
const fileContent=fs.readFileSync('../56-62JS/index.html')

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(fileContent)
})
server.listen(3000,'127.0.0.1',()=>{
    console.log("Listening at port 3000")
})
