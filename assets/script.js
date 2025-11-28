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
/* --------------------- Certificate Modal --------------------- */

function openCertModal(imgName) {
    document.getElementById("modalCertImg").src = "assets/" + imgName;
    document.getElementById("certModal").style.display = "flex";
}

function closeCertModal() {
    document.getElementById("certModal").style.display = "none";
}

window.onclick = function (event) {
    let modal = document.getElementById("certModal");
    if (event.target === modal) modal.style.display = "none";
};

