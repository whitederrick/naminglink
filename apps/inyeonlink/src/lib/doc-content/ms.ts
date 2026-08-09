import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Bahasa Melayu — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const MS_DOCS = {
  "about": {
    "eyebrow": "Tentang",
    "title": "Tentang Inyeon-Link",
    "summary": "Kami membandingkan dua carta kelahiran dalam tradisi Saju Korea. Berikut adalah apa yang kami kira, dan apa yang kami tolak untuk mendakwa.",
    "backLabel": "Laman Utama",
    "sections": [
      {
        "title": "Apa yang kami lakukan",
        "blocks": [
          {
            "p": "Inyeon-Link membina dua carta kelahiran daripada tarikh dan waktu kelahiran dan menunjukkan **bagaimana dua set tenaga bertemu.** Anda juga boleh membaca carta anda sendiri secara berasingan dan melihat sifat-sifat yang cenderung sesuai dengan anda."
          },
          {
            "p": "Membaca di skrin adalah **percuma dan tidak memerlukan akaun.** Item berbayar adalah laporan PDF yang mengandungi angka yang tidak pernah ditunjukkan di skrin — kekuatan elemen, pasangan sepuluh dewa dan hubungan di seluruh empat tiang."
          }
        ]
      },
      {
        "title": "Apa yang kami kira",
        "blocks": [
          {
            "p": "Carta dibina daripada **kalendar lunisolar Korea**, dan waktu kelahiran diperbetulkan kepada **waktu solar sebenar** untuk tempat kelahiran — waktu jam yang sama bermakna kedudukan matahari yang berbeza bergantung kepada tempat anda dilahirkan."
          },
          {
            "p": "Skor datang daripada peraturan tetap sahaja. Konsep tradisional — sepuluh dewa, hubungan cabang, elemen sokongan — dinyatakan sebagai peraturan, jadi **input yang sama sentiasa memberikan hasil yang sama.** Apabila peraturan berubah, kami menjalankan regresi untuk memastikan bacaan lama tidak terjejas."
          },
          {
            "p": "**Tiada AI terlibat.** Setiap ayat di skrin adalah teks tetap yang dilampirkan kepada hasil yang dikira."
          }
        ]
      },
      {
        "title": "Apa yang tidak akan kami dakwa",
        "blocks": [
          {
            "ul": [
              "**Kami tidak meramal nasib.** Tiada apa di sini yang memberitahu anda untuk mengejar atau menghindari sesiapa. Ia adalah rujukan yang diambil daripada tradisi.",
              "**Kami tidak menyimpan apa yang anda masukkan.** Butiran kelahiran digunakan untuk saat pengiraan dan tidak pernah dicatat; pautan hasil berada di bahagian URL yang tidak dihantar oleh pelayar kepada pelayan.",
              "**Skor bukanlah keputusan terhadap seseorang.** Nombor yang rendah tidak membatalkan hubungan."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Kaedah ini diterangkan secara terperinci dalam [panduan](/guide). Butiran syarikat dan cara untuk menghubungi kami terdapat di [halaman hubungan](/contact)."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const MS_NOTICES = {
  "kindLabels": {
    "service": "Perkhidmatan",
    "product": "Produk",
    "policy": "Dasar",
    "support": "Sokongan"
  },
  "intro": "Perubahan kepada terma penggunaan anda — harga, dasar — akan dipaparkan di sini sebelum ia berkuat kuasa. Penambahbaikan dalaman tidak disenaraikan: apa yang muncul di sini adalah apa yang anda perlu tahu.",
  "empty": {
    "title": "Tiada notis lagi",
    "body": "Apabila sesuatu berubah, ia akan muncul di sini."
  },
  "effective": "Berkuat kuasa {date}",
  "pager": {
    "label": "Halaman notis",
    "newer": "← Lebih Baru",
    "older": "Lebih Lama →"
  },
  "items": {}
} satisfies NoticeCopy;
