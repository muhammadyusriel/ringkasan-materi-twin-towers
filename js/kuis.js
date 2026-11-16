// Kuis pilihan ganda di halaman detail: satu soal per layar, langsung dinilai,
// skor terbaik tiap bab disimpan di localStorage (di browser masing-masing mahasiswa).
// Di bagian bawah file: daftar kuis semua bab untuk bagian Kuis di beranda.

const QUIZ_KEY = "ringkasan-kuis";
const QUIZ_LINK_PREFIX = "kuis-"; // alamat "#kuis-itt-bab-03" membuka Bab 3 langsung di bagian kuisnya

// Membaca semua skor terbaik, berupa objek { "itt-bab-01": 4, ... }
function getBestScores() {
  try {
    const saved = JSON.parse(localStorage.getItem(QUIZ_KEY));
    return saved !== null && typeof saved === "object" ? saved : {};
  } catch (error) {
    return {};
  }
}

// Menyimpan skor jika lebih tinggi dari skor terbaik sebelumnya
function saveBestScore(id, score) {
  const scores = getBestScores();
  if (scores[id] === undefined || score > scores[id]) {
    scores[id] = score;
    try {
      localStorage.setItem(QUIZ_KEY, JSON.stringify(scores));
    } catch (error) {
      // skor tetap tampil sampai halaman ditutup
    }
  }
}

// Menulis baris "Skor terbaik Anda: x/y" (atau kosong jika belum pernah mengerjakan)
function updateBestScoreText(element, id, total) {
  const best = getBestScores()[id];
  element.textContent = best === undefined ? "" : "Skor terbaik Anda: " + best + "/" + total;
  element.hidden = best === undefined;
}

// Membuat tombol bergaya kuis (Mulai, Soal berikutnya, Ulangi)
function createQuizButton(text, onClick) {
  const button = createTextElement("button", "quiz-button", text);
  button.type = "button";
  button.addEventListener("click", onClick);
  return button;
}

// Membuat bagian kuis untuk satu bab; hasilnya null jika bab ini belum punya soal
function createQuizSection(summary) {
  const quiz = KUIS[summary.id];
  if (quiz === undefined || quiz.soal.length === 0) {
    return null;
  }

  const section = document.createElement("section");
  section.className = "quiz";
  section.appendChild(createTextElement("h3", "detail-heading", "Kuis " + summary.bab + " · " + quiz.soal.length + " soal"));
  if (quiz.perluDicek) {
    section.appendChild(createTextElement("span", "check-badge", "Soal belum diperiksa"));
  }

  const best = createTextElement("p", "quiz-best", "");
  updateBestScoreText(best, summary.id, quiz.soal.length);
  section.appendChild(best);

  // Kotak tempat soal berganti-ganti; awalnya berisi ajakan dan tombol "Mulai kuis"
  const body = document.createElement("div");
  body.className = "quiz-body";
  body.appendChild(createTextElement("p", "quiz-intro", "Uji pemahaman Anda tentang bab ini. Setiap jawaban langsung dinilai dan diberi pembahasan."));
  body.appendChild(createQuizButton("Mulai kuis", function () {
    // "state" menyimpan keadaan kuis yang sedang berjalan
    const state = { id: summary.id, soal: quiz.soal, index: 0, correct: 0, body: body, best: best };
    renderQuestion(state);
  }));
  section.appendChild(body);
  return section;
}

// Menampilkan soal ke-(state.index + 1) beserta pilihan jawabannya
function renderQuestion(state) {
  const item = state.soal[state.index];
  state.body.textContent = "";
  state.body.appendChild(createTextElement("p", "quiz-progress", "Soal " + (state.index + 1) + " dari " + state.soal.length));

  const question = createTextElement("p", "quiz-question", item.pertanyaan);
  question.dir = "auto";
  state.body.appendChild(question);

  const options = document.createElement("div");
  options.className = "quiz-options";
  const feedback = document.createElement("div");
  feedback.className = "quiz-feedback";
  feedback.setAttribute("aria-live", "polite"); // pembaca layar membacakan hasil penilaian

  item.pilihan.forEach(function (text, choice) {
    const button = createTextElement("button", "quiz-option", text);
    button.type = "button";
    button.dir = "auto";
    button.addEventListener("click", function () {
      answerQuestion(state, choice, options, feedback);
    });
    options.appendChild(button);
  });

  state.body.appendChild(options);
  state.body.appendChild(feedback);
}

