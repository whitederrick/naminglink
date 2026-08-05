import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Kebijakan Pengolahan Data Pribadi",
  "intro": "Saju-Link tidak menyimpan informasi yang diperlukan untuk pembacaan saju. Kebijakan ini menjelaskan apa yang diterima oleh layanan, apa yang tidak disimpan, dan apa yang dicatat secara otomatis.",
  "sections": [
    {
      "heading": "1. Informasi yang Tidak Disimpan",
      "paragraphs": [
        "Tanggal lahir, waktu lahir, tempat lahir, jenis kelamin, dan nama yang digunakan dalam pembacaan saju **tidak disimpan di mana pun.** Informasi ini hanya digunakan dalam memori server selama pemrosesan permintaan dan akan hilang bersama dengan respons.",
        "Tidak dicatat dalam basis data, dan tidak disimpan dalam file terpisah. Karena tidak ada pendaftaran anggota, nilai yang dimasukkan tidak terhubung dengan individu tertentu."
      ]
    },
    {
      "heading": "2. Informasi yang Termasuk dalam Tautan Hasil",
      "paragraphs": [
        "Alamat layar hasil mencakup nilai yang dimasukkan dalam bentuk yang dienkripsi. Namun, nilai ini terletak setelah # dalam alamat, dan menurut standar web, konten setelah # tidak dikirimkan oleh browser ke server. Oleh karena itu, meskipun tautan hasil dibuka, hanya jalur alamat yang tersisa dalam catatan akses server.",
        "Jika tautan hasil dikirimkan kepada orang lain, orang tersebut juga dapat melihat hasil yang sama. Tautan itu sendiri menyimpan nilai yang dimasukkan, jadi keputusan untuk membagikannya adalah tanggung jawab pengguna."
      ]
    },
    {
      "heading": "3. Informasi yang Dikumpulkan Secara Otomatis",
      "paragraphs": [
        "Tidak ada informasi yang dikumpulkan oleh layanan untuk mengidentifikasi pengguna. Namun, catatan minimum yang diperlukan untuk operasi layanan web secara otomatis disimpan oleh penyedia infrastruktur."
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
        "Saat ini, tidak ada iklan yang ditampilkan dalam layanan ini. Jika iklan mulai ditampilkan di masa depan, penyedia iklan (misalnya, Google) dapat menggunakan cookie untuk menampilkan iklan. Pada saat itu, ketentuan ini akan diperbarui terlebih dahulu untuk menjelaskan apa yang berubah sebelum dimulai."
      ]
    },
    {
      "heading": "5. Informasi yang Disimpan Saat Pembayaran",
      "paragraphs": [
        "Saat ini, tidak ada informasi yang disimpan terkait pembayaran karena tidak ada produk berbayar yang dijual.",
        "Ketika penjualan dimulai, informasi berikut akan disimpan untuk pemrosesan pembayaran dan penyimpanan catatan transaksi sesuai dengan hukum. **Pada saat itu, nilai yang dimasukkan dalam pembacaan saju dan PDF yang dihasilkan tidak akan disimpan,** dan informasi yang mengidentifikasi pengguna seperti nama, kontak, dan alamat juga tidak akan diterima."
      ],
      "bullets": [
        "Nomor pesanan dan pengidentifikasi pembayaran",
        "Jumlah pembayaran, mata uang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Klasifikasi produk, status pemrosesan, jumlah unduhan dokumen, waktu pemesanan",
        "Bahasa layar pada saat pemesanan dan klasifikasi lokasi pembayaran (dalam negeri, luar negeri)",
        "Masa penyimpanan — Sesuai dengan Pasal 6 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik, catatan tentang pembayaran dan penyediaan barang akan disimpan selama 5 tahun, dan catatan tentang keluhan atau penyelesaian sengketa konsumen akan disimpan selama 3 tahun sebelum dihancurkan."
      ]
    },
    {
      "heading": "6. Penyediaan dan Penanganan Data Pribadi oleh Pihak Ketiga",
      "paragraphs": [
        "Karena tidak ada data pribadi yang disimpan, tidak ada data pribadi yang disediakan kepada pihak ketiga.",
        "Layanan ini menggunakan infrastruktur hosting dari {hostingProvider}, dan dalam proses ini, catatan akses yang disebutkan di atas diproses sesuai dengan kebijakan penyedia tersebut.",
        "Ketika penjualan produk berbayar dimulai, pembayaran domestik akan diserahkan kepada Toss Payments, dan pembayaran internasional akan diserahkan kepada PortOne (PayPal). Informasi metode pembayaran seperti nomor kartu dan nomor rekening akan diproses langsung oleh penyedia tersebut, dan layanan tidak akan menerima informasi tersebut."
      ]
    },
    {
      "heading": "7. Hak Pengguna",
      "paragraphs": [
        "Karena tidak ada data pribadi yang disimpan, tidak ada yang dapat diminta untuk dilihat, diperbaiki, atau dihapus.",
        "Pengguna dapat menghapus semua jejak input hanya dengan menghapus tautan hasil di bilah alamat browser.",
        "Jika ada pertanyaan terkait penggunaan layanan, silakan hubungi melalui informasi kontak di bawah ini."
      ]
    },
    {
      "heading": "8. Data Pribadi Anak-anak",
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
        "Jika kebijakan ini diubah, tanggal mulai dan rincian perubahan akan diposting di halaman ini. Jika ada perubahan nyata dalam konten pemrosesan, seperti mulai menampilkan iklan atau menjual produk berbayar, informasi tentang perubahan tersebut akan diberitahukan terlebih dahulu."
      ]
    }
  ],
  "effectiveLabel": "Tanggal Berlaku"
};

