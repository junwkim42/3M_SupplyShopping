var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/cart", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cart.html"));
  });

  app.get("/shopping", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/shopping2.html"));
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
  /*
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  */
};
