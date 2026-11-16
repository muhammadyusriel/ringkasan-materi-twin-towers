// ===== Bilah menu atas dan halaman-halaman menu =====
// Daftar menu tersembunyi dan dibuka lewat tombol ☰ di pojok kanan.
// Setiap menu membuka halamannya sendiri: alamat "#materi" menampilkan halaman Materi saja, dan seterusnya.

// Nama halaman yang bisa dibuka dari menu (sama dengan data-page di index.html)
const PAGE_NAMES = ["beranda", "materi", "kuis", "kamus", "progres", "tentang"];

// Menentukan halaman dari alamat: nama halaman yang dikenal, atau "beranda" untuk alamat lain (termasuk "#")
function getPageName(address) {
  return PAGE_NAMES.includes(address) ? address : "beranda";
}

// Menampilkan satu halaman saja; nama kosong ("") menyembunyikan semuanya (dipakai saat membaca bab)
function showPage(name) {
  const pages = document.querySelectorAll(".page[data-page]");
  for (const page of pages) {
    page.hidden = page.dataset.page !== name;
  }

  // Tandai menu halaman yang sedang dibuka, supaya terlihat beda dan dibacakan pembaca layar
  const links = document.querySelectorAll("#nav-menu a");
  for (const link of links) {
    if (link.getAttribute("href") === "#" + name) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  }
}

// Membuka atau menutup daftar menu, sekaligus memperbarui keterangan tombol ☰
function setMenuOpen(isOpen) {
  const menu = document.getElementById("nav-menu");
  const button = document.getElementById("menu-toggle");
  menu.classList.toggle("is-open", isOpen);
  button.setAttribute("aria-expanded", isOpen ? "true" : "false");
  button.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
}

// Dijalankan saat tombol ☰ diklik: membuka menu jika tertutup, menutup jika terbuka
function toggleMenu() {
  const button = document.getElementById("menu-toggle");
  const isOpen = button.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
}

// Menutup menu jika pengguna mengklik di luar daftar menu dan di luar tombol ☰
function closeMenuOnOutsideClick(event) {
  const clickedMenu = event.target.closest("#nav-menu, #menu-toggle");
  if (clickedMenu === null) {
    setMenuOpen(false);
  }
}

// Menyiapkan tombol ☰; menu juga ditutup setiap kali alamat berubah (sebuah tautan dipilih)
// atau saat pengguna mengklik di luar menu
function setupMenu() {
  document.getElementById("menu-toggle").addEventListener("click", toggleMenu);
  document.addEventListener("click", closeMenuOnOutsideClick);
  window.addEventListener("hashchange", function () {
    setMenuOpen(false);
  });
}
