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
            "p": "Naming-Link membantu Anda **memilih dan memahami nama Korea** — hanja di balik nama anak, nama Korea untuk digunakan di luar negeri, ejaan Hangul dari nama Anda sendiri, dan kenang-kenangan seperti segel atau laporan cetak."
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
            "p": "Saju dan angka lima elemen dihitung dari **kalendar lunisolar Korea**, dengan waktu lahir yang dikoreksi ke waktu matahari yang sebenarnya untuk tempat lahir. Bacaan adalah referensi tradisional, bukan prediksi."
          },
          {
            "p": "Penjelasan tertulis dihasilkan oleh AI. Untuk mencegahnya **mengarang hal-hal**, model hanya diberikan input Anda dan data referensi kami, dan diperintahkan untuk tetap berada di dalamnya. Panduan menjelaskan ini secara rinci."
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
            "p": "Layanan ini tersedia dalam 23 bahasa. PDF berbayar diterbitkan dalam bahasa Inggris untuk bahasa Arab dan Khmer — renderer PDF tidak mendukung skrip tersebut — dan kami menyebutkan hal ini di layar sebelum Anda membayar."
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
  "guide": {
    "eyebrow": "Cara kerja Naming-Link",
    "title": "Apa yang menjadi dasar nama Anda",
    "summary": "Bagaimana kami memilih nama keluarga Korea, apa yang kami periksa sebelum menyarankan nama tertentu, dan bagaimana kami menulis nama Anda dalam Hangul — dengan bagian yang sengaja kami tinggalkan.",
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
                "label": "suku kata Hangul yang dicakup"
              },
              {
                "value": "{effectiveDate}",
                "label": "tanggal efektif tabel"
              },
              {
                "value": "{avoidTotal}",
                "label": "karakter yang secara tradisional dihindari"
              }
            ]
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Bacaan",
    "title": "Bacaan tetap — satu pengucapan per karakter",
    "summary": "Tabel resmi tidak hanya mencantumkan karakter. Ia juga menetapkan bagaimana masing-masing dibaca saat digunakan dalam nama.",
    "backLabel": "Panduan",
    "sections": [
      {
        "title": "Bacaan tetap untuk setiap karakter",
        "blocks": [
          {
            "p": "Tabel nama-hanja tidak hanya menentukan karakter mana yang dapat digunakan. **Ia juga menetapkan bagaimana setiap karakter dibaca saat muncul dalam nama.** Bacaan tetap itulah yang digunakan untuk pendaftaran."
          },
          {
            "p": "Sebagian besar hanja memiliki beberapa bacaan yang mungkin. Namun, sebuah nama ditulis di dokumen dan diucapkan, sehingga membutuhkan tepat satu bacaan. Oleh karena itu, tabel menetapkan bacaan untuk setiap karakter yang digunakan dalam nama, dan bacaan lain tidak dapat didaftarkan."
          }
        ]
      },
      {
        "title": "Jadi suara datang pertama",
        "blocks": [
          {
            "p": "Inilah sebabnya Naming-Link menetapkan suara sebelum mencari hanja. Jika nama adalah \"지은\", makna hanya dapat dipilih di antara karakter yang ditugaskan bacaan **지** dan karakter yang ditugaskan bacaan **은**."
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
            "p": "Ini sering disalahpahami. **Tabel mengatur nama depan, bukan nama keluarga.** Nama keluarga mengikuti apa yang sudah ada di daftar keluarga, jadi beberapa orang memang menggunakan karakter yang tidak ada di tabel nama-hanja."
          },
          {
            "p": "Itulah sebabnya Naming-Link memperlakukan hanja nama keluarga secara berbeda. Kami hanya membantu Anda menemukan nama keluarga, dan kami meninggalkan kolom untuk memasukkan satu secara langsung, bagi orang yang karakternya berada di luar tabel. Nama keluarga dua suku kata seperti Namgung dan Seonwoo dimasukkan dengan cara yang sama."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Cara kerjanya",
    "title": "Cara kami mengeja nama Anda dalam Hangul",
    "summary": "Bagaimana kami memilih suara saat menulis nama asing dalam Hangul, dan mengapa kami tidak melampirkan hanja.",
    "backLabel": "Panduan",
    "sections": [
      {
        "title": "Kami membawa suara, bukan makna",
        "blocks": [
          {
            "p": "Layanan ini menulis **nama Anda** dalam Hangul. Ini tidak memberikan Anda nama Korea. Michael menjadi 마이클 — nama yang sama, ditulis agar orang Korea dapat membacanya dan mengucapkannya. Kami tidak menukarnya dengan nama Korea yang kebetulan berarti sesuatu yang mirip."
          },
          {
            "p": "Jika nama Korea adalah yang Anda inginkan, **itu adalah layanan yang berbeda**. Satu menjaga nama Anda dan hanya mengubah skripnya; yang lain mengusulkan nama baru."
          }
        ]
      },
      {
        "title": "Tidak ada yang terdengar seperti bahasa Korea",
        "blocks": [
          {
            "p": "Setiap bahasa memiliki suara yang tidak dimiliki oleh bahasa Korea — f, v, z, th, dan perbedaan vokal yang tidak dibuat oleh bahasa Korea. Untuk itu, kami menuliskan apa yang **diucapkan oleh penutur bahasa Korea sebenarnya** ketika mereka membaca nama Anda dengan keras, bukan mentranskripsikan fonetik asli simbol demi simbol. Tujuannya adalah ejaan yang akan digunakan, bukan yang paling teknis setia."
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
            "p": "Tidak ada jawaban yang benar tunggal. Ejaan yang paling dekat dengan suara asli, yang paling umum digunakan di Korea, dan yang paling mudah ditulis sering kali adalah tiga hal yang berbeda. Jadi kami menunjukkan semuanya bersama dan menjelaskan apa yang memisahkan mereka."
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
            "p": "Di Korea, nama keluarga datang terlebih dahulu, dan tidak seperti nama pemberian, itu tidak diciptakan secara bebas — Anda mewarisinya. Jadi kami hanya menyarankan nama keluarga yang benar-benar dimiliki oleh orang Korea. Kolam default kami adalah **20 nama keluarga yang paling umum**, yang bersama-sama mencakup sekitar 80% populasi."
          },
          {
            "p": "Jika nama keluarga Anda kebetulan sesuai dengan nama Korea yang nyata berdasarkan suara — Wang dengan 왕, Ye dengan 예 — kami menempatkan yang itu terlebih dahulu. Menjaga benang kembali ke nama asli Anda lebih berharga daripada nama keluarga yang dipilih secara acak."
          },
          {
            "p": "Anda dapat memilih nama keluarga sendiri atau membiarkan kami merekomendasikan satu. Bagaimanapun juga, itu akan menjadi **nama keluarga yang ada**."
          }
        ]
      },
      {
        "title": "Mudah diucapkan, mudah ditulis",
        "blocks": [
          {
            "p": "Ini adalah nama yang akan dipanggil orang-orang di Korea, jadi hal pertama yang kami periksa adalah apakah orang Korea dapat mendengarnya sekali dan menuliskannya. Nama yang perlu dieja setiap kali adalah beban yang Anda bawa, bukan kami."
          },
          {
            "p": "Makna juga penting. Nama pemberian Korea biasanya membawa makna, jadi kami memberi tahu Anda bagaimana nama itu dibaca dan mengapa kami memilihnya — bukan hanya nama itu sendiri."
          }
        ]
      },
      {
        "title": "Kami bertanya untuk apa nama itu",
        "blocks": [
          {
            "p": "Nama untuk dokumen universitas tidak sama dengan nama yang akan diteriakkan teman-teman di seberang ruangan, atau nama yang akan Anda gunakan secara online. Kami bertanya bagaimana Anda berencana menggunakannya dan mempertimbangkan itu."
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
            "p": "Tulis ke **{email}**. Kami akan membalas dalam dua hari kerja. Untuk apa pun tentang pesanan — pembayaran, pengembalian dana, file yang tidak Anda terima — harap sertakan **nomor pesanan atau email yang Anda gunakan untuk membayar**."
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
              "**Pembayaran dan pengembalian dana** — jika dokumen tidak pernah diproduksi, atau jumlah yang dikenakan berbeda dari pesanan Anda, kami mengembalikan sepenuhnya. Lihat [kebijakan pengembalian dana](/refund-policy).",
              "**Privasi** — permintaan untuk mengakses, memperbaiki, atau menghapus data Anda. Lihat [kebijakan privasi](/privacy).",
              "**Koreksi** — jika makna, bacaan, atau perhitungan hanja terlihat salah, beri tahu kami. Menyebutkan layar mana dan apa yang Anda masukkan sangat membantu.",
              "**Hal lainnya** — kemitraan dan pers juga pergi ke alamat yang sama."
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
    "summary": "Ini tidak dilarang oleh hukum tetapi merupakan kebiasaan. Kami telah menulis tentang apa yang dihindari dan mengapa, serta bagaimana kami menanganinya.",
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
            "p": "Pemikiran yang mendasari adalah bahwa **\"makna yang berlebihan sebenarnya tidak diinginkan.\"** Ini termasuk karakter yang dianggap terlalu berharga (珍 harta, 寶 permata), karakter yang dianggap memiliki kehadiran yang terlalu kuat (王 raja, 帝 kaisar), dan yang dianggap terlalu megah untuk diemban oleh seseorang, seperti surga atau dewa. Ini mencerminkan rasa pengekangan yang lama, percaya bahwa sebuah nama dapat mengalahkan orangnya."
          },
          {
            "p": "**Namun, karakter-karakter ini tidak tidak dapat digunakan.** Ini bukan larangan hukum tetapi kebiasaan, dan kebiasaan bervariasi menurut daerah, keluarga, dan generasi, serta dapat berubah seiring waktu."
          },
          {
            "p": "Faktanya, di antara {avoidTotal} karakter yang kami kompilasi, {avoidCommonlyUsed} masih umum digunakan dalam nama. Fakta bahwa mereka diketahui dihindari namun tetap banyak digunakan menunjukkan bahwa kebiasaan ini tidak mutlak."
          }
        ]
      },
      {
        "title": "Kategori Apa Saja yang Ada?",
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
        "title": "Anda Dapat Menambah atau Menghapus Karakter Sendiri",
        "blocks": [
          {
            "p": "Kami tidak secara sembarangan menghapus karakter-karakter ini. **Kami telah menyediakan dua opsi di layar input untuk penama memilih bagaimana menanganinya.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Opsi yang Tersedia di Layar Input",
        "blocks": [
          {
            "p": "**Kecualikan Karakter yang Dihindari dari Kandidat** — Jika diaktifkan, mereka sepenuhnya dikecualikan. Jika dinonaktifkan, mereka tetap ada dalam hasil dengan label \"Tradisional Dihindari\" dan alasan yang terlampir."
          },
          {
            "p": "**Kecualikan Bahkan Karakter yang Umum Digunakan** — Ini mengecualikan karakter yang ada dalam daftar penghindaran tetapi sebenarnya banyak digunakan (圭·琳·玲·元·太·星·海, dll.). Jika diaktifkan, kandidat akan berkurang secara signifikan."
          },
          {
            "p": "Secara default adalah **tidak mengecualikan tetapi hanya menampilkan** mereka. Jika mereka dihapus secara diam-diam dari daftar, mungkin akan tampak bagi mereka yang ingin menggunakan karakter tersebut seolah-olah tidak ada."
          }
        ]
      },
      {
        "title": "Memastikan Opsi Tidak Hilang",
        "blocks": [
          {
            "p": "Jika tidak ada karakter yang dapat digunakan tersisa untuk suku kata itu, kami akan mengangkat pengecualian untuk suku kata itu dan menunjukkan kandidat. Kami percaya ini lebih baik daripada tidak memiliki opsi sama sekali."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Dasar Layanan",
    "title": "Apa Dasar untuk Konversi Nama Global?",
    "summary": "Kami menyediakan kandidat dari lima perspektif, mempertahankan sistem penulisan masing-masing bahasa dan hanya menggunakan nama yang ada.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Kandidat Disediakan dari Lima Perspektif",
        "blocks": [
          {
            "p": "Tidak ada satu cara untuk menerjemahkan nama ke dalam bahasa lain. Tergantung pada apakah akan mempertahankan suara atau makna, memilih nama yang alami dalam konteks lokal atau memprioritaskan individualitas, jawabannya akan berbeda. Oleh karena itu, alih-alih menyajikan satu opsi, kami menyediakan **satu dari masing-masing lima perspektif yang berbeda**."
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
            "p": "Saat menerjemahkan ke dalam bahasa yang tidak menggunakan huruf Romawi, itu harus ditulis dalam skrip bahasa tersebut. Untuk bahasa Jepang, itu akan menjadi kana dan kanji; untuk bahasa Rusia, Mongolia, dan Kazakh, itu akan menjadi Cyrillic; untuk bahasa Arab, itu akan menjadi skrip Arab; dan untuk bahasa Thai, Khmer, dan Hindi, itu akan menjadi skrip masing-masing. Jika Anda menulisnya dalam huruf Romawi dan menyebutnya \"nama Jepang,\" itu tidak dapat digunakan di negara tersebut."
          },
          {
            "p": "Oleh karena itu, kami memiliki aturan terpisah untuk setiap sistem penulisan bahasa, dan server memeriksa sekali lagi untuk memastikan hasilnya berada dalam sistem penulisan tersebut. Kesalahan seperti menghilangkan nama keluarga atau mencampurkan Hangul disaring di sini."
          }
        ]
      },
      {
        "title": "Kami Menggunakan Nama yang Sebenarnya Digunakan",
        "blocks": [
          {
            "p": "Untuk menghindari menciptakan nama yang terdengar masuk akal tetapi tidak ada di negara tersebut, kami mendasarkan opsi kami pada nama yang ada. Nama digunakan dalam dokumen dan pengantar, jadi jika seseorang lokal berpikir \"tidak ada nama seperti itu,\" itu tidak dapat digunakan."
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
            "p": "Awalnya, kami membuat lima perspektif secara terpisah. Itu lebih cepat, tetapi **jumlah kandidat bervariasi setiap kali.** Ketika setiap orang memilih kandidat, ada tumpang tindih atau ketidaksesuaian, dan jika satu gagal, kandidat itu akan menghilang sepenuhnya, menghasilkan hanya dua atau tiga alih-alih lima."
          },
          {
            "p": "Sekarang, karena kami menentukan set kandidat dan distribusi perspektif sekaligus, **jumlahnya tetap.** Bahkan jika satu deskripsi gagal, kandidat tetap ada dan disajikan dengan informasi singkat. Kami percaya lebih baik memiliki jumlah yang sama secara konsisten, meskipun memerlukan sedikit lebih banyak waktu."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Dasar Layanan",
    "title": "Apa dasar untuk mencocokkan makna hanja?",
    "summary": "Pertama, suara ditetapkan, dan hanya hanja yang dapat didaftarkan dengan suara itu yang dikumpulkan, dan makna dilihat sebagai kombinasi daripada karakter tunggal.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Pertama, tetapkan suara",
        "blocks": [
          {
            "p": "Jika Anda telah memutuskan pada \"지은\", maka **지** dan **은** tidak berubah. Kami tidak mengubah suara nama untuk mencocokkan hanja. Nama adalah sesuatu yang dipanggil seumur hidup, dan kami percaya bahwa urutannya adalah suara ditetapkan terlebih dahulu, diikuti oleh hanja."
          },
          {
            "figure": "hanja-match-flow",
            "labels": {
              "soundStep": "① Tetapkan suara",
              "soundNote": "Kami tidak pernah mengubahnya untuk menyesuaikan dengan karakter",
              "tableStep": "② Saring berdasarkan tabel resmi",
              "tableBody": "hanya karakter yang ditetapkan dengan bacaan itu",
              "tableNote": "dari semua {total} karakter dalam tabel",
              "tableNoteNoCount": "hanya karakter yang ada dalam tabel",
              "combineStep": "③ Bacalah keduanya bersama",
              "combineNote": "makna adalah bagaimana pasangan itu dibaca, bukan masing-masing karakter sendiri"
            },
            "caption": "Ini adalah urutan di mana kandidat disaring. Ini bukan tentang memilih hanja terlebih dahulu dan mencocokkan suara, tetapi lebih kepada suara datang terlebih dahulu, dan hanya karakter yang ditunjuk untuk dibaca dengan suara itu menjadi kandidat."
          }
        ]
      },
      {
        "title": "Kumpulkan hanya hanja yang dapat didaftarkan dengan suara itu",
        "blocks": [
          {
            "p": "Tabel nama-hanja resmi memiliki bacaan yang ditetapkan untuk setiap karakter ketika digunakan dalam nama. Hanya karakter yang ditunjuk untuk dibaca sebagai **지** dan **은** yang menjadi kandidat. Tidak peduli seberapa baik maknanya, jika bacaan tidak cocok, itu tidak dapat menjadi hanja untuk nama itu."
          },
          {
            "p": "Rentang untuk memilih kandidat adalah {characterTotal} karakter dari tabel Mahkamah Agung. Karakter yang tidak ada dalam tabel ini tidak ditampilkan sama sekali — bahkan jika ditampilkan, mereka tidak dapat didaftarkan."
          },
          {
            "p": "Jumlah karakter dalam tabel yang diterbitkan oleh Mahkamah Agung sedikit lebih dari ini. Tabel juga mencakup **karakter tanpa kode karakter standar**, yang tidak dapat ditampilkan dengan benar di layar dan dokumen, sehingga karakter tersebut telah dikecualikan dari kandidat. Anda harus memeriksa dengan otoritas terkait apakah Anda dapat mendaftar dengan karakter tersebut."
          }
        ]
      },
      {
        "title": "Makna dilihat sebagai kombinasi, bukan karakter tunggal",
        "blocks": [
          {
            "p": "Makna setiap karakter individu yang baik dan makna yang dibaca ketika dua karakter digabungkan adalah berbeda. Nama dibaca sebagai kombinasi, jadi kami melihat kombinasi tersebut bersama-sama. Jika Anda memiliki makna spesifik yang ingin Anda sertakan atau hindari, itu diperhitungkan."
          },
          {
            "p": "Jika Anda menggunakan karakter generasi, karakter itu tetap, dan kombinasi dicari dari posisi yang tersisa. Nama keluarga (성) tidak dibatasi oleh tabel nama-hanja resmi, sehingga diperlakukan secara terpisah."
          }
        ]
      },
      {
        "title": "Kami menunjukkan kebiasaan penghindaran tanpa menghapusnya",
        "blocks": [
          {
            "p": "Jika karakter yang secara tradisional dianggap harus dihindari termasuk dalam kandidat, kami tidak menghapusnya tetapi menunjukkan alasannya bersamanya. Ini adalah masalah kebiasaan, bukan hukum, dan Anda dapat memilih untuk mengecualikannya sepenuhnya dari layar input. Untuk lebih jelasnya, lihat [Hanja yang Secara Tradisional Dihindari](/guide/avoid)."
          }
        ]
      },
      {
        "title": "Kami juga memberi tahu Anda alasan untuk pengecualian",
        "blocks": [
          {
            "p": "Kami menunjukkan mengapa karakter tertentu dikecualikan dari kandidat. Jika kami hanya menunjukkan apa yang dipilih, Anda tidak dapat mengetahui \"mengapa yang ini?\" Jika tidak ada karakter yang dapat digunakan tersisa untuk suku kata itu, kami akan mengangkat pengecualian untuk suku kata itu dan menunjukkan kandidat."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cara membaca hasil",
        "blocks": [
          {
            "p": "Kandidat adalah **perspektif, bukan peringkat**. Yang pertama tidak berarti itu adalah nama terbaik; mereka dipilih dari perspektif yang berbeda. Mereka yang memprioritaskan kombinasi makna, mereka yang memilih karakter yang tidak umum, dan mereka yang menekankan netralitas disajikan berdampingan. Jawabannya bervariasi tergantung pada perspektif mana yang Anda hargai."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Standar Kami",
    "title": "Apa yang Tidak Kami Gunakan",
    "summary": "Kami tidak menetapkan total keberuntungan atau skor numerik, juga tidak menggunakan jumlah goresan. Lima elemen hanya digunakan sebagai sumbu tambahan. Berikut adalah alasannya.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Alasan untuk tidak menetapkan total keberuntungan atau skor numerik",
        "blocks": [
          {
            "p": "Ada metode yang menetapkan total keberuntungan atau skor numerik untuk nama untuk menilainya. Naming-Link tidak menyediakan angka tersebut. Alasannya ada empat."
          },
          {
            "p": "**Pertama, tidak ada satu standar pun.** Metode untuk menghitung keberuntungan bervariasi menurut sekolah, dan nama yang sama dapat dinilai positif oleh satu standar dan negatif oleh yang lain. Kami tidak memiliki dasar untuk memutuskan mana yang benar. Tidak jujur untuk menyajikan satu sebagai jika itu adalah jawaban."
          },
          {
            "p": "**Kedua, perhitungan tersebut bergantung pada jumlah goresan.** Namun, data Mahkamah Agung sama sekali tidak mencakup jumlah goresan. Selain itu, jumlah goresan dapat bervariasi tergantung pada apakah mereka dihitung sebagai karakter biasa atau disederhanakan dan bagaimana radikal dihitung. Karena angka dasar tidak ditetapkan secara definitif, skor yang dibangun di atasnya tidak dapat definitif."
          },
          {
            "p": "**Ketiga, angka tampak lebih solid daripada kenyataan.** Ketika dikatakan \"87 poin\", itu terdengar seperti nilai yang diukur daripada interpretasi konvensional. Mereka yang menamai mungkin merasa tertekan oleh angka itu, mengesampingkan apa yang benar-benar penting (Apakah menyenangkan untuk dipanggil? Apakah maknanya sesuai? Apakah itu mengandung harapan yang diinginkan?)."
          },
          {
            "p": "**Keempat, tidak ada cara untuk memverifikasi.** Hubungan antara nama dan kehidupan seseorang tidak dapat diverifikasi. Mengubah sesuatu yang tidak dapat dikatakan benar atau salah menjadi skor menghasilkan angka yang tidak dapat dikonfirmasi, meskipun tidak dapat salah."
          },
          {
            "p": "Kami hanya menggunakan apa yang dapat **dibuktikan.** Tabel nama-hanja resmi Mahkamah Agung, bacaan yang ditetapkan untuk setiap karakter, dan makna yang terdaftar dalam tabel. Sebagai gantinya, kami memberikan alasan mengapa kandidat ini dipilih dan mengapa karakter tertentu dikecualikan, menunjukkan **alasan daripada skor**."
          }
        ]
      },
      {
        "title": "Kami tidak menggunakan jumlah goresan",
        "blocks": [
          {
            "p": "Data nama-hanja resmi yang disediakan oleh Mahkamah Agung tidak mencakup jumlah goresan. Di antara {characterTotal} karakter yang kami terima, **tidak ada satu karakter pun yang memiliki jumlah goresan.**"
          },
          {
            "p": "Untuk menggunakan jumlah goresan, kami perlu mendapatkan angka dari tempat lain, tetapi jika kami tidak dapat menjelaskan dari mana angka tersebut berasal dan kriteria apa yang digunakan untuk menghitungnya, itu berarti menilai nama berdasarkan angka yang tidak berdasar. Kami telah memutuskan untuk tidak mengevaluasi nama berdasarkan nilai yang tidak dapat dibuktikan."
          }
        ]
      },
      {
        "title": "Kami menggunakan lima elemen hanya sebagai referensi",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Lima elemen ditempatkan dalam lingkaran: generasi berjalan antara tetangga, kontrol melewati satu",
              "wood": "kayu",
              "fire": "api",
              "earth": "bumi",
              "metal": "logam",
              "water": "air",
              "saeng": "Generasi — masing-masing melahirkan tetangganya",
              "geuk": "Kontrol — masing-masing membatasi yang dilompati"
            },
            "caption": "Hubungan antara lima elemen. Bergerak di sepanjang lingkaran mewakili generasi timbal balik (相生), sementara melompati satu dan menekan ke bawah mewakili pembatasan timbal balik (相剋). Kami menggunakan hubungan ini hanya sebagai sumbu tambahan untuk membandingkan kandidat."
          },
          {
            "p": "Jika Anda telah memasukkan bulan kelahiran Anda, kami menggunakan referensi sederhana dari lima elemen berdasarkan bulan tersebut sebagai sumbu tambahan untuk membandingkan kandidat. Namun, ini bukan analisis saju yang tepat, dan **kami tidak mengklaim bahwa nama menentukan nasib atau karakter seseorang.**"
          },
          {
            "p": "Dalam pemilihan akhir, yang kami prioritaskan adalah suara, kombinasi makna, nilai yang ingin disampaikan keluarga, dan apakah itu dapat didaftarkan. Jika Anda belum memasukkan bulan kelahiran Anda, kami sepenuhnya mengecualikan referensi lima elemen dari analisis — kami tidak membuat asumsi sembarangan tentang informasi yang tidak diketahui."
          },
          {
            "p": "Jika Anda menginginkan analisis berbasis saju yang tepat, kami membahasnya dalam laporan terpisah yang lebih rinci. Alasan kami tidak memprioritaskan lima elemen dalam pencocokan hanja gratis adalah karena kami tidak ingin menyajikan penilaian berdasarkan lima elemen yang diperoleh dari tanggal dan waktu kelahiran yang tidak lengkap seolah-olah itu adalah definitif."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Produk Berbayar",
    "title": "Apa yang termasuk dalam produk berbayar?",
    "summary": "Kami menjelaskan seberapa banyak yang terlihat secara gratis dan fitur tambahan apa yang datang dengan pembayaran untuk setiap produk. Harga diambil dari pengaturan produk yang sebenarnya.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Apa yang terlihat secara gratis?",
        "blocks": [
          {
            "p": "Membuat nama dan melihat hasilnya adalah **gratis**. Tidak diperlukan pendaftaran keanggotaan. Anda dapat melihat makna yang cocok dari hanja, membuat nama Korea, konversi nama global, dan notasi pengucapan Hangul, bersama dengan hasil yang direkomendasikan dan justifikasinya di layar."
          },
          {
            "p": "Produk berbayar tidak **menjual kembali apa yang sudah ditampilkan di layar.** Mereka membuka lebih banyak kandidat, menambahkan lebih banyak penjelasan, atau membuat format yang dapat disimpan atau dikirim."
          }
        ]
      },
      {
        "title": "Pengungkapan penuh semua kandidat — {priceUnlock}",
        "blocks": [
          {
            "p": "Hasil yang direkomendasikan disusun untuk membuka kandidat satu per satu. Saat melihat iklan, satu terbuka pada satu waktu, sementara produk ini **membuka semua kandidat yang tersisa sekaligus**."
          },
          {
            "p": "Jika Anda tidak terburu-buru, Anda tidak perlu membeli. **Hasil dari pembukaan melalui iklan dan yang dari pembayaran adalah sama persis** — ini hanya masalah menunggu, dan membayar tidak menghasilkan kandidat yang lebih baik."
          }
        ]
      },
      {
        "title": "Detail Hanja — Tiga Tahap",
        "blocks": [
          {
            "p": "Ada tiga produk rinci dalam alur pemilihan hanja untuk dilampirkan pada nama Hangul."
          },
          {
            "ul": [
              "**Maksimal 5 kandidat hanja terperinci** — {priceFiveDetail}. Anda dapat memperluas penjelasan untuk hingga lima kandidat di layar. Tidak ada PDF.",
              "**Maksimal 10 kandidat hanja PDF terperinci yang diperluas** — {priceTenDetail}. Jumlah kandidat meningkat menjadi sepuluh, dan dokumen PDF disertakan.",
              "**Maksimal 10 kandidat hanja laporan komprehensif saju dan lima elemen** — {priceTenSaju}. Selain yang di atas, ini mencakup grafik saju yang diperoleh dari tanggal kelahiran dan kekuatan lima elemen, memeriksa mengapa hanja tertentu cocok dengan nama tersebut dari perspektif lima elemen."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja itu sendiri adalah informasi yang tersedia untuk umum",
        "blocks": [
          {
            "p": "Hanja yang dapat digunakan dan maknanya berasal dari tabel hanja nama resmi yang ditetapkan oleh Mahkamah Agung Korea, dan semuanya tersedia untuk umum dalam dokumen panduan layanan. Apa yang dijual produk berbayar bukanlah informasi hanja tetapi **tindakan memilih dan menjelaskannya sesuai dengan nama**."
          }
        ]
      },
      {
        "title": "PDF untuk Pengguna Global",
        "blocks": [
          {
            "p": "Dokumen yang tersedia untuk mengonversi nama asing menjadi nama Korea atau menulis nama dalam Hangul. Harga mengikuti jumlah yang ditampilkan di layar pembayaran."
          },
          {
            "ul": [
              "**Laporan Premium Nama Korea** — 3 halaman. Termasuk sampul kaligrafi, makna nama dan alasan pemilihannya, serta interpretasi saju dan lima elemen.",
              "**Seni Nama Hangul** — 2 halaman. Termasuk sampul kaligrafi dan panduan pengucapan. Ini berisi cara menulis nama dalam Hangul dan cara mengucapkannya."
            ]
          }
        ]
      },
      {
        "title": "Stempel Nama",
        "blocks": [
          {
            "p": "Kami mengukir nama yang dibuat di layar menjadi stempel fisik dan mengirimkannya kepada Anda. Harga bervariasi berdasarkan model — segel bulat {priceStampRound}, segel persegi {priceStampSquare}, segel kayu hitam {priceStampEbony}. Pengiriman internasional juga tersedia."
          },
          {
            "p": "**Dari sini, produk termasuk pengiriman.** Berbeda dengan item sebelumnya, produksi dan pengiriman memerlukan waktu, dan alamat penerimaan diperlukan. Informasi pengiriman hanya digunakan untuk pemrosesan pesanan dan penyimpanan hukum, dan setelah pemrosesan selesai, itu akan dihancurkan setelah periode yang ditentukan dalam kebijakan."
          }
        ]
      },
      {
        "title": "Hal-Hal yang Perlu Diketahui Sebelum Membeli",
        "blocks": [
          {
            "p": "**Produk digital disediakan segera setelah pembayaran.** Anda dapat membatalkan dan menerima pengembalian penuh kapan saja sebelum unduhan dimulai, tetapi setelah unduhan selesai, penarikan karena perubahan pikiran yang sederhana dibatasi (Pasal 17, Paragraf 2 dari Undang-Undang Perdagangan Elektronik). Ketentuan ini disetujui secara terpisah di layar pembayaran."
          },
          {
            "p": "**Keluhan tentang konten hasil bukanlah alasan untuk pengembalian dana.** Namun, jika dokumen tidak dibuat, file tidak dapat dibuka, atau jumlah pembayaran berbeda dari pesanan, itu akan diproses sebagai penerbitan ulang atau pengembalian penuh."
          },
          {
            "p": "Ketentuan rinci dijelaskan dalam [Kebijakan Pengembalian](/refund-policy) dan [Panduan Harga](/pricing). Teks ini berfungsi sebagai panduan tentang apa yang termasuk, dan ketentuan hukum diprioritaskan dalam kedua dokumen tersebut."
          }
        ]
      }
    ]
  },
  "guide/hanja-basics": {
    "eyebrow": "Sistem",
    "title": "Apa itu hanja nama resmi?",
    "summary": "Hanja yang dapat digunakan untuk nama anak telah ditetapkan oleh Mahkamah Agung dalam sebuah tabel. Ini merangkum apa itu tabel dan mengapa itu telah ditetapkan.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Apa itu hanja nama resmi?",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal} karakter",
                "label": "Hanja nama resmi"
              },
              {
                "value": "{syllableCount} suku kata",
                "label": "Suku kata Hangul yang termasuk"
              },
              {
                "value": "{effectiveDate}",
                "label": "Tanggal referensi tabel"
              }
            ]
          },
          {
            "p": "Anda tidak dapat menggunakan sembarang karakter untuk nama anak. **Hanja yang dapat digunakan untuk pendaftaran kelahiran telah ditetapkan oleh Mahkamah Agung dalam sebuah tabel, dan hanya karakter dalam tabel tersebut yang dapat didaftarkan sebagai hanja untuk nama.** Ini disebut hanja nama resmi."
          }
        ]
      },
      {
        "title": "Mengapa itu telah ditetapkan?",
        "blocks": [
          {
            "p": "Ada puluhan ribu hanja. Di antara mereka, beberapa memiliki makna yang tidak menyenangkan, beberapa tidak lagi digunakan dan tidak memiliki bacaan yang diketahui, dan beberapa tidak dapat ditampilkan di komputer sama sekali. Jika karakter semacam itu termasuk dalam nama, orang yang akhirnya menanggung beban adalah orang yang akan menggunakan nama itu seumur hidup. Nama dapat rusak atau dibaca berbeda di berbagai tempat seperti pendaftaran penduduk, paspor, bank, dan sekolah, yang mengharuskan individu untuk menjelaskan nama mereka sendiri."
          },
          {
            "p": "Oleh karena itu, sebuah metode telah dipilih untuk mendefinisikan rentang hanja yang dapat digunakan dalam nama. Alih-alih menjadi regulasi yang membatasi, ini lebih merupakan mekanisme untuk memastikan bahwa nama dapat digunakan tanpa masalah sepanjang hidup seseorang."
          }
        ]
      },
      {
        "title": "Apa dasar untuk definisi tersebut?",
        "blocks": [
          {
            "p": "Mahkamah Agung menetapkan tabel nama-hanja resmi, yang direvisi sesuai kebutuhan, dan karakter ditambahkan."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bahan yang digunakan dalam layar ini",
        "blocks": [
          {
            "p": "data nama-hanja resmi {publisher} · Per {effectiveDate}"
          },
          {
            "p": "{characterTotal} karakter mencakup {syllableCount} suku kata Hangul. Nilai hash dari file asli juga disimpan, jadi jika tabel berubah, dapat diperiksa kapan dan apa yang telah berubah."
          }
        ]
      },
      {
        "title": "Jumlah karakter yang diumumkan oleh Mahkamah Agung berbeda dari yang kami tampilkan",
        "blocks": [
          {
            "p": "**Jumlah nama-hanja resmi yang diumumkan oleh Mahkamah Agung adalah {announcedTotal} karakter, sementara yang kami sajikan sebagai kandidat adalah {characterTotal} karakter.** Tidak ada alasan untuk menyembunyikan perbedaan ini, jadi kami menyatakannya dengan jelas."
          },
          {
            "p": "Jika Anda memeriksa data permintaan Mahkamah Agung, itu berisi {listedTotal} karakter. Di antara mereka, **{excludedNoStandardCode} karakter** adalah **karakter yang tidak memiliki tempat dalam kode karakter umum global (Unicode).** Sistem Mahkamah Agung memperlakukan karakter tersebut dengan nomor yang hanya berfungsi dalam sistemnya sendiri, dan mereka ditampilkan sebagai **gambar** daripada karakter di layar."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Menambahkan lebih banyak font tidak akan menyelesaikan masalah",
        "blocks": [
          {
            "p": "Agar karakter dapat muncul di layar, ia harus memiliki **nomor yang disepakati oleh dunia**, dan font berisi gambar yang sesuai dengan nomor tersebut. Karakter yang tidak memiliki nomor tidak dapat dimasukkan dalam font mana pun. Tidak peduli berapa banyak font yang kami tambahkan, karakter ini akan muncul sebagai kotak kosong."
          }
        ]
      },
      {
        "title": "Oleh karena itu, mereka telah dihapus dari kandidat",
        "blocks": [
          {
            "p": "**Mengisi daftar dengan karakter yang tidak dapat ditampilkan tidaklah membantu.** Sebagian besar makna karakter ini juga kosong dalam data kami, yang tidak sejalan dengan metode layanan dalam memilih nama berdasarkan makna."
          },
          {
            "p": "**Alasan yang lebih penting terletak pada orang yang akan menggunakan nama tersebut.** Sebuah nama adalah nilai yang akan dimasukkan di berbagai tempat sepanjang hidup seseorang. Karakter tanpa kode karakter mungkin tidak dapat dimasukkan atau dicetak dalam sistem untuk bank, sekolah, rumah sakit, atau paspor, bahkan setelah menyelesaikan birth registration. Oleh karena itu, kami tidak dapat merekomendasikan karakter semacam itu."
          },
          {
            "p": "Namun, **kami tidak menentukan apakah karakter tersebut dapat digunakan atau tidak.** Karena mereka adalah karakter dalam tabel Mahkamah Agung, pendaftaran itu sendiri mungkin saja memungkinkan. Jika Anda benar-benar ingin menggunakan karakter tersebut, silakan periksa langsung di sistem pendaftaran hubungan keluarga elektronik Mahkamah Agung, dan **tanyakan kepada otoritas terkait tentang kegunaan sebenarnya.**"
          }
        ]
      },
      {
        "title": "Jika Anda ingin menggunakan hanja yang tidak ada dalam tabel",
        "blocks": [
          {
            "p": "Anda tidak dapat menggunakannya. Untuk lebih tepatnya, karakter tersebut tidak akan terdaftar sebagai hanja untuk nama, dan nama hanya akan dicatat dalam Hangul. Jika Anda ingin menggunakan hanja bersamaan, Anda harus memilih dari tabel."
          },
          {
            "p": "Oleh karena itu, kami tidak menyajikan karakter yang tidak ada dalam tabel sebagai kandidat. Semua hanja yang terlihat di layar adalah karakter yang benar-benar dapat digunakan untuk pendaftaran kelahiran. Daftar lengkap tersedia di [Daftar Lengkap Nama-Hanja Resmi](/guide/hanja)."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Daftar",
    "title": "Daftar Lengkap Nama Hanja Resmi",
    "summary": "Kami telah mengorganisir hanja yang dapat digunakan untuk pendaftaran kelahiran berdasarkan konsonan awal. Anda dapat melihat bacaan yang ditetapkan dan makna untuk setiap karakter saat digunakan dalam nama.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Pencarian berdasarkan Konsonan Awal",
        "slot": "chosung",
        "blocks": [
          {
            "p": "Ini mencakup semua {characterTotal} karakter dari tabel nama-hanja resmi Mahkamah Agung. Setiap karakter mencakup **bacaan saat digunakan dalam nama** dan maknanya. Karakter yang tidak termasuk dalam tabel tidak dapat terdaftar sebagai hanja nama, jadi Anda harus memilih dari karakter yang terdaftar di sini."
          },
          {
            "p": "Dua angka di tombol di bawah ini mewakili **jumlah karakter dengan konsonan awal tersebut** dan **jumlah suku kata yang dicakup**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jika karakter yang Anda cari tidak ada dalam daftar",
        "blocks": [
          {
            "p": "Jumlah karakter yang diumumkan oleh Mahkamah Agung adalah {announcedTotal}, tetapi daftar ini berisi {characterTotal} karakter. **Perbedaan {excludedNoStandardCode} karakter adalah karakter yang tidak dapat ditampilkan dalam font mana pun karena kurangnya tempat dalam kode karakter universal.** Sistem Mahkamah Agung menunjukkan karakter tersebut sebagai gambar."
          },
          {
            "p": "Kami telah merinci alasan untuk ini dan mengapa kami tidak merekomendasikan karakter tersebut di [Apa itu Hanja Nama Resmi?](/guide/hanja-basics). Anda harus memeriksa dengan otoritas terkait untuk kegunaan sebenarnya dari karakter tersebut."
          }
        ]
      },
      {
        "title": "Konsonan Awal dengan Sedikit Karakter",
        "slot": "tiny",
        "blocks": [
          {
            "p": "Konsonan awal di bawah ini memiliki sangat sedikit hanja nama resmi, jadi kami menampilkannya di sini tanpa halaman terpisah."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cara Membaca Daftar Ini",
        "blocks": [
          {
            "p": "Untuk **伽 · 가 · 절**, saat menggunakan \"伽\" dalam nama, itu dibaca sebagai **가** dan berarti \"kuil\". Bahkan untuk hanja yang sama, bacaan saat digunakan dalam nama ditetapkan oleh tabel, dan tidak dapat digunakan dengan cara lain."
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
  "intro": "Perubahan pada syarat penggunaan Anda — harga, kebijakan — diposting di sini sebelum berlaku. Perbaikan internal tidak dicantumkan: apa yang muncul di sini adalah yang perlu Anda ketahui.",
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
      "title": "Halaman Kontak dan Tentang sekarang terbuka",
      "body": [
        "Pertanyaan, pengembalian dana, permintaan privasi, dan laporan kesalahan sekarang memiliki satu tempat untuk pergi. Halaman kontak di footer mencantumkan email dan detail perusahaan kami.",
        "Apa yang menjadi dasar jawaban kami, dan apa yang dengan sengaja tidak kami lakukan, ditulis di halaman tentang."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Laporan PDF diterbitkan dalam bahasa Inggris untuk Arab dan Khmer",
      "body": [
        "Jika Anda menggunakan layanan dalam bahasa Arab atau Khmer, PDF yang Anda beli diproduksi dalam bahasa Inggris. Alat yang menyusun dokumen kami belum dapat mengatur paragraf dalam dua skrip tersebut.",
        "Layar tetap dalam bahasa Anda, dan nama Anda dicetak dalam skrip Anda sendiri di dalam dokumen.",
        "Catatan yang sama muncul sebelum pembayaran. Ketika alat mendukung skrip ini, kami akan menyebutkannya di sini."
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
