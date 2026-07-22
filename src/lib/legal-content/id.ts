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
            "Naming-Link adalah studio penamaan berbasis AI yang menyediakan empat layanan berikut: (1) pencocokan makna Hanja (aksara Tionghoa) untuk nama Korea (Hangul), (2) konversi nama Korea menjadi nama global, (3) konversi nama asing menjadi nama Korea, dan (4) transkripsi nama global ke dalam Hangul berdasarkan pelafalannya.",
            "Hasil layanan merupakan bahan referensi untuk membantu penamaan dan interpretasi, dan tidak menjamin kelayakan untuk pendaftaran resmi seperti register keluarga, paspor, visa, merek dagang, atau dokumen hukum.",
          ],
        },
        {
          title: "2. Anggota dan Pengguna Non-Anggota",
          paragraphs: [
            "Analisis nama dan pembukaan kandidat melalui imbalan iklan dapat digunakan tanpa akun. Pendaftaran atau login hanya diminta untuk fitur yang memerlukan akun, seperti pemesanan merchandise dan pemeriksaan riwayat pesanan.",
          ],
        },
        {
          title: "3. Hasil AI dan Tanggung Jawab Peninjauan",
          paragraphs: [
            "Hasil rekomendasi AI mencakup referensi kebahasaan, budaya, dan tradisi. Sebelum menetapkan nama secara final, pengguna wajib memastikan kesesuaiannya melalui lembaga terkait, ahli, penutur setempat, serta peninjauan hukum dan merek dagang.",
          ],
        },
        {
          title: "4. Layanan Berbayar",
          paragraphs: [
            "Produk detail dari layanan pencocokan makna Hanja adalah sebagai berikut: (1) penjelasan detail untuk maksimal 5 kandidat beserta analisis Hanja komprehensif: ₩2,900 (KRW); (2) penjelasan detail yang diperluas untuk maksimal 10 kandidat, analisis Hanja komprehensif, dan PDF koleksi: ₩4,900; (3) detail untuk maksimal 10 kandidat, analisis Hanja komprehensif, analisis Saju (Empat Pilar) dan Lima Elemen, serta PDF koleksi: ₩9,900.",
            "Pada layanan konversi nama global, konversi nama Korea, dan transkripsi pelafalan Hangul, dapat ditawarkan produk yang membuka seluruh kandidat tersisa sekaligus tanpa iklan (₩990). Sebelum fitur pembayaran diaktifkan, kandidat hanya dapat dibuka melalui imbalan iklan.",
            "Laporan detail berbayar, hasil analisis, dan berkas PDF dapat dilihat dan diunduh kembali selama 24 jam setelah pembayaran selesai, dan akan dihapus secara otomatis setelah masa penyimpanan berakhir.",
            "Produk fisik seperti merchandise nama Korea dapat ditawarkan dengan harga dan ketentuan tersendiri. Untuk setiap produk berbayar, isi produk, harga, cara penyediaan, dan ketentuan pengembalian dana diberitahukan di layar sebelum pembayaran.",
          ],
        },
        {
          title: "5. Layanan Imbalan Iklan",
          paragraphs: [
            "Pembukaan kandidat melalui penayangan iklan hanya berlaku setelah penyedia iklan mengonfirmasi imbalan yang sah. Pemutaran iklan secara otomatis, manipulasi imbalan, dan permintaan berulang yang tidak wajar dapat dibatasi.",
          ],
        },
        {
          title: "6. Perbuatan yang Dilarang",
          paragraphs: [
            "Hal-hal berikut dilarang: memasukkan data pribadi orang lain tanpa izin, membuat nama untuk tujuan diskriminasi, ujaran kebencian, atau penyamaran identitas, permintaan berlebihan secara otomatis, menimbulkan gangguan layanan, serta menampilkan hasil secara palsu seolah-olah tersertifikasi resmi.",
          ],
        },
        {
          title: "7. Pembatasan Tanggung Jawab",
          paragraphs: [
            "Kecuali terdapat kesengajaan atau kelalaian berat, perusahaan tidak bertanggung jawab atas kerugian tidak langsung, hilangnya keuntungan yang diharapkan, penolakan pendaftaran resmi, atau sengketa dengan pihak ketiga yang timbul dari penggunaan hasil rekomendasi AI.",
          ],
        },
        {
          title: "8. Kontak",
          paragraphs: [`Pertanyaan layanan: ${companyInfo.email}`],
        },
      ],
    },
    privacy: {
      title: "Kebijakan Privasi",
      description: `Kebijakan ini menjelaskan standar pemrosesan data pribadi di ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Data Pribadi yang Diproses",
          paragraphs: [
            "Saat menggunakan layanan nama sebagai non-anggota, nama, tanggal lahir, jam lahir, negara, bahasa, tujuan penggunaan, dan petunjuk pelafalan Anda diproses sementara dalam proses pembuatan hasil analisis, namun masukan dan hasil yang dihasilkan tidak disimpan dalam basis data layanan.",
            "Saat Anda membayar laporan detail berbayar, informasi identifikasi pesanan, status pembayaran, serta masukan dan hasil analisis yang diperlukan untuk membuat laporan diproses selama masa penyimpanan (24 jam setelah pembayaran). Informasi alat pembayaran seperti nomor kartu diproses langsung oleh penyedia jasa pembayaran; perusahaan tidak menyimpannya.",
            "Hanya saat Anda menggunakan fitur pemesanan merchandise, nama pemesan, email, nomor kontak, alamat pengiriman, status pembayaran, dan informasi pemrosesan pesanan dapat diproses secara tambahan.",
            "Demi stabilitas layanan dan pencegahan penyalahgunaan, kami dapat memproses log operasional minimal berupa hash pengunjung teranonimkan yang berubah setiap hari, waktu permintaan, jenis layanan, jumlah penggunaan gratis, penggunaan token AI, waktu respons, status pemrosesan, serta peristiwa penayangan iklan dan imbalannya.",
          ],
        },
        {
          title: "2. Tujuan Pemrosesan Data Pribadi",
          paragraphs: [
            "Data pribadi diproses untuk memberikan rekomendasi nama berdasarkan masukan, analisis pelafalan, analisis bahasa dan budaya per negara, pembatasan penggunaan gratis, verifikasi imbalan iklan, penanganan pertanyaan pelanggan, pemrosesan pembayaran dan pengiriman, serta pencegahan penggunaan yang tidak sah.",
          ],
        },
        {
          title: "3. Penyimpanan dan Pemusnahan",
          paragraphs: [
            "Masukan dan hasil analisis disimpan di akun hanya apabila anggota yang telah login secara eksplisit memilih untuk menyimpannya, dan akan dimusnahkan saat anggota menghapusnya atau tujuan penyimpanan telah berakhir. Masukan dan hasil dari non-anggota serta anggota yang tidak memilih penyimpanan tidak disimpan.",
            "Masukan, hasil analisis, dan berkas PDF dari laporan detail berbayar dihapus secara otomatis 24 jam setelah pembayaran selesai. Catatan transaksi pembayaran dan pesanan disimpan secara terpisah sesuai masa penyimpanan wajib menurut peraturan perundang-undangan yang berlaku.",
            "Detail pengiriman dimusnahkan atau dianonimkan setelah berlalunya jangka waktu yang diperlukan untuk pemrosesan pesanan serta penanganan retur dan sengketa.",
          ],
        },
        {
          title: "4. Penyediaan kepada Pihak Ketiga dan Pengalihan Pemrosesan",
          paragraphs: [
            "Untuk pengoperasian layanan, informasi yang diperlukan dapat diproses oleh atau dialihkan pemrosesannya kepada Supabase (basis data dan autentikasi), Vercel (hosting), OpenAI API (analisis AI), jaringan iklan, penyedia jasa pembayaran (PortOne), serta mitra pengiriman dan produksi.",
          ],
        },
        {
          title: "5. Kemungkinan Transfer ke Luar Negeri",
          paragraphs: [
            "Dalam sebagian proses seperti cloud hosting, autentikasi, API AI, periklanan, dan pengiriman email, data pribadi dapat diproses di server luar negeri. Negara tujuan, penerima pengalihan, tujuan, dan masa penyimpanan akan diberitahukan secara rinci setelah penyedia layanan ditetapkan.",
          ],
        },
        {
          title: "6. Hak Pengguna",
          paragraphs: [
            "Pengguna dapat meminta akses, koreksi, penghapusan, penghentian pemrosesan data pribadinya, serta penarikan persetujuan. Permintaan diterima melalui email pusat layanan pelanggan dan diproses setelah verifikasi identitas.",
          ],
        },
        {
          title: "7. Penanggung Jawab Perlindungan Data Pribadi",
          paragraphs: [
            `Penanggung jawab: ${companyInfo.privacyOfficer}`,
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
            "Setelah fitur pembayaran diaktifkan, cakupan pengembalian dana dapat berbeda-beda tergantung cara penyediaan setiap produk, waktu dimulainya produksi, dan status pengunduhan. Ketentuan spesifik diberitahukan di layar produk sebelum pembayaran.",
          ],
        },
        {
          title: "2. Laporan Detail Hanja (₩2,900 / ₩4,900 / ₩9,900)",
          paragraphs: [
            "Pembatalan dapat dilakukan setelah pembayaran selama pembuatan analisis detail AI belum dimulai. Setelah pembuatan analisis selesai dan laporan dapat dilihat atau diunduh, pengembalian dana karena perubahan pikiran semata dapat dibatasi.",
            "Apabila terkonfirmasi adanya kesalahan isi, kegagalan pembuatan akibat gangguan sistem, atau ketidaksesuaian jumlah pembayaran, kami akan menerbitkan ulang laporan atau mengembalikan dana. Berakhirnya masa penyimpanan (24 jam setelah pembayaran) sehingga pengunduhan tidak lagi tersedia bukan merupakan alasan pengembalian dana.",
          ],
        },
        {
          title: "3. Pembukaan Seluruh Kandidat Sekaligus (₩990)",
          paragraphs: [
            "Pembukaan seluruh kandidat pada layanan konversi nama global, konversi nama Korea, dan transkripsi pelafalan Hangul merupakan konten digital yang disediakan segera setelah pembayaran. Pembatalan dapat dilakukan sebelum penayangan kandidat dimulai; setelah ditayangkan, pengembalian dana karena perubahan pikiran semata dapat dibatasi.",
            "Apabila kandidat tidak terbuka dengan benar akibat kesalahan sistem, kami akan menyediakannya kembali atau mengembalikan dana.",
          ],
        },
        {
          title: "4. Merchandise Pesanan Khusus",
          paragraphs: [
            "Produk yang dibuat khusus secara personal dapat dibatalkan sebelum produksi dimulai. Setelah produksi dimulai, pengembalian dana karena perubahan pikiran semata dapat dibatasi; kesalahan penulisan, kerusakan, kesalahan produksi, atau masalah pengiriman akan ditangani setelah pemeriksaan melalui penukaran, pembuatan ulang, atau pengembalian dana sesuai kondisinya.",
          ],
        },
        {
          title: "5. Pembukaan Berbasis Iklan",
          paragraphs: [
            "Manfaat yang diperoleh melalui penayangan iklan bukan merupakan produk berbayar. Apabila imbalan tidak diberikan akibat kesalahan jaringan iklan, penanganannya dilakukan melalui percobaan ulang di dalam layanan atau dengan menghubungi pusat layanan pelanggan.",
          ],
        },
        {
          title: "6. Kontak",
          paragraphs: [`Pertanyaan pengembalian dana: ${companyInfo.email}`],
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
            "Analisis dasar keempat layanan — pencocokan makna Hanja (aksara Tionghoa), konversi nama global, konversi nama Korea, dan transkripsi pelafalan Hangul — disediakan gratis untuk non-anggota, dan batas penggunaan harian dapat berlaku.",
          ],
        },
        {
          title: "Penggunaan dengan Imbalan Iklan",
          paragraphs: [
            "Pembukaan kandidat setelah menonton iklan adalah manfaat berbasis iklan yang disediakan tanpa pembayaran tersendiri. Setiap satu iklan membuka satu kandidat berikutnya. Ketersediaannya dapat berbeda tergantung inventori iklan, negara, perangkat, atau kebijakan penyedia iklan.",
          ],
        },
        {
          title: "Produk Detail Pencocokan Makna Hanja",
          paragraphs: [
            "Penjelasan detail untuk maksimal 5 kandidat beserta analisis Hanja komprehensif: ₩2,900 (KRW)",
            "Penjelasan detail yang diperluas untuk maksimal 10 kandidat, analisis Hanja komprehensif, dan PDF koleksi: ₩4,900",
            "Detail untuk maksimal 10 kandidat, analisis Hanja komprehensif, analisis Saju (Empat Pilar) dan Lima Elemen, serta PDF koleksi: ₩9,900",
            "Laporan berbayar dan PDF dapat dilihat dan diunduh kembali selama 24 jam setelah pembayaran, dan setelah itu dihapus secara otomatis.",
          ],
        },
        {
          title: "Pembukaan Seluruh Kandidat Sekaligus",
          paragraphs: [
            "Membuka seluruh kandidat tersisa sekaligus tanpa iklan pada layanan konversi nama global, konversi nama Korea, dan transkripsi pelafalan Hangul: ₩990 (fitur pembayaran dalam persiapan)",
          ],
        },
        {
          title: "Merchandise Nama Korea",
          paragraphs: [
            "Merchandise fisik seperti stempel nama diberitahukan secara terpisah beserta harga per produk, ongkos kirim, dan lama produksi.",
          ],
        },
        {
          title: "Pemberitahuan Sebelum Pembayaran Resmi",
          paragraphs: [
            "Setelah peninjauan penyedia jasa pembayaran (PG), pendaftaran usaha penjualan daring, dan ketentuan kemitraan produksi ditetapkan, jumlah pembayaran aktual, ongkos kirim, lama produksi, dan ketentuan pengembalian dana akan diberitahukan kembali di layar produk.",
          ],
        },
      ],
    },
  },
};

export default content;
