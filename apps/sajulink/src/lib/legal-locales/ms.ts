import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Dasar Pemprosesan Data Peribadi",
  "intro": "Saju-Link tidak menyimpan maklumat yang diperlukan untuk pembacaan saju. Dasar ini menerangkan apa yang diterima oleh perkhidmatan, apa yang tidak disimpan, dan apa yang direkod secara automatik.",
  "sections": [
    {
      "heading": "1. Maklumat yang tidak disimpan",
      "paragraphs": [
        "Tarikh lahir, waktu kelahiran, tempat kelahiran, jantina, dan nama yang dipanggil yang dimasukkan untuk pembacaan saju (saju) **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memori pelayan semasa memproses permintaan dan hilang bersama dengan respons.",
        "Ia tidak direkod dalam pangkalan data dan tidak disimpan dalam fail berasingan. Oleh kerana tiada pendaftaran ahli, nilai yang dimasukkan tidak dikaitkan dengan individu tertentu."
      ]
    },
    {
      "heading": "2. Maklumat yang terkandung dalam pautan keputusan",
      "paragraphs": [
        "Alamat skrin keputusan mengandungi nilai yang dimasukkan dalam bentuk yang disulitkan. Namun, nilai ini terletak selepas # dalam alamat, dan mengikut piawaian web, kandungan selepas # tidak dihantar oleh pelayar ke pelayan. Oleh itu, walaupun pautan keputusan dibuka, hanya laluan alamat yang akan kekal dalam rekod akses pelayan.",
        "Jika pautan keputusan dihantar kepada orang lain, orang itu juga boleh melihat keputusan yang sama. Pautan itu sendiri mengandungi nilai yang dimasukkan, jadi keputusan untuk berkongsi adalah di tangan pengguna."
      ]
    },
    {
      "heading": "3. Maklumat yang dikumpul secara automatik",
      "paragraphs": [
        "Tiada maklumat yang dikumpul oleh perkhidmatan untuk mengenal pasti pengguna. Namun, rekod minimum yang diperlukan untuk operasi perkhidmatan web secara automatik disimpan oleh penyedia infrastruktur."
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
        "Pada masa ini, tiada iklan yang dipaparkan dalam perkhidmatan ini. Jika iklan mula dipaparkan pada masa hadapan, penyedia iklan (contohnya, Google) mungkin menggunakan kuki untuk tujuan paparan iklan. Dalam kes itu, klausa ini akan diubah terlebih dahulu untuk menjelaskan apa yang berubah sebelum ia bermula."
      ]
    },
    {
      "heading": "5. Maklumat yang disimpan semasa pembayaran",
      "paragraphs": [
        "Pada masa ini, tiada produk berbayar yang dijual, jadi tiada maklumat yang disimpan berkaitan dengan pembayaran.",
        "Apabila penjualan bermula, maklumat berikut akan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang. **Pada masa itu juga, nilai yang dimasukkan untuk pembacaan saju dan PDF yang dihasilkan tidak akan disimpan**, dan maklumat yang mengenal pasti pengguna seperti nama, maklumat hubungan, dan alamat juga tidak akan diterima."
      ],
      "bullets": [
        "Nombor pesanan dan pengenalan pembayaran",
        "Jumlah pembayaran, mata wang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Pemisahan produk, status pemprosesan, bilangan muat turun dokumen, waktu pesanan",
        "Bahasa skrin pada waktu pesanan dan pemisahan kawasan pembayaran (dalam negara, luar negara)",
        "Tempoh penyimpanan — Rekod berkaitan pembayaran dan pembekalan barang akan disimpan selama 5 tahun dan rekod berkaitan aduan atau pertikaian pengguna akan disimpan selama 3 tahun sebelum dimusnahkan mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Transaksi Elektronik."
      ]
    },
    {
      "heading": "6. Penyediaan kepada pihak ketiga dan pemindahan pemprosesan",
      "paragraphs": [
        "Tiada maklumat peribadi yang disimpan, jadi tiada maklumat peribadi yang diberikan kepada pihak ketiga.",
        "Perkhidmatan menggunakan infrastruktur hosting {hostingProvider} untuk operasi, dan dalam proses ini, rekod akses di atas diproses mengikut dasar penyedia tersebut.",
        "Apabila penjualan produk berbayar bermula, pembayaran domestik akan diuruskan oleh Toss Payments, dan pembayaran luar negara akan diuruskan oleh PortOne (PayPal). Maklumat kaedah pembayaran seperti nombor kad dan nombor akaun akan diproses secara langsung oleh penyedia tersebut, dan perkhidmatan tidak akan menerima maklumat tersebut."
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
        "Jika dasar ini diubah, tarikh berkuat kuasa dan perubahan akan diterbitkan di halaman ini. Jika terdapat perubahan yang nyata dalam pemprosesan seperti pengiklanan atau penjualan produk berbayar, kami akan memaklumkan terlebih dahulu tentang perubahan tersebut."
      ]
    }
  ],
  "effectiveLabel": "Tarikh berkuat kuasa"
};

