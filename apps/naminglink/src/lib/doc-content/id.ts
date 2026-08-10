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
            "p": "Naming-Link membantu Anda **memilih dan memahami nama Korea** — hanja di balik nama anak, nama Korea untuk digunakan di luar negeri, ejaan Hangul dari nama Anda sendiri, dan kenang-kenangan seperti cap atau laporan cetak."
          },
          {
            "p": "Melihat hasil Anda adalah **gratis dan tidak memerlukan akun.** Item berbayar tidak pernah menjual kembali apa yang sudah ditampilkan di layar: mereka membuka lebih banyak kandidat, menambahkan analisis tertulis, atau mengubah hasil menjadi sesuatu yang dapat Anda simpan."
          }
        ]
      },
      {
        "title": "Untuk siapa setiap layanan",
        "blocks": [
          {
            "p": "Ada dua jenis layanan di sini: satu untuk orang yang **sudah memiliki nama Korea**, dan satu untuk orang yang **membutuhkannya**. Mereka memerlukan hal yang berbeda dari Anda, jadi mereka ditawarkan dalam bahasa yang berbeda."
          },
          {
            "ul": [
              "**Ditawarkan dalam bahasa Anda** — menulis nama Anda sendiri dalam Hangul, dan membangun nama Korea. Ini untuk orang yang tidak memiliki nama Korea, jadi mereka mengikuti bahasa yang Anda gunakan.",
              "**Ditawarkan hanya dalam bahasa Korea** — menemukan nama-hanja untuk anak, dan mengubah nama Korea menjadi satu untuk digunakan di luar negeri. Keduanya memerlukan **nama Hangul yang sudah ada** untuk bekerja, jadi layar dan panduan mereka tetap dalam bahasa Korea."
            ]
          }
        ]
      },
      {
        "title": "Apa yang menjadi dasar jawaban kami",
        "blocks": [
          {
            "p": "Hanja berasal dari **tabel nama-hanja resmi Mahkamah Agung Korea.** Setiap karakter memiliki pembacaan tetap untuk digunakan dalam nama, dan karakter di luar tabel tidak dapat didaftarkan. Kami tidak menambahkan daftar itu atau memilih favorit."
          },
          {
            "p": "Saju dan angka lima elemen dihitung dari **kalendar lunisolar Korea**, dengan waktu lahir yang dikoreksi ke waktu matahari yang sebenarnya untuk tempat lahir. Pembacaan adalah referensi tradisional, bukan prediksi."
          },
          {
            "p": "Penjelasan tertulis dihasilkan oleh AI. Untuk mencegahnya **mengada-ada**, model hanya diberikan input Anda dan data referensi kami sendiri, dan diperintahkan untuk tetap di dalamnya. Panduan menjelaskan ini secara rinci."
          }
        ]
      },
      {
        "title": "Apa yang tidak kami lakukan",
        "blocks": [
          {
            "ul": [
              "**Kami tidak meramal nasib.** Tidak ada yang menjanjikan keberuntungan, kekayaan, atau perlindungan.",
              "**Kami tidak menyimpan nama Anda.** Hasil gratis tidak pernah ditulis ke server kami, dan dokumen berbayar disampaikan tanpa menyimpan salinan file.",
              "**Membayar tidak membeli jawaban yang lebih baik.** Membuka dengan iklan dan membuka dengan pembayaran memberikan konten yang sama persis."
            ]
          }
        ]
      },
      {
        "title": "Di mana data dan terjemahan kami berdiri",
        "blocks": [
          {
            "p": "**Kami lebih suka mengatakannya dengan jelas.** Memberitahu Anda apa yang diperiksa seseorang dan apa yang tidak diperiksa oleh siapa pun lebih berguna daripada mengklaim semuanya telah ditinjau."
          },
          {
            "ul": [
              "**Data nama-hanja** — tabel nama-hanja {publisher}, per {effectiveDate}. Kami menyimpan hash dari file sumber, jadi jika tabel berubah kami dapat memberitahu apa yang berubah.",
              "**Disusun oleh** Platforest. Karakter, pembacaan, dan makna dibawa dari tabel apa adanya; kami tidak menambah atau menghapus.",
              "**Terjemahan** — ditulis pertama dalam bahasa Korea, kemudian bahasa Inggris, lalu bahasa lainnya. **Ini adalah terjemahan mesin, diperiksa secara otomatis** — untuk kalimat yang hilang, terminologi yang konsisten, dan nilai yang dimasukkan tetap utuh. Mereka belum ditinjau oleh penutur asli.",
              "**Penjelasan tertulis** dihasilkan oleh AI, dibatasi pada input Anda dan data referensi kami sendiri sehingga tidak mengada-ada fakta."
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
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Panduan di bawah ini mencakup layanan yang ditawarkan dalam bahasa Anda. Naming-Link juga memiliki dua layanan untuk orang yang **sudah memiliki nama Korea** — menemukan nama-hanja untuk anak, dan mengubah nama Korea menjadi satu untuk digunakan di luar negeri. Keduanya memerlukan nama Hangul yang sudah ada, jadi baik layanan maupun panduan mereka ada dalam bahasa Korea."
          },
          {
            "p": "[Tentang](/about) menjelaskan layanan mana yang untuk siapa."
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
            "p": "Layanan ini menulis **nama Anda** dalam Hangul. Ini tidak memberikan Anda nama Korea. Michael menjadi 마이클 — nama yang sama, ditulis agar orang Korea dapat membacanya dan mengucapkannya. Kami tidak menukarnya dengan nama Korea yang kebetulan memiliki arti yang mirip."
          },
          {
            "p": "Jika nama Korea yang Anda inginkan, **itu adalah layanan yang berbeda.** Satu mempertahankan nama Anda dan hanya mengubah skrip; yang lain mengusulkan nama baru."
          }
        ]
      },
      {
        "title": "Suara yang tidak ada dalam bahasa Korea",
        "blocks": [
          {
            "p": "Setiap bahasa memiliki suara yang tidak ada dalam bahasa Korea — f, v, z, th, dan perbedaan vokal yang tidak dibuat oleh bahasa Korea. Untuk itu, kami menuliskan apa yang **diucapkan oleh penutur bahasa Korea** ketika mereka membaca nama Anda dengan keras, daripada mentranskripsikan fonetik asli simbol demi simbol. Tujuannya adalah ejaan yang akan digunakan, bukan yang paling teknis setia."
          },
          {
            "p": "Ejaan yang sama dapat berbeda tergantung dari asal nama, jadi kami meminta bahasa dan negara Anda dan bekerja dari pengucapan itu."
          }
        ]
      },
      {
        "title": "Beberapa ejaan, berdampingan",
        "blocks": [
          {
            "p": "Tidak ada jawaban yang benar tunggal. Ejaan yang paling mendekati suara asli, yang paling umum digunakan di Korea, dan yang paling mudah ditulis sering kali adalah tiga hal yang berbeda. Jadi kami menunjukkan semuanya bersama-sama dan menjelaskan apa yang memisahkan mereka."
          },
          {
            "p": "Jika tidak ada yang terasa benar, Anda dapat menambahkan petunjuk tentang suara yang Anda inginkan dan menjalankannya lagi — misalnya, bahwa suku kata tertentu harus ditulis dengan cara yang berbeda."
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
      },
      {
        "title": "Ini berjalan berlawanan arah dari romanisasi paspor",
        "blocks": [
          {
            "p": "Kedua hal ini mudah untuk membingungkan, jadi inilah perbedaannya: **mereka berjalan dalam arah yang berlawanan.**"
          },
          {
            "ul": [
              "**Romanisasi** mengambil nama Hangul orang Korea dan menuliskannya dalam alfabet Latin. Ini tetap ketika paspor diterbitkan, dan setelah itu tiket, visa, dan rekening bank semua mengikuti ejaan itu. 김민준 menjadi Kim Minjun.",
              "**Transliterasi Hangul** — apa yang dilakukan layanan ini — berjalan ke arah yang lain. Ini mengambil nama yang ditulis dalam alfabet Latin dan menuliskan bagaimana suaranya dalam Hangul. Daniel menjadi 대니얼."
            ]
          },
          {
            "p": "Jadi apa yang Anda dapatkan di sini **tidak mengubah ejaan di paspor Anda.** Romanisasi itu sudah tetap; ini adalah nama yang ditulis kembali dalam Hangul. Keduanya tidak selalu dapat dikonversi kembali satu sama lain dengan tepat — menulis suara yang tidak dimiliki oleh bahasa Korea kehilangan sedikit informasi dalam prosesnya."
          }
        ]
      },
      {
        "title": "Di mana Anda akan menggunakan ejaan ini",
        "blocks": [
          {
            "p": "Ejaan Hangul biasanya diperlukan di tempat-tempat seperti ini."
          },
          {
            "ul": [
              "**Memperkenalkan diri** — menunjukkan nama Anda dalam Hangul, atau mengatakannya dalam bahasa Korea",
              "**Bidang nama Hangul pada formulir** — pendaftaran dan aplikasi yang meminta nama Anda dalam Hangul. Perhatikan bahwa **institusi memutuskan apa yang tercantum dalam dokumen resmi** — apa yang Anda dapatkan di sini tidak menggantikan itu",
              "**Stempel nama atau kenang-kenangan** — ejaan untuk diukir"
            ]
          },
          {
            "p": "**Adalah hal yang normal jika lebih dari satu ejaan dapat dipertahankan.** Ketika sebuah nama dapat ditulis dengan beberapa cara dalam Hangul, kami menunjukkan mereka berdampingan dan menyerahkan pilihan kepada Anda."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Cara kerjanya",
    "title": "Bagaimana kami membangun nama Korea",
    "summary": "Kami memilih dari nama keluarga yang ada, mempertimbangkan seberapa mudah nama tersebut diucapkan dan ditulis, dan menanyakan untuk apa nama tersebut.",
    "backLabel": "Panduan",
    "sections": [
      {
        "title": "Kami mulai dengan nama keluarga",
        "blocks": [
          {
            "p": "Di Korea, nama keluarga datang pertama, dan tidak seperti nama pemberian, itu tidak diciptakan secara bebas — Anda mewarisinya. Jadi kami hanya menyarankan nama keluarga yang benar-benar dimiliki oleh orang Korea. Kolam default kami adalah **20 nama keluarga yang paling umum**, yang bersama-sama mencakup sekitar 80% populasi."
          },
          {
            "p": "Jika nama keluarga Anda kebetulan cocok dengan nama Korea yang nyata berdasarkan suara — Wang dengan 왕, Ye dengan 예 — kami menempatkan yang itu di depan. Menjaga benang kembali ke nama asli Anda lebih berharga daripada nama keluarga yang dipilih secara acak."
          },
          {
            "p": "Anda dapat memilih nama keluarga sendiri atau membiarkan kami merekomendasikan satu. Bagaimanapun juga, itu akan menjadi **nama keluarga yang ada**."
          }
        ]
      },
      {
        "title": "Ada dua puluh enam nama keluarga untuk dipilih",
        "blocks": [
          {
            "p": "Kami sengaja menjaga daftar ini sempit. **Nama keluarga Korea memang terkonsentrasi** — Kim, Lee, dan Park saja menyumbang sekitar 45% populasi, dan dua puluh teratas untuk sekitar 80%. Menambahkan nama keluarga yang jarang akan memperluas menu, tetapi juga akan menghasilkan nama yang tidak didengar oleh orang Korea sebagai nama."
          },
          {
            "ul": [
              "**Dua puluh yang paling umum** (sekitar 80% populasi) — 김 Kim · 이 Lee · 박 Park · 최 Choi · 정 Jung · 강 Kang · 조 Cho · 윤 Yoon · 장 Jang · 임 Lim · 한 Han · 오 Oh · 서 Seo · 신 Shin · 권 Kwon · 황 Hwang · 안 Ahn · 송 Song · 전 Jeon · 홍 Hong",
              "**Nama keluarga nyata ditambahkan untuk menjaga benang suara** — 왕 Wang · 진 Jin · 백 Baek · 마 Ma · 나 Na · 유 Yoo"
            ]
          },
          {
            "p": "Kelompok kedua ada agar **nama keluarga Anda sendiri dapat diteruskan berdasarkan suara**. Wang, Jin, Baek, Ma, Na, dan Yoo adalah nama keluarga yang sudah dimiliki oleh orang Korea, jadi menyebut nama Anda menjaga tautan dengan nama yang Anda mulai. Semua dua puluh enam adalah nama keluarga yang benar-benar digunakan — tidak ada yang merupakan ciptaan kami."
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
            "p": "Makna juga penting. Nama pemberian Korea biasanya membawa makna, jadi kami memberi tahu Anda bagaimana nama tersebut dibaca dan mengapa kami memilihnya — bukan hanya nama itu sendiri."
          }
        ]
      },
      {
        "title": "Kami bertanya untuk apa nama itu",
        "blocks": [
          {
            "p": "Nama untuk dokumen universitas tidak sama dengan nama yang akan diteriakkan teman-teman di seberang ruangan, atau nama panggilan yang akan Anda gunakan secara online. Kami bertanya bagaimana Anda berencana menggunakannya dan mempertimbangkan itu."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ini bukan transliterasi",
        "blocks": [
          {
            "p": "Di sini kami mengusulkan **nama Korea baru**. Jika Anda ingin nama yang ada ditulis dalam Hangul — Michael sebagai 마이클 — lihat [panduan ejaan Hangul](/guide/how-hangul-transliteration)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Pemberitahuan",
    "title": "Pemberitahuan",
    "summary": "Di mana kami mengumumkan perubahan yang memengaruhi cara Anda menggunakan layanan.",
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
            "p": "Tulis ke **{email}**. Kami membalas dalam dua hari kerja. Untuk apa pun tentang pesanan — pembayaran, pengembalian dana, file yang tidak Anda terima — harap sertakan **nomor pesanan atau email yang Anda gunakan untuk membayar**."
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
              "**Pembayaran dan pengembalian** — jika dokumen tidak pernah diproduksi, atau jumlah yang dikenakan berbeda dari pesanan Anda, kami mengembalikan sepenuhnya. Lihat [kebijakan pengembalian](/refund-policy).",
              "**Privasi** — permintaan untuk mengakses, memperbaiki, atau menghapus data Anda. Lihat [kebijakan privasi](/privacy).",
              "**Koreksi** — jika makna, bacaan, atau perhitungan hanja terlihat salah, beri tahu kami. Menyebutkan layar mana dan apa yang Anda masukkan sangat membantu.",
              "**Hal lain** — kemitraan dan pers juga pergi ke alamat yang sama."
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
  "guide/what-we-dont-use": {
    "eyebrow": "Standar Kami",
    "title": "Apa yang Tidak Kami Gunakan",
    "summary": "Kami tidak menetapkan total keberuntungan atau skor numerik, juga tidak menggunakan hitungan goresan. Lima elemen hanya digunakan sebagai sumbu tambahan. Berikut adalah alasannya.",
    "backLabel": "Panduan Penggunaan",
    "sections": [
      {
        "title": "Alasan tidak menetapkan total keberuntungan atau skor numerik",
        "blocks": [
          {
            "p": "Ada metode yang menetapkan total keberuntungan atau skor numerik pada nama untuk menilainya. Naming-Link tidak menyediakan angka-angka tersebut. Alasannya ada empat."
          },
          {
            "p": "**Pertama, tidak ada satu standar pun.** Metode untuk menghitung keberuntungan bervariasi menurut sekolah, dan nama yang sama dapat dinilai positif oleh satu standar dan negatif oleh yang lain. Kami tidak memiliki dasar untuk memutuskan mana yang benar. Tidak jujur untuk menyajikan satu sebagai jika itu adalah jawaban."
          },
          {
            "p": "**Kedua, perhitungan tersebut bergantung pada hitungan goresan.** Namun, data Mahkamah Agung sama sekali tidak mencakup hitungan goresan. Selain itu, hitungan goresan dapat bervariasi tergantung pada apakah mereka dihitung sebagai karakter biasa atau disederhanakan dan bagaimana radikal dihitung. Karena angka dasar tidak ditetapkan secara definitif, skor yang dibangun di atasnya tidak dapat definitif."
          },
          {
            "p": "**Ketiga, angka tampak lebih solid daripada kenyataan.** Ketika dikatakan \"87 poin\", itu terdengar seperti nilai terukur daripada interpretasi konvensional. Nama-nama tersebut mungkin merasa tertekan oleh angka itu, mengesampingkan apa yang benar-benar penting (Apakah menyenangkan untuk dipanggil? Apakah maknanya sesuai? Apakah itu mengandung harapan yang diinginkan?)."
          },
          {
            "p": "**Keempat, tidak ada cara untuk memverifikasi.** Hubungan antara nama dan kehidupan seseorang tidak dapat diverifikasi. Mengubah sesuatu yang tidak dapat dikatakan benar atau salah menjadi skor menghasilkan angka yang tidak dapat dikonfirmasi, meskipun tidak dapat salah."
          },
          {
            "p": "Kami hanya menggunakan apa yang dapat **dibuktikan.** Tabel hanja nama resmi Mahkamah Agung, bacaan yang ditetapkan untuk setiap karakter, dan makna yang terdaftar dalam tabel. Sebagai gantinya, kami memberikan alasan mengapa kandidat ini dipilih dan mengapa karakter tertentu dikecualikan, menunjukkan **alasan daripada skor**."
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
            "p": "Untuk menggunakan hitungan goresan, kami perlu mendapatkan angka dari tempat lain, tetapi jika kami tidak dapat menjelaskan dari mana angka-angka tersebut berasal dan kriteria apa yang digunakan untuk menghitungnya, itu berarti menilai nama berdasarkan angka yang tidak berdasar. Kami telah memutuskan untuk tidak mengevaluasi nama berdasarkan nilai yang tidak dapat dibuktikan."
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
              "geuk": "Kontrol — masing-masing membatasi yang dilewati"
            },
            "caption": "Hubungan antara lima elemen. Bergerak di sepanjang lingkaran mewakili generasi timbal balik (相生), sementara melewati satu dan menekan mewakili pengekangan timbal balik (相剋). Kami menggunakan hubungan ini hanya sebagai sumbu tambahan untuk membandingkan kandidat."
          },
          {
            "p": "Jika Anda telah memasukkan bulan kelahiran Anda, kami menggunakan referensi sederhana dari lima elemen berdasarkan bulan tersebut sebagai sumbu tambahan untuk membandingkan kandidat. Namun, ini bukan analisis saju yang tepat, dan **kami tidak mengklaim bahwa nama menentukan nasib atau karakter seseorang.**"
          },
          {
            "p": "Dalam pemilihan akhir, yang kami prioritaskan adalah suara, kombinasi makna, nilai yang ingin disampaikan keluarga, dan apakah itu dapat benar-benar didaftarkan. Jika Anda belum memasukkan bulan kelahiran Anda, kami sepenuhnya mengecualikan referensi lima elemen dari analisis — kami tidak membuat asumsi sembarangan tentang informasi yang tidak diketahui."
          },
          {
            "p": "Jika Anda menginginkan analisis berbasis saju yang tepat, kami mencakup itu dalam laporan terperinci terpisah. Alasan kami tidak memprioritaskan lima elemen dalam pencocokan hanja gratis adalah karena kami tidak ingin menyajikan penilaian berdasarkan lima elemen yang dihasilkan dari tanggal dan waktu kelahiran yang tidak lengkap seolah-olah itu definitif."
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
            "p": "Jika Anda tidak terburu-buru, Anda tidak perlu membeli. **Hasil dari membuka melalui iklan dan hasil dari pembayaran adalah sama persis** — ini hanya masalah menunggu, dan membayar tidak menghasilkan kandidat yang lebih baik."
          }
        ]
      },
      {
        "title": "Detail Hanja — Tiga Tahap",
        "blocks": [
          {
            "p": "Ada tiga produk detail dalam alur pemilihan hanja untuk dilampirkan pada nama dalam Hangul."
          },
          {
            "ul": [
              "**Maksimum 5 kandidat hanja yang terperinci** — {priceFiveDetail}. Anda dapat memperluas penjelasan untuk hingga lima kandidat di layar. Tidak ada PDF.",
              "**Maksimum 10 kandidat hanja dengan PDF terperinci** — {priceTenDetail}. Jumlah kandidat meningkat menjadi sepuluh, dan dokumen PDF disertakan.",
              "**Maksimum 10 kandidat hanja dengan laporan komprehensif saju dan lima elemen** — {priceTenSaju}. Selain yang di atas, ini mencakup grafik saju yang diambil dari tanggal lahir dan kekuatan lima elemen, memeriksa mengapa hanja tertentu cocok dengan nama tersebut dari perspektif lima elemen."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja itu sendiri adalah informasi yang tersedia untuk umum",
        "blocks": [
          {
            "p": "Hanja yang dapat digunakan dan maknanya berasal dari tabel nama-hanja resmi yang ditetapkan oleh Mahkamah Agung Korea, dan semuanya tersedia untuk umum dalam dokumen panduan layanan. Apa yang dijual oleh produk berbayar bukanlah informasi hanja tetapi **tindakan memilih dan menjelaskannya sesuai dengan nama**."
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
              "**Seni Nama dalam Hangul** — 2 halaman. Termasuk sampul kaligrafi dan panduan pengucapan. Ini berisi cara menulis nama dalam Hangul dan cara mengucapkannya."
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
            "p": "**Dari sini, produk termasuk pengiriman.** Berbeda dengan item sebelumnya, produksi dan pengiriman memerlukan waktu, dan alamat penerima diperlukan. Informasi pengiriman hanya digunakan untuk pemrosesan pesanan dan penyimpanan hukum, dan setelah pemrosesan selesai, akan dihancurkan setelah periode yang ditentukan dalam kebijakan."
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
            "p": "Ketentuan detail dijelaskan dalam [Kebijakan Pengembalian](/refund-policy) dan [Panduan Harga](/pricing). Teks ini berfungsi sebagai panduan tentang apa yang termasuk, dan ketentuan hukum diprioritaskan dalam kedua dokumen tersebut."
          }
        ]
      }
    ]
  }
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
      "title": "Halaman Kontak dan Tentang sekarang sudah dibuka",
      "body": [
        "Pertanyaan, pengembalian dana, permintaan privasi, dan laporan kesalahan sekarang memiliki satu tempat untuk dituju. Halaman kontak di footer mencantumkan email dan detail perusahaan kami.",
        "Apa yang menjadi dasar jawaban kami, dan apa yang dengan sengaja tidak kami lakukan, ditulis di halaman tentang."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Laporan PDF diterbitkan dalam bahasa Inggris untuk Arab dan Khmer",
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
