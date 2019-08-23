$(document).ready(function() {
  $("#submitbutton").on("click", function() {
    $.post(
      "/auth",
      {
        username: $("#un").val(),
        password: $("#pw").val(),
        department: $("#dp").val()
      },
      function(response) {
        if (response.login) {
          sessionStorage.setItem("username", response.sess.username);
          sessionStorage.setItem("loggedin", response.sess.loggedin);
          sessionStorage.setItem("userid", response.sess.userid);
          var lastIndex = window.location.href.lastIndexOf("/");
          window.location.replace(
            window.location.href.substring(0, lastIndex) + "/shopping"
          );
        } else {
          alert(response.msg);
        }
      }
    );
  });
});
