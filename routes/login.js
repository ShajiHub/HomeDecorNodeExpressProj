var express = require('express');
var router = express.Router();
var ssn;

//MongoDb connect
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shaji:shine123@cluster0.2xugm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


router.get('/', function(req, res, next) {
  ssn = req.session;
  res.render('login', {error:ssn.profileError});
});

router.post('/', function(req, res, next) {

   ssn = req.session;

   ssn.userEmail = req.body.email;
   var userPassword = req.body.pwd;
  
   MongoClient.connect(url, function(err, db){
      if(err){
          throw err;
      }
      var database = db.db('HomeDecorNodeJSProj');
      var query = {userEmail:ssn.userEmail, userPassword:userPassword};
      
      
      database.collection('users').findOne(query, function(err, info){

        if (err) throw err;

        
        
        if(info){
          
          
         console.log(info.fName);
         ssn.firstName = info.fName;// also written as --- req.session.firstName
         ssn.lastName = info.lName;
         ssn.uemail = info.userEmail;
         res.redirect('/profile');
        } else{
          
          res.render('login',{error: "The email or password is wrong!!! If you are new user please sign in "});

        }
        
      });
      
    
    
}); 

       
});

module.exports = router;

