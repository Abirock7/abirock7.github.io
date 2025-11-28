/* ==========================================================
   PRELOADER REMOVAL
=========================================================== */
window.addEventListener("load", () => {
  const pre = document.getElementById("preloader");
  if (pre) {
    pre.style.opacity = "0";
    setTimeout(() => pre.style.display = "none", 400);
  }
});

/* ==========================================================
   MATRIX BACKGROUND ANIMATION
=========================================================== */
const canvas = document.getElementById("matrix-bg");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const chars = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#4aa8ff";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}

setInterval(drawMatrix, 50);

/* Resize handler */
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

/* ==========================================================
   IMAGE MODAL
=========================================================== */
function openModal(src) {
  document.getElementById("imgModal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

window.openModal = openModal;
window.closeModal = closeModal;

/* ==========================================================
   CERTIFICATION MODAL
=========================================================== */
function openCertModal(src) {
  document.getElementById("certModal").style.display = "flex";
  document.getElementById("certImage").src = src;
}

function closeCertModal() {
  document.getElementById("certModal").style.display = "none";
}

window.openCertModal = openCertModal;
window.closeCertModal = closeCertModal;
