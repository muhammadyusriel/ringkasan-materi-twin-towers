// ===== Kartu "Semangat!" =====
// Saat kotak bab di bagian Materi diklik, bab tidak langsung dibuka.
// Muncul dulu kartu berisi nomor dan judul bab; bab terbuka setelah "Mulai Membaca" diklik.

// Mengisi kartu dengan nomor dan judul bab, lalu menampilkannya di tengah layar
function showWelcome(summary) {
  document.getElementById("welcome-bab").textContent = summary.bab;
  document.getElementById("welcome-title").textContent = summary.judul;
  document.getElementById("welcome-start").href = "#" + encodeURIComponent(summary.id);

  const dialog = document.getElementById("welcome-dialog");
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", ""); // browser lama: tampilkan tanpa latar gelap
  }
  document.getElementById("welcome-start").focus(); // pengguna keyboard bisa langsung menekan Enter
}

// Menutup kartu tanpa membuka bab
function closeWelcome() {
  const dialog = document.getElementById("welcome-dialog");
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

// Dijalankan saat sesuatu di daftar bab diklik: jika yang diklik kotak bab, tampilkan kartu dulu
function handleChapterClick(event) {
  const link = event.target.closest(".card-link");
  if (link === null) {
    return; // yang diklik bukan kotak bab
  }
  const summary = findSummaryById(decodeURIComponent(link.hash.slice(1))); // dari js/detail.js
  if (summary === undefined) {
    return; // tidak dikenal: biarkan tautan bekerja seperti biasa
  }
  event.preventDefault(); // jangan langsung pindah ke halaman bab
  showWelcome(summary);
}

// Menyiapkan kartu: klik kotak bab, tombol "Mulai Membaca", "Nanti saja", dan klik di latar gelap
function setupWelcome() {
  const dialog = document.getElementById("welcome-dialog");
  // Satu pendengar klik untuk seluruh daftar, karena kotak-kotaknya digambar ulang setiap kali mencari
  document.getElementById("summary-list").addEventListener("click", handleChapterClick);
  // "Mulai Membaca" adalah tautan ke bab; kartu cukup ditutup, lalu tautan membuka babnya
  document.getElementById("welcome-start").addEventListener("click", closeWelcome);
  document.getElementById("welcome-later").addEventListener("click", closeWelcome);
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) {
      closeWelcome(); // klik di latar gelap (di luar kartu) juga menutup
    }
  });
}
