jQuery(function ($) {
  $(".navbar-toggle").click(function () {
    $(".navbar-collapse").toggleClass("right");
    $(".navbar-toggle").toggleClass("indexcity");
  });
});

$(".navbar--toggler").click(() => {
  var windowsize = $(window).width();
  var slidingMenu = null;
  var backdrop = null;
  var slidingMenuSecond = null;

  if (windowsize < 768) {
    slidingMenu = $(".navbar--expand--mobile");
    backdrop = $(".sidebar--backdrop");
    slidingMenuSecond = $(".navbar--expand--mobile--second");
  } else {
    slidingMenu = $(".navbar--expand--tablet");
    backdrop = $(".sidebar--backdrop");
    slidingMenuSecond = null;
  }

  if (slidingMenu.css("left") == "0px") {
    slidingMenu.css("left", "-80%");
    backdrop.css("background-color", "rgba(0, 0, 0, 0.0)");
  } else {
    slidingMenu.css("left", "0");
    backdrop.css("background-color", "rgba(0, 0, 0, 0.486)");
  }
  if (slidingMenuSecond) {
    if (parseInt(slidingMenuSecond.css("max-height")) >= 0) {
      slidingMenuSecond.css("max-height", "0px");
    }
  }
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 60,
  responsiveClass: true,
  touchDrag: true,
  mouseDrag: true,
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
        console.log(current == 0 && scrollTop >= eleTop);
        var $this = $(this),
          countTo = $this.attr("data-count");

        $({ countNum: $this.text().slice(0, -1) }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 1300,
            easing: "linear",
            step: function () {
              text = `${Math.floor(this.countNum)}+`;
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

$(".navbar--toggler--second").on("click", () => {
  var navbarExpander = $(".navbar--expand--mobile--second");

  if (navbarExpander.css("max-height") == "0px") {
    //Povečaj
    $(".navbar--expand--mobile--second").css("max-height", "250px");
  } else {
    //Smanji
    $(".navbar--expand--mobile--second").css("max-height", "0px");
  }
});