const d1 = {
  "title": "Terma Penggunaan",
  "intro": "Terma ini menetapkan syarat penggunaan Saju-Link (selepas ini dirujuk sebagai “perkhidmatan”). Dengan menggunakan perkhidmatan ini, anda dianggap telah bersetuju dengan terma ini.",
  "effectiveLabel": "Tarikh Berkuatkuasa",
  "sections": [
    {
      "heading": "1. Ciri Perkhidmatan",
      "paragraphs": [
        "Perkhidmatan ini memberikan maklumat berdasarkan tarikh lahir dan waktu kelahiran yang dimasukkan, dengan menggunakan peraturan tradisional Mingli (saju) untuk menunjukkan carta natal saju dan kekuatan lima elemen, kekuatan dan kelemahan hari, serta tempat pertemuan antara hari tersebut dan carta natal sebagai rujukan.",
        "Skor dan penjelasan yang diberikan adalah **rujukan dari perspektif Mingli tradisional dan bukan ramalan saintifik atau kepastian mengenai masa depan, kesihatan, atau harta peribadi.** Skor yang rendah tidak bermakna hari tersebut adalah buruk, dan skor yang tinggi tidak menjamin apa-apa.",
        "**Ayat penjelasan untuk laporan berbayar ditulis oleh AI generatif.** Namun, semua nilai seperti skor, ganji, dan kekuatan elemen dikira oleh enjin peraturan perkhidmatan, dan AI tidak mengubah atau mencipta nilai tersebut. Jika penjelasan tidak dapat dihasilkan, deskripsi yang ditulis dengan nilai yang dikira oleh enjin akan dimasukkan di tempat yang sama, dan jumlah halaman dokumen serta item yang dimasukkan adalah seperti yang dinyatakan dalam perkara 3 di bawah."
      ]
    },
    {
      "heading": "2. Yuran Penggunaan",
      "paragraphs": [
        "Perkhidmatan ini disediakan secara percuma dan tidak memerlukan pendaftaran keahlian.",
        "Apabila penjualan produk berbayar (saju life reading report PDF dan premium life reading report PDF) dimulakan, syarat di bawah klausa 3 akan terpakai. Terma ini akan diberitahu semula sebelum permulaan penjualan."
      ]
    },
    {
      "heading": "3. Produk Berbayar dan Pengembalian",
      "paragraphs": [
        "Produk berbayar yang dijual adalah **saju life reading report PDF (평생 사주와 올해의 운세 리포트 PDF)**. Ini adalah dokumen yang dibuat berdasarkan hasil di layar, dan juga mencakup informasi yang tidak ditampilkan di layar.",
        "**A4 9 halaman** — mencakup sampul dan ringkasan, kecenderungan dan kekuatan bawaan serta hal-hal yang perlu diperhatikan, delapan karakter dari natal chart (원국) dan kekuatan lima elemen, kekuatan dan kelemahan hari lahir serta energi yang diperlukan saat ini (용신), sepuluh dewa dari empat pilar dan posisi yang menonjol dalam saju ini, empat bidang kehidupan yang dilihat dari natal chart (keuangan, cinta, pekerjaan, kesehatan) dan dasar-dasarnya, rincian koreksi waktu nyata (진태양시), serta ramalan tahun ini. Pembayaran domestik {priceDomestic} (termasuk pajak), pembayaran internasional {priceGlobal}.",
        "**Ramalan hari ini tidak termasuk dalam dokumen ini.** Nilai yang berubah setiap hari disediakan secara gratis di layar, dan dokumen ini terdiri dari penjelasan natal chart yang tidak akan berubah seumur hidup dan ramalan tahun ini.",
        "Pembayaran domestik dapat dilakukan melalui Toss Payments menggunakan kartu kredit/debit dan pembayaran mudah (Toss Pay, Kakao Pay, Naver Pay, Payco, dll.), sementara pembayaran internasional dilakukan melalui PayPal melalui PortOne. Jumlah akhir mengikuti jumlah yang ditampilkan di layar pembayaran.",
        "**Layanan ini tidak menyimpan input pengguna maupun file PDF yang dihasilkan.** Setelah pembayaran disetujui, dokumen dibuat dan diunduh secara langsung tanpa menyimpan apa pun di server. Oleh karena itu, file yang diunduh harus disimpan oleh pengguna sendiri.",
        "Jika unduhan terhenti atau file hilang, file dapat diunduh kembali **hingga 5 kali** dengan pesanan yang sama. Namun, jika input hilang di luar layar hasil, tidak dapat dibuat kembali, jadi harap simpan file segera setelah pembayaran."
      ],
      "bullets": [
        "**Sebelum unduhan dimulai setelah pembayaran,** dapat dibatalkan kapan saja dan mendapatkan pengembalian penuh.",
        "**Setelah unduhan selesai,** pembatalan karena perubahan pikiran dibatasi. Ini adalah konten digital yang disediakan segera setelah pembayaran dan tidak dapat dikembalikan ke keadaan semula, yang termasuk dalam alasan pembatasan pembatalan sesuai dengan Pasal 17 Ayat 2 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik.",
        "**Jika dokumen tidak dibuat karena kesalahan sistem, file tidak dapat dibuka, atau jumlah pembayaran berbeda dari pesanan,** akan diproses dengan penerbitan ulang atau pengembalian penuh.",
        "**Keluhan mengenai isi hasil** tidak termasuk dalam alasan pengembalian. Penjelasan saju adalah referensi dari perspektif tradisional dan sifatnya telah diinformasikan sebelum pembayaran (lihat Ayat 1 di atas).",
        "Permintaan ulang setelah menggunakan semua 5 kali penerbitan ulang tidak termasuk dalam alasan pengembalian.",
        "**Jika pembayaran dilakukan oleh orang yang belum dewasa tanpa persetujuan wali hukum,** baik orang tersebut atau wali hukum dapat membatalkan pembayaran tersebut. Silakan beri tahu kami melalui kontak di bawah untuk mendapatkan pengembalian."
      ]
    },
    {
      "heading": "4. Mengenai Hasil Pengiraan",
      "paragraphs": [
        "Semua skor dikira mengikut peraturan yang ditetapkan, jadi jika nilai yang sama dimasukkan, hasil yang sama akan diperoleh setiap masa.",
        "Jika waktu kelahiran tidak dimasukkan, pengiraan akan dilakukan tanpa mengambil kira siu (時柱), jadi hasilnya mungkin berbeza. Semakin tepat lokasi kelahiran dipilih, semakin tepat pengiraan siu akan menjadi.",
        "Pengiraan manse (万岁历) menggunakan perpustakaan pengiraan yang terbuka, dan hasilnya mungkin berbeza bergantung kepada cara pemprosesan solar term dan zon waktu."
      ]
    },
    {
      "heading": "5. Tanggungjawab Pengguna",
      "paragraphs": [
        "Pengguna boleh memasukkan tarikh lahir orang lain, tetapi tidak boleh menggunakan hasilnya untuk merugikan orang lain.",
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
        "Menyajikan hasil perkhidmatan seolah-olah ia adalah fakta atau hasil penilaian pakar",
        "Menggandakan atau mengubahsuai perkhidmatan untuk menyediakan perkhidmatan yang sama"
      ]
    },
    {
      "heading": "7. Penafian",
      "paragraphs": [
        "Perkhidmatan ini hanya menyediakan bahan rujukan, dan tidak bertanggungjawab terhadap sebarang keputusan yang dibuat oleh pengguna berdasarkan hasil yang diperoleh.",
        "Kami tidak bertanggungjawab terhadap sebarang kerugian yang timbul akibat gangguan perkhidmatan disebabkan oleh sebab-sebab di luar kawalan kami seperti bencana alam atau gangguan daripada penyedia infrastruktur."
      ]
    },
    {
      "heading": "8. Hak Kekayaan Intelek",
      "paragraphs": [
        "Hak atas tampilan, teks, dan implementasi aturan perhitungan dari layanan ini adalah milik operator. Pengguna dapat menyimpan atau membagikan hasil untuk tujuan pribadi."
      ]
    },
    {
      "heading": "9. Perubahan Terma dan Undang-Undang yang Mengawal",
      "paragraphs": [
        "Sekiranya terma diubah, ia akan diterbitkan di halaman ini bersama dengan tarikh berkuat kuasa.",
        "Terma ini adalah tertakluk kepada undang-undang Republik Korea, dan sebarang pertikaian yang berkaitan dengan penggunaan perkhidmatan akan mengikuti prosedur yang ditetapkan oleh undang-undang yang berkaitan."
      ]
    }
  ]
};

