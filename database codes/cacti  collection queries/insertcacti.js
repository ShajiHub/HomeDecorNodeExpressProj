//mongodb+srv://shaji:<password>@cluster0.2xugm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shaji:shine123@cluster0.2xugm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db){
    if(err){
        throw err;
    }
    var database = db.db('HomeDecorNodeJSProj');
    var cactiobj = [
      
        {cactiName: "Cereus Repandus Monstrosus", cactiPrice:12.99, cactiDescription:"Cereus are the well known columnar cacti that are native to Latin America. Cereus Repandus Monstrosus is also known as Cereus Peruvianus Monstrosus, is sought after by collectors and known for its unique twisting and clumping shape.", Flowering: "Impressive! white-pink flowers", Toxicity: "Non-toxic to animals"},
        {cactiName: "Lepismium Houlletianum", cactiPrice:16.99, cactiDescription:"Lepismium Houlletianum, also known as the Snowdrop Cactus, displays beautifully as a hanging plant. It is a free flowering epiphytic jungle cactus with flat, jagged edges and long arching stems often reaching more than 1.5 metres in length.  Not only is it easy to care for but its foliage makes it a favourite!", Flowering: "Impressive, colourful flowers", Toxicity: "Mildly toxic to animals"},
        {cactiName: "Mammillaria Ernestii", cactiPrice:14.99, cactiDescription:"Mammillaria Ernestii, a subspecies of the Backebergiana, is a gorgeous slender columnar cactus which blooms purplish pink flowers in the springtime.", Flowering: "Purplish pink flowers", Toxicity: "Non-toxic to animals"},
        {cactiName: "Opuntia Microdasys Yellow Dots", cactiPrice:8.99, cactiDescription:"Opuntia, one of the largest cactus families, is made up of desert cactus found throughout the Americas. They are low maintenance plants needing little water. They are also adapted to a very hot, dry climate. Opuntia microdasys, also known as bunny ears cactus, Mickey Mouse cactus and prickly pear cactus, has no sharp spines, but avoid touching it as the fine hairs can irritate the skin!", Flowering: "Yellow flowers", Toxicity: "Mildly toxic to animals"},
        {cactiName: "Opuntia Subulata", cactiPrice:14.99, cactiDescription:"Opuntia, one of the largest cactus families, is made up of desert cactus found throughout the Americas. They are low maintenance plants needing little water. They are also adapted to a very hot, dry climate. Opuntia subulata, or Eve's Needle, grows very thick cylindrical stems that branch as the plant ages.", Flowering: "Red flowers", Toxicity: "Mildly toxic to animals"},
    ];
    database.collection("cactiList").insertMany(cactiobj, function(err, res){
        if(err) throw err;
        console.log(res.insertedCount + " cacti added in cactiList!!!");
        db.close();
    });
        
});
