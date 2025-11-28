document.addEventListener("DOMContentLoaded", () => {

    // REMOVE PRELOADER
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.opacity = "0";
        setTimeout(() => preloader.style.display = "none", 400);
    }

    /* Smooth scrolling */
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

    /* Active nav */
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

    /* Navbar shadow */
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 2px 12px rgba(0,0,0,0.10)";
        } else {
            header.style.boxShadow = "none";
        }
    });

    /* DARK MODE */
    const toggle = document.getElementById("darkToggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");
        });
    }
    // ---------------- CERTIFICATION MODAL ----------------
function openModal(src) {
  document.getElementById("certModal").style.display = "block";
  document.getElementById("modalImg").src = src;
}

function closeModal() {
  document.getElementById("certModal").style.display = "none";
}
    /* SCROLLREVEAL */
    if (typeof ScrollReveal !== "undefined") {
        const sr = ScrollReveal({
            distance: "40px",
            duration: 1200,
            easing: "ease-out",
            interval: 150,
            reset: false
        });

        sr.reveal(".section-title", { origin: "top" });
        sr.reveal(".skill-card", { origin: "bottom" });
        sr.reveal(".project-card", { origin: "left" });
        sr.reveal(".cert-card", { origin: "bottom" });
        sr.reveal(".timeline-item", { origin: "right" });
        sr.reveal(".contact-form-card", { origin: "left" });
    }

});
