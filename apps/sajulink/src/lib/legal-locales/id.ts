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
        "Tanggal lahir, waktu kelahiran, tempat lahir, jenis kelamin, dan nama yang digunakan dalam pembacaan saju **tidak disimpan di mana pun.** Informasi ini hanya digunakan dalam memori server selama pemrosesan permintaan dan akan hilang bersama dengan respons.",
        "Tidak dicatat dalam basis data, dan tidak disimpan dalam file terpisah. Karena tidak ada pendaftaran anggota, nilai yang dimasukkan tidak terhubung dengan individu tertentu."
      ]
    },
    {
      "heading": "2. Informasi yang Termasuk dalam Tautan Hasil",
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
        "Ketika penjualan dimulai, informasi berikut akan disimpan untuk pemrosesan pembayaran dan penyimpanan catatan transaksi sesuai dengan undang-undang. **Pada saat itu, nilai yang dimasukkan dalam pembacaan saju dan PDF yang dihasilkan tidak akan disimpan**, dan informasi yang mengidentifikasi pengguna seperti nama, kontak, dan alamat juga tidak akan diterima."
      ],
      "bullets": [
        "Nomor pesanan dan pengidentifikasi pembayaran",
        "Jumlah pembayaran, mata uang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Klasifikasi produk, status pemrosesan, jumlah unduhan dokumen, waktu pemesanan",
        "Bahasa layar pada saat pemesanan dan klasifikasi wilayah pembayaran (dalam negeri, luar negeri)",
        "Masa penyimpanan — Sesuai dengan Pasal 6 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik, catatan pembayaran dan penyediaan barang akan disimpan selama 5 tahun, dan catatan tentang keluhan atau sengketa konsumen akan disimpan selama 3 tahun sebelum dihancurkan."
      ]
    },
    {
      "heading": "6. Penyediaan dan Penanganan Data Pribadi oleh Pihak Ketiga",
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
        "Jika kebijakan ini diubah, tanggal mulai dan perubahan akan diposting di halaman ini. Jika ada perubahan nyata dalam konten pemrosesan seperti mulai menampilkan iklan atau menjual produk berbayar, kami akan memberi tahu terlebih dahulu tentang fakta perubahan tersebut."
      ]
    }
  ],
  "effectiveLabel": "Tanggal Berlaku"
};

