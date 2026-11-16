// Isi ucapan pembuka (sekali saat aplikasi pertama kali dibuka) dan ucapan selamat setelah
// mahasiswa menandai satu bab selesai dibaca.
// Ucapan bab dipilih berdasarkan urutan bab: bab ke-1 memakai motivasi[0] dan dalil[0], dan seterusnya.
// Jumlah motivasi dan dalil sama dengan jumlah bab (14), dan tidak ada yang berulang.
//
// Dalil SENGAJA diambil dari luar buku ajar (permintaan pemilik proyek), lewat Maktabah Syamilah:
// - arab: disalin persis dari Syamilah (ayat: rasm imla'i; hadis: matan saja, tanpa sanad).
//   Tanda "…" berarti kutipan dipotong.
// - terjemah: disusun oleh asisten, perlu diperiksa.
// - rujukan: ditampilkan kepada mahasiswa. catatan: kitab dan jilid/halaman cetakan di Syamilah.
// - sumber: alamat halaman Syamilah untuk pemeriksaan (tidak ditampilkan di aplikasi).
// perluDicek: true berarti isi ucapan belum diperiksa pemilik proyek.

const UCAPAN = {
  perluDicek: false,

  // Ucapan pembuka yang muncul sekali, saat aplikasi pertama kali dibuka di satu perangkat
  salam: {
    judul: "Assalamu'alaikum Warahmatullahi Wabarakatuh",
    sambutan: "Selamat datang di Aplikasi Ringkasan Materi Integrasi Keilmuan Twin Towers. Nikmati perjalanan Anda memahami materi ini dengan penuh kebahagiaan. Semoga Allah memudahkan Anda dalam memahaminya.",
    dalil: {
      arab: "قَالَ رَبِّ اشْرَحْ لِي صَدْرِي (٢٥) وَيَسِّرْ لِي أَمْرِي (٢٦) وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي (٢٧) يَفْقَهُوا قَوْلِي (٢٨)",
      teks: "(Musa) berkata, \"Ya Tuhanku, lapangkanlah dadaku, mudahkanlah untukku urusanku, dan lepaskanlah kekakuan dari lidahku, agar mereka mengerti perkataanku.\"",
      rujukan: "QS. Ṭāhā (20): 25–28",
      catatan: "Teks Arab: Maktabah Syamilah",
      sumber: "Syamilah, ayat 20:25–28"
    }
  },

  // Kalimat motivasi, satu untuk setiap bab (urutan sama dengan urutan bab)
  motivasi: [
    "Langkah pertama sudah Anda tempuh. Fondasi menara ilmu Anda mulai berdiri.",
    "Setiap bab yang Anda pahami adalah satu anak tangga menuju pemahaman yang utuh.",
    "Pemahaman Anda bertambah satu tingkat. Teruslah bertanya dan mencari tahu.",
    "Belajar tidak harus terasa berat. Nikmati prosesnya, sedikit demi sedikit.",
    "Anda kini makin terlatih melihat keterkaitan antara wahyu dan ilmu pengetahuan.",
    "Konsistensi adalah kunci. Bab demi bab, Anda sedang membangun kebiasaan baik.",
    "Separuh perjalanan telah terlewati. Yang tadinya sulit kini mulai terasa mudah.",
    "Semangat Anda patut diapresiasi. Tetap fokus pada hal yang bermanfaat, lalu lanjutkan.",
    "Kesungguhan Anda membuka jalan. Bab berikutnya sudah menanti untuk dijelajahi.",
    "Sepuluh bab telah Anda selesaikan. Bekal ilmu Anda kini makin kokoh.",
    "Makin dalam ilmu seseorang, makin rendah hatinya. Rawatlah semangat belajar Anda.",
    "Ilmu makin berharga ketika dibagikan. Cobalah jelaskan isi bab ini kepada teman Anda.",
    "Tinggal satu bab lagi. Selesaikan dengan semangat yang sama seperti saat Anda memulai.",
    "Bab terakhir telah Anda tuntaskan. Semoga ilmu ini menjadi kebaikan yang terus mengalir."
  ],

  // Ucapan khusus jika seluruh bab sudah ditandai selesai (menggantikan kalimat motivasi bab)
  semuaSelesai: "Alhamdulillah, seluruh bab telah Anda selesaikan. Semoga ilmu ini bermanfaat, menjadi jembatan menuju pemahaman yang lebih luas, dan terus mengalir kebaikannya.",

  // Dalil, satu untuk setiap bab (urutan sama dengan urutan bab)
  dalil: [
    {
      // Bab 1
      arab: "… وَقُلْ رَبِّ زِدْنِي عِلْمًا",
      teks: "… dan katakanlah, \"Ya Tuhanku, tambahkanlah ilmu kepadaku.\"",
      rujukan: "QS. Ṭāhā (20): 114",
      catatan: "Teks Arab: Maktabah Syamilah",
      sumber: "Syamilah, ayat 20:114"
    },
    {
      // Bab 2
      arab: "… وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ …",
      teks: "… Siapa yang menempuh suatu jalan untuk mencari ilmu, dengan sebab itu Allah memudahkan baginya jalan menuju surga …",
      rujukan: "HR. Muslim, no. 2699, dari Abu Hurairah",
      catatan: "Shahih Muslim (cet. Turki), 8/71",
      sumber: "https://shamela.ws/book/711/8207"
    },
    {
      // Bab 3
      arab: "… قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ إِنَّمَا يَتَذَكَّرُ أُولُو الْأَلْبَابِ",
      teks: "… Katakanlah, \"Apakah sama orang-orang yang mengetahui dengan orang-orang yang tidak mengetahui?\" Sesungguhnya hanya orang-orang yang berakal sehat yang dapat menerima pelajaran.",
      rujukan: "QS. Az-Zumar (39): 9",
      catatan: "Teks Arab: Maktabah Syamilah",
      sumber: "Syamilah, ayat 39:9"
    },
    {
      // Bab 4
      arab: "إِنَّ الدِّينَ يُسْرٌ، وَلَنْ يُشَادَّ الدِّينَ أَحَدٌ إِلَّا غَلَبَهُ، فَسَدِّدُوا وَقَارِبُوا، وَأَبْشِرُوا، وَاسْتَعِينُوا بِالْغَدْوَةِ وَالرَّوْحَةِ، وَشَيْءٍ مِنَ الدُّلْجَةِ",
      teks: "Sesungguhnya agama itu mudah. Tidak seorang pun memberat-beratkan diri dalam agama melainkan ia akan kewalahan. Maka beramallah dengan tepat, mendekatlah (pada kesempurnaan), bergembiralah, dan mintalah pertolongan (dengan beramal) pada waktu pagi, sore, dan sedikit di waktu malam.",
      rujukan: "HR. al-Bukhari, no. 39, dari Abu Hurairah",
      catatan: "Shahih al-Bukhari (cet. Sulthaniyah), 1/16",
      sumber: "https://shamela.ws/book/1681/78"
    },
    {
      // Bab 5
      arab: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِأُولِي الْأَلْبَابِ",
      teks: "Sesungguhnya dalam penciptaan langit dan bumi, serta pergantian malam dan siang, terdapat tanda-tanda (kebesaran Allah) bagi orang-orang yang berakal.",
      rujukan: "QS. Āli 'Imrān (3): 190",
      catatan: "Teks Arab: Maktabah Syamilah",
      sumber: "Syamilah, ayat 3:190"
    },
    {
      // Bab 6
      arab: "سُئِلَ النَّبِيُّ ﷺ: أَيُّ الْأَعْمَالِ أَحَبُّ إِلَى اللهِ؟ قَالَ: أَدْوَمُهَا، وَإِنْ قَلَّ، وَقَالَ: اكْلَفُوا مِنَ الْأَعْمَالِ مَا تُطِيقُونَ",
      teks: "Nabi ﷺ ditanya, \"Amal apakah yang paling dicintai Allah?\" Beliau menjawab, \"Yang paling rutin dikerjakan, walaupun sedikit.\" Beliau juga bersabda, \"Kerjakanlah amal sesuai dengan kemampuan kalian.\"",
      rujukan: "HR. al-Bukhari, no. 6465, dari Aisyah",
      catatan: "Shahih al-Bukhari (cet. Sulthaniyah), 8/98",
      sumber: "https://shamela.ws/book/1681/9695"
    },
    {
      // Bab 7
      arab: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا (٥) إِنَّ مَعَ الْعُسْرِ يُسْرًا (٦)",
      teks: "Maka sesungguhnya bersama kesulitan ada kemudahan. Sesungguhnya bersama kesulitan ada kemudahan.",
      rujukan: "QS. Al-Insyirāḥ (94): 5–6",
      catatan: "Teks Arab: Maktabah Syamilah",
      sumber: "Syamilah, ayat 94:5–6"
    },
    {
      // Bab 8
      arab: "… احْرِصْ عَلَى مَا يَنْفَعُكَ، وَاسْتَعِنْ بِاللهِ وَلَا تَعْجِزْ …",
      teks: "… Bersungguh-sungguhlah terhadap apa yang bermanfaat bagimu, mohonlah pertolongan kepada Allah, dan jangan merasa lemah …",
      rujukan: "HR. Muslim, no. 2664, dari Abu Hurairah",
      catatan: "Shahih Muslim (cet. Turki), 8/56",
      sumber: "https://shamela.ws/book/711/8105"
    },
    {
      // Bab 9
      arab: "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ",
      teks: "Dan orang-orang yang bersungguh-sungguh (berjuang) di jalan Kami, pasti akan Kami tunjukkan kepada mereka jalan-jalan Kami. Sungguh, Allah benar-benar bersama orang-orang yang berbuat baik.",
      rujukan: "QS. Al-'Ankabūt (29): 69",
      catatan: "Teks Arab: Maktabah Syamilah",
      sumber: "Syamilah, ayat 29:69"
    },
    {
      // Bab 10
      arab: "مَنْ يُرِدِ اللهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ …",
      teks: "Siapa yang Allah kehendaki kebaikan baginya, Allah akan menjadikannya paham dalam agama …",
      rujukan: "HR. al-Bukhari, no. 71, dari Mu'awiyah",
      catatan: "Shahih al-Bukhari (cet. Sulthaniyah), 1/25",
      sumber: "https://shamela.ws/book/1681/135"
    },
    {
      // Bab 11
      arab: "… إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ …",
      teks: "… Sesungguhnya yang takut kepada Allah di antara hamba-hamba-Nya hanyalah para ulama (orang-orang yang berilmu) …",
      rujukan: "QS. Fāṭir (35): 28",
      catatan: "Teks Arab: Maktabah Syamilah",
      sumber: "Syamilah, ayat 35:28"
    },
    {
      // Bab 12
      arab: "لَا حَسَدَ إِلَّا فِي اثْنَتَيْنِ: رَجُلٌ آتَاهُ اللهُ مَالًا فَسُلِّطَ عَلَى هَلَكَتِهِ فِي الْحَقِّ، وَرَجُلٌ آتَاهُ اللهُ الْحِكْمَةَ فَهُوَ يَقْضِي بِهَا وَيُعَلِّمُهَا",
      teks: "Tidak boleh iri kecuali kepada dua orang: orang yang Allah beri harta lalu ia habiskan di jalan kebenaran, dan orang yang Allah beri hikmah (ilmu) lalu ia memutuskan perkara dengannya dan mengajarkannya.",
      rujukan: "HR. al-Bukhari, no. 73, dari Abdullah bin Mas'ud",
      catatan: "Shahih al-Bukhari (cet. Sulthaniyah), 1/25–26",
      sumber: "https://shamela.ws/book/1681/139"
    },
    {
      // Bab 13
      arab: "… يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنْكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ",
      teks: "… niscaya Allah akan mengangkat (derajat) orang-orang yang beriman di antara kamu dan orang-orang yang diberi ilmu beberapa derajat. Dan Allah Mahateliti terhadap apa yang kamu kerjakan.",
      rujukan: "QS. Al-Mujādilah (58): 11",
      catatan: "Teks Arab: Maktabah Syamilah",
      sumber: "Syamilah, ayat 58:11"
    },
    {
      // Bab 14
      arab: "إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ: إِلَّا مِنْ صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ",
      teks: "Apabila seseorang meninggal dunia, terputuslah amalnya kecuali dari tiga hal: sedekah jariyah, ilmu yang dimanfaatkan, atau anak saleh yang mendoakannya.",
      rujukan: "HR. Muslim, no. 1631, dari Abu Hurairah",
      catatan: "Shahih Muslim (cet. Turki), 5/73",
      sumber: "https://shamela.ws/book/711/5001"
    }
  ]
};
