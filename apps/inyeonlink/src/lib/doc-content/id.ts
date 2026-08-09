import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Bahasa Indonesia — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const ID_DOCS = {
  "about": {
    "eyebrow": "Tentang",
    "title": "Tentang Inyeon-Link",
    "summary": "Kami membandingkan dua grafik kelahiran dalam tradisi Saju Korea. Berikut adalah apa yang kami hitung, dan apa yang kami tolak untuk klaim.",
    "backLabel": "Beranda",
    "sections": [
      {
        "title": "Apa yang kami lakukan",
        "blocks": [
          {
            "p": "Inyeon-Link membangun dua grafik kelahiran dari tanggal dan waktu kelahiran dan menunjukkan **bagaimana dua set energi bertemu.** Anda juga dapat membaca grafik Anda sendiri secara terpisah dan melihat temperamen mana yang cenderung cocok untuk Anda."
          },
          {
            "p": "Membaca di layar adalah **gratis dan tidak memerlukan akun.** Item berbayar adalah laporan PDF yang memuat angka yang tidak ditampilkan di layar — kekuatan elemen, pasangan sepuluh dewa, dan hubungan di seluruh empat pilar."
          }
        ]
      },
      {
        "title": "Apa yang kami hitung",
        "blocks": [
          {
            "p": "Grafik dibangun dari **kalender lunisolar Korea**, dan waktu kelahiran dikoreksi ke **waktu matahari yang sebenarnya** untuk tempat kelahiran — waktu jam yang sama berarti posisi matahari yang berbeda tergantung di mana Anda dilahirkan."
          },
          {
            "p": "Skor berasal dari aturan tetap saja. Konsep tradisional — sepuluh dewa, hubungan cabang, elemen pendukung — diekspresikan sebagai aturan, sehingga **input yang sama selalu memberikan hasil yang sama.** Ketika sebuah aturan berubah, kami menjalankan regresi untuk memastikan pembacaan yang lebih lama tidak berubah."
          },
          {
            "p": "**Tidak ada AI yang terlibat.** Setiap kalimat di layar adalah teks tetap yang terikat pada hasil yang dihitung."
          }
        ]
      },
      {
        "title": "Apa yang tidak akan kami klaim",
        "blocks": [
          {
            "ul": [
              "**Kami tidak meramal.** Tidak ada yang di sini memberi tahu Anda untuk mengejar atau menghindari siapa pun. Ini adalah referensi yang diambil dari tradisi.",
              "**Kami tidak menyimpan apa yang Anda masukkan.** Detail kelahiran digunakan untuk saat perhitungan dan tidak pernah dicatat; tautan hasil hidup di bagian URL yang tidak dikirim browser ke server.",
              "**Skor bukanlah vonis terhadap seseorang.** Angka yang rendah tidak membatalkan sebuah hubungan."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Metode ini dijelaskan secara rinci dalam [panduan](/guide). Detail perusahaan dan cara menghubungi kami ada di [halaman kontak](/contact)."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const ID_NOTICES = {
  "kindLabels": {
    "service": "Layanan",
    "product": "Produk",
    "policy": "Kebijakan",
    "support": "Dukungan"
  },
  "intro": "Perubahan pada syarat penggunaan Anda — harga, kebijakan — diposting di sini sebelum mereka berlaku. Perbaikan internal tidak dicantumkan: apa yang muncul di sini adalah apa yang perlu Anda ketahui.",
  "empty": {
    "title": "Belum ada pemberitahuan",
    "body": "Ketika sesuatu berubah, itu akan muncul di sini."
  },
  "effective": "Berlaku mulai {date}",
  "pager": {
    "label": "Halaman pemberitahuan",
    "newer": "← Lebih Baru",
    "older": "Lebih Lama →"
  },
  "items": {}
} satisfies NoticeCopy;
