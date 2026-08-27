import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Bahasa Melayu — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const MS_DOCS = {
  "about": {
    "eyebrow": "Pengenalan",
    "title": "Pengenalan kepada Dreams-Link",
    "summary": "Ini adalah perkhidmatan yang mentafsirkan mimpi menggunakan kamus simbol tafsiran mimpi tradisional. Ia menjelaskan apa yang digunakan sebagai asas dan apa yang tidak disebutkan.",
    "backLabel": "Kembali ke Halaman Utama",
    "sections": [
      {
        "title": "Apa yang kami lakukan?",
        "blocks": [
          {
            "p": "Dreams-Link mencari **simbol yang digunakan dalam tafsiran mimpi tradisional** daripada mimpi yang anda catatkan dan menunjukkan maknanya. Oleh kerana mimpi adalah sesuatu yang kita alami setiap hari, tafsiran yang dipaparkan di skrin adalah **percuma dan tidak memerlukan keahlian.**"
          },
          {
            "p": "The only things sold for a fee are **two forms of preservation** — an image (dream card) containing a good dream and a PDF that captures the background when a symbol traditionally considered a a conception dream appears."
          }
        ]
      },
      {
        "title": "Apa asas untuk tafsiran?",
        "blocks": [
          {
            "p": "Asas untuk tafsiran adalah **kamus {symbolTotal} simbol**. Kami mencari simbol dalam teks mimpi dan hanya menunjukkan makna yang direkodkan dalam kamus untuk simbol-simbol tersebut. Jika simbol mempunyai pelbagai makna, kami memilih berdasarkan konteks — sebagai contoh, memegang ular dan digigit secara tradisional dianggap sebagai lawan."
          },
          {
            "p": "Pencarian dilakukan **hanya mengikut peraturan tetap**. Jika ia adalah mimpi yang sama, simbol yang sama akan sentiasa muncul, dan tafsiran tidak akan berubah dari semalam ke hari ini."
          }
        ]
      },
      {
        "title": "Apa yang tidak kami katakan?",
        "blocks": [
          {
            "p": "**Kami tidak mencipta makna tradisional yang tidak terdapat dalam kamus.** Jika tiada simbol ditemui, kami hanya menyatakan bahawa tiada yang ditemui dan mengakhiri. Mengisi ruang itu dengan kata-kata yang boleh dipercayai adalah apa yang paling kami berhati-hati."
          },
          {
            "p": "**A a conception dream is merely a sign, not a judgment.** We only inform you that a symbol traditionally considered a a conception dream appeared in the dream. We do not predict pregnancy or the child's gender, and there is no basis for such claims."
          },
          {
            "p": "Kami tidak **membuat kenyataan pasti tentang kesihatan, kekayaan, atau kerjaya.** Ini adalah rujukan dari perspektif tafsiran mimpi tradisional dan bukan nasihat perubatan, kewangan, atau undang-undang."
          }
        ]
      },
      {
        "title": "Kami tidak menyimpan mimpi yang anda catatkan.",
        "blocks": [
          {
            "p": "Cerita mimpi adalah bahagian paling peribadi dari apa yang diterima oleh perkhidmatan ini. Oleh itu, kami **tidak menyimpannya.** Apa yang anda masukkan hanya dibawa dalam URL dan digunakan untuk pembacaan; ia tidak direkodkan dalam mana-mana jadual di pelayan kami."
          },
          {
            "p": "Kami memutuskan **untuk tidak mencipta fungsi untuk mengumpul mimpi seperti diari mimpi.** Ia adalah ciri yang berharga, tetapi ia memerlukan penyimpanan tulisan yang paling peribadi."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Kaedah ini diterangkan dengan lebih terperinci dalam [dokumen panduan](/guide). Maklumat perniagaan dan butiran hubungan boleh didapati di [hubungi kami](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Asas untuk Pengiraan",
    "title": "Apa asas untuk pengiraan?",
    "summary": "Kami mendedahkan semua peraturan yang digunakan oleh Dreams-Link. Anda boleh menyemak simbol mana yang ditemui, apa yang ditulis dalam kamus — dari mana tafsiran yang dipaparkan di skrin berasal.",
    "backLabel": "Kembali ke Halaman Utama",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Semua nombor yang ditulis di sini adalah **dibaca terus dari kamus simbol dan peraturan pemadanan.** Oleh kerana kami tidak menyalin teks secara manual, jika kamus diperluas atau peraturan diubah, nombor dalam dokumen ini juga akan berubah."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Asas untuk Perkhidmatan",
    "title": "Apa asas kamus simbol?",
    "summary": "Ia menjelaskan dari mana tafsiran berasal. Kriteria untuk membahagikan {symbolTotal} simbol kepada sembilan kategori, sebab hanya {cultureNoteTotal} yang boleh dibuktikan, dan mengapa kami tidak mengisi kekosongan.",
    "backLabel": "Asas untuk Tafsiran",
    "sections": [
      {
        "title": "Kami hanya menunjukkan apa yang ditulis dalam kamus.",
        "blocks": [
          {
            "p": "Tafsiran dari Dreams-Link datang dari **kamus simbol yang telah ditulis**. Kami mencari simbol dalam teks yang anda berikan dan menunjukkan makna yang direkodkan dalam kamus untuk simbol-simbol tersebut. Kami tidak mencipta kata-kata yang tidak terdapat dalam kamus."
          },
          {
            "p": "Pada masa ini, kamus mengandungi **{symbolTotal} simbol**, dan simbol-simbol tersebut mempunyai jumlah **{meaningTotal} makna**. Kebanyakan simbol mempunyai hanya satu makna, manakala beberapa mempunyai pelbagai bergantung pada konteks."
          }
        ]
      },
      {
        "title": "Dibahagikan kepada sembilan kategori.",
        "blocks": [
          {
            "p": "Kami mengelompokkan apa yang muncul dalam mimpi kepada sembilan kategori berdasarkan ciri-cirinya. Nombor dalam kurungan adalah jumlah semasa."
          },
          {
            "ul": [
              "**Objek**({categoryThing}) · **Haiwan**({categoryAnimal}) · **Alam**({categoryNature}) — tiga kategori terbesar. Tafsiran mimpi tradisional terutamanya membincangkan objek yang boleh dilihat, haiwan, dan elemen langit dan air.",
              "**Tindakan**({categoryAction}) · **Badan**({categoryBody}) — apa yang dilakukan, seperti dikejar atau jatuh, dan di mana di badan, seperti muka atau rambut.",
              "**Orang**({categoryPerson}) · **Tempat**({categoryPlace}) · **Warna**({categoryColor}) · **Nombor**({categoryNumber})"
            ]
          },
          {
            "p": "Untuk melihatnya mengikut kategori, anda boleh melihat senarai penuh dalam [kamus simbol](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Hanya {cultureNoteTotal} yang boleh dibuktikan.",
        "blocks": [
          {
            "p": "Antara simbol-simbol tersebut, **{cultureNoteTotal}** mempunyai sebab untuk tafsiran yang ditulis bersamanya. Sebagai contoh, sebab untuk membezakan antara gigi atas dan bawah dalam mimpi kehilangan gigi. Simbol-simbol yang tinggal mempunyai ruang kosong."
          },
          {
            "p": "**Kami tidak mengisi ruang kosong.** Menambah asal yang boleh dipercayai akan membuat dokumen ini lebih tebal, tetapi pada saat itu, kamus ini tidak akan menyampaikan tradisi tetapi mengada-ada. Ia lebih jujur untuk membezakan antara apa yang boleh dan tidak boleh dibuktikan."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sebab untuk tidak mengembangkan kamus secara sembarangan.",
        "blocks": [
          {
            "p": "Kami sebenarnya telah mencuba untuk mengembangkan simbol kepada ratusan tetapi menyerah. Entri yang dihasilkan secara automatik sama ada mengulangi frasa yang sama seperti 'romantis → hubungan baik' atau gagal memberikan sebarang sumber tradisional yang didokumenkan. Kami menyimpulkan bahawa **menemukan dengan tepat apa yang ada** adalah lebih baik daripada hanya meningkatkan nombor."
          }
        ]
      },
      {
        "title": "Baik dan buruk ditentukan oleh kamus.",
        "blocks": [
          {
            "p": "Setiap simbol membawa keberuntungan yang direkodkan bersamanya. **Baik {polarityPositive}**, **ambivalen {polarityAmbivalent}**, **berhati-hati {polarityNegative}**, dan **neutral {polarityNeutral}**."
          },
          {
            "p": "Fakta bahawa makna baik melebihi separuh bukan kerana kami pemurah, tetapi kerana tafsiran mimpi tradisional sentiasa seperti itu — simbol besar dan kuat seperti babi, naga, dan api secara umumnya dilihat sebagai pertanda baik. Namun, tidak semua mimpi ditafsirkan secara positif. Nilai ini mencerminkan sifat setiap simbol, dan suasana keseluruhan mimpi dinilai semula dengan mengumpulkan simbol-simbol yang ditemui."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Asas untuk Perkhidmatan",
    "title": "Bagaimana untuk mencari simbol dalam cerita mimpi.",
    "summary": "Ia menerangkan bagaimana simbol dipilih daripada ayat yang ditulis secara bebas dan bagaimana kami menapis simbol yang hanya kebetulan berada di dalam perkataan yang lebih panjang — **별** (\"bintang\") di dalam **특별할** (\"tiada yang istimewa\").",
    "backLabel": "Asas untuk Tafsiran",
    "sections": [
      {
        "title": "Kami mencari simbol dalam teks yang anda berikan.",
        "blocks": [
          {
            "p": "Apabila anda menulis cerita mimpi anda secara bebas, kami mencari simbol dalam teks tersebut dari kamus. Anda tidak perlu memilih item atau menulis dalam format tertentu. Cukup tulis seperti biasa, seperti 'Malam tadi, seekor ular besar melilit saya.'"
          },
          {
            "p": "Apabila mencari, kami tidak hanya melihat nama simbol tetapi juga **{aliasTotal} nama alternatif**. Ini adalah kata-kata yang merujuk kepada perkara yang sama, seperti 구렁이 (gureongi) dan 뱀 (baem), 떨어지다 (tteoreojida) dan 빠지다 (ppajida). Variasi dengan akhiran, seperti 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda), juga termasuk."
          }
        ]
      },
      {
        "title": "Watak yang secara tidak sengaja muncul dalam satu perkataan tidak dikira",
        "blocks": [
          {
            "p": "Ini adalah aspek yang paling mencabar dalam bahasa Korea. Antara simbol-simbol tersebut, terdapat **{singleCharSymbolTotal} simbol satu aksara** seperti **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), yang sering muncul dalam perkataan lain."
          },
          {
            "ul": [
              "별 (\"bintang\") tersembunyi dalam 특**별**할 (\"tiada yang istimewa\")",
              "게 (\"ketam\") tersembunyi dalam 누군가에**게** (\"oleh seseorang\")",
              "말 (\"kuda\") dalam **말**했다 (\"mengatakan\"), dan 배 (\"perahu, pir\") dalam **배**가 고팠다 (\"Kami lapar\")"
            ]
          },
          {
            "p": "Mengira ini sebagai simbol membawa kepada tafsiran yang tidak relevan. Oleh itu, kami memeriksa aksara sekeliling — jika **ada aksara Korea di depan**, kami menganggapnya sebagai sebahagian daripada perkataan yang lebih panjang dan tidak mengira ia, dan kami melihat **sama ada apa yang mengikuti adalah partikel atau akhiran kata kerja**, membenarkan 「소가」 (soga) lulus sementara menapis 「소리」 (sori)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Inilah cara ia telah berfungsi",
        "blocks": [
          {
            "p": "Before implementing this rule, when testing with twelve actual sentences, **all twelve** contained irrelevant symbols. One sentence with no significant content was even marked as a a conception dream."
          },
          {
            "p": "Kini, satu yang tinggal — 배 (bae) dalam 「배가 고팠다」 (bae ga gopatda). Oleh kerana ia berbunyi sama tetapi mempunyai makna yang berbeza, ia tidak boleh ditapis hanya dengan aksara sekeliling."
          },
          {
            "p": "Tidak menemui sesuatu adalah perkara yang jujur. Namun, menemui sesuatu yang tidak relevan bermakna menetapkan tradisi di sebalik perkataan itu yang tidak pernah ada."
          }
        ]
      },
      {
        "title": "Watak yang sama sentiasa menghasilkan keputusan yang sama",
        "blocks": [
          {
            "p": "Tiada tempat untuk kebetulan dalam peraturan pemadanan. Oleh kerana kamus adalah tetap dan peraturan ditetapkan, jika anda memasukkan ayat yang sama lagi, **simbol yang sama akan muncul dalam urutan yang sama**. Tafsiran yang anda lihat hari ini tidak akan berbeza daripada yang anda lihat esok."
          },
          {
            "p": "Kualiti ini juga merupakan janji yang telah kami buat kepada diri kami sendiri. Tafsiran yang berubah setiap kali adalah menghiburkan tetapi tidak mempunyai asas. Ini berkaitan dengan cerita tentang [mengapa kami tidak menggunakan model](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Asas Perkhidmatan",
    "title": "Sebab simbol yang sama mempunyai makna yang berbeza",
    "summary": "Secara tradisional, memegang ular dan digigit oleh satu adalah bertentangan. Ini membincangkan struktur di mana {symbolTotal} simbol mempunyai {meaningTotal} makna dan cara untuk mentafsir situasi.",
    "backLabel": "Asas Tafsiran",
    "sections": [
      {
        "title": "Walaupun simbolnya sama, situasi yang berbeza menghasilkan makna yang berbeza",
        "blocks": [
          {
            "p": "Dalam tafsiran mimpi tradisional, satu simbol tidak selalu mempunyai satu makna. Bahkan untuk ular yang sama, **memegangnya dan digigit telah ditafsirkan sebagai bertentangan sepenuhnya.** Ini juga dicatat dalam kamus."
          },
          {
            "p": "Inilah sebabnya {symbolTotal} simbol mempunyai jumlah {meaningTotal} makna. Setiap makna termasuk **konteks di mana ia berlaku**, dan jika konteks itu jelas dalam teks yang anda berikan, kami memilih makna itu."
          }
        ]
      },
      {
        "title": "Cara untuk mengenal pasti situasi",
        "blocks": [
          {
            "p": "Kami memeriksa sama ada teks yang anda berikan mengandungi kata-kata yang menunjukkan situasi itu. Dalam 「뱀이 나를 물었다」 (baemi nareul mul-eotda), situasi menggigit diterangkan, sementara dalam 「뱀을 품에 안았다」 (baemeul pume anatda), situasi memegang diterangkan. Jika tiada kata yang menunjukkan situasi, kami mentafsirnya menggunakan **makna asas** simbol itu."
          },
          {
            "p": "Oleh itu, apabila menulis mimpi anda, jika anda menyertakan **bukan sahaja apa yang muncul tetapi juga tindakan yang diambil**, tafsiran akan lebih tepat. 「돼지를 봤다」 (dwaeji-reul bwatda) menyampaikan kurang daripada 「돼지가 집으로 들어왔다」 (dwaeji-ga jib-euro deureowatda)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Semakin banyak anda menulis, semakin baik, tetapi tidak perlu menulis panjang",
        "blocks": [
          {
            "p": "Dua atau tiga ayat sudah mencukupi. Menulis lebih panjang tidak bermakna mencari lebih banyak simbol; sebaliknya, jika kata-kata yang tidak berkaitan dicampurkan, simbol yang tidak relevan mungkin dikenalpasti."
          }
        ]
      },
      {
        "title": "Terdapat {contextSplitSymbolTotal} simbol dengan makna terbahagi",
        "blocks": [
          {
            "p": "Antara {symbolTotal} simbol dalam kamus, **{contextSplitSymbolTotal}** mempunyai makna yang berbeza bergantung pada situasi. Yang lain telah dibaca dalam satu arah tanpa mengira situasi."
          },
          {
            "p": "{contextSplitSymbolTotal} ini adalah kawasan yang paling berhati-hati. Salah membaca situasi boleh membawa kepada menyampaikan berita baik sebagai berita buruk, atau sebaliknya. Oleh itu, jika situasi tidak jelas, kami tidak **memilih satu pihak secara paksa dan sebaliknya menggunakan makna asas** simbol itu — kami tidak mahu menyatakan sesuatu yang tidak pasti seolah-olah ia pasti."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perasaan selepas bangun juga dipertimbangkan",
        "blocks": [
          {
            "p": "Perasaan dan pengulangan yang ditanyakan di bawah kandungan mimpi tidak digunakan untuk mencari simbol. Mereka dirujuk ketika memutuskan cara untuk mentafsir dalam situasi dengan makna terbahagi. Anda tidak perlu memilih; keputusan tetap akan diberikan."
          }
        ]
      },
      {
        "title": "Suasana keseluruhan mimpi dikira secara berasingan",
        "blocks": [
          {
            "p": "Jika pelbagai simbol ditemui, kami mengumpulkan sama ada setiap simbol tersebut adalah positif atau berhati-hati untuk menentukan nada keseluruhan mimpi. Mimpi yang merangkumi satu simbol baik dan satu simbol berhati-hati tidak hanya dirujuk sebagai 'mimpi baik.'"
          },
          {
            "p": "Anda boleh melihat pelbagai simbol dan maknanya dalam [kamus simbol](/dream/symbols). Ia juga baik untuk melihat apa yang termasuk sebelum menulis mimpi anda."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Asas Perkhidmatan",
    "title": "Kriteria untuk membezakan mimpi yang menguntungkan dan mimpi yang tidak menguntungkan",
    "summary": "Empat nilai yang diberikan kepada setiap simbol dan pengagihannya, sebab mengapa yang positif melebihi separuh, dan mengapa kami menyampaikan mimpi campuran sebagai campuran.",
    "backLabel": "Asas Tafsiran",
    "sections": [
      {
        "title": "Setiap simbol diberikan salah satu daripada empat nilai",
        "blocks": [
          {
            "p": "Antara {symbolTotal} simbol dalam kamus, setiap satu dikategorikan sebagai salah satu daripada yang berikut."
          },
          {
            "ul": [
              "**{polarityPositive} simbol positif** — yang ditafsirkan sebagai peristiwa bertuah seperti kekayaan, perayaan, dan dermawan.",
              "**{polarityAmbivalent} simbol yang berbeza mengikut situasi** — seperti ular, di mana makna boleh bertukar bergantung pada apa yang dilakukan. Kategori ini adalah yang paling berhati-hati.",
              "**{polarityNegative} simbol tidak menguntungkan** — yang dilihat sebagai gosip, pertikaian, atau kerugian.",
              "**{polarityNeutral} simbol neutral** — yang tidak baik atau buruk dalam dirinya sendiri, seperti warna atau nombor."
            ]
          }
        ]
      },
      {
        "title": "Sebab simbol positif melebihi separuh",
        "blocks": [
          {
            "p": "Ini bukan kerana kami pemurah dalam penilaian kami. **Tafsiran mimpi tradisional (tafsiran mimpi) sentiasa begitu.** Simbol besar dan kuat seperti babi, naga, api, dan air secara umumnya dilihat sebagai pertanda baik, dan kamus mencerminkan tradisi itu."
          },
          {
            "p": "Oleh itu, fakta bahawa 'simbol baik muncul' tidak bermakna 'perkara baik akan berlaku.' Apa yang dapat kami sampaikan adalah terhad kepada bagaimana simbol itu telah ditafsirkan dalam tradisi."
          }
        ]
      },
      {
        "title": "Nada mimpi dikumpulkan daripada simbolnya",
        "blocks": [
          {
            "p": "Jika pelbagai simbol ditemui, kami mengumpulkan keberuntungan masing-masing untuk menentukan nada keseluruhan mimpi. Jika hanya simbol positif muncul, ia adalah mimpi baik; jika hanya simbol tidak menguntungkan muncul, ia adalah mimpi tidak menguntungkan; jika **campuran, kami menyampaikannya sebagai campuran.**"
          },
          {
            "p": "Kami tidak memaksa mengkategorikan simbol campuran ke dalam satu pihak. Sebenarnya, mimpi yang dialami orang sering kali bercampur, dan merumuskan mereka sebagai 'mimpi baik' tidaklah tepat atau membantu."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Perkataan yang Tidak Perlu Digunakan",
        "blocks": [
          {
            "p": "Jangan membuat kenyataan pasti tentang apa yang akan berlaku, bila ia akan berlaku, atau mengenai kesihatan dan kekayaan. Menyampaikan makna simbol yang diwarisi melalui tradisi adalah berbeza daripada meramalkan masa depan."
          }
        ]
      },
      {
        "title": "Apabila Mimpi Buruk Muncul",
        "blocks": [
          {
            "p": "Walaupun simbol yang ditafsirkan sebagai amaran muncul, ia tidak semestinya berita buruk. Dalam **tafsiran mimpi tradisional**, sebuah mimpi yang tidak menguntungkan secara amnya digunakan sebagai **pernyataan yang menunjukkan situasi yang sedang dihadapi**. Jika simbol yang mencadangkan konflik muncul, ia boleh dibaca sebagai peringatan untuk menahan kata-kata."
          },
          {
            "p": "Atas sebab yang sama, perkhidmatan ini tidak menjual azimat atau jimat. Apa yang dijual hanyalah [dua cara untuk menyimpan mimpi anda](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Mimpi Konsepsi",
    "title": "Cara Menafsirkan Mimpi Konsepsi",
    "summary": "Ia mendedahkan cara untuk menentukan {conceptionSymbolTotal} simbol mimpi konsepsi, mengapa tidak semua mimpi babi dianggap sebagai mimpi konsepsi, dan prinsip yang tidak meramalkan kehamilan atau jantina.",
    "backLabel": "Asas Tafsiran",
    "sections": [
      {
        "title": "Pertama, Jelas Ini",
        "blocks": [
          {
            "p": "**Dreams-Link tidak menentukan status kehamilan. Ia juga tidak menunjukkan jantina anak.** Ini adalah perkara yang tidak dapat diketahui melalui mimpi, dan ia bukan sesuatu yang dapat kami lakukan."
          },
          {
            "p": "Apa yang dapat kami beritahu anda adalah terhad kepada ini — **fakta bahawa simbol yang secara tradisional dianggap sebagai mimpi konsepsi muncul dalam mimpi ini.** Itu sahaja cara nenek moyang kami menafsirkan simbol tersebut."
          }
        ]
      },
      {
        "title": "Terdapat {conceptionSymbolTotal} simbol yang dianggap sebagai Mimpi Konsepsi",
        "blocks": [
          {
            "p": "Antara {symbolTotal} simbol dalam kamus, **{conceptionSymbolTotal}** ditandakan sebagai mimpi konsepsi. Terdapat banyak haiwan seperti naga, babi, dan ular, serta buah-buahan seperti pic dan kastanye, dan matahari serta bulan juga termasuk."
          },
          {
            "p": "Namun, **kemunculan simbol itu tidak serta-merta bermakna ia adalah mimpi konsepsi.** Di sinilah perkhidmatan ini telah berusaha."
          }
        ]
      },
      {
        "title": "Penilaian Berdasarkan Makna Sebenar, Bukan Simbol",
        "blocks": [
          {
            "p": "Babi adalah simbol mimpi konsepsi dan pada masa yang sama **mewakili mimpi kekayaan.** Jika ia dianggap sebagai mimpi konsepsi hanya kerana simbol itu muncul, maka setiap orang yang bermimpi tentang babi akan mempunyai mimpi konsepsi. Sebenarnya, ia kebanyakannya ditafsirkan sebagai mimpi kekayaan."
          },
          {
            "p": "Oleh itu, kami melihat **makna sebenar yang diperoleh daripada simbol itu, bukan simbol itu sendiri.** Kami hanya menandakan ia sebagai mimpi konsepsi apabila makna yang cenderung kepada konsepsi dipilih dalam situasi yang anda berikan. Walaupun dengan babi yang sama, pembacaan berubah jika ayatnya berbeza."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jika Anda Menyebut Kehamilan, Kami Melihat Itu Terlebih Dahulu",
        "blocks": [
          {
            "p": "Jika penulisan anda termasuk perkataan seperti kehamilan, mimpi konsepsi, atau kelahiran, kami terlebih dahulu melihat makna simbol itu yang cenderung kepada konsepsi. Walaupun dengan mimpi babi yang sama, cara nenek moyang kami menafsirkannya berbeza bergantung kepada situasi semasa."
          }
        ]
      },
      {
        "title": "Sebab Memisahkan Laporan Mimpi Konsepsi",
        "blocks": [
          {
            "p": "Mimpi konsepsi mempunyai tujuan yang berbeza daripada mimpi lain. Mereka sering dibincangkan walaupun selepas anak dilahirkan dan dikongsi di kalangan ahli keluarga. Oleh itu, daripada hanya melihatnya di skrin, kami mencipta **dokumen yang boleh disimpan.**"
          },
          {
            "p": "Apa yang termasuk dicatat dalam [dua cara untuk menyimpan mimpi anda](/guide/reports). Anda boleh melihat semua tafsiran tanpa membeli apa yang anda lihat di skrin."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Cara Menggunakan",
    "title": "Cara Menulis Mimpi Anda dengan Berkesan",
    "summary": "Jika anda menulis apa yang anda lihat dan lakukan, ia akan ditafsirkan dengan baik. Ia menerangkan mengapa satu kata kerja boleh menentukan makna dan mengapa kami bertanya tentang perasaan dan pengulangan.",
    "backLabel": "Asas Tafsiran",
    "sections": [
      {
        "title": "Sila Tulis Apa yang Anda Lihat dan Lakukan",
        "blocks": [
          {
            "p": "Tiada format khusus. Beberapa ayat seperti yang anda biasa bercakap sudah memadai. Namun, apa yang berfungsi dengan baik ditentukan — **apa yang kelihatan** dan **apa yang berlaku.**"
          },
          {
            "ul": [
              "Berfungsi dengan baik — 「Ular besar membelit saya」, 「Saya melihat air jernih mengalir」, 「Saya jatuh dari tempat yang tinggi」",
              "Tidak berfungsi — 「Saya takut」, 「Saya merasa pelik」, 「Saya merasa seperti seseorang membenci saya」"
            ]
          },
          {
            "p": "Jika anda hanya menulis perasaan, tidak akan ada simbol untuk ditemui. Ini kerana tafsiran mimpi tradisional bercakap tentang [objek dan tindakan](/guide/categories), bukan emosi."
          }
        ]
      },
      {
        "title": "Menulis Apa yang Anda Lakukan Membuatnya Lebih Tepat",
        "blocks": [
          {
            "p": "Walaupun dengan simbol yang sama, terdapat {contextSplitSymbolTotal} kes di mana makna berbeza bergantung kepada situasi. Secara tradisional, memegang ular dan disengat telah ditafsirkan sebagai bertentangan."
          },
          {
            "p": "Oleh itu, 「Saya melihat babi」 kurang tepat daripada 「Babi masuk ke dalam rumah」, dan 「Terdapat air」 kurang tepat daripada 「Saya minum air jernih.」 **Satu kata kerja menentukan makna.**"
          }
        ]
      },
      {
        "title": "Mengapa Kami Bertanya tentang Perasaan dan Pengulangan",
        "blocks": [
          {
            "p": "Di bawah kandungan mimpi, terdapat tempat untuk memilih **perasaan ketika anda bangun** dan **sama ada anda telah mengulangi mimpi yang sama.** Anda tidak perlu memilih kedua-duanya untuk hasil diberikan."
          },
          {
            "p": "Nilai-nilai ini tidak digunakan untuk mencari simbol. Mereka dirujuk ketika menentukan **makna mana yang dipilih** daripada simbol yang sama dan bagaimana untuk menyampaikan hasil."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dalam Kes di Mana Anda Menyebut Kehamilan",
        "blocks": [
          {
            "p": "Jika penulisan anda termasuk perkataan seperti kehamilan, mimpi konsepsi, atau kelahiran, kami terlebih dahulu melihat makna simbol itu yang cenderung kepada konsepsi. Walaupun dengan mimpi babi yang sama, cara nenek moyang kami menafsirkannya berbeza bergantung kepada situasi semasa — [cara menafsirkan mimpi konsepsi](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Tiada Keperluan untuk Menulis Teks Panjang",
        "blocks": [
          {
            "p": "Teks yang lebih panjang tidak bermakna lebih banyak simbol akan ditemui. Sebaliknya, jika perkataan yang tidak relevan dicampur secara panjang, terdapat kemungkinan yang lebih besar bahawa perkataan yang tidak berkaitan akan ditafsirkan sebagai simbol. **Sila tulis hanya adegan yang anda ingat.**"
          },
          {
            "p": "Teks yang anda berikan tidak disimpan di mana-mana. Sebab anda boleh menulis dengan bebas dicatat dalam [kaedah tidak menyimpan](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Asas Perkhidmatan",
    "title": "Kriteria Dibahagikan kepada Sembilan Kategori",
    "summary": "Dari objek, haiwan, dan alam kepada warna dan nombor, terdapat sembilan kategori dan alasan untuk tidak memasukkan kategori emosi.",
    "backLabel": "Asas Tafsiran",
    "sections": [
      {
        "title": "Simbol dalam Mimpi Dibahagikan kepada Sembilan Kategori",
        "blocks": [
          {
            "p": "{symbolTotal} simbol dikelompokkan ke dalam sembilan kategori berdasarkan ciri-cirinya. Kriteria untuk pembahagian adalah **bagaimana mereka muncul dalam mimpi** — sama ada sebagai haiwan, objek, atau tindakan yang kami ambil."
          },
          {
            "ul": [
              "**Objek {categoryThing}** — Barang-barang nyata seperti wang, cermin, dan pisau. Ini adalah kategori yang paling tebal.",
              "**Haiwan {categoryAnimal}** — naga·babi·ular·lembu. Banyak daripada ini dilihat sebagai **taemong**.",
              "**Alam {categoryNature}** — perkara yang besar dan kuno seperti air·api·matahari·bulan·gunung.",
              "**Tindakan {categoryAction}** — perkara yang dilakukan dalam mimpi seperti dikejar·jatuh·terbang.",
              "**Badan {categoryBody}** — gigi·rambut·darah. Makna berbeza bergantung kepada lokasi di badan.",
              "**Orang {categoryPerson}** · **Tempat {categoryPlace}** · **Warna {categoryColor}** · **Nombor {categoryNumber}**"
            ]
          }
        ]
      },
      {
        "title": "Mengapa tiada kategori emosi?",
        "blocks": [
          {
            "p": "Kategori seperti 「kebimbangan」·「kerinduan」 tidak termasuk. **Ini kerana tafsiran mimpi tradisional tidak membincangkan emosi.** Tafsiran lama memberi tumpuan kepada apa yang terlihat dan apa yang berlaku, bukannya perasaan si pemimpi."
          },
          {
            "p": "kami telah cuba untuk mencipta kategori emosi, tetapi hasilnya adalah istilah seperti 「kehilangan kasih sayang」·「stabiliti emosi」. Ini bukan **simbol** dari mimpi tetapi kosa kata dari psikologi moden. Itu adalah jenis perkhidmatan yang berbeza dan bukan apa yang ingin dicapai oleh kamus ini."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jadi apabila anda menulis",
        "blocks": [
          {
            "p": "Sila tuliskan **apa yang anda lihat dan lakukan** dan bukannya perasaan; ia akan menghasilkan keputusan yang jauh lebih baik. Namun, kami akan bertanya tentang perasaan anda setelah bangun secara berasingan — walaupun simbol yang sama boleh mempunyai makna yang berbeza bergantung kepada situasi."
          }
        ]
      },
      {
        "title": "Warna dan nombor tidak berdiri sendiri",
        "blocks": [
          {
            "p": "Warna {categoryColor} dan nombor {categoryNumber} tidak mempunyai makna baik atau buruk yang melekat. Sama seperti ular putih dan ular hitam adalah berbeza, makna mereka berubah bergantung kepada **apa yang mereka dikaitkan dengan**. Oleh itu, kedua-dua kategori ini dianggap bersama dengan simbol lain."
          },
          {
            "p": "Senarai lengkap mengikut kategori boleh didapati dalam [kamus simbol](/dream/symbols). Membuka simbol akan menunjukkan makna tradisionalnya, kategori, dan simbol berkaitan."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Cara menggunakan",
    "title": "Apabila simbol tidak dapat dijumpai",
    "summary": "Jika anda tidak dapat menemuinya, kami akan memaklumkan bahawa ia tidak dijumpai. kami akan membincangkan mengapa ia tidak dapat dijumpai, apa yang akan kami tunjukkan sebagai ganti pada skrin itu, dan bagaimana kamus diperluas.",
    "backLabel": "Asas tafsiran",
    "sections": [
      {
        "title": "Apabila tidak dijumpai, kami akan memaklumkan bahawa ia tidak dijumpai",
        "blocks": [
          {
            "p": "Jika kami tidak dapat menemui sebarang simbol dalam teks yang anda berikan, kami akan **memaklumkan bahawa ia tidak dijumpai.** kami tidak akan memaksa mengaitkannya dengan sesuatu yang serupa atau mencipta ayat yang munasabah untuk mengisi ruang."
          },
          {
            "p": "Ini adalah apa yang paling berhati-hati tentang perkhidmatan ini. Saat kami mengisi kekosongan, ia melanggar janji bahawa kami hanya menyampaikan tafsiran yang diwarisi."
          }
        ]
      },
      {
        "title": "Mengapa ia tidak dapat dijumpai?",
        "blocks": [
          {
            "p": "Biasanya, ia adalah salah satu daripada yang berikut."
          },
          {
            "ul": [
              "**Ia adalah simbol yang belum ada dalam kamus.** Pada masa ini, terdapat {symbolTotal} simbol yang disenaraikan, tetapi terdapat banyak lagi yang mungkin muncul dalam mimpi.",
              "**Anda hanya menulis perasaan.** Jika hanya terdapat emosi seperti 「saya takut」·「saya rasa pelik」, tiada simbol yang boleh dipadankan. Tafsiran mimpi tradisional bercakap tentang **objek dan tindakan yang terlihat** dan bukannya emosi.",
              "**Ia terlalu pendek.** Adalah lebih baik untuk menulis dalam ayat daripada satu atau dua perkataan."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Apabila anda cuba menulis semula",
        "blocks": [
          {
            "p": "Sila sertakan **apa yang anda lihat dan apa yang anda lakukan** dalam mimpi. Mengatakan 「saya cemas」 adalah kurang berkesan daripada mengatakan 「saya jatuh dari tempat tinggi」, dan mengatakan 「saya menyukainya」 adalah kurang berkesan daripada mengatakan 「saya melihat air jernih mengalir」."
          }
        ]
      },
      {
        "title": "kami tidak meninggalkan skrin kosong",
        "blocks": [
          {
            "p": "Apabila sesuatu tidak dapat dijumpai, kami juga akan menunjukkan **{popularSymbolCount} simbol yang sering dicari** pada skrin itu. Ini dipilih dari kamus berdasarkan keterwakilan mereka, yang boleh membantu anda mengingati jika salah satu daripada mereka muncul dalam mimpi anda."
          },
          {
            "p": "Jika anda ingin menyemak senarai lengkap, terdapat {symbolTotal} simbol yang disusun mengikut kategori dalam [kamus simbol](/dream/symbols). Setiap simbol termasuk makna tradisionalnya dan simbol berkaitan."
          }
        ]
      },
      {
        "title": "Bagaimana kamus akan diperluas pada masa depan?",
        "blocks": [
          {
            "p": "Daripada meningkatkan nombor, kami memberi tumpuan kepada **mengenal pasti dengan tepat apa yang sudah ada**. kami telah menyertakan {aliasTotal} nama alternatif untuk simbol yang sama, dan kami telah menjadikannya mungkin untuk mengenali perkataan yang berubah bentuk dengan akhiran."
          },
          {
            "p": "Apabila memperluas simbol itu sendiri, kami hanya akan menyertakan mereka yang dapat **memberikan sumber tradisional yang didokumenkan.** Meningkatkan nombor tanpa bukti menjadi penciptaan dan bukannya kamus — kami telah mendokumentasikan percubaan dan hasil dalam [mengapa kami tidak menggunakan model](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Asas perkhidmatan",
    "title": "Sebab-sebab untuk tidak menggunakan kecerdasan buatan dalam tafsiran mimpi",
    "summary": "Tiada kod yang memanggil model dalam proses penciptaan tafsiran. kami telah meninggalkan percubaan untuk memperluas kamus menggunakan model berdasarkan hasil empirik, dan dengan itu apa yang diperoleh dan apa yang dikorbankan.",
    "backLabel": "Asas tafsiran",
    "sections": [
      {
        "title": "Kecerdasan buatan tidak digunakan dalam tafsiran mimpi",
        "blocks": [
          {
            "p": "Banyak perkhidmatan tafsiran mimpi semasa menunjukkan teks yang dihasilkan dengan memasukkan cerita mimpi ke dalam model generatif. Dreams-Link tidak melakukan itu. **Tiada kod yang memanggil model dalam proses penciptaan tafsiran.**"
          },
          {
            "p": "Apa yang kami lakukan adalah mudah. kami mencari simbol dalam teks yang anda berikan yang terdapat dalam kamus dan memilih serta menunjukkan makna yang telah ditulis oleh kamus untuk simbol-simbol tersebut. Tiada tempat untuk ayat yang tidak terdapat dalam kamus."
          }
        ]
      },
      {
        "title": "Mengapa keputusan ini dibuat?",
        "blocks": [
          {
            "p": "**Model tidak mengatakan mereka tidak tahu apa yang mereka tidak tahu.** Apabila ditanya tentang simbol tanpa sumber tradisional yang didokumenkan, mereka mencipta asal yang munasabah. Dan sama ada ia dicipta atau tidak adalah sesuatu yang tidak dapat dibezakan oleh pembaca. Jika satu penciptaan dimasukkan di tempat penyampaian tradisi, premis perkhidmatan itu runtuh."
          },
          {
            "p": "kami sebenarnya telah cuba untuk membiarkan model mencipta simbol untuk memperluas kamus. Dari enam puluh enam contoh yang berbaloi untuk dipertimbangkan, **lima puluh lima tidak dapat memberikan sebarang sumber tradisional yang didokumenkan**, dan beberapa termasuk perkara yang tidak dapat wujud dalam tafsiran mimpi tradisional, seperti subway dan lebuh raya. Oleh itu, **tiada yang dimasukkan.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hal yang sama berlaku walaupun dengan model yang lebih besar",
        "blocks": [
          {
            "p": "Apabila kami mencuba tugas yang sama dengan model yang lebih baik, hanya satu daripada sembilan belas yang lulus, dan yang satu itu hanyalah pengulangan kata-kata yang sama dalam posisi bukti. Model yang lebih besar hanya bercakap **lebih munasabah** tentang apa yang mereka tidak tahu."
          }
        ]
      },
      {
        "title": "Kelebihan tidak menggunakan model",
        "blocks": [
          {
            "ul": [
              "**Jika ia adalah mimpi yang sama, tafsiran yang sama akan keluar.** Perkataan tidak berubah setiap kali.",
              "**Ia cepat.** Tiada menunggu untuk respons model, jadi keputusan disampaikan dengan segera.",
              "**Mimpi yang anda berikan tidak keluar.** Tiada keperluan untuk menghantarnya ke pelayan syarikat luar — sila baca bersama [kaedah tidak menyimpan](/guide/no-storage).",
              "**Ia boleh ditawarkan secara percuma.** Mimpi adalah sesuatu yang kita impikan setiap hari, jadi terdapat banyak pertanyaan. Jika model dipanggil untuk setiap pertanyaan, kos mesti ditanggung di suatu tempat."
            ]
          }
        ]
      },
      {
        "title": "Apa yang dikorbankan sebaliknya",
        "blocks": [
          {
            "p": "Kami tidak dapat mentafsirkan apa yang tidak ada dalam kamus. Jika model telah digunakan, apa sahaja yang anda tulis akan menghasilkan jawapan yang masuk akal. Kami memilih sisi yang **mengatakan ia tidak dapat dijumpai apabila ia tidak dapat dijumpai**. Apa yang kami tunjukkan pada waktu itu ditulis dalam [apabila simbol tidak dapat dijumpai](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produk Berbayar",
    "title": "Dua Cara untuk Menyimpan Mimpi Anda",
    "summary": "Tafsiran itu sendiri tidak dikenakan bayaran. Kami menerangkan apa dua perkara yang kami jual, apa yang terkandung di dalamnya, dan mengapa ia bukan tafsiran yang lebih baik.",
    "backLabel": "Asas Tafsiran",
    "sections": [
      {
        "title": "Tafsiran itu sendiri tidak dikenakan bayaran",
        "blocks": [
          {
            "p": "Menulis mimpi anda dan melihat simbol yang ada **tidak memerlukan wang dan tidak memerlukan keahlian.** Oleh kerana orang bermimpi setiap hari, kami memutuskan bahawa ruang ini harus percuma."
          },
          {
            "p": "**Dua perkara yang kami jual bukanlah tafsiran yang lebih baik.** Mereka adalah **dua cara untuk menyimpan tafsiran yang sama.** Kandungan yang anda lihat di skrin tidak berubah selepas pembayaran."
          }
        ]
      },
      {
        "title": "Kad Mimpi — Satu Imej",
        "blocks": [
          {
            "p": "Kami menyediakan simbol yang terdapat dalam mimpi anda dan maknanya dalam **satu imej.** Ia adalah fail imej, bukan PDF, jadi anda boleh menyimpannya seperti sedia ada atau menghantarnya kepada orang lain."
          },
          {
            "p": "Ini adalah untuk mereka yang merasa menyesal apabila mimpi yang baik hilang selepas menutup skrin. Oleh kerana kami tidak menyimpan mimpi, jika anda ingin menyimpannya, ini adalah satu-satunya cara untuk mengambilnya."
          }
        ]
      },
      {
        "title": "Laporan Mimpi Konsepsi — Dokumen {conceptionPages} Halaman",
        "blocks": [
          {
            "p": "Untuk mimpi yang menunjukkan simbol yang ditafsirkan sebagai mimpi konsepsi, kami membuat **dokumen {conceptionPages} halaman.** Ia termasuk simbol apa yang muncul, bagaimana simbol tersebut telah ditafsirkan secara tradisional, dan tempat untuk merekodnya."
          },
          {
            "p": "Oleh kerana mimpi konsepsi sering dibincangkan dan dikongsi di kalangan ahli keluarga walaupun selepas anak dilahirkan, kami mencipta dokumen berasingan untuk mimpi yang terlalu berharga untuk hanya dilihat di skrin."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kata-kata yang Tidak Diucapkan Di Sini Juga",
        "blocks": [
          {
            "p": "Kami tidak menentukan status kehamilan atau jantina anak. Kenyataan sedemikian tidak muncul dalam dokumen. Untuk butiran, lihat [cara mentafsirkan mimpi konsepsi](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Mengapa Tiada Lagi Dokumen",
        "blocks": [
          {
            "p": "Perkhidmatan saudara menyediakan laporan sembilan halaman. Enjin saju mengekstrak banyak nilai hanya dari satu tarikh lahir. Tafsiran mimpi tidak berfungsi dengan cara itu."
          },
          {
            "p": "Simbol yang disenaraikan dalam kamus berjumlah {symbolTotal}, dan kebanyakannya mempunyai **satu makna setiap satu.** Untuk memanjangkan itu kepada sembilan halaman, kami perlu menulis makna tradisional yang tidak terdapat dalam mana-mana bahan, dan itulah yang telah diputuskan oleh perkhidmatan ini untuk tidak dilakukan. Oleh itu, dokumen ini hanya sepanjang yang dibenarkan oleh bahan secara jujur, dan tidak lebih."
          }
        ]
      },
      {
        "title": "Harga dan Status Jualan",
        "blocks": [
          {
            "p": "Harga disenaraikan dalam [panduan harga](/pricing). Sebab dokumen ini tidak menyenaraikan jumlah adalah disengajakan — untuk mengelakkan situasi di mana dokumen panduan kekal dengan jumlah lama apabila harga berubah. Skrin dan terma semuanya membaca jumlah yang sama dari satu tempat."
          },
          {
            "p": "Dokumen yang anda beli boleh **diperoleh semula dengan pesanan yang sama.** Namun, kerana kami tidak menyimpan fail, setelah anda meninggalkan skrin hasil, anda tidak dapat menciptanya semula — sila simpan fail yang anda terima."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Maklumat Peribadi",
    "title": "Kaedah Tidak Menyimpan Mimpi yang Anda Tulis",
    "summary": "Kami menerangkan apa maksudnya secara teknikal bahawa cerita mimpi tidak direkodkan di mana-mana, dan apa yang terkandung dalam pautan hasil.",
    "backLabel": "Asas Tafsiran",
    "sections": [
      {
        "title": "Tiada Keahlian Diperlukan",
        "blocks": [
          {
            "p": "Dreams-Link tidak membuat akaun. Kami tidak mengumpul nama, emel, atau nombor telefon. Satu-satunya perkara yang kami kumpulkan adalah mimpi yang anda tulis, bagaimana perasaan anda ketika bangun, dan sama ada anda bermimpi mimpi yang sama berulang kali, dan itu tidak kekal selepas tafsiran selesai."
          },
          {
            "p": "Cerita mimpi adalah nilai yang paling peribadi yang diterima oleh perkhidmatan ini. Inilah sebabnya mengapa peraturannya lebih ketat daripada yang diperlukan — kami tidak pernah mencipta meja untuk menulis apa yang anda hantar."
          }
        ]
      },
      {
        "title": "Apa yang terkandung dalam pautan hasil",
        "blocks": [
          {
            "p": "Apabila pengiraan selesai, alamat akan kelihatan seperti ini."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "Apa yang mengikuti **#** adalah nilai input. Bahagian ini dipanggil **fragment**, yang merupakan **bahagian yang tidak dihantar oleh pelayar ke pelayan.** Ini adalah tingkah laku web standard dan bukan peraturan yang kami cipta — ia pada asalnya direka untuk menunjukkan lokasi dalam dokumen, jadi pelayan tidak perlu melihatnya."
          },
          {
            "p": "Di sini, sifat ini sangat penting — mimpi yang anda berikan **tidak kekal dalam rekod akses.**"
          },
          {
            "p": "Dengan kata lain, apabila anda membuka pautan hasil, pelayar membaca nilai itu untuk meminta pengiraan, dan pelayan kami menerima nilai untuk pengiraan, mengembalikan jawapan, dan kemudian melupakannya."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sila berhati-hati apabila menghantar pautan kepada orang lain",
        "blocks": [
          {
            "p": "Fakta bahawa ia tidak disimpan di pelayan tidak bermakna pautan itu selamat. Pautan hasil mengandungi mimpi yang anda berikan, jadi orang yang menerima pautan itu boleh membaca kandungan tersebut."
          }
        ]
      },
      {
        "title": "Mengapa pengiraan dilakukan di pelayan tetapi tidak disimpan?",
        "blocks": [
          {
            "p": "Pengiraan itu sendiri dilakukan di pelayan. Mencari simbol memerlukan keseluruhan kamus, dan kamus itu terlalu besar untuk dihantar ke pelayar. Menyimpan kamus di pelayan juga bermakna bahawa apabila kesilapan diperbaiki, ia akan dicerminkan untuk semua orang sekaligus. Namun, **selepas memproses permintaan, nilai itu tidak digunakan di mana-mana.** Tiada kod untuk memasukkannya ke dalam pangkalan data."
          },
          {
            "p": "Rekod minimum yang diperlukan untuk operasi disimpan — satu kaunter untuk mengelakkan orang yang sama menghantar terlalu banyak permintaan dalam masa yang singkat. Ini tidak termasuk kandungan mimpi, dan IP akses juga tidak disimpan. Hanya satu nilai, yang dihash dengan tarikh, dikira, dan nilai itu berubah apabila hari berubah."
          }
        ]
      },
      {
        "title": "Apa yang tidak dapat dilakukan kerana ia tidak disimpan",
        "blocks": [
          {
            "p": "Secara jujur, terdapat perkara yang telah kami korbankan kerana kami tidak menyimpan data."
          },
          {
            "ul": [
              "**Tiada diari mimpi.** Anda tidak boleh mendapatkan semula tafsiran dari minggu lepas, dan anda mesti mempunyai pautan untuk melihatnya semula. Ini dilakukan secara sengaja — untuk mencipta diari, tulisan yang paling peribadi mesti disimpan secara berterusan.",
              "**Kami mengira nilai yang sama setiap kali.** Tiada cache. Sebaliknya, kamus adalah tetap, dan peraturan pemadanan adalah deterministik, jadi teks yang sama akan sentiasa menghasilkan simbol yang sama — peraturan menggantikan apa yang dijamin oleh cache.",
              "**Menyegarkan akan membawa pintu iklan muncul semula.** Ini kerana tiada tempat untuk meninggalkan rekod tontonan."
            ]
          }
        ]
      },
      {
        "title": "Sekiranya pembelian",
        "blocks": [
          {
            "p": "Jika anda membeli laporan, rekod transaksi akan disimpan pada masa itu. Pembayaran mempunyai tempoh penyimpanan yang ditetapkan secara sah, dan tanpa sejarah pesanan, pengembalian tidak dapat diproses. Namun, walaupun begitu, **teks mimpi yang digunakan untuk bacaan tidak dilampirkan pada pesanan** — ia diterima semula dan ditulis pada saat itu ketika mencipta dokumen selepas pengesahan pembayaran."
          },
          {
            "p": "Untuk butiran, sila rujuk kepada [dasar privasi](/privacy)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Notis",
    "title": "Pengumuman",
    "summary": "Ini adalah tempat untuk memberitahu anda tentang perubahan yang mungkin mempengaruhi penggunaan anda.",
    "backLabel": "Kembali ke Halaman Utama",
    "sections": []
  },
  "contact": {
    "eyebrow": "Hubungi",
    "title": "Pertanyaan",
    "summary": "Ini adalah saluran untuk pertanyaan mengenai penggunaan, pengembalian dana, permintaan maklumat peribadi, dan laporan kesilapan, bersama dengan maklumat perniagaan.",
    "backLabel": "Kembali ke Halaman Utama",
    "sections": [
      {
        "title": "Hubungi melalui Email",
        "blocks": [
          {
            "p": "Sila hantar pertanyaan ke **{email}**. Kami akan memberi maklum balas dalam masa 2 hari bekerja. Untuk pertanyaan mengenai pembayaran dan pengembalian dana, adalah lebih cepat jika anda menyertakan **nombor pesanan atau email pembayaran** anda."
          },
          {
            "p": "Pertanyaan melalui telefon diterima di {customerCenter}."
          }
        ]
      },
      {
        "title": "Apa yang boleh dihantar ke saluran ini?",
        "blocks": [
          {
            "ul": [
              "**Pembayaran dan Pengembalian Dana** — Jika dokumen belum dibuat atau jumlah pembayaran berbeza dari pesanan, pengembalian penuh akan diberikan. Syarat terdapat dalam [dasar pengembalian](/refund-policy).",
              "**Maklumat Peribadi** — Kami menerima permintaan untuk akses, pembetulan, dan pemadaman. Dasar pemprosesan terdapat dalam [dasar privasi](/privacy).",
              "**Laporan Kesilapan Tafsiran** — Jika simbol ditemui dengan tidak betul atau tafsiran kelihatan pelik, sila maklumkan kepada kami. Jika anda menyertakan bila anda menulis cerita mimpi itu, kami boleh menyemaknya semula dengan teks yang sama."
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
            "p": "Anda tidak perlu menulis semula mimpi yang anda berikan dalam email pertanyaan. Kami tidak menyimpan input, jadi kami tidak dapat menyemaknya semula, dan nombor pesanan sudah cukup untuk pengesahan. Sila tulis hanya jika ia benar-benar perlu, seperti untuk melaporkan kesilapan tafsiran."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Prinsip Perkhidmatan",
    "title": "Apa yang Kami Tidak Lakukan",
    "summary": "Kami tidak menyediakan nombor loteri, jurnal mimpi, penentuan kehamilan, atau azimat. Kami menerangkan mengapa kami memilih untuk tidak melakukan setiap perkara ini.",
    "backLabel": "Asas Tafsiran",
    "sections": [
      {
        "title": "Kami tidak menyediakan nombor loteri",
        "blocks": [
          {
            "p": "Walaupun ia sering dibincangkan dalam perkhidmatan tafsiran mimpi, kami tidak melakukan ini. **Tiada asas dalam tafsiran mimpi tradisional untuk menarik nombor dari mimpi.** Walaupun terdapat rekod yang mentafsirkan mimpi babi sebagai kekayaan, tiada peraturan dalam mana-mana kesusasteraan yang menghasilkan enam nombor dari itu."
          },
          {
            "p": "Untuk menciptanya, kami perlu mereka cipta, dan pada saat itu, perkhidmatan ini tidak lagi menjadi tempat untuk menyampaikan tafsiran yang diwarisi oleh tradisi. Ini terutama membimbangkan kerana ia boleh menyebabkan kerugian kewangan."
          }
        ]
      },
      {
        "title": "Kami tidak membuat jurnal mimpi",
        "blocks": [
          {
            "p": "Walaupun adalah mudah untuk mempunyai ciri untuk mengumpul mimpi lalu, ia memerlukan kami untuk **menyimpan secara berterusan mimpi yang anda berikan.** Naratif mimpi adalah aspek yang paling peribadi daripada apa yang diterima oleh perkhidmatan ini, dan kami telah memutuskan untuk tidak bertukar itu."
          },
          {
            "p": "Sebaliknya, mimpi yang anda ingin simpan boleh **diambil sebagai imej atau dokumen.** Tanggungjawab untuk penyimpanan terletak pada pengguna, bukan kami — [Dua Cara untuk Menyimpan Mimpi Anda](/guide/reports)"
          }
        ]
      },
      {
        "title": "Kami tidak menentukan kehamilan atau jantina",
        "blocks": [
          {
            "p": "We will only state that a symbol interpreted as a a conception dream (conception dream) has appeared. Whether you are pregnant or whether the child is a daughter or son is **not something that can be known through dreams.** Such statements do not appear on the screen or in paid documents."
          }
        ]
      },
      {
        "title": "Kami tidak menjual azimat atau jimat",
        "blocks": [
          {
            "p": "Simbol yang dibaca sebagai tidak menguntungkan bukan alasan untuk membeli apa-apa. Mimpi yang tidak menguntungkan secara tradisional digunakan untuk **menunjukkan situasi yang perlu diperiksa sekarang**, bukan untuk membayar untuk mengelakkan sesuatu."
          },
          {
            "p": "Kami tidak mencipta kebimbangan untuk menjual sesuatu berdasarkan itu. Satu-satunya perkara yang kami jual adalah dua yang disebutkan di atas, dan kedua-duanya tidak memberikan tafsiran tambahan tetapi sebaliknya **cara untuk menyimpan kandungan yang sama.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kami tidak membuat kenyataan definitif tentang masa depan",
        "blocks": [
          {
            "p": "Kami tidak membuat kenyataan definitif tentang sama ada sesuatu akan berlaku, bila ia akan berlaku, atau mengenai kesihatan, kekayaan, atau jangka hayat. Menyampaikan makna simbol tradisional dan meramalkan masa depan adalah perkara yang berbeza."
          }
        ]
      },
      {
        "title": "Kami tidak mengada-adakan tafsiran yang tidak wujud",
        "blocks": [
          {
            "p": "Untuk simbol yang tidak wujud dalam kamus, kami akan **menyatakan bahawa kami tidak dapat menemuinya.** Kami tidak mengumpulkan yang serupa atau mengisi ruang dengan ayat yang masuk akal. Oleh itu, perkhidmatan ini tidak [menggunakan kecerdasan buatan untuk tafsiran mimpi](/guide/no-ai). Model ini tidak mengatakan ia tidak tahu apa yang tidak diketahuinya."
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
  "intro": "Perubahan kepada terma penggunaan anda — harga, dasar — dipaparkan di sini sebelum ia berkuatkuasa. Penambahbaikan dalaman seperti skrin yang menjadi lebih cepat tidak dipaparkan di sini: apa yang muncul di sini adalah apa yang anda perlu tahu.",
  "empty": {
    "title": "Tiada pengumuman yang diposkan",
    "body": "Jika terdapat sebarang perubahan untuk dimaklumkan kepada anda, ia akan dipaparkan di sini."
  },
  "effective": "Berkuat kuasa dari {date}",
  "pager": {
    "label": "Halaman Notis",
    "newer": "← Terbaru",
    "older": "Notis Sebelumnya →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "Mimpi yang anda berikan tidak disimpan.",
      "body": [
        "Cerita mimpi adalah nilai yang paling peribadi yang diterima oleh perkhidmatan ini. Oleh itu, ia tidak direkodkan dalam mana-mana jadual. Input hanya dibawa dalam alamat hasil untuk pengiraan, dan setelah tetingkap ditutup, ia hilang.",
        "Kami memutuskan untuk tidak mencipta ciri yang mengumpul mimpi dan menunjukkan aliran (diari mimpi). Ia adalah ciri yang berguna, tetapi untuk melakukannya, tulisan yang paling peribadi mesti disimpan secara berterusan.",
        "Apabila anda menghantar pautan hasil kepada orang lain, ia mengandungi kandungan mimpi. Sila berhati-hati semasa berkongsi."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Hasilnya termasuk kamus simbol dan kriteria pengiraan.",
      "body": [
        "Asas untuk tafsiran adalah kamus simbol tafsiran mimpi tradisional. Hasil dan dokumen akan termasuk versi kamus tersebut (contohnya, 1.2.0) dan versi peraturan pemadanan (contohnya dream-1.0.0). Mimpi yang sama akan sentiasa menghasilkan simbol yang sama berdasarkan kriteria yang sama.",
        "Jika kami menambah simbol ke dalam kamus atau mengubah makna dengan cara yang boleh mengubah hasil, fakta ini akan dipaparkan di sini. Ini kerana hasil yang anda terima sebelum ini mungkin berubah.",
        "Kami tidak mencipta makna tradisional yang tidak terdapat dalam kamus. Jika tiada simbol dijumpai, kami hanya menyatakan bahawa tiada yang dijumpai dan menyimpulkan."
      ]
    },
    "2026-08-06-conception": {
      "title": "Kami hanya memaklumkan anda tentang mimpi konsepsi dan tidak membuat penilaian.",
      "body": [
        "Jika simbol yang secara tradisional dilihat sebagai mimpi konsepsi muncul dalam mimpi, kami akan memaklumkan anda tentang fakta itu. Namun, kami tidak menentukan status kehamilan atau jantina anak — tuntutan sedemikian tidak mempunyai asas, dan penilaian perubatan adalah tanggungjawab institusi perubatan.",
        "Sebutannya tentang anak lelaki dan perempuan dalam naratif tradisional adalah cerminan adat yang telah diwarisi, dan ia tidak bermakna bahawa kami meramalkan dengan tepat."
      ]
    }
  }
} satisfies NoticeCopy;
