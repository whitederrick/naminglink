import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Kebijakan Pengolahan Data Pribadi",
  "intro": "Dreams-Link tidak menyimpan informasi yang diperlukan untuk interpretasi mimpi. Kebijakan ini menjelaskan apa yang diterima oleh layanan, apa yang tidak disimpan, dan apa yang secara otomatis dicatat.",
  "sections": [
    {
      "heading": "1. Informasi yang Tidak Disimpan",
      "paragraphs": [
        "Cerita mimpi yang Anda tulis untuk interpretasi, perasaan saat bangun, dan apakah Anda mengalami mimpi yang sama berulang kali **tidak disimpan di mana pun.** Informasi ini hanya digunakan dalam memori server selama pemrosesan permintaan dan akan hilang bersama dengan respons.",
        "Tidak dicatat dalam basis data, dan tidak disimpan dalam file terpisah. Karena tidak ada pendaftaran anggota, nilai yang dimasukkan tidak terhubung dengan individu tertentu.",
        "Cerita mimpi adalah nilai paling pribadi yang diterima oleh layanan ini. Oleh karena itu, tidak ada fitur untuk melihat kembali hasil sebelumnya (diary mimpi) — fitur tersebut hanya dapat ada jika tulisan yang Anda berikan disimpan."
      ]
    },
    {
      "heading": "2. Informasi yang Tercantum dalam Tautan Hasil",
      "paragraphs": [
        "Alamat layar hasil mencakup nilai yang dimasukkan dalam bentuk yang terkode. Namun, nilai ini terletak setelah # di alamat, dan menurut standar web, konten setelah # tidak dikirimkan oleh browser ke server. Oleh karena itu, meskipun tautan hasil dibuka, catatan akses server hanya menyimpan jalur alamat.",
        "Jika tautan hasil dikirimkan kepada orang lain, orang tersebut juga dapat melihat hasil yang sama. Tautan itu sendiri menyimpan nilai yang dimasukkan, jadi keputusan untuk membagikannya ada pada pengguna."
      ]
    },
    {
      "heading": "3. Informasi yang Dikumpulkan Secara Otomatis",
      "paragraphs": [
        "Tidak ada informasi yang dikumpulkan untuk mengidentifikasi pengguna. Namun, catatan minimum yang diperlukan untuk operasi layanan secara otomatis disimpan oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, waktu akses, jenis browser, dan catatan akses server umum lainnya",
        "Informasi negara — hanya digunakan untuk secara otomatis menentukan bahasa layar dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Cookie dan Iklan",
      "paragraphs": [
        "Layanan itu sendiri tidak menggunakan cookie untuk melacak pengguna.",
        "Saat ini, layanan ini tidak menampilkan iklan. Jika di masa depan iklan ditampilkan, penyedia iklan (misalnya, Google) dapat menggunakan cookie untuk menampilkan iklan. Pada saat itu, ketentuan ini akan diperbarui terlebih dahulu untuk menjelaskan apa yang berubah sebelum dimulai."
      ]
    },
    {
      "heading": "5. Informasi yang Disimpan Saat Pembayaran",
      "paragraphs": [
        "Saat ini, tidak ada informasi yang disimpan terkait pembayaran karena tidak ada produk berbayar yang dijual.",
        "Ketika penjualan dimulai, informasi berikut akan disimpan untuk pemrosesan pembayaran dan penyimpanan catatan transaksi sesuai dengan hukum: **pada saat itu, mimpi yang Anda tulis dan file yang dibuat tidak akan disimpan**, dan informasi yang mengidentifikasi pengguna seperti nama, kontak, dan alamat juga tidak akan diterima."
      ],
      "bullets": [
        "Nomor pesanan dan pengidentifikasi pembayaran",
        "Jumlah pembayaran, mata uang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Klasifikasi produk, status pemrosesan, jumlah unduhan dokumen, waktu pemesanan",
        "Bahasa layar pada saat pemesanan dan klasifikasi wilayah pembayaran (dalam negeri, luar negeri)",
        "Masa penyimpanan — Menurut Pasal 6 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik, catatan tentang pembayaran dan penyediaan barang akan disimpan selama 5 tahun, dan catatan tentang keluhan atau penyelesaian sengketa konsumen akan disimpan selama 3 tahun sebelum dihancurkan."
      ]
    },
    {
      "heading": "6. Penyediaan dan Penanganan Data Pribadi oleh Pihak Ketiga",
      "paragraphs": [
        "Karena tidak ada data pribadi yang disimpan, tidak ada data pribadi yang disediakan kepada pihak ketiga.",
        "Untuk menjalankan layanan, infrastruktur hosting dari {hostingProvider} digunakan, dan dalam proses ini, catatan akses yang disebutkan di atas diproses sesuai dengan kebijakan penyedia tersebut.",
        "Ketika penjualan produk berbayar dimulai, pembayaran domestik akan diserahkan kepada Toss Payments, dan pembayaran internasional akan diserahkan kepada PortOne (PayPal). Informasi metode pembayaran seperti nomor kartu dan nomor rekening akan diproses langsung oleh penyedia tersebut, dan layanan tidak akan menerima informasi tersebut."
      ]
    },
    {
      "heading": "7. Hak Pengguna",
      "paragraphs": [
        "Karena tidak ada data pribadi yang disimpan, tidak ada yang dapat diminta untuk dilihat, diperbaiki, atau dihapus.",
        "Pengguna dapat menghapus semua jejak input hanya dengan menghapus tautan hasil di bilah alamat browser.",
        "Jika ada pertanyaan terkait penggunaan layanan, silakan beri tahu kami melalui kontak di bawah ini."
      ]
    },
    {
      "heading": "8. Data Pribadi Anak",
      "paragraphs": [
        "Layanan ini tidak ditujukan untuk anak-anak di bawah usia 14 tahun dan tidak mengumpulkan data pribadi dari anak-anak."
      ]
    },
    {
      "heading": "9. Pejabat Perlindungan Data Pribadi",
      "paragraphs": [
        "Pejabat Perlindungan: {privacyOfficer}",
        "Kontak: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Perubahan Kebijakan",
      "paragraphs": [
        "Jika kebijakan ini diubah, tanggal mulai dan rincian perubahan akan diposting di halaman ini. Jika ada perubahan nyata dalam konten pemrosesan, seperti mulai menampilkan iklan atau menjual produk berbayar, kami akan memberi tahu Anda terlebih dahulu tentang perubahan tersebut."
      ]
    }
  ],
  "effectiveLabel": "Tanggal Berlaku"
};

const d1 = {
  "title": "Ketentuan Layanan",
  "intro": "Ketentuan ini menetapkan syarat penggunaan layanan Dreams-Link (selanjutnya disebut \"layanan\"). Dengan menggunakan layanan ini, Anda dianggap telah menyetujui ketentuan ini.",
  "sections": [
    {
      "heading": "1. Sifat Layanan",
      "paragraphs": [
        "Layanan ini mencari simbol dari mimpi yang ditulis oleh pengguna dan menunjukkan makna yang terkait dengan simbol tersebut sebagai referensi. Kami tidak akan mengatakan bahwa simbol yang tidak ada dalam kamus dapat ditemukan, dan tidak akan menciptakan makna yang tidak ada.",
        "Simbol dan penjelasan yang disajikan adalah **referensi dari perspektif interpretasi tradisional, dan bukan prediksi tentang masa depan atau nasihat medis, keuangan, atau hukum.** Mimpi baik tidak menjamin terjadinya sesuatu, dan mimpi buruk tidak berarti sesuatu yang buruk akan terjadi.",
        "**Hasil terkait mimpi kehamilan tidak menentukan apakah seseorang hamil atau jenis kelamin janin.** Kami hanya memberi tahu bahwa simbol yang secara tradisional dianggap sebagai mimpi kehamilan muncul, serta latar belakangnya."
      ]
    },
    {
      "heading": "2. Biaya Penggunaan",
      "paragraphs": [
        "Saat ini, layanan ini disediakan secara gratis dan tidak memerlukan pendaftaran anggota.",
        "Ketika penjualan produk berbayar (gambar kartu mimpi, laporan mimpi kehamilan dalam format PDF) dimulai, syarat di bawah pasal 3 akan berlaku. Ketentuan ini akan diinformasikan kembali sebelum dimulainya penjualan."
      ]
    },
    {
      "heading": "3. Produk Berbayar dan Pengembalian Dana",
      "paragraphs": [
        "Ada **dua jenis** produk berbayar yang dijual. Interpretasi mimpi gratis dapat digunakan tanpa pembayaran, sedangkan dua produk di bawah ini dibuat dalam bentuk yang dapat disimpan.",
        "**Kartu Mimpi** — Sebuah file gambar tunggal. Kami membuatnya menjadi satu gambar yang menyimpan simbol yang muncul dalam mimpi hari itu dan makna tradisionalnya. **Bukan dokumen (PDF).** Pembayaran domestik {priceCardDomestic} (termasuk pajak), pembayaran internasional {priceCardGlobal}.",
        "**Laporan Mimpi Kehamilan PDF** — 4 halaman. Ini berisi makna tradisional dari simbol yang muncul dan latar belakangnya dalam bentuk dokumen. **Tidak menentukan apakah seseorang hamil** — kami hanya memberi tahu bahwa simbol yang secara tradisional dianggap sebagai mimpi kehamilan muncul dalam mimpi. Pembayaran domestik {priceConceptionDomestic} (termasuk pajak), pembayaran internasional {priceConceptionGlobal}.",
        "Pembayaran domestik dapat dilakukan melalui Toss Payments menggunakan kartu kredit/debit dan pembayaran mudah (Toss Pay, Kakao Pay, Naver Pay, Payco, dll.), sedangkan pembayaran internasional dilakukan melalui PayPal melalui PortOne. Jumlah akhir mengikuti jumlah yang ditampilkan di layar pembayaran.",
        "**Layanan ini tidak menyimpan input pengguna maupun file PDF yang dibuat.** Setelah pembayaran disetujui, dokumen akan dibuat dan dikirimkan tanpa menyimpan apa pun di server. Oleh karena itu, file yang diunduh harus disimpan oleh pengguna sendiri.",
        "Untuk kasus di mana unduhan terhenti atau file hilang, Anda dapat mengunduh kembali **hingga 5 kali** dengan pesanan yang sama. Namun, jika input hilang setelah keluar dari layar hasil, tidak dapat dibuat kembali, jadi harap simpan file segera setelah pembayaran."
      ],
      "bullets": [
        "**Sebelum unduhan dimulai setelah pembayaran,** Anda dapat membatalkan kapan saja dan mendapatkan pengembalian dana penuh.",
        "**Setelah unduhan selesai,** pembatalan karena perubahan pikiran tidak diperbolehkan. Ini adalah konten digital yang disediakan segera setelah pembayaran dan tidak dapat dikembalikan ke keadaan semula, yang termasuk dalam alasan pembatasan pembatalan sesuai dengan Pasal 17 Ayat 2 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik.",
        "**Jika dokumen tidak dibuat karena kesalahan sistem, file tidak dapat dibuka, atau jumlah pembayaran berbeda dari pesanan,** akan diproses sebagai penggantian atau pengembalian dana penuh.",
        "**Keluhan tentang isi hasil** tidak termasuk dalam alasan pengembalian dana. Hasil interpretasi adalah referensi dari perspektif interpretasi tradisional dan sifatnya telah diinformasikan sebelum pembayaran (lihat pasal 1 di atas).",
        "Permintaan ulang setelah menggunakan semua 5 kali penggantian tidak termasuk dalam alasan pengembalian dana.",
        "**Jika seorang remaja melakukan pembayaran tanpa persetujuan wali hukum,** baik remaja tersebut atau wali hukum dapat membatalkan pembayaran tersebut. Silakan beri tahu kami melalui kontak di bawah ini untuk mendapatkan pengembalian dana."
      ]
    },
    {
      "heading": "4. Tentang Hasil Interpretasi",
      "paragraphs": [
        "Aturan untuk mencari simbol mengikuti kamus yang dipublikasikan dan prosedur yang ditetapkan, sehingga jika Anda menulis teks yang sama, simbol yang sama akan selalu muncul.",
        "Semakin singkat Anda menulis, semakin sedikit simbol yang akan muncul. Kami tidak dapat menemukan simbol yang tidak ada dalam kamus, dan dalam hal itu, hasilnya akan dibiarkan kosong.",
        "Kamus simbol adalah pengorganisasian literatur interpretasi mimpi yang telah diwariskan dan cerita rakyat, dan interpretasi dapat bervariasi tergantung pada daerah dan waktu."
      ]
    },
    {
      "heading": "5. Tanggung Jawab Pengguna",
      "paragraphs": [
        "Pengguna dapat menulis mimpi orang lain, tetapi tidak boleh menggunakan hasilnya untuk merugikan orang lain.",
        "Jangan gunakan hasil layanan sebagai dasar untuk keputusan yang mempengaruhi hak atau kepentingan orang, seperti kehamilan, kesehatan, investasi, atau perekrutan. Layanan ini tidak dibuat untuk tujuan tersebut."
      ]
    },
    {
      "heading": "6. Tindakan Terlarang",
      "paragraphs": [
        "Tindakan berikut tidak diperbolehkan."
      ],
      "bullets": [
        "Mengirim permintaan berlebihan dengan alat otomatis yang mengganggu operasi layanan",
        "Menyajikan hasil layanan seolah-olah itu adalah fakta atau hasil penilaian dari ahli",
        "Menggandakan atau memodifikasi layanan untuk memberikan layanan yang sama"
      ]
    },
    {
      "heading": "7. Penafian",
      "paragraphs": [
        "Layanan ini hanya menyediakan referensi, dan tidak bertanggung jawab atas keputusan yang diambil pengguna berdasarkan hasil dan konsekuensinya.",
        "Kami tidak bertanggung jawab atas kerugian yang disebabkan oleh penghentian layanan karena alasan yang tidak dapat dikendalikan, seperti bencana alam atau gangguan dari penyedia infrastruktur."
      ]
    },
    {
      "heading": "8. Hak Kekayaan Intelektual",
      "paragraphs": [
        "Hak atas tampilan, frasa, dan implementasi aturan perhitungan layanan dimiliki oleh operator. Pengguna dapat menyimpan atau membagikan hasil untuk tujuan pribadi."
      ]
    },
    {
      "heading": "9. Perubahan Ketentuan dan Hukum yang Berlaku",
      "paragraphs": [
        "Jika ketentuan diubah, akan diposting di halaman ini bersamaan dengan tanggal mulai berlaku.",
        "Ketentuan ini tunduk pada hukum Republik Korea, dan sengketa yang berkaitan dengan penggunaan layanan akan mengikuti prosedur yang ditetapkan oleh undang-undang yang relevan."
      ]
    }
  ],
  "effectiveLabel": "Tanggal Berlaku"
};

const d2 = {
  "title": "Kebijakan Pengembalian dan Pembatalan",
  "intro": "Ini adalah kriteria untuk pembatalan dan pengembalian produk berbayar. Kami telah mengumpulkan informasi yang sama seperti yang tercantum dalam pasal 3 dari syarat dan ketentuan.",
  "sections": [
    {
      "heading": "1. Sifat Produk",
      "paragraphs": [
        "Produk yang dijual adalah **kartu mimpi (dream card)** (gambar 1 lembar) dan **laporan mimpi konsepsi (태몽 리포트)** dalam format PDF, keduanya adalah konten digital yang dibuat dan dikirimkan segera setelah pembayaran disetujui.",
        "**Layanan tidak menyimpan mimpi yang Anda tulis maupun file yang dibuat.** Oleh karena itu, file yang diunduh harus disimpan oleh pengguna secara langsung."
      ]
    },
    {
      "heading": "2. Pembatalan Pesanan",
      "paragraphs": [
        "Mengikuti kriteria yang ditetapkan oleh Undang-Undang Perdagangan Elektronik."
      ],
      "bullets": [
        "**Sebelum unduhan dimulai,** Anda dapat membatalkan kapan saja dan mendapatkan pengembalian penuh.",
        "**Setelah unduhan selesai,** pembatalan karena perubahan pikiran tidak diperbolehkan. Ini adalah konten digital yang disediakan segera setelah pembayaran dan tidak dapat dikembalikan ke keadaan semula, yang termasuk dalam alasan pembatasan yang ditetapkan dalam Pasal 17 Ayat 2 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik. Kami memberitahukan dan mendapatkan persetujuan mengenai hal ini di layar pembayaran."
      ]
    },
    {
      "heading": "3. Kasus Pengembalian Penuh",
      "paragraphs": [
        "Dalam kasus berikut, setelah memverifikasi alasan, kami akan memproses penggantian atau pengembalian penuh."
      ],
      "bullets": [
        "Jika file tidak dibuat karena kesalahan sistem",
        "Jika file yang diunduh tidak dapat dibuka",
        "Jika jumlah pembayaran berbeda dari pesanan",
        "**Jika pembayaran dilakukan oleh orang yang belum dewasa tanpa persetujuan wali hukum** — Baik Anda atau wali hukum dapat meminta pembatalan."
      ]
    },
    {
      "heading": "4. Kasus yang Bukan Alasan Pengembalian",
      "paragraphs": [],
      "bullets": [
        "**Ketidakpuasan terhadap isi hasil.** Hasil interpretasi mimpi adalah referensi dari perspektif interpretasi tradisional dan sifatnya telah diinformasikan sebelum pembayaran. Jika simbol yang ada dalam mimpi tidak ditemukan sehingga hasilnya singkat, ini juga termasuk dalam kategori ini — karena kami tidak menciptakan makna yang tidak ada.",
        "Permintaan ulang setelah menggunakan semua 5 kali penggantian."
      ]
    },
    {
      "heading": "5. Cara Pengajuan",
      "paragraphs": [
        "Silakan ajukan pengembalian atau pertanyaan melalui pusat layanan pelanggan ({customerCenter}) atau email ({email}). Memberikan nomor pesanan akan mempercepat proses verifikasi.",
        "Pengembalian akan dilakukan melalui metode pembayaran yang Anda gunakan, dan tergantung pada kebijakan perusahaan kartu atau penyedia pembayaran, mungkin memerlukan waktu 3-7 hari kerja untuk diproses."
      ]
    }
  ],
  "effectiveLabel": "Tanggal Berlaku"
};

const d3 = {
  "title": "Panduan Harga",
  "intro": "Menjelaskan ruang lingkup layanan gratis dan harga produk berbayar.",
  "sections": [
    {
      "heading": "1. Gratis",
      "paragraphs": [
        "**Pencarian makna mimpi dan melihat hasilnya adalah gratis.** Tidak perlu mendaftar sebagai anggota.",
        "Anda dapat melihat semua simbol yang ditemukan dalam mimpi dan makna yang disampaikan oleh simbol tersebut, serta apa yang ditunjukkan oleh simbol-simbol tersebut di layar. Karena mimpi terjadi setiap hari, layanan ini tidak membatasi pencarian."
      ]
    },
    {
      "heading": "2. Kartu Mimpi (berbayar)",
      "paragraphs": [
        "Pembayaran domestik {priceCardDomestic} (termasuk PPN) · Pembayaran internasional {priceCardGlobal}",
        "Kami akan menyajikan hasil di layar dalam bentuk **satu gambar**. Bentuk ini mudah disimpan atau dikirim, dan **bukan dokumen PDF.**",
        "Anda dapat mengunduhnya kembali **hingga 5 kali** dengan pesanan yang sama. Namun, jika input hilang setelah keluar dari layar hasil, Anda tidak dapat membuatnya lagi, jadi harap simpan file segera setelah pembayaran."
      ]
    },
    {
      "heading": "3. Laporan Mimpi Konsepsi PDF (berbayar)",
      "paragraphs": [
        "Pembayaran domestik {priceConceptionDomestic} (termasuk PPN) · Pembayaran internasional {priceConceptionGlobal}",
        "Ketika simbol yang dianggap sebagai mimpi konsepsi muncul, kami akan menyusun makna simbol tersebut dan latar belakang yang disampaikan dalam PDF berisi 4 halaman. **Kami tidak menentukan status kehamilan atau jenis kelamin janin.**",
        "Syarat untuk penerbitan ulang sama dengan kartu mimpi."
      ]
    },
    {
      "heading": "4. Metode Pembayaran",
      "paragraphs": [
        "**Domestik** — Anda dapat menggunakan kartu kredit/debit dan pembayaran mudah (TossPay, KakaoPay, NaverPay, Payco, dll.) melalui Toss Payments.",
        "**Internasional** — Anda dapat membayar melalui PayPal melalui PortOne.",
        "Jumlah total pembayaran mengikuti jumlah yang ditampilkan di layar pembayaran."
      ]
    },
    {
      "heading": "5. Perubahan Harga",
      "paragraphs": [
        "Jika ada perubahan harga, kami akan mempostingnya di halaman ini terlebih dahulu. Harga yang telah dibayarkan untuk pesanan yang sudah selesai tidak akan terpengaruh oleh perubahan harga."
      ]
    }
  ],
  "effectiveLabel": "Tanggal Berlaku"
};

const d4 = {
  "title": "Kebijakan Pengolahan Data Pribadi",
  "intro": "Dreams-Link tidak menyimpan informasi yang diperlukan untuk interpretasi mimpi. Kebijakan ini menjelaskan apa yang diterima oleh layanan, apa yang tidak disimpan, dan apa yang dicatat secara otomatis.",
  "sections": [
    {
      "heading": "1. Informasi yang Tidak Disimpan",
      "paragraphs": [
        "Cerita mimpi yang Anda tulis untuk interpretasi, perasaan saat bangun, dan apakah Anda mengalami mimpi yang sama berulang kali **tidak disimpan di mana pun.** Informasi ini hanya digunakan dalam memori server selama pemrosesan permintaan dan akan hilang bersama dengan respons.",
        "Tidak dicatat dalam basis data, dan tidak disimpan dalam file terpisah. Karena tidak ada pendaftaran anggota, input tidak terhubung dengan individu tertentu.",
        "Cerita mimpi adalah nilai paling pribadi yang diterima oleh layanan ini. Oleh karena itu, tidak ada fitur untuk melihat kembali hasil sebelumnya (diary mimpi) — fitur tersebut hanya dapat ada jika tulisan yang Anda berikan disimpan."
      ]
    },
    {
      "heading": "2. Informasi yang Termasuk dalam Tautan Hasil",
      "paragraphs": [
        "Alamat layar hasil mencakup nilai input yang telah dienkripsi. Namun, nilai ini terletak setelah # di alamat, dan menurut standar web, konten setelah # tidak dikirimkan oleh browser ke server. Oleh karena itu, meskipun Anda membuka tautan hasil, catatan akses server hanya akan menyimpan jalur alamat.",
        "Jika Anda mengirim tautan hasil kepada orang lain, orang tersebut juga dapat melihat hasil yang sama. Tautan itu sendiri menyimpan nilai input, jadi keputusan untuk membagikannya adalah tanggung jawab pengguna."
      ]
    },
    {
      "heading": "3. Informasi yang Dikumpulkan Secara Otomatis",
      "paragraphs": [
        "Tidak ada informasi yang dikumpulkan oleh layanan untuk mengidentifikasi pengguna. Namun, catatan minimal yang diperlukan untuk operasi layanan web secara otomatis disimpan oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, waktu akses, jenis browser, dan catatan akses server umum lainnya",
        "Informasi negara — hanya digunakan untuk secara otomatis menentukan bahasa layar dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Cookie dan Iklan",
      "paragraphs": [
        "Layanan itu sendiri tidak menggunakan cookie untuk mengidentifikasi atau melacak pengguna. Cerita mimpi yang Anda tulis tidak disampaikan kepada pengiklan.",
        "Layanan ini menampilkan iklan melalui Google AdSense. Dalam proses ini, hal-hal berikut terjadi."
      ],
      "bullets": [
        "Penyedia pihak ketiga, termasuk Google, dapat menyimpan atau membaca cookie di browser pengguna.",
        "Google menggunakan cookie berdasarkan catatan kunjungan ke situs ini dan beberapa situs lainnya untuk menampilkan iklan.",
        "Pengguna dapat menonaktifkan iklan yang dipersonalisasi di pengaturan iklan Google (google.com/settings/ads). Meskipun dinonaktifkan, iklan itu sendiri akan tetap ditampilkan, tetapi relevansinya dengan pengguna akan berkurang.",
        "Iklan yang dipersonalisasi dari semua penyedia pihak ketiga dapat dinonaktifkan sekaligus di aboutads.info/choices.",
        "Ada juga cara untuk memblokir cookie di pengaturan browser.",
        "Pengguna di Wilayah Ekonomi Eropa, Inggris, dan Swiss akan diminta persetujuan terlebih dahulu untuk penggunaan cookie iklan."
      ]
    },
    {
      "heading": "5. Informasi yang Disimpan Saat Pembayaran",
      "paragraphs": [
        "Saat ini tidak ada produk berbayar yang dijual, sehingga tidak ada informasi yang disimpan terkait pembayaran.",
        "Ketika penjualan dimulai, informasi berikut akan disimpan untuk pemrosesan pembayaran dan penyimpanan catatan transaksi sesuai hukum. **Pada saat itu, cerita mimpi yang Anda tulis dan file yang dibuat tidak akan disimpan**, dan informasi yang mengidentifikasi pengguna seperti nama, kontak, dan alamat juga tidak akan diterima."
      ],
      "bullets": [
        "Nomor pesanan dan pengidentifikasi pembayaran",
        "Jumlah pembayaran, mata uang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Klasifikasi produk, status pemrosesan, jumlah unduhan dokumen, waktu pemesanan",
        "Bahasa layar pada saat pemesanan dan klasifikasi wilayah pembayaran (dalam negeri, luar negeri)",
        "Masa penyimpanan — Sesuai dengan Pasal 6 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik, catatan tentang pembayaran dan penyediaan barang akan disimpan selama 5 tahun, dan catatan tentang keluhan atau penyelesaian sengketa konsumen akan disimpan selama 3 tahun sebelum dihancurkan."
      ]
    },
    {
      "heading": "6. Penyediaan kepada Pihak Ketiga dan Penugasan Pemrosesan",
      "paragraphs": [
        "Karena tidak ada data pribadi yang disimpan, tidak ada data pribadi yang disediakan kepada pihak ketiga.",
        "Untuk menjalankan layanan, kami menggunakan infrastruktur hosting dari {hostingProvider}, dan dalam proses ini, catatan akses di atas diproses sesuai dengan kebijakan penyedia tersebut.",
        "Ketika penjualan produk berbayar dimulai, pembayaran domestik akan ditugaskan kepada Toss Payments, dan pembayaran internasional akan ditugaskan kepada PortOne (PayPal). Informasi metode pembayaran seperti nomor kartu dan nomor rekening akan langsung diproses oleh penyedia tersebut, dan layanan tidak akan menerima informasi tersebut."
      ]
    },
    {
      "heading": "7. Hak Pengguna",
      "paragraphs": [
        "Karena tidak ada data pribadi yang disimpan, tidak ada yang dapat diminta untuk dilihat, diperbaiki, atau dihapus.",
        "Pengguna dapat menghapus semua jejak input hanya dengan menghapus tautan hasil di bilah alamat browser.",
        "Jika ada pertanyaan terkait penggunaan layanan, silakan hubungi kami di kontak di bawah ini."
      ]
    },
    {
      "heading": "8. Data Pribadi Anak",
      "paragraphs": [
        "Layanan ini tidak ditujukan untuk anak-anak di bawah usia 14 tahun dan tidak mengumpulkan data pribadi dari anak-anak."
      ]
    },
    {
      "heading": "9. Pejabat Perlindungan Data Pribadi",
      "paragraphs": [
        "Pejabat Perlindungan: {privacyOfficer}",
        "Kontak: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Perubahan Kebijakan",
      "paragraphs": [
        "Jika kebijakan ini diubah, tanggal mulai dan isi perubahan akan diposting di halaman ini. Jika ada perubahan yang secara nyata mengubah isi pemrosesan, seperti mulai menampilkan iklan atau menjual produk berbayar, kami akan memberi tahu terlebih dahulu."
      ]
    }
  ],
  "effectiveLabel": "Tanggal Berlaku"
};

const d5 = {
  "title": "Kebijakan Pengolahan Data Pribadi",
  "intro": "Dreams-Link tidak menyimpan informasi yang diperlukan untuk interpretasi mimpi. Kebijakan ini menjelaskan apa yang diterima oleh layanan, apa yang tidak disimpan, dan apa yang dicatat secara otomatis.",
  "sections": [
    {
      "heading": "1. Informasi yang Tidak Disimpan",
      "paragraphs": [
        "Cerita mimpi yang Anda tulis, perasaan saat terbangun, dan apakah Anda mengalami mimpi yang sama berulang kali **tidak disimpan di mana pun.** Informasi ini hanya digunakan dalam memori server selama pemrosesan permintaan dan akan hilang bersama dengan respons.",
        "Tidak dicatat dalam basis data, dan tidak disimpan dalam file terpisah. Karena tidak ada pendaftaran anggota, nilai yang dimasukkan tidak terhubung dengan individu tertentu.",
        "Cerita mimpi adalah nilai yang paling pribadi di antara informasi yang diterima oleh layanan ini. Oleh karena itu, tidak ada fitur untuk melihat kembali hasil sebelumnya (diary mimpi) — fitur tersebut hanya dapat ada jika tulisan yang Anda berikan disimpan."
      ]
    },
    {
      "heading": "2. Informasi yang Tercantum dalam Tautan Hasil",
      "paragraphs": [
        "Alamat layar hasil mencakup nilai yang dimasukkan dalam bentuk yang terkode. Namun, nilai ini terletak setelah # dalam alamat, dan menurut standar web, konten setelah # tidak dikirimkan oleh browser ke server. Oleh karena itu, meskipun tautan hasil dibuka, catatan akses server hanya menyimpan jalur alamat.",
        "Jika tautan hasil dikirimkan kepada orang lain, orang tersebut juga dapat melihat hasil yang sama. Karena tautan itu sendiri menyimpan nilai yang dimasukkan, keputusan untuk membagikannya adalah tanggung jawab pengguna."
      ]
    },
    {
      "heading": "3. Informasi yang Dikumpulkan Secara Otomatis",
      "paragraphs": [
        "Tidak ada informasi yang dikumpulkan untuk mengidentifikasi pengguna. Namun, catatan minimum yang diperlukan untuk operasi layanan web secara otomatis disimpan oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP yang diakses, waktu akses, jenis browser, dan catatan akses server umum lainnya",
        "Informasi negara — hanya digunakan untuk secara otomatis menentukan bahasa layar dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Cookie dan Iklan",
      "paragraphs": [
        "Layanan itu sendiri tidak menggunakan cookie untuk melacak pengguna.",
        "Saat ini, layanan ini tidak menampilkan iklan. Jika di masa depan iklan ditampilkan, penyedia iklan (misalnya, Google) dapat menggunakan cookie untuk menampilkan iklan. Dalam hal ini, ketentuan ini akan diperbarui terlebih dahulu untuk menjelaskan apa yang berubah sebelum dimulai."
      ]
    },
    {
      "heading": "5. Informasi yang Disimpan Saat Pembayaran",
      "paragraphs": [
        "Ketika produk berbayar (dream card, laporan mimpi konsepsi) dibayar, informasi pesanan disimpan untuk pemrosesan pembayaran dan penyimpanan catatan transaksi sesuai dengan hukum.",
        "**Mimpi yang Anda tulis dan file yang dibuat tidak disimpan meskipun telah dibayar.** Prinsip di atas tetap berlaku terlepas dari status pembayaran. Item yang disimpan adalah sebagai berikut, dan informasi yang mengidentifikasi pengguna seperti nama, kontak, dan alamat tidak termasuk."
      ],
      "bullets": [
        "Nomor pesanan dan pengidentifikasi pembayaran",
        "Jumlah pembayaran, mata uang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Klasifikasi produk, status pemrosesan, jumlah unduhan dokumen, waktu pemesanan",
        "Bahasa layar pada saat pemesanan dan klasifikasi wilayah pembayaran (domestik, internasional)",
        "Masa penyimpanan — Sesuai dengan Pasal 6 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik, catatan pembayaran dan penyediaan barang akan disimpan selama 5 tahun, dan catatan penanganan keluhan atau sengketa konsumen akan disimpan selama 3 tahun sebelum dihancurkan."
      ]
    },
    {
      "heading": "6. Penyediaan kepada Pihak Ketiga dan Penanganan yang Diberikan",
      "paragraphs": [
        "Karena tidak menyimpan informasi pribadi yang mengidentifikasi pengguna, tidak ada informasi pribadi yang disediakan kepada pihak ketiga. Pemrosesan pembayaran diserahkan kepada penyedia di bawah ini.",
        "Untuk operasi layanan, infrastruktur hosting dari {hostingProvider} digunakan, dan dalam proses ini, catatan akses di atas diproses sesuai dengan kebijakan penyedia tersebut.",
        "Pembayaran domestik diproses oleh Toss Payments, sedangkan pembayaran internasional diproses melalui PayPal oleh PortOne. Informasi metode pembayaran seperti nomor kartu dan nomor rekening diproses langsung oleh penyedia tersebut, dan layanan tidak menerima atau menyimpannya."
      ]
    },
    {
      "heading": "7. Hak Pengguna",
      "paragraphs": [
        "Karena mimpi yang Anda tulis tidak disimpan, tidak ada pihak yang dapat diminta untuk melihat, mengoreksi, atau menghapus. Catatan pesanan yang tersisa setelah pembayaran memiliki kewajiban untuk disimpan selama periode yang ditentukan oleh hukum, sehingga tidak dapat dihapus selama periode tersebut, dan setelah periode berakhir, akan dihancurkan.",
        "Pengguna dapat menghapus semua jejak input hanya dengan menghapus tautan hasil di bilah alamat browser.",
        "Jika ada pertanyaan terkait penggunaan layanan, silakan beri tahu kami melalui kontak di bawah ini."
      ]
    },
    {
      "heading": "8. Informasi Pribadi Anak",
      "paragraphs": [
        "Layanan ini tidak ditujukan untuk anak di bawah usia 14 tahun dan tidak mengumpulkan informasi pribadi dari anak-anak."
      ]
    },
    {
      "heading": "9. Pejabat Perlindungan Data Pribadi",
      "paragraphs": [
        "Pejabat Perlindungan: {privacyOfficer}",
        "Kontak: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Perubahan Kebijakan",
      "paragraphs": [
        "Jika kebijakan ini diubah, tanggal mulai dan perubahan akan diposting di halaman ini. Jika ada perubahan nyata dalam konten pemrosesan seperti mulai menampilkan iklan atau menjual produk berbayar, kami akan memberi tahu Anda terlebih dahulu tentang perubahan tersebut."
      ]
    }
  ],
  "effectiveLabel": "Tanggal Berlaku"
};

const d6 = {
  "title": "Syarat dan Ketentuan",
  "intro": "Syarat dan ketentuan ini menetapkan kondisi penggunaan layanan Dreams-Link (selanjutnya disebut \"layanan\"). Dengan menggunakan layanan ini, Anda dianggap telah menyetujui syarat dan ketentuan ini.",
  "sections": [
    {
      "heading": "1. Sifat Layanan",
      "paragraphs": [
        "Layanan ini mencari simbol dari mimpi yang ditulis oleh pengguna dan menunjukkan makna yang terkait dengan simbol tersebut sebagai referensi. Kami tidak akan mengatakan bahwa simbol yang tidak ada dalam kamus dapat ditemukan, dan tidak akan menciptakan makna yang tidak ada.",
        "Simbol dan penjelasan yang disajikan adalah **referensi dari perspektif interpretasi tradisional, dan bukan prediksi tentang masa depan atau nasihat medis, keuangan, atau hukum.** Mimpi yang baik tidak menjamin sesuatu yang akan terjadi, dan mimpi yang buruk tidak berarti sesuatu yang telah ditentukan.",
        "**Hasil terkait mimpi kehamilan tidak menentukan apakah seseorang hamil atau jenis kelamin janin.** Kami hanya memberi tahu bahwa simbol yang secara tradisional dianggap sebagai mimpi kehamilan muncul, serta latar belakangnya."
      ]
    },
    {
      "heading": "2. Biaya Penggunaan",
      "paragraphs": [
        "Pencarian makna mimpi dan melihat hasilnya adalah gratis dan tidak memerlukan pendaftaran anggota.",
        "Menerima hasil dalam bentuk kartu mimpi (gambar) atau laporan mimpi kehamilan (PDF) adalah berbayar. Harga dan syarat akan ditampilkan di bawah pasal 3 dan di layar pembayaran."
      ]
    },
    {
      "heading": "3. Produk Berbayar dan Pengembalian Dana",
      "paragraphs": [
        "Ada **dua jenis** produk berbayar yang dijual. Pencarian makna mimpi gratis dapat digunakan tanpa pembayaran, sedangkan dua produk di bawah ini dibuat dalam bentuk yang dapat disimpan.",
        "**Kartu Mimpi** — Satu file gambar. Kami membuatnya menjadi satu lembar yang menyimpan simbol yang muncul dalam mimpi dan makna tradisionalnya. **Ini bukan dokumen (PDF).** Pembayaran domestik {priceCardDomestic} (termasuk pajak), pembayaran internasional {priceCardGlobal}.",
        "**Laporan Mimpi Kehamilan PDF** — 4 halaman. Ini berisi makna tradisional dari simbol yang muncul dan latar belakangnya dalam bentuk dokumen. **Tidak menentukan apakah seseorang hamil** — kami hanya memberi tahu bahwa simbol yang secara tradisional dianggap sebagai mimpi kehamilan muncul dalam mimpi. Pembayaran domestik {priceConceptionDomestic} (termasuk pajak), pembayaran internasional {priceConceptionGlobal}.",
        "Pembayaran domestik dapat dilakukan melalui Toss Payments menggunakan kartu kredit/debit dan pembayaran mudah (Toss Pay, Kakao Pay, Naver Pay, Payco, dll.), sedangkan pembayaran internasional dilakukan melalui PayPal melalui PortOne. Jumlah akhir mengikuti jumlah yang ditampilkan di layar pembayaran.",
        "**Layanan tidak menyimpan input pengguna atau file PDF yang dibuat.** Setelah pembayaran disetujui, dokumen dibuat dan dikirimkan tanpa menyimpan apa pun di server. Oleh karena itu, file yang diunduh harus disimpan oleh pengguna sendiri.",
        "Jika unduhan terhenti atau file hilang, Anda dapat mengunduh kembali **hingga 5 kali** dengan pesanan yang sama. Namun, jika input hilang setelah keluar dari layar hasil, tidak dapat dibuat kembali, jadi harap simpan file segera setelah pembayaran."
      ],
      "bullets": [
        "**Sebelum unduhan dimulai setelah pembayaran,** Anda dapat membatalkan kapan saja dan mendapatkan pengembalian penuh.",
        "**Setelah unduhan selesai,** pembatalan karena perubahan pikiran tidak diperbolehkan. Ini adalah konten digital yang disediakan segera setelah pembayaran dan tidak dapat dikembalikan ke keadaan semula, yang termasuk dalam alasan pembatasan pembatalan sesuai dengan Pasal 17 Ayat 2 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik.",
        "**Jika dokumen tidak dibuat karena kesalahan sistem, file tidak dapat dibuka, atau jumlah pembayaran berbeda dari pesanan,** akan diproses dengan penerbitan ulang atau pengembalian penuh.",
        "**Keluhan tentang isi hasil** tidak termasuk dalam alasan pengembalian dana. Hasil interpretasi adalah referensi dari perspektif interpretasi tradisional dan sifatnya telah diinformasikan sebelum pembayaran (lihat pasal 1 di atas).",
        "Permintaan ulang setelah menggunakan semua 5 kali penerbitan ulang tidak termasuk dalam alasan pengembalian dana.",
        "**Jika seorang remaja melakukan pembayaran tanpa persetujuan wali hukum,** baik remaja tersebut atau wali hukum dapat membatalkan pembayaran tersebut. Silakan beri tahu kami melalui kontak di bawah ini untuk mendapatkan pengembalian dana."
      ]
    },
    {
      "heading": "4. Tentang Hasil Interpretasi",
      "paragraphs": [
        "Aturan untuk mencari simbol mengikuti kamus yang dipublikasikan dan prosedur yang ditetapkan, sehingga jika Anda menulis hal yang sama, simbol yang sama akan selalu muncul.",
        "Semakin singkat Anda menulis, semakin sedikit simbol yang akan muncul. Kami tidak dapat menemukan simbol yang tidak ada dalam kamus, dan dalam hal ini, hasilnya akan dibiarkan kosong.",
        "Kamus simbol adalah pengorganisasian literatur interpretasi mimpi yang telah diwariskan dan cerita rakyat, dan ada interpretasi yang berbeda tergantung pada daerah dan waktu."
      ]
    },
    {
      "heading": "5. Tanggung Jawab Pengguna",
      "paragraphs": [
        "Pengguna dapat menulis mimpi orang lain, tetapi tidak boleh menggunakan hasilnya untuk merugikan orang lain.",
        "Jangan gunakan hasil layanan sebagai dasar untuk keputusan yang mempengaruhi hak atau kepentingan orang, seperti kehamilan, kesehatan, investasi, atau perekrutan. Layanan ini tidak dibuat untuk tujuan tersebut."
      ]
    },
    {
      "heading": "6. Tindakan Terlarang",
      "paragraphs": [
        "Tindakan berikut tidak diperbolehkan."
      ],
      "bullets": [
        "Mengirim permintaan berlebihan dengan alat otomatis yang mengganggu operasi layanan",
        "Menyajikan hasil layanan seolah-olah itu adalah fakta atau hasil penilaian dari seorang ahli",
        "Menggandakan atau memodifikasi layanan untuk menyediakan layanan yang sama"
      ]
    },
    {
      "heading": "7. Penafian",
      "paragraphs": [
        "Layanan hanya menyediakan referensi dan tidak bertanggung jawab atas keputusan yang diambil pengguna berdasarkan hasil dan konsekuensinya.",
        "Kami tidak bertanggung jawab atas kerugian yang disebabkan oleh penghentian layanan karena alasan yang tidak dapat dikendalikan, seperti bencana alam atau gangguan dari penyedia infrastruktur."
      ]
    },
    {
      "heading": "8. Hak Kekayaan Intelektual",
      "paragraphs": [
        "Hak atas tampilan, frasa, dan implementasi aturan perhitungan layanan dimiliki oleh operator. Pengguna dapat menyimpan atau membagikan hasil untuk tujuan pribadi."
      ]
    },
    {
      "heading": "9. Perubahan Syarat dan Hukum yang Berlaku",
      "paragraphs": [
        "Jika syarat dan ketentuan diubah, akan diposting di halaman ini bersama dengan tanggal mulai berlaku.",
        "Syarat dan ketentuan ini tunduk pada hukum Republik Korea, dan sengketa yang berkaitan dengan penggunaan layanan akan mengikuti prosedur yang ditetapkan oleh undang-undang yang relevan."
      ]
    }
  ],
  "effectiveLabel": "Tanggal Berlaku"
};

const d7 = {
  "title": "Kebijakan Pengolahan Data Pribadi",
  "intro": "Dreams-Link tidak menyimpan informasi yang diperlukan untuk interpretasi mimpi. Kebijakan ini menjelaskan apa yang diterima oleh layanan, apa yang tidak disimpan, dan apa yang secara otomatis dicatat.",
  "sections": [
    {
      "heading": "1. Informasi yang Tidak Disimpan",
      "paragraphs": [
        "Cerita mimpi yang Anda tulis, perasaan saat bangun, dan apakah Anda bermimpi sama berulang kali **tidak disimpan di mana pun.** Informasi ini hanya digunakan sementara dalam memori server selama pemrosesan permintaan dan akan hilang bersama dengan respons.",
        "Tidak dicatat dalam basis data, dan tidak disimpan dalam file terpisah. Karena tidak ada pendaftaran anggota, nilai yang dimasukkan tidak terhubung dengan individu tertentu.",
        "Cerita mimpi adalah nilai yang paling pribadi yang diterima oleh layanan ini. Oleh karena itu, tidak ada fitur untuk melihat kembali hasil sebelumnya (diary mimpi) — fitur tersebut hanya dapat ada jika tulisan yang Anda berikan disimpan."
      ]
    },
    {
      "heading": "2. Informasi yang Termasuk dalam Tautan Hasil",
      "paragraphs": [
        "Alamat layar hasil mencakup nilai yang dimasukkan dalam bentuk yang terkode. Namun, nilai ini terletak setelah # di alamat, dan menurut standar web, konten setelah # tidak dikirimkan oleh browser ke server. Oleh karena itu, meskipun tautan hasil dibuka, catatan akses server hanya menyimpan jalur alamat.",
        "Jika tautan hasil dikirimkan kepada orang lain, orang tersebut juga dapat melihat hasil yang sama. Tautan itu sendiri menyimpan nilai yang dimasukkan, jadi keputusan untuk membagikannya ada pada pengguna."
      ]
    },
    {
      "heading": "3. Informasi yang Dikumpulkan Secara Otomatis",
      "paragraphs": [
        "Tidak ada informasi yang dikumpulkan oleh layanan untuk mengidentifikasi pengguna. Namun, catatan minimum yang diperlukan untuk operasi layanan web secara otomatis disimpan oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP akses, waktu akses, jenis browser, dan catatan akses server umum lainnya",
        "Informasi negara — hanya digunakan untuk secara otomatis menentukan bahasa layar dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Cookie dan Iklan",
      "paragraphs": [
        "Layanan itu sendiri tidak menggunakan cookie untuk mengidentifikasi atau melacak pengguna. Cerita mimpi yang Anda tulis tidak disampaikan kepada pengiklan.",
        "Layanan ini menampilkan iklan melalui Google AdSense. Dalam proses ini, hal-hal berikut terjadi."
      ],
      "bullets": [
        "Penyedia pihak ketiga, termasuk Google, dapat menyimpan atau membaca cookie di browser pengguna.",
        "Google menggunakan cookie untuk menampilkan iklan berdasarkan riwayat kunjungan ke situs ini dan beberapa situs lainnya.",
        "Pengguna dapat menonaktifkan iklan yang dipersonalisasi di pengaturan iklan Google (google.com/settings/ads). Meskipun dinonaktifkan, iklan itu sendiri tetap ditampilkan, tetapi relevansinya dengan pengguna akan berkurang.",
        "Iklan yang dipersonalisasi dari seluruh penyedia pihak ketiga dapat dinonaktifkan sekaligus di aboutads.info/choices.",
        "Ada juga cara untuk memblokir cookie di pengaturan browser.",
        "Pengguna di Wilayah Ekonomi Eropa, Inggris, dan Swiss akan diminta persetujuan terlebih dahulu untuk penggunaan cookie iklan."
      ]
    },
    {
      "heading": "5. Informasi yang Disimpan Saat Pembayaran",
      "paragraphs": [
        "Ketika Anda membayar produk berbayar (kartu mimpi, laporan mimpi konsepsi), informasi pesanan disimpan untuk pemrosesan pembayaran dan penyimpanan catatan transaksi sesuai hukum.",
        "**Cerita mimpi yang Anda tulis dan file yang dibuat tidak disimpan meskipun telah dibayar.** Prinsip di atas tetap berlaku terlepas dari status pembayaran. Item yang disimpan adalah sebagai berikut, dan informasi yang mengidentifikasi pengguna seperti nama, kontak, dan alamat tidak termasuk."
      ],
      "bullets": [
        "Nomor pesanan dan pengidentifikasi pembayaran",
        "Jumlah pembayaran, mata uang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Klasifikasi produk, status pemrosesan, jumlah unduhan dokumen, waktu pemesanan",
        "Bahasa layar pada saat pemesanan dan klasifikasi wilayah pembayaran (dalam negeri, luar negeri)",
        "Masa penyimpanan — Sesuai dengan Pasal 6 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik, catatan pembayaran dan penyediaan barang akan disimpan selama 5 tahun, dan catatan penanganan keluhan atau sengketa konsumen akan disimpan selama 3 tahun sebelum dihancurkan."
      ]
    },
    {
      "heading": "6. Penyediaan kepada Pihak Ketiga dan Penanganan yang Diberikan",
      "paragraphs": [
        "Karena tidak menyimpan informasi pribadi yang mengidentifikasi pengguna, tidak ada informasi pribadi yang disediakan kepada pihak ketiga. Pemrosesan pembayaran dipercayakan kepada penyedia berikut.",
        "Untuk operasi layanan, infrastruktur hosting dari {hostingProvider} digunakan, dan dalam proses ini, catatan akses di Pasal 3 diproses sesuai dengan kebijakan penyedia tersebut.",
        "Pembayaran domestik diproses oleh Toss Payments, sedangkan pembayaran internasional diproses melalui PayPal oleh PortOne. Informasi metode pembayaran seperti nomor kartu dan nomor rekening diproses langsung oleh penyedia tersebut, dan layanan tidak menerima atau menyimpannya."
      ]
    },
    {
      "heading": "7. Hak Pengguna",
      "paragraphs": [
        "Karena cerita mimpi yang Anda tulis tidak disimpan, tidak ada pihak yang dapat diminta untuk melihat, mengoreksi, atau menghapus. Catatan pesanan yang tersisa setelah pembayaran harus disimpan selama periode yang ditentukan oleh hukum, sehingga tidak dapat dihapus selama periode tersebut, dan setelah periode berakhir, akan dihancurkan.",
        "Pengguna dapat menghapus semua jejak input hanya dengan menghapus tautan hasil di bilah alamat browser.",
        "Jika ada pertanyaan terkait penggunaan layanan, silakan beri tahu kami melalui kontak di bawah ini."
      ]
    },
    {
      "heading": "8. Informasi Pribadi Anak",
      "paragraphs": [
        "Layanan ini tidak ditujukan untuk anak-anak di bawah usia 14 tahun dan tidak mengumpulkan informasi pribadi dari anak-anak."
      ]
    },
    {
      "heading": "9. Pejabat Perlindungan Data Pribadi",
      "paragraphs": [
        "Pejabat Perlindungan: {privacyOfficer}",
        "Kontak: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Perubahan Kebijakan",
      "paragraphs": [
        "Jika kebijakan ini diubah, tanggal mulai dan isi perubahan akan diposting di halaman ini. Jika ada perubahan yang benar-benar mempengaruhi konten pemrosesan, seperti mulai menampilkan iklan atau menjual produk berbayar, kami akan memberi tahu Anda terlebih dahulu."
      ]
    }
  ],
  "effectiveLabel": "Tanggal Berlaku"
};

export const id: LegalLocaleDocuments = {
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
