jQuery(function ($) {
  $(".navbar-toggle").click(function () {
    $(".navbar-collapse").toggleClass("right");
    $(".navbar-toggle").toggleClass("indexcity");
  });
});

/* NAVBAR FUNKCIONALNOST */

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
      slidingMenuSecond.css("margin-top", "0px");
      $(".navbar--toggler--second").css("transform","rotate(0deg)");
    }
  }
});

$("a.sidebar--menu--mobile").on("click", () => {
  $(".navbar--expand--mobile").css("left", "-80%");
  $(".navbar--expand--mobile--second").css("max-height", "0px");
  $(".navbar--expand--mobile--second").css("margin-top", "0px");
  $(".navbar--toggler--second").css("transform","rotate(0deg)");
  $(".sidebar--backdrop").css("background-color", "rgba(0, 0, 0, 0.0)");
});

/* NAVBAR DRUGI DROPDOWN NA MOBITELU */
$(".navbar--toggler--second").on("click", () => {
  var navbarExpander = $(".navbar--expand--mobile--second");

  if (navbarExpander.css("max-height") == "0px") {
    //Povećaj
    $(".navbar--expand--mobile--second").css("max-height", "350px");
    $(".navbar--expand--mobile--second").css("margin-top", "15px");
    $(".navbar--toggler--second").css("transform","rotate(-180deg)");
  } else {
    //Smanji
    $(".navbar--expand--mobile--second").css("max-height", "0px");
    $(".navbar--expand--mobile--second").css("margin-top", "0px");
    $(".navbar--toggler--second").css("transform","rotate(0deg)");
  }
});

$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  responsiveClass: true,
  touchDrag: true,
  mouseDrag: true,
  navText: ["<div class='prev-icon'></div>", "<div class='prev-icon'></div>"],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    768: {
      items: 2,
      nav: false,
      loop: false,
    },
    992: {
      items: 3,
      margin: 0,
      nav: true,
      loop: false,
      center: true,
    },
  },

});

/* BACK TO TOP */
$(".back--to--top--container").on("click",()=>{
  $(window).scrollTop(0);
})
$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  if (scroll > 200) {
    $(".back--to--top--container").css("opacity", "1");
  } else {
    $(".back--to--top--container").css("opacity", "0");
    
  }
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

/* NAVBAR LOGO VRACA NA INDEX */

$(".navbar--logo--index").on("click", () => {
  window.location.href = "index.php";
});

AOS.init({
  disable: function () {
    var maxWidth = 768;
    return window.innerWidth < maxWidth;
  },
});

/*MODAL*/

var modal = $(".modal--container");
var modalImage = $(".modal--image");

$(".officeimage--modal--open").on("click", (e) => {
  modalImage.attr("src", $(e.target).attr("src"));
  modal.css("visibility", "visible");
});

$(".modal--close").on("click", () => {
  modal.css("visibility", "hidden");
});

modal.on("click", () => {
  modal.css("visibility", "hidden");
});

$(document).keyup(function (e) {
  if (e.key === "Escape") {
    // escape key maps to keycode `27`
    modal.css("visibility", "hidden");
  }
});

/* LOADER */

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("body").style.visibility = "visible";
    document.querySelector("#loader").style.display = "none";
  }
};

/* ONCLICK ZA NEKE USLUGE */

$(".services--plastic").on("click", () => {
  window.location.href = "usluge/blefaroplastika.php";
});
$(".services--oculoplastic").on("click", () => {
  window.location.href = "usluge/okuloplastika.php";
});
$(".services--botox").on("click", () => {
  window.location.href = "usluge/botox.php";
});

/* Lokalni href */

$('a.local').each(
  function () {
  // get the href attribute
  var href = $(this).attr('href');
  // does it have a href?
  if (href) {
    var lastSlash = window.location.toString().lastIndexOf("/");
    var lastHash = window.location.toString().lastIndexOf("#");
    
    if(lastHash == -1){

      var new_href = window.location.toString() + href;
    } else {
      var new_href = window.location.toString().slice(0,lastHash) + href;
    }

    $(this).attr('href', new_href);
  }
});

