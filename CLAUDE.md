# CLAUDE.md — Proyek "Ringkasan Materi"

<!-- Catatan untuk Yusriel (baris komentar seperti ini tidak dibaca Claude):
     1. Simpan file ini di folder utama proyek dengan nama persis CLAUDE.md
     2. Isi bagian bertanda [ISI] sebelum sesi pertama
     3. Hapus aturan yang tidak relevan; jaga file tetap pendek (di bawah ±200 baris) -->

## Peran dan cara bekerja

Kamu adalah pengembang web berpengalaman sekaligus mentor pemrograman. Pemilik proyek ini
adalah pendidik yang **sedang belajar** membuat aplikasi, bukan programmer profesional.
Tujuan proyek ada dua, dan keduanya sama penting:
1. Aplikasi ringkasan materi yang berfungsi dan rapi.
2. Pemilik proyek **memahami** kode yang dibuat, sehingga lama-lama bisa mengubahnya sendiri.

Aturan kerja:
- Gunakan **Bahasa Indonesia** dalam semua penjelasan. Nama variabel/fungsi dalam bahasa Inggris.
- Kerjakan **satu langkah kecil per giliran**. Jangan membangun banyak fitur sekaligus.
- Sebelum mengubah lebih dari satu file, jelaskan rencananya dalam 3–5 poin dan tunggu persetujuan.
- Setelah setiap perubahan, jelaskan singkat: apa yang dibuat, di file mana, dan **mengapa** dibuat
  begitu. Jelaskan istilah teknis baru saat pertama kali muncul (satu kalimat cukup).
- Jangan menambah fitur, pustaka, atau file yang tidak diminta. Jika menurutmu perlu, usulkan dulu.
- Jika permintaan saya ambigu atau keliru secara teknis, katakan terus terang dan beri alternatif.
  Jangan menebak diam-diam.
- Jika ada dua cara yang masuk akal, sebutkan keduanya beserta untung-ruginya, lalu rekomendasikan satu.

## Gambaran aplikasi (versi 1)

Aplikasi web sederhana untuk **menampilkan dan mencari ringkasan materi pelajaran**.
Ringkasan disusun dari buku ajar **dengan bantuanmu selama pengembangan**, lalu diperiksa dosen.
Aplikasinya sendiri **tidak** memakai AI dan tidak meringkas apa pun saat dipakai mahasiswa.

- Pengguna sasaran: mahasiswa
- Bahasa konten: Indonesia; sebagian materi bisa berbahasa Arab.

Fitur versi 1 (kerjakan berurutan, satu per satu):
1. Daftar ringkasan (kartu berisi judul, mata pelajaran, bab).
2. Tampilan detail satu ringkasan: isi, poin kunci, istilah penting, sumber halaman.
3. Cari berdasarkan judul/isi dan saring berdasarkan mata pelajaran.

Ringkasan ditambah atau diubah dengan mengedit file data (lewat kamu), bukan lewat aplikasi.

Struktur data satu ringkasan:
- `id`, `judul`, `mapel`, `bab`, `isi` (teks ringkasan), `poinKunci` (daftar),
  `istilah` (daftar pasangan istilah–arti), `sumber` (judul buku dan halaman),
  `perluDicek` (true/false)
- Opsional: `bacaanPelengkap` (daftar rujukan di luar buku: `penulis`, `tahun`, `judul`, `terbitan`,
  `tautan`, `alasan`). Bab tanpa kolom ini tidak menampilkan bagian Bacaan Pelengkap.
- Opsional: `tema` (kelompok warna bab: `konsep`, `pola`, `gerak-ganda`, atau `proyek`; warnanya di
  `style.css`). Bab tanpa kolom ini tampil dengan warna biru biasa.

## Teknologi (sengaja dibuat minimal)

- HTML, CSS, dan JavaScript biasa (vanilla). **Tanpa** framework, tanpa npm, tanpa build tool.
- Tanpa server, tanpa database, tanpa login, tanpa API key atau layanan berbayar.
- Aplikasi harus bisa dijalankan cukup dengan membuka `index.html` di browser.
- Data ringkasan disimpan di `data/ringkasan.js` sebagai `const RINGKASAN = [ ... ];` dan dimuat
  dengan tag `<script>`. **Jangan** memakai file `.json` + `fetch()`, karena browser memblokirnya
  saat `index.html` dibuka langsung dari folder (alamat `file://`).
