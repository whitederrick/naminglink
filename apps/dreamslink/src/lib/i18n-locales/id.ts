// 드림링크 화면 사전의 Indonesian (Bahasa Indonesia)(id) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **옛 궁합 번역을 통째로 되살린 것이 아니다.** en 원문이 글자까지 같은 자리(푸터·언어
// 선택기·광고 라벨)만 물려받고, 해몽용으로 새로 쓴 자리는 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const id: Dictionary = {
  "brand": "Dreams-Link",
  "tagline": "Mimpi hari ini, dibaca melalui simbol-simbol tradisional Korea",
  "currentLanguage": "Bahasa saat ini",
  "moreLanguages": "Lainnya",
  "closeLanguages": "Tutup",
  "dream": {
    "title": "Pembacaan mimpi",
    "subtitle": "Tuliskan mimpi yang Anda alami dan kami akan mencarinya dalam kamus simbol mimpi tradisional Korea.",
    "textLabel": "Apa yang Anda impikan?",
    "textPlaceholder": "Tuliskan seperti yang Anda ingat. Misalnya: seekor ikan mas melompat keluar dari air jernih",
    "moodLabel": "Bagaimana perasaan Anda saat terbangun",
    "moods": {
      "good": "Baik",
      "scary": "Menakutkan",
      "strange": "Aneh",
      "sad": "Sedih",
      "unsure": "Tidak yakin"
    },
    "recurringLabel": "Saya mengalami mimpi ini berulang kali",
    "submit": "Baca mimpi saya",
    "submitting": "Mencari…",
    "errorEmpty": "Silakan tulis sedikit lebih banyak tentang mimpi tersebut.",
    "errorGeneric": "Kami tidak dapat memuat pembacaan. Silakan coba lagi dalam beberapa saat.",
    "resultTitle": "Pembacaan mimpi",
    "symbolsHeading": "Simbol yang ditemukan dalam mimpi Anda",
    "noSymbols": "Tidak ada simbol tradisional dari kamus kami yang muncul dalam mimpi ini. Kami membiarkannya kosong daripada menciptakan makna.",
    "themesHeading": "Apa yang ditunjukkan bersama-sama",
    "conceptionNotice": "Simbol yang secara tradisional dibaca sebagai pertanda konsepsi muncul di sini. Ini tidak menentukan kehamilan.",
    "browseSymbols": "Lihat kamus simbol tradisional",
    "popularSymbols": "Simbol yang sering dicari",
    "disclaimer": "Ini adalah materi referensi dari perspektif pembacaan mimpi tradisional, bukan nasihat medis, keuangan, atau hukum. Kami tidak menyimpan mimpi yang Anda tulis.",
    "again": "Baca mimpi lain"
  },
  "landing": {
    "title": "Baca mimpimu\ndengan cara tradisional",
    "subtitle": "Kami mencari simbol-simbol dalam mimpimu di kamus tradisional tentang 해몽.\nTanpa tanggal lahir, tanpa pendaftaran.",
    "howTitle": "Cara kerjanya",
    "steps": [
      "Tuliskan mimpi itu seperti yang kamu ingat. Satu atau dua kalimat sudah cukup.",
      "Kami mencari di kamus simbol-simbol 해몽 tradisional untuk apa yang muncul di dalamnya. Jika simbol tidak ada di sana, kami akan mengatakannya.",
      "Kamu akan melihat apa arti masing-masing simbol yang telah lama dipercaya, dan apa yang mereka tunjukkan bersama-sama."
    ],
    "privacyTitle": "Mimpi yang kamu tulis tidak disimpan",
    "privacyBody": "Apa yang kamu tulis hanya digunakan selama proses pembacaan, dan tidak pernah dicatat.\nTidak perlu akun, dan tidak ada yang tersisa di server setelah pembacaan selesai.",
    "disclaimer": "Ini adalah materi referensi dari perspektif 해몽 tradisional. Ini bukan prediksi tentang apa yang akan datang, atau nasihat medis atau keuangan."
  },
  "ads": {
    "label": "Iklan"
  },
  "selfAds": {
    "label": "Layanan terkait",
    "comingSoon": "Segera hadir",
    "purposes": {
      "naminglink": "Nama Korea dan hanja yang dipilih berdasarkan arti dan jumlah goresan",
      "inyeonlink": "Bagaimana dua orang cocok, dibaca dari empat pilar dan tanda zodiak mereka",
      "sajulink": "Empat pilar Anda sendiri, dan bagaimana hari ini bertemu dengan mereka",
      "dreamslink": "Pembacaan mimpi yang diambil dari kamus simbol",
      "placelink": "Tempat untuk berkencan di Korea, dibagikan dan direkomendasikan"
    }
  },
  "analyzing": {
    "title": "Mencari simbol-simbol dalam mimpimu",
    "quotes": [
      "Sebuah mimpi cenderung mencerminkan beberapa hari terakhir lebih dari hari-hari yang akan datang.",
      "Simbol yang sama telah dibaca secara berbeda tergantung pada siapa yang memimpikannya.",
      "Tradisional 해몽 bukanlah kunci jawaban. Ini adalah kumpulan cerita yang telah dikumpulkan selama bertahun-tahun.",
      "Sebuah mimpi yang menakutkan tidak sama dengan mimpi yang buruk. Itu mungkin adalah jejak yang ditinggalkan oleh pikiran yang terkejut.",
      "Tidak apa-apa jika kamu hanya ingat sepotong. Satu simbol sudah cukup untuk memulai.",
      "Sebuah mimpi yang terus kembali biasanya datang dengan sesuatu yang belum selesai.",
      "Seberapa jernih airnya, dan warna apa yang dimilikinya, adalah apa yang diperhatikan oleh pembaca tua dengan sangat dekat.",
      "Bagaimana perasaanmu saat bangun akan bertahan selama apa yang sebenarnya kamu lihat.",
      "Baik mimpi itu baik atau tidak, lebih baik tidak membiarkannya menentukan harimu.",
      "Sebuah 해몽 bukanlah kata tentang apa yang akan terjadi. Ini adalah pandangan kedua tentang apa yang sudah ada."
    ],
    "watching": "Sedang menonton iklan",
    "remaining": "Hasil Anda terbuka dalam {seconds} detik"
  },
  "dreamCard": {
    "title": "Simpan mimpi ini sebagai kartu",
    "body": "Kami menggabungkan mimpi yang Anda tulis dan simbol-simbol yang kami temukan ke dalam satu gambar. Ini adalah **file gambar, bukan PDF**, jadi Anda dapat menyimpannya atau mengirimkannya apa adanya.",
    "buyButton": "Dapatkan dengan {price}",
    "preparing": "Sedang mempersiapkan",
    "ordering": "Membuat pesanan…",
    "paying": "Memproses pembayaran…",
    "issuing": "Membuat kartu…",
    "done": "Selesai. Gunakan tombol di bawah untuk mengunduhnya lagi.",
    "failed": "Pembayaran atau unduhan gagal. Silakan coba lagi dalam beberapa saat.",
    "retry": "Unduh lagi",
    "contents": [
      "Simbol-simbol yang ditemukan dalam mimpi Anda dan apa artinya secara tradisional",
      "Apa yang ditunjukkan oleh simbol-simbol tersebut secara bersama",
      "Tanggal mimpi dan versi kamus"
    ],
    "consentLabel": "Ini adalah konten digital yang disampaikan segera setelah pembayaran. Saya mengerti bahwa **setelah unduhan selesai, hak untuk menarik diri karena perubahan pikiran terbatas**.",
    "consentRequired": "Anda perlu setuju dengan syarat penarikan sebelum membayar.",
    "productInfoTitle": "Informasi produk",
    "productInfo": [
      [
        "Pemasok",
        "{brand}"
      ],
      [
        "Format",
        "1 file gambar (PNG), diunduh di layar ini segera setelah pembayaran. Ini bukan dokumen PDF."
      ],
      [
        "Persyaratan",
        "Perangkat apa pun yang dapat membuka gambar. Tidak ada instalasi dan tidak ada akun."
      ],
      [
        "Ketersediaan",
        "Tidak ada batas waktu. File yang diunduh adalah milik Anda untuk disimpan."
      ],
      [
        "Unduh ulang",
        "Hingga 5 kali pada pesanan yang sama. Kami tidak menyimpan file, jadi tidak dapat dibuat lagi setelah Anda meninggalkan layar hasil."
      ],
      [
        "Penarikan",
        "Pengembalian penuh sebelum unduhan selesai. Setelah itu, penarikan karena perubahan pikiran dibatasi (Pasal 17(2) Undang-Undang E-Commerce Korea)."
      ],
      [
        "Biaya pengembalian",
        "Tidak ada. Konten digital tidak dikirim."
      ]
    ],
    "refundContact": "Untuk pengembalian atau pertanyaan, hubungi meja dukungan atau alamat email di bawah ini. Jika file tidak pernah diproduksi, atau jumlah yang dikenakan berbeda dari pesanan, kami akan mengembalikannya sepenuhnya.",
    "pdfLanguageNotice": "Teks pada kartu muncul dalam bahasa yang sama dengan layar ini."
  },
  "conceptionReport": {
    "title": "Simpan pembacaan omen konsepsi sebagai PDF",
    "body": "Ketika simbol yang traditionally read as pertanda konsepsi muncul, sebuah PDF 4 halaman menjelaskan apa yang muncul, apa artinya secara tradisional, dan dari mana pembacaan itu berasal. Ini does not determine kehamilan atau jenis kelamin anak.",
    "buyButton": "Dapatkan seharga {price}",
    "preparing": "Sedang bersiap",
    "ordering": "Membuat pesanan…",
    "paying": "Mengambil pembayaran…",
    "issuing": "Membuat laporan…",
    "done": "Selesai. Gunakan tombol di bawah untuk mengunduhnya lagi.",
    "failed": "Pembayaran atau unduhan gagal. Silakan coba lagi dalam beberapa saat.",
    "retry": "Unduh lagi",
    "contents": [
      "Halaman 1 — mimpi yang Anda tulis dan apa yang ditemukan di dalamnya",
      "Halaman 2 — setiap simbol dan apa artinya secara tradisional",
      "Halaman 3 — mengapa ini dibaca sebagai pertanda konsepsi",
      "Halaman 4 — halaman untuk disimpan (tanggal dan penafian)"
    ],
    "consentLabel": "Ini adalah konten digital yang disampaikan segera setelah pembayaran. Saya mengerti bahwa **setelah unduhan selesai, hak untuk menarik diri karena perubahan pikiran terbatas**.",
    "consentRequired": "Anda perlu setuju dengan syarat penarikan sebelum membayar.",
    "productInfoTitle": "Informasi produk",
    "productInfo": [
      [
        "Pemasok",
        "{brand}"
      ],
      [
        "Format",
        "1 dokumen PDF (4 halaman), diunduh di layar ini segera setelah pembayaran."
      ],
      [
        "Persyaratan",
        "Perangkat apa pun yang dapat membuka PDF. Tidak ada instalasi dan tidak ada akun."
      ],
      [
        "Ketersediaan",
        "Tidak ada batas waktu. File yang diunduh adalah milik Anda untuk disimpan."
      ],
      [
        "Unduh ulang",
        "Hingga 5 kali pada pesanan yang sama. Kami tidak menyimpan file, jadi tidak dapat dibuat lagi setelah Anda meninggalkan layar hasil."
      ],
      [
        "Penarikan",
        "Pengembalian penuh sebelum unduhan selesai. Setelah itu, penarikan karena perubahan pikiran dibatasi (Pasal 17(2) Undang-Undang E-Commerce Korea)."
      ],
      [
        "Biaya pengembalian",
        "Tidak ada. Konten digital tidak dikirim."
      ]
    ],
    "refundContact": "Untuk pengembalian dana atau pertanyaan, hubungi meja dukungan atau alamat email di bawah ini. Jika dokumen tidak pernah diproduksi, atau jumlah yang dikenakan berbeda dari pesanan, kami akan mengembalikannya sepenuhnya.",
    "pdfLanguageNotice": "PDF keluar dalam bahasa yang sama dengan layar ini."
  },
  "footer": {
    "privacy": "Privasi",
    "terms": "Ketentuan",
    "refund": "Refund",
    "pricing": "Harga",
    "legalEntity": "Perusahaan",
    "representative": "Perwakilan",
    "businessNumber": "Registrasi",
    "mailOrderNumber": "Perdagangan online",
    "address": "Alamat",
    "customerCenter": "Layanan pelanggan",
    "email": "Email",
    "privacyOfficer": "Petugas privasi",
    "hostingProvider": "Penyedia Hosting",
    "providedBy": "Disediakan oleh",
    "effective": "Berlaku",
    "backHome": "Kembali ke beranda"
  }
};
