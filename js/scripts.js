$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
  $(".clickable2").click(function() {
    $("#hidden").slideToggle();
    $("#showing").slideToggle();
  });
});
