$(document).ready(function() {
  function getCart() {
    //fix to grab id
    //var cartId = "/api/cart/" +
    $.get("/api/cart/scott", function(response) {
      console.log(response);
      if (response.length === 0) {
        $("#cartTable > tbody").text("Cart is empty");
        return;
      }
      for (var i = 0; i < response.length; i++) {
        var formControl = $("<select>");
        formControl.addClass("form-control");
        formControl.attr("id", response[i].itemId);

        for (var j = 1; j < 6; j++) {
          var options = $("<option>");
          if (j === Number(response[i].qty)) {
            options = $("<option selected>");
          }
          options.attr("value", j);
          options.text(j);

          formControl.append(options);
        }

        var newRow = $("<tr>").append(
          $("<td>").text(response[i].item),
          $("<td>").text(response[i].price),
          $("<td>").append(formControl)
        );
        // Append the new row to the table
        $("#cartTable > tbody").append(newRow);
      }
    });
  }
  getCart();
});
