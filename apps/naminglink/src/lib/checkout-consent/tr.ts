import type { ConsentCopySet } from "@/lib/checkout-consent/types";

// Türkçe. ko.ts içindeki Korece asıl metnin çevirisidir; hukuken geçerli olan Korece metindir.
// **Koşulları, süreleri veya istisnaları bu dosyada değiştirmeyin** — önce ko.ts'yi düzeltin,
// sonra tüm dilleri birlikte gözden geçirin.

export const tr: ConsentCopySet = {
  DIGITAL: {
    infoTitle: "Ürün bilgileri",
    info: [
      ["Üretici / sağlayıcı", "Naming-Link"],
      ["Ürün türü", "Dijital içerik (ekrandaki sonuç veya PDF belgesi). Ödemeden hemen sonra sunulur."],
      ["Kullanım koşulları", "İnternet tarayıcısı veya PDF açabilen herhangi bir cihaz. Ayrıca bir kurulum gerekmez."],
      ["Kullanım süresi", "Sınırsız. İndirdiğiniz dosya sizde kalır."],
      ["Cayma hakkı", "Sunum başlamadan önce bedelin tamamı iade edilir. Başladıktan sonra fikir değişikliğine dayalı cayma sınırlıdır (Kore E-Ticaret Kanunu, madde 17 fıkra 2)."],
      ["Değişim / iade masrafı", "Yok. Dijital içerik olduğu için kargo gönderimi yapılmaz."],
    ],
    consent:
      "Bu ürünün ödemeden hemen sonra sunulan bir dijital içerik olduğunu ve **sunum başladıktan sonra yalnızca fikir değiştirmeye dayalı cayma hakkının sınırlandığını** anladım.",
    required: "Ödeme yapabilmek için cayma hakkı kısıtlamalarını kabul etmeniz gerekir.",
    refund:
      "İade ve sorularınız için aşağıdaki müşteri hizmetleri merkezini veya e-posta adresini kullanın. Sistem hatası nedeniyle ürün sunulmadıysa ya da tahsil edilen tutar siparişten farklıysa bedelin tamamını iade ederiz.",
  },
  MADE_TO_ORDER: {
    infoTitle: "Ürün bilgileri",
    info: [
      ["Üretici / sağlayıcı", "Naming-Link"],
      ["Ürün türü", "Sipariş ettiğiniz metin oyularak tek tek üretilen fiziksel mühür (dojang)"],
      ["Üretim şekli", "Sipariş alındıktan sonra metin ve yazı tipi teyit edilir, ardından oyma işlemine başlanır."],
      ["Kargo", "Oyma tamamlandıktan sonra gönderilir. Kore içinde kargoyla, yurt dışına uluslararası gönderimle."],
      ["Cayma hakkı", "**Oyma işlemi başlamadan önce** bedelin tamamı iade edilir. Başladıktan sonra cayma hakkı sınırlıdır — ürün siparişinize göre tek tek üretildiğinden yeniden satılamaz (Kore E-Ticaret Kanunu, madde 17 fıkra 2)."],
      ["Değişim / iade", "Ürün hasarlı, yanlış oyulmuş veya siparişten farklı ise ücretsiz olarak yeniden üretir ya da bedelin tamamını iade ederiz."],
      ["İade masrafı", "Yukarıdaki durumlarda ücretsizdir. Fikir değişikliği yalnızca oyma başlamadan önce iptal edilebilir."],
    ],
    consent:
      "Bu mührün **verdiğim metin oyularak üretilen siparişe özel bir ürün olduğunu ve oyma başladıktan sonra yalnızca fikir değiştirmeye dayalı cayma hakkının sınırlandığını** anladım.",
    required: "Ödeme yapabilmek için cayma hakkı kısıtlamalarını kabul etmeniz gerekir.",
    refund:
      "İade ve sorularınız için aşağıdaki müşteri hizmetleri merkezini veya e-posta adresini kullanın. Hasarlı, yanlış oyulmuş veya siparişten farklı ürünler ücretsiz yeniden üretilir ya da bedelin tamamı iade edilir.",
  },
};
