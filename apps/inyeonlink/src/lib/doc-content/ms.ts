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
    "summary": "Inyeon-Link mendedahkan semua peraturan yang digunakannya. Anda boleh menyemak item dan beratnya, skor daripada jadual hubungan cabang bumi, dan nilai ambang yang membezakan antara seorang penguasa hari yang kuat dan seorang penguasa hari yang lemah — anda boleh melihat dari mana nombor di skrin datang.",
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
            "p": "Bahagian saju dibahagikan lagi kepada empat. Setiap item dipilih untuk memastikan bahawa apa yang mereka pertimbangkan tidak bert重重重重."
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
                  "Hubungan Cabang Hari",
                  "Apa cabang hari (日干) kedua orang itu terhadap satu sama lain — dilihat melalui Sepuluh Dewa",
                  "{weightDayMaster}"
                ],
                [
                  "Pelengkap Lima Elemen",
                  "Adakah pasangan mempunyai tenaga yang saya perlukan — dilihat melalui elemen sokongan yang diperlukan oleh carta saat ini",
                  "{weightElementSupply}"
                ],
                [
                  "Bintang Pasangan",
                  "Adakah cabang hari pasangan sepadan dengan posisi pasangan saya?",
                  "{weightSpouseStar}"
                ],
                [
                  "Hubungan Cabang Hari",
                  "Adakah cabang hari (日支) kedua orang itu adalah kombinasi atau pertentangan?",
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
    "eyebrow": "Jadual Hubungan",
    "title": "Dua Belas Cabang Bumi — Kombinasi, Pertentangan, Perselisihan",
    "summary": "Ini adalah jadual hubungan yang digunakan untuk kesesuaian cabang hari dan kesesuaian zodiak. Ia sepenuhnya mendedahkan apa yang setiap kombinasi, pertentangan, dan perselisihan bermakna serta skor masing-masing.",
    "backLabel": "Asas Pengiraan",
    "sections": [
      {
        "title": "Cabang bumi terdiri daripada dua belas watak",
        "blocks": [
          {
            "p": "Dua belas cabang bumi (十二支) adalah 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Tanda zodiak yang dikenali umum dikaitkan dengan setiap salah satu daripada dua belas watak ini."
          },
          {
            "figure": "branch-wheel",
            "caption": "Mengatur dua belas watak dalam bulatan memberikan pandangan yang jelas tentang hubungan. Pertentangan selalu duduk tepat bertentangan, sementara pasangan enam-harmoni dan perselisihan yang tenang adalah jiran yang lebih dekat. Garis-garis ini diambil terus dari peraturan pengiraan, bukan ditulis dalam teks.",
            "labels": {
              "alt": "Sebuah diagram yang menunjukkan dua belas cabang bumi yang disusun dalam bulatan dengan garis yang menghubungkan enam-harmoni, pertentangan, dan perselisihan.",
              "yukhap": "Enam-Harmoni",
              "chung": "Pertentangan",
              "wonjin": "Perselisihan",
              "rat": "Tikus",
              "ox": "Lembu",
              "tiger": "Harimau",
              "rabbit": "Arnab",
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
            "p": "Dalam saju, setiap satu daripada empat tiang mempunyai satu cabang bumi. Inyeon-Link menggunakan **cabang hari** (istana pasangan) dan **cabang tahun** (haiwan zodiak) di antara mereka. Kedua-dua posisi dinilai menggunakan jadual hubungan di bawah."
          }
        ]
      },
      {
        "title": "Jadual Hubungan Keseluruhan",
        "blocks": [
          {
            "table": {
              "caption": "Disusun mengikut skor tertinggi. Ini adalah nilai yang sebenarnya digunakan oleh Inyeon-Link.",
              "head": [
                "Hubungan",
                "Pasangan Berkaitan",
                "Maksud",
                "Skor"
              ],
              "rows": [
                [
                  "Gabungan (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Apabila ketiga-tiga watak berkumpul, mereka membentuk satu pembentukan elemen lengkap — **guk** (局). Ini dianggap sebagai gabungan terkuat.",
                  "{scoreSamhap}"
                ],
                [
                  "Enam-Harmoni (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Pasangan yang menarik antara satu sama lain. Ini adalah gabungan yang paling biasa dalam kesesuaian kerana ia terdiri daripada hanya dua watak.",
                  "{scoreYukhap}"
                ],
                [
                  "Triad separuh (半合)",
                  "Dua watak yang termasuk cabang diraja (王地) dari triad (子·酉·午·卯)",
                  "Gabungan separuh yang termasuk watak di tengah pembentukan. Ia tidak dapat membentuk gabungan lengkap dengan hanya dua watak, menjadikannya lebih rendah daripada triad penuh.",
                  "{scoreBanhap}"
                ],
                [
                  "Cabang bumi yang sama",
                  "子子 · 丑丑 …",
                  "Watak yang sama. Ini bermakna mereka menyerupai satu sama lain, tetapi ia tidak menunjukkan tarikan, jadi ia diletakkan di tengah.",
                  "{scoreSame}"
                ],
                [
                  "Neutral",
                  "Pasangan yang tidak tergolong di mana-mana di atas atau di bawah",
                  "Gabungan tanpa hubungan istimewa. Ini adalah titik rujukan.",
                  "{scoreNeutral}"
                ],
                [
                  "Ketidakselarasan tenang (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Pasangan yang tidak dapat berpisah walaupun menyimpan rasa dendam. Mereka kelihatan tenang di permukaan tetapi dianggap bertahan lama.",
                  "{scoreWonjin}"
                ],
                [
                  "Pertembungan (沖)",
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
        "title": "Triad penuh tidak muncul dalam perkhidmatan ini",
        "blocks": [
          {
            "p": "Triad penuh memerlukan tiga watak untuk dibentuk. Namun, kesesuaian disusun dengan memadankan cabang bumi dua orang **satu demi satu**, menghasilkan hanya dua watak. Oleh itu, apa yang muncul di sini sentiasa merupakan triad separuh, dan mata triad penuh {scoreSamhap} disimpan untuk ketika memeriksa pembentukan dalam setiap saju."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Triad separuh mesti termasuk cabang diraja",
        "blocks": [
          {
            "p": "Terdapat juga kaedah yang dianggap sebagai triad separuh jika kedua-dua watak tergolong dalam kumpulan triad yang sama. Ini boleh membawa kepada skor tinggi walaupun untuk gabungan yang sukar dipanggil sebagai triad, seperti 申辰. Oleh itu, perkhidmatan ini mengiktiraf triad separuh hanya untuk pasangan yang termasuk cabang diraja (王地) (子·酉·午·卯), dan gabungan seperti 申辰·巳丑·寅戌·亥未 tanpa cabang diraja tidak dikira sebagai triad."
          }
        ]
      },
      {
        "title": "Sebab memisahkan ketidakselarasan tenang",
        "blocks": [
          {
            "p": "Enam pasangan ketidakselarasan tenang dilihat sering dalam kesesuaian seperti pertembungan. Jika kita mengira gabungan sebagai pasangan dan pertembungan, enam pasangan ini akan semuanya tertimbus di bawah mata neutral {scoreNeutral}, jadi mereka diletakkan secara berasingan."
          },
          {
            "p": "Walaupun pertembungan adalah jelas dan mencolok, ketidakselarasan tenang adalah tidak selari secara halus. Oleh itu, ia diletakkan pada skor {scoreWonjin}, yang lebih tinggi daripada pertembungan ({scoreChung}) tetapi pasti lebih rendah daripada neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Skor juga diberikan kepada pertembungan",
        "blocks": [
          {
            "p": "Skor pertembungan terendah adalah {scoreChung}. Niatnya bukan untuk memberikan nilai yang hampir dengan 0. Dalam tradisi, pertembungan bukanlah 'akhir' tetapi 'perlanggaran', dan memberikan skor rendah akan menunjukkan bahawa perkhidmatan ini membuat kenyataan definitif tentang hubungan."
          },
          {
            "p": "Dengan minimum {scoreChung} dan maksimum {scoreSamhap}, julatnya jelas, tetapi ia tidak membuat kesimpulan definitif."
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
            "p": "Saju terdiri daripada empat tiang: tahun, bulan, hari, dan jam, dengan setiap tiang mengandungi satu tiang langit dan satu cabang bumi. **Cabang tahun** adalah yang membawa haiwan yang kita panggil tanda zodiak."
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
  "guide/ten-gods": {
    "eyebrow": "Sepuluh Dewa",
    "title": "Sepuluh Dewa dan Posisi Pasangan",
    "summary": "Kami melihat apa tiang hari setiap orang kepada satu sama lain melalui Sepuluh Dewa. Kami menerangkan mengapa kekayaan langsung dan kekayaan tidak langsung dibaca dengan cara yang berbeza walaupun kedua-duanya adalah kekayaan.",
    "backLabel": "Asas Pengiraan",
    "sections": [
      {
        "title": "Stemp hari adalah diri seseorang itu sendiri",
        "blocks": [
          {
            "p": "Antara lapan watak dalam saju, **stemp hari** (stemp langit pada hari kelahiran) merujuk kepada diri seseorang itu sendiri. Tujuh watak yang tinggal dibaca sebagai persekitaran di mana stemp hari itu diletakkan."
          },
          {
            "p": "**Sepuluh Dewa** (十神) membahagikan bagaimana stemp hari memahami watak lain kepada sepuluh kategori. Apa yang memelihara saya adalah **sumber**, apa yang sama dengan saya adalah **rakan**, apa yang saya hasilkan adalah **output**, apa yang saya kawal adalah **kekayaan**, dan apa yang mengawal saya adalah **kuasa** — setiap lima ini kemudian dibahagikan mengikut polariti, menjadikannya sepuluh."
          }
        ]
      },
      {
        "title": "Apa yang stemp hari setiap orang kepada satu sama lain",
        "blocks": [
          {
            "p": "Ini adalah item pertama dalam keserasian. Setelah ditentukan apa yang stemp hari A memahami stemp hari B, persepsi B terhadap A juga ditentukan, jadi terdapat **hanya enam kemungkinan**."
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
            "p": "Terdapat kaedah untuk melihat hubungan stemp hari dengan tiga elemen (penghasilan bersama, kesamaan, saling mengatasi). Ia mudah, tetapi **yin dan yang hilang.** 甲 (kayu yang yin) dan 乙 (kayu yang yin) menjadi 'kesamaan' yang sama seperti 甲 dan 甲, dan saling mengatasi dihimpunkan menjadi satu skor tanpa arah atau yin dan yang."
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
            "p": "Walaupun mereka adalah sumber yang sama, hanya **Proper Wealth** emosi yang dianggap sebagai posisi pasangan, sementara Resource dibaca sebagai sifat aktiviti dan kekayaan. Oleh itu, Proper Wealth dan Proper Officer dikira sebagai 2 mata, sementara Resource dan Officer dikira sebagai 1 mata, dan kedua-dua arah dijumlahkan — jika kedua-duanya dilihat sebagai posisi pasangan, ia adalah yang tertinggi."
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
            "p": "Selain daripada skor, kami menerangkan **bentuk apa** yang dimiliki pasangan day stems pada skrin keputusan. Sama ada mereka berada dalam posisi yang serupa, sama ada satu pihak menyokong yang lain, atau sama ada satu pihak ditekan — jika ia adalah hubungan yang menyokong atau menekan, kami menjelaskan pihak mana yang memegang posisi tersebut."
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
    "summary": "Kami melihat lima elemen bukan sebagai 'adakah mereka memilih dua' tetapi sebagai 'adakah pasangan mempunyai apa yang saya perlukan'. Kami juga mendedahkan nilai sempadan yang membezakan antara day master yang kuat dan yang lemah.",
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
            "p": "Elemen Sokongan (用神) adalah 'tenaga yang diperlukan oleh orang ini sekarang'. Terdapat beberapa kaedah untuk menentukannya (menekan, menyokong, penyakit, dan komunikasi), tetapi ia boleh diterjemahkan ke dalam peraturan, dan yang paling banyak digunakan adalah **menekan (抑扶)**. Jika day master kuat, ia dilihat bahawa tenaga untuk mengurangkan diperlukan, dan jika lemah, tenaga untuk menambah diperlukan."
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
                  "Day master kuat (身强)",
                  "Mengurangkan tenaga — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Tiga"
                ],
                [
                  "Day master lemah (身弱)",
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
            "p": "Pihak day stem adalah **印星 dan 比劫** — tenaga yang melahirkan saya dan tenaga yang serupa dengan saya. Oleh kerana dua daripada lima, jika tenaga itu seimbang sepenuhnya, ia menjadi {evenAllyRatio}. Satu julat ditetapkan di atas dan di bawah nilai tersebut."
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
                  "Day master kuat"
                ],
                [
                  "{weakThreshold} atau lebih dan kurang daripada {strongThreshold}",
                  "Seimbang"
                ],
                [
                  "Kurang daripada {weakThreshold}",
                  "Day master lemah"
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
            "p": "Apabila mengira kuasa lima elemen, kami tidak hanya mengira lapan watak seperti yang muncul. Kami menggunakan nilai yang mencerminkan heavenly stems yang tersembunyi (地藏干) dalam earthly branches dan musim tenaga bulan (月令) di mana seseorang dilahirkan."
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
                  "Hubungan batang hari · Sifat pasangan",
                  "Batang hari kedua orang — batang langit",
                  "10"
                ],
                [
                  "Elemen lima melengkapi",
                  "Elemen sokongan saya dan kuasa elemen lima lawan",
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
            "p": "Oleh kerana nilai tidak bertukar antara item, **mencari titik tertinggi untuk setiap cabang akan menjadi titik tertinggi keseluruhan**. Tidak perlu memeriksa semua kombinasi tarikh lahir — hanya menetapkan sepuluh batang langit, dua belas cabang bumi, dan lima elemen sudah mencukupi."
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
    "eyebrow": "Masa",
    "title": "Tukar masa lahir kepada masa solar sebenar",
    "summary": "Masa standard dan kedudukan sebenar matahari berbeza. Masa mesti diperbetulkan berdasarkan garis bujur tempat lahir untuk menjelaskan mengapa tiang masa itu tepat.",
    "backLabel": "Asas pengiraan",
    "sections": [
      {
        "title": "Masa pada jam dan masa matahari adalah berbeza",
        "blocks": [
          {
            "p": "Tiang masa (時柱) dalam saju ditentukan oleh kedudukan matahari. Namun, jam yang kita lihat menggunakan satu masa standard untuk seluruh negara, yang menyebabkan perbezaan dengan kedudukan sebenar matahari."
          },
          {
            "p": "Masa standard Korea adalah berdasarkan garis bujur 135° timur. Oleh kerana garis bujur Seoul adalah sekitar 127°, ia adalah kira-kira 8° barat, menyebabkan matahari mencapai puncaknya kemudian — apabila sudah tengah hari mengikut jam, matahari di Seoul belum mencapai puncaknya. Perbezaan ini adalah sekitar **32 minit**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minit mengubah tiang masa satu slot",
        "blocks": [
          {
            "p": "Masa dalam saju dibahagikan kepada unit dua jam. Mereka yang lahir dekat sempadan akan mempunyai tiang masa mereka berubah sepenuhnya oleh perbezaan 32 minit — pembetulan ini diperlukan bagi mereka yang jatuh tepat di sempadan ini."
          }
        ]
      },
      {
        "title": "Mengapa kami meminta tempat lahir",
        "blocks": [
          {
            "p": "Jika garis bujur berbeza, jumlah pembetulan juga akan berbeza. Menggunakan pembetulan berdasarkan Seoul untuk seseorang yang lahir di luar negara akan mengakibatkan perbezaan yang ketara dalam tiang masa. Oleh itu, skrin input memerlukan anda untuk memilih tempat lahir anda, dan pengiraan adalah berdasarkan garis bujur dan masa standard bandar itu. Pada masa ini, terdapat {cityCount} tempat dalam senarai."
          },
          {
            "p": "Di tempat-tempat di mana garis bujur berbeza dengan ketara walaupun dalam negara yang sama (seperti AS, Rusia, Indonesia, dll.), bandar-bandar telah dibahagikan. **15° garis bujur sama dengan satu slot tiang masa**."
          },
          {
            "p": "Jika anda tidak memilih, pengiraan akan berdasarkan Seoul. Oleh kerana kebanyakan kelahiran adalah domestik, ini mengurangkan kemungkinan kesilapan, tetapi jika anda dilahirkan di luar negara, sila pastikan untuk memilih."
          }
        ]
      },
      {
        "title": "Masa standard telah berubah beberapa kali pada masa lalu",
        "blocks": [
          {
            "p": "Terdapat sebab mengapa pembetulan tidak boleh dikira dengan mudah sebagai 'perbezaan garis bujur ÷ 15° × 60 minit'. Masa standard itu sendiri telah berbeza sepanjang era yang berbeza."
          },
          {
            "table": {
              "caption": "Perubahan dalam waktu standard Korea — mereka yang lahir dalam tempoh ini akan mempunyai perbezaan dengan pengiraan yang mudah",
              "head": [
                "Tempoh",
                "Apa yang berbeza"
              ],
              "rows": [
                [
                  "Sebelum 1912",
                  "Tiada waktu standard (masa purata tempatan)"
                ],
                [
                  "1954 – 1961",
                  "Waktu standard adalah UTC+8:30"
                ],
                [
                  "1948 – 51 · 1955 – 60 · 1987 – 88",
                  "Waktu penjimatan siang dilaksanakan"
                ]
              ]
            }
          },
          {
            "p": "Inyeon-Link tidak menggunakan nilai tetap untuk meridian standard, tetapi mengira waktu standard yang sebenarnya digunakan pada masa itu berdasarkan maklumat **zon waktu IANA** tempat lahir. Waktu penjimatan siang dan waktu standard yang lalu secara automatik akan dipaparkan."
          }
        ]
      },
      {
        "title": "Kelahiran sejurus selepas tengah malam juga mempertimbangkan tarikh",
        "blocks": [
          {
            "p": "Memandangkan pembetulan adalah -32 minit, mereka yang lahir antara 00:00 dan 00:32 mengikut jam akan menjadi **23:00 hari sebelumnya** dalam waktu solar sebenar. Jika hanya waktu yang dipulangkan dan tarikh dibiarkan tidak berubah, ia akan menulis tiang hari sebagai '23:00 hari sebelumnya'."
          },
          {
            "p": "Inyeon-Link juga akan memulangkan tarikh dalam kes ini. Tiang hari menunjukkan individu itu sendiri dalam saju, jadi jika ini tidak betul, hampir semua item kesesuaian akan menjadi tidak betul."
          }
        ]
      },
      {
        "title": "Anda tidak perlu mengetahui waktu",
        "blocks": [
          {
            "p": "Waktu kelahiran adalah pilihan. Jika anda tidak mengetahuinya, pengiraan akan dilakukan tanpa tiang waktu, dan fakta ini akan dipaparkan di skrin keputusan. Tiada item dalam kesesuaian yang memerlukan tiang waktu ditulis secara langsung, tetapi ia mempengaruhi lima elemen, jadi jika anda mengetahuinya, adalah lebih tepat untuk menyertakannya."
          },
          {
            "p": "Kesesuaian zodiak sentiasa mempunyai nilai yang sama tanpa mengira waktu — [kerana ia hanya melihat cabang tahun](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Maklumat Peribadi",
    "title": "Kaedah untuk tidak menyimpan maklumat yang dimasukkan",
    "summary": "Ini menerangkan apa yang secara teknikal bermaksud bahawa tarikh lahir anda tidak direkodkan di mana-mana dan apa yang termasuk dalam pautan keputusan.",
    "backLabel": "Asas Pengiraan",
    "sections": [
      {
        "title": "Tiada keahlian diperlukan",
        "blocks": [
          {
            "p": "Inyeon-Link tidak membuat akaun. Ia tidak mengumpul nama, emel, atau nombor telefon. Satu-satunya maklumat yang dikumpul adalah tarikh lahir dan (secara pilihan) waktu kelahiran, tempat lahir, dan jantina, dan walaupun itu tidak kekal selepas pengiraan selesai."
          },
          {
            "p": "Terdapat medan untuk memasukkan tajuk yang akan dipaparkan di skrin keputusan, tetapi itu adalah **hanya untuk tujuan paparan** dan tidak digunakan dalam pengiraan. Anda tidak perlu memasukkan nama sebenar anda."
          }
        ]
      },
      {
        "title": "Apa yang termasuk dalam pautan keputusan?",
        "blocks": [
          {
            "p": "Setelah pengiraan selesai, alamatnya kelihatan seperti ini."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Apa yang mengikuti **#** adalah nilai input. Bahagian ini dipanggil **fragmen**, yang merupakan **seksyen yang tidak dihantar oleh pelayar ke pelayan**. Ini adalah tingkah laku web standard dan bukan peraturan yang kami cipta — ia pada asalnya direka untuk menunjukkan lokasi dalam dokumen, jadi pelayan tidak perlu melihatnya."
          },
          {
            "p": "Dengan kata lain, apabila anda membuka pautan keputusan, pelayar membaca nilai itu untuk meminta pengiraan, dan pelayan kami menerima nilai yang diperlukan untuk pengiraan, mengembalikan jawapan, dan kemudian melupakannya."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sila berhati-hati apabila menghantar pautan kepada orang lain",
        "blocks": [
          {
            "p": "Fakta bahawa ia tidak disimpan di pelayan dan pautan itu selamat bukanlah perkara yang sama. Pautan keputusan mengandungi kedua-dua tarikh lahir anda, jadi orang yang menerima pautan itu boleh melihat keputusan yang sama."
          }
        ]
      },
      {
        "title": "Mengapa pengiraan dilakukan di pelayan tetapi tidak disimpan?",
        "blocks": [
          {
            "p": "Pengiraan itu sendiri dilakukan di pelayan. Almanak lunisolar Korea diperlukan untuk menghasilkan saju, dan jadual itu terlalu besar untuk dihantar ke pelayar. Namun, **selepas memproses permintaan, nilai itu tidak digunakan di mana-mana.** Tiada kod untuk menyimpannya dalam pangkalan data."
          },
          {
            "p": "Rekod minimum yang diperlukan untuk operasi disimpan — pengira untuk mengelakkan orang yang sama menghantar terlalu banyak permintaan dalam masa yang singkat. Ini tidak termasuk tarikh lahir, dan IP akses juga tidak disimpan. Hanya satu nilai, yang dihash dengan tarikh, dikira, dan nilai itu berubah apabila hari berubah."
          }
        ]
      },
      {
        "title": "Perkara yang tidak boleh dilakukan kerana maklumat tidak disimpan",
        "blocks": [
          {
            "p": "Sejujurnya, terdapat perkara yang telah kami berikan kerana kami tidak menyimpan maklumat."
          },
          {
            "ul": [
              "**Anda tidak boleh mendapatkan semula keputusan lalu.** Anda perlu mempunyai pautan untuk melihatnya semula.",
              "**Nilai yang sama akan dikira semula.** Tiada cache. Namun, kerana semua peraturan adalah deterministik, [input yang sama akan sentiasa menghasilkan nilai yang sama](/guide/how-compatibility).",
              "**Menyegarkan akan membawa kembali pintu iklan.** Ini kerana tiada tempat untuk menyimpan rekod tontonan."
            ]
          }
        ]
      },
      {
        "title": "Sekiranya pembelian",
        "blocks": [
          {
            "p": "Jika anda membeli laporan, rekod transaksi akan disimpan pada masa itu. Undang-undang menetapkan tempoh penyimpanan untuk pembayaran, dan tanpa sejarah pesanan, pengembalian tidak dapat diproses. Namun, walaupun begitu, **tarikh lahir yang digunakan untuk pengiraan kesesuaian tidak dilampirkan pada pesanan** — ia dikumpul semula semasa membuat PDF selepas pengesahan pembayaran."
          },
          {
            "p": "Butiran dinyatakan dalam [Dasar Privasi](/privacy)."
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
            "p": "Anda boleh melihat kekuatan sebelum dan selepas menggandakan dengan tenaga bulan secara berdampingan, menunjukkan berapa banyak musim telah meningkatkannya. **Nisbah sekutu** yang membezakan antara penguasa hari yang kuat dan penguasa hari yang lemah juga dicatat — skrin hanya menunjukkan penilaian, tetapi laporan menunjukkan di mana penilaian itu dibuat."
          }
        ]
      },
      {
        "title": "Halaman 6 — Apa yang dimaksudkan dengan empat tiang orang lain bagi saya",
        "blocks": [
          {
            "p": "Kadar kesesuaian hanya membandingkan **tiang hari** kedua individu. Namun, tiga tiang yang tinggal dari orang lain juga ditentukan oleh Sepuluh Dewa menggunakan peraturan yang sama. Walaupun anda boleh memahami **apa maksud orang ini bagi saya** dengan melihat tiang hari sahaja, anda tidak dapat mengetahui **apa posisi orang itu bermakna bagi saya**."
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
            "p": "Bahagian ini adalah **jadual peringkat keseluruhan**. Skrin hanya menunjukkan set yang sesuai dengan baik, tetapi laporan menyenaraikan semua sepuluh tiang langit dan dua belas cabang bumi **sepenuhnya**. Jika anda hanya melihat set teratas, anda tidak akan tahu 'siapa yang datang seterusnya' dan 'yang mana yang paling tidak sesuai'."
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
