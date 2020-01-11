//dependencies
var express = require("express");
var mongojs = require("mongojs");

//For scraping
var request = require("request");
var cheerio = require("cheerio");


//Initialize express
var app = express();

//DB configuration
var databaseUrl = "newsScraper";
var collections = [scrapedData];

//Hook mongojs configuration to the db variable?
var db = mongojs(databaseUrl, collections);
db.on("error", function(error){
    console.log("Database Error:", error);
});

//MAIN ROUTE
app.get("/", function(req, res){
    res.send("Hello World");
});


//Listen on port 8088
app.listen(8088, function() {
    console.log("App running on port 8088!")
})