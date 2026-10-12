import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Bahasa Melayu — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const MS_DOCS = {
  "about": {
    "eyebrow": "Tentang",
    "title": "Tentang Inyeon-Link",
    "summary": "Kami membandingkan dua carta kelahiran dalam tradisi Saju Korea. Berikut adalah apa yang kami kira, dan apa yang kami tidak tuntut.",
    "backLabel": "Laman Utama",
    "sections": [
      {
        "title": "Apa yang kami lakukan",
        "blocks": [
          {
            "p": "Inyeon-Link membina dua carta kelahiran daripada tarikh dan waktu kelahiran dan menunjukkan **bagaimana dua set tenaga bertemu.** Anda juga boleh membaca carta anda sendiri secara berasingan dan melihat temperament mana yang cenderung sesuai dengan anda."
          },
          {
            "p": "Membaca di skrin adalah **percuma dan tidak memerlukan akaun.** Item berbayar adalah laporan PDF yang mengandungi angka yang tidak ditunjukkan di skrin — kekuatan elemen, pasangan sepuluh dewa dan hubungan di seluruh empat tiang."
          }
        ]
      },
      {
        "title": "Apa yang kami kira",
        "blocks": [
          {
            "p": "Carta dibina daripada **almanak lunisolar Korea**, dan waktu kelahiran diperbetulkan kepada **masa solar sebenar** untuk tempat kelahiran — waktu jam yang sama bermakna kedudukan matahari yang berbeza bergantung kepada tempat anda dilahirkan."
          },
          {
            "p": "Skor datang daripada peraturan tetap sahaja. Konsep tradisional — sepuluh dewa, hubungan cabang, elemen sokongan — dinyatakan sebagai peraturan, jadi **input yang sama sentiasa memberikan hasil yang sama.** Apabila peraturan berubah, kami menjalankan regresi untuk memastikan bacaan lama tidak berubah."
          },
          {
            "p": "**Tiada AI terlibat.** Setiap ayat di skrin adalah teks tetap yang dilampirkan kepada hasil yang dikira."
          }
        ]
      },
      {
        "title": "Apa yang tidak akan kami tuntut",
        "blocks": [
          {
            "ul": [
              "**Kami tidak meramal nasib.** Tiada apa di sini yang memberitahu anda untuk mengejar atau menghindari sesiapa. Ia adalah rujukan yang diambil daripada tradisi.",
              "**Kami tidak menyimpan apa yang anda masukkan.** Butiran kelahiran digunakan untuk saat pengiraan dan tidak pernah dicatat; pautan hasil tinggal di bahagian URL yang tidak dihantar oleh pelayar kepada pelayan.",
              "**Skor bukanlah keputusan tentang seseorang.** Nombor yang rendah tidak membatalkan hubungan."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Kaedah ini diterangkan secara terperinci dalam [panduan](/guide). Butiran syarikat dan cara untuk menghubungi kami terdapat di [halaman hubungan](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Asas Pengiraan",
    "title": "Apakah Asas untuk Pengiraan?",
    "summary": "Inyeon-Link mendedahkan semua peraturan yang digunakannya. Anda boleh menyemak item dan beratnya, skor daripada jadual hubungan cabang bumi, dan nilai ambang yang membezakan antara seorang tuan hari yang kuat dan seorang tuan hari yang lemah — anda boleh melihat dari mana nombor di skrin datang.",
    "backLabel": "Kembali ke Mula",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Nilai yang ditulis di sini adalah semua **dibaca terus daripada kod pengiraan**. Oleh kerana ia tidak ditranskrip secara manual ke dalam teks, jika peraturan berubah, nombor dalam dokumen ini juga akan berubah."
          }
        ]
      }
    ]
  },
  "guide/how-compatibility": {
    "eyebrow": "Asas Perkhidmatan",
    "title": "Apa yang Dilihat oleh Keserasian Saju?",
    "summary": "Ia menjelaskan empat item dan berat masing-masing, dan menerangkan mengapa empat itu dipilih. Ia juga membincangkan mengapa pengiraan boleh dibuat walaupun tanpa mengetahui waktu kelahiran.",
    "backLabel": "Asas Pengiraan",
    "sections": [
      {
        "title": "Mengira dan Menggabungkan Dua Paksi",
        "blocks": [
          {
            "p": "Kadar padanan datang daripada dua cabang. **Keserasian saju** melihat keseluruhan carta asal saju kedua individu, sementara **keserasian zodiak** hanya mempertimbangkan satu cabang bumi dari tahun kelahiran. Nilai akhir diperoleh dengan purata berbobot kedua."
          },
          {
            "table": {
              "head": [
                "Paksi",
                "Apa yang Dipertimbangkan",
                "Berat"
              ],
              "rows": [
                [
                  "Keserasian Saju",
                  "Pangkal hari, cabang hari, dan lima elemen — empat item",
                  "{weightSaju}"
                ],
                [
                  "Keserasian Zodiak",
                  "Hubungan antara cabang tahun",
                  "{weightZodiac}"
                ]
              ]
            }
          },
          {
            "p": "Bahagian saju adalah jauh lebih berat kerana jumlah maklumat yang digunakan adalah berbeza. Saju mempertimbangkan semua empat tiang, sementara zodiak hanya melihat satu watak. Namun, zodiak tidak dikecualikan atas dua sebab — ia adalah item yang paling mudah difahami secara intuitif, dan ia adalah **satu-satunya paksi yang nilainya tidak berfluktuasi walaupun tanpa mengetahui waktu kelahiran**."
          }
        ]
      },
      {
        "title": "Empat Item Keserasian Saju",
        "blocks": [
          {
            "p": "Bahagian saju dibahagikan lagi kepada empat. Setiap item dipilih untuk memastikan bahawa apa yang mereka pertimbangkan tidak bertindih."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju terdiri daripada lapan watak yang dibentuk oleh pangkal langit dan cabang bumi tahun, bulan, hari, dan jam kelahiran. Pangkal hari dan cabang hari yang disebut di bawah adalah dua watak dalam tiang hari.",
            "labels": {
              "year": "Tiang Tahun",
              "yearNote": "Akar · Zodiak",
              "month": "Tiang Bulan",
              "monthNote": "Musim · Kuasa",
              "day": "Tiang Hari",
              "dayNote": "Saya · Istana Pasangan",
              "hour": "Tiang Jam",
              "hourNote": "Tahun Kemudian · Penggunaan",
              "stem": "Pangkal Langit",
              "stemNote": "Pangkal Hari = Saya",
              "branch": "Cabang Bumi",
              "branchNote": "Cabang Hari = Istana Pasangan"
            }
          },
          {
            "table": {
              "head": [
                "Item",
                "Apa yang Dipertimbangkan",
                "Berat"
              ],
              "rows": [
                [
                  "Hubungan Pangkal Hari",
                  "Apa pangkal hari (日干) kedua orang itu terhadap satu sama lain — dilihat melalui Sepuluh Dewa",
                  "{weightDayMaster}"
                ],
                [
                  "Pelengkap Lima Elemen",
                  "Adakah pasangan mempunyai tenaga yang saya perlukan — dilihat melalui elemen sokongan yang diperlukan oleh carta saat ini",
                  "{weightElementSupply}"
                ],
                [
                  "Bintang Pasangan",
                  "Adakah pangkal hari pasangan sepadan dengan posisi pasangan saya?",
                  "{weightSpouseStar}"
                ],
                [
                  "Hubungan Cabang Hari",
                  "Adakah cabang hari (日支) kedua orang itu adalah gabungan atau pertembungan?",
                  "{weightDayBranch}"
                ]
              ]
            }
          },
          {
            "p": "Cabang hari dibaca kerana tradisi menganggapnya sebagai **istana pasangan**. Dari empat tiang, ia adalah yang menunjuk kepada pasangan, menjadikannya tempat pertama yang dilihat untuk kesesuaian."
          }
        ]
      },
      {
        "title": "Jika jantina tidak dinyatakan, elemen pasangan akan diabaikan",
        "blocks": [
          {
            "p": "Elemen pasangan memerlukan pengetahuan tentang jantina untuk pengiraan. Tradisi membaca posisi yang menunjuk kepada pasangan dengan cara yang berbeza bergantung kepada jantina. Jika tidak dinyatakan, item ini akan **dikecualikan** dan berat bagi tiga item yang tinggal akan dinormalisasi semula."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ia tidak akan dianggap sebagai 0 mata",
        "blocks": [
          {
            "p": "Jika posisi yang hilang dianggap sebagai 0 mata, skor akan diturunkan secara tidak adil hanya kerana jantina tidak dinyatakan. Normalisasi semula berat mencegah isu ini."
          }
        ]
      },
      {
        "title": "Pengiraan boleh dilakukan tanpa mengetahui waktu kelahiran",
        "blocks": [
          {
            "p": "Waktu kelahiran digunakan untuk menentukan tiang jam. Jika tidak diketahui, pengiraan akan dilakukan tanpa tiang jam, dan fakta ini akan ditunjukkan pada skrin keputusan. Oleh kerana tiada input langsung untuk tiang jam di antara empat item kesesuaian, nilai tidak akan berfluktuasi secara signifikan, tetapi ia mempengaruhi keseimbangan lima elemen."
          },
          {
            "p": "Jika anda tahu waktu, sila juga pilih tempat kelahiran. Jika waktu standard berbeza dari posisi solar sebenar, menggunakannya seperti itu mungkin menyimpangkan tiang jam [(pembetulan waktu solar sebenar)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "Input yang sama akan sentiasa menghasilkan nilai yang sama",
        "blocks": [
          {
            "p": "Semua skor ditentukan oleh peraturan. Tiada kecerdasan buatan digunakan, dan tiada nombor rawak digunakan. Oleh itu, memasukkan dua tarikh kelahiran yang sama berulang kali tidak akan menghasilkan keputusan yang berbeza. Sebagai perkhidmatan yang tidak menyimpan data, keputusan sebelumnya tidak dapat diambil semula, tetapi **determinisme** mengimbangi itu."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mengubah peraturan akan meningkatkan versi",
        "blocks": [
          {
            "p": "Setiap kali peraturan penilaian diubah, versi enjin akan dikemas kini. Versi dicatat di bahagian bawah skrin keputusan, membolehkan anda membezakan peraturan mana yang digunakan untuk mengira nombor yang anda lihat sekarang."
          }
        ]
      },
      {
        "title": "Apa yang bukan hasil ini",
        "blocks": [
          {
            "p": "Ini adalah **bahan rujukan** yang dikira dari peraturan yang dibina berdasarkan perspektif tradisi. Ia bukan ramalan saintifik, dan bukan kenyataan definitif tentang hubungan antara dua individu. Julat skor ditetapkan pada minimum sekitar 45 mata untuk sebab ini — tiada kombinasi akan menghasilkan nilai yang hampir kepada 0 mata."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Carta hubungan",
    "title": "Bagaimana Haiwan Zodiak dan Cabang Hari Bertemu — Carta Dua Belas Cabang",
    "summary": "Carta hubungan yang digunakan apabila haiwan zodiak dan cabang hari dua orang diletakkan bersebelahan. Ia menunjukkan haiwan mana yang membentuk keharmonian, pertembungan atau ketidakselarasan dengan haiwan mana, bagi setiap satu daripada dua belas, dan mendedahkan skor bagi setiap hubungan.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Haiwan zodiak dan cabang hari menggunakan carta yang sama",
        "blocks": [
          {
            "p": "Inyeon-Link meletakkan cabang bumi dua orang bersebelahan di dua tempat: **keserasian zodiak**, yang melihat cabang tahun kelahiran, dan **keserasian cabang hari** (istana pasangan), yang melihat cabang hari kelahiran. Kedua-duanya dinilai dengan carta di bawah; satu-satunya perbezaan ialah berapa berat yang dibawa oleh setiap satu dalam skor akhir."
          },
          {
            "figure": "branch-wheel",
            "caption": "Menyusun dua belas watak dalam bulatan menjadikan hubungan jelas sekali pandang. Pertembungan sentiasa berada tepat bertentangan, manakala pasangan enam-harmoni dan ketidakselarasan yang tenang adalah jiran yang lebih dekat. Garis-garis ini tidak ditulis dengan tangan; ia dilukis terus daripada peraturan pengiraan.",
            "labels": {
              "alt": "Rajah yang menunjukkan dua belas cabang bumi disusun dalam bulatan, dengan garis yang menghubungkan pasangan enam-harmoni, pertembungan dan ketidakselarasan.",
              "yukhap": "Enam-Harmoni",
              "chung": "Pertembungan",
              "wonjin": "Ketidakselarasan",
              "rat": "Tikus",
              "ox": "Lembu",
              "tiger": "Harimau",
              "rabbit": "Arnab",
              "dragon": "Naga",
              "snake": "Ular",
              "horse": "Kuda",
              "goat": "Biri-biri",
              "monkey": "Monyet",
              "rooster": "Ayam",
              "dog": "Anjing",
              "pig": "Babi"
            }
          }
        ]
      },
      {
        "title": "Hubungan bagi setiap satu daripada dua belas haiwan zodiak",
        "blocks": [
          {
            "p": "Bagi setiap haiwan, carta menyenaraikan haiwan mana yang membentuk setiap hubungan dengannya. Hanya pasangan yang diiktiraf perkhidmatan ini sebagai keharmonian disenaraikan, jadi haiwan yang tidak muncul dalam sesuatu baris tidak mempunyai hubungan istimewa dengannya — ia **neutral**."
          },
          {
            "table": {
              "caption": "Empat jenis hubungan dilihat dari satu haiwan",
              "head": [
                "Haiwan anda",
                "Pasangan yang tertarik (Enam-Harmoni)",
                "Triad separuh",
                "Bertentangan secara senyap (Ketidakselarasan)",
                "Berlanggar secara langsung (Pertembungan)"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Lembu",
                  "Monyet · Naga",
                  "Biri-biri",
                  "Kuda"
                ],
                [
                  "Lembu (丑)",
                  "Tikus",
                  "Ayam",
                  "Kuda",
                  "Biri-biri"
                ],
                [
                  "Harimau (寅)",
                  "Babi",
                  "Kuda",
                  "Ayam",
                  "Monyet"
                ],
                [
                  "Arnab (卯)",
                  "Anjing",
                  "Babi · Biri-biri",
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
                  "Biri-biri",
                  "Harimau · Anjing",
                  "Lembu",
                  "Tikus"
                ],
                [
                  "Biri-biri (未)",
                  "Kuda",
                  "Arnab",
                  "Tikus",
                  "Lembu"
                ],
                [
                  "Monyet (申)",
                  "Ular",
                  "Tikus",
                  "Arnab",
                  "Harimau"
                ],
                [
                  "Ayam (酉)",
                  "Naga",
                  "Ular · Lembu",
                  "Harimau",
                  "Arnab"
                ],
                [
                  "Anjing (戌)",
                  "Arnab",
                  "Kuda",
                  "Ular",
                  "Naga"
                ],
                [
                  "Babi (亥)",
                  "Harimau",
                  "Arnab",
                  "Naga",
                  "Ular"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Apabila dua orang bertemu dalam carta",
        "blocks": [
          {
            "p": "Membaca carta bermaksud mencari dua haiwan dalam satu baris. Berikut beberapa pasangan sebagai contoh."
          },
          {
            "ul": [
              "**Tikus dan Lembu** — enam-harmoni. Ia hanya memerlukan dua watak, jadi ia adalah keharmonian yang paling kerap muncul dalam keserasian, dan sebuah yang baik.",
              "**Tikus dan Naga** — triad separuh: dua daripada tiga watak 申子辰, termasuk yang di tengah (子).",
              "**Tikus dan Harimau** — tiada dalam carta, jadi neutral: bukan keharmonian dan bukan pertembungan, hanya garis asas.",
              "**Tikus dan Biri-biri** — ketidakselarasan. Nampak tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan.",
              "**Harimau dan Monyet** — pertembungan. Mereka duduk tepat bertentangan dan dilihat berlanggar secara langsung."
            ]
          }
        ]
      },
      {
        "title": "Berapa mata yang diperoleh setiap hubungan",
        "blocks": [
          {
            "table": {
              "caption": "Tertinggi dahulu. Ini ialah nilai yang benar-benar digunakan oleh Inyeon-Link.",
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
                  "Triad separuh",
                  "{scoreBanhap}"
                ],
                [
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ketidakselarasan",
                  "{scoreWonjin}"
                ],
                [
                  "Pertembungan",
                  "{scoreChung}"
                ]
              ]
            }
          },
          {
            "p": "Cabang yang sama (dua orang dengan haiwan yang sama) bermaksud persamaan, bukan tarikan, jadi ia berada sedikit di atas neutral. Sama ada keserasian zodiak atau cabang hari, nilai dalam jadual ini terus masuk ke dalam skor akhir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mengapa triad penuh tiada dalam carta",
        "blocks": [
          {
            "p": "Triad penuh (申子辰, 巳酉丑, 寅午戌, 亥卯未) memerlukan ketiga-tiga watak. Meletakkan dua orang bersebelahan hanya memberikan dua, jadi triad penuh tidak boleh berlaku dalam keserasian dan hanya triad separuh yang muncul. Skor triad penuh sebanyak {scoreSamhap} disimpan untuk kes apabila tiga watak berkumpul dalam carta seseorang itu sendiri."
          }
        ]
      },
      {
        "title": "申辰, 巳丑, 寅戌 dan 亥未 tidak dikira sebagai keharmonian",
        "blocks": [
          {
            "p": "Sesetengah kaedah mengira mana-mana dua watak daripada kumpulan triad yang sama sebagai triad separuh. Inyeon-Link tidak berbuat demikian: seperti yang ditunjukkan oleh lajur triad separuh di atas, ia hanya menerima pasangan yang termasuk **cabang diraja** di tengah kumpulan (子, 午, 卯, 酉). Pasangan tanpanya tidak mempunyai pusat untuk pembentukan berkumpul, jadi ia dianggap neutral."
          }
        ]
      },
      {
        "title": "Ketidakselarasan dan pertembungan tidak berada di dasar",
        "blocks": [
          {
            "p": "Jika hanya keharmonian dan pertembungan dikira, kesemua enam pasangan ketidakselarasan akan tertimbus dalam neutral. Jadi ketidakselarasan mempunyai tempatnya sendiri: lebih tinggi daripada pertembungan langsung dan lebih rendah daripada neutral, pada {scoreWonjin} mata."
          },
          {
            "p": "Malah pertembungan mengekalkan {scoreChung} mata. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan. Nilai yang hampir sifar akan menyebabkan perkhidmatan ini menjatuhkan hukuman ke atas dua orang, jadi julatnya dikekalkan cukup luas untuk menunjukkan perbezaan tanpa menjatuhkan hukuman."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodiak",
    "title": "Mengapa keserasian zodiak mempertimbangkan cabang tahun?",
    "summary": "Zodiak adalah cabang bumi bagi tahun kelahiran. Ini menjelaskan mengapa ia berasal dari tiang tahun saju dan bukan tahun kalendar, serta menjelaskan kepentingan keserasian zodiak.",
    "backLabel": "Asas Pengiraan",
    "sections": [
      {
        "title": "Zodiak adalah cabang bumi bagi tahun kelahiran",
        "blocks": [
          {
            "p": "Saju terdiri daripada empat tiang: tahun, bulan, hari, dan jam, dengan setiap tiang mengandungi satu pangkal langit dan satu cabang bumi. **Cabang tahun** adalah yang membawa haiwan yang kita panggil tanda zodiak."
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
                  "Biri-biri"
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
        "title": "Kami menggunakan tahun saju, bukan tahun kalendar",
        "blocks": [
          {
            "p": "Titik di mana zodiak berubah bukanlah 1 Januari kalendar solar atau Tahun Baru Lunar. Standard untuk menukar tahun dalam saju adalah **Ipchun**. Oleh itu, mereka yang lahir pada bulan Januari atau awal Februari mungkin mempunyai tahun zodiak yang berbeza daripada yang ada dalam kalendar."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sebab kami tidak bertanya secara langsung tentang zodiak",
        "blocks": [
          {
            "p": "Inilah sebabnya kami hanya mengumpul tarikh lahir tanpa bertanya tentang zodiak di skrin input. Apabila enjin saju mengira cabang tahun, sempadan Ipchun disesuaikan secara automatik. Jika anda memilihnya secara langsung, seseorang yang lahir pada awal Februari mungkin memilih zodiak yang tidak sepadan dengan zodiak sebenar mereka."
          }
        ]
      },
      {
        "title": "Keserasian zodiak hanya mempertimbangkan satu hubungan",
        "blocks": [
          {
            "p": "Pengiraan keserasian zodiak adalah mudah. Ia membandingkan cabang tahun dua orang untuk menentukan sama ada hubungan itu harmoni, bertembung, atau ketidakselarasan yang tenang, dan menggunakan skor itu seperti adanya. Oleh kerana hanya ada satu item, tidak perlu mengagihkan berat."
          },
          {
            "p": "Skor untuk setiap hubungan disenaraikan dalam [Jadual Hubungan Dua Belas Cabang](/guide/branches). Keserasian cabang hari menggunakan jadual yang sama."
          }
        ]
      },
      {
        "title": "Sebab untuk menentukan berat",
        "blocks": [
          {
            "p": "Keserasian zodiak menyumbang {weightZodiac} kepada kadar pemadanan akhir. Walaupun keserasian saju melihat semua empat tiang, zodiak hanya mempertimbangkan satu karakter, jadi mereka tidak boleh diberi berat yang sama."
          },
          {
            "p": "Namun, terdapat dua sebab mengapa ia tidak dikecualikan."
          },
          {
            "ul": [
              "**Ia adalah item yang paling mudah difahami secara intuitif**. Walaupun tanpa mengetahui perbendaharaan kata tradisi, 'harimau dan monyet bertembung' adalah masuk akal.",
              "**Ia adalah satu-satunya paksi yang tidak berfluktuasi walaupun waktu kelahiran tidak diketahui**. Jika anda tidak tahu waktu, tiang jam hilang dan kekuatan lima elemen berubah, tetapi cabang tahun tetap sama."
            ]
          }
        ]
      },
      {
        "title": "Anda juga boleh melihat keserasian zodiak secara berasingan",
        "blocks": [
          {
            "p": "Di skrin keputusan, kami menunjukkan skor untuk kedua-dua keserasian saju dan keserasian zodiak secara berasingan. Jika hanya kadar pemadanan akhir yang dipersembahkan, tidak jelas dari mana angka itu berasal. Jika dua nilai sangat berbeza, itu sendiri berbaloi untuk diperhatikan."
          }
        ]
      }
    ]
  },
  "guide/zodiac-rat": {
    "eyebrow": "Mengikut haiwan",
    "title": "Bagaimana Tikus Bertemu Dua Belas Haiwan Zodiak",
    "summary": "Hubungan apakah yang dimiliki Tikus (子) dengan setiap satu daripada dua belas haiwan zodiak, berapa skor setiap satu, dan berapa bahagian daripada kadar padanan akhir yang diambil oleh skor itu — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Tikus ialah cabang yang pertama daripada dua belas cabang",
        "blocks": [
          {
            "p": "Tikus ialah seseorang yang cabang tahun kelahirannya **子**. 子 ialah cabang bumi yang pertama daripada dua belas cabang bumi, dan apabila dua belas watak disusun dalam bulatan, ia berada tepat bertentangan dengan 午 (Kuda)."
          },
          {
            "p": "Baris yang dipaparkan oleh keputusan keserasian untuk orang Tikus ialah: \"Cepat perasan dan cepat mengamankan apa yang penting. Paling awal bergerak ketika krisis.\" Baris ini tiada kaitan dengan skor hubungan dan tidak menjejaskan skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas haiwan zodiak sekali pandang",
        "blocks": [
          {
            "p": "Setiap haiwan lain diletakkan bersebelahan dengan Tikus secara bergilir. Hanya pasangan yang diiktiraf perkhidmatan ini sebagai keharmonian ditulis sebagai hubungan; selebihnya neutral."
          },
          {
            "table": {
              "caption": "Tikus dan dua belas haiwan zodiak",
              "head": [
                "Haiwan lain",
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
                  "Lembu (丑)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Harimau (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Arnab (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Naga (辰)",
                  "Triad separuh",
                  "{scoreBanhap}"
                ],
                [
                  "Ular (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuda (午)",
                  "Pertembungan",
                  "{scoreChung}"
                ],
                [
                  "Biri-biri (未)",
                  "Ketidakselarasan",
                  "{scoreWonjin}"
                ],
                [
                  "Monyet (申)",
                  "Triad separuh",
                  "{scoreBanhap}"
                ],
                [
                  "Ayam (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Anjing (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Babi (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Lembu — pasangan yang tertarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "子 dan 丑 membentuk keharmonian dengan hanya dua watak. Enam-harmoni ialah hubungan baik yang paling kerap muncul dalam keserasian, dan Tikus dan Lembu mendapat {scoreYukhap}, yang tertinggi yang boleh diperoleh Tikus."
          }
        ]
      },
      {
        "title": "Naga dan Monyet — triad separuh yang termasuk cabang diraja",
        "blocks": [
          {
            "p": "申子辰 ialah satu kumpulan triad (kumpulan air), dan 子 ialah **cabang diraja** di tengahnya. Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi Tikus membentuk triad separuh ({scoreBanhap}) dengan kedua-dua Naga dan Monyet."
          },
          {
            "p": "**Monyet dan Naga bersama-sama**, sebaliknya, tiada watak tengah 子, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral. Walaupun dalam satu kumpulan triad, Tikus yang membentuk triad separuh."
          }
        ]
      },
      {
        "title": "Kuda — pertembungan langsung (Pertembungan)",
        "blocks": [
          {
            "p": "子 dan 午 berada tepat bertentangan antara satu sama lain dalam bulatan. Perkhidmatan ini mengekalkan {scoreChung} mata walaupun untuk pertembungan. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan, dan memberi skor yang hampir ke dasar sama dengan menjatuhkan hukuman ke atas dua orang. Walaupun begitu, ia ialah skor terendah yang boleh diterima Tikus."
          }
        ]
      },
      {
        "title": "Biri-biri — ketidakselarasan yang senyap (Ketidakselarasan)",
        "blocks": [
          {
            "p": "子 dan 未 berada betul-betul bersebelahan dengan 午 (Kuda), kedudukan pertembungan, dan secara tradisinya dilihat sebagai pasangan yang saling berdendam namun tidak dapat berpisah. Ia kelihatan tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan, jadi ia mendapat {scoreWonjin} — lebih tinggi daripada pertembungan ({scoreChung}) dan lebih rendah daripada neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "6 haiwan lain, dan Tikus dengan Tikus yang lain",
        "blocks": [
          {
            "p": "Harimau, Arnab, Ular, Ayam, Anjing dan Babi bukan keharmonian, pertembungan mahupun ketidakselarasan dengan Tikus: ia **neutral** dan mendapat {scoreNeutral}. Ia ialah garis asas, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang Tikus mendapat {scoreSame}. Ini bermaksud mereka serupa, bukan saling tertarik, jadi ia berada sedikit di atas neutral."
          }
        ]
      },
      {
        "title": "Berapa bahagian daripada kadar padanan akhir yang diambil oleh skor ini",
        "blocks": [
          {
            "p": "Terdapat dua tempat di mana cabang dua orang diletakkan bersebelahan."
          },
          {
            "ul": [
              "**Keserasian zodiak** melihat cabang tahun kelahiran. Ia mengambil {weightZodiac} daripada kadar padanan akhir.",
              "**Keserasian cabang hari** melihat cabang hari kelahiran. Ia mengambil {weightDayBranch} daripada keserasian saju ({weightSaju}), iaitu {weightDayBranchTotal} daripada kadar padanan akhir."
            ]
          },
          {
            "p": "Sebagai contoh, apabila orang Tikus bertemu orang Kuda, keserasian zodiak memberikan pertembungan. Jika semua perkara lain sama, kadar padanan akhir menjadi {swingZodiacChung} mata lebih rendah berbanding pasangan neutral. Dengan orang Lembu ia ialah enam-harmoni, dan kadar itu menjadi {swingZodiacYukhap} mata lebih tinggi."
          },
          {
            "p": "Cabang tahun dan cabang hari boleh berbeza. Dua orang Tikus yang cabang harinya ialah 子 dan 午 mendapat cabang yang sama ({scoreSame}) dalam keserasian zodiak dan pertembungan ({scoreChung}) dalam keserasian cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang.",
              "Carta lengkap tentang skor setiap hubungan terdapat dalam [carta dua belas cabang](/guide/branches), dan sebab zodiak dibaca daripada cabang tahun terdapat dalam [Mengapa keserasian zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Haiwan lain dipaparkan dengan cara yang sama. [Lembu](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Arnab](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Biri-biri](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-ox": {
    "eyebrow": "Mengikut haiwan",
    "title": "Bagaimana Lembu Bertemu Dua Belas Haiwan Zodiak",
    "summary": "Hubungan apakah yang dimiliki Lembu (丑) dengan setiap satu daripada dua belas haiwan zodiak, berapa skor setiap satu, dan berapa bahagian daripada kadar padanan akhir yang diambil oleh skor itu — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Lembu ialah cabang yang kedua daripada dua belas cabang",
        "blocks": [
          {
            "p": "Lembu ialah seseorang yang cabang tahun kelahirannya **丑**. 丑 ialah cabang bumi yang kedua daripada dua belas cabang bumi, dan apabila dua belas watak disusun dalam bulatan, ia berada tepat bertentangan dengan 未 (Biri-biri)."
          },
          {
            "p": "Baris yang dipaparkan oleh keputusan keserasian untuk orang Lembu ialah: \"Nampak perlahan tetapi menyelesaikannya sampai habis. Apa yang dipikul, tidak dilepaskan.\" Baris ini tiada kaitan dengan skor hubungan dan tidak menjejaskan skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas haiwan zodiak sekali pandang",
        "blocks": [
          {
            "p": "Setiap haiwan lain diletakkan bersebelahan dengan Lembu secara bergilir. Hanya pasangan yang diiktiraf perkhidmatan ini sebagai keharmonian ditulis sebagai hubungan; selebihnya neutral."
          },
          {
            "table": {
              "caption": "Lembu dan dua belas haiwan zodiak",
              "head": [
                "Haiwan lain",
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
                  "Lembu (丑)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Harimau (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Arnab (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Naga (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ular (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuda (午)",
                  "Ketidakselarasan",
                  "{scoreWonjin}"
                ],
                [
                  "Biri-biri (未)",
                  "Pertembungan",
                  "{scoreChung}"
                ],
                [
                  "Monyet (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ayam (酉)",
                  "Triad separuh",
                  "{scoreBanhap}"
                ],
                [
                  "Anjing (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Babi (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Tikus — pasangan yang tertarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "丑 dan 子 membentuk keharmonian dengan hanya dua watak. Enam-harmoni ialah hubungan baik yang paling kerap muncul dalam keserasian, dan Lembu dan Tikus mendapat {scoreYukhap}, yang tertinggi yang boleh diperoleh Lembu."
          }
        ]
      },
      {
        "title": "Ayam — triad separuh yang termasuk cabang diraja",
        "blocks": [
          {
            "p": "巳酉丑 ialah satu kumpulan triad (kumpulan logam), dan 酉 ialah **cabang diraja** di tengahnya. Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi Lembu membentuk triad separuh ({scoreBanhap}) hanya dengan Ayam."
          },
          {
            "p": "Dengan Ular (巳) daripada kumpulan yang sama, watak tengah 酉 tiada, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral ({scoreNeutral}). Tergolong dalam kumpulan yang sama tidak menjadikan setiap pasangan sebagai keharmonian."
          }
        ]
      },
      {
        "title": "Biri-biri — pertembungan langsung (Pertembungan)",
        "blocks": [
          {
            "p": "丑 dan 未 berada tepat bertentangan antara satu sama lain dalam bulatan. Perkhidmatan ini mengekalkan {scoreChung} mata walaupun untuk pertembungan. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan, dan memberi skor yang hampir ke dasar sama dengan menjatuhkan hukuman ke atas dua orang. Walaupun begitu, ia ialah skor terendah yang boleh diterima Lembu."
          }
        ]
      },
      {
        "title": "Kuda — ketidakselarasan yang senyap (Ketidakselarasan)",
        "blocks": [
          {
            "p": "丑 dan 午 berada betul-betul bersebelahan dengan 未 (Biri-biri), kedudukan pertembungan, dan secara tradisinya dilihat sebagai pasangan yang saling berdendam namun tidak dapat berpisah. Ia kelihatan tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan, jadi ia mendapat {scoreWonjin} — lebih tinggi daripada pertembungan ({scoreChung}) dan lebih rendah daripada neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "7 haiwan lain, dan Lembu dengan Lembu yang lain",
        "blocks": [
          {
            "p": "Harimau, Arnab, Naga, Ular, Monyet, Anjing dan Babi bukan keharmonian, pertembungan mahupun ketidakselarasan dengan Lembu: ia **neutral** dan mendapat {scoreNeutral}. Ia ialah garis asas, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang Lembu mendapat {scoreSame}. Ini bermaksud mereka serupa, bukan saling tertarik, jadi ia berada sedikit di atas neutral."
          }
        ]
      },
      {
        "title": "Berapa bahagian daripada kadar padanan akhir yang diambil oleh skor ini",
        "blocks": [
          {
            "p": "Terdapat dua tempat di mana cabang dua orang diletakkan bersebelahan."
          },
          {
            "ul": [
              "**Keserasian zodiak** melihat cabang tahun kelahiran. Ia mengambil {weightZodiac} daripada kadar padanan akhir.",
              "**Keserasian cabang hari** melihat cabang hari kelahiran. Ia mengambil {weightDayBranch} daripada keserasian saju ({weightSaju}), iaitu {weightDayBranchTotal} daripada kadar padanan akhir."
            ]
          },
          {
            "p": "Sebagai contoh, apabila orang Lembu bertemu orang Biri-biri, keserasian zodiak memberikan pertembungan. Jika semua perkara lain sama, kadar padanan akhir menjadi {swingZodiacChung} mata lebih rendah berbanding pasangan neutral. Dengan orang Tikus ia ialah enam-harmoni, dan kadar itu menjadi {swingZodiacYukhap} mata lebih tinggi."
          },
          {
            "p": "Cabang tahun dan cabang hari boleh berbeza. Dua orang Lembu yang cabang harinya ialah 丑 dan 未 mendapat cabang yang sama ({scoreSame}) dalam keserasian zodiak dan pertembungan ({scoreChung}) dalam keserasian cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang.",
              "Carta lengkap tentang skor setiap hubungan terdapat dalam [carta dua belas cabang](/guide/branches), dan sebab zodiak dibaca daripada cabang tahun terdapat dalam [Mengapa keserasian zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Haiwan lain dipaparkan dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Harimau](/guide/zodiac-tiger) · [Arnab](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Biri-biri](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-tiger": {
    "eyebrow": "Mengikut haiwan",
    "title": "Bagaimana Harimau Bertemu Dua Belas Haiwan Zodiak",
    "summary": "Hubungan apakah yang dimiliki Harimau (寅) dengan setiap satu daripada dua belas haiwan zodiak, berapa skor setiap satu, dan berapa bahagian daripada kadar padanan akhir yang diambil oleh skor itu — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Harimau ialah cabang yang ketiga daripada dua belas cabang",
        "blocks": [
          {
            "p": "Harimau ialah seseorang yang cabang tahun kelahirannya **寅**. 寅 ialah cabang bumi yang ketiga daripada dua belas cabang bumi, dan apabila dua belas watak disusun dalam bulatan, ia berada tepat bertentangan dengan 申 (Monyet)."
          },
          {
            "p": "Baris yang dipaparkan oleh keputusan keserasian untuk orang Harimau ialah: \"Berani dan berada di hadapan. Tidak boleh membiarkan ketidakadilan berlalu.\" Baris ini tiada kaitan dengan skor hubungan dan tidak menjejaskan skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas haiwan zodiak sekali pandang",
        "blocks": [
          {
            "p": "Setiap haiwan lain diletakkan bersebelahan dengan Harimau secara bergilir. Hanya pasangan yang diiktiraf perkhidmatan ini sebagai keharmonian ditulis sebagai hubungan; selebihnya neutral."
          },
          {
            "table": {
              "caption": "Harimau dan dua belas haiwan zodiak",
              "head": [
                "Haiwan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Lembu (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Harimau (寅)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Arnab (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Naga (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ular (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuda (午)",
                  "Triad separuh",
                  "{scoreBanhap}"
                ],
                [
                  "Biri-biri (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Monyet (申)",
                  "Pertembungan",
                  "{scoreChung}"
                ],
                [
                  "Ayam (酉)",
                  "Ketidakselarasan",
                  "{scoreWonjin}"
                ],
                [
                  "Anjing (戌)",
                  "Neutral",
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
        "title": "Babi — pasangan yang tertarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "寅 dan 亥 membentuk keharmonian dengan hanya dua watak. Enam-harmoni ialah hubungan baik yang paling kerap muncul dalam keserasian, dan Harimau dan Babi mendapat {scoreYukhap}, yang tertinggi yang boleh diperoleh Harimau."
          }
        ]
      },
      {
        "title": "Kuda — triad separuh yang termasuk cabang diraja",
        "blocks": [
          {
            "p": "寅午戌 ialah satu kumpulan triad (kumpulan api), dan 午 ialah **cabang diraja** di tengahnya. Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi Harimau membentuk triad separuh ({scoreBanhap}) hanya dengan Kuda."
          },
          {
            "p": "Dengan Anjing (戌) daripada kumpulan yang sama, watak tengah 午 tiada, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral ({scoreNeutral}). Tergolong dalam kumpulan yang sama tidak menjadikan setiap pasangan sebagai keharmonian."
          }
        ]
      },
      {
        "title": "Monyet — pertembungan langsung (Pertembungan)",
        "blocks": [
          {
            "p": "寅 dan 申 berada tepat bertentangan antara satu sama lain dalam bulatan. Perkhidmatan ini mengekalkan {scoreChung} mata walaupun untuk pertembungan. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan, dan memberi skor yang hampir ke dasar sama dengan menjatuhkan hukuman ke atas dua orang. Walaupun begitu, ia ialah skor terendah yang boleh diterima Harimau."
          }
        ]
      },
      {
        "title": "Ayam — ketidakselarasan yang senyap (Ketidakselarasan)",
        "blocks": [
          {
            "p": "寅 dan 酉 berada betul-betul bersebelahan dengan 申 (Monyet), kedudukan pertembungan, dan secara tradisinya dilihat sebagai pasangan yang saling berdendam namun tidak dapat berpisah. Ia kelihatan tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan, jadi ia mendapat {scoreWonjin} — lebih tinggi daripada pertembungan ({scoreChung}) dan lebih rendah daripada neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "7 haiwan lain, dan Harimau dengan Harimau yang lain",
        "blocks": [
          {
            "p": "Tikus, Lembu, Arnab, Naga, Ular, Biri-biri dan Anjing bukan keharmonian, pertembungan mahupun ketidakselarasan dengan Harimau: ia **neutral** dan mendapat {scoreNeutral}. Ia ialah garis asas, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang Harimau mendapat {scoreSame}. Ini bermaksud mereka serupa, bukan saling tertarik, jadi ia berada sedikit di atas neutral."
          }
        ]
      },
      {
        "title": "Berapa bahagian daripada kadar padanan akhir yang diambil oleh skor ini",
        "blocks": [
          {
            "p": "Terdapat dua tempat di mana cabang dua orang diletakkan bersebelahan."
          },
          {
            "ul": [
              "**Keserasian zodiak** melihat cabang tahun kelahiran. Ia mengambil {weightZodiac} daripada kadar padanan akhir.",
              "**Keserasian cabang hari** melihat cabang hari kelahiran. Ia mengambil {weightDayBranch} daripada keserasian saju ({weightSaju}), iaitu {weightDayBranchTotal} daripada kadar padanan akhir."
            ]
          },
          {
            "p": "Sebagai contoh, apabila orang Harimau bertemu orang Monyet, keserasian zodiak memberikan pertembungan. Jika semua perkara lain sama, kadar padanan akhir menjadi {swingZodiacChung} mata lebih rendah berbanding pasangan neutral. Dengan orang Babi ia ialah enam-harmoni, dan kadar itu menjadi {swingZodiacYukhap} mata lebih tinggi."
          },
          {
            "p": "Cabang tahun dan cabang hari boleh berbeza. Dua orang Harimau yang cabang harinya ialah 寅 dan 申 mendapat cabang yang sama ({scoreSame}) dalam keserasian zodiak dan pertembungan ({scoreChung}) dalam keserasian cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang.",
              "Carta lengkap tentang skor setiap hubungan terdapat dalam [carta dua belas cabang](/guide/branches), dan sebab zodiak dibaca daripada cabang tahun terdapat dalam [Mengapa keserasian zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Haiwan lain dipaparkan dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Lembu](/guide/zodiac-ox) · [Arnab](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Biri-biri](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rabbit": {
    "eyebrow": "Mengikut haiwan",
    "title": "Bagaimana Arnab Bertemu Dua Belas Haiwan Zodiak",
    "summary": "Hubungan apakah yang dimiliki Arnab (卯) dengan setiap satu daripada dua belas haiwan zodiak, berapa skor setiap satu, dan berapa bahagian daripada kadar padanan akhir yang diambil oleh skor itu — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Arnab ialah cabang yang keempat daripada dua belas cabang",
        "blocks": [
          {
            "p": "Arnab ialah seseorang yang cabang tahun kelahirannya **卯**. 卯 ialah cabang bumi yang keempat daripada dua belas cabang bumi, dan apabila dua belas watak disusun dalam bulatan, ia berada tepat bertentangan dengan 酉 (Ayam)."
          },
          {
            "p": "Baris yang dipaparkan oleh keputusan keserasian untuk orang Arnab ialah: \"Lembut dan tajam pengamatannya. Tahu berpusing daripada berlanggar.\" Baris ini tiada kaitan dengan skor hubungan dan tidak menjejaskan skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas haiwan zodiak sekali pandang",
        "blocks": [
          {
            "p": "Setiap haiwan lain diletakkan bersebelahan dengan Arnab secara bergilir. Hanya pasangan yang diiktiraf perkhidmatan ini sebagai keharmonian ditulis sebagai hubungan; selebihnya neutral."
          },
          {
            "table": {
              "caption": "Arnab dan dua belas haiwan zodiak",
              "head": [
                "Haiwan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Lembu (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Harimau (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Arnab (卯)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Naga (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ular (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuda (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Biri-biri (未)",
                  "Triad separuh",
                  "{scoreBanhap}"
                ],
                [
                  "Monyet (申)",
                  "Ketidakselarasan",
                  "{scoreWonjin}"
                ],
                [
                  "Ayam (酉)",
                  "Pertembungan",
                  "{scoreChung}"
                ],
                [
                  "Anjing (戌)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Babi (亥)",
                  "Triad separuh",
                  "{scoreBanhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Anjing — pasangan yang tertarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "卯 dan 戌 membentuk keharmonian dengan hanya dua watak. Enam-harmoni ialah hubungan baik yang paling kerap muncul dalam keserasian, dan Arnab dan Anjing mendapat {scoreYukhap}, yang tertinggi yang boleh diperoleh Arnab."
          }
        ]
      },
      {
        "title": "Biri-biri dan Babi — triad separuh yang termasuk cabang diraja",
        "blocks": [
          {
            "p": "亥卯未 ialah satu kumpulan triad (kumpulan kayu), dan 卯 ialah **cabang diraja** di tengahnya. Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi Arnab membentuk triad separuh ({scoreBanhap}) dengan kedua-dua Biri-biri dan Babi."
          },
          {
            "p": "**Babi dan Biri-biri bersama-sama**, sebaliknya, tiada watak tengah 卯, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral. Walaupun dalam satu kumpulan triad, Arnab yang membentuk triad separuh."
          }
        ]
      },
      {
        "title": "Ayam — pertembungan langsung (Pertembungan)",
        "blocks": [
          {
            "p": "卯 dan 酉 berada tepat bertentangan antara satu sama lain dalam bulatan. Perkhidmatan ini mengekalkan {scoreChung} mata walaupun untuk pertembungan. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan, dan memberi skor yang hampir ke dasar sama dengan menjatuhkan hukuman ke atas dua orang. Walaupun begitu, ia ialah skor terendah yang boleh diterima Arnab."
          }
        ]
      },
      {
        "title": "Monyet — ketidakselarasan yang senyap (Ketidakselarasan)",
        "blocks": [
          {
            "p": "卯 dan 申 berada betul-betul bersebelahan dengan 酉 (Ayam), kedudukan pertembungan, dan secara tradisinya dilihat sebagai pasangan yang saling berdendam namun tidak dapat berpisah. Ia kelihatan tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan, jadi ia mendapat {scoreWonjin} — lebih tinggi daripada pertembungan ({scoreChung}) dan lebih rendah daripada neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "6 haiwan lain, dan Arnab dengan Arnab yang lain",
        "blocks": [
          {
            "p": "Tikus, Lembu, Harimau, Naga, Ular dan Kuda bukan keharmonian, pertembungan mahupun ketidakselarasan dengan Arnab: ia **neutral** dan mendapat {scoreNeutral}. Ia ialah garis asas, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang Arnab mendapat {scoreSame}. Ini bermaksud mereka serupa, bukan saling tertarik, jadi ia berada sedikit di atas neutral."
          }
        ]
      },
      {
        "title": "Berapa bahagian daripada kadar padanan akhir yang diambil oleh skor ini",
        "blocks": [
          {
            "p": "Terdapat dua tempat di mana cabang dua orang diletakkan bersebelahan."
          },
          {
            "ul": [
              "**Keserasian zodiak** melihat cabang tahun kelahiran. Ia mengambil {weightZodiac} daripada kadar padanan akhir.",
              "**Keserasian cabang hari** melihat cabang hari kelahiran. Ia mengambil {weightDayBranch} daripada keserasian saju ({weightSaju}), iaitu {weightDayBranchTotal} daripada kadar padanan akhir."
            ]
          },
          {
            "p": "Sebagai contoh, apabila orang Arnab bertemu orang Ayam, keserasian zodiak memberikan pertembungan. Jika semua perkara lain sama, kadar padanan akhir menjadi {swingZodiacChung} mata lebih rendah berbanding pasangan neutral. Dengan orang Anjing ia ialah enam-harmoni, dan kadar itu menjadi {swingZodiacYukhap} mata lebih tinggi."
          },
          {
            "p": "Cabang tahun dan cabang hari boleh berbeza. Dua orang Arnab yang cabang harinya ialah 卯 dan 酉 mendapat cabang yang sama ({scoreSame}) dalam keserasian zodiak dan pertembungan ({scoreChung}) dalam keserasian cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang.",
              "Carta lengkap tentang skor setiap hubungan terdapat dalam [carta dua belas cabang](/guide/branches), dan sebab zodiak dibaca daripada cabang tahun terdapat dalam [Mengapa keserasian zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Haiwan lain dipaparkan dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Lembu](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Biri-biri](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dragon": {
    "eyebrow": "Mengikut haiwan",
    "title": "Bagaimana Naga Bertemu Dua Belas Haiwan Zodiak",
    "summary": "Hubungan apakah yang dimiliki Naga (辰) dengan setiap satu daripada dua belas haiwan zodiak, berapa skor setiap satu, dan berapa bahagian daripada kadar padanan akhir yang diambil oleh skor itu — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Naga ialah cabang yang kelima daripada dua belas cabang",
        "blocks": [
          {
            "p": "Naga ialah seseorang yang cabang tahun kelahirannya **辰**. 辰 ialah cabang bumi yang kelima daripada dua belas cabang bumi, dan apabila dua belas watak disusun dalam bulatan, ia berada tepat bertentangan dengan 戌 (Anjing)."
          },
          {
            "p": "Baris yang dipaparkan oleh keputusan keserasian untuk orang Naga ialah: \"Besar hati dengan cita-cita tinggi. Jarang berpuas hati dengan yang biasa.\" Baris ini tiada kaitan dengan skor hubungan dan tidak menjejaskan skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas haiwan zodiak sekali pandang",
        "blocks": [
          {
            "p": "Setiap haiwan lain diletakkan bersebelahan dengan Naga secara bergilir. Hanya pasangan yang diiktiraf perkhidmatan ini sebagai keharmonian ditulis sebagai hubungan; selebihnya neutral."
          },
          {
            "table": {
              "caption": "Naga dan dua belas haiwan zodiak",
              "head": [
                "Haiwan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Triad separuh",
                  "{scoreBanhap}"
                ],
                [
                  "Lembu (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Harimau (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Arnab (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Naga (辰)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Ular (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuda (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Biri-biri (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Monyet (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ayam (酉)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Anjing (戌)",
                  "Pertembungan",
                  "{scoreChung}"
                ],
                [
                  "Babi (亥)",
                  "Ketidakselarasan",
                  "{scoreWonjin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ayam — pasangan yang tertarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "辰 dan 酉 membentuk keharmonian dengan hanya dua watak. Enam-harmoni ialah hubungan baik yang paling kerap muncul dalam keserasian, dan Naga dan Ayam mendapat {scoreYukhap}, yang tertinggi yang boleh diperoleh Naga."
          }
        ]
      },
      {
        "title": "Tikus — triad separuh yang termasuk cabang diraja",
        "blocks": [
          {
            "p": "申子辰 ialah satu kumpulan triad (kumpulan air), dan 子 ialah **cabang diraja** di tengahnya. Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi Naga membentuk triad separuh ({scoreBanhap}) hanya dengan Tikus."
          },
          {
            "p": "Dengan Monyet (申) daripada kumpulan yang sama, watak tengah 子 tiada, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral ({scoreNeutral}). Tergolong dalam kumpulan yang sama tidak menjadikan setiap pasangan sebagai keharmonian."
          }
        ]
      },
      {
        "title": "Anjing — pertembungan langsung (Pertembungan)",
        "blocks": [
          {
            "p": "辰 dan 戌 berada tepat bertentangan antara satu sama lain dalam bulatan. Perkhidmatan ini mengekalkan {scoreChung} mata walaupun untuk pertembungan. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan, dan memberi skor yang hampir ke dasar sama dengan menjatuhkan hukuman ke atas dua orang. Walaupun begitu, ia ialah skor terendah yang boleh diterima Naga."
          }
        ]
      },
      {
        "title": "Babi — ketidakselarasan yang senyap (Ketidakselarasan)",
        "blocks": [
          {
            "p": "辰 dan 亥 berada betul-betul bersebelahan dengan 戌 (Anjing), kedudukan pertembungan, dan secara tradisinya dilihat sebagai pasangan yang saling berdendam namun tidak dapat berpisah. Ia kelihatan tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan, jadi ia mendapat {scoreWonjin} — lebih tinggi daripada pertembungan ({scoreChung}) dan lebih rendah daripada neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "7 haiwan lain, dan Naga dengan Naga yang lain",
        "blocks": [
          {
            "p": "Lembu, Harimau, Arnab, Ular, Kuda, Biri-biri dan Monyet bukan keharmonian, pertembungan mahupun ketidakselarasan dengan Naga: ia **neutral** dan mendapat {scoreNeutral}. Ia ialah garis asas, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang Naga mendapat {scoreSame}. Ini bermaksud mereka serupa, bukan saling tertarik, jadi ia berada sedikit di atas neutral."
          }
        ]
      },
      {
        "title": "Berapa bahagian daripada kadar padanan akhir yang diambil oleh skor ini",
        "blocks": [
          {
            "p": "Terdapat dua tempat di mana cabang dua orang diletakkan bersebelahan."
          },
          {
            "ul": [
              "**Keserasian zodiak** melihat cabang tahun kelahiran. Ia mengambil {weightZodiac} daripada kadar padanan akhir.",
              "**Keserasian cabang hari** melihat cabang hari kelahiran. Ia mengambil {weightDayBranch} daripada keserasian saju ({weightSaju}), iaitu {weightDayBranchTotal} daripada kadar padanan akhir."
            ]
          },
          {
            "p": "Sebagai contoh, apabila orang Naga bertemu orang Anjing, keserasian zodiak memberikan pertembungan. Jika semua perkara lain sama, kadar padanan akhir menjadi {swingZodiacChung} mata lebih rendah berbanding pasangan neutral. Dengan orang Ayam ia ialah enam-harmoni, dan kadar itu menjadi {swingZodiacYukhap} mata lebih tinggi."
          },
          {
            "p": "Cabang tahun dan cabang hari boleh berbeza. Dua orang Naga yang cabang harinya ialah 辰 dan 戌 mendapat cabang yang sama ({scoreSame}) dalam keserasian zodiak dan pertembungan ({scoreChung}) dalam keserasian cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang.",
              "Carta lengkap tentang skor setiap hubungan terdapat dalam [carta dua belas cabang](/guide/branches), dan sebab zodiak dibaca daripada cabang tahun terdapat dalam [Mengapa keserasian zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Haiwan lain dipaparkan dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Lembu](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Arnab](/guide/zodiac-rabbit) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Biri-biri](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-snake": {
    "eyebrow": "Mengikut haiwan",
    "title": "Bagaimana Ular Bertemu Dua Belas Haiwan Zodiak",
    "summary": "Hubungan apakah yang dimiliki Ular (巳) dengan setiap satu daripada dua belas haiwan zodiak, berapa skor setiap satu, dan berapa bahagian daripada kadar padanan akhir yang diambil oleh skor itu — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Ular ialah cabang yang keenam daripada dua belas cabang",
        "blocks": [
          {
            "p": "Ular ialah seseorang yang cabang tahun kelahirannya **巳**. 巳 ialah cabang bumi yang keenam daripada dua belas cabang bumi, dan apabila dua belas watak disusun dalam bulatan, ia berada tepat bertentangan dengan 亥 (Babi)."
          },
          {
            "p": "Baris yang dipaparkan oleh keputusan keserasian untuk orang Ular ialah: \"Menyimpan pandangannya sendiri dan berfikir mendalam. Pertimbangannya tepat.\" Baris ini tiada kaitan dengan skor hubungan dan tidak menjejaskan skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas haiwan zodiak sekali pandang",
        "blocks": [
          {
            "p": "Setiap haiwan lain diletakkan bersebelahan dengan Ular secara bergilir. Hanya pasangan yang diiktiraf perkhidmatan ini sebagai keharmonian ditulis sebagai hubungan; selebihnya neutral."
          },
          {
            "table": {
              "caption": "Ular dan dua belas haiwan zodiak",
              "head": [
                "Haiwan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Lembu (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Harimau (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Arnab (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Naga (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ular (巳)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Kuda (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Biri-biri (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Monyet (申)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Ayam (酉)",
                  "Triad separuh",
                  "{scoreBanhap}"
                ],
                [
                  "Anjing (戌)",
                  "Ketidakselarasan",
                  "{scoreWonjin}"
                ],
                [
                  "Babi (亥)",
                  "Pertembungan",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Monyet — pasangan yang tertarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "巳 dan 申 membentuk keharmonian dengan hanya dua watak. Enam-harmoni ialah hubungan baik yang paling kerap muncul dalam keserasian, dan Ular dan Monyet mendapat {scoreYukhap}, yang tertinggi yang boleh diperoleh Ular."
          }
        ]
      },
      {
        "title": "Ayam — triad separuh yang termasuk cabang diraja",
        "blocks": [
          {
            "p": "巳酉丑 ialah satu kumpulan triad (kumpulan logam), dan 酉 ialah **cabang diraja** di tengahnya. Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi Ular membentuk triad separuh ({scoreBanhap}) hanya dengan Ayam."
          },
          {
            "p": "Dengan Lembu (丑) daripada kumpulan yang sama, watak tengah 酉 tiada, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral ({scoreNeutral}). Tergolong dalam kumpulan yang sama tidak menjadikan setiap pasangan sebagai keharmonian."
          }
        ]
      },
      {
        "title": "Babi — pertembungan langsung (Pertembungan)",
        "blocks": [
          {
            "p": "巳 dan 亥 berada tepat bertentangan antara satu sama lain dalam bulatan. Perkhidmatan ini mengekalkan {scoreChung} mata walaupun untuk pertembungan. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan, dan memberi skor yang hampir ke dasar sama dengan menjatuhkan hukuman ke atas dua orang. Walaupun begitu, ia ialah skor terendah yang boleh diterima Ular."
          }
        ]
      },
      {
        "title": "Anjing — ketidakselarasan yang senyap (Ketidakselarasan)",
        "blocks": [
          {
            "p": "巳 dan 戌 berada betul-betul bersebelahan dengan 亥 (Babi), kedudukan pertembungan, dan secara tradisinya dilihat sebagai pasangan yang saling berdendam namun tidak dapat berpisah. Ia kelihatan tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan, jadi ia mendapat {scoreWonjin} — lebih tinggi daripada pertembungan ({scoreChung}) dan lebih rendah daripada neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "7 haiwan lain, dan Ular dengan Ular yang lain",
        "blocks": [
          {
            "p": "Tikus, Lembu, Harimau, Arnab, Naga, Kuda dan Biri-biri bukan keharmonian, pertembungan mahupun ketidakselarasan dengan Ular: ia **neutral** dan mendapat {scoreNeutral}. Ia ialah garis asas, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang Ular mendapat {scoreSame}. Ini bermaksud mereka serupa, bukan saling tertarik, jadi ia berada sedikit di atas neutral."
          }
        ]
      },
      {
        "title": "Berapa bahagian daripada kadar padanan akhir yang diambil oleh skor ini",
        "blocks": [
          {
            "p": "Terdapat dua tempat di mana cabang dua orang diletakkan bersebelahan."
          },
          {
            "ul": [
              "**Keserasian zodiak** melihat cabang tahun kelahiran. Ia mengambil {weightZodiac} daripada kadar padanan akhir.",
              "**Keserasian cabang hari** melihat cabang hari kelahiran. Ia mengambil {weightDayBranch} daripada keserasian saju ({weightSaju}), iaitu {weightDayBranchTotal} daripada kadar padanan akhir."
            ]
          },
          {
            "p": "Sebagai contoh, apabila orang Ular bertemu orang Babi, keserasian zodiak memberikan pertembungan. Jika semua perkara lain sama, kadar padanan akhir menjadi {swingZodiacChung} mata lebih rendah berbanding pasangan neutral. Dengan orang Monyet ia ialah enam-harmoni, dan kadar itu menjadi {swingZodiacYukhap} mata lebih tinggi."
          },
          {
            "p": "Cabang tahun dan cabang hari boleh berbeza. Dua orang Ular yang cabang harinya ialah 巳 dan 亥 mendapat cabang yang sama ({scoreSame}) dalam keserasian zodiak dan pertembungan ({scoreChung}) dalam keserasian cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang.",
              "Carta lengkap tentang skor setiap hubungan terdapat dalam [carta dua belas cabang](/guide/branches), dan sebab zodiak dibaca daripada cabang tahun terdapat dalam [Mengapa keserasian zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Haiwan lain dipaparkan dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Lembu](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Arnab](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Kuda](/guide/zodiac-horse) · [Biri-biri](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-horse": {
    "eyebrow": "Mengikut haiwan",
    "title": "Bagaimana Kuda Bertemu Dua Belas Haiwan Zodiak",
    "summary": "Hubungan apakah yang dimiliki Kuda (午) dengan setiap satu daripada dua belas haiwan zodiak, berapa skor setiap satu, dan berapa bahagian daripada kadar padanan akhir yang diambil oleh skor itu — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Kuda ialah cabang yang ketujuh daripada dua belas cabang",
        "blocks": [
          {
            "p": "Kuda ialah seseorang yang cabang tahun kelahirannya **午**. 午 ialah cabang bumi yang ketujuh daripada dua belas cabang bumi, dan apabila dua belas watak disusun dalam bulatan, ia berada tepat bertentangan dengan 子 (Tikus)."
          },
          {
            "p": "Baris yang dipaparkan oleh keputusan keserasian untuk orang Kuda ialah: \"Ceria dan tidak boleh diam. Dikurung ialah perkara yang paling sukar.\" Baris ini tiada kaitan dengan skor hubungan dan tidak menjejaskan skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas haiwan zodiak sekali pandang",
        "blocks": [
          {
            "p": "Setiap haiwan lain diletakkan bersebelahan dengan Kuda secara bergilir. Hanya pasangan yang diiktiraf perkhidmatan ini sebagai keharmonian ditulis sebagai hubungan; selebihnya neutral."
          },
          {
            "table": {
              "caption": "Kuda dan dua belas haiwan zodiak",
              "head": [
                "Haiwan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Pertembungan",
                  "{scoreChung}"
                ],
                [
                  "Lembu (丑)",
                  "Ketidakselarasan",
                  "{scoreWonjin}"
                ],
                [
                  "Harimau (寅)",
                  "Triad separuh",
                  "{scoreBanhap}"
                ],
                [
                  "Arnab (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Naga (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ular (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuda (午)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Biri-biri (未)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Monyet (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ayam (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Anjing (戌)",
                  "Triad separuh",
                  "{scoreBanhap}"
                ],
                [
                  "Babi (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Biri-biri — pasangan yang tertarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "午 dan 未 membentuk keharmonian dengan hanya dua watak. Enam-harmoni ialah hubungan baik yang paling kerap muncul dalam keserasian, dan Kuda dan Biri-biri mendapat {scoreYukhap}, yang tertinggi yang boleh diperoleh Kuda."
          }
        ]
      },
      {
        "title": "Harimau dan Anjing — triad separuh yang termasuk cabang diraja",
        "blocks": [
          {
            "p": "寅午戌 ialah satu kumpulan triad (kumpulan api), dan 午 ialah **cabang diraja** di tengahnya. Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi Kuda membentuk triad separuh ({scoreBanhap}) dengan kedua-dua Harimau dan Anjing."
          },
          {
            "p": "**Harimau dan Anjing bersama-sama**, sebaliknya, tiada watak tengah 午, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral. Walaupun dalam satu kumpulan triad, Kuda yang membentuk triad separuh."
          }
        ]
      },
      {
        "title": "Tikus — pertembungan langsung (Pertembungan)",
        "blocks": [
          {
            "p": "午 dan 子 berada tepat bertentangan antara satu sama lain dalam bulatan. Perkhidmatan ini mengekalkan {scoreChung} mata walaupun untuk pertembungan. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan, dan memberi skor yang hampir ke dasar sama dengan menjatuhkan hukuman ke atas dua orang. Walaupun begitu, ia ialah skor terendah yang boleh diterima Kuda."
          }
        ]
      },
      {
        "title": "Lembu — ketidakselarasan yang senyap (Ketidakselarasan)",
        "blocks": [
          {
            "p": "午 dan 丑 berada betul-betul bersebelahan dengan 子 (Tikus), kedudukan pertembungan, dan secara tradisinya dilihat sebagai pasangan yang saling berdendam namun tidak dapat berpisah. Ia kelihatan tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan, jadi ia mendapat {scoreWonjin} — lebih tinggi daripada pertembungan ({scoreChung}) dan lebih rendah daripada neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "6 haiwan lain, dan Kuda dengan Kuda yang lain",
        "blocks": [
          {
            "p": "Arnab, Naga, Ular, Monyet, Ayam dan Babi bukan keharmonian, pertembungan mahupun ketidakselarasan dengan Kuda: ia **neutral** dan mendapat {scoreNeutral}. Ia ialah garis asas, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang Kuda mendapat {scoreSame}. Ini bermaksud mereka serupa, bukan saling tertarik, jadi ia berada sedikit di atas neutral."
          }
        ]
      },
      {
        "title": "Berapa bahagian daripada kadar padanan akhir yang diambil oleh skor ini",
        "blocks": [
          {
            "p": "Terdapat dua tempat di mana cabang dua orang diletakkan bersebelahan."
          },
          {
            "ul": [
              "**Keserasian zodiak** melihat cabang tahun kelahiran. Ia mengambil {weightZodiac} daripada kadar padanan akhir.",
              "**Keserasian cabang hari** melihat cabang hari kelahiran. Ia mengambil {weightDayBranch} daripada keserasian saju ({weightSaju}), iaitu {weightDayBranchTotal} daripada kadar padanan akhir."
            ]
          },
          {
            "p": "Sebagai contoh, apabila orang Kuda bertemu orang Tikus, keserasian zodiak memberikan pertembungan. Jika semua perkara lain sama, kadar padanan akhir menjadi {swingZodiacChung} mata lebih rendah berbanding pasangan neutral. Dengan orang Biri-biri ia ialah enam-harmoni, dan kadar itu menjadi {swingZodiacYukhap} mata lebih tinggi."
          },
          {
            "p": "Cabang tahun dan cabang hari boleh berbeza. Dua orang Kuda yang cabang harinya ialah 午 dan 子 mendapat cabang yang sama ({scoreSame}) dalam keserasian zodiak dan pertembungan ({scoreChung}) dalam keserasian cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang.",
              "Carta lengkap tentang skor setiap hubungan terdapat dalam [carta dua belas cabang](/guide/branches), dan sebab zodiak dibaca daripada cabang tahun terdapat dalam [Mengapa keserasian zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Haiwan lain dipaparkan dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Lembu](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Arnab](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Biri-biri](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-goat": {
    "eyebrow": "Mengikut haiwan",
    "title": "Bagaimana Biri-biri Bertemu Dua Belas Haiwan Zodiak",
    "summary": "Hubungan apakah yang dimiliki Biri-biri (未) dengan setiap satu daripada dua belas haiwan zodiak, berapa skor setiap satu, dan berapa bahagian daripada kadar padanan akhir yang diambil oleh skor itu — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Biri-biri ialah cabang yang kelapan daripada dua belas cabang",
        "blocks": [
          {
            "p": "Biri-biri ialah seseorang yang cabang tahun kelahirannya **未**. 未 ialah cabang bumi yang kelapan daripada dua belas cabang bumi, dan apabila dua belas watak disusun dalam bulatan, ia berada tepat bertentangan dengan 丑 (Lembu)."
          },
          {
            "p": "Baris yang dipaparkan oleh keputusan keserasian untuk orang Biri-biri ialah: \"Hangat dan bertimbang rasa. Menyimpan kata-kata kasar untuk masa yang lama.\" Baris ini tiada kaitan dengan skor hubungan dan tidak menjejaskan skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas haiwan zodiak sekali pandang",
        "blocks": [
          {
            "p": "Setiap haiwan lain diletakkan bersebelahan dengan Biri-biri secara bergilir. Hanya pasangan yang diiktiraf perkhidmatan ini sebagai keharmonian ditulis sebagai hubungan; selebihnya neutral."
          },
          {
            "table": {
              "caption": "Biri-biri dan dua belas haiwan zodiak",
              "head": [
                "Haiwan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Ketidakselarasan",
                  "{scoreWonjin}"
                ],
                [
                  "Lembu (丑)",
                  "Pertembungan",
                  "{scoreChung}"
                ],
                [
                  "Harimau (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Arnab (卯)",
                  "Triad separuh",
                  "{scoreBanhap}"
                ],
                [
                  "Naga (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ular (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuda (午)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Biri-biri (未)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Monyet (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ayam (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Anjing (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Babi (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kuda — pasangan yang tertarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "未 dan 午 membentuk keharmonian dengan hanya dua watak. Enam-harmoni ialah hubungan baik yang paling kerap muncul dalam keserasian, dan Biri-biri dan Kuda mendapat {scoreYukhap}, yang tertinggi yang boleh diperoleh Biri-biri."
          }
        ]
      },
      {
        "title": "Arnab — triad separuh yang termasuk cabang diraja",
        "blocks": [
          {
            "p": "亥卯未 ialah satu kumpulan triad (kumpulan kayu), dan 卯 ialah **cabang diraja** di tengahnya. Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi Biri-biri membentuk triad separuh ({scoreBanhap}) hanya dengan Arnab."
          },
          {
            "p": "Dengan Babi (亥) daripada kumpulan yang sama, watak tengah 卯 tiada, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral ({scoreNeutral}). Tergolong dalam kumpulan yang sama tidak menjadikan setiap pasangan sebagai keharmonian."
          }
        ]
      },
      {
        "title": "Lembu — pertembungan langsung (Pertembungan)",
        "blocks": [
          {
            "p": "未 dan 丑 berada tepat bertentangan antara satu sama lain dalam bulatan. Perkhidmatan ini mengekalkan {scoreChung} mata walaupun untuk pertembungan. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan, dan memberi skor yang hampir ke dasar sama dengan menjatuhkan hukuman ke atas dua orang. Walaupun begitu, ia ialah skor terendah yang boleh diterima Biri-biri."
          }
        ]
      },
      {
        "title": "Tikus — ketidakselarasan yang senyap (Ketidakselarasan)",
        "blocks": [
          {
            "p": "未 dan 子 berada betul-betul bersebelahan dengan 丑 (Lembu), kedudukan pertembungan, dan secara tradisinya dilihat sebagai pasangan yang saling berdendam namun tidak dapat berpisah. Ia kelihatan tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan, jadi ia mendapat {scoreWonjin} — lebih tinggi daripada pertembungan ({scoreChung}) dan lebih rendah daripada neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "7 haiwan lain, dan Biri-biri dengan Biri-biri yang lain",
        "blocks": [
          {
            "p": "Harimau, Naga, Ular, Monyet, Ayam, Anjing dan Babi bukan keharmonian, pertembungan mahupun ketidakselarasan dengan Biri-biri: ia **neutral** dan mendapat {scoreNeutral}. Ia ialah garis asas, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang Biri-biri mendapat {scoreSame}. Ini bermaksud mereka serupa, bukan saling tertarik, jadi ia berada sedikit di atas neutral."
          }
        ]
      },
      {
        "title": "Berapa bahagian daripada kadar padanan akhir yang diambil oleh skor ini",
        "blocks": [
          {
            "p": "Terdapat dua tempat di mana cabang dua orang diletakkan bersebelahan."
          },
          {
            "ul": [
              "**Keserasian zodiak** melihat cabang tahun kelahiran. Ia mengambil {weightZodiac} daripada kadar padanan akhir.",
              "**Keserasian cabang hari** melihat cabang hari kelahiran. Ia mengambil {weightDayBranch} daripada keserasian saju ({weightSaju}), iaitu {weightDayBranchTotal} daripada kadar padanan akhir."
            ]
          },
          {
            "p": "Sebagai contoh, apabila orang Biri-biri bertemu orang Lembu, keserasian zodiak memberikan pertembungan. Jika semua perkara lain sama, kadar padanan akhir menjadi {swingZodiacChung} mata lebih rendah berbanding pasangan neutral. Dengan orang Kuda ia ialah enam-harmoni, dan kadar itu menjadi {swingZodiacYukhap} mata lebih tinggi."
          },
          {
            "p": "Cabang tahun dan cabang hari boleh berbeza. Dua orang Biri-biri yang cabang harinya ialah 未 dan 丑 mendapat cabang yang sama ({scoreSame}) dalam keserasian zodiak dan pertembungan ({scoreChung}) dalam keserasian cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang.",
              "Carta lengkap tentang skor setiap hubungan terdapat dalam [carta dua belas cabang](/guide/branches), dan sebab zodiak dibaca daripada cabang tahun terdapat dalam [Mengapa keserasian zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Haiwan lain dipaparkan dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Lembu](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Arnab](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-monkey": {
    "eyebrow": "Mengikut haiwan",
    "title": "Bagaimana Monyet Bertemu Dua Belas Haiwan Zodiak",
    "summary": "Hubungan apakah yang dimiliki Monyet (申) dengan setiap satu daripada dua belas haiwan zodiak, berapa skor setiap satu, dan berapa bahagian daripada kadar padanan akhir yang diambil oleh skor itu — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Monyet ialah cabang yang kesembilan daripada dua belas cabang",
        "blocks": [
          {
            "p": "Monyet ialah seseorang yang cabang tahun kelahirannya **申**. 申 ialah cabang bumi yang kesembilan daripada dua belas cabang bumi, dan apabila dua belas watak disusun dalam bulatan, ia berada tepat bertentangan dengan 寅 (Harimau)."
          },
          {
            "p": "Baris yang dipaparkan oleh keputusan keserasian untuk orang Monyet ialah: \"Banyak akal dan cepat menyesuaikan diri. Bosan dengan perkara yang berulang.\" Baris ini tiada kaitan dengan skor hubungan dan tidak menjejaskan skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas haiwan zodiak sekali pandang",
        "blocks": [
          {
            "p": "Setiap haiwan lain diletakkan bersebelahan dengan Monyet secara bergilir. Hanya pasangan yang diiktiraf perkhidmatan ini sebagai keharmonian ditulis sebagai hubungan; selebihnya neutral."
          },
          {
            "table": {
              "caption": "Monyet dan dua belas haiwan zodiak",
              "head": [
                "Haiwan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Triad separuh",
                  "{scoreBanhap}"
                ],
                [
                  "Lembu (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Harimau (寅)",
                  "Pertembungan",
                  "{scoreChung}"
                ],
                [
                  "Arnab (卯)",
                  "Ketidakselarasan",
                  "{scoreWonjin}"
                ],
                [
                  "Naga (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ular (巳)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Kuda (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Biri-biri (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Monyet (申)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Ayam (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Anjing (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Babi (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ular — pasangan yang tertarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "申 dan 巳 membentuk keharmonian dengan hanya dua watak. Enam-harmoni ialah hubungan baik yang paling kerap muncul dalam keserasian, dan Monyet dan Ular mendapat {scoreYukhap}, yang tertinggi yang boleh diperoleh Monyet."
          }
        ]
      },
      {
        "title": "Tikus — triad separuh yang termasuk cabang diraja",
        "blocks": [
          {
            "p": "申子辰 ialah satu kumpulan triad (kumpulan air), dan 子 ialah **cabang diraja** di tengahnya. Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi Monyet membentuk triad separuh ({scoreBanhap}) hanya dengan Tikus."
          },
          {
            "p": "Dengan Naga (辰) daripada kumpulan yang sama, watak tengah 子 tiada, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral ({scoreNeutral}). Tergolong dalam kumpulan yang sama tidak menjadikan setiap pasangan sebagai keharmonian."
          }
        ]
      },
      {
        "title": "Harimau — pertembungan langsung (Pertembungan)",
        "blocks": [
          {
            "p": "申 dan 寅 berada tepat bertentangan antara satu sama lain dalam bulatan. Perkhidmatan ini mengekalkan {scoreChung} mata walaupun untuk pertembungan. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan, dan memberi skor yang hampir ke dasar sama dengan menjatuhkan hukuman ke atas dua orang. Walaupun begitu, ia ialah skor terendah yang boleh diterima Monyet."
          }
        ]
      },
      {
        "title": "Arnab — ketidakselarasan yang senyap (Ketidakselarasan)",
        "blocks": [
          {
            "p": "申 dan 卯 berada betul-betul bersebelahan dengan 寅 (Harimau), kedudukan pertembungan, dan secara tradisinya dilihat sebagai pasangan yang saling berdendam namun tidak dapat berpisah. Ia kelihatan tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan, jadi ia mendapat {scoreWonjin} — lebih tinggi daripada pertembungan ({scoreChung}) dan lebih rendah daripada neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "7 haiwan lain, dan Monyet dengan Monyet yang lain",
        "blocks": [
          {
            "p": "Lembu, Naga, Kuda, Biri-biri, Ayam, Anjing dan Babi bukan keharmonian, pertembungan mahupun ketidakselarasan dengan Monyet: ia **neutral** dan mendapat {scoreNeutral}. Ia ialah garis asas, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang Monyet mendapat {scoreSame}. Ini bermaksud mereka serupa, bukan saling tertarik, jadi ia berada sedikit di atas neutral."
          }
        ]
      },
      {
        "title": "Berapa bahagian daripada kadar padanan akhir yang diambil oleh skor ini",
        "blocks": [
          {
            "p": "Terdapat dua tempat di mana cabang dua orang diletakkan bersebelahan."
          },
          {
            "ul": [
              "**Keserasian zodiak** melihat cabang tahun kelahiran. Ia mengambil {weightZodiac} daripada kadar padanan akhir.",
              "**Keserasian cabang hari** melihat cabang hari kelahiran. Ia mengambil {weightDayBranch} daripada keserasian saju ({weightSaju}), iaitu {weightDayBranchTotal} daripada kadar padanan akhir."
            ]
          },
          {
            "p": "Sebagai contoh, apabila orang Monyet bertemu orang Harimau, keserasian zodiak memberikan pertembungan. Jika semua perkara lain sama, kadar padanan akhir menjadi {swingZodiacChung} mata lebih rendah berbanding pasangan neutral. Dengan orang Ular ia ialah enam-harmoni, dan kadar itu menjadi {swingZodiacYukhap} mata lebih tinggi."
          },
          {
            "p": "Cabang tahun dan cabang hari boleh berbeza. Dua orang Monyet yang cabang harinya ialah 申 dan 寅 mendapat cabang yang sama ({scoreSame}) dalam keserasian zodiak dan pertembungan ({scoreChung}) dalam keserasian cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang.",
              "Carta lengkap tentang skor setiap hubungan terdapat dalam [carta dua belas cabang](/guide/branches), dan sebab zodiak dibaca daripada cabang tahun terdapat dalam [Mengapa keserasian zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Haiwan lain dipaparkan dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Lembu](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Arnab](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Biri-biri](/guide/zodiac-goat) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rooster": {
    "eyebrow": "Mengikut haiwan",
    "title": "Bagaimana Ayam Bertemu Dua Belas Haiwan Zodiak",
    "summary": "Hubungan apakah yang dimiliki Ayam (酉) dengan setiap satu daripada dua belas haiwan zodiak, berapa skor setiap satu, dan berapa bahagian daripada kadar padanan akhir yang diambil oleh skor itu — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Ayam ialah cabang yang kesepuluh daripada dua belas cabang",
        "blocks": [
          {
            "p": "Ayam ialah seseorang yang cabang tahun kelahirannya **酉**. 酉 ialah cabang bumi yang kesepuluh daripada dua belas cabang bumi, dan apabila dua belas watak disusun dalam bulatan, ia berada tepat bertentangan dengan 卯 (Arnab)."
          },
          {
            "p": "Baris yang dipaparkan oleh keputusan keserasian untuk orang Ayam ialah: \"Rajin dan teliti. Tidak boleh membiarkan sesuatu tidak kena pada tempatnya.\" Baris ini tiada kaitan dengan skor hubungan dan tidak menjejaskan skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas haiwan zodiak sekali pandang",
        "blocks": [
          {
            "p": "Setiap haiwan lain diletakkan bersebelahan dengan Ayam secara bergilir. Hanya pasangan yang diiktiraf perkhidmatan ini sebagai keharmonian ditulis sebagai hubungan; selebihnya neutral."
          },
          {
            "table": {
              "caption": "Ayam dan dua belas haiwan zodiak",
              "head": [
                "Haiwan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Lembu (丑)",
                  "Triad separuh",
                  "{scoreBanhap}"
                ],
                [
                  "Harimau (寅)",
                  "Ketidakselarasan",
                  "{scoreWonjin}"
                ],
                [
                  "Arnab (卯)",
                  "Pertembungan",
                  "{scoreChung}"
                ],
                [
                  "Naga (辰)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Ular (巳)",
                  "Triad separuh",
                  "{scoreBanhap}"
                ],
                [
                  "Kuda (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Biri-biri (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Monyet (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ayam (酉)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Anjing (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Babi (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Naga — pasangan yang tertarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "酉 dan 辰 membentuk keharmonian dengan hanya dua watak. Enam-harmoni ialah hubungan baik yang paling kerap muncul dalam keserasian, dan Ayam dan Naga mendapat {scoreYukhap}, yang tertinggi yang boleh diperoleh Ayam."
          }
        ]
      },
      {
        "title": "Lembu dan Ular — triad separuh yang termasuk cabang diraja",
        "blocks": [
          {
            "p": "巳酉丑 ialah satu kumpulan triad (kumpulan logam), dan 酉 ialah **cabang diraja** di tengahnya. Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi Ayam membentuk triad separuh ({scoreBanhap}) dengan kedua-dua Lembu dan Ular."
          },
          {
            "p": "**Ular dan Lembu bersama-sama**, sebaliknya, tiada watak tengah 酉, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral. Walaupun dalam satu kumpulan triad, Ayam yang membentuk triad separuh."
          }
        ]
      },
      {
        "title": "Arnab — pertembungan langsung (Pertembungan)",
        "blocks": [
          {
            "p": "酉 dan 卯 berada tepat bertentangan antara satu sama lain dalam bulatan. Perkhidmatan ini mengekalkan {scoreChung} mata walaupun untuk pertembungan. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan, dan memberi skor yang hampir ke dasar sama dengan menjatuhkan hukuman ke atas dua orang. Walaupun begitu, ia ialah skor terendah yang boleh diterima Ayam."
          }
        ]
      },
      {
        "title": "Harimau — ketidakselarasan yang senyap (Ketidakselarasan)",
        "blocks": [
          {
            "p": "酉 dan 寅 berada betul-betul bersebelahan dengan 卯 (Arnab), kedudukan pertembungan, dan secara tradisinya dilihat sebagai pasangan yang saling berdendam namun tidak dapat berpisah. Ia kelihatan tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan, jadi ia mendapat {scoreWonjin} — lebih tinggi daripada pertembungan ({scoreChung}) dan lebih rendah daripada neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "6 haiwan lain, dan Ayam dengan Ayam yang lain",
        "blocks": [
          {
            "p": "Tikus, Kuda, Biri-biri, Monyet, Anjing dan Babi bukan keharmonian, pertembungan mahupun ketidakselarasan dengan Ayam: ia **neutral** dan mendapat {scoreNeutral}. Ia ialah garis asas, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang Ayam mendapat {scoreSame}. Ini bermaksud mereka serupa, bukan saling tertarik, jadi ia berada sedikit di atas neutral."
          }
        ]
      },
      {
        "title": "Berapa bahagian daripada kadar padanan akhir yang diambil oleh skor ini",
        "blocks": [
          {
            "p": "Terdapat dua tempat di mana cabang dua orang diletakkan bersebelahan."
          },
          {
            "ul": [
              "**Keserasian zodiak** melihat cabang tahun kelahiran. Ia mengambil {weightZodiac} daripada kadar padanan akhir.",
              "**Keserasian cabang hari** melihat cabang hari kelahiran. Ia mengambil {weightDayBranch} daripada keserasian saju ({weightSaju}), iaitu {weightDayBranchTotal} daripada kadar padanan akhir."
            ]
          },
          {
            "p": "Sebagai contoh, apabila orang Ayam bertemu orang Arnab, keserasian zodiak memberikan pertembungan. Jika semua perkara lain sama, kadar padanan akhir menjadi {swingZodiacChung} mata lebih rendah berbanding pasangan neutral. Dengan orang Naga ia ialah enam-harmoni, dan kadar itu menjadi {swingZodiacYukhap} mata lebih tinggi."
          },
          {
            "p": "Cabang tahun dan cabang hari boleh berbeza. Dua orang Ayam yang cabang harinya ialah 酉 dan 卯 mendapat cabang yang sama ({scoreSame}) dalam keserasian zodiak dan pertembungan ({scoreChung}) dalam keserasian cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang.",
              "Carta lengkap tentang skor setiap hubungan terdapat dalam [carta dua belas cabang](/guide/branches), dan sebab zodiak dibaca daripada cabang tahun terdapat dalam [Mengapa keserasian zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Haiwan lain dipaparkan dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Lembu](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Arnab](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Biri-biri](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Anjing](/guide/zodiac-dog) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dog": {
    "eyebrow": "Mengikut haiwan",
    "title": "Bagaimana Anjing Bertemu Dua Belas Haiwan Zodiak",
    "summary": "Hubungan apakah yang dimiliki Anjing (戌) dengan setiap satu daripada dua belas haiwan zodiak, berapa skor setiap satu, dan berapa bahagian daripada kadar padanan akhir yang diambil oleh skor itu — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Anjing ialah cabang yang kesebelas daripada dua belas cabang",
        "blocks": [
          {
            "p": "Anjing ialah seseorang yang cabang tahun kelahirannya **戌**. 戌 ialah cabang bumi yang kesebelas daripada dua belas cabang bumi, dan apabila dua belas watak disusun dalam bulatan, ia berada tepat bertentangan dengan 辰 (Naga)."
          },
          {
            "p": "Baris yang dipaparkan oleh keputusan keserasian untuk orang Anjing ialah: \"Setia hingga ke akhir sebaik kepercayaan diberi. Pengkhianatan melukakan paling dalam.\" Baris ini tiada kaitan dengan skor hubungan dan tidak menjejaskan skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas haiwan zodiak sekali pandang",
        "blocks": [
          {
            "p": "Setiap haiwan lain diletakkan bersebelahan dengan Anjing secara bergilir. Hanya pasangan yang diiktiraf perkhidmatan ini sebagai keharmonian ditulis sebagai hubungan; selebihnya neutral."
          },
          {
            "table": {
              "caption": "Anjing dan dua belas haiwan zodiak",
              "head": [
                "Haiwan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Lembu (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Harimau (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Arnab (卯)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Naga (辰)",
                  "Pertembungan",
                  "{scoreChung}"
                ],
                [
                  "Ular (巳)",
                  "Ketidakselarasan",
                  "{scoreWonjin}"
                ],
                [
                  "Kuda (午)",
                  "Triad separuh",
                  "{scoreBanhap}"
                ],
                [
                  "Biri-biri (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Monyet (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ayam (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Anjing (戌)",
                  "Cabang yang sama",
                  "{scoreSame}"
                ],
                [
                  "Babi (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Arnab — pasangan yang tertarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "戌 dan 卯 membentuk keharmonian dengan hanya dua watak. Enam-harmoni ialah hubungan baik yang paling kerap muncul dalam keserasian, dan Anjing dan Arnab mendapat {scoreYukhap}, yang tertinggi yang boleh diperoleh Anjing."
          }
        ]
      },
      {
        "title": "Kuda — triad separuh yang termasuk cabang diraja",
        "blocks": [
          {
            "p": "寅午戌 ialah satu kumpulan triad (kumpulan api), dan 午 ialah **cabang diraja** di tengahnya. Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi Anjing membentuk triad separuh ({scoreBanhap}) hanya dengan Kuda."
          },
          {
            "p": "Dengan Harimau (寅) daripada kumpulan yang sama, watak tengah 午 tiada, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral ({scoreNeutral}). Tergolong dalam kumpulan yang sama tidak menjadikan setiap pasangan sebagai keharmonian."
          }
        ]
      },
      {
        "title": "Naga — pertembungan langsung (Pertembungan)",
        "blocks": [
          {
            "p": "戌 dan 辰 berada tepat bertentangan antara satu sama lain dalam bulatan. Perkhidmatan ini mengekalkan {scoreChung} mata walaupun untuk pertembungan. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan, dan memberi skor yang hampir ke dasar sama dengan menjatuhkan hukuman ke atas dua orang. Walaupun begitu, ia ialah skor terendah yang boleh diterima Anjing."
          }
        ]
      },
      {
        "title": "Ular — ketidakselarasan yang senyap (Ketidakselarasan)",
        "blocks": [
          {
            "p": "戌 dan 巳 berada betul-betul bersebelahan dengan 辰 (Naga), kedudukan pertembungan, dan secara tradisinya dilihat sebagai pasangan yang saling berdendam namun tidak dapat berpisah. Ia kelihatan tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan, jadi ia mendapat {scoreWonjin} — lebih tinggi daripada pertembungan ({scoreChung}) dan lebih rendah daripada neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "7 haiwan lain, dan Anjing dengan Anjing yang lain",
        "blocks": [
          {
            "p": "Tikus, Lembu, Harimau, Biri-biri, Monyet, Ayam dan Babi bukan keharmonian, pertembungan mahupun ketidakselarasan dengan Anjing: ia **neutral** dan mendapat {scoreNeutral}. Ia ialah garis asas, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang Anjing mendapat {scoreSame}. Ini bermaksud mereka serupa, bukan saling tertarik, jadi ia berada sedikit di atas neutral."
          }
        ]
      },
      {
        "title": "Berapa bahagian daripada kadar padanan akhir yang diambil oleh skor ini",
        "blocks": [
          {
            "p": "Terdapat dua tempat di mana cabang dua orang diletakkan bersebelahan."
          },
          {
            "ul": [
              "**Keserasian zodiak** melihat cabang tahun kelahiran. Ia mengambil {weightZodiac} daripada kadar padanan akhir.",
              "**Keserasian cabang hari** melihat cabang hari kelahiran. Ia mengambil {weightDayBranch} daripada keserasian saju ({weightSaju}), iaitu {weightDayBranchTotal} daripada kadar padanan akhir."
            ]
          },
          {
            "p": "Sebagai contoh, apabila orang Anjing bertemu orang Naga, keserasian zodiak memberikan pertembungan. Jika semua perkara lain sama, kadar padanan akhir menjadi {swingZodiacChung} mata lebih rendah berbanding pasangan neutral. Dengan orang Arnab ia ialah enam-harmoni, dan kadar itu menjadi {swingZodiacYukhap} mata lebih tinggi."
          },
          {
            "p": "Cabang tahun dan cabang hari boleh berbeza. Dua orang Anjing yang cabang harinya ialah 戌 dan 辰 mendapat cabang yang sama ({scoreSame}) dalam keserasian zodiak dan pertembungan ({scoreChung}) dalam keserasian cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang.",
              "Carta lengkap tentang skor setiap hubungan terdapat dalam [carta dua belas cabang](/guide/branches), dan sebab zodiak dibaca daripada cabang tahun terdapat dalam [Mengapa keserasian zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Haiwan lain dipaparkan dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Lembu](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Arnab](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Biri-biri](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Babi](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-pig": {
    "eyebrow": "Mengikut haiwan",
    "title": "Bagaimana Babi Bertemu Dua Belas Haiwan Zodiak",
    "summary": "Hubungan apakah yang dimiliki Babi (亥) dengan setiap satu daripada dua belas haiwan zodiak, berapa skor setiap satu, dan berapa bahagian daripada kadar padanan akhir yang diambil oleh skor itu — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Babi ialah cabang yang kedua belas daripada dua belas cabang",
        "blocks": [
          {
            "p": "Babi ialah seseorang yang cabang tahun kelahirannya **亥**. 亥 ialah cabang bumi yang kedua belas daripada dua belas cabang bumi, dan apabila dua belas watak disusun dalam bulatan, ia berada tepat bertentangan dengan 巳 (Ular)."
          },
          {
            "p": "Baris yang dipaparkan oleh keputusan keserasian untuk orang Babi ialah: \"Murah hati dan berterus terang. Mudah percaya, kadangkala dengan harga yang mahal.\" Baris ini tiada kaitan dengan skor hubungan dan tidak menjejaskan skor di bawah."
          }
        ]
      },
      {
        "title": "Dua belas haiwan zodiak sekali pandang",
        "blocks": [
          {
            "p": "Setiap haiwan lain diletakkan bersebelahan dengan Babi secara bergilir. Hanya pasangan yang diiktiraf perkhidmatan ini sebagai keharmonian ditulis sebagai hubungan; selebihnya neutral."
          },
          {
            "table": {
              "caption": "Babi dan dua belas haiwan zodiak",
              "head": [
                "Haiwan lain",
                "Hubungan",
                "Skor"
              ],
              "rows": [
                [
                  "Tikus (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Lembu (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Harimau (寅)",
                  "Enam-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Arnab (卯)",
                  "Triad separuh",
                  "{scoreBanhap}"
                ],
                [
                  "Naga (辰)",
                  "Ketidakselarasan",
                  "{scoreWonjin}"
                ],
                [
                  "Ular (巳)",
                  "Pertembungan",
                  "{scoreChung}"
                ],
                [
                  "Kuda (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Biri-biri (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Monyet (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ayam (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Anjing (戌)",
                  "Neutral",
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
        "title": "Harimau — pasangan yang tertarik (Enam-Harmoni)",
        "blocks": [
          {
            "p": "亥 dan 寅 membentuk keharmonian dengan hanya dua watak. Enam-harmoni ialah hubungan baik yang paling kerap muncul dalam keserasian, dan Babi dan Harimau mendapat {scoreYukhap}, yang tertinggi yang boleh diperoleh Babi."
          }
        ]
      },
      {
        "title": "Arnab — triad separuh yang termasuk cabang diraja",
        "blocks": [
          {
            "p": "亥卯未 ialah satu kumpulan triad (kumpulan kayu), dan 卯 ialah **cabang diraja** di tengahnya. Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi Babi membentuk triad separuh ({scoreBanhap}) hanya dengan Arnab."
          },
          {
            "p": "Dengan Biri-biri (未) daripada kumpulan yang sama, watak tengah 卯 tiada, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral ({scoreNeutral}). Tergolong dalam kumpulan yang sama tidak menjadikan setiap pasangan sebagai keharmonian."
          }
        ]
      },
      {
        "title": "Ular — pertembungan langsung (Pertembungan)",
        "blocks": [
          {
            "p": "亥 dan 巳 berada tepat bertentangan antara satu sama lain dalam bulatan. Perkhidmatan ini mengekalkan {scoreChung} mata walaupun untuk pertembungan. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan, dan memberi skor yang hampir ke dasar sama dengan menjatuhkan hukuman ke atas dua orang. Walaupun begitu, ia ialah skor terendah yang boleh diterima Babi."
          }
        ]
      },
      {
        "title": "Naga — ketidakselarasan yang senyap (Ketidakselarasan)",
        "blocks": [
          {
            "p": "亥 dan 辰 berada betul-betul bersebelahan dengan 巳 (Ular), kedudukan pertembungan, dan secara tradisinya dilihat sebagai pasangan yang saling berdendam namun tidak dapat berpisah. Ia kelihatan tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan, jadi ia mendapat {scoreWonjin} — lebih tinggi daripada pertembungan ({scoreChung}) dan lebih rendah daripada neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "7 haiwan lain, dan Babi dengan Babi yang lain",
        "blocks": [
          {
            "p": "Tikus, Lembu, Kuda, Biri-biri, Monyet, Ayam dan Anjing bukan keharmonian, pertembungan mahupun ketidakselarasan dengan Babi: ia **neutral** dan mendapat {scoreNeutral}. Ia ialah garis asas, tidak baik dan tidak buruk."
          },
          {
            "p": "Dua orang Babi mendapat {scoreSame}. Ini bermaksud mereka serupa, bukan saling tertarik, jadi ia berada sedikit di atas neutral."
          }
        ]
      },
      {
        "title": "Berapa bahagian daripada kadar padanan akhir yang diambil oleh skor ini",
        "blocks": [
          {
            "p": "Terdapat dua tempat di mana cabang dua orang diletakkan bersebelahan."
          },
          {
            "ul": [
              "**Keserasian zodiak** melihat cabang tahun kelahiran. Ia mengambil {weightZodiac} daripada kadar padanan akhir.",
              "**Keserasian cabang hari** melihat cabang hari kelahiran. Ia mengambil {weightDayBranch} daripada keserasian saju ({weightSaju}), iaitu {weightDayBranchTotal} daripada kadar padanan akhir."
            ]
          },
          {
            "p": "Sebagai contoh, apabila orang Babi bertemu orang Ular, keserasian zodiak memberikan pertembungan. Jika semua perkara lain sama, kadar padanan akhir menjadi {swingZodiacChung} mata lebih rendah berbanding pasangan neutral. Dengan orang Harimau ia ialah enam-harmoni, dan kadar itu menjadi {swingZodiacYukhap} mata lebih tinggi."
          },
          {
            "p": "Cabang tahun dan cabang hari boleh berbeza. Dua orang Babi yang cabang harinya ialah 亥 dan 巳 mendapat cabang yang sama ({scoreSame}) dalam keserasian zodiak dan pertembungan ({scoreChung}) dalam keserasian cabang hari."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang.",
              "Carta lengkap tentang skor setiap hubungan terdapat dalam [carta dua belas cabang](/guide/branches), dan sebab zodiak dibaca daripada cabang tahun terdapat dalam [Mengapa keserasian zodiak mempertimbangkan cabang tahun](/guide/zodiac)."
            ]
          },
          {
            "p": "Haiwan lain dipaparkan dengan cara yang sama. [Tikus](/guide/zodiac-rat) · [Lembu](/guide/zodiac-ox) · [Harimau](/guide/zodiac-tiger) · [Arnab](/guide/zodiac-rabbit) · [Naga](/guide/zodiac-dragon) · [Ular](/guide/zodiac-snake) · [Kuda](/guide/zodiac-horse) · [Biri-biri](/guide/zodiac-goat) · [Monyet](/guide/zodiac-monkey) · [Ayam](/guide/zodiac-rooster) · [Anjing](/guide/zodiac-dog)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-rat": {
    "eyebrow": "Mengikut pasangan",
    "title": "Tikus dan Tikus — Cabang yang sama",
    "summary": "Hubungan apakah yang dimiliki dua orang Tikus, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Dua orang Tikus berkongsi cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang Tikus berkongsi cabang yang sama (子 dan 子). Ini bermaksud mereka serupa, bukan saling tertarik."
          },
          {
            "p": "Jadi ia mendapat {scoreSame}, sedikit di atas neutral ({scoreNeutral}): bukan keharmonian, pertembungan atau ketidakselarasan, hanya dinaikkan sedikit."
          },
          {
            "p": "子 ialah cabang bumi yang pertama daripada dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang Tikus",
              "head": [
                "Perkara",
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
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacSame} mata dalam keserasian zodiak dan sebanyak {swingDayBranchSame} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi Tikus",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Tikus** — Enam-Harmoni [Lembu](/guide/zodiac-pair-rat-ox) · Triad separuh [Naga](/guide/zodiac-pair-rat-dragon), [Monyet](/guide/zodiac-pair-rat-monkey) · Ketidakselarasan [Biri-biri](/guide/zodiac-pair-rat-goat) · Pertembungan [Kuda](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Tikus](/guide/zodiac-rat), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-ox": {
    "eyebrow": "Mengikut pasangan",
    "title": "Tikus dan Lembu — Enam-Harmoni",
    "summary": "Hubungan apakah yang dimiliki Tikus dan Lembu, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Tikus dan Lembu membentuk enam-harmoni",
        "blocks": [
          {
            "p": "Tikus dan Lembu membentuk enam-harmoni. 子 dan 丑 membentuk keharmonian dengan hanya dua watak."
          },
          {
            "p": "Enam-harmoni ialah hubungan baik yang paling kerap muncul dalam keserasian, dan pada {scoreYukhap} ia ialah skor tertinggi yang boleh diperoleh oleh kedua-dua haiwan itu."
          },
          {
            "p": "Pada bulatan, 子 berada di tempat pertama dan 丑 di tempat kedua, dan kedua-dua watak itu berjarak satu langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Tikus dan Lembu",
              "head": [
                "Perkara",
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
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacYukhap} mata dalam keserasian zodiak dan sebanyak {swingDayBranchYukhap} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Tikus** — Enam-Harmoni [Lembu](/guide/zodiac-pair-rat-ox) · Triad separuh [Naga](/guide/zodiac-pair-rat-dragon), [Monyet](/guide/zodiac-pair-rat-monkey) · Ketidakselarasan [Biri-biri](/guide/zodiac-pair-rat-goat) · Pertembungan [Kuda](/guide/zodiac-pair-rat-horse)",
              "Pasangan istimewa **Lembu** — Enam-Harmoni [Tikus](/guide/zodiac-pair-rat-ox) · Triad separuh [Ayam](/guide/zodiac-pair-ox-rooster) · Ketidakselarasan [Kuda](/guide/zodiac-pair-ox-horse) · Pertembungan [Biri-biri](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Tikus](/guide/zodiac-rat) · [Lembu](/guide/zodiac-ox), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-dragon": {
    "eyebrow": "Mengikut pasangan",
    "title": "Tikus dan Naga — Triad separuh",
    "summary": "Hubungan apakah yang dimiliki Tikus dan Naga, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Tikus dan Naga membentuk triad separuh",
        "blocks": [
          {
            "p": "Tikus dan Naga membentuk triad separuh. 申子辰 ialah satu kumpulan triad (kumpulan air), dan 子 ialah **cabang diraja** di tengahnya."
          },
          {
            "p": "Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi pasangan ini ialah triad separuh ({scoreBanhap})."
          },
          {
            "p": "Monyet (申) dan Naga (辰) daripada kumpulan yang sama tiada watak tengah 子, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral."
          },
          {
            "p": "Pada bulatan, 子 berada di tempat pertama dan 辰 di tempat kelima, dan kedua-dua watak itu berjarak empat langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Tikus dan Naga",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Triad separuh"
                ],
                [
                  "Skor",
                  "{scoreBanhap}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacBanhap} mata dalam keserasian zodiak dan sebanyak {swingDayBranchBanhap} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Tikus** — Enam-Harmoni [Lembu](/guide/zodiac-pair-rat-ox) · Triad separuh [Naga](/guide/zodiac-pair-rat-dragon), [Monyet](/guide/zodiac-pair-rat-monkey) · Ketidakselarasan [Biri-biri](/guide/zodiac-pair-rat-goat) · Pertembungan [Kuda](/guide/zodiac-pair-rat-horse)",
              "Pasangan istimewa **Naga** — Enam-Harmoni [Ayam](/guide/zodiac-pair-dragon-rooster) · Triad separuh [Tikus](/guide/zodiac-pair-rat-dragon) · Ketidakselarasan [Babi](/guide/zodiac-pair-dragon-pig) · Pertembungan [Anjing](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Tikus](/guide/zodiac-rat) · [Naga](/guide/zodiac-dragon), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-horse": {
    "eyebrow": "Mengikut pasangan",
    "title": "Tikus dan Kuda — Pertembungan",
    "summary": "Hubungan apakah yang dimiliki Tikus dan Kuda, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Tikus dan Kuda membentuk pertembungan",
        "blocks": [
          {
            "p": "Tikus dan Kuda membentuk pertembungan. 子 dan 午 berada tepat bertentangan antara satu sama lain dalam bulatan."
          },
          {
            "p": "Perkhidmatan ini mengekalkan {scoreChung} mata walaupun untuk pertembungan. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan, dan memberi skor yang hampir ke dasar sama dengan menjatuhkan hukuman ke atas dua orang."
          },
          {
            "p": "Pada bulatan, 子 berada di tempat pertama dan 午 di tempat ketujuh, dan kedua-dua watak itu berjarak enam langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Tikus dan Kuda",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Pertembungan"
                ],
                [
                  "Skor",
                  "{scoreChung}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menurunkan kadar padanan akhir sebanyak {swingZodiacChung} mata dalam keserasian zodiak dan sebanyak {swingDayBranchChung} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Tikus** — Enam-Harmoni [Lembu](/guide/zodiac-pair-rat-ox) · Triad separuh [Naga](/guide/zodiac-pair-rat-dragon), [Monyet](/guide/zodiac-pair-rat-monkey) · Ketidakselarasan [Biri-biri](/guide/zodiac-pair-rat-goat) · Pertembungan [Kuda](/guide/zodiac-pair-rat-horse)",
              "Pasangan istimewa **Kuda** — Enam-Harmoni [Biri-biri](/guide/zodiac-pair-horse-goat) · Triad separuh [Harimau](/guide/zodiac-pair-tiger-horse), [Anjing](/guide/zodiac-pair-horse-dog) · Ketidakselarasan [Lembu](/guide/zodiac-pair-ox-horse) · Pertembungan [Tikus](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Tikus](/guide/zodiac-rat) · [Kuda](/guide/zodiac-horse), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-goat": {
    "eyebrow": "Mengikut pasangan",
    "title": "Tikus dan Biri-biri — Ketidakselarasan",
    "summary": "Hubungan apakah yang dimiliki Tikus dan Biri-biri, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Tikus dan Biri-biri membentuk ketidakselarasan",
        "blocks": [
          {
            "p": "Tikus dan Biri-biri membentuk ketidakselarasan. Kedudukan pertembungan bagi 子 ialah 午 (Kuda), dan 未 berada betul-betul bersebelahan dengannya; betul-betul bersebelahan dengan 丑 (Lembu), kedudukan pertembungan bagi 未, ialah 子."
          },
          {
            "p": "Ia secara tradisinya dilihat sebagai pasangan yang saling berdendam namun tidak dapat berpisah. Ia kelihatan tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan, jadi ia mendapat {scoreWonjin} — lebih tinggi daripada pertembungan ({scoreChung}) dan lebih rendah daripada neutral ({scoreNeutral})."
          },
          {
            "p": "Pada bulatan, 子 berada di tempat pertama dan 未 di tempat kelapan, dan kedua-dua watak itu berjarak lima langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Tikus dan Biri-biri",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Ketidakselarasan"
                ],
                [
                  "Skor",
                  "{scoreWonjin}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menurunkan kadar padanan akhir sebanyak {swingZodiacWonjin} mata dalam keserasian zodiak dan sebanyak {swingDayBranchWonjin} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Tikus** — Enam-Harmoni [Lembu](/guide/zodiac-pair-rat-ox) · Triad separuh [Naga](/guide/zodiac-pair-rat-dragon), [Monyet](/guide/zodiac-pair-rat-monkey) · Ketidakselarasan [Biri-biri](/guide/zodiac-pair-rat-goat) · Pertembungan [Kuda](/guide/zodiac-pair-rat-horse)",
              "Pasangan istimewa **Biri-biri** — Enam-Harmoni [Kuda](/guide/zodiac-pair-horse-goat) · Triad separuh [Arnab](/guide/zodiac-pair-rabbit-goat) · Ketidakselarasan [Tikus](/guide/zodiac-pair-rat-goat) · Pertembungan [Lembu](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Tikus](/guide/zodiac-rat) · [Biri-biri](/guide/zodiac-goat), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-monkey": {
    "eyebrow": "Mengikut pasangan",
    "title": "Tikus dan Monyet — Triad separuh",
    "summary": "Hubungan apakah yang dimiliki Tikus dan Monyet, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Tikus dan Monyet membentuk triad separuh",
        "blocks": [
          {
            "p": "Tikus dan Monyet membentuk triad separuh. 申子辰 ialah satu kumpulan triad (kumpulan air), dan 子 ialah **cabang diraja** di tengahnya."
          },
          {
            "p": "Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi pasangan ini ialah triad separuh ({scoreBanhap})."
          },
          {
            "p": "Naga (辰) dan Monyet (申) daripada kumpulan yang sama tiada watak tengah 子, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral."
          },
          {
            "p": "Pada bulatan, 子 berada di tempat pertama dan 申 di tempat kesembilan, dan kedua-dua watak itu berjarak empat langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Tikus dan Monyet",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Triad separuh"
                ],
                [
                  "Skor",
                  "{scoreBanhap}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacBanhap} mata dalam keserasian zodiak dan sebanyak {swingDayBranchBanhap} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Tikus** — Enam-Harmoni [Lembu](/guide/zodiac-pair-rat-ox) · Triad separuh [Naga](/guide/zodiac-pair-rat-dragon), [Monyet](/guide/zodiac-pair-rat-monkey) · Ketidakselarasan [Biri-biri](/guide/zodiac-pair-rat-goat) · Pertembungan [Kuda](/guide/zodiac-pair-rat-horse)",
              "Pasangan istimewa **Monyet** — Enam-Harmoni [Ular](/guide/zodiac-pair-snake-monkey) · Triad separuh [Tikus](/guide/zodiac-pair-rat-monkey) · Ketidakselarasan [Arnab](/guide/zodiac-pair-rabbit-monkey) · Pertembungan [Harimau](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Tikus](/guide/zodiac-rat) · [Monyet](/guide/zodiac-monkey), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-ox": {
    "eyebrow": "Mengikut pasangan",
    "title": "Lembu dan Lembu — Cabang yang sama",
    "summary": "Hubungan apakah yang dimiliki dua orang Lembu, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Dua orang Lembu berkongsi cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang Lembu berkongsi cabang yang sama (丑 dan 丑). Ini bermaksud mereka serupa, bukan saling tertarik."
          },
          {
            "p": "Jadi ia mendapat {scoreSame}, sedikit di atas neutral ({scoreNeutral}): bukan keharmonian, pertembungan atau ketidakselarasan, hanya dinaikkan sedikit."
          },
          {
            "p": "丑 ialah cabang bumi yang kedua daripada dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang Lembu",
              "head": [
                "Perkara",
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
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacSame} mata dalam keserasian zodiak dan sebanyak {swingDayBranchSame} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi Lembu",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Lembu** — Enam-Harmoni [Tikus](/guide/zodiac-pair-rat-ox) · Triad separuh [Ayam](/guide/zodiac-pair-ox-rooster) · Ketidakselarasan [Kuda](/guide/zodiac-pair-ox-horse) · Pertembungan [Biri-biri](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Lembu](/guide/zodiac-ox), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-horse": {
    "eyebrow": "Mengikut pasangan",
    "title": "Lembu dan Kuda — Ketidakselarasan",
    "summary": "Hubungan apakah yang dimiliki Lembu dan Kuda, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Lembu dan Kuda membentuk ketidakselarasan",
        "blocks": [
          {
            "p": "Lembu dan Kuda membentuk ketidakselarasan. Kedudukan pertembungan bagi 丑 ialah 未 (Biri-biri), dan 午 berada betul-betul bersebelahan dengannya; betul-betul bersebelahan dengan 子 (Tikus), kedudukan pertembungan bagi 午, ialah 丑."
          },
          {
            "p": "Ia secara tradisinya dilihat sebagai pasangan yang saling berdendam namun tidak dapat berpisah. Ia kelihatan tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan, jadi ia mendapat {scoreWonjin} — lebih tinggi daripada pertembungan ({scoreChung}) dan lebih rendah daripada neutral ({scoreNeutral})."
          },
          {
            "p": "Pada bulatan, 丑 berada di tempat kedua dan 午 di tempat ketujuh, dan kedua-dua watak itu berjarak lima langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Lembu dan Kuda",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Ketidakselarasan"
                ],
                [
                  "Skor",
                  "{scoreWonjin}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menurunkan kadar padanan akhir sebanyak {swingZodiacWonjin} mata dalam keserasian zodiak dan sebanyak {swingDayBranchWonjin} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Lembu** — Enam-Harmoni [Tikus](/guide/zodiac-pair-rat-ox) · Triad separuh [Ayam](/guide/zodiac-pair-ox-rooster) · Ketidakselarasan [Kuda](/guide/zodiac-pair-ox-horse) · Pertembungan [Biri-biri](/guide/zodiac-pair-ox-goat)",
              "Pasangan istimewa **Kuda** — Enam-Harmoni [Biri-biri](/guide/zodiac-pair-horse-goat) · Triad separuh [Harimau](/guide/zodiac-pair-tiger-horse), [Anjing](/guide/zodiac-pair-horse-dog) · Ketidakselarasan [Lembu](/guide/zodiac-pair-ox-horse) · Pertembungan [Tikus](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Lembu](/guide/zodiac-ox) · [Kuda](/guide/zodiac-horse), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-goat": {
    "eyebrow": "Mengikut pasangan",
    "title": "Lembu dan Biri-biri — Pertembungan",
    "summary": "Hubungan apakah yang dimiliki Lembu dan Biri-biri, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Lembu dan Biri-biri membentuk pertembungan",
        "blocks": [
          {
            "p": "Lembu dan Biri-biri membentuk pertembungan. 丑 dan 未 berada tepat bertentangan antara satu sama lain dalam bulatan."
          },
          {
            "p": "Perkhidmatan ini mengekalkan {scoreChung} mata walaupun untuk pertembungan. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan, dan memberi skor yang hampir ke dasar sama dengan menjatuhkan hukuman ke atas dua orang."
          },
          {
            "p": "Pada bulatan, 丑 berada di tempat kedua dan 未 di tempat kelapan, dan kedua-dua watak itu berjarak enam langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Lembu dan Biri-biri",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Pertembungan"
                ],
                [
                  "Skor",
                  "{scoreChung}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menurunkan kadar padanan akhir sebanyak {swingZodiacChung} mata dalam keserasian zodiak dan sebanyak {swingDayBranchChung} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Lembu** — Enam-Harmoni [Tikus](/guide/zodiac-pair-rat-ox) · Triad separuh [Ayam](/guide/zodiac-pair-ox-rooster) · Ketidakselarasan [Kuda](/guide/zodiac-pair-ox-horse) · Pertembungan [Biri-biri](/guide/zodiac-pair-ox-goat)",
              "Pasangan istimewa **Biri-biri** — Enam-Harmoni [Kuda](/guide/zodiac-pair-horse-goat) · Triad separuh [Arnab](/guide/zodiac-pair-rabbit-goat) · Ketidakselarasan [Tikus](/guide/zodiac-pair-rat-goat) · Pertembungan [Lembu](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Lembu](/guide/zodiac-ox) · [Biri-biri](/guide/zodiac-goat), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-rooster": {
    "eyebrow": "Mengikut pasangan",
    "title": "Lembu dan Ayam — Triad separuh",
    "summary": "Hubungan apakah yang dimiliki Lembu dan Ayam, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Lembu dan Ayam membentuk triad separuh",
        "blocks": [
          {
            "p": "Lembu dan Ayam membentuk triad separuh. 巳酉丑 ialah satu kumpulan triad (kumpulan logam), dan 酉 ialah **cabang diraja** di tengahnya."
          },
          {
            "p": "Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi pasangan ini ialah triad separuh ({scoreBanhap})."
          },
          {
            "p": "Ular (巳) dan Lembu (丑) daripada kumpulan yang sama tiada watak tengah 酉, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral."
          },
          {
            "p": "Pada bulatan, 丑 berada di tempat kedua dan 酉 di tempat kesepuluh, dan kedua-dua watak itu berjarak empat langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Lembu dan Ayam",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Triad separuh"
                ],
                [
                  "Skor",
                  "{scoreBanhap}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacBanhap} mata dalam keserasian zodiak dan sebanyak {swingDayBranchBanhap} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Lembu** — Enam-Harmoni [Tikus](/guide/zodiac-pair-rat-ox) · Triad separuh [Ayam](/guide/zodiac-pair-ox-rooster) · Ketidakselarasan [Kuda](/guide/zodiac-pair-ox-horse) · Pertembungan [Biri-biri](/guide/zodiac-pair-ox-goat)",
              "Pasangan istimewa **Ayam** — Enam-Harmoni [Naga](/guide/zodiac-pair-dragon-rooster) · Triad separuh [Lembu](/guide/zodiac-pair-ox-rooster), [Ular](/guide/zodiac-pair-snake-rooster) · Ketidakselarasan [Harimau](/guide/zodiac-pair-tiger-rooster) · Pertembungan [Arnab](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Lembu](/guide/zodiac-ox) · [Ayam](/guide/zodiac-rooster), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-tiger": {
    "eyebrow": "Mengikut pasangan",
    "title": "Harimau dan Harimau — Cabang yang sama",
    "summary": "Hubungan apakah yang dimiliki dua orang Harimau, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Dua orang Harimau berkongsi cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang Harimau berkongsi cabang yang sama (寅 dan 寅). Ini bermaksud mereka serupa, bukan saling tertarik."
          },
          {
            "p": "Jadi ia mendapat {scoreSame}, sedikit di atas neutral ({scoreNeutral}): bukan keharmonian, pertembungan atau ketidakselarasan, hanya dinaikkan sedikit."
          },
          {
            "p": "寅 ialah cabang bumi yang ketiga daripada dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang Harimau",
              "head": [
                "Perkara",
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
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacSame} mata dalam keserasian zodiak dan sebanyak {swingDayBranchSame} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi Harimau",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Harimau** — Enam-Harmoni [Babi](/guide/zodiac-pair-tiger-pig) · Triad separuh [Kuda](/guide/zodiac-pair-tiger-horse) · Ketidakselarasan [Ayam](/guide/zodiac-pair-tiger-rooster) · Pertembungan [Monyet](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Harimau](/guide/zodiac-tiger), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-horse": {
    "eyebrow": "Mengikut pasangan",
    "title": "Harimau dan Kuda — Triad separuh",
    "summary": "Hubungan apakah yang dimiliki Harimau dan Kuda, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Harimau dan Kuda membentuk triad separuh",
        "blocks": [
          {
            "p": "Harimau dan Kuda membentuk triad separuh. 寅午戌 ialah satu kumpulan triad (kumpulan api), dan 午 ialah **cabang diraja** di tengahnya."
          },
          {
            "p": "Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi pasangan ini ialah triad separuh ({scoreBanhap})."
          },
          {
            "p": "Anjing (戌) dan Harimau (寅) daripada kumpulan yang sama tiada watak tengah 午, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral."
          },
          {
            "p": "Pada bulatan, 寅 berada di tempat ketiga dan 午 di tempat ketujuh, dan kedua-dua watak itu berjarak empat langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Harimau dan Kuda",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Triad separuh"
                ],
                [
                  "Skor",
                  "{scoreBanhap}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacBanhap} mata dalam keserasian zodiak dan sebanyak {swingDayBranchBanhap} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Harimau** — Enam-Harmoni [Babi](/guide/zodiac-pair-tiger-pig) · Triad separuh [Kuda](/guide/zodiac-pair-tiger-horse) · Ketidakselarasan [Ayam](/guide/zodiac-pair-tiger-rooster) · Pertembungan [Monyet](/guide/zodiac-pair-tiger-monkey)",
              "Pasangan istimewa **Kuda** — Enam-Harmoni [Biri-biri](/guide/zodiac-pair-horse-goat) · Triad separuh [Harimau](/guide/zodiac-pair-tiger-horse), [Anjing](/guide/zodiac-pair-horse-dog) · Ketidakselarasan [Lembu](/guide/zodiac-pair-ox-horse) · Pertembungan [Tikus](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Harimau](/guide/zodiac-tiger) · [Kuda](/guide/zodiac-horse), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-monkey": {
    "eyebrow": "Mengikut pasangan",
    "title": "Harimau dan Monyet — Pertembungan",
    "summary": "Hubungan apakah yang dimiliki Harimau dan Monyet, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Harimau dan Monyet membentuk pertembungan",
        "blocks": [
          {
            "p": "Harimau dan Monyet membentuk pertembungan. 寅 dan 申 berada tepat bertentangan antara satu sama lain dalam bulatan."
          },
          {
            "p": "Perkhidmatan ini mengekalkan {scoreChung} mata walaupun untuk pertembungan. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan, dan memberi skor yang hampir ke dasar sama dengan menjatuhkan hukuman ke atas dua orang."
          },
          {
            "p": "Pada bulatan, 寅 berada di tempat ketiga dan 申 di tempat kesembilan, dan kedua-dua watak itu berjarak enam langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Harimau dan Monyet",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Pertembungan"
                ],
                [
                  "Skor",
                  "{scoreChung}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menurunkan kadar padanan akhir sebanyak {swingZodiacChung} mata dalam keserasian zodiak dan sebanyak {swingDayBranchChung} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Harimau** — Enam-Harmoni [Babi](/guide/zodiac-pair-tiger-pig) · Triad separuh [Kuda](/guide/zodiac-pair-tiger-horse) · Ketidakselarasan [Ayam](/guide/zodiac-pair-tiger-rooster) · Pertembungan [Monyet](/guide/zodiac-pair-tiger-monkey)",
              "Pasangan istimewa **Monyet** — Enam-Harmoni [Ular](/guide/zodiac-pair-snake-monkey) · Triad separuh [Tikus](/guide/zodiac-pair-rat-monkey) · Ketidakselarasan [Arnab](/guide/zodiac-pair-rabbit-monkey) · Pertembungan [Harimau](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Harimau](/guide/zodiac-tiger) · [Monyet](/guide/zodiac-monkey), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-rooster": {
    "eyebrow": "Mengikut pasangan",
    "title": "Harimau dan Ayam — Ketidakselarasan",
    "summary": "Hubungan apakah yang dimiliki Harimau dan Ayam, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Harimau dan Ayam membentuk ketidakselarasan",
        "blocks": [
          {
            "p": "Harimau dan Ayam membentuk ketidakselarasan. Kedudukan pertembungan bagi 寅 ialah 申 (Monyet), dan 酉 berada betul-betul bersebelahan dengannya; betul-betul bersebelahan dengan 卯 (Arnab), kedudukan pertembungan bagi 酉, ialah 寅."
          },
          {
            "p": "Ia secara tradisinya dilihat sebagai pasangan yang saling berdendam namun tidak dapat berpisah. Ia kelihatan tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan, jadi ia mendapat {scoreWonjin} — lebih tinggi daripada pertembungan ({scoreChung}) dan lebih rendah daripada neutral ({scoreNeutral})."
          },
          {
            "p": "Pada bulatan, 寅 berada di tempat ketiga dan 酉 di tempat kesepuluh, dan kedua-dua watak itu berjarak lima langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Harimau dan Ayam",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Ketidakselarasan"
                ],
                [
                  "Skor",
                  "{scoreWonjin}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menurunkan kadar padanan akhir sebanyak {swingZodiacWonjin} mata dalam keserasian zodiak dan sebanyak {swingDayBranchWonjin} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Harimau** — Enam-Harmoni [Babi](/guide/zodiac-pair-tiger-pig) · Triad separuh [Kuda](/guide/zodiac-pair-tiger-horse) · Ketidakselarasan [Ayam](/guide/zodiac-pair-tiger-rooster) · Pertembungan [Monyet](/guide/zodiac-pair-tiger-monkey)",
              "Pasangan istimewa **Ayam** — Enam-Harmoni [Naga](/guide/zodiac-pair-dragon-rooster) · Triad separuh [Lembu](/guide/zodiac-pair-ox-rooster), [Ular](/guide/zodiac-pair-snake-rooster) · Ketidakselarasan [Harimau](/guide/zodiac-pair-tiger-rooster) · Pertembungan [Arnab](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Harimau](/guide/zodiac-tiger) · [Ayam](/guide/zodiac-rooster), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-pig": {
    "eyebrow": "Mengikut pasangan",
    "title": "Harimau dan Babi — Enam-Harmoni",
    "summary": "Hubungan apakah yang dimiliki Harimau dan Babi, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Harimau dan Babi membentuk enam-harmoni",
        "blocks": [
          {
            "p": "Harimau dan Babi membentuk enam-harmoni. 寅 dan 亥 membentuk keharmonian dengan hanya dua watak."
          },
          {
            "p": "Enam-harmoni ialah hubungan baik yang paling kerap muncul dalam keserasian, dan pada {scoreYukhap} ia ialah skor tertinggi yang boleh diperoleh oleh kedua-dua haiwan itu."
          },
          {
            "p": "Pada bulatan, 寅 berada di tempat ketiga dan 亥 di tempat kedua belas, dan kedua-dua watak itu berjarak tiga langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Harimau dan Babi",
              "head": [
                "Perkara",
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
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacYukhap} mata dalam keserasian zodiak dan sebanyak {swingDayBranchYukhap} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Harimau** — Enam-Harmoni [Babi](/guide/zodiac-pair-tiger-pig) · Triad separuh [Kuda](/guide/zodiac-pair-tiger-horse) · Ketidakselarasan [Ayam](/guide/zodiac-pair-tiger-rooster) · Pertembungan [Monyet](/guide/zodiac-pair-tiger-monkey)",
              "Pasangan istimewa **Babi** — Enam-Harmoni [Harimau](/guide/zodiac-pair-tiger-pig) · Triad separuh [Arnab](/guide/zodiac-pair-rabbit-pig) · Ketidakselarasan [Naga](/guide/zodiac-pair-dragon-pig) · Pertembungan [Ular](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Harimau](/guide/zodiac-tiger) · [Babi](/guide/zodiac-pig), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-rabbit": {
    "eyebrow": "Mengikut pasangan",
    "title": "Arnab dan Arnab — Cabang yang sama",
    "summary": "Hubungan apakah yang dimiliki dua orang Arnab, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Dua orang Arnab berkongsi cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang Arnab berkongsi cabang yang sama (卯 dan 卯). Ini bermaksud mereka serupa, bukan saling tertarik."
          },
          {
            "p": "Jadi ia mendapat {scoreSame}, sedikit di atas neutral ({scoreNeutral}): bukan keharmonian, pertembungan atau ketidakselarasan, hanya dinaikkan sedikit."
          },
          {
            "p": "卯 ialah cabang bumi yang keempat daripada dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang Arnab",
              "head": [
                "Perkara",
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
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacSame} mata dalam keserasian zodiak dan sebanyak {swingDayBranchSame} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi Arnab",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Arnab** — Enam-Harmoni [Anjing](/guide/zodiac-pair-rabbit-dog) · Triad separuh [Biri-biri](/guide/zodiac-pair-rabbit-goat), [Babi](/guide/zodiac-pair-rabbit-pig) · Ketidakselarasan [Monyet](/guide/zodiac-pair-rabbit-monkey) · Pertembungan [Ayam](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Arnab](/guide/zodiac-rabbit), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-goat": {
    "eyebrow": "Mengikut pasangan",
    "title": "Arnab dan Biri-biri — Triad separuh",
    "summary": "Hubungan apakah yang dimiliki Arnab dan Biri-biri, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Arnab dan Biri-biri membentuk triad separuh",
        "blocks": [
          {
            "p": "Arnab dan Biri-biri membentuk triad separuh. 亥卯未 ialah satu kumpulan triad (kumpulan kayu), dan 卯 ialah **cabang diraja** di tengahnya."
          },
          {
            "p": "Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi pasangan ini ialah triad separuh ({scoreBanhap})."
          },
          {
            "p": "Babi (亥) dan Biri-biri (未) daripada kumpulan yang sama tiada watak tengah 卯, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral."
          },
          {
            "p": "Pada bulatan, 卯 berada di tempat keempat dan 未 di tempat kelapan, dan kedua-dua watak itu berjarak empat langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Arnab dan Biri-biri",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Triad separuh"
                ],
                [
                  "Skor",
                  "{scoreBanhap}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacBanhap} mata dalam keserasian zodiak dan sebanyak {swingDayBranchBanhap} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Arnab** — Enam-Harmoni [Anjing](/guide/zodiac-pair-rabbit-dog) · Triad separuh [Biri-biri](/guide/zodiac-pair-rabbit-goat), [Babi](/guide/zodiac-pair-rabbit-pig) · Ketidakselarasan [Monyet](/guide/zodiac-pair-rabbit-monkey) · Pertembungan [Ayam](/guide/zodiac-pair-rabbit-rooster)",
              "Pasangan istimewa **Biri-biri** — Enam-Harmoni [Kuda](/guide/zodiac-pair-horse-goat) · Triad separuh [Arnab](/guide/zodiac-pair-rabbit-goat) · Ketidakselarasan [Tikus](/guide/zodiac-pair-rat-goat) · Pertembungan [Lembu](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Arnab](/guide/zodiac-rabbit) · [Biri-biri](/guide/zodiac-goat), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-monkey": {
    "eyebrow": "Mengikut pasangan",
    "title": "Arnab dan Monyet — Ketidakselarasan",
    "summary": "Hubungan apakah yang dimiliki Arnab dan Monyet, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Arnab dan Monyet membentuk ketidakselarasan",
        "blocks": [
          {
            "p": "Arnab dan Monyet membentuk ketidakselarasan. Kedudukan pertembungan bagi 卯 ialah 酉 (Ayam), dan 申 berada betul-betul bersebelahan dengannya; betul-betul bersebelahan dengan 寅 (Harimau), kedudukan pertembungan bagi 申, ialah 卯."
          },
          {
            "p": "Ia secara tradisinya dilihat sebagai pasangan yang saling berdendam namun tidak dapat berpisah. Ia kelihatan tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan, jadi ia mendapat {scoreWonjin} — lebih tinggi daripada pertembungan ({scoreChung}) dan lebih rendah daripada neutral ({scoreNeutral})."
          },
          {
            "p": "Pada bulatan, 卯 berada di tempat keempat dan 申 di tempat kesembilan, dan kedua-dua watak itu berjarak lima langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Arnab dan Monyet",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Ketidakselarasan"
                ],
                [
                  "Skor",
                  "{scoreWonjin}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menurunkan kadar padanan akhir sebanyak {swingZodiacWonjin} mata dalam keserasian zodiak dan sebanyak {swingDayBranchWonjin} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Arnab** — Enam-Harmoni [Anjing](/guide/zodiac-pair-rabbit-dog) · Triad separuh [Biri-biri](/guide/zodiac-pair-rabbit-goat), [Babi](/guide/zodiac-pair-rabbit-pig) · Ketidakselarasan [Monyet](/guide/zodiac-pair-rabbit-monkey) · Pertembungan [Ayam](/guide/zodiac-pair-rabbit-rooster)",
              "Pasangan istimewa **Monyet** — Enam-Harmoni [Ular](/guide/zodiac-pair-snake-monkey) · Triad separuh [Tikus](/guide/zodiac-pair-rat-monkey) · Ketidakselarasan [Arnab](/guide/zodiac-pair-rabbit-monkey) · Pertembungan [Harimau](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Arnab](/guide/zodiac-rabbit) · [Monyet](/guide/zodiac-monkey), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-rooster": {
    "eyebrow": "Mengikut pasangan",
    "title": "Arnab dan Ayam — Pertembungan",
    "summary": "Hubungan apakah yang dimiliki Arnab dan Ayam, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Arnab dan Ayam membentuk pertembungan",
        "blocks": [
          {
            "p": "Arnab dan Ayam membentuk pertembungan. 卯 dan 酉 berada tepat bertentangan antara satu sama lain dalam bulatan."
          },
          {
            "p": "Perkhidmatan ini mengekalkan {scoreChung} mata walaupun untuk pertembungan. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan, dan memberi skor yang hampir ke dasar sama dengan menjatuhkan hukuman ke atas dua orang."
          },
          {
            "p": "Pada bulatan, 卯 berada di tempat keempat dan 酉 di tempat kesepuluh, dan kedua-dua watak itu berjarak enam langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Arnab dan Ayam",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Pertembungan"
                ],
                [
                  "Skor",
                  "{scoreChung}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menurunkan kadar padanan akhir sebanyak {swingZodiacChung} mata dalam keserasian zodiak dan sebanyak {swingDayBranchChung} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Arnab** — Enam-Harmoni [Anjing](/guide/zodiac-pair-rabbit-dog) · Triad separuh [Biri-biri](/guide/zodiac-pair-rabbit-goat), [Babi](/guide/zodiac-pair-rabbit-pig) · Ketidakselarasan [Monyet](/guide/zodiac-pair-rabbit-monkey) · Pertembungan [Ayam](/guide/zodiac-pair-rabbit-rooster)",
              "Pasangan istimewa **Ayam** — Enam-Harmoni [Naga](/guide/zodiac-pair-dragon-rooster) · Triad separuh [Lembu](/guide/zodiac-pair-ox-rooster), [Ular](/guide/zodiac-pair-snake-rooster) · Ketidakselarasan [Harimau](/guide/zodiac-pair-tiger-rooster) · Pertembungan [Arnab](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Arnab](/guide/zodiac-rabbit) · [Ayam](/guide/zodiac-rooster), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-dog": {
    "eyebrow": "Mengikut pasangan",
    "title": "Arnab dan Anjing — Enam-Harmoni",
    "summary": "Hubungan apakah yang dimiliki Arnab dan Anjing, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Arnab dan Anjing membentuk enam-harmoni",
        "blocks": [
          {
            "p": "Arnab dan Anjing membentuk enam-harmoni. 卯 dan 戌 membentuk keharmonian dengan hanya dua watak."
          },
          {
            "p": "Enam-harmoni ialah hubungan baik yang paling kerap muncul dalam keserasian, dan pada {scoreYukhap} ia ialah skor tertinggi yang boleh diperoleh oleh kedua-dua haiwan itu."
          },
          {
            "p": "Pada bulatan, 卯 berada di tempat keempat dan 戌 di tempat kesebelas, dan kedua-dua watak itu berjarak lima langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Arnab dan Anjing",
              "head": [
                "Perkara",
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
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacYukhap} mata dalam keserasian zodiak dan sebanyak {swingDayBranchYukhap} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Arnab** — Enam-Harmoni [Anjing](/guide/zodiac-pair-rabbit-dog) · Triad separuh [Biri-biri](/guide/zodiac-pair-rabbit-goat), [Babi](/guide/zodiac-pair-rabbit-pig) · Ketidakselarasan [Monyet](/guide/zodiac-pair-rabbit-monkey) · Pertembungan [Ayam](/guide/zodiac-pair-rabbit-rooster)",
              "Pasangan istimewa **Anjing** — Enam-Harmoni [Arnab](/guide/zodiac-pair-rabbit-dog) · Triad separuh [Kuda](/guide/zodiac-pair-horse-dog) · Ketidakselarasan [Ular](/guide/zodiac-pair-snake-dog) · Pertembungan [Naga](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Arnab](/guide/zodiac-rabbit) · [Anjing](/guide/zodiac-dog), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-pig": {
    "eyebrow": "Mengikut pasangan",
    "title": "Arnab dan Babi — Triad separuh",
    "summary": "Hubungan apakah yang dimiliki Arnab dan Babi, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Arnab dan Babi membentuk triad separuh",
        "blocks": [
          {
            "p": "Arnab dan Babi membentuk triad separuh. 亥卯未 ialah satu kumpulan triad (kumpulan kayu), dan 卯 ialah **cabang diraja** di tengahnya."
          },
          {
            "p": "Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi pasangan ini ialah triad separuh ({scoreBanhap})."
          },
          {
            "p": "Biri-biri (未) dan Babi (亥) daripada kumpulan yang sama tiada watak tengah 卯, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral."
          },
          {
            "p": "Pada bulatan, 卯 berada di tempat keempat dan 亥 di tempat kedua belas, dan kedua-dua watak itu berjarak empat langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Arnab dan Babi",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Triad separuh"
                ],
                [
                  "Skor",
                  "{scoreBanhap}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacBanhap} mata dalam keserasian zodiak dan sebanyak {swingDayBranchBanhap} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Arnab** — Enam-Harmoni [Anjing](/guide/zodiac-pair-rabbit-dog) · Triad separuh [Biri-biri](/guide/zodiac-pair-rabbit-goat), [Babi](/guide/zodiac-pair-rabbit-pig) · Ketidakselarasan [Monyet](/guide/zodiac-pair-rabbit-monkey) · Pertembungan [Ayam](/guide/zodiac-pair-rabbit-rooster)",
              "Pasangan istimewa **Babi** — Enam-Harmoni [Harimau](/guide/zodiac-pair-tiger-pig) · Triad separuh [Arnab](/guide/zodiac-pair-rabbit-pig) · Ketidakselarasan [Naga](/guide/zodiac-pair-dragon-pig) · Pertembungan [Ular](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Arnab](/guide/zodiac-rabbit) · [Babi](/guide/zodiac-pig), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-dragon": {
    "eyebrow": "Mengikut pasangan",
    "title": "Naga dan Naga — Cabang yang sama",
    "summary": "Hubungan apakah yang dimiliki dua orang Naga, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Dua orang Naga berkongsi cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang Naga berkongsi cabang yang sama (辰 dan 辰). Ini bermaksud mereka serupa, bukan saling tertarik."
          },
          {
            "p": "Jadi ia mendapat {scoreSame}, sedikit di atas neutral ({scoreNeutral}): bukan keharmonian, pertembungan atau ketidakselarasan, hanya dinaikkan sedikit."
          },
          {
            "p": "辰 ialah cabang bumi yang kelima daripada dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang Naga",
              "head": [
                "Perkara",
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
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacSame} mata dalam keserasian zodiak dan sebanyak {swingDayBranchSame} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi Naga",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Naga** — Enam-Harmoni [Ayam](/guide/zodiac-pair-dragon-rooster) · Triad separuh [Tikus](/guide/zodiac-pair-rat-dragon) · Ketidakselarasan [Babi](/guide/zodiac-pair-dragon-pig) · Pertembungan [Anjing](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Naga](/guide/zodiac-dragon), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-rooster": {
    "eyebrow": "Mengikut pasangan",
    "title": "Naga dan Ayam — Enam-Harmoni",
    "summary": "Hubungan apakah yang dimiliki Naga dan Ayam, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Naga dan Ayam membentuk enam-harmoni",
        "blocks": [
          {
            "p": "Naga dan Ayam membentuk enam-harmoni. 辰 dan 酉 membentuk keharmonian dengan hanya dua watak."
          },
          {
            "p": "Enam-harmoni ialah hubungan baik yang paling kerap muncul dalam keserasian, dan pada {scoreYukhap} ia ialah skor tertinggi yang boleh diperoleh oleh kedua-dua haiwan itu."
          },
          {
            "p": "Pada bulatan, 辰 berada di tempat kelima dan 酉 di tempat kesepuluh, dan kedua-dua watak itu berjarak lima langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Naga dan Ayam",
              "head": [
                "Perkara",
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
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacYukhap} mata dalam keserasian zodiak dan sebanyak {swingDayBranchYukhap} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Naga** — Enam-Harmoni [Ayam](/guide/zodiac-pair-dragon-rooster) · Triad separuh [Tikus](/guide/zodiac-pair-rat-dragon) · Ketidakselarasan [Babi](/guide/zodiac-pair-dragon-pig) · Pertembungan [Anjing](/guide/zodiac-pair-dragon-dog)",
              "Pasangan istimewa **Ayam** — Enam-Harmoni [Naga](/guide/zodiac-pair-dragon-rooster) · Triad separuh [Lembu](/guide/zodiac-pair-ox-rooster), [Ular](/guide/zodiac-pair-snake-rooster) · Ketidakselarasan [Harimau](/guide/zodiac-pair-tiger-rooster) · Pertembungan [Arnab](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Naga](/guide/zodiac-dragon) · [Ayam](/guide/zodiac-rooster), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-dog": {
    "eyebrow": "Mengikut pasangan",
    "title": "Naga dan Anjing — Pertembungan",
    "summary": "Hubungan apakah yang dimiliki Naga dan Anjing, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Naga dan Anjing membentuk pertembungan",
        "blocks": [
          {
            "p": "Naga dan Anjing membentuk pertembungan. 辰 dan 戌 berada tepat bertentangan antara satu sama lain dalam bulatan."
          },
          {
            "p": "Perkhidmatan ini mengekalkan {scoreChung} mata walaupun untuk pertembungan. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan, dan memberi skor yang hampir ke dasar sama dengan menjatuhkan hukuman ke atas dua orang."
          },
          {
            "p": "Pada bulatan, 辰 berada di tempat kelima dan 戌 di tempat kesebelas, dan kedua-dua watak itu berjarak enam langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Naga dan Anjing",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Pertembungan"
                ],
                [
                  "Skor",
                  "{scoreChung}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menurunkan kadar padanan akhir sebanyak {swingZodiacChung} mata dalam keserasian zodiak dan sebanyak {swingDayBranchChung} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Naga** — Enam-Harmoni [Ayam](/guide/zodiac-pair-dragon-rooster) · Triad separuh [Tikus](/guide/zodiac-pair-rat-dragon) · Ketidakselarasan [Babi](/guide/zodiac-pair-dragon-pig) · Pertembungan [Anjing](/guide/zodiac-pair-dragon-dog)",
              "Pasangan istimewa **Anjing** — Enam-Harmoni [Arnab](/guide/zodiac-pair-rabbit-dog) · Triad separuh [Kuda](/guide/zodiac-pair-horse-dog) · Ketidakselarasan [Ular](/guide/zodiac-pair-snake-dog) · Pertembungan [Naga](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Naga](/guide/zodiac-dragon) · [Anjing](/guide/zodiac-dog), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-pig": {
    "eyebrow": "Mengikut pasangan",
    "title": "Naga dan Babi — Ketidakselarasan",
    "summary": "Hubungan apakah yang dimiliki Naga dan Babi, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Naga dan Babi membentuk ketidakselarasan",
        "blocks": [
          {
            "p": "Naga dan Babi membentuk ketidakselarasan. Kedudukan pertembungan bagi 辰 ialah 戌 (Anjing), dan 亥 berada betul-betul bersebelahan dengannya; betul-betul bersebelahan dengan 巳 (Ular), kedudukan pertembungan bagi 亥, ialah 辰."
          },
          {
            "p": "Ia secara tradisinya dilihat sebagai pasangan yang saling berdendam namun tidak dapat berpisah. Ia kelihatan tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan, jadi ia mendapat {scoreWonjin} — lebih tinggi daripada pertembungan ({scoreChung}) dan lebih rendah daripada neutral ({scoreNeutral})."
          },
          {
            "p": "Pada bulatan, 辰 berada di tempat kelima dan 亥 di tempat kedua belas, dan kedua-dua watak itu berjarak lima langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Naga dan Babi",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Ketidakselarasan"
                ],
                [
                  "Skor",
                  "{scoreWonjin}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menurunkan kadar padanan akhir sebanyak {swingZodiacWonjin} mata dalam keserasian zodiak dan sebanyak {swingDayBranchWonjin} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Naga** — Enam-Harmoni [Ayam](/guide/zodiac-pair-dragon-rooster) · Triad separuh [Tikus](/guide/zodiac-pair-rat-dragon) · Ketidakselarasan [Babi](/guide/zodiac-pair-dragon-pig) · Pertembungan [Anjing](/guide/zodiac-pair-dragon-dog)",
              "Pasangan istimewa **Babi** — Enam-Harmoni [Harimau](/guide/zodiac-pair-tiger-pig) · Triad separuh [Arnab](/guide/zodiac-pair-rabbit-pig) · Ketidakselarasan [Naga](/guide/zodiac-pair-dragon-pig) · Pertembungan [Ular](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Naga](/guide/zodiac-dragon) · [Babi](/guide/zodiac-pig), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-snake": {
    "eyebrow": "Mengikut pasangan",
    "title": "Ular dan Ular — Cabang yang sama",
    "summary": "Hubungan apakah yang dimiliki dua orang Ular, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Dua orang Ular berkongsi cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang Ular berkongsi cabang yang sama (巳 dan 巳). Ini bermaksud mereka serupa, bukan saling tertarik."
          },
          {
            "p": "Jadi ia mendapat {scoreSame}, sedikit di atas neutral ({scoreNeutral}): bukan keharmonian, pertembungan atau ketidakselarasan, hanya dinaikkan sedikit."
          },
          {
            "p": "巳 ialah cabang bumi yang keenam daripada dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang Ular",
              "head": [
                "Perkara",
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
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacSame} mata dalam keserasian zodiak dan sebanyak {swingDayBranchSame} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi Ular",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Ular** — Enam-Harmoni [Monyet](/guide/zodiac-pair-snake-monkey) · Triad separuh [Ayam](/guide/zodiac-pair-snake-rooster) · Ketidakselarasan [Anjing](/guide/zodiac-pair-snake-dog) · Pertembungan [Babi](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Ular](/guide/zodiac-snake), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-monkey": {
    "eyebrow": "Mengikut pasangan",
    "title": "Ular dan Monyet — Enam-Harmoni",
    "summary": "Hubungan apakah yang dimiliki Ular dan Monyet, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Ular dan Monyet membentuk enam-harmoni",
        "blocks": [
          {
            "p": "Ular dan Monyet membentuk enam-harmoni. 巳 dan 申 membentuk keharmonian dengan hanya dua watak."
          },
          {
            "p": "Enam-harmoni ialah hubungan baik yang paling kerap muncul dalam keserasian, dan pada {scoreYukhap} ia ialah skor tertinggi yang boleh diperoleh oleh kedua-dua haiwan itu."
          },
          {
            "p": "Pada bulatan, 巳 berada di tempat keenam dan 申 di tempat kesembilan, dan kedua-dua watak itu berjarak tiga langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Ular dan Monyet",
              "head": [
                "Perkara",
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
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacYukhap} mata dalam keserasian zodiak dan sebanyak {swingDayBranchYukhap} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Ular** — Enam-Harmoni [Monyet](/guide/zodiac-pair-snake-monkey) · Triad separuh [Ayam](/guide/zodiac-pair-snake-rooster) · Ketidakselarasan [Anjing](/guide/zodiac-pair-snake-dog) · Pertembungan [Babi](/guide/zodiac-pair-snake-pig)",
              "Pasangan istimewa **Monyet** — Enam-Harmoni [Ular](/guide/zodiac-pair-snake-monkey) · Triad separuh [Tikus](/guide/zodiac-pair-rat-monkey) · Ketidakselarasan [Arnab](/guide/zodiac-pair-rabbit-monkey) · Pertembungan [Harimau](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Ular](/guide/zodiac-snake) · [Monyet](/guide/zodiac-monkey), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-rooster": {
    "eyebrow": "Mengikut pasangan",
    "title": "Ular dan Ayam — Triad separuh",
    "summary": "Hubungan apakah yang dimiliki Ular dan Ayam, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Ular dan Ayam membentuk triad separuh",
        "blocks": [
          {
            "p": "Ular dan Ayam membentuk triad separuh. 巳酉丑 ialah satu kumpulan triad (kumpulan logam), dan 酉 ialah **cabang diraja** di tengahnya."
          },
          {
            "p": "Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi pasangan ini ialah triad separuh ({scoreBanhap})."
          },
          {
            "p": "Lembu (丑) dan Ular (巳) daripada kumpulan yang sama tiada watak tengah 酉, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral."
          },
          {
            "p": "Pada bulatan, 巳 berada di tempat keenam dan 酉 di tempat kesepuluh, dan kedua-dua watak itu berjarak empat langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Ular dan Ayam",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Triad separuh"
                ],
                [
                  "Skor",
                  "{scoreBanhap}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacBanhap} mata dalam keserasian zodiak dan sebanyak {swingDayBranchBanhap} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Ular** — Enam-Harmoni [Monyet](/guide/zodiac-pair-snake-monkey) · Triad separuh [Ayam](/guide/zodiac-pair-snake-rooster) · Ketidakselarasan [Anjing](/guide/zodiac-pair-snake-dog) · Pertembungan [Babi](/guide/zodiac-pair-snake-pig)",
              "Pasangan istimewa **Ayam** — Enam-Harmoni [Naga](/guide/zodiac-pair-dragon-rooster) · Triad separuh [Lembu](/guide/zodiac-pair-ox-rooster), [Ular](/guide/zodiac-pair-snake-rooster) · Ketidakselarasan [Harimau](/guide/zodiac-pair-tiger-rooster) · Pertembungan [Arnab](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Ular](/guide/zodiac-snake) · [Ayam](/guide/zodiac-rooster), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-dog": {
    "eyebrow": "Mengikut pasangan",
    "title": "Ular dan Anjing — Ketidakselarasan",
    "summary": "Hubungan apakah yang dimiliki Ular dan Anjing, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Ular dan Anjing membentuk ketidakselarasan",
        "blocks": [
          {
            "p": "Ular dan Anjing membentuk ketidakselarasan. Kedudukan pertembungan bagi 巳 ialah 亥 (Babi), dan 戌 berada betul-betul bersebelahan dengannya; betul-betul bersebelahan dengan 辰 (Naga), kedudukan pertembungan bagi 戌, ialah 巳."
          },
          {
            "p": "Ia secara tradisinya dilihat sebagai pasangan yang saling berdendam namun tidak dapat berpisah. Ia kelihatan tenang di permukaan, tetapi ketidakselarasan itu dipercayai berpanjangan, jadi ia mendapat {scoreWonjin} — lebih tinggi daripada pertembungan ({scoreChung}) dan lebih rendah daripada neutral ({scoreNeutral})."
          },
          {
            "p": "Pada bulatan, 巳 berada di tempat keenam dan 戌 di tempat kesebelas, dan kedua-dua watak itu berjarak lima langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Ular dan Anjing",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Ketidakselarasan"
                ],
                [
                  "Skor",
                  "{scoreWonjin}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menurunkan kadar padanan akhir sebanyak {swingZodiacWonjin} mata dalam keserasian zodiak dan sebanyak {swingDayBranchWonjin} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Ular** — Enam-Harmoni [Monyet](/guide/zodiac-pair-snake-monkey) · Triad separuh [Ayam](/guide/zodiac-pair-snake-rooster) · Ketidakselarasan [Anjing](/guide/zodiac-pair-snake-dog) · Pertembungan [Babi](/guide/zodiac-pair-snake-pig)",
              "Pasangan istimewa **Anjing** — Enam-Harmoni [Arnab](/guide/zodiac-pair-rabbit-dog) · Triad separuh [Kuda](/guide/zodiac-pair-horse-dog) · Ketidakselarasan [Ular](/guide/zodiac-pair-snake-dog) · Pertembungan [Naga](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Ular](/guide/zodiac-snake) · [Anjing](/guide/zodiac-dog), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-pig": {
    "eyebrow": "Mengikut pasangan",
    "title": "Ular dan Babi — Pertembungan",
    "summary": "Hubungan apakah yang dimiliki Ular dan Babi, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Ular dan Babi membentuk pertembungan",
        "blocks": [
          {
            "p": "Ular dan Babi membentuk pertembungan. 巳 dan 亥 berada tepat bertentangan antara satu sama lain dalam bulatan."
          },
          {
            "p": "Perkhidmatan ini mengekalkan {scoreChung} mata walaupun untuk pertembungan. Dalam myeongri tradisional, pertembungan ialah perlanggaran, bukan pengakhiran sesuatu hubungan, dan memberi skor yang hampir ke dasar sama dengan menjatuhkan hukuman ke atas dua orang."
          },
          {
            "p": "Pada bulatan, 巳 berada di tempat keenam dan 亥 di tempat kedua belas, dan kedua-dua watak itu berjarak enam langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Ular dan Babi",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Pertembungan"
                ],
                [
                  "Skor",
                  "{scoreChung}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menurunkan kadar padanan akhir sebanyak {swingZodiacChung} mata dalam keserasian zodiak dan sebanyak {swingDayBranchChung} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Ular** — Enam-Harmoni [Monyet](/guide/zodiac-pair-snake-monkey) · Triad separuh [Ayam](/guide/zodiac-pair-snake-rooster) · Ketidakselarasan [Anjing](/guide/zodiac-pair-snake-dog) · Pertembungan [Babi](/guide/zodiac-pair-snake-pig)",
              "Pasangan istimewa **Babi** — Enam-Harmoni [Harimau](/guide/zodiac-pair-tiger-pig) · Triad separuh [Arnab](/guide/zodiac-pair-rabbit-pig) · Ketidakselarasan [Naga](/guide/zodiac-pair-dragon-pig) · Pertembungan [Ular](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Ular](/guide/zodiac-snake) · [Babi](/guide/zodiac-pig), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-horse-horse": {
    "eyebrow": "Mengikut pasangan",
    "title": "Kuda dan Kuda — Cabang yang sama",
    "summary": "Hubungan apakah yang dimiliki dua orang Kuda, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Dua orang Kuda berkongsi cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang Kuda berkongsi cabang yang sama (午 dan 午). Ini bermaksud mereka serupa, bukan saling tertarik."
          },
          {
            "p": "Jadi ia mendapat {scoreSame}, sedikit di atas neutral ({scoreNeutral}): bukan keharmonian, pertembungan atau ketidakselarasan, hanya dinaikkan sedikit."
          },
          {
            "p": "午 ialah cabang bumi yang ketujuh daripada dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang Kuda",
              "head": [
                "Perkara",
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
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacSame} mata dalam keserasian zodiak dan sebanyak {swingDayBranchSame} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi Kuda",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Kuda** — Enam-Harmoni [Biri-biri](/guide/zodiac-pair-horse-goat) · Triad separuh [Harimau](/guide/zodiac-pair-tiger-horse), [Anjing](/guide/zodiac-pair-horse-dog) · Ketidakselarasan [Lembu](/guide/zodiac-pair-ox-horse) · Pertembungan [Tikus](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Kuda](/guide/zodiac-horse), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-horse-goat": {
    "eyebrow": "Mengikut pasangan",
    "title": "Kuda dan Biri-biri — Enam-Harmoni",
    "summary": "Hubungan apakah yang dimiliki Kuda dan Biri-biri, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Kuda dan Biri-biri membentuk enam-harmoni",
        "blocks": [
          {
            "p": "Kuda dan Biri-biri membentuk enam-harmoni. 午 dan 未 membentuk keharmonian dengan hanya dua watak."
          },
          {
            "p": "Enam-harmoni ialah hubungan baik yang paling kerap muncul dalam keserasian, dan pada {scoreYukhap} ia ialah skor tertinggi yang boleh diperoleh oleh kedua-dua haiwan itu."
          },
          {
            "p": "Pada bulatan, 午 berada di tempat ketujuh dan 未 di tempat kelapan, dan kedua-dua watak itu berjarak satu langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Kuda dan Biri-biri",
              "head": [
                "Perkara",
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
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacYukhap} mata dalam keserasian zodiak dan sebanyak {swingDayBranchYukhap} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Kuda** — Enam-Harmoni [Biri-biri](/guide/zodiac-pair-horse-goat) · Triad separuh [Harimau](/guide/zodiac-pair-tiger-horse), [Anjing](/guide/zodiac-pair-horse-dog) · Ketidakselarasan [Lembu](/guide/zodiac-pair-ox-horse) · Pertembungan [Tikus](/guide/zodiac-pair-rat-horse)",
              "Pasangan istimewa **Biri-biri** — Enam-Harmoni [Kuda](/guide/zodiac-pair-horse-goat) · Triad separuh [Arnab](/guide/zodiac-pair-rabbit-goat) · Ketidakselarasan [Tikus](/guide/zodiac-pair-rat-goat) · Pertembungan [Lembu](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Kuda](/guide/zodiac-horse) · [Biri-biri](/guide/zodiac-goat), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-horse-dog": {
    "eyebrow": "Mengikut pasangan",
    "title": "Kuda dan Anjing — Triad separuh",
    "summary": "Hubungan apakah yang dimiliki Kuda dan Anjing, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Kuda dan Anjing membentuk triad separuh",
        "blocks": [
          {
            "p": "Kuda dan Anjing membentuk triad separuh. 寅午戌 ialah satu kumpulan triad (kumpulan api), dan 午 ialah **cabang diraja** di tengahnya."
          },
          {
            "p": "Inyeon-Link hanya menerima pasangan yang termasuk cabang diraja, jadi pasangan ini ialah triad separuh ({scoreBanhap})."
          },
          {
            "p": "Harimau (寅) dan Anjing (戌) daripada kumpulan yang sama tiada watak tengah 午, jadi ia tidak dikira sebagai keharmonian dan dianggap neutral."
          },
          {
            "p": "Pada bulatan, 午 berada di tempat ketujuh dan 戌 di tempat kesebelas, dan kedua-dua watak itu berjarak empat langkah."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Kuda dan Anjing",
              "head": [
                "Perkara",
                "Nilai"
              ],
              "rows": [
                [
                  "Hubungan",
                  "Triad separuh"
                ],
                [
                  "Skor",
                  "{scoreBanhap}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacBanhap} mata dalam keserasian zodiak dan sebanyak {swingDayBranchBanhap} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi setiap haiwan",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Kuda** — Enam-Harmoni [Biri-biri](/guide/zodiac-pair-horse-goat) · Triad separuh [Harimau](/guide/zodiac-pair-tiger-horse), [Anjing](/guide/zodiac-pair-horse-dog) · Ketidakselarasan [Lembu](/guide/zodiac-pair-ox-horse) · Pertembungan [Tikus](/guide/zodiac-pair-rat-horse)",
              "Pasangan istimewa **Anjing** — Enam-Harmoni [Arnab](/guide/zodiac-pair-rabbit-dog) · Triad separuh [Kuda](/guide/zodiac-pair-horse-dog) · Ketidakselarasan [Ular](/guide/zodiac-pair-snake-dog) · Pertembungan [Naga](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Kuda](/guide/zodiac-horse) · [Anjing](/guide/zodiac-dog), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-goat-goat": {
    "eyebrow": "Mengikut pasangan",
    "title": "Biri-biri dan Biri-biri — Cabang yang sama",
    "summary": "Hubungan apakah yang dimiliki dua orang Biri-biri, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Dua orang Biri-biri berkongsi cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang Biri-biri berkongsi cabang yang sama (未 dan 未). Ini bermaksud mereka serupa, bukan saling tertarik."
          },
          {
            "p": "Jadi ia mendapat {scoreSame}, sedikit di atas neutral ({scoreNeutral}): bukan keharmonian, pertembungan atau ketidakselarasan, hanya dinaikkan sedikit."
          },
          {
            "p": "未 ialah cabang bumi yang kelapan daripada dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang Biri-biri",
              "head": [
                "Perkara",
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
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacSame} mata dalam keserasian zodiak dan sebanyak {swingDayBranchSame} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi Biri-biri",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Biri-biri** — Enam-Harmoni [Kuda](/guide/zodiac-pair-horse-goat) · Triad separuh [Arnab](/guide/zodiac-pair-rabbit-goat) · Ketidakselarasan [Tikus](/guide/zodiac-pair-rat-goat) · Pertembungan [Lembu](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Biri-biri](/guide/zodiac-goat), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-monkey-monkey": {
    "eyebrow": "Mengikut pasangan",
    "title": "Monyet dan Monyet — Cabang yang sama",
    "summary": "Hubungan apakah yang dimiliki dua orang Monyet, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Dua orang Monyet berkongsi cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang Monyet berkongsi cabang yang sama (申 dan 申). Ini bermaksud mereka serupa, bukan saling tertarik."
          },
          {
            "p": "Jadi ia mendapat {scoreSame}, sedikit di atas neutral ({scoreNeutral}): bukan keharmonian, pertembungan atau ketidakselarasan, hanya dinaikkan sedikit."
          },
          {
            "p": "申 ialah cabang bumi yang kesembilan daripada dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang Monyet",
              "head": [
                "Perkara",
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
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacSame} mata dalam keserasian zodiak dan sebanyak {swingDayBranchSame} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi Monyet",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Monyet** — Enam-Harmoni [Ular](/guide/zodiac-pair-snake-monkey) · Triad separuh [Tikus](/guide/zodiac-pair-rat-monkey) · Ketidakselarasan [Arnab](/guide/zodiac-pair-rabbit-monkey) · Pertembungan [Harimau](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Monyet](/guide/zodiac-monkey), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rooster-rooster": {
    "eyebrow": "Mengikut pasangan",
    "title": "Ayam dan Ayam — Cabang yang sama",
    "summary": "Hubungan apakah yang dimiliki dua orang Ayam, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Dua orang Ayam berkongsi cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang Ayam berkongsi cabang yang sama (酉 dan 酉). Ini bermaksud mereka serupa, bukan saling tertarik."
          },
          {
            "p": "Jadi ia mendapat {scoreSame}, sedikit di atas neutral ({scoreNeutral}): bukan keharmonian, pertembungan atau ketidakselarasan, hanya dinaikkan sedikit."
          },
          {
            "p": "酉 ialah cabang bumi yang kesepuluh daripada dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang Ayam",
              "head": [
                "Perkara",
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
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacSame} mata dalam keserasian zodiak dan sebanyak {swingDayBranchSame} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi Ayam",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Ayam** — Enam-Harmoni [Naga](/guide/zodiac-pair-dragon-rooster) · Triad separuh [Lembu](/guide/zodiac-pair-ox-rooster), [Ular](/guide/zodiac-pair-snake-rooster) · Ketidakselarasan [Harimau](/guide/zodiac-pair-tiger-rooster) · Pertembungan [Arnab](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Ayam](/guide/zodiac-rooster), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dog-dog": {
    "eyebrow": "Mengikut pasangan",
    "title": "Anjing dan Anjing — Cabang yang sama",
    "summary": "Hubungan apakah yang dimiliki dua orang Anjing, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Dua orang Anjing berkongsi cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang Anjing berkongsi cabang yang sama (戌 dan 戌). Ini bermaksud mereka serupa, bukan saling tertarik."
          },
          {
            "p": "Jadi ia mendapat {scoreSame}, sedikit di atas neutral ({scoreNeutral}): bukan keharmonian, pertembungan atau ketidakselarasan, hanya dinaikkan sedikit."
          },
          {
            "p": "戌 ialah cabang bumi yang kesebelas daripada dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang Anjing",
              "head": [
                "Perkara",
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
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacSame} mata dalam keserasian zodiak dan sebanyak {swingDayBranchSame} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi Anjing",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Anjing** — Enam-Harmoni [Arnab](/guide/zodiac-pair-rabbit-dog) · Triad separuh [Kuda](/guide/zodiac-pair-horse-dog) · Ketidakselarasan [Ular](/guide/zodiac-pair-snake-dog) · Pertembungan [Naga](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Anjing](/guide/zodiac-dog), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-pig-pig": {
    "eyebrow": "Mengikut pasangan",
    "title": "Babi dan Babi — Cabang yang sama",
    "summary": "Hubungan apakah yang dimiliki dua orang Babi, berapa skor yang diperoleh, dan sejauh mana skor itu menggerakkan kadar padanan akhir — dipaparkan tepat seperti yang terdapat dalam peraturan pengiraan Inyeon-Link.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Dua orang Babi berkongsi cabang yang sama",
        "blocks": [
          {
            "p": "Dua orang Babi berkongsi cabang yang sama (亥 dan 亥). Ini bermaksud mereka serupa, bukan saling tertarik."
          },
          {
            "p": "Jadi ia mendapat {scoreSame}, sedikit di atas neutral ({scoreNeutral}): bukan keharmonian, pertembungan atau ketidakselarasan, hanya dinaikkan sedikit."
          },
          {
            "p": "亥 ialah cabang bumi yang kedua belas daripada dua belas cabang bumi."
          }
        ]
      },
      {
        "title": "Angka bagi pasangan ini",
        "blocks": [
          {
            "table": {
              "caption": "Dua orang Babi",
              "head": [
                "Perkara",
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
                  "Bahagian daripada kadar padanan akhir dalam keserasian zodiak",
                  "{weightZodiac}"
                ],
                [
                  "Bahagian daripada kadar padanan akhir dalam keserasian cabang hari",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sejauh mana ia menggerakkan kadar padanan akhir",
        "blocks": [
          {
            "p": "Jika semua perkara lain sama, pasangan ini menaikkan kadar padanan akhir sebanyak {swingZodiacSame} mata dalam keserasian zodiak dan sebanyak {swingDayBranchSame} mata dalam keserasian cabang hari, berbanding pasangan neutral."
          },
          {
            "p": "Keserasian zodiak meletakkan cabang tahun kelahiran bersebelahan, dan keserasian cabang hari meletakkan cabang hari kelahiran. Kedua-duanya boleh menjadi cabang yang berbeza, jadi dua orang yang sama boleh menunjukkan hubungan yang berbeza dalam setiap satu."
          }
        ]
      },
      {
        "title": "Hubungan istimewa lain bagi Babi",
        "blocks": [
          {
            "ul": [
              "Pasangan istimewa **Babi** — Enam-Harmoni [Harimau](/guide/zodiac-pair-tiger-pig) · Triad separuh [Arnab](/guide/zodiac-pair-rabbit-pig) · Ketidakselarasan [Naga](/guide/zodiac-pair-dragon-pig) · Pertembungan [Ular](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apa yang tidak dinyatakan oleh panduan ini",
        "blocks": [
          {
            "ul": [
              "Satu haiwan tidak menentukan hubungan antara dua orang. {weightSaju} daripada kadar padanan akhir ditentukan oleh keserasian saju.",
              "Perubahan mata di atas mengandaikan semua perkara lain adalah sama; keputusan sebenar ditetapkan oleh keseluruhan saju kedua-dua orang."
            ]
          },
          {
            "p": "Panduan penuh untuk setiap haiwan terdapat di [Babi](/guide/zodiac-pig), dan carta lengkap terdapat dalam [carta dua belas cabang](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "Sepuluh Dewa",
    "title": "Sepuluh Dewa dan Posisi Pasangan",
    "summary": "Kami melihat apa pangkal hari setiap orang kepada satu sama lain melalui Sepuluh Dewa. Kami menerangkan mengapa kekayaan langsung dan kekayaan tidak langsung dibaca dengan cara yang berbeza walaupun kedua-duanya adalah kekayaan.",
    "backLabel": "Asas Pengiraan",
    "sections": [
      {
        "title": "Pangkal hari adalah diri seseorang itu sendiri",
        "blocks": [
          {
            "p": "Antara lapan watak dalam saju, **pangkal hari** (pangkal langit pada hari kelahiran) merujuk kepada diri seseorang itu sendiri. Tujuh watak yang tinggal dibaca sebagai persekitaran di mana pangkal hari itu diletakkan."
          },
          {
            "p": "**Sepuluh Dewa** (十神) membahagikan bagaimana pangkal hari memahami watak lain kepada sepuluh kategori. Apa yang memelihara saya adalah **sumber**, apa yang sama dengan saya adalah **rakan**, apa yang saya hasilkan adalah **output**, apa yang saya kawal adalah **kekayaan**, dan apa yang mengawal saya adalah **kuasa** — setiap lima ini kemudian dibahagikan mengikut polariti, menjadikannya sepuluh."
          }
        ]
      },
      {
        "title": "Apa yang pangkal hari setiap orang kepada satu sama lain",
        "blocks": [
          {
            "p": "Ini adalah item pertama dalam keserasian. Setelah ditentukan apa yang pangkal hari A memahami pangkal hari B, persepsi B terhadap A juga ditentukan, jadi terdapat **hanya enam kemungkinan**."
          },
          {
            "table": {
              "caption": "Mengikut skor tertinggi",
              "head": [
                "Pasangan",
                "Yin/Yang",
                "Nama",
                "Maksud"
              ],
              "rows": [
                [
                  "Kekayaan Langsung ↔ Kuasa Langsung",
                  "Polariti bertentangan",
                  "Ikatan hangat (有情)",
                  "Ini adalah pasangan yang secara tradisional dilihat sebagai posisi pasangan. Yin dan yang tidak sepadan, menarik satu sama lain."
                ],
                [
                  "Pegawai yang Menyakitkan ↔ Sumber Langsung",
                  "Polariti bertentangan",
                  "Pegawai yang Menyakitkan memakai Meterai (傷官佩印)",
                  "Satu sisi membungkus tenaga yang kuat dari sisi yang lain."
                ],
                [
                  "Rakan ↔ Rakan",
                  "Polariti yang sama",
                  "Setara",
                  "Mereka menyerupai satu sama lain dan setara, tetapi tidak mendorong satu sama lain."
                ],
                [
                  "Saingan ↔ Saingan",
                  "Polariti bertentangan",
                  "Persaingan",
                  "Mereka tertarik satu sama lain tetapi bersaing untuk posisi yang sama."
                ],
                [
                  "Kekayaan Tidak Langsung ↔ Kuasa Tidak Langsung",
                  "Polariti yang sama",
                  "Ikatan sejuk (無情)",
                  "Rangsangan adalah besar, tetapi beban juga berat."
                ],
                [
                  "Tuhan yang Makan ↔ Sumber Tidak Langsung",
                  "Polariti yang sama",
                  "Bintang burung hantu merampas makanan (梟神奪食)",
                  "Tenaga yang diberikan diambil oleh pasangan, menyekat aliran."
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yin dan Yang berada di persimpangan",
        "blocks": [
          {
            "p": "Sisi di mana yin dan yang tidak selari (Kekayaan yang Betul, Pegawai yang Betul, Rakan yang Betul) adalah emosional, sementara sisi yang sama (Sumber, Pegawai, Rakan) adalah tidak emosional, yang merupakan prinsip yang membezakan yang betul dan sisi Sepuluh Dewa."
          }
        ]
      },
      {
        "title": "Sebab untuk melihat dengan Sepuluh Dewa dan bukannya tiga elemen",
        "blocks": [
          {
            "p": "Terdapat kaedah untuk melihat hubungan pangkal hari dengan tiga elemen (penghasilan bersama, kesamaan, saling mengatasi). Ia mudah, tetapi **yin dan yang hilang.** 甲 (kayu yang) dan 乙 (kayu yin) menjadi 'kesamaan' yang sama seperti 甲 dan 甲, dan saling mengatasi dihimpunkan menjadi satu skor tanpa arah atau yin dan yang."
          },
          {
            "p": "Posisi pasangan mesti dinilai dari segi Sepuluh Dewa. Jika item yang dilihat oleh lima elemen dan item yang dilihat oleh Sepuluh Dewa dicampurkan dalam satu enjin, akan ada dua standard untuk dua watak yang sama. Oleh itu, kita menyatukan dengan Sepuluh Dewa."
          }
        ]
      },
      {
        "title": "Posisi pasangan adalah Kekayaan yang Betul dan Pegawai yang Betul",
        "blocks": [
          {
            "p": "Dalam tradisi, yang mana satu daripada Sepuluh Dewa mewakili pasangan berbeza mengikut jantina."
          },
          {
            "table": {
              "head": [
                "Jantina",
                "Posisi Pasangan",
                "Posisi yang Sepadan"
              ],
              "rows": [
                [
                  "Lelaki",
                  "Kekayaan Langsung (正財)",
                  "Kekayaan Tidak Langsung (偏財)"
                ],
                [
                  "Perempuan",
                  "Kuasa Langsung (正官)",
                  "Kuasa Tidak Langsung (偏官)"
                ]
              ]
            }
          },
          {
            "p": "Walaupun mereka adalah sumber yang sama, hanya **Kekayaan yang Betul** emosi yang dianggap sebagai posisi pasangan, sementara Sumber dibaca sebagai sifat aktiviti dan kekayaan. Oleh itu, Kekayaan yang Betul dan Pegawai yang Betul dikira sebagai 2 mata, sementara Sumber dan Pegawai dikira sebagai 1 mata, dan kedua-dua arah dijumlahkan — jika kedua-duanya dilihat sebagai posisi pasangan, ia adalah yang tertinggi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jika jantina tidak dinyatakan, abaikan item ini",
        "blocks": [
          {
            "p": "Jika item yang tidak dapat diputuskan ditetapkan kepada 0 mata, ia menghasilkan skor yang tidak adil rendah. Berat yang tinggal selepas mengabaikan item tersebut dinormalisasi semula [(item dan berat)](/guide/how-compatibility)."
          }
        ]
      },
      {
        "title": "Kami juga menunjukkan bentuk hubungan",
        "blocks": [
          {
            "p": "Selain daripada skor, kami menerangkan **bentuk apa** yang dimiliki pasangan pangkal hari pada skrin keputusan. Sama ada mereka berada dalam posisi yang serupa, sama ada satu pihak menyokong yang lain, atau sama ada satu pihak ditekan — jika ia adalah hubungan yang menyokong atau menekan, kami menjelaskan pihak mana yang memegang posisi tersebut."
          },
          {
            "p": "Jika hanya satu skor yang ditunjukkan, ia meninggalkan soalan 'jadi apa'. Bentuk bukanlah skor tetapi sesuatu untuk dibaca, dan bahkan pasangan dengan skor rendah mempunyai sesuatu untuk ditafsirkan."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Lima elemen",
    "title": "Elemen Sokongan — Tenaga yang diperlukan sekarang",
    "summary": "Kami melihat lima elemen bukan sebagai 'adakah mereka memilih dua' tetapi sebagai 'adakah pasangan mempunyai apa yang saya perlukan'. Kami juga mendedahkan nilai sempadan yang membezakan antara tuan hari yang kuat dan yang lemah.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Sama ada lima elemen adalah 'seimbang' bukanlah soalan tentang keserasian",
        "blocks": [
          {
            "p": "Terdapat kaedah untuk mengukur sama ada lima tenaga diedarkan secara merata dengan menggabungkan lima elemen kedua-dua orang. Namun, soalan tentang keserasian bukanlah itu. **Adakah pasangan mempunyai apa yang saya perlukan?**"
          },
          {
            "p": "Tingkat keseimbangan adalah simetri, tetapi pelengkap adalah secara asimetrik. Ini kerana apa yang A perlukan berbeza daripada apa yang B perlukan. Oleh itu, kami mengukur setiap pihak secara berasingan dan mengambil purata — kerana ia adalah purata, jumlah skor tetap simetri."
          }
        ]
      },
      {
        "title": "Elemen Sokongan — Kurangkan jika berlebihan, tambah jika tidak mencukupi",
        "blocks": [
          {
            "p": "Elemen Sokongan (用神) adalah 'tenaga yang diperlukan oleh orang ini sekarang'. Terdapat beberapa kaedah untuk menentukannya (menekan, menyokong, penyakit, dan komunikasi), tetapi ia boleh diterjemahkan ke dalam peraturan, dan yang paling banyak digunakan adalah **menekan (抑扶)**. Jika tuan hari kuat, ia dilihat bahawa tenaga untuk mengurangkan diperlukan, dan jika lemah, tenaga untuk menambah diperlukan."
          },
          {
            "table": {
              "head": [
                "Penghakiman",
                "Apa yang diperlukan",
                "Berapa banyak"
              ],
              "rows": [
                [
                  "Tuan hari kuat (身强)",
                  "Mengurangkan tenaga — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Tiga"
                ],
                [
                  "Tuan hari lemah (身弱)",
                  "Menambah tenaga — 印星 (in-seong) · 比劫 (bi-gyeob)",
                  "Dua"
                ],
                [
                  "Seimbang (中和)",
                  "Tidak boleh ditampung oleh elemen sokongan, jadi ia adalah tenaga yang paling nipis",
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
            "p": "Pihak pangkal hari adalah **印星 dan 比劫** — tenaga yang melahirkan saya dan tenaga yang serupa dengan saya. Oleh kerana dua daripada lima, jika tenaga itu seimbang sepenuhnya, ia menjadi {evenAllyRatio}. Satu julat ditetapkan di atas dan di bawah nilai tersebut."
          },
          {
            "table": {
              "caption": "Kadar sekutu (印星 + 比劫) dalam jumlah kuasa",
              "head": [
                "Kadar",
                "Penghakiman"
              ],
              "rows": [
                [
                  "{strongThreshold} atau lebih",
                  "Tuan hari kuat"
                ],
                [
                  "{weakThreshold} atau lebih dan kurang daripada {strongThreshold}",
                  "Seimbang"
                ],
                [
                  "Kurang daripada {weakThreshold}",
                  "Tuan hari lemah"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Keseimbangan adalah 'penghakiman yang kurang pasti'",
        "blocks": [
          {
            "p": "Keseimbangan bermaksud ia tidak boleh ditampung oleh elemen sokongan. Pada masa ini, kami hanya melihat dua tenaga yang paling nipis sebagai perlu. Pada skrin keputusan, ia dicatat sebagai 'sekarang dalam posisi nipis' dan bukannya pernyataan yang pasti."
          }
        ]
      },
      {
        "title": "Kuasa bukanlah jumlah watak",
        "blocks": [
          {
            "p": "Apabila mengira kuasa lima elemen, kami tidak hanya mengira lapan watak seperti yang muncul. Kami menggunakan nilai yang mencerminkan pangkal langit yang tersembunyi (地藏干) dalam cabang bumi dan musim tenaga bulan (月令) di mana seseorang dilahirkan."
          },
          {
            "p": "Jika kami hanya mengira watak permukaan, kami terlepas fakta bahawa bahkan dua watak 木 boleh mempunyai kekuatan yang sangat berbeza bergantung pada musim. 木 musim bunga dan 木 musim luruh, walaupun mereka adalah watak yang sama, mempunyai kuasa yang berbeza."
          }
        ]
      },
      {
        "title": "Menilai tahap pengisian",
        "blocks": [
          {
            "p": "Kami melihat kadar elemen sokongan saya dalam kuasa lawan. Namun, kami tidak menggunakan kadar itu secara langsung tetapi **membahagikan jangkaan dengan saiz elemen sokongan.** Apabila kuat, elemen sokongan adalah tiga (jangkaan 60%), dan apabila lemah, ia adalah dua (jangkaan 40%), jadi menggunakan kadar secara langsung bermakna bahawa seseorang yang kuat sentiasa menerima skor yang lebih tinggi."
          },
          {
            "p": "Jika diisi ke tahap yang diharapkan, skor hampir 78 mata diperoleh, dan jika diisi lebih banyak, ia mencapai 100 mata, sementara jika ia sangat kurang, ia menuju ke 55 mata. Di sini juga, bahagian bawah tidak ditetapkan pada 0."
          }
        ]
      },
      {
        "title": "Ini adalah penghakiman awal",
        "blocks": [
          {
            "p": "Analisis saju sebenar mempertimbangkan pembentukan dan iklim musim (suhu dan kelembapan musim) untuk menentukan elemen sokongan, dan kesimpulan boleh berbeza bergantung pada kaedah yang digunakan. Inyeon-Link hanya menggunakan elemen sokongan yang boleh diukur dengan **nilai kuasa.** Ini disebabkan oleh prinsip hanya menggunakan apa yang boleh diterjemahkan ke dalam peraturan, jadi input yang sama akan sentiasa menghasilkan jawapan yang sama."
          },
          {
            "p": "Sebaliknya, skrin keputusan juga mempersembahkan kekuatan dan kelemahan setiap orang bersama dengan tenaga yang diperlukan sekarang sebagai **bahan bacaan**. Ini untuk mengelakkan menyembunyikan asas skor."
          }
        ]
      }
    ]
  },
  "guide/affinity": {
    "eyebrow": "Standard kami",
    "title": "Inyeon’s Match — Sebab tidak memberikan skor keseluruhan",
    "summary": "Kami hanya mengambil data satu orang sambil membiarkan posisi lawan kosong dan menggantikan semua nilai yang mungkin ke dalam posisi itu. Kami menjelaskan sebab tidak melampirkan skor keseluruhan kepada jenis yang diperoleh dengan cara ini.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Pengiraan dilakukan sambil membiarkan posisi lawan kosong",
        "blocks": [
          {
            "p": "Skor kesesuaian dikira dengan mencocokkan dua orang. **Inyeon’s Match** hanya mengambil data satu orang sambil membiarkan posisi lawan kosong dan menguji semua nilai yang mungkin yang boleh masuk ke dalam posisi itu. Ia seperti menjalankan enjin kesesuaian secara terbalik."
          },
          {
            "p": "Oleh itu, tidak perlu mengetahui tarikh lahir lawan. Kami masih boleh berkata, 'Profil kesesuaian jenis apa yang sesuai untuk saya?' tentang seseorang yang belum kami temui."
          }
        ]
      },
      {
        "title": "Kami tidak menjalankan berjuta-juta kombinasi",
        "blocks": [
          {
            "p": "Skor kesesuaian dalam saju terdiri daripada empat item, dan **setiap item tidak bertindih dalam apa yang diperiksa.**"
          },
          {
            "table": {
              "head": [
                "Item",
                "Apa paksi pemeriksaan",
                "Bilangan kes"
              ],
              "rows": [
                [
                  "Hubungan pangkal hari · Sifat pasangan",
                  "Pangkal hari kedua orang — pangkal langit",
                  "10"
                ],
                [
                  "Pelengkap lima elemen",
                  "Elemen sokongan saya dan kuasa lima elemen lawan",
                  "5"
                ],
                [
                  "hubungan cabang hari",
                  "cabang hari kedua orang",
                  "12"
                ],
                [
                  "hubungan zodiak",
                  "cabang tahun kedua orang",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Oleh kerana nilai tidak bertukar antara item, **mencari titik tertinggi untuk setiap cabang akan menjadi titik tertinggi keseluruhan**. Tidak perlu memeriksa semua kombinasi tarikh lahir — hanya menetapkan sepuluh pangkal langit, dua belas cabang bumi, dan lima elemen sudah mencukupi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Peraturan yang sama terpakai",
        "blocks": [
          {
            "p": "Skor yang ditulis di sini diambil terus dari enjin kesesuaian. Oleh kerana tiada peraturan baru telah dicipta, jenis yang muncul di atas sini juga akan mempunyai skor tertinggi untuk item itu dalam kesesuaian sebenar. Jika peraturan kesesuaian diubah, skrin ini akan mengikuti."
          }
        ]
      },
      {
        "title": "Tiada skor keseluruhan diberikan",
        "blocks": [
          {
            "p": "Ini adalah keputusan yang paling penting di skrin ini. Mengumpul skor tertinggi untuk setiap cabang mungkin kelihatan menghasilkan 'padanan sempurna', tetapi orang itu mungkin **tidak benar-benar wujud.**"
          },
          {
            "p": "Dalam orang sebenar, tuan hari dan lima elemen tidak beroperasi secara berasingan. Seseorang dengan 甲木 biasanya mempunyai tenaga 木 yang kuat juga. Kaedah mengira cabang secara berasingan mengabaikan korelasi itu, jadi nilai yang diperoleh dengan menghubungkan skor tertinggi untuk setiap cabang menjadi kombinasi yang tidak wujud dalam realiti."
          },
          {
            "p": "Oleh itu, skrin hanya memaparkan **skor item** dan tidak memberikan skor keseluruhan. Skor keseluruhan akan dikira dengan menerima tarikh lahir orang lain untuk [kesesuaian saju](/compatibility)."
          }
        ]
      },
      {
        "title": "Cara membaca 'jenis padanan'",
        "blocks": [
          {
            "p": "Keputusan bermaksud 'jika anda bertemu dengan seseorang dari jenis ini, item ini akan mendapat skor tinggi'. Ia bukan kriteria untuk memilih seseorang, tetapi lebih kepada cara membacanya dari satu perspektif untuk memahami diri sendiri."
          },
          {
            "p": "Sebab-sebab mengapa jenis tertentu mendapat skor tinggi juga dicatat item demi item — sama ada tuan hari berada dalam kedudukan yang baik, atau sama ada orang itu memiliki tenaga yang saya perlukan sekarang."
          }
        ]
      },
      {
        "title": "Alat pengesahan",
        "blocks": [
          {
            "p": "Anda mungkin ingin tahu jika orang yang anda fikirkan sesuai dengan jenis itu. Dengan memasukkan tarikh lahir mereka ke dalam alat pengesahan di skrin keputusan, anda akan diberitahu tentang tuan hari, cabang hari, dan cabang tahun mereka. Nilai input tidak disimpan pada masa ini [(tidak disimpan)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Waktu",
    "title": "Waktu Kelahiran Setiap Orang Diperbetulkan Secara Berasingan",
    "summary": "Keserasian mengira waktu dua orang secara berasingan. Ini menerangkan bagaimana pembetulan digunakan apabila tempat dan era kelahiran mereka berbeza, dan apa yang berubah apabila hanya seorang daripada mereka tidak mengetahui waktunya.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Jam dan matahari tidak sepadan",
        "blocks": [
          {
            "p": "Dalam saju, waktu kelahiran dibaca daripada kedudukan matahari, bukan daripada jam. Tetapi seluruh negara menggunakan satu waktu piawai, jadi jam dan matahari di sesuatu tempat menjadi tidak selaras."
          },
          {
            "p": "Waktu piawai Korea berdasarkan 135°E, manakala Seoul terletak kira-kira 127°E. Matahari Seoul mencapai titik tertingginya lebih lewat daripada yang ditunjukkan jam, kira-kira **32 minit**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minit boleh menggerakkan tiang jam sebanyak satu langkah",
        "blocks": [
          {
            "p": "Seseorang yang lahir di Seoul pada pukul 11:40 mengikut jam dilahirkan pada 11:08 dalam masa solar sebenar, yang masih berada dalam jam Kuda (午, 11:00–13:00). Jika lahir pada 11:20 mengikut jam, mereka dilahirkan pada 10:48, yang jatuh dalam jam Ular (巳, 9:00–11:00). Pembetulan ini wujud untuk orang yang berdiri tepat di sempadan seperti ini."
          }
        ]
      },
      {
        "title": "Pembetulan digunakan kepada setiap orang secara berasingan",
        "blocks": [
          {
            "p": "Keserasian membina carta setiap orang secara bersendirian. Itulah sebabnya skrin input meminta tempat kelahiran **untuk setiap orang**. Jika seorang lahir di Seoul dan seorang lagi di luar negara, waktu mereka diperbetulkan secara berasingan, dengan longitud dan zon waktu yang berbeza."
          },
          {
            "p": "Senarai bandar kini mengandungi {cityCount} tempat. Bagi negara yang longitudnya sangat berbeza, bandar dipecahkan, kerana **15° longitud menggerakkan tiang jam sebanyak satu langkah**."
          },
          {
            "p": "Jika anda tidak memilih, Seoul digunakan. Jika hanya seorang lahir di luar negara dan kedua-duanya dibiarkan pada Seoul, hanya tiang jam orang yang lahir di luar negara itu yang tersasar; nilai orang lain tidak terjejas, kerana pembetulan digunakan seorang demi seorang."
          }
        ]
      },
      {
        "title": "Era yang berbeza menggunakan waktu piawai yang berbeza",
        "blocks": [
          {
            "p": "Dua orang yang berbeza usia hidup di bawah waktu piawai tempoh yang berbeza. Itulah sebabnya perbezaan longitud sahaja tidak mencukupi."
          },
          {
            "ul": [
              "**Sebelum 1912** — Korea tidak mempunyai waktu piawai yang bersatu (waktu min tempatan).",
              "**1954–1961** — waktu piawai ialah UTC+8:30.",
              "**1948–51 · 1955–60 · 1987–88** — waktu penjimatan siang berkuat kuasa."
            ]
          },
          {
            "p": "Inyeon-Link tidak menetapkan meridian piawai secara tetap. Ia mencari **zon waktu IANA** tempat kelahiran untuk mengetahui waktu piawai yang sebenarnya digunakan pada ketika itu, supaya era setiap orang digunakan walaupun tahun kelahiran mereka berbeza."
          }
        ]
      },
      {
        "title": "Sejurus selepas tengah malam, pangkal hari berubah",
        "blocks": [
          {
            "p": "Pembetulan ialah −32 minit, jadi seseorang yang lahir antara 00:00 dan 00:32 mengikut jam dilahirkan dalam **jam 23:00 hari sebelumnya** dalam masa solar sebenar. Tarikh turut dimundurkan bersamanya."
          },
          {
            "p": "Dalam keserasian, ini sangat penting. Apabila tiang hari berundur sehari, kedua-dua pangkal hari dan cabang hari berubah, jadi hubungan pangkal hari, Bintang Pasangan dan hubungan cabang hari semuanya dikira semula dengan watak yang berbeza, dan kekuatan lima elemen turut berubah."
          }
        ]
      },
      {
        "title": "Tidak mengapa jika hanya seorang tidak mengetahui waktunya",
        "blocks": [
          {
            "p": "Waktu kelahiran adalah pilihan, dan keserasian tetap dikira walaupun hanya seorang daripada dua orang tidak mengetahuinya. Hanya orang yang tidak mengetahuinya dikira tanpa tiang jam, dan skrin keputusan menyatakannya. Nilai orang lain kekal seperti sedia ada."
          },
          {
            "p": "Tiada satu pun daripada empat item keserasian menggunakan tiang jam secara langsung, tetapi ia menjejaskan kekuatan lima elemen, jadi lebih tepat jika anda memasukkannya apabila anda tahu. Keserasian zodiak memberikan nilai yang sama dengan atau tanpa waktu — [ia hanya melihat cabang tahun](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Privasi",
    "title": "Bagaimana Kami Mengelak Menyimpan Butiran Dua Orang",
    "summary": "Keserasian meminta anda memasukkan tarikh lahir orang lain juga. Ini menerangkan, secara teknikal, apa maksudnya apabila input kedua-dua orang tidak direkodkan di mana-mana, dan apa yang dibawa oleh pautan keputusan.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Anda memasukkan maklumat orang lain",
        "blocks": [
          {
            "p": "Skrin keserasian mengambil tarikh lahir anda dan tarikh lahir orang lain bersama-sama. Tarikh lahir orang lain ialah maklumat peribadinya, jadi kami menerangkan secara berasingan bagaimana Inyeon-Link mengendalikan kedua-duanya."
          },
          {
            "p": "Tiada akaun, dan kami tidak meminta nama, alamat e-mel atau nombor telefon. Kami hanya menerima dua tarikh lahir dan, secara pilihan, waktu lahir, tempat lahir dan jantina, dan tiada satu pun yang kekal sebaik sahaja pengiraan selesai."
          },
          {
            "p": "Terdapat medan untuk nama paparan yang ditunjukkan pada skrin keputusan, tetapi ia hanya untuk paparan dan tidak digunakan dalam pengiraan. Anda tidak perlu memasukkan nama sebenar."
          }
        ]
      },
      {
        "title": "Pautan keputusan mengandungi kedua-dua tarikh lahir",
        "blocks": [
          {
            "p": "Apabila pengiraan selesai, alamatnya kelihatan seperti ini."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Bahagian selepas **#** memegang input kedua-dua orang. Ia dipanggil fragmen, dan mengikut tingkah laku web piawai **pelayar tidak menghantarnya kepada pelayan**. Ia direka untuk menunjuk ke satu kedudukan dalam dokumen, jadi pelayan tidak pernah melihatnya."
          },
          {
            "p": "Apabila anda membuka pautan keputusan, pelayar membaca nilai itu dan meminta pengiraan; pelayan menerima nilai yang diperlukan, mengembalikan jawapan dan melupakannya."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sebelum anda menghantar pautan kepada orang lain",
        "blocks": [
          {
            "p": "Tidak disimpan di pelayan tidak sama dengan pautan itu rahsia. Sesiapa yang menerima pautan boleh melihat kedua-dua tarikh lahir seperti sedia ada, dan pautan yang ditinggalkan dalam bilik sembang kekal dalam bilik sembang itu tanpa mengira pelayan kami. Sila hantarkannya dengan mengingati bahawa ia mengandungi butiran orang lain."
          }
        ]
      },
      {
        "title": "Mengapa tiada apa yang kekal walaupun pengiraan berjalan di pelayan",
        "blocks": [
          {
            "p": "Untuk menyediakan carta saju kami memerlukan jadual almanak, yang terlalu besar untuk dihantar ke pelayar, jadi pengiraan berjalan di pelayan. Tetapi **sebaik sahaja permintaan diselesaikan, nilai itu tidak digunakan di tempat lain.** Tiada kod yang menulisnya ke pangkalan data."
          },
          {
            "p": "Satu-satunya rekod yang kekal ialah pembilang yang menghalang seseorang daripada menghantar terlalu banyak permintaan dalam masa singkat. Ia tidak menyimpan tarikh lahir dan tidak menyimpan alamat IP seperti sedia ada; ia mengira satu nilai, yang di-hash bersama tarikh, dan nilai itu berubah apabila hari bertukar."
          }
        ]
      },
      {
        "title": "Apa yang kami korbankan dengan tidak menyimpan",
        "blocks": [
          {
            "p": "Kerana tiada apa yang disimpan, ada beberapa perkara yang telah kami lepaskan."
          },
          {
            "ul": [
              "**Anda tidak boleh mendapatkan semula keputusan keserasian yang lalu.** Anda perlu menyimpan pautan untuk melihatnya semula.",
              "**Dua orang yang sama dikira semula setiap kali.** Tiada cache. Tetapi setiap peraturan bersifat deterministik, jadi [input yang sama sentiasa memberikan nilai yang sama](/guide/how-compatibility).",
              "**Menyegarkan semula membawa kembali pintu iklan.** Tiada tempat untuk menyimpan rekod bahawa anda telah menontonnya."
            ]
          }
        ]
      },
      {
        "title": "Jika anda membeli laporan",
        "blocks": [
          {
            "p": "Jika anda membeli laporan, rekod transaksi disimpan pada ketika itu: rekod pembayaran mempunyai tempoh penyimpanan yang diwajibkan oleh undang-undang, dan tanpa sejarah pesanan bayaran balik tidak boleh diproses. Walaupun begitu, **kedua-dua tarikh lahir tidak dilampirkan pada pesanan**; ia diminta semula apabila PDF dibuat selepas pengesahan pembayaran, dan digunakan hanya pada saat itu."
          },
          {
            "p": "Butiran terdapat dalam [dasar privasi](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produk Berbayar",
    "title": "Apa yang termasuk dalam laporan berbayar?",
    "summary": "Ini menerangkan apa yang telah ditambahkan ke PDF sambil mengekalkan skrin tidak berubah, item demi item. Nilai dan kandungan dibaca dari tetapan produk sebenar.",
    "backLabel": "Asas Pengiraan",
    "sections": [
      {
        "title": "Skrin tetap tidak berubah, hanya ditambah ke PDF",
        "blocks": [
          {
            "p": "Pengiraan kesesuaian dan pertanyaan keputusan adalah **percuma**. Kadar padanan, skor dan berat item, carta asal saju kedua-dua individu, dan bentuk hubungan semuanya boleh dilihat di skrin. Tiada apa yang telah dikeluarkan dari skrin semasa membuat laporan berbayar."
          },
          {
            "p": "Tujuan laporan adalah untuk **menambah lapisan yang tidak ada di skrin**. Dan lapisan itu tidak direka; ia terdiri daripada nilai yang telah dikira semasa proses penilaian tetapi tidak digunakan di skrin."
          }
        ]
      },
      {
        "title": "Laporan Kesesuaian Saju PDF — {priceGunghapDomestic}",
        "slot": "gunghapContents",
        "blocks": [
          {
            "p": "Pembayaran domestik {priceGunghapDomestic} (termasuk VAT), pembayaran antarabangsa {priceGunghapGlobal}. A4 {pagesGunghap} halaman."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "**Halaman 1-3 disusun untuk mengekalkan apa yang ada di skrin** dan **dari halaman 4 seterusnya adalah kandungan yang tidak ada di skrin**. Di bawah, ia menerangkan mengapa perkara tertentu tidak dipaparkan di skrin."
          }
        ]
      },
      {
        "title": "Halaman 4 — Arah dua tenaga",
        "blocks": [
          {
            "p": "Item-item dari lima elemen di skrin dipersembahkan sebagai satu skor tunggal. Namun, skor tunggal itu adalah **purata dari dua arah** — mengukur berapa banyak yang satu mengisi saya dan berapa banyak saya mengisi yang lain, dan merata-rata nilai-nilai tersebut."
          },
          {
            "p": "Keselarasan secara semula jadi adalah **asimetrik**. Ini kerana tenaga yang diperlukan oleh saya dan tenaga yang diperlukan oleh yang lain adalah berbeza. Jika anda hanya melihat purata, hubungan di mana satu pihak mengisi pihak lain dengan ketara dan hubungan di mana kedua-duanya saling mengisi secara seimbang akan muncul sebagai nombor yang sama. Laporan memisahkan kedua-duanya."
          },
          {
            "p": "Juga termasuk dalam bahagian yang sama adalah **graf hubungan empat tiang**. Satu-satunya yang masuk ke dalam kadar kesesuaian adalah cabang hari (日支) — kerana ia adalah posisi pasangan — tetapi cabang tahun, bulan, dan jam yang lain juga boleh dibaca dengan graf hubungan yang sama."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Skor dalam jadual ini tidak masuk ke dalam kadar kesesuaian",
        "blocks": [
          {
            "p": "Jika dimasukkan, jumlah skor akan berubah dan tidak akan sepadan dengan pautan hasil yang telah dihantar. Oleh itu, ia hanya termasuk sebagai bahan bacaan, dan fakta itu dicatat di bawah jadual."
          }
        ]
      },
      {
        "title": "Halaman 5 — Tinjauan lebih dekat pada saju setiap orang",
        "blocks": [
          {
            "p": "Bar-bar dari lima elemen di skrin menunjukkan **berapa banyak yang ada**. Laporan menambah **sama ada bulan kelahiran menyokong tenaga itu**. Walaupun dengan jumlah yang sama, tenaga yang kuat (旺) dan tenaga yang mati (死) mempunyai kekuatan yang berbeza."
          },
          {
            "p": "Anda boleh melihat kekuatan sebelum dan selepas menggandakan dengan tenaga bulan secara berdampingan, menunjukkan berapa banyak musim telah meningkatkannya. **Nisbah sekutu** yang membezakan antara tuan hari yang kuat dan tuan hari yang lemah juga dicatat — skrin hanya menunjukkan penilaian, tetapi laporan menunjukkan di mana penilaian itu dibuat."
          }
        ]
      },
      {
        "title": "Halaman 6 — Apa yang dimaksudkan dengan empat tiang orang lain bagi saya",
        "blocks": [
          {
            "p": "Kadar kesesuaian hanya membandingkan **pangkal hari** kedua individu. Namun, tiga tiang yang tinggal dari orang lain juga ditentukan oleh Sepuluh Dewa menggunakan peraturan yang sama. Walaupun anda boleh memahami **apa maksud orang ini bagi saya** dengan melihat pangkal hari sahaja, anda tidak dapat mengetahui **apa posisi orang itu bermakna bagi saya**."
          },
          {
            "p": "Memandangkan terdapat arah, kedua-dua pihak dipersembahkan secara berasingan. Apa yang saya lihat dan apa yang dilihat oleh yang lain adalah berbeza."
          }
        ]
      },
      {
        "title": "Halaman 7 — Bagaimana saju ini dikira",
        "blocks": [
          {
            "p": "Ia menyatakan berapa banyak waktu kelahiran disesuaikan dengan waktu solar sebenar, sama ada pembetulan menyebabkan tarikh berubah, dan apa tarikh solar dan lunar ketika saju dihasilkan. Konsep ini dijelaskan dalam dokumen [Menyesuaikan waktu kelahiran dengan waktu solar sebenar](/guide/true-solar-time), tetapi **nilai berapa minit yang disesuaikan dalam kes anda** berbeza dari orang ke orang, jadi ia hanya termasuk dalam laporan."
          }
        ]
      },
      {
        "title": "Laporan profil kesesuaian Inyeon PDF — {priceAffinityDomestic}",
        "slot": "affinityContents",
        "blocks": [
          {
            "p": "Pembayaran domestik {priceAffinityDomestic} (termasuk VAT), pembayaran antarabangsa {priceAffinityGlobal}. A4 {pagesAffinity} halaman."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Bahagian ini adalah **jadual peringkat keseluruhan**. Skrin hanya menunjukkan set yang sesuai dengan baik, tetapi laporan menyenaraikan semua sepuluh pangkal langit dan dua belas cabang bumi **sepenuhnya**. Jika anda hanya melihat set teratas, anda tidak akan tahu 'siapa yang datang seterusnya' dan 'yang mana yang paling tidak sesuai'."
          }
        ]
      },
      {
        "title": "Perkara yang perlu diketahui sebelum membeli",
        "blocks": [
          {
            "p": "**Pelayan tidak menyimpan fail.** Setelah pembayaran diluluskan, dokumen dihasilkan dan dihantar dengan segera, meninggalkan tiada apa-apa di pelayan. Prinsip perkhidmatan ini untuk tidak menyimpan nilai input dikekalkan walaupun dalam aliran berbayar."
          },
          {
            "p": "Oleh itu, **sila simpan fail segera selepas pembayaran.** Anda boleh menerima pesanan yang sama sehingga lima kali, tetapi jika anda meninggalkan skrin hasil dan nilai input hilang, anda tidak dapat menciptanya semula."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Laporan juga adalah bahan rujukan",
        "blocks": [
          {
            "p": "Hanya kerana panjangnya telah meningkat tidak bermakna kesimpulan lebih pasti. Apa yang terdapat dalam laporan lebih banyak adalah **asas pengiraan yang sama**, bukan penegasan yang lebih kuat. Bacaan takdir adalah bidang di mana kesimpulan boleh berbeza bergantung kepada pengamal, dan perkhidmatan ini hanya mengira apa yang boleh diterjemahkan ke dalam peraturan."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Notis",
    "title": "Pengumuman",
    "summary": "Ini adalah tempat untuk memaklumkan perubahan yang mempengaruhi penggunaan.",
    "backLabel": "Kembali ke Halaman Utama",
    "sections": []
  },
  "contact": {
    "eyebrow": "Hubungi",
    "title": "Pertanyaan",
    "summary": "Ini adalah saluran untuk pertanyaan mengenai penggunaan, pengembalian, permintaan maklumat peribadi, dan laporan kesalahan, bersama dengan maklumat perniagaan.",
    "backLabel": "Kembali ke Halaman Utama",
    "sections": [
      {
        "title": "Hubungi melalui Email",
        "blocks": [
          {
            "p": "Sila hantarkan pertanyaan ke **{email}**. Kami akan memberi maklum balas dalam masa 2 hari bekerja. Untuk pertanyaan mengenai pembayaran dan pengembalian, sila sertakan **nombor pesanan atau email yang digunakan untuk pembayaran** untuk pengesahan yang lebih cepat."
          },
          {
            "p": "Pertanyaan melalui telefon boleh dibuat di {customerCenter}."
          }
        ]
      },
      {
        "title": "Apa yang boleh dihantar ke saluran ini?",
        "blocks": [
          {
            "ul": [
              "**Pembayaran dan Pengembalian** — Jika dokumen tidak dibuat atau jumlah pembayaran berbeza dari pesanan, pengembalian penuh akan diberikan. Syarat ada dalam [dasar pengembalian](/refund-policy).",
              "**Maklumat Peribadi** — Kami menerima permintaan untuk melihat, membetulkan, dan memadam. Dasar pemprosesan ada dalam [dasar privasi](/privacy).",
              "**Laporan Kesalahan Pengiraan** — Jika carta asal saju atau skor nampak aneh, sila maklumkan kepada kami. Jika anda sertakan bila anda memasukkan tarikh dan waktu, kami boleh mengira semula dengan nilai yang sama."
            ]
          }
        ]
      },
      {
        "title": "Maklumat Perniagaan",
        "blocks": [
          {
            "ul": [
              "**Nama Perniagaan** — {companyName}",
              "**Wakil** — {representative}",
              "**Nombor Pendaftaran Perniagaan** — {businessNumber}",
              "**Nombor Pendaftaran Perniagaan Pesanan Mel** — {mailOrderNumber}",
              "**Alamat** — {address}",
              "**Pusat Khidmat Pelanggan** — {customerCenter}",
              "**Email** — {email}",
              "**Pegawai Perlindungan Maklumat Peribadi** — {privacyOfficer}",
              "**Penyedia Hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Anda tidak perlu menyertakan tarikh dan waktu kelahiran anda dalam email pertanyaan. Kami tidak menyimpan input, jadi kami tidak dapat mengambilnya semula, dan nombor pesanan sudah cukup untuk pengesahan. Sila hanya sertakan jika ia perlu untuk laporan kesalahan pengiraan."
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
    "engine": "Pengiraan",
    "support": "Sokongan"
  },
  "intro": "Perubahan kepada terma penggunaan anda — harga, polisi — akan dipaparkan di sini sebelum ia berkuatkuasa. Penambahbaikan dalaman tidak disenaraikan: apa yang muncul di sini adalah apa yang anda perlu tahu.",
  "empty": {
    "title": "Tiada notis lagi",
    "body": "Apabila sesuatu berubah, ia akan muncul di sini."
  },
  "effective": "Berkuatkuasa {date}",
  "pager": {
    "label": "Halaman notis",
    "newer": "← Lebih Baru",
    "older": "Lebih Lama →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Halaman Hubungi dan Mengenai kini dibuka",
      "body": [
        "Soalan, pengembalian wang, permintaan privasi dan laporan kesilapan pengiraan kini mempunyai satu tempat untuk pergi — lihat halaman hubungi di footer.",
        "Jika sesuatu kelihatan salah kira, sila sertakan butiran kelahiran yang menghasilkannya. Kami tidak menyimpan apa yang anda masukkan, jadi tanpa maklumat tersebut kami tidak dapat menghasilkan semula bacaan."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Laporan dikeluarkan dalam Bahasa Inggeris untuk Arab dan Khmer",
      "body": [
        "Jika anda membaca dalam Bahasa Arab atau Khmer, laporan PDF yang anda beli dihasilkan dalam Bahasa Inggeris. Alat yang menyusun dokumen kami belum dapat menetapkan perenggan dalam skrip tersebut.",
        "Skrin kekal dalam bahasa anda, dan nama anda dicetak dalam skrip anda sendiri di dalam laporan.",
        "Nota yang sama muncul sebelum pembayaran. Apabila alat menyokong skrip ini, kami akan menyatakannya di sini."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Setiap bacaan membawa versi peraturan yang digunakan",
      "body": [
        "Setiap bacaan dan laporan membawa set peraturan yang digunakan untuk menghasilkannya (contohnya inyeonlink-match-v10). Input yang sama pada set peraturan yang sama sentiasa memberikan nombor yang sama.",
        "Jika kami mengubah peraturan tafsiran dengan cara yang boleh mengubah skor, kami akan memaparkannya di sini terlebih dahulu, dengan tarikh ia berkuatkuasa — kerana pautan keputusan yang anda pegang sudah tentu akan dibaca dengan berbeza.",
        "Set peraturan semasa adalah v10. Pembayaran belum dibuka."
      ]
    }
  }
} satisfies NoticeCopy;
