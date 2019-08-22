$(document).ready(function() {
  function getCart() {
    function calculateTotal(num) {
      var totalPrice = 0;
      for (var i = 0; i < num; i++) {
        totalPrice +=
          parseFloat(document.getElementById("price" + i).textContent) *
          document.getElementById("item" + i).value;
      }
      document.getElementById("priceTotal").innerHTML =
        "Total: $" + totalPrice.toFixed(2);
    }

    $.get(
      "/api/cart/" +
        sessionStorage.getItem("username") +
        "+" +
        sessionStorage.getItem("userid"),
      function(response) {
        var totalrow = response.length;
        console.log(response);
        if (totalrow === 0) {
          $("#cartTable > tbody").text("Cart is empty");
          return;
        }
        for (var i = 0; i < totalrow; i++) {
          var formControl = $("<select>");
          formControl.addClass("form-control");
          formControl.attr("id", "item" + i);

          for (var j = 1; j < 6; j++) {
            var options = $("<option>");
            if (j === Number(response[i].qty)) {
              options = $("<option selected>");
            }
            options.attr("value", j);
            options.text(j);

            formControl.append(options);
          }

          var newRow = $("<tr>");

          var colItem = $("<td>");
          var colPrice = $("<td>");
          var colForm = $("<td>");

          colItem.text(response[i].item);
          colPrice.attr("id", "price" + i);
          colPrice.text(response[i].price);
          colForm.append(formControl);

          newRow.append(colItem);
          newRow.append(colPrice);
          newRow.append(colForm);
          // Append the new row to the table
          $("#cartTable > tbody").append(newRow);
        }
        $(".form-control").change(function() {
          calculateTotal(totalrow);
        });
        calculateTotal(totalrow);
      }
    );
  }
  getCart();
});
