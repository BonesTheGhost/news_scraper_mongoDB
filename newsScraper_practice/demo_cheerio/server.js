var express = require("express");
var mongojs = require("mongojs");

const request = require("request");
const cheerio = require("cheerio");

request('http://codedemos.com/sampleblog', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        //This is to verify that we are getting back the information.
        //console.log(html);

        //At this point, lets load this into cheerio using the '$' as a variable so the syntax becomes similar to standard jquery
        const $ = cheerio.load(html);

    }
});


/*
var app = express();

app.use(express.static("public"));

//1. DB config
var databaseURL = "";
var collections = [""];

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
    db.*********.find({}, function(error, found){
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
*/
