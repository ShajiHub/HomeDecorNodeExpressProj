var express = require('express');
var router = express.Router();
var ssn;

//MongoDb connect
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shaji:shine123@cluster0.2xugm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


router.get('/', function(req, res, next) {
  ssn = req.session;
  res.render('index', { title: 'HomeDecor website' });
});





module.exports = router;


