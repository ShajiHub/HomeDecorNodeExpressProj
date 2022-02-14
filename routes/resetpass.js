var express = require('express');
var router = express.Router();
var ssn;

//MongoDb connect
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shaji:shine123@cluster0.2xugm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


router.get('/', function(req, res, next) {
  ssn = req.session;
  res.render('resetpass');
});



router.post('/', function(req, res, next) {

  ssn = req.session;

  ssn.userEmail = req.body.pemail;
  var userPass = req.body.pwdone;
  var repeatPass = req.body.pwdtwo;

  MongoClient.connect(url, function(err, db){
    if(err){throw err;}

    var database = db.db('HomeDecorNodeJSProj');
    var query = {userEmail:ssn.userEmail};
   
    database.collection('users').findOne(query, function(err, info){

      if (err) throw err;

      if(info){

        if(userPass == repeatPass){
          
              var updatedPassword = {$set: {userPassword:userPass}};

               database.collection("users").updateOne(query, updatedPassword, function (err,res){

                if (err) throw err;
                   console.log("Password updated");
                   ssn.firstName = info.fName;// also written as --- req.session.firstName
                   ssn.lastName = info.lName;
                   
                });
              }
              else{
                res.render('resetpass',{error: "The passwords doesn't match!!! Please re-enter!!!"});
              }
             
            }
            else{
              res.render('resetpass',{error: "The user doesn't exist!!!"});
            }
  });
  
  });
  res.redirect('/login');
});
module.exports = router;

