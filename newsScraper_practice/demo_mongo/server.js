var express = require("express");
var mongojs = require("mongojs");

var app = express();

app.use(express.static("public"));

//1. DB config
var databaseURL = "grocerydb";
var collections = ["products"];

//2. Hook MongoJS to DB
var db = mongojs(databaseURL, collections);

//3. Log any mongodb errors
db.on("error", function(error){
    console.log("Database Error:", error);
});


//Routes
app.get("/", function(req, res) {
    res.send("Hello from the demo app!");
})


app.get("/all", function(req, res){
    db.products.find({}, function(error, found){
        if (error) {
            console.log("ERROR:: ", error);
        }
        else {
            res.json(found);
        }
    });
});

//Listen on port 3000
app.listen(3000, function(){
    console.log("Listening on port 3000");
});

