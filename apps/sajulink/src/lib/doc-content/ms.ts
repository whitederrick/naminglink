import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Bahasa Melayu — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const MS_DOCS = {
  "about": {
    "eyebrow": "Pengenalan",
    "title": "Pengenalan Saju-Link",
    "summary": "Ini adalah perkhidmatan yang menetapkan saju (bacaan empat-pilar) berdasarkan tarikh dan waktu kelahiran anda dan menerangkan apa yang dimaksudkan dengan lapan watak. Ia menjelaskan apa yang dikira dan apa yang tidak.",
    "backLabel": "Kembali ke Halaman Utama",
    "sections": [
      {
        "title": "Apa yang kami lakukan?",
        "blocks": [
          {
            "p": "Saju-Link menetapkan **graf saju (empat-pilar) berdasarkan tarikh dan waktu kelahiran anda dan menunjukkan apa yang dimaksudkan dengan lapan watak**. Ia membaca kekuatan lima elemen dan kekuatan pilar hari, serta memeriksa nasib hari ini berdasarkan batang hari."
          },
          {
            "p": "Apa yang anda lihat di skrin adalah **percuma dan tidak memerlukan keahlian.** Produk berbayar adalah dokumen PDF yang mengandungi nilai yang tidak ditunjukkan di skrin — asas untuk membezakan antara pilar hari yang kuat dan pilar hari yang lemah, Wang Sang Hyu Su Sa, dan butiran pembetulan untuk waktu solar sebenar."
          }
        ]
      },
      {
        "title": "Apa yang kami kira?",
        "blocks": [
          {
            "p": "Saju ditetapkan menggunakan **manseyeok (almanak lunisolar Korea)**. Waktu kelahiran diperbetulkan kepada **waktu solar sebenar** tempat kelahiran — kerana kedudukan sebenar matahari berbeza mengikut kawasan walaupun jam menunjukkan waktu yang sama."
          },
          {
            "p": "Skor diberikan hanya mengikut peraturan yang ditetapkan. Konsep dari kajian takdir tradisional myeongri seperti Sepuluh Dewa, hubungan cabang bumi, dan penyeimbangan elemen diterjemahkan ke dalam peraturan untuk pengiraan, dan **input yang sama akan sentiasa menghasilkan nilai yang sama**. Apabila peraturan diubah, ujian regresi dilakukan untuk memastikan bahawa keputusan sebelumnya tetap tidak berubah."
          },
          {
            "p": "**AI tidak digunakan dalam ayat di skrin.** Penjelasan yang muncul di skrin percuma adalah frasa tetap yang dilampirkan kepada hasil pengiraan. **Hanya tafsiran dalam laporan berbayar** yang menggunakan AI generatif, dan walaupun begitu, AI tidak mencipta skor — ia hanya menulis ayat berdasarkan nilai yang diberikan oleh enjin."
          }
        ]
      },
      {
        "title": "Apa yang tidak kami katakan?",
        "blocks": [
          {
            "ul": [
              "**Kami tidak menyediakan ramalan nasib.** Kami tidak menulis bahawa anda harus bertemu atau menghindari sesiapa. Ini adalah bahan rujukan yang merangkum perspektif myeongri tradisional.",
              "**Kami tidak menyimpan input.** Tarikh dan waktu kelahiran hanya digunakan pada saat pengiraan dan tidak disimpan di pelayan. Pautan hasil juga disimpan di lokasi yang tidak dihantar oleh pelayar ke pelayan.",
              "**Skor tidak dianggap sebagai nilai manusia.** Hanya kerana nasib hari ini rendah tidak bermakna anda harus menyerah pada hari itu."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Kaedah pengiraan terperinci ditulis dalam [Panduan Pengguna](/guide). Maklumat perniagaan dan butiran hubungan boleh didapati di [Hubungi Kami](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Asas Pengiraan",
    "title": "Apakah asas untuk pengiraan?",
    "summary": "Kami mendedahkan semua peraturan yang digunakan oleh Saju-Link. Anda boleh menyemak dari mana nombor yang dipaparkan di skrin berasal, termasuk penyesuaian untuk nasib hari ini, skor dari jadual hubungan cabang bumi, dan nilai sempadan yang membezakan antara pilar hari yang kuat dan pilar hari yang lemah.",
    "backLabel": "Kembali ke Halaman Utama",
    "sections": [
      {
        "blocks": [
          {
            "p": "Saju mencatat tahun, bulan, hari dan jam kelahiran anda, masing-masing dengan dua watak Cina, keseluruhannya lapan watak. Watak atas bagi setiap pasangan dipanggil **batang syurga**, watak bawahnya **cabang bumi**, dan dua watak bagi hari lahir anda dipanggil **Pilar Hari**. Jika istilah ini baharu bagi anda, mulakan dengan [Batang Syurga, Cabang Bumi dan Pilar Hari — Cara Membaca Watak Saju](/guide/saju-letters)."
          },
          {
            "ul": [
              "**Batang syurga** — sepuluh watak atas Saju. Setiap satu mempunyai elemen dan kekutuban yang tetap, dan batang syurga bagi hari lahir anda ialah batang hari yang merujuk kepada diri anda.",
              "**Cabang bumi** — dua belas watak bawah Saju, watak yang sama dengan haiwan zodiak. Setiap cabang menyimpan batang tersembunyi (支藏干) di dalamnya.",
              "**Pilar hari** — pasangan yang dibentuk oleh batang dan cabang bagi hari lahir anda. Terdapat 60 pasangan, daripada 甲子 hingga 癸亥, dan setiap satu mempunyai entri tersendiri. Anda boleh menemuinya dalam senarai yang dilipat di bawah."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Nilai yang ditulis di sini adalah semua **dibaca terus dari kod pengiraan**. Oleh kerana ia tidak ditranskrip secara manual ke dalam teks, jika peraturan diubah, nombor dalam dokumen ini juga akan berubah dengan sewajarnya."
          }
        ]
      }
    ]
  },
  "guide/natal-chart": {
    "eyebrow": "Asas Perkhidmatan",
    "title": "graf kelahiran — Dari mana datangnya lapan watak?",
    "summary": "Ia menerangkan bagaimana tahun, bulan, hari, dan waktu kelahiran menjadi empat pilar dan lapan watak, dan mengenal pasti watak mana yang merujuk kepada anda. Ia juga membincangkan mengapa ia boleh dilihat walaupun tanpa mengetahui waktu kelahiran yang tepat.",
    "backLabel": "Asas Pengiraan",
    "sections": [
      {
        "title": "Empat Pilar, Lapan Watak",
        "blocks": [
          {
            "p": "Saju (四柱) secara harfiah bermaksud **empat pilar**. Setiap tahun, bulan, hari, dan waktu kelahiran ditetapkan sebagai satu pilar, dan dua watak ditulis untuk setiap pilar. Oleh itu, terdapat sejumlah lapan watak, yang dirujuk sebagai **graf kelahiran**."
          },
          {
            "table": {
              "head": [
                "Pilar",
                "Dari mana ia berasal?",
                "Dua Watak"
              ],
              "rows": [
                [
                  "Pilar Tahun (年柱)",
                  "Tahun kelahiran",
                  "Batang Syurga + Cabang Bumi"
                ],
                [
                  "Pilar Bulan (月柱)",
                  "Bulan kelahiran",
                  "Batang Syurga + Cabang Bumi"
                ],
                [
                  "Pilar Hari (日柱)",
                  "Hari kelahiran",
                  "Batang Syurga + Cabang Bumi"
                ],
                [
                  "Pilar Waktu (時柱)",
                  "Waktu kelahiran",
                  "Batang Syurga + Cabang Bumi"
                ]
              ]
            }
          },
          {
            "p": "Watak atas dipanggil batang syurga (天干), dan watak bawah dipanggil cabang bumi (地支). Terdapat sepuluh batang syurga dan dua belas cabang bumi. Dua belas cabang bumi biasanya dirujuk sebagai **tanda zodiak**."
          }
        ]
      },
      {
        "title": "Antara mereka, satu watak merujuk kepada saya.",
        "blocks": [
          {
            "p": "Tidak semua lapan watak mempunyai berat yang sama. **Batang syurga hari kelahiran**, khususnya watak atas pilar hari, merujuk kepada **diri saya**. Ini dipanggil **batang hari (日干)**."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju terdiri daripada lapan watak yang ditetapkan menggunakan dua watak untuk setiap tahun, bulan, hari, dan waktu kelahiran, yang diwakili oleh batang syurga dan cabang bumi. Di sini, batang hari yang menonjol (日干) adalah watak yang merujuk kepada diri saya.",
            "labels": {
              "year": "Pilar Tahun",
              "yearNote": "Akar · Tanda Zodiak",
              "month": "Pilar Bulan",
              "monthNote": "Musim · Kekuatan",
              "day": "Pilar Hari",
              "dayNote": "Diri Sendiri · Istana Pasangan",
              "hour": "Pilar Jam",
              "hourNote": "Tahun-Tahun Kemudian · Penggunaan",
              "stem": "Tangkai Surgawi",
              "stemNote": "Tangkai Hari = Diri Sendiri",
              "branch": "Cabang Bumi",
              "branchNote": "Cabang Hari = Istana Pasangan"
            }
          },
          {
            "p": "Apa yang ditunjukkan oleh perkhidmatan ini kebanyakannya berasal dari satu karakter ini — tafsiran kecenderungan, kekuatan lima elemen, tenaga yang diperlukan sekarang, dan **hari ini**'s **fortune** diukur berdasarkan Tangkai Hari. Tujuh karakter yang tinggal menunjukkan 'apa lingkungan di mana Tangkai Hari diletakkan'."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mengapa Hari Kelahiran?",
        "blocks": [
          {
            "p": "Tangkai Tahun adalah sama untuk semua orang yang lahir pada tahun itu, dan Tangkai Bulan adalah sama untuk semua orang yang lahir pada bulan itu. Tangkai Hari berubah apabila hari berubah, dan ramalan tradisional menganggap posisi ini sebagai Diri Sendiri sejak Dinasti Song. Jika Tangkai Jam disertakan, ia membezakan bahkan di antara mereka yang lahir pada hari yang sama."
          }
        ]
      },
      {
        "title": "Dibahagikan Mengikut Istilah Solar, Bukan Tahun Kalendar",
        "blocks": [
          {
            "p": "Tahun saju tidak berubah pada 1 Januari tetapi sebaliknya pada **Ipchun (sekitar 4 Februari)**. Bulan juga dibahagikan berdasarkan istilah solar."
          },
          {
            "p": "Oleh itu, mereka yang lahir pada **Januari dan awal Februari menerima Tangkai Tahun dari tahun sebelumnya**. Di sinilah salah faham umum tentang tanda zodiak muncul. Hal yang sama berlaku jika anda memasukkan hari lahir lunar — ia ditukarkan kembali kepada solar dan kemudian dibahagikan mengikut istilah solar."
          }
        ]
      },
      {
        "title": "Anda Boleh Membacanya Walaupun Tanpa Mengetahui Waktu Kelahiran",
        "blocks": [
          {
            "p": "Jika anda tidak memasukkan waktu, bacaan akan berdasarkan tiga pilar dan enam karakter, tidak termasuk Pilar Jam. Kami tidak meneka nilai yang hilang — secara sewenang-wenangnya menetapkan Pilar Jam boleh mengganggu kekuatan lima elemen, yang membawa kepada kesimpulan yang tidak tepat daripada yang mungkin tepat."
          },
          {
            "p": "Jika anda tahu waktu, adalah lebih baik untuk menyertakannya. Oleh kerana dua karakter ditambah di antara lapan, kekuatan dan penilaian lima elemen boleh berubah. Namun, kami tidak menggunakan waktu jam secara langsung tetapi sebaliknya menggunakan [Waktu Solar Benar](/guide/true-solar-time)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Kaedah mengira lapan karakter sebagai lima elemen untuk menilai kekuatan diteruskan dalam [Kekuatan Lima Elemen dan Pilar Hari Kuat/Lemah](/guide/five-elements), sementara kaedah membaca karakter yang tinggal berdasarkan Tangkai Hari diteruskan dalam [Sepuluh Dewa](/guide/ten-gods)."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Lima Elemen",
    "title": "Kekuatan Lima Elemen dan Pilar Hari Kuat/Lemah",
    "summary": "Kami mengira lapan karakter sebagai lima elemen untuk melihat tenaga mana yang kuat dan mana yang lemah. Kami mendedahkan nilai ambang (45%·35%) yang menentukan kekuatan Tangkai Hari.",
    "backLabel": "Asas Pengiraan",
    "sections": [
      {
        "title": "Mengira Lapan Karakter sebagai Lima Tenaga",
        "blocks": [
          {
            "p": "Sepuluh Tangkai Surgawi dan Dua Belas Cabang Bumi masing-masing tergolong dalam salah satu daripada **Lima Elemen (五行)** — Kayu (木), Api (火), Tanah (土), Logam (金), Air (水). Dengan mengira karakter dalam carta kelahiran mengikut elemen masing-masing, kami dapat menentukan tenaga mana yang kuat dan mana yang lemah."
          },
          {
            "p": "Namun, kami tidak hanya mengira nombor. Kami juga mempertimbangkan **sama ada bulan kelahiran menyokong tenaga itu**. Bahkan karakter yang sama boleh mempunyai kekuatan yang berbeza bergantung kepada sama ada ia memenuhi musimnya. Ini dipanggil Tanda Bulan (月令), dan ia dibahagikan kepada lima tahap: Wang (旺), Sang (相), Hyu (休), Su (囚), dan Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Di Mana Skrin dan Laporan Berbeza",
        "blocks": [
          {
            "p": "Skrin percuma hanya menunjukkan **kekuatan selepas mencerminkan Tanda Bulan**. Nilai sebelum Tanda Bulan dan jadual Wang, Sang, Hyu, Su, dan Sa termasuk dalam laporan berbayar — ini disediakan untuk anda memeriksa secara langsung di mana penilaian berbeza."
          }
        ]
      },
      {
        "title": "Kekuatan Tangkai Hari — Kuat dan Lemah",
        "blocks": [
          {
            "p": "Setelah mengira kekuatan lima elemen, kami menilai sama ada **Tangkai Hari kuat atau lemah**. Kriterianya adalah nisbah tenaga yang selaras dengan Tangkai Hari."
          },
          {
            "p": "Tenaga yang selaras dengan Tangkai Hari adalah **Sumber dan Rakan** — tenaga yang melahirkan saya dan mereka yang serupa dengan saya. Oleh kerana terdapat dua daripada lima, jika tiada bias, ia akan berada di sekitar {evenAllyRatio}. Kami menganggap kawasan sekitar angka itu sebagai seimbang, dan membaca di atas dan di bawahnya sebagai kuat atau lemah."
          },
          {
            "table": {
              "head": [
                "Nisbah Tenaga Selaras Tangkai Hari",
                "Penilaian",
                "Apa Maksudnya?"
              ],
              "rows": [
                [
                  "{strongThreshold} atau lebih tinggi",
                  "Pilar Hari Kuat (身强)",
                  "Tenaga yang menyokong Tangkai Hari adalah banyak."
                ],
                [
                  "{weakThreshold} atau lebih tinggi dan kurang daripada {strongThreshold}",
                  "Seimbang (中和)",
                  "Sukar untuk membuat kesimpulan ke arah mana pun."
                ],
                [
                  "Kurang daripada {weakThreshold}",
                  "Pilar Hari Lemah (身弱)",
                  "Tenaga yang menyokong Tangkai Hari adalah lemah."
                ]
              ]
            }
          },
          {
            "p": "Nombor dalam jadual ini tidak ditranskripsikan dari teks tetapi **dibaca secara langsung dari mesin**. Jika peraturan berubah, dokumen ini juga akan berubah."
          }
        ]
      },
      {
        "title": "Kekuatan Bukan Baik atau Buruk",
        "blocks": [
          {
            "p": "Menjadi kuat tidak bermakna baik, dan menjadi lemah tidak bermakna buruk. Jika kuat, terdapat kuasa untuk maju, tetapi mudah untuk condong ke satu sisi; jika lemah, lebih mudah untuk meminjam kekuatan orang lain, tetapi seseorang mungkin cepat letih apabila bertahan sendirian. **Tenaga yang diperlukan berbeza dalam kedua-dua kes.**"
          },
          {
            "p": "Menentukan 'tenaga yang diperlukan' adalah elemen penyeimbang, dan ia diteruskan dalam [Elemen Penyeimbang](/guide/yongsin)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Bagaimana lapan karakter ditetapkan adalah dalam [carta kelahiran](/guide/natal-chart). Bagaimana Pilar Hari hari ini berinteraksi dengan kekuatan ini dibahas dalam [fortune hari ini](/guide/today-fortune)."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Elemen Penyeimbang",
    "title": "Elemen Penyeimbang — Tenaga yang Diperlukan Sekarang",
    "summary": "Jika Tangkai Hari kuat, kami mempertimbangkan tenaga untuk mengurangkan; jika lemah, kami mempertimbangkan tenaga untuk menyokong sebagai perlu. Ini menerangkan bagaimana untuk memilih tenaga itu dan bagaimana untuk mengendalikannya apabila seimbang.",
    "backLabel": "Asas Pengiraan",
    "sections": [
      {
        "title": "Lima Elemen Saja Tidak Cukup",
        "blocks": [
          {
            "p": "Terdapat cara untuk mengukur sama ada lima elemen didistribusikan secara merata. Namun, apa yang benar-benar diperlukan adalah **apa yang kurang dan apa yang berlebihan dalam saju ini**."
          },
          {
            "p": "Saju yang didistribusikan secara merata tidak selalu selesa, dan saju yang condong tidak selalu sukar. Arah kecenderungan dan sama ada terdapat elemen untuk mengurangkannya adalah persimpangan."
          }
        ]
      },
      {
        "title": "Elemen Penyeimbang — Kurangkan Jika Berlebihan, Tambah Jika Kurang",
        "blocks": [
          {
            "p": "Elemen penyeimbang (用神) adalah **tenaga yang diperlukan oleh individu ini**. Terdapat beberapa kaedah untuk menentukannya (menekan dan menyokong, keseimbangan musiman, gangguan, mediasi), dan yang dapat dinyatakan sebagai peraturan — dan yang paling banyak digunakan — adalah **menekan dan menyokong (抑扶)**. Jika tiang hari kuat, dipercayai bahawa tenaga untuk mengurangkan diperlukan; jika lemah, tenaga untuk menambah diperlukan."
          },
          {
            "table": {
              "head": [
                "Penilaian",
                "Apa yang Diperlukan",
                "Bilangan Jenis"
              ],
              "rows": [
                [
                  "Tiang Hari Kuat (身强)",
                  "Tenaga untuk mengalir — Keluaran, Kekayaan dan Jawatan",
                  "Tiga"
                ],
                [
                  "Tiang Hari Lemah (身弱)",
                  "Tenaga untuk Ditambah — Sumber, Rakan",
                  "Dua"
                ],
                [
                  "Seimbang (中和)",
                  "Tidak dapat diputuskan oleh menekan dan menyokong, jadi tenaga yang paling tipis",
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
            "p": "Sisi tiang hari adalah **Sumber dan Rakan** — tenaga yang melahirkan saya dan tenaga yang serupa dengan saya. Oleh kerana dua daripada lima terlibat, keseimbangan lengkap akan menjadi {evenAllyRatio}. Lebar ditetapkan di atas dan di bawah {evenAllyRatio}."
          },
          {
            "table": {
              "caption": "Nisbah Rakan (Sumber + Rakan) dalam Kekuatan Keseluruhan",
              "head": [
                "Nisbah",
                "Penilaian"
              ],
              "rows": [
                [
                  "{strongThreshold} atau lebih",
                  "Tiang Hari Kuat"
                ],
                [
                  "{weakThreshold} atau lebih dan kurang daripada {strongThreshold}",
                  "Seimbang"
                ],
                [
                  "Kurang daripada {weakThreshold}",
                  "Tiang Hari Lemah"
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
            "p": "Seimbang bermaksud menekan dan menyokong tidak dapat memutuskan. Pada masa ini, dua tenaga yang paling tipis dianggap sebagai perlu. Dalam skrin hasil, ia dicatat sebagai 'kedudukan yang kini tipis' dan bukannya pernyataan yang pasti."
          }
        ]
      },
      {
        "title": "Kekuatan Bukan Bilangan Watak",
        "blocks": [
          {
            "p": "Apabila mengira kekuatan lima elemen, lapan watak tidak dikira seperti yang muncul. Nilai mencerminkan batang langit yang tersembunyi (地藏干) dalam cabang bumi dan musim tenaga bulan (月令) di mana seseorang dilahirkan."
          },
          {
            "p": "Mengira hanya watak permukaan mengabaikan fakta bahawa walaupun watak 木 yang sama boleh mempunyai kekuatan yang berbeza bergantung pada musim. 木 musim bunga dan 木 musim luruh, walaupun watak yang sama, mempunyai kekuatan yang berbeza."
          }
        ]
      },
      {
        "title": "Di Mana Menggunakan Elemen Penyeimbang",
        "blocks": [
          {
            "p": "Elemen penyeimbang yang ditentukan digunakan di dua tempat. Satu adalah skrin hasil **'tenaga yang kini diperlukan'**, dan yang lain adalah [ramalan hari ini](/guide/today-fortune) — sama ada tenaga hari ini sesuai dengan elemen penyeimbang adalah item yang paling banyak mempengaruhi skor pada hari itu."
          }
        ]
      },
      {
        "title": "Ini Adalah Penilaian yang Mudah",
        "blocks": [
          {
            "p": "Analisis takdir sebenar mempertimbangkan pembentukan dan keadaan musiman (kehangatan dan kelembapan musim) untuk menentukan elemen penyeimbang, dan kesimpulan mungkin berbeza bergantung pada kaedah. Saju-Link hanya menggunakan **pengurangan yang dapat diukur dengan nilai kekuatan**. Ini adalah kerana prinsip menggunakan hanya apa yang dapat ditukar menjadi peraturan, jadi input yang sama akan sentiasa menghasilkan jawapan yang sama."
          },
          {
            "p": "Sebaliknya, skrin hasil juga menyajikan tiang hari yang kuat dan lemah bersama dengan tenaga yang kini diperlukan sebagai **bahan bacaan**. Ini untuk mengelakkan menyembunyikan asas skor."
          }
        ]
      }
    ]
  },
  "guide/stem-gap": {
    "eyebrow": "Batang syurga",
    "title": "Kayu Yang (甲) — Kayu, Yang",
    "summary": "Elemen dan kekutuban batang syurga 甲, cara ia membaca sembilan batang lain (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Kayu Yang (甲) ialah batang syurga yang pertama daripada sepuluh batang syurga",
        "blocks": [
          {
            "p": "甲 ialah batang syurga yang pertama daripada sepuluh batang syurga. Elemennya ialah Kayu dan kekutubannya ialah Yang. Saju-Link memanggil orang yang batang harinya 甲 \"Kayu Yang (甲)\"."
          },
          {
            "p": "Baris yang dipaparkan oleh skrin keputusan untuk batang hari ini ialah: \"Pokok tinggi yang tumbuh lurus. Sekali arahnya ditetapkan ia tidak goyah, dan ia lebih rela bertahan daripada tunduk.\" Baris ini tiada kaitan dengan jadual atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara ia membaca batang lain (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 甲 sebagai batang hari, setiap satu daripada sepuluh batang dibaca seperti berikut. Bacaan ini mempunyai arah: beginilah 甲 membaca batang yang lain, dan apabila batang yang lain membaca 甲, nama yang berbeza boleh muncul."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Kayu Yang (甲) sebagai batang hari",
              "head": [
                "Batang lain",
                "Elemen dan kekutuban",
                "Sepuluh Dewa"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "Pesaing (劫財)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Ekspresi (食神)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Pengocak (傷官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Harta Tetap (正財)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Pencabar (偏官)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Kewibawaan (正官)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Sokongan Luar Biasa (偏印)"
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
        "title": "Batang yang dibaca sebagai kedudukan pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 甲 sebagai batang hari, Harta Tetap ialah 己 dan Kewibawaan ialah 辛. Jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 甲",
        "blocks": [
          {
            "p": "Inilah tempat 甲 tersembunyi di dalam cabang bumi (batang tersembunyi). Bahagian ialah kadar tiga puluh hari cabang itu yang diambil oleh 甲."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 甲",
              "head": [
                "Cabang",
                "Haiwan",
                "Kedudukan",
                "Bahagian"
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
                  "Arnab",
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
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Saju dibaca daripada bagaimana lapan wataknya saling berkait.",
              "Sepuluh Dewa ialah penilaian yang dibuat berdasarkan batang hari. Dua watak yang sama mendapat nama yang berbeza bergantung pada watak mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya terdapat dalam [panduan Sepuluh Dewa](/guide/ten-gods), manakala kekuatan elemen dan Tanda Bulan terdapat dalam [panduan lima elemen](/guide/five-elements). Batang lain: [Kayu Yin (乙)](/guide/stem-eul) · [Api Yang (丙)](/guide/stem-byeong) · [Api Yin (丁)](/guide/stem-jeong) · [Tanah Yang (戊)](/guide/stem-mu) · [Tanah Yin (己)](/guide/stem-gi) · [Logam Yang (庚)](/guide/stem-gyeong) · [Logam Yin (辛)](/guide/stem-sin) · [Air Yang (壬)](/guide/stem-im) · [Air Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-eul": {
    "eyebrow": "Batang syurga",
    "title": "Kayu Yin (乙) — Kayu, Yin",
    "summary": "Elemen dan kekutuban batang syurga 乙, cara ia membaca sembilan batang lain (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Kayu Yin (乙) ialah batang syurga yang kedua daripada sepuluh batang syurga",
        "blocks": [
          {
            "p": "乙 ialah batang syurga yang kedua daripada sepuluh batang syurga. Elemennya ialah Kayu dan kekutubannya ialah Yin. Saju-Link memanggil orang yang batang harinya 乙 \"Kayu Yin (乙)\"."
          },
          {
            "p": "Baris yang dipaparkan oleh skrin keputusan untuk batang hari ini ialah: \"Pokok menjalar — rumput yang lentur. Ia melentur mengikut keadaan untuk terus bergerak, dan ia tidak patah.\" Baris ini tiada kaitan dengan jadual atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara ia membaca batang lain (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 乙 sebagai batang hari, setiap satu daripada sepuluh batang dibaca seperti berikut. Bacaan ini mempunyai arah: beginilah 乙 membaca batang yang lain, dan apabila batang yang lain membaca 乙, nama yang berbeza boleh muncul."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Kayu Yin (乙) sebagai batang hari",
              "head": [
                "Batang lain",
                "Elemen dan kekutuban",
                "Sepuluh Dewa"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "Pesaing (劫財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Pengocak (傷官)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Ekspresi (食神)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Harta Tetap (正財)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Kewibawaan (正官)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Pencabar (偏官)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Pengasuhan (正印)"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "Sokongan Luar Biasa (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Batang yang dibaca sebagai kedudukan pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 乙 sebagai batang hari, Harta Tetap ialah 戊 dan Kewibawaan ialah 庚. Jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 乙",
        "blocks": [
          {
            "p": "Inilah tempat 乙 tersembunyi di dalam cabang bumi (batang tersembunyi). Bahagian ialah kadar tiga puluh hari cabang itu yang diambil oleh 乙."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 乙",
              "head": [
                "Cabang",
                "Haiwan",
                "Kedudukan",
                "Bahagian"
              ],
              "rows": [
                [
                  "卯",
                  "Arnab",
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
                  "Biri-biri",
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
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Saju dibaca daripada bagaimana lapan wataknya saling berkait.",
              "Sepuluh Dewa ialah penilaian yang dibuat berdasarkan batang hari. Dua watak yang sama mendapat nama yang berbeza bergantung pada watak mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya terdapat dalam [panduan Sepuluh Dewa](/guide/ten-gods), manakala kekuatan elemen dan Tanda Bulan terdapat dalam [panduan lima elemen](/guide/five-elements). Batang lain: [Kayu Yang (甲)](/guide/stem-gap) · [Api Yang (丙)](/guide/stem-byeong) · [Api Yin (丁)](/guide/stem-jeong) · [Tanah Yang (戊)](/guide/stem-mu) · [Tanah Yin (己)](/guide/stem-gi) · [Logam Yang (庚)](/guide/stem-gyeong) · [Logam Yin (辛)](/guide/stem-sin) · [Air Yang (壬)](/guide/stem-im) · [Air Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-byeong": {
    "eyebrow": "Batang syurga",
    "title": "Api Yang (丙) — Api, Yang",
    "summary": "Elemen dan kekutuban batang syurga 丙, cara ia membaca sembilan batang lain (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Api Yang (丙) ialah batang syurga yang ketiga daripada sepuluh batang syurga",
        "blocks": [
          {
            "p": "丙 ialah batang syurga yang ketiga daripada sepuluh batang syurga. Elemennya ialah Api dan kekutubannya ialah Yang. Saju-Link memanggil orang yang batang harinya 丙 \"Api Yang (丙)\"."
          },
          {
            "p": "Baris yang dipaparkan oleh skrin keputusan untuk batang hari ini ialah: \"Matahari tengah hari. Perasaan terpampang jelas, ruang menjadi terang, dan melangkah ke hadapan datang secara semula jadi.\" Baris ini tiada kaitan dengan jadual atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara ia membaca batang lain (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 丙 sebagai batang hari, setiap satu daripada sepuluh batang dibaca seperti berikut. Bacaan ini mempunyai arah: beginilah 丙 membaca batang yang lain, dan apabila batang yang lain membaca 丙, nama yang berbeza boleh muncul."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Api Yang (丙) sebagai batang hari",
              "head": [
                "Batang lain",
                "Elemen dan kekutuban",
                "Sepuluh Dewa"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "Pengasuhan (正印)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Pesaing (劫財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Ekspresi (食神)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Pengocak (傷官)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Harta Tetap (正財)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Pencabar (偏官)"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "Kewibawaan (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Batang yang dibaca sebagai kedudukan pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 丙 sebagai batang hari, Harta Tetap ialah 辛 dan Kewibawaan ialah 癸. Jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 丙",
        "blocks": [
          {
            "p": "Inilah tempat 丙 tersembunyi di dalam cabang bumi (batang tersembunyi). Bahagian ialah kadar tiga puluh hari cabang itu yang diambil oleh 丙."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 丙",
              "head": [
                "Cabang",
                "Haiwan",
                "Kedudukan",
                "Bahagian"
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
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Saju dibaca daripada bagaimana lapan wataknya saling berkait.",
              "Sepuluh Dewa ialah penilaian yang dibuat berdasarkan batang hari. Dua watak yang sama mendapat nama yang berbeza bergantung pada watak mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya terdapat dalam [panduan Sepuluh Dewa](/guide/ten-gods), manakala kekuatan elemen dan Tanda Bulan terdapat dalam [panduan lima elemen](/guide/five-elements). Batang lain: [Kayu Yang (甲)](/guide/stem-gap) · [Kayu Yin (乙)](/guide/stem-eul) · [Api Yin (丁)](/guide/stem-jeong) · [Tanah Yang (戊)](/guide/stem-mu) · [Tanah Yin (己)](/guide/stem-gi) · [Logam Yang (庚)](/guide/stem-gyeong) · [Logam Yin (辛)](/guide/stem-sin) · [Air Yang (壬)](/guide/stem-im) · [Air Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-jeong": {
    "eyebrow": "Batang syurga",
    "title": "Api Yin (丁) — Api, Yin",
    "summary": "Elemen dan kekutuban batang syurga 丁, cara ia membaca sembilan batang lain (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Api Yin (丁) ialah batang syurga yang keempat daripada sepuluh batang syurga",
        "blocks": [
          {
            "p": "丁 ialah batang syurga yang keempat daripada sepuluh batang syurga. Elemennya ialah Api dan kekutubannya ialah Yin. Saju-Link memanggil orang yang batang harinya 丁 \"Api Yin (丁)\"."
          },
          {
            "p": "Baris yang dipaparkan oleh skrin keputusan untuk batang hari ini ialah: \"Cahaya lilin. Ia menyala perlahan dan lama, serta menghangatkan yang terdekat dahulu.\" Baris ini tiada kaitan dengan jadual atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara ia membaca batang lain (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 丁 sebagai batang hari, setiap satu daripada sepuluh batang dibaca seperti berikut. Bacaan ini mempunyai arah: beginilah 丁 membaca batang yang lain, dan apabila batang yang lain membaca 丁, nama yang berbeza boleh muncul."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Api Yin (丁) sebagai batang hari",
              "head": [
                "Batang lain",
                "Elemen dan kekutuban",
                "Sepuluh Dewa"
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
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Pesaing (劫財)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Pengocak (傷官)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Ekspresi (食神)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Harta Tetap (正財)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Kewibawaan (正官)"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "Pencabar (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Batang yang dibaca sebagai kedudukan pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 丁 sebagai batang hari, Harta Tetap ialah 庚 dan Kewibawaan ialah 壬. Jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 丁",
        "blocks": [
          {
            "p": "Inilah tempat 丁 tersembunyi di dalam cabang bumi (batang tersembunyi). Bahagian ialah kadar tiga puluh hari cabang itu yang diambil oleh 丁."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 丁",
              "head": [
                "Cabang",
                "Haiwan",
                "Kedudukan",
                "Bahagian"
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
                  "Biri-biri",
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
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Saju dibaca daripada bagaimana lapan wataknya saling berkait.",
              "Sepuluh Dewa ialah penilaian yang dibuat berdasarkan batang hari. Dua watak yang sama mendapat nama yang berbeza bergantung pada watak mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya terdapat dalam [panduan Sepuluh Dewa](/guide/ten-gods), manakala kekuatan elemen dan Tanda Bulan terdapat dalam [panduan lima elemen](/guide/five-elements). Batang lain: [Kayu Yang (甲)](/guide/stem-gap) · [Kayu Yin (乙)](/guide/stem-eul) · [Api Yang (丙)](/guide/stem-byeong) · [Tanah Yang (戊)](/guide/stem-mu) · [Tanah Yin (己)](/guide/stem-gi) · [Logam Yang (庚)](/guide/stem-gyeong) · [Logam Yin (辛)](/guide/stem-sin) · [Air Yang (壬)](/guide/stem-im) · [Air Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-mu": {
    "eyebrow": "Batang syurga",
    "title": "Tanah Yang (戊) — Tanah, Yang",
    "summary": "Elemen dan kekutuban batang syurga 戊, cara ia membaca sembilan batang lain (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Tanah Yang (戊) ialah batang syurga yang kelima daripada sepuluh batang syurga",
        "blocks": [
          {
            "p": "戊 ialah batang syurga yang kelima daripada sepuluh batang syurga. Elemennya ialah Tanah dan kekutubannya ialah Yang. Saju-Link memanggil orang yang batang harinya 戊 \"Tanah Yang (戊)\"."
          },
          {
            "p": "Baris yang dipaparkan oleh skrin keputusan untuk batang hari ini ialah: \"Tanah lapang dan gunung. Sukar digoyah dan mudah disandari, walaupun lambat mengubah keputusan yang sudah dibuat.\" Baris ini tiada kaitan dengan jadual atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara ia membaca batang lain (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 戊 sebagai batang hari, setiap satu daripada sepuluh batang dibaca seperti berikut. Bacaan ini mempunyai arah: beginilah 戊 membaca batang yang lain, dan apabila batang yang lain membaca 戊, nama yang berbeza boleh muncul."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Tanah Yang (戊) sebagai batang hari",
              "head": [
                "Batang lain",
                "Elemen dan kekutuban",
                "Sepuluh Dewa"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "Pencabar (偏官)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "Kewibawaan (正官)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Pengasuhan (正印)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Pesaing (劫財)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Ekspresi (食神)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Pengocak (傷官)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "Harta Tetap (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Batang yang dibaca sebagai kedudukan pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 戊 sebagai batang hari, Harta Tetap ialah 癸 dan Kewibawaan ialah 乙. Jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 戊",
        "blocks": [
          {
            "p": "Inilah tempat 戊 tersembunyi di dalam cabang bumi (batang tersembunyi). Bahagian ialah kadar tiga puluh hari cabang itu yang diambil oleh 戊."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 戊",
              "head": [
                "Cabang",
                "Haiwan",
                "Kedudukan",
                "Bahagian"
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
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Saju dibaca daripada bagaimana lapan wataknya saling berkait.",
              "Sepuluh Dewa ialah penilaian yang dibuat berdasarkan batang hari. Dua watak yang sama mendapat nama yang berbeza bergantung pada watak mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya terdapat dalam [panduan Sepuluh Dewa](/guide/ten-gods), manakala kekuatan elemen dan Tanda Bulan terdapat dalam [panduan lima elemen](/guide/five-elements). Batang lain: [Kayu Yang (甲)](/guide/stem-gap) · [Kayu Yin (乙)](/guide/stem-eul) · [Api Yang (丙)](/guide/stem-byeong) · [Api Yin (丁)](/guide/stem-jeong) · [Tanah Yin (己)](/guide/stem-gi) · [Logam Yang (庚)](/guide/stem-gyeong) · [Logam Yin (辛)](/guide/stem-sin) · [Air Yang (壬)](/guide/stem-im) · [Air Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gi": {
    "eyebrow": "Batang syurga",
    "title": "Tanah Yin (己) — Tanah, Yin",
    "summary": "Elemen dan kekutuban batang syurga 己, cara ia membaca sembilan batang lain (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Tanah Yin (己) ialah batang syurga yang keenam daripada sepuluh batang syurga",
        "blocks": [
          {
            "p": "己 ialah batang syurga yang keenam daripada sepuluh batang syurga. Elemennya ialah Tanah dan kekutubannya ialah Yin. Saju-Link memanggil orang yang batang harinya 己 \"Tanah Yin (己)\"."
          },
          {
            "p": "Baris yang dipaparkan oleh skrin keputusan untuk batang hari ini ialah: \"Tanah ladang. Ia menerima apa sahaja yang datang dan membesarkannya, memelihara dan bukan mempamerkan.\" Baris ini tiada kaitan dengan jadual atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara ia membaca batang lain (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 己 sebagai batang hari, setiap satu daripada sepuluh batang dibaca seperti berikut. Bacaan ini mempunyai arah: beginilah 己 membaca batang yang lain, dan apabila batang yang lain membaca 己, nama yang berbeza boleh muncul."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Tanah Yin (己) sebagai batang hari",
              "head": [
                "Batang lain",
                "Elemen dan kekutuban",
                "Sepuluh Dewa"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "Kewibawaan (正官)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "Pencabar (偏官)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Pengasuhan (正印)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Pesaing (劫財)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Pengocak (傷官)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Ekspresi (食神)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Harta Tetap (正財)"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "Rezeki Mendadak (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Batang yang dibaca sebagai kedudukan pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 己 sebagai batang hari, Harta Tetap ialah 壬 dan Kewibawaan ialah 甲. Jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 己",
        "blocks": [
          {
            "p": "Inilah tempat 己 tersembunyi di dalam cabang bumi (batang tersembunyi). Bahagian ialah kadar tiga puluh hari cabang itu yang diambil oleh 己."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 己",
              "head": [
                "Cabang",
                "Haiwan",
                "Kedudukan",
                "Bahagian"
              ],
              "rows": [
                [
                  "丑",
                  "Lembu",
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
                  "Biri-biri",
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
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Saju dibaca daripada bagaimana lapan wataknya saling berkait.",
              "Sepuluh Dewa ialah penilaian yang dibuat berdasarkan batang hari. Dua watak yang sama mendapat nama yang berbeza bergantung pada watak mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya terdapat dalam [panduan Sepuluh Dewa](/guide/ten-gods), manakala kekuatan elemen dan Tanda Bulan terdapat dalam [panduan lima elemen](/guide/five-elements). Batang lain: [Kayu Yang (甲)](/guide/stem-gap) · [Kayu Yin (乙)](/guide/stem-eul) · [Api Yang (丙)](/guide/stem-byeong) · [Api Yin (丁)](/guide/stem-jeong) · [Tanah Yang (戊)](/guide/stem-mu) · [Logam Yang (庚)](/guide/stem-gyeong) · [Logam Yin (辛)](/guide/stem-sin) · [Air Yang (壬)](/guide/stem-im) · [Air Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gyeong": {
    "eyebrow": "Batang syurga",
    "title": "Logam Yang (庚) — Logam, Yang",
    "summary": "Elemen dan kekutuban batang syurga 庚, cara ia membaca sembilan batang lain (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Logam Yang (庚) ialah batang syurga yang ketujuh daripada sepuluh batang syurga",
        "blocks": [
          {
            "p": "庚 ialah batang syurga yang ketujuh daripada sepuluh batang syurga. Elemennya ialah Logam dan kekutubannya ialah Yang. Saju-Link memanggil orang yang batang harinya 庚 \"Logam Yang (庚)\"."
          },
          {
            "p": "Baris yang dipaparkan oleh skrin keputusan untuk batang hari ini ialah: \"Besi yang belum ditempa. Tegas dan jelas, dengan sedikit sahaja kesabaran terhadap perkara yang tergantung.\" Baris ini tiada kaitan dengan jadual atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara ia membaca batang lain (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 庚 sebagai batang hari, setiap satu daripada sepuluh batang dibaca seperti berikut. Bacaan ini mempunyai arah: beginilah 庚 membaca batang yang lain, dan apabila batang yang lain membaca 庚, nama yang berbeza boleh muncul."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Logam Yang (庚) sebagai batang hari",
              "head": [
                "Batang lain",
                "Elemen dan kekutuban",
                "Sepuluh Dewa"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "Harta Tetap (正財)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Pencabar (偏官)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Kewibawaan (正官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Pengasuhan (正印)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Pesaing (劫財)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Ekspresi (食神)"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "Pengocak (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Batang yang dibaca sebagai kedudukan pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 庚 sebagai batang hari, Harta Tetap ialah 乙 dan Kewibawaan ialah 丁. Jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 庚",
        "blocks": [
          {
            "p": "Inilah tempat 庚 tersembunyi di dalam cabang bumi (batang tersembunyi). Bahagian ialah kadar tiga puluh hari cabang itu yang diambil oleh 庚."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 庚",
              "head": [
                "Cabang",
                "Haiwan",
                "Kedudukan",
                "Bahagian"
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
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Saju dibaca daripada bagaimana lapan wataknya saling berkait.",
              "Sepuluh Dewa ialah penilaian yang dibuat berdasarkan batang hari. Dua watak yang sama mendapat nama yang berbeza bergantung pada watak mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya terdapat dalam [panduan Sepuluh Dewa](/guide/ten-gods), manakala kekuatan elemen dan Tanda Bulan terdapat dalam [panduan lima elemen](/guide/five-elements). Batang lain: [Kayu Yang (甲)](/guide/stem-gap) · [Kayu Yin (乙)](/guide/stem-eul) · [Api Yang (丙)](/guide/stem-byeong) · [Api Yin (丁)](/guide/stem-jeong) · [Tanah Yang (戊)](/guide/stem-mu) · [Tanah Yin (己)](/guide/stem-gi) · [Logam Yin (辛)](/guide/stem-sin) · [Air Yang (壬)](/guide/stem-im) · [Air Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-sin": {
    "eyebrow": "Batang syurga",
    "title": "Logam Yin (辛) — Logam, Yin",
    "summary": "Elemen dan kekutuban batang syurga 辛, cara ia membaca sembilan batang lain (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Logam Yin (辛) ialah batang syurga yang kelapan daripada sepuluh batang syurga",
        "blocks": [
          {
            "p": "辛 ialah batang syurga yang kelapan daripada sepuluh batang syurga. Elemennya ialah Logam dan kekutubannya ialah Yin. Saju-Link memanggil orang yang batang harinya 辛 \"Logam Yin (辛)\"."
          },
          {
            "p": "Baris yang dipaparkan oleh skrin keputusan untuk batang hari ini ialah: \"Permata yang telah diasah. Cita rasa halus dan piawaian tinggi; kerja sambil lewa sukar dibiarkan.\" Baris ini tiada kaitan dengan jadual atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara ia membaca batang lain (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 辛 sebagai batang hari, setiap satu daripada sepuluh batang dibaca seperti berikut. Bacaan ini mempunyai arah: beginilah 辛 membaca batang yang lain, dan apabila batang yang lain membaca 辛, nama yang berbeza boleh muncul."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Logam Yin (辛) sebagai batang hari",
              "head": [
                "Batang lain",
                "Elemen dan kekutuban",
                "Sepuluh Dewa"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "Harta Tetap (正財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Kewibawaan (正官)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Pencabar (偏官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Pengasuhan (正印)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Pesaing (劫財)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Pengocak (傷官)"
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
        "title": "Batang yang dibaca sebagai kedudukan pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 辛 sebagai batang hari, Harta Tetap ialah 甲 dan Kewibawaan ialah 丙. Jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 辛",
        "blocks": [
          {
            "p": "Inilah tempat 辛 tersembunyi di dalam cabang bumi (batang tersembunyi). Bahagian ialah kadar tiga puluh hari cabang itu yang diambil oleh 辛."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 辛",
              "head": [
                "Cabang",
                "Haiwan",
                "Kedudukan",
                "Bahagian"
              ],
              "rows": [
                [
                  "丑",
                  "Lembu",
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
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Saju dibaca daripada bagaimana lapan wataknya saling berkait.",
              "Sepuluh Dewa ialah penilaian yang dibuat berdasarkan batang hari. Dua watak yang sama mendapat nama yang berbeza bergantung pada watak mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya terdapat dalam [panduan Sepuluh Dewa](/guide/ten-gods), manakala kekuatan elemen dan Tanda Bulan terdapat dalam [panduan lima elemen](/guide/five-elements). Batang lain: [Kayu Yang (甲)](/guide/stem-gap) · [Kayu Yin (乙)](/guide/stem-eul) · [Api Yang (丙)](/guide/stem-byeong) · [Api Yin (丁)](/guide/stem-jeong) · [Tanah Yang (戊)](/guide/stem-mu) · [Tanah Yin (己)](/guide/stem-gi) · [Logam Yang (庚)](/guide/stem-gyeong) · [Air Yang (壬)](/guide/stem-im) · [Air Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-im": {
    "eyebrow": "Batang syurga",
    "title": "Air Yang (壬) — Air, Yang",
    "summary": "Elemen dan kekutuban batang syurga 壬, cara ia membaca sembilan batang lain (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Air Yang (壬) ialah batang syurga yang kesembilan daripada sepuluh batang syurga",
        "blocks": [
          {
            "p": "壬 ialah batang syurga yang kesembilan daripada sepuluh batang syurga. Elemennya ialah Air dan kekutubannya ialah Yang. Saju-Link memanggil orang yang batang harinya 壬 \"Air Yang (壬)\"."
          },
          {
            "p": "Baris yang dipaparkan oleh skrin keputusan untuk batang hari ini ialah: \"Sungai dan laut. Luas pandangannya, dengan mata yang membaca ke mana sesuatu mengalir.\" Baris ini tiada kaitan dengan jadual atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara ia membaca batang lain (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 壬 sebagai batang hari, setiap satu daripada sepuluh batang dibaca seperti berikut. Bacaan ini mempunyai arah: beginilah 壬 membaca batang yang lain, dan apabila batang yang lain membaca 壬, nama yang berbeza boleh muncul."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Air Yang (壬) sebagai batang hari",
              "head": [
                "Batang lain",
                "Elemen dan kekutuban",
                "Sepuluh Dewa"
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
                  "Pengocak (傷官)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Harta Tetap (正財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Pencabar (偏官)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Kewibawaan (正官)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Pengasuhan (正印)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "Pesaing (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Batang yang dibaca sebagai kedudukan pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 壬 sebagai batang hari, Harta Tetap ialah 丁 dan Kewibawaan ialah 己. Jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 壬",
        "blocks": [
          {
            "p": "Inilah tempat 壬 tersembunyi di dalam cabang bumi (batang tersembunyi). Bahagian ialah kadar tiga puluh hari cabang itu yang diambil oleh 壬."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 壬",
              "head": [
                "Cabang",
                "Haiwan",
                "Kedudukan",
                "Bahagian"
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
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Saju dibaca daripada bagaimana lapan wataknya saling berkait.",
              "Sepuluh Dewa ialah penilaian yang dibuat berdasarkan batang hari. Dua watak yang sama mendapat nama yang berbeza bergantung pada watak mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya terdapat dalam [panduan Sepuluh Dewa](/guide/ten-gods), manakala kekuatan elemen dan Tanda Bulan terdapat dalam [panduan lima elemen](/guide/five-elements). Batang lain: [Kayu Yang (甲)](/guide/stem-gap) · [Kayu Yin (乙)](/guide/stem-eul) · [Api Yang (丙)](/guide/stem-byeong) · [Api Yin (丁)](/guide/stem-jeong) · [Tanah Yang (戊)](/guide/stem-mu) · [Tanah Yin (己)](/guide/stem-gi) · [Logam Yang (庚)](/guide/stem-gyeong) · [Logam Yin (辛)](/guide/stem-sin) · [Air Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gye": {
    "eyebrow": "Batang syurga",
    "title": "Air Yin (癸) — Air, Yin",
    "summary": "Elemen dan kekutuban batang syurga 癸, cara ia membaca sembilan batang lain (Sepuluh Dewa) dan cabang bumi mana yang menyimpannya — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Air Yin (癸) ialah batang syurga yang kesepuluh daripada sepuluh batang syurga",
        "blocks": [
          {
            "p": "癸 ialah batang syurga yang kesepuluh daripada sepuluh batang syurga. Elemennya ialah Air dan kekutubannya ialah Yin. Saju-Link memanggil orang yang batang harinya 癸 \"Air Yin (癸)\"."
          },
          {
            "p": "Baris yang dipaparkan oleh skrin keputusan untuk batang hari ini ialah: \"Embun dan hujan. Ia meresap senyap dan membaca suasana sebelum kata-kata.\" Baris ini tiada kaitan dengan jadual atau skor di bawah."
          }
        ]
      },
      {
        "title": "Cara ia membaca batang lain (Sepuluh Dewa)",
        "blocks": [
          {
            "p": "Dengan 癸 sebagai batang hari, setiap satu daripada sepuluh batang dibaca seperti berikut. Bacaan ini mempunyai arah: beginilah 癸 membaca batang yang lain, dan apabila batang yang lain membaca 癸, nama yang berbeza boleh muncul."
          },
          {
            "table": {
              "caption": "Sepuluh Dewa dengan Air Yin (癸) sebagai batang hari",
              "head": [
                "Batang lain",
                "Elemen dan kekutuban",
                "Sepuluh Dewa"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang",
                  "Pengocak (傷官)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin",
                  "Ekspresi (食神)"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang",
                  "Harta Tetap (正財)"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang",
                  "Kewibawaan (正官)"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin",
                  "Pencabar (偏官)"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang",
                  "Pengasuhan (正印)"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang",
                  "Pesaing (劫財)"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin",
                  "Rakan Sebahu (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Batang yang dibaca sebagai kedudukan pasangan",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 癸 sebagai batang hari, Harta Tetap ialah 丙 dan Kewibawaan ialah 戊. Jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
          }
        ]
      },
      {
        "title": "Cabang yang menyimpan 癸",
        "blocks": [
          {
            "p": "Inilah tempat 癸 tersembunyi di dalam cabang bumi (batang tersembunyi). Bahagian ialah kadar tiga puluh hari cabang itu yang diambil oleh 癸."
          },
          {
            "table": {
              "caption": "Cabang yang menyimpan 癸",
              "head": [
                "Cabang",
                "Haiwan",
                "Kedudukan",
                "Bahagian"
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
                  "Lembu",
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
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu batang tidak menentukan seseorang. Saju dibaca daripada bagaimana lapan wataknya saling berkait.",
              "Sepuluh Dewa ialah penilaian yang dibuat berdasarkan batang hari. Dua watak yang sama mendapat nama yang berbeza bergantung pada watak mana yang menjadi batang hari."
            ]
          },
          {
            "p": "Sepuluh Dewa selengkapnya terdapat dalam [panduan Sepuluh Dewa](/guide/ten-gods), manakala kekuatan elemen dan Tanda Bulan terdapat dalam [panduan lima elemen](/guide/five-elements). Batang lain: [Kayu Yang (甲)](/guide/stem-gap) · [Kayu Yin (乙)](/guide/stem-eul) · [Api Yang (丙)](/guide/stem-byeong) · [Api Yin (丁)](/guide/stem-jeong) · [Tanah Yang (戊)](/guide/stem-mu) · [Tanah Yin (己)](/guide/stem-gi) · [Logam Yang (庚)](/guide/stem-gyeong) · [Logam Yin (辛)](/guide/stem-sin) · [Air Yang (壬)](/guide/stem-im)"
          }
        ]
      }
    ]
  },

  "guide/branch-ja": {
    "eyebrow": "Cabang bumi",
    "title": "子 — cabang Tikus",
    "summary": "Batang yang disimpan oleh cabang bumi 子 (batang tersembunyi), kekuatan lima elemen apabila ia menjadi cabang bulan, dan Sepuluh Dewa yang dibaca untuk setiap batang hari — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "子 ialah cabang bumi yang pertama daripada dua belas cabang bumi",
        "blocks": [
          {
            "p": "子 ialah cabang bumi yang pertama daripada dua belas cabang bumi dan tergolong dalam Tikus. Apabila cabang bulan kelahiran ialah 子, musimnya ialah musim sejuk dan elemen yang menguasai musim itu ialah Air."
          },
          {
            "p": "Apabila cabang hari kelahiran ialah 子, watak ini ialah kedudukan pasangan. Di bawah ini anda dapat melihat batang yang disimpan oleh cabang ini dan apakah kedudukannya terhadap batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan oleh cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Cabang ialah satu watak yang kelihatan tetapi menyimpan batang di dalamnya. Bahagian ialah cara tiga puluh hari cabang itu dibahagikan antara batang, dan batang utama ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi 子",
              "head": [
                "Batang",
                "Elemen dan kekutuban",
                "Kedudukan",
                "Bahagian"
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
        "title": "Kekuatan lima elemen apabila cabang bulan ialah 子",
        "blocks": [
          {
            "p": "Apabila cabang bulan kelahiran ialah 子, setiap elemen mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengganda yang dikenakan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan elemen bagi cabang bulan 子 (musim sejuk)",
              "head": [
                "Elemen",
                "Keadaan",
                "Pengganda"
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
        "title": "Sepuluh Dewa mengikut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 子 yang sama menjadi Sepuluh Dewa yang berbeza bergantung pada batang hari. Apabila 子 ialah cabang hari, jadual ini ialah bacaan kedudukan pasangan."
          },
          {
            "table": {
              "caption": "Apakah batang tersembunyi 子 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Air Yang (壬) — sisa (餘氣)",
                "Air Yin (癸) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Sokongan Luar Biasa (偏印)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Pengasuhan (正印)",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Api Yang (丙)",
                  "Pencabar (偏官)",
                  "Kewibawaan (正官)"
                ],
                [
                  "Api Yin (丁)",
                  "Kewibawaan (正官)",
                  "Pencabar (偏官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Rezeki Mendadak (偏財)",
                  "Harta Tetap (正財)"
                ],
                [
                  "Tanah Yin (己)",
                  "Harta Tetap (正財)",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Logam Yang (庚)",
                  "Ekspresi (食神)",
                  "Pengocak (傷官)"
                ],
                [
                  "Logam Yin (辛)",
                  "Pengocak (傷官)",
                  "Ekspresi (食神)"
                ],
                [
                  "Air Yang (壬)",
                  "Rakan Sebahu (比肩)",
                  "Pesaing (劫財)"
                ],
                [
                  "Air Yin (癸)",
                  "Pesaing (劫財)",
                  "Rakan Sebahu (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama dibaca secara berbeza bergantung pada batang hari dan cabang bulan.",
              "Hubungan antara cabang seperti keharmonian, perlanggaran dan perselisihan tidak dibincangkan di sini."
            ]
          },
          {
            "p": "Hubungan antara cabang terdapat dalam [carta dua belas cabang](/guide/branches), dan maknanya sebagai haiwan zodiak terdapat dalam [kedudukan zodiak dalam saju](/guide/zodiac). Cabang lain: [丑 (Lembu)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [卯 (Arnab)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [未 (Biri-biri)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-chuk": {
    "eyebrow": "Cabang bumi",
    "title": "丑 — cabang Lembu",
    "summary": "Batang yang disimpan oleh cabang bumi 丑 (batang tersembunyi), kekuatan lima elemen apabila ia menjadi cabang bulan, dan Sepuluh Dewa yang dibaca untuk setiap batang hari — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "丑 ialah cabang bumi yang kedua daripada dua belas cabang bumi",
        "blocks": [
          {
            "p": "丑 ialah cabang bumi yang kedua daripada dua belas cabang bumi dan tergolong dalam Lembu. Apabila cabang bulan kelahiran ialah 丑, musimnya ialah musim sejuk dan elemen yang menguasai musim itu ialah Air. Ia ialah bulan peralihan (辰未戌丑), jadi Tanah juga dikira berada dalam keadaan Wang."
          },
          {
            "p": "Apabila cabang hari kelahiran ialah 丑, watak ini ialah kedudukan pasangan. Di bawah ini anda dapat melihat batang yang disimpan oleh cabang ini dan apakah kedudukannya terhadap batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan oleh cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Cabang ialah satu watak yang kelihatan tetapi menyimpan batang di dalamnya. Bahagian ialah cara tiga puluh hari cabang itu dibahagikan antara batang, dan batang utama ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi 丑",
              "head": [
                "Batang",
                "Elemen dan kekutuban",
                "Kedudukan",
                "Bahagian"
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
        "title": "Kekuatan lima elemen apabila cabang bulan ialah 丑",
        "blocks": [
          {
            "p": "Apabila cabang bulan kelahiran ialah 丑, setiap elemen mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengganda yang dikenakan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan elemen bagi cabang bulan 丑 (musim sejuk (bulan peralihan))",
              "head": [
                "Elemen",
                "Keadaan",
                "Pengganda"
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
        "title": "Sepuluh Dewa mengikut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 丑 yang sama menjadi Sepuluh Dewa yang berbeza bergantung pada batang hari. Apabila 丑 ialah cabang hari, jadual ini ialah bacaan kedudukan pasangan."
          },
          {
            "table": {
              "caption": "Apakah batang tersembunyi 丑 bagi setiap batang hari",
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
                  "Kewibawaan (正官)",
                  "Harta Tetap (正財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Sokongan Luar Biasa (偏印)",
                  "Pencabar (偏官)",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Api Yang (丙)",
                  "Kewibawaan (正官)",
                  "Harta Tetap (正財)",
                  "Pengocak (傷官)"
                ],
                [
                  "Api Yin (丁)",
                  "Pencabar (偏官)",
                  "Rezeki Mendadak (偏財)",
                  "Ekspresi (食神)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Harta Tetap (正財)",
                  "Pengocak (傷官)",
                  "Pesaing (劫財)"
                ],
                [
                  "Tanah Yin (己)",
                  "Rezeki Mendadak (偏財)",
                  "Ekspresi (食神)",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Logam Yang (庚)",
                  "Pengocak (傷官)",
                  "Pesaing (劫財)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Logam Yin (辛)",
                  "Ekspresi (食神)",
                  "Rakan Sebahu (比肩)",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Air Yang (壬)",
                  "Pesaing (劫財)",
                  "Pengasuhan (正印)",
                  "Kewibawaan (正官)"
                ],
                [
                  "Air Yin (癸)",
                  "Rakan Sebahu (比肩)",
                  "Sokongan Luar Biasa (偏印)",
                  "Pencabar (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama dibaca secara berbeza bergantung pada batang hari dan cabang bulan.",
              "Hubungan antara cabang seperti keharmonian, perlanggaran dan perselisihan tidak dibincangkan di sini."
            ]
          },
          {
            "p": "Hubungan antara cabang terdapat dalam [carta dua belas cabang](/guide/branches), dan maknanya sebagai haiwan zodiak terdapat dalam [kedudukan zodiak dalam saju](/guide/zodiac). Cabang lain: [子 (Tikus)](/guide/branch-ja) · [寅 (Harimau)](/guide/branch-in) · [卯 (Arnab)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [未 (Biri-biri)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-in": {
    "eyebrow": "Cabang bumi",
    "title": "寅 — cabang Harimau",
    "summary": "Batang yang disimpan oleh cabang bumi 寅 (batang tersembunyi), kekuatan lima elemen apabila ia menjadi cabang bulan, dan Sepuluh Dewa yang dibaca untuk setiap batang hari — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "寅 ialah cabang bumi yang ketiga daripada dua belas cabang bumi",
        "blocks": [
          {
            "p": "寅 ialah cabang bumi yang ketiga daripada dua belas cabang bumi dan tergolong dalam Harimau. Apabila cabang bulan kelahiran ialah 寅, musimnya ialah musim bunga dan elemen yang menguasai musim itu ialah Kayu."
          },
          {
            "p": "Apabila cabang hari kelahiran ialah 寅, watak ini ialah kedudukan pasangan. Di bawah ini anda dapat melihat batang yang disimpan oleh cabang ini dan apakah kedudukannya terhadap batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan oleh cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Cabang ialah satu watak yang kelihatan tetapi menyimpan batang di dalamnya. Bahagian ialah cara tiga puluh hari cabang itu dibahagikan antara batang, dan batang utama ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi 寅",
              "head": [
                "Batang",
                "Elemen dan kekutuban",
                "Kedudukan",
                "Bahagian"
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
        "title": "Kekuatan lima elemen apabila cabang bulan ialah 寅",
        "blocks": [
          {
            "p": "Apabila cabang bulan kelahiran ialah 寅, setiap elemen mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengganda yang dikenakan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan elemen bagi cabang bulan 寅 (musim bunga)",
              "head": [
                "Elemen",
                "Keadaan",
                "Pengganda"
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
        "title": "Sepuluh Dewa mengikut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 寅 yang sama menjadi Sepuluh Dewa yang berbeza bergantung pada batang hari. Apabila 寅 ialah cabang hari, jadual ini ialah bacaan kedudukan pasangan."
          },
          {
            "table": {
              "caption": "Apakah batang tersembunyi 寅 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Tanah Yang (戊) — sisa (餘氣)",
                "Api Yang (丙) — tengah (中氣)",
                "Kayu Yang (甲) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Rezeki Mendadak (偏財)",
                  "Ekspresi (食神)",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Harta Tetap (正財)",
                  "Pengocak (傷官)",
                  "Pesaing (劫財)"
                ],
                [
                  "Api Yang (丙)",
                  "Ekspresi (食神)",
                  "Rakan Sebahu (比肩)",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Api Yin (丁)",
                  "Pengocak (傷官)",
                  "Pesaing (劫財)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Rakan Sebahu (比肩)",
                  "Sokongan Luar Biasa (偏印)",
                  "Pencabar (偏官)"
                ],
                [
                  "Tanah Yin (己)",
                  "Pesaing (劫財)",
                  "Pengasuhan (正印)",
                  "Kewibawaan (正官)"
                ],
                [
                  "Logam Yang (庚)",
                  "Sokongan Luar Biasa (偏印)",
                  "Pencabar (偏官)",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Logam Yin (辛)",
                  "Pengasuhan (正印)",
                  "Kewibawaan (正官)",
                  "Harta Tetap (正財)"
                ],
                [
                  "Air Yang (壬)",
                  "Pencabar (偏官)",
                  "Rezeki Mendadak (偏財)",
                  "Ekspresi (食神)"
                ],
                [
                  "Air Yin (癸)",
                  "Kewibawaan (正官)",
                  "Harta Tetap (正財)",
                  "Pengocak (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama dibaca secara berbeza bergantung pada batang hari dan cabang bulan.",
              "Hubungan antara cabang seperti keharmonian, perlanggaran dan perselisihan tidak dibincangkan di sini."
            ]
          },
          {
            "p": "Hubungan antara cabang terdapat dalam [carta dua belas cabang](/guide/branches), dan maknanya sebagai haiwan zodiak terdapat dalam [kedudukan zodiak dalam saju](/guide/zodiac). Cabang lain: [子 (Tikus)](/guide/branch-ja) · [丑 (Lembu)](/guide/branch-chuk) · [卯 (Arnab)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [未 (Biri-biri)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-myo": {
    "eyebrow": "Cabang bumi",
    "title": "卯 — cabang Arnab",
    "summary": "Batang yang disimpan oleh cabang bumi 卯 (batang tersembunyi), kekuatan lima elemen apabila ia menjadi cabang bulan, dan Sepuluh Dewa yang dibaca untuk setiap batang hari — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "卯 ialah cabang bumi yang keempat daripada dua belas cabang bumi",
        "blocks": [
          {
            "p": "卯 ialah cabang bumi yang keempat daripada dua belas cabang bumi dan tergolong dalam Arnab. Apabila cabang bulan kelahiran ialah 卯, musimnya ialah musim bunga dan elemen yang menguasai musim itu ialah Kayu."
          },
          {
            "p": "Apabila cabang hari kelahiran ialah 卯, watak ini ialah kedudukan pasangan. Di bawah ini anda dapat melihat batang yang disimpan oleh cabang ini dan apakah kedudukannya terhadap batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan oleh cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Cabang ialah satu watak yang kelihatan tetapi menyimpan batang di dalamnya. Bahagian ialah cara tiga puluh hari cabang itu dibahagikan antara batang, dan batang utama ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi 卯",
              "head": [
                "Batang",
                "Elemen dan kekutuban",
                "Kedudukan",
                "Bahagian"
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
        "title": "Kekuatan lima elemen apabila cabang bulan ialah 卯",
        "blocks": [
          {
            "p": "Apabila cabang bulan kelahiran ialah 卯, setiap elemen mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengganda yang dikenakan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan elemen bagi cabang bulan 卯 (musim bunga)",
              "head": [
                "Elemen",
                "Keadaan",
                "Pengganda"
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
        "title": "Sepuluh Dewa mengikut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 卯 yang sama menjadi Sepuluh Dewa yang berbeza bergantung pada batang hari. Apabila 卯 ialah cabang hari, jadual ini ialah bacaan kedudukan pasangan."
          },
          {
            "table": {
              "caption": "Apakah batang tersembunyi 卯 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Kayu Yang (甲) — sisa (餘氣)",
                "Kayu Yin (乙) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Rakan Sebahu (比肩)",
                  "Pesaing (劫財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Pesaing (劫財)",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Api Yang (丙)",
                  "Sokongan Luar Biasa (偏印)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Api Yin (丁)",
                  "Pengasuhan (正印)",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Pencabar (偏官)",
                  "Kewibawaan (正官)"
                ],
                [
                  "Tanah Yin (己)",
                  "Kewibawaan (正官)",
                  "Pencabar (偏官)"
                ],
                [
                  "Logam Yang (庚)",
                  "Rezeki Mendadak (偏財)",
                  "Harta Tetap (正財)"
                ],
                [
                  "Logam Yin (辛)",
                  "Harta Tetap (正財)",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Air Yang (壬)",
                  "Ekspresi (食神)",
                  "Pengocak (傷官)"
                ],
                [
                  "Air Yin (癸)",
                  "Pengocak (傷官)",
                  "Ekspresi (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama dibaca secara berbeza bergantung pada batang hari dan cabang bulan.",
              "Hubungan antara cabang seperti keharmonian, perlanggaran dan perselisihan tidak dibincangkan di sini."
            ]
          },
          {
            "p": "Hubungan antara cabang terdapat dalam [carta dua belas cabang](/guide/branches), dan maknanya sebagai haiwan zodiak terdapat dalam [kedudukan zodiak dalam saju](/guide/zodiac). Cabang lain: [子 (Tikus)](/guide/branch-ja) · [丑 (Lembu)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [未 (Biri-biri)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-jin": {
    "eyebrow": "Cabang bumi",
    "title": "辰 — cabang Naga",
    "summary": "Batang yang disimpan oleh cabang bumi 辰 (batang tersembunyi), kekuatan lima elemen apabila ia menjadi cabang bulan, dan Sepuluh Dewa yang dibaca untuk setiap batang hari — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "辰 ialah cabang bumi yang kelima daripada dua belas cabang bumi",
        "blocks": [
          {
            "p": "辰 ialah cabang bumi yang kelima daripada dua belas cabang bumi dan tergolong dalam Naga. Apabila cabang bulan kelahiran ialah 辰, musimnya ialah musim bunga dan elemen yang menguasai musim itu ialah Kayu. Ia ialah bulan peralihan (辰未戌丑), jadi Tanah juga dikira berada dalam keadaan Wang."
          },
          {
            "p": "Apabila cabang hari kelahiran ialah 辰, watak ini ialah kedudukan pasangan. Di bawah ini anda dapat melihat batang yang disimpan oleh cabang ini dan apakah kedudukannya terhadap batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan oleh cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Cabang ialah satu watak yang kelihatan tetapi menyimpan batang di dalamnya. Bahagian ialah cara tiga puluh hari cabang itu dibahagikan antara batang, dan batang utama ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi 辰",
              "head": [
                "Batang",
                "Elemen dan kekutuban",
                "Kedudukan",
                "Bahagian"
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
        "title": "Kekuatan lima elemen apabila cabang bulan ialah 辰",
        "blocks": [
          {
            "p": "Apabila cabang bulan kelahiran ialah 辰, setiap elemen mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengganda yang dikenakan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan elemen bagi cabang bulan 辰 (musim bunga (bulan peralihan))",
              "head": [
                "Elemen",
                "Keadaan",
                "Pengganda"
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
        "title": "Sepuluh Dewa mengikut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 辰 yang sama menjadi Sepuluh Dewa yang berbeza bergantung pada batang hari. Apabila 辰 ialah cabang hari, jadual ini ialah bacaan kedudukan pasangan."
          },
          {
            "table": {
              "caption": "Apakah batang tersembunyi 辰 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Kayu Yin (乙) — sisa (餘氣)",
                "Air Yin (癸) — tengah (中氣)",
                "Tanah Yang (戊) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Pesaing (劫財)",
                  "Pengasuhan (正印)",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Rakan Sebahu (比肩)",
                  "Sokongan Luar Biasa (偏印)",
                  "Harta Tetap (正財)"
                ],
                [
                  "Api Yang (丙)",
                  "Pengasuhan (正印)",
                  "Kewibawaan (正官)",
                  "Ekspresi (食神)"
                ],
                [
                  "Api Yin (丁)",
                  "Sokongan Luar Biasa (偏印)",
                  "Pencabar (偏官)",
                  "Pengocak (傷官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Kewibawaan (正官)",
                  "Harta Tetap (正財)",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Tanah Yin (己)",
                  "Pencabar (偏官)",
                  "Rezeki Mendadak (偏財)",
                  "Pesaing (劫財)"
                ],
                [
                  "Logam Yang (庚)",
                  "Harta Tetap (正財)",
                  "Pengocak (傷官)",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Logam Yin (辛)",
                  "Rezeki Mendadak (偏財)",
                  "Ekspresi (食神)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Air Yang (壬)",
                  "Pengocak (傷官)",
                  "Pesaing (劫財)",
                  "Pencabar (偏官)"
                ],
                [
                  "Air Yin (癸)",
                  "Ekspresi (食神)",
                  "Rakan Sebahu (比肩)",
                  "Kewibawaan (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama dibaca secara berbeza bergantung pada batang hari dan cabang bulan.",
              "Hubungan antara cabang seperti keharmonian, perlanggaran dan perselisihan tidak dibincangkan di sini."
            ]
          },
          {
            "p": "Hubungan antara cabang terdapat dalam [carta dua belas cabang](/guide/branches), dan maknanya sebagai haiwan zodiak terdapat dalam [kedudukan zodiak dalam saju](/guide/zodiac). Cabang lain: [子 (Tikus)](/guide/branch-ja) · [丑 (Lembu)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [卯 (Arnab)](/guide/branch-myo) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [未 (Biri-biri)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sa": {
    "eyebrow": "Cabang bumi",
    "title": "巳 — cabang Ular",
    "summary": "Batang yang disimpan oleh cabang bumi 巳 (batang tersembunyi), kekuatan lima elemen apabila ia menjadi cabang bulan, dan Sepuluh Dewa yang dibaca untuk setiap batang hari — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "巳 ialah cabang bumi yang keenam daripada dua belas cabang bumi",
        "blocks": [
          {
            "p": "巳 ialah cabang bumi yang keenam daripada dua belas cabang bumi dan tergolong dalam Ular. Apabila cabang bulan kelahiran ialah 巳, musimnya ialah musim panas dan elemen yang menguasai musim itu ialah Api."
          },
          {
            "p": "Apabila cabang hari kelahiran ialah 巳, watak ini ialah kedudukan pasangan. Di bawah ini anda dapat melihat batang yang disimpan oleh cabang ini dan apakah kedudukannya terhadap batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan oleh cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Cabang ialah satu watak yang kelihatan tetapi menyimpan batang di dalamnya. Bahagian ialah cara tiga puluh hari cabang itu dibahagikan antara batang, dan batang utama ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi 巳",
              "head": [
                "Batang",
                "Elemen dan kekutuban",
                "Kedudukan",
                "Bahagian"
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
        "title": "Kekuatan lima elemen apabila cabang bulan ialah 巳",
        "blocks": [
          {
            "p": "Apabila cabang bulan kelahiran ialah 巳, setiap elemen mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengganda yang dikenakan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan elemen bagi cabang bulan 巳 (musim panas)",
              "head": [
                "Elemen",
                "Keadaan",
                "Pengganda"
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
        "title": "Sepuluh Dewa mengikut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 巳 yang sama menjadi Sepuluh Dewa yang berbeza bergantung pada batang hari. Apabila 巳 ialah cabang hari, jadual ini ialah bacaan kedudukan pasangan."
          },
          {
            "table": {
              "caption": "Apakah batang tersembunyi 巳 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Tanah Yang (戊) — sisa (餘氣)",
                "Logam Yang (庚) — tengah (中氣)",
                "Api Yang (丙) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Rezeki Mendadak (偏財)",
                  "Pencabar (偏官)",
                  "Ekspresi (食神)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Harta Tetap (正財)",
                  "Kewibawaan (正官)",
                  "Pengocak (傷官)"
                ],
                [
                  "Api Yang (丙)",
                  "Ekspresi (食神)",
                  "Rezeki Mendadak (偏財)",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Api Yin (丁)",
                  "Pengocak (傷官)",
                  "Harta Tetap (正財)",
                  "Pesaing (劫財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Rakan Sebahu (比肩)",
                  "Ekspresi (食神)",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Tanah Yin (己)",
                  "Pesaing (劫財)",
                  "Pengocak (傷官)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Logam Yang (庚)",
                  "Sokongan Luar Biasa (偏印)",
                  "Rakan Sebahu (比肩)",
                  "Pencabar (偏官)"
                ],
                [
                  "Logam Yin (辛)",
                  "Pengasuhan (正印)",
                  "Pesaing (劫財)",
                  "Kewibawaan (正官)"
                ],
                [
                  "Air Yang (壬)",
                  "Pencabar (偏官)",
                  "Sokongan Luar Biasa (偏印)",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Air Yin (癸)",
                  "Kewibawaan (正官)",
                  "Pengasuhan (正印)",
                  "Harta Tetap (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama dibaca secara berbeza bergantung pada batang hari dan cabang bulan.",
              "Hubungan antara cabang seperti keharmonian, perlanggaran dan perselisihan tidak dibincangkan di sini."
            ]
          },
          {
            "p": "Hubungan antara cabang terdapat dalam [carta dua belas cabang](/guide/branches), dan maknanya sebagai haiwan zodiak terdapat dalam [kedudukan zodiak dalam saju](/guide/zodiac). Cabang lain: [子 (Tikus)](/guide/branch-ja) · [丑 (Lembu)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [卯 (Arnab)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [午 (Kuda)](/guide/branch-o) · [未 (Biri-biri)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-o": {
    "eyebrow": "Cabang bumi",
    "title": "午 — cabang Kuda",
    "summary": "Batang yang disimpan oleh cabang bumi 午 (batang tersembunyi), kekuatan lima elemen apabila ia menjadi cabang bulan, dan Sepuluh Dewa yang dibaca untuk setiap batang hari — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "午 ialah cabang bumi yang ketujuh daripada dua belas cabang bumi",
        "blocks": [
          {
            "p": "午 ialah cabang bumi yang ketujuh daripada dua belas cabang bumi dan tergolong dalam Kuda. Apabila cabang bulan kelahiran ialah 午, musimnya ialah musim panas dan elemen yang menguasai musim itu ialah Api."
          },
          {
            "p": "Apabila cabang hari kelahiran ialah 午, watak ini ialah kedudukan pasangan. Di bawah ini anda dapat melihat batang yang disimpan oleh cabang ini dan apakah kedudukannya terhadap batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan oleh cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Cabang ialah satu watak yang kelihatan tetapi menyimpan batang di dalamnya. Bahagian ialah cara tiga puluh hari cabang itu dibahagikan antara batang, dan batang utama ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi 午",
              "head": [
                "Batang",
                "Elemen dan kekutuban",
                "Kedudukan",
                "Bahagian"
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
        "title": "Kekuatan lima elemen apabila cabang bulan ialah 午",
        "blocks": [
          {
            "p": "Apabila cabang bulan kelahiran ialah 午, setiap elemen mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengganda yang dikenakan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan elemen bagi cabang bulan 午 (musim panas)",
              "head": [
                "Elemen",
                "Keadaan",
                "Pengganda"
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
        "title": "Sepuluh Dewa mengikut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 午 yang sama menjadi Sepuluh Dewa yang berbeza bergantung pada batang hari. Apabila 午 ialah cabang hari, jadual ini ialah bacaan kedudukan pasangan."
          },
          {
            "table": {
              "caption": "Apakah batang tersembunyi 午 bagi setiap batang hari",
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
                  "Harta Tetap (正財)",
                  "Pengocak (傷官)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Pengocak (傷官)",
                  "Rezeki Mendadak (偏財)",
                  "Ekspresi (食神)"
                ],
                [
                  "Api Yang (丙)",
                  "Rakan Sebahu (比肩)",
                  "Pengocak (傷官)",
                  "Pesaing (劫財)"
                ],
                [
                  "Api Yin (丁)",
                  "Pesaing (劫財)",
                  "Ekspresi (食神)",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Sokongan Luar Biasa (偏印)",
                  "Pesaing (劫財)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Tanah Yin (己)",
                  "Pengasuhan (正印)",
                  "Rakan Sebahu (比肩)",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Logam Yang (庚)",
                  "Pencabar (偏官)",
                  "Pengasuhan (正印)",
                  "Kewibawaan (正官)"
                ],
                [
                  "Logam Yin (辛)",
                  "Kewibawaan (正官)",
                  "Sokongan Luar Biasa (偏印)",
                  "Pencabar (偏官)"
                ],
                [
                  "Air Yang (壬)",
                  "Rezeki Mendadak (偏財)",
                  "Kewibawaan (正官)",
                  "Harta Tetap (正財)"
                ],
                [
                  "Air Yin (癸)",
                  "Harta Tetap (正財)",
                  "Pencabar (偏官)",
                  "Rezeki Mendadak (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama dibaca secara berbeza bergantung pada batang hari dan cabang bulan.",
              "Hubungan antara cabang seperti keharmonian, perlanggaran dan perselisihan tidak dibincangkan di sini."
            ]
          },
          {
            "p": "Hubungan antara cabang terdapat dalam [carta dua belas cabang](/guide/branches), dan maknanya sebagai haiwan zodiak terdapat dalam [kedudukan zodiak dalam saju](/guide/zodiac). Cabang lain: [子 (Tikus)](/guide/branch-ja) · [丑 (Lembu)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [卯 (Arnab)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [未 (Biri-biri)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-mi": {
    "eyebrow": "Cabang bumi",
    "title": "未 — cabang Biri-biri",
    "summary": "Batang yang disimpan oleh cabang bumi 未 (batang tersembunyi), kekuatan lima elemen apabila ia menjadi cabang bulan, dan Sepuluh Dewa yang dibaca untuk setiap batang hari — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "未 ialah cabang bumi yang kelapan daripada dua belas cabang bumi",
        "blocks": [
          {
            "p": "未 ialah cabang bumi yang kelapan daripada dua belas cabang bumi dan tergolong dalam Biri-biri. Apabila cabang bulan kelahiran ialah 未, musimnya ialah musim panas dan elemen yang menguasai musim itu ialah Api. Ia ialah bulan peralihan (辰未戌丑), jadi Tanah juga dikira berada dalam keadaan Wang."
          },
          {
            "p": "Apabila cabang hari kelahiran ialah 未, watak ini ialah kedudukan pasangan. Di bawah ini anda dapat melihat batang yang disimpan oleh cabang ini dan apakah kedudukannya terhadap batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan oleh cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Cabang ialah satu watak yang kelihatan tetapi menyimpan batang di dalamnya. Bahagian ialah cara tiga puluh hari cabang itu dibahagikan antara batang, dan batang utama ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi 未",
              "head": [
                "Batang",
                "Elemen dan kekutuban",
                "Kedudukan",
                "Bahagian"
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
        "title": "Kekuatan lima elemen apabila cabang bulan ialah 未",
        "blocks": [
          {
            "p": "Apabila cabang bulan kelahiran ialah 未, setiap elemen mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengganda yang dikenakan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan elemen bagi cabang bulan 未 (musim panas (bulan peralihan))",
              "head": [
                "Elemen",
                "Keadaan",
                "Pengganda"
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
        "title": "Sepuluh Dewa mengikut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 未 yang sama menjadi Sepuluh Dewa yang berbeza bergantung pada batang hari. Apabila 未 ialah cabang hari, jadual ini ialah bacaan kedudukan pasangan."
          },
          {
            "table": {
              "caption": "Apakah batang tersembunyi 未 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Api Yin (丁) — sisa (餘氣)",
                "Kayu Yin (乙) — tengah (中氣)",
                "Tanah Yin (己) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Pengocak (傷官)",
                  "Pesaing (劫財)",
                  "Harta Tetap (正財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Ekspresi (食神)",
                  "Rakan Sebahu (比肩)",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Api Yang (丙)",
                  "Pesaing (劫財)",
                  "Pengasuhan (正印)",
                  "Pengocak (傷官)"
                ],
                [
                  "Api Yin (丁)",
                  "Rakan Sebahu (比肩)",
                  "Sokongan Luar Biasa (偏印)",
                  "Ekspresi (食神)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Pengasuhan (正印)",
                  "Kewibawaan (正官)",
                  "Pesaing (劫財)"
                ],
                [
                  "Tanah Yin (己)",
                  "Sokongan Luar Biasa (偏印)",
                  "Pencabar (偏官)",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Logam Yang (庚)",
                  "Kewibawaan (正官)",
                  "Harta Tetap (正財)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Logam Yin (辛)",
                  "Pencabar (偏官)",
                  "Rezeki Mendadak (偏財)",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Air Yang (壬)",
                  "Harta Tetap (正財)",
                  "Pengocak (傷官)",
                  "Kewibawaan (正官)"
                ],
                [
                  "Air Yin (癸)",
                  "Rezeki Mendadak (偏財)",
                  "Ekspresi (食神)",
                  "Pencabar (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama dibaca secara berbeza bergantung pada batang hari dan cabang bulan.",
              "Hubungan antara cabang seperti keharmonian, perlanggaran dan perselisihan tidak dibincangkan di sini."
            ]
          },
          {
            "p": "Hubungan antara cabang terdapat dalam [carta dua belas cabang](/guide/branches), dan maknanya sebagai haiwan zodiak terdapat dalam [kedudukan zodiak dalam saju](/guide/zodiac). Cabang lain: [子 (Tikus)](/guide/branch-ja) · [丑 (Lembu)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [卯 (Arnab)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sin": {
    "eyebrow": "Cabang bumi",
    "title": "申 — cabang Monyet",
    "summary": "Batang yang disimpan oleh cabang bumi 申 (batang tersembunyi), kekuatan lima elemen apabila ia menjadi cabang bulan, dan Sepuluh Dewa yang dibaca untuk setiap batang hari — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "申 ialah cabang bumi yang kesembilan daripada dua belas cabang bumi",
        "blocks": [
          {
            "p": "申 ialah cabang bumi yang kesembilan daripada dua belas cabang bumi dan tergolong dalam Monyet. Apabila cabang bulan kelahiran ialah 申, musimnya ialah musim luruh dan elemen yang menguasai musim itu ialah Logam."
          },
          {
            "p": "Apabila cabang hari kelahiran ialah 申, watak ini ialah kedudukan pasangan. Di bawah ini anda dapat melihat batang yang disimpan oleh cabang ini dan apakah kedudukannya terhadap batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan oleh cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Cabang ialah satu watak yang kelihatan tetapi menyimpan batang di dalamnya. Bahagian ialah cara tiga puluh hari cabang itu dibahagikan antara batang, dan batang utama ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi 申",
              "head": [
                "Batang",
                "Elemen dan kekutuban",
                "Kedudukan",
                "Bahagian"
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
        "title": "Kekuatan lima elemen apabila cabang bulan ialah 申",
        "blocks": [
          {
            "p": "Apabila cabang bulan kelahiran ialah 申, setiap elemen mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengganda yang dikenakan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan elemen bagi cabang bulan 申 (musim luruh)",
              "head": [
                "Elemen",
                "Keadaan",
                "Pengganda"
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
        "title": "Sepuluh Dewa mengikut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 申 yang sama menjadi Sepuluh Dewa yang berbeza bergantung pada batang hari. Apabila 申 ialah cabang hari, jadual ini ialah bacaan kedudukan pasangan."
          },
          {
            "table": {
              "caption": "Apakah batang tersembunyi 申 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Tanah Yang (戊) — sisa (餘氣)",
                "Air Yang (壬) — tengah (中氣)",
                "Logam Yang (庚) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Rezeki Mendadak (偏財)",
                  "Sokongan Luar Biasa (偏印)",
                  "Pencabar (偏官)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Harta Tetap (正財)",
                  "Pengasuhan (正印)",
                  "Kewibawaan (正官)"
                ],
                [
                  "Api Yang (丙)",
                  "Ekspresi (食神)",
                  "Pencabar (偏官)",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Api Yin (丁)",
                  "Pengocak (傷官)",
                  "Kewibawaan (正官)",
                  "Harta Tetap (正財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Rakan Sebahu (比肩)",
                  "Rezeki Mendadak (偏財)",
                  "Ekspresi (食神)"
                ],
                [
                  "Tanah Yin (己)",
                  "Pesaing (劫財)",
                  "Harta Tetap (正財)",
                  "Pengocak (傷官)"
                ],
                [
                  "Logam Yang (庚)",
                  "Sokongan Luar Biasa (偏印)",
                  "Ekspresi (食神)",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Logam Yin (辛)",
                  "Pengasuhan (正印)",
                  "Pengocak (傷官)",
                  "Pesaing (劫財)"
                ],
                [
                  "Air Yang (壬)",
                  "Pencabar (偏官)",
                  "Rakan Sebahu (比肩)",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Air Yin (癸)",
                  "Kewibawaan (正官)",
                  "Pesaing (劫財)",
                  "Pengasuhan (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama dibaca secara berbeza bergantung pada batang hari dan cabang bulan.",
              "Hubungan antara cabang seperti keharmonian, perlanggaran dan perselisihan tidak dibincangkan di sini."
            ]
          },
          {
            "p": "Hubungan antara cabang terdapat dalam [carta dua belas cabang](/guide/branches), dan maknanya sebagai haiwan zodiak terdapat dalam [kedudukan zodiak dalam saju](/guide/zodiac). Cabang lain: [子 (Tikus)](/guide/branch-ja) · [丑 (Lembu)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [卯 (Arnab)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [未 (Biri-biri)](/guide/branch-mi) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-yu": {
    "eyebrow": "Cabang bumi",
    "title": "酉 — cabang Ayam",
    "summary": "Batang yang disimpan oleh cabang bumi 酉 (batang tersembunyi), kekuatan lima elemen apabila ia menjadi cabang bulan, dan Sepuluh Dewa yang dibaca untuk setiap batang hari — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "酉 ialah cabang bumi yang kesepuluh daripada dua belas cabang bumi",
        "blocks": [
          {
            "p": "酉 ialah cabang bumi yang kesepuluh daripada dua belas cabang bumi dan tergolong dalam Ayam. Apabila cabang bulan kelahiran ialah 酉, musimnya ialah musim luruh dan elemen yang menguasai musim itu ialah Logam."
          },
          {
            "p": "Apabila cabang hari kelahiran ialah 酉, watak ini ialah kedudukan pasangan. Di bawah ini anda dapat melihat batang yang disimpan oleh cabang ini dan apakah kedudukannya terhadap batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan oleh cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Cabang ialah satu watak yang kelihatan tetapi menyimpan batang di dalamnya. Bahagian ialah cara tiga puluh hari cabang itu dibahagikan antara batang, dan batang utama ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi 酉",
              "head": [
                "Batang",
                "Elemen dan kekutuban",
                "Kedudukan",
                "Bahagian"
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
        "title": "Kekuatan lima elemen apabila cabang bulan ialah 酉",
        "blocks": [
          {
            "p": "Apabila cabang bulan kelahiran ialah 酉, setiap elemen mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengganda yang dikenakan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan elemen bagi cabang bulan 酉 (musim luruh)",
              "head": [
                "Elemen",
                "Keadaan",
                "Pengganda"
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
        "title": "Sepuluh Dewa mengikut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 酉 yang sama menjadi Sepuluh Dewa yang berbeza bergantung pada batang hari. Apabila 酉 ialah cabang hari, jadual ini ialah bacaan kedudukan pasangan."
          },
          {
            "table": {
              "caption": "Apakah batang tersembunyi 酉 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Logam Yang (庚) — sisa (餘氣)",
                "Logam Yin (辛) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Pencabar (偏官)",
                  "Kewibawaan (正官)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kewibawaan (正官)",
                  "Pencabar (偏官)"
                ],
                [
                  "Api Yang (丙)",
                  "Rezeki Mendadak (偏財)",
                  "Harta Tetap (正財)"
                ],
                [
                  "Api Yin (丁)",
                  "Harta Tetap (正財)",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Ekspresi (食神)",
                  "Pengocak (傷官)"
                ],
                [
                  "Tanah Yin (己)",
                  "Pengocak (傷官)",
                  "Ekspresi (食神)"
                ],
                [
                  "Logam Yang (庚)",
                  "Rakan Sebahu (比肩)",
                  "Pesaing (劫財)"
                ],
                [
                  "Logam Yin (辛)",
                  "Pesaing (劫財)",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Air Yang (壬)",
                  "Sokongan Luar Biasa (偏印)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Air Yin (癸)",
                  "Pengasuhan (正印)",
                  "Sokongan Luar Biasa (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama dibaca secara berbeza bergantung pada batang hari dan cabang bulan.",
              "Hubungan antara cabang seperti keharmonian, perlanggaran dan perselisihan tidak dibincangkan di sini."
            ]
          },
          {
            "p": "Hubungan antara cabang terdapat dalam [carta dua belas cabang](/guide/branches), dan maknanya sebagai haiwan zodiak terdapat dalam [kedudukan zodiak dalam saju](/guide/zodiac). Cabang lain: [子 (Tikus)](/guide/branch-ja) · [丑 (Lembu)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [卯 (Arnab)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [未 (Biri-biri)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [戌 (Anjing)](/guide/branch-sul) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sul": {
    "eyebrow": "Cabang bumi",
    "title": "戌 — cabang Anjing",
    "summary": "Batang yang disimpan oleh cabang bumi 戌 (batang tersembunyi), kekuatan lima elemen apabila ia menjadi cabang bulan, dan Sepuluh Dewa yang dibaca untuk setiap batang hari — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "戌 ialah cabang bumi yang kesebelas daripada dua belas cabang bumi",
        "blocks": [
          {
            "p": "戌 ialah cabang bumi yang kesebelas daripada dua belas cabang bumi dan tergolong dalam Anjing. Apabila cabang bulan kelahiran ialah 戌, musimnya ialah musim luruh dan elemen yang menguasai musim itu ialah Logam. Ia ialah bulan peralihan (辰未戌丑), jadi Tanah juga dikira berada dalam keadaan Wang."
          },
          {
            "p": "Apabila cabang hari kelahiran ialah 戌, watak ini ialah kedudukan pasangan. Di bawah ini anda dapat melihat batang yang disimpan oleh cabang ini dan apakah kedudukannya terhadap batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan oleh cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Cabang ialah satu watak yang kelihatan tetapi menyimpan batang di dalamnya. Bahagian ialah cara tiga puluh hari cabang itu dibahagikan antara batang, dan batang utama ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi 戌",
              "head": [
                "Batang",
                "Elemen dan kekutuban",
                "Kedudukan",
                "Bahagian"
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
        "title": "Kekuatan lima elemen apabila cabang bulan ialah 戌",
        "blocks": [
          {
            "p": "Apabila cabang bulan kelahiran ialah 戌, setiap elemen mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengganda yang dikenakan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan elemen bagi cabang bulan 戌 (musim luruh (bulan peralihan))",
              "head": [
                "Elemen",
                "Keadaan",
                "Pengganda"
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
        "title": "Sepuluh Dewa mengikut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 戌 yang sama menjadi Sepuluh Dewa yang berbeza bergantung pada batang hari. Apabila 戌 ialah cabang hari, jadual ini ialah bacaan kedudukan pasangan."
          },
          {
            "table": {
              "caption": "Apakah batang tersembunyi 戌 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Logam Yin (辛) — sisa (餘氣)",
                "Api Yin (丁) — tengah (中氣)",
                "Tanah Yang (戊) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kewibawaan (正官)",
                  "Pengocak (傷官)",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Pencabar (偏官)",
                  "Ekspresi (食神)",
                  "Harta Tetap (正財)"
                ],
                [
                  "Api Yang (丙)",
                  "Harta Tetap (正財)",
                  "Pesaing (劫財)",
                  "Ekspresi (食神)"
                ],
                [
                  "Api Yin (丁)",
                  "Rezeki Mendadak (偏財)",
                  "Rakan Sebahu (比肩)",
                  "Pengocak (傷官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Pengocak (傷官)",
                  "Pengasuhan (正印)",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Tanah Yin (己)",
                  "Ekspresi (食神)",
                  "Sokongan Luar Biasa (偏印)",
                  "Pesaing (劫財)"
                ],
                [
                  "Logam Yang (庚)",
                  "Pesaing (劫財)",
                  "Kewibawaan (正官)",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Logam Yin (辛)",
                  "Rakan Sebahu (比肩)",
                  "Pencabar (偏官)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Air Yang (壬)",
                  "Pengasuhan (正印)",
                  "Harta Tetap (正財)",
                  "Pencabar (偏官)"
                ],
                [
                  "Air Yin (癸)",
                  "Sokongan Luar Biasa (偏印)",
                  "Rezeki Mendadak (偏財)",
                  "Kewibawaan (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama dibaca secara berbeza bergantung pada batang hari dan cabang bulan.",
              "Hubungan antara cabang seperti keharmonian, perlanggaran dan perselisihan tidak dibincangkan di sini."
            ]
          },
          {
            "p": "Hubungan antara cabang terdapat dalam [carta dua belas cabang](/guide/branches), dan maknanya sebagai haiwan zodiak terdapat dalam [kedudukan zodiak dalam saju](/guide/zodiac). Cabang lain: [子 (Tikus)](/guide/branch-ja) · [丑 (Lembu)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [卯 (Arnab)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [未 (Biri-biri)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [亥 (Babi)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-hae": {
    "eyebrow": "Cabang bumi",
    "title": "亥 — cabang Babi",
    "summary": "Batang yang disimpan oleh cabang bumi 亥 (batang tersembunyi), kekuatan lima elemen apabila ia menjadi cabang bulan, dan Sepuluh Dewa yang dibaca untuk setiap batang hari — dipaparkan tepat seperti dalam peraturan pengiraan Saju-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "亥 ialah cabang bumi yang kedua belas daripada dua belas cabang bumi",
        "blocks": [
          {
            "p": "亥 ialah cabang bumi yang kedua belas daripada dua belas cabang bumi dan tergolong dalam Babi. Apabila cabang bulan kelahiran ialah 亥, musimnya ialah musim sejuk dan elemen yang menguasai musim itu ialah Air."
          },
          {
            "p": "Apabila cabang hari kelahiran ialah 亥, watak ini ialah kedudukan pasangan. Di bawah ini anda dapat melihat batang yang disimpan oleh cabang ini dan apakah kedudukannya terhadap batang hari."
          }
        ]
      },
      {
        "title": "Batang yang disimpan oleh cabang ini (batang tersembunyi)",
        "blocks": [
          {
            "p": "Cabang ialah satu watak yang kelihatan tetapi menyimpan batang di dalamnya. Bahagian ialah cara tiga puluh hari cabang itu dibahagikan antara batang, dan batang utama ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi 亥",
              "head": [
                "Batang",
                "Elemen dan kekutuban",
                "Kedudukan",
                "Bahagian"
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
        "title": "Kekuatan lima elemen apabila cabang bulan ialah 亥",
        "blocks": [
          {
            "p": "Apabila cabang bulan kelahiran ialah 亥, setiap elemen mendapat satu keadaan (Wang, Sang, Hyu, Su, Sa), dan keadaan itu menjadi pengganda yang dikenakan pada kekuatannya."
          },
          {
            "table": {
              "caption": "Keadaan elemen bagi cabang bulan 亥 (musim sejuk)",
              "head": [
                "Elemen",
                "Keadaan",
                "Pengganda"
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
        "title": "Sepuluh Dewa mengikut batang hari",
        "blocks": [
          {
            "p": "Batang tersembunyi 亥 yang sama menjadi Sepuluh Dewa yang berbeza bergantung pada batang hari. Apabila 亥 ialah cabang hari, jadual ini ialah bacaan kedudukan pasangan."
          },
          {
            "table": {
              "caption": "Apakah batang tersembunyi 亥 bagi setiap batang hari",
              "head": [
                "Batang hari",
                "Tanah Yang (戊) — sisa (餘氣)",
                "Kayu Yang (甲) — tengah (中氣)",
                "Air Yang (壬) — utama (本氣)"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Rezeki Mendadak (偏財)",
                  "Rakan Sebahu (比肩)",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Kayu Yin (乙)",
                  "Harta Tetap (正財)",
                  "Pesaing (劫財)",
                  "Pengasuhan (正印)"
                ],
                [
                  "Api Yang (丙)",
                  "Ekspresi (食神)",
                  "Sokongan Luar Biasa (偏印)",
                  "Pencabar (偏官)"
                ],
                [
                  "Api Yin (丁)",
                  "Pengocak (傷官)",
                  "Pengasuhan (正印)",
                  "Kewibawaan (正官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "Rakan Sebahu (比肩)",
                  "Pencabar (偏官)",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Tanah Yin (己)",
                  "Pesaing (劫財)",
                  "Kewibawaan (正官)",
                  "Harta Tetap (正財)"
                ],
                [
                  "Logam Yang (庚)",
                  "Sokongan Luar Biasa (偏印)",
                  "Rezeki Mendadak (偏財)",
                  "Ekspresi (食神)"
                ],
                [
                  "Logam Yin (辛)",
                  "Pengasuhan (正印)",
                  "Harta Tetap (正財)",
                  "Pengocak (傷官)"
                ],
                [
                  "Air Yang (壬)",
                  "Pencabar (偏官)",
                  "Ekspresi (食神)",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Air Yin (癸)",
                  "Kewibawaan (正官)",
                  "Pengocak (傷官)",
                  "Pesaing (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu cabang tidak menentukan seseorang. Cabang yang sama dibaca secara berbeza bergantung pada batang hari dan cabang bulan.",
              "Hubungan antara cabang seperti keharmonian, perlanggaran dan perselisihan tidak dibincangkan di sini."
            ]
          },
          {
            "p": "Hubungan antara cabang terdapat dalam [carta dua belas cabang](/guide/branches), dan maknanya sebagai haiwan zodiak terdapat dalam [kedudukan zodiak dalam saju](/guide/zodiac). Cabang lain: [子 (Tikus)](/guide/branch-ja) · [丑 (Lembu)](/guide/branch-chuk) · [寅 (Harimau)](/guide/branch-in) · [卯 (Arnab)](/guide/branch-myo) · [辰 (Naga)](/guide/branch-jin) · [巳 (Ular)](/guide/branch-sa) · [午 (Kuda)](/guide/branch-o) · [未 (Biri-biri)](/guide/branch-mi) · [申 (Monyet)](/guide/branch-sin) · [酉 (Ayam)](/guide/branch-yu) · [戌 (Anjing)](/guide/branch-sul)"
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-ja": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 甲子",
    "summary": "Cara Saju-Link membaca pilar hari 甲子 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "甲子 ialah pilar hari nombor 1 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 甲子, batang harinya ialah 甲 (Kayu, Yang) dan cabang harinya ialah 子 (Tikus). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 1."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 甲 \"Kayu Yang (甲)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Pokok tinggi yang tumbuh lurus. Sekali arahnya ditetapkan ia tidak goyah, dan ia lebih rela bertahan daripada tunduk.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 子 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 甲, batang yang disimpan oleh 子 adalah seperti berikut. Batang utama (癸) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 甲子",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 甲"
              ],
              "rows": [
                [
                  "Air Yang (壬)",
                  "sisa (餘氣)",
                  "{hidJaYeo}",
                  "Sokongan Luar Biasa (偏印)"
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
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 甲 sebagai batang hari, Harta Tetap ialah 己 dan Kewibawaan ialah 辛."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 己. 己 tidak disimpan di dalam 子."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 辛. 辛 tidak disimpan di dalam 子."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [癸亥](/guide/pillar-gye-hae) dan yang seterusnya ialah [乙丑](/guide/pillar-eul-chuk)."
          },
          {
            "p": "Ia terdiri daripada [Kayu Yang (甲)](/guide/stem-gap) dan [子 (Tikus)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-chuk": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 乙丑",
    "summary": "Cara Saju-Link membaca pilar hari 乙丑 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "乙丑 ialah pilar hari nombor 2 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 乙丑, batang harinya ialah 乙 (Kayu, Yin) dan cabang harinya ialah 丑 (Lembu). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 2."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 乙 \"Kayu Yin (乙)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Pokok menjalar — rumput yang lentur. Ia melentur mengikut keadaan untuk terus bergerak, dan ia tidak patah.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 丑 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 乙, batang yang disimpan oleh 丑 adalah seperti berikut. Batang utama (己) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 乙丑",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 乙"
              ],
              "rows": [
                [
                  "Air Yin (癸)",
                  "sisa (餘氣)",
                  "{hidChukYeo}",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Logam Yin (辛)",
                  "tengah (中氣)",
                  "{hidChukJung}",
                  "Pencabar (偏官)"
                ],
                [
                  "Tanah Yin (己)",
                  "utama (本氣)",
                  "{hidChukBon}",
                  "Rezeki Mendadak (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 乙 sebagai batang hari, Harta Tetap ialah 戊 dan Kewibawaan ialah 庚."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 戊. 戊 tidak disimpan di dalam 丑."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 庚. 庚 tidak disimpan di dalam 丑."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [甲子](/guide/pillar-gap-ja) dan yang seterusnya ialah [丙寅](/guide/pillar-byeong-in)."
          },
          {
            "p": "Ia terdiri daripada [Kayu Yin (乙)](/guide/stem-eul) dan [丑 (Lembu)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-in": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 丙寅",
    "summary": "Cara Saju-Link membaca pilar hari 丙寅 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "丙寅 ialah pilar hari nombor 3 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 丙寅, batang harinya ialah 丙 (Api, Yang) dan cabang harinya ialah 寅 (Harimau). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 3."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 丙 \"Api Yang (丙)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Matahari tengah hari. Perasaan terpampang jelas, ruang menjadi terang, dan melangkah ke hadapan datang secara semula jadi.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 寅 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 丙, batang yang disimpan oleh 寅 adalah seperti berikut. Batang utama (甲) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 丙寅",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 丙"
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
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Kayu Yang (甲)",
                  "utama (本氣)",
                  "{hidInBon}",
                  "Sokongan Luar Biasa (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 丙 sebagai batang hari, Harta Tetap ialah 辛 dan Kewibawaan ialah 癸."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 辛. 辛 tidak disimpan di dalam 寅."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 癸. 癸 tidak disimpan di dalam 寅."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [乙丑](/guide/pillar-eul-chuk) dan yang seterusnya ialah [丁卯](/guide/pillar-jeong-myo)."
          },
          {
            "p": "Ia terdiri daripada [Api Yang (丙)](/guide/stem-byeong) dan [寅 (Harimau)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-myo": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 丁卯",
    "summary": "Cara Saju-Link membaca pilar hari 丁卯 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "丁卯 ialah pilar hari nombor 4 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 丁卯, batang harinya ialah 丁 (Api, Yin) dan cabang harinya ialah 卯 (Arnab). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 4."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 丁 \"Api Yin (丁)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Cahaya lilin. Ia menyala perlahan dan lama, serta menghangatkan yang terdekat dahulu.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 卯 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 丁, batang yang disimpan oleh 卯 adalah seperti berikut. Batang utama (乙) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 丁卯",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 丁"
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
                  "Sokongan Luar Biasa (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 丁 sebagai batang hari, Harta Tetap ialah 庚 dan Kewibawaan ialah 壬."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 庚. 庚 tidak disimpan di dalam 卯."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 壬. 壬 tidak disimpan di dalam 卯."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [丙寅](/guide/pillar-byeong-in) dan yang seterusnya ialah [戊辰](/guide/pillar-mu-jin)."
          },
          {
            "p": "Ia terdiri daripada [Api Yin (丁)](/guide/stem-jeong) dan [卯 (Arnab)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-jin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 戊辰",
    "summary": "Cara Saju-Link membaca pilar hari 戊辰 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "戊辰 ialah pilar hari nombor 5 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 戊辰, batang harinya ialah 戊 (Tanah, Yang) dan cabang harinya ialah 辰 (Naga). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 5."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 戊 \"Tanah Yang (戊)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Tanah lapang dan gunung. Sukar digoyah dan mudah disandari, walaupun lambat mengubah keputusan yang sudah dibuat.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 辰 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 戊, batang yang disimpan oleh 辰 adalah seperti berikut. Batang utama (戊) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 戊辰",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 戊"
              ],
              "rows": [
                [
                  "Kayu Yin (乙)",
                  "sisa (餘氣)",
                  "{hidJinYeo}",
                  "Kewibawaan (正官)"
                ],
                [
                  "Air Yin (癸)",
                  "tengah (中氣)",
                  "{hidJinJung}",
                  "Harta Tetap (正財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "utama (本氣)",
                  "{hidJinBon}",
                  "Rakan Sebahu (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 戊 sebagai batang hari, Harta Tetap ialah 癸 dan Kewibawaan ialah 乙."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 癸. 癸 disimpan di dalam 辰 (tengah (中氣))."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 乙. 乙 disimpan di dalam 辰 (sisa (餘氣))."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [丁卯](/guide/pillar-jeong-myo) dan yang seterusnya ialah [己巳](/guide/pillar-gi-sa)."
          },
          {
            "p": "Ia terdiri daripada [Tanah Yang (戊)](/guide/stem-mu) dan [辰 (Naga)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-sa": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 己巳",
    "summary": "Cara Saju-Link membaca pilar hari 己巳 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "己巳 ialah pilar hari nombor 6 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 己巳, batang harinya ialah 己 (Tanah, Yin) dan cabang harinya ialah 巳 (Ular). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 6."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 己 \"Tanah Yin (己)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Tanah ladang. Ia menerima apa sahaja yang datang dan membesarkannya, memelihara dan bukan mempamerkan.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 巳 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 己, batang yang disimpan oleh 巳 adalah seperti berikut. Batang utama (丙) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 己巳",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 己"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidSaYeo}",
                  "Pesaing (劫財)"
                ],
                [
                  "Logam Yang (庚)",
                  "tengah (中氣)",
                  "{hidSaJung}",
                  "Pengocak (傷官)"
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
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 己 sebagai batang hari, Harta Tetap ialah 壬 dan Kewibawaan ialah 甲."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 壬. 壬 tidak disimpan di dalam 巳."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 甲. 甲 tidak disimpan di dalam 巳."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [戊辰](/guide/pillar-mu-jin) dan yang seterusnya ialah [庚午](/guide/pillar-gyeong-o)."
          },
          {
            "p": "Ia terdiri daripada [Tanah Yin (己)](/guide/stem-gi) dan [巳 (Ular)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-o": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 庚午",
    "summary": "Cara Saju-Link membaca pilar hari 庚午 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "庚午 ialah pilar hari nombor 7 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 庚午, batang harinya ialah 庚 (Logam, Yang) dan cabang harinya ialah 午 (Kuda). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 7."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 庚 \"Logam Yang (庚)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Besi yang belum ditempa. Tegas dan jelas, dengan sedikit sahaja kesabaran terhadap perkara yang tergantung.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 午 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 庚, batang yang disimpan oleh 午 adalah seperti berikut. Batang utama (丁) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 庚午",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 庚"
              ],
              "rows": [
                [
                  "Api Yang (丙)",
                  "sisa (餘氣)",
                  "{hidOYeo}",
                  "Pencabar (偏官)"
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
                  "Kewibawaan (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 庚 sebagai batang hari, Harta Tetap ialah 乙 dan Kewibawaan ialah 丁."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 乙. 乙 tidak disimpan di dalam 午."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 丁. 丁 disimpan di dalam 午 (utama (本氣))."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [己巳](/guide/pillar-gi-sa) dan yang seterusnya ialah [辛未](/guide/pillar-sin-mi)."
          },
          {
            "p": "Ia terdiri daripada [Logam Yang (庚)](/guide/stem-gyeong) dan [午 (Kuda)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-mi": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 辛未",
    "summary": "Cara Saju-Link membaca pilar hari 辛未 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "辛未 ialah pilar hari nombor 8 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 辛未, batang harinya ialah 辛 (Logam, Yin) dan cabang harinya ialah 未 (Biri-biri). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 8."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 辛 \"Logam Yin (辛)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Permata yang telah diasah. Cita rasa halus dan piawaian tinggi; kerja sambil lewa sukar dibiarkan.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 未 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 辛, batang yang disimpan oleh 未 adalah seperti berikut. Batang utama (己) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 辛未",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 辛"
              ],
              "rows": [
                [
                  "Api Yin (丁)",
                  "sisa (餘氣)",
                  "{hidMiYeo}",
                  "Pencabar (偏官)"
                ],
                [
                  "Kayu Yin (乙)",
                  "tengah (中氣)",
                  "{hidMiJung}",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Tanah Yin (己)",
                  "utama (本氣)",
                  "{hidMiBon}",
                  "Sokongan Luar Biasa (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 辛 sebagai batang hari, Harta Tetap ialah 甲 dan Kewibawaan ialah 丙."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 甲. 甲 tidak disimpan di dalam 未."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 丙. 丙 tidak disimpan di dalam 未."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [庚午](/guide/pillar-gyeong-o) dan yang seterusnya ialah [壬申](/guide/pillar-im-sin)."
          },
          {
            "p": "Ia terdiri daripada [Logam Yin (辛)](/guide/stem-sin) dan [未 (Biri-biri)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 壬申",
    "summary": "Cara Saju-Link membaca pilar hari 壬申 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "壬申 ialah pilar hari nombor 9 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 壬申, batang harinya ialah 壬 (Air, Yang) dan cabang harinya ialah 申 (Monyet). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 9."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 壬 \"Air Yang (壬)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Sungai dan laut. Luas pandangannya, dengan mata yang membaca ke mana sesuatu mengalir.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 申 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 壬, batang yang disimpan oleh 申 adalah seperti berikut. Batang utama (庚) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 壬申",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 壬"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidSinYeo}",
                  "Pencabar (偏官)"
                ],
                [
                  "Air Yang (壬)",
                  "tengah (中氣)",
                  "{hidSinJung}",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Logam Yang (庚)",
                  "utama (本氣)",
                  "{hidSinBon}",
                  "Sokongan Luar Biasa (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 壬 sebagai batang hari, Harta Tetap ialah 丁 dan Kewibawaan ialah 己."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 丁. 丁 tidak disimpan di dalam 申."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 己. 己 tidak disimpan di dalam 申."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [辛未](/guide/pillar-sin-mi) dan yang seterusnya ialah [癸酉](/guide/pillar-gye-yu)."
          },
          {
            "p": "Ia terdiri daripada [Air Yang (壬)](/guide/stem-im) dan [申 (Monyet)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-yu": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 癸酉",
    "summary": "Cara Saju-Link membaca pilar hari 癸酉 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "癸酉 ialah pilar hari nombor 10 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 癸酉, batang harinya ialah 癸 (Air, Yin) dan cabang harinya ialah 酉 (Ayam). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 10."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 癸 \"Air Yin (癸)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Embun dan hujan. Ia meresap senyap dan membaca suasana sebelum kata-kata.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 酉 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 癸, batang yang disimpan oleh 酉 adalah seperti berikut. Batang utama (辛) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 癸酉",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 癸"
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
                  "Sokongan Luar Biasa (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 癸 sebagai batang hari, Harta Tetap ialah 丙 dan Kewibawaan ialah 戊."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 丙. 丙 tidak disimpan di dalam 酉."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 戊. 戊 tidak disimpan di dalam 酉."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [壬申](/guide/pillar-im-sin) dan yang seterusnya ialah [甲戌](/guide/pillar-gap-sul)."
          },
          {
            "p": "Ia terdiri daripada [Air Yin (癸)](/guide/stem-gye) dan [酉 (Ayam)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sul": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 甲戌",
    "summary": "Cara Saju-Link membaca pilar hari 甲戌 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "甲戌 ialah pilar hari nombor 11 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 甲戌, batang harinya ialah 甲 (Kayu, Yang) dan cabang harinya ialah 戌 (Anjing). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 11."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 甲 \"Kayu Yang (甲)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Pokok tinggi yang tumbuh lurus. Sekali arahnya ditetapkan ia tidak goyah, dan ia lebih rela bertahan daripada tunduk.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 戌 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 甲, batang yang disimpan oleh 戌 adalah seperti berikut. Batang utama (戊) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 甲戌",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 甲"
              ],
              "rows": [
                [
                  "Logam Yin (辛)",
                  "sisa (餘氣)",
                  "{hidSulYeo}",
                  "Kewibawaan (正官)"
                ],
                [
                  "Api Yin (丁)",
                  "tengah (中氣)",
                  "{hidSulJung}",
                  "Pengocak (傷官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "utama (本氣)",
                  "{hidSulBon}",
                  "Rezeki Mendadak (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 甲 sebagai batang hari, Harta Tetap ialah 己 dan Kewibawaan ialah 辛."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 己. 己 tidak disimpan di dalam 戌."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 辛. 辛 disimpan di dalam 戌 (sisa (餘氣))."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [癸酉](/guide/pillar-gye-yu) dan yang seterusnya ialah [乙亥](/guide/pillar-eul-hae)."
          },
          {
            "p": "Ia terdiri daripada [Kayu Yang (甲)](/guide/stem-gap) dan [戌 (Anjing)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-hae": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 乙亥",
    "summary": "Cara Saju-Link membaca pilar hari 乙亥 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "乙亥 ialah pilar hari nombor 12 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 乙亥, batang harinya ialah 乙 (Kayu, Yin) dan cabang harinya ialah 亥 (Babi). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 12."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 乙 \"Kayu Yin (乙)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Pokok menjalar — rumput yang lentur. Ia melentur mengikut keadaan untuk terus bergerak, dan ia tidak patah.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 亥 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 乙, batang yang disimpan oleh 亥 adalah seperti berikut. Batang utama (壬) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 乙亥",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 乙"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidHaeYeo}",
                  "Harta Tetap (正財)"
                ],
                [
                  "Kayu Yang (甲)",
                  "tengah (中氣)",
                  "{hidHaeJung}",
                  "Pesaing (劫財)"
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
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 乙 sebagai batang hari, Harta Tetap ialah 戊 dan Kewibawaan ialah 庚."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 戊. 戊 disimpan di dalam 亥 (sisa (餘氣))."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 庚. 庚 tidak disimpan di dalam 亥."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [甲戌](/guide/pillar-gap-sul) dan yang seterusnya ialah [丙子](/guide/pillar-byeong-ja)."
          },
          {
            "p": "Ia terdiri daripada [Kayu Yin (乙)](/guide/stem-eul) dan [亥 (Babi)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-ja": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 丙子",
    "summary": "Cara Saju-Link membaca pilar hari 丙子 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "丙子 ialah pilar hari nombor 13 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 丙子, batang harinya ialah 丙 (Api, Yang) dan cabang harinya ialah 子 (Tikus). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 13."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 丙 \"Api Yang (丙)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Matahari tengah hari. Perasaan terpampang jelas, ruang menjadi terang, dan melangkah ke hadapan datang secara semula jadi.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 子 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 丙, batang yang disimpan oleh 子 adalah seperti berikut. Batang utama (癸) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 丙子",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 丙"
              ],
              "rows": [
                [
                  "Air Yang (壬)",
                  "sisa (餘氣)",
                  "{hidJaYeo}",
                  "Pencabar (偏官)"
                ],
                [
                  "Air Yin (癸)",
                  "utama (本氣)",
                  "{hidJaBon}",
                  "Kewibawaan (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 丙 sebagai batang hari, Harta Tetap ialah 辛 dan Kewibawaan ialah 癸."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 辛. 辛 tidak disimpan di dalam 子."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 癸. 癸 disimpan di dalam 子 (utama (本氣))."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [乙亥](/guide/pillar-eul-hae) dan yang seterusnya ialah [丁丑](/guide/pillar-jeong-chuk)."
          },
          {
            "p": "Ia terdiri daripada [Api Yang (丙)](/guide/stem-byeong) dan [子 (Tikus)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-chuk": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 丁丑",
    "summary": "Cara Saju-Link membaca pilar hari 丁丑 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "丁丑 ialah pilar hari nombor 14 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 丁丑, batang harinya ialah 丁 (Api, Yin) dan cabang harinya ialah 丑 (Lembu). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 14."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 丁 \"Api Yin (丁)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Cahaya lilin. Ia menyala perlahan dan lama, serta menghangatkan yang terdekat dahulu.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 丑 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 丁, batang yang disimpan oleh 丑 adalah seperti berikut. Batang utama (己) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 丁丑",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 丁"
              ],
              "rows": [
                [
                  "Air Yin (癸)",
                  "sisa (餘氣)",
                  "{hidChukYeo}",
                  "Pencabar (偏官)"
                ],
                [
                  "Logam Yin (辛)",
                  "tengah (中氣)",
                  "{hidChukJung}",
                  "Rezeki Mendadak (偏財)"
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
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 丁 sebagai batang hari, Harta Tetap ialah 庚 dan Kewibawaan ialah 壬."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 庚. 庚 tidak disimpan di dalam 丑."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 壬. 壬 tidak disimpan di dalam 丑."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [丙子](/guide/pillar-byeong-ja) dan yang seterusnya ialah [戊寅](/guide/pillar-mu-in)."
          },
          {
            "p": "Ia terdiri daripada [Api Yin (丁)](/guide/stem-jeong) dan [丑 (Lembu)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-in": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 戊寅",
    "summary": "Cara Saju-Link membaca pilar hari 戊寅 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "戊寅 ialah pilar hari nombor 15 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 戊寅, batang harinya ialah 戊 (Tanah, Yang) dan cabang harinya ialah 寅 (Harimau). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 15."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 戊 \"Tanah Yang (戊)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Tanah lapang dan gunung. Sukar digoyah dan mudah disandari, walaupun lambat mengubah keputusan yang sudah dibuat.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 寅 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 戊, batang yang disimpan oleh 寅 adalah seperti berikut. Batang utama (甲) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 戊寅",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 戊"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidInYeo}",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Api Yang (丙)",
                  "tengah (中氣)",
                  "{hidInJung}",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Kayu Yang (甲)",
                  "utama (本氣)",
                  "{hidInBon}",
                  "Pencabar (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 戊 sebagai batang hari, Harta Tetap ialah 癸 dan Kewibawaan ialah 乙."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 癸. 癸 tidak disimpan di dalam 寅."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 乙. 乙 tidak disimpan di dalam 寅."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [丁丑](/guide/pillar-jeong-chuk) dan yang seterusnya ialah [己卯](/guide/pillar-gi-myo)."
          },
          {
            "p": "Ia terdiri daripada [Tanah Yang (戊)](/guide/stem-mu) dan [寅 (Harimau)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-myo": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 己卯",
    "summary": "Cara Saju-Link membaca pilar hari 己卯 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "己卯 ialah pilar hari nombor 16 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 己卯, batang harinya ialah 己 (Tanah, Yin) dan cabang harinya ialah 卯 (Arnab). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 16."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 己 \"Tanah Yin (己)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Tanah ladang. Ia menerima apa sahaja yang datang dan membesarkannya, memelihara dan bukan mempamerkan.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 卯 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 己, batang yang disimpan oleh 卯 adalah seperti berikut. Batang utama (乙) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 己卯",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 己"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "sisa (餘氣)",
                  "{hidMyoYeo}",
                  "Kewibawaan (正官)"
                ],
                [
                  "Kayu Yin (乙)",
                  "utama (本氣)",
                  "{hidMyoBon}",
                  "Pencabar (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 己 sebagai batang hari, Harta Tetap ialah 壬 dan Kewibawaan ialah 甲."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 壬. 壬 tidak disimpan di dalam 卯."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 甲. 甲 disimpan di dalam 卯 (sisa (餘氣))."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [戊寅](/guide/pillar-mu-in) dan yang seterusnya ialah [庚辰](/guide/pillar-gyeong-jin)."
          },
          {
            "p": "Ia terdiri daripada [Tanah Yin (己)](/guide/stem-gi) dan [卯 (Arnab)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-jin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 庚辰",
    "summary": "Cara Saju-Link membaca pilar hari 庚辰 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "庚辰 ialah pilar hari nombor 17 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 庚辰, batang harinya ialah 庚 (Logam, Yang) dan cabang harinya ialah 辰 (Naga). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 17."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 庚 \"Logam Yang (庚)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Besi yang belum ditempa. Tegas dan jelas, dengan sedikit sahaja kesabaran terhadap perkara yang tergantung.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 辰 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 庚, batang yang disimpan oleh 辰 adalah seperti berikut. Batang utama (戊) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 庚辰",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 庚"
              ],
              "rows": [
                [
                  "Kayu Yin (乙)",
                  "sisa (餘氣)",
                  "{hidJinYeo}",
                  "Harta Tetap (正財)"
                ],
                [
                  "Air Yin (癸)",
                  "tengah (中氣)",
                  "{hidJinJung}",
                  "Pengocak (傷官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "utama (本氣)",
                  "{hidJinBon}",
                  "Sokongan Luar Biasa (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 庚 sebagai batang hari, Harta Tetap ialah 乙 dan Kewibawaan ialah 丁."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 乙. 乙 disimpan di dalam 辰 (sisa (餘氣))."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 丁. 丁 tidak disimpan di dalam 辰."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [己卯](/guide/pillar-gi-myo) dan yang seterusnya ialah [辛巳](/guide/pillar-sin-sa)."
          },
          {
            "p": "Ia terdiri daripada [Logam Yang (庚)](/guide/stem-gyeong) dan [辰 (Naga)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-sa": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 辛巳",
    "summary": "Cara Saju-Link membaca pilar hari 辛巳 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "辛巳 ialah pilar hari nombor 18 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 辛巳, batang harinya ialah 辛 (Logam, Yin) dan cabang harinya ialah 巳 (Ular). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 18."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 辛 \"Logam Yin (辛)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Permata yang telah diasah. Cita rasa halus dan piawaian tinggi; kerja sambil lewa sukar dibiarkan.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 巳 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 辛, batang yang disimpan oleh 巳 adalah seperti berikut. Batang utama (丙) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 辛巳",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 辛"
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
                  "Pesaing (劫財)"
                ],
                [
                  "Api Yang (丙)",
                  "utama (本氣)",
                  "{hidSaBon}",
                  "Kewibawaan (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 辛 sebagai batang hari, Harta Tetap ialah 甲 dan Kewibawaan ialah 丙."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 甲. 甲 tidak disimpan di dalam 巳."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 丙. 丙 disimpan di dalam 巳 (utama (本氣))."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [庚辰](/guide/pillar-gyeong-jin) dan yang seterusnya ialah [壬午](/guide/pillar-im-o)."
          },
          {
            "p": "Ia terdiri daripada [Logam Yin (辛)](/guide/stem-sin) dan [巳 (Ular)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-o": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 壬午",
    "summary": "Cara Saju-Link membaca pilar hari 壬午 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "壬午 ialah pilar hari nombor 19 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 壬午, batang harinya ialah 壬 (Air, Yang) dan cabang harinya ialah 午 (Kuda). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 19."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 壬 \"Air Yang (壬)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Sungai dan laut. Luas pandangannya, dengan mata yang membaca ke mana sesuatu mengalir.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 午 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 壬, batang yang disimpan oleh 午 adalah seperti berikut. Batang utama (丁) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 壬午",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 壬"
              ],
              "rows": [
                [
                  "Api Yang (丙)",
                  "sisa (餘氣)",
                  "{hidOYeo}",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Tanah Yin (己)",
                  "tengah (中氣)",
                  "{hidOJung}",
                  "Kewibawaan (正官)"
                ],
                [
                  "Api Yin (丁)",
                  "utama (本氣)",
                  "{hidOBon}",
                  "Harta Tetap (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 壬 sebagai batang hari, Harta Tetap ialah 丁 dan Kewibawaan ialah 己."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 丁. 丁 disimpan di dalam 午 (utama (本氣))."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 己. 己 disimpan di dalam 午 (tengah (中氣))."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [辛巳](/guide/pillar-sin-sa) dan yang seterusnya ialah [癸未](/guide/pillar-gye-mi)."
          },
          {
            "p": "Ia terdiri daripada [Air Yang (壬)](/guide/stem-im) dan [午 (Kuda)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-mi": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 癸未",
    "summary": "Cara Saju-Link membaca pilar hari 癸未 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "癸未 ialah pilar hari nombor 20 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 癸未, batang harinya ialah 癸 (Air, Yin) dan cabang harinya ialah 未 (Biri-biri). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 20."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 癸 \"Air Yin (癸)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Embun dan hujan. Ia meresap senyap dan membaca suasana sebelum kata-kata.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 未 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 癸, batang yang disimpan oleh 未 adalah seperti berikut. Batang utama (己) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 癸未",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 癸"
              ],
              "rows": [
                [
                  "Api Yin (丁)",
                  "sisa (餘氣)",
                  "{hidMiYeo}",
                  "Rezeki Mendadak (偏財)"
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
                  "Pencabar (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 癸 sebagai batang hari, Harta Tetap ialah 丙 dan Kewibawaan ialah 戊."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 丙. 丙 tidak disimpan di dalam 未."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 戊. 戊 tidak disimpan di dalam 未."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [壬午](/guide/pillar-im-o) dan yang seterusnya ialah [甲申](/guide/pillar-gap-sin)."
          },
          {
            "p": "Ia terdiri daripada [Air Yin (癸)](/guide/stem-gye) dan [未 (Biri-biri)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 甲申",
    "summary": "Cara Saju-Link membaca pilar hari 甲申 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "甲申 ialah pilar hari nombor 21 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 甲申, batang harinya ialah 甲 (Kayu, Yang) dan cabang harinya ialah 申 (Monyet). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 21."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 甲 \"Kayu Yang (甲)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Pokok tinggi yang tumbuh lurus. Sekali arahnya ditetapkan ia tidak goyah, dan ia lebih rela bertahan daripada tunduk.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 申 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 甲, batang yang disimpan oleh 申 adalah seperti berikut. Batang utama (庚) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 甲申",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 甲"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidSinYeo}",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Air Yang (壬)",
                  "tengah (中氣)",
                  "{hidSinJung}",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Logam Yang (庚)",
                  "utama (本氣)",
                  "{hidSinBon}",
                  "Pencabar (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 甲 sebagai batang hari, Harta Tetap ialah 己 dan Kewibawaan ialah 辛."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 己. 己 tidak disimpan di dalam 申."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 辛. 辛 tidak disimpan di dalam 申."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [癸未](/guide/pillar-gye-mi) dan yang seterusnya ialah [乙酉](/guide/pillar-eul-yu)."
          },
          {
            "p": "Ia terdiri daripada [Kayu Yang (甲)](/guide/stem-gap) dan [申 (Monyet)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-yu": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 乙酉",
    "summary": "Cara Saju-Link membaca pilar hari 乙酉 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "乙酉 ialah pilar hari nombor 22 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 乙酉, batang harinya ialah 乙 (Kayu, Yin) dan cabang harinya ialah 酉 (Ayam). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 22."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 乙 \"Kayu Yin (乙)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Pokok menjalar — rumput yang lentur. Ia melentur mengikut keadaan untuk terus bergerak, dan ia tidak patah.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 酉 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 乙, batang yang disimpan oleh 酉 adalah seperti berikut. Batang utama (辛) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 乙酉",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 乙"
              ],
              "rows": [
                [
                  "Logam Yang (庚)",
                  "sisa (餘氣)",
                  "{hidYuYeo}",
                  "Kewibawaan (正官)"
                ],
                [
                  "Logam Yin (辛)",
                  "utama (本氣)",
                  "{hidYuBon}",
                  "Pencabar (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 乙 sebagai batang hari, Harta Tetap ialah 戊 dan Kewibawaan ialah 庚."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 戊. 戊 tidak disimpan di dalam 酉."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 庚. 庚 disimpan di dalam 酉 (sisa (餘氣))."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [甲申](/guide/pillar-gap-sin) dan yang seterusnya ialah [丙戌](/guide/pillar-byeong-sul)."
          },
          {
            "p": "Ia terdiri daripada [Kayu Yin (乙)](/guide/stem-eul) dan [酉 (Ayam)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sul": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 丙戌",
    "summary": "Cara Saju-Link membaca pilar hari 丙戌 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "丙戌 ialah pilar hari nombor 23 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 丙戌, batang harinya ialah 丙 (Api, Yang) dan cabang harinya ialah 戌 (Anjing). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 23."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 丙 \"Api Yang (丙)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Matahari tengah hari. Perasaan terpampang jelas, ruang menjadi terang, dan melangkah ke hadapan datang secara semula jadi.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 戌 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 丙, batang yang disimpan oleh 戌 adalah seperti berikut. Batang utama (戊) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 丙戌",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 丙"
              ],
              "rows": [
                [
                  "Logam Yin (辛)",
                  "sisa (餘氣)",
                  "{hidSulYeo}",
                  "Harta Tetap (正財)"
                ],
                [
                  "Api Yin (丁)",
                  "tengah (中氣)",
                  "{hidSulJung}",
                  "Pesaing (劫財)"
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
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 丙 sebagai batang hari, Harta Tetap ialah 辛 dan Kewibawaan ialah 癸."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 辛. 辛 disimpan di dalam 戌 (sisa (餘氣))."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 癸. 癸 tidak disimpan di dalam 戌."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [乙酉](/guide/pillar-eul-yu) dan yang seterusnya ialah [丁亥](/guide/pillar-jeong-hae)."
          },
          {
            "p": "Ia terdiri daripada [Api Yang (丙)](/guide/stem-byeong) dan [戌 (Anjing)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-hae": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 丁亥",
    "summary": "Cara Saju-Link membaca pilar hari 丁亥 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "丁亥 ialah pilar hari nombor 24 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 丁亥, batang harinya ialah 丁 (Api, Yin) dan cabang harinya ialah 亥 (Babi). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 24."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 丁 \"Api Yin (丁)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Cahaya lilin. Ia menyala perlahan dan lama, serta menghangatkan yang terdekat dahulu.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 亥 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 丁, batang yang disimpan oleh 亥 adalah seperti berikut. Batang utama (壬) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 丁亥",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 丁"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidHaeYeo}",
                  "Pengocak (傷官)"
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
                  "Kewibawaan (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 丁 sebagai batang hari, Harta Tetap ialah 庚 dan Kewibawaan ialah 壬."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 庚. 庚 tidak disimpan di dalam 亥."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 壬. 壬 disimpan di dalam 亥 (utama (本氣))."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [丙戌](/guide/pillar-byeong-sul) dan yang seterusnya ialah [戊子](/guide/pillar-mu-ja)."
          },
          {
            "p": "Ia terdiri daripada [Api Yin (丁)](/guide/stem-jeong) dan [亥 (Babi)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-ja": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 戊子",
    "summary": "Cara Saju-Link membaca pilar hari 戊子 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "戊子 ialah pilar hari nombor 25 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 戊子, batang harinya ialah 戊 (Tanah, Yang) dan cabang harinya ialah 子 (Tikus). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 25."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 戊 \"Tanah Yang (戊)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Tanah lapang dan gunung. Sukar digoyah dan mudah disandari, walaupun lambat mengubah keputusan yang sudah dibuat.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 子 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 戊, batang yang disimpan oleh 子 adalah seperti berikut. Batang utama (癸) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 戊子",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 戊"
              ],
              "rows": [
                [
                  "Air Yang (壬)",
                  "sisa (餘氣)",
                  "{hidJaYeo}",
                  "Rezeki Mendadak (偏財)"
                ],
                [
                  "Air Yin (癸)",
                  "utama (本氣)",
                  "{hidJaBon}",
                  "Harta Tetap (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 戊 sebagai batang hari, Harta Tetap ialah 癸 dan Kewibawaan ialah 乙."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 癸. 癸 disimpan di dalam 子 (utama (本氣))."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 乙. 乙 tidak disimpan di dalam 子."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [丁亥](/guide/pillar-jeong-hae) dan yang seterusnya ialah [己丑](/guide/pillar-gi-chuk)."
          },
          {
            "p": "Ia terdiri daripada [Tanah Yang (戊)](/guide/stem-mu) dan [子 (Tikus)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-chuk": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 己丑",
    "summary": "Cara Saju-Link membaca pilar hari 己丑 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "己丑 ialah pilar hari nombor 26 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 己丑, batang harinya ialah 己 (Tanah, Yin) dan cabang harinya ialah 丑 (Lembu). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 26."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 己 \"Tanah Yin (己)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Tanah ladang. Ia menerima apa sahaja yang datang dan membesarkannya, memelihara dan bukan mempamerkan.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 丑 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 己, batang yang disimpan oleh 丑 adalah seperti berikut. Batang utama (己) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 己丑",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 己"
              ],
              "rows": [
                [
                  "Air Yin (癸)",
                  "sisa (餘氣)",
                  "{hidChukYeo}",
                  "Rezeki Mendadak (偏財)"
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
                  "Rakan Sebahu (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 己 sebagai batang hari, Harta Tetap ialah 壬 dan Kewibawaan ialah 甲."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 壬. 壬 tidak disimpan di dalam 丑."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 甲. 甲 tidak disimpan di dalam 丑."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [戊子](/guide/pillar-mu-ja) dan yang seterusnya ialah [庚寅](/guide/pillar-gyeong-in)."
          },
          {
            "p": "Ia terdiri daripada [Tanah Yin (己)](/guide/stem-gi) dan [丑 (Lembu)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-in": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 庚寅",
    "summary": "Cara Saju-Link membaca pilar hari 庚寅 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "庚寅 ialah pilar hari nombor 27 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 庚寅, batang harinya ialah 庚 (Logam, Yang) dan cabang harinya ialah 寅 (Harimau). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 27."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 庚 \"Logam Yang (庚)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Besi yang belum ditempa. Tegas dan jelas, dengan sedikit sahaja kesabaran terhadap perkara yang tergantung.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 寅 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 庚, batang yang disimpan oleh 寅 adalah seperti berikut. Batang utama (甲) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 庚寅",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 庚"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidInYeo}",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Api Yang (丙)",
                  "tengah (中氣)",
                  "{hidInJung}",
                  "Pencabar (偏官)"
                ],
                [
                  "Kayu Yang (甲)",
                  "utama (本氣)",
                  "{hidInBon}",
                  "Rezeki Mendadak (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 庚 sebagai batang hari, Harta Tetap ialah 乙 dan Kewibawaan ialah 丁."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 乙. 乙 tidak disimpan di dalam 寅."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 丁. 丁 tidak disimpan di dalam 寅."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [己丑](/guide/pillar-gi-chuk) dan yang seterusnya ialah [辛卯](/guide/pillar-sin-myo)."
          },
          {
            "p": "Ia terdiri daripada [Logam Yang (庚)](/guide/stem-gyeong) dan [寅 (Harimau)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-myo": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 辛卯",
    "summary": "Cara Saju-Link membaca pilar hari 辛卯 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "辛卯 ialah pilar hari nombor 28 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 辛卯, batang harinya ialah 辛 (Logam, Yin) dan cabang harinya ialah 卯 (Arnab). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 28."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 辛 \"Logam Yin (辛)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Permata yang telah diasah. Cita rasa halus dan piawaian tinggi; kerja sambil lewa sukar dibiarkan.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 卯 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 辛, batang yang disimpan oleh 卯 adalah seperti berikut. Batang utama (乙) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 辛卯",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 辛"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "sisa (餘氣)",
                  "{hidMyoYeo}",
                  "Harta Tetap (正財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "utama (本氣)",
                  "{hidMyoBon}",
                  "Rezeki Mendadak (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 辛 sebagai batang hari, Harta Tetap ialah 甲 dan Kewibawaan ialah 丙."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 甲. 甲 disimpan di dalam 卯 (sisa (餘氣))."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 丙. 丙 tidak disimpan di dalam 卯."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [庚寅](/guide/pillar-gyeong-in) dan yang seterusnya ialah [壬辰](/guide/pillar-im-jin)."
          },
          {
            "p": "Ia terdiri daripada [Logam Yin (辛)](/guide/stem-sin) dan [卯 (Arnab)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-jin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 壬辰",
    "summary": "Cara Saju-Link membaca pilar hari 壬辰 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "壬辰 ialah pilar hari nombor 29 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 壬辰, batang harinya ialah 壬 (Air, Yang) dan cabang harinya ialah 辰 (Naga). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 29."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 壬 \"Air Yang (壬)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Sungai dan laut. Luas pandangannya, dengan mata yang membaca ke mana sesuatu mengalir.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 辰 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 壬, batang yang disimpan oleh 辰 adalah seperti berikut. Batang utama (戊) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 壬辰",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 壬"
              ],
              "rows": [
                [
                  "Kayu Yin (乙)",
                  "sisa (餘氣)",
                  "{hidJinYeo}",
                  "Pengocak (傷官)"
                ],
                [
                  "Air Yin (癸)",
                  "tengah (中氣)",
                  "{hidJinJung}",
                  "Pesaing (劫財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "utama (本氣)",
                  "{hidJinBon}",
                  "Pencabar (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 壬 sebagai batang hari, Harta Tetap ialah 丁 dan Kewibawaan ialah 己."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 丁. 丁 tidak disimpan di dalam 辰."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 己. 己 tidak disimpan di dalam 辰."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [辛卯](/guide/pillar-sin-myo) dan yang seterusnya ialah [癸巳](/guide/pillar-gye-sa)."
          },
          {
            "p": "Ia terdiri daripada [Air Yang (壬)](/guide/stem-im) dan [辰 (Naga)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-sa": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 癸巳",
    "summary": "Cara Saju-Link membaca pilar hari 癸巳 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "癸巳 ialah pilar hari nombor 30 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 癸巳, batang harinya ialah 癸 (Air, Yin) dan cabang harinya ialah 巳 (Ular). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 30."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 癸 \"Air Yin (癸)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Embun dan hujan. Ia meresap senyap dan membaca suasana sebelum kata-kata.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 巳 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 癸, batang yang disimpan oleh 巳 adalah seperti berikut. Batang utama (丙) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 癸巳",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 癸"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidSaYeo}",
                  "Kewibawaan (正官)"
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
                  "Harta Tetap (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 癸 sebagai batang hari, Harta Tetap ialah 丙 dan Kewibawaan ialah 戊."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 丙. 丙 disimpan di dalam 巳 (utama (本氣))."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 戊. 戊 disimpan di dalam 巳 (sisa (餘氣))."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [壬辰](/guide/pillar-im-jin) dan yang seterusnya ialah [甲午](/guide/pillar-gap-o)."
          },
          {
            "p": "Ia terdiri daripada [Air Yin (癸)](/guide/stem-gye) dan [巳 (Ular)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-o": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 甲午",
    "summary": "Cara Saju-Link membaca pilar hari 甲午 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "甲午 ialah pilar hari nombor 31 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 甲午, batang harinya ialah 甲 (Kayu, Yang) dan cabang harinya ialah 午 (Kuda). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 31."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 甲 \"Kayu Yang (甲)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Pokok tinggi yang tumbuh lurus. Sekali arahnya ditetapkan ia tidak goyah, dan ia lebih rela bertahan daripada tunduk.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 午 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 甲, batang yang disimpan oleh 午 adalah seperti berikut. Batang utama (丁) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 甲午",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 甲"
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
                  "Harta Tetap (正財)"
                ],
                [
                  "Api Yin (丁)",
                  "utama (本氣)",
                  "{hidOBon}",
                  "Pengocak (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 甲 sebagai batang hari, Harta Tetap ialah 己 dan Kewibawaan ialah 辛."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 己. 己 disimpan di dalam 午 (tengah (中氣))."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 辛. 辛 tidak disimpan di dalam 午."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [癸巳](/guide/pillar-gye-sa) dan yang seterusnya ialah [乙未](/guide/pillar-eul-mi)."
          },
          {
            "p": "Ia terdiri daripada [Kayu Yang (甲)](/guide/stem-gap) dan [午 (Kuda)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-mi": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 乙未",
    "summary": "Cara Saju-Link membaca pilar hari 乙未 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "乙未 ialah pilar hari nombor 32 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 乙未, batang harinya ialah 乙 (Kayu, Yin) dan cabang harinya ialah 未 (Biri-biri). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 32."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 乙 \"Kayu Yin (乙)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Pokok menjalar — rumput yang lentur. Ia melentur mengikut keadaan untuk terus bergerak, dan ia tidak patah.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 未 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 乙, batang yang disimpan oleh 未 adalah seperti berikut. Batang utama (己) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 乙未",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 乙"
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
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Tanah Yin (己)",
                  "utama (本氣)",
                  "{hidMiBon}",
                  "Rezeki Mendadak (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 乙 sebagai batang hari, Harta Tetap ialah 戊 dan Kewibawaan ialah 庚."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 戊. 戊 tidak disimpan di dalam 未."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 庚. 庚 tidak disimpan di dalam 未."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [甲午](/guide/pillar-gap-o) dan yang seterusnya ialah [丙申](/guide/pillar-byeong-sin)."
          },
          {
            "p": "Ia terdiri daripada [Kayu Yin (乙)](/guide/stem-eul) dan [未 (Biri-biri)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 丙申",
    "summary": "Cara Saju-Link membaca pilar hari 丙申 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "丙申 ialah pilar hari nombor 33 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 丙申, batang harinya ialah 丙 (Api, Yang) dan cabang harinya ialah 申 (Monyet). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 33."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 丙 \"Api Yang (丙)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Matahari tengah hari. Perasaan terpampang jelas, ruang menjadi terang, dan melangkah ke hadapan datang secara semula jadi.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 申 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 丙, batang yang disimpan oleh 申 adalah seperti berikut. Batang utama (庚) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 丙申",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 丙"
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
                  "Pencabar (偏官)"
                ],
                [
                  "Logam Yang (庚)",
                  "utama (本氣)",
                  "{hidSinBon}",
                  "Rezeki Mendadak (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 丙 sebagai batang hari, Harta Tetap ialah 辛 dan Kewibawaan ialah 癸."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 辛. 辛 tidak disimpan di dalam 申."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 癸. 癸 tidak disimpan di dalam 申."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [乙未](/guide/pillar-eul-mi) dan yang seterusnya ialah [丁酉](/guide/pillar-jeong-yu)."
          },
          {
            "p": "Ia terdiri daripada [Api Yang (丙)](/guide/stem-byeong) dan [申 (Monyet)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-yu": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 丁酉",
    "summary": "Cara Saju-Link membaca pilar hari 丁酉 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "丁酉 ialah pilar hari nombor 34 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 丁酉, batang harinya ialah 丁 (Api, Yin) dan cabang harinya ialah 酉 (Ayam). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 34."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 丁 \"Api Yin (丁)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Cahaya lilin. Ia menyala perlahan dan lama, serta menghangatkan yang terdekat dahulu.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 酉 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 丁, batang yang disimpan oleh 酉 adalah seperti berikut. Batang utama (辛) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 丁酉",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 丁"
              ],
              "rows": [
                [
                  "Logam Yang (庚)",
                  "sisa (餘氣)",
                  "{hidYuYeo}",
                  "Harta Tetap (正財)"
                ],
                [
                  "Logam Yin (辛)",
                  "utama (本氣)",
                  "{hidYuBon}",
                  "Rezeki Mendadak (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 丁 sebagai batang hari, Harta Tetap ialah 庚 dan Kewibawaan ialah 壬."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 庚. 庚 disimpan di dalam 酉 (sisa (餘氣))."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 壬. 壬 tidak disimpan di dalam 酉."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [丙申](/guide/pillar-byeong-sin) dan yang seterusnya ialah [戊戌](/guide/pillar-mu-sul)."
          },
          {
            "p": "Ia terdiri daripada [Api Yin (丁)](/guide/stem-jeong) dan [酉 (Ayam)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sul": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 戊戌",
    "summary": "Cara Saju-Link membaca pilar hari 戊戌 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "戊戌 ialah pilar hari nombor 35 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 戊戌, batang harinya ialah 戊 (Tanah, Yang) dan cabang harinya ialah 戌 (Anjing). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 35."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 戊 \"Tanah Yang (戊)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Tanah lapang dan gunung. Sukar digoyah dan mudah disandari, walaupun lambat mengubah keputusan yang sudah dibuat.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 戌 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 戊, batang yang disimpan oleh 戌 adalah seperti berikut. Batang utama (戊) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 戊戌",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 戊"
              ],
              "rows": [
                [
                  "Logam Yin (辛)",
                  "sisa (餘氣)",
                  "{hidSulYeo}",
                  "Pengocak (傷官)"
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
                  "Rakan Sebahu (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 戊 sebagai batang hari, Harta Tetap ialah 癸 dan Kewibawaan ialah 乙."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 癸. 癸 tidak disimpan di dalam 戌."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 乙. 乙 tidak disimpan di dalam 戌."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [丁酉](/guide/pillar-jeong-yu) dan yang seterusnya ialah [己亥](/guide/pillar-gi-hae)."
          },
          {
            "p": "Ia terdiri daripada [Tanah Yang (戊)](/guide/stem-mu) dan [戌 (Anjing)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-hae": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 己亥",
    "summary": "Cara Saju-Link membaca pilar hari 己亥 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "己亥 ialah pilar hari nombor 36 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 己亥, batang harinya ialah 己 (Tanah, Yin) dan cabang harinya ialah 亥 (Babi). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 36."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 己 \"Tanah Yin (己)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Tanah ladang. Ia menerima apa sahaja yang datang dan membesarkannya, memelihara dan bukan mempamerkan.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 亥 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 己, batang yang disimpan oleh 亥 adalah seperti berikut. Batang utama (壬) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 己亥",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 己"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidHaeYeo}",
                  "Pesaing (劫財)"
                ],
                [
                  "Kayu Yang (甲)",
                  "tengah (中氣)",
                  "{hidHaeJung}",
                  "Kewibawaan (正官)"
                ],
                [
                  "Air Yang (壬)",
                  "utama (本氣)",
                  "{hidHaeBon}",
                  "Harta Tetap (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 己 sebagai batang hari, Harta Tetap ialah 壬 dan Kewibawaan ialah 甲."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 壬. 壬 disimpan di dalam 亥 (utama (本氣))."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 甲. 甲 disimpan di dalam 亥 (tengah (中氣))."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [戊戌](/guide/pillar-mu-sul) dan yang seterusnya ialah [庚子](/guide/pillar-gyeong-ja)."
          },
          {
            "p": "Ia terdiri daripada [Tanah Yin (己)](/guide/stem-gi) dan [亥 (Babi)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-ja": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 庚子",
    "summary": "Cara Saju-Link membaca pilar hari 庚子 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "庚子 ialah pilar hari nombor 37 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 庚子, batang harinya ialah 庚 (Logam, Yang) dan cabang harinya ialah 子 (Tikus). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 37."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 庚 \"Logam Yang (庚)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Besi yang belum ditempa. Tegas dan jelas, dengan sedikit sahaja kesabaran terhadap perkara yang tergantung.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 子 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 庚, batang yang disimpan oleh 子 adalah seperti berikut. Batang utama (癸) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 庚子",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 庚"
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
                  "Pengocak (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 庚 sebagai batang hari, Harta Tetap ialah 乙 dan Kewibawaan ialah 丁."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 乙. 乙 tidak disimpan di dalam 子."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 丁. 丁 tidak disimpan di dalam 子."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [己亥](/guide/pillar-gi-hae) dan yang seterusnya ialah [辛丑](/guide/pillar-sin-chuk)."
          },
          {
            "p": "Ia terdiri daripada [Logam Yang (庚)](/guide/stem-gyeong) dan [子 (Tikus)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-chuk": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 辛丑",
    "summary": "Cara Saju-Link membaca pilar hari 辛丑 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "辛丑 ialah pilar hari nombor 38 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 辛丑, batang harinya ialah 辛 (Logam, Yin) dan cabang harinya ialah 丑 (Lembu). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 38."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 辛 \"Logam Yin (辛)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Permata yang telah diasah. Cita rasa halus dan piawaian tinggi; kerja sambil lewa sukar dibiarkan.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 丑 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 辛, batang yang disimpan oleh 丑 adalah seperti berikut. Batang utama (己) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 辛丑",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 辛"
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
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Tanah Yin (己)",
                  "utama (本氣)",
                  "{hidChukBon}",
                  "Sokongan Luar Biasa (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 辛 sebagai batang hari, Harta Tetap ialah 甲 dan Kewibawaan ialah 丙."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 甲. 甲 tidak disimpan di dalam 丑."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 丙. 丙 tidak disimpan di dalam 丑."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [庚子](/guide/pillar-gyeong-ja) dan yang seterusnya ialah [壬寅](/guide/pillar-im-in)."
          },
          {
            "p": "Ia terdiri daripada [Logam Yin (辛)](/guide/stem-sin) dan [丑 (Lembu)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-in": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 壬寅",
    "summary": "Cara Saju-Link membaca pilar hari 壬寅 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "壬寅 ialah pilar hari nombor 39 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 壬寅, batang harinya ialah 壬 (Air, Yang) dan cabang harinya ialah 寅 (Harimau). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 39."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 壬 \"Air Yang (壬)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Sungai dan laut. Luas pandangannya, dengan mata yang membaca ke mana sesuatu mengalir.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 寅 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 壬, batang yang disimpan oleh 寅 adalah seperti berikut. Batang utama (甲) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 壬寅",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 壬"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidInYeo}",
                  "Pencabar (偏官)"
                ],
                [
                  "Api Yang (丙)",
                  "tengah (中氣)",
                  "{hidInJung}",
                  "Rezeki Mendadak (偏財)"
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
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 壬 sebagai batang hari, Harta Tetap ialah 丁 dan Kewibawaan ialah 己."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 丁. 丁 tidak disimpan di dalam 寅."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 己. 己 tidak disimpan di dalam 寅."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [辛丑](/guide/pillar-sin-chuk) dan yang seterusnya ialah [癸卯](/guide/pillar-gye-myo)."
          },
          {
            "p": "Ia terdiri daripada [Air Yang (壬)](/guide/stem-im) dan [寅 (Harimau)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-myo": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 癸卯",
    "summary": "Cara Saju-Link membaca pilar hari 癸卯 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "癸卯 ialah pilar hari nombor 40 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 癸卯, batang harinya ialah 癸 (Air, Yin) dan cabang harinya ialah 卯 (Arnab). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 40."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 癸 \"Air Yin (癸)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Embun dan hujan. Ia meresap senyap dan membaca suasana sebelum kata-kata.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 卯 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 癸, batang yang disimpan oleh 卯 adalah seperti berikut. Batang utama (乙) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 癸卯",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 癸"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "sisa (餘氣)",
                  "{hidMyoYeo}",
                  "Pengocak (傷官)"
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
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 癸 sebagai batang hari, Harta Tetap ialah 丙 dan Kewibawaan ialah 戊."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 丙. 丙 tidak disimpan di dalam 卯."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 戊. 戊 tidak disimpan di dalam 卯."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [壬寅](/guide/pillar-im-in) dan yang seterusnya ialah [甲辰](/guide/pillar-gap-jin)."
          },
          {
            "p": "Ia terdiri daripada [Air Yin (癸)](/guide/stem-gye) dan [卯 (Arnab)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-jin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 甲辰",
    "summary": "Cara Saju-Link membaca pilar hari 甲辰 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "甲辰 ialah pilar hari nombor 41 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 甲辰, batang harinya ialah 甲 (Kayu, Yang) dan cabang harinya ialah 辰 (Naga). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 41."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 甲 \"Kayu Yang (甲)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Pokok tinggi yang tumbuh lurus. Sekali arahnya ditetapkan ia tidak goyah, dan ia lebih rela bertahan daripada tunduk.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 辰 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 甲, batang yang disimpan oleh 辰 adalah seperti berikut. Batang utama (戊) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 甲辰",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 甲"
              ],
              "rows": [
                [
                  "Kayu Yin (乙)",
                  "sisa (餘氣)",
                  "{hidJinYeo}",
                  "Pesaing (劫財)"
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
                  "Rezeki Mendadak (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 甲 sebagai batang hari, Harta Tetap ialah 己 dan Kewibawaan ialah 辛."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 己. 己 tidak disimpan di dalam 辰."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 辛. 辛 tidak disimpan di dalam 辰."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [癸卯](/guide/pillar-gye-myo) dan yang seterusnya ialah [乙巳](/guide/pillar-eul-sa)."
          },
          {
            "p": "Ia terdiri daripada [Kayu Yang (甲)](/guide/stem-gap) dan [辰 (Naga)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-sa": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 乙巳",
    "summary": "Cara Saju-Link membaca pilar hari 乙巳 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "乙巳 ialah pilar hari nombor 42 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 乙巳, batang harinya ialah 乙 (Kayu, Yin) dan cabang harinya ialah 巳 (Ular). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 42."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 乙 \"Kayu Yin (乙)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Pokok menjalar — rumput yang lentur. Ia melentur mengikut keadaan untuk terus bergerak, dan ia tidak patah.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 巳 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 乙, batang yang disimpan oleh 巳 adalah seperti berikut. Batang utama (丙) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 乙巳",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 乙"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidSaYeo}",
                  "Harta Tetap (正財)"
                ],
                [
                  "Logam Yang (庚)",
                  "tengah (中氣)",
                  "{hidSaJung}",
                  "Kewibawaan (正官)"
                ],
                [
                  "Api Yang (丙)",
                  "utama (本氣)",
                  "{hidSaBon}",
                  "Pengocak (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 乙 sebagai batang hari, Harta Tetap ialah 戊 dan Kewibawaan ialah 庚."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 戊. 戊 disimpan di dalam 巳 (sisa (餘氣))."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 庚. 庚 disimpan di dalam 巳 (tengah (中氣))."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [甲辰](/guide/pillar-gap-jin) dan yang seterusnya ialah [丙午](/guide/pillar-byeong-o)."
          },
          {
            "p": "Ia terdiri daripada [Kayu Yin (乙)](/guide/stem-eul) dan [巳 (Ular)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-o": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 丙午",
    "summary": "Cara Saju-Link membaca pilar hari 丙午 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "丙午 ialah pilar hari nombor 43 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 丙午, batang harinya ialah 丙 (Api, Yang) dan cabang harinya ialah 午 (Kuda). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 43."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 丙 \"Api Yang (丙)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Matahari tengah hari. Perasaan terpampang jelas, ruang menjadi terang, dan melangkah ke hadapan datang secara semula jadi.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 午 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 丙, batang yang disimpan oleh 午 adalah seperti berikut. Batang utama (丁) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 丙午",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 丙"
              ],
              "rows": [
                [
                  "Api Yang (丙)",
                  "sisa (餘氣)",
                  "{hidOYeo}",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Tanah Yin (己)",
                  "tengah (中氣)",
                  "{hidOJung}",
                  "Pengocak (傷官)"
                ],
                [
                  "Api Yin (丁)",
                  "utama (本氣)",
                  "{hidOBon}",
                  "Pesaing (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 丙 sebagai batang hari, Harta Tetap ialah 辛 dan Kewibawaan ialah 癸."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 辛. 辛 tidak disimpan di dalam 午."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 癸. 癸 tidak disimpan di dalam 午."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [乙巳](/guide/pillar-eul-sa) dan yang seterusnya ialah [丁未](/guide/pillar-jeong-mi)."
          },
          {
            "p": "Ia terdiri daripada [Api Yang (丙)](/guide/stem-byeong) dan [午 (Kuda)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-mi": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 丁未",
    "summary": "Cara Saju-Link membaca pilar hari 丁未 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "丁未 ialah pilar hari nombor 44 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 丁未, batang harinya ialah 丁 (Api, Yin) dan cabang harinya ialah 未 (Biri-biri). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 44."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 丁 \"Api Yin (丁)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Cahaya lilin. Ia menyala perlahan dan lama, serta menghangatkan yang terdekat dahulu.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 未 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 丁, batang yang disimpan oleh 未 adalah seperti berikut. Batang utama (己) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 丁未",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 丁"
              ],
              "rows": [
                [
                  "Api Yin (丁)",
                  "sisa (餘氣)",
                  "{hidMiYeo}",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Kayu Yin (乙)",
                  "tengah (中氣)",
                  "{hidMiJung}",
                  "Sokongan Luar Biasa (偏印)"
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
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 丁 sebagai batang hari, Harta Tetap ialah 庚 dan Kewibawaan ialah 壬."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 庚. 庚 tidak disimpan di dalam 未."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 壬. 壬 tidak disimpan di dalam 未."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [丙午](/guide/pillar-byeong-o) dan yang seterusnya ialah [戊申](/guide/pillar-mu-sin)."
          },
          {
            "p": "Ia terdiri daripada [Api Yin (丁)](/guide/stem-jeong) dan [未 (Biri-biri)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 戊申",
    "summary": "Cara Saju-Link membaca pilar hari 戊申 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "戊申 ialah pilar hari nombor 45 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 戊申, batang harinya ialah 戊 (Tanah, Yang) dan cabang harinya ialah 申 (Monyet). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 45."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 戊 \"Tanah Yang (戊)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Tanah lapang dan gunung. Sukar digoyah dan mudah disandari, walaupun lambat mengubah keputusan yang sudah dibuat.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 申 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 戊, batang yang disimpan oleh 申 adalah seperti berikut. Batang utama (庚) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 戊申",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 戊"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidSinYeo}",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Air Yang (壬)",
                  "tengah (中氣)",
                  "{hidSinJung}",
                  "Rezeki Mendadak (偏財)"
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
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 戊 sebagai batang hari, Harta Tetap ialah 癸 dan Kewibawaan ialah 乙."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 癸. 癸 tidak disimpan di dalam 申."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 乙. 乙 tidak disimpan di dalam 申."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [丁未](/guide/pillar-jeong-mi) dan yang seterusnya ialah [己酉](/guide/pillar-gi-yu)."
          },
          {
            "p": "Ia terdiri daripada [Tanah Yang (戊)](/guide/stem-mu) dan [申 (Monyet)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-yu": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 己酉",
    "summary": "Cara Saju-Link membaca pilar hari 己酉 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "己酉 ialah pilar hari nombor 46 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 己酉, batang harinya ialah 己 (Tanah, Yin) dan cabang harinya ialah 酉 (Ayam). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 46."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 己 \"Tanah Yin (己)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Tanah ladang. Ia menerima apa sahaja yang datang dan membesarkannya, memelihara dan bukan mempamerkan.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 酉 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 己, batang yang disimpan oleh 酉 adalah seperti berikut. Batang utama (辛) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 己酉",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 己"
              ],
              "rows": [
                [
                  "Logam Yang (庚)",
                  "sisa (餘氣)",
                  "{hidYuYeo}",
                  "Pengocak (傷官)"
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
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 己 sebagai batang hari, Harta Tetap ialah 壬 dan Kewibawaan ialah 甲."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 壬. 壬 tidak disimpan di dalam 酉."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 甲. 甲 tidak disimpan di dalam 酉."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [戊申](/guide/pillar-mu-sin) dan yang seterusnya ialah [庚戌](/guide/pillar-gyeong-sul)."
          },
          {
            "p": "Ia terdiri daripada [Tanah Yin (己)](/guide/stem-gi) dan [酉 (Ayam)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sul": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 庚戌",
    "summary": "Cara Saju-Link membaca pilar hari 庚戌 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "庚戌 ialah pilar hari nombor 47 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 庚戌, batang harinya ialah 庚 (Logam, Yang) dan cabang harinya ialah 戌 (Anjing). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 47."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 庚 \"Logam Yang (庚)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Besi yang belum ditempa. Tegas dan jelas, dengan sedikit sahaja kesabaran terhadap perkara yang tergantung.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 戌 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 庚, batang yang disimpan oleh 戌 adalah seperti berikut. Batang utama (戊) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 庚戌",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 庚"
              ],
              "rows": [
                [
                  "Logam Yin (辛)",
                  "sisa (餘氣)",
                  "{hidSulYeo}",
                  "Pesaing (劫財)"
                ],
                [
                  "Api Yin (丁)",
                  "tengah (中氣)",
                  "{hidSulJung}",
                  "Kewibawaan (正官)"
                ],
                [
                  "Tanah Yang (戊)",
                  "utama (本氣)",
                  "{hidSulBon}",
                  "Sokongan Luar Biasa (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 庚 sebagai batang hari, Harta Tetap ialah 乙 dan Kewibawaan ialah 丁."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 乙. 乙 tidak disimpan di dalam 戌."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 丁. 丁 disimpan di dalam 戌 (tengah (中氣))."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [己酉](/guide/pillar-gi-yu) dan yang seterusnya ialah [辛亥](/guide/pillar-sin-hae)."
          },
          {
            "p": "Ia terdiri daripada [Logam Yang (庚)](/guide/stem-gyeong) dan [戌 (Anjing)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-hae": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 辛亥",
    "summary": "Cara Saju-Link membaca pilar hari 辛亥 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "辛亥 ialah pilar hari nombor 48 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 辛亥, batang harinya ialah 辛 (Logam, Yin) dan cabang harinya ialah 亥 (Babi). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 48."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 辛 \"Logam Yin (辛)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Permata yang telah diasah. Cita rasa halus dan piawaian tinggi; kerja sambil lewa sukar dibiarkan.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 亥 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 辛, batang yang disimpan oleh 亥 adalah seperti berikut. Batang utama (壬) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 辛亥",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 辛"
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
                  "Harta Tetap (正財)"
                ],
                [
                  "Air Yang (壬)",
                  "utama (本氣)",
                  "{hidHaeBon}",
                  "Pengocak (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 辛 sebagai batang hari, Harta Tetap ialah 甲 dan Kewibawaan ialah 丙."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 甲. 甲 disimpan di dalam 亥 (tengah (中氣))."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 丙. 丙 tidak disimpan di dalam 亥."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [庚戌](/guide/pillar-gyeong-sul) dan yang seterusnya ialah [壬子](/guide/pillar-im-ja)."
          },
          {
            "p": "Ia terdiri daripada [Logam Yin (辛)](/guide/stem-sin) dan [亥 (Babi)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-ja": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 壬子",
    "summary": "Cara Saju-Link membaca pilar hari 壬子 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "壬子 ialah pilar hari nombor 49 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 壬子, batang harinya ialah 壬 (Air, Yang) dan cabang harinya ialah 子 (Tikus). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 49."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 壬 \"Air Yang (壬)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Sungai dan laut. Luas pandangannya, dengan mata yang membaca ke mana sesuatu mengalir.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 子 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 壬, batang yang disimpan oleh 子 adalah seperti berikut. Batang utama (癸) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 壬子",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 壬"
              ],
              "rows": [
                [
                  "Air Yang (壬)",
                  "sisa (餘氣)",
                  "{hidJaYeo}",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Air Yin (癸)",
                  "utama (本氣)",
                  "{hidJaBon}",
                  "Pesaing (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 壬 sebagai batang hari, Harta Tetap ialah 丁 dan Kewibawaan ialah 己."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 丁. 丁 tidak disimpan di dalam 子."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 己. 己 tidak disimpan di dalam 子."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [辛亥](/guide/pillar-sin-hae) dan yang seterusnya ialah [癸丑](/guide/pillar-gye-chuk)."
          },
          {
            "p": "Ia terdiri daripada [Air Yang (壬)](/guide/stem-im) dan [子 (Tikus)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-chuk": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 癸丑",
    "summary": "Cara Saju-Link membaca pilar hari 癸丑 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "癸丑 ialah pilar hari nombor 50 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 癸丑, batang harinya ialah 癸 (Air, Yin) dan cabang harinya ialah 丑 (Lembu). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 50."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 癸 \"Air Yin (癸)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Embun dan hujan. Ia meresap senyap dan membaca suasana sebelum kata-kata.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 丑 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 癸, batang yang disimpan oleh 丑 adalah seperti berikut. Batang utama (己) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 癸丑",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 癸"
              ],
              "rows": [
                [
                  "Air Yin (癸)",
                  "sisa (餘氣)",
                  "{hidChukYeo}",
                  "Rakan Sebahu (比肩)"
                ],
                [
                  "Logam Yin (辛)",
                  "tengah (中氣)",
                  "{hidChukJung}",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Tanah Yin (己)",
                  "utama (本氣)",
                  "{hidChukBon}",
                  "Pencabar (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 癸 sebagai batang hari, Harta Tetap ialah 丙 dan Kewibawaan ialah 戊."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 丙. 丙 tidak disimpan di dalam 丑."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 戊. 戊 tidak disimpan di dalam 丑."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [壬子](/guide/pillar-im-ja) dan yang seterusnya ialah [甲寅](/guide/pillar-gap-in)."
          },
          {
            "p": "Ia terdiri daripada [Air Yin (癸)](/guide/stem-gye) dan [丑 (Lembu)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-in": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 甲寅",
    "summary": "Cara Saju-Link membaca pilar hari 甲寅 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "甲寅 ialah pilar hari nombor 51 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 甲寅, batang harinya ialah 甲 (Kayu, Yang) dan cabang harinya ialah 寅 (Harimau). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 51."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 甲 \"Kayu Yang (甲)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Pokok tinggi yang tumbuh lurus. Sekali arahnya ditetapkan ia tidak goyah, dan ia lebih rela bertahan daripada tunduk.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 寅 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 甲, batang yang disimpan oleh 寅 adalah seperti berikut. Batang utama (甲) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 甲寅",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 甲"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidInYeo}",
                  "Rezeki Mendadak (偏財)"
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
                  "Rakan Sebahu (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 甲 sebagai batang hari, Harta Tetap ialah 己 dan Kewibawaan ialah 辛."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 己. 己 tidak disimpan di dalam 寅."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 辛. 辛 tidak disimpan di dalam 寅."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [癸丑](/guide/pillar-gye-chuk) dan yang seterusnya ialah [乙卯](/guide/pillar-eul-myo)."
          },
          {
            "p": "Ia terdiri daripada [Kayu Yang (甲)](/guide/stem-gap) dan [寅 (Harimau)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-myo": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 乙卯",
    "summary": "Cara Saju-Link membaca pilar hari 乙卯 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "乙卯 ialah pilar hari nombor 52 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 乙卯, batang harinya ialah 乙 (Kayu, Yin) dan cabang harinya ialah 卯 (Arnab). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 52."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 乙 \"Kayu Yin (乙)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Pokok menjalar — rumput yang lentur. Ia melentur mengikut keadaan untuk terus bergerak, dan ia tidak patah.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 卯 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 乙, batang yang disimpan oleh 卯 adalah seperti berikut. Batang utama (乙) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 乙卯",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 乙"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "sisa (餘氣)",
                  "{hidMyoYeo}",
                  "Pesaing (劫財)"
                ],
                [
                  "Kayu Yin (乙)",
                  "utama (本氣)",
                  "{hidMyoBon}",
                  "Rakan Sebahu (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 乙 sebagai batang hari, Harta Tetap ialah 戊 dan Kewibawaan ialah 庚."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 戊. 戊 tidak disimpan di dalam 卯."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 庚. 庚 tidak disimpan di dalam 卯."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [甲寅](/guide/pillar-gap-in) dan yang seterusnya ialah [丙辰](/guide/pillar-byeong-jin)."
          },
          {
            "p": "Ia terdiri daripada [Kayu Yin (乙)](/guide/stem-eul) dan [卯 (Arnab)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-jin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 丙辰",
    "summary": "Cara Saju-Link membaca pilar hari 丙辰 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "丙辰 ialah pilar hari nombor 53 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 丙辰, batang harinya ialah 丙 (Api, Yang) dan cabang harinya ialah 辰 (Naga). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 53."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 丙 \"Api Yang (丙)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Matahari tengah hari. Perasaan terpampang jelas, ruang menjadi terang, dan melangkah ke hadapan datang secara semula jadi.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 辰 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 丙, batang yang disimpan oleh 辰 adalah seperti berikut. Batang utama (戊) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 丙辰",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 丙"
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
                  "Kewibawaan (正官)"
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
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 丙 sebagai batang hari, Harta Tetap ialah 辛 dan Kewibawaan ialah 癸."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 辛. 辛 tidak disimpan di dalam 辰."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 癸. 癸 disimpan di dalam 辰 (tengah (中氣))."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [乙卯](/guide/pillar-eul-myo) dan yang seterusnya ialah [丁巳](/guide/pillar-jeong-sa)."
          },
          {
            "p": "Ia terdiri daripada [Api Yang (丙)](/guide/stem-byeong) dan [辰 (Naga)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-sa": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 丁巳",
    "summary": "Cara Saju-Link membaca pilar hari 丁巳 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "丁巳 ialah pilar hari nombor 54 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 丁巳, batang harinya ialah 丁 (Api, Yin) dan cabang harinya ialah 巳 (Ular). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 54."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 丁 \"Api Yin (丁)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Cahaya lilin. Ia menyala perlahan dan lama, serta menghangatkan yang terdekat dahulu.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 巳 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 丁, batang yang disimpan oleh 巳 adalah seperti berikut. Batang utama (丙) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 丁巳",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 丁"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidSaYeo}",
                  "Pengocak (傷官)"
                ],
                [
                  "Logam Yang (庚)",
                  "tengah (中氣)",
                  "{hidSaJung}",
                  "Harta Tetap (正財)"
                ],
                [
                  "Api Yang (丙)",
                  "utama (本氣)",
                  "{hidSaBon}",
                  "Pesaing (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 丁 sebagai batang hari, Harta Tetap ialah 庚 dan Kewibawaan ialah 壬."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 庚. 庚 disimpan di dalam 巳 (tengah (中氣))."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 壬. 壬 tidak disimpan di dalam 巳."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [丙辰](/guide/pillar-byeong-jin) dan yang seterusnya ialah [戊午](/guide/pillar-mu-o)."
          },
          {
            "p": "Ia terdiri daripada [Api Yin (丁)](/guide/stem-jeong) dan [巳 (Ular)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-o": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 戊午",
    "summary": "Cara Saju-Link membaca pilar hari 戊午 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "戊午 ialah pilar hari nombor 55 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 戊午, batang harinya ialah 戊 (Tanah, Yang) dan cabang harinya ialah 午 (Kuda). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 55."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 戊 \"Tanah Yang (戊)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Tanah lapang dan gunung. Sukar digoyah dan mudah disandari, walaupun lambat mengubah keputusan yang sudah dibuat.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 午 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 戊, batang yang disimpan oleh 午 adalah seperti berikut. Batang utama (丁) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 戊午",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 戊"
              ],
              "rows": [
                [
                  "Api Yang (丙)",
                  "sisa (餘氣)",
                  "{hidOYeo}",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Tanah Yin (己)",
                  "tengah (中氣)",
                  "{hidOJung}",
                  "Pesaing (劫財)"
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
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 戊 sebagai batang hari, Harta Tetap ialah 癸 dan Kewibawaan ialah 乙."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 癸. 癸 tidak disimpan di dalam 午."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 乙. 乙 tidak disimpan di dalam 午."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [丁巳](/guide/pillar-jeong-sa) dan yang seterusnya ialah [己未](/guide/pillar-gi-mi)."
          },
          {
            "p": "Ia terdiri daripada [Tanah Yang (戊)](/guide/stem-mu) dan [午 (Kuda)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-mi": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 己未",
    "summary": "Cara Saju-Link membaca pilar hari 己未 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "己未 ialah pilar hari nombor 56 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 己未, batang harinya ialah 己 (Tanah, Yin) dan cabang harinya ialah 未 (Biri-biri). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 56."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 己 \"Tanah Yin (己)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Tanah ladang. Ia menerima apa sahaja yang datang dan membesarkannya, memelihara dan bukan mempamerkan.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 未 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 己, batang yang disimpan oleh 未 adalah seperti berikut. Batang utama (己) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 己未",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 己"
              ],
              "rows": [
                [
                  "Api Yin (丁)",
                  "sisa (餘氣)",
                  "{hidMiYeo}",
                  "Sokongan Luar Biasa (偏印)"
                ],
                [
                  "Kayu Yin (乙)",
                  "tengah (中氣)",
                  "{hidMiJung}",
                  "Pencabar (偏官)"
                ],
                [
                  "Tanah Yin (己)",
                  "utama (本氣)",
                  "{hidMiBon}",
                  "Rakan Sebahu (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 己 sebagai batang hari, Harta Tetap ialah 壬 dan Kewibawaan ialah 甲."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 壬. 壬 tidak disimpan di dalam 未."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 甲. 甲 tidak disimpan di dalam 未."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [戊午](/guide/pillar-mu-o) dan yang seterusnya ialah [庚申](/guide/pillar-gyeong-sin)."
          },
          {
            "p": "Ia terdiri daripada [Tanah Yin (己)](/guide/stem-gi) dan [未 (Biri-biri)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sin": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 庚申",
    "summary": "Cara Saju-Link membaca pilar hari 庚申 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "庚申 ialah pilar hari nombor 57 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 庚申, batang harinya ialah 庚 (Logam, Yang) dan cabang harinya ialah 申 (Monyet). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 57."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 庚 \"Logam Yang (庚)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Besi yang belum ditempa. Tegas dan jelas, dengan sedikit sahaja kesabaran terhadap perkara yang tergantung.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 申 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 庚, batang yang disimpan oleh 申 adalah seperti berikut. Batang utama (庚) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 庚申",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 庚"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidSinYeo}",
                  "Sokongan Luar Biasa (偏印)"
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
                  "Rakan Sebahu (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 庚 sebagai batang hari, Harta Tetap ialah 乙 dan Kewibawaan ialah 丁."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 乙. 乙 tidak disimpan di dalam 申."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 丁. 丁 tidak disimpan di dalam 申."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [己未](/guide/pillar-gi-mi) dan yang seterusnya ialah [辛酉](/guide/pillar-sin-yu)."
          },
          {
            "p": "Ia terdiri daripada [Logam Yang (庚)](/guide/stem-gyeong) dan [申 (Monyet)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-yu": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 辛酉",
    "summary": "Cara Saju-Link membaca pilar hari 辛酉 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "辛酉 ialah pilar hari nombor 58 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 辛酉, batang harinya ialah 辛 (Logam, Yin) dan cabang harinya ialah 酉 (Ayam). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 58."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 辛 \"Logam Yin (辛)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Permata yang telah diasah. Cita rasa halus dan piawaian tinggi; kerja sambil lewa sukar dibiarkan.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 酉 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 辛, batang yang disimpan oleh 酉 adalah seperti berikut. Batang utama (辛) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 辛酉",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 辛"
              ],
              "rows": [
                [
                  "Logam Yang (庚)",
                  "sisa (餘氣)",
                  "{hidYuYeo}",
                  "Pesaing (劫財)"
                ],
                [
                  "Logam Yin (辛)",
                  "utama (本氣)",
                  "{hidYuBon}",
                  "Rakan Sebahu (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 辛 sebagai batang hari, Harta Tetap ialah 甲 dan Kewibawaan ialah 丙."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 甲. 甲 tidak disimpan di dalam 酉."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 丙. 丙 tidak disimpan di dalam 酉."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [庚申](/guide/pillar-gyeong-sin) dan yang seterusnya ialah [壬戌](/guide/pillar-im-sul)."
          },
          {
            "p": "Ia terdiri daripada [Logam Yin (辛)](/guide/stem-sin) dan [酉 (Ayam)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sul": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 壬戌",
    "summary": "Cara Saju-Link membaca pilar hari 壬戌 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "壬戌 ialah pilar hari nombor 59 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 壬戌, batang harinya ialah 壬 (Air, Yang) dan cabang harinya ialah 戌 (Anjing). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 59."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 壬 \"Air Yang (壬)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Sungai dan laut. Luas pandangannya, dengan mata yang membaca ke mana sesuatu mengalir.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 戌 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 壬, batang yang disimpan oleh 戌 adalah seperti berikut. Batang utama (戊) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 壬戌",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 壬"
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
                  "Harta Tetap (正財)"
                ],
                [
                  "Tanah Yang (戊)",
                  "utama (本氣)",
                  "{hidSulBon}",
                  "Pencabar (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 壬 sebagai batang hari, Harta Tetap ialah 丁 dan Kewibawaan ialah 己."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 丁. 丁 disimpan di dalam 戌 (tengah (中氣))."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 己. 己 tidak disimpan di dalam 戌."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [辛酉](/guide/pillar-sin-yu) dan yang seterusnya ialah [癸亥](/guide/pillar-gye-hae)."
          },
          {
            "p": "Ia terdiri daripada [Air Yang (壬)](/guide/stem-im) dan [戌 (Anjing)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-hae": {
    "eyebrow": "Pilar hari",
    "title": "Pilar Hari 癸亥",
    "summary": "Cara Saju-Link membaca pilar hari 癸亥 — apakah batang yang disimpan oleh cabang hari terhadap batang hari — dipaparkan tepat seperti dalam peraturan pengiraannya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "癸亥 ialah pilar hari nombor 60 dalam kitaran enam puluh tahun",
        "blocks": [
          {
            "p": "Apabila batang-cabang hari kelahiran ialah 癸亥, batang harinya ialah 癸 (Air, Yin) dan cabang harinya ialah 亥 (Babi). Dalam kitaran enam puluh tahun, ia ialah gabungan nombor 60."
          },
          {
            "p": "Saju-Link memanggil orang yang batang harinya 癸 \"Air Yin (癸)\", dan baris yang dipaparkan oleh skrin keputusan ialah: \"Embun dan hujan. Ia meresap senyap dan membaca suasana sebelum kata-kata.\" Baris ini tiada kaitan dengan bacaan di bawah atau skor."
          }
        ]
      },
      {
        "title": "Apakah batang yang disimpan oleh cabang hari 亥 terhadap batang hari",
        "blocks": [
          {
            "p": "Cabang hari ialah kedudukan pasangan. Dibaca daripada batang hari 癸, batang yang disimpan oleh 亥 adalah seperti berikut. Batang utama (壬) ialah tenaga wakil cabang itu."
          },
          {
            "table": {
              "caption": "Batang tersembunyi cabang hari 癸亥",
              "head": [
                "Batang tersembunyi",
                "Kedudukan",
                "Bahagian",
                "Terhadap batang hari 癸"
              ],
              "rows": [
                [
                  "Tanah Yang (戊)",
                  "sisa (餘氣)",
                  "{hidHaeYeo}",
                  "Kewibawaan (正官)"
                ],
                [
                  "Kayu Yang (甲)",
                  "tengah (中氣)",
                  "{hidHaeJung}",
                  "Pengocak (傷官)"
                ],
                [
                  "Air Yang (壬)",
                  "utama (本氣)",
                  "{hidHaeBon}",
                  "Pesaing (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kedudukan pasangan dan pilar hari ini",
        "blocks": [
          {
            "p": "Myeongri tradisional membaca kedudukan pasangan sebagai Harta Tetap (正財) bagi lelaki dan Kewibawaan (正官) bagi wanita. Dengan 癸 sebagai batang hari, Harta Tetap ialah 丙 dan Kewibawaan ialah 戊."
          },
          {
            "p": "Bagi lelaki, kedudukan pasangan (Harta Tetap) ialah 丙. 丙 tidak disimpan di dalam 亥."
          },
          {
            "p": "Bagi wanita, kedudukan pasangan (Kewibawaan) ialah 戊. 戊 disimpan di dalam 亥 (sisa (餘氣))."
          }
        ]
      },
      {
        "title": "Pilar hari bersebelahan dan watak yang membentuknya",
        "blocks": [
          {
            "p": "Dalam kitaran enam puluh tahun, pilar hari sebelumnya ialah [壬戌](/guide/pillar-im-sul) dan yang seterusnya ialah [甲子](/guide/pillar-gap-ja)."
          },
          {
            "p": "Ia terdiri daripada [Air Yin (癸)](/guide/stem-gye) dan [亥 (Babi)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkara yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu pilar hari tidak menentukan seseorang atau sesuatu hubungan. Saju dibaca daripada bagaimana lapan watak empat pilar saling berkait.",
              "Bacaan kedudukan pasangan meneruskan peraturan myeongri tradisional, dan jika anda tidak menyatakan jantina, kedudukan ini tidak dibaca."
            ]
          }
        ]
      }
    ]
  },

  "guide/saju-letters": {
    "eyebrow": "Mulakan di sini",
    "title": "Batang Syurga, Cabang Bumi dan Pilar Hari — Cara Membaca Watak Saju",
    "summary": "Apakah lapan watak dalam Saju, dan apakah maksud batang syurga, cabang bumi dan pilar hari, dijelaskan dengan dua jadual yang mudah.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Saju ditulis dengan dua jenis watak",
        "blocks": [
          {
            "p": "Lapan watak Saju dibahagikan kepada watak atas dan watak bawah. Watak atas ialah satu daripada sepuluh **batang syurga (天干)**, dan watak bawah ialah satu daripada dua belas **cabang bumi (地支)**."
          },
          {
            "p": "Anggaplah batang syurga sebagai label untuk jenis tenaga dan cabang bumi sebagai label untuk masa dan tempat. Anda tidak perlu menghafalnya, sama seperti anda tidak menghafal nama hari dalam seminggu; cukup cari dalam jadual di bawah. Cara empat pilar menjadi lapan watak dijelaskan dalam [panduan carta kelahiran](/guide/natal-chart)."
          }
        ]
      },
      {
        "title": "Sepuluh batang syurga",
        "blocks": [
          {
            "p": "Terdapat sepuluh batang syurga. Lima elemen (Kayu, Api, Tanah, Logam, Air) masing-masing mempunyai dua batang, dan dalam setiap pasangan, yang pertama ialah Yang (陽) dan yang kedua ialah Yin (陰)."
          },
          {
            "table": {
              "caption": "Sepuluh batang syurga beserta elemen dan kekutuban",
              "head": [
                "Batang syurga",
                "Elemen dan kekutuban"
              ],
              "rows": [
                [
                  "Kayu Yang (甲)",
                  "Kayu Yang"
                ],
                [
                  "Kayu Yin (乙)",
                  "Kayu Yin"
                ],
                [
                  "Api Yang (丙)",
                  "Api Yang"
                ],
                [
                  "Api Yin (丁)",
                  "Api Yin"
                ],
                [
                  "Tanah Yang (戊)",
                  "Tanah Yang"
                ],
                [
                  "Tanah Yin (己)",
                  "Tanah Yin"
                ],
                [
                  "Logam Yang (庚)",
                  "Logam Yang"
                ],
                [
                  "Logam Yin (辛)",
                  "Logam Yin"
                ],
                [
                  "Air Yang (壬)",
                  "Air Yang"
                ],
                [
                  "Air Yin (癸)",
                  "Air Yin"
                ]
              ]
            }
          },
          {
            "p": "Batang syurga bagi hari kelahiran anda dipanggil **batang hari (日干)**, dan inilah watak yang merujuk kepada diri anda."
          }
        ]
      },
      {
        "title": "Dua belas cabang bumi",
        "blocks": [
          {
            "p": "Terdapat dua belas cabang bumi, dan setiap satu mempunyai seekor haiwan zodiak. Jadi, dua belas cabang bumi ialah tanda zodiak."
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
                  "Lembu"
                ],
                [
                  "寅",
                  "Harimau"
                ],
                [
                  "卯",
                  "Arnab"
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
          },
          {
            "p": "Sesuatu cabang bumi kelihatan seperti satu watak, tetapi di dalamnya tersimpan batang. Ini dipanggil **batang tersembunyi (支藏干)**. Batang yang manakah disimpan oleh sesuatu cabang, dan berapa banyak, dihuraikan dalam entri kamus bagi setiap cabang. Untuk cara haiwan zodiak ditentukan, lihat [panduan zodiak](/guide/zodiac)."
          }
        ]
      },
      {
        "title": "Pilar hari — sepasang batang dan cabang",
        "blocks": [
          {
            "p": "Setiap pilar Saju terdiri daripada dua watak: satu batang dipasangkan dengan satu cabang. Pilar bagi hari kelahiran anda ialah **Pilar Hari (日柱)**."
          },
          {
            "p": "Pasangkan batang dan cabang mengikut urutan, dan anda mendapat **enam puluh** gabungan, daripada 甲子, 乙丑 dan 丙寅 sehingga 癸亥. Kitaran ini dipanggil kitaran enam puluh. Jumlahnya enam puluh, bukan 10 × 12 = 120, kerana batang Yang hanya dipasangkan dengan cabang Yang, dan batang Yin hanya dengan cabang Yin."
          },
          {
            "p": "Watak atas pilar hari ialah batang hari yang anda temui di atas. Entri yang menerangkan setiap pilar satu per satu terdapat dalam kamus batang, cabang dan pilar hari di bahagian bawah [senarai panduan](/guide)."
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "Sepuluh Dewa",
    "title": "Sepuluh Dewa — Sepuluh Posisi Dalam Saju Saya",
    "summary": "Berdasarkan tiang hari, watak-watak yang tinggal dibahagikan kepada sepuluh nama. Ia membincangkan sebab-sebab untuk membezakan antara kekayaan biasa dan kekayaan sampingan, walaupun mereka adalah elemen kekayaan yang sama.",
    "backLabel": "Asas Pengiraan",
    "sections": [
      {
        "title": "Tiang Hari Adalah Diri Sendiri",
        "blocks": [
          {
            "p": "Antara lapan watak dalam saju, **tiang hari** (batang langit pada hari kelahiran) merujuk kepada diri sendiri. Tujuh watak yang tinggal dibaca sebagai persekitaran di mana tiang hari itu wujud."
          },
          {
            "p": "**Sepuluh Dewa** (十神) adalah sepuluh bahagian tentang bagaimana tiang hari memahami watak-watak lain. Tenaga yang memelihara saya adalah Sumber, tenaga yang serupa dengan saya adalah Rakan, tenaga yang saya lahirkan adalah Makanan dan Kekayaan, tenaga yang menekan saya adalah Jawatan Rasmi, dan tenaga yang saya tekan adalah Kekayaan — lima kategori ini dibahagikan lagi kepada yin dan yang, membentuk sepuluh."
          }
        ]
      },
      {
        "title": "Apa yang Tujuh Watak yang Tinggal Bererti untuk Saya",
        "blocks": [
          {
            "p": "Setelah tiang hari ditentukan, watak-watak yang tinggal dalam carta kelahiran masing-masing menerima nama. Tenaga yang melahirkan saya, tenaga yang serupa dengan saya, tenaga yang saya lahirkan, tenaga yang menekan saya, dan tenaga yang saya tekan — lima cabang ini dibahagikan lagi kepada **sepuluh** melalui yin dan yang. Ini adalah Sepuluh Dewa."
          },
          {
            "p": "Oleh itu, Sepuluh Dewa merujuk bukan kepada hubungan dengan orang lain tetapi kepada **posisi dalam diri saya**. Posisi mana yang tebal atau tipis menunjukkan kecenderungan dan cara hidup saya."
          }
        ]
      },
      {
        "title": "Mengapa kita membaca ini melalui Sepuluh Dewa dan bukannya tiga hubungan elemen",
        "blocks": [
          {
            "p": "Terdapat juga kaedah untuk melihat hubungan batang hari hanya melalui tiga aspek dari **lima elemen** (menyokong, sama, dan menentang). Ia mudah, tetapi **yin dan yang hilang.** 甲 (kayuan yang aktif) dan 乙 (kayuan yang pasif) menjadi sama seperti 甲, yang merupakan representasi 'kesamaan', dan hubungan yang bertentangan digabungkan menjadi satu skor tanpa arah atau yin dan yang."
          },
          {
            "p": "Posisi pasangan mesti dinilai mengikut **Sepuluh Dewa** dari segi yin dan yang. Jika item yang dilihat melalui **lima elemen** dicampur dengan item yang dilihat melalui **Sepuluh Dewa** dalam satu enjin, akan ada dua standard untuk dua watak yang sama. Oleh itu, kami menyatukannya di bawah **Sepuluh Dewa**."
          }
        ]
      },
      {
        "title": "Posisi pasangan adalah Kekayaan yang Betul dan Pegawai yang Betul",
        "blocks": [
          {
            "p": "Ramalan tradisional melihat posisi pasangan secara berbeza berdasarkan jantina. Bagi lelaki, ia adalah **Kekayaan yang Betul (正財)**, dan bagi wanita, ia adalah **Pegawai yang Betul (正官)**. Walaupun mereka adalah elemen kekayaan yang sama, hanya Kekayaan yang Betul yang tidak selari dalam yin dan yang dianggap sebagai posisi pasangan, sementara Kekayaan Tidak Langsung dibaca bukan sebagai pasangan tetapi dari segi aktiviti dan kekayaan."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jika anda tidak menentukan jantina, posisi ini akan diabaikan",
        "blocks": [
          {
            "p": "Ini kerana tidak dapat ditentukan pihak mana, Kekayaan yang Betul atau Pegawai yang Betul, yang harus dianggap sebagai posisi pasangan. Daripada meneka untuk mengisi nilai yang hilang, kami membaca item yang tinggal tanpa yang satu itu."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "Ramalan hari ini",
    "title": "Bagaimana ramalan hari ini keluar?",
    "summary": "Batang hari hari ini dibandingkan dengan carta natal untuk mendapatkan skor. Tiga belas hubungan tekan-dan-sokong dan tujuh hubungan **cabang bumi**, bersama dengan semua dua puluh item dan penambahan serta pengurangan masing-masing, didedahkan sepenuhnya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Hari ini, kami juga menentukannya dengan cara yang sama seperti lapan watak",
        "blocks": [
          {
            "p": "Setiap hari mempunyai **batang hari hari ini (日辰)**. Menggunakan kaedah yang sama seperti menubuhkan batang hari carta natal, hari ini juga mempunyai satu **batang syurga** dan satu **cabang bumi** yang dilampirkan. Ramalan hari ini adalah tentang membandingkan dua watak tersebut dengan carta natal."
          },
          {
            "p": "Skor asas adalah **{baseScore} mata**. Item di bawah ditambah dan ditolak, dan akhirnya, ia terhad antara {clampLow} mata dan {clampHigh} mata — kami tidak menyebut 0 mata atau 100 mata."
          }
        ]
      },
      {
        "title": "① Adakah tenaga hari ini yang saya perlukan?",
        "blocks": [
          {
            "p": "Ini adalah posisi yang paling penting. Kami memeriksa sama ada tenaga hari ini sesuai dengan 'tenaga yang diperlukan sekarang' yang ditentukan oleh [elemen penyeimbang](/guide/yongsin)."
          },
          {
            "table": {
              "head": [
                "Tenaga hari ini adalah",
                "Penambahan/Pengurangan"
              ],
              "rows": [
                [
                  "Tenaga yang diperlukan sekarang",
                  "{todayIsYongsin}"
                ],
                [
                  "Ia menghasilkan tenaga yang diperlukan",
                  "{todayGeneratesYongsin}"
                ],
                [
                  "Ia menekan tenaga yang diperlukan",
                  "{todayControlsYongsin}"
                ],
                [
                  "Ia menekan lebih pada sisi yang sudah melimpah",
                  "{todayIsGisin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jangan anggap elemen yang merugikan sebagai 'semua kecuali elemen penyeimbang'",
        "blocks": [
          {
            "p": "Jika anda melakukan itu, tenaga yang menghasilkan elemen penyeimbang dan tenaga yang menekan elemen penyeimbang menjadi buruk, dan dua baris terakhir dalam jadual di atas menjadi tidak dapat dibezakan. Hanya tenaga yang **menekan lebih keras ke arah yang bertentangan** mengikut maksud tekan-dan-sokong dilihat sebagai elemen yang merugikan."
          }
        ]
      },
      {
        "title": "② Hubungan antara batang syurga hari ini dan batang hari",
        "blocks": [
          {
            "p": "Hubungan menyokong dan menentang dari **lima elemen** diterapkan secara langsung antara batang hari dan batang syurga hari ini."
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
                  "Hari ini dan saya adalah tenaga yang sama",
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
        "title": "③ Cabang bumi hari ini bertemu dengan cabang bumi carta natal",
        "blocks": [
          {
            "p": "Cabang bumi hari ini dibandingkan dengan cabang bumi carta natal. Jadual hubungan itu sendiri terdapat dalam [hubungan cabang bumi](/guide/branches)."
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
                  "ketidakselarasan yang tenang (怨嗔)",
                  "{branchWonjin}"
                ],
                [
                  "pertentangan (沖)",
                  "{branchChung}"
                ]
              ]
            }
          },
          {
            "p": "Apabila terdapat banyak tiang, banyak hubungan timbul. Semua ditambahkan, tetapi keseluruhan item ini terhad kepada **±{branchMaxAbs} mata** — ini untuk mengelakkan satu hubungan cabang bumi daripada menentukan keseluruhan hari."
          }
        ]
      },
      {
        "title": "④ Pembetulan Berdasarkan Kekuatan",
        "blocks": [
          {
            "p": "Walaupun dengan tenaga yang sama, makna berbeza bagi tiang hari yang kuat dan tiang hari yang lemah. Oleh itu, kami membuat satu penyesuaian terakhir."
          },
          {
            "table": {
              "head": [
                "Situasi",
                "Penyesuaian"
              ],
              "rows": [
                [
                  "Tiang hari lemah tetapi hari ini menyokong mereka",
                  "{weakTodayHelps}"
                ],
                [
                  "Tiang hari kuat tetapi hari ini mengurangkan beban dengan sewajarnya",
                  "{strongTodayDrains}"
                ],
                [
                  "Tiang hari kuat tetapi hari ini menebalkan sokongan",
                  "{strongTodayHelps}"
                ],
                [
                  "Tiang hari lemah tetapi hari ini menambah beban",
                  "{weakTodayBurdens}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Skor Mengikut Gred dan Kawasan",
        "blocks": [
          {
            "p": "Jumlah skor dibahagikan kepada lima gred."
          },
          {
            "table": {
              "head": [
                "Skor",
                "Gred"
              ],
              "rows": [
                [
                  "{gradeDaegilMin} mata atau lebih",
                  "Nasib Baik (大吉)"
                ],
                [
                  "{gradeGilMin} mata atau lebih",
                  "Nasib (吉)"
                ],
                [
                  "{gradePyeongMin} mata atau lebih",
                  "Purata (平)"
                ],
                [
                  "{gradeJuuiMin} mata atau lebih",
                  "Berhati-hati (注意)"
                ],
                [
                  "{gradeJosimMin} mata atau lebih",
                  "Berhati-hati (操心)"
                ]
              ]
            }
          },
          {
            "p": "Empat kawasan kekayaan, cinta, kerjaya, dan kesihatan mewarisi {overallShare} daripada jumlah skor, sementara yang lain dibahagikan mengikut Sepuluh Dewa dan hubungan cabang bumi yang berkaitan dengan kawasan tersebut. Oleh itu, walaupun jumlah skor adalah sama, nombor mengikut kawasan berbeza dari orang ke orang."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Nombor di atas dibaca dari tetapan enjin. Jika peraturan diubah, dokumen ini juga akan berubah, dan sebarang perubahan pemindahan skor akan disiarkan terlebih dahulu dalam [Notis](/notice)."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Jadual Hubungan",
    "title": "Hubungan Cabang Bumi — Gabungan, Pertentangan, dan Ketidakselarasan",
    "summary": "Ini adalah jadual hubungan yang menunjukkan bagaimana tiang hari hari ini berinteraksi dengan carta kelahiran. Ia mendedahkan apa setiap gabungan, pertentangan, dan ketidakselarasan serta berapa banyak mata yang mereka miliki.",
    "backLabel": "Asas Pengiraan",
    "sections": [
      {
        "title": "Cabang Bumi adalah Dua Belas Watak",
        "blocks": [
          {
            "p": "Dua belas cabang bumi (十二支) adalah 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Tanda zodiak yang dikenali umum — Tikus, Lembu, Harimau, Arnab, Naga, Ular, Kuda, Kambing, Monyet, Ayam, Anjing, Babi — masing-masing dilampirkan pada salah satu daripada dua belas watak ini."
          },
          {
            "figure": "branch-wheel",
            "caption": "Apabila dua belas watak disusun dalam bulatan, hubungan menjadi jelas. Pertentangan (沖) sentiasa berhadapan antara satu sama lain, sementara enam harmoni dan ketidakselarasan adalah pasangan yang lebih dekat. Garis-garis ini tidak ditulis dalam teks tetapi diperoleh secara langsung dari peraturan pengiraan.",
            "labels": {
              "alt": "Satu diagram yang menunjukkan dua belas cabang bumi disusun dalam bulatan dengan garis menghubungkan enam harmoni, pertentangan, dan ketidakselarasan.",
              "yukhap": "enam harmoni",
              "chung": "Pertentangan",
              "wonjin": "Ketidakselarasan",
              "rat": "Tikus",
              "ox": "Lembu",
              "tiger": "Harimau",
              "rabbit": "Arnab",
              "dragon": "Naga",
              "snake": "ular",
              "horse": "kuda",
              "goat": "kambing",
              "monkey": "monyet",
              "rooster": "ayam",
              "dog": "anjing",
              "pig": "babi"
            }
          },
          {
            "p": "Dalam saju, setiap tiang mempunyai satu cabang bumi. **Bacaan hari ini** ditentukan dengan memadankan **cabang hari** dengan empat cabang carta kelahiran menggunakan jadual hubungan di bawah."
          }
        ]
      },
      {
        "title": "Jadual Hubungan Keseluruhan",
        "blocks": [
          {
            "table": {
              "caption": "Mengikut urutan skor tertinggi. Ini adalah nilai yang digunakan oleh Saju-Link.",
              "head": [
                "Hubungan",
                "Pasangan Berkaitan",
                "Maksud",
                "Skor"
              ],
              "rows": [
                [
                  "triad (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Apabila ketiga-tiga watak berkumpul, mereka membentuk satu pembentukan elemen lengkap (局). Ini dianggap sebagai kombinasi yang paling kuat.",
                  "{scoreSamhap}"
                ],
                [
                  "six harmony (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Pasangan yang menarik antara satu sama lain. Ini adalah kombinasi yang paling biasa kerana ia terdiri daripada hanya dua watak.",
                  "{scoreYukhap}"
                ],
                [
                  "half triad (半合)",
                  "Dua watak yang termasuk salah satu daripada watak diraja (子·酉·午·卯) dari triad",
                  "Satu setengah triad yang termasuk watak yang menjadi pusat kepada pembentukan. Ia tidak membentuk pembentukan elemen lengkap dengan hanya dua watak, menjadikannya lebih rendah daripada triad.",
                  "{scoreBanhap}"
                ],
                [
                  "Cabang yang Sama",
                  "子子 · 丑丑 …",
                  "Watak yang sama. Ini bermakna mereka menyerupai satu sama lain tetapi tidak menunjukkan tarikan, jadi mereka diletakkan di tengah.",
                  "{scoreSame}"
                ],
                [
                  "Tiada Hubungan",
                  "Pasangan yang tidak tergolong dalam mana-mana kategori di atas atau di bawah",
                  "Kombinasi yang tiada hubungan khas. Ini berfungsi sebagai titik rujukan.",
                  "{scoreNeutral}"
                ],
                [
                  "discord tenang (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Pasangan yang tidak dapat berpisah walaupun mereka tidak suka. Mereka kelihatan tenang di permukaan tetapi dianggap bertahan lama.",
                  "{scoreWonjin}"
                ],
                [
                  "Clash (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Pasangan yang bertembung secara langsung. Ini adalah enam pasangan yang saling berhadapan.",
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
            "p": "Satu triad memerlukan ketiga-tiga watak untuk hadir. Oleh kerana terdapat empat cabang bumi dalam carta kelahiran, adalah mungkin untuk cabang hari bergabung dengan mereka, menghasilkan satu triad — pada ketika itu, ia menerima skor {scoreSamhap}. Jika hanya dua watak terlibat, ia adalah satu setengah triad."
          }
        ]
      },
      {
        "kind": "note",
        "title": "setengah triad Memerlukan Watak Diraja untuk Dikenali",
        "blocks": [
          {
            "p": "Terdapat juga satu kaedah yang mengira sebagai setengah triad jika kedua-dua watak tergolong dalam kumpulan triad yang sama. Ini membolehkan kombinasi seperti 申辰, yang sukar untuk dipanggil sebagai kombinasi, menerima skor tinggi. Oleh itu, perkhidmatan ini mengiktiraf setengah triad hanya apabila ia termasuk watak diraja (子·酉·午·卯), dan tidak menganggap kombinasi seperti 申辰·巳丑·寅戌·亥未 sebagai sah."
          }
        ]
      },
      {
        "title": "Sebab Memisahkan discord tenang",
        "blocks": [
          {
            "p": "Enam pasangan discord tenang dilihat sama kerap seperti clash. Jika seseorang hanya mengira kombinasi dan clash, enam pasangan ini akan semua tertanam di bawah skor tiada hubungan {scoreNeutral}, jadi mereka diletakkan secara berasingan."
          },
          {
            "p": "Jika clash adalah pasangan yang bertembung secara langsung dan ditampilkan dengan jelas, discord tenang adalah sedikit tidak selari. Oleh itu, ia diletakkan pada skor {scoreWonjin}, yang lebih tinggi daripada clash ({scoreChung}) tetapi pasti lebih rendah daripada tiada hubungan ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Skor juga diberikan untuk clash",
        "blocks": [
          {
            "p": "Skor konflik terendah adalah {scoreChung}. Ini adalah sengaja untuk tidak memberikan nilai yang dekat dengan 0. Dalam myeongri tradisional, konflik bukanlah 'akhir' tetapi 'perlanggaran', dan memberikan skor yang dekat dengan bawah akan bermakna perkhidmatan ini membuat pernyataan definitif tentang hubungan tersebut."
          },
          {
            "p": "Dengan minimum {scoreChung} dan maksimum {scoreSamhap}, perbezaannya jelas terlihat tetapi tidak definitif."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Tanda Zodiak",
    "title": "Di mana Tanda Zodiak dalam Saju?",
    "summary": "Tanda zodiak adalah cabang bumi dari tahun anda dilahirkan. Ini menjelaskan mengapa ia diambil dari tahun saju dan bukannya tahun kalendar, dan mengapa mereka yang dilahirkan pada awal Januari atau Februari mempunyai tanda zodiak dari tahun sebelumnya.",
    "backLabel": "Dasar Pengiraan",
    "sections": [
      {
        "title": "Tanda zodiak adalah cabang bumi dari tahun anda dilahirkan.",
        "blocks": [
          {
            "p": "Saju terdiri daripada empat tiang: tahun, bulan, hari, dan jam, dengan setiap tiang mempunyai satu batang langit dan satu cabang bumi. Antara mereka, **cabang bumi tahun**, atau cabang tahun, adalah haiwan yang kita sebut sebagai tanda zodiak."
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
                  "Lembu"
                ],
                [
                  "寅",
                  "Harimau"
                ],
                [
                  "卯",
                  "Arnab"
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
        "title": "Kami menggunakan tahun saju, bukan tahun kalendar.",
        "blocks": [
          {
            "p": "Titik di mana tanda zodiak berubah bukanlah 1 Januari kalendar solar atau Tahun Baru Lunar. Standard untuk menukar tahun dalam saju adalah **Ipchun**. Oleh itu, mereka yang dilahirkan pada awal Januari atau Februari mungkin mempunyai tanda zodiak yang berbeza daripada yang ditunjukkan oleh kalendar."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sebab kami tidak secara langsung meminta tanda zodiak.",
        "blocks": [
          {
            "p": "Inilah sebabnya mengapa kami hanya meminta tarikh lahir tanpa memilih tanda zodiak di skrin input. Apabila enjin saju mengira tahun, ia secara automatik selaras dengan sempadan Ipchun. Jika dipilih secara langsung, seseorang yang dilahirkan pada awal Februari akan memilih tanda zodiak yang tidak sepadan dengan tanda sebenarnya."
          }
        ]
      },
      {
        "title": "Tanda zodiak adalah satu karakter dalam saju.",
        "blocks": [
          {
            "p": "Antara lapan karakter, yang sepadan dengan tanda zodiak adalah **satu cabang tahun**. Tujuh karakter yang lain — terutama batang hari yang merujuk kepada diri sendiri — tidak mempunyai hubungan dengan tanda zodiak."
          },
          {
            "p": "Orang yang dilahirkan pada tahun yang sama semua mempunyai tanda zodiak yang sama. Oleh itu, apa yang dapat diketahui dari tanda zodiak hanyalah sebanyak satu daripada lapan karakter. Inilah sebabnya mengapa perkhidmatan ini tidak **menganggap tanda zodiak secara berasingan atau signifikan** — cabang tahun dikira untuk kekuatan dan hari ini adalah tiang hari dari penilaian hari seperti mana-mana cabang bumi yang lain."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Namun, sebab kami menunjukkan tanda zodiak.",
        "blocks": [
          {
            "p": "Ia adalah satu-satunya posisi di mana makna difahami walaupun anda tidak tahu terminologi myeongri. Jika tanda zodiak dicatat bersama cabang tahun di skrin carta kelahiran, ia menjadi petunjuk untuk membaca tujuh karakter yang lain."
          }
        ]
      },
      {
        "title": "Cabang tahun tetap sama walaupun anda tidak tahu waktu kelahiran.",
        "blocks": [
          {
            "p": "Jika anda tidak memasukkan waktu, tiang jam akan diabaikan dan kekuatan dari **lima elemen** (the five elements) akan berubah. Namun, **cabang tahun tetap sama** — ia ditentukan semata-mata oleh tahun anda dilahirkan."
          },
          {
            "p": "Oleh itu, cerita yang diperoleh dari cabang tahun tidak berubah walaupun bagi mereka yang tidak tahu waktu. Sebaliknya, ini bermakna apa yang dapat dikatakan berdasarkan tanda zodiak sahaja adalah terhad, tanpa mengira sama ada waktu disertakan atau tidak."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Waktu",
    "title": "Kami menukar waktu kelahiran kepada waktu solar sebenar.",
    "summary": "Waktu standard dan kedudukan sebenar matahari berbeza. Ini menjelaskan mengapa waktu mesti disesuaikan mengikut garis bujur tempat kelahiran untuk memastikan tiang jam adalah betul.",
    "backLabel": "Asas Pengiraan",
    "sections": [
      {
        "title": "Masa pada jam dan masa solar adalah berbeza",
        "blocks": [
          {
            "p": "Tiang jam saju (時柱) ditentukan oleh kedudukan matahari. Namun, jam yang kita lihat menggunakan satu masa standard untuk seluruh negara, yang tidak selari dengan kedudukan sebenar matahari."
          },
          {
            "p": "Masa standard Korea adalah berdasarkan longitud 135° timur. Longitud Seoul adalah sekitar 127°, jadi ia kira-kira 8° ke barat, menyebabkan matahari mencapai puncaknya lebih lambat — apabila ia tengah hari mengikut jam, matahari di Seoul masih sebelum puncaknya. Perbezaan ini adalah sekitar **32 minit**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minit mengubah tiang jam sebanyak satu slot",
        "blocks": [
          {
            "p": "Masa dalam saju dibahagikan kepada unit dua jam. Mereka yang dilahirkan hampir dengan sempadan akan mempunyai tiang jam mereka sepenuhnya berubah oleh perbezaan 32 minit — penyesuaian diperlukan tepat kerana mereka yang jatuh tepat di sempadan ini."
          }
        ]
      },
      {
        "title": "Sebab mengapa kami bertanya di mana anda dilahirkan",
        "blocks": [
          {
            "p": "Jika longitud berbeza, jumlah penyesuaian juga akan berbeza. Jika anda menggunakan penyesuaian berdasarkan Seoul kepada seseorang yang dilahirkan di luar negara, tiang jam akan sangat tidak selari. Oleh itu, skrin input meminta anda untuk memilih tempat kelahiran anda, dan pengiraan dibuat berdasarkan longitud dan masa standard bandar tersebut. Pada masa ini, terdapat {cityCount} tempat dalam senarai."
          },
          {
            "p": "Walaupun dalam negara yang sama, tempat dengan longitud yang sangat berbeza (seperti Amerika Syarikat, Rusia, Indonesia, dan lain-lain) telah dibahagikan kepada bandar. **15° longitud bersamaan dengan satu tiang jam**."
          },
          {
            "p": "Jika anda tidak memilih, pengiraan akan dibuat berdasarkan Seoul. Kebanyakan kelahiran adalah domestik, jadi ini kurang terdedah kepada kesilapan, tetapi jika anda dilahirkan di luar negara, sila pastikan untuk memilih."
          }
        ]
      },
      {
        "title": "Masa standard telah berubah beberapa kali pada masa lalu",
        "blocks": [
          {
            "p": "Terdapat sebab mengapa penyesuaian tidak dapat dikira hanya sebagai \"perbezaan longitud ÷ 15° × 60 minit.\" Masa standard itu sendiri telah berbeza sepanjang era yang berbeza."
          },
          {
            "table": {
              "caption": "Perubahan dalam masa standard Korea — mereka yang dilahirkan dalam tempoh ini akan tidak selari dengan pengiraan mudah",
              "head": [
                "Tempoh",
                "Apa yang berbeza?"
              ],
              "rows": [
                [
                  "Sebelum 1912",
                  "Tiada masa standard (masa purata tempatan)"
                ],
                [
                  "1954 – 1961",
                  "Masa standard adalah UTC+8:30"
                ],
                [
                  "1948 – 51 · 1955 – 60 · 1987 – 88",
                  "Masa penjimatan siang dilaksanakan"
                ]
              ]
            }
          },
          {
            "p": "Saju-Link tidak menetapkan meridian standard sebagai nilai tetap, tetapi mengira masa standard sebenar yang digunakan pada saat itu berdasarkan maklumat **zon waktu IANA** tempat kelahiran. Masa penjimatan siang dan masa standard yang lalu secara automatik dipantulkan."
          }
        ]
      },
      {
        "title": "Kelahiran sejurus selepas tengah malam juga mempertimbangkan tarikh",
        "blocks": [
          {
            "p": "Oleh kerana penyesuaian adalah -32 minit, mereka yang dilahirkan antara 00:00 dan 00:32 mengikut jam akan berada pada **11 PM hari sebelumnya** dalam masa solar sebenar. Jika hanya masa disesuaikan ke belakang dan tarikh tetap sama, ia akan menulis tiang hari (日柱) sebagai \"11 PM hari sebelumnya.\""
          },
          {
            "p": "Saju-Link juga akan menyesuaikan tarikh dalam kes ini. Watak di atas tiang hari merujuk kepada tiang hari (日干), yang menunjukkan diri saya, jadi jika ini tidak selari, hampir semua item dalam tafsiran akan tidak selari."
          }
        ]
      },
      {
        "title": "Anda tidak perlu mengetahui masa",
        "blocks": [
          {
            "p": "Masa kelahiran adalah pilihan. Jika anda tidak mengetahuinya, pengiraan akan dibuat tanpa tiang jam, dan fakta ini akan dipaparkan di skrin keputusan. Oleh kerana ini bermakna dua daripada lapan watak hilang, ia akan mempengaruhi penilaian kekuatan dan kelemahan lima elemen, jadi jika anda mengetahuinya, adalah lebih tepat untuk menyertakannya."
          },
          {
            "p": "Tiang tahun (haiwan zodiak) sentiasa sama tanpa mengira masa — [kerana kami hanya melihat tiang tahun](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Maklumat Peribadi",
    "title": "Kaedah yang tidak menyimpan maklumat yang dimasukkan",
    "summary": "Ia menjelaskan apa yang secara teknikal bermaksud bahawa tarikh lahir tidak direkodkan di mana-mana dan apa yang terkandung dalam pautan keputusan.",
    "backLabel": "Asas Pengiraan",
    "sections": [
      {
        "title": "Tiada pendaftaran keahlian",
        "blocks": [
          {
            "p": "Saju-Link tidak membuat akaun. Ia tidak mengumpul nama, emel, atau nombor telefon. Satu-satunya maklumat yang dikumpul adalah tarikh lahir dan (secara pilihan) masa kelahiran, tempat kelahiran, dan jantina, dan maklumat itu tidak kekal selepas pengiraan selesai."
          },
          {
            "p": "Terdapat medan untuk memasukkan tajuk yang akan dipaparkan di skrin keputusan, tetapi itu adalah **hanya untuk tujuan paparan** dan tidak digunakan dalam pengiraan. Anda tidak perlu memasukkan nama sebenar anda."
          }
        ]
      },
      {
        "title": "Apa yang terkandung dalam pautan keputusan?",
        "blocks": [
          {
            "p": "Setelah pengiraan selesai, alamatnya kelihatan seperti ini."
          },
          {
            "p": "**/ko/reading/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Apa yang mengikuti **#** adalah nilai input. Bahagian ini dipanggil **fragment**, yang merupakan bahagian yang **pelayar tidak menghantar kepada pelayan**. Ini adalah tingkah laku web standard dan bukan peraturan yang kami cipta — ia pada asalnya direka untuk menunjukkan kedudukan dalam dokumen, jadi pelayan tidak perlu melihatnya."
          },
          {
            "p": "Dengan kata lain, apabila anda membuka pautan keputusan, pelayar membaca nilai itu untuk meminta pengiraan, dan pelayan kami menerima nilai untuk digunakan dalam pengiraan, mengembalikan jawapan, dan kemudian melupakannya."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sila berhati-hati apabila menghantar pautan kepada orang lain",
        "blocks": [
          {
            "p": "Fakta bahawa ia tidak disimpan di pelayan tidak bermakna pautan itu selamat. Pautan keputusan mengandungi tarikh lahir dua individu, jadi orang yang menerima pautan itu boleh melihat keputusan yang sama."
          }
        ]
      },
      {
        "title": "Mengapa pengiraan dilakukan di pelayan tetapi tidak disimpan?",
        "blocks": [
          {
            "p": "Pengiraan itu sendiri dilakukan di pelayan. Jadual almanak lunar-solar diperlukan untuk menghasilkan saju, dan jadual itu terlalu besar untuk dihantar ke pelayar. Namun, **setelah memproses permintaan, kami tidak menggunakan nilai itu di mana-mana.** Tiada kod untuk memasukkannya ke dalam pangkalan data."
          },
          {
            "p": "Rekod minimum yang diperlukan untuk operasi disimpan — satu kaunter untuk mengelakkan orang yang sama menghantar terlalu banyak permintaan dalam masa yang singkat. Ini tidak termasuk tarikh lahir, dan IP akses tidak disimpan. Hanya satu nilai yang dihash dengan tarikh yang dikira, dan nilai itu berubah apabila hari berubah."
          }
        ]
      },
      {
        "title": "Perkara yang tidak dapat dilakukan kerana maklumat tidak disimpan",
        "blocks": [
          {
            "p": "Sejujurnya, terdapat perkara yang telah dikorbankan kerana kami tidak menyimpan maklumat."
          },
          {
            "ul": [
              "**Anda tidak boleh mengambil semula keputusan lalu.** Anda perlu mempunyai pautan untuk melihatnya semula.",
              "**Nilai yang sama akan dikira semula.** Tiada cache. Namun, kerana semua peraturan adalah deterministik, [input yang sama akan sentiasa menghasilkan nilai yang sama](/guide/natal-chart).",
              "**Menyegarkan akan membawa kembali pintu iklan.** Ini kerana tiada tempat untuk meninggalkan sejarah tontonan."
            ]
          }
        ]
      },
      {
        "title": "Jika anda membuat pembelian",
        "blocks": [
          {
            "p": "Apabila anda membeli laporan, rekod transaksi akan disimpan. Pembayaran tertakluk kepada tempoh penyimpanan undang-undang, dan tanpa sejarah pesanan, pengembalian wang tidak dapat diproses. Namun, pada masa ini, **tarikh lahir yang digunakan untuk pengiraan saju tidak akan dilampirkan pada pesanan** — ia akan diminta semula semasa membuat PDF selepas pengesahan pembayaran."
          },
          {
            "p": "Untuk maklumat lanjut, sila rujuk kepada [Dasar Privasi](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produk berbayar",
    "title": "Apa yang termasuk dalam laporan berbayar",
    "summary": "Ia menjelaskan apa yang telah ditambahkan ke dalam PDF sambil mengekalkan skrin tidak berubah. Nilai dan kandungan diambil dari tetapan produk sebenar.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Menjaga skrin tidak berubah, hanya ditambahkan ke PDF",
        "blocks": [
          {
            "p": "Pengiraan saju dan pertanyaan keputusan adalah **percuma**. Anda boleh melihat segala-galanya di skrin, termasuk carta kelahiran, lima elemen, hari ini punya nasib, dan asasnya, kerana tiada apa yang telah diabaikan semasa membuat laporan berbayar."
          },
          {
            "p": "Peranan laporan adalah untuk **menambah lapisan yang tidak terdapat di skrin**. Lapisan ini tidak dibuat-buat; mereka adalah nilai yang telah dikira semasa proses penilaian tetapi tidak digunakan di skrin."
          }
        ]
      },
      {
        "title": "Laporan saju seumur hidup dan nasib tahun ini PDF — {priceDomestic}",
        "slot": "reportContents",
        "blocks": [
          {
            "p": "Pembayaran domestik {priceDomestic} (termasuk VAT), pembayaran antarabangsa {priceGlobal}. Ia terdiri daripada {pageCount} halaman A4."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Jadual kandungan dibaca terus dari penerangan produk. **Jumlah halaman adalah sama seperti dokumen sebenar** — ia tidak dibesar-besarkan kerana ia adalah nilai yang dinyatakan dalam notis maklumat produk."
          }
        ]
      },
      {
        "title": "Apa yang tidak ada di skrin",
        "blocks": [
          {
            "p": "Skrin percuma menunjukkan carta kelahiran, lima elemen, dan nasib hari ini. Terdapat tiga nilai yang dihasilkan semasa proses pengiraan tetapi tidak dipaparkan di skrin, dan ini adalah bahagian laporan berbayar."
          },
          {
            "ul": [
              "**Nisbah sekutu batang hari** — Ia menunjukkan secara numerik di mana penilaian batang hari yang kuat atau lemah dibuat. Nama penilaian sahaja tidak menunjukkan sama ada ia berada di tepi atau banyak.",
              "**Wang Sang Hyu Su Sa** — Sejauh mana bulan kelahiran telah meningkatkan setiap tenaga. Jika bar kuasa menunjukkan 'berapa banyak yang ada', jadual ini menunjukkan 'adakah ia dalam musim'.",
              "**Butiran pembetulan waktu solar sebenar** — Konsep ini terdapat dalam dokumen panduan, tetapi **'berapa minit telah diubah dalam kes anda'** adalah nilai yang berbeza untuk setiap orang, jadi ia hanya dimasukkan dalam laporan."
            ]
          }
        ]
      },
      {
        "title": "Apa yang perlu anda ketahui sebelum membeli",
        "blocks": [
          {
            "p": "**Pelayan tidak menyimpan fail.** Setelah pembayaran diluluskan, dokumen dibuat dan dihantar dengan segera, meninggalkan tiada apa di pelayan. Prinsip perkhidmatan ini untuk tidak menyimpan nilai input dipatuhi walaupun dalam aliran berbayar."
          },
          {
            "p": "Oleh itu, **sila simpan fail segera selepas pembayaran.** Anda boleh menerimanya sehingga lima kali dengan pesanan yang sama, tetapi jika anda meninggalkan skrin keputusan dan nilai input hilang, ia tidak dapat dicipta semula."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Laporan juga merupakan bahan rujukan",
        "blocks": [
          {
            "p": "Hanya kerana jumlah halaman telah meningkat tidak bermakna kesimpulan lebih pasti. Apa yang ditambahkan oleh laporan adalah **asas pengiraan yang sama**, bukan penegasan yang lebih kuat. Takdir adalah bidang di mana kesimpulan boleh berbeza bergantung kepada pengamal, dan perkhidmatan ini hanya mengira apa yang boleh diterjemahkan ke dalam peraturan."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Notis",
    "title": "Pengumuman",
    "summary": "Ini adalah tempat untuk memaklumkan perubahan yang mungkin mempengaruhi penggunaan.",
    "backLabel": "Kembali ke awal",
    "sections": []
  },
  "contact": {
    "eyebrow": "Hubungi",
    "title": "Pertanyaan",
    "summary": "Ini adalah saluran untuk pertanyaan tentang penggunaan, pengembalian wang, permintaan maklumat peribadi, dan laporan kesilapan, bersama dengan maklumat perniagaan.",
    "backLabel": "Kembali ke awal",
    "sections": [
      {
        "title": "Hubungi melalui email",
        "blocks": [
          {
            "p": "Sila hantar pertanyaan ke **{email}**. Kami akan memberi maklum balas dalam masa 2 hari bekerja. Untuk pertanyaan pembayaran dan pengembalian wang, sila sertakan **nombor pesanan atau email yang digunakan untuk pembayaran** untuk pengesahan yang lebih cepat."
          },
          {
            "p": "Pertanyaan telefon diterima di {customerCenter}."
          }
        ]
      },
      {
        "title": "Apa yang boleh dihantar ke saluran ini",
        "blocks": [
          {
            "ul": [
              "**Pembayaran dan pengembalian wang** — Jika dokumen belum dibuat atau jumlah pembayaran berbeza dari pesanan, pengembalian penuh akan diberikan. Syarat terdapat dalam [Dasar Pengembalian Wang](/refund-policy).",
              "**Maklumat peribadi** — Kami menerima permintaan untuk melihat, membetulkan, dan memadam. Dasar pemprosesan terdapat dalam [Dasar Privasi](/privacy).",
              "**Laporan kesilapan pengiraan** — Jika carta kelahiran saju atau skor kelihatan aneh, sila beritahu kami. Jika anda sertakan bila anda memasukkan tarikh dan waktu lahir, kami boleh mengira semula dengan nilai yang sama."
            ]
          }
        ]
      },
      {
        "title": "Maklumat perniagaan",
        "blocks": [
          {
            "ul": [
              "**Nama perniagaan** — {companyName}",
              "**Wakil** — {representative}",
              "**Nombor pendaftaran perniagaan** — {businessNumber}",
              "**Nombor pendaftaran perniagaan pesanan melalui pos** — {mailOrderNumber}",
              "**Alamat** — {address}",
              "**Pusat pelanggan** — {customerCenter}",
              "**Email** — {email}",
              "**Pegawai perlindungan maklumat peribadi** — {privacyOfficer}",
              "**Penyedia hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Tiada keperluan untuk menyertakan tarikh dan waktu lahir anda dalam email pertanyaan. Kami tidak menyimpan input, jadi kami tidak dapat mengambilnya semula kemudian, dan apa yang perlu disahkan sudah cukup dengan nombor pesanan. Sila hanya sertakan apabila nilai benar-benar diperlukan, seperti dalam laporan kesilapan pengiraan."
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
    "engine": "Kriteria pengiraan",
    "support": "Pertanyaan"
  },
  "intro": "Perubahan yang mempengaruhi syarat penggunaan, seperti harga dan terma, akan dipaparkan di sini sebelum pelaksanaan. Penambahbaikan dalaman seperti skrin yang menjadi lebih pantas tidak dipaparkan di sini: apa yang muncul di sini hanyalah apa yang anda perlu tahu.",
  "empty": {
    "title": "Tiada notis yang telah dipaparkan.",
    "body": "Jika terdapat sebarang perubahan untuk dimaklumkan kepada anda, ia akan dipaparkan di sini."
  },
  "effective": "Berkuat kuasa dari {date}",
  "pager": {
    "label": "Halaman notis",
    "newer": "← Terkini",
    "older": "Notis sebelumnya →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Tingkap pertanyaan dan halaman pengenalan perkhidmatan telah dibuka.",
      "body": [
        "Kami telah mengumpulkan satu tingkap untuk pertanyaan, pemulangan, permintaan maklumat peribadi, dan melaporkan ralat pengiraan. Anda boleh menyemaknya di bahagian bawah skrin di bawah 'Tanya'.",
        "Apabila anda memaklumkan kepada kami tentang sesuatu yang kelihatan seperti ralat pengiraan, sila sertakan tarikh dan waktu lahir yang anda masukkan. Kami tidak menyimpan input, jadi tanpa nilai itu, kami tidak dapat mengira semula."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Dalam skrin Arab dan Khmer, laporan akan dihasilkan dalam bahasa Inggeris.",
      "body": [
        "Jika anda melihat skrin dalam bahasa Arab atau Khmer, laporan PDF yang anda beli akan dibuat dalam bahasa Inggeris. Ini kerana alat tersebut belum dapat memformat kedua-dua skrip ini ke dalam perenggan.",
        "Anda masih boleh melihat skrin seperti biasa, dan nama yang ditulis dalam laporan akan tepat seperti yang anda masukkan.",
        "Maklumat yang sama juga disediakan terlebih dahulu di skrin pembayaran. Kami akan memaklumkan kepada anda di sini apabila alat tersebut menyokong skrip ini."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Kriteria pengiraan akan disertakan bersama keputusan.",
      "body": [
        "Di bawah skrin keputusan dan laporan, kriteria pengiraan (contohnya, sajulink-natal-v1) dinyatakan. Jika input adalah sama, nilai yang sama akan sentiasa keluar di bawah kriteria yang sama.",
        "Jika peraturan untuk mentafsir myeongri diubah dan skor mungkin berbeza, kami akan terlebih dahulu memaparkan fakta itu dan tarikh berkuat kuasa di sini. Ini kerana nombor dalam pautan keputusan yang anda terima sebelum ini mungkin berubah.",
        "Kriteria semasa adalah v10, dan pembayaran masih dalam penyediaan."
      ]
    }
  }
} satisfies NoticeCopy;
