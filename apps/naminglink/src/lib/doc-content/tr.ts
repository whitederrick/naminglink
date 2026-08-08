import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Türkçe — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const TR_DOCS = {
  "about": {
    "eyebrow": "Hakkında",
    "title": "Naming-Link Hakkında",
    "summary": "Korece isimleri seçmenize ve anlamanıza yardımcı olan bir hizmetiz. Sonuçlarımızı neye dayandırdığımızı ve bilerek ne yapmadığımızı burada açıklıyoruz.",
    "backLabel": "Ana Sayfa",
    "sections": [
      {
        "title": "Ne yapıyoruz",
        "blocks": [
          {
            "p": "Naming-Link, **Korece isimleri seçmenize ve anlamanıza** yardımcı olur — bir çocuğun ismindeki hanja, yurtdışında kullanılacak bir Korece isim, kendi adınızın Hangul yazımı ve bir mühür veya basılı rapor gibi hatıralar."
          },
          {
            "p": "Sonuçlarınızı görmek **ücretsizdir ve hesap açmanız gerekmez.** Ücretli ürünler, ekrana daha önce gösterilenleri yeniden satmaz: daha fazla aday açar, yazılı analiz ekler veya sonucu saklayabileceğiniz bir şeye dönüştürür."
          }
        ]
      },
      {
        "title": "Cevaplarımız neye dayanıyor",
        "blocks": [
          {
            "p": "Hanja, **Kore Yüksek Mahkemesi'nin resmi isim-hanja tablosundan** gelmektedir. Her karakterin isimlerde kullanılmak üzere sabit bir okunuşu vardır ve tablo dışındaki karakterler kaydedilemez. Bu listeye ekleme yapmıyoruz veya favori karakterler seçmiyoruz."
          },
          {
            "p": "Saju ve beş element figürleri, **Kore lunisolar takviminden** hesaplanır; doğum zamanı, doğum yerinin gerçek güneş saatine göre düzeltilir. Okuma, geleneksel bir referanstır, tahmin değildir."
          },
          {
            "p": "Yazılı açıklamalar AI tarafından üretilmektedir. **Hayali şeyler uydurmaması** için, modele yalnızca sizin girdiniz ve kendi referans verilerimiz verilir ve bunun içinde kalması söylenir. Kılavuzlar bunu ayrıntılı olarak açıklar."
          }
        ]
      },
      {
        "title": "Ne yapmıyoruz",
        "blocks": [
          {
            "ul": [
              "**Kehanet yapmıyoruz.** Burada hiçbir şey şans, zenginlik veya koruma vaat etmez.",
              "**İsminizi saklamıyoruz.** Ücretsiz sonuçlar asla sunucularımıza yazılmaz ve ücretli belgeler, dosyanın bir kopyasını saklamadan teslim edilir.",
              "**Ödeme, daha iyi bir cevap satın almaz.** Reklamla açmak ve ödeme ile açmak tam olarak aynı içeriği verir."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Hizmet 23 dilde mevcuttur. Ücretli PDF'ler, Arapça ve Kmerce için İngilizce olarak verilmektedir — PDF düzenleyici bu yazı sistemlerini desteklemediği için ve bunu ödeme öncesinde ekranda belirtiriz."
          }
        ]
      },
      {
        "title": "İletişim",
        "blocks": [
          {
            "p": "Şirket bilgileri ve bize ulaşma yolları [iletişim sayfasında](/contact) bulunmaktadır; bu sayfa, iade, gizlilik talepleri ve hata raporları için de kullanılmaktadır."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Duyurular",
    "title": "Duyurular",
    "summary": "Hizmeti kullanma şeklinizi etkileyen değişiklikleri burada duyuruyoruz.",
    "backLabel": "Ana Sayfa",
    "sections": []
  },
  "contact": {
    "eyebrow": "İletişim",
    "title": "Bize Ulaşın",
    "summary": "Sorular, iadeler, gizlilik talepleri ve hata raporları için nasıl ulaşabileceğinizi, şirket bilgilerimizle birlikte burada bulabilirsiniz.",
    "backLabel": "Ana Sayfa",
    "sections": [
      {
        "title": "Bize E-posta Gönderin",
        "blocks": [
          {
            "p": "Bize **{email}** adresinden yazın. İki iş günü içinde yanıt veriyoruz. Bir siparişle ilgili herhangi bir şey — ödeme, iade, almadığınız bir dosya — lütfen **sipariş numaranızı veya ödediğiniz e-posta adresini** ekleyin."
          },
          {
            "p": "Telefonla sorular: {customerCenter} (Kore iş saatlerinde)."
          }
        ]
      },
      {
        "title": "Buraya ne göndermelisiniz",
        "blocks": [
          {
            "ul": [
              "**Ödemeler ve iadeler** — bir belge hiç üretilmediyse veya tahsil edilen tutar siparişinizden farklıysa, tam olarak iade yapıyoruz. [İade politikası](/refund-policy) için bakın.",
              "**Gizlilik** — verilerinize erişim, düzeltme veya silme talepleri. [Gizlilik politikası](/privacy) için bakın.",
              "**Düzeltmeler** — bir hanja anlamı, okunuşu veya hesaplama yanlış görünüyorsa, bize bildirin. Hangi ekranda ve ne girdiğinizi belirtmek çok yardımcı olur.",
              "**Diğer her şey** — ortaklıklar ve basın aynı adrese gider."
            ]
          }
        ]
      },
      {
        "title": "Şirket Bilgileri",
        "blocks": [
          {
            "ul": [
              "**Hukuki varlık** — {companyName}",
              "**Temsilci** — {representative}",
              "**İşletme kayıt no.** — {businessNumber}",
              "**Mail-order satış no.** — {mailOrderNumber}",
              "**Adres** — {address}",
              "**Müşteri hizmetleri** — {customerCenter}",
              "**E-posta** — {email}",
              "**Gizlilik sorumlusu** — {privacyOfficer}",
              "**Hosting sağlayıcı** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Mesajınızda bir isim veya doğum tarihi eklemeniz gerekmez. Ücretsiz sonuçlar asla sunucularımızda saklanmaz, bu nedenle tekrar bulamayız — bir sipariş numarası yeterlidir."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const TR_NOTICES = {
  "kindLabels": {
    "service": "Hizmet",
    "product": "Ürünler",
    "policy": "Politika",
    "support": "Destek"
  },
  "intro": "Kullanım şartlarınızda — fiyatlar, politikalar — değişiklikler, yürürlüğe girmeden önce burada yayınlanır. İçsel iyileştirmeler listelenmez: burada görünenler bilmeniz gerekenlerdir.",
  "empty": {
    "title": "Henüz duyuru yok",
    "body": "Bir şey değiştiğinde, burada görünecektir."
  },
  "effective": "{date} itibarıyla geçerlidir",
  "pager": {
    "label": "Duyuru sayfaları",
    "newer": "← Daha Yeni",
    "older": "Eski →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "İletişim ve Hakkında sayfaları artık açık",
      "body": [
        "Sorular, iadeler, gizlilik talepleri ve hata raporları artık tek bir yere yönlendirilmektedir. Alt kısımda yer alan iletişim sayfasında e-posta ve şirket bilgilerini bulabilirsiniz.",
        "Cevaplarımızın neye dayandığı ve bilerek ne yapmadığımız hakkında bilgiler, hakkında sayfasında yazılıdır."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF raporları Arapça ve Kmerce için İngilizce olarak verilmektedir",
      "body": [
        "Eğer hizmeti Arapça veya Kmerce kullanıyorsanız, satın aldığınız PDF İngilizce olarak üretilmektedir. Belgelerimizi düzenleyen araç, bu iki yazı sisteminde paragrafları henüz ayarlayamamaktadır.",
        "Ekran dilinizde kalır ve adınız belgede kendi yazı sisteminizde basılır.",
        "Aynı not, ödeme öncesinde görünür. Araç bu yazı sistemlerini desteklediğinde, burada bildireceğiz."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Ödemeler henüz açık değil",
      "body": [
        "Bir isim oluşturmak ve sonucu görmek bugün ücretsizdir ve hesap açmanıza gerek yoktur.",
        "Ücretli ürünler henüz satışta değildir. Fiyatlandırma sayfasında görünen tutarlar, satışlar açıldığında geçerli olacak tutarlardır."
      ]
    }
  }
} satisfies NoticeCopy;
