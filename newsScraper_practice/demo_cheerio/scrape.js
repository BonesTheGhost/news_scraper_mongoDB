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

        $('.post-preview').each((i, el) => {
            const title = $(el).find('.post-title').text().replace(/\s\s+/g, '');

            const link = $(el).find('a').attr('href');

            const date = $(el).find('.post-date').text().replace(/,/, '');


            console.log(title);
            console.log(link);
            console.log(date);
        });

    }
});