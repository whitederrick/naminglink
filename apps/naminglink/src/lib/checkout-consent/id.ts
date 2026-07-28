import type { ConsentCopySet } from "@/lib/checkout-consent/types";

// 인도네시아어판. 한국어 원문(ko.ts)을 옮긴 것이다 — **문구를 고칠 때는 ko.ts를 먼저 보고
// 조건·기한·예외를 그대로 유지할 것.** 법정 고지라 뜻이 흐려지면 청약철회 제한이 효력을 잃는다.

export const id: ConsentCopySet = {
  DIGITAL: {
    infoTitle: "Informasi produk",
    info: [
      ["Produsen · Penyedia", "Naming-Link"],
      ["Bentuk produk", "Konten digital (tampilan web atau dokumen PDF). Diberikan segera setelah pembayaran."],
      ["Syarat penggunaan", "Peramban internet atau perangkat yang dapat membuka PDF. Tidak perlu instalasi tambahan."],
      ["Masa penggunaan", "Tanpa batas. Berkas yang diunduh disimpan oleh pengguna."],
      ["Pembatalan pembelian", "Pengembalian dana penuh sebelum penyediaan dimulai. Setelah dimulai, pembatalan karena sekadar berubah pikiran menjadi terbatas (Pasal 17 ayat (2) Undang-Undang Perdagangan Elektronik Korea)."],
      ["Biaya penukaran · pengembalian", "Tidak ada. Karena berupa konten digital, tidak ada pengiriman."],
    ],
    consent:
      "Saya telah memahami bahwa produk ini adalah konten digital yang diberikan segera setelah pembayaran, dan **bahwa pembatalan pembelian karena sekadar berubah pikiran menjadi terbatas begitu penyediaan dimulai**.",
    required: "Anda harus menyetujui pembatasan pembatalan pembelian untuk dapat melakukan pembayaran.",
    refund:
      "Untuk pengembalian dana atau pertanyaan, silakan hubungi pusat layanan pelanggan di bawah atau melalui email. Jika produk tidak diberikan karena kesalahan sistem, atau jumlah yang dibayarkan berbeda dari pesanan, kami mengembalikan dana sepenuhnya.",
  },
  MADE_TO_ORDER: {
    infoTitle: "Informasi produk",
    info: [
      ["Produsen · Penyedia", "Naming-Link"],
      ["Bentuk produk", "Stempel nama (dojang) fisik yang diukir satu per satu sesuai teks yang Anda pesan."],
      ["Cara pembuatan", "Setelah pesanan diterima, kami memastikan teks dan jenis hurufnya, lalu mulai mengukir."],
      ["Pengiriman", "Dikirim setelah pembuatan selesai. Di dalam Korea melalui kurir, ke luar negeri melalui pengiriman internasional."],
      ["Pembatalan pembelian", "**Sebelum pengukiran dimulai**, pengembalian dana penuh. Setelah dimulai, pembatalan pembelian menjadi terbatas — barang ini diproduksi secara individual sesuai pesanan sehingga tidak dapat dijual kembali (Pasal 17 ayat (2) Undang-Undang Perdagangan Elektronik Korea)."],
      ["Penukaran · pengembalian", "Jika barang rusak, salah ukir, atau berbeda dari pesanan, kami membuatkannya ulang tanpa biaya atau mengembalikan dana sepenuhnya."],
      ["Biaya pengembalian", "Gratis apabila termasuk alasan di atas. Perubahan pikiran hanya dapat dibatalkan sebelum pengukiran dimulai."],
    ],
    consent:
      "Saya telah memahami bahwa stempel ini diukir sesuai teks yang saya pesan, yaitu **produk pesanan khusus, dan bahwa pembatalan pembelian karena sekadar berubah pikiran menjadi terbatas begitu pengukiran dimulai**.",
    required: "Anda harus menyetujui pembatasan pembatalan pembelian untuk dapat melakukan pembayaran.",
    refund:
      "Untuk pengembalian dana atau pertanyaan, silakan hubungi pusat layanan pelanggan di bawah atau melalui email. Barang yang rusak, salah ukir, atau berbeda dari pesanan akan dibuat ulang tanpa biaya atau dananya dikembalikan sepenuhnya.",
  },
};
