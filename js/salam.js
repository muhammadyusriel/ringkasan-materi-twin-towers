// ===== Ucapan pembuka =====
// Kartu salam berbingkai emas yang muncul sekali, saat aplikasi pertama kali dibuka di satu perangkat.
// Tanda "sudah pernah melihat" disimpan di localStorage, jadi setiap perangkat/browser melihatnya sekali.
// Isi kartu (salam, sambutan, dalil) diambil dari UCAPAN.salam di data/ucapan.js.

const GREETING_KEY = "ringkasan-salam";

// Memeriksa apakah ucapan pembuka sudah pernah ditampilkan di perangkat ini
function hasSeenGreeting() {
  try {
    return localStorage.getItem(GREETING_KEY) === "sudah";
  } catch (error) {
    return false; // penyimpanan diblokir: anggap belum pernah melihat
  }
}

// Mencatat bahwa ucapan pembuka sudah dilihat, supaya tidak muncul lagi
function rememberGreeting() {
  try {
    localStorage.setItem(GREETING_KEY, "sudah");
  } catch (error) {
    // penyimpanan diblokir: ucapan akan muncul lagi saat halaman dibuka ulang
  }
}

// Mengisi kartu dengan salam, sambutan, dan dalil dari data
function fillGreeting() {
  const greeting = UCAPAN.salam;
  document.getElementById("salam-title").textContent = greeting.judul;
  document.getElementById("salam-text").textContent = greeting.sambutan;
  document.getElementById("salam-arab").textContent = greeting.dalil.arab;
  document.getElementById("salam-translation").textContent = greeting.dalil.teks;
  document.getElementById("salam-ref").textContent = greeting.dalil.rujukan;
}

// Menampilkan kartu di tengah layar sambil menaburkan konfeti
function showGreeting() {
  fillGreeting();
  const dialog = document.getElementById("salam-dialog");
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", ""); // browser lama: tampilkan tanpa latar gelap
  }
  // Pengguna keyboard bisa langsung menekan Enter; preventScroll supaya layar pendek tetap
  // memperlihatkan bagian atas kartu (salam), bukan langsung melompat ke tombol di bawah
  document.getElementById("salam-start").focus({ preventScroll: true });
  dialog.scrollTop = 0;
  launchConfetti(document.getElementById("salam-confetti")); // dari js/perayaan.js
}

// Menutup kartu dan mencatat bahwa ucapan sudah dilihat
function closeGreeting() {
  const dialog = document.getElementById("salam-dialog");
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
  rememberGreeting();
}

// Menyiapkan tombol dan klik di luar kartu, lalu menampilkan kartu jika belum pernah dilihat
function setupGreeting() {
  if (UCAPAN.salam === undefined) {
    return; // tidak ada isi salam di data: kartu tidak ditampilkan
  }
  const dialog = document.getElementById("salam-dialog");
  document.getElementById("salam-start").addEventListener("click", closeGreeting);
  dialog.addEventListener("click", function (event) {
    // Klik di area kosong sekitar kartu juga menutup
    if (event.target === dialog || event.target.classList.contains("ornate-stage")) {
      closeGreeting();
    }
  });
  dialog.addEventListener("close", rememberGreeting); // termasuk saat ditutup dengan tombol Esc

  if (!hasSeenGreeting()) {
    showGreeting();
  }
}
