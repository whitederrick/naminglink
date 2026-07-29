import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Dasar Pemprosesan Data Peribadi",
  "intro": "InyeonLink tidak menyimpan maklumat yang diperlukan untuk pengiraan keserasian. Dasar ini menerangkan apa yang diterima oleh perkhidmatan, apa yang tidak disimpan, dan apa yang direkod secara automatik.",
  "sections": [
    {
      "heading": "1. Maklumat yang tidak disimpan",
      "paragraphs": [
        "Tarikh lahir, waktu kelahiran, tempat kelahiran, jantina, dan nama yang digunakan untuk pengiraan keserasian **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memori pelayan semasa memproses permintaan dan hilang bersama dengan respons.",
        "Tidak direkod dalam pangkalan data, dan tidak disimpan dalam fail berasingan. Tiada pendaftaran keahlian, jadi nilai yang dimasukkan tidak dikaitkan dengan individu tertentu."
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
        "Tiada maklumat yang dikumpul untuk mengenal pasti pengguna. Namun, rekod minimum yang diperlukan untuk operasi perkhidmatan secara automatik disimpan oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, waktu akses, jenis pelayar, dan rekod akses pelayan umum lainnya",
        "Maklumat negara — hanya digunakan untuk secara automatik menentukan bahasa skrin dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Kuki dan iklan",
      "paragraphs": [
        "Perkhidmatan itu sendiri tidak menggunakan kuki untuk menjejak pengguna.",
        "Pada masa ini, tiada iklan yang dipaparkan dalam perkhidmatan ini. Jika iklan dipaparkan pada masa depan, penyedia iklan (contohnya, Google) mungkin menggunakan kuki untuk tujuan pengiklanan. Dalam kes itu, klausa ini akan diubah terlebih dahulu untuk menjelaskan apa yang berubah sebelum ia bermula."
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
        "Jumlah pembayaran, mata wang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Jenis produk, status pemprosesan, bilangan muat turun dokumen, waktu pesanan",
        "Bahasa skrin pada waktu pesanan dan pengenalan kawasan pembayaran (domestik, luar negara)",
        "Tempoh penyimpanan — Rekod berkaitan pembayaran dan penyampaian barang akan disimpan selama 5 tahun dan rekod berkaitan aduan atau pertikaian pengguna akan disimpan selama 3 tahun sebelum dimusnahkan mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Perdagangan Elektronik."
      ]
    },
    {
      "heading": "6. Penyediaan kepada pihak ketiga dan pemprosesan luar",
      "paragraphs": [
        "Tiada maklumat peribadi yang disimpan, jadi tiada maklumat peribadi yang diberikan kepada pihak ketiga.",
        "Perkhidmatan ini menggunakan infrastruktur hosting dari {hostingProvider}, dan dalam proses ini, rekod akses yang disebutkan di atas diproses mengikut dasar penyedia tersebut.",
        "Apabila penjualan produk berbayar bermula, pembayaran domestik akan diserahkan kepada Toss Payments, dan pembayaran luar negara kepada PortOne (PayPal). Maklumat kaedah pembayaran seperti nombor kad dan nombor akaun akan diproses secara langsung oleh penyedia ini, dan perkhidmatan tidak akan menerima maklumat tersebut."
      ]
    },
    {
      "heading": "7. Hak pengguna",
      "paragraphs": [
        "Tiada maklumat peribadi yang disimpan, jadi tiada pihak yang boleh diminta untuk melihat, membetulkan, atau memadam.",
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

const d1 = {
  "title": "Terma Penggunaan",
  "intro": "Terma ini menetapkan syarat penggunaan perkhidmatan InyeonLink (selepas ini disebut sebagai “perkhidmatan”). Dengan menggunakan perkhidmatan ini, anda dianggap telah bersetuju dengan terma ini.",
  "sections": [
    {
      "heading": "1. Sifat Perkhidmatan",
      "paragraphs": [
        "Perkhidmatan ini menunjukkan maklumat rujukan tentang hubungan dua individu berdasarkan tarikh lahir yang dimasukkan, dengan menerapkan peraturan hubungan tradisional dalam saju (사주) dan zodiak Korea (띠).",
        "Kadar pemadanan dan penjelasan yang diberikan adalah **maklumat rujukan dari perspektif tafsiran tradisional dan bukan ramalan saintifik atau kepastian tentang hubungan.** Skor yang rendah tidak bermakna hubungan itu buruk, dan skor yang tinggi tidak menjamin hubungan yang baik."
      ]
    },
    {
      "heading": "2. Yuran Penggunaan",
      "paragraphs": [
        "Perkhidmatan ini kini disediakan secara percuma dan tidak memerlukan pendaftaran ahli.",
        "Apabila penjualan produk berbayar (laporan keserasian PDF) dimulakan, syarat di bawah klausa 3 akan terpakai. Terma ini akan diberitahu semula sebelum penjualan dimulakan."
      ]
    },
    {
      "heading": "3. Produk Berbayar dan Pemulangan",
      "paragraphs": [
        "Produk berbayar yang dijual adalah **laporan keserasian PDF** sahaja. Hasil yang dipaparkan di skrin akan disediakan dalam bentuk dokumen PDF tiga halaman, dan juga mengandungi nilai kekuatan elemen yang tidak dipaparkan di skrin.",
        "Harga adalah {priceDomestic} untuk pembayaran domestik (termasuk VAT), dan {priceGlobal} untuk pembayaran luar negara. Pembayaran domestik boleh dilakukan melalui Toss Payments menggunakan kad kredit/debit dan pembayaran mudah (Toss Pay, Kakao Pay, Naver Pay, Payco, dan lain-lain), manakala pembayaran luar negara dilakukan melalui PayPal melalui PortOne. Jumlah akhir adalah berdasarkan jumlah yang dipaparkan di skrin pembayaran.",
        "**Perkhidmatan ini tidak menyimpan input pengguna atau fail PDF yang dihasilkan.** Setelah pembayaran diluluskan, dokumen akan dihasilkan dan dihantar serta tidak ada yang disimpan di pelayan. Oleh itu, fail yang dimuat turun perlu disimpan oleh pengguna secara langsung.",
        "Sekiranya muat turun terhenti atau fail hilang, anda boleh memuat turun semula **sehingga 5 kali** dengan pesanan yang sama. Namun, jika input hilang di luar skrin hasil, ia tidak dapat dibuat semula, jadi sila simpan fail segera selepas pembayaran."
      ],
      "bullets": [
        "**Anda boleh membatalkan dan mendapatkan pemulangan penuh pada bila-bila masa sebelum** muat turun bermula selepas pembayaran.",
        "**Setelah muat turun selesai,** pembatalan kerana perubahan fikiran adalah terhad. Ini adalah kandungan digital yang disediakan sejurus selepas pembayaran dan tidak boleh dipulihkan, yang termasuk dalam sebab-sebab pembatalan yang ditetapkan dalam Seksyen 17(2) Akta Perlindungan Pengguna dalam Transaksi Elektronik.",
        "**Jika dokumen tidak dihasilkan kerana ralat sistem, fail tidak dapat dibuka, atau jumlah pembayaran berbeza dari pesanan,** ia akan diproses sebagai pengeluaran semula atau pemulangan penuh.",
        "**Ketidakpuasan terhadap kandungan hasil** tidak dianggap sebagai sebab untuk pemulangan. Hasil keserasian adalah maklumat rujukan dari perspektif tafsiran tradisional dan sifatnya telah dinyatakan sebelum pembayaran (lihat klausa 1 di atas).",
        "Permintaan untuk pemulangan selepas menggunakan semua 5 pengeluaran semula tidak dianggap sebagai sebab untuk pemulangan.",
        "**Jika individu di bawah umur membuat pembayaran tanpa persetujuan wakil sah,** individu tersebut atau wakil sahnya boleh membatalkan pembayaran tersebut. Sila maklumkan kepada kami melalui maklumat hubungan di bawah untuk mendapatkan pemulangan."
      ]
    },
    {
      "heading": "4. Mengenai Hasil Pengiraan",
      "paragraphs": [
        "Semua skor dikira berdasarkan peraturan yang diumumkan, jadi jika nilai yang sama dimasukkan, hasil yang sama akan sentiasa diperoleh.",
        "Jika waktu kelahiran tidak dimasukkan, pengiraan akan dilakukan tanpa merujuk kepada tiang waktu (時柱), jadi hasil mungkin berbeza. Semakin tepat lokasi kelahiran dipilih, semakin tepat pengiraan tiang waktu.",
        "Pengiraan mandu (万岁历) menggunakan perpustakaan pengiraan yang diumumkan, dan hasil mungkin berbeza bergantung kepada cara pemprosesan waktu dan musim."
      ]
    },
    {
      "heading": "5. Tanggungjawab Pengguna",
      "paragraphs": [
        "Pengguna boleh memasukkan tarikh lahir orang lain, tetapi tidak boleh menggunakan hasil tersebut untuk merugikan orang lain.",
        "Jangan gunakan hasil perkhidmatan sebagai asas untuk keputusan yang mempengaruhi hak orang lain seperti perkahwinan, perceraian, pengambilan, atau transaksi. Perkhidmatan ini tidak direka untuk tujuan tersebut."
      ]
    },
    {
      "heading": "6. Tindakan Dilarang",
      "paragraphs": [
        "Tindakan berikut adalah tidak dibenarkan."
      ],
      "bullets": [
        "Menghantar permintaan berlebihan menggunakan alat automasi yang mengganggu operasi perkhidmatan",
        "Menyatakan hasil perkhidmatan sebagai fakta atau hasil penilaian pakar",
        "Menggandakan atau mengubahsuai perkhidmatan untuk menyediakan perkhidmatan yang sama"
      ]
    },
    {
      "heading": "7. Penafian",
      "paragraphs": [
        "Perkhidmatan ini hanya menyediakan maklumat rujukan dan tidak bertanggungjawab terhadap keputusan yang dibuat oleh pengguna berdasarkan hasil tersebut dan akibatnya.",
        "Perkhidmatan tidak bertanggungjawab terhadap kerugian yang disebabkan oleh gangguan perkhidmatan akibat sebab-sebab yang tidak dapat dikawal seperti bencana alam atau gangguan penyedia infrastruktur."
      ]
    },
    {
      "heading": "8. Hak Harta Intelek",
      "paragraphs": [
        "Hak terhadap skrin perkhidmatan, frasa, dan pelaksanaan peraturan pengiraan adalah milik pengendali. Pengguna boleh menyimpan atau berkongsi hasil untuk tujuan peribadi."
      ]
    },
    {
      "heading": "9. Perubahan Terma dan Undang-Undang yang Terpakai",
      "paragraphs": [
        "Jika terma diubah, ia akan diterbitkan di halaman ini bersama dengan tarikh berkuat kuasa.",
        "Terma ini tertakluk kepada undang-undang Republik Korea, dan sebarang pertikaian yang berkaitan dengan penggunaan perkhidmatan akan mengikuti prosedur yang ditetapkan oleh undang-undang yang berkaitan."
      ]
    }
  ],
  "effectiveLabel": "Tarikh Berkuatkuasa"
};

const d2 = {
  "title": "Dasar Pembatalan dan Pengembalian Wang",
  "intro": "Ini adalah kriteria pembatalan dan pengembalian wang untuk **laporan keserasian PDF**. Kami telah mengumpulkan isi yang sama seperti dalam klausa 3 syarat.",
  "sections": [
    {
      "heading": "1. Sifat Produk",
      "paragraphs": [
        "Produk yang dijual adalah **laporan keserasian PDF** yang tunggal, dan setelah pembayaran diluluskan, dokumen akan dibuat serta-merta dan dihantar secara digital.",
        "**Perkhidmatan tidak menyimpan input pengguna atau fail PDF yang dihasilkan.** Oleh itu, fail yang dimuat turun perlu disimpan oleh pengguna secara langsung."
      ]
    },
    {
      "heading": "2. Pembatalan Pesanan",
      "paragraphs": [
        "Ia mengikuti kriteria yang ditetapkan oleh undang-undang perdagangan elektronik."
      ],
      "bullets": [
        "**Sebelum muat turun bermula,** anda boleh membatalkan dan mendapatkan pengembalian wang penuh pada bila-bila masa.",
        "**Setelah muat turun selesai,** pembatalan pesanan kerana perubahan fikiran adalah terhad. Ini adalah kandungan digital yang disediakan sebaik sahaja pembayaran dibuat dan tidak boleh dipulihkan, yang termasuk dalam alasan terhad yang ditetapkan dalam Seksyen 17(2) Akta Perlindungan Pengguna dalam Perdagangan Elektronik. Ini telah dimaklumkan dan persetujuan telah diperoleh di skrin pembayaran."
      ]
    },
    {
      "heading": "3. Kes Pengembalian Wang Penuh",
      "paragraphs": [
        "Dalam kes berikut, setelah sebab disahkan, kami akan memproses pengeluaran semula atau pengembalian wang penuh."
      ],
      "bullets": [
        "Jika dokumen tidak dihasilkan kerana ralat sistem",
        "Jika fail yang dimuat turun tidak dapat dibuka",
        "Jika jumlah pembayaran berbeza daripada pesanan",
        "**Jika pembelian dibuat oleh individu yang belum mencapai umur dewasa tanpa persetujuan wakil sah** — Individu tersebut atau wakil sahnya boleh meminta pembatalan."
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
      "heading": "5. Cara Memohon",
      "paragraphs": [
        "Untuk pengembalian wang atau pertanyaan, sila hubungi pusat khidmat pelanggan ({customerCenter}) atau melalui email ({email}). Menyertakan nombor pesanan akan mempercepatkan proses pengesahan.",
        "Pengembalian wang akan dibuat melalui kaedah pembayaran yang digunakan, dan bergantung kepada syarikat kad/pembayaran, ia mungkin mengambil masa 3 hingga 7 hari bekerja untuk diproses."
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
        "**Penghitungan dan pemeriksaan hasil kompatibilitas adalah gratis.** Tidak perlu mendaftar sebagai anggota.",
        "Anda dapat melihat tingkat kecocokan, skor per item, pilar saju (四柱) masing-masing individu, serta kekuatan elemen dan bentuk hubungan di layar."
      ]
    },
    {
      "heading": "2. Laporan Kompatibilitas PDF (berbayar)",
      "paragraphs": [
        "Pembayaran domestik {priceDomestic} (termasuk pajak) · Pembayaran internasional {priceGlobal}",
        "Kami akan membuat dokumen PDF sebanyak 3 halaman berdasarkan hasil yang ditampilkan di layar. Ini juga akan mencakup nilai kekuatan elemen yang tidak ditampilkan di layar.",
        "Anda dapat mengunduh kembali hingga **5 kali** dengan pesanan yang sama. Namun, jika nilai input hilang setelah keluar dari layar hasil, Anda tidak dapat membuatnya lagi, jadi harap simpan file segera setelah pembayaran dilakukan."
      ]
    },
    {
      "heading": "3. Metode Pembayaran",
      "paragraphs": [
        "**Domestik** — Anda dapat menggunakan kartu kredit/debit dan pembayaran mudah (Toss Payments, KakaoPay, NaverPay, Payco, dll.) melalui Toss Payments.",
        "**Internasional** — Anda dapat membayar melalui PayPal melalui PortOne.",
        "Jumlah total pembayaran mengikuti jumlah yang ditampilkan di layar pembayaran."
      ]
    },
    {
      "heading": "4. Perubahan Harga",
      "paragraphs": [
        "Jika ada perubahan harga, kami akan mempostingnya di halaman ini terlebih dahulu. Harga yang telah dibayar untuk pesanan yang sudah selesai tidak akan terpengaruh oleh perubahan harga."
      ]
    }
  ],
  "effectiveLabel": "Tanggal Berlaku"
};

const d4 = {
  "title": "Dasar Pemprosesan Data Peribadi",
  "intro": "InyeonLink tidak menyimpan maklumat yang diperlukan untuk mengira keserasian. Dasar ini menerangkan apa yang diterima oleh perkhidmatan, apa yang tidak disimpan, dan apa yang direkod secara automatik.",
  "sections": [
    {
      "heading": "1. Maklumat yang tidak disimpan",
      "paragraphs": [
        "Tarikh lahir, waktu kelahiran, tempat lahir, jantina, dan nama yang digunakan untuk mengira keserasian **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memori pelayan semasa memproses permintaan dan hilang bersama dengan respons.",
        "Ia tidak direkod dalam pangkalan data dan tidak disimpan dalam fail berasingan. Tiada pendaftaran ahli, jadi nilai yang dimasukkan tidak dihubungkan dengan individu tertentu."
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
        "Tiada maklumat yang dikumpul untuk mengenal pasti pengguna. Namun, rekod minimum yang diperlukan untuk operasi perkhidmatan secara automatik disimpan oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, waktu akses, jenis pelayar, dan rekod akses pelayan umum yang lain",
        "Maklumat negara — hanya digunakan untuk menentukan bahasa skrin secara automatik dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Kuki dan iklan",
      "paragraphs": [
        "Perkhidmatan itu sendiri tidak menggunakan kuki untuk mengenal pasti atau mengesan pengguna. Maklumat yang dimasukkan untuk mengira keserasian tidak disampaikan kepada pengiklan.",
        "Perkhidmatan ini menyiarkan iklan melalui Google AdSense. Dalam proses ini, perkara berikut berlaku."
      ],
      "bullets": [
        "Penyedia pihak ketiga termasuk Google boleh menyimpan atau membaca kuki dalam pelayar pengguna.",
        "Google menggunakan kuki berdasarkan rekod lawatan ke laman ini dan laman lain untuk menyiarkan iklan.",
        "Pengguna boleh mematikan iklan tersuai di tetapan iklan Google (google.com/settings/ads). Walaupun dimatikan, iklan itu masih akan dipaparkan, tetapi relevansinya dengan pengguna akan berkurang.",
        "Iklan tersuai dari semua penyedia pihak ketiga boleh dimatikan sekaligus di aboutads.info/choices.",
        "Terdapat juga cara untuk menyekat kuki dalam tetapan pelayar.",
        "Pengguna di Kawasan Ekonomi Eropah, UK, dan Switzerland akan diminta untuk memberikan persetujuan terlebih dahulu untuk penggunaan kuki iklan."
      ]
    },
    {
      "heading": "5. Maklumat yang disimpan semasa pembayaran",
      "paragraphs": [
        "Oleh kerana tiada produk berbayar yang dijual pada masa ini, tiada maklumat yang disimpan berkaitan dengan pembayaran.",
        "Apabila penjualan bermula, maklumat berikut akan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang. **Pada masa itu, nilai yang dimasukkan untuk mengira keserasian dan PDF yang dihasilkan juga tidak akan disimpan**, dan maklumat yang mengenal pasti pengguna seperti nama, maklumat hubungan, dan alamat tidak akan diterima."
      ],
      "bullets": [
        "Nombor pesanan dan pengenalan pembayaran",
        "Jumlah pembayaran, mata wang, dan status pembayaran (belum dibayar, dibayar, dibatalkan)",
        "Jenis produk, status pemprosesan, bilangan muat turun dokumen, waktu pesanan",
        "Bahasa skrin pada waktu pesanan dan pengenalan kawasan pembayaran (domestik, luar negara)",
        "Tempoh penyimpanan — Rekod berkaitan pembayaran dan pembekalan barang akan disimpan selama 5 tahun dan rekod berkaitan aduan atau penyelesaian pertikaian akan disimpan selama 3 tahun sebelum dimusnahkan, mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Perdagangan Elektronik."
      ]
    },
    {
      "heading": "6. Penyediaan kepada pihak ketiga dan pemindahan pemprosesan",
      "paragraphs": [
        "Tiada maklumat peribadi yang disimpan, jadi tiada maklumat peribadi yang diberikan kepada pihak ketiga.",
        "Perkhidmatan ini menggunakan infrastruktur hosting dari {hostingProvider}, dan dalam proses ini, rekod akses di atas diproses mengikut dasar penyedia tersebut.",
        "Apabila penjualan produk berbayar bermula, pembayaran domestik akan diuruskan oleh Toss Payments, dan pembayaran luar negara akan diuruskan oleh PortOne (PayPal). Maklumat cara pembayaran seperti nombor kad dan nombor akaun akan diproses secara langsung oleh penyedia tersebut, dan perkhidmatan tidak akan menerima maklumat tersebut."
      ]
    },
    {
      "heading": "7. Hak pengguna",
      "paragraphs": [
        "Oleh kerana tiada maklumat peribadi yang disimpan, tiada pihak yang boleh diminta untuk melihat, membetulkan, atau memadam.",
        "Pengguna boleh menghapus semua jejak input hanya dengan menghapus pautan keputusan dari bar alamat pelayar.",
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
      "heading": "9. Pegawai perlindungan data peribadi",
      "paragraphs": [
        "Pegawai perlindungan: {privacyOfficer}",
        "Pertanyaan: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Perubahan dasar",
      "paragraphs": [
        "Sekiranya dasar ini diubah, tarikh berkuat kuasa dan butiran perubahan akan diterbitkan di halaman ini. Jika terdapat perubahan yang nyata dalam pemprosesan seperti penyiapan iklan atau penjualan produk berbayar, kami akan memaklumkan terlebih dahulu tentang perubahan tersebut."
      ]
    }
  ],
  "effectiveLabel": "Tarikh berkuat kuasa"
};

const d5 = {
  "title": "Dasar Pemprosesan Data Peribadi",
  "intro": "InyeonLink tidak menyimpan maklumat yang diperlukan untuk pengiraan keserasian. Dasar ini menerangkan apa yang diterima oleh perkhidmatan, apa yang tidak disimpan, dan apa yang direkod secara automatik.",
  "sections": [
    {
      "heading": "1. Maklumat yang tidak disimpan",
      "paragraphs": [
        "Tarikh lahir, waktu kelahiran, tempat kelahiran, jantina, dan nama yang digunakan untuk pengiraan keserasian **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memori pelayan semasa memproses permintaan dan hilang bersama dengan respons.",
        "Ia tidak direkod dalam pangkalan data dan tidak disimpan dalam fail berasingan. Tiada pendaftaran ahli, jadi nilai yang dimasukkan tidak dihubungkan dengan individu tertentu."
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
        "Perkhidmatan itu sendiri tidak menggunakan kuki untuk menjejak pengguna.",
        "Pada masa ini, tiada iklan yang dipaparkan dalam perkhidmatan ini. Jika iklan mula dipaparkan pada masa hadapan, penyedia iklan (contohnya, Google) mungkin menggunakan kuki untuk menyiarkan iklan. Dalam kes itu, klausa ini akan diubah terlebih dahulu untuk menjelaskan apa yang berubah sebelum ia bermula."
      ]
    },
    {
      "heading": "5. Maklumat yang disimpan semasa pembayaran",
      "paragraphs": [
        "Apabila membayar produk berbayar (laporan keserasian PDF), maklumat pesanan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang.",
        "**Nilai yang dimasukkan untuk pengiraan keserasian dan PDF yang dihasilkan tidak disimpan walaupun selepas pembayaran.** Prinsip dalam perkara 1 tetap sama tanpa mengira sama ada pembayaran dilakukan. Item yang disimpan adalah seperti berikut, dan maklumat yang mengenal pasti pengguna seperti nama, maklumat hubungan, dan alamat tidak termasuk."
      ],
      "bullets": [
        "Nombor pesanan dan pengenalan pembayaran",
        "Jumlah pembayaran, mata wang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Pemisahan produk, status pemprosesan, bilangan muat turun dokumen, waktu pesanan",
        "Bahasa skrin pada waktu pesanan dan pemisahan kawasan pembayaran (domestik, luar negara)",
        "Tempoh penyimpanan — Rekod mengenai pembayaran dan pembekalan barang mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Perdagangan Elektronik akan disimpan selama 5 tahun, dan rekod mengenai aduan atau penyelesaian pertikaian pengguna akan disimpan selama 3 tahun sebelum dimusnahkan."
      ]
    },
    {
      "heading": "6. Penyediaan kepada pihak ketiga dan pemprosesan luar",
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
        "Sekiranya dasar ini diubah, tarikh berkuatkuasa dan butiran perubahan akan diterbitkan di halaman ini. Jika terdapat perubahan sebenar dalam pemprosesan seperti pengiklanan atau penjualan produk berbayar, kami akan memaklumkan terlebih dahulu tentang perubahan tersebut."
      ]
    }
  ],
  "effectiveLabel": "Tarikh berkuatkuasa"
};

const d6 = {
  "title": "Terma Penggunaan",
  "intro": "Terma ini menetapkan syarat penggunaan InyeonLink (selepas ini dirujuk sebagai “Perkhidmatan”). Dengan menggunakan perkhidmatan ini, anda dianggap telah bersetuju dengan terma ini.",
  "sections": [
    {
      "heading": "1. Sifat Perkhidmatan",
      "paragraphs": [
        "Perkhidmatan ini menunjukkan hubungan antara dua orang berdasarkan tarikh lahir yang dimasukkan dengan menerapkan peraturan hubungan tradisional saju (사주) dan zodiak Korea (띠).",
        "Kadar pemadanan dan penjelasan yang diberikan adalah **sebagai rujukan dari perspektif tafsiran tradisional dan bukan ramalan saintifik atau kepastian mengenai hubungan.** Skor yang rendah tidak bermakna hubungan itu buruk, dan skor yang tinggi tidak menjamin hubungan yang baik."
      ]
    },
    {
      "heading": "2. Yuran Penggunaan",
      "paragraphs": [
        "Pengiraan keserasian dan semakan keputusan adalah percuma dan tidak memerlukan pendaftaran keahlian.",
        "Menerima keputusan dalam bentuk laporan PDF adalah berbayar. Harga dan syarat akan ditunjukkan di bawah perkara 3 dan pada skrin pembayaran."
      ]
    },
    {
      "heading": "3. Produk Berbayar dan Pemulangan",
      "paragraphs": [
        "Produk berbayar yang dijual adalah **laporan keserasian PDF** sahaja. Kami akan menghasilkan dokumen PDF yang mengandungi 3 halaman berdasarkan keputusan yang dipaparkan di skrin, dan juga termasuk nilai kekuatan elemen yang tidak dipaparkan di skrin.",
        "Harga adalah {priceDomestic} untuk pembayaran domestik (termasuk VAT), dan {priceGlobal} untuk pembayaran luar negara. Pembayaran domestik boleh dilakukan melalui Toss Payments menggunakan kad kredit/debit dan pembayaran mudah (Toss Pay, KakaoPay, NaverPay, Payco, dll.), manakala pembayaran luar negara dilakukan melalui PayPal melalui PortOne. Jumlah akhir adalah berdasarkan jumlah yang ditunjukkan pada skrin pembayaran.",
        "**Perkhidmatan ini tidak menyimpan input pengguna atau fail PDF yang dihasilkan.** Setelah pembayaran diluluskan, dokumen akan dihasilkan dan dihantar serta tidak ada yang disimpan di pelayan. Oleh itu, fail yang dimuat turun perlu disimpan oleh pengguna sendiri.",
        "Sekiranya muat turun terhenti atau fail hilang, anda boleh memuat turun semula **sehingga 5 kali** dengan pesanan yang sama. Walau bagaimanapun, jika input hilang di luar skrin keputusan, ia tidak dapat dihasilkan semula, jadi sila simpan fail sejurus selepas pembayaran."
      ],
      "bullets": [
        "**Anda boleh membatalkan dan mendapatkan pemulangan penuh pada bila-bila masa sebelum muat turun bermula selepas pembayaran.**",
        "**Setelah muat turun selesai,** pembatalan atas alasan perubahan fikiran adalah terhad. Ini adalah kandungan digital yang disediakan serta-merta dan tidak dapat dipulihkan, yang termasuk dalam alasan pembatalan yang ditetapkan dalam Seksyen 17(2) Akta Perlindungan Pengguna dalam Transaksi Elektronik.",
        "**Jika dokumen tidak dihasilkan akibat ralat sistem, fail tidak dapat dibuka, atau jumlah pembayaran berbeza dari pesanan,** ia akan diproses untuk pengeluaran semula atau pemulangan penuh.",
        "**Ketidakpuasan terhadap kandungan keputusan** tidak dianggap sebagai alasan untuk pemulangan. Keputusan keserasian adalah sebagai rujukan dari perspektif tafsiran tradisional dan sifatnya telah dinyatakan sebelum pembayaran (lihat perkara 1 di atas).",
        "Permintaan semula selepas menggunakan semua 5 kali pengeluaran semula tidak dianggap sebagai alasan untuk pemulangan.",
        "**Jika individu di bawah umur membuat pembayaran tanpa persetujuan wakil sah,** individu tersebut atau wakil sah boleh membatalkan pembayaran tersebut. Sila maklumkan kepada kami melalui maklumat hubungan di bawah untuk mendapatkan pemulangan."
      ]
    },
    {
      "heading": "4. Mengenai Keputusan Pengiraan",
      "paragraphs": [
        "Semua skor dikira berdasarkan peraturan yang terbuka, jadi jika nilai yang sama dimasukkan, keputusan yang sama akan sentiasa diperoleh.",
        "Jika waktu kelahiran tidak dimasukkan, pengiraan akan dilakukan tanpa merujuk kepada jam kelahiran (時柱), jadi keputusan mungkin berbeza. Semakin tepat lokasi kelahiran dipilih, semakin tepat pengiraan jam kelahiran.",
        "Pengiraan Manse (万岁历) menggunakan perpustakaan pengiraan yang terbuka, dan hasil mungkin berbeza bergantung kepada cara pemprosesan waktu dan musim."
      ]
    },
    {
      "heading": "5. Tanggungjawab Pengguna",
      "paragraphs": [
        "Pengguna boleh memasukkan tarikh lahir orang lain, tetapi tidak boleh menggunakan hasil tersebut untuk merugikan orang lain.",
        "Jangan gunakan hasil perkhidmatan sebagai asas untuk keputusan yang mempengaruhi hak orang lain seperti perkahwinan, perceraian, pengambilan pekerja, atau transaksi. Perkhidmatan ini tidak direka untuk tujuan tersebut."
      ]
    },
    {
      "heading": "6. Tindakan Dilarang",
      "paragraphs": [
        "Tindakan berikut adalah dilarang."
      ],
      "bullets": [
        "Menghantar permintaan berlebihan menggunakan alat automasi yang mengganggu operasi perkhidmatan",
        "Menyatakan hasil perkhidmatan sebagai fakta atau hasil penilaian pakar",
        "Menggandakan atau mengubah suai perkhidmatan untuk menyediakan perkhidmatan yang sama"
      ]
    },
    {
      "heading": "7. Pengecualian Tanggungjawab",
      "paragraphs": [
        "Perkhidmatan ini hanya menyediakan bahan rujukan dan tidak bertanggungjawab terhadap keputusan yang dibuat oleh pengguna berdasarkan hasil tersebut.",
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
      "heading": "9. Perubahan Terma dan Undang-Undang yang Digunakan",
      "paragraphs": [
        "Jika terma diubah, ia akan diterbitkan di halaman ini bersama dengan tarikh berkuat kuasa.",
        "Terma ini tertakluk kepada undang-undang Republik Korea, dan sebarang pertikaian yang berkaitan dengan penggunaan perkhidmatan akan mengikuti prosedur yang ditetapkan oleh undang-undang yang berkaitan."
      ]
    }
  ],
  "effectiveLabel": "Tarikh Berkuat Kuasa"
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
      "heading": "2. Maklumat dalam Pautan Hasil",
      "paragraphs": [
        "Alamat skrin hasil mengandungi nilai yang dimasukkan dalam bentuk yang disulitkan. Namun, nilai ini terletak selepas # dalam alamat, dan mengikut piawaian web, kandungan selepas # tidak dihantar oleh pelayar ke pelayan. Oleh itu, walaupun pautan hasil dibuka, hanya laluan alamat yang akan kekal dalam rekod akses pelayan.",
        "Jika pautan hasil dihantar kepada orang lain, orang itu juga boleh melihat hasil yang sama. Pautan itu sendiri mengandungi nilai yang dimasukkan, jadi keputusan untuk berkongsi adalah di tangan pengguna."
      ]
    },
    {
      "heading": "3. Maklumat yang Dikumpul Secara Automatik",
      "paragraphs": [
        "Tiada maklumat yang dikumpul untuk mengenal pasti pengguna. Namun, rekod minimum yang diperlukan untuk operasi perkhidmatan disimpan secara automatik oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, waktu akses, jenis pelayar, dan rekod akses pelayan umum lainnya",
        "Maklumat negara — hanya digunakan untuk secara automatik menentukan bahasa skrin dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Kuki dan Iklan",
      "paragraphs": [
        "Perkhidmatan itu sendiri tidak menggunakan kuki untuk mengenal pasti atau menjejak pengguna. Maklumat yang dimasukkan untuk pengiraan keserasian tidak disampaikan kepada pengiklan.",
        "Perkhidmatan ini menyiarkan iklan melalui Google AdSense. Dalam proses ini, perkara berikut berlaku."
      ],
      "bullets": [
        "Penyedia pihak ketiga termasuk Google boleh menyimpan atau membaca kuki di pelayar pengguna.",
        "Google menggunakan kuki berdasarkan rekod lawatan ke laman ini dan laman lain untuk menyiarkan iklan.",
        "Pengguna boleh mematikan iklan tersuai di tetapan iklan Google (google.com/settings/ads). Walaupun dimatikan, iklan itu masih akan ditunjukkan, tetapi relevansinya dengan pengguna akan berkurangan.",
        "Iklan tersuai dari semua penyedia pihak ketiga boleh dimatikan sekaligus di aboutads.info/choices.",
        "Terdapat juga cara untuk menyekat kuki dalam tetapan pelayar.",
        "Pengguna di Kawasan Ekonomi Eropah, UK, dan Switzerland akan diminta untuk memberikan persetujuan terlebih dahulu untuk penggunaan kuki iklan."
      ]
    },
    {
      "heading": "5. Maklumat yang Disimpan Semasa Pembayaran",
      "paragraphs": [
        "Apabila membayar untuk produk berbayar (laporan keserasian PDF), maklumat pesanan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang.",
        "**Nilai yang dimasukkan untuk pengiraan keserasian dan PDF yang dihasilkan tidak disimpan walaupun selepas pembayaran.** Prinsip di atas tetap sama tanpa mengira sama ada pembayaran dilakukan atau tidak. Item yang disimpan adalah seperti berikut dan tidak termasuk maklumat yang mengenal pasti pengguna seperti nama, maklumat hubungan, dan alamat."
      ],
      "bullets": [
        "Nombor pesanan dan pengenalan pembayaran",
        "Jumlah pembayaran, mata wang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Jenis produk, status pemprosesan, bilangan muat turun dokumen, waktu pesanan",
        "Bahasa skrin pada waktu pesanan dan pengenalan kawasan pembayaran (dalam negara, luar negara)",
        "Tempoh penyimpanan — Rekod berkaitan pembayaran dan penyampaian barang akan disimpan selama 5 tahun dan rekod berkaitan aduan atau penyelesaian pertikaian akan disimpan selama 3 tahun sebelum dimusnahkan, mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Perdagangan Elektronik."
      ]
    },
    {
      "heading": "6. Penyediaan kepada Pihak Ketiga dan Pemindahan Pemprosesan",
      "paragraphs": [
        "Tiada maklumat peribadi yang mengenal pasti pengguna disimpan, jadi tiada maklumat peribadi yang diberikan kepada pihak ketiga. Pemprosesan pembayaran diamanahkan kepada penyedia berikut.",
        "Infrastruktur hosting {hostingProvider} digunakan untuk operasi perkhidmatan, dan dalam proses ini, rekod akses di bawah Seksyen 3 diproses mengikut dasar penyedia tersebut.",
        "Pembayaran domestik diproses oleh Toss Payments, manakala pembayaran luar negara diproses melalui PayPal oleh PortOne. Maklumat kaedah pembayaran seperti nombor kad dan nombor akaun diproses secara langsung oleh penyedia ini, dan perkhidmatan tidak menerima atau menyimpannya."
      ]
    },
    {
      "heading": "7. Hak Pengguna",
      "paragraphs": [
        "Nilai yang dimasukkan untuk pengiraan keserasian tidak disimpan, jadi tiada pihak yang boleh diminta untuk melihat, membetulkan, atau memadam. Rekod pesanan yang tinggal selepas pembayaran mempunyai kewajipan untuk disimpan selama tempoh yang ditetapkan oleh undang-undang, dan tidak boleh dipadamkan dalam tempoh tersebut, tetapi akan dimusnahkan selepas tempoh itu.",
        "Pengguna boleh menghapus semua jejak input hanya dengan menghapus pautan hasil di bar alamat pelayar.",
        "Jika ada pertanyaan berkaitan penggunaan perkhidmatan, sila hubungi melalui maklumat di bawah."
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
        "Jika dasar ini diubah, tarikh berkuat kuasa dan butiran perubahan akan diterbitkan di halaman ini. Jika terdapat perubahan yang nyata dalam pemprosesan seperti permulaan penyiapan iklan atau penjualan produk berbayar, makluman akan diberikan terlebih dahulu."
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
