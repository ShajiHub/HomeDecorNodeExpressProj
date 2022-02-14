//mongodb+srv://shaji:<password>@cluster0.2xugm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shaji:shine123@cluster0.2xugm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db){
    if(err){
        throw err;
    }
    var database = db.db('HomeDecorNodeJSProj');
    database.collection("cactiList").findOne({}, function(err, res){
        

    if(err) throw err;
    console.log(res);
    //console.log(res.cactiName);
    //console.log(res); to get whole object
    db.close();

    });
});
//Show first name of first record in database