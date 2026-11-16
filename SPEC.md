# SPEC — Ringkasan Materi (versi 1)

Rencana singkat hasil wawancara. Aturan umum tetap mengikuti `CLAUDE.md`.

## Keputusan tampilan

| Hal | Keputusan |
|---|---|
| Judul aplikasi | **Ringkasan Materi**, dengan subjudul kecil *Integrasi Keilmuan Twin Towers* |
| Tata letak daftar | Kotak persegi bab: 7 per baris di laptop, 5 di tablet, 4 di ponsel (360px) — lihat **Versi 4** |
| Tampilan detail | Halaman lain disembunyikan, detail tampil penuh, ada tombol **← Kembali ke Materi** |
| Gaya | Profesional dan elegan, dominan biru, bergaya situs web (lihat **Versi 3**): bilah menu atas, bagian pembuka dengan ilustrasi garis menara kembar, judul serif (Literata dari Google Fonts, cadangan Georgia), teks isi memakai huruf bawaan perangkat |
| Warna | Latar biru sangat muda, kartu dan halaman baca putih, teks biru kehitaman, aksen biru; kuning hanya untuk tombol utama ("Mulai Belajar") dan aksen kecil |
| Animasi | Kartu muncul bergiliran saat halaman dibuka, kartu naik sedikit saat disorot, fade-slide saat pindah daftar/detail; semua mati jika perangkat memakai "kurangi animasi" |
| Mode gelap | Ya. Awalnya mengikuti pengaturan perangkat; pilihan "Mode gelap/terang" di dalam menu ☰ untuk memilih sendiri, pilihan diingat di perangkat (localStorage) |
| Font Arab | Font bawaan perangkat, tanpa unduhan (tetap jalan tanpa internet) |
| Label field `mapel` | Di layar ditulis **Mata Kuliah**; nama field di kode tetap `mapel`. Pilihan saringan Mata Kuliah **dihapus** (hanya ada satu mata kuliah); nama mata kuliah tetap tampil di baris keterangan halaman bab |

## Isi kotak bab (sejak Versi 4)

1. Kata kecil "BAB" dan nomor bab besar (misalnya "BAB 1"); judul tidak ditulis di kotak
2. Biru penuh dengan ✓ kuning di pojok jika bab sudah ditandai selesai
3. Label **Perlu dicek** (warna kuning) hanya jika `perluDicek: true`

Judul bab muncul saat kotak disorot tetikus dan di kartu "Semangat!" setelah kotak diklik.
Kotak Cari tetap mencocokkan judul **dan** isi bab.

## Isi tampilan detail

Nomor bab, judul, mata kuliah dan halaman, label *Perlu dicek* (jika ada), isi lengkap, daftar poin
kunci, daftar istilah (istilah — arti), dan sumber. Lebar teks dibatasi sekitar 68 karakter per baris.
Semua elemen teks materi memakai `dir="auto"`.

## Usulan bentuk data `sumber`

Agar buku dan halaman bisa ditampilkan terpisah:

```js
sumber: { buku: "Judul Buku", halaman: "12–20" }
```

## Urutan pengerjaan (satu langkah per giliran)

1. **Kerangka**: `index.html`, `style.css`, `app.js`, dan `data/ringkasan.js` berisi 2–3 data contoh
   (satu berbahasa Arab, ditandai jelas sebagai contoh).
2. **Fitur 1 — Daftar kartu** sesuai isi kartu di atas, termasuk pesan
   "Belum ada ringkasan." jika data kosong.
3. **Fitur 2 — Detail** dengan tombol Kembali.
4. **Fitur 3 — Cari dan saring**: kotak pencarian (judul/isi) dan pilihan Mata Kuliah di atas grid,
   termasuk pesan jika hasil pencarian kosong. (Kemudian pilihan Mata Kuliah dihapus atas keputusan pemilik
   proyek karena aplikasi hanya berisi satu mata kuliah; yang tersisa kotak Cari.)

Setiap langkah diuji (data kosong, satu data, beberapa data termasuk teks Arab), diberi langkah uji
manual, lalu diusulkan commit.

## Status

