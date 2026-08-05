import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Dasar Pemprosesan Data Peribadi",
  "intro": "Saju-Link tidak menyimpan maklumat yang diperlukan untuk pembacaan saju. Dasar ini menerangkan apa yang diterima oleh perkhidmatan, apa yang tidak disimpan, dan apa yang direkod secara automatik.",
  "sections": [
    {
      "heading": "1. Maklumat yang Tidak Disimpan",
      "paragraphs": [
        "Tarikh lahir, waktu kelahiran, tempat kelahiran, jantina, dan nama yang dipanggil yang dimasukkan untuk pembacaan saju (saju) **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memori pelayan semasa memproses permintaan dan hilang bersama dengan respons.",
        "Ia tidak direkod dalam pangkalan data, dan tidak disimpan dalam fail berasingan. Oleh kerana tiada pendaftaran ahli, nilai yang dimasukkan tidak dihubungkan dengan individu tertentu."
      ]
    },
    {
      "heading": "2. Maklumat yang Termasuk dalam Pautan Hasil",
      "paragraphs": [
        "Alamat skrin hasil mengandungi nilai yang dimasukkan dalam bentuk yang disulitkan. Namun, nilai ini terletak selepas # dalam alamat, dan mengikut standard web, kandungan selepas # tidak dihantar oleh pelayar ke pelayan. Oleh itu, walaupun pautan hasil dibuka, hanya laluan alamat yang akan kekal dalam rekod akses pelayan.",
        "Jika pautan hasil dihantar kepada orang lain, orang itu juga boleh melihat hasil yang sama. Pautan itu sendiri mengandungi nilai yang dimasukkan, jadi keputusan untuk berkongsi adalah di tangan pengguna."
      ]
    },
    {
      "heading": "3. Maklumat yang Dikumpul Secara Automatik",
      "paragraphs": [
        "Tiada maklumat yang dikumpul untuk mengenal pasti pengguna oleh perkhidmatan. Namun, rekod minimum yang diperlukan untuk operasi perkhidmatan web secara automatik disimpan oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, waktu akses, jenis pelayar, dan rekod akses pelayan umum yang lain",
        "Maklumat negara — hanya digunakan untuk secara automatik menentukan bahasa skrin dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Kuki dan Iklan",
      "paragraphs": [
        "Perkhidmatan itu sendiri tidak menggunakan kuki untuk menjejak pengguna.",
        "Pada masa ini, tiada iklan yang dipaparkan dalam perkhidmatan ini. Jika iklan dipaparkan pada masa hadapan, penyedia iklan (contohnya, Google) mungkin menggunakan kuki untuk tujuan paparan iklan. Dalam kes itu, klausa ini akan diubah terlebih dahulu untuk menjelaskan apa yang berubah sebelum ia bermula."
      ]
    },
    {
      "heading": "5. Maklumat yang Disimpan Semasa Pembayaran",
      "paragraphs": [
        "Pada masa ini, tiada produk berbayar yang dijual, jadi tiada maklumat yang disimpan berkaitan dengan pembayaran.",
        "Apabila jualan bermula, maklumat berikut akan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang. **Pada masa itu, nilai yang dimasukkan untuk pembacaan saju dan PDF yang dihasilkan tidak akan disimpan,** dan maklumat yang mengenal pasti pengguna seperti nama, nombor telefon, dan alamat juga tidak akan diterima."
      ],
      "bullets": [
        "Nombor pesanan dan pengenalan pembayaran",
        "Jumlah pembayaran, mata wang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Pengelasan produk, status pemprosesan, bilangan muat turun dokumen, waktu pesanan",
        "Bahasa skrin pada waktu pesanan dan pengelasan kawasan pembayaran (dalam negara, luar negara)",
        "Tempoh penyimpanan — Rekod berkaitan pembayaran dan pembekalan barang akan disimpan selama 5 tahun dan rekod berkaitan aduan atau pertikaian pengguna akan disimpan selama 3 tahun sebelum dimusnahkan, mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Perdagangan Elektronik."
      ]
    },
    {
      "heading": "6. Penyediaan kepada Pihak Ketiga dan Pemprosesan Pihak Ketiga",
      "paragraphs": [
        "Tiada maklumat peribadi yang disimpan, jadi tiada maklumat peribadi yang diberikan kepada pihak ketiga.",
        "Perkhidmatan menggunakan infrastruktur hosting {hostingProvider} untuk operasi, dan dalam proses ini, rekod akses di atas diproses mengikut dasar penyedia tersebut.",
        "Apabila jualan produk berbayar bermula, pembayaran domestik akan diserahkan kepada Toss Payments, dan pembayaran luar negara akan diserahkan kepada PortOne (PayPal). Maklumat kaedah pembayaran seperti nombor kad dan nombor akaun akan diproses secara langsung oleh penyedia ini, dan perkhidmatan tidak akan menerima maklumat tersebut."
      ]
    },
    {
      "heading": "7. Hak Pengguna",
      "paragraphs": [
        "Tiada maklumat peribadi yang disimpan, jadi tiada pihak yang boleh diminta untuk melihat, membetulkan, atau memadam.",
        "Pengguna boleh menghapus semua jejak input hanya dengan menghapus pautan hasil dalam bar alamat pelayar.",
        "Jika ada pertanyaan berkaitan penggunaan perkhidmatan, sila maklumkan kepada kami melalui maklumat hubungan di bawah."
      ]
    },
    {
      "heading": "8. Maklumat Peribadi Kanak-Kanak",
      "paragraphs": [
        "Perkhidmatan ini tidak ditujukan kepada kanak-kanak di bawah umur 14 tahun dan tidak mengumpul maklumat peribadi daripada kanak-kanak."
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
        "Jika dasar ini diubah, tarikh berkuat kuasa dan butiran perubahan akan diterbitkan di halaman ini. Jika terdapat perubahan yang nyata dalam pemprosesan seperti paparan iklan atau permulaan jualan produk berbayar, kami akan memaklumkan terlebih dahulu tentang perubahan tersebut."
      ]
    }
  ],
  "effectiveLabel": "Tarikh Berkuat Kuasa"
};

