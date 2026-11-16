// ===== Bagian pembuka (hero) di beranda =====
// Mengisi jumlah bab, angka ringkas, dan tombol kuning "Mulai Belajar" dari data.

// Mencari bab pertama (urutan buku) yang belum ditandai selesai; undefined jika semua sudah selesai
function findFirstUnfinished() {
  const ids = getFinishedIds(); // dari js/progres.js
  return RINGKASAN.find(function (summary) {
    return !ids.includes(summary.id);
  });
}

// Mengatur tulisan dan tujuan tombol kuning sesuai progres belajar
function updateStartButton() {
  const button = document.getElementById("hero-start");
  if (RINGKASAN.length === 0) {
    button.hidden = true; // belum ada bab yang bisa dibuka
    return;
  }

  const next = findFirstUnfinished();
  if (next === undefined) {
    // Semua bab sudah selesai: tawarkan membaca ulang dari bab pertama
    button.textContent = "Baca Ulang dari " + RINGKASAN[0].bab;
    button.href = "#" + encodeURIComponent(RINGKASAN[0].id);
  } else {
    button.textContent = countFinished() === 0 ? "Mulai Belajar" : "Lanjutkan: " + next.bab;
    button.href = "#" + encodeURIComponent(next.id);
  }
  button.hidden = false;
}

// Keliling lingkaran progres (jari-jari 28): 2 × 3,1416 × 28. Garis sepanjang ini = lingkaran penuh.
const RING_LENGTH = 175.93;

// Mengisi kartu "Lanjutkan Belajar": lingkaran progres, kalimat progres, bab berikutnya, dan tujuan kartunya
function updateResumeCard() {
  const card = document.getElementById("resume-card");
  if (RINGKASAN.length === 0) {
    card.hidden = true; // belum ada bab: kartu tidak perlu tampil
    return;
  }

  const total = RINGKASAN.length;
  const done = countFinished(); // dari js/progres.js
  const next = findFirstUnfinished();
  let title = "Lanjutkan Belajar";
  let detail = done + " dari " + total + " bab selesai";
  let nextText = "";

  if (done === 0) {
    title = "Mulai perjalanan belajar Anda";
    detail = "Belum ada bab yang ditandai selesai";
    nextText = "Mulai dari " + RINGKASAN[0].bab + ": " + RINGKASAN[0].judul;
    card.href = "#" + encodeURIComponent(RINGKASAN[0].id);
  } else if (next === undefined) {
    title = "Selamat, semua bab selesai!";
    nextText = "Lihat progres belajar Anda";
    card.href = "#progres";
  } else {
    nextText = "Berikutnya: " + next.bab + ": " + next.judul;
    card.href = "#" + encodeURIComponent(next.id);
  }

  document.getElementById("resume-title").textContent = title;
  document.getElementById("resume-detail").textContent = detail;
  document.getElementById("resume-next").textContent = nextText;
  document.getElementById("resume-percent").textContent = Math.round((done / total) * 100) + "%";
  card.hidden = false;

  // Busur biru: garis putus-putus sepanjang keliling; makin besar progres, makin sedikit bagian yang "digeser" keluar.
  // Diberi jeda sebentar supaya perubahan panjangnya terlihat beranimasi (transition di style.css).
  const fill = document.getElementById("resume-ring-fill");
  setTimeout(function () {
    fill.style.strokeDashoffset = String(RING_LENGTH * (1 - done / total));
  }, 60);
}

// Menghitung jumlah semua soal kuis milik bab-bab yang ada di data
function countQuizQuestions() {
  let total = 0;
  for (const summary of RINGKASAN) {
    const quiz = KUIS[summary.id]; // dari data/kuis.js
    if (quiz !== undefined) {
      total += quiz.soal.length;
    }
  }
  return total;
}

// Menghitung jumlah semua poin kunci dari seluruh bab
function countKeyPoints() {
  let total = 0;
  for (const summary of RINGKASAN) {
    total += summary.poinKunci.length;
  }
  return total;
}

