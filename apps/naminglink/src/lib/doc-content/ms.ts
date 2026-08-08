import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Bahasa Melayu — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const MS_DOCS = {
  "about": {
    "eyebrow": "Mengenai",
    "title": "Mengenai Naming-Link",
    "summary": "Kami membantu anda memilih dan memahami nama Korea. Berikut adalah asas kepada hasil kami, dan apa yang kami sengaja tidak lakukan.",
    "backLabel": "Laman Utama",
    "sections": [
      {
        "title": "Apa yang kami lakukan",
        "blocks": [
          {
            "p": "Naming-Link membantu anda **memilih dan memahami nama Korea** — hanja di sebalik nama seorang kanak-kanak, nama Korea untuk digunakan di luar negara, ejaan Hangul nama anda sendiri, dan cenderamata seperti cap atau laporan bercetak."
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
            "p": "Hanja datang dari **jadual nama-hanja rasmi Mahkamah Agung Korea.** Setiap karakter mempunyai bacaan tetap untuk digunakan dalam nama, dan karakter di luar jadual tidak boleh didaftarkan. Kami tidak menambah senarai itu atau memilih kegemaran."
          },
          {
            "p": "Saju dan angka lima elemen dikira dari **kalendar lunisolar Korea**, dengan waktu kelahiran diperbetulkan kepada waktu solar sebenar untuk tempat kelahiran. Bacaan adalah rujukan tradisional, bukan ramalan."
          },
          {
            "p": "Penjelasan bertulis dihasilkan oleh AI. Untuk mengelakkan ia **mencipta perkara**, model hanya diberikan input anda dan data rujukan kami, dan diberitahu untuk kekal di dalamnya. Panduan menerangkan ini dengan terperinci."
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
            "p": "Perkhidmatan ini tersedia dalam 23 bahasa. PDF berbayar dikeluarkan dalam bahasa Inggeris untuk Arab dan Khmer — pemapar PDF tidak menyokong skrip tersebut — dan kami menyatakannya di skrin sebelum anda membayar."
          }
        ]
      },
      {
        "title": "Hubungi",
        "blocks": [
          {
            "p": "Butiran syarikat dan cara untuk menghubungi kami terdapat di [halaman hubungan](/contact), termasuk pemulangan, permintaan privasi dan laporan ralat."
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
            "p": "Jadual nama-hanja tidak hanya menentukan karakter mana yang boleh digunakan. **Ia juga menetapkan bagaimana setiap karakter dibaca apabila muncul dalam nama.** Bacaan tetap itu adalah apa yang digunakan untuk pendaftaran."
          },
          {
            "p": "Kebanyakan hanja mempunyai beberapa bacaan yang mungkin. Namun, nama ditulis pada dokumen dan diucapkan dengan kuat, jadi ia memerlukan tepat satu. Oleh itu, jadual menetapkan setiap karakter bacaan untuk digunakan dalam nama, dan tiada bacaan lain boleh didaftarkan."
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
            "p": "Walau sebaik mana makna itu, karakter yang bacaan tidak sepadan tidak boleh digunakan untuk nama itu. Kami juga tidak pernah mengubah bunyi nama untuk sesuai dengan karakter — nama diucapkan seumur hidup, dan bunyi ditetapkan dahulu, dengan hanja mengikuti."
          }
        ]
      },
      {
        "title": "Nama keluarga berada di luar jadual ini",
        "blocks": [
          {
            "p": "Ini sering disalah fahami. **Jadual mengawal nama yang diberikan, bukan nama keluarga.** Nama keluarga mengikuti apa yang sudah ada dalam pendaftaran keluarga, jadi sesetengah orang menggunakan karakter yang tidak terdapat dalam jadual nama-hanja."
          },
          {
            "p": "Itulah sebabnya Naming-Link memperlakukan hanja nama keluarga dengan cara yang berbeza. Kami hanya membantu anda mencari nama keluarga, dan kami meninggalkan ruang untuk memasukkan satu secara langsung, bagi orang yang karakternya berada di luar jadual. Nama keluarga dua suku kata seperti Namgung dan Seonwoo dimasukkan dengan cara yang sama."
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
            "p": "Jika nama Korea adalah apa yang anda mahu, **itu adalah perkhidmatan yang berbeza.** Satu mengekalkan nama anda dan hanya menukar skrip; yang lain mencadangkan nama baru."
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
            "p": "Ejaan yang sama boleh berbeza bergantung kepada asal nama, jadi kami meminta bahasa dan negara anda dan bekerja dari sebutan itu."
          }
        ]
      },
      {
        "title": "Beberapa ejaan, berdampingan",
        "blocks": [
          {
            "p": "Tiada satu jawapan yang betul. Ejaan yang paling dekat dengan bunyi asal, yang paling biasa digunakan di Korea, dan yang paling mudah ditulis sering kali adalah tiga perkara yang berbeza. Jadi kami menunjukkan mereka bersama dan menyatakan apa yang memisahkan mereka."
          },
          {
            "p": "Jika tiada satu pun terasa betul, anda boleh menambah petunjuk tentang bunyi yang anda inginkan dan jalankan semula — sebagai contoh, bahawa suku kata tertentu harus ditulis dengan cara yang berbeza."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tiada hanja di sini",
        "blocks": [
          {
            "p": "Kami tidak melampirkan hanja kepada transliterasi. Hanja membawa makna, dan aliran ini adalah tentang bunyi. Memadankan karakter dengan bunyi sahaja boleh membawa anda kepada makna yang tidak pernah anda minta."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Bagaimana ia berfungsi",
    "title": "Bagaimana kami membina nama Korea",
    "summary": "Kami memilih daripada nama keluarga yang ada, menilai betapa mudahnya nama itu diucapkan dan ditulis, dan bertanya untuk apa nama itu.",
    "backLabel": "Panduan",
    "sections": [
      {
        "title": "Kami bermula dengan **nama keluarga**",
        "blocks": [
          {
            "p": "Di Korea, **nama keluarga** datang terlebih dahulu, dan tidak seperti **nama pemberian**, ia tidak dicipta secara bebas — anda mewarisinya. Jadi kami hanya mencadangkan **nama keluarga** yang sebenarnya dimiliki oleh orang Korea. Kumpulan default kami adalah **20 nama keluarga yang paling umum**, yang bersama-sama merangkumi kira-kira 80% daripada populasi."
          },
          {
            "p": "Jika **nama keluarga** anda kebetulan sepadan dengan nama Korea yang sebenar dari segi bunyi — Wang dengan 왕, Ye dengan 예 — kami meletakkan yang itu terlebih dahulu. Menjaga hubungan kembali kepada nama asal anda lebih berharga daripada **nama keluarga** yang dipilih secara rawak."
          },
          {
            "p": "Anda boleh memilih **nama keluarga** sendiri atau membiarkan kami mencadangkan satu. Dalam apa jua keadaan, ia akan menjadi **nama keluarga yang wujud**."
          }
        ]
      },
      {
        "title": "Mudah untuk disebut, mudah untuk ditulis",
        "blocks": [
          {
            "p": "Ini adalah nama yang akan dipanggil oleh orang di Korea, jadi perkara pertama yang kami periksa adalah sama ada orang Korea dapat mendengarnya sekali dan menuliskannya. Nama yang perlu dieja setiap kali adalah beban yang anda tanggung, bukan kami."
          },
          {
            "p": "Maksud juga penting. **Nama pemberian** Korea biasanya mempunyai satu, jadi kami memberitahu anda bagaimana nama itu dibaca dan mengapa kami memilihnya — bukan hanya nama itu sendiri."
          }
        ]
      },
      {
        "title": "Kami bertanya untuk apa nama itu",
        "blocks": [
          {
            "p": "Nama untuk dokumen universiti tidak sama dengan nama yang akan dipanggil oleh rakan-rakan di seberang bilik, atau nama pengguna yang akan anda gunakan dalam talian. Kami bertanya bagaimana anda merancang untuk menggunakannya dan mengambil kira itu."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ini bukan transliterasi",
        "blocks": [
          {
            "p": "Di sini kami mencadangkan **nama Korea baru**. Jika anda mahu nama anda yang sedia ada ditulis dalam **Hangul** — Michael sebagai 마이클 — lihat [panduan ejaan Hangul](/guide/how-hangul-transliteration)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Notis",
    "title": "Notis",
    "summary": "Di mana kami mengumumkan perubahan yang mempengaruhi cara anda menggunakan perkhidmatan.",
    "backLabel": "Halaman Utama",
    "sections": []
  },
  "contact": {
    "eyebrow": "Hubungi",
    "title": "Hubungi kami",
    "summary": "Cara untuk menghubungi kami untuk pertanyaan, pengembalian wang, permintaan privasi dan laporan kesilapan, dengan butiran syarikat kami.",
    "backLabel": "Halaman Utama",
    "sections": [
      {
        "title": "Emel kami",
        "blocks": [
          {
            "p": "Tulis kepada **{email}**. Kami akan membalas dalam dua hari bekerja. Untuk apa-apa yang berkaitan dengan pesanan — pembayaran, pengembalian wang, fail yang anda tidak terima — sila sertakan **nombor pesanan atau emel yang anda bayar**."
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
              "**Pembayaran dan pengembalian wang** — jika dokumen tidak pernah dihasilkan, atau jumlah yang dikenakan berbeza daripada pesanan anda, kami akan mengembalikan sepenuhnya. Lihat [dasar pengembalian wang](/refund-policy).",
              "**Privasi** — permintaan untuk mengakses, membetulkan atau memadam data anda. Lihat [dasar privasi](/privacy).",
              "**Pembetulan** — jika makna, bacaan atau pengiraan **hanja** kelihatan salah, beritahu kami. Menyebut skrin mana dan apa yang anda masukkan sangat membantu.",
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
            "p": "Anda tidak perlu menyertakan nama atau tarikh lahir dalam mesej anda. Hasil percuma tidak pernah disimpan di pelayan kami, jadi kami tidak dapat mencarinya semula — nombor pesanan sudah memadai."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Adat",
    "title": "Karakter yang Tradisional Dihindari",
    "summary": "Ia tidak dilarang oleh undang-undang tetapi adalah adat. Kami telah menulis tentang apa yang telah dihindari dan mengapa, serta bagaimana kami menanganinya.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Karakter yang Diterima Secara Sah",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} karakter",
                "label": "Karakter yang Dihindari yang Dikumpulkan"
              },
              {
                "value": "{avoidCommonlyUsed} karakter",
                "label": "Antara mereka, karakter yang masih digunakan secara umum"
              }
            ]
          },
          {
            "p": "Terdapat karakter yang termasuk dalam senarai karakter untuk nama peribadi dan **diterima secara sah**, tetapi dianggap tidak sesuai untuk nama."
          },
          {
            "p": "Pemikiran asas adalah bahawa **\"makna yang berlebihan sebenarnya tidak diingini.\"** Ini termasuk karakter yang dianggap terlalu berharga (珍 harta, 寶 permata), karakter yang dilihat mempunyai kehadiran yang terlalu kuat (王 raja, 帝 maharaja), dan mereka yang dianggap terlalu megah untuk dimiliki oleh seseorang, seperti langit atau dewa. Ini mencerminkan rasa restraint yang lama, mempercayai bahawa nama boleh mengatasi orang tersebut."
          },
          {
            "p": "**Namun, karakter ini tidak tidak boleh digunakan.** Ia bukan larangan undang-undang tetapi adat, dan adat berbeza mengikut kawasan, keluarga, dan generasi, dan boleh berubah dari semasa ke semasa."
          },
          {
            "p": "Sebenarnya, antara {avoidTotal} karakter yang kami kumpulkan, {avoidCommonlyUsed} masih digunakan secara umum dalam nama. Fakta bahawa mereka diketahui untuk dielakkan tetapi masih digunakan secara meluas menunjukkan bahawa adat ini tidak mutlak."
          }
        ]
      },
      {
        "title": "Apakah Kategori yang Terdapat?",
        "blocks": [
          {
            "p": "Karakter yang telah dikumpulkan kini dibahagikan kepada tujuh kategori."
          },
          {
            "ul": [
              "**Harta dan Objek** — Karakter yang merujuk secara langsung kepada kekayaan atau barang",
              "**Langit dan Alam** — Perkara seperti matahari, bulan, dan langit yang dianggap terlalu agung untuk diwakili oleh seseorang",
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
            "p": "Kami tidak menghapuskan karakter ini secara sewenang-wenangnya. **Kami telah menyediakan dua pilihan di skrin input untuk penama memilih cara mengendalikannya.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Pilihan Tersedia di Skrin Input",
        "blocks": [
          {
            "p": "**Kecualikan Karakter yang Dielakkan dari Calon** — Jika diaktifkan, mereka akan dikecualikan sepenuhnya. Jika dinonaktifkan, mereka akan kekal dalam keputusan dengan label \"Traditionally Avoided\" dan alasan yang dilampirkan."
          },
          {
            "p": "**Kecualikan Bahkan Karakter yang Digunakan Secara Umum** — Ini mengecualikan karakter yang terdapat dalam senarai penghindaran tetapi sebenarnya digunakan secara meluas (圭·琳·玲·元·太·星·海, dll.). Jika diaktifkan, calon akan berkurangan dengan ketara."
          },
          {
            "p": "Defaultnya adalah **tidak mengecualikan tetapi hanya memaparkan** mereka. Jika mereka dikeluarkan secara senyap dari senarai, ia mungkin kelihatan kepada mereka yang ingin menggunakan karakter itu seolah-olah ia tidak wujud."
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
    "title": "Apakah Asas untuk Penukaran Nama Global?",
    "summary": "Kami menyediakan calon dari lima perspektif, mengekalkan sistem penulisan setiap bahasa dan menggunakan hanya nama yang sedia ada.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Calon Diberikan dari Lima Perspektif",
        "blocks": [
          {
            "p": "Tiada satu cara sahaja untuk menterjemahkan nama ke dalam bahasa lain. Bergantung kepada sama ada untuk mengekalkan bunyi atau makna, memilih nama yang semula jadi dalam konteks tempatan atau mengutamakan keperibadian, jawapannya akan berbeza. Oleh itu, daripada mempersembahkan satu pilihan, kami menyediakan **satu dari setiap lima perspektif yang berbeza**."
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
            "p": "Lima pilihan dijamin akan disediakan. Oleh kerana pilihan berbeza dari orang ke orang, kami percaya adalah lebih baik untuk membenarkan pilihan daripada mempersembahkan satu sebagai jawapan yang betul."
          }
        ]
      },
      {
        "title": "Setiap Bahasa Mempunyai Peraturan Sistem Penulisan yang Berbeza",
        "blocks": [
          {
            "p": "Apabila menterjemahkan ke dalam bahasa yang tidak menggunakan huruf Roman, ia mesti ditulis dalam skrip bahasa itu. Untuk bahasa Jepun, ia akan menjadi kana dan kanji; untuk Rusia, Mongolia, dan Kazakh, ia akan menjadi Cyrillic; untuk Arab, ia akan menjadi skrip Arab; dan untuk Thai, Khmer, dan Hindi, ia akan menjadi skrip masing-masing. Jika anda menulisnya dalam huruf Roman dan memanggilnya \"nama Jepun,\" ia tidak boleh digunakan di negara itu."
          },
          {
            "p": "Oleh itu, kami mempunyai peraturan yang berasingan untuk setiap sistem penulisan bahasa, dan pelayan memeriksa sekali lagi untuk memastikan keputusan berada dalam sistem penulisan itu. Kesilapan seperti mengabaikan nama keluarga atau mencampurkan Hangul ditapis di sini."
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
            "p": "Pada mulanya, kami mencipta lima perspektif secara berasingan. Ia lebih cepat, tetapi **jumlah calon berbeza setiap kali.** Apabila setiap orang memilih calon, terdapat tumpang tindih atau percanggahan, dan jika satu gagal, calon itu akan hilang sepenuhnya, mengakibatkan hanya dua atau tiga dan bukannya lima."
          },
          {
            "p": "Kini, kerana kami menentukan set calon dan pengagihan perspektif sekaligus, **jumlahnya tetap.** Walaupun satu penerangan gagal, calon tetap ada dan dipersembahkan dengan maklumat ringkas. Kami percaya adalah lebih baik untuk sentiasa mempunyai jumlah yang sama, walaupun ia mengambil sedikit masa lebih lama."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Asas Perkhidmatan",
    "title": "Apakah asas untuk memadankan makna hanja?",
    "summary": "Pertama, bunyi ditetapkan, dan hanya hanja yang boleh didaftarkan dengan bunyi itu dikumpulkan, dan makna dilihat sebagai gabungan dan bukannya satu karakter.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Pertama, tetapkan bunyi",
        "blocks": [
          {
            "p": "Jika anda telah memutuskan pada \"지은\", maka **지** dan **은** tidak berubah. Kami tidak mengubah bunyi nama untuk disesuaikan dengan hanja. Nama adalah sesuatu yang dipanggil seumur hidup, dan kami percaya bahawa urutannya adalah bunyi ditetapkan terlebih dahulu, diikuti oleh hanja."
          },
          {
            "figure": "hanja-match-flow",
            "labels": {
              "soundStep": "① Tetapkan bunyi",
              "soundNote": "Kami tidak pernah mengubahnya untuk disesuaikan dengan karakter",
              "tableStep": "② Tapiskan mengikut jadual rasmi",
              "tableBody": "hanya karakter yang ditugaskan bacaan itu",
              "tableNote": "dari semua {total} karakter dalam jadual",
              "tableNoteNoCount": "hanya karakter yang terdapat dalam jadual",
              "combineStep": "③ Baca kedua-duanya bersama",
              "combineNote": "makna adalah bagaimana pasangan itu dibaca, bukan setiap karakter secara berasingan"
            },
            "caption": "Ini adalah urutan di mana calon disempitkan. Ia bukan tentang memilih hanja terlebih dahulu dan mencocokkan bunyi, tetapi sebaliknya bunyi datang terlebih dahulu, dan hanya karakter yang ditetapkan untuk dibaca dengan bunyi itu menjadi calon."
          }
        ]
      },
      {
        "title": "Kumpulkan hanya hanja yang boleh didaftarkan dengan bunyi itu",
        "blocks": [
          {
            "p": "Jadual nama-hanja rasmi mempunyai bacaan yang ditetapkan untuk setiap karakter apabila digunakan dalam nama. Hanya karakter yang ditetapkan untuk dibaca sebagai **지** dan **은** menjadi calon. Tidak kira betapa baiknya maknanya, jika bacaan tidak sepadan, ia tidak boleh menjadi hanja untuk nama itu."
          },
          {
            "p": "Julat untuk memilih calon adalah {characterTotal} karakter dari jadual Mahkamah Agung. Karakter yang tidak terdapat dalam jadual ini tidak ditunjukkan sama sekali — walaupun ditunjukkan, mereka tidak boleh didaftarkan."
          },
          {
            "p": "Bilangan karakter dalam jadual yang diterbitkan oleh Mahkamah Agung adalah sedikit lebih daripada ini. Jadual juga termasuk **karakter tanpa kod karakter standard**, yang tidak dapat dipaparkan dengan betul di skrin dan dokumen, jadi karakter tersebut telah dikecualikan daripada calon. Anda mesti menyemak dengan pihak berkuasa yang berkaitan sama ada anda boleh mendaftar dengan karakter tersebut."
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
            "p": "Jika anda menggunakan karakter generasi, karakter itu adalah tetap, dan gabungan dicari dari posisi yang tinggal. Nama keluarga (성) tidak terhad oleh jadual nama-hanja rasmi, jadi ia dianggap secara berasingan."
          }
        ]
      },
      {
        "title": "Kami menunjukkan adat penghindaran tanpa mengeluarkannya",
        "blocks": [
          {
            "p": "Jika karakter yang secara tradisional dianggap perlu dielakkan termasuk dalam calon, kami tidak mengeluarkannya tetapi menunjukkan sebab bersama dengannya. Ini adalah perkara adat, bukan undang-undang, dan anda boleh memilih untuk mengecualikannya sepenuhnya dari skrin input. Untuk maklumat lanjut, lihat [Hanja yang Tradisional Dielakkan](/guide/avoid)."
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
        "title": "Cara membaca hasil",
        "blocks": [
          {
            "p": "Calon adalah **perspektif, bukan ranking**. Yang pertama tidak bermakna ia adalah nama terbaik; mereka dipilih dari perspektif yang berbeza. Mereka yang mengutamakan gabungan makna, mereka yang memilih karakter yang jarang, dan mereka yang menekankan neutraliti dipaparkan berdampingan. Jawapannya berbeza bergantung kepada perspektif mana yang anda hargai."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Standard Kami",
    "title": "Apa yang Kami Tidak Gunakan",
    "summary": "Kami tidak menetapkan jumlah nasib atau skor numerik, dan kami tidak menggunakan kiraan strok. Lima elemen hanya digunakan sebagai paksi tambahan. Berikut adalah sebab-sebabnya.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Sebab-sebab untuk tidak menetapkan jumlah nasib atau skor numerik",
        "blocks": [
          {
            "p": "Terdapat kaedah yang menetapkan jumlah nasib atau skor numerik kepada nama untuk menilainya. Naming-Link tidak menyediakan nombor tersebut. Sebab-sebabnya adalah empat."
          },
          {
            "p": "**Pertama, tidak ada satu standard sahaja.** Kaedah untuk mengira nasib berbeza mengikut sekolah, dan nama yang sama boleh dinilai secara positif oleh satu standard dan negatif oleh yang lain. Kami tiada asas untuk memutuskan yang mana satu yang betul. Adalah tidak jujur untuk mempersembahkan satu seolah-olah ia adalah jawapan."
          },
          {
            "p": "**Kedua, pengiraan tersebut bergantung pada kiraan strok.** Walau bagaimanapun, data Mahkamah Agung tidak termasuk kiraan strok sama sekali. Selain itu, kiraan strok boleh berbeza bergantung kepada sama ada ia dikira sebagai karakter biasa atau disederhanakan dan bagaimana radikal dikira. Oleh kerana nombor asas tidak ditetapkan dengan pasti, skor yang dibina di atasnya tidak boleh menjadi definitif."
          },
          {
            "p": "**Ketiga, nombor kelihatan lebih kukuh daripada realiti.** Apabila ia mengatakan \"87 mata\", ia dibaca seperti nilai yang diukur dan bukannya tafsiran konvensional. Mereka yang menamakan mungkin merasa tertekan oleh nombor itu, mengabaikan apa yang sebenarnya penting (Adakah ia menyenangkan untuk dipanggil? Adakah makna itu sesuai? Adakah ia mengandungi harapan yang diinginkan?)."
          },
          {
            "p": "**Keempat, tiada cara untuk mengesahkan.** Hubungan antara nama dan kehidupan seseorang tidak boleh disahkan. Menukar sesuatu yang tidak boleh dikatakan betul atau salah kepada skor menghasilkan nombor yang tidak boleh disahkan, walaupun ia tidak boleh salah."
          },
          {
            "p": "Kami hanya menggunakan apa yang boleh **dibuktikan.** Jadual nama-hanja rasmi Mahkamah Agung, bacaan yang ditetapkan untuk setiap karakter, dan makna yang disenaraikan dalam jadual. Sebaliknya, kami memberikan sebab mengapa calon ini dipilih dan mengapa karakter tertentu dikecualikan, menunjukkan **sebab-sebab dan bukannya skor**."
          }
        ]
      },
      {
        "title": "Kami tidak menggunakan kiraan strok",
        "blocks": [
          {
            "p": "Data nama-hanja rasmi yang disediakan oleh Mahkamah Agung tidak termasuk kiraan strok. Di antara {characterTotal} karakter yang kami terima, **tiada satu karakter pun mempunyai kiraan strok.**"
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
              "geuk": "Kawalan — setiap satu menahan yang dilangkau"
            },
            "caption": "Hubungan antara lima elemen. Bergerak sepanjang bulatan mewakili generasi bersama (相生), manakala melangkau satu dan menekan mewakili pengekangan bersama (相剋). Kami menggunakan hubungan ini hanya sebagai paksi tambahan untuk membandingkan calon."
          },
          {
            "p": "Jika anda telah memasukkan bulan kelahiran anda, kami menggunakan rujukan ringkas lima elemen berdasarkan bulan itu sebagai paksi tambahan untuk membandingkan calon. Walau bagaimanapun, ini bukan analisis saju yang tepat, dan **kami tidak mendakwa bahawa nama menentukan nasib atau watak seseorang.**"
          },
          {
            "p": "Dalam pemilihan akhir, apa yang kami utamakan adalah bunyi, gabungan makna, nilai yang ingin disampaikan oleh keluarga, dan sama ada ia boleh didaftarkan. Jika anda tidak memasukkan bulan kelahiran anda, kami sepenuhnya mengecualikan rujukan lima elemen dari analisis — kami tidak membuat andaian sewenang-wenangnya tentang maklumat yang tidak diketahui."
          },
          {
            "p": "Jika anda mahukan analisis berdasarkan saju yang tepat, kami membahasnya dalam laporan terperinci yang berasingan. Sebab kami tidak mengutamakan lima elemen dalam pemadanan hanja percuma adalah kerana kami tidak mahu mempersembahkan penilaian berdasarkan lima elemen yang diperoleh daripada tarikh dan waktu kelahiran yang tidak lengkap seolah-olah ia adalah definitif."
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
            "p": "Hasil yang disyorkan disusun untuk membuka calon satu demi satu. Apabila melihat iklan, satu dibuka pada satu masa, sementara produk ini **membuka semua calon yang tinggal sekaligus**."
          },
          {
            "p": "Jika anda tidak tergesa-gesa, anda tidak perlu membeli. **Hasil dari pembukaan melalui iklan dan yang dari pembayaran adalah sama sekali** — ia hanya soal menunggu, dan membayar tidak menghasilkan calon yang lebih baik."
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
              "**Maksimum 10 calon hanja terperinci PDF** — {priceTenDetail}. Jumlah calon meningkat kepada sepuluh, dan dokumen PDF disertakan.",
              "**Maksimum 10 calon hanja saju dan laporan komprehensif lima elemen** — {priceTenSaju}. Selain daripada di atas, ia termasuk carta saju yang diperoleh daripada tarikh lahir dan kekuatan lima elemen, memeriksa mengapa hanja tertentu sesuai dengan nama itu dari perspektif lima elemen."
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
            "p": "Dokumen yang tersedia untuk menukar nama asing menjadi nama Korea atau menulis nama dalam Hangul. Harga mengikuti jumlah yang dipaparkan di skrin pembayaran."
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
            "p": "Kami mengukir nama yang dicipta di skrin ke dalam cop fizikal dan menghantarnya kepada anda. Harga berbeza mengikut model — cop bulat {priceStampRound}, cop persegi {priceStampSquare}, cop kayu ebony {priceStampEbony}. Penghantaran antarabangsa juga tersedia."
          },
          {
            "p": "**Dari sini, produk termasuk penghantaran.** Tidak seperti item sebelumnya, pengeluaran dan penghantaran memerlukan masa, dan alamat penerimaan diperlukan. Maklumat penghantaran hanya digunakan untuk pemprosesan pesanan dan penyimpanan undang-undang, dan setelah pemprosesan selesai, ia akan dimusnahkan selepas tempoh yang ditentukan dalam polisi."
          }
        ]
      },
      {
        "title": "Perkara yang Perlu Diketahui Sebelum Membeli",
        "blocks": [
          {
            "p": "**Produk digital disediakan serta-merta setelah pembayaran.** Anda boleh membatalkan dan menerima pengembalian penuh pada bila-bila masa sebelum muat turun bermula, tetapi setelah muat turun selesai, penarikan semula kerana perubahan fikiran yang sederhana adalah terhad (Artikel 17, Perenggan 2 Akta Perdagangan Elektronik). Syarat ini dipersetujui secara berasingan di skrin pembayaran."
          },
          {
            "p": "**Aduan tentang kandungan hasil bukanlah alasan untuk pengembalian.** Walau bagaimanapun, jika dokumen tidak dibuat, fail tidak dapat dibuka, atau jumlah pembayaran berbeza dari pesanan, ia akan diproses sebagai penerbitan semula atau pengembalian penuh."
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
                "value": "{characterTotal} karakter",
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
            "p": "Anda tidak boleh menggunakan sebarang karakter untuk nama kanak-kanak. **Hanja yang boleh digunakan untuk pendaftaran kelahiran telah ditetapkan oleh Mahkamah Agung dalam satu jadual, dan hanya karakter dalam jadual itu boleh didaftarkan sebagai hanja untuk nama.** Ini dipanggil nama-hanja rasmi."
          }
        ]
      },
      {
        "title": "Mengapa ia telah ditetapkan?",
        "blocks": [
          {
            "p": "Terdapat puluhan ribu hanja. Antara mereka, ada yang mempunyai makna yang tidak menyenangkan, ada yang tidak lagi digunakan dan tidak mempunyai bacaan yang diketahui, dan ada yang tidak dapat dipaparkan di komputer sama sekali. Jika karakter seperti itu termasuk dalam nama, orang yang akhirnya menanggung beban adalah orang yang akan menggunakan nama itu sepanjang hayatnya. Nama boleh dipecahkan atau dibaca dengan cara yang berbeza di pelbagai tempat seperti pendaftaran penduduk, pasport, bank, dan sekolah, memerlukan individu untuk menjelaskan nama mereka sendiri."
          },
          {
            "p": "Oleh itu, satu kaedah telah dipilih untuk mendefinisikan terlebih dahulu julat hanja yang boleh digunakan dalam nama. Daripada menjadi peraturan yang menyekat, ia lebih kepada mekanisme untuk memastikan bahawa nama boleh digunakan tanpa masalah sepanjang hayat seseorang."
          }
        ]
      },
      {
        "title": "Apa asas untuk definisi tersebut?",
        "blocks": [
          {
            "p": "Mahkamah Agung menetapkan jadual nama-hanja rasmi, yang disemak semula mengikut keperluan, dan karakter ditambah."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bahan yang digunakan dalam skrin ini",
        "blocks": [
          {
            "p": "{publisher} data nama-hanja rasmi · Sehingga {effectiveDate}"
          },
          {
            "p": "{characterTotal} karakter merangkumi {syllableCount} suku kata Hangul. Nilai hash fail asal juga disimpan, jadi jika jadual berubah, ia boleh diperiksa bila dan apa yang telah berubah."
          }
        ]
      },
      {
        "title": "Jumlah karakter yang diumumkan oleh Mahkamah Agung berbeza daripada apa yang kami tunjukkan",
        "blocks": [
          {
            "p": "**Nama-hanja rasmi yang diumumkan oleh Mahkamah Agung adalah {announcedTotal} karakter, sementara apa yang kami persembahkan sebagai calon adalah {characterTotal} karakter.** Tiada alasan untuk menyembunyikan perbezaan ini, jadi kami menyatakannya dengan jelas."
          },
          {
            "p": "Jika anda menyemak data pertanyaan Mahkamah Agung, ia mengandungi {listedTotal} karakter. Antara mereka, **{excludedNoStandardCode} karakter** adalah **karakter yang tidak mempunyai tempat dalam kod karakter umum global (Unicode).** Sistem Mahkamah Agung memperlakukan karakter seperti itu dengan nombor yang hanya berfungsi dalam sistemnya sendiri, dan ia dipaparkan sebagai **imej** dan bukannya karakter di skrin."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Menambah lebih banyak fon tidak akan menyelesaikan isu",
        "blocks": [
          {
            "p": "Untuk karakter muncul di skrin, ia mesti mempunyai **nombor yang dipersetujui oleh dunia**, dan fon mengandungi imej yang sepadan dengan nombor itu. Karakter yang tidak mempunyai nombor tidak boleh dimasukkan dalam mana-mana fon. Tidak kira berapa banyak fon yang kami tambahkan, karakter ini akan muncul sebagai kotak kosong."
          }
        ]
      },
      {
        "title": "Oleh itu, mereka telah dikeluarkan daripada calon",
        "blocks": [
          {
            "p": "**Mengisi senarai dengan karakter yang tidak dapat dipaparkan tidak membantu.** Kebanyakan makna karakter ini juga kosong dalam data kami, yang tidak selari dengan kaedah perkhidmatan memilih nama berdasarkan makna."
          },
          {
            "p": "**Sebab yang lebih penting terletak pada orang yang akan menggunakan nama tersebut.** Nama adalah nilai yang akan dimasukkan di pelbagai tempat sepanjang kehidupan seseorang. Karakter tanpa kod karakter mungkin tidak dapat dimasukkan atau dicetak dalam sistem untuk bank, sekolah, hospital, atau pasport, walaupun setelah menyelesaikan birth registration. Oleh itu, kami tidak dapat mengesyorkan karakter tersebut."
          },
          {
            "p": "Namun, **kami tidak menentukan sama ada karakter tersebut boleh digunakan atau tidak.** Oleh kerana mereka adalah karakter dalam jadual Mahkamah Agung, pendaftaran itu sendiri mungkin boleh dilakukan. Jika anda benar-benar ingin menggunakan karakter tersebut, sila semak secara langsung dalam sistem pendaftaran hubungan keluarga elektronik Mahkamah Agung, dan **tanya kepada pihak berkuasa yang berkaitan mengenai kebolehan penggunaannya.**"
          }
        ]
      },
      {
        "title": "Jika anda ingin menggunakan hanja yang tidak terdapat dalam jadual",
        "blocks": [
          {
            "p": "Anda tidak boleh menggunakannya. Untuk lebih tepat, karakter tersebut tidak akan didaftarkan sebagai hanja untuk nama, dan nama hanya akan direkodkan dalam Hangul. Jika anda ingin menggunakan hanja bersama, anda mesti memilih dari jadual."
          },
          {
            "p": "Oleh itu, kami tidak membentangkan karakter yang tidak terdapat dalam jadual sebagai calon. Semua hanja yang kelihatan di skrin adalah karakter yang sebenarnya boleh digunakan untuk pendaftaran kelahiran. Senarai lengkap boleh didapati dalam [Senarai Lengkap Hanja Nama Rasmi](/guide/hanja)."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Senarai",
    "title": "Senarai Lengkap Hanja Nama Rasmi",
    "summary": "Kami telah menyusun hanja yang boleh digunakan untuk pendaftaran kelahiran mengikut konsonan awal. Anda boleh melihat bacaan yang ditetapkan dan makna untuk setiap karakter apabila digunakan dalam nama.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Cari Mengikut Konsonan Awal",
        "slot": "chosung",
        "blocks": [
          {
            "p": "Ini termasuk semua {characterTotal} karakter dari jadual hanja nama rasmi Mahkamah Agung. Setiap karakter termasuk **bacaan apabila digunakan dalam nama** dan maknanya. Karakter yang tidak termasuk dalam jadual tidak boleh didaftarkan sebagai hanja nama, jadi anda harus memilih dari karakter yang disenaraikan di sini."
          },
          {
            "p": "Dua nombor pada butang di bawah mewakili **bilangan karakter dengan konsonan awal tersebut** dan **bilangan suku kata yang diliputi**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jika karakter yang anda cari tidak terdapat dalam senarai",
        "blocks": [
          {
            "p": "Bilangan karakter yang diumumkan oleh Mahkamah Agung adalah {announcedTotal}, tetapi senarai ini mengandungi {characterTotal} karakter. **Perbezaan {excludedNoStandardCode} karakter adalah yang tidak dapat dipaparkan dalam mana-mana fon kerana kekurangan tempat dalam kod karakter sejagat.** Sistem Mahkamah Agung menunjukkan karakter tersebut sebagai imej."
          },
          {
            "p": "Kami telah merincikan sebab-sebab untuk ini dan mengapa kami tidak mengesyorkan karakter tersebut dalam [Apa itu Hanja Nama Rasmi?](/guide/hanja-basics). Anda harus menyemak dengan pihak berkuasa yang berkaitan untuk kebolehan penggunaan karakter tersebut."
          }
        ]
      },
      {
        "title": "Konsonan Awal dengan Sedikit Karakter",
        "slot": "tiny",
        "blocks": [
          {
            "p": "Konsonan awal di bawah mempunyai sangat sedikit hanja nama rasmi, jadi kami telah memaparkannya di sini tanpa halaman berasingan."
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
      "title": "Halaman Hubungi dan Tentang kini dibuka",
      "body": [
        "Soalan, pemulangan, permintaan privasi dan laporan kesilapan kini mempunyai satu tempat untuk pergi. Halaman hubungi di footer menyenaraikan emel dan butiran syarikat kami.",
        "Apa yang menjadi asas jawapan kami, dan apa yang kami sengaja tidak lakukan, ditulis di halaman tentang."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Laporan PDF dikeluarkan dalam Bahasa Inggeris untuk Bahasa Arab dan Khmer",
      "body": [
        "Jika anda menggunakan perkhidmatan dalam Bahasa Arab atau Khmer, PDF yang anda beli dihasilkan dalam Bahasa Inggeris. Alat yang menyusun dokumen kami belum dapat menetapkan perenggan dalam dua skrip tersebut.",
        "Skrin tetap dalam bahasa anda, dan nama anda dicetak dalam skrip anda sendiri di dalam dokumen.",
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
