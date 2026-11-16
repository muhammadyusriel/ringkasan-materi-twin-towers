// Tampilan detail: isi lengkap satu ringkasan dan perpindahan antara daftar dan detail.

// Membuat isi ringkasan: setiap bagian yang dipisah baris kosong ("\n\n") di data menjadi satu paragraf
function createContentSection(text) {
  const content = document.createElement("div");
  content.className = "detail-content";
  const paragraphs = text.split("\n\n");
  for (const paragraph of paragraphs) {
    const item = createTextElement("p", "", paragraph);
    item.dir = "auto";
    content.appendChild(item);
  }
  return content;
}

// Membuat bagian "Poin Kunci" berupa daftar bernomor
function createKeyPointsSection(points) {
  const section = document.createElement("section");
  section.appendChild(createTextElement("h3", "detail-heading", "Poin Kunci"));

  const list = document.createElement("ol");
  list.className = "key-points";
  for (const point of points) {
    const item = createTextElement("li", "", point);
    item.dir = "auto";
    list.appendChild(item);
  }

  section.appendChild(list);
  return section;
}

// Membuat bagian "Istilah Penting": istilah tebal, artinya di bawahnya
function createTermsSection(terms) {
  const section = document.createElement("section");
  section.appendChild(createTextElement("h3", "detail-heading", "Istilah Penting"));

  const list = document.createElement("dl");
  list.className = "terms";
  for (const term of terms) {
    // Setiap pasangan istilah-arti dibungkus satu kotak supaya mudah dibedakan
    const item = document.createElement("div");
    item.className = "term-item";
    const name = createTextElement("dt", "", term.istilah);
    name.dir = "auto";
    const meaning = createTextElement("dd", "", term.arti);
    meaning.dir = "auto";
    item.appendChild(name);
    item.appendChild(meaning);
    list.appendChild(item);
  }

  section.appendChild(list);
  return section;
}

// Membuat satu bacaan pelengkap: judul (bisa diklik), penulis-tahun-terbitan, lalu alasan singkat
function createReadingItem(reading) {
  const item = document.createElement("li");
  item.className = "reading-item";

  const link = createTextElement("a", "reading-title", reading.judul);
  link.href = reading.tautan;
  link.target = "_blank"; // dibuka di tab baru, supaya halaman bab tidak tertutup
  link.rel = "noopener noreferrer";
  link.dir = "auto";
  item.appendChild(link);

  const meta = reading.penulis + " (" + reading.tahun + "). " + reading.terbitan;
  item.appendChild(createTextElement("p", "reading-meta", meta));

  const reason = createTextElement("p", "reading-reason", reading.alasan);
  reason.dir = "auto";
  item.appendChild(reason);
  return item;
}

// Membuat bagian "Bacaan Pelengkap": rujukan di luar buku ajar, diberi label supaya tidak dikira bahan kuis
function createFurtherReadingSection(readings) {
  const section = document.createElement("section");
  section.className = "further-reading";
  section.appendChild(createTextElement("h3", "detail-heading", "Bacaan Pelengkap"));
  section.appendChild(createTextElement("p", "further-reading-note", "Di luar buku ajar · bukan bahan kuis"));

  const list = document.createElement("ul");
  list.className = "reading-list";
  for (const reading of readings) {
    list.appendChild(createReadingItem(reading));
  }

  section.appendChild(list);
  return section;
}

// Membuat seluruh isi tampilan detail untuk satu ringkasan
function createDetailView(summary) {
  const detail = document.createElement("article");
  detail.className = "summary-detail";

  // Kembali ke halaman Materi, tempat kotak-kotak bab berada
  const backLink = createTextElement("a", "back-link", "← Kembali ke Materi");
  backLink.href = "#materi";
  detail.appendChild(backLink);

  if (summary.perluDicek) {
    detail.appendChild(createTextElement("span", "check-badge", "Perlu dicek"));
  }

  detail.appendChild(createTextElement("p", "card-eyebrow " + getThemeClass(summary), summary.bab)); // getThemeClass dari js/daftar.js

  const title = createTextElement("h2", "detail-title", summary.judul);
  title.dir = "auto";
  detail.appendChild(title);

  // formatReadingTime dari js/baca.js
  const meta = createTextElement("p", "detail-meta", summary.mapel + " · hlm. " + summary.sumber.halaman + " · " + formatReadingTime(summary));
  meta.dir = "auto";
  detail.appendChild(meta);

  const content = createContentSection(summary.isi);
  detail.appendChild(content);

  // Bagian yang ada di bab ini dicatat di sini, untuk menjadi tombol lompat di atas isi
  const jumpTargets = [];

  // Bagian poin kunci dan istilah hanya ditampilkan jika ada isinya
  if (summary.poinKunci.length > 0) {
    const keyPoints = createKeyPointsSection(summary.poinKunci);
    detail.appendChild(keyPoints);
    jumpTargets.push({ label: "Poin Kunci", section: keyPoints });
  }
  if (summary.istilah.length > 0) {
    const terms = createTermsSection(summary.istilah);
    detail.appendChild(terms);
    jumpTargets.push({ label: "Istilah", section: terms });
  }

  const source = "Sumber: " + formatSource(summary.sumber);
  detail.appendChild(createTextElement("p", "detail-source", source));

  // Bacaan pelengkap hanya untuk bab yang memilikinya; diletakkan setelah baris sumber buku
  // supaya jelas terpisah dari isi ringkasan
  if (summary.bacaanPelengkap !== undefined && summary.bacaanPelengkap.length > 0) {
    const furtherReading = createFurtherReadingSection(summary.bacaanPelengkap);
    detail.appendChild(furtherReading);
    jumpTargets.push({ label: "Bacaan Pelengkap", section: furtherReading });
  }

  // Kuis hanya tampil jika bab ini punya soal di data/kuis.js
  const quiz = createQuizSection(summary); // dari js/kuis.js
  if (quiz !== null) {
    detail.appendChild(quiz);
    jumpTargets.push({ label: "Kuis", section: quiz });
  }

  // Tombol lompat diletakkan tepat di atas isi; tidak ada tombol jika tidak ada bagian tujuan
  if (jumpTargets.length > 0) {
    detail.insertBefore(createJumpNav(jumpTargets), content); // dari js/baca.js
  }

  detail.appendChild(createFinishButton(summary)); // dari js/progres.js
  detail.appendChild(createChapterNav(summary));

  return detail;
}