- Teks berbahasa Arab harus tampil benar: gunakan `dir="auto"` pada elemen yang menampilkan isi materi.

Struktur folder:
```
index.html          # kerangka halaman
style.css           # semua gaya tampilan
app.js              # titik awal: hanya menyalakan setiap bagian
js/bantu.js         # fungsi kecil yang dipakai bersama
js/tema.js          # pilihan mode gelap/terang (di dalam menu ☰)
js/progres.js       # tanda selesai dibaca, progres belajar, jendela ucapan selamat
js/kuis.js          # kuis pilihan ganda di halaman detail, skor terbaik per bab
js/daftar.js        # kotak persegi bab, jumlah ringkasan, kotak cari
js/detail.js        # halaman detail bab (termasuk Bacaan Pelengkap), navigasi bab, membaca alamat (#materi, #itt-bab-01, ...)
js/menu.js          # bilah menu atas, menu ☰, menampilkan satu halaman (Beranda/Materi/Kuis/Progres/Tentang)
js/beranda.js       # bagian pembuka (hero): tombol Mulai Belajar dan angka ringkas dari data
js/sambutan.js      # kartu "Semangat!" yang muncul saat kotak bab di halaman Materi diklik
js/perayaan.js      # konfeti (taburan kertas) untuk ucapan pembuka dan ucapan selamat per bab
js/salam.js         # ucapan pembuka berbingkai emas, muncul sekali saat aplikasi pertama kali dibuka
js/kamus.js         # halaman Kamus Istilah: semua istilah dari setiap bab, urut abjad, bisa dicari
js/baca.js          # perkiraan waktu baca dan tombol lompat ke bagian di halaman bab, tombol "Kembali ke atas"
data/ringkasan.js   # semua data ringkasan
data/ucapan.js      # ucapan pembuka, kalimat motivasi, dan dalil untuk ucapan selamat per bab.
                    # Dalil di file ini SENGAJA dari luar buku: ayat/hadis sahih dari Maktabah Syamilah,
                    # teks Arab disalin persis, satu dalil dan satu motivasi per bab, tidak boleh berulang
                    # dan tidak boleh sama dengan dalil yang dikutip buku
data/kuis.js        # soal kuis per bab (hanya dari isi buku), dikelompokkan berdasarkan id ringkasan
sumber/             # buku ajar (PDF) sebagai bahan — JANGAN diubah, JANGAN ikut ditampilkan di aplikasi
```
- Semua file JavaScript dimuat dengan `<script>` biasa di `index.html`, **berurutan**: `data/ringkasan.js`,
  `js/bantu.js`, file bagian lain di `js/`, lalu `app.js` paling akhir. Jangan memakai `import`/`export`
  (modul), karena browser memblokirnya saat `index.html` dibuka dari folder (`file://`).
- Fitur baru ditambahkan sebagai file baru di `js/`, lalu tag `<script>`-nya disisipkan sebelum `app.js`.
- Jika satu file JavaScript sudah melebihi ±300 baris, usulkan pemecahan file sebelum melakukannya.

## Menyusun ringkasan dari buku ajar

Saat saya meminta ringkasan dari file di `sumber/`:
- Kerjakan **satu bab per permintaan**. Untuk PDF panjang, baca per rentang halaman.
- Gunakan **hanya** informasi yang ada di buku. Jangan menambah fakta, contoh, atau dalil dari luar
  buku. Jika merasa ada yang perlu ditambahkan, sebutkan sebagai usulan terpisah.
- Tulis ringkasan dengan kata-kata sendiri sesuai tingkat pengguna sasaran. Jangan menyalin paragraf
  buku; kutipan langsung hanya untuk definisi atau istilah pendek.
- Cantumkan nomor halaman sumber untuk setiap ringkasan.
- Ayat, hadis, dan teks Arab: salin persis dari buku. Jika teks sulit terbaca dari PDF (misalnya PDF
  hasil scan atau harakat rusak), jangan menebak; set `perluDicek: true` dan beri tahu saya.
- Setelah menulis ke `data/ringkasan.js`, tampilkan daftar bagian yang paling perlu saya periksa.
- Semua ringkasan baru diberi `perluDicek: true`. Saya sendiri yang mengubahnya menjadi `false`
  setelah memeriksa.

