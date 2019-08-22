var db = require("../models");

module.exports = function(app) {
  app.post("/auth", function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    var department = request.body.department;
    if (username && password && department) {
      db.Users.findAll({
        where: {
          username: username,
          password: password,
          department: department
        }
      }).then(function(results) {
        if (results.length > 0) {
          request.session.loggedin = true;
          request.session.username = username;
          request.session.userid = results[0].dataValues.id;
          console.log(request.session);
          response.json({
            login: true,
            msg: "Welcome " + username + "!",
            sess: request.session
          });
        } else {
          response.json({
            login: false,
            msg: "Incorrect Username and/or Password!"
          });
        }
      });
    } else {
      response.json({ login: false, msg: "Please enter all fields!" });
    }
  });

  app.post("/process_get", function(request, response) {
    console.log("/process_get post call");
    var un = request.body.username;
    var pw = request.body.password;
    var dp = request.body.department;
    if (un && pw && dp) {
      console.log("username: " + un + " pw : " + pw + " dp : " + dp);
      db.Users.findOrCreate({
        where: {
          username: un,
          password: pw,
          department: dp
        }
      }).then(function(reply) {
        console.log(reply);
        if (reply[1]) {
          response.json({
            status: true,
            msg: "User creation successful. Please login with new credentials"
          });
        } else {
          response.json({ status: false, msg: "Already exsiting user" });
        }
      });
    } else {
      response.json({ status: false, msg: "Please enter all fields!" });
    }
  });
};
