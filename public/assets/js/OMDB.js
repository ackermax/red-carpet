var amazon = require('amazon-product-api');
var chalk = require('chalk');

// Variable for User's movie
var movie = "The Artist";
var actor = "";

// Queries OMDB API for relevant movie data
function getPoster() {

    // Updated API to poster API only
    var queryURL = "http://www.omdbapi.com/?apikey=trilogy&plot=short&" + movie;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(queryURL);
        console.log(response);
    });

}

var client = amazon.createClient({
    awsId: "AKIAJKPMV5NYCWHQ4PRA",
    awsSecret: "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",
    awsTag: "FenixRising13"
});

// Search for DVD
function getDVD() {
    client.itemSearch({
        title: movie,
        actor: actor,
        searchIndex: 'DVD',
        MerchantId: 'Amazon',
        responseGroup: 'ItemAttributes,Offers,Images'
    }).then(function (results) {
        var response = results[0].DetailPageURL[0];
        return response;

    }).catch(function (err) {
        console.log(err);
    });
}

// Search for Amazon Instant Video
function getStreaming() {
    client.itemSearch({
        title: movie,
        actor: actor,
        searchIndex: 'UnboxVideo',
        responseGroup: 'ItemAttributes,Offers,Images'
    }).then(function (results) {
        for (var i = 0; i < results.length; i++) {
            console.log(chalk.red('These are the Amazon Instant Video results'));
            console.log(results[0]);
        }
    }).catch(function (err) {
        console.log(err);
    });
}

// Search for Soundtracks
function getSoundtrack() {
    client.itemSearch({
        title: movie,
        keywords: 'soundtrack',
        searchIndex: 'MP3Downloads',
        responseGroup: 'ItemAttributes,Offers,Images'
    }).then(function (results) {
        for (var i = 0; i < results.length; i++) {
            console.log(chalk.red('These are the Soundtrack results'));
            console.log(results[0]);
        }
    }).catch(function (err) {
        console.log(err);
    });
}

// getPoster();
getDVD();
// getStreaming();
// getSoundtrack();