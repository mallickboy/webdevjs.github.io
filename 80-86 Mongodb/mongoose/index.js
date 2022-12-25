const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/tamal'); //mongodb://localhost:27017/
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));

// db.once('open',function() {
//     console.log("\t\t\t\t\t\tWe are connected")
// });

const kittySchema = new mongoose.Schema({
  name: String  // adding data format /restrictions 
});
kittySchema.methods.greet=function(){  // adding methods/functionalities to the schema
  console.log(`Hellow my name is `+this.name);
}
const Kitten = mongoose.model('KittenData', kittySchema);// locking the schma for moddels building
                                // database collection name / storing point = lowercase & plural form of KittenData ( ...here kittendatas)
const tamalKitty = new Kitten({ name: 'Tamal Mallick' }); // our model 1
const tamalKitty2 = new Kitten({ name: 'Tamal xxxxx' }); // our model 2
// console.log(Kitten({ name: 'Tamal Kitty_ mmm' }).name); // alternate
// console.log(tamalKitty.name); // printing the stored values 
// tamalKitty.greet();
tamalKitty.save(function(err,model) {
  if(err) return console.error(err);
  // model.greet();
});
tamalKitty2.save(function(err,model) {
  if(err) return console.error(err);
  // model.greet();
});


Kitten.find({name:/^Tam/},function (err,data) {
  if(err) return console.error(err);
  console.log(data);
})