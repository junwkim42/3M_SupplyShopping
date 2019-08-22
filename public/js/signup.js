$(document).ready(function() {
  $("#submitbutton").on("click", function() {
    $.post(
      "/process_get",
      {
        username: $("#un").val(),
        password: $("#pw").val(),
        department: $("#dp").val()
      },
      function(response) {
        console.log(response);
        if (response.status) {
          alert(response.msg);
          window.location.replace("http://localhost:3000/login");
        } else {
          alert(response.msg);
        }
      }
    );
  });
});
