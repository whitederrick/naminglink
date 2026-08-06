import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Dasar Pemprosesan Data Peribadi",
  "intro": "Dreams-Link tidak menyimpan maklumat yang diperlukan untuk tafsiran mimpi. Dasar ini menerangkan apa yang diterima oleh perkhidmatan, apa yang tidak disimpan, dan apa yang direkod secara automatik.",
  "sections": [
    {
      "heading": "1. Maklumat yang tidak disimpan",
      "paragraphs": [
        "Cerita mimpi yang anda tulis untuk tafsiran, perasaan ketika bangun, dan sama ada anda mengalami mimpi yang sama berulang kali **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memori pelayan semasa memproses permintaan dan hilang bersama dengan respons.",
        "Tiada rekod dalam pangkalan data, dan tiada fail berasingan yang disimpan. Tiada pendaftaran ahli, jadi input tidak dihubungkan dengan individu tertentu.",
        "Cerita mimpi adalah nilai paling peribadi yang diterima oleh perkhidmatan ini. Oleh itu, tiada fungsi untuk melihat semula hasil lalu (diari mimpi) kerana fungsi itu memerlukan penyimpanan tulisan yang diberikan."
      ]
    },
    {
      "heading": "2. Maklumat yang terkandung dalam pautan hasil",
      "paragraphs": [
        "Alamat skrin hasil mengandungi nilai input yang disulitkan. Namun, nilai ini terletak selepas # dalam alamat, dan mengikut standard web, kandungan selepas # tidak dihantar oleh pelayar ke pelayan. Oleh itu, walaupun pautan hasil dibuka, hanya laluan alamat yang akan kekal dalam rekod akses pelayan.",
        "Jika pautan hasil dihantar kepada orang lain, orang itu juga boleh melihat hasil yang sama. Pautan itu sendiri mengandungi nilai input, jadi keputusan untuk berkongsi adalah di tangan pengguna."
      ]
    },
    {
      "heading": "3. Maklumat yang dikumpul secara automatik",
      "paragraphs": [
        "Tiada maklumat yang dikumpul untuk mengenal pasti pengguna. Namun, rekod minimum yang diperlukan untuk operasi perkhidmatan disimpan secara automatik oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, tarikh dan masa akses, jenis pelayar dan rekod akses pelayan umum yang lain",
        "Maklumat negara — hanya digunakan untuk menentukan bahasa skrin secara automatik dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Kuki dan iklan",
      "paragraphs": [
        "Perkhidmatan itu sendiri tidak menggunakan kuki untuk menjejak pengguna.",
        "Pada masa ini, tiada iklan yang dipaparkan dalam perkhidmatan ini. Jika iklan dipaparkan pada masa hadapan, penyedia iklan (contohnya, Google) mungkin menggunakan kuki untuk tujuan pengiklanan. Dalam kes itu, klausa ini akan diubah terlebih dahulu untuk menjelaskan apa yang berubah sebelum ia bermula."
      ]
    },
    {
      "heading": "5. Maklumat yang disimpan semasa pembayaran",
      "paragraphs": [
        "Pada masa ini, tiada produk berbayar yang dijual, jadi tiada maklumat yang disimpan berkaitan dengan pembayaran.",
        "Apabila jualan bermula, maklumat berikut akan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang. **Pada masa itu, mimpi yang anda tulis dan fail yang dihasilkan tidak akan disimpan,** dan maklumat yang mengenal pasti pengguna seperti nama, nombor telefon, dan alamat juga tidak akan diterima."
      ],
      "bullets": [
        "Nombor pesanan dan pengenalan pembayaran",
        "Jumlah pembayaran, mata wang dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Jenis produk, status pemprosesan, bilangan muat turun dokumen, masa pesanan",
        "Bahasa skrin pada masa pesanan dan pengenalan kawasan pembayaran (domestik, luar negara)",
        "Tempoh penyimpanan — Rekod pembayaran dan pembekalan barang akan disimpan selama 5 tahun dan rekod aduan atau penyelesaian pertikaian pengguna akan disimpan selama 3 tahun sebelum dimusnahkan mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Perdagangan Elektronik."
      ]
    },
    {
      "heading": "6. Pemberian dan pemindahan kepada pihak ketiga",
      "paragraphs": [
        "Tiada maklumat peribadi yang disimpan, jadi tiada maklumat peribadi yang diberikan kepada pihak ketiga.",
        "Perkhidmatan ini menggunakan infrastruktur hosting dari {hostingProvider}, dan dalam proses ini, rekod akses di atas diproses mengikut dasar penyedia tersebut.",
        "Apabila jualan produk berbayar bermula, pembayaran domestik akan diserahkan kepada Toss Payments, dan pembayaran luar negara akan diserahkan kepada PortOne (PayPal). Maklumat kaedah pembayaran seperti nombor kad dan nombor akaun akan diproses secara langsung oleh penyedia tersebut, dan perkhidmatan tidak akan menerima maklumat tersebut."
      ]
    },
    {
      "heading": "7. Hak pengguna",
      "paragraphs": [
        "Tiada maklumat peribadi yang disimpan, jadi tiada subjek untuk meminta akses, pembetulan, atau pemadaman.",
        "Pengguna boleh menghapus semua jejak input hanya dengan menghapus pautan hasil dalam bar alamat pelayar.",
        "Jika ada pertanyaan berkaitan penggunaan perkhidmatan, sila hubungi melalui maklumat di bawah."
      ]
    },
    {
      "heading": "8. Maklumat peribadi kanak-kanak",
      "paragraphs": [
        "Perkhidmatan ini tidak menyasarkan kanak-kanak di bawah umur 14 tahun dan tidak mengumpul maklumat peribadi daripada kanak-kanak."
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
        "Jika dasar ini diubah, tarikh berkuat kuasa dan butiran perubahan akan diterbitkan di halaman ini. Jika terdapat perubahan yang nyata dalam pemprosesan seperti pengiklanan atau penjualan produk berbayar, makluman akan diberikan terlebih dahulu."
      ]
    }
  ],
  "effectiveLabel": "Tarikh berkuat kuasa"
};

