import type { ConsentCopySet } from "@/lib/checkout-consent/types";

// Bahasa Melayu (Malaysia). Teks asal bahasa Korea (ko.ts) ialah rujukan yang mengikat —
// jika maknanya berbeza, ko.ts yang berkuat kuasa. Ini notis undang-undang: syarat, tempoh
// dan pengecualian mesti kekal sama seperti dalam ko.ts.

export const ms: ConsentCopySet = {
  DIGITAL: {
    infoTitle: "Maklumat produk",
    info: [
      ["Pengeluar / Pembekal", "Naming-Link"],
      ["Bentuk produk", "Kandungan digital (paparan web atau dokumen PDF). Disediakan serta-merta selepas pembayaran."],
      ["Syarat penggunaan", "Pelayar internet atau mana-mana peranti yang boleh membuka PDF. Tiada pemasangan tambahan diperlukan."],
      ["Tempoh penggunaan", "Tiada had. Fail yang dimuat turun disimpan oleh pengguna."],
      ["Pembatalan belian", "Bayaran balik penuh sebelum penyediaan bermula. Setelah bermula, pembatalan atas sebab semata-mata berubah fikiran adalah terhad (Seksyen 17(2) Akta Perdagangan Elektronik Korea)."],
      ["Kos penukaran / pemulangan", "Tiada. Oleh sebab ini kandungan digital, tiada penghantaran."],
    ],
    consent:
      "Saya faham bahawa produk ini ialah kandungan digital yang disediakan serta-merta selepas pembayaran, dan **bahawa pembatalan belian atas sebab semata-mata berubah fikiran menjadi terhad setelah penyediaan bermula**.",
    required: "Anda perlu bersetuju dengan sekatan pembatalan belian sebelum boleh membuat pembayaran.",
    refund:
      "Untuk bayaran balik atau pertanyaan, sila hubungi pusat khidmat pelanggan di bawah atau melalui e-mel. Jika produk tidak disediakan disebabkan ralat sistem, atau jumlah yang dicaj berbeza daripada pesanan, kami akan memulangkan bayaran sepenuhnya.",
  },
  MADE_TO_ORDER: {
    infoTitle: "Maklumat produk",
    info: [
      ["Pengeluar / Pembekal", "Naming-Link"],
      ["Bentuk produk", "Cop mohor nama (dojang) fizikal yang diukir satu per satu mengikut teks yang anda pesan."],
      ["Cara penghasilan", "Selepas pesanan diterima, kami mengesahkan teks dan muka taipnya, kemudian mula mengukir."],
      ["Penghantaran", "Dihantar setelah penghasilan selesai. Di dalam Korea melalui kurier, ke luar negara melalui penghantaran antarabangsa."],
      ["Pembatalan belian", "**Sebelum pengukiran bermula**, bayaran balik penuh. Setelah bermula, pembatalan belian menjadi terhad — barangan ini dihasilkan secara individu mengikut pesanan sehingga tidak boleh dijual semula (Seksyen 17(2) Akta Perdagangan Elektronik Korea)."],
      ["Penukaran / pemulangan", "Jika barangan rosak, tersalah ukir, atau berbeza daripada pesanan, kami akan menghasilkannya semula tanpa bayaran atau memulangkan bayaran sepenuhnya."],
      ["Kos pemulangan", "Percuma sekiranya termasuk dalam sebab di atas. Perubahan fikiran hanya boleh dibatalkan sebelum pengukiran bermula."],
    ],
    consent:
      "Saya faham bahawa cop mohor ini diukir mengikut teks yang saya pesan, iaitu **produk tempahan khas, dan bahawa pembatalan belian atas sebab semata-mata berubah fikiran menjadi terhad setelah pengukiran bermula**.",
    required: "Anda perlu bersetuju dengan sekatan pembatalan belian sebelum boleh membuat pembayaran.",
    refund:
      "Untuk bayaran balik atau pertanyaan, sila hubungi pusat khidmat pelanggan di bawah atau melalui e-mel. Barangan yang rosak, tersalah ukir, atau berbeza daripada pesanan akan dihasilkan semula tanpa bayaran atau bayarannya dipulangkan sepenuhnya.",
  },
};
