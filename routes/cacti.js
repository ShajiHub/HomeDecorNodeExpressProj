var express = require('express');
var router = express.Router();
var ssn;

//MongoDb connect
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shaji:shine123@cluster0.2xugm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

router.get('/', function(req, res, next) {
  ssn = req.session;
  res.render('cacti');
});

router.post('/', function(req, res, next) {
  
ssn = req.session;

ssn.cTitle = req.body.cTitle;
MongoClient.connect(url, function(err, db){
if(err){throw err;}
     var database = db.db('HomeDecorNodeJSProj');

     
      
    var query = {cactiName:ssn.cTitle};
    
     database.collection('cactiList').findOne(query, function(err, info){

       if (err) {throw err;}
    
      
       if(info){
         
       
        ssn.cName = info.cactiName;// also written as --- req.session.firstName
        ssn.cPrice = info.cactiPrice;
        ssn.cDesc = info.cactiDescription;
        ssn.cImg = info.cactiImg;
        
        req.session.cTitle=" ";
        
       res.redirect('/buy');
      //res.redirect('/buy');
      //db.close();
       } else
       {
         // user doesn't 
         res.render('cacti',{error: "no item found!!!"});

       }
       
     });
  
  }); 
  
      
});




module.exports = router;