const d1 = {
  "title": "syarat dan ketentuan",
  "intro": "Ketentuan ini menetapkan syarat penggunaan Saju-Link (selanjutnya disebut \"Layanan\"). Dengan menggunakan layanan ini, Anda dianggap telah menyetujui ketentuan ini.",
  "effectiveLabel": "Tanggal mulai",
  "sections": [
    {
      "heading": "1. Sifat Layanan",
      "paragraphs": [
        "Layanan ini menerapkan aturan dari ilmu tradisional Mingli (saju) berdasarkan tanggal lahir dan waktu lahir yang dimasukkan, dan menunjukkan referensi untuk pilar saju, kekuatan lima elemen, kekuatan dan kelemahan hari, serta posisi pertemuan antara hari tersebut dan pilar saju.",
        "Skor dan penjelasan yang diberikan adalah **materi referensi dari perspektif tradisional Myeongri (명리), dan bukan prediksi ilmiah atau kepastian mengenai masa depan, kesehatan, atau kekayaan individu.** Skor yang rendah tidak berarti hari itu buruk, dan skor yang tinggi juga tidak menjamin apapun.",
        "**Pernyataan penjelasan untuk laporan berbayar ditulis oleh AI generatif.** Namun, semua nilai seperti skor, ganji, dan kekuatan lima elemen dihitung oleh mesin aturan layanan, dan AI tidak mengubah atau membuat nilai tersebut. Jika tidak dapat membuat penjelasan, deskripsi yang ditulis dengan nilai yang dihitung oleh mesin akan dimasukkan di tempat yang sama, dan jumlah halaman dokumen serta item yang dimuat adalah seperti yang tercantum di pasal 3 di bawah ini."
      ]
    },
    {
      "heading": "2. Biaya Layanan",
      "paragraphs": [
        "Layanan saat ini disediakan secara gratis dan tidak memerlukan pendaftaran anggota.",
        "Ketika penjualan produk berbayar (dua jenis laporan PDF) dimulai, ketentuan pada pasal 3 di bawah ini akan berlaku. Ketentuan ini akan diinformasikan kembali sebelum dimulainya penjualan."
      ]
    },
    {
      "heading": "3. Produk Berbayar dan Pengembalian Dana",
      "paragraphs": [
        "Produk berbayar yang dijual adalah **satu PDF laporan bacaan kehidupan saju (사주) dan ramalan tahun ini**. Kami akan membuat dokumen dari hasil yang ditampilkan di layar, dan juga akan mencakup informasi yang tidak ditampilkan di layar.",
        "**A4 9 halaman** — Sampul dan ringkasan, kecenderungan dan kekuatan bawaan·hal-hal yang perlu diperhatikan, delapan karakter dari natal chart (saju) dan kekuatan lima elemen, kekuatan dan kelemahan hari lahir serta energi yang dibutuhkan saat ini (yongsin), sepuluh dewa dari empat pilar dan posisi yang menonjol dalam saju ini, empat bidang kehidupan yang dilihat dari natal chart (keuangan·cinta·pekerjaan·kesehatan) dan dasarnya, rincian koreksi waktu Jin Tai Yang, serta ramalan tahun ini. Pembayaran domestik {priceDomestic} (termasuk PPN), pembayaran internasional {priceGlobal}.",
        "**Ramalan hari ini tidak tercantum dalam dokumen ini.** Nilai yang berubah setiap hari disediakan secara gratis di layar, dan dokumen ini terdiri dari penjelasan natal chart yang tidak akan berubah seumur hidup dan ramalan tahun ini.",
        "Pembayaran domestik dapat dilakukan melalui Toss Payments menggunakan kartu kredit, kartu debit, dan pembayaran mudah (seperti Toss Pay, Kakao Pay, Naver Pay, Payco, dll.), sedangkan pembayaran internasional dilakukan melalui PayPal yang disediakan oleh PortOne. Jumlah akhir mengikuti jumlah yang ditampilkan di layar pembayaran.",
        "**Layanan tidak menyimpan input pengguna maupun file PDF yang dihasilkan.** Setelah pembayaran disetujui, dokumen akan dibuat dan diunduh secara langsung, tanpa menyisakan apa pun di server. Oleh karena itu, file yang diunduh harus disimpan oleh pengguna secara langsung.",
        "Untuk kasus di mana unduhan terhenti atau file hilang, Anda dapat mengunduh kembali **hingga 5 kali** dengan pesanan yang sama. Namun, jika nilai input hilang di luar layar hasil, file tidak dapat dibuat kembali, jadi harap simpan file segera setelah pembayaran."
      ],
      "bullets": [
        "**Setelah pembayaran, sebelum unduhan dimulai** Anda dapat membatalkan kapan saja dan mendapatkan pengembalian penuh.",
        "**Setelah unduhan selesai** penarikan kembali permohonan karena perubahan pikiran tidak diperbolehkan. Ini adalah konten digital yang disediakan segera setelah pembayaran dan tidak dapat dipulihkan ke keadaan semula, yang termasuk dalam alasan pembatasan penarikan kembali permohonan sebagaimana diatur dalam Pasal 17 Ayat 2 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik.",
        "**Jika dokumen tidak dibuat karena kesalahan sistem, file tidak dapat dibuka, atau jumlah pembayaran berbeda dari pesanan** akan diproses dengan penerbitan ulang atau pengembalian penuh.",
        "**Keluhan mengenai isi hasil** tidak termasuk dalam alasan pengembalian dana. Pembacaan saju (사주) adalah bahan referensi dari perspektif tradisional, dan sifatnya telah diinformasikan sebelum pembayaran dilakukan (lihat Pasal 1 di atas).",
        "Permintaan ulang setelah menggunakan semua 5 kali pengeluaran tidak dianggap sebagai alasan untuk pengembalian dana.",
        "**Jika transaksi dilakukan oleh orang yang belum dewasa tanpa persetujuan dari wali hukum**, maka orang tersebut atau wali hukumnya dapat membatalkan transaksi tersebut. Harap beri tahu kami melalui kontak di bawah ini untuk pengembalian dana."
      ]
    },
    {
      "heading": "4. Mengenai hasil perhitungan",
      "paragraphs": [
        "Semua skor dihitung berdasarkan aturan yang dipublikasikan, sehingga jika nilai yang sama dimasukkan, hasilnya akan selalu sama.",
        "Jika waktu kelahiran tidak dimasukkan, perhitungan akan dilakukan tanpa mempertimbangkan shijoo (시주), sehingga hasilnya dapat berbeda. Semakin tepat lokasi kelahiran yang dipilih, semakin akurat perhitungan shijoo.",
        "Perhitungan saju (사주) menggunakan pustaka perhitungan yang dipublikasikan, dan hasilnya dapat berbeda tergantung pada cara penanganan musim dan zona waktu."
      ]
    },
    {
      "heading": "5. Tanggung Jawab Pengguna",
      "paragraphs": [
        "Pengguna dapat memasukkan tanggal lahir orang lain, namun hasil yang diperoleh tidak boleh digunakan untuk merugikan orang lain.",
        "Jangan menggunakan hasil layanan sebagai dasar untuk penilaian yang mempengaruhi hak orang lain, seperti pernikahan, perceraian, perekrutan, atau transaksi. Layanan ini tidak dibuat untuk tujuan tersebut."
      ]
    },
    {
      "heading": "6. Tindakan Terlarang",
      "paragraphs": [
        "Tindakan berikut tidak diperbolehkan."
      ],
      "bullets": [
        "Tindakan mengirimkan permintaan berlebihan dengan alat otomatis yang mengganggu operasi layanan",
        "Tindakan yang menyajikan hasil layanan seolah-olah merupakan fakta atau hasil penilaian seorang ahli.",
        "Tindakan untuk menggandakan atau mengubah layanan untuk menyediakan layanan yang sama"
      ]
    },
    {
      "heading": "7. Penafian",
      "paragraphs": [
        "Layanan hanya menyediakan bahan referensi, dan tidak bertanggung jawab atas keputusan yang diambil oleh pengguna berdasarkan hasil tersebut dan akibatnya.",
        "Kami tidak bertanggung jawab atas kerugian yang timbul akibat penghentian layanan karena alasan yang tidak dapat dikendalikan, seperti bencana alam, gangguan dari penyedia infrastruktur, dan sebagainya."
      ]
    },
    {
      "heading": "8. Hak Kekayaan Intelektual",
      "paragraphs": [
        "Hak atas tampilan, teks, dan implementasi aturan perhitungan layanan adalah milik penyelenggara. Pengguna dapat menyimpan atau membagikan hasil untuk tujuan pribadi."
      ]
    },
    {
      "heading": "9. Perubahan Ketentuan dan Hukum yang Berlaku",
      "paragraphs": [
        "Jika ada perubahan pada syarat dan ketentuan, kami akan mempostingnya di halaman ini bersama dengan tanggal mulai berlaku.",
        "Ketentuan ini tunduk pada hukum Republik Korea, dan sengketa yang berkaitan dengan penggunaan layanan akan mengikuti prosedur yang ditentukan oleh peraturan hukum yang relevan."
      ]
    }
  ]
};

