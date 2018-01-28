// Simple server page for testing

var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var passport = require("passport")
var session = require("express-session")
var env = require("dotenv").load();

var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models");
var auth = require("./routes/auth-routes.js")(app, passport);
require("./config/passport.js")(passport, db.user);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static("public"));

// Passport authentication
app.use(session({ secret: "codingbootcamp", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session()); // persistent login

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Red Carpet is now listening on PORT " + PORT);
    });
});