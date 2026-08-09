// 인연링크(사주 궁합) 화면 사전의 말레이어(말레이시아 표준) 번역이다.
// `src/lib/i18n.ts`의 `const en: Dictionary`를 구조·번역의 기준으로 삼았고, 사주 용어가 모호한
// 자리는 같은 파일의 `const ko`(원문)를 대조했다. 언어 선택기 3개 키와 footer 13개 키는
// naminglink의 ms 문구를 그대로 가져왔다(customerCenter·effective·backHome만 새로 옮김).

import type { Dictionary } from "@/lib/i18n";

export const ms: Dictionary = {
  brand: "InyeonLink",
  tagline: "Keserasian dibaca melalui Saju dan zodiak",
  currentLanguage: "Bahasa semasa",
  moreLanguages: "Lagi",
  closeLanguages: "Tutup",
  landing: {
    title: "Lihat sejauh mana dua orang\nserasi bersama",
    subtitle:
      "Cukup dengan satu tarikh lahir.\nKami menggabungkan keserasian Saju (Empat Tiang) dengan keserasian zodiak dan memaparkannya sebagai kadar padanan.",
    cta: "Lihat keserasian Saju",
    howTitle: "Cara ia dikira",
    steps: [
      "Masukkan kedua-dua tarikh lahir. Waktu lahir adalah pilihan.",
      "Keserasian Saju datang daripada unsur tuan hari, keseimbangan unsur dan cabang hari; keserasian zodiak datang daripada cabang tahun.",
      "Kedua-dua skor digabungkan menjadi kadar padanan berwajaran.",
    ],
    privacyTitle: "Apa-apa yang anda masukkan tidak disimpan",
    privacyBody:
      "Tarikh lahir digunakan hanya semasa keputusan sedang dikira dan tidak pernah direkodkan. Tiada akaun diperlukan. Apa-apa yang dibawa dalam pautan keputusan tidak dihantar ke pelayan.",
    disclaimer:
      "Ini bacaan Saju tradisional yang ditawarkan sebagai rujukan. Ia bukan ramalan saintifik atau penghakiman terhadap mana-mana hubungan.",
  },
  form: {
    title: "Kedua-dua tarikh lahir",
    description:
      "Mengetahui waktu lahir menjadikan bacaan lebih tajam, tetapi ia tidak diwajibkan.",
    personA: "Orang pertama",
    personB: "Orang kedua",
    nickname: "Panggilan",
    nicknamePlaceholder: "cth. Saya",
    nicknameHint:
      "Dipaparkan pada skrin keputusan sahaja. Ia tidak digunakan dalam pengiraan.",
    gender: "Jantina",
    male: "Lelaki",
    female: "Perempuan",
    genderUnspecified: "Tidak mahu nyatakan",
    genderHint:
      "Saju tradisional membaca kedudukan pasangan secara berbeza mengikut jantina. Jika anda melangkaunya, faktor itu ditinggalkan daripada pengiraan.",
    birthplace: "Tempat lahir",
    birthplaceHint:
      "Tiang jam dikira daripada waktu suria sebenar di tempat lahir anda, termasuk waktu jimat siang dan perubahan zon waktu pada masa lalu. Jika tempat lahir anda tiada dalam senarai, pilih bandar terdekat — semakin dekat, semakin tepat tiang jam itu.",
    calendar: "Kalendar",
    solar: "Suria",
    lunar: "Lunar",
    leapMonth: "Bulan lompat",
    birthDate: "Tarikh lahir",
    year: "Tahun",
    month: "Bulan",
    day: "Hari",
    birthTime: "Waktu lahir",
    unknownTime: "Saya tidak tahu waktunya",
    hour: "Jam",
    minute: "Minit",
    submit: "Tonton iklan untuk melihat keputusan keserasian",
    submitNoAd: "Lihat keputusan keserasian",
    submitting: "Mengira…",
    errorInvalidDate:
      "Sila semak tarikh lahir. Bagi tarikh lunar, semak juga sama ada ia jatuh pada bulan lompat.",
    errorGeneric: "Pengiraan gagal. Sila cuba lagi sebentar nanti.",
  },
  reading: {
    chartTitle: "Kedua-dua carta",
    chartHint:
      "Saju menulis tahun, bulan, hari dan jam kelahiran sebagai dua aksara setiap satu. Semua skor di bawah datang daripada lapan aksara ini.",
    pillarYear: "Tahun",
    pillarMonth: "Bulan",
    pillarDay: "Hari",
    pillarHour: "Jam",
    pillarHourUnknown: "Tiada waktu lahir",
    dayMasterLabel: "Tuan hari",
    animalLabel: "Zodiak",
    seasonLabel: "Musim kelahiran",
    elementsTitle: "Kekuatan unsur",
    strongest: "Paling kuat",
    scarcest: "Paling tipis",
    strengthTitle: "Kelebihan pasangan ini",
    cautionTitle: "Perkara yang perlu diperhatikan",
    bodyStrengthTitle: "Kekuatan tuan hari",
    favorableLabel: "Yang anda perlukan kini",
  },
  bodyStrength: {
    STRONG: {
      name: "Tuan hari kuat",
      body: "Unsur yang menyokong tuan hari anda penuh. Itu memberi anda daya dorong sendiri, tetapi ia juga mudah condong ke satu pihak — anda cenderung tenang apabila ada sesuatu yang menyalurkan lebihan itu keluar.",
    },
    BALANCED: {
      name: "Tuan hari seimbang",
      body: "Apa yang menyokong tuan hari anda dan apa yang menariknya keluar hampir sama rata. Terlalu hampir untuk ditentukan sebelah mana, jadi di sini kami membaca unsur yang paling tipis sebagai apa yang anda perlukan.",
    },
    WEAK: {
      name: "Tuan hari lemah",
      body: "Unsur yang menyokong tuan hari anda tipis. Anda pandai meminjam kekuatan daripada sekeliling, tetapi lesu apabila bertahan lama seorang diri — anda menyerlah apabila ada sesuatu yang menyokong anda.",
    },
  },
  relation: {
    title: "Bagaimana anda berdua bertaut",
    hint: "Saju menamakan cara dua tuan hari melihat satu sama lain dengan sepuluh istilah. Bacaan ini berarah — cara anda melihat mereka dan cara mereka melihat anda boleh berbeza.",
    directionLabel: "{from} → {to}",
    shapes: {
      ALIKE: {
        name: "Sejenis",
        body: "Tuan hari anda berdua membawa tenaga yang sama. Banyak perkara difahami tanpa perlu dikatakan dan cita rasa anda bertindih. Masalahnya, anda kuat dan lemah pada tempat yang sama, jadi kesukaran cenderung menahan anda berdua pada titik yang sama.",
      },
      NURTURING: {
        name: "Satu memupuk, satu berkembang",
        body: "Tenaga mengalir satu arah. Pihak yang menerima berasa selesa dan menemui lebih banyak perkara yang ingin dilakukan; pihak yang memberi berpuas hati melihat yang seorang lagi berjaya. Kerana aliran itu sehala, sesuatu mesti kembali atau pihak yang memberi akhirnya kekeringan.",
      },
      TENSION: {
        name: "Satu menegakkan yang lain",
        body: "Salah seorang daripada anda berada pada kedudukan yang mengekang yang seorang lagi. Ketegangan itu menghalang anda berdua daripada menjadi longgar dan biasanya membuahkan hasil apabila anda bekerja bersama. Pihak yang dikekang boleh berasa sentiasa dinilai, jadi pengiktirafan mesti datang sebelum teguran.",
      },
    },
    leadNote: {
      NURTURING: "Di sini **{lead}** ialah pihak yang memberikan tenaga.",
      TENSION: "Di sini **{lead}** ialah pihak yang menentukan rentak.",
    },
  },
  tenGods: {
    BIGYEON: {
      name: "Rakan Sebahu (比肩)",
      body: "Seseorang yang berdiri bahu ke bahu dengan anda. Mudah diajak berbual dan mudah didampingi — tetapi sukar untuk mengalah apabila anda berdua mahukan perkara yang sama.",
    },
    GEOPJAE: {
      name: "Pesaing (劫財)",
      body: "Serupa, tetapi caranya berbeza. Hebat apabila menolak ke arah yang sama; tajam kiraannya sebaik ada sesuatu untuk dibahagi.",
    },
    SIKSIN: {
      name: "Ekspresi (食神)",
      body: "Seseorang yang mengeluarkan apa yang ada dalam diri anda. Anda lebih banyak bercakap dan lebih banyak yang ingin dilakukan apabila bersamanya. Antara kedudukan yang paling selesa.",
    },
    SANGGWAN: {
      name: "Pengocak (傷官)",
      body: "Seseorang yang menggugat kerangka anda. Menarik dan merangsang — tetapi sebaik kata-kata menjadi tajam antara anda, lukanya berpanjangan.",
    },
    PYEONJAE: {
      name: "Rezeki Mendadak (偏財)",
      body: "Seseorang yang anda ingin jaga. Banyak keseronokan yang spontan, walaupun berat hubungan itu boleh kekal ringan.",
    },
    JEONGJAE: {
      name: "Harta Tetap (正財)",
      body: "Secara tradisi, kedudukan pasangan bagi lelaki. Perhatian datang dengan tekun, dan hubungan itu menetap dalam hari-hari biasa dan bukan pada puncak.",
    },
    PYEONGWAN: {
      name: "Pencabar (偏官)",
      body: "Seseorang yang membuat anda sentiasa berjaga. Tarikannya kuat dan sukar dialihkan pandangan, tetapi kedekatan yang berpanjangan boleh mula terasa seperti tekanan.",
    },
    JEONGGWAN: {
      name: "Kewibawaan (正官)",
      body: "Secara tradisi, kedudukan pasangan bagi wanita. Mereka meluruskan anda, dan membawa tertib serta ketenangan kepada hubungan.",
    },
    PYEONIN: {
      name: "Sokongan Luar Biasa (偏印)",
      body: "Seseorang yang membantu anda dengan cara yang tidak biasa. Ada saat-saat yang benar-benar mendalam, walaupun mengambil masa untuk memahami cara masing-masing.",
    },
    JEONGIN: {
      name: "Pengasuhan (正印)",
      body: "Seseorang yang memangku dan menjaga anda. Anda ingin bersandar, dan hati anda tenang. Namun jika sandaran itu hanya sehala, hubungan menjadi berat sebelah.",
    },
  },
  dayMasters: {
    甲: { name: "Kayu Yang (甲)", trait: "Pokok tinggi yang tumbuh lurus. Sekali arahnya ditetapkan ia tidak goyah, dan ia lebih rela bertahan daripada tunduk." },
    乙: { name: "Kayu Yin (乙)", trait: "Pokok menjalar — rumput yang lentur. Ia melentur mengikut keadaan untuk terus bergerak, dan ia tidak patah." },
    丙: { name: "Api Yang (丙)", trait: "Matahari tengah hari. Perasaan terpampang jelas, ruang menjadi terang, dan melangkah ke hadapan datang secara semula jadi." },
    丁: { name: "Api Yin (丁)", trait: "Cahaya lilin. Ia menyala perlahan dan lama, serta menghangatkan yang terdekat dahulu." },
    戊: { name: "Tanah Yang (戊)", trait: "Tanah lapang dan gunung. Sukar digoyah dan mudah disandari, walaupun lambat mengubah keputusan yang sudah dibuat." },
    己: { name: "Tanah Yin (己)", trait: "Tanah ladang. Ia menerima apa sahaja yang datang dan membesarkannya, memelihara dan bukan mempamerkan." },
    庚: { name: "Logam Yang (庚)", trait: "Besi yang belum ditempa. Tegas dan jelas, dengan sedikit sahaja kesabaran terhadap perkara yang tergantung." },
    辛: { name: "Logam Yin (辛)", trait: "Permata yang telah diasah. Cita rasa halus dan piawaian tinggi; kerja sambil lewa sukar dibiarkan." },
    壬: { name: "Air Yang (壬)", trait: "Sungai dan laut. Luas pandangannya, dengan mata yang membaca ke mana sesuatu mengalir." },
    癸: { name: "Air Yin (癸)", trait: "Embun dan hujan. Ia meresap senyap dan membaca suasana sebelum kata-kata." },
  },
  dayMasterSigns: {
    甲: [
      "Menyatakan fikirannya walaupun pada pertemuan pertama.",
      "Jarang mengubah rancangan atau janji yang sudah ditetapkan.",
      "Menolak dengan terus terang, yang boleh kedengaran kasar.",
    ],
    乙: [
      "Mengelak pertembungan dan mengambil jalan lain.",
      "Kelihatan lembut, namun akhirnya sampai juga ke tempat yang diniatkan.",
      "Membaca suasana dahulu sebelum menyertai kumpulan.",
    ],
    丙: [
      "Menegur dahulu orang yang baru dikenali.",
      "Suka dan tidak sukanya terpampang pada wajah.",
      "Berakhir di tengah-tengah majlis tanpa cuba pun.",
    ],
    丁: [
      "Diam pada mulanya, penuh perhatian setelah rapat.",
      "Lebih suka berbual panjang dengan seorang dua berbanding orang ramai.",
      "Mengingati kata-kata yang terlepas sepintas lalu dan menyebutnya kemudian.",
    ],
    戊: [
      "Sedikit bercakap; suaranya jarang meninggi walaupun keadaan mendesak.",
      "Orang yang menyelesaikannya di penghujung sementara yang lain menangguhkan keputusan.",
      "Kata tidak, sekali diberi, kekal tidak untuk masa yang lama.",
    ],
    己: [
      "Mendengar lebih lama daripada bercakap.",
      "Sukar menolak permintaan, jadi kerja bertimbun kepadanya.",
      "Apa yang diuruskannya diam-diam hanya terserlah kemudian.",
    ],
    庚: [
      "Membuat keputusan dengan pantas dan menyatakannya di situ juga.",
      "Tidak melembutkan kata, yang boleh dibaca sebagai dingin.",
      "Jelas kelihatan resah apabila sesuatu berlarutan.",
    ],
    辛: [
      "Mempunyai piawaian yang jelas tentang pakaian dan barang yang dipilihnya.",
      "Tidak boleh membiarkan kerja yang separuh siap tanpa menegurnya.",
      "Kedekut pujian, tetapi pasti sekali dia bersungguh.",
    ],
    壬: [
      "Mudah bergaul dengan pelbagai jenis orang.",
      "Membangkitkan hal kemudian sebelum hal yang di depan mata.",
      "Rimas apabila terikat lama di satu tempat.",
    ],
    癸: [
      "Sedikit bercakap tetapi membaca keadaan dengan tepat.",
      "Paling awal perasan apabila suasana berubah.",
      "Menyimpan hati kecilnya rapat, jadi mengambil masa untuk mengenalinya.",
    ],
  },
  animalTraits: {
    rat: "Cepat perasan dan cepat mengamankan apa yang penting. Paling awal bergerak ketika krisis.",
    ox: "Nampak perlahan tetapi menyelesaikannya sampai habis. Apa yang dipikul, tidak dilepaskan.",
    tiger: "Berani dan berada di hadapan. Tidak boleh membiarkan ketidakadilan berlalu.",
    rabbit: "Lembut dan tajam pengamatannya. Tahu berpusing daripada berlanggar.",
    dragon: "Besar hati dengan cita-cita tinggi. Jarang berpuas hati dengan yang biasa.",
    snake: "Menyimpan pandangannya sendiri dan berfikir mendalam. Pertimbangannya tepat.",
    horse: "Ceria dan tidak boleh diam. Dikurung ialah perkara yang paling sukar.",
    goat: "Hangat dan bertimbang rasa. Menyimpan kata-kata kasar untuk masa yang lama.",
    monkey: "Banyak akal dan cepat menyesuaikan diri. Bosan dengan perkara yang berulang.",
    rooster: "Rajin dan teliti. Tidak boleh membiarkan sesuatu tidak kena pada tempatnya.",
    dog: "Setia hingga ke akhir sebaik kepercayaan diberi. Pengkhianatan melukakan paling dalam.",
    pig: "Murah hati dan berterus terang. Mudah percaya, kadangkala dengan harga yang mahal.",
  },
  affinity: {
    menu: "Profil padanan anda",
    formTitle: "Orang seperti apa yang sesuai dengan anda",
    formDescription:
      "Satu tarikh lahir sudah memadai. Anda boleh membacanya tanpa mengetahui hari lahir sesiapa — atau tanpa ada sesiapa dalam fikiran lagi.",
    meLegend: "Anda",
    genderHint:
      "Saju tradisional membaca kedudukan pasangan secara berbeza mengikut jantina. Biarkan ia kosong dan faktor itu digugurkan, bukan diteka.",
    seekingLabel: "Mencari",
    seekingHint:
      "Kedudukan pasangan (Jeongjae / Jeonggwan) hanya boleh ditentukan apabila kedua-dua jantina diketahui.",
    seekingAny: "Tidak dinyatakan",
    submit: "Tonton iklan untuk melihat keputusan profil pertemuan",
    submitNoAd: "Lihat keputusan profil pertemuan",
    submitting: "Membaca…",

    resultTitle: "Profil padanan anda",
    intro:
      "Inilah corak orang yang carta anda condong kepadanya. **Anda boleh mengenali jenis-jenis ini melalui perangai,** jauh sebelum anda mengetahui tarikh lahirnya.",
    scoreCaption:
      "Ini skor setiap faktor yang sama seperti digunakan oleh enjin keserasian — bukan kadar padanan yang telah digabungkan.",
    meTitle: "Kedudukan anda",
    meBody: "Anda ialah {dayMaster}, dan kini anda tergolong sebagai {strength}.",
    meHint:
      "Saju menulis tahun, bulan, hari dan jam kelahiran anda sebagai lapan aksara. **Aksara pertama pada hari kelahiran mewakili diri anda** — ia dipanggil batang hari. Setiap jenis di bawah disusun mengikut satu aksara itu.",
    bestTitle: "Corak yang sesuai dengan anda",
    bestHint:
      "Ini ialah batang hari orang itu — **tenaga hari mereka dilahirkan** — dibahagikan kepada sepuluh jenis, dan tiga ini bertaut dengan milik anda. Anda selalunya boleh menekanya daripada tingkah laku di bawah, jauh sebelum mengetahui tarikh lahirnya.",
    signsTitle: "Bagaimana ia terserlah",
    avoidTitle: "Corak yang memerlukan usaha",
    avoidHint:
      "Bukan amaran. Ia bermakna keselesaan itu datang kemudian, setelah anda berdua meluangkan masa.",
    bondLabel: "Tautan perangai",
    spouseLabel: "Kedudukan pasangan",
    spouseSkipped: "Jantina dibiarkan kosong, jadi faktor ini digugurkan",
    scoreHelp:
      "**Tautan perangai** — bagaimana tenaga dua hari kelahiran anda saling mengunci. Pasangan yang tolak-menolak pun mendapat skor tertinggi apabila yin dan yang bersilang.\n**Kedudukan pasangan** — Saju tradisional mengkhaskan satu kedudukan untuk pasangan: Jeongjae bagi lelaki, Jeonggwan bagi wanita. Kami menyemaknya **dua hala** — sama ada mereka memegang kedudukan itu bagi anda, dan sama ada anda memegangnya bagi mereka. Kedua-duanya sekali gus ialah pasangan yang dinilai paling tinggi dalam tradisi.",
    typeHeading: "Seseorang seperti {name}",
    needTitle: "Apa yang kurang pada anda kini",
    needBody:
      "Jika {elements} kuat pada mereka, ia mengisi tempat yang tipis pada anda.",
    needHint:
      "Anda tidak boleh membaca lima unsur seseorang dengan sekali pandang. Tetapi sebaik anda tahu tarikh lahirnya, lihat di sini dahulu.",
    zodiacTitle: "Zodiak, sebagai nota sampingan",
    zodiacHint:
      "Zodiak hanya memerlukan tahun lahir, jadi ia perkara yang paling pantas disemak. Ia juga hanya satu daripada empat tiang — anggaplah ia sebagai petunjuk.",
    zodiacGood: "Zodiak yang sesuai dengan anda",
    zodiacHard: "Zodiak yang bergeser",
    tableType: "Jenis",
    tableSign: "Zodiak",
    tableYears: "Tahun kelahiran",
    bornYear: "lahir {year}",
    younger: "{n} tahun lebih muda",
    older: "{n} tahun lebih tua",
    sameAge: "sebaya",
    zodiacYearsCaution:
      "Dalam Saju tahun bertukar pada Ipchun (sekitar 4 Februari), bukan pada 1 Januari. **Sesiapa yang lahir pada Januari atau awal Februari tergolong dalam zodiak tahun sebelumnya**, jadi semak tahun di kedua-dua belah bagi tarikh lahir tersebut.",
    dayBranchTitle: "Adakah orang ini sesuai dengan saya?",
    dayBranchBody:
      "Satu tarikh lahir sudah memadai untuk menyemak sama ada seseorang itu sesuai dengan anda.\nUntuk bacaan penuh, gunakan keserasian Saju di bahagian bawah halaman ini.",
    check: {
      button: "Semak hari lahir seseorang",
      title: "Corak apakah orang ini?",
      body: "Masukkan tarikh lahir dan kami akan memberitahu yang mana antara sepuluh jenis di atas dia tergolong. Tiada skor keserasian dikira.",
      submit: "Semak",
      checking: "Menyemak…",
      rank: "kedudukan ke-{rank} anda",
      heading: "Orang ini ialah {name}",
      caution:
        "Ini membaca hari kelahiran sahaja. **Jika dia lahir sekitar tengah malam** harinya boleh jatuh ke mana-mana belah, dan hari lahir pada Januari atau awal Februari tergolong dalam zodiak tahun sebelumnya.",
      close: "Tutup",
      another: "Semak orang lain",
      error: "Sila semak tarikh itu — ia tidak wujud atau di luar julat.",
    },
    nextTitle: "Ada seseorang dalam fikiran?",
    nextBody:
      "Masukkan kedua-dua tarikh lahir dan anda mendapat kadar padanan yang sebenar, dengan setiap faktor di atas dijumlahkan.",
    nextButton: "Lihat keserasian Saju",
    recalculate: "Baca semula",
    copyLink: "Salin pautan keputusan",
    copied: "Disalin",
    missingInput: "Kami tidak dapat membaca keputusan itu. Sila mula semula.",
    partialTime:
      "Waktu lahir tidak diberikan, jadi tiang jam ditinggalkan. Menambahnya menajamkan bacaan tentang apa yang kurang pada anda.",
    disclaimer:
      "Rujukan daripada perspektif Saju tradisional. Ia tidak menyuruh anda mencari atau menjauhi mana-mana orang tertentu.",
  },
  result: {
    title: "Keputusan keserasian",
    totalLabel: "Kadar padanan",
    breakdown: "Skor mengikut faktor",
    recalculate: "Mula semula",
    copyLink: "Salin pautan keputusan",
    copied: "Disalin",
    missingInput: "Keputusan ini tidak dapat dibaca. Sila masukkan semula tarikhnya.",
    partialTime:
      "Waktu lahir tidak diberikan, jadi tiang jam ditinggalkan. Menambahnya menjadikan bacaan lebih tepat.",
    engineVersion: "Dikira dengan",
    disclaimer:
      "Ini bacaan Saju tradisional yang ditawarkan sebagai rujukan. Ia bukan ramalan saintifik atau penghakiman terhadap mana-mana hubungan.",
  },
  ads: { label: "Iklan" },
  selfAds: {
    label: "Perkhidmatan berkaitan",
    comingSoon: "Akan datang",
    purposes: {
      naminglink: "Nama Korea dan hanja yang dipilih berdasarkan makna dan jumlah strok",
      inyeonlink: "Bagaimana dua orang sesuai, dibaca dari empat tiang dan tanda zodiak mereka",
      sajulink: "Empat tiang anda sendiri, dan bagaimana hari ini bertemu dengan mereka",
      dreamslink: "Bacaan mimpi yang diambil dari kamus simbol",
      placelink: "Tempat untuk pergi berkencan di Korea, dikongsi dan disyorkan",
    },
  },
  analyzing: {
    title: "Sedang membaca kedua-dua carta",
    quotes: [
      "Anda bukan sekadar bertemu orang yang tepat — anda mengenalinya.",
      "Padanan yang baik bukan yang tidak pernah bertengkar — ia yang kembali selepas bertengkar.",
      "Saju bukan jawapan yang tetap. Ia satu bahasa untuk memahami satu sama lain.",
      "Ada pasangan yang mudah kerana anda serupa; ada yang mengajar anda kerana anda berbeza.",
      "Hubungan yang bertahan biasanya hubungan yang tidak membiarkan apa-apa lama tidak terkata.",
      "Jika caranya terasa asing, ia bermakna dia memiliki sesuatu yang anda tiada.",
      "Keserasian ialah separuh apa yang dibawa sejak lahir dan separuh apa yang anda bina.",
      "Hubungan bertahan apabila bersandar dan memberi datang berganti-ganti.",
      "Yang lebih penting daripada skor ialah bagaimana anda membacanya.",
      "Jika musim anda berbeza, beritahu satu sama lain bagaimana rupa musim masing-masing.",
    ],
    watching: "Sedang menonton iklan",
    remaining: "Keputusan anda terbuka dalam {seconds}s",
  },
  report: {
    title: "Simpan bacaan ini sebagai PDF",
    body:
      "Kami menjadikan keputusan ini PDF 7 halaman. **Empat daripadanya tiada pada skrin** — ke arah mana tenaga mengalir, melihat carta masing-masing dengan lebih teliti, tempat empat tiang bertemu, dan cara pengiraannya.",
    buyButton: "Bayar {price} dan muat turun",
    preparing: "Belum tersedia",
    ordering: "Membuat pesanan anda…",
    paying: "Memproses pembayaran…",
    issuing: "Menyediakan laporan anda…",
    done: "Telah dimuat turun. Gunakan butang di bawah untuk memuat turunnya semula.",
    failed: "Pembayaran atau muat turun gagal. Sila cuba lagi sebentar nanti.",
    retry: "Muat turun semula",
    contents: [
      "Halaman 1 — kadar padanan, kelebihan pasangan ini dan perkara yang perlu diperhatikan",
      "Halaman 2 — bentuk hubungan, sepuluh dewa, dan skor mengikut faktor",
      "Halaman 3 — kedua-dua carta dan kekuatan unsur",
          "Halaman 4 — ke arah mana tenaga mengalir dan tempat empat tiang bertemu",
      "Halaman 5 — melihat carta masing-masing dengan lebih teliti (apa yang ditolak oleh musim)",
      "Halaman 6 — apa erti setiap tiangnya bagi anda",
      "Halaman 7 — begini carta-carta ini dikira",
    ],
    consentLabel:
      "Saya faham bahawa ini kandungan digital yang dihantar serta-merta selepas pembayaran, dan bahawa **penarikan diri kerana berubah fikiran adalah terhad sebaik muat turun selesai**.",
    consentRequired: "Sila sahkan terma penarikan diri sebelum membuat pembayaran.",
    productInfoTitle: "Maklumat produk",
    productInfo: [
      ["Pembekal", "{brand}"],
      ["Format", "Satu dokumen PDF (7 halaman), dimuat turun pada skrin sejurus selepas pembayaran."],
      ["Keperluan", "Sebarang peranti yang boleh membuka PDF. Tiada pemasangan atau akaun diperlukan."],
      ["Tempoh penggunaan", "Tiada had. Fail yang anda muat turun kekal milik anda."],
      ["Muat turun semula", "Sehingga lima kali bagi pesanan yang sama. Kami tidak menyimpan salinan, jadi ia tidak boleh dihasilkan semula setelah anda meninggalkan skrin keputusan."],
      ["Penarikan diri", "Bayaran balik penuh sebelum muat turun bermula. Selepas ia selesai, penarikan diri kerana berubah fikiran adalah terhad (Perkara 17(2), Akta E-Dagang Korea)."],
      ["Kos pertukaran dan pemulangan", "Tiada — kandungan digital, tiada apa-apa yang dihantar."],
    ],
    refundContact:
      "Untuk bayaran balik atau pertanyaan, hubungi khidmat pelanggan atau e-mel di bawah. Jika dokumen itu tidak dapat dihasilkan, atau jumlah yang dicaj berbeza daripada pesanan, kami memulangkan wang sepenuhnya.",
    pdfLanguageNotice:
      "PDF dihasilkan dalam bahasa yang sama dengan skrin ini.",
  },
  affinityReport: {
    title: "Simpan profil padanan anda sebagai PDF",
    body: "Kami menukar bacaan ini menjadi PDF empat halaman. Ia termasuk **kedudukan penuh yang tidak dipaparkan pada skrin** — skrin memberi anda tiga teratas, PDF membawa kesemua sepuluh jenis dan kesemua dua belas zodiak.",
    buyButton: "Bayar {price} dan muat turun",
    preparing: "Sedang disediakan",
    ordering: "Membuat pesanan…",
    paying: "Memproses pembayaran…",
    issuing: "Membina laporan anda…",
    done: "Telah dimuat turun. Gunakan butang di bawah untuk mendapatkannya semula.",
    failed: "Pembayaran atau muat turun tidak berjaya. Sila cuba lagi sebentar lagi.",
    retry: "Muat turun semula",
    contents: [
      "Halaman 1 — Kedudukan anda dan apa yang kurang pada anda",
      "Halaman 2 — Tiga corak yang sesuai dengan anda, dengan petunjuk tingkah laku",
      "Halaman 3 — Corak yang memerlukan usaha, serta kedudukan penuh sepuluh batang hari",
      "Halaman 4 — Kedudukan penuh kesemua dua belas zodiak, dengan tahun kelahiran",
    ],
    consentLabel:
      "Ini kandungan digital yang dihantar serta-merta selepas pembayaran. Saya faham bahawa **sebaik muat turun selesai, hak untuk menarik diri kerana berubah fikiran adalah terhad.**",
    consentRequired: "Sila bersetuju dengan terma penarikan diri sebelum membuat pembayaran.",
    productInfoTitle: "Maklumat produk",
    productInfo: [
      ["Pembekal", "{brand}"],
      ["Format", "Satu dokumen PDF (4 halaman), dimuat turun pada skrin ini sejurus selepas pembayaran."],
      ["Keperluan", "Sebarang peranti yang boleh membuka PDF. Tiada pemasangan, tiada akaun."],
      ["Ketersediaan", "Tiada had masa. Fail yang dimuat turun kekal milik anda."],
      ["Muat turun semula", "Sehingga 5 kali bagi pesanan yang sama. Kami tidak menyimpan fail itu, jadi ia tidak boleh dibina semula setelah anda meninggalkan skrin ini."],
      ["Penarikan diri", "Bayaran balik penuh sebelum muat turun selesai. Selepas ia selesai, penarikan diri kerana berubah fikiran adalah terhad."],
      ["Kos pertukaran dan pemulangan", "Tiada. Tiada apa-apa yang perlu dihantar."],
    ],
    refundContact:
      "Untuk bayaran balik atau pertanyaan, hubungi meja sokongan atau e-mel di bawah. Jika dokumen itu tidak pernah dihasilkan, atau jumlah yang dicaj berbeza daripada pesanan, kami memulangkan wang sepenuhnya.",
    pdfLanguageNotice:
      "PDF dihasilkan dalam bahasa yang sama dengan skrin ini.",
  },
  reportDetail: {
    supplyTitle: "Ke arah mana tenaga mengalir",
    supplyHint: "Skor Lima Unsur ialah purata dua arah. Purata menyembunyikan siapa membekal kepada siapa. Di sini kami mengasingkannya — ada pasangan yang hanya sebelah pihak dibekalkan dengan baik.",
    supplyReceiveLabel: "Sebanyak mana {name} dibekalkan",
    needsLabel: "Apa yang diperlukan kini",
    bondTitle: "Ikatan antara dua Tuan Hari",
    depthTitle: "Melihat carta masing-masing dengan lebih teliti",
    vitalityTitle: "Apa yang ditolak oleh musim",
    vitalityHint: "Palang menunjukkan berapa banyak setiap unsur ada. Jadual ini menunjukkan sama ada bulan kelahiran menolaknya ke hadapan. Jumlah yang sama bertindak lain di Wang berbanding di Sa.",
    vitalities: {
      WANG: { name: "Wang (旺)", body: "pada kemuncaknya" },
      SANG: { name: "Sang (相)", body: "seterusnya meningkat" },
      HYU: { name: "Hyu (休)", body: "berehat selepas gilirannya" },
      SU: { name: "Su (囚)", body: "terkurung, sukar bergerak" },
      SA: { name: "Sa (死)", body: "pada tahap paling lemah" },
    },
    seasonBoostTitle: "Sebanyak mana bulan mengangkatnya",
    rawLabel: "Sebelum bulan",
    strengthLabel: "Selepas bulan",
    earthSeasonNote: "Lahir pada bulan peralihan (辰未戌丑), maka Tanah turut dianggap memuncak.",
    allyRatioLabel: "Bahagian pihak Tuan Hari",
    allyRatioHint: "Sumber campur Setara, berbanding keseluruhan. Melebihi 45% dianggap kuat, di bawah 35% lemah. Kami cetak angkanya supaya anda nampak di mana keputusan itu jatuh.",
    pillarsTitle: "Tempat empat tiang bertemu",
    pillarsHint: "Hanya cabang Hari masuk ke kadar keserasian — itulah tempat pasangan. Tiga tiang lain boleh dibaca dengan jadual yang sama, jadi kami sertakan.",
    branchRelations: {
      SAMHAP: "Harmoni tiga",
      BANHAP: "Separuh harmoni",
      YUKHAP: "Harmoni enam",
      SAME: "Cabang sama",
      NEUTRAL: "Tiada hubungan",
      WONJIN: "Dendam terpendam",
      CHUNG: "Pertembungan",
    },
    pillarColumn: "Tiang",
    relationColumn: "Hubungan",
    relationScoreColumn: "Markah",
    tenGodColumn: "Sepuluh Dewa",
    stemGodsTitle: "Apa erti setiap tiangnya bagi anda",
    stemGodsHint: "Kadar keserasian hanya membandingkan Tuan Hari. Peraturan yang sama menetapkan Dewa bagi tiang-tiangnya yang lain — kelihatan bahagian mana orang itu bererti apa bagi anda.",
    seesLabel: "Dilihat oleh {from}",
    notScoredNote: "Markah dalam jadual ini tidak termasuk dalam kadar keserasian. Ia dicetak supaya anda boleh membandingkan kekuatannya.",
    appendixTitle: "Begini carta ini dikira",
    timeCorrectionLabel: "Waktu lahir",
    timeCorrectionApplied: "Dibetulkan kepada waktu matahari benar dan dibaca sebagai {time}.",
    timeCorrectionNone: "Waktu lahir tidak diberikan, jadi tiang Jam ditinggalkan.",
    timeCorrectionDateShift: "Pembetulan memindahkan tarikh ke {date}; tiang Hari diambil daripada hari itu.",
    calendarLabel: "Tarikh yang digunakan untuk menyusun carta",
    solarLabel: "Masihi",
    lunarLabel: "Qamari",
    lunarUnavailable: "Hari ini tiada dalam jadual almanak, jadi tarikh qamari tidak dapat dicetak.",
  },
  footer: {
    privacy: "Privasi",
    terms: "Terma",
    refund: "Bayaran balik",
    pricing: "Harga",
    legalEntity: "Syarikat",
    representative: "Wakil",
    businessNumber: "Pendaftaran",
    mailOrderNumber: "Jualan online",
    address: "Alamat",
    customerCenter: "Khidmat pelanggan",
    email: "Email",
    privacyOfficer: "Pegawai privasi",
    hostingProvider: "Hosting",
    providedBy: "Disediakan oleh",
    effective: "Berkuat kuasa",
    backHome: "Kembali ke laman utama",
  },
  bands: {
    EXCELLENT: "Padanan yang luar biasa",
    GOOD: "Padanan yang kukuh",
    FAIR: "Padanan yang memadai",
    CHALLENGING: "Padanan yang memerlukan usaha",
  },
  engines: {
    saju: {
      name: "Keserasian Saju",
      description:
        "Membaca unsur tuan hari, keseimbangan unsur dan cabang hari secara bersama.",
    },
    zodiac: {
      name: "Keserasian zodiak",
      description: "Membaca hubungan antara dua cabang tahun kelahiran.",
    },
  },
  factors: {
    dayMasterRelation: "Unsur tuan hari",
    spouseStar: "Bintang pasangan",
    elementSupply: "Bekalan unsur",
    dayBranchRelation: "Cabang hari",
    branchRelation: "Zodiak",
  },
  notes: {
    "strength.dayMasterRelation":
      "Perangai anda berdua berada pada kedudukan yang saling melayani. Walaupun cara yang seorang lagi terasa asing, ia cenderung membekalkan apa yang anda kurang.",
    "strength.spouseStar":
      "Anda masing-masing membawa unsur yang secara tradisi dibaca sebagai kedudukan pasangan. Jika keadaan terasa mudah sejak awal tanpa sebab yang jelas, inilah kemungkinan besar puncanya.",
    "strength.elementSupply":
      "Anda masing-masing memegang apa yang diperlukan oleh yang seorang lagi buat masa ini. Perkara yang sukar digerakkan seorang diri cenderung menjadi lebih mudah apabila bersama.",
    "strength.dayBranchRelation":
      "Cabang hari secara tradisi dibaca sebagai kerusi pasangan. Milik anda berdua duduk elok bersama, yang biasanya menjadikan masa bersama terasa selesa.",
    "strength.branchRelation":
      "Zodiak anda berdua duduk elok bersama — pasangan yang kelihatan semula jadi dari luar dan mudah dibaca pada pertemuan pertama.",
    "caution.dayMasterRelation":
      "Di sinilah perangai bergeser. Berhadapan dengan tugas yang sama, rentak dan cara anda berbeza, yang mudah disalah tafsir sebagai sengaja. Sepakat tentang prosesnya dahulu sebelum kesimpulannya.",
    "caution.spouseStar":
      "Tiada antara anda berdua membawa unsur yang tradisi sebut sebagai kedudukan pasangan bagi yang seorang lagi. Tarikannya mungkin tidak serta-merta; ini pasangan yang terkumpul dari masa ke masa.",
    "caution.elementSupply":
      "Apa yang diperlukan oleh setiap seorang juga tipis pada yang seorang lagi. Apa yang anda berdua pandai, anda sangat pandai — tetapi tempat yang kedua-duanya kurang kekal tidak terisi. Lebih baik mendapatkannya dari luar hubungan ini.",
    "caution.dayBranchRelation":
      "Geseran berkemungkinan berlaku pada kedudukan kehidupan bersama. Biasanya ia muncul dalam tabiat kecil dan bukan perkara besar, jadi menetapkan beberapa peraturan asas lebih awal amat membantu.",
    "caution.branchRelation":
      "Zodiak anda berdua duduk bertentangan. Anda melihat sesuatu secara berbeza, yang menimbulkan geseran — dan juga bermakna banyak yang boleh dipelajari daripada satu sama lain.",

    "spouseStar.MUTUAL":
      "Anda masing-masing berada tepat pada kedudukan pasangan bagi yang seorang lagi — pasangan yang dinilai paling tinggi dalam Saju tradisional.",
    "spouseStar.STRONG":
      "Seorang daripada anda berada tepat pada kedudukan pasangan dan yang seorang lagi hampir kepadanya. Besar kecilnya rasa masing-masing terhadap yang lain mungkin sedikit berbeza.",
    "spouseStar.PARTIAL":
      "Hanya seorang daripada anda berada pada kedudukan pasangan bagi yang seorang lagi. Tarikan awal cenderung sehala, jadi eloklah tidak menangguhkan untuk menyatakannya.",
    "spouseStar.SLIGHT":
      "Seorang daripada anda berada bersebelahan dengan kedudukan pasangan. Ini terkumpul melalui masa yang dilalui bersama dan bukan tiba sebagai tarikan serta-merta.",
    "spouseStar.NONE":
      "Tiada antara anda berdua menduduki apa yang tradisi sebut sebagai kedudukan pasangan. Pasangan ini dibina melalui kehidupan berdampingan dan bukan melalui tarikan.",
    "dayMaster.CLASH_BONDED":
      "{elementA} dan {elementB} saling mengekang, tetapi dengan kutub yang bertentangan. Tradisi membaca ini sebagai pasangan suami isteri — geserannya cenderung bertukar menjadi ikatan kasih.",
    "dayMaster.CLASH_HARSH":
      "{elementA} dan {elementB} saling mengekang dengan kutub yang sama. Cetusannya kuat, dan begitu juga beban yang diletakkan masing-masing pada yang lain.",
    "dayMaster.FLOW_GUARDED":
      "Seorang daripada anda mengeluarkan tenaga dan yang seorang lagi menahannya. Dorongan yang lebih tajam dilembutkan oleh yang seorang lagi — apa yang tradisi sebut sebagai pasangan berpengawal.",
    "dayMaster.FLOW_BLOCKED":
      "Seorang daripada anda mengeluarkan tenaga dan yang seorang lagi menariknya pergi. Pihak yang memberi mudah letih di sini, jadi eloklah menyatakan dengan jelas apa yang masing-masing beri dan ambil.",
    "dayMaster.PEER_EVEN":
      "Kedua-duanya membawa tenaga {elementA} dengan kutub yang sama. Itu menjadikan keadaan rata dan mudah, tetapi tiada siapa yang mendorong yang lain ke hadapan.",
    "dayMaster.PEER_RIVAL":
      "Kedua-duanya membawa tenaga {elementA} dengan kutub yang bertentangan. Tarikannya pantas, tetapi anda bersaing untuk ruang yang sama.",
    "supply.AMPLE":
      "Anda masing-masing memegang banyak daripada apa yang diperlukan oleh yang seorang lagi. Orang pertama memerlukan {needA} dan yang kedua memerlukan {needB} — dan pihak yang satu lagi membekalkannya.",
    "supply.ENOUGH":
      "Anda masing-masing memegang bahagian yang munasabah daripada apa yang diperlukan oleh yang seorang lagi: {needA} untuk orang pertama, {needB} untuk yang kedua.",
    "supply.THIN":
      "Apa yang diperlukan oleh setiap seorang — {needA} untuk orang pertama, {needB} untuk yang kedua — tipis pada yang seorang lagi.",
    "supply.SCARCE":
      "Tiada antara anda berdua dapat membekalkan dengan mudah apa yang diperlukan oleh yang seorang lagi: {needA} untuk orang pertama, {needB} untuk yang kedua, dan kedua-dua tempat itu kosong. Lebih baik mendapatkannya dari luar hubungan ini.",
    "dayBranch.SAMHAP":
      "Cabang hari membentuk harmoni tiga — pasangan yang paling kuat pada kedudukan pasangan.",
    "dayBranch.BANHAP":
      "Cabang hari membentuk harmoni separa di sekitar tunjang harmoni tiga. Pasangan yang amat sesuai pada kedudukan pasangan.",
    "dayBranch.YUKHAP": "Cabang hari membentuk harmoni enam. Anda saling menarik satu sama lain.",
    "dayBranch.SAME":
      "Cabang hari adalah sama. Itu menjadikan keadaan mudah, tetapi meninggalkan sedikit sahaja kebaharuan.",
    "dayBranch.NEUTRAL": "Cabang hari tidak mempunyai hubungan yang tertentu.",
    "dayBranch.WONJIN":
      "Cabang hari duduk dalam dendam senyap. Sedikit sahaja yang meletus secara terbuka, tetapi rasa tidak puas hati yang sukar dinamakan cenderung terkumpul — lebih baik dikatakan pada waktunya daripada dibiarkan berlalu.",
    "dayBranch.CHUNG":
      "Cabang hari bertembung. Kedudukan ini terdedah kepada geseran, jadi cara anda berbicara antara satu sama lain amat penting.",
    "zodiac.SAMHAP":
      "{animalA} dan {animalB} membentuk harmoni tiga — pasangan zodiak yang terbaik.",
    "zodiac.BANHAP":
      "{animalA} dan {animalB} membentuk harmoni separa di sekitar tunjang harmoni tiga, jadi anda sesuai antara satu sama lain.",
    "zodiac.YUKHAP": "{animalA} dan {animalB} membentuk harmoni enam. Anda amat sesuai antara satu sama lain.",
    "zodiac.SAME": "Anda berdua lahir dalam tahun {animalA}, jadi perangai anda bergema.",
    "zodiac.NEUTRAL": "{animalA} dan {animalB} tidak mempunyai hubungan yang tertentu.",
    "zodiac.WONJIN":
      "{animalA} dan {animalB} duduk dalam dendam senyap — jarang menjadi pertengkaran terbuka, tetapi ketidakserasian halus yang cenderung berpanjangan.",
    "zodiac.CHUNG":
      "{animalA} dan {animalB} bertembung. Anda amat berbeza, yang juga bermakna banyak yang boleh dipelajari.",
  },
  animals: {
    rat: "Tikus",
    ox: "Lembu",
    tiger: "Harimau",
    rabbit: "Arnab",
    dragon: "Naga",
    snake: "Ular",
    horse: "Kuda",
    goat: "Kambing",
    monkey: "Monyet",
    rooster: "Ayam Jantan",
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
