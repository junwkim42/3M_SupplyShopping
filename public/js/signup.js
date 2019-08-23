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
          var lastIndex = window.location.href.lastIndexOf("/");
          window.location.replace(
            window.location.href.substring(0, lastIndex) + "/login"
          );
        } else {
          alert(response.msg);
        }
      }
    );
  });
});
