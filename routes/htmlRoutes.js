var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    if (req.session.loggedin) {
      res.sendFile(path.join(__dirname, "../public/shopping2.html"));
    } else {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    }
  });

  app.get("/cart", function(req, res) {
    if (req.session.loggedin) {
      res.sendFile(path.join(__dirname, "../public/cart.html"));
    } else {
      res.send("Please login to view this page!");
    }
  });

  app.get("/signup", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(request, response) {
    // response.redirect("signup.html");
    response.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/shopping", function(request, response) {
    if (request.session.loggedin) {
      response.sendFile(path.join(__dirname, "../public/shopping2.html"));
    } else {
      response.send("Please login to view this page!");
    }
  });

  /*
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  */
};
