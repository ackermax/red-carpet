var authController = require("../controllers/authcontroller.js");
var db = require("../models");

module.exports = function (app, passport) {
    app.get("/signup", authController.signup);
    app.get("/signin", authController.signin);
    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/search",
        failureRedirect: "/signup"
    }
    ));
    app.get("/profile", isLoggedIn, function (req, res) {
        db.UserMovie.findAll({
            where: {
                useremail: req.user.email
            }
        }).then(function (dbUserMovie) {
            var list = dbUserMovie;
            res.render("queue", {
                name: req.user.firstname,
                UserMovie: list
            });
        });

    });
    app.get("/logout", isLoggedIn, authController.logout);
    app.post("/signin", passport.authenticate("local-signin", {
        successRedirect: "/profile",
        failureRedirect: "/signin"
    }
    ));
    app.get("/search", isLoggedIn, function (req, res) {
        res.render("index");
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect("/signin");
    }
}