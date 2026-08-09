import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Türkçe — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const TR_DOCS = {
  "about": {
    "eyebrow": "Hakkında",
    "title": "Inyeon-Link Hakkında",
    "summary": "İki doğum haritasını Kore Saju geleneğinde karşılaştırıyoruz. Hesapladıklarımız ve iddia etmediğimiz şeyler burada.",
    "backLabel": "Ana Sayfa",
    "sections": [
      {
        "title": "Ne yapıyoruz",
        "blocks": [
          {
            "p": "Inyeon-Link, doğum tarihleri ve saatlerinden iki doğum haritası oluşturur ve **iki enerji setinin nasıl buluştuğunu gösterir.** Kendi haritanızı da tek başınıza okuyabilir ve hangi ruh hallerinin size uygun olduğunu görebilirsiniz."
          },
          {
            "p": "Ekranda okumak **ücretsizdir ve hesap gerektirmez.** Ücretli öğeler, ekranın asla göstermediği — element güçleri, on tanrı eşleşmeleri ve dört sütun arasındaki ilişkiler — sayıları taşıyan PDF raporlarıdır."
          }
        ]
      },
      {
        "title": "Ne hesaplıyoruz",
        "blocks": [
          {
            "p": "Haritalar, **Kore lunisolar takviminden** oluşturulur ve doğum zamanı, doğum yeri için **gerçek güneş zamanına** göre düzeltilir — aynı saat, nerede doğduğunuza bağlı olarak farklı bir güneş pozisyonu anlamına gelir."
          },
          {
            "p": "Puanlar yalnızca sabit kurallardan gelir. Geleneksel kavramlar — on tanrı, dal ilişkileri, destekleyici element — kurallar olarak ifade edilir, bu nedenle **aynı girdi her zaman aynı sonucu verir.** Bir kural değiştiğinde, eski okumaların değişmediğinden emin olmak için bir regresyon testi yaparız."
          },
          {
            "p": "**AI kullanılmamaktadır.** Ekrandaki her cümle, hesaplanan bir sonuca bağlı sabit metindir."
          }
        ]
      },
      {
        "title": "İddia etmeyeceğimiz şeyler",
        "blocks": [
          {
            "ul": [
              "**Kehanet yapmıyoruz.** Burada kimseyi takip etmeniz veya kaçınmanız için bir şey yok. Bu, bir gelenekten alınan bir referanstır.",
              "**Girdiğiniz bilgileri saklamıyoruz.** Doğum detayları, hesaplama anında kullanılır ve asla yazılmaz; sonuç bağlantıları, bir tarayıcının sunucuya göndermediği URL'nin kısmında yaşar.",
              "**Bir puan, bir kişi hakkında bir hüküm değildir.** Düşük bir sayı, bir ilişkiyi geçersiz kılmaz."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Yöntem, [rehberlerde](/guide) ayrıntılı olarak açıklanmıştır. Şirket bilgileri ve bize nasıl ulaşacağınız [iletişim sayfasında](/contact) bulunmaktadır."
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
  "intro": "Kullanım şartlarınızda — fiyatlar, politikalar — değişiklikler burada yürürlüğe girmeden önce yayınlanır. İçsel iyileştirmeler listelenmez: burada görünenler bilmeniz gerekenlerdir.",
  "empty": {
    "title": "Henüz bildirim yok",
    "body": "Bir şey değiştiğinde, burada görünecektir."
  },
  "effective": "Yürürlüğe girer {date}",
  "pager": {
    "label": "Bildirim sayfaları",
    "newer": "← Daha Yeni",
    "older": "Daha Eski →"
  },
  "items": {}
} satisfies NoticeCopy;
