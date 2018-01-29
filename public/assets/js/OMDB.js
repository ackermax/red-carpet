var amazon = require('amazon-product-api');
var chalk = require('chalk');

// Variable for User's movie
var movie = "Oblivion";
var actor = "Tom Cruise"

// Queries OMDB API for relevant movie data
// $("#find-movie").on("click", function (event) {

//     event.preventDefault();

// var movie = $("#movie-input").val();
// // Updated API to poster API only
// var queryURL = "http://img.omdbapi.com/?apikey=trilogy&" + movie;

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).done(function (response) {
//     $("#movie-view").text(JSON.stringify(response));
// });

// });

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
        sort: 'price',
        MerchantId: 'Amazon',
        responseGroup: 'ItemAttributes,Offers,Images'
    }).then(function (results) {

        for (var i = 0; i < results.length; i++) {
            console.log(chalk.red('These are the DVD results'));
            console.log(results[i]);
        }
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
            console.log(results[i]);
        }
    }).catch(function (err) {
        console.log(err);
    });
}

// Search for Soundtracks
function getSoundtrack() {
    client.itemSearch({
        title: movie,
        searchIndex: 'MP3Downloads',
        responseGroup: 'ItemAttributes,Offers,Images'
    }).then(function (results) {
        for (var i = 0; i < results.length; i++) {
            console.log(chalk.red('These are the Soundtrack results'));
            console.log(results[i]);
        }
    }).catch(function (err) {
        console.log(err);
    });
}

getSoundtrack();