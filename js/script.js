"use strict";

const heroSection = document.getElementById("hero");
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;

// sticky navigation: navigation bar will be stuck to the top of the page
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});
heroObserver.observe(heroSection);

// Smooth scrolling

// Mobile Navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const navListEl = document.querySelector(".main-nav-list");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

navListEl.addEventListener("click", function (e) {
  // matching strategy
  if (e.target.classList.contains("main-nav-link")) {
    headerEl.classList.toggle("nav-open");
  }
});