const d1 = {
  "title": "Syarat dan Ketentuan",
  "intro": "Syarat dan ketentuan ini menetapkan kondisi penggunaan Saju-Link (selanjutnya disebut \"Layanan\"). Dengan menggunakan layanan ini, Anda dianggap telah menyetujui syarat dan ketentuan ini.",
  "effectiveLabel": "Tanggal Berlaku",
  "sections": [
    {
      "heading": "1. Sifat Layanan",
      "paragraphs": [
        "Layanan ini menunjukkan referensi berdasarkan aturan tradisional Mingli (saju) yang diterapkan pada tanggal lahir dan waktu lahir yang dimasukkan, termasuk pilar saju, kekuatan lima elemen, kekuatan hari, dan posisi pertemuan antara hari tersebut dan pilar saju.",
        "Skor dan penjelasan yang diberikan adalah **referensi dari perspektif Mingli tradisional, dan bukan prediksi ilmiah atau kepastian mengenai masa depan, kesehatan, atau kekayaan individu.** Skor yang rendah tidak berarti hari tersebut buruk, dan skor yang tinggi tidak menjamin apapun.",
        "**Kalimat penjelasan dari laporan berbayar ditulis oleh AI generatif.** Namun, semua nilai seperti skor, ganji, dan kekuatan lima elemen dihitung oleh mesin aturan layanan, dan AI tidak mengubah atau menciptakan nilai tersebut. Jika penjelasan tidak dapat dibuat, deskripsi yang ditulis dengan nilai yang dihitung oleh mesin akan dimasukkan di tempat yang sama, dan jumlah halaman dokumen serta item yang dimuat adalah seperti yang tercantum di bawah pasal 3."
      ]
    },
    {
      "heading": "2. Biaya Layanan",
      "paragraphs": [
        "Saat ini, layanan ini disediakan secara gratis dan tidak memerlukan pendaftaran anggota.",
        "Ketika penjualan produk berbayar (laporan bacaan hidup saju PDF dan laporan premium PDF) dimulai, ketentuan di bawah pasal 3 akan berlaku. Ketentuan ini akan diinformasikan kembali sebelum dimulainya penjualan."
      ]
    },
    {
      "heading": "3. Produk Berbayar dan Pengembalian Dana",
      "paragraphs": [
        "Produk berbayar yang dijual adalah **laporan pembacaan kehidupan saju PDF dua jenis**. Keduanya akan mengubah hasil layar menjadi dokumen, dan juga mencakup informasi yang tidak ada di layar.",
        "**Laporan Pembacaan Kehidupan Saju PDF (A4 5 halaman)** — mencakup kecenderungan dan kekuatan bawaan, hal-hal yang perlu diperhatikan, delapan karakter dari natal chart saju, kekuatan elemen lima dan kekuatan hari lahir, energi yang diperlukan saat ini, serta ramalan hari ini dan empat bidang kehidupan (keuangan, cinta, pekerjaan, kesehatan). Pembayaran domestik {priceDomestic} (termasuk PPN), pembayaran internasional {priceGlobal}.",
        "**Laporan Premium Pembacaan Kehidupan PDF (A4 7 halaman)** — menambahkan dua halaman pada laporan total 5 halaman. Mencakup sepuluh karakter dari empat pilar dan analisis posisi energi berdasarkan musim, ramalan tahun ini, penyesuaian poin hari ini berdasarkan kategori, dan rincian koreksi waktu nyata. Pembayaran domestik {priceAffinityDomestic} (termasuk PPN), pembayaran internasional {priceAffinityGlobal}.",
        "Pembayaran domestik dapat dilakukan melalui Toss Payments menggunakan kartu kredit/debit dan pembayaran mudah (Toss Pay, Kakao Pay, Naver Pay, Payco, dll.), sedangkan pembayaran internasional dilakukan melalui PayPal melalui PortOne. Jumlah akhir mengikuti jumlah yang ditampilkan di layar pembayaran.",
        "**Layanan tidak menyimpan input pengguna maupun file PDF yang dihasilkan.** Setelah pembayaran disetujui, dokumen akan dibuat dan dikirimkan tanpa menyimpan apapun di server. Oleh karena itu, file yang diunduh harus disimpan oleh pengguna sendiri.",
        "Jika unduhan terhenti atau file hilang, file dapat diunduh kembali **hingga 5 kali** dengan pesanan yang sama. Namun, jika input hilang di luar layar hasil, tidak dapat dibuat kembali, jadi harap simpan file segera setelah pembayaran."
      ],
      "bullets": [
        "**Sebelum unduhan dimulai setelah pembayaran,** dapat dibatalkan kapan saja dan mendapatkan pengembalian dana penuh.",
        "**Setelah unduhan selesai,** pengembalian dana karena perubahan pikiran tidak dapat dilakukan. Ini adalah konten digital yang disediakan segera setelah pembayaran dan tidak dapat dikembalikan ke keadaan semula, yang termasuk dalam alasan pembatasan pengembalian dana sesuai dengan Pasal 17 Ayat 2 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik.",
        "**Jika dokumen tidak dibuat karena kesalahan sistem, file tidak dapat dibuka, atau jumlah pembayaran berbeda dari pesanan,** akan diproses dengan penerbitan ulang atau pengembalian dana penuh.",
        "**Keluhan mengenai isi hasil** tidak termasuk dalam alasan pengembalian dana. Pembacaan saju adalah referensi dari perspektif tradisional dan sifatnya telah diinformasikan sebelum pembayaran (lihat Pasal 1 di atas).",
        "Permintaan ulang setelah menggunakan semua 5 kali penerbitan ulang tidak termasuk dalam alasan pengembalian dana.",
        "**Jika seorang remaja melakukan pembayaran tanpa persetujuan dari wali hukum,** baik remaja tersebut atau wali hukum dapat membatalkan pembayaran tersebut. Silakan beri tahu kami melalui kontak di bawah untuk mendapatkan pengembalian dana."
      ]
    },
    {
      "heading": "4. Mengenai Hasil Perhitungan",
      "paragraphs": [
        "Semua skor dihitung berdasarkan aturan yang dipublikasikan, sehingga jika nilai yang sama dimasukkan, hasilnya akan selalu sama.",
        "Jika waktu kelahiran tidak dimasukkan, perhitungan akan dilakukan tanpa mempertimbangkan shiji (시주), sehingga hasilnya dapat berbeda. Semakin akurat lokasi kelahiran yang dipilih, semakin tepat perhitungan shiji.",
        "Perhitungan manse (manse) menggunakan pustaka perhitungan yang dipublikasikan, dan hasilnya dapat berbeda tergantung pada cara penanganan solar term dan zona waktu."
      ]
    },
    {
      "heading": "5. Tanggung Jawab Pengguna",
      "paragraphs": [
        "Pengguna dapat memasukkan tanggal lahir orang lain, namun hasilnya tidak boleh digunakan untuk merugikan orang lain.",
        "Jangan gunakan hasil layanan sebagai dasar untuk keputusan yang mempengaruhi hak orang lain, seperti pernikahan, perceraian, perekrutan, atau transaksi. Layanan ini tidak dibuat untuk tujuan tersebut."
      ]
    },
    {
      "heading": "6. Tindakan Terlarang",
      "paragraphs": [
        "Tindakan berikut tidak diizinkan."
      ],
      "bullets": [
        "Mengirimkan permintaan berlebihan dengan alat otomatis yang mengganggu operasi layanan",
        "Menyajikan hasil layanan seolah-olah merupakan fakta atau hasil penilaian ahli",
        "Menggandakan atau memodifikasi layanan untuk menyediakan layanan yang sama"
      ]
    },
    {
      "heading": "7. Penafian",
      "paragraphs": [
        "Layanan hanya menyediakan bahan referensi, dan kami tidak bertanggung jawab atas keputusan yang diambil oleh pengguna berdasarkan hasil tersebut dan akibatnya.",
        "Kami tidak bertanggung jawab atas kerugian yang timbul akibat penghentian layanan karena alasan yang tidak dapat kami kendalikan, seperti bencana alam, gangguan dari penyedia infrastruktur, dan sebagainya."
      ]
    },
    {
      "heading": "8. Hak Kekayaan Intelektual",
      "paragraphs": [
        "Hak atas tampilan layanan, teks, dan implementasi aturan perhitungan adalah milik penyelenggara. Pengguna dapat menyimpan atau membagikan hasil untuk tujuan pribadi."
      ]
    },
    {
      "heading": "9. Perubahan Ketentuan dan Hukum yang Berlaku",
      "paragraphs": [
        "Jika ada perubahan pada ketentuan, akan dipublikasikan di halaman ini bersamaan dengan tanggal mulai berlaku.",
        "Ketentuan ini tunduk pada hukum Republik Korea, dan sengketa yang terkait dengan penggunaan layanan akan mengikuti prosedur yang ditetapkan oleh undang-undang yang berlaku."
      ]
    }
  ]
};

