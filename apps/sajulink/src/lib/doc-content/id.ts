import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Bahasa Indonesia — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const ID_DOCS = {
  "about": {
    "eyebrow": "Pendahuluan",
    "title": "Pendahuluan Saju-Link",
    "summary": "Ini adalah layanan yang menetapkan saju (bacaan empat pilar) berdasarkan tanggal dan waktu lahir Anda dan menjelaskan apa arti delapan karakter tersebut. Ini menjelaskan apa yang dihitung dan apa yang tidak.",
    "backLabel": "Kembali ke Beranda",
    "sections": [
      {
        "title": "Apa yang kami lakukan?",
        "blocks": [
          {
            "p": "Saju-Link menetapkan **grafik saju (empat pilar) berdasarkan tanggal dan waktu lahir Anda dan menunjukkan apa arti delapan karakter tersebut**. Ini membaca kekuatan dari lima elemen dan kekuatan pilar hari, serta memeriksa keberuntungan hari ini berdasarkan batang hari."
          },
          {
            "p": "Apa yang Anda lihat di layar adalah **gratis dan tidak memerlukan keanggotaan.** Produk berbayar adalah dokumen PDF yang berisi nilai-nilai yang tidak ditampilkan di layar — dasar untuk membedakan antara pilar hari yang kuat dan pilar hari yang lemah, Wang Sang Hyu Su Sa, dan rincian koreksi untuk waktu matahari yang sebenarnya."
          }
        ]
      },
      {
        "title": "Apa yang kami hitung?",
        "blocks": [
          {
            "p": "Saju ditetapkan menggunakan **manseyeok (almanak lunisolar Korea)**. Waktu lahir dikoreksi ke **waktu matahari yang sebenarnya** dari tempat lahir — karena posisi sebenarnya dari matahari bervariasi menurut wilayah meskipun jam menunjukkan waktu yang sama."
          },
          {
            "p": "Skor diberikan hanya sesuai dengan aturan yang ditetapkan. Konsep dari studi takdir tradisional myeongri seperti Sepuluh Dewa, hubungan cabang bumi, dan penyeimbangan elemen diterjemahkan menjadi aturan untuk perhitungan, dan **input yang sama akan selalu menghasilkan nilai yang sama**. Ketika aturan diubah, pengujian regresi dilakukan untuk memastikan bahwa hasil sebelumnya tetap tidak berubah."
          },
          {
            "p": "**AI tidak digunakan dalam kalimat di layar.** Penjelasan yang muncul di layar gratis adalah frasa tetap yang terlampir pada hasil perhitungan. **Hanya interpretasi dalam laporan berbayar** yang memanfaatkan AI generatif, dan bahkan kemudian, AI tidak membuat skor — ia hanya menulis kalimat berdasarkan nilai yang diberikan oleh mesin."
          }
        ]
      },
      {
        "title": "Apa yang tidak kami katakan?",
        "blocks": [
          {
            "ul": [
              "**Kami tidak menyediakan ramalan.** Kami tidak menulis bahwa Anda harus bertemu atau menghindari siapa pun. Ini adalah bahan referensi yang merangkum perspektif dari myeongri tradisional.",
              "**Kami tidak menyimpan input.** Tanggal dan waktu lahir hanya digunakan pada saat perhitungan dan tidak disimpan di server. Tautan hasil juga disimpan di lokasi yang tidak dikirimkan oleh browser ke server.",
              "**Skor tidak dianggap sebagai nilai manusia.** Hanya karena keberuntungan hari ini rendah tidak berarti Anda harus menyerah pada hari itu."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Metode perhitungan yang rinci ditulis dalam [Panduan Pengguna](/guide). Informasi bisnis dan rincian kontak dapat ditemukan di [Hubungi Kami](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Dasar Perhitungan",
    "title": "Apa dasar untuk perhitungan?",
    "summary": "Kami mengungkapkan semua aturan yang digunakan oleh Saju-Link. Anda dapat memeriksa dari mana angka-angka yang ditampilkan di layar berasal, termasuk penyesuaian untuk keberuntungan hari ini, skor dari tabel hubungan cabang bumi, dan nilai batas yang membedakan antara pilar hari yang kuat dan pilar hari yang lemah.",
    "backLabel": "Kembali ke Beranda",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Nilai yang ditulis di sini semua **dibaca langsung dari kode perhitungan**. Karena mereka tidak ditranskripsikan secara manual ke dalam teks, jika aturan diubah, angka-angka dalam dokumen ini juga akan berubah sesuai."
          }
        ]
      }
    ]
  },
  "guide/natal-chart": {
    "eyebrow": "Dasar Layanan",
    "title": "grafik kelahiran — Dari mana delapan karakter berasal?",
    "summary": "Ini menjelaskan bagaimana tahun, bulan, hari, dan waktu lahir menjadi empat pilar dan delapan karakter, serta mengidentifikasi karakter mana yang menunjuk kepada Anda. Ini juga membahas mengapa dapat dilihat bahkan tanpa mengetahui waktu lahir yang tepat.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Empat Pilar, Delapan Karakter",
        "blocks": [
          {
            "p": "Saju (四柱) secara harfiah berarti **empat pilar**. Masing-masing dari tahun, bulan, hari, dan waktu lahir ditetapkan sebagai satu pilar, dan dua karakter ditulis untuk setiap pilar. Dengan demikian, ada total delapan karakter, yang disebut sebagai **grafik kelahiran**."
          },
          {
            "table": {
              "head": [
                "Pilar",
                "Dari mana asalnya?",
                "Dua Karakter"
              ],
              "rows": [
                [
                  "Pilar Tahun (年柱)",
                  "Tahun lahir",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Pilar Bulan (月柱)",
                  "Bulan lahir",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Pilar Hari (日柱)",
                  "Hari lahir",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Pilar Waktu (時柱)",
                  "Waktu lahir",
                  "Heavenly Stem + Earthly Branch"
                ]
              ]
            }
          },
          {
            "p": "Karakter atas disebut heavenly stems (天干), dan karakter bawah disebut earthly branches (地支). Ada sepuluh heavenly stems dan dua belas earthly branches. Dua belas earthly branches umumnya disebut sebagai **tanda zodiak**."
          }
        ]
      },
      {
        "title": "Di antara mereka, satu karakter menunjuk kepada saya.",
        "blocks": [
          {
            "p": "Tidak semua delapan karakter memiliki bobot yang sama. **heavenly stem dari hari lahir**, khususnya karakter atas dari pilar hari, menunjuk kepada **diri saya**. Ini disebut **day stem (日干)**."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju terdiri dari delapan karakter yang ditetapkan menggunakan dua karakter masing-masing untuk tahun, bulan, hari, dan waktu lahir, yang diwakili oleh heavenly stems dan earthly branches. Di sini, day stem (日干) yang menonjol adalah karakter yang menunjuk kepada diri saya.",
            "labels": {
              "year": "Pilar Tahun",
              "yearNote": "Akar · Tanda Zodiak",
              "month": "Pilar Bulan",
              "monthNote": "Musim · Kekuatan",
              "day": "Pilar Hari",
              "dayNote": "Diri · Istana Pasangan",
              "hour": "Pilar Jam",
              "hourNote": "Tahun-Tahun Selanjutnya · Penggunaan",
              "stem": "Batang Surgawi",
              "stemNote": "Batang Hari = Diri",
              "branch": "Cabang Bumi",
              "branchNote": "Cabang Hari = Istana Pasangan"
            }
          },
          {
            "p": "Apa yang ditunjukkan layanan ini sebagian besar berasal dari satu karakter ini — interpretasi kecenderungan, kekuatan dari lima elemen, energi yang saat ini dibutuhkan, dan **hari ini**'s fortune diukur berdasarkan Batang Hari. Tujuh karakter yang tersisa menunjukkan 'lingkungan di mana Batang Hari ditempatkan'."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mengapa Hari Kelahiran?",
        "blocks": [
          {
            "p": "Batang Tahun sama untuk semua orang yang lahir di tahun itu, dan Batang Bulan sama untuk semua orang yang lahir di bulan itu. Batang Hari berubah ketika hari berubah, dan ramalan tradisional menganggap posisi ini sebagai Diri sejak Dinasti Song. Jika Batang Jam disertakan, itu membedakan bahkan di antara mereka yang lahir pada hari yang sama."
          }
        ]
      },
      {
        "title": "Dibagi Berdasarkan Musim Solar, Bukan Tahun Kalender",
        "blocks": [
          {
            "p": "Tahun saju tidak berubah pada 1 Januari tetapi lebih tepatnya pada **Ipchun (sekitar 4 Februari)**. Bulan juga dibagi berdasarkan musim solar."
          },
          {
            "p": "Dengan demikian, mereka yang lahir di **Januari dan awal Februari menerima Batang Tahun dari tahun sebelumnya**. Di sinilah kesalahpahaman umum tentang tanda zodiak muncul. Hal yang sama berlaku jika Anda memasukkan tanggal lahir lunar — itu dikonversi kembali ke solar dan kemudian dibagi berdasarkan musim solar."
          }
        ]
      },
      {
        "title": "Anda Dapat Membacanya Bahkan Tanpa Mengetahui Waktu Kelahiran",
        "blocks": [
          {
            "p": "Jika Anda tidak memasukkan waktu, pembacaan akan didasarkan pada tiga pilar dan enam karakter, mengecualikan Pilar Jam. Kami tidak menebak nilai yang hilang — secara sembarangan menetapkan Pilar Jam dapat mengganggu kekuatan lima elemen, yang mengarah pada kesimpulan yang salah alih-alih yang mungkin akurat."
          },
          {
            "p": "Jika Anda mengetahui waktu, lebih baik untuk menyertakannya. Karena dua karakter ditambahkan di antara delapan, kekuatan dan penilaian dari lima elemen dapat berubah. Namun, kami tidak menggunakan waktu jam secara langsung tetapi menggunakan [Waktu Solar Sejati](/guide/true-solar-time)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Metode menghitung delapan karakter sebagai lima elemen untuk menilai kekuatan dilanjutkan di [Kekuatan Lima Elemen dan Pilar Hari Kuat/Lemah](/guide/five-elements), sementara metode membaca karakter yang tersisa berdasarkan Batang Hari dilanjutkan di [Sepuluh Dewa](/guide/ten-gods)."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Lima Elemen",
    "title": "Kekuatan Lima Elemen dan Pilar Hari Kuat/Lemah",
    "summary": "Kami menghitung delapan karakter sebagai lima elemen untuk melihat energi mana yang kuat dan mana yang lemah. Kami mengungkapkan nilai ambang (45%·35%) yang menentukan kekuatan Batang Hari.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Menghitung Delapan Karakter sebagai Lima Energi",
        "blocks": [
          {
            "p": "Sepuluh Batang Surgawi dan Dua Belas Cabang Bumi masing-masing termasuk dalam salah satu dari **Lima Elemen (五行)** — Kayu (木), Api (火), Tanah (土), Logam (金), Air (水). Dengan menghitung karakter dalam bagan kelahiran berdasarkan elemen masing-masing, kami dapat menentukan energi mana yang kuat dan mana yang lemah."
          },
          {
            "p": "Namun, kami tidak hanya menghitung angka. Kami juga mempertimbangkan **apakah bulan kelahiran mendukung energi itu**. Bahkan karakter yang sama dapat memiliki kekuatan yang berbeda tergantung pada apakah ia memenuhi musimnya. Ini disebut Tanda Bulan (月令), dan dibagi menjadi lima tahap: Wang (旺), Sang (相), Hyu (休), Su (囚), dan Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Di Mana Layar dan Laporan Berbeda",
        "blocks": [
          {
            "p": "Layar gratis hanya menunjukkan **kekuatan setelah mencerminkan Tanda Bulan**. Nilai sebelum Tanda Bulan dan tabel Wang, Sang, Hyu, Su, dan Sa termasuk dalam laporan berbayar — ini disediakan agar Anda dapat langsung memeriksa di mana penilaian menyimpang."
          }
        ]
      },
      {
        "title": "Kekuatan Batang Hari — Kuat dan Lemah",
        "blocks": [
          {
            "p": "Setelah menghitung kekuatan lima elemen, kami menilai apakah **Batang Hari kuat atau lemah**. Kriterianya adalah rasio energi yang selaras dengan Batang Hari."
          },
          {
            "p": "Energi yang selaras dengan Batang Hari adalah **Sumber dan Teman** — energi yang melahirkan saya dan yang mirip dengan saya. Karena ada dua dari lima, jika tidak ada bias, itu akan sekitar {evenAllyRatio}. Kami menganggap area di sekitar angka itu seimbang, dan membaca di atas dan di bawahnya sebagai kuat atau lemah."
          },
          {
            "table": {
              "head": [
                "Rasio Energi yang Selaras dengan Batang Hari",
                "Penilaian",
                "Apa Artinya?"
              ],
              "rows": [
                [
                  "{strongThreshold} atau lebih",
                  "Pilar Hari Kuat (身强)",
                  "Energi yang mendukung Batang Hari melimpah."
                ],
                [
                  "{weakThreshold} atau lebih dan kurang dari {strongThreshold}",
                  "Seimbang (中和)",
                  "Sulit untuk menyimpulkan ke arah mana pun."
                ],
                [
                  "Kurang dari {weakThreshold}",
                  "Pilar Hari Lemah (身弱)",
                  "Energi yang mendukung Batang Hari lemah."
                ]
              ]
            }
          },
          {
            "p": "Angka-angka dalam tabel ini tidak ditranskripsikan dari teks tetapi **dibaca langsung dari mesin**. Jika aturan berubah, dokumen ini juga akan berubah."
          }
        ]
      },
      {
        "title": "Kekuatan Tidak Baik atau Buruk",
        "blocks": [
          {
            "p": "Menjadi kuat tidak berarti baik, dan menjadi lemah tidak berarti buruk. Jika kuat, ada kekuatan untuk maju, tetapi mudah untuk condong ke satu sisi; jika lemah, lebih mudah untuk meminjam kekuatan orang lain, tetapi seseorang mungkin cepat lelah saat bertahan sendirian. **Energi yang dibutuhkan berbeda dalam kedua kasus.**"
          },
          {
            "p": "Menentukan 'energi yang dibutuhkan' adalah elemen penyeimbang, dan dilanjutkan di [Elemen Penyeimbang](/guide/yongsin)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Bagaimana delapan karakter ditetapkan ada di [bagan kelahiran](/guide/natal-chart). Bagaimana Pilar Hari hari ini berinteraksi dengan kekuatan ini dibahas dalam [fortune hari ini](/guide/today-fortune)."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Elemen Penyeimbang",
    "title": "Elemen Penyeimbang — Energi yang Dibutuhkan Sekarang",
    "summary": "Jika Batang Hari kuat, kami mempertimbangkan energi untuk mengurangi; jika lemah, kami mempertimbangkan energi untuk mendukung sebagai yang diperlukan. Ini menjelaskan bagaimana memilih energi itu dan bagaimana menanganinya saat seimbang.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Lima Elemen Sendiri Tidak Cukup",
        "blocks": [
          {
            "p": "Ada cara untuk mengukur apakah lima elemen terdistribusi secara merata. Namun, yang benar-benar dibutuhkan adalah **apa yang kurang dan apa yang berlebihan dalam saju ini**."
          },
          {
            "p": "Saju yang terdistribusi secara merata tidak selalu nyaman, dan saju yang miring tidak selalu sulit. Arah kemiringan dan apakah ada elemen untuk meredakannya adalah persimpangan."
          }
        ]
      },
      {
        "title": "Elemen Penyeimbang — Kurangi Jika Berlebihan, Tambah Jika Kurang",
        "blocks": [
          {
            "p": "Elemen penyeimbang (用神) adalah **energi yang saat ini dibutuhkan oleh orang ini**. Ada beberapa metode untuk menentukannya (menekan dan mendukung, keseimbangan musiman, afliksi, mediasi), dan yang dapat dinyatakan sebagai aturan — dan paling banyak digunakan — adalah **menekan dan mendukung (抑扶)**. Jika pilar hari kuat, diyakini bahwa energi untuk mengurangi diperlukan; jika lemah, energi untuk menambah diperlukan."
          },
          {
            "table": {
              "head": [
                "Penilaian",
                "Apa yang Dibutuhkan",
                "Jumlah Tipe"
              ],
              "rows": [
                [
                  "Pilar Hari Kuat (身强)",
                  "Energi untuk menguras — Output, Kekayaan dan Jabatan",
                  "Tiga"
                ],
                [
                  "Pilar Hari Lemah (身弱)",
                  "Energi untuk Menambah — Sumber, Pendamping",
                  "Dua"
                ],
                [
                  "Seimbang (中和)",
                  "Tidak dapat diputuskan oleh menekan dan mendukung, jadi energi yang paling tipis",
                  "Dua"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ambang untuk Kekuatan dan Kelemahan",
        "blocks": [
          {
            "p": "Sisi pilar hari adalah **Sumber dan Pendamping** — energi yang melahirkan saya dan energi yang mirip dengan saya. Karena dua dari lima terlibat, keseimbangan lengkap akan menjadi {evenAllyRatio}. Lebar ditetapkan di atas dan di bawah {evenAllyRatio}."
          },
          {
            "table": {
              "caption": "Rasio Sekutu (Sumber + Pendamping) dalam Kekuatan Keseluruhan",
              "head": [
                "Rasio",
                "Penilaian"
              ],
              "rows": [
                [
                  "{strongThreshold} atau lebih",
                  "Pilar Hari Kuat"
                ],
                [
                  "{weakThreshold} atau lebih dan kurang dari {strongThreshold}",
                  "Seimbang"
                ],
                [
                  "Kurang dari {weakThreshold}",
                  "Pilar Hari Lemah"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Seimbang Adalah 'Penilaian yang Kurang Pasti'",
        "blocks": [
          {
            "p": "Seimbang berarti menekan dan mendukung tidak dapat memutuskan. Pada saat ini, dua energi yang paling tipis dianggap sebagai yang diperlukan. Di layar hasil, dicatat sebagai 'posisi yang saat ini tipis' daripada pernyataan definitif."
          }
        ]
      },
      {
        "title": "Kekuatan Bukan Jumlah Karakter",
        "blocks": [
          {
            "p": "Saat menghitung kekuatan lima elemen, delapan karakter tidak dihitung sebagaimana adanya. Nilai mencerminkan batang langit tersembunyi (地藏干) dalam cabang bumi dan musim energi bulan (月令) di mana seseorang dilahirkan."
          },
          {
            "p": "Menghitung hanya karakter permukaan melewatkan fakta bahwa bahkan karakter 木 yang sama dapat memiliki kekuatan yang sama sekali berbeda tergantung pada musim. 木 musim semi dan 木 musim gugur, meskipun karakter yang sama, memiliki kekuatan yang berbeda."
          }
        ]
      },
      {
        "title": "Di Mana Menggunakan Elemen Penyeimbang",
        "blocks": [
          {
            "p": "Elemen penyeimbang yang ditentukan digunakan di dua tempat. Satu adalah layar hasil **'energi yang saat ini dibutuhkan'**, dan yang lainnya adalah [hari ini keberuntungan](/guide/today-fortune) — apakah energi hari ini sesuai dengan elemen penyeimbang adalah item yang paling banyak mempengaruhi skor pada hari itu."
          }
        ]
      },
      {
        "title": "Ini Adalah Penilaian Sederhana",
        "blocks": [
          {
            "p": "Analisis takdir yang sebenarnya mempertimbangkan pembentukan dan kondisi musiman (kehangatan dan kelembapan musim) untuk menentukan elemen penyeimbang, dan kesimpulan dapat bervariasi tergantung pada metode. Saju-Link hanya menggunakan **pengurangan yang dapat diukur dengan nilai kekuatan**. Ini karena prinsip menggunakan hanya apa yang dapat diubah menjadi aturan, sehingga input yang sama akan selalu menghasilkan jawaban yang sama."
          },
          {
            "p": "Sebaliknya, layar hasil juga menyajikan pilar hari yang kuat dan lemah bersama dengan energi yang saat ini dibutuhkan sebagai **bahan bacaan**. Ini untuk menghindari menyembunyikan dasar dari skor."
          }
        ]
      }
    ]
  },
  "guide/stem-gap": {
    "eyebrow": "Batang langit",
    "title": "Kayu Yang (甲) — Kayu, Yang",
    "summary": "Unsur dan polaritas batang langit 甲, bagaimana ia membaca sembilan batang lainnya (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "Kayu Yang (甲) adalah batang langit pertama dari sepuluh batang langit",
        "blocks": [
          {
            "p": "甲 adalah batang langit pertama dari sepuluh batang langit. Unsurnya adalah Kayu dan polaritasnya Yang. Saju-Link menyebut orang yang batang harinya 甲 sebagai “Kayu Yang (甲)”."
          },
          {
            "p": "Kalimat yang ditampilkan layar hasil untuk batang hari ini adalah: \"Pohon tinggi yang tumbuh lurus. Begitu arah ditetapkan ia tidak goyah, dan lebih memilih bertahan daripada menekuk.\" Kalimat ini tidak ada kaitannya dengan tabel atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara membaca batang lainnya (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 甲 sebagai batang hari, kesepuluh batang terbaca sebagai berikut. Pembacaan ini memiliki arah: beginilah 甲 membaca batang lainnya, dan ketika batang lain itu yang membaca 甲, bisa muncul nama yang berbeda."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Kayu Yang (甲) sebagai batang hari",
              "head": [
                "Batang lain",
                "Unsur dan polaritas",
                "Nama Sepuluh Dewa"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "Saingan (劫財)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Ekspresi (食神)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Pengusik (傷官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Penantang (偏官)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Wibawa (正官)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "Pengasuhan (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Batang yang terbaca sebagai posisi pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 甲 sebagai batang hari, Rezeki Tetap adalah 己 dan Wibawa adalah 辛. Jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 甲",
        "blocks": [
          {
            "p": "Inilah tempat 甲 tersembunyi di dalam cabang bumi (batang tersembunyi). Porsi adalah proporsi dari tiga puluh hari cabang tersebut yang ditempati 甲."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 甲",
              "head": [
                "Cabang",
                "Hewan",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "寅",
                  "Harimau",
                  "utama (本氣)",
                  "{hidInBon}"
                ],
                [
                  "卯",
                  "Kelinci",
                  "sisa (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "亥",
                  "Babi",
                  "tengah (中氣)",
                  "{hidHaeJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Sebuah saju dibaca dari bagaimana kedelapan karakternya berhubungan.",
              "Sepuluh Dewa adalah penilaian yang dibuat dari batang hari. Dua karakter yang sama mendapat nama yang berbeda tergantung karakter mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya ada di [panduan Sepuluh Dewa](/guide/ten-gods), sedangkan kekuatan unsur dan tanda bulan ada di [panduan lima unsur](/guide/five-elements). Batang lainnya: [Kayu Yin (乙)](/guide/stem-eul) · [Api Yang (丙)](/guide/stem-byeong) · [Api Yin (丁)](/guide/stem-jeong) · [Tanah Yang (戊)](/guide/stem-mu) · [Tanah Yin (己)](/guide/stem-gi) · [Logam Yang (庚)](/guide/stem-gyeong) · [Logam Yin (辛)](/guide/stem-sin) · [Air Yang (壬)](/guide/stem-im) · [Air Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-eul": {
    "eyebrow": "Batang langit",
    "title": "Kayu Yin (乙) — Kayu, Yin",
    "summary": "Unsur dan polaritas batang langit 乙, bagaimana ia membaca sembilan batang lainnya (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "Kayu Yin (乙) adalah batang langit kedua dari sepuluh batang langit",
        "blocks": [
          {
            "p": "乙 adalah batang langit kedua dari sepuluh batang langit. Unsurnya adalah Kayu dan polaritasnya Yin. Saju-Link menyebut orang yang batang harinya 乙 sebagai “Kayu Yin (乙)”."
          },
          {
            "p": "Kalimat yang ditampilkan layar hasil untuk batang hari ini adalah: \"Sulur — rumput yang lentur. Ia melengkung mengikuti keadaan agar terus melaju, dan tidak patah.\" Kalimat ini tidak ada kaitannya dengan tabel atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara membaca batang lainnya (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 乙 sebagai batang hari, kesepuluh batang terbaca sebagai berikut. Pembacaan ini memiliki arah: beginilah 乙 membaca batang lainnya, dan ketika batang lain itu yang membaca 乙, bisa muncul nama yang berbeda."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Kayu Yin (乙) sebagai batang hari",
              "head": [
                "Batang lain",
                "Unsur dan polaritas",
                "Nama Sepuluh Dewa"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "Saingan (劫財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Pengusik (傷官)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Ekspresi (食神)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Wibawa (正官)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Penantang (偏官)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Pengasuhan (正印)"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "Sokongan Tak Lazim (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Batang yang terbaca sebagai posisi pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 乙 sebagai batang hari, Rezeki Tetap adalah 戊 dan Wibawa adalah 庚. Jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 乙",
        "blocks": [
          {
            "p": "Inilah tempat 乙 tersembunyi di dalam cabang bumi (batang tersembunyi). Porsi adalah proporsi dari tiga puluh hari cabang tersebut yang ditempati 乙."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 乙",
              "head": [
                "Cabang",
                "Hewan",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "卯",
                  "Kelinci",
                  "utama (本氣)",
                  "{hidMyoBon}"
                ],
                [
                  "辰",
                  "Naga",
                  "sisa (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "未",
                  "Domba",
                  "tengah (中氣)",
                  "{hidMiJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Sebuah saju dibaca dari bagaimana kedelapan karakternya berhubungan.",
              "Sepuluh Dewa adalah penilaian yang dibuat dari batang hari. Dua karakter yang sama mendapat nama yang berbeda tergantung karakter mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya ada di [panduan Sepuluh Dewa](/guide/ten-gods), sedangkan kekuatan unsur dan tanda bulan ada di [panduan lima unsur](/guide/five-elements). Batang lainnya: [Kayu Yang (甲)](/guide/stem-gap) · [Api Yang (丙)](/guide/stem-byeong) · [Api Yin (丁)](/guide/stem-jeong) · [Tanah Yang (戊)](/guide/stem-mu) · [Tanah Yin (己)](/guide/stem-gi) · [Logam Yang (庚)](/guide/stem-gyeong) · [Logam Yin (辛)](/guide/stem-sin) · [Air Yang (壬)](/guide/stem-im) · [Air Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-byeong": {
    "eyebrow": "Batang langit",
    "title": "Api Yang (丙) — Api, Yang",
    "summary": "Unsur dan polaritas batang langit 丙, bagaimana ia membaca sembilan batang lainnya (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "Api Yang (丙) adalah batang langit ketiga dari sepuluh batang langit",
        "blocks": [
          {
            "p": "丙 adalah batang langit ketiga dari sepuluh batang langit. Unsurnya adalah Api dan polaritasnya Yang. Saju-Link menyebut orang yang batang harinya 丙 sebagai “Api Yang (丙)”."
          },
          {
            "p": "Kalimat yang ditampilkan layar hasil untuk batang hari ini adalah: \"Matahari tengah hari. Perasaan tampak apa adanya, ruangan menjadi terang, dan melangkah ke depan terasa wajar.\" Kalimat ini tidak ada kaitannya dengan tabel atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara membaca batang lainnya (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 丙 sebagai batang hari, kesepuluh batang terbaca sebagai berikut. Pembacaan ini memiliki arah: beginilah 丙 membaca batang lainnya, dan ketika batang lain itu yang membaca 丙, bisa muncul nama yang berbeda."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Api Yang (丙) sebagai batang hari",
              "head": [
                "Batang lain",
                "Unsur dan polaritas",
                "Nama Sepuluh Dewa"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "Pengasuhan (正印)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Saingan (劫財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Ekspresi (食神)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Pengusik (傷官)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Penantang (偏官)"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "Wibawa (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Batang yang terbaca sebagai posisi pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 丙 sebagai batang hari, Rezeki Tetap adalah 辛 dan Wibawa adalah 癸. Jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 丙",
        "blocks": [
          {
            "p": "Inilah tempat 丙 tersembunyi di dalam cabang bumi (batang tersembunyi). Porsi adalah proporsi dari tiga puluh hari cabang tersebut yang ditempati 丙."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 丙",
              "head": [
                "Cabang",
                "Hewan",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "寅",
                  "Harimau",
                  "tengah (中氣)",
                  "{hidInJung}"
                ],
                [
                  "巳",
                  "Ular",
                  "utama (本氣)",
                  "{hidSaBon}"
                ],
                [
                  "午",
                  "Kuda",
                  "sisa (餘氣)",
                  "{hidOYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Sebuah saju dibaca dari bagaimana kedelapan karakternya berhubungan.",
              "Sepuluh Dewa adalah penilaian yang dibuat dari batang hari. Dua karakter yang sama mendapat nama yang berbeda tergantung karakter mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya ada di [panduan Sepuluh Dewa](/guide/ten-gods), sedangkan kekuatan unsur dan tanda bulan ada di [panduan lima unsur](/guide/five-elements). Batang lainnya: [Kayu Yang (甲)](/guide/stem-gap) · [Kayu Yin (乙)](/guide/stem-eul) · [Api Yin (丁)](/guide/stem-jeong) · [Tanah Yang (戊)](/guide/stem-mu) · [Tanah Yin (己)](/guide/stem-gi) · [Logam Yang (庚)](/guide/stem-gyeong) · [Logam Yin (辛)](/guide/stem-sin) · [Air Yang (壬)](/guide/stem-im) · [Air Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-jeong": {
    "eyebrow": "Batang langit",
    "title": "Api Yin (丁) — Api, Yin",
    "summary": "Unsur dan polaritas batang langit 丁, bagaimana ia membaca sembilan batang lainnya (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "Api Yin (丁) adalah batang langit keempat dari sepuluh batang langit",
        "blocks": [
          {
            "p": "丁 adalah batang langit keempat dari sepuluh batang langit. Unsurnya adalah Api dan polaritasnya Yin. Saju-Link menyebut orang yang batang harinya 丁 sebagai “Api Yin (丁)”."
          },
          {
            "p": "Kalimat yang ditampilkan layar hasil untuk batang hari ini adalah: \"Cahaya lilin. Ia menyala pelan dan lama, serta menghangatkan yang terdekat lebih dulu.\" Kalimat ini tidak ada kaitannya dengan tabel atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara membaca batang lainnya (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 丁 sebagai batang hari, kesepuluh batang terbaca sebagai berikut. Pembacaan ini memiliki arah: beginilah 丁 membaca batang lainnya, dan ketika batang lain itu yang membaca 丁, bisa muncul nama yang berbeda."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Api Yin (丁) sebagai batang hari",
              "head": [
                "Batang lain",
                "Unsur dan polaritas",
                "Nama Sepuluh Dewa"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "Pengasuhan (正印)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Saingan (劫財)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Pengusik (傷官)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Ekspresi (食神)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Wibawa (正官)"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "Penantang (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Batang yang terbaca sebagai posisi pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 丁 sebagai batang hari, Rezeki Tetap adalah 庚 dan Wibawa adalah 壬. Jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 丁",
        "blocks": [
          {
            "p": "Inilah tempat 丁 tersembunyi di dalam cabang bumi (batang tersembunyi). Porsi adalah proporsi dari tiga puluh hari cabang tersebut yang ditempati 丁."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 丁",
              "head": [
                "Cabang",
                "Hewan",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "午",
                  "Kuda",
                  "utama (本氣)",
                  "{hidOBon}"
                ],
                [
                  "未",
                  "Domba",
                  "sisa (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "戌",
                  "Anjing",
                  "tengah (中氣)",
                  "{hidSulJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Sebuah saju dibaca dari bagaimana kedelapan karakternya berhubungan.",
              "Sepuluh Dewa adalah penilaian yang dibuat dari batang hari. Dua karakter yang sama mendapat nama yang berbeda tergantung karakter mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya ada di [panduan Sepuluh Dewa](/guide/ten-gods), sedangkan kekuatan unsur dan tanda bulan ada di [panduan lima unsur](/guide/five-elements). Batang lainnya: [Kayu Yang (甲)](/guide/stem-gap) · [Kayu Yin (乙)](/guide/stem-eul) · [Api Yang (丙)](/guide/stem-byeong) · [Tanah Yang (戊)](/guide/stem-mu) · [Tanah Yin (己)](/guide/stem-gi) · [Logam Yang (庚)](/guide/stem-gyeong) · [Logam Yin (辛)](/guide/stem-sin) · [Air Yang (壬)](/guide/stem-im) · [Air Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-mu": {
    "eyebrow": "Batang langit",
    "title": "Tanah Yang (戊) — Tanah, Yang",
    "summary": "Unsur dan polaritas batang langit 戊, bagaimana ia membaca sembilan batang lainnya (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "Tanah Yang (戊) adalah batang langit kelima dari sepuluh batang langit",
        "blocks": [
          {
            "p": "戊 adalah batang langit kelima dari sepuluh batang langit. Unsurnya adalah Tanah dan polaritasnya Yang. Saju-Link menyebut orang yang batang harinya 戊 sebagai “Tanah Yang (戊)”."
          },
          {
            "p": "Kalimat yang ditampilkan layar hasil untuk batang hari ini adalah: \"Tanah lapang dan pegunungan. Sulit digoyahkan dan mudah dijadikan sandaran, meski lambat mengubah keputusan yang sudah diambil.\" Kalimat ini tidak ada kaitannya dengan tabel atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara membaca batang lainnya (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 戊 sebagai batang hari, kesepuluh batang terbaca sebagai berikut. Pembacaan ini memiliki arah: beginilah 戊 membaca batang lainnya, dan ketika batang lain itu yang membaca 戊, bisa muncul nama yang berbeda."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Tanah Yang (戊) sebagai batang hari",
              "head": [
                "Batang lain",
                "Unsur dan polaritas",
                "Nama Sepuluh Dewa"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "Penantang (偏官)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "Wibawa (正官)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Pengasuhan (正印)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Saingan (劫財)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Ekspresi (食神)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Pengusik (傷官)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "Rezeki Tetap (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Batang yang terbaca sebagai posisi pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 戊 sebagai batang hari, Rezeki Tetap adalah 癸 dan Wibawa adalah 乙. Jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 戊",
        "blocks": [
          {
            "p": "Inilah tempat 戊 tersembunyi di dalam cabang bumi (batang tersembunyi). Porsi adalah proporsi dari tiga puluh hari cabang tersebut yang ditempati 戊."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 戊",
              "head": [
                "Cabang",
                "Hewan",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "寅",
                  "Harimau",
                  "sisa (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "辰",
                  "Naga",
                  "utama (本氣)",
                  "{hidJinBon}"
                ],
                [
                  "巳",
                  "Ular",
                  "sisa (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "申",
                  "Monyet",
                  "sisa (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "戌",
                  "Anjing",
                  "utama (本氣)",
                  "{hidSulBon}"
                ],
                [
                  "亥",
                  "Babi",
                  "sisa (餘氣)",
                  "{hidHaeYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Sebuah saju dibaca dari bagaimana kedelapan karakternya berhubungan.",
              "Sepuluh Dewa adalah penilaian yang dibuat dari batang hari. Dua karakter yang sama mendapat nama yang berbeda tergantung karakter mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya ada di [panduan Sepuluh Dewa](/guide/ten-gods), sedangkan kekuatan unsur dan tanda bulan ada di [panduan lima unsur](/guide/five-elements). Batang lainnya: [Kayu Yang (甲)](/guide/stem-gap) · [Kayu Yin (乙)](/guide/stem-eul) · [Api Yang (丙)](/guide/stem-byeong) · [Api Yin (丁)](/guide/stem-jeong) · [Tanah Yin (己)](/guide/stem-gi) · [Logam Yang (庚)](/guide/stem-gyeong) · [Logam Yin (辛)](/guide/stem-sin) · [Air Yang (壬)](/guide/stem-im) · [Air Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gi": {
    "eyebrow": "Batang langit",
    "title": "Tanah Yin (己) — Tanah, Yin",
    "summary": "Unsur dan polaritas batang langit 己, bagaimana ia membaca sembilan batang lainnya (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "Tanah Yin (己) adalah batang langit keenam dari sepuluh batang langit",
        "blocks": [
          {
            "p": "己 adalah batang langit keenam dari sepuluh batang langit. Unsurnya adalah Tanah dan polaritasnya Yin. Saju-Link menyebut orang yang batang harinya 己 sebagai “Tanah Yin (己)”."
          },
          {
            "p": "Kalimat yang ditampilkan layar hasil untuk batang hari ini adalah: \"Tanah ladang. Ia menerima apa pun yang datang dan menumbuhkannya, lebih suka merawat daripada menonjolkan diri.\" Kalimat ini tidak ada kaitannya dengan tabel atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara membaca batang lainnya (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 己 sebagai batang hari, kesepuluh batang terbaca sebagai berikut. Pembacaan ini memiliki arah: beginilah 己 membaca batang lainnya, dan ketika batang lain itu yang membaca 己, bisa muncul nama yang berbeda."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Tanah Yin (己) sebagai batang hari",
              "head": [
                "Batang lain",
                "Unsur dan polaritas",
                "Nama Sepuluh Dewa"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "Wibawa (正官)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "Penantang (偏官)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Pengasuhan (正印)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Saingan (劫財)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Pengusik (傷官)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Ekspresi (食神)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "Rezeki Tak Terduga (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Batang yang terbaca sebagai posisi pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 己 sebagai batang hari, Rezeki Tetap adalah 壬 dan Wibawa adalah 甲. Jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 己",
        "blocks": [
          {
            "p": "Inilah tempat 己 tersembunyi di dalam cabang bumi (batang tersembunyi). Porsi adalah proporsi dari tiga puluh hari cabang tersebut yang ditempati 己."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 己",
              "head": [
                "Cabang",
                "Hewan",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "丑",
                  "Sapi",
                  "utama (本氣)",
                  "{hidChukBon}"
                ],
                [
                  "午",
                  "Kuda",
                  "tengah (中氣)",
                  "{hidOJung}"
                ],
                [
                  "未",
                  "Domba",
                  "utama (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Sebuah saju dibaca dari bagaimana kedelapan karakternya berhubungan.",
              "Sepuluh Dewa adalah penilaian yang dibuat dari batang hari. Dua karakter yang sama mendapat nama yang berbeda tergantung karakter mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya ada di [panduan Sepuluh Dewa](/guide/ten-gods), sedangkan kekuatan unsur dan tanda bulan ada di [panduan lima unsur](/guide/five-elements). Batang lainnya: [Kayu Yang (甲)](/guide/stem-gap) · [Kayu Yin (乙)](/guide/stem-eul) · [Api Yang (丙)](/guide/stem-byeong) · [Api Yin (丁)](/guide/stem-jeong) · [Tanah Yang (戊)](/guide/stem-mu) · [Logam Yang (庚)](/guide/stem-gyeong) · [Logam Yin (辛)](/guide/stem-sin) · [Air Yang (壬)](/guide/stem-im) · [Air Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gyeong": {
    "eyebrow": "Batang langit",
    "title": "Logam Yang (庚) — Logam, Yang",
    "summary": "Unsur dan polaritas batang langit 庚, bagaimana ia membaca sembilan batang lainnya (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "Logam Yang (庚) adalah batang langit ketujuh dari sepuluh batang langit",
        "blocks": [
          {
            "p": "庚 adalah batang langit ketujuh dari sepuluh batang langit. Unsurnya adalah Logam dan polaritasnya Yang. Saju-Link menyebut orang yang batang harinya 庚 sebagai “Logam Yang (庚)”."
          },
          {
            "p": "Kalimat yang ditampilkan layar hasil untuk batang hari ini adalah: \"Besi yang belum digarap. Tegas dan lugas, dengan sedikit kesabaran untuk hal yang dibiarkan menggantung.\" Kalimat ini tidak ada kaitannya dengan tabel atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara membaca batang lainnya (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 庚 sebagai batang hari, kesepuluh batang terbaca sebagai berikut. Pembacaan ini memiliki arah: beginilah 庚 membaca batang lainnya, dan ketika batang lain itu yang membaca 庚, bisa muncul nama yang berbeda."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Logam Yang (庚) sebagai batang hari",
              "head": [
                "Batang lain",
                "Unsur dan polaritas",
                "Nama Sepuluh Dewa"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Penantang (偏官)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Wibawa (正官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Pengasuhan (正印)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Saingan (劫財)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Ekspresi (食神)"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "Pengusik (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Batang yang terbaca sebagai posisi pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 庚 sebagai batang hari, Rezeki Tetap adalah 乙 dan Wibawa adalah 丁. Jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 庚",
        "blocks": [
          {
            "p": "Inilah tempat 庚 tersembunyi di dalam cabang bumi (batang tersembunyi). Porsi adalah proporsi dari tiga puluh hari cabang tersebut yang ditempati 庚."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 庚",
              "head": [
                "Cabang",
                "Hewan",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "巳",
                  "Ular",
                  "tengah (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "申",
                  "Monyet",
                  "utama (本氣)",
                  "{hidSinBon}"
                ],
                [
                  "酉",
                  "Ayam",
                  "sisa (餘氣)",
                  "{hidYuYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Sebuah saju dibaca dari bagaimana kedelapan karakternya berhubungan.",
              "Sepuluh Dewa adalah penilaian yang dibuat dari batang hari. Dua karakter yang sama mendapat nama yang berbeda tergantung karakter mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya ada di [panduan Sepuluh Dewa](/guide/ten-gods), sedangkan kekuatan unsur dan tanda bulan ada di [panduan lima unsur](/guide/five-elements). Batang lainnya: [Kayu Yang (甲)](/guide/stem-gap) · [Kayu Yin (乙)](/guide/stem-eul) · [Api Yang (丙)](/guide/stem-byeong) · [Api Yin (丁)](/guide/stem-jeong) · [Tanah Yang (戊)](/guide/stem-mu) · [Tanah Yin (己)](/guide/stem-gi) · [Logam Yin (辛)](/guide/stem-sin) · [Air Yang (壬)](/guide/stem-im) · [Air Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-sin": {
    "eyebrow": "Batang langit",
    "title": "Logam Yin (辛) — Logam, Yin",
    "summary": "Unsur dan polaritas batang langit 辛, bagaimana ia membaca sembilan batang lainnya (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "Logam Yin (辛) adalah batang langit kedelapan dari sepuluh batang langit",
        "blocks": [
          {
            "p": "辛 adalah batang langit kedelapan dari sepuluh batang langit. Unsurnya adalah Logam dan polaritasnya Yin. Saju-Link menyebut orang yang batang harinya 辛 sebagai “Logam Yin (辛)”."
          },
          {
            "p": "Kalimat yang ditampilkan layar hasil untuk batang hari ini adalah: \"Permata yang telah diasah. Seleranya halus dan standarnya tinggi; kecerobohan sulit dibiarkan lewat.\" Kalimat ini tidak ada kaitannya dengan tabel atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara membaca batang lainnya (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 辛 sebagai batang hari, kesepuluh batang terbaca sebagai berikut. Pembacaan ini memiliki arah: beginilah 辛 membaca batang lainnya, dan ketika batang lain itu yang membaca 辛, bisa muncul nama yang berbeda."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Logam Yin (辛) sebagai batang hari",
              "head": [
                "Batang lain",
                "Unsur dan polaritas",
                "Nama Sepuluh Dewa"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Wibawa (正官)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Penantang (偏官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Pengasuhan (正印)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Saingan (劫財)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Pengusik (傷官)"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "Ekspresi (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Batang yang terbaca sebagai posisi pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 辛 sebagai batang hari, Rezeki Tetap adalah 甲 dan Wibawa adalah 丙. Jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 辛",
        "blocks": [
          {
            "p": "Inilah tempat 辛 tersembunyi di dalam cabang bumi (batang tersembunyi). Porsi adalah proporsi dari tiga puluh hari cabang tersebut yang ditempati 辛."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 辛",
              "head": [
                "Cabang",
                "Hewan",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "丑",
                  "Sapi",
                  "tengah (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "酉",
                  "Ayam",
                  "utama (本氣)",
                  "{hidYuBon}"
                ],
                [
                  "戌",
                  "Anjing",
                  "sisa (餘氣)",
                  "{hidSulYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Sebuah saju dibaca dari bagaimana kedelapan karakternya berhubungan.",
              "Sepuluh Dewa adalah penilaian yang dibuat dari batang hari. Dua karakter yang sama mendapat nama yang berbeda tergantung karakter mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya ada di [panduan Sepuluh Dewa](/guide/ten-gods), sedangkan kekuatan unsur dan tanda bulan ada di [panduan lima unsur](/guide/five-elements). Batang lainnya: [Kayu Yang (甲)](/guide/stem-gap) · [Kayu Yin (乙)](/guide/stem-eul) · [Api Yang (丙)](/guide/stem-byeong) · [Api Yin (丁)](/guide/stem-jeong) · [Tanah Yang (戊)](/guide/stem-mu) · [Tanah Yin (己)](/guide/stem-gi) · [Logam Yang (庚)](/guide/stem-gyeong) · [Air Yang (壬)](/guide/stem-im) · [Air Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-im": {
    "eyebrow": "Batang langit",
    "title": "Air Yang (壬) — Air, Yang",
    "summary": "Unsur dan polaritas batang langit 壬, bagaimana ia membaca sembilan batang lainnya (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "Air Yang (壬) adalah batang langit kesembilan dari sepuluh batang langit",
        "blocks": [
          {
            "p": "壬 adalah batang langit kesembilan dari sepuluh batang langit. Unsurnya adalah Air dan polaritasnya Yang. Saju-Link menyebut orang yang batang harinya 壬 sebagai “Air Yang (壬)”."
          },
          {
            "p": "Kalimat yang ditampilkan layar hasil untuk batang hari ini adalah: \"Sungai dan laut. Luas cara pandangnya, dengan mata yang membaca ke mana keadaan mengalir.\" Kalimat ini tidak ada kaitannya dengan tabel atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara membaca batang lainnya (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 壬 sebagai batang hari, kesepuluh batang terbaca sebagai berikut. Pembacaan ini memiliki arah: beginilah 壬 membaca batang lainnya, dan ketika batang lain itu yang membaca 壬, bisa muncul nama yang berbeda."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Air Yang (壬) sebagai batang hari",
              "head": [
                "Batang lain",
                "Unsur dan polaritas",
                "Nama Sepuluh Dewa"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "Ekspresi (食神)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "Pengusik (傷官)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Penantang (偏官)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Wibawa (正官)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Pengasuhan (正印)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "Saingan (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Batang yang terbaca sebagai posisi pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 壬 sebagai batang hari, Rezeki Tetap adalah 丁 dan Wibawa adalah 己. Jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 壬",
        "blocks": [
          {
            "p": "Inilah tempat 壬 tersembunyi di dalam cabang bumi (batang tersembunyi). Porsi adalah proporsi dari tiga puluh hari cabang tersebut yang ditempati 壬."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 壬",
              "head": [
                "Cabang",
                "Hewan",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "子",
                  "Tikus",
                  "sisa (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "申",
                  "Monyet",
                  "tengah (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "亥",
                  "Babi",
                  "utama (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Sebuah saju dibaca dari bagaimana kedelapan karakternya berhubungan.",
              "Sepuluh Dewa adalah penilaian yang dibuat dari batang hari. Dua karakter yang sama mendapat nama yang berbeda tergantung karakter mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya ada di [panduan Sepuluh Dewa](/guide/ten-gods), sedangkan kekuatan unsur dan tanda bulan ada di [panduan lima unsur](/guide/five-elements). Batang lainnya: [Kayu Yang (甲)](/guide/stem-gap) · [Kayu Yin (乙)](/guide/stem-eul) · [Api Yang (丙)](/guide/stem-byeong) · [Api Yin (丁)](/guide/stem-jeong) · [Tanah Yang (戊)](/guide/stem-mu) · [Tanah Yin (己)](/guide/stem-gi) · [Logam Yang (庚)](/guide/stem-gyeong) · [Logam Yin (辛)](/guide/stem-sin) · [Air Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gye": {
    "eyebrow": "Batang langit",
    "title": "Air Yin (癸) — Air, Yin",
    "summary": "Unsur dan polaritas batang langit 癸, bagaimana ia membaca sembilan batang lainnya (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "Air Yin (癸) adalah batang langit kesepuluh dari sepuluh batang langit",
        "blocks": [
          {
            "p": "癸 adalah batang langit kesepuluh dari sepuluh batang langit. Unsurnya adalah Air dan polaritasnya Yin. Saju-Link menyebut orang yang batang harinya 癸 sebagai “Air Yin (癸)”."
          },
          {
            "p": "Kalimat yang ditampilkan layar hasil untuk batang hari ini adalah: \"Embun dan hujan. Ia meresap diam-diam dan membaca suasana sebelum kata-kata terucap.\" Kalimat ini tidak ada kaitannya dengan tabel atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara membaca batang lainnya (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 癸 sebagai batang hari, kesepuluh batang terbaca sebagai berikut. Pembacaan ini memiliki arah: beginilah 癸 membaca batang lainnya, dan ketika batang lain itu yang membaca 癸, bisa muncul nama yang berbeda."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Air Yin (癸) sebagai batang hari",
              "head": [
                "Batang lain",
                "Unsur dan polaritas",
                "Nama Sepuluh Dewa"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "Pengusik (傷官)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "Ekspresi (食神)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Wibawa (正官)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Penantang (偏官)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Pengasuhan (正印)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Saingan (劫財)"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "Rekan Sejajar (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Batang yang terbaca sebagai posisi pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 癸 sebagai batang hari, Rezeki Tetap adalah 丙 dan Wibawa adalah 戊. Jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 癸",
        "blocks": [
          {
            "p": "Inilah tempat 癸 tersembunyi di dalam cabang bumi (batang tersembunyi). Porsi adalah proporsi dari tiga puluh hari cabang tersebut yang ditempati 癸."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 癸",
              "head": [
                "Cabang",
                "Hewan",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "子",
                  "Tikus",
                  "utama (本氣)",
                  "{hidJaBon}"
                ],
                [
                  "丑",
                  "Sapi",
                  "sisa (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "辰",
                  "Naga",
                  "tengah (中氣)",
                  "{hidJinJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Sebuah saju dibaca dari bagaimana kedelapan karakternya berhubungan.",
              "Sepuluh Dewa adalah penilaian yang dibuat dari batang hari. Dua karakter yang sama mendapat nama yang berbeda tergantung karakter mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya ada di [panduan Sepuluh Dewa](/guide/ten-gods), sedangkan kekuatan unsur dan tanda bulan ada di [panduan lima unsur](/guide/five-elements). Batang lainnya: [Kayu Yang (甲)](/guide/stem-gap) · [Kayu Yin (乙)](/guide/stem-eul) · [Api Yang (丙)](/guide/stem-byeong) · [Api Yin (丁)](/guide/stem-jeong) · [Tanah Yang (戊)](/guide/stem-mu) · [Tanah Yin (己)](/guide/stem-gi) · [Logam Yang (庚)](/guide/stem-gyeong) · [Logam Yin (辛)](/guide/stem-sin) · [Air Yang (壬)](/guide/stem-im)"
          }
        ]
      }
    ]
  },

  "guide/branch-ja": {
    "eyebrow": "Cabang bumi",
    "title": "子 — cabang Tikus",
    "summary": "Batang yang disimpan oleh cabang bumi 子 (batang tersembunyi), kekuatan lima unsur ketika ia menjadi cabang bulan, dan Sepuluh Dewa yang terbaca untuk setiap batang hari — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "子 adalah cabang bumi pertama dari dua belas cabang bumi",
        "blocks": [
          {
            "p": "子 adalah cabang bumi pertama dari dua belas cabang bumi dan termasuk dalam Tikus. Ketika cabang bulan lahir adalah 子, musimnya adalah musim dingin dan unsur yang menguasai musim itu adalah Air."
          },
          {
            "p": "Ketika cabang hari lahir adalah 子, karakter ini adalah posisi pasangan. Di bawah ini terlihat batang apa saja yang disimpan cabang ini dan apa artinya bagi batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Sebuah cabang adalah satu karakter yang terlihat, tetapi menyimpan batang di dalamnya. Porsi menunjukkan bagaimana tiga puluh hari cabang itu dibagi di antara batang-batangnya, dan batang utama adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari 子",
              "head": [
                "Batang",
                "Unsur dan polaritas",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "sisa (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "utama (本氣)",
                  "{hidJaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kekuatan lima unsur ketika cabang bulan adalah 子",
        "blocks": [
          {
            "p": "Ketika cabang bulan lahir adalah 子, setiap unsur mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengali yang diterapkan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan unsur untuk cabang bulan 子 (musim dingin)",
              "head": [
                "Unsur",
                "Keadaan",
                "Pengali"
              ],
              "rows": [
                [
                  "Kayu",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Api",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Tanah",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Logam",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Air",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sepuluh Dewa menurut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 子 yang sama menjadi Sepuluh Dewa yang berbeda tergantung batang hari. Ketika 子 adalah cabang hari, tabel ini adalah pembacaan posisi pasangan."
          },
          {
            "table": {
              "caption": "Apa arti batang tersembunyi 子 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Air Yang (壬) — sisa (餘氣)",
                "Air Yin (癸) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Sokongan Tak Lazim (偏印)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Pengasuhan (正印)",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Api Yang (丙)",
                  "Penantang (偏官)",
                  "Wibawa (正官)"
                ],
                [
                  "Api Yin (丁)",
                  "Wibawa (正官)",
                  "Penantang (偏官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Rezeki Tak Terduga (偏財)",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Tanah Yin (己)",
                  "Rezeki Tetap (正財)",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Logam Yang (庚)",
                  "Ekspresi (食神)",
                  "Pengusik (傷官)"
                ],
                [
                  "Logam Yin (辛)",
                  "Pengusik (傷官)",
                  "Ekspresi (食神)"
                ],
                [
                  "Air Yang (壬)",
                  "Rekan Sejajar (比肩)",
                  "Saingan (劫財)"
                ],
                [
                  "Air Yin (癸)",
                  "Saingan (劫財)",
                  "Rekan Sejajar (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama terbaca berbeda tergantung batang hari dan cabang bulan.",
              "Hubungan antarcabang seperti harmoni, benturan, dan ketidakselarasan tidak dibahas di sini."
            ]
          },
          {
            "p": "Hubungan antarcabang ada di [bagan dua belas cabang](/guide/branches), dan maknanya sebagai hewan zodiak ada di [letak zodiak dalam saju](/guide/zodiac). Cabang lainnya: [丑 (Sapi)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [卯 (Kelinci)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [未 (Domba)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-chuk": {
    "eyebrow": "Cabang bumi",
    "title": "丑 — cabang Sapi",
    "summary": "Batang yang disimpan oleh cabang bumi 丑 (batang tersembunyi), kekuatan lima unsur ketika ia menjadi cabang bulan, dan Sepuluh Dewa yang terbaca untuk setiap batang hari — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "丑 adalah cabang bumi kedua dari dua belas cabang bumi",
        "blocks": [
          {
            "p": "丑 adalah cabang bumi kedua dari dua belas cabang bumi dan termasuk dalam Sapi. Ketika cabang bulan lahir adalah 丑, musimnya adalah musim dingin dan unsur yang menguasai musim itu adalah Air. Ini adalah bulan transisi (辰未戌丑), sehingga Tanah juga dihitung berada dalam keadaan Wang."
          },
          {
            "p": "Ketika cabang hari lahir adalah 丑, karakter ini adalah posisi pasangan. Di bawah ini terlihat batang apa saja yang disimpan cabang ini dan apa artinya bagi batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Sebuah cabang adalah satu karakter yang terlihat, tetapi menyimpan batang di dalamnya. Porsi menunjukkan bagaimana tiga puluh hari cabang itu dibagi di antara batang-batangnya, dan batang utama adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari 丑",
              "head": [
                "Batang",
                "Unsur dan polaritas",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "sisa (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "tengah (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "utama (本氣)",
                  "{hidChukBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kekuatan lima unsur ketika cabang bulan adalah 丑",
        "blocks": [
          {
            "p": "Ketika cabang bulan lahir adalah 丑, setiap unsur mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengali yang diterapkan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan unsur untuk cabang bulan 丑 (musim dingin (bulan transisi))",
              "head": [
                "Unsur",
                "Keadaan",
                "Pengali"
              ],
              "rows": [
                [
                  "Kayu",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Api",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Tanah",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Logam",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Air",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sepuluh Dewa menurut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 丑 yang sama menjadi Sepuluh Dewa yang berbeda tergantung batang hari. Ketika 丑 adalah cabang hari, tabel ini adalah pembacaan posisi pasangan."
          },
          {
            "table": {
              "caption": "Apa arti batang tersembunyi 丑 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Air Yin (癸) — sisa (餘氣)",
                "Logam Yin (辛) — tengah (中氣)",
                "Tanah Yin (己) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Pengasuhan (正印)",
                  "Wibawa (正官)",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Sokongan Tak Lazim (偏印)",
                  "Penantang (偏官)",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Api Yang (丙)",
                  "Wibawa (正官)",
                  "Rezeki Tetap (正財)",
                  "Pengusik (傷官)"
                ],
                [
                  "Api Yin (丁)",
                  "Penantang (偏官)",
                  "Rezeki Tak Terduga (偏財)",
                  "Ekspresi (食神)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Rezeki Tetap (正財)",
                  "Pengusik (傷官)",
                  "Saingan (劫財)"
                ],
                [
                  "Tanah Yin (己)",
                  "Rezeki Tak Terduga (偏財)",
                  "Ekspresi (食神)",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Logam Yang (庚)",
                  "Pengusik (傷官)",
                  "Saingan (劫財)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Logam Yin (辛)",
                  "Ekspresi (食神)",
                  "Rekan Sejajar (比肩)",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Air Yang (壬)",
                  "Saingan (劫財)",
                  "Pengasuhan (正印)",
                  "Wibawa (正官)"
                ],
                [
                  "Air Yin (癸)",
                  "Rekan Sejajar (比肩)",
                  "Sokongan Tak Lazim (偏印)",
                  "Penantang (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama terbaca berbeda tergantung batang hari dan cabang bulan.",
              "Hubungan antarcabang seperti harmoni, benturan, dan ketidakselarasan tidak dibahas di sini."
            ]
          },
          {
            "p": "Hubungan antarcabang ada di [bagan dua belas cabang](/guide/branches), dan maknanya sebagai hewan zodiak ada di [letak zodiak dalam saju](/guide/zodiac). Cabang lainnya: [子 (Tikus)](/guide/branch-ja) · [寅 (Harimau)](/guide/branch-in) · [卯 (Kelinci)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [未 (Domba)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-in": {
    "eyebrow": "Cabang bumi",
    "title": "寅 — cabang Harimau",
    "summary": "Batang yang disimpan oleh cabang bumi 寅 (batang tersembunyi), kekuatan lima unsur ketika ia menjadi cabang bulan, dan Sepuluh Dewa yang terbaca untuk setiap batang hari — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "寅 adalah cabang bumi ketiga dari dua belas cabang bumi",
        "blocks": [
          {
            "p": "寅 adalah cabang bumi ketiga dari dua belas cabang bumi dan termasuk dalam Harimau. Ketika cabang bulan lahir adalah 寅, musimnya adalah musim semi dan unsur yang menguasai musim itu adalah Kayu."
          },
          {
            "p": "Ketika cabang hari lahir adalah 寅, karakter ini adalah posisi pasangan. Di bawah ini terlihat batang apa saja yang disimpan cabang ini dan apa artinya bagi batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Sebuah cabang adalah satu karakter yang terlihat, tetapi menyimpan batang di dalamnya. Porsi menunjukkan bagaimana tiga puluh hari cabang itu dibagi di antara batang-batangnya, dan batang utama adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari 寅",
              "head": [
                "Batang",
                "Unsur dan polaritas",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "sisa (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "tengah (中氣)",
                  "{hidInJung}"
                ],
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "utama (本氣)",
                  "{hidInBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kekuatan lima unsur ketika cabang bulan adalah 寅",
        "blocks": [
          {
            "p": "Ketika cabang bulan lahir adalah 寅, setiap unsur mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengali yang diterapkan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan unsur untuk cabang bulan 寅 (musim semi)",
              "head": [
                "Unsur",
                "Keadaan",
                "Pengali"
              ],
              "rows": [
                [
                  "Kayu",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Api",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Tanah",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Logam",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Air",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sepuluh Dewa menurut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 寅 yang sama menjadi Sepuluh Dewa yang berbeda tergantung batang hari. Ketika 寅 adalah cabang hari, tabel ini adalah pembacaan posisi pasangan."
          },
          {
            "table": {
              "caption": "Apa arti batang tersembunyi 寅 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Tanah Yang (戊) — sisa (餘氣)",
                "Api Yang (丙) — tengah (中氣)",
                "Kayu Yang (甲) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Rezeki Tak Terduga (偏財)",
                  "Ekspresi (食神)",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Rezeki Tetap (正財)",
                  "Pengusik (傷官)",
                  "Saingan (劫財)"
                ],
                [
                  "Api Yang (丙)",
                  "Ekspresi (食神)",
                  "Rekan Sejajar (比肩)",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Api Yin (丁)",
                  "Pengusik (傷官)",
                  "Saingan (劫財)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Rekan Sejajar (比肩)",
                  "Sokongan Tak Lazim (偏印)",
                  "Penantang (偏官)"
                ],
                [
                  "Tanah Yin (己)",
                  "Saingan (劫財)",
                  "Pengasuhan (正印)",
                  "Wibawa (正官)"
                ],
                [
                  "Logam Yang (庚)",
                  "Sokongan Tak Lazim (偏印)",
                  "Penantang (偏官)",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Logam Yin (辛)",
                  "Pengasuhan (正印)",
                  "Wibawa (正官)",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Air Yang (壬)",
                  "Penantang (偏官)",
                  "Rezeki Tak Terduga (偏財)",
                  "Ekspresi (食神)"
                ],
                [
                  "Air Yin (癸)",
                  "Wibawa (正官)",
                  "Rezeki Tetap (正財)",
                  "Pengusik (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama terbaca berbeda tergantung batang hari dan cabang bulan.",
              "Hubungan antarcabang seperti harmoni, benturan, dan ketidakselarasan tidak dibahas di sini."
            ]
          },
          {
            "p": "Hubungan antarcabang ada di [bagan dua belas cabang](/guide/branches), dan maknanya sebagai hewan zodiak ada di [letak zodiak dalam saju](/guide/zodiac). Cabang lainnya: [子 (Tikus)](/guide/branch-ja) · [丑 (Sapi)](/guide/branch-chuk) · [卯 (Kelinci)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [未 (Domba)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-myo": {
    "eyebrow": "Cabang bumi",
    "title": "卯 — cabang Kelinci",
    "summary": "Batang yang disimpan oleh cabang bumi 卯 (batang tersembunyi), kekuatan lima unsur ketika ia menjadi cabang bulan, dan Sepuluh Dewa yang terbaca untuk setiap batang hari — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "卯 adalah cabang bumi keempat dari dua belas cabang bumi",
        "blocks": [
          {
            "p": "卯 adalah cabang bumi keempat dari dua belas cabang bumi dan termasuk dalam Kelinci. Ketika cabang bulan lahir adalah 卯, musimnya adalah musim semi dan unsur yang menguasai musim itu adalah Kayu."
          },
          {
            "p": "Ketika cabang hari lahir adalah 卯, karakter ini adalah posisi pasangan. Di bawah ini terlihat batang apa saja yang disimpan cabang ini dan apa artinya bagi batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Sebuah cabang adalah satu karakter yang terlihat, tetapi menyimpan batang di dalamnya. Porsi menunjukkan bagaimana tiga puluh hari cabang itu dibagi di antara batang-batangnya, dan batang utama adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari 卯",
              "head": [
                "Batang",
                "Unsur dan polaritas",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "sisa (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "utama (本氣)",
                  "{hidMyoBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kekuatan lima unsur ketika cabang bulan adalah 卯",
        "blocks": [
          {
            "p": "Ketika cabang bulan lahir adalah 卯, setiap unsur mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengali yang diterapkan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan unsur untuk cabang bulan 卯 (musim semi)",
              "head": [
                "Unsur",
                "Keadaan",
                "Pengali"
              ],
              "rows": [
                [
                  "Kayu",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Api",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Tanah",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Logam",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Air",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sepuluh Dewa menurut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 卯 yang sama menjadi Sepuluh Dewa yang berbeda tergantung batang hari. Ketika 卯 adalah cabang hari, tabel ini adalah pembacaan posisi pasangan."
          },
          {
            "table": {
              "caption": "Apa arti batang tersembunyi 卯 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Kayu Yang (甲) — sisa (餘氣)",
                "Kayu Yin (乙) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Rekan Sejajar (比肩)",
                  "Saingan (劫財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Saingan (劫財)",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Api Yang (丙)",
                  "Sokongan Tak Lazim (偏印)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Api Yin (丁)",
                  "Pengasuhan (正印)",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Penantang (偏官)",
                  "Wibawa (正官)"
                ],
                [
                  "Tanah Yin (己)",
                  "Wibawa (正官)",
                  "Penantang (偏官)"
                ],
                [
                  "Logam Yang (庚)",
                  "Rezeki Tak Terduga (偏財)",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Logam Yin (辛)",
                  "Rezeki Tetap (正財)",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Air Yang (壬)",
                  "Ekspresi (食神)",
                  "Pengusik (傷官)"
                ],
                [
                  "Air Yin (癸)",
                  "Pengusik (傷官)",
                  "Ekspresi (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama terbaca berbeda tergantung batang hari dan cabang bulan.",
              "Hubungan antarcabang seperti harmoni, benturan, dan ketidakselarasan tidak dibahas di sini."
            ]
          },
          {
            "p": "Hubungan antarcabang ada di [bagan dua belas cabang](/guide/branches), dan maknanya sebagai hewan zodiak ada di [letak zodiak dalam saju](/guide/zodiac). Cabang lainnya: [子 (Tikus)](/guide/branch-ja) · [丑 (Sapi)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [未 (Domba)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-jin": {
    "eyebrow": "Cabang bumi",
    "title": "辰 — cabang Naga",
    "summary": "Batang yang disimpan oleh cabang bumi 辰 (batang tersembunyi), kekuatan lima unsur ketika ia menjadi cabang bulan, dan Sepuluh Dewa yang terbaca untuk setiap batang hari — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "辰 adalah cabang bumi kelima dari dua belas cabang bumi",
        "blocks": [
          {
            "p": "辰 adalah cabang bumi kelima dari dua belas cabang bumi dan termasuk dalam Naga. Ketika cabang bulan lahir adalah 辰, musimnya adalah musim semi dan unsur yang menguasai musim itu adalah Kayu. Ini adalah bulan transisi (辰未戌丑), sehingga Tanah juga dihitung berada dalam keadaan Wang."
          },
          {
            "p": "Ketika cabang hari lahir adalah 辰, karakter ini adalah posisi pasangan. Di bawah ini terlihat batang apa saja yang disimpan cabang ini dan apa artinya bagi batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Sebuah cabang adalah satu karakter yang terlihat, tetapi menyimpan batang di dalamnya. Porsi menunjukkan bagaimana tiga puluh hari cabang itu dibagi di antara batang-batangnya, dan batang utama adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari 辰",
              "head": [
                "Batang",
                "Unsur dan polaritas",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "sisa (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "tengah (中氣)",
                  "{hidJinJung}"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "utama (本氣)",
                  "{hidJinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kekuatan lima unsur ketika cabang bulan adalah 辰",
        "blocks": [
          {
            "p": "Ketika cabang bulan lahir adalah 辰, setiap unsur mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengali yang diterapkan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan unsur untuk cabang bulan 辰 (musim semi (bulan transisi))",
              "head": [
                "Unsur",
                "Keadaan",
                "Pengali"
              ],
              "rows": [
                [
                  "Kayu",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Api",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Tanah",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Logam",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Air",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sepuluh Dewa menurut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 辰 yang sama menjadi Sepuluh Dewa yang berbeda tergantung batang hari. Ketika 辰 adalah cabang hari, tabel ini adalah pembacaan posisi pasangan."
          },
          {
            "table": {
              "caption": "Apa arti batang tersembunyi 辰 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Kayu Yin (乙) — sisa (餘氣)",
                "Air Yin (癸) — tengah (中氣)",
                "Tanah Yang (戊) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Saingan (劫財)",
                  "Pengasuhan (正印)",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Rekan Sejajar (比肩)",
                  "Sokongan Tak Lazim (偏印)",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Api Yang (丙)",
                  "Pengasuhan (正印)",
                  "Wibawa (正官)",
                  "Ekspresi (食神)"
                ],
                [
                  "Api Yin (丁)",
                  "Sokongan Tak Lazim (偏印)",
                  "Penantang (偏官)",
                  "Pengusik (傷官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Wibawa (正官)",
                  "Rezeki Tetap (正財)",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Tanah Yin (己)",
                  "Penantang (偏官)",
                  "Rezeki Tak Terduga (偏財)",
                  "Saingan (劫財)"
                ],
                [
                  "Logam Yang (庚)",
                  "Rezeki Tetap (正財)",
                  "Pengusik (傷官)",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Logam Yin (辛)",
                  "Rezeki Tak Terduga (偏財)",
                  "Ekspresi (食神)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Air Yang (壬)",
                  "Pengusik (傷官)",
                  "Saingan (劫財)",
                  "Penantang (偏官)"
                ],
                [
                  "Air Yin (癸)",
                  "Ekspresi (食神)",
                  "Rekan Sejajar (比肩)",
                  "Wibawa (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama terbaca berbeda tergantung batang hari dan cabang bulan.",
              "Hubungan antarcabang seperti harmoni, benturan, dan ketidakselarasan tidak dibahas di sini."
            ]
          },
          {
            "p": "Hubungan antarcabang ada di [bagan dua belas cabang](/guide/branches), dan maknanya sebagai hewan zodiak ada di [letak zodiak dalam saju](/guide/zodiac). Cabang lainnya: [子 (Tikus)](/guide/branch-ja) · [丑 (Sapi)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [卯 (Kelinci)](/guide/branch-myo) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [未 (Domba)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sa": {
    "eyebrow": "Cabang bumi",
    "title": "巳 — cabang Ular",
    "summary": "Batang yang disimpan oleh cabang bumi 巳 (batang tersembunyi), kekuatan lima unsur ketika ia menjadi cabang bulan, dan Sepuluh Dewa yang terbaca untuk setiap batang hari — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "巳 adalah cabang bumi keenam dari dua belas cabang bumi",
        "blocks": [
          {
            "p": "巳 adalah cabang bumi keenam dari dua belas cabang bumi dan termasuk dalam Ular. Ketika cabang bulan lahir adalah 巳, musimnya adalah musim panas dan unsur yang menguasai musim itu adalah Api."
          },
          {
            "p": "Ketika cabang hari lahir adalah 巳, karakter ini adalah posisi pasangan. Di bawah ini terlihat batang apa saja yang disimpan cabang ini dan apa artinya bagi batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Sebuah cabang adalah satu karakter yang terlihat, tetapi menyimpan batang di dalamnya. Porsi menunjukkan bagaimana tiga puluh hari cabang itu dibagi di antara batang-batangnya, dan batang utama adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari 巳",
              "head": [
                "Batang",
                "Unsur dan polaritas",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "sisa (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "tengah (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "utama (本氣)",
                  "{hidSaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kekuatan lima unsur ketika cabang bulan adalah 巳",
        "blocks": [
          {
            "p": "Ketika cabang bulan lahir adalah 巳, setiap unsur mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengali yang diterapkan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan unsur untuk cabang bulan 巳 (musim panas)",
              "head": [
                "Unsur",
                "Keadaan",
                "Pengali"
              ],
              "rows": [
                [
                  "Kayu",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Api",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Tanah",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Logam",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Air",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sepuluh Dewa menurut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 巳 yang sama menjadi Sepuluh Dewa yang berbeda tergantung batang hari. Ketika 巳 adalah cabang hari, tabel ini adalah pembacaan posisi pasangan."
          },
          {
            "table": {
              "caption": "Apa arti batang tersembunyi 巳 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Tanah Yang (戊) — sisa (餘氣)",
                "Logam Yang (庚) — tengah (中氣)",
                "Api Yang (丙) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Rezeki Tak Terduga (偏財)",
                  "Penantang (偏官)",
                  "Ekspresi (食神)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Rezeki Tetap (正財)",
                  "Wibawa (正官)",
                  "Pengusik (傷官)"
                ],
                [
                  "Api Yang (丙)",
                  "Ekspresi (食神)",
                  "Rezeki Tak Terduga (偏財)",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Api Yin (丁)",
                  "Pengusik (傷官)",
                  "Rezeki Tetap (正財)",
                  "Saingan (劫財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Rekan Sejajar (比肩)",
                  "Ekspresi (食神)",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Tanah Yin (己)",
                  "Saingan (劫財)",
                  "Pengusik (傷官)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Logam Yang (庚)",
                  "Sokongan Tak Lazim (偏印)",
                  "Rekan Sejajar (比肩)",
                  "Penantang (偏官)"
                ],
                [
                  "Logam Yin (辛)",
                  "Pengasuhan (正印)",
                  "Saingan (劫財)",
                  "Wibawa (正官)"
                ],
                [
                  "Air Yang (壬)",
                  "Penantang (偏官)",
                  "Sokongan Tak Lazim (偏印)",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Air Yin (癸)",
                  "Wibawa (正官)",
                  "Pengasuhan (正印)",
                  "Rezeki Tetap (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama terbaca berbeda tergantung batang hari dan cabang bulan.",
              "Hubungan antarcabang seperti harmoni, benturan, dan ketidakselarasan tidak dibahas di sini."
            ]
          },
          {
            "p": "Hubungan antarcabang ada di [bagan dua belas cabang](/guide/branches), dan maknanya sebagai hewan zodiak ada di [letak zodiak dalam saju](/guide/zodiac). Cabang lainnya: [子 (Tikus)](/guide/branch-ja) · [丑 (Sapi)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [卯 (Kelinci)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [午 (Kuda)](/guide/branch-o) · [未 (Domba)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-o": {
    "eyebrow": "Cabang bumi",
    "title": "午 — cabang Kuda",
    "summary": "Batang yang disimpan oleh cabang bumi 午 (batang tersembunyi), kekuatan lima unsur ketika ia menjadi cabang bulan, dan Sepuluh Dewa yang terbaca untuk setiap batang hari — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "午 adalah cabang bumi ketujuh dari dua belas cabang bumi",
        "blocks": [
          {
            "p": "午 adalah cabang bumi ketujuh dari dua belas cabang bumi dan termasuk dalam Kuda. Ketika cabang bulan lahir adalah 午, musimnya adalah musim panas dan unsur yang menguasai musim itu adalah Api."
          },
          {
            "p": "Ketika cabang hari lahir adalah 午, karakter ini adalah posisi pasangan. Di bawah ini terlihat batang apa saja yang disimpan cabang ini dan apa artinya bagi batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Sebuah cabang adalah satu karakter yang terlihat, tetapi menyimpan batang di dalamnya. Porsi menunjukkan bagaimana tiga puluh hari cabang itu dibagi di antara batang-batangnya, dan batang utama adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari 午",
              "head": [
                "Batang",
                "Unsur dan polaritas",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "sisa (餘氣)",
                  "{hidOYeo}"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "tengah (中氣)",
                  "{hidOJung}"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "utama (本氣)",
                  "{hidOBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kekuatan lima unsur ketika cabang bulan adalah 午",
        "blocks": [
          {
            "p": "Ketika cabang bulan lahir adalah 午, setiap unsur mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengali yang diterapkan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan unsur untuk cabang bulan 午 (musim panas)",
              "head": [
                "Unsur",
                "Keadaan",
                "Pengali"
              ],
              "rows": [
                [
                  "Kayu",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Api",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Tanah",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Logam",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Air",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sepuluh Dewa menurut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 午 yang sama menjadi Sepuluh Dewa yang berbeda tergantung batang hari. Ketika 午 adalah cabang hari, tabel ini adalah pembacaan posisi pasangan."
          },
          {
            "table": {
              "caption": "Apa arti batang tersembunyi 午 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Api Yang (丙) — sisa (餘氣)",
                "Tanah Yin (己) — tengah (中氣)",
                "Api Yin (丁) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Ekspresi (食神)",
                  "Rezeki Tetap (正財)",
                  "Pengusik (傷官)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Pengusik (傷官)",
                  "Rezeki Tak Terduga (偏財)",
                  "Ekspresi (食神)"
                ],
                [
                  "Api Yang (丙)",
                  "Rekan Sejajar (比肩)",
                  "Pengusik (傷官)",
                  "Saingan (劫財)"
                ],
                [
                  "Api Yin (丁)",
                  "Saingan (劫財)",
                  "Ekspresi (食神)",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Sokongan Tak Lazim (偏印)",
                  "Saingan (劫財)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Tanah Yin (己)",
                  "Pengasuhan (正印)",
                  "Rekan Sejajar (比肩)",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Logam Yang (庚)",
                  "Penantang (偏官)",
                  "Pengasuhan (正印)",
                  "Wibawa (正官)"
                ],
                [
                  "Logam Yin (辛)",
                  "Wibawa (正官)",
                  "Sokongan Tak Lazim (偏印)",
                  "Penantang (偏官)"
                ],
                [
                  "Air Yang (壬)",
                  "Rezeki Tak Terduga (偏財)",
                  "Wibawa (正官)",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Air Yin (癸)",
                  "Rezeki Tetap (正財)",
                  "Penantang (偏官)",
                  "Rezeki Tak Terduga (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama terbaca berbeda tergantung batang hari dan cabang bulan.",
              "Hubungan antarcabang seperti harmoni, benturan, dan ketidakselarasan tidak dibahas di sini."
            ]
          },
          {
            "p": "Hubungan antarcabang ada di [bagan dua belas cabang](/guide/branches), dan maknanya sebagai hewan zodiak ada di [letak zodiak dalam saju](/guide/zodiac). Cabang lainnya: [子 (Tikus)](/guide/branch-ja) · [丑 (Sapi)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [卯 (Kelinci)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [未 (Domba)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-mi": {
    "eyebrow": "Cabang bumi",
    "title": "未 — cabang Domba",
    "summary": "Batang yang disimpan oleh cabang bumi 未 (batang tersembunyi), kekuatan lima unsur ketika ia menjadi cabang bulan, dan Sepuluh Dewa yang terbaca untuk setiap batang hari — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "未 adalah cabang bumi kedelapan dari dua belas cabang bumi",
        "blocks": [
          {
            "p": "未 adalah cabang bumi kedelapan dari dua belas cabang bumi dan termasuk dalam Domba. Ketika cabang bulan lahir adalah 未, musimnya adalah musim panas dan unsur yang menguasai musim itu adalah Api. Ini adalah bulan transisi (辰未戌丑), sehingga Tanah juga dihitung berada dalam keadaan Wang."
          },
          {
            "p": "Ketika cabang hari lahir adalah 未, karakter ini adalah posisi pasangan. Di bawah ini terlihat batang apa saja yang disimpan cabang ini dan apa artinya bagi batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Sebuah cabang adalah satu karakter yang terlihat, tetapi menyimpan batang di dalamnya. Porsi menunjukkan bagaimana tiga puluh hari cabang itu dibagi di antara batang-batangnya, dan batang utama adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari 未",
              "head": [
                "Batang",
                "Unsur dan polaritas",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "sisa (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "tengah (中氣)",
                  "{hidMiJung}"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "utama (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kekuatan lima unsur ketika cabang bulan adalah 未",
        "blocks": [
          {
            "p": "Ketika cabang bulan lahir adalah 未, setiap unsur mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengali yang diterapkan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan unsur untuk cabang bulan 未 (musim panas (bulan transisi))",
              "head": [
                "Unsur",
                "Keadaan",
                "Pengali"
              ],
              "rows": [
                [
                  "Kayu",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Api",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Tanah",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Logam",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Air",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sepuluh Dewa menurut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 未 yang sama menjadi Sepuluh Dewa yang berbeda tergantung batang hari. Ketika 未 adalah cabang hari, tabel ini adalah pembacaan posisi pasangan."
          },
          {
            "table": {
              "caption": "Apa arti batang tersembunyi 未 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Api Yin (丁) — sisa (餘氣)",
                "Kayu Yin (乙) — tengah (中氣)",
                "Tanah Yin (己) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Pengusik (傷官)",
                  "Saingan (劫財)",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Ekspresi (食神)",
                  "Rekan Sejajar (比肩)",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Api Yang (丙)",
                  "Saingan (劫財)",
                  "Pengasuhan (正印)",
                  "Pengusik (傷官)"
                ],
                [
                  "Api Yin (丁)",
                  "Rekan Sejajar (比肩)",
                  "Sokongan Tak Lazim (偏印)",
                  "Ekspresi (食神)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Pengasuhan (正印)",
                  "Wibawa (正官)",
                  "Saingan (劫財)"
                ],
                [
                  "Tanah Yin (己)",
                  "Sokongan Tak Lazim (偏印)",
                  "Penantang (偏官)",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Logam Yang (庚)",
                  "Wibawa (正官)",
                  "Rezeki Tetap (正財)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Logam Yin (辛)",
                  "Penantang (偏官)",
                  "Rezeki Tak Terduga (偏財)",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Air Yang (壬)",
                  "Rezeki Tetap (正財)",
                  "Pengusik (傷官)",
                  "Wibawa (正官)"
                ],
                [
                  "Air Yin (癸)",
                  "Rezeki Tak Terduga (偏財)",
                  "Ekspresi (食神)",
                  "Penantang (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama terbaca berbeda tergantung batang hari dan cabang bulan.",
              "Hubungan antarcabang seperti harmoni, benturan, dan ketidakselarasan tidak dibahas di sini."
            ]
          },
          {
            "p": "Hubungan antarcabang ada di [bagan dua belas cabang](/guide/branches), dan maknanya sebagai hewan zodiak ada di [letak zodiak dalam saju](/guide/zodiac). Cabang lainnya: [子 (Tikus)](/guide/branch-ja) · [丑 (Sapi)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [卯 (Kelinci)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sin": {
    "eyebrow": "Cabang bumi",
    "title": "申 — cabang Monyet",
    "summary": "Batang yang disimpan oleh cabang bumi 申 (batang tersembunyi), kekuatan lima unsur ketika ia menjadi cabang bulan, dan Sepuluh Dewa yang terbaca untuk setiap batang hari — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "申 adalah cabang bumi kesembilan dari dua belas cabang bumi",
        "blocks": [
          {
            "p": "申 adalah cabang bumi kesembilan dari dua belas cabang bumi dan termasuk dalam Monyet. Ketika cabang bulan lahir adalah 申, musimnya adalah musim gugur dan unsur yang menguasai musim itu adalah Logam."
          },
          {
            "p": "Ketika cabang hari lahir adalah 申, karakter ini adalah posisi pasangan. Di bawah ini terlihat batang apa saja yang disimpan cabang ini dan apa artinya bagi batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Sebuah cabang adalah satu karakter yang terlihat, tetapi menyimpan batang di dalamnya. Porsi menunjukkan bagaimana tiga puluh hari cabang itu dibagi di antara batang-batangnya, dan batang utama adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari 申",
              "head": [
                "Batang",
                "Unsur dan polaritas",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "sisa (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "tengah (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "utama (本氣)",
                  "{hidSinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kekuatan lima unsur ketika cabang bulan adalah 申",
        "blocks": [
          {
            "p": "Ketika cabang bulan lahir adalah 申, setiap unsur mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengali yang diterapkan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan unsur untuk cabang bulan 申 (musim gugur)",
              "head": [
                "Unsur",
                "Keadaan",
                "Pengali"
              ],
              "rows": [
                [
                  "Kayu",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Api",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Tanah",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Logam",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Air",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sepuluh Dewa menurut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 申 yang sama menjadi Sepuluh Dewa yang berbeda tergantung batang hari. Ketika 申 adalah cabang hari, tabel ini adalah pembacaan posisi pasangan."
          },
          {
            "table": {
              "caption": "Apa arti batang tersembunyi 申 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Tanah Yang (戊) — sisa (餘氣)",
                "Air Yang (壬) — tengah (中氣)",
                "Logam Yang (庚) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Rezeki Tak Terduga (偏財)",
                  "Sokongan Tak Lazim (偏印)",
                  "Penantang (偏官)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Rezeki Tetap (正財)",
                  "Pengasuhan (正印)",
                  "Wibawa (正官)"
                ],
                [
                  "Api Yang (丙)",
                  "Ekspresi (食神)",
                  "Penantang (偏官)",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Api Yin (丁)",
                  "Pengusik (傷官)",
                  "Wibawa (正官)",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Rekan Sejajar (比肩)",
                  "Rezeki Tak Terduga (偏財)",
                  "Ekspresi (食神)"
                ],
                [
                  "Tanah Yin (己)",
                  "Saingan (劫財)",
                  "Rezeki Tetap (正財)",
                  "Pengusik (傷官)"
                ],
                [
                  "Logam Yang (庚)",
                  "Sokongan Tak Lazim (偏印)",
                  "Ekspresi (食神)",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Logam Yin (辛)",
                  "Pengasuhan (正印)",
                  "Pengusik (傷官)",
                  "Saingan (劫財)"
                ],
                [
                  "Air Yang (壬)",
                  "Penantang (偏官)",
                  "Rekan Sejajar (比肩)",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Air Yin (癸)",
                  "Wibawa (正官)",
                  "Saingan (劫財)",
                  "Pengasuhan (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama terbaca berbeda tergantung batang hari dan cabang bulan.",
              "Hubungan antarcabang seperti harmoni, benturan, dan ketidakselarasan tidak dibahas di sini."
            ]
          },
          {
            "p": "Hubungan antarcabang ada di [bagan dua belas cabang](/guide/branches), dan maknanya sebagai hewan zodiak ada di [letak zodiak dalam saju](/guide/zodiac). Cabang lainnya: [子 (Tikus)](/guide/branch-ja) · [丑 (Sapi)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [卯 (Kelinci)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [未 (Domba)](/guide/branch-mi) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-yu": {
    "eyebrow": "Cabang bumi",
    "title": "酉 — cabang Ayam",
    "summary": "Batang yang disimpan oleh cabang bumi 酉 (batang tersembunyi), kekuatan lima unsur ketika ia menjadi cabang bulan, dan Sepuluh Dewa yang terbaca untuk setiap batang hari — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "酉 adalah cabang bumi kesepuluh dari dua belas cabang bumi",
        "blocks": [
          {
            "p": "酉 adalah cabang bumi kesepuluh dari dua belas cabang bumi dan termasuk dalam Ayam. Ketika cabang bulan lahir adalah 酉, musimnya adalah musim gugur dan unsur yang menguasai musim itu adalah Logam."
          },
          {
            "p": "Ketika cabang hari lahir adalah 酉, karakter ini adalah posisi pasangan. Di bawah ini terlihat batang apa saja yang disimpan cabang ini dan apa artinya bagi batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Sebuah cabang adalah satu karakter yang terlihat, tetapi menyimpan batang di dalamnya. Porsi menunjukkan bagaimana tiga puluh hari cabang itu dibagi di antara batang-batangnya, dan batang utama adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari 酉",
              "head": [
                "Batang",
                "Unsur dan polaritas",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "sisa (餘氣)",
                  "{hidYuYeo}"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "utama (本氣)",
                  "{hidYuBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kekuatan lima unsur ketika cabang bulan adalah 酉",
        "blocks": [
          {
            "p": "Ketika cabang bulan lahir adalah 酉, setiap unsur mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengali yang diterapkan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan unsur untuk cabang bulan 酉 (musim gugur)",
              "head": [
                "Unsur",
                "Keadaan",
                "Pengali"
              ],
              "rows": [
                [
                  "Kayu",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Api",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Tanah",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Logam",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Air",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sepuluh Dewa menurut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 酉 yang sama menjadi Sepuluh Dewa yang berbeda tergantung batang hari. Ketika 酉 adalah cabang hari, tabel ini adalah pembacaan posisi pasangan."
          },
          {
            "table": {
              "caption": "Apa arti batang tersembunyi 酉 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Logam Yang (庚) — sisa (餘氣)",
                "Logam Yin (辛) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Penantang (偏官)",
                  "Wibawa (正官)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Wibawa (正官)",
                  "Penantang (偏官)"
                ],
                [
                  "Api Yang (丙)",
                  "Rezeki Tak Terduga (偏財)",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Api Yin (丁)",
                  "Rezeki Tetap (正財)",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Ekspresi (食神)",
                  "Pengusik (傷官)"
                ],
                [
                  "Tanah Yin (己)",
                  "Pengusik (傷官)",
                  "Ekspresi (食神)"
                ],
                [
                  "Logam Yang (庚)",
                  "Rekan Sejajar (比肩)",
                  "Saingan (劫財)"
                ],
                [
                  "Logam Yin (辛)",
                  "Saingan (劫財)",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Air Yang (壬)",
                  "Sokongan Tak Lazim (偏印)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Air Yin (癸)",
                  "Pengasuhan (正印)",
                  "Sokongan Tak Lazim (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama terbaca berbeda tergantung batang hari dan cabang bulan.",
              "Hubungan antarcabang seperti harmoni, benturan, dan ketidakselarasan tidak dibahas di sini."
            ]
          },
          {
            "p": "Hubungan antarcabang ada di [bagan dua belas cabang](/guide/branches), dan maknanya sebagai hewan zodiak ada di [letak zodiak dalam saju](/guide/zodiac). Cabang lainnya: [子 (Tikus)](/guide/branch-ja) · [丑 (Sapi)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [卯 (Kelinci)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [未 (Domba)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sul": {
    "eyebrow": "Cabang bumi",
    "title": "戌 — cabang Anjing",
    "summary": "Batang yang disimpan oleh cabang bumi 戌 (batang tersembunyi), kekuatan lima unsur ketika ia menjadi cabang bulan, dan Sepuluh Dewa yang terbaca untuk setiap batang hari — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "戌 adalah cabang bumi kesebelas dari dua belas cabang bumi",
        "blocks": [
          {
            "p": "戌 adalah cabang bumi kesebelas dari dua belas cabang bumi dan termasuk dalam Anjing. Ketika cabang bulan lahir adalah 戌, musimnya adalah musim gugur dan unsur yang menguasai musim itu adalah Logam. Ini adalah bulan transisi (辰未戌丑), sehingga Tanah juga dihitung berada dalam keadaan Wang."
          },
          {
            "p": "Ketika cabang hari lahir adalah 戌, karakter ini adalah posisi pasangan. Di bawah ini terlihat batang apa saja yang disimpan cabang ini dan apa artinya bagi batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Sebuah cabang adalah satu karakter yang terlihat, tetapi menyimpan batang di dalamnya. Porsi menunjukkan bagaimana tiga puluh hari cabang itu dibagi di antara batang-batangnya, dan batang utama adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari 戌",
              "head": [
                "Batang",
                "Unsur dan polaritas",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "sisa (餘氣)",
                  "{hidSulYeo}"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "tengah (中氣)",
                  "{hidSulJung}"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "utama (本氣)",
                  "{hidSulBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kekuatan lima unsur ketika cabang bulan adalah 戌",
        "blocks": [
          {
            "p": "Ketika cabang bulan lahir adalah 戌, setiap unsur mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengali yang diterapkan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan unsur untuk cabang bulan 戌 (musim gugur (bulan transisi))",
              "head": [
                "Unsur",
                "Keadaan",
                "Pengali"
              ],
              "rows": [
                [
                  "Kayu",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Api",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Tanah",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Logam",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Air",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sepuluh Dewa menurut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 戌 yang sama menjadi Sepuluh Dewa yang berbeda tergantung batang hari. Ketika 戌 adalah cabang hari, tabel ini adalah pembacaan posisi pasangan."
          },
          {
            "table": {
              "caption": "Apa arti batang tersembunyi 戌 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Logam Yin (辛) — sisa (餘氣)",
                "Api Yin (丁) — tengah (中氣)",
                "Tanah Yang (戊) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Wibawa (正官)",
                  "Pengusik (傷官)",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Penantang (偏官)",
                  "Ekspresi (食神)",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Api Yang (丙)",
                  "Rezeki Tetap (正財)",
                  "Saingan (劫財)",
                  "Ekspresi (食神)"
                ],
                [
                  "Api Yin (丁)",
                  "Rezeki Tak Terduga (偏財)",
                  "Rekan Sejajar (比肩)",
                  "Pengusik (傷官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Pengusik (傷官)",
                  "Pengasuhan (正印)",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Tanah Yin (己)",
                  "Ekspresi (食神)",
                  "Sokongan Tak Lazim (偏印)",
                  "Saingan (劫財)"
                ],
                [
                  "Logam Yang (庚)",
                  "Saingan (劫財)",
                  "Wibawa (正官)",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Logam Yin (辛)",
                  "Rekan Sejajar (比肩)",
                  "Penantang (偏官)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Air Yang (壬)",
                  "Pengasuhan (正印)",
                  "Rezeki Tetap (正財)",
                  "Penantang (偏官)"
                ],
                [
                  "Air Yin (癸)",
                  "Sokongan Tak Lazim (偏印)",
                  "Rezeki Tak Terduga (偏財)",
                  "Wibawa (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama terbaca berbeda tergantung batang hari dan cabang bulan.",
              "Hubungan antarcabang seperti harmoni, benturan, dan ketidakselarasan tidak dibahas di sini."
            ]
          },
          {
            "p": "Hubungan antarcabang ada di [bagan dua belas cabang](/guide/branches), dan maknanya sebagai hewan zodiak ada di [letak zodiak dalam saju](/guide/zodiac). Cabang lainnya: [子 (Tikus)](/guide/branch-ja) · [丑 (Sapi)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [卯 (Kelinci)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [未 (Domba)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-hae": {
    "eyebrow": "Cabang bumi",
    "title": "亥 — cabang Babi",
    "summary": "Batang yang disimpan oleh cabang bumi 亥 (batang tersembunyi), kekuatan lima unsur ketika ia menjadi cabang bulan, dan Sepuluh Dewa yang terbaca untuk setiap batang hari — disusun persis seperti aturan perhitungan Saju-Link.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "亥 adalah cabang bumi kedua belas dari dua belas cabang bumi",
        "blocks": [
          {
            "p": "亥 adalah cabang bumi kedua belas dari dua belas cabang bumi dan termasuk dalam Babi. Ketika cabang bulan lahir adalah 亥, musimnya adalah musim dingin dan unsur yang menguasai musim itu adalah Air."
          },
          {
            "p": "Ketika cabang hari lahir adalah 亥, karakter ini adalah posisi pasangan. Di bawah ini terlihat batang apa saja yang disimpan cabang ini dan apa artinya bagi batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Sebuah cabang adalah satu karakter yang terlihat, tetapi menyimpan batang di dalamnya. Porsi menunjukkan bagaimana tiga puluh hari cabang itu dibagi di antara batang-batangnya, dan batang utama adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari 亥",
              "head": [
                "Batang",
                "Unsur dan polaritas",
                "Posisi",
                "Porsi"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "sisa (餘氣)",
                  "{hidHaeYeo}"
                ],
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "tengah (中氣)",
                  "{hidHaeJung}"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "utama (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kekuatan lima unsur ketika cabang bulan adalah 亥",
        "blocks": [
          {
            "p": "Ketika cabang bulan lahir adalah 亥, setiap unsur mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengali yang diterapkan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan unsur untuk cabang bulan 亥 (musim dingin)",
              "head": [
                "Unsur",
                "Keadaan",
                "Pengali"
              ],
              "rows": [
                [
                  "Kayu",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Api",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Tanah",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Logam",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Air",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sepuluh Dewa menurut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 亥 yang sama menjadi Sepuluh Dewa yang berbeda tergantung batang hari. Ketika 亥 adalah cabang hari, tabel ini adalah pembacaan posisi pasangan."
          },
          {
            "table": {
              "caption": "Apa arti batang tersembunyi 亥 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Tanah Yang (戊) — sisa (餘氣)",
                "Kayu Yang (甲) — tengah (中氣)",
                "Air Yang (壬) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Rezeki Tak Terduga (偏財)",
                  "Rekan Sejajar (比肩)",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Rezeki Tetap (正財)",
                  "Saingan (劫財)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Api Yang (丙)",
                  "Ekspresi (食神)",
                  "Sokongan Tak Lazim (偏印)",
                  "Penantang (偏官)"
                ],
                [
                  "Api Yin (丁)",
                  "Pengusik (傷官)",
                  "Pengasuhan (正印)",
                  "Wibawa (正官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Rekan Sejajar (比肩)",
                  "Penantang (偏官)",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Tanah Yin (己)",
                  "Saingan (劫財)",
                  "Wibawa (正官)",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Logam Yang (庚)",
                  "Sokongan Tak Lazim (偏印)",
                  "Rezeki Tak Terduga (偏財)",
                  "Ekspresi (食神)"
                ],
                [
                  "Logam Yin (辛)",
                  "Pengasuhan (正印)",
                  "Rezeki Tetap (正財)",
                  "Pengusik (傷官)"
                ],
                [
                  "Air Yang (壬)",
                  "Penantang (偏官)",
                  "Ekspresi (食神)",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Air Yin (癸)",
                  "Wibawa (正官)",
                  "Pengusik (傷官)",
                  "Saingan (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama terbaca berbeda tergantung batang hari dan cabang bulan.",
              "Hubungan antarcabang seperti harmoni, benturan, dan ketidakselarasan tidak dibahas di sini."
            ]
          },
          {
            "p": "Hubungan antarcabang ada di [bagan dua belas cabang](/guide/branches), dan maknanya sebagai hewan zodiak ada di [letak zodiak dalam saju](/guide/zodiac). Cabang lainnya: [子 (Tikus)](/guide/branch-ja) · [丑 (Sapi)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [卯 (Kelinci)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [未 (Domba)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul)"
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-ja": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 甲子",
    "summary": "Cara Saju-Link membaca pilar hari 甲子 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "甲子 adalah pilar hari nomor 1 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 甲子, batang hari adalah 甲 (Kayu, Yang) dan cabang hari adalah 子 (Tikus). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 1."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 甲 sebagai “Kayu Yang (甲)”, dan kalimat yang ditampilkan layar hasil adalah: \"Pohon tinggi yang tumbuh lurus. Begitu arah ditetapkan ia tidak goyah, dan lebih memilih bertahan daripada menekuk.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 子 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 甲, batang yang disimpan 子 adalah sebagai berikut. Batang utama (癸) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 甲子",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 甲"
              ],
              "rows": [
                [
                  "Air Yang (壬)",
                  "sisa (餘氣)",
                  "{hidJaYeo}",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Air Yin (癸)",
                  "utama (本氣)",
                  "{hidJaBon}",
                  "Pengasuhan (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 甲 sebagai batang hari, Rezeki Tetap adalah 己 dan Wibawa adalah 辛."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 己. 己 tidak terkandung di dalam 子."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 辛. 辛 tidak terkandung di dalam 子."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [癸亥](/guide/pillar-gye-hae) dan berikutnya adalah [乙丑](/guide/pillar-eul-chuk)."
          },
          {
            "p": "Terdiri dari [Kayu Yang (甲)](/guide/stem-gap) dan [子 (Tikus)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-chuk": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 乙丑",
    "summary": "Cara Saju-Link membaca pilar hari 乙丑 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "乙丑 adalah pilar hari nomor 2 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 乙丑, batang hari adalah 乙 (Kayu, Yin) dan cabang hari adalah 丑 (Sapi). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 2."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 乙 sebagai “Kayu Yin (乙)”, dan kalimat yang ditampilkan layar hasil adalah: \"Sulur — rumput yang lentur. Ia melengkung mengikuti keadaan agar terus melaju, dan tidak patah.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 丑 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 乙, batang yang disimpan 丑 adalah sebagai berikut. Batang utama (己) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 乙丑",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 乙"
              ],
              "rows": [
                [
                  "Air Yin (癸)",
                  "sisa (餘氣)",
                  "{hidChukYeo}",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Logam Yin (辛)",
                  "tengah (中氣)",
                  "{hidChukJung}",
                  "Penantang (偏官)"
                ],
                [
                  "Tanah Yin (己)",
                  "utama (本氣)",
                  "{hidChukBon}",
                  "Rezeki Tak Terduga (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 乙 sebagai batang hari, Rezeki Tetap adalah 戊 dan Wibawa adalah 庚."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 戊. 戊 tidak terkandung di dalam 丑."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 庚. 庚 tidak terkandung di dalam 丑."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [甲子](/guide/pillar-gap-ja) dan berikutnya adalah [丙寅](/guide/pillar-byeong-in)."
          },
          {
            "p": "Terdiri dari [Kayu Yin (乙)](/guide/stem-eul) dan [丑 (Sapi)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-in": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 丙寅",
    "summary": "Cara Saju-Link membaca pilar hari 丙寅 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "丙寅 adalah pilar hari nomor 3 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 丙寅, batang hari adalah 丙 (Api, Yang) dan cabang hari adalah 寅 (Harimau). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 3."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 丙 sebagai “Api Yang (丙)”, dan kalimat yang ditampilkan layar hasil adalah: \"Matahari tengah hari. Perasaan tampak apa adanya, ruangan menjadi terang, dan melangkah ke depan terasa wajar.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 寅 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 丙, batang yang disimpan 寅 adalah sebagai berikut. Batang utama (甲) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 丙寅",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 丙"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidInYeo}",
                  "Ekspresi (食神)"
                ],
                [
                  "Api Yang (丙)",
                  "tengah (中氣)",
                  "{hidInJung}",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Kayu Yang (甲)",
                  "utama (本氣)",
                  "{hidInBon}",
                  "Sokongan Tak Lazim (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 丙 sebagai batang hari, Rezeki Tetap adalah 辛 dan Wibawa adalah 癸."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 辛. 辛 tidak terkandung di dalam 寅."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 癸. 癸 tidak terkandung di dalam 寅."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [乙丑](/guide/pillar-eul-chuk) dan berikutnya adalah [丁卯](/guide/pillar-jeong-myo)."
          },
          {
            "p": "Terdiri dari [Api Yang (丙)](/guide/stem-byeong) dan [寅 (Harimau)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-myo": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 丁卯",
    "summary": "Cara Saju-Link membaca pilar hari 丁卯 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "丁卯 adalah pilar hari nomor 4 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 丁卯, batang hari adalah 丁 (Api, Yin) dan cabang hari adalah 卯 (Kelinci). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 4."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 丁 sebagai “Api Yin (丁)”, dan kalimat yang ditampilkan layar hasil adalah: \"Cahaya lilin. Ia menyala pelan dan lama, serta menghangatkan yang terdekat lebih dulu.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 卯 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 丁, batang yang disimpan 卯 adalah sebagai berikut. Batang utama (乙) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 丁卯",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 丁"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "sisa (餘氣)",
                  "{hidMyoYeo}",
                  "Pengasuhan (正印)"
                ],
                [
                  "Kayu Yin (乙)",
                  "utama (本氣)",
                  "{hidMyoBon}",
                  "Sokongan Tak Lazim (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 丁 sebagai batang hari, Rezeki Tetap adalah 庚 dan Wibawa adalah 壬."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 庚. 庚 tidak terkandung di dalam 卯."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 壬. 壬 tidak terkandung di dalam 卯."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [丙寅](/guide/pillar-byeong-in) dan berikutnya adalah [戊辰](/guide/pillar-mu-jin)."
          },
          {
            "p": "Terdiri dari [Api Yin (丁)](/guide/stem-jeong) dan [卯 (Kelinci)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-jin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 戊辰",
    "summary": "Cara Saju-Link membaca pilar hari 戊辰 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "戊辰 adalah pilar hari nomor 5 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 戊辰, batang hari adalah 戊 (Tanah, Yang) dan cabang hari adalah 辰 (Naga). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 5."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 戊 sebagai “Tanah Yang (戊)”, dan kalimat yang ditampilkan layar hasil adalah: \"Tanah lapang dan pegunungan. Sulit digoyahkan dan mudah dijadikan sandaran, meski lambat mengubah keputusan yang sudah diambil.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 辰 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 戊, batang yang disimpan 辰 adalah sebagai berikut. Batang utama (戊) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 戊辰",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 戊"
              ],
              "rows": [
                [
                  "Kayu Yin (乙)",
                  "sisa (餘氣)",
                  "{hidJinYeo}",
                  "Wibawa (正官)"
                ],
                [
                  "Air Yin (癸)",
                  "tengah (中氣)",
                  "{hidJinJung}",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "utama (本氣)",
                  "{hidJinBon}",
                  "Rekan Sejajar (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 戊 sebagai batang hari, Rezeki Tetap adalah 癸 dan Wibawa adalah 乙."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 癸. 癸 terkandung di dalam 辰 (tengah (中氣))."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 乙. 乙 terkandung di dalam 辰 (sisa (餘氣))."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [丁卯](/guide/pillar-jeong-myo) dan berikutnya adalah [己巳](/guide/pillar-gi-sa)."
          },
          {
            "p": "Terdiri dari [Tanah Yang (戊)](/guide/stem-mu) dan [辰 (Naga)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-sa": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 己巳",
    "summary": "Cara Saju-Link membaca pilar hari 己巳 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "己巳 adalah pilar hari nomor 6 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 己巳, batang hari adalah 己 (Tanah, Yin) dan cabang hari adalah 巳 (Ular). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 6."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 己 sebagai “Tanah Yin (己)”, dan kalimat yang ditampilkan layar hasil adalah: \"Tanah ladang. Ia menerima apa pun yang datang dan menumbuhkannya, lebih suka merawat daripada menonjolkan diri.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 巳 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 己, batang yang disimpan 巳 adalah sebagai berikut. Batang utama (丙) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 己巳",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 己"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidSaYeo}",
                  "Saingan (劫財)"
                ],
                [
                  "Logam Yang (庚)",
                  "tengah (中氣)",
                  "{hidSaJung}",
                  "Pengusik (傷官)"
                ],
                [
                  "Api Yang (丙)",
                  "utama (本氣)",
                  "{hidSaBon}",
                  "Pengasuhan (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 己 sebagai batang hari, Rezeki Tetap adalah 壬 dan Wibawa adalah 甲."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 壬. 壬 tidak terkandung di dalam 巳."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 甲. 甲 tidak terkandung di dalam 巳."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [戊辰](/guide/pillar-mu-jin) dan berikutnya adalah [庚午](/guide/pillar-gyeong-o)."
          },
          {
            "p": "Terdiri dari [Tanah Yin (己)](/guide/stem-gi) dan [巳 (Ular)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-o": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 庚午",
    "summary": "Cara Saju-Link membaca pilar hari 庚午 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "庚午 adalah pilar hari nomor 7 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 庚午, batang hari adalah 庚 (Logam, Yang) dan cabang hari adalah 午 (Kuda). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 7."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 庚 sebagai “Logam Yang (庚)”, dan kalimat yang ditampilkan layar hasil adalah: \"Besi yang belum digarap. Tegas dan lugas, dengan sedikit kesabaran untuk hal yang dibiarkan menggantung.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 午 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 庚, batang yang disimpan 午 adalah sebagai berikut. Batang utama (丁) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 庚午",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 庚"
              ],
              "rows": [
                [
                  "Api Yang (丙)",
                  "sisa (餘氣)",
                  "{hidOYeo}",
                  "Penantang (偏官)"
                ],
                [
                  "Tanah Yin (己)",
                  "tengah (中氣)",
                  "{hidOJung}",
                  "Pengasuhan (正印)"
                ],
                [
                  "Api Yin (丁)",
                  "utama (本氣)",
                  "{hidOBon}",
                  "Wibawa (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 庚 sebagai batang hari, Rezeki Tetap adalah 乙 dan Wibawa adalah 丁."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 乙. 乙 tidak terkandung di dalam 午."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 丁. 丁 terkandung di dalam 午 (utama (本氣))."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [己巳](/guide/pillar-gi-sa) dan berikutnya adalah [辛未](/guide/pillar-sin-mi)."
          },
          {
            "p": "Terdiri dari [Logam Yang (庚)](/guide/stem-gyeong) dan [午 (Kuda)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-mi": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 辛未",
    "summary": "Cara Saju-Link membaca pilar hari 辛未 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "辛未 adalah pilar hari nomor 8 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 辛未, batang hari adalah 辛 (Logam, Yin) dan cabang hari adalah 未 (Domba). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 8."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 辛 sebagai “Logam Yin (辛)”, dan kalimat yang ditampilkan layar hasil adalah: \"Permata yang telah diasah. Seleranya halus dan standarnya tinggi; kecerobohan sulit dibiarkan lewat.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 未 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 辛, batang yang disimpan 未 adalah sebagai berikut. Batang utama (己) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 辛未",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 辛"
              ],
              "rows": [
                [
                  "Api Yin (丁)",
                  "sisa (餘氣)",
                  "{hidMiYeo}",
                  "Penantang (偏官)"
                ],
                [
                  "Kayu Yin (乙)",
                  "tengah (中氣)",
                  "{hidMiJung}",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Tanah Yin (己)",
                  "utama (本氣)",
                  "{hidMiBon}",
                  "Sokongan Tak Lazim (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 辛 sebagai batang hari, Rezeki Tetap adalah 甲 dan Wibawa adalah 丙."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 甲. 甲 tidak terkandung di dalam 未."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 丙. 丙 tidak terkandung di dalam 未."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [庚午](/guide/pillar-gyeong-o) dan berikutnya adalah [壬申](/guide/pillar-im-sin)."
          },
          {
            "p": "Terdiri dari [Logam Yin (辛)](/guide/stem-sin) dan [未 (Domba)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 壬申",
    "summary": "Cara Saju-Link membaca pilar hari 壬申 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "壬申 adalah pilar hari nomor 9 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 壬申, batang hari adalah 壬 (Air, Yang) dan cabang hari adalah 申 (Monyet). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 9."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 壬 sebagai “Air Yang (壬)”, dan kalimat yang ditampilkan layar hasil adalah: \"Sungai dan laut. Luas cara pandangnya, dengan mata yang membaca ke mana keadaan mengalir.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 申 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 壬, batang yang disimpan 申 adalah sebagai berikut. Batang utama (庚) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 壬申",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 壬"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidSinYeo}",
                  "Penantang (偏官)"
                ],
                [
                  "Air Yang (壬)",
                  "tengah (中氣)",
                  "{hidSinJung}",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Logam Yang (庚)",
                  "utama (本氣)",
                  "{hidSinBon}",
                  "Sokongan Tak Lazim (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 壬 sebagai batang hari, Rezeki Tetap adalah 丁 dan Wibawa adalah 己."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 丁. 丁 tidak terkandung di dalam 申."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 己. 己 tidak terkandung di dalam 申."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [辛未](/guide/pillar-sin-mi) dan berikutnya adalah [癸酉](/guide/pillar-gye-yu)."
          },
          {
            "p": "Terdiri dari [Air Yang (壬)](/guide/stem-im) dan [申 (Monyet)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-yu": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 癸酉",
    "summary": "Cara Saju-Link membaca pilar hari 癸酉 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "癸酉 adalah pilar hari nomor 10 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 癸酉, batang hari adalah 癸 (Air, Yin) dan cabang hari adalah 酉 (Ayam). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 10."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 癸 sebagai “Air Yin (癸)”, dan kalimat yang ditampilkan layar hasil adalah: \"Embun dan hujan. Ia meresap diam-diam dan membaca suasana sebelum kata-kata terucap.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 酉 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 癸, batang yang disimpan 酉 adalah sebagai berikut. Batang utama (辛) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 癸酉",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 癸"
              ],
              "rows": [
                [
                  "Logam Yang (庚)",
                  "sisa (餘氣)",
                  "{hidYuYeo}",
                  "Pengasuhan (正印)"
                ],
                [
                  "Logam Yin (辛)",
                  "utama (本氣)",
                  "{hidYuBon}",
                  "Sokongan Tak Lazim (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 癸 sebagai batang hari, Rezeki Tetap adalah 丙 dan Wibawa adalah 戊."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 丙. 丙 tidak terkandung di dalam 酉."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 戊. 戊 tidak terkandung di dalam 酉."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [壬申](/guide/pillar-im-sin) dan berikutnya adalah [甲戌](/guide/pillar-gap-sul)."
          },
          {
            "p": "Terdiri dari [Air Yin (癸)](/guide/stem-gye) dan [酉 (Ayam)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sul": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 甲戌",
    "summary": "Cara Saju-Link membaca pilar hari 甲戌 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "甲戌 adalah pilar hari nomor 11 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 甲戌, batang hari adalah 甲 (Kayu, Yang) dan cabang hari adalah 戌 (Anjing). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 11."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 甲 sebagai “Kayu Yang (甲)”, dan kalimat yang ditampilkan layar hasil adalah: \"Pohon tinggi yang tumbuh lurus. Begitu arah ditetapkan ia tidak goyah, dan lebih memilih bertahan daripada menekuk.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 戌 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 甲, batang yang disimpan 戌 adalah sebagai berikut. Batang utama (戊) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 甲戌",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 甲"
              ],
              "rows": [
                [
                  "Logam Yin (辛)",
                  "sisa (餘氣)",
                  "{hidSulYeo}",
                  "Wibawa (正官)"
                ],
                [
                  "Api Yin (丁)",
                  "tengah (中氣)",
                  "{hidSulJung}",
                  "Pengusik (傷官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "utama (本氣)",
                  "{hidSulBon}",
                  "Rezeki Tak Terduga (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 甲 sebagai batang hari, Rezeki Tetap adalah 己 dan Wibawa adalah 辛."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 己. 己 tidak terkandung di dalam 戌."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 辛. 辛 terkandung di dalam 戌 (sisa (餘氣))."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [癸酉](/guide/pillar-gye-yu) dan berikutnya adalah [乙亥](/guide/pillar-eul-hae)."
          },
          {
            "p": "Terdiri dari [Kayu Yang (甲)](/guide/stem-gap) dan [戌 (Anjing)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-hae": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 乙亥",
    "summary": "Cara Saju-Link membaca pilar hari 乙亥 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "乙亥 adalah pilar hari nomor 12 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 乙亥, batang hari adalah 乙 (Kayu, Yin) dan cabang hari adalah 亥 (Babi). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 12."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 乙 sebagai “Kayu Yin (乙)”, dan kalimat yang ditampilkan layar hasil adalah: \"Sulur — rumput yang lentur. Ia melengkung mengikuti keadaan agar terus melaju, dan tidak patah.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 亥 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 乙, batang yang disimpan 亥 adalah sebagai berikut. Batang utama (壬) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 乙亥",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 乙"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidHaeYeo}",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Kayu Yang (甲)",
                  "tengah (中氣)",
                  "{hidHaeJung}",
                  "Saingan (劫財)"
                ],
                [
                  "Air Yang (壬)",
                  "utama (本氣)",
                  "{hidHaeBon}",
                  "Pengasuhan (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 乙 sebagai batang hari, Rezeki Tetap adalah 戊 dan Wibawa adalah 庚."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 戊. 戊 terkandung di dalam 亥 (sisa (餘氣))."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 庚. 庚 tidak terkandung di dalam 亥."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [甲戌](/guide/pillar-gap-sul) dan berikutnya adalah [丙子](/guide/pillar-byeong-ja)."
          },
          {
            "p": "Terdiri dari [Kayu Yin (乙)](/guide/stem-eul) dan [亥 (Babi)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-ja": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 丙子",
    "summary": "Cara Saju-Link membaca pilar hari 丙子 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "丙子 adalah pilar hari nomor 13 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 丙子, batang hari adalah 丙 (Api, Yang) dan cabang hari adalah 子 (Tikus). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 13."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 丙 sebagai “Api Yang (丙)”, dan kalimat yang ditampilkan layar hasil adalah: \"Matahari tengah hari. Perasaan tampak apa adanya, ruangan menjadi terang, dan melangkah ke depan terasa wajar.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 子 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 丙, batang yang disimpan 子 adalah sebagai berikut. Batang utama (癸) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 丙子",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 丙"
              ],
              "rows": [
                [
                  "Air Yang (壬)",
                  "sisa (餘氣)",
                  "{hidJaYeo}",
                  "Penantang (偏官)"
                ],
                [
                  "Air Yin (癸)",
                  "utama (本氣)",
                  "{hidJaBon}",
                  "Wibawa (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 丙 sebagai batang hari, Rezeki Tetap adalah 辛 dan Wibawa adalah 癸."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 辛. 辛 tidak terkandung di dalam 子."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 癸. 癸 terkandung di dalam 子 (utama (本氣))."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [乙亥](/guide/pillar-eul-hae) dan berikutnya adalah [丁丑](/guide/pillar-jeong-chuk)."
          },
          {
            "p": "Terdiri dari [Api Yang (丙)](/guide/stem-byeong) dan [子 (Tikus)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-chuk": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 丁丑",
    "summary": "Cara Saju-Link membaca pilar hari 丁丑 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "丁丑 adalah pilar hari nomor 14 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 丁丑, batang hari adalah 丁 (Api, Yin) dan cabang hari adalah 丑 (Sapi). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 14."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 丁 sebagai “Api Yin (丁)”, dan kalimat yang ditampilkan layar hasil adalah: \"Cahaya lilin. Ia menyala pelan dan lama, serta menghangatkan yang terdekat lebih dulu.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 丑 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 丁, batang yang disimpan 丑 adalah sebagai berikut. Batang utama (己) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 丁丑",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 丁"
              ],
              "rows": [
                [
                  "Air Yin (癸)",
                  "sisa (餘氣)",
                  "{hidChukYeo}",
                  "Penantang (偏官)"
                ],
                [
                  "Logam Yin (辛)",
                  "tengah (中氣)",
                  "{hidChukJung}",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Tanah Yin (己)",
                  "utama (本氣)",
                  "{hidChukBon}",
                  "Ekspresi (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 丁 sebagai batang hari, Rezeki Tetap adalah 庚 dan Wibawa adalah 壬."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 庚. 庚 tidak terkandung di dalam 丑."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 壬. 壬 tidak terkandung di dalam 丑."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [丙子](/guide/pillar-byeong-ja) dan berikutnya adalah [戊寅](/guide/pillar-mu-in)."
          },
          {
            "p": "Terdiri dari [Api Yin (丁)](/guide/stem-jeong) dan [丑 (Sapi)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-in": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 戊寅",
    "summary": "Cara Saju-Link membaca pilar hari 戊寅 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "戊寅 adalah pilar hari nomor 15 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 戊寅, batang hari adalah 戊 (Tanah, Yang) dan cabang hari adalah 寅 (Harimau). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 15."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 戊 sebagai “Tanah Yang (戊)”, dan kalimat yang ditampilkan layar hasil adalah: \"Tanah lapang dan pegunungan. Sulit digoyahkan dan mudah dijadikan sandaran, meski lambat mengubah keputusan yang sudah diambil.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 寅 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 戊, batang yang disimpan 寅 adalah sebagai berikut. Batang utama (甲) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 戊寅",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 戊"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidInYeo}",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Api Yang (丙)",
                  "tengah (中氣)",
                  "{hidInJung}",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Kayu Yang (甲)",
                  "utama (本氣)",
                  "{hidInBon}",
                  "Penantang (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 戊 sebagai batang hari, Rezeki Tetap adalah 癸 dan Wibawa adalah 乙."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 癸. 癸 tidak terkandung di dalam 寅."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 乙. 乙 tidak terkandung di dalam 寅."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [丁丑](/guide/pillar-jeong-chuk) dan berikutnya adalah [己卯](/guide/pillar-gi-myo)."
          },
          {
            "p": "Terdiri dari [Tanah Yang (戊)](/guide/stem-mu) dan [寅 (Harimau)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-myo": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 己卯",
    "summary": "Cara Saju-Link membaca pilar hari 己卯 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "己卯 adalah pilar hari nomor 16 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 己卯, batang hari adalah 己 (Tanah, Yin) dan cabang hari adalah 卯 (Kelinci). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 16."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 己 sebagai “Tanah Yin (己)”, dan kalimat yang ditampilkan layar hasil adalah: \"Tanah ladang. Ia menerima apa pun yang datang dan menumbuhkannya, lebih suka merawat daripada menonjolkan diri.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 卯 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 己, batang yang disimpan 卯 adalah sebagai berikut. Batang utama (乙) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 己卯",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 己"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "sisa (餘氣)",
                  "{hidMyoYeo}",
                  "Wibawa (正官)"
                ],
                [
                  "Kayu Yin (乙)",
                  "utama (本氣)",
                  "{hidMyoBon}",
                  "Penantang (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 己 sebagai batang hari, Rezeki Tetap adalah 壬 dan Wibawa adalah 甲."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 壬. 壬 tidak terkandung di dalam 卯."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 甲. 甲 terkandung di dalam 卯 (sisa (餘氣))."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [戊寅](/guide/pillar-mu-in) dan berikutnya adalah [庚辰](/guide/pillar-gyeong-jin)."
          },
          {
            "p": "Terdiri dari [Tanah Yin (己)](/guide/stem-gi) dan [卯 (Kelinci)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-jin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 庚辰",
    "summary": "Cara Saju-Link membaca pilar hari 庚辰 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "庚辰 adalah pilar hari nomor 17 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 庚辰, batang hari adalah 庚 (Logam, Yang) dan cabang hari adalah 辰 (Naga). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 17."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 庚 sebagai “Logam Yang (庚)”, dan kalimat yang ditampilkan layar hasil adalah: \"Besi yang belum digarap. Tegas dan lugas, dengan sedikit kesabaran untuk hal yang dibiarkan menggantung.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 辰 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 庚, batang yang disimpan 辰 adalah sebagai berikut. Batang utama (戊) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 庚辰",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 庚"
              ],
              "rows": [
                [
                  "Kayu Yin (乙)",
                  "sisa (餘氣)",
                  "{hidJinYeo}",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Air Yin (癸)",
                  "tengah (中氣)",
                  "{hidJinJung}",
                  "Pengusik (傷官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "utama (本氣)",
                  "{hidJinBon}",
                  "Sokongan Tak Lazim (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 庚 sebagai batang hari, Rezeki Tetap adalah 乙 dan Wibawa adalah 丁."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 乙. 乙 terkandung di dalam 辰 (sisa (餘氣))."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 丁. 丁 tidak terkandung di dalam 辰."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [己卯](/guide/pillar-gi-myo) dan berikutnya adalah [辛巳](/guide/pillar-sin-sa)."
          },
          {
            "p": "Terdiri dari [Logam Yang (庚)](/guide/stem-gyeong) dan [辰 (Naga)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-sa": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 辛巳",
    "summary": "Cara Saju-Link membaca pilar hari 辛巳 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "辛巳 adalah pilar hari nomor 18 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 辛巳, batang hari adalah 辛 (Logam, Yin) dan cabang hari adalah 巳 (Ular). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 18."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 辛 sebagai “Logam Yin (辛)”, dan kalimat yang ditampilkan layar hasil adalah: \"Permata yang telah diasah. Seleranya halus dan standarnya tinggi; kecerobohan sulit dibiarkan lewat.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 巳 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 辛, batang yang disimpan 巳 adalah sebagai berikut. Batang utama (丙) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 辛巳",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 辛"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidSaYeo}",
                  "Pengasuhan (正印)"
                ],
                [
                  "Logam Yang (庚)",
                  "tengah (中氣)",
                  "{hidSaJung}",
                  "Saingan (劫財)"
                ],
                [
                  "Api Yang (丙)",
                  "utama (本氣)",
                  "{hidSaBon}",
                  "Wibawa (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 辛 sebagai batang hari, Rezeki Tetap adalah 甲 dan Wibawa adalah 丙."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 甲. 甲 tidak terkandung di dalam 巳."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 丙. 丙 terkandung di dalam 巳 (utama (本氣))."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [庚辰](/guide/pillar-gyeong-jin) dan berikutnya adalah [壬午](/guide/pillar-im-o)."
          },
          {
            "p": "Terdiri dari [Logam Yin (辛)](/guide/stem-sin) dan [巳 (Ular)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-o": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 壬午",
    "summary": "Cara Saju-Link membaca pilar hari 壬午 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "壬午 adalah pilar hari nomor 19 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 壬午, batang hari adalah 壬 (Air, Yang) dan cabang hari adalah 午 (Kuda). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 19."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 壬 sebagai “Air Yang (壬)”, dan kalimat yang ditampilkan layar hasil adalah: \"Sungai dan laut. Luas cara pandangnya, dengan mata yang membaca ke mana keadaan mengalir.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 午 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 壬, batang yang disimpan 午 adalah sebagai berikut. Batang utama (丁) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 壬午",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 壬"
              ],
              "rows": [
                [
                  "Api Yang (丙)",
                  "sisa (餘氣)",
                  "{hidOYeo}",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Tanah Yin (己)",
                  "tengah (中氣)",
                  "{hidOJung}",
                  "Wibawa (正官)"
                ],
                [
                  "Api Yin (丁)",
                  "utama (本氣)",
                  "{hidOBon}",
                  "Rezeki Tetap (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 壬 sebagai batang hari, Rezeki Tetap adalah 丁 dan Wibawa adalah 己."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 丁. 丁 terkandung di dalam 午 (utama (本氣))."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 己. 己 terkandung di dalam 午 (tengah (中氣))."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [辛巳](/guide/pillar-sin-sa) dan berikutnya adalah [癸未](/guide/pillar-gye-mi)."
          },
          {
            "p": "Terdiri dari [Air Yang (壬)](/guide/stem-im) dan [午 (Kuda)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-mi": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 癸未",
    "summary": "Cara Saju-Link membaca pilar hari 癸未 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "癸未 adalah pilar hari nomor 20 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 癸未, batang hari adalah 癸 (Air, Yin) dan cabang hari adalah 未 (Domba). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 20."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 癸 sebagai “Air Yin (癸)”, dan kalimat yang ditampilkan layar hasil adalah: \"Embun dan hujan. Ia meresap diam-diam dan membaca suasana sebelum kata-kata terucap.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 未 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 癸, batang yang disimpan 未 adalah sebagai berikut. Batang utama (己) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 癸未",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 癸"
              ],
              "rows": [
                [
                  "Api Yin (丁)",
                  "sisa (餘氣)",
                  "{hidMiYeo}",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "tengah (中氣)",
                  "{hidMiJung}",
                  "Ekspresi (食神)"
                ],
                [
                  "Tanah Yin (己)",
                  "utama (本氣)",
                  "{hidMiBon}",
                  "Penantang (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 癸 sebagai batang hari, Rezeki Tetap adalah 丙 dan Wibawa adalah 戊."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 丙. 丙 tidak terkandung di dalam 未."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 戊. 戊 tidak terkandung di dalam 未."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [壬午](/guide/pillar-im-o) dan berikutnya adalah [甲申](/guide/pillar-gap-sin)."
          },
          {
            "p": "Terdiri dari [Air Yin (癸)](/guide/stem-gye) dan [未 (Domba)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 甲申",
    "summary": "Cara Saju-Link membaca pilar hari 甲申 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "甲申 adalah pilar hari nomor 21 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 甲申, batang hari adalah 甲 (Kayu, Yang) dan cabang hari adalah 申 (Monyet). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 21."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 甲 sebagai “Kayu Yang (甲)”, dan kalimat yang ditampilkan layar hasil adalah: \"Pohon tinggi yang tumbuh lurus. Begitu arah ditetapkan ia tidak goyah, dan lebih memilih bertahan daripada menekuk.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 申 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 甲, batang yang disimpan 申 adalah sebagai berikut. Batang utama (庚) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 甲申",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 甲"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidSinYeo}",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Air Yang (壬)",
                  "tengah (中氣)",
                  "{hidSinJung}",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Logam Yang (庚)",
                  "utama (本氣)",
                  "{hidSinBon}",
                  "Penantang (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 甲 sebagai batang hari, Rezeki Tetap adalah 己 dan Wibawa adalah 辛."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 己. 己 tidak terkandung di dalam 申."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 辛. 辛 tidak terkandung di dalam 申."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [癸未](/guide/pillar-gye-mi) dan berikutnya adalah [乙酉](/guide/pillar-eul-yu)."
          },
          {
            "p": "Terdiri dari [Kayu Yang (甲)](/guide/stem-gap) dan [申 (Monyet)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-yu": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 乙酉",
    "summary": "Cara Saju-Link membaca pilar hari 乙酉 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "乙酉 adalah pilar hari nomor 22 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 乙酉, batang hari adalah 乙 (Kayu, Yin) dan cabang hari adalah 酉 (Ayam). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 22."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 乙 sebagai “Kayu Yin (乙)”, dan kalimat yang ditampilkan layar hasil adalah: \"Sulur — rumput yang lentur. Ia melengkung mengikuti keadaan agar terus melaju, dan tidak patah.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 酉 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 乙, batang yang disimpan 酉 adalah sebagai berikut. Batang utama (辛) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 乙酉",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 乙"
              ],
              "rows": [
                [
                  "Logam Yang (庚)",
                  "sisa (餘氣)",
                  "{hidYuYeo}",
                  "Wibawa (正官)"
                ],
                [
                  "Logam Yin (辛)",
                  "utama (本氣)",
                  "{hidYuBon}",
                  "Penantang (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 乙 sebagai batang hari, Rezeki Tetap adalah 戊 dan Wibawa adalah 庚."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 戊. 戊 tidak terkandung di dalam 酉."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 庚. 庚 terkandung di dalam 酉 (sisa (餘氣))."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [甲申](/guide/pillar-gap-sin) dan berikutnya adalah [丙戌](/guide/pillar-byeong-sul)."
          },
          {
            "p": "Terdiri dari [Kayu Yin (乙)](/guide/stem-eul) dan [酉 (Ayam)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sul": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 丙戌",
    "summary": "Cara Saju-Link membaca pilar hari 丙戌 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "丙戌 adalah pilar hari nomor 23 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 丙戌, batang hari adalah 丙 (Api, Yang) dan cabang hari adalah 戌 (Anjing). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 23."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 丙 sebagai “Api Yang (丙)”, dan kalimat yang ditampilkan layar hasil adalah: \"Matahari tengah hari. Perasaan tampak apa adanya, ruangan menjadi terang, dan melangkah ke depan terasa wajar.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 戌 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 丙, batang yang disimpan 戌 adalah sebagai berikut. Batang utama (戊) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 丙戌",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 丙"
              ],
              "rows": [
                [
                  "Logam Yin (辛)",
                  "sisa (餘氣)",
                  "{hidSulYeo}",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Api Yin (丁)",
                  "tengah (中氣)",
                  "{hidSulJung}",
                  "Saingan (劫財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "utama (本氣)",
                  "{hidSulBon}",
                  "Ekspresi (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 丙 sebagai batang hari, Rezeki Tetap adalah 辛 dan Wibawa adalah 癸."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 辛. 辛 terkandung di dalam 戌 (sisa (餘氣))."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 癸. 癸 tidak terkandung di dalam 戌."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [乙酉](/guide/pillar-eul-yu) dan berikutnya adalah [丁亥](/guide/pillar-jeong-hae)."
          },
          {
            "p": "Terdiri dari [Api Yang (丙)](/guide/stem-byeong) dan [戌 (Anjing)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-hae": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 丁亥",
    "summary": "Cara Saju-Link membaca pilar hari 丁亥 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "丁亥 adalah pilar hari nomor 24 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 丁亥, batang hari adalah 丁 (Api, Yin) dan cabang hari adalah 亥 (Babi). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 24."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 丁 sebagai “Api Yin (丁)”, dan kalimat yang ditampilkan layar hasil adalah: \"Cahaya lilin. Ia menyala pelan dan lama, serta menghangatkan yang terdekat lebih dulu.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 亥 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 丁, batang yang disimpan 亥 adalah sebagai berikut. Batang utama (壬) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 丁亥",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 丁"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidHaeYeo}",
                  "Pengusik (傷官)"
                ],
                [
                  "Kayu Yang (甲)",
                  "tengah (中氣)",
                  "{hidHaeJung}",
                  "Pengasuhan (正印)"
                ],
                [
                  "Air Yang (壬)",
                  "utama (本氣)",
                  "{hidHaeBon}",
                  "Wibawa (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 丁 sebagai batang hari, Rezeki Tetap adalah 庚 dan Wibawa adalah 壬."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 庚. 庚 tidak terkandung di dalam 亥."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 壬. 壬 terkandung di dalam 亥 (utama (本氣))."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [丙戌](/guide/pillar-byeong-sul) dan berikutnya adalah [戊子](/guide/pillar-mu-ja)."
          },
          {
            "p": "Terdiri dari [Api Yin (丁)](/guide/stem-jeong) dan [亥 (Babi)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-ja": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 戊子",
    "summary": "Cara Saju-Link membaca pilar hari 戊子 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "戊子 adalah pilar hari nomor 25 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 戊子, batang hari adalah 戊 (Tanah, Yang) dan cabang hari adalah 子 (Tikus). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 25."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 戊 sebagai “Tanah Yang (戊)”, dan kalimat yang ditampilkan layar hasil adalah: \"Tanah lapang dan pegunungan. Sulit digoyahkan dan mudah dijadikan sandaran, meski lambat mengubah keputusan yang sudah diambil.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 子 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 戊, batang yang disimpan 子 adalah sebagai berikut. Batang utama (癸) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 戊子",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 戊"
              ],
              "rows": [
                [
                  "Air Yang (壬)",
                  "sisa (餘氣)",
                  "{hidJaYeo}",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Air Yin (癸)",
                  "utama (本氣)",
                  "{hidJaBon}",
                  "Rezeki Tetap (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 戊 sebagai batang hari, Rezeki Tetap adalah 癸 dan Wibawa adalah 乙."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 癸. 癸 terkandung di dalam 子 (utama (本氣))."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 乙. 乙 tidak terkandung di dalam 子."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [丁亥](/guide/pillar-jeong-hae) dan berikutnya adalah [己丑](/guide/pillar-gi-chuk)."
          },
          {
            "p": "Terdiri dari [Tanah Yang (戊)](/guide/stem-mu) dan [子 (Tikus)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-chuk": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 己丑",
    "summary": "Cara Saju-Link membaca pilar hari 己丑 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "己丑 adalah pilar hari nomor 26 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 己丑, batang hari adalah 己 (Tanah, Yin) dan cabang hari adalah 丑 (Sapi). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 26."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 己 sebagai “Tanah Yin (己)”, dan kalimat yang ditampilkan layar hasil adalah: \"Tanah ladang. Ia menerima apa pun yang datang dan menumbuhkannya, lebih suka merawat daripada menonjolkan diri.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 丑 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 己, batang yang disimpan 丑 adalah sebagai berikut. Batang utama (己) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 己丑",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 己"
              ],
              "rows": [
                [
                  "Air Yin (癸)",
                  "sisa (餘氣)",
                  "{hidChukYeo}",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Logam Yin (辛)",
                  "tengah (中氣)",
                  "{hidChukJung}",
                  "Ekspresi (食神)"
                ],
                [
                  "Tanah Yin (己)",
                  "utama (本氣)",
                  "{hidChukBon}",
                  "Rekan Sejajar (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 己 sebagai batang hari, Rezeki Tetap adalah 壬 dan Wibawa adalah 甲."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 壬. 壬 tidak terkandung di dalam 丑."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 甲. 甲 tidak terkandung di dalam 丑."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [戊子](/guide/pillar-mu-ja) dan berikutnya adalah [庚寅](/guide/pillar-gyeong-in)."
          },
          {
            "p": "Terdiri dari [Tanah Yin (己)](/guide/stem-gi) dan [丑 (Sapi)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-in": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 庚寅",
    "summary": "Cara Saju-Link membaca pilar hari 庚寅 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "庚寅 adalah pilar hari nomor 27 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 庚寅, batang hari adalah 庚 (Logam, Yang) dan cabang hari adalah 寅 (Harimau). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 27."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 庚 sebagai “Logam Yang (庚)”, dan kalimat yang ditampilkan layar hasil adalah: \"Besi yang belum digarap. Tegas dan lugas, dengan sedikit kesabaran untuk hal yang dibiarkan menggantung.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 寅 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 庚, batang yang disimpan 寅 adalah sebagai berikut. Batang utama (甲) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 庚寅",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 庚"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidInYeo}",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Api Yang (丙)",
                  "tengah (中氣)",
                  "{hidInJung}",
                  "Penantang (偏官)"
                ],
                [
                  "Kayu Yang (甲)",
                  "utama (本氣)",
                  "{hidInBon}",
                  "Rezeki Tak Terduga (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 庚 sebagai batang hari, Rezeki Tetap adalah 乙 dan Wibawa adalah 丁."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 乙. 乙 tidak terkandung di dalam 寅."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 丁. 丁 tidak terkandung di dalam 寅."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [己丑](/guide/pillar-gi-chuk) dan berikutnya adalah [辛卯](/guide/pillar-sin-myo)."
          },
          {
            "p": "Terdiri dari [Logam Yang (庚)](/guide/stem-gyeong) dan [寅 (Harimau)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-myo": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 辛卯",
    "summary": "Cara Saju-Link membaca pilar hari 辛卯 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "辛卯 adalah pilar hari nomor 28 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 辛卯, batang hari adalah 辛 (Logam, Yin) dan cabang hari adalah 卯 (Kelinci). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 28."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 辛 sebagai “Logam Yin (辛)”, dan kalimat yang ditampilkan layar hasil adalah: \"Permata yang telah diasah. Seleranya halus dan standarnya tinggi; kecerobohan sulit dibiarkan lewat.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 卯 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 辛, batang yang disimpan 卯 adalah sebagai berikut. Batang utama (乙) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 辛卯",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 辛"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "sisa (餘氣)",
                  "{hidMyoYeo}",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "utama (本氣)",
                  "{hidMyoBon}",
                  "Rezeki Tak Terduga (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 辛 sebagai batang hari, Rezeki Tetap adalah 甲 dan Wibawa adalah 丙."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 甲. 甲 terkandung di dalam 卯 (sisa (餘氣))."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 丙. 丙 tidak terkandung di dalam 卯."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [庚寅](/guide/pillar-gyeong-in) dan berikutnya adalah [壬辰](/guide/pillar-im-jin)."
          },
          {
            "p": "Terdiri dari [Logam Yin (辛)](/guide/stem-sin) dan [卯 (Kelinci)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-jin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 壬辰",
    "summary": "Cara Saju-Link membaca pilar hari 壬辰 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "壬辰 adalah pilar hari nomor 29 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 壬辰, batang hari adalah 壬 (Air, Yang) dan cabang hari adalah 辰 (Naga). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 29."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 壬 sebagai “Air Yang (壬)”, dan kalimat yang ditampilkan layar hasil adalah: \"Sungai dan laut. Luas cara pandangnya, dengan mata yang membaca ke mana keadaan mengalir.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 辰 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 壬, batang yang disimpan 辰 adalah sebagai berikut. Batang utama (戊) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 壬辰",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 壬"
              ],
              "rows": [
                [
                  "Kayu Yin (乙)",
                  "sisa (餘氣)",
                  "{hidJinYeo}",
                  "Pengusik (傷官)"
                ],
                [
                  "Air Yin (癸)",
                  "tengah (中氣)",
                  "{hidJinJung}",
                  "Saingan (劫財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "utama (本氣)",
                  "{hidJinBon}",
                  "Penantang (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 壬 sebagai batang hari, Rezeki Tetap adalah 丁 dan Wibawa adalah 己."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 丁. 丁 tidak terkandung di dalam 辰."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 己. 己 tidak terkandung di dalam 辰."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [辛卯](/guide/pillar-sin-myo) dan berikutnya adalah [癸巳](/guide/pillar-gye-sa)."
          },
          {
            "p": "Terdiri dari [Air Yang (壬)](/guide/stem-im) dan [辰 (Naga)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-sa": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 癸巳",
    "summary": "Cara Saju-Link membaca pilar hari 癸巳 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "癸巳 adalah pilar hari nomor 30 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 癸巳, batang hari adalah 癸 (Air, Yin) dan cabang hari adalah 巳 (Ular). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 30."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 癸 sebagai “Air Yin (癸)”, dan kalimat yang ditampilkan layar hasil adalah: \"Embun dan hujan. Ia meresap diam-diam dan membaca suasana sebelum kata-kata terucap.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 巳 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 癸, batang yang disimpan 巳 adalah sebagai berikut. Batang utama (丙) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 癸巳",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 癸"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidSaYeo}",
                  "Wibawa (正官)"
                ],
                [
                  "Logam Yang (庚)",
                  "tengah (中氣)",
                  "{hidSaJung}",
                  "Pengasuhan (正印)"
                ],
                [
                  "Api Yang (丙)",
                  "utama (本氣)",
                  "{hidSaBon}",
                  "Rezeki Tetap (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 癸 sebagai batang hari, Rezeki Tetap adalah 丙 dan Wibawa adalah 戊."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 丙. 丙 terkandung di dalam 巳 (utama (本氣))."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 戊. 戊 terkandung di dalam 巳 (sisa (餘氣))."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [壬辰](/guide/pillar-im-jin) dan berikutnya adalah [甲午](/guide/pillar-gap-o)."
          },
          {
            "p": "Terdiri dari [Air Yin (癸)](/guide/stem-gye) dan [巳 (Ular)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-o": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 甲午",
    "summary": "Cara Saju-Link membaca pilar hari 甲午 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "甲午 adalah pilar hari nomor 31 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 甲午, batang hari adalah 甲 (Kayu, Yang) dan cabang hari adalah 午 (Kuda). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 31."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 甲 sebagai “Kayu Yang (甲)”, dan kalimat yang ditampilkan layar hasil adalah: \"Pohon tinggi yang tumbuh lurus. Begitu arah ditetapkan ia tidak goyah, dan lebih memilih bertahan daripada menekuk.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 午 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 甲, batang yang disimpan 午 adalah sebagai berikut. Batang utama (丁) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 甲午",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 甲"
              ],
              "rows": [
                [
                  "Api Yang (丙)",
                  "sisa (餘氣)",
                  "{hidOYeo}",
                  "Ekspresi (食神)"
                ],
                [
                  "Tanah Yin (己)",
                  "tengah (中氣)",
                  "{hidOJung}",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Api Yin (丁)",
                  "utama (本氣)",
                  "{hidOBon}",
                  "Pengusik (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 甲 sebagai batang hari, Rezeki Tetap adalah 己 dan Wibawa adalah 辛."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 己. 己 terkandung di dalam 午 (tengah (中氣))."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 辛. 辛 tidak terkandung di dalam 午."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [癸巳](/guide/pillar-gye-sa) dan berikutnya adalah [乙未](/guide/pillar-eul-mi)."
          },
          {
            "p": "Terdiri dari [Kayu Yang (甲)](/guide/stem-gap) dan [午 (Kuda)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-mi": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 乙未",
    "summary": "Cara Saju-Link membaca pilar hari 乙未 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "乙未 adalah pilar hari nomor 32 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 乙未, batang hari adalah 乙 (Kayu, Yin) dan cabang hari adalah 未 (Domba). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 32."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 乙 sebagai “Kayu Yin (乙)”, dan kalimat yang ditampilkan layar hasil adalah: \"Sulur — rumput yang lentur. Ia melengkung mengikuti keadaan agar terus melaju, dan tidak patah.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 未 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 乙, batang yang disimpan 未 adalah sebagai berikut. Batang utama (己) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 乙未",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 乙"
              ],
              "rows": [
                [
                  "Api Yin (丁)",
                  "sisa (餘氣)",
                  "{hidMiYeo}",
                  "Ekspresi (食神)"
                ],
                [
                  "Kayu Yin (乙)",
                  "tengah (中氣)",
                  "{hidMiJung}",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Tanah Yin (己)",
                  "utama (本氣)",
                  "{hidMiBon}",
                  "Rezeki Tak Terduga (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 乙 sebagai batang hari, Rezeki Tetap adalah 戊 dan Wibawa adalah 庚."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 戊. 戊 tidak terkandung di dalam 未."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 庚. 庚 tidak terkandung di dalam 未."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [甲午](/guide/pillar-gap-o) dan berikutnya adalah [丙申](/guide/pillar-byeong-sin)."
          },
          {
            "p": "Terdiri dari [Kayu Yin (乙)](/guide/stem-eul) dan [未 (Domba)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 丙申",
    "summary": "Cara Saju-Link membaca pilar hari 丙申 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "丙申 adalah pilar hari nomor 33 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 丙申, batang hari adalah 丙 (Api, Yang) dan cabang hari adalah 申 (Monyet). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 33."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 丙 sebagai “Api Yang (丙)”, dan kalimat yang ditampilkan layar hasil adalah: \"Matahari tengah hari. Perasaan tampak apa adanya, ruangan menjadi terang, dan melangkah ke depan terasa wajar.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 申 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 丙, batang yang disimpan 申 adalah sebagai berikut. Batang utama (庚) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 丙申",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 丙"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidSinYeo}",
                  "Ekspresi (食神)"
                ],
                [
                  "Air Yang (壬)",
                  "tengah (中氣)",
                  "{hidSinJung}",
                  "Penantang (偏官)"
                ],
                [
                  "Logam Yang (庚)",
                  "utama (本氣)",
                  "{hidSinBon}",
                  "Rezeki Tak Terduga (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 丙 sebagai batang hari, Rezeki Tetap adalah 辛 dan Wibawa adalah 癸."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 辛. 辛 tidak terkandung di dalam 申."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 癸. 癸 tidak terkandung di dalam 申."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [乙未](/guide/pillar-eul-mi) dan berikutnya adalah [丁酉](/guide/pillar-jeong-yu)."
          },
          {
            "p": "Terdiri dari [Api Yang (丙)](/guide/stem-byeong) dan [申 (Monyet)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-yu": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 丁酉",
    "summary": "Cara Saju-Link membaca pilar hari 丁酉 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "丁酉 adalah pilar hari nomor 34 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 丁酉, batang hari adalah 丁 (Api, Yin) dan cabang hari adalah 酉 (Ayam). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 34."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 丁 sebagai “Api Yin (丁)”, dan kalimat yang ditampilkan layar hasil adalah: \"Cahaya lilin. Ia menyala pelan dan lama, serta menghangatkan yang terdekat lebih dulu.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 酉 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 丁, batang yang disimpan 酉 adalah sebagai berikut. Batang utama (辛) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 丁酉",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 丁"
              ],
              "rows": [
                [
                  "Logam Yang (庚)",
                  "sisa (餘氣)",
                  "{hidYuYeo}",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Logam Yin (辛)",
                  "utama (本氣)",
                  "{hidYuBon}",
                  "Rezeki Tak Terduga (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 丁 sebagai batang hari, Rezeki Tetap adalah 庚 dan Wibawa adalah 壬."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 庚. 庚 terkandung di dalam 酉 (sisa (餘氣))."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 壬. 壬 tidak terkandung di dalam 酉."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [丙申](/guide/pillar-byeong-sin) dan berikutnya adalah [戊戌](/guide/pillar-mu-sul)."
          },
          {
            "p": "Terdiri dari [Api Yin (丁)](/guide/stem-jeong) dan [酉 (Ayam)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sul": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 戊戌",
    "summary": "Cara Saju-Link membaca pilar hari 戊戌 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "戊戌 adalah pilar hari nomor 35 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 戊戌, batang hari adalah 戊 (Tanah, Yang) dan cabang hari adalah 戌 (Anjing). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 35."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 戊 sebagai “Tanah Yang (戊)”, dan kalimat yang ditampilkan layar hasil adalah: \"Tanah lapang dan pegunungan. Sulit digoyahkan dan mudah dijadikan sandaran, meski lambat mengubah keputusan yang sudah diambil.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 戌 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 戊, batang yang disimpan 戌 adalah sebagai berikut. Batang utama (戊) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 戊戌",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 戊"
              ],
              "rows": [
                [
                  "Logam Yin (辛)",
                  "sisa (餘氣)",
                  "{hidSulYeo}",
                  "Pengusik (傷官)"
                ],
                [
                  "Api Yin (丁)",
                  "tengah (中氣)",
                  "{hidSulJung}",
                  "Pengasuhan (正印)"
                ],
                [
                  "Tanah Yang (戊)",
                  "utama (本氣)",
                  "{hidSulBon}",
                  "Rekan Sejajar (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 戊 sebagai batang hari, Rezeki Tetap adalah 癸 dan Wibawa adalah 乙."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 癸. 癸 tidak terkandung di dalam 戌."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 乙. 乙 tidak terkandung di dalam 戌."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [丁酉](/guide/pillar-jeong-yu) dan berikutnya adalah [己亥](/guide/pillar-gi-hae)."
          },
          {
            "p": "Terdiri dari [Tanah Yang (戊)](/guide/stem-mu) dan [戌 (Anjing)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-hae": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 己亥",
    "summary": "Cara Saju-Link membaca pilar hari 己亥 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "己亥 adalah pilar hari nomor 36 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 己亥, batang hari adalah 己 (Tanah, Yin) dan cabang hari adalah 亥 (Babi). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 36."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 己 sebagai “Tanah Yin (己)”, dan kalimat yang ditampilkan layar hasil adalah: \"Tanah ladang. Ia menerima apa pun yang datang dan menumbuhkannya, lebih suka merawat daripada menonjolkan diri.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 亥 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 己, batang yang disimpan 亥 adalah sebagai berikut. Batang utama (壬) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 己亥",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 己"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidHaeYeo}",
                  "Saingan (劫財)"
                ],
                [
                  "Kayu Yang (甲)",
                  "tengah (中氣)",
                  "{hidHaeJung}",
                  "Wibawa (正官)"
                ],
                [
                  "Air Yang (壬)",
                  "utama (本氣)",
                  "{hidHaeBon}",
                  "Rezeki Tetap (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 己 sebagai batang hari, Rezeki Tetap adalah 壬 dan Wibawa adalah 甲."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 壬. 壬 terkandung di dalam 亥 (utama (本氣))."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 甲. 甲 terkandung di dalam 亥 (tengah (中氣))."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [戊戌](/guide/pillar-mu-sul) dan berikutnya adalah [庚子](/guide/pillar-gyeong-ja)."
          },
          {
            "p": "Terdiri dari [Tanah Yin (己)](/guide/stem-gi) dan [亥 (Babi)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-ja": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 庚子",
    "summary": "Cara Saju-Link membaca pilar hari 庚子 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "庚子 adalah pilar hari nomor 37 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 庚子, batang hari adalah 庚 (Logam, Yang) dan cabang hari adalah 子 (Tikus). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 37."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 庚 sebagai “Logam Yang (庚)”, dan kalimat yang ditampilkan layar hasil adalah: \"Besi yang belum digarap. Tegas dan lugas, dengan sedikit kesabaran untuk hal yang dibiarkan menggantung.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 子 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 庚, batang yang disimpan 子 adalah sebagai berikut. Batang utama (癸) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 庚子",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 庚"
              ],
              "rows": [
                [
                  "Air Yang (壬)",
                  "sisa (餘氣)",
                  "{hidJaYeo}",
                  "Ekspresi (食神)"
                ],
                [
                  "Air Yin (癸)",
                  "utama (本氣)",
                  "{hidJaBon}",
                  "Pengusik (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 庚 sebagai batang hari, Rezeki Tetap adalah 乙 dan Wibawa adalah 丁."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 乙. 乙 tidak terkandung di dalam 子."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 丁. 丁 tidak terkandung di dalam 子."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [己亥](/guide/pillar-gi-hae) dan berikutnya adalah [辛丑](/guide/pillar-sin-chuk)."
          },
          {
            "p": "Terdiri dari [Logam Yang (庚)](/guide/stem-gyeong) dan [子 (Tikus)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-chuk": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 辛丑",
    "summary": "Cara Saju-Link membaca pilar hari 辛丑 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "辛丑 adalah pilar hari nomor 38 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 辛丑, batang hari adalah 辛 (Logam, Yin) dan cabang hari adalah 丑 (Sapi). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 38."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 辛 sebagai “Logam Yin (辛)”, dan kalimat yang ditampilkan layar hasil adalah: \"Permata yang telah diasah. Seleranya halus dan standarnya tinggi; kecerobohan sulit dibiarkan lewat.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 丑 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 辛, batang yang disimpan 丑 adalah sebagai berikut. Batang utama (己) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 辛丑",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 辛"
              ],
              "rows": [
                [
                  "Air Yin (癸)",
                  "sisa (餘氣)",
                  "{hidChukYeo}",
                  "Ekspresi (食神)"
                ],
                [
                  "Logam Yin (辛)",
                  "tengah (中氣)",
                  "{hidChukJung}",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Tanah Yin (己)",
                  "utama (本氣)",
                  "{hidChukBon}",
                  "Sokongan Tak Lazim (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 辛 sebagai batang hari, Rezeki Tetap adalah 甲 dan Wibawa adalah 丙."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 甲. 甲 tidak terkandung di dalam 丑."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 丙. 丙 tidak terkandung di dalam 丑."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [庚子](/guide/pillar-gyeong-ja) dan berikutnya adalah [壬寅](/guide/pillar-im-in)."
          },
          {
            "p": "Terdiri dari [Logam Yin (辛)](/guide/stem-sin) dan [丑 (Sapi)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-in": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 壬寅",
    "summary": "Cara Saju-Link membaca pilar hari 壬寅 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "壬寅 adalah pilar hari nomor 39 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 壬寅, batang hari adalah 壬 (Air, Yang) dan cabang hari adalah 寅 (Harimau). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 39."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 壬 sebagai “Air Yang (壬)”, dan kalimat yang ditampilkan layar hasil adalah: \"Sungai dan laut. Luas cara pandangnya, dengan mata yang membaca ke mana keadaan mengalir.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 寅 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 壬, batang yang disimpan 寅 adalah sebagai berikut. Batang utama (甲) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 壬寅",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 壬"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidInYeo}",
                  "Penantang (偏官)"
                ],
                [
                  "Api Yang (丙)",
                  "tengah (中氣)",
                  "{hidInJung}",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Kayu Yang (甲)",
                  "utama (本氣)",
                  "{hidInBon}",
                  "Ekspresi (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 壬 sebagai batang hari, Rezeki Tetap adalah 丁 dan Wibawa adalah 己."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 丁. 丁 tidak terkandung di dalam 寅."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 己. 己 tidak terkandung di dalam 寅."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [辛丑](/guide/pillar-sin-chuk) dan berikutnya adalah [癸卯](/guide/pillar-gye-myo)."
          },
          {
            "p": "Terdiri dari [Air Yang (壬)](/guide/stem-im) dan [寅 (Harimau)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-myo": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 癸卯",
    "summary": "Cara Saju-Link membaca pilar hari 癸卯 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "癸卯 adalah pilar hari nomor 40 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 癸卯, batang hari adalah 癸 (Air, Yin) dan cabang hari adalah 卯 (Kelinci). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 40."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 癸 sebagai “Air Yin (癸)”, dan kalimat yang ditampilkan layar hasil adalah: \"Embun dan hujan. Ia meresap diam-diam dan membaca suasana sebelum kata-kata terucap.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 卯 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 癸, batang yang disimpan 卯 adalah sebagai berikut. Batang utama (乙) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 癸卯",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 癸"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "sisa (餘氣)",
                  "{hidMyoYeo}",
                  "Pengusik (傷官)"
                ],
                [
                  "Kayu Yin (乙)",
                  "utama (本氣)",
                  "{hidMyoBon}",
                  "Ekspresi (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 癸 sebagai batang hari, Rezeki Tetap adalah 丙 dan Wibawa adalah 戊."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 丙. 丙 tidak terkandung di dalam 卯."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 戊. 戊 tidak terkandung di dalam 卯."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [壬寅](/guide/pillar-im-in) dan berikutnya adalah [甲辰](/guide/pillar-gap-jin)."
          },
          {
            "p": "Terdiri dari [Air Yin (癸)](/guide/stem-gye) dan [卯 (Kelinci)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-jin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 甲辰",
    "summary": "Cara Saju-Link membaca pilar hari 甲辰 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "甲辰 adalah pilar hari nomor 41 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 甲辰, batang hari adalah 甲 (Kayu, Yang) dan cabang hari adalah 辰 (Naga). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 41."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 甲 sebagai “Kayu Yang (甲)”, dan kalimat yang ditampilkan layar hasil adalah: \"Pohon tinggi yang tumbuh lurus. Begitu arah ditetapkan ia tidak goyah, dan lebih memilih bertahan daripada menekuk.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 辰 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 甲, batang yang disimpan 辰 adalah sebagai berikut. Batang utama (戊) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 甲辰",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 甲"
              ],
              "rows": [
                [
                  "Kayu Yin (乙)",
                  "sisa (餘氣)",
                  "{hidJinYeo}",
                  "Saingan (劫財)"
                ],
                [
                  "Air Yin (癸)",
                  "tengah (中氣)",
                  "{hidJinJung}",
                  "Pengasuhan (正印)"
                ],
                [
                  "Tanah Yang (戊)",
                  "utama (本氣)",
                  "{hidJinBon}",
                  "Rezeki Tak Terduga (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 甲 sebagai batang hari, Rezeki Tetap adalah 己 dan Wibawa adalah 辛."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 己. 己 tidak terkandung di dalam 辰."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 辛. 辛 tidak terkandung di dalam 辰."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [癸卯](/guide/pillar-gye-myo) dan berikutnya adalah [乙巳](/guide/pillar-eul-sa)."
          },
          {
            "p": "Terdiri dari [Kayu Yang (甲)](/guide/stem-gap) dan [辰 (Naga)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-sa": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 乙巳",
    "summary": "Cara Saju-Link membaca pilar hari 乙巳 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "乙巳 adalah pilar hari nomor 42 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 乙巳, batang hari adalah 乙 (Kayu, Yin) dan cabang hari adalah 巳 (Ular). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 42."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 乙 sebagai “Kayu Yin (乙)”, dan kalimat yang ditampilkan layar hasil adalah: \"Sulur — rumput yang lentur. Ia melengkung mengikuti keadaan agar terus melaju, dan tidak patah.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 巳 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 乙, batang yang disimpan 巳 adalah sebagai berikut. Batang utama (丙) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 乙巳",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 乙"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidSaYeo}",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Logam Yang (庚)",
                  "tengah (中氣)",
                  "{hidSaJung}",
                  "Wibawa (正官)"
                ],
                [
                  "Api Yang (丙)",
                  "utama (本氣)",
                  "{hidSaBon}",
                  "Pengusik (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 乙 sebagai batang hari, Rezeki Tetap adalah 戊 dan Wibawa adalah 庚."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 戊. 戊 terkandung di dalam 巳 (sisa (餘氣))."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 庚. 庚 terkandung di dalam 巳 (tengah (中氣))."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [甲辰](/guide/pillar-gap-jin) dan berikutnya adalah [丙午](/guide/pillar-byeong-o)."
          },
          {
            "p": "Terdiri dari [Kayu Yin (乙)](/guide/stem-eul) dan [巳 (Ular)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-o": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 丙午",
    "summary": "Cara Saju-Link membaca pilar hari 丙午 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "丙午 adalah pilar hari nomor 43 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 丙午, batang hari adalah 丙 (Api, Yang) dan cabang hari adalah 午 (Kuda). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 43."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 丙 sebagai “Api Yang (丙)”, dan kalimat yang ditampilkan layar hasil adalah: \"Matahari tengah hari. Perasaan tampak apa adanya, ruangan menjadi terang, dan melangkah ke depan terasa wajar.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 午 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 丙, batang yang disimpan 午 adalah sebagai berikut. Batang utama (丁) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 丙午",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 丙"
              ],
              "rows": [
                [
                  "Api Yang (丙)",
                  "sisa (餘氣)",
                  "{hidOYeo}",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Tanah Yin (己)",
                  "tengah (中氣)",
                  "{hidOJung}",
                  "Pengusik (傷官)"
                ],
                [
                  "Api Yin (丁)",
                  "utama (本氣)",
                  "{hidOBon}",
                  "Saingan (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 丙 sebagai batang hari, Rezeki Tetap adalah 辛 dan Wibawa adalah 癸."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 辛. 辛 tidak terkandung di dalam 午."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 癸. 癸 tidak terkandung di dalam 午."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [乙巳](/guide/pillar-eul-sa) dan berikutnya adalah [丁未](/guide/pillar-jeong-mi)."
          },
          {
            "p": "Terdiri dari [Api Yang (丙)](/guide/stem-byeong) dan [午 (Kuda)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-mi": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 丁未",
    "summary": "Cara Saju-Link membaca pilar hari 丁未 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "丁未 adalah pilar hari nomor 44 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 丁未, batang hari adalah 丁 (Api, Yin) dan cabang hari adalah 未 (Domba). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 44."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 丁 sebagai “Api Yin (丁)”, dan kalimat yang ditampilkan layar hasil adalah: \"Cahaya lilin. Ia menyala pelan dan lama, serta menghangatkan yang terdekat lebih dulu.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 未 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 丁, batang yang disimpan 未 adalah sebagai berikut. Batang utama (己) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 丁未",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 丁"
              ],
              "rows": [
                [
                  "Api Yin (丁)",
                  "sisa (餘氣)",
                  "{hidMiYeo}",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Kayu Yin (乙)",
                  "tengah (中氣)",
                  "{hidMiJung}",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Tanah Yin (己)",
                  "utama (本氣)",
                  "{hidMiBon}",
                  "Ekspresi (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 丁 sebagai batang hari, Rezeki Tetap adalah 庚 dan Wibawa adalah 壬."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 庚. 庚 tidak terkandung di dalam 未."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 壬. 壬 tidak terkandung di dalam 未."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [丙午](/guide/pillar-byeong-o) dan berikutnya adalah [戊申](/guide/pillar-mu-sin)."
          },
          {
            "p": "Terdiri dari [Api Yin (丁)](/guide/stem-jeong) dan [未 (Domba)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 戊申",
    "summary": "Cara Saju-Link membaca pilar hari 戊申 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "戊申 adalah pilar hari nomor 45 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 戊申, batang hari adalah 戊 (Tanah, Yang) dan cabang hari adalah 申 (Monyet). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 45."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 戊 sebagai “Tanah Yang (戊)”, dan kalimat yang ditampilkan layar hasil adalah: \"Tanah lapang dan pegunungan. Sulit digoyahkan dan mudah dijadikan sandaran, meski lambat mengubah keputusan yang sudah diambil.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 申 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 戊, batang yang disimpan 申 adalah sebagai berikut. Batang utama (庚) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 戊申",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 戊"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidSinYeo}",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Air Yang (壬)",
                  "tengah (中氣)",
                  "{hidSinJung}",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Logam Yang (庚)",
                  "utama (本氣)",
                  "{hidSinBon}",
                  "Ekspresi (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 戊 sebagai batang hari, Rezeki Tetap adalah 癸 dan Wibawa adalah 乙."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 癸. 癸 tidak terkandung di dalam 申."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 乙. 乙 tidak terkandung di dalam 申."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [丁未](/guide/pillar-jeong-mi) dan berikutnya adalah [己酉](/guide/pillar-gi-yu)."
          },
          {
            "p": "Terdiri dari [Tanah Yang (戊)](/guide/stem-mu) dan [申 (Monyet)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-yu": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 己酉",
    "summary": "Cara Saju-Link membaca pilar hari 己酉 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "己酉 adalah pilar hari nomor 46 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 己酉, batang hari adalah 己 (Tanah, Yin) dan cabang hari adalah 酉 (Ayam). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 46."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 己 sebagai “Tanah Yin (己)”, dan kalimat yang ditampilkan layar hasil adalah: \"Tanah ladang. Ia menerima apa pun yang datang dan menumbuhkannya, lebih suka merawat daripada menonjolkan diri.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 酉 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 己, batang yang disimpan 酉 adalah sebagai berikut. Batang utama (辛) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 己酉",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 己"
              ],
              "rows": [
                [
                  "Logam Yang (庚)",
                  "sisa (餘氣)",
                  "{hidYuYeo}",
                  "Pengusik (傷官)"
                ],
                [
                  "Logam Yin (辛)",
                  "utama (本氣)",
                  "{hidYuBon}",
                  "Ekspresi (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 己 sebagai batang hari, Rezeki Tetap adalah 壬 dan Wibawa adalah 甲."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 壬. 壬 tidak terkandung di dalam 酉."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 甲. 甲 tidak terkandung di dalam 酉."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [戊申](/guide/pillar-mu-sin) dan berikutnya adalah [庚戌](/guide/pillar-gyeong-sul)."
          },
          {
            "p": "Terdiri dari [Tanah Yin (己)](/guide/stem-gi) dan [酉 (Ayam)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sul": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 庚戌",
    "summary": "Cara Saju-Link membaca pilar hari 庚戌 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "庚戌 adalah pilar hari nomor 47 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 庚戌, batang hari adalah 庚 (Logam, Yang) dan cabang hari adalah 戌 (Anjing). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 47."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 庚 sebagai “Logam Yang (庚)”, dan kalimat yang ditampilkan layar hasil adalah: \"Besi yang belum digarap. Tegas dan lugas, dengan sedikit kesabaran untuk hal yang dibiarkan menggantung.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 戌 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 庚, batang yang disimpan 戌 adalah sebagai berikut. Batang utama (戊) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 庚戌",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 庚"
              ],
              "rows": [
                [
                  "Logam Yin (辛)",
                  "sisa (餘氣)",
                  "{hidSulYeo}",
                  "Saingan (劫財)"
                ],
                [
                  "Api Yin (丁)",
                  "tengah (中氣)",
                  "{hidSulJung}",
                  "Wibawa (正官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "utama (本氣)",
                  "{hidSulBon}",
                  "Sokongan Tak Lazim (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 庚 sebagai batang hari, Rezeki Tetap adalah 乙 dan Wibawa adalah 丁."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 乙. 乙 tidak terkandung di dalam 戌."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 丁. 丁 terkandung di dalam 戌 (tengah (中氣))."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [己酉](/guide/pillar-gi-yu) dan berikutnya adalah [辛亥](/guide/pillar-sin-hae)."
          },
          {
            "p": "Terdiri dari [Logam Yang (庚)](/guide/stem-gyeong) dan [戌 (Anjing)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-hae": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 辛亥",
    "summary": "Cara Saju-Link membaca pilar hari 辛亥 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "辛亥 adalah pilar hari nomor 48 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 辛亥, batang hari adalah 辛 (Logam, Yin) dan cabang hari adalah 亥 (Babi). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 48."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 辛 sebagai “Logam Yin (辛)”, dan kalimat yang ditampilkan layar hasil adalah: \"Permata yang telah diasah. Seleranya halus dan standarnya tinggi; kecerobohan sulit dibiarkan lewat.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 亥 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 辛, batang yang disimpan 亥 adalah sebagai berikut. Batang utama (壬) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 辛亥",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 辛"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidHaeYeo}",
                  "Pengasuhan (正印)"
                ],
                [
                  "Kayu Yang (甲)",
                  "tengah (中氣)",
                  "{hidHaeJung}",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Air Yang (壬)",
                  "utama (本氣)",
                  "{hidHaeBon}",
                  "Pengusik (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 辛 sebagai batang hari, Rezeki Tetap adalah 甲 dan Wibawa adalah 丙."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 甲. 甲 terkandung di dalam 亥 (tengah (中氣))."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 丙. 丙 tidak terkandung di dalam 亥."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [庚戌](/guide/pillar-gyeong-sul) dan berikutnya adalah [壬子](/guide/pillar-im-ja)."
          },
          {
            "p": "Terdiri dari [Logam Yin (辛)](/guide/stem-sin) dan [亥 (Babi)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-ja": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 壬子",
    "summary": "Cara Saju-Link membaca pilar hari 壬子 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "壬子 adalah pilar hari nomor 49 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 壬子, batang hari adalah 壬 (Air, Yang) dan cabang hari adalah 子 (Tikus). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 49."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 壬 sebagai “Air Yang (壬)”, dan kalimat yang ditampilkan layar hasil adalah: \"Sungai dan laut. Luas cara pandangnya, dengan mata yang membaca ke mana keadaan mengalir.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 子 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 壬, batang yang disimpan 子 adalah sebagai berikut. Batang utama (癸) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 壬子",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 壬"
              ],
              "rows": [
                [
                  "Air Yang (壬)",
                  "sisa (餘氣)",
                  "{hidJaYeo}",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Air Yin (癸)",
                  "utama (本氣)",
                  "{hidJaBon}",
                  "Saingan (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 壬 sebagai batang hari, Rezeki Tetap adalah 丁 dan Wibawa adalah 己."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 丁. 丁 tidak terkandung di dalam 子."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 己. 己 tidak terkandung di dalam 子."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [辛亥](/guide/pillar-sin-hae) dan berikutnya adalah [癸丑](/guide/pillar-gye-chuk)."
          },
          {
            "p": "Terdiri dari [Air Yang (壬)](/guide/stem-im) dan [子 (Tikus)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-chuk": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 癸丑",
    "summary": "Cara Saju-Link membaca pilar hari 癸丑 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "癸丑 adalah pilar hari nomor 50 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 癸丑, batang hari adalah 癸 (Air, Yin) dan cabang hari adalah 丑 (Sapi). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 50."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 癸 sebagai “Air Yin (癸)”, dan kalimat yang ditampilkan layar hasil adalah: \"Embun dan hujan. Ia meresap diam-diam dan membaca suasana sebelum kata-kata terucap.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 丑 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 癸, batang yang disimpan 丑 adalah sebagai berikut. Batang utama (己) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 癸丑",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 癸"
              ],
              "rows": [
                [
                  "Air Yin (癸)",
                  "sisa (餘氣)",
                  "{hidChukYeo}",
                  "Rekan Sejajar (比肩)"
                ],
                [
                  "Logam Yin (辛)",
                  "tengah (中氣)",
                  "{hidChukJung}",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Tanah Yin (己)",
                  "utama (本氣)",
                  "{hidChukBon}",
                  "Penantang (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 癸 sebagai batang hari, Rezeki Tetap adalah 丙 dan Wibawa adalah 戊."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 丙. 丙 tidak terkandung di dalam 丑."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 戊. 戊 tidak terkandung di dalam 丑."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [壬子](/guide/pillar-im-ja) dan berikutnya adalah [甲寅](/guide/pillar-gap-in)."
          },
          {
            "p": "Terdiri dari [Air Yin (癸)](/guide/stem-gye) dan [丑 (Sapi)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-in": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 甲寅",
    "summary": "Cara Saju-Link membaca pilar hari 甲寅 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "甲寅 adalah pilar hari nomor 51 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 甲寅, batang hari adalah 甲 (Kayu, Yang) dan cabang hari adalah 寅 (Harimau). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 51."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 甲 sebagai “Kayu Yang (甲)”, dan kalimat yang ditampilkan layar hasil adalah: \"Pohon tinggi yang tumbuh lurus. Begitu arah ditetapkan ia tidak goyah, dan lebih memilih bertahan daripada menekuk.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 寅 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 甲, batang yang disimpan 寅 adalah sebagai berikut. Batang utama (甲) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 甲寅",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 甲"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidInYeo}",
                  "Rezeki Tak Terduga (偏財)"
                ],
                [
                  "Api Yang (丙)",
                  "tengah (中氣)",
                  "{hidInJung}",
                  "Ekspresi (食神)"
                ],
                [
                  "Kayu Yang (甲)",
                  "utama (本氣)",
                  "{hidInBon}",
                  "Rekan Sejajar (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 甲 sebagai batang hari, Rezeki Tetap adalah 己 dan Wibawa adalah 辛."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 己. 己 tidak terkandung di dalam 寅."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 辛. 辛 tidak terkandung di dalam 寅."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [癸丑](/guide/pillar-gye-chuk) dan berikutnya adalah [乙卯](/guide/pillar-eul-myo)."
          },
          {
            "p": "Terdiri dari [Kayu Yang (甲)](/guide/stem-gap) dan [寅 (Harimau)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-myo": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 乙卯",
    "summary": "Cara Saju-Link membaca pilar hari 乙卯 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "乙卯 adalah pilar hari nomor 52 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 乙卯, batang hari adalah 乙 (Kayu, Yin) dan cabang hari adalah 卯 (Kelinci). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 52."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 乙 sebagai “Kayu Yin (乙)”, dan kalimat yang ditampilkan layar hasil adalah: \"Sulur — rumput yang lentur. Ia melengkung mengikuti keadaan agar terus melaju, dan tidak patah.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 卯 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 乙, batang yang disimpan 卯 adalah sebagai berikut. Batang utama (乙) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 乙卯",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 乙"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "sisa (餘氣)",
                  "{hidMyoYeo}",
                  "Saingan (劫財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "utama (本氣)",
                  "{hidMyoBon}",
                  "Rekan Sejajar (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 乙 sebagai batang hari, Rezeki Tetap adalah 戊 dan Wibawa adalah 庚."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 戊. 戊 tidak terkandung di dalam 卯."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 庚. 庚 tidak terkandung di dalam 卯."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [甲寅](/guide/pillar-gap-in) dan berikutnya adalah [丙辰](/guide/pillar-byeong-jin)."
          },
          {
            "p": "Terdiri dari [Kayu Yin (乙)](/guide/stem-eul) dan [卯 (Kelinci)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-jin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 丙辰",
    "summary": "Cara Saju-Link membaca pilar hari 丙辰 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "丙辰 adalah pilar hari nomor 53 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 丙辰, batang hari adalah 丙 (Api, Yang) dan cabang hari adalah 辰 (Naga). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 53."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 丙 sebagai “Api Yang (丙)”, dan kalimat yang ditampilkan layar hasil adalah: \"Matahari tengah hari. Perasaan tampak apa adanya, ruangan menjadi terang, dan melangkah ke depan terasa wajar.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 辰 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 丙, batang yang disimpan 辰 adalah sebagai berikut. Batang utama (戊) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 丙辰",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 丙"
              ],
              "rows": [
                [
                  "Kayu Yin (乙)",
                  "sisa (餘氣)",
                  "{hidJinYeo}",
                  "Pengasuhan (正印)"
                ],
                [
                  "Air Yin (癸)",
                  "tengah (中氣)",
                  "{hidJinJung}",
                  "Wibawa (正官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "utama (本氣)",
                  "{hidJinBon}",
                  "Ekspresi (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 丙 sebagai batang hari, Rezeki Tetap adalah 辛 dan Wibawa adalah 癸."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 辛. 辛 tidak terkandung di dalam 辰."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 癸. 癸 terkandung di dalam 辰 (tengah (中氣))."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [乙卯](/guide/pillar-eul-myo) dan berikutnya adalah [丁巳](/guide/pillar-jeong-sa)."
          },
          {
            "p": "Terdiri dari [Api Yang (丙)](/guide/stem-byeong) dan [辰 (Naga)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-sa": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 丁巳",
    "summary": "Cara Saju-Link membaca pilar hari 丁巳 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "丁巳 adalah pilar hari nomor 54 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 丁巳, batang hari adalah 丁 (Api, Yin) dan cabang hari adalah 巳 (Ular). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 54."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 丁 sebagai “Api Yin (丁)”, dan kalimat yang ditampilkan layar hasil adalah: \"Cahaya lilin. Ia menyala pelan dan lama, serta menghangatkan yang terdekat lebih dulu.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 巳 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 丁, batang yang disimpan 巳 adalah sebagai berikut. Batang utama (丙) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 丁巳",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 丁"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidSaYeo}",
                  "Pengusik (傷官)"
                ],
                [
                  "Logam Yang (庚)",
                  "tengah (中氣)",
                  "{hidSaJung}",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Api Yang (丙)",
                  "utama (本氣)",
                  "{hidSaBon}",
                  "Saingan (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 丁 sebagai batang hari, Rezeki Tetap adalah 庚 dan Wibawa adalah 壬."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 庚. 庚 terkandung di dalam 巳 (tengah (中氣))."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 壬. 壬 tidak terkandung di dalam 巳."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [丙辰](/guide/pillar-byeong-jin) dan berikutnya adalah [戊午](/guide/pillar-mu-o)."
          },
          {
            "p": "Terdiri dari [Api Yin (丁)](/guide/stem-jeong) dan [巳 (Ular)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-o": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 戊午",
    "summary": "Cara Saju-Link membaca pilar hari 戊午 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "戊午 adalah pilar hari nomor 55 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 戊午, batang hari adalah 戊 (Tanah, Yang) dan cabang hari adalah 午 (Kuda). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 55."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 戊 sebagai “Tanah Yang (戊)”, dan kalimat yang ditampilkan layar hasil adalah: \"Tanah lapang dan pegunungan. Sulit digoyahkan dan mudah dijadikan sandaran, meski lambat mengubah keputusan yang sudah diambil.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 午 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 戊, batang yang disimpan 午 adalah sebagai berikut. Batang utama (丁) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 戊午",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 戊"
              ],
              "rows": [
                [
                  "Api Yang (丙)",
                  "sisa (餘氣)",
                  "{hidOYeo}",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Tanah Yin (己)",
                  "tengah (中氣)",
                  "{hidOJung}",
                  "Saingan (劫財)"
                ],
                [
                  "Api Yin (丁)",
                  "utama (本氣)",
                  "{hidOBon}",
                  "Pengasuhan (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 戊 sebagai batang hari, Rezeki Tetap adalah 癸 dan Wibawa adalah 乙."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 癸. 癸 tidak terkandung di dalam 午."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 乙. 乙 tidak terkandung di dalam 午."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [丁巳](/guide/pillar-jeong-sa) dan berikutnya adalah [己未](/guide/pillar-gi-mi)."
          },
          {
            "p": "Terdiri dari [Tanah Yang (戊)](/guide/stem-mu) dan [午 (Kuda)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-mi": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 己未",
    "summary": "Cara Saju-Link membaca pilar hari 己未 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "己未 adalah pilar hari nomor 56 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 己未, batang hari adalah 己 (Tanah, Yin) dan cabang hari adalah 未 (Domba). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 56."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 己 sebagai “Tanah Yin (己)”, dan kalimat yang ditampilkan layar hasil adalah: \"Tanah ladang. Ia menerima apa pun yang datang dan menumbuhkannya, lebih suka merawat daripada menonjolkan diri.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 未 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 己, batang yang disimpan 未 adalah sebagai berikut. Batang utama (己) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 己未",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 己"
              ],
              "rows": [
                [
                  "Api Yin (丁)",
                  "sisa (餘氣)",
                  "{hidMiYeo}",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Kayu Yin (乙)",
                  "tengah (中氣)",
                  "{hidMiJung}",
                  "Penantang (偏官)"
                ],
                [
                  "Tanah Yin (己)",
                  "utama (本氣)",
                  "{hidMiBon}",
                  "Rekan Sejajar (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 己 sebagai batang hari, Rezeki Tetap adalah 壬 dan Wibawa adalah 甲."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 壬. 壬 tidak terkandung di dalam 未."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 甲. 甲 tidak terkandung di dalam 未."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [戊午](/guide/pillar-mu-o) dan berikutnya adalah [庚申](/guide/pillar-gyeong-sin)."
          },
          {
            "p": "Terdiri dari [Tanah Yin (己)](/guide/stem-gi) dan [未 (Domba)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 庚申",
    "summary": "Cara Saju-Link membaca pilar hari 庚申 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "庚申 adalah pilar hari nomor 57 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 庚申, batang hari adalah 庚 (Logam, Yang) dan cabang hari adalah 申 (Monyet). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 57."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 庚 sebagai “Logam Yang (庚)”, dan kalimat yang ditampilkan layar hasil adalah: \"Besi yang belum digarap. Tegas dan lugas, dengan sedikit kesabaran untuk hal yang dibiarkan menggantung.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 申 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 庚, batang yang disimpan 申 adalah sebagai berikut. Batang utama (庚) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 庚申",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 庚"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidSinYeo}",
                  "Sokongan Tak Lazim (偏印)"
                ],
                [
                  "Air Yang (壬)",
                  "tengah (中氣)",
                  "{hidSinJung}",
                  "Ekspresi (食神)"
                ],
                [
                  "Logam Yang (庚)",
                  "utama (本氣)",
                  "{hidSinBon}",
                  "Rekan Sejajar (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 庚 sebagai batang hari, Rezeki Tetap adalah 乙 dan Wibawa adalah 丁."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 乙. 乙 tidak terkandung di dalam 申."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 丁. 丁 tidak terkandung di dalam 申."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [己未](/guide/pillar-gi-mi) dan berikutnya adalah [辛酉](/guide/pillar-sin-yu)."
          },
          {
            "p": "Terdiri dari [Logam Yang (庚)](/guide/stem-gyeong) dan [申 (Monyet)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-yu": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 辛酉",
    "summary": "Cara Saju-Link membaca pilar hari 辛酉 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "辛酉 adalah pilar hari nomor 58 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 辛酉, batang hari adalah 辛 (Logam, Yin) dan cabang hari adalah 酉 (Ayam). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 58."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 辛 sebagai “Logam Yin (辛)”, dan kalimat yang ditampilkan layar hasil adalah: \"Permata yang telah diasah. Seleranya halus dan standarnya tinggi; kecerobohan sulit dibiarkan lewat.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 酉 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 辛, batang yang disimpan 酉 adalah sebagai berikut. Batang utama (辛) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 辛酉",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 辛"
              ],
              "rows": [
                [
                  "Logam Yang (庚)",
                  "sisa (餘氣)",
                  "{hidYuYeo}",
                  "Saingan (劫財)"
                ],
                [
                  "Logam Yin (辛)",
                  "utama (本氣)",
                  "{hidYuBon}",
                  "Rekan Sejajar (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 辛 sebagai batang hari, Rezeki Tetap adalah 甲 dan Wibawa adalah 丙."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 甲. 甲 tidak terkandung di dalam 酉."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 丙. 丙 tidak terkandung di dalam 酉."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [庚申](/guide/pillar-gyeong-sin) dan berikutnya adalah [壬戌](/guide/pillar-im-sul)."
          },
          {
            "p": "Terdiri dari [Logam Yin (辛)](/guide/stem-sin) dan [酉 (Ayam)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sul": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 壬戌",
    "summary": "Cara Saju-Link membaca pilar hari 壬戌 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "壬戌 adalah pilar hari nomor 59 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 壬戌, batang hari adalah 壬 (Air, Yang) dan cabang hari adalah 戌 (Anjing). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 59."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 壬 sebagai “Air Yang (壬)”, dan kalimat yang ditampilkan layar hasil adalah: \"Sungai dan laut. Luas cara pandangnya, dengan mata yang membaca ke mana keadaan mengalir.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 戌 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 壬, batang yang disimpan 戌 adalah sebagai berikut. Batang utama (戊) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 壬戌",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 壬"
              ],
              "rows": [
                [
                  "Logam Yin (辛)",
                  "sisa (餘氣)",
                  "{hidSulYeo}",
                  "Pengasuhan (正印)"
                ],
                [
                  "Api Yin (丁)",
                  "tengah (中氣)",
                  "{hidSulJung}",
                  "Rezeki Tetap (正財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "utama (本氣)",
                  "{hidSulBon}",
                  "Penantang (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 壬 sebagai batang hari, Rezeki Tetap adalah 丁 dan Wibawa adalah 己."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 丁. 丁 terkandung di dalam 戌 (tengah (中氣))."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 己. 己 tidak terkandung di dalam 戌."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [辛酉](/guide/pillar-sin-yu) dan berikutnya adalah [癸亥](/guide/pillar-gye-hae)."
          },
          {
            "p": "Terdiri dari [Air Yang (壬)](/guide/stem-im) dan [戌 (Anjing)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-hae": {
    "eyebrow": "Pilar hari",
    "title": "Pilar hari 癸亥",
    "summary": "Cara Saju-Link membaca pilar hari 癸亥 — apa arti batang yang disimpan cabang hari bagi batang hari — disusun persis seperti aturan perhitungannya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "癸亥 adalah pilar hari nomor 60 dalam siklus enam puluh tahun",
        "blocks": [
          {
            "p": "Ketika batang-cabang hari lahir adalah 癸亥, batang hari adalah 癸 (Air, Yin) dan cabang hari adalah 亥 (Babi). Dalam siklus enam puluh tahun, ini adalah kombinasi nomor 60."
          },
          {
            "p": "Saju-Link menyebut orang yang batang harinya 癸 sebagai “Air Yin (癸)”, dan kalimat yang ditampilkan layar hasil adalah: \"Embun dan hujan. Ia meresap diam-diam dan membaca suasana sebelum kata-kata terucap.\" Kalimat ini tidak ada kaitannya dengan pembacaan di bawah atau skornya."
          }
        ]
      },
      {
        "title": "Apa arti batang yang disimpan cabang hari 亥 bagi batang hari",
        "blocks": [
          {
            "p": "Cabang hari adalah posisi pasangan. Dibaca dari batang hari 癸, batang yang disimpan 亥 adalah sebagai berikut. Batang utama (壬) adalah energi yang mewakili cabang tersebut."
          },
          {
            "table": {
              "caption": "Batang tersembunyi dari cabang hari 癸亥",
              "head": [
                "Batang tersembunyi",
                "Posisi",
                "Porsi",
                "Bagi batang hari 癸"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidHaeYeo}",
                  "Wibawa (正官)"
                ],
                [
                  "Kayu Yang (甲)",
                  "tengah (中氣)",
                  "{hidHaeJung}",
                  "Pengusik (傷官)"
                ],
                [
                  "Air Yang (壬)",
                  "utama (本氣)",
                  "{hidHaeBon}",
                  "Saingan (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Posisi pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca posisi pasangan sebagai Rezeki Tetap (正財) bagi pria dan Wibawa (正官) bagi wanita. Dengan 癸 sebagai batang hari, Rezeki Tetap adalah 丙 dan Wibawa adalah 戊."
          },
          {
            "p": "Bagi pria, posisi pasangan (Rezeki Tetap) adalah 丙. 丙 tidak terkandung di dalam 亥."
          },
          {
            "p": "Bagi wanita, posisi pasangan (Wibawa) adalah 戊. 戊 terkandung di dalam 亥 (sisa (餘氣))."
          }
        ]
      },
      {
        "title": "Pilar hari di sekitarnya dan karakter penyusunnya",
        "blocks": [
          {
            "p": "Dalam siklus enam puluh tahun, pilar hari sebelumnya adalah [壬戌](/guide/pillar-im-sul) dan berikutnya adalah [甲子](/guide/pillar-gap-ja)."
          },
          {
            "p": "Terdiri dari [Air Yin (癸)](/guide/stem-gye) dan [亥 (Babi)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau suatu hubungan. Sebuah saju dibaca dari bagaimana kedelapan karakter keempat pilar berhubungan.",
              "Pembacaan posisi pasangan meneruskan aturan myeongri tradisional, dan jika Anda tidak menyebutkan jenis kelamin, posisi ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "Sepuluh Dewa",
    "title": "Sepuluh Dewa — Sepuluh Posisi Dalam Saju Saya",
    "summary": "Berdasarkan pilar hari, karakter yang tersisa dibagi menjadi sepuluh nama. Ini membahas alasan untuk membedakan antara kekayaan reguler dan kekayaan sampingan, meskipun mereka adalah elemen kekayaan yang sama.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Pilar Hari Adalah Orang Itu Sendiri",
        "blocks": [
          {
            "p": "Di antara delapan karakter saju, **pilar hari** (batang langit dari hari kelahiran) merujuk pada orang itu sendiri. Tujuh karakter yang tersisa dibaca sebagai lingkungan di mana pilar hari itu ada."
          },
          {
            "p": "**Sepuluh Dewa** (十神) adalah sepuluh pembagian bagaimana pilar hari memahami karakter lainnya. Energi yang memelihara saya adalah Sumber, energi yang mirip dengan saya adalah Pendamping, energi yang saya lahirkan adalah Makanan dan Kekayaan, energi yang menekan saya adalah Jabatan Resmi, dan energi yang saya tekan adalah Kekayaan — lima kategori ini dibagi lebih lanjut menjadi yin dan yang, membentuk sepuluh."
          }
        ]
      },
      {
        "title": "Apa Arti Tujuh Karakter yang Tersisa Bagi Saya",
        "blocks": [
          {
            "p": "Setelah pilar hari ditentukan, karakter yang tersisa dalam bagan kelahiran masing-masing menerima nama. Energi yang melahirkan saya, energi yang mirip dengan saya, energi yang saya lahirkan, energi yang menekan saya, dan energi yang saya tekan — lima cabang ini dibagi lebih lanjut menjadi **sepuluh** melalui yin dan yang. Ini adalah Sepuluh Dewa."
          },
          {
            "p": "Dengan demikian, Sepuluh Dewa merujuk bukan pada hubungan dengan orang lain tetapi pada **posisi dalam diri saya sendiri**. Posisi mana yang tebal atau tipis menunjukkan kecenderungan dan cara hidup saya."
          }
        ]
      },
      {
        "title": "Mengapa kita membaca ini melalui Sepuluh Dewa daripada tiga hubungan elemen",
        "blocks": [
          {
            "p": "Ada juga metode untuk melihat hubungan dari day stem (day stem) hanya melalui tiga aspek dari the five elements (five elements) (pendukung, sama, dan berlawanan). Ini sederhana, tetapi **yin dan yang menghilang.** 甲 (kayuan yang mengalir) dan 乙 (kayuan yang tenang) menjadi sama dengan 甲, yang merupakan representasi dari 'kesamaan', dan hubungan yang berlawanan digabungkan menjadi satu skor tanpa arah atau yin dan yang."
          },
          {
            "p": "Posisi pasangan harus dievaluasi menurut the Ten Gods (Ten Gods) dalam hal yin dan yang. Jika item yang dilihat melalui the five elements (five elements) dicampur dengan yang dilihat melalui the Ten Gods (Ten Gods) dalam satu mesin, akan ada dua standar untuk dua karakter yang sama. Oleh karena itu, kita menyatukannya di bawah the Ten Gods (Ten Gods)."
          }
        ]
      },
      {
        "title": "Posisi pasangan adalah Proper Wealth dan Proper Officer",
        "blocks": [
          {
            "p": "Ramalan tradisional melihat posisi pasangan secara berbeda berdasarkan gender. Untuk pria, itu adalah **Proper Wealth (正財)**, dan untuk wanita, itu adalah **Proper Officer (正官)**. Meskipun mereka adalah elemen kekayaan yang sama, hanya Proper Wealth yang tidak selaras dalam yin dan yang yang dianggap sebagai posisi pasangan, sementara Indirect Wealth dibaca bukan sebagai pasangan tetapi dalam hal aktivitas dan kekayaan."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jika Anda tidak menentukan gender, posisi ini diabaikan",
        "blocks": [
          {
            "p": "Ini karena tidak dapat ditentukan sisi mana, Proper Wealth atau Proper Officer, yang harus dianggap sebagai posisi pasangan. Alih-alih menebak untuk mengisi nilai yang hilang, kita membaca item yang tersisa tanpa yang satu itu."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "Hari ini punya keberuntungan",
    "title": "Bagaimana keberuntungan hari ini muncul?",
    "summary": "day stem (day stem) hari ini dibandingkan dengan bagan kelahiran untuk memberikan skor. Tiga belas hubungan tekan-dan-dukung dan tujuh hubungan earthly branch (earthly branch), bersama dengan semua dua puluh item dan penambahan serta pengurangan masing-masing, diungkapkan sepenuhnya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "Hari ini, kita juga menetapkannya dengan cara yang sama seperti delapan karakter",
        "blocks": [
          {
            "p": "Setiap hari memiliki **day branch (day pillar) hari itu (日辰)**. Menggunakan metode yang sama seperti menetapkan day branch (day pillar) bagan kelahiran, hari ini juga memiliki satu heavenly stem (heavenly stem) dan satu earthly branch (earthly branch) yang terlampir. Keberuntungan hari ini adalah tentang membandingkan dua karakter tersebut dengan bagan kelahiran."
          },
          {
            "p": "Skor dasar adalah **{baseScore} poin**. Item di bawah ini ditambahkan dan dikurangi, dan akhirnya, dibatasi antara {clampLow} poin dan {clampHigh} poin — kami tidak menyebutkan 0 poin atau 100 poin."
          }
        ]
      },
      {
        "title": "① Apakah energi hari ini yang saya butuhkan?",
        "blocks": [
          {
            "p": "Ini adalah posisi yang paling signifikan. Kami memeriksa apakah energi hari ini sesuai dengan 'energi yang dibutuhkan saat ini' yang ditentukan oleh [elemen penyeimbang](/guide/yongsin)."
          },
          {
            "table": {
              "head": [
                "Energi hari ini adalah",
                "Penambahan/Pengurangan"
              ],
              "rows": [
                [
                  "Energi yang dibutuhkan saat ini",
                  "{todayIsYongsin}"
                ],
                [
                  "Ini menghasilkan energi yang dibutuhkan",
                  "{todayGeneratesYongsin}"
                ],
                [
                  "Ini menekan energi yang dibutuhkan",
                  "{todayControlsYongsin}"
                ],
                [
                  "Ini mendorong lebih banyak di sisi yang sudah melimpah",
                  "{todayIsGisin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jangan anggap elemen yang merugikan sebagai 'segala sesuatu kecuali elemen penyeimbang'",
        "blocks": [
          {
            "p": "Jika Anda melakukan itu, baik energi yang menghasilkan elemen penyeimbang dan energi yang menekan elemen penyeimbang menjadi buruk, dan dua baris terakhir dalam tabel di atas menjadi tidak dapat dibedakan. Hanya energi yang **mendorong lebih keras ke arah yang berlawanan** menurut arti tekan-dan-dukungan yang dilihat sebagai elemen yang merugikan."
          }
        ]
      },
      {
        "title": "② Hubungan antara heavenly stem (heavenly stem) hari ini dan day stem (day stem)",
        "blocks": [
          {
            "p": "Hubungan pendukung dan berlawanan dari the five elements (five elements) diterapkan langsung antara day stem (day stem) dan heavenly stem (heavenly stem) hari ini."
          },
          {
            "table": {
              "head": [
                "Hubungan",
                "Penambahan/Pengurangan"
              ],
              "rows": [
                [
                  "Hari ini menghasilkan saya",
                  "{generatesSelf}"
                ],
                [
                  "Hari ini dan saya adalah energi yang sama",
                  "{sameElement}"
                ],
                [
                  "Saya menekan hari ini",
                  "{selfControls}"
                ],
                [
                  "Saya mengalir keluar dengan hari ini",
                  "{selfGenerates}"
                ],
                [
                  "Hari ini menekan saya",
                  "{controlsSelf}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "③ earthly branch (earthly branch) hari ini bertemu dengan earthly branch (earthly branches) bagan kelahiran",
        "blocks": [
          {
            "p": "earthly branch (earthly branch) hari ini dibandingkan dengan earthly branch (earthly branches) bagan kelahiran. Tabel hubungan itu sendiri ada di [hubungan earthly branch (earthly branch relations)](/guide/branches)."
          },
          {
            "table": {
              "head": [
                "Hubungan",
                "Penambahan/Pengurangan"
              ],
              "rows": [
                [
                  "triad (三合)",
                  "{branchSamhap}"
                ],
                [
                  "six harmony (六合)",
                  "{branchYukhap}"
                ],
                [
                  "half triad (半合)",
                  "{branchBanhap}"
                ],
                [
                  "discord yang tenang (怨嗔)",
                  "{branchWonjin}"
                ],
                [
                  "tabrakan (沖)",
                  "{branchChung}"
                ]
              ]
            }
          },
          {
            "p": "Ketika ada beberapa pilar, muncul beberapa hubungan. Semua ditambahkan, tetapi seluruh item ini dibatasi pada **±{branchMaxAbs} poin** — ini untuk mencegah satu hubungan cabang bumi menentukan seluruh hari."
          }
        ]
      },
      {
        "title": "④ Koreksi Berdasarkan Kekuatan",
        "blocks": [
          {
            "p": "Bahkan dengan energi yang sama, maknanya berbeda untuk pilar hari yang kuat dan pilar hari yang lemah. Oleh karena itu, kami melakukan satu penyesuaian terakhir."
          },
          {
            "table": {
              "head": [
                "Situasi",
                "Penyesuaian"
              ],
              "rows": [
                [
                  "Pilar hari lemah tetapi hari ini mendukung mereka",
                  "{weakTodayHelps}"
                ],
                [
                  "Pilar hari kuat tetapi hari ini secara tepat mengurangi beban",
                  "{strongTodayDrains}"
                ],
                [
                  "Pilar hari kuat tetapi hari ini mempertebal dukungan",
                  "{strongTodayHelps}"
                ],
                [
                  "Pilar hari lemah tetapi hari ini menambah beban",
                  "{weakTodayBurdens}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Skor Berdasarkan Kelas dan Area",
        "blocks": [
          {
            "p": "Total skor dibagi menjadi lima kelas."
          },
          {
            "table": {
              "head": [
                "Skor",
                "Kelas"
              ],
              "rows": [
                [
                  "{gradeDaegilMin} poin atau lebih",
                  "Keberuntungan Besar (大吉)"
                ],
                [
                  "{gradeGilMin} poin atau lebih",
                  "Keberuntungan (吉)"
                ],
                [
                  "{gradePyeongMin} poin atau lebih",
                  "Rata-rata (平)"
                ],
                [
                  "{gradeJuuiMin} poin atau lebih",
                  "Perhatian (注意)"
                ],
                [
                  "{gradeJosimMin} poin atau lebih",
                  "Hati-hati (操心)"
                ]
              ]
            }
          },
          {
            "p": "Empat area kekayaan, cinta, karier, dan kesehatan mewarisi {overallShare} dari total skor, sementara sisanya dibagi sesuai dengan Sepuluh Dewa dan hubungan cabang bumi yang relevan dengan area tersebut. Oleh karena itu, meskipun total skor sama, angka per area berbeda dari orang ke orang."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Angka di atas semua dibaca dari pengaturan mesin. Jika aturan diubah, dokumen ini juga akan berubah, dan setiap perubahan yang mempengaruhi skor akan diposting terlebih dahulu di [Pemberitahuan](/notice)."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Tabel Hubungan",
    "title": "Hubungan Cabang Bumi — Kombinasi, Tabrakan, dan Discord",
    "summary": "Ini adalah tabel hubungan yang menunjukkan bagaimana pilar hari ini berinteraksi dengan bagan kelahiran. Ini mengungkapkan apa saja kombinasi, tabrakan, dan discord serta berapa banyak poin yang mereka miliki.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Cabang Bumi adalah Dua Belas Karakter",
        "blocks": [
          {
            "p": "Dua belas cabang bumi (十二支) adalah 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Tanda zodiak yang umum dikenal — Tikus, Sapi, Harimau, Kelinci, Naga, Ular, Kuda, Kambing, Monyet, Ayam, Anjing, Babi — masing-masing terikat pada salah satu dari dua belas karakter ini."
          },
          {
            "figure": "branch-wheel",
            "caption": "Ketika dua belas karakter diatur dalam lingkaran, hubungan terlihat jelas. Tabrakan (沖) selalu saling berhadapan, sementara enam harmoni dan discord adalah pasangan yang lebih dekat. Garis-garis ini tidak ditulis dalam teks tetapi langsung diturunkan dari aturan perhitungan.",
            "labels": {
              "alt": "Diagram yang menunjukkan dua belas cabang bumi yang diatur dalam lingkaran dengan garis yang menghubungkan enam harmoni, tabrakan, dan discord.",
              "yukhap": "enam harmoni",
              "chung": "Tabrakan",
              "wonjin": "Discord",
              "rat": "Tikus",
              "ox": "Sapi",
              "tiger": "Harimau",
              "rabbit": "Kelinci",
              "dragon": "Naga",
              "snake": "ular",
              "horse": "kuda",
              "goat": "domba",
              "monkey": "monyet",
              "rooster": "ayam",
              "dog": "anjing",
              "pig": "babi"
            }
          },
          {
            "p": "Dalam saju, masing-masing dari empat pilar memiliki satu cabang bumi. **Bacaan hari ini** ditentukan dengan mencocokkan **cabang hari** dengan empat cabang dari bagan kelahiran menggunakan tabel hubungan di bawah."
          }
        ]
      },
      {
        "title": "Tabel Hubungan Keseluruhan",
        "blocks": [
          {
            "table": {
              "caption": "Dalam urutan skor tertinggi. Ini adalah nilai yang digunakan oleh Saju-Link.",
              "head": [
                "Hubungan",
                "Pasangan yang Sesuai",
                "Makna",
                "Skor"
              ],
              "rows": [
                [
                  "triad (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Ketika ketiga karakter tersebut berkumpul, mereka membentuk pembentukan elemen yang lengkap (局). Ini dianggap sebagai kombinasi terkuat.",
                  "{scoreSamhap}"
                ],
                [
                  "six harmony (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Pasangan yang saling menarik. Ini adalah kombinasi yang paling umum karena terdiri dari hanya dua karakter.",
                  "{scoreYukhap}"
                ],
                [
                  "half triad (半合)",
                  "Dua karakter yang mencakup salah satu karakter kerajaan (子·酉·午·卯) dari triad",
                  "Sebuah half triad yang mencakup karakter yang menjadi pusat pembentukan. Ini tidak membentuk pembentukan elemen yang lengkap hanya dengan dua karakter, sehingga lebih rendah dari triad.",
                  "{scoreBanhap}"
                ],
                [
                  "Cabang yang Sama",
                  "子子 · 丑丑 …",
                  "Karakter yang sama. Ini berarti mereka mirip satu sama lain tetapi tidak menunjukkan ketertarikan, sehingga mereka ditempatkan di tengah.",
                  "{scoreSame}"
                ],
                [
                  "Tidak Ada Hubungan",
                  "Pasangan yang tidak termasuk di atas atau di bawah",
                  "Kombinasi yang tidak memiliki hubungan khusus. Ini berfungsi sebagai titik referensi.",
                  "{scoreNeutral}"
                ],
                [
                  "quiet discord (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Pasangan yang tidak dapat terpisah meskipun mereka tidak suka. Mereka tampak tenang di permukaan tetapi dianggap bertahan lama.",
                  "{scoreWonjin}"
                ],
                [
                  "Clash (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Pasangan yang bertabrakan secara langsung. Ini adalah enam pasangan yang saling berhadapan.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "triad dan half triad",
        "blocks": [
          {
            "p": "Sebuah triad memerlukan ketiga karakter untuk hadir. Karena ada empat cabang bumi dalam bagan kelahiran, mungkin bagi cabang hari untuk bergabung dengan mereka, menghasilkan triad — pada saat itu, ia menerima skor {scoreSamhap}. Jika hanya dua karakter yang terlibat, itu adalah half triad."
          }
        ]
      },
      {
        "kind": "note",
        "title": "half triad Memerlukan Karakter Kerajaan untuk Diakui",
        "blocks": [
          {
            "p": "Ada juga metode yang dihitung sebagai half triad jika kedua karakter termasuk dalam kelompok triad yang sama. Ini memungkinkan kombinasi seperti 申辰, yang sulit disebut kombinasi, untuk menerima skor tinggi. Oleh karena itu, layanan ini mengakui half triad hanya ketika mencakup karakter kerajaan (子·酉·午·卯), dan tidak mempertimbangkan kombinasi seperti 申辰·巳丑·寅戌·亥未 sebagai valid."
          }
        ]
      },
      {
        "title": "Alasan untuk Memisahkan quiet discord",
        "blocks": [
          {
            "p": "Enam pasangan quiet discord dilihat sering seperti halnya clash. Jika seseorang hanya menghitung kombinasi dan clash, enam pasangan ini akan terkubur di bawah skor tidak ada hubungan {scoreNeutral}, sehingga mereka ditempatkan secara terpisah."
          },
          {
            "p": "Jika clash adalah pasangan yang bertabrakan secara langsung dan ditampilkan secara mencolok, quiet discord adalah ketidaksesuaian yang halus. Oleh karena itu, ia ditempatkan pada skor {scoreWonjin}, yang lebih tinggi dari clash ({scoreChung}) tetapi pasti lebih rendah dari tidak ada hubungan ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Skor juga diberikan untuk clash",
        "blocks": [
          {
            "p": "Skor bentrokan terendah adalah {scoreChung}. Ini disengaja untuk tidak memberikan nilai yang mendekati 0. Dalam myeongri tradisional, bentrokan bukanlah 'akhir' tetapi 'tabrakan', dan memberikan skor yang mendekati batas bawah akan berarti layanan ini membuat pernyataan definitif tentang hubungan tersebut."
          },
          {
            "p": "Dengan minimum {scoreChung} dan maksimum {scoreSamhap}, perbedaannya jelas terlihat tetapi tidak definitif."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Tanda Zodiak",
    "title": "Di mana Tanda Zodiak dalam Saju?",
    "summary": "Tanda zodiak adalah cabang bumi dari tahun Anda dilahirkan. Ini menjelaskan mengapa ia diambil dari tahun saju dan bukan tahun kalender, dan mengapa mereka yang lahir di awal Januari atau Februari memiliki tanda zodiak dari tahun sebelumnya.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Tanda zodiak adalah cabang bumi dari tahun Anda dilahirkan.",
        "blocks": [
          {
            "p": "Saju terdiri dari empat pilar: tahun, bulan, hari, dan jam, dengan setiap pilar memiliki satu batang langit dan satu cabang bumi. Di antara mereka, **cabang bumi dari tahun**, atau cabang tahun, adalah hewan yang kita sebut sebagai tanda zodiak."
          },
          {
            "table": {
              "caption": "Dua Belas Cabang Bumi dan Tanda Zodiak",
              "head": [
                "Cabang Bumi",
                "Tanda Zodiak"
              ],
              "rows": [
                [
                  "子",
                  "Tikus"
                ],
                [
                  "丑",
                  "Sapi"
                ],
                [
                  "寅",
                  "Harimau"
                ],
                [
                  "卯",
                  "Kelinci"
                ],
                [
                  "辰",
                  "Naga"
                ],
                [
                  "巳",
                  "Ular"
                ],
                [
                  "午",
                  "Kuda"
                ],
                [
                  "未",
                  "Kambing"
                ],
                [
                  "申",
                  "Monyet"
                ],
                [
                  "酉",
                  "Ayam"
                ],
                [
                  "戌",
                  "Anjing"
                ],
                [
                  "亥",
                  "Babi"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kami menggunakan tahun saju, bukan tahun kalender.",
        "blocks": [
          {
            "p": "Titik di mana tanda zodiak berubah bukanlah 1 Januari kalender matahari atau Tahun Baru Imlek. Standar untuk mengubah tahun dalam saju adalah **Ipchun**. Oleh karena itu, mereka yang lahir di awal Januari atau Februari mungkin memiliki tanda zodiak yang berbeda dari yang ditunjukkan kalender."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Alasan kami tidak langsung menanyakan tanda zodiak.",
        "blocks": [
          {
            "p": "Inilah sebabnya kami hanya meminta tanggal lahir tanpa memilih tanda zodiak di layar input. Ketika mesin saju menghitung tahun, ia secara otomatis disesuaikan dengan batas Ipchun. Jika dipilih langsung, seseorang yang lahir di awal Februari akan memilih tanda zodiak yang tidak sesuai dengan tanda sebenarnya."
          }
        ]
      },
      {
        "title": "Tanda zodiak adalah satu karakter dalam saju.",
        "blocks": [
          {
            "p": "Di antara delapan karakter, yang sesuai dengan tanda zodiak adalah **satu cabang tahun**. Tujuh karakter lainnya — terutama batang hari yang merujuk pada diri sendiri — tidak ada hubungannya dengan tanda zodiak."
          },
          {
            "p": "Orang yang lahir di tahun yang sama semua memiliki tanda zodiak yang sama. Oleh karena itu, apa yang dapat diketahui dari tanda zodiak hanya sebanyak satu dari delapan karakter. Inilah alasan mengapa layanan ini tidak **memperlakukan tanda zodiak secara terpisah atau signifikan** — cabang tahun dihitung untuk kekuatan dan hari ini adalah pilar hari dari penilaian hari seperti cabang bumi lainnya."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Namun, alasan kami menunjukkan tanda zodiak.",
        "blocks": [
          {
            "p": "Ini adalah satu-satunya posisi di mana makna dipahami bahkan jika Anda tidak tahu terminologi myeongri. Jika tanda zodiak dicatat bersamaan dengan cabang tahun di layar grafik kelahiran, itu menjadi petunjuk untuk membaca tujuh karakter lainnya."
          }
        ]
      },
      {
        "title": "Cabang tahun tetap sama meskipun Anda tidak tahu waktu lahir.",
        "blocks": [
          {
            "p": "If you do not enter the time, the hour pillar is omitted and the strength of the the five elements (five elements) changes. However, the **year branch remains the same** — it is determined solely by the year you were born."
          },
          {
            "p": "Oleh karena itu, cerita yang diturunkan dari cabang tahun tidak berubah bahkan bagi mereka yang tidak tahu waktu. Sebaliknya, ini berarti bahwa apa yang dapat dikatakan hanya berdasarkan tanda zodiak terbatas, terlepas dari apakah waktu disertakan atau tidak."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Waktu",
    "title": "Kami mengonversi waktu lahir ke waktu matahari yang sebenarnya.",
    "summary": "Waktu standar dan posisi matahari yang sebenarnya berbeda. Ini menjelaskan mengapa waktu harus disesuaikan sesuai dengan bujur tempat lahir untuk memastikan pilar jam benar.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Waktu di jam dan waktu matahari berbeda",
        "blocks": [
          {
            "p": "Pilar jam saju (時柱) ditentukan oleh posisi matahari. Namun, jam yang kita lihat menggunakan satu waktu standar untuk seluruh negara, yang tidak selaras dengan posisi sebenarnya dari matahari."
          },
          {
            "p": "Waktu standar Korea didasarkan pada bujur 135° timur. Bujur Seoul sekitar 127°, sehingga sekitar 8° ke barat, menyebabkan matahari mencapai puncaknya lebih lambat — ketika sudah tengah hari menurut jam, matahari di Seoul masih sebelum puncaknya. Perbedaan ini sekitar **32 menit**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 menit mengubah pilar jam satu slot",
        "blocks": [
          {
            "p": "Waktu dalam saju dibagi menjadi unit dua jam. Mereka yang lahir dekat batas akan mengalami perubahan pilar jam secara keseluruhan akibat perbedaan 32 menit — penyesuaian diperlukan terutama bagi mereka yang berada tepat di batas ini."
          }
        ]
      },
      {
        "title": "Alasan mengapa kami bertanya di mana Anda lahir",
        "blocks": [
          {
            "p": "Jika bujur berbeda, jumlah penyesuaian juga akan berbeda. Jika Anda menerapkan penyesuaian berbasis Seoul kepada seseorang yang lahir di luar negeri, pilar jam akan sangat tidak selaras. Oleh karena itu, layar input meminta Anda untuk memilih tempat lahir Anda, dan perhitungan dilakukan berdasarkan bujur dan waktu standar kota tersebut. Saat ini, ada {cityCount} tempat dalam daftar."
          },
          {
            "p": "Bahkan di dalam negara yang sama, tempat-tempat dengan bujur yang sangat berbeda (seperti Amerika Serikat, Rusia, Indonesia, dll.) telah dibagi menjadi kota-kota. **15° bujur sama dengan satu pilar jam**."
          },
          {
            "p": "Jika Anda tidak memilih, perhitungan akan dilakukan berdasarkan Seoul. Sebagian besar kelahiran adalah domestik, jadi ini kurang rentan terhadap kesalahan, tetapi jika Anda lahir di luar negeri, harap pastikan untuk memilih."
          }
        ]
      },
      {
        "title": "Waktu standar telah berubah beberapa kali di masa lalu",
        "blocks": [
          {
            "p": "Ada alasan mengapa penyesuaian tidak dapat dihitung hanya sebagai \"perbedaan bujur ÷ 15° × 60 menit.\" Waktu standar itu sendiri telah bervariasi di berbagai era."
          },
          {
            "table": {
              "caption": "Perubahan waktu standar Korea — mereka yang lahir pada periode ini akan tidak selaras dengan perhitungan sederhana",
              "head": [
                "Periode",
                "Apa yang berbeda?"
              ],
              "rows": [
                [
                  "Sebelum 1912",
                  "Tidak ada waktu standar (waktu rata-rata lokal)"
                ],
                [
                  "1954 – 1961",
                  "Waktu standar adalah UTC+8:30"
                ],
                [
                  "1948 – 51 · 1955 – 60 · 1987 – 88",
                  "Waktu hemat siang diterapkan"
                ]
              ]
            }
          },
          {
            "p": "Saju-Link tidak menetapkan meridian standar sebagai nilai tetap, tetapi menghitung waktu standar aktual yang digunakan pada saat itu berdasarkan informasi **zona waktu IANA** dari tempat lahir. Waktu hemat siang dan waktu standar masa lalu secara otomatis tercermin."
          }
        ]
      },
      {
        "title": "Kelahiran tepat setelah tengah malam juga mempertimbangkan tanggal",
        "blocks": [
          {
            "p": "Karena penyesuaian adalah -32 menit, mereka yang lahir antara 00:00 dan 00:32 menurut jam akan berada di **11 malam hari sebelumnya** dalam waktu matahari yang sebenarnya. Jika hanya waktu yang disesuaikan mundur dan tanggal tetap sama, itu akan menulis pilar hari (日柱) sebagai \"11 malam hari sebelumnya.\""
          },
          {
            "p": "Saju-Link juga akan menyesuaikan tanggal dalam kasus ini. Karakter di atas pilar hari merujuk pada batang hari (日干), yang menunjukkan diri saya, jadi jika ini tidak selaras, hampir semua item dalam interpretasi akan tidak selaras."
          }
        ]
      },
      {
        "title": "Anda tidak perlu mengetahui waktu",
        "blocks": [
          {
            "p": "Waktu lahir adalah opsional. Jika Anda tidak mengetahuinya, perhitungan akan dilakukan tanpa pilar jam, dan fakta ini akan ditampilkan di layar hasil. Karena ini berarti dua dari delapan karakter hilang, ini akan mempengaruhi penilaian kekuatan dan kelemahan lima elemen, jadi jika Anda mengetahuinya, lebih akurat untuk menyertakannya."
          },
          {
            "p": "Cabang tahun (hewan zodiak) selalu sama terlepas dari waktu — [karena kami hanya melihat cabang tahun](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informasi Pribadi",
    "title": "Metode yang tidak menyimpan informasi yang dimasukkan",
    "summary": "Ini menjelaskan apa yang secara teknis berarti bahwa tanggal lahir tidak dicatat di mana pun dan apa yang terkandung dalam tautan hasil.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Tidak ada pendaftaran keanggotaan",
        "blocks": [
          {
            "p": "Saju-Link tidak membuat akun. Kami tidak mengumpulkan nama, email, atau nomor telepon. Satu-satunya informasi yang dikumpulkan adalah tanggal lahir dan (opsional) waktu lahir, tempat lahir, dan jenis kelamin, dan informasi tersebut tidak tersisa setelah perhitungan selesai."
          },
          {
            "p": "Ada bidang untuk memasukkan judul yang ditampilkan di layar hasil, tetapi itu **hanya untuk tujuan tampilan** dan tidak digunakan dalam perhitungan. Anda tidak perlu memasukkan nama asli Anda."
          }
        ]
      },
      {
        "title": "Apa yang terkandung dalam tautan hasil?",
        "blocks": [
          {
            "p": "Setelah perhitungan selesai, alamatnya terlihat seperti ini."
          },
          {
            "p": "**/ko/reading/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Apa yang mengikuti **#** adalah nilai input. Bagian ini disebut **fragmen**, yang merupakan bagian yang **tidak dikirimkan browser ke server**. Ini adalah perilaku web standar dan bukan aturan yang kami buat — itu awalnya dirancang untuk menunjukkan posisi dalam dokumen, jadi server tidak perlu melihatnya."
          },
          {
            "p": "Dengan kata lain, ketika Anda membuka tautan hasil, browser membaca nilai itu untuk meminta perhitungan, dan server kami menerima nilai untuk digunakan dalam perhitungan, mengembalikan jawaban, dan kemudian melupakan nilai tersebut."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Harap berhati-hati saat mengirim tautan kepada orang lain",
        "blocks": [
          {
            "p": "Fakta bahwa itu tidak disimpan di server tidak berarti tautan itu aman. Tautan hasil berisi tanggal lahir dari dua individu, sehingga orang yang menerima tautan tersebut dapat melihat hasil yang sama."
          }
        ]
      },
      {
        "title": "Mengapa perhitungan dilakukan di server tetapi tidak disimpan?",
        "blocks": [
          {
            "p": "Perhitungan itu sendiri dilakukan di server. Tabel almanak lunisolar diperlukan untuk menghasilkan saju, dan tabel itu terlalu besar untuk dikirim ke browser. Namun, **setelah memproses permintaan, kami tidak menggunakan nilai itu di mana pun.** Tidak ada kode untuk memasukkannya ke dalam database."
          },
          {
            "p": "Rekaman minimum yang diperlukan untuk operasi disimpan — sebuah penghitung untuk mencegah orang yang sama mengirim terlalu banyak permintaan dalam waktu singkat. Ini tidak termasuk tanggal lahir, dan IP akses tidak disimpan. Hanya satu nilai yang di-hash dengan tanggal yang dihitung, dan nilai itu berubah ketika hari berubah."
          }
        ]
      },
      {
        "title": "Hal-hal yang tidak dapat dilakukan karena informasi tidak disimpan",
        "blocks": [
          {
            "p": "Sejujurnya, ada hal-hal yang telah dikorbankan karena kami tidak menyimpan informasi."
          },
          {
            "ul": [
              "**Anda tidak dapat mengambil hasil yang lalu.** Anda perlu memiliki tautan untuk melihatnya lagi.",
              "**Nilai yang sama akan dihitung ulang.** Tidak ada cache. Namun, karena semua aturan bersifat deterministik, [input yang sama akan selalu menghasilkan nilai yang sama](/guide/natal-chart).",
              "**Menyegarkan akan membawa kembali gerbang iklan.** Ini karena tidak ada tempat untuk meninggalkan riwayat tampilan."
            ]
          }
        ]
      },
      {
        "title": "Jika Anda melakukan pembelian",
        "blocks": [
          {
            "p": "Ketika Anda membeli laporan, catatan transaksi akan disimpan. Pembayaran tunduk pada periode penyimpanan hukum, dan tanpa riwayat pesanan, pengembalian dana tidak dapat diproses. Namun, saat ini, **tanggal lahir yang digunakan untuk perhitungan saju tidak akan dilampirkan pada pesanan** — itu akan diminta lagi saat membuat PDF setelah konfirmasi pembayaran."
          },
          {
            "p": "Untuk detail lebih lanjut, silakan merujuk pada [Kebijakan Privasi](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produk berbayar",
    "title": "Apa yang termasuk dalam laporan berbayar",
    "summary": "Ini menjelaskan apa yang telah ditambahkan ke PDF sambil menjaga layar tetap tidak berubah. Nilai dan konten diambil dari pengaturan produk yang sebenarnya.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "Menjaga layar tetap tidak berubah, hanya ditambahkan ke PDF",
        "blocks": [
          {
            "p": "Perhitungan saju dan permintaan hasil adalah **gratis**. Anda dapat melihat semuanya di layar, termasuk bagan kelahiran, lima elemen, hari ini keberuntungan, dan dasarnya, karena tidak ada yang dihilangkan saat membuat laporan berbayar."
          },
          {
            "p": "Peran laporan adalah untuk **menambahkan lapisan yang tidak ada di layar**. Lapisan ini tidak dibuat-buat; mereka adalah nilai yang sudah dihitung selama proses penilaian tetapi tidak digunakan di layar."
          }
        ]
      },
      {
        "title": "PDF laporan saju seumur hidup dan keberuntungan tahun ini — {priceDomestic}",
        "slot": "reportContents",
        "blocks": [
          {
            "p": "Pembayaran domestik {priceDomestic} (termasuk PPN), pembayaran internasional {priceGlobal}. Ini terdiri dari {pageCount} halaman A4."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Daftar isi dibaca langsung dari deskripsi produk. **Jumlah halaman sama dengan dokumen yang sebenarnya** — tidak dibesar-besarkan karena merupakan nilai yang dinyatakan dalam pemberitahuan informasi produk."
          }
        ]
      },
      {
        "title": "Apa yang tidak ada di layar",
        "blocks": [
          {
            "p": "Layar gratis menunjukkan bagan kelahiran, lima elemen, dan hari ini keberuntungan. Ada tiga nilai yang dihasilkan selama proses perhitungan tetapi tidak ditampilkan di layar, dan ini adalah bagian dari laporan berbayar."
          },
          {
            "ul": [
              "**Rasio sekutu batang hari** — Ini menunjukkan secara numerik di mana penilaian batang hari yang kuat atau lemah dibuat. Nama penilaian saja tidak menunjukkan apakah itu di tepi atau melimpah.",
              "**Wang Sang Hyu Su Sa** — Seberapa banyak bulan kelahiran telah mendorong setiap energi. Jika batang kekuatan menunjukkan 'seberapa banyak ada', tabel ini menunjukkan 'apakah itu dalam musim'.",
              "**Detail koreksi waktu matahari sejati** — Konsepnya ada dalam dokumen panduan, tetapi **'berapa menit yang digeser dalam kasus Anda'** adalah nilai yang berbeda untuk setiap orang, jadi itu hanya termasuk dalam laporan."
            ]
          }
        ]
      },
      {
        "title": "Apa yang perlu Anda ketahui sebelum membeli",
        "blocks": [
          {
            "p": "**Server tidak menyimpan file.** Setelah pembayaran disetujui, dokumen dibuat dan dikirim segera, tanpa meninggalkan apa pun di server. Prinsip layanan ini untuk tidak menyimpan nilai input ditegakkan bahkan dalam alur berbayar."
          },
          {
            "p": "Oleh karena itu, **silakan simpan file segera setelah pembayaran.** Anda dapat menerimanya hingga lima kali dengan pesanan yang sama, tetapi jika Anda meninggalkan layar hasil dan nilai input menghilang, itu tidak dapat dibuat kembali."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Laporan juga merupakan bahan referensi",
        "blocks": [
          {
            "p": "Hanya karena jumlah halaman meningkat tidak berarti kesimpulan lebih pasti. Apa yang ditambahkan laporan adalah **dasar dari perhitungan yang sama**, bukan pernyataan yang lebih kuat. Takdir adalah bidang di mana kesimpulan dapat bervariasi tergantung pada praktisi, dan layanan ini hanya menghitung apa yang dapat diterjemahkan menjadi aturan."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Pemberitahuan",
    "title": "Pengumuman",
    "summary": "Ini adalah tempat untuk menginformasikan perubahan yang mungkin mempengaruhi penggunaan.",
    "backLabel": "Kembali ke awal",
    "sections": []
  },
  "contact": {
    "eyebrow": "Kontak",
    "title": "Pertanyaan",
    "summary": "Ini adalah saluran untuk pertanyaan tentang penggunaan, pengembalian dana, permintaan informasi pribadi, dan laporan kesalahan, bersama dengan informasi bisnis.",
    "backLabel": "Kembali ke awal",
    "sections": [
      {
        "title": "Kontak melalui email",
        "blocks": [
          {
            "p": "Silakan kirim pertanyaan ke **{email}**. Kami akan merespons dalam waktu 2 hari kerja. Untuk pertanyaan tentang pembayaran dan pengembalian dana, harap sertakan **nomor pesanan atau email yang digunakan untuk pembayaran** untuk konfirmasi yang lebih cepat."
          },
          {
            "p": "Pertanyaan melalui telepon diterima di {customerCenter}."
          }
        ]
      },
      {
        "title": "Apa yang dapat dikirim ke saluran ini",
        "blocks": [
          {
            "ul": [
              "**Pembayaran dan pengembalian dana** — Jika dokumen belum dibuat atau jumlah pembayaran berbeda dari pesanan, pengembalian dana penuh akan diberikan. Syaratnya ada di [Kebijakan Pengembalian Dana](/refund-policy).",
              "**Informasi pribadi** — Kami menerima permintaan untuk melihat, mengoreksi, dan menghapus. Kebijakan pemrosesan ada di [Kebijakan Privasi](/privacy).",
              "**Laporan kesalahan perhitungan** — Jika bagan kelahiran saju atau skor tampak aneh, harap beri tahu kami. Jika Anda menyertakan kapan Anda memasukkan tanggal dan waktu lahir, kami dapat menghitung ulang dengan nilai yang sama."
            ]
          }
        ]
      },
      {
        "title": "Informasi bisnis",
        "blocks": [
          {
            "ul": [
              "**Nama bisnis** — {companyName}",
              "**Perwakilan** — {representative}",
              "**Nomor registrasi bisnis** — {businessNumber}",
              "**Nomor registrasi bisnis pesanan melalui pos** — {mailOrderNumber}",
              "**Alamat** — {address}",
              "**Pusat pelanggan** — {customerCenter}",
              "**Email** — {email}",
              "**Petugas perlindungan informasi pribadi** — {privacyOfficer}",
              "**Penyedia hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Tidak perlu menyertakan tanggal dan waktu lahir Anda dalam email pertanyaan. Kami tidak menyimpan input, jadi kami tidak dapat mengambilnya kembali nanti, dan apa yang perlu dikonfirmasi cukup dengan nomor pesanan. Harap hanya sertakan ketika nilai benar-benar diperlukan, seperti dalam laporan kesalahan perhitungan."
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
    "engine": "Kriteria perhitungan",
    "support": "Pertanyaan"
  },
  "intro": "Perubahan yang mempengaruhi syarat penggunaan, seperti harga dan ketentuan, akan diposting di sini sebelum dilaksanakan. Perbaikan internal seperti layar yang menjadi lebih cepat tidak diposting di sini: yang muncul di sini hanya yang perlu Anda ketahui.",
  "empty": {
    "title": "Tidak ada pemberitahuan yang diposting.",
    "body": "Jika ada perubahan yang perlu kami informasikan kepada Anda, itu akan diposting di sini."
  },
  "effective": "Berlaku mulai {date}",
  "pager": {
    "label": "Halaman pemberitahuan",
    "newer": "← Terbaru",
    "older": "Pemberitahuan sebelumnya →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Jendela pertanyaan dan halaman pengenalan layanan telah dibuka.",
      "body": [
        "Kami telah mengumpulkan satu jendela untuk pertanyaan, pengembalian dana, permintaan informasi pribadi, dan pelaporan kesalahan perhitungan. Anda dapat memeriksanya di bagian bawah layar di bawah 'Tanya'.",
        "Saat Anda memberi tahu kami tentang sesuatu yang tampaknya merupakan kesalahan perhitungan, harap sertakan tanggal dan waktu lahir yang Anda masukkan. Kami tidak menyimpan input, jadi tanpa nilai itu, kami tidak dapat menghitung ulang."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Di layar Arab dan Khmer, laporan akan dihasilkan dalam bahasa Inggris.",
      "body": [
        "Jika Anda melihat layar dalam bahasa Arab atau Khmer, laporan PDF yang Anda beli akan dibuat dalam bahasa Inggris. Ini karena alat tersebut belum dapat memformat kedua skrip ini menjadi paragraf.",
        "Anda masih dapat melihat layar seperti adanya, dan nama yang tertulis dalam laporan akan persis seperti yang Anda masukkan.",
        "Informasi yang sama juga disediakan sebelumnya di layar pembayaran. Kami akan memberi tahu Anda di sini ketika alat mendukung skrip ini."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Kriteria perhitungan akan disertakan dengan hasil.",
      "body": [
        "Di bawah layar hasil dan laporan, kriteria perhitungan (misalnya, sajulink-natal-v1) ditunjukkan. Jika inputnya sama, nilai yang sama akan selalu keluar di bawah kriteria yang sama.",
        "Jika aturan untuk menginterpretasikan myeongri diubah dan skor mungkin berbeda, kami akan terlebih dahulu memposting fakta tersebut dan tanggal berlakunya di sini. Ini karena angka dalam tautan hasil yang Anda terima sebelumnya mungkin berubah.",
        "Kriteria saat ini adalah v10, dan pembayaran masih dalam persiapan."
      ]
    }
  }
} satisfies NoticeCopy;
