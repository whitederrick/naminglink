import { companyInfo, romanize, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Tarikh kuat kuasa",
    referenceDate: "Setakat",
    login: "Log masuk",
    close: "Tutup",
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
            "Naming-Link adalah studio penamaan berasaskan AI yang menawarkan empat perkhidmatan berikut. ① Pemadanan makna Hanja yang sesuai dengan nama Hangul ② Menukar nama Hangul kepada nama global ③ Menukar nama asing kepada nama Korea ④ Menyatakan nama global dalam Hangul berdasarkan sebutan.",
            "Keputusan adalah bahan rujukan untuk membantu penamaan dan tafsiran, dan tidak menjamin kemungkinan pendaftaran rasmi seperti pendaftaran hubungan keluarga, pasport, visa, tanda dagangan, dokumen undang-undang, dan lain-lain.",
          ],
        },
        {
          title: "2. Penggunaan oleh Ahli dan Bukan Ahli",
          paragraphs: [
            "Analisis nama dan paparan calon dengan ganjaran iklan boleh diakses oleh bukan ahli. Pendaftaran atau log masuk hanya diperlukan untuk fungsi yang memerlukan akaun seperti pesanan barang dan semakan sejarah pesanan.",
          ],
        },
        {
          title: "3. Tanggungjawab Hasil AI dan Semakan",
          paragraphs: [
            "Hasil cadangan AI termasuk rujukan linguistik, budaya, dan tradisional. Pengguna perlu mengesahkan kesesuaian melalui institusi berkaitan, pakar, pengguna tempatan, dan semakan undang-undang/tanda dagangan sebelum membuat pilihan nama akhir.",
          ],
        },
        {
          title: "4. Perkhidmatan Berbayar",
          paragraphs: [
            "Butiran produk perkhidmatan pemadanan makna Hanja adalah seperti berikut. ① Maksimum 5 calon dengan penerangan terperinci dan maklumat Hanja keseluruhan: ₩2,900 ② Maksimum 10 calon dengan penerangan terperinci yang diperluas, maklumat Hanja keseluruhan dan PDF untuk simpanan: ₩4,900 ③ Maksimum 10 calon dengan penerangan terperinci, maklumat Hanja keseluruhan, analisis Saju·Oheang dan PDF untuk simpanan: ₩9,900.",
            "Perkhidmatan penukaran nama global, penukaran nama Korea, dan penulisan sebutan Hangul mungkin menawarkan produk yang mendedahkan keseluruhan calon yang tinggal tanpa iklan sekaligus (pembayaran domestik ₩990, pembayaran luar negara US$1.99). Sebelum fungsi pembayaran diaktifkan, hanya paparan dengan ganjaran iklan yang disediakan.",
            "Produk digital untuk pengguna global termasuk ④ Laporan PDF nama Hangul keseluruhan (US$9.99): seni nama jenis huruf pilihan, penjelasan makna, rujukan Saju Oheang ⑤ Seni PDF penukaran sebutan Hangul (US$2.99): seni nama jenis huruf pilihan dan panduan sebutan ⑥ Pek seni nama PDF (US$1.99): menyediakan 1 nama yang dipilih dalam seni jenis huruf yang dipilih. Harga dan bilangan jenis huruf yang digunakan untuk setiap produk adalah mengikut nilai yang dipaparkan di skrin.",
            "Laporan terperinci berbayar dan keputusan analisis, fail PDF boleh dibuka semula dan dimuat turun dalam masa 24 jam selepas pembayaran selesai, dan akan dipadam secara automatik selepas tempoh penyimpanan tamat.",
            "Harga pembayaran domestik untuk barang fizikal seperti cap nama adalah ₩39,000 / ₩59,000 / ₩79,000 dan akan disediakan bersama syarat produk.",
            "Harga pembayaran luar negara untuk barang fizikal yang sama adalah US$39.90 / US$59.90 / US$79.90 dan termasuk kos penghantaran antarabangsa.",
            "Semua produk berbayar akan memaparkan maklumat produk, harga, cara penyampaian, dan syarat pemulangan di skrin sebelum pembayaran.",
          ],
        },
        {
          title: "5. Perkhidmatan Ganjaran Iklan",
          paragraphs: [
            "Pelepasan kunci calon melalui tontonan iklan hanya akan diterapkan setelah pengesahan ganjaran normal oleh penyedia iklan selesai. Pengulangan permintaan secara automatik, manipulasi ganjaran, dan permintaan berulang yang tidak normal mungkin terhad.",
          ],
        },
        {
          title: "6. Tindakan Dilarang",
          paragraphs: [
            "Memasukkan maklumat peribadi orang lain tanpa kebenaran, mencipta nama untuk tujuan diskriminasi, kebencian, atau penyamaran, permintaan berlebihan secara automatik, menyebabkan gangguan perkhidmatan, dan menunjukkan pengesahan rasmi yang palsu adalah dilarang.",
          ],
        },
        {
          title: "7. Had Tanggungjawab",
          paragraphs: [
            "Syarikat tidak bertanggungjawab terhadap kerugian tidak langsung, kehilangan keuntungan yang dijangkakan, penolakan pendaftaran rasmi, dan pertikaian pihak ketiga yang timbul daripada penggunaan hasil cadangan AI, kecuali dalam kes niat atau kecuaian yang serius.",
          ],
        },
        {
          title: "8. Pertanyaan",
          paragraphs: [
            `Pertanyaan perkhidmatan: ${companyInfo.email}`,
          ],
        },
      ],
    },
    privacy: {
      title: "Dasar Privasi",
      description: `Dasar ini menerangkan cara ${companyInfo.serviceName} memproses maklumat peribadi.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Jenis Maklumat Peribadi yang Diproses",
          paragraphs: [
            "Semasa menggunakan perkhidmatan nama tanpa keahlian, nama, tarikh lahir, waktu lahir, negara, bahasa, tujuan penggunaan dan petunjuk sebutan diproses secara sementara dalam proses penghasilan hasil analisis, tetapi kandungan input dan hasil yang dihasilkan tidak disimpan dalam pangkalan data perkhidmatan.",
            "Semasa pendaftaran keahlian dan log masuk, alamat emel dan rekod log masuk (rekod pengesahan) diproses.",
            "Apabila membayar laporan terperinci berbayar, maklumat pengenalan pesanan, status pembayaran dan input serta hasil analisis yang diperlukan untuk penghasilan laporan diproses selama tempoh penyimpanan (24 jam selepas pembayaran). Maklumat kaedah pembayaran seperti nombor kad diproses secara langsung oleh agensi pemprosesan pembayaran dan syarikat tidak menyimpannya.",
            "Hanya apabila menggunakan fungsi pesanan barangan, nama pemesan, emel, nombor hubungan, alamat penghantaran, status pembayaran dan maklumat pemprosesan pesanan mungkin diproses tambahan.",
            "Untuk kestabilan perkhidmatan dan pencegahan penyalahgunaan, hash pelawat tanpa pengenalan yang berubah setiap hari, waktu permintaan, jenis perkhidmatan, bilangan penggunaan percuma, token AI, masa respons, status pemprosesan dan pendedahan iklan serta acara ganjaran boleh diproses sebagai log operasi minimum.",
          ],
        },
        {
          title: "2. Tujuan Pemprosesan Maklumat Peribadi",
          paragraphs: [
            "Maklumat peribadi diproses untuk cadangan nama berdasarkan input, analisis sebutan, analisis bahasa dan budaya mengikut negara, had penggunaan percuma, pengesahan ganjaran iklan, respons kepada pertanyaan pelanggan, pemprosesan pembayaran dan penghantaran, serta pencegahan penyalahgunaan.",
          ],
        },
        {
          title: "3. Penyimpanan dan Pemusnahan",
          paragraphs: [
            "Input analisis dan hasil hanya disimpan dalam akaun jika ahli log masuk secara eksplisit memilih untuk menyimpan hasil, dan akan dimusnahkan apabila ahli memadam atau tujuan penyimpanan berakhir. Input dan hasil daripada bukan ahli dan ahli yang tidak memilih untuk menyimpan tidak akan disimpan.",
            "Input, hasil analisis dan fail PDF laporan terperinci berbayar akan dipadam secara automatik selepas 24 jam dari penyelesaian pembayaran. Rekod transaksi pembayaran dan pesanan akan disimpan secara berasingan mengikut tempoh penyimpanan yang ditetapkan oleh undang-undang yang berkaitan.",
            "Maklumat terperinci penghantaran pesanan barang (nama pemesan, emel, nombor telefon, alamat penghantaran, permintaan, dan teks yang akan diukir pada cap) akan dimusnahkan selepas 90 hari dari tarikh penghantaran selesai atau pesanan dibatalkan. Maklumat input pesanan yang dihentikan tanpa mencapai pembayaran akan dimusnahkan selepas 24 jam. Walaupun selepas pemusnahan, rekod transaksi pembayaran dan pesanan akan disimpan mengikut tempoh penyimpanan yang ditetapkan oleh undang-undang yang berkaitan.",
          ],
        },
        {
          title: "4. Pemberian kepada Pihak Ketiga dan Penyerahan Pemprosesan",
          paragraphs: [
            "Untuk operasi perkhidmatan, maklumat yang diperlukan mungkin diproses atau diserahkan kepada Supabase (pangkalan data, pengesahan), Vercel (hosing), OpenAI API (analisis AI), rangkaian iklan, agensi pemprosesan pembayaran (PortOne), dan rakan kongsi penghantaran serta pembuatan.",
          ],
        },
        {
          title: "5. Kuki dan Iklan",
          paragraphs: [
            "Perkhidmatan itu sendiri tidak menggunakan kuki untuk mengenal pasti atau menjejak pengguna. Maklumat yang dimasukkan dalam analisis nama tidak disampaikan kepada pengiklan.",
            "Perkhidmatan ini menyiarkan iklan melalui Google AdSense. Dalam proses ini, pembekal pihak ketiga termasuk Google boleh menyimpan atau membaca kuki dalam pelayar pengguna, dan Google menggunakan kuki berdasarkan sejarah lawatan ke laman ini dan beberapa laman lain untuk menyiarkan iklan.",
            "Kuki yang sama digunakan walaupun dalam kes iklan berbayar dan tawaran. Perkhidmatan hanya mengesahkan sama ada iklan telah ditonton sepenuhnya dan fakta pembayaran ganjaran yang berkaitan, dan tidak menerima maklumat yang boleh mengenal pasti pengguna daripada pengiklan.",
            "Pengguna boleh mematikan iklan tersuai di tetapan iklan Google (google.com/settings/ads). Walaupun dimatikan, iklan itu masih akan dipaparkan tetapi relevansinya dengan pengguna akan berkurangan. Iklan tersuai daripada semua pembekal pihak ketiga boleh dimatikan sekaligus di aboutads.info/choices, dan terdapat juga cara untuk menyekat kuki dalam tetapan pelayar.",
            "Bagi pengguna di Kawasan Ekonomi Eropah, UK, dan Switzerland, persetujuan akan diminta terlebih dahulu melalui mesej persetujuan Google sebelum menggunakan kuki iklan.",
          ],
        },
        {
          title: "6. Pemindahan Maklumat Peribadi ke Luar Negara",
          paragraphs: [
            "Syarikat memindahkan (menyerahkan pemprosesan) maklumat peribadi ke luar negara seperti berikut untuk penyediaan perkhidmatan. Pemindahan dilakukan melalui kaedah penghantaran melalui rangkaian komunikasi.",
            "① OpenAI, L.L.C. (Amerika Syarikat) — Item yang dipindahkan: nama, tarikh lahir, waktu lahir, jantina, negara, bahasa dan lain-lain input analisis — Tujuan pemindahan: analisis nama, sebutan, dan makna berdasarkan AI — Tempoh penyimpanan dan penggunaan: tempoh penyediaan perkhidmatan (data input tidak digunakan untuk latihan model mengikut dasar OpenAI dan disimpan selama maksimum 30 hari untuk tujuan pemantauan penyalahgunaan sebelum dipadam).",
            "② Supabase, Inc. (Amerika Syarikat) — Item yang dipindahkan: maklumat status pesanan dan pembayaran, emel ahli, input dan hasil laporan berbayar (24 jam selepas pembayaran), nama pemesan, nombor hubungan, dan alamat penghantaran semasa pesanan barangan — Tujuan pemindahan: pangkalan data, pengesahan, penyimpanan — Tempoh penyimpanan dan penggunaan: tempoh penyediaan perkhidmatan atau sehingga tempoh penyimpanan setiap item.",
            "③ Vercel, Inc. (Amerika Syarikat) — Item yang dipindahkan: maklumat akses dan permintaan yang dihantar semasa menggunakan perkhidmatan — Tujuan pemindahan: hos aplikasi — Tempoh penyimpanan dan penggunaan: tempoh penyediaan perkhidmatan.",
            "Pengguna boleh menolak persetujuan untuk pemindahan maklumat peribadi ke luar negara, tetapi kerana pemprosesan tersebut adalah penting untuk penyediaan perkhidmatan, penolakan mungkin mengehadkan penggunaan perkhidmatan.",
          ],
        },
        {
          title: "7. Hak Pengguna",
          paragraphs: [
            "Pengguna boleh meminta akses, pembetulan, pemadaman, penghentian pemprosesan, dan penarikan balik persetujuan terhadap maklumat peribadi. Permintaan akan diterima melalui emel pusat pelanggan dan akan diproses selepas pengesahan identiti.",
          ],
        },
        {
          title: "8. Pegawai Bertanggungjawab untuk Perlindungan Maklumat Peribadi",
          paragraphs: [
            `Pegawai: ${romanize(companyInfo.privacyOfficer)}`,
            `Emel: ${companyInfo.email}`,
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
            "Apabila fungsi pembayaran diaktifkan, skop pemulangan mungkin berbeza bergantung kepada cara penyampaian setiap produk, waktu permulaan pengeluaran, dan sama ada muat turun dibenarkan. Syarat khusus akan dinyatakan pada skrin produk sebelum pembayaran.",
          ],
        },
        {
          title: "2. Laporan Terperinci Hanja",
          paragraphs: [
            "Harga pembayaran domestik untuk laporan terperinci Hanja adalah ₩2,900 / ₩4,900 / ₩9,900.",
            "Pembatalan boleh dilakukan sebelum permulaan penciptaan analisis terperinci AI selepas pembayaran. Setelah penciptaan analisis selesai dan boleh dilihat atau dimuat turun, pengembalian wang kerana perubahan fikiran mungkin terhad.",
            "Kesalahan kandungan, kegagalan penciptaan akibat gangguan sistem, dan ketidakcocokan jumlah pembayaran yang disahkan akan diproses dengan pengeluaran semula atau pengembalian wang. Kes tamat tempoh penyimpanan (24 jam selepas pembayaran) tidak dianggap sebagai alasan untuk pengembalian wang.",
          ],
        },
        {
          title: "3. Pendedahan Keseluruhan Calon",
          paragraphs: [
            "Harga pembayaran domestik untuk pendedahan keseluruhan calon adalah ₩990.",
            "Harga pembayaran luar negara untuk produk yang sama adalah US$1.99.",
            "Pendedahan keseluruhan calon untuk perkhidmatan penukaran nama global, penukaran nama Korea, dan penulisan sebutan Hangul adalah kandungan digital yang disediakan sebaik sahaja pembayaran dibuat. Pembatalan boleh dilakukan sebelum pemeriksaan calon dimulakan, dan selepas pemeriksaan, pengembalian wang kerana perubahan fikiran mungkin terhad.",
            "Jika calon tidak didedahkan dengan betul akibat ralat sistem, ia akan diproses semula atau dikembalikan.",
          ],
        },
        {
          title: "4. Produk PDF Digital Global",
          paragraphs: [
            "Laporan Nama Hangul (US$9.99), Seni Penukaran Sebutan Hangul (US$2.99), Pakej Seni Nama (US$1.99) adalah kandungan digital yang dihasilkan selepas pembayaran. Pembatalan boleh dilakukan sebelum proses penghasilan PDF dimulakan, dan selepas penghasilan selesai dan boleh dimuat turun, pengembalian wang kerana perubahan fikiran mungkin terhad.",
            "Jika terdapat kegagalan penghasilan, kesilapan kandungan, atau ketidakcocokan jumlah pembayaran, ia akan diproses sebagai pengeluaran semula atau pengembalian wang. Jika muat turun tamat kerana tempoh penyimpanan (24 jam selepas pembayaran) telah berlalu, ia tidak dianggap sebagai alasan untuk pengembalian wang.",
          ],
        },
        {
          title: "5. Barang Kustom (Stempel Nama dll)",
          paragraphs: [
            "Harga pembayaran domestik untuk barang kustom seperti stempel nama adalah ₩39,000 / ₩59,000 / ₩79,000.",
            "Harga pembayaran luar negara untuk barang yang sama adalah US$39.90 / US$59.90 / US$79.90 dan termasuk kos penghantaran antarabangsa.",
            "Barang kustom boleh dibatalkan sehingga sebelum memulakan pengeluaran. Setelah pengeluaran dimulakan, teks ukiran akan disahkan secara peribadi, jadi pengembalian kerana perubahan fikiran mungkin terhad, dan kesalahan, kerosakan, pengeluaran yang salah atau masalah penghantaran akan ditangani dengan cara yang sesuai melalui pertukaran, pengeluaran semula, atau pengembalian setelah disahkan.",
          ],
        },
        {
          title: "6. Pembatalan Kunci Berasaskan Iklan",
          paragraphs: [
            "Manfaat menonton iklan bukanlah produk yang dibayar. Jika pampasan tidak diberikan akibat ralat rangkaian iklan, ia akan diproses melalui percubaan semula dalam perkhidmatan atau melalui pertanyaan kepada pusat khidmat pelanggan.",
          ],
        },
        {
          title: "7. Pertanyaan",
          paragraphs: [
            `Pertanyaan mengenai pemulangan: ${companyInfo.email}`,
          ],
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
            "Analisis asas untuk empat perkhidmatan iaitu pemadanan makna Hanja, penukaran nama global, penukaran nama Korea, dan penulisan sebutan Hangul disediakan secara percuma kepada bukan ahli dan had penggunaan harian mungkin dikenakan. Di bawah ini hanya produk yang boleh dibayar sekarang ditunjukkan bersama jumlahnya, dan produk yang belum dibuka tidak ditunjukkan.",
          ],
        },
        {
          title: "Penggunaan Berbasis Iklan",
          paragraphs: [
            "Pembukaan kunci calon selepas menonton iklan adalah manfaat berbentuk iklan yang disediakan tanpa pembayaran tambahan. Satu iklan akan membuka satu calon seterusnya. Ketersediaan mungkin berbeza bergantung kepada inventori iklan, negara, peranti, atau dasar penyedia iklan. Dalam tempoh tanpa iklan, calon tersebut akan dibuka secara percuma tanpa melalui pintu masuk ini.",
          ],
        },
        {
          title: "Butiran Produk Pemadanan Makna Hanzi",
          paragraphs: [
            "Maksimum 5 calon dengan penerangan terperinci dan maklumat komprehensif Hanzi: ₩2,900",
            "Maksimum 10 calon dengan penerangan terperinci yang diperluas, maklumat komprehensif Hanzi dan PDF untuk simpanan: ₩4,900",
            "Maksimum 10 calon dengan penerangan terperinci, maklumat komprehensif Hanzi, analisis Bazi dan Lima Elemen serta PDF untuk simpanan: ₩9,900",
            "Laporan berbayar dan PDF boleh dilihat dan dimuat turun semula dalam tempoh 24 jam selepas pembayaran, dan akan dipadam secara automatik selepas itu.",
          ],
        },
        {
          title: "Pendedahan Keseluruhan Calon",
          paragraphs: [
            "Pendedahan keseluruhan calon yang tinggal tanpa iklan dalam perkhidmatan penukaran nama global, penukaran nama Korea, dan perkhidmatan penulisan sebutan Hangul (pembayaran domestik): ₩990",
            "Harga pembayaran luar negara untuk produk yang sama: US$1.99",
          ],
        },
        {
          title: "Produk PDF Digital Global",
          paragraphs: [
            "Laporan Komprehensif Nama Hangul PDF (Penjelasan seni dan makna untuk semua nama calon yang disyorkan, serta rujukan kepada lima elemen dan nasib): US$9.99",
            "Seni PDF Penukaran Sebutan Hangul (Seni nama dengan jenis huruf pilihan dan panduan sebutan): US$2.99",
            "Pakej Seni Nama PDF (Seni untuk satu nama yang dipilih dengan jenis huruf yang dipilih): US$1.99",
            "Harga dan jumlah jenis huruf yang digunakan adalah mengikut nilai yang dinyatakan di skrin, dan PDF boleh dimuat turun semula dalam tempoh 24 jam selepas pembayaran dan akan dipadam secara automatik selepas itu.",
          ],
        },
        {
          title: "Barangan Nama Hangul",
          paragraphs: [
            "Nama cap (pembayaran domestik): ₩39,000 / ₩59,000 / ₩79,000",
            "Nama cap (pembayaran luar negara): US$39.90 / US$59.90 / US$79.90 (termasuk kos penghantaran antarabangsa)",
            "Barangan fizikal lain akan dinyatakan harga, kos penghantaran, dan tempoh pembuatan secara berasingan.",
          ],
        },
        {
          title: "Panduan Jumlah",
          paragraphs: [
            "Jumlah pembayaran, kos penghantaran, tempoh pembuatan, dan syarat pemulangan akan dinyatakan semula di skrin produk sebelum pembayaran, dan jika jumlah dalam dokumen ini berbeza dengan jumlah di skrin produk, jumlah di skrin produk adalah yang menjadi rujukan.",
          ],
        },
      ],
    },
  },
};

export default content;
