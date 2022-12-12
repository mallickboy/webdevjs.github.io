const express =require('express');  // importing express
const app=express(); // initializing espress in the app
const path=require('path');
const port=3000;


// EXPRESS SPECIFIC stuff
app.use('/static',express.static('static'));//serving static file
app.use(express.urlencoded());// fetch form data with express

// PUG specific stuff
app.set("view engine",'pug');// set the template engine as pug
app.set('views',path.join(__dirname,'template'))   // set the views directory

// END points
app.get('/',(req,res )=>{
    res.status(200).render('home.pug'); // 200 = ok
})
app.get('/contact',(req,res )=>{
    res.status(200).render('contact.pug'); // 200 = ok
})


//START THE SERVER
app.listen(port,()=>{
    console.log(`Live on port http://127.0.0.1:${port}` )
})