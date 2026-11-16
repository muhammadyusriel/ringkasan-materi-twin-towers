// Kamus Istilah: semua istilah dari setiap bab dalam satu daftar urut abjad, dengan kotak cari.
// Isinya diambil dari kolom "istilah" di data/ringkasan.js, jadi tidak ada teks yang disimpan di sini.

// Mengumpulkan istilah dari semua bab, lalu mengurutkannya menurut abjad.
// Istilah yang sama dari bab berbeda tetap terpisah, karena artinya bisa berbeda (misalnya "gerak ganda").
function collectGlossaryTerms() {
  const terms = [];
  for (const summary of RINGKASAN) {
    for (const term of summary.istilah) {
      terms.push({ istilah: term.istilah, arti: term.arti, bab: summary.bab, id: summary.id, judul: summary.judul });
    }
  }
  // normalizeText (dari js/daftar.js) membuat "bayānī" diurutkan seperti "bayani"; tanda baca diabaikan
  terms.sort(function (a, b) {
    return normalizeText(a.istilah).localeCompare(normalizeText(b.istilah), "id", { ignorePunctuation: true });
  });
  return terms;
}

// Mengambil huruf awal sebuah istilah untuk judul kelompok, misalnya "Bab" menjadi "B"
function getGlossaryLetter(term) {
  return normalizeText(term.istilah).charAt(0).toUpperCase();
}

// Membuat satu kotak istilah: nama istilah, artinya, dan tautan ke bab asalnya
function createGlossaryItem(term) {
  const item = document.createElement("div");
  item.className = "term-item"; // kotak yang sama dengan bagian Istilah Penting di halaman bab

  const name = createTextElement("dt", "", term.istilah);
  name.dir = "auto";
  item.appendChild(name);

  const meaning = createTextElement("dd", "", term.arti);
  meaning.dir = "auto";
  item.appendChild(meaning);

  const chapter = document.createElement("dd");
  const link = createTextElement("a", "glossary-chapter", term.bab);
  link.href = "#" + encodeURIComponent(term.id);
  link.title = term.judul;
  link.setAttribute("aria-label", "Buka " + term.bab + ": " + term.judul);
  chapter.appendChild(link);
  item.appendChild(chapter);

  return item;
}

// Menampilkan istilah yang diberikan, dikelompokkan per huruf awal
function showGlossaryList(terms) {
  const listElement = document.getElementById("glossary-list");
  listElement.textContent = ""; // kosongkan dulu isi lama

  let currentLetter = "";
  let currentGroup = null;
  for (const term of terms) {
    const letter = getGlossaryLetter(term);
    // Huruf berganti: buat judul huruf dan wadah baru
    if (letter !== currentLetter) {
      currentLetter = letter;
      listElement.appendChild(createTextElement("h3", "glossary-letter", letter));
      currentGroup = document.createElement("dl");
      currentGroup.className = "terms";
      listElement.appendChild(currentGroup);
    }
    currentGroup.appendChild(createGlossaryItem(term));
  }
}

// Menampilkan jumlah istilah yang tampil dibanding seluruh data, atau pesan yang sesuai
function showGlossaryCount(shownCount, totalCount) {
  const countElement = document.getElementById("glossary-count");

  if (totalCount === 0) {
    countElement.textContent = "Belum ada istilah.";
  } else if (shownCount === 0) {
    countElement.textContent = "Tidak ada istilah yang cocok.";
  } else if (shownCount === totalCount) {
    countElement.textContent = totalCount + " istilah tersedia";
  } else {
    countElement.textContent = "Menampilkan " + shownCount + " dari " + totalCount + " istilah";
  }
}

// Membaca kotak cari, lalu menampilkan ulang istilah yang namanya atau artinya cocok
function applyGlossarySearch(allTerms) {
  const query = normalizeText(document.getElementById("glossary-search").value.trim());

  const filtered = allTerms.filter(function (term) {
    return normalizeText(term.istilah + " " + term.arti).includes(query);
  });

  showGlossaryList(filtered);
  showGlossaryCount(filtered.length, allTerms.length);
}

// Menyiapkan halaman Kamus Istilah; kotak cari disembunyikan jika belum ada istilah
function setupGlossary() {
  const allTerms = collectGlossaryTerms();

  if (allTerms.length === 0) {
    document.getElementById("glossary-filters").hidden = true;
  } else {
    document.getElementById("glossary-search").addEventListener("input", function () {
      applyGlossarySearch(allTerms);
    });
  }

  applyGlossarySearch(allTerms);
}
