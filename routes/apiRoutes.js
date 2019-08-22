var db = require("../models");

module.exports = function(app) {
  //
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

  app.get("/api/supplies", function(req, res) {
    db.Supplies.findAll({}).then(function(response) {
      console.log(response);
      res.json(response);
    });
  });
};
