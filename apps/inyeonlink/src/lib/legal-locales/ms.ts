import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Dasar Pemprosesan Data Peribadi",
  "intro": "InyeonLink tidak menyimpan maklumat yang diperlukan untuk pengiraan keserasian. Dasar ini menerangkan apa yang diterima oleh perkhidmatan, apa yang tidak ditinggalkan, dan apa yang direkod secara automatik.",
  "sections": [
    {
      "heading": "1. Maklumat yang tidak disimpan",
      "paragraphs": [
        "Tarikh lahir, waktu kelahiran, tempat kelahiran, jantina, dan nama yang digunakan untuk pengiraan keserasian **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memori pelayan semasa memproses permintaan dan hilang bersama dengan respons.",
        "Ia tidak direkod dalam pangkalan data dan tidak disimpan dalam fail berasingan. Tiada pendaftaran ahli, jadi nilai yang dimasukkan tidak dikaitkan dengan individu tertentu."
      ]
    },
    {
      "heading": "2. Maklumat yang terkandung dalam pautan keputusan",
      "paragraphs": [
        "Alamat skrin keputusan mengandungi nilai yang dimasukkan dalam bentuk yang disulitkan. Namun, nilai ini terletak selepas # dalam alamat, dan mengikut standard web, kandungan selepas # tidak dihantar oleh pelayar ke pelayan. Oleh itu, walaupun pautan keputusan dibuka, hanya laluan alamat yang akan kekal dalam rekod akses pelayan.",
        "Jika pautan keputusan dihantar kepada orang lain, orang itu juga boleh melihat keputusan yang sama. Pautan itu sendiri mengandungi nilai yang dimasukkan, jadi keputusan untuk berkongsi adalah di tangan pengguna."
      ]
    },
    {
      "heading": "3. Maklumat yang dikumpul secara automatik",
      "paragraphs": [
        "Tiada maklumat yang dikumpul oleh perkhidmatan untuk mengenal pasti pengguna. Namun, rekod minimum yang diperlukan untuk operasi perkhidmatan disimpan secara automatik oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, waktu akses, jenis pelayar, dan rekod akses pelayan yang umum",
        "Maklumat negara — hanya digunakan untuk menentukan bahasa skrin secara automatik dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Kuki dan iklan",
      "paragraphs": [
        "Perkhidmatan itu sendiri tidak menggunakan kuki untuk menjejak pengguna.",
        "Pada masa ini, tiada iklan yang dipaparkan dalam perkhidmatan ini. Jika iklan mula dipaparkan pada masa hadapan, penyedia iklan (contohnya, Google) mungkin menggunakan kuki untuk menyiarkan iklan. Dalam kes itu, klausa ini akan diubah terlebih dahulu untuk menjelaskan apa yang berubah sebelum ia bermula."
      ]
    },
    {
      "heading": "5. Maklumat yang disimpan semasa pembayaran",
      "paragraphs": [
        "Pada masa ini, tiada maklumat yang disimpan berkaitan dengan pembayaran kerana tiada produk berbayar yang dijual.",
        "Apabila jualan bermula, maklumat berikut akan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang. **Pada masa itu, nilai yang dimasukkan untuk pengiraan keserasian dan PDF yang dihasilkan tidak akan disimpan,** dan maklumat yang mengenal pasti pengguna seperti nama, maklumat hubungan, dan alamat juga tidak akan diterima."
      ],
      "bullets": [
        "Nombor pesanan dan pengenalan pembayaran",
        "Jumlah pembayaran, mata wang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Jenis produk, status pemprosesan, bilangan muat turun dokumen, waktu pesanan",
        "Bahasa skrin pada waktu pesanan dan pengenalan kawasan pembayaran (dalam negara, luar negara)",
        "Tempoh penyimpanan — Rekod berkaitan pembayaran dan pembekalan barang akan disimpan selama 5 tahun dan rekod berkaitan aduan atau pertikaian pengguna akan disimpan selama 3 tahun sebelum dimusnahkan mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Perdagangan Elektronik."
      ]
    },
    {
      "heading": "6. Pemberian dan pemprosesan oleh pihak ketiga",
      "paragraphs": [
        "Tiada maklumat peribadi yang disimpan, jadi tiada maklumat peribadi yang diberikan kepada pihak ketiga.",
        "Perkhidmatan menggunakan infrastruktur hosting {hostingProvider} untuk operasi, dan dalam proses ini, rekod akses di atas diproses mengikut polisi penyedia tersebut.",
        "Apabila jualan produk berbayar bermula, pembayaran domestik akan diserahkan kepada Toss Payments, dan pembayaran luar negara akan diserahkan kepada PortOne (PayPal). Maklumat kaedah pembayaran seperti nombor kad dan nombor akaun akan diproses secara langsung oleh penyedia tersebut, dan perkhidmatan tidak akan menerima maklumat tersebut."
      ]
    },
    {
      "heading": "7. Hak pengguna",
      "paragraphs": [
        "Tiada maklumat peribadi yang disimpan, jadi tiada pihak yang boleh diminta untuk melihat, membetulkan, atau memadam.",
        "Pengguna boleh menghapus semua jejak input hanya dengan menghapus pautan keputusan dalam bar alamat pelayar.",
        "Jika ada pertanyaan berkaitan penggunaan perkhidmatan, sila hubungi melalui maklumat di bawah."
      ]
    },
    {
      "heading": "8. Maklumat peribadi kanak-kanak",
      "paragraphs": [
        "Perkhidmatan ini tidak ditujukan kepada kanak-kanak di bawah umur 14 tahun dan tidak mengumpul maklumat peribadi daripada kanak-kanak."
      ]
    },
    {
      "heading": "9. Pegawai perlindungan data peribadi",
      "paragraphs": [
        "Pegawai perlindungan: {privacyOfficer}",
        "Pertanyaan: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Perubahan dasar",
      "paragraphs": [
        "Jika dasar ini diubah, tarikh berkuat kuasa dan butiran perubahan akan diterbitkan di halaman ini. Jika terdapat perubahan yang nyata dalam pemprosesan seperti pengiklanan atau penjualan produk berbayar, makluman tentang perubahan tersebut akan diberikan terlebih dahulu."
      ]
    }
  ],
  "effectiveLabel": "Tarikh berkuat kuasa"
};

const d1 = {
  "title": "Terma Penggunaan",
  "intro": "Terma ini menetapkan syarat penggunaan perkhidmatan InyeonLink (selepas ini dirujuk sebagai “perkhidmatan”). Dengan menggunakan perkhidmatan ini, anda dianggap telah bersetuju dengan terma ini.",
  "effectiveLabel": "Tarikh Berkuatkuasa",
  "sections": [
    {
      "heading": "1. Sifat Perkhidmatan",
      "paragraphs": [
        "Perkhidmatan ini menunjukkan hubungan antara dua individu berdasarkan tarikh lahir yang dimasukkan dengan menggunakan peraturan hubungan tradisional saju (사주) dan zodiak Korea (띠).",
        "Kadar pemadanan dan penjelasan yang diberikan adalah **rujukan dari perspektif tafsiran tradisional dan bukan ramalan saintifik atau kepastian mengenai hubungan.** Skor yang rendah tidak bermakna hubungan itu buruk, dan skor yang tinggi tidak menjamin hubungan yang baik."
      ]
    },
    {
      "heading": "2. Yuran Penggunaan",
      "paragraphs": [
        "Perkhidmatan ini disediakan secara percuma dan tidak memerlukan pendaftaran ahli.",
        "Apabila penjualan produk berbayar (laporan keserasian PDF dan laporan ikatan takdir) bermula, syarat dalam perkara 3 di bawah akan terpakai. Terma ini akan diberitahu semula sebelum permulaan penjualan."
      ]
    },
    {
      "heading": "3. Produk Berbayar dan Pengembalian Wang",
      "paragraphs": [
        "Produk berbayar yang dijual adalah **laporan kesesuaian PDF** sebanyak dua jenis. Kedua-duanya menghasilkan dokumen dari hasil di skrin, dan juga mengandungi maklumat yang tidak dipaparkan di skrin.",
        "**Laporan Kesesuaian Saju PDF** — 7 halaman. Mengandungi arah aliran dua tenaga, jadual yang lebih mendalam mengenai saju (사주) masing-masing, tempat di mana empat tiang bertemu, serta asas pengiraan. Pembayaran domestik {priceDomestic} (termasuk VAT), pembayaran luar negara {priceGlobal}.",
        "**Laporan Ikatan PDF** — 4 halaman. Mengandungi senarai keseluruhan sepuluh unsur langit dan dua belas zodiak yang tidak dipaparkan di skrin. Pembayaran domestik {priceAffinityDomestic} (termasuk VAT), pembayaran luar negara {priceAffinityGlobal}.",
        "Pembayaran domestik boleh dilakukan melalui Toss Payments menggunakan kad kredit/debit dan pembayaran mudah (Toss Pay, Kakao Pay, Naver Pay, Payco, dan lain-lain), manakala pembayaran luar negara menggunakan PayPal melalui PortOne. Jumlah akhir adalah berdasarkan jumlah yang dipaparkan di skrin pembayaran.",
        "**Perkhidmatan tidak menyimpan input pengguna atau fail PDF yang dihasilkan.** Setelah pembayaran diluluskan, dokumen akan dihasilkan dan dihantar serta tidak ada yang disimpan di pelayan. Oleh itu, fail yang dimuat turun perlu disimpan oleh pengguna sendiri.",
        "Sekiranya muat turun terhenti atau fail hilang, anda boleh memuat turun semula **sehingga 5 kali** dengan pesanan yang sama. Namun, jika input hilang di luar skrin hasil, ia tidak dapat dibuat semula, jadi sila simpan fail segera selepas pembayaran."
      ],
      "bullets": [
        "**Sebelum muat turun dimulakan selepas pembayaran,** anda boleh membatalkan dan mendapatkan pengembalian penuh pada bila-bila masa.",
        "**Setelah muat turun selesai,** pembatalan kerana perubahan fikiran adalah terhad. Ini adalah kandungan digital yang disediakan serta-merta dan tidak dapat dipulihkan, yang termasuk dalam sebab-sebab pembatalan yang ditetapkan dalam Seksyen 17(2) Akta Perlindungan Pengguna dalam Transaksi Elektronik.",
        "**Jika dokumen tidak dihasilkan kerana ralat sistem, fail tidak dapat dibuka, atau jumlah pembayaran berbeza daripada pesanan,** ia akan diproses untuk pengeluaran semula atau pengembalian penuh.",
        "**Ketidakpuasan terhadap isi hasil** tidak dianggap sebagai sebab untuk pengembalian wang. Hasil kesesuaian adalah bahan rujukan dari perspektif tafsiran tradisional dan sifatnya telah dinyatakan sebelum pembayaran (lihat perenggan 1 di atas).",
        "Permintaan semula setelah menggunakan semua 5 kali pengeluaran semula tidak dianggap sebagai sebab untuk pengembalian wang.",
        "**Jika individu yang belum dewasa membuat pembayaran tanpa persetujuan wakil sah,** individu tersebut atau wakil sahnya boleh membatalkan pembayaran tersebut. Sila maklumkan kepada kami melalui maklumat hubungan di bawah untuk mendapatkan pengembalian wang."
      ]
    },
    {
      "heading": "4. Mengenai Hasil Pengiraan",
      "paragraphs": [
        "Semua skor dikira mengikut peraturan yang ditetapkan, jadi jika nilai yang sama dimasukkan, hasilnya akan sentiasa sama.",
        "Jika waktu kelahiran tidak dimasukkan, pengiraan akan dilakukan tanpa mengambil kira si ju (時柱), jadi hasilnya mungkin berbeza. Semakin tepat tempat kelahiran dipilih, semakin tepat pengiraan si ju akan menjadi.",
        "Pengiraan manseyeok (万岁历) menggunakan perpustakaan pengiraan yang terbuka, dan hasilnya mungkin berbeza bergantung kepada cara pemprosesan musim dan zon waktu."
      ]
    },
    {
      "heading": "5. Tanggungjawab Pengguna",
      "paragraphs": [
        "Pengguna boleh memasukkan tarikh lahir orang lain, tetapi tidak boleh menggunakan hasil tersebut untuk merugikan orang lain.",
        "Jangan gunakan hasil perkhidmatan sebagai asas untuk membuat keputusan yang mempengaruhi hak orang lain dalam perkahwinan, perceraian, pengambilan pekerja, transaksi, dan lain-lain. Perkhidmatan ini tidak dibuat untuk tujuan tersebut."
      ]
    },
    {
      "heading": "6. Tindakan Dilarang",
      "paragraphs": [
        "Tindakan berikut adalah tidak dibenarkan."
      ],
      "bullets": [
        "Menghantar permintaan berlebihan menggunakan alat automasi yang mengganggu operasi perkhidmatan",
        "Menyajikan hasil perkhidmatan seolah-olah ia adalah fakta atau hasil penilaian pakar",
        "Menggandakan atau mengubah suai perkhidmatan untuk menyediakan perkhidmatan yang sama"
      ]
    },
    {
      "heading": "7. Pengecualian Tanggungjawab",
      "paragraphs": [
        "Perkhidmatan ini hanya menyediakan bahan rujukan, dan kami tidak bertanggungjawab terhadap sebarang keputusan yang dibuat oleh pengguna berdasarkan hasil tersebut dan akibatnya.",
        "Kami tidak bertanggungjawab terhadap sebarang kerugian yang timbul akibat gangguan perkhidmatan disebabkan oleh sebab-sebab di luar kawalan kami seperti bencana alam, gangguan penyedia infrastruktur, dan lain-lain."
      ]
    },
    {
      "heading": "8. Hak Harta Intelek",
      "paragraphs": [
        "Hak terhadap tampilan, teks, dan implementasi aturan pengiraan perkhidmatan adalah milik pengendali. Pengguna boleh menyimpan atau berkongsi hasil untuk tujuan peribadi."
      ]
    },
    {
      "heading": "9. Perubahan Terma dan Undang-Undang yang Digunakan",
      "paragraphs": [
        "Sekiranya terma diubah, ia akan diterbitkan di halaman ini bersama dengan tarikh berkuat kuasa.",
        "Terma ini tertakluk kepada undang-undang Republik Korea, dan sebarang pertikaian yang berkaitan dengan penggunaan perkhidmatan akan mengikuti prosedur yang ditetapkan oleh undang-undang yang berkenaan."
      ]
    }
  ]
};

const d2 = {
  "title": "Dasar Pembatalan dan Pengembalian Wang",
  "intro": "Ini adalah kriteria untuk pembatalan dan pengembalian wang bagi **laporan keserasian PDF**. Kami telah mengumpulkan isi yang sama seperti dalam klausa 3.",
  "sections": [
    {
      "heading": "1. Sifat Produk",
      "paragraphs": [
        "Produk yang dijual adalah **laporan keserasian PDF** tunggal, dan setelah pembayaran diluluskan, dokumen akan dibuat serta-merta dan dihantar sebagai kandungan digital.",
        "**Perkhidmatan tidak menyimpan input pengguna atau fail PDF yang dihasilkan.** Oleh itu, fail yang dimuat turun perlu disimpan oleh pengguna sendiri."
      ]
    },
    {
      "heading": "2. Pembatalan Pesanan",
      "paragraphs": [
        "Ia mengikuti kriteria yang ditetapkan oleh undang-undang perdagangan elektronik."
      ],
      "bullets": [
        "**Sebelum muat turun bermula,** anda boleh membatalkan dan mendapatkan pengembalian wang penuh pada bila-bila masa.",
        "**Setelah muat turun selesai,** pembatalan pesanan atas alasan perubahan fikiran adalah terhad. Ini adalah kandungan digital yang disediakan sebaik sahaja pembayaran dibuat dan tidak boleh dipulihkan, yang termasuk dalam alasan terhad yang ditetapkan dalam Seksyen 17(2) Akta Perlindungan Pengguna dalam Transaksi Elektronik. Ini telah dimaklumkan dan persetujuan telah diperoleh di skrin pembayaran."
      ]
    },
    {
      "heading": "3. Kes Pengembalian Wang Penuh",
      "paragraphs": [
        "Dalam kes berikut, kami akan memproses pengeluaran semula atau pengembalian wang penuh setelah memeriksa sebabnya."
      ],
      "bullets": [
        "Jika dokumen tidak dihasilkan akibat ralat sistem",
        "Jika fail yang dimuat turun tidak dapat dibuka",
        "Jika jumlah pembayaran berbeza daripada pesanan",
        "**Jika pembayaran dibuat oleh individu yang belum mencapai umur dewasa tanpa persetujuan wakil sah.** — Individu tersebut atau wakil sahnya boleh meminta pembatalan."
      ]
    },
    {
      "heading": "4. Kes yang Bukan Sebab Pengembalian Wang",
      "paragraphs": [],
      "bullets": [
        "**Ketidakpuasan terhadap hasil.** Hasil keserasian adalah bahan rujukan dari perspektif tafsiran tradisional dan sifatnya telah dimaklumkan sebelum pembayaran.",
        "Permintaan semula setelah menggunakan semua 5 kali pengeluaran semula."
      ]
    },
    {
      "heading": "5. Cara Mengemukakan Permohonan",
      "paragraphs": [
        "Sila kemukakan permohonan pengembalian wang atau pertanyaan melalui pusat pelanggan ({customerCenter}) atau emel ({email}). Memberitahu nombor pesanan bersama akan mempercepatkan pengesahan.",
        "Pengembalian wang akan dikembalikan melalui kaedah pembayaran yang digunakan, dan bergantung kepada syarikat kad/pembayaran, ia mungkin mengambil masa 3 hingga 7 hari bekerja untuk diproses."
      ]
    }
  ],
  "effectiveLabel": "Tarikh Berkuatkuasa"
};

const d3 = {
  "title": "Panduan Harga",
  "intro": "Menjelaskan skop perkhidmatan percuma dan harga produk berbayar.",
  "sections": [
    {
      "heading": "1. Percuma",
      "paragraphs": [
        "**Pengiraan dan semakan keputusan keserasian adalah percuma.** Pendaftaran ahli tidak diperlukan.",
        "Anda boleh melihat kadar padanan, skor mengikut item, pilar saju (四柱) kedua-dua individu dan kekuatan elemen, serta bentuk hubungan di skrin."
      ]
    },
    {
      "heading": "2. Laporan Keserasian PDF (berbayar)",
      "paragraphs": [
        "Pembayaran domestik {priceDomestic} (termasuk VAT) · Pembayaran luar negara {priceGlobal}",
        "Kami akan menghasilkan keputusan di skrin dalam bentuk dokumen PDF sebanyak 7 halaman. Ini termasuk arah aliran tenaga yang berinteraksi, jadual yang lebih mendalam mengenai saju (四柱) masing-masing, lokasi di mana empat pilar bertemu, dan asas pengiraan yang tidak terdapat di skrin.",
        "Dengan pesanan yang sama, anda boleh memuat turun semula **sehingga 5 kali**. Namun, jika anda keluar dari skrin keputusan dan nilai input hilang, anda tidak dapat membuat semula, jadi sila simpan fail segera selepas pembayaran."
      ]
    },
    {
      "heading": "3. Laporan Hubungan PDF (berbayar)",
      "paragraphs": [
        "Pembayaran domestik {priceAffinityDomestic} (termasuk VAT) · Pembayaran luar negara {priceAffinityGlobal}",
        "Kami akan menghasilkan keputusan di skrin dalam bentuk dokumen PDF sebanyak 4 halaman. Skrin hanya menunjukkan set keserasian yang sesuai, tetapi PDF mengandungi jadual keseluruhan bagi sepuluh batang langit dan dua belas zodiak.",
        "Syarat untuk pengeluaran semula adalah sama seperti laporan keserasian."
      ]
    },
    {
      "heading": "4. Kaedah Pembayaran",
      "paragraphs": [
        "**Domestik** — Anda boleh menggunakan kad kredit/debit dan pembayaran mudah (TossPay, KakaoPay, NaverPay, Payco, dll.) melalui Toss Payments.",
        "**Luar negara** — Anda boleh membayar melalui PayPal melalui PortOne.",
        "Jumlah akhir pembayaran adalah berdasarkan jumlah yang ditunjukkan di skrin pembayaran."
      ]
    },
    {
      "heading": "5. Perubahan Harga",
      "paragraphs": [
        "Jika terdapat perubahan harga, ia akan diumumkan di halaman ini terlebih dahulu. Harga yang telah dibayar untuk pesanan yang telah selesai tidak akan terjejas oleh perubahan harga."
      ]
    }
  ],
  "effectiveLabel": "Tarikh Berkuatkuasa"
};

const d4 = {
  "title": "Dasar Pemprosesan Data Peribadi",
  "intro": "InyeonLink tidak menyimpan maklumat yang diperlukan untuk pengiraan keserasian. Dasar ini menerangkan apa yang diterima oleh perkhidmatan, apa yang tidak disimpan, dan apa yang direkod secara automatik.",
  "sections": [
    {
      "heading": "1. Maklumat yang tidak disimpan",
      "paragraphs": [
        "Tarikh lahir, waktu kelahiran, tempat kelahiran, jantina, dan nama yang digunakan untuk pengiraan keserasian **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memori pelayan semasa memproses permintaan dan hilang bersama dengan respons.",
        "Ia tidak direkod dalam pangkalan data dan tidak disimpan dalam fail berasingan. Tiada pendaftaran ahli, jadi nilai yang dimasukkan tidak dikaitkan dengan individu tertentu."
      ]
    },
    {
      "heading": "2. Maklumat yang terkandung dalam pautan keputusan",
      "paragraphs": [
        "Alamat skrin keputusan mengandungi nilai yang dimasukkan dalam bentuk yang disulitkan. Namun, nilai ini terletak selepas # dalam alamat, dan mengikut standard web, kandungan selepas # tidak dihantar oleh pelayar ke pelayan. Oleh itu, walaupun pautan keputusan dibuka, hanya laluan alamat yang akan kekal dalam rekod akses pelayan.",
        "Jika pautan keputusan dihantar kepada orang lain, orang itu juga boleh melihat keputusan yang sama. Pautan itu sendiri mengandungi nilai yang dimasukkan, jadi keputusan untuk berkongsi adalah di tangan pengguna."
      ]
    },
    {
      "heading": "3. Maklumat yang dikumpul secara automatik",
      "paragraphs": [
        "Tiada maklumat yang dikumpul oleh perkhidmatan untuk mengenal pasti pengguna. Namun, rekod minimum yang diperlukan untuk operasi perkhidmatan disimpan secara automatik oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, waktu akses, jenis pelayar, dan rekod akses pelayan umum yang lain",
        "Maklumat negara — hanya digunakan untuk menentukan bahasa skrin secara automatik dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Kuki dan iklan",
      "paragraphs": [
        "Perkhidmatan itu sendiri tidak menggunakan kuki untuk mengenal pasti atau menjejak pengguna. Maklumat yang dimasukkan untuk pengiraan keserasian tidak disampaikan kepada pengiklan.",
        "Perkhidmatan ini menyiarkan iklan melalui Google AdSense. Dalam proses ini, perkara berikut berlaku."
      ],
      "bullets": [
        "Penyedia pihak ketiga termasuk Google boleh menyimpan atau membaca kuki dalam pelayar pengguna.",
        "Google menggunakan kuki berdasarkan rekod lawatan ke laman ini dan laman lain untuk menyiarkan iklan.",
        "Pengguna boleh mematikan iklan tersuai di tetapan iklan Google (google.com/settings/ads). Walaupun dimatikan, iklan itu masih akan dipaparkan, tetapi relevansinya dengan pengguna akan berkurangan.",
        "Iklan tersuai dari semua penyedia pihak ketiga boleh dimatikan sekaligus di aboutads.info/choices.",
        "Terdapat juga cara untuk menyekat kuki dalam tetapan pelayar.",
        "Pengguna di Kawasan Ekonomi Eropah, UK, dan Switzerland akan diminta untuk memberikan persetujuan terlebih dahulu untuk penggunaan kuki iklan."
      ]
    },
    {
      "heading": "5. Maklumat yang disimpan semasa pembayaran",
      "paragraphs": [
        "Pada masa ini, tiada produk berbayar yang dijual, jadi tiada maklumat yang disimpan berkaitan dengan pembayaran.",
        "Apabila penjualan bermula, maklumat berikut akan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang. **Pada masa itu, nilai yang dimasukkan untuk pengiraan keserasian dan PDF yang dihasilkan tidak akan disimpan,** dan maklumat yang mengenal pasti pengguna seperti nama, maklumat hubungan, dan alamat juga tidak akan diterima."
      ],
      "bullets": [
        "Nombor pesanan dan pengenalan pembayaran",
        "Jumlah pembayaran, mata wang, dan status pembayaran (belum dibayar, dibayar, dibatalkan)",
        "Jenis produk, status pemprosesan, bilangan muat turun dokumen, waktu pesanan",
        "Bahasa skrin pada waktu pesanan dan pengenalan kawasan pembayaran (dalam negara, luar negara)",
        "Tempoh penyimpanan — Rekod berkaitan pembayaran dan penyampaian barang akan disimpan selama 5 tahun dan rekod berkaitan aduan atau penyelesaian pertikaian akan disimpan selama 3 tahun sebelum dimusnahkan, mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Perdagangan Elektronik."
      ]
    },
    {
      "heading": "6. Penyediaan kepada pihak ketiga dan pemindahan pemprosesan",
      "paragraphs": [
        "Tiada maklumat peribadi yang disimpan, jadi tiada maklumat peribadi yang diberikan kepada pihak ketiga.",
        "Perkhidmatan ini menggunakan infrastruktur hosting {hostingProvider}, dan dalam proses ini, rekod akses di atas diproses mengikut dasar penyedia tersebut.",
        "Apabila penjualan produk berbayar bermula, pembayaran domestik akan diserahkan kepada Toss Payments, dan pembayaran luar negara akan diserahkan kepada PortOne (PayPal). Maklumat cara pembayaran seperti nombor kad dan nombor akaun akan diproses secara langsung oleh penyedia tersebut, dan perkhidmatan tidak akan menerima maklumat tersebut."
      ]
    },
    {
      "heading": "7. Hak pengguna",
      "paragraphs": [
        "Tiada maklumat peribadi yang disimpan, jadi tiada pihak yang boleh diminta untuk melihat, membetulkan, atau memadam.",
        "Pengguna boleh menghapus semua jejak input hanya dengan menghapus pautan keputusan dalam bar alamat pelayar.",
        "Jika terdapat sebarang pertanyaan berkaitan penggunaan perkhidmatan, sila maklumkan kepada kami melalui maklumat hubungan di bawah."
      ]
    },
    {
      "heading": "8. Maklumat peribadi kanak-kanak",
      "paragraphs": [
        "Perkhidmatan ini tidak ditujukan kepada kanak-kanak di bawah umur 14 tahun dan tidak mengumpul maklumat peribadi daripada kanak-kanak."
      ]
    },
    {
      "heading": "9. Pegawai Perlindungan Data Peribadi",
      "paragraphs": [
        "Pegawai perlindungan: {privacyOfficer}",
        "Pertanyaan: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Perubahan dasar",
      "paragraphs": [
        "Jika dasar ini diubah, tarikh berkuat kuasa dan butiran perubahan akan diterbitkan di halaman ini. Jika terdapat perubahan yang nyata dalam pemprosesan seperti penerbitan iklan atau permulaan penjualan produk berbayar, kami akan memaklumkan terlebih dahulu tentang perubahan tersebut."
      ]
    }
  ],
  "effectiveLabel": "Tarikh Berkuat Kuasa"
};

const d5 = {
  "title": "Dasar Pemprosesan Data Peribadi",
  "intro": "InyeonLink tidak menyimpan maklumat yang diperlukan untuk pengiraan keserasian. Dasar ini menerangkan apa yang diterima oleh perkhidmatan, apa yang tidak disimpan, dan apa yang direkod secara automatik.",
  "sections": [
    {
      "heading": "1. Maklumat yang tidak disimpan",
      "paragraphs": [
        "Tarikh lahir, waktu kelahiran, tempat lahir, jantina, dan nama yang digunakan untuk pengiraan keserasian **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memori pelayan semasa memproses permintaan dan hilang bersama dengan respons.",
        "Ia tidak direkod dalam pangkalan data dan tidak disimpan dalam fail berasingan. Tiada pendaftaran keahlian, jadi nilai yang dimasukkan tidak dikaitkan dengan individu tertentu."
      ]
    },
    {
      "heading": "2. Maklumat yang terkandung dalam pautan keputusan",
      "paragraphs": [
        "Alamat skrin keputusan mengandungi nilai yang dimasukkan dalam bentuk yang disulitkan. Namun, nilai ini terletak selepas # dalam alamat, dan mengikut piawaian web, kandungan selepas # tidak dihantar oleh pelayar ke pelayan. Oleh itu, walaupun pautan keputusan dibuka, hanya laluan alamat yang akan kekal dalam rekod akses pelayan.",
        "Jika pautan keputusan dihantar kepada orang lain, orang itu juga dapat melihat keputusan yang sama. Pautan itu sendiri mengandungi nilai yang dimasukkan, jadi keputusan untuk berkongsi adalah di tangan pengguna."
      ]
    },
    {
      "heading": "3. Maklumat yang dikumpul secara automatik",
      "paragraphs": [
        "Tiada maklumat yang dikumpul untuk mengenal pasti pengguna. Namun, rekod minimum yang diperlukan untuk operasi perkhidmatan disimpan secara automatik oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, waktu akses, jenis pelayar dan rekod akses pelayan umum yang lain",
        "Maklumat negara — hanya digunakan untuk menentukan bahasa skrin secara automatik dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Kuki dan iklan",
      "paragraphs": [
        "Perkhidmatan itu sendiri tidak menggunakan kuki untuk menjejak pengguna.",
        "Pada masa ini, tiada iklan yang dipaparkan dalam perkhidmatan ini. Jika iklan mula dipaparkan pada masa hadapan, penyedia iklan (contohnya, Google) mungkin menggunakan kuki untuk tujuan paparan iklan. Dalam kes itu, klausa ini akan diubah terlebih dahulu untuk menjelaskan apa yang berubah sebelum ia bermula."
      ]
    },
    {
      "heading": "5. Maklumat yang disimpan semasa pembayaran",
      "paragraphs": [
        "Apabila membayar produk berbayar (laporan PDF), maklumat pesanan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang.",
        "**Nilai yang dimasukkan untuk pengiraan keserasian dan PDF yang dihasilkan tidak disimpan walaupun selepas pembayaran.** Prinsip dalam perkara 1 tetap sama tanpa mengira sama ada pembayaran dibuat atau tidak. Item yang disimpan adalah seperti berikut dan tidak termasuk maklumat yang mengenal pasti pengguna seperti nama, maklumat hubungan, dan alamat."
      ],
      "bullets": [
        "Nombor pesanan dan pengenalan pembayaran",
        "Jumlah pembayaran, mata wang dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Jenis produk, status pemprosesan, bilangan muat turun dokumen, waktu pesanan",
        "Bahasa skrin pada waktu pesanan dan pengenalan kawasan pembayaran (domestik, luar negara)",
        "Tempoh penyimpanan — Rekod berkaitan pembayaran dan pembekalan barang akan disimpan selama 5 tahun mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Perdagangan Elektronik, dan rekod berkaitan aduan atau pertikaian pengguna akan disimpan selama 3 tahun sebelum dimusnahkan."
      ]
    },
    {
      "heading": "6. Pemberian dan pemprosesan oleh pihak ketiga",
      "paragraphs": [
        "Tiada maklumat peribadi yang mengenal pasti pengguna disimpan, jadi tiada maklumat peribadi yang diberikan kepada pihak ketiga. Pemprosesan pembayaran diserahkan kepada penyedia di bawah.",
        "Perkhidmatan ini menggunakan infrastruktur hosting {hostingProvider}, dan dalam proses ini, rekod akses dalam perkara 3 diproses mengikut dasar penyedia tersebut.",
        "Pembayaran domestik diproses oleh Toss Payments, manakala pembayaran luar negara diproses melalui PayPal oleh PortOne. Maklumat kaedah pembayaran seperti nombor kad dan nombor akaun diproses secara langsung oleh penyedia ini, dan perkhidmatan tidak menerima atau menyimpannya."
      ]
    },
    {
      "heading": "7. Hak pengguna",
      "paragraphs": [
        "Nilai yang dimasukkan untuk pengiraan keserasian tidak disimpan, jadi tiada pihak yang boleh diminta untuk melihat, membetulkan, atau memadam. Rekod pesanan yang tinggal selepas pembayaran mempunyai kewajipan untuk disimpan selama tempoh yang ditetapkan oleh undang-undang, dan tidak dapat dipadamkan dalam tempoh tersebut, tetapi akan dimusnahkan selepas tempoh itu.",
        "Pengguna boleh menghapus semua jejak input hanya dengan menghapus pautan keputusan dalam bar alamat pelayar.",
        "Jika ada pertanyaan berkaitan penggunaan perkhidmatan, sila maklumkan kepada kami melalui maklumat hubungan di bawah."
      ]
    },
    {
      "heading": "8. Maklumat peribadi kanak-kanak",
      "paragraphs": [
        "Perkhidmatan ini tidak ditujukan kepada kanak-kanak di bawah umur 14 tahun dan tidak mengumpul maklumat peribadi daripada kanak-kanak."
      ]
    },
    {
      "heading": "9. Pegawai perlindungan data peribadi",
      "paragraphs": [
        "Pegawai perlindungan: {privacyOfficer}",
        "Pertanyaan: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Perubahan dasar",
      "paragraphs": [
        "Jika dasar ini diubah, tarikh berkuat kuasa dan butiran perubahan akan diterbitkan di halaman ini. Jika terdapat perubahan yang nyata dalam pemprosesan seperti pengiklanan atau penjualan produk berbayar, kami akan memaklumkan terlebih dahulu tentang perubahan tersebut."
      ]
    }
  ],
  "effectiveLabel": "Tarikh berkuat kuasa"
};

const d6 = {
  "title": "Terma Penggunaan",
  "intro": "Terma ini menetapkan syarat penggunaan perkhidmatan InyeonLink (selanjutnya disebut sebagai \"perkhidmatan\"). Dengan menggunakan perkhidmatan ini, anda dianggap telah bersetuju dengan terma ini.",
  "effectiveLabel": "Tarikh Berkuatkuasa",
  "sections": [
    {
      "heading": "1. Sifat Perkhidmatan",
      "paragraphs": [
        "Perkhidmatan ini menunjukkan maklumat rujukan tentang hubungan antara dua individu berdasarkan tarikh lahir yang dimasukkan, dengan menerapkan peraturan hubungan tradisional saju (사주) dan zodiak Korea.",
        "Kadar pemadanan dan penjelasan yang diberikan adalah **maklumat rujukan dari perspektif tafsiran tradisional, dan bukan ramalan saintifik atau kepastian mengenai hubungan.** Skor yang rendah tidak bermakna hubungan itu buruk, dan skor yang tinggi tidak menjamin hubungan yang baik."
      ]
    },
    {
      "heading": "2. Yuran Penggunaan",
      "paragraphs": [
        "Pengiraan keserasian dan penyemakan keputusan adalah percuma dan tidak memerlukan pendaftaran ahli.",
        "Menerima keputusan dalam bentuk laporan PDF adalah berbayar. Harga dan syarat akan dipaparkan di bawah klausa 3 dan pada skrin pembayaran."
      ]
    },
    {
      "heading": "3. Produk Berbayar dan Pengembalian Wang",
      "paragraphs": [
        "Produk berbayar yang dijual adalah **laporan kesesuaian PDF** sebanyak dua jenis. Kedua-duanya menghasilkan dokumen dari hasil di skrin, dan juga mengandungi maklumat yang tidak terdapat di skrin.",
        "**Laporan Kesesuaian Saju PDF** — 7 halaman. Mengandungi arah aliran dua tenaga, jadual yang lebih mendalam mengenai saju (사주) masing-masing, tempat di mana empat tiang bertemu, serta asas pengiraan. Pembayaran domestik {priceDomestic} (termasuk VAT), pembayaran luar negara {priceGlobal}.",
        "**Laporan Ikatan PDF** — 4 halaman. Mengandungi senarai keseluruhan sepuluh elemen langit dan dua belas zodiak yang tidak terdapat di skrin. Pembayaran domestik {priceAffinityDomestic} (termasuk VAT), pembayaran luar negara {priceAffinityGlobal}.",
        "Pembayaran domestik boleh dilakukan melalui Toss Payments menggunakan kad kredit/debit dan pembayaran mudah (Toss Pay, Kakao Pay, Naver Pay, Payco, dll.), manakala pembayaran luar negara melalui PayPal melalui PortOne. Jumlah akhir adalah berdasarkan jumlah yang dipaparkan di skrin pembayaran.",
        "**Perkhidmatan tidak menyimpan input pengguna atau fail PDF yang dihasilkan.** Setelah pembayaran diluluskan, dokumen akan dihasilkan dan dihantar serta tidak ada yang disimpan di pelayan. Oleh itu, fail yang dimuat turun perlu disimpan oleh pengguna secara langsung.",
        "Sekiranya muat turun terhenti atau fail hilang, anda boleh memuat turun semula **sehingga 5 kali** dengan pesanan yang sama. Namun, jika input hilang di luar skrin hasil, ia tidak dapat dibuat semula, jadi sila simpan fail sejurus selepas pembayaran."
      ],
      "bullets": [
        "**Sebelum muat turun dimulakan selepas pembayaran,** anda boleh membatalkan dan mendapatkan pengembalian penuh pada bila-bila masa.",
        "**Setelah muat turun selesai,** pembatalan atas alasan perubahan fikiran adalah terhad. Ini adalah kandungan digital yang disediakan serta-merta dan tidak dapat dipulihkan, yang termasuk dalam alasan pembatalan yang ditetapkan dalam Seksyen 17(2) Akta Perlindungan Pengguna dalam Transaksi Elektronik.",
        "**Jika dokumen tidak dihasilkan akibat ralat sistem, fail tidak dapat dibuka, atau jumlah pembayaran berbeza daripada pesanan,** ia akan diproses untuk pengeluaran semula atau pengembalian penuh.",
        "**Ketidakpuasan terhadap kandungan hasil** tidak dianggap sebagai alasan untuk pengembalian wang. Hasil kesesuaian adalah bahan rujukan dari perspektif tafsiran tradisional dan sifatnya telah dinyatakan sebelum pembayaran (lihat perenggan 1 di atas).",
        "Permintaan semula selepas menggunakan semua 5 kali pengeluaran semula tidak dianggap sebagai alasan untuk pengembalian wang.",
        "**Jika seorang remaja membuat pembayaran tanpa persetujuan wakil sah,** mereka atau wakil sah boleh membatalkan pembayaran tersebut. Sila maklumkan kepada kami melalui maklumat hubungan di bawah untuk mendapatkan pengembalian wang."
      ]
    },
    {
      "heading": "4. Mengenai Hasil Pengiraan",
      "paragraphs": [
        "Semua skor dikira mengikut peraturan yang telah ditetapkan, jadi jika nilai yang sama dimasukkan, hasil yang sama akan sentiasa diperoleh.",
        "Jika waktu kelahiran tidak dimasukkan, pengiraan akan dilakukan tanpa mengambil kira si ju (時柱), jadi hasilnya mungkin berbeza. Semakin tepat lokasi kelahiran dipilih, semakin tepat pengiraan si ju akan menjadi.",
        "Pengiraan manse (万岁历) menggunakan perpustakaan pengiraan yang terbuka, dan hasilnya mungkin berbeza dengan manse lain bergantung kepada cara pemprosesan solar term dan zon waktu."
      ]
    },
    {
      "heading": "5. Tanggungjawab Pengguna",
      "paragraphs": [
        "Pengguna boleh memasukkan tarikh lahir orang lain, tetapi tidak boleh menggunakan hasil tersebut untuk merugikan orang lain.",
        "Jangan gunakan hasil perkhidmatan sebagai asas untuk membuat keputusan yang mempengaruhi hak orang lain dalam perkahwinan, perceraian, pengambilan pekerja, transaksi, dan sebagainya. Perkhidmatan ini tidak dibuat untuk tujuan tersebut."
      ]
    },
    {
      "heading": "6. Tindakan Dilarang",
      "paragraphs": [
        "Tindakan berikut adalah tidak dibenarkan."
      ],
      "bullets": [
        "Menghantar permintaan berlebihan menggunakan alat automasi yang mengganggu operasi perkhidmatan",
        "Menyajikan hasil perkhidmatan seolah-olah ia adalah fakta atau hasil penilaian pakar",
        "Menggandakan atau mengubah suai perkhidmatan untuk menyediakan perkhidmatan yang sama"
      ]
    },
    {
      "heading": "7. Pengecualian Tanggungjawab",
      "paragraphs": [
        "Perkhidmatan ini hanya menyediakan bahan rujukan, dan kami tidak bertanggungjawab terhadap sebarang keputusan yang dibuat oleh pengguna berdasarkan hasil tersebut dan akibatnya.",
        "Kami tidak bertanggungjawab terhadap sebarang kerugian yang timbul akibat gangguan perkhidmatan disebabkan oleh sebab-sebab yang tidak dapat dikawal seperti bencana alam, gangguan penyedia infrastruktur, dan lain-lain."
      ]
    },
    {
      "heading": "8. Hak Harta Intelek",
      "paragraphs": [
        "Hak terhadap tampilan, teks, dan implementasi aturan perhitungan dari layanan adalah milik penyelenggara. Pengguna dapat menyimpan atau membagikan hasil untuk tujuan pribadi."
      ]
    },
    {
      "heading": "9. Perubahan Terma dan Undang-Undang yang Digunakan",
      "paragraphs": [
        "Sekiranya terma diubah, ia akan diterbitkan di halaman ini bersama dengan tarikh berkuat kuasa.",
        "Terma ini tertakluk kepada undang-undang Republik Korea, dan sebarang pertikaian yang berkaitan dengan penggunaan perkhidmatan akan mengikuti prosedur yang ditetapkan oleh undang-undang yang berkenaan."
      ]
    }
  ]
};

const d7 = {
  "title": "Dasar Pemprosesan Data Peribadi",
  "intro": "InyeonLink tidak menyimpan maklumat yang diperlukan untuk pengiraan keserasian. Dasar ini menerangkan apa yang diterima oleh perkhidmatan, apa yang tidak disimpan, dan apa yang direkod secara automatik.",
  "sections": [
    {
      "heading": "1. Maklumat yang Tidak Disimpan",
      "paragraphs": [
        "Tarikh lahir, waktu kelahiran, tempat kelahiran, jantina, dan nama yang digunakan untuk pengiraan keserasian **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memori pelayan semasa memproses permintaan dan hilang bersama dengan respons.",
        "Ia tidak direkod dalam pangkalan data dan tidak disimpan dalam fail berasingan. Tiada pendaftaran ahli, jadi nilai yang dimasukkan tidak dikaitkan dengan individu tertentu."
      ]
    },
    {
      "heading": "2. Maklumat yang Termasuk dalam Pautan Hasil",
      "paragraphs": [
        "Alamat skrin hasil mengandungi nilai yang dimasukkan dalam bentuk yang disulitkan. Namun, nilai ini terletak selepas # dalam alamat, dan mengikut standard web, kandungan selepas # tidak dihantar oleh pelayar ke pelayan. Oleh itu, walaupun pautan hasil dibuka, hanya laluan alamat yang akan kekal dalam rekod akses pelayan.",
        "Jika pautan hasil dihantar kepada orang lain, orang itu juga dapat melihat hasil yang sama. Pautan itu sendiri mengandungi nilai yang dimasukkan, jadi keputusan untuk berkongsi adalah di tangan pengguna."
      ]
    },
    {
      "heading": "3. Maklumat yang Dikumpul Secara Automatik",
      "paragraphs": [
        "Tiada maklumat yang dikumpul untuk mengenal pasti pengguna. Namun, rekod minimum yang diperlukan untuk operasi perkhidmatan disimpan secara automatik oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, waktu akses, jenis pelayar dan rekod akses pelayan umum yang lain",
        "Maklumat negara — hanya digunakan untuk menentukan bahasa skrin secara automatik dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Kuki dan Iklan",
      "paragraphs": [
        "Perkhidmatan itu sendiri tidak menggunakan kuki untuk mengenal pasti atau mengesan pengguna. Maklumat yang dimasukkan untuk pengiraan keserasian tidak disampaikan kepada pengiklan.",
        "Perkhidmatan ini menyiarkan iklan melalui Google AdSense. Dalam proses ini, perkara berikut berlaku."
      ],
      "bullets": [
        "Penyedia pihak ketiga termasuk Google boleh menyimpan atau membaca kuki di pelayar pengguna.",
        "Google menggunakan kuki berdasarkan rekod lawatan ke laman ini dan laman lain untuk menyiarkan iklan.",
        "Pengguna boleh mematikan iklan tersuai di tetapan iklan Google (google.com/settings/ads). Walaupun dimatikan, iklan itu masih akan ditunjukkan, tetapi relevansinya dengan pengguna akan berkurang.",
        "Iklan tersuai dari semua penyedia pihak ketiga boleh dimatikan secara serentak di aboutads.info/choices.",
        "Terdapat juga cara untuk menyekat kuki dalam tetapan pelayar.",
        "Pengguna di Kawasan Ekonomi Eropah, UK, dan Switzerland akan diminta untuk memberikan persetujuan terlebih dahulu untuk penggunaan kuki iklan."
      ]
    },
    {
      "heading": "5. Maklumat yang Disimpan Semasa Pembayaran",
      "paragraphs": [
        "Apabila membayar produk berbayar (laporan PDF), maklumat pesanan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang.",
        "**Nilai yang dimasukkan untuk pengiraan keserasian dan PDF yang dihasilkan tidak disimpan walaupun selepas pembayaran.** Prinsip dalam perkara 1 tetap sama tanpa mengira sama ada pembayaran dibuat atau tidak. Item yang disimpan adalah seperti berikut dan tidak termasuk maklumat yang mengenal pasti pengguna seperti nama, maklumat hubungan, dan alamat."
      ],
      "bullets": [
        "Nombor pesanan dan pengenalan pembayaran",
        "Jumlah pembayaran, mata wang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Jenis produk, status pemprosesan, bilangan muat turun dokumen, waktu pesanan",
        "Bahasa skrin pada waktu pesanan dan pengenalan kawasan pembayaran (domestik, luar negara)",
        "Tempoh penyimpanan — Rekod berkaitan pembayaran dan penyampaian barang akan disimpan selama 5 tahun mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Perdagangan Elektronik, dan rekod berkaitan aduan atau penyelesaian pertikaian akan disimpan selama 3 tahun sebelum dimusnahkan."
      ]
    },
    {
      "heading": "6. Penyampaian kepada Pihak Ketiga dan Pemprosesan yang Dihantar",
      "paragraphs": [
        "Tiada maklumat peribadi yang mengenal pasti pengguna disimpan, jadi tiada maklumat peribadi yang disampaikan kepada pihak ketiga. Pemprosesan pembayaran diamanahkan kepada penyedia berikut.",
        "Perkhidmatan ini menggunakan infrastruktur hosting daripada {hostingProvider}, dan dalam proses ini, rekod akses dalam perkara 3 diproses mengikut dasar penyedia tersebut.",
        "Pembayaran domestik diproses oleh Toss Payments, manakala pembayaran luar negara diproses melalui PayPal oleh PortOne. Maklumat kaedah pembayaran seperti nombor kad dan nombor akaun diproses secara langsung oleh penyedia ini, dan perkhidmatan tidak menerima atau menyimpan maklumat tersebut."
      ]
    },
    {
      "heading": "7. Hak Pengguna",
      "paragraphs": [
        "Oleh kerana nilai yang dimasukkan untuk pengiraan keserasian tidak disimpan, tiada pihak yang boleh diminta untuk melihat, membetulkan, atau memadam. Rekod pesanan yang tinggal selepas pembayaran mempunyai kewajipan untuk disimpan selama tempoh yang ditetapkan oleh undang-undang, dan tidak boleh dipadamkan dalam tempoh tersebut, tetapi akan dimusnahkan selepas tempoh itu.",
        "Pengguna boleh menghapus semua jejak input hanya dengan menghapus pautan hasil dalam bar alamat pelayar.",
        "Jika ada pertanyaan berkaitan penggunaan perkhidmatan, sila maklumkan kepada kami melalui maklumat hubungan di bawah."
      ]
    },
    {
      "heading": "8. Data Peribadi Kanak-Kanak",
      "paragraphs": [
        "Perkhidmatan ini tidak ditujukan kepada kanak-kanak di bawah umur 14 tahun dan tidak mengumpul data peribadi daripada kanak-kanak."
      ]
    },
    {
      "heading": "9. Pegawai Perlindungan Data Peribadi",
      "paragraphs": [
        "Pegawai Perlindungan: {privacyOfficer}",
        "Pertanyaan: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Perubahan Dasar",
      "paragraphs": [
        "Sekiranya dasar ini diubah, tarikh berkuat kuasa dan butiran perubahan akan diterbitkan di halaman ini. Jika terdapat perubahan yang benar-benar mengubah proses seperti memulakan penyiapan iklan atau penjualan produk berbayar, kami akan memaklumkan terlebih dahulu tentang perubahan tersebut."
      ]
    }
  ],
  "effectiveLabel": "Tarikh Berkuat Kuasa"
};

export const ms: LegalLocaleDocuments = {
  a0p0: {
    privacy: d0,
    terms: d1,
    refund: d2,
    pricing: d3,
  },
  a1p0: {
    privacy: d4,
    terms: d1,
    refund: d2,
    pricing: d3,
  },
  a0p1: {
    privacy: d5,
    terms: d6,
    refund: d2,
    pricing: d3,
  },
  a1p1: {
    privacy: d7,
    terms: d6,
    refund: d2,
    pricing: d3,
  },
};
