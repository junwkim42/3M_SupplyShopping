var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/cart/:username", function(req, res) {
    db.Cart.findAll({ where: { username: req.params.username } }).then(function(
      cartItem
    ) {
      res.json(cartItem);
    });
  });

  // Create a new example
  app.post("/api/cart", function(req, res) {
    db.Cart.create(req.body).then(function(response) {
      res.json(response);
    });
  });

  // Delete an example by id
  app.delete("/api/cart/:username/:item", function(req, res) {
    db.Cart.destroy({
      where: { username: req.params.username, item: req.params.item }
    }).then(function(response) {
      res.json(response);
    });
  });
};
