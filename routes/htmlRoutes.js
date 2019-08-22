var path = require("path");

module.exports = function(app) {
  /* app.get("/signup", function(req, res) {
    res.render("signup", {});
  }); */

  // app.get("/login", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/login.html"));
  // });

  // Load index page
  app.get("/", function(req, res) {
    if (req.session.loggedin) {
      res.sendFile(path.join(__dirname, "../public/shopping2.html"));
    } else {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    }
  });

  app.get("/cart", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cart.html"));
  });
  /*
  app.get("/shopping", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/shopping2.html"));
  });
*/
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
    response.end();
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
