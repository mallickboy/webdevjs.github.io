const express=require('express');  // importing express
const app=express(); // initializing espress in the app
const path=require('path');
const port=80;

//serving static file
app.use('/static',express.static('staticFolder'));

// set the template engine as pug
app.set("view engine",'pug');

// set the views directory
app.set('views',path.join(__dirname,'template'))   

// our pug demo endpoint
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey Tamal', message: 'Hello there!' })
  })

app.get('/',(req,res)=>{
    res.status(200).send('This is my first Express app');
})
app.get('/bad',(req,res)=>{
    res.status(400).send('Bad request');
})
app.get('/about',(req,res)=>{
    res.send('This is about page of my first Express app');
})
app.post('/about',(req,res)=>{
    res.send('This is post request of about page of my first Express app');
})
app.listen(port,()=>{
    console.log(`Live on port http://127.0.0.1:${port}` )
})