- Keempat langkah di atas selesai; data contoh sudah diganti 14 ringkasan asli dan sudah diperiksa.
- Proyek memakai Git; folder `sumber/` diabaikan lewat `.gitignore`.
- Aplikasi dibagikan ke mahasiswa sebagai halaman Artifact Claude (satu file gabungan dari file proyek).

## Versi 2 (fitur tambahan, dikerjakan satu per satu)

1. Tombol mode gelap/terang — selesai.
2. Pemecahan `app.js` menjadi `js/bantu.js`, `js/tema.js`, `js/daftar.js`, `js/detail.js` — selesai.
3. Tombol bab sebelum/berikutnya di halaman detail, selalu mengikuti urutan buku — selesai.
4. Tombol "Tandai selesai dibaca": pil "✓ Selesai" di kartu, progres "x dari 14 bab", dan ucapan selamat
   berisi kalimat motivasi serta ayat/hadis **yang dikutip buku** (rujukan + terjemahan dari buku, tanpa teks Arab;
   QS. Al-Baqarah 2:286 dan hadis Ibnu Majah dikutip sebagian dengan tanda "…", disetujui pemilik proyek).
   Isi ucapan ada di `data/ucapan.js` — selesai.
5. Kuis pilihan ganda per bab (5 soal, 4 pilihan, pembahasan + halaman buku), skor terbaik disimpan di perangkat.
   Soal disusun dari buku satu bab per giliran dan diberi tanda `perluDicek` sampai diperiksa.
   - Mesin kuis (`js/kuis.js`) dan 5 soal Bab 1 (`data/kuis.js`) — selesai.
   - Satu soal per layar, langsung dinilai (✓/✗ + warna + pembahasan); urutan pilihan tetap; label
     "Soal belum diperiksa" jika `perluDicek: true`; skor tidak ditampilkan di kartu daftar.
   - Soal Bab 2–14 (5 soal per bab, disusun dalam tiga kelompok: Bab 2–5, 6–9, 10–14) — selesai.
   - Semua 70 soal dan isi ucapan selamat sudah diperiksa pemilik proyek (`perluDicek: false`).

## Versi 3: tampilan situs web (terinspirasi tata letak situs e-learning, tanpa menyalin isi atau merek)

(Tata letak ini kemudian diganti oleh **Versi 4** di bawah.) Satu halaman panjang; urutan bagian sama dengan urutan menu. Semua bagian beranda ikut tersembunyi saat
membaca bab; bilah menu dan kaki halaman tampil di semua tampilan. Dikerjakan satu langkah per giliran — selesai.

1. **Bilah menu atas** (`js/menu.js`): logo, menu Materi · Kuis · Progres Belajar · Tentang, ikon mode
   gelap/terang; di layar ≤ 760px menu dilipat ke tombol ☰. Latar penuh tanpa efek blur (efek blur gagal
   tergambar di perangkat tanpa GPU).
2. **Bagian pembuka** (`js/beranda.js`): judul besar, tombol kuning "Mulai Belajar" (membuka bab pertama yang
   belum selesai; "Lanjutkan: Bab N" jika sudah ada progres; "Baca Ulang dari Bab 1" jika semua selesai), tombol
   "Lihat Semua Bab", angka ringkas dari data (bab, soal kuis, poin kunci), ilustrasi menara kembar.
3. **Bagian keunggulan**: empat kotak berikon (ringkasan per bab, poin kunci & istilah, kuis berpembahasan,
   progres tersimpan); teks tetap, tanpa angka pasti. Tanpa testimoni (belum ada testimoni asli).
4. **Materi dan Progres Belajar**: kartu bab dengan kotak cari; bagian Progres berisi "x dari y bab selesai (z%)",
   batang biru, dan kotak nomor bab (biru + ✓ kuning jika selesai) yang bisa diklik.
5. **Kuis, Tentang, kaki halaman**:
   - Bagian Kuis: satu baris per bab dengan skor terbaik; tombol memakai alamat `#kuis-itt-bab-NN` yang
     membuka bab lalu langsung menggulir ke kuisnya.
   - Bagian Tentang: data buku (judul, Ahmad Fauzi dkk., UINSA Press), catatan bahwa ringkasan tidak
     menggantikan buku, dan cara memakai situs.
   - Kaki halaman: logo, tautan cepat, sumber buku, tombol "Kembali ke atas" (tanpa nama penyusun).

