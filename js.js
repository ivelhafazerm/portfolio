const tl = gsap.timeline();

//! disable right click
window.addEventListener("contextmenu", (e) => e.preventDefault());

function home() {
  scrollTo(0, 0);
  console.log(home(), "di click nih cuy");
}

//? Container animate from here!!!
tl.from(".intro h1, .intro span,.intro h3, .hero-desc, .button-hero,.clonex", {
  opacity: 0,
  ease: "power2.easeOut",
  y: 50,
  stagger: 0.5,
})
  .from(".logo ", {
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