const d1 = {
  "title": "Terma Penggunaan",
  "intro": "Terma ini menetapkan syarat penggunaan Saju-Link (selepas ini dirujuk sebagai \"perkhidmatan\"). Dengan menggunakan perkhidmatan ini, anda dianggap telah bersetuju dengan terma ini.",
  "effectiveLabel": "Tarikh Berkuatkuasa",
  "sections": [
    {
      "heading": "1. Ciri Perkhidmatan",
      "paragraphs": [
        "Perkhidmatan ini menunjukkan carta saju (사주) berdasarkan tarikh lahir dan waktu kelahiran yang dimasukkan, dengan menerapkan peraturan tradisional Mingli (명리) untuk menunjukkan kekuatan elemen lima, kekuatan dan kelemahan hari, serta tempat pertemuan antara hari dan carta asal sebagai rujukan.",
        "Skor dan penjelasan yang diberikan adalah **rujukan dari perspektif Mingli tradisional dan bukan ramalan saintifik atau kepastian mengenai masa depan, kesihatan, atau harta peribadi.** Skor yang rendah tidak bermakna hari tersebut adalah buruk, dan skor yang tinggi tidak menjamin apa-apa.",
        "**Ayat penjelasan untuk laporan berbayar ditulis oleh AI generatif.** Namun, semua nilai seperti skor, ganji, dan kekuatan elemen dikira oleh enjin peraturan perkhidmatan, dan AI tidak mengubah atau mencipta nilai tersebut. Jika penjelasan tidak dapat dibuat, naratif yang ditulis dengan nilai yang dikira oleh enjin akan dimasukkan di tempat yang sama, dan jumlah halaman dokumen serta item yang dimasukkan adalah seperti yang dinyatakan dalam perkara 3 di bawah."
      ]
    },
    {
      "heading": "2. Yuran Penggunaan",
      "paragraphs": [
        "Perkhidmatan ini disediakan secara percuma dan tidak memerlukan pendaftaran ahli.",
        "Apabila jualan produk berbayar (saju life reading report PDF dan premium life reading report PDF) bermula, syarat di bawah klausa 3 akan dikenakan. Terma ini akan diberitahu semula sebelum permulaan jualan."
      ]
    },
    {
      "heading": "3. Produk Berbayar dan Pengembalian",
      "paragraphs": [
        "Produk berbayar yang dijual adalah **laporan pembacaan hidup saju PDF dua jenis**. Kedua-duanya menghasilkan dokumen dari hasil layar, dan juga mengandungi maklumat yang tidak terdapat di layar.",
        "**Laporan Pembacaan Hidup Saju PDF (A4 5 halaman)** — Mengandungi kecenderungan dan kekuatan yang diwarisi, perkara yang perlu diperhatikan, lapan karakter dari natal chart saju, kekuatan elemen lima dan kekuatan hari lahir, tenaga yang diperlukan sekarang, ramalan hari ini dan empat bidang kehidupan (kewangan, cinta, kerjaya, kesihatan). Pembayaran domestik {priceDomestic} (termasuk VAT), pembayaran luar negara {priceGlobal}.",
        "**Laporan Premium Pembacaan Hidup PDF (A4 7 halaman)** — Menambah dua halaman kepada laporan pembacaan hidup. Mengandungi sepuluh karakter dari empat tiang dan Wang Sang Hyu Su Sa (musim yang menempatkan setiap tenaga di posisi mana), ramalan tahun ini, pengiraan item skor hari ini, dan butiran pembetulan waktu Jin Tai Yang. Pembayaran domestik {priceAffinityDomestic} (termasuk VAT), pembayaran luar negara {priceAffinityGlobal}.",
        "Pembayaran domestik boleh dilakukan melalui Toss Payments menggunakan kad kredit/debit dan pembayaran mudah (Toss Pay, Kakao Pay, Naver Pay, Payco, dll.), manakala pembayaran luar negara melalui PayPal melalui PortOne. Jumlah akhir adalah berdasarkan jumlah yang ditunjukkan di skrin pembayaran.",
        "**Perkhidmatan tidak menyimpan input pengguna atau fail PDF yang dihasilkan.** Setelah pembayaran diluluskan, dokumen akan dihasilkan dan dihantar serta tidak ada yang disimpan di pelayan. Oleh itu, fail yang dimuat turun perlu disimpan oleh pengguna secara langsung.",
        "Sekiranya muat turun terhenti atau fail hilang, anda boleh memuat turun semula **hingga 5 kali** dengan pesanan yang sama. Namun, jika input hilang di luar skrin hasil, ia tidak dapat dihasilkan semula, jadi sila simpan fail segera setelah pembayaran."
      ],
      "bullets": [
        "**Anda boleh membatalkan dan mendapatkan pengembalian penuh** pada bila-bila masa sebelum muat turun dimulakan selepas pembayaran.",
        "**Setelah muat turun selesai,** pengembalian kerana perubahan fikiran tidak dibenarkan. Ini adalah kandungan digital yang disediakan serta-merta dan tidak dapat dipulihkan, yang termasuk dalam alasan pembatasan pengembalian seperti yang ditetapkan dalam Seksyen 17(2) Undang-Undang Perlindungan Pengguna dalam Perdagangan Elektronik.",
        "**Jika dokumen tidak dihasilkan kerana ralat sistem, fail tidak dapat dibuka, atau jumlah pembayaran berbeza dari pesanan,** ia akan diproses sebagai pengeluaran semula atau pengembalian penuh.",
        "**Ketidakpuasan terhadap kandungan hasil** tidak dianggap sebagai alasan untuk pengembalian. Penjelasan saju adalah bahan rujukan dari perspektif tradisional dan sifatnya telah diberitahu sebelum pembayaran (lihat item 1 di atas).",
        "Permintaan semula setelah menggunakan semua 5 kali pengeluaran semula tidak dianggap sebagai alasan untuk pengembalian.",
        "**Jika seorang remaja membuat pembayaran tanpa persetujuan wakil sah,** individu tersebut atau wakil sah boleh membatalkan pembayaran tersebut. Sila maklumkan kepada kami melalui kontak di bawah untuk mendapatkan pengembalian."
      ]
    },
    {
      "heading": "4. Mengenai Hasil Pengiraan",
      "paragraphs": [
        "Semua skor dikira mengikut peraturan yang ditetapkan, jadi jika nilai yang sama dimasukkan, hasil yang sama akan sentiasa diperoleh.",
        "Jika waktu kelahiran tidak dimasukkan, pengiraan akan dilakukan tanpa mengambil kira si ju (時柱), jadi hasilnya mungkin berbeza.",
        "Pengiraan manse (万岁历) menggunakan perpustakaan pengiraan yang terbuka, dan hasilnya mungkin berbeza bergantung kepada cara pemprosesan musim dan zon waktu."
      ]
    },
    {
      "heading": "5. Tanggungjawab Pengguna",
      "paragraphs": [
        "Pengguna boleh memasukkan tarikh lahir orang lain, tetapi tidak boleh menggunakan hasil tersebut untuk merugikan orang lain.",
        "Jangan gunakan hasil perkhidmatan sebagai asas untuk membuat keputusan yang mempengaruhi hak orang lain seperti perkahwinan, perceraian, pengambilan pekerja, atau transaksi. Perkhidmatan ini tidak dibuat untuk tujuan tersebut."
      ]
    },
    {
      "heading": "6. Tindakan Dilarang",
      "paragraphs": [
        "Tindakan berikut tidak dibenarkan."
      ],
      "bullets": [
        "Menghantar permintaan berlebihan menggunakan alat automasi yang mengganggu operasi perkhidmatan",
        "Menyampaikan hasil perkhidmatan seolah-olah ia adalah fakta atau hasil penilaian pakar",
        "Menggandakan atau mengubahsuai perkhidmatan untuk menyediakan perkhidmatan yang sama"
      ]
    },
    {
      "heading": "7. Penafian",
      "paragraphs": [
        "Perkhidmatan ini hanya menyediakan bahan rujukan, dan kami tidak bertanggungjawab terhadap sebarang keputusan yang dibuat oleh pengguna berdasarkan hasil tersebut dan akibatnya.",
        "Kami tidak bertanggungjawab terhadap sebarang kerugian yang timbul akibat gangguan perkhidmatan disebabkan oleh sebab-sebab di luar kawalan kami seperti bencana alam, gangguan penyedia infrastruktur, dan lain-lain."
      ]
    },
    {
      "heading": "8. Hak Kekayaan Intelektual",
      "paragraphs": [
        "Hak atas tampilan, teks, dan implementasi aturan perhitungan dari layanan ini adalah milik operator. Pengguna dapat menyimpan atau membagikan hasil untuk tujuan pribadi."
      ]
    },
    {
      "heading": "9. Perubahan Terma dan Undang-Undang yang Digunakan",
      "paragraphs": [
        "Sekiranya terma diubah, ia akan diterbitkan di halaman ini bersama dengan tarikh berkuat kuasa.",
        "Terma ini tertakluk kepada undang-undang Republik Korea, dan sebarang pertikaian berkaitan penggunaan perkhidmatan akan mengikuti prosedur yang ditetapkan oleh undang-undang yang berkaitan."
      ]
    }
  ]
};

