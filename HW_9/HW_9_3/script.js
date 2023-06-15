$(function() {
    $("div").each(function(index) {
      $(this).insertBefore($("h3").eq(index));
    });
  });