const d1 = {
  "title": "Terma Penggunaan",
  "intro": "Terma ini menetapkan syarat penggunaan Dreams-Link (selepas ini dirujuk sebagai “perkhidmatan”). Dengan menggunakan perkhidmatan ini, anda dianggap telah bersetuju dengan terma ini.",
  "effectiveLabel": "Tarikh Berkuatkuasa",
  "sections": [
    {
      "heading": "1. Sifat Perkhidmatan",
      "paragraphs": [
        "Perkhidmatan ini mencari simbol tradisional dalam mimpi yang ditulis oleh pengguna dan menunjukkan makna yang disampaikan oleh simbol tersebut sebagai bahan rujukan. Kami menyatakan bahawa simbol yang tidak terdapat dalam kamus tidak dapat ditemui, dan kami tidak mencipta makna yang tidak ada.",
        "Simbol dan penjelasan yang diberikan adalah **bahan rujukan dari perspektif tafsiran tradisional, dan bukan ramalan tentang masa depan atau nasihat perubatan, kewangan, atau undang-undang.** Mimpi yang baik tidak menjamin sebarang kejadian, dan mimpi yang buruk tidak menunjukkan sebarang kejadian yang telah ditentukan.",
        "**Hasil berkaitan mimpi kehamilan (태몽) tidak menentukan sama ada seseorang itu hamil atau jantina janin.** Kami hanya memberikan maklumat tentang simbol yang secara tradisional dianggap sebagai mimpi kehamilan dan latar belakangnya."
      ]
    },
    {
      "heading": "2. Yuran Penggunaan",
      "paragraphs": [
        "Perkhidmatan ini kini disediakan secara percuma dan tidak memerlukan pendaftaran keahlian.",
        "Apabila penjualan produk berbayar (imej kad mimpi, laporan mimpi konsepsi (태몽) PDF) bermula, syarat di bawah perkara 3 akan terpakai. Terma ini akan diberitahu semula sebelum permulaan penjualan."
      ]
    },
    {
      "heading": "3. Produk Berbayar dan Pengembalian Wang",
      "paragraphs": [
        "Produk berbayar yang dijual adalah **dua jenis**. Tafsiran percuma boleh digunakan tanpa pembayaran, dan dua produk di bawah ini adalah untuk menyimpan hasilnya dalam bentuk yang boleh dikongsi.",
        "**Kad Mimpi** — Satu fail imej. Ia dihasilkan untuk menyimpan dan berkongsi simbol dan makna tradisional yang terdapat dalam mimpi yang dialami pada hari tersebut. **Bukan dokumen (PDF).** Pembayaran domestik {priceCardDomestic} (termasuk VAT), pembayaran luar negara {priceCardGlobal}.",
        "**Laporan Mimpi Konsepsi (태몽) PDF** — 4 halaman. Ia mengandungi makna tradisional simbol yang terlibat dan latar belakangnya dalam bentuk dokumen. **Tidak menentukan kehamilan** — hanya memberitahu bahawa simbol yang dianggap sebagai mimpi konsepsi secara tradisional muncul dalam mimpi. Pembayaran domestik {priceConceptionDomestic} (termasuk VAT), pembayaran luar negara {priceConceptionGlobal}.",
        "Pembayaran domestik boleh dilakukan melalui Toss Payments menggunakan kad kredit/debit dan pembayaran mudah (Toss Pay, Kakao Pay, Naver Pay, Payco, dll.), manakala pembayaran luar negara dilakukan melalui PayPal melalui PortOne. Jumlah akhir adalah berdasarkan jumlah yang ditunjukkan di skrin pembayaran.",
        "**Perkhidmatan tidak menyimpan input pengguna atau fail PDF yang dihasilkan.** Setelah pembayaran diluluskan, dokumen akan dihasilkan dan dihantar serta tidak ada yang disimpan di pelayan. Oleh itu, fail yang dimuat turun perlu disimpan oleh pengguna secara langsung.",
        "Sekiranya muat turun terhenti atau fail hilang, ia boleh dimuat turun semula **hingga 5 kali** dengan pesanan yang sama. Namun, jika input hilang setelah keluar dari skrin hasil, ia tidak dapat dibuat semula, jadi sila simpan fail segera setelah pembayaran."
      ],
      "bullets": [
        "**Sebelum muat turun dimulakan selepas pembayaran,** anda boleh membatalkan dan mendapatkan pengembalian penuh pada bila-bila masa.",
        "**Setelah muat turun selesai,** pembatalan atas alasan perubahan fikiran adalah terhad. Ini adalah kandungan digital yang disediakan serta-merta dan tidak boleh dipulihkan, yang termasuk dalam alasan pembatalan yang ditetapkan dalam Seksyen 17(2) Akta Perlindungan Pengguna dalam Transaksi Elektronik.",
        "**Jika dokumen tidak dihasilkan akibat ralat sistem, fail tidak dapat dibuka, atau jumlah pembayaran berbeza daripada pesanan,** ia akan diproses untuk pengeluaran semula atau pengembalian penuh.",
        "**Ketidakpuasan terhadap kandungan hasil** tidak dianggap sebagai alasan untuk pengembalian wang. Hasil tafsiran adalah bahan rujukan dari perspektif tafsiran tradisional dan sifatnya telah dinyatakan sebelum pembayaran (lihat perenggan 1 di atas).",
        "Permintaan semula setelah menggunakan semua 5 kali pengeluaran semula tidak dianggap sebagai alasan untuk pengembalian wang.",
        "**Jika individu yang belum dewasa membuat pembayaran tanpa persetujuan wakil sah,** individu tersebut atau wakil sahnya boleh membatalkan pembayaran tersebut. Sila maklumkan kepada kami melalui maklumat hubungan di bawah untuk mendapatkan pengembalian wang."
      ]
    },
    {
      "heading": "4. Hasil Pembacaan Mimpi",
      "paragraphs": [
        "Peraturan untuk mencari simbol mengikuti kamus yang diterbitkan dan prosedur yang ditetapkan, oleh itu, jika anda menulis teks yang sama, simbol yang sama akan muncul setiap kali.",
        "Semakin pendek anda menulis, semakin sedikit simbol yang akan diperoleh. Simbol yang tidak terdapat dalam kamus tidak dapat dicari, dan dalam kes tersebut, hasilnya akan dibiarkan kosong.",
        "Kamus simbol adalah pengumpulan dari literatur pembacaan mimpi yang diwariskan dan tradisi lisan, dan terdapat pelbagai tafsiran yang berbeza mengikut kawasan dan zaman."
      ]
    },
    {
      "heading": "5. Tanggungjawab Pengguna",
      "paragraphs": [
        "Pengguna boleh menulis tentang mimpi orang lain, tetapi tidak boleh menggunakan hasil tersebut untuk merugikan orang lain.",
        "Jangan gunakan hasil perkhidmatan sebagai asas untuk membuat keputusan yang mempengaruhi hak atau kepentingan seseorang dalam hal kehamilan, kesihatan, pelaburan, pengambilan pekerja, dan sebagainya. Perkhidmatan ini tidak dibuat untuk tujuan tersebut."
      ]
    },
    {
      "heading": "6. Perbuatan Dilarang",
      "paragraphs": [
        "Perbuatan berikut tidak dibenarkan."
      ],
      "bullets": [
        "Menghantar permintaan berlebihan menggunakan alat automasi yang mengganggu operasi perkhidmatan",
        "Menyajikan hasil perkhidmatan seolah-olah ia adalah fakta atau hasil penilaian pakar",
        "Menggandakan atau mengubahsuai perkhidmatan untuk menyediakan perkhidmatan yang sama"
      ]
    },
    {
      "heading": "7. Penafian",
      "paragraphs": [
        "Perkhidmatan ini hanya menyediakan bahan rujukan, dan tidak bertanggungjawab terhadap sebarang keputusan yang dibuat oleh pengguna berdasarkan hasil tersebut dan akibatnya.",
        "Kami tidak bertanggungjawab terhadap sebarang kerugian yang timbul akibat gangguan perkhidmatan disebabkan oleh sebab-sebab di luar kawalan kami, seperti bencana alam atau gangguan daripada penyedia infrastruktur."
      ]
    },
    {
      "heading": "8. Hak Harta Intelek",
      "paragraphs": [
        "Hak terhadap tampilan, teks, dan implementasi aturan perhitungan layanan adalah milik penyelenggara. Pengguna dapat menyimpan atau membagikan hasil untuk tujuan pribadi."
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
  "intro": "Ini adalah kriteria untuk pembatalan dan pengembalian wang bagi produk berbayar. Kami telah mengumpulkan isi yang sama seperti dalam klausa 3.",
  "sections": [
    {
      "heading": "1. Sifat Produk",
      "paragraphs": [
        "Produk yang dijual adalah **kad mimpi (dream card)** (satu imej) dan **laporan mimpi konsepsi (태몽 리포트)** (PDF), dan kedua-duanya adalah kandungan digital yang dibuat dan dihantar secara serta-merta setelah pembayaran diluluskan.",
        "**Perkhidmatan tidak menyimpan mimpi yang anda tulis atau fail yang dihasilkan.** Oleh itu, fail yang dimuat turun perlu disimpan oleh pengguna sendiri."
      ]
    },
    {
      "heading": "2. Pembatalan Pesanan",
      "paragraphs": [
        "Ia mengikuti kriteria yang ditetapkan oleh undang-undang perdagangan elektronik."
      ],
      "bullets": [
        "**Sebelum muat turun bermula,** anda boleh membatalkan dan mendapatkan pengembalian wang penuh pada bila-bila masa.",
        "**Setelah muat turun selesai,** pembatalan pesanan atas sebab perubahan fikiran adalah terhad. Ini adalah kandungan digital yang disediakan sebaik sahaja pembayaran dibuat dan tidak boleh dipulihkan, yang termasuk dalam sebab-sebab terhad yang ditetapkan dalam Seksyen 17(2) Akta Perlindungan Pengguna dalam Perdagangan Elektronik. Kami memberitahu dan mendapatkan persetujuan mengenai perkara ini di skrin pembayaran."
      ]
    },
    {
      "heading": "3. Kes Pengembalian Wang Penuh",
      "paragraphs": [
        "Dalam kes berikut, kami akan memproses pengembalian wang penuh atau pengeluaran semula setelah mengesahkan sebabnya."
      ],
      "bullets": [
        "Jika fail tidak dapat dihasilkan akibat ralat sistem",
        "Jika fail yang dimuat turun tidak dapat dibuka",
        "Jika jumlah pembayaran berbeza daripada pesanan",
        "**Jika pembelian dibuat oleh individu di bawah umur tanpa persetujuan wakil sah** — Individu tersebut atau wakil sahnya boleh meminta pembatalan."
      ]
    },
    {
      "heading": "4. Kes yang Tidak Layak untuk Pengembalian Wang",
      "paragraphs": [],
      "bullets": [
        "**Ketidakpuasan terhadap hasil.** Hasil tafsiran adalah bahan rujukan dari perspektif tafsiran tradisional dan sifatnya telah dimaklumkan sebelum pembayaran. Ini juga termasuk kes di mana simbol yang ada dalam mimpi tidak dapat ditemui, menyebabkan hasilnya menjadi pendek — kerana kami tidak mencipta makna yang tidak ada.",
        "Permintaan semula setelah menggunakan semua 5 kali pengeluaran semula."
      ]
    },
    {
      "heading": "5. Cara Memohon",
      "paragraphs": [
        "Sila hantar permohonan untuk pengembalian wang atau pertanyaan ke pusat pelanggan ({customerCenter}) atau melalui e-mel ({email}). Memberitahu nombor pesanan bersama akan mempercepatkan pengesahan.",
        "Pengembalian wang akan dikembalikan melalui kaedah pembayaran yang digunakan, dan bergantung kepada syarikat kad/pembayaran, ia mungkin mengambil masa 3 hingga 7 hari bekerja untuk diproses."
      ]
    }
  ],
  "effectiveLabel": "Tarikh Berkuatkuasa"
};

const d3 = {
  "title": "Panduan Harga",
  "intro": "Kami memberikan informasi tentang ruang lingkup layanan gratis dan harga produk berbayar.",
  "sections": [
    {
      "heading": "1. Gratis",
      "paragraphs": [
        "**Pencarian dan pemeriksaan hasil tafsir mimpi adalah gratis.** Tidak perlu mendaftar sebagai anggota.",
        "Anda dapat melihat simbol yang ditemukan dalam mimpi dan makna yang disampaikan oleh simbol tersebut, serta apa yang ditunjukkan oleh simbol-simbol tersebut di layar. Karena mimpi terjadi setiap hari, layanan ini tidak membatasi pencarian."
      ]
    },
    {
      "heading": "2. Kartu Mimpi (berbayar)",
      "paragraphs": [
        "Pembayaran domestik {priceCardDomestic} (termasuk pajak) · Pembayaran internasional {priceCardGlobal}",
        "Kami akan menyajikan hasil di layar dalam bentuk **satu gambar**. Ini adalah bentuk yang baik untuk disimpan atau dikirim, dan **bukan dokumen PDF.**",
        "Anda dapat mengunduh kembali hingga **5 kali** dengan pesanan yang sama. Namun, jika Anda keluar dari layar hasil dan nilai input hilang, Anda tidak dapat membuatnya lagi, jadi harap simpan file segera setelah pembayaran."
      ]
    },
    {
      "heading": "3. Laporan Mimpi Konsepsi PDF (berbayar)",
      "paragraphs": [
        "Pembayaran domestik {priceConceptionDomestic} (termasuk pajak) · Pembayaran internasional {priceConceptionGlobal}",
        "Ketika simbol yang dianggap sebagai mimpi konsepsi muncul, kami akan merangkum makna simbol tersebut dan latar belakang yang disampaikan dalam PDF berisi 4 halaman. **Kami tidak menentukan status kehamilan atau jenis kelamin janin.**",
        "Syarat untuk penerbitan ulang sama dengan kartu mimpi."
      ]
    },
    {
      "heading": "4. Metode Pembayaran",
      "paragraphs": [
        "**Domestik** — Anda dapat menggunakan kartu kredit/debit dan pembayaran mudah (Toss Pay, Kakao Pay, Naver Pay, Payco, dll.) melalui Toss Payments.",
        "**Internasional** — Anda dapat membayar melalui PayPal melalui PortOne.",
        "Jumlah total pembayaran mengikuti jumlah yang ditampilkan di layar pembayaran."
      ]
    },
    {
      "heading": "5. Perubahan Harga",
      "paragraphs": [
        "Jika ada perubahan harga, kami akan mempostingnya terlebih dahulu di halaman ini. Harga yang telah dibayarkan untuk pesanan yang sudah selesai tidak akan terpengaruh oleh perubahan harga."
      ]
    }
  ],
  "effectiveLabel": "Tanggal Berlaku"
};

const d4 = {
  "title": "Dasar Pemprosesan Data Peribadi",
  "intro": "Dreams-Link tidak menyimpan maklumat yang diperlukan untuk tafsiran mimpi. Dasar ini menerangkan apa yang diterima oleh perkhidmatan, apa yang tidak disimpan, dan apa yang direkod secara automatik.",
  "sections": [
    {
      "heading": "1. Maklumat yang tidak disimpan",
      "paragraphs": [
        "Cerita mimpi yang anda tulis untuk tafsiran, perasaan anda ketika bangun, dan sama ada anda mengalami mimpi yang sama berulang kali **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memori pelayan semasa memproses permintaan dan hilang bersama dengan respons.",
        "Tiada rekod dalam pangkalan data, dan tidak disimpan dalam fail berasingan. Oleh kerana tiada pendaftaran ahli, nilai input tidak dikaitkan dengan individu tertentu.",
        "Cerita mimpi adalah nilai paling peribadi yang diterima oleh perkhidmatan ini. Oleh itu, tiada fungsi untuk melihat semula hasil terdahulu (diari mimpi) kerana fungsi tersebut memerlukan penyimpanan tulisan yang anda berikan."
      ]
    },
    {
      "heading": "2. Maklumat yang terkandung dalam pautan hasil",
      "paragraphs": [
        "Alamat skrin hasil mengandungi nilai input yang disulitkan. Namun, nilai ini terletak selepas # dalam alamat, dan mengikut standard web, kandungan selepas # tidak dihantar oleh pelayar ke pelayan. Oleh itu, walaupun pautan hasil dibuka, hanya laluan alamat yang akan kekal dalam rekod akses pelayan.",
        "Jika pautan hasil dihantar kepada orang lain, orang itu juga boleh melihat hasil yang sama. Pautan itu sendiri mengandungi nilai input, jadi keputusan untuk berkongsi adalah di tangan pengguna."
      ]
    },
    {
      "heading": "3. Maklumat yang dikumpul secara automatik",
      "paragraphs": [
        "Tiada maklumat yang dikumpul untuk mengenal pasti pengguna. Namun, rekod minimum yang diperlukan untuk operasi perkhidmatan disimpan secara automatik oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, waktu akses, jenis pelayar, dan rekod akses pelayan umum lainnya",
        "Maklumat negara — hanya digunakan untuk menentukan bahasa skrin secara automatik dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Kuki dan iklan",
      "paragraphs": [
        "Perkhidmatan itu sendiri tidak menggunakan kuki untuk mengenal pasti atau menjejak pengguna. Cerita mimpi yang anda tulis tidak disampaikan kepada pengiklan.",
        "Perkhidmatan ini menyiarkan iklan melalui Google AdSense. Dalam proses ini, perkara berikut berlaku."
      ],
      "bullets": [
        "Penyedia pihak ketiga termasuk Google boleh menyimpan atau membaca kuki dalam pelayar pengguna.",
        "Google menggunakan kuki berdasarkan rekod lawatan ke laman ini dan laman lain untuk menyiarkan iklan.",
        "Pengguna boleh mematikan iklan tersuai di tetapan iklan Google (google.com/settings/ads). Walaupun dimatikan, iklan itu masih akan ditunjukkan, tetapi relevansinya dengan pengguna akan berkurang.",
        "Iklan tersuai dari semua penyedia pihak ketiga boleh dimatikan sekaligus di aboutads.info/choices.",
        "Terdapat juga cara untuk menyekat kuki dalam tetapan pelayar.",
        "Pengguna di Kawasan Ekonomi Eropah, UK, dan Switzerland akan ditanya untuk memberikan persetujuan terlebih dahulu untuk penggunaan kuki iklan."
      ]
    },
    {
      "heading": "5. Maklumat yang disimpan semasa pembayaran",
      "paragraphs": [
        "Oleh kerana tiada produk berbayar yang dijual pada masa ini, tiada maklumat yang disimpan berkaitan dengan pembayaran.",
        "Apabila penjualan bermula, maklumat berikut akan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang. **Pada masa itu, cerita mimpi yang anda berikan dan fail yang dihasilkan tidak akan disimpan,** dan maklumat yang mengenal pasti pengguna seperti nama, maklumat hubungan, dan alamat juga tidak akan diterima."
      ],
      "bullets": [
        "Nombor pesanan dan pengenalan pembayaran",
        "Jumlah pembayaran, mata wang dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Jenis produk, status pemprosesan, bilangan muat turun dokumen, waktu pesanan",
        "Bahasa skrin pada waktu pesanan dan pengenalan kawasan pembayaran (domestik, luar negara)",
        "Tempoh penyimpanan — Mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Perdagangan Elektronik, rekod pembayaran dan pembekalan barang akan disimpan selama 5 tahun, dan rekod aduan atau penyelesaian pertikaian pengguna akan disimpan selama 3 tahun sebelum dimusnahkan."
      ]
    },
    {
      "heading": "6. Penyediaan kepada pihak ketiga dan pemindahan pemprosesan",
      "paragraphs": [
        "Tiada maklumat peribadi yang disimpan, jadi tiada maklumat peribadi yang diberikan kepada pihak ketiga.",
        "Perkhidmatan ini menggunakan infrastruktur hosting {hostingProvider}, dan dalam proses ini, rekod akses di atas diproses mengikut dasar penyedia tersebut.",
        "Apabila penjualan produk berbayar bermula, pembayaran domestik akan diserahkan kepada Toss Payments, dan pembayaran luar negara akan diserahkan kepada PortOne (PayPal). Maklumat kaedah pembayaran seperti nombor kad dan nombor akaun akan diproses secara langsung oleh penyedia tersebut, dan perkhidmatan tidak akan menerima maklumat tersebut."
      ]
    },
    {
      "heading": "7. Hak pengguna",
      "paragraphs": [
        "Oleh kerana tiada maklumat peribadi yang disimpan, tiada pihak yang boleh diminta untuk melihat, membetulkan, atau memadam.",
        "Pengguna boleh menghapus semua jejak input hanya dengan menghapus pautan hasil dalam bar alamat pelayar.",
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
        "Jika dasar ini diubah, tarikh berkuat kuasa dan butiran perubahan akan diterbitkan di halaman ini. Jika terdapat perubahan yang nyata dalam pemprosesan seperti penerbitan iklan atau penjualan produk berbayar, makluman akan diberikan terlebih dahulu."
      ]
    }
  ],
  "effectiveLabel": "Tarikh berkuat kuasa"
};

const d5 = {
  "title": "Dasar Pemprosesan Data Peribadi",
  "intro": "Dreams-Link tidak menyimpan maklumat yang diperlukan untuk tafsiran mimpi. Dasar ini menerangkan apa yang diterima oleh perkhidmatan, apa yang tidak disimpan, dan apa yang direkod secara automatik.",
  "sections": [
    {
      "heading": "1. Maklumat yang tidak disimpan",
      "paragraphs": [
        "Cerita mimpi yang anda tulis, perasaan ketika bangun, dan sama ada anda mengalami mimpi yang sama berulang kali **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memori pelayan semasa memproses permintaan dan hilang bersama dengan respons.",
        "Tiada rekod dalam pangkalan data, dan tiada fail berasingan yang disimpan. Oleh kerana tiada pendaftaran keahlian, nilai input tidak dikaitkan dengan individu tertentu.",
        "Cerita mimpi adalah nilai yang paling peribadi yang diterima oleh perkhidmatan ini. Oleh itu, tiada fungsi untuk melihat kembali hasil lalu (diari mimpi) kerana fungsi itu memerlukan penyimpanan tulisan yang diberikan."
      ]
    },
    {
      "heading": "2. Maklumat dalam pautan hasil",
      "paragraphs": [
        "Alamat skrin hasil mengandungi nilai input yang disulitkan. Namun, nilai ini terletak selepas # dalam alamat, dan mengikut piawaian web, kandungan selepas # tidak dihantar oleh pelayar ke pelayan. Oleh itu, walaupun pautan hasil dibuka, hanya laluan alamat yang akan kekal dalam rekod akses pelayan.",
        "Jika pautan hasil dihantar kepada orang lain, orang itu juga boleh melihat hasil yang sama. Pautan itu sendiri mengandungi nilai input, jadi keputusan untuk berkongsi adalah di tangan pengguna."
      ]
    },
    {
      "heading": "3. Maklumat yang dikumpul secara automatik",
      "paragraphs": [
        "Tiada maklumat yang dikumpul untuk mengenal pasti pengguna. Namun, rekod minimum yang diperlukan untuk operasi perkhidmatan disimpan secara automatik oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, waktu akses, jenis pelayar dan rekod akses pelayan yang umum",
        "Maklumat negara — hanya digunakan untuk menentukan bahasa skrin secara automatik dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Kuki dan iklan",
      "paragraphs": [
        "Perkhidmatan itu sendiri tidak menggunakan kuki untuk menjejaki pengguna.",
        "Pada masa ini, tiada iklan yang dipaparkan dalam perkhidmatan ini. Jika iklan dipaparkan pada masa hadapan, penyedia iklan (contohnya, Google) mungkin menggunakan kuki untuk tujuan tersebut. Dalam kes itu, klausa ini akan diubah terlebih dahulu untuk menjelaskan apa yang berubah sebelum ia bermula."
      ]
    },
    {
      "heading": "5. Maklumat yang disimpan semasa pembayaran",
      "paragraphs": [
        "Apabila membayar produk berbayar (kad mimpi, laporan mimpi konsepsi), maklumat pesanan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang.",
        "**Mimpi yang anda tulis dan fail yang dihasilkan tidak disimpan walaupun selepas pembayaran.** Prinsip dalam perkara 1 tetap sama tanpa mengira sama ada pembayaran dilakukan. Item yang disimpan adalah seperti berikut, dan maklumat yang mengenal pasti pengguna seperti nama, maklumat hubungan, dan alamat tidak termasuk."
      ],
      "bullets": [
        "Nombor pesanan dan pengenalan pembayaran",
        "Jumlah pembayaran, mata wang dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Jenis produk, status pemprosesan, bilangan muat turun dokumen, waktu pesanan",
        "Bahasa skrin pada waktu pesanan dan pengenalan kawasan pembayaran (domestik, luar negara)",
        "Tempoh penyimpanan — Mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Perdagangan Elektronik, rekod pembayaran dan pembekalan barang akan disimpan selama 5 tahun, dan rekod aduan atau penyelesaian pertikaian pengguna akan disimpan selama 3 tahun sebelum dimusnahkan."
      ]
    },
    {
      "heading": "6. Pemberian dan pemprosesan oleh pihak ketiga",
      "paragraphs": [
        "Tiada maklumat peribadi yang mengenal pasti pengguna disimpan, jadi tiada maklumat peribadi yang diberikan kepada pihak ketiga. Pemprosesan pembayaran dioutsourcing kepada penyedia berikut.",
        "Infrastruktur hosting {hostingProvider} digunakan untuk operasi perkhidmatan, dan dalam proses ini, rekod akses dalam perkara 3 diproses mengikut dasar penyedia tersebut.",
        "Pembayaran domestik diproses oleh Toss Payments, manakala pembayaran luar negara diproses melalui PayPal oleh PortOne. Maklumat kaedah pembayaran seperti nombor kad dan nombor akaun diproses secara langsung oleh penyedia tersebut, dan perkhidmatan tidak menerima atau menyimpannya."
      ]
    },
    {
      "heading": "7. Hak pengguna",
      "paragraphs": [
        "Mimpi yang anda tulis tidak disimpan, jadi tiada pihak yang boleh diminta untuk melihat, membetulkan, atau memadam. Rekod pesanan yang tinggal selepas pembayaran mempunyai kewajipan untuk disimpan selama tempoh yang ditetapkan oleh undang-undang, dan tidak boleh dipadamkan dalam tempoh itu, tetapi akan dimusnahkan selepas tempoh tersebut.",
        "Pengguna boleh menghapus semua jejak input hanya dengan menghapus pautan hasil dalam bar alamat pelayar.",
        "Jika anda mempunyai sebarang pertanyaan berkaitan penggunaan perkhidmatan, sila maklumkan kepada kami melalui maklumat hubungan di bawah."
      ]
    },
    {
      "heading": "8. Maklumat peribadi kanak-kanak",
      "paragraphs": [
        "Perkhidmatan ini tidak menyasarkan kanak-kanak di bawah umur 14 tahun dan tidak mengumpul maklumat peribadi daripada kanak-kanak."
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

const d6 = {
  "title": "Terma Penggunaan",
  "intro": "Terma ini menetapkan syarat penggunaan perkhidmatan Dreams-Link (selepas ini dirujuk sebagai “perkhidmatan”). Dengan menggunakan perkhidmatan ini, anda dianggap telah bersetuju dengan terma ini.",
  "sections": [
    {
      "heading": "1. Sifat Perkhidmatan",
      "paragraphs": [
        "Perkhidmatan ini mencari simbol tradisional dalam mimpi yang ditulis oleh pengguna dan menunjukkan makna yang berkaitan sebagai bahan rujukan. Kami tidak akan mengatakan bahawa simbol yang tidak terdapat dalam kamus tidak dapat dijumpai, dan tidak akan mereka-reka makna yang tidak ada.",
        "Simbol dan penjelasan yang diberikan adalah **bahan rujukan dari perspektif tafsiran tradisional, dan bukan ramalan tentang masa depan atau nasihat perubatan, kewangan, atau undang-undang.** Mimpi yang baik tidak menjamin sebarang kejadian, dan mimpi yang buruk tidak bermakna sebarang kejadian telah ditetapkan.",
        "**Keputusan berkaitan mimpi kehamilan tidak menentukan sama ada seseorang itu hamil atau jantina bayi.** Kami hanya akan memberitahu bahawa simbol yang dianggap sebagai mimpi kehamilan secara tradisional telah muncul, serta latar belakangnya."
      ]
    },
    {
      "heading": "2. Yuran Penggunaan",
      "paragraphs": [
        "Pencarian tafsiran mimpi dan paparan hasil adalah percuma dan tidak memerlukan pendaftaran keahlian.",
        "Menerima hasil dalam bentuk kad mimpi (imej) atau laporan mimpi kehamilan (PDF) adalah berbayar. Harga dan syarat akan ditunjukkan dalam seksyen 3 di bawah dan pada skrin pembayaran."
      ]
    },
    {
      "heading": "3. Produk Berbayar dan Pemulangan",
      "paragraphs": [
        "Terdapat **dua jenis** produk berbayar yang dijual. Tafsiran percuma boleh digunakan tanpa pembayaran, dan dua produk di bawah ini akan disediakan dalam bentuk yang boleh disimpan.",
        "**Kad Mimpi** — Satu fail imej. Ia akan menyimpan simbol yang muncul dalam mimpi pada hari tersebut dan makna tradisionalnya dalam satu gambar. **Ia bukan dokumen (PDF).** Pembayaran domestik {priceCardDomestic} (termasuk VAT), pembayaran luar negara {priceCardGlobal}.",
        "**Laporan Mimpi Kehamilan PDF** — 4 halaman. Ia mengandungi makna tradisional simbol yang muncul dan latar belakangnya dalam dokumen. **Ia tidak menentukan sama ada seseorang itu hamil** — kami hanya akan memberitahu bahawa simbol yang dianggap sebagai mimpi kehamilan secara tradisional telah muncul dalam mimpi. Pembayaran domestik {priceConceptionDomestic} (termasuk VAT), pembayaran luar negara {priceConceptionGlobal}.",
        "Pembayaran domestik boleh dilakukan melalui Toss Payments menggunakan kad kredit/debit dan pembayaran mudah (Toss Pay, Kakao Pay, Naver Pay, Payco, dll.), manakala pembayaran luar negara dilakukan melalui PayPal melalui PortOne. Jumlah akhir adalah berdasarkan jumlah yang ditunjukkan pada skrin pembayaran.",
        "**Perkhidmatan ini tidak menyimpan input pengguna atau fail PDF yang dihasilkan.** Setelah pembayaran diluluskan, dokumen akan dibuat dan dihantar serta tidak ada yang disimpan di pelayan. Oleh itu, fail yang dimuat turun perlu disimpan oleh pengguna secara langsung.",
        "Sekiranya muat turun terhenti atau fail hilang, anda boleh memuat turun semula **hingga 5 kali** dengan pesanan yang sama. Namun, jika input hilang setelah keluar dari skrin hasil, ia tidak dapat dibuat semula, jadi sila simpan fail sejurus selepas pembayaran."
      ],
      "bullets": [
        "**Anda boleh membatalkan dan mendapatkan pemulangan penuh pada bila-bila masa sebelum muat turun bermula selepas pembayaran.**",
        "**Setelah muat turun selesai,** pembatalan atas sebab perubahan fikiran adalah terhad. Ini adalah kandungan digital yang disediakan serta-merta dan tidak boleh dipulihkan, dan ini termasuk dalam sebab-sebab yang ditetapkan dalam Seksyen 17(2) Akta Perlindungan Pengguna dalam Transaksi Elektronik.",
        "**Sekiranya dokumen tidak dihasilkan disebabkan ralat sistem, fail tidak dapat dibuka, atau jumlah pembayaran berbeza daripada pesanan,** ia akan diproses sebagai pengeluaran semula atau pemulangan penuh.",
        "**Ketidakpuasan terhadap kandungan hasil** tidak dianggap sebagai sebab untuk pemulangan. Hasil tafsiran adalah bahan rujukan dari perspektif tafsiran tradisional dan sifatnya telah dinyatakan sebelum pembayaran (lihat seksyen 1 di atas).",
        "Permintaan semula selepas menggunakan semua 5 kali pengeluaran semula tidak dianggap sebagai sebab untuk pemulangan.",
        "**Sekiranya individu di bawah umur membuat pembayaran tanpa persetujuan wakil sah,** individu tersebut atau wakil sahnya boleh membatalkan pembayaran tersebut. Sila maklumkan kepada kami melalui maklumat hubungan di bawah untuk mendapatkan pemulangan."
      ]
    },
    {
      "heading": "4. Mengenai Hasil Tafsiran",
      "paragraphs": [
        "Peraturan untuk mencari simbol mengikuti kamus yang diterbitkan dan prosedur yang ditetapkan, jadi jika anda menulis teks yang sama, simbol yang sama akan muncul setiap masa.",
        "Semakin pendek teks yang ditulis, semakin sedikit simbol yang akan muncul. Simbol yang tidak terdapat dalam kamus tidak dapat dijumpai, dan dalam kes tersebut, hasil akan dibiarkan kosong.",
        "Kamus simbol adalah pengumpulan dari literatur tafsiran mimpi yang diwarisi dan cerita rakyat, dan terdapat tafsiran yang berbeza mengikut kawasan dan zaman."
      ]
    },
    {
      "heading": "5. Tanggungjawab Pengguna",
      "paragraphs": [
        "Pengguna boleh menulis mimpi orang lain, tetapi tidak boleh menggunakan hasil tersebut untuk merugikan orang lain.",
        "Jangan gunakan hasil perkhidmatan sebagai asas untuk membuat keputusan yang mempengaruhi hak atau kepentingan seseorang dalam hal kehamilan, kesihatan, pelaburan, pengambilan pekerja, dan lain-lain. Perkhidmatan ini tidak direka untuk tujuan tersebut."
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
        "Menggandakan atau mengubahsuai perkhidmatan untuk menyediakan perkhidmatan yang sama"
      ]
    },
    {
      "heading": "7. Penafian",
      "paragraphs": [
        "Perkhidmatan ini hanya menyediakan bahan rujukan dan tidak bertanggungjawab terhadap keputusan yang dibuat oleh pengguna berdasarkan hasil dan akibatnya.",
        "Kami tidak bertanggungjawab terhadap kerugian yang timbul akibat gangguan perkhidmatan disebabkan oleh sebab-sebab di luar kawalan seperti bencana alam atau gangguan penyedia infrastruktur."
      ]
    },
    {
      "heading": "8. Hak Harta Intelek",
      "paragraphs": [
        "Hak terhadap skrin, frasa, dan pelaksanaan peraturan pengiraan perkhidmatan adalah milik pengendali. Pengguna boleh menyimpan atau berkongsi hasil untuk tujuan peribadi."
      ]
    },
    {
      "heading": "9. Perubahan Terma dan Undang-Undang yang Terpakai",
      "paragraphs": [
        "Sekiranya terma diubah, ia akan diterbitkan di halaman ini bersama dengan tarikh berkuat kuasa.",
        "Terma ini tertakluk kepada undang-undang Republik Korea, dan sebarang pertikaian yang berkaitan dengan penggunaan perkhidmatan akan mengikuti prosedur yang ditetapkan oleh undang-undang yang berkaitan."
      ]
    }
  ],
  "effectiveLabel": "Tarikh Berkuat Kuasa"
};

const d7 = {
  "title": "Dasar Pemprosesan Data Peribadi",
  "intro": "Dreams-Link tidak menyimpan maklumat yang diperlukan untuk tafsiran mimpi. Dasar ini menerangkan apa yang diterima oleh perkhidmatan, apa yang tidak disimpan, dan apa yang direkod secara automatik.",
  "sections": [
    {
      "heading": "1. Maklumat yang tidak disimpan",
      "paragraphs": [
        "Cerita mimpi yang anda tulis untuk tafsiran, perasaan anda ketika bangun, dan sama ada anda mengalami mimpi yang sama berulang kali **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memori pelayan semasa memproses permintaan dan hilang bersama respons.",
        "Ia tidak direkod dalam pangkalan data dan tidak disimpan dalam fail berasingan. Oleh kerana tiada pendaftaran ahli, nilai input tidak dikaitkan dengan individu tertentu.",
        "Cerita mimpi adalah nilai paling peribadi yang diterima oleh perkhidmatan ini. Oleh itu, tiada fungsi untuk melihat semula hasil lalu (diari mimpi) kerana fungsi itu memerlukan penyimpanan tulisan yang diberikan."
      ]
    },
    {
      "heading": "2. Maklumat yang terkandung dalam pautan hasil",
      "paragraphs": [
        "Alamat skrin hasil mengandungi nilai input yang disulitkan. Namun, nilai ini terletak selepas # dalam alamat, dan mengikut standard web, kandungan selepas # tidak dihantar oleh pelayar ke pelayan. Oleh itu, walaupun pautan hasil dibuka, hanya laluan alamat yang akan kekal dalam rekod akses pelayan.",
        "Jika pautan hasil dihantar kepada orang lain, orang itu juga boleh melihat hasil yang sama. Pautan itu sendiri mengandungi nilai input, jadi keputusan untuk berkongsi adalah di tangan pengguna."
      ]
    },
    {
      "heading": "3. Maklumat yang dikumpul secara automatik",
      "paragraphs": [
        "Tiada maklumat yang dikumpul untuk mengenal pasti pengguna. Namun, rekod minimum yang diperlukan untuk operasi perkhidmatan disimpan secara automatik oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, tarikh dan masa akses, jenis pelayar, dan rekod akses pelayan umum",
        "Maklumat negara — hanya digunakan untuk secara automatik menentukan bahasa skrin dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Kuki dan iklan",
      "paragraphs": [
        "Perkhidmatan itu sendiri tidak menggunakan kuki untuk mengenal pasti atau menjejak pengguna. Cerita mimpi yang anda tulis tidak disampaikan kepada pengiklan.",
        "Perkhidmatan ini menyiarkan iklan melalui Google AdSense. Dalam proses ini, perkara berikut berlaku."
      ],
      "bullets": [
        "Penyedia pihak ketiga termasuk Google boleh menyimpan atau membaca kuki di pelayar pengguna.",
        "Google menggunakan kuki berdasarkan rekod lawatan ke laman ini dan laman lain untuk menyiarkan iklan.",
        "Pengguna boleh mematikan iklan tersuai di tetapan iklan Google (google.com/settings/ads). Walaupun dimatikan, iklan itu masih akan ditunjukkan, tetapi relevansinya dengan pengguna akan berkurang.",
        "Iklan tersuai dari semua penyedia pihak ketiga boleh dimatikan sekaligus di aboutads.info/choices.",
        "Terdapat juga cara untuk menyekat kuki dalam tetapan pelayar.",
        "Pengguna di Kawasan Ekonomi Eropah, UK, dan Switzerland akan diminta untuk memberikan persetujuan terlebih dahulu untuk penggunaan kuki iklan."
      ]
    },
    {
      "heading": "5. Maklumat yang disimpan semasa pembayaran",
      "paragraphs": [
        "Apabila anda membayar untuk produk berbayar (kad mimpi, laporan mimpi konsepsi), maklumat pesanan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang.",
        "**Cerita mimpi yang anda tulis dan fail yang dihasilkan tidak disimpan walaupun selepas pembayaran.** Prinsip dalam perkara 1 tetap sama tanpa mengira sama ada pembayaran dilakukan atau tidak. Item yang disimpan adalah seperti berikut, dan maklumat yang mengenal pasti pengguna seperti nama, maklumat hubungan, dan alamat tidak termasuk."
      ],
      "bullets": [
        "Nombor pesanan dan pengenalan pembayaran",
        "Jumlah pembayaran, mata wang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Jenis produk, status pemprosesan, bilangan muat turun dokumen, dan masa pesanan",
        "Bahasa skrin pada masa pesanan dan pengenalan kawasan pembayaran (domestik, luar negara)",
        "Tempoh penyimpanan — Rekod berkaitan pembayaran dan pembekalan barang akan disimpan selama 5 tahun dan rekod berkaitan aduan atau penyelesaian pertikaian akan disimpan selama 3 tahun sebelum dimusnahkan mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Perdagangan Elektronik."
      ]
    },
    {
      "heading": "6. Penyediaan kepada pihak ketiga dan pemindahan pemprosesan",
      "paragraphs": [
        "Tiada maklumat peribadi yang mengenal pasti pengguna disimpan, jadi tiada maklumat peribadi yang diberikan kepada pihak ketiga. Pemprosesan pembayaran diserahkan kepada penyedia di bawah.",
        "Perkhidmatan ini menggunakan infrastruktur hosting {hostingProvider}, dan dalam proses ini, rekod akses dalam perkara 3 diproses mengikut dasar penyedia tersebut.",
        "Pembayaran domestik diproses oleh Toss Payments, manakala pembayaran luar negara diproses melalui PayPal oleh PortOne. Maklumat kaedah pembayaran seperti nombor kad dan nombor akaun diproses secara langsung oleh penyedia ini, dan perkhidmatan tidak menerima atau menyimpan maklumat tersebut."
      ]
    },
    {
      "heading": "7. Hak pengguna",
      "paragraphs": [
        "Cerita mimpi yang anda tulis tidak disimpan, jadi tiada pihak yang boleh diminta untuk melihat, membetulkan, atau memadam. Rekod pesanan yang tinggal selepas pembayaran perlu disimpan selama tempoh yang ditetapkan oleh undang-undang, dan tidak boleh dipadamkan dalam tempoh tersebut, tetapi akan dimusnahkan selepas tempoh itu.",
        "Pengguna boleh menghapus semua jejak input hanya dengan menghapus pautan hasil dalam bar alamat pelayar.",
        "Jika anda mempunyai sebarang pertanyaan berkaitan penggunaan perkhidmatan, sila hubungi melalui maklumat di bawah."
      ]
    },
    {
      "heading": "8. Data peribadi kanak-kanak",
      "paragraphs": [
        "Perkhidmatan ini tidak ditujukan kepada kanak-kanak di bawah umur 14 tahun dan tidak mengumpul data peribadi daripada kanak-kanak."
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
        "Jika dasar ini diubah, tarikh berkuat kuasa dan butiran perubahan akan diterbitkan di halaman ini. Jika terdapat perubahan yang nyata dalam pemprosesan seperti permulaan penyiapan iklan atau penjualan produk berbayar, kami akan memaklumkan terlebih dahulu tentang perubahan tersebut."
      ]
    }
  ],
  "effectiveLabel": "Tarikh berkuat kuasa"
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
