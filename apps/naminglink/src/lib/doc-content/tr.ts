import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

/** Türkçe — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const TR_DOCS = {
  "about": {
    "eyebrow": "Hakkında",
    "title": "Naming-Link Hakkında",
    "summary": "Korece isimleri seçmenize ve anlamanıza yardımcı oluyoruz. İşte sonuçlarımızı dayandırdığımız noktalar ve bilerek yapmadığımız şeyler.",
    "backLabel": "Ana Sayfa",
    "sections": [
      {
        "title": "Ne yapıyoruz",
        "blocks": [
          {
            "p": "Naming-Link, **Korece isimleri seçmenize ve anlamanıza** yardımcı olur — bir çocuğun isminin arkasındaki hanja, yurtdışında kullanılacak bir Korece isim, kendi isminizin Hangul yazımı ve bir mühür veya basılı rapor gibi hatıralar."
          },
          {
            "p": "Sonuçlarınızı görmek **ücretsizdir ve hesap gerektirmez.** Ücretli öğeler, ekranda zaten gösterilenleri yeniden satmaz: daha fazla aday açar, yazılı analiz ekler veya sonucu saklayabileceğiniz bir şeye dönüştürür."
          }
        ]
      },
      {
        "title": "Her hizmet kimin için",
        "blocks": [
          {
            "p": "Burada iki tür hizmet var: **zaten bir Korece isme sahip olanlar** için bir hizmet ve **bir isme ihtiyaç duyanlar** için bir hizmet. Bunlar sizden farklı şeyler gerektirir, bu nedenle farklı dillerde sunulurlar."
          },
          {
            "ul": [
              "**Kendi dilinizde sunulmaktadır** — kendi isminizi Hangul ile yazmak ve bir Korece ismi oluşturmak. Bunlar Korece ismi olmayan kişiler içindir, bu nedenle geldiğiniz dile göre ilerler.",
              "**Sadece Korece sunulmaktadır** — bir çocuk için isim-hanja bulmak ve bir Korece ismi yurtdışında kullanılacak bir isme dönüştürmek. Her ikisi de çalışmak için **mevcut bir Hangul ismi** gerektirir, bu nedenle ekranlar ve kılavuzları Korece kalır."
            ]
          }
        ]
      },
      {
        "title": "Cevaplarımız neye dayanıyor",
        "blocks": [
          {
            "p": "Hanja, **Kore Yüksek Mahkemesi'nin resmi isim-hanja tablosundan** gelir. Her karakterin isimlerde kullanılmak üzere sabit bir okunuşu vardır ve tablo dışındaki karakterler kaydedilemez. Biz bu listeye ekleme yapmıyoruz veya favori karakterler seçmiyoruz."
          },
          {
            "p": "Saju ve beş element figürleri, **Kore lunisolar takviminden** hesaplanır ve doğum zamanı, doğum yeri için gerçek güneş zamanına göre düzeltilir. Okuma, geleneksel bir referanstır, tahmin değildir."
          },
          {
            "p": "Yazılı açıklamalar AI tarafından üretilir. **şeyler icat etmesini** önlemek için, modele yalnızca sizin girdiniz ve kendi referans verilerimiz verilir ve bunun içinde kalması söylenir. Kılavuzlar bunu ayrıntılı olarak açıklar."
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
              "**Ödeme, daha iyi bir cevap satın almaz.** Reklamla açma ve ödeme ile açma, tam olarak aynı içeriği verir."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Hizmet 23 dilde mevcuttur. Ücretli PDF'ler, Arapça ve Khmer için İngilizce olarak verilir — PDF oluşturucu bu yazı sistemlerini desteklemez — ve bunu ödemeden önce ekranda belirtiriz."
          }
        ]
      },
      {
        "title": "İletişim",
        "blocks": [
          {
            "p": "Şirket bilgileri ve bize nasıl ulaşacağınız [iletişim sayfasında](/contact) yer almaktadır, iade, gizlilik talepleri ve hata raporları dahil."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Naming-Link nasıl çalışır",
    "title": "İsminizi neye dayandırıyoruz",
    "summary": "Bir Korece soyadı nasıl seçiyoruz, bir isim önerirken neyi kontrol ediyoruz ve isminizi Hangul ile nasıl yazıyoruz — bilerek çıkardığımız kısımlar ile.",
    "backLabel": "Kılavuz",
    "sections": [
      {
        "title": "",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal}",
                "label": "isim-hanja karakterleri"
              },
              {
                "value": "{syllableCount}",
                "label": "kapsanan Hangul heceleri"
              },
              {
                "value": "{effectiveDate}",
                "label": "tablo geçerlilik tarihi"
              },
              {
                "value": "{avoidTotal}",
                "label": "geleneksel olarak kaçınılan karakterler"
              }
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Aşağıdaki kılavuzlar, kendi dilinizde sunulan hizmetleri kapsar. Naming-Link ayrıca **zaten bir Korece isme sahip olanlar** için iki hizmet sunar — bir çocuk için isim-hanja bulmak ve bir Korece ismi yurtdışında kullanılacak bir isme dönüştürmek. Bunlar mevcut bir Hangul ismi gerektirir, bu nedenle her iki hizmet ve kılavuzları Korece'dir."
          },
          {
            "p": "[Hakkında](/about) hangi hizmetin kime ait olduğunu açıklar."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Nasıl çalışır",
    "title": "İsminizi Hangul ile nasıl yazıyoruz",
    "summary": "Yabancı bir ismi Hangul ile yazarken sesleri nasıl seçiyoruz ve neden hanja eklemediğimizi.",
    "backLabel": "Kılavuz",
    "sections": [
      {
        "title": "Anlamı değil, sesi taşırız",
        "blocks": [
          {
            "p": "Bu hizmet, **isminizi** Hangul ile yazar. Size bir Korece isim vermez. Michael becomes 마이클 — aynı isim, Korelilerin okuyup söyleyebileceği şekilde yazılmıştır. Bunu, benzer bir anlam taşıyan bir Korece ismi ile değiştirmiyoruz."
          },
          {
            "p": "Eğer istediğiniz bir Korece ismi ise, **bu farklı bir hizmettir.** Biri isminizi korur ve sadece yazı tipini değiştirir; diğeri yeni bir isim önerir."
          }
        ]
      },
      {
        "title": "Korece'de olmayan sesler",
        "blocks": [
          {
            "p": "Her dilin Korece'nin eksik olduğu sesleri vardır — f, v, z, th ve Korece'nin yapmadığı sesli harf ayrımları. Bunlar için, isminizi sesli olarak okuduğunda **bir Korece konuşucunun gerçekten söylediği** şeyi yazarız, orijinal fonetiği sembol sembol transkribe etmek yerine. Amaç, kullanılacak yazım olmaktır, en teknik olarak sadık olan değil."
          },
          {
            "p": "Aynı yazım, bir ismin nereden geldiğine bağlı olarak farklılık gösterebilir, bu nedenle dilinizi ve ülkenizi soruyoruz ve o telaffuzdan çalışıyoruz."
          }
        ]
      },
      {
        "title": "Birden fazla yazım, yan yana",
        "blocks": [
          {
            "p": "Tek bir doğru cevap yoktur. Orijinal sese en yakın yazım, Kore'de en yaygın olarak kullanılan yazım ve yazması en kolay olan yazım genellikle üç farklı şeydir. Bu nedenle, bunları bir arada gösteriyoruz ve ayıran şeyleri söylüyoruz."
          },
          {
            "p": "Eğer hiçbiri doğru hissettirmiyorsa, istediğiniz ses hakkında bir ipucu ekleyebilir ve tekrar çalıştırabilirsiniz — örneğin, belirli bir hecenin farklı yazılması gerektiğini."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Burada hanja yok",
        "blocks": [
          {
            "p": "Bir transliterasyona hanja eklemiyoruz. Hanja anlam taşır ve bu akış sesle ilgilidir. Karakterleri sadece sese eşleştirmek, istemediğiniz bir anlamla karşılaşmanıza neden olabilir."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Nasıl çalışır",
    "title": "Korece bir isim nasıl oluşturuyoruz",
    "summary": "Mevcut soyadlarından seçim yapıyoruz, ismin kolayca söylenip yazılmasını değerlendiriyoruz ve ismin ne için olduğunu soruyoruz.",
    "backLabel": "Kılavuz",
    "sections": [
      {
        "title": "Aile adıyla başlıyoruz",
        "blocks": [
          {
            "p": "Kore'de aile adı önce gelir ve verilen isimler gibi serbestçe icat edilmez — onu miras alırsınız. Bu nedenle, yalnızca Korelilerin gerçekten sahip olduğu soyadlarını öneriyoruz. Varsayılan havuzumuz **en yaygın 20 soyadı**dır ve bu soyadları toplamda nüfusun yaklaşık %80'ini kapsar."
          },
          {
            "p": "Eğer kendi soyadınız bir gerçek Kore soyadıyla ses uyumu sağlıyorsa — Wang ile 왕, Ye ile 예 — onu ilk sıraya koyuyoruz. Orijinal isminizle bir bağlantı kurmak, rastgele seçilen bir soyadından daha değerlidir."
          },
          {
            "p": "Bir soyadı kendiniz seçebilir veya bize öneri yapmamızı sağlayabilirsiniz. Her iki durumda da **var olan bir soyadı** olacaktır."
          }
        ]
      },
      {
        "title": "Söylemesi kolay, yazması kolay",
        "blocks": [
          {
            "p": "Bu, Kore'de insanların sizi gerçekten çağıracağı bir isimdir, bu yüzden ilk kontrol ettiğimiz şey, bir Korelinin ismi bir kez duyup yazıp yazamayacağıdır. Her seferinde hecelemek zorunda kalacağınız bir isim, sizin taşıdığınız bir yük, bizim değil."
          },
          {
            "p": "Anlam da önemlidir. Korece verilen isimler genellikle bir anlam taşır, bu yüzden ismin ne okunduğunu ve neden seçtiğimizi size bildiriyoruz — sadece ismin kendisini değil."
          }
        ]
      },
      {
        "title": "İsmin ne için olduğunu soruyoruz",
        "blocks": [
          {
            "p": "Üniversite belgeleri için bir isim, arkadaşların bir odada bağıracağı bir isimle aynı değildir veya çevrimiçi kullanacağınız bir takma adla. Onu nasıl kullanmayı planladığınızı soruyoruz ve bunu dikkate alıyoruz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu bir transliterasyon değil",
        "blocks": [
          {
            "p": "Burada **yeni bir Kore ismi** öneriyoruz. Mevcut isminizin Hangul ile yazılmasını istiyorsanız — Michael olarak 마이클 — [Hangul yazım kılavuzuna](/guide/how-hangul-transliteration) bakın."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Duyurular",
    "title": "Duyurular",
    "summary": "Hizmeti kullanımınızı etkileyen değişiklikleri duyurduğumuz yer.",
    "backLabel": "Ana Sayfa",
    "sections": []
  },
  "contact": {
    "eyebrow": "İletişim",
    "title": "Bize ulaşın",
    "summary": "Soru, iade, gizlilik talepleri ve hata raporları için nasıl ulaşabileceğinizi, şirket bilgilerimizle birlikte.",
    "backLabel": "Ana Sayfa",
    "sections": [
      {
        "title": "Bize e-posta gönderin",
        "blocks": [
          {
            "p": "**{email}** adresine yazın. İki iş günü içinde yanıt veriyoruz. Bir siparişle ilgili herhangi bir şey — ödeme, iade, almadığınız bir dosya — lütfen **sipariş numaranızı veya ödediğiniz e-posta adresini** ekleyin."
          },
          {
            "p": "Telefonla sorgular: {customerCenter} (Kore iş saatleri)."
          }
        ]
      },
      {
        "title": "Buraya ne göndermelisiniz",
        "blocks": [
          {
            "ul": [
              "**Ödemeler ve iadeler** — eğer bir belge hiç üretilmediyse veya tahsil edilen miktar siparişinizden farklıysa, tam olarak iade ediyoruz. [İade politikası](/refund-policy) için bakın.",
              "**Gizlilik** — verilerinize erişim, düzeltme veya silme talepleri. [Gizlilik politikası](/privacy) için bakın.",
              "**Düzeltmeler** — eğer bir hanja anlamı, okunuşu veya hesaplaması yanlış görünüyorsa, bize bildirin. Hangi ekranda ve ne girdiğinizi belirtmek çok yardımcı olur.",
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
              "**İş kayıt no.** — {businessNumber}",
              "**Siparişle satış no.** — {mailOrderNumber}",
              "**Adres** — {address}",
              "**Müşteri hizmetleri** — {customerCenter}",
              "**E-posta** — {email}",
              "**Gizlilik sorumlusı** — {privacyOfficer}",
              "**Barındırma sağlayıcısı** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Mesajınızda bir isim veya doğum tarihi eklemeniz gerekmez. Ücretsiz sonuçlar asla sunucularımızda saklanmaz, bu nedenle onları tekrar bulamayız — bir sipariş numarası yeterlidir."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Standartlarımız",
    "title": "Kullanmıyoruz",
    "summary": "Toplam şans veya sayısal puanlar atamıyoruz, ayrıca darbe sayıları kullanmıyoruz. Beş element yalnızca ek bir eksen olarak kullanılır. İşte nedenleri.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Toplam şans veya sayısal puan atamama nedenleri",
        "blocks": [
          {
            "p": "İsimlere toplam şans veya sayısal puan atayan yöntemler vardır. Naming-Link bu sayıları sağlamaz. Nedenleri dördü."
          },
          {
            "p": "**Öncelikle, sadece bir standart yoktur.** Şans hesaplama yöntemleri okula göre değişir ve aynı isim bir standart tarafından olumlu, diğer bir standart tarafından olumsuz değerlendirilebilir. Hangisinin doğru olduğunu belirlemek için bir temelimiz yok. Birini doğruymuş gibi sunmak dürüst değildir."
          },
          {
            "p": "**İkincisi, bu hesaplamalar darbe sayımlarına dayanır.** Ancak, Yüksek Mahkeme verileri hiç darbe sayısı içermez. Dahası, darbe sayıları, karakterlerin normal veya basitleştirilmiş olarak sayılıp sayılmadığına ve radikallerin nasıl sayıldığına bağlı olarak değişebilir. Temel sayılar kesin olarak belirlenmediğinden, bunların üzerine inşa edilen puanlar kesin olamaz."
          },
          {
            "p": "**Üçüncüsü, sayılar gerçekte olduğundan daha sağlam görünür.** \"87 puan\" dediğinde, bu ölçülen bir değer gibi okunur, geleneksel bir yorumdan ziyade. Bu isimler o sayıdan baskı hissedebilir, gerçekten önemli olanı (Çağırmak hoş mu? Anlamı uyuyor mu? İstenilen dilekleri içeriyor mu?) bir kenara iterek."
          },
          {
            "p": "**Dördüncüsü, doğrulama yolu yoktur.** Bir isim ile bir kişinin hayatı arasındaki ilişki doğrulanamaz. Doğru veya yanlış olduğu söylenemeyen bir şeyi bir puana dönüştürmek, yanlış olamayacak bir sayıya yol açar, ancak bu sayı doğrulanamaz."
          },
          {
            "p": "Sadece **kanıtlanabilir olanları** kullanıyoruz. Yüksek Mahkeme'nin resmi isim-hanja tablosu, her karakter için belirlenen okumalar ve tabloda listelenen anlamlar. Bunun yerine, bu adayın neden seçildiği ve belirli karakterlerin neden dışlandığına dair nedenler sunuyoruz, **puanlar yerine nedenler** gösteriyoruz."
          }
        ]
      },
      {
        "title": "Darbe sayımlarını kullanmıyoruz",
        "blocks": [
          {
            "p": "Yüksek Mahkeme tarafından sağlanan resmi isim-hanja verileri darbe sayımlarını içermez. Aldığımız {characterTotal} karakter arasında, **tek bir karakter bile darbe sayısına sahip değildir.**"
          },
          {
            "p": "Darbe sayımlarını kullanmak için, başka bir yerden sayıları elde etmemiz gerekecek, ancak bu sayıların nereden geldiğini ve nasıl sayıldığını netleştiremiyorsak, bu, isimleri temelsiz sayılara dayanarak değerlendirmek anlamına gelir. Kanıtlanamayan değerlere dayanarak isimleri değerlendirmemeye karar verdik."
          }
        ]
      },
      {
        "title": "Beş elementi sadece referans olarak kullanıyoruz",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Bir daire içinde yerleştirilen beş element: üretim komşular arasında gerçekleşir, kontrol birini atlar",
              "wood": "ağaç",
              "fire": "ateş",
              "earth": "toprak",
              "metal": "metal",
              "water": "su",
              "saeng": "Üretim — her biri komşusunu doğurur",
              "geuk": "Kontrol — her biri atladığı kişiyi kısıtlar"
            },
            "caption": "Beş element arasındaki ilişkiler. Daire boyunca hareket etmek karşılıklı üretimi (相生) temsil ederken, birini atlamak ve baskı yapmak karşılıklı kısıtlamayı (相剋) temsil eder. Bu ilişkiyi yalnızca adayları karşılaştırmak için ek bir eksen olarak kullanıyoruz."
          },
          {
            "p": "Eğer doğum ayınızı girdiyseniz, o ay temel alınarak beş elementin basitleştirilmiş bir referansını kullanıyoruz, bu da adayları karşılaştırmak için ek bir eksen olarak işlev görüyor. Ancak, bu kesin bir saju analizi değildir ve **isimlerin bir kişinin kaderini veya karakterini belirlediğini iddia etmiyoruz.**"
          },
          {
            "p": "Son seçimde öncelik verdiğimiz şeyler sesler, anlamların kombinasyonları, ailenin iletmek istediği değerler ve gerçekten kaydedilip kaydedilemeyeceğidir. Eğer doğum ayınızı girmediyseniz, beş element referansını analizden tamamen hariç tutuyoruz — bilinmeyen bilgiler hakkında keyfi varsayımlarda bulunmuyoruz."
          },
          {
            "p": "Eğer kesin bir saju tabanlı analiz istiyorsanız, bunu ayrı bir detaylı raporda ele alıyoruz. Beş elementleri önceliklendirmememizin nedeni, eksik doğum tarihi ve saatine dayanan beş elementlerden türetilen yargıları kesinmiş gibi sunmak istemememizdir."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Ücretli Ürünler",
    "title": "Ücretli ürünlerde neler var?",
    "summary": "Ücretsiz olarak ne kadarının görünür olduğunu ve her ürün için ödemenin getirdiği ek özellikleri netleştiriyoruz. Fiyatlar, gerçek ürün ayarlarından alınır.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Ücretsiz olarak ne görünür?",
        "blocks": [
          {
            "p": "Bir isim oluşturmak ve sonuçları görüntülemek **ücretsizdir.** Üyelik kaydı gerektirmez. Ekranda hanja'nın eşleşen anlamlarını, Korece isimler oluşturmayı, küresel isim dönüşümünü ve Hangul telaffuz notasyonunu görebilir, önerilen sonuçları ve bunların gerekçelerini izleyebilirsiniz."
          },
          {
            "p": "Ücretli ürünler **zaten ekranda gösterilenleri yeniden satmaz.** Daha fazla aday açar, daha fazla açıklama ekler veya saklanabilir veya iletilebilir bir format oluşturur."
          }
        ]
      },
      {
        "title": "Tüm adayların tam açıklaması — {priceUnlock}",
        "blocks": [
          {
            "p": "Önerilen sonuçlar, adayları birer birer açacak şekilde yapılandırılmıştır. Reklamları görüntülerken, bir tanesi açılırken, bu ürün **tüm kalan adayları bir anda açar.**"
          },
          {
            "p": "Eğer acele etmiyorsanız, satın almanıza gerek yok. **Reklamlar aracılığıyla açılan sonuçlar ile ödemeden elde edilenler tamamen aynıdır** — sadece beklemek meselesidir ve ödeme yapmak daha iyi adaylar sağlamaz."
          }
        ]
      },
      {
        "title": "Hanja Detayları — Üç Aşama",
        "blocks": [
          {
            "p": "Bir Hangul ismine eklemek için hanja seçme sürecinde üç detaylı ürün bulunmaktadır."
          },
          {
            "ul": [
              "**Maksimum 5 hanja adayı detaylı** — {priceFiveDetail}. Ekranda beş adaya kadar açıklamaları genişletebilirsiniz. PDF yoktur.",
              "**Maksimum 10 hanja adayı genişletilmiş detaylı PDF** — {priceTenDetail}. Aday sayısı on'a çıkar ve bir PDF belgesi eklenir.",
              "**Maksimum 10 hanja adayı saju ve beş element kapsamlı raporu** — {priceTenSaju}. Yukarıdakilere ek olarak, doğum tarihinden türetilen saju tablosunu ve beş elementin güçlerini içerir, belirli bir hanjanın o isme neden uygun olduğunu beş element perspektifinden inceler."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja kendisi kamuya açık bilgilerdir",
        "blocks": [
          {
            "p": "Kullanılabilir hanja ve anlamları, Yüksek Mahkeme tarafından belirlenen resmi isim-hanja tablosundan gelmektedir ve hepsi hizmetin kılavuz belgelerinde kamuya açıktır. Ücretli ürünlerin sattığı şey hanja bilgisi değil, **isime göre seçme ve açıklama eylemidir.**"
          }
        ]
      },
      {
        "title": "Küresel Kullanıcılar için PDF'ler",
        "blocks": [
          {
            "p": "Yabancı isimleri Korece isimlere dönüştürmek veya isimleri Hangul ile yazmak için mevcut belgeler. Fiyatlar, ödeme ekranında görüntülenen tutarları takip eder."
          },
          {
            "ul": [
              "**Korece İsim Premium Raporu** — 3 sayfa. Kaligrafi kapağı, ismin anlamı ve neden seçildiği, saju ve beş element yorumunu içerir.",
              "**Hangul İsim Sanatı** — 2 sayfa. Kaligrafi kapağı ve telaffuz kılavuzu içerir. İsimlerin Hangul ile nasıl yazılacağını ve nasıl telaffuz edileceğini içerir."
            ]
          }
        ]
      },
      {
        "title": "İsim Mührü",
        "blocks": [
          {
            "p": "Ekranda oluşturulan ismi fiziksel bir mühre kazıyoruz ve size gönderiyoruz. Fiyatlar modele göre değişir — yuvarlak mühür {priceStampRound}, kare mühür {priceStampSquare}, abanoz mühür {priceStampEbony}. Uluslararası kargo da mevcuttur."
          },
          {
            "p": "**Buradan itibaren, ürünler kargo içerir.** Önceki ürünlerden farklı olarak, üretim ve kargo zaman alır ve bir teslimat adresi gereklidir. Kargo bilgileri yalnızca sipariş işleme için kullanılır ve yasal saklama için, işlem tamamlandıktan sonra, politika gereğince belirtilen süre sonunda imha edilecektir."
          }
        ]
      },
      {
        "title": "Satın Almadan Önce Bilinmesi Gerekenler",
        "blocks": [
          {
            "p": "**Dijital ürünler ödeme yapıldığında hemen sağlanır.** İndirme başlamadan önce istediğiniz zaman iptal edebilir ve tam bir geri ödeme alabilirsiniz, ancak indirme tamamlandıktan sonra, basit bir fikir değişikliği nedeniyle geri çekilme kısıtlanır (Elektronik Ticaret Kanunu'nun 17. Maddesi, 2. Fıkrası). Bu koşul, ödeme ekranında ayrı olarak kabul edilir."
          },
          {
            "p": "**Sonuçların içeriği ile ilgili şikayetler geri ödeme nedeni değildir.** Ancak, belge oluşturulmadıysa, dosya açılamıyorsa veya ödeme tutarı siparişle farklıysa, yeniden basım veya tam geri ödeme olarak işleme alınacaktır."
          },
          {
            "p": "Detaylı koşullar [İade Politikası](/refund-policy) ve [Fiyatlandırma Kılavuzu](/pricing) belgelerinde belirtilmiştir. Bu metin, nelerin dahil olduğunu rehberlik etmekte olup, yasal koşullar bu iki belgede önceliklidir."
          }
        ]
      }
    ]
  }
} satisfies Record<GlobalDocKey, DocPage>;

export const TR_NOTICES = {
  "kindLabels": {
    "service": "Hizmet",
    "product": "Ürünler",
    "policy": "Politika",
    "support": "Destek"
  },
  "intro": "Kullanım şartlarınızda yapılan değişiklikler — fiyatlar, politikalar — yürürlüğe girmeden önce burada yayınlanır. İçsel iyileştirmeler listelenmez: burada görünenler bilmeniz gerekenlerdir.",
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
  "items": {
    "2026-08-02-contact": {
      "title": "İletişim ve Hakkında sayfaları artık açık",
      "body": [
        "Sorular, iadeler, gizlilik talepleri ve hata raporları artık tek bir yere yönlendiriliyor. Alt kısımda yer alan iletişim sayfası, e-posta ve şirket bilgilerini listeler.",
        "Cevaplarımızın dayandığı bilgiler ve kasıtlı olarak yapmadığımız şeyler, hakkında sayfasında yazılıdır."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF raporları Arapça ve Kmerce için İngilizce olarak verilmektedir",
      "body": [
        "Eğer hizmeti Arapça veya Kmerce kullanıyorsanız, satın aldığınız PDF İngilizce olarak üretilir. Belgelerimizi düzenleyen araç, henüz bu iki yazıda paragrafları ayarlayamıyor.",
        "Ekran dilinizde kalır ve adınız belgenin içinde kendi yazınızla basılır.",
        "Aynı not, ödeme öncesinde görünür. Araç bu yazıları desteklediğinde, burada belirteceğiz."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Ödemeler henüz açık değil",
      "body": [
        "Bir isim oluşturmak ve sonucu okumak bugün ücretsizdir ve hesap açmanıza gerek yoktur.",
        "Ücretli ürünler henüz satışta değil. Fiyatlandırma sayfasında gösterilen tutarlar, satışlar açıldığında geçerli olacak olanlardır."
      ]
    }
  }
} satisfies NoticeCopy;
