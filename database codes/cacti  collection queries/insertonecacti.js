//mongodb+srv://shaji:<password>@cluster0.2xugm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shaji:shine123@cluster0.2xugm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db){
    if(err){
        throw err;
    }
    var database = db.db('HomeDecorNodeJSProj');
    var cactiobj = 
      
        {cactiName: "Cereus Repandus", cactiPrice:10.99, cactiDescription:"Cereus are the well known columnar cacti that are native to Latin America.", Flowering: "White-pink flowers", Toxicity: "Non-toxic to animals"}
        
    
    database.collection("cactiList").insertOne(cactiobj, function(err, res){
        if(err) throw err;
        console.log("One cacti added in cactiList!!!");
        db.close();
    });
        
});
