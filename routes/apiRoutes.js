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
      // console.log("=============cart================");
      // console.log(cartItem);
      // console.log("=================================");
      res.json(cartItem);
    });
  });

  // Create a new example
  app.post("/api/cart", function(req, res) {
    //username userid item price qty
    db.Cart.create({
      username: req.body.username,
      userid: req.body.userId,
      item: req.body.item,
      price: req.body.price,
      qty: req.body.qty
    }).then(function(response) {
      // console.log("=============create==============");
      // console.log(response);
      // console.log("=================================");
      res.json({ success: true, res: response });
    });
  });

  // Delete an example by id
  app.delete("/api/cart/:username/:item", function(req, res) {
    console.log("I was here app delete");
    var uinfo = req.params.username.split("+");
    var name = uinfo[0];
    var uid = uinfo[1];
    var itemInfo = req.params.item.split("+");
    var itemName = itemInfo[0];
    var itemId = itemInfo[1];
    db.Cart.destroy({
      where: {
        username: name,
        userid: uid,
        item: itemName,
        id: parseInt(itemId)
      }
    }).then(function(response) {
      // console.log("===========================");
      // console.log(response);
      // console.log("===========================");
      if (response) {
        res.json({ success: true, res: response });
      } else {
        res.json({ success: false, res: response });
      }
    });
  });

  app.get("/api/supplies", function(req, res) {
    db.Supplies.findAll({}).then(function(response) {
      res.json(response);
    });
  });
};
