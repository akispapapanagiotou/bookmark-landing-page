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
