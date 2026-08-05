// 사주링크 화면 사전의 Malay (Bahasa Melayu)(ms) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **인연링크에서 물려받은 옛 번역을 되살린 것이 아니다.** 그 파일들은 궁합 서비스의 UI라,
// 되살리면 사주 화면에 궁합·인연이 다시 들어온다. 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const ms: Dictionary = {
  "brand": "SajuLink",
  "tagline": "Empat Tiang Anda, dibaca dari tarikh lahir",
  "currentLanguage": "Bahasa semasa",
  "moreLanguages": "Lagi",
  "closeLanguages": "Tutup",
  "landing": {
    "title": "Lapan watak\nyang anda dilahirkan",
    "subtitle": "Apa yang anda perlukan hanyalah tarikh lahir.\nKami membina carta Saju (Empat Tiang) anda, menimbang lima elemen dan membaca kekuatan day master anda.",
    "cta": "Lihat Saju saya",
    "howTitle": "Cara ia dikira",
    "steps": [
      "Masukkan tarikh lahir anda. Waktu lahir adalah pilihan.",
      "Tahun, bulan, hari dan jam kelahiran anda menjadi lapan watak — carta natal anda. Dari situ kami membaca berat setiap elemen dan kekuatan day master anda.",
      "Tiang hari ini diletakkan berbanding carta itu untuk memberikan anda fortune hari ini juga."
    ],
    "privacyTitle": "Apa-apa yang anda masukkan tidak disimpan",
    "privacyBody": "Tarikh lahir digunakan hanya semasa keputusan sedang dikira dan tidak pernah direkodkan. Tiada akaun diperlukan. Apa-apa yang dibawa dalam pautan keputusan tidak dihantar ke pelayan.",
    "disclaimer": "Ini adalah bacaan Saju tradisional yang ditawarkan untuk rujukan. Ia bukan ramalan saintifik atau keputusan mengenai masa depan sesiapa."
  },
  "form": {
    "title": "Tarikh lahir anda",
    "description": "Mengetahui waktu lahir menjadikan bacaan lebih tajam, tetapi ia tidak diwajibkan.",
    "meLegend": "Tentang anda",
    "nickname": "Panggilan",
    "nicknamePlaceholder": "cth. Saya",
    "nicknameHint": "Dipaparkan pada skrin keputusan sahaja. Ia tidak digunakan dalam pengiraan.",
    "gender": "Jantina",
    "male": "Lelaki",
    "female": "Perempuan",
    "genderUnspecified": "Tidak mahu nyatakan",
    "genderHint": "Saju tradisional membaca posisi pasangan dan anak dengan cara yang berbeza mengikut jantina. Jika anda tidak mengisi ini, faktor-faktor tersebut akan dikecualikan daripada pengiraan.",
    "birthplace": "Tempat lahir",
    "birthplaceHint": "Tiang jam dikira berdasarkan waktu solar sebenar di tempat lahir anda. Jika tempat lahir anda tidak disenaraikan, pilih bandar terdekat.\nDi dalam tanah besar Korea, perbezaan antara bandar adalah kurang dari dua minit. Waktu penjimatan siang dan perubahan zon waktu sejarah juga diambil kira.",
    "calendar": "Kalendar",
    "solar": "Suria",
    "lunar": "Lunar",
    "leapMonth": "Bulan lompat",
    "birthDate": "Tarikh lahir",
    "year": "Tahun",
    "month": "Bulan",
    "day": "Hari",
    "birthTime": "Waktu lahir",
    "unknownTime": "Saya tidak tahu waktunya",
    "hour": "Jam",
    "minute": "Minit",
    "submit": "Tonton iklan dan lihat Saju saya",
    "submitNoAd": "Lihat Saju saya",
    "submitting": "Mengira…",
    "errorInvalidDate": "Sila semak tarikh lahir. Bagi tarikh lunar, semak juga sama ada ia jatuh pada bulan lompat.",
    "errorGeneric": "Pengiraan gagal. Sila cuba lagi sebentar nanti."
  },
  "reading": {
    "chartTitle": "Carta kelahiran anda",
    "chartHint": "Saju menyatakan tahun, bulan, hari dan jam kelahiran sebagai dua aksara setiap satu. Segala yang di bawah dibaca daripada lapan aksara ini.",
    "pillarYear": "Tahun",
    "pillarMonth": "Bulan",
    "pillarDay": "Hari",
    "pillarHour": "Jam",
    "pillarHourUnknown": "Tiada waktu lahir",
    "dayMasterLabel": "Tuan hari",
    "animalLabel": "Zodiak",
    "seasonLabel": "Musim kelahiran",
    "elementsTitle": "Kekuatan unsur",
    "strongest": "Paling kuat",
    "scarcest": "Paling tipis",
    "strengthTitle": "Apa yang anda dilahirkan dengan",
    "cautionTitle": "Perkara yang perlu diperhatikan",
    "bodyStrengthTitle": "Kekuatan tuan hari",
    "favorableLabel": "Yang anda perlukan kini"
  },
  "bodyStrength": {
    "STRONG": {
      "name": "Tuan hari kuat",
      "body": "Unsur yang menyokong tuan hari anda penuh. Itu memberi anda daya dorong sendiri, tetapi ia juga mudah condong ke satu pihak — anda cenderung tenang apabila ada sesuatu yang menyalurkan lebihan itu keluar."
    },
    "BALANCED": {
      "name": "Tuan hari seimbang",
      "body": "Apa yang menyokong tuan hari anda dan apa yang menariknya keluar hampir sama rata. Terlalu hampir untuk ditentukan sebelah mana, jadi di sini kami membaca unsur yang paling tipis sebagai apa yang anda perlukan."
    },
    "WEAK": {
      "name": "Tuan hari lemah",
      "body": "Unsur yang menyokong tuan hari anda tipis. Anda pandai meminjam kekuatan daripada sekeliling, tetapi lesu apabila bertahan lama seorang diri — anda menyerlah apabila ada sesuatu yang menyokong anda."
    }
  },
  "tenGods": {
    "BIGYEON": {
      "name": "Rakan Sebahu (比肩)",
      "body": "Tenaga yang berdiri seiring dengan anda. Tebal, ia memberikan anda kekuatan untuk mempertahankan kedudukan anda dan untuk menuntut bahagian anda terlebih dahulu."
    },
    "GEOPJAE": {
      "name": "Pesaing (劫財)",
      "body": "Tenaga yang menyerupai anda tetapi berfungsi dengan cara yang berbeza. Ia memberikan kekuatan untuk mendorong, tetapi jika berlebihan, apa yang anda miliki cenderung untuk berselerak."
    },
    "SIKSIN": {
      "name": "Ekspresi (食神)",
      "body": "Tenaga yang menarik apa yang ada dalam diri anda ke dunia luar. Ekspresi dan kesenangan hidup datang dari sini; di mana ia berada, terdapat keselesaan."
    },
    "SANGGWAN": {
      "name": "Pengocak (傷官)",
      "body": "Tenaga yang mengganggu kerangka tetap. Ia memberikan bakat dan ketajaman, tetapi jika berlebihan, ia bertembung dengan peraturan dan pangkat."
    },
    "PYEONJAE": {
      "name": "Rezeki Mendadak (偏財)",
      "body": "Tenaga kekayaan yang luas. Aktif dan bebas dengan apa yang dimilikinya, ia membawa peluang dari sudut yang tidak dijangka."
    },
    "JEONGJAE": {
      "name": "Harta Tetap (正財)",
      "body": "Tenaga kekayaan yang stabil, dikumpulkan sedikit demi sedikit. Saju tradisional juga membacanya sebagai posisi pasangan untuk seorang lelaki."
    },
    "PYEONGWAN": {
      "name": "Pencabar (偏官)",
      "body": "Tenaga yang membuat anda berwaspada dan tegak. Anda menjadi kuat di bawah tekanan, walaupun jika berlebihan, ia meninggalkan anda sentiasa merasa dikejar."
    },
    "JEONGGWAN": {
      "name": "Kewibawaan (正官)",
      "body": "Tenaga ketertiban yang membetulkan anda. Ia menjaga nama dan kedudukan anda; Saju tradisional juga membacanya sebagai posisi pasangan untuk seorang wanita."
    },
    "PYEONIN": {
      "name": "Sokongan Luar Biasa (偏印)",
      "body": "Tenaga yang menyokong anda melalui jalan yang luar biasa. Ia memberikan kuasa untuk menggali dengan mendalam, walaupun jika berlebihan, pemikiran mendahului tangan."
    },
    "JEONGIN": {
      "name": "Pengasuhan (正印)",
      "body": "Tenaga yang memeluk dan membesarkan anda. Ia memberikan pembelajaran dan sesuatu untuk bersandar; jika berlebihan, memulakan perjalanan sendiri menjadi lambat."
    }
  },
  "dayMasters": {
    "甲": {
      "name": "Kayu Yang (甲)",
      "trait": "Pokok tinggi yang tumbuh lurus. Sekali arahnya ditetapkan ia tidak goyah, dan ia lebih rela bertahan daripada tunduk."
    },
    "乙": {
      "name": "Kayu Yin (乙)",
      "trait": "Pokok menjalar — rumput yang lentur. Ia melentur mengikut keadaan untuk terus bergerak, dan ia tidak patah."
    },
    "丙": {
      "name": "Api Yang (丙)",
      "trait": "Matahari tengah hari. Perasaan terpampang jelas, ruang menjadi terang, dan melangkah ke hadapan datang secara semula jadi."
    },
    "丁": {
      "name": "Api Yin (丁)",
      "trait": "Cahaya lilin. Ia menyala perlahan dan lama, serta menghangatkan yang terdekat dahulu."
    },
    "戊": {
      "name": "Tanah Yang (戊)",
      "trait": "Tanah lapang dan gunung. Sukar digoyah dan mudah disandari, walaupun lambat mengubah keputusan yang sudah dibuat."
    },
    "己": {
      "name": "Tanah Yin (己)",
      "trait": "Tanah ladang. Ia menerima apa sahaja yang datang dan membesarkannya, memelihara dan bukan mempamerkan."
    },
    "庚": {
      "name": "Logam Yang (庚)",
      "trait": "Besi yang belum ditempa. Tegas dan jelas, dengan sedikit sahaja kesabaran terhadap perkara yang tergantung."
    },
    "辛": {
      "name": "Logam Yin (辛)",
      "trait": "Permata yang telah diasah. Cita rasa halus dan piawaian tinggi; kerja sambil lewa sukar dibiarkan."
    },
    "壬": {
      "name": "Air Yang (壬)",
      "trait": "Sungai dan laut. Luas pandangannya, dengan mata yang membaca ke mana sesuatu mengalir."
    },
    "癸": {
      "name": "Air Yin (癸)",
      "trait": "Embun dan hujan. Ia meresap senyap dan membaca suasana sebelum kata-kata."
    }
  },
  "dayMasterSigns": {
    "甲": [
      "Menyatakan fikirannya walaupun pada pertemuan pertama.",
      "Jarang mengubah rancangan atau janji yang sudah ditetapkan.",
      "Menolak dengan terus terang, yang boleh kedengaran kasar."
    ],
    "乙": [
      "Mengelak pertembungan dan mengambil jalan lain.",
      "Kelihatan lembut, namun akhirnya sampai juga ke tempat yang diniatkan.",
      "Membaca suasana dahulu sebelum menyertai kumpulan."
    ],
    "丙": [
      "Menegur dahulu orang yang baru dikenali.",
      "Suka dan tidak sukanya terpampang pada wajah.",
      "Berakhir di tengah-tengah majlis tanpa cuba pun."
    ],
    "丁": [
      "Diam pada mulanya, penuh perhatian setelah rapat.",
      "Lebih suka berbual panjang dengan seorang dua berbanding orang ramai.",
      "Mengingati kata-kata yang terlepas sepintas lalu dan menyebutnya kemudian."
    ],
    "戊": [
      "Sedikit bercakap; suaranya jarang meninggi walaupun keadaan mendesak.",
      "Orang yang menyelesaikannya di penghujung sementara yang lain menangguhkan keputusan.",
      "Kata tidak, sekali diberi, kekal tidak untuk masa yang lama."
    ],
    "己": [
      "Mendengar lebih lama daripada bercakap.",
      "Sukar menolak permintaan, jadi kerja bertimbun kepadanya.",
      "Apa yang diuruskannya diam-diam hanya terserlah kemudian."
    ],
    "庚": [
      "Membuat keputusan dengan pantas dan menyatakannya di situ juga.",
      "Tidak melembutkan kata, yang boleh dibaca sebagai dingin.",
      "Jelas kelihatan resah apabila sesuatu berlarutan."
    ],
    "辛": [
      "Mempunyai piawaian yang jelas tentang pakaian dan barang yang dipilihnya.",
      "Tidak boleh membiarkan kerja yang separuh siap tanpa menegurnya.",
      "Kedekut pujian, tetapi pasti sekali dia bersungguh."
    ],
    "壬": [
      "Mudah bergaul dengan pelbagai jenis orang.",
      "Membangkitkan hal kemudian sebelum hal yang di depan mata.",
      "Rimas apabila terikat lama di satu tempat."
    ],
    "癸": [
      "Sedikit bercakap tetapi membaca keadaan dengan tepat.",
      "Paling awal perasan apabila suasana berubah.",
      "Menyimpan hati kecilnya rapat, jadi mengambil masa untuk mengenalinya."
    ]
  },
  "animalTraits": {
    "rat": "Cepat perasan dan cepat mengamankan apa yang penting. Paling awal bergerak ketika krisis.",
    "ox": "Nampak perlahan tetapi menyelesaikannya sampai habis. Apa yang dipikul, tidak dilepaskan.",
    "tiger": "Berani dan berada di hadapan. Tidak boleh membiarkan ketidakadilan berlalu.",
    "rabbit": "Lembut dan tajam pengamatannya. Tahu berpusing daripada berlanggar.",
    "dragon": "Besar hati dengan cita-cita tinggi. Jarang berpuas hati dengan yang biasa.",
    "snake": "Menyimpan pandangannya sendiri dan berfikir mendalam. Pertimbangannya tepat.",
    "horse": "Ceria dan tidak boleh diam. Dikurung ialah perkara yang paling sukar.",
    "goat": "Hangat dan bertimbang rasa. Menyimpan kata-kata kasar untuk masa yang lama.",
    "monkey": "Banyak akal dan cepat menyesuaikan diri. Bosan dengan perkara yang berulang.",
    "rooster": "Rajin dan teliti. Tidak boleh membiarkan sesuatu tidak kena pada tempatnya.",
    "dog": "Setia hingga ke akhir sebaik kepercayaan diberi. Pengkhianatan melukakan paling dalam.",
    "pig": "Murah hati dan berterus terang. Mudah percaya, kadangkala dengan harga yang mahal."
  },
  "result": {
    "title": "Bacaan Saju Anda",
    "recalculate": "Mula semula",
    "copyLink": "Salin pautan keputusan",
    "copied": "Disalin",
    "missingInput": "Keputusan ini tidak dapat dibaca. Sila masukkan semula tarikhnya.",
    "partialTime": "Waktu lahir tidak diberikan, jadi tiang jam ditinggalkan. Menambahnya menjadikan bacaan lebih tepat.",
    "engineVersion": "Dikira dengan",
    "disclaimer": "Ini adalah bacaan Saju tradisional yang ditawarkan untuk rujukan. Ia bukan ramalan saintifik atau keputusan mengenai masa depan anda."
  },
  "today": {
    "menu": "Ramalan hari ini",
    "title": "Ramalan hari ini",
    "pillarLabel": "Tiang hari ini",
    "scoreLabel": "Skor hari ini",
    "grades": {
      "DAEGIL": {
        "name": "Sangat baik",
        "body": "Tenaga hari ini bertemu dengan carta anda pada sudut terbaik. Hari yang baik untuk menyelesaikan perkara yang telah anda tangguhkan."
      },
      "GIL": {
        "name": "Baik",
        "body": "Aliran hari ini menyokong anda. Apa yang biasanya anda lakukan menjadi lebih mudah daripada biasa."
      },
      "PYEONG": {
        "name": "Sama",
        "body": "Tiada yang mendorong anda dan tiada yang menghalang anda. Lakukan seperti biasa dan anda akan mendapat apa yang anda biasanya dapat."
      },
      "JUUI": {
        "name": "Berhati-hati",
        "body": "Sebahagian tenaga hari ini bertentangan dengan carta anda. Lebih baik menghabiskan perkara daripada memulakannya."
      },
      "JOSIM": {
        "name": "Berhati-hati",
        "body": "Tenaga hari ini menekan pada carta anda. Jika keputusan boleh ditangguhkan, biarkan ia ditangguhkan."
      }
    },
    "categories": {
      "wealth": "Wang",
      "love": "Cinta",
      "career": "Kerja",
      "health": "Kesihatan"
    },
    "luckyTitle": "Simpan ini dekat hari ini",
    "luckyElement": "Elemen",
    "luckyColor": "Warna",
    "luckyDirection": "Arah",
    "luckyTime": "Jam",
    "luckyNumber": "Nombor",
    "luckyColors": {
      "TEAL": "biru kehijauan",
      "GREEN": "hijau",
      "RED": "merah",
      "ORANGE": "oren",
      "YELLOW": "kuning",
      "OCHRE": "kuning tanah",
      "WHITE": "putih",
      "GOLD": "emas",
      "BLACK": "hitam",
      "NAVY": "biru laut"
    },
    "luckyDirections": {
      "EAST": "Timur",
      "SOUTH": "Selatan",
      "CENTER": "Pusat",
      "WEST": "Barat",
      "NORTH": "Utara"
    },
    "basisTitle": "Dari mana skor ini datang",
    "factors": {
      "TODAY_IS_YONGSIN": "Elemen hari ini adalah yang diperlukan oleh carta anda",
      "TODAY_GENERATES_YONGSIN": "Elemen hari ini memberi makan kepada yang diperlukan oleh carta anda",
      "TODAY_IS_GISIN": "Elemen hari ini mendorong lebih jauh sisi yang sudah penuh",
      "TODAY_CONTROLS_YONGSIN": "Elemen hari ini menahan yang diperlukan oleh carta anda",
      "TODAY_GENERATES_SELF": "Elemen hari ini menyokong day master anda",
      "TODAY_SAME_ELEMENT": "Elemen hari ini adalah sama dengan day master anda",
      "SELF_GENERATES_TODAY": "Day master anda mengalir ke dalam elemen hari ini",
      "TODAY_CONTROLS_SELF": "Elemen hari ini menahan day master anda",
      "SELF_CONTROLS_TODAY": "Hari ini, hari tuan menahan elemen hari ini",
      "WEAK_HELPED": "Hari tuan yang lemah diberikan kekuatan hari ini",
      "STRONG_OVERFED": "Hari tuan yang kuat menjadi lebih berat hari ini",
      "STRONG_DRAINED": "Hari tuan yang kuat ditarik ke arah keseimbangan yang lebih baik hari ini",
      "WEAK_BURDENED": "Hari tuan yang lemah diberikan lebih banyak untuk dibawa hari ini",
      "BRANCH_SAMHAP": "Cawangan hari ini membentuk trine penuh dengan carta anda",
      "BRANCH_BANHAP": "Cawangan hari ini membentuk trine separuh dengan carta anda",
      "BRANCH_YUKHAP": "Cawangan hari ini membentuk enam harmoni dengan carta anda",
      "BRANCH_SAME": "Cawangan hari ini adalah sama dengan salah satu dalam carta anda",
      "BRANCH_NEUTRAL": "Cawangan hari ini tiada ikatan khusus dengan carta anda",
      "BRANCH_WONJIN": "Cawangan hari ini berada dalam ketidakselarasan yang tenang dengan carta anda",
      "BRANCH_CHUNG": "Cawangan hari ini bertentangan dengan carta anda"
    },
    "bookmarkHint": "Kami tidak menyimpan tarikh lahir anda, jadi ia perlu dimasukkan semula setiap kali. **Tandakan pautan hasil ini** dan ia akan membuka nasib hari itu setiap hari.",
    "disclaimer": "Nasib hari ini mengubah hubungan antara tiang hari dan carta anda menjadi skor. Ia adalah nota tentang bagaimana untuk menghabiskan hari, bukan ramalan."
  },
  "ads": {
    "label": "Iklan"
  },
  "analyzing": {
    "title": "Membina carta anda",
    "quotes": [
      "Saju bukan jawapan tetap. Ia adalah satu bahasa untuk memahami diri anda.",
      "Mengetahui apa yang anda dilahirkan dengan dan menghidupkannya adalah dua perkara yang berbeza.",
      "Kedudukan yang kuat adalah soal penggunaan; yang tipis, soal pengisian.",
      "Lapan watak yang sama membuatkan hari yang berbeza bergantung kepada bagaimana anda membacanya.",
      "Lebih baik daripada menunggu hari yang baik adalah mengetahui cara untuk menggunakan yang anda ada.",
      "Kedudukan yang orang panggil kelemahan biasanya adalah tempat di mana pertumbuhan paling banyak berlaku.",
      "Ada tenaga yang didorong oleh musim; ada yang perlu anda buat sendiri.",
      "Apa yang lebih penting daripada skor adalah bagaimana anda membacanya.",
      "Nasib hari ini adalah cuaca untuk satu hari, bukan iklim di mana anda tinggal.",
      "Mengetahui Saju anda bermakna melihat diri anda, bukan melihat ke depan."
    ],
    "watching": "Sedang menonton iklan",
    "remaining": "Keputusan anda terbuka dalam {seconds}s"
  },
  "reportDetail": {
    "depthTitle": "Tinjauan lebih dekat pada carta anda",
    "vitalityTitle": "Apa yang ditolak oleh musim",
    "vitalityHint": "Bar menunjukkan berapa banyak elemen yang ada; jadual ini menunjukkan sama ada bulan kelahiran mendorongnya ke atas. Jumlah yang sama membawa kekuatan yang berbeza di wang daripada di sa.",
    "vitalities": {
      "WANG": {
        "name": "Wang (旺)",
        "body": "pada tahap terkuatnya"
      },
      "SANG": {
        "name": "Sang (相)",
        "body": "seterusnya dalam kekuatan"
      },
      "HYU": {
        "name": "Hyu (休)",
        "body": "berehat selepas gilirannya"
      },
      "SU": {
        "name": "Su (囚)",
        "body": "terkurung, sukar untuk bergerak"
      },
      "SA": {
        "name": "Sa (死)",
        "body": "pada tahap paling lemah"
      }
    },
    "rawLabel": "Sebelum musim",
    "strengthLabel": "Selepas musim",
    "earthSeasonNote": "Dilahirkan pada bulan peralihan (辰未戌丑), jadi tanah juga dianggap sebagai wang.",
    "allyRatioLabel": "Nisbah sekutu",
    "allyRatioHint": "Kongsi yang dipegang oleh bintang sumber dan teman yang digabungkan. Di atas 45% adalah kuat, di bawah 35% adalah lemah. Nombor ini dicetak supaya anda dapat melihat betapa dekatnya keputusan itu.",
    "stemGodsTitle": "Apa setiap tiang bagi anda",
    "stemGodsHint": "Diukur dari tuan hari anda, setiap batang yang tinggal mengambil salah satu nama sepuluh dewa. Yang mana yang tebal mengatakan banyak tentang temperament.",
    "pillarColumn": "Tiang",
    "tenGodColumn": "Sepuluh tuhan",
    "meaningColumn": "Apa maksudnya",
    "yearOutlookTitle": "Tinjauan tahun ini",
    "factorsTitle": "Dari mana skor hari ini datang",
    "factorsHint": "Skrin menyenaraikan faktor-faktor; di sini setiap satu dicetak dengan mata yang ditambah atau dikurangkan.",
    "deltaColumn": "Mata",
    "appendixTitle": "Bagaimana carta ini dibina",
    "timeCorrectionLabel": "Waktu lahir",
    "timeCorrectionApplied": "Dibetulkan kepada waktu matahari benar dan dibaca sebagai {time}.",
    "timeCorrectionNone": "Tiada waktu kelahiran diberikan, jadi tiang jam ditinggalkan.",
    "timeCorrectionDateShift": "Pembetulan memindahkan tarikh ke {date}, jadi tiang hari itu digunakan.",
    "calendarLabel": "Tarikh yang digunakan untuk menyusun carta",
    "solarLabel": "Masihi",
    "lunarLabel": "Qamari",
    "lunarUnavailable": "Tarikh ini tidak terdapat dalam jadual almanak, jadi tiada tarikh lunar ditunjukkan."
  },
  "report": {
    "title": "Simpan bacaan hidup anda sebagai PDF",
    "body": "Kami mengubah bacaan ini menjadi PDF — carta kelahiran anda, berat lima elemen, kekuatan day master anda dan apa yang diperlukan sekarang, serta fortune hari ini, semuanya dalam satu halaman.",
    "buyButton": "Bayar {price} dan muat turun",
    "preparing": "Belum tersedia",
    "ordering": "Membuat pesanan anda…",
    "paying": "Memproses pembayaran…",
    "issuing": "Menyediakan laporan anda…",
    "done": "Telah dimuat turun. Gunakan butang di bawah untuk memuat turunnya semula.",
    "failed": "Pembayaran atau muat turun gagal. Sila cuba lagi sebentar nanti.",
    "retry": "Muat turun semula",
    "contents": [
      "Day master dan temperamen anda — ringkasan, kekuatan dan perhatian",
      "Carta kelahiran anda — lapan karakter dari empat tiang",
      "Berat lima elemen, yang paling tebal dan paling nipis",
      "Kekuatan day master anda, dan tenaga yang diperlukan sekarang",
      "Fortune hari ini dan empat domain (wang, cinta, kerja, kesihatan)"
    ],
    "consentLabel": "Saya faham bahawa ini kandungan digital yang dihantar serta-merta selepas pembayaran, dan bahawa **penarikan diri kerana berubah fikiran adalah terhad sebaik muat turun selesai**.",
    "consentRequired": "Sila sahkan terma penarikan diri sebelum membuat pembayaran.",
    "productInfoTitle": "Maklumat produk",
    "productInfo": [
      [
        "Pembekal",
        "{brand}"
      ],
      [
        "Format",
        "Satu dokumen PDF (5 halaman A4), dimuat turun di skrin sejurus selepas pembayaran."
      ],
      [
        "Keperluan",
        "Sebarang peranti yang boleh membuka PDF. Tiada pemasangan atau akaun diperlukan."
      ],
      [
        "Tempoh penggunaan",
        "Tiada had. Fail yang anda muat turun kekal milik anda."
      ],
      [
        "Muat turun semula",
        "Sehingga lima kali bagi pesanan yang sama. Kami tidak menyimpan salinan, jadi ia tidak boleh dihasilkan semula setelah anda meninggalkan skrin keputusan."
      ],
      [
        "Penarikan diri",
        "Bayaran balik penuh sebelum muat turun bermula. Selepas ia selesai, penarikan diri kerana berubah fikiran adalah terhad (Perkara 17(2), Akta E-Dagang Korea)."
      ],
      [
        "Kos pertukaran dan pemulangan",
        "Tiada — kandungan digital, tiada apa-apa yang dihantar."
      ]
    ],
    "refundContact": "Untuk bayaran balik atau pertanyaan, hubungi khidmat pelanggan atau e-mel di bawah. Jika dokumen itu tidak dapat dihasilkan, atau jumlah yang dicaj berbeza daripada pesanan, kami memulangkan wang sepenuhnya.",
    "pdfLanguageNotice": "PDF dihasilkan dalam bahasa yang sama dengan skrin ini."
  },
  "premiumReport": {
    "title": "Simpan bacaan premium anda sebagai PDF",
    "body": "Segala-galanya dalam bacaan kehidupan, ditambah dengan **nombor yang tidak pernah muncul di skrin** — nisbah sekutu yang menentukan kuat atau lemah, sejauh mana bulan kelahiran mendorong setiap elemen, dan pembetulan waktu-solar-sebenar yang diterapkan pada jam kelahiran anda.",
    "buyButton": "Bayar {price} dan muat turun",
    "preparing": "Belum tersedia",
    "ordering": "Mencipta pesanan anda…",
    "paying": "Memproses pembayaran…",
    "issuing": "Menyediakan laporan anda…",
    "done": "Dimuat turun. Gunakan butang di bawah untuk memuat turunnya lagi.",
    "failed": "Pembayaran atau muat turun gagal. Sila cuba lagi dalam seketika.",
    "retry": "Muat turun lagi",
    "contents": [
      "Penguasa hari anda dan temperamen — ringkasan, kekuatan dan perhatian",
      "Carta kelahiran anda — lapan watak dari empat tiang",
      "Kekuatan lima elemen, kekuatan day master anda dan apa yang diperlukan",
      "Hari ini punya nasib dan empat domain (wang, cinta, kerja, kesihatan)",
      "Apa yang setiap tiang bermakna bagi anda — pembacaan ten gods dari carta anda",
      "Kedudukan musim dan nisbah sekutu — nombor di sebalik keputusan",
      "Pandangan tahun ini, faktor penilaian hari ini, dan pembetulan masa"
    ],
    "consentLabel": "Saya faham bahawa ini adalah kandungan digital yang dihantar serta-merta setelah pembayaran, dan bahawa **penarikan semula kerana perubahan fikiran yang sederhana adalah terhad setelah muat turun selesai**.",
    "consentRequired": "Sila sahkan terma penarikan semula sebelum membayar.",
    "productInfoTitle": "Maklumat produk",
    "productInfo": [
      [
        "Penyedia",
        "{brand}"
      ],
      [
        "Format",
        "Satu dokumen PDF (7 halaman A4), dimuat turun di skrin sejurus selepas pembayaran."
      ],
      [
        "Keperluan",
        "Sebarang peranti yang boleh membuka PDF. Tiada pemasangan atau akaun diperlukan."
      ],
      [
        "Tempoh penggunaan",
        "Tiada had. Anda menyimpan fail yang dimuat turun."
      ],
      [
        "Muat turun semula",
        "Sehingga lima kali untuk pesanan yang sama. Kami tidak menyimpan salinan, jadi ia tidak boleh dihasilkan semula setelah anda meninggalkan skrin hasil."
      ],
      [
        "Penarikan balik",
        "Pengembalian penuh sebelum muat turun bermula. Setelah selesai, penarikan balik kerana perubahan fikiran adalah terhad (Art. 17(2), Akta E-Dagang Korea)."
      ],
      [
        "Kos pengembalian",
        "Tiada — kandungan digital, tiada penghantaran."
      ]
    ],
    "refundContact": "Untuk pengembalian atau pertanyaan, hubungi pusat pelanggan atau e-mel di bawah. Jika dokumen tidak dapat dihasilkan, atau jumlah yang dikenakan berbeza dari pesanan, kami akan mengembalikan sepenuhnya.",
    "pdfLanguageNotice": "PDF dihasilkan dalam bahasa yang sama seperti skrin ini."
  },
  "fallbackReport": {
    "summary": "Seorang {dayMaster} yang dilahirkan dalam tenaga {season}. Di seluruh carta, {strongest} paling tebal dan {scarcest} paling nipis. Segala yang berikut adalah berdasarkan lapan karakter tersebut — setiap nombor dan setiap tiang di sini dikira, bukan dipilih.",
    "personality": "Day master anda adalah {dayMaster} — tenaga {element} — dan carta ini dibaca sebagai {strengthName}. Sisi mana yang lebih tebal, apa yang menyokong day master atau apa yang menarik daripadanya, adalah apa yang membentuk bijirin, dan dalam kehidupan seharian ia muncul seperti ini.",
    "cautions": {
      "STRONG": [
        "Anda mendorong dengan cukup kuat sehingga anda sering hanya menyedari kecenderungan setelah ia berlaku.",
        "Walaupun di mana bantuan tersedia, anda akhirnya mengendalikannya seorang diri, yang menjadikan tugas lebih besar.",
        "Segala-galanya menjadi lebih baik apabila anda memberi ruang untuk apa yang menarik lebihan."
      ],
      "BALANCED": [
        "Tiada apa yang memihak kepada anda, jadi keputusan yang ditangguhkan hanya kekal ditangguhkan.",
        "Anda menyesuaikan diri dengan baik kepada situasi, yang boleh mengaburkan di mana garis anda sendiri.",
        "Mengarah kepada apa yang paling nipis sekarang memberi anda arah untuk dipegang."
      ],
      "WEAK": [
        "Bertahan seorang diri lebih cepat melemahkan anda daripada yang anda jangkakan.",
        "Tanpa apa-apa di belakang anda, keputusan tergelincir dan saat itu berlalu.",
        "Menjaga orang yang menyokong dekat adalah bukan kelemahan dalam carta ini — ia adalah kaedah."
      ]
    },
    "scarcityCaution": "Elemen yang paling nipis sekarang adalah {scarcest}. Apa sahaja yang elemen itu mengawal adalah di mana anda paling lambat untuk bertindak.",
    "elementBalance": "Mengikut kekuatan, {strongest} mendahului pada {strongestPct}% dan {scarcest} ketinggalan pada {scarcestPct}%. Bulan kelahiran anda berada dalam {season}, yang mendorong elemen itu naik sekali lagi — kuantiti yang sama mempunyai kekuatan yang berbeza bergantung kepada sama ada musim menyokongnya. Apa yang anda perlukan sekarang adalah {favorable}, dan keadaan menjadi lebih mudah apabila elemen itu dipenuhi.",
    "todayHeadline": "Hari ini dibaca sebagai {grade}",
    "todayMessage": "Hari ini mendapat skor {score}, dinilai {gradeName}. {gradeBody} Pilar hari ini adalah {pillar}, dan penggerak terbesar dalam skor itu adalah “{topFactor}”.",
    "todayAdvice": {
      "HIGH": "Hari yang baik untuk mengambil mesej atau mengemas yang telah anda tangguhkan — walaupun lebih baik tidak mencuba untuk menyelesaikannya semua hari ini.",
      "MID": "Lakukan seperti biasa dan anda akan mendapatkan apa yang anda biasa dapat. Daripada memulakan sesuatu yang baru, gerakkan satu perkara yang sudah ada ke hadapan.",
      "LOW": "Sebahagian daripada hari ini bertentangan dengan carta. Lebih baik digunakan untuk menyelesaikan dan memeriksa daripada memulakan."
    },
    "luckyNote": "Elemen bertuah hari ini adalah {element}. Julat {colors}, sisi {direction}, dan waktu sekitar {time} adalah di mana tenaga itu paling kuat.",
    "domains": {
      "wealth": "Kekayaan dibaca {score} hari ini. Nilai ini bergerak dengan sama ada tenaga hari ini mencapai bintang kekayaan (財星) — apa yang anda urus dan apa yang anda kumpulkan.",
      "love": "Kasih sayang dibaca {score} hari ini. Nilai ini ditentukan oleh bagaimana cabang hari ini bertemu dengan cabang hari anda (日支), istana pasangan — keharmonian meningkatkannya, pertembungan menurunkannya.",
      "career": "Kerja dibaca {score} hari ini. Nilai ini bergerak dengan sama ada tenaga hari ini mencapai bintang pegawai (官星) dan output (食傷) — apa yang anda ambil dan apa yang anda hasilkan.",
      "health": "Kesihatan dibaca {score} hari ini. Nilai ini ditentukan oleh berapa banyak cabang natal anda hari ini bertembung, dan sama ada elemen hari ini adalah satu yang anda perlukan."
    },
    "yearOutlook": "Pilar tahun ini adalah {pillar}, membawa {element}. {relation} Bacaan ini hanya melihat bagaimana pilar tahun ini bertemu dengan apa yang anda perlukan sekarang; ia tidak memecahkan tahun ini bulan demi bulan.",
    "yearRelations": {
      "YONGSIN": "Elemen yang anda perlukan tiba secara langsung tahun ini. Masa yang sesuai untuk mengeluarkan apa yang telah anda ketepikan.",
      "GENERATES": "Tahun ini memberi makan kepada elemen yang anda perlukan, jadi keadaan menjadi lebih lembut — bukan serta-merta, tetapi secara beransur-ansur.",
      "GISIN": "Tahun ini mendorong sekali lagi ke arah yang sudah anda condong. Lebih baik menghabiskan apa yang ada daripada membuka sesuatu yang baru.",
      "CONTROLS": "Sesuatu tahun ini menekan elemen yang anda perlukan, jadi keputusan datang lebih perlahan. Menetapkan tarikh akhir sendiri membantu.",
      "NEUTRAL": "Tahun ini tidak bertembung dengan atau memberi makan kepada apa yang anda perlukan. Mempertahankan kedudukan yang anda miliki adalah perdagangan yang lebih baik."
    },
    "disclaimer": "Rujukan tradisional myeongri, bukan ramalan saintifik atau kenyataan tentang apa yang mesti berlaku.",
    "tenGodDepth": {
      "BIGYEON": {
        "thick": "Bi-kyun tebal. Anda membina dengan tangan sendiri daripada meminjam, yang menjadikan anda kuat dalam menyelesaikan tugas hingga akhir. Tetapi menerima bantuan juga adalah kemahiran, dan menganggapnya sebagai kelemahan membuat anda memikul beban sendirian — dan bertembung, kerana bahagian, dengan sesiapa yang berdiri di sebelah anda. Di mana kerja dikongsi, menawarkan tangan anda terlebih dahulu ternyata menjadi jalan yang lebih cepat.",
        "absent": "Bi-kyun tiada. Bergerak dengan orang lain lebih sesuai untuk anda daripada mempertahankan kedudukan sendiri. Anda ragu-ragu lama di mana keputusan adalah milik anda sahaja, dan mempercepatkan apabila seseorang bersama anda. Apabila kedudukan adalah milik anda untuk dipertahankan, adalah berbaloi untuk berlatih mendorong."
      },
      "GEOPJAE": {
        "thick": "Geopjae tebal. Anda bergerak terlebih dahulu di mana orang lain ragu-ragu. Kekuatan itu tidak mudah untuk dipertahankan, jadi apa yang anda peroleh tidak bertahan lama di tangan. Memutuskan terlebih dahulu ke mana wang pergi bukanlah berjimat dalam carta ini — ia adalah kaedah.",
        "absent": "Geopjae tiada. Anda jarang memaksa sesuatu dan anda mengelak dari persaingan. Anda kehilangan sedikit, tetapi anda terlambat apabila sesuatu perlu didorong dengan kuat. Di mana taruhannya nyata, menetapkan tarikh akhir sendiri membantu."
      },
      "SIKSIN": {
        "thick": "Sikshin tebal. Apa yang ada di dalam keluar dengan mudah, jadi membuat, membesar dan memberi makan adalah tanah yang selesa. Anda melakukan dengan baik dalam kerja yang dilakukan perlahan dan lama, dan hasilnya tiba lewat tetapi secara beransur-ansur. Apabila keselesaan berlanjutan, anda lebih cenderung untuk menetap daripada meluaskan.",
        "absent": "Sikshin tiada. Saluran dari dalam ke luar adalah nipis: pemikiran ada, tetapi penyampaiannya lewat. Menunggu sehingga semuanya siap menunda permulaan. Mengeluarkan sesuatu yang separuh siap bukanlah kerugian dalam carta ini."
      },
      "SANGGWAN": {
        "thick": "Pegawai Penyakit sangat tebal. Anda melihat apa yang tidak kena dalam kerangka tetap sebelum orang lain, dan anda mempunyai kata-kata untuk menamakannya. Anda bersinar di tempat yang sedang dibuat dan bertembung di tempat yang sedang dijaga. Bagaimana perkara yang betul diucapkan sama pentingnya di sini seperti melihatnya.",
        "absent": "Pegawai Penyakit tiada. Anda mencari jalan melalui kerangka daripada menggoncangnya. Anda jarang bertembung dengan orang, tetapi anda membiarkan perkara berlalu di tempat yang sepatutnya berubah, dan itu menimbulkan kekecewaan. Lebih baik tidak menangguhkan kata yang perlu diucapkan."
      },
      "PYEONJAE": {
        "thick": "Kekayaan Tidak Langsung sangat tebal. Anda menghulurkan tangan di beberapa tempat dan menangkap peluang dengan luas, jadi perkara terbuka di sudut yang tidak dijangka. Apa yang tersebar juga mesti dijaga, tetapi menjaga kurang menarik bagi anda — jadi anda terus gagal mengumpul apa yang telah anda buka. Menutup satu sebelum membuka yang seterusnya adalah urutan yang diperlukan oleh carta ini.",
        "absent": "Kekayaan Tidak Langsung tiada. Anda mengambil perkara yang pasti di tanah yang dikenali daripada menyebar luas. Terdapat kurang yang menggoncang anda, dan anda melihat peluang yang lebih besar berlalu dengan kerap. Meluaskan jangkauan anda sejauh satu jari pada satu masa membantu."
      },
      "JEONGJAE": {
        "thick": "Kekayaan Langsung sangat tebal. Anda mengira apa yang masuk dan apa yang keluar, dan anda membina — jadi tanah di bawah anda mengukuh dari masa ke masa. Menggapai hanya untuk perkara yang pasti membuat anda lambat kepada peluang, dan berjimat yang dibawa terlalu jauh membuat tangan anda berat di tempat yang sepatutnya terbuka. Memutuskan terlebih dahulu apa yang untuk wang membantu.",
        "absent": "Kekayaan Langsung tiada. Sisi pengumpulan yang stabil menjadi nipis, jadi mengurus apa yang tiba terus ditangguhkan. Menerima dan menyimpan adalah kemahiran yang berbeza; carta ini perlu belajar yang kedua secara berasingan. Peraturan yang menggerakkan wang tanpa keputusan anda setiap kali sesuai untuk anda."
      },
      "PYEONGWAN": {
        "thick": "Pegawai Tidak Langsung sangat tebal. Tekanan mengeluarkan kekuatan anda, dan anda memikul tanggungjawab yang dianggap berat oleh orang lain. Namun, apabila ketegangan tidak pernah hilang, ia mengeras menjadi perasaan diburu dan rehat tidak lagi terasa seperti rehat. Menetapkan waktu untuk berhenti bukanlah kemalasan dalam carta ini.",
        "absent": "Pegawai Tidak Langsung tiada. Sedikit yang menekan anda, yang mudah bagi fikiran, tetapi kuasa untuk menegakkan diri dalam krisis menjadi nipis. Anda jauh lebih baik apabila tarikh akhir atau janji ditetapkan dari luar."
      },
      "JEONGGWAN": {
        "thick": "Pegawai Langsung sangat tebal. Kedudukan anda dan garis yang anda jaga adalah jelas, dan mengekalkannya adalah sumber keteguhan anda — anda membina kepercayaan dalam sistem. Di mana peraturan goyang, anda lambat untuk menilai, dan di mana papan adalah milik anda untuk ditetapkan, anda merasa terkurung.",
        "absent": "Pegawai Langsung tiada. Cara yang anda buat sendiri lebih sesuai untuk anda daripada tempat yang ditetapkan dari luar. Itu adalah kebebasan, tetapi piawaian mudah goyang; menulis peraturan anda sendiri seolah-olah ia adalah dasar membantu."
      },
      "PYEONIN": {
        "thick": "Sumber Tidak Langsung sangat tebal. Anda pergi ke jalan yang diabaikan oleh orang lain dan membina kedalaman anda sendiri. Pembelajaran dan penimbangan adalah kuat, tetapi pemikiran melebihi tangan dan anda boleh merasa letih sebelum anda mula. Bergerak dalam keadaan separuh sedia sesuai untuk carta ini.",
        "absent": "Sumber Tidak Langsung tiada. Anda belajar dengan bertembung dengan perkara daripada menggali. Anda tidak lambat untuk belajar, tetapi belajar yang dipegang sendirian untuk jangka masa yang panjang tidak sesuai untuk anda. Bertanya kepada orang dan belajar di lapangan adalah lebih cepat."
      },
      "JEONGIN": {
        "thick": "Sumber Langsung sangat tebal. Apa yang menyokong anda adalah mencukupi, jadi pembelajaran dan tempat untuk bersandar tidak pernah habis. Keteguhan itu membuat langkah ke depan lambat, dan persiapan menjadi alasan untuk menangguhkan permulaan. Menyimpan satu tempat di mana apa yang anda terima kembali keluar adalah berbaloi.",
        "absent": "Sumber Langsung tiada. Anda telah mencipta tapak anda sendiri, jadi berdiri sendiri berkembang awal. Meminta bantuan adalah tidak biasa, walaupun anda tidak perlu, anda tetap bertahan sendiri. Dalam carta ini, bertanya adalah sangat berharga."
      }
    },
    "natalFactors": {
      "WEALTH_STARS": "Berapa banyak kekayaan (財星) yang dibawa oleh carta — ketebalan apa yang anda urus dan kumpulkan.",
      "WEALTH_STRONG_BODY": "Penguasa hari berjalan penuh, jadi ada kekuatan untuk membawa kekayaan.",
      "WEALTH_WEAK_BODY": "Penguasa hari berjalan nipis, jadi kekayaan sukar untuk dibawa walaupun di mana ia wujud.",
      "WEALTH_YONGSIN": "Apa yang anda perlukan sekarang adalah elemen yang sama dengan bintang kekayaan, supaya tanah itu datang dengan lebih mudah.",
      "LOVE_SPOUSE_STAR": "Berapa banyak bintang pasangan yang dibawa oleh carta — kekayaan langsung untuk lelaki, pegawai langsung untuk wanita.",
      "LOVE_SPOUSE_PALACE": "Bintang pasangan berada di dalam cabang hari anda, istana pasangan, jadi tempat itu dipenuhi.",
      "LOVE_PALACE_CHUNG": "Istana pasangan bertentangan dengan cabang lain, jadi tempat itu tidak stabil.",
      "LOVE_GENDER_UNKNOWN": "Tiada jantina yang dimasukkan, jadi bintang pasangan tidak dikira. Nilai dibahagikan antara bintang kekayaan dan pegawai mengikut jantina, dan kami tidak memilih satu secara sembarangan.",
      "CAREER_OFFICER": "Bintang pegawai (正官·偏官) dalam carta — ketebalan apa yang anda ambil dan simpan.",
      "CAREER_OUTPUT": "Bintang output (食神·傷官) dalam carta — ketebalan apa yang anda keluarkan dan ungkapkan.",
      "CAREER_STRONG_BODY": "Penguasa hari berjalan penuh, jadi ia menggunakan bintang pegawai daripada ditekan oleh mereka.",
      "HEALTH_BALANCE": "Sejauh mana lima elemen duduk dengan rata — semakin condong ke satu arah, semakin banyak tekanan jatuh pada apa yang elemen itu mentadbir.",
      "HEALTH_CHUNG": "Berapa banyak pasangan cabang bertembung di dalam carta.",
      "HEALTH_EXTREME_BODY": "Penguasa hari condong keras ke satu sisi, yang merupakan beban itu sendiri. Penguasa hari yang seimbang tidak kehilangan apa-apa di sini."
    },
    "yongsinDepth": {
      "STRONG": "Elemen yang menyokong penguasa hari anda berjalan penuh. Itu memberi anda dorongan sendiri tetapi mudah condong ke satu sisi, jadi apa yang anda perlukan sekarang bukan lebih banyak sokongan — ia adalah **sesuatu untuk mengurangkan lebihan**. {favorable} melakukan itu. Di mana elemen itu mencapai — mengeluarkan, mengambil, mengumpul — adalah di mana anda menetap.",
      "BALANCED": "Apa yang menyokong penguasa hari anda dan apa yang menarik daripadanya duduk hampir sama. Terlalu dekat untuk dipanggil ke mana-mana arah, jadi di sini kita membaca **apa sahaja yang paling nipis** sebagai apa yang anda perlukan: {favorable}. Carta yang tidak condong menyesuaikan diri dengan baik tetapi mengaburkan garisnya sendiri, jadi mengarahkan ke arah tempat nipis memberi anda arah untuk dipegang.",
      "WEAK": "Elemen yang menyokong penguasa hari anda berjalan nipis. Anda meminjam kekuatan dari sekitar anda dengan baik tetapi cepat letih menahan diri seorang diri, jadi apa yang anda perlukan sekarang adalah **sesuatu untuk menyokong anda dan mengisi anda**. {favorable} melakukan itu. Menjaga perkara yang menyokong dekat bukanlah kelemahan dalam carta ini — ia adalah kaedah."
    }
  },
  "footer": {
    "privacy": "Privasi",
    "terms": "Terma",
    "refund": "Bayaran balik",
    "pricing": "Harga",
    "legalEntity": "Syarikat",
    "representative": "Wakil",
    "businessNumber": "Pendaftaran",
    "mailOrderNumber": "Jualan online",
    "address": "Alamat",
    "customerCenter": "Khidmat pelanggan",
    "email": "Email",
    "privacyOfficer": "Pegawai privasi",
    "hostingProvider": "Hosting",
    "providedBy": "Disediakan oleh",
    "effective": "Berkuat kuasa",
    "backHome": "Kembali ke laman utama"
  },
  "animals": {
    "rat": "Tikus",
    "ox": "Lembu",
    "tiger": "Harimau",
    "rabbit": "Arnab",
    "dragon": "Naga",
    "snake": "Ular",
    "horse": "Kuda",
    "goat": "Kambing",
    "monkey": "Monyet",
    "rooster": "Ayam Jantan",
    "dog": "Anjing",
    "pig": "Babi"
  },
  "elements": {
    "WOOD": "Kayu",
    "FIRE": "Api",
    "EARTH": "Tanah",
    "METAL": "Logam",
    "WATER": "Air"
  }
};