const d2 = {
  "title": "Dasar Pemulangan dan Pembatalan",
  "intro": "Ini adalah kriteria untuk pembatalan dan pemulangan saju (사주) laporan pembacaan PDF. Kami telah mengumpulkan isi yang sama seperti dalam klausa 3.",
  "sections": [
    {
      "heading": "1. Sifat Produk",
      "paragraphs": [
        "Produk yang dijual adalah **laporan pembacaan saju (사주) PDF (A4 5 halaman)** dan **laporan premium pembacaan saju (사주) PDF (A4 7 halaman)**, dan kedua-duanya adalah kandungan digital yang dibuat dan dihantar serta-merta setelah pembayaran diluluskan.",
        "**Perkhidmatan tidak menyimpan input pengguna atau fail PDF yang dihasilkan.** Oleh itu, fail yang dimuat turun perlu disimpan oleh pengguna sendiri."
      ]
    },
    {
      "heading": "2. Pembatalan Pesanan",
      "paragraphs": [
        "Ia mengikuti kriteria yang ditetapkan oleh undang-undang perdagangan elektronik."
      ],
      "bullets": [
        "**Sebelum muat turun bermula,** anda boleh membatalkan dan mendapatkan pemulangan penuh pada bila-bila masa.",
        "**Setelah muat turun selesai,** pembatalan pesanan kerana perubahan fikiran adalah terhad. Ini adalah kandungan digital yang disediakan sebaik sahaja pembayaran dibuat dan tidak boleh dipulihkan, yang termasuk dalam alasan terhad yang ditetapkan dalam Seksyen 17(2) undang-undang mengenai perlindungan pengguna dalam perdagangan elektronik. Kami memaklumkan dan mendapatkan persetujuan mengenai perkara ini di skrin pembayaran."
      ]
    },
    {
      "heading": "3. Kes Pemulangan Penuh",
      "paragraphs": [
        "Dalam kes berikut, kami akan memeriksa alasan dan memproses pengeluaran semula atau pemulangan penuh."
      ],
      "bullets": [
        "Jika dokumen tidak dapat dihasilkan kerana ralat sistem",
        "Jika fail yang dimuat turun tidak dapat dibuka",
        "Jika jumlah pembayaran berbeza daripada pesanan",
        "**Jika pembayaran dibuat oleh individu yang belum mencapai umur dewasa tanpa persetujuan wakil sah.** — Individu tersebut atau wakil sah boleh meminta pembatalan."
      ]
    },
    {
      "heading": "4. Kes yang Bukan Alasan Pemulangan",
      "paragraphs": [],
      "bullets": [
        "**Ketidakpuasan terhadap isi keputusan.** Pembacaan saju (사주) adalah bahan rujukan dari perspektif tradisional dan sifatnya telah dinyatakan sebelum pembayaran.",
        "Permintaan semula setelah menggunakan semua 5 kali pengeluaran semula."
      ]
    },
    {
      "heading": "5. Cara Memohon",
      "paragraphs": [
        "Untuk pemulangan atau pertanyaan, sila hubungi pusat pelanggan ({customerCenter}) atau melalui email ({email}). Memberikan nombor pesanan akan mempercepatkan pengesahan.",
        "Pemulangan akan dikembalikan melalui kaedah pembayaran yang digunakan, dan bergantung kepada syarikat kad/pembayaran, ia mungkin mengambil masa 3-7 hari bekerja untuk diproses."
      ]
    }
  ],
  "effectiveLabel": "Tarikh Berkuatkuasa"
};