// Menaikkan angka di sebuah elemen dari 0 sampai angka tujuan dalam waktu sekitar 1,2 detik.
// Jika perangkat memakai pengaturan "kurangi animasi", angka tujuan langsung ditulis.
function animateCount(element, target) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || target === 0) {
    element.textContent = String(target);
    return;
  }

  const duration = 1200; // milidetik
  const start = Date.now();

  // Dijalankan setiap 30 milidetik; kemajuan dihitung dari jam, jadi angka akhir selalu tepat
  const timer = setInterval(function () {
    const progress = Math.min((Date.now() - start) / duration, 1); // 0 sampai 1
    const eased = 1 - Math.pow(1 - progress, 3);                    // cepat di awal, melambat di akhir
    element.textContent = String(Math.round(target * eased));
    if (progress === 1) {
      clearInterval(timer); // berhenti setelah sampai angka tujuan
    }
  }, 30);
}

// Membuat satu angka ringkas: angka besar (berhitung naik dari 0) dengan keterangan kecil di bawahnya
function createStat(number, label) {
  const item = document.createElement("li");
  const numberElement = createTextElement("strong", "hero-stat-number", "0");
  item.appendChild(numberElement);
  item.appendChild(createTextElement("span", "hero-stat-label", label));
  animateCount(numberElement, number);
  return item;
}

// Mengisi deretan angka ringkas; disembunyikan jika data kosong
function fillHeroStats() {
  const list = document.getElementById("hero-stats");
  if (RINGKASAN.length === 0) {
    list.hidden = true;
    return;
  }
  list.textContent = "";
  list.appendChild(createStat(RINGKASAN.length, "bab ringkasan"));
  list.appendChild(createStat(countQuizQuestions(), "soal kuis"));
  list.appendChild(createStat(countKeyPoints(), "poin kunci"));
  list.hidden = false;
}

// Menampilkan atau menyembunyikan bagian pembuka (dipanggil js/detail.js saat pindah daftar ↔ detail)
function showHero(isVisible) {
  document.getElementById("hero").hidden = !isVisible;
  if (isVisible) {
    updateStartButton(); // progres bisa berubah selama membaca bab
    updateResumeCard();
  }
}

// Tulisan keterangan di bawah ilustrasi saat belum ada ikon yang dipilih
const HERO_CAPTION_HINT = "Klik atau sentuh ikon untuk melihat penjelasannya";

// Ikon yang penjelasannya sedang terbuka karena diklik atau disentuh; null berarti belum ada
let openFieldBadge = null;

// Menyorot satu ikon bidang ilmu: ikon menjadi kuning, putaran berhenti, dan namanya tampil di keterangan
function selectFieldBadge(badge) {
  const figure = document.querySelector(".hero-figure");
  for (const other of figure.querySelectorAll(".hero-badge")) {
    other.classList.remove("is-active");
  }
  badge.classList.add("is-active");
  figure.classList.add("is-paused");
  document.getElementById("hero-caption-title").textContent = badge.dataset.label; // dari data-label di index.html
}

// Membuka penjelasan satu ikon: nama dan penjelasannya tetap tampil sampai pengguna mengklik di tempat lain
function openFieldInfo(badge) {
  openFieldBadge = badge;
  selectFieldBadge(badge);
  const info = document.getElementById("hero-caption-info");
  info.textContent = badge.dataset.info; // dari data-info di index.html
  info.hidden = false;
  const caption = document.getElementById("hero-caption");
  caption.classList.add("has-info");
  caption.scrollIntoView({ block: "nearest" }); // jika kotaknya di luar layar, halaman bergeser secukupnya
}

// Mengembalikan ilustrasi seperti semula: tidak ada ikon terpilih, ikon berputar lagi, keterangan berisi petunjuk
function clearFieldBadge() {
  const figure = document.querySelector(".hero-figure");
  for (const badge of figure.querySelectorAll(".hero-badge")) {
    badge.classList.remove("is-active");
  }
  figure.classList.remove("is-paused");
  openFieldBadge = null;
  document.getElementById("hero-caption-title").textContent = HERO_CAPTION_HINT;
  const info = document.getElementById("hero-caption-info");
  info.textContent = "";
  info.hidden = true;
  document.getElementById("hero-caption").classList.remove("has-info");
}

