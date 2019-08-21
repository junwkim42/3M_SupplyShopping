$(document).ready(function() {
  $("#exampleModal").on("shown.bs.modal", function() {
    $("#exampleFormControlSelect1").trigger("focus");
  });

  function getSupplies() {
    $.get("/api/supplies", function(response) {
      //console.log(response);
      for (var i = 0; i < response.length; i++) {
        // make card
        var newCard = $("<div>");
        newCard.addClass("col-md3 col-sm12 card");
        newCard.css({
          width: "100%",
          maxWidth: "200px",
          margin: "20px"
        });

        var newTitle = $("<h3>");
        newTitle.text(response[i].supply);

        var newImg = $("<img>");
        newImg.attr("src", response[i].imagelink);
        newImg.addClass("card-img-top");
        newImg.attr("alt", response[i].supply);
        newImg.css({
          maxWidth: "322px",
          maxHeight: "322px"
        });

        var newBody = $("<div>");
        newBody.addClass("card-body");

        var newPrice = $("<h5>");
        newPrice.addClass("card-title");
        newPrice.text(response[i].price + response[i].unit);

        var newButton = $("<button>");
        newButton.addClass("btn btn-dark");
        newButton.attr("type", "button");
        newButton.attr("data-toggle", "modal");
        // data-target has to match with id of modal (line 56)
        newButton.attr("data-target", "#itemModal" + i);
        newButton.text("ADD TO CART");

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
        formControl.attr("id", i);

        for (var j = 1; j < 6; j++) {
          var options = $("<option>");
          options.attr("value", j);
          options.text(j);
          formControl.append(options);
        }

        //edit later to send post call to cart on click
        // html id + 1 = mySQL database id
        var modalButtonAdd = $("<button>");
        modalButtonAdd.addClass("btn btn-dark");
        modalButtonAdd.attr("data-dismiss", "modal");
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
    });
  }

  getSupplies();
});
