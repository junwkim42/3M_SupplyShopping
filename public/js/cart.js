$(document).ready(function() {
  function getCart() {
    $.get("/api/cart", function(response) {
      $("#cart").append(response);
    });
  }
  getCart();
});
