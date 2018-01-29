// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the Movies

  app.post("/api/movies", function (req, res) {
    var body = req.body;
    var query = {};
    if (body.year) {
      query.year = body.year;
    }
    if (body.category) {
      query.category = body.category;
    }
    if (body.nominee) {
      query.nominee = body.nominee;
    }
    if (body.won) {
      query.won = "YES";

    }
    db.Movie.findAll({
      where: query
    }).then(function (dbMovie) {
      res.json(dbMovie);
    });
  });


  //   // Get rotue for retrieving a single Movie
  //   app.get("/api/Movies/:id", function(req, res) {
  //     // 2. Add a join here to include the Author who wrote the Movie
  //     db.Movie.findOne({
  //       where: {
  //         id: req.params.id
  //       }
  //     }).then(function(dbMovie) {
  //       console.log(dbMovie);
  //       res.json(dbMovie);
  //     });
  //   });

  //   // Movie route for saving a new Movie
  //   app.Movie("/api/Movies", function(req, res) {
  //     db.Movie.create(req.body).then(function(dbMovie) {
  //       res.json(dbMovie);
  //     });
  //   });

  //   // DELETE route for deleting Movies
  //   app.delete("/api/Movies/:id", function(req, res) {
  //     db.Movie.destroy({
  //       where: {
  //         id: req.params.id
  //       }
  //     }).then(function(dbMovie) {
  //       res.json(dbMovie);
  //     });
  //   });

  //   // PUT route for updating Movies
  //   app.put("/api/Movies", function(req, res) {
  //     db.Movie.update(
  //       req.body,
  //       {
  //         where: {
  //           id: req.body.id
  //         }
  //       }).then(function(dbMovie) {
  //         res.json(dbMovie);
  //       });
  //   });
};