const d2 = {
  "title": "Kebijakan Pengembalian dan Pembatalan",
  "intro": "Ini adalah standar pembatalan dan pengembalian untuk laporan bacaan saju (사주) PDF. Kami telah mengumpulkan informasi yang sama seperti yang tercantum dalam pasal 3 dari syarat dan ketentuan.",
  "sections": [
    {
      "heading": "1. Sifat Produk",
      "paragraphs": [
        "Produk yang dijual adalah **laporan bacaan saju (사주) PDF (A4 5 halaman)** dan **laporan bacaan premium (프리미엄) PDF (A4 7 halaman)**, dan keduanya adalah konten digital yang dibuat dan dikirimkan segera setelah pembayaran disetujui.",
        "**Layanan tidak menyimpan input pengguna maupun file PDF yang dibuat.** Oleh karena itu, file yang diunduh harus disimpan oleh pengguna secara langsung."
      ]
    },
    {
      "heading": "2. Pembatalan Pesanan",
      "paragraphs": [
        "Kami mengikuti standar yang ditetapkan oleh Undang-Undang Perdagangan Elektronik."
      ],
      "bullets": [
        "**Sebelum unduhan dimulai,** Anda dapat membatalkan kapan saja dan mendapatkan pengembalian penuh.",
        "**Setelah unduhan selesai,** pembatalan karena perubahan pikiran tidak diperbolehkan. Ini adalah konten digital yang disediakan segera setelah pembayaran dan tidak dapat dikembalikan ke keadaan semula, yang termasuk dalam alasan pembatasan yang ditentukan dalam Pasal 17 Ayat 2 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik. Kami memberi tahu dan mendapatkan persetujuan tentang hal ini di layar pembayaran."
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
        "**Jika pembayaran dilakukan oleh orang yang belum dewasa tanpa persetujuan wali hukum** — Baik diri sendiri atau wali hukum dapat meminta pembatalan."
      ]
    },
    {
      "heading": "4. Kasus yang Bukan Alasan Pengembalian",
      "paragraphs": [],
      "bullets": [
        "**Ketidakpuasan terhadap isi hasil.** Penafsiran saju (사주) adalah referensi dari perspektif tradisional dan sifatnya telah diinformasikan sebelum pembayaran.",
        "Permintaan ulang setelah menggunakan semua 5 kali penggantian."
      ]
    },
    {
      "heading": "5. Cara Pengajuan",
      "paragraphs": [
        "Silakan ajukan pengembalian atau pertanyaan melalui pusat layanan pelanggan ({customerCenter}) atau email ({email}). Memberikan nomor pesanan akan mempercepat konfirmasi.",
        "Pengembalian akan dilakukan melalui metode pembayaran yang Anda gunakan, dan tergantung pada kebijakan penerbit kartu atau penyedia pembayaran, mungkin memerlukan waktu 3-7 hari kerja untuk diproses."
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
        "Anda dapat melihat delapan karakter dari natal chart, kekuatan lima elemen, kekuatan dan kelemahan hari lahir, skor dan tingkat ramalan hari ini, serta skor dari empat bidang kehidupan di layar."
      ]
    },
    {
      "heading": "2. Laporan Pembacaan Hidup Saju PDF (berbayar)",
      "paragraphs": [
        "Pembayaran domestik {priceDomestic} (termasuk PPN) · Pembayaran internasional {priceGlobal}",
        "Hasil di layar akan dibuat menjadi dokumen PDF **5 halaman A4**. Ini mencakup sampul dan ringkasan, kecenderungan dan kekuatan bawaan, hal-hal yang perlu diperhatikan, kekuatan dan kelemahan natal chart dan lima elemen, ramalan hari ini, serta empat bidang kehidupan dalam satu dokumen.",
        "Anda dapat mengunduh kembali dengan **maksimal 5 kali** untuk pesanan yang sama. Namun, jika nilai input hilang setelah keluar dari layar hasil, Anda tidak dapat membuatnya lagi, jadi harap simpan file segera setelah pembayaran selesai."
      ]
    },
    {
      "heading": "3. Laporan Premium Pembacaan Hidup Saju PDF (berbayar)",
      "paragraphs": [
        "Pembayaran domestik {priceAffinityDomestic} (termasuk PPN) · Pembayaran internasional {priceAffinityGlobal}",
        "Ini adalah **7 halaman A4** dengan tambahan **dua halaman** dari laporan pembacaan hidup. Yang ditambahkan adalah sepuluh karakter dari empat pilar dan rincian perhitungan untuk ramalan tahun ini dan skor hari ini berdasarkan kategori. Ini adalah angka dasar yang tidak ditampilkan di layar.",
        "Syarat untuk penerbitan ulang sama dengan laporan pembacaan hidup."
      ]
    },
    {
      "heading": "4. Metode Pembayaran",
      "paragraphs": [
        "**Domestik** — Anda dapat menggunakan kartu kredit/debit dan pembayaran mudah (TossPay, KakaoPay, NaverPay, Payco, dll.) melalui Toss Payments.",
        "**Internasional** — Anda dapat membayar melalui PayPal menggunakan PortOne.",
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
      "heading": "2. Informasi yang Tercantum dalam Tautan Hasil",
      "paragraphs": [
        "Alamat layar hasil mencakup nilai yang dimasukkan dalam bentuk yang terkode. Namun, nilai ini terletak setelah # dalam alamat, dan menurut standar web, konten setelah # tidak dikirimkan oleh browser ke server. Oleh karena itu, meskipun tautan hasil dibuka, catatan akses server hanya menyimpan jalur alamat.",
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
        "Google menggunakan cookie untuk menampilkan iklan berdasarkan catatan kunjungan ke situs ini dan beberapa situs lainnya.",
        "Pengguna dapat menonaktifkan iklan yang dipersonalisasi di pengaturan iklan Google (google.com/settings/ads). Meskipun dinonaktifkan, iklan itu sendiri akan tetap ditampilkan, tetapi relevansinya dengan pengguna akan berkurang.",
        "Iklan yang dipersonalisasi dari semua penyedia pihak ketiga dapat dinonaktifkan sekaligus di aboutads.info/choices.",
        "Ada juga cara untuk memblokir cookie di pengaturan browser.",
        "Pengguna di Wilayah Ekonomi Eropa, Inggris, dan Swiss akan diminta persetujuan terlebih dahulu untuk penggunaan cookie iklan."
      ]
    },
    {
      "heading": "5. Informasi yang Disimpan Saat Pembayaran",
      "paragraphs": [
        "Saat ini tidak ada informasi yang disimpan terkait pembayaran karena tidak ada produk berbayar yang dijual.",
        "Ketika penjualan dimulai, informasi berikut akan disimpan untuk pemrosesan pembayaran dan penyimpanan catatan transaksi sesuai dengan hukum yang berlaku. **Pada saat itu, nilai yang dimasukkan dalam pembacaan saju dan PDF yang dihasilkan tidak akan disimpan**, dan informasi yang mengidentifikasi pengguna seperti nama, kontak, dan alamat juga tidak akan diterima."
      ],
      "bullets": [
        "Nomor pesanan dan pengidentifikasi pembayaran",
        "Jumlah pembayaran, mata uang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Klasifikasi produk, status pemrosesan, jumlah unduhan dokumen, waktu pemesanan",
        "Bahasa layar pada saat pemesanan dan klasifikasi wilayah pembayaran (dalam negeri, luar negeri)",
        "Masa penyimpanan — Menurut Pasal 6 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik, catatan pembayaran dan penyediaan barang akan disimpan selama 5 tahun, dan catatan penanganan keluhan atau sengketa konsumen akan disimpan selama 3 tahun sebelum dihancurkan."
      ]
    },
    {
      "heading": "6. Penyediaan dan Penanganan Data Pribadi oleh Pihak Ketiga",
      "paragraphs": [
        "Karena tidak ada data pribadi yang disimpan, tidak ada data pribadi yang disediakan kepada pihak ketiga.",
        "Untuk menjalankan layanan, kami menggunakan infrastruktur hosting dari {hostingProvider}, dan dalam proses ini, catatan akses yang disebutkan di atas diproses sesuai dengan kebijakan penyedia tersebut.",
        "Ketika penjualan produk berbayar dimulai, pembayaran domestik akan diserahkan kepada Toss Payments, dan pembayaran internasional akan diserahkan kepada PortOne (PayPal). Informasi metode pembayaran seperti nomor kartu dan nomor rekening akan diproses langsung oleh penyedia tersebut, dan layanan tidak akan menerima informasi tersebut."
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
        "Jika kebijakan ini diubah, tanggal mulai dan rincian perubahan akan diposting di halaman ini. Jika ada perubahan yang benar-benar mempengaruhi konten pemrosesan, seperti mulai menampilkan iklan atau menjual produk berbayar, kami akan memberi tahu terlebih dahulu."
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
        "Tanggal lahir, waktu lahir, tempat lahir, jenis kelamin, dan nama yang digunakan dalam pembacaan saju **tidak disimpan di mana pun.** Informasi ini hanya digunakan dalam memproses permintaan dan akan hilang bersama dengan respons.",
        "Tidak dicatat dalam basis data, dan tidak disimpan dalam file terpisah. Karena tidak ada pendaftaran anggota, nilai yang dimasukkan tidak terhubung dengan individu tertentu."
      ]
    },
    {
      "heading": "2. Informasi yang Tercantum dalam Tautan Hasil",
      "paragraphs": [
        "Alamat layar hasil mencakup nilai yang dimasukkan dalam bentuk yang terkodekan. Namun, nilai ini terletak setelah # di alamat, dan menurut standar web, konten setelah # tidak dikirimkan oleh browser ke server. Oleh karena itu, meskipun tautan hasil dibuka, hanya jalur alamat yang tersisa dalam catatan akses server.",
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
        "Saat ini, tidak ada iklan yang ditampilkan dalam layanan ini. Jika iklan ditampilkan di masa depan, penyedia iklan (misalnya, Google) dapat menggunakan cookie untuk menampilkan iklan. Pada saat itu, ketentuan ini akan diperbarui terlebih dahulu untuk menjelaskan apa yang berubah sebelum dimulai."
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
        "Masa penyimpanan — Sesuai dengan Pasal 6 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik, catatan pembayaran dan penyediaan barang akan disimpan selama 5 tahun, dan catatan keluhan atau sengketa konsumen akan disimpan selama 3 tahun sebelum dihancurkan."
      ]
    },
    {
      "heading": "6. Penyediaan kepada Pihak Ketiga dan Penugasan Pemrosesan",
      "paragraphs": [
        "Karena tidak menyimpan informasi pribadi yang mengidentifikasi pengguna, tidak ada informasi pribadi yang disediakan kepada pihak ketiga. Pemrosesan pembayaran ditugaskan kepada penyedia di bawah ini.",
        "Untuk operasi layanan, infrastruktur hosting {hostingProvider} digunakan, dan dalam proses ini, catatan akses yang disebutkan di atas diproses sesuai dengan kebijakan penyedia tersebut.",
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
        "Jika kebijakan ini diubah, tanggal mulai dan isi perubahan akan diposting di halaman ini. Jika ada perubahan nyata dalam pemrosesan, seperti mulai menampilkan iklan atau menjual produk berbayar, kami akan memberi tahu terlebih dahulu tentang fakta perubahan tersebut."
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
        "Layanan ini menunjukkan referensi berdasarkan aturan tradisional Mingli (saju) yang diterapkan pada tanggal lahir dan waktu kelahiran yang dimasukkan, termasuk pilar saju, kekuatan lima elemen, kekuatan hari, serta posisi yang bertemu antara hari dan pilar saju.",
        "Skor dan penjelasan yang diberikan adalah **referensi dari perspektif Mingli tradisional dan bukan prediksi ilmiah atau kepastian mengenai masa depan, kesehatan, atau kekayaan individu.** Skor yang rendah tidak berarti hari tersebut buruk, dan skor yang tinggi tidak menjamin apapun.",
        "**Kalimat penjelasan dari laporan berbayar ditulis oleh AI generatif.** Namun, semua angka seperti skor, ganji, dan kekuatan lima elemen dihitung oleh mesin aturan layanan, dan AI tidak mengubah atau menciptakan nilai tersebut. Jika penjelasan tidak dapat dibuat, deskripsi yang ditulis dengan nilai yang dihitung oleh mesin akan dimasukkan di tempat yang sama, dan jumlah halaman serta item yang dimuat dalam dokumen adalah seperti yang tercantum di bawah pasal 3."
      ]
    },
    {
      "heading": "2. Biaya Penggunaan",
      "paragraphs": [
        "Pembacaan saju dan pemeriksaan keberuntungan hari ini adalah gratis dan tidak memerlukan pendaftaran anggota.",
        "Menerima hasil dalam bentuk laporan PDF adalah berbayar. Harga dan syarat akan ditampilkan di bawah pasal 3 dan di layar pembayaran."
      ]
    },
    {
      "heading": "3. Produk Berbayar dan Pengembalian Dana",
      "paragraphs": [
        "Produk berbayar yang dijual adalah **dua jenis laporan PDF.** Keduanya membuat dokumen dari hasil di layar dan mencakup konten yang tidak ada di layar.",
        "**Laporan Pembacaan Saju PDF (A4 5 halaman)** — mencakup kecenderungan dan kekuatan bawaan, hal-hal yang perlu diperhatikan, delapan karakter pilar saju, kekuatan lima elemen dan kekuatan hari, energi yang diperlukan saat ini, keberuntungan hari ini, dan empat bidang kehidupan (kekayaan, cinta, pekerjaan, kesehatan). Pembayaran domestik {priceDomestic} (termasuk pajak), pembayaran internasional {priceGlobal}.",
        "**Laporan Premium PDF (A4 7 halaman)** — menambahkan dua halaman ke laporan utama. Mencakup sepuluh dewa dari empat pilar dan Wangshangxiushusa (musim menempatkan energi di posisi mana), keberuntungan tahun ini, penyesuaian skor hari ini per item, dan rincian koreksi waktu Jin Taiyang. Pembayaran domestik {priceAffinityDomestic} (termasuk pajak), pembayaran internasional {priceAffinityGlobal}.",
        "Pembayaran domestik dapat dilakukan melalui Toss Payments menggunakan kartu kredit/debit dan pembayaran mudah (Toss Pay, Kakao Pay, Naver Pay, Payco, dll.), sedangkan pembayaran internasional dilakukan melalui PayPal melalui PortOne. Jumlah akhir mengikuti jumlah yang ditampilkan di layar pembayaran.",
        "**Layanan tidak menyimpan input pengguna atau file PDF yang dibuat.** Setelah pembayaran disetujui, dokumen dibuat dan dikirimkan tanpa menyimpan apapun di server. Oleh karena itu, file yang diunduh harus disimpan oleh pengguna secara langsung.",
        "Jika unduhan terhenti atau file hilang, Anda dapat mengunduh kembali **hingga 5 kali** dengan pesanan yang sama. Namun, jika input hilang di luar layar hasil, tidak dapat dibuat kembali, jadi harap simpan file segera setelah pembayaran."
      ],
      "bullets": [
        "**Sebelum unduhan dimulai setelah pembayaran,** Anda dapat membatalkan kapan saja dan mendapatkan pengembalian penuh.",
        "**Setelah unduhan selesai,** pembatalan karena perubahan pikiran dibatasi. Ini adalah konten digital yang disediakan segera dan tidak dapat dikembalikan, yang termasuk dalam alasan pembatasan pembatalan sesuai dengan Pasal 17 Ayat 2 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik.",
        "**Jika dokumen tidak dibuat karena kesalahan sistem, file tidak dapat dibuka, atau jumlah pembayaran berbeda dari pesanan,** akan diproses dengan penerbitan ulang atau pengembalian penuh.",
        "**Keluhan mengenai isi hasil** tidak termasuk dalam alasan pengembalian dana. Pembacaan saju adalah referensi dari perspektif Mingli tradisional dan sifatnya telah diinformasikan sebelum pembayaran (lihat pasal 1 di atas).",
        "Permintaan ulang setelah menggunakan semua 5 kali penerbitan ulang tidak termasuk dalam alasan pengembalian dana.",
        "**Jika seorang remaja melakukan pembayaran tanpa persetujuan wali hukum,** baik remaja tersebut atau wali hukum dapat membatalkan pembayaran tersebut. Silakan beri tahu kami melalui kontak di bawah ini untuk mendapatkan pengembalian dana."
      ]
    },
    {
      "heading": "4. Mengenai Hasil Perhitungan",
      "paragraphs": [
        "Semua skor dihitung berdasarkan aturan yang dipublikasikan, sehingga jika nilai yang sama dimasukkan, hasilnya akan selalu sama.",
        "Jika waktu kelahiran tidak dimasukkan, perhitungan akan dilakukan tanpa pilar waktu (時柱), sehingga hasilnya dapat berbeda. Semakin akurat tempat lahir yang dipilih, semakin tepat perhitungan pilar waktu.",
        "Perhitungan Manseoryeok menggunakan pustaka perhitungan yang dipublikasikan, dan hasil dapat berbeda tergantung pada cara penanganan solar term dan zona waktu."
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
        "Layanan hanya menyediakan referensi dan tidak bertanggung jawab atas keputusan yang diambil pengguna berdasarkan hasil dan konsekuensinya.",
        "Kami tidak bertanggung jawab atas kerugian yang timbul akibat penghentian layanan karena alasan yang tidak dapat dikendalikan, seperti bencana alam atau gangguan dari penyedia infrastruktur."
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
        "Ketentuan ini tunduk pada hukum Republik Korea, dan sengketa yang berkaitan dengan penggunaan layanan akan mengikuti prosedur yang ditetapkan oleh peraturan yang relevan."
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
      "heading": "2. Informasi yang Tercantum dalam Tautan Hasil",
      "paragraphs": [
        "Alamat layar hasil mencakup nilai yang dimasukkan dalam bentuk yang terkode. Namun, nilai ini terletak setelah # dalam alamat, dan menurut standar web, konten setelah # tidak dikirimkan oleh browser ke server. Oleh karena itu, meskipun tautan hasil dibuka, catatan akses server hanya menyimpan jalur alamat.",
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
        "Google menggunakan cookie untuk menampilkan iklan berdasarkan catatan kunjungan ke situs ini dan beberapa situs lainnya.",
        "Pengguna dapat menonaktifkan iklan yang dipersonalisasi di pengaturan iklan Google (google.com/settings/ads). Meskipun dinonaktifkan, iklan itu sendiri akan tetap ditampilkan, tetapi relevansinya dengan pengguna akan berkurang.",
        "Iklan yang dipersonalisasi dari semua penyedia pihak ketiga dapat dinonaktifkan sekaligus di aboutads.info/choices.",
        "Ada juga cara untuk memblokir cookie di pengaturan browser.",
        "Pengguna di Wilayah Ekonomi Eropa, Inggris, dan Swiss akan diminta persetujuan terlebih dahulu untuk penggunaan cookie iklan."
      ]
    },
    {
      "heading": "5. Informasi yang Disimpan Saat Pembayaran",
      "paragraphs": [
        "Ketika produk berbayar (laporan PDF) dibeli, informasi pesanan disimpan untuk pemrosesan pembayaran dan penyimpanan catatan transaksi sesuai dengan hukum.",
        "**Nilai yang dimasukkan dalam pembacaan saju dan PDF yang dihasilkan tidak disimpan meskipun telah dibayar.** Prinsip di atas tetap berlaku terlepas dari status pembayaran. Item yang disimpan adalah sebagai berikut, dan informasi yang mengidentifikasi pengguna seperti nama, kontak, dan alamat tidak termasuk."
      ],
      "bullets": [
        "Nomor pesanan dan pengidentifikasi pembayaran",
        "Jumlah pembayaran, mata uang, dan status pembayaran (belum dibayar, pembayaran selesai, dibatalkan)",
        "Klasifikasi produk, status pemrosesan, jumlah unduhan dokumen, waktu pemesanan",
        "Bahasa layar pada saat pemesanan dan klasifikasi wilayah pembayaran (dalam negeri, luar negeri)",
        "Periode penyimpanan — Sesuai dengan Pasal 6 Undang-Undang Perlindungan Konsumen dalam Transaksi Elektronik, catatan pembayaran dan penyediaan barang akan disimpan selama 5 tahun, dan catatan penanganan keluhan atau sengketa konsumen akan disimpan selama 3 tahun sebelum dihancurkan."
      ]
    },
    {
      "heading": "6. Penyediaan kepada Pihak Ketiga dan Penugasan Pemrosesan",
      "paragraphs": [
        "Karena tidak menyimpan data pribadi yang mengidentifikasi pengguna, tidak ada data pribadi yang disediakan kepada pihak ketiga. Pemrosesan pembayaran ditugaskan kepada penyedia berikut.",
        "Untuk operasi layanan, infrastruktur hosting dari {hostingProvider} digunakan, dan dalam proses ini, catatan akses di Pasal 3 diproses sesuai dengan kebijakan penyedia tersebut.",
        "Pembayaran domestik diproses oleh Toss Payments, sedangkan pembayaran internasional diproses melalui PayPal oleh PortOne. Informasi metode pembayaran seperti nomor kartu dan nomor rekening diproses langsung oleh penyedia ini, dan layanan tidak menerima atau menyimpannya."
      ]
    },
    {
      "heading": "7. Hak Pengguna",
      "paragraphs": [
        "Karena nilai yang dimasukkan dalam pembacaan saju tidak disimpan, tidak ada pihak yang dapat diminta untuk melihat, mengoreksi, atau menghapus. Catatan pesanan yang tersisa setelah pembayaran memiliki kewajiban untuk disimpan selama periode yang ditentukan oleh hukum, sehingga tidak dapat dihapus selama periode tersebut, dan setelah periode berakhir, akan dihancurkan.",
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
