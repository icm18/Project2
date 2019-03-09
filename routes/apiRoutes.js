var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/posts", function(req, res) {
    db.Post.findAll({}).then(function(posts) {
      res.json(posts);
    });
  });

  // Create a new example
  app.post("/api/posts", function(req, res) {
    console.log(req.body)
    db.Post.create(req.body).then(function(posts) {
      res.redirect('/');
    });
  });

  // Delete an example by id
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({ where: { id: req.params.id } }).then(function(post) {
      res.json(post);
    });
  });
};
