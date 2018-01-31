// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var amazon = require('amazon-product-api');
// Routes
// =============================================================
module.exports = function (app) {
  app.post("/api/amazon", function (req, res) {
    var client = amazon.createClient({
      awsId: "AKIAJKPMV5NYCWHQ4PRA",
      awsSecret: "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",
      awsTag: "FenixRising13"
    });

    var movie = req.body.movie

    client.itemSearch({
      title: movie,
      searchIndex: 'DVD',
      MerchantId: 'Amazon',
      responseGroup: 'ItemAttributes'
    }).then(function (results) {
      var response = results[0].DetailPageURL[0];
      res.json(response);

    }).catch(function (err) {
      console.log(err);
    });
  });

  app.put("/api/usermovies/update", function (req, res) {
    db.UserMovie.update(req.body, {
      where: {
        id: req.body.id
      }
    })
      .then(function (dbUserMovie) {
        res.json(dbUserMovie);
      });
  });

  app.delete("/api/usermovies/delete/:id", function (req, res) {
    db.UserMovie.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbUserMovie) {
        res.json(dbUserMovie);
      });
  });

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

  app.post("/api/usermovies", function (req, res) {
    var query = {
      movieid: req.body.movieid,
      useremail: req.user.email,
      poster: req.body.poster,
      UserId: req.user.id,
      nominee: req.body.nominee,
      category: req.body.category,
      addinfo: req.body.addinfo,
      won: req.body.won
    }
    db.UserMovie.findOne({
      where: {
        useremail: query.useremail,
        movieid: query.movieid
      }
    }).then(function (answer) {
      console.log(answer);
      if (answer == null) {
        db.UserMovie.create(query).then(function (dbUserMovie) {
          res.json(dbUserMovie);
        });
      }
      else {
        res.status(400);
      }
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
