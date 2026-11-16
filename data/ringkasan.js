// Semua data ringkasan materi, disusun dari buku ajar
// "Integrasi Keilmuan Twin Towers" (satu ringkasan per bab).
// perluDicek: true berarti isi ringkasan belum diperiksa dosen/pemilik proyek.
// tema (boleh tidak ada): kelompok warna bab, yaitu konsep, pola, gerak-ganda, atau proyek. Warnanya ada di style.css.
// bacaanPelengkap (boleh tidak ada): rujukan DI LUAR buku ajar untuk pendalaman, bukan bahan kuis.
// Hanya rujukan yang sudah dicek keberadaannya (lewat konektor), berisi data rujukan dan satu kalimat
// alasan dengan kata-kata sendiri; isi karya tersebut tidak disalin.

const RINGKASAN = [
  {
    id: "itt-bab-01",
    judul: "Konsep Dasar Integrasi Keilmuan Twin Towers",
    mapel: "Integrasi Keilmuan Twin Towers",
    bab: "Bab 1",
    tema: "konsep",
    isi: "Bab ini memperkenalkan Twin Towers sebagai paradigma integrasi keilmuan khas UIN Sunan Ampel Surabaya, sekaligus arah transformasi kelembagaan kampus. Gagasannya lahir dari kebutuhan PTKIN untuk mengatasi dikotomi antara ilmu agama (wahyu) dan ilmu umum (rasional-empiris), yang menurut buku ini diwarisi dari sejarah pendidikan Islam klasik dan sistem pendidikan kolonial. Dampaknya tidak hanya pada kurikulum dan kelembagaan, tetapi juga pada cara pandang: ilmu agama dianggap lebih unggul secara moral, sedangkan ilmu umum dianggap alat teknis yang bebas nilai. Akibatnya makna ilmu dalam Islam menyempit dan lulusan memiliki kompetensi parsial (hlm. 1–5).\n\nIntegrasi keilmuan dipahami sebagai upaya menyatukan ilmu keislaman dengan sains-teknologi dan sosial-humaniora; bentuk terbaiknya menyatukan ketiganya sekaligus agar masing-masing makin kokoh. Integrasi itu harus menyentuh ontologi, epistemologi, dan aksiologi, karena sekadar menanamkan nilai agama pada materi sains tidak cukup. Gagasan ini tumbuh seiring perubahan IAIN menjadi UIN: UIN Sunan Kalijaga Yogyakarta memelopori sejak awal 2000-an, lalu UIN Sunan Ampel dan kampus lain mengembangkan versinya sesuai karakter masing-masing melalui kurikulum, riset interdisipliner, dan dialog antara teks dan konteks (hlm. 3–7).\n\nSimbolnya adalah dua menara yang sejajar, simetris, dan sama kuat, yaitu rumpun ilmu agama dan rumpun ilmu umum, yang dihubungkan oleh jembatan. Jembatan itu melambangkan interaksi yang saling memperkaya, serta ruang pertemuan antara metode tekstual-normatif studi keislaman dan metode empiris-kritis sains dan ilmu sosial. Dari pertemuan ini lahir Ilmu Keislaman Multidisipliner, misalnya tafsir atau hadis yang didekati dengan ilmu deskriptif sehingga muncul subbidang seperti \"Al-Qur'an dan strukturalisme\" (hlm. 5, 8–9).\n\nTujuannya adalah keilmuan yang holistik, tidak lagi memandang ilmu agama sebagai sakral dan ilmu umum sebagai profan, serta perubahan cara berpikir, bukan sekadar penggabungan isi kurikulum. Wahyu menjadi sumber nilai dan etika, sedangkan ilmu rasional-empiris dipakai membaca realitas sosial, budaya, dan alam; keduanya disinergikan, bukan dicampuradukkan. Dasarnya adalah tauhid: tidak ada ilmu yang netral dan lepas dari arah nilai. Lulusan yang diharapkan mampu memadukan iman, ilmu, dan amal (hlm. 10–17).\n\nBab ini ditutup dengan pembedaan ilmu naqliyah (bersumber dari Al-Qur'an dan Hadis, normatif, dan tetap) dan ilmu aqliyah (hasil akal, observasi, dan metode ilmiah; dinamis dan terbuka untuk direvisi). Perbedaan itu tidak saling menegasikan: akal adalah alat untuk memahami wahyu, sebagaimana dicontohkan Al-Ghazali dan Ibn Rushd. Wahyu tanpa nalar berisiko dogmatis, sedangkan nalar tanpa wahyu berisiko kehilangan arah moral, sehingga keduanya ditempatkan sejajar sebagai dua menara yang saling menopang (hlm. 18–20).",
    poinKunci: [
      "Integrasi keilmuan adalah upaya menyatukan ilmu agama dengan ilmu umum (sains-teknologi dan sosial-humaniora); menurut buku ini, bentuk terbaiknya adalah menyatukan ketiganya sekaligus (hlm. 3).",
      "Dikotomi ilmu agama dan ilmu umum berakar pada warisan pendidikan Islam klasik dan sistem pendidikan kolonial; akibatnya terjadi polarisasi kelembagaan dan lulusan berkompetensi parsial (hlm. 4).",
      "Integrasi perlu mencakup tiga aspek: ontologi, epistemologi, dan aksiologi. Menanamkan nilai agama pada materi sains saja tidak cukup; yang lebih penting adalah rumusan epistemologi yang integratif (hlm. 3–4).",
      "Simbol Integrated Twin Towers: dua menara sejajar dan sama kuat, tanpa ada yang lebih unggul, dihubungkan jembatan yang melambangkan interaksi saling memperkaya serta prinsip interdisiplin dan transdisiplin (hlm. 5, 8–9).",
      "UIN Sunan Kalijaga Yogyakarta disebut sebagai pelopor paradigma integrasi sejak awal 2000-an, seiring perubahan IAIN menjadi UIN, lalu diikuti UIN Sunan Ampel Surabaya dan kampus lain (hlm. 6).",
      "Model ini melahirkan Ilmu Keislaman Multidisipliner: ilmu normatif seperti tafsir dan hadis didekati dengan ilmu deskriptif, misalnya kajian Al-Qur'an dan strukturalisme (hlm. 8–9).",
      "Tujuan integrasi: membangun keilmuan yang holistik, menghapus anggapan bahwa ilmu agama sakral dan ilmu umum profan, serta melahirkan lulusan yang memadukan iman, ilmu, dan amal (hlm. 10–12).",
      "Ilmu wahyu tanpa pendekatan rasional berisiko menjadi dogmatis, sedangkan ilmu rasional tanpa nilai wahyu berisiko kehilangan arah moral. Buku ini mencontohkan Al-Ghazali dan Ibn Rushd yang memandang akal dan wahyu saling melengkapi (hlm. 18–19)."
    ],
    istilah: [
      { istilah: "Integrasi", arti: "Dari bahasa Latin integratio (akar kata integer: utuh). Dalam pendidikan tinggi berarti proses sistematis menyatukan disiplin ilmu yang terpecah menjadi satu sistem pengetahuan yang utuh, bukan sekadar penggabungan administratif (hlm. 13–14)." },
      { istilah: "Twin Towers", arti: "Twin berarti kembar, towers berarti menara. Lambang dua pilar ilmu: ilmu-ilmu keislaman (Islamic Sciences) dan ilmu-ilmu modern (Modern Sciences) yang sejajar dan saling mendukung (hlm. 14)." },
      { istilah: "Integrated Twin Towers", arti: "Model integrasi khas UIN Sunan Ampel Surabaya: menara kembar yang tersambung jembatan, tempat ilmu agama dan ilmu sains/sosial berkembang bersama dengan status sejajar (hlm. 5)." },
      { istilah: "Dikotomi ilmu", arti: "Pemisahan yang menempatkan ilmu keagamaan dan ilmu empiris-rasional di dua kutub seolah-olah tidak saling berhubungan (hlm. 4)." },
      { istilah: "Ilmu naqliyah", arti: "Ilmu wahyu yang bersumber dari teks suci (Al-Qur'an dan Hadis); bersifat normatif, otoritatif, dan tidak berubah (hlm. 18)." },
      { istilah: "Ilmu aqliyah", arti: "Ilmu rasional-empiris hasil akal, observasi, dan metode ilmiah; bersifat dinamis dan terbuka untuk dikritik serta direvisi (hlm. 18)." },
      { istilah: "Ilmu Keislaman Multidisipliner", arti: "Ilmu keislaman normatif yang didekati dengan ilmu-ilmu deskriptif sehingga melahirkan subbidang baru (hlm. 9)." },
      { istilah: "PTKIN", arti: "Perguruan Tinggi Keagamaan Islam Negeri (hlm. 4)." }
    ],
    sumber: { buku: "Integrasi Keilmuan Twin Towers (Buku Ajar), Ahmad Fauzi dkk.", halaman: "1–20" },
    bacaanPelengkap: [
      {
        penulis: "M. Amin Abdullah",
        tahun: "2014",
        judul: "Religion, Science, and Culture: An Integrated, Interconnected Paradigm of Science",
        terbitan: "Al-Jami'ah: Journal of Islamic Studies 52, no. 1: 175–203",
        tautan: "https://doi.org/10.14421/ajis.2014.521.175-203",
        alasan: "Menjelaskan paradigma integrasi-interkoneksi UIN Sunan Kalijaga, kampus yang disebut Bab 1 sebagai pelopor integrasi, termasuk pentingnya pendekatan interdisipliner dan transdisipliner. Artikel ini juga tercantum di daftar pustaka buku ajar."
      },
      {
        penulis: "M. Syamsul Huda",
        tahun: "2017",
        judul: "Integrasi Agama dan Sains Melalui Pemaknaan Filosofis Integrated Twin Towers UIN Sunan Ampel Surabaya",
        terbitan: "Teosofi: Jurnal Tasawuf dan Pemikiran Islam 7, no. 2: 283–315",
        tautan: "https://doi.org/10.15642/teosofi.2017.7.2.283-315",
        alasan: "Mengulas dasar filosofis simbol menara kembar: satu menara menjadi pokok kajian, menara lainnya menjadi pendekatan, dengan metode multidisipliner."
      },
      {
        penulis: "Husniyatus Salamah Zainiyati",
        tahun: "2015",
        judul: "Landasan Fondasional Integrasi Keilmuan di UIN Maulana Malik Ibrahim Malang dan UIN Sunan Ampel Surabaya",
        terbitan: "Islamica: Jurnal Studi Keislaman 10, no. 1: 248–276",
        // DOI-nya masih mengarah ke alamat lama jurnal (islamica.uinsby.ac.id) yang tidak bisa dibuka,
        // jadi dipakai alamat baru halaman artikelnya
        tautan: "https://islamica.uinsa.ac.id/index.php/islamica/article/view/262",
        alasan: "Membandingkan konsep \"pohon ilmu\" UIN Malang dengan Integrated Twin Towers UINSA, sehingga ada model integrasi lain sebagai pembanding."
      }
    ],
    perluDicek: false
  },
  {
    id: "itt-bab-02",
    judul: "Filosofi Integrasi Keilmuan Twin Towers",
    mapel: "Integrasi Keilmuan Twin Towers",
    bab: "Bab 2",
    tema: "konsep",
    isi: "Bab ini membedah landasan epistemologis, filosofis, dan historis Twin Towers. Menara kembar dengan jembatan penghubung (skybridge) adalah metafora: satu pilar berdiri di atas tradisi keilmuan Islam yang berbasis wahyu, pilar lainnya di atas sains modern yang rasional-empiris. Visi ini menjawab kegelisahan lebih dari dua abad tentang dikotomi iman dan akal, serta warisan klasik (turāth) dan modernitas (hadāthah). Buku ini mengingatkan bahwa integrasi yang otentik bukan sinkretisme, yaitu menempelkan ayat pada temuan sains atau memaksakan metode sains pada studi keislaman, melainkan dialog kritis di tingkat epistemologi (hlm. 23–26).\n\nSebagai alat diagnosis, buku ini memakai tipologi tiga nalar dari Mohammed Abed Al-Jabiri. Nalar bayani berpusat pada teks dan memakai qiyas; teks menjadi pokok dan realitas menjadi cabang, sehingga sulit melahirkan pengetahuan baru. Nalar burhani bertumpu pada akal, logika, dan observasi; tokohnya antara lain Al-Kindi, Al-Farabi, Ibnu Sina, dan Ibnu Rushd, yang menyebut filsafat dan syariat \"dua saudara sepersusuan\". Nalar ini dicurigai sebagian teolog, terutama Al-Ghazali, karena dianggap bisa mengikis otoritas wahyu. Nalar 'irfani bersumber dari pengalaman batin kaum sufi, tetapi subjektif dan sulit diverifikasi. Twin Towers menuntut sintesis: jembatan antarmenara adalah ruang dialog ketiga nalar itu (hlm. 26–30).\n\nSumber ilmunya juga tiga. Wahyu memberi pandangan dunia serta kerangka etis dan tujuan, bukan mendikte hasil penelitian. Akal adalah anugerah untuk membaca tanda-tanda Tuhan di alam, tetapi tetap terhubung dengan hati (qalb). Pengalaman, berupa observasi dan eksperimen, sudah lama diakui dalam peradaban Islam, misalnya lewat Kitāb al-Manāẓir karya Ibnu al-Haytham (hlm. 30–32).\n\nDi tingkat filsafat ilmu, tauhid menjadi prinsip metafisik: alam adalah ciptaan yang koheren, kebenaran itu satu, dan ilmu tidak bebas nilai, sehingga mencari ilmu bernilai ibadah. Integrasi Twin Towers dipandang sebagai evolusi dari gerakan Islamisasi Ilmu Pengetahuan (Ismail Raji al-Faruqi) yang dikritik antara lain oleh Ziauddin Sardar dan Pervez Hoodbhoy; hubungannya lebih dialogis dan menghormati metode tiap menara. Sejarah menunjukkan harmoni iman dan akal pada abad ke-8 sampai ke-13, kemunduran karena faktor luar dan dalam (dengan catatan bahwa Al-Ghazali tidak menolak logika atau sains), transmisi ilmu ke Eropa, hingga modernisme Islam al-Afghani dan Abduh yang diwarisi Twin Towers (hlm. 32–35).\n\nBab ditutup dengan profil ulul albab, lulusan yang memadukan zikir dan pikir. Satu menara melambangkan ilmu keislaman (al-'ulūm al-dīniyyah), menara lainnya ilmu umum (al-'ulūm al-kawniyyah); keduanya berdiri mandiri, sedangkan jembatan melambangkan komunikasi keilmuan yang saling menyapa tanpa saling mengintervensi. Gagasan ini sejalan dengan integrasi-interkoneksi Amin Abdullah yang diibaratkan jaring laba-laba. Lulusannya diharapkan tidak berkepribadian terbelah: saintis yang taat beragama sekaligus ulama yang berpikiran saintifik (hlm. 35–39).",
    poinKunci: [
      "Integrasi yang otentik bukan sinkretisme yang dangkal (menempelkan ayat pada temuan sains, atau memaksakan metode sains empiris pada studi keislaman tanpa kritik), melainkan dialog kritis di tingkat epistemologi (hlm. 24).",
      "Al-Jabiri membagi nalar dalam peradaban Arab-Islam menjadi tiga: bayani (berpusat pada teks, memakai qiyas), burhani (akal, logika, dan observasi empiris), dan 'irfani (pengalaman batin langsung, epistemologi kaum sufi) (hlm. 26–29).",
      "Setiap nalar punya kelemahan: bayani sulit menghasilkan pengetahuan baru karena selalu merujuk preseden teks; burhani dicurigai dapat mengikis otoritas wahyu, misalnya dalam kritik Al-Ghazali; 'irfani bersifat subjektif dan sulit diverifikasi (hlm. 27–29).",
      "Visi Twin Towers menuntut sintesis: ketiga nalar diakui sebagai metodologi yang sah dan saling melengkapi, dan jembatan antarmenara adalah ruang dialog ketiganya (hlm. 29–30).",
      "Tiga sumber ilmu saling melengkapi: wahyu memberi kerangka makna dan tujuan (aksiologi), akal memberi alat analisis dan logika (metodologi), dan pengalaman memberi data serta bukti dari dunia nyata (empirisme) (hlm. 30–32).",
      "Tauhid adalah prinsip metafisik, bukan sekadar kredo. Implikasinya ontologis (alam adalah ciptaan yang koheren), epistemologis (kebenaran itu satu meskipun sumber ilmunya beragam), dan aksiologis (ilmu tidak pernah bebas nilai) (hlm. 32).",
      "Integrasi Twin Towers dipandang sebagai evolusi dari gerakan Islamisasi Ilmu Pengetahuan (Ismail Raji al-Faruqi): hubungannya lebih simetris dan dialogis, serta mengakui integritas metodologis masing-masing menara (hlm. 33).",
      "Abad ke-8 sampai ke-13, dunia Islam menjadi pusat inovasi ilmiah tanpa dikotomi kaku antara ilmu agama dan ilmu sekuler. Kemundurannya dipengaruhi faktor eksternal (invasi Mongol, Reconquista) dan internal, sementara warisannya ditransmisikan ke Eropa dan ikut menyulut Renaisans (hlm. 34–35).",
      "Twin Towers disebut sebagai pewaris intelektual modernisme Islam (Jamaluddin al-Afghani dan Muhammad Abduh), tetapi dengan kesadaran filosofis yang lebih matang (hlm. 35).",
      "Profil ulul albab: lulusan yang memadukan zikir dan pikir dan tidak mengalami keterbelahan kepribadian (split personality), yaitu saintis yang taat beragama sekaligus ulama yang berpikiran saintifik. Contohnya, mahasiswa fisika melihat ayat kauniyah lewat lensa tauhid, dan mahasiswa tafsir memakai analisis ilmu sosial-humaniora (hlm. 36–38)."
    ],
    istilah: [
      { istilah: "Epistemologi", arti: "\"Ilmu tentang ilmu\" (nazariyyāt al-ma'rifah): cabang filsafat yang mempertanyakan hakikat, sumber, batasan, dan validitas pengetahuan (hlm. 24, 26)." },
      { istilah: "Sinkretisme", arti: "Dalam bab ini: integrasi yang dangkal, misalnya sekadar menempelkan ayat-ayat suci pada penemuan sains modern (hlm. 24)." },
      { istilah: "Nalar bayānī", arti: "Bayān berarti penjelasan. Sistem pengetahuan yang berpusat pada teks, terutama Al-Qur'an dan Sunnah; logikanya analogi (qiyas), dan realitas harus tunduk pada tafsir teks (hlm. 27)." },
      { istilah: "Nalar burhānī", arti: "Burhān berarti bukti atau demonstrasi. Sistem pengetahuan yang bertumpu pada akal, logika, dan observasi empiris; dikembangkan para filsuf Muslim (hlm. 28)." },
      { istilah: "Nalar 'irfānī", arti: "'Irfān berarti gnosis. Pengetahuan spiritual yang diperoleh lewat pengalaman batin langsung (kashf, dhawq, mushāhadah); epistemologi kaum sufi (hlm. 29)." },
      { istilah: "Qiyas", arti: "Analogi; mekanisme utama nalar bayani yang membatasi penalaran pada preseden teks (hlm. 27)." },
      { istilah: "Paradigma tauhidi", arti: "Inti filsafat ilmu Islam: tauhid dijadikan prinsip metafisik yang membentuk ontologi, epistemologi, dan aksiologi ilmu (hlm. 32)." },
      { istilah: "Islamisasi Ilmu Pengetahuan", arti: "Gerakan yang diasosiasikan dengan Ismail Raji al-Faruqi: membangun kembali ilmu-ilmu Barat di atas fondasi tauhid (hlm. 33)." },
      { istilah: "Ulul albab (ūlū al-albāb)", arti: "Profil lulusan ideal UIN Sunan Ampel: orang berakal yang tidak tercerabut dari kesadaran spiritual, memadukan zikir dan pikir. Menurut buku ini, istilahnya disebut 16 kali dalam Al-Qur'an (hlm. 35–36)." },
      { istilah: "Al-'ulūm al-dīniyyah dan al-'ulūm al-kawniyyah", arti: "Dua menara Twin Towers: rumpun ilmu keislaman (tafsir, hadis, fikih, kalam) dan rumpun ilmu umum (sains, teknologi, sosial, humaniora) (hlm. 36)." },
      { istilah: "Integrasi-interkoneksi", arti: "Gagasan Amin Abdullah yang diibaratkan jaring laba-laba (spider's web): berbagai disiplin ilmu saling terhubung dan menguatkan (hlm. 37)." }
    ],
    sumber: { buku: "Integrasi Keilmuan Twin Towers (Buku Ajar), Ahmad Fauzi dkk.", halaman: "23–39" },
    bacaanPelengkap: [
      {
        penulis: "Hakam Al Ma'mun",
        tahun: "2022",
        judul: "Hubungan Epistemologi Keislaman Muhammad Abid Al-Jabiri dengan Tipologi Penafsiran Al-Qur'an",
        terbitan: "Journal of Islamic Civilization 3, no. 2",
        tautan: "https://doi.org/10.33086/jic.v3i2.2252",
        alasan: "Mengaitkan tiga nalar Al-Jabiri dengan corak tafsir: bayani dengan tafsir fikih, burhani dengan tafsir falsafi-saintifik, dan 'irfani dengan tafsir isyari."
      },
      {
        penulis: "Ahmad Ubaidillah Ma'sum Al Anwari dan Safri Nur Jannah",
        tahun: "2025",
        judul: "Kesahihan Hadis dalam Paradigma Bayani, Burhani, dan 'Irfani: Telaah atas Epistemologi al-Ghazali",
        terbitan: "Al-Qudwah: Jurnal Studi Al-Qur'an dan Hadis 3, no. 2: 130–148",
        tautan: "https://doi.org/10.24014/alqudwah.v3i2.37237",
        alasan: "Menerapkan tiga nalar pada pandangan Al-Ghazali tentang kesahihan hadis, sehingga terlihat bagaimana ketiganya bisa berjalan bersama dalam satu kajian."
      },
      {
        penulis: "A. Khudori Soleh",
        tahun: "2013",
        judul: "Mencermati Konsep Islamisasi Ilmu Ismail R. Faruqi",
        // Volume dan nomor tidak tercatat di DOAJ maupun halaman jurnal
        terbitan: "Ulul Albab: Jurnal Studi Islam (UIN Maulana Malik Ibrahim Malang)",
        tautan: "https://doi.org/10.18860/ua.v0i0.2398",
        alasan: "Menjelaskan lima prinsip dasar Islamisasi Ilmu al-Faruqi, gerakan yang menurut Bab 2 menjadi cikal bakal gagasan integrasi."
      }
    ],
    perluDicek: false
  },
  {
    id: "itt-bab-03",
    judul: "Pola Integrasi I: Integrasi Tridharma Perguruan Tinggi",
    mapel: "Integrasi Keilmuan Twin Towers",
    bab: "Bab 3",
    tema: "pola",
    isi: "Bab ini membahas pola integrasi pertama, yaitu penerapan Twin Towers dalam tridharma perguruan tinggi. Di tingkat sistem, integrasi pendidikan ditopang tiga hal: filosofi menara kembar yang tersambung, struktur ilmu yang terpetakan (ilmu dasar sebagai landasan, lalu ilmu terapan dan ilmu pengembang), serta fungsi kampus sebagai \"media penerang\" lewat publikasi ilmiah. Buku ini menegaskan bahwa modelnya bukan islamisasi ilmu pengetahuan, melainkan \"islamisasi nalar\": ilmu keislaman, sosial-humaniora, serta sains dan teknologi dibiarkan berkembang, lalu dipertemukan untuk \"saling sapa\" (hlm. 41–42).\n\nDalam pendidikan dan pengajaran, integrasi bertujuan menghadirkan pembelajaran aktif yang memadukan ketiga rumpun ilmu, kontekstual dan solutif, kolaboratif antara dosen dan mahasiswa, serta melatih berpikir kritis, analitis, dan kreatif. Strateginya adalah kurikulum berbasis riset dengan metode discovery, inquiry, problem-based, dan project-based learning; learning outcome berbasis ilmu terapan; serta magang berdampak yang dikaitkan dengan tema keislaman. Lulusan yang dituju adalah ulul albab: cerdas (smart) karena kaya intelektual, bermartabat (honourable) karena matang spiritual, dan berbudi luhur (pious) karena arif dalam perilaku (hlm. 42–44).\n\nDalam penelitian, dua \"menara\" yang disinergikan adalah pendidikan (menara akademik) dan penelitian-inovasi (menara riset): riset masuk ke pembelajaran, dan kegiatan akademik menjadi dasar riset. Wujudnya antara lain tugas akhir berbasis penelitian dosen, riset kolaboratif lintas prodi, serta hilirisasi berupa prototipe, paten, dan publikasi bersama. Dalam pengabdian, hasil riset dan pembelajaran dipakai untuk merancang program yang menjawab masalah nyata masyarakat, sehingga pengabdian menjadi bagian dari siklus akademik, bukan sekadar kegiatan sosial; contohnya lewat MBKM, KKN Tematik, dan Service Learning (hlm. 44–47).\n\nKetiga dharma itu membentuk satu siklus: pengajaran menjadi titik awal, penelitian memperbarui materi ajar, pengabdian berbasis riset menghasilkan modul baru, dan hasil akhirnya adalah kompetensi lulusan berupa sikap, pengetahuan, serta keterampilan umum dan khusus (hlm. 47).\n\nContohnya adalah mata kuliah Kewirausahaan dengan proyek pemberdayaan UMKM melalui teknologi digital dalam empat tahap. Di kelas, dosen memaparkan hasil risetnya, lalu mahasiswa meneliti masalah UMKM dari tiga sudut: etika muamalah dalam Islam, kendala sosial dan psikologis pelaku usaha, serta pilihan platform digital. Dosen dan mahasiswa kemudian menyusun modul pelatihan, mendampingi pelaku usaha di kampung sekitar kampus, lalu mengolah pengalaman itu menjadi bahan ajar baru dan bahan publikasi ilmiah (hlm. 48–51).",
    poinKunci: [
      "Pada level sistemik, integrasi pendidikan diwujudkan melalui tiga hal: filosofi menara kembar, struktur ilmu yang terpetakan (ilmu dasar, ilmu terapan, ilmu pengembang), dan fungsi institusi sebagai \"media penerang\" melalui publikasi ilmiah (hlm. 41–42).",
      "Model ini bukan islamisasi ilmu pengetahuan, melainkan \"islamisasi nalar\": disiplin keislaman, sosial-humaniora, serta sains dan teknologi diberi keleluasaan berkembang, lalu dipertemukan untuk berdialog dan \"saling sapa\" (hlm. 42).",
      "Tujuan integrasi dalam pengajaran: pembelajaran aktif yang memadukan ilmu agama, sosial-humaniora, dan ilmu alam; pembelajaran yang kontekstual dan solutif; budaya akademik kolaboratif; keterampilan berpikir kritis, analitis, dan kreatif; serta lulusan ulul albab (hlm. 42–43).",
      "Strategi dalam pengajaran: kurikulum berbasis riset (Research-Integrated Curriculum), penguatan learning outcome berbasis ilmu terapan, dan magang berdampak yang dikaitkan dengan riset, inovasi, dan tema keislaman (hlm. 43–44).",
      "Learning outcome lulusan dirumuskan dalam tiga hal: kekayaan intelektual (smart/cerdas), kematangan spiritual (honourable/bermartabat), dan kearifan perilaku (pious/berbudi luhur) (hlm. 43–44).",
      "Integrasi dalam penelitian: riset masuk ke pembelajaran dan sebaliknya. Strateginya: integrasi kurikulum dan riset (mata kuliah berbasis proyek, tugas akhir berbasis penelitian dosen), penelitian kolaboratif lintas prodi atau fakultas, serta hilirisasi dan diseminasi (prototipe, paten, publikasi bersama) (hlm. 44–45).",
      "Integrasi dalam pengabdian: menghubungkan hasil riset dengan kebutuhan riil masyarakat, sehingga pengabdian menjadi bagian dari siklus akademik, bukan sekadar kegiatan sosial. Strateginya: pengabdian masuk kurikulum (MBKM, KKN Tematik, Service Learning), program dirancang berbasis riset, dan hibah pengabdian dikaitkan dengan penelitian internal (hlm. 46–47).",
      "Siklus tridharma: pengajaran sebagai titik awal, penelitian memperkaya pengajaran, pengabdian berbasis riset menghasilkan bahan ajar atau modul, dan hasil akhirnya adalah kompetensi lulusan (sikap, pengetahuan, serta keterampilan umum dan khusus) (hlm. 47).",
      "Contoh implementasi: mata kuliah Kewirausahaan dengan proyek pemberdayaan UMKM melalui teknologi digital, dalam empat tahap: pembelajaran di kelas, penelitian kolaboratif, implementasi proyek (lokakarya dan pendampingan), serta evaluasi yang hasilnya menjadi bahan ajar baru dan publikasi ilmiah (hlm. 48–51).",
      "Dalam contoh itu, tiap rumpun ilmu \"saling sapa\": ilmu keislaman mengkaji muamalah dan etika bisnis Islam, ilmu sosial-humaniora meneliti kendala pelaku UMKM lewat wawancara dan survei, sedangkan sains dan teknologi memilih platform digital yang paling mudah diadopsi (hlm. 48–49)."
    ],
    istilah: [
      { istilah: "Tridharma perguruan tinggi", arti: "Dalam bab ini: tiga bidang yang diintegrasikan, yaitu pendidikan dan pengajaran, penelitian, serta pengabdian kepada masyarakat (hlm. 41–47)." },
      { istilah: "Islamisasi nalar", arti: "Cara bab ini membedakan model Twin Towers dari islamisasi ilmu pengetahuan: setiap disiplin bebas berkembang, lalu pada saatnya dipertemukan untuk berdialog (hlm. 42)." },
      { istilah: "Saling sapa", arti: "Dialog antardisiplin ilmu, yaitu ketika ilmu keislaman, sosial-humaniora, serta sains dan teknologi meninjau satu masalah dari sudut pandang masing-masing (hlm. 42, 48)." },
      { istilah: "Research-Integrated Curriculum", arti: "Kurikulum berbasis riset: mata kuliah dirancang dari penelitian dosen, dengan modul studi kasus dan hasil riset terkini (hlm. 43)." },
      { istilah: "Menara akademik dan menara riset", arti: "Dalam bagian penelitian dan pengabdian, dua pilar yang disinergikan adalah pendidikan (menara akademik) dan penelitian-inovasi (menara riset) (hlm. 44, 46)." },
      { istilah: "Hilirisasi", arti: "Membawa hasil penelitian ke dalam praktik pembelajaran, pengabdian, atau inovasi seperti prototipe dan paten (hlm. 44–45)." },
      { istilah: "Project-based learning", arti: "Pembelajaran berbasis proyek; dipakai dalam integrasi kurikulum-riset dan dalam contoh proyek UMKM (hlm. 45, 48)." },
      { istilah: "Ulul albab", arti: "Dalam bab ini: lulusan yang memiliki kekayaan intelektual, kematangan spiritual, dan kearifan perilaku (hlm. 43)." }
    ],
    sumber: { buku: "Integrasi Keilmuan Twin Towers (Buku Ajar), Ahmad Fauzi dkk.", halaman: "41–51" },
    bacaanPelengkap: [
      {
        penulis: "Ita Ainun Jariyah, Abdul Manan, dan Khoirotul Ummah",
        tahun: "2025",
        judul: "Integration of Output-Based Science with the Integrated Twin Tower Paradigm in Journal Review Lectures",
        terbitan: "Jurnal Mangifera Edu 9, no. 2: 67–78",
        tautan: "https://doi.org/10.31943/mangiferaedu.v9i2.209",
        alasan: "Contoh pengajaran: perkuliahan di Prodi Pendidikan Sains UINSA yang menerapkan Integrated Twin Tower dan menghasilkan draf artikel mahasiswa. Artikel ini juga dikutip di buku ajar."
      },
      {
        penulis: "Munawir Saharuddin dan Tobroni",
        tahun: "2024",
        judul: "Model Penelitian Pendidikan Agama Islam Berbasis Integrasi-Interkoneksi: Analisis Pendekatan Pohon Ilmu, Jaring Laba-Laba, dan Twin Tower",
        terbitan: "Karakter: Jurnal Riset Ilmu Pendidikan Islam 1, no. 4: 169–182",
        tautan: "https://doi.org/10.61132/karakter.v1i4.203",
        alasan: "Contoh penelitian: membandingkan tiga model integrasi (pohon ilmu, jaring laba-laba, dan Twin Towers) sebagai model penelitian Pendidikan Agama Islam. Artikel ini juga dikutip di buku ajar."
      },
      {
        penulis: "Rahmat Rudianto",
        tahun: "2026",
        judul: "Implementasi Integrasi Twin Towers dalam Materi Model Kurikulum Pendidikan Inklusif pada Mata Kuliah Pendidikan Inklusif Prodi S1 PGMI Universitas Islam Negeri Sunan Ampel Surabaya",
        terbitan: "Jurnal Penelitian dan Pengabdian Masyarakat 4, no. 1: 1–11",
        tautan: "https://doi.org/10.61231/hh11nn35",
        alasan: "Contoh pengabdian: program pendampingan yang menerapkan Twin Towers dalam mata kuliah pendidikan inklusif, sebagai pembanding proyek UMKM di buku."
      }
    ],
    perluDicek: false
  },
  {
    id: "itt-bab-04",
    judul: "Desain Praktikum Kelompok Berbasis Integrasi Twin Towers (ITT)",
    mapel: "Integrasi Keilmuan Twin Towers",
    bab: "Bab 4",
    tema: "pola",
    isi: "Bab ini adalah panduan praktikum kelompok, bukan bab materi. Lewat wawancara dengan dosen, mahasiswa belajar menjelaskan konsep dasar dan urgensi Integrasi Twin Towers (ITT), melihat penerapannya dalam pembelajaran, penelitian, atau pengabdian, dan menghasilkan karya akademik yang memadukan nilai wahyu dan rasionalitas ilmiah (hlm. 53–54). Langkah kerjanya sebagai berikut.\n\n1. Bentuk kelompok sesuai jenjang: S1 terdiri dari 3–6 kelompok berisi 4–8 mahasiswa, S2 berkelompok 3–4 mahasiswa, dan S3 berkelompok 2–3 mahasiswa (hlm. 54–55).\n\n2. Susun instrumen atau daftar pertanyaan wawancara tentang pemahaman dosen terhadap konsep dasar ITT dan praktik baiknya (hlm. 54–55).\n\n3. Wawancarai 2 dosen di fakultas sendiri yang sudah menerapkan ITT dalam pembelajaran, penelitian, atau pengabdian (hlm. 54–55).\n\n4. Olah hasil wawancara sesuai jenjang. S1 membuat catatan lapangan dan menyintesis nilai wahyu dengan rasionalitas ilmiah. S2 menyusun transkrip, mencari 3 artikel jurnal nasional terakreditasi, lalu menawarkan solusi atas masalah ITT yang ditemukan. S3 mencari minimal 2 artikel jurnal internasional bereputasi dan 2 artikel jurnal nasional terakreditasi, lalu menulis opini kritis tentang pola integrasi yang sudah berjalan (hlm. 54–56).\n\n5. Presentasikan hasilnya di kelas, lakukan refleksi, dan berikan rekomendasi (hlm. 54).\n\n6. Kumpulkan laporan tertulis dan slide; S3 juga menyertakan draf esai opini untuk media sosial atau surat kabar. Laporan memuat sampul, pendahuluan, konsep ITT, metode pengambilan data, temuan (dan analisis untuk jenjang lanjut), penutup atau rekomendasi, serta daftar pustaka (hlm. 54–57).\n\n7. Penilaian memakai rubrik empat aspek dengan skor 1–4: pemahaman konsep ITT, analisis integratif, kualitas bahasa dan laporan, serta keterlibatan dalam diskusi dan refleksi. Nilai akhir = skor yang diperoleh × 100 ÷ 16 (hlm. 57–58).",
    poinKunci: [
      "Tujuan praktikum: mahasiswa mampu menjelaskan konsep dasar dan urgensi ITT, menerapkan prinsip ITT dalam pembelajaran, penelitian, dan pengabdian, serta menghasilkan karya akademik yang mencerminkan sintesis nilai wahyu dan rasionalitas ilmiah (hlm. 53–54).",
      "Kegiatan inti di semua jenjang: menyusun instrumen wawancara tentang pemahaman dosen terhadap konsep dasar dan praktik baik ITT, lalu mewawancarai 2 dosen yang sudah menerapkan ITT dalam pembelajaran, penelitian, atau pengabdian (hlm. 54–55).",
      "Jenjang S1: 3–6 kelompok berisi 4–8 mahasiswa; membuat catatan lapangan, melaporkannya di kelas dengan sintesis nilai wahyu dan rasionalitas ilmiah, lalu mengumpulkan laporan tertulis dan slide (hlm. 54).",
      "Jenjang S2: kelompok 3–4 mahasiswa; menyusun transkrip wawancara, mencari 3 artikel jurnal nasional terakreditasi, mencatat permasalahan ITT di lapangan, dan menawarkan rekomendasi solusi lewat sintesis nilai wahyu, perbandingan dengan pustaka, dan rasionalitas ilmiah (hlm. 55).",
      "Jenjang S3: kelompok 2–3 mahasiswa; minimal 2 artikel jurnal internasional bereputasi dan 2 artikel jurnal nasional terakreditasi; membuat artikel opini analisis kritis tentang pola integrasi yang sudah berjalan, lalu mengumpulkan draf esai opini (untuk media sosial atau surat kabar) dan slide (hlm. 55–56).",
      "Format laporan: sampul, pendahuluan, konsep ITT, metode pengambilan data, temuan (untuk jenjang lanjut: temuan dan analisis), penutup/rekomendasi, dan daftar pustaka. Jenjang lanjut menambahkan lampiran transkrip wawancara atau lampiran draf esai kritis (hlm. 56–57).",
      "Rubrik menilai empat aspek dengan skor 1–4: pemahaman konsep ITT, kemampuan analisis integratif, kualitas bahasa dan laporan, serta keterlibatan dalam diskusi dan refleksi (hlm. 57–58).",
      "Untuk skor tertinggi pada aspek kualitas laporan, tingkat kemiripan dan AI tidak lebih dari 20% dan tidak ada kesalahan tata bahasa. Nilai akhir = skor yang diperoleh × 100 ÷ 16 (hlm. 57–58)."
    ],
    istilah: [
      { istilah: "ITT", arti: "Singkatan dari Integrasi Twin Towers, paradigma yang memadukan ilmu keislaman dan ilmu umum (sains, sosial, humaniora) secara utuh, sejajar, dan saling memperkaya (hlm. 53)." },
      { istilah: "Rubrik penilaian", arti: "Dalam bab ini: tabel empat aspek penilaian laporan, masing-masing diberi skor 1 sampai 4, dengan skor maksimal 16 (hlm. 57–58)." }
    ],
    sumber: { buku: "Integrasi Keilmuan Twin Towers (Buku Ajar), Ahmad Fauzi dkk.", halaman: "53–58" },
    perluDicek: false
  },
  {
    id: "itt-bab-05",
    judul: "Pola Integrasi II: Integrasi Teori dan Lapangan",
    mapel: "Integrasi Keilmuan Twin Towers",
    bab: "Bab 5",
    tema: "pola",
    isi: "Bab ini membahas pola integrasi kedua, yaitu integrasi teori dan lapangan. ITT digambarkan sebagai dua menara setara yang dihubungkan jembatan, dan bergerak dalam kerangka \"Islamisasi Nalar\" yang bersifat \"hulu\": membentuk cara berpikir integratif, bukan mengislamkan ilmunya. Pola ini menjawab masalah pendidikan tinggi: materi kuliah terkotak-kotak, hard skill dan soft skill kurang dipadukan, materi terlalu banyak, serta ceramah pasif satu arah yang menghambat berpikir kritis dan kerja sama, sehingga lulusan kaya konsep tetapi minim keterampilan di lapangan. Jawabannya adalah dua pilar: experiential learning dan inquiry-based learning (hlm. 59–63).\n\nEsensinya adalah mengubah pengalaman menjadi pengetahuan, keterampilan, sikap, perilaku, dan keyakinan. Prosesnya berawal dari stimulus, berinteraksi dengan pengetahuan yang sudah ada, tersimpan sebagai memori jangka panjang, lalu dapat dipanggil kembali sebagai memori kerja. Pendekatan ini cocok bagi mahasiswa sebagai pembelajar dewasa yang mandiri, menghargai pelajaran yang terkait kebutuhan hidupnya, dan termotivasi dari dalam. Mereka belajar lewat pengalaman, praktik, dan proses berpikir, melalui coba-coba, observasi, dan tindakan nyata (hlm. 61–64).\n\nContohnya antara lain PKL di lembaga keuangan syariah, ketika mahasiswa membandingkan teori fikih muamalah dengan penerapan akad di lapangan; pengabdian berbasis riset, misalnya riset tentang metode dakwah di komunitas urban yang hasilnya dapat diterapkan dalam program pemberdayaan dan dijadikan bahan ajar baru; serta proyek lingkungan yang memadukan teori ekologi dengan maqashid syariah atau fikih lingkungan. Lulusan yang dituju memadukan fikir dan dzikir, serta matang dalam sikap dan perilaku (hlm. 64–67).\n\nExperiential learning diwujudkan lewat praktikum atau praktik (termasuk praktik ibadah), magang, pelatihan, diskusi dan lokakarya, seminar, serta tugas yang mendorong eksplorasi. Dalam Kerangka Kualifikasi Integrasi Keilmuan (KKIK), lulusan S1 setidaknya setara jenjang 6 dengan fokus \"mengombinasikan\": memadukan teori dengan data lapangan dan menggabungkan dua perspektif atau lebih, misalnya psikologi modern dengan prinsip tazkiyatun nafs (hlm. 67–70).\n\nInquiry-based learning mengajak mahasiswa bertanya, menyelidiki, dan menemukan jawaban sendiri: merumuskan pertanyaan dari masalah di lapangan, bereksplorasi, memakai aneka sumber, lalu menyelesaikan masalah. Kelanjutannya adalah riset terapan yang berorientasi pada masalah nyata. Di S1 bentuknya riset sederhana atau studi kasus, misalnya studi netnografi tentang ukhuwah di komunitas daring; di S2 memecahkan masalah, misalnya sengketa wakaf produktif dengan hukum positif dan fikih muamalah; dan di S3 menghasilkan teori, model, atau paradigma baru. Dengan begitu mahasiswa menjadi produsen pengetahuan, bukan sekadar konsumen ilmu (hlm. 71–74).",
    poinKunci: [
      "Masalah yang dijawab pola ini: materi kuliah terkotak-kotak, kurangnya integrasi hard skill dan soft skill, materi yang terlalu banyak, serta dominasi ceramah pasif satu arah yang menghambat berpikir kritis, partisipasi aktif, dan kolaborasi (hlm. 60, 62–63).",
      "ITT bergerak dalam kerangka \"Islamisasi Nalar\" yang bersifat \"hulu\", yaitu membentuk cara berpikir integratif, bukan islamisasi ilmu pengetahuan (hlm. 59).",
      "Esensi integrasi teori dan lapangan adalah transformasi pengalaman menjadi pengetahuan, keterampilan, sikap, perilaku, dan keyakinan: berawal dari stimulus, berinteraksi dengan pengetahuan lama, tersimpan sebagai memori jangka panjang, lalu dapat dipanggil kembali sebagai memori kerja (hlm. 61).",
      "Pendekatan ini cocok dengan karakter pembelajar dewasa yang mandiri, menghargai pembelajaran yang terkait kebutuhan hidupnya, dan termotivasi dari dalam. Mahasiswa belajar lewat pengalaman, praktik (psikomotorik), dan proses berpikir (kognitif) (hlm. 62–63).",
      "Contoh di lapangan: PKL di lembaga keuangan syariah yang membandingkan teori fikih muamalah dengan praktik akad; pengabdian berbasis riset, misalnya riset metode dakwah di komunitas urban yang diterapkan dalam program pemberdayaan; dan proyek lingkungan yang memadukan teori ekologi dengan maqashid syariah atau fikih lingkungan (hlm. 64–66).",
      "Bentuk kegiatan experiential learning: praktikum atau praktik (termasuk praktik ibadah), magang, pelatihan, diskusi dan lokakarya, seminar, serta tugas lain yang mendorong eksplorasi, kreasi, dan eksperimen (hlm. 67–69).",
      "Dalam KKIK, lulusan S1 diharapkan setidaknya setara jenjang 6 dengan fokus \"mengombinasikan\" atau \"menghubungkan\": memadukan teori dengan data lapangan dan menggabungkan dua perspektif atau lebih. Contoh CPL: mengombinasikan psikologi modern dengan prinsip tazkiyatun nafs untuk menganalisis perilaku manusia (hlm. 69–70).",
      "Dalam inquiry-based learning, mahasiswa merumuskan pertanyaan dari masalah di lapangan, bereksplorasi dan bereksperimen, memanfaatkan aneka sumber belajar (bukan hanya buku teks), lalu menyelesaikan permasalahan (hlm. 71–72).",
      "Riset terapan adalah kelanjutan inquiry-based learning pada jenjang lebih tinggi, berorientasi pada masalah nyata, berbeda dari riset dasar yang fokus pada teori murni. S1: riset sederhana atau studi kasus; S2: memecahkan permasalahan, misalnya sengketa wakaf produktif dengan hukum positif dan fikih muamalah; S3: menghasilkan teori, model, atau paradigma baru (hlm. 72–74).",
      "Tujuan akhirnya: lulusan yang memadukan fikir dan dzikir, matang dalam sikap dan perilaku, dan menjadi produsen pengetahuan, bukan sekadar konsumen ilmu (hlm. 66–67, 74)."
    ],
    istilah: [
      { istilah: "Integrasi teori dan lapangan", arti: "Pola integrasi kedua dalam ITT, agar pembelajaran tidak berhenti pada konsep abstrak di kelas, tetapi relevan dan aplikatif dengan realitas di lapangan (hlm. 60)." },
      { istilah: "Experiential learning", arti: "Pembelajaran berbasis pengalaman; inti proses yang mengubah pengalaman menjadi pengetahuan, keterampilan, sikap, perilaku, dan keyakinan mahasiswa (hlm. 60, 67)." },
      { istilah: "Inquiry-based learning", arti: "Teknik mengajar yang melibatkan mahasiswa lewat bertanya, pemecahan masalah, dan berpikir kritis, agar mereka memanfaatkan aneka sumber belajar untuk menyelesaikan suatu permasalahan (hlm. 71)." },
      { istilah: "Riset terapan", arti: "Riset yang berorientasi pada penyelesaian masalah nyata atau inovasi berdampak langsung, dan secara eksplisit menghubungkan teori dengan kebutuhan di lapangan (hlm. 72–73)." },
      { istilah: "Hard skill dan soft skill", arti: "Hard skill adalah keterampilan teknis; soft skill adalah keterampilan interpersonal dan adaptif. Keduanya perlu dipadukan untuk dunia kerja (hlm. 62)." },
      { istilah: "Memori kerja (working memory)", arti: "Pengetahuan yang tersimpan dalam memori jangka panjang, lalu dipanggil dan diolah kembali agar berguna dalam berbagai situasi (hlm. 61)." },
      { istilah: "KKIK", arti: "Kerangka Kualifikasi Integrasi Keilmuan. Dalam bab ini dipakai untuk membedakan fokus kompetensi tiap jenjang: S1 mengombinasikan, S2 memecahkan permasalahan, S3 mengembangkan pengetahuan baru (hlm. 69, 73–74)." },
      { istilah: "CPL", arti: "Capaian Pembelajaran Lulusan (hlm. 70)." }
    ],
    sumber: { buku: "Integrasi Keilmuan Twin Towers (Buku Ajar), Ahmad Fauzi dkk.", halaman: "59–74" },
    bacaanPelengkap: [
      {
        penulis: "I. Farida, H. Hadiansyah, M. Mahmud, dan A. Munandar",
        tahun: "2017",
        judul: "Project-Based Learning Design for Internalization of Environmental Literacy with Islamic Values",
        terbitan: "Jurnal Pendidikan IPA Indonesia 6, no. 2: 277–284",
        tautan: "https://doi.org/10.15294/jpii.v6i2.9452",
        alasan: "Contoh lengkap proyek lingkungan yang memadukan sains dengan nilai-nilai Islam, seperti yang disebut dalam bab ini. Artikel ini juga dikutip di buku ajar."
      },
      {
        penulis: "Margus Pedaste dkk.",
        tahun: "2015",
        judul: "Phases of Inquiry-Based Learning: Definitions and the Inquiry Cycle",
        terbitan: "Educational Research Review 14: 47–61",
        tautan: "https://doi.org/10.1016/j.edurev.2015.02.003",
        alasan: "Merangkum berbagai model inkuiri menjadi satu siklus bertahap, sehingga tahapan inquiry-based learning terlihat lebih rinci. Berbahasa Inggris; juga dikutip di buku ajar."
      },
      {
        penulis: "Zulkifli Musthan, Dirman, Nasir, dan Ari Laksono",
        tahun: "2026",
        judul: "Soft Skills Development in Indonesian Islamic Higher Education: Institutional Practices and the SSDIHE Model for Society 5.0",
        terbitan: "Journal of Education and Teaching 7, no. 2: 397–414",
        tautan: "https://doi.org/10.51454/jet.v7i2.820",
        alasan: "Penelitian di 13 PTKI tentang pengembangan soft skill lewat experiential learning dan pembelajaran berbasis proyek, menyambung masalah hard skill dan soft skill di bab ini."
      }
    ],
    perluDicek: false
  },
  {
    id: "itt-bab-06",
    judul: "Desain Praktikum Kelompok Experiential Learning Berbasis Integrasi Twin Towers (ITT)",
    mapel: "Integrasi Keilmuan Twin Towers",
    bab: "Bab 6",
    tema: "pola",
    isi: "Bab ini adalah panduan praktikum kelompok yang menjadi pasangan Bab 5, sehingga pendekatannya selaras dengan experiential learning dan inquiry-based learning. Tujuannya agar mahasiswa mampu menjelaskan konsep dasar experiential learning, menerapkan prinsip ITT dalam pembelajaran experiential, penelitian, dan pengabdian, serta menghasilkan karya akademik yang memadukan nilai wahyu dan rasionalitas ilmiah. Berbeda dari praktikum Bab 4 yang mewawancarai dosen, di sini yang diwawancarai adalah sesama mahasiswa (hlm. 77–78). Langkah kerjanya sebagai berikut.\n\n1. Bentuk kelompok sesuai jenjang: S1 terdiri dari 3–6 kelompok berisi 4–8 mahasiswa, S2 berkelompok 3–4 mahasiswa, dan S3 berkelompok 2–3 mahasiswa (hlm. 78–80).\n\n2. Susun instrumen wawancara. S1 menanyakan pemahaman tentang konsep dasar ITT dan pengalaman experiential learning; S2 dan S3 menanyakan konsep experiential learning dan praktik baik inquiry learning (hlm. 78–80).\n\n3. Wawancarai 2 mahasiswa dari mata kuliah yang berbeda yang diyakini sudah mengalami experiential learning (hlm. 78–80).\n\n4. Olah hasil wawancara sesuai jenjang. S1 membuat catatan lapangan dan menyintesis nilai wahyu dengan rasionalitas ilmiah. S2 menyusun transkrip, mencari 2 artikel jurnal nasional terakreditasi, lalu menawarkan solusi atas masalah experiential learning yang ditemukan. S3 mencari minimal 2 artikel jurnal internasional bereputasi dan 2 artikel jurnal nasional terakreditasi, lalu menulis opini kritis tentang pola integrasi dalam experiential learning yang sudah berjalan (hlm. 79–80).\n\n5. Presentasikan hasilnya di kelas, lakukan refleksi, dan berikan rekomendasi (hlm. 78).\n\n6. Kumpulkan hasilnya: S1 menyerahkan laporan tertulis, refleksi pengalaman pribadi, dan slide; S2 menyerahkan laporan tertulis, refleksi pengalaman, dan slide; S3 menyerahkan draf esai opini untuk media sosial atau surat kabar dan slide. Format laporannya sama dengan Bab 4, dengan lampiran transkrip wawancara (S2) atau draf esai kritis (S3) (hlm. 79–81).\n\n7. Penilaian memakai rubrik yang sama dengan Bab 4: pemahaman konsep ITT, analisis integratif, kualitas bahasa dan laporan, serta keterlibatan dalam diskusi dan refleksi, masing-masing berskor 1–4. Nilai akhir = skor yang diperoleh × 100 ÷ 16 (hlm. 81–82).",
    poinKunci: [
      "Tujuan praktikum: mahasiswa mampu menjelaskan konsep dasar experiential learning, menerapkan prinsip ITT dalam pembelajaran experiential, penelitian, dan pengabdian, serta menghasilkan karya akademik yang mencerminkan sintesis nilai wahyu dan rasionalitas ilmiah (hlm. 78).",
      "Kegiatan inti di semua jenjang: menyusun instrumen wawancara, lalu mewawancarai 2 mahasiswa dari mata kuliah yang berbeda yang diyakini sudah mengalami experiential learning (hlm. 78–80).",
      "Jenjang S1: 3–6 kelompok berisi 4–8 mahasiswa; instrumen menanyakan konsep dasar ITT dan pengalaman experiential learning; hasilnya dilaporkan di kelas dengan sintesis nilai wahyu dan rasionalitas ilmiah; dikumpulkan laporan tertulis, refleksi pengalaman pribadi, dan slide (hlm. 78–79).",
      "Jenjang S2: kelompok 3–4 mahasiswa; instrumen menanyakan konsep experiential learning dan praktik baik inquiry learning; menyusun transkrip, mencari 2 artikel jurnal nasional terakreditasi, mencatat permasalahan experiential learning, dan menawarkan solusi lewat sintesis nilai wahyu, perbandingan pustaka, dan rasionalitas ilmiah (hlm. 79).",
      "Jenjang S3: kelompok 2–3 mahasiswa; minimal 2 artikel jurnal internasional bereputasi dan 2 artikel jurnal nasional terakreditasi; membuat artikel opini analisis kritis tentang pola integrasi dalam experiential learning yang sudah berjalan, lalu mengumpulkan draf esai opini dan slide (hlm. 80).",
      "Format laporan sama dengan Bab 4: S1 berisi sampul, pendahuluan, konsep ITT, metode pengambilan data, temuan, penutup/rekomendasi, dan daftar pustaka; S2 menambah analisis dan lampiran transkrip wawancara; S3 menambah analisis dan lampiran draf esai kritis (hlm. 80–81).",
      "Rubrik memakai aspek yang sama dengan Bab 4: pemahaman konsep ITT, kemampuan analisis integratif, kualitas bahasa dan laporan (skor tertinggi: kemiripan dan AI tidak lebih dari 20%), serta keterlibatan dalam diskusi dan refleksi. Nilai akhir = skor yang diperoleh × 100 ÷ 16 (hlm. 81–82)."
    ],
    istilah: [
      { istilah: "Experiential learning", arti: "Pembelajaran berbasis pengalaman yang menjadi fokus praktikum ini; konsepnya diuraikan di Bab 5 (hlm. 77–78)." }
    ],
    sumber: { buku: "Integrasi Keilmuan Twin Towers (Buku Ajar), Ahmad Fauzi dkk.", halaman: "77–82" },
    perluDicek: false
  },
  {
    id: "itt-bab-07",
    judul: "Pola Integrasi III: Integrasi Lintas Disiplin Ilmu – Kolaborasi Antar Disiplin",
    mapel: "Integrasi Keilmuan Twin Towers",
    bab: "Bab 7",
    tema: "pola",
    isi: "Bab ini membahas pola integrasi ketiga, yaitu integrasi lintas disiplin ilmu. Masalah kontemporer seperti krisis lingkungan, kesehatan masyarakat, ketidaksetaraan sosial, etika teknologi, dan pembangunan berkelanjutan bersifat multidimensi, sehingga tidak bisa diselesaikan oleh satu disiplin saja; pendekatan interdisipliner menjadi keharusan, bukan sekadar pilihan. Filosofi pendidikan UIN Sunan Ampel adalah menemukan, mengembangkan, berinovasi, dan menyebarluaskan ilmu keislaman, sosial-humaniora, serta sains dan teknologi. Menurut Panduan Integrasi Keilmuan UINSA, ITT memuat tiga pola: integrasi tridharma, integrasi teori dan lapangan, serta integrasi lintas disiplin lewat pembelajaran transdisipliner (hlm. 83–86).\n\nStruktur bangunannya diuraikan lebih rinci. Fondasinya Al-Qur'an dan Hadis sebagai landasan profetik: ilmu tidak bebas nilai, ilmu keislaman tidak terpinggirkan dalam kurikulum, dan arah pengembangannya adalah ilmu sosial, sains, serta humaniora profetik yang transformatif. Menara pertama berisi ilmu keislaman murni (tafsir, hadis, fikih, kalam, tasawuf) dan terapan (dakwah, tarbiyah); menara kedua berisi sains-teknologi serta sosial-humaniora. Keduanya dibiarkan berkembang sesuai karakter dan objeknya, tanpa paksaan untuk selalu berdialog; yang diislamkan adalah nalarnya, bukan isi ilmu umum secara dogmatis (hlm. 87–92).\n\nLengkung penghubung di puncaknya adalah elemen terpenting, tempat dua disiplin \"saling sapa\": satu menjadi pokok bahasan (subject matter) dan yang lain menjadi pendekatan (approach), seperti Sosiologi Agama, Ekonomi Islam, dan Politik Islam. Contoh kolaborasinya adalah Sosiologi dan Fiqh. Sosiologi menjelaskan \"apa yang terjadi\" di masyarakat, fiqh menetapkan \"apa yang seharusnya\". Sosiologi membantu fiqh memahami konteks penerapan hukum, mengungkap mengapa misalnya zakat produktif atau penolakan riba sulit diterapkan, dan merumuskan ijtihad yang lebih kontekstual, sementara fiqh memberi kerangka etika dan nilai (hlm. 92–99).\n\nIntegrasi transdisipliner melangkah lebih jauh: bertolak dari masalah nyata seperti kemiskinan, perubahan iklim, atau radikalisasi; melampaui batas disiplin; melibatkan pembuat kebijakan, praktisi, dan komunitas; serta dapat menghasilkan pengetahuan, kebijakan, bahkan disiplin baru. Di UINSA, tujuannya adalah ilmu sosial, sains, serta kultur dan humaniora yang profetik (hlm. 99–101).\n\nTantangan utamanya adalah perbedaan epistemologi: ilmu keislaman cenderung normatif-deduktif dari teks, ilmu sosial empiris-induktif, dan sains rasional-empiris lewat eksperimen. Perbedaan ini menyulitkan komunikasi, kesepakatan metodologi, dan asumsi dasar. Ada pula ego disipliner, struktur kampus yang terkotak-kotak, kurikulum yang terfragmentasi, penilaian akademik yang berpusat pada satu disiplin, dan keterbatasan sumber daya. Solusi yang ditawarkan antara lain kurikulum integratif sesuai jenjang, penyelarasan visi lewat penyusunan RPS, strategi gerak ganda, pengalaman belajar yang konkret, pelatihan dosen, penghargaan, dan penjaminan mutu dengan siklus PPEPP (hlm. 101–106).",
    poinKunci: [
      "Integrasi lintas disiplin mendesak karena masalah kontemporer (krisis lingkungan, kesehatan masyarakat, ketidaksetaraan sosial, etika teknologi, pembangunan berkelanjutan) bersifat multidimensi dan tidak bisa diselesaikan oleh satu disiplin saja (hlm. 83–84).",
      "UIN Sunan Ampel menggerakkan tiga pilar program akademik: penguatan ilmu keislaman murni yang langka, integrasi ilmu keislaman dengan sosial-humaniora, serta pembobotan sains dan teknologi dengan ilmu keislaman (hlm. 85).",
      "Menurut Panduan Integrasi Keilmuan UINSA, ada tiga elemen integrasi: integrasi tridharma, integrasi teori dan lapangan lewat pembelajaran berbasis inkuiri, serta integrasi lintas disiplin lewat pembelajaran transdisipliner (hlm. 85–86).",
      "Struktur Integrated Twin Towers: fondasi Al-Qur'an dan Hadis; menara 1 berisi ilmu keislaman murni (tafsir, hadis, fikih, kalam, tasawuf) dan terapan (dakwah, tarbiyah); menara 2 berisi sains-teknologi (kedokteran, kesehatan masyarakat, biologi, rekayasa) serta sosial-humaniora (sosiologi, antropologi, politik, psikologi, sejarah, filsafat); di puncaknya ada lengkung penghubung (hlm. 87–92).",
      "Fondasi profetik berarti ilmu tidak bebas nilai, ilmu keislaman tidak terpinggirkan dalam kurikulum, dan arah pengembangannya adalah ilmu sosial, sains, serta kultur dan humaniora yang profetik (hlm. 88–89).",
      "Kedua menara diberi keleluasaan berkembang sesuai karakter dan objeknya masing-masing, tanpa paksaan untuk selalu berdialog. Yang diislamkan adalah nalarnya, bukan seluruh isi ilmu umum secara dogmatis (hlm. 90–92).",
      "Di lengkung penghubung, satu disiplin menjadi subject matter (pokok bahasan) dan disiplin lain menjadi approach (pendekatan). Contoh: Sosiologi Agama (agama sebagai pokok bahasan, sosiologi sebagai pendekatan), Ekonomi Islam (ekonomi sebagai pokok bahasan, fiqh/syariah sebagai pendekatan), dan Politik Islam (hlm. 92–94).",
      "Kolaborasi antardisiplin lebih maju daripada sekadar multidisipliner, karena terjadi pertukaran gagasan, metodologi, dan teori secara substansial. Contoh Sosiologi dan Fiqh: sosiologi (\"apa yang terjadi\") membantu fiqh (\"apa yang seharusnya\") memahami konteks penerapan hukum, mengungkap resistensi sosial, dan merumuskan ijtihad atau fatwa yang lebih kontekstual (hlm. 94–99).",
      "Ciri integrasi transdisipliner: berorientasi pada masalah dunia nyata, melampaui batas disiplin, melibatkan pemangku kepentingan non-akademik, dan menghasilkan pengetahuan baru yang dapat diterapkan, bahkan disiplin baru (hlm. 99–101).",
      "Tantangan utama adalah perbedaan epistemologi: ilmu keislaman cenderung normatif-deduktif dari teks, ilmu sosial empiris-induktif, sedangkan sains rasional-empiris dan eksperimental. Akibatnya muncul kesulitan dalam komunikasi, metodologi, dan asumsi dasar (hlm. 101–103).",
      "Tantangan lain: ego disipliner, struktur institusi yang terkotak-kotak, kurikulum yang terfragmentasi, sistem penilaian akademik yang berpusat pada jurnal satu disiplin, dan keterbatasan sumber daya (hlm. 103–104).",
      "Solusi dari UINSA: kurikulum integratif sesuai jenjang, penyelarasan visi lewat sosialisasi dan penyusunan RPS, strategi gerak ganda (double movement), pengalaman belajar yang konkret, pelatihan dosen, penghargaan, dan penjaminan mutu internal dengan siklus PPEPP (hlm. 104–106)."
    ],
    istilah: [
      { istilah: "Integrasi lintas disiplin ilmu", arti: "Pola integrasi ketiga dalam model ITT; diwujudkan melalui pembelajaran transdisipliner (hlm. 84, 86)." },
      { istilah: "Lengkung penghubung", arti: "Elemen terpenting model Integrated Twin Towers: area tempat dua disiplin saling sapa dan berinteraksi secara mutualistik, sehingga lahir kajian multidisipliner (hlm. 92–93)." },
      { istilah: "Subject matter dan approach", arti: "Dalam pertautan dua disiplin, satu disiplin menjadi pokok bahasan (subject matter) dan disiplin lain menjadi pendekatan atau metodologi analisis (approach) (hlm. 93)." },
      { istilah: "Ilmu profetik", arti: "Arah pengembangan ilmu dari fondasi Al-Qur'an dan Hadis: ilmu sosial, sains, serta kultur dan humaniora yang tidak hanya deskriptif, tetapi juga transformatif dan berorientasi pada pemecahan masalah dengan perspektif Islam (hlm. 88–89, 101)." },
      { istilah: "Kolaborasi interdisipliner", arti: "Kerja sama antardisiplin yang lebih dalam daripada pendekatan multidisipliner: ada pertukaran gagasan, metodologi, dan kerangka teori yang menghasilkan wawasan baru (hlm. 94–95)." },
      { istilah: "Integrasi transdisipliner", arti: "Integrasi yang melampaui batas disiplin yang kaku, berpotensi menciptakan kerangka konseptual, metodologi, atau disiplin baru (hlm. 99)." },
      { istilah: "Transdisciplinary learning", arti: "Menurut panduan UINSA: pendidikan yang membantu mahasiswa mengembangkan berbagai aspek kepribadiannya (sosial, budaya, agama, seni, ekonomi, ilmu, teknologi) melalui integrasi multidisiplin untuk membahas isu atau masalah (hlm. 99)." },
      { istilah: "Fiqh", arti: "Yurisprudensi Islam yang secara normatif-preskriptif merumuskan hukum syariah dari Al-Qur'an, Hadis, ijma', dan qiyas; fokusnya \"apa yang seharusnya\" (hlm. 96)." },
      { istilah: "Gerak ganda (double movement)", arti: "Dalam bab ini: strategi yang memungkinkan dosen memilih gerak maju (dari teori ke lapangan, atau dari agama ke umum) atau gerak mundur (sebaliknya) sesuai karakter keilmuannya (hlm. 105)." },
      { istilah: "PPEPP", arti: "Siklus penjaminan mutu internal: Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan (hlm. 106)." }
    ],
    sumber: { buku: "Integrasi Keilmuan Twin Towers (Buku Ajar), Ahmad Fauzi dkk.", halaman: "83–106" },
    bacaanPelengkap: [
      {
        penulis: "Khozin dan Umiarso",
        tahun: "2019",
        judul: "The Philosophy and Methodology of Islam-Science Integration: Unravelling the Transformation of Indonesian Islamic Higher Institutions",
        terbitan: "Ulumuna 23, no. 1: 135–162",
        tautan: "https://doi.org/10.20414/ujis.v23i1.359",
        alasan: "Mengulas filsafat dan metodologi integrasi Islam-sains dalam transformasi perguruan tinggi Islam Indonesia, sebagai latar struktur bangunan ITT. Artikel ini juga dikutip di buku ajar."
      },
      {
        penulis: "Nancy Budwig dan Achu Johnson Alexander",
        tahun: "2020",
        judul: "A Transdisciplinary Approach to Student Learning and Development in University Settings",
        terbitan: "Frontiers in Psychology 11: 576250",
        tautan: "https://doi.org/10.3389/fpsyg.2020.576250",
        alasan: "Menjelaskan pembelajaran transdisipliner di perguruan tinggi, pendekatan yang dipakai UINSA untuk integrasi lintas disiplin. Berbahasa Inggris; juga dikutip di buku ajar."
      },
      {
        penulis: "Ratna Pangastuti dan Ninik Fadhillah",
        tahun: "2020",
        judul: "Integrated Twin Tower (ITT) Based Learning to Think (LTT) Model to Enhance Scientific Creativity and Spiritual of Students in the Early Childhood Islamic Education Department",
        terbitan: "Studies in Learning and Teaching 1, no. 1: 18–26",
        tautan: "https://doi.org/10.46627/silet.v1i1.21",
        alasan: "Contoh model pembelajaran berbasis ITT dari dosen UINSA untuk menumbuhkan kreativitas ilmiah sekaligus spiritualitas mahasiswa. Artikel ini juga dikutip di buku ajar."
      }
    ],
    perluDicek: false
  },
  {
    id: "itt-bab-08",
    judul: "Desain Praktikum Kelompok Integrasi Twin Towers (ITT) Interdisipliner",
    mapel: "Integrasi Keilmuan Twin Towers",
    bab: "Bab 8",
    tema: "pola",
    isi: "Bab ini adalah panduan praktikum kelompok yang menjadi pasangan Bab 7, dengan penekanan pada relasi antardisipliner, transdisipliner, dan pendekatan berbasis kompleksitas. Tujuannya agar mahasiswa mampu menjelaskan konsep pembelajaran antardisipliner dan transdisipliner, menerapkan prinsip ITT dalam relasi antardisiplin, serta menghasilkan karya akademik yang memadukan nilai wahyu dan rasionalitas ilmiah. Berbeda dari praktikum Bab 4 dan Bab 6 yang berupa wawancara, di sini mahasiswa menganalisis dokumen berupa artikel tentang kajian antardisipliner, lalu melakukan analisis SWOT (hlm. 113–114). Langkah kerjanya sebagai berikut.\n\n1. Bentuk kelompok sesuai jenjang: S1 terdiri dari 3–6 kelompok berisi 3–5 mahasiswa, S2 berkelompok 3–4 mahasiswa, dan S3 berkelompok 2–3 mahasiswa (hlm. 115).\n\n2. Ambil dokumen sumber diskusi melalui kode QR atau tautan yang tersedia di buku (hlm. 114).\n\n3. Baca dokumen sesuai jenjang: S1 membaca dokumen 1–2, S2 dokumen 1–3, dan S3 dokumen 1–4, ditambah artikel penunjang jika perlu (hlm. 115–116).\n\n4. Olah hasil bacaan sesuai jenjang. S1 membuat peta konsep tentang kelebihan dan kekurangan pembelajaran antardisipliner. S2 membuat peta konsep yang sama, lalu menemukan potensi masalah pada ketiga dokumen dan menawarkan alternatif solusi. S3 menyintesis pola penelitian interdisipliner dan transdisipliner dari segi jenis penelitian dan jenis keilmuan, lalu menyusun artikel opini pendek berisi analisis SWOT yang dihimpun dalam draf book chapter (hlm. 115–116).\n\n5. Laporkan hasilnya di kelas dengan menyintesis nilai wahyu dan rasionalitas ilmiah, lakukan refleksi, dan berikan rekomendasi (hlm. 114–115).\n\n6. Kumpulkan laporan tertulis, refleksi pengalaman, dan slide. Laporan memuat sampul, pendahuluan, konsep integrasi antardisiplin ilmu, temuan (dan analisis untuk jenjang lanjut), penutup atau rekomendasi, serta daftar pustaka, ditambah lampiran untuk S2 dan S3 (hlm. 115–117).\n\n7. Penilaian memakai rubrik yang sama dengan bab praktikum sebelumnya: pemahaman konsep ITT, analisis integratif, kualitas bahasa dan laporan, serta keterlibatan dalam diskusi dan refleksi, masing-masing berskor 1–4. Nilai akhir = skor yang diperoleh × 100 ÷ 16 (hlm. 117–118).",
    poinKunci: [
      "Tujuan praktikum: mahasiswa mampu menjelaskan konsep dasar pembelajaran antardisipliner dan transdisipliner, menerapkan prinsip ITT dalam relasi antardisipliner, transdisipliner, dan pendekatan berbasis kompleksitas, serta menghasilkan karya akademik yang mencerminkan sintesis nilai wahyu dan rasionalitas ilmiah (hlm. 113–114).",
      "Kegiatan inti: analisis dokumen artikel tentang kajian antardisipliner (sumber diskusi diakses lewat kode QR atau tautan di buku), dilanjutkan analisis SWOT, presentasi, refleksi, dan rekomendasi (hlm. 114).",
      "Jenjang S1: 3–6 kelompok berisi 3–5 mahasiswa; membaca dokumen 1–2; membuat peta konsep tentang kelebihan dan kekurangan pembelajaran antardisipliner, lalu melaporkannya di kelas; mengumpulkan laporan tertulis, refleksi pengalaman pribadi, dan slide (hlm. 115).",
      "Jenjang S2: kelompok 3–4 mahasiswa; membaca dokumen 1–3; membuat peta konsep kelebihan dan kekurangan, menemukan potensi masalah pada ketiga dokumen, dan menawarkan alternatif solusi (hlm. 115).",
      "Jenjang S3: kelompok 2–3 mahasiswa; membaca dokumen 1–4 (ditambah artikel penunjang jika perlu); menyintesis pola penelitian interdisipliner dan transdisipliner dari segi jenis penelitian dan jenis keilmuan; menyusun artikel opini pendek berisi analisis SWOT dan menghimpunnya dalam draf book chapter (hlm. 115–116).",
      "Format laporan: sampul, pendahuluan, konsep integrasi antardisiplin ilmu, temuan (jenjang lanjut: temuan dan analisis), penutup/rekomendasi, dan daftar pustaka, ditambah lampiran untuk S2 dan S3 (hlm. 116–117).",
      "Rubrik sama dengan bab praktikum sebelumnya: pemahaman konsep ITT, kemampuan analisis integratif, kualitas bahasa dan laporan, serta keterlibatan dalam diskusi dan refleksi. Nilai akhir = skor yang diperoleh × 100 ÷ 16 (hlm. 117–118)."
    ],
    istilah: [
      { istilah: "Analisis SWOT", arti: "Dalam praktikum ini: analisis yang dilakukan setelah membaca dokumen, untuk menilai penelitian atau pembelajaran interdisipliner. Buku tidak menguraikan kepanjangan atau langkah-langkahnya (hlm. 114, 116)." },
      { istilah: "Peta konsep", arti: "Dalam praktikum ini: bentuk ringkasan visual tentang kelebihan dan kekurangan pembelajaran antardisipliner dari dokumen yang dibaca (hlm. 115)." }
    ],
    sumber: { buku: "Integrasi Keilmuan Twin Towers (Buku Ajar), Ahmad Fauzi dkk.", halaman: "113–118" },
    perluDicek: false
  },
  {
    id: "itt-bab-09",
    judul: "Strategi Implementasi: Gerak Ganda (Double Movement) I",
    mapel: "Integrasi Keilmuan Twin Towers",
    bab: "Bab 9",
    tema: "gerak-ganda",
    isi: "Bab ini memperkenalkan gerak ganda (double movement) sebagai strategi implementasi integrasi, khususnya dalam penelitian. Penelitian yang bertumpu pada satu poros saja, entah teks atau wahyu saja maupun data empiris saja, sering gagal menangkap dinamika sosial, padahal PTKIN seperti UIN Sunan Ampel berkomitmen memadukan ilmu agama dan ilmu umum. Bab ini menjelaskan makna gerak ganda, fungsi gerak maju dan gerak mundur, serta kerangka praktis bagi mahasiswa untuk merancang penelitian singkat lintas disiplin (hlm. 119–121).\n\nIstilahnya berasal dari hermeneutika Fazlur Rahman (1919–1988), sebagai kritik atas tafsir yang literal dan terfragmentasi. Rahman bergerak mundur ke konteks historis pewahyuan untuk menemukan nilai moral universal Al-Qur'an, lalu maju kembali ke konteks masa kini. Ia dipengaruhi hermeneutika Barat, misalnya Emilio Betti, tetapi tetap berpijak pada tujuan moral Al-Qur'an. Konsep ini kemudian dipakai dalam studi hukum Islam, sosiologi agama, dan penelitian interdisipliner (hlm. 120–122).\n\nDalam pendidikan dan penelitian, gerak mundur bermula dari fenomena empiris lalu ditelusuri ke teori atau teks, sedangkan gerak maju bermula dari teori atau teks lalu diuji di lapangan. Teks, realitas sosial, dan interpretasi berhubungan secara dialektis: nilai umum teks direkontekstualisasi tanpa mengubah teksnya, dan bila penerapannya gagal, peneliti kembali mengkaji konteks historisnya lalu menyesuaikan strategi. Dalam Twin Towers, strategi ini mempertemukan kedua menara; misalnya fenomena zakat modern ditautkan dengan maqashid syariah dan sejarah zakat, lalu nilainya diproyeksikan ke penghimpunan zakat lewat fintech (hlm. 122–125).\n\nDalam tahapan riset, gerak maju dilakukan lebih dulu secara deduktif: konsep dibawa ke lapangan lewat wawancara, survei, studi kasus, atau observasi, disertai refleksi atas konteks sosial, budaya, dan ekonomi. Gerak mundur kemudian menggali latar sosial-historis teks atau teori, sehingga peneliti dapat membedakan nilai universal (keadilan, kemaslahatan) dari hukum konkret dan menemukan illat-nya. Keduanya berulang dalam siklus reflektif, sehingga penelitian menjadi deskriptif sekaligus preskriptif. Dalam laporan, bagian teori memuat konsep awal, metodologi menjelaskan kedua gerak, dan diskusi menunjukkan sintesisnya (hlm. 125–129).\n\nContoh lintas disiplinnya antara lain kesehatan mental di pesantren, yang memadukan psikologi modern dengan nilai seperti sabar dan tawakal, serta penanggulangan kemiskinan dengan sosiologi kemiskinan dan maqashid syariah. Bab ini menawarkan tujuh langkah praktis: membentuk tim lintas disiplin, memilih topik kontemporer, menentukan titik awal, merancang instrumen campuran, meneliti di lapangan, menganalisis data lalu kembali ke teks berbasis illat, dan menyintesis rekomendasi berbasis nilai dan bukti. Tantangannya adalah perbedaan bahasa ilmiah dan paradigma, lemahnya berpikir kritis, kurangnya bimbingan lintas disiplin, serta dominasi pendekatan tekstual atau positivistik murni (hlm. 129–134).",
    poinKunci: [
      "Penelitian yang bertumpu pada satu poros saja (hanya wahyu atau hanya empiris) sering gagal menangkap dinamika sosial kontemporer, sehingga dibutuhkan strategi yang menjembatani teks keagamaan dan realitas sosial (hlm. 119).",
      "Istilah double movement berasal dari hermeneutika Fazlur Rahman, sebagai respons terhadap tafsir yang literal dan parsial: bergerak ke konteks historis pewahyuan untuk menemukan nilai moral universal Al-Qur'an, lalu kembali ke konteks masa kini. Konsep ini kemudian diadopsi dalam studi hukum Islam, sosiologi agama, dan penelitian interdisipliner (hlm. 120–122).",
      "Definisi operasional dalam pendidikan dan penelitian: gerak mundur bermula dari fenomena empiris lalu ditelusuri ke teori atau teks agama; gerak maju bermula dari teori atau teks lalu diuji atau diproyeksikan ke fenomena lapangan (hlm. 122).",
      "Prinsip kerjanya adalah hubungan dialektis antara teks, realitas sosial, dan interpretasi. Teks tidak diubah, tetapi direkontekstualisasi; jika penerapannya gagal di lapangan, peneliti kembali menganalisis konteks historis teks, mengevaluasi interpretasi, lalu menyesuaikan strategi (hlm. 123–124).",
      "Dalam tahapan penelitian, gerak maju dilakukan lebih dulu: teori dibawa ke lapangan secara deduktif melalui wawancara, survei, studi kasus, atau observasi, disertai refleksi kritis atas konteks sosial, budaya, dan ekonomi (hlm. 125–126).",
      "Gerak mundur kemudian menggali latar sosial-budaya saat teks atau teori lahir, sehingga peneliti dapat membedakan nilai universal (keadilan, kemaslahatan) dari hukum konkret, menghindari tafsir literal, dan menemukan illat suatu teks (hlm. 126–127).",
      "Hasilnya adalah siklus reflektif yang berulang, bukan kombinasi satu kali; penelitian menjadi deskriptif sekaligus preskriptif. Dalam laporan, bagian teori memuat konsep awal, bagian metodologi menjelaskan gerak maju dan mundur, dan bagian diskusi menunjukkan sintesisnya (hlm. 128).",
      "Contoh zakat via fintech: dinilai dengan maqashid syariah (gerak maju); bila ditemukan hambatan budaya, dikaji kembali teks hukum zakat dan sejarah distribusinya pada masa Nabi dan Khalifah (gerak mundur), lalu diusulkan mekanisme distribusi alternatif yang tetap sesuai syariat (hlm. 124–125, 128).",
      "Contoh lintas disiplin lain: kesehatan mental di pesantren (mahasiswa psikologi menyusun skala psikometrik, mahasiswa agama menyediakan dimensi nilai seperti sabar dan tawakal) serta penanggulangan kemiskinan dengan teori sosiologi kemiskinan dan indikator maqashid syariah (hlm. 129–131).",
      "Tujuh langkah praktis: membentuk tim lintas disiplin, memilih topik kontemporer, menentukan titik awal (teori agama atau fenomena empiris), merancang instrumen campuran kuantitatif-kualitatif, melaksanakan penelitian lapangan, menganalisis data lalu mengkaji kembali teks berbasis illat, dan menyintesis rekomendasi berbasis nilai dan bukti (hlm. 132).",
      "Tantangannya: perbedaan bahasa ilmiah, paradigma, dan nilai antardisiplin; lemahnya kemampuan berpikir kritis; kurangnya bimbingan metodologis lintas disiplin; serta masih dominannya pendekatan tekstual atau positivistik murni (hlm. 131–133)."
    ],
    istilah: [
      { istilah: "Gerak ganda (double movement)", arti: "Strategi metodologis dua arah yang menghubungkan teori atau teks dengan data lapangan secara dialektis; berakar pada hermeneutika Fazlur Rahman (hlm. 120–122)." },
      { istilah: "Gerak maju (forward movement)", arti: "Berangkat dari teori, konsep, atau teks, lalu membawanya ke lapangan untuk diuji dan diterapkan; dekat dengan pendekatan deduktif (hlm. 122, 125–126)." },
      { istilah: "Gerak mundur (backward movement)", arti: "Menelusuri kembali dari data atau fenomena ke teori atau teks, termasuk menggali konteks sosial-historis saat teks atau teori itu lahir (hlm. 122, 126–127)." },
      { istilah: "Hermeneutika (menurut Fazlur Rahman)", arti: "Dalam bab ini: disiplin hidup yang menggabungkan analisis teks, kepekaan historis, dan relevansi etis masa kini (hlm. 121)." },
      { istilah: "Illat", arti: "Rasio atau sebab di balik suatu teks, terutama dalam hukum Islam; ditemukan melalui gerak mundur (hlm. 127)." },
      { istilah: "Rekontekstualisasi", arti: "Mengambil nilai umum dari teks lalu mempertemukannya dengan problem masa kini secara substansial, tanpa mengubah teksnya (hlm. 123–124)." },
      { istilah: "Siklus reflektif", arti: "Proses berulang ketika teori diuji, dikontekstualisasi, dianalisis secara historis, lalu diaplikasikan kembali, sehingga teori dan data saling memperkaya (hlm. 128)." }
    ],
    sumber: { buku: "Integrasi Keilmuan Twin Towers (Buku Ajar), Ahmad Fauzi dkk.", halaman: "119–134" },
    bacaanPelengkap: [
      {
        penulis: "Muhammad Yusuf, Nahdhiyah, dan Anwar Sadat",
        tahun: "2021",
        judul: "Fazlur Rahman's Double Movement and Its Contribution to the Development of Religious Moderation",
        terbitan: "International Journal of Islamic Studies and Humanities 4, no. 1: 51–71",
        tautan: "https://doi.org/10.26555/ijish.v4i1.2667",
        alasan: "Membahas kemampuan hermeneutika double movement mendialogkan teks dan realitas, lalu mengaitkannya dengan moderasi beragama. Berbahasa Inggris; juga dikutip di buku ajar."
      },
      {
        penulis: "Kharis Nugroho, Muhammad Zawil Kiram, dan Didik Andriawan",
        tahun: "2023",
        judul: "The Influence of Hermeneutics in Double Movement Theory (Critical Analysis of Fazlurrahman's Interpretation Methodology)",
        terbitan: "QiST: Journal of Quran and Tafseer Studies 2, no. 3: 275–289",
        tautan: "https://doi.org/10.23917/qist.v2i3.2531",
        alasan: "Menelaah pengaruh hermeneutika Barat terhadap metode tafsir Fazlur Rahman. Berbahasa Inggris; juga dikutip di buku ajar."
      },
      {
        penulis: "Muhammad Nabil Fahmi",
        tahun: "2021",
        judul: "Metode Kritik Sejarah dan Double Movement sebagai Alternatif Pembelajaran Sejarah Kebudayaan Islam",
        terbitan: "Panangkaran: Jurnal Penelitian Agama dan Masyarakat 5, no. 2: 275–290",
        tautan: "https://doi.org/10.14421/panangkaran.v5i2.2655",
        alasan: "Contoh penerapan double movement dalam dunia pendidikan, yaitu pembelajaran Sejarah Kebudayaan Islam. Artikel ini juga dikutip di buku ajar."
      }
    ],
    perluDicek: false
  },
  {
    id: "itt-bab-10",
    judul: "Desain Praktikum Kelompok Integrasi Twin Towers Gerak Ganda",
    mapel: "Integrasi Keilmuan Twin Towers",
    bab: "Bab 10",
    tema: "gerak-ganda",
    isi: "Bab ini adalah panduan praktikum kelompok yang menjadi pasangan Bab 9. Di sini gerak ganda dirumuskan sebagai pemahaman keilmuan yang bergerak dari teks ke konteks, lalu kembali dari konteks ke pembacaan kritis atas teks. Praktikum dapat disesuaikan untuk semua fakultas di UINSA, dari humaniora, dakwah, ekonomi, ilmu politik, psikologi, hukum, pendidikan, hingga teknologi. Tujuannya agar mahasiswa mampu menjelaskan strategi gerak ganda, menerapkannya dalam pembelajaran, penelitian, dan pengabdian, serta menghasilkan analisis kontekstual yang menghubungkan nilai wahyu dengan realitas empiris secara reflektif (hlm. 137–138). Langkah kerjanya sebagai berikut.\n\n1. Bentuk kelompok sesuai jenjang: S1 terdiri dari 3–6 kelompok berisi 3–5 mahasiswa, S2 berkelompok 3–4 mahasiswa, dan S3 berkelompok 2–3 mahasiswa (hlm. 138–139).\n\n2. Cari video pembelajaran di YouTube atau sumber lain yang sesuai dengan disiplin ilmu sendiri: S1 satu video, S2 dua video, dan S3 tiga video (hlm. 138–139).\n\n3. Amati video tersebut, lalu identifikasi bentuk gerak maju dan gerak mundur dalam praktik akademik yang ditampilkan (hlm. 138–139).\n\n4. Olah hasil pengamatan sesuai jenjang. S1 cukup mengidentifikasi kedua gerak tersebut. S2 juga menemukan potensi masalah pada kedua video dan menawarkan alternatif solusi. S3 menyintesis pola implementasi gerak ganda pada ketiga video, lalu menyusun artikel opini pendek berisi analisis SWOT tentang implementasinya (hlm. 139).\n\n5. Lakukan refleksi integratif berbasis nilai keislaman dan rasionalitas ilmiah sesuai disiplin ilmu (hlm. 138).\n\n6. Kumpulkan hasilnya: S1 menyerahkan laporan tertulis, refleksi pengalaman pribadi, dan slide; S2 menyerahkan laporan tertulis; S3 menyerahkan laporan tertulis dan slide. Laporan memuat sampul, pendahuluan, konsep integrasi gerak ganda, temuan (dan analisis untuk jenjang lanjut), penutup atau rekomendasi, serta daftar pustaka, ditambah lampiran untuk S2 dan S3 (hlm. 139–140).\n\n7. Penilaian memakai rubrik yang sama dengan bab praktikum sebelumnya: pemahaman konsep ITT, analisis integratif, kualitas bahasa dan laporan, serta keterlibatan dalam diskusi dan refleksi, masing-masing berskor 1–4. Nilai akhir = skor yang diperoleh × 100 ÷ 16 (hlm. 141–142).",
    poinKunci: [
      "Tujuan praktikum: mahasiswa mampu menjelaskan strategi gerak ganda sebagai integrasi keilmuan dan nilai keislaman, menerapkannya dalam pembelajaran, penelitian, dan pengabdian sesuai bidang ilmunya, serta menghasilkan analisis kontekstual yang menghubungkan nilai wahyu dengan realitas empiris secara reflektif (hlm. 138).",
      "Praktikum dapat dikontekstualisasikan untuk semua fakultas, misalnya humaniora, dakwah, ekonomi, ilmu politik, psikologi, hukum, pendidikan, dan teknologi (hlm. 137–138).",
      "Kegiatan inti: menganalisis penerapan gerak ganda dalam satu mata kuliah di program studi sendiri melalui observasi video pembelajaran, analisis teori-konteks, dan refleksi integratif (hlm. 138).",
      "Jenjang S1: 3–6 kelompok berisi 3–5 mahasiswa; mencari satu video pembelajaran sesuai disiplin ilmu; mengidentifikasi bentuk gerak maju dan gerak mundur di dalamnya; mengumpulkan laporan tertulis, refleksi pengalaman pribadi, dan slide (hlm. 138–139).",
      "Jenjang S2: kelompok 3–4 mahasiswa; menganalisis dua video; mengidentifikasi gerak maju dan mundur, menemukan potensi masalah pada kedua video, dan menawarkan alternatif solusi; mengumpulkan laporan tertulis (hlm. 139).",
      "Jenjang S3: kelompok 2–3 mahasiswa; menganalisis tiga video; menyintesis pola implementasi gerak ganda; menyusun artikel opini pendek berisi analisis SWOT tentang implementasi gerak ganda; mengumpulkan laporan tertulis dan slide (hlm. 139).",
      "Format laporan memuat bagian \"Konsep Integrasi Gerak Ganda\", dan rubriknya sama dengan bab praktikum sebelumnya (empat aspek, skor 1–4). Nilai akhir = skor yang diperoleh × 100 ÷ 16 (hlm. 140–142)."
    ],
    istilah: [
      { istilah: "Gerak ganda (dalam praktikum ini)", arti: "Pemahaman keilmuan yang bergerak dari teks ke konteks, lalu kembali dari konteks ke pembacaan kritis atas teks; uraian lengkapnya ada di Bab 9 (hlm. 137)." }
    ],
    sumber: { buku: "Integrasi Keilmuan Twin Towers (Buku Ajar), Ahmad Fauzi dkk.", halaman: "137–142" },
    perluDicek: false
  },
  {
    id: "itt-bab-11",
    judul: "Strategi Implementasi Gerak Ganda (Double Movement) II",
    mapel: "Integrasi Keilmuan Twin Towers",
    bab: "Bab 11",
    tema: "gerak-ganda",
    isi: "Bab ini masih memakai istilah gerak ganda, tetapi dengan konsep yang berbeda dari Bab 9: yang dibahas adalah teori Karl Polanyi dalam The Great Transformation (1944). Gerakan pertama adalah ekspansi pasar bebas melalui deregulasi dan desentralisasi kekuasaan ekonomi; gerakan kedua adalah respons masyarakat untuk memperkuat struktur sosial, politik, dan ekonomi demi melindungi nilai lokal dari ancaman pasar global. Bab ini kemudian mengulas tiga kritik terhadap teori itu dan menyandingkan masing-masing dengan pandangan Islam (hlm. 143–144).\n\nKritik pertama: teori Polanyi kurang mampu menjelaskan globalisasi modern, karena ekonomi digital, blockchain, dan fintech melahirkan kapitalisme baru dengan kekuasaan yang lebih abstrak. Menurut buku ini, Islam menuntut teknologi dipakai sesuai etika untuk kemaslahatan, bukan penindasan, dengan rujukan antara lain QS. Al-Mutaffifin (83): 1–3 dan hadis riwayat Muslim tentang larangan menipu dalam jual beli. Kritik kedua: teori ini terlalu umum untuk masyarakat yang beragam. Islam memandang keberagaman sebagai kekuatan (QS. Al-Hujurat (49): 13) dan mengajarkan adaptasi melalui kaidah melestarikan nilai lama yang baik dan menerapkan nilai baru yang lebih baik, serta prinsip istihsan (hlm. 144–149).\n\nKritik ketiga: Polanyi kurang memperhatikan kelas sosial, ketimpangan, dan kelompok yang berkuasa. Islam menekankan keadilan sosial dan redistribusi kekayaan melalui zakat (QS. Al-Baqarah (2): 177), melarang riba (QS. Al-Baqarah (2): 275), dan mendorong keadilan sosial (QS. Al-Hadid (57): 7). Karena itu buku ini memandang Islam sebagai sistem ekonomi yang mendukung \"gerak balik\" terhadap kapitalisme pasar bebas, dan mengusulkan agar teori Polanyi dipadukan dengan pendekatan yang lebih kontekstual (hlm. 149–153).\n\nPendekatan lokal berarti menyadari bahwa setiap masyarakat merespons perubahan global dengan caranya sendiri, sesuai nilai budaya, sosial, dan politiknya. Buku ini mengutip ungkapan Ali bin Abi Thalib bahwa anak-anak diciptakan untuk zaman yang berbeda dari zaman orang tuanya. Contohnya agroekologi yang memakai bahan lokal dan kearifan tradisional, sejalan dengan prinsip mizan (QS. Ar-Rahman (55): 7), serta pendidikan yang memadukan kurikulum global dengan nilai lokal, dikaitkan dengan hadis riwayat Ibnu Majah tentang kewajiban menuntut ilmu (hlm. 153–157).\n\nKasus nyata yang dibahas meliputi pertanian organik di Indonesia (prinsip tawazun, QS. Ar-Rum (30): 41), pendidikan karakter di Jepang (QS. Al-'Alaq (96): 1–5), pengelolaan alam oleh masyarakat adat Amazon (prinsip khilafah, QS. Al-Baqarah (2): 30), dan kerajinan Bali yang memodernisasi produksi tanpa meninggalkan budaya lokal (QS. Al-Mutaffifin (83): 1–3). Evaluasinya: tantangan utama adalah menekan pengaruh pasar global tanpa merusak struktur sosial dan budaya lokal, sehingga dibutuhkan partisipasi masyarakat dan pendekatan multidisipliner, sejalan dengan prinsip syura dalam QS. Asy-Syura (42): 38 (hlm. 157–163).",
    poinKunci: [
      "Teori gerak ganda di bab ini adalah gagasan Karl Polanyi (The Great Transformation, 1944), berbeda dari double movement hermeneutis Fazlur Rahman di Bab 9. Gerakan pertama: ekspansi pasar bebas melalui deregulasi; gerakan kedua: respons masyarakat untuk memperkuat struktur sosial, politik, dan ekonomi serta melindungi nilai lokal (hlm. 143–144).",
      "Kritik pertama: teori ini kurang mampu menjelaskan globalisasi modern, karena teknologi digital, blockchain, dan fintech melahirkan kapitalisme baru dengan bentuk kekuasaan yang lebih abstrak. Pandangan Islam: teknologi harus dipakai sesuai moral dan etika untuk kemaslahatan, bukan penindasan. Buku merujuk QS. Al-Baqarah (2): 286, QS. Al-Mutaffifin (83): 1–3, dan hadis riwayat Muslim tentang larangan menipu dalam jual beli: \"barangsiapa menipu maka dia bukan dari golongan kami\" (hlm. 144–147).",
      "Kritik kedua: teori ini terlalu umum untuk masyarakat yang ketahanannya terhadap pasar global berbeda-beda. Pandangan Islam: keberagaman adalah kekuatan, merujuk QS. Al-Hujurat (49): 13. Umat Islam diajak beradaptasi melalui kaidah \"Melestarikan nilai-nilai lama yang baik dan menerapkan nilai-nilai baru yang lebih baik\" serta prinsip istihsan (hlm. 147–149).",
      "Kritik ketiga: Polanyi kurang memperhatikan kelas sosial, ketimpangan, dan peran kelompok yang berkuasa. Pandangan Islam: keadilan sosial dan redistribusi kekayaan melalui zakat, merujuk QS. Al-Baqarah (2): 177; larangan riba dalam QS. Al-Baqarah (2): 275: \"Dan Allah telah menghalalkan jual beli dan mengharamkan riba\"; serta QS. Al-Hadid (57): 7 (hlm. 149–152).",
      "Menurut buku ini, Islam dapat dipandang sebagai sistem ekonomi yang mendukung \"gerak balik\" terhadap kapitalisme pasar bebas, dengan menekankan keadilan sosial, distribusi kekayaan yang merata, perlindungan bagi yang lemah, dan pengelolaan alam yang berkelanjutan (hlm. 152–153).",
      "Integrasi dengan pendekatan lokal: setiap masyarakat merespons perubahan global secara berbeda, sehingga nilai budaya, sosial, dan politik setempat perlu diperhitungkan. Buku mengutip ungkapan Ali bin Abi Thalib: \"Janganlah kamu didik anak-anakmu dengan akhlakmu karena mereka diciptakan untuk zaman yang bukan zamanmu\" (hlm. 153–154).",
      "Contoh pendekatan lokal: pertanian berkelanjutan dan agroekologi berbasis kearifan lokal, dikaitkan dengan prinsip mizan dalam QS. Ar-Rahman (55): 7; serta pendidikan yang memadukan kurikulum global dengan nilai lokal, dikaitkan dengan hadis riwayat Ibnu Majah tentang kewajiban menuntut ilmu (hlm. 154–157).",
      "Kasus nyata: pertanian organik di Indonesia (prinsip tawazun, QS. Ar-Rum (30): 41); pendidikan karakter di Jepang (QS. Al-Alaq (96): 1–5); pengelolaan alam oleh masyarakat adat Amazon (prinsip khilafah, QS. Al-Baqarah (2): 30); dan industri kerajinan Bali yang memodernisasi produksi tanpa meninggalkan budaya lokal (QS. Al-Mutaffifin (83): 1–3) (hlm. 157–162).",
      "Evaluasi: tantangan utamanya adalah meminimalkan pengaruh pasar global tanpa merusak struktur sosial dan budaya lokal. Diperlukan partisipasi aktif masyarakat dan pendekatan multidisipliner, sejalan dengan prinsip musyawarah dalam QS. Ash-Shura (42): 38 (hlm. 162–163)."
    ],
    istilah: [
      { istilah: "Gerak ganda (versi Karl Polanyi)", arti: "Dua gerakan yang saling bertentangan: ekspansi pasar bebas (gerakan pertama) dan respons masyarakat yang melindungi struktur sosial dan nilai lokalnya (gerakan kedua). Berbeda dari gerak ganda Fazlur Rahman di Bab 9 (hlm. 143–144)." },
      { istilah: "Gerak balik", arti: "Gerakan kedua dalam teori Polanyi: perlawanan atau respons masyarakat terhadap dominasi pasar global (hlm. 150, 152)." },
      { istilah: "Maslahah", arti: "Kebaikan bersama; prinsip yang menurut buku ini harus diutamakan dalam pemanfaatan teknologi (hlm. 147)." },
      { istilah: "Istihsan", arti: "Dalam bab ini: prinsip mengutamakan kemaslahatan, yaitu mengambil keputusan dengan mempertimbangkan situasi dan kondisi sambil menjaga keseimbangan kebutuhan dunia dan akhirat (hlm. 149)." },
      { istilah: "Mizan", arti: "Keseimbangan; segala sesuatu diciptakan dengan ukuran dan keseimbangan yang tepat (hlm. 155)." },
      { istilah: "Tawazun", arti: "Keseimbangan antara pemanfaatan sumber daya alam dan kelestariannya (hlm. 158)." },
      { istilah: "Khilafah", arti: "Dalam bab ini: penjagaan amanah; manusia sebagai pemegang amanah untuk menjaga kelestarian bumi (hlm. 160)." },
      { istilah: "Syura", arti: "Musyawarah; partisipasi masyarakat dalam pengambilan keputusan agar kebijakan lebih adil dan berkelanjutan (hlm. 162–163)." },
      { istilah: "Agroekologi", arti: "Model pertanian yang menekankan keberlanjutan jangka panjang melalui pemanfaatan bahan lokal dan pengelolaan tanah yang ramah lingkungan (hlm. 155)." }
    ],
    sumber: { buku: "Integrasi Keilmuan Twin Towers (Buku Ajar), Ahmad Fauzi dkk.", halaman: "143–163" },
    bacaanPelengkap: [
      {
        // DOI artikel ini (10.25170/respons.v15i02.571) belum terdaftar, jadi tautan langsung ke halaman artikel di jurnalnya.
        penulis: "Yustinus Prastowo",
        tahun: "2010",
        judul: "Gerak-Ganda: Sebuah Pemecahan Etis atas Konsep Pasar",
        terbitan: "Respons: Jurnal Etika Sosial 15, no. 02: 251–286",
        tautan: "https://ejournal.atmajaya.ac.id/index.php/respons/article/view/571",
        alasan: "Menjelaskan gerak ganda Polanyi mulai dari latar belakang The Great Transformation, gagasan gerak ganda itu sendiri, hingga relevansinya bagi globalisasi ekonomi."
      },
      {
        penulis: "Luthfy Arwiya dan Malahayatie",
        tahun: "2025",
        judul: "Distribusi Kekayaan dalam Pemikiran Muhammad Baqir al-Sadr: Solusi untuk Keadilan Sosial di Era Kontemporer",
        terbitan: "Journal of Islamic Economics and Finance 5, no. 1: 11–21",
        tautan: "https://doi.org/10.28918/jief.v5i1.9879",
        alasan: "Membahas zakat, wakaf, dan larangan riba sebagai jalan mengurangi kesenjangan, sejalan dengan pandangan Islam tentang redistribusi kekayaan di bab ini."
      },
      {
        // Artikel ini tidak memiliki DOI; tautan langsung ke halaman artikel di jurnalnya.
        penulis: "Syamsul Ma'arif, Achmad Dardiri, dan Djoko Suryo",
        tahun: "2015",
        judul: "Inklusivitas Pesantren Tebuireng: Menatap Globalisasi dengan Wajah Tradisionalisme",
        terbitan: "Jurnal Pembangunan Pendidikan: Fondasi dan Aplikasi 3, no. 1: 81–94",
        tautan: "https://journal.uny.ac.id/index.php/jppfa/article/view/7814",
        alasan: "Contoh pesantren yang menjawab globalisasi sambil tetap berpegang pada tradisi dan kearifan lokal, sejalan dengan pendekatan lokal di bab ini."
      }
    ],
    perluDicek: false
  },
  {
    id: "itt-bab-12",
    judul: "Desain Praktikum Kelompok Integrasi Twin Towers Gerak Ganda",
    mapel: "Integrasi Keilmuan Twin Towers",
    bab: "Bab 12",
    tema: "gerak-ganda",
    isi: "Bab ini adalah panduan praktikum kelompok yang menyebut dirinya berdasarkan Bab 11. Namun, gerak ganda di sini dirumuskan sebagai gerak dari teks ke konteks, lalu kembali dari konteks ke pembacaan kritis atas teks, yang lebih dekat dengan rumusan Bab 9. Mahasiswa menganalisis penerapan gerak ganda dalam satu mata kuliah di program studinya melalui wawancara dengan dosen, analisis teori-konteks, refleksi integratif berbasis nilai keislaman dan rasionalitas ilmiah, serta penyusunan produk aksi atau media edukatif. Dibanding praktikum sebelumnya, ada tujuan tambahan: mahasiswa mampu menyusun aksi sosial atau produk edukatif integratif berdasarkan temuan lapangan dan refleksi nilai (hlm. 165–166). Langkah kerjanya sebagai berikut.\n\n1. Bentuk kelompok sesuai jenjang: S1 terdiri dari 3–6 kelompok berisi 3–5 mahasiswa, S2 berkelompok 3–4 mahasiswa, dan S3 berkelompok 2–3 mahasiswa (hlm. 167–168).\n\n2. Pilih bahan kajian sesuai jenjang. S1 memilih satu isu sosial yang relevan dengan salah satu mata kuliah. S2 memilih kasus sosial aktual yang beririsan dengan keilmuan masing-masing. S3 memilih fenomena kompleks lintas keilmuan, misalnya krisis air, etika AI, atau radikalisme digital (hlm. 167–168).\n\n3. Terapkan gerak ganda. S1 memakai gerak maju dari teks ke konteks sosial dan gerak mundur dari realitas sosial ke nilai wahyu. S2 memakainya untuk mengaitkan teori, konteks, dan nilai keislaman. S3 menerapkannya secara transdisipliner (hlm. 167–168).\n\n4. Susun produk sesuai jenjang. S1 merancang poster edukatif integratif berisi isu dan konteks, teks atau nilai keislaman, analisis kontekstual, serta solusi dan pesan transformatif. S2 menyusun laporan naratif 750–1000 kata berisi deskripsi kasus, teori dan pendekatan ilmiah, teks atau nilai keislaman yang relevan, serta sintesis dan solusi integratif. S3 menyusun laporan naratif 1000–1500 kata berisi deskripsi fenomena, kerangka teori dua bidang keilmuan, pemaknaan nilai wahyu (tafsir, maqashid, dan lain-lain), serta rekomendasi aksi atau kebijakan (hlm. 167–168).\n\n5. Kumpulkan hasilnya. S1 menyerahkan poster dan narasi singkat presentasi. Format laporan praktikum memuat sampul (nama dan logo), pendahuluan, konsep integrasi gerak ganda, temuan (untuk S2: temuan dan analisis), penutup atau rekomendasi, serta daftar pustaka (hlm. 167–169).\n\n6. Penilaian poster memakai lima aspek: isi dan substansi, integrasi wahyu dan ilmu, desain visual poster, solusi dan pesan aksi, serta presentasi kelompok, masing-masing berskor 1 (kurang) sampai 4 (sangat baik) (hlm. 169–170).\n\n7. Penilaian laporan naratif memakai empat aspek: pemahaman konsep integrasi Twin Towers, kemampuan analisis integratif, kualitas bahasa dan laporan, serta keterlibatan dalam diskusi dan refleksi, masing-masing berskor 1–4. Pada kedua rubrik, buku mencantumkan skor maksimal 16, dengan nilai akhir = skor yang diperoleh × 100 ÷ skor maksimal (hlm. 170–171).",
    poinKunci: [
      "Tujuan praktikum: menjelaskan strategi gerak ganda sebagai integrasi keilmuan dan nilai keislaman; menerapkannya dalam pembelajaran, penelitian, dan pengabdian; menghasilkan analisis kontekstual yang menghubungkan wahyu dengan realitas empiris; serta menyusun aksi sosial atau produk edukatif integratif berbasis temuan lapangan dan refleksi nilai (hlm. 166).",
      "Gerak ganda di praktikum ini: gerak maju dari teks ke konteks sosial, gerak mundur dari realitas sosial ke nilai wahyu (hlm. 165, 167).",
      "Jenjang S1: 3–6 kelompok berisi 3–5 mahasiswa; memilih satu isu sosial yang relevan dengan mata kuliah; merancang poster edukatif integratif berisi isu dan konteks, teks atau nilai keislaman, analisis kontekstual, serta solusi dan pesan transformatif; mengumpulkan poster dan narasi singkat presentasi (hlm. 167).",
      "Jenjang S2: kelompok 3–4 mahasiswa; memilih kasus sosial aktual yang beririsan dengan keilmuan masing-masing; menyusun laporan naratif 750–1000 kata berisi deskripsi kasus, teori dan pendekatan ilmiah, teks atau nilai keislaman yang relevan, serta sintesis dan solusi integratif (hlm. 167).",
      "Jenjang S3: kelompok 2–3 mahasiswa; memilih fenomena kompleks lintas keilmuan (misalnya krisis air, etika AI, radikalisme digital) dan menerapkan gerak ganda secara transdisipliner; menyusun laporan naratif 1000–1500 kata berisi deskripsi fenomena, kerangka teori dua bidang keilmuan, pemaknaan nilai wahyu (tafsir, maqashid, dan lain-lain), serta rekomendasi aksi atau kebijakan (hlm. 168).",
      "Rubrik poster menilai isi dan substansi, integrasi wahyu dan ilmu, desain visual poster, solusi dan pesan aksi, serta presentasi kelompok, dengan skor 1 (kurang) sampai 4 (sangat baik) (hlm. 169–170).",
      "Rubrik laporan naratif memakai empat aspek seperti bab praktikum sebelumnya, tetapi disesuaikan dengan gerak ganda: pemahaman prinsip dan tujuan gerak ganda, analisis penerapan gerak ganda pada tridharma, kualitas bahasa dan laporan, serta keterlibatan dalam diskusi. Nilai akhir = skor yang diperoleh × 100 ÷ 16 (hlm. 170–171)."
    ],
    istilah: [
      { istilah: "Poster edukatif integratif", arti: "Produk tugas jenjang S1 yang memuat isu dan konteks, teks atau nilai keislaman, analisis kontekstual, serta solusi dan pesan transformatif (hlm. 167)." },
      { istilah: "Laporan naratif", arti: "Produk tugas jenjang S2 (750–1000 kata) dan S3 (1000–1500 kata) yang memadukan teori ilmiah, nilai keislaman, dan solusi atau rekomendasi (hlm. 167–168)." }
    ],
    sumber: { buku: "Integrasi Keilmuan Twin Towers (Buku Ajar), Ahmad Fauzi dkk.", halaman: "165–171" },
    perluDicek: false
  },
  {
    id: "itt-bab-13",
    judul: "Proyek Integrasi Twin Towers",
    mapel: "Integrasi Keilmuan Twin Towers",
    bab: "Bab 13",
    tema: "proyek",
    isi: "Bab ini menjelaskan cara merancang dan menilai proyek integrasi Twin Towers. Buku membagi proyek integratif menjadi empat jenis. Jenis pertama, penelitian tematik, bergerak dua arah: dari tema dalam Al-Qur'an atau hadis menuju kajian ilmiahnya, atau dari realitas menuju dalilnya. Dua contohnya adalah hadis riwayat Bukhari dan Muslim tentang jinten hitam (habbah al-sawda) yang kandungannya kemudian diteliti, serta tesis tentang penyakit mata Nabi Ya'qub dalam QS. Yusuf (12): 84 yang dari sisi medis disebut katarak. Tesis itu dibimbing ahli tafsir dan ahli kedokteran agar kedua sudut pandang menemukan titik temu (hlm. 173–174).\n\nJenis kedua, penelitian aksi sosial, menerapkan ajaran Islam dan prinsip ilmu sosial dalam kegiatan nyata, misalnya kampanye kebersihan yang diinspirasi QS. Al-Baqarah (2): 222 atau gerakan menjaga alam dengan merujuk QS. Ar-Rum (30): 41. Jenis ketiga, media edukatif, mengembangkan konten pembelajaran di YouTube, Instagram, Facebook, TikTok, dan sejenisnya, dengan titik tekan syiar Islam agar menjangkau seluruh lapisan masyarakat. Jenis keempat, studi kasus, mengkaji persoalan kontemporer dalam kaitannya dengan ajaran Islam. Contohnya plus-minus AI: AI mempercepat perolehan pengetahuan, tetapi penggunanya harus selektif karena AI menjawab apa pun meski belum tentu akurat (hlm. 174–176).\n\nSemua proyek itu punya tiga ciri. Pertama, lintas disiplin, karena memadukan ajaran Islam, sains, dan sosial. Kedua, berbasis masalah: berangkat dari masalah di lapangan, mencari penyebabnya, lalu menawarkan solusi. Ketiga, menuntut kolaborasi, karena pertemuan dua orang atau lebih dari bidang berbeda diharapkan menghasilkan sudut pandang yang lebih komprehensif dan akurat. Dari sini tumbuh pengembangan kompetensi, yaitu mahasiswa memperoleh sudut pandang ilmu lain di luar bekal awal disiplinnya (hlm. 176).\n\nTujuan pembelajarannya ada tiga. Pertama, berorientasi pada solusi: buku menilai ilmu agama \"mengalami stagnasi\" karena lebih banyak memikirkan masa lalu, sehingga pembelajaran harus menjawab masalah nyata. Misalnya, kerusakan alam akibat ulah manusia dijawab dengan \"pengembalian\" alam, seperti menanam pohon untuk mengimbangi penebangan. Kedua, menawarkan gagasan ideal: mahasiswa Universitas Negeri Malang membuat panel surya yang terinspirasi QS. Nuh (71): 16, sebagai jawaban kreatif atas pemanasan global. Ketiga, menawarkan produk atau manfaat: QS. Al-Insan (76): 17 menyebut minuman bercampur jahe (zanjabil) di surga, lalu banyak peneliti menguji kandungan dan khasiat jahe, sehingga produk olahannya masuk kategori ini (hlm. 176–178).\n\nKeberhasilan proyek diukur dengan empat indikator berskala 1–5 per item. Proses: selesai tepat waktu dengan metodologi yang tepat. Konten: data, dalil, dan teori jelas, ide orisinal, dan argumentasi kuat, yang dirangkai dalam artikel, tugas akhir, atau konten digital. Produk: manfaatnya jelas dan kreatif. Etika: menghindari plagiasi dan penyalahgunaan data, dengan batas plagiasi 20%. Selain itu, ada refleksi. Mahasiswa merenungkan pemahaman baru, perluasan wawasan, tantangan, dan nilai keislaman yang dirasakan, sedangkan dosen menilai perkembangan kompetensi mahasiswa, kekuatan dan kelemahan pendekatan, serta saran perbaikan (hlm. 179–180).",
    poinKunci: [
      "Proyek penelitian tematik: mengambil tema dari Al-Qur'an atau hadis lalu mencari kajian ilmiahnya, atau sebaliknya, dari realitas lalu mencari dalilnya. Contohnya hadis riwayat Bukhari dan Muslim tentang khasiat jinten hitam (habbah al-sawda) yang kemudian diteliti kandungannya, dan tesis tentang penyakit mata Nabi Ya'qub (QS. Yusuf (12): 84) yang dibimbing ahli tafsir dan ahli kedokteran (hlm. 173–174).",
      "Proyek penelitian aksi sosial: menerapkan ajaran Islam dan prinsip ilmu sosial, misalnya kampanye kebersihan yang diinspirasi QS. Al-Baqarah (2): 222, atau gerakan menjaga alam dengan merujuk QS. Ar-Rum (30): 41 (hlm. 174–175).",
      "Proyek media edukatif: mengembangkan konten pembelajaran di media sosial seperti YouTube, Instagram, Facebook, dan TikTok, dengan titik tekan syiar Islam agar menjangkau seluruh lapisan masyarakat (hlm. 175).",
      "Proyek studi kasus: mengkaji kasus kontemporer yang diintegrasikan dengan ajaran Islam, misalnya plus-minus penggunaan AI; pengguna harus selektif karena AI menjawab apa pun meskipun belum tentu akurat (hlm. 175–176).",
      "Karakteristik proyek integratif: lintas disiplin (ajaran Islam, sains, dan sosial), berbasis masalah, dan wajib kolaborasi antara dua orang atau lebih dari bidang yang berbeda (hlm. 176).",
      "Tujuan pembelajaran 1, berorientasi pada solusi: misalnya kerusakan lingkungan akibat ulah manusia diatasi dengan \"pengembalian\" alam, seperti menanam pohon untuk mengimbangi penebangan (hlm. 176–177).",
      "Tujuan pembelajaran 2, menawarkan gagasan ideal: misalnya mahasiswa Universitas Negeri Malang yang membuat panel surya, terinspirasi QS. Nuh (71): 16 tentang panas matahari (hlm. 177–178).",
      "Tujuan pembelajaran 3, menawarkan produk atau manfaat: misalnya penelitian tentang kandungan dan khasiat jahe (zanjabil) yang disebut dalam QS. Al-Insan (76): 17 (hlm. 178).",
      "Pengembangan kompetensi berarti menambahkan sudut pandang dari ilmu lain, sehingga mahasiswa memperoleh kompetensi di luar bekal awal disiplin ilmunya (hlm. 176).",
      "Indikator keberhasilan proyek ada empat: proses (selesai tepat waktu dengan metodologi yang tepat), konten (kejelasan data, dalil, teori, orisinalitas ide, dan argumentasi), produk (manfaat jelas dan kreatif), serta etika (menghindari plagiasi dan penyalahgunaan data; batas plagiasi 20%). Skor penilaian berskala 1–5 per item (hlm. 179).",
      "Refleksi mahasiswa menanyakan pemahaman baru, perluasan wawasan dari integrasi sains dan agama, tantangan, dan nilai keislaman yang dirasakan; refleksi dosen menanyakan perkembangan kompetensi mahasiswa, kekuatan dan kelemahan pendekatan, serta saran perbaikan (hlm. 179–180)."
    ],
    istilah: [
      { istilah: "Proyek penelitian tematik", arti: "Proyek yang mengambil tema dari Al-Qur'an atau hadis lalu mencari kajian ilmiahnya, atau dari realitas lalu mencari dalilnya (hlm. 173)." },
      { istilah: "Proyek aksi sosial", arti: "Penerapan ajaran Islam dan prinsip dasar ilmu sosial dalam kegiatan nyata di masyarakat (hlm. 174)." },
      { istilah: "Proyek media edukatif", arti: "Pengembangan konten pembelajaran di media sosial untuk syiar Islam (hlm. 175)." },
      { istilah: "Proyek studi kasus", arti: "Kajian atas kasus kontemporer yang diintegrasikan dengan ajaran Islam (hlm. 175)." },
      { istilah: "Indikator keberhasilan proyek", arti: "Empat ukuran keberhasilan: proses, konten, produk, dan etika (hlm. 179)." }
    ],
    sumber: { buku: "Integrasi Keilmuan Twin Towers (Buku Ajar), Ahmad Fauzi dkk.", halaman: "173–180" },
    bacaanPelengkap: [
      {
        penulis: "Miyada Nur Ahnafani, Nasiroh, Nina Aulia, Noor Laili Mega Lestari, Marselina Ngongo, dan Ali Rakhman Hakim",
        tahun: "2024",
        judul: "Jahe (Zingiber officinale): Tinjauan Fitokimia, Farmakologi, dan Toksikologi",
        terbitan: "Jurnal Ilmu Kedokteran dan Kesehatan 11, no. 10: 1992–1998",
        tautan: "https://doi.org/10.33024/jikk.v11i10.15945",
        alasan: "Merangkum kandungan, manfaat, dan batas aman konsumsi jahe, yaitu kajian ilmiah di balik contoh produk atau manfaat di bab ini. Artikel ini juga dikutip di buku ajar."
      },
      {
        penulis: "Warsiyah dan Nor Qomalasari",
        tahun: "2025",
        judul: "A Project-Based Collaborative Learning Model in Islamic Religious Education to Strengthen 21st Century Skills of University Students",
        terbitan: "TA'DIBUNA: Jurnal Pendidikan Agama Islam 8, no. 1: 126–141",
        tautan: "https://doi.org/10.30659/jpai.8.1.126-141",
        alasan: "Mengembangkan dan menguji model pembelajaran berbasis proyek dan kolaborasi pada mahasiswa, sejalan dengan ciri proyek integratif di bab ini. Berbahasa Inggris."
      },
      {
        penulis: "Adelia Yuli Pranita, Irma Nur Setyani, Nuriyatul Khanifah, Tabriz Nur Imami, Davina Keisya Shera Putri, Lailatul Maghfiroh, dan Abd. Muqit",
        tahun: "2025",
        judul: "Paradigma Twin Towers sebagai Model Integrasi Keilmuan dalam Perspektif Al-Ghazali dan Syed Naquib al-Attas",
        terbitan: "IQRO: Journal of Islamic Education 8, no. 3: 1173–1183",
        tautan: "https://doi.org/10.24256/iqro.v8i3.8447",
        alasan: "Membahas paradigma Twin Towers di UINSA dan penerapannya pada kurikulum, pengajaran, riset interdisipliner, dan pengabdian masyarakat."
      }
    ],
    perluDicek: false
  },
  {
    id: "itt-bab-14",
    judul: "Desain Praktikum Individu Proyek Integrasi Twin Towers",
    mapel: "Integrasi Keilmuan Twin Towers",
    bab: "Bab 14",
    tema: "proyek",
    isi: "Bab ini adalah panduan praktikum terakhir dan satu-satunya yang dikerjakan secara individu, sebagai pasangan Bab 13 tentang proyek integrasi. Gerak ganda dirumuskan sebagai gerak dari teks ke konteks, lalu kembali ke pembacaan kritis atas teks, kemudian dilanjutkan dengan aksi sosial transformatif dalam bentuk proyek individu. Praktikum ini dapat disesuaikan untuk semua fakultas di UINSA, dan kegiatannya mencakup wawancara dengan dosen, analisis teori-konteks, refleksi integratif, serta penyusunan produk aksi atau media edukatif. Selain tujuan yang sama dengan Bab 12, mahasiswa diharapkan mampu merancang proyek keilmuan atau sosial berbasis integrasi nilai wahyu dan ilmu, menerapkannya pada permasalahan nyata, dan menghasilkan karya yang mengandung solusi, inovasi, dan refleksi nilai (hlm. 181–183). Langkah kerjanya sebagai berikut.\n\n1. Pilih bahan kajian sesuai jenjang. S1 memilih satu topik mata kuliah dan mengidentifikasi isu riil di masyarakat atau kehidupan sehari-hari. S2 meneliti satu masalah sosial atau akademik di bidangnya. S3 memilih isu besar multidisipliner, misalnya ekonomi-politik, digitalisasi, atau lingkungan (hlm. 183–184).\n\n2. Hubungkan bahan kajian dengan wahyu dan ilmu. S1 mengaitkan isu dengan satu ayat atau hadis dan teori mata kuliah. S2 merancang proyek solusi berbasis sintesis wahyu dan teori. S3 menelusuri perspektif keilmuan, normatif, dan praksis dari isu tersebut (hlm. 183–184).\n\n3. Wujudkan proyek sesuai jenjang. S1 membuat proyek mini integratif berupa produk edukatif, narasi reflektif, atau karya visual yang menggambarkan solusi atau nilai integratif. S2 menguji kelayakan ide proyek solutif kontekstualnya melalui simulasi, survei, atau observasi kecil. S3 merancang proyek transformasi sosial ilmiah berbasis nilai ITT, misalnya artikel kebijakan, prototipe, atau proposal advokasi (hlm. 183–184).\n\n4. Tulis hasilnya. S2 menulis laporan proyek 1500–2000 kata berisi masalah, teori, ayat atau hadis, desain solusi, dan refleksi. Format laporan individu memuat sampul (nama dan logo), pendahuluan, isu yang dipilih, temuan (untuk S2 dan S3: temuan dan analisis), penutup atau rekomendasi, serta daftar pustaka (hlm. 184–185).\n\n5. Penilaian poster memakai lima aspek: isi dan substansi, integrasi wahyu dan ilmu, desain visual poster, solusi dan pesan aksi, serta presentasi kelompok, masing-masing berskor 1 (kurang) sampai 4 (sangat baik) (hlm. 185–186).\n\n6. Penilaian laporan naratif memakai empat aspek: pemahaman konsep integrasi Twin Towers, kemampuan analisis integratif, kualitas bahasa dan laporan, serta keterlibatan dalam diskusi dan refleksi, masing-masing berskor 1–4. Pada kedua rubrik, buku mencantumkan skor maksimal 16, dengan nilai akhir = skor yang diperoleh × 100 ÷ skor maksimal (hlm. 186–187).",
    poinKunci: [
      "Tujuan khusus praktikum individu: merancang proyek keilmuan atau sosial berbasis integrasi nilai wahyu dan ilmu; mengimplementasikan pendekatan integratif pada permasalahan nyata di masyarakat atau dalam pengembangan keilmuan; serta menghasilkan karya yang mengandung kontribusi solusi, inovasi, dan refleksi nilai (hlm. 183).",
      "Gerak ganda di praktikum ini: dari teks ke konteks, lalu kembali ke pembacaan kritis atas teks, dan dilanjutkan ke tahap aksi sosial transformatif dalam bentuk proyek individu (hlm. 181–182).",
      "Jenjang S1, proyek mini integratif: memilih satu topik mata kuliah dan isu riil di masyarakat atau kehidupan sehari-hari, mengaitkannya dengan satu ayat atau hadis dan teori mata kuliah, lalu membuat proyek mini (produk edukatif, narasi reflektif, atau karya visual) yang menggambarkan solusi atau nilai integratif (hlm. 183).",
      "Jenjang S2, proyek solutif kontekstual: meneliti satu masalah sosial atau akademik di bidangnya, merancang proyek solusi berbasis sintesis wahyu dan teori, menguji kelayakan ide lewat simulasi, survei, atau observasi kecil, lalu menulis laporan proyek 1500–2000 kata berisi masalah, teori, ayat atau hadis, desain solusi, dan refleksi (hlm. 183–184).",
      "Jenjang S3, proyek transformasi sosial ilmiah: memilih isu besar multidisipliner (misalnya ekonomi-politik, digitalisasi, lingkungan), menelusuri perspektif keilmuan, normatif, dan praksisnya, lalu merancang proyek transformatif berbasis nilai ITT, misalnya artikel kebijakan, prototipe, atau proposal advokasi (hlm. 184).",
      "Format laporan individu: sampul, pendahuluan, isu yang dipilih, temuan (S2 dan S3: temuan dan analisis), penutup/rekomendasi, dan daftar pustaka (hlm. 184–185).",
      "Penilaian memakai rubrik poster (isi dan substansi, integrasi wahyu dan ilmu, desain visual, solusi dan pesan aksi, presentasi) dan rubrik laporan naratif yang berfokus pada gerak ganda, sama seperti Bab 12. Nilai akhir = skor yang diperoleh × 100 ÷ skor maksimal (hlm. 185–187)."
    ],
    istilah: [
      { istilah: "Proyek mini integratif", arti: "Tugas individu jenjang S1: proyek sederhana yang mengaitkan isu riil dengan satu ayat atau hadis dan teori mata kuliah (hlm. 183)." },
      { istilah: "Proyek solutif kontekstual", arti: "Tugas individu jenjang S2: merancang dan menguji secara kecil sebuah solusi berbasis sintesis wahyu dan teori (hlm. 183–184)." },
      { istilah: "Proyek transformasi sosial ilmiah", arti: "Tugas individu jenjang S3: proyek transformatif berbasis nilai ITT atas isu besar multidisipliner (hlm. 184)." }
    ],
    sumber: { buku: "Integrasi Keilmuan Twin Towers (Buku Ajar), Ahmad Fauzi dkk.", halaman: "181–187" },
    perluDicek: false
  }
];
