import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Bahasa Melayu — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const MS_DOCS = {
  "guide": {
    "eyebrow": "Asas untuk Pengiraan",
    "title": "Apakah asas untuk pengiraan?",
    "summary": "Kami mendedahkan semua peraturan yang digunakan oleh Dreams-Link. Anda boleh menyemak simbol yang ditemui, apa yang ditulis dalam kamus — dari mana tafsiran yang dipaparkan di skrin berasal.",
    "backLabel": "Kembali ke Halaman Utama",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Semua nombor yang ditulis di sini adalah **dibaca terus dari kamus simbol dan peraturan yang sepadan.** Oleh kerana kami tidak menyalin teks secara manual, jika kamus diperluas atau peraturan diubah, nombor dalam dokumen ini juga akan berubah."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Asas untuk Perkhidmatan",
    "title": "Bagaimana untuk mencari simbol dalam cerita mimpi.",
    "summary": "Ia menerangkan bagaimana simbol dipilih dari ayat yang ditulis secara bebas dan bagaimana kami menapis simbol yang kebetulan berada di dalam perkataan yang lebih panjang — 별 (\"bintang\") di dalam 특별할 (\"tiada yang istimewa\").",
    "backLabel": "Asas untuk Tafsiran",
    "sections": [
      {
        "title": "Kami mencari simbol dalam teks yang anda berikan.",
        "blocks": [
          {
            "p": "Apabila anda menulis cerita mimpi anda secara bebas, kami mencari simbol dalam teks tersebut dari kamus. Anda tidak perlu memilih item atau menulis dalam format tertentu. Cukup tulis seperti biasa, seperti 'Semalam, seekor ular sawa besar melilit saya.'"
          },
          {
            "p": "Semasa mencari, kami melihat bukan sahaja nama simbol tetapi juga **{aliasTotal} nama alternatif**. Ini adalah kata-kata yang merujuk kepada perkara yang sama, seperti 구렁이 (gureongi) dan 뱀 (baem), 떨어지다 (tteoreojida) dan 빠지다 (ppajida). Variasi dengan akhiran, seperti 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda), juga termasuk."
          }
        ]
      },
      {
        "title": "Watak yang secara tidak sengaja muncul dalam perkataan tidak dikira",
        "blocks": [
          {
            "p": "Ini adalah aspek yang paling mencabar dalam bahasa Korea. Antara simbol, terdapat **{singleCharSymbolTotal} simbol satu aksara** seperti **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), yang sering muncul dalam perkataan lain."
          },
          {
            "ul": [
              "별 (\"bintang\") yang tersembunyi di dalam 특**별**할 (\"tiada yang istimewa\")",
              "게 (\"ketam\") yang tersembunyi di dalam 누군가에**게** (\"oleh seseorang\")",
              "말 (\"kuda\") di dalam **말**했다 (\"mengatakan\"), dan 배 (\"perahu, pir\") di dalam **배**가 고팠다 (\"Kami lapar\")"
            ]
          },
          {
            "p": "Mengira ini sebagai simbol membawa kepada tafsiran yang tidak relevan. Oleh itu, kami memeriksa watak di sekeliling — jika **ada aksara Korea di depan**, kami menganggapnya sebagai sebahagian daripada perkataan yang lebih panjang dan tidak mengira, dan kami melihat **sama ada apa yang mengikuti adalah partikel atau akhiran kata kerja**, membenarkan 「소가」 (soga) untuk lulus sambil menapis 「소리」 (sori)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Inilah cara ia berfungsi",
        "blocks": [
          {
            "p": "Sebelum melaksanakan peraturan ini, apabila menguji dengan dua belas ayat sebenar, **kesemua dua belas** mengandungi simbol yang tidak relevan. Satu ayat tanpa kandungan yang signifikan bahkan ditandakan sebagai mimpi konsepsi."
          },
          {
            "p": "Kini, satu yang tinggal — 배 (bae) dalam 「배가 고팠다」 (bae ga gopatda). Oleh kerana ia berbunyi sama tetapi mempunyai makna yang berbeza, ia tidak boleh ditapis hanya dengan watak di sekeliling."
          },
          {
            "p": "Tidak menemui sesuatu adalah perkara yang jujur. Namun, menemui sesuatu yang tidak relevan bermakna menubuhkan tradisi di sebalik perkataan itu yang tidak pernah ada."
          }
        ]
      },
      {
        "title": "Watak yang sama sentiasa menghasilkan keputusan yang sama",
        "blocks": [
          {
            "p": "Tiada tempat untuk kebetulan dalam peraturan padanan. Oleh kerana kamus adalah tetap dan peraturan ditetapkan, jika anda memasukkan ayat yang sama sekali lagi, **simbol yang sama akan muncul dalam urutan yang sama**. Tafsiran yang anda lihat hari ini tidak akan berbeza daripada yang anda lihat esok."
          },
          {
            "p": "Kualiti ini juga merupakan janji yang telah kami buat kepada diri kami sendiri. Tafsiran yang berubah setiap kali adalah menghiburkan tetapi tidak mempunyai asas. Ini berkaitan dengan cerita [mengapa kami tidak menggunakan model](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Maklumat Peribadi",
    "title": "Kaedah Tidak Menyimpan Mimpi yang Anda Tulis",
    "summary": "Kami menerangkan apa yang secara teknikal bermaksud bahawa cerita mimpi tidak direkodkan di mana-mana, dan apa yang terkandung dalam pautan hasil.",
    "backLabel": "Asas untuk Tafsiran",
    "sections": [
      {
        "title": "Tiada Keahlian Diperlukan",
        "blocks": [
          {
            "p": "Dreams-Link tidak membuat akaun. Kami tidak mengumpul nama, emel, atau nombor telefon. Satu-satunya perkara yang kami kumpul adalah mimpi yang anda tulis, bagaimana perasaan anda apabila anda bangun, dan sama ada anda bermimpi mimpi yang sama berulang kali, dan itu tidak kekal selepas tafsiran selesai."
          },
          {
            "p": "Cerita mimpi adalah nilai yang paling peribadi yang diterima oleh perkhidmatan ini. Inilah sebabnya mengapa peraturannya lebih ketat daripada yang diperlukan — kami tidak pernah mencipta jadual untuk menulis apa yang anda hantar."
          }
        ]
      },
      {
        "title": "Apa yang terkandung dalam pautan hasil",
        "blocks": [
          {
            "p": "Apabila pengiraan selesai, alamatnya akan kelihatan seperti ini."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "Apa yang mengikuti **#** adalah nilai input. Bahagian ini dipanggil **fragment**, yang merupakan **bahagian yang tidak dihantar oleh pelayar ke pelayan**. Ini adalah tingkah laku web standard dan bukan peraturan yang kami cipta — ia pada asalnya direka untuk menunjukkan lokasi dalam dokumen, jadi pelayan tidak perlu melihatnya."
          },
          {
            "p": "Di sini, sifat ini adalah sangat penting — mimpi yang anda berikan **tidak kekal dalam rekod akses.**"
          },
          {
            "p": "Dengan kata lain, apabila anda membuka pautan hasil, pelayar membaca nilai itu untuk meminta pengiraan, dan pelayan kami menerima nilai untuk pengiraan, mengembalikan jawapan, dan kemudian melupakannya."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sila berhati-hati apabila menghantar pautan kepada orang lain",
        "blocks": [
          {
            "p": "Fakta bahawa ia tidak disimpan di pelayan tidak bermakna pautan itu selamat. Pautan hasil mengandungi mimpi yang anda berikan, jadi orang yang menerima pautan itu boleh membaca kandungan tersebut."
          }
        ]
      },
      {
        "title": "Mengapa pengiraan dilakukan di pelayan tetapi tidak disimpan?",
        "blocks": [
          {
            "p": "Pengiraan itu sendiri dilakukan di pelayan. Mencari simbol memerlukan keseluruhan kamus, dan kamus itu terlalu besar untuk dihantar ke pelayar. Menyimpan kamus di pelayan juga bermakna bahawa apabila kesilapan diperbaiki, ia akan dipantulkan untuk semua orang sekaligus. Namun, **selepas memproses permintaan, nilai itu tidak digunakan di mana-mana.** Tiada kod untuk memasukkannya ke dalam pangkalan data."
          },
          {
            "p": "Rekod minimum yang diperlukan untuk operasi disimpan — satu kaunter untuk mengelakkan orang yang sama menghantar terlalu banyak permintaan dalam masa yang singkat. Ini tidak termasuk kandungan mimpi, dan IP akses juga tidak disimpan. Hanya satu nilai, yang dihash dengan tarikh, dikira, dan nilai itu berubah apabila hari berubah."
          }
        ]
      },
      {
        "title": "Apa yang tidak boleh dilakukan kerana ia tidak disimpan",
        "blocks": [
          {
            "p": "Secara jujur, terdapat perkara yang telah kami lepaskan kerana kami tidak menyimpan data."
          },
          {
            "ul": [
              "**Tiada diari mimpi.** Anda tidak boleh mengambil semula tafsiran dari minggu lepas, dan anda mesti mempunyai pautan untuk melihatnya semula. Ini dilakukan dengan sengaja — untuk mencipta diari, tulisan yang paling peribadi mesti disimpan secara berterusan.",
              "**Kami mengira nilai yang sama setiap kali.** Tiada cache. Sebaliknya, kamus adalah tetap, dan peraturan padanan adalah deterministik, jadi teks yang sama akan sentiasa menghasilkan simbol yang sama — peraturan menggantikan apa yang sepatutnya dijamin oleh cache.",
              "**Menyegarkan akan membawa kembali pintu iklan.** Ini kerana tiada tempat untuk meninggalkan rekod tontonan."
            ]
          }
        ]
      },
      {
        "title": "Sekiranya pembelian",
        "blocks": [
          {
            "p": "Jika anda membeli laporan, rekod transaksi akan disimpan pada masa itu. Pembayaran mempunyai tempoh penyimpanan yang ditakrifkan secara sah, dan tanpa sejarah pesanan, pengembalian tidak dapat diproses. Namun, walaupun begitu, **teks mimpi yang digunakan untuk bacaan tidak dilampirkan pada pesanan** — ia diterima semula dan ditulis pada saat itu ketika membuat dokumen selepas pengesahan pembayaran."
          },
          {
            "p": "Untuk maklumat lanjut, sila rujuk kepada [dasar privasi](/privacy)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Notis",
    "title": "Pengumuman",
    "summary": "Ini adalah tempat untuk memaklumkan kepada anda tentang perubahan yang mungkin mempengaruhi penggunaan anda.",
    "backLabel": "Kembali ke Halaman Utama",
    "sections": []
  },
  "contact": {
    "eyebrow": "Hubungi",
    "title": "Pertanyaan",
    "summary": "Ini adalah saluran untuk pertanyaan mengenai penggunaan, pengembalian wang, permintaan maklumat peribadi, dan laporan ralat, bersama dengan maklumat perniagaan.",
    "backLabel": "Kembali ke Halaman Utama",
    "sections": [
      {
        "title": "Hubungi melalui Email",
        "blocks": [
          {
            "p": "Sila hantar pertanyaan ke **{email}**. Kami akan membalas dalam masa 2 hari bekerja. Untuk pertanyaan mengenai pembayaran dan pengembalian wang, adalah lebih cepat jika anda menyertakan **nombor pesanan atau email pembayaran** anda."
          },
          {
            "p": "Pertanyaan melalui telefon diterima di {customerCenter}."
          }
        ]
      },
      {
        "title": "Apa yang boleh dihantar ke saluran ini?",
        "blocks": [
          {
            "ul": [
              "**Pembayaran dan Pengembalian Wang** — Jika dokumen belum dibuat atau jumlah pembayaran berbeza dari pesanan, pengembalian penuh akan diberikan. Syarat terdapat dalam [dasar pengembalian](/refund-policy).",
              "**Maklumat Peribadi** — Kami menerima permintaan untuk akses, pembetulan, dan pemadaman. Dasar pemprosesan terdapat dalam [dasar privasi](/privacy).",
              "**Laporkan Ralat Tafsiran** — Jika simbol ditemui dengan tidak betul atau tafsiran nampak aneh, sila maklumkan kepada kami. Jika anda menyertakan bila anda menulis cerita mimpi itu, kami boleh menyemaknya semula dengan teks yang sama."
            ]
          }
        ]
      },
      {
        "title": "Maklumat Perniagaan",
        "blocks": [
          {
            "ul": [
              "**Nama Perniagaan** — {companyName}",
              "**Wakil** — {representative}",
              "**Nombor Pendaftaran Perniagaan** — {businessNumber}",
              "**Nombor Pendaftaran Perniagaan Pesanan Mel** — {mailOrderNumber}",
              "**Alamat** — {address}",
              "**Pusat Khidmat Pelanggan** — {customerCenter}",
              "**Email** — {email}",
              "**Pegawai Perlindungan Maklumat Peribadi** — {privacyOfficer}",
              "**Penyedia Hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Anda tidak perlu menulis semula mimpi yang anda berikan dalam email pertanyaan. Kami tidak menyimpan input, jadi kami tidak dapat menyemaknya semula, dan nombor pesanan sudah cukup untuk pengesahan. Sila tulis hanya jika ia benar-benar perlu, seperti untuk melaporkan ralat tafsiran."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Prinsip Perkhidmatan",
    "title": "Apa yang Kami Tidak Lakukan",
    "summary": "Kami tidak menyediakan nombor loteri, jurnal mimpi, penentuan kehamilan, atau azimat. Kami menerangkan mengapa kami memilih untuk tidak melakukan setiap perkara ini.",
    "backLabel": "Asas Tafsiran",
    "sections": [
      {
        "title": "Kami tidak menyediakan nombor loteri",
        "blocks": [
          {
            "p": "Walaupun ia sering dibincangkan dalam perkhidmatan tafsiran mimpi, kami tidak melakukannya. **Tiada asas dalam tafsiran mimpi tradisional untuk menarik nombor dari mimpi.** Walaupun terdapat rekod yang mentafsirkan mimpi babi sebagai kekayaan, tiada peraturan dalam mana-mana kesusasteraan yang menghasilkan enam nombor dari itu."
          },
          {
            "p": "Untuk menciptanya, kami terpaksa mereka cipta, dan pada saat itu, perkhidmatan ini tidak lagi menjadi tempat untuk menyampaikan tafsiran yang diwarisi oleh tradisi. Ini terutama membimbangkan kerana ia boleh menyebabkan kerugian kewangan."
          }
        ]
      },
      {
        "title": "Kami tidak mencipta jurnal mimpi",
        "blocks": [
          {
            "p": "Walaupun adalah mudah untuk mempunyai ciri untuk mengumpul mimpi lalu, ia memerlukan kami untuk **menyimpan secara berterusan mimpi yang anda berikan.** Naratif mimpi adalah aspek paling peribadi dari apa yang diterima oleh perkhidmatan ini, dan kami telah memutuskan untuk tidak menukarnya."
          },
          {
            "p": "Sebaliknya, mimpi yang anda ingin simpan boleh **diambil sebagai imej atau dokumen.** Tanggungjawab untuk penyimpanan terletak pada pengguna, bukan kami — [Dua Cara untuk Menyimpan Mimpi Anda](/guide/reports)"
          }
        ]
      },
      {
        "title": "Kami tidak menentukan kehamilan atau jantina",
        "blocks": [
          {
            "p": "Kami hanya akan menyatakan bahawa sebuah simbol yang ditafsirkan sebagai a conception dream (dream conception) telah muncul. Sama ada anda hamil atau sama ada anak itu seorang perempuan atau lelaki adalah **bukan sesuatu yang dapat diketahui melalui mimpi.** Pernyataan sedemikian tidak muncul di skrin atau dalam dokumen berbayar."
          }
        ]
      },
      {
        "title": "Kami tidak menjual azimat atau jimat",
        "blocks": [
          {
            "p": "Sebuah simbol yang dibaca sebagai an ominous dream (dream inauspicious) bukanlah alasan untuk membeli apa-apa. Sebuah mimpi yang tidak baik secara tradisional digunakan untuk **menunjukkan situasi yang perlu diperiksa sekarang**, bukan untuk membayar bagi mengelakkan sesuatu."
          },
          {
            "p": "Kami tidak mencipta kebimbangan untuk menjual sesuatu berdasarkan itu. Satu-satunya perkara yang kami jual adalah dua yang disebutkan di atas, dan kedua-duanya tidak memberikan tafsiran tambahan tetapi sebaliknya **cara untuk menyimpan kandungan yang sama.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kami tidak membuat kenyataan definitif tentang masa depan",
        "blocks": [
          {
            "p": "Kami tidak membuat kenyataan definitif tentang sama ada sesuatu akan berlaku, bila ia akan berlaku, atau mengenai kesihatan, kekayaan, atau jangka hayat. Menyampaikan makna simbol tradisional dan meramalkan masa depan adalah perkara yang berbeza."
          }
        ]
      },
      {
        "title": "Kami tidak mengada-adakan tafsiran yang tidak wujud",
        "blocks": [
          {
            "p": "Untuk simbol yang tidak wujud dalam kamus, kami akan **menyatakan bahawa kami tidak dapat menemuinya.** Kami tidak mengumpulkan yang serupa atau mengisi ruang dengan ayat yang boleh diterima. Oleh itu, perkhidmatan ini tidak [menggunakan kecerdasan buatan untuk tafsiran mimpi](/guide/no-ai). Model tidak mengatakan ia tidak tahu apa yang tidak diketahuinya."
          }
        ]
      }
    ]
  },
  "about": {
    "eyebrow": "Pengenalan",
    "title": "Pengenalan kepada Dreams-Link",
    "summary": "Ini adalah perkhidmatan yang mentafsirkan mimpi menggunakan kamus simbol tafsiran mimpi tradisional. Ia menjelaskan apa yang menjadi asas dan apa yang tidak dinyatakan.",
    "backLabel": "Kembali ke Halaman Utama",
    "sections": [
      {
        "title": "Apa yang kami lakukan?",
        "blocks": [
          {
            "p": "Dreams-Link mencari **simbol yang digunakan dalam tafsiran mimpi tradisional** daripada mimpi yang anda tulis dan menunjukkan maknanya. Oleh kerana mimpi adalah sesuatu yang kita alami setiap hari, tafsiran yang anda lihat di skrin adalah **percuma dan tidak memerlukan keahlian.**"
          },
          {
            "p": "Satu-satunya perkara yang dijual dengan bayaran adalah **dua bentuk pemeliharaan** — imej yang mengandungi mimpi baik (kad mimpi) dan PDF yang mengandungi latar belakang apabila simbol yang secara tradisional dianggap sebagai mimpi konsepsi muncul."
          }
        ]
      },
      {
        "title": "Apa asasnya?",
        "blocks": [
          {
            "p": "Asas untuk tafsiran adalah **kamus {symbolTotal} simbol**. Kami mencari simbol dalam teks mimpi dan hanya menunjukkan makna yang direkodkan dalam kamus untuk simbol-simbol tersebut. Jika simbol mempunyai pelbagai makna, kami memilih berdasarkan situasi — seperti matahari terbit dan matahari terbenam yang secara tradisional ditafsirkan sebagai bertentangan."
          },
          {
            "p": "Semua makna dalam kamus adalah **diterjemahkan daripada teks asal buku tafsiran mimpi lama**, dan setiap makna disertakan dengan teks asal yang menjadi asasnya. Teks asal yang digunakan sebagai asas adalah dua — **Tafsiran Mimpi Zhou Gong**, yang telah dibaca sejak lama di Asia Timur, dan **Buku Mimpi Miller** dari Barat yang diterbitkan pada tahun 1901."
          },
          {
            "p": "Pencarian dilakukan **hanya dengan peraturan tetap**. Mimpi yang sama akan sentiasa menghasilkan simbol yang sama, dan tafsiran tidak berubah dari semalam hingga hari ini."
          }
        ]
      },
      {
        "title": "Apa yang tidak kami katakan?",
        "blocks": [
          {
            "p": "**Kami tidak mencipta makna tradisional yang tidak ada dalam kamus.** Jika tiada simbol yang ditemui, kami hanya menyatakan bahawa tiada yang ditemui dan menyimpulkan. Mengisi ruang itu dengan kata-kata yang mungkin adalah apa yang paling kami berhati-hati."
          },
          {
            "p": "**Mimpi konsepsi hanyalah petunjuk, bukan penentuan.** Kami hanya memaklumkan kepada anda bahawa simbol yang secara tradisional dianggap sebagai mimpi konsepsi muncul dalam mimpi. Kami tidak meramalkan kehamilan atau jantina anak, dan tiada asas untuk tuntutan sedemikian."
          },
          {
            "p": "Kami tidak **membuat kenyataan pasti tentang kesihatan, kekayaan, atau kerjaya.** Ini adalah rujukan dari perspektif tafsiran mimpi tradisional dan bukan nasihat perubatan, kewangan, atau undang-undang."
          }
        ]
      },
      {
        "title": "Kami tidak menyimpan mimpi yang anda tulis.",
        "blocks": [
          {
            "p": "Kisah mimpi adalah bahagian paling peribadi daripada apa yang diterima oleh perkhidmatan ini. Oleh itu, kami **tidak menyimpannya.** Input hanya digunakan untuk pengiraan dan tidak direkodkan dalam apa-apa bentuk di pelayan."
          },
          {
            "p": "Kami memutuskan **untuk tidak mencipta fungsi untuk mengumpul mimpi seperti diari mimpi.** Ia adalah ciri yang berharga, tetapi ia memerlukan penyimpanan tulisan yang paling peribadi."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Kaedahnya diterangkan dengan lebih terperinci dalam [dokumen panduan](/guide). Maklumat perniagaan dan butiran hubungan boleh didapati di [hubungi kami](/contact)."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Asas perkhidmatan",
    "title": "Apa asas kamus simbol?",
    "summary": "Ia menjelaskan dari mana tafsiran berasal. Kriteria untuk membahagikan {symbolTotal} simbol kepada lapan kategori, sebab untuk melampirkan petikan teks asal kepada setiap makna, dan prinsip untuk tidak mengisi ruang kosong.",
    "backLabel": "Asas tafsiran",
    "sections": [
      {
        "title": "Kami hanya menunjukkan apa yang ditulis dalam kamus.",
        "blocks": [
          {
            "p": "Tafsiran Dreams-Link berasal dari **kamusi simbol yang telah ditulis**. Kami mencari simbol dalam teks yang anda berikan dan menunjukkan makna yang direkodkan dalam kamus untuk simbol-simbol tersebut seperti adanya. Kami tidak mencipta kata-kata yang tidak ada dalam kamus."
          },
          {
            "p": "Pada masa ini, kamus mengandungi **{symbolTotal} simbol**, dan semua simbol tersebut mempunyai jumlah **{meaningTotal} makna**. Beberapa simbol hanya mempunyai satu makna, tetapi kebanyakan mempunyai beberapa, dan untuk setiap makna, **situasi di mana makna itu berlaku** juga dicatat."
          }
        ]
      },
      {
        "title": "Dibahagikan kepada lapan kategori.",
        "blocks": [
          {
            "p": "Kami mengelompokkan apa yang muncul dalam mimpi kepada lapan kategori berdasarkan ciri-cirinya. Jumlah yang disenaraikan sekarang adalah dalam kurungan."
          },
          {
            "ul": [
              "**Objek**({categoryThing}) · **Tindakan**({categoryAction}) · **Haiwan**({categoryAnimal}) — tiga kategori yang paling tebal. Ini adalah apa yang dibincangkan dalam buku tafsiran mimpi lama: objek yang boleh dilihat, binatang, dan tindakan yang diambil dalam mimpi.",
              "**Alam**({categoryNature}) · **Orang**({categoryPerson}) — perkara besar dan kuno seperti air, api, matahari, dan bulan, serta orang yang muncul dalam mimpi seperti raja, pencuri, dan yang telah meninggal.",
              "**Tempat**({categoryPlace}) · **Badan**({categoryBody}) · **Warna**({categoryColor}) — lokasi seperti rumah dan kubur, bahagian badan seperti gigi, rambut, dan darah, serta warna."
            ]
          },
          {
            "p": "Untuk melihatnya mengikut kategori, anda boleh melihat senarai lengkap dalam [kamus simbol](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Setiap makna disertakan dengan petikan teks asal.",
        "blocks": [
          {
            "p": "Setiap daripada **{meaningTotal} makna** dalam kamus disertakan dengan **petikan teks asal** yang menjadi asas untuk makna tersebut. Semua {symbolTotal} simbol mempunyai ini — jika tiada petikan teks asal, entri itu sendiri tidak dapat dibuat."
          },
          {
            "p": "Teks asal yang digunakan sebagai asas adalah dua. **Tafsiran Mimpi Zhou Gong** adalah buku tafsiran mimpi yang telah dibaca sejak lama di Asia Timur, dan **Buku Mimpi Miller** adalah buku Barat yang diterbitkan pada tahun 1901. Apabila anda membuka simbol, anda boleh melihat dari teks asal mana makna itu berasal, bersama dengan petikan dan maknanya."
          },
          {
            "p": "**Kami tidak mengisi ruang kosong.** Menambah asal yang mungkin akan menjadikan dokumen lebih tebal, tetapi pada saat itu, kamus ini tidak lagi menjadi terjemahan dari apa yang telah diwariskan tetapi sebaliknya adalah rekaan. Kami tidak menulis apa yang tidak ada dalam teks asal, dan untuk apa yang kami tulis, kami mesti melampirkan teks asal."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apabila mengembangkan, kami hanya mengembangkan dari teks asal.",
        "blocks": [
          {
            "p": "Kami telah cuba untuk mencipta entri berdasarkan model simbol, tetapi entri yang dihasilkan sama ada mengulangi kata-kata yang sama seperti 「cinta → hubungan baik」 atau gagal memberikan sebarang asas dari tradisi. Oleh itu, **kami tidak menyertakan sebarang.** Saiz semasa kamus adalah hasil daripada menterjemahkan teks asal, bukan mencipta entri — sebab-sebab untuk tidak menggunakan model diterangkan dalam [mengapa kami tidak menggunakan model](/guide/no-ai)."
          }
        ]
      },
      {
        "title": "Baik dan buruk ditentukan oleh kamus.",
        "blocks": [
          {
            "p": "Setiap simbol disertakan dengan petunjuk tentang keberuntungan dan ketidakberuntungan. **Baik {polarityPositive}**, **ambivalen bergantung pada situasi {polarityAmbivalent}**, **berhati-hati {polarityNegative}**, dan **neutral {polarityNeutral}**."
          },
          {
            "p": "Antara empat kategori, **yang paling banyak adalah yang berbeza bergantung pada situasi.** Ini bukan sesuatu yang kami seimbangkan; ia adalah bagaimana ia ditulis dalam teks asal — bahkan untuk simbol yang sama, terdapat banyak tempat di mana ia ditafsirkan secara bertentangan bergantung pada apa yang dilakukan. Nilai ini mencerminkan sifat setiap simbol, dan suasana keseluruhan mimpi dikira semula dengan mengumpulkan simbol-simbol yang ditemui."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Asas Perkhidmatan",
    "title": "Mengapa simbol yang sama mempunyai makna yang berbeza.",
    "summary": "Matahari terbit dan matahari terbenam secara tradisional ditafsirkan sebagai bertentangan. Ini membincangkan struktur di mana {symbolTotal} simbol mempunyai {meaningTotal} makna dan bagaimana untuk membezakan situasi.",
    "backLabel": "Asas tafsiran",
    "sections": [
      {
        "title": "Walaupun simbolnya sama, situasi yang berbeza menghasilkan makna yang berbeza.",
        "blocks": [
          {
            "p": "Dalam buku tafsiran mimpi lama, simbol tidak selalu mempunyai satu makna. Bahkan untuk matahari yang sama, **matahari terbit dan matahari terbenam telah ditafsirkan secara bertentangan** — yang pertama menunjukkan kemakmuran dalam rumah tangga, sementara yang terakhir menunjukkan kebimbangan tentang kehilangan ibu bapa. Kamus ditulis sedemikian."
          },
          {
            "p": "Sebab {symbolTotal} simbol mempunyai jumlah {meaningTotal} makna adalah kerana untuk setiap makna, **situasi di mana makna itu berlaku** juga dicatat, jadi jika situasi itu dapat dilihat dalam teks yang anda berikan, kami memilih makna itu."
          }
        ]
      },
      {
        "title": "Bagaimana kami membezakan situasi?",
        "blocks": [
          {
            "p": "Kami melihat sama ada terdapat kata-kata yang menunjukkan situasi dalam teks yang anda berikan. Dalam frasa 「Saya melihat matahari terbenam」, situasi terbenam ditunjukkan, sementara dalam 「Saya melihat matahari baru terbit」, situasi terbit ditunjukkan. Jika tiada kata-kata yang menunjukkan situasi, kami mentafsirnya berdasarkan **makna asas** simbol tersebut."
          },
          {
            "p": "Oleh itu, apabila anda menulis mimpi anda, sila sertakan **bukan sahaja apa yang muncul tetapi juga tindakan yang diambil**; ini akan menjadikan tafsiran lebih tepat. Mengatakan \"Saya melihat seekor babi\" menyampaikan kurang daripada \"babi itu masuk ke dalam rumah.\""
          }
        ]
      },
      {
        "kind": "note",
        "title": "Semakin banyak anda menulis, semakin baik, tetapi tidak perlu menulis secara terperinci.",
        "blocks": [
          {
            "p": "Beberapa ayat sudah mencukupi. Menulis lebih banyak tidak semestinya bermakna mencari lebih banyak simbol; sebaliknya, jika kenyataan yang tidak berkaitan dicampurkan, ia mungkin membawa kepada simbol yang salah."
          }
        ]
      },
      {
        "title": "Terdapat {contextSplitSymbolTotal} simbol dengan makna yang berbeza.",
        "blocks": [
          {
            "p": "Daripada {symbolTotal} simbol dalam kamus, **{contextSplitSymbolTotal}** mempunyai makna yang berbeza bergantung kepada situasi. Yang lain boleh ditafsirkan dalam satu arah tanpa mengira situasi."
          },
          {
            "p": "Simbol-simbol **{contextSplitSymbolTotal}** ini adalah yang paling halus. Salah tafsir situasi boleh menyebabkan berita baik disampaikan sebagai berita buruk, atau sebaliknya. Oleh itu, jika situasi tidak jelas, kita menggunakan **makna asas simbol** tanpa memaksa pilihan — kita tidak mahu bercakap tentang yang tidak pasti seolah-olah ia pasti."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perasaan selepas bangun juga diambil kira.",
        "blocks": [
          {
            "p": "Perasaan dan pengulangan yang ditanya di bawah kandungan mimpi tidak digunakan untuk mencari simbol. Ia dirujuk ketika menentukan cara untuk mentafsir dalam kes makna yang berbeza. Anda tidak perlu memilih; hasilnya tetap akan diberikan."
          }
        ]
      },
      {
        "title": "Suasana keseluruhan mimpi dikira secara berasingan.",
        "blocks": [
          {
            "p": "Jika pelbagai simbol ditemui, kita mengumpulkan sama ada setiap simbol adalah positif atau berhati-hati untuk menentukan nada keseluruhan mimpi. Mimpi yang menampilkan satu simbol baik dan satu simbol berhati-hati tidak boleh dipanggil \"mimpi baik\" secara mudah."
          },
          {
            "p": "Anda boleh melihat pelbagai simbol dan maknanya dalam [kamus simbol](/dream/symbols). Ia juga baik untuk meneliti apa yang termasuk sebelum menulis mimpi anda."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Asas perkhidmatan",
    "title": "Kriteria untuk membezakan antara mimpi yang menguntungkan dan yang tidak menguntungkan",
    "summary": "Empat nilai yang diberikan kepada setiap simbol dan pengagihannya, sebab-sebab untuk makna yang paling berbeza, dan mengapa kita membincangkan mimpi campuran sebagai campuran.",
    "backLabel": "Asas tafsiran",
    "sections": [
      {
        "title": "Setiap simbol diberikan salah satu daripada empat kategori.",
        "blocks": [
          {
            "p": "{symbolTotal} simbol dalam kamus masing-masing dikategorikan sebagai salah satu daripada yang berikut."
          },
          {
            "ul": [
              "**Positif {polarityPositive}** — ditafsirkan sebagai peristiwa yang menyenangkan seperti kekayaan, perayaan, atau dermawan.",
              "**Ambivalen {polarityAmbivalent}** — simbol seperti matahari atau babi yang boleh mempunyai makna yang terbalik bergantung kepada tindakan yang diambil. **Ini adalah kategori yang paling biasa dan paling berhati-hati.**",
              "**Berhati-hati {polarityNegative}** — ditafsirkan sebagai pertikaian, kerugian, atau peristiwa negatif.",
              "**Neutral {polarityNeutral}** — simbol yang tidak menguntungkan atau tidak menguntungkan dalam diri mereka, seperti warna."
            ]
          }
        ]
      },
      {
        "title": "Sebab-sebab untuk makna yang paling berbeza",
        "blocks": [
          {
            "p": "Ini bukan keseimbangan yang telah kita capai. **Ia adalah cara teks asal ditulis.** Teks tafsiran mimpi lama merekodkan makna yang berbeza untuk simbol yang sama bergantung kepada situasi, dan banyak daripada situasi tersebut adalah bertentangan — menangkap babi adalah menguntungkan, tetapi babi yang mati dengan sendirinya adalah tidak menguntungkan, dan perkara yang sama berlaku untuk matahari terbit dan terbenam."
          },
          {
            "p": "Oleh itu, fakta bahawa \"simbol baik muncul\" tidak bermakna \"perkara baik akan berlaku.\" Apa yang dapat kita sampaikan adalah terhad kepada bagaimana simbol itu telah ditafsirkan dalam tradisi."
          }
        ]
      },
      {
        "title": "Nada mimpi dikumpulkan daripada simbol-simbolnya.",
        "blocks": [
          {
            "p": "Jika pelbagai simbol ditemui, kita mengumpulkan makna menguntungkan dan berhati-hati mereka untuk menentukan nada keseluruhan mimpi. Jika hanya simbol positif muncul, ia adalah mimpi baik; jika hanya simbol berhati-hati muncul, ia adalah mimpi berhati-hati; jika **campuran, kita akan membincangkannya sebagai campuran.**"
          },
          {
            "p": "Kita tidak memaksa tafsiran campuran ke dalam satu sisi. Sebenarnya, mimpi yang dialami orang adalah kebanyakannya campuran, dan merumuskan mereka sebagai \"mimpi baik\" adalah tidak tepat dan tidak membantu."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kata-kata yang tidak diucapkan",
        "blocks": [
          {
            "p": "Kita tidak membuat kenyataan muktamad tentang apa yang akan berlaku, bila ia akan berlaku, atau mengenai kesihatan dan kekayaan. Menterjemahkan makna simbol tradisional adalah berbeza daripada meramalkan masa depan."
          }
        ]
      },
      {
        "title": "Apabila mimpi berhati-hati muncul",
        "blocks": [
          {
            "p": "Walaupun simbol yang ditafsirkan sebagai berhati-hati muncul, ia tidak semestinya bermakna berita buruk. Dalam tafsiran mimpi tradisional, mimpi yang tidak menguntungkan secara amnya digunakan untuk menunjukkan **situasi yang perlu diperiksa sekarang.** Jika simbol yang ditafsirkan sebagai pertikaian muncul, ia boleh dibaca sebagai cadangan untuk menahan diri."
          },
          {
            "p": "Atas sebab yang sama, perkhidmatan ini tidak menjual azimat atau jimat. Satu-satunya perkara yang dijual adalah [dua kaedah untuk menyimpan mimpi anda](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Mimpi konsepsi",
    "title": "Cara membezakan mimpi konsepsi",
    "summary": "Bagaimana kita menentukan {conceptionSymbolTotal} simbol mimpi konsepsi, mengapa tidak semua mimpi babi adalah mimpi konsepsi, dan prinsip bahawa kita tidak menentukan kehamilan atau jantina.",
    "backLabel": "Asas tafsiran",
    "sections": [
      {
        "title": "Pertama, mari kita jelaskan.",
        "blocks": [
          {
            "p": "**Dreams-Link tidak menentukan status kehamilan. Kami juga tidak menyatakan jantina anak.** Ini bukan sesuatu yang boleh diketahui melalui mimpi, dan juga bukan sesuatu yang dapat kami lakukan."
          },
          {
            "p": "Apa yang dapat kami sampaikan adalah terhad kepada ini — **fakta bahawa simbol yang ditafsirkan secara tradisional sebagai mimpi konsepsi muncul dalam mimpi ini.** Bagaimana simbol itu ditafsirkan oleh orang-orang dahulu adalah semua yang dapat kami sediakan."
          }
        ]
      },
      {
        "title": "Terdapat {conceptionSymbolTotal} simbol yang ditafsirkan sebagai mimpi konsepsi.",
        "blocks": [
          {
            "p": "Daripada {symbolTotal} simbol dalam kamus, **{conceptionSymbolTotal}** ditandakan sebagai mimpi konsepsi. Banyak adalah haiwan seperti naga, babi, dan harimau, serta buah-buahan seperti pic, kesemak, dan jujube, dan juga termasuk matahari dan bulan."
          },
          {
            "p": "Walau bagaimanapun, **hanya kerana simbol itu muncul tidak bermakna ia adalah mimpi konsepsi.** Di sinilah perkhidmatan ini telah berusaha dengan ketara."
          }
        ]
      },
      {
        "title": "Kami menentukan berdasarkan makna yang dipilih, bukan simbol.",
        "blocks": [
          {
            "p": "Babi adalah simbol mimpi konsepsi, tetapi ia juga **wakil mimpi kekayaan.** Jika kita mengisytiharkan ia sebagai mimpi konsepsi hanya kerana simbol itu muncul, maka semua orang yang bermimpi tentang babi akan mempunyai mimpi konsepsi. Sebenarnya, kebanyakan telah ditafsirkan sebagai mimpi kekayaan."
          },
          {
            "p": "Oleh itu, kita melihat **makna yang sebenarnya dipilih daripada simbol itu, bukan hanya simbol itu sendiri.** Kita hanya menandakan ia sebagai mimpi konsepsi apabila makna yang cenderung kepada konsepsi dipilih berdasarkan situasi yang anda berikan. Walaupun dengan babi yang sama, tafsiran boleh berbeza berdasarkan ayat."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jika anda menyebut kehamilan, kami akan melihat itu terlebih dahulu.",
        "blocks": [
          {
            "p": "Jika penulisan anda termasuk istilah seperti kehamilan, mimpi konsepsi, atau kelahiran, kami akan mengutamakan makna konsepsi di antara makna yang dipegang simbol itu. Bahkan mimpi yang sama boleh ditafsirkan secara berbeza berdasarkan situasi semasa."
          }
        ]
      },
      {
        "title": "Sebab untuk mempunyai laporan mimpi konsepsi yang berasingan.",
        "blocks": [
          {
            "p": "Mimpi konsepsi mempunyai tujuan yang berbeza daripada mimpi lain. Mereka sering dibincangkan lama selepas anak dilahirkan dan dikongsi di kalangan ahli keluarga. Oleh itu, daripada hanya melihatnya di skrin, kami mencipta **dokumen yang boleh disimpan.**"
          },
          {
            "p": "Apa yang termasuk dinyatakan dalam [dua kaedah untuk menyimpan mimpi anda](/guide/reports). Anda boleh melihat semua tafsiran tanpa membelinya."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Cara Menggunakan",
    "title": "Cara Menulis Mimpi",
    "summary": "Jika anda menulis apa yang anda lihat dan lakukan, ia akan ditafsirkan dengan baik. Kami menerangkan mengapa satu kata kerja menentukan makna, dan mengapa kami juga bertanya bagaimana perasaan anda dan sama ada mimpi itu berulang.",
    "backLabel": "Asas tafsiran",
    "sections": [
      {
        "title": "Sila tuliskan apa yang anda lihat dan lakukan",
        "blocks": [
          {
            "p": "Tiada format khusus. Dua atau tiga ayat, seperti yang anda biasa bercakap, sudah memadai. Namun, apa yang ditafsirkan dengan baik ditentukan — **apa yang anda lihat** dan **apa yang berlaku**."
          },
          {
            "ul": [
              "Ditafsirkan dengan baik — 「Seekor ular besar melilit saya」, 「Saya melihat air jernih mengalir」, 「Gigi saya tercabut dengan sendirinya」",
              "Tidak ditafsirkan — 「Saya merasa takut」, 「Saya merasa aneh」, 「Seolah-olah seseorang membenci saya」"
            ]
          },
          {
            "p": "Jika anda hanya menulis perasaan anda, tidak akan ada simbol yang dapat ditemui. Tafsiran mimpi tradisional bercakap tentang [objek dan tindakan](/guide/categories), bukan emosi."
          }
        ]
      },
      {
        "title": "Menulis apa yang anda lakukan menjadikannya lebih tepat",
        "blocks": [
          {
            "p": "Bahkan simbol yang sama boleh mempunyai makna yang berbeza bergantung pada situasi, dengan {contextSplitSymbolTotal} kes. Matahari terbit dan terbenam secara tradisional ditafsirkan dengan cara yang bertentangan."
          },
          {
            "p": "Oleh itu, 「Saya melihat seekor babi」 kurang tepat daripada 「Babi itu masuk ke dalam rumah」, dan 「Ada air」 kurang tepat daripada 「Saya minum air jernih」. **Sebuah kata kerja menentukan makna.**"
          }
        ]
      },
      {
        "title": "Sebab untuk bertanya tentang perasaan dan pengulangan",
        "blocks": [
          {
            "p": "Di bawah kandungan mimpi, terdapat tempat untuk memilih **bagaimana perasaan anda ketika anda bangun** dan **sama ada anda mempunyai mimpi berulang**. Anda tidak perlu memilih kedua-duanya untuk hasil diberikan."
          },
          {
            "p": "Nilai-nilai ini tidak digunakan untuk mencari simbol. Mereka dirujuk ketika memutuskan **makna mana yang dipilih** dari simbol yang sama dan bagaimana untuk menyampaikan hasilnya. Mimpi berulang secara tradisional dilihat berbeza daripada mimpi yang dialami sekali."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dalam kes yang menyebut tentang kehamilan",
        "blocks": [
          {
            "p": "Jika teks termasuk kata-kata seperti kehamilan, mimpi konsepsi, atau kelahiran, kami melihat terlebih dahulu pada makna mimpi konsepsi simbol tersebut. Bahkan mimpi babi yang sama telah ditafsirkan secara berbeza oleh orang-orang purba bergantung pada situasi — [cara membezakan 태몽](/guide/conception-dreams)"
          }
        ]
      },
      {
        "title": "Tiada keperluan untuk menulis panjang",
        "blocks": [
          {
            "p": "Panjang yang lebih tidak bermakna lebih banyak simbol akan ditemui. Sebenarnya, jika kata-kata yang tidak berkaitan dicampur dengan panjang, terdapat kemungkinan yang lebih tinggi bahawa kata-kata yang tidak relevan akan ditafsirkan sebagai simbol. Sila tuliskan hanya **adegan yang diingati**."
          },
          {
            "p": "Teks yang anda tulis tidak akan disimpan di mana-mana. Sebab anda boleh menulis dengan bebas dijelaskan dalam [kaedah tidak menyimpan](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Asas Perkhidmatan",
    "title": "Kriteria Dibahagikan kepada Lapan Kategori",
    "summary": "Lapan kategori — dari objek, tindakan dan haiwan hingga ke badan dan warna — dengan berapa banyak simbol yang dimiliki setiap satu, dan mengapa tiada kategori untuk emosi.",
    "backLabel": "Asas Tafsiran",
    "sections": [
      {
        "title": "Dibahagikan kepada lapan kategori apa yang muncul dalam mimpi",
        "blocks": [
          {
            "p": "Kami mengumpulkan {symbolTotal} simbol ke dalam lapan kategori berdasarkan watak mereka. Soalan pemisah adalah **apa yang muncul dalam mimpi** — seekor binatang, objek, atau sesuatu yang anda lakukan."
          },
          {
            "ul": [
              "**Objek {categoryThing}** — barang-barang nyata seperti wang, cermin, dan pisau. Ini adalah kategori yang paling tebal.",
              "**Tindakan {categoryAction}** — perkara yang dilakukan atau dialami dalam mimpi, seperti mandi, berpesta, atau dipukul.",
              "**Haiwan {categoryAnimal}** — naga, babi, ular, dan lembu. Banyak daripada ini telah dilihat sebagai 태몽.",
              "**Alam {categoryNature}** — benda-benda besar dan purba seperti air, api, matahari, dan bulan.",
              "**Orang {categoryPerson}** — orang yang muncul dalam mimpi, seperti raja, pencuri, dan individu yang telah meninggal.",
              "**Tempat {categoryPlace}** — lokasi di mana mimpi berlaku, seperti rumah, telaga, dan kubur.",
              "**Badan {categoryBody}** — gigi, rambut, darah. Makna berbeza bergantung pada di mana di badan ia berada.",
              "**Warna {categoryColor}** — mereka tidak mempunyai baik atau buruk yang melekat dan ditafsirkan berdasarkan apa yang mereka kaitkan."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sebab untuk tidak mempunyai kategori numerik",
        "blocks": [
          {
            "p": "Kami tidak mencipta kategori untuk nombor seperti 「tiga」 atau 「tujuh」. **Tiada satu pun daripada dua teks asal menetapkan nombor sebagai entri.** Untuk membuka kategori itu dan mengisinya, kami perlu menulis sesuatu yang tidak muncul dalam mana-mana teks."
          }
        ]
      },
      {
        "title": "Mengapa tiada kategori emosi",
        "blocks": [
          {
            "p": "Kami tidak mencipta kategori untuk perasaan seperti 「kebimbangan」 atau 「kerinduan」. **Ini kerana teks tafsiran mimpi purba tidak menyebut emosi.** Kedua-dua teks asal bercakap tentang apa yang dilihat dan apa yang berlaku, bukan perasaan si pemimpi sebagai subjek tafsiran."
          },
          {
            "p": "Kami pernah cuba membina kategori untuk emosi, dan apa yang keluar adalah istilah seperti 「kehilangan kasih sayang」 dan 「stabiliti emosi」. Ini bukan **bentuk** yang muncul dalam mimpi tetapi kosa kata dari psikologi moden. Itu adalah jenis perkhidmatan yang berbeza dan bukan apa yang kamus ini bertujuan untuk lakukan."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jadi apabila anda menulis",
        "blocks": [
          {
            "p": "Sila tuliskan **apa yang anda lihat dan lakukan** daripada perasaan, kerana ia akan ditafsirkan dengan lebih baik. Namun, kami bertanya secara berasingan tentang bagaimana perasaan anda ketika anda bangun — ini dirujuk dalam situasi di mana makna boleh berbeza walaupun untuk simbol yang sama."
          }
        ]
      },
      {
        "title": "Warna tidak digunakan sendirian",
        "blocks": [
          {
            "p": "Warna {categoryColor} tidak mempunyai baik atau buruk yang melekat. Sama seperti ular biru dan ular merah ditafsirkan secara berbeza, makna mereka berubah berdasarkan **apa yang mereka kaitkan**. Oleh itu, kategori ini dianggap sebagai nilai yang dibaca apabila muncul dengan simbol lain."
          },
          {
            "p": "Senarai lengkap mengikut kategori tersedia dalam [Kamus Simbol](/dream/symbols). Apabila anda membuka simbol, makna yang disampaikan, kategori, dan simbol berkaitan akan disediakan."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Cara Menggunakan",
    "title": "Apabila Simbol Tidak Ditemui",
    "summary": "Jika tiada apa-apa yang ditemui, kami akan menyatakannya. Kami membincangkan mengapa itu berlaku, apa yang kami tunjukkan di skrin itu sebagai ganti, dan bagaimana kamus diperluas.",
    "backLabel": "Asas Tafsiran",
    "sections": [
      {
        "title": "Apabila kami tidak menemui apa-apa, kami menyatakan bahawa kami tidak menemui apa-apa",
        "blocks": [
          {
            "p": "Jika kami tidak dapat menemui satu simbol pun dalam teks yang anda tulis, kami **memberitahu anda bahawa kami tidak menemui apa-apa.** Kami tidak memaksa simbol yang serupa ke atasnya, atau menulis ayat yang mungkin untuk mengisi kekosongan."
          },
          {
            "p": "Ini adalah isu yang paling membimbangkan untuk perkhidmatan ini. Saat anda mengisi kekosongan, tafsiran yang datang dan apa yang sebenarnya dilakukan berbeza."
          }
        ]
      },
      {
        "title": "Mengapa ia tidak dapat ditemui?",
        "blocks": [
          {
            "p": "Ia biasanya salah satu daripada yang berikut."
          },
          {
            "ul": [
              "**Ia adalah simbol yang belum ada dalam kamus.** Pada masa ini, terdapat {symbolTotal} simbol yang disenaraikan, tetapi terdapat banyak lagi yang boleh muncul dalam mimpi.",
              "**Anda hanya menulis perasaan anda.** Jika anda hanya mempunyai emosi seperti \"Saya takut\" atau \"Saya rasa aneh,\" tidak ada simbol yang dapat dikenalpasti. **Interpretasi mimpi tradisional merujuk kepada objek dan tindakan yang boleh dilihat**, bukan emosi.",
              "**Ia terlalu pendek.** Adalah lebih baik untuk menulis dalam ayat daripada hanya satu atau dua perkataan."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apabila anda cuba menulis semula",
        "blocks": [
          {
            "p": "Sila sertakan **apa yang anda lihat dan apa yang anda lakukan** dalam mimpi. Mengatakan \"Saya cemas\" kurang berkesan daripada mengatakan \"gigi saya jatuh dengan sendirinya,\" dan \"saya menyukainya\" kurang berkesan daripada mengatakan \"saya melihat air jernih mengalir.\""
          }
        ]
      },
      {
        "title": "Kami tidak meninggalkan skrin kosong",
        "blocks": [
          {
            "p": "Apabila sesuatu tidak dapat dijumpai, kami juga menunjukkan **{popularSymbolCount} simbol yang sering dicari** di skrin itu. Ini dipilih daripada yang paling mewakili dalam kamus, yang boleh membantu anda mengingati jika salah satu daripadanya ada dalam mimpi anda."
          },
          {
            "p": "Jika anda ingin menyemak semua simbol, anda boleh menemui {symbolTotal} simbol yang disusun mengikut kategori dalam [kamus simbol](/dream/symbols). Setiap simbol termasuk makna yang disampaikan dan simbol berkaitan."
          }
        ]
      },
      {
        "title": "Bagaimana kamus akan berkembang pada masa depan?",
        "blocks": [
          {
            "p": "Daripada meningkatkan jumlah, kami terlebih dahulu memberi tumpuan kepada **mengidentifikasi dengan tepat apa yang sudah ada**. Kami telah menyertakan {aliasTotal} nama alternatif untuk simbol yang sama, dan kami telah memastikan bahawa perkataan dengan akhiran yang mengubah bentuknya juga dapat dikenalpasti."
          },
          {
            "p": "Apabila memperluas simbol itu sendiri, kami hanya menyertakan **apa yang ditulis dalam teks asal**. Jika makna tidak mempunyai frasa asal yang sepadan, entri tidak akan dibuat — hanya meningkatkan angka tanpa asas menjadikannya penciptaan, bukan kamus. Sebab-sebab untuk percubaan ini dan hasilnya didokumenkan dalam [mengapa kami tidak menggunakan model](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Asas Perkhidmatan",
    "title": "Sebab-sebab tidak menggunakan kecerdasan buatan dalam interpretasi mimpi",
    "summary": "Tiada kod yang memanggil model untuk mencipta interpretasi. Ini adalah hasil daripada percubaan untuk memperluas kamus menggunakan model dan apa yang diperoleh serta apa yang牺牲 sebagai hasilnya.",
    "backLabel": "Asas Interpretasi",
    "sections": [
      {
        "title": "Kecerdasan buatan tidak digunakan dalam interpretasi mimpi",
        "blocks": [
          {
            "p": "Banyak perkhidmatan interpretasi mimpi semasa menunjukkan tulisan yang dihasilkan dengan memasukkan cerita mimpi ke dalam model generatif. Dreams-Link tidak melakukan ini. **Tiada kod yang memanggil model untuk mencipta interpretasi.**"
          },
          {
            "p": "Apa yang kami lakukan adalah mudah. Kami mencari simbol dalam teks yang anda berikan dan memilih makna yang telah ditulis oleh kamus tentang simbol-simbol tersebut. Tiada ruang untuk ayat yang tidak terdapat dalam kamus."
          },
          {
            "p": "Kamus itu sendiri tidak dicipta oleh model. Setiap makna disertakan dengan **petikan dari teks interpretasi mimpi asal yang berasal dari**, dan petikan itu dibandingkan perkata demi perkata dengan fail asal."
          }
        ]
      },
      {
        "title": "Mengapa keputusan ini dibuat?",
        "blocks": [
          {
            "p": "**Model tidak mengatakan mereka tidak tahu apa yang mereka tidak tahu.** Apabila ditanya tentang simbol tanpa asas yang disampaikan, mereka mencipta asal yang boleh dipercayai. Dan sama ada ia dicipta atau tidak adalah sesuatu yang tidak dapat dibezakan oleh pembaca. Jika penciptaan dimasukkan di tempat penyampaian tradisi, premis perkhidmatan itu runtuh."
          },
          {
            "p": "Kami telah mencuba membiarkan model mencipta simbol untuk memperluas kamus. Daripada enam puluh enam contoh yang dipilih sebagai layak untuk diterima, **lima puluh lima tidak dapat memberikan sebarang asas yang disampaikan**, dan terdapat juga contoh seperti subway dan lebuh raya yang tidak boleh wujud dalam interpretasi mimpi tradisional. Oleh itu, **tiada yang disertakan.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hal yang sama berlaku walaupun dengan model yang lebih besar",
        "blocks": [
          {
            "p": "Apabila kami menjalankan perkara yang sama pada model yang lebih baik, satu daripada sembilan belas lulus, dan yang satu itu hanyalah pengulangan perkataan yang sama dengan asas yang sama. Model yang lebih besar hanya bercakap **lebih boleh dipercayai** tentang apa yang tidak diketahuinya."
          }
        ]
      },
      {
        "title": "Manfaat tidak menggunakan model",
        "blocks": [
          {
            "ul": [
              "**Jika ia adalah mimpi yang sama, interpretasi yang sama akan keluar.** Perkataan tidak berubah setiap kali anda melihatnya.",
              "**Ia cepat.** Tiada menunggu untuk respons model, jadi hasilnya tersedia dengan segera.",
              "**Mimpi yang anda tulis tidak keluar.** Tiada keperluan untuk menghantarnya ke pelayan syarikat luar — sila baca ini bersama [kaedah yang tidak menyimpan](/guide/no-storage).",
              "**Ia boleh ditawarkan secara percuma.** Mimpi adalah sesuatu yang kita alami setiap hari, jadi terdapat banyak pertanyaan. Jika model dipanggil untuk setiap pertanyaan, kos mesti ditanggung dari suatu tempat."
            ]
          }
        ]
      },
      {
        "title": "Sebaliknya, apa yang telah牺牲",
        "blocks": [
          {
            "p": "Kami tidak dapat mentafsir apa yang tidak terdapat dalam kamus. Jika kami menggunakan model, akan ada jawapan yang boleh dipercayai untuk apa sahaja yang anda tulis. Kami memilih untuk **mengatakan bahawa kami tidak dapat menemuinya apabila kami tidak dapat menemuinya.** Apa yang kami tunjukkan pada masa itu didokumenkan dalam [apabila simbol tidak dapat dijumpai](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produk Berbayar",
    "title": "Dua Cara untuk Menyimpan Mimpi Anda",
    "summary": "Interpretasi itu sendiri tidak dikenakan bayaran. Ia menerangkan apa dua pilihan berbayar, apa yang mereka mengandungi, dan mengapa mereka bukan interpretasi yang lebih baik.",
    "backLabel": "Asas Interpretasi",
    "sections": [
      {
        "title": "Interpretasi itu sendiri tidak dikenakan bayaran",
        "blocks": [
          {
            "p": "Menulis mimpi anda dan melihat simbol yang termasuk **tidak memerlukan wang dan tidak memerlukan keahlian.** Oleh kerana orang bermimpi setiap hari, kami menilai bahawa ruang ini harus ditawarkan secara percuma."
          },
          {
            "p": "**Dua pilihan berbayar tidak memberikan interpretasi yang lebih baik.** Mereka adalah **dua cara untuk menyimpan interpretasi yang sama.** Kandungan yang anda lihat di skrin tidak berubah selepas pembayaran."
          }
        ]
      },
      {
        "title": "Kad Mimpi — Satu Imej",
        "blocks": [
          {
            "p": "Kami menyediakan simbol yang ditemui dalam mimpi anda dan maknanya dalam **satu imej.** Ia adalah fail imej, bukan PDF, jadi anda boleh menyimpannya seperti sedia ada atau menghantarnya kepada orang lain."
          },
          {
            "p": "Ini adalah untuk mereka yang merasa menyesal apabila mimpi yang baik hilang selepas menutup skrin. Oleh kerana kami tidak menyimpan mimpi, ini adalah satu-satunya cara untuk menyimpannya jika anda ingin memeliharanya."
          }
        ]
      },
      {
        "title": "Laporan Mimpi Konsepsi — Dokumen {conceptionPages} halaman",
        "blocks": [
          {
            "p": "Kami mencipta **dokumen {conceptionPages} halaman** tentang mimpi yang menunjukkan simbol yang menunjukkan mimpi konsepsi. Ia termasuk simbol yang muncul, bagaimana simbol tersebut telah ditafsirkan secara tradisional, dan ruang untuk merekod maklumat itu."
          },
          {
            "p": "Mimpi konsepsi sering dibincangkan dan dikongsi di kalangan ahli keluarga walaupun selepas anak dilahirkan, jadi kami mencipta dokumen berasingan untuk mimpi yang terlalu berharga untuk hanya dilihat di skrin."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkataan yang tidak digunakan di sini juga",
        "blocks": [
          {
            "p": "Kami tidak membuat penilaian tentang status kehamilan atau jantina anak. Kenyataan sedemikian tidak disertakan dalam dokumen. Untuk maklumat lanjut, sila rujuk kepada [bagaimana mimpi konsepsi ditapis](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Mengapa tidak ada lagi dokumen?",
        "blocks": [
          {
            "p": "Perkhidmatan saudara menghasilkan laporan sembilan halaman. Ini kerana enjin saju mengekstrak banyak nilai daripada satu tarikh lahir. Interpretasi mimpi dalam tradisi Korea tidak berfungsi dengan cara itu."
          },
          {
            "p": "Kamus mengandungi {symbolTotal} simbol dan {meaningTotal} makna, tetapi **hanya beberapa simbol yang sebenarnya berlaku untuk satu mimpi**. Untuk mengembangkan itu menjadi sembilan halaman, seseorang perlu menulis perkara yang tidak terdapat dalam mana-mana teks asal, dan itulah yang telah dipilih oleh perkhidmatan ini untuk tidak dilakukan. Oleh itu, dokumen ini sepanjang yang dibenarkan oleh bahan secara jujur, dan tidak lebih."
          }
        ]
      },
      {
        "title": "Nilai dan Ketersediaan",
        "blocks": [
          {
            "p": "Harga tersedia dalam [panduan harga](/pricing). Sebab dokumen ini tidak menyenaraikan jumlah adalah sengaja — untuk mengelakkan situasi di mana dokumen panduan kekal dengan jumlah yang tidak terkini apabila nilai berubah. Skrin dan syarat semua membaca jumlah dari tempat yang sama."
          },
          {
            "p": "Dokumen yang anda bayar boleh **diperoleh semula dengan pesanan yang sama.** Walau bagaimanapun, kerana kami tidak menyimpan fail, ia tidak boleh dicipta semula setelah anda meninggalkan skrin keputusan — sila simpan fail yang anda terima."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const MS_NOTICES = {
  "kindLabels": {
    "service": "Perkhidmatan",
    "product": "Laporan",
    "engine": "Pengiraan",
    "support": "Sokongan"
  },
  "intro": "Perubahan kepada terma penggunaan anda — harga, polisi — akan dipaparkan di sini sebelum ia berkuat kuasa. Penambahbaikan dalaman seperti skrin yang menjadi lebih pantas tidak akan dipaparkan di sini: apa yang muncul di sini adalah apa yang anda perlu tahu.",
  "empty": {
    "title": "Tiada notis yang dipaparkan",
    "body": "Jika terdapat sebarang perubahan yang perlu dimaklumkan kepada anda, ia akan dipaparkan di sini."
  },
  "effective": "Berkuat kuasa dari {date}",
  "pager": {
    "label": "Halaman Notis",
    "newer": "← Terbaru",
    "older": "Notis Sebelumnya →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "Mimpi yang anda berikan tidak disimpan.",
      "body": [
        "Cerita mimpi adalah nilai peribadi yang paling penting yang diterima oleh perkhidmatan ini. Oleh itu, ia tidak direkodkan dalam mana-mana jadual. Input hanya dibawa dalam alamat hasil untuk pengiraan, dan setelah tetingkap ditutup, ia hilang.",
        "Kami memutuskan untuk tidak mencipta ciri yang mengumpul mimpi dan menunjukkan aliran (diari mimpi). Ia adalah ciri yang berguna, tetapi untuk melakukannya, tulisan peribadi yang paling penting mesti disimpan secara berterusan.",
        "Apabila anda menghantar pautan hasil kepada orang lain, ia mengandungi kandungan mimpi. Sila berhati-hati ketika berkongsi."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Hasil termasuk kamus simbol dan kriteria pengiraan.",
      "body": [
        "Asas untuk tafsiran adalah kamus simbol tafsiran mimpi tradisional. Hasil dan dokumen akan termasuk versi kamus tersebut (contohnya, 1.2.0) dan versi peraturan padanan (contohnya dream-1.0.0). Mimpi yang sama akan sentiasa menghasilkan simbol yang sama berdasarkan kriteria yang sama.",
        "Jika kami menambah simbol ke dalam kamus atau mengubah makna dengan cara yang boleh mengubah hasil, fakta ini akan dipaparkan di sini. Ini kerana hasil yang anda terima sebelum ini mungkin berubah.",
        "Kami tidak mencipta makna tradisional yang tidak terdapat dalam kamus. Jika tiada simbol yang ditemui, kami hanya menyatakan bahawa tiada yang ditemui dan mengakhiri."
      ]
    },
    "2026-08-06-conception": {
      "title": "Kami hanya memaklumkan anda tentang mimpi konsepsi dan tidak membuat penilaian.",
      "body": [
        "Jika simbol yang secara tradisional dilihat sebagai mimpi konsepsi muncul dalam mimpi, kami akan memaklumkan anda tentang fakta itu. Walau bagaimanapun, kami tidak menentukan status kehamilan atau jantina anak — tuntutan sedemikian tidak mempunyai asas, dan penilaian perubatan adalah tanggungjawab institusi perubatan.",
        "Sebut tentang anak lelaki dan perempuan dalam naratif tradisional adalah refleksi adat yang telah diturunkan, dan ia tidak bermakna bahawa kami meramalkan dengan tepat."
      ]
    }
  }
} satisfies NoticeCopy;