// Menilai pilihan: tandai benar/salah, tampilkan pembahasan, lalu tombol lanjut
function answerQuestion(state, choice, options, feedback) {
  const item = state.soal[state.index];
  const buttons = options.querySelectorAll(".quiz-option");
  const isCorrect = choice === item.jawaban;
  if (isCorrect) {
    state.correct += 1;
  }

  // Kunci semua pilihan; tanda ✓/✗ ditambahkan supaya tidak hanya mengandalkan warna
  buttons.forEach(function (button, index) {
    button.disabled = true;
    if (index === item.jawaban) {
      button.classList.add("is-correct");
      button.textContent = "✓ " + button.textContent;
    } else if (index === choice) {
      button.classList.add("is-wrong");
      button.textContent = "✗ " + button.textContent;
    }
  });

  feedback.appendChild(createTextElement("p", isCorrect ? "quiz-verdict is-correct" : "quiz-verdict is-wrong", isCorrect ? "Benar" : "Kurang tepat"));
  const explanation = createTextElement("p", "quiz-explanation", item.pembahasan + " (hlm. " + item.halaman + ")");
  explanation.dir = "auto";
  feedback.appendChild(explanation);

  const isLast = state.index === state.soal.length - 1;
  const next = createQuizButton(isLast ? "Lihat hasil" : "Soal berikutnya →", function () {
    if (isLast) {
      renderResult(state);
    } else {
      state.index += 1;
      renderQuestion(state);
    }
  });
  feedback.appendChild(next);
  next.focus(); // pengguna keyboard bisa langsung menekan Enter
}

// Menampilkan skor akhir, menyimpan skor terbaik, dan tombol "Ulangi kuis"
function renderResult(state) {
  const total = state.soal.length;
  saveBestScore(state.id, state.correct);
  updateBestScoreText(state.best, state.id, total);

  let message = "Coba baca ulang ringkasan dan poin kuncinya, lalu ulangi kuis.";
  if (state.correct === total) {
    message = "Sempurna! Semua jawaban Anda benar.";
  } else if (state.correct >= Math.ceil(total * 0.6)) {
    message = "Bagus. Periksa kembali pembahasan soal yang belum tepat.";
  }

  state.body.textContent = "";
  state.body.appendChild(createTextElement("p", "quiz-score", "Anda menjawab benar " + state.correct + " dari " + total + " soal"));
  state.body.appendChild(createTextElement("p", "quiz-intro", message));
  state.body.appendChild(createQuizButton("Ulangi kuis", function () {
    state.index = 0;
    state.correct = 0;
    renderQuestion(state);
  }));
}

// ===== Bagian Kuis di beranda: satu baris per bab =====

// Membuat satu baris daftar kuis: nomor bab, judul, skor terbaik, dan tombol ke kuis bab itu
function createQuizRow(summary, quiz, best) {
  const attempted = best !== undefined;
  const row = document.createElement("li");
  row.className = "quiz-row";
  row.appendChild(createTextElement("span", "card-eyebrow " + getThemeClass(summary), summary.bab)); // getThemeClass dari js/daftar.js

  const title = createTextElement("span", "quiz-row-title", summary.judul);
  title.dir = "auto";
  row.appendChild(title);

  const scoreText = attempted ? "★ " + best + "/" + quiz.soal.length : "Belum dikerjakan";
  row.appendChild(createTextElement("span", attempted ? "quiz-row-score is-done" : "quiz-row-score", scoreText));

  const link = createTextElement("a", "quiz-row-link", attempted ? "Ulangi →" : "Kerjakan →");
  link.href = "#" + QUIZ_LINK_PREFIX + encodeURIComponent(summary.id);
  link.setAttribute("aria-label", (attempted ? "Ulangi kuis " : "Kerjakan kuis ") + summary.bab);
  row.appendChild(link);
  return row;
}

// Menggambar ulang bagian Kuis dengan skor terbaru; disembunyikan jika belum ada bab yang punya soal
function showQuizOverview() {
  const section = document.getElementById("kuis");
  const list = document.getElementById("quiz-list");
  const scores = getBestScores();
  let total = 0;     // jumlah bab yang punya kuis
  let attempted = 0; // jumlah kuis yang sudah pernah dikerjakan

  list.textContent = "";
  for (const summary of RINGKASAN) {
    const quiz = KUIS[summary.id];
    if (quiz !== undefined && quiz.soal.length > 0) {
      total += 1;
      if (scores[summary.id] !== undefined) {
        attempted += 1;
      }
      list.appendChild(createQuizRow(summary, quiz, scores[summary.id]));
    }
  }

  if (total === 0) {
    // Halaman Kuis tetap tampil rapi dengan pesan, bukan halaman kosong
    document.getElementById("quiz-summary").textContent = "Belum ada kuis.";
    list.hidden = true;
    section.hidden = false;
    return;
  }
  list.hidden = false;
  document.getElementById("quiz-summary").textContent = attempted + " dari " + total + " kuis sudah dikerjakan";
  section.hidden = false;
}
