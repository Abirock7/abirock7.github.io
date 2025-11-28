/* =====================================================
   TYPED JS (Dynamic Typing Effect)
===================================================== */
var typed = new Typed("#typed", {
    strings: [
        "SOC Analyst",
        "Threat Detection Specialist",
        "Cybersecurity Researcher",
        "Blue Team Defender",
        "AI-Driven Security Enthusiast"
    ],
    typeSpeed: 45,
    backSpeed: 25,
    loop: true
});


/* =====================================================
   DARK / LIGHT THEME TOGGLE
===================================================== */
const themeBtn = document.querySelector(".theme-toggle");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
});


/* =====================================================
   3D PARTICLE BACKGROUND (THREE JS)
===================================================== */
const canvas = document.getElementById("bgCanvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

// Particles
const particlesCount = 4000;
const positions = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 8;
}

const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
);

const particlesMaterial = new THREE.PointsMaterial({
    color: 0x4b7bec,
    size: 0.015
});

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

camera.position.z = 3;

function animateParticles() {
    requestAnimationFrame(animateParticles);

    particles.rotation.y += 0.0006;
    particles.rotation.x += 0.0003;

    renderer.render(scene, camera);
}
animateParticles();

window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});


/* =====================================================
   CARD TILT EFFECT (Vanilla Tilt Replacement)
===================================================== */
document.querySelectorAll("[data-tilt]").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        card.style.transform = `
            perspective(800px)
            rotateX(${(-y / 20)}deg)
            rotateY(${(x / 20)}deg)
            scale(1.03)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = `
            perspective(800px) 
            rotateX(0deg) 
            rotateY(0deg)
            scale(1)
        `;
    });
});


/* =====================================================
   GSAP ENTRANCE ANIMATIONS
===================================================== */
gsap.from(".navbar", {
    y: -50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

gsap.from(".hero-content", {
    x: -80,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
});

gsap.from(".hero-image", {
    x: 80,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
});

gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out"
    });
});


/* =====================================================
   SMOOTH SCROLL
===================================================== */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
