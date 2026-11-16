// Bantuan membaca: perkiraan waktu baca dan tombol lompat ke bagian di halaman bab, serta tombol "Kembali ke atas".

// Kecepatan baca yang dipakai untuk perkiraan. Ini asumsi umum, bukan angka dari buku.
const WORDS_PER_MINUTE = 200;

// Tombol "Kembali ke atas" baru muncul setelah halaman digulir sejauh ini (dalam piksel)
const BACK_TO_TOP_DISTANCE = 600;

// Menghitung jumlah kata dalam sebuah teks
function countWords(text) {
  const words = text.trim().split(/\s+/); // pecah di setiap spasi atau baris baru
  return words[0] === "" ? 0 : words.length;
}

// Memperkirakan lama membaca satu bab dalam menit, minimal 1 menit.
// Yang dihitung: isi, poin kunci, dan istilah; Bacaan Pelengkap dan kuis tidak termasuk.
function estimateReadingMinutes(summary) {
  let total = countWords(summary.isi);
  for (const point of summary.poinKunci) {
    total += countWords(point);
  }
  for (const term of summary.istilah) {
    total += countWords(term.istilah + " " + term.arti);
  }
  return Math.max(1, Math.ceil(total / WORDS_PER_MINUTE));
}

// Membuat teks waktu baca untuk baris keterangan bab, misalnya "± 4 menit baca"
function formatReadingTime(summary) {
  return "± " + estimateReadingMinutes(summary) + " menit baca";
}

// Menampilkan tombol hanya jika halaman sudah digulir cukup jauh
function updateBackToTop() {
  const button = document.getElementById("back-to-top");
  button.hidden = window.scrollY < BACK_TO_TOP_DISTANCE;
}

// Menentukan cara menggeser halaman: halus, atau langsung jika perangkat memakai pengaturan "kurangi animasi"
function getScrollBehavior() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return reduceMotion ? "auto" : "smooth";
}

// Membawa pembaca ke atas halaman
function scrollBackToTop() {
  window.scrollTo({ top: 0, behavior: getScrollBehavior() });
}

// Membawa pembaca ke satu bagian bab. Fokus ikut pindah ke judulnya,
// supaya tombol Tab berikutnya berlanjut dari bagian itu.
function jumpToSection(section) {
  section.scrollIntoView({ behavior: getScrollBehavior() });
  const heading = section.querySelector("h3");
  heading.tabIndex = -1; // bisa diberi fokus oleh kode, tetapi tidak menambah langkah tombol Tab
  heading.focus({ preventScroll: true });
}

// Membuat deretan tombol lompat dari daftar { label, section }.
// Sengaja memakai tombol, bukan tautan "#...": alamat setelah tanda # dipakai untuk menentukan halaman yang tampil.
function createJumpNav(targets) {
  const nav = document.createElement("nav");
  nav.className = "jump-nav";
  nav.setAttribute("aria-label", "Lompat ke bagian");

  for (const target of targets) {
    const button = createTextElement("button", "jump-button", target.label);
    button.type = "button";
    button.addEventListener("click", function () {
      jumpToSection(target.section);
    });
    nav.appendChild(button);
  }
  return nav;
}

// Menyiapkan tombol "Kembali ke atas": diperiksa setiap kali halaman digulir
function setupBackToTop() {
  document.getElementById("back-to-top").addEventListener("click", scrollBackToTop);
  window.addEventListener("scroll", updateBackToTop);
  updateBackToTop();
}