// Membuat satu kotak tautan ke bab lain, misalnya "Berikutnya →" berisi nomor dan judul bab
function createChapterLink(target, label, className) {
  const link = document.createElement("a");
  link.className = "chapter-link " + className;
  link.href = "#" + encodeURIComponent(target.id);
  link.appendChild(createTextElement("span", "chapter-link-label", label));
  link.appendChild(createTextElement("span", "chapter-link-bab", target.bab));
  const title = createTextElement("span", "chapter-link-title", target.judul);
  title.dir = "auto";
  link.appendChild(title);
  return link;
}

// Membuat navigasi bab sebelum/berikutnya, selalu mengikuti urutan data (urutan buku)
function createChapterNav(summary) {
  const nav = document.createElement("nav");
  nav.className = "chapter-nav";
  nav.setAttribute("aria-label", "Pindah bab");

  const index = RINGKASAN.indexOf(summary); // posisi bab ini di dalam data
  const previous = RINGKASAN[index - 1];    // undefined jika ini bab pertama
  const next = RINGKASAN[index + 1];        // undefined jika ini bab terakhir

  if (previous !== undefined) {
    nav.appendChild(createChapterLink(previous, "← Sebelumnya", "chapter-link-prev"));
  }
  if (next !== undefined) {
    nav.appendChild(createChapterLink(next, "Berikutnya →", "chapter-link-next"));
  }
  return nav;
}

// Mencari satu ringkasan berdasarkan id-nya; hasilnya undefined jika tidak ada
function findSummaryById(id) {
  return RINGKASAN.find(function (summary) {
    return summary.id === id;
  });
}

// Memutar ulang animasi muncul pada sebuah tampilan (daftar atau detail)
function playEnterAnimation(element) {
  element.classList.remove("view-enter");
  void element.offsetWidth; // memaksa browser "melupakan" animasi lama agar bisa diputar lagi
  element.classList.add("view-enter");
}

// Membaca alamat (bagian setelah #), lalu menampilkan halaman menu (Beranda, Materi, ...) atau satu bab
function showCurrentView() {
  const listView = document.getElementById("list-view");
  const detailView = document.getElementById("detail-view");

  const address = decodeURIComponent(window.location.hash.slice(1)); // buang tanda "#"
  // Alamat "kuis-itt-bab-03" (dari halaman Kuis) membuka Bab 3 lalu langsung ke kuisnya
  const opensQuiz = address.startsWith(QUIZ_LINK_PREFIX); // dari js/kuis.js
  const id = opensQuiz ? address.slice(QUIZ_LINK_PREFIX.length) : address;
  const summary = findSummaryById(id);

  if (summary === undefined) {
    // Bukan alamat bab: tampilkan halaman menu yang diminta; alamat lain dianggap Beranda
    const page = getPageName(address); // dari js/menu.js
    detailView.hidden = true;
    listView.hidden = page === "beranda"; // Beranda hanya berisi bagian pembuka
    showHero(page === "beranda"); // dari js/beranda.js
    showPage(page); // dari js/menu.js
    showQuizOverview(); // dari js/kuis.js: skor terbaru setelah mengerjakan kuis
    if (page !== "beranda") {
      playEnterAnimation(listView);
    }
    window.scrollTo(0, 0); // setiap halaman mulai dari atas
    return;
  }

  detailView.textContent = "";
  detailView.appendChild(createDetailView(summary));
  listView.hidden = true;
  detailView.hidden = false;
  showHero(false); // saat membaca bab, isi bab langsung tampil di bawah bilah menu
  showPage(""); // tidak ada menu yang ditandai sedang dibuka
  playEnterAnimation(detailView);

  const quiz = detailView.querySelector(".quiz");
  if (opensQuiz && quiz !== null) {
    quiz.scrollIntoView(); // datang dari bagian Kuis: langsung tampilkan kuisnya
  } else {
    window.scrollTo(0, 0); // mulai dari atas supaya judul langsung terlihat
  }
}
