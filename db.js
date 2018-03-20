var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/TestDb", function(err, db) {
  if(err){
    return console.log(err);
  }
else{
    console.log("We are connected");
  }
});