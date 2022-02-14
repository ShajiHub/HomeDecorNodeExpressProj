var express = require('express');
var router = express.Router();
var ssn;

//MongoDb connect
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shaji:shine123@cluster0.2xugm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

/* GET signup page. */
router.get('/', function(req, res, next) {
  
  res.render('signup');
});

router.post('/', function(req, res, next) {

  ssn = req.session;
  
  ssn.firstName = req.body.fname;// also written as --- req.session.firstName
  
  ssn.lastName = req.body.lname;
  ssn.userEmail = req.body.email;
  var userPassword = req.body.pwd;
  
  MongoClient.connect(url, function(err, db){
    if(err){
        throw err;
    }
    var database = db.db('HomeDecorNodeJSProj');
    var query = {userEmail: ssn.userEmail}
   
    database.collection("users").findOne(query, function(err, result){
    
        if(result){
          //do not allow user to sign 
          req.session.destroy();
          res.render('signup', {error: " user already exists. Please login or sign in as a new user"})
          
        }else{// new users
          var userobj = {fName:ssn.firstName, lName:ssn.lastName, userEmail:ssn.userEmail, userPassword:userPassword};
  
          database.collection("users").insertOne(userobj, function(err, res){
          if(err) throw err;
          console.log("users added in database!!!");
          db.close();
      }); 
        
        
        res.redirect('profile');  
    }
    }); 
     
}); 
       
});

module.exports = router;
