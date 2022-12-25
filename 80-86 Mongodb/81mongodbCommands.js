// Create / Inserting data in mongodb 81
use tamalKart


db.items.insertOne({name:"Samsung galaxy 30s",price:70000,rating:4.5,qty:201,sold:100})
db.items.insertMany([{name:"Samsung galaxy 30s",price:70000,rating:4.5,qty:201,sold:100},{name:"Moto G 40",price:15000,rating:3.4,qty:98,sold:345},{name:"Sony XP",price:150000,rating:4.7,qty:50,sold:78, isHigh:true}])

// read/ searching for data in mongodb 82


db.items.find({rating:3.4})// raturns objest/objects with rating of 3.4
db.items.find({rating:{$gte:3.4}})// raturns objest/objects with rating of >=3.4
db.items.find({rating:{$gt:3.4}})// raturns objest/objects with rating of >3.4

//And operator

db.items.find({rating:{$gt:3.4},price:{$gt:70000}})// raturns objest/objects with rating of >3.4 & price>70k
db.items.find({rating:{$lt:4.4},price:{$lt:20000}}) // less than

// Or operator

db.items.find({$or:[{rating:{$gt:4.6}},{price:{$lt:20000}}]}) // raturns objest/objects with rating of >4.6 or price<20k

// Projection = get custom return
db.items.find({rating:{$gte:4.7}},{qty:1})  // return : qty for rating >= 4.7
db.items.find({rating:{$gte:4.7}},{rating:1,qty:1})  // return : rating & qty for rating >= 4.7


// Deleting items from the mongodb 83 


db.items.deleteOne({price:70000})  // Delete 1st entry of price 70k
db.items.deleteMany({price:{$gte:90000}})  // Delete all entry of price >=90k


// Update    84

db.items.updateOne({name:"Moto G 40"},{$set:{price:02}}) // find Moto G 40  and update 1st item's price=02
db.items.updateMany({name:"Moto G 40"},{$set:{price:20,rating:1}}) // find Moto G 40  and update all item's price=20 and rating =1
