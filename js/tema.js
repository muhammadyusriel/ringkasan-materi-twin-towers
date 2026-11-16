// ===== Mode gelap/terang =====
// Pilihan disimpan di localStorage (penyimpanan kecil di browser masing-masing pengguna).
// Tanpa pilihan tersimpan, tampilan mengikuti pengaturan perangkat.
const THEME_KEY = "ringkasan-tema";
const deviceDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");

// Membaca pilihan tema yang pernah disimpan ("dark", "light", atau null jika belum ada)
function getSavedTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch (error) {
    return null; // sebagian browser memblokir penyimpanan, misalnya mode samaran
  }
}

// Menyimpan pilihan tema; jika browser memblokir, cukup diabaikan
function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    // pilihan tetap berlaku sampai halaman ditutup
  }
}

// Mengembalikan tema yang sedang terlihat: pilihan pengguna, atau pengaturan perangkat
function getActiveTheme() {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === "dark" || chosen === "light") {
    return chosen;
  }
  return deviceDarkQuery.matches ? "dark" : "light";
}

// Mengubah ikon dan tulisan pilihan tema di menu: selalu menawarkan mode yang berlawanan.
// data-mode dibaca style.css untuk memilih ikon: bulan saat terang, matahari saat gelap.
function updateThemeButton() {
  const button = document.getElementById("theme-toggle");
  const isDark = getActiveTheme() === "dark";
  button.dataset.mode = isDark ? "dark" : "light";
  document.getElementById("theme-label").textContent = isDark ? "Mode terang" : "Mode gelap";
}

// Memasang tema: atribut data-theme di elemen <html> dibaca oleh style.css
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  updateThemeButton();
}

// Dijalankan saat tombol diklik: pindah ke mode sebaliknya dan ingat pilihannya
function toggleTheme() {
  const nextTheme = getActiveTheme() === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  saveTheme(nextTheme);
}

// Menyiapkan tombol tema saat halaman dibuka
function setupTheme() {
  const saved = getSavedTheme();
  if (saved === "dark" || saved === "light") {
    applyTheme(saved);
  } else {
    updateThemeButton();
  }
  document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
  // Jika pengguna belum memilih, ikuti perubahan pengaturan perangkat secara langsung
  deviceDarkQuery.addEventListener("change", updateThemeButton);
}
