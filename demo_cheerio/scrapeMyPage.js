var express = require("express");
var mongojs = require("mongojs");

const request = require("request");
const cheerio = require("cheerio");

request('https://bonestheghost.github.io/hw6_GiphyAPI/', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        //This is to verify that we are getting back the information.
        //console.log(html);

        //At this point, lets load this into cheerio using the '$' as a variable so the syntax becomes similar to standard jquery
        const $ = cheerio.load(html);

        const searchSection = $('#search-section');

        output = searchSection.find('p').text();

        console.log(output);

        //Essentially, query a page, go into a particular div/element/whatever on that page. In this case, go to my GIPHY page, 
        // find the 'search-section' id, and then crawl through anything in that container and find a 'p' tag.
        // Then console.log that junk! Neat!



    }
});