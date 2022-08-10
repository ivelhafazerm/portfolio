const svg = document.getElementById("svg");
const tl = gsap.timeline();
const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

//? Reset Web to top while Refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

$(function () {
  setTimeout(function () {
    $("html, body").css({
      overflow: "scroll",
    });
  }, 5500);
});
//! disable right click
window.addEventListener("contextmenu", (e) => e.preventDefault());

//Cursor
const cursorRounded = document.querySelector(".cursor");
const moveCursor = (e) => {
  const mouseY = e.clientY - 7;
  const mouseX = e.clientX + 10;

  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};
window.addEventListener("mousemove", moveCursor);

tl.from(".loader-wrap-heading h1", {
  delay: 1,
  y: 50,
  opacity: 0,
  duration: 1.3,
}).to(".loader-wrap-heading h1", {
  y: 0,
  opacity: 1,
});
tl.from(".loader-wrap-heading h3", {
  y: 250,
  opacity: 0,
  duration: 1.3,
});

//!
function enter() {
  // ? Animate SVG Intro
  tl.to(svg, {
    duration: 0.8,
    attr: { d: curve },
    ease: "power2.easeIn",
  }).to(svg, {
    duration: 0.8,
    attr: { d: flat },
    ease: "power2.easeOut",
  });
  tl.to(".loader-wrap", {
    y: -1500,
  });
  tl.to(".loader-wrap", {
    zIndex: -99,
    display: "none",
  });

  //! Container animate from here!!!
  tl.from(".menu__logo", {
    opacity: 0,
    ease: "power2.easeOut",
    duration: 1.5,
  });
  tl.from(".container-left", {
    opacity: 0,
    ease: "power2.easeOut",
    y: 250,
  });
  // * Main Container Animation
  tl.from(".main-wrapper h1", {
    opacity: 0,
    ease: "power2.easeOut",
    duration: 1,
  });
}

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
