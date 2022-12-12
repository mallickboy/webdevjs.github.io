const express =require('express');  // importing express
const app=express(); // initializing espress in the app
const fs=require('fs');
const path=require('path');
const port=80;
let serialNo=0;

// EXPRESS SPECIFIC stuff
app.use('/static',express.static('staticFolder'));//serving static file
app.use(express.urlencoded());// fetch form data with express

// PUG specific stuff
app.set("view engine",'pug');// set the template engine as pug
app.set('views',path.join(__dirname,'template'))   // set the views directory

// END points
app.get('/',(req,res )=>{
    const cont='This is the best content';
    const params={'title':'BiengBetter','content':cont ,head:"KajKorche"}
    res.status(200).render('index.pug',params); // 200 = ok
})
app.get('/output',(req,res )=>{
    const cont=fs.readFileSync('output.txt');
    res.status(200).render('output',{value:cont}); // 200 = ok
})
app.post('/',(req,res)=>{
    const params={'form':'Your form has been submitted sucessfully'}
    res.status(200).render('index.pug',params); // 200 = ok
    serialNo++;
    var name=req.body.name;
    var age=req.body.age;
    var gender=req.body.gender;
    var address=req.body.address;
    var more=req.body.more;    
    let outToWrite=`
    Serial no           : ${serialNo}\n
    Name                : ${name} \n
    Age                 : ${age} \n
    Gender              : ${gender} \n
    Address             : ${address} \n\n
    Other informations  : ${more} \n||
    
    `;
    let previousFileContent=fs.readFileSync('output.txt');
    outToWrite=previousFileContent + outToWrite; //updating keeping the previous values
    fs.writeFileSync('output.txt',outToWrite);// writing in the file
    // console.log(outToWrite);

})

//START THE SERVER
app.listen(port,()=>{
    console.log(`Live on port http://127.0.0.1:${port}` )
})