jQuery(function ($) {
  $(".navbar-toggle").click(function () {
    $(".navbar-collapse").toggleClass("right");
    $(".navbar-toggle").toggleClass("indexcity");
  });
});

$(".navbar--toggler").click(() => {
  var toggler = $(".navbar--expand--mobile");
  if (toggler.css("left") == '0px') {
    
    toggler.css("left", "-80vw");
  } else {
    toggler.css("left", "0");
  }
});

