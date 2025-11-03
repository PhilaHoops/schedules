document.addEventListener("DOMContentLoaded", () => {
  /* === TAB SWITCHING === */
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-tab");

      // Update active button
      tabButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Show matching content
      tabContents.forEach(content => {
        content.classList.toggle("active", content.id === target);
      });
    });
  });

  /* === NAVIGATION TOGGLE === */
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const header = document.querySelector("header");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      navToggle.classList.toggle("open");
    });
  }

  /* === STICKY HEADER EFFECT === */
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  });

  /* === FADE-IN ELEMENTS ON LOAD === */
  const fadeElements = document.querySelectorAll(".fade-in, .fade-in-on-load");
  fadeElements.forEach(el => el.classList.add("visible"));
});
