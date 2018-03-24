var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var database = require('./db.js');
app.use('/Bootstrap', express.static(__dirname+'/public/'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//connect database
database.connect();
//connect database

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/public/views/index.html');
});
app.get('/register', function (req, res) {
    res.sendFile(__dirname+'/public/views/register.html');  
}) ; 
app.get('/profile', function (req, res) {
    res.sendFile(__dirname+'/public/views/profile.html');  
});
 
app.get('/login', function (req,  res) {
    res.sendFile(__dirname+'/public/views/login.html');
});
app.get('/users',function(req,res)
{
    db.collection('user').find().toArray((err, result) => {
        if (err) return console.log(err)
        // renders index.ejs
        res.render(__dirname+'/public/views/index.ejs', {user: result})
      });
});

app.post('/login',function(req,res)
{
    var query = { fullname: "Faizs" };
  db.collection("user").find(query).toArray(function(err, result) {
    if (err) throw err;

    if(result)
    {
        console.log("User Found");
        console.log(result);
    }
    else
    {
        console.log("User Not Found");
    }
    
    }) 
});
app.post('/register',function(req,res)
{
    db.collection('user').save(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log('User Registered');
        res.redirect('/login');
    });
});

var server = app.listen(8081, function () { 
   var host = server.address().address   
   var port = server.address().port  
   
   console.log("Example app listening at http://%s:%s", host, port)
});