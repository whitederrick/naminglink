import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

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
            "p": "Naming-Link membantu Anda **memilih dan memahami nama Korea** — hanja di balik nama seorang anak, nama Korea untuk digunakan di luar negeri, ejaan Hangul dari nama Anda sendiri, dan kenang-kenangan seperti segel atau laporan cetak."
          },
          {
            "p": "Melihat hasil Anda adalah **gratis dan tidak memerlukan akun.** Item berbayar tidak pernah menjual kembali apa yang sudah ditampilkan di layar: mereka membuka lebih banyak kandidat, menambahkan analisis tertulis, atau mengubah hasil menjadi sesuatu yang bisa Anda simpan."
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
            "p": "Saju dan angka lima elemen dihitung dari **kalender lunisolar Korea**, dengan waktu lahir yang dikoreksi ke waktu matahari yang sebenarnya untuk tempat lahir. Bacaan adalah referensi tradisional, bukan prediksi."
          },
          {
            "p": "Penjelasan tertulis dihasilkan oleh AI. Untuk mencegahnya **mengarang hal-hal**, model hanya diberikan input Anda dan data referensi kami sendiri, dan diperintahkan untuk tetap di dalamnya. Panduan menjelaskan ini secara rinci."
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
              "**Membayar tidak membeli jawaban yang lebih baik.** Membuka dengan iklan dan membuka dengan pembayaran memberikan konten yang persis sama."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Layanan tersedia dalam 23 bahasa. PDF berbayar diterbitkan dalam bahasa Inggris untuk bahasa Arab dan Khmer — renderer PDF tidak mendukung skrip tersebut — dan kami menyatakannya di layar sebelum Anda membayar."
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
    "summary": "Bagaimana kami memilih nama keluarga Korea, apa yang kami periksa sebelum menyarankan nama tertentu, dan bagaimana kami menulis nama Anda dalam Hangul — dengan bagian yang kami sengaja tinggalkan.",
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
            "p": "Layanan ini menulis **nama Anda** dalam Hangul. Ini tidak memberikan Anda nama Korea. Michael menjadi 마이클 — nama yang sama, ditulis agar orang Korea dapat membacanya dan mengucapkannya. Kami tidak menukarnya dengan nama Korea yang kebetulan berarti sesuatu yang mirip."
          },
          {
            "p": "Jika nama Korea adalah yang Anda inginkan, **itu adalah layanan yang berbeda**. Satu layanan mempertahankan nama Anda dan hanya mengubah skripnya; yang lainnya mengusulkan nama baru."
          }
        ]
      },
      {
        "title": "Suara Korea tidak memiliki",
        "blocks": [
          {
            "p": "Setiap bahasa memiliki suara yang tidak dimiliki oleh bahasa Korea — f, v, z, th, dan perbedaan vokal yang tidak dibuat oleh bahasa Korea. Untuk suara tersebut, kami menuliskan apa yang **diucapkan oleh penutur bahasa Korea sebenarnya** ketika mereka membaca nama Anda dengan keras, bukan mentranskripsikan fonetik asli simbol demi simbol. Tujuannya adalah ejaan yang akan digunakan, bukan yang paling teknis setia."
          },
          {
            "p": "Ejaan yang sama dapat berbeda tergantung dari mana asal nama, jadi kami meminta bahasa dan negara Anda dan bekerja dari pengucapan itu."
          }
        ]
      },
      {
        "title": "Beberapa ejaan, berdampingan",
        "blocks": [
          {
            "p": "Tidak ada jawaban yang benar tunggal. Ejaan yang paling dekat dengan suara asli, yang paling umum digunakan di Korea, dan yang paling mudah ditulis sering kali adalah tiga hal yang berbeda. Jadi kami menunjukkan semuanya bersama-sama dan menjelaskan apa yang memisahkan mereka."
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
    "summary": "Kami memilih dari nama keluarga yang ada, mempertimbangkan seberapa mudah nama tersebut diucapkan dan ditulis, dan bertanya untuk apa nama tersebut.",
    "backLabel": "Panduan",
    "sections": [
      {
        "title": "Kami mulai dengan nama keluarga",
        "blocks": [
          {
            "p": "Di Korea, nama keluarga datang pertama, dan tidak seperti nama depan, itu tidak diciptakan secara bebas — Anda mewarisinya. Jadi kami hanya menyarankan nama keluarga yang benar-benar dimiliki oleh orang Korea. Kolam default kami adalah **20 nama keluarga yang paling umum**, yang bersama-sama mencakup sekitar 80% populasi."
          },
          {
            "p": "Jika nama keluarga Anda kebetulan sesuai dengan nama Korea yang nyata berdasarkan suara — Wang dengan 왕, Ye dengan 예 — kami menempatkan yang itu di depan. Menjaga benang kembali ke nama asli Anda lebih berharga daripada nama keluarga yang dipilih secara acak."
          },
          {
            "p": "Anda dapat memilih nama keluarga sendiri atau membiarkan kami merekomendasikannya. Dalam hal apapun, itu akan menjadi **nama keluarga yang ada**."
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
            "p": "Makna juga penting. Nama depan Korea biasanya membawa makna, jadi kami memberi tahu Anda bagaimana nama tersebut dibaca dan mengapa kami memilihnya — bukan hanya nama itu sendiri."
          }
        ]
      },
      {
        "title": "Kami bertanya untuk apa nama itu",
        "blocks": [
          {
            "p": "Nama untuk dokumen universitas tidak sama dengan nama yang akan diteriakkan teman-teman di seberang ruangan, atau nama yang akan Anda gunakan secara online. Kami bertanya bagaimana Anda berencana menggunakannya dan mempertimbangkan hal itu."
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
        "title": "Kirim email kepada kami",
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
              "**Pejabat privasi** — {privacyOfficer}",
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
  "guide/what-we-dont-use": {
    "eyebrow": "Standar Kami",
    "title": "Apa yang Tidak Kami Gunakan",
    "summary": "Kami tidak menetapkan total keberuntungan atau skor numerik, juga tidak menggunakan hitungan goresan. Lima elemen hanya digunakan sebagai sumbu tambahan. Berikut adalah alasannya.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Alasan untuk tidak menetapkan total keberuntungan atau skor numerik",
        "blocks": [
          {
            "p": "Ada metode yang menetapkan total keberuntungan atau skor numerik untuk nama untuk menilainya. Naming-Link tidak menyediakan angka-angka tersebut. Alasannya ada empat."
          },
          {
            "p": "**Pertama, tidak ada satu standar pun.** Metode untuk menghitung keberuntungan bervariasi menurut sekolah, dan nama yang sama dapat dinilai positif oleh satu standar dan negatif oleh yang lain. Kami tidak memiliki dasar untuk memutuskan mana yang benar. Tidak jujur untuk menyajikan satu sebagai jika itu adalah jawaban."
          },
          {
            "p": "**Kedua, perhitungan tersebut bergantung pada hitungan goresan.** Namun, data Mahkamah Agung sama sekali tidak mencakup hitungan goresan. Selain itu, hitungan goresan dapat bervariasi tergantung pada apakah mereka dihitung sebagai karakter biasa atau karakter sederhana dan bagaimana radikal dihitung. Karena angka dasar tidak ditetapkan secara definitif, skor yang dibangun di atasnya tidak dapat definitif."
          },
          {
            "p": "**Ketiga, angka tampak lebih solid daripada kenyataan.** Ketika dikatakan \"87 poin\", itu terbaca seperti nilai terukur daripada interpretasi konvensional. Mereka yang memberi nama mungkin merasa tertekan oleh angka itu, mendorong apa yang benar-benar penting (Apakah menyenangkan untuk dipanggil? Apakah maknanya cocok? Apakah itu mengandung harapan yang diinginkan?)."
          },
          {
            "p": "**Keempat, tidak ada cara untuk memverifikasi.** Hubungan antara nama dan kehidupan seseorang tidak dapat diverifikasi. Mengubah sesuatu yang tidak dapat dikatakan benar atau salah menjadi skor menghasilkan angka yang tidak dapat dikonfirmasi, meskipun tidak dapat salah."
          },
          {
            "p": "Kami hanya menggunakan apa yang dapat **dibuktikan.** Tabel hanja nama resmi Mahkamah Agung, pembacaan yang ditugaskan untuk setiap karakter, dan makna yang terdaftar dalam tabel. Sebagai gantinya, kami memberikan alasan mengapa kandidat ini dipilih dan mengapa karakter tertentu dikecualikan, menunjukkan **alasan daripada skor**."
          }
        ]
      },
      {
        "title": "Kami tidak menggunakan hitungan goresan",
        "blocks": [
          {
            "p": "Data hanja nama resmi yang disediakan oleh Mahkamah Agung tidak mencakup hitungan goresan. Di antara {characterTotal} karakter yang kami terima, **tidak ada satu karakter pun yang memiliki hitungan goresan.**"
          },
          {
            "p": "Untuk menggunakan hitungan goresan, kami perlu mendapatkan angka dari tempat lain, tetapi jika kami tidak dapat menjelaskan dari mana angka tersebut berasal dan kriteria apa yang digunakan untuk menghitungnya, itu berarti menilai nama berdasarkan angka yang tidak berdasar. Kami telah memutuskan untuk tidak mengevaluasi nama berdasarkan nilai yang tidak dapat dibuktikan."
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
            "p": "Jika Anda menginginkan analisis berbasis saju yang tepat, kami membahasnya dalam laporan terpisah yang lebih rinci. Alasan kami tidak memprioritaskan lima elemen dalam pencocokan hanja gratis adalah karena kami tidak ingin menyajikan penilaian berdasarkan lima elemen yang berasal dari tanggal dan waktu kelahiran yang tidak lengkap seolah-olah itu adalah definitif."
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
            "p": "Produk berbayar tidak **menjual kembali apa yang sudah ditampilkan di layar.** Mereka membuka lebih banyak kandidat, menambahkan lebih banyak penjelasan, atau membuat format yang dapat disimpan atau ditransmisikan."
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
            "p": "Jika Anda tidak terburu-buru, Anda tidak perlu membeli. **Hasil dari membuka melalui iklan dan yang dari pembayaran adalah sama sekali tidak berbeda** — ini hanya masalah menunggu, dan membayar tidak menghasilkan kandidat yang lebih baik."
          }
        ]
      },
      {
        "title": "Detail Hanja — Tiga Tahap",
        "blocks": [
          {
            "p": "Ada tiga produk terperinci dalam alur pemilihan hanja untuk dilampirkan pada nama Hangul."
          },
          {
            "ul": [
              "**Maksimal 5 kandidat hanja terperinci** — {priceFiveDetail}. Anda dapat memperluas penjelasan untuk hingga lima kandidat di layar. Tidak ada PDF.",
              "**Maksimal 10 kandidat hanja PDF terperinci yang diperluas** — {priceTenDetail}. Jumlah kandidat meningkat menjadi sepuluh, dan dokumen PDF disertakan.",
              "**Maksimal 10 kandidat hanja laporan komprehensif saju dan lima elemen** — {priceTenSaju}. Selain yang di atas, ini mencakup grafik saju yang berasal dari tanggal lahir dan kekuatan lima elemen, memeriksa mengapa hanja tertentu cocok dengan nama tersebut dari perspektif lima elemen."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja itu sendiri adalah informasi yang tersedia untuk umum",
        "blocks": [
          {
            "p": "Hanja yang dapat digunakan dan maknanya berasal dari tabel hanja nama resmi yang ditetapkan oleh Mahkamah Agung Korea, dan semuanya tersedia untuk umum dalam dokumen panduan layanan. Apa yang dijual oleh produk berbayar bukanlah informasi hanja tetapi **tindakan memilih dan menjelaskannya sesuai dengan nama**."
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
            "p": "Kami mengukir nama yang dibuat di layar menjadi stempel fisik dan mengirimkannya kepada Anda. Harga bervariasi berdasarkan model — stempel bulat {priceStampRound}, stempel persegi {priceStampSquare}, stempel kayu ebony {priceStampEbony}. Pengiriman internasional juga tersedia."
          },
          {
            "p": "**Dari sini, produk termasuk pengiriman.** Tidak seperti item sebelumnya, produksi dan pengiriman memerlukan waktu, dan alamat penerimaan diperlukan. Informasi pengiriman hanya digunakan untuk pemrosesan pesanan dan penyimpanan hukum, dan setelah pemrosesan selesai, itu akan dihancurkan setelah periode yang ditentukan dalam kebijakan."
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
} satisfies Record<GlobalDocKey, DocPage>;

export const ID_NOTICES = {
  "kindLabels": {
    "service": "Layanan",
    "product": "Produk",
    "policy": "Kebijakan",
    "support": "Dukungan"
  },
  "intro": "Perubahan pada syarat penggunaan Anda — harga, kebijakan — diposting di sini sebelum berlaku. Perbaikan internal tidak dicantumkan: apa yang muncul di sini adalah apa yang perlu Anda ketahui.",
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
      "title": "Laporan PDF diterbitkan dalam bahasa Inggris untuk bahasa Arab dan Khmer",
      "body": [
        "Jika Anda menggunakan layanan dalam bahasa Arab atau Khmer, PDF yang Anda beli diproduksi dalam bahasa Inggris. Alat yang menyusun dokumen kami belum dapat mengatur paragraf dalam dua skrip tersebut.",
        "Layar tetap dalam bahasa Anda, dan nama Anda dicetak dalam skrip Anda sendiri di dalam dokumen.",
        "Catatan yang sama muncul sebelum pembayaran. Ketika alat mendukung skrip ini, kami akan menginformasikannya di sini."
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
