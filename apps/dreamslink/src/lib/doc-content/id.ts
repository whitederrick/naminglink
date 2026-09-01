import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Bahasa Indonesia — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const ID_DOCS = {
  "guide": {
    "eyebrow": "Dasar Perhitungan",
    "title": "Apa dasar perhitungan?",
    "summary": "Kami mengungkapkan semua aturan yang digunakan oleh Dreams-Link. Anda dapat memeriksa simbol-simbol yang ditemukan, apa yang tertulis dalam kamus — dari mana interpretasi yang ditampilkan di layar berasal.",
    "backLabel": "Kembali ke Beranda",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Semua angka yang tertulis di sini **dibaca langsung dari kamus simbol dan aturan pencocokan.** Karena kami tidak mentranskripsikan teks secara manual, jika kamus diperluas atau aturan diubah, angka-angka dalam dokumen ini juga akan berubah."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Dasar Layanan",
    "title": "Cara menemukan simbol dalam cerita mimpi.",
    "summary": "Ini menjelaskan bagaimana simbol dipilih dari kalimat yang ditulis secara bebas dan bagaimana kami menyaring simbol yang hanya kebetulan berada di dalam kata yang lebih panjang — 별 (\"bintang\") di dalam 특별할 (\"tidak ada yang istimewa\").",
    "backLabel": "Dasar Interpretasi",
    "sections": [
      {
        "title": "Kami menemukan simbol dalam teks yang Anda berikan.",
        "blocks": [
          {
            "p": "Ketika Anda menulis cerita mimpi Anda secara bebas, kami mencari simbol dalam teks tersebut dari kamus. Anda tidak perlu memilih item atau menulis dalam format tertentu. Cukup tulis seperti biasa, seperti 'Tadi malam, seekor python besar melilit tubuh saya.'"
          },
          {
            "p": "Saat mencari, kami tidak hanya melihat nama simbol tetapi juga **{aliasTotal} nama alternatif**. Ini adalah kata-kata yang merujuk pada hal yang sama, seperti 구렁이 (gureongi) dan 뱀 (baem), 떨어지다 (tteoreojida) dan 빠지다 (ppajida). Variasi dengan akhiran, seperti 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda), juga termasuk."
          }
        ]
      },
      {
        "title": "Karakter yang secara kebetulan muncul dalam sebuah kata tidak dihitung",
        "blocks": [
          {
            "p": "Ini adalah aspek yang paling menantang dalam bahasa Korea. Di antara simbol-simbol, ada **{singleCharSymbolTotal} simbol satu karakter** seperti **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), yang sering muncul dalam kata-kata lain."
          },
          {
            "ul": [
              "별 (\"bintang\") yang tersembunyi di dalam 특**별**할 (\"tidak ada yang istimewa\")",
              "게 (\"kepiting\") yang tersembunyi di dalam 누군가에**게** (\"oleh seseorang\")",
              "말 (\"kuda\") di dalam **말**했다 (\"mengatakan\"), dan 배 (\"perahu, pir\") di dalam **배**가 고팠다 (\"Kami lapar\")"
            ]
          },
          {
            "p": "Menghitung ini sebagai simbol mengarah pada interpretasi yang tidak relevan. Oleh karena itu, kami memeriksa karakter di sekitarnya — jika **ada karakter Korea di depan**, kami menganggapnya sebagai bagian dari kata yang lebih panjang dan tidak menghitungnya, dan kami melihat **apakah yang mengikuti adalah partikel atau akhiran kata kerja**, membiarkan 「소가」 (soga) lolos sementara menyaring 「소리」 (sori)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Inilah cara kerjanya",
        "blocks": [
          {
            "p": "Sebelum menerapkan aturan ini, saat menguji dengan dua belas kalimat nyata, **semua dua belas** mengandung simbol yang tidak relevan. Satu kalimat yang tidak memiliki konten signifikan bahkan ditandai sebagai a conception dream."
          },
          {
            "p": "Sekarang, satu yang tersisa — 배 (bae) dalam 「배가 고팠다」 (bae ga gopatda). Karena terdengar sama tetapi memiliki arti yang berbeda, itu tidak dapat disaring hanya dengan karakter di sekitarnya."
          },
          {
            "p": "Tidak menemukan sesuatu adalah hal yang jujur. Namun, menemukan sesuatu yang tidak relevan berarti menetapkan tradisi di balik kata itu yang tidak pernah ada."
          }
        ]
      },
      {
        "title": "Karakter yang sama selalu menghasilkan hasil yang sama",
        "blocks": [
          {
            "p": "Tidak ada tempat untuk kebetulan dalam aturan pencocokan. Karena kamus tetap dan aturan ditetapkan, jika Anda memasukkan kalimat yang sama lagi, **simbol yang sama akan muncul dalam urutan yang sama**. Interpretasi yang Anda lihat hari ini tidak akan berbeda dari yang Anda lihat besok."
          },
          {
            "p": "Kualitas ini juga merupakan janji yang telah kami buat untuk diri kami sendiri. Interpretasi yang berubah setiap kali menghibur tetapi kurang dasar. Ini terhubung dengan cerita [mengapa kami tidak menggunakan model](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informasi Pribadi",
    "title": "Metode Tidak Menyimpan Mimpi yang Anda Tulis",
    "summary": "Kami menjelaskan apa artinya secara teknis bahwa cerita mimpi tidak dicatat di mana pun, dan apa yang terkandung dalam tautan hasil.",
    "backLabel": "Dasar Interpretasi",
    "sections": [
      {
        "title": "Tidak Memerlukan Keanggotaan",
        "blocks": [
          {
            "p": "Dreams-Link tidak membuat akun. Kami tidak mengumpulkan nama, email, atau nomor telepon. Satu-satunya hal yang kami kumpulkan adalah mimpi yang Anda tulis, bagaimana perasaan Anda saat bangun, dan apakah Anda bermimpi mimpi yang sama berulang kali, dan itu tidak tersisa setelah interpretasi selesai."
          },
          {
            "p": "Cerita mimpi adalah nilai yang paling pribadi dari layanan ini. Inilah sebabnya aturan lebih ketat dari yang diperlukan — kami bahkan tidak membuat tabel untuk mencatat apa yang Anda kirim."
          }
        ]
      },
      {
        "title": "Apa yang terkandung dalam tautan hasil",
        "blocks": [
          {
            "p": "Ketika perhitungan selesai, alamatnya akan terlihat seperti ini."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "Apa yang mengikuti **#** adalah nilai input. Bagian ini disebut **fragmen**, yang merupakan **bagian yang tidak dikirimkan oleh browser ke server**. Ini adalah perilaku web standar dan bukan aturan yang kami buat — itu awalnya dirancang untuk menunjukkan lokasi dalam dokumen, jadi server tidak perlu melihatnya."
          },
          {
            "p": "Di sini, properti ini sangat penting — mimpi yang Anda berikan **tidak tersisa dalam catatan akses.**"
          },
          {
            "p": "Dengan kata lain, ketika Anda membuka tautan hasil, browser membaca nilai itu untuk meminta perhitungan, dan server kami menerima nilai untuk perhitungan, mengembalikan jawaban, dan kemudian melupakannya."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Harap berhati-hati saat mengirim tautan kepada orang lain",
        "blocks": [
          {
            "p": "Fakta bahwa itu tidak disimpan di server tidak berarti bahwa tautan itu aman. Tautan hasil berisi mimpi yang Anda berikan, jadi orang yang menerima tautan itu dapat membaca konten tersebut."
          }
        ]
      },
      {
        "title": "Mengapa perhitungan dilakukan di server tetapi tidak disimpan?",
        "blocks": [
          {
            "p": "Perhitungan itu sendiri dilakukan di server. Menemukan simbol memerlukan seluruh kamus, dan kamus itu terlalu besar untuk dikirim ke browser. Menyimpan kamus di server juga berarti bahwa ketika kesalahan diperbaiki, itu tercermin untuk semua orang sekaligus. Namun, **setelah memproses permintaan, nilai itu tidak digunakan di mana pun.** Tidak ada kode untuk menyisipkannya ke dalam database."
          },
          {
            "p": "Catatan minimal yang diperlukan untuk operasi disimpan — sebuah penghitung untuk mencegah orang yang sama mengirim terlalu banyak permintaan dalam waktu singkat. Ini tidak termasuk konten mimpi, dan IP akses juga tidak disimpan. Hanya satu nilai, yang di-hash dengan tanggal, yang dihitung, dan nilai itu berubah ketika hari berubah."
          }
        ]
      },
      {
        "title": "Apa yang tidak dapat dilakukan karena tidak disimpan",
        "blocks": [
          {
            "p": "Sejujurnya, ada hal-hal yang telah kami lepaskan karena kami tidak menyimpan data."
          },
          {
            "ul": [
              "**Tidak ada buku harian mimpi.** Anda tidak dapat mengambil interpretasi dari minggu lalu, dan Anda harus memiliki tautan untuk melihatnya lagi. Ini dilakukan dengan sengaja — untuk membuat buku harian, tulisan yang paling pribadi harus disimpan secara terus-menerus.",
              "**Kami menghitung nilai yang sama lagi setiap kali.** Tidak ada cache. Sebagai gantinya, kamus tetap, dan aturan pencocokan bersifat deterministik, jadi teks yang sama akan selalu menghasilkan simbol yang sama — aturan menggantikan apa yang dijamin oleh cache.",
              "**Menyegarkan akan membawa kembali gerbang iklan.** Ini karena tidak ada tempat untuk meninggalkan catatan tampilan."
            ]
          }
        ]
      },
      {
        "title": "Dalam hal pembelian",
        "blocks": [
          {
            "p": "Jika Anda membeli laporan, catatan transaksi akan disimpan pada saat itu. Pembayaran memiliki periode retensi yang ditentukan secara hukum, dan tanpa riwayat pesanan, pengembalian dana tidak dapat diproses. Namun, meskipun demikian, **teks mimpi yang digunakan untuk pembacaan tidak dilampirkan pada pesanan** — itu diterima lagi dan ditulis pada saat itu saat membuat dokumen setelah konfirmasi pembayaran."
          },
          {
            "p": "Untuk detail lebih lanjut, silakan merujuk ke [kebijakan privasi](/privacy)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Pemberitahuan",
    "title": "Pengumuman",
    "summary": "Ini adalah tempat untuk memberitahukan Anda tentang perubahan yang mungkin memengaruhi penggunaan Anda.",
    "backLabel": "Kembali ke Beranda",
    "sections": []
  },
  "contact": {
    "eyebrow": "Kontak",
    "title": "Pertanyaan",
    "summary": "Ini adalah saluran untuk pertanyaan tentang penggunaan, pengembalian dana, permintaan informasi pribadi, dan laporan kesalahan, bersama dengan informasi bisnis.",
    "backLabel": "Kembali ke Beranda",
    "sections": [
      {
        "title": "Kontak melalui Email",
        "blocks": [
          {
            "p": "Silakan kirim pertanyaan ke **{email}**. Kami akan merespons dalam waktu 2 hari kerja. Untuk pertanyaan tentang pembayaran dan pengembalian dana, lebih cepat jika Anda menyertakan **nomor pesanan atau email pembayaran** Anda."
          },
          {
            "p": "Pertanyaan melalui telepon diterima di {customerCenter}."
          }
        ]
      },
      {
        "title": "Apa yang dapat dikirim ke saluran ini?",
        "blocks": [
          {
            "ul": [
              "**Pembayaran dan Pengembalian Dana** — Jika dokumen belum dibuat atau jumlah pembayaran berbeda dari pesanan, pengembalian dana penuh akan diberikan. Syaratnya ada di [kebijakan pengembalian](/refund-policy).",
              "**Informasi Pribadi** — Kami menerima permintaan untuk akses, koreksi, dan penghapusan. Kebijakan pemrosesannya ada di [kebijakan privasi](/privacy).",
              "**Laporkan Kesalahan Interpretasi** — Jika simbol ditemukan salah atau interpretasinya tampak aneh, silakan beri tahu kami. Jika Anda menyertakan kapan Anda menulis cerita mimpi itu, kami dapat mencarinya lagi dengan teks yang sama."
            ]
          }
        ]
      },
      {
        "title": "Informasi Bisnis",
        "blocks": [
          {
            "ul": [
              "**Nama Bisnis** — {companyName}",
              "**Perwakilan** — {representative}",
              "**Nomor Registrasi Bisnis** — {businessNumber}",
              "**Nomor Registrasi Bisnis Penjualan Melalui Pos** — {mailOrderNumber}",
              "**Alamat** — {address}",
              "**Pusat Pelanggan** — {customerCenter}",
              "**Email** — {email}",
              "**Pejabat Perlindungan Informasi Pribadi** — {privacyOfficer}",
              "**Penyedia Hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Anda tidak perlu menulis ulang mimpi yang Anda berikan dalam email pertanyaan. Kami tidak menyimpan input, jadi kami tidak dapat mencarinya lagi, dan nomor pesanan sudah cukup untuk verifikasi. Silakan tulis hanya jika benar-benar perlu, seperti untuk melaporkan kesalahan interpretasi."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Prinsip Layanan",
    "title": "Apa yang Tidak Kami Lakukan",
    "summary": "Kami tidak menyediakan nomor lotere, jurnal mimpi, penentuan kehamilan, atau jimat. Kami menjelaskan mengapa kami memilih untuk tidak melakukan masing-masing dari ini.",
    "backLabel": "Dasar Interpretasi",
    "sections": [
      {
        "title": "Kami tidak menyediakan nomor lotere",
        "blocks": [
          {
            "p": "Meskipun ini sering dibahas dalam layanan interpretasi mimpi, kami tidak melakukannya. **Tidak ada dasar dalam interpretasi mimpi tradisional untuk menarik angka dari mimpi.** Meskipun ada catatan tentang menginterpretasikan mimpi babi sebagai kekayaan, tidak ada aturan dalam literatur mana pun yang menghasilkan enam angka dari itu."
          },
          {
            "p": "Untuk membuatnya, kami harus mengarangnya, dan pada saat itu, layanan ini tidak lagi menjadi tempat untuk menyampaikan interpretasi yang diwariskan oleh tradisi. Ini terutama mengkhawatirkan karena dapat menyebabkan kerugian finansial."
          }
        ]
      },
      {
        "title": "Kami tidak membuat jurnal mimpi",
        "blocks": [
          {
            "p": "Meskipun akan nyaman memiliki fitur untuk mengumpulkan mimpi masa lalu, itu akan mengharuskan kami untuk **secara terus-menerus menyimpan mimpi yang Anda berikan.** Narasi mimpi adalah aspek paling pribadi dari apa yang diterima layanan ini, dan kami telah memutuskan untuk tidak menukarnya."
          },
          {
            "p": "Sebagai gantinya, mimpi yang ingin Anda simpan dapat **diambil sebagai gambar atau dokumen.** Tanggung jawab untuk penyimpanan terletak pada pengguna, bukan kami — [Dua Cara untuk Menyimpan Mimpi Anda](/guide/reports)"
          }
        ]
      },
      {
        "title": "Kami tidak menentukan kehamilan atau jenis kelamin",
        "blocks": [
          {
            "p": "Kami hanya akan menyatakan bahwa simbol yang diinterpretasikan sebagai **a conception dream** (mimpi konsepsi) telah muncul. Apakah Anda hamil atau apakah anak tersebut seorang putri atau putra **bukan sesuatu yang dapat diketahui melalui mimpi.** Pernyataan semacam itu tidak muncul di layar atau dalam dokumen berbayar."
          }
        ]
      },
      {
        "title": "Kami tidak menjual jimat atau jimat",
        "blocks": [
          {
            "p": "Simbol yang dibaca sebagai **an ominous dream** (mimpi yang tidak menguntungkan) bukan alasan untuk membeli sesuatu. Mimpi yang tidak menguntungkan secara tradisional digunakan untuk **menunjukkan situasi yang perlu diperiksa sekarang**, bukan untuk membayar agar menghindari sesuatu."
          },
          {
            "p": "Kami tidak menciptakan kecemasan untuk menjual sesuatu berdasarkan itu. Satu-satunya hal yang kami jual adalah dua yang disebutkan di atas, dan tidak ada yang memberikan interpretasi tambahan tetapi lebih kepada **cara untuk menyimpan konten yang sama.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kami tidak membuat pernyataan definitif tentang masa depan",
        "blocks": [
          {
            "p": "Kami tidak membuat pernyataan definitif tentang apakah sesuatu akan terjadi, kapan itu akan terjadi, atau mengenai kesehatan, kekayaan, atau umur. Menyampaikan makna simbol tradisional dan meramalkan masa depan adalah hal yang berbeda."
          }
        ]
      },
      {
        "title": "Kami tidak membuat interpretasi yang tidak ada",
        "blocks": [
          {
            "p": "Untuk simbol yang tidak ada dalam kamus, kami akan **menyatakan bahwa kami tidak dapat menemukannya.** Kami tidak menggabungkan yang serupa atau mengisi ruang dengan kalimat yang masuk akal. Oleh karena itu, layanan ini tidak [menggunakan kecerdasan buatan untuk interpretasi mimpi](/guide/no-ai). Model ini tidak mengatakan bahwa ia tidak tahu apa yang tidak diketahuinya."
          }
        ]
      }
    ]
  },
  "about": {
    "eyebrow": "Pengantar",
    "title": "Pengantar ke Dreams-Link",
    "summary": "Ini adalah layanan yang menginterpretasikan mimpi menggunakan kamus simbol interpretasi mimpi tradisional. Ini menjelaskan apa yang menjadi dasar dan apa yang tidak dinyatakan.",
    "backLabel": "Kembali ke Beranda",
    "sections": [
      {
        "title": "Apa yang kami lakukan?",
        "blocks": [
          {
            "p": "Dreams-Link menemukan **simbol yang digunakan dalam interpretasi mimpi tradisional** dari mimpi yang Anda tulis dan menunjukkan maknanya. Karena mimpi adalah sesuatu yang kita alami setiap hari, interpretasi yang Anda lihat di layar adalah **gratis dan tidak memerlukan keanggotaan.**"
          },
          {
            "p": "Satu-satunya hal yang dijual dengan biaya adalah **dua bentuk pelestarian** — sebuah gambar yang berisi mimpi baik (kartu mimpi) dan sebuah PDF yang berisi latar belakang ketika simbol yang secara tradisional dianggap sebagai mimpi konsepsi muncul."
          }
        ]
      },
      {
        "title": "Apa dasar dari ini?",
        "blocks": [
          {
            "p": "Dasar untuk interpretasi adalah **kamus dari {symbolTotal} simbol**. Kami menemukan simbol dalam teks mimpi dan hanya menunjukkan makna yang tercatat dalam kamus untuk simbol-simbol tersebut. Jika sebuah simbol memiliki beberapa makna, kami memilih berdasarkan situasi — seperti matahari terbit dan matahari terbenam yang secara tradisional diinterpretasikan sebagai kebalikan."
          },
          {
            "p": "Semua makna dalam kamus adalah **diterjemahkan dari teks asli buku-buku interpretasi mimpi kuno**, dan setiap makna disertai dengan teks asli yang menjadi dasarnya. Teks asli yang digunakan sebagai dasar ada dua — **Interpretasi Mimpi Zhou Gong**, yang telah dibaca selama lama di Asia Timur, dan **Buku Mimpi Miller** dari Barat yang diterbitkan pada tahun 1901."
          },
          {
            "p": "Pencarian dilakukan **hanya dengan aturan tetap**. Mimpi yang sama akan selalu menghasilkan simbol yang sama, dan interpretasi tidak berubah dari kemarin hingga hari ini."
          }
        ]
      },
      {
        "title": "Apa yang tidak kami katakan?",
        "blocks": [
          {
            "p": "**Kami tidak menciptakan makna tradisional yang tidak ada dalam kamus.** Jika tidak ada simbol yang ditemukan, kami hanya menyatakan bahwa tidak ada yang ditemukan dan menyimpulkan. Mengisi ruang itu dengan kata-kata yang masuk akal adalah hal yang paling hati-hati dilakukan oleh layanan ini."
          },
          {
            "p": "**Mimpi konsepsi hanyalah indikasi, bukan penentuan.** Kami hanya memberi tahu Anda bahwa simbol yang secara tradisional dianggap sebagai mimpi konsepsi muncul dalam mimpi. Kami tidak memprediksi kehamilan atau jenis kelamin anak, dan tidak ada dasar untuk klaim semacam itu."
          },
          {
            "p": "Kami tidak **membuat pernyataan definitif tentang kesehatan, kekayaan, atau karier.** Ini adalah referensi dari perspektif interpretasi mimpi tradisional dan bukan nasihat medis, finansial, atau hukum."
          }
        ]
      },
      {
        "title": "Kami tidak menyimpan mimpi yang Anda tulis.",
        "blocks": [
          {
            "p": "Cerita mimpi adalah bagian yang paling pribadi dari apa yang diterima layanan ini. Oleh karena itu, kami **tidak menyimpannya.** Input hanya digunakan untuk perhitungan dan tidak dicatat dalam bentuk apapun di server."
          },
          {
            "p": "Kami memutuskan **tidak untuk membuat fungsi untuk mengumpulkan mimpi seperti buku harian mimpi.** Ini adalah fitur yang berharga, tetapi akan memerlukan penyimpanan tulisan yang paling pribadi."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Metode ini dijelaskan lebih rinci dalam [dokumen panduan](/guide). Informasi bisnis dan detail kontak dapat ditemukan di [hubungi kami](/contact)."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Dasar layanan",
    "title": "Apa dasar dari kamus simbol?",
    "summary": "Ini menjelaskan dari mana interpretasi berasal. Kriteria untuk membagi {symbolTotal} simbol menjadi delapan kategori, alasan untuk melampirkan kutipan teks asli pada setiap makna, dan prinsip untuk tidak mengisi ruang kosong.",
    "backLabel": "Dasar interpretasi",
    "sections": [
      {
        "title": "Kami hanya menunjukkan apa yang tertulis dalam kamus.",
        "blocks": [
          {
            "p": "Interpretasi Dreams-Link berasal dari **kamus simbol yang telah ditulis sebelumnya**. Kami menemukan simbol dalam teks yang Anda berikan dan menunjukkan makna yang tercatat dalam kamus untuk simbol-simbol tersebut apa adanya. Kami tidak menciptakan kata-kata yang tidak ada dalam kamus."
          },
          {
            "p": "Saat ini, kamus berisi **{symbolTotal} simbol**, dan semua simbol tersebut memiliki total **{meaningTotal} makna**. Beberapa simbol hanya memiliki satu makna, tetapi sebagian besar memiliki beberapa, dan untuk setiap makna, **situasi di mana makna itu berlaku** juga dicatat."
          }
        ]
      },
      {
        "title": "Dibagi menjadi delapan kategori.",
        "blocks": [
          {
            "p": "Kami mengelompokkan apa yang muncul dalam mimpi menjadi delapan kategori berdasarkan karakteristiknya. Jumlah yang saat ini terdaftar ada dalam tanda kurung."
          },
          {
            "ul": [
              "**Objek**({categoryThing}) · **Tindakan**({categoryAction}) · **Hewan**({categoryAnimal}) — tiga kategori yang paling tebal. Ini adalah apa yang terutama dibahas dalam buku-buku interpretasi mimpi kuno: objek yang terlihat, binatang, dan tindakan yang dilakukan dalam mimpi.",
              "**Alam**({categoryNature}) · **Orang**({categoryPerson}) — hal-hal besar dan kuno seperti air, api, matahari, dan bulan, serta orang-orang yang muncul dalam mimpi seperti raja, pencuri, dan orang yang telah meninggal.",
              "**Tempat**({categoryPlace}) · **Tubuh**({categoryBody}) · **Warna**({categoryColor}) — lokasi seperti rumah dan kuburan, bagian tubuh seperti gigi, rambut, dan darah, serta warna."
            ]
          },
          {
            "p": "Untuk melihatnya berdasarkan kategori, Anda dapat melihat daftar lengkap di [kamus simbol](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Setiap makna disertai dengan kutipan teks asli.",
        "blocks": [
          {
            "p": "Setiap dari **{meaningTotal} makna** dalam kamus disertai dengan **kutipan teks asli** yang menjadi dasar makna tersebut. Semua {symbolTotal} simbol memiliki ini — jika tidak ada kutipan teks asli, entri itu sendiri tidak dapat dibuat."
          },
          {
            "p": "Teks asli yang digunakan sebagai dasar ada dua. **Interpretasi Mimpi Zhou Gong** adalah buku interpretasi mimpi yang telah dibaca selama lama di Asia Timur, dan **Buku Mimpi Miller** adalah buku Barat yang diterbitkan pada tahun 1901. Ketika Anda membuka sebuah simbol, Anda dapat melihat dari teks asli mana makna itu berasal, bersama dengan kutipan dan maknanya."
          },
          {
            "p": "**Kami tidak mengisi ruang kosong.** Menambahkan asal yang masuk akal akan membuat dokumen lebih tebal, tetapi pada saat itu, kamus ini tidak lagi menjadi terjemahan dari apa yang telah diwariskan tetapi lebih kepada rekayasa. Kami tidak menulis apa yang tidak ada dalam teks asli, dan untuk apa yang kami tulis, kami harus melampirkan teks asli."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Saat memperluas, kami hanya memperluas dari teks asli.",
        "blocks": [
          {
            "p": "Kami telah mencoba untuk membuat entri berdasarkan model simbol, tetapi entri yang dihasilkan baik mengulangi kata yang sama seperti 「cinta → hubungan baik」 atau gagal memberikan dasar dari tradisi. Oleh karena itu, **kami tidak menyertakan apapun.** Ukuran kamus saat ini disebabkan oleh penerjemahan teks asli, bukan pembuatan entri — alasan untuk tidak menggunakan model dijelaskan secara rinci dalam [mengapa kami tidak menggunakan model](/guide/no-ai)."
          }
        ]
      },
      {
        "title": "Baik dan buruk ditentukan oleh kamus.",
        "blocks": [
          {
            "p": "Setiap simbol disertai dengan indikasi keberuntungan dan ketidakberuntungan. **Baik {polarityPositive}**, **ambivalen tergantung pada situasi {polarityAmbivalent}**, **perhatian {polarityNegative}**, dan **netral {polarityNeutral}**."
          },
          {
            "p": "Di antara empat kategori, **yang paling banyak adalah yang bervariasi tergantung pada situasi.** Ini bukan sesuatu yang kami seimbangkan; ini adalah bagaimana tertulis dalam teks asli — bahkan untuk simbol yang sama, ada banyak tempat di mana ia diinterpretasikan secara berlawanan tergantung pada apa yang dilakukan. Nilai ini mencerminkan sifat setiap simbol, dan suasana keseluruhan mimpi dihitung ulang dengan mengumpulkan simbol-simbol yang ditemukan."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Dasar Layanan",
    "title": "Mengapa simbol yang sama memiliki makna yang berbeda.",
    "summary": "Matahari terbit dan matahari terbenam secara tradisional diinterpretasikan sebagai kebalikan. Ini membahas struktur di mana {symbolTotal} simbol memiliki {meaningTotal} makna dan bagaimana membedakan situasi.",
    "backLabel": "Dasar interpretasi",
    "sections": [
      {
        "title": "Bahkan jika simbolnya sama, situasi yang berbeda menghasilkan makna yang berbeda.",
        "blocks": [
          {
            "p": "Dalam buku-buku interpretasi mimpi kuno, sebuah simbol tidak selalu memiliki satu makna. Bahkan untuk matahari yang sama, **matahari terbit dan matahari terbenam telah diinterpretasikan secara berlawanan** — yang pertama menunjukkan kemakmuran dalam rumah tangga, sementara yang terakhir menunjukkan kekhawatiran tentang kehilangan orang tua. Kamus ditulis seperti itu."
          },
          {
            "p": "Alasan mengapa {symbolTotal} simbol memiliki total {meaningTotal} makna adalah bahwa untuk setiap makna, **situasi di mana makna itu berlaku** juga dicatat, jadi jika situasi itu terlihat dalam teks yang Anda berikan, kami memilih makna itu."
          }
        ]
      },
      {
        "title": "Bagaimana kami membedakan situasi?",
        "blocks": [
          {
            "p": "Kami melihat apakah ada kata-kata yang menunjukkan situasi dalam teks yang Anda berikan. Dalam frasa 「Saya melihat matahari terbenam」, situasi terbenam ditunjukkan, sementara dalam 「Saya melihat matahari baru terbit」, situasi terbit ditunjukkan. Jika tidak ada kata-kata yang menunjukkan situasi, kami menginterpretasikannya berdasarkan **makna dasar** simbol tersebut."
          },
          {
            "p": "Jadi ketika Anda menuliskan mimpi Anda, harap sertakan **tidak hanya apa yang muncul tetapi juga tindakan yang diambil**; ini akan membuat interpretasi lebih akurat. Mengatakan \"Saya melihat seekor babi\" menyampaikan lebih sedikit daripada \"babi itu masuk ke rumah.\""
          }
        ]
      },
      {
        "kind": "note",
        "title": "Semakin banyak Anda menulis, semakin baik, tetapi tidak perlu menulis secara ekstensif.",
        "blocks": [
          {
            "p": "Beberapa kalimat sudah cukup. Menulis lebih banyak tidak selalu berarti menemukan lebih banyak simbol; sebaliknya, jika pernyataan yang tidak terkait dicampur, itu dapat menyebabkan simbol yang salah."
          }
        ]
      },
      {
        "title": "Ada {contextSplitSymbolTotal} simbol dengan makna yang bervariasi.",
        "blocks": [
          {
            "p": "Dari {symbolTotal} simbol dalam kamus, **{contextSplitSymbolTotal}** memiliki makna yang bervariasi tergantung pada situasi. Sisanya dapat diinterpretasikan dalam satu arah tanpa memperhatikan situasi."
          },
          {
            "p": "Simbol-simbol **{contextSplitSymbolTotal}** ini adalah yang paling halus. Salah membaca situasi dapat menyebabkan menyampaikan berita baik sebagai berita buruk, atau sebaliknya. Oleh karena itu, jika situasinya tidak jelas, kita mengikuti **makna dasar simbol** tanpa memaksakan pilihan — kita tidak ingin berbicara tentang yang tidak pasti seolah-olah itu pasti."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perasaan saat bangun juga diperhitungkan.",
        "blocks": [
          {
            "p": "Perasaan dan pengulangan yang ditanyakan di bawah konten mimpi tidak digunakan untuk menemukan simbol. Mereka dirujuk saat menentukan cara mana untuk menginterpretasikan dalam kasus makna yang bervariasi. Anda tidak perlu memilih; hasilnya tetap akan diberikan."
          }
        ]
      },
      {
        "title": "Suasana keseluruhan mimpi dihitung secara terpisah.",
        "blocks": [
          {
            "p": "Jika beberapa simbol ditemukan, kita mengumpulkan apakah setiap simbol positif atau peringatan untuk menentukan nada keseluruhan mimpi. Mimpi yang menampilkan satu simbol baik dan satu simbol peringatan tidak hanya disebut \"mimpi baik.\""
          },
          {
            "p": "Anda dapat melihat berbagai simbol dan maknanya di [kamus simbol](/dream/symbols). Juga baik untuk menelusuri apa yang termasuk sebelum menuliskan mimpi Anda."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Dasar layanan",
    "title": "Kriteria untuk membedakan antara mimpi yang menguntungkan dan mimpi yang buruk",
    "summary": "Empat nilai yang diberikan untuk setiap simbol dan distribusinya, alasan untuk makna yang paling bervariasi, dan mengapa kita membahas mimpi campuran sebagai campuran.",
    "backLabel": "Dasar interpretasi",
    "sections": [
      {
        "title": "Setiap simbol diberikan salah satu dari empat kategori.",
        "blocks": [
          {
            "p": "{symbolTotal} simbol dalam kamus masing-masing dikategorikan sebagai salah satu dari berikut."
          },
          {
            "ul": [
              "**Positif {polarityPositive}** — diinterpretasikan sebagai peristiwa menyenangkan seperti kekayaan, perayaan, atau dermawan.",
              "**Ambivalen {polarityAmbivalent}** — simbol seperti matahari atau babi yang maknanya dapat dibalik tergantung pada tindakan yang diambil. **Ini adalah kategori yang paling umum dan paling hati-hati.**",
              "**Peringatan {polarityNegative}** — diinterpretasikan sebagai perselisihan, kerugian, atau peristiwa negatif.",
              "**Netral {polarityNeutral}** — simbol yang tidak menguntungkan maupun buruk dalam dirinya sendiri, seperti warna."
            ]
          }
        ]
      },
      {
        "title": "Alasan untuk makna yang paling bervariasi",
        "blocks": [
          {
            "p": "Ini bukan keseimbangan yang telah kita capai. **Ini adalah bagaimana teks asli ditulis.** Teks-teks interpretasi mimpi kuno mencatat makna yang berbeda untuk simbol yang sama tergantung pada situasi, dan banyak dari situasi tersebut bersifat oposisi — menangkap babi adalah menguntungkan, tetapi babi yang mati dengan sendirinya adalah buruk, dan hal yang sama berlaku untuk matahari terbit dan terbenam."
          },
          {
            "p": "Oleh karena itu, fakta bahwa \"simbol baik muncul\" tidak berarti \"hal baik akan terjadi.\" Apa yang dapat kita sampaikan terbatas pada bagaimana simbol itu telah diinterpretasikan dalam tradisi."
          }
        ]
      },
      {
        "title": "Nada mimpi dikumpulkan dari simbol-simbolnya.",
        "blocks": [
          {
            "p": "Jika beberapa simbol ditemukan, kita mengumpulkan makna menguntungkan dan peringatan mereka untuk menentukan nada keseluruhan mimpi. Jika hanya simbol positif yang muncul, itu adalah mimpi baik; jika hanya simbol peringatan yang muncul, itu adalah mimpi peringatan; jika **campuran, kita akan membahasnya sebagai campuran.**"
          },
          {
            "p": "Kita tidak memaksakan interpretasi campuran ke satu sisi. Pada kenyataannya, mimpi yang dimiliki orang sebagian besar adalah campuran, dan merangkumnya sebagai \"mimpi baik\" tidak akurat maupun tidak membantu."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kata-kata yang tidak diucapkan",
        "blocks": [
          {
            "p": "Kita tidak membuat pernyataan definitif tentang apa yang akan terjadi, kapan itu akan terjadi, atau mengenai kesehatan dan kekayaan. Menerjemahkan makna simbol tradisional berbeda dari meramalkan masa depan."
          }
        ]
      },
      {
        "title": "Ketika mimpi peringatan muncul",
        "blocks": [
          {
            "p": "Bahkan jika simbol yang diinterpretasikan sebagai peringatan muncul, itu tidak selalu berarti berita buruk. Dalam interpretasi mimpi tradisional, mimpi buruk umumnya digunakan untuk menunjukkan **situasi yang perlu diperiksa sekarang.** Jika simbol yang diinterpretasikan sebagai perselisihan muncul, itu dapat dibaca sebagai saran untuk menahan diri."
          },
          {
            "p": "Untuk alasan yang sama, layanan ini tidak menjual jimat atau jimat. Satu-satunya hal yang dijual adalah [dua metode untuk menjaga mimpi Anda](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Mimpi konsepsi",
    "title": "Cara membedakan mimpi konsepsi",
    "summary": "Bagaimana kami menentukan {conceptionSymbolTotal} simbol mimpi konsepsi, mengapa tidak semua mimpi babi adalah mimpi konsepsi, dan prinsip bahwa kami tidak menentukan kehamilan atau jenis kelamin.",
    "backLabel": "Dasar interpretasi",
    "sections": [
      {
        "title": "Pertama, mari kita klarifikasi.",
        "blocks": [
          {
            "p": "**Dreams-Link tidak menentukan status kehamilan. Kami juga tidak menyatakan jenis kelamin anak.** Ini bukan sesuatu yang dapat diketahui melalui mimpi, juga bukan sesuatu yang dapat kami lakukan."
          },
          {
            "p": "Apa yang dapat kami sampaikan terbatas pada ini — **fakta bahwa simbol yang secara tradisional diinterpretasikan sebagai mimpi konsepsi muncul dalam mimpi ini.** Bagaimana simbol itu diinterpretasikan oleh para leluhur adalah semua yang dapat kami sediakan."
          }
        ]
      },
      {
        "title": "Ada {conceptionSymbolTotal} simbol yang diinterpretasikan sebagai mimpi konsepsi.",
        "blocks": [
          {
            "p": "Dari {symbolTotal} simbol dalam kamus, **{conceptionSymbolTotal}** ditandai sebagai mimpi konsepsi. Banyak yang merupakan hewan seperti naga, babi, dan harimau, serta buah-buahan seperti persik, kesemek, dan jujube, dan juga termasuk matahari dan bulan."
          },
          {
            "p": "Namun, **hanya karena simbol itu muncul tidak langsung berarti itu adalah mimpi konsepsi.** Di sinilah layanan ini telah melakukan upaya signifikan."
          }
        ]
      },
      {
        "title": "Kami menentukan berdasarkan makna yang dipilih, bukan simbol.",
        "blocks": [
          {
            "p": "Babi adalah simbol mimpi konsepsi, tetapi juga **perwakilan dari mimpi kekayaan.** Jika kita menyatakannya sebagai mimpi konsepsi hanya karena simbol itu muncul, maka setiap orang yang bermimpi tentang babi akan memiliki mimpi konsepsi. Pada kenyataannya, sebagian besar telah diinterpretasikan sebagai mimpi kekayaan."
          },
          {
            "p": "Oleh karena itu, kita melihat **makna yang sebenarnya dipilih dari simbol itu, bukan hanya simbol itu sendiri.** Kita hanya menandainya sebagai mimpi konsepsi ketika makna yang condong ke arah konsepsi dipilih berdasarkan situasi yang Anda berikan. Bahkan dengan babi yang sama, interpretasi dapat berbeda berdasarkan kalimat."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jika Anda menyebutkan kehamilan, kami akan melihat itu terlebih dahulu.",
        "blocks": [
          {
            "p": "Jika tulisan Anda mencakup istilah seperti kehamilan, mimpi konsepsi, atau persalinan, kami akan memprioritaskan makna konsepsi di antara makna yang dimiliki simbol itu. Bahkan mimpi yang sama dapat diinterpretasikan secara berbeda berdasarkan situasi saat ini."
          }
        ]
      },
      {
        "title": "Alasan untuk memiliki laporan mimpi konsepsi terpisah.",
        "blocks": [
          {
            "p": "Mimpi konsepsi memiliki tujuan yang berbeda dari mimpi lainnya. Mereka sering dibahas lama setelah anak lahir dan dibagikan di antara anggota keluarga. Oleh karena itu, daripada hanya melihatnya di layar, kami membuat **dokumen yang dapat disimpan.**"
          },
          {
            "p": "Apa yang termasuk dijelaskan dalam [dua metode untuk menjaga mimpi Anda](/guide/reports). Anda dapat melihat semua interpretasi tanpa membelinya."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Cara Menggunakan",
    "title": "Cara Menulis Mimpi",
    "summary": "Jika Anda menuliskan apa yang Anda lihat dan lakukan, itu akan diinterpretasikan dengan baik. Kami menjelaskan mengapa satu kata kerja menentukan makna, dan mengapa kami juga bertanya bagaimana perasaan Anda dan apakah mimpi itu berulang.",
    "backLabel": "Dasar Interpretasi",
    "sections": [
      {
        "title": "Silakan tuliskan apa yang Anda lihat dan lakukan",
        "blocks": [
          {
            "p": "Tidak ada format khusus. Dua atau tiga kalimat, seperti yang biasanya Anda bicarakan, sudah cukup. Namun, apa yang diinterpretasikan dengan baik ditentukan — **apa yang Anda lihat** dan **apa yang terjadi**."
          },
          {
            "ul": [
              "Diinterpretasikan dengan baik — 「Seekor ular besar melilit tubuh saya」, 「Saya melihat air jernih mengalir」, 「Gigi saya copot dengan sendirinya」",
              "Tidak diinterpretasikan — 「Saya merasa takut」, 「Saya merasa aneh」, 「Sepertinya seseorang membenci saya」"
            ]
          },
          {
            "p": "Jika Anda hanya menuliskan perasaan Anda, tidak akan ada simbol yang dapat ditemukan. Interpretasi mimpi tradisional berbicara tentang [objek dan tindakan](/guide/categories), bukan emosi."
          }
        ]
      },
      {
        "title": "Menuliskan apa yang Anda lakukan membuatnya lebih akurat",
        "blocks": [
          {
            "p": "Bahkan simbol yang sama dapat memiliki makna yang berbeda tergantung pada situasi, dengan {contextSplitSymbolTotal} kasus. Matahari terbit dan terbenam secara tradisional diinterpretasikan dengan cara yang berlawanan."
          },
          {
            "p": "Oleh karena itu, 「Saya melihat seekor babi」 kurang akurat dibandingkan dengan 「Seekor babi masuk ke rumah」, dan 「Ada air」 kurang akurat dibandingkan dengan 「Saya minum air jernih」. **Sebuah kata kerja menentukan makna.**"
          }
        ]
      },
      {
        "title": "Alasan menanyakan tentang perasaan dan pengulangan",
        "blocks": [
          {
            "p": "Di bawah konten mimpi, ada tempat untuk memilih **bagaimana perasaan Anda saat bangun** dan **apakah Anda memiliki mimpi berulang**. Anda tidak perlu memilih keduanya agar hasil dapat diberikan."
          },
          {
            "p": "Nilai-nilai ini tidak digunakan untuk menemukan simbol. Mereka dirujuk saat memutuskan **makna mana yang dipilih** dari simbol yang sama dan bagaimana menyampaikan hasilnya. Mimpi berulang secara tradisional dipandang berbeda dari mimpi yang hanya terjadi sekali."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dalam kasus yang menyebutkan kehamilan",
        "blocks": [
          {
            "p": "Jika teks mencakup kata-kata seperti kehamilan, mimpi konsepsi, atau persalinan, kami pertama-tama melihat makna mimpi konsepsi dari simbol tersebut. Bahkan mimpi babi yang sama telah diinterpretasikan secara berbeda oleh orang-orang kuno tergantung pada situasi — [cara membedakan 태몽](/guide/conception-dreams)"
          }
        ]
      },
      {
        "title": "Tidak perlu menulis panjang lebar",
        "blocks": [
          {
            "p": "Panjang yang lebih tidak berarti lebih banyak simbol yang akan ditemukan. Faktanya, jika kata-kata yang tidak terkait dicampur secara panjang, ada kemungkinan yang lebih besar bahwa kata-kata yang tidak relevan akan diinterpretasikan sebagai simbol. Silakan tuliskan hanya **adegan yang berkesan**."
          },
          {
            "p": "Teks yang Anda tulis tidak akan disimpan di mana pun. Alasan Anda dapat menulis dengan bebas dijelaskan dalam [metode tidak menyimpan](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Dasar Layanan",
    "title": "Kriteria Dibagi Menjadi Delapan Kategori",
    "summary": "Delapan kategori — dari objek, tindakan, dan hewan hingga tubuh dan warna — dengan berapa banyak simbol yang dimiliki masing-masing, dan mengapa tidak ada kategori untuk emosi.",
    "backLabel": "Dasar Interpretasi",
    "sections": [
      {
        "title": "Dibagi menjadi delapan kategori dari apa yang muncul dalam mimpi",
        "blocks": [
          {
            "p": "Kami mengelompokkan {symbolTotal} simbol ke dalam delapan kategori berdasarkan karakter mereka. Pertanyaan pemisah adalah **apa yang muncul dalam mimpi** — binatang buas, objek, atau sesuatu yang Anda lakukan."
          },
          {
            "ul": [
              "**Objek {categoryThing}** — barang-barang nyata seperti uang, cermin, dan pisau. Ini adalah kategori yang paling tebal.",
              "**Tindakan {categoryAction}** — hal-hal yang dilakukan atau dialami dalam mimpi, seperti mandi, berpesta, atau dipukuli.",
              "**Hewan {categoryAnimal}** — naga, babi, ular, dan sapi. Banyak dari ini telah dipandang sebagai 태몽.",
              "**Alam {categoryNature}** — hal-hal besar dan kuno seperti air, api, matahari, dan bulan.",
              "**Orang {categoryPerson}** — orang-orang yang muncul dalam mimpi, seperti raja, pencuri, dan individu yang telah meninggal.",
              "**Tempat {categoryPlace}** — lokasi di mana mimpi terjadi, seperti rumah, sumur, dan kuburan.",
              "**Tubuh {categoryBody}** — gigi, rambut, darah. Makna bervariasi tergantung pada di mana di tubuh itu.",
              "**Warna {categoryColor}** — mereka tidak memiliki baik atau buruk yang melekat dan diinterpretasikan berdasarkan apa yang mereka asosiasikan."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Alasan tidak memiliki kategori numerik",
        "blocks": [
          {
            "p": "Kami tidak membuat kategori untuk angka seperti 「tiga」 atau 「tujuh」. **Tidak ada dari dua teks asli yang mencantumkan angka sebagai entri.** Untuk membuka kategori itu dan mengisinya, kami harus menulis sesuatu yang tidak muncul dalam kedua teks."
          }
        ]
      },
      {
        "title": "Mengapa tidak ada kategori emosional",
        "blocks": [
          {
            "p": "Kami tidak membuat kategori untuk perasaan seperti 「kecemasan」 atau 「kerinduan」. **Ini karena teks-teks interpretasi mimpi kuno tidak menyebutkan emosi.** Kedua teks asli berbicara tentang apa yang dilihat dan apa yang terjadi, bukan perasaan pemimpi sebagai subjek interpretasi."
          },
          {
            "p": "Kami pernah mencoba membangun kategori untuk emosi, dan yang muncul adalah istilah seperti 「kehilangan kasih sayang」 dan 「stabilitas emosional」. Ini bukan **bentuk** yang muncul dalam mimpi tetapi kosakata dari psikologi modern. Itu adalah jenis layanan yang berbeda dan bukan apa yang ingin dicapai oleh kamus ini."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jadi ketika Anda menulis",
        "blocks": [
          {
            "p": "Silakan tuliskan **apa yang Anda lihat dan lakukan** daripada perasaan, karena itu akan diinterpretasikan jauh lebih baik. Namun, kami bertanya secara terpisah tentang bagaimana perasaan Anda saat bangun — ini dirujuk dalam situasi di mana makna dapat bervariasi bahkan untuk simbol yang sama."
          }
        ]
      },
      {
        "title": "Warna tidak digunakan sendiri",
        "blocks": [
          {
            "p": "Warna {categoryColor} tidak memiliki baik atau buruk yang melekat. Sama seperti ular biru dan ular merah diinterpretasikan secara berbeda, maknanya berubah berdasarkan **apa yang mereka asosiasikan**. Oleh karena itu, kategori ini dianggap sebagai nilai yang dibaca saat muncul dengan simbol lain."
          },
          {
            "p": "Daftar lengkap berdasarkan kategori tersedia di [Kamus Simbol](/dream/symbols). Ketika Anda membuka sebuah simbol, makna yang disampaikan, kategori, dan simbol terkait akan disediakan."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Cara Menggunakan",
    "title": "Ketika Simbol Tidak Ditemukan",
    "summary": "Jika tidak ada yang ditemukan, kami mengatakannya. Kami menjelaskan mengapa itu terjadi, apa yang kami tampilkan di layar itu sebagai gantinya, dan bagaimana kamus diperluas.",
    "backLabel": "Dasar Interpretasi",
    "sections": [
      {
        "title": "Ketika kami tidak menemukan apa-apa, kami mengatakan bahwa kami tidak menemukan apa-apa",
        "blocks": [
          {
            "p": "Jika kami tidak dapat menemukan satu simbol pun dalam teks yang Anda tulis, kami **memberitahu Anda bahwa kami tidak menemukan apa-apa.** Kami tidak memaksakan simbol yang mirip padanya, atau menulis kalimat yang masuk akal untuk mengisi kekosongan."
          },
          {
            "p": "Ini adalah masalah yang paling mengkhawatirkan untuk layanan ini. Saat Anda mengisi kekosongan, interpretasi yang muncul dan apa yang sebenarnya dilakukan menyimpang."
          }
        ]
      },
      {
        "title": "Mengapa tidak dapat ditemukan?",
        "blocks": [
          {
            "p": "Biasanya salah satu dari berikut ini."
          },
          {
            "ul": [
              "**Ini adalah simbol yang belum ada dalam kamus.** Saat ini, ada {symbolTotal} simbol yang terdaftar, tetapi masih banyak lagi yang bisa muncul dalam mimpi.",
              "**Anda hanya menuliskan perasaan Anda.** Jika Anda hanya memiliki emosi seperti \"Saya merasa takut\" atau \"Saya merasa aneh,\" tidak ada simbol yang dapat diidentifikasi. Interpretasi mimpi tradisional mengacu pada **objek dan tindakan yang terlihat**, bukan emosi.",
              "**Terlalu pendek.** Lebih baik menulis dalam kalimat daripada hanya satu atau dua kata."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ketika Anda mencoba menulis lagi",
        "blocks": [
          {
            "p": "Silakan sertakan **apa yang Anda lihat dan apa yang Anda lakukan** dalam mimpi. Mengatakan \"Saya merasa cemas\" kurang efektif dibandingkan mengatakan \"gigi saya copot dengan sendirinya,\" dan \"saya menyukainya\" kurang efektif dibandingkan mengatakan \"saya melihat air jernih mengalir.\""
          }
        ]
      },
      {
        "title": "Kami tidak meninggalkan layar kosong",
        "blocks": [
          {
            "p": "Ketika sesuatu tidak dapat ditemukan, kami juga menunjukkan **{popularSymbolCount} simbol yang sering dicari** di layar itu. Ini dipilih dari yang paling representatif dalam kamus, yang dapat membantu Anda mengingat jika salah satu dari mereka ada dalam mimpi Anda."
          },
          {
            "p": "Jika Anda ingin menjelajahi semuanya, Anda dapat menemukan {symbolTotal} simbol yang diorganisir berdasarkan kategori di [kamus simbol](/dream/symbols). Setiap simbol mencakup makna yang disampaikan dan simbol terkait."
          }
        ]
      },
      {
        "title": "Bagaimana kamus akan berkembang di masa depan?",
        "blocks": [
          {
            "p": "Daripada meningkatkan jumlah, kami terlebih dahulu fokus pada **mengidentifikasi dengan akurat apa yang sudah ada**. Kami telah menyertakan {aliasTotal} nama alternatif untuk simbol yang sama, dan kami telah memastikan bahwa kata-kata dengan akhiran yang mengubah bentuknya juga dapat diidentifikasi."
          },
          {
            "p": "Saat memperluas simbol itu sendiri, kami hanya menyertakan **apa yang tertulis dalam teks asli**. Jika suatu makna tidak memiliki frasa asli yang sesuai, entri tidak akan dibuat — hanya meningkatkan angka tanpa dasar menjadikannya penciptaan, bukan kamus. Alasan untuk upaya ini dan hasilnya didokumentasikan dalam [mengapa kami tidak menggunakan model](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Dasar Layanan",
    "title": "Alasan tidak menggunakan kecerdasan buatan dalam interpretasi mimpi",
    "summary": "Tidak ada kode yang memanggil model untuk membuat interpretasi. Ini adalah hasil dari upaya untuk memperluas kamus menggunakan model dan apa yang diperoleh serta apa yang牺牲 sebagai hasilnya.",
    "backLabel": "Dasar Interpretasi",
    "sections": [
      {
        "title": "Kecerdasan buatan tidak digunakan dalam interpretasi mimpi",
        "blocks": [
          {
            "p": "Banyak layanan interpretasi mimpi saat ini menunjukkan tulisan yang dihasilkan dengan memasukkan cerita mimpi ke dalam model generatif. Dreams-Link tidak melakukan ini. **Tidak ada kode yang memanggil model untuk membuat interpretasi.**"
          },
          {
            "p": "Apa yang kami lakukan sederhana. Kami menemukan simbol-simbol dalam teks yang Anda berikan dan memilih makna yang telah ditulis oleh kamus tentang simbol-simbol tersebut. Tidak ada ruang untuk kalimat yang tidak ada dalam kamus."
          },
          {
            "p": "Kamus itu sendiri tidak dibuat oleh model. Setiap makna disertai dengan **bagian mana dari teks interpretasi mimpi asli yang berasal darinya**, dan bagian itu dibandingkan kata demi kata dengan file aslinya."
          }
        ]
      },
      {
        "title": "Mengapa keputusan ini dibuat?",
        "blocks": [
          {
            "p": "**Model tidak mengatakan bahwa mereka tidak tahu apa yang tidak mereka ketahui.** Ketika ditanya tentang simbol tanpa dasar yang disampaikan, mereka mengarang asal-usul yang masuk akal. Dan apakah itu dibuat atau tidak adalah sesuatu yang tidak dapat dibedakan oleh pembaca. Jika penciptaan dimasukkan di tempat penyampaian tradisi, premis layanan ini runtuh."
          },
          {
            "p": "Kami memang mencoba membiarkan model membuat simbol untuk memperluas kamus. Dari enam puluh enam contoh yang dipilih sebagai layak untuk diadopsi, **lima puluh lima tidak dapat memberikan dasar yang disampaikan**, dan ada juga contoh seperti subway dan jalan raya yang tidak dapat ada dalam interpretasi mimpi tradisional. Oleh karena itu, **tidak ada yang disertakan.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hal yang sama juga berlaku bahkan dengan model yang lebih besar",
        "blocks": [
          {
            "p": "Ketika kami menjalankan hal yang sama pada model yang lebih baik, satu dari sembilan belas lulus, dan yang satu itu hanyalah pengulangan kata yang sama dengan dasar yang sama. Model yang lebih besar hanya berbicara **lebih masuk akal** tentang apa yang tidak mereka ketahui."
          }
        ]
      },
      {
        "title": "Manfaat tidak menggunakan model",
        "blocks": [
          {
            "ul": [
              "**Jika itu mimpi yang sama, interpretasi yang sama akan muncul.** Kata-katanya tidak berubah setiap kali Anda melihatnya.",
              "**Ini cepat.** Tidak ada menunggu respons model, jadi hasilnya tersedia segera.",
              "**Mimpi yang Anda tulis tidak keluar.** Tidak perlu mengirimnya ke server perusahaan eksternal — silakan baca ini bersama dengan [metode yang tidak menyimpan](/guide/no-storage).",
              "**Ini dapat ditawarkan secara gratis.** Mimpi adalah sesuatu yang kita miliki setiap hari, jadi ada banyak pertanyaan. Jika model dipanggil untuk setiap pertanyaan, biaya harus ditanggung dari suatu tempat."
            ]
          }
        ]
      },
      {
        "title": "Sebagai gantinya, apa yang telah牺牲",
        "blocks": [
          {
            "p": "Kami tidak dapat menginterpretasikan apa yang tidak ada dalam kamus. Jika kami menggunakan model, akan ada jawaban yang masuk akal untuk apa pun yang Anda tulis. Kami memilih untuk **mengatakan bahwa kami tidak dapat menemukannya ketika kami tidak dapat menemukannya.** Apa yang kami tunjukkan pada saat itu didokumentasikan dalam [ketika simbol tidak dapat ditemukan](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produk Berbayar",
    "title": "Dua Cara untuk Menyimpan Mimpi Anda",
    "summary": "Interpretasi itu sendiri tidak dikenakan biaya. Ini menjelaskan apa dua opsi berbayar, apa yang mereka berisi, dan mengapa mereka bukan interpretasi yang lebih baik.",
    "backLabel": "Dasar Interpretasi",
    "sections": [
      {
        "title": "Interpretasi itu sendiri tidak dikenakan biaya",
        "blocks": [
          {
            "p": "Menuliskan mimpi Anda dan melihat simbol-simbol yang termasuk **tidak memerlukan biaya dan tidak memerlukan keanggotaan.** Karena orang bermimpi setiap hari, kami menilai bahwa ruang ini harus ditawarkan secara gratis."
          },
          {
            "p": "**Dua opsi berbayar tidak lebih baik dari interpretasi.** Mereka adalah **dua cara untuk menyimpan interpretasi yang sama.** Konten yang Anda lihat di layar tidak berubah setelah pembayaran."
          }
        ]
      },
      {
        "title": "Kartu Mimpi — Satu Gambar",
        "blocks": [
          {
            "p": "Kami menyediakan simbol-simbol yang ditemukan dalam mimpi Anda dan maknanya dalam **satu gambar.** Ini adalah file gambar, bukan PDF, sehingga Anda dapat menyimpannya seperti adanya atau mengirimkannya kepada orang lain."
          },
          {
            "p": "Ini ditujukan bagi mereka yang merasa menyesal ketika mimpi yang baik menghilang setelah menutup layar. Karena kami tidak menyimpan mimpi, ini adalah satu-satunya cara untuk menyimpannya jika Anda ingin melestarikannya."
          }
        ]
      },
      {
        "title": "Laporan Mimpi Konsepsi — Dokumen {conceptionPages} halaman",
        "blocks": [
          {
            "p": "Kami membuat **dokumen {conceptionPages}-halaman** tentang mimpi yang menunjukkan simbol-simbol yang menunjukkan mimpi konsepsi. Ini mencakup simbol-simbol mana yang muncul, bagaimana simbol-simbol tersebut telah ditafsirkan secara tradisional, dan ruang untuk mencatat informasi tersebut."
          },
          {
            "p": "Mimpi konsepsi sering dibahas dan dibagikan di antara anggota keluarga bahkan setelah anak lahir, jadi kami membuat dokumen terpisah untuk mimpi yang terlalu berharga untuk hanya dilihat di layar."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kata-kata yang tidak digunakan di sini juga",
        "blocks": [
          {
            "p": "Kami tidak membuat penilaian tentang status kehamilan atau jenis kelamin anak. Pernyataan semacam itu tidak termasuk dalam dokumen. Untuk detail lebih lanjut, silakan lihat [bagaimana mimpi konsepsi disaring](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Mengapa tidak ada lagi dokumen?",
        "blocks": [
          {
            "p": "Layanan saudara menghasilkan laporan sembilan halaman. Ini karena mesin saju mengekstrak banyak nilai dari satu tanggal lahir. Interpretasi mimpi dalam tradisi Korea tidak bekerja seperti itu."
          },
          {
            "p": "Kamus ini berisi {symbolTotal} simbol dan {meaningTotal} makna, tetapi **hanya beberapa simbol yang benar-benar berlaku untuk satu mimpi.** Untuk memperluas itu menjadi sembilan halaman, seseorang harus menulis hal-hal yang tidak ditemukan dalam teks asli mana pun, dan itu adalah tepatnya apa yang dipilih layanan ini untuk tidak dilakukan. Oleh karena itu, dokumen ini sepanjang yang diizinkan oleh materi secara jujur, dan tidak lebih."
          }
        ]
      },
      {
        "title": "Nilai dan Ketersediaan",
        "blocks": [
          {
            "p": "Harga tersedia di [panduan harga](/pricing). Alasan dokumen ini tidak mencantumkan jumlah adalah disengaja — untuk mencegah situasi di mana dokumen panduan tetap dengan jumlah yang usang ketika nilai berubah. Layar dan syarat semua membaca jumlah dari tempat yang sama."
          },
          {
            "p": "Dokumen yang Anda bayar dapat **diperoleh kembali dengan pesanan yang sama.** Namun, karena kami tidak menyimpan file, dokumen tersebut tidak dapat dibuat ulang setelah Anda meninggalkan layar hasil — harap simpan file yang Anda terima."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const ID_NOTICES = {
  "kindLabels": {
    "service": "Layanan",
    "product": "Laporan",
    "engine": "Perhitungan",
    "support": "Dukungan"
  },
  "intro": "Perubahan pada syarat penggunaan Anda — harga, kebijakan — diposting di sini sebelum berlaku. Perbaikan internal seperti layar yang menjadi lebih cepat tidak diposting di sini: apa yang muncul di sini adalah yang perlu Anda ketahui.",
  "empty": {
    "title": "Tidak ada pemberitahuan yang diposting",
    "body": "Jika ada perubahan yang perlu diberitahukan kepada Anda, itu akan diposting di sini."
  },
  "effective": "Berlaku mulai {date}",
  "pager": {
    "label": "Halaman Pemberitahuan",
    "newer": "← Terbaru",
    "older": "Pemberitahuan Sebelumnya →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "Mimpi yang Anda berikan tidak disimpan.",
      "body": [
        "Cerita mimpi adalah nilai yang paling pribadi yang diterima layanan ini. Oleh karena itu, mereka tidak dicatat dalam tabel manapun. Input hanya dibawa dalam alamat hasil untuk perhitungan, dan setelah jendela ditutup, itu menghilang.",
        "Kami memutuskan untuk tidak membuat fitur yang mengumpulkan mimpi dan menunjukkan alur (diari mimpi). Ini adalah fitur yang berguna, tetapi untuk melakukannya, tulisan yang paling pribadi harus terus disimpan.",
        "Ketika Anda mengirim tautan hasil kepada orang lain, itu berisi konten mimpi. Harap berhati-hati saat membagikannya."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Hasil mencakup kamus simbol dan kriteria perhitungan.",
      "body": [
        "Dasar untuk interpretasi adalah kamus simbol mimpi tradisional. Hasil dan dokumen akan mencakup versi kamus tersebut (misalnya, 1.2.0) dan versi aturan pencocokan (misalnya dream-1.0.0). Mimpi yang sama akan selalu menghasilkan simbol yang sama berdasarkan kriteria yang sama.",
        "Jika kami menambahkan simbol ke kamus atau mengubah makna dengan cara yang dapat mengubah hasil, fakta ini akan disajikan di sini. Ini karena hasil yang Anda terima sebelumnya mungkin berubah.",
        "Kami tidak membuat makna tradisional yang tidak ada dalam kamus. Jika tidak ada simbol yang ditemukan, kami hanya menyatakan bahwa tidak ada yang ditemukan dan menyimpulkan."
      ]
    },
    "2026-08-06-conception": {
      "title": "Kami hanya memberi tahu Anda tentang mimpi konsepsi dan tidak membuat penilaian.",
      "body": [
        "Jika simbol yang secara tradisional dianggap sebagai mimpi konsepsi muncul dalam mimpi, kami akan memberi tahu Anda tentang fakta tersebut. Namun, kami tidak menentukan status kehamilan atau jenis kelamin anak — klaim semacam itu tidak memiliki dasar, dan penilaian medis adalah tanggung jawab institusi medis.",
        "Sebutannya tentang putra dan putri dalam narasi tradisional adalah refleksi dari kebiasaan yang telah diturunkan, dan itu tidak berarti bahwa kami memprediksinya dengan benar."
      ]
    }
  }
} satisfies NoticeCopy;
