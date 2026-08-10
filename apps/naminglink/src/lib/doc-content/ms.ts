import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

/** Bahasa Melayu — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const MS_DOCS = {
  "about": {
    "eyebrow": "Tentang",
    "title": "Tentang Naming-Link",
    "summary": "Kami membantu anda memilih dan memahami nama Korea. Berikut adalah apa yang kami berdasarkan hasil kami, dan apa yang kami sengaja tidak lakukan.",
    "backLabel": "Laman Utama",
    "sections": [
      {
        "title": "Apa yang kami lakukan",
        "blocks": [
          {
            "p": "Naming-Link membantu anda **memilih dan memahami nama Korea** — hanja di sebalik nama seorang kanak-kanak, nama Korea untuk digunakan di luar negara, ejaan Hangul nama anda sendiri, dan kenang-kenangan seperti cap atau laporan bercetak."
          },
          {
            "p": "Melihat hasil anda adalah **percuma dan tidak memerlukan akaun.** Item berbayar tidak pernah menjual semula apa yang sudah ditunjukkan di skrin: mereka membuka lebih banyak calon, menambah analisis bertulis, atau mengubah hasil menjadi sesuatu yang boleh anda simpan."
          }
        ]
      },
      {
        "title": "Untuk siapa setiap perkhidmatan",
        "blocks": [
          {
            "p": "Terdapat dua jenis perkhidmatan di sini: satu untuk orang yang **sudah mempunyai nama Korea**, dan satu untuk orang yang **memerlukan satu**. Mereka memerlukan perkara yang berbeza daripada anda, jadi mereka ditawarkan dalam bahasa yang berbeza."
          },
          {
            "ul": [
              "**Ditawarkan dalam bahasa anda** — menulis nama anda sendiri dalam Hangul, dan membina nama Korea. Ini adalah untuk orang tanpa nama Korea, jadi mereka mengikuti bahasa yang anda tiba.",
              "**Ditawarkan hanya dalam bahasa Korea** — mencari nama-hanja untuk seorang kanak-kanak, dan mengubah nama Korea menjadi satu untuk digunakan di luar negara. Kedua-duanya memerlukan **nama Hangul yang sedia ada** untuk berfungsi, jadi skrin dan panduan mereka kekal dalam bahasa Korea."
            ]
          }
        ]
      },
      {
        "title": "Apa yang menjadi asas jawapan kami",
        "blocks": [
          {
            "p": "Hanja berasal dari **jadual nama-hanja rasmi Mahkamah Agung Korea.** Setiap karakter mempunyai bacaan tetap untuk digunakan dalam nama, dan karakter di luar jadual tidak boleh didaftarkan. Kami tidak menambah senarai itu atau memilih kegemaran."
          },
          {
            "p": "Saju dan angka lima elemen dikira dari **kalendar lunisolar Korea**, dengan waktu kelahiran diperbetulkan kepada waktu solar sebenar untuk tempat kelahiran. Bacaan adalah rujukan tradisional, bukan ramalan."
          },
          {
            "p": "Penjelasan bertulis dihasilkan oleh AI. Untuk mengelakkan ia **mencipta perkara**, model hanya diberikan input anda dan data rujukan kami sendiri, dan diberitahu untuk kekal di dalamnya. Panduan menerangkan ini dengan terperinci."
          }
        ]
      },
      {
        "title": "Apa yang kami tidak lakukan",
        "blocks": [
          {
            "ul": [
              "**Kami tidak meramal nasib.** Tiada apa di sini yang menjanjikan nasib baik, kekayaan atau perlindungan.",
              "**Kami tidak menyimpan nama anda.** Hasil percuma tidak pernah ditulis ke pelayan kami, dan dokumen berbayar dihantar tanpa menyimpan salinan fail.",
              "**Membayar tidak membeli jawapan yang lebih baik.** Membuka dengan iklan dan membuka dengan pembayaran memberikan kandungan yang sama."
            ]
          }
        ]
      },
      {
        "title": "Di mana data dan terjemahan kami berdiri",
        "blocks": [
          {
            "p": "**Kami lebih suka menyatakan ini dengan jelas.** Memberitahu anda apa yang diperiksa oleh seseorang dan apa yang tidak diperiksa oleh sesiapa lebih berguna daripada mendakwa semuanya telah disemak."
          },
          {
            "ul": [
              "**Data nama-hanja** — jadual nama-hanja {publisher}, pada {effectiveDate}. Kami menyimpan hash fail sumber, jadi jika jadual berubah kami dapat memberitahu apa yang berubah.",
              "**Dikompilasi oleh** Platforest. Karakter, bacaan dan makna dibawa dari jadual seperti adanya; kami tidak menambah atau mengeluarkan.",
              "**Terjemahan** — ditulis pertama dalam bahasa Korea, kemudian bahasa Inggeris, kemudian bahasa lain. **Ini adalah terjemahan mesin, diperiksa secara automatik** — untuk ayat yang hilang, terminologi yang konsisten, dan nilai yang dimasukkan tetap utuh. Mereka tidak telah disemak oleh penutur asli.",
              "**Penjelasan bertulis** dihasilkan oleh AI, terhad kepada input anda dan data rujukan kami sendiri supaya ia tidak mencipta fakta."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Perkhidmatan ini tersedia dalam 23 bahasa. PDF berbayar dikeluarkan dalam bahasa Inggeris untuk bahasa Arab dan Khmer — pemapar PDF tidak menyokong skrip tersebut — dan kami menyatakannya di skrin sebelum anda membayar."
          }
        ]
      },
      {
        "title": "Hubungi",
        "blocks": [
          {
            "p": "Butiran syarikat dan cara untuk menghubungi kami terdapat di [halaman hubungan](/contact), termasuk pengembalian, permintaan privasi dan laporan kesilapan."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Bagaimana Naming-Link berfungsi",
    "title": "Apa yang kami berdasarkan nama anda",
    "summary": "Bagaimana kami memilih nama keluarga Korea, apa yang kami semak sebelum mencadangkan nama tertentu, dan bagaimana kami menulis nama anda dalam Hangul — dengan bahagian yang kami sengaja tinggalkan.",
    "backLabel": "Panduan",
    "sections": [
      {
        "title": "",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal}",
                "label": "karakter nama-hanja"
              },
              {
                "value": "{syllableCount}",
                "label": "suku kata Hangul yang diliputi"
              },
              {
                "value": "{effectiveDate}",
                "label": "tarikh berkuatkuasa jadual"
              },
              {
                "value": "{avoidTotal}",
                "label": "karakter yang secara tradisional dielakkan"
              }
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Panduan di bawah merangkumi perkhidmatan yang ditawarkan dalam bahasa anda. Naming-Link juga mempunyai dua perkhidmatan untuk orang yang **sudah mempunyai nama Korea** — mencari nama-hanja untuk seorang kanak-kanak, dan mengubah nama Korea menjadi satu untuk digunakan di luar negara. Kedua-duanya memerlukan nama Hangul yang sedia ada, jadi kedua-dua perkhidmatan dan panduan mereka adalah dalam bahasa Korea."
          },
          {
            "p": "[Tentang](/about) menerangkan perkhidmatan mana untuk siapa."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Bagaimana ia berfungsi",
    "title": "Bagaimana kami mengeja nama anda dalam Hangul",
    "summary": "Bagaimana kami memilih bunyi ketika menulis nama asing dalam Hangul, dan mengapa kami tidak melampirkan hanja.",
    "backLabel": "Panduan",
    "sections": [
      {
        "title": "Kami membawa bunyi, bukan makna",
        "blocks": [
          {
            "p": "Perkhidmatan ini menulis **nama anda** dalam Hangul. Ia tidak memberikan anda nama Korea. Michael menjadi 마이클 — nama yang sama, ditulis supaya orang Korea boleh membacanya dan mengatakannya. Kami tidak menukarnya kepada nama Korea yang kebetulan bermakna sesuatu yang serupa."
          },
          {
            "p": "Jika nama Korea adalah apa yang anda inginkan, **itu adalah perkhidmatan yang berbeza.** Satu mengekalkan nama anda dan hanya mengubah skrip; yang lain mencadangkan nama baru."
          }
        ]
      },
      {
        "title": "Bunyi yang tidak ada dalam bahasa Korea",
        "blocks": [
          {
            "p": "Setiap bahasa mempunyai bunyi yang tidak ada dalam bahasa Korea — f, v, z, th, dan perbezaan vokal yang tidak dibuat oleh bahasa Korea. Untuk bunyi-bunyi tersebut, kami menulis apa yang **sebenarnya diucapkan oleh penutur Korea** ketika mereka membaca nama anda dengan kuat, bukannya mentranskripsikan fonetik asal satu demi satu. Matlamatnya adalah ejaan yang akan digunakan, bukan yang paling teknikal setia."
          },
          {
            "p": "Ejaan yang sama boleh berbeza bergantung kepada asal nama, jadi kami meminta bahasa dan negara anda dan bekerja dari sebutan itu."
          }
        ]
      },
      {
        "title": "Beberapa ejaan, berdampingan",
        "blocks": [
          {
            "p": "Tiada jawapan yang tepat. Ejaan yang paling dekat dengan bunyi asal, yang paling biasa digunakan di Korea, dan yang paling mudah ditulis sering kali adalah tiga perkara yang berbeza. Jadi kami menunjukkan semuanya bersama dan menyatakan apa yang memisahkan mereka."
          },
          {
            "p": "Jika tiada satu pun yang terasa betul, anda boleh menambah petunjuk tentang bunyi yang anda inginkan dan menjalankannya semula — contohnya, bahawa suku kata tertentu harus ditulis dengan cara yang berbeza."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tiada hanja di sini",
        "blocks": [
          {
            "p": "Kami tidak melampirkan hanja kepada transliterasi. Hanja membawa makna, dan aliran ini adalah tentang bunyi. Memadankan watak dengan bunyi sahaja boleh menyebabkan anda mendapat makna yang tidak pernah anda minta."
          }
        ]
      },
      {
        "title": "Ini berjalan ke arah yang bertentangan dengan romanisasi pasport",
        "blocks": [
          {
            "p": "Kedua-duanya mudah untuk dikelirukan, jadi inilah perbezaannya: **ia berjalan dalam arah yang bertentangan.**"
          },
          {
            "ul": [
              "**Romanisasi** mengambil nama Hangul seseorang dari Korea dan menulisnya dalam abjad Latin. Ia tetap apabila pasport dikeluarkan, dan dari situ tiket, visa dan akaun bank semua mengikuti ejaan itu. 김민준 menjadi Kim Minjun.",
              "**Transliterasi Hangul** — apa yang dilakukan oleh perkhidmatan ini — berjalan ke arah yang lain. Ia mengambil nama yang ditulis dalam abjad Latin dan menulis bagaimana bunyinya dalam Hangul. Daniel menjadi 대니얼."
            ]
          },
          {
            "p": "Jadi apa yang anda dapat di sini **tidak mengubah ejaan dalam pasport anda.** Romanisasi itu sudah tetap; ini adalah nama yang ditulis semula dalam Hangul. Kedua-duanya tidak selalu bertukar kembali ke satu sama lain dengan tepat — menulis bunyi yang tidak ada dalam bahasa Korea kehilangan sedikit maklumat dalam proses."
          }
        ]
      },
      {
        "title": "Di mana anda akan menggunakan ejaan ini",
        "blocks": [
          {
            "p": "Ejaan Hangul biasanya diperlukan di tempat-tempat seperti ini."
          },
          {
            "ul": [
              "**Memperkenalkan diri** — menunjukkan nama anda dalam Hangul, atau mengatakannya dalam bahasa Korea",
              "**Medan nama Hangul pada borang** — pendaftaran dan permohonan yang meminta nama anda dalam Hangul. Perhatikan bahawa **institusi memutuskan apa yang terdapat dalam dokumen rasmi** — apa yang anda dapat di sini tidak menggantikan itu",
              "**Cap nama atau cenderahati** — ejaan untuk diukir"
            ]
          },
          {
            "p": "**Adalah normal untuk lebih daripada satu ejaan boleh dipertahankan.** Apabila nama boleh ditulis dengan beberapa cara dalam Hangul, kami menunjukkan mereka berdampingan dan membiarkan pilihan kepada anda."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Bagaimana ia berfungsi",
    "title": "Bagaimana kami membina nama Korea",
    "summary": "Kami memilih daripada nama keluarga yang wujud, menilai seberapa mudah nama itu diucapkan dan ditulis, dan bertanya untuk apa nama itu.",
    "backLabel": "Panduan",
    "sections": [
      {
        "title": "Kami bermula dengan nama keluarga",
        "blocks": [
          {
            "p": "Di Korea, nama keluarga datang dahulu, dan tidak seperti nama yang diberikan, ia tidak dicipta secara bebas — anda mewarisinya. Jadi kami hanya mencadangkan nama keluarga yang sebenarnya dimiliki oleh orang Korea. Kumpulan default kami adalah **20 nama keluarga yang paling biasa**, yang bersama-sama merangkumi kira-kira 80% daripada populasi."
          },
          {
            "p": "Jika nama keluarga anda kebetulan sepadan dengan nama Korea yang sebenar dari segi bunyi — Wang dengan 왕, Ye dengan 예 — kami meletakkan yang itu dahulu. Menjaga hubungan kembali kepada nama asal anda lebih berharga daripada nama keluarga yang dipilih secara rawak."
          },
          {
            "p": "Anda boleh memilih nama keluarga sendiri atau membiarkan kami mencadangkan satu. Dalam apa jua keadaan, ia akan menjadi **nama keluarga yang wujud**."
          }
        ]
      },
      {
        "title": "Terdapat dua puluh enam nama keluarga untuk dipilih",
        "blocks": [
          {
            "p": "Kami menyimpan senarai ini sempit dengan sengaja. **Nama keluarga Korea benar-benar tertumpu** — Kim, Lee dan Park sahaja menyumbang kira-kira 45% daripada populasi, dan dua puluh teratas untuk kira-kira 80%. Menambah nama keluarga yang jarang akan meluaskan menu, tetapi ia juga akan menghasilkan nama yang tidak didengar oleh orang Korea sebagai nama."
          },
          {
            "ul": [
              "**Dua puluh yang paling biasa** (kira-kira 80% daripada populasi) — 김 Kim · 이 Lee · 박 Park · 최 Choi · 정 Jung · 강 Kang · 조 Cho · 윤 Yoon · 장 Jang · 임 Lim · 한 Han · 오 Oh · 서 Seo · 신 Shin · 권 Kwon · 황 Hwang · 안 Ahn · 송 Song · 전 Jeon · 홍 Hong",
              "**Nama keluarga sebenar ditambah untuk mengekalkan hubungan bunyi** — 왕 Wang · 진 Jin · 백 Baek · 마 Ma · 나 Na · 유 Yoo"
            ]
          },
          {
            "p": "Kumpulan kedua wujud supaya **nama keluarga anda sendiri boleh dibawa oleh bunyi**. Wang, Jin, Baek, Ma, Na dan Yoo adalah nama keluarga yang sudah dimiliki oleh orang Korea, jadi menyebut nama anda mengekalkan hubungan dengan nama yang anda mulakan. Semua dua puluh enam adalah nama keluarga yang benar-benar digunakan — tiada satu pun daripada mereka adalah ciptaan kami."
          }
        ]
      },
      {
        "title": "Mudah diucapkan, mudah ditulis",
        "blocks": [
          {
            "p": "Ini adalah nama yang akan dipanggil oleh orang di Korea, jadi perkara pertama yang kami periksa adalah sama ada orang Korea boleh mendengarnya sekali dan menulisnya. Nama yang perlu dieja setiap kali adalah beban yang anda tanggung, bukan kami."
          },
          {
            "p": "Makna juga penting. Nama yang diberikan dalam bahasa Korea biasanya membawa satu, jadi kami memberitahu anda apa nama itu dibaca dan mengapa kami memilihnya — bukan hanya nama itu sendiri."
          }
        ]
      },
      {
        "title": "Kami bertanya untuk apa nama itu",
        "blocks": [
          {
            "p": "Nama untuk kertas kerja universiti tidak sama dengan nama yang akan dilaungkan oleh rakan-rakan di seberang bilik, atau nama yang akan anda gunakan dalam talian. Kami bertanya bagaimana anda merancang untuk menggunakannya dan mengambil kira itu."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ini bukan transliterasi",
        "blocks": [
          {
            "p": "Di sini kami mencadangkan **nama Korea baru**. Jika anda ingin nama sedia ada anda ditulis dalam Hangul — Michael sebagai 마이클 — lihat [panduan ejaan Hangul](/guide/how-hangul-transliteration)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Notis",
    "title": "Notis",
    "summary": "Di mana kami mengumumkan perubahan yang mempengaruhi cara anda menggunakan perkhidmatan.",
    "backLabel": "Laman Utama",
    "sections": []
  },
  "contact": {
    "eyebrow": "Hubungi",
    "title": "Hubungi kami",
    "summary": "Cara untuk menghubungi kami untuk pertanyaan, pengembalian wang, permintaan privasi dan laporan ralat, dengan butiran syarikat kami.",
    "backLabel": "Laman Utama",
    "sections": [
      {
        "title": "Emel kami",
        "blocks": [
          {
            "p": "Tulis kepada **{email}**. Kami akan membalas dalam dua hari bekerja. Untuk apa-apa yang berkaitan dengan pesanan — pembayaran, pengembalian wang, fail yang tidak anda terima — sila sertakan **nombor pesanan atau emel yang anda bayar**."
          },
          {
            "p": "Pertanyaan telefon: {customerCenter} (waktu perniagaan Korea)."
          }
        ]
      },
      {
        "title": "Apa yang perlu dihantar di sini",
        "blocks": [
          {
            "ul": [
              "**Pembayaran dan pengembalian** — jika dokumen tidak pernah dihasilkan, atau jumlah yang dikenakan berbeza daripada pesanan anda, kami akan mengembalikan sepenuhnya. Lihat [dasar pengembalian](/refund-policy).",
              "**Privasi** — permintaan untuk mengakses, membetulkan atau memadam data anda. Lihat [dasar privasi](/privacy).",
              "**Pembetulan** — jika makna, bacaan atau pengiraan hanja kelihatan salah, beritahu kami. Menyebut skrin mana dan apa yang anda masukkan sangat membantu.",
              "**Apa-apa lagi** — kerjasama dan media pergi ke alamat yang sama."
            ]
          }
        ]
      },
      {
        "title": "Butiran syarikat",
        "blocks": [
          {
            "ul": [
              "**Entiti undang-undang** — {companyName}",
              "**Wakil** — {representative}",
              "**No. pendaftaran perniagaan** — {businessNumber}",
              "**No. jualan melalui pos** — {mailOrderNumber}",
              "**Alamat** — {address}",
              "**Perkhidmatan pelanggan** — {customerCenter}",
              "**Emel** — {email}",
              "**Pegawai privasi** — {privacyOfficer}",
              "**Penyedia hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Anda tidak perlu menyertakan nama atau tarikh lahir dalam mesej anda. Hasil percuma tidak pernah disimpan di pelayan kami, jadi kami tidak dapat mencarinya semula — nombor pesanan sudah mencukupi."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Standard Kami",
    "title": "Apa yang Kami Tidak Gunakan",
    "summary": "Kami tidak menetapkan kekayaan total atau skor numerik, dan kami juga tidak menggunakan kiraan strok. Lima elemen hanya digunakan sebagai paksi tambahan. Berikut adalah sebab-sebabnya.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Sebab-sebab untuk tidak menetapkan kekayaan total atau skor numerik",
        "blocks": [
          {
            "p": "Terdapat kaedah yang menetapkan kekayaan total atau skor numerik kepada nama untuk menilai mereka. Naming-Link tidak menyediakan nombor tersebut. Sebab-sebabnya adalah empat."
          },
          {
            "p": "**Pertama, tidak ada satu standard sahaja.** Kaedah untuk mengira kekayaan berbeza mengikut sekolah, dan nama yang sama boleh dinilai secara positif oleh satu standard dan negatif oleh yang lain. Kami tidak mempunyai asas untuk memutuskan yang mana satu yang betul. Adalah tidak jujur untuk mempersembahkan satu seolah-olah ia adalah jawapan."
          },
          {
            "p": "**Kedua, pengiraan tersebut bergantung kepada kiraan strok.** Namun, data Mahkamah Agung tidak termasuk kiraan strok sama sekali. Selain itu, kiraan strok boleh berbeza bergantung kepada sama ada mereka dikira sebagai watak biasa atau disederhanakan dan bagaimana radikal dikira. Oleh kerana nombor asas tidak ditetapkan dengan pasti, skor yang dibina di atasnya tidak boleh dianggap muktamad."
          },
          {
            "p": "**Ketiga, nombor kelihatan lebih kukuh daripada realiti.** Apabila ia mengatakan \"87 mata\", ia dibaca seperti nilai yang diukur dan bukannya tafsiran konvensional. Nama-nama tersebut mungkin merasa tertekan oleh nombor itu, mengabaikan apa yang sebenarnya penting (Adakah ia menyenangkan untuk dipanggil? Adakah makna itu sesuai? Adakah ia mengandungi harapan yang diinginkan?)."
          },
          {
            "p": "**Keempat, tiada cara untuk mengesahkan.** Hubungan antara nama dan kehidupan seseorang tidak dapat disahkan. Mengubah sesuatu yang tidak dapat dikatakan betul atau salah kepada skor menghasilkan nombor yang tidak dapat disahkan, walaupun ia tidak boleh salah."
          },
          {
            "p": "Kami hanya menggunakan apa yang boleh **dibuktikan.** Jadual hanja nama rasmi Mahkamah Agung, bacaan yang ditetapkan untuk setiap watak, dan makna yang disenaraikan dalam jadual. Sebaliknya, kami memberikan alasan mengapa calon ini dipilih dan mengapa watak tertentu dikecualikan, menunjukkan **sebab-sebab dan bukannya skor**."
          }
        ]
      },
      {
        "title": "Kami tidak menggunakan kiraan strok",
        "blocks": [
          {
            "p": "Data hanja nama rasmi yang disediakan oleh Mahkamah Agung tidak termasuk kiraan strok. Antara {characterTotal} watak yang kami terima, **tidak ada satu watak pun yang mempunyai kiraan strok.**"
          },
          {
            "p": "Untuk menggunakan kiraan strok, kami perlu mendapatkan nombor dari tempat lain, tetapi jika kami tidak dapat menjelaskan dari mana nombor tersebut datang dan kriteria apa yang digunakan untuk mengiranya, ia bermakna menilai nama berdasarkan nombor yang tidak berasas. Kami telah memutuskan untuk tidak menilai nama berdasarkan nilai yang tidak dapat dibuktikan."
          }
        ]
      },
      {
        "title": "Kami menggunakan lima elemen hanya sebagai rujukan",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Lima elemen diletakkan dalam bulatan: generasi berjalan antara jiran, kawalan melangkau satu",
              "wood": "kayu",
              "fire": "api",
              "earth": "bumi",
              "metal": "logam",
              "water": "air",
              "saeng": "Generasi — setiap satu melahirkan jirannya",
              "geuk": "Kawalan — setiap satu menghalang yang dilangkau"
            },
            "caption": "Hubungan antara lima elemen. Bergerak sepanjang bulatan mewakili generasi bersama (相生), sementara melangkau satu dan menekan ke bawah mewakili pengekangan bersama (相剋). Kami menggunakan hubungan ini hanya sebagai paksi tambahan untuk membandingkan calon."
          },
          {
            "p": "Jika anda telah memasukkan bulan kelahiran anda, kami menggunakan rujukan ringkas lima elemen berdasarkan bulan itu sebagai paksi tambahan untuk membandingkan calon. Namun, ini bukan analisis saju yang tepat, dan **kami tidak mendakwa bahawa nama menentukan nasib atau watak seseorang.**"
          },
          {
            "p": "Dalam pemilihan akhir, apa yang kami utamakan adalah bunyi, gabungan makna, nilai yang ingin disampaikan oleh keluarga, dan sama ada ia boleh didaftarkan. Jika anda tidak memasukkan bulan kelahiran anda, kami sepenuhnya mengecualikan rujukan lima elemen daripada analisis — kami tidak membuat andaian sewenang-wenangnya tentang maklumat yang tidak diketahui."
          },
          {
            "p": "Jika anda ingin analisis berdasarkan saju yang tepat, kami membahasnya dalam laporan terperinci yang berasingan. Sebab kami tidak mengutamakan lima elemen dalam pemadanan hanja percuma adalah kerana kami tidak mahu mempersembahkan penilaian berdasarkan lima elemen yang diperoleh daripada tarikh dan waktu kelahiran yang tidak lengkap seolah-olah ia adalah muktamad."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Produk Berbayar",
    "title": "Apa yang termasuk dalam produk berbayar?",
    "summary": "Kami menjelaskan berapa banyak yang boleh dilihat secara percuma dan ciri tambahan yang datang dengan pembayaran untuk setiap produk. Harga diambil dari tetapan produk yang sebenar.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Apa yang boleh dilihat secara percuma?",
        "blocks": [
          {
            "p": "Mencipta nama dan melihat hasilnya adalah **percuma**. Tiada pendaftaran keahlian diperlukan. Anda boleh melihat makna yang sepadan dengan hanja, mencipta nama Korea, penukaran nama global, dan notasi sebutan Hangul, bersama dengan hasil yang disyorkan dan justifikasi mereka di skrin."
          },
          {
            "p": "Produk berbayar tidak **menjual semula apa yang telah ditunjukkan di skrin.** Mereka membuka lebih banyak calon, menambah lebih banyak penjelasan, atau mencipta format yang boleh disimpan atau dihantar."
          }
        ]
      },
      {
        "title": "Pendedahan penuh semua calon — {priceUnlock}",
        "blocks": [
          {
            "p": "Keputusan yang disyorkan disusun untuk membuka calon satu demi satu. Apabila melihat iklan, satu dibuka pada satu masa, sementara produk ini **membuka semua calon yang tinggal sekaligus**."
          },
          {
            "p": "Jika anda tidak tergesa-gesa, anda tidak perlu membeli. **Keputusan dari pembukaan melalui iklan dan yang dari pembayaran adalah sama sekali** — ia hanya soal menunggu, dan pembayaran tidak menghasilkan calon yang lebih baik."
          }
        ]
      },
      {
        "title": "Butiran Hanja — Tiga Peringkat",
        "blocks": [
          {
            "p": "Terdapat tiga produk terperinci dalam aliran pemilihan hanja untuk dilampirkan kepada nama dalam Hangul."
          },
          {
            "ul": [
              "**Maksimum 5 calon hanja terperinci** — {priceFiveDetail}. Anda boleh mengembangkan penjelasan untuk sehingga lima calon di skrin. Tiada PDF.",
              "**Maksimum 10 calon hanja PDF terperinci** — {priceTenDetail}. Bilangan calon meningkat kepada sepuluh, dan dokumen PDF disertakan.",
              "**Maksimum 10 calon hanja saju dan laporan komprehensif lima elemen** — {priceTenSaju}. Selain daripada di atas, ia termasuk carta saju yang diperoleh dari tarikh lahir dan kekuatan lima elemen, memeriksa mengapa hanja tertentu sesuai dengan nama itu dari perspektif lima elemen."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja itu sendiri adalah maklumat yang tersedia untuk umum",
        "blocks": [
          {
            "p": "Hanja yang boleh digunakan dan maknanya datang dari jadual nama-hanja rasmi yang ditetapkan oleh Mahkamah Agung Korea, dan semuanya tersedia untuk umum dalam dokumen panduan perkhidmatan. Apa yang dijual oleh produk berbayar bukanlah maklumat hanja tetapi **tindakan memilih dan menerangkannya mengikut nama**."
          }
        ]
      },
      {
        "title": "PDF untuk Pengguna Global",
        "blocks": [
          {
            "p": "Dokumen yang tersedia untuk menukar nama asing kepada nama Korea atau menulis nama dalam Hangul. Harga mengikuti jumlah yang dipaparkan di skrin pembayaran."
          },
          {
            "ul": [
              "**Laporan Premium Nama Korea** — 3 halaman. Termasuk penutup kaligrafi, makna nama dan sebab pemilihannya, serta tafsiran saju dan lima elemen.",
              "**Seni Nama Hangul** — 2 halaman. Termasuk penutup kaligrafi dan panduan sebutan. Ia mengandungi cara menulis nama dalam Hangul dan cara menyebutnya."
            ]
          }
        ]
      },
      {
        "title": "Cop Nama",
        "blocks": [
          {
            "p": "Kami mengukir nama yang dibuat di skrin ke dalam cop fizikal dan menghantarnya kepada anda. Harga berbeza mengikut model — cop bulat {priceStampRound}, cop segi empat {priceStampSquare}, cop ebony {priceStampEbony}. Penghantaran antarabangsa juga tersedia."
          },
          {
            "p": "**Dari sini, produk termasuk penghantaran.** Tidak seperti item sebelumnya, pengeluaran dan penghantaran memerlukan masa, dan alamat penerimaan diperlukan. Maklumat penghantaran hanya digunakan untuk pemprosesan pesanan dan penyimpanan undang-undang, dan setelah pemprosesan selesai, ia akan dimusnahkan selepas tempoh yang ditetapkan dalam polisi."
          }
        ]
      },
      {
        "title": "Perkara yang Perlu Diketahui Sebelum Membeli",
        "blocks": [
          {
            "p": "**Produk digital disediakan serta-merta setelah pembayaran.** Anda boleh membatalkan dan menerima pengembalian penuh pada bila-bila masa sebelum muat turun bermula, tetapi setelah muat turun selesai, penarikan semula kerana perubahan fikiran yang mudah adalah terhad (Artikel 17, Perenggan 2 Akta Perdagangan Elektronik). Syarat ini dipersetujui secara berasingan di skrin pembayaran."
          },
          {
            "p": "**Aduan tentang kandungan keputusan bukanlah alasan untuk pengembalian.** Walau bagaimanapun, jika dokumen tidak dibuat, fail tidak dapat dibuka, atau jumlah pembayaran berbeza dari pesanan, ia akan diproses sebagai pengeluaran semula atau pengembalian penuh."
          },
          {
            "p": "Syarat terperinci dinyatakan dalam [Dasar Pengembalian](/refund-policy) dan [Panduan Harga](/pricing). Teks ini berfungsi sebagai panduan kepada apa yang termasuk, dan syarat undang-undang diutamakan dalam dua dokumen tersebut."
          }
        ]
      }
    ]
  }
} satisfies Record<GlobalDocKey, DocPage>;

export const MS_NOTICES = {
  "kindLabels": {
    "service": "Perkhidmatan",
    "product": "Produk",
    "policy": "Dasar",
    "support": "Sokongan"
  },
  "intro": "Perubahan kepada terma penggunaan anda — harga, dasar — dipaparkan di sini sebelum ia berkuatkuasa. Penambahbaikan dalaman tidak disenaraikan: apa yang muncul di sini adalah apa yang anda perlu tahu.",
  "empty": {
    "title": "Tiada notis lagi",
    "body": "Apabila sesuatu berubah, ia akan muncul di sini."
  },
  "effective": "Berkuatkuasa {date}",
  "pager": {
    "label": "Halaman notis",
    "newer": "← Lebih Baru",
    "older": "Lebih Lama →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Halaman Hubungi dan Mengenai kini dibuka",
      "body": [
        "Soalan, pengembalian, permintaan privasi dan laporan ralat kini mempunyai satu tempat untuk pergi. Halaman hubungi di footer menyenaraikan emel dan butiran syarikat kami.",
        "Apa yang menjadi asas jawapan kami, dan apa yang kami sengaja tidak lakukan, ditulis di halaman mengenai."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Laporan PDF dikeluarkan dalam Bahasa Inggeris untuk Arab dan Khmer",
      "body": [
        "Jika anda menggunakan perkhidmatan dalam Bahasa Arab atau Khmer, PDF yang anda beli dihasilkan dalam Bahasa Inggeris. Alat yang menyusun dokumen kami belum dapat menetapkan perenggan dalam dua skrip tersebut.",
        "Skrin kekal dalam bahasa anda, dan nama anda dicetak dalam skrip anda sendiri di dalam dokumen.",
        "Nota yang sama muncul sebelum pembayaran. Apabila alat menyokong skrip ini, kami akan menyatakannya di sini."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Pembayaran belum dibuka",
      "body": [
        "Mencipta nama dan membaca keputusan adalah percuma hari ini, dan tiada akaun diperlukan.",
        "Item berbayar belum dijual. Jumlah yang ditunjukkan di halaman harga adalah apa yang akan dikenakan setelah jualan dibuka."
      ]
    }
  }
} satisfies NoticeCopy;