// Memutar ikon-ikon pelan mengelilingi menara: satu putaran per 60 detik.
// Putaran berhenti selama ilustrasi disorot tetikus atau ada ikon yang dipilih.
// Jika perangkat memakai pengaturan "kurangi animasi", ikon tidak diputar sama sekali.
function startOrbit() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
  const figure = document.querySelector(".hero-figure");
  const orbit = document.querySelector(".hero-orbit");
  const badges = document.querySelectorAll(".hero-badge");
  let angle = 0;           // sudut putaran sekarang, dalam derajat
  let isHovered = false;   // apakah tetikus sedang berada di atas ilustrasi

  figure.addEventListener("mouseenter", function () {
    isHovered = true;
  });
  figure.addEventListener("mouseleave", function () {
    isHovered = false;
  });

  // Dijalankan 25 kali per detik; 360 derajat / 60 detik / 25 = 0,24 derajat setiap kali
  setInterval(function () {
    if (isHovered || figure.classList.contains("is-paused")) {
      return; // sedang berhenti
    }
    angle = (angle + 0.24) % 360;
    orbit.setAttribute("transform", "rotate(" + angle + " 220 205)"); // berputar di pusat menara
    for (const badge of badges) {
      badge.setAttribute("transform", "rotate(" + -angle + ")"); // putar balik supaya ikon tetap tegak
    }
  }, 40);
}

// Membuat satu ikon bisa dipakai dengan papan ketik: Tab untuk pindah, Enter atau Spasi untuk membuka, Esc untuk menutup
function setupBadgeKeyboard(badge) {
  badge.setAttribute("tabindex", "0");                  // bisa dijangkau tombol Tab
  badge.setAttribute("role", "button");                 // dibacakan sebagai tombol oleh pembaca layar
  badge.setAttribute("aria-label", badge.dataset.label);

  badge.addEventListener("focus", function () {
    if (openFieldBadge !== badge) {
      clearFieldBadge(); // penjelasan ikon sebelumnya ditutup
      selectFieldBadge(badge);
    }
  });

  badge.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // tanpa ini, tombol Spasi ikut menggulir halaman
      openFieldInfo(badge);
    } else if (event.key === "Escape") {
      clearFieldBadge();
      selectFieldBadge(badge); // ikon masih terfokus, jadi namanya tetap tampil
    }
  });
}

// Menyiapkan ilustrasi interaktif: sorot ikon untuk melihat namanya, klik atau sentuh untuk membuka penjelasannya
function setupHeroArt() {
  startOrbit();
  const badges = document.querySelectorAll(".hero-badge");
  for (const badge of badges) {
    setupBadgeKeyboard(badge);
    badge.addEventListener("mouseenter", function () {
      if (openFieldBadge === null) {
        selectFieldBadge(badge);
      }
    });
    badge.addEventListener("mouseleave", function () {
      if (openFieldBadge === null) {
        clearFieldBadge();
      }
    });
    badge.addEventListener("click", function () {
      openFieldInfo(badge); // di ponsel, sentuhan dianggap klik
    });
  }
  // Klik di mana pun selain ikon dan keterangannya mengembalikan ilustrasi seperti semula
  document.addEventListener("click", function (event) {
    if (event.target.closest(".hero-badge, .hero-caption") === null) {
      clearFieldBadge();
    }
  });
  // Fokus papan ketik pindah ke elemen selain ikon: juga kembali seperti semula
  document.addEventListener("focusin", function (event) {
    if (event.target.closest(".hero-badge") === null) {
      clearFieldBadge();
    }
  });
}

// Menyiapkan bagian pembuka saat halaman dibuka
function setupHero() {
  setupHeroArt();
  if (RINGKASAN.length > 0) {
    document.getElementById("hero-chapter-count").textContent = String(RINGKASAN.length);
  }
  fillHeroStats();
  updateStartButton();
  updateResumeCard();
}
