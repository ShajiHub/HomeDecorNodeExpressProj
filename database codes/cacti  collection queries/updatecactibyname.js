//mongodb+srv://shaji:<password>@cluster0.2xugm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shaji:shine123@cluster0.2xugm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db){
    if(err){
        throw err;
    }

    var database = db.db('HomeDecorNodeJSProj');
    var query = {cactiName: "Mammillaria Ernestii"};
    var updatedPrice = {$set: {cactiPrice:12.99}};
    
    database.collection("cactiList").updateOne(query, updatedPrice, function (err,res){
        if (err) throw err;
        console.log("Price updated for this cacti");
        db.close();
    });


});
// update price for cacti