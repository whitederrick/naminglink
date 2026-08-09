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
            "p": "Melihat hasil anda adalah **percuma dan tidak memerlukan akaun.** Item berbayar tidak pernah menjual semula apa yang sudah ditunjukkan di skrin: mereka membuka lebih banyak calon, menambah analisis bertulis, atau mengubah hasil menjadi sesuatu yang boleh anda simpan."
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
            "p": "Penjelasan bertulis dihasilkan oleh AI. Untuk mengelakkan ia **mencipta perkara**, model hanya diberikan input anda dan data rujukan kami sendiri, dan diarahkan untuk kekal di dalamnya. Panduan menerangkan ini secara terperinci."
          }
        ]
      },
      {
        "title": "Apa yang kami tidak lakukan",
        "blocks": [
          {
            "ul": [
              "**Kami tidak meramal nasib.** Tiada apa di sini yang menjanjikan tuah, kekayaan atau perlindungan.",
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
            "p": "Jadual nama-hanja tidak hanya menentukan karakter mana yang boleh digunakan. **Ia juga menetapkan bagaimana setiap karakter dibaca apabila ia muncul dalam nama.** Bacaan tetap itulah yang digunakan untuk pendaftaran."
          },
          {
            "p": "Kebanyakan hanja mempunyai beberapa bacaan yang mungkin. Namun, nama ditulis dalam dokumen dan diucapkan dengan kuat, jadi ia memerlukan tepat satu bacaan. Oleh itu, jadual menetapkan bacaan untuk setiap karakter untuk digunakan dalam nama, dan tiada bacaan lain boleh didaftarkan."
          }
        ]
      },
      {
        "title": "Jadi bunyi datang dahulu",
        "blocks": [
          {
            "p": "Inilah sebabnya Naming-Link menetapkan bunyi sebelum mencari hanja. Jika nama adalah \"지은\", makna hanya boleh dipilih di antara karakter yang ditugaskan bacaan **지** dan karakter yang ditugaskan bacaan **은**."
          },
          {
            "p": "Walau sesempurna mana makna itu, karakter yang bacaan tidak sepadan tidak boleh digunakan untuk nama itu. Kami juga tidak pernah mengubah bunyi nama untuk sesuai dengan karakter — nama diucapkan seumur hidup, dan bunyi ditetapkan dahulu, dengan hanja mengikuti."
          }
        ]
      },
      {
        "title": "Nama keluarga berada di luar jadual ini",
        "blocks": [
          {
            "p": "Ini sering disalah faham. **Jadual mengawal nama yang diberikan, bukan nama keluarga.** Nama keluarga mengikuti apa yang sudah ada dalam pendaftaran keluarga, jadi ada orang yang menggunakan karakter yang tidak terdapat dalam jadual nama-hanja."
          },
          {
            "p": "Itulah sebabnya Naming-Link memperlakukan hanja nama keluarga dengan cara yang berbeza. Kami hanya membantu anda mencari nama keluarga, dan kami meninggalkan ruang untuk memasukkan satu secara langsung, untuk orang yang karakternya berada di luar jadual. Nama keluarga dua suku kata seperti Namgung dan Seonwoo dimasukkan dengan cara yang sama."
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
            "p": "Perkhidmatan ini menulis **nama anda** dalam Hangul. Ia tidak memberikan anda nama Korea. Michael menjadi 마이클 — nama yang sama, ditulis supaya orang Korea boleh membacanya dan mengucapkannya. Kami tidak menukarnya kepada nama Korea yang kebetulan bermakna sesuatu yang serupa."
          },
          {
            "p": "Jika nama Korea adalah apa yang anda inginkan, **itu adalah perkhidmatan yang berbeza**. Satu mengekalkan nama anda dan hanya menukar skrip; yang lain mencadangkan nama baru."
          }
        ]
      },
      {
        "title": "Tiada bunyi Korea yang tidak ada",
        "blocks": [
          {
            "p": "Setiap bahasa mempunyai bunyi yang tidak ada dalam bahasa Korea — f, v, z, th, dan perbezaan vokal yang tidak dibuat oleh bahasa Korea. Untuk bunyi tersebut, kami menulis apa yang **seorang penutur Korea sebenarnya katakan** apabila mereka membaca nama anda dengan kuat, bukannya mentranskripsikan fonetik asal simbol demi simbol. Matlamatnya adalah ejaan yang akan digunakan, bukan yang paling teknikal setia."
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
            "p": "Tiada jawapan yang betul tunggal. Ejaan yang paling dekat dengan bunyi asal, yang paling biasa digunakan di Korea, dan yang paling mudah ditulis sering kali adalah tiga perkara yang berbeza. Jadi kami menunjukkan semuanya bersama dan menyatakan apa yang memisahkan mereka."
          },
          {
            "p": "Jika tiada satu pun daripada mereka terasa betul, anda boleh menambah petunjuk tentang bunyi yang anda inginkan dan jalankan semula — sebagai contoh, bahawa suku kata tertentu harus ditulis dengan cara yang berbeza."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tiada hanja di sini",
        "blocks": [
          {
            "p": "Kami tidak melampirkan hanja kepada transliterasi. Hanja membawa makna, dan aliran ini adalah tentang bunyi. Memadankan watak dengan bunyi sahaja boleh membawa anda kepada makna yang tidak pernah anda minta."
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
            "p": "Di Korea, nama keluarga datang terlebih dahulu, dan tidak seperti nama diberi, ia tidak dicipta secara bebas — anda mewarisinya. Jadi kami hanya mencadangkan nama keluarga yang sebenarnya dimiliki oleh orang Korea. Kumpulan default kami adalah **20 nama keluarga yang paling biasa**, yang bersama-sama merangkumi kira-kira 80% daripada populasi."
          },
          {
            "p": "Jika nama keluarga anda kebetulan sepadan dengan nama Korea yang sebenar dari segi bunyi — Wang dengan 왕, Ye dengan 예 — kami meletakkan yang itu terlebih dahulu. Menjaga benang kembali kepada nama asal anda lebih berharga daripada nama keluarga yang dipilih secara rawak."
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
            "p": "Ini adalah nama yang orang di Korea akan sebenarnya memanggil anda, jadi perkara pertama yang kami periksa adalah sama ada seorang Korea dapat mendengarnya sekali dan menulisnya. Nama yang perlu dieja setiap kali adalah beban yang anda tanggung, bukan kami."
          },
          {
            "p": "Makna juga penting. Nama diberi Korea biasanya membawa satu, jadi kami memberitahu anda apa nama itu dibaca dan mengapa kami memilihnya — bukan hanya nama itu sendiri."
          }
        ]
      },
      {
        "title": "Kami bertanya untuk apa nama itu",
        "blocks": [
          {
            "p": "Nama untuk kertas kerja universiti tidak sama dengan nama yang akan ditjerit oleh rakan-rakan di seberang bilik, atau nama yang akan anda gunakan dalam talian. Kami bertanya bagaimana anda merancang untuk menggunakannya dan mengambil kira itu."
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
    "summary": "Cara untuk menghubungi kami untuk pertanyaan, pengembalian, permintaan privasi dan laporan kesilapan, dengan butiran syarikat kami.",
    "backLabel": "Laman Utama",
    "sections": [
      {
        "title": "Emel kami",
        "blocks": [
          {
            "p": "Tulis kepada **{email}**. Kami membalas dalam dua hari bekerja. Untuk apa-apa yang berkaitan dengan pesanan — pembayaran, pengembalian, fail yang tidak anda terima — sila sertakan **nombor pesanan atau emel yang anda bayar**."
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
            "p": "Anda tidak perlu menyertakan nama atau tarikh lahir dalam mesej anda. Hasil percuma tidak pernah disimpan di pelayan kami, jadi kami tidak dapat mencarinya semula — nombor pesanan sudah mencukupi."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Adat",
    "title": "Karakter yang Tradisionalnya Dihindari",
    "summary": "Ia tidak dilarang oleh undang-undang tetapi merupakan adat. Kami telah menulis tentang apa yang telah dihindari dan mengapa, serta bagaimana kami mengendalikannya.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Karakter yang Diterima Secara Sah",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} karakter",
                "label": "Karakter yang Dihindari yang Telah Dikumpulkan"
              },
              {
                "value": "{avoidCommonlyUsed} karakter",
                "label": "Antara mereka, karakter yang masih digunakan secara umum"
              }
            ]
          },
          {
            "p": "Terdapat karakter yang termasuk dalam senarai karakter untuk nama peribadi dan **diterima secara sah**, namun dianggap tidak sesuai untuk nama."
          },
          {
            "p": "Pemikiran yang mendasari adalah bahawa **\"makna yang berlebihan sebenarnya tidak diingini.\"** Ini termasuk karakter yang dianggap terlalu berharga (珍 harta, 寶 permata), karakter yang dilihat mempunyai kehadiran yang terlalu kuat (王 raja, 帝 maharaja), dan mereka yang dianggap terlalu megah untuk diwakili oleh seseorang, seperti langit atau dewa. Ini mencerminkan rasa pengekangan yang lama, mempercayai bahawa nama boleh mengatasi individu."
          },
          {
            "p": "**Namun, karakter ini tidak tidak boleh digunakan.** Ia bukan larangan undang-undang tetapi adat, dan adat berbeza mengikut kawasan, keluarga, dan generasi, serta boleh berubah dari semasa ke semasa."
          },
          {
            "p": "Sebenarnya, antara {avoidTotal} karakter yang kami kumpulkan, {avoidCommonlyUsed} masih digunakan secara umum dalam nama. Hakikat bahawa mereka diketahui dihindari tetapi masih digunakan secara meluas menunjukkan bahawa adat ini tidak mutlak."
          }
        ]
      },
      {
        "title": "Apa Kategori yang Terdapat?",
        "blocks": [
          {
            "p": "Karakter yang telah dikumpulkan kini dibahagikan kepada tujuh kategori."
          },
          {
            "ul": [
              "**Harta dan Objek** — Karakter yang merujuk secara langsung kepada kekayaan atau barang",
              "**Langit dan Alam** — Perkara seperti matahari, bulan, dan langit yang dianggap terlalu megah untuk diwakili oleh seseorang",
              "**Raja dan Bangsawan** — Karakter yang menandakan status, seperti raja atau maharaja",
              "**Makhluk Ilahi** — Karakter yang merujuk kepada alam suci, seperti dewa atau roh",
              "**Musim dan Lain-lain** — Karakter yang berkaitan dengan waktu atau keadaan tertentu",
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
            "p": "Kami tidak menghapuskan karakter ini secara sewenang-wenangnya. **Kami telah menyediakan dua pilihan di skrin input untuk penama memilih bagaimana untuk mengendalikannya.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Pilihan Tersedia di Skrin Input",
        "blocks": [
          {
            "p": "**Kecualikan Karakter yang Dihindari daripada Calon** — Jika diaktifkan, mereka akan dikecualikan sepenuhnya. Jika dinonaktifkan, mereka akan kekal dalam hasil dengan label \"Tradisionalnya Dihindari\" dan alasan yang dilampirkan."
          },
          {
            "p": "**Kecualikan Bahkan Karakter yang Digunakan Secara Umum** — Ini mengecualikan karakter yang terdapat dalam senarai penghindaran tetapi sebenarnya digunakan secara meluas (圭·琳·玲·元·太·星·海, dll.). Jika diaktifkan, calon akan berkurangan dengan ketara."
          },
          {
            "p": "Secara lalai adalah untuk **tidak mengecualikan tetapi hanya memaparkan** mereka. Jika mereka dikeluarkan secara senyap dari senarai, ia mungkin kelihatan kepada mereka yang ingin menggunakan karakter itu seolah-olah ia tidak wujud."
          }
        ]
      },
      {
        "title": "Memastikan Pilihan Tidak Hilang",
        "blocks": [
          {
            "p": "Jika tiada karakter yang boleh digunakan untuk suku kata itu, kami akan mengangkat pengecualian untuk suku kata itu dan menunjukkan calon. Kami percaya ia lebih baik daripada tiada pilihan sama sekali."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Asas Perkhidmatan",
    "title": "Apa Asas untuk Penukaran Nama Global?",
    "summary": "Kami menyediakan calon dari lima perspektif, mengekalkan sistem penulisan setiap bahasa dan menggunakan hanya nama yang sedia ada.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Calon Disediakan dari Lima Perspektif",
        "blocks": [
          {
            "p": "Terdapat lebih daripada satu cara untuk menterjemahkan nama ke dalam bahasa lain. Bergantung kepada sama ada untuk mengekalkan bunyi atau makna, memilih nama yang semula jadi dalam konteks tempatan atau mengutamakan keperibadian, jawapannya akan berbeza. Oleh itu, daripada membentangkan satu pilihan, kami menyediakan **satu dari setiap lima perspektif yang berbeza**."
          },
          {
            "ul": [
              "**Pilihan Pemeliharaan Bunyi** — Mengekalkan bunyi nama asal sebanyak mungkin",
              "**Pilihan Terjemahan Makna** — Menterjemahkan makna yang terkandung dalam nama ke dalam nama bahasa itu",
              "**Pilihan Kompromi Bunyi dan Makna** — Mengambil separuh dari setiap satu",
              "**Pilihan Autentik Tempatan** — Memilih nama yang sebenarnya digunakan secara umum dalam konteks budaya itu",
              "**Pilihan Keperibadian dan Penjenamaan** — Mengutamakan nama yang mudah diingati dan berbeza"
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
            "p": "Apabila menterjemahkan ke dalam bahasa yang tidak menggunakan huruf Roman, ia mesti ditulis dalam skrip bahasa itu. Untuk Jepun, ia akan menjadi kana dan kanji; untuk Rusia, Mongolia, dan Kazakh, ia akan menjadi Cyrillic; untuk Arab, ia akan menjadi skrip Arab; dan untuk Thai, Khmer, dan Hindi, ia akan menjadi skrip masing-masing. Jika anda menulisnya dalam huruf Roman dan memanggilnya \"nama Jepun,\" ia tidak boleh digunakan di negara itu."
          },
          {
            "p": "Oleh itu, kami mempunyai peraturan yang berasingan untuk setiap sistem penulisan bahasa, dan pelayan memeriksa sekali lagi untuk memastikan hasilnya dalam sistem penulisan itu. Kesilapan seperti mengabaikan nama keluarga atau mencampurkan dalam Hangul disaring di sini."
          }
        ]
      },
      {
        "title": "Kami Menggunakan Nama yang Sebenarnya Digunakan",
        "blocks": [
          {
            "p": "Untuk mengelakkan mencipta nama yang kedengarannya mungkin tetapi tidak wujud di negara itu, kami berdasarkan pilihan kami pada nama yang sedia ada. Nama digunakan dalam dokumen dan pengenalan, jadi jika seseorang tempatan berfikir \"tiada nama seperti itu,\" ia tidak boleh digunakan."
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
            "p": "Pada awalnya, kami mencipta lima perspektif secara berasingan. Ia lebih cepat, tetapi **bilangan calon berbeza setiap kali.** Apabila setiap orang memilih calon, terdapat tumpang tindih atau percanggahan, dan jika satu gagal, calon itu akan hilang sepenuhnya, menghasilkan hanya dua atau tiga dan bukannya lima."
          },
          {
            "p": "Sekarang, kerana kami menentukan set calon dan pengagihan perspektif sekaligus, **bilangan itu tetap.** Walaupun satu penerangan gagal, calon tetap ada dan dipersembahkan dengan maklumat ringkas. Kami percaya adalah lebih baik untuk sentiasa mempunyai bilangan yang sama, walaupun ia mengambil sedikit masa lebih lama."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Asas Perkhidmatan",
    "title": "Apakah asas untuk memadankan makna hanja?",
    "summary": "Pertama, bunyi ditetapkan, dan hanya hanja yang boleh didaftarkan dengan bunyi itu dikumpulkan, dan makna dilihat sebagai gabungan dan bukannya satu karakter tunggal.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Pertama, tetapkan bunyi",
        "blocks": [
          {
            "p": "Jika anda telah memutuskan pada \"지은\", maka **지** dan **은** tidak berubah. Kami tidak mengubah bunyi nama untuk disesuaikan dengan hanja. Nama adalah sesuatu yang dipanggil sepanjang hayat, dan kami percaya bahawa urutannya adalah bunyi ditetapkan terlebih dahulu, diikuti oleh hanja."
          },
          {
            "figure": "hanja-match-flow",
            "labels": {
              "soundStep": "① Tetapkan bunyi",
              "soundNote": "Kami tidak pernah mengubahnya untuk disesuaikan dengan karakter",
              "tableStep": "② Saring mengikut jadual rasmi",
              "tableBody": "hanya karakter yang ditetapkan dengan bacaan itu",
              "tableNote": "dari semua {total} karakter dalam jadual",
              "tableNoteNoCount": "hanya karakter yang terdapat dalam jadual",
              "combineStep": "③ Bacakan kedua-duanya bersama",
              "combineNote": "makna adalah bagaimana pasangan itu dibaca, bukan setiap karakter secara berasingan"
            },
            "caption": "Ini adalah urutan di mana calon disempitkan. Ia bukan tentang memilih hanja terlebih dahulu dan memadankan bunyi, tetapi sebaliknya bunyi datang terlebih dahulu, dan hanya karakter yang ditetapkan untuk dibaca dengan bunyi itu menjadi calon."
          }
        ]
      },
      {
        "title": "Kumpulkan hanya hanja yang boleh didaftarkan dengan bunyi itu",
        "blocks": [
          {
            "p": "Jadual hanja nama rasmi mempunyai bacaan yang ditetapkan untuk setiap karakter apabila digunakan dalam nama. Hanya karakter yang ditetapkan untuk dibaca sebagai **지** dan **은** menjadi calon. Tidak kira betapa baiknya maknanya, jika bacaan tidak sepadan, ia tidak boleh menjadi hanja untuk nama itu."
          },
          {
            "p": "Julat untuk memilih calon adalah {characterTotal} karakter dari jadual Mahkamah Agung. Karakter yang tidak terdapat dalam jadual ini tidak dipersembahkan sama sekali — walaupun ditunjukkan, mereka tidak boleh didaftarkan."
          },
          {
            "p": "Bilangan karakter dalam jadual yang diterbitkan oleh Mahkamah Agung adalah sedikit lebih daripada ini. Jadual juga termasuk **karakter tanpa kod karakter standard**, yang tidak dapat dipaparkan dengan betul pada skrin dan dokumen, jadi karakter tersebut telah dikecualikan daripada calon. Anda mesti menyemak dengan pihak berkuasa yang berkaitan sama ada anda boleh mendaftar dengan karakter tersebut."
          }
        ]
      },
      {
        "title": "Makna dilihat sebagai gabungan, bukan karakter tunggal",
        "blocks": [
          {
            "p": "Makna setiap karakter individu yang baik dan makna yang dibaca apabila dua karakter digabungkan adalah berbeza. Nama dibaca sebagai gabungan, jadi kami melihat gabungan bersama. Jika anda mempunyai makna tertentu yang ingin dimasukkan atau dielakkan, itu diambil kira."
          },
          {
            "p": "Jika anda menggunakan karakter generasi, karakter itu adalah tetap, dan gabungan dicari dari posisi yang tinggal. Nama keluarga (성) tidak terhad oleh jadual hanja nama rasmi, jadi ia diperlakukan secara berasingan."
          }
        ]
      },
      {
        "title": "Kami menunjukkan adat penghindaran tanpa mengeluarkannya",
        "blocks": [
          {
            "p": "Jika karakter yang secara tradisional dianggap perlu dielakkan termasuk dalam calon, kami tidak mengeluarkannya tetapi menunjukkan sebab bersamanya. Ini adalah perkara adat, bukan undang-undang, dan anda boleh memilih untuk mengecualikannya sepenuhnya dari skrin input. Untuk maklumat lanjut, lihat [Hanja yang Tradisional Dielakkan](/guide/avoid)."
          }
        ]
      },
      {
        "title": "Kami juga memaklumkan anda tentang sebab-sebab pengecualian",
        "blocks": [
          {
            "p": "Kami menunjukkan mengapa karakter tertentu dikecualikan daripada calon. Jika kami hanya menunjukkan apa yang dipilih, anda tidak dapat mengetahui \"mengapa yang ini?\" Jika tiada karakter yang boleh digunakan untuk suku kata itu, kami akan mengangkat pengecualian untuk suku kata itu dan menunjukkan calon."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bagaimana untuk membaca keputusan",
        "blocks": [
          {
            "p": "Calon adalah **perspektif, bukan peringkat**. Yang pertama tidak bermakna ia adalah nama terbaik; mereka dipilih dari perspektif yang berbeza. Mereka yang mengutamakan gabungan makna, mereka yang memilih karakter yang jarang, dan mereka yang menekankan neutraliti dipersembahkan berdampingan. Jawapannya berbeza bergantung pada perspektif mana yang anda hargai."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Standard Kami",
    "title": "Apa yang Kami Tidak Gunakan",
    "summary": "Kami tidak menetapkan jumlah nasib atau skor numerik, dan kami juga tidak menggunakan kiraan strok. Lima elemen hanya digunakan sebagai paksi tambahan. Berikut adalah sebab-sebabnya.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Sebab-sebab untuk tidak menetapkan jumlah nasib atau skor numerik",
        "blocks": [
          {
            "p": "Terdapat kaedah yang menetapkan jumlah nasib atau skor numerik kepada nama untuk menilai mereka. Naming-Link tidak menyediakan nombor tersebut. Sebab-sebabnya adalah empat."
          },
          {
            "p": "**Pertama, tidak ada satu standard sahaja.** Kaedah untuk mengira nasib berbeza mengikut sekolah, dan nama yang sama boleh dinilai secara positif oleh satu standard dan negatif oleh yang lain. Kami tidak mempunyai asas untuk memutuskan yang mana satu yang betul. Adalah tidak jujur untuk mempersembahkan satu seolah-olah ia adalah jawapan."
          },
          {
            "p": "**Kedua, pengiraan tersebut bergantung kepada kiraan strok.** Walau bagaimanapun, data Mahkamah Agung tidak termasuk kiraan strok sama sekali. Selain itu, kiraan strok boleh berbeza bergantung kepada sama ada mereka dikira sebagai karakter biasa atau disederhanakan dan bagaimana radikal dikira. Oleh kerana nombor asas tidak ditetapkan dengan pasti, skor yang dibina di atasnya tidak boleh menjadi muktamad."
          },
          {
            "p": "**Ketiga, nombor kelihatan lebih kukuh daripada realiti.** Apabila ia mengatakan \"87 mata\", ia dibaca seperti nilai yang diukur dan bukannya tafsiran konvensional. Mereka yang menamakan mungkin merasa tertekan oleh nombor itu, menolak apa yang benar-benar penting (Adakah ia menyenangkan untuk dipanggil? Adakah makna itu sesuai? Adakah ia mengandungi harapan yang diinginkan?)."
          },
          {
            "p": "**Keempat, tiada cara untuk mengesahkan.** Hubungan antara nama dan kehidupan seseorang tidak dapat disahkan. Menukar sesuatu yang tidak dapat dikatakan betul atau salah menjadi skor menghasilkan nombor yang tidak dapat disahkan, walaupun ia tidak boleh salah."
          },
          {
            "p": "Kami hanya menggunakan apa yang boleh **dibuktikan.** Jadual hanja nama rasmi Mahkamah Agung, bacaan yang ditetapkan untuk setiap karakter, dan makna yang disenaraikan dalam jadual. Sebaliknya, kami memberikan sebab mengapa calon ini dipilih dan mengapa karakter tertentu dikecualikan, menunjukkan **sebab-sebab dan bukannya skor**."
          }
        ]
      },
      {
        "title": "Kami tidak menggunakan kiraan strok",
        "blocks": [
          {
            "p": "Data hanja nama rasmi yang disediakan oleh Mahkamah Agung tidak termasuk kiraan strok. Di antara {characterTotal} karakter yang kami terima, **tiada satu karakter pun mempunyai kiraan strok.**"
          },
          {
            "p": "Untuk menggunakan kiraan strok, kami perlu mendapatkan nombor dari tempat lain, tetapi jika kami tidak dapat menjelaskan dari mana nombor tersebut berasal dan kriteria apa yang digunakan untuk mengiranya, ia bermakna menilai nama berdasarkan nombor yang tidak berasas. Kami telah memutuskan untuk tidak menilai nama berdasarkan nilai yang tidak dapat dibuktikan."
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
              "saeng": "Generasi — setiap satu melahirkan jiran sebelahnya",
              "geuk": "Kawalan — setiap satu mengekang yang dilangkau"
            },
            "caption": "Hubungan antara lima elemen. Bergerak sepanjang bulatan mewakili generasi bersama (相生), sementara melangkau satu dan menekan ke bawah mewakili pengekangan bersama (相剋). Kami menggunakan hubungan ini hanya sebagai paksi tambahan untuk membandingkan calon."
          },
          {
            "p": "Jika anda telah memasukkan bulan kelahiran anda, kami menggunakan rujukan ringkas lima elemen berdasarkan bulan itu sebagai paksi tambahan untuk membandingkan calon. Namun, ini bukan analisis saju yang tepat, dan **kami tidak mendakwa bahawa nama menentukan nasib atau watak seseorang.**"
          },
          {
            "p": "Dalam pemilihan akhir, apa yang kami utamakan adalah bunyi, gabungan makna, nilai yang ingin disampaikan oleh keluarga, dan sama ada ia boleh didaftarkan. Jika anda tidak memasukkan bulan kelahiran anda, kami sepenuhnya mengecualikan rujukan lima elemen dari analisis — kami tidak membuat andaian sewenang-wenangnya tentang maklumat yang tidak diketahui."
          },
          {
            "p": "Jika anda mahukan analisis berdasarkan saju yang tepat, kami membahasnya dalam laporan terperinci yang berasingan. Sebab kami tidak mengutamakan lima elemen dalam pemadanan hanja percuma adalah kerana kami tidak mahu menyampaikan penilaian berdasarkan lima elemen yang diperoleh daripada tarikh dan waktu kelahiran yang tidak lengkap seolah-olah ia adalah muktamad."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Produk Berbayar",
    "title": "Apa yang termasuk dalam produk berbayar?",
    "summary": "Kami menjelaskan berapa banyak yang boleh dilihat secara percuma dan apa ciri tambahan yang datang dengan pembayaran untuk setiap produk. Harga diambil dari tetapan produk sebenar.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Apa yang boleh dilihat secara percuma?",
        "blocks": [
          {
            "p": "Mencipta nama dan melihat keputusan adalah **percuma**. Tiada pendaftaran keahlian diperlukan. Anda boleh melihat makna yang sepadan dengan hanja, mencipta nama Korea, penukaran nama global, dan notasi sebutan Hangul, bersama dengan keputusan yang disyorkan dan justifikasi mereka di skrin."
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
            "p": "Jika anda tidak tergesa-gesa, anda tidak perlu membeli. **Keputusan dari pembukaan melalui iklan dan yang dari pembayaran adalah sama sekali** — ia hanya soal menunggu, dan membayar tidak menghasilkan calon yang lebih baik."
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
              "**Maksimum 5 calon hanja terperinci** — {priceFiveDetail}. Anda boleh memperluas penjelasan untuk sehingga lima calon di skrin. Tiada PDF.",
              "**Maksimum 10 calon hanja PDF terperinci yang diperluas** — {priceTenDetail}. Jumlah calon meningkat kepada sepuluh, dan dokumen PDF disertakan.",
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
            "p": "Hanja yang boleh digunakan dan maknanya datang dari jadual nama-hanja rasmi yang ditetapkan oleh Mahkamah Agung Korea, dan semuanya tersedia untuk umum dalam dokumen panduan perkhidmatan. Apa yang dijual oleh produk berbayar bukanlah maklumat hanja tetapi **tindakan memilih dan menerangkannya mengikut nama**."
          }
        ]
      },
      {
        "title": "PDF untuk Pengguna Global",
        "blocks": [
          {
            "p": "Dokumen yang tersedia untuk menukarkan nama asing ke dalam nama Korea atau menulis nama dalam Hangul. Harga mengikuti jumlah yang dipaparkan di skrin pembayaran."
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
            "p": "Kami mengukir nama yang dicipta di skrin ke dalam cop fizikal dan menghantarnya kepada anda. Harga berbeza mengikut model — cop bulat {priceStampRound}, cop persegi {priceStampSquare}, cop ebony {priceStampEbony}. Penghantaran antarabangsa juga tersedia."
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
            "p": "**Produk digital disediakan segera setelah pembayaran.** Anda boleh membatalkan dan menerima pengembalian penuh pada bila-bila masa sebelum muat turun bermula, tetapi setelah muat turun selesai, penarikan kerana perubahan fikiran yang sederhana adalah terhad (Artikel 17, Perenggan 2 Akta Perdagangan Elektronik). Syarat ini dipersetujui secara berasingan di skrin pembayaran."
          },
          {
            "p": "**Aduan tentang kandungan keputusan bukanlah alasan untuk pengembalian.** Namun, jika dokumen tidak dibuat, fail tidak dapat dibuka, atau jumlah pembayaran berbeza dari pesanan, ia akan diproses sebagai pengeluaran semula atau pengembalian penuh."
          },
          {
            "p": "Syarat terperinci dinyatakan dalam [Dasar Pengembalian](/refund-policy) dan [Panduan Harga](/pricing). Teks ini berfungsi sebagai panduan kepada apa yang termasuk, dan syarat undang-undang diutamakan dalam dua dokumen tersebut."
          }
        ]
      }
    ]
  },
  "guide/hanja-basics": {
    "eyebrow": "Sistem",
    "title": "Apa itu nama-hanja rasmi?",
    "summary": "Hanja yang boleh digunakan untuk nama kanak-kanak telah ditetapkan oleh Mahkamah Agung dalam satu jadual. Ini merangkum apa itu jadual dan mengapa ia telah ditetapkan.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Apa itu nama-hanja rasmi?",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal} watak",
                "label": "Nama-hanja rasmi"
              },
              {
                "value": "{syllableCount} suku kata",
                "label": "Suku kata Hangul yang termasuk"
              },
              {
                "value": "{effectiveDate}",
                "label": "Tarikh rujukan jadual"
              }
            ]
          },
          {
            "p": "Anda tidak boleh menggunakan sebarang watak untuk nama kanak-kanak. **Hanja yang boleh digunakan untuk pendaftaran kelahiran telah ditetapkan oleh Mahkamah Agung dalam satu jadual, dan hanya watak dalam jadual itu boleh didaftarkan sebagai hanja untuk nama.** Ini dipanggil nama-hanja rasmi."
          }
        ]
      },
      {
        "title": "Mengapa ia telah ditetapkan?",
        "blocks": [
          {
            "p": "Terdapat puluhan ribu hanja. Antara mereka, ada yang mempunyai makna yang tidak menyenangkan, ada yang tidak lagi digunakan dan tidak mempunyai bacaan yang diketahui, dan ada yang tidak dapat dipaparkan di komputer sama sekali. Jika watak sedemikian termasuk dalam nama, orang yang akhirnya menanggung beban adalah mereka yang akan menggunakan nama itu sepanjang hayat. Nama boleh pecah atau dibaca dengan cara yang berbeza di pelbagai tempat seperti pendaftaran penduduk, pasport, bank, dan sekolah, memerlukan individu untuk menerangkan nama mereka sendiri."
          },
          {
            "p": "Oleh itu, satu kaedah telah dipilih untuk mendefinisikan julat hanja yang boleh digunakan dalam nama. Daripada menjadi peraturan yang menyekat, ia lebih kepada mekanisme untuk memastikan bahawa nama boleh digunakan tanpa masalah sepanjang hayat seseorang."
          }
        ]
      },
      {
        "title": "Apakah asas bagi definisi tersebut?",
        "blocks": [
          {
            "p": "Mahkamah Agung menetapkan jadual nama-hanja rasmi, yang disemak semula mengikut keperluan, dan aksara ditambah."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bahan yang digunakan dalam skrin ini",
        "blocks": [
          {
            "p": "{publisher} data hanja nama rasmi · Setakat {effectiveDate}"
          },
          {
            "p": "{characterTotal} aksara merangkumi {syllableCount} suku kata Hangul. Nilai hash fail asal juga disimpan, jadi jika jadual berubah, ia boleh disemak bila dan apa yang telah berubah."
          }
        ]
      },
      {
        "title": "Bilangan aksara yang diumumkan oleh Mahkamah Agung berbeza daripada apa yang kami tunjukkan",
        "blocks": [
          {
            "p": "**Hanja nama rasmi yang diumumkan oleh Mahkamah Agung adalah {announcedTotal} aksara, manakala apa yang kami persembahkan sebagai calon adalah {characterTotal} aksara.** Tiada sebab untuk menyembunyikan perbezaan ini, jadi kami menyatakannya dengan jelas."
          },
          {
            "p": "Jika anda menyemak data pertanyaan Mahkamah Agung, ia mengandungi {listedTotal} aksara. Antara mereka, **{excludedNoStandardCode} aksara** adalah **aksara yang tidak mempunyai tempat dalam kod aksara umum global (Unicode).** Sistem Mahkamah Agung menganggap aksara tersebut dengan nombor yang hanya berfungsi dalam sistemnya sendiri, dan ia dipaparkan sebagai **imej** dan bukannya aksara di skrin."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Menambah lebih banyak fon tidak akan menyelesaikan isu ini",
        "blocks": [
          {
            "p": "Untuk aksara muncul di skrin, ia mesti mempunyai **nombor yang dipersetujui oleh dunia**, dan fon mengandungi imej yang sepadan dengan nombor itu. Aksara yang tidak mempunyai nombor tidak boleh dimasukkan dalam mana-mana fon. Tidak kira berapa banyak fon yang kami tambah, aksara ini akan muncul sebagai kotak kosong."
          }
        ]
      },
      {
        "title": "Oleh itu, mereka telah dikeluarkan daripada calon",
        "blocks": [
          {
            "p": "**Mengisi senarai dengan aksara yang tidak dapat dipaparkan tidak membantu.** Kebanyakan makna aksara ini juga kosong dalam data kami, yang tidak selari dengan kaedah perkhidmatan memilih nama berdasarkan makna."
          },
          {
            "p": "**Sebab yang lebih penting terletak pada orang yang akan menggunakan nama tersebut.** Nama adalah nilai yang akan dimasukkan di pelbagai tempat sepanjang hayat seseorang. Aksara tanpa kod aksara mungkin tidak dapat dimasukkan atau dicetak dalam sistem untuk bank, sekolah, hospital, atau pasport, walaupun selepas menyelesaikan pendaftaran kelahiran. Oleh itu, kami tidak dapat mengesyorkan aksara tersebut."
          },
          {
            "p": "Namun, **kami tidak menentukan sama ada aksara tersebut boleh digunakan atau tidak.** Oleh kerana mereka adalah aksara dalam jadual Mahkamah Agung, pendaftaran itu sendiri mungkin boleh dilakukan. Jika anda benar-benar ingin menggunakan aksara tersebut, sila semak secara langsung dalam sistem pendaftaran hubungan keluarga elektronik Mahkamah Agung, dan **tanya dengan pihak berkuasa yang berkaitan mengenai kebolehan penggunaannya.**"
          }
        ]
      },
      {
        "title": "Jika anda ingin menggunakan hanja yang tidak terdapat dalam jadual",
        "blocks": [
          {
            "p": "Anda tidak boleh menggunakannya. Untuk lebih tepat, aksara tersebut tidak akan didaftarkan sebagai hanja untuk nama, dan nama hanya akan direkodkan dalam Hangul. Jika anda ingin menggunakan hanja bersamanya, anda mesti memilih dari jadual."
          },
          {
            "p": "Oleh itu, kami tidak mempersembahkan aksara yang tidak terdapat dalam jadual sebagai calon. Semua hanja yang kelihatan di skrin adalah aksara yang boleh digunakan untuk pendaftaran kelahiran. Senarai lengkap boleh didapati dalam [Senarai Lengkap Hanja Nama Rasmi](/guide/hanja)."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Senarai",
    "title": "Senarai Lengkap Hanja Nama Rasmi",
    "summary": "Kami telah mengatur hanja yang boleh digunakan untuk pendaftaran kelahiran mengikut konsonan awal. Anda boleh melihat bacaan yang ditetapkan dan makna untuk setiap aksara apabila digunakan dalam nama.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Carian Mengikut Konsonan Awal",
        "slot": "chosung",
        "blocks": [
          {
            "p": "Ini termasuk semua {characterTotal} aksara dari jadual hanja nama rasmi Mahkamah Agung. Setiap aksara termasuk **bacaan apabila digunakan dalam nama** dan maknanya. Aksara yang tidak termasuk dalam jadual tidak boleh didaftarkan sebagai hanja nama, jadi anda harus memilih dari aksara yang disenaraikan di sini."
          },
          {
            "p": "Dua nombor pada butang di bawah mewakili **bilangan aksara dengan konsonan awal tersebut** dan **bilangan suku kata yang diliputi**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jika aksara yang anda cari tidak terdapat dalam senarai",
        "blocks": [
          {
            "p": "Bilangan aksara yang diumumkan oleh Mahkamah Agung adalah {announcedTotal}, tetapi senarai ini mengandungi {characterTotal} aksara. **Perbezaan {excludedNoStandardCode} aksara adalah mereka yang tidak dapat dipaparkan dalam mana-mana fon kerana kekurangan tempat dalam kod aksara sejagat.** Sistem Mahkamah Agung menunjukkan aksara tersebut sebagai imej."
          },
          {
            "p": "Kami telah merincikan sebab-sebab untuk ini dan mengapa kami tidak mengesyorkan aksara tersebut dalam [Apakah Hanja Nama Rasmi?](/guide/hanja-basics). Anda harus menyemak dengan pihak berkuasa yang berkaitan untuk kebolehan penggunaan sebenar aksara tersebut."
          }
        ]
      },
      {
        "title": "Konsonan Awal dengan Sedikit Aksara",
        "slot": "tiny",
        "blocks": [
          {
            "p": "Konsonan awal di bawah mempunyai hanja nama rasmi yang sangat sedikit, jadi kami telah memaparkannya di sini tanpa halaman berasingan."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cara Membaca Senarai Ini",
        "blocks": [
          {
            "p": "Untuk **伽 · 가 · 절**, apabila menggunakan \"伽\" dalam nama, ia dibaca sebagai **가** dan bermaksud \"kuil\". Walaupun untuk hanja yang sama, bacaan apabila digunakan dalam nama ditetapkan oleh jadual, dan ia tidak boleh digunakan dengan cara lain."
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
  "intro": "Perubahan kepada terma penggunaan anda — harga, dasar — dipaparkan di sini sebelum ia berkuat kuasa. Penambahbaikan dalaman tidak disenaraikan: apa yang muncul di sini adalah apa yang anda perlu tahu.",
  "empty": {
    "title": "Tiada notis lagi",
    "body": "Apabila sesuatu berubah, ia akan muncul di sini."
  },
  "effective": "Berkuat kuasa {date}",
  "pager": {
    "label": "Halaman notis",
    "newer": "← Lebih Baru",
    "older": "Lebih Lama →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Halaman Hubungi dan Mengenai kini dibuka",
      "body": [
        "Soalan, pengembalian wang, permintaan privasi dan laporan ralat kini mempunyai satu tempat untuk pergi. Halaman hubungi di footer menyenaraikan emel dan butiran syarikat kami.",
        "Apa yang menjadi asas jawapan kami, dan apa yang kami secara sengaja tidak lakukan, ditulis di halaman mengenai."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Laporan PDF dikeluarkan dalam Bahasa Inggeris untuk Arab dan Khmer",
      "body": [
        "Jika anda menggunakan perkhidmatan dalam Bahasa Arab atau Khmer, PDF yang anda beli dihasilkan dalam Bahasa Inggeris. Alat yang menyusun dokumen kami belum dapat menetapkan perenggan dalam dua skrip tersebut.",
        "Skrin tetap dalam bahasa anda, dan nama anda dicetak dalam skrip anda sendiri di dalam dokumen.",
        "Nota yang sama muncul sebelum pembayaran. Apabila alat menyokong skrip ini, kami akan menyatakannya di sini."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Pembayaran belum dibuka lagi",
      "body": [
        "Mencipta nama dan membaca hasilnya adalah percuma hari ini, dan tiada akaun diperlukan.",
        "Item berbayar belum dijual lagi. Jumlah yang ditunjukkan di halaman harga adalah apa yang akan dikenakan setelah jualan dibuka."
      ]
    }
  }
} satisfies NoticeCopy;
