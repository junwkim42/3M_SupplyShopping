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
        console.log(response);
        sessionStorage.setItem("username", response.username);
        sessionStorage.setItem("loggedin", response.loggedin);
        window.location.replace("http://localhost:3000/shopping");
      }
    );
  });
});
