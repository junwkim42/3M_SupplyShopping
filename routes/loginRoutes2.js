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
          console.log(request.session);
          response.json(request.session);
          response.end();
        } else {
          response.send("Incorrect Username and/or Password!");
          response.end();
        }
      });
    } else {
      response.send("Please enter Username and Password!");
      response.end();
    }
  });
};
