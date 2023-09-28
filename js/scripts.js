jQuery(function ($) {
  $(".navbar-toggle").click(function () {
    $(".navbar-collapse").toggleClass("right");
    $(".navbar-toggle").toggleClass("indexcity");
  });
});

$(".navbar--toggler").click(() => {
  var windowsize = $(window).width();
  if (windowsize <= 700) {
    var slidingMenu = $(".navbar--expand--mobile");
  } else {
    var slidingMenu = $(".navbar--expand--tablet");
  }

  if (slidingMenu.css("left") == "0px") {
    slidingMenu.css("left", "-80vw");
  } else {
    slidingMenu.css("left", "0");
  }
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 60,
  responsiveClass: true,
  navText: [" ", " "],
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    768: {
      items: 2,
      nav: false,
    },
    992: {
      items: 2,
      nav: true,
      loop: false,
    },
  },
});

//https://stackoverflow.com/questions/23006516/jquery-animated-number-counter-from-zero-to-value
$(function () {
  ////////////////////////////////variables//constant variables

  var winHeight = $(window).height(),
    eleOffsetTop = $(".counter").offset().top,
    eleTop = eleOffsetTop - winHeight,
    current = 0;

  $(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    
    if (current == 0 && scrollTop >= eleTop) {
      $(".counter div h3").each(function () {
        console.log(current == 0 && scrollTop >= eleTop)
        var $this = $(this),
          countTo = $this.attr("data-count");

        $({ countNum: $this.text().slice(0,-1) }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 1300,
            easing: "linear",
            step: function () {
              text = `${Math.floor(this.countNum)}+`
              $this.text(text);
            },
            complete: function () {
              $this.text(`${this.countNum}+`);
              //alert('finished');

              //this inside the step callback isn't the element but the object passed to animate
            },
          }
        );
      });
    }
  });
});
