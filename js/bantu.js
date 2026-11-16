// Fungsi kecil yang dipakai bersama oleh file lain.
// Dimuat lebih dulu daripada daftar.js dan detail.js.

// Membuat satu elemen HTML berisi teks, lengkap dengan nama class-nya
function createTextElement(tag, className, text) {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = text;
  return element;
}

// Membuat teks sumber, misalnya "Buku Contoh, hlm. 1–5"
function formatSource(source) {
  return source.buku + ", hlm. " + source.halaman;
}
