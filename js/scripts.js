$(document).ready(function() {
  $(".js-clickable").click(function() {
    $("#js-def-showing").fadeToggle("#js-def-hidden");
  });

  $(".op-clickable").click(function() {
    $("#op-def-showing").fadeToggle("#op-def-hidden");
  });

  $(".var-clickable").click(function() {
    $("#var-def-showing").fadeToggle("#var-def-hidden");
  });
});
