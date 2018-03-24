module.exports={
  
  
  connect : function (){
    var db;
    var mongodb = require('mongodb');
    var MongoClient = mongodb.MongoClient;
// Connect to the db
MongoClient.connect("mongodb://localhost:27017/", function(err, client) {
  if(err)
  {
    return console.log(err);
  }
  else
  {
    
    db = client.db('TestDb');
    console.log("Database Connected");
  }
});
  }
}