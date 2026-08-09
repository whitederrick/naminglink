import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Bahasa Indonesia — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const ID_DOCS = {
  "about": {
    "eyebrow": "Pengantar",
    "title": "Pengantar ke Dreams-Link",
    "summary": "Ini adalah layanan yang menginterpretasikan mimpi menggunakan kamus simbol interpretasi mimpi tradisional. Ini menjelaskan apa yang digunakan sebagai dasar dan apa yang tidak disebutkan.",
    "backLabel": "Kembali ke Beranda",
    "sections": [
      {
        "title": "Apa yang kami lakukan?",
        "blocks": [
          {
            "p": "Dreams-Link menemukan **simbol yang digunakan dalam interpretasi mimpi tradisional** dari mimpi yang Anda tuliskan dan menunjukkan maknanya. Karena mimpi adalah sesuatu yang kita alami setiap hari, interpretasi yang ditampilkan di layar adalah **gratis dan tidak memerlukan keanggotaan.**"
          },
          {
            "p": "Satu-satunya hal yang dijual dengan biaya adalah **dua bentuk pelestarian** — sebuah gambar (kartu mimpi) yang berisi mimpi baik dan PDF yang menangkap latar belakang ketika simbol yang secara tradisional dianggap sebagai 태몽 muncul."
          }
        ]
      },
      {
        "title": "Apa dasar untuk interpretasi?",
        "blocks": [
          {
            "p": "Dasar untuk interpretasi adalah **kamus {symbolTotal} simbol**. Kami menemukan simbol dalam teks mimpi dan hanya menunjukkan makna yang tercatat dalam kamus untuk simbol-simbol tersebut. Jika sebuah simbol memiliki beberapa makna, kami memilih berdasarkan konteks — misalnya, memegang ular dan digigit secara tradisional dianggap sebagai kebalikan."
          },
          {
            "p": "Pencarian dilakukan **hanya sesuai dengan aturan tetap**. Jika itu adalah mimpi yang sama, simbol yang sama akan selalu muncul, dan interpretasi tidak akan berubah dari kemarin ke hari ini."
          }
        ]
      },
      {
        "title": "Apa yang tidak kami katakan?",
        "blocks": [
          {
            "p": "**Kami tidak menciptakan makna tradisional yang tidak ada dalam kamus.** Jika tidak ada simbol yang ditemukan, kami hanya menyatakan bahwa tidak ada yang ditemukan dan menyimpulkan. Mengisi ruang itu dengan kata-kata yang mungkin adalah apa yang paling diwaspadai oleh layanan ini."
          },
          {
            "p": "**Sebuah 태몽 hanyalah tanda, bukan penilaian.** Kami hanya memberi tahu Anda bahwa simbol yang secara tradisional dianggap sebagai 태몽 muncul dalam mimpi. Kami tidak memprediksi kehamilan atau jenis kelamin anak, dan tidak ada dasar untuk klaim semacam itu."
          },
          {
            "p": "Kami tidak **membuat pernyataan definitif tentang kesehatan, kekayaan, atau karier.** Ini adalah referensi dari perspektif interpretasi mimpi tradisional dan bukan nasihat medis, finansial, atau hukum."
          }
        ]
      },
      {
        "title": "Kami tidak menyimpan mimpi yang Anda tuliskan.",
        "blocks": [
          {
            "p": "Cerita mimpi adalah bagian paling pribadi dari apa yang diterima layanan ini. Oleh karena itu, kami **tidak menyimpannya.** Input hanya digunakan untuk perhitungan dan tidak dicatat di log server mana pun."
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
  "guide": {
    "eyebrow": "Dasar untuk Perhitungan",
    "title": "Apa dasar untuk perhitungan?",
    "summary": "Kami mengungkapkan semua aturan yang digunakan oleh Dreams-Link. Anda dapat memeriksa simbol mana yang ditemukan, apa yang tertulis dalam kamus — dari mana interpretasi yang ditampilkan di layar berasal.",
    "backLabel": "Kembali ke Beranda",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Semua angka yang tertulis di sini adalah **dibaca langsung dari kamus simbol dan aturan pencarian.** Karena kami tidak mentranskripsikan teks secara manual, jika kamus diperluas atau aturan diubah, angka dalam dokumen ini juga akan berubah."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Dasar untuk Layanan",
    "title": "Apa dasar dari kamus simbol?",
    "summary": "Ini menjelaskan dari mana interpretasi berasal. Kriteria untuk membagi 215 simbol menjadi sembilan kategori, alasan hanya 24 yang dapat dibuktikan, dan mengapa kami tidak mengisi kekosongan.",
    "backLabel": "Dasar untuk Interpretasi",
    "sections": [
      {
        "title": "Kami hanya menunjukkan apa yang tertulis dalam kamus.",
        "blocks": [
          {
            "p": "Interpretasi dari Dreams-Link berasal dari **kamus simbol yang telah ditulis sebelumnya**. Kami menemukan simbol dalam teks yang Anda berikan dan menunjukkan makna yang tercatat dalam kamus untuk simbol-simbol tersebut. Kami tidak menciptakan kata-kata yang tidak ada dalam kamus."
          },
          {
            "p": "Saat ini, kamus ini berisi **{symbolTotal} simbol**, dan simbol-simbol tersebut memiliki total **{meaningTotal} makna**. Sebagian besar simbol hanya memiliki satu makna, sementara beberapa memiliki beberapa tergantung pada konteks."
          }
        ]
      },
      {
        "title": "Dibagi menjadi sembilan kategori.",
        "blocks": [
          {
            "p": "Kami mengelompokkan apa yang muncul dalam mimpi menjadi sembilan kategori berdasarkan karakteristiknya. Angka dalam tanda kurung adalah jumlah saat ini."
          },
          {
            "ul": [
              "**Objek**({categoryThing}) · **Hewan**({categoryAnimal}) · **Alam**({categoryNature}) — tiga kategori terbesar. Interpretasi mimpi tradisional terutama membahas objek yang terlihat, hewan, dan elemen langit dan air.",
              "**Tindakan**({categoryAction}) · **Tubuh**({categoryBody}) — apa yang dilakukan, seperti dikejar atau jatuh, dan di mana di tubuh, seperti wajah atau rambut.",
              "**Orang**({categoryPerson}) · **Tempat**({categoryPlace}) · **Warna**({categoryColor}) · **Angka**({categoryNumber})"
            ]
          },
          {
            "p": "Untuk melihatnya berdasarkan kategori, Anda dapat melihat daftar lengkap di [kamus simbol](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Hanya {cultureNoteTotal} yang dapat dibuktikan.",
        "blocks": [
          {
            "p": "Di antara simbol-simbol tersebut, **{cultureNoteTotal}** memiliki alasan untuk interpretasi yang tertulis di sampingnya. Misalnya, alasan untuk membedakan antara gigi atas dan bawah dalam mimpi kehilangan gigi. Simbol-simbol yang tersisa memiliki ruang kosong."
          },
          {
            "p": "**Kami tidak mengisi ruang kosong.** Menambahkan asal yang mungkin akan membuat dokumen lebih tebal, tetapi pada saat itu, kamus ini tidak akan menyampaikan tradisi tetapi mengada-ada. Lebih jujur untuk membedakan antara apa yang dapat dan tidak dapat dibuktikan."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Alasan untuk tidak memperluas kamus secara sembarangan.",
        "blocks": [
          {
            "p": "Kami sebenarnya mencoba untuk memperluas simbol menjadi ratusan tetapi menyerah. Entri yang dihasilkan secara otomatis baik mengulangi frasa yang sama seperti 'romansa → hubungan baik' atau gagal memberikan asal yang dapat dibuktikan. Kami menyimpulkan bahwa **menemukan dengan akurat apa yang ada** lebih baik daripada sekadar meningkatkan angka."
          }
        ]
      },
      {
        "title": "Baik dan buruk ditentukan oleh kamus.",
        "blocks": [
          {
            "p": "Setiap simbol memiliki makna baik dan buruk. **Baik {polarityPositive}**, **ambivalen {polarityAmbivalent}**, **perhatian {polarityNegative}**, dan **netral {polarityNeutral}**."
          },
          {
            "p": "Fakta bahwa makna baik melebihi setengah bukan karena kami dermawan, tetapi karena interpretasi mimpi tradisional selalu seperti itu — simbol besar dan kuat seperti babi, naga, dan api umumnya dianggap sebagai pertanda baik. Namun, tidak semua mimpi diinterpretasikan secara positif. Nilai ini mencerminkan sifat masing-masing simbol, dan suasana keseluruhan mimpi dinilai kembali dengan mengumpulkan simbol-simbol yang ditemukan."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Dasar untuk Layanan",
    "title": "Cara menemukan simbol dalam cerita mimpi.",
    "summary": "Ini menjelaskan bagaimana simbol dipilih dari kalimat yang ditulis secara bebas dan bagaimana menyaring huruf yang secara tidak sengaja masuk ke dalam kata-kata seperti 'khusus'.",
    "backLabel": "Dasar untuk Interpretasi",
    "sections": [
      {
        "title": "Kami menemukan simbol dalam teks yang Anda berikan.",
        "blocks": [
          {
            "p": "Ketika Anda menuliskan cerita mimpi Anda secara bebas, kami mencari simbol dalam teks tersebut dari kamus. Anda tidak perlu memilih item atau menulis dalam format tertentu. Cukup tulis seperti biasa, seperti 'Tadi malam, seekor python besar melilit saya.'"
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
            "p": "Ini adalah aspek yang paling menantang dalam bahasa Korea. Di antara simbol-simbol, terdapat **{singleCharSymbolTotal} simbol satu karakter** seperti **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), yang sering muncul dalam kata-kata lain."
          },
          {
            "ul": [
              "**bintang** dari \"It was an ordinary day\"",
              "**hal** dalam \"I was chased by someone\"",
              "**kata** dalam \"That person said\" dan **perut** dalam \"I was hungry\""
            ]
          },
          {
            "p": "Menghitung ini sebagai simbol mengarah pada interpretasi yang tidak relevan. Oleh karena itu, kami memeriksa karakter di sekitarnya — jika **ada karakter Korea di depan**, kami menganggapnya sebagai fragmen dari sebuah kata dan tidak menghitungnya, dan kami membedakan apakah karakter yang terlampir di akhir adalah partikel atau akhiran, memungkinkan 「소가」 (soga) untuk diterima sementara menyaring 「소리」 (sori)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Inilah cara kerjanya",
        "blocks": [
          {
            "p": "Sebelum menerapkan aturan ini, saat menguji dengan dua belas kalimat nyata, **semua dua belas** mengandung simbol yang tidak relevan. Satu kalimat tanpa konten signifikan bahkan ditandai sebagai 태몽 (taemong)."
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
            "p": "Tidak ada tempat untuk kebetulan dalam aturan pencarian. Karena kamusnya tetap dan aturannya ditetapkan, jika Anda memasukkan kalimat yang sama lagi, **simbol yang sama akan muncul dalam urutan yang sama**. Interpretasi yang Anda lihat hari ini tidak akan berbeda dari yang Anda lihat besok."
          },
          {
            "p": "Kualitas ini juga merupakan janji yang telah kami buat untuk diri kami sendiri. Interpretasi yang berubah setiap kali itu menghibur tetapi kurang dasar. Ini terhubung dengan cerita [mengapa kami tidak menggunakan model](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Dasar Layanan",
    "title": "Alasan mengapa simbol yang sama memiliki makna yang berbeda",
    "summary": "Secara tradisional, memegang ular dan digigit oleh satu adalah kebalikan. Ini membahas struktur di mana 215 simbol memiliki 256 makna dan bagaimana menginterpretasikan situasi.",
    "backLabel": "Dasar Interpretasi",
    "sections": [
      {
        "title": "Bahkan jika simbolnya sama, situasi yang berbeda menghasilkan makna yang berbeda",
        "blocks": [
          {
            "p": "Dalam 해몽 (dream interpretation) tradisional, satu simbol tidak selalu memiliki satu makna. Bahkan untuk ular yang sama, **memegangnya dan digigit telah diinterpretasikan sebagai kebalikan yang lengkap.** Ini juga dicatat dalam kamus."
          },
          {
            "p": "Inilah sebabnya {symbolTotal} simbol memiliki total {meaningTotal} makna. Setiap makna mencakup **konteks di mana itu berlaku**, dan jika konteks itu terlihat dalam teks yang Anda berikan, kami memilih makna itu."
          }
        ]
      },
      {
        "title": "Bagaimana mengidentifikasi situasi",
        "blocks": [
          {
            "p": "Kami memeriksa apakah teks yang Anda berikan mengandung kata-kata yang menunjukkan situasi itu. Dalam 「뱀이 나를 물었다」 (baemi nareul mul-eotda), situasi menggigit dijelaskan, sementara dalam 「뱀을 품에 안았다」 (baemeul pume anatda), situasi memegang dijelaskan. Jika tidak ada kata yang menunjukkan situasi, kami menginterpretasikannya menggunakan **makna dasar** dari simbol itu."
          },
          {
            "p": "Oleh karena itu, saat menulis mimpi Anda, jika Anda menyertakan **tidak hanya apa yang muncul tetapi juga tindakan yang diambil**, interpretasinya akan lebih akurat. 「돼지를 봤다」 (dwaeji-reul bwatda) menyampaikan lebih sedikit daripada 「돼지가 집으로 들어왔다」 (dwaeji-ga jib-euro deureowatda)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Semakin banyak Anda menulis, semakin baik, tetapi tidak perlu menulis panjang",
        "blocks": [
          {
            "p": "Dua atau tiga kalimat sudah cukup. Menulis lebih panjang tidak berarti menemukan lebih banyak simbol; sebaliknya, jika kata-kata yang tidak terkait dicampur, simbol yang tidak relevan mungkin teridentifikasi."
          }
        ]
      },
      {
        "title": "Ada {contextSplitSymbolTotal} simbol dengan makna terpisah",
        "blocks": [
          {
            "p": "Di antara {symbolTotal} simbol dalam kamus, **{contextSplitSymbolTotal}** memiliki makna yang bervariasi tergantung pada situasi. Sisanya telah dibaca dalam satu arah terlepas dari situasi."
          },
          {
            "p": "Simbol-simbol {contextSplitSymbolTotal} ini adalah area yang paling hati-hati. Salah membaca situasi dapat menyebabkan menyampaikan kabar baik sebagai kabar buruk, atau sebaliknya. Oleh karena itu, jika situasinya tidak jelas, kami tidak **memilih satu sisi secara paksa dan sebaliknya mengikuti makna dasar** dari simbol itu — kami tidak ingin menyatakan sesuatu yang tidak pasti seolah-olah itu pasti."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perasaan saat bangun juga dipertimbangkan",
        "blocks": [
          {
            "p": "Perasaan dan pengulangan yang ditanyakan di bawah konten mimpi tidak digunakan untuk menemukan simbol. Mereka dirujuk saat memutuskan cara mana untuk menginterpretasikan dalam situasi dengan makna yang terpisah. Anda tidak perlu memilih; hasil tetap akan diberikan."
          }
        ]
      },
      {
        "title": "Suasana keseluruhan mimpi dihitung secara terpisah",
        "blocks": [
          {
            "p": "Jika beberapa simbol ditemukan, kami mengumpulkan apakah masing-masing simbol tersebut positif atau hati-hati untuk menentukan nada keseluruhan mimpi. Mimpi yang mencakup satu simbol baik dan satu simbol hati-hati tidak hanya disebut sebagai 'mimpi baik.'"
          },
          {
            "p": "Anda dapat melihat pratinjau berbagai simbol dan maknanya dalam [kamus simbol](/dream/symbols). Juga baik untuk melihat apa yang termasuk sebelum menulis mimpi Anda."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Dasar Layanan",
    "title": "Kriteria untuk membedakan 길몽 (mimpi baik) dan 흉몽 (mimpi buruk)",
    "summary": "Empat nilai yang diberikan untuk setiap simbol dan distribusinya, alasan mengapa yang positif melebihi setengah, dan mengapa kami mengkomunikasikan mimpi campuran sebagai campuran.",
    "backLabel": "Dasar Interpretasi",
    "sections": [
      {
        "title": "Setiap simbol diberikan salah satu dari empat nilai",
        "blocks": [
          {
            "p": "Di antara {symbolTotal} simbol dalam kamus, masing-masing dikategorikan sebagai salah satu dari berikut."
          },
          {
            "ul": [
              "**{polarityPositive} simbol positif** — yang diinterpretasikan sebagai peristiwa beruntung seperti kekayaan, perayaan, dan dermawan.",
              "**{polarityAmbivalent} simbol yang bervariasi tergantung pada situasi** — seperti ular, di mana makna dapat berbalik tergantung pada apa yang dilakukan. Kategori ini adalah yang paling hati-hati.",
              "**{polarityNegative} simbol hati-hati** — yang dianggap sebagai gosip, perselisihan, atau kerugian.",
              "**{polarityNeutral} simbol netral** — yang tidak baik maupun buruk dalam dirinya sendiri, seperti warna atau angka."
            ]
          }
        ]
      },
      {
        "title": "Alasan simbol positif melebihi setengah",
        "blocks": [
          {
            "p": "Ini bukan karena kami murah hati dalam penilaian kami. **Tradisional 해몽 (dream interpretation) selalu seperti ini.** Simbol besar dan kuat seperti babi, naga, api, dan air umumnya dianggap sebagai pertanda baik, dan kamus mencerminkan tradisi itu."
          },
          {
            "p": "Dengan demikian, fakta bahwa 'simbol baik muncul' tidak berarti 'hal baik akan terjadi.' Apa yang dapat kami sampaikan terbatas pada bagaimana simbol itu telah diinterpretasikan dalam tradisi."
          }
        ]
      },
      {
        "title": "Nada mimpi dikumpulkan dari simbol-simbolnya",
        "blocks": [
          {
            "p": "Jika beberapa simbol ditemukan, kami mengumpulkan keberuntungan masing-masing untuk menentukan nada keseluruhan mimpi. Jika hanya simbol positif yang muncul, itu adalah mimpi baik; jika hanya simbol hati-hati yang muncul, itu adalah mimpi hati-hati; jika **campuran, kami mengkomunikasikannya sebagai campuran.**"
          },
          {
            "p": "Kami tidak memaksakan pengkategorian simbol campuran ke satu sisi. Sebenarnya, mimpi yang dimiliki orang sering kali campuran, dan merangkumnya sebagai 'mimpi baik' tidak akurat maupun tidak membantu."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kata-kata yang Tidak Perlu Digunakan",
        "blocks": [
          {
            "p": "Jangan membuat pernyataan definitif tentang apa yang akan terjadi, kapan itu akan terjadi, atau mengenai kesehatan dan kekayaan. Menyampaikan makna simbol yang diwariskan melalui tradisi berbeda dari meramalkan masa depan."
          }
        ]
      },
      {
        "title": "Ketika Mimpi Peringatan Muncul",
        "blocks": [
          {
            "p": "Even if a symbol interpreted as caution appears, it is not necessarily bad news. In traditional dream interpretation, an ominous dream has generally been used as **a statement pointing to the situation at hand**. If a symbol that suggests conflict appears, it can be read as a reminder to hold back on words."
          },
          {
            "p": "Untuk alasan yang sama, layanan ini tidak menjual jimat atau pesona. Yang dijual hanya [dua cara untuk menjaga mimpi Anda](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Mimpi Konsepsi",
    "title": "Cara Menginterpretasikan Mimpi Konsepsi",
    "summary": "Ini mengungkapkan bagaimana menentukan 27 simbol mimpi konsepsi, mengapa tidak semua mimpi babi dianggap sebagai mimpi konsepsi, dan prinsip yang tidak meramalkan kehamilan atau jenis kelamin.",
    "backLabel": "Dasar Interpretasi",
    "sections": [
      {
        "title": "Pertama, Perjelas Ini",
        "blocks": [
          {
            "p": "**Dreams-Link tidak menentukan status kehamilan. Ini juga tidak menunjukkan jenis kelamin anak.** Ini adalah hal-hal yang tidak dapat diketahui melalui mimpi, dan bukan sesuatu yang dapat kami lakukan."
          },
          {
            "p": "Apa yang dapat kami katakan terbatas pada ini — **fakta bahwa simbol yang secara tradisional dianggap sebagai mimpi konsepsi muncul dalam mimpi ini.** Itu saja yang ada dalam cara nenek moyang kami menginterpretasikan simbol tersebut."
          }
        ]
      },
      {
        "title": "Ada {conceptionSymbolTotal} simbol yang dianggap sebagai Mimpi Konsepsi",
        "blocks": [
          {
            "p": "Di antara {symbolTotal} simbol dalam kamus, **{conceptionSymbolTotal}** ditandai sebagai mimpi konsepsi. Ada banyak hewan seperti naga, babi, dan ular, serta buah-buahan seperti persik dan kastanye, dan matahari serta bulan juga termasuk."
          },
          {
            "p": "Namun, **munculnya simbol tersebut tidak serta merta berarti itu adalah mimpi konsepsi.** Di sinilah layanan ini telah berusaha."
          }
        ]
      },
      {
        "title": "Penilaian Berdasarkan Makna Aktual, Bukan Simbol",
        "blocks": [
          {
            "p": "Babi adalah simbol mimpi konsepsi dan pada saat yang sama **mewakili mimpi kekayaan.** Jika dianggap sebagai mimpi konsepsi hanya karena simbol tersebut muncul, maka setiap orang yang bermimpi tentang babi akan memiliki mimpi konsepsi. Pada kenyataannya, itu sebagian besar diinterpretasikan sebagai mimpi kekayaan."
          },
          {
            "p": "Oleh karena itu, kami melihat **makna aktual yang diperoleh dari simbol tersebut, bukan simbol itu sendiri.** Kami hanya menandainya sebagai mimpi konsepsi ketika makna yang condong ke arah konsepsi dipilih dalam situasi yang Anda berikan. Bahkan dengan babi yang sama, penilaian berubah jika konteksnya berbeda."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jika Anda Menyebutkan Kehamilan, Kami Melihat Itu Terlebih Dahulu",
        "blocks": [
          {
            "p": "Jika tulisan Anda mencakup kata-kata seperti kehamilan, mimpi konsepsi, atau kelahiran, kami terlebih dahulu melihat makna simbol yang condong ke arah konsepsi. Bahkan dengan mimpi babi yang sama, cara nenek moyang kami menginterpretasikannya bervariasi tergantung pada situasi saat ini."
          }
        ]
      },
      {
        "title": "Alasan Memisahkan Laporan Mimpi Konsepsi",
        "blocks": [
          {
            "p": "Mimpi konsepsi memiliki tujuan yang berbeda dari mimpi lainnya. Mereka sering dibicarakan bahkan setelah anak lahir dan dibagikan di antara anggota keluarga. Oleh karena itu, daripada hanya melihatnya di layar, kami membuat **dokumen terpisah yang dapat disimpan.**"
          },
          {
            "p": "Apa yang termasuk dicatat dalam [dua cara untuk menjaga mimpi Anda](/guide/reports). Anda dapat melihat semua interpretasi tanpa membeli apa yang Anda lihat di layar."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Cara Menggunakan",
    "title": "Cara Menulis Mimpi Anda dengan Efektif",
    "summary": "Jika Anda mencatat apa yang Anda lihat dan lakukan, itu akan diinterpretasikan dengan baik. Ini menjelaskan mengapa satu kata kerja dapat menentukan makna dan mengapa kami bertanya tentang perasaan dan pengulangan.",
    "backLabel": "Dasar Interpretasi",
    "sections": [
      {
        "title": "Silakan Tulis Apa yang Anda Lihat dan Lakukan",
        "blocks": [
          {
            "p": "Tidak ada format khusus. Beberapa kalimat seperti yang biasanya Anda ucapkan sudah cukup. Namun, apa yang berhasil ditentukan — **apa yang terlihat** dan **apa yang terjadi.**"
          },
          {
            "ul": [
              "Berhasil — 「Ular besar melilit saya」, 「Saya melihat air jernih mengalir」, 「Saya jatuh dari tempat yang tinggi」",
              "Tidak berhasil — 「Saya merasa takut」, 「Saya merasa aneh」, 「Saya merasa seperti seseorang membenci saya」"
            ]
          },
          {
            "p": "Jika Anda hanya mencatat perasaan, tidak akan ada simbol yang dapat ditemukan. Ini karena **dream interpretation** tradisional berbicara tentang [objek dan tindakan](/guide/categories), bukan emosi."
          }
        ]
      },
      {
        "title": "Menulis Apa yang Anda Lakukan Membuatnya Lebih Akurat",
        "blocks": [
          {
            "p": "Bahkan dengan simbol yang sama, ada {contextSplitSymbolTotal} kasus di mana makna berbeda tergantung pada situasi. Secara tradisional, memegang ular dan digigit telah diinterpretasikan sebagai kebalikan."
          },
          {
            "p": "Dengan demikian, 「Saya melihat babi」 kurang akurat daripada 「Babi masuk ke rumah」, dan 「Ada air」 kurang akurat daripada 「Saya minum air jernih.」 **Satu kata kerja menentukan makna.**"
          }
        ]
      },
      {
        "title": "Mengapa Kami Bertanya tentang Perasaan dan Pengulangan",
        "blocks": [
          {
            "p": "Di bawah konten mimpi, ada tempat untuk memilih **perasaan saat Anda bangun** dan **apakah Anda telah mengulangi mimpi yang sama.** Anda tidak perlu memilih keduanya agar hasil dapat diberikan."
          },
          {
            "p": "Nilai-nilai ini tidak digunakan untuk menemukan simbol. Mereka dirujuk saat menentukan **makna mana yang dipilih** dari simbol yang sama dan bagaimana menyampaikan hasilnya."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dalam Kasus di Mana Anda Menyebutkan Kehamilan",
        "blocks": [
          {
            "p": "Jika tulisan Anda mencakup kata-kata seperti kehamilan, mimpi konsepsi, atau kelahiran, kami terlebih dahulu melihat makna simbol yang condong ke arah konsepsi. Bahkan dengan mimpi babi yang sama, cara nenek moyang kami menginterpretasikannya bervariasi tergantung pada situasi saat ini — [cara menginterpretasikan mimpi konsepsi](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Tidak Perlu Menulis Teks Panjang",
        "blocks": [
          {
            "p": "Teks yang lebih panjang tidak berarti lebih banyak simbol akan ditemukan. Sebaliknya, jika kata-kata yang tidak relevan dicampur dalam panjang, ada kemungkinan lebih besar bahwa kata-kata yang tidak terkait akan diinterpretasikan sebagai simbol. **Silakan tulis hanya adegan yang Anda ingat.**"
          },
          {
            "p": "Teks yang Anda berikan tidak disimpan di mana pun. Alasan Anda dapat menulis dengan bebas dicatat dalam [metode tidak menyimpan](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Dasar Layanan",
    "title": "Kriteria yang Dibagi Menjadi Sembilan Kategori",
    "summary": "Dari objek, hewan, dan alam hingga warna dan angka, ada sembilan kategori dan alasan untuk tidak menyertakan kategori emosional.",
    "backLabel": "Dasar Interpretasi",
    "sections": [
      {
        "title": "Simbol dalam Mimpi Dibagi Menjadi Sembilan Kategori",
        "blocks": [
          {
            "p": "{symbolTotal} simbol dikelompokkan menjadi sembilan kategori berdasarkan karakteristiknya. Kriteria untuk pembagian adalah **bagaimana mereka muncul dalam mimpi** — apakah sebagai hewan, objek, atau tindakan yang saya lakukan."
          },
          {
            "ul": [
              "**Objek {categoryThing}** — Barang-barang nyata seperti uang, cermin, dan pisau. Ini adalah kategori yang paling tebal.",
              "**Hewan {categoryAnimal}** — naga·babi·ular·sapi. Banyak dari ini dianggap sebagai 태몽 (mimpi konsepsi).",
              "**Alam {categoryNature}** — hal-hal yang besar dan kuno seperti air·api·matahari·bulan·gunung.",
              "**Aksi {categoryAction}** — hal-hal yang dilakukan dalam mimpi seperti dikejar·jatuh·terbang.",
              "**Tubuh {categoryBody}** — gigi·rambut·darah. Makna bervariasi tergantung pada bagian tubuh mana itu.",
              "**Orang {categoryPerson}** · **Tempat {categoryPlace}** · **Warna {categoryColor}** · **Angka {categoryNumber}**"
            ]
          }
        ]
      },
      {
        "title": "Mengapa tidak ada kategori emosi?",
        "blocks": [
          {
            "p": "Kategori seperti 「kecemasan」·「kerinduan」 tidak termasuk. **Ini karena 해몽 tradisional (interpretasi mimpi) tidak membahas emosi.** Interpretasi lama berfokus pada apa yang terlihat dan apa yang terjadi, bukan pada perasaan si pemimpi."
          },
          {
            "p": "Saya telah mencoba untuk membuat kategori emosi, tetapi hasilnya adalah istilah seperti 「kehilangan kasih sayang」·「stabilitas emosional」. Ini bukan **simbol** dari mimpi tetapi kosakata dari psikologi modern. Itu adalah jenis layanan yang berbeda dan bukan yang ingin dicapai oleh kamus ini."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jadi ketika Anda menulis",
        "blocks": [
          {
            "p": "Silakan tuliskan **apa yang Anda lihat dan lakukan** daripada perasaan; itu akan menghasilkan hasil yang jauh lebih baik. Namun, saya akan menanyakan tentang perasaan Anda saat bangun secara terpisah — bahkan simbol yang sama dapat memiliki makna yang berbeda tergantung pada situasinya."
          }
        ]
      },
      {
        "title": "Warna dan angka tidak berdiri sendiri",
        "blocks": [
          {
            "p": "Warna {categoryColor} dan angka {categoryNumber} tidak memiliki makna baik atau buruk yang melekat. Sama seperti ular putih dan ular hitam berbeda, maknanya berubah tergantung pada **apa yang mereka kaitkan**. Oleh karena itu, kedua kategori ini dipertimbangkan bersamaan dengan simbol lainnya."
          },
          {
            "p": "Daftar lengkap berdasarkan kategori tersedia di [Kamus Simbol](/dream/symbols). Membuka simbol akan menunjukkan makna yang ditransmisikan, kategori, dan simbol terkait."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Cara menggunakan",
    "title": "Ketika simbol tidak dapat ditemukan",
    "summary": "Jika Anda tidak dapat menemukannya, saya akan memberi tahu Anda bahwa itu tidak ditemukan. Saya akan membahas mengapa itu tidak dapat ditemukan, apa yang akan saya tunjukkan sebagai gantinya di layar itu, dan bagaimana kamus diperluas.",
    "backLabel": "Dasar interpretasi",
    "sections": [
      {
        "title": "Ketika tidak ditemukan, saya akan memberi tahu Anda bahwa itu tidak ditemukan",
        "blocks": [
          {
            "p": "Jika saya tidak dapat menemukan simbol apa pun dalam teks yang Anda berikan, saya akan **memberitahu Anda bahwa itu tidak ditemukan.** Saya tidak akan memaksakan untuk mengaitkannya dengan sesuatu yang serupa atau membuat kalimat yang masuk akal untuk mengisi ruang."
          },
          {
            "p": "Ini adalah hal yang paling hati-hati dilakukan oleh layanan ini. Saat saya mengisi kekosongan, itu bertentangan dengan pernyataan untuk menyampaikan interpretasi."
          }
        ]
      },
      {
        "title": "Mengapa tidak dapat ditemukan?",
        "blocks": [
          {
            "p": "Biasanya, itu adalah salah satu dari yang berikut."
          },
          {
            "ul": [
              "**Ini adalah simbol yang belum ada dalam kamus.** Saat ini, ada {symbolTotal} simbol yang terdaftar, tetapi masih banyak lagi yang bisa muncul dalam mimpi.",
              "**Anda hanya menulis perasaan.** Jika hanya ada emosi seperti 「saya merasa takut」·「saya merasa aneh」, tidak ada simbol yang dapat dicocokkan. 해몽 tradisional berbicara tentang **objek dan tindakan yang terlihat** daripada emosi.",
              "**Terlalu pendek.** Lebih baik menulis dalam kalimat daripada satu atau dua kata."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ketika Anda mencoba menulis lagi",
        "blocks": [
          {
            "p": "Silakan sertakan **apa yang Anda lihat dan apa yang Anda lakukan** dalam mimpi. Mengatakan 「saya merasa cemas」 kurang efektif dibandingkan dengan mengatakan 「saya jatuh dari tempat yang tinggi」, dan mengatakan 「saya menyukainya」 kurang efektif dibandingkan dengan mengatakan 「saya melihat air jernih mengalir」."
          }
        ]
      },
      {
        "title": "Saya tidak meninggalkan layar kosong",
        "blocks": [
          {
            "p": "Ketika sesuatu tidak dapat ditemukan, saya juga akan menunjukkan **{popularSymbolCount} simbol yang sering dicari** di layar itu. Ini dipilih dari kamus berdasarkan representativitasnya, yang dapat membantu Anda mengingat jika salah satunya muncul dalam mimpi Anda."
          },
          {
            "p": "Jika Anda ingin menjelajahi seluruh daftar, ada {symbolTotal} simbol yang diorganisir berdasarkan kategori di [Kamus Simbol](/dream/symbols). Setiap simbol mencakup makna yang ditransmisikan dan simbol terkait."
          }
        ]
      },
      {
        "title": "Bagaimana kamus akan diperluas di masa depan?",
        "blocks": [
          {
            "p": "Daripada meningkatkan jumlah, saya fokus pada **mengidentifikasi dengan akurat apa yang sudah ada.** Saya telah menyertakan {aliasTotal} nama alternatif untuk simbol yang sama, dan saya telah membuatnya mungkin untuk mengenali kata-kata yang berubah bentuk dengan akhiran."
          },
          {
            "p": "Saat memperluas simbol itu sendiri, saya hanya akan menyertakan yang dapat **memberikan bukti yang ditransmisikan.** Meningkatkan jumlah tanpa bukti menjadi penciptaan daripada kamus — saya telah mendokumentasikan upaya dan hasilnya di [Mengapa saya tidak menggunakan model](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Dasar layanan",
    "title": "Alasan tidak menggunakan kecerdasan buatan dalam 해몽",
    "summary": "Tidak ada kode yang memanggil model dalam proses pembuatan interpretasi. Saya telah meninggalkan upaya untuk memperluas kamus menggunakan model berdasarkan hasil empiris, dan dengan demikian apa yang diperoleh dan apa yang dikorbankan.",
    "backLabel": "Dasar interpretasi",
    "sections": [
      {
        "title": "Kecerdasan buatan tidak digunakan dalam 해몽",
        "blocks": [
          {
            "p": "Banyak layanan 해몽 saat ini menunjukkan teks yang dihasilkan dengan memasukkan cerita mimpi ke dalam model generatif. Dreams-Link tidak melakukan itu. **Tidak ada kode yang memanggil model dalam proses pembuatan interpretasi.**"
          },
          {
            "p": "Apa yang saya lakukan sederhana. Saya menemukan simbol dalam teks yang Anda berikan yang ada dalam kamus dan memilih serta menunjukkan makna yang telah ditulis oleh kamus untuk simbol-simbol tersebut. Tidak ada tempat untuk kalimat yang tidak ada dalam kamus."
          }
        ]
      },
      {
        "title": "Mengapa keputusan ini dibuat?",
        "blocks": [
          {
            "p": "**Model tidak mengatakan bahwa mereka tidak tahu apa yang tidak mereka ketahui.** Ketika ditanya tentang simbol tanpa bukti yang ditransmisikan, mereka membuat asal yang masuk akal. Dan apakah itu dibuat atau tidak adalah sesuatu yang tidak dapat dibedakan oleh pembaca. Jika satu menciptakan di tempat menyampaikan tradisi, premis layanan ini runtuh."
          },
          {
            "p": "Saya sebenarnya telah mencoba untuk membuat model menciptakan simbol untuk memperluas kamus. Dari enam puluh enam contoh yang layak dipertimbangkan, **lima puluh lima tidak dapat memberikan bukti yang ditransmisikan**, dan beberapa termasuk hal-hal yang tidak dapat ada dalam 해몽 tradisional, seperti kereta bawah tanah dan jalan raya. Oleh karena itu, **tidak ada yang disertakan.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hal yang sama juga berlaku bahkan dengan model yang lebih besar",
        "blocks": [
          {
            "p": "Ketika saya mencoba tugas yang sama dengan model yang lebih baik, hanya satu dari sembilan belas yang lulus, dan yang satu itu hanya pengulangan kata-kata yang sama di posisi bukti. Model yang lebih besar hanya berbicara **lebih masuk akal** tentang apa yang tidak mereka ketahui."
          }
        ]
      },
      {
        "title": "Manfaat tidak menggunakan model",
        "blocks": [
          {
            "ul": [
              "**Jika itu mimpi yang sama, interpretasi yang sama akan muncul.** Kata-katanya tidak berubah setiap kali.",
              "**Ini cepat.** Tidak ada menunggu respons model, jadi hasilnya disampaikan segera.",
              "**Mimpi yang Anda berikan tidak keluar.** Tidak perlu mengirimnya ke server perusahaan eksternal — silakan baca bersama [metode tidak menyimpan](/guide/no-storage).",
              "**Ini dapat ditawarkan secara gratis.** Mimpi adalah sesuatu yang kita impikan setiap hari, jadi ada banyak pertanyaan. Jika model dipanggil untuk setiap pertanyaan, biayanya harus ditanggung di suatu tempat."
            ]
          }
        ]
      },
      {
        "title": "Apa yang dikorbankan sebagai gantinya",
        "blocks": [
          {
            "p": "Kami tidak dapat menginterpretasikan apa yang tidak ada dalam kamus. Jika sebuah model telah digunakan, apa pun yang Anda tulis akan menghasilkan jawaban yang masuk akal. Kami memilih sisi yang **mengatakan bahwa itu tidak dapat ditemukan ketika itu tidak dapat ditemukan**. Apa yang kami tunjukkan pada saat itu ditulis dalam [ketika simbol tidak dapat ditemukan](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produk Berbayar",
    "title": "Dua Cara untuk Menyimpan Mimpi Anda",
    "summary": "Interpretasi itu sendiri tidak dikenakan biaya. Kami menjelaskan apa dua hal yang kami jual, apa isinya, dan mengapa itu bukan interpretasi yang lebih baik.",
    "backLabel": "Dasar Interpretasi",
    "sections": [
      {
        "title": "Interpretasi itu sendiri tidak dikenakan biaya",
        "blocks": [
          {
            "p": "Menuliskan mimpi Anda dan melihat simbol-simbol yang ada **tidak memerlukan biaya dan tidak memerlukan keanggotaan.** Karena orang bermimpi setiap hari, kami memutuskan bahwa ruang ini harus gratis."
          },
          {
            "p": "**Dua hal yang kami jual bukanlah interpretasi yang lebih baik.** Mereka adalah **dua cara untuk menyimpan interpretasi yang sama.** Konten yang Anda lihat di layar tidak berubah setelah pembayaran."
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
            "p": "Ini ditujukan bagi mereka yang merasa menyesal ketika mimpi baik menghilang setelah menutup layar. Karena kami tidak menyimpan mimpi, jika Anda ingin menyimpannya, ini adalah satu-satunya cara untuk mengambilnya."
          }
        ]
      },
      {
        "title": "Laporan 태몽 — Dokumen {conceptionPages} Halaman",
        "blocks": [
          {
            "p": "Untuk mimpi yang menunjukkan simbol yang diinterpretasikan sebagai 태몽 (mimpi konsepsi), kami membuat **dokumen {conceptionPages} halaman.** Ini mencakup simbol-simbol yang muncul, bagaimana simbol-simbol tersebut telah diinterpretasikan secara tradisional, dan tempat untuk mencatatnya."
          },
          {
            "p": "Karena 태몽 sering dibahas dan dibagikan di antara anggota keluarga bahkan setelah anak lahir, kami membuat dokumen terpisah untuk mimpi yang terlalu berharga untuk hanya dilihat di layar."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kata-kata yang Tidak Diucapkan Di Sini Juga",
        "blocks": [
          {
            "p": "Kami tidak menentukan status kehamilan atau jenis kelamin anak. Pernyataan semacam itu tidak muncul dalam dokumen. Untuk detail, lihat [cara menginterpretasikan 태몽](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Mengapa Tidak Ada Lagi Dokumen",
        "blocks": [
          {
            "p": "Layanan saudara menyediakan laporan sembilan halaman. Mesin saju mengekstrak banyak nilai hanya dari satu tanggal lahir. Interpretasi mimpi tidak bekerja seperti itu."
          },
          {
            "p": "Simbol-simbol yang terdaftar dalam kamus berjumlah {symbolTotal}, dan sebagian besar dari mereka memiliki **satu makna masing-masing.** Untuk memperpanjang itu menjadi sembilan halaman, kami harus menulis makna tradisional yang tidak ditemukan dalam materi mana pun, dan itulah yang telah diputuskan oleh layanan ini untuk tidak dilakukan. Oleh karena itu, dokumen ini hanya sepanjang yang diizinkan oleh materi secara jujur, dan tidak lebih."
          }
        ]
      },
      {
        "title": "Harga dan Status Penjualan",
        "blocks": [
          {
            "p": "Harga terdaftar dalam [panduan harga](/pricing). Alasan dokumen ini tidak mencantumkan jumlah adalah disengaja — untuk mencegah situasi di mana dokumen panduan tetap dengan jumlah lama ketika harga berubah. Layar dan syarat semua membaca jumlah yang sama dari satu tempat."
          },
          {
            "p": "Dokumen yang Anda beli dapat **diperoleh lagi dengan pesanan yang sama.** Namun, karena kami tidak menyimpan file, setelah Anda meninggalkan layar hasil, Anda tidak dapat membuatnya kembali — harap simpan file yang Anda terima."
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
            "p": "Cerita mimpi adalah nilai yang paling pribadi dari layanan ini. Inilah sebabnya mengapa aturannya lebih ketat dari yang diperlukan — kami bahkan tidak mengatur ruang untuk menuliskan apa yang Anda kirim."
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
            "p": "Apa yang mengikuti **#** adalah nilai input. Bagian ini disebut **fragmen**, yang merupakan **bagian yang tidak dikirimkan browser ke server.** Ini adalah perilaku web standar dan bukan aturan yang kami buat — itu awalnya dirancang untuk menunjukkan lokasi dalam dokumen, jadi server tidak perlu melihatnya."
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
            "p": "Perhitungan itu sendiri dilakukan di server. Menemukan simbol memerlukan seluruh kamus, dan kamus itu terlalu besar untuk dikirim ke browser. Menyimpan kamus di server juga berarti bahwa ketika kesalahan diperbaiki, itu tercermin untuk semua orang sekaligus. Namun, **setelah memproses permintaan, nilai itu tidak digunakan di mana pun.** Tidak ada kode untuk menyisipkannya ke dalam basis data."
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
            "p": "Sejujurnya, ada hal-hal yang telah kami korbankan karena kami tidak menyimpan data."
          },
          {
            "ul": [
              "**Tidak ada buku harian mimpi.** Anda tidak dapat mengambil interpretasi dari minggu lalu, dan Anda harus memiliki tautan untuk melihatnya lagi. Ini dilakukan dengan sengaja — untuk membuat buku harian, tulisan yang paling pribadi harus disimpan secara terus-menerus.",
              "**Menemukan nilai yang sama lagi.** Tidak ada cache. Sebagai gantinya, kamus tetap, dan aturan pencocokan bersifat deterministik, sehingga teks yang sama akan selalu menghasilkan simbol yang sama — aturan menggantikan apa yang dijamin oleh cache.",
              "**Menyegarkan akan membawa gerbang iklan lagi.** Ini karena tidak ada tempat untuk meninggalkan catatan tampilan."
            ]
          }
        ]
      },
      {
        "title": "Dalam hal pembelian",
        "blocks": [
          {
            "p": "Jika Anda membeli laporan, catatan transaksi akan disimpan pada saat itu. Pembayaran memiliki periode retensi yang ditentukan secara hukum, dan tanpa riwayat pesanan, pengembalian dana tidak dapat diproses. Namun, meskipun demikian, **konten mimpi yang ditulis dalam interpretasi tidak terlampir pada pesanan** — itu diterima lagi dan ditulis pada saat itu saat membuat dokumen setelah konfirmasi pembayaran."
          },
          {
            "p": "Untuk detail, silakan lihat [kebijakan privasi](/privacy)."
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
    "summary": "Ini adalah saluran untuk pertanyaan tentang penggunaan, pengembalian dana, permintaan informasi pribadi, dan laporan kesalahan, serta informasi bisnis.",
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
              "**Pembayaran dan Pengembalian Dana** — Jika dokumen belum dibuat atau jumlah pembayaran berbeda dari pesanan, pengembalian dana penuh akan diberikan. Ketentuan ada di [kebijakan pengembalian](/refund-policy).",
              "**Informasi Pribadi** — Kami menerima permintaan untuk akses, koreksi, dan penghapusan. Kebijakan pemrosesan ada di [kebijakan privasi](/privacy).",
              "**Laporkan Kesalahan Interpretasi** — Jika simbol ditemukan tidak benar atau interpretasinya tampak aneh, silakan beri tahu kami. Jika Anda menyertakan kapan Anda menulis cerita mimpi itu, kami dapat mencarinya lagi dengan teks yang sama."
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
            "p": "Anda tidak perlu menulis ulang mimpi yang Anda berikan dalam email pertanyaan. Kami tidak menyimpan input, jadi kami tidak dapat mencarinya lagi, dan nomor pesanan sudah cukup untuk verifikasi. Silakan tulis hanya jika sangat diperlukan, seperti untuk melaporkan kesalahan interpretasi."
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
            "p": "Meskipun ini sering dibahas dalam layanan interpretasi mimpi, kami tidak melakukannya. **Tidak ada dasar dalam interpretasi mimpi tradisional untuk menarik nomor dari mimpi.** Meskipun ada catatan tentang menginterpretasikan mimpi babi sebagai kekayaan, tidak ada aturan dalam literatur mana pun yang menghasilkan enam nomor dari itu."
          },
          {
            "p": "Untuk membuatnya, kami harus mengarangnya, dan pada saat itu, layanan ini tidak lagi menjadi tempat untuk menyampaikan interpretasi yang diwariskan oleh tradisi. Ini sangat mengkhawatirkan karena dapat menyebabkan kerugian finansial."
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
            "p": "Kami hanya akan menyatakan bahwa simbol yang diinterpretasikan sebagai 태몽 (mimpi konsepsi) telah muncul. Apakah Anda hamil atau apakah anak tersebut perempuan atau laki-laki **bukan sesuatu yang dapat diketahui melalui mimpi.** Pernyataan semacam itu tidak muncul di layar atau dalam dokumen berbayar."
          }
        ]
      },
      {
        "title": "Kami tidak menjual jimat atau jimat",
        "blocks": [
          {
            "p": "Hanya karena simbol diinterpretasikan sebagai peringatan tidak berarti ada alasan untuk membeli sesuatu. An 흉몽 (mimpi buruk) secara tradisional digunakan untuk **menunjukkan situasi yang perlu diperiksa sekarang**, bukan untuk membayar agar menghindari sesuatu."
          },
          {
            "p": "Kami tidak menciptakan kecemasan untuk menjual sesuatu berdasarkan itu. Satu-satunya hal yang kami jual adalah dua yang disebutkan di atas, dan keduanya tidak memberikan interpretasi tambahan tetapi lebih kepada **cara untuk menyimpan konten yang sama.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kami tidak membuat pernyataan definitif tentang masa depan",
        "blocks": [
          {
            "p": "Kami tidak membuat pernyataan definitif tentang apakah sesuatu akan terjadi, kapan itu akan terjadi, atau mengenai kesehatan, kekayaan, atau umur panjang. Menyampaikan makna simbol tradisional dan meramalkan masa depan adalah dua hal yang berbeda."
          }
        ]
      },
      {
        "title": "Kami tidak membuat interpretasi yang tidak ada",
        "blocks": [
          {
            "p": "Untuk simbol yang tidak ada dalam kamus, kami akan **menyatakan bahwa kami tidak dapat menemukannya.** Kami tidak menggabungkan yang serupa atau mengisi ruang dengan kalimat yang masuk akal. Oleh karena itu, layanan ini tidak [menggunakan kecerdasan buatan untuk interpretasi mimpi](/guide/no-ai). Model tidak mengatakan bahwa ia tidak tahu apa yang tidak diketahuinya."
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
  "intro": "Perubahan pada syarat penggunaan Anda — harga, kebijakan — diposting di sini sebelum mereka berlaku. Perbaikan internal seperti layar yang menjadi lebih cepat tidak diposting di sini: apa yang muncul di sini adalah apa yang perlu Anda ketahui.",
  "empty": {
    "title": "Tidak ada pengumuman yang diposting",
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
        "Kami memutuskan untuk tidak membuat fitur yang mengumpulkan mimpi dan menunjukkan alur (diari mimpi). Ini adalah fitur yang berguna, tetapi untuk melakukannya, tulisan yang paling pribadi harus disimpan secara terus-menerus.",
        "Ketika Anda mengirimkan tautan hasil kepada orang lain, itu berisi konten mimpi. Harap berhati-hati saat membagikannya."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Hasil mencakup kamus simbol dan kriteria perhitungan.",
      "body": [
        "Dasar untuk interpretasi adalah kamus simbol 해몽 (dream interpretation) tradisional. Hasil dan dokumen akan mencakup versi kamus tersebut (misalnya, 1.2.0) dan kriteria untuk menemukan aturan (misalnya, dream-1.0.0). Mimpi yang sama akan selalu menghasilkan simbol yang sama berdasarkan kriteria yang sama.",
        "Jika penambahan simbol atau perubahan makna sebelumnya dapat mengubah hasil, fakta ini disajikan di sini. Ini karena hasil yang Anda terima sebelumnya mungkin berubah.",
        "Kami tidak membuat makna tradisional yang tidak ada dalam kamus. Jika tidak ada simbol yang ditemukan, kami hanya menyatakan bahwa tidak ada yang ditemukan dan menyimpulkan."
      ]
    },
    "2026-08-06-conception": {
      "title": "Kami hanya memberi tahu Anda tentang 태몽 dan tidak membuat penilaian.",
      "body": [
        "Jika simbol yang secara tradisional dianggap sebagai 태몽 muncul dalam mimpi, kami akan memberi tahu Anda tentang fakta itu. Namun, kami tidak menentukan status kehamilan atau jenis kelamin anak — klaim semacam itu tidak memiliki dasar, dan penilaian medis adalah tanggung jawab institusi medis.",
        "Sebutannya tentang putra dan putri dalam narasi tradisional adalah refleksi dari adat yang telah diturunkan, dan itu tidak berarti bahwa kami memprediksi dengan benar."
      ]
    }
  }
} satisfies NoticeCopy;
