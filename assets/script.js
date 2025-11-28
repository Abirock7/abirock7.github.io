/* ----------------------------------------------------------
   Smooth Scrolling
----------------------------------------------------------- */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") !== "#") {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* ----------------------------------------------------------
   Add active class on scroll
----------------------------------------------------------- */
window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 120;

  document.querySelectorAll("section").forEach(sec => {
    if (scrollPos > sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));

      let id = sec.getAttribute("id");
      let link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (link) link.classList.add("active");
    }
  });
});


/* ----------------------------------------------------------
   Navbar shadow on scroll
----------------------------------------------------------- */
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 2px 12px rgba(0,0,0,0.10)";
  } else {
    header.style.boxShadow = "none";
  }
});
// DARK MODE
const toggle = document.getElementById("darkToggle");
toggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// SCROLLREVEAL
ScrollReveal({
  distance: "40px",
  duration: 1200,
  easing: "ease",
});

ScrollReveal().reveal(".section-title", { origin: "top" });
ScrollReveal().reveal(".skill-card", { origin: "bottom", interval: 150 });
ScrollReveal().reveal(".timeline-item", { origin: "left", interval: 200 });
ScrollReveal().reveal(".contact-form-card", { origin: "right" });

