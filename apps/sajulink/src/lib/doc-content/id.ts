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