const d2 = {
  "title": "Dasar Pembatalan dan Pengembalian Wang",
  "intro": "Ini adalah kriteria untuk pembatalan dan pengembalian wang bagi laporan bacaan saju (사주) PDF. Kami telah mengumpulkan isi yang sama seperti dalam klausa 3.",
  "sections": [
    {
      "heading": "1. Sifat Produk",
      "paragraphs": [
        "Produk yang dijual adalah **laporan bacaan saju (사주) PDF (A4 5 halaman)** dan **laporan premium bacaan saju (사주) PDF (A4 7 halaman)**, dan kedua-duanya adalah kandungan digital yang dibuat dan dihantar serta-merta setelah pembayaran diluluskan.",
        "**Perkhidmatan tidak menyimpan input pengguna atau fail PDF yang dihasilkan.** Oleh itu, fail yang dimuat turun perlu disimpan oleh pengguna secara langsung."
      ]
    },
    {
      "heading": "2. Pembatalan Pesanan",
      "paragraphs": [
        "Kami mengikuti kriteria yang ditetapkan oleh undang-undang perdagangan elektronik."
      ],
      "bullets": [
        "**Sebelum muat turun bermula,** anda boleh membatalkan dan mendapatkan pengembalian penuh pada bila-bila masa.",
        "**Setelah muat turun selesai,** pembatalan pesanan kerana perubahan fikiran adalah terhad. Ini adalah kandungan digital yang disediakan sejurus selepas pembayaran dan tidak dapat dipulihkan, yang termasuk dalam alasan pembatasan yang ditetapkan dalam Seksyen 17(2) Akta Perlindungan Pengguna dalam Transaksi Elektronik. Kami memberitahu dan mendapatkan persetujuan mengenai perkara ini di skrin pembayaran."
      ]
    },
    {
      "heading": "3. Kes Pengembalian Wang Penuh",
      "paragraphs": [
        "Dalam kes berikut, kami akan memeriksa alasan dan memproses pengeluaran semula atau pengembalian wang penuh."
      ],
      "bullets": [
        "Jika dokumen tidak dapat dihasilkan kerana ralat sistem",
        "Jika fail yang dimuat turun tidak dapat dibuka",
        "Jika jumlah pembayaran berbeza daripada pesanan",
        "**Jika pembayaran dibuat oleh individu yang belum mencapai umur dewasa tanpa persetujuan wakil sah.** — Individu tersebut atau wakil sahnya boleh meminta pembatalan."
      ]
    },
    {
      "heading": "4. Kes yang Tidak Layak untuk Pengembalian Wang",
      "paragraphs": [],
      "bullets": [
        "**Ketidakpuasan terhadap isi keputusan.** Bacaan saju (사주) adalah bahan rujukan dari perspektif tradisional dan sifatnya telah dinyatakan sebelum pembayaran.",
        "Permintaan semula setelah menggunakan semua 5 kali pengeluaran semula."
      ]
    },
    {
      "heading": "5. Cara Memohon",
      "paragraphs": [
        "Untuk pengembalian wang atau pertanyaan, sila hubungi pusat pelanggan ({customerCenter}) atau melalui email ({email}). Memberikan nombor pesanan akan mempercepatkan proses pengesahan.",
        "Pengembalian wang akan dikembalikan melalui kaedah pembayaran yang digunakan, dan bergantung kepada syarikat kad/pembayaran, ia mungkin mengambil masa 3 hingga 7 hari bekerja untuk diproses."
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
        "Delapan karakter dari natal chart, kekuatan lima elemen, kekuatan dan kelemahan hari, energi yang diperlukan saat ini, skor dan peringkat ramalan hari ini, serta skor dari empat bidang kehidupan dapat dilihat di layar."
      ]
    },
    {
      "heading": "2. Laporan Pembacaan Saju dan Ramalan Tahun Ini PDF (Berbayar)",
      "paragraphs": [
        "Pembayaran domestik {priceDomestic} (termasuk pajak) · Pembayaran internasional {priceGlobal}",
        "Hasil di layar akan dibuat menjadi dokumen PDF sebanyak **9 halaman A4**. Informasi yang tidak ditampilkan di layar — kekuatan dan kelemahan hari, energi yang diperlukan saat ini, sepuluh dewa dari empat pilar, posisi yang menonjol dalam saju ini, Wang Sang Hyu Su Sa, empat bidang kehidupan yang terlihat dari natal chart dan angka dasarnya, rincian koreksi Jin Tae Yang Si, ramalan tahun ini — semuanya akan disertakan.",
        "Dengan pesanan yang sama, Anda dapat mengunduh kembali hingga **5 kali**. Namun, jika nilai input hilang setelah keluar dari layar hasil, Anda tidak dapat membuatnya kembali, jadi harap simpan file segera setelah pembayaran selesai."
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
        "Jika ada perubahan harga, akan diposting terlebih dahulu di halaman ini. Harga yang telah dibayar untuk pesanan yang sudah selesai tidak akan terpengaruh oleh perubahan harga."
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
        "Tarikh lahir, waktu kelahiran, tempat kelahiran, jantina, dan nama yang dipanggil yang dimasukkan untuk pembacaan saju (saju) **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memori pelayan semasa memproses permintaan dan hilang bersama dengan respons.",
        "Ia tidak direkod dalam pangkalan data, dan tidak disimpan dalam fail berasingan. Oleh kerana tiada pendaftaran ahli, nilai yang dimasukkan tidak dikaitkan dengan individu tertentu."
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
        "Perkhidmatan itu sendiri tidak menggunakan kuki untuk mengenal pasti atau menjejak pengguna. Maklumat yang dimasukkan untuk pembacaan saju tidak disampaikan kepada pengiklan.",
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
        "Oleh kerana tiada produk berbayar yang dijual pada masa ini, tiada maklumat yang disimpan berkaitan dengan pembayaran.",
        "Apabila penjualan bermula, maklumat berikut akan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang. **Pada masa itu, nilai yang dimasukkan untuk pembacaan saju dan PDF yang dihasilkan tidak akan disimpan,** dan maklumat yang mengenal pasti pengguna seperti nama, maklumat hubungan, dan alamat juga tidak akan diterima."
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
      "heading": "6. Penyediaan kepada pihak ketiga dan pemindahan pemprosesan",
      "paragraphs": [
        "Oleh kerana tiada data peribadi yang disimpan, tiada data peribadi yang disediakan kepada pihak ketiga.",
        "Perkhidmatan ini menggunakan infrastruktur hosting {hostingProvider} untuk operasi, dan dalam proses ini, rekod akses di atas diproses mengikut dasar penyedia tersebut.",
        "Apabila penjualan produk berbayar bermula, pembayaran domestik akan diserahkan kepada Toss Payments, dan pembayaran luar negara kepada PortOne (PayPal). Maklumat kaedah pembayaran seperti nombor kad dan nombor akaun akan diproses secara langsung oleh penyedia tersebut, dan perkhidmatan tidak akan menerima maklumat tersebut."
      ]
    },
    {
      "heading": "7. Hak pengguna",
      "paragraphs": [
        "Oleh kerana tiada data peribadi yang disimpan, tiada pihak yang boleh diminta untuk melihat, membetulkan, atau memadam.",
        "Pengguna boleh menghapus semua jejak input hanya dengan menghapus pautan keputusan dalam bar alamat pelayar.",
        "Jika ada pertanyaan berkaitan penggunaan perkhidmatan, sila maklumkan kepada kami melalui maklumat hubungan di bawah."
      ]
    },
    {
      "heading": "8. Data peribadi kanak-kanak",
      "paragraphs": [
        "Perkhidmatan ini tidak menyasarkan kanak-kanak di bawah umur 14 tahun dan tidak mengumpul data peribadi daripada kanak-kanak."
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
        "Sekiranya dasar ini diubah, tarikh berkuat kuasa dan butiran perubahan akan diterbitkan di halaman ini. Jika terdapat perubahan yang nyata dalam pemprosesan seperti penerbitan iklan atau permulaan penjualan produk berbayar, kami akan memaklumkan terlebih dahulu tentang perubahan tersebut."
      ]
    }
  ],
  "effectiveLabel": "Tarikh Berkuat Kuasa"
};

const d5 = {
  "title": "Dasar Pemprosesan Data Peribadi",
  "intro": "Saju-Link tidak menyimpan maklumat yang diperlukan untuk pembacaan saju (사주). Dasar ini menerangkan apa yang diterima oleh perkhidmatan, apa yang tidak disimpan, dan apa yang direkodkan secara automatik.",
  "effectiveLabel": "Tarikh Berkuatkuasa",
  "sections": [
    {
      "heading": "1. Maklumat yang Tidak Disimpan",
      "paragraphs": [
        "Tarikh lahir, waktu kelahiran, tempat kelahiran, jantina, dan nama yang digunakan dalam pembacaan saju (사주) **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memproses permintaan dan akan hilang bersama dengan respons.",
        "Kami tidak merekodnya dalam pangkalan data, dan tidak menyimpannya dalam fail berasingan. Oleh kerana tiada pendaftaran ahli, nilai yang dimasukkan tidak akan dikaitkan dengan individu tertentu."
      ]
    },
    {
      "heading": "2. Maklumat yang Termasuk dalam Pautan Hasil",
      "paragraphs": [
        "Alamat pada skrin hasil mengandungi nilai input yang telah disandi. Namun, nilai ini terletak selepas # dalam alamat, dan menurut piawaian web, kandungan selepas # tidak dihantar oleh pelayar ke pelayan. Oleh itu, walaupun pautan hasil dibuka, hanya laluan alamat yang akan kekal dalam rekod akses pelayan.",
        "Jika pautan hasil dihantar kepada orang lain, orang tersebut juga boleh melihat hasil yang sama. Pautan itu sendiri mengandungi nilai input, jadi keputusan untuk berkongsi adalah di atas budi bicara pengguna."
      ]
    },
    {
      "heading": "3. Maklumat yang Dikumpul Secara Automatik",
      "paragraphs": [
        "Tiada maklumat yang dikumpul untuk mengenal pasti pengguna. Walau bagaimanapun, rekod minimum yang diperlukan untuk operasi perkhidmatan akan disimpan secara automatik oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP sambungan, tarikh dan masa sambungan, jenis pelayar dan rekod sambungan pelayan yang umum",
        "Maklumat negara — hanya digunakan untuk menentukan bahasa skrin secara automatik dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Kuki dan Iklan",
      "paragraphs": [
        "Perkhidmatan itu sendiri tidak menggunakan kuki untuk menjejak pengguna.",
        "Pada masa ini, perkhidmatan ini tidak memaparkan iklan. Sekiranya iklan dipaparkan pada masa hadapan, penyedia iklan (contohnya, Google AdSense) mungkin menggunakan kuki untuk memaparkan iklan. Pada ketika itu, klausa ini akan diubah terlebih dahulu untuk menjelaskan apa yang berbeza sebelum ia bermula."
      ]
    },
    {
      "heading": "5. Maklumat yang Disimpan Semasa Pembayaran",
      "paragraphs": [
        "Apabila anda membuat pembayaran untuk produk berbayar (laporan saju (사주) PDF), maklumat pesanan akan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang.",
        "**Nilai yang dimasukkan dalam pembacaan saju (사주) dan PDF yang dihasilkan tidak akan disimpan walaupun telah dibayar.** Prinsip dalam perenggan 1 tetap sama tanpa mengira status pembayaran. Item yang disimpan adalah seperti berikut, dan maklumat yang mengenal pasti pengguna seperti nama, maklumat hubungan, dan alamat tidak termasuk. "
      ],
      "bullets": [
        "Nombor pesanan dan pengenalan pembayaran",
        "Jumlah pembayaran, mata wang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Jenis produk, status pemprosesan, bilangan muat turun dokumen, waktu pesanan",
        "Bahasa skrin pada waktu pesanan dan pengenalan kawasan pembayaran (domestik, luar negara)",
        "Tempoh penyimpanan — Mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Perdagangan Elektronik, rekod pembayaran dan pembekalan barang akan disimpan selama 5 tahun, dan rekod aduan atau penyelesaian pertikaian pengguna akan disimpan selama 3 tahun sebelum dimusnahkan."
      ]
    },
    {
      "heading": "6. Pemberian dan Pemprosesan oleh Pihak Ketiga",
      "paragraphs": [
        "Kami tidak menyimpan maklumat peribadi yang mengenal pasti pengguna, oleh itu tiada maklumat peribadi yang diberikan kepada pihak ketiga. Pemprosesan pembayaran diserahkan kepada penyedia perkhidmatan di bawah.",
        "Untuk operasi perkhidmatan, kami menggunakan infrastruktur hosting {hostingProvider}, dan dalam proses ini, rekod akses yang dinyatakan dalam perenggan 3 di atas akan diproses mengikut dasar penyedia tersebut.",
        "Pembayaran domestik diproses oleh Toss Payments, manakala pembayaran luar negara diproses melalui PayPal yang disediakan oleh PortOne. Maklumat kaedah pembayaran seperti nombor kad dan nombor akaun diproses secara langsung oleh penyedia tersebut, dan perkhidmatan tidak menerima atau menyimpan maklumat tersebut."
      ]
    },
    {
      "heading": "7. Hak Pengguna",
      "paragraphs": [
        "Input untuk bacaan saju (사주) tidak disimpan, sehingga tidak ada pihak yang dapat diminta untuk melihat, mengubah, atau menghapusnya. Rekod pesanan yang tersisa setelah pembayaran wajib disimpan selama tempoh yang ditetapkan oleh undang-undang, dan tidak dapat dihapuskan dalam tempoh tersebut; setelah tempoh berakhir, ia akan dimusnahkan.",
        "Pengguna dapat menghapus semua jejak input hanya dengan menghapus pautan hasil di bar alamat pelayar.",
        "Jika ada pertanyaan berkaitan dengan penggunaan perkhidmatan, sila maklumkan kepada kami melalui maklumat hubungan di bawah."
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
        "Pegawai Perlindungan Data: {privacyOfficer}",
        "Pertanyaan: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Perubahan Dasar",
      "paragraphs": [
        "Sekiranya terdapat perubahan pada dasar ini, tarikh berkuat kuasa dan butiran perubahan akan diterbitkan di halaman ini. Jika terdapat perubahan yang nyata dalam cara pemprosesan, seperti memulakan pengiklanan atau penjualan produk berbayar, kami akan memaklumkan terlebih dahulu mengenai perubahan tersebut."
      ]
    }
  ]
};

const d6 = {
  "title": "Terma Penggunaan",
  "intro": "Terma ini menetapkan syarat penggunaan Saju-Link (selanjutnya disebut sebagai “perkhidmatan”). Dengan menggunakan perkhidmatan ini, anda dianggap telah bersetuju dengan terma ini.",
  "effectiveLabel": "Tarikh Berkuatkuasa",
  "sections": [
    {
      "heading": "1. Ciri Perkhidmatan",
      "paragraphs": [
        "Perkhidmatan ini menunjukkan carta saju (사주) berdasarkan tarikh lahir dan waktu kelahiran yang dimasukkan, dengan menerapkan peraturan tradisional Mingli (명리) untuk menunjukkan kekuatan elemen lima, kekuatan hari, serta posisi yang bertemu antara hari tersebut dan carta asal sebagai rujukan.",
        "Skor dan penjelasan yang diberikan adalah **rujukan dari perspektif Mingli tradisional dan bukan ramalan saintifik atau kepastian mengenai masa depan, kesihatan, atau harta peribadi.** Skor yang rendah tidak bermakna hari tersebut adalah buruk, dan skor yang tinggi tidak menjamin apa-apa.",
        "**Ayat penjelasan untuk laporan berbayar ditulis oleh AI generatif.** Namun, semua nilai seperti skor, ganji, dan kekuatan elemen dikira oleh enjin peraturan perkhidmatan, dan AI tidak mengubah atau mencipta nilai tersebut. Jika penjelasan tidak dapat dihasilkan, naratif yang ditulis dengan nilai yang dikira oleh enjin akan dimasukkan di tempat yang sama, dan jumlah halaman dokumen serta item yang dimasukkan adalah seperti yang dinyatakan dalam perkara 3 di bawah."
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
        "Produk berbayar yang dijual adalah **saju life reading report PDF (사주 총운 리포트 PDF)**. Ini adalah dokumen yang dibuat berdasarkan hasil di layar, dan juga mencakup informasi yang tidak ditampilkan di layar.",
        "**A4 9 halaman** — mencakup sampul dan ringkasan, kecenderungan dan kekuatan bawaan serta hal-hal yang perlu diperhatikan, delapan karakter dari saju (사주) dan kekuatan lima elemen, kekuatan dan kelemahan hari lahir serta energi yang diperlukan saat ini (yongsin), sepuluh dewa dari empat pilar dan posisi yang menonjol dalam saju ini, empat bidang kehidupan yang dilihat dari asal (keuangan, cinta, pekerjaan, kesehatan) dan dasar-dasarnya, rincian koreksi waktu nyata, serta ramalan tahun ini. Pembayaran domestik {priceDomestic} (termasuk pajak), pembayaran internasional {priceGlobal}.",
        "**Ramalan hari ini tidak termasuk dalam dokumen ini.** Nilai yang berubah setiap hari disediakan secara gratis di layar, dan dokumen ini terdiri dari penjelasan asal yang tidak akan berubah seumur hidup dan ramalan tahun ini.",
        "Pembayaran domestik dapat dilakukan melalui Toss Payments menggunakan kartu kredit/debit dan pembayaran mudah (Toss Pay, Kakao Pay, Naver Pay, Payco, dll.), sedangkan pembayaran internasional dilakukan melalui PayPal melalui PortOne. Jumlah akhir mengikuti jumlah yang ditampilkan di layar pembayaran.",
        "**Layanan tidak menyimpan input pengguna maupun file PDF yang dihasilkan.** Setelah pembayaran disetujui, dokumen akan dibuat dan diunduh segera, dan tidak ada yang tersisa di server. Oleh karena itu, file yang diunduh harus disimpan oleh pengguna secara langsung.",
        "Jika unduhan terhenti atau file hilang, file dapat diunduh kembali **hingga 5 kali** dengan pesanan yang sama. Namun, jika input hilang di luar layar hasil, tidak dapat dibuat kembali, jadi harap simpan file segera setelah pembayaran."
      ],
      "bullets": [
        "**Sebelum unduhan dimulai setelah pembayaran,** Anda dapat membatalkan kapan saja dan mendapatkan pengembalian penuh.",
        "**Setelah unduhan selesai,** pembatalan karena perubahan pikiran dibatasi. Ini adalah konten digital yang disediakan segera setelah pembayaran dan tidak dapat dikembalikan ke keadaan semula, yang termasuk dalam alasan pembatasan pembatalan sesuai dengan Pasal 17 Ayat 2 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik.",
        "**Jika dokumen tidak dibuat karena kesalahan sistem, file tidak dapat dibuka, atau jumlah pembayaran berbeda dari pesanan,** akan diproses dengan penerbitan ulang atau pengembalian penuh.",
        "**Keluhan tentang isi hasil** tidak termasuk dalam alasan pengembalian. Penjelasan saju (사주) adalah referensi dari perspektif tradisional dan sifatnya telah diinformasikan sebelum pembayaran (lihat Ayat 1 di atas).",
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
      "heading": "7. Pengecualian Tanggungjawab",
      "paragraphs": [
        "Perkhidmatan ini hanya menyediakan bahan rujukan, dan tidak bertanggungjawab terhadap keputusan yang dibuat oleh pengguna berdasarkan hasil tersebut dan akibatnya.",
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
      "heading": "1. Maklumat yang tidak disimpan",
      "paragraphs": [
        "Tarikh lahir, waktu kelahiran, tempat lahir, jantina, dan nama yang digunakan yang dimasukkan untuk pembacaan saju (saju) **tidak disimpan di mana-mana.** Ia hanya digunakan dalam memori pelayan semasa memproses permintaan dan hilang bersama dengan respons.",
        "Ia tidak direkod dalam pangkalan data dan tidak disimpan dalam fail berasingan. Tiada pendaftaran ahli, jadi nilai yang dimasukkan tidak dihubungkan dengan individu tertentu."
      ]
    },
    {
      "heading": "2. Maklumat yang terkandung dalam pautan keputusan",
      "paragraphs": [
        "Alamat skrin keputusan mengandungi nilai yang dimasukkan dalam bentuk yang disulitkan. Namun, nilai ini terletak selepas # dalam alamat, dan mengikut piawaian web, kandungan selepas # tidak dihantar oleh pelayar ke pelayan. Oleh itu, walaupun pautan keputusan dibuka, hanya laluan alamat yang akan kekal dalam rekod akses pelayan.",
        "Jika pautan keputusan dihantar kepada orang lain, orang itu juga boleh melihat keputusan yang sama. Pautan itu sendiri mengandungi nilai yang dimasukkan, jadi keputusan untuk berkongsi adalah di tangan pengguna."
      ]
    },
    {
      "heading": "3. Maklumat yang dikumpul secara automatik",
      "paragraphs": [
        "Tiada maklumat yang dikumpul oleh perkhidmatan untuk mengenal pasti pengguna. Namun, rekod minimum yang diperlukan untuk operasi perkhidmatan web secara automatik disimpan oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, waktu akses, jenis pelayar, dan rekod akses pelayan yang umum",
        "Maklumat negara — hanya digunakan untuk secara automatik menentukan bahasa skrin dan tidak disimpan"
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
        "Pengguna boleh mematikan iklan tersuai di tetapan iklan Google (google.com/settings/ads). Walaupun dimatikan, iklan itu masih akan dipaparkan, tetapi relevansinya dengan pengguna akan berkurang.",
        "Iklan tersuai dari semua penyedia pihak ketiga boleh dimatikan sekaligus di aboutads.info/choices.",
        "Terdapat juga cara untuk menyekat kuki dalam tetapan pelayar.",
        "Pengguna di Kawasan Ekonomi Eropah, UK, dan Switzerland akan terlebih dahulu diminta untuk memberikan persetujuan untuk penggunaan kuki iklan."
      ]
    },
    {
      "heading": "5. Maklumat yang disimpan semasa pembayaran",
      "paragraphs": [
        "Apabila membayar produk berbayar (laporan PDF), maklumat pesanan disimpan untuk pemprosesan pembayaran dan penyimpanan rekod transaksi mengikut undang-undang.",
        "**Nilai yang dimasukkan untuk pembacaan saju dan PDF yang dihasilkan tidak disimpan walaupun selepas pembayaran.** Prinsip dalam perkara 1 tetap sama tanpa mengira sama ada pembayaran dilakukan. Item yang disimpan adalah seperti berikut dan tidak termasuk maklumat yang mengenal pasti pengguna seperti nama, maklumat hubungan, dan alamat."
      ],
      "bullets": [
        "Nombor pesanan dan pengenalan pembayaran",
        "Jumlah pembayaran, mata wang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Jenis produk, status pemprosesan, bilangan muat turun dokumen, waktu pesanan",
        "Bahasa skrin pada waktu pesanan dan pengenalan kawasan pembayaran (domestik, luar negara)",
        "Tempoh penyimpanan — Rekod berkaitan pembayaran dan penyediaan barang mengikut Seksyen 6 Akta Perlindungan Pengguna dalam Perdagangan Elektronik akan disimpan selama 5 tahun, dan rekod berkaitan aduan atau penyelesaian pertikaian pengguna akan disimpan selama 3 tahun sebelum dimusnahkan."
      ]
    },
    {
      "heading": "6. Penyediaan kepada pihak ketiga dan pemindahan pemprosesan",
      "paragraphs": [
        "Tiada maklumat peribadi yang mengenal pasti pengguna disimpan, jadi tiada maklumat peribadi yang diberikan kepada pihak ketiga. Pemprosesan pembayaran diamanahkan kepada penyedia berikut.",
        "Untuk operasi perkhidmatan, infrastruktur hosting {hostingProvider} digunakan, dan dalam proses ini, rekod akses dalam perkara 3 diproses mengikut dasar penyedia tersebut.",
        "Pembayaran domestik diproses oleh Toss Payments, manakala pembayaran luar negara diproses melalui PayPal oleh PortOne. Maklumat kaedah pembayaran seperti nombor kad dan nombor akaun diproses secara langsung oleh penyedia ini, dan perkhidmatan tidak menerima atau menyimpannya."
      ]
    },
    {
      "heading": "7. Hak pengguna",
      "paragraphs": [
        "Nilai yang dimasukkan untuk pembacaan saju tidak disimpan, jadi tiada pihak yang boleh diminta untuk melihat, membetulkan, atau memadam. Rekod pesanan yang tinggal selepas pembayaran mempunyai kewajipan untuk disimpan selama tempoh yang ditetapkan oleh undang-undang, dan tidak boleh dipadamkan dalam tempoh tersebut, tetapi akan dimusnahkan selepas tempoh itu.",
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
