// Titik awal aplikasi.
// Semua fungsi ada di folder js/ dan sudah dimuat lebih dulu oleh index.html,
// jadi file ini cukup menyalakan setiap bagian secara berurutan.

// Titik awal aplikasi: dijalankan sekali saat halaman dibuka
setupTheme();
setupMenu();
setupHero();
setupCongrats();
setupWelcome();
setupFilters();
setupGlossary();
setupBackToTop();
updateProgress();
animateFirstLoad();
applyFilters();
showCurrentView();
setupGreeting(); // paling akhir, supaya ucapan pembuka tampil di atas halaman yang sudah siap

// Setiap kali alamat berubah (kartu diklik, Kembali, atau tombol Back browser)
window.addEventListener("hashchange", showCurrentView);
