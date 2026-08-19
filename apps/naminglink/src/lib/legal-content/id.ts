import { companyInfo, romanize, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Tanggal berlaku",
    referenceDate: "Per tanggal",
    login: "Masuk",
    close: "Tutup",
  },
  documents: {
    terms: {
      title: "Ketentuan Layanan",
      description: `Ketentuan ini menjelaskan syarat penggunaan dan cakupan layanan ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Sifat Layanan",
          paragraphs: [
            "Naming-Link adalah studio penamaan berbasis AI yang menyediakan empat layanan berikut. ① Pencocokan makna Hanja yang sesuai dengan nama dalam Hangul ② Mengubah nama dalam Hangul menjadi nama global ③ Mengubah nama asing menjadi nama Korea ④ Menuliskan nama global dalam Hangul sesuai pengucapan.",
            "Hasilnya adalah bahan referensi yang membantu dalam penamaan dan interpretasi, dan tidak menjamin kemungkinan pendaftaran resmi seperti pendaftaran akta kelahiran, paspor, visa, merek dagang, dokumen hukum, dan sebagainya.",
          ],
        },
        {
          title: "2. Penggunaan oleh Anggota dan Non-Anggota",
          paragraphs: [
            "Analisis nama dan akses kandidat berbasis iklan dapat digunakan oleh non-anggota. Pendaftaran anggota atau login hanya diminta untuk fungsi yang memerlukan akun seperti pemesanan barang dan pengecekan riwayat pemesanan.",
          ],
        },
        {
          title: "3. Tanggung Jawab Hasil AI dan Tinjauan",
          paragraphs: [
            "Hasil rekomendasi AI mencakup referensi linguistik, budaya, dan tradisional. Pengguna harus memverifikasi kesesuaian sebelum memilih nama akhir melalui lembaga terkait, ahli, pengguna lokal, dan tinjauan hukum/merek dagang.",
          ],
        },
        {
          title: "4. Layanan Berbayar",
          paragraphs: [
            "Rincian produk layanan pencocokan makna Hanja adalah sebagai berikut. ① Maksimal 5 kandidat dengan penjelasan rinci dan rincian komprehensif Hanja: ₩2,900 ② Maksimal 10 kandidat dengan penjelasan rinci yang diperluas, rincian komprehensif Hanja, dan PDF untuk disimpan: ₩4,900 ③ Maksimal 10 kandidat dengan rincian, rincian komprehensif Hanja, analisis Saju·Oheang, dan PDF untuk disimpan: ₩9,900.",
            "Layanan konversi nama global, konversi nama Korea, dan penulisan pengucapan Hangul dapat menyediakan produk yang mengungkapkan seluruh kandidat yang tersisa tanpa iklan sekaligus (pembayaran domestik ₩990, pembayaran luar negeri US$1.99). Sebelum fitur pembayaran diaktifkan, hanya akses berbasis iklan yang akan disediakan.",
            "Produk digital untuk pengguna global ④ Laporan komprehensif nama Hangul dalam format PDF (US$9.99): Seni nama dengan jenis huruf yang direkomendasikan, penjelasan makna, dan referensi Saju Oheang ⑤ Seni konversi pengucapan Hangul dalam format PDF (US$2.99): Seni nama dengan jenis huruf yang dipilih dan panduan pengucapan ⑥ Paket seni nama dalam format PDF (US$1.99): Menyediakan satu nama yang dipilih dalam seni berdasarkan jenis huruf yang dipilih. Harga dan jumlah jenis huruf yang diterapkan untuk setiap produk mengikuti nilai yang tertera di layar.",
            "Laporan rinci berbayar dan hasil analisis, file PDF dapat diakses kembali dan diunduh dalam waktu 24 jam setelah pembayaran selesai, dan akan dihapus secara otomatis setelah periode penyimpanan berakhir.",
            "Harga pembayaran domestik untuk barang fisik seperti stempel nama adalah ₩39,000 / ₩59,000 / ₩79,000 dan akan disediakan bersama dengan syarat per produk.",
            "Harga pembayaran luar negeri untuk barang fisik yang sama adalah US$39.90 / US$59.90 / US$79.90 dan sudah termasuk biaya pengiriman internasional.",
            "Semua produk berbayar akan menginformasikan isi produk, harga, cara penyediaan, dan syarat pengembalian sebelum pembayaran di layar.",
          ],
        },
        {
          title: "5. Layanan Berbasis Iklan",
          paragraphs: [
            "Pembukaan kunci kandidat melalui penayangan iklan hanya berlaku jika konfirmasi kompensasi normal dari penyedia iklan telah selesai. Pemutaran iklan otomatis, manipulasi kompensasi, dan permintaan berulang yang tidak normal dapat dibatasi.",
          ],
        },
        {
          title: "6. Tindakan Terlarang",
          paragraphs: [
            "Dilarang memasukkan informasi pribadi orang lain tanpa izin, menghasilkan nama untuk tujuan diskriminasi, kebencian, atau penipuan, permintaan berlebihan yang otomatis, menyebabkan gangguan layanan, dan penampilan sertifikasi resmi yang palsu pada hasil.",
          ],
        },
        {
          title: "7. Pembatasan Tanggung Jawab",
          paragraphs: [
            "Perusahaan tidak bertanggung jawab atas kerugian tidak langsung, kehilangan keuntungan yang diharapkan, penolakan pendaftaran resmi, atau sengketa pihak ketiga yang timbul dari penggunaan hasil rekomendasi AI, kecuali ada niat jahat atau kelalaian berat.",
          ],
        },
        {
          title: "8. Kontak",
          paragraphs: [
            `Pertanyaan layanan: ${companyInfo.email}`,
          ],
        },
      ],
    },
    privacy: {
      title: "Kebijakan Privasi",
      description: `Kebijakan ini menjelaskan standar pemrosesan data pribadi di ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Item Data Pribadi yang Diproses",
          paragraphs: [
            "Saat menggunakan layanan nama tanpa keanggotaan, nama, tanggal lahir, waktu lahir, negara, bahasa, tujuan penggunaan, dan petunjuk pengucapan diproses secara sementara selama proses pembuatan hasil analisis, tetapi konten yang dimasukkan dan hasil yang dihasilkan tidak disimpan dalam basis data layanan.",
            "Saat mendaftar atau masuk sebagai anggota, alamat email dan catatan login (riwayat otentikasi) akan diproses.",
            "Saat membayar laporan rinci berbayar, informasi identifikasi pesanan, status pembayaran, dan input serta hasil analisis yang diperlukan untuk pembuatan laporan akan diproses selama periode penyimpanan (24 jam setelah pembayaran). Informasi metode pembayaran seperti nomor kartu akan diproses langsung oleh penyedia layanan pembayaran, dan perusahaan tidak menyimpannya.",
            "Hanya saat menggunakan fungsi pemesanan barang, informasi tambahan seperti nama pemesan, email, kontak, alamat pengiriman, status pembayaran, dan informasi pemrosesan pesanan dapat diproses.",
            "Untuk stabilitas layanan dan pencegahan penyalahgunaan, hash pengunjung yang tidak teridentifikasi yang berubah setiap hari, waktu permintaan, jenis layanan, jumlah penggunaan gratis, token AI, waktu respons, status pemrosesan, serta paparan iklan dan acara penghargaan dapat diproses sebagai log operasi minimum.",
          ],
        },
        {
          title: "2. Tujuan Pemrosesan Data Pribadi",
          paragraphs: [
            "Data pribadi diproses untuk rekomendasi nama berdasarkan input, analisis pengucapan, analisis bahasa dan budaya berdasarkan negara, pembatasan penggunaan gratis, verifikasi penghargaan iklan, tanggapan terhadap pertanyaan pelanggan, pemrosesan pembayaran dan pengiriman, serta pencegahan penyalahgunaan.",
          ],
        },
        {
          title: "3. Penyimpanan dan Penghapusan",
          paragraphs: [
            "Input analisis dan hasil hanya akan disimpan di akun anggota jika anggota secara eksplisit memilih untuk menyimpan hasil tersebut, dan akan dihapus jika anggota menghapusnya atau tujuan penyimpanan telah berakhir. Input dan hasil dari anggota yang tidak terdaftar dan yang tidak memilih untuk menyimpan tidak akan disimpan.",
            "Input, hasil analisis, dan file PDF dari laporan rinci berbayar akan dihapus secara otomatis setelah 24 jam dari penyelesaian pembayaran. Catatan transaksi pembayaran dan pemesanan akan disimpan secara terpisah sesuai dengan periode penyimpanan yang ditetapkan oleh undang-undang yang berlaku.",
            "Detail pengiriman pesanan barang (nama pemesan, email, kontak, alamat pengiriman, permintaan, teks yang akan diukir pada stempel) akan dihancurkan setelah 90 hari sejak tanggal pengiriman selesai atau pesanan dibatalkan. Informasi input dari pesanan yang terhenti sebelum pembayaran akan dihancurkan setelah 24 jam. Meskipun telah dihancurkan, catatan transaksi pembayaran dan pesanan akan disimpan sesuai dengan periode penyimpanan yang ditetapkan oleh undang-undang yang berlaku.",
          ],
        },
        {
          title: "4. Pemberian dan Penugasan kepada Pihak Ketiga",
          paragraphs: [
            "Untuk menjalankan layanan, informasi yang diperlukan dapat diproses atau ditugaskan kepada Supabase (basis data, otentikasi), Vercel (hosting), OpenAI API (analisis AI), jaringan iklan, penyedia layanan pembayaran (PortOne), dan mitra pengiriman/pembuatan.",
          ],
        },
        {
          title: "5. Cookie dan Iklan",
          paragraphs: [
            "Layanan itu sendiri tidak menggunakan cookie untuk mengidentifikasi atau melacak pengguna. Informasi yang dimasukkan dalam analisis nama tidak disampaikan kepada pengiklan.",
            "Layanan ini menampilkan iklan melalui Google AdSense. Dalam proses ini, penyedia pihak ketiga termasuk Google dapat menyimpan atau membaca cookie di browser pengguna, dan Google menggunakan cookie berdasarkan riwayat kunjungan ke situs ini dan beberapa situs lainnya untuk menampilkan iklan.",
            "Cookie yang sama juga digunakan ketika menggunakan iklan berbasis imbalan dan offer wall. Layanan hanya memverifikasi apakah iklan telah ditonton sampai selesai dan fakta pembayaran imbalan yang terkait, dan tidak menerima informasi yang dapat mengidentifikasi pengguna dari pengiklan.",
            "Pengguna dapat menonaktifkan iklan yang disesuaikan di pengaturan iklan Google (google.com/settings/ads). Meskipun dinonaktifkan, iklan itu sendiri akan tetap ditampilkan, hanya relevansinya dengan pengguna yang akan berkurang. Iklan yang disesuaikan dari semua penyedia pihak ketiga dapat dinonaktifkan sekaligus di aboutads.info/choices, dan ada juga cara untuk memblokir cookie di pengaturan browser.",
            "Untuk pengguna di Wilayah Ekonomi Eropa, Inggris, dan Swiss, persetujuan akan diminta terlebih dahulu melalui pesan persetujuan Google sebelum menggunakan cookie iklan.",
          ],
        },
        {
          title: "6. Pemindahan Data Pribadi ke Luar Negeri",
          paragraphs: [
            "Perusahaan memindahkan (menugaskan pemrosesan) data pribadi ke luar negeri untuk penyediaan layanan sebagai berikut. Pemindahan dilakukan melalui metode transmisi melalui jaringan komunikasi.",
            "① OpenAI, L.L.C. (Amerika Serikat) — Item yang dipindahkan: nama, tanggal lahir, waktu lahir, jenis kelamin, negara, bahasa, dan input analisis lainnya — Tujuan pemindahan: analisis nama, pengucapan, dan makna berbasis AI — Periode penyimpanan dan penggunaan: selama periode penyediaan layanan (data input tidak digunakan untuk pelatihan model berdasarkan kebijakan OpenAI dan akan dihapus setelah maksimum 30 hari untuk tujuan pemantauan penyalahgunaan).",
            "② Supabase, Inc. (Amerika Serikat) — Item yang dipindahkan: informasi status pesanan dan pembayaran, email anggota, input dan hasil laporan berbayar (setelah pembayaran 24 jam), nama pemesan, kontak, dan alamat pengiriman saat memesan barang — Tujuan pemindahan: basis data, otentikasi, penyimpanan — Periode penyimpanan dan penggunaan: selama periode penyediaan layanan atau hingga periode penyimpanan masing-masing item.",
            "③ Vercel, Inc. (Amerika Serikat) — Item yang dipindahkan: informasi akses dan permintaan yang dikirim selama penggunaan layanan — Tujuan pemindahan: hosting aplikasi — Periode penyimpanan dan penggunaan: selama periode penyediaan layanan.",
            "Pengguna dapat menolak persetujuan pemindahan data pribadi ke luar negeri, namun, karena pemrosesan tersebut penting untuk penyediaan layanan, penolakan dapat membatasi penggunaan layanan.",
          ],
        },
        {
          title: "7. Hak Pengguna",
          paragraphs: [
            "Pengguna dapat meminta akses, perbaikan, penghapusan, penghentian pemrosesan, dan penarikan persetujuan atas data pribadi. Permintaan dapat diajukan melalui email pusat layanan pelanggan dan akan diproses setelah verifikasi identitas.",
          ],
        },
        {
          title: "8. Penanggung Jawab Perlindungan Data Pribadi",
          paragraphs: [
            `Penanggung jawab: ${romanize(companyInfo.privacyOfficer)}`,
            `Email: ${companyInfo.email}`,
          ],
        },
      ],
    },
    refund: {
      title: "Kebijakan Pengembalian Dana dan Pembatalan",
      description:
        "Kebijakan ini menjelaskan standar pembatalan dan pengembalian dana untuk produk digital dan merchandise pesanan khusus.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Prinsip Umum",
          paragraphs: [
            "Setelah fitur pembayaran diaktifkan, ruang lingkup pengembalian dana dapat bervariasi tergantung pada cara penyediaan setiap produk, waktu mulai produksi, dan apakah unduhan tersedia. Ketentuan spesifik akan diinformasikan di layar produk sebelum pembayaran.",
          ],
        },
        {
          title: "2. Laporan Detail Hanja",
          paragraphs: [
            "Harga pembayaran domestik untuk Laporan Detail Hanja adalah ₩2,900 / ₩4,900 / ₩9,900.",
            "Pembatalan dapat dilakukan sebelum dimulainya proses pembuatan analisis detail AI setelah pembayaran. Setelah pembuatan analisis selesai dan dapat diakses atau diunduh, pengembalian dana karena perubahan pikiran dapat dibatasi.",
            "Jika terdapat kesalahan konten, kegagalan pembuatan akibat gangguan sistem, atau ketidaksesuaian jumlah pembayaran yang terkonfirmasi, akan diproses dengan penerbitan ulang atau pengembalian dana. Jika unduhan dihentikan setelah masa penyimpanan (24 jam setelah pembayaran) berakhir, hal ini tidak termasuk dalam alasan pengembalian dana.",
          ],
        },
        {
          title: "3. Pengungkapan Seluruh Kandidat Secara Bersamaan",
          paragraphs: [
            "Harga pembayaran domestik untuk pengungkapan seluruh kandidat secara bersamaan adalah ₩990.",
            "Harga pembayaran internasional untuk produk yang sama adalah US$1.99.",
            "Pengungkapan kandidat untuk layanan konversi nama global, konversi nama Korea, dan penulisan pengucapan Hangul adalah konten digital yang disediakan segera setelah pembayaran. Pembatalan dapat dilakukan sebelum akses dimulai, dan setelah akses, pengembalian dana karena perubahan pikiran dapat dibatasi.",
            "Jika kandidat tidak dipublikasikan dengan benar karena kesalahan sistem, akan diproses dengan penyediaan ulang atau pengembalian dana.",
          ],
        },
        {
          title: "4. Produk PDF Digital Global",
          paragraphs: [
            "Laporan Nama Hangul (US$9.99), Seni Konversi Pengucapan Hangul (US$2.99), Paket Seni Nama (US$1.99) adalah konten digital yang dihasilkan setelah pembayaran. Pembatalan dapat dilakukan sebelum proses pembuatan PDF dimulai, dan setelah pembuatan selesai dan dapat diunduh, pengembalian dana karena perubahan pikiran dapat dibatasi.",
            "Jika terjadi kegagalan pembuatan, kesalahan konten, atau ketidaksesuaian jumlah pembayaran, akan diproses dengan penerbitan ulang atau pengembalian dana. Jika unduhan berakhir karena melewati masa penyimpanan (24 jam setelah pembayaran), itu tidak termasuk dalam alasan pengembalian dana.",
          ],
        },
        {
          title: "5. Barang Kustom yang Diproduksi (Stempel Nama, dll.)",
          paragraphs: [
            "Harga pembayaran domestik untuk barang kustom seperti stempel nama adalah ₩39,000 / ₩59,000 / ₩79,000.",
            "Harga pembayaran internasional untuk barang yang sama adalah US$39.90 / US$59.90 / US$79.90 dan sudah termasuk biaya pengiriman internasional.",
            "Barang kustom dapat dibatalkan hingga sebelum proses produksi dimulai. Setelah proses produksi dimulai, teks yang diukir akan dikonfirmasi secara pribadi sehingga pengembalian karena perubahan pikiran dapat dibatasi, dan kesalahan ketik, kerusakan, kesalahan produksi, atau masalah pengiriman akan ditangani dengan cara yang sesuai melalui pertukaran, produksi ulang, atau pengembalian setelah konfirmasi.",
          ],
        },
        {
          title: "6. Pembukaan Kunci Berbasis Iklan",
          paragraphs: [
            "Manfaat berbasis iklan tidak dianggap sebagai produk yang dibayar. Jika kompensasi tidak diberikan karena kesalahan jaringan iklan, akan diproses dengan percobaan ulang dalam layanan atau menghubungi pusat layanan pelanggan.",
          ],
        },
        {
          title: "7. Kontak",
          paragraphs: [
            `Pertanyaan tentang pengembalian dana: ${companyInfo.email}`,
          ],
        },
      ],
    },
    pricing: {
      title: "Panduan Harga",
      description:
        "Panduan ini menjelaskan cakupan layanan gratis dan harga produk berbayar.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "Analisis Dasar (Gratis)",
          paragraphs: [
            "Analisis dasar dari empat layanan yaitu pencocokan makna Hanja, konversi nama global, konversi nama Korea, dan penulisan pengucapan Hangul disediakan secara gratis untuk non-anggota dan mungkin ada batasan penggunaan harian. Di bawah ini hanya ditampilkan produk yang dapat dibayar sekarang beserta jumlahnya, dan produk yang belum dibuka tidak ditampilkan.",
          ],
        },
        {
          title: "Penggunaan Berbasis Iklan",
          paragraphs: [
            "Pembukaan kandidat setelah menonton iklan adalah manfaat berbasis iklan yang diberikan tanpa biaya tambahan. Satu iklan akan membuka satu kandidat berikutnya. Ketersediaan dapat bervariasi tergantung pada stok iklan, negara, perangkat, atau kebijakan penyedia iklan. Selama periode tanpa iklan, kandidat tersebut akan dibuka secara gratis tanpa melalui gerbang ini.",
          ],
        },
        {
          title: "Detail Produk Pencocokan Makna Karakter Tionghoa",
          paragraphs: [
            "Deskripsi rinci maksimum 5 kandidat dan detail komprehensif karakter Tionghoa: ₩2,900",
            "Deskripsi rinci maksimum 10 kandidat, detail komprehensif karakter Tionghoa, dan PDF untuk disimpan: ₩4,900",
            "Deskripsi maksimum 10 kandidat, detail komprehensif karakter Tionghoa, analisis Bazi dan Lima Elemen, serta PDF untuk disimpan: ₩9,900",
            "Laporan berbayar dan PDF dapat dilihat dan diunduh kembali dalam waktu 24 jam setelah pembayaran, dan akan dihapus secara otomatis setelah itu.",
          ],
        },
        {
          title: "Pengungkapan Semua Calon Secara Keseluruhan",
          paragraphs: [
            "Pengungkapan semua calon yang tersisa dalam layanan konversi nama global, konversi nama Korea, dan penulisan pengucapan Hangul secara sekaligus tanpa iklan (pembayaran domestik): ₩990",
            "Harga pembayaran luar negeri untuk produk yang sama: US$1.99",
          ],
        },
        {
          title: "Produk PDF Digital Global",
          paragraphs: [
            "Laporan Nama dalam Hangul PDF (Penjelasan seni dan makna dari semua nama kandidat yang direkomendasikan, serta referensi dari lima elemen dan astrologi Tiongkok): US$9.99",
            "Seni Konversi Pengucapan Hangul PDF (Seni nama dengan font pilihan dan panduan pengucapan): US$2.99",
            "Paket Seni Nama PDF (Seni berdasarkan font yang dipilih untuk satu nama yang dipilih): US$1.99",
            "Harga dan jumlah font yang diterapkan mengikuti nilai yang tertera di layar, dan PDF dapat diunduh kembali dalam waktu 24 jam setelah pembayaran, setelah itu akan dihapus secara otomatis.",
          ],
        },
        {
          title: "Barang dengan Nama Hangul",
          paragraphs: [
            "Stempel Nama (Pembayaran Dalam Negeri): ₩39,000 / ₩59,000 / ₩79,000",
            "Stempel Nama (Pembayaran Luar Negeri): US$39.90 / US$59.90 / US$79.90 (termasuk biaya pengiriman internasional)",
            "Barang fisik lainnya akan diinformasikan harga, biaya pengiriman, dan waktu produksi secara terpisah.",
          ],
        },
        {
          title: "Panduan Jumlah",
          paragraphs: [
            "Jumlah pembayaran, biaya pengiriman, waktu produksi, dan syarat pengembalian akan diinformasikan kembali di layar produk sebelum pembayaran, dan jika terdapat perbedaan antara jumlah dalam dokumen ini dan jumlah di layar produk, jumlah di layar produk yang menjadi acuan.",
          ],
        },
      ],
    },
  },
};

export default content;