const d2 = {
  "title": "Kebijakan Pengembalian dan Pembatalan",
  "intro": "Ini adalah standar pembatalan dan pengembalian untuk laporan bacaan saju (사주) PDF. Kami telah mengumpulkan informasi yang sama seperti dalam pasal 3 dari syarat dan ketentuan.",
  "sections": [
    {
      "heading": "1. Sifat Produk",
      "paragraphs": [
        "Produk yang dijual adalah **laporan bacaan saju (사주) PDF (A4 5 halaman)** dan **laporan premium bacaan saju (사주) PDF (A4 7 halaman)**, dan keduanya adalah konten digital yang dibuat dan dikirimkan segera setelah pembayaran disetujui.",
        "**Layanan ini tidak menyimpan input pengguna maupun file PDF yang dibuat.** Oleh karena itu, file yang diunduh harus disimpan oleh pengguna secara langsung."
      ]
    },
    {
      "heading": "2. Pembatalan Pesanan",
      "paragraphs": [
        "Mengikuti standar yang ditetapkan oleh Undang-Undang Perdagangan Elektronik."
      ],
      "bullets": [
        "**Sebelum unduhan dimulai,** Anda dapat membatalkan kapan saja dan mendapatkan pengembalian penuh.",
        "**Setelah unduhan selesai,** pembatalan karena perubahan pikiran tidak diperbolehkan. Ini adalah konten digital yang disediakan segera setelah pembayaran dan tidak dapat dikembalikan ke keadaan semula, yang termasuk dalam alasan pembatasan yang ditetapkan dalam Pasal 17 Ayat 2 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik. Kami memberi tahu dan mendapatkan persetujuan mengenai hal ini di layar pembayaran."
      ]
    },
    {
      "heading": "3. Kasus Pengembalian Penuh",
      "paragraphs": [
        "Dalam kasus berikut, setelah memverifikasi alasan, kami akan memproses penggantian atau pengembalian penuh."
      ],
      "bullets": [
        "Jika dokumen tidak dibuat karena kesalahan sistem",
        "Jika file yang diunduh tidak dapat dibuka",
        "Jika jumlah pembayaran berbeda dari pesanan",
        "**Jika pembayaran dilakukan oleh orang yang belum dewasa tanpa persetujuan wali hukum** — Pemohon atau wali hukum dapat meminta pembatalan."
      ]
    },
    {
      "heading": "4. Kasus yang Bukan Alasan Pengembalian",
      "paragraphs": [],
      "bullets": [
        "**Ketidakpuasan terhadap isi hasil.** Pembacaan saju (사주) adalah referensi dari perspektif tradisional dan sifatnya telah diinformasikan sebelum pembayaran.",
        "Permintaan ulang setelah menggunakan semua 5 kali penggantian."
      ]
    },
    {
      "heading": "5. Cara Pengajuan",
      "paragraphs": [
        "Silakan ajukan pengembalian atau pertanyaan melalui pusat layanan pelanggan ({customerCenter}) atau email ({email}). Memberikan nomor pesanan akan mempercepat proses verifikasi.",
        "Pengembalian akan dilakukan melalui metode pembayaran yang digunakan, dan tergantung pada kebijakan perusahaan kartu atau penyedia pembayaran, mungkin memerlukan waktu 3-7 hari kerja untuk diproses."
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
        "**Pembacaan saju (사주) dan ramalan hari ini adalah gratis.** Tidak perlu mendaftar sebagai anggota.",
        "Anda dapat melihat delapan karakter dari natal chart, kekuatan lima elemen, kekuatan dan kelemahan hari, skor dan tingkat ramalan hari ini, serta skor dari empat bidang kehidupan di layar."
      ]
    },
    {
      "heading": "2. Laporan Pembacaan Saju Seumur Hidup dan Ramalan Tahun Ini PDF (Berbayar)",
      "paragraphs": [
        "Pembayaran domestik {priceDomestic} (termasuk pajak) · Pembayaran internasional {priceGlobal}",
        "Hasil di layar akan dibuat menjadi dokumen PDF **9 halaman A4**. Informasi yang tidak ditampilkan di layar — kekuatan dan kelemahan hari, energi yang diperlukan saat ini, sepuluh dewa dari empat pilar, posisi yang menonjol dalam saju ini, rincian perbaikan waktu matahari, empat bidang kehidupan yang dilihat dari natal chart dan angka dasarnya, serta rincian perbaikan waktu matahari tahun ini — akan disertakan.",
        "Dengan pesanan yang sama, Anda dapat mengunduh kembali **hingga 5 kali**. Namun, jika input hilang di luar layar hasil, Anda tidak dapat membuatnya lagi, jadi harap simpan file segera setelah pembayaran selesai."
      ]
    },
    {
      "heading": "4. Metode Pembayaran",
      "paragraphs": [
        "**Domestik** — Anda dapat menggunakan kartu kredit/debit dan pembayaran mudah (TossPay, KakaoPay, NaverPay, Payco, dll.) melalui Toss Payments.",
        "**Internasional** — Anda dapat membayar melalui PayPal melalui PortOne.",
        "Jumlah akhir yang harus dibayar mengikuti jumlah yang ditampilkan di layar pembayaran."
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
  "intro": "Saju-Link tidak menyimpan informasi yang diperlukan untuk pembacaan saju. Kebijakan ini menjelaskan apa yang diterima oleh layanan, apa yang tidak disimpan, dan apa yang dicatat secara otomatis.",
  "sections": [
    {
      "heading": "1. Informasi yang Tidak Disimpan",
      "paragraphs": [
        "Tanggal lahir, waktu lahir, tempat lahir, jenis kelamin, dan nama yang digunakan dalam pembacaan saju **tidak disimpan di mana pun.** Informasi ini hanya digunakan dalam memori server selama pemrosesan permintaan dan akan hilang bersama dengan respons.",
        "Tidak dicatat dalam basis data, dan tidak disimpan dalam file terpisah. Karena tidak ada pendaftaran anggota, nilai yang dimasukkan tidak terhubung dengan individu tertentu."
      ]
    },
    {
      "heading": "2. Informasi yang Termasuk dalam Tautan Hasil",
      "paragraphs": [
        "Alamat layar hasil mencakup nilai yang dimasukkan dalam bentuk yang terkode. Namun, nilai ini terletak setelah # dalam alamat, dan sesuai dengan standar web, konten setelah # tidak dikirimkan oleh browser ke server. Oleh karena itu, meskipun tautan hasil dibuka, catatan akses server hanya menyimpan jalur alamat.",
        "Jika tautan hasil dikirimkan kepada orang lain, orang tersebut juga dapat melihat hasil yang sama. Tautan itu sendiri menyimpan nilai yang dimasukkan, jadi keputusan untuk membagikannya adalah tanggung jawab pengguna."
      ]
    },
    {
      "heading": "3. Informasi yang Dikumpulkan Secara Otomatis",
      "paragraphs": [
        "Tidak ada informasi yang dikumpulkan oleh layanan untuk mengidentifikasi pengguna. Namun, catatan minimum yang diperlukan untuk operasi layanan web secara otomatis disimpan oleh penyedia infrastruktur."
      ],
      "bullets": [
        "Alamat IP yang diakses, waktu akses, jenis browser, dan catatan akses server umum lainnya",
        "Informasi negara — hanya digunakan untuk secara otomatis menentukan bahasa layar dan tidak disimpan"
      ]
    },
    {
      "heading": "4. Cookie dan Iklan",
      "paragraphs": [
        "Layanan itu sendiri tidak menggunakan cookie untuk mengidentifikasi atau melacak pengguna. Informasi yang dimasukkan dalam pembacaan saju tidak disampaikan kepada pengiklan.",
        "Layanan ini menampilkan iklan melalui Google AdSense. Dalam proses ini, hal-hal berikut terjadi."
      ],
      "bullets": [
        "Penyedia pihak ketiga, termasuk Google, dapat menyimpan atau membaca cookie di browser pengguna.",
        "Google menggunakan cookie berdasarkan catatan kunjungan ke situs ini dan beberapa situs lainnya untuk menampilkan iklan.",
        "Pengguna dapat menonaktifkan iklan yang dipersonalisasi di pengaturan iklan Google (google.com/settings/ads). Meskipun dinonaktifkan, iklan itu sendiri tetap ditampilkan, tetapi relevansinya dengan pengguna akan berkurang.",
        "Iklan yang dipersonalisasi dari seluruh penyedia pihak ketiga dapat dinonaktifkan sekaligus di aboutads.info/choices.",
        "Ada juga cara untuk memblokir cookie di pengaturan browser.",
        "Pengguna di Wilayah Ekonomi Eropa, Inggris, dan Swiss akan diminta persetujuan terlebih dahulu untuk penggunaan cookie iklan."
      ]
    },
    {
      "heading": "5. Informasi yang Disimpan Saat Pembayaran",
      "paragraphs": [
        "Saat ini tidak ada produk berbayar yang dijual, sehingga tidak ada informasi yang disimpan terkait pembayaran.",
        "Ketika penjualan dimulai, informasi berikut akan disimpan untuk pemrosesan pembayaran dan penyimpanan catatan transaksi sesuai dengan hukum yang berlaku. **Pada saat itu, nilai yang dimasukkan dalam pembacaan saju dan PDF yang dibuat tidak akan disimpan,** dan informasi yang mengidentifikasi pengguna seperti nama, kontak, dan alamat juga tidak akan diterima."
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
        "Karena tidak ada data pribadi yang disimpan, tidak ada data pribadi yang diberikan kepada pihak ketiga.",
        "Untuk menjalankan layanan, kami menggunakan infrastruktur hosting dari {hostingProvider}, dan dalam proses ini, catatan akses yang disebutkan di atas diproses sesuai dengan kebijakan penyedia tersebut.",
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
        "Jika kebijakan ini diubah, tanggal mulai dan rincian perubahan akan diposting di halaman ini. Jika ada perubahan nyata dalam konten pemrosesan, seperti mulai menampilkan iklan atau menjual produk berbayar, kami akan memberi tahu terlebih dahulu tentang perubahan tersebut."
      ]
    }
  ],
  "effectiveLabel": "Tanggal Berlaku"
};

const d5 = {
  "title": "Kebijakan Pengolahan Data Pribadi",
  "intro": "Saju-Link tidak menyimpan informasi yang diperlukan untuk pembacaan saju. Kebijakan ini menjelaskan apa yang diterima oleh layanan, apa yang tidak disimpan, dan apa yang dicatat secara otomatis.",
  "sections": [
    {
      "heading": "1. Informasi yang Tidak Disimpan",
      "paragraphs": [
        "Tanggal lahir, waktu lahir, tempat lahir, jenis kelamin, dan nama yang digunakan dalam pembacaan saju **tidak disimpan di mana pun.** Informasi tersebut hanya digunakan dalam memori server selama pemrosesan permintaan dan akan hilang bersama dengan respons.",
        "Tidak dicatat dalam basis data, dan tidak disimpan dalam file terpisah. Karena tidak ada pendaftaran anggota, nilai yang dimasukkan tidak terhubung dengan individu tertentu."
      ]
    },
    {
      "heading": "2. Informasi yang Termasuk dalam Tautan Hasil",
      "paragraphs": [
        "Alamat layar hasil mencakup nilai yang dimasukkan dalam bentuk yang terkode. Namun, nilai ini terletak setelah # di alamat, dan menurut standar web, konten setelah # tidak dikirimkan oleh browser ke server. Oleh karena itu, meskipun tautan hasil dibuka, catatan akses server hanya menyimpan jalur alamat.",
        "Jika tautan hasil dikirimkan kepada orang lain, orang tersebut juga dapat melihat hasil yang sama. Tautan itu sendiri menyimpan nilai yang dimasukkan, jadi keputusan untuk membagikannya adalah tanggung jawab pengguna."
      ]
    },
    {
      "heading": "3. Informasi yang Dikumpulkan Secara Otomatis",
      "paragraphs": [
        "Tidak ada informasi yang dikumpulkan oleh layanan untuk mengidentifikasi pengguna. Namun, catatan minimum yang diperlukan untuk operasi layanan web secara otomatis disimpan oleh penyedia infrastruktur."
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
        "Saat ini, tidak ada iklan yang ditampilkan dalam layanan ini. Jika iklan mulai ditampilkan di masa depan, penyedia iklan (misalnya, Google) dapat menggunakan cookie untuk menampilkan iklan. Dalam hal ini, ketentuan ini akan diperbarui terlebih dahulu untuk menjelaskan apa yang berubah sebelum dimulai."
      ]
    },
    {
      "heading": "5. Informasi yang Disimpan Saat Pembayaran",
      "paragraphs": [
        "Ketika produk berbayar (laporan PDF) dibayar, informasi pesanan disimpan untuk pemrosesan pembayaran dan penyimpanan catatan transaksi sesuai dengan undang-undang.",
        "**Nilai yang dimasukkan dalam pembacaan saju dan PDF yang dihasilkan tidak disimpan meskipun telah dibayar.** Prinsip di atas tetap berlaku terlepas dari status pembayaran. Item yang disimpan adalah sebagai berikut, dan informasi yang mengidentifikasi pengguna seperti nama, kontak, dan alamat tidak termasuk."
      ],
      "bullets": [
        "Nomor pesanan dan pengidentifikasi pembayaran",
        "Jumlah pembayaran, mata uang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Klasifikasi produk, status pemrosesan, jumlah unduhan dokumen, waktu pemesanan",
        "Bahasa layar pada saat pemesanan dan klasifikasi wilayah pembayaran (dalam negeri, luar negeri)",
        "Masa penyimpanan — Menurut Pasal 6 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik, catatan pembayaran dan penyediaan barang akan disimpan selama 5 tahun, dan catatan keluhan atau sengketa konsumen akan disimpan selama 3 tahun sebelum dihancurkan."
      ]
    },
    {
      "heading": "6. Penyediaan kepada Pihak Ketiga dan Penanganan yang Diberikan",
      "paragraphs": [
        "Karena tidak menyimpan informasi pribadi yang mengidentifikasi pengguna, tidak ada informasi pribadi yang disediakan kepada pihak ketiga. Pemrosesan pembayaran diserahkan kepada penyedia di bawah ini.",
        "Untuk operasi layanan, infrastruktur hosting {hostingProvider} digunakan, dan dalam proses ini, catatan akses di atas diproses sesuai dengan kebijakan penyedia tersebut.",
        "Pembayaran domestik diproses oleh Toss Payments, sementara pembayaran internasional diproses melalui PayPal oleh PortOne. Informasi metode pembayaran seperti nomor kartu dan nomor rekening diproses langsung oleh penyedia tersebut, dan layanan tidak menerima atau menyimpannya."
      ]
    },
    {
      "heading": "7. Hak Pengguna",
      "paragraphs": [
        "Karena nilai yang dimasukkan dalam pembacaan saju tidak disimpan, tidak ada yang dapat diminta untuk dilihat, diperbaiki, atau dihapus. Catatan pesanan yang tersisa setelah pembayaran memiliki kewajiban untuk disimpan selama periode yang ditentukan oleh undang-undang, sehingga tidak dapat dihapus selama periode tersebut, dan setelah periode berakhir, akan dihancurkan.",
        "Pengguna dapat menghapus semua jejak input hanya dengan menghapus tautan hasil di bilah alamat browser.",
        "Jika ada pertanyaan terkait penggunaan layanan, silakan beri tahu kami melalui kontak di bawah ini."
      ]
    },
    {
      "heading": "8. Data Pribadi Anak-anak",
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
        "Jika kebijakan ini diubah, tanggal mulai dan isi perubahan akan diposting di halaman ini. Jika ada perubahan nyata dalam konten pemrosesan seperti mulai menampilkan iklan atau menjual produk berbayar, kami akan memberi tahu terlebih dahulu tentang fakta perubahan tersebut."
      ]
    }
  ],
  "effectiveLabel": "Tanggal Berlaku"
};

const d6 = {
  "title": "Ketentuan Layanan",
  "intro": "Ketentuan ini menetapkan syarat penggunaan Saju-Link (selanjutnya disebut \"Layanan\"). Dengan menggunakan layanan ini, Anda dianggap telah menyetujui ketentuan ini.",
  "sections": [
    {
      "heading": "1. Sifat Layanan",
      "paragraphs": [
        "Layanan ini menunjukkan referensi berdasarkan aturan tradisional Mingli (saju) yang diterapkan pada tanggal lahir dan waktu kelahiran yang dimasukkan, termasuk pilar saju, kekuatan lima elemen, kekuatan hari, serta posisi yang bertemu antara hari tersebut dan pilar saju.",
        "Skor dan penjelasan yang diberikan adalah **referensi dari perspektif Mingli tradisional dan bukan prediksi ilmiah atau kepastian tentang masa depan, kesehatan, atau kekayaan individu.** Skor yang rendah tidak berarti hari tersebut buruk, dan skor yang tinggi tidak menjamin apa pun.",
        "**Kalimat penjelasan dari laporan berbayar ditulis oleh AI generatif.** Namun, semua angka seperti skor, ganji, dan kekuatan elemen dihitung oleh mesin aturan layanan, dan AI tidak mengubah atau menciptakan nilai tersebut. Jika penjelasan tidak dapat dibuat, deskripsi yang ditulis berdasarkan nilai yang dihitung oleh mesin akan dimasukkan di tempat yang sama, dan jumlah halaman serta item yang dimuat dalam dokumen adalah seperti yang dijelaskan di bawah pasal 3."
      ]
    },
    {
      "heading": "2. Biaya Penggunaan",
      "paragraphs": [
        "Pembacaan saju dan pemeriksaan keberuntungan hari ini adalah gratis dan tidak memerlukan pendaftaran anggota.",
        "Menerima hasil dalam bentuk laporan PDF adalah berbayar. Harga dan syarat akan ditampilkan di bawah pasal 3 dan layar pembayaran."
      ]
    },
    {
      "heading": "3. Produk Berbayar dan Pengembalian",
      "paragraphs": [
        "Produk berbayar yang dijual adalah **satu PDF laporan saju seumur hidup dan keberuntungan tahun ini**. Ini adalah dokumen yang dibuat dari hasil layar, dan akan mencakup informasi yang tidak ada di layar.",
        "**9 halaman A4** — sampul dan ringkasan, kecenderungan dan kekuatan bawaan, hal-hal yang perlu diperhatikan, delapan karakter pilar saju dan kekuatan lima elemen, kekuatan hari dan energi yang diperlukan saat ini (yongsin), sepuluh dewa dari empat pilar dan posisi yang menonjol dalam saju ini, empat bidang kehidupan yang dilihat dari pilar saju (kekayaan, cinta, pekerjaan, kesehatan) dan dasar-dasarnya, rincian koreksi waktu Jin Tai Yang, serta keberuntungan tahun ini akan dimuat. Pembayaran domestik {priceDomestic} (termasuk pajak), pembayaran internasional {priceGlobal}.",
        "**Keberuntungan hari ini tidak akan dimuat dalam dokumen ini.** Nilai yang berubah setiap hari disediakan secara gratis di layar, dan dokumen ini terdiri dari penjelasan pilar saju yang tidak berubah seumur hidup dan keberuntungan tahun ini.",
        "Pembayaran domestik dapat dilakukan melalui Toss Payments menggunakan kartu kredit/debit dan pembayaran mudah (Toss Pay, Kakao Pay, Naver Pay, Payco, dll.), sedangkan pembayaran internasional dilakukan melalui PayPal melalui PortOne. Jumlah akhir mengikuti jumlah yang ditampilkan di layar pembayaran.",
        "**Layanan tidak menyimpan input pengguna atau file PDF yang dibuat.** Setelah pembayaran disetujui, dokumen akan dibuat dan diunduh di tempat, dan tidak ada yang tersisa di server. Oleh karena itu, file yang diunduh harus disimpan oleh pengguna sendiri.",
        "Jika unduhan terhenti atau file hilang, Anda dapat mengunduh kembali hingga **5 kali** dengan pesanan yang sama. Namun, jika input hilang di luar layar hasil, tidak dapat dibuat kembali, jadi harap simpan file segera setelah pembayaran."
      ],
      "bullets": [
        "**Sebelum unduhan dimulai setelah pembayaran,** Anda dapat membatalkan kapan saja dan mendapatkan pengembalian penuh.",
        "**Setelah unduhan selesai,** pembatalan karena perubahan pikiran tidak diperbolehkan. Ini adalah konten digital yang disediakan segera setelah pembayaran dan tidak dapat dikembalikan ke keadaan semula, yang termasuk dalam alasan pembatasan pembatalan sesuai dengan Pasal 17 Ayat 2 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik.",
        "**Jika dokumen tidak dapat dibuat karena kesalahan sistem, file tidak dapat dibuka, atau jumlah pembayaran berbeda dari pesanan,** akan diproses dengan penerbitan ulang atau pengembalian penuh.",
        "**Keluhan tentang isi hasil** tidak termasuk dalam alasan pengembalian. Pembacaan saju adalah referensi dari perspektif Mingli tradisional dan sifatnya telah diinformasikan sebelum pembayaran (lihat pasal 1 di atas).",
        "Permintaan ulang setelah menggunakan semua 5 kali penerbitan ulang tidak termasuk dalam alasan pengembalian.",
        "**Jika seorang remaja melakukan pembayaran tanpa persetujuan wali hukum,** dia atau wali hukum dapat membatalkan pembayaran tersebut. Silakan beri tahu kami melalui kontak di bawah untuk mendapatkan pengembalian."
      ]
    },
    {
      "heading": "4. Tentang Hasil Perhitungan",
      "paragraphs": [
        "Semua skor dihitung berdasarkan aturan yang dipublikasikan, sehingga jika nilai yang sama dimasukkan, hasilnya akan selalu sama.",
        "Jika waktu kelahiran tidak dimasukkan, perhitungan akan dilakukan tanpa shiji (柱), sehingga hasilnya dapat berbeda. Semakin tepat lokasi kelahiran yang dipilih, semakin akurat perhitungan shiji.",
        "Perhitungan Manseong menggunakan pustaka perhitungan yang dipublikasikan, dan hasil dapat berbeda tergantung pada cara penanganan waktu dan musim."
      ]
    },
    {
      "heading": "5. Tanggung Jawab Pengguna",
      "paragraphs": [
        "Pengguna dapat memasukkan tanggal lahir orang lain, tetapi tidak boleh menggunakan hasil tersebut untuk merugikan orang lain.",
        "Jangan gunakan hasil layanan sebagai dasar untuk keputusan yang mempengaruhi hak orang lain, seperti pernikahan, perceraian, perekrutan, atau transaksi. Layanan ini tidak dibuat untuk tujuan tersebut."
      ]
    },
    {
      "heading": "6. Tindakan Terlarang",
      "paragraphs": [
        "Tindakan berikut tidak diperbolehkan."
      ],
      "bullets": [
        "Mengirim permintaan berlebihan dengan alat otomatis yang mengganggu operasi layanan",
        "Menyajikan hasil layanan seolah-olah merupakan fakta atau hasil penilaian ahli",
        "Menggandakan atau memodifikasi layanan untuk menyediakan layanan yang sama"
      ]
    },
    {
      "heading": "7. Penafian",
      "paragraphs": [
        "Layanan hanya menyediakan referensi dan tidak bertanggung jawab atas keputusan yang diambil pengguna berdasarkan hasil dan akibatnya.",
        "Kami tidak bertanggung jawab atas kerugian yang disebabkan oleh penghentian layanan karena alasan yang tidak dapat dikendalikan, seperti bencana alam atau gangguan dari penyedia infrastruktur."
      ]
    },
    {
      "heading": "8. Hak Kekayaan Intelektual",
      "paragraphs": [
        "Hak atas layar layanan, teks, dan implementasi aturan perhitungan dimiliki oleh operator. Pengguna dapat menyimpan atau membagikan hasil untuk tujuan pribadi."
      ]
    },
    {
      "heading": "9. Perubahan Ketentuan dan Hukum yang Berlaku",
      "paragraphs": [
        "Jika ketentuan diubah, akan diposting di halaman ini bersama dengan tanggal mulai berlaku.",
        "Ketentuan ini tunduk pada hukum Republik Korea, dan sengketa terkait penggunaan layanan akan mengikuti prosedur yang ditetapkan oleh undang-undang yang relevan."
      ]
    }
  ],
  "effectiveLabel": "Tanggal Berlaku"
};

const d7 = {
  "title": "Kebijakan Pengolahan Data Pribadi",
  "intro": "Saju-Link tidak menyimpan informasi yang diperlukan untuk pembacaan saju. Kebijakan ini menjelaskan apa yang diterima oleh layanan, apa yang tidak disimpan, dan apa yang dicatat secara otomatis.",
  "sections": [
    {
      "heading": "1. Informasi yang Tidak Disimpan",
      "paragraphs": [
        "Tanggal lahir, waktu lahir, tempat lahir, jenis kelamin, dan nama yang digunakan dalam pembacaan saju **tidak disimpan di mana pun.** Informasi ini hanya digunakan dalam memori server selama pemrosesan permintaan dan akan hilang bersama dengan respons.",
        "Tidak dicatat dalam basis data, dan tidak disimpan dalam file terpisah. Karena tidak ada pendaftaran anggota, nilai yang dimasukkan tidak terhubung dengan individu tertentu."
      ]
    },
    {
      "heading": "2. Informasi yang Terkandung dalam Tautan Hasil",
      "paragraphs": [
        "Alamat layar hasil mencakup nilai yang dimasukkan dalam bentuk yang terkode. Namun, nilai ini terletak setelah # di alamat, dan menurut standar web, konten setelah # tidak dikirimkan oleh browser ke server. Oleh karena itu, meskipun tautan hasil dibuka, hanya jalur alamat yang tersisa dalam catatan akses server.",
        "Jika tautan hasil dikirimkan kepada orang lain, orang tersebut juga dapat melihat hasil yang sama. Tautan itu sendiri menyimpan nilai yang dimasukkan, jadi keputusan untuk membagikannya adalah tanggung jawab pengguna."
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
        "Layanan itu sendiri tidak menggunakan cookie untuk mengidentifikasi atau melacak pengguna. Informasi yang dimasukkan dalam pembacaan saju tidak disampaikan kepada pengiklan.",
        "Layanan ini menampilkan iklan melalui Google AdSense. Dalam proses ini, hal-hal berikut terjadi."
      ],
      "bullets": [
        "Penyedia pihak ketiga, termasuk Google, dapat menyimpan atau membaca cookie di browser pengguna.",
        "Google menggunakan cookie berdasarkan catatan kunjungan ke situs ini dan beberapa situs lainnya untuk menampilkan iklan.",
        "Pengguna dapat menonaktifkan iklan yang dipersonalisasi di pengaturan iklan Google (google.com/settings/ads). Meskipun dinonaktifkan, iklan itu sendiri tetap ditampilkan, tetapi relevansinya dengan pengguna akan berkurang.",
        "Iklan yang dipersonalisasi dari semua penyedia pihak ketiga dapat dinonaktifkan sekaligus di aboutads.info/choices.",
        "Ada juga cara untuk memblokir cookie di pengaturan browser.",
        "Pengguna dari Wilayah Ekonomi Eropa, Inggris, dan Swiss akan diminta persetujuan terlebih dahulu untuk penggunaan cookie iklan."
      ]
    },
    {
      "heading": "5. Informasi yang Disimpan Saat Pembayaran",
      "paragraphs": [
        "Ketika produk berbayar (laporan PDF) dibayar, informasi pesanan disimpan untuk pemrosesan pembayaran dan penyimpanan catatan transaksi sesuai dengan hukum.",
        "**Nilai yang dimasukkan dalam pembacaan saju dan PDF yang dihasilkan tidak disimpan meskipun telah dibayar.** Prinsip di atas tetap berlaku terlepas dari status pembayaran. Item yang disimpan adalah sebagai berikut, dan informasi yang mengidentifikasi pengguna seperti nama, kontak, dan alamat tidak termasuk."
      ],
      "bullets": [
        "Nomor pesanan dan pengidentifikasi pembayaran",
        "Jumlah pembayaran, mata uang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Klasifikasi produk, status pemrosesan, jumlah unduhan dokumen, waktu pemesanan",
        "Bahasa layar pada saat pemesanan dan klasifikasi wilayah pembayaran (dalam negeri, luar negeri)",
        "Masa penyimpanan — Catatan tentang pembayaran dan penyediaan barang sesuai dengan Pasal 6 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik akan disimpan selama 5 tahun, dan catatan tentang pengaduan atau penyelesaian sengketa konsumen akan disimpan selama 3 tahun sebelum dihancurkan."
      ]
    },
    {
      "heading": "6. Penyediaan kepada Pihak Ketiga dan Penanganan yang Diberikan",
      "paragraphs": [
        "Karena tidak menyimpan data pribadi yang mengidentifikasi pengguna, tidak ada data pribadi yang disediakan kepada pihak ketiga. Pemrosesan pembayaran diserahkan kepada penyedia di bawah ini.",
        "Untuk operasi layanan, infrastruktur hosting dari {hostingProvider} digunakan, dan dalam proses ini, catatan akses di Pasal 3 diproses sesuai dengan kebijakan penyedia tersebut.",
        "Pembayaran domestik diproses oleh Toss Payments, sedangkan pembayaran internasional diproses melalui PayPal oleh PortOne. Informasi metode pembayaran seperti nomor kartu dan nomor rekening diproses langsung oleh penyedia tersebut, dan layanan tidak menerima atau menyimpannya."
      ]
    },
    {
      "heading": "7. Hak Pengguna",
      "paragraphs": [
        "Karena nilai yang dimasukkan dalam pembacaan saju tidak disimpan, tidak ada yang dapat diminta untuk dilihat, diperbaiki, atau dihapus. Catatan pesanan yang tersisa setelah pembayaran harus disimpan selama periode yang ditentukan oleh hukum, sehingga tidak dapat dihapus selama periode tersebut, dan setelah periode tersebut berakhir, akan dihancurkan.",
        "Pengguna dapat menghapus semua jejak input hanya dengan menghapus tautan hasil di bilah alamat browser.",
        "Jika ada pertanyaan terkait penggunaan layanan, silakan beri tahu kami melalui kontak di bawah ini."
      ]
    },
    {
      "heading": "8. Data Pribadi Anak-anak",
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
        "Jika kebijakan ini diubah, tanggal mulai dan isi perubahan akan diposting di halaman ini. Jika ada perubahan yang benar-benar mempengaruhi pemrosesan, seperti mulai menampilkan iklan atau menjual produk berbayar, kami akan memberi tahu terlebih dahulu tentang perubahan tersebut."
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
