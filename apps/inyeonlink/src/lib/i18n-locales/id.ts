// 인연링크(사주 궁합) 화면 사전의 인도네시아어 번역이다.
// `src/lib/i18n.ts`의 `const en: Dictionary`를 기준으로 옮겼고, 영어가 모호하거나 사주 용어의
// 뉘앙스가 필요한 자리는 같은 파일의 `const ko`(원문)를 대조했다. 언어 선택기 3개 키와 footer
// 13개 키는 naminglink의 id 문구(`i18n.ts`·`SiteFooter.tsx`)를 그대로 가져왔다.

import type { Dictionary } from "@/lib/i18n";

export const id: Dictionary = {
  brand: "InyeonLink",
  tagline: "Kecocokan yang dibaca lewat Saju dan shio",
  currentLanguage: "Bahasa saat ini",
  moreLanguages: "Lainnya",
  closeLanguages: "Tutup",
  landing: {
    title: "Lihat seberapa cocok\ndua orang satu sama lain",
    subtitle:
      "Cukup dengan tanggal lahir.\nKami menggabungkan kecocokan Saju (Empat Pilar) dengan kecocokan shio, lalu menampilkannya sebagai tingkat kecocokan.",
    cta: "Lihat kecocokan Saju",
    howTitle: "Cara kerjanya",
    steps: [
      "Masukkan kedua tanggal lahir. Jam lahir bersifat opsional.",
      "Kecocokan Saju berasal dari unsur penguasa hari, keseimbangan unsur, dan cabang hari; kecocokan shio berasal dari cabang tahun.",
      "Kedua nilai digabungkan menjadi satu tingkat kecocokan berbobot.",
    ],
    privacyTitle: "Apa pun yang Anda masukkan tidak disimpan",
    privacyBody:
      "Tanggal lahir hanya dipakai selama hasil dihitung dan tidak pernah dicatat. Tidak perlu akun. Tidak ada data yang dibawa tautan hasil yang dikirim ke server.",
    disclaimer:
      "Ini adalah pembacaan Saju tradisional yang disajikan sebagai referensi. Bukan prediksi ilmiah maupun kesimpulan pasti tentang suatu hubungan.",
  },
  form: {
    title: "Kedua tanggal lahir",
    description:
      "Mengetahui jam lahir membuat pembacaan lebih tajam, tetapi tidak wajib.",
    personA: "Orang pertama",
    personB: "Orang kedua",
    nickname: "Panggilan",
    nicknamePlaceholder: "mis. Saya",
    nicknameHint: "Hanya ditampilkan di layar hasil. Tidak dipakai dalam perhitungan.",
    gender: "Jenis kelamin",
    male: "Laki-laki",
    female: "Perempuan",
    genderUnspecified: "Tidak ingin menyebutkan",
    genderHint:
      "Saju tradisional membaca posisi pasangan secara berbeda menurut jenis kelamin. Jika bagian ini dilewati, faktor tersebut dikeluarkan dari perhitungan.",
    birthplace: "Tempat lahir",
    birthplaceHint:
      "Pilar jam dihitung dari waktu matahari sejati di tempat lahir Anda, termasuk waktu musim panas dan perubahan zona waktu di masa lalu. Jika tempat lahir Anda tidak ada dalam daftar, pilih kota terdekat — makin dekat, makin akurat pilar jamnya.",
    calendar: "Kalender",
    solar: "Masehi",
    lunar: "Imlek",
    leapMonth: "Bulan kabisat",
    birthDate: "Tanggal lahir",
    year: "Tahun",
    month: "Bulan",
    day: "Tanggal",
    birthTime: "Jam lahir",
    unknownTime: "Saya tidak tahu jamnya",
    hour: "Jam",
    minute: "Menit",
    submit: "Hitung kecocokan",
    submitting: "Menghitung…",
    errorInvalidDate:
      "Periksa kembali tanggal lahirnya. Untuk tanggal Imlek, periksa juga apakah jatuh pada bulan kabisat.",
    errorGeneric: "Perhitungan gagal. Silakan coba lagi sebentar lagi.",
  },
  reading: {
    chartTitle: "Kedua bagan",
    chartHint:
      "Saju menuliskan tahun, bulan, hari, dan jam lahir masing-masing dalam dua aksara. Semua nilai di bawah berasal dari delapan aksara ini.",
    pillarYear: "Tahun",
    pillarMonth: "Bulan",
    pillarDay: "Hari",
    pillarHour: "Jam",
    pillarHourUnknown: "Tanpa jam lahir",
    dayMasterLabel: "Penguasa hari",
    animalLabel: "Shio",
    seasonLabel: "Musim kelahiran",
    elementsTitle: "Kekuatan unsur",
    strongest: "Terkuat",
    scarcest: "Paling tipis",
    strengthTitle: "Kelebihan pasangan ini",
    cautionTitle: "Hal yang perlu dicermati",
    bodyStrengthTitle: "Kekuatan penguasa hari",
    favorableLabel: "Yang Anda butuhkan sekarang",
  },
  bodyStrength: {
    STRONG: {
      name: "Penguasa hari kuat",
      body: "Unsur-unsur yang menopang penguasa hari Anda berlimpah. Itu memberi Anda daya dorong sendiri, tetapi juga mudah condong ke satu sisi — Anda justru merasa tenang ketika ada yang menarik kelebihannya keluar.",
    },
    BALANCED: {
      name: "Penguasa hari seimbang",
      body: "Yang menopang penguasa hari Anda dan yang menariknya keluar hampir setara. Terlalu berimbang untuk dipastikan ke salah satu sisi, jadi di sini yang paling tipislah yang dibaca sebagai kebutuhan Anda.",
    },
    WEAK: {
      name: "Penguasa hari lemah",
      body: "Unsur-unsur yang menopang penguasa hari Anda tipis. Anda pandai meminjam kekuatan dari sekitar, tetapi lekas lelah bila bertahan sendirian — Anda berkembang ketika ada yang menyokong.",
    },
  },
  relation: {
    title: "Bagaimana kalian berdua berdampingan",
    hint: "Saju menamai cara dua penguasa hari saling memandang dengan sepuluh istilah. Pembacaannya punya arah — cara Anda memandang dia dan cara dia memandang Anda bisa berbeda.",
    directionLabel: "{from} → {to}",
    shapes: {
      ALIKE: {
        name: "Serupa",
        body: "Penguasa hari kalian membawa energi yang sama. Banyak hal tak perlu diucapkan dan selera kalian beririsan. Masalahnya, kalian kuat dan lemah di tempat yang sama, sehingga kesulitan cenderung menghentikan kalian berdua di titik yang sama.",
      },
      NURTURING: {
        name: "Satu menumbuhkan, satu mekar",
        body: "Energi mengalir satu arah. Pihak yang menerima merasa nyaman dan menemukan lebih banyak hal yang ingin dilakukan; pihak yang memberi merasa puas melihat yang lain berhasil. Karena alirannya satu arah, harus ada yang kembali atau pihak pemberi lama-lama kehabisan.",
      },
      TENSION: {
        name: "Satu mengarahkan yang lain",
        body: "Salah satu dari kalian berada pada posisi yang menahan yang lain. Ketegangan itu menjaga kalian berdua tidak mengendur dan cenderung membuahkan hasil saat bekerja bersama. Pihak yang ditahan bisa merasa terus dinilai, jadi pengakuan harus datang sebelum koreksi.",
      },
    },
    leadNote: {
      NURTURING: "Di sini **{lead}** adalah pihak yang memberikan energi.",
      TENSION: "Di sini **{lead}** adalah pihak yang menentukan langkah.",
    },
  },
  tenGods: {
    BIGYEON: {
      name: "Rekan Sejajar (比肩)",
      body: "Seseorang yang berdiri bahu-membahu. Mudah diajak bicara dan nyaman ditemani — tetapi sulit mengalah ketika kalian menginginkan hal yang sama.",
    },
    GEOPJAE: {
      name: "Saingan (劫財)",
      body: "Serupa, tetapi caranya berbeda. Tangguh saat mendorong ke arah yang sama; cermat berhitung begitu ada sesuatu yang harus dibagi.",
    },
    SIKSIN: {
      name: "Ekspresi (食神)",
      body: "Seseorang yang menarik keluar apa yang ada di dalam diri Anda. Anda lebih banyak bicara dan lebih banyak ingin melakukan sesuatu di dekatnya. Salah satu posisi paling nyaman yang ada.",
    },
    SANGGWAN: {
      name: "Pengusik (傷官)",
      body: "Seseorang yang mengguncang kerangka Anda. Menarik dan memacu — tetapi begitu kata-kata menajam di antara kalian, lukanya bertahan lama.",
    },
    PYEONJAE: {
      name: "Rezeki Tak Terduga (偏財)",
      body: "Seseorang yang ingin Anda urus. Banyak kesenangan spontan, meski bobot hubungannya bisa tetap ringan.",
    },
    JEONGJAE: {
      name: "Rezeki Tetap (正財)",
      body: "Secara tradisional adalah posisi pasangan bagi laki-laki. Perhatian datang dengan tekun, dan hubungan mengendap dalam hari-hari biasa alih-alih pada puncak-puncaknya.",
    },
    PYEONGWAN: {
      name: "Penantang (偏官)",
      body: "Seseorang yang membuat Anda selalu waspada. Tarikannya kuat dan sulit dialihkan, tetapi kedekatan yang berkepanjangan bisa terasa seperti tekanan.",
    },
    JEONGGWAN: {
      name: "Wibawa (正官)",
      body: "Secara tradisional adalah posisi pasangan bagi perempuan. Ia meluruskan Anda, serta membawa keteraturan dan ketenangan ke dalam hubungan.",
    },
    PYEONIN: {
      name: "Sokongan Tak Lazim (偏印)",
      body: "Seseorang yang menolong Anda dengan cara yang tidak biasa. Ada saat-saat yang benar-benar dalam, meski butuh waktu untuk memahami cara masing-masing.",
    },
    JEONGIN: {
      name: "Pengasuhan (正印)",
      body: "Seseorang yang merangkul dan merawat Anda. Anda ingin bersandar, dan hati Anda tenang. Namun jika sandarannya hanya satu arah, hubungan menjadi miring.",
    },
  },
  dayMasters: {
    甲: { name: "Kayu Yang (甲)", trait: "Pohon tinggi yang tumbuh lurus. Begitu arah ditetapkan ia tidak goyah, dan lebih memilih bertahan daripada menekuk." },
    乙: { name: "Kayu Yin (乙)", trait: "Sulur — rumput yang lentur. Ia melengkung mengikuti keadaan agar terus melaju, dan tidak patah." },
    丙: { name: "Api Yang (丙)", trait: "Matahari tengah hari. Perasaan tampak apa adanya, ruangan menjadi terang, dan melangkah ke depan terasa wajar." },
    丁: { name: "Api Yin (丁)", trait: "Cahaya lilin. Ia menyala pelan dan lama, serta menghangatkan yang terdekat lebih dulu." },
    戊: { name: "Tanah Yang (戊)", trait: "Tanah lapang dan pegunungan. Sulit digoyahkan dan mudah dijadikan sandaran, meski lambat mengubah keputusan yang sudah diambil." },
    己: { name: "Tanah Yin (己)", trait: "Tanah ladang. Ia menerima apa pun yang datang dan menumbuhkannya, lebih suka merawat daripada menonjolkan diri." },
    庚: { name: "Logam Yang (庚)", trait: "Besi yang belum digarap. Tegas dan lugas, dengan sedikit kesabaran untuk hal yang dibiarkan menggantung." },
    辛: { name: "Logam Yin (辛)", trait: "Permata yang telah diasah. Seleranya halus dan standarnya tinggi; kecerobohan sulit dibiarkan lewat." },
    壬: { name: "Air Yang (壬)", trait: "Sungai dan laut. Luas cara pandangnya, dengan mata yang membaca ke mana keadaan mengalir." },
    癸: { name: "Air Yin (癸)", trait: "Embun dan hujan. Ia meresap diam-diam dan membaca suasana sebelum kata-kata terucap." },
  },
  dayMasterSigns: {
    甲: [
      "Mengatakan apa yang dipikirkannya bahkan pada pertemuan pertama.",
      "Jarang mengubah rencana atau janji yang sudah ditetapkan.",
      "Menolak dengan lugas, sehingga bisa terdengar kaku.",
    ],
    乙: [
      "Menghindari benturan dan mengambil jalan lain.",
      "Tampak lembut, tetapi berakhir di tempat yang memang dituju.",
      "Membaca suasana dulu sebelum bergabung dengan kelompok.",
    ],
    丙: [
      "Menyapa lebih dulu orang yang baru dikenal.",
      "Suka dan tidak suka terlihat jelas di wajahnya.",
      "Berakhir di tengah keramaian tanpa berusaha.",
    ],
    丁: [
      "Pendiam pada awalnya, penuh perhatian setelah dekat.",
      "Lebih suka mengobrol lama dengan satu dua orang daripada di keramaian.",
      "Mengingat ucapan sepintas dan membawanya lagi di lain waktu.",
    ],
    戊: [
      "Sedikit bicara; suaranya jarang meninggi bahkan saat keadaan mendesak.",
      "Orang yang menuntaskan di akhir ketika yang lain menunda keputusan.",
      "Sekali berkata tidak, itu bertahan lama.",
    ],
    己: [
      "Lebih lama mendengarkan daripada berbicara.",
      "Sulit menolak, sehingga pekerjaan menumpuk padanya.",
      "Apa yang diam-diam ia urus baru terlihat belakangan.",
    ],
    庚: [
      "Memutuskan cepat dan mengatakannya saat itu juga.",
      "Tidak memperhalus ucapan, sehingga bisa terbaca dingin.",
      "Terlihat gelisah ketika sesuatu berlarut-larut.",
    ],
    辛: [
      "Punya standar yang jelas soal pakaian dan barang yang dipilihnya.",
      "Tidak bisa membiarkan pekerjaan setengah jadi lewat tanpa menegurnya.",
      "Pelit memuji, tetapi pasti begitu ia sungguh mengakui.",
    ],
    壬: [
      "Mudah berbaur dengan segala macam orang.",
      "Membicarakan hal yang jauh di depan sebelum yang ada di hadapannya.",
      "Gerah bila terlalu lama terikat di satu tempat.",
    ],
    癸: [
      "Sedikit bicara tetapi membaca keadaan dengan tepat.",
      "Paling awal menyadari saat suasana berubah.",
      "Menyimpan isi hatinya, jadi butuh waktu untuk mengenalnya.",
    ],
  },
  animalTraits: {
    rat: "Cepat menangkap keadaan dan cepat mengamankan yang penting. Paling dulu bergerak saat krisis.",
    ox: "Terlihat lambat tetapi selalu menuntaskan. Apa yang diambilnya, tidak dilepaskan.",
    tiger: "Tak kenal takut dan berdiri paling depan. Tidak bisa membiarkan ketidakadilan lewat.",
    rabbit: "Lembut dan peka. Tahu cara memutar alih-alih berbenturan.",
    dragon: "Berhati luas dengan cita-cita tinggi. Jarang puas dengan yang biasa-biasa saja.",
    snake: "Menyimpan pikirannya sendiri dan berpikir dalam. Penilaiannya tepat.",
    horse: "Ceria dan tak bisa diam. Terkurung adalah hal terberat baginya.",
    goat: "Hangat dan penuh tenggang rasa. Kata-kata kasar disimpannya lama.",
    monkey: "Banyak akal dan cepat menyesuaikan diri. Bosan pada pengulangan.",
    rooster: "Rajin dan teliti. Tidak bisa membiarkan sesuatu berantakan.",
    dog: "Setia sampai akhir begitu kepercayaan diberikan. Pengkhianatan melukainya sangat dalam.",
    pig: "Murah hati dan apa adanya. Mudah percaya, kadang dengan harga yang harus dibayar.",
  },
  affinity: {
    menu: "Profil jodoh Anda",
    formTitle: "Orang seperti apa yang cocok untuk Anda",
    formDescription:
      "Cukup satu tanggal lahir. Anda bisa membacanya tanpa tahu tanggal lahir siapa pun — atau bahkan tanpa ada seseorang dalam pikiran.",
    meLegend: "Anda",
    genderHint:
      "Saju tradisional membaca posisi pasangan secara berbeda menurut jenis kelamin. Jika dibiarkan kosong, faktor itu dilewati alih-alih ditebak.",
    seekingLabel: "Mencari",
    seekingHint:
      "Posisi pasangan (Jeongjae / Jeonggwan) hanya bisa dinilai bila jenis kelamin keduanya diketahui.",
    seekingAny: "Tidak ditentukan",
    submit: "Baca profil jodoh saya",
    submitting: "Membaca…",

    resultTitle: "Profil jodoh Anda",
    intro:
      "Inilah corak orang yang dituju oleh bagan Anda. **Anda bisa mengenali tipe-tipe ini dari perangainya,** jauh sebelum tahu tanggal lahirnya.",
    scoreCaption:
      "Ini adalah nilai per faktor yang sama dengan yang dipakai mesin kecocokan — bukan tingkat kecocokan gabungan.",
    meTitle: "Posisi Anda",
    meBody: "Anda adalah {dayMaster}, dan saat ini {strength}.",
    meHint:
      "Saju menuliskan tahun, bulan, hari, dan jam lahir Anda sebagai delapan aksara. **Aksara pertama dari hari kelahiran mewakili diri Anda** — inilah yang disebut batang hari. Semua tipe di bawah pun dibagi berdasarkan satu aksara itu.",
    bestTitle: "Corak yang cocok untuk Anda",
    bestHint:
      "Ini adalah batang hari orang lain — **energi dari hari kelahirannya** — yang dibagi menjadi sepuluh macam, dan tiga di antaranya bertaut dengan milik Anda. Anda sering bisa menebaknya dari perilaku di bawah, jauh sebelum tahu tanggal lahirnya.",
    signsTitle: "Begini wujudnya sehari-hari",
    avoidTitle: "Corak yang butuh usaha",
    avoidHint:
      "Ini bukan peringatan. Artinya kenyamanan datang belakangan, setelah kalian berdua meluangkan waktu.",
    bondLabel: "Pertautan perangai",
    spouseLabel: "Posisi pasangan",
    spouseSkipped: "Jenis kelamin tidak diisi, jadi faktor ini dilewati",
    scoreHelp:
      "**Pertautan perangai** — bagaimana energi kedua hari kelahiran kalian saling mengunci. Bahkan pasangan yang saling tarik-menarik pun bernilai tertinggi ketika yin dan yang-nya bersilangan.\n**Posisi pasangan** — Saju tradisional menyisihkan satu posisi khusus untuk pasangan: Jeongjae bagi laki-laki, Jeonggwan bagi perempuan. Kami memeriksanya **dua arah** — apakah dia menempati posisi itu bagi Anda, dan apakah Anda menempatinya bagi dia. Keduanya sekaligus adalah pasangan yang dinilai paling tinggi oleh tradisi.",
    typeHeading: "Seseorang seperti {name}",
    needTitle: "Yang kini kurang pada diri Anda",
    needBody:
      "Jika {elements} kuat pada dirinya, itu mengisi tempat yang tipis pada diri Anda.",
    needHint:
      "Anda tidak bisa membaca lima unsur seseorang hanya dengan melihatnya. Tetapi begitu tahu tanggal lahirnya, lihat bagian ini lebih dulu.",
    zodiacTitle: "Shio, sebagai catatan tambahan",
    zodiacHint:
      "Shio hanya perlu tahun lahir, jadi paling cepat diperiksa. Ia juga hanya satu dari empat pilar — perlakukan sebagai petunjuk.",
    zodiacGood: "Shio yang cocok",
    zodiacHard: "Shio yang mudah berbenturan",
    tableType: "Tipe",
    tableSign: "Shio",
    tableYears: "Tahun kelahiran",
    bornYear: "lahir {year}",
    younger: "{n} thn lebih muda",
    older: "{n} thn lebih tua",
    sameAge: "seusia",
    zodiacYearsCaution:
      "Dalam Saju tahun berganti pada Ipchun (sekitar 4 Februari), bukan 1 Januari. **Siapa pun yang lahir pada Januari atau awal Februari termasuk shio tahun sebelumnya**, jadi untuk tanggal lahir seperti itu periksalah tahun sebelum dan sesudahnya.",
    dayBranchTitle: "Apakah dia orang yang tepat untuk saya?",
    dayBranchBody:
      "Cukup tanggal lahir untuk memeriksa apakah seseorang cocok dengan Anda.\nUntuk pembacaan lengkap, gunakan kecocokan Saju di bagian bawah halaman ini.",
    check: {
      button: "Periksa lewat tanggal lahirnya",
      title: "Corak seperti apa orang ini?",
      body: "Masukkan tanggal lahir dan kami akan memberi tahu dia termasuk yang mana dari sepuluh tipe di atas. Tidak ada nilai kecocokan yang dihitung.",
      submit: "Periksa",
      checking: "Memeriksa…",
      rank: "peringkat {rank} Anda",
      heading: "Orang ini adalah {name}",
      caution:
        "Ini hanya membaca hari kelahiran. **Jika dia lahir sekitar tengah malam**, harinya bisa jatuh ke sisi mana pun, dan tanggal lahir pada Januari atau awal Februari termasuk shio tahun sebelumnya.",
      close: "Tutup",
      another: "Periksa orang lain",
      error: "Periksa tanggalnya — tanggal itu tidak ada atau di luar jangkauan.",
    },
    nextTitle: "Ada orang yang sedang Anda pikirkan?",
    nextBody:
      "Masukkan kedua tanggal lahir dan Anda mendapat tingkat kecocokan yang sebenarnya, dengan semua faktor di atas dijumlahkan.",
    nextButton: "Lihat kecocokan Saju",
    recalculate: "Baca lagi",
    copyLink: "Salin tautan hasil",
    copied: "Tersalin",
    missingInput: "Kami tidak dapat membaca hasilnya. Silakan mulai dari awal lagi.",
    partialTime:
      "Jam lahir tidak diisi, jadi pilar jam dikeluarkan. Menambahkannya mempertajam bacaan tentang apa yang kurang pada Anda.",
    disclaimer:
      "Sebuah referensi dari sudut pandang Saju tradisional. Ini bukan anjuran untuk mencari atau menghindari orang tertentu.",
  },
  result: {
    title: "Hasil kecocokan",
    totalLabel: "Tingkat kecocokan",
    breakdown: "Nilai per faktor",
    recalculate: "Mulai lagi",
    copyLink: "Salin tautan hasil",
    copied: "Tersalin",
    missingInput: "Hasil ini tidak dapat dibaca. Silakan masukkan kembali tanggalnya.",
    partialTime:
      "Jam lahir tidak diisi, jadi pilar jam dikeluarkan. Menambahkannya membuat pembacaan lebih tepat.",
    engineVersion: "Dihitung dengan",
    disclaimer:
      "Ini adalah pembacaan Saju tradisional yang disajikan sebagai referensi. Bukan prediksi ilmiah maupun kesimpulan pasti tentang suatu hubungan.",
  },
  ads: { label: "Iklan" },
  analyzing: {
    title: "Sedang membaca kedua bagan",
    quotes: [
      "Orang yang tepat lebih sering dikenali daripada ditemui.",
      "Pasangan yang cocok bukan yang tak pernah bertengkar — melainkan yang kembali setelah bertengkar.",
      "Saju bukan jawaban yang sudah pasti. Ia satu bahasa untuk saling memahami.",
      "Ada pasangan yang mudah karena serupa; ada yang mengajari karena berbeda.",
      "Hubungan yang bertahan biasanya hubungan yang tak membiarkan sesuatu terlalu lama tak terucap.",
      "Jika caranya terasa asing, artinya dia memiliki sesuatu yang tidak Anda miliki.",
      "Kecocokan itu separuh bawaan lahir dan separuh yang dibangun bersama.",
      "Hubungan bertahan ketika bersandar dan memberi saling bergantian.",
      "Yang lebih penting daripada angkanya adalah bagaimana Anda membacanya.",
      "Jika musim kalian berbeda, ceritakan satu sama lain seperti apa musim masing-masing.",
    ],
    gateTitle: "Hasil Anda sudah siap",
    gateBody:
      "Tonton iklan singkat untuk membukanya. Pendapatan iklanlah yang membuat layanan ini tetap gratis.",
    watchButton: "Tonton iklan untuk melihat hasil",
    watching: "Sedang menonton iklan",
    remaining: "Hasil Anda terbuka dalam {seconds} detik",
  },
  report: {
    title: "Simpan pembacaan ini sebagai PDF",
    body: "Kami mengubah hasil ini menjadi PDF tiga halaman, lengkap dengan angka kekuatan unsur yang tidak ditampilkan di layar.",
    buyButton: "Bayar {price} dan unduh",
    preparing: "Belum tersedia",
    ordering: "Membuat pesanan Anda…",
    paying: "Memproses pembayaran…",
    issuing: "Menyiapkan laporan Anda…",
    done: "Sudah diunduh. Gunakan tombol di bawah untuk mengunduhnya lagi.",
    failed: "Pembayaran atau unduhan gagal. Silakan coba lagi sebentar lagi.",
    retry: "Unduh lagi",
    contents: [
      "Halaman 1 — tingkat kecocokan, kelebihan pasangan ini dan hal yang perlu dicermati",
      "Halaman 2 — bentuk hubungan, sepuluh dewa, dan nilai per faktor",
      "Halaman 3 — kedua bagan dan kekuatan unsur",
    ],
    consentLabel:
      "Saya memahami bahwa ini adalah konten digital yang diberikan segera setelah pembayaran, dan bahwa **pembatalan karena sekadar berubah pikiran menjadi terbatas begitu unduhan selesai**.",
    consentRequired: "Harap konfirmasi ketentuan pembatalan sebelum membayar.",
    productInfoTitle: "Informasi produk",
    productInfo: [
      ["Penyedia", "Naming-Link"],
      ["Format", "Satu dokumen PDF (3 halaman), diunduh di layar segera setelah pembayaran."],
      ["Persyaratan", "Perangkat apa pun yang dapat membuka PDF. Tanpa instalasi atau akun."],
      ["Masa penggunaan", "Tanpa batas. Berkas yang Anda unduh menjadi milik Anda."],
      ["Unduh ulang", "Hingga lima kali pada pesanan yang sama. Kami tidak menyimpan salinannya, jadi berkas tidak dapat dibuat lagi setelah Anda meninggalkan layar hasil."],
      ["Pembatalan", "Pengembalian dana penuh sebelum unduhan dimulai. Setelah unduhan selesai, pembatalan karena berubah pikiran menjadi terbatas (Pasal 17 ayat (2) Undang-Undang E-Commerce Korea)."],
      ["Biaya pengembalian", "Tidak ada — konten digital, tidak ada yang dikirimkan."],
    ],
    refundContact:
      "Untuk pengembalian dana atau pertanyaan, hubungi layanan pelanggan atau email di bawah. Jika dokumen tidak dapat dibuat, atau jumlah yang ditagih berbeda dari pesanan, kami mengembalikan dana sepenuhnya.",
  },
  affinityReport: {
    title: "Simpan profil jodoh Anda sebagai PDF",
    body: "Kami mengubah pembacaan ini menjadi PDF empat halaman. Di dalamnya termuat **peringkat lengkap yang tidak ditampilkan di layar** — layar memberi Anda tiga teratas, PDF memuat seluruh sepuluh tipe dan dua belas shio.",
    buyButton: "Bayar {price} dan unduh",
    preparing: "Sedang disiapkan",
    ordering: "Membuat pesanan…",
    paying: "Memproses pembayaran…",
    issuing: "Menyusun laporan Anda…",
    done: "Sudah diunduh. Gunakan tombol di bawah untuk mendapatkannya lagi.",
    failed: "Pembayaran atau unduhan tidak berhasil. Silakan coba lagi sebentar lagi.",
    retry: "Unduh lagi",
    contents: [
      "Halaman 1 — Posisi Anda dan apa yang kini kurang pada diri Anda",
      "Halaman 2 — Tiga corak yang cocok untuk Anda, dengan petunjuk perilakunya",
      "Halaman 3 — Corak yang butuh usaha, plus peringkat lengkap sepuluh batang hari",
      "Halaman 4 — Peringkat lengkap dua belas shio, dengan tahun kelahirannya",
    ],
    consentLabel:
      "Ini adalah konten digital yang diberikan segera setelah pembayaran. Saya memahami bahwa **begitu unduhan selesai, hak untuk membatalkan karena berubah pikiran menjadi terbatas.**",
    consentRequired: "Harap setujui ketentuan pembatalan sebelum membayar.",
    productInfoTitle: "Informasi produk",
    productInfo: [
      ["Penyedia", "Naming-Link"],
      ["Format", "Satu dokumen PDF (4 halaman), diunduh di layar ini segera setelah pembayaran."],
      ["Persyaratan", "Perangkat apa pun yang dapat membuka PDF. Tanpa instalasi, tanpa akun."],
      ["Ketersediaan", "Tanpa batas waktu. Berkas yang diunduh menjadi milik Anda."],
      ["Unduh ulang", "Hingga 5 kali pada pesanan yang sama. Kami tidak menyimpan berkasnya, jadi tidak dapat dibuat ulang setelah Anda meninggalkan layar ini."],
      ["Pembatalan", "Pengembalian dana penuh sebelum unduhan selesai. Setelah unduhan selesai, pembatalan karena berubah pikiran menjadi terbatas."],
      ["Biaya pengembalian", "Tidak ada. Tidak ada yang perlu dikirimkan."],
    ],
    refundContact:
      "Untuk pengembalian dana atau pertanyaan, hubungi meja bantuan atau email di bawah. Jika dokumen tidak pernah dibuat, atau jumlah yang ditagih berbeda dari pesanan, kami mengembalikan dana sepenuhnya.",
  },
  footer: {
    privacy: "Privasi",
    terms: "Ketentuan",
    refund: "Refund",
    pricing: "Harga",
    legalEntity: "Perusahaan",
    representative: "Perwakilan",
    businessNumber: "Registrasi",
    mailOrderNumber: "Perdagangan online",
    address: "Alamat",
    customerCenter: "Layanan pelanggan",
    email: "Email",
    privacyOfficer: "Petugas privasi",
    hostingProvider: "Hosting",
    providedBy: "Disediakan oleh",
    effective: "Berlaku",
    backHome: "Kembali ke beranda",
  },
  bands: {
    EXCELLENT: "Pasangan yang luar biasa cocok",
    GOOD: "Pasangan yang sangat cocok",
    FAIR: "Pasangan yang cukup cocok",
    CHALLENGING: "Pasangan yang butuh usaha",
  },
  engines: {
    saju: {
      name: "Kecocokan Saju",
      description:
        "Membaca unsur penguasa hari, keseimbangan unsur, dan cabang hari sekaligus.",
    },
    zodiac: {
      name: "Kecocokan shio",
      description: "Membaca hubungan antara kedua cabang tahun kelahiran.",
    },
  },
  factors: {
    dayMasterRelation: "Unsur penguasa hari",
    spouseStar: "Bintang pasangan",
    elementSupply: "Pasokan unsur",
    dayBranchRelation: "Cabang hari",
    branchRelation: "Shio",
  },
  notes: {
    "strength.dayMasterRelation":
      "Perangai kalian berada pada posisi yang saling dibutuhkan. Bahkan ketika cara yang lain terasa asing, pada akhirnya itu memasok apa yang kurang pada diri Anda.",
    "strength.spouseStar":
      "Kalian masing-masing membawa unsur yang secara tradisional dibaca sebagai posisi pasangan. Jika sejak awal terasa mudah tanpa alasan yang jelas, inilah kemungkinan besar sebabnya.",
    "strength.elementSupply":
      "Kalian masing-masing memegang apa yang kini dibutuhkan oleh yang lain. Hal yang sulit digerakkan sendirian cenderung menjadi lebih ringan saat dijalani bersama.",
    "strength.dayBranchRelation":
      "Cabang hari secara tradisional dibaca sebagai kursi pasangan. Milik kalian duduk berdampingan dengan baik, sehingga waktu yang dihabiskan bersama cenderung terasa nyaman.",
    "strength.branchRelation":
      "Shio kalian duduk berdampingan dengan baik — pasangan yang tampak wajar dari luar dan terasa mudah pada pertemuan pertama.",
    "caution.dayMasterRelation":
      "Di sinilah perangai kalian bergesekan. Menghadapi tugas yang sama, kecepatan dan cara kalian berbeda, dan itu mudah disalahartikan sebagai kesengajaan. Sepakati prosesnya lebih dulu, sebelum kesimpulannya.",
    "caution.spouseStar":
      "Tak satu pun dari kalian membawa unsur yang oleh tradisi disebut posisi pasangan bagi yang lain. Tarikannya mungkin tidak langsung terasa; ini pasangan yang justru menumpuk seiring waktu.",
    "caution.elementSupply":
      "Apa yang dibutuhkan masing-masing juga tipis pada diri yang lain. Apa yang kalian berdua kuasai memang dikuasai dengan sangat baik — tetapi tempat yang sama-sama kosong akan tetap kosong. Lebih baik memenuhinya dari luar hubungan.",
    "caution.dayBranchRelation":
      "Gesekan mungkin terjadi pada posisi kehidupan bersama. Biasanya muncul dalam kebiasaan kecil, bukan perkara besar, jadi menyepakati beberapa aturan dasar sejak awal akan membantu.",
    "caution.branchRelation":
      "Shio kalian duduk berseberangan. Kalian memandang segala sesuatu secara berbeda, yang menimbulkan gesekan — sekaligus berarti banyak yang bisa dipelajari dari satu sama lain.",

    "spouseStar.MUTUAL":
      "Kalian masing-masing menempati persis posisi pasangan bagi yang lain — pasangan yang dinilai paling tinggi oleh Saju tradisional.",
    "spouseStar.STRONG":
      "Salah satu dari kalian menempati persis posisi pasangan dan yang lain berada dekat dengannya. Besar perasaan masing-masing terhadap yang lain mungkin sedikit berbeda.",
    "spouseStar.PARTIAL":
      "Hanya salah satu dari kalian yang menempati posisi pasangan bagi yang lain. Tarikan awal cenderung berjalan satu arah, jadi sebaiknya jangan menunda mengungkapkannya.",
    "spouseStar.SLIGHT":
      "Salah satu dari kalian berada berdampingan dengan posisi pasangan. Ini menumpuk melalui waktu yang dijalani bersama, bukan datang sebagai ketertarikan seketika.",
    "spouseStar.NONE":
      "Tak satu pun dari kalian menempati apa yang oleh tradisi disebut posisi pasangan. Pasangan ini dibangun dengan menjalani hari bersama, bukan lewat tarikan.",
    "dayMaster.CLASH_BONDED":
      "{elementA} dan {elementB} saling menahan, tetapi dengan polaritas yang berlawanan. Tradisi membaca ini sebagai padanan suami istri — ketegangannya cenderung berubah menjadi keterikatan.",
    "dayMaster.CLASH_HARSH":
      "{elementA} dan {elementB} saling menahan dengan polaritas yang sama. Muatannya kuat, begitu pula beban yang ditaruh masing-masing pada yang lain.",
    "dayMaster.FLOW_GUARDED":
      "Salah satu dari kalian mengeluarkan energi dan yang lain menampungnya. Dorongan yang lebih tajam diredam oleh yang lain — inilah yang tradisi sebut padanan yang terjaga.",
    "dayMaster.FLOW_BLOCKED":
      "Salah satu dari kalian mengeluarkan energi dan yang lain justru menariknya pergi. Pihak yang memberi mudah lelah di sini, jadi ada baiknya mengatakan terus terang apa yang masing-masing beri dan terima.",
    "dayMaster.PEER_EVEN":
      "Keduanya membawa energi {elementA} dengan polaritas yang sama. Itu membuat segalanya setara dan mudah, tetapi tak ada yang mendorong yang lain maju.",
    "dayMaster.PEER_RIVAL":
      "Keduanya membawa energi {elementA} dengan polaritas yang berlawanan. Tarikannya cepat, tetapi kalian memperebutkan lahan yang sama.",
    "supply.AMPLE":
      "Kalian masing-masing memegang banyak dari apa yang dibutuhkan yang lain. Orang pertama membutuhkan {needA} dan orang kedua membutuhkan {needB} — dan pasangannya memasok tempat itu.",
    "supply.ENOUGH":
      "Kalian masing-masing memegang cukup banyak dari apa yang dibutuhkan yang lain: {needA} untuk orang pertama, {needB} untuk orang kedua.",
    "supply.THIN":
      "Apa yang dibutuhkan masing-masing — {needA} untuk orang pertama, {needB} untuk orang kedua — tipis pada diri yang lain.",
    "supply.SCARCE":
      "Tak satu pun dari kalian dapat dengan mudah memasok apa yang dibutuhkan yang lain: {needA} untuk orang pertama, {needB} untuk orang kedua, dan kedua tempat itu sama-sama kosong. Lebih baik memenuhinya dari luar hubungan.",
    "dayBranch.SAMHAP":
      "Cabang hari membentuk harmoni tiga — padanan terkuat pada posisi pasangan.",
    "dayBranch.BANHAP":
      "Cabang hari membentuk setengah harmoni di sekitar poros harmoni tiga. Padanan yang serasi pada posisi pasangan.",
    "dayBranch.YUKHAP": "Cabang hari membentuk harmoni enam. Kalian saling menarik.",
    "dayBranch.SAME":
      "Cabang hari kalian sama persis. Itu membuat segalanya mudah, tetapi menyisakan sedikit kebaruan.",
    "dayBranch.NEUTRAL": "Cabang hari kalian tidak memiliki hubungan khusus.",
    "dayBranch.WONJIN":
      "Cabang hari kalian duduk dalam kejengkelan yang terpendam. Jarang ada yang meledak terbuka, tetapi rasa kecewa yang sulit dinamai cenderung menumpuk — lebih baik dikatakan saat itu juga daripada dibiarkan lewat.",
    "dayBranch.CHUNG":
      "Cabang hari kalian berbenturan. Posisi ini rawan gesekan, jadi cara kalian berbicara satu sama lain sangat menentukan.",
    "zodiac.SAMHAP":
      "Shio {animalA} dan shio {animalB} membentuk harmoni tiga — padanan shio yang terbaik.",
    "zodiac.BANHAP":
      "Shio {animalA} dan shio {animalB} membentuk setengah harmoni di sekitar poros harmoni tiga, sehingga kalian serasi.",
    "zodiac.YUKHAP": "Shio {animalA} dan shio {animalB} membentuk harmoni enam. Kalian sangat serasi.",
    "zodiac.SAME": "Kalian berdua lahir pada tahun shio {animalA}, sehingga perangai kalian bergema serupa.",
    "zodiac.NEUTRAL": "Shio {animalA} dan shio {animalB} tidak memiliki hubungan khusus.",
    "zodiac.WONJIN":
      "Shio {animalA} dan shio {animalB} duduk dalam kejengkelan yang terpendam — jarang menjadi pertengkaran terbuka, tetapi ketaksesuaian halus yang cenderung bertahan lama.",
    "zodiac.CHUNG":
      "Shio {animalA} dan shio {animalB} berbenturan. Kalian sangat berbeda, dan itu juga berarti banyak yang bisa dipelajari.",
  },
  animals: {
    rat: "Tikus",
    ox: "Kerbau",
    tiger: "Macan",
    rabbit: "Kelinci",
    dragon: "Naga",
    snake: "Ular",
    horse: "Kuda",
    goat: "Kambing",
    monkey: "Monyet",
    rooster: "Ayam",
    dog: "Anjing",
    pig: "Babi",
  },
  elements: {
    WOOD: "Kayu",
    FIRE: "Api",
    EARTH: "Tanah",
    METAL: "Logam",
    WATER: "Air",
  },
};
