// Progres belajar: tanda "selesai dibaca" per bab, bagian Progres Belajar di beranda, dan ucapan selamat.
// Daftar bab yang selesai disimpan di localStorage (di browser masing-masing mahasiswa).

const FINISHED_KEY = "ringkasan-selesai";

// Membaca daftar id bab yang sudah selesai; hasilnya selalu berupa array
function getFinishedIds() {
  try {
    const saved = JSON.parse(localStorage.getItem(FINISHED_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return []; // penyimpanan diblokir atau isinya rusak: anggap belum ada yang selesai
  }
}

// Menyimpan daftar id bab yang selesai; jika browser memblokir, cukup diabaikan
function saveFinishedIds(ids) {
  try {
    localStorage.setItem(FINISHED_KEY, JSON.stringify(ids));
  } catch (error) {
    // tanda tetap terlihat sampai halaman ditutup
  }
}

// Memeriksa apakah satu bab sudah ditandai selesai
function isFinished(id) {
  return getFinishedIds().includes(id);
}

// Menandai satu bab selesai (true) atau membatalkannya (false)
function setFinished(id, finished) {
  const ids = getFinishedIds().filter(function (savedId) {
    return savedId !== id;
  });
  if (finished) {
    ids.push(id);
  }
  saveFinishedIds(ids);
}

// Menghitung berapa bab di data yang sudah selesai
function countFinished() {
  const ids = getFinishedIds();
  return RINGKASAN.filter(function (summary) {
    return ids.includes(summary.id);
  }).length;
}

// Menyembunyikan (atau menampilkan lagi) batang biru, kotak nomor bab, dan keterangan warna
function setProgressDetailsHidden(isHidden) {
  document.querySelector(".progress-bar").hidden = isHidden;
  document.getElementById("progress-chapters").hidden = isHidden;
  document.querySelector(".progress-legend").hidden = isHidden;
}

// Memperbarui halaman Progres Belajar: kalimat "x dari y bab selesai (z%)", batang biru, dan kotak nomor bab
function updateProgress() {
  const section = document.getElementById("progres");
  section.hidden = false;
  if (RINGKASAN.length === 0) {
    // Halaman Progres tetap tampil rapi dengan pesan, bukan halaman kosong
    document.getElementById("progress-text").textContent = "Belum ada bab.";
    setProgressDetailsHidden(true);
    return;
  }
  setProgressDetailsHidden(false);
  const done = countFinished();
  const percent = Math.round((done / RINGKASAN.length) * 100);
  document.getElementById("progress-text").textContent =
    done + " dari " + RINGKASAN.length + " bab selesai (" + percent + "%)";
  document.getElementById("progress-fill").style.width = percent + "%";
  showProgressChapters();
}

// Membuat satu kotak nomor bab yang bisa diklik untuk membuka bab itu
function createChapterTile(summary, finishedIds) {
  const done = finishedIds.includes(summary.id);
  const link = document.createElement("a");
  link.className = (done ? "chapter-tile is-done " : "chapter-tile ") + getThemeClass(summary); // getThemeClass dari js/daftar.js
  link.href = "#" + encodeURIComponent(summary.id);
  link.title = summary.judul; // judul bab muncul saat disorot tetikus
  link.setAttribute("aria-label", summary.bab + ": " + summary.judul + (done ? " (selesai)" : " (belum selesai)"));
  link.appendChild(createTextElement("span", "", summary.bab));
  if (done) {
    // Lingkaran kuning kecil berisi ✓ di pojok kanan atas
    const check = createTextElement("span", "tile-check", "✓");
    check.setAttribute("aria-hidden", "true");
    link.appendChild(check);
  }

  const item = document.createElement("li");
  item.appendChild(link);
  return item;
}

// Menggambar ulang semua kotak nomor bab sesuai progres terbaru
function showProgressChapters() {
  const list = document.getElementById("progress-chapters");
  const ids = getFinishedIds();
  list.textContent = "";
  for (const summary of RINGKASAN) {
    list.appendChild(createChapterTile(summary, ids));
  }
}

// Mengubah tulisan dan gaya tombol sesuai status bab
function updateFinishButton(button, id) {
  const done = isFinished(id);
  button.textContent = done ? "✓ Sudah selesai dibaca" : "✓ Tandai selesai dibaca";
  button.classList.toggle("is-done", done);
  button.setAttribute("aria-pressed", done ? "true" : "false");
}

// Membuat tombol "Tandai selesai dibaca" untuk halaman detail
function createFinishButton(summary) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "finish-button";
  updateFinishButton(button, summary.id);

  button.addEventListener("click", function () {
    const nowFinished = !isFinished(summary.id);
    setFinished(summary.id, nowFinished);
    updateFinishButton(button, summary.id);
    updateProgress();
    applyFilters(); // menggambar ulang kartu supaya pil "✓ Selesai" ikut berubah
    if (nowFinished) {
      showCongrats(summary);
    }
  });
  return button;
}

// Mengisi dan menampilkan jendela ucapan selamat untuk satu bab
function showCongrats(summary) {
  const index = RINGKASAN.indexOf(summary);
  const allDone = countFinished() === RINGKASAN.length;

  // Ucapan dipilih bergiliran berdasarkan urutan bab
  const quote = UCAPAN.dalil[index % UCAPAN.dalil.length];
  const motivation = UCAPAN.motivasi[index % UCAPAN.motivasi.length];

  // Tulisan kecil di atas judul: sama untuk semua kartu, termasuk saat seluruh bab selesai
  document.getElementById("congrats-kicker").textContent = "Alhamdulillah, Baarakallahu Fiikum";
  document.getElementById("congrats-title").textContent = allDone
    ? "Seluruh " + RINGKASAN.length + " Bab Selesai!"
    : summary.bab + " Selesai!";
  document.getElementById("congrats-chapter").textContent = summary.judul;
  document.getElementById("congrats-motivation").textContent = allDone ? UCAPAN.semuaSelesai : motivation;
  document.getElementById("congrats-arab").textContent = quote.arab;
  document.getElementById("congrats-quote-text").textContent = quote.teks;
  document.getElementById("congrats-quote-ref").textContent = quote.rujukan + " · " + quote.catatan;

  // Tombol "Lanjut" hanya muncul jika masih ada bab berikutnya
  const next = RINGKASAN[index + 1];
  const nextLink = document.getElementById("congrats-next");
  if (next !== undefined) {
    nextLink.href = "#" + encodeURIComponent(next.id);
    nextLink.textContent = "Lanjut ke " + next.bab + " →";
    nextLink.hidden = false;
  } else {
    nextLink.hidden = true;
  }

  const dialog = document.getElementById("congrats-dialog");
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", ""); // browser lama: tampilkan tanpa latar gelap
  }
  // Fokus ke tombol pertama tanpa menggulir, supaya layar pendek tetap memperlihatkan bagian atas kartu
  const firstButton = nextLink.hidden ? document.getElementById("congrats-close") : nextLink;
  firstButton.focus({ preventScroll: true });
  dialog.scrollTop = 0;
  launchConfetti(document.getElementById("congrats-confetti")); // dari js/perayaan.js
}

// Menutup jendela ucapan selamat
function closeCongrats() {
  const dialog = document.getElementById("congrats-dialog");
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

// Menyiapkan tombol-tombol di jendela ucapan selamat
function setupCongrats() {
  const dialog = document.getElementById("congrats-dialog");
  document.getElementById("congrats-close").addEventListener("click", closeCongrats);
  document.getElementById("congrats-next").addEventListener("click", closeCongrats);
  // Klik di area kosong di sekitar kartu juga menutup jendela
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog || event.target.classList.contains("ornate-stage")) {
      closeCongrats();
    }
  });
}
