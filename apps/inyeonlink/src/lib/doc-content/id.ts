import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Bahasa Indonesia — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const ID_DOCS = {
  "about": {
    "eyebrow": "Tentang",
    "title": "Tentang Inyeon-Link",
    "summary": "Kami membandingkan dua bagan kelahiran dalam tradisi Saju Korea. Berikut adalah apa yang kami hitung, dan apa yang kami tolak untuk klaim.",
    "backLabel": "Beranda",
    "sections": [
      {
        "title": "Apa yang kami lakukan",
        "blocks": [
          {
            "p": "Inyeon-Link membangun dua bagan kelahiran dari tanggal dan waktu kelahiran dan menunjukkan **bagaimana dua set energi bertemu.** Anda juga dapat membaca bagan Anda sendiri secara terpisah dan melihat temperamen mana yang cenderung cocok untuk Anda."
          },
          {
            "p": "Membaca di layar adalah **gratis dan tidak memerlukan akun.** Item berbayar adalah laporan PDF yang membawa angka yang tidak ditampilkan di layar — kekuatan elemen, pasangan sepuluh dewa, dan hubungan di seluruh empat pilar."
          }
        ]
      },
      {
        "title": "Apa yang kami hitung",
        "blocks": [
          {
            "p": "Bagan dibangun dari **almanak lunisolar Korea**, dan waktu kelahiran dikoreksi ke **waktu matahari sejati** untuk tempat kelahiran — waktu jam yang sama berarti posisi matahari yang berbeda tergantung di mana Anda dilahirkan."
          },
          {
            "p": "Skor berasal dari aturan tetap saja. Konsep tradisional — sepuluh dewa, hubungan cabang, elemen pendukung — diekspresikan sebagai aturan, sehingga **input yang sama selalu memberikan hasil yang sama.** Ketika sebuah aturan berubah, kami menjalankan regresi untuk memastikan pembacaan yang lebih lama tidak berubah."
          },
          {
            "p": "**Tidak ada AI yang terlibat.** Setiap kalimat di layar adalah teks tetap yang terlampir pada hasil yang dihitung."
          }
        ]
      },
      {
        "title": "Apa yang tidak akan kami klaim",
        "blocks": [
          {
            "ul": [
              "**Kami tidak meramal nasib.** Tidak ada yang di sini memberi tahu Anda untuk mengejar atau menghindari siapa pun. Ini adalah referensi yang diambil dari sebuah tradisi.",
              "**Kami tidak menyimpan apa yang Anda masukkan.** Detail kelahiran digunakan untuk saat perhitungan dan tidak pernah dicatat; tautan hasil hidup di bagian URL yang tidak dikirim browser ke server.",
              "**Skor bukanlah keputusan tentang seseorang.** Angka yang rendah tidak membatalkan sebuah hubungan."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Metode ini dijelaskan secara rinci dalam [panduan](/guide). Detail perusahaan dan cara menghubungi kami ada di [halaman kontak](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Dasar Perhitungan",
    "title": "Apa Dasar untuk Perhitungan?",
    "summary": "Inyeon-Link mengungkapkan semua aturan yang digunakannya. Anda dapat memeriksa item dan bobotnya, skor dari tabel hubungan cabang bumi, dan nilai ambang yang membedakan antara batang hari yang kuat dan batang hari yang lemah — Anda dapat melihat dari mana angka di layar berasal.",
    "backLabel": "Kembali ke Awal",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Nilai yang ditulis di sini semuanya **dibaca langsung dari kode perhitungan**. Karena tidak ditranskripsikan secara manual ke dalam teks, jika aturan berubah, angka dalam dokumen ini juga akan berubah."
          }
        ]
      }
    ]
  },
  "guide/how-compatibility": {
    "eyebrow": "Dasar Layanan",
    "title": "Apa yang Dilihat dalam Kecocokan Saju?",
    "summary": "Ini menjelaskan empat item dan bobot masing-masing, serta menjelaskan mengapa keempat item tersebut dipilih. Ini juga membahas mengapa perhitungan dapat dilakukan bahkan tanpa mengetahui waktu kelahiran.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Menghitung dan Menggabungkan Dua Sumbu",
        "blocks": [
          {
            "p": "Tingkat kecocokan berasal dari dua bagian. **Kecocokan saju** melihat seluruh bagan saju asli dari kedua individu, sementara **kecocokan zodiak** hanya mempertimbangkan satu cabang bumi dari tahun kelahiran. Nilai akhir diperoleh dengan rata-rata berbobot dari keduanya."
          },
          {
            "table": {
              "head": [
                "Sumbu",
                "Apa yang Dipertimbangkan",
                "Bobot"
              ],
              "rows": [
                [
                  "Kecocokan Saju",
                  "Batang hari, cabang hari, dan lima elemen — empat item",
                  "{weightSaju}"
                ],
                [
                  "Kecocokan Zodiak",
                  "Hubungan antara cabang tahun",
                  "{weightZodiac}"
                ]
              ]
            }
          },
          {
            "p": "Sisi saju jauh lebih berat karena jumlah informasi yang digunakan berbeda. Saju mempertimbangkan semua empat pilar, sementara zodiak hanya melihat satu karakter. Namun, zodiak tidak dikecualikan karena dua alasan — itu adalah item yang paling mudah dipahami secara intuitif, dan itu adalah **satu-satunya sumbu yang nilainya tidak berfluktuasi bahkan tanpa mengetahui waktu kelahiran**."
          }
        ]
      },
      {
        "title": "Empat Item Kecocokan Saju",
        "blocks": [
          {
            "p": "Sisi saju dibagi lebih lanjut menjadi empat. Setiap item dipilih untuk memastikan bahwa apa yang mereka pertimbangkan tidak tumpang tindih."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju terdiri dari delapan karakter yang dibentuk oleh batang langit dan cabang bumi dari tahun, bulan, hari, dan jam kelahiran. Batang hari dan cabang hari yang disebutkan di bawah adalah dua karakter dalam pilar hari.",
            "labels": {
              "year": "Pilar Tahun",
              "yearNote": "Akar · Zodiak",
              "month": "Pilar Bulan",
              "monthNote": "Musim · Kekuatan",
              "day": "Pilar Hari",
              "dayNote": "Saya · Posisi Pasangan",
              "hour": "Pilar Jam",
              "hourNote": "Tahun-Tahun Selanjutnya · Penggunaan",
              "stem": "Batang Langit",
              "stemNote": "Batang Hari = Saya",
              "branch": "Cabang Bumi",
              "branchNote": "Cabang Hari = Posisi Pasangan"
            }
          },
          {
            "table": {
              "head": [
                "Item",
                "Apa yang Dipertimbangkan",
                "Bobot"
              ],
              "rows": [
                [
                  "Hubungan Batang Hari",
                  "Apa batang hari (日干) kedua orang tersebut satu sama lain — dilihat melalui Sepuluh Dewa",
                  "{weightDayMaster}"
                ],
                [
                  "Kelengkapan Lima Elemen",
                  "Apakah pasangan memiliki energi yang saya butuhkan — dilihat melalui elemen pendukung yang saat ini dibutuhkan oleh bagan",
                  "{weightElementSupply}"
                ],
                [
                  "Bintang Pasangan",
                  "Apakah batang hari pasangan sesuai dengan posisi pasangan saya?",
                  "{weightSpouseStar}"
                ],
                [
                  "Hubungan Cabang Hari",
                  "Apakah cabang hari (日支) kedua orang tersebut merupakan kombinasi atau tabrakan?",
                  "{weightDayBranch}"
                ]
              ]
            }
          },
          {
            "p": "Cabang hari dibaca karena tradisi menganggapnya sebagai **posisi pasangan**. Dari empat pilar, ini adalah yang menunjuk pada pasangan, yang menjadikannya tempat pertama yang dilihat untuk kecocokan."
          }
        ]
      },
      {
        "title": "Jika jenis kelamin tidak diungkapkan, Bintang Pasangan dihilangkan",
        "blocks": [
          {
            "p": "Bintang Pasangan memerlukan pengetahuan tentang jenis kelamin untuk perhitungan. Tradisi membaca posisi yang menunjuk pada pasangan berbeda tergantung pada jenis kelamin. Jika tidak diungkapkan, item ini akan **dikecualikan** dan bobot dari tiga item yang tersisa akan dinormalisasi ulang."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ini tidak akan diperlakukan sebagai 0 poin",
        "blocks": [
          {
            "p": "Jika posisi yang hilang diperlakukan sebagai 0 poin, skor akan secara tidak adil diturunkan hanya karena jenis kelamin tidak diungkapkan. Normalisasi ulang bobot mencegah masalah ini."
          }
        ]
      },
      {
        "title": "Perhitungan dapat dilakukan tanpa mengetahui waktu lahir",
        "blocks": [
          {
            "p": "Waktu lahir digunakan untuk menentukan pilar jam. Jika tidak diketahui, perhitungan akan dilakukan tanpa pilar jam, dan fakta ini akan ditunjukkan di layar hasil. Karena tidak ada input langsung untuk pilar jam di antara empat item kecocokan, nilai tidak akan berfluktuasi secara signifikan, tetapi itu mempengaruhi keseimbangan lima elemen."
          },
          {
            "p": "Jika Anda tahu waktu, silakan juga pilih tempat lahir. Jika waktu standar berbeda dari posisi matahari yang sebenarnya, menggunakannya apa adanya dapat menyebabkan ketidaksesuaian pilar jam [(koreksi waktu matahari sejati)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "Input yang sama akan selalu menghasilkan nilai yang sama",
        "blocks": [
          {
            "p": "Semua skor ditentukan oleh aturan. Tidak ada kecerdasan buatan yang digunakan, juga tidak ada angka acak yang diterapkan. Oleh karena itu, memasukkan dua tanggal lahir yang sama beberapa kali tidak akan menghasilkan hasil yang berbeda. Sebagai layanan yang tidak menyimpan data, hasil sebelumnya tidak dapat diambil, tetapi **determinisme** mengimbangi hal itu."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mengubah aturan akan meningkatkan versi",
        "blocks": [
          {
            "p": "Setiap kali aturan penilaian diubah, versi mesin diperbarui. Versi dicatat di bagian bawah layar hasil, memungkinkan Anda untuk membedakan aturan mana yang digunakan untuk menghitung angka yang saat ini Anda lihat."
          }
        ]
      },
      {
        "title": "Apa yang bukan hasil ini",
        "blocks": [
          {
            "p": "Ini adalah **materi referensi** yang dihitung dari aturan yang dibangun berdasarkan perspektif tradisi. Ini bukan prediksi ilmiah, juga bukan pernyataan definitif tentang hubungan antara kedua individu. Rentang skor ditetapkan minimum sekitar 45 poin untuk alasan ini — tidak ada kombinasi yang akan menghasilkan nilai mendekati 0 poin."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Tabel hubungan",
    "title": "Bagaimana Zodiak dan Cabang Hari Bertemu — Tabel Dua Belas Cabang",
    "summary": "Tabel hubungan yang dipakai saat zodiak dan cabang hari dua orang diletakkan berdampingan. Tabel ini memperlihatkan hewan mana yang membentuk keharmonisan, tabrakan, atau ketidakcocokan dengan hewan mana, untuk kedua belas hewan, dan membuka skor setiap hubungan.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Zodiak dan cabang hari memakai tabel yang sama",
        "blocks": [
          {
            "p": "Inyeon-Link meletakkan cabang bumi dua orang berdampingan di dua tempat: **kecocokan zodiak**, yang melihat cabang tahun lahir, dan **kecocokan cabang hari** (posisi pasangan), yang melihat cabang hari lahir. Keduanya dinilai dengan tabel di bawah; bedanya hanya pada seberapa besar bobot masing-masing dalam skor akhir."
          },
          {
            "figure": "branch-wheel",
            "caption": "Dengan menyusun dua belas karakter dalam lingkaran, hubungan terlihat sekilas. Tabrakan selalu berada tepat di seberang, sedangkan Enam-Harmoni dan ketidakcocokan tenang berada lebih dekat. Garis-garis ini tidak digambar dengan tangan; semuanya ditarik langsung dari aturan perhitungan.",
            "labels": {
              "alt": "Diagram dua belas cabang bumi yang disusun melingkar, dengan garis yang menghubungkan pasangan Enam-Harmoni, tabrakan, dan ketidakcocokan.",
              "yukhap": "Enam-Harmoni",
              "chung": "Tabrakan",
              "wonjin": "Ketidakcocokan",
              "rat": "Tikus",
              "ox": "Sapi",
              "tiger": "Harimau",
              "rabbit": "Kelinci",
              "dragon": "Naga",
              "snake": "Ular",
              "horse": "Kuda",
              "goat": "Domba",
              "monkey": "Monyet",
              "rooster": "Ayam",
              "dog": "Anjing",
              "pig": "Babi"
            }
          }
        ]
      },
      {
        "title": "Hubungan untuk masing-masing dari dua belas zodiak",
        "blocks": [
          {
            "p": "Untuk setiap hewan, tabel mencantumkan hewan mana yang membentuk tiap hubungan dengannya. Hanya pasangan yang diakui layanan ini sebagai keharmonisan yang dicantumkan, sehingga hewan yang tidak muncul dalam suatu baris tidak memiliki hubungan khusus dengannya — **netral**."
          },
          {
            "table": {
              "caption": "Empat jenis hubungan dilihat dari satu hewan",
              "head": [
                "Hewan Anda",
                "Pasangan yang saling menarik (Enam-Harmoni)",
                "Triad setengah",
                "Tenang tapi berselisih (Ketidakcocokan)",
                "Berbenturan langsung (Tabrakan)"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Sapi",
                  "Monyet · Naga",
                  "Domba",
                  "Kuda"
                ],
                [
                  "Sapi (丑)",
                  "Tikus",
                  "Ayam",
                  "Kuda",
                  "Domba"
                ],
                [
                  "Harimau (寅)",
                  "Babi",
                  "Kuda",
                  "Ayam",
                  "Monyet"
                ],
                [
                  "Kelinci (卯)",
                  "Anjing",
                  "Babi · Domba",
                  "Monyet",
                  "Ayam"
                ],
                [
                  "Naga (辰)",
                  "Ayam",
                  "Tikus",
                  "Babi",
                  "Anjing"
                ],
                [
                  "Ular (巳)",
                  "Monyet",
                  "Ayam",
                  "Anjing",
                  "Babi"
                ],
                [
                  "Kuda (午)",
                  "Domba",
                  "Harimau · Anjing",
                  "Sapi",
                  "Tikus"
                ],
                [
                  "Domba (未)",
                  "Kuda",
                  "Kelinci",
                  "Tikus",
                  "Sapi"
                ],
                [
                  "Monyet (申)",
                  "Ular",
                  "Tikus",
                  "Kelinci",
                  "Harimau"
                ],
                [
                  "Ayam (酉)",
                  "Naga",
                  "Ular · Sapi",
                  "Harimau",
                  "Kelinci"
                ],
                [
                  "Anjing (戌)",
                  "Kelinci",
                  "Kuda",
                  "Ular",
                  "Naga"
                ],
                [
                  "Babi (亥)",
                  "Harimau",
                  "Kelinci",
                  "Naga",
                  "Ular"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ketika dua orang bertemu dalam tabel",
        "blocks": [
          {
            "p": "Membaca tabel berarti mencari dua hewan pada satu baris. Berikut beberapa pasangan sebagai contoh."
          },
          {
            "ul": [
              "**Tikus dan Sapi** — Enam-Harmoni. Hanya membutuhkan dua karakter, sehingga ini keharmonisan yang paling sering muncul dalam kecocokan, dan yang baik.",
              "**Tikus dan Naga** — triad setengah: dua dari tiga karakter 申子辰, termasuk yang di tengah (子).",
              "**Tikus dan Harimau** — tidak ada dalam tabel, jadi netral: bukan keharmonisan dan bukan tabrakan, hanya garis dasar.",
              "**Tikus dan Domba** — ketidakcocokan. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama.",
              "**Harimau dan Monyet** — tabrakan. Mereka berada tepat berseberangan dan dipandang berbenturan langsung."
            ]
          }
        ]
      },
      {
        "title": "Berapa poin yang didapat tiap hubungan",
        "blocks": [
          {
            "table": {
              "caption": "Dari yang tertinggi. Ini adalah nilai yang benar-benar dipakai Inyeon-Link.",
              "head": [
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Triad setengah",
                  "{scoreBanhap}"
                ],
                [
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Ketidakcocokan",
                  "{scoreWonjin}"
                ],
                [
                  "Tabrakan",
                  "{scoreChung}"
                ]
              ]
            }
          },
          {
            "p": "Cabang yang sama (dua orang dengan hewan yang sama) berarti kemiripan, bukan ketertarikan, sehingga berada sedikit di atas netral. Baik kecocokan zodiak maupun cabang hari, nilai dalam tabel ini langsung masuk ke skor akhir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mengapa triad penuh tidak ada dalam tabel",
        "blocks": [
          {
            "p": "Triad penuh (申子辰, 巳酉丑, 寅午戌, 亥卯未) membutuhkan ketiga karakter. Dua orang yang diletakkan berdampingan hanya menghasilkan dua, sehingga triad penuh tidak mungkin muncul dalam kecocokan dan hanya triad setengah yang muncul. Skor triad penuh {scoreSamhap} disimpan untuk kasus ketika tiga karakter berkumpul dalam bagan satu orang."
          }
        ]
      },
      {
        "title": "申辰, 巳丑, 寅戌, dan 亥未 tidak dihitung sebagai keharmonisan",
        "blocks": [
          {
            "p": "Sebagian metode menghitung dua karakter mana pun dari kelompok triad yang sama sebagai triad setengah. Inyeon-Link tidak begitu: seperti ditunjukkan kolom triad setengah di atas, hanya pasangan yang menyertakan **cabang raja** di pusat kelompok (子, 午, 卯, 酉) yang diterima. Pasangan tanpanya tidak punya pusat tempat formasi berkumpul, sehingga dianggap netral."
          }
        ]
      },
      {
        "title": "Ketidakcocokan dan tabrakan tidak berada di dasar",
        "blocks": [
          {
            "p": "Jika hanya keharmonisan dan tabrakan yang dihitung, keenam pasangan ketidakcocokan akan terkubur dalam netral. Karena itu ketidakcocokan punya tempatnya sendiri: lebih tinggi dari tabrakan langsung dan lebih rendah dari netral, yaitu {scoreWonjin} poin."
          },
          {
            "p": "Bahkan tabrakan tetap mendapat {scoreChung} poin. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan. Nilai mendekati nol akan membuat layanan menjatuhkan vonis atas dua orang, sehingga rentangnya dijaga cukup lebar untuk menunjukkan perbedaan tanpa menjatuhkan vonis."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodiak",
    "title": "Mengapa kecocokan zodiak mempertimbangkan cabang tahun?",
    "summary": "Zodiak adalah cabang bumi dari tahun kelahiran. Ini menjelaskan mengapa ia berasal dari pilar tahun saju daripada tahun kalender, dan menjelaskan pentingnya kecocokan zodiak.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Zodiak adalah cabang bumi dari tahun kelahiran",
        "blocks": [
          {
            "p": "Saju terdiri dari empat pilar: tahun, bulan, hari, dan jam, dengan setiap pilar mengandung satu batang langit dan satu cabang bumi. **Cabang tahun** adalah yang membawa hewan yang kita sebut tanda zodiak."
          },
          {
            "table": {
              "caption": "Dua Belas Cabang Bumi dan Zodiak",
              "head": [
                "Cabang Bumi",
                "Zodiak"
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
                  "Domba"
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
        "title": "Kami menggunakan tahun saju, bukan tahun kalender",
        "blocks": [
          {
            "p": "Titik di mana zodiak berubah bukanlah 1 Januari kalender matahari atau Tahun Baru Imlek. Standar untuk mengubah tahun dalam saju adalah **Ipchun**. Oleh karena itu, mereka yang lahir di bulan Januari atau awal Februari mungkin memiliki tahun zodiak yang berbeda dari yang ada di kalender."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Alasan mengapa kami tidak bertanya langsung tentang zodiak",
        "blocks": [
          {
            "p": "Inilah sebabnya mengapa kami hanya mengumpulkan tanggal lahir tanpa menanyakan zodiak di layar input. Ketika mesin saju menghitung cabang tahun, batas Ipchun secara otomatis disesuaikan. Jika Anda memilihnya secara langsung, seseorang yang lahir di awal Februari mungkin memilih zodiak yang tidak sesuai dengan yang sebenarnya."
          }
        ]
      },
      {
        "title": "Kecocokan zodiak hanya mempertimbangkan satu hubungan",
        "blocks": [
          {
            "p": "Perhitungan kecocokan zodiak sangat sederhana. Ini membandingkan cabang tahun dari dua orang untuk menentukan apakah hubungan tersebut harmonis, tabrakan, atau ketidakcocokan yang tenang, dan menggunakan skor itu apa adanya. Karena hanya ada satu item, tidak perlu mendistribusikan bobot."
          },
          {
            "p": "Skor untuk setiap hubungan semuanya terdaftar dalam [Tabel Hubungan Dua Belas Cabang](/guide/branches). Kecocokan cabang hari menggunakan tabel yang sama."
          }
        ]
      },
      {
        "title": "Alasan untuk menentukan bobot",
        "blocks": [
          {
            "p": "Kecocokan zodiak menyumbang {weightZodiac} dari tingkat kecocokan akhir. Sementara kecocokan saju melihat semua empat pilar, zodiak hanya mempertimbangkan satu karakter, jadi mereka tidak dapat diberi bobot sama."
          },
          {
            "p": "Namun, ada dua alasan mengapa itu tidak dikecualikan."
          },
          {
            "ul": [
              "**Ini adalah item yang paling mudah dipahami secara intuitif**. Bahkan tanpa mengetahui kosakata tradisi, 'harimau dan monyet bertabrakan' masuk akal.",
              "**Ini adalah satu-satunya sumbu yang tidak berfluktuasi meskipun waktu kelahiran tidak diketahui**. Jika Anda tidak mengetahui waktu, pilar jam hilang dan kekuatan dari lima elemen berubah, tetapi cabang tahun tetap sama."
            ]
          }
        ]
      },
      {
        "title": "Anda juga dapat melihat kecocokan zodiak secara terpisah",
        "blocks": [
          {
            "p": "Di layar hasil, kami menunjukkan skor untuk kecocokan saju dan kecocokan zodiak secara terpisah. Jika hanya tingkat kecocokan akhir yang disajikan, tidak jelas dari mana angka itu berasal. Jika kedua nilai sangat berbeda, itu sendiri patut dicatat."
          }
        ]
      }
    ]
  },
  "guide/zodiac-rat": {
    "eyebrow": "Menurut hewan",
    "title": "Bagaimana Tikus Bertemu Dua Belas Hewan Zodiak",
    "summary": "Hubungan apa yang dimiliki Tikus (子) dengan masing-masing dari dua belas hewan zodiak, berapa skor masing-masing, dan berapa bagian dari tingkat kecocokan akhir yang diambil skor itu — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Tikus adalah cabang pertama dari dua belas cabang",
        "blocks": [
          {
            "p": "Tikus adalah orang yang cabang tahun lahirnya **子**. 子 adalah cabang bumi pertama dari dua belas cabang bumi, dan ketika kedua belas karakter disusun melingkar, ia berada tepat di seberang 午 (Kuda)."
          },
          {
            "p": "Baris yang ditampilkan hasil kecocokan untuk orang berzodiak Tikus adalah: \"Cepat menangkap keadaan dan cepat mengamankan yang penting. Paling dulu bergerak saat krisis.\" Baris ini tidak berkaitan dengan skor hubungan dan tidak memengaruhi skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas hewan zodiak sekilas",
        "blocks": [
          {
            "p": "Setiap hewan lain dipasangkan dengan Tikus secara bergantian. Hanya pasangan yang diakui layanan ini sebagai keharmonisan yang ditulis sebagai hubungan; yang lain netral."
          },
          {
            "table": {
              "caption": "Tikus dan dua belas hewan zodiak",
              "head": [
                "Hewan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Sapi (丑)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Harimau (寅)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Kelinci (卯)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Naga (辰)",
                  "Triad setengah",
                  "{scoreBanhap}"
                ],
                [
                  "Ular (巳)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuda (午)",
                  "Tabrakan",
                  "{scoreChung}"
                ],
                [
                  "Domba (未)",
                  "Ketidakcocokan",
                  "{scoreWonjin}"
                ],
                [
                  "Monyet (申)",
                  "Triad setengah",
                  "{scoreBanhap}"
                ],
                [
                  "Ayam (酉)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Anjing (戌)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Babi (亥)",
                  "Netral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sapi — pasangan yang saling menarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "子 dan 丑 membentuk keharmonisan hanya dengan dua karakter. Enam-Harmoni adalah hubungan baik yang paling sering muncul dalam kecocokan, dan Tikus dengan Sapi mendapat {scoreYukhap}, skor tertinggi yang bisa diperoleh Tikus."
          }
        ]
      },
      {
        "title": "Naga dan Monyet — triad setengah yang menyertakan cabang raja",
        "blocks": [
          {
            "p": "申子辰 adalah satu kelompok triad (kelompok air), dan 子 adalah **cabang raja** di pusatnya. Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga Tikus membentuk triad setengah ({scoreBanhap}) dengan Naga maupun Monyet."
          },
          {
            "p": "**Monyet dan Naga bersama-sama**, sebaliknya, tidak memiliki karakter pusat 子, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral. Bahkan dalam satu kelompok triad, Tikus-lah yang membentuk triad setengah."
          }
        ]
      },
      {
        "title": "Kuda — benturan langsung (Tabrakan)",
        "blocks": [
          {
            "p": "子 dan 午 berada tepat berseberangan di lingkaran. Layanan ini tetap memberi {scoreChung} poin meskipun tabrakan. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan, dan memberi skor mendekati nol sama saja dengan menjatuhkan vonis atas dua orang. Meski begitu, ini adalah skor terendah yang bisa diterima Tikus."
          }
        ]
      },
      {
        "title": "Domba — ketidakcocokan yang tenang (Ketidakcocokan)",
        "blocks": [
          {
            "p": "子 dan 未 berada tepat di sebelah 午 (Kuda), posisi tabrakan, dan secara tradisional dipandang sebagai pasangan yang saling menyimpan kesal namun tidak bisa berpisah. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama, sehingga mendapat {scoreWonjin} — lebih tinggi daripada tabrakan ({scoreChung}) dan lebih rendah daripada netral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "6 hewan lain, dan Tikus dengan Tikus lainnya",
        "blocks": [
          {
            "p": "Harimau, Kelinci, Ular, Ayam, Anjing, dan Babi bukan keharmonisan, tabrakan, maupun ketidakcocokan dengan Tikus: mereka **netral** dan mendapat {scoreNeutral}. Mereka adalah garis dasar, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang berzodiak Tikus mendapat {scoreSame}. Artinya mereka mirip, bukan saling tertarik, sehingga berada sedikit di atas netral."
          }
        ]
      },
      {
        "title": "Berapa bagian dari tingkat kecocokan akhir yang diambil skor ini",
        "blocks": [
          {
            "p": "Ada dua tempat di mana cabang dua orang diletakkan berdampingan."
          },
          {
            "ul": [
              "**Kecocokan zodiak** melihat cabang tahun lahir. Bobotnya {weightZodiac} dari tingkat kecocokan akhir.",
              "**Kecocokan cabang hari** melihat cabang hari lahir. Bobotnya {weightDayBranch} dari kecocokan saju ({weightSaju}), yaitu {weightDayBranchTotal} dari tingkat kecocokan akhir."
            ]
          },
          {
            "p": "Misalnya, ketika orang berzodiak Tikus bertemu orang berzodiak Kuda, kecocokan zodiak menghasilkan tabrakan. Jika semua hal lain sama, tingkat kecocokan akhir menjadi {swingZodiacChung} poin lebih rendah daripada pasangan netral. Dengan orang berzodiak Sapi itu adalah Enam-Harmoni, dan tingkatnya menjadi {swingZodiacYukhap} poin lebih tinggi."
          },
          {
            "p": "Cabang tahun dan hari bisa berbeda. Dua orang berzodiak Tikus yang cabang harinya 子 dan 午 mendapat cabang yang sama ({scoreSame}) dalam kecocokan zodiak dan tabrakan ({scoreChung}) dalam kecocokan cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang.",
              "Tabel lengkap hubungan mana yang mendapat berapa skor ada di [tabel dua belas cabang](/guide/branches), dan alasan zodiak dibaca dari cabang tahun ada di [Mengapa kecocokan zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Hewan lainnya disusun dengan cara yang sama. [Sapi](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Kelinci](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Domba](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-ox": {
    "eyebrow": "Menurut hewan",
    "title": "Bagaimana Sapi Bertemu Dua Belas Hewan Zodiak",
    "summary": "Hubungan apa yang dimiliki Sapi (丑) dengan masing-masing dari dua belas hewan zodiak, berapa skor masing-masing, dan berapa bagian dari tingkat kecocokan akhir yang diambil skor itu — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Sapi adalah cabang kedua dari dua belas cabang",
        "blocks": [
          {
            "p": "Sapi adalah orang yang cabang tahun lahirnya **丑**. 丑 adalah cabang bumi kedua dari dua belas cabang bumi, dan ketika kedua belas karakter disusun melingkar, ia berada tepat di seberang 未 (Domba)."
          },
          {
            "p": "Baris yang ditampilkan hasil kecocokan untuk orang berzodiak Sapi adalah: \"Terlihat lambat tetapi selalu menuntaskan. Apa yang diambilnya, tidak dilepaskan.\" Baris ini tidak berkaitan dengan skor hubungan dan tidak memengaruhi skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas hewan zodiak sekilas",
        "blocks": [
          {
            "p": "Setiap hewan lain dipasangkan dengan Sapi secara bergantian. Hanya pasangan yang diakui layanan ini sebagai keharmonisan yang ditulis sebagai hubungan; yang lain netral."
          },
          {
            "table": {
              "caption": "Sapi dan dua belas hewan zodiak",
              "head": [
                "Hewan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Sapi (丑)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Harimau (寅)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Kelinci (卯)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Naga (辰)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Ular (巳)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuda (午)",
                  "Ketidakcocokan",
                  "{scoreWonjin}"
                ],
                [
                  "Domba (未)",
                  "Tabrakan",
                  "{scoreChung}"
                ],
                [
                  "Monyet (申)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Ayam (酉)",
                  "Triad setengah",
                  "{scoreBanhap}"
                ],
                [
                  "Anjing (戌)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Babi (亥)",
                  "Netral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Tikus — pasangan yang saling menarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "丑 dan 子 membentuk keharmonisan hanya dengan dua karakter. Enam-Harmoni adalah hubungan baik yang paling sering muncul dalam kecocokan, dan Sapi dengan Tikus mendapat {scoreYukhap}, skor tertinggi yang bisa diperoleh Sapi."
          }
        ]
      },
      {
        "title": "Ayam — triad setengah yang menyertakan cabang raja",
        "blocks": [
          {
            "p": "巳酉丑 adalah satu kelompok triad (kelompok logam), dan 酉 adalah **cabang raja** di pusatnya. Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga Sapi membentuk triad setengah ({scoreBanhap}) hanya dengan Ayam."
          },
          {
            "p": "Dengan Ular (巳) dari kelompok yang sama, karakter pusat 酉 tidak ada, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral ({scoreNeutral}). Berada dalam kelompok yang sama tidak membuat setiap pasangan menjadi keharmonisan."
          }
        ]
      },
      {
        "title": "Domba — benturan langsung (Tabrakan)",
        "blocks": [
          {
            "p": "丑 dan 未 berada tepat berseberangan di lingkaran. Layanan ini tetap memberi {scoreChung} poin meskipun tabrakan. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan, dan memberi skor mendekati nol sama saja dengan menjatuhkan vonis atas dua orang. Meski begitu, ini adalah skor terendah yang bisa diterima Sapi."
          }
        ]
      },
      {
        "title": "Kuda — ketidakcocokan yang tenang (Ketidakcocokan)",
        "blocks": [
          {
            "p": "丑 dan 午 berada tepat di sebelah 未 (Domba), posisi tabrakan, dan secara tradisional dipandang sebagai pasangan yang saling menyimpan kesal namun tidak bisa berpisah. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama, sehingga mendapat {scoreWonjin} — lebih tinggi daripada tabrakan ({scoreChung}) dan lebih rendah daripada netral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "7 hewan lain, dan Sapi dengan Sapi lainnya",
        "blocks": [
          {
            "p": "Harimau, Kelinci, Naga, Ular, Monyet, Anjing, dan Babi bukan keharmonisan, tabrakan, maupun ketidakcocokan dengan Sapi: mereka **netral** dan mendapat {scoreNeutral}. Mereka adalah garis dasar, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang berzodiak Sapi mendapat {scoreSame}. Artinya mereka mirip, bukan saling tertarik, sehingga berada sedikit di atas netral."
          }
        ]
      },
      {
        "title": "Berapa bagian dari tingkat kecocokan akhir yang diambil skor ini",
        "blocks": [
          {
            "p": "Ada dua tempat di mana cabang dua orang diletakkan berdampingan."
          },
          {
            "ul": [
              "**Kecocokan zodiak** melihat cabang tahun lahir. Bobotnya {weightZodiac} dari tingkat kecocokan akhir.",
              "**Kecocokan cabang hari** melihat cabang hari lahir. Bobotnya {weightDayBranch} dari kecocokan saju ({weightSaju}), yaitu {weightDayBranchTotal} dari tingkat kecocokan akhir."
            ]
          },
          {
            "p": "Misalnya, ketika orang berzodiak Sapi bertemu orang berzodiak Domba, kecocokan zodiak menghasilkan tabrakan. Jika semua hal lain sama, tingkat kecocokan akhir menjadi {swingZodiacChung} poin lebih rendah daripada pasangan netral. Dengan orang berzodiak Tikus itu adalah Enam-Harmoni, dan tingkatnya menjadi {swingZodiacYukhap} poin lebih tinggi."
          },
          {
            "p": "Cabang tahun dan hari bisa berbeda. Dua orang berzodiak Sapi yang cabang harinya 丑 dan 未 mendapat cabang yang sama ({scoreSame}) dalam kecocokan zodiak dan tabrakan ({scoreChung}) dalam kecocokan cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang.",
              "Tabel lengkap hubungan mana yang mendapat berapa skor ada di [tabel dua belas cabang](/guide/branches), dan alasan zodiak dibaca dari cabang tahun ada di [Mengapa kecocokan zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Hewan lainnya disusun dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Harimau](/guide/zodiac-tiger) · [Kelinci](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Domba](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-tiger": {
    "eyebrow": "Menurut hewan",
    "title": "Bagaimana Harimau Bertemu Dua Belas Hewan Zodiak",
    "summary": "Hubungan apa yang dimiliki Harimau (寅) dengan masing-masing dari dua belas hewan zodiak, berapa skor masing-masing, dan berapa bagian dari tingkat kecocokan akhir yang diambil skor itu — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Harimau adalah cabang ketiga dari dua belas cabang",
        "blocks": [
          {
            "p": "Harimau adalah orang yang cabang tahun lahirnya **寅**. 寅 adalah cabang bumi ketiga dari dua belas cabang bumi, dan ketika kedua belas karakter disusun melingkar, ia berada tepat di seberang 申 (Monyet)."
          },
          {
            "p": "Baris yang ditampilkan hasil kecocokan untuk orang berzodiak Harimau adalah: \"Tak kenal takut dan berdiri paling depan. Tidak bisa membiarkan ketidakadilan lewat.\" Baris ini tidak berkaitan dengan skor hubungan dan tidak memengaruhi skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas hewan zodiak sekilas",
        "blocks": [
          {
            "p": "Setiap hewan lain dipasangkan dengan Harimau secara bergantian. Hanya pasangan yang diakui layanan ini sebagai keharmonisan yang ditulis sebagai hubungan; yang lain netral."
          },
          {
            "table": {
              "caption": "Harimau dan dua belas hewan zodiak",
              "head": [
                "Hewan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Sapi (丑)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Harimau (寅)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Kelinci (卯)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Naga (辰)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Ular (巳)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuda (午)",
                  "Triad setengah",
                  "{scoreBanhap}"
                ],
                [
                  "Domba (未)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Monyet (申)",
                  "Tabrakan",
                  "{scoreChung}"
                ],
                [
                  "Ayam (酉)",
                  "Ketidakcocokan",
                  "{scoreWonjin}"
                ],
                [
                  "Anjing (戌)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Babi (亥)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Babi — pasangan yang saling menarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "寅 dan 亥 membentuk keharmonisan hanya dengan dua karakter. Enam-Harmoni adalah hubungan baik yang paling sering muncul dalam kecocokan, dan Harimau dengan Babi mendapat {scoreYukhap}, skor tertinggi yang bisa diperoleh Harimau."
          }
        ]
      },
      {
        "title": "Kuda — triad setengah yang menyertakan cabang raja",
        "blocks": [
          {
            "p": "寅午戌 adalah satu kelompok triad (kelompok api), dan 午 adalah **cabang raja** di pusatnya. Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga Harimau membentuk triad setengah ({scoreBanhap}) hanya dengan Kuda."
          },
          {
            "p": "Dengan Anjing (戌) dari kelompok yang sama, karakter pusat 午 tidak ada, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral ({scoreNeutral}). Berada dalam kelompok yang sama tidak membuat setiap pasangan menjadi keharmonisan."
          }
        ]
      },
      {
        "title": "Monyet — benturan langsung (Tabrakan)",
        "blocks": [
          {
            "p": "寅 dan 申 berada tepat berseberangan di lingkaran. Layanan ini tetap memberi {scoreChung} poin meskipun tabrakan. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan, dan memberi skor mendekati nol sama saja dengan menjatuhkan vonis atas dua orang. Meski begitu, ini adalah skor terendah yang bisa diterima Harimau."
          }
        ]
      },
      {
        "title": "Ayam — ketidakcocokan yang tenang (Ketidakcocokan)",
        "blocks": [
          {
            "p": "寅 dan 酉 berada tepat di sebelah 申 (Monyet), posisi tabrakan, dan secara tradisional dipandang sebagai pasangan yang saling menyimpan kesal namun tidak bisa berpisah. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama, sehingga mendapat {scoreWonjin} — lebih tinggi daripada tabrakan ({scoreChung}) dan lebih rendah daripada netral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "7 hewan lain, dan Harimau dengan Harimau lainnya",
        "blocks": [
          {
            "p": "Tikus, Sapi, Kelinci, Naga, Ular, Domba, dan Anjing bukan keharmonisan, tabrakan, maupun ketidakcocokan dengan Harimau: mereka **netral** dan mendapat {scoreNeutral}. Mereka adalah garis dasar, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang berzodiak Harimau mendapat {scoreSame}. Artinya mereka mirip, bukan saling tertarik, sehingga berada sedikit di atas netral."
          }
        ]
      },
      {
        "title": "Berapa bagian dari tingkat kecocokan akhir yang diambil skor ini",
        "blocks": [
          {
            "p": "Ada dua tempat di mana cabang dua orang diletakkan berdampingan."
          },
          {
            "ul": [
              "**Kecocokan zodiak** melihat cabang tahun lahir. Bobotnya {weightZodiac} dari tingkat kecocokan akhir.",
              "**Kecocokan cabang hari** melihat cabang hari lahir. Bobotnya {weightDayBranch} dari kecocokan saju ({weightSaju}), yaitu {weightDayBranchTotal} dari tingkat kecocokan akhir."
            ]
          },
          {
            "p": "Misalnya, ketika orang berzodiak Harimau bertemu orang berzodiak Monyet, kecocokan zodiak menghasilkan tabrakan. Jika semua hal lain sama, tingkat kecocokan akhir menjadi {swingZodiacChung} poin lebih rendah daripada pasangan netral. Dengan orang berzodiak Babi itu adalah Enam-Harmoni, dan tingkatnya menjadi {swingZodiacYukhap} poin lebih tinggi."
          },
          {
            "p": "Cabang tahun dan hari bisa berbeda. Dua orang berzodiak Harimau yang cabang harinya 寅 dan 申 mendapat cabang yang sama ({scoreSame}) dalam kecocokan zodiak dan tabrakan ({scoreChung}) dalam kecocokan cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang.",
              "Tabel lengkap hubungan mana yang mendapat berapa skor ada di [tabel dua belas cabang](/guide/branches), dan alasan zodiak dibaca dari cabang tahun ada di [Mengapa kecocokan zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Hewan lainnya disusun dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Sapi](/guide/zodiac-ox) · [Kelinci](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Domba](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rabbit": {
    "eyebrow": "Menurut hewan",
    "title": "Bagaimana Kelinci Bertemu Dua Belas Hewan Zodiak",
    "summary": "Hubungan apa yang dimiliki Kelinci (卯) dengan masing-masing dari dua belas hewan zodiak, berapa skor masing-masing, dan berapa bagian dari tingkat kecocokan akhir yang diambil skor itu — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Kelinci adalah cabang keempat dari dua belas cabang",
        "blocks": [
          {
            "p": "Kelinci adalah orang yang cabang tahun lahirnya **卯**. 卯 adalah cabang bumi keempat dari dua belas cabang bumi, dan ketika kedua belas karakter disusun melingkar, ia berada tepat di seberang 酉 (Ayam)."
          },
          {
            "p": "Baris yang ditampilkan hasil kecocokan untuk orang berzodiak Kelinci adalah: \"Lembut dan peka. Tahu cara memutar alih-alih berbenturan.\" Baris ini tidak berkaitan dengan skor hubungan dan tidak memengaruhi skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas hewan zodiak sekilas",
        "blocks": [
          {
            "p": "Setiap hewan lain dipasangkan dengan Kelinci secara bergantian. Hanya pasangan yang diakui layanan ini sebagai keharmonisan yang ditulis sebagai hubungan; yang lain netral."
          },
          {
            "table": {
              "caption": "Kelinci dan dua belas hewan zodiak",
              "head": [
                "Hewan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Sapi (丑)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Harimau (寅)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Kelinci (卯)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Naga (辰)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Ular (巳)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuda (午)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Domba (未)",
                  "Triad setengah",
                  "{scoreBanhap}"
                ],
                [
                  "Monyet (申)",
                  "Ketidakcocokan",
                  "{scoreWonjin}"
                ],
                [
                  "Ayam (酉)",
                  "Tabrakan",
                  "{scoreChung}"
                ],
                [
                  "Anjing (戌)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Babi (亥)",
                  "Triad setengah",
                  "{scoreBanhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Anjing — pasangan yang saling menarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "卯 dan 戌 membentuk keharmonisan hanya dengan dua karakter. Enam-Harmoni adalah hubungan baik yang paling sering muncul dalam kecocokan, dan Kelinci dengan Anjing mendapat {scoreYukhap}, skor tertinggi yang bisa diperoleh Kelinci."
          }
        ]
      },
      {
        "title": "Domba dan Babi — triad setengah yang menyertakan cabang raja",
        "blocks": [
          {
            "p": "亥卯未 adalah satu kelompok triad (kelompok kayu), dan 卯 adalah **cabang raja** di pusatnya. Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga Kelinci membentuk triad setengah ({scoreBanhap}) dengan Domba maupun Babi."
          },
          {
            "p": "**Babi dan Domba bersama-sama**, sebaliknya, tidak memiliki karakter pusat 卯, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral. Bahkan dalam satu kelompok triad, Kelinci-lah yang membentuk triad setengah."
          }
        ]
      },
      {
        "title": "Ayam — benturan langsung (Tabrakan)",
        "blocks": [
          {
            "p": "卯 dan 酉 berada tepat berseberangan di lingkaran. Layanan ini tetap memberi {scoreChung} poin meskipun tabrakan. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan, dan memberi skor mendekati nol sama saja dengan menjatuhkan vonis atas dua orang. Meski begitu, ini adalah skor terendah yang bisa diterima Kelinci."
          }
        ]
      },
      {
        "title": "Monyet — ketidakcocokan yang tenang (Ketidakcocokan)",
        "blocks": [
          {
            "p": "卯 dan 申 berada tepat di sebelah 酉 (Ayam), posisi tabrakan, dan secara tradisional dipandang sebagai pasangan yang saling menyimpan kesal namun tidak bisa berpisah. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama, sehingga mendapat {scoreWonjin} — lebih tinggi daripada tabrakan ({scoreChung}) dan lebih rendah daripada netral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "6 hewan lain, dan Kelinci dengan Kelinci lainnya",
        "blocks": [
          {
            "p": "Tikus, Sapi, Harimau, Naga, Ular, dan Kuda bukan keharmonisan, tabrakan, maupun ketidakcocokan dengan Kelinci: mereka **netral** dan mendapat {scoreNeutral}. Mereka adalah garis dasar, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang berzodiak Kelinci mendapat {scoreSame}. Artinya mereka mirip, bukan saling tertarik, sehingga berada sedikit di atas netral."
          }
        ]
      },
      {
        "title": "Berapa bagian dari tingkat kecocokan akhir yang diambil skor ini",
        "blocks": [
          {
            "p": "Ada dua tempat di mana cabang dua orang diletakkan berdampingan."
          },
          {
            "ul": [
              "**Kecocokan zodiak** melihat cabang tahun lahir. Bobotnya {weightZodiac} dari tingkat kecocokan akhir.",
              "**Kecocokan cabang hari** melihat cabang hari lahir. Bobotnya {weightDayBranch} dari kecocokan saju ({weightSaju}), yaitu {weightDayBranchTotal} dari tingkat kecocokan akhir."
            ]
          },
          {
            "p": "Misalnya, ketika orang berzodiak Kelinci bertemu orang berzodiak Ayam, kecocokan zodiak menghasilkan tabrakan. Jika semua hal lain sama, tingkat kecocokan akhir menjadi {swingZodiacChung} poin lebih rendah daripada pasangan netral. Dengan orang berzodiak Anjing itu adalah Enam-Harmoni, dan tingkatnya menjadi {swingZodiacYukhap} poin lebih tinggi."
          },
          {
            "p": "Cabang tahun dan hari bisa berbeda. Dua orang berzodiak Kelinci yang cabang harinya 卯 dan 酉 mendapat cabang yang sama ({scoreSame}) dalam kecocokan zodiak dan tabrakan ({scoreChung}) dalam kecocokan cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang.",
              "Tabel lengkap hubungan mana yang mendapat berapa skor ada di [tabel dua belas cabang](/guide/branches), dan alasan zodiak dibaca dari cabang tahun ada di [Mengapa kecocokan zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Hewan lainnya disusun dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Sapi](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Domba](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dragon": {
    "eyebrow": "Menurut hewan",
    "title": "Bagaimana Naga Bertemu Dua Belas Hewan Zodiak",
    "summary": "Hubungan apa yang dimiliki Naga (辰) dengan masing-masing dari dua belas hewan zodiak, berapa skor masing-masing, dan berapa bagian dari tingkat kecocokan akhir yang diambil skor itu — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Naga adalah cabang kelima dari dua belas cabang",
        "blocks": [
          {
            "p": "Naga adalah orang yang cabang tahun lahirnya **辰**. 辰 adalah cabang bumi kelima dari dua belas cabang bumi, dan ketika kedua belas karakter disusun melingkar, ia berada tepat di seberang 戌 (Anjing)."
          },
          {
            "p": "Baris yang ditampilkan hasil kecocokan untuk orang berzodiak Naga adalah: \"Berhati luas dengan cita-cita tinggi. Jarang puas dengan yang biasa-biasa saja.\" Baris ini tidak berkaitan dengan skor hubungan dan tidak memengaruhi skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas hewan zodiak sekilas",
        "blocks": [
          {
            "p": "Setiap hewan lain dipasangkan dengan Naga secara bergantian. Hanya pasangan yang diakui layanan ini sebagai keharmonisan yang ditulis sebagai hubungan; yang lain netral."
          },
          {
            "table": {
              "caption": "Naga dan dua belas hewan zodiak",
              "head": [
                "Hewan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Triad setengah",
                  "{scoreBanhap}"
                ],
                [
                  "Sapi (丑)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Harimau (寅)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Kelinci (卯)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Naga (辰)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Ular (巳)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuda (午)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Domba (未)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Monyet (申)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Ayam (酉)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Anjing (戌)",
                  "Tabrakan",
                  "{scoreChung}"
                ],
                [
                  "Babi (亥)",
                  "Ketidakcocokan",
                  "{scoreWonjin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ayam — pasangan yang saling menarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "辰 dan 酉 membentuk keharmonisan hanya dengan dua karakter. Enam-Harmoni adalah hubungan baik yang paling sering muncul dalam kecocokan, dan Naga dengan Ayam mendapat {scoreYukhap}, skor tertinggi yang bisa diperoleh Naga."
          }
        ]
      },
      {
        "title": "Tikus — triad setengah yang menyertakan cabang raja",
        "blocks": [
          {
            "p": "申子辰 adalah satu kelompok triad (kelompok air), dan 子 adalah **cabang raja** di pusatnya. Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga Naga membentuk triad setengah ({scoreBanhap}) hanya dengan Tikus."
          },
          {
            "p": "Dengan Monyet (申) dari kelompok yang sama, karakter pusat 子 tidak ada, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral ({scoreNeutral}). Berada dalam kelompok yang sama tidak membuat setiap pasangan menjadi keharmonisan."
          }
        ]
      },
      {
        "title": "Anjing — benturan langsung (Tabrakan)",
        "blocks": [
          {
            "p": "辰 dan 戌 berada tepat berseberangan di lingkaran. Layanan ini tetap memberi {scoreChung} poin meskipun tabrakan. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan, dan memberi skor mendekati nol sama saja dengan menjatuhkan vonis atas dua orang. Meski begitu, ini adalah skor terendah yang bisa diterima Naga."
          }
        ]
      },
      {
        "title": "Babi — ketidakcocokan yang tenang (Ketidakcocokan)",
        "blocks": [
          {
            "p": "辰 dan 亥 berada tepat di sebelah 戌 (Anjing), posisi tabrakan, dan secara tradisional dipandang sebagai pasangan yang saling menyimpan kesal namun tidak bisa berpisah. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama, sehingga mendapat {scoreWonjin} — lebih tinggi daripada tabrakan ({scoreChung}) dan lebih rendah daripada netral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "7 hewan lain, dan Naga dengan Naga lainnya",
        "blocks": [
          {
            "p": "Sapi, Harimau, Kelinci, Ular, Kuda, Domba, dan Monyet bukan keharmonisan, tabrakan, maupun ketidakcocokan dengan Naga: mereka **netral** dan mendapat {scoreNeutral}. Mereka adalah garis dasar, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang berzodiak Naga mendapat {scoreSame}. Artinya mereka mirip, bukan saling tertarik, sehingga berada sedikit di atas netral."
          }
        ]
      },
      {
        "title": "Berapa bagian dari tingkat kecocokan akhir yang diambil skor ini",
        "blocks": [
          {
            "p": "Ada dua tempat di mana cabang dua orang diletakkan berdampingan."
          },
          {
            "ul": [
              "**Kecocokan zodiak** melihat cabang tahun lahir. Bobotnya {weightZodiac} dari tingkat kecocokan akhir.",
              "**Kecocokan cabang hari** melihat cabang hari lahir. Bobotnya {weightDayBranch} dari kecocokan saju ({weightSaju}), yaitu {weightDayBranchTotal} dari tingkat kecocokan akhir."
            ]
          },
          {
            "p": "Misalnya, ketika orang berzodiak Naga bertemu orang berzodiak Anjing, kecocokan zodiak menghasilkan tabrakan. Jika semua hal lain sama, tingkat kecocokan akhir menjadi {swingZodiacChung} poin lebih rendah daripada pasangan netral. Dengan orang berzodiak Ayam itu adalah Enam-Harmoni, dan tingkatnya menjadi {swingZodiacYukhap} poin lebih tinggi."
          },
          {
            "p": "Cabang tahun dan hari bisa berbeda. Dua orang berzodiak Naga yang cabang harinya 辰 dan 戌 mendapat cabang yang sama ({scoreSame}) dalam kecocokan zodiak dan tabrakan ({scoreChung}) dalam kecocokan cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang.",
              "Tabel lengkap hubungan mana yang mendapat berapa skor ada di [tabel dua belas cabang](/guide/branches), dan alasan zodiak dibaca dari cabang tahun ada di [Mengapa kecocokan zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Hewan lainnya disusun dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Sapi](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Kelinci](/guide/zodiac-rabbit) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Domba](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-snake": {
    "eyebrow": "Menurut hewan",
    "title": "Bagaimana Ular Bertemu Dua Belas Hewan Zodiak",
    "summary": "Hubungan apa yang dimiliki Ular (巳) dengan masing-masing dari dua belas hewan zodiak, berapa skor masing-masing, dan berapa bagian dari tingkat kecocokan akhir yang diambil skor itu — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Ular adalah cabang keenam dari dua belas cabang",
        "blocks": [
          {
            "p": "Ular adalah orang yang cabang tahun lahirnya **巳**. 巳 adalah cabang bumi keenam dari dua belas cabang bumi, dan ketika kedua belas karakter disusun melingkar, ia berada tepat di seberang 亥 (Babi)."
          },
          {
            "p": "Baris yang ditampilkan hasil kecocokan untuk orang berzodiak Ular adalah: \"Menyimpan pikirannya sendiri dan berpikir dalam. Penilaiannya tepat.\" Baris ini tidak berkaitan dengan skor hubungan dan tidak memengaruhi skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas hewan zodiak sekilas",
        "blocks": [
          {
            "p": "Setiap hewan lain dipasangkan dengan Ular secara bergantian. Hanya pasangan yang diakui layanan ini sebagai keharmonisan yang ditulis sebagai hubungan; yang lain netral."
          },
          {
            "table": {
              "caption": "Ular dan dua belas hewan zodiak",
              "head": [
                "Hewan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Sapi (丑)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Harimau (寅)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Kelinci (卯)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Naga (辰)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Ular (巳)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Kuda (午)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Domba (未)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Monyet (申)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Ayam (酉)",
                  "Triad setengah",
                  "{scoreBanhap}"
                ],
                [
                  "Anjing (戌)",
                  "Ketidakcocokan",
                  "{scoreWonjin}"
                ],
                [
                  "Babi (亥)",
                  "Tabrakan",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Monyet — pasangan yang saling menarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "巳 dan 申 membentuk keharmonisan hanya dengan dua karakter. Enam-Harmoni adalah hubungan baik yang paling sering muncul dalam kecocokan, dan Ular dengan Monyet mendapat {scoreYukhap}, skor tertinggi yang bisa diperoleh Ular."
          }
        ]
      },
      {
        "title": "Ayam — triad setengah yang menyertakan cabang raja",
        "blocks": [
          {
            "p": "巳酉丑 adalah satu kelompok triad (kelompok logam), dan 酉 adalah **cabang raja** di pusatnya. Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga Ular membentuk triad setengah ({scoreBanhap}) hanya dengan Ayam."
          },
          {
            "p": "Dengan Sapi (丑) dari kelompok yang sama, karakter pusat 酉 tidak ada, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral ({scoreNeutral}). Berada dalam kelompok yang sama tidak membuat setiap pasangan menjadi keharmonisan."
          }
        ]
      },
      {
        "title": "Babi — benturan langsung (Tabrakan)",
        "blocks": [
          {
            "p": "巳 dan 亥 berada tepat berseberangan di lingkaran. Layanan ini tetap memberi {scoreChung} poin meskipun tabrakan. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan, dan memberi skor mendekati nol sama saja dengan menjatuhkan vonis atas dua orang. Meski begitu, ini adalah skor terendah yang bisa diterima Ular."
          }
        ]
      },
      {
        "title": "Anjing — ketidakcocokan yang tenang (Ketidakcocokan)",
        "blocks": [
          {
            "p": "巳 dan 戌 berada tepat di sebelah 亥 (Babi), posisi tabrakan, dan secara tradisional dipandang sebagai pasangan yang saling menyimpan kesal namun tidak bisa berpisah. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama, sehingga mendapat {scoreWonjin} — lebih tinggi daripada tabrakan ({scoreChung}) dan lebih rendah daripada netral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "7 hewan lain, dan Ular dengan Ular lainnya",
        "blocks": [
          {
            "p": "Tikus, Sapi, Harimau, Kelinci, Naga, Kuda, dan Domba bukan keharmonisan, tabrakan, maupun ketidakcocokan dengan Ular: mereka **netral** dan mendapat {scoreNeutral}. Mereka adalah garis dasar, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang berzodiak Ular mendapat {scoreSame}. Artinya mereka mirip, bukan saling tertarik, sehingga berada sedikit di atas netral."
          }
        ]
      },
      {
        "title": "Berapa bagian dari tingkat kecocokan akhir yang diambil skor ini",
        "blocks": [
          {
            "p": "Ada dua tempat di mana cabang dua orang diletakkan berdampingan."
          },
          {
            "ul": [
              "**Kecocokan zodiak** melihat cabang tahun lahir. Bobotnya {weightZodiac} dari tingkat kecocokan akhir.",
              "**Kecocokan cabang hari** melihat cabang hari lahir. Bobotnya {weightDayBranch} dari kecocokan saju ({weightSaju}), yaitu {weightDayBranchTotal} dari tingkat kecocokan akhir."
            ]
          },
          {
            "p": "Misalnya, ketika orang berzodiak Ular bertemu orang berzodiak Babi, kecocokan zodiak menghasilkan tabrakan. Jika semua hal lain sama, tingkat kecocokan akhir menjadi {swingZodiacChung} poin lebih rendah daripada pasangan netral. Dengan orang berzodiak Monyet itu adalah Enam-Harmoni, dan tingkatnya menjadi {swingZodiacYukhap} poin lebih tinggi."
          },
          {
            "p": "Cabang tahun dan hari bisa berbeda. Dua orang berzodiak Ular yang cabang harinya 巳 dan 亥 mendapat cabang yang sama ({scoreSame}) dalam kecocokan zodiak dan tabrakan ({scoreChung}) dalam kecocokan cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang.",
              "Tabel lengkap hubungan mana yang mendapat berapa skor ada di [tabel dua belas cabang](/guide/branches), dan alasan zodiak dibaca dari cabang tahun ada di [Mengapa kecocokan zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Hewan lainnya disusun dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Sapi](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Kelinci](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Kuda](/guide/zodiac-horse) · [Domba](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-horse": {
    "eyebrow": "Menurut hewan",
    "title": "Bagaimana Kuda Bertemu Dua Belas Hewan Zodiak",
    "summary": "Hubungan apa yang dimiliki Kuda (午) dengan masing-masing dari dua belas hewan zodiak, berapa skor masing-masing, dan berapa bagian dari tingkat kecocokan akhir yang diambil skor itu — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Kuda adalah cabang ketujuh dari dua belas cabang",
        "blocks": [
          {
            "p": "Kuda adalah orang yang cabang tahun lahirnya **午**. 午 adalah cabang bumi ketujuh dari dua belas cabang bumi, dan ketika kedua belas karakter disusun melingkar, ia berada tepat di seberang 子 (Tikus)."
          },
          {
            "p": "Baris yang ditampilkan hasil kecocokan untuk orang berzodiak Kuda adalah: \"Ceria dan tak bisa diam. Terkurung adalah hal terberat baginya.\" Baris ini tidak berkaitan dengan skor hubungan dan tidak memengaruhi skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas hewan zodiak sekilas",
        "blocks": [
          {
            "p": "Setiap hewan lain dipasangkan dengan Kuda secara bergantian. Hanya pasangan yang diakui layanan ini sebagai keharmonisan yang ditulis sebagai hubungan; yang lain netral."
          },
          {
            "table": {
              "caption": "Kuda dan dua belas hewan zodiak",
              "head": [
                "Hewan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Tabrakan",
                  "{scoreChung}"
                ],
                [
                  "Sapi (丑)",
                  "Ketidakcocokan",
                  "{scoreWonjin}"
                ],
                [
                  "Harimau (寅)",
                  "Triad setengah",
                  "{scoreBanhap}"
                ],
                [
                  "Kelinci (卯)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Naga (辰)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Ular (巳)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuda (午)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Domba (未)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Monyet (申)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Ayam (酉)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Anjing (戌)",
                  "Triad setengah",
                  "{scoreBanhap}"
                ],
                [
                  "Babi (亥)",
                  "Netral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Domba — pasangan yang saling menarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "午 dan 未 membentuk keharmonisan hanya dengan dua karakter. Enam-Harmoni adalah hubungan baik yang paling sering muncul dalam kecocokan, dan Kuda dengan Domba mendapat {scoreYukhap}, skor tertinggi yang bisa diperoleh Kuda."
          }
        ]
      },
      {
        "title": "Harimau dan Anjing — triad setengah yang menyertakan cabang raja",
        "blocks": [
          {
            "p": "寅午戌 adalah satu kelompok triad (kelompok api), dan 午 adalah **cabang raja** di pusatnya. Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga Kuda membentuk triad setengah ({scoreBanhap}) dengan Harimau maupun Anjing."
          },
          {
            "p": "**Harimau dan Anjing bersama-sama**, sebaliknya, tidak memiliki karakter pusat 午, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral. Bahkan dalam satu kelompok triad, Kuda-lah yang membentuk triad setengah."
          }
        ]
      },
      {
        "title": "Tikus — benturan langsung (Tabrakan)",
        "blocks": [
          {
            "p": "午 dan 子 berada tepat berseberangan di lingkaran. Layanan ini tetap memberi {scoreChung} poin meskipun tabrakan. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan, dan memberi skor mendekati nol sama saja dengan menjatuhkan vonis atas dua orang. Meski begitu, ini adalah skor terendah yang bisa diterima Kuda."
          }
        ]
      },
      {
        "title": "Sapi — ketidakcocokan yang tenang (Ketidakcocokan)",
        "blocks": [
          {
            "p": "午 dan 丑 berada tepat di sebelah 子 (Tikus), posisi tabrakan, dan secara tradisional dipandang sebagai pasangan yang saling menyimpan kesal namun tidak bisa berpisah. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama, sehingga mendapat {scoreWonjin} — lebih tinggi daripada tabrakan ({scoreChung}) dan lebih rendah daripada netral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "6 hewan lain, dan Kuda dengan Kuda lainnya",
        "blocks": [
          {
            "p": "Kelinci, Naga, Ular, Monyet, Ayam, dan Babi bukan keharmonisan, tabrakan, maupun ketidakcocokan dengan Kuda: mereka **netral** dan mendapat {scoreNeutral}. Mereka adalah garis dasar, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang berzodiak Kuda mendapat {scoreSame}. Artinya mereka mirip, bukan saling tertarik, sehingga berada sedikit di atas netral."
          }
        ]
      },
      {
        "title": "Berapa bagian dari tingkat kecocokan akhir yang diambil skor ini",
        "blocks": [
          {
            "p": "Ada dua tempat di mana cabang dua orang diletakkan berdampingan."
          },
          {
            "ul": [
              "**Kecocokan zodiak** melihat cabang tahun lahir. Bobotnya {weightZodiac} dari tingkat kecocokan akhir.",
              "**Kecocokan cabang hari** melihat cabang hari lahir. Bobotnya {weightDayBranch} dari kecocokan saju ({weightSaju}), yaitu {weightDayBranchTotal} dari tingkat kecocokan akhir."
            ]
          },
          {
            "p": "Misalnya, ketika orang berzodiak Kuda bertemu orang berzodiak Tikus, kecocokan zodiak menghasilkan tabrakan. Jika semua hal lain sama, tingkat kecocokan akhir menjadi {swingZodiacChung} poin lebih rendah daripada pasangan netral. Dengan orang berzodiak Domba itu adalah Enam-Harmoni, dan tingkatnya menjadi {swingZodiacYukhap} poin lebih tinggi."
          },
          {
            "p": "Cabang tahun dan hari bisa berbeda. Dua orang berzodiak Kuda yang cabang harinya 午 dan 子 mendapat cabang yang sama ({scoreSame}) dalam kecocokan zodiak dan tabrakan ({scoreChung}) dalam kecocokan cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang.",
              "Tabel lengkap hubungan mana yang mendapat berapa skor ada di [tabel dua belas cabang](/guide/branches), dan alasan zodiak dibaca dari cabang tahun ada di [Mengapa kecocokan zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Hewan lainnya disusun dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Sapi](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Kelinci](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Domba](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-goat": {
    "eyebrow": "Menurut hewan",
    "title": "Bagaimana Domba Bertemu Dua Belas Hewan Zodiak",
    "summary": "Hubungan apa yang dimiliki Domba (未) dengan masing-masing dari dua belas hewan zodiak, berapa skor masing-masing, dan berapa bagian dari tingkat kecocokan akhir yang diambil skor itu — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Domba adalah cabang kedelapan dari dua belas cabang",
        "blocks": [
          {
            "p": "Domba adalah orang yang cabang tahun lahirnya **未**. 未 adalah cabang bumi kedelapan dari dua belas cabang bumi, dan ketika kedua belas karakter disusun melingkar, ia berada tepat di seberang 丑 (Sapi)."
          },
          {
            "p": "Baris yang ditampilkan hasil kecocokan untuk orang berzodiak Domba adalah: \"Hangat dan penuh tenggang rasa. Kata-kata kasar disimpannya lama.\" Baris ini tidak berkaitan dengan skor hubungan dan tidak memengaruhi skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas hewan zodiak sekilas",
        "blocks": [
          {
            "p": "Setiap hewan lain dipasangkan dengan Domba secara bergantian. Hanya pasangan yang diakui layanan ini sebagai keharmonisan yang ditulis sebagai hubungan; yang lain netral."
          },
          {
            "table": {
              "caption": "Domba dan dua belas hewan zodiak",
              "head": [
                "Hewan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Ketidakcocokan",
                  "{scoreWonjin}"
                ],
                [
                  "Sapi (丑)",
                  "Tabrakan",
                  "{scoreChung}"
                ],
                [
                  "Harimau (寅)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Kelinci (卯)",
                  "Triad setengah",
                  "{scoreBanhap}"
                ],
                [
                  "Naga (辰)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Ular (巳)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuda (午)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Domba (未)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Monyet (申)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Ayam (酉)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Anjing (戌)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Babi (亥)",
                  "Netral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kuda — pasangan yang saling menarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "未 dan 午 membentuk keharmonisan hanya dengan dua karakter. Enam-Harmoni adalah hubungan baik yang paling sering muncul dalam kecocokan, dan Domba dengan Kuda mendapat {scoreYukhap}, skor tertinggi yang bisa diperoleh Domba."
          }
        ]
      },
      {
        "title": "Kelinci — triad setengah yang menyertakan cabang raja",
        "blocks": [
          {
            "p": "亥卯未 adalah satu kelompok triad (kelompok kayu), dan 卯 adalah **cabang raja** di pusatnya. Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga Domba membentuk triad setengah ({scoreBanhap}) hanya dengan Kelinci."
          },
          {
            "p": "Dengan Babi (亥) dari kelompok yang sama, karakter pusat 卯 tidak ada, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral ({scoreNeutral}). Berada dalam kelompok yang sama tidak membuat setiap pasangan menjadi keharmonisan."
          }
        ]
      },
      {
        "title": "Sapi — benturan langsung (Tabrakan)",
        "blocks": [
          {
            "p": "未 dan 丑 berada tepat berseberangan di lingkaran. Layanan ini tetap memberi {scoreChung} poin meskipun tabrakan. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan, dan memberi skor mendekati nol sama saja dengan menjatuhkan vonis atas dua orang. Meski begitu, ini adalah skor terendah yang bisa diterima Domba."
          }
        ]
      },
      {
        "title": "Tikus — ketidakcocokan yang tenang (Ketidakcocokan)",
        "blocks": [
          {
            "p": "未 dan 子 berada tepat di sebelah 丑 (Sapi), posisi tabrakan, dan secara tradisional dipandang sebagai pasangan yang saling menyimpan kesal namun tidak bisa berpisah. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama, sehingga mendapat {scoreWonjin} — lebih tinggi daripada tabrakan ({scoreChung}) dan lebih rendah daripada netral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "7 hewan lain, dan Domba dengan Domba lainnya",
        "blocks": [
          {
            "p": "Harimau, Naga, Ular, Monyet, Ayam, Anjing, dan Babi bukan keharmonisan, tabrakan, maupun ketidakcocokan dengan Domba: mereka **netral** dan mendapat {scoreNeutral}. Mereka adalah garis dasar, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang berzodiak Domba mendapat {scoreSame}. Artinya mereka mirip, bukan saling tertarik, sehingga berada sedikit di atas netral."
          }
        ]
      },
      {
        "title": "Berapa bagian dari tingkat kecocokan akhir yang diambil skor ini",
        "blocks": [
          {
            "p": "Ada dua tempat di mana cabang dua orang diletakkan berdampingan."
          },
          {
            "ul": [
              "**Kecocokan zodiak** melihat cabang tahun lahir. Bobotnya {weightZodiac} dari tingkat kecocokan akhir.",
              "**Kecocokan cabang hari** melihat cabang hari lahir. Bobotnya {weightDayBranch} dari kecocokan saju ({weightSaju}), yaitu {weightDayBranchTotal} dari tingkat kecocokan akhir."
            ]
          },
          {
            "p": "Misalnya, ketika orang berzodiak Domba bertemu orang berzodiak Sapi, kecocokan zodiak menghasilkan tabrakan. Jika semua hal lain sama, tingkat kecocokan akhir menjadi {swingZodiacChung} poin lebih rendah daripada pasangan netral. Dengan orang berzodiak Kuda itu adalah Enam-Harmoni, dan tingkatnya menjadi {swingZodiacYukhap} poin lebih tinggi."
          },
          {
            "p": "Cabang tahun dan hari bisa berbeda. Dua orang berzodiak Domba yang cabang harinya 未 dan 丑 mendapat cabang yang sama ({scoreSame}) dalam kecocokan zodiak dan tabrakan ({scoreChung}) dalam kecocokan cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang.",
              "Tabel lengkap hubungan mana yang mendapat berapa skor ada di [tabel dua belas cabang](/guide/branches), dan alasan zodiak dibaca dari cabang tahun ada di [Mengapa kecocokan zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Hewan lainnya disusun dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Sapi](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Kelinci](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-monkey": {
    "eyebrow": "Menurut hewan",
    "title": "Bagaimana Monyet Bertemu Dua Belas Hewan Zodiak",
    "summary": "Hubungan apa yang dimiliki Monyet (申) dengan masing-masing dari dua belas hewan zodiak, berapa skor masing-masing, dan berapa bagian dari tingkat kecocokan akhir yang diambil skor itu — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Monyet adalah cabang kesembilan dari dua belas cabang",
        "blocks": [
          {
            "p": "Monyet adalah orang yang cabang tahun lahirnya **申**. 申 adalah cabang bumi kesembilan dari dua belas cabang bumi, dan ketika kedua belas karakter disusun melingkar, ia berada tepat di seberang 寅 (Harimau)."
          },
          {
            "p": "Baris yang ditampilkan hasil kecocokan untuk orang berzodiak Monyet adalah: \"Banyak akal dan cepat menyesuaikan diri. Bosan pada pengulangan.\" Baris ini tidak berkaitan dengan skor hubungan dan tidak memengaruhi skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas hewan zodiak sekilas",
        "blocks": [
          {
            "p": "Setiap hewan lain dipasangkan dengan Monyet secara bergantian. Hanya pasangan yang diakui layanan ini sebagai keharmonisan yang ditulis sebagai hubungan; yang lain netral."
          },
          {
            "table": {
              "caption": "Monyet dan dua belas hewan zodiak",
              "head": [
                "Hewan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Triad setengah",
                  "{scoreBanhap}"
                ],
                [
                  "Sapi (丑)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Harimau (寅)",
                  "Tabrakan",
                  "{scoreChung}"
                ],
                [
                  "Kelinci (卯)",
                  "Ketidakcocokan",
                  "{scoreWonjin}"
                ],
                [
                  "Naga (辰)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Ular (巳)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Kuda (午)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Domba (未)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Monyet (申)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Ayam (酉)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Anjing (戌)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Babi (亥)",
                  "Netral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ular — pasangan yang saling menarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "申 dan 巳 membentuk keharmonisan hanya dengan dua karakter. Enam-Harmoni adalah hubungan baik yang paling sering muncul dalam kecocokan, dan Monyet dengan Ular mendapat {scoreYukhap}, skor tertinggi yang bisa diperoleh Monyet."
          }
        ]
      },
      {
        "title": "Tikus — triad setengah yang menyertakan cabang raja",
        "blocks": [
          {
            "p": "申子辰 adalah satu kelompok triad (kelompok air), dan 子 adalah **cabang raja** di pusatnya. Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga Monyet membentuk triad setengah ({scoreBanhap}) hanya dengan Tikus."
          },
          {
            "p": "Dengan Naga (辰) dari kelompok yang sama, karakter pusat 子 tidak ada, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral ({scoreNeutral}). Berada dalam kelompok yang sama tidak membuat setiap pasangan menjadi keharmonisan."
          }
        ]
      },
      {
        "title": "Harimau — benturan langsung (Tabrakan)",
        "blocks": [
          {
            "p": "申 dan 寅 berada tepat berseberangan di lingkaran. Layanan ini tetap memberi {scoreChung} poin meskipun tabrakan. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan, dan memberi skor mendekati nol sama saja dengan menjatuhkan vonis atas dua orang. Meski begitu, ini adalah skor terendah yang bisa diterima Monyet."
          }
        ]
      },
      {
        "title": "Kelinci — ketidakcocokan yang tenang (Ketidakcocokan)",
        "blocks": [
          {
            "p": "申 dan 卯 berada tepat di sebelah 寅 (Harimau), posisi tabrakan, dan secara tradisional dipandang sebagai pasangan yang saling menyimpan kesal namun tidak bisa berpisah. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama, sehingga mendapat {scoreWonjin} — lebih tinggi daripada tabrakan ({scoreChung}) dan lebih rendah daripada netral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "7 hewan lain, dan Monyet dengan Monyet lainnya",
        "blocks": [
          {
            "p": "Sapi, Naga, Kuda, Domba, Ayam, Anjing, dan Babi bukan keharmonisan, tabrakan, maupun ketidakcocokan dengan Monyet: mereka **netral** dan mendapat {scoreNeutral}. Mereka adalah garis dasar, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang berzodiak Monyet mendapat {scoreSame}. Artinya mereka mirip, bukan saling tertarik, sehingga berada sedikit di atas netral."
          }
        ]
      },
      {
        "title": "Berapa bagian dari tingkat kecocokan akhir yang diambil skor ini",
        "blocks": [
          {
            "p": "Ada dua tempat di mana cabang dua orang diletakkan berdampingan."
          },
          {
            "ul": [
              "**Kecocokan zodiak** melihat cabang tahun lahir. Bobotnya {weightZodiac} dari tingkat kecocokan akhir.",
              "**Kecocokan cabang hari** melihat cabang hari lahir. Bobotnya {weightDayBranch} dari kecocokan saju ({weightSaju}), yaitu {weightDayBranchTotal} dari tingkat kecocokan akhir."
            ]
          },
          {
            "p": "Misalnya, ketika orang berzodiak Monyet bertemu orang berzodiak Harimau, kecocokan zodiak menghasilkan tabrakan. Jika semua hal lain sama, tingkat kecocokan akhir menjadi {swingZodiacChung} poin lebih rendah daripada pasangan netral. Dengan orang berzodiak Ular itu adalah Enam-Harmoni, dan tingkatnya menjadi {swingZodiacYukhap} poin lebih tinggi."
          },
          {
            "p": "Cabang tahun dan hari bisa berbeda. Dua orang berzodiak Monyet yang cabang harinya 申 dan 寅 mendapat cabang yang sama ({scoreSame}) dalam kecocokan zodiak dan tabrakan ({scoreChung}) dalam kecocokan cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang.",
              "Tabel lengkap hubungan mana yang mendapat berapa skor ada di [tabel dua belas cabang](/guide/branches), dan alasan zodiak dibaca dari cabang tahun ada di [Mengapa kecocokan zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Hewan lainnya disusun dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Sapi](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Kelinci](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Domba](/guide/zodiac-goat) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rooster": {
    "eyebrow": "Menurut hewan",
    "title": "Bagaimana Ayam Bertemu Dua Belas Hewan Zodiak",
    "summary": "Hubungan apa yang dimiliki Ayam (酉) dengan masing-masing dari dua belas hewan zodiak, berapa skor masing-masing, dan berapa bagian dari tingkat kecocokan akhir yang diambil skor itu — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Ayam adalah cabang kesepuluh dari dua belas cabang",
        "blocks": [
          {
            "p": "Ayam adalah orang yang cabang tahun lahirnya **酉**. 酉 adalah cabang bumi kesepuluh dari dua belas cabang bumi, dan ketika kedua belas karakter disusun melingkar, ia berada tepat di seberang 卯 (Kelinci)."
          },
          {
            "p": "Baris yang ditampilkan hasil kecocokan untuk orang berzodiak Ayam adalah: \"Rajin dan teliti. Tidak bisa membiarkan sesuatu berantakan.\" Baris ini tidak berkaitan dengan skor hubungan dan tidak memengaruhi skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas hewan zodiak sekilas",
        "blocks": [
          {
            "p": "Setiap hewan lain dipasangkan dengan Ayam secara bergantian. Hanya pasangan yang diakui layanan ini sebagai keharmonisan yang ditulis sebagai hubungan; yang lain netral."
          },
          {
            "table": {
              "caption": "Ayam dan dua belas hewan zodiak",
              "head": [
                "Hewan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Sapi (丑)",
                  "Triad setengah",
                  "{scoreBanhap}"
                ],
                [
                  "Harimau (寅)",
                  "Ketidakcocokan",
                  "{scoreWonjin}"
                ],
                [
                  "Kelinci (卯)",
                  "Tabrakan",
                  "{scoreChung}"
                ],
                [
                  "Naga (辰)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Ular (巳)",
                  "Triad setengah",
                  "{scoreBanhap}"
                ],
                [
                  "Kuda (午)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Domba (未)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Monyet (申)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Ayam (酉)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Anjing (戌)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Babi (亥)",
                  "Netral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Naga — pasangan yang saling menarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "酉 dan 辰 membentuk keharmonisan hanya dengan dua karakter. Enam-Harmoni adalah hubungan baik yang paling sering muncul dalam kecocokan, dan Ayam dengan Naga mendapat {scoreYukhap}, skor tertinggi yang bisa diperoleh Ayam."
          }
        ]
      },
      {
        "title": "Sapi dan Ular — triad setengah yang menyertakan cabang raja",
        "blocks": [
          {
            "p": "巳酉丑 adalah satu kelompok triad (kelompok logam), dan 酉 adalah **cabang raja** di pusatnya. Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga Ayam membentuk triad setengah ({scoreBanhap}) dengan Sapi maupun Ular."
          },
          {
            "p": "**Ular dan Sapi bersama-sama**, sebaliknya, tidak memiliki karakter pusat 酉, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral. Bahkan dalam satu kelompok triad, Ayam-lah yang membentuk triad setengah."
          }
        ]
      },
      {
        "title": "Kelinci — benturan langsung (Tabrakan)",
        "blocks": [
          {
            "p": "酉 dan 卯 berada tepat berseberangan di lingkaran. Layanan ini tetap memberi {scoreChung} poin meskipun tabrakan. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan, dan memberi skor mendekati nol sama saja dengan menjatuhkan vonis atas dua orang. Meski begitu, ini adalah skor terendah yang bisa diterima Ayam."
          }
        ]
      },
      {
        "title": "Harimau — ketidakcocokan yang tenang (Ketidakcocokan)",
        "blocks": [
          {
            "p": "酉 dan 寅 berada tepat di sebelah 卯 (Kelinci), posisi tabrakan, dan secara tradisional dipandang sebagai pasangan yang saling menyimpan kesal namun tidak bisa berpisah. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama, sehingga mendapat {scoreWonjin} — lebih tinggi daripada tabrakan ({scoreChung}) dan lebih rendah daripada netral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "6 hewan lain, dan Ayam dengan Ayam lainnya",
        "blocks": [
          {
            "p": "Tikus, Kuda, Domba, Monyet, Anjing, dan Babi bukan keharmonisan, tabrakan, maupun ketidakcocokan dengan Ayam: mereka **netral** dan mendapat {scoreNeutral}. Mereka adalah garis dasar, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang berzodiak Ayam mendapat {scoreSame}. Artinya mereka mirip, bukan saling tertarik, sehingga berada sedikit di atas netral."
          }
        ]
      },
      {
        "title": "Berapa bagian dari tingkat kecocokan akhir yang diambil skor ini",
        "blocks": [
          {
            "p": "Ada dua tempat di mana cabang dua orang diletakkan berdampingan."
          },
          {
            "ul": [
              "**Kecocokan zodiak** melihat cabang tahun lahir. Bobotnya {weightZodiac} dari tingkat kecocokan akhir.",
              "**Kecocokan cabang hari** melihat cabang hari lahir. Bobotnya {weightDayBranch} dari kecocokan saju ({weightSaju}), yaitu {weightDayBranchTotal} dari tingkat kecocokan akhir."
            ]
          },
          {
            "p": "Misalnya, ketika orang berzodiak Ayam bertemu orang berzodiak Kelinci, kecocokan zodiak menghasilkan tabrakan. Jika semua hal lain sama, tingkat kecocokan akhir menjadi {swingZodiacChung} poin lebih rendah daripada pasangan netral. Dengan orang berzodiak Naga itu adalah Enam-Harmoni, dan tingkatnya menjadi {swingZodiacYukhap} poin lebih tinggi."
          },
          {
            "p": "Cabang tahun dan hari bisa berbeda. Dua orang berzodiak Ayam yang cabang harinya 酉 dan 卯 mendapat cabang yang sama ({scoreSame}) dalam kecocokan zodiak dan tabrakan ({scoreChung}) dalam kecocokan cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang.",
              "Tabel lengkap hubungan mana yang mendapat berapa skor ada di [tabel dua belas cabang](/guide/branches), dan alasan zodiak dibaca dari cabang tahun ada di [Mengapa kecocokan zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Hewan lainnya disusun dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Sapi](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Kelinci](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Domba](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dog": {
    "eyebrow": "Menurut hewan",
    "title": "Bagaimana Anjing Bertemu Dua Belas Hewan Zodiak",
    "summary": "Hubungan apa yang dimiliki Anjing (戌) dengan masing-masing dari dua belas hewan zodiak, berapa skor masing-masing, dan berapa bagian dari tingkat kecocokan akhir yang diambil skor itu — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Anjing adalah cabang kesebelas dari dua belas cabang",
        "blocks": [
          {
            "p": "Anjing adalah orang yang cabang tahun lahirnya **戌**. 戌 adalah cabang bumi kesebelas dari dua belas cabang bumi, dan ketika kedua belas karakter disusun melingkar, ia berada tepat di seberang 辰 (Naga)."
          },
          {
            "p": "Baris yang ditampilkan hasil kecocokan untuk orang berzodiak Anjing adalah: \"Setia sampai akhir begitu kepercayaan diberikan. Pengkhianatan melukainya sangat dalam.\" Baris ini tidak berkaitan dengan skor hubungan dan tidak memengaruhi skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas hewan zodiak sekilas",
        "blocks": [
          {
            "p": "Setiap hewan lain dipasangkan dengan Anjing secara bergantian. Hanya pasangan yang diakui layanan ini sebagai keharmonisan yang ditulis sebagai hubungan; yang lain netral."
          },
          {
            "table": {
              "caption": "Anjing dan dua belas hewan zodiak",
              "head": [
                "Hewan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Sapi (丑)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Harimau (寅)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Kelinci (卯)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Naga (辰)",
                  "Tabrakan",
                  "{scoreChung}"
                ],
                [
                  "Ular (巳)",
                  "Ketidakcocokan",
                  "{scoreWonjin}"
                ],
                [
                  "Kuda (午)",
                  "Triad setengah",
                  "{scoreBanhap}"
                ],
                [
                  "Domba (未)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Monyet (申)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Ayam (酉)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Anjing (戌)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Babi (亥)",
                  "Netral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kelinci — pasangan yang saling menarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "戌 dan 卯 membentuk keharmonisan hanya dengan dua karakter. Enam-Harmoni adalah hubungan baik yang paling sering muncul dalam kecocokan, dan Anjing dengan Kelinci mendapat {scoreYukhap}, skor tertinggi yang bisa diperoleh Anjing."
          }
        ]
      },
      {
        "title": "Kuda — triad setengah yang menyertakan cabang raja",
        "blocks": [
          {
            "p": "寅午戌 adalah satu kelompok triad (kelompok api), dan 午 adalah **cabang raja** di pusatnya. Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga Anjing membentuk triad setengah ({scoreBanhap}) hanya dengan Kuda."
          },
          {
            "p": "Dengan Harimau (寅) dari kelompok yang sama, karakter pusat 午 tidak ada, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral ({scoreNeutral}). Berada dalam kelompok yang sama tidak membuat setiap pasangan menjadi keharmonisan."
          }
        ]
      },
      {
        "title": "Naga — benturan langsung (Tabrakan)",
        "blocks": [
          {
            "p": "戌 dan 辰 berada tepat berseberangan di lingkaran. Layanan ini tetap memberi {scoreChung} poin meskipun tabrakan. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan, dan memberi skor mendekati nol sama saja dengan menjatuhkan vonis atas dua orang. Meski begitu, ini adalah skor terendah yang bisa diterima Anjing."
          }
        ]
      },
      {
        "title": "Ular — ketidakcocokan yang tenang (Ketidakcocokan)",
        "blocks": [
          {
            "p": "戌 dan 巳 berada tepat di sebelah 辰 (Naga), posisi tabrakan, dan secara tradisional dipandang sebagai pasangan yang saling menyimpan kesal namun tidak bisa berpisah. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama, sehingga mendapat {scoreWonjin} — lebih tinggi daripada tabrakan ({scoreChung}) dan lebih rendah daripada netral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "7 hewan lain, dan Anjing dengan Anjing lainnya",
        "blocks": [
          {
            "p": "Tikus, Sapi, Harimau, Domba, Monyet, Ayam, dan Babi bukan keharmonisan, tabrakan, maupun ketidakcocokan dengan Anjing: mereka **netral** dan mendapat {scoreNeutral}. Mereka adalah garis dasar, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang berzodiak Anjing mendapat {scoreSame}. Artinya mereka mirip, bukan saling tertarik, sehingga berada sedikit di atas netral."
          }
        ]
      },
      {
        "title": "Berapa bagian dari tingkat kecocokan akhir yang diambil skor ini",
        "blocks": [
          {
            "p": "Ada dua tempat di mana cabang dua orang diletakkan berdampingan."
          },
          {
            "ul": [
              "**Kecocokan zodiak** melihat cabang tahun lahir. Bobotnya {weightZodiac} dari tingkat kecocokan akhir.",
              "**Kecocokan cabang hari** melihat cabang hari lahir. Bobotnya {weightDayBranch} dari kecocokan saju ({weightSaju}), yaitu {weightDayBranchTotal} dari tingkat kecocokan akhir."
            ]
          },
          {
            "p": "Misalnya, ketika orang berzodiak Anjing bertemu orang berzodiak Naga, kecocokan zodiak menghasilkan tabrakan. Jika semua hal lain sama, tingkat kecocokan akhir menjadi {swingZodiacChung} poin lebih rendah daripada pasangan netral. Dengan orang berzodiak Kelinci itu adalah Enam-Harmoni, dan tingkatnya menjadi {swingZodiacYukhap} poin lebih tinggi."
          },
          {
            "p": "Cabang tahun dan hari bisa berbeda. Dua orang berzodiak Anjing yang cabang harinya 戌 dan 辰 mendapat cabang yang sama ({scoreSame}) dalam kecocokan zodiak dan tabrakan ({scoreChung}) dalam kecocokan cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang.",
              "Tabel lengkap hubungan mana yang mendapat berapa skor ada di [tabel dua belas cabang](/guide/branches), dan alasan zodiak dibaca dari cabang tahun ada di [Mengapa kecocokan zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Hewan lainnya disusun dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Sapi](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Kelinci](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Domba](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-pig": {
    "eyebrow": "Menurut hewan",
    "title": "Bagaimana Babi Bertemu Dua Belas Hewan Zodiak",
    "summary": "Hubungan apa yang dimiliki Babi (亥) dengan masing-masing dari dua belas hewan zodiak, berapa skor masing-masing, dan berapa bagian dari tingkat kecocokan akhir yang diambil skor itu — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Babi adalah cabang kedua belas dari dua belas cabang",
        "blocks": [
          {
            "p": "Babi adalah orang yang cabang tahun lahirnya **亥**. 亥 adalah cabang bumi kedua belas dari dua belas cabang bumi, dan ketika kedua belas karakter disusun melingkar, ia berada tepat di seberang 巳 (Ular)."
          },
          {
            "p": "Baris yang ditampilkan hasil kecocokan untuk orang berzodiak Babi adalah: \"Murah hati dan apa adanya. Mudah percaya, kadang dengan harga yang harus dibayar.\" Baris ini tidak berkaitan dengan skor hubungan dan tidak memengaruhi skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas hewan zodiak sekilas",
        "blocks": [
          {
            "p": "Setiap hewan lain dipasangkan dengan Babi secara bergantian. Hanya pasangan yang diakui layanan ini sebagai keharmonisan yang ditulis sebagai hubungan; yang lain netral."
          },
          {
            "table": {
              "caption": "Babi dan dua belas hewan zodiak",
              "head": [
                "Hewan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Sapi (丑)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Harimau (寅)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Kelinci (卯)",
                  "Triad setengah",
                  "{scoreBanhap}"
                ],
                [
                  "Naga (辰)",
                  "Ketidakcocokan",
                  "{scoreWonjin}"
                ],
                [
                  "Ular (巳)",
                  "Tabrakan",
                  "{scoreChung}"
                ],
                [
                  "Kuda (午)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Domba (未)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Monyet (申)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Ayam (酉)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Anjing (戌)",
                  "Netral",
                  "{scoreNeutral}"
                ],
                [
                  "Babi (亥)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Harimau — pasangan yang saling menarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "亥 dan 寅 membentuk keharmonisan hanya dengan dua karakter. Enam-Harmoni adalah hubungan baik yang paling sering muncul dalam kecocokan, dan Babi dengan Harimau mendapat {scoreYukhap}, skor tertinggi yang bisa diperoleh Babi."
          }
        ]
      },
      {
        "title": "Kelinci — triad setengah yang menyertakan cabang raja",
        "blocks": [
          {
            "p": "亥卯未 adalah satu kelompok triad (kelompok kayu), dan 卯 adalah **cabang raja** di pusatnya. Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga Babi membentuk triad setengah ({scoreBanhap}) hanya dengan Kelinci."
          },
          {
            "p": "Dengan Domba (未) dari kelompok yang sama, karakter pusat 卯 tidak ada, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral ({scoreNeutral}). Berada dalam kelompok yang sama tidak membuat setiap pasangan menjadi keharmonisan."
          }
        ]
      },
      {
        "title": "Ular — benturan langsung (Tabrakan)",
        "blocks": [
          {
            "p": "亥 dan 巳 berada tepat berseberangan di lingkaran. Layanan ini tetap memberi {scoreChung} poin meskipun tabrakan. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan, dan memberi skor mendekati nol sama saja dengan menjatuhkan vonis atas dua orang. Meski begitu, ini adalah skor terendah yang bisa diterima Babi."
          }
        ]
      },
      {
        "title": "Naga — ketidakcocokan yang tenang (Ketidakcocokan)",
        "blocks": [
          {
            "p": "亥 dan 辰 berada tepat di sebelah 巳 (Ular), posisi tabrakan, dan secara tradisional dipandang sebagai pasangan yang saling menyimpan kesal namun tidak bisa berpisah. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama, sehingga mendapat {scoreWonjin} — lebih tinggi daripada tabrakan ({scoreChung}) dan lebih rendah daripada netral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "7 hewan lain, dan Babi dengan Babi lainnya",
        "blocks": [
          {
            "p": "Tikus, Sapi, Kuda, Domba, Monyet, Ayam, dan Anjing bukan keharmonisan, tabrakan, maupun ketidakcocokan dengan Babi: mereka **netral** dan mendapat {scoreNeutral}. Mereka adalah garis dasar, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang berzodiak Babi mendapat {scoreSame}. Artinya mereka mirip, bukan saling tertarik, sehingga berada sedikit di atas netral."
          }
        ]
      },
      {
        "title": "Berapa bagian dari tingkat kecocokan akhir yang diambil skor ini",
        "blocks": [
          {
            "p": "Ada dua tempat di mana cabang dua orang diletakkan berdampingan."
          },
          {
            "ul": [
              "**Kecocokan zodiak** melihat cabang tahun lahir. Bobotnya {weightZodiac} dari tingkat kecocokan akhir.",
              "**Kecocokan cabang hari** melihat cabang hari lahir. Bobotnya {weightDayBranch} dari kecocokan saju ({weightSaju}), yaitu {weightDayBranchTotal} dari tingkat kecocokan akhir."
            ]
          },
          {
            "p": "Misalnya, ketika orang berzodiak Babi bertemu orang berzodiak Ular, kecocokan zodiak menghasilkan tabrakan. Jika semua hal lain sama, tingkat kecocokan akhir menjadi {swingZodiacChung} poin lebih rendah daripada pasangan netral. Dengan orang berzodiak Harimau itu adalah Enam-Harmoni, dan tingkatnya menjadi {swingZodiacYukhap} poin lebih tinggi."
          },
          {
            "p": "Cabang tahun dan hari bisa berbeda. Dua orang berzodiak Babi yang cabang harinya 亥 dan 巳 mendapat cabang yang sama ({scoreSame}) dalam kecocokan zodiak dan tabrakan ({scoreChung}) dalam kecocokan cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang.",
              "Tabel lengkap hubungan mana yang mendapat berapa skor ada di [tabel dua belas cabang](/guide/branches), dan alasan zodiak dibaca dari cabang tahun ada di [Mengapa kecocokan zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Hewan lainnya disusun dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Sapi](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Kelinci](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Domba](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-rat": {
    "eyebrow": "Menurut pasangan",
    "title": "Tikus dan Tikus — Cabang yang sama",
    "summary": "Hubungan apa yang dimiliki dua orang berzodiak Tikus, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Dua orang berzodiak Tikus memiliki cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang berzodiak Tikus memiliki cabang yang sama (子 dan 子). Artinya mereka mirip, bukan saling tertarik."
          },
          {
            "p": "Maka skornya {scoreSame}, sedikit di atas netral ({scoreNeutral}): bukan keharmonisan, tabrakan, atau ketidakcocokan, hanya sedikit dinaikkan."
          },
          {
            "p": "子 adalah cabang bumi pertama dari dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang berzodiak Tikus",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Cabang yang sama"
                ],
                [
                  "Skor",
                  "{scoreSame}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacSame} poin dalam kecocokan zodiak dan sebesar {swingDayBranchSame} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari Tikus",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Tikus** — Enam-Harmoni [Sapi](/guide/zodiac-pair-rat-ox) · Triad setengah [Naga](/guide/zodiac-pair-rat-dragon), [Monyet](/guide/zodiac-pair-rat-monkey) · Ketidakcocokan [Domba](/guide/zodiac-pair-rat-goat) · Tabrakan [Kuda](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Tikus](/guide/zodiac-rat), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-ox": {
    "eyebrow": "Menurut pasangan",
    "title": "Tikus dan Sapi — Enam-Harmoni",
    "summary": "Hubungan apa yang dimiliki Tikus dan Sapi, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Tikus dan Sapi membentuk Enam-Harmoni",
        "blocks": [
          {
            "p": "Tikus dan Sapi membentuk Enam-Harmoni. 子 dan 丑 membentuk keharmonisan hanya dengan dua karakter."
          },
          {
            "p": "Enam-Harmoni adalah hubungan baik yang paling sering muncul dalam kecocokan, dan pada {scoreYukhap} itu adalah skor tertinggi yang bisa diperoleh kedua hewan."
          },
          {
            "p": "Pada lingkaran, 子 berada di urutan pertama dan 丑 di urutan kedua, dan kedua karakter itu terpisah satu langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Tikus dan Sapi",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Enam-Harmoni"
                ],
                [
                  "Skor",
                  "{scoreYukhap}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacYukhap} poin dalam kecocokan zodiak dan sebesar {swingDayBranchYukhap} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Tikus** — Enam-Harmoni [Sapi](/guide/zodiac-pair-rat-ox) · Triad setengah [Naga](/guide/zodiac-pair-rat-dragon), [Monyet](/guide/zodiac-pair-rat-monkey) · Ketidakcocokan [Domba](/guide/zodiac-pair-rat-goat) · Tabrakan [Kuda](/guide/zodiac-pair-rat-horse)",
              "Pasangan khusus **Sapi** — Enam-Harmoni [Tikus](/guide/zodiac-pair-rat-ox) · Triad setengah [Ayam](/guide/zodiac-pair-ox-rooster) · Ketidakcocokan [Kuda](/guide/zodiac-pair-ox-horse) · Tabrakan [Domba](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Tikus](/guide/zodiac-rat) · [Sapi](/guide/zodiac-ox), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-dragon": {
    "eyebrow": "Menurut pasangan",
    "title": "Tikus dan Naga — Triad setengah",
    "summary": "Hubungan apa yang dimiliki Tikus dan Naga, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Tikus dan Naga membentuk triad setengah",
        "blocks": [
          {
            "p": "Tikus dan Naga membentuk triad setengah. 申子辰 adalah satu kelompok triad (kelompok air), dan 子 adalah **cabang raja** di pusatnya."
          },
          {
            "p": "Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga pasangan ini adalah triad setengah ({scoreBanhap})."
          },
          {
            "p": "Monyet (申) dan Naga (辰) dari kelompok yang sama tidak memiliki karakter pusat 子, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral."
          },
          {
            "p": "Pada lingkaran, 子 berada di urutan pertama dan 辰 di urutan kelima, dan kedua karakter itu terpisah empat langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Tikus dan Naga",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Triad setengah"
                ],
                [
                  "Skor",
                  "{scoreBanhap}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacBanhap} poin dalam kecocokan zodiak dan sebesar {swingDayBranchBanhap} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Tikus** — Enam-Harmoni [Sapi](/guide/zodiac-pair-rat-ox) · Triad setengah [Naga](/guide/zodiac-pair-rat-dragon), [Monyet](/guide/zodiac-pair-rat-monkey) · Ketidakcocokan [Domba](/guide/zodiac-pair-rat-goat) · Tabrakan [Kuda](/guide/zodiac-pair-rat-horse)",
              "Pasangan khusus **Naga** — Enam-Harmoni [Ayam](/guide/zodiac-pair-dragon-rooster) · Triad setengah [Tikus](/guide/zodiac-pair-rat-dragon) · Ketidakcocokan [Babi](/guide/zodiac-pair-dragon-pig) · Tabrakan [Anjing](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Tikus](/guide/zodiac-rat) · [Naga](/guide/zodiac-dragon), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-horse": {
    "eyebrow": "Menurut pasangan",
    "title": "Tikus dan Kuda — Tabrakan",
    "summary": "Hubungan apa yang dimiliki Tikus dan Kuda, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Tikus dan Kuda membentuk tabrakan",
        "blocks": [
          {
            "p": "Tikus dan Kuda membentuk tabrakan. 子 dan 午 berada tepat berseberangan di lingkaran."
          },
          {
            "p": "Layanan ini tetap memberi {scoreChung} poin meskipun tabrakan. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan, dan memberi skor mendekati nol sama saja dengan menjatuhkan vonis atas dua orang."
          },
          {
            "p": "Pada lingkaran, 子 berada di urutan pertama dan 午 di urutan ketujuh, dan kedua karakter itu terpisah enam langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Tikus dan Kuda",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Tabrakan"
                ],
                [
                  "Skor",
                  "{scoreChung}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menurunkan tingkat kecocokan akhir sebesar {swingZodiacChung} poin dalam kecocokan zodiak dan sebesar {swingDayBranchChung} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Tikus** — Enam-Harmoni [Sapi](/guide/zodiac-pair-rat-ox) · Triad setengah [Naga](/guide/zodiac-pair-rat-dragon), [Monyet](/guide/zodiac-pair-rat-monkey) · Ketidakcocokan [Domba](/guide/zodiac-pair-rat-goat) · Tabrakan [Kuda](/guide/zodiac-pair-rat-horse)",
              "Pasangan khusus **Kuda** — Enam-Harmoni [Domba](/guide/zodiac-pair-horse-goat) · Triad setengah [Harimau](/guide/zodiac-pair-tiger-horse), [Anjing](/guide/zodiac-pair-horse-dog) · Ketidakcocokan [Sapi](/guide/zodiac-pair-ox-horse) · Tabrakan [Tikus](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Tikus](/guide/zodiac-rat) · [Kuda](/guide/zodiac-horse), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-goat": {
    "eyebrow": "Menurut pasangan",
    "title": "Tikus dan Domba — Ketidakcocokan",
    "summary": "Hubungan apa yang dimiliki Tikus dan Domba, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Tikus dan Domba membentuk ketidakcocokan",
        "blocks": [
          {
            "p": "Tikus dan Domba membentuk ketidakcocokan. Posisi tabrakan 子 adalah 午 (Kuda), dan 未 berada tepat di sebelahnya; tepat di sebelah 丑 (Sapi), posisi tabrakan 未, berada 子."
          },
          {
            "p": "Secara tradisional dipandang sebagai pasangan yang saling menyimpan kesal namun tidak bisa berpisah. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama, sehingga mendapat {scoreWonjin} — lebih tinggi daripada tabrakan ({scoreChung}) dan lebih rendah daripada netral ({scoreNeutral})."
          },
          {
            "p": "Pada lingkaran, 子 berada di urutan pertama dan 未 di urutan kedelapan, dan kedua karakter itu terpisah lima langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Tikus dan Domba",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Ketidakcocokan"
                ],
                [
                  "Skor",
                  "{scoreWonjin}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menurunkan tingkat kecocokan akhir sebesar {swingZodiacWonjin} poin dalam kecocokan zodiak dan sebesar {swingDayBranchWonjin} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Tikus** — Enam-Harmoni [Sapi](/guide/zodiac-pair-rat-ox) · Triad setengah [Naga](/guide/zodiac-pair-rat-dragon), [Monyet](/guide/zodiac-pair-rat-monkey) · Ketidakcocokan [Domba](/guide/zodiac-pair-rat-goat) · Tabrakan [Kuda](/guide/zodiac-pair-rat-horse)",
              "Pasangan khusus **Domba** — Enam-Harmoni [Kuda](/guide/zodiac-pair-horse-goat) · Triad setengah [Kelinci](/guide/zodiac-pair-rabbit-goat) · Ketidakcocokan [Tikus](/guide/zodiac-pair-rat-goat) · Tabrakan [Sapi](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Tikus](/guide/zodiac-rat) · [Domba](/guide/zodiac-goat), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-monkey": {
    "eyebrow": "Menurut pasangan",
    "title": "Tikus dan Monyet — Triad setengah",
    "summary": "Hubungan apa yang dimiliki Tikus dan Monyet, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Tikus dan Monyet membentuk triad setengah",
        "blocks": [
          {
            "p": "Tikus dan Monyet membentuk triad setengah. 申子辰 adalah satu kelompok triad (kelompok air), dan 子 adalah **cabang raja** di pusatnya."
          },
          {
            "p": "Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga pasangan ini adalah triad setengah ({scoreBanhap})."
          },
          {
            "p": "Naga (辰) dan Monyet (申) dari kelompok yang sama tidak memiliki karakter pusat 子, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral."
          },
          {
            "p": "Pada lingkaran, 子 berada di urutan pertama dan 申 di urutan kesembilan, dan kedua karakter itu terpisah empat langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Tikus dan Monyet",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Triad setengah"
                ],
                [
                  "Skor",
                  "{scoreBanhap}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacBanhap} poin dalam kecocokan zodiak dan sebesar {swingDayBranchBanhap} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Tikus** — Enam-Harmoni [Sapi](/guide/zodiac-pair-rat-ox) · Triad setengah [Naga](/guide/zodiac-pair-rat-dragon), [Monyet](/guide/zodiac-pair-rat-monkey) · Ketidakcocokan [Domba](/guide/zodiac-pair-rat-goat) · Tabrakan [Kuda](/guide/zodiac-pair-rat-horse)",
              "Pasangan khusus **Monyet** — Enam-Harmoni [Ular](/guide/zodiac-pair-snake-monkey) · Triad setengah [Tikus](/guide/zodiac-pair-rat-monkey) · Ketidakcocokan [Kelinci](/guide/zodiac-pair-rabbit-monkey) · Tabrakan [Harimau](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Tikus](/guide/zodiac-rat) · [Monyet](/guide/zodiac-monkey), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-ox": {
    "eyebrow": "Menurut pasangan",
    "title": "Sapi dan Sapi — Cabang yang sama",
    "summary": "Hubungan apa yang dimiliki dua orang berzodiak Sapi, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Dua orang berzodiak Sapi memiliki cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang berzodiak Sapi memiliki cabang yang sama (丑 dan 丑). Artinya mereka mirip, bukan saling tertarik."
          },
          {
            "p": "Maka skornya {scoreSame}, sedikit di atas netral ({scoreNeutral}): bukan keharmonisan, tabrakan, atau ketidakcocokan, hanya sedikit dinaikkan."
          },
          {
            "p": "丑 adalah cabang bumi kedua dari dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang berzodiak Sapi",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Cabang yang sama"
                ],
                [
                  "Skor",
                  "{scoreSame}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacSame} poin dalam kecocokan zodiak dan sebesar {swingDayBranchSame} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari Sapi",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Sapi** — Enam-Harmoni [Tikus](/guide/zodiac-pair-rat-ox) · Triad setengah [Ayam](/guide/zodiac-pair-ox-rooster) · Ketidakcocokan [Kuda](/guide/zodiac-pair-ox-horse) · Tabrakan [Domba](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Sapi](/guide/zodiac-ox), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-horse": {
    "eyebrow": "Menurut pasangan",
    "title": "Sapi dan Kuda — Ketidakcocokan",
    "summary": "Hubungan apa yang dimiliki Sapi dan Kuda, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Sapi dan Kuda membentuk ketidakcocokan",
        "blocks": [
          {
            "p": "Sapi dan Kuda membentuk ketidakcocokan. Posisi tabrakan 丑 adalah 未 (Domba), dan 午 berada tepat di sebelahnya; tepat di sebelah 子 (Tikus), posisi tabrakan 午, berada 丑."
          },
          {
            "p": "Secara tradisional dipandang sebagai pasangan yang saling menyimpan kesal namun tidak bisa berpisah. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama, sehingga mendapat {scoreWonjin} — lebih tinggi daripada tabrakan ({scoreChung}) dan lebih rendah daripada netral ({scoreNeutral})."
          },
          {
            "p": "Pada lingkaran, 丑 berada di urutan kedua dan 午 di urutan ketujuh, dan kedua karakter itu terpisah lima langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Sapi dan Kuda",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Ketidakcocokan"
                ],
                [
                  "Skor",
                  "{scoreWonjin}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menurunkan tingkat kecocokan akhir sebesar {swingZodiacWonjin} poin dalam kecocokan zodiak dan sebesar {swingDayBranchWonjin} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Sapi** — Enam-Harmoni [Tikus](/guide/zodiac-pair-rat-ox) · Triad setengah [Ayam](/guide/zodiac-pair-ox-rooster) · Ketidakcocokan [Kuda](/guide/zodiac-pair-ox-horse) · Tabrakan [Domba](/guide/zodiac-pair-ox-goat)",
              "Pasangan khusus **Kuda** — Enam-Harmoni [Domba](/guide/zodiac-pair-horse-goat) · Triad setengah [Harimau](/guide/zodiac-pair-tiger-horse), [Anjing](/guide/zodiac-pair-horse-dog) · Ketidakcocokan [Sapi](/guide/zodiac-pair-ox-horse) · Tabrakan [Tikus](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Sapi](/guide/zodiac-ox) · [Kuda](/guide/zodiac-horse), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-goat": {
    "eyebrow": "Menurut pasangan",
    "title": "Sapi dan Domba — Tabrakan",
    "summary": "Hubungan apa yang dimiliki Sapi dan Domba, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Sapi dan Domba membentuk tabrakan",
        "blocks": [
          {
            "p": "Sapi dan Domba membentuk tabrakan. 丑 dan 未 berada tepat berseberangan di lingkaran."
          },
          {
            "p": "Layanan ini tetap memberi {scoreChung} poin meskipun tabrakan. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan, dan memberi skor mendekati nol sama saja dengan menjatuhkan vonis atas dua orang."
          },
          {
            "p": "Pada lingkaran, 丑 berada di urutan kedua dan 未 di urutan kedelapan, dan kedua karakter itu terpisah enam langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Sapi dan Domba",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Tabrakan"
                ],
                [
                  "Skor",
                  "{scoreChung}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menurunkan tingkat kecocokan akhir sebesar {swingZodiacChung} poin dalam kecocokan zodiak dan sebesar {swingDayBranchChung} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Sapi** — Enam-Harmoni [Tikus](/guide/zodiac-pair-rat-ox) · Triad setengah [Ayam](/guide/zodiac-pair-ox-rooster) · Ketidakcocokan [Kuda](/guide/zodiac-pair-ox-horse) · Tabrakan [Domba](/guide/zodiac-pair-ox-goat)",
              "Pasangan khusus **Domba** — Enam-Harmoni [Kuda](/guide/zodiac-pair-horse-goat) · Triad setengah [Kelinci](/guide/zodiac-pair-rabbit-goat) · Ketidakcocokan [Tikus](/guide/zodiac-pair-rat-goat) · Tabrakan [Sapi](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Sapi](/guide/zodiac-ox) · [Domba](/guide/zodiac-goat), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-rooster": {
    "eyebrow": "Menurut pasangan",
    "title": "Sapi dan Ayam — Triad setengah",
    "summary": "Hubungan apa yang dimiliki Sapi dan Ayam, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Sapi dan Ayam membentuk triad setengah",
        "blocks": [
          {
            "p": "Sapi dan Ayam membentuk triad setengah. 巳酉丑 adalah satu kelompok triad (kelompok logam), dan 酉 adalah **cabang raja** di pusatnya."
          },
          {
            "p": "Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga pasangan ini adalah triad setengah ({scoreBanhap})."
          },
          {
            "p": "Ular (巳) dan Sapi (丑) dari kelompok yang sama tidak memiliki karakter pusat 酉, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral."
          },
          {
            "p": "Pada lingkaran, 丑 berada di urutan kedua dan 酉 di urutan kesepuluh, dan kedua karakter itu terpisah empat langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Sapi dan Ayam",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Triad setengah"
                ],
                [
                  "Skor",
                  "{scoreBanhap}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacBanhap} poin dalam kecocokan zodiak dan sebesar {swingDayBranchBanhap} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Sapi** — Enam-Harmoni [Tikus](/guide/zodiac-pair-rat-ox) · Triad setengah [Ayam](/guide/zodiac-pair-ox-rooster) · Ketidakcocokan [Kuda](/guide/zodiac-pair-ox-horse) · Tabrakan [Domba](/guide/zodiac-pair-ox-goat)",
              "Pasangan khusus **Ayam** — Enam-Harmoni [Naga](/guide/zodiac-pair-dragon-rooster) · Triad setengah [Sapi](/guide/zodiac-pair-ox-rooster), [Ular](/guide/zodiac-pair-snake-rooster) · Ketidakcocokan [Harimau](/guide/zodiac-pair-tiger-rooster) · Tabrakan [Kelinci](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Sapi](/guide/zodiac-ox) · [Ayam](/guide/zodiac-rooster), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-tiger": {
    "eyebrow": "Menurut pasangan",
    "title": "Harimau dan Harimau — Cabang yang sama",
    "summary": "Hubungan apa yang dimiliki dua orang berzodiak Harimau, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Dua orang berzodiak Harimau memiliki cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang berzodiak Harimau memiliki cabang yang sama (寅 dan 寅). Artinya mereka mirip, bukan saling tertarik."
          },
          {
            "p": "Maka skornya {scoreSame}, sedikit di atas netral ({scoreNeutral}): bukan keharmonisan, tabrakan, atau ketidakcocokan, hanya sedikit dinaikkan."
          },
          {
            "p": "寅 adalah cabang bumi ketiga dari dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang berzodiak Harimau",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Cabang yang sama"
                ],
                [
                  "Skor",
                  "{scoreSame}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacSame} poin dalam kecocokan zodiak dan sebesar {swingDayBranchSame} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari Harimau",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Harimau** — Enam-Harmoni [Babi](/guide/zodiac-pair-tiger-pig) · Triad setengah [Kuda](/guide/zodiac-pair-tiger-horse) · Ketidakcocokan [Ayam](/guide/zodiac-pair-tiger-rooster) · Tabrakan [Monyet](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Harimau](/guide/zodiac-tiger), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-horse": {
    "eyebrow": "Menurut pasangan",
    "title": "Harimau dan Kuda — Triad setengah",
    "summary": "Hubungan apa yang dimiliki Harimau dan Kuda, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Harimau dan Kuda membentuk triad setengah",
        "blocks": [
          {
            "p": "Harimau dan Kuda membentuk triad setengah. 寅午戌 adalah satu kelompok triad (kelompok api), dan 午 adalah **cabang raja** di pusatnya."
          },
          {
            "p": "Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga pasangan ini adalah triad setengah ({scoreBanhap})."
          },
          {
            "p": "Anjing (戌) dan Harimau (寅) dari kelompok yang sama tidak memiliki karakter pusat 午, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral."
          },
          {
            "p": "Pada lingkaran, 寅 berada di urutan ketiga dan 午 di urutan ketujuh, dan kedua karakter itu terpisah empat langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Harimau dan Kuda",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Triad setengah"
                ],
                [
                  "Skor",
                  "{scoreBanhap}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacBanhap} poin dalam kecocokan zodiak dan sebesar {swingDayBranchBanhap} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Harimau** — Enam-Harmoni [Babi](/guide/zodiac-pair-tiger-pig) · Triad setengah [Kuda](/guide/zodiac-pair-tiger-horse) · Ketidakcocokan [Ayam](/guide/zodiac-pair-tiger-rooster) · Tabrakan [Monyet](/guide/zodiac-pair-tiger-monkey)",
              "Pasangan khusus **Kuda** — Enam-Harmoni [Domba](/guide/zodiac-pair-horse-goat) · Triad setengah [Harimau](/guide/zodiac-pair-tiger-horse), [Anjing](/guide/zodiac-pair-horse-dog) · Ketidakcocokan [Sapi](/guide/zodiac-pair-ox-horse) · Tabrakan [Tikus](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Harimau](/guide/zodiac-tiger) · [Kuda](/guide/zodiac-horse), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-monkey": {
    "eyebrow": "Menurut pasangan",
    "title": "Harimau dan Monyet — Tabrakan",
    "summary": "Hubungan apa yang dimiliki Harimau dan Monyet, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Harimau dan Monyet membentuk tabrakan",
        "blocks": [
          {
            "p": "Harimau dan Monyet membentuk tabrakan. 寅 dan 申 berada tepat berseberangan di lingkaran."
          },
          {
            "p": "Layanan ini tetap memberi {scoreChung} poin meskipun tabrakan. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan, dan memberi skor mendekati nol sama saja dengan menjatuhkan vonis atas dua orang."
          },
          {
            "p": "Pada lingkaran, 寅 berada di urutan ketiga dan 申 di urutan kesembilan, dan kedua karakter itu terpisah enam langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Harimau dan Monyet",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Tabrakan"
                ],
                [
                  "Skor",
                  "{scoreChung}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menurunkan tingkat kecocokan akhir sebesar {swingZodiacChung} poin dalam kecocokan zodiak dan sebesar {swingDayBranchChung} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Harimau** — Enam-Harmoni [Babi](/guide/zodiac-pair-tiger-pig) · Triad setengah [Kuda](/guide/zodiac-pair-tiger-horse) · Ketidakcocokan [Ayam](/guide/zodiac-pair-tiger-rooster) · Tabrakan [Monyet](/guide/zodiac-pair-tiger-monkey)",
              "Pasangan khusus **Monyet** — Enam-Harmoni [Ular](/guide/zodiac-pair-snake-monkey) · Triad setengah [Tikus](/guide/zodiac-pair-rat-monkey) · Ketidakcocokan [Kelinci](/guide/zodiac-pair-rabbit-monkey) · Tabrakan [Harimau](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Harimau](/guide/zodiac-tiger) · [Monyet](/guide/zodiac-monkey), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-rooster": {
    "eyebrow": "Menurut pasangan",
    "title": "Harimau dan Ayam — Ketidakcocokan",
    "summary": "Hubungan apa yang dimiliki Harimau dan Ayam, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Harimau dan Ayam membentuk ketidakcocokan",
        "blocks": [
          {
            "p": "Harimau dan Ayam membentuk ketidakcocokan. Posisi tabrakan 寅 adalah 申 (Monyet), dan 酉 berada tepat di sebelahnya; tepat di sebelah 卯 (Kelinci), posisi tabrakan 酉, berada 寅."
          },
          {
            "p": "Secara tradisional dipandang sebagai pasangan yang saling menyimpan kesal namun tidak bisa berpisah. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama, sehingga mendapat {scoreWonjin} — lebih tinggi daripada tabrakan ({scoreChung}) dan lebih rendah daripada netral ({scoreNeutral})."
          },
          {
            "p": "Pada lingkaran, 寅 berada di urutan ketiga dan 酉 di urutan kesepuluh, dan kedua karakter itu terpisah lima langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Harimau dan Ayam",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Ketidakcocokan"
                ],
                [
                  "Skor",
                  "{scoreWonjin}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menurunkan tingkat kecocokan akhir sebesar {swingZodiacWonjin} poin dalam kecocokan zodiak dan sebesar {swingDayBranchWonjin} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Harimau** — Enam-Harmoni [Babi](/guide/zodiac-pair-tiger-pig) · Triad setengah [Kuda](/guide/zodiac-pair-tiger-horse) · Ketidakcocokan [Ayam](/guide/zodiac-pair-tiger-rooster) · Tabrakan [Monyet](/guide/zodiac-pair-tiger-monkey)",
              "Pasangan khusus **Ayam** — Enam-Harmoni [Naga](/guide/zodiac-pair-dragon-rooster) · Triad setengah [Sapi](/guide/zodiac-pair-ox-rooster), [Ular](/guide/zodiac-pair-snake-rooster) · Ketidakcocokan [Harimau](/guide/zodiac-pair-tiger-rooster) · Tabrakan [Kelinci](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Harimau](/guide/zodiac-tiger) · [Ayam](/guide/zodiac-rooster), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-pig": {
    "eyebrow": "Menurut pasangan",
    "title": "Harimau dan Babi — Enam-Harmoni",
    "summary": "Hubungan apa yang dimiliki Harimau dan Babi, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Harimau dan Babi membentuk Enam-Harmoni",
        "blocks": [
          {
            "p": "Harimau dan Babi membentuk Enam-Harmoni. 寅 dan 亥 membentuk keharmonisan hanya dengan dua karakter."
          },
          {
            "p": "Enam-Harmoni adalah hubungan baik yang paling sering muncul dalam kecocokan, dan pada {scoreYukhap} itu adalah skor tertinggi yang bisa diperoleh kedua hewan."
          },
          {
            "p": "Pada lingkaran, 寅 berada di urutan ketiga dan 亥 di urutan kedua belas, dan kedua karakter itu terpisah tiga langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Harimau dan Babi",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Enam-Harmoni"
                ],
                [
                  "Skor",
                  "{scoreYukhap}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacYukhap} poin dalam kecocokan zodiak dan sebesar {swingDayBranchYukhap} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Harimau** — Enam-Harmoni [Babi](/guide/zodiac-pair-tiger-pig) · Triad setengah [Kuda](/guide/zodiac-pair-tiger-horse) · Ketidakcocokan [Ayam](/guide/zodiac-pair-tiger-rooster) · Tabrakan [Monyet](/guide/zodiac-pair-tiger-monkey)",
              "Pasangan khusus **Babi** — Enam-Harmoni [Harimau](/guide/zodiac-pair-tiger-pig) · Triad setengah [Kelinci](/guide/zodiac-pair-rabbit-pig) · Ketidakcocokan [Naga](/guide/zodiac-pair-dragon-pig) · Tabrakan [Ular](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Harimau](/guide/zodiac-tiger) · [Babi](/guide/zodiac-pig), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-rabbit": {
    "eyebrow": "Menurut pasangan",
    "title": "Kelinci dan Kelinci — Cabang yang sama",
    "summary": "Hubungan apa yang dimiliki dua orang berzodiak Kelinci, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Dua orang berzodiak Kelinci memiliki cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang berzodiak Kelinci memiliki cabang yang sama (卯 dan 卯). Artinya mereka mirip, bukan saling tertarik."
          },
          {
            "p": "Maka skornya {scoreSame}, sedikit di atas netral ({scoreNeutral}): bukan keharmonisan, tabrakan, atau ketidakcocokan, hanya sedikit dinaikkan."
          },
          {
            "p": "卯 adalah cabang bumi keempat dari dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang berzodiak Kelinci",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Cabang yang sama"
                ],
                [
                  "Skor",
                  "{scoreSame}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacSame} poin dalam kecocokan zodiak dan sebesar {swingDayBranchSame} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari Kelinci",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Kelinci** — Enam-Harmoni [Anjing](/guide/zodiac-pair-rabbit-dog) · Triad setengah [Domba](/guide/zodiac-pair-rabbit-goat), [Babi](/guide/zodiac-pair-rabbit-pig) · Ketidakcocokan [Monyet](/guide/zodiac-pair-rabbit-monkey) · Tabrakan [Ayam](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Kelinci](/guide/zodiac-rabbit), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-goat": {
    "eyebrow": "Menurut pasangan",
    "title": "Kelinci dan Domba — Triad setengah",
    "summary": "Hubungan apa yang dimiliki Kelinci dan Domba, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Kelinci dan Domba membentuk triad setengah",
        "blocks": [
          {
            "p": "Kelinci dan Domba membentuk triad setengah. 亥卯未 adalah satu kelompok triad (kelompok kayu), dan 卯 adalah **cabang raja** di pusatnya."
          },
          {
            "p": "Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga pasangan ini adalah triad setengah ({scoreBanhap})."
          },
          {
            "p": "Babi (亥) dan Domba (未) dari kelompok yang sama tidak memiliki karakter pusat 卯, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral."
          },
          {
            "p": "Pada lingkaran, 卯 berada di urutan keempat dan 未 di urutan kedelapan, dan kedua karakter itu terpisah empat langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Kelinci dan Domba",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Triad setengah"
                ],
                [
                  "Skor",
                  "{scoreBanhap}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacBanhap} poin dalam kecocokan zodiak dan sebesar {swingDayBranchBanhap} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Kelinci** — Enam-Harmoni [Anjing](/guide/zodiac-pair-rabbit-dog) · Triad setengah [Domba](/guide/zodiac-pair-rabbit-goat), [Babi](/guide/zodiac-pair-rabbit-pig) · Ketidakcocokan [Monyet](/guide/zodiac-pair-rabbit-monkey) · Tabrakan [Ayam](/guide/zodiac-pair-rabbit-rooster)",
              "Pasangan khusus **Domba** — Enam-Harmoni [Kuda](/guide/zodiac-pair-horse-goat) · Triad setengah [Kelinci](/guide/zodiac-pair-rabbit-goat) · Ketidakcocokan [Tikus](/guide/zodiac-pair-rat-goat) · Tabrakan [Sapi](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Kelinci](/guide/zodiac-rabbit) · [Domba](/guide/zodiac-goat), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-monkey": {
    "eyebrow": "Menurut pasangan",
    "title": "Kelinci dan Monyet — Ketidakcocokan",
    "summary": "Hubungan apa yang dimiliki Kelinci dan Monyet, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Kelinci dan Monyet membentuk ketidakcocokan",
        "blocks": [
          {
            "p": "Kelinci dan Monyet membentuk ketidakcocokan. Posisi tabrakan 卯 adalah 酉 (Ayam), dan 申 berada tepat di sebelahnya; tepat di sebelah 寅 (Harimau), posisi tabrakan 申, berada 卯."
          },
          {
            "p": "Secara tradisional dipandang sebagai pasangan yang saling menyimpan kesal namun tidak bisa berpisah. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama, sehingga mendapat {scoreWonjin} — lebih tinggi daripada tabrakan ({scoreChung}) dan lebih rendah daripada netral ({scoreNeutral})."
          },
          {
            "p": "Pada lingkaran, 卯 berada di urutan keempat dan 申 di urutan kesembilan, dan kedua karakter itu terpisah lima langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Kelinci dan Monyet",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Ketidakcocokan"
                ],
                [
                  "Skor",
                  "{scoreWonjin}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menurunkan tingkat kecocokan akhir sebesar {swingZodiacWonjin} poin dalam kecocokan zodiak dan sebesar {swingDayBranchWonjin} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Kelinci** — Enam-Harmoni [Anjing](/guide/zodiac-pair-rabbit-dog) · Triad setengah [Domba](/guide/zodiac-pair-rabbit-goat), [Babi](/guide/zodiac-pair-rabbit-pig) · Ketidakcocokan [Monyet](/guide/zodiac-pair-rabbit-monkey) · Tabrakan [Ayam](/guide/zodiac-pair-rabbit-rooster)",
              "Pasangan khusus **Monyet** — Enam-Harmoni [Ular](/guide/zodiac-pair-snake-monkey) · Triad setengah [Tikus](/guide/zodiac-pair-rat-monkey) · Ketidakcocokan [Kelinci](/guide/zodiac-pair-rabbit-monkey) · Tabrakan [Harimau](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Kelinci](/guide/zodiac-rabbit) · [Monyet](/guide/zodiac-monkey), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-rooster": {
    "eyebrow": "Menurut pasangan",
    "title": "Kelinci dan Ayam — Tabrakan",
    "summary": "Hubungan apa yang dimiliki Kelinci dan Ayam, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Kelinci dan Ayam membentuk tabrakan",
        "blocks": [
          {
            "p": "Kelinci dan Ayam membentuk tabrakan. 卯 dan 酉 berada tepat berseberangan di lingkaran."
          },
          {
            "p": "Layanan ini tetap memberi {scoreChung} poin meskipun tabrakan. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan, dan memberi skor mendekati nol sama saja dengan menjatuhkan vonis atas dua orang."
          },
          {
            "p": "Pada lingkaran, 卯 berada di urutan keempat dan 酉 di urutan kesepuluh, dan kedua karakter itu terpisah enam langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Kelinci dan Ayam",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Tabrakan"
                ],
                [
                  "Skor",
                  "{scoreChung}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menurunkan tingkat kecocokan akhir sebesar {swingZodiacChung} poin dalam kecocokan zodiak dan sebesar {swingDayBranchChung} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Kelinci** — Enam-Harmoni [Anjing](/guide/zodiac-pair-rabbit-dog) · Triad setengah [Domba](/guide/zodiac-pair-rabbit-goat), [Babi](/guide/zodiac-pair-rabbit-pig) · Ketidakcocokan [Monyet](/guide/zodiac-pair-rabbit-monkey) · Tabrakan [Ayam](/guide/zodiac-pair-rabbit-rooster)",
              "Pasangan khusus **Ayam** — Enam-Harmoni [Naga](/guide/zodiac-pair-dragon-rooster) · Triad setengah [Sapi](/guide/zodiac-pair-ox-rooster), [Ular](/guide/zodiac-pair-snake-rooster) · Ketidakcocokan [Harimau](/guide/zodiac-pair-tiger-rooster) · Tabrakan [Kelinci](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Kelinci](/guide/zodiac-rabbit) · [Ayam](/guide/zodiac-rooster), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-dog": {
    "eyebrow": "Menurut pasangan",
    "title": "Kelinci dan Anjing — Enam-Harmoni",
    "summary": "Hubungan apa yang dimiliki Kelinci dan Anjing, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Kelinci dan Anjing membentuk Enam-Harmoni",
        "blocks": [
          {
            "p": "Kelinci dan Anjing membentuk Enam-Harmoni. 卯 dan 戌 membentuk keharmonisan hanya dengan dua karakter."
          },
          {
            "p": "Enam-Harmoni adalah hubungan baik yang paling sering muncul dalam kecocokan, dan pada {scoreYukhap} itu adalah skor tertinggi yang bisa diperoleh kedua hewan."
          },
          {
            "p": "Pada lingkaran, 卯 berada di urutan keempat dan 戌 di urutan kesebelas, dan kedua karakter itu terpisah lima langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Kelinci dan Anjing",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Enam-Harmoni"
                ],
                [
                  "Skor",
                  "{scoreYukhap}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacYukhap} poin dalam kecocokan zodiak dan sebesar {swingDayBranchYukhap} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Kelinci** — Enam-Harmoni [Anjing](/guide/zodiac-pair-rabbit-dog) · Triad setengah [Domba](/guide/zodiac-pair-rabbit-goat), [Babi](/guide/zodiac-pair-rabbit-pig) · Ketidakcocokan [Monyet](/guide/zodiac-pair-rabbit-monkey) · Tabrakan [Ayam](/guide/zodiac-pair-rabbit-rooster)",
              "Pasangan khusus **Anjing** — Enam-Harmoni [Kelinci](/guide/zodiac-pair-rabbit-dog) · Triad setengah [Kuda](/guide/zodiac-pair-horse-dog) · Ketidakcocokan [Ular](/guide/zodiac-pair-snake-dog) · Tabrakan [Naga](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Kelinci](/guide/zodiac-rabbit) · [Anjing](/guide/zodiac-dog), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-pig": {
    "eyebrow": "Menurut pasangan",
    "title": "Kelinci dan Babi — Triad setengah",
    "summary": "Hubungan apa yang dimiliki Kelinci dan Babi, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Kelinci dan Babi membentuk triad setengah",
        "blocks": [
          {
            "p": "Kelinci dan Babi membentuk triad setengah. 亥卯未 adalah satu kelompok triad (kelompok kayu), dan 卯 adalah **cabang raja** di pusatnya."
          },
          {
            "p": "Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga pasangan ini adalah triad setengah ({scoreBanhap})."
          },
          {
            "p": "Domba (未) dan Babi (亥) dari kelompok yang sama tidak memiliki karakter pusat 卯, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral."
          },
          {
            "p": "Pada lingkaran, 卯 berada di urutan keempat dan 亥 di urutan kedua belas, dan kedua karakter itu terpisah empat langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Kelinci dan Babi",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Triad setengah"
                ],
                [
                  "Skor",
                  "{scoreBanhap}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacBanhap} poin dalam kecocokan zodiak dan sebesar {swingDayBranchBanhap} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Kelinci** — Enam-Harmoni [Anjing](/guide/zodiac-pair-rabbit-dog) · Triad setengah [Domba](/guide/zodiac-pair-rabbit-goat), [Babi](/guide/zodiac-pair-rabbit-pig) · Ketidakcocokan [Monyet](/guide/zodiac-pair-rabbit-monkey) · Tabrakan [Ayam](/guide/zodiac-pair-rabbit-rooster)",
              "Pasangan khusus **Babi** — Enam-Harmoni [Harimau](/guide/zodiac-pair-tiger-pig) · Triad setengah [Kelinci](/guide/zodiac-pair-rabbit-pig) · Ketidakcocokan [Naga](/guide/zodiac-pair-dragon-pig) · Tabrakan [Ular](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Kelinci](/guide/zodiac-rabbit) · [Babi](/guide/zodiac-pig), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-dragon": {
    "eyebrow": "Menurut pasangan",
    "title": "Naga dan Naga — Cabang yang sama",
    "summary": "Hubungan apa yang dimiliki dua orang berzodiak Naga, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Dua orang berzodiak Naga memiliki cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang berzodiak Naga memiliki cabang yang sama (辰 dan 辰). Artinya mereka mirip, bukan saling tertarik."
          },
          {
            "p": "Maka skornya {scoreSame}, sedikit di atas netral ({scoreNeutral}): bukan keharmonisan, tabrakan, atau ketidakcocokan, hanya sedikit dinaikkan."
          },
          {
            "p": "辰 adalah cabang bumi kelima dari dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang berzodiak Naga",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Cabang yang sama"
                ],
                [
                  "Skor",
                  "{scoreSame}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacSame} poin dalam kecocokan zodiak dan sebesar {swingDayBranchSame} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari Naga",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Naga** — Enam-Harmoni [Ayam](/guide/zodiac-pair-dragon-rooster) · Triad setengah [Tikus](/guide/zodiac-pair-rat-dragon) · Ketidakcocokan [Babi](/guide/zodiac-pair-dragon-pig) · Tabrakan [Anjing](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Naga](/guide/zodiac-dragon), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-rooster": {
    "eyebrow": "Menurut pasangan",
    "title": "Naga dan Ayam — Enam-Harmoni",
    "summary": "Hubungan apa yang dimiliki Naga dan Ayam, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Naga dan Ayam membentuk Enam-Harmoni",
        "blocks": [
          {
            "p": "Naga dan Ayam membentuk Enam-Harmoni. 辰 dan 酉 membentuk keharmonisan hanya dengan dua karakter."
          },
          {
            "p": "Enam-Harmoni adalah hubungan baik yang paling sering muncul dalam kecocokan, dan pada {scoreYukhap} itu adalah skor tertinggi yang bisa diperoleh kedua hewan."
          },
          {
            "p": "Pada lingkaran, 辰 berada di urutan kelima dan 酉 di urutan kesepuluh, dan kedua karakter itu terpisah lima langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Naga dan Ayam",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Enam-Harmoni"
                ],
                [
                  "Skor",
                  "{scoreYukhap}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacYukhap} poin dalam kecocokan zodiak dan sebesar {swingDayBranchYukhap} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Naga** — Enam-Harmoni [Ayam](/guide/zodiac-pair-dragon-rooster) · Triad setengah [Tikus](/guide/zodiac-pair-rat-dragon) · Ketidakcocokan [Babi](/guide/zodiac-pair-dragon-pig) · Tabrakan [Anjing](/guide/zodiac-pair-dragon-dog)",
              "Pasangan khusus **Ayam** — Enam-Harmoni [Naga](/guide/zodiac-pair-dragon-rooster) · Triad setengah [Sapi](/guide/zodiac-pair-ox-rooster), [Ular](/guide/zodiac-pair-snake-rooster) · Ketidakcocokan [Harimau](/guide/zodiac-pair-tiger-rooster) · Tabrakan [Kelinci](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Naga](/guide/zodiac-dragon) · [Ayam](/guide/zodiac-rooster), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-dog": {
    "eyebrow": "Menurut pasangan",
    "title": "Naga dan Anjing — Tabrakan",
    "summary": "Hubungan apa yang dimiliki Naga dan Anjing, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Naga dan Anjing membentuk tabrakan",
        "blocks": [
          {
            "p": "Naga dan Anjing membentuk tabrakan. 辰 dan 戌 berada tepat berseberangan di lingkaran."
          },
          {
            "p": "Layanan ini tetap memberi {scoreChung} poin meskipun tabrakan. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan, dan memberi skor mendekati nol sama saja dengan menjatuhkan vonis atas dua orang."
          },
          {
            "p": "Pada lingkaran, 辰 berada di urutan kelima dan 戌 di urutan kesebelas, dan kedua karakter itu terpisah enam langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Naga dan Anjing",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Tabrakan"
                ],
                [
                  "Skor",
                  "{scoreChung}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menurunkan tingkat kecocokan akhir sebesar {swingZodiacChung} poin dalam kecocokan zodiak dan sebesar {swingDayBranchChung} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Naga** — Enam-Harmoni [Ayam](/guide/zodiac-pair-dragon-rooster) · Triad setengah [Tikus](/guide/zodiac-pair-rat-dragon) · Ketidakcocokan [Babi](/guide/zodiac-pair-dragon-pig) · Tabrakan [Anjing](/guide/zodiac-pair-dragon-dog)",
              "Pasangan khusus **Anjing** — Enam-Harmoni [Kelinci](/guide/zodiac-pair-rabbit-dog) · Triad setengah [Kuda](/guide/zodiac-pair-horse-dog) · Ketidakcocokan [Ular](/guide/zodiac-pair-snake-dog) · Tabrakan [Naga](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Naga](/guide/zodiac-dragon) · [Anjing](/guide/zodiac-dog), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-pig": {
    "eyebrow": "Menurut pasangan",
    "title": "Naga dan Babi — Ketidakcocokan",
    "summary": "Hubungan apa yang dimiliki Naga dan Babi, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Naga dan Babi membentuk ketidakcocokan",
        "blocks": [
          {
            "p": "Naga dan Babi membentuk ketidakcocokan. Posisi tabrakan 辰 adalah 戌 (Anjing), dan 亥 berada tepat di sebelahnya; tepat di sebelah 巳 (Ular), posisi tabrakan 亥, berada 辰."
          },
          {
            "p": "Secara tradisional dipandang sebagai pasangan yang saling menyimpan kesal namun tidak bisa berpisah. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama, sehingga mendapat {scoreWonjin} — lebih tinggi daripada tabrakan ({scoreChung}) dan lebih rendah daripada netral ({scoreNeutral})."
          },
          {
            "p": "Pada lingkaran, 辰 berada di urutan kelima dan 亥 di urutan kedua belas, dan kedua karakter itu terpisah lima langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Naga dan Babi",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Ketidakcocokan"
                ],
                [
                  "Skor",
                  "{scoreWonjin}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menurunkan tingkat kecocokan akhir sebesar {swingZodiacWonjin} poin dalam kecocokan zodiak dan sebesar {swingDayBranchWonjin} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Naga** — Enam-Harmoni [Ayam](/guide/zodiac-pair-dragon-rooster) · Triad setengah [Tikus](/guide/zodiac-pair-rat-dragon) · Ketidakcocokan [Babi](/guide/zodiac-pair-dragon-pig) · Tabrakan [Anjing](/guide/zodiac-pair-dragon-dog)",
              "Pasangan khusus **Babi** — Enam-Harmoni [Harimau](/guide/zodiac-pair-tiger-pig) · Triad setengah [Kelinci](/guide/zodiac-pair-rabbit-pig) · Ketidakcocokan [Naga](/guide/zodiac-pair-dragon-pig) · Tabrakan [Ular](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Naga](/guide/zodiac-dragon) · [Babi](/guide/zodiac-pig), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-snake": {
    "eyebrow": "Menurut pasangan",
    "title": "Ular dan Ular — Cabang yang sama",
    "summary": "Hubungan apa yang dimiliki dua orang berzodiak Ular, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Dua orang berzodiak Ular memiliki cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang berzodiak Ular memiliki cabang yang sama (巳 dan 巳). Artinya mereka mirip, bukan saling tertarik."
          },
          {
            "p": "Maka skornya {scoreSame}, sedikit di atas netral ({scoreNeutral}): bukan keharmonisan, tabrakan, atau ketidakcocokan, hanya sedikit dinaikkan."
          },
          {
            "p": "巳 adalah cabang bumi keenam dari dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang berzodiak Ular",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Cabang yang sama"
                ],
                [
                  "Skor",
                  "{scoreSame}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacSame} poin dalam kecocokan zodiak dan sebesar {swingDayBranchSame} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari Ular",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Ular** — Enam-Harmoni [Monyet](/guide/zodiac-pair-snake-monkey) · Triad setengah [Ayam](/guide/zodiac-pair-snake-rooster) · Ketidakcocokan [Anjing](/guide/zodiac-pair-snake-dog) · Tabrakan [Babi](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Ular](/guide/zodiac-snake), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-monkey": {
    "eyebrow": "Menurut pasangan",
    "title": "Ular dan Monyet — Enam-Harmoni",
    "summary": "Hubungan apa yang dimiliki Ular dan Monyet, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Ular dan Monyet membentuk Enam-Harmoni",
        "blocks": [
          {
            "p": "Ular dan Monyet membentuk Enam-Harmoni. 巳 dan 申 membentuk keharmonisan hanya dengan dua karakter."
          },
          {
            "p": "Enam-Harmoni adalah hubungan baik yang paling sering muncul dalam kecocokan, dan pada {scoreYukhap} itu adalah skor tertinggi yang bisa diperoleh kedua hewan."
          },
          {
            "p": "Pada lingkaran, 巳 berada di urutan keenam dan 申 di urutan kesembilan, dan kedua karakter itu terpisah tiga langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Ular dan Monyet",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Enam-Harmoni"
                ],
                [
                  "Skor",
                  "{scoreYukhap}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacYukhap} poin dalam kecocokan zodiak dan sebesar {swingDayBranchYukhap} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Ular** — Enam-Harmoni [Monyet](/guide/zodiac-pair-snake-monkey) · Triad setengah [Ayam](/guide/zodiac-pair-snake-rooster) · Ketidakcocokan [Anjing](/guide/zodiac-pair-snake-dog) · Tabrakan [Babi](/guide/zodiac-pair-snake-pig)",
              "Pasangan khusus **Monyet** — Enam-Harmoni [Ular](/guide/zodiac-pair-snake-monkey) · Triad setengah [Tikus](/guide/zodiac-pair-rat-monkey) · Ketidakcocokan [Kelinci](/guide/zodiac-pair-rabbit-monkey) · Tabrakan [Harimau](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Ular](/guide/zodiac-snake) · [Monyet](/guide/zodiac-monkey), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-rooster": {
    "eyebrow": "Menurut pasangan",
    "title": "Ular dan Ayam — Triad setengah",
    "summary": "Hubungan apa yang dimiliki Ular dan Ayam, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Ular dan Ayam membentuk triad setengah",
        "blocks": [
          {
            "p": "Ular dan Ayam membentuk triad setengah. 巳酉丑 adalah satu kelompok triad (kelompok logam), dan 酉 adalah **cabang raja** di pusatnya."
          },
          {
            "p": "Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga pasangan ini adalah triad setengah ({scoreBanhap})."
          },
          {
            "p": "Sapi (丑) dan Ular (巳) dari kelompok yang sama tidak memiliki karakter pusat 酉, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral."
          },
          {
            "p": "Pada lingkaran, 巳 berada di urutan keenam dan 酉 di urutan kesepuluh, dan kedua karakter itu terpisah empat langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Ular dan Ayam",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Triad setengah"
                ],
                [
                  "Skor",
                  "{scoreBanhap}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacBanhap} poin dalam kecocokan zodiak dan sebesar {swingDayBranchBanhap} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Ular** — Enam-Harmoni [Monyet](/guide/zodiac-pair-snake-monkey) · Triad setengah [Ayam](/guide/zodiac-pair-snake-rooster) · Ketidakcocokan [Anjing](/guide/zodiac-pair-snake-dog) · Tabrakan [Babi](/guide/zodiac-pair-snake-pig)",
              "Pasangan khusus **Ayam** — Enam-Harmoni [Naga](/guide/zodiac-pair-dragon-rooster) · Triad setengah [Sapi](/guide/zodiac-pair-ox-rooster), [Ular](/guide/zodiac-pair-snake-rooster) · Ketidakcocokan [Harimau](/guide/zodiac-pair-tiger-rooster) · Tabrakan [Kelinci](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Ular](/guide/zodiac-snake) · [Ayam](/guide/zodiac-rooster), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-dog": {
    "eyebrow": "Menurut pasangan",
    "title": "Ular dan Anjing — Ketidakcocokan",
    "summary": "Hubungan apa yang dimiliki Ular dan Anjing, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Ular dan Anjing membentuk ketidakcocokan",
        "blocks": [
          {
            "p": "Ular dan Anjing membentuk ketidakcocokan. Posisi tabrakan 巳 adalah 亥 (Babi), dan 戌 berada tepat di sebelahnya; tepat di sebelah 辰 (Naga), posisi tabrakan 戌, berada 巳."
          },
          {
            "p": "Secara tradisional dipandang sebagai pasangan yang saling menyimpan kesal namun tidak bisa berpisah. Tampak tenang di permukaan, tetapi ketidakselarasannya dipercaya bertahan lama, sehingga mendapat {scoreWonjin} — lebih tinggi daripada tabrakan ({scoreChung}) dan lebih rendah daripada netral ({scoreNeutral})."
          },
          {
            "p": "Pada lingkaran, 巳 berada di urutan keenam dan 戌 di urutan kesebelas, dan kedua karakter itu terpisah lima langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Ular dan Anjing",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Ketidakcocokan"
                ],
                [
                  "Skor",
                  "{scoreWonjin}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menurunkan tingkat kecocokan akhir sebesar {swingZodiacWonjin} poin dalam kecocokan zodiak dan sebesar {swingDayBranchWonjin} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Ular** — Enam-Harmoni [Monyet](/guide/zodiac-pair-snake-monkey) · Triad setengah [Ayam](/guide/zodiac-pair-snake-rooster) · Ketidakcocokan [Anjing](/guide/zodiac-pair-snake-dog) · Tabrakan [Babi](/guide/zodiac-pair-snake-pig)",
              "Pasangan khusus **Anjing** — Enam-Harmoni [Kelinci](/guide/zodiac-pair-rabbit-dog) · Triad setengah [Kuda](/guide/zodiac-pair-horse-dog) · Ketidakcocokan [Ular](/guide/zodiac-pair-snake-dog) · Tabrakan [Naga](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Ular](/guide/zodiac-snake) · [Anjing](/guide/zodiac-dog), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-pig": {
    "eyebrow": "Menurut pasangan",
    "title": "Ular dan Babi — Tabrakan",
    "summary": "Hubungan apa yang dimiliki Ular dan Babi, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Ular dan Babi membentuk tabrakan",
        "blocks": [
          {
            "p": "Ular dan Babi membentuk tabrakan. 巳 dan 亥 berada tepat berseberangan di lingkaran."
          },
          {
            "p": "Layanan ini tetap memberi {scoreChung} poin meskipun tabrakan. Dalam myeongri tradisional, tabrakan adalah benturan, bukan akhir sebuah hubungan, dan memberi skor mendekati nol sama saja dengan menjatuhkan vonis atas dua orang."
          },
          {
            "p": "Pada lingkaran, 巳 berada di urutan keenam dan 亥 di urutan kedua belas, dan kedua karakter itu terpisah enam langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Ular dan Babi",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Tabrakan"
                ],
                [
                  "Skor",
                  "{scoreChung}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menurunkan tingkat kecocokan akhir sebesar {swingZodiacChung} poin dalam kecocokan zodiak dan sebesar {swingDayBranchChung} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Ular** — Enam-Harmoni [Monyet](/guide/zodiac-pair-snake-monkey) · Triad setengah [Ayam](/guide/zodiac-pair-snake-rooster) · Ketidakcocokan [Anjing](/guide/zodiac-pair-snake-dog) · Tabrakan [Babi](/guide/zodiac-pair-snake-pig)",
              "Pasangan khusus **Babi** — Enam-Harmoni [Harimau](/guide/zodiac-pair-tiger-pig) · Triad setengah [Kelinci](/guide/zodiac-pair-rabbit-pig) · Ketidakcocokan [Naga](/guide/zodiac-pair-dragon-pig) · Tabrakan [Ular](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Ular](/guide/zodiac-snake) · [Babi](/guide/zodiac-pig), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-horse-horse": {
    "eyebrow": "Menurut pasangan",
    "title": "Kuda dan Kuda — Cabang yang sama",
    "summary": "Hubungan apa yang dimiliki dua orang berzodiak Kuda, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Dua orang berzodiak Kuda memiliki cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang berzodiak Kuda memiliki cabang yang sama (午 dan 午). Artinya mereka mirip, bukan saling tertarik."
          },
          {
            "p": "Maka skornya {scoreSame}, sedikit di atas netral ({scoreNeutral}): bukan keharmonisan, tabrakan, atau ketidakcocokan, hanya sedikit dinaikkan."
          },
          {
            "p": "午 adalah cabang bumi ketujuh dari dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang berzodiak Kuda",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Cabang yang sama"
                ],
                [
                  "Skor",
                  "{scoreSame}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacSame} poin dalam kecocokan zodiak dan sebesar {swingDayBranchSame} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari Kuda",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Kuda** — Enam-Harmoni [Domba](/guide/zodiac-pair-horse-goat) · Triad setengah [Harimau](/guide/zodiac-pair-tiger-horse), [Anjing](/guide/zodiac-pair-horse-dog) · Ketidakcocokan [Sapi](/guide/zodiac-pair-ox-horse) · Tabrakan [Tikus](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Kuda](/guide/zodiac-horse), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-horse-goat": {
    "eyebrow": "Menurut pasangan",
    "title": "Kuda dan Domba — Enam-Harmoni",
    "summary": "Hubungan apa yang dimiliki Kuda dan Domba, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Kuda dan Domba membentuk Enam-Harmoni",
        "blocks": [
          {
            "p": "Kuda dan Domba membentuk Enam-Harmoni. 午 dan 未 membentuk keharmonisan hanya dengan dua karakter."
          },
          {
            "p": "Enam-Harmoni adalah hubungan baik yang paling sering muncul dalam kecocokan, dan pada {scoreYukhap} itu adalah skor tertinggi yang bisa diperoleh kedua hewan."
          },
          {
            "p": "Pada lingkaran, 午 berada di urutan ketujuh dan 未 di urutan kedelapan, dan kedua karakter itu terpisah satu langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Kuda dan Domba",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Enam-Harmoni"
                ],
                [
                  "Skor",
                  "{scoreYukhap}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacYukhap} poin dalam kecocokan zodiak dan sebesar {swingDayBranchYukhap} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Kuda** — Enam-Harmoni [Domba](/guide/zodiac-pair-horse-goat) · Triad setengah [Harimau](/guide/zodiac-pair-tiger-horse), [Anjing](/guide/zodiac-pair-horse-dog) · Ketidakcocokan [Sapi](/guide/zodiac-pair-ox-horse) · Tabrakan [Tikus](/guide/zodiac-pair-rat-horse)",
              "Pasangan khusus **Domba** — Enam-Harmoni [Kuda](/guide/zodiac-pair-horse-goat) · Triad setengah [Kelinci](/guide/zodiac-pair-rabbit-goat) · Ketidakcocokan [Tikus](/guide/zodiac-pair-rat-goat) · Tabrakan [Sapi](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Kuda](/guide/zodiac-horse) · [Domba](/guide/zodiac-goat), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-horse-dog": {
    "eyebrow": "Menurut pasangan",
    "title": "Kuda dan Anjing — Triad setengah",
    "summary": "Hubungan apa yang dimiliki Kuda dan Anjing, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Kuda dan Anjing membentuk triad setengah",
        "blocks": [
          {
            "p": "Kuda dan Anjing membentuk triad setengah. 寅午戌 adalah satu kelompok triad (kelompok api), dan 午 adalah **cabang raja** di pusatnya."
          },
          {
            "p": "Inyeon-Link hanya menerima pasangan yang menyertakan cabang raja, sehingga pasangan ini adalah triad setengah ({scoreBanhap})."
          },
          {
            "p": "Harimau (寅) dan Anjing (戌) dari kelompok yang sama tidak memiliki karakter pusat 午, sehingga tidak dihitung sebagai keharmonisan dan dianggap netral."
          },
          {
            "p": "Pada lingkaran, 午 berada di urutan ketujuh dan 戌 di urutan kesebelas, dan kedua karakter itu terpisah empat langkah."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Kuda dan Anjing",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Triad setengah"
                ],
                [
                  "Skor",
                  "{scoreBanhap}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacBanhap} poin dalam kecocokan zodiak dan sebesar {swingDayBranchBanhap} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari masing-masing hewan",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Kuda** — Enam-Harmoni [Domba](/guide/zodiac-pair-horse-goat) · Triad setengah [Harimau](/guide/zodiac-pair-tiger-horse), [Anjing](/guide/zodiac-pair-horse-dog) · Ketidakcocokan [Sapi](/guide/zodiac-pair-ox-horse) · Tabrakan [Tikus](/guide/zodiac-pair-rat-horse)",
              "Pasangan khusus **Anjing** — Enam-Harmoni [Kelinci](/guide/zodiac-pair-rabbit-dog) · Triad setengah [Kuda](/guide/zodiac-pair-horse-dog) · Ketidakcocokan [Ular](/guide/zodiac-pair-snake-dog) · Tabrakan [Naga](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Kuda](/guide/zodiac-horse) · [Anjing](/guide/zodiac-dog), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-goat-goat": {
    "eyebrow": "Menurut pasangan",
    "title": "Domba dan Domba — Cabang yang sama",
    "summary": "Hubungan apa yang dimiliki dua orang berzodiak Domba, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Dua orang berzodiak Domba memiliki cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang berzodiak Domba memiliki cabang yang sama (未 dan 未). Artinya mereka mirip, bukan saling tertarik."
          },
          {
            "p": "Maka skornya {scoreSame}, sedikit di atas netral ({scoreNeutral}): bukan keharmonisan, tabrakan, atau ketidakcocokan, hanya sedikit dinaikkan."
          },
          {
            "p": "未 adalah cabang bumi kedelapan dari dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang berzodiak Domba",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Cabang yang sama"
                ],
                [
                  "Skor",
                  "{scoreSame}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacSame} poin dalam kecocokan zodiak dan sebesar {swingDayBranchSame} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari Domba",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Domba** — Enam-Harmoni [Kuda](/guide/zodiac-pair-horse-goat) · Triad setengah [Kelinci](/guide/zodiac-pair-rabbit-goat) · Ketidakcocokan [Tikus](/guide/zodiac-pair-rat-goat) · Tabrakan [Sapi](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Domba](/guide/zodiac-goat), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-monkey-monkey": {
    "eyebrow": "Menurut pasangan",
    "title": "Monyet dan Monyet — Cabang yang sama",
    "summary": "Hubungan apa yang dimiliki dua orang berzodiak Monyet, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Dua orang berzodiak Monyet memiliki cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang berzodiak Monyet memiliki cabang yang sama (申 dan 申). Artinya mereka mirip, bukan saling tertarik."
          },
          {
            "p": "Maka skornya {scoreSame}, sedikit di atas netral ({scoreNeutral}): bukan keharmonisan, tabrakan, atau ketidakcocokan, hanya sedikit dinaikkan."
          },
          {
            "p": "申 adalah cabang bumi kesembilan dari dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang berzodiak Monyet",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Cabang yang sama"
                ],
                [
                  "Skor",
                  "{scoreSame}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacSame} poin dalam kecocokan zodiak dan sebesar {swingDayBranchSame} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari Monyet",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Monyet** — Enam-Harmoni [Ular](/guide/zodiac-pair-snake-monkey) · Triad setengah [Tikus](/guide/zodiac-pair-rat-monkey) · Ketidakcocokan [Kelinci](/guide/zodiac-pair-rabbit-monkey) · Tabrakan [Harimau](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Monyet](/guide/zodiac-monkey), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rooster-rooster": {
    "eyebrow": "Menurut pasangan",
    "title": "Ayam dan Ayam — Cabang yang sama",
    "summary": "Hubungan apa yang dimiliki dua orang berzodiak Ayam, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Dua orang berzodiak Ayam memiliki cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang berzodiak Ayam memiliki cabang yang sama (酉 dan 酉). Artinya mereka mirip, bukan saling tertarik."
          },
          {
            "p": "Maka skornya {scoreSame}, sedikit di atas netral ({scoreNeutral}): bukan keharmonisan, tabrakan, atau ketidakcocokan, hanya sedikit dinaikkan."
          },
          {
            "p": "酉 adalah cabang bumi kesepuluh dari dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang berzodiak Ayam",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Cabang yang sama"
                ],
                [
                  "Skor",
                  "{scoreSame}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacSame} poin dalam kecocokan zodiak dan sebesar {swingDayBranchSame} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari Ayam",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Ayam** — Enam-Harmoni [Naga](/guide/zodiac-pair-dragon-rooster) · Triad setengah [Sapi](/guide/zodiac-pair-ox-rooster), [Ular](/guide/zodiac-pair-snake-rooster) · Ketidakcocokan [Harimau](/guide/zodiac-pair-tiger-rooster) · Tabrakan [Kelinci](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Ayam](/guide/zodiac-rooster), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dog-dog": {
    "eyebrow": "Menurut pasangan",
    "title": "Anjing dan Anjing — Cabang yang sama",
    "summary": "Hubungan apa yang dimiliki dua orang berzodiak Anjing, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Dua orang berzodiak Anjing memiliki cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang berzodiak Anjing memiliki cabang yang sama (戌 dan 戌). Artinya mereka mirip, bukan saling tertarik."
          },
          {
            "p": "Maka skornya {scoreSame}, sedikit di atas netral ({scoreNeutral}): bukan keharmonisan, tabrakan, atau ketidakcocokan, hanya sedikit dinaikkan."
          },
          {
            "p": "戌 adalah cabang bumi kesebelas dari dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang berzodiak Anjing",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Cabang yang sama"
                ],
                [
                  "Skor",
                  "{scoreSame}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacSame} poin dalam kecocokan zodiak dan sebesar {swingDayBranchSame} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari Anjing",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Anjing** — Enam-Harmoni [Kelinci](/guide/zodiac-pair-rabbit-dog) · Triad setengah [Kuda](/guide/zodiac-pair-horse-dog) · Ketidakcocokan [Ular](/guide/zodiac-pair-snake-dog) · Tabrakan [Naga](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Anjing](/guide/zodiac-dog), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-pig-pig": {
    "eyebrow": "Menurut pasangan",
    "title": "Babi dan Babi — Cabang yang sama",
    "summary": "Hubungan apa yang dimiliki dua orang berzodiak Babi, berapa skornya, dan seberapa jauh skor itu menggeser tingkat kecocokan akhir — disusun persis seperti aturan perhitungan Inyeon-Link.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Dua orang berzodiak Babi memiliki cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang berzodiak Babi memiliki cabang yang sama (亥 dan 亥). Artinya mereka mirip, bukan saling tertarik."
          },
          {
            "p": "Maka skornya {scoreSame}, sedikit di atas netral ({scoreNeutral}): bukan keharmonisan, tabrakan, atau ketidakcocokan, hanya sedikit dinaikkan."
          },
          {
            "p": "亥 adalah cabang bumi kedua belas dari dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka-angka pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang berzodiak Babi",
              "head": [
                "Butir",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Cabang yang sama"
                ],
                [
                  "Skor",
                  "{scoreSame}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bagian dari tingkat kecocokan akhir dalam kecocokan cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Seberapa jauh ia menggeser tingkat kecocokan akhir",
        "blocks": [
          {
            "p": "Jika semua hal lain sama, pasangan ini menaikkan tingkat kecocokan akhir sebesar {swingZodiacSame} poin dalam kecocokan zodiak dan sebesar {swingDayBranchSame} poin dalam kecocokan cabang hari, dibandingkan dengan pasangan netral."
          },
          {
            "p": "Kecocokan zodiak menyandingkan cabang tahun lahir, dan kecocokan cabang hari menyandingkan cabang hari lahir. Keduanya bisa berupa cabang yang berbeda, sehingga dua orang yang sama dapat menunjukkan hubungan yang berbeda pada masing-masing."
          }
        ]
      },
      {
        "title": "Hubungan khusus lain dari Babi",
        "blocks": [
          {
            "ul": [
              "Pasangan khusus **Babi** — Enam-Harmoni [Harimau](/guide/zodiac-pair-tiger-pig) · Triad setengah [Kelinci](/guide/zodiac-pair-rabbit-pig) · Ketidakcocokan [Naga](/guide/zodiac-pair-dragon-pig) · Tabrakan [Ular](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dikatakan panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu hewan tidak menentukan hubungan dua orang. {weightSaju} dari tingkat kecocokan akhir ditentukan oleh kecocokan saju.",
              "Perubahan poin di atas mengandaikan semua hal lain sama; hasil sebenarnya ditentukan oleh seluruh saju kedua orang."
            ]
          },
          {
            "p": "Panduan lengkap tiap hewan ada di [Babi](/guide/zodiac-pig), dan tabel lengkapnya ada di [tabel dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "Sepuluh Dewa",
    "title": "Sepuluh Dewa dan Posisi Pasangan",
    "summary": "Kami melihat apa batang hari masing-masing orang terhadap satu sama lain melalui Sepuluh Dewa. Kami menjelaskan mengapa kekayaan langsung dan kekayaan tidak langsung dibaca secara berbeda meskipun keduanya adalah kekayaan.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Batang hari adalah orang itu sendiri",
        "blocks": [
          {
            "p": "Di antara delapan karakter saju, **batang hari** (batang langit dari hari kelahiran) merujuk pada orang itu sendiri. Tujuh karakter yang tersisa dibaca sebagai lingkungan di mana batang hari tersebut ditempatkan."
          },
          {
            "p": "**Sepuluh Dewa** (十神) membagi bagaimana batang hari memahami karakter lain menjadi sepuluh kategori. Apa yang memelihara saya adalah **sumber**, apa yang sama dengan saya adalah **rekan**, apa yang saya hasilkan adalah **output**, apa yang saya kendalikan adalah **kekayaan**, dan apa yang mengendalikan saya adalah **otoritas** — masing-masing dari lima ini kemudian dibagi berdasarkan polaritas, sehingga menjadi sepuluh."
          }
        ]
      },
      {
        "title": "Apa batang hari masing-masing orang terhadap satu sama lain",
        "blocks": [
          {
            "p": "Ini adalah item pertama dalam kecocokan. Setelah ditentukan bagaimana batang hari A memahami batang hari B, persepsi B terhadap A juga ditentukan, sehingga **hanya ada enam kemungkinan**."
          },
          {
            "table": {
              "caption": "Dalam urutan skor tertinggi",
              "head": [
                "Pasangan",
                "Yin/Yang",
                "Nama",
                "Makna"
              ],
              "rows": [
                [
                  "Kekayaan Langsung ↔ Otoritas Langsung",
                  "Polaritas berlawanan",
                  "Ikatan hangat (有情)",
                  "Ini adalah pasangan yang secara tradisional dilihat sebagai posisi pasangan. Yin dan yang tidak cocok, saling menarik."
                ],
                [
                  "Pejabat yang Menyakiti ↔ Sumber Langsung",
                  "Polaritas berlawanan",
                  "Pejabat yang Menyakiti mengenakan Segel (傷官佩印)",
                  "Satu sisi membungkus energi intens dari sisi lainnya."
                ],
                [
                  "Teman ↔ Teman",
                  "Polaritas yang sama",
                  "Setara",
                  "Mereka mirip satu sama lain dan setara, tetapi tidak saling mendorong."
                ],
                [
                  "Saingan ↔ Saingan",
                  "Polaritas berlawanan",
                  "Kompetisi",
                  "Mereka tertarik satu sama lain tetapi bersaing untuk posisi yang sama."
                ],
                [
                  "Kekayaan Tidak Langsung ↔ Otoritas Tidak Langsung",
                  "Polaritas yang sama",
                  "Ikatan dingin (無情)",
                  "Stimulasi sangat besar, tetapi bebannya juga berat."
                ],
                [
                  "Dewa Makan ↔ Sumber Tidak Langsung",
                  "Polaritas yang sama",
                  "Bintang burung hantu merampok makanan (梟神奪食)",
                  "Energi yang diberikan diambil oleh pasangan, menghalangi aliran."
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yin dan Yang berada di persimpangan jalan",
        "blocks": [
          {
            "p": "Sisi di mana yin dan yang tidak selaras (Kekayaan yang Tepat, Pejabat yang Tepat, Rekan yang Tepat) bersifat emosional, sementara sisi yang sama (Sumber, Pejabat, Rekan) tidak emosional, yang merupakan prinsip yang membedakan yang tepat dan sisi dari Sepuluh Dewa."
          }
        ]
      },
      {
        "title": "Alasan melihat dengan Sepuluh Dewa daripada tiga elemen",
        "blocks": [
          {
            "p": "Ada metode untuk melihat hubungan batang hari dengan tiga elemen (generasi timbal balik, kesamaan, saling mengatasi). Ini sederhana, tetapi **yin dan yang menghilang.** 甲 (kayu yang) dan 乙 (kayu yin) menjadi 'kesamaan' yang sama seperti 甲 dan 甲, dan saling mengatasi dihancurkan menjadi satu skor tanpa arah atau yin dan yang."
          },
          {
            "p": "Posisi pasangan harus dievaluasi dalam hal Sepuluh Dewa. Jika item yang dilihat oleh lima elemen dan item yang dilihat oleh Sepuluh Dewa dicampur dalam satu mesin, akan ada dua standar untuk dua karakter yang sama. Oleh karena itu, kita menyatukan dengan Sepuluh Dewa."
          }
        ]
      },
      {
        "title": "Posisi pasangan adalah Kekayaan yang Tepat dan Pejabat yang Tepat",
        "blocks": [
          {
            "p": "Dalam tradisi, dewa mana dari Sepuluh Dewa yang mewakili pasangan berbeda berdasarkan gender."
          },
          {
            "table": {
              "head": [
                "Jenis Kelamin",
                "Posisi Pasangan",
                "Posisi yang Sesuai"
              ],
              "rows": [
                [
                  "Pria",
                  "Kekayaan Langsung (正財)",
                  "Kekayaan Tidak Langsung (偏財)"
                ],
                [
                  "Wanita",
                  "Otoritas Langsung (正官)",
                  "Otoritas Tidak Langsung (偏官)"
                ]
              ]
            }
          },
          {
            "p": "Bahkan jika mereka adalah sumber yang sama, hanya **Kekayaan yang Tepat** emosional yang dianggap sebagai posisi pasangan, sementara Sumber dibaca sebagai sifat aktivitas dan kekayaan. Oleh karena itu, Kekayaan yang Tepat dan Pejabat yang Tepat dihitung sebagai 2 poin, sementara Sumber dan Pejabat dihitung sebagai 1 poin, dan kedua arah dijumlahkan — jika keduanya dianggap sebagai posisi pasangan, itu adalah yang tertinggi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jika jenis kelamin tidak diungkapkan, hilangkan item ini",
        "blocks": [
          {
            "p": "Jika item yang tidak dapat diputuskan diatur ke 0 poin, itu menghasilkan skor yang tidak adil rendah. Berat yang tersisa setelah menghilangkan item dinormalisasi lagi [(item dan berat)](/guide/how-compatibility)."
          }
        ]
      },
      {
        "title": "Kami juga menunjukkan bentuk hubungan",
        "blocks": [
          {
            "p": "Selain skor, kami menjelaskan **bentuk apa** yang dimiliki pasangan dari batang hari di layar hasil. Apakah mereka berada di posisi yang sama, apakah satu sisi mendukung yang lain, atau apakah satu sisi ditekan — jika itu adalah hubungan yang mendukung atau menekan, kami menjelaskan sisi mana yang memegang posisi tersebut."
          },
          {
            "p": "Jika hanya satu skor yang disajikan, itu meninggalkan pertanyaan 'jadi apa'. Bentuk bukanlah skor tetapi sesuatu untuk dibaca, dan bahkan pasangan dengan skor rendah memiliki sesuatu untuk diinterpretasikan."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Lima elemen",
    "title": "Elemen Pendukung — Energi yang dibutuhkan sekarang",
    "summary": "Kami melihat lima elemen bukan sebagai 'apakah mereka memilih dua' tetapi sebagai 'apakah pasangan memiliki apa yang saya butuhkan'. Kami juga mengungkapkan nilai batas yang membedakan antara batang hari yang kuat dan yang lemah.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "Apakah lima elemen 'seimbang' bukanlah pertanyaan tentang kecocokan",
        "blocks": [
          {
            "p": "Ada metode untuk mengukur apakah lima energi terdistribusi secara merata dengan menggabungkan lima elemen kedua orang. Namun, pertanyaan tentang kecocokan bukanlah itu. **Apakah pasangan memiliki apa yang saya butuhkan?**"
          },
          {
            "p": "Derajat keseimbangan bersifat simetris, tetapi saling melengkapi secara inheren asimetris. Ini karena apa yang dibutuhkan A berbeda dari apa yang dibutuhkan B. Oleh karena itu, kami mengukur setiap sisi secara terpisah lalu merata-ratakannya — karena ini adalah rata-rata, total skor tetap simetris."
          }
        ]
      },
      {
        "title": "Elemen Pendukung — Kurangi jika berlebihan, tambahkan jika tidak cukup",
        "blocks": [
          {
            "p": "Elemen Pendukung (用神) adalah 'energi yang dibutuhkan orang ini saat ini'. Ada beberapa metode untuk menentukan ini (menekan, mendukung, penyakit, dan komunikasi), tetapi dapat diterjemahkan menjadi aturan, dan yang paling banyak digunakan adalah **menekan (抑扶)**. Jika batang hari kuat, dianggap bahwa energi untuk mengurangi diperlukan, dan jika lemah, energi untuk menambah diperlukan."
          },
          {
            "table": {
              "head": [
                "Penilaian",
                "Apa yang dibutuhkan",
                "Seberapa banyak"
              ],
              "rows": [
                [
                  "Batang hari kuat (身强)",
                  "Energi yang berkurang — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Tiga"
                ],
                [
                  "Batang hari lemah (身弱)",
                  "Energi yang ditambahkan — 印星 (in-seong) · 比劫 (bi-gyeob)",
                  "Dua"
                ],
                [
                  "Seimbang (中和)",
                  "Tidak dapat ditutupi oleh elemen pendukung, jadi itu adalah energi yang paling tipis",
                  "Dua"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Nilai ambang untuk kekuatan dan kelemahan",
        "blocks": [
          {
            "p": "Sisi batang hari adalah **印星 dan 比劫** — energi yang melahirkan saya dan energi yang seperti saya. Karena dua dari lima, jika energinya sepenuhnya seimbang, itu menjadi {evenAllyRatio}. Sebuah rentang ditetapkan di atas dan di bawah nilai tersebut."
          },
          {
            "table": {
              "caption": "Proporsi sekutu (印星 + 比劫) dalam total kekuatan",
              "head": [
                "Proporsi",
                "Penilaian"
              ],
              "rows": [
                [
                  "{strongThreshold} atau lebih",
                  "Batang hari kuat"
                ],
                [
                  "{weakThreshold} atau lebih dan kurang dari {strongThreshold}",
                  "Seimbang"
                ],
                [
                  "Kurang dari {weakThreshold}",
                  "Batang hari lemah"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Keseimbangan adalah 'penilaian yang kurang pasti'",
        "blocks": [
          {
            "p": "Keseimbangan berarti tidak dapat ditutupi oleh elemen pendukung. Pada saat ini, kami hanya melihat dua energi yang paling tipis sebagai yang diperlukan. Di layar hasil, itu dicatat sebagai 'saat ini dalam posisi tipis' daripada pernyataan definitif."
          }
        ]
      },
      {
        "title": "Kekuatan bukanlah jumlah karakter",
        "blocks": [
          {
            "p": "Saat menghitung kekuatan lima elemen, kami tidak hanya menghitung delapan karakter seperti yang muncul. Kami menggunakan nilai yang mencerminkan batang langit yang tersembunyi (地藏干) dalam cabang bumi dan musim energi bulan (月令) di mana seseorang dilahirkan."
          },
          {
            "p": "Jika kami hanya menghitung karakter permukaan, kami melewatkan fakta bahwa bahkan dua karakter dari 木 dapat memiliki kekuatan yang sama sekali berbeda tergantung pada musim. 木 musim semi dan 木 musim gugur, meskipun mereka adalah karakter yang sama, memiliki kekuatan yang berbeda."
          }
        ]
      },
      {
        "title": "Menilai derajat pengisian",
        "blocks": [
          {
            "p": "Kami melihat proporsi elemen pendukung saya dalam kekuatan pihak lain. Namun, kami tidak menggunakan proporsi itu secara langsung tetapi **membagi harapan dengan ukuran elemen pendukung.** Ketika kuat, elemen pendukung adalah tiga (harapan 60%), dan ketika lemah, itu adalah dua (harapan 40%), jadi menggunakan proporsi secara langsung akan berarti bahwa orang yang kuat selalu menerima skor yang lebih tinggi."
          },
          {
            "p": "Jika terisi hingga tingkat yang diharapkan, skor mendekati 78 poin diperoleh, dan jika terisi jauh lebih banyak, mencapai 100 poin, sementara jika sangat kurang, menuju 55 poin. Di sini juga, batas bawah tidak ditetapkan pada 0."
          }
        ]
      },
      {
        "title": "Ini adalah penilaian awal",
        "blocks": [
          {
            "p": "Analisis saju yang sebenarnya mempertimbangkan pembentukan dan iklim musiman (kehangatan dan kelembapan musim) untuk menentukan elemen pendukung, dan kesimpulan dapat bervariasi tergantung pada metode yang digunakan. Inyeon-Link hanya menggunakan elemen pendukung yang dapat diukur dengan **nilai kekuatan.** Ini karena prinsip hanya menggunakan apa yang dapat diterjemahkan menjadi aturan, sehingga input yang sama akan selalu menghasilkan jawaban yang sama."
          },
          {
            "p": "Sebaliknya, layar hasil juga menyajikan kekuatan dan kelemahan masing-masing orang bersama dengan energi yang saat ini dibutuhkan sebagai **bahan bacaan**. Ini untuk menghindari menyembunyikan dasar dari skor."
          }
        ]
      }
    ]
  },
  "guide/affinity": {
    "eyebrow": "Standar kami",
    "title": "Inyeon’s Match — Alasan tidak memberikan skor total",
    "summary": "Kami hanya mengambil data satu orang sambil membiarkan posisi pihak lain kosong dan menggantikan semua nilai yang mungkin ke dalam posisi itu. Kami menjelaskan alasan mengapa tidak melampirkan skor total pada tipe yang diperoleh dengan cara ini.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "Perhitungan dilakukan sambil membiarkan posisi pihak lain kosong",
        "blocks": [
          {
            "p": "Skor kecocokan dihitung dengan mencocokkan dua orang. **Inyeon’s Match** hanya mengambil data satu orang sambil membiarkan posisi pihak lain kosong dan menguji semua nilai yang mungkin yang dapat masuk ke posisi itu. Ini seperti menjalankan mesin kecocokan secara terbalik."
          },
          {
            "p": "Oleh karena itu, tidak perlu mengetahui tanggal lahir pihak lain. Kami masih bisa mengatakan, 'Tipe profil kecocokan seperti apa yang cocok untuk saya?' tentang seseorang yang belum kami temui."
          }
        ]
      },
      {
        "title": "Kami tidak menjalankan jutaan kombinasi",
        "blocks": [
          {
            "p": "Skor kecocokan dalam saju terdiri dari empat item, dan **setiap item tidak tumpang tindih dalam apa yang diperiksanya.**"
          },
          {
            "table": {
              "head": [
                "Item",
                "Apa sumbu pemeriksaan",
                "Jumlah kasus"
              ],
              "rows": [
                [
                  "Hubungan batang hari · Sifat pasangan",
                  "Batang hari kedua orang — batang langit",
                  "10"
                ],
                [
                  "Pelengkap lima elemen",
                  "Elemen pendukung saya dan kekuatan lima elemen pihak lain",
                  "5"
                ],
                [
                  "Hubungan cabang hari",
                  "cabang hari kedua orang",
                  "12"
                ],
                [
                  "Hubungan zodiak",
                  "cabang tahun kedua orang",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Karena nilai tidak bertukar antara item, **menemukan titik tertinggi untuk setiap cabang akan menjadi titik tertinggi keseluruhan.** Tidak perlu memeriksa semua kombinasi tanggal lahir — hanya menetapkan sepuluh batang langit, dua belas cabang bumi, dan lima elemen sudah cukup."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Aturan yang sama berlaku",
        "blocks": [
          {
            "p": "Skor yang ditulis di sini diambil langsung dari mesin kecocokan. Karena tidak ada aturan baru yang dibuat, tipe yang muncul di sini juga akan memiliki skor tertinggi untuk item itu dalam kecocokan yang sebenarnya. Jika aturan kecocokan diubah, layar ini akan mengikuti."
          }
        ]
      },
      {
        "title": "Tidak ada skor total yang diberikan",
        "blocks": [
          {
            "p": "Ini adalah keputusan terpenting di layar ini. Mengumpulkan skor tertinggi untuk setiap cabang mungkin tampak menghasilkan 'kecocokan sempurna', tetapi orang itu mungkin **tidak benar-benar ada.**"
          },
          {
            "p": "Pada orang nyata, batang hari dan lima elemen tidak beroperasi secara terpisah. Seseorang dengan 甲木 biasanya juga memiliki energi 木 yang kuat. Metode menghitung cabang secara terpisah mengabaikan korelasi itu, sehingga nilai yang diperoleh dengan menghubungkan skor tertinggi untuk setiap cabang menjadi kombinasi yang tidak ada dalam kenyataan."
          },
          {
            "p": "Oleh karena itu, layar hanya menampilkan **skor item** dan tidak memberikan skor total. Skor total akan dihitung dengan menerima tanggal lahir orang lain untuk [kecocokan saju](/compatibility)."
          }
        ]
      },
      {
        "title": "Cara membaca 'tipe kecocokan'",
        "blocks": [
          {
            "p": "Hasilnya berarti 'jika Anda bertemu dengan orang bertipe ini, item ini akan mendapatkan skor tinggi'. Ini bukan kriteria untuk memilih seseorang, tetapi lebih merupakan cara untuk membacanya dari satu perspektif pemahaman diri."
          },
          {
            "p": "Alasan mengapa tipe tertentu mendapatkan skor tinggi juga dicatat item demi item — apakah batang hari berada dalam posisi yang menguntungkan, atau apakah orang itu memiliki energi yang saya butuhkan saat ini."
          }
        ]
      },
      {
        "title": "Alat konfirmasi",
        "blocks": [
          {
            "p": "Anda mungkin penasaran apakah orang yang Anda pikirkan sesuai dengan tipe itu. Dengan memasukkan tanggal lahir mereka ke dalam alat konfirmasi di layar hasil, Anda akan diberitahu tentang batang hari, cabang hari, dan cabang tahun mereka. Nilai input tidak disimpan pada saat ini [(tidak disimpan)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Waktu",
    "title": "Waktu Lahir Setiap Orang Dikoreksi Secara Terpisah",
    "summary": "Kecocokan menghitung waktu dua orang secara terpisah. Halaman ini menjelaskan bagaimana koreksi diterapkan ketika tempat lahir dan zaman mereka berbeda, dan apa yang berubah bila hanya salah satu dari mereka yang tidak tahu waktunya.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Jam dan matahari tidak selaras",
        "blocks": [
          {
            "p": "Dalam saju, waktu lahir dibaca dari posisi matahari, bukan dari jam. Namun seluruh negara memakai satu waktu standar, sehingga jam dan matahari di suatu tempat bergeser dari satu sama lain."
          },
          {
            "p": "Waktu standar Korea berdasarkan 135°BT, sedangkan Seoul berada sekitar 127°BT. Matahari Seoul mencapai titik tertingginya lebih lambat dari yang ditunjukkan jam, sekitar **32 menit**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 menit dapat menggeser pilar jam satu langkah",
        "blocks": [
          {
            "p": "Orang yang lahir di Seoul pukul 11:40 menurut jam lahir pada pukul 11:08 menurut waktu matahari sejati, yang masih di dalam jam Kuda (午, 11:00–13:00). Yang lahir pukul 11:20 menurut jam lahir pukul 10:48, yang jatuh pada jam Ular (巳, 9:00–11:00). Koreksi ada untuk orang yang berada tepat di batas seperti ini."
          }
        ]
      },
      {
        "title": "Koreksi diterapkan pada setiap orang secara terpisah",
        "blocks": [
          {
            "p": "Kecocokan menyusun bagan setiap orang sendiri-sendiri. Itulah sebabnya layar input menanyakan tempat lahir **untuk setiap orang**. Jika satu orang lahir di Seoul dan yang lain di luar negeri, waktu mereka dikoreksi terpisah dengan bujur dan zona waktu yang berbeda."
          },
          {
            "p": "Daftar kota saat ini memuat {cityCount} tempat. Untuk negara yang bujurnya sangat bervariasi, kota dipecah, karena **bujur 15° menggeser pilar jam satu langkah**."
          },
          {
            "p": "Jika tidak memilih, Seoul dipakai. Jika hanya satu orang lahir di luar negeri dan keduanya dibiarkan di Seoul, hanya pilar jam orang yang lahir di luar negeri yang meleset; nilai orang lainnya tidak terpengaruh, karena koreksi diterapkan per orang."
          }
        ]
      },
      {
        "title": "Zaman berbeda memakai waktu standar berbeda",
        "blocks": [
          {
            "p": "Dua orang dengan usia berbeda hidup di bawah waktu standar dari periode yang berbeda. Karena itu, selisih bujur saja tidak cukup."
          },
          {
            "ul": [
              "**Sebelum 1912** — Korea tidak memiliki waktu standar yang seragam (waktu rata-rata lokal).",
              "**1954–1961** — waktu standar adalah UTC+8:30.",
              "**1948–51 · 1955–60 · 1987–88** — waktu musim panas berlaku."
            ]
          },
          {
            "p": "Inyeon-Link tidak menetapkan meridian standar secara tetap. Ia mencari **zona waktu IANA** tempat lahir untuk menemukan waktu standar yang benar-benar berlaku saat itu, sehingga zaman masing-masing orang diterapkan meskipun tahun lahir mereka berbeda."
          }
        ]
      },
      {
        "title": "Tepat setelah tengah malam, batang hari berganti",
        "blocks": [
          {
            "p": "Koreksinya −32 menit, sehingga orang yang lahir antara 00:00 dan 00:32 menurut jam lahir pada **jam 23:00 hari sebelumnya** menurut waktu matahari sejati. Tanggalnya ikut dimundurkan."
          },
          {
            "p": "Dalam kecocokan ini sangat penting. Ketika pilar hari mundur satu hari, batang hari dan cabang hari sama-sama berubah, sehingga hubungan batang hari, Bintang Pasangan, dan hubungan cabang hari semuanya dihitung ulang dengan karakter yang berbeda, dan kekuatan lima elemen ikut bergeser."
          }
        ]
      },
      {
        "title": "Tidak masalah jika hanya satu orang yang tidak tahu waktunya",
        "blocks": [
          {
            "p": "Waktu lahir bersifat opsional, dan kecocokan tetap dihitung jika hanya salah satu dari keduanya yang tidak tahu. Hanya orang yang tidak tahu yang dihitung tanpa pilar jam, dan layar hasil mengatakannya. Nilai orang lainnya tetap seperti semula."
          },
          {
            "p": "Dari keempat item kecocokan, tidak ada yang memakai pilar jam secara langsung, tetapi pilar jam memengaruhi kekuatan lima elemen, jadi lebih akurat bila Anda mengisinya jika tahu. Kecocokan zodiak memberi nilai yang sama dengan atau tanpa waktu — [ia hanya melihat cabang tahun](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Privasi",
    "title": "Bagaimana Kami Menghindari Penyimpanan Data Dua Orang",
    "summary": "Kecocokan juga meminta Anda memasukkan tanggal lahir orang lain. Halaman ini menjelaskan secara teknis apa artinya bahwa input kedua orang tidak direkam di mana pun, dan apa yang ikut dalam tautan hasil.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Anda memasukkan informasi orang lain",
        "blocks": [
          {
            "p": "Layar kecocokan menerima tanggal lahir Anda dan tanggal lahir orang lain sekaligus. Tanggal lahir orang lain adalah informasi pribadinya, jadi kami menjelaskan secara terpisah bagaimana Inyeon-Link menangani keduanya."
          },
          {
            "p": "Tidak ada akun, dan kami tidak meminta nama, alamat email, atau nomor telepon. Kami hanya menerima dua tanggal lahir dan, secara opsional, waktu lahir, tempat lahir, dan jenis kelamin, dan tidak ada yang tersisa setelah perhitungan selesai."
          },
          {
            "p": "Ada kolom untuk nama tampilan yang ditunjukkan di layar hasil, tetapi hanya untuk tampilan dan tidak dipakai dalam perhitungan. Anda tidak perlu memasukkan nama asli."
          }
        ]
      },
      {
        "title": "Tautan hasil memuat kedua tanggal lahir",
        "blocks": [
          {
            "p": "Setelah perhitungan selesai, alamatnya terlihat seperti ini."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Bagian setelah **#** memuat input kedua orang. Bagian ini disebut fragmen, dan menurut perilaku standar web **peramban tidak mengirimkannya ke server**. Ia dirancang untuk menunjuk posisi di dalam dokumen, sehingga server tidak pernah melihatnya."
          },
          {
            "p": "Saat Anda membuka tautan hasil, peramban membaca nilai itu dan meminta perhitungan; server menerima nilai yang dibutuhkan, mengembalikan jawabannya, dan melupakannya."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sebelum Anda mengirim tautan ke orang lain",
        "blocks": [
          {
            "p": "Tidak disimpan di server tidak sama dengan tautan yang rahasia. Siapa pun yang menerima tautan dapat melihat kedua tanggal lahir apa adanya, dan tautan yang ditinggalkan di ruang obrolan tetap berada di ruang obrolan itu terlepas dari server kami. Mohon kirim dengan mengingat bahwa tautan itu memuat data orang lain."
          }
        ]
      },
      {
        "title": "Mengapa tidak ada yang tersisa meskipun perhitungan berjalan di server",
        "blocks": [
          {
            "p": "Untuk menyusun bagan saju kami membutuhkan tabel almanak, yang terlalu besar untuk dikirim ke peramban, sehingga perhitungan berjalan di server. Tetapi **setelah permintaan selesai ditangani, nilai-nilai itu tidak dipakai di tempat lain.** Tidak ada kode yang menuliskannya ke basis data."
          },
          {
            "p": "Satu-satunya catatan yang tersisa adalah penghitung yang mencegah satu orang mengirim terlalu banyak permintaan dalam waktu singkat. Ia tidak memuat tanggal lahir dan tidak menyimpan alamat IP apa adanya; ia menghitung satu nilai yang di-hash bersama tanggal, dan nilai itu berubah saat hari berganti."
          }
        ]
      },
      {
        "title": "Apa yang kami korbankan dengan tidak menyimpan",
        "blocks": [
          {
            "p": "Karena tidak ada yang disimpan, ada beberapa hal yang kami korbankan."
          },
          {
            "ul": [
              "**Anda tidak dapat mengambil kembali hasil kecocokan sebelumnya.** Anda perlu menyimpan tautannya untuk melihatnya lagi.",
              "**Dua orang yang sama dihitung ulang setiap kali.** Tidak ada cache. Tetapi setiap aturan bersifat deterministik, jadi [input yang sama selalu memberi nilai yang sama](/guide/how-compatibility).",
              "**Memuat ulang halaman memunculkan kembali gerbang iklan.** Tidak ada tempat untuk menyimpan catatan bahwa Anda sudah menontonnya."
            ]
          }
        ]
      },
      {
        "title": "Jika Anda membeli laporan",
        "blocks": [
          {
            "p": "Jika Anda membeli laporan, catatan transaksi disimpan pada saat itu: catatan pembayaran memiliki masa penyimpanan yang diwajibkan hukum, dan tanpa riwayat pesanan pengembalian dana tidak dapat diproses. Meski begitu, **kedua tanggal lahir tidak dilampirkan pada pesanan**; keduanya ditanyakan lagi saat PDF dibuat setelah pembayaran dikonfirmasi, dan dipakai hanya pada saat itu."
          },
          {
            "p": "Rinciannya ada di [kebijakan privasi](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produk Berbayar",
    "title": "Apa yang termasuk dalam laporan berbayar?",
    "summary": "Ini menjelaskan apa yang telah ditambahkan ke PDF sambil menjaga layar tetap tidak berubah, item demi item. Nilai dan konten dibaca dari pengaturan produk yang sebenarnya.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Layar tetap tidak berubah, hanya ditambahkan ke PDF",
        "blocks": [
          {
            "p": "Perhitungan kecocokan dan permintaan hasil adalah **gratis**. Tingkat kecocokan, skor dan bobot item, bagan saju asli dari kedua individu, dan bentuk hubungan semuanya dapat dilihat di layar. Tidak ada yang dihapus dari layar saat membuat laporan berbayar."
          },
          {
            "p": "Tujuan laporan adalah untuk **menambahkan lapisan yang tidak ada di layar**. Dan lapisan itu tidak dibuat; itu terdiri dari nilai yang sudah dihitung selama proses penilaian tetapi tidak digunakan di layar."
          }
        ]
      },
      {
        "title": "Laporan Kecocokan Saju PDF — {priceGunghapDomestic}",
        "slot": "gunghapContents",
        "blocks": [
          {
            "p": "Pembayaran domestik {priceGunghapDomestic} (termasuk PPN), pembayaran internasional {priceGunghapGlobal}. A4 {pagesGunghap} halaman."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "**Halaman 1-3 diorganisir untuk menjaga apa yang ada di layar** dan **dari halaman 4 seterusnya adalah konten yang tidak ada di layar**. Di bawah ini, dijelaskan mengapa hal-hal tertentu tidak ditampilkan di layar."
          }
        ]
      },
      {
        "title": "Halaman 4 — Arah dari dua energi",
        "blocks": [
          {
            "p": "Item dari lima elemen yang ada di layar disajikan sebagai satu skor tunggal. Namun, skor tunggal itu adalah **rata-rata dari dua arah** — mengukur seberapa banyak yang lain mengisi saya dan seberapa banyak saya mengisi yang lain, dan merata-rata nilai-nilai tersebut."
          },
          {
            "p": "Komplementaritas secara inheren **asimetris**. Ini karena energi yang dibutuhkan oleh saya dan energi yang dibutuhkan oleh yang lain berbeda. Jika Anda hanya melihat rata-rata, sebuah hubungan di mana satu sisi mengisi yang lain secara signifikan dan sebuah hubungan di mana keduanya saling mengisi dengan merata akan muncul sebagai angka yang sama. Laporan memisahkan kedua hal tersebut."
          },
          {
            "p": "Juga termasuk dalam bagian yang sama adalah **tabel hubungan dari empat pilar**. Satu-satunya yang masuk ke dalam tingkat kecocokan adalah cabang hari (日支) — karena itu adalah posisi pasangan — tetapi cabang tahun, bulan, dan jam lainnya juga dapat dibaca dengan tabel hubungan yang sama."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Skor dalam tabel ini tidak masuk ke dalam tingkat kecocokan",
        "blocks": [
          {
            "p": "Jika dimasukkan, total skor akan berubah dan tidak akan cocok dengan tautan hasil yang sudah dikirim. Oleh karena itu, ini hanya disertakan sebagai bahan bacaan, dan fakta itu dicatat di bawah tabel."
          }
        ]
      },
      {
        "title": "Halaman 5 — Melihat lebih dekat saju masing-masing orang",
        "blocks": [
          {
            "p": "Balok dari lima elemen di layar menunjukkan **seberapa banyak yang ada**. Laporan menambahkan **apakah bulan kelahiran mendukung energi tersebut**. Bahkan dengan jumlah yang sama, energi yang kuat (旺) dan energi yang mati (死) memiliki kekuatan yang berbeda."
          },
          {
            "p": "Anda dapat melihat kekuatan sebelum dan setelah dikalikan dengan energi bulan berdampingan, menunjukkan seberapa banyak musim telah mendorongnya. **Rasio sekutu** yang membedakan antara batang hari yang kuat dan batang hari yang lemah juga dicatat — layar hanya menunjukkan penilaian, tetapi laporan menunjukkan di mana penilaian itu dibuat."
          }
        ]
      },
      {
        "title": "Halaman 6 — Apa arti empat pilar orang lain bagi saya",
        "blocks": [
          {
            "p": "Tingkat kecocokan hanya membandingkan **batang hari** dari kedua individu. Namun, tiga pilar lainnya dari orang lain juga ditentukan oleh Sepuluh Dewa menggunakan aturan yang sama. Sementara Anda dapat memahami **apa arti orang ini bagi saya** hanya dengan melihat batang hari, Anda tidak dapat mengetahui **apa posisi orang itu berarti bagi saya**."
          },
          {
            "p": "Karena ada arah, kedua sisi disajikan secara terpisah. Apa yang saya lihat dan apa yang dilihat oleh yang lain berbeda."
          }
        ]
      },
      {
        "title": "Halaman 7 — Bagaimana saju ini dihitung",
        "blocks": [
          {
            "p": "Ini menyatakan seberapa banyak waktu kelahiran disesuaikan dengan waktu matahari sejati, apakah koreksi menyebabkan tanggal berubah, dan apa tanggal solar dan lunar ketika saju dihasilkan. Konsep ini dijelaskan dalam dokumen [Menyesuaikan waktu kelahiran dengan waktu matahari sejati](/guide/true-solar-time), tetapi **nilai berapa menit yang disesuaikan dalam kasus Anda** bervariasi dari orang ke orang, jadi itu hanya disertakan dalam laporan."
          }
        ]
      },
      {
        "title": "Laporan profil kecocokan Inyeon PDF — {priceAffinityDomestic}",
        "slot": "affinityContents",
        "blocks": [
          {
            "p": "Pembayaran domestik {priceAffinityDomestic} (termasuk PPN), pembayaran internasional {priceAffinityGlobal}. A4 {pagesAffinity} halaman."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Bagian ini adalah **tabel peringkat keseluruhan**. Layar hanya menunjukkan set yang cocok dengan baik, tetapi laporan memberi peringkat semua sepuluh batang langit dan dua belas cabang bumi **secara lengkap**. Jika Anda hanya melihat set teratas, Anda tidak akan tahu 'siapa yang berikutnya' dan 'mana yang paling tidak cocok'."
          }
        ]
      },
      {
        "title": "Hal-hal yang perlu diketahui sebelum membeli",
        "blocks": [
          {
            "p": "**Server tidak menyimpan file.** Setelah pembayaran disetujui, dokumen dihasilkan dan dikirim segera, tanpa meninggalkan apa pun di server. Prinsip layanan ini untuk tidak menyimpan nilai input tetap dipertahankan bahkan dalam alur berbayar."
          },
          {
            "p": "Jadi, **silakan simpan file segera setelah pembayaran.** Anda dapat menerima pesanan yang sama hingga lima kali, tetapi jika Anda meninggalkan layar hasil dan nilai input menghilang, Anda tidak dapat membuatnya kembali."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Laporan juga merupakan bahan referensi",
        "blocks": [
          {
            "p": "Hanya karena panjangnya meningkat tidak berarti kesimpulan lebih pasti. Apa yang lebih banyak terkandung dalam laporan adalah **dasar dari perhitungan yang sama**, bukan pernyataan yang lebih kuat. Pembacaan takdir adalah bidang di mana kesimpulan dapat bervariasi tergantung pada praktisi, dan layanan ini hanya menghitung apa yang dapat diterjemahkan ke dalam aturan."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Pemberitahuan",
    "title": "Pengumuman",
    "summary": "Ini adalah tempat untuk menginformasikan perubahan yang mempengaruhi penggunaan.",
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
            "p": "Silakan kirim pertanyaan ke **{email}**. Kami akan merespons dalam waktu 2 hari kerja. Untuk pertanyaan tentang pembayaran dan pengembalian dana, harap sertakan **nomor pesanan atau email yang digunakan untuk pembayaran** untuk konfirmasi yang lebih cepat."
          },
          {
            "p": "Pertanyaan melalui telepon dapat dilakukan di {customerCenter}."
          }
        ]
      },
      {
        "title": "Apa yang dapat dikirim ke saluran ini?",
        "blocks": [
          {
            "ul": [
              "**Pembayaran dan Pengembalian Dana** — Jika dokumen tidak dibuat atau jumlah pembayaran berbeda dari pesanan, pengembalian dana penuh akan diberikan. Syaratnya ada dalam [kebijakan pengembalian](/refund-policy).",
              "**Informasi Pribadi** — Kami menerima permintaan untuk melihat, memperbaiki, dan menghapus. Kebijakan pemrosesan ada dalam [kebijakan privasi](/privacy).",
              "**Laporan Kesalahan Perhitungan** — Jika bagan asli saju atau skor tampak aneh, harap beri tahu kami. Jika Anda menyertakan kapan Anda memasukkan tanggal dan waktu, kami dapat menghitung ulang dengan nilai yang sama."
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
              "**Nomor Registrasi Bisnis Pesanan Melalui Pos** — {mailOrderNumber}",
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
            "p": "Anda tidak perlu menyertakan tanggal dan waktu kelahiran Anda dalam email pertanyaan. Kami tidak menyimpan input, jadi kami tidak dapat mengambilnya, dan nomor pesanan sudah cukup untuk konfirmasi. Harap hanya sertakan jika itu diperlukan untuk laporan kesalahan perhitungan."
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
  "intro": "Perubahan pada syarat penggunaan Anda — harga, kebijakan — diposting di sini sebelum mulai berlaku. Perbaikan internal tidak dicantumkan: apa yang muncul di sini adalah yang perlu Anda ketahui.",
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
        "Pertanyaan, pengembalian dana, permintaan privasi, dan laporan kesalahan perhitungan sekarang memiliki satu tempat untuk dituju — lihat halaman kontak di footer.",
        "Jika sesuatu terlihat salah perhitungan, harap sertakan detail kelahiran yang memproduksinya. Kami tidak menyimpan apa yang Anda masukkan, jadi tanpa itu kami tidak dapat mereproduksi pembacaan."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Laporan diterbitkan dalam bahasa Inggris untuk Arab dan Khmer",
      "body": [
        "Jika Anda membaca dalam bahasa Arab atau Khmer, laporan PDF yang Anda beli diproduksi dalam bahasa Inggris. Alat yang menyusun dokumen kami belum dapat mengatur paragraf dalam skrip tersebut.",
        "Layar tetap dalam bahasa Anda, dan nama Anda dicetak dalam skrip Anda sendiri di dalam laporan.",
        "Catatan yang sama muncul sebelum pembayaran. Ketika alat mendukung skrip ini, kami akan menyebutkannya di sini."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Setiap pembacaan membawa versi aturan yang digunakan",
      "body": [
        "Setiap pembacaan dan laporan membawa set aturan yang digunakan untuk memproduksinya (misalnya inyeonlink-match-v10). Input yang sama pada set aturan yang sama selalu memberikan angka yang sama.",
        "Jika kami mengubah aturan interpretasi dengan cara yang dapat mengubah skor, kami mempostingnya di sini terlebih dahulu, dengan tanggal mulai berlakunya — karena tautan hasil yang sudah Anda miliki akan terbaca berbeda.",
        "Set aturan saat ini adalah v10. Pembayaran belum dibuka."
      ]
    }
  }
} satisfies NoticeCopy;
