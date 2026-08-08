import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Bahasa Indonesia — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const ID_DOCS = {
  "about": {
    "eyebrow": "Tentang",
    "title": "Tentang Naming-Link",
    "summary": "Kami membantu Anda memilih dan memahami nama Korea. Berikut adalah dasar hasil kami, dan apa yang dengan sengaja tidak kami lakukan.",
    "backLabel": "Beranda",
    "sections": [
      {
        "title": "Apa yang kami lakukan",
        "blocks": [
          {
            "p": "Naming-Link membantu Anda **memilih dan memahami nama Korea** — hanja di balik nama anak, nama Korea untuk digunakan di luar negeri, ejaan Hangul dari nama Anda sendiri, dan kenang-kenangan seperti stempel atau laporan cetak."
          },
          {
            "p": "Melihat hasil Anda adalah **gratis dan tidak memerlukan akun.** Item berbayar tidak pernah menjual kembali apa yang sudah ditampilkan di layar: mereka membuka lebih banyak kandidat, menambahkan analisis tertulis, atau mengubah hasil menjadi sesuatu yang dapat Anda simpan."
          }
        ]
      },
      {
        "title": "Apa yang menjadi dasar jawaban kami",
        "blocks": [
          {
            "p": "Hanja berasal dari **tabel nama-hanja resmi Mahkamah Agung Korea.** Setiap karakter memiliki bacaan tetap untuk digunakan dalam nama, dan karakter di luar tabel tidak dapat didaftarkan. Kami tidak menambah daftar itu atau memilih favorit."
          },
          {
            "p": "Saju dan angka lima elemen dihitung dari **kalendar lunisolar Korea**, dengan waktu lahir yang dikoreksi ke waktu matahari yang sebenarnya untuk tempat lahir. Bacaan tersebut adalah referensi tradisional, bukan prediksi."
          },
          {
            "p": "Penjelasan tertulis dihasilkan oleh AI. Untuk mencegahnya **mengada-ada**, model hanya diberikan input Anda dan data referensi kami sendiri, dan diberitahu untuk tetap berada di dalamnya. Panduan menjelaskan ini secara rinci."
          }
        ]
      },
      {
        "title": "Apa yang tidak kami lakukan",
        "blocks": [
          {
            "ul": [
              "**Kami tidak meramal nasib.** Tidak ada yang menjanjikan keberuntungan, kekayaan, atau perlindungan.",
              "**Kami tidak menyimpan nama Anda.** Hasil gratis tidak pernah ditulis di server kami, dan dokumen berbayar disampaikan tanpa menyimpan salinan file.",
              "**Membayar tidak membeli jawaban yang lebih baik.** Membuka dengan iklan dan membuka dengan pembayaran memberikan konten yang sama persis."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Layanan tersedia dalam 23 bahasa. PDF berbayar diterbitkan dalam bahasa Inggris untuk bahasa Arab dan Khmer — perender PDF tidak mendukung skrip tersebut — dan kami menyebutkan ini di layar sebelum Anda membayar."
          }
        ]
      },
      {
        "title": "Kontak",
        "blocks": [
          {
            "p": "Detail perusahaan dan cara menghubungi kami ada di [halaman kontak](/contact), termasuk pengembalian dana, permintaan privasi, dan laporan kesalahan."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Bacaan",
    "title": "Bacaan tetap — satu pengucapan per karakter",
    "summary": "Tabel resmi tidak hanya mencantumkan karakter. Ini juga menetapkan bagaimana masing-masing dibaca saat digunakan dalam nama.",
    "backLabel": "Panduan",
    "sections": [
      {
        "title": "Bacaan tetap untuk setiap karakter",
        "blocks": [
          {
            "p": "Tabel nama-hanja tidak hanya menentukan karakter mana yang dapat digunakan. **Ini juga menetapkan bagaimana setiap karakter dibaca saat muncul dalam nama.** Bacaan tetap itulah yang digunakan untuk pendaftaran."
          },
          {
            "p": "Sebagian besar hanja memiliki beberapa bacaan yang mungkin. Namun, sebuah nama ditulis dalam dokumen dan diucapkan, sehingga membutuhkan satu bacaan yang tepat. Tabel tersebut oleh karena itu menetapkan bacaan untuk setiap karakter yang digunakan dalam nama, dan bacaan lain tidak dapat didaftarkan."
          }
        ]
      },
      {
        "title": "Jadi suara datang pertama",
        "blocks": [
          {
            "p": "Inilah sebabnya Naming-Link menetapkan suara sebelum mencari hanja. Jika nama tersebut adalah \"지은\", maknanya hanya dapat dipilih dari karakter yang ditetapkan bacaan **지** dan karakter yang ditetapkan bacaan **은**."
          },
          {
            "p": "Seberapa baik pun maknanya, karakter yang bacaan tidak cocok tidak dapat digunakan untuk nama itu. Kami juga tidak pernah mengubah suara nama untuk menyesuaikan dengan karakter — sebuah nama diucapkan seumur hidup, dan suara ditetapkan terlebih dahulu, dengan hanja mengikuti."
          }
        ]
      },
      {
        "title": "Nama keluarga berada di luar tabel ini",
        "blocks": [
          {
            "p": "Ini sering disalahpahami. **Tabel mengatur nama depan, bukan nama keluarga.** Nama keluarga mengikuti apa yang sudah ada di daftar keluarga, jadi beberapa orang memang menggunakan karakter yang tidak ada dalam tabel nama-hanja."
          },
          {
            "p": "Itulah mengapa Naming-Link memperlakukan hanja nama keluarga secara berbeda. Kami hanya membantu Anda menemukan nama keluarga, dan kami meninggalkan kolom untuk memasukkan satu secara langsung, bagi orang yang karakternya berada di luar tabel. Nama keluarga dua suku kata seperti Namgung dan Seonwoo dimasukkan dengan cara yang sama."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Cara kerjanya",
    "title": "Bagaimana kami mengeja nama Anda dalam Hangul",
    "summary": "Bagaimana kami memilih suara saat menulis nama asing dalam Hangul, dan mengapa kami tidak melampirkan hanja.",
    "backLabel": "Panduan",
    "sections": [
      {
        "title": "Kami membawa suara, bukan makna",
        "blocks": [
          {
            "p": "Layanan ini menulis **nama Anda** dalam Hangul. Ini tidak memberi Anda nama Korea. Michael menjadi 마이클 — nama yang sama, ditulis agar orang Korea dapat membacanya dan mengucapkannya. Kami tidak menukarnya dengan nama Korea yang kebetulan memiliki makna yang mirip."
          },
          {
            "p": "Jika nama Korea yang Anda inginkan, **itu adalah layanan yang berbeda.** Satu mempertahankan nama Anda dan hanya mengubah skrip; yang lain mengusulkan nama baru."
          }
        ]
      },
      {
        "title": "Suara yang tidak dimiliki oleh bahasa Korea",
        "blocks": [
          {
            "p": "Setiap bahasa memiliki suara yang tidak dimiliki oleh bahasa Korea — f, v, z, th, dan perbedaan vokal yang tidak dibuat oleh bahasa Korea. Untuk itu kami menulis apa yang **diucapkan oleh penutur Korea sebenarnya** saat mereka membaca nama Anda dengan keras, bukan mentranskripsikan fonetik asli simbol demi simbol. Tujuannya adalah ejaan yang akan digunakan, bukan yang paling setia secara teknis."
          },
          {
            "p": "Ejaan yang sama dapat berbeda tergantung dari mana nama berasal, jadi kami meminta bahasa dan negara Anda dan bekerja dari pengucapan itu."
          }
        ]
      },
      {
        "title": "Beberapa ejaan, berdampingan",
        "blocks": [
          {
            "p": "Tidak ada jawaban yang benar tunggal. Ejaan yang paling mendekati suara asli, yang paling umum digunakan di Korea, dan yang paling mudah ditulis sering kali adalah tiga hal yang berbeda. Jadi kami menunjukkan mereka bersama dan menjelaskan apa yang memisahkan mereka."
          },
          {
            "p": "Jika tidak ada yang terasa benar, Anda dapat menambahkan petunjuk tentang suara yang Anda inginkan dan menjalankannya lagi — misalnya, bahwa suku kata tertentu harus ditulis berbeda."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tidak ada hanja di sini",
        "blocks": [
          {
            "p": "Kami tidak melampirkan hanja pada transliterasi. Hanja membawa makna, dan alur ini tentang suara. Mencocokkan karakter dengan suara saja dapat membuat Anda mendapatkan makna yang tidak pernah Anda minta."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Cara kerjanya",
    "title": "Bagaimana kami membangun nama Korea",
    "summary": "Kami memilih dari nama keluarga yang ada, mempertimbangkan seberapa mudah nama tersebut diucapkan dan ditulis, dan menanyakan untuk apa nama itu.",
    "backLabel": "Panduan",
    "sections": [
      {
        "title": "Kami mulai dengan nama keluarga",
        "blocks": [
          {
            "p": "Di Korea, nama keluarga datang pertama, dan tidak seperti nama depan, itu tidak diciptakan secara bebas — Anda mewarisinya. Jadi kami hanya menyarankan nama keluarga yang benar-benar dimiliki oleh orang Korea. Kolam default kami adalah **20 nama keluarga yang paling umum**, yang bersama-sama mencakup sekitar 80% populasi."
          },
          {
            "p": "Jika nama keluarga Anda kebetulan cocok dengan nama Korea yang nyata berdasarkan suara — Wang dengan 왕, Ye dengan 예 — kami menempatkan yang itu terlebih dahulu. Menjaga benang kembali ke nama asli Anda lebih berharga daripada nama keluarga yang dipilih secara acak."
          },
          {
            "p": "Anda dapat memilih nama keluarga sendiri atau membiarkan kami merekomendasikan satu. Bagaimanapun juga itu akan menjadi **nama keluarga yang ada**."
          }
        ]
      },
      {
        "title": "Mudah diucapkan, mudah ditulis",
        "blocks": [
          {
            "p": "Ini adalah nama yang akan dipanggil orang di Korea, jadi hal pertama yang kami periksa adalah apakah orang Korea dapat mendengarnya sekali dan menuliskannya. Nama yang perlu dieja setiap kali adalah beban yang Anda bawa, bukan kami."
          },
          {
            "p": "Makna juga penting. Nama depan Korea biasanya memiliki makna, jadi kami memberi tahu Anda apa bacaan nama tersebut dan mengapa kami memilihnya — bukan hanya nama itu sendiri."
          }
        ]
      },
      {
        "title": "Kami bertanya untuk apa nama itu",
        "blocks": [
          {
            "p": "Nama untuk dokumen universitas tidak sama dengan nama yang akan diteriakkan teman di seberang ruangan, atau nama yang akan Anda gunakan secara online. Kami bertanya bagaimana Anda berencana menggunakannya dan mempertimbangkan itu."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ini bukan transliterasi",
        "blocks": [
          {
            "p": "Di sini kami mengusulkan **nama Korea baru**. Jika Anda ingin nama Anda yang ada ditulis dalam Hangul — Michael sebagai 마이클 — lihat [panduan ejaan Hangul](/guide/how-hangul-transliteration)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Pemberitahuan",
    "title": "Pemberitahuan",
    "summary": "Di mana kami mengumumkan perubahan yang mempengaruhi cara Anda menggunakan layanan.",
    "backLabel": "Beranda",
    "sections": []
  },
  "contact": {
    "eyebrow": "Kontak",
    "title": "Hubungi kami",
    "summary": "Cara menghubungi kami untuk pertanyaan, pengembalian dana, permintaan privasi, dan laporan kesalahan, dengan detail perusahaan kami.",
    "backLabel": "Beranda",
    "sections": [
      {
        "title": "Email kami",
        "blocks": [
          {
            "p": "Tulis ke **{email}**. Kami membalas dalam waktu dua hari kerja. Untuk apa pun tentang pesanan — pembayaran, pengembalian dana, file yang tidak Anda terima — harap sertakan **nomor pesanan atau email yang Anda gunakan untuk membayar**."
          },
          {
            "p": "Pertanyaan melalui telepon: {customerCenter} (jam kerja bisnis Korea)."
          }
        ]
      },
      {
        "title": "Apa yang harus dikirim di sini",
        "blocks": [
          {
            "ul": [
              "**Pembayaran dan pengembalian dana** — jika dokumen tidak pernah diproduksi, atau jumlah yang dibebankan berbeda dari pesanan Anda, kami mengembalikan sepenuhnya. Lihat [kebijakan pengembalian dana](/refund-policy).",
              "**Privasi** — permintaan untuk mengakses, memperbaiki, atau menghapus data Anda. Lihat [kebijakan privasi](/privacy).",
              "**Koreksi** — jika makna hanja, bacaan, atau perhitungan terlihat salah, beri tahu kami. Menyebutkan layar mana dan apa yang Anda masukkan sangat membantu.",
              "**Apa pun yang lain** — kemitraan dan pers pergi ke alamat yang sama."
            ]
          }
        ]
      },
      {
        "title": "Detail perusahaan",
        "blocks": [
          {
            "ul": [
              "**Entitas hukum** — {companyName}",
              "**Perwakilan** — {representative}",
              "**No. pendaftaran bisnis** — {businessNumber}",
              "**No. penjualan melalui pos** — {mailOrderNumber}",
              "**Alamat** — {address}",
              "**Layanan pelanggan** — {customerCenter}",
              "**Email** — {email}",
              "**Petugas privasi** — {privacyOfficer}",
              "**Penyedia hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Anda tidak perlu menyertakan nama atau tanggal lahir dalam pesan Anda. Hasil gratis tidak pernah disimpan di server kami, jadi kami tidak dapat mencarinya lagi — nomor pesanan sudah cukup."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Kebiasaan",
    "title": "Karakter yang Tradisional Dihindari",
    "summary": "Ini tidak dilarang oleh hukum tetapi merupakan kebiasaan. Kami telah menulis tentang apa yang telah dihindari dan mengapa, serta bagaimana kami menanganinya.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Karakter yang Secara Hukum Diterima",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} karakter",
                "label": "Karakter yang Dihindari yang Dikompilasi"
              },
              {
                "value": "{avoidCommonlyUsed} karakter",
                "label": "Di antara mereka, karakter yang masih umum digunakan"
              }
            ]
          },
          {
            "p": "Ada karakter yang termasuk dalam daftar karakter untuk nama pribadi dan **secara hukum diterima**, namun dianggap tidak cocok untuk nama."
          },
          {
            "p": "Pemikiran yang mendasari adalah bahwa **\"makna yang berlebihan sebenarnya tidak diinginkan.\"** Ini termasuk karakter yang dianggap terlalu berharga (珍·寶), karakter yang dianggap memiliki kehadiran yang terlalu kuat (王·帝), dan yang dianggap terlalu megah untuk diemban oleh seseorang, seperti surga atau dewa. Ini mencerminkan rasa pengendalian diri yang lama, percaya bahwa sebuah nama dapat mengalahkan orang tersebut."
          },
          {
            "p": "**Namun, karakter ini tidak tidak dapat digunakan.** Ini bukan larangan hukum tetapi kebiasaan, dan kebiasaan bervariasi menurut wilayah, keluarga, dan generasi, dan dapat berubah seiring waktu."
          },
          {
            "p": "Faktanya, di antara {avoidTotal} karakter yang kami kompilasi, {avoidCommonlyUsed} masih umum digunakan dalam nama. Fakta bahwa mereka dikenal dihindari namun masih banyak digunakan menunjukkan bahwa kebiasaan ini tidak mutlak."
          }
        ]
      },
      {
        "title": "Apa Kategori yang Ada?",
        "blocks": [
          {
            "p": "Karakter yang saat ini dikompilasi dibagi menjadi tujuh kategori."
          },
          {
            "ul": [
              "**Harta dan Objek** — Karakter yang secara langsung merujuk pada kekayaan atau barang",
              "**Surga dan Alam** — Hal-hal seperti matahari, bulan, dan langit yang dianggap terlalu megah untuk diemban oleh seseorang",
              "**Raja dan Bangsawan** — Karakter yang menandakan status, seperti raja atau kaisar",
              "**Makhluk Ilahi** — Karakter yang merujuk pada alam suci, seperti dewa atau roh",
              "**Musim dan Lainnya** — Karakter yang terkait dengan waktu atau keadaan tertentu",
              "**Hewan** — Hewan yang dianggap memiliki energi kuat, seperti naga atau harimau",
              "**Kelebihan** — Karakter yang dianggap memiliki makna yang terlalu besar atau melimpah"
            ]
          }
        ]
      },
      {
        "title": "Anda Dapat Menambahkan atau Menghapus Karakter Sendiri",
        "blocks": [
          {
            "p": "Kami tidak menghapus karakter ini secara sembarangan. **Kami telah menyediakan dua opsi di layar input untuk penama memilih bagaimana menanganinya.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Opsi yang Tersedia di Layar Input",
        "blocks": [
          {
            "p": "**Kecualikan Karakter yang Dihindari dari Kandidat** — Jika diaktifkan, mereka sepenuhnya dikecualikan. Jika dinonaktifkan, mereka tetap ada dalam hasil dengan label \"Dihindari Secara Tradisional\" dan alasan yang dilampirkan."
          },
          {
            "p": "**Kecualikan Karakter yang Bahkan Umum Digunakan** — Ini mengecualikan karakter yang ada dalam daftar penghindaran tetapi sebenarnya banyak digunakan (圭·琳·玲·元·太·星·海, dll.). Jika diaktifkan, kandidat akan berkurang secara signifikan."
          },
          {
            "p": "Defaultnya adalah **tidak mengecualikan tetapi hanya menampilkan** mereka. Jika mereka dihapus secara diam-diam dari daftar, mungkin tampak bagi mereka yang ingin menggunakan karakter itu seolah-olah tidak ada."
          }
        ]
      },
      {
        "title": "Memastikan Opsi Tidak Hilang",
        "blocks": [
          {
            "p": "Jika tidak ada karakter yang dapat digunakan untuk suku kata itu, kami akan mengangkat pengecualian untuk suku kata itu dan menunjukkan kandidat. Kami percaya ini lebih baik daripada tidak memiliki opsi sama sekali."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Dasar Layanan",
    "title": "Apa Dasar Konversi Nama Global?",
    "summary": "Kami menyediakan kandidat dari lima perspektif, mempertahankan sistem penulisan masing-masing bahasa dan hanya menggunakan nama yang ada.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Kandidat Disediakan dari Lima Perspektif",
        "blocks": [
          {
            "p": "Tidak ada satu cara untuk menerjemahkan nama ke dalam bahasa lain. Tergantung pada apakah suara atau makna yang dipertahankan, memilih nama yang alami dalam konteks lokal atau memprioritaskan individualitas, jawabannya akan berbeda. Oleh karena itu, alih-alih menyajikan satu opsi, kami menyediakan **satu dari masing-masing lima perspektif yang berbeda**."
          },
          {
            "ul": [
              "**Opsi Pelestarian Suara** — Mempertahankan suara nama asli sebanyak mungkin",
              "**Opsi Terjemahan Makna** — Menerjemahkan makna yang terkandung dalam nama ke dalam nama bahasa tersebut",
              "**Opsi Kompromi Suara dan Makna** — Mengambil setengah dari masing-masing",
              "**Opsi Autentik Lokal** — Memilih nama yang sebenarnya umum digunakan dalam konteks budaya tersebut",
              "**Opsi Individualitas dan Branding** — Memprioritaskan nama yang mudah diingat dan khas"
            ]
          },
          {
            "p": "Lima opsi dijamin akan disediakan. Karena preferensi bervariasi dari orang ke orang, kami percaya lebih baik memberikan pilihan daripada menyajikan satu sebagai jawaban yang benar."
          }
        ]
      },
      {
        "title": "Setiap Bahasa Memiliki Aturan Sistem Penulisan yang Berbeda",
        "blocks": [
          {
            "p": "Saat menerjemahkan ke dalam bahasa yang tidak menggunakan huruf Romawi, harus ditulis dalam skrip bahasa tersebut. Untuk bahasa Jepang, itu akan menjadi kana dan kanji; untuk Rusia, Mongolia, dan Kazakh, itu akan menjadi Cyrillic; untuk bahasa Arab, itu akan menjadi skrip Arab; dan untuk bahasa Thai, Khmer, dan Hindi, itu akan menjadi skrip masing-masing. Jika Anda menulisnya dalam huruf Romawi dan menyebutnya \"nama Jepang,\" itu tidak dapat digunakan di negara itu."
          },
          {
            "p": "Oleh karena itu, kami memiliki aturan terpisah untuk setiap sistem penulisan bahasa, dan server memeriksa sekali lagi untuk memastikan hasilnya berada dalam sistem penulisan itu. Kesalahan seperti menghilangkan nama keluarga atau mencampurkan Hangul disaring di sini."
          }
        ]
      },
      {
        "title": "Kami Menggunakan Nama yang Sebenarnya Digunakan",
        "blocks": [
          {
            "p": "Untuk menghindari menciptakan nama yang terdengar masuk akal tetapi tidak ada di negara itu, kami mendasarkan opsi kami pada nama yang ada. Nama digunakan dalam dokumen dan pengenalan, jadi jika seseorang di lokal berpikir \"tidak ada nama seperti itu,\" itu tidak dapat digunakan."
          }
        ]
      },
      {
        "title": "Kami Memisahkan Pemilihan dan Deskripsi",
        "blocks": [
          {
            "p": "Kami menangani tugas menentukan lima kandidat secara terpisah dari tugas mendeskripsikan setiap kandidat secara rinci. Karena deskripsi memakan banyak waktu, kami memisahkan bagian itu untuk membuatnya secara bersamaan."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mengapa Ini Diubah?",
        "blocks": [
          {
            "p": "Awalnya, kami membuat lima perspektif secara terpisah. Itu lebih cepat, tetapi **jumlah kandidat bervariasi setiap kali.** Saat setiap orang memilih kandidat, ada tumpang tindih atau ketidaksesuaian, dan jika satu gagal, kandidat itu akan menghilang sepenuhnya, menghasilkan hanya dua atau tiga alih-alih lima."
          },
          {
            "p": "Sekarang, karena kami menentukan set kandidat dan distribusi perspektif sekaligus, **jumlahnya tetap.** Bahkan jika satu deskripsi gagal, kandidat tetap ada dan disajikan dengan informasi singkat. Kami percaya lebih baik memiliki jumlah yang sama secara konsisten, meskipun memerlukan sedikit lebih lama."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const ID_NOTICES = {
  "kindLabels": {
    "service": "Layanan",
    "product": "Produk",
    "policy": "Kebijakan",
    "support": "Dukungan"
  },
  "intro": "Perubahan pada syarat penggunaan Anda — harga, kebijakan — diposting di sini sebelum mereka berlaku. Perbaikan internal tidak dicantumkan: apa yang muncul di sini adalah apa yang perlu Anda ketahui.",
  "empty": {
    "title": "Belum ada pemberitahuan",
    "body": "Ketika sesuatu berubah, itu akan muncul di sini."
  },
  "effective": "Berlaku mulai {date}",
  "pager": {
    "label": "Halaman pemberitahuan",
    "newer": "← Lebih Baru",
    "older": "Lebih Lama →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Halaman Kontak dan Tentang sekarang dibuka",
      "body": [
        "Pertanyaan, pengembalian dana, permintaan privasi, dan laporan kesalahan sekarang memiliki satu tempat untuk pergi. Halaman kontak di footer mencantumkan email dan detail perusahaan kami.",
        "Apa yang menjadi dasar jawaban kami, dan apa yang dengan sengaja tidak kami lakukan, ditulis di halaman tentang."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Laporan PDF diterbitkan dalam bahasa Inggris untuk bahasa Arab dan Khmer",
      "body": [
        "Jika Anda menggunakan layanan dalam bahasa Arab atau Khmer, PDF yang Anda beli diproduksi dalam bahasa Inggris. Alat yang menyusun dokumen kami belum dapat mengatur paragraf dalam dua skrip tersebut.",
        "Layar tetap dalam bahasa Anda, dan nama Anda dicetak dalam skrip Anda sendiri di dalam dokumen.",
        "Catatan yang sama muncul sebelum pembayaran. Ketika alat mendukung skrip ini, kami akan menyebutkan di sini."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Pembayaran belum dibuka",
      "body": [
        "Membuat nama dan membaca hasilnya gratis hari ini, dan tidak perlu akun.",
        "Item berbayar belum dijual. Jumlah yang ditampilkan di halaman harga adalah yang akan berlaku setelah penjualan dibuka."
      ]
    }
  }
} satisfies NoticeCopy;
