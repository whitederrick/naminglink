import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
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
            "Butiran produk untuk perkhidmatan pemadanan makna Hanja adalah seperti berikut. ① Maksimum 5 calon dengan penerangan terperinci dan makna Hanja secara keseluruhan: 2,900 won ② Maksimum 10 calon dengan penerangan terperinci yang diperluas, makna Hanja secara keseluruhan dan PDF untuk simpanan: 4,900 won ③ Maksimum 10 calon dengan penerangan terperinci, makna Hanja secara keseluruhan, analisis nasib dan elemen serta PDF untuk simpanan: 9,900 won.",
            "Perkhidmatan penukaran nama global, penukaran nama Korea, dan penyataan sebutan Hangul mungkin menawarkan produk yang mendedahkan semua calon yang tinggal tanpa iklan sekaligus (pembayaran domestik 990 won, pembayaran luar negara US$1.99). Sebelum fungsi pembayaran diaktifkan, hanya paparan dengan ganjaran iklan yang disediakan.",
            "Sebagai produk digital untuk pengguna global, ④ Laporan komprehensif nama Hangul dalam PDF (US$9.99): Seni nama jenis huruf untuk semua calon yang dicadangkan, penjelasan makna, dan rujukan nasib elemen ⑤ Seni PDF penukaran sebutan Hangul (US$2.99): Seni nama jenis huruf yang dipilih dan panduan sebutan ⑥ Pakej seni nama PDF (US$1.99): Menyediakan satu nama yang dipilih dalam seni berdasarkan jenis huruf yang dipilih. Harga dan bilangan jenis huruf yang dikenakan untuk setiap produk adalah mengikut nilai yang dipaparkan di skrin.",
            "Laporan terperinci berbayar dan hasil analisis, fail PDF boleh dibuka semula dan dimuat turun dalam tempoh 24 jam selepas pembayaran selesai, dan akan dipadam secara automatik selepas tempoh penyimpanan tamat.",
            "Barang fizikal seperti cap nama disediakan dengan harga domestik 39,000 won, luar negara US$34.99 (termasuk kos penghantaran antarabangsa) mengikut harga dan syarat produk. Semua produk berbayar akan memaparkan maklumat produk, harga, cara penyampaian, dan syarat pemulangan di skrin sebelum pembayaran.",
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
            "Pertanyaan perkhidmatan: platforest.inc@gmail.com",
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
          title: "5. Pemindahan Maklumat Peribadi ke Luar Negara",
          paragraphs: [
            "Syarikat memindahkan (menyerahkan pemprosesan) maklumat peribadi ke luar negara seperti berikut untuk penyediaan perkhidmatan. Pemindahan dilakukan melalui kaedah penghantaran melalui rangkaian komunikasi.",
            "① OpenAI, L.L.C. (Amerika Syarikat) — Item yang dipindahkan: nama, tarikh lahir, waktu lahir, jantina, negara, bahasa dan lain-lain input analisis — Tujuan pemindahan: analisis nama, sebutan, dan makna berdasarkan AI — Tempoh penyimpanan dan penggunaan: tempoh penyediaan perkhidmatan (data input tidak digunakan untuk latihan model mengikut dasar OpenAI dan disimpan selama maksimum 30 hari untuk tujuan pemantauan penyalahgunaan sebelum dipadam).",
            "② Supabase, Inc. (Amerika Syarikat) — Item yang dipindahkan: maklumat status pesanan dan pembayaran, emel ahli, input dan hasil laporan berbayar (24 jam selepas pembayaran), nama pemesan, nombor hubungan, dan alamat penghantaran semasa pesanan barangan — Tujuan pemindahan: pangkalan data, pengesahan, penyimpanan — Tempoh penyimpanan dan penggunaan: tempoh penyediaan perkhidmatan atau sehingga tempoh penyimpanan setiap item.",
            "③ Vercel, Inc. (Amerika Syarikat) — Item yang dipindahkan: maklumat akses dan permintaan yang dihantar semasa menggunakan perkhidmatan — Tujuan pemindahan: hos aplikasi — Tempoh penyimpanan dan penggunaan: tempoh penyediaan perkhidmatan.",
            "Pengguna boleh menolak persetujuan untuk pemindahan maklumat peribadi ke luar negara, tetapi kerana pemprosesan tersebut adalah penting untuk penyediaan perkhidmatan, penolakan mungkin mengehadkan penggunaan perkhidmatan.",
          ],
        },
        {
          title: "6. Hak Pengguna",
          paragraphs: [
            "Pengguna boleh meminta akses, pembetulan, pemadaman, penghentian pemprosesan, dan penarikan balik persetujuan terhadap maklumat peribadi. Permintaan akan diterima melalui emel pusat pelanggan dan akan diproses selepas pengesahan identiti.",
          ],
        },
        {
          title: "7. Pegawai Bertanggungjawab untuk Perlindungan Maklumat Peribadi",
          paragraphs: [
            "Pegawai: Gwak Eun-ha",
            "Emel: platforest.inc@gmail.com",
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
          title: "2. Laporan Terperinci Hanzi (₩2,900·₩4,900·₩9,900)",
          paragraphs: [
            "Pembatalan boleh dilakukan sebelum analisis terperinci AI dimulakan selepas pembayaran. Setelah analisis selesai dan boleh dilihat atau dimuat turun, pemulangan atas alasan perubahan fikiran mungkin terhad.",
            "Kesalahan kandungan, kegagalan pengeluaran akibat gangguan sistem, dan ketidakcocokan jumlah pembayaran yang disahkan akan diproses sebagai pengeluaran semula atau pemulangan. Jika muat turun tamat selepas tempoh penyimpanan (24 jam selepas pembayaran), ia tidak dianggap sebagai alasan untuk pemulangan.",
          ],
        },
        {
          title: "3. Pendedahan Keseluruhan Calon (₩990 dalam negara · US$1.99 luar negara)",
          paragraphs: [
            "Pendedahan keseluruhan calon untuk perkhidmatan penukaran nama global, penukaran nama Korea, dan penulisan sebutan Hangul adalah kandungan digital yang disediakan sebaik sahaja pembayaran dilakukan. Pembatalan boleh dilakukan sebelum pendedahan calon dimulakan, dan selepas pendedahan, pemulangan atas alasan perubahan fikiran mungkin terhad.",
            "Jika calon tidak dipaparkan dengan betul akibat ralat sistem, ia akan diproses sebagai penyediaan semula atau pemulangan.",
          ],
        },
        {
          title: "4. Produk PDF Digital Global (US$9.99·US$2.99·US$1.99)",
          paragraphs: [
            "Laporan komprehensif nama Hangul (US$9.99), seni penukaran sebutan Hangul (US$2.99), dan pek seni nama (US$1.99) adalah kandungan digital yang dihasilkan selepas pembayaran. Pembatalan boleh dilakukan sebelum penghasilan PDF dimulakan, dan setelah penghasilan selesai dan boleh dimuat turun, pemulangan atas alasan perubahan fikiran mungkin terhad.",
            "Kegagalan penghasilan, kesalahan kandungan, dan ketidakcocokan jumlah pembayaran yang disahkan akan diproses sebagai pengeluaran semula atau pemulangan. Jika muat turun tamat selepas tempoh penyimpanan (24 jam selepas pembayaran), ia tidak dianggap sebagai alasan untuk pemulangan.",
          ],
        },
        {
          title: "5. Barangan Buatan Khusus (stempel nama dan lain-lain)",
          paragraphs: [
            "Barangan buatan khusus seperti stempel nama (₩39,000 dalam negara · US$34.99 luar negara, termasuk kos penghantaran antarabangsa) boleh dibatalkan sehingga sebelum pengeluaran dimulakan. Setelah pengeluaran dimulakan, frasa ukiran akan disahkan secara peribadi, jadi pemulangan atas alasan perubahan fikiran mungkin terhad, dan kesalahan cetakan, kerosakan, pengeluaran salah, atau masalah penghantaran akan diproses dengan cara yang sesuai melalui pertukaran, pengeluaran semula, atau pemulangan setelah disahkan.",
          ],
        },
        {
          title: "5. Pembatalan Kunci Berasaskan Iklan",
          paragraphs: [
            "Manfaat menonton iklan bukanlah produk yang dibayar. Jika pampasan tidak diberikan akibat ralat rangkaian iklan, ia akan diproses melalui percubaan semula dalam perkhidmatan atau melalui pertanyaan kepada pusat khidmat pelanggan.",
          ],
        },
        {
          title: "6. Pertanyaan",
          paragraphs: [
            "Pertanyaan mengenai pemulangan: platforest.inc@gmail.com",
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
            "Analisis asas untuk empat perkhidmatan iaitu pemadanan makna Hanzi, penukaran nama global, penukaran nama Korea, dan penulisan sebutan Hangul disediakan secara percuma kepada bukan ahli dan mungkin dikenakan had penggunaan harian.",
          ],
        },
        {
          title: "Penggunaan Berbasis Iklan",
          paragraphs: [
            "Membuka kunci calon selepas menonton iklan adalah manfaat berbentuk iklan yang disediakan tanpa pembayaran tambahan. Satu iklan membolehkan satu calon dibuka. Ketersediaan mungkin berbeza bergantung kepada stok iklan, negara, peranti, atau dasar penyedia iklan.",
          ],
        },
        {
          title: "Butiran Produk Pemadanan Makna Hanzi",
          paragraphs: [
            "Maksimum 5 calon dengan penerangan terperinci dan maklumat komprehensif Hanzi: 2,900 won",
            "Maksimum 10 calon dengan penerangan terperinci yang diperluas, maklumat komprehensif Hanzi dan PDF untuk simpanan: 4,900 won",
            "Maksimum 10 calon dengan penerangan terperinci, maklumat komprehensif Hanzi, analisis Bazi dan Lima Elemen serta PDF untuk simpanan: 9,900 won",
            "Laporan berbayar dan PDF boleh dilihat dan dimuat turun semula dalam tempoh 24 jam selepas pembayaran, dan akan dipadam secara automatik selepas itu.",
          ],
        },
        {
          title: "Pendedahan Keseluruhan Calon Secara Serentak",
          paragraphs: [
            "Mendedahkan semua calon yang tinggal dalam perkhidmatan penukaran nama global, penukaran nama Korea, dan penulisan sebutan Hangul tanpa iklan sekaligus: pembayaran domestik 990 won, pembayaran luar negara US$1.99 (fungsi pembayaran sedang disediakan)",
          ],
        },
        {
          title: "Produk PDF Digital Global",
          paragraphs: [
            "Laporan PDF komprehensif nama Hangul (seni nama dan penjelasan makna untuk semua calon yang disyorkan serta rujukan Bazi Lima Elemen): US$9.99",
            "PDF seni penukaran sebutan Hangul (seni nama dengan jenis huruf pilihan dan panduan sebutan): US$2.99",
            "PDF pek seni nama (seni untuk satu nama yang dipilih dengan jenis huruf yang dipilih): US$1.99",
            "Harga dan jumlah jenis huruf yang dikenakan adalah mengikut nilai yang dinyatakan di skrin, dan PDF boleh dimuat turun semula dalam tempoh 24 jam selepas pembayaran dan akan dipadam secara automatik selepas itu. (fungsi pembayaran sedang disediakan)",
          ],
        },
        {
          title: "Barangan Nama Hangul",
          paragraphs: [
            "Stempel nama: domestik 39,000 won · luar negara US$34.99 (termasuk kos penghantaran antarabangsa). Barangan fizikal lain akan dinyatakan harga, kos penghantaran, dan tempoh pembuatan secara berasingan.",
          ],
        },
        {
          title: "Pemberitahuan Sebelum Pembayaran Rasmi",
          paragraphs: [
            "Apabila penilaian PG, pendaftaran perniagaan dalam talian, dan syarat kerjasama pembuatan telah disahkan, jumlah pembayaran sebenar, kos penghantaran, tempoh pembuatan, dan syarat pemulangan akan dinyatakan semula di skrin produk.",
          ],
        },
      ],
    },
  },
};

export default content;
