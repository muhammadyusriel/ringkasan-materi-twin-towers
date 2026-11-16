// Tampilan daftar: kotak persegi bab, jumlah ringkasan, dan kotak cari.

// Menampilkan jumlah ringkasan yang tampil dibanding seluruh data, atau pesan yang sesuai
function showSummaryCount(shownCount, totalCount) {
  const countElement = document.getElementById("summary-count");

  if (totalCount === 0) {
    countElement.textContent = "Belum ada ringkasan.";
  } else if (shownCount === 0) {
    countElement.textContent = "Tidak ada ringkasan yang cocok.";
  } else if (shownCount === totalCount) {
    countElement.textContent = totalCount + " ringkasan tersedia";
  } else {
    countElement.textContent = "Menampilkan " + shownCount + " dari " + totalCount + " ringkasan";
  }
}

// Memecah "Bab 3" menjadi kata "Bab" dan nomor "3".
// Jika teksnya tidak diawali "Bab", seluruh teks dipakai sebagai nomor.
function splitChapterLabel(bab) {
  const match = bab.match(/^(Bab)\s+(.+)$/i); // (Bab) spasi (sisanya = nomor)
  if (match === null) {
    return { word: "", number: bab };
  }
  return { word: match[1], number: match[2] };
}

// Membuat nama class warna tema sebuah bab, misalnya "theme-pola"; kosong jika bab tidak punya tema
function getThemeClass(summary) {
  return summary.tema === undefined ? "" : "theme-" + summary.tema;
}

// Membuat satu kotak persegi bab (berupa tautan): hanya kata "BAB" dan nomornya.
// Judul bab tidak ditulis di kotak, tetapi tetap dibacakan pembaca layar dan muncul saat disorot tetikus.
function createSummaryCard(summary) {
  const done = isFinished(summary.id); // dari js/progres.js

  // Seluruh kotak adalah tautan; mengkliknya mengubah alamat menjadi #id-ringkasan
  const link = document.createElement("a");
  link.className = "card-link";
  link.href = "#" + encodeURIComponent(summary.id);
  link.title = summary.judul;
  link.setAttribute("aria-label", summary.bab + ": " + summary.judul + (done ? " (selesai dibaca)" : ""));

  const card = document.createElement("article");
  card.className = (done ? "summary-card is-done " : "summary-card ") + getThemeClass(summary);

  const label = splitChapterLabel(summary.bab);
  card.appendChild(createTextElement("span", "card-word", label.word));
  card.appendChild(createTextElement("span", "card-number", label.number));

  // Lingkaran kuning berisi ✓ di pojok kanan atas jika bab sudah ditandai selesai
  if (done) {
    const check = createTextElement("span", "tile-check", "✓");
    check.setAttribute("aria-hidden", "true");
    card.appendChild(check);
  }

  // Label hanya muncul jika ringkasan belum diperiksa
  if (summary.perluDicek) {
    card.appendChild(createTextElement("span", "check-badge", "Perlu dicek"));
  }

  link.appendChild(card);
  return link;
}

// Menampilkan semua kartu ringkasan di dalam wadah daftar
function showSummaryList(summaries) {
  const listElement = document.getElementById("summary-list");
  listElement.textContent = ""; // kosongkan dulu isi lama

  for (let i = 0; i < summaries.length; i++) {
    const card = createSummaryCard(summaries[i]);
    // Urutan kartu untuk animasi muncul bergiliran (dibatasi 12 agar tidak terlalu lama)
    card.style.setProperty("--i", Math.min(i, 12));
    listElement.appendChild(card);
  }
}

// Menyamakan bentuk teks sebelum dibandingkan, supaya pencarian tidak gagal hanya karena
// huruf besar/kecil, tanda pada huruf Latin, harakat, bentuk alif, atau jenis spasi yang berbeda
function normalizeText(text) {
  return text
    .toLowerCase()                              // "Bab" dan "bab" dianggap sama
    .normalize("NFD")                           // pisahkan huruf dari tandanya: "ā" menjadi "a" + garis atas
    .replace(/[̀-ͯ]/g, "")            // buang tanda huruf Latin: "bayānī" menjadi "bayani"
    .replace(/[ً-ٰٟ]/g, "")      // buang harakat: tanwin, fathah, kasrah, dammah, syaddah, sukun, dll.
    .replace(/ـ/g, "")                     // buang tatwil (garis pemanjang huruf: ـ)
    .replace(/[أإآ]/g, "ا") // samakan أ إ آ menjadi ا
    .replace(/\s+/g, " ");                     // spasi ganda, baris baru, dan pemisah paragraf dianggap satu spasi
}

// Memeriksa apakah judul atau isi ringkasan mengandung kata yang dicari
function matchesSearch(summary, query) {
  if (query === "") {
    return true; // kotak cari kosong: semua ringkasan cocok
  }
  const text = normalizeText(summary.judul + " " + summary.isi);
  return text.includes(query);
}

// Membaca kotak cari, lalu menampilkan ulang kartu yang cocok
function applyFilters() {
  const query = normalizeText(document.getElementById("search-input").value.trim());

  const filtered = RINGKASAN.filter(function (summary) {
    return matchesSearch(summary, query);
  });

  showSummaryList(filtered);
  showSummaryCount(filtered.length, RINGKASAN.length);
}

// Menyiapkan kotak cari; kotak cari dan keterangan warna disembunyikan jika data masih kosong
function setupFilters() {
  if (RINGKASAN.length === 0) {
    document.getElementById("filters").hidden = true;
    document.getElementById("theme-legend").hidden = true;
    return;
  }

  // "input": setiap kali huruf diketik atau dihapus
  document.getElementById("search-input").addEventListener("input", applyFilters);
}

// Kartu muncul bergiliran hanya saat halaman pertama kali dibuka,
// supaya tidak berkedip setiap kali pengguna mengetik di kotak cari
function animateFirstLoad() {
  const listElement = document.getElementById("summary-list");
  listElement.classList.add("animate-in");
  setTimeout(function () {
    listElement.classList.remove("animate-in");
  }, 1500);
}
