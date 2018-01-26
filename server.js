// Simple server page for testing

var express = require("express");
var bodyParser = require("body-parser");
var exphbs  = require('express-handlebars');


var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models");

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars'); 

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static("public"));

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});