Diterbitkan ke tautan Artifact yang sama sebagai versi 13.

Penyempurnaan setelahnya (versi 14–15): isi ringkasan ditampilkan per paragraf (pemisah `\n\n` di data,
teks tidak berubah), pencarian mengabaikan tanda pada huruf Latin (bayānī = bayani) dan menyamakan spasi,
serta pilihan Mata Kuliah dihapus.

## Versi 4: tampilan lebih sederhana (dikerjakan satu langkah per giliran — selesai)

Menggantikan "satu halaman panjang" di Versi 3.

1. **Kotak bab persegi** (`js/daftar.js`): hanya "BAB" dan nomornya, tanpa judul (nomor ditulis angka biasa,
   bukan angka Romawi).
2. **Kartu "Semangat!"** (`js/sambutan.js`): saat kotak bab di halaman Materi diklik, muncul jendela kartu
   (pita biru dengan menara kembar dan kilau kuning, pil nomor bab, "Semangat! Anda akan mempelajari", judul bab)
   dengan tombol **Mulai Membaca →** dan **Nanti saja**. Tombol lain (Mulai Belajar, kotak Progres, Kerjakan kuis,
   navigasi bab) tetap langsung membuka bab.
3. **Halaman terpisah** (`js/menu.js`, `js/detail.js`): semua menu di balik tombol ☰ di pojok kanan (semua ukuran
   layar). Setiap menu membuka halamannya sendiri: **Beranda** (hanya bagian pembuka), **Materi**, **Kuis**,
   **Progres Belajar**, **Tentang** (info buku, cara memakai, dan empat kotak keunggulan). Alamat tak dikenal
   membuka Beranda. Halaman Kuis dan Progres menampilkan pesan jika data kosong.

Diterbitkan ke tautan Artifact yang sama sebagai versi 16.

## Versi 5: Beranda lebih estetik dan interaktif (dikerjakan satu langkah per giliran — selesai)

1. **Kaki halaman dihapus** (logo, "Kembali ke atas", tautan, sumber buku); tautan tetap lewat menu ☰ dan
   sumber buku tetap di halaman Tentang.
2. **Latar hidup dan sorotan** (`style.css`, `js/beranda.js`): tiga gumpalan cahaya biru/kuning yang bergerak pelan
   dan pola titik samar di belakang bagian pembuka (tanpa efek blur, karena blur gagal tergambar di perangkat tanpa
   GPU); sorotan kuning yang tergambar di bawah "Bab demi Bab."; angka ringkas berhitung naik dari 0
   (memakai setInterval, bukan requestAnimationFrame, supaya angka akhir selalu tepat).
3. **Ilustrasi interaktif** (`js/beranda.js`): 8 ikon bidang ilmu (Ilmu Keislaman, Sains, Hukum, Ekonomi, Teknologi,
   Kesehatan, Ilmu Sosial, Humaniora) berputar pelan mengelilingi menara (satu putaran per 60 detik, diputar oleh
   JavaScript karena animasi CSS pada SVG tidak selalu bisa dihentikan). Sorot/sentuh ikon: ikon menyala kuning,
   putaran berhenti, nama bidangnya tampil di pil keterangan di bawah ilustrasi.
4. **Kartu "Lanjutkan Belajar"** (`js/beranda.js`): lingkaran progres (persentase), "x dari y bab selesai", dan bab
   berikutnya; mengarah ke Bab 1 jika belum ada progres, ke bab pertama yang belum selesai, atau ke halaman
   Progres jika semua bab selesai.

Semua gerakan mati jika perangkat memakai pengaturan "kurangi animasi". Diterbitkan sebagai versi 17.

## Versi 6: bilah atas lebih rapi dan keterangan pengembang (selesai)

1. **Tombol ☰ di kiri atas**, tepat sebelum logo dan judul; panel menu turun dari kiri. Bilah kanan kosong.
2. **Mode gelap/terang masuk ke menu**: baris terakhir menu (setelah garis pemisah), berisi ikon dan tulisan
   "Mode gelap" atau "Mode terang" (`js/tema.js`); menu tetap terbuka setelah tema diganti.
