/* ==========================================================
   PRELOADER (Fix for infinite loading)
=========================================================== */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => { preloader.style.display = "none"; }, 400);
  }
});


/* ==========================================================
   SMOOTH SCROLLING FOR NAV LINKS
=========================================================== */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


/* ==========================================================
   ACTIVE NAV HIGHLIGHT ON SCROLL
=========================================================== */
window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 120;

  document.querySelectorAll("section").forEach(section => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      const id = section.getAttribute("id");
      document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));

      let link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (link) link.classList.add("active");
    }
  });
});


/* ==========================================================
   NAVBAR SHADOW ON SCROLL
=========================================================== */
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 3px 15px rgba(0, 0, 0, 0.15)";
  } else {
    header.style.boxShadow = "none";
  }
});


/* ==========================================================
   SCROLLREVEAL ANIMATIONS
=========================================================== */
if (typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({
    distance: "40px",
    duration: 1200,
    easing: "ease-out",
    interval: 150
  });

  sr.reveal(".section-title", { origin: "top" });
  sr.reveal(".skill-card", { origin: "bottom" });
  sr.reveal(".project-wide", { origin: "left" });
  sr.reveal(".cert-card", { origin: "bottom" });
  sr.reveal(".achievement-card", { origin: "right" });
  sr.reveal(".contact-form-card", { origin: "left" });
  sr.reveal(".contact-info", { origin: "right" });
}


/* ==========================================================
   CERTIFICATION MODAL (open/close)
=========================================================== */
function openCertModal(imgName) {
  const modal = document.getElementById("certModal");
  const img = document.getElementById("modalCertImg");

  img.src = "assets/" + imgName;
  modal.style.display = "flex";
}

function closeCertModal() {
  document.getElementById("certModal").style.display = "none";
}

// Close modal when clicking outside content
window.addEventListener("click", function (event) {
  const modal = document.getElementById("certModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


/* ==========================================================
   AOS INIT
=========================================================== */
if (typeof AOS !== "undefined") {
  AOS.init({ duration: 1200 });
}
function openModal(src) {
    document.getElementById("imgModal").style.display = "block";
    document.getElementById("modalImage").src = src;
}

function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}
