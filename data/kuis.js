// Soal kuis pilihan ganda per bab, dikelompokkan berdasarkan id ringkasan (lihat data/ringkasan.js).
// Setiap soal: pertanyaan, 4 pilihan, jawaban (nomor pilihan yang benar, dihitung dari 0),
// pembahasan, dan halaman buku tempat jawabannya dapat dicek.
// Soal disusun HANYA dari isi buku ajar. perluDicek: true berarti soal belum diperiksa.
// Bab yang belum punya soal cukup tidak dicantumkan di sini; bagian kuisnya tidak akan tampil.

const KUIS = {
  "itt-bab-01": {
    perluDicek: false,
    soal: [
      {
        pertanyaan: "Menurut Bab 1, dikotomi antara ilmu agama dan ilmu umum di perguruan tinggi Islam berakar pada apa?",
        pilihan: [
          "Warisan sejarah pendidikan Islam klasik dan pengaruh sistem pendidikan kolonial",
          "Kebijakan kurikulum yang muncul setelah IAIN berubah menjadi UIN",
          "Penolakan para ulama klasik terhadap ilmu-ilmu rasional",
          "Kurangnya jumlah dosen ilmu umum di perguruan tinggi Islam"
        ],
        jawaban: 0,
        pembahasan: "Buku menyebut warisan sejarah pendidikan Islam klasik dan pengaruh sistem pendidikan kolonial sebagai penyebab ilmu keagamaan dan ilmu empiris-rasional ditempatkan di dua kutub yang seolah tidak berhubungan, sehingga lulusan memiliki kompetensi parsial.",
        halaman: "4"
      },
      {
        pertanyaan: "Dalam model Integrated Twin Towers, apa yang dilambangkan oleh jembatan penghubung kedua menara?",
        pilihan: [
          "Ilmu agama berkedudukan lebih tinggi daripada ilmu umum",
          "Ilmu agama dan ilmu umum dapat berinteraksi secara mutualistik dan saling memperkaya",
          "Seluruh isi ilmu umum harus diislamkan terlebih dahulu",
          "Pemisahan yang tegas antara fakultas agama dan fakultas umum"
        ],
        jawaban: 1,
        pembahasan: "Jembatan penyambung melambangkan bahwa ilmu agama dan ilmu lainnya, yang berkembang bersamaan dengan status sejajar, dapat berinteraksi secara mutualistik dan memperkaya tradisi keilmuan keduanya.",
        halaman: "5"
      },
      {
        pertanyaan: "Bab 1 mengutip panduan UIN Alauddin Makassar tentang tiga aspek utama yang sebaiknya dicakup integrasi keilmuan. Apa saja?",
        pilihan: [
          "Pengajaran, penelitian, dan pengabdian",
          "Teks, konteks, dan interpretasi",
          "Ontologi, epistemologi, dan aksiologi",
          "Kurikulum, dosen, dan mahasiswa"
        ],
        jawaban: 2,
        pembahasan: "Integrasi keilmuan sebaiknya mencakup ontologi, epistemologi, dan aksiologi. Artinya, integrasi tidak sekadar memperluas wawasan, tetapi juga menyatukan objek kajian, metode, dan tujuan pengetahuan.",
        halaman: "3–4"
      },
      {
        pertanyaan: "Bagaimana Bab 1 menjelaskan ilmu naqliyah?",
        pilihan: [
          "Ilmu hasil akal, observasi, dan metode ilmiah yang terbuka untuk direvisi",
          "Ilmu yang lahir dari pertemuan dua disiplin di jembatan penghubung",
          "Ilmu tentang tata cara penelitian lapangan",
          "Ilmu wahyu yang bersumber dari teks suci seperti Al-Qur'an dan Hadis dan bersifat normatif"
        ],
        jawaban: 3,
        pembahasan: "Ilmu wahyu (naqliyah) bersumber dari teks-teks suci seperti Al-Qur'an dan Hadis, dianggap absolut dan otoritatif, serta bersifat normatif. Pilihan pertama adalah ciri ilmu rasional (aqliyah).",
        halaman: "18"
      },
      {
        pertanyaan: "Kata \"integrasi\" berasal dari bahasa Latin integratio. Apa arti akar katanya, integer?",
        pilihan: [
          "Bersatu dalam keragaman",
          "Utuh atau penuh",
          "Menara yang kokoh",
          "Jembatan penghubung"
        ],
        jawaban: 1,
        pembahasan: "Akar kata integer berarti \"utuh\" atau \"penuh\", sedangkan integrare berarti \"membuat menjadi utuh\" atau \"menggabungkan kembali bagian-bagian yang terpisah\".",
        halaman: "13–14"
      }
    ]
  },

  "itt-bab-02": {
    perluDicek: false,
    soal: [
      {
        pertanyaan: "Menurut Bab 2, supaya integrasi tidak jatuh menjadi sinkretisme yang dangkal, dialog kritis harus dilakukan di tingkat apa?",
        pilihan: [
          "Tingkat administrasi, dengan menggabungkan fakultas agama dan fakultas umum",
          "Tingkat kurikulum, dengan menambahkan ayat pada setiap mata kuliah sains",
          "Tingkat epistemologi, yaitu teori tentang pengetahuan itu sendiri",
          "Tingkat metode, dengan menyeragamkan cara meneliti semua disiplin"
        ],
        jawaban: 2,
        pembahasan: "Integrasi yang otentik menuntut dialog kritis di tingkat paling fundamental, yaitu epistemologi: bagaimana kita tahu, apa sumber pengetahuan yang sah, dan bagaimana validitasnya diuji. Tanpa itu, integrasi menjadi sekadar \"tempelan\" ayat pada temuan sains.",
        halaman: "24"
      },
      {
        pertanyaan: "Dalam tipologi Mohammed Abed Al-Jabiri, nalar yang berpusat pada teks (terutama Al-Qur'an dan Sunnah) dengan logika analogi (qiyas) disebut nalar apa?",
        pilihan: [
          "Nalar burhani",
          "Nalar bayani",
          "Nalar 'irfani",
          "Nalar tauhidi"
        ],
        jawaban: 1,
        pembahasan: "Nalar bayani berpusat pada teks; kata bayan berarti penjelasan. Logika yang dipakai adalah analogi (qiyas), dan realitas harus tunduk pada interpretasi teks.",
        halaman: "27"
      },
      {
        pertanyaan: "Menurut Bab 2, nalar 'irfani bertumpu pada apa?",
        pilihan: [
          "Pengalaman batin langsung, seperti kashf, dhawq, dan mushahadah",
          "Akal, logika, dan observasi empiris",
          "Analogi terhadap preseden yang ada di dalam teks",
          "Perhitungan matematis dan eksperimen laboratorium"
        ],
        jawaban: 0,
        pembahasan: "Nalar 'irfani adalah epistemologi kaum sufi: pengetahuan spiritual diperoleh lewat pengalaman batin langsung. Kelemahannya, sifatnya subjektif sehingga sulit diverifikasi secara publik.",
        halaman: "29"
      },
      {
        pertanyaan: "Bagaimana Bab 2 merumuskan hubungan tiga sumber ilmu: wahyu, akal, dan pengalaman?",
        pilihan: [
          "Wahyu menyediakan data empiris, akal memberi tujuan, dan pengalaman memberi logika",
          "Ketiganya sama-sama sumber data empiris yang bisa saling menggantikan",
          "Akal menggantikan peran wahyu dalam ilmu modern, sedangkan pengalaman hanya pelengkap",
          "Wahyu memberi kerangka makna dan tujuan, akal memberi alat analisis, dan pengalaman memberi data dari dunia nyata"
        ],
        jawaban: 3,
        pembahasan: "Wahyu memberikan kerangka makna dan tujuan (aksiologi), akal menyediakan alat analisis dan logika (metodologi), dan pengalaman menyediakan data serta bukti dari dunia nyata (empirisme).",
        halaman: "31–32"
      },
      {
        pertanyaan: "Bab 2 ditutup dengan profil ulul albab sebagai lulusan ideal UIN Sunan Ampel. Apa ciri utamanya?",
        pilihan: [
          "Menguasai sains modern tetapi memisahkannya dari nilai agama",
          "Mendalami ilmu agama tetapi menjauhi tantangan modernitas",
          "Memadukan aktivitas zikir dan pikir secara harmonis",
          "Mengutamakan keterampilan teknis di atas pemahaman teori"
        ],
        jawaban: 2,
        pembahasan: "Ulul albab adalah kaum intelektual yang memadukan zikir dan pikir secara harmonis. Buku menyebut profil ini sebagai antitesis pendidikan sekuler yang kering spiritualitas maupun pendidikan agama tradisional yang gagap terhadap modernitas.",
        halaman: "36–38"
      }
    ]
  },

  "itt-bab-03": {
    perluDicek: false,
    soal: [
      {
        pertanyaan: "Bab 3 menegaskan bahwa model menara kembar bukan islamisasi ilmu pengetahuan. Lalu disebut apa?",
        pilihan: [
          "Islamisasi nalar",
          "Sekularisasi ilmu",
          "Arabisasi kurikulum",
          "Penyeragaman disiplin"
        ],
        jawaban: 0,
        pembahasan: "Model ini disebut \"islamisasi nalar\": disiplin keislaman, sosial-humaniora, serta sains dan teknologi diberi keleluasaan berkembang, lalu pada saatnya dipertemukan untuk berdialog dan \"saling sapa\".",
        halaman: "42"
      },
      {
        pertanyaan: "Bab 3 merumuskan learning outcome lulusan dalam tiga hal. Apa saja?",
        pilihan: [
          "Kecepatan, ketepatan, dan kepatuhan",
          "Kekayaan intelektual, kematangan spiritual, dan kearifan perilaku",
          "Hafalan, ijazah, dan sertifikat",
          "Kepemimpinan, kewirausahaan, dan daya saing"
        ],
        jawaban: 1,
        pembahasan: "Kekayaan intelektual membentuk kepribadian smart (cerdas), kematangan spiritual membentuk kepribadian honourable (bermartabat), dan kearifan perilaku membentuk kepribadian pious (berbudi luhur).",
        halaman: "43–44"
      },
      {
        pertanyaan: "Dalam siklus integrasi tridharma yang dijelaskan Bab 3, apa yang menjadi titik awal?",
        pilihan: [
          "Publikasi ilmiah",
          "Hibah penelitian",
          "Magang di industri",
          "Pengajaran"
        ],
        jawaban: 3,
        pembahasan: "Siklusnya: pengajaran sebagai titik awal, penelitian memperkaya pengajaran, pengabdian berbasis riset menghasilkan bahan ajar atau modul, dan hasil akhirnya adalah kompetensi lulusan.",
        halaman: "47"
      },
      {
        pertanyaan: "Manakah yang termasuk strategi integrasi Twin Tower dalam pengabdian kepada masyarakat menurut Bab 3?",
        pilihan: [
          "Memisahkan kegiatan pengabdian dari hasil penelitian",
          "Menjadikan pengabdian sebagai kegiatan sosial di luar kurikulum",
          "Menjadikan pengabdian bagian dari kurikulum, misalnya melalui MBKM, KKN Tematik, atau Service Learning",
          "Menyerahkan pengabdian sepenuhnya kepada mahasiswa tanpa keterlibatan dosen"
        ],
        jawaban: 2,
        pembahasan: "Strateginya: menjadikan pengabdian bagian dari kurikulum, mendorong dosen dan mahasiswa merancang program berbasis riset, dan mengintegrasikan hibah pengabdian dengan penelitian internal. Pengabdian menjadi bagian dari siklus akademik, bukan sekadar kegiatan sosial.",
        halaman: "46–47"
      },
      {
        pertanyaan: "Contoh implementasi integrasi tridharma di Bab 3 diambil dari mata kuliah Kewirausahaan. Apa proyeknya?",
        pilihan: [
          "Pemberdayaan UMKM melalui teknologi digital",
          "Pendirian koperasi syariah di kampus",
          "Pelatihan bahasa Arab untuk pedagang pasar",
          "Pembuatan aplikasi zakat untuk masjid"
        ],
        jawaban: 0,
        pembahasan: "Proyeknya adalah pemberdayaan UMKM melalui teknologi digital dengan project-based learning, dalam empat tahap: pembelajaran di kelas, penelitian kolaboratif, implementasi proyek, serta evaluasi yang hasilnya menjadi bahan ajar baru.",
        halaman: "48–50"
      }
    ]
  },

  "itt-bab-04": {
    perluDicek: false,
    soal: [
      {
        pertanyaan: "Apa kegiatan inti praktikum kelompok di Bab 4?",
        pilihan: [
          "Mewawancarai mahasiswa yang sudah mengalami experiential learning",
          "Mewawancarai dosen yang sudah menerapkan pembelajaran, penelitian, atau pengabdian berbasis ITT",
          "Menganalisis dokumen artikel lalu membuat analisis SWOT",
          "Mengamati video pembelajaran sesuai disiplin ilmu"
        ],
        jawaban: 1,
        pembahasan: "Pada praktikum Bab 4, mahasiswa melakukan wawancara terstruktur dengan dosen di fakultasnya yang sudah menerapkan ITT, lalu menganalisis praktik tersebut, mempresentasikan hasilnya, merefleksikannya, dan memberi rekomendasi. Pilihan lain adalah kegiatan praktikum di bab lain.",
        halaman: "54"
      },
      {
        pertanyaan: "Di semua jenjang praktikum Bab 4, berapa dosen yang diwawancarai?",
        pilihan: [
          "1 dosen",
          "3 dosen",
          "4 dosen",
          "2 dosen"
        ],
        jawaban: 3,
        pembahasan: "Petunjuk jenjang S1, S2, dan S3 sama-sama meminta mahasiswa mewawancarai 2 dosen yang diyakini sudah melakukan pembelajaran, penelitian, atau pengabdian berbasis Integrasi Twin Tower.",
        halaman: "54–55"
      },
      {
        pertanyaan: "Berapa artikel jurnal yang harus dicari mahasiswa jenjang S2 dalam praktikum Bab 4?",
        pilihan: [
          "3 artikel jurnal nasional terakreditasi",
          "Minimal 2 artikel jurnal internasional bereputasi dan 2 artikel jurnal nasional terakreditasi",
          "1 artikel jurnal internasional",
          "Tidak perlu mencari artikel jurnal"
        ],
        jawaban: 0,
        pembahasan: "Jenjang S2 menyusun transkrip wawancara dan mencari 3 artikel jurnal nasional terakreditasi. Ketentuan \"minimal 2 artikel jurnal internasional bereputasi dan 2 nasional terakreditasi\" berlaku untuk jenjang S3.",
        halaman: "55–56"
      },
      {
        pertanyaan: "Apa yang dikumpulkan mahasiswa jenjang S3 di akhir praktikum Bab 4?",
        pilihan: [
          "Poster edukatif dan narasi singkat",
          "Peta konsep dan refleksi pengalaman pribadi",
          "Draf esai opini (untuk media sosial atau surat kabar) dan slide",
          "Laporan naratif 750–1000 kata"
        ],
        jawaban: 2,
        pembahasan: "Jenjang S3 membuat artikel opini analisis kritis tentang pola integrasi yang sudah berjalan, lalu mengumpulkan draf esai opini di media sosial atau surat kabar beserta slide.",
        halaman: "56"
      },
      {
        pertanyaan: "Menurut rubrik Bab 4, agar mendapat skor tertinggi pada aspek kualitas bahasa dan laporan, tingkat kemiripan dan AI tidak boleh lebih dari berapa persen?",
        pilihan: [
          "20%",
          "30%",
          "40%",
          "50%"
        ],
        jawaban: 0,
        pembahasan: "Skor 4 diberikan jika tingkat kemiripan dan AI tidak lebih dari 20% dan tidak ada kesalahan tata bahasa. Batas 30% untuk skor 3 dan 40% untuk skor 2.",
        halaman: "57–58"
      }
    ]
  },

  "itt-bab-05": {
    perluDicek: false,
    soal: [
      {
        pertanyaan: "Apa dua pilar utama integrasi teori dan lapangan menurut Bab 5?",
        pilihan: [
          "Ceramah di kelas dan ujian tertulis",
          "Nalar bayani dan nalar burhani",
          "Hafalan teks dan diskusi kelompok",
          "Pembelajaran berbasis pengalaman (experiential learning) dan pembelajaran aktif (inquiry-based learning)"
        ],
        jawaban: 3,
        pembahasan: "UIN Sunan Ampel mewujudkan integrasi teori dan lapangan melalui dua pilar utama: experiential learning dan inquiry-based learning.",
        halaman: "60"
      },
      {
        pertanyaan: "Masalah pendidikan tinggi apa yang hendak dijawab oleh pola integrasi teori dan lapangan?",
        pilihan: [
          "Materi yang terkotak-kotak, kurangnya integrasi hard skill dan soft skill, serta dominasi ceramah pasif satu arah",
          "Terlalu banyak kegiatan praktikum di laboratorium",
          "Kurangnya jumlah mata kuliah agama di semua program studi",
          "Mahasiswa terlalu sering mengikuti magang"
        ],
        jawaban: 0,
        pembahasan: "Penyampaian materi yang terkotak-kotak, kurangnya integrasi hard skill dan soft skill, serta dominasi ceramah pasif satu arah menghambat berpikir kritis, partisipasi aktif, dan efektivitas belajar mahasiswa.",
        halaman: "60, 62–63"
      },
      {
        pertanyaan: "Dalam contoh Praktik Kerja Lapangan (PKL) di lembaga keuangan syariah, apa yang dilakukan mahasiswa?",
        pilihan: [
          "Menjual produk keuangan syariah kepada nasabah",
          "Menganalisis penerapan akad syariah dan membandingkan teori fikih muamalah dengan praktik di lapangan",
          "Menghafal daftar akad syariah dari buku teks",
          "Menyusun laporan keuangan tahunan lembaga tersebut"
        ],
        jawaban: 1,
        pembahasan: "Mahasiswa menganalisis penerapan akad-akad syariah di lembaga tersebut dan menyusun laporan yang membandingkan teori fikih muamalah dengan praktik di lapangan. Ini melatih analisis kritis dan pemecahan masalah.",
        halaman: "64–65"
      },
      {
        pertanyaan: "Dalam Kerangka Kualifikasi Integrasi Keilmuan (KKIK) yang dibahas Bab 5, apa fokus kompetensi lulusan S1?",
        pilihan: [
          "Memecahkan permasalahan melalui riset terapan",
          "Mengembangkan dan menciptakan pengetahuan baru",
          "Mengombinasikan atau menghubungkan berbagai domain pengetahuan",
          "Menghafal teori dari setiap disiplin ilmu"
        ],
        jawaban: 2,
        pembahasan: "Lulusan S1 diharapkan setidaknya setara jenjang 6 KKIK dengan fokus \"mengombinasikan\" atau \"menghubungkan\". Fokus \"memecahkan permasalahan\" untuk S2, dan \"mengembangkan dan menciptakan pengetahuan baru\" untuk S3.",
        halaman: "69, 73–74"
      },
      {
        pertanyaan: "Menurut Bab 5, apa yang membedakan riset terapan dari riset dasar?",
        pilihan: [
          "Riset terapan hanya dilakukan di laboratorium",
          "Riset terapan tidak memerlukan teori sama sekali",
          "Riset terapan hanya boleh dilakukan mahasiswa S3",
          "Riset terapan berorientasi pada penyelesaian masalah nyata atau inovasi yang berdampak langsung, bukan pada teori murni"
        ],
        jawaban: 3,
        pembahasan: "Riset terapan berorientasi pada penyelesaian masalah nyata atau pengembangan inovasi yang berdampak langsung di lapangan, berbeda dengan riset dasar yang fokus pada pengembangan teori murni.",
        halaman: "72–73"
      }
    ]
  },

  "itt-bab-06": {
    perluDicek: false,
    soal: [
      {
        pertanyaan: "Dalam praktikum Bab 6, siapa yang diwawancarai mahasiswa?",
        pilihan: [
          "2 dosen yang sudah menerapkan pembelajaran berbasis ITT",
          "2 mahasiswa dari mata kuliah berbeda yang diyakini sudah mengalami experiential learning",
          "Pimpinan fakultas dan ketua program studi",
          "Pelaku UMKM yang pernah didampingi kampus"
        ],
        jawaban: 1,
        pembahasan: "Pada praktikum Bab 6, wawancara terstruktur dilakukan dengan mahasiswa yang sudah mengalami experiential learning dan inquiry, yaitu 2 mahasiswa dari mata kuliah yang berbeda. Berbeda dengan Bab 4 yang mewawancarai dosen.",
        halaman: "78–80"
      },
      {
        pertanyaan: "Apa yang dikumpulkan mahasiswa jenjang S1 di akhir praktikum Bab 6?",
        pilihan: [
          "Draf esai opini dan slide",
          "Transkrip wawancara saja",
          "Draf book chapter",
          "Laporan tertulis, refleksi pengalaman pribadi, dan slide"
        ],
        jawaban: 3,
        pembahasan: "Jenjang S1 membuat catatan lapangan, melaporkannya di kelas dengan sintesis nilai wahyu dan rasionalitas ilmiah, lalu mengumpulkan laporan tertulis, refleksi pengalaman pribadi, dan slide.",
        halaman: "78–79"
      },
      {
        pertanyaan: "Berapa artikel jurnal yang harus dicari mahasiswa jenjang S2 dalam praktikum Bab 6?",
        pilihan: [
          "2 artikel jurnal nasional terakreditasi",
          "3 artikel jurnal nasional terakreditasi",
          "Minimal 2 artikel jurnal internasional bereputasi dan 2 artikel jurnal nasional terakreditasi",
          "1 artikel jurnal internasional"
        ],
        jawaban: 0,
        pembahasan: "Jenjang S2 menyusun transkrip wawancara dan mencari 2 artikel jurnal nasional terakreditasi. Ketentuan \"minimal 2 internasional bereputasi dan 2 nasional terakreditasi\" berlaku untuk S3. Perhatikan: jumlah untuk S2 di Bab 6 (2 artikel) berbeda dengan Bab 4 (3 artikel).",
        halaman: "79–80"
      },
      {
        pertanyaan: "Menurut sistematika laporan Bab 6, lampiran apa yang membedakan laporan S2 dan S3?",
        pilihan: [
          "S2 melampirkan foto kegiatan, S3 melampirkan daftar hadir",
          "S2 dan S3 sama-sama tidak memakai lampiran",
          "S2 melampirkan transkrip wawancara, S3 melampirkan draf esai kritis",
          "S2 melampirkan draf esai kritis, S3 melampirkan transkrip wawancara"
        ],
        jawaban: 2,
        pembahasan: "Laporan S2 dan S3 sama-sama memuat bagian \"Temuan dan Analisis\". Bedanya ada di lampiran: S2 melampirkan transkrip wawancara, sedangkan S3 melampirkan draf esai kritis.",
        halaman: "81"
      },
      {
        pertanyaan: "Menurut rubrik Bab 6, bagaimana nilai akhir praktikum dihitung?",
        pilihan: [
          "Skor yang diperoleh dikali 4",
          "Skor yang diperoleh dikali 100, lalu dibagi skor maksimal 16",
          "Skor yang diperoleh dibagi jumlah anggota kelompok",
          "Langsung memakai jumlah skor tanpa diolah"
        ],
        jawaban: 1,
        pembahasan: "Skor maksimal penilaian adalah 16. Nilai yang diperoleh = skor yang diperoleh × 100 ÷ skor maksimal.",
        halaman: "82"
      }
    ]
  },

  "itt-bab-07": {
    perluDicek: false,
    soal: [
      {
        pertanyaan: "Dalam bangunan keilmuan integrated twin towers, apa yang menjadi fondasinya?",
        pilihan: [
          "Filsafat Yunani dan logika Aristoteles",
          "Sains modern dan metode eksperimen",
          "Al-Qur'an dan Hadis",
          "Kurikulum nasional pendidikan tinggi"
        ],
        jawaban: 2,
        pembahasan: "Fondasinya adalah Al-Qur'an dan Hadis sebagai landasan profetik. Keduanya menjadi pedoman spiritual dan moral sekaligus sumber inspirasi dan kerangka nilai bagi seluruh pengembangan ilmu, sehingga ilmu tidak dikembangkan secara bebas nilai (value-free).",
        halaman: "87–88"
      },
      {
        pertanyaan: "Di lengkung penghubung, satu disiplin menjadi subject matter dan disiplin lain menjadi approach. Dalam kajian Ekonomi Islam, bagaimana pembagiannya?",
        pilihan: [
          "Ekonomi menjadi subject matter, sedangkan fiqh/syariah menjadi approach atau kerangka normatif",
          "Fiqh menjadi subject matter, sedangkan ekonomi menjadi approach",
          "Keduanya sama-sama menjadi subject matter tanpa approach",
          "Sosiologi menjadi subject matter, sedangkan ekonomi menjadi approach"
        ],
        jawaban: 0,
        pembahasan: "Dalam Ekonomi Islam, ekonomi menjadi pokok bahasan utama (subject matter), dan fiqh/syariah menjadi pendekatan atau kerangka normatif (approach). Bandingkan dengan Sosiologi Agama: agama menjadi subject matter dan sosiologi menjadi approach.",
        halaman: "92–93"
      },
      {
        pertanyaan: "Menurut Bab 7, apa perbedaan fokus sosiologi dan fiqh?",
        pilihan: [
          "Sosiologi berfokus pada teks suci, fiqh berfokus pada data statistik",
          "Keduanya sama-sama berfokus pada \"apa yang seharusnya\"",
          "Sosiologi hanya mengkaji sejarah, fiqh hanya mengkaji ibadah",
          "Sosiologi berfokus pada \"apa yang terjadi\" dan \"mengapa\", fiqh berfokus pada \"apa yang seharusnya\" menurut hukum Islam"
        ],
        jawaban: 3,
        pembahasan: "Sosiologi mempelajari masyarakat secara empiris, dengan fokus pada apa yang terjadi dan mengapa. Fiqh bersifat normatif-preskriptif, dengan fokus pada apa yang seharusnya atau benar secara hukum menurut Islam.",
        halaman: "95–96"
      },
      {
        pertanyaan: "Manakah yang termasuk ciri khas model integrasi transdisipliner menurut Bab 7?",
        pilihan: [
          "Selalu berawal dari pertanyaan teoretis satu disiplin ilmu",
          "Melibatkan pemangku kepentingan non-akademik, seperti pembuat kebijakan, praktisi, dan komunitas lokal",
          "Hanya melibatkan dosen dan mahasiswa di dalam kampus",
          "Menjaga batas-batas disiplin ilmu tetap kaku"
        ],
        jawaban: 1,
        pembahasan: "Empat ciri transdisipliner: berorientasi pada masalah dunia nyata, melampaui batas disiplin ilmu, melibatkan pemangku kepentingan non-akademik, serta menciptakan pengetahuan baru dan terapan.",
        halaman: "100"
      },
      {
        pertanyaan: "Bab 7 menyebut satu tantangan integrasi berupa sikap akademisi yang nyaman dengan disiplinnya sendiri dan menganggap disiplin lain \"asing\". Tantangan ini disebut apa?",
        pilihan: [
          "Kurikulum yang terfragmentasi",
          "Keterbatasan sumber daya",
          "Ego disipliner",
          "Struktur institusional yang siloed"
        ],
        jawaban: 2,
        pembahasan: "Ego disipliner adalah kecenderungan akademisi merasa nyaman dengan disiplinnya sendiri, menganggap disiplin lain asing atau kurang relevan, bahkan merasa superior atau inferior. Sikap ini menghambat kesediaan untuk belajar dan berkolaborasi.",
        halaman: "103–104"
      }
    ]
  },

  "itt-bab-08": {
    perluDicek: false,
    soal: [
      {
        pertanyaan: "Apa kegiatan inti praktikum Bab 8?",
        pilihan: [
          "Mewawancarai 2 dosen yang menerapkan ITT",
          "Mewawancarai 2 mahasiswa yang mengalami experiential learning",
          "Melakukan observasi lapangan di desa binaan",
          "Menganalisis dokumen artikel tentang kajian antardisipliner, lalu membuat analisis SWOT"
        ],
        jawaban: 3,
        pembahasan: "Praktikum Bab 8 berupa analisis dokumen artikel tentang kajian antardisipliner, dilanjutkan analisis SWOT, presentasi, refleksi, dan rekomendasi. Wawancara dosen adalah kegiatan Bab 4, dan wawancara mahasiswa adalah kegiatan Bab 6.",
        halaman: "114"
      },
      {
        pertanyaan: "Apa yang dibuat mahasiswa jenjang S1 setelah membaca dokumen 1–2 dalam praktikum Bab 8?",
        pilihan: [
          "Draf book chapter",
          "Peta konsep tentang kelebihan dan kekurangan pembelajaran antardisipliner",
          "Transkrip wawancara",
          "Artikel opini untuk surat kabar"
        ],
        jawaban: 1,
        pembahasan: "Jenjang S1 membaca dokumen 1–2, membuat peta konsep tentang kelebihan dan kekurangan pembelajaran antardisipliner, lalu melaporkannya di kelas.",
        halaman: "115"
      },
      {
        pertanyaan: "Selain membuat peta konsep dari dokumen 1, 2, dan 3, apa tugas tambahan jenjang S2 dalam praktikum Bab 8?",
        pilihan: [
          "Menyusun draf book chapter",
          "Mewawancarai pengelola program studi",
          "Menemukan potensi masalah pada ketiga dokumen dan menawarkan alternatif solusi",
          "Membuat poster edukatif"
        ],
        jawaban: 2,
        pembahasan: "Jenjang S2 membaca tiga dokumen, membuat peta konsep kelebihan dan kekurangan pembelajaran antardisipliner, lalu menemukan potensi masalah pada ketiga dokumen dan menawarkan alternatif solusi.",
        halaman: "115"
      },
      {
        pertanyaan: "Produk apa yang disusun mahasiswa jenjang S3 dalam praktikum Bab 8?",
        pilihan: [
          "Artikel opini pendek berisi analisis SWOT tentang penelitian interdisipliner, dikompilasi dalam draf book chapter",
          "Peta konsep dari dokumen 1–2",
          "Laporan wawancara dengan 2 dosen",
          "Video dokumenter kegiatan pengabdian"
        ],
        jawaban: 0,
        pembahasan: "Jenjang S3 membuat sintesis pola penelitian interdisipliner dan transdisipliner, lalu menyusun artikel opini pendek berisi analisis SWOT tentang penelitian interdisipliner yang dikompilasi dalam draf book chapter.",
        halaman: "116"
      },
      {
        pertanyaan: "Berdasarkan Bab 7, pendekatan praktikum Bab 8 menekankan penguatan model integratif dalam bentuk apa?",
        pilihan: [
          "Hafalan teks dan ujian tertulis",
          "Pemisahan tegas antara ilmu agama dan ilmu umum",
          "Ceramah satu arah di kelas",
          "Relasi antardisipliner, transdisipliner, dan pendekatan berbasis kompleksitas"
        ],
        jawaban: 3,
        pembahasan: "Praktikum Bab 8 menekankan strategi integrasi teori dan lapangan serta penguatan model integratif dalam bentuk relasi antardisipliner, transdisipliner, dan pendekatan berbasis kompleksitas.",
        halaman: "113–114"
      }
    ]
  },

  "itt-bab-09": {
    perluDicek: false,
    soal: [
      {
        pertanyaan: "Siapa tokoh yang mengembangkan metode double movement (gerak ganda) yang dibahas di Bab 9?",
        pilihan: [
          "Fazlur Rahman",
          "Mohammed Abed Al-Jabiri",
          "Emilio Betti",
          "Michael Polanyi"
        ],
        jawaban: 0,
        pembahasan: "Istilah double movement berasal dari pemikiran hermeneutik Fazlur Rahman (1919–1988). Rahman memang dipengaruhi teori hermeneutik Barat seperti Emilio Betti, tetapi metode ini adalah gagasan Rahman sendiri.",
        halaman: "120–122"
      },
      {
        pertanyaan: "Dalam definisi operasional di bidang pendidikan dan penelitian, apa yang dimaksud gerak maju (forward movement)?",
        pilihan: [
          "Menelusuri data lapangan kembali ke sumber teks agama",
          "Menghafal teori tanpa mengujinya",
          "Menyalin temuan penelitian orang lain",
          "Mengambil teori atau teks sebagai titik awal, lalu menguji atau memproyeksikannya ke fenomena lapangan"
        ],
        jawaban: 3,
        pembahasan: "Gerak maju berangkat dari teori atau teks, lalu diuji atau diproyeksikan ke lapangan agar hasilnya kontekstual. Sebaliknya, gerak mundur berangkat dari fenomena empiris lalu ditelusuri ke sumber teoretis atau teks agama.",
        halaman: "122, 125"
      },
      {
        pertanyaan: "Menurut Bab 9, apa manfaat gerak mundur (backward movement)?",
        pilihan: [
          "Mempercepat pengumpulan data survei",
          "Membantu menemukan illat (rasio atau sebab) suatu teks dan menghindarkan penafsiran literal",
          "Menggantikan kebutuhan akan data lapangan",
          "Menghapus perbedaan antara nilai universal dan hukum konkret"
        ],
        jawaban: 1,
        pembahasan: "Gerak mundur menggali latar sosial dan budaya saat teks atau teori lahir. Dengan begitu mahasiswa bisa membedakan nilai universal (seperti keadilan dan kemaslahatan) dari hukum konkret, menghindari penafsiran literal, dan menemukan illat suatu teks.",
        halaman: "126–127"
      },
      {
        pertanyaan: "Mengapa double movement disebut berlangsung dalam siklus dialektis?",
        pilihan: [
          "Karena teori dan data hanya digabungkan satu kali di akhir penelitian",
          "Karena hanya memakai data lapangan tanpa teori",
          "Karena teori diuji, dikontekstualisasi, dianalisis secara historis, dan diterapkan kembali berulang kali sehingga teori dan data saling menyesuaikan",
          "Karena penelitian berhenti setelah gerak maju selesai"
        ],
        jawaban: 2,
        pembahasan: "Bab 9 menegaskan bahwa double movement bukan sekadar satu kali kombinasi, melainkan siklus reflektif: teori dan data saling memperkaya dan menyesuaikan. Contohnya, hambatan pada zakat via fintech mendorong kajian ulang teks dan sejarah zakat, lalu lahir usulan mekanisme distribusi alternatif.",
        halaman: "128"
      },
      {
        pertanyaan: "Dalam rancangan langkah praktis penelitian double movement, apa langkah pertama yang disarankan?",
        pilihan: [
          "Pembentukan tim lintas disiplin, misalnya agama dengan sosiologi atau psikologi",
          "Analisis data empiris dan kajian kembali ke teks",
          "Sintesis rekomendasi berbasis nilai dan bukti",
          "Pelaksanaan penelitian di lapangan"
        ],
        jawaban: 0,
        pembahasan: "Urutannya: formasi tim lintas disiplin, identifikasi topik kontemporer, penentuan titik awal, perancangan instrumen campuran, pelaksanaan penelitian, analisis data dan kajian kembali ke teks, lalu sintesis rekomendasi.",
        halaman: "132"
      }
    ]
  },

  "itt-bab-10": {
    perluDicek: false,
    soal: [
      {
        pertanyaan: "Apa kegiatan inti praktikum Bab 10?",
        pilihan: [
          "Mewawancarai 2 dosen yang menerapkan ITT",
          "Menganalisis dokumen artikel antardisipliner, lalu membuat analisis SWOT",
          "Menganalisis penerapan gerak ganda dalam satu mata kuliah melalui observasi video pembelajaran, analisis teori-konteks, dan refleksi integratif",
          "Mewawancarai 2 mahasiswa yang mengalami experiential learning"
        ],
        jawaban: 2,
        pembahasan: "Praktikum Bab 10 meminta mahasiswa menganalisis penerapan gerak ganda (double movement) dalam satu mata kuliah di program studinya, melalui observasi video pembelajaran, analisis teori-konteks, dan refleksi integratif.",
        halaman: "138"
      },
      {
        pertanyaan: "Berdasarkan Bab 9, bagaimana praktikum Bab 10 memaknai strategi gerak ganda?",
        pilihan: [
          "Pemahaman keilmuan yang bergerak dari teks ke konteks, lalu kembali dari konteks ke pembacaan kritis teks",
          "Mempelajari dua mata kuliah sekaligus dalam satu semester",
          "Mengerjakan tugas secara individu dan kelompok sekaligus",
          "Menghafal teks dua kali agar lebih kuat"
        ],
        jawaban: 0,
        pembahasan: "Praktikum ini menekankan strategi gerak ganda, yaitu mengembangkan pemahaman keilmuan yang bergerak dari teks ke konteks, lalu kembali dari konteks ke pembacaan kritis teks. Praktikum ini dapat diterapkan di seluruh fakultas UINSA.",
        halaman: "137–138"
      },
      {
        pertanyaan: "Bagaimana jumlah contoh video pembelajaran yang dianalisis berbeda menurut jenjang dalam praktikum Bab 10?",
        pilihan: [
          "Semua jenjang menganalisis satu video yang sama",
          "S1 tiga video, S2 dua video, S3 satu video",
          "Hanya S3 yang menganalisis video",
          "S1 satu video, S2 dua video, S3 tiga video"
        ],
        jawaban: 3,
        pembahasan: "Jenjang S1 mencari satu contoh video pembelajaran, S2 dua contoh, dan S3 tiga contoh, semuanya sesuai disiplin ilmu masing-masing.",
        halaman: "138–139"
      },
      {
        pertanyaan: "Dalam video pembelajaran yang dipilih, apa yang diidentifikasi mahasiswa S1 dan S2?",
        pilihan: [
          "Jumlah penonton dan komentar video",
          "Bentuk gerak maju dan gerak mundur dalam praktik akademik tersebut",
          "Kesalahan tata bahasa pembicara",
          "Daftar pustaka yang dipakai dosen"
        ],
        jawaban: 1,
        pembahasan: "Mahasiswa S1 dan S2 mengidentifikasi bentuk gerak maju dan gerak mundur dalam praktik akademik di video. S2 juga diminta menemukan potensi masalah pada kedua video dan menawarkan alternatif solusi.",
        halaman: "139"
      },
      {
        pertanyaan: "Apa yang disusun mahasiswa jenjang S3 setelah membuat sintesis pola gerak ganda dari tiga video?",
        pilihan: [
          "Poster edukatif dan narasi singkat",
          "Transkrip wawancara dengan dosen",
          "Artikel opini pendek berisi analisis SWOT tentang implementasi gerak ganda",
          "Peta konsep dari dokumen 1–2"
        ],
        jawaban: 2,
        pembahasan: "Jenjang S3 membuat sintesis pola implementasi gerak ganda pada video, menyusun artikel opini pendek berisi analisis SWOT tentang implementasi gerak ganda, lalu mengumpulkan laporan tertulis dan slide.",
        halaman: "139"
      }
    ]
  },

  "itt-bab-11": {
    perluDicek: false,
    soal: [
      {
        pertanyaan: "Teori gerak ganda yang dikritik dan dikembangkan di Bab 11 diperkenalkan oleh siapa dan dalam karya apa?",
        pilihan: [
          "Fazlur Rahman, dalam kajian hermeneutika Al-Qur'an",
          "Karl Polanyi, dalam The Great Transformation (1944)",
          "Anthony Giddens, dalam The Consequences of Modernity",
          "Amartya Sen, dalam Development as Freedom"
        ],
        jawaban: 1,
        pembahasan: "Gerak ganda di Bab 11 adalah teori Karl Polanyi dalam The Great Transformation (1944) tentang interaksi pasar bebas dan masyarakat. Ini berbeda dengan double movement Fazlur Rahman di Bab 9, yang merupakan metode tafsir.",
        halaman: "143"
      },
      {
        pertanyaan: "Dalam teori Polanyi, apa yang dimaksud dengan \"gerakan kedua\"?",
        pilihan: [
          "Ekspansi pasar yang disertai deregulasi",
          "Desentralisasi kekuasaan ekonomi untuk memperkuat pasar bebas",
          "Perpindahan penduduk dari desa ke kota",
          "Respons masyarakat terhadap dampak negatif ekspansi pasar dengan memperkuat struktur sosial, politik, dan ekonomi"
        ],
        jawaban: 3,
        pembahasan: "Gerakan pertama adalah ekspansi pasar dengan deregulasi dan desentralisasi kekuasaan ekonomi. Gerakan kedua adalah respons masyarakat untuk memperkuat struktur sosial, politik, dan ekonomi agar kehidupan sosial dan budaya mereka tetap berkelanjutan.",
        halaman: "143–144"
      },
      {
        pertanyaan: "Apa isi kritik \"generalitas konsep\" terhadap teori gerak ganda Polanyi?",
        pilihan: [
          "Teori ini terlalu sederhana untuk memahami kompleksitas hubungan pasar global dengan masyarakat lokal yang kondisinya beragam",
          "Teori ini terlalu rumit sehingga sulit dipahami",
          "Teori ini hanya berlaku untuk negara-negara Eropa",
          "Teori ini menolak peran negara sama sekali"
        ],
        jawaban: 0,
        pembahasan: "Kritik generalitas konsep menyatakan bahwa ketahanan masyarakat terhadap pasar global sangat bervariasi, sehingga teori ini perlu disesuaikan. Dua kritik lainnya adalah keterbatasan dalam konteks modern dan pengabaian dinamika kelas serta kekuatan sosial.",
        halaman: "147–148"
      },
      {
        pertanyaan: "Dalam pembahasan pertanian berkelanjutan berbasis kearifan lokal, prinsip Islam apa yang dikaitkan oleh Bab 11?",
        pilihan: [
          "Prinsip syura (musyawarah)",
          "Prinsip istihsan",
          "Prinsip mizan (keseimbangan), merujuk QS. Ar-Rahman (55): 7",
          "Prinsip khilafah (penjagaan amanah)"
        ],
        jawaban: 2,
        pembahasan: "Bab 11 mengaitkan agroekologi dan pertanian berkelanjutan dengan prinsip mizan (keseimbangan) dalam QS. Ar-Rahman (55): 7: segala sesuatu diciptakan dengan ukuran dan keseimbangan yang tepat. Prinsip lain di pilihan juga dibahas di bab ini, tetapi untuk konteks yang berbeda.",
        halaman: "155–156"
      },
      {
        pertanyaan: "Menurut bagian evaluasi Bab 11, pelajaran penting apa yang dapat diambil dari penerapan gerak ganda dalam konteks lokal?",
        pilihan: [
          "Pasar global harus ditolak sepenuhnya",
          "Pentingnya partisipasi aktif masyarakat dalam merumuskan kebijakan, sejalan dengan prinsip musyawarah (syura)",
          "Kebijakan cukup diputuskan oleh pemerintah pusat",
          "Budaya lokal sebaiknya diganti dengan budaya global"
        ],
        jawaban: 1,
        pembahasan: "Pelajarannya adalah pentingnya partisipasi aktif masyarakat dalam merumuskan kebijakan yang memadukan aspek global dan lokal, dengan pendekatan multidisipliner. Dalam pandangan Islam, hal ini sejalan dengan prinsip musyawarah (syura) dalam QS. Asy-Syura (42): 38.",
        halaman: "162–163"
      }
    ]
  },

  "itt-bab-12": {
    perluDicek: false,
    soal: [
      {
        pertanyaan: "Apa yang menjadi kegiatan tambahan praktikum Bab 12, sejalan dengan capaian keempatnya?",
        pilihan: [
          "Menghafal ayat-ayat tentang ilmu",
          "Mengikuti ujian tertulis di akhir semester",
          "Menulis ringkasan buku ajar",
          "Menyusun aksi sosial atau produk edukatif integratif berdasarkan temuan lapangan dan refleksi nilai"
        ],
        jawaban: 3,
        pembahasan: "Selain wawancara dengan dosen, analisis teori-konteks, dan refleksi integratif, praktikum Bab 12 meminta mahasiswa menyusun produk aksi atau media edukatif. Capaian keempatnya adalah mampu menyusun aksi sosial atau produk edukatif integratif.",
        halaman: "165–166"
      },
      {
        pertanyaan: "Produk apa yang dirancang mahasiswa jenjang S1 dalam praktikum Bab 12?",
        pilihan: [
          "Poster edukatif integratif beserta narasi singkat presentasi",
          "Laporan naratif 1000–1500 kata",
          "Draf book chapter",
          "Prototipe teknologi"
        ],
        jawaban: 0,
        pembahasan: "Jenjang S1 merancang poster edukatif integratif yang memuat isu dan konteks, teks atau nilai keislaman, analisis kontekstual, serta solusi dan pesan transformatif, lalu mengumpulkan poster dan narasi singkat presentasi.",
        halaman: "167"
      },
      {
        pertanyaan: "Dalam petunjuk jenjang S1 Bab 12, bagaimana arah gerak maju dan gerak mundur dirumuskan?",
        pilihan: [
          "Gerak maju dari realitas sosial ke nilai wahyu, gerak mundur dari teks ke konteks sosial",
          "Keduanya bergerak dari teori ke praktik",
          "Gerak maju dari teks ke konteks sosial, gerak mundur dari realitas sosial ke nilai wahyu",
          "Gerak maju dan mundur tidak dipakai di jenjang S1"
        ],
        jawaban: 2,
        pembahasan: "Petunjuk S1 menyebut gerak maju sebagai gerak dari teks ke konteks sosial, dan gerak mundur sebagai gerak dari realitas sosial ke nilai wahyu.",
        halaman: "167"
      },
      {
        pertanyaan: "Berapa panjang laporan naratif yang disusun mahasiswa jenjang S2 dalam praktikum Bab 12?",
        pilihan: [
          "500–750 kata",
          "750–1000 kata",
          "1000–1500 kata",
          "1500–2000 kata"
        ],
        jawaban: 1,
        pembahasan: "Laporan naratif S2 sepanjang 750–1000 kata, berisi deskripsi kasus, teori dan pendekatan ilmiah, teks/nilai keislaman yang relevan, serta sintesis dan solusi integratif. Laporan S3 lebih panjang, yaitu 1000–1500 kata.",
        halaman: "167–168"
      },
      {
        pertanyaan: "Menurut rubrik poster Bab 12, solusi seperti apa yang mendapat skor 4 (sangat baik) pada aspek \"Solusi dan Pesan Aksi\"?",
        pilihan: [
          "Solusi yang aplikatif dan reflektif terhadap isu",
          "Solusi yang normatif",
          "Solusi yang hanya berupa retorika",
          "Tidak perlu ada solusi asalkan posternya menarik"
        ],
        jawaban: 0,
        pembahasan: "Skor 4 untuk solusi yang aplikatif dan reflektif terhadap isu, skor 3 untuk solusi yang cukup aplikatif, skor 2 untuk solusi normatif yang kurang relevan, dan skor 1 jika tidak ada solusi atau hanya retorika.",
        halaman: "169"
      }
    ]
  },

  "itt-bab-13": {
    perluDicek: false,
    soal: [
      {
        pertanyaan: "Proyek yang mengambil tema dari Al-Qur'an atau hadis lalu dicarikan kajian ilmiahnya, atau sebaliknya dari realitas lalu dicarikan dalilnya, disebut proyek apa?",
        pilihan: [
          "Proyek penelitian tematik",
          "Proyek media edukatif",
          "Proyek studi kasus",
          "Proyek aksi sosial"
        ],
        jawaban: 0,
        pembahasan: "Itu adalah proyek penelitian tematik. Contohnya hadis tentang keutamaan habbah al-sawda' (jintan hitam) yang kemudian dibuktikan manfaatnya oleh berbagai riset. Empat jenis proyek integratif: penelitian tematik, aksi sosial, media edukatif, dan studi kasus.",
        halaman: "173–174"
      },
      {
        pertanyaan: "Bab 13 mencontohkan tesis tentang penyakit mata Nabi Ya'qub (QS. Yusuf [12]: 84). Dari segi medis, penyakit itu disebut apa?",
        pilihan: [
          "Rabun jauh",
          "Glaukoma",
          "Katarak",
          "Buta warna"
        ],
        jawaban: 2,
        pembahasan: "Dari segi medis, penyakit itu disebut katarak, yaitu kekeruhan pada lensa mata. Tesis tersebut dibimbing oleh dua ahli, yaitu ahli tafsir dan ahli kedokteran, sehingga dua sudut pandang bertemu.",
        halaman: "174"
      },
      {
        pertanyaan: "Apa tiga karakteristik proyek integratif menurut Bab 13?",
        pilihan: [
          "Murah, cepat, dan mudah",
          "Lintas disiplin, berbasis masalah, dan keharusan kolaborasi",
          "Individual, teoretis, dan tertutup",
          "Hafalan, ceramah, dan ujian"
        ],
        jawaban: 1,
        pembahasan: "Proyek integratif bersifat lintas disiplin (menggabungkan ajaran Islam, sains, dan sosial), berbasis masalah, dan menuntut kolaborasi orang-orang dari bidang berbeda agar sudut pandangnya lebih komprehensif.",
        halaman: "176"
      },
      {
        pertanyaan: "Riset tentang kandungan dan khasiat jahe yang terinspirasi QS. Al-Insan [76]: 17 dijadikan contoh tujuan pembelajaran yang mana?",
        pilihan: [
          "Berorientasi pada solusi",
          "Menawarkan gagasan ideal",
          "Menghindari plagiasi",
          "Menawarkan produk atau manfaat"
        ],
        jawaban: 3,
        pembahasan: "Ada tiga tujuan pembelajaran: berorientasi pada solusi, menawarkan gagasan ideal (contohnya panel surya), dan menawarkan produk atau manfaat. Contoh jahe masuk tujuan ketiga karena wujudnya produk yang konkret.",
        halaman: "176–178"
      },
      {
        pertanyaan: "Keberhasilan suatu proyek integratif dipetakan menjadi empat indikator. Apa saja?",
        pilihan: [
          "Biaya, waktu, tenaga, dan tempat",
          "Dosen, mahasiswa, kampus, dan masyarakat",
          "Proses, konten, produk, dan etika",
          "Teori, hafalan, ujian, dan nilai"
        ],
        jawaban: 2,
        pembahasan: "Empat indikatornya: proses (tepat waktu dan metodologi tepat), konten (data, dalil, teori, orisinalitas), produk (bermanfaat dan kreatif), dan etika (menghindari plagiasi dan penyalahgunaan data; batas plagiasi 20%). Skor penilaiannya memakai skala 1–5 per item.",
        halaman: "179"
      }
    ]
  },

  "itt-bab-14": {
    perluDicek: false,
    soal: [
      {
        pertanyaan: "Apa kekhasan praktikum Bab 14 dibanding praktikum sebelumnya?",
        pilihan: [
          "Hanya berupa ujian tertulis",
          "Tidak lagi memakai strategi gerak ganda",
          "Gerak ganda dilanjutkan ke tahap aksi sosial transformatif dalam bentuk proyek individu",
          "Dikerjakan dalam kelompok besar berisi 8 mahasiswa"
        ],
        jawaban: 2,
        pembahasan: "Praktikum Bab 14 tetap menekankan gerak ganda dari teks ke konteks lalu kembali ke pembacaan kritis teks, kemudian dilanjutkan ke tahap aksi sosial transformatif dalam bentuk proyek individu.",
        halaman: "181–182"
      },
      {
        pertanyaan: "Apa nama proyek untuk jenjang S2 dalam praktikum Bab 14?",
        pilihan: [
          "Proyek Mini Integratif",
          "Proyek Solutif Kontekstual",
          "Proyek Transformasi Sosial Ilmiah",
          "Proyek Media Edukatif"
        ],
        jawaban: 1,
        pembahasan: "S1 mengerjakan Proyek Mini Integratif, S2 mengerjakan Proyek Solutif Kontekstual, dan S3 mengerjakan Proyek Transformasi Sosial Ilmiah.",
        halaman: "183–184"
      },
      {
        pertanyaan: "Dalam Proyek Mini Integratif jenjang S1, isu riil yang dipilih dikaitkan dengan apa?",
        pilihan: [
          "Pendapat tokoh masyarakat setempat",
          "Berita viral di media sosial",
          "Hasil survei nasional",
          "Satu ayat/hadis dan teori mata kuliah"
        ],
        jawaban: 3,
        pembahasan: "Mahasiswa S1 memilih satu topik mata kuliah, mengidentifikasi isu riil, mengaitkannya dengan satu ayat/hadis dan teori mata kuliah, lalu membuat proyek mini berupa produk edukatif, narasi reflektif, atau karya visual.",
        halaman: "183"
      },
      {
        pertanyaan: "Berapa panjang laporan proyek yang dibuat mahasiswa jenjang S2 dalam praktikum Bab 14?",
        pilihan: [
          "1500–2000 kata",
          "750–1000 kata",
          "1000–1500 kata",
          "500–750 kata"
        ],
        jawaban: 0,
        pembahasan: "Mahasiswa S2 meneliti satu masalah, merancang proyek solusi, menguji kelayakan ide secara mini (simulasi/survei/observasi kecil), lalu membuat laporan proyek 1500–2000 kata berisi masalah, teori, ayat/hadis, desain solusi, dan refleksi.",
        halaman: "183–184"
      },
      {
        pertanyaan: "Proyek transformatif berbasis nilai ITT pada jenjang S3 dapat berbentuk apa?",
        pilihan: [
          "Hanya berupa poster",
          "Artikel kebijakan, prototipe, proposal advokasi, dan sebagainya",
          "Hanya berupa video YouTube",
          "Ringkasan buku ajar"
        ],
        jawaban: 1,
        pembahasan: "Mahasiswa S3 memilih isu besar multidisipliner, menelusuri perspektif keilmuan, normatif, dan praksisnya, lalu merancang proyek transformatif berbasis nilai ITT, misalnya artikel kebijakan, prototipe, atau proposal advokasi.",
        halaman: "184"
      }
    ]
  }
};
