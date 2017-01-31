$(function() {

  var flavors = ["chocolate", "vanilla", "strawberry", "schnozzberry", "appletini"];

  flavors.forEach(function(flavor) {
    $("#flavor-section").append("<li>" + flavor + "</li>");

  });

});
