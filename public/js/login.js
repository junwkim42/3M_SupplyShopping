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
          alert(response.msg);
          sessionStorage.setItem("username", response.sess.username);
          sessionStorage.setItem("loggedin", response.sess.loggedin);
          sessionStorage.setItem("userid", response.sess.userid);
          window.location.replace("http://localhost:3000/shopping");
        } else {
          alert(response.msg);
        }
      }
    );
  });
});
