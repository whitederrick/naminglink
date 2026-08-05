// 사주링크 화면 사전의 Indonesian (Bahasa Indonesia)(id) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **인연링크에서 물려받은 옛 번역을 되살린 것이 아니다.** 그 파일들은 궁합 서비스의 UI라,
// 되살리면 사주 화면에 궁합·인연이 다시 들어온다. 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const id: Dictionary = {
  "brand": "SajuLink",
  "tagline": "Empat Pilar Anda, dibaca dari tanggal lahir",
  "currentLanguage": "Bahasa saat ini",
  "moreLanguages": "Lainnya",
  "closeLanguages": "Tutup",
  "landing": {
    "title": "Delapan karakter\nyang Anda lahir dengan",
    "subtitle": "Yang Anda butuhkan hanyalah tanggal lahir.\nKami membangun grafik Saju (Empat Pilar) Anda, menimbang lima elemen dan membaca kekuatan dari day master Anda.",
    "cta": "Lihat Saju saya",
    "howTitle": "Cara kerjanya",
    "steps": [
      "Masukkan tanggal lahir Anda. Waktu lahir adalah opsional.",
      "Tahun, bulan, hari, dan jam kelahiran Anda menjadi delapan karakter — grafik natal Anda. Dari situ kami membaca berat masing-masing elemen dan kekuatan dari day master Anda.",
      "Pilar hari ini diletakkan terhadap grafik itu untuk memberikan keberuntungan hari ini juga."
    ],
    "privacyTitle": "Apa pun yang Anda masukkan tidak disimpan",
    "privacyBody": "Tanggal lahir hanya dipakai selama hasil dihitung dan tidak pernah dicatat. Tidak perlu akun. Tidak ada data yang dibawa tautan hasil yang dikirim ke server.",
    "disclaimer": "Ini adalah pembacaan Saju tradisional yang ditawarkan sebagai referensi. Ini bukan prediksi ilmiah atau keputusan tentang masa depan seseorang."
  },
  "form": {
    "title": "Tanggal lahir Anda",
    "description": "Mengetahui jam lahir membuat pembacaan lebih tajam, tetapi tidak wajib.",
    "meLegend": "Tentang Anda",
    "nickname": "Panggilan",
    "nicknamePlaceholder": "mis. Saya",
    "nicknameHint": "Hanya ditampilkan di layar hasil. Tidak dipakai dalam perhitungan.",
    "gender": "Jenis kelamin",
    "male": "Laki-laki",
    "female": "Perempuan",
    "genderUnspecified": "Tidak ingin menyebutkan",
    "genderHint": "Saju tradisional membaca posisi pasangan dan anak secara berbeda berdasarkan jenis kelamin. Jika Anda melewatkannya, faktor-faktor tersebut akan diabaikan dalam perhitungan.",
    "birthplace": "Tempat lahir",
    "birthplaceHint": "Pilar jam dihitung dari waktu matahari sejati di tempat lahir Anda. Jika tempat lahir Anda tidak terdaftar, pilih kota terdekat.\nDi daratan Korea, perbedaan antara kota-kota kurang dari dua menit. Waktu musim panas dan perubahan zona waktu historis juga diperhitungkan.",
    "calendar": "Kalender",
    "solar": "Masehi",
    "lunar": "Imlek",
    "leapMonth": "Bulan kabisat",
    "birthDate": "Tanggal lahir",
    "year": "Tahun",
    "month": "Bulan",
    "day": "Tanggal",
    "birthTime": "Jam lahir",
    "unknownTime": "Saya tidak tahu jamnya",
    "hour": "Jam",
    "minute": "Menit",
    "submit": "Tonton iklan dan lihat Saju saya",
    "submitNoAd": "Lihat Saju saya",
    "submitting": "Menghitung…",
    "errorInvalidDate": "Periksa kembali tanggal lahirnya. Untuk tanggal Imlek, periksa juga apakah jatuh pada bulan kabisat.",
    "errorGeneric": "Perhitungan gagal. Silakan coba lagi sebentar lagi."
  },
  "reading": {
    "chartTitle": "Grafik kelahiran Anda",
    "chartHint": "Saju menyajikan tahun, bulan, hari, dan jam kelahiran sebagai dua karakter masing-masing. Segala sesuatu di bawah ini dibaca dari delapan karakter ini.",
    "pillarYear": "Tahun",
    "pillarMonth": "Bulan",
    "pillarDay": "Hari",
    "pillarHour": "Jam",
    "pillarHourUnknown": "Tanpa jam lahir",
    "dayMasterLabel": "Penguasa hari",
    "animalLabel": "Shio",
    "seasonLabel": "Musim kelahiran",
    "elementsTitle": "Kekuatan unsur",
    "strongest": "Terkuat",
    "scarcest": "Paling tipis",
    "strengthTitle": "Apa yang Anda lahir dengan",
    "cautionTitle": "Hal yang perlu dicermati",
    "bodyStrengthTitle": "Kekuatan penguasa hari",
    "favorableLabel": "Yang Anda butuhkan sekarang"
  },
  "bodyStrength": {
    "STRONG": {
      "name": "Penguasa hari kuat",
      "body": "Unsur-unsur yang menopang penguasa hari Anda berlimpah. Itu memberi Anda daya dorong sendiri, tetapi juga mudah condong ke satu sisi — Anda justru merasa tenang ketika ada yang menarik kelebihannya keluar."
    },
    "BALANCED": {
      "name": "Penguasa hari seimbang",
      "body": "Yang menopang penguasa hari Anda dan yang menariknya keluar hampir setara. Terlalu berimbang untuk dipastikan ke salah satu sisi, jadi di sini yang paling tipislah yang dibaca sebagai kebutuhan Anda."
    },
    "WEAK": {
      "name": "Penguasa hari lemah",
      "body": "Unsur-unsur yang menopang penguasa hari Anda tipis. Anda pandai meminjam kekuatan dari sekitar, tetapi lekas lelah bila bertahan sendirian — Anda berkembang ketika ada yang menyokong."
    }
  },
  "tenGods": {
    "BIGYEON": {
      "name": "Rekan Sejajar (比肩)",
      "body": "Energi yang berdiri sejajar dengan Anda. Tebal, memberikan kekuatan untuk mempertahankan posisi Anda dan mengklaim bagian Anda terlebih dahulu."
    },
    "GEOPJAE": {
      "name": "Saingan (劫財)",
      "body": "Energi yang mirip dengan Anda tetapi bekerja dengan cara yang berbeda. Memberikan kekuatan untuk mendorong, tetapi jika berlebihan, apa yang Anda miliki cenderung menyebar."
    },
    "SIKSIN": {
      "name": "Ekspresi (食神)",
      "body": "Energi yang menarik apa yang ada di dalam diri Anda ke dunia luar. Ekspresi dan kesenangan sederhana dari hidup berasal dari sini; di mana ia berada, ada kenyamanan."
    },
    "SANGGWAN": {
      "name": "Pengusik (傷官)",
      "body": "Energi yang mengguncang kerangka yang tetap. Memberikan bakat dan ketajaman, tetapi jika berlebihan, bertabrakan dengan aturan dan peringkat."
    },
    "PYEONJAE": {
      "name": "Rezeki Tak Terduga (偏財)",
      "body": "Energi kekayaan yang luas. Aktif dan bebas dengan apa yang dimilikinya, membawa peluang dari tempat yang tidak terduga."
    },
    "JEONGJAE": {
      "name": "Rezeki Tetap (正財)",
      "body": "Energi kekayaan yang stabil, dikumpulkan sedikit demi sedikit. Saju tradisional juga membacanya sebagai posisi pasangan untuk seorang pria."
    },
    "PYEONGWAN": {
      "name": "Penantang (偏官)",
      "body": "Energi yang menjaga Anda tetap waspada dan tegak. Anda tumbuh kuat di bawah tekanan, meskipun jika berlebihan, Anda selalu merasa dikejar."
    },
    "JEONGGWAN": {
      "name": "Wibawa (正官)",
      "body": "Energi keteraturan yang mengatur Anda. Menjaga nama dan posisi Anda; Saju tradisional juga membacanya sebagai posisi pasangan untuk seorang wanita."
    },
    "PYEONIN": {
      "name": "Sokongan Tak Lazim (偏印)",
      "body": "Energi yang mendukung Anda melalui jalan yang tidak biasa. Memberikan kekuatan untuk menggali dalam, meskipun jika berlebihan, pikiran melampaui tindakan."
    },
    "JEONGIN": {
      "name": "Pengasuhan (正印)",
      "body": "Energi yang memeluk dan mengangkat Anda. Memberikan pembelajaran dan sesuatu untuk bersandar; jika berlebihan, memulai sendiri menjadi terlambat."
    }
  },
  "dayMasters": {
    "甲": {
      "name": "Kayu Yang (甲)",
      "trait": "Pohon tinggi yang tumbuh lurus. Begitu arah ditetapkan ia tidak goyah, dan lebih memilih bertahan daripada menekuk."
    },
    "乙": {
      "name": "Kayu Yin (乙)",
      "trait": "Sulur — rumput yang lentur. Ia melengkung mengikuti keadaan agar terus melaju, dan tidak patah."
    },
    "丙": {
      "name": "Api Yang (丙)",
      "trait": "Matahari tengah hari. Perasaan tampak apa adanya, ruangan menjadi terang, dan melangkah ke depan terasa wajar."
    },
    "丁": {
      "name": "Api Yin (丁)",
      "trait": "Cahaya lilin. Ia menyala pelan dan lama, serta menghangatkan yang terdekat lebih dulu."
    },
    "戊": {
      "name": "Tanah Yang (戊)",
      "trait": "Tanah lapang dan pegunungan. Sulit digoyahkan dan mudah dijadikan sandaran, meski lambat mengubah keputusan yang sudah diambil."
    },
    "己": {
      "name": "Tanah Yin (己)",
      "trait": "Tanah ladang. Ia menerima apa pun yang datang dan menumbuhkannya, lebih suka merawat daripada menonjolkan diri."
    },
    "庚": {
      "name": "Logam Yang (庚)",
      "trait": "Besi yang belum digarap. Tegas dan lugas, dengan sedikit kesabaran untuk hal yang dibiarkan menggantung."
    },
    "辛": {
      "name": "Logam Yin (辛)",
      "trait": "Permata yang telah diasah. Seleranya halus dan standarnya tinggi; kecerobohan sulit dibiarkan lewat."
    },
    "壬": {
      "name": "Air Yang (壬)",
      "trait": "Sungai dan laut. Luas cara pandangnya, dengan mata yang membaca ke mana keadaan mengalir."
    },
    "癸": {
      "name": "Air Yin (癸)",
      "trait": "Embun dan hujan. Ia meresap diam-diam dan membaca suasana sebelum kata-kata terucap."
    }
  },
  "dayMasterSigns": {
    "甲": [
      "Mengatakan apa yang dipikirkannya bahkan pada pertemuan pertama.",
      "Jarang mengubah rencana atau janji yang sudah ditetapkan.",
      "Menolak dengan lugas, sehingga bisa terdengar kaku."
    ],
    "乙": [
      "Menghindari benturan dan mengambil jalan lain.",
      "Tampak lembut, tetapi berakhir di tempat yang memang dituju.",
      "Membaca suasana dulu sebelum bergabung dengan kelompok."
    ],
    "丙": [
      "Menyapa lebih dulu orang yang baru dikenal.",
      "Suka dan tidak suka terlihat jelas di wajahnya.",
      "Berakhir di tengah keramaian tanpa berusaha."
    ],
    "丁": [
      "Pendiam pada awalnya, penuh perhatian setelah dekat.",
      "Lebih suka mengobrol lama dengan satu dua orang daripada di keramaian.",
      "Mengingat ucapan sepintas dan membawanya lagi di lain waktu."
    ],
    "戊": [
      "Sedikit bicara; suaranya jarang meninggi bahkan saat keadaan mendesak.",
      "Orang yang menuntaskan di akhir ketika yang lain menunda keputusan.",
      "Sekali berkata tidak, itu bertahan lama."
    ],
    "己": [
      "Lebih lama mendengarkan daripada berbicara.",
      "Sulit menolak, sehingga pekerjaan menumpuk padanya.",
      "Apa yang diam-diam ia urus baru terlihat belakangan."
    ],
    "庚": [
      "Memutuskan cepat dan mengatakannya saat itu juga.",
      "Tidak memperhalus ucapan, sehingga bisa terbaca dingin.",
      "Terlihat gelisah ketika sesuatu berlarut-larut."
    ],
    "辛": [
      "Punya standar yang jelas soal pakaian dan barang yang dipilihnya.",
      "Tidak bisa membiarkan pekerjaan setengah jadi lewat tanpa menegurnya.",
      "Pelit memuji, tetapi pasti begitu ia sungguh mengakui."
    ],
    "壬": [
      "Mudah berbaur dengan segala macam orang.",
      "Membicarakan hal yang jauh di depan sebelum yang ada di hadapannya.",
      "Gerah bila terlalu lama terikat di satu tempat."
    ],
    "癸": [
      "Sedikit bicara tetapi membaca keadaan dengan tepat.",
      "Paling awal menyadari saat suasana berubah.",
      "Menyimpan isi hatinya, jadi butuh waktu untuk mengenalnya."
    ]
  },
  "animalTraits": {
    "rat": "Cepat menangkap keadaan dan cepat mengamankan yang penting. Paling dulu bergerak saat krisis.",
    "ox": "Terlihat lambat tetapi selalu menuntaskan. Apa yang diambilnya, tidak dilepaskan.",
    "tiger": "Tak kenal takut dan berdiri paling depan. Tidak bisa membiarkan ketidakadilan lewat.",
    "rabbit": "Lembut dan peka. Tahu cara memutar alih-alih berbenturan.",
    "dragon": "Berhati luas dengan cita-cita tinggi. Jarang puas dengan yang biasa-biasa saja.",
    "snake": "Menyimpan pikirannya sendiri dan berpikir dalam. Penilaiannya tepat.",
    "horse": "Ceria dan tak bisa diam. Terkurung adalah hal terberat baginya.",
    "goat": "Hangat dan penuh tenggang rasa. Kata-kata kasar disimpannya lama.",
    "monkey": "Banyak akal dan cepat menyesuaikan diri. Bosan pada pengulangan.",
    "rooster": "Rajin dan teliti. Tidak bisa membiarkan sesuatu berantakan.",
    "dog": "Setia sampai akhir begitu kepercayaan diberikan. Pengkhianatan melukainya sangat dalam.",
    "pig": "Murah hati dan apa adanya. Mudah percaya, kadang dengan harga yang harus dibayar."
  },
  "result": {
    "title": "Pembacaan Saju Anda",
    "recalculate": "Mulai lagi",
    "copyLink": "Salin tautan hasil",
    "copied": "Tersalin",
    "missingInput": "Hasil ini tidak dapat dibaca. Silakan masukkan kembali tanggalnya.",
    "partialTime": "Jam lahir tidak diisi, jadi pilar jam dikeluarkan. Menambahkannya membuat pembacaan lebih tepat.",
    "engineVersion": "Dihitung dengan",
    "disclaimer": "Ini adalah pembacaan Saju tradisional yang ditawarkan sebagai referensi. Ini bukan prediksi ilmiah atau keputusan tentang masa depan Anda.",
    "seeToday": "Lihat ramalan hari ini",
    "seeReading": "Lihat bagan kelahiran Anda"
  },
  "today": {
    "menu": "Ramalan hari ini",
    "title": "Ramalan hari ini",
    "pillarLabel": "Pilar hari ini",
    "scoreLabel": "Skor hari ini",
    "grades": {
      "DAEGIL": {
        "name": "Sangat menguntungkan",
        "body": "Energi hari ini bertemu dengan bagan Anda di sudut terbaiknya. Hari yang baik untuk menyelesaikan hal-hal yang telah Anda tunda."
      },
      "GIL": {
        "name": "Menguntungkan",
        "body": "Aliran hari ini mendukung Anda. Apa yang biasanya Anda lakukan akan lebih mudah dari biasanya."
      },
      "PYEONG": {
        "name": "Seimbang",
        "body": "Tidak ada yang mendorong Anda dan tidak ada yang menghalangi Anda. Lakukan seperti biasanya dan Anda akan mendapatkan hasil yang biasa."
      },
      "JUUI": {
        "name": "Perhatikan",
        "body": "Beberapa energi hari ini bertentangan dengan bagan Anda. Lebih baik menghabiskan waktu untuk menyelesaikan hal-hal daripada memulai yang baru."
      },
      "JOSIM": {
        "name": "Berhati-hati",
        "body": "Energi hari ini menekan pada grafik Anda. Jika keputusan bisa ditunda, biarkan ditunda."
      }
    },
    "categories": {
      "wealth": "Uang",
      "love": "Cinta",
      "career": "Pekerjaan",
      "health": "Kesehatan"
    },
    "luckyTitle": "Simpan ini dekat hari ini",
    "luckyElement": "Elemen",
    "luckyColor": "Warna",
    "luckyDirection": "Arah",
    "luckyTime": "Jam",
    "luckyNumber": "Angka",
    "luckyColors": {
      "TEAL": "biru kehijauan",
      "GREEN": "hijau",
      "RED": "merah",
      "ORANGE": "oranye",
      "YELLOW": "kuning",
      "OCHRE": "kuning tanah",
      "WHITE": "putih",
      "GOLD": "emas",
      "BLACK": "hitam",
      "NAVY": "biru tua"
    },
    "luckyDirections": {
      "EAST": "Timur",
      "SOUTH": "Selatan",
      "CENTER": "Tengah",
      "WEST": "Barat",
      "NORTH": "Utara"
    },
    "basisTitle": "Dari mana skor ini berasal",
    "factors": {
      "TODAY_IS_YONGSIN": "Elemen hari ini adalah yang dibutuhkan oleh grafik Anda",
      "TODAY_GENERATES_YONGSIN": "Elemen hari ini memberi makan elemen yang dibutuhkan oleh grafik Anda",
      "TODAY_IS_GISIN": "Elemen hari ini mendorong lebih jauh sisi yang sudah penuh",
      "TODAY_CONTROLS_YONGSIN": "Elemen hari ini menahan elemen yang dibutuhkan oleh grafik Anda",
      "TODAY_GENERATES_SELF": "Elemen hari ini mendukung day master Anda",
      "TODAY_SAME_ELEMENT": "Elemen hari ini sama dengan day master Anda",
      "SELF_GENERATES_TODAY": "Day master Anda mengalir ke elemen hari ini",
      "TODAY_CONTROLS_SELF": "Elemen hari ini menahan day master Anda",
      "SELF_CONTROLS_TODAY": "Hari ini, day master Anda menahan elemen hari ini",
      "WEAK_HELPED": "Day master yang lemah diberikan kekuatan hari ini",
      "STRONG_OVERFED": "Day master yang kuat menjadi lebih berat hari ini",
      "STRONG_DRAINED": "Day master yang kuat ditarik ke keseimbangan yang lebih baik hari ini",
      "WEAK_BURDENED": "Day master yang lemah diberikan lebih banyak untuk dibawa hari ini",
      "BRANCH_SAMHAP": "Cabang hari ini membentuk trine penuh dengan bagan Anda",
      "BRANCH_BANHAP": "Cabang hari ini membentuk trine setengah dengan bagan Anda",
      "BRANCH_YUKHAP": "Cabang hari ini membentuk enam harmoni dengan bagan Anda",
      "BRANCH_SAME": "Cabang hari ini sama dengan salah satu di bagan Anda",
      "BRANCH_NEUTRAL": "Cabang hari ini tidak memiliki ikatan khusus dengan bagan Anda",
      "BRANCH_WONJIN": "Cabang hari ini duduk dalam ketidakselarasan tenang dengan bagan Anda",
      "BRANCH_CHUNG": "Cabang hari ini bertabrakan dengan bagan Anda"
    },
    "bookmarkHint": "Kami tidak menyimpan tanggal lahir Anda, jadi harus dimasukkan lagi setiap kali. **Bookmark tautan hasil ini** dan itu akan membuka keberuntungan hari itu setiap hari.",
    "disclaimer": "Keberuntungan hari ini mengubah hubungan antara pilar hari dan bagan Anda menjadi skor. Ini adalah catatan tentang bagaimana menghabiskan hari, bukan ramalan."
  },
  "ads": {
    "label": "Iklan"
  },
  "selfAds": {
    "label": "Layanan terkait",
    "comingSoon": "Segera hadir",
    "purposes": {
      "naminglink": "Nama Korea dan hanja yang dipilih berdasarkan arti dan jumlah goresan",
      "inyeonlink": "Bagaimana dua orang cocok, dibaca dari empat pilar dan tanda zodiak mereka",
      "sajulink": "Empat pilar Anda sendiri, dan bagaimana hari ini bertemu dengan mereka",
      "dreamslink": "Pembacaan mimpi yang diambil dari kamus simbol",
      "placelink": "Tempat untuk berkencan di Korea, dibagikan dan direkomendasikan"
    }
  },
  "analyzing": {
    "title": "Membangun grafik Anda",
    "quotes": [
      "Saju bukanlah jawaban yang tetap. Ini adalah satu bahasa untuk memahami diri Anda.",
      "Mengetahui apa yang Anda lahirkan dan menjalankannya adalah dua hal yang berbeda.",
      "Posisi yang kuat adalah masalah penggunaan; yang tipis, adalah masalah pengisian.",
      "Delapan karakter yang sama membuat hari yang berbeda tergantung pada bagaimana Anda membacanya.",
      "Lebih baik daripada menunggu hari baik adalah mengetahui cara menggunakan yang Anda miliki.",
      "Posisi yang orang sebut sebagai kelemahan biasanya adalah tempat di mana pertumbuhan terbesar terjadi.",
      "Beberapa energi didorong oleh musim; beberapa harus Anda buat sendiri.",
      "Apa yang lebih penting daripada skor adalah bagaimana Anda membacanya.",
      "Keberuntungan hari ini adalah cuaca untuk satu hari, bukan iklim tempat Anda tinggal.",
      "Mengetahui Saju Anda berarti melihat diri Anda, bukan melihat ke depan."
    ],
    "watching": "Sedang menonton iklan",
    "remaining": "Hasil Anda terbuka dalam {seconds} detik"
  },
  "reportDetail": {
    "depthTitle": "Melihat lebih dekat pada grafik Anda",
    "vitalityTitle": "Apa yang didorong oleh musim",
    "vitalityHint": "Batang menunjukkan seberapa banyak elemen yang ada; tabel ini menunjukkan apakah bulan kelahiran mendorongnya. Jumlah yang sama memiliki kekuatan berbeda di wang daripada di sa.",
    "vitalities": {
      "WANG": {
        "name": "Wang (旺)",
        "body": "pada kekuatan terkuatnya"
      },
      "SANG": {
        "name": "Sang (相)",
        "body": "berikutnya dalam kekuatan"
      },
      "HYU": {
        "name": "Hyu (休)",
        "body": "beristirahat setelah gilirannya"
      },
      "SU": {
        "name": "Su (囚)",
        "body": "tertekan, sulit untuk bergerak"
      },
      "SA": {
        "name": "Sa (死)",
        "body": "pada titik terlemah"
      }
    },
    "rawLabel": "Sebelum musim",
    "strengthLabel": "Setelah musim",
    "earthSeasonNote": "Lahir di bulan transisi (辰未戌丑), jadi tanah juga dihitung sebagai wang.",
    "allyRatioLabel": "Rasio sekutu",
    "allyRatioHint": "Bagian yang dipegang oleh bintang sumber dan teman yang digabungkan. Di atas 45% adalah kuat, di bawah 35% adalah lemah. Angka ini dicetak agar Anda dapat melihat seberapa dekat keputusan itu.",
    "stemGodsTitle": "Apa arti setiap pilar bagi Anda",
    "stemGodsHint": "Diukur dari day master Anda, setiap batang yang tersisa mengambil salah satu nama sepuluh dewa. Mana yang lebih tebal mengatakan banyak tentang temperamen.",
    "pillarColumn": "Pilar",
    "tenGodColumn": "Sepuluh dewa",
    "meaningColumn": "Apa artinya",
    "yearOutlookTitle": "Ramalan tahun ini",
    "domainsTitle": "Empat area kehidupan",
    "factorsTitle": "Dari mana skor hari ini berasal",
    "factorsHint": "Layar menyebutkan faktor-faktor; di sini masing-masing dicetak dengan poin yang ditambahkan atau dikurangi.",
    "deltaColumn": "Poin",
    "appendixTitle": "Bagaimana bagan ini dibuat",
    "timeCorrectionLabel": "Waktu lahir",
    "timeCorrectionApplied": "Dikoreksi ke waktu matahari sejati dan dibaca sebagai {time}.",
    "timeCorrectionNone": "Tidak ada waktu lahir yang diberikan, jadi pilar jam dikeluarkan.",
    "timeCorrectionDateShift": "Koreksi memindahkan tanggal ke {date}, sehingga pilar hari itu digunakan.",
    "calendarLabel": "Tanggal yang dipakai menyusun bagan",
    "solarLabel": "Masehi",
    "lunarLabel": "Imlek",
    "lunarUnavailable": "Tanggal ini tidak ada dalam tabel almanak, jadi tidak ada tanggal lunar yang ditampilkan."
  },
  "report": {
    "title": "Simpan pembacaan hidup Anda sebagai PDF",
    "body": "Kami mengubah pembacaan ini menjadi PDF — bagan kelahiran Anda, berat lima elemen, kekuatan day master Anda dan apa yang dibutuhkannya sekarang, serta keberuntungan hari ini, semuanya dalam satu halaman.",
    "buyButton": "Bayar {price} dan unduh",
    "preparing": "Belum tersedia",
    "ordering": "Membuat pesanan Anda…",
    "paying": "Memproses pembayaran…",
    "issuing": "Menyiapkan laporan Anda…",
    "done": "Sudah diunduh. Gunakan tombol di bawah untuk mengunduhnya lagi.",
    "failed": "Pembayaran atau unduhan gagal. Silakan coba lagi sebentar lagi.",
    "retry": "Unduh lagi",
    "contents": [
      "Day master dan temperamen Anda — ringkasan, kekuatan dan perhatian",
      "Bagan kelahiran Anda — delapan karakter dari empat pilar",
      "Berat lima elemen, yang paling tebal dan paling tipis",
      "Kekuatan day master Anda, dan energi yang dibutuhkannya sekarang",
      "Keberuntungan hari ini dan empat domain (uang, cinta, pekerjaan, kesehatan)"
    ],
    "consentLabel": "Saya memahami bahwa ini adalah konten digital yang diberikan segera setelah pembayaran, dan bahwa **pembatalan karena sekadar berubah pikiran menjadi terbatas begitu unduhan selesai**.",
    "consentRequired": "Harap konfirmasi ketentuan pembatalan sebelum membayar.",
    "productInfoTitle": "Informasi produk",
    "productInfo": [
      [
        "Penyedia",
        "{brand}"
      ],
      [
        "Format",
        "Satu dokumen PDF (5 halaman A4), diunduh di layar segera setelah pembayaran."
      ],
      [
        "Persyaratan",
        "Perangkat apa pun yang dapat membuka PDF. Tanpa instalasi atau akun."
      ],
      [
        "Masa penggunaan",
        "Tanpa batas. Berkas yang Anda unduh menjadi milik Anda."
      ],
      [
        "Unduh ulang",
        "Hingga lima kali pada pesanan yang sama. Kami tidak menyimpan salinannya, jadi berkas tidak dapat dibuat lagi setelah Anda meninggalkan layar hasil."
      ],
      [
        "Pembatalan",
        "Pengembalian dana penuh sebelum unduhan dimulai. Setelah unduhan selesai, pembatalan karena berubah pikiran menjadi terbatas (Pasal 17 ayat (2) Undang-Undang E-Commerce Korea)."
      ],
      [
        "Biaya pengembalian",
        "Tidak ada — konten digital, tidak ada yang dikirimkan."
      ]
    ],
    "refundContact": "Untuk pengembalian dana atau pertanyaan, hubungi layanan pelanggan atau email di bawah. Jika dokumen tidak dapat dibuat, atau jumlah yang ditagih berbeda dari pesanan, kami mengembalikan dana sepenuhnya.",
    "pdfLanguageNotice": "PDF dibuat dalam bahasa yang sama dengan layar ini."
  },
  "premiumReport": {
    "title": "Simpan bacaan premium Anda sebagai PDF",
    "body": "Segala sesuatu dalam bacaan kehidupan, ditambah **angka-angka di baliknya yang tidak pernah muncul di layar** — rasio sekutu yang menentukan kuat atau lemah, seberapa jauh bulan kelahiran mendorong setiap elemen, dan koreksi waktu-solar-nyata yang diterapkan pada jam kelahiran Anda.",
    "buyButton": "Bayar {price} dan unduh",
    "preparing": "Belum tersedia",
    "ordering": "Membuat pesanan Anda…",
    "paying": "Memproses pembayaran…",
    "issuing": "Mempersiapkan laporan Anda…",
    "done": "Diunduh. Gunakan tombol di bawah untuk mengunduhnya lagi.",
    "failed": "Pembayaran atau unduhan gagal. Silakan coba lagi dalam beberapa saat.",
    "retry": "Unduh lagi",
    "contents": [
      "Penguasa hari Anda dan temperamen — ringkasan, kekuatan dan perhatian",
      "Bagan kelahiran Anda — delapan karakter dari empat pilar",
      "Lima elemen, kekuatan dari day master Anda dan apa yang dibutuhkannya",
      "Ramalan hari ini dan empat domain (uang, cinta, pekerjaan, kesehatan)",
      "Apa arti setiap pilar bagi Anda — pembacaan ten gods dari bagan Anda",
      "Posisi musiman dan rasio sekutu — angka di balik keputusan",
      "Proyeksi tahun ini, faktor penilaian hari ini, dan koreksi waktu"
    ],
    "consentLabel": "Saya mengerti bahwa ini adalah konten digital yang disampaikan segera setelah pembayaran, dan bahwa **penarikan untuk perubahan pikiran yang sederhana dibatasi setelah unduhan selesai**.",
    "consentRequired": "Silakan konfirmasi syarat penarikan sebelum membayar.",
    "productInfoTitle": "Informasi produk",
    "productInfo": [
      [
        "Penyedia",
        "{brand}"
      ],
      [
        "Format",
        "Satu dokumen PDF (7 halaman A4), diunduh di layar segera setelah pembayaran."
      ],
      [
        "Persyaratan",
        "Perangkat apa pun yang dapat membuka PDF. Tidak perlu instalasi atau akun."
      ],
      [
        "Ketentuan penggunaan",
        "Tidak ada batasan. Anda menyimpan file yang Anda unduh."
      ],
      [
        "Unduh ulang",
        "Hingga lima kali pada pesanan yang sama. Kami tidak menyimpan salinan, jadi tidak dapat diproduksi lagi setelah Anda meninggalkan layar hasil."
      ],
      [
        "Penarikan",
        "Pengembalian penuh sebelum unduhan dimulai. Setelah selesai, penarikan karena perubahan pikiran dibatasi (Pasal 17(2), Undang-Undang E-Commerce Korea)."
      ],
      [
        "Biaya pengembalian",
        "Tidak ada — konten digital, tidak ada yang dikirim."
      ]
    ],
    "refundContact": "Untuk pengembalian dana atau pertanyaan, hubungi pusat layanan pelanggan atau email di bawah. Jika dokumen tidak dapat diproduksi, atau jumlah yang dibebankan berbeda dari pesanan, kami mengembalikan sepenuhnya.",
    "pdfLanguageNotice": "PDF diproduksi dalam bahasa yang sama dengan layar ini."
  },
  "fallbackReport": {
    "summary": "Seorang {dayMaster} yang lahir dalam energi {season}. Di seluruh bagan, {strongest} mengalir paling tebal dan {scarcest} mengalir paling tipis. Segala sesuatu di bawah ini mengikuti dari delapan karakter tersebut — setiap angka dan setiap pilar di sini dihitung, bukan dipilih.",
    "personality": "Day master Anda adalah {dayMaster} — energi {element} — dan bagan ini terbaca sebagai {strengthName}. Sisi mana yang lebih tebal, yang mendukung day master atau yang menarik darinya, adalah yang membentuk butirannya, dan dalam kehidupan sehari-hari ini muncul seperti ini.",
    "cautions": {
      "STRONG": [
        "Anda mendorong cukup keras sehingga Anda sering kali hanya menyadari kemiringan setelah itu terjadi.",
        "Bahkan di mana bantuan tersedia, Anda akhirnya menangani semuanya sendiri, yang membuat pekerjaan menjadi lebih besar.",
        "Segalanya akan settle ketika Anda memberi ruang untuk apa pun yang menarik kelebihan."
      ],
      "BALANCED": [
        "Tidak ada yang membuat Anda condong ke satu sisi, jadi keputusan yang ditunda hanya tetap ditunda.",
        "Anda beradaptasi dengan baik terhadap situasi, yang dapat memburamkan di mana garis Anda sendiri berada.",
        "Mengarah ke apa pun yang paling tipis saat ini memberi Anda arah untuk dipegang."
      ],
      "WEAK": [
        "Bertahan sendirian membuat Anda cepat lelah lebih dari yang Anda harapkan.",
        "Tanpa dukungan di belakang Anda, keputusan meluncur dan momen berlalu.",
        "Menjaga orang-orang yang mendukung dekat bukanlah kelemahan dalam bagan ini — itu adalah metode."
      ]
    },
    "scarcityCaution": "Elemen yang paling tipis saat ini adalah {scarcest}. Apa pun yang dikuasai elemen itu adalah tempat Anda paling lambat untuk bertindak.",
    "elementBalance": "Berdasarkan kekuatan, {strongest} memimpin di {strongestPct}% dan {scarcest} tertinggal di {scarcestPct}%. Bulan kelahiran Anda berada di {season}, yang mendorong elemen itu naik sekali lagi — jumlah yang sama memiliki kekuatan yang berbeda tergantung pada apakah musim mendukungnya. Apa yang Anda butuhkan sekarang adalah {favorable}, dan segalanya menjadi lebih mudah di mana elemen itu terisi.",
    "todayHeadline": "Hari ini terbaca sebagai {grade}",
    "todayMessage": "Hari ini mendapatkan skor {score}, dinilai {gradeName}. {gradeBody} Pilar hari ini adalah {pillar}, dan penggerak terbesar dalam skor itu adalah “{topFactor}”.",
    "todayAdvice": {
      "HIGH": "Hari yang baik untuk mengambil pesan atau merapikan yang telah Anda tunda — meskipun lebih baik tidak mencoba menyelesaikannya semua hari ini.",
      "MID": "Lakukan seperti biasanya dan Anda akan mendapatkan apa yang biasanya Anda dapatkan. Alih-alih memulai sesuatu yang baru, gerakkan satu hal yang sudah ada di tangan Anda satu langkah maju.",
      "LOW": "Beberapa hal hari ini bertentangan dengan bagan. Lebih baik dihabiskan untuk menyelesaikan dan memeriksa daripada memulai."
    },
    "luckyNote": "Elemen keberuntungan hari ini adalah {element}. Rentang {colors}, sisi {direction}, dan jam sekitar {time} adalah tempat energi itu paling kuat.",
    "domains": {
      "wealth": "Baca dari bagan natal, uang datang ke {score}. Ini mempertimbangkan apa yang diperoleh bersama dengan kekuatan untuk menanggungnya.",
      "love": "Baca dari bagan natal, kasih sayang datang ke {score}. Ini mempertimbangkan bintang pasangan bersama dengan bentuk tempatnya.",
      "career": "Baca dari bagan natal, pekerjaan datang ke {score}. Ini mempertimbangkan apa yang Anda ambil bersama dengan apa yang Anda keluarkan.",
      "health": "Baca dari bagan natal, kesehatan datang ke {score}. Ini mempertimbangkan keseimbangan yang Anda lahirkan bersama dengan apa yang bertabrakan di dalamnya."
    },
    "yearOutlook": "Pilar tahun ini adalah {pillar}, membawa {element}. {relation} Pembacaan ini hanya melihat bagaimana pilar tahun ini bertemu dengan apa yang Anda butuhkan sekarang; tidak membagi tahun ini bulan per bulan.",
    "yearRelations": {
      "YONGSIN": "Elemen yang Anda butuhkan datang langsung tahun ini. Waktu yang tepat untuk mengeluarkan apa yang telah Anda sisihkan.",
      "GENERATES": "Tahun ini memberi makan elemen yang Anda butuhkan, sehingga keadaan saat ini menjadi lebih lembut — tidak sekaligus, tetapi secara bertahap.",
      "GISIN": "Tahun ini mendorong sekali lagi ke arah yang sudah Anda tuju. Lebih baik menghabiskan apa yang ada di tangan daripada membuka sesuatu yang baru.",
      "CONTROLS": "Sesuatu tahun ini menekan elemen yang Anda butuhkan, sehingga keputusan datang lebih lambat. Menetapkan tenggat waktu sendiri membantu.",
      "NEUTRAL": "Tahun ini tidak bertabrakan dengan atau memberi makan apa yang Anda butuhkan. Mempertahankan posisi yang Anda miliki adalah perdagangan yang lebih baik."
    },
    "disclaimer": "Referensi tradisional myeongri, bukan prediksi ilmiah atau pernyataan tentang apa yang harus terjadi.",
    "tenGodDepth": {
      "BIGYEON": {
        "thick": "Bi-kyun sangat kuat. Anda membangun dengan tangan Anda sendiri daripada meminjam, yang membuat Anda kuat dalam menyelesaikan tugas hingga akhir. Namun menerima bantuan juga merupakan keterampilan, dan menganggapnya sebagai kelemahan membuat Anda menanggung semuanya sendirian — dan bertabrakan, atas pembagian, dengan siapa pun yang berdiri di samping Anda. Di mana pekerjaan dibagi, menawarkan tangan Anda terlebih dahulu ternyata menjadi jalan yang lebih cepat.",
        "absent": "Bi-kyun tidak ada. Bergerak dengan orang lain lebih cocok untuk Anda daripada mempertahankan posisi Anda sendiri. Anda ragu lama ketika keputusan ada di tangan Anda sendiri, dan mempercepat ketika seseorang terlibat. Ketika posisi adalah milik Anda untuk dipegang, penting untuk berlatih mendorong."
      },
      "GEOPJAE": {
        "thick": "Geopjae sangat kuat. Anda bergerak lebih dulu di tempat orang lain ragu. Kekuatan itu tidak mudah beralih untuk mempertahankan, jadi apa yang Anda peroleh tidak bertahan lama di tangan. Menentukan sebelumnya ke mana uang pergi bukanlah penghematan dalam bagan ini — itu adalah metode.",
        "absent": "Geopjae tidak ada. Anda jarang memaksa sesuatu dan Anda menghindari kontes. Anda kehilangan sedikit, tetapi Anda terlambat satu langkah ketika sesuatu harus didorong keras. Di mana taruhannya nyata, menetapkan tenggat waktu sendiri membantu."
      },
      "SIKSIN": {
        "thick": "Siksin sangat kuat. Apa yang ada di dalam keluar dengan mudah, jadi membuat, menumbuhkan, dan memberi makan adalah tanah yang nyaman. Anda melakukan dengan baik dalam pekerjaan yang dilakukan perlahan dan lama, dan hasilnya datang terlambat tetapi secara bertahap. Namun, ketika kenyamanan berlanjut, Anda lebih memilih untuk menetap daripada memperluas.",
        "absent": "Siksin tidak ada. Saluran dari dalam ke luar sangat tipis: pemikirannya ada, tetapi penyampaiannya terlambat. Menunggu hingga semuanya siap mendorong awal kembali. Mengeluarkan sesuatu yang setengah jadi bukanlah kerugian dalam bagan ini."
      },
      "SANGGWAN": {
        "thick": "Pejabat yang Menyakitkan berjalan tebal. Anda melihat apa yang tidak pada tempatnya dalam kerangka tetap sebelum orang lain, dan Anda memiliki kata-kata untuk menyebutnya. Anda bersinar di tempat-tempat yang sedang dibuat dan Anda bertabrakan di tempat-tempat yang sedang dijaga. Bagaimana hal yang benar diungkapkan sama pentingnya di sini seperti melihatnya.",
        "absent": "Pejabat yang Menyakitkan tidak ada. Anda mencari cara melalui kerangka daripada mengguncangnya. Anda jarang bertabrakan dengan orang, tetapi Anda membiarkan hal-hal berlalu di mana seharusnya ada perubahan, dan itu berujung pada frustrasi. Lebih baik tidak menunda kata yang harus diucapkan."
      },
      "PYEONJAE": {
        "thick": "Kekayaan Tidak Langsung berjalan tebal. Anda menjaga tangan di beberapa tempat dan menangkap peluang secara luas, sehingga hal-hal terbuka di sudut-sudut yang tidak terduga. Namun, apa yang tersebar juga harus dirawat, dan merawat kurang menarik bagi Anda — sehingga Anda terus gagal mengumpulkan apa yang telah Anda buka. Menutup satu sebelum membuka yang berikutnya adalah urutan yang dibutuhkan oleh bagan ini.",
        "absent": "Kekayaan Tidak Langsung tidak ada. Anda mengambil hal yang pasti di tanah yang familiar daripada menyebar luas. Ada lebih sedikit yang mengguncang Anda, dan Anda sering melihat peluang besar berlalu. Memperluas jangkauan Anda satu jengkal pada satu waktu membantu."
      },
      "JEONGJAE": {
        "thick": "Kekayaan Langsung berjalan tebal. Anda menghitung apa yang masuk dan apa yang keluar, dan Anda membangun — sehingga tanah di bawah Anda menguat seiring waktu. Menggapai hanya untuk hal yang pasti membuat Anda terlambat untuk peluang, dan penghematan yang terlalu jauh membuat tangan Anda berat di tempat yang seharusnya terbuka. Memutuskan sebelumnya untuk apa uang itu membantu.",
        "absent": "Kekayaan Langsung tidak ada. Sisi akumulasi yang stabil berjalan tipis, sehingga mengelola apa yang tiba terus tertunda. Menghasilkan dan menjaga adalah keterampilan yang berbeda; bagan ini harus belajar yang kedua secara terpisah. Aturan yang memindahkan uang tanpa keputusan Anda setiap kali cocok untuk Anda."
      },
      "PYEONGWAN": {
        "thick": "Pejabat Tidak Langsung berjalan tebal. Tekanan mengeluarkan kekuatan Anda, dan Anda memikul tanggung jawab yang dianggap berat oleh orang lain. Namun, ketika ketegangan tidak pernah terangkat, itu mengeras menjadi perasaan tertekan dan istirahat tidak terasa seperti istirahat. Menetapkan waktu untuk berhenti bukanlah kemalasan dalam bagan ini.",
        "absent": "Pejabat Tidak Langsung tidak ada. Sedikit yang menekan Anda, yang membuat pikiran lebih tenang, tetapi kekuatan untuk menjaga diri Anda tetap tegak dalam krisis berjalan tipis. Anda jauh lebih baik ketika tenggat waktu atau janji ditetapkan dari luar."
      },
      "JEONGGWAN": {
        "thick": "Pejabat Langsung berjalan tebal. Posisi Anda dan garis yang Anda jaga jelas, dan menjaga mereka adalah sumber keteguhan Anda — Anda membangun kepercayaan di dalam sistem. Di mana aturan goyah, Anda lambat untuk menilai, dan di mana papan adalah milik Anda untuk diatur, Anda merasa tertekan.",
        "absent": "Pejabat Langsung tidak ada. Cara yang Anda buat sendiri lebih cocok untuk Anda daripada tempat yang ditetapkan dari luar. Itu adalah kebebasan, tetapi standar mudah goyah; menulis aturan Anda sendiri seolah-olah itu adalah kebijakan membantu."
      },
      "PYEONIN": {
        "thick": "Sumber Tidak Langsung berjalan tebal. Anda pergi ke jalan yang dihindari orang lain dan membangun kedalaman Anda sendiri. Pembelajaran dan penimbangan kuat, tetapi pikiran melampaui tangan dan Anda bisa merasa lelah sebelum Anda mulai. Bergerak setengah siap cocok untuk bagan ini.",
        "absent": "Sumber Tidak Langsung tidak ada. Anda belajar dengan bertabrakan dengan hal-hal daripada menggali. Anda tidak lambat untuk belajar, tetapi belajar yang dilakukan sendiri dalam waktu lama tidak cocok untuk Anda. Bertanya kepada orang dan belajar di lapangan lebih cepat."
      },
      "JEONGIN": {
        "thick": "Sumber Langsung sangat tebal. Apa yang menopangmu melimpah, sehingga belajar dan tempat bersandar tidak pernah habis. Keteguhan itu membuat langkah maju terlambat, dan persiapan menjadi alasan untuk menunda awal. Menyimpan satu tempat di mana apa yang kamu terima kembali dikeluarkan adalah hal yang berharga.",
        "absent": "Sumber Langsung tidak ada. Kamu telah membuat pijakanmu sendiri, sehingga berdiri sendiri tumbuh lebih awal. Meminta bantuan terasa asing, meskipun kamu bisa melakukannya. Dalam bagan ini, meminta sangat berharga."
      }
    },
    "natalFactors": {
      "WEALTH_STARS": "Seberapa banyak kekayaan (財星) yang dibawa bagan — ketebalan apa yang kamu tangani dan kumpulkan.",
      "WEALTH_STRONG_BODY": "Hari master berjalan penuh, sehingga ada kekuatan untuk membawa kekayaan.",
      "WEALTH_WEAK_BODY": "Hari master berjalan tipis, sehingga kekayaan sulit dibawa bahkan jika ada.",
      "WEALTH_YONGSIN": "Apa yang kamu butuhkan sekarang adalah elemen yang sama dengan bintang kekayaan, sehingga tanah itu lebih mudah didapat.",
      "LOVE_SPOUSE_STAR": "Seberapa banyak bintang pasangan yang dibawa bagan — kekayaan langsung untuk pria, pejabat langsung untuk wanita.",
      "LOVE_SPOUSE_PALACE": "Bintang pasangan berada di dalam cabang harimu, istana pasangan, sehingga tempat itu terisi.",
      "LOVE_PALACE_CHUNG": "Istana pasangan bertabrakan dengan cabang lain, sehingga tempat itu tidak stabil.",
      "LOVE_GENDER_UNKNOWN": "Tidak ada gender yang dimasukkan, sehingga bintang pasangan tidak dihitung. Nilai dibagi antara bintang kekayaan dan pejabat berdasarkan gender, dan kami tidak memilih satu secara sembarangan.",
      "CAREER_OFFICER": "Bintang pejabat (正官·偏官) dalam bagan — ketebalan apa yang kamu ambil dan simpan.",
      "CAREER_OUTPUT": "Bintang output (食神·傷官) dalam bagan — ketebalan apa yang kamu keluarkan dan ungkapkan.",
      "CAREER_STRONG_BODY": "Hari penguasa berjalan penuh, jadi ia menggunakan bintang pejabat daripada ditekan oleh mereka.",
      "HEALTH_BALANCE": "Seberapa merata lima elemen duduk — semakin condong ke satu sisi, semakin banyak tekanan jatuh pada apa yang dikuasai elemen itu.",
      "HEALTH_CHUNG": "Berapa banyak pasangan cabang yang bertabrakan di dalam bagan.",
      "HEALTH_EXTREME_BODY": "Hari penguasa condong keras ke satu sisi, yang merupakan beban itu sendiri. Hari penguasa yang seimbang tidak kehilangan apa pun di sini."
    },
    "yongsinDepth": {
      "STRONG": "Elemen yang mendukung day master Anda berjalan penuh. Itu memberi Anda dorongan sendiri tetapi mudah condong ke satu sisi, jadi apa yang Anda butuhkan sekarang bukan lebih banyak dukungan — itu adalah sesuatu untuk mengalihkan kelebihan. {favorable} melakukan itu. Di mana elemen itu mencapai — mengeluarkan, mengambil, mengumpulkan — adalah tempat Anda menetap.",
      "BALANCED": "Apa yang mendukung day master Anda dan apa yang menarik darinya duduk dekat dengan seimbang. Terlalu dekat untuk dipanggil salah satu cara, jadi di sini kita membaca apa pun yang paling tipis sebagai apa yang Anda butuhkan: {favorable}. Sebuah bagan yang tidak condong beradaptasi dengan baik tetapi memburamkan garisnya sendiri, jadi mengarahkan ke tempat yang tipis memberi Anda arah untuk dipegang.",
      "WEAK": "Elemen yang mendukung day master Anda berjalan tipis. Anda meminjam kekuatan dari sekitar Anda dengan baik tetapi cepat lelah saat bertahan sendiri, jadi apa yang Anda butuhkan sekarang adalah sesuatu untuk mendukung Anda dan mengisi Anda. {favorable} melakukan itu. Menjaga hal-hal yang mendukung dekat bukanlah kelemahan dalam bagan ini — itu adalah metode."
    }
  },
  "footer": {
    "privacy": "Privasi",
    "terms": "Ketentuan",
    "refund": "Refund",
    "pricing": "Harga",
    "legalEntity": "Perusahaan",
    "representative": "Perwakilan",
    "businessNumber": "Registrasi",
    "mailOrderNumber": "Perdagangan online",
    "address": "Alamat",
    "customerCenter": "Layanan pelanggan",
    "email": "Email",
    "privacyOfficer": "Petugas privasi",
    "hostingProvider": "Hosting",
    "providedBy": "Disediakan oleh",
    "effective": "Berlaku",
    "backHome": "Kembali ke beranda"
  },
  "animals": {
    "rat": "Tikus",
    "ox": "Kerbau",
    "tiger": "Macan",
    "rabbit": "Kelinci",
    "dragon": "Naga",
    "snake": "Ular",
    "horse": "Kuda",
    "goat": "Kambing",
    "monkey": "Monyet",
    "rooster": "Ayam",
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
