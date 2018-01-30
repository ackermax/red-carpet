var exports = {

    signup: function (req, res) {
        res.render("signup");
    },

    signin: function (req, res) {
        res.render("signin");
    },

    profilePage: function (req, res) {
        res.render("profile");
    },

    logout: function (req, res) {
        req.session.destroy(function (err) {
            res.redirect("/");
        });
    }
   
};

module.exports = exports;