const d3 = {
  "title": "Panduan Harga",
  "intro": "Memberikan informasi tentang ruang lingkup layanan gratis dan harga produk berbayar.",
  "sections": [
    {
      "heading": "1. Gratis",
      "paragraphs": [
        "**Pembacaan saju (사주) dan pemeriksaan ramalan hari ini adalah gratis.** Pendaftaran anggota tidak diperlukan.",
        "Anda dapat melihat delapan karakter dari natal chart, kekuatan lima elemen, kekuatan dan kelemahan hari lahir, skor dan peringkat ramalan hari ini, serta skor dari empat bidang kehidupan di layar."
      ]
    },
    {
      "heading": "2. Laporan Pembacaan Hidup Saju PDF (Berbayar)",
      "paragraphs": [
        "Pembayaran domestik {priceDomestic} (termasuk pajak) · Pembayaran internasional {priceGlobal}",
        "Hasil di layar akan dibuat menjadi dokumen PDF berukuran **A4 5 halaman**. Ini mencakup sampul dan ringkasan, kecenderungan dan kekuatan bawaan, hal-hal yang perlu diperhatikan, kekuatan dan kelemahan natal chart dan lima elemen, ramalan hari ini, serta empat bidang kehidupan dalam satu dokumen.",
        "Anda dapat mengunduh kembali **hingga 5 kali** dengan pesanan yang sama. Namun, jika nilai input hilang setelah keluar dari layar hasil, Anda tidak dapat membuatnya lagi, jadi harap simpan file segera setelah pembayaran selesai."
      ]
    },
    {
      "heading": "3. Laporan Pembacaan Hidup Premium Saju PDF (Berbayar)",
      "paragraphs": [
        "Pembayaran domestik {priceAffinityDomestic} (termasuk pajak) · Pembayaran internasional {priceAffinityGlobal}",
        "Ini adalah **A4 7 halaman** dengan tambahan dua halaman dari laporan pembacaan hidup. Tambahan tersebut mencakup sepuluh dewa dari empat pilar, Wang Sang Hyu Su Sa, serta rincian penyesuaian skor tahunan dan hari ini. Ini adalah angka dasar yang tidak ditampilkan di layar.",
        "Syarat untuk penerbitan ulang sama dengan laporan pembacaan hidup."
      ]
    },
    {
      "heading": "4. Metode Pembayaran",
      "paragraphs": [
        "**Domestik** — Anda dapat menggunakan kartu kredit/debit dan pembayaran mudah (Toss Pay, Kakao Pay, Naver Pay, Payco, dll.) melalui Toss Payments.",
        "**Internasional** — Anda dapat membayar melalui PayPal menggunakan PortOne.",
        "Jumlah akhir yang harus dibayar mengikuti jumlah yang ditampilkan di layar pembayaran."
      ]
    },
    {
      "heading": "5. Perubahan Harga",
      "paragraphs": [
        "Jika ada perubahan harga, kami akan mempostingnya di halaman ini terlebih dahulu. Harga yang telah dibayar untuk pesanan yang sudah selesai tidak akan terpengaruh oleh perubahan harga."
      ]
    }
  ],
  "effectiveLabel": "Tanggal Berlaku"
};

