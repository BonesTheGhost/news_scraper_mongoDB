var express = require("express");
var mongojs = require("mongojs");

const request = require("request");
const cheerio = require("cheerio");
const mongoose = require("mongoose");

var app = express();

app.use(express.static("public"));

//For dumping the cheerio data that comes back.
var localScraped = [];

//DB configuration
var databaseURL = 'webScraper';
var collections = ["scrapedData"];

// Hook MongoJS to DB
var db = mongojs(databaseURL, collections);



//In case there are any DB errors
db.on("error", function(error){
    console.log("Database Error:", error);
});



//This is the actual scraping part.
request('https://bonestheghost.github.io/hw6_GiphyAPI/', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        //This is to verify that we are getting back the information.
        //console.log(html);

        //At this point, lets load this into cheerio using the '$' as a variable so the syntax becomes similar to standard jquery
        const $ = cheerio.load(html);

        localScraped.push($);
        console.log("Local Scraped Array: ", localScraped);

        const searchSection = $('#search-section');

        output = searchSection.find('p').text();

        console.log(output);

        //Essentially, query a page, go into a particular div/element/whatever on that page. In this case, go to my GIPHY page, 
        // find the 'search-section' id, and then crawl through anything in that container and find a 'p' tag.
        // Then console.log that junk! Neat!



    }
});

/*
//To scrape!
request('http://codedemos.com/sampleblog', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        //This is to verify that we are getting back the information.
        //console.log(html);

        //At this point, lets load this into cheerio using the '$' as a variable so the syntax becomes similar to standard jquery
        const $ = cheerio.load(html);

        const searchSection = $('#search-section');

        output = searchSection.find('p').text();

        console.log(output);
    }
});
*/





//Routes
app.get("/", function(req, res) {
    res.send("Home route for scrape app! Please add '/all' in order to view the scraped info");
})



app.get("/all", function(req, res){
    db.scrapedData.find({}, function(error, found){
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











