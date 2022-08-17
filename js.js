const tl = gsap.timeline();

//! disable right click
window.addEventListener("contextmenu", (e) => e.preventDefault());
//* Navbar
let an = new TimelineMax({ paused: true });

an.to(".nav_container", 1.5, {
  top: 0,
  opacity: 1,
  ease: Expo.easeOut,
});

an.staggerFrom(".menu > div", 0.8, { y: 100, opacity: 0, ease: Expo.easeOut }, "0.1", "-=0.4");

an.reverse();
$(document).on("click", ".menu__open", function () {
  an.reversed(!an.reversed());
});
$(document).on("click", ".menu_close", function () {
  an.reversed(!an.reversed());
});

//* hover on text change the background colour
$(document).ready(function () {
  $(".item1").hover(
    function () {
      $(".nav_container").css("background-color", "#938089");
    },
    function () {
      $(".nav_container").css("background-color", "#dfe8e0");
    }
  );
  $(".item2").hover(
    function () {
      $(".nav_container").css("background-color", "#abc");
    },
    function () {
      $(".nav_container").css("background-color", "#dfe8e0");
    }
  );
  $(".item3").hover(
    function () {
      $(".nav_container").css("background-color", "#88a388");
    },
    function () {
      $(".nav_container").css("background-color", "#dfe8e0");
    }
  );
  $(".item4").hover(
    function () {
      $(".nav_container").css("background-color", "#b9b098");
    },
    function () {
      $(".nav_container").css("background-color", "#dfe8e0");
    }
  );
});

//? Container animate from here!!!
tl.from(".intro, .hero-desc, .button-hero,.clonex", {
  opacity: 0,
  ease: "power2.easeOut",
  y: 50,
  stagger: 0.5,
})
  .from(".logo, .menu__open ", {
    opacity: 0,
    ease: "power2.easeOut",
    y: -100,
    stagger: 0.5,
  })
  .from(".line-links, .menu-links-left", {
    opacity: 0,
    ease: "power2.easeOut",
    y: 50,
    stagger: 0.5,
  });
