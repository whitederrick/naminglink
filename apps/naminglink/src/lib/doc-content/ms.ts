import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Bahasa Melayu — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const MS_DOCS = {
  "about": {
    "eyebrow": "Tentang",
    "title": "Tentang Naming-Link",
    "summary": "Kami membantu anda memilih dan memahami nama Korea. Berikut adalah dasar hasil kami, dan apa yang kami sengaja tidak lakukan.",
    "backLabel": "Halaman Utama",
    "sections": [
      {
        "title": "Apa yang kami lakukan",
        "blocks": [
          {
            "p": "Naming-Link membantu anda **memilih dan memahami nama Korea** — hanja di belakang nama anak, nama Korea untuk digunakan di luar negara, ejaan Hangul nama anda sendiri, dan kenang-kenangan seperti cap atau laporan cetak."
          },
          {
            "p": "Melihat hasil anda adalah **percuma dan tidak memerlukan akaun.** Item berbayar tidak pernah menjual semula apa yang sudah ditunjukkan di skrin: mereka membuka lebih banyak calon, menambah analisis bertulis, atau mengubah hasil menjadi sesuatu yang boleh anda simpan."
          }
        ]
      },
      {
        "title": "Apa yang menjadi dasar jawapan kami",
        "blocks": [
          {
            "p": "Hanja berasal dari **jadual hanja rasmi Mahkamah Agung Korea.** Setiap karakter mempunyai bacaan tetap untuk digunakan dalam nama, dan karakter di luar jadual tidak boleh didaftarkan. Kami tidak menambah senarai itu atau memilih kegemaran."
          },
          {
            "p": "Saju dan angka lima elemen dikira dari **kalendar lunisolar Korea**, dengan waktu kelahiran diperbetulkan kepada waktu solar sebenar untuk tempat kelahiran. Bacaan adalah rujukan tradisional, bukan ramalan."
          },
          {
            "p": "Penjelasan bertulis dihasilkan oleh AI. Untuk mengelakkan **mencipta fakta**, model hanya diberikan input anda dan data rujukan kami sendiri, dan diarahkan untuk tetap di dalamnya. Panduan menerangkan ini secara terperinci."
          }
        ]
      },
      {
        "title": "Apa yang kami tidak lakukan",
        "blocks": [
          {
            "ul": [
              "**Kami tidak meramal nasib.** Tiada di sini yang menjanjikan keberuntungan, kekayaan atau perlindungan.",
              "**Kami tidak menyimpan nama anda.** Hasil percuma tidak pernah ditulis ke pelayan kami, dan dokumen berbayar dihantar tanpa menyimpan salinan fail.",
              "**Pembayaran tidak membeli jawapan yang lebih baik.** Membuka dengan iklan dan membuka dengan pembayaran memberikan kandungan yang sama."
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
            "p": "Maklumat syarikat dan cara untuk menghubungi kami terdapat di [halaman hubungi](/contact), termasuk pengembalian, permintaan privasi dan laporan kesilapan."
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
            "p": "Jadual hanja nama tidak hanya menentukan karakter yang boleh digunakan. **Ia juga menetapkan bagaimana setiap karakter dibaca apabila muncul dalam nama.** Bacaan tetap itu adalah apa yang digunakan untuk pendaftaran."
          },
          {
            "p": "Kebanyakan hanja mempunyai beberapa bacaan yang mungkin. Namun, nama ditulis dalam dokumen dan diucapkan dengan kuat, jadi ia memerlukan tepat satu bacaan. Oleh itu, jadual menetapkan bacaan untuk setiap karakter untuk digunakan dalam nama, dan tiada bacaan lain boleh didaftarkan."
          }
        ]
      },
      {
        "title": "Oleh itu, bunyi datang dahulu",
        "blocks": [
          {
            "p": "Inilah sebabnya Naming-Link menetapkan bunyi sebelum mencari hanja. Jika nama adalah \"지은\", makna hanya boleh dipilih di antara karakter yang ditugaskan bacaan **지** dan karakter yang ditugaskan bacaan **은**."
          },
          {
            "p": "Walau sesempurna mana makna, karakter yang bacaan tidak sepadan tidak boleh digunakan untuk nama itu. Kami juga tidak pernah mengubah bunyi nama untuk disesuaikan dengan karakter — nama diucapkan sepanjang hayat, dan bunyi ditetapkan terlebih dahulu, dengan hanja mengikuti."
          }
        ]
      },
      {
        "title": "Nama keluarga berada di luar jadual ini",
        "blocks": [
          {
            "p": "Ini sering disalahfahami. **Jadual mengawal nama yang diberikan, bukan nama keluarga.** Nama keluarga mengikuti apa yang sudah ada dalam daftar keluarga, jadi sesetengah orang memang menggunakan karakter yang tidak ada dalam jadual hanja nama."
          },
          {
            "p": "Itulah sebabnya Naming-Link memperlakukan hanja nama keluarga dengan cara yang berbeza. Kami hanya membantu anda mencari nama keluarga, dan kami menyediakan ruang untuk memasukkan satu secara langsung, bagi orang yang karakter mereka berada di luar jadual. Nama keluarga dua suku kata seperti Namgung dan Seonwoo dimasukkan dengan cara yang sama."
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
            "p": "Jika nama Korea adalah apa yang anda mahu, **itu adalah perkhidmatan yang berbeza.** Satu mengekalkan nama anda dan hanya mengubah skrip; yang lain mencadangkan nama baru."
          }
        ]
      },
      {
        "title": "Bunyi yang tidak ada dalam bahasa Korea",
        "blocks": [
          {
            "p": "Setiap bahasa mempunyai bunyi yang tidak dimiliki oleh bahasa Korea — f, v, z, th, dan perbezaan vokal yang tidak dibuat oleh bahasa Korea. Untuk itu, kami menulis apa yang **seorang penutur Korea sebenarnya katakan** apabila mereka membaca nama anda dengan kuat, bukannya mentranskripsikan fonetik asal simbol demi simbol. Tujuannya adalah ejaan yang akan digunakan, bukan yang paling setia secara teknikal."
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
            "p": "Tiada jawapan yang betul tunggal. Ejaan yang paling dekat dengan bunyi asal, yang paling biasa digunakan di Korea, dan yang paling mudah untuk ditulis sering kali adalah tiga perkara yang berbeza. Oleh itu, kami menunjukkan mereka bersama dan menyatakan apa yang memisahkan mereka."
          },
          {
            "p": "Jika tiada satu pun daripada mereka terasa betul, anda boleh menambah petunjuk tentang bunyi yang anda inginkan dan menjalankannya semula — contohnya, bahawa suku kata tertentu harus ditulis dengan cara yang berbeza."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tiada hanja di sini",
        "blocks": [
          {
            "p": "Kami tidak melampirkan hanja kepada transliterasi. Hanja membawa makna, dan aliran ini adalah tentang bunyi. Memadankan karakter dengan bunyi sahaja boleh menyebabkan anda mendapat makna yang tidak pernah anda minta."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Bagaimana ia berfungsi",
    "title": "Bagaimana kami membina nama Korea",
    "summary": "Kami memilih dari nama keluarga yang wujud, menilai betapa mudahnya nama itu diucapkan dan ditulis, dan bertanya untuk apa nama itu.",
    "backLabel": "Panduan",
    "sections": [
      {
        "title": "Kami bermula dengan nama keluarga",
        "blocks": [
          {
            "p": "Di Korea, nama keluarga datang dahulu, dan tidak seperti nama yang diberikan, ia tidak dicipta secara bebas — anda mewarisinya. Jadi kami hanya mencadangkan nama keluarga yang sebenarnya dimiliki oleh orang Korea. Kumpulan default kami adalah **20 nama keluarga yang paling biasa**, yang bersama-sama merangkumi kira-kira 80% populasi."
          },
          {
            "p": "Jika nama keluarga anda kebetulan sepadan dengan nama Korea yang sebenar dari segi bunyi — Wang dengan 왕, Ye dengan 예 — kami meletakkan yang itu terlebih dahulu. Menjaga hubungan kembali kepada nama asal anda lebih berharga daripada nama keluarga yang dipilih secara rawak."
          },
          {
            "p": "Anda boleh memilih nama keluarga sendiri atau membiarkan kami mencadangkan satu. Dalam kedua-dua cara, ia akan menjadi **nama keluarga yang wujud**."
          }
        ]
      },
      {
        "title": "Mudah untuk diucapkan, mudah untuk ditulis",
        "blocks": [
          {
            "p": "Ini adalah nama yang sebenarnya akan dipanggil oleh orang di Korea, jadi perkara pertama yang kami periksa adalah sama ada seorang Korea boleh mendengarnya sekali dan menulisnya. Nama yang perlu dieja setiap kali adalah beban yang anda tanggung, bukan kami."
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
    "backLabel": "Halaman Utama",
    "sections": []
  },
  "contact": {
    "eyebrow": "Hubungi",
    "title": "Hubungi kami",
    "summary": "Cara untuk menghubungi kami untuk pertanyaan, pengembalian, permintaan privasi dan laporan kesilapan, dengan maklumat syarikat kami.",
    "backLabel": "Halaman Utama",
    "sections": [
      {
        "title": "Email kami",
        "blocks": [
          {
            "p": "Tulis kepada **{email}**. Kami membalas dalam dua hari bekerja. Untuk apa sahaja tentang pesanan — pembayaran, pengembalian, fail yang tidak anda terima — sila sertakan **nombor pesanan atau email yang anda bayar**."
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
              "**Pembayaran dan pengembalian** — jika dokumen tidak pernah dihasilkan, atau jumlah yang dikenakan berbeza dari pesanan anda, kami akan mengembalikan sepenuhnya. Lihat [dasar pengembalian](/refund-policy).",
              "**Privasi** — permintaan untuk mengakses, membetulkan atau memadam data anda. Lihat [dasar privasi](/privacy).",
              "**Pembetulan** — jika makna, bacaan atau pengiraan hanja kelihatan salah, beritahu kami. Menyebut skrin mana dan apa yang anda masukkan sangat membantu.",
              "**Apa-apa lagi** — kerjasama dan media pergi ke alamat yang sama."
            ]
          }
        ]
      },
      {
        "title": "Maklumat syarikat",
        "blocks": [
          {
            "ul": [
              "**Entiti undang-undang** — {companyName}",
              "**Wakil** — {representative}",
              "**Nombor pendaftaran perniagaan** — {businessNumber}",
              "**Nombor pendaftaran jualan melalui pos** — {mailOrderNumber}",
              "**Alamat** — {address}",
              "**Perkhidmatan pelanggan** — {customerCenter}",
              "**Email** — {email}",
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
  }
} satisfies Record<DocKey, DocPage>;

export const MS_NOTICES = {
  "kindLabels": {
    "service": "Perkhidmatan",
    "product": "Produk",
    "policy": "Dasar",
    "support": "Sokongan"
  },
  "intro": "Perubahan kepada terma penggunaan anda — harga, dasar — dipaparkan di sini sebelum ia berkuatkuasa. Penambahbaikan dalaman tidak disenaraikan: apa yang muncul di sini adalah apa yang perlu anda ketahui.",
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
        "Pertanyaan, pengembalian, permintaan privasi dan laporan kesilapan kini mempunyai satu tempat untuk pergi. Halaman hubungi di footer menyenaraikan email dan maklumat syarikat kami.",
        "Apa yang menjadi dasar jawapan kami, dan apa yang kami sengaja tidak lakukan, ditulis di halaman tentang."
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
        "Item berbayar belum dijual. Jumlah yang ditunjukkan di halaman harga adalah apa yang akan dikenakan setelah penjualan dibuka."
      ]
    }
  }
} satisfies NoticeCopy;
