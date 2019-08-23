$(document).ready(function() {
  var totalrow;
  function removeRow(num) {
    return function() {
      $.ajax({
        type: "DELETE",
        url:
          "/api/cart/" +
          sessionStorage.getItem("username") +
          "+" +
          sessionStorage.getItem("userid") +
          "/" +
          document.getElementById("itemName" + num).textContent.slice(0, -1) +
          "+" +
          document.getElementById("itemName" + num).getAttribute("orderid")
      }).then(function(response) {
        if (response.success) {
          document.getElementById("row" + num).remove();
          window.location.reload(true);
        } else {
          alert("Removal failed. Contact system administrator");
        }
      });
    };
  }
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
        totalrow = response.length;
        //console.log(response);
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

          var buttonX = $("<button>");
          buttonX.addClass("close");
          buttonX.attr("type", "button");
          buttonX.attr("id", "remove" + i);

          var modalSpan = $("<span>");
          modalSpan.html("&times;");
          buttonX.append(modalSpan);

          var newRow = $("<tr>");

          var colItem = $("<td>");
          var colPrice = $("<td>");
          var colForm = $("<td>");

          newRow.attr("id", "row" + i);
          colItem.attr("id", "itemName" + i);
          colItem.attr("orderid", response[i].id);
          colItem.text(response[i].item);

          colItem.append(buttonX);
          colPrice.attr("id", "price" + i);
          colPrice.text(response[i].price);
          colForm.append(formControl);

          newRow.append(colItem);
          newRow.append(colPrice);
          newRow.append(colForm);
          // Append the new row to the table
          $("#cartTable > tbody").append(newRow);
        }
        for (var j = 0; j < totalrow; j++) {
          $("#remove" + j).on("click", removeRow(j));
        }
        $(".form-control").change(function() {
          calculateTotal(totalrow);
        });
        calculateTotal(totalrow);
      }
    );
  }

  $("#putOrder").on("click", function() {
    for (var i = 0; i < totalrow; i++) {
      $.ajax({
        type: "DELETE",
        url:
          "/api/cart/" +
          sessionStorage.getItem("username") +
          "+" +
          sessionStorage.getItem("userid") +
          "/" +
          document.getElementById("itemName" + i).textContent.slice(0, -1) +
          "+" +
          document.getElementById("itemName" + i).getAttribute("orderid")
      });
    }
    alert("Your order has been submitted!");
    window.location.reload(true);
  });
  getCart();
});
