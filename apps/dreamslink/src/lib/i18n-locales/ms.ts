// 드림링크 화면 사전의 Malay (Bahasa Melayu)(ms) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **옛 궁합 번역을 통째로 되살린 것이 아니다.** en 원문이 글자까지 같은 자리(푸터·언어
// 선택기·광고 라벨)만 물려받고, 해몽용으로 새로 쓴 자리는 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const ms: Dictionary = {
  "brand": "Dreams-Link",
  "tagline": "Mimpi hari ini, dibaca melalui simbol mimpi tradisional Korea",
  "currentLanguage": "Bahasa semasa",
  "moreLanguages": "Lagi",
  "closeLanguages": "Tutup",
  "dream": {
    "title": "Pembacaan mimpi",
    "subtitle": "Tuliskan mimpi yang anda alami dan kami akan mencarinya dalam kamus simbol mimpi tradisional Korea.",
    "textLabel": "Apa yang anda impikan?",
    "textPlaceholder": "Tuliskan seperti yang anda ingat. Contohnya: seekor ikan mas melompat keluar dari air jernih",
    "moodLabel": "Bagaimana perasaan anda ketika bangun",
    "moods": {
      "good": "Baik",
      "scary": "Menakutkan",
      "strange": "Aneh",
      "sad": "Sedih",
      "unsure": "Tidak pasti"
    },
    "recurringLabel": "Saya mengalami mimpi ini berulang kali",
    "submit": "Baca mimpi saya",
    "submitting": "Mencari…",
    "errorEmpty": "Sila tulis sedikit lagi tentang mimpi tersebut.",
    "errorGeneric": "Kami tidak dapat memuatkan pembacaan. Sila cuba lagi dalam beberapa saat.",
    "resultTitle": "Pembacaan mimpi",
    "symbolsHeading": "Simbol yang ditemui dalam mimpi anda",
    "noSymbols": "Tiada simbol tradisional dari kamus kami muncul dalam mimpi ini. Kami membiarkannya kosong daripada mereka-reka makna.",
    "themesHeading": "Apa yang mereka tunjukkan bersama-sama",
    "conceptionNotice": "Simbol yang traditionally read as tanda kehamilan muncul di sini. Ini tidak menentukan kehamilan.",
    "browseSymbols": "Lihat kamus simbol tradisional",
    "popularSymbols": "Simbol yang sering dicari",
    "disclaimer": "Ini adalah bahan rujukan dari perspektif traditional dream-reading, bukan nasihat perubatan, kewangan, atau undang-undang. Kami tidak menyimpan mimpi yang anda tulis.",
    "again": "Baca mimpi lain"
  },
  "landing": {
    "title": "Baca mimpi anda\ndengan cara tradisional",
    "subtitle": "Kami mencari simbol-simbol dalam mimpi anda dalam kamus tradisi Korea tentang mimpi.\nTiada tarikh lahir, tiada pendaftaran.",
    "howTitle": "Cara ia berfungsi",
    "steps": [
      "Tuliskan mimpi itu seperti yang anda ingat. Satu atau dua ayat sudah mencukupi.",
      "Kami mencari dalam kamus simbol mimpi tradisional Korea untuk apa yang muncul di dalamnya. Jika simbol tidak ada di sana, kami akan menyatakannya.",
      "Anda akan melihat apa yang setiap simbol telah lama dianggap bermaksud, dan apa yang mereka tunjukkan bersama."
    ],
    "privacyTitle": "Mimpi yang anda tulis tidak disimpan",
    "privacyBody": "Apa yang anda tulis hanya digunakan semasa pembacaan sedang dilakukan, dan tidak pernah direkodkan.\nTiada akaun diperlukan, dan tiada apa yang ditinggalkan di pelayan setelah pembacaan selesai.",
    "disclaimer": "Ini adalah bahan rujukan dari perspektif pembacaan mimpi tradisional. Ia bukan ramalan tentang apa yang akan datang, dan bukan nasihat perubatan atau kewangan."
  },
  "ads": {
    "label": "Iklan"
  },
  "selfAds": {
    "label": "Perkhidmatan berkaitan",
    "comingSoon": "Akan datang",
    "purposes": {
      "naminglink": "Nama Korea dan hanja yang dipilih berdasarkan makna dan jumlah strok",
      "inyeonlink": "Bagaimana dua orang sesuai, dibaca dari empat tiang dan tanda zodiak mereka",
      "sajulink": "Empat tiang anda sendiri, dan bagaimana hari ini bertemu dengan mereka",
      "dreamslink": "Bacaan mimpi yang diambil dari kamus simbol",
      "placelink": "Tempat untuk pergi berkencan di Korea, dikongsi dan disyorkan"
    }
  },
  "analyzing": {
    "title": "Mencari simbol dalam mimpi anda",
    "quotes": [
      "Sebuah mimpi cenderung mencerminkan beberapa hari terakhir lebih daripada hari-hari yang akan datang.",
      "Simbol yang sama telah dibaca dengan cara yang berbeza bergantung kepada siapa yang bermimpi.",
      "Pembacaan mimpi tradisional bukanlah kunci jawapan. Ia adalah kumpulan cerita yang telah dikumpulkan selama ini.",
      "Mimpi yang menakutkan tidak sama dengan mimpi yang buruk. Ia mungkin adalah tanda yang ditinggalkan oleh fikiran yang terkejut.",
      "Tidak mengapa jika anda hanya ingat sepotong. Satu simbol sudah cukup untuk memulakan.",
      "Mimpi yang sering kembali biasanya datang dengan sesuatu yang belum selesai.",
      "Seberapa jernih air itu, dan warna apa yang dimilikinya, adalah apa yang diperhatikan oleh pembaca lama dengan teliti.",
      "Bagaimana perasaan anda ketika bangun akan kekal selama apa yang anda sebenarnya lihat.",
      "Mimpi baik atau tidak, adalah lebih baik untuk tidak membiarkannya menentukan hari anda.",
      "Pembacaan bukanlah kata tentang apa yang akan berlaku. Ia adalah pandangan kedua tentang apa yang sudah ada."
    ],
    "watching": "Sedang menonton iklan",
    "remaining": "Keputusan anda terbuka dalam {seconds}s"
  },
  "dreamCard": {
    "title": "Simpan mimpi ini sebagai kad",
    "body": "Kami menggabungkan mimpi yang anda tulis dan simbol yang kami temui ke dalam satu imej. Ia adalah **fail imej, bukan PDF**, jadi anda boleh menyimpannya atau menghantarnya seperti sedia ada.",
    "buyButton": "Dapatkan dengan {price}",
    "preparing": "Sedang bersiap",
    "ordering": "Mencipta pesanan…",
    "paying": "Memproses pembayaran…",
    "issuing": "Membuat kad…",
    "done": "Selesai. Gunakan butang di bawah untuk memuat turun semula.",
    "failed": "Pembayaran atau muat turun gagal. Sila cuba lagi dalam seketika.",
    "retry": "Muat turun semula",
    "contents": [
      "Simbol yang ditemui dalam mimpi anda dan apa yang mereka secara tradisional bermaksud",
      "Apa yang simbol-simbol itu tunjukkan bersama",
      "Tarikh mimpi dan versi kamus"
    ],
    "consentLabel": "Ini adalah kandungan digital yang dihantar serta-merta selepas pembayaran. Saya faham bahawa **sekali muat turun selesai, hak untuk menarik diri kerana perubahan fikiran adalah terhad**.",
    "consentRequired": "Anda perlu bersetuju dengan terma penarikan sebelum membayar.",
    "productInfoTitle": "Maklumat produk",
    "productInfo": [
      [
        "Pembekal",
        "{brand}"
      ],
      [
        "Format",
        "1 fail imej (PNG), dimuat turun di skrin ini sejurus selepas pembayaran. Ia bukan dokumen PDF."
      ],
      [
        "Keperluan",
        "Mana-mana peranti yang boleh membuka imej. Tiada pemasangan dan tiada akaun."
      ],
      [
        "Ketersediaan",
        "Tiada had masa. Fail yang dimuat turun adalah milik anda."
      ],
      [
        "Muat turun semula",
        "Sehingga 5 kali untuk pesanan yang sama. Kami tidak menyimpan fail, jadi ia tidak dapat dibuat semula setelah anda meninggalkan skrin hasil."
      ],
      [
        "Penarikan balik",
        "Pengembalian penuh sebelum muat turun selesai. Selepas itu, penarikan balik kerana perubahan fikiran adalah terhad (Akta E-Dagang Korea art. 17(2))."
      ],
      [
        "Kos pemulangan",
        "Tiada. Kandungan digital tidak dihantar."
      ]
    ],
    "refundContact": "Untuk pengembalian atau pertanyaan, hubungi meja sokongan atau alamat email di bawah. Jika fail tidak pernah dihasilkan, atau jumlah yang dikenakan berbeza dari pesanan, kami akan mengembalikannya sepenuhnya.",
    "pdfLanguageNotice": "Teks pada kad akan muncul dalam bahasa yang sama seperti skrin ini."
  },
  "conceptionReport": {
    "title": "Simpan bacaan omen konsepsi sebagai PDF",
    "body": "Apabila simbol yang traditionally read as conception omens muncul, sebuah PDF 4 halaman akan menyenaraikan apa yang muncul, apa maknanya secara tradisional, dan dari mana bacaan itu berasal. Ia tidak menentukan kehamilan atau jantina anak.",
    "buyButton": "Dapatkannya untuk {price}",
    "preparing": "Sedang bersiap",
    "ordering": "Mencipta pesanan…",
    "paying": "Mengambil pembayaran…",
    "issuing": "Membuat laporan…",
    "done": "Selesai. Gunakan butang di bawah untuk memuat turunnya semula.",
    "failed": "Pembayaran atau muat turun gagal. Sila cuba lagi dalam seketika.",
    "retry": "Muat turun lagi",
    "contents": [
      "Halaman 1 — mimpi yang anda tulis dan apa yang ditemui di dalamnya",
      "Halaman 2 — setiap simbol dan apa yang secara tradisional dimaksudkan",
      "Halaman 3 — mengapa ini dibaca sebagai tanda-tanda konsepsi",
      "Halaman 4 — halaman untuk disimpan (tarikh dan penafian)"
    ],
    "consentLabel": "Ini adalah kandungan digital yang disampaikan segera selepas pembayaran. Saya memahami bahawa **setelah muat turun selesai, hak untuk menarik diri kerana perubahan fikiran adalah terhad**.",
    "consentRequired": "Anda perlu bersetuju dengan syarat penarikan sebelum membayar.",
    "productInfoTitle": "Maklumat produk",
    "productInfo": [
      [
        "Pembekal",
        "{brand}"
      ],
      [
        "Format",
        "1 dokumen PDF (4 halaman), dimuat turun di skrin ini sejurus selepas pembayaran."
      ],
      [
        "Keperluan",
        "Mana-mana peranti yang boleh membuka PDF. Tiada pemasangan dan tiada akaun."
      ],
      [
        "Ketersediaan",
        "Tiada had masa. Fail yang dimuat turun adalah milik anda untuk disimpan."
      ],
      [
        "Muat turun semula",
        "Sehingga 5 kali untuk pesanan yang sama. Kami tidak menyimpan fail, jadi ia tidak boleh dibuat semula setelah anda meninggalkan skrin keputusan."
      ],
      [
        "Penarikan balik",
        "Pengembalian penuh sebelum muat turun selesai. Selepas itu, penarikan balik kerana perubahan fikiran adalah terhad (Akta E-Dagang Korea art. 17(2))."
      ],
      [
        "Kos pemulangan",
        "Tiada. Kandungan digital tidak dihantar."
      ]
    ],
    "refundContact": "Untuk pengembalian atau pertanyaan, hubungi meja sokongan atau alamat email di bawah. Jika dokumen tidak pernah dihasilkan, atau jumlah yang dikenakan berbeza dari pesanan, kami akan mengembalikannya sepenuhnya.",
    "pdfLanguageNotice": "PDF akan dikeluarkan dalam bahasa yang sama seperti skrin ini."
  },
  "footer": {
    "privacy": "Privasi",
    "terms": "Terma",
    "refund": "Bayaran balik",
    "pricing": "Harga",
    "legalEntity": "Syarikat",
    "representative": "Wakil",
    "businessNumber": "Pendaftaran",
    "mailOrderNumber": "Jualan online",
    "address": "Alamat",
    "customerCenter": "Khidmat pelanggan",
    "email": "Emel",
    "privacyOfficer": "Pegawai privasi",
    "hostingProvider": "Penyedia Hosting",
    "providedBy": "Disediakan oleh",
    "effective": "Berkuat kuasa",
    "backHome": "Kembali ke laman utama"
  }
};
