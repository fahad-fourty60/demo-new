// nav section js start //
// <!---navbar fixed-->
const navbar = document.querySelector("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= navbar.offsetTop) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// <!---navbar-->

//normal
let changeIcon = function (icon) {
  icon.classList.toggle("fa-times");
};
//using arrow function
changeIcon = (icon) => icon.classList.toggle("fa-times");
const toggleButton = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// <!-- nav section js end -->//

// page animation js

// page animation js end

// testimonial js start

$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [768, 1],
    pagination: true,
    navigation: false,
    navigationText: ["", ""],
    slideSpeed: 700,
    singleItem: true,
    autoPlay: true,
  });
});

// testimonial js start end

// text animation js
var app = document.getElementById("app");
var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString(
    '<i class="fa-regular fa-handshake"></i>  For Future Startup Leader'
  )
  .pauseFor(2500)
  .deleteAll()
  .typeString(
    '<i class="fa-solid fa-handshake"></i> For Future Startup Leader '
  )
  .pauseFor(2500)
  .deleteAll()
  .typeString('<i class="fa-solid fa-bolt"></i> For Future Startup Leader ')
  .pauseFor(2500)
  .start();

// js workspace page

