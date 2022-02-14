//mongodb+srv://shaji:<password>@cluster0.2xugm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shaji:shine123@cluster0.2xugm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db){
    if(err){
        throw err;
    }
    var database = db.db('HomeDecorNodeJSProj');
    var query ={cactiName: "Cereus Repandus"};
    database.collection("cactiList").deleteOne(query, function(err, res){
        if (err) throw err;
        console.log("One cacti deleted");
        db.close();
    })
   

});