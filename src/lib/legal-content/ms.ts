import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Tarikh kuat kuasa",
    referenceDate: "Setakat",
    login: "Log masuk",
  },
  documents: {
    terms: {
      title: "Terma Perkhidmatan",
      description: `Terma ini menerangkan syarat penggunaan dan skop perkhidmatan ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Sifat Perkhidmatan",
          paragraphs: [
            "Naming-Link ialah studio penamaan berasaskan AI yang menyediakan empat perkhidmatan berikut: (1) pemadanan makna Hanja (aksara Cina) yang sesuai dengan nama Hangul, (2) penukaran nama Hangul kepada nama global, (3) penukaran nama asing kepada nama Korea, dan (4) penulisan nama global dalam Hangul mengikut sebutan.",
            "Hasil yang diberikan adalah bahan rujukan untuk membantu penamaan dan pentafsiran, dan tidak menjamin kelayakan untuk pendaftaran rasmi seperti daftar hubungan keluarga, pasport, visa, tanda dagangan, atau dokumen undang-undang.",
          ],
        },
        {
          title: "2. Penggunaan oleh Ahli dan Bukan Ahli",
          paragraphs: [
            "Analisis nama dan pembukaan calon melalui ganjaran iklan boleh digunakan oleh bukan ahli. Pendaftaran akaun atau log masuk hanya akan diminta bagi fungsi yang memerlukan akaun, seperti pesanan barangan cenderamata dan semakan sejarah pesanan.",
          ],
        },
        {
          title: "3. Hasil AI dan Tanggungjawab Semakan",
          paragraphs: [
            "Hasil cadangan AI mengandungi rujukan linguistik, budaya, dan tradisi. Sebelum membuat pilihan nama muktamad, pengguna hendaklah mengesahkan kesesuaiannya melalui pihak berkuasa berkaitan, pakar, penutur tempatan, serta semakan undang-undang dan tanda dagangan.",
          ],
        },
        {
          title: "4. Perkhidmatan Berbayar",
          paragraphs: [
            "Produk terperinci bagi perkhidmatan pemadanan makna Hanja adalah seperti berikut: (1) penerangan terperinci bagi sehingga 5 calon serta analisis Hanja komprehensif: ₩2,900 (KRW); (2) penerangan terperinci lanjutan bagi sehingga 10 calon, analisis Hanja komprehensif, dan PDF untuk simpanan: ₩4,900; (3) butiran bagi sehingga 10 calon, analisis Hanja komprehensif, analisis Saju (Empat Tiang) dan Lima Unsur, serta PDF untuk simpanan: ₩9,900.",
            "Dalam perkhidmatan penukaran nama global, penukaran nama Korea, dan penulisan sebutan Hangul, produk yang membuka semua calon yang berbaki sekali gus tanpa iklan (₩990) mungkin disediakan. Sebelum fungsi pembayaran diaktifkan, hanya pembukaan melalui ganjaran iklan disediakan.",
            "Laporan terperinci berbayar, hasil analisis, dan fail PDF boleh dilihat serta dimuat turun semula selama 24 jam selepas pembayaran selesai, dan akan dipadamkan secara automatik setelah tempoh simpanan tamat.",
            "Produk fizikal seperti barangan cenderamata nama Hangul mungkin ditawarkan dengan harga dan syarat berasingan. Bagi semua produk berbayar, butiran produk, harga, kaedah penyediaan, dan syarat bayaran balik akan dimaklumkan pada skrin sebelum pembayaran.",
          ],
        },
        {
          title: "5. Perkhidmatan Ganjaran Iklan",
          paragraphs: [
            "Pembukaan calon melalui tontonan iklan hanya terpakai apabila pengesahan ganjaran yang sah oleh penyedia iklan telah selesai. Mainan iklan secara automatik, manipulasi ganjaran, dan permintaan berulang yang tidak normal boleh disekat.",
          ],
        },
        {
          title: "6. Perbuatan yang Dilarang",
          paragraphs: [
            "Perkara berikut adalah dilarang: memasukkan maklumat peribadi orang lain tanpa kebenaran, menjana nama untuk tujuan diskriminasi, kebencian, atau penyamaran, permintaan berlebihan secara automatik, menyebabkan gangguan perkhidmatan, dan mempersembahkan hasil secara palsu sebagai diperakui secara rasmi.",
          ],
        },
        {
          title: "7. Had Liabiliti",
          paragraphs: [
            "Kecuali dalam kes niat atau kecuaian melampau, syarikat tidak bertanggungjawab atas kerugian tidak langsung, kehilangan keuntungan yang dijangka, penolakan pendaftaran rasmi, atau pertikaian pihak ketiga yang timbul daripada penggunaan hasil cadangan AI.",
          ],
        },
        {
          title: "8. Pertanyaan",
          paragraphs: [`Pertanyaan perkhidmatan: ${companyInfo.email}`],
        },
      ],
    },
    privacy: {
      title: "Dasar Privasi",
      description: `Dasar ini menerangkan cara ${companyInfo.serviceName} memproses maklumat peribadi.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Maklumat Peribadi yang Diproses",
          paragraphs: [
            "Apabila perkhidmatan nama digunakan sebagai bukan ahli, nama, tarikh dan masa lahir, negara, bahasa, tujuan penggunaan, dan petunjuk sebutan diproses secara sementara dalam proses penjanaan hasil analisis, tetapi kandungan input dan hasil yang dijana tidak disimpan dalam pangkalan data perkhidmatan.",
            "Apabila laporan terperinci berbayar dibeli, maklumat pengenalan pesanan, status pembayaran, serta input dan hasil analisis yang diperlukan untuk menjana laporan diproses sepanjang tempoh simpanan (24 jam selepas pembayaran). Maklumat kaedah pembayaran seperti nombor kad diproses secara langsung oleh penyedia perkhidmatan pembayaran dan syarikat tidak menyimpannya.",
            "Hanya apabila fungsi pesanan barangan cenderamata digunakan, nama pemesan, e-mel, nombor telefon, alamat penghantaran, status pembayaran, dan maklumat pemprosesan pesanan mungkin diproses secara tambahan.",
            "Bagi kestabilan perkhidmatan dan pencegahan penyalahgunaan, kami boleh memproses log operasi minimum: cincangan (hash) pelawat tanpa pengenalan diri yang berubah setiap hari, masa permintaan, jenis perkhidmatan, bilangan penggunaan percuma, penggunaan token AI, masa respons, status pemprosesan, serta peristiwa paparan iklan dan ganjaran.",
          ],
        },
        {
          title: "2. Tujuan Pemprosesan Maklumat Peribadi",
          paragraphs: [
            "Maklumat peribadi diproses untuk menyediakan cadangan nama berdasarkan input, analisis sebutan, analisis bahasa dan budaya mengikut negara, had penggunaan percuma, pengesahan ganjaran iklan, khidmat pelanggan, pemprosesan pembayaran dan penghantaran, serta pencegahan penggunaan secara tidak wajar.",
          ],
        },
        {
          title: "3. Penyimpanan dan Pemusnahan",
          paragraphs: [
            "Input dan hasil analisis disimpan dalam akaun hanya apabila ahli yang telah log masuk memilih secara jelas untuk menyimpannya, dan akan dimusnahkan apabila ahli memadamkannya atau tujuan penyimpanan tamat. Input dan hasil bukan ahli, serta ahli yang tidak memilih untuk menyimpan, tidak disimpan.",
            "Input, hasil analisis, dan fail PDF laporan terperinci berbayar dipadamkan secara automatik 24 jam selepas pembayaran selesai. Rekod transaksi pembayaran dan pesanan disimpan secara berasingan mengikut tempoh penyimpanan berkanun di bawah undang-undang yang berkaitan.",
            "Butiran penghantaran akan dimusnahkan atau dinyahkenalpastikan setelah tempoh yang diperlukan untuk pemprosesan pesanan, pemulangan, dan penyelesaian pertikaian berakhir.",
          ],
        },
        {
          title: "4. Pemberian kepada Pihak Ketiga dan Perwakilan Pemprosesan",
          paragraphs: [
            "Bagi pengendalian perkhidmatan, maklumat yang diperlukan mungkin diproses oleh atau diamanahkan kepada Supabase (pangkalan data dan pengesahan), Vercel (pengehosan), OpenAI API (analisis AI), rangkaian pengiklanan, penyedia perkhidmatan pembayaran (PortOne), serta rakan kongsi penghantaran dan pengeluaran.",
          ],
        },
        {
          title: "5. Kemungkinan Pemindahan ke Luar Negara",
          paragraphs: [
            "Dalam sesetengah proses seperti pengehosan awan, pengesahan, API AI, pengiklanan, dan penghantaran e-mel, maklumat peribadi mungkin diproses pada pelayan di luar negara. Negara destinasi, pihak yang diamanahkan, tujuan, dan tempoh penyimpanan akan dimaklumkan secara terperinci setelah penyedia perkhidmatan dimuktamadkan.",
          ],
        },
        {
          title: "6. Hak Pengguna",
          paragraphs: [
            "Pengguna boleh meminta akses kepada, pembetulan, pemadaman, penggantungan pemprosesan maklumat peribadi, serta penarikan balik persetujuan. Permintaan diterima melalui e-mel pusat khidmat pelanggan dan diproses selepas pengesahan identiti.",
          ],
        },
        {
          title: "7. Pegawai Perlindungan Maklumat Peribadi",
          paragraphs: [
            `Pegawai bertanggungjawab: ${companyInfo.privacyOfficer}`,
            `E-mel: ${companyInfo.email}`,
          ],
        },
      ],
    },
    refund: {
      title: "Dasar Bayaran Balik dan Pembatalan",
      description:
        "Dasar ini menerangkan piawaian pembatalan dan bayaran balik bagi produk digital dan barangan cenderamata tempahan khas.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Prinsip Umum",
          paragraphs: [
            "Apabila fungsi pembayaran diaktifkan, skop bayaran balik yang dibenarkan mungkin berbeza mengikut kaedah penyediaan setiap produk, masa pengeluaran dimulakan, dan status muat turun. Syarat khusus akan dimaklumkan pada skrin produk sebelum pembayaran.",
          ],
        },
        {
          title: "2. Laporan Terperinci Hanja (₩2,900 / ₩4,900 / ₩9,900)",
          paragraphs: [
            "Pembatalan boleh dibuat selepas pembayaran selagi penjanaan analisis terperinci AI belum bermula. Setelah penjanaan analisis selesai dan laporan boleh dilihat atau dimuat turun, bayaran balik atas sebab perubahan fikiran semata-mata boleh disekat.",
            "Sekiranya kesilapan kandungan, kegagalan penjanaan akibat gangguan sistem, atau ketidakpadanan jumlah pembayaran disahkan, kami akan mengeluarkan semula laporan atau memberikan bayaran balik. Tamatnya tempoh simpanan (24 jam selepas pembayaran) yang menyebabkan muat turun berakhir bukan alasan untuk bayaran balik.",
          ],
        },
        {
          title: "3. Pembukaan Semua Calon Sekali Gus (₩990)",
          paragraphs: [
            "Pembukaan semua calon sekali gus dalam perkhidmatan penukaran nama global, penukaran nama Korea, dan penulisan sebutan Hangul ialah kandungan digital yang disediakan serta-merta sebaik pembayaran dibuat. Pembatalan boleh dibuat sebelum paparan calon bermula; selepas paparan, bayaran balik atas sebab perubahan fikiran semata-mata boleh disekat.",
            "Sekiranya calon tidak dibuka dengan sewajarnya akibat ralat sistem, kami akan menyediakannya semula atau memberikan bayaran balik.",
          ],
        },
        {
          title: "4. Barangan Cenderamata Tempahan Khas",
          paragraphs: [
            "Barangan tempahan peribadi boleh dibatalkan sebelum pengeluaran dimulakan. Selepas pengeluaran bermula, bayaran balik atas sebab perubahan fikiran semata-mata boleh disekat, manakala kesilapan ejaan, kerosakan, kesilapan pengeluaran, atau masalah penghantaran akan diselesaikan selepas pengesahan melalui kaedah yang sesuai, sama ada penukaran, pembuatan semula, atau bayaran balik.",
          ],
        },
        {
          title: "5. Pembukaan Melalui Iklan",
          paragraphs: [
            "Manfaat tontonan iklan bukanlah produk berbayar. Sekiranya ganjaran tidak diberikan akibat ralat rangkaian pengiklanan, perkara ini diselesaikan melalui cubaan semula dalam perkhidmatan atau pertanyaan kepada pusat khidmat pelanggan.",
          ],
        },
        {
          title: "6. Pertanyaan",
          paragraphs: [`Pertanyaan bayaran balik: ${companyInfo.email}`],
        },
      ],
    },
    pricing: {
      title: "Panduan Harga",
      description:
        "Panduan ini menerangkan skop perkhidmatan percuma dan harga produk berbayar.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "Analisis Asas (Percuma)",
          paragraphs: [
            "Analisis asas bagi keempat-empat perkhidmatan — pemadanan makna Hanja (aksara Cina), penukaran nama global, penukaran nama Korea, dan penulisan sebutan Hangul — disediakan secara percuma kepada bukan ahli, dan had penggunaan harian mungkin dikenakan.",
          ],
        },
        {
          title: "Penggunaan Melalui Ganjaran Iklan",
          paragraphs: [
            "Pembukaan calon selepas menonton iklan ialah manfaat berasaskan iklan yang disediakan tanpa sebarang pembayaran berasingan. Setiap satu iklan membuka satu calon seterusnya. Ketersediaan mungkin berbeza mengikut inventori iklan, negara, peranti, atau dasar penyedia iklan.",
          ],
        },
        {
          title: "Produk Terperinci Pemadanan Makna Hanja",
          paragraphs: [
            "Penerangan terperinci bagi sehingga 5 calon serta analisis Hanja komprehensif: ₩2,900 (KRW)",
            "Penerangan terperinci lanjutan bagi sehingga 10 calon, analisis Hanja komprehensif, dan PDF untuk simpanan: ₩4,900",
            "Butiran bagi sehingga 10 calon, analisis Hanja komprehensif, analisis Saju (Empat Tiang) dan Lima Unsur, serta PDF untuk simpanan: ₩9,900",
            "Laporan berbayar dan PDF boleh dilihat serta dimuat turun semula selama 24 jam selepas pembayaran, dan akan dipadamkan secara automatik selepas itu.",
          ],
        },
        {
          title: "Pembukaan Semua Calon Sekali Gus",
          paragraphs: [
            "Membuka semua calon yang berbaki sekali gus tanpa iklan dalam perkhidmatan penukaran nama global, penukaran nama Korea, dan penulisan sebutan Hangul: ₩990 (fungsi pembayaran dalam persediaan)",
          ],
        },
        {
          title: "Barangan Cenderamata Nama Hangul",
          paragraphs: [
            "Barangan fizikal seperti cop nama akan dimaklumkan secara berasingan dengan harga mengikut produk, kos penghantaran, dan tempoh pengeluaran.",
          ],
        },
        {
          title: "Makluman Sebelum Pelancaran Pembayaran Rasmi",
          paragraphs: [
            "Setelah semakan penyedia perkhidmatan pembayaran (PG), pendaftaran perniagaan jualan jarak jauh, dan syarat kerjasama pengeluaran dimuktamadkan, jumlah pembayaran sebenar, kos penghantaran, tempoh pengeluaran, dan syarat bayaran balik akan dimaklumkan semula pada skrin produk.",
          ],
        },
      ],
    },
  },
};

export default content;