const d4 = {
  "title": "Dasar Pemprosesan Data Peribadi",
  "intro": "Saju-Link tidak menyimpan maklumat yang diperlukan untuk pembacaan saju. Dasar ini menerangkan apa yang diterima oleh perkhidmatan, apa yang tidak disimpan, dan apa yang direkod secara automatik.",
  "sections": [
    {
      "heading": "1. Maklumat yang tidak disimpan",
      "paragraphs": [
        "Tarikh lahir, waktu kelahiran, tempat kelahiran, jantina, dan nama yang digunakan yang dimasukkan untuk pembacaan saju (saju) **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memori pelayan semasa memproses permintaan dan hilang bersama dengan respons.",
        "Ia tidak direkod dalam pangkalan data dan tidak disimpan dalam fail berasingan. Oleh kerana tiada pendaftaran ahli, nilai yang dimasukkan tidak dikaitkan dengan individu tertentu."
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
        "Tiada maklumat yang dikumpul oleh perkhidmatan untuk mengenal pasti pengguna. Namun, rekod minimum yang diperlukan untuk operasi perkhidmatan web secara automatik disimpan oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, tarikh dan waktu akses, jenis pelayar, dan rekod akses pelayan yang umum",
        "Maklumat negara — hanya digunakan untuk menentukan bahasa skrin secara automatik dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Kuki dan iklan",
      "paragraphs": [
        "Perkhidmatan itu sendiri tidak menggunakan kuki untuk mengenal pasti atau mengesan pengguna. Maklumat yang dimasukkan untuk pembacaan saju tidak disampaikan kepada pengiklan.",
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
        "Apabila penjualan bermula, maklumat berikut akan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang. **Pada masa itu, nilai yang dimasukkan untuk pembacaan saju dan PDF yang dihasilkan tidak akan disimpan,** dan maklumat yang mengenal pasti pengguna seperti nama, nombor hubungan, dan alamat juga tidak akan diterima."
      ],
      "bullets": [
        "Nombor pesanan dan pengenalan pembayaran",
        "Jumlah pembayaran, mata wang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Jenis produk, status pemprosesan, bilangan muat turun dokumen, waktu pesanan",
        "Bahasa skrin pada waktu pesanan dan pengenalan kawasan pembayaran (dalam negara, luar negara)",
        "Tempoh penyimpanan — Rekod mengenai pembayaran dan pembekalan barang mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Perdagangan Elektronik akan disimpan selama 5 tahun, dan rekod mengenai aduan atau penyelesaian pertikaian pengguna akan disimpan selama 3 tahun sebelum dimusnahkan."
      ]
    },
    {
      "heading": "6. Penyediaan kepada pihak ketiga dan pemindahan pemprosesan",
      "paragraphs": [
        "Tiada maklumat peribadi yang disimpan, jadi tiada maklumat peribadi yang diberikan kepada pihak ketiga.",
        "Perkhidmatan ini menggunakan infrastruktur hosting {hostingProvider} untuk operasi, dan dalam proses ini, rekod akses di atas diproses mengikut dasar penyedia tersebut.",
        "Apabila penjualan produk berbayar bermula, pembayaran domestik akan diserahkan kepada Toss Payments, dan pembayaran luar negara kepada PortOne (PayPal). Maklumat mengenai kaedah pembayaran seperti nombor kad dan nombor akaun akan diproses secara langsung oleh penyedia tersebut, dan perkhidmatan tidak akan menerima maklumat tersebut."
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
      "heading": "9. Pegawai perlindungan data peribadi",
      "paragraphs": [
        "Pegawai perlindungan: {privacyOfficer}",
        "Pertanyaan: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Perubahan dasar",
      "paragraphs": [
        "Sekiranya dasar ini diubah, tarikh berkuat kuasa dan kandungan perubahan akan diterbitkan di halaman ini. Jika terdapat perubahan yang nyata dalam pemprosesan seperti penerbitan iklan atau permulaan penjualan produk berbayar, kami akan memaklumkan terlebih dahulu mengenai perubahan tersebut."
      ]
    }
  ],
  "effectiveLabel": "Tarikh Berkuat Kuasa"
};

const d5 = {
  "title": "Dasar Pemprosesan Data Peribadi",
  "intro": "Saju-Link tidak menyimpan maklumat yang diperlukan untuk pembacaan saju. Dasar ini menerangkan apa yang diterima oleh perkhidmatan, apa yang tidak disimpan, dan apa yang direkod secara automatik.",
  "sections": [
    {
      "heading": "1. Maklumat yang tidak disimpan",
      "paragraphs": [
        "Tarikh lahir, waktu kelahiran, tempat kelahiran, jantina, dan nama yang digunakan dalam pembacaan saju **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memproses permintaan dan hilang bersama dengan respons.",
        "Tidak direkod dalam pangkalan data, dan tidak disimpan dalam fail berasingan. Oleh kerana tiada pendaftaran ahli, nilai yang dimasukkan tidak dikaitkan dengan individu tertentu."
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
        "Tiada maklumat yang dikumpul oleh perkhidmatan untuk mengenal pasti pengguna. Namun, rekod minimum yang diperlukan untuk operasi perkhidmatan web secara automatik disimpan oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, masa akses, jenis pelayar, dan rekod akses pelayan yang umum",
        "Maklumat negara — hanya digunakan untuk secara automatik menentukan bahasa skrin dan tidak disimpan"
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
        "Apabila produk berbayar (laporan PDF) dibayar, maklumat pesanan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang.",
        "**Nilai yang dimasukkan dalam pembacaan saju dan PDF yang dihasilkan tidak disimpan walaupun selepas pembayaran.** Prinsip dalam perkara 1 tetap sama tanpa mengira sama ada pembayaran dibuat atau tidak. Item yang disimpan adalah seperti berikut, dan maklumat yang mengenal pasti pengguna seperti nama, maklumat hubungan, dan alamat tidak termasuk."
      ],
      "bullets": [
        "Nombor pesanan dan pengenalan pembayaran",
        "Jumlah pembayaran, mata wang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Jenis produk, status pemprosesan, bilangan muat turun dokumen, masa pesanan",
        "Bahasa skrin pada masa pesanan dan pengenalan kawasan pembayaran (domestik, luar negara)",
        "Tempoh penyimpanan — Rekod mengenai pembayaran dan pembekalan barang mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Perdagangan Elektronik akan disimpan selama 5 tahun, dan rekod mengenai aduan atau penyelesaian pertikaian pengguna akan disimpan selama 3 tahun sebelum dimusnahkan."
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
        "Oleh kerana nilai yang dimasukkan dalam pembacaan saju tidak disimpan, tiada subjek untuk permintaan akses, pembetulan, atau pemadaman. Rekod pesanan yang tinggal selepas pembayaran mempunyai kewajipan untuk disimpan selama tempoh yang ditetapkan oleh undang-undang, dan tidak dapat dipadamkan dalam tempoh tersebut, tetapi akan dimusnahkan selepas tempoh tersebut.",
        "Pengguna boleh menghapus semua jejak input hanya dengan menghapus pautan keputusan dalam bar alamat pelayar.",
        "Jika terdapat sebarang pertanyaan berkaitan penggunaan perkhidmatan, sila maklumkan kepada kami melalui maklumat hubungan di bawah."
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
        "Jika dasar ini diubah, tarikh berkuat kuasa dan butiran perubahan akan diterbitkan di halaman ini. Jika terdapat perubahan sebenar dalam pemprosesan seperti memulakan paparan iklan atau penjualan produk berbayar, kami akan memaklumkan terlebih dahulu tentang fakta perubahan tersebut."
      ]
    }
  ],
  "effectiveLabel": "Tarikh berkuat kuasa"
};

const d6 = {
  "title": "Terma Penggunaan",
  "intro": "Terma ini menetapkan syarat penggunaan Saju-Link (selepas ini dirujuk sebagai \"perkhidmatan\"). Dengan menggunakan perkhidmatan ini, anda dianggap telah bersetuju dengan terma ini.",
  "effectiveLabel": "Tarikh Berkuatkuasa",
  "sections": [
    {
      "heading": "1. Ciri Perkhidmatan",
      "paragraphs": [
        "Perkhidmatan ini menunjukkan carta saju (사주) dan kekuatan lima elemen berdasarkan tarikh lahir dan waktu kelahiran yang dimasukkan, menggunakan peraturan tradisional Mingli (명리). Ia juga merujuk kepada kekuatan hari dan kedudukan di mana hari tersebut bertemu dengan carta asal.",
        "Skor dan penjelasan yang diberikan adalah **rujukan dari perspektif Mingli tradisional dan bukan ramalan saintifik atau kepastian mengenai masa depan, kesihatan, atau harta peribadi.** Skor yang rendah tidak bermakna hari tersebut adalah buruk, dan skor yang tinggi tidak menjamin apa-apa.",
        "**Ayat penjelasan untuk laporan berbayar ditulis oleh AI generatif.** Namun, semua nilai seperti skor, ganji, dan kekuatan lima elemen dikira oleh enjin peraturan perkhidmatan, dan AI tidak mengubah atau mencipta nilai tersebut. Jika penjelasan tidak dapat dihasilkan, naratif yang ditulis dengan nilai yang dikira oleh enjin akan dimasukkan di tempat yang sama, dan jumlah halaman dokumen serta item yang dimasukkan adalah seperti yang dinyatakan dalam perkara 3 di bawah."
      ]
    },
    {
      "heading": "2. Yuran Penggunaan",
      "paragraphs": [
        "Pembacaan saju (사주) dan semakan ramalan harian adalah percuma dan tidak memerlukan pendaftaran ahli.",
        "Menerima hasil dalam bentuk laporan PDF adalah berbayar. Harga dan syarat akan ditunjukkan dalam klausa 3 di bawah dan pada skrin pembayaran."
      ]
    },
    {
      "heading": "3. Produk Berbayar dan Pengembalian",
      "paragraphs": [
        "Produk berbayar yang dijual adalah **laporan pembacaan kehidupan saju PDF dua jenis**. Keduanya menghasilkan dokumen dari hasil layar, dan juga mencakup informasi yang tidak ada di layar.",
        "**Laporan Pembacaan Kehidupan Saju PDF (A4 5 halaman)** — mencakup kecenderungan dan kekuatan bawaan, hal-hal yang perlu diperhatikan, delapan karakter dari natal chart saju, kekuatan elemen lima dan kekuatan hari, energi yang diperlukan saat ini, serta ramalan hari ini dan empat bidang kehidupan (kekayaan, cinta, pekerjaan, kesehatan). Pembayaran domestik {priceDomestic} (termasuk pajak), pembayaran internasional {priceGlobal}.",
        "**Laporan Premium Pembacaan Kehidupan PDF (A4 7 halaman)** — menambahkan dua halaman pada laporan umum 5 halaman. Mencakup sepuluh karakter dari empat pilar dan analisis posisi energi berdasarkan musim, ramalan tahun ini, penyesuaian skor hari ini berdasarkan kategori, dan rincian koreksi waktu yang tepat. Pembayaran domestik {priceAffinityDomestic} (termasuk pajak), pembayaran internasional {priceAffinityGlobal}.",
        "Pembayaran domestik dapat dilakukan melalui Toss Payments menggunakan kartu kredit/debit dan pembayaran mudah (Toss Pay, Kakao Pay, Naver Pay, Payco, dll.), sedangkan pembayaran internasional dilakukan melalui PayPal melalui PortOne. Jumlah akhir mengikuti jumlah yang ditampilkan di layar pembayaran.",
        "**Layanan ini tidak menyimpan input pengguna maupun file PDF yang dihasilkan.** Setelah pembayaran disetujui, dokumen akan dibuat dan diunduh secara langsung tanpa menyimpan apa pun di server. Oleh karena itu, file yang diunduh harus disimpan oleh pengguna secara langsung.",
        "Jika unduhan terhenti atau file hilang, file dapat diunduh kembali **hingga 5 kali** dengan pesanan yang sama. Namun, jika input hilang di luar layar hasil, tidak dapat dibuat kembali, jadi harap simpan file segera setelah pembayaran."
      ],
      "bullets": [
        "**Sebelum unduhan dimulai setelah pembayaran,** dapat dibatalkan kapan saja dan mendapatkan pengembalian penuh.",
        "**Setelah unduhan selesai,** pembatalan karena perubahan pikiran tidak dapat dilakukan. Ini adalah konten digital yang disediakan segera setelah pembayaran dan tidak dapat dikembalikan ke keadaan semula, yang termasuk dalam alasan pembatasan pembatalan sesuai dengan Pasal 17 Ayat 2 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik.",
        "**Jika dokumen tidak dibuat karena kesalahan sistem, file tidak dapat dibuka, atau jumlah pembayaran berbeda dari pesanan,** akan diproses dengan penerbitan ulang atau pengembalian penuh.",
        "**Keluhan mengenai isi hasil** tidak termasuk dalam alasan pengembalian. Pembacaan saju adalah referensi dari perspektif tradisional dan sifatnya telah diinformasikan sebelum pembayaran (lihat Ayat 1 di atas).",
        "Permintaan ulang setelah menggunakan semua 5 kali penerbitan ulang tidak termasuk dalam alasan pengembalian.",
        "**Jika seorang remaja melakukan pembayaran tanpa persetujuan wali hukum,** baik remaja tersebut atau wali hukum dapat membatalkan pembayaran tersebut. Silakan beri tahu kami melalui kontak di bawah untuk mendapatkan pengembalian."
      ]
    },
    {
      "heading": "4. Mengenai Hasil Pengiraan",
      "paragraphs": [
        "Semua skor dikira mengikut peraturan yang ditetapkan, oleh itu, jika nilai yang sama dimasukkan, hasil yang sama akan sentiasa diperoleh.",
        "Jika waktu kelahiran tidak dimasukkan, pengiraan akan dilakukan tanpa mengambil kira si ju (時柱), jadi hasilnya mungkin berbeza.",
        "Pengiraan manse (万岁历) menggunakan perpustakaan pengiraan yang terbuka, dan hasilnya mungkin berbeza bergantung kepada cara pemprosesan solar term dan zon waktu."
      ]
    },
    {
      "heading": "5. Tanggungjawab Pengguna",
      "paragraphs": [
        "Pengguna boleh memasukkan tarikh lahir orang lain, tetapi tidak boleh menggunakan hasilnya untuk merugikan orang lain.",
        "Jangan gunakan hasil perkhidmatan sebagai asas untuk membuat keputusan yang mempengaruhi hak orang lain dalam perkahwinan, perceraian, pengambilan pekerja, transaksi, dan sebagainya. Perkhidmatan ini tidak dibuat untuk tujuan tersebut."
      ]
    },
    {
      "heading": "6. Tindakan Dilarang",
      "paragraphs": [
        "Tindakan berikut tidak dibenarkan."
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
        "Perkhidmatan ini hanya menyediakan bahan rujukan, dan kami tidak bertanggungjawab terhadap sebarang keputusan yang dibuat oleh pengguna berdasarkan hasil tersebut dan akibatnya.",
        "Kami tidak bertanggungjawab terhadap sebarang kerugian yang timbul akibat gangguan perkhidmatan disebabkan oleh sebab-sebab di luar kawalan kami seperti bencana alam, gangguan penyedia infrastruktur, dan lain-lain."
      ]
    },
    {
      "heading": "8. Hak Kekayaan Intelektual",
      "paragraphs": [
        "Hak atas tampilan, teks, dan implementasi aturan perhitungan layanan adalah milik operator. Pengguna dapat menyimpan atau membagikan hasil untuk tujuan pribadi."
      ]
    },
    {
      "heading": "9. Perubahan Terma dan Undang-Undang yang Mengawal",
      "paragraphs": [
        "Sekiranya terma diubah, ia akan diterbitkan di halaman ini bersama dengan tarikh berkuat kuasa.",
        "Terma ini adalah tertakluk kepada undang-undang Republik Korea, dan sebarang pertikaian yang berkaitan dengan penggunaan perkhidmatan akan mengikuti prosedur yang ditetapkan oleh undang-undang yang berkenaan."
      ]
    }
  ]
};

const d7 = {
  "title": "Dasar Pemprosesan Data Peribadi",
  "intro": "Saju-Link tidak menyimpan maklumat yang diperlukan untuk pembacaan saju. Dasar ini menerangkan apa yang diterima oleh perkhidmatan, apa yang tidak disimpan, dan apa yang direkod secara automatik.",
  "sections": [
    {
      "heading": "1. Maklumat yang Tidak Disimpan",
      "paragraphs": [
        "Tarikh lahir, waktu kelahiran, tempat lahir, jantina, dan nama yang dipanggil yang dimasukkan untuk pembacaan saju **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memproses permintaan dan akan hilang bersama dengan respons.",
        "Ia tidak direkod dalam pangkalan data dan tidak disimpan dalam fail berasingan. Tiada pendaftaran ahli, jadi nilai yang dimasukkan tidak dikaitkan dengan individu tertentu."
      ]
    },
    {
      "heading": "2. Maklumat dalam Pautan Keputusan",
      "paragraphs": [
        "Alamat skrin keputusan mengandungi nilai yang dimasukkan dalam bentuk yang disulitkan. Namun, nilai ini terletak selepas # dalam alamat, dan mengikut piawaian web, kandungan selepas # tidak dihantar oleh pelayar ke pelayan. Oleh itu, walaupun pautan keputusan dibuka, hanya laluan alamat yang akan kekal dalam rekod akses pelayan.",
        "Jika pautan keputusan dihantar kepada orang lain, orang itu juga boleh melihat keputusan yang sama. Pautan itu sendiri mengandungi nilai yang dimasukkan, jadi keputusan untuk berkongsi adalah di tangan pengguna."
      ]
    },
    {
      "heading": "3. Maklumat yang Dikumpul Secara Automatik",
      "paragraphs": [
        "Tiada maklumat yang dikumpul oleh perkhidmatan untuk mengenal pasti pengguna. Namun, rekod minimum yang diperlukan untuk operasi perkhidmatan web secara automatik disimpan oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, tarikh dan waktu akses, jenis pelayar, dan rekod akses pelayan yang umum",
        "Maklumat negara — hanya digunakan untuk secara automatik menentukan bahasa skrin dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Kuki dan Iklan",
      "paragraphs": [
        "Perkhidmatan itu sendiri tidak menggunakan kuki untuk mengenal pasti atau mengesan pengguna. Maklumat yang dimasukkan untuk pembacaan saju tidak disampaikan kepada pengiklan.",
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
      "heading": "5. Maklumat yang Disimpan Semasa Pembayaran",
      "paragraphs": [
        "Apabila membayar untuk produk berbayar (laporan PDF), maklumat pesanan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang.",
        "**Nilai yang dimasukkan untuk pembacaan saju dan PDF yang dihasilkan tidak disimpan walaupun selepas pembayaran.** Prinsip dalam perenggan 1 tetap sama tanpa mengira sama ada pembayaran dibuat atau tidak. Item yang disimpan adalah seperti berikut, dan maklumat yang mengenal pasti pengguna seperti nama, maklumat hubungan, dan alamat tidak termasuk."
      ],
      "bullets": [
        "Nombor pesanan dan pengenalan pembayaran",
        "Jumlah pembayaran, mata wang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Jenis produk, status pemprosesan, bilangan muat turun dokumen, dan waktu pesanan",
        "Bahasa skrin pada waktu pesanan dan pengenalan kawasan pembayaran (dalam negara, luar negara)",
        "Tempoh penyimpanan — Rekod berkaitan pembayaran dan penyampaian barang akan disimpan selama 5 tahun dan rekod berkaitan aduan atau penyelesaian pertikaian akan disimpan selama 3 tahun sebelum dimusnahkan, mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Perdagangan Elektronik."
      ]
    },
    {
      "heading": "6. Penyediaan kepada Pihak Ketiga dan Pemindahan Pemprosesan",
      "paragraphs": [
        "Tiada maklumat peribadi yang mengenal pasti pengguna disimpan, jadi tiada maklumat peribadi yang diberikan kepada pihak ketiga. Pemprosesan pembayaran diserahkan kepada penyedia di bawah.",
        "Infrastruktur hosting {hostingProvider} digunakan untuk operasi perkhidmatan, dan dalam proses ini, rekod akses dalam perenggan 3 diproses mengikut dasar penyedia tersebut.",
        "Pembayaran dalam negara diproses oleh Toss Payments, manakala pembayaran luar negara diproses melalui PayPal oleh PortOne. Maklumat kaedah pembayaran seperti nombor kad dan nombor akaun diproses secara langsung oleh penyedia ini, dan perkhidmatan tidak menerima atau menyimpannya."
      ]
    },
    {
      "heading": "7. Hak Pengguna",
      "paragraphs": [
        "Oleh kerana nilai yang dimasukkan untuk pembacaan saju tidak disimpan, tiada pihak yang boleh diminta untuk melihat, membetulkan, atau memadam. Rekod pesanan yang tinggal selepas pembayaran mempunyai kewajipan untuk disimpan selama tempoh yang ditetapkan oleh undang-undang, dan tidak boleh dipadamkan dalam tempoh tersebut, tetapi akan dimusnahkan selepas tempoh tersebut.",
        "Pengguna boleh menghapus semua jejak input hanya dengan menghapus pautan keputusan dalam bar alamat pelayar.",
        "Jika terdapat sebarang pertanyaan berkaitan penggunaan perkhidmatan, sila maklumkan kepada kami melalui maklumat hubungan di bawah."
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
        "Jika dasar ini diubah, tarikh berkuat kuasa dan butiran perubahan akan diterbitkan di halaman ini. Jika terdapat perubahan yang benar-benar mempengaruhi pemprosesan seperti permulaan penyiapan iklan atau penjualan produk berbayar, kami akan memaklumkan terlebih dahulu tentang perubahan tersebut."
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
