import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Bahasa Melayu — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const MS_DOCS = {
  "about": {
    "eyebrow": "Tentang",
    "title": "Tentang Naming-Link",
    "summary": "Kami membantu anda memilih dan memahami nama Korea. Berikut adalah apa yang menjadi asas hasil kami, dan apa yang kami tidak lakukan secara sengaja.",
    "backLabel": "Laman Utama",
    "sections": [
      {
        "title": "Apa yang kami lakukan",
        "blocks": [
          {
            "p": "Naming-Link membantu anda **memilih dan memahami nama Korea** — hanja di sebalik nama seorang kanak-kanak, nama Korea untuk digunakan di luar negara, ejaan Hangul nama anda sendiri, dan cenderahati seperti cap atau laporan bercetak."
          },
          {
            "p": "Melihat hasil anda adalah **percuma dan tidak memerlukan akaun.** Item berbayar tidak pernah menjual semula apa yang sudah ditunjukkan di skrin: mereka membuka lebih banyak calon, menambah analisis bertulis, atau menjadikan hasil itu sesuatu yang boleh anda simpan."
          }
        ]
      },
      {
        "title": "Apa yang menjadi asas jawapan kami",
        "blocks": [
          {
            "p": "Hanja datang dari **jadual nama-hanja rasmi Mahkamah Agung Korea.** Setiap karakter mempunyai bacaan tetap untuk digunakan dalam nama, dan karakter di luar jadual tidak boleh didaftarkan. Kami tidak menambah senarai itu atau memilih yang disukai."
          },
          {
            "p": "Saju dan angka lima elemen dikira dari **kalendar lunisolar Korea**, dengan waktu kelahiran diperbetulkan kepada waktu solar sebenar untuk tempat kelahiran. Bacaan adalah rujukan tradisional, bukan ramalan."
          },
          {
            "p": "Penerangan bertulis dihasilkan oleh AI. Untuk mengelakkan ia **mencipta perkara**, model hanya diberikan input anda dan data rujukan kami sendiri, dan diarahkan untuk tetap berada dalamnya. Panduan menerangkan ini secara terperinci."
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
  "guide/reading": {
    "eyebrow": "Bacaan",
    "title": "Bacaan tetap — satu sebutan bagi setiap karakter",
    "summary": "Jadual rasmi tidak hanya menyenaraikan karakter. Ia juga menetapkan bagaimana setiap satu dibaca apabila digunakan dalam nama.",
    "backLabel": "Panduan",
    "sections": [
      {
        "title": "Bacaan tetap untuk setiap karakter",
        "blocks": [
          {
            "p": "Jadual nama-hanja tidak hanya menentukan karakter mana yang boleh digunakan. **Ia juga menetapkan bagaimana setiap karakter dibaca apabila muncul dalam nama.** Bacaan tetap itulah yang digunakan untuk pendaftaran."
          },
          {
            "p": "Kebanyakan hanja mempunyai beberapa bacaan yang mungkin. Namun, nama ditulis dalam dokumen dan diucapkan, jadi ia memerlukan tepat satu. Oleh itu, jadual menetapkan bacaan untuk setiap karakter untuk digunakan dalam nama, dan tiada bacaan lain boleh didaftarkan."
          }
        ]
      },
      {
        "title": "Jadi bunyi datang dahulu",
        "blocks": [
          {
            "p": "Inilah sebabnya Naming-Link menetapkan bunyi sebelum mencari hanja. Jika nama itu \"지은\", makna hanya boleh dipilih di antara karakter yang ditugaskan bacaan **지** dan karakter yang ditugaskan bacaan **은**."
          },
          {
            "p": "Walau sebaik mana makna itu, karakter yang bacaan tidak sepadan tidak boleh digunakan untuk nama itu. Kami juga tidak pernah mengubah bunyi nama untuk disesuaikan dengan karakter — nama diucapkan seumur hidup, dan bunyi ditetapkan dahulu, dengan hanja mengikuti."
          }
        ]
      },
      {
        "title": "Nama keluarga berada di luar jadual ini",
        "blocks": [
          {
            "p": "Ini sering disalah fahami. **Jadual mengawal nama yang diberikan, bukan nama keluarga.** Nama keluarga mengikuti apa yang sudah ada dalam pendaftaran keluarga, jadi sesetengah orang menggunakan karakter yang tidak ada dalam jadual nama-hanja."
          },
          {
            "p": "Itulah sebabnya Naming-Link memperlakukan hanja nama keluarga secara berbeza. Kami hanya membantu anda mencari nama keluarga, dan kami meninggalkan ruang untuk memasukkan satu secara langsung, bagi orang yang karakternya berada di luar jadual. Nama keluarga dua suku kata seperti Namgung dan Seonwoo dimasukkan dengan cara yang sama."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Bagaimana ia berfungsi",
    "title": "Bagaimana kami mengeja nama anda dalam Hangul",
    "summary": "Bagaimana kami memilih bunyi apabila menulis nama asing dalam Hangul, dan mengapa kami tidak melampirkan hanja.",
    "backLabel": "Panduan",
    "sections": [
      {
        "title": "Kami membawa bunyi, bukan makna",
        "blocks": [
          {
            "p": "Perkhidmatan ini menulis **nama anda** dalam Hangul. Ia tidak memberikan anda nama Korea. Michael menjadi 마이클 — nama yang sama, ditulis supaya orang Korea boleh membacanya dan mengucapkannya. Kami tidak menukarnya kepada nama Korea yang kebetulan bermakna sesuatu yang serupa."
          },
          {
            "p": "Jika nama Korea yang anda inginkan, **itu adalah perkhidmatan yang berbeza.** Satu mengekalkan nama anda dan hanya menukar skrip; yang lain mencadangkan nama baru."
          }
        ]
      },
      {
        "title": "Bunyi yang tidak ada dalam bahasa Korea",
        "blocks": [
          {
            "p": "Setiap bahasa mempunyai bunyi yang tidak ada dalam bahasa Korea — f, v, z, th, dan perbezaan vokal yang tidak dibuat oleh bahasa Korea. Untuk itu, kami menulis apa yang **seorang penutur Korea sebenarnya katakan** apabila mereka membaca nama anda dengan kuat, bukannya mentranskripsikan fonetik asal simbol demi simbol. Tujuannya adalah ejaan yang akan digunakan, bukan yang paling setia secara teknikal."
          },
          {
            "p": "Ejaan yang sama boleh berbeza bergantung kepada dari mana nama itu berasal, jadi kami meminta bahasa dan negara anda dan bekerja dari sebutan itu."
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
            "p": "Kami tidak melampirkan hanja kepada transliterasi. Hanja membawa makna, dan aliran ini adalah tentang bunyi. Memadankan karakter dengan bunyi sahaja boleh membuat anda mendapat makna yang tidak pernah anda minta."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Bagaimana ia berfungsi",
    "title": "Bagaimana kami membina nama Korea",
    "summary": "Kami memilih daripada nama keluarga yang wujud, menilai betapa mudahnya nama itu diucapkan dan ditulis, dan bertanya untuk apa nama itu.",
    "backLabel": "Panduan",
    "sections": [
      {
        "title": "Kami bermula dengan nama keluarga",
        "blocks": [
          {
            "p": "Di Korea, nama keluarga datang dahulu, dan tidak seperti nama yang diberikan, ia tidak dicipta secara bebas — anda mewarisinya. Jadi kami hanya mencadangkan nama keluarga yang sebenarnya dimiliki oleh orang Korea. Kumpulan lalai kami adalah **20 nama keluarga yang paling biasa**, yang bersama-sama meliputi kira-kira 80% daripada populasi."
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
        "title": "Mudah diucapkan, mudah ditulis",
        "blocks": [
          {
            "p": "Ini adalah nama yang akan dipanggil oleh orang di Korea, jadi perkara pertama yang kami periksa adalah sama ada seorang Korea boleh mendengarnya sekali dan menulisnya. Nama yang perlu dieja setiap kali adalah beban yang anda tanggung, bukan kami."
          },
          {
            "p": "Makna juga penting. Nama yang diberikan dalam bahasa Korea biasanya mempunyai makna, jadi kami memberitahu anda apa nama itu dibaca dan mengapa kami memilihnya — bukan hanya nama itu sendiri."
          }
        ]
      },
      {
        "title": "Kami bertanya untuk apa nama itu",
        "blocks": [
          {
            "p": "Nama untuk kertas kerja universiti tidak sama dengan nama yang akan dipanggil oleh rakan-rakan di seberang bilik, atau nama yang akan anda gunakan dalam talian. Kami bertanya bagaimana anda merancang untuk menggunakannya dan mengambil kira itu."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ini bukan transliterasi",
        "blocks": [
          {
            "p": "Di sini kami mencadangkan **nama Korea baru**. Jika anda mahu nama sedia ada anda ditulis dalam Hangul — Michael sebagai 마이클 — lihat [panduan ejaan Hangul](/guide/how-hangul-transliteration)."
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
    "summary": "Cara untuk menghubungi kami untuk pertanyaan, pemulangan, permintaan privasi dan laporan kesilapan, dengan butiran syarikat kami.",
    "backLabel": "Laman Utama",
    "sections": [
      {
        "title": "Emel kami",
        "blocks": [
          {
            "p": "Tulis kepada **{email}**. Kami membalas dalam masa dua hari bekerja. Untuk apa-apa yang berkaitan dengan pesanan — pembayaran, pemulangan, fail yang anda tidak terima — sila sertakan **nombor pesanan atau emel yang anda bayar**."
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
              "**Pembayaran dan pemulangan** — jika dokumen tidak pernah dihasilkan, atau jumlah yang dikenakan berbeza daripada pesanan anda, kami akan memulangkan sepenuhnya. Lihat [dasar pemulangan](/refund-policy).",
              "**Privasi** — permintaan untuk mengakses, membetulkan atau memadam data anda. Lihat [dasar privasi](/privacy).",
              "**Pembetulan** — jika makna, bacaan atau pengiraan hanja kelihatan salah, beritahu kami. Menyebut skrin mana dan apa yang anda masukkan sangat membantu.",
              "**Apa-apa yang lain** — kerjasama dan media pergi ke alamat yang sama."
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
            "p": ""
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Adat",
    "title": "Karakter yang Tradisional Dielakkan",
    "summary": "Ia tidak dilarang oleh undang-undang tetapi adalah adat. Kami telah menulis tentang apa yang telah dielakkan dan mengapa, dan bagaimana kami menanganinya.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Karakter yang Diterima Secara Undang-Undang",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} karakter",
                "label": "Karakter Dielakkan yang Dikumpulkan"
              },
              {
                "value": "{avoidCommonlyUsed} karakter",
                "label": "Antara mereka, karakter yang masih digunakan secara umum"
              }
            ]
          },
          {
            "p": "Terdapat karakter yang termasuk dalam senarai karakter untuk nama peribadi dan **diterima secara undang-undang**, namun dianggap tidak sesuai untuk nama."
          },
          {
            "p": "Pemikiran yang mendasari adalah bahawa **\"makna yang berlebihan sebenarnya tidak diingini.\"** Ini termasuk karakter yang dianggap terlalu berharga (珍·寶), karakter yang dilihat mempunyai kehadiran yang terlalu kuat (王·帝), dan yang dianggap terlalu megah untuk seseorang untuk mewakili, seperti langit atau dewa. Ini mencerminkan rasa restraint yang lama, percaya bahawa nama boleh mengatasi individu."
          },
          {
            "p": "**Namun, karakter ini tidak tidak boleh digunakan.** Ia bukan larangan undang-undang tetapi adat, dan adat berbeza mengikut kawasan, keluarga, dan generasi, dan boleh berubah dari semasa ke semasa."
          },
          {
            "p": "Sebenarnya, antara {avoidTotal} karakter yang kami kumpulkan, {avoidCommonlyUsed} masih digunakan secara umum dalam nama. Hakikat bahawa mereka diketahui dielakkan tetapi masih digunakan secara meluas menunjukkan bahawa adat ini tidak mutlak."
          }
        ]
      },
      {
        "title": "Apa Kategori yang Ada?",
        "blocks": [
          {
            "p": "Karakter yang telah dikumpulkan kini dibahagikan kepada tujuh kategori."
          },
          {
            "ul": [
              "**Harta dan Objek** — Karakter yang merujuk secara langsung kepada kekayaan atau item",
              "**Langit dan Alam** — Perkara seperti matahari, bulan, dan langit yang dianggap terlalu megah untuk seseorang untuk mewakili",
              "**Raja dan Bangsawan** — Karakter yang menandakan status, seperti raja atau maharaja",
              "**Makhluk Ilahi** — Karakter yang merujuk kepada alam suci, seperti dewa atau roh",
              "**Musim dan Lain-lain** — Karakter yang berkaitan dengan masa atau keadaan tertentu",
              "**Haiwan** — Haiwan yang dianggap mempunyai tenaga yang kuat, seperti naga atau harimau",
              "**Kelebihan** — Karakter yang dilihat mempunyai makna yang terlalu besar atau melimpah"
            ]
          }
        ]
      },
      {
        "title": "Anda Boleh Menambah atau Mengeluarkan Karakter Sendiri",
        "blocks": [
          {
            "p": "Kami tidak secara sewenang-wenangnya memadamkan karakter ini. **Kami telah menyediakan dua pilihan di skrin input untuk penama memilih bagaimana untuk menanganinya.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Pilihan Tersedia di Skrin Input",
        "blocks": [
          {
            "p": "**Kecualikan Karakter yang Dielakkan daripada Calon** — Jika diaktifkan, mereka dikecualikan sepenuhnya. Jika dinyahaktifkan, mereka kekal dalam hasil dengan label \"Dielakkan Secara Tradisional\" dan sebab yang dilampirkan."
          },
          {
            "p": "**Kecualikan Bahkan Karakter yang Digunakan Secara Umum** — Ini mengecualikan karakter yang berada dalam senarai penghindaran tetapi sebenarnya digunakan secara meluas (圭·琳·玲·元·太·星·海, dll.). Jika diaktifkan, calon akan dikurangkan dengan ketara."
          },
          {
            "p": "Tetapan lalai adalah **tidak mengecualikan tetapi hanya memaparkan** mereka. Jika mereka dikeluarkan secara senyap dari senarai, ia mungkin kelihatan kepada mereka yang ingin menggunakan karakter itu seolah-olah ia tidak wujud."
          }
        ]
      },
      {
        "title": "Memastikan Pilihan Tidak Hilang",
        "blocks": [
          {
            "p": "Jika tiada karakter yang boleh digunakan tinggal untuk suku kata itu, kami akan mengangkat pengecualian untuk suku kata itu dan menunjukkan calon. Kami percaya ia lebih baik daripada tiada pilihan sama sekali."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Asas Perkhidmatan",
    "title": "Apa Asas untuk Penukaran Nama Global?",
    "summary": "Kami menyediakan calon dari lima perspektif, mengekalkan sistem penulisan setiap bahasa dan menggunakan hanya nama yang wujud.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Calon Disediakan dari Lima Perspektif",
        "blocks": [
          {
            "p": "Tiada satu cara untuk menterjemahkan nama ke dalam bahasa lain. Bergantung kepada sama ada untuk mengekalkan bunyi atau makna, memilih nama yang semula jadi dalam konteks tempatan atau mengutamakan keperibadian, jawapannya akan berbeza. Oleh itu, daripada membentangkan satu pilihan, kami menyediakan **satu dari setiap lima perspektif yang berbeza**."
          },
          {
            "ul": [
              "**Pilihan Pemeliharaan Bunyi** — Mengekalkan bunyi nama asal sebanyak mungkin",
              "**Pilihan Terjemahan Makna** — Menterjemahkan makna yang terkandung dalam nama ke dalam nama bahasa itu",
              "**Pilihan Kompromi Bunyi dan Makna** — Mengambil separuh dari setiap satu",
              "**Pilihan Autentik Tempatan** — Memilih nama yang sebenarnya digunakan secara umum dalam konteks budaya itu",
              "**Pilihan Keperibadian dan Penjenamaan** — Mengutamakan nama yang mudah diingati dan unik"
            ]
          },
          {
            "p": "Lima pilihan dijamin akan disediakan. Oleh kerana pilihan berbeza dari orang ke orang, kami percaya adalah lebih baik untuk membenarkan pilihan daripada membentangkan satu sebagai jawapan yang betul."
          }
        ]
      },
      {
        "title": "Setiap Bahasa Mempunyai Peraturan Sistem Penulisan yang Berbeza",
        "blocks": [
          {
            "p": "Apabila menterjemahkan ke dalam bahasa yang tidak menggunakan huruf Roman, ia mesti ditulis dalam skrip bahasa itu. Untuk bahasa Jepun, ia akan menjadi kana dan kanji; untuk bahasa Rusia, Mongolia, dan Kazakh, ia akan menjadi Cyrillic; untuk bahasa Arab, ia akan menjadi skrip Arab; dan untuk bahasa Thai, Khmer, dan Hindi, ia akan menjadi skrip masing-masing. Jika anda menulisnya dalam huruf Roman dan memanggilnya \"nama Jepun,\" ia tidak boleh digunakan di negara itu."
          },
          {
            "p": "Oleh itu, kami mempunyai peraturan yang berasingan untuk setiap sistem penulisan bahasa, dan pelayan memeriksa sekali lagi untuk memastikan hasilnya berada dalam sistem penulisan itu. Kesilapan seperti mengabaikan nama keluarga atau mencampurkan Hangul disaring di sini."
          }
        ]
      },
      {
        "title": "Kami Menggunakan Nama yang Sebenarnya Digunakan",
        "blocks": [
          {
            "p": "Untuk mengelakkan mencipta nama yang kedengaran plausible tetapi tidak wujud di negara itu, kami berdasarkan pilihan kami pada nama yang sedia ada. Nama digunakan dalam dokumen dan pengenalan, jadi jika seseorang tempatan berfikir \"tiada nama seperti itu,\" ia tidak boleh digunakan."
          }
        ]
      },
      {
        "title": "Kami Memisahkan Pemilihan dan Penerangan",
        "blocks": [
          {
            "p": "Kami mengendalikan tugas menentukan lima calon secara berasingan dari tugas menerangkan setiap calon secara terperinci. Oleh kerana penerangan memerlukan banyak masa, kami memisahkan bahagian itu untuk menciptanya secara serentak."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mengapa Ini Diubah?",
        "blocks": [
          {
            "p": "Pada mulanya, kami mencipta lima perspektif secara berasingan. Ia lebih cepat, tetapi **jumlah calon berbeza setiap kali.** Apabila setiap orang memilih calon, terdapat pertindihan atau percanggahan, dan jika satu gagal, calon itu akan hilang sepenuhnya, menghasilkan hanya dua atau tiga dan bukannya lima."
          },
          {
            "p": "Sekarang, kerana kami menentukan set calon dan pengagihan perspektif sekaligus, **jumlahnya tetap.** Walaupun satu penerangan gagal, calon tetap ada dan dipersembahkan dengan maklumat ringkas. Kami percaya adalah lebih baik untuk sentiasa mempunyai jumlah yang sama, walaupun ia mengambil sedikit masa lebih lama."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

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
      "title": "Halaman Hubungi dan Tentang kini dibuka",
      "body": [
        "Pertanyaan, pemulangan, permintaan privasi dan laporan kesilapan kini mempunyai satu tempat untuk pergi. Halaman hubungan di footer menyenaraikan emel dan butiran syarikat kami.",
        "Apa yang menjadi asas jawapan kami, dan apa yang kami tidak lakukan secara sengaja, ditulis di halaman tentang."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Laporan PDF dikeluarkan dalam bahasa Inggeris untuk bahasa Arab dan Khmer",
      "body": [
        "Jika anda menggunakan perkhidmatan dalam bahasa Arab atau Khmer, PDF yang anda beli dihasilkan dalam bahasa Inggeris. Alat yang menyusun dokumen kami belum dapat menetapkan perenggan dalam dua skrip tersebut.",
        "Skrin tetap dalam bahasa anda, dan nama anda dicetak dalam skrip anda sendiri di dalam dokumen.",
        "Nota yang sama muncul sebelum pembayaran. Apabila alat menyokong skrip ini, kami akan menyatakannya di sini."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Pembayaran belum dibuka",
      "body": [
        "Mencipta nama dan membaca hasil adalah percuma hari ini, dan tiada akaun diperlukan.",
        "Item berbayar belum dijual. Jumlah yang ditunjukkan di halaman harga adalah apa yang akan dikenakan setelah jualan dibuka."
      ]
    }
  }
} satisfies NoticeCopy;
