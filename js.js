const tl = gsap.timeline();

//! disable right click
window.addEventListener("contextmenu", (e) => e.preventDefault());

function home() {
  scrollTo(0, 0);
}

//? Container animate from here!!!
tl.from(".pg1-text-hero h1,.intro h1, .intro span,.intro h3, .hero-desc, .button-hero,.clonex", {
  opacity: 0,
  ease: "power2.easeOut",
  y: 50,
  stagger: 0.5,
  duration: 1.4,
})
  .from(".logo-svg svg", {
    opacity: 0,
    ease: "power2.easeOut",
    y: -100,
  })
  .from(".nav-left-text a", {
    opacity: 0,
    ease: "power2.easeOut",
    x: 100,
    stagger: 0.5,
  })
  .from(".nav-right-text a", {
    opacity: 0,
    ease: "power2.easeOut",
    x: -100,
    stagger: 0.5,
  })
  .from(".line-links, .menu-links-left", {
    opacity: 0,
    ease: "power2.easeOut",
    y: 50,
    stagger: 0.5,
  });
