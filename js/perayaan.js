// ===== Konfeti (taburan kertas warna-warni) =====
// Dipakai oleh kartu ucapan pembuka (js/salam.js) dan, nanti, kartu ucapan selamat per bab.
// Setiap potong konfeti adalah <span> kecil yang jatuh dengan animasi CSS (lihat style.css).
// Konfeti dihapus lagi setelah selesai jatuh, supaya halaman tetap ringan.

const CONFETTI_COLORS = ["#ffd23f", "#f5c84b", "#e9a23b", "#1f4fa3", "#8fb3f5", "#ffffff"];
const CONFETTI_COUNT = 70;
const CONFETTI_LIFETIME = 5200; // milidetik: sedikit lebih lama dari potongan yang paling lambat

// Mengembalikan angka acak antara min dan max
function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

// Membuat satu potong konfeti dengan posisi, warna, ukuran, dan kecepatan acak
function createConfettiPiece() {
  const piece = document.createElement("span");
  piece.className = "confetti-piece";
  piece.style.setProperty("--x", randomBetween(0, 100) + "%");
  piece.style.setProperty("--drift", randomBetween(-90, 90) + "px");
  piece.style.setProperty("--fall", randomBetween(2.6, 4.2) + "s");
  piece.style.setProperty("--delay", randomBetween(0, 0.9) + "s");

  // Bagian dalam yang berputar dan bergoyang selama jatuh
  const paper = document.createElement("span");
  paper.className = "confetti-paper";
  const isRound = Math.random() < 0.25;
  const width = randomBetween(6, 10);
  paper.style.setProperty("--w", width + "px");
  paper.style.setProperty("--h", (isRound ? width : width * 1.6) + "px");
  paper.style.setProperty("--r", isRound ? "50%" : "2px");
  paper.style.setProperty("--c", CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)]);
  paper.style.setProperty("--spin", randomBetween(0, 360) + "deg");
  paper.style.setProperty("--flutter", randomBetween(0.6, 1.2) + "s");

  piece.appendChild(paper);
  return piece;
}

// Menaburkan konfeti ke dalam satu wadah, lalu membersihkannya setelah selesai jatuh.
// Jika perangkat memakai pengaturan "kurangi animasi", konfeti tidak ditampilkan.
function launchConfetti(layer) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
  layer.replaceChildren(); // hapus sisa taburan sebelumnya
  for (let i = 0; i < CONFETTI_COUNT; i++) {
    layer.appendChild(createConfettiPiece());
  }
  setTimeout(function () {
    layer.replaceChildren();
  }, CONFETTI_LIFETIME);
}
