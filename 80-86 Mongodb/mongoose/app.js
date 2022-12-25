const mongoose=require('mongoose');
mongoose.connect('mongodb://126.0.0.1:27017/tamal').then(()=>console.log('connected')).catch((err)=>console.log('err'));
const db=mongoose.connection;

db.on('error',function () {
    console.log("Error connection");
  });