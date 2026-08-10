import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

/** Bahasa Melayu — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const MS_DOCS = {
  "about": {
    "eyebrow": "Tentang",
    "title": "Tentang Naming-Link",
    "summary": "Kami membantu anda memilih dan memahami nama Korea. Berikut adalah apa yang menjadi asas hasil kami, dan apa yang kami sengaja tidak lakukan.",
    "backLabel": "Laman Utama",
    "sections": [
      {
        "title": "Apa yang kami lakukan",
        "blocks": [
          {
            "p": "Naming-Link membantu anda **memilih dan memahami nama Korea** — hanja di sebalik nama seorang kanak-kanak, nama Korea untuk digunakan di luar negara, ejaan Hangul nama anda sendiri, dan cenderahati seperti cap atau laporan bercetak."
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
              "**Ditawarkan dalam bahasa anda** — menulis nama anda sendiri dalam Hangul, dan membina nama Korea. Ini adalah untuk orang yang tidak mempunyai nama Korea, jadi mereka mengikuti bahasa yang anda gunakan.",
              "**Ditawarkan dalam bahasa Korea sahaja** — mencari nama-hanja untuk seorang kanak-kanak, dan mengubah nama Korea menjadi satu untuk digunakan di luar negara. Kedua-duanya memerlukan **nama Hangul yang sedia ada** untuk berfungsi, jadi skrin dan panduan mereka tetap dalam bahasa Korea."
            ]
          }
        ]
      },
      {
        "title": "Apa yang menjadi asas jawapan kami",
        "blocks": [
          {
            "p": "Hanja datang dari **jadual nama-hanja rasmi Mahkamah Agung Korea.** Setiap karakter mempunyai bacaan tetap untuk digunakan dalam nama, dan karakter di luar jadual tidak boleh didaftarkan. Kami tidak menambah senarai itu atau memilih kegemaran."
          },
          {
            "p": "Saju dan angka lima elemen dikira dari **kalendar lunisolar Korea**, dengan waktu kelahiran yang diperbetulkan kepada waktu solar sebenar untuk tempat kelahiran. Bacaan adalah rujukan tradisional, bukan ramalan."
          },
          {
            "p": "Penjelasan bertulis dihasilkan oleh AI. Untuk mengelakkan ia **mencipta perkara**, model hanya diberikan input anda dan data rujukan kami sendiri, dan diarahkan untuk tetap berada dalamnya. Panduan menerangkan ini dengan terperinci."
          }
        ]
      },
      {
        "title": "Apa yang kami tidak lakukan",
        "blocks": [
          {
            "ul": [
              "**Kami tidak meramal nasib.** Tiada apa di sini yang menjanjikan keberuntungan, kekayaan atau perlindungan.",
              "**Kami tidak menyimpan nama anda.** Hasil percuma tidak pernah ditulis ke pelayan kami, dan dokumen berbayar dihantar tanpa menyimpan salinan fail.",
              "**Membayar tidak membeli jawapan yang lebih baik.** Membuka dengan iklan dan membuka dengan pembayaran memberikan kandungan yang sama."
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
            "p": "Butiran syarikat dan cara untuk menghubungi kami terdapat di [halaman hubungan](/contact), termasuk pemulangan, permintaan privasi dan laporan kesilapan."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Bagaimana Naming-Link berfungsi",
    "title": "Apa yang menjadi asas nama anda",
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
            "p": "[Tentang](/about) menerangkan perkhidmatan mana yang untuk siapa."
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
            "p": "Jika nama Korea adalah apa yang anda inginkan, **itu adalah perkhidmatan yang berbeza.** Satu mengekalkan nama anda dan hanya menukar skrip; yang lain mencadangkan nama baru."
          }
        ]
      },
      {
        "title": "Bunyi yang tidak ada dalam bahasa Korea",
        "blocks": [
          {
            "p": "Setiap bahasa mempunyai bunyi yang tidak dimiliki oleh bahasa Korea — f, v, z, th, dan perbezaan vokal yang tidak dibuat oleh bahasa Korea. Untuk bunyi tersebut, kami menulis apa yang **seorang penutur Korea sebenarnya katakan** ketika mereka membaca nama anda dengan kuat, bukannya mentranskripsikan fonetik asal satu demi satu. Tujuannya adalah ejaan yang akan digunakan, bukan yang paling setia secara teknikal."
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
            "p": "Tiada jawapan yang betul tunggal. Ejaan yang paling dekat dengan bunyi asal, yang paling biasa digunakan di Korea, dan yang paling mudah ditulis sering kali adalah tiga perkara yang berbeza. Jadi kami menunjukkan mereka bersama dan menyatakan apa yang memisahkan mereka."
          },
          {
            "p": "Jika tiada satu pun daripada mereka terasa betul, anda boleh menambah petunjuk tentang bunyi yang anda inginkan dan menjalankannya semula — sebagai contoh, bahawa suku kata tertentu harus ditulis dengan cara yang berbeza."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tiada hanja di sini",
        "blocks": [
          {
            "p": "Kami tidak melampirkan hanja pada transliterasi. Hanja membawa makna, dan aliran ini adalah tentang bunyi. Memadankan watak dengan bunyi sahaja boleh membawa kepada makna yang tidak pernah anda minta."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Bagaimana ia berfungsi",
    "title": "Bagaimana kami membina nama Korea",
    "summary": "Kami memilih daripada nama keluarga yang wujud, menilai betapa mudahnya nama itu disebut dan ditulis, dan bertanya untuk apa nama itu.",
    "backLabel": "Panduan",
    "sections": [
      {
        "title": "Kami bermula dengan nama keluarga",
        "blocks": [
          {
            "p": "Di Korea, nama keluarga datang terlebih dahulu, dan tidak seperti nama pemberian, ia tidak dicipta secara bebas — anda mewarisinya. Jadi kami hanya mencadangkan nama keluarga yang sebenarnya dimiliki oleh orang Korea. Kumpulan default kami adalah **20 nama keluarga yang paling biasa**, yang bersama-sama merangkumi kira-kira 80% daripada populasi."
          },
          {
            "p": "Jika nama keluarga anda kebetulan sepadan dengan nama Korea yang sebenar dari segi bunyi — Wang dengan 왕, Ye dengan 예 — kami meletakkan yang itu terlebih dahulu. Menjaga hubungan kembali kepada nama asal anda lebih berharga daripada nama keluarga yang dipilih secara rawak."
          },
          {
            "p": "Anda boleh memilih nama keluarga sendiri atau membiarkan kami mencadangkan satu. Dalam apa jua keadaan, ia akan menjadi **nama keluarga yang wujud**."
          }
        ]
      },
      {
        "title": "Mudah disebut, mudah ditulis",
        "blocks": [
          {
            "p": "Ini adalah nama yang orang di Korea akan sebenarnya memanggil anda, jadi perkara pertama yang kami periksa adalah sama ada orang Korea dapat mendengarnya sekali dan menulisnya. Nama yang perlu dieja setiap kali adalah beban yang anda tanggung, bukan kami."
          },
          {
            "p": "Makna juga penting. Nama pemberian Korea biasanya membawa makna, jadi kami memberitahu anda bagaimana nama itu dibaca dan mengapa kami memilihnya — bukan hanya nama itu sendiri."
          }
        ]
      },
      {
        "title": "Kami bertanya untuk apa nama itu",
        "blocks": [
          {
            "p": "Nama untuk kertas kerja universiti tidak sama dengan nama yang akan dipanggil rakan-rakan di seberang bilik, atau nama yang akan anda gunakan dalam talian. Kami bertanya bagaimana anda merancang untuk menggunakannya dan mengambil kira itu."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ini bukan transliterasi",
        "blocks": [
          {
            "p": "Di sini kami mencadangkan **nama Korea baru**. Jika anda mahu nama anda yang sedia ada ditulis dalam Hangul — Michael sebagai 마이클 — lihat [panduan ejaan Hangul](/guide/how-hangul-transliteration)."
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
    "summary": "Cara untuk menghubungi kami untuk pertanyaan, pengembalian, permintaan privasi dan laporan kesilapan, dengan butiran syarikat kami.",
    "backLabel": "Laman Utama",
    "sections": [
      {
        "title": "Emel kami",
        "blocks": [
          {
            "p": "Tulis kepada **{email}**. Kami membalas dalam masa dua hari bekerja. Untuk apa-apa mengenai pesanan — pembayaran, pengembalian, fail yang anda tidak terima — sila sertakan **nombor pesanan atau emel yang anda bayar**."
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
              "**Apa-apa lagi** — kerjasama dan akhbar pergi ke alamat yang sama."
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
              "**No. jualan pesanan melalui pos** — {mailOrderNumber}",
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
            "p": "Anda tidak perlu menyertakan nama atau tarikh lahir dalam mesej anda. Hasil percuma tidak pernah disimpan di pelayan kami, jadi kami tidak dapat mencarinya semula — nombor pesanan sudah cukup."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Standard Kami",
    "title": "Apa yang Kami Tidak Gunakan",
    "summary": "Kami tidak menetapkan jumlah keseluruhan atau skor numerik, dan kami juga tidak menggunakan kiraan strok. Lima elemen hanya digunakan sebagai paksi tambahan. Berikut adalah sebab-sebabnya.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Sebab-sebab untuk tidak menetapkan jumlah keseluruhan atau skor numerik",
        "blocks": [
          {
            "p": "Terdapat kaedah yang menetapkan jumlah keseluruhan atau skor numerik kepada nama untuk menilainya. Naming-Link tidak menyediakan nombor tersebut. Sebab-sebabnya adalah empat."
          },
          {
            "p": "**Pertama, tidak ada satu standard sahaja.** Kaedah untuk mengira nasib berbeza mengikut sekolah, dan nama yang sama boleh dinilai secara positif oleh satu standard dan negatif oleh yang lain. Kami tidak mempunyai asas untuk memutuskan yang mana satu yang betul. Adalah tidak jujur untuk membentangkan satu seolah-olah ia adalah jawapan."
          },
          {
            "p": "**Kedua, pengiraan tersebut bergantung kepada bilangan strok.** Walau bagaimanapun, data Mahkamah Agung tidak termasuk bilangan strok sama sekali. Selain itu, bilangan strok boleh berbeza bergantung kepada sama ada ia dikira sebagai karakter biasa atau karakter yang dipermudahkan dan bagaimana radikal dikira. Oleh kerana nombor asas tidak ditetapkan secara definitif, skor yang dibina di atasnya tidak boleh menjadi definitif."
          },
          {
            "p": "**Ketiga, nombor kelihatan lebih kukuh daripada realiti.** Apabila ia mengatakan \"87 mata\", ia dibaca seperti nilai yang diukur daripada tafsiran konvensional. Penamaan tersebut mungkin merasa tertekan oleh nombor itu, mengabaikan apa yang sebenarnya penting (Adakah ia menyenangkan untuk dipanggil? Adakah makna itu sesuai? Adakah ia mengandungi harapan yang diinginkan?)."
          },
          {
            "p": "**Keempat, tiada cara untuk mengesahkan.** Hubungan antara nama dan kehidupan seseorang tidak dapat disahkan. Menukar sesuatu yang tidak boleh dikatakan betul atau salah kepada skor menghasilkan nombor yang tidak dapat disahkan, walaupun ia tidak boleh salah."
          },
          {
            "p": "Kami hanya menggunakan apa yang boleh **dibuktikan.** Jadual hanja rasmi Mahkamah Agung, bacaan yang ditetapkan untuk setiap karakter, dan makna yang disenaraikan dalam jadual. Sebaliknya, kami memberikan alasan mengapa calon ini dipilih dan mengapa karakter tertentu dikecualikan, menunjukkan **alasan dan bukannya skor**."
          }
        ]
      },
      {
        "title": "Kami tidak menggunakan bilangan strok",
        "blocks": [
          {
            "p": "Data hanja rasmi yang disediakan oleh Mahkamah Agung tidak termasuk bilangan strok. Di antara {characterTotal} karakter yang kami terima, **tiada satu karakter pun mempunyai bilangan strok.**"
          },
          {
            "p": "Untuk menggunakan bilangan strok, kami perlu mendapatkan nombor dari tempat lain, tetapi jika kami tidak dapat menjelaskan dari mana nombor tersebut datang dan kriteria apa yang digunakan untuk mengira mereka, ia bermakna menilai nama berdasarkan nombor yang tidak berasas. Kami telah memutuskan untuk tidak menilai nama berdasarkan nilai yang tidak dapat dibuktikan."
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
              "geuk": "Kawalan — setiap satu mengekang yang dilangkau"
            },
            "caption": "Hubungan antara lima elemen. Bergerak sepanjang bulatan mewakili generasi bersama (相生), sementara melangkau satu dan menekan mewakili pengekangan bersama (相剋). Kami menggunakan hubungan ini hanya sebagai paksi tambahan untuk membandingkan calon."
          },
          {
            "p": "Jika anda telah memasukkan bulan kelahiran anda, kami menggunakan rujukan ringkas lima elemen berdasarkan bulan itu sebagai paksi tambahan untuk membandingkan calon. Walau bagaimanapun, ini bukan analisis saju yang tepat, dan **kami tidak mendakwa bahawa nama menentukan nasib atau watak seseorang.**"
          },
          {
            "p": "Dalam pemilihan akhir, apa yang kami utamakan adalah bunyi, gabungan makna, nilai yang ingin disampaikan oleh keluarga, dan sama ada ia boleh didaftarkan. Jika anda tidak memasukkan bulan kelahiran anda, kami sepenuhnya mengecualikan rujukan lima elemen daripada analisis — kami tidak membuat andaian sewenang-wenangnya tentang maklumat yang tidak diketahui."
          },
          {
            "p": "Jika anda mahukan analisis berasaskan saju yang tepat, kami membahasnya dalam laporan terperinci yang berasingan. Sebab kami tidak mengutamakan lima elemen dalam pemadanan hanja percuma adalah kerana kami tidak mahu membentangkan penilaian berdasarkan lima elemen yang diperoleh daripada tarikh dan masa kelahiran yang tidak lengkap seolah-olah ia adalah definitif."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Produk Berbayar",
    "title": "Apa yang termasuk dalam produk berbayar?",
    "summary": "Kami menjelaskan berapa banyak yang boleh dilihat secara percuma dan ciri tambahan yang datang dengan pembayaran untuk setiap produk. Harga diambil dari tetapan produk sebenar.",
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
            "p": "Hasil yang disyorkan disusun untuk membuka calon satu demi satu. Apabila melihat iklan, satu dibuka pada satu masa, sementara produk ini **membuka semua calon yang tinggal sekaligus**."
          },
          {
            "p": "Jika anda tidak tergesa-gesa, anda tidak perlu membeli. **Hasil daripada pembukaan melalui iklan dan hasil daripada pembayaran adalah sama sekali** — ia hanya soal menunggu, dan membayar tidak menghasilkan calon yang lebih baik."
          }
        ]
      },
      {
        "title": "Butiran Hanja — Tiga Peringkat",
        "blocks": [
          {
            "p": "Terdapat tiga produk terperinci dalam aliran pemilihan hanja untuk dilampirkan pada nama Hangul."
          },
          {
            "ul": [
              "**Maksimum 5 calon hanja terperinci** — {priceFiveDetail}. Anda boleh mengembangkan penjelasan untuk sehingga lima calon di skrin. Tiada PDF.",
              "**Maksimum 10 calon hanja PDF terperinci yang diperluas** — {priceTenDetail}. Bilangan calon meningkat kepada sepuluh, dan dokumen PDF disertakan.",
              "**Maksimum 10 calon hanja laporan komprehensif saju dan lima elemen** — {priceTenSaju}. Selain yang di atas, ia termasuk carta saju yang diperoleh daripada tarikh kelahiran dan kekuatan lima elemen, memeriksa mengapa hanja tertentu sesuai dengan nama itu dari perspektif lima elemen."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja itu sendiri adalah maklumat yang tersedia untuk umum",
        "blocks": [
          {
            "p": "Hanja yang boleh digunakan dan maknanya datang dari jadual hanja rasmi yang ditetapkan oleh Mahkamah Agung Korea, dan semuanya tersedia untuk umum dalam dokumen panduan perkhidmatan. Apa yang dijual oleh produk berbayar bukanlah maklumat hanja tetapi **tindakan memilih dan menerangkannya mengikut nama**."
          }
        ]
      },
      {
        "title": "PDF untuk Pengguna Global",
        "blocks": [
          {
            "p": "Dokumen yang tersedia untuk menukar nama asing ke dalam nama Korea atau menulis nama dalam Hangul. Harga mengikuti jumlah yang dipaparkan pada skrin pembayaran."
          },
          {
            "ul": [
              "**Laporan Premium Nama Korea** — 3 halaman. Termasuk penutup kaligrafi, makna nama dan sebab pemilihannya, serta analisis saju dan lima elemen.",
              "**Seni Nama Hangul** — 2 halaman. Termasuk penutup kaligrafi dan panduan sebutan. Ia mengandungi cara untuk menulis nama dalam Hangul dan cara untuk menyebutnya."
            ]
          }
        ]
      },
      {
        "title": "Cop Nama",
        "blocks": [
          {
            "p": "Kami mengukir nama yang dicipta di skrin ke dalam cop fizikal dan menghantarnya kepada anda. Harga berbeza mengikut model — cop bulat {priceStampRound}, cop segi empat {priceStampSquare}, cop kayu ebony {priceStampEbony}. Penghantaran antarabangsa juga tersedia."
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
            "p": "**Produk digital disediakan segera setelah pembayaran.** Anda boleh membatalkan dan menerima pengembalian penuh pada bila-bila masa sebelum muat turun bermula, tetapi setelah muat turun selesai, penarikan kerana perubahan fikiran yang sederhana adalah terhad (Artikel 17, Perenggan 2 Akta Perdagangan Elektronik). Keadaan ini dipersetujui secara berasingan di skrin pembayaran."
          },
          {
            "p": "**Aduan tentang kandungan hasil bukanlah alasan untuk pengembalian.** Walau bagaimanapun, jika dokumen tidak dibuat, fail tidak dapat dibuka, atau jumlah pembayaran berbeza dari pesanan, ia akan diproses sebagai penerbitan semula atau pengembalian penuh."
          },
          {
            "p": "Keadaan terperinci dinyatakan dalam [Dasar Pengembalian](/refund-policy) dan [Panduan Harga](/pricing). Teks ini berfungsi sebagai panduan kepada apa yang termasuk, dan syarat undang-undang diutamakan dalam dua dokumen tersebut."
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
  "intro": "Perubahan kepada terma penggunaan anda — harga, dasar — dipaparkan di sini sebelum ia berkuat kuasa. Penambahbaikan dalaman tidak disenaraikan: apa yang muncul di sini adalah apa yang anda perlu tahu.",
  "empty": {
    "title": "Tiada notis lagi",
    "body": "Apabila sesuatu berubah, ia akan muncul di sini."
  },
  "effective": "Bermula {date}",
  "pager": {
    "label": "Halaman notis",
    "newer": "← Lebih baru",
    "older": "Lebih lama →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Halaman Hubungi dan Mengenai kini dibuka",
      "body": [
        "Soalan, pemulangan, permintaan privasi dan laporan ralat kini mempunyai satu tempat untuk pergi. Halaman hubungi di footer menyenaraikan emel dan butiran syarikat kami.",
        "Apa yang menjadi asas jawapan kami, dan apa yang kami secara sengaja tidak lakukan, ditulis di halaman mengenai."
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
        "Mencipta nama dan membaca hasilnya adalah percuma hari ini, dan tiada akaun diperlukan.",
        "Item berbayar belum dijual. Jumlah yang ditunjukkan di halaman harga adalah apa yang akan dikenakan setelah jualan dibuka."
      ]
    }
  }
} satisfies NoticeCopy;
