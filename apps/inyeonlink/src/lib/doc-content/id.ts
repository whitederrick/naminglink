import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Bahasa Indonesia — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const ID_DOCS = {
  "about": {
    "eyebrow": "Tentang",
    "title": "Tentang Inyeon-Link",
    "summary": "Kami membandingkan dua grafik kelahiran dalam tradisi Saju Korea. Berikut adalah apa yang kami hitung, dan apa yang kami tolak untuk klaim.",
    "backLabel": "Beranda",
    "sections": [
      {
        "title": "Apa yang kami lakukan",
        "blocks": [
          {
            "p": "Inyeon-Link membangun dua grafik kelahiran dari tanggal dan waktu kelahiran dan menunjukkan **bagaimana dua set energi bertemu.** Anda juga dapat membaca grafik Anda sendiri secara terpisah dan melihat temperamen mana yang cenderung cocok untuk Anda."
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
            "p": "Grafik dibangun dari **almanak lunisolar Korea**, dan waktu kelahiran dikoreksi ke **waktu matahari yang sebenarnya** untuk tempat kelahiran — waktu jam yang sama berarti posisi matahari yang berbeda tergantung di mana Anda dilahirkan."
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
    "summary": "Inyeon-Link mengungkapkan semua aturan yang digunakannya. Anda dapat memeriksa item dan bobotnya, skor dari tabel hubungan cabang bumi, dan nilai ambang yang membedakan antara seorang penguasa hari yang kuat dan seorang penguasa hari yang lemah — Anda dapat melihat dari mana angka di layar berasal.",
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
            "p": "Tingkat kecocokan berasal dari dua cabang. **Kecocokan saju** melihat seluruh grafik saju asli dari kedua individu, sementara **kecocokan zodiak** hanya mempertimbangkan satu cabang bumi dari tahun kelahiran. Nilai akhir diperoleh dengan rata-rata berbobot dari keduanya."
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
                  "Penguasa hari, cabang hari, dan lima elemen — empat item",
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
              "dayNote": "Saya · Istana Pasangan",
              "hour": "Pilar Jam",
              "hourNote": "Tahun-Tahun Selanjutnya · Penggunaan",
              "stem": "Batang Langit",
              "stemNote": "Batang Hari = Saya",
              "branch": "Cabang Bumi",
              "branchNote": "Cabang Hari = Istana Pasangan"
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
                  "Apakah cabang hari (日支) kedua orang tersebut merupakan kombinasi atau bentrokan?",
                  "{weightDayBranch}"
                ]
              ]
            }
          },
          {
            "p": "Cabang hari dibaca karena tradisi menganggapnya sebagai **istana pasangan**. Dari empat pilar, ini adalah yang menunjuk pada pasangan, yang menjadikannya tempat pertama yang dilihat untuk kompatibilitas."
          }
        ]
      },
      {
        "title": "Jika jenis kelamin tidak diungkapkan, elemen pasangan dihilangkan",
        "blocks": [
          {
            "p": "Elemen pasangan memerlukan pengetahuan tentang jenis kelamin untuk perhitungan. Tradisi membaca posisi yang menunjuk pada pasangan berbeda tergantung pada jenis kelamin. Jika tidak diungkapkan, item ini akan **dikecualikan** dan bobot dari tiga item yang tersisa akan dinormalisasi ulang."
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
            "p": "Waktu lahir digunakan untuk menentukan pilar jam. Jika tidak diketahui, perhitungan akan dilakukan tanpa pilar jam, dan fakta ini akan ditunjukkan di layar hasil. Karena tidak ada input langsung untuk pilar jam di antara empat item kompatibilitas, nilai tidak akan berfluktuasi secara signifikan, tetapi itu mempengaruhi keseimbangan lima elemen."
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
            "p": "Perhitungan kecocokan zodiak sangat sederhana. Ini membandingkan cabang tahun dari dua orang untuk menentukan apakah hubungan tersebut harmonis, mengalami konflik, atau ketidakcocokan yang tenang, dan menggunakan skor itu apa adanya. Karena hanya ada satu item, tidak perlu mendistribusikan bobot."
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
              "**Ini adalah item yang paling mudah dipahami secara intuitif**. Bahkan tanpa mengetahui kosakata tradisi, 'harimau dan monyet bertentangan' masuk akal.",
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
            "p": "Ini adalah item pertama dalam kompatibilitas. Setelah ditentukan bagaimana batang hari A memahami batang hari B, persepsi B terhadap A juga ditentukan, sehingga **hanya ada enam kemungkinan**."
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
            "p": "Ada metode untuk melihat hubungan batang hari dengan tiga elemen (generasi timbal balik, kesamaan, saling mengatasi). Ini sederhana, tetapi **yin dan yang menghilang.** 甲 (kayunya yang) dan 乙 (kayunya yin) menjadi 'kesamaan' yang sama seperti 甲 dan 甲, dan saling mengatasi dihancurkan menjadi satu skor tanpa arah atau yin dan yang."
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
            "p": "Bahkan jika mereka adalah sumber yang sama, hanya **Proper Wealth** emosional yang dianggap sebagai posisi pasangan, sementara Resource dibaca sebagai sifat aktivitas dan kekayaan. Oleh karena itu, Proper Wealth dan Proper Officer dihitung sebagai 2 poin, sementara Resource dan Officer dihitung sebagai 1 poin, dan kedua arah dijumlahkan — jika keduanya dianggap sebagai posisi pasangan, itu adalah yang tertinggi."
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
            "p": "Selain skor, kami menjelaskan **bentuk apa** yang dimiliki pasangan dari day stems di layar hasil. Apakah mereka berada di posisi yang sama, apakah satu sisi mendukung yang lain, atau apakah satu sisi ditekan — jika itu adalah hubungan yang mendukung atau menekan, kami menjelaskan sisi mana yang memegang posisi tersebut."
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
    "summary": "Kami melihat lima elemen bukan sebagai 'apakah mereka memilih dua' tetapi sebagai 'apakah pasangan memiliki apa yang saya butuhkan'. Kami juga mengungkapkan nilai batas yang membedakan antara day master yang kuat dan yang lemah.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "Apakah lima elemen 'seimbang' bukanlah pertanyaan tentang kompatibilitas",
        "blocks": [
          {
            "p": "Ada metode untuk mengukur apakah lima energi terdistribusi secara merata dengan menggabungkan lima elemen kedua orang. Namun, pertanyaan tentang kompatibilitas bukanlah itu. **Apakah pasangan memiliki apa yang saya butuhkan?**"
          },
          {
            "p": "Derajat keseimbangan bersifat simetris, tetapi saling melengkapi secara inheren asimetris. Ini karena apa yang dibutuhkan A berbeda dari apa yang dibutuhkan B. Oleh karena itu, kami mengukur setiap sisi secara terpisah dan merata — karena ini adalah rata-rata, total skor tetap simetris."
          }
        ]
      },
      {
        "title": "Elemen Pendukung — Kurangi jika berlebihan, tambahkan jika tidak cukup",
        "blocks": [
          {
            "p": "Elemen Pendukung (用神) adalah 'energi yang dibutuhkan orang ini saat ini'. Ada beberapa metode untuk menentukan ini (menekan, mendukung, penyakit, dan komunikasi), tetapi dapat diterjemahkan menjadi aturan, dan yang paling banyak digunakan adalah **menekan (抑扶)**. Jika day master kuat, dianggap bahwa energi untuk mengurangi diperlukan, dan jika lemah, energi untuk menambah diperlukan."
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
                  "Day master kuat (身强)",
                  "Energi yang berkurang — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Tiga"
                ],
                [
                  "Day master lemah (身弱)",
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
            "p": "Sisi day stem adalah **印星 dan 比劫** — energi yang melahirkan saya dan energi yang seperti saya. Karena dua dari lima, jika energinya sepenuhnya seimbang, itu menjadi {evenAllyRatio}. Sebuah rentang ditetapkan di atas dan di bawah nilai tersebut."
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
                  "Day master kuat"
                ],
                [
                  "{weakThreshold} atau lebih dan kurang dari {strongThreshold}",
                  "Seimbang"
                ],
                [
                  "Kurang dari {weakThreshold}",
                  "Day master lemah"
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
            "p": "Saat menghitung kekuatan lima elemen, kami tidak hanya menghitung delapan karakter seperti yang muncul. Kami menggunakan nilai yang mencerminkan heavenly stems yang tersembunyi (地藏干) dalam earthly branches dan musim energi bulan (月令) di mana seseorang dilahirkan."
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
            "p": "Kami melihat proporsi elemen pendukung saya dalam kekuatan lawan. Namun, kami tidak menggunakan proporsi itu secara langsung tetapi **membagi harapan dengan ukuran elemen pendukung.** Ketika kuat, elemen pendukung adalah tiga (harapan 60%), dan ketika lemah, itu adalah dua (harapan 40%), jadi menggunakan proporsi secara langsung akan berarti bahwa orang yang kuat selalu menerima skor yang lebih tinggi."
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
    "summary": "Kami hanya mengambil data satu orang sambil membiarkan posisi lawan kosong dan menggantikan semua nilai yang mungkin ke dalam posisi itu. Kami menjelaskan alasan mengapa tidak melampirkan skor total pada tipe yang diperoleh dengan cara ini.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "Perhitungan dilakukan sambil membiarkan posisi lawan kosong",
        "blocks": [
          {
            "p": "Skor kompatibilitas dihitung dengan mencocokkan dua orang. **Inyeon’s Match** hanya mengambil data satu orang sambil membiarkan posisi lawan kosong dan menguji semua nilai yang mungkin yang dapat masuk ke posisi itu. Ini seperti menjalankan mesin kompatibilitas secara terbalik."
          },
          {
            "p": "Oleh karena itu, tidak perlu mengetahui tanggal lahir lawan. Kami masih bisa mengatakan, 'Tipe profil kecocokan seperti apa yang cocok untuk saya?' tentang seseorang yang belum kami temui."
          }
        ]
      },
      {
        "title": "Kami tidak menjalankan jutaan kombinasi",
        "blocks": [
          {
            "p": "Skor kompatibilitas dalam saju terdiri dari empat item, dan **setiap item tidak tumpang tindih dalam apa yang diperiksanya.**"
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
                  "Elemen pendukung saya dan kekuatan lima elemen lawan",
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
            "p": "Skor yang ditulis di sini diambil langsung dari mesin kompatibilitas. Karena tidak ada aturan baru yang dibuat, tipe yang muncul di sini juga akan memiliki skor tertinggi untuk item itu dalam kompatibilitas yang sebenarnya. Jika aturan kompatibilitas diubah, layar ini akan mengikuti."
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
            "p": "Pada orang nyata, master hari dan lima elemen tidak beroperasi secara terpisah. Seseorang dengan 甲木 biasanya juga memiliki energi 木 yang kuat. Metode menghitung cabang secara terpisah mengabaikan korelasi itu, sehingga nilai yang diperoleh dengan menghubungkan skor tertinggi untuk setiap cabang menjadi kombinasi yang tidak ada dalam kenyataan."
          },
          {
            "p": "Oleh karena itu, layar hanya menampilkan **skor item** dan tidak memberikan skor total. Skor total akan dihitung dengan menerima tanggal lahir orang lain untuk [saju compatibility](/compatibility)."
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
            "p": "Alasan mengapa tipe tertentu mendapatkan skor tinggi juga dicatat item demi item — apakah master hari berada dalam posisi yang menguntungkan, atau apakah orang itu memiliki energi yang saya butuhkan saat ini."
          }
        ]
      },
      {
        "title": "Alat konfirmasi",
        "blocks": [
          {
            "p": "Anda mungkin penasaran apakah orang yang Anda pikirkan sesuai dengan tipe itu. Dengan memasukkan tanggal lahir mereka ke dalam alat konfirmasi di layar hasil, Anda akan diberitahu tentang master hari, cabang hari, dan cabang tahun mereka. Nilai input tidak disimpan pada saat ini [(tidak disimpan)](/guide/no-storage)."
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
            "p": "Perhitungan kompatibilitas dan permintaan hasil adalah **gratis**. Tingkat kecocokan, skor dan bobot item, grafik saju asli dari kedua individu, dan bentuk hubungan semuanya dapat dilihat di layar. Tidak ada yang dihapus dari layar saat membuat laporan berbayar."
          },
          {
            "p": "Tujuan laporan adalah untuk **menambahkan lapisan yang tidak ada di layar**. Dan lapisan itu tidak dibuat; itu terdiri dari nilai yang sudah dihitung selama proses penilaian tetapi tidak digunakan di layar."
          }
        ]
      },
      {
        "title": "Laporan Kompatibilitas Saju PDF — {priceGunghapDomestic}",
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
            "p": "Juga termasuk dalam bagian yang sama adalah **grafik hubungan dari empat pilar**. Satu-satunya yang masuk ke dalam tingkat kecocokan adalah cabang hari (日支) — karena itu adalah posisi pasangan — tetapi cabang tahun, bulan, dan jam lainnya juga dapat dibaca dengan grafik hubungan yang sama."
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
            "p": "Balk dari lima elemen di layar menunjukkan **seberapa banyak yang ada**. Laporan menambahkan **apakah bulan kelahiran mendukung energi tersebut**. Bahkan dengan jumlah yang sama, energi yang kuat (旺) dan energi yang mati (死) memiliki kekuatan yang berbeda."
          },
          {
            "p": "Anda dapat melihat kekuatan sebelum dan setelah dikalikan dengan energi bulan berdampingan, menunjukkan seberapa banyak musim telah mendorongnya. **Rasio sekutu** yang membedakan antara penguasa hari yang kuat dan penguasa hari yang lemah juga dicatat — layar hanya menunjukkan penilaian, tetapi laporan menunjukkan di mana penilaian itu dibuat."
          }
        ]
      },
      {
        "title": "Halaman 6 — Apa arti empat pilar orang lain bagi saya",
        "blocks": [
          {
            "p": "Tingkat kecocokan hanya membandingkan **cabang hari** dari kedua individu. Namun, tiga pilar lainnya dari orang lain juga ditentukan oleh Sepuluh Dewa menggunakan aturan yang sama. Sementara Anda dapat memahami **apa arti orang ini bagi saya** hanya dengan melihat cabang hari, Anda tidak dapat mengetahui **apa posisi orang itu berarti bagi saya**."
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
            "p": "Ini menyatakan seberapa banyak waktu kelahiran disesuaikan dengan waktu matahari yang sebenarnya, apakah koreksi menyebabkan tanggal berubah, dan apa tanggal solar dan lunar ketika saju dihasilkan. Konsep ini dijelaskan dalam dokumen [Menyesuaikan waktu kelahiran dengan waktu matahari yang sebenarnya](/guide/true-solar-time), tetapi **nilai berapa menit yang disesuaikan dalam kasus Anda** bervariasi dari orang ke orang, jadi itu hanya disertakan dalam laporan."
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
              "**Laporan Kesalahan Perhitungan** — Jika grafik asli saju atau skor tampak aneh, harap beri tahu kami. Jika Anda menyertakan kapan Anda memasukkan tanggal dan waktu, kami dapat menghitung ulang dengan nilai yang sama."
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
