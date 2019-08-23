$(document).ready(function() {
  function getSupplies() {
    function generateResponse(num) {
      return function() {
        var orderQty = {
          username: sessionStorage.getItem("username"),
          userId: sessionStorage.getItem("userid"),
          item: document.getElementById("itemname" + num).textContent,
          price: parseFloat(
            document.getElementById("itemprice" + num).textContent.slice(1)
          ),
          qty: document.getElementById("selection" + num).value
        };
        $.post("/api/cart", orderQty, function(response) {
          if (response.success) {
            alert("Added to Cart!");
          } else {
            alert("An error has occurred. Contact system admin");
          }
        });
      };
    }
    $.get("/api/supplies", function(response) {
      //console.log(response);
      for (var i = 0; i < response.length; i++) {
        // make card
        var newCard = $("<div>");
        newCard.addClass("col-md-3 col-sm-12 card");
        newCard.css({
          width: "100%",
          margin: "20px"
        });

        var newTitle = $("<h3>");
        newTitle.attr("id", "itemname" + i);
        newTitle.text(response[i].supply);

        var newImg = $("<img>");
        newImg.attr("src", response[i].imagelink);
        newImg.addClass("card-img-top");
        newImg.attr("alt", response[i].supply);
        /*
        newImg.css({
          maxWidth: "322px",
          maxHeight: "322px",
          margin: "20px"
        });
        */
        var newBody = $("<div>");
        newBody.addClass("card-body");

        var newPrice = $("<h5>");
        newPrice.addClass("card-title");
        newPrice.attr("id", "itemprice" + i);
        newPrice.text("$" + response[i].price + "/" + response[i].unit);

        var newButton = $("<button>");
        newButton.addClass("btn btn-dark");
        newButton.attr("type", "button");
        newButton.attr("data-toggle", "modal");
        // data-target has to match with id of modal (line 56)
        newButton.attr("data-target", "#itemModal" + i);
        newButton.text("ORDER ITEM");

        newBody.append(newPrice);
        newBody.append(newButton);
        newCard.append(newTitle);
        newCard.append(newImg);
        newCard.append(newBody);

        // make modal
        var newModal = $("<div>");
        newModal.addClass("modal fade");
        newModal.attr("id", "itemModal" + i);
        newModal.attr("tabindex", "-1");

        var modalDialog = $("<div>");
        modalDialog.addClass("modal-dialog");
        modalDialog.attr("role", "document");

        var modalContent = $("<div>");
        modalContent.addClass("modal-content");

        var modalHeader = $("<div>");
        modalHeader.addClass("modal-header");

        var modalTitle = $("<h5>");
        modalTitle.addClass("modal-title");
        modalTitle.text(response[i].supply.toUpperCase());

        var modalButtonX = $("<button>");
        modalButtonX.addClass("close");
        modalButtonX.attr("type", "button");
        modalButtonX.attr("data-dismiss", "modal");

        var modalSpan = $("<span>");
        modalSpan.html("&times;");

        var modalBody = $("<div>");
        modalBody.addClass("modal-body");
        modalBody.text("Item description: " + response[i].description);

        var modalFooter = $("<div>");
        modalFooter.addClass("modal-footer");

        var modalForm = $("<div>");
        modalForm.addClass("form-group");

        var modalLabel = $("<label>");
        modalLabel.attr("for", "Select1");
        modalLabel.text("QTY");

        var formControl = $("<select>");
        formControl.addClass("form-control");
        formControl.attr("id", "selection" + i);

        for (var j = 1; j < 6; j++) {
          var options = $("<option>");
          options.attr("value", j);
          options.text(j);
          formControl.append(options);
        }

        //edit later to send post call to cart on click
        // html id + 1 = mySQL database id
        var modalButtonAdd = $("<button>");
        modalButtonAdd.addClass("btn btn-dark addcart");
        modalButtonAdd.attr("data-dismiss", "modal");
        modalButtonAdd.attr("id", "add" + i);
        modalButtonAdd.text("ADD TO CART");

        modalButtonX.append(modalSpan);
        modalForm.append(modalLabel);
        modalForm.append(formControl);

        modalHeader.append(modalTitle);
        modalHeader.append(modalButtonX);

        modalFooter.append(modalForm);
        modalFooter.append(modalButtonAdd);

        modalContent.append(modalHeader);
        modalContent.append(modalBody);
        modalContent.append(modalFooter);

        modalDialog.append(modalContent);
        newModal.append(modalDialog);

        $("#main-container").append(newCard);
        $("#main-container").append(newModal);
      }

      for (var j = 0; j < response.length; j++) {
        $("#add" + j).on("click", generateResponse(j));
      }
    });
  }

  //console.log(sessionStorage.getItem("username"));
  getSupplies();
});
