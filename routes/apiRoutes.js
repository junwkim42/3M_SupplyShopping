var db = require("../models");

module.exports = function(app) {
  //
  app.get("/api/cart/:username", function(req, res) {
    var uinfo = req.params.username.split("+");
    var name = uinfo[0];
    var uid = uinfo[1];
    db.Cart.findAll({
      where: {
        username: name,
        userid: uid
      }
    }).then(function(cartItem) {
      res.json(cartItem);
    });
  });

  // Create a new example
  app.post("/api/cart", function(req, res) {
    console.log(req.body);

    console.log(req.body.username);
    //username userid item price qty
    db.Cart.create({
      username: req.body.username,
      userid: req.body.userId,
      item: req.body.item,
      price: req.body.price,
      qty: req.body.qty
    }).then(function(response) {
      res.json({ success: true, res: response });
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
      res.json(response);
    });
  });
};
