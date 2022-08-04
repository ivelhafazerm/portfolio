// cursor
const cursorRounded = document.querySelector(".cursor");
const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};
window.addEventListener("mousemove", moveCursor);

//disable right click
window.addEventListener("contextmenu", (e) => e.preventDefault());

// Navbar
let tl = new TimelineMax({ paused: true });

tl.to(".nav_container", 1, {
  left: 0,
  ease: Expo.easeInOut,
});

tl.staggerFrom(".menu > div", 0.8, { y: 100, opacity: 0, ease: Expo.easeOut }, "0.1", "-=0.4");

tl.reverse();
$(document).on("click", ".menu__open", function () {
  tl.reversed(!tl.reversed());
});
$(document).on("click", ".menu_close", function () {
  tl.reversed(!tl.reversed());
});

//hover on text change the background colour
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

// Noise Effect
const noise = () => {
  let canvas, ctx;
  let wWidth, wHeight;
  let noiseData = [];
  let frame = 0;
  let loopTimeout;
  // Create Noise
  const createNoise = () => {
    const idata = ctx.createImageData(wWidth, wHeight);
    const buffer32 = new Uint32Array(idata.data.buffer);
    const len = buffer32.length;
    for (let i = 0; i < len; i++) {
      if (Math.random() < 0.1) {
        buffer32[i] = 0xff000000;
      }
    }
    noiseData.push(idata);
  };
  // Play Noise
  const paintNoise = () => {
    if (frame === 9) {
      frame = 0;
    } else {
      frame++;
    }
    ctx.putImageData(noiseData[frame], 0, 0);
  };
  // Loop
  const loop = () => {
    paintNoise(frame);
    loopTimeout = window.setTimeout(() => {
      window.requestAnimationFrame(loop);
    }, 1000 / 25);
  };
  // Setup
  const setup = () => {
    wWidth = window.innerWidth;
    wHeight = window.innerHeight;
    canvas.width = wWidth;
    canvas.height = wHeight;
    for (let i = 0; i < 10; i++) {
      createNoise();
    }
    loop();
  };
  // Reset
  let resizeThrottle;
  const reset = () => {
    window.addEventListener(
      "resize",
      () => {
        window.clearTimeout(resizeThrottle);
        resizeThrottle = window.setTimeout(() => {
          window.clearTimeout(loopTimeout);
          setup();
        }, 200);
      },
      false
    );
  };
  // Init
  const init = (() => {
    canvas = document.getElementById("noise");
    ctx = canvas.getContext("2d");
    setup();
  })();
};
noise();
