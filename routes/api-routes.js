// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the Movies
  app.get("/api/movies", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.Movie.findAll({
      where: query
    }).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });

  // Get route for retrieving a single Movie
  app.get("/api/Movies/:id", function(req, res) {
    db.Movie.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbMovie) {
      console.log(dbMovie);
      res.json(dbMovie);
    });
  });

    // Get route for retrieving a single Category
    app.get("/api/Movies/:category", function(req, res) {
      db.Movie.findOne({
        where: {
          id: req.params.category
        }
      }).then(function(dbMovie) {
        console.log(dbMovie);
        res.json(dbMovie);
      });
    });

  // Movie route for saving a new Movie to Watchlist
  app.Movie("/api/Movies", function(req, res) {
    db.Movie.create(req.body).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });

  // DELETE route for deleting Movies from Watchlist
  app.delete("/api/Movies/:id", function(req, res) {
    db.Movie.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });

  // PUT route for updating Watched status
  app.put("/api/Movies", function(req, res) {
    db.Movie.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbMovie) {
        res.json(dbMovie);
      });
  });
};
