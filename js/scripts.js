jQuery(function ($) {
  $(".navbar-toggle").click(function () {
    $(".navbar-collapse").toggleClass("right");
    $(".navbar-toggle").toggleClass("indexcity");
  });
});

$(".navbar--toggler").click(() => {
  var windowsize = $(window).width();
  if(windowsize<=700){
    var slidingMenu = $(".navbar--expand--mobile");
  } else {
    var slidingMenu = $(".navbar--expand--tablet")
  }
  
  
  if (slidingMenu.css("left") == '0px') {
    
    slidingMenu.css("left", "-80vw");
  } else {
    slidingMenu.css("left", "0");
  }
});

