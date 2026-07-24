import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
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
            "Rincian produk layanan pencocokan makna Hanja adalah sebagai berikut. ① Deskripsi rinci maksimum 5 kandidat dan rincian komprehensif Hanja: 2.900 won ② Deskripsi rinci maksimum 10 kandidat, rincian komprehensif Hanja, dan PDF untuk disimpan: 4.900 won ③ Deskripsi rinci maksimum 10 kandidat, rincian komprehensif Hanja, analisis Saju/Oheong, dan PDF untuk disimpan: 9.900 won.",
            "Dalam layanan konversi nama global, konversi nama Korea, dan penulisan pengucapan Hangul, produk yang menampilkan semua kandidat yang tersisa tanpa iklan sekaligus (pembayaran domestik 990 won, pembayaran luar negeri US$1.99) dapat tersedia. Sebelum fungsi pembayaran diaktifkan, hanya akses berbasis iklan yang akan disediakan.",
            "Sebagai produk digital untuk pengguna global, ④ Laporan komprehensif nama dalam Hangul PDF (US$9.99): Seni nama dengan font yang direkomendasikan, penjelasan makna, dan referensi Saju Oheong ⑤ Seni konversi pengucapan Hangul PDF (US$2.99): Seni nama dengan font yang dipilih dan panduan pengucapan ⑥ Paket seni nama PDF (US$1.99): Menyediakan satu nama yang dipilih dalam seni berdasarkan font yang dipilih. Harga dan jumlah font yang diterapkan untuk setiap produk mengikuti nilai yang tertera di layar.",
            "Laporan rinci berbayar dan hasil analisis, file PDF dapat dilihat dan diunduh kembali dalam waktu 24 jam setelah pembayaran selesai, dan akan dihapus secara otomatis setelah masa penyimpanan berakhir.",
            "Barang fisik seperti stempel nama disediakan dengan harga masing-masing 39.000 won untuk domestik dan US$34.99 (termasuk biaya pengiriman internasional). Semua produk berbayar akan diinformasikan tentang isi produk, harga, cara penyediaan, dan syarat pengembalian sebelum pembayaran.",
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
            "Pertanyaan layanan: platforest.inc@gmail.com",
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
          title: "5. Pemindahan Data Pribadi ke Luar Negeri",
          paragraphs: [
            "Perusahaan memindahkan (menugaskan pemrosesan) data pribadi ke luar negeri untuk penyediaan layanan sebagai berikut. Pemindahan dilakukan melalui metode transmisi melalui jaringan komunikasi.",
            "① OpenAI, L.L.C. (Amerika Serikat) — Item yang dipindahkan: nama, tanggal lahir, waktu lahir, jenis kelamin, negara, bahasa, dan input analisis lainnya — Tujuan pemindahan: analisis nama, pengucapan, dan makna berbasis AI — Periode penyimpanan dan penggunaan: selama periode penyediaan layanan (data input tidak digunakan untuk pelatihan model berdasarkan kebijakan OpenAI dan akan dihapus setelah maksimum 30 hari untuk tujuan pemantauan penyalahgunaan).",
            "② Supabase, Inc. (Amerika Serikat) — Item yang dipindahkan: informasi status pesanan dan pembayaran, email anggota, input dan hasil laporan berbayar (setelah pembayaran 24 jam), nama pemesan, kontak, dan alamat pengiriman saat memesan barang — Tujuan pemindahan: basis data, otentikasi, penyimpanan — Periode penyimpanan dan penggunaan: selama periode penyediaan layanan atau hingga periode penyimpanan masing-masing item.",
            "③ Vercel, Inc. (Amerika Serikat) — Item yang dipindahkan: informasi akses dan permintaan yang dikirim selama penggunaan layanan — Tujuan pemindahan: hosting aplikasi — Periode penyimpanan dan penggunaan: selama periode penyediaan layanan.",
            "Pengguna dapat menolak persetujuan pemindahan data pribadi ke luar negeri, namun, karena pemrosesan tersebut penting untuk penyediaan layanan, penolakan dapat membatasi penggunaan layanan.",
          ],
        },
        {
          title: "6. Hak Pengguna",
          paragraphs: [
            "Pengguna dapat meminta akses, perbaikan, penghapusan, penghentian pemrosesan, dan penarikan persetujuan atas data pribadi. Permintaan dapat diajukan melalui email pusat layanan pelanggan dan akan diproses setelah verifikasi identitas.",
          ],
        },
        {
          title: "7. Penanggung Jawab Perlindungan Data Pribadi",
          paragraphs: [
            "Penanggung jawab: Gwak Eun-ha",
            "Email: platforest.inc@gmail.com",
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
          title: "2. Laporan Detail Hanja (₩2,900·₩4,900·₩9,900)",
          paragraphs: [
            "Pengembalian dana dapat dilakukan sebelum analisis detail AI dimulai setelah pembayaran. Setelah analisis selesai dan dapat diakses atau diunduh, pengembalian dana karena perubahan pikiran dapat dibatasi.",
            "Jika terdapat kesalahan konten, kegagalan sistem yang menyebabkan kegagalan pembuatan, atau ketidaksesuaian jumlah pembayaran yang terkonfirmasi, akan diproses dengan penerbitan ulang atau pengembalian dana. Jika unduhan dihentikan karena melewati periode penyimpanan (24 jam setelah pembayaran), itu tidak dianggap sebagai alasan untuk pengembalian dana.",
          ],
        },
        {
          title: "3. Publikasi Keseluruhan Kandidat (₩990 dalam negeri · US$1.99 luar negeri)",
          paragraphs: [
            "Publikasi keseluruhan kandidat untuk layanan konversi nama global, konversi nama Korea, dan penulisan pengucapan Hangul adalah konten digital yang disediakan segera setelah pembayaran. Pengembalian dana dapat dilakukan sebelum akses kandidat dimulai, dan setelah akses, pengembalian dana karena perubahan pikiran dapat dibatasi.",
            "Jika kandidat tidak dipublikasikan dengan benar karena kesalahan sistem, akan diproses dengan penyediaan ulang atau pengembalian dana.",
          ],
        },
        {
          title: "4. Produk PDF Digital Global (US$9.99·US$2.99·US$1.99)",
          paragraphs: [
            "Laporan komprehensif nama dalam Hangul (US$9.99), seni konversi pengucapan Hangul (US$2.99), paket seni nama (US$1.99) adalah konten digital yang dihasilkan setelah pembayaran. Pengembalian dana dapat dilakukan sebelum pembuatan PDF dimulai, dan setelah pembuatan selesai dan dapat diunduh, pengembalian dana karena perubahan pikiran dapat dibatasi.",
            "Jika terjadi kegagalan pembuatan, kesalahan konten, atau ketidaksesuaian jumlah pembayaran yang terkonfirmasi, akan diproses dengan penerbitan ulang atau pengembalian dana. Jika unduhan dihentikan karena melewati periode penyimpanan (24 jam setelah pembayaran), itu tidak dianggap sebagai alasan untuk pengembalian dana.",
          ],
        },
        {
          title: "5. Barang Kustom (Stempel Nama, dll.)",
          paragraphs: [
            "Barang kustom seperti stempel nama (₩39,000 dalam negeri · US$34.99 luar negeri, termasuk biaya pengiriman internasional) dapat dibatalkan hingga sebelum produksi dimulai. Setelah produksi dimulai, karena frasa yang diukir telah ditentukan secara pribadi, pengembalian dana karena perubahan pikiran dapat dibatasi, dan kesalahan ketik, kerusakan, kesalahan produksi, atau masalah pengiriman akan diproses dengan cara yang sesuai antara pertukaran, pembuatan ulang, atau pengembalian dana setelah diperiksa.",
          ],
        },
        {
          title: "5. Pembukaan Kunci Berbasis Iklan",
          paragraphs: [
            "Manfaat berbasis iklan tidak dianggap sebagai produk yang dibayar. Jika kompensasi tidak diberikan karena kesalahan jaringan iklan, akan diproses dengan percobaan ulang dalam layanan atau menghubungi pusat layanan pelanggan.",
          ],
        },
        {
          title: "6. Kontak",
          paragraphs: [
            "Pertanyaan tentang pengembalian dana: platforest.inc@gmail.com",
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
            "Analisis dasar dari empat layanan yaitu pencocokan makna karakter Tionghoa, konversi nama global, konversi nama Korea, dan penulisan pengucapan dalam Hangul disediakan secara gratis untuk non-anggota dan mungkin dikenakan batasan penggunaan harian.",
          ],
        },
        {
          title: "Penggunaan Berbasis Iklan",
          paragraphs: [
            "Pembukaan kunci kandidat setelah menonton iklan adalah manfaat berbasis iklan yang disediakan tanpa pembayaran terpisah. Satu iklan akan membuka satu kandidat berikutnya. Ketersediaan dapat bervariasi tergantung pada stok iklan, negara, perangkat, atau kebijakan penyedia iklan.",
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
          title: "Pengungkapan Semua Kandidat Secara Bersamaan",
          paragraphs: [
            "Pengungkapan semua kandidat yang tersisa dari layanan konversi nama global, konversi nama Korea, dan penulisan pengucapan dalam Hangul tanpa iklan sekaligus: Pembayaran domestik ₩990, pembayaran luar negeri US$1.99 (fungsi pembayaran sedang disiapkan)",
          ],
        },
        {
          title: "Produk PDF Digital Global",
          paragraphs: [
            "Laporan PDF nama dalam Hangul (seni nama lengkap dari semua kandidat yang direkomendasikan, penjelasan makna, dan referensi Bazi Lima Elemen): US$9.99",
            "PDF seni konversi pengucapan dalam Hangul (seni nama dengan font pilihan dan panduan pengucapan): US$2.99",
            "PDF paket seni nama (satu nama yang dipilih disediakan dalam seni berdasarkan font yang dipilih): US$1.99",
            "Harga dan jumlah font yang diterapkan mengikuti nilai yang diinformasikan di layar, dan PDF dapat diunduh kembali dalam waktu 24 jam setelah pembayaran dan akan dihapus secara otomatis setelah itu. (fungsi pembayaran sedang disiapkan)",
          ],
        },
        {
          title: "Barang-barang Nama dalam Hangul",
          paragraphs: [
            "Stempel nama: domestik ₩39,000 · luar negeri US$34.99 (termasuk biaya pengiriman internasional). Barang fisik lainnya akan diinformasikan harga, biaya pengiriman, dan waktu produksi secara terpisah.",
          ],
        },
        {
          title: "Panduan Sebelum Pembayaran Resmi",
          paragraphs: [
            "Setelah persetujuan PG, pendaftaran perdagangan jarak jauh, dan ketentuan kemitraan produksi ditetapkan, jumlah pembayaran yang sebenarnya, biaya pengiriman, waktu produksi, dan syarat pengembalian akan diinformasikan kembali di layar produk.",
          ],
        },
      ],
    },
  },
};

export default content;
