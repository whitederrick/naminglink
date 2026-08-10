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
