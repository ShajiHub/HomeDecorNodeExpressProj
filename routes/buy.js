var express = require('express');
var router = express.Router();
var ssn;


//MongoDb connect
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shaji:shine123@cluster0.2xugm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";




router.get('/', function(req, res, next) {
  ssn = req.session;
  
//res.render('buy');
res.render('buy', {userEmail:ssn.uemail,cactiName:ssn.cName,cactiPrice:ssn.cPrice,cactiImg:ssn.cImg, cactiDescription:ssn.cDesc});
});


router.post('/', function(req, res, next) {
  
  ssn = req.session;

  //ssn.userEmail = req.body.email;
  ssn.userSearch = req.body.searchStr;
  //ssn.userEmail = ssn.userName;
  console.log(ssn.userSearch);
  var query = {cactiName:ssn.userSearch};
  var query1 = {userEmail:ssn.uemail};
  MongoClient.connect(url, function(err, db){
  if(err){throw err;}
       var database = db.db('HomeDecorNodeJSProj');
      

       database.collection("users").findOne(query1, function(err, result){
       
        if(result){
        
        var userobj = {itemSearch:ssn.userSearch};
  
          database.collection("users").insertOne(userobj, function(err, res){
          if(err) throw err;
          console.log("search added in database!!!");
          db.close();
      }); 
      }
    });
        
      
      
       database.collection('cactiList').findOne(query, function(err, info){
  
         if (err) {throw err;}
      
        
         if(info){
           
         
          ssn.cName = info.cactiName;// also written as --- req.session.firstName
          ssn.cPrice = info.cactiPrice;
          ssn.cDesc = info.cactiDescription;
          ssn.cImg = info.cactiImg;
          
          req.session.cTitle=" ";
          
         res.redirect('/buy');
        
         } else
         {
           // user doesn't 
           res.render('buy',{error: "no item found!!!"});
  
         }
         
       });
    
    }); 
    
        
  });
  

module.exports = router;