3. **Keterangan pengembang** di dasar semua halaman (termasuk halaman bab):
   "Dikembangkan oleh **Muhammad Yusriel Amien, S.Ag.** (Mahasiswa S2 Ilmu Hadis Tahun 2026 UINSA Surabaya)".
   `body` disusun sebagai kolom setinggi layar supaya baris ini selalu di dasar walau isi halaman pendek.

Diterbitkan sebagai versi 18.

4. **Judul dua baris**: "Ringkasan Materi" di atas dan "Integrasi Keilmuan Twin Towers" di bawah (`index.html`),
   dengan jarak 4px (sekitar 1 mm) antarbaris (`style.css`, `.brand-text`). Di layar ≤480px baris bawah dibuat
   sedikit lebih kecil dan rapat supaya tetap satu baris di ponsel 360px. Diterbitkan sebagai versi 19.

## Versi 7: ucapan pembuka dan ucapan selamat yang lebih meriah (selesai)

1. **Dalil baru dari luar buku** (`data/ucapan.js`): 15 dalil berbeda dari Maktabah Syamilah (8 ayat, 7 hadis sahih
   al-Bukhari/Muslim dengan nomornya). Teks Arab disalin persis, terjemahan disusun asisten. Satu dalil untuk
   ucapan pembuka (QS. Ṭāhā 20: 25–28) dan satu untuk setiap bab, ditambah 14 kalimat motivasi yang berbeda;
   tidak ada yang berulang dan tidak ada yang sama dengan dalil yang dikutip buku. Masih `perluDicek: true`.
2. **Ucapan pembuka** (`js/salam.js`): kartu berbingkai emas dengan bintang segi delapan di sudut, pita biru,
   salam "Assalamu'alaikum Warahmatullahi Wabarakatuh", sambutan, dalil, dan tombol "Bismillah, Mulai Belajar".
   Muncul sekali per perangkat (tanda `ringkasan-salam` di localStorage).
3. **Kartu ucapan selamat per bab** (`js/progres.js`): memakai bingkai emas yang sama (kelas `ornate-*` di
   `style.css`), lencana bintang dengan centang yang tergambar, "Alhamdulillah, Baarakallahu Fiikum · Bab X
   Selesai!" (versi 21; sebelumnya "Barakallah"), nama bab, motivasi, teks Arab, terjemahan, rujukan, serta tombol
   "Lanjut ke Bab berikutnya" dan "Tutup".
4. **Konfeti** (`js/perayaan.js`): 70 potong kertas emas/biru/putih jatuh di belakang kartu selama ±3–4 detik.
   Semua animasi mati jika perangkat memakai pengaturan "kurangi animasi".

## Versi 8: ringkasan lebih dalam dan Bacaan Pelengkap (uji coba di Bab 1, belum diterbitkan)

1. **Isi Bab 1 diperdalam** dari buku (hlm. 1–20): dari 3 paragraf (158 kata) menjadi 5 paragraf (381 kata),
   setiap paragraf diberi nomor halaman. Poin kunci dan istilah tetap. Bab 1 kembali `perluDicek: true`.
2. **Bacaan Pelengkap** (kolom opsional `bacaanPelengkap` di `data/ringkasan.js`, ditampilkan oleh `js/detail.js`):
   bagian terpisah di bawah baris sumber buku, berlabel "Di luar buku ajar · bukan bahan kuis". Setiap rujukan
   berisi judul bertautan DOI (tab baru), penulis, tahun, terbitan, dan satu kalimat alasan. Bab 1 berisi tiga
   artikel akses terbuka yang dicek lewat DOAJ: M. Amin Abdullah (2014, *Al-Jami'ah*), M. Syamsul Huda (2017,
   *Teosofi*), dan Husniyatus Salamah Zainiyati (2015, *Islamica*). Aturan lengkapnya di CLAUDE.md.
3. Jika uji coba disetujui, bentuk yang sama diterapkan ke bab lain satu per satu.