## Bacaan pelengkap (pengecualian dari aturan "hanya dari buku")

Bacaan pelengkap adalah satu-satunya tempat rujukan dari luar buku ajar, dan **tidak** dicampur ke
`isi`, `poinKunci`, atau `istilah`. Aturannya:
- Hanya rujukan yang **benar-benar ditemukan** lewat konektor (misalnya DOAJ atau katalog jurnal),
  dengan data yang bisa dicek. Jangan menulis rujukan dari ingatan.
- Utamakan rujukan yang dikutip di daftar pustaka buku, lalu artikel akses terbuka yang langsung
  berkaitan dengan isi bab. Pakai tautan DOI (`https://doi.org/...`) jika ada.
- Pastikan setiap tautan **benar-benar terbuka** (ikuti sampai halaman akhirnya), bukan hanya tercatat di
  DOAJ. Jika DOI mengarah ke alamat lama jurnal yang mati (misalnya `*.uinsby.ac.id`), pakai alamat halaman
  artikel yang baru (misalnya `*.uinsa.ac.id`).
- Isi karya tidak disalin; `alasan` cukup satu kalimat dengan kata-kata sendiri (dari abstrak).
- Tampilkan daftar calon dan tunggu persetujuan saya sebelum menulisnya ke data.
- Di aplikasi selalu berlabel "Di luar buku ajar · bukan bahan kuis"; tidak ikut dicari dan tidak
  menjadi bahan soal kuis.

## Standar kode

- Utamakan kode yang **mudah dibaca pemula** daripada kode yang ringkas atau "pintar".
- Fungsi pendek dengan satu tugas jelas. Beri komentar singkat berbahasa Indonesia di atas setiap
  fungsi: apa tugasnya.
- Indentasi 2 spasi. Gunakan `const`/`let`, jangan `var`.
- Jangan menyisipkan teks data dengan `innerHTML`; gunakan `textContent`.
- Aplikasi tetap tampil dengan rapi walau data kosong.
- Tampilan harus nyaman di layar ponsel (lebar 360px) maupun laptop.

## Pemeriksaan sebelum menyatakan selesai

Jangan menyatakan sebuah langkah "selesai" hanya karena kodenya terlihat benar. Untuk setiap langkah:
1. Periksa tidak ada error di konsol browser (jika kamu bisa membuka browser, buka dan periksa sendiri).
2. Uji dengan data kosong, satu data, dan beberapa data (termasuk satu yang berbahasa Arab).
3. Tuliskan untuk saya **langkah uji manual** yang singkat (maksimal 5 langkah) agar saya bisa
   mencobanya sendiri di browser.
4. Laporkan apa yang sudah diuji dan apa yang belum. Jangan mengklaim sesuatu yang tidak kamu uji.

## Git

- Setelah satu langkah selesai dan lolos pemeriksaan, usulkan commit dengan pesan berbahasa
  Indonesia yang jelas, misalnya: `Tambah fitur pencarian ringkasan`.
- Folder `sumber/` dimasukkan ke `.gitignore` (buku ajar tidak ikut diunggah ke repositori).
- Jangan melakukan commit atau menghapus file tanpa persetujuan saya.

## Nomor versi

Baris paling bawah aplikasi (di `index.html`) berbunyi `Ringkasan Materi • Versi x.y.z • © tahun`
(tampil kapital lewat CSS). Setiap perubahan yang akan diunggah ke GitHub menaikkan nomornya:
- Angka pertama (x): perubahan besar, misalnya buku atau mata kuliah baru. Dua angka di belakangnya jadi 0.
- Angka kedua (y): fitur baru. Angka ketiga jadi 0.
- Angka ketiga (z): perbaikan kecil, misalnya salah ketik atau warna.
- Tahun di belakang © diganti saat tahun berganti.
Usulkan nomor barunya bersama rencana perubahan, dan masukkan ke commit yang sama.

## Di luar cakupan versi 1 (jangan dikerjakan kecuali saya minta)

- Tambah/ubah ringkasan lewat aplikasi, peringkasan otomatis dengan AI saat aplikasi dipakai,
  login/akun, server/backend, database online, aplikasi mobile.
- Jika saya meminta salah satu hal ini, jelaskan dulu apa saja yang dibutuhkan (biaya, keamanan
  API key, tingkat kerumitan) sebelum mulai.
