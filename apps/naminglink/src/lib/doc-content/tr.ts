import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Türkçe — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const TR_DOCS = {
  "about": {
    "eyebrow": "Hakkında",
    "title": "Naming-Link Hakkında",
    "summary": "Korece isimleri seçmenize ve anlamanıza yardımcı oluyoruz. Sonuçlarımızı neye dayandırdığımızı ve bilerek ne yapmadığımızı burada açıklıyoruz.",
    "backLabel": "Ana Sayfa",
    "sections": [
      {
        "title": "Ne yapıyoruz",
        "blocks": [
          {
            "p": "Naming-Link, **Korece isimleri seçmenize ve anlamanıza yardımcı olur** — bir çocuğun ismindeki hanja, yurtdışında kullanılacak bir Korece isim, kendi adınızın Hangul yazımı ve bir mührü veya basılı raporu gibi hatıralar."
          },
          {
            "p": "Sonuçlarınızı görmek **ücretsizdir ve hesap açmanıza gerek yoktur.** Ücretli ürünler, ekranda zaten gösterilenleri yeniden satmaz: daha fazla aday açar, yazılı analiz ekler veya sonucu saklayabileceğiniz bir şeye dönüştürür."
          }
        ]
      },
      {
        "title": "Cevaplarımız neye dayanıyor",
        "blocks": [
          {
            "p": "Hanja, **Kore Yüksek Mahkemesi'nin resmi isim-hanja tablosundan** gelmektedir. Her karakterin isimlerde kullanılmak üzere sabit bir okunuşu vardır ve tablo dışında kalan karakterler kaydedilemez. Bu listeye ekleme yapmıyoruz veya favori karakterler seçmiyoruz."
          },
          {
            "p": "Saju ve beş element figürleri, **Kore lunisolar takviminden** hesaplanır ve doğum zamanı, doğum yerinin gerçek güneş zamanı ile düzeltilir. Okuma, geleneksel bir referanstır, tahmin değildir."
          },
          {
            "p": "Yazılı açıklamalar AI tarafından üretilmektedir. **Hayali şeyler uydurmaması için**, modele yalnızca sizin girdiniz ve bizim referans verilerimiz verilir ve bunun içinde kalması söylenir. Kılavuzlar bunu detaylı bir şekilde açıklar."
          }
        ]
      },
      {
        "title": "Ne yapmıyoruz",
        "blocks": [
          {
            "ul": [
              "**Kehanet yapmıyoruz.** Burada hiçbir şey şans, zenginlik veya koruma vaat etmez.",
              "**İsminizi saklamıyoruz.** Ücretsiz sonuçlar asla sunucularımıza kaydedilmez ve ücretli belgeler, dosyanın bir kopyasını saklamadan teslim edilir.",
              "**Ödeme yapmak daha iyi bir cevap almanızı sağlamaz.** Reklamla açmak ve ödeme ile açmak tam olarak aynı içeriği verir."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Hizmet 23 dilde mevcuttur. Ücretli PDF'ler, Arapça ve Khmer için İngilizce olarak verilmektedir — PDF düzenleyici bu yazı sistemlerini desteklememektedir — ve bunu ödeme yapmadan önce ekranda belirtiriz."
          }
        ]
      },
      {
        "title": "İletişim",
        "blocks": [
          {
            "p": "Şirket bilgileri ve bizimle nasıl iletişime geçeceğiniz [iletişim sayfasında](/contact) bulunmaktadır; bu sayfa, iadeler, gizlilik talepleri ve hata raporları için de kullanılmaktadır."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Okumalar",
    "title": "Belirli okumalar — her karakter için bir telaffuz",
    "summary": "Resmi tablo yalnızca karakterleri listelemez. Aynı zamanda her birinin bir isimde kullanıldığında nasıl okunacağını da belirler.",
    "backLabel": "Kılavuz",
    "sections": [
      {
        "title": "Her karakter için belirli bir okuma",
        "blocks": [
          {
            "p": "İsim-hanja tablosu yalnızca hangi karakterlerin kullanılabileceğini belirlemez. **Her karakterin bir isimde göründüğünde nasıl okunacağını da belirler.** Bu sabit okuma, kayıt için geçerlidir."
          },
          {
            "p": "Çoğu hanjanın birden fazla olası okuması vardır. Ancak bir isim, belgelerde yazılır ve yüksek sesle söylenir, bu nedenle tam olarak bir okuma gerektirir. Bu nedenle tablo, her karaktere isimlerde kullanılmak üzere bir okuma atar ve başka bir okuma kaydedilemez."
          }
        ]
      },
      {
        "title": "Bu nedenle ses önce gelir",
        "blocks": [
          {
            "p": "Bu nedenle Naming-Link, hanja aramadan önce sesi sabitler. Eğer isim \"지은\" ise, anlam yalnızca **지** okumasına atanan karakterler ve **은** okumasına atanan karakterler arasında seçilebilir."
          },
          {
            "p": "Bir anlam ne kadar iyi olursa olsun, okuması uymayan bir karakter o isim için kullanılamaz. Ayrıca, bir karakterle uyum sağlamak için ismin sesini değiştirmeyiz — bir isim ömür boyu söylenir ve ses önce belirlenir, ardından hanja gelir."
          }
        ]
      },
      {
        "title": "Soyadları bu tablonun dışında",
        "blocks": [
          {
            "p": "Bu sıkça yanlış anlaşılır. **Tablo, verilen ismi yönetir, soyadını değil.** Bir soyadı, aile kaydında zaten bulunanı takip eder, bu nedenle bazı insanlar isim-hanja tablosunda olmayan karakterleri soyadı olarak kullanır."
          },
          {
            "p": "Bu nedenle Naming-Link, soyadı hanja'yı farklı bir şekilde ele alır. Sadece size bir soyadı bulmanıza yardımcı oluruz ve tablo dışında bir karakteri olan kişiler için doğrudan bir alan bırakırız. Namgung ve Seonwoo gibi iki heceli soyadları da aynı şekilde girilir."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Nasıl çalışır",
    "title": "İsminizi Hangul'da nasıl yazıyoruz",
    "summary": "Bir yabancı ismi Hangul'da yazarken sesleri nasıl seçtiğimizi ve neden hanja eklemediğimizi açıklıyoruz.",
    "backLabel": "Kılavuz",
    "sections": [
      {
        "title": "Sesleri, anlamları değil",
        "blocks": [
          {
            "p": "Bu hizmet, **isminizi** Hangul'da yazar. Size bir Korece isim vermez. Michael, 마이클 olur — aynı isim, Korelilerin okuyup söyleyebileceği şekilde yazılır. Bunu, anlamı benzer olan bir Korece isimle değiştirmiyoruz."
          },
          {
            "p": "Eğer istediğiniz bir Korece isimse, **bu farklı bir hizmettir.** Biri isminizi korur ve yalnızca yazıyı değiştirir; diğeri yeni bir isim önerir."
          }
        ]
      },
      {
        "title": "Korece'de olmayan sesler",
        "blocks": [
          {
            "p": "Her dilin Korece'de bulunmayan sesleri vardır — f, v, z, th ve Korece'nin yapmadığı sesli harf ayrımları. Bu sesler için, **bir Koreli konuşanın gerçekten söylediği** sesi yazarız, orijinal fonetiği sembol sembol aktararak değil. Amaç, kullanılacak yazım, en teknik olarak sadık olan değil."
          },
          {
            "p": "Aynı yazım, ismin nereden geldiğine bağlı olarak farklılık gösterebilir, bu nedenle dilinizi ve ülkenizi soruyoruz ve o telaffuza göre çalışıyoruz."
          }
        ]
      },
      {
        "title": "Birden fazla yazım, yan yana",
        "blocks": [
          {
            "p": "Tek bir doğru cevap yoktur. Orijinal sese en yakın yazım, Kore'de en yaygın olarak kullanılan yazım ve yazması en kolay olan genellikle üç farklı şeydir. Bu nedenle, bunları yan yana gösteriyoruz ve aralarındaki farkları belirtiyoruz."
          },
          {
            "p": "Eğer hiçbiri doğru gelmiyorsa, istediğiniz ses hakkında bir ipucu ekleyebilir ve tekrar çalıştırabilirsiniz — örneğin, belirli bir hecenin farklı yazılmasını istediğinizi belirtebilirsiniz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Burada hanja yok",
        "blocks": [
          {
            "p": "Bir transliterasyona hanja eklemiyoruz. Hanja anlam taşır ve bu akış sesle ilgilidir. Sadece sese uyan karakterleri eşleştirmek, istemediğiniz bir anlamla sonuçlanabilir."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Nasıl çalışır",
    "title": "Korece bir isim nasıl oluşturuyoruz",
    "summary": "Mevcut soyadlarından seçiyoruz, ismin ne kadar kolay söylendiğini ve yazıldığını tartıyoruz ve ismin ne amaçla kullanılacağını soruyoruz.",
    "backLabel": "Kılavuz",
    "sections": [
      {
        "title": "Soyadı ile başlıyoruz",
        "blocks": [
          {
            "p": "Kore'de soyadı önce gelir ve verilen isimlerden farklı olarak serbestçe icat edilmez — onu miras alırsınız. Bu nedenle, yalnızca Korelilerin gerçekten sahip olduğu soyadlarını öneriyoruz. Varsayılan havuzumuz, **en yaygın 20 soyadı**, toplamda nüfusun yaklaşık %80'ini kapsar."
          },
          {
            "p": "Eğer kendi soyadınız, ses olarak gerçek bir Kore soyadıyla örtüşüyorsa — Wang ile 왕, Ye ile 예 — bunu önce gösteriyoruz. Orijinal isminizle bir bağlantı kurmak, rastgele seçilen bir soyadından daha değerlidir."
          },
          {
            "p": "Bir soyadı kendiniz seçebilir veya bize öneri yapmamıza izin verebilirsiniz. Her iki durumda da **mevcut bir soyadı** öneriyoruz."
          }
        ]
      },
      {
        "title": "Söylemesi kolay, yazması kolay",
        "blocks": [
          {
            "p": "Bu, Kore'de insanların sizi gerçekten çağıracağı bir isimdir, bu nedenle ilk kontrol ettiğimiz şey, bir Korelinin bunu bir kez duyup yazıp yazamayacağıdır. Her seferinde hecelemek gereken bir isim, sizin değil, sizin taşıdığınız bir yük olur."
          },
          {
            "p": "Anlam da önemlidir. Korece verilen isimler genellikle bir anlam taşır, bu nedenle ismin ne olarak okunduğunu ve neden seçtiğimizi size bildiririz — yalnızca ismin kendisi değil."
          }
        ]
      },
      {
        "title": "İsmin ne amaçla kullanılacağını soruyoruz",
        "blocks": [
          {
            "p": "Üniversite belgeleri için bir isim, arkadaşların bir odanın içinde bağıracağı bir isimle aynı değildir veya çevrimiçi kullanacağınız bir takma adla aynı değildir. Ne amaçla kullanmayı planladığınızı soruyoruz ve bunu dikkate alıyoruz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu bir transliterasyon değildir",
        "blocks": [
          {
            "p": "Burada **yeni bir Kore ismi öneriyoruz.** Eğer mevcut isminizin Hangul'da yazılmasını istiyorsanız — Michael, 마이클 olarak — [Hangul yazım kılavuzuna](/guide/how-hangul-transliteration) bakın."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Duyurular",
    "title": "Duyurular",
    "summary": "Hizmeti kullanımınızı etkileyen değişiklikleri burada duyuruyoruz.",
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
        "title": "Bize e-posta gönderin",
        "blocks": [
          {
            "p": "**{email}** adresine yazın. İki iş günü içinde yanıtlıyoruz. Bir siparişle ilgili herhangi bir şey — ödeme, iade, almadığınız bir dosya — lütfen **sipariş numaranızı veya ödediğiniz e-posta adresini** ekleyin."
          },
          {
            "p": "Telefonla sorgulamalar: {customerCenter} (Kore iş saatleri)."
          }
        ]
      },
      {
        "title": "Buraya ne göndermelisiniz",
        "blocks": [
          {
            "ul": [
              "**Ödemeler ve iadeler** — eğer bir belge hiç üretilmediyse veya tahsil edilen tutar siparişinizden farklıysa, tam olarak iade yapıyoruz. [İade politikası](/refund-policy) için bakın.",
              "**Gizlilik** — verilerinize erişim, düzeltme veya silme talepleri. [Gizlilik politikası](/privacy) için bakın.",
              "**Düzeltmeler** — eğer bir hanja anlamı, okuması veya hesaplaması yanlış görünüyorsa, bize bildirin. Hangi ekranda ve ne girdiğinizi belirtmek büyük ölçüde yardımcı olur.",
              "**Diğer her şey** — ortaklıklar ve basın aynı adrese gider."
            ]
          }
        ]
      },
      {
        "title": "Şirket bilgileri",
        "blocks": [
          {
            "ul": [
              "**Hukuki varlık** — {companyName}",
              "**Temsilci** — {representative}",
              "**İşletme kayıt no.** — {businessNumber}",
              "**Sanal satış no.** — {mailOrderNumber}",
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
            "p": "Mesajınızda bir isim veya doğum tarihi eklemenize gerek yoktur. Ücretsiz sonuçlar asla sunucularımızda saklanmaz, bu nedenle tekrar bulamayız — bir sipariş numarası yeterlidir."
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
  "intro": "Kullanım şartlarınızı etkileyen değişiklikler — fiyatlar, politikalar — yürürlüğe girmeden önce burada yayınlanır. İçsel iyileştirmeler listelenmez: burada görünen, bilmeniz gerekenlerdir.",
  "empty": {
    "title": "Henüz duyuru yok",
    "body": "Bir şey değiştiğinde, burada görünecektir."
  },
  "effective": "{date} tarihinden itibaren geçerlidir",
  "pager": {
    "label": "Duyuru sayfaları",
    "newer": "← Daha Yeni",
    "older": "Eski →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "İletişim ve Hakkında sayfaları artık açık",
      "body": [
        "Sorular, iadeler, gizlilik talepleri ve hata raporları için artık tek bir yer var. Alt kısımda yer alan iletişim sayfasında e-posta ve şirket bilgilerini bulabilirsiniz.",
        "Cevaplarımızın neye dayandığı ve bilerek ne yapmadığımız, hakkında sayfasında yazılıdır."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF raporları Arapça ve Khmer için İngilizce olarak verilmektedir",
      "body": [
        "Eğer hizmeti Arapça veya Khmerce kullanıyorsanız, satın aldığınız PDF İngilizce olarak üretilmektedir. Belgelerimizi düzenleyen araç, bu iki yazı sisteminde paragrafları henüz ayarlayamamaktadır.",
        "Ekran, dilinizde kalır ve isminiz belgede kendi yazı sisteminizde basılır.",
        "Ödeme öncesinde aynı not görünür. Araç bu yazı sistemlerini desteklediğinde, burada bildireceğiz."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Ödemeler henüz açık değil",
      "body": [
        "Bir isim oluşturmak ve sonucu görmek bugün ücretsizdir ve hesap açmanıza gerek yoktur.",
        "Ücretli ürünler henüz satışta değildir. Fiyat sayfasında gösterilen tutarlar, satışlar açıldığında geçerli olacak tutarlardır."
      ]
    }
  }
} satisfies NoticeCopy;
