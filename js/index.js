/* Mobile Navigation, navigation logo and hamburger menu toggle */

const mobileMenuIcon = document.querySelector(".mobile-menu");
const mobileNav = document.querySelector(".mobile-nav");
const logo = document.querySelector(".logo-bookmark");

mobileMenuIcon.addEventListener("click", () => {
  if (mobileNav.style.display == "none") {
    mobileNav.style.display = "block";
    mobileMenuIcon.src = "assets/icon-close.svg";
    logo.style.filter = "invert(1) brightness(100%)";
    mobileMenuIcon.style.filter = "invert(0)";
  } else {
    mobileNav.style.display = "none";
    mobileMenuIcon.src = "assets/icon-hamburger.svg";
    logo.style.filter = "invert(0)";
  }
});

/* Features tabs */

const controls = document.querySelectorAll(".control");
const image = document.querySelector(".features-image");
const heading = document.querySelector(".col-text__heading");
const paragraph = document.querySelector(".col-text__paragraph");

controls[0].addEventListener("click", () => {
  image.src = "assets/illustration-features-tab-1.svg";
  heading.textContent = "Bookmark in one click";
  paragraph.textContent =
    "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
  controls[0].classList.add("active");
  controls[1].classList.remove("active");
  controls[2].classList.remove("active");
});

controls[1].addEventListener("click", () => {
  image.src = "assets/illustration-features-tab-2.svg";
  heading.textContent = "Intelligent search";
  paragraph.textContent =
    "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
  controls[0].classList.remove("active");
  controls[1].classList.add("active");
  controls[2].classList.remove("active");
});

controls[2].addEventListener("click", () => {
  image.src = "assets/illustration-features-tab-3.svg";
  heading.textContent = "Share your bookmarks";
  paragraph.textContent =
    "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
  controls[0].classList.remove("active");
  controls[1].classList.remove("active");
  controls[2].classList.add("active");
});
