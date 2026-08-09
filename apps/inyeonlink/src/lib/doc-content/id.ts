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
            "p": "Grafik dibangun dari **almanak lunisolar Korea**, dan waktu kelahiran dikoreksi ke **waktu matahari sejati** untuk tempat kelahiran — waktu jam yang sama berarti posisi matahari yang berbeda tergantung pada tempat Anda dilahirkan."
          },
          {
            "p": "Skor berasal dari aturan tetap saja. Konsep tradisional — sepuluh dewa, hubungan cabang, elemen pendukung — diekspresikan sebagai aturan, sehingga **input yang sama selalu memberikan hasil yang sama.** Ketika sebuah aturan berubah, kami menjalankan regresi untuk memastikan pembacaan lama tidak berubah."
          },
          {
            "p": "**Tidak ada AI yang terlibat.** Setiap kalimat di layar adalah teks tetap yang terhubung dengan hasil yang dihitung."
          }
        ]
      },
      {
        "title": "Apa yang tidak akan kami klaim",
        "blocks": [
          {
            "ul": [
              "**Kami tidak meramal nasib.** Tidak ada yang di sini memberi tahu Anda untuk mengejar atau menghindari siapa pun. Ini adalah referensi yang diambil dari tradisi.",
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
    "summary": "Inyeon-Link mengungkapkan semua aturan yang digunakannya. Anda dapat memeriksa item dan bobotnya, skor dari tabel hubungan cabang bumi, dan nilai ambang yang membedakan antara seorang penguasa hari yang kuat dan seorang penguasa hari yang lemah — Anda dapat melihat dari mana angka-angka di layar berasal.",
    "backLabel": "Kembali ke Awal",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Nilai yang ditulis di sini semuanya **dibaca langsung dari kode perhitungan**. Karena mereka tidak ditranskripsikan secara manual ke dalam teks, jika aturan berubah, angka dalam dokumen ini juga akan berubah."
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
                  "Day stem, day branch, dan lima elemen — empat item",
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
            "caption": "Saju terdiri dari delapan karakter yang dibentuk oleh heavenly stems dan earthly branches dari tahun, bulan, hari, dan jam kelahiran. Day stem dan day branch yang disebutkan di bawah adalah dua karakter dalam pilar hari.",
            "labels": {
              "year": "Pilar Tahun",
              "yearNote": "Akar · Zodiak",
              "month": "Pilar Bulan",
              "monthNote": "Musim · Kekuatan",
              "day": "Pilar Hari",
              "dayNote": "Saya · Istana Pasangan",
              "hour": "Pilar Jam",
              "hourNote": "Tahun-tahun Selanjutnya · Penggunaan",
              "stem": "Heavenly Stem",
              "stemNote": "Day Stem = Saya",
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
            "p": "Waktu lahir digunakan untuk menentukan pilar jam. Jika tidak diketahui, perhitungan akan dilakukan tanpa pilar jam, dan fakta ini akan ditunjukkan di layar hasil. Karena tidak ada input langsung untuk pilar jam di antara empat item kompatibilitas, nilai tidak akan berfluktuasi secara signifikan, tetapi ini mempengaruhi keseimbangan lima elemen."
          },
          {
            "p": "Jika Anda mengetahui waktu, silakan juga pilih tempat lahir. Jika waktu standar berbeda dari posisi matahari yang sebenarnya, menggunakannya apa adanya dapat menyelaraskan pilar jam [(koreksi waktu matahari yang sebenarnya)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "Input yang sama akan selalu menghasilkan nilai yang sama",
        "blocks": [
          {
            "p": "Semua skor ditentukan oleh aturan. Tidak ada kecerdasan buatan yang digunakan, juga tidak ada angka acak yang diterapkan. Oleh karena itu, memasukkan dua tanggal lahir yang sama beberapa kali tidak akan menghasilkan hasil yang berbeda. Sebagai layanan yang tidak menyimpan data, hasil sebelumnya tidak dapat diambil kembali, tetapi **determinisme** mengkompensasi hal itu."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mengubah aturan akan meningkatkan versi",
        "blocks": [
          {
            "p": "Setiap kali aturan penilaian diubah, versi mesin diperbarui. Versi dicatat di bagian bawah layar hasil, memungkinkan Anda untuk membedakan aturan mana yang digunakan untuk menghitung angka yang sedang Anda lihat."
          }
        ]
      },
      {
        "title": "Apa yang bukan hasil ini",
        "blocks": [
          {
            "p": "Ini adalah **bahan referensi** yang dihitung dari aturan yang dibangun berdasarkan perspektif tradisi. Ini bukan prediksi ilmiah, juga bukan pernyataan definitif tentang hubungan antara dua individu. Rentang skor ditetapkan minimum sekitar 45 poin untuk alasan ini — tidak ada kombinasi yang akan menghasilkan nilai mendekati 0 poin."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Tabel Hubungan",
    "title": "Dua Belas Cabang Bumi — Kombinasi, Bentrokan, Ketidaksesuaian",
    "summary": "Ini adalah tabel hubungan yang digunakan untuk kompatibilitas cabang hari dan kompatibilitas zodiak. Ini sepenuhnya mengungkapkan apa arti setiap kombinasi, bentrokan, dan ketidaksesuaian serta skor masing-masing.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Cabang bumi terdiri dari dua belas karakter",
        "blocks": [
          {
            "p": "Dua belas cabang bumi (十二支) adalah 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Tanda zodiak yang dikenal umum terkait dengan masing-masing dari dua belas karakter ini."
          },
          {
            "figure": "branch-wheel",
            "caption": "Mengatur dua belas karakter dalam lingkaran memberikan pandangan yang jelas tentang hubungan. Sebuah bentrokan selalu duduk tepat di seberang, sementara pasangan enam-harmoni dan ketidaksesuaian yang tenang adalah tetangga yang lebih dekat. Garis-garis ini diambil langsung dari aturan perhitungan, bukan ditulis dalam teks.",
            "labels": {
              "alt": "Diagram yang menunjukkan dua belas cabang bumi yang diatur dalam lingkaran dengan garis yang menghubungkan enam-harmoni, bentrokan, dan ketidaksesuaian.",
              "yukhap": "Enam-Harmoni",
              "chung": "Bentrokan",
              "wonjin": "Ketidaksesuaian",
              "rat": "Tikus",
              "ox": "Sapi",
              "tiger": "Harimau",
              "rabbit": "Kelinci",
              "dragon": "Naga",
              "snake": "Ular",
              "horse": "Kuda",
              "goat": "Kambing",
              "monkey": "Monyet",
              "rooster": "Ayam",
              "dog": "Anjing",
              "pig": "Babi"
            }
          },
          {
            "p": "Dalam saju, masing-masing dari empat pilar memiliki satu cabang bumi. Inyeon-Link menggunakan **cabang hari** (istana pasangan) dan **cabang tahun** (hewan zodiak) di antara mereka. Kedua posisi ini dinilai menggunakan tabel hubungan di bawah."
          }
        ]
      },
      {
        "title": "Tabel Hubungan Seluruhnya",
        "blocks": [
          {
            "table": {
              "caption": "Diurutkan berdasarkan skor tertinggi. Ini adalah nilai yang sebenarnya digunakan oleh Inyeon-Link.",
              "head": [
                "Hubungan",
                "Pasangan yang Sesuai",
                "Makna",
                "Skor"
              ],
              "rows": [
                [
                  "Kombinasi (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Ketika ketiga karakter berkumpul, mereka membentuk sebuah formasi elemen lengkap — sebuah **guk** (局). Ini dianggap sebagai kombinasi terkuat.",
                  "{scoreSamhap}"
                ],
                [
                  "Enam-Harmoni (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Pasangan yang saling menarik. Ini adalah kombinasi yang paling umum dalam kompatibilitas karena terdiri dari hanya dua karakter.",
                  "{scoreYukhap}"
                ],
                [
                  "Triad setengah (半合)",
                  "Dua karakter yang termasuk cabang kerajaan (王地) dari triad (子·酉·午·卯)",
                  "Kombinasi setengah yang mencakup karakter di tengah formasi. Ini tidak dapat membentuk kombinasi lengkap hanya dengan dua karakter, menjadikannya lebih rendah dari triad penuh.",
                  "{scoreBanhap}"
                ],
                [
                  "Cabang bumi yang sama",
                  "子子 · 丑丑 …",
                  "Karakter yang sama. Ini berarti mereka mirip satu sama lain, tetapi tidak menunjukkan ketertarikan, sehingga ditempatkan di tengah.",
                  "{scoreSame}"
                ],
                [
                  "Netral",
                  "Pasangan yang tidak termasuk di atas atau di bawah",
                  "Kombinasi tanpa hubungan khusus. Ini adalah titik referensi.",
                  "{scoreNeutral}"
                ],
                [
                  "Ketidakcocokan tenang (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Pasangan yang tidak dapat terpisah meskipun menyimpan rasa dendam. Mereka tampak tenang di permukaan tetapi dianggap bertahan lama.",
                  "{scoreWonjin}"
                ],
                [
                  "Tabrakan (沖)",
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
        "title": "Triad penuh tidak muncul dalam layanan ini",
        "blocks": [
          {
            "p": "Triad penuh membutuhkan tiga karakter untuk dibentuk. Namun, kompatibilitas disusun dengan mencocokkan cabang bumi dari dua orang **satu per satu**, menghasilkan hanya dua karakter. Oleh karena itu, apa yang muncul di sini selalu merupakan triad setengah, dan poin triad penuh {scoreSamhap} dicadangkan untuk saat memeriksa formasi dalam setiap saju."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Triad setengah harus mencakup cabang kerajaan",
        "blocks": [
          {
            "p": "Ada juga metode yang dihitung sebagai triad setengah jika kedua karakter termasuk dalam kelompok triad yang sama. Ini dapat menghasilkan skor tinggi bahkan untuk kombinasi yang sulit disebut triad, seperti 申辰. Oleh karena itu, layanan ini mengakui triad setengah hanya untuk pasangan yang mencakup cabang kerajaan (王地) (子·酉·午·卯), dan kombinasi seperti 申辰·巳丑·寅戌·亥未 tanpa cabang kerajaan tidak dihitung sebagai triad."
          }
        ]
      },
      {
        "title": "Alasan memisahkan ketidakcocokan tenang",
        "blocks": [
          {
            "p": "Enam pasangan ketidakcocokan tenang sering dilihat dalam kompatibilitas seperti halnya tabrakan. Jika kita menghitung kombinasi sebagai pasangan dan tabrakan, enam pasangan ini akan tertimbun di bawah poin netral {scoreNeutral}, sehingga mereka ditempatkan secara terpisah."
          },
          {
            "p": "Sementara tabrakan itu terbuka dan mencolok, ketidakcocokan tenang secara halus tidak selaras. Oleh karena itu, ditempatkan pada skor {scoreWonjin}, yang lebih tinggi dari tabrakan ({scoreChung}) tetapi pasti lebih rendah dari netral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Skor juga diberikan untuk tabrakan",
        "blocks": [
          {
            "p": "Skor tabrakan terendah adalah {scoreChung}. Tujuannya bukan untuk memberikan nilai mendekati 0. Dalam tradisi, tabrakan bukanlah 'akhir' tetapi 'tabrakan', dan memberikan skor rendah akan menyiratkan bahwa layanan ini membuat pernyataan definitif tentang hubungan."
          },
          {
            "p": "Dengan minimum {scoreChung} dan maksimum {scoreSamhap}, rentangnya jelas, tetapi tidak membuat kesimpulan definitif."
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
            "p": "Perhitungan kecocokan zodiak sangat sederhana. Ini membandingkan cabang tahun dari dua orang untuk menentukan apakah hubungan tersebut harmonis, bertabrakan, atau mengalami ketidakcocokan yang tenang, dan menggunakan skor itu apa adanya. Karena hanya ada satu item, tidak perlu mendistribusikan bobot."
          },
          {
            "p": "Skor untuk setiap hubungan semuanya tercantum dalam [Tabel Hubungan Dua Belas Cabang](/guide/branches). Kecocokan cabang hari menggunakan tabel yang sama."
          }
        ]
      },
      {
        "title": "Alasan untuk menentukan bobot",
        "blocks": [
          {
            "p": "Kecocokan zodiak menyumbang {weightZodiac} dari tingkat pencocokan akhir. Sementara kecocokan saju melihat semua empat pilar, zodiak hanya mempertimbangkan satu karakter, jadi mereka tidak dapat diberi bobot sama."
          },
          {
            "p": "Namun, ada dua alasan mengapa itu tidak dikecualikan."
          },
          {
            "ul": [
              "**Ini adalah item yang paling mudah dipahami secara intuitif**. Bahkan tanpa mengetahui kosakata tradisi, 'harimau dan monyet bertabrakan' masuk akal.",
              "**Ini adalah satu-satunya sumbu yang tidak berfluktuasi meskipun waktu kelahiran tidak diketahui**. Jika Anda tidak mengetahui waktu, pilar jam hilang dan kekuatan lima elemen berubah, tetapi cabang tahun tetap sama."
            ]
          }
        ]
      },
      {
        "title": "Anda juga dapat melihat kecocokan zodiak secara terpisah",
        "blocks": [
          {
            "p": "Di layar hasil, kami menunjukkan skor untuk kecocokan saju dan kecocokan zodiak secara terpisah. Jika hanya tingkat pencocokan akhir yang disajikan, tidak jelas dari mana angka itu berasal. Jika kedua nilai sangat berbeda, itu sendiri patut dicatat."
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
            "p": "Ini adalah item pertama dalam kompatibilitas. Setelah ditentukan bagaimana batang hari A memahami batang hari B, persepsi B terhadap A juga ditentukan, sehingga ada **hanya enam kemungkinan**."
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
                  "Pejabat yang Menyakitkan ↔ Sumber Langsung",
                  "Polaritas berlawanan",
                  "Pejabat yang Menyakitkan mengenakan Segel (傷官佩印)",
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
                  "Bintang burung hantu merampas makanan (梟神奪食)",
                  "Energi yang diberikan diambil oleh pasangan, memblokir aliran."
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
            "p": "Sisi di mana yin dan yang tidak selaras (Kekayaan yang Tepat, Pejabat yang Tepat, Rekan yang Tepat) bersifat emosional, sementara sisi yang sama (Sumber, Pejabat, Rekan) bersifat tidak emosional, yang merupakan prinsip yang membedakan yang tepat dan sisi dari Sepuluh Dewa."
          }
        ]
      },
      {
        "title": "Alasan melihat dengan Sepuluh Dewa daripada tiga elemen",
        "blocks": [
          {
            "p": "Ada metode untuk melihat hubungan batang hari dengan tiga elemen (generasi timbal balik, kesamaan, saling mengatasi). Ini sederhana, tetapi **yin dan yang menghilang.** 甲 (kayu yang mengalir) dan 乙 (kayu yin) menjadi 'kesamaan' yang sama seperti 甲 dan 甲, dan saling mengatasi dihancurkan menjadi satu skor tanpa arah atau yin dan yang."
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
            "p": "Dalam tradisi, dewa mana dari Sepuluh Dewa yang mewakili pasangan berbeda berdasarkan jenis kelamin."
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
                  "Laki-laki",
                  "Kekayaan Langsung (正財)",
                  "Kekayaan Tidak Langsung (偏財)"
                ],
                [
                  "Perempuan",
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
        "title": "Jika jenis kelamin tidak diungkapkan, abaikan item ini",
        "blocks": [
          {
            "p": "Jika item yang tidak dapat diputuskan diatur ke 0 poin, itu menghasilkan skor yang tidak adil rendah. Berat yang tersisa setelah mengabaikan item dinormalisasi kembali [(item dan berat)](/guide/how-compatibility)."
          }
        ]
      },
      {
        "title": "Kami juga menunjukkan bentuk hubungan",
        "blocks": [
          {
            "p": "Selain skor, kami menjelaskan **bentuk apa** yang dimiliki pasangan batang hari di layar hasil. Apakah mereka memiliki posisi yang serupa, apakah satu sisi mendukung yang lain, atau apakah satu sisi ditekan — jika itu adalah hubungan yang mendukung atau menekan, kami menjelaskan sisi mana yang memegang posisi tersebut."
          },
          {
            "p": "Jika hanya satu skor yang disajikan, itu meninggalkan pertanyaan 'jadi apa'. Bentuk bukanlah skor tetapi sesuatu yang harus dibaca, dan bahkan pasangan dengan skor rendah memiliki sesuatu untuk diinterpretasikan."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Lima elemen",
    "title": "Elemen Pendukung — Energi yang dibutuhkan sekarang",
    "summary": "Kami melihat lima elemen bukan sebagai 'apakah mereka memilih dua' tetapi sebagai 'apakah pasangan memiliki apa yang saya butuhkan'. Kami juga mengungkapkan nilai batas yang membedakan antara seorang penguasa hari yang kuat dan yang lemah.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "Apakah lima elemen 'seimbang' bukanlah pertanyaan tentang kompatibilitas",
        "blocks": [
          {
            "p": "Ada metode untuk mengukur apakah lima energi terdistribusi secara merata dengan menggabungkan lima elemen kedua orang. Namun, pertanyaan tentang kompatibilitas bukanlah itu. **Apakah pasangan memiliki apa yang saya butuhkan?**"
          },
          {
            "p": "Derajat keseimbangan adalah simetris, tetapi komplementaritas secara inheren asimetris. Ini karena apa yang A butuhkan berbeda dari apa yang B butuhkan. Oleh karena itu, kami mengukur setiap sisi secara terpisah dan menghitung rata-rata — karena ini adalah rata-rata, total skor tetap simetris."
          }
        ]
      },
      {
        "title": "Elemen Pendukung — Kurangi jika berlebihan, tambahkan jika tidak cukup",
        "blocks": [
          {
            "p": "Elemen Pendukung (用神) adalah 'energi yang dibutuhkan orang ini saat ini'. Ada beberapa metode untuk menentukannya (menekan, mendukung, penyakit, dan komunikasi), tetapi dapat diterjemahkan menjadi aturan, dan yang paling umum digunakan adalah **menekan (抑扶)**. Jika penguasa hari kuat, dianggap bahwa energi untuk mengurangi diperlukan, dan jika lemah, energi untuk menambah diperlukan."
          },
          {
            "table": {
              "head": [
                "Penilaian",
                "Apa yang dibutuhkan",
                "Berapa banyak"
              ],
              "rows": [
                [
                  "Penguasa hari yang kuat (身强)",
                  "Energi yang berkurang — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Tiga"
                ],
                [
                  "Penguasa hari yang lemah (身弱)",
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
            "p": "Sisi batang hari adalah **印星 dan 比劫** — energi yang melahirkan saya dan energi yang mirip dengan saya. Karena dua dari lima, jika energinya sepenuhnya seimbang, itu menjadi {evenAllyRatio}. Sebuah rentang ditetapkan di atas dan di bawah nilai itu."
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
                  "Penguasa hari yang kuat"
                ],
                [
                  "{weakThreshold} atau lebih dan kurang dari {strongThreshold}",
                  "Seimbang"
                ],
                [
                  "Kurang dari {weakThreshold}",
                  "Penguasa hari yang lemah"
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
            "p": "Kami melihat proporsi elemen pendukung saya dalam kekuatan lawan. Namun, kami tidak menggunakan proporsi itu secara langsung tetapi **membagi harapan dengan ukuran elemen pendukung.** Ketika kuat, elemen pendukung adalah tiga (harapan 60%), dan ketika lemah, itu adalah dua (harapan 40%), jadi menggunakan proporsi secara langsung berarti bahwa orang yang kuat selalu menerima skor yang lebih tinggi."
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
            "p": "Skor kecocokan dihitung dengan mencocokkan dua orang. **Inyeon’s Match** hanya mengambil data satu orang sambil membiarkan posisi lawan kosong dan menguji semua nilai yang mungkin yang dapat masuk ke posisi itu. Ini seperti menjalankan mesin kecocokan secara terbalik."
          },
          {
            "p": "Dengan demikian, tidak perlu mengetahui tanggal lahir lawan. Kita masih bisa mengatakan, 'Profil kecocokan seperti apa yang cocok untuk saya?' tentang seseorang yang belum kita temui."
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
                  "Batang hari dari kedua orang — batang langit",
                  "10"
                ],
                [
                  "Pelengkap lima elemen",
                  "Elemen pendukung saya dan kekuatan lima elemen lawan",
                  "5"
                ],
                [
                  "Hubungan cabang hari",
                  "cabang hari dari kedua orang",
                  "12"
                ],
                [
                  "Hubungan zodiak",
                  "cabang tahun dari kedua orang",
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
            "p": "Pada orang yang nyata, penguasa hari dan lima elemen tidak beroperasi secara terpisah. Seseorang dengan 甲木 biasanya juga memiliki energi 木 yang kuat. Metode menghitung cabang secara terpisah mengabaikan korelasi itu, sehingga nilai yang diperoleh dengan menghubungkan skor tertinggi untuk setiap cabang menjadi kombinasi yang tidak ada dalam kenyataan."
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
            "p": "Hasilnya berarti 'jika Anda bertemu seseorang dari tipe ini, item ini akan mendapatkan skor tinggi'. Ini bukan kriteria untuk memilih seseorang, tetapi lebih merupakan cara untuk membacanya dari satu perspektif memahami diri saya."
          },
          {
            "p": "Alasan mengapa tipe tertentu mendapatkan skor tinggi juga dicatat item demi item — apakah penguasa hari berada dalam posisi yang menguntungkan, atau apakah orang itu memiliki energi yang saya butuhkan saat ini."
          }
        ]
      },
      {
        "title": "Alat konfirmasi",
        "blocks": [
          {
            "p": "Anda mungkin penasaran apakah orang yang Anda pikirkan sesuai dengan tipe itu. Dengan memasukkan tanggal lahir mereka ke dalam alat konfirmasi di layar hasil, Anda akan diberitahu tentang penguasa hari, cabang hari, dan cabang tahun mereka. Nilai input tidak disimpan pada saat ini [(tidak disimpan)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Waktu",
    "title": "Konversi waktu lahir ke waktu matahari yang sebenarnya",
    "summary": "Waktu standar dan posisi matahari yang sebenarnya berbeda. Waktu harus dikoreksi berdasarkan bujur tempat lahir untuk menjelaskan mengapa pilar waktu akurat.",
    "backLabel": "Dasar perhitungan",
    "sections": [
      {
        "title": "Waktu di jam dan waktu matahari berbeda",
        "blocks": [
          {
            "p": "Pilar waktu (時柱) dari saju ditentukan oleh posisi matahari. Namun, jam yang kita lihat menggunakan satu waktu standar untuk seluruh negara, yang menyebabkan ketidaksesuaian dengan posisi matahari yang sebenarnya."
          },
          {
            "p": "Waktu standar Korea didasarkan pada bujur 135° timur. Karena bujur Seoul sekitar 127°, itu sekitar 8° barat, menyebabkan matahari mencapai puncaknya lebih lambat — ketika sudah siang menurut jam, matahari di Seoul belum mencapai puncaknya. Perbedaan ini sekitar **32 menit**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 menit mengubah pilar waktu satu slot",
        "blocks": [
          {
            "p": "Waktu dalam saju dibagi menjadi unit dua jam. Mereka yang lahir dekat batas akan memiliki pilar waktu mereka sepenuhnya berubah oleh perbedaan 32 menit — koreksi ini diperlukan bagi mereka yang jatuh tepat di batas ini."
          }
        ]
      },
      {
        "title": "Mengapa kami meminta tempat lahir",
        "blocks": [
          {
            "p": "Jika bujur berbeda, jumlah koreksi juga akan berbeda. Menerapkan koreksi berbasis Seoul kepada seseorang yang lahir di luar negeri akan menghasilkan ketidaksesuaian yang signifikan dalam pilar waktu. Oleh karena itu, layar input mengharuskan Anda untuk memilih tempat lahir Anda, dan perhitungan didasarkan pada bujur dan waktu standar kota tersebut. Saat ini, ada {cityCount} tempat dalam daftar."
          },
          {
            "p": "Di tempat-tempat di mana bujur bervariasi besar bahkan dalam negara yang sama (seperti AS, Rusia, Indonesia, dll.), kota-kota telah dibagi. **15° bujur sama dengan satu slot pilar waktu**."
          },
          {
            "p": "Jika Anda tidak memilih, perhitungan akan didasarkan pada Seoul. Karena sebagian besar kelahiran adalah domestik, ini mengurangi kemungkinan kesalahan, tetapi jika Anda lahir di luar negeri, harap pastikan untuk memilih."
          }
        ]
      },
      {
        "title": "Waktu standar telah berubah beberapa kali di masa lalu",
        "blocks": [
          {
            "p": "Ada alasan mengapa koreksi tidak dapat dihitung hanya sebagai 'perbedaan bujur ÷ 15° × 60 menit'. Waktu standar itu sendiri telah bervariasi selama berbagai era."
          },
          {
            "table": {
              "caption": "Perubahan dalam waktu standar Korea — mereka yang lahir dalam periode ini akan memiliki perbedaan dengan perhitungan sederhana",
              "head": [
                "Periode",
                "Apa yang berbeda"
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
                  "Waktu hemat siang hari diterapkan"
                ]
              ]
            }
          },
          {
            "p": "Inyeon-Link tidak menggunakan nilai tetap untuk meridian standar, tetapi menghitung waktu standar yang sebenarnya digunakan pada saat itu berdasarkan informasi **zona waktu IANA** dari tempat lahir. Waktu hemat siang hari dan waktu standar masa lalu secara otomatis tercermin."
          }
        ]
      },
      {
        "title": "Kelahiran tepat setelah tengah malam juga mempertimbangkan tanggal",
        "blocks": [
          {
            "p": "Karena koreksi adalah -32 menit, mereka yang lahir antara 00:00 dan 00:32 menurut jam akan menjadi **23:00 hari sebelumnya** dalam waktu matahari yang sebenarnya. Jika hanya waktu yang dibalik dan tanggal dibiarkan tidak berubah, itu akan menulis pilar hari sebagai '23:00 hari sebelumnya'."
          },
          {
            "p": "Inyeon-Link juga akan membalikkan tanggal dalam kasus ini. Pilar hari menunjukkan orang itu sendiri dalam saju, jadi jika ini salah, hampir semua item kompatibilitas akan salah."
          }
        ]
      },
      {
        "title": "Anda tidak perlu mengetahui waktu",
        "blocks": [
          {
            "p": "Waktu kelahiran adalah opsional. Jika Anda tidak mengetahuinya, perhitungan akan dilakukan tanpa pilar waktu, dan fakta ini akan ditampilkan di layar hasil. Tidak ada item dalam kompatibilitas yang memerlukan pilar waktu untuk ditulis langsung, tetapi itu mempengaruhi lima elemen, jadi jika Anda mengetahuinya, lebih akurat untuk menyertakannya."
          },
          {
            "p": "Kompatibilitas zodiak selalu memiliki nilai yang sama terlepas dari waktu — [karena hanya melihat cabang tahun](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informasi Pribadi",
    "title": "Metode tidak menyimpan informasi yang dimasukkan",
    "summary": "Ini menjelaskan apa yang secara teknis berarti bahwa tanggal lahir Anda tidak dicatat di mana pun dan apa yang termasuk dalam tautan hasil.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Tidak diperlukan keanggotaan",
        "blocks": [
          {
            "p": "Inyeon-Link tidak membuat akun. Ini tidak mengumpulkan nama, email, atau nomor telepon. Satu-satunya informasi yang dikumpulkan adalah tanggal lahir dan (opsional) waktu kelahiran, tempat lahir, dan jenis kelamin, dan bahkan itu tidak tersisa setelah perhitungan selesai."
          },
          {
            "p": "Ada bidang untuk memasukkan judul yang akan ditampilkan di layar hasil, tetapi itu **hanya untuk tujuan tampilan** dan tidak digunakan dalam perhitungan. Anda tidak perlu memasukkan nama asli Anda."
          }
        ]
      },
      {
        "title": "Apa yang termasuk dalam tautan hasil?",
        "blocks": [
          {
            "p": "Setelah perhitungan selesai, alamatnya terlihat seperti ini."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Apa yang mengikuti **#** adalah nilai input. Bagian ini disebut **fragmen**, yang merupakan **bagian yang tidak dikirim ke server oleh browser**. Ini adalah perilaku web standar dan bukan aturan yang kami buat — itu awalnya dirancang untuk menunjukkan lokasi dalam dokumen, jadi server tidak perlu melihatnya."
          },
          {
            "p": "Dengan kata lain, ketika Anda membuka tautan hasil, browser membaca nilai itu untuk meminta perhitungan, dan server kami menerima nilai yang diperlukan untuk perhitungan, mengembalikan jawaban, dan kemudian melupakannya."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Harap berhati-hati saat mengirim tautan kepada orang lain",
        "blocks": [
          {
            "p": "Fakta bahwa itu tidak disimpan di server dan bahwa tautan itu aman bukanlah hal yang sama. Tautan hasil berisi kedua tanggal lahir Anda, jadi orang yang menerima tautan itu dapat melihat hasil yang sama."
          }
        ]
      },
      {
        "title": "Mengapa perhitungan dilakukan di server tetapi tidak disimpan?",
        "blocks": [
          {
            "p": "Perhitungan itu sendiri dilakukan di server. Almanak lunisolar Korea diperlukan untuk menghasilkan saju, dan tabel itu terlalu besar untuk dikirim ke browser. Namun, **setelah memproses permintaan, nilai itu tidak digunakan di mana pun.** Tidak ada kode untuk menyimpannya dalam basis data."
          },
          {
            "p": "Sebuah catatan minimal yang diperlukan untuk operasi disimpan — sebuah penghitung untuk mencegah orang yang sama mengirim terlalu banyak permintaan dalam waktu singkat. Ini tidak termasuk tanggal lahir, dan IP akses juga tidak disimpan. Hanya satu nilai, yang di-hash dengan tanggal, yang dihitung, dan nilai itu berubah ketika hari berubah."
          }
        ]
      },
      {
        "title": "Hal-hal yang tidak dapat dilakukan karena informasi tidak disimpan",
        "blocks": [
          {
            "p": "Sejujurnya, ada hal-hal yang telah kami lepaskan karena kami tidak menyimpan informasi."
          },
          {
            "ul": [
              "**Anda tidak dapat mengambil hasil sebelumnya.** Anda perlu memiliki tautan untuk melihatnya lagi.",
              "**Nilai yang sama akan dihitung ulang.** Tidak ada cache. Namun, karena semua aturan bersifat deterministik, [input yang sama akan selalu menghasilkan nilai yang sama](/guide/how-compatibility).",
              "**Menyegarkan akan membawa kembali gerbang iklan.** Ini karena tidak ada tempat untuk menyimpan catatan tampilan."
            ]
          }
        ]
      },
      {
        "title": "Dalam hal pembelian",
        "blocks": [
          {
            "p": "Jika Anda membeli laporan, catatan transaksi akan disimpan pada saat itu. Hukum menetapkan periode penyimpanan untuk pembayaran, dan tanpa riwayat pesanan, pengembalian dana tidak dapat diproses. Namun, meskipun demikian, **tanggal lahir yang digunakan untuk perhitungan kompatibilitas tidak terlampir pada pesanan** — itu dikumpulkan lagi saat membuat PDF setelah konfirmasi pembayaran."
          },
          {
            "p": "Rincian dijelaskan dalam [Kebijakan Privasi](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produk Berbayar",
    "title": "Apa yang termasuk dalam laporan berbayar?",
    "summary": "Ini menjelaskan apa yang telah ditambahkan ke PDF sambil menjaga layar tidak berubah, item demi item. Nilai dan konten dibaca dari pengaturan produk yang sebenarnya.",
    "backLabel": "Dasar Perhitungan",
    "sections": [
      {
        "title": "Layar tetap tidak berubah, hanya ditambahkan ke PDF",
        "blocks": [
          {
            "p": "Perhitungan kompatibilitas dan permintaan hasil adalah **gratis**. Tingkat kecocokan, skor dan bobot item, grafik saju asli dari kedua individu, dan bentuk hubungan semuanya dapat dilihat di layar. Tidak ada yang dihapus dari layar saat membuat laporan berbayar."
          },
          {
            "p": "Tujuan laporan adalah untuk **menambahkan lapisan yang tidak ada di layar**. Dan lapisan itu tidak dibuat-buat; itu terdiri dari nilai yang sudah dihitung selama proses penilaian tetapi tidak digunakan di layar."
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
            "p": "**Halaman 1-3 diatur untuk mempertahankan apa yang ada di layar** dan **dari halaman 4 seterusnya adalah konten yang tidak ada di layar**. Di bawah ini, dijelaskan mengapa hal-hal tertentu tidak ditampilkan di layar."
          }
        ]
      },
      {
        "title": "Halaman 4 — Arah dari dua energi",
        "blocks": [
          {
            "p": "Item dari lima elemen di layar disajikan sebagai satu skor. Namun, skor tunggal itu adalah **rata-rata dari dua arah** — mengukur seberapa banyak yang lain mengisi saya dan seberapa banyak saya mengisi yang lain, dan merata-rata nilai-nilai tersebut."
          },
          {
            "p": "Kelengkapan secara inheren **asimetris**. Ini karena energi yang dibutuhkan oleh saya dan energi yang dibutuhkan oleh yang lain berbeda. Jika Anda hanya melihat rata-rata, sebuah hubungan di mana satu sisi mengisi yang lain secara signifikan dan sebuah hubungan di mana keduanya saling mengisi secara merata akan muncul sebagai angka yang sama. Laporan ini memisahkan kedua hal tersebut."
          },
          {
            "p": "Juga termasuk dalam bagian yang sama adalah **diagram hubungan dari empat pilar**. Satu-satunya yang masuk ke dalam tingkat kecocokan adalah cabang hari (日支) — karena itu adalah posisi pasangan — tetapi cabang tahun, bulan, dan jam lainnya juga dapat dibaca dengan diagram hubungan yang sama."
          }
        ]
      },
      {
        "kind": "note",
        "title": "",
        "blocks": [
          {
            "p": ""
          }
        ]
      },
      {
        "title": "",
        "blocks": [
          {
            "p": ""
          },
          {
            "p": ""
          }
        ]
      },
      {
        "title": "",
        "blocks": [
          {
            "p": ""
          },
          {
            "p": ""
          }
        ]
      },
      {
        "title": "",
        "blocks": [
          {
            "p": "Ini menyatakan seberapa banyak waktu lahir disesuaikan dengan **waktu matahari sejati** (true solar time), apakah koreksi tersebut menyebabkan tanggal berubah, dan apa tanggal matahari dan bulan ketika saju dihasilkan. Konsep ini dijelaskan dalam dokumen [Menyesuaikan waktu lahir dengan waktu matahari sejati](/guide/true-solar-time), tetapi **nilai berapa menit yang disesuaikan dalam kasus Anda** bervariasi dari orang ke orang, jadi hanya termasuk dalam laporan."
          }
        ]
      },
      {
        "title": "Laporan profil kecocokan Inyeon PDF — {priceAffinityDomestic}",
        "slot": "",
        "blocks": [
          {
            "p": "Pembayaran domestik {priceAffinityDomestic} (termasuk PPN), pembayaran internasional {priceAffinityGlobal}. {pagesAffinity} halaman A4."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": ""
          }
        ]
      },
      {
        "title": "",
        "blocks": [
          {
            "p": ""
          },
          {
            "p": ""
          }
        ]
      },
      {
        "kind": "note",
        "title": "",
        "blocks": [
          {
            "p": ""
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
    "summary": "Ini adalah saluran untuk pertanyaan tentang penggunaan, pengembalian dana, permintaan informasi pribadi, dan laporan kesalahan, serta informasi bisnis.",
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
              "**Pembayaran dan Pengembalian Dana** — Jika dokumen tidak dibuat atau jumlah pembayaran berbeda dari pesanan, pengembalian dana penuh akan diberikan. Syaratnya ada di [kebijakan pengembalian dana](/refund-policy).",
              "**Informasi Pribadi** — Kami menerima permintaan untuk melihat, memperbaiki, dan menghapus. Kebijakan pemrosesannya ada di [kebijakan privasi](/privacy).",
              "**Laporan Kesalahan Perhitungan** — Jika grafik asli saju atau skor terlihat aneh, harap beri tahu kami. Jika Anda menyertakan kapan Anda memasukkan tanggal dan waktu, kami dapat menghitung ulang dengan nilai yang sama."
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
              "**Petugas Perlindungan Informasi Pribadi** — {privacyOfficer}",
              "**Penyedia Hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Anda tidak perlu menyertakan tanggal dan waktu lahir Anda dalam email permintaan. Kami tidak menyimpan input, jadi kami tidak dapat mengambilnya, dan nomor pesanan sudah cukup untuk konfirmasi. Harap hanya sertakan jika diperlukan untuk laporan kesalahan perhitungan."
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
  "intro": "Perubahan pada syarat penggunaan Anda — harga, kebijakan — diposting di sini sebelum berlaku. Peningkatan internal tidak dicantumkan: apa yang muncul di sini adalah yang perlu Anda ketahui.",
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
        "Pertanyaan, pengembalian dana, permintaan privasi, dan laporan kesalahan perhitungan sekarang memiliki satu tempat untuk dituju — lihat halaman kontak di footer.",
        "Jika sesuatu terlihat salah perhitungan, harap sertakan detail kelahiran yang menghasilkan itu. Kami tidak menyimpan apa yang Anda masukkan, jadi tanpa itu kami tidak dapat mereproduksi pembacaan."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Laporan diterbitkan dalam bahasa Inggris untuk bahasa Arab dan Khmer",
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
        "Jika kami mengubah aturan interpretasi dengan cara yang dapat mengubah skor, kami akan mempostingnya di sini terlebih dahulu, dengan tanggal mulai berlaku — karena tautan hasil yang sudah Anda miliki akan dibaca berbeda.",
        "Set aturan saat ini adalah v10. Pembayaran belum dibuka."
      ]
    }
  }
} satisfies NoticeCopy;
