var mysql = require("mysql");
var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cz918459",
  database: "exampledb"
});

module.exports = function(app) {
  app.use(express.static(__dirname + "/public"));
  app.use(
    session({
      secret: "secret",
      resave: true,
      saveUninitialized: true
    })
  );
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get("/", function(request, response) {
    response.redirect("signup.html");
  });

  app.post("/auth", function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    var department = request.body.department;
    if (username && password && department) {
      connection.query(
        "SELECT * FROM accounts WHERE username = ? AND password = ? AND department = ?",
        [username, password, department],
        function(error, results) {
          if (results.length > 0) {
            request.session.loggedin = true;
            request.session.username = username;
            response.redirect("/home");
          } else {
            response.send("Incorrect Username and/or Password!");
          }
          response.end();
        }
      );
    } else {
      response.send("Please enter Username and Password!");
      response.end();
    }
  });

  app.get("/home", function(request, response) {
    if (request.session.loggedin) {
      response.send("Welcome back, " + request.session.username + "!");
    } else {
      response.send("Please login to view this page!");
    }
    response.end();
  });
};
