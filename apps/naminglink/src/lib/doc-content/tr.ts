import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

/** Türkçe — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const TR_DOCS = {
  "about": {
    "eyebrow": "Hakkında",
    "title": "Naming-Link Hakkında",
    "summary": "Size Korece isimleri seçme ve anlama konusunda yardımcı oluyoruz. İşte sonuçlarımızı dayandırdığımız noktalar ve bilerek yapmadığımız şeyler.",
    "backLabel": "Ana Sayfa",
    "sections": [
      {
        "title": "Ne yapıyoruz",
        "blocks": [
          {
            "p": "Naming-Link, size **Korece isimleri seçme ve anlama** konusunda yardımcı olur — bir çocuğun isminin arkasındaki hanja, yurtdışında kullanılacak bir Korece isim, kendi isminizin Hangul yazımı ve mühür veya basılı rapor gibi hatıralar."
          },
          {
            "p": "Sonuçlarınızı görmek **ücretsizdir ve hesap gerektirmez.** Ücretli öğeler, ekranda zaten gösterilenleri yeniden satmaz: daha fazla aday açar, yazılı analiz ekler veya sonucu saklayabileceğiniz bir şeye dönüştürür."
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
            "p": "Yazılı açıklamalar AI tarafından üretilir. **Şeyler icat etmesini** önlemek için, modele yalnızca sizin girdiniz ve kendi referans verilerimiz verilir ve bunun içinde kalması söylenir. Kılavuzlar bunu ayrıntılı olarak açıklar."
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
              "**Ödeme, daha iyi bir cevap satın almaz.** Reklamla açma ve ödeme ile açma tam olarak aynı içeriği verir."
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
            "p": "Şirket bilgileri ve bize ulaşma yolları [iletişim sayfasında](/contact) bulunmaktadır; iade, gizlilik talepleri ve hata raporları dahil."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Naming-Link nasıl çalışır",
    "title": "İsminizi neye dayandırıyoruz",
    "summary": "Korece bir soyadı nasıl seçiyoruz, belirli bir isim önermeden önce neyi kontrol ediyoruz ve isminizi Hangul'da nasıl yazıyoruz — bilerek bıraktığımız kısımlar ile.",
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
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Nasıl çalışır",
    "title": "İsminizi Hangul'da nasıl yazıyoruz",
    "summary": "Yabancı bir ismi Hangul'da yazarken sesleri nasıl seçiyoruz ve neden hanja eklemiyoruz.",
    "backLabel": "Kılavuz",
    "sections": [
      {
        "title": "Anlamı değil, sesi taşırız",
        "blocks": [
          {
            "p": "Bu hizmet, **isminizi** Hangul'da yazar. Size bir Korece isim vermez. Michael becomes 마이클 — aynı isim, Korelilerin okuyup söyleyebilmesi için yazılmıştır. Benzer bir anlam taşıyan bir Korece isimle değiştirmiyoruz."
          },
          {
            "p": "Eğer istediğiniz bir Kore adıysa, **bu farklı bir hizmettir**. Birisi adınızı korur ve sadece yazı tipini değiştirir; diğeri ise yeni bir ad önerir."
          }
        ]
      },
      {
        "title": "Korece sesler yok",
        "blocks": [
          {
            "p": "Her dilin Korece'nin eksik olduğu sesler vardır — f, v, z, th ve Korece'nin yapmadığı sesli harf ayrımları. Bu sesler için, adınızı yüksek sesle okurken **bir Korece konuşanın gerçekten söylediği** şekilde yazarız, orijinal fonetiği harf harf yazmak yerine. Amaç, kullanılacak yazım şeklidir, en teknik olarak sadık olan değil."
          },
          {
            "p": "Aynı yazım, bir adın nereden geldiğine bağlı olarak farklılık gösterebilir, bu yüzden dilinizi ve ülkenizi soruyoruz ve o telaffuza göre çalışıyoruz."
          }
        ]
      },
      {
        "title": "Birden fazla yazım, yan yana",
        "blocks": [
          {
            "p": "Tek bir doğru cevap yoktur. Orijinal sese en yakın yazım, Kore'de en yaygın olarak kullanılan yazım ve yazması en kolay olan yazım genellikle üç farklı şeydir. Bu yüzden onları bir arada gösteriyoruz ve neyin ayırdığını söylüyoruz."
          },
          {
            "p": "Eğer hiçbiri doğru hissettirmiyorsa, istediğiniz ses hakkında bir ipucu ekleyebilir ve tekrar çalıştırabilirsiniz — örneğin, belirli bir hecenin farklı yazılması gerektiğini belirtebilirsiniz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Burada hanja yok",
        "blocks": [
          {
            "p": "Bir transliterasyona hanja eklemiyoruz. Hanja anlam taşır ve bu akış sesle ilgilidir. Karakterleri sadece sese eşleştirmek, istemediğiniz bir anlamla sonuçlanabilir."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Nasıl çalışır",
    "title": "Korece bir adı nasıl oluşturuyoruz",
    "summary": "Mevcut soyadlarından seçim yapıyoruz, adın ne kadar kolay söylendiğini ve yazıldığını değerlendiriyoruz ve adın ne için olduğunu soruyoruz.",
    "backLabel": "Kılavuz",
    "sections": [
      {
        "title": "Aile adıyla başlıyoruz",
        "blocks": [
          {
            "p": "Kore'de aile adı önce gelir ve verilen adlar gibi serbestçe icat edilmez — onu miras alırsınız. Bu yüzden yalnızca Koreli insanların gerçekten sahip olduğu soyadlarını öneriyoruz. Varsayılan havuzumuz **en yaygın 20 soyadı**dır ve bunlar toplamda nüfusun yaklaşık %80'ini kapsar."
          },
          {
            "p": "Eğer kendi soyadınız bir gerçek Kore soyadıyla ses uyumu sağlıyorsa — Wang ile 왕, Ye ile 예 — onu ilk sıraya koyarız. Orijinal adınıza bir bağ tutmak, rastgele seçilen bir soyadından daha değerlidir."
          },
          {
            "p": "Bir soyadı kendiniz seçebilir veya bizim önerimizi kabul edebilirsiniz. Her iki durumda da, **var olan bir soyadı olacaktır**."
          }
        ]
      },
      {
        "title": "Söylemesi kolay, yazması kolay",
        "blocks": [
          {
            "p": "Bu, Kore'de insanların sizi gerçekten çağıracağı bir isimdir, bu yüzden ilk kontrol ettiğimiz şey, bir Korelinin bunu bir kez duyup yazıp yazamayacağıdır. Her seferinde hecelemek gereken bir isim, sizin taşıdığınız bir yük, bizim değil."
          },
          {
            "p": "Anlam da önemlidir. Korece verilen adlar genellikle bir anlam taşır, bu yüzden adın ne okunduğunu ve neden seçtiğimizi size söyleriz — sadece adın kendisi değil."
          }
        ]
      },
      {
        "title": "Adın ne için olduğunu soruyoruz",
        "blocks": [
          {
            "p": "Üniversite belgeleri için bir ad, arkadaşların bir odanın içinde bağıracağı bir adla veya çevrimiçi kullanacağınız bir takma adla aynı değildir. Ne amaçla kullanmayı planladığınızı soruyoruz ve bunu dikkate alıyoruz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu bir transliterasyon değil",
        "blocks": [
          {
            "p": "Burada **yeni bir Kore adı** öneriyoruz. Mevcut adınızı Hangul ile yazdırmak istiyorsanız — Michael olarak 마이클 — [Hangul yazım kılavuzuna](/guide/how-hangul-transliteration) bakın."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Duyurular",
    "title": "Duyurular",
    "summary": "Hizmeti kullanma şeklinizi etkileyen değişiklikleri duyurduğumuz yer.",
    "backLabel": "Ana Sayfa",
    "sections": []
  },
  "contact": {
    "eyebrow": "İletişim",
    "title": "Bize ulaşın",
    "summary": "Sorular, iadeler, gizlilik talepleri ve hata raporları için nasıl ulaşabileceğinizi, şirket bilgilerimizle birlikte.",
    "backLabel": "Ana Sayfa",
    "sections": [
      {
        "title": "Bize e-posta gönderin",
        "blocks": [
          {
            "p": "**{email}** adresine yazın. İki iş günü içinde yanıtlıyoruz. Bir siparişle ilgili herhangi bir şey için — ödeme, iade, almadığınız bir dosya — lütfen **sipariş numaranızı veya ödediğiniz e-posta adresini** ekleyin."
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
              "**Başka bir şey** — ortaklıklar ve basın aynı adrese gider."
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
            "p": "Mesajınızda bir isim veya doğum tarihi eklemenize gerek yoktur. Ücretsiz sonuçlar sunucularımızda asla saklanmaz, bu nedenle onları tekrar arayamıyoruz — bir sipariş numarası yeterlidir."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Standartlarımız",
    "title": "Kullanmadığımız Şeyler",
    "summary": "Toplam şans veya sayısal puanlar atamıyoruz, ayrıca darbe sayıları da kullanmıyoruz. Beş element yalnızca tamamlayıcı bir eksen olarak kullanılır. İşte nedenleri.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Toplam şans veya sayısal puanlar atamama nedenleri",
        "blocks": [
          {
            "p": "İsimlere puan vermek için toplam şans veya sayısal puanlar atayan yöntemler vardır. Naming-Link bu sayıları sağlamaz. Nedenleri dört katmanlıdır."
          },
          {
            "p": "**Öncelikle, tek bir standart yoktur.** Şans hesaplama yöntemleri okula göre değişir ve aynı isim bir standart tarafından olumlu, diğer bir standart tarafından olumsuz değerlendirilebilir. Hangisinin doğru olduğunu belirleyecek bir temelimiz yok. Birini doğruymuş gibi sunmak dürüst değildir."
          },
          {
            "p": "**İkincisi, bu hesaplamalar darbe sayılarına dayanır.** Ancak, Yüksek Mahkeme verileri darbe sayılarını hiç içermez. Dahası, darbe sayıları, karakterlerin normal veya basitleştirilmiş olarak sayılıp sayılmadığına ve köklerin nasıl sayıldığına bağlı olarak değişebilir. Temel sayılar kesin olarak belirlenmediğinden, bunların üzerine inşa edilen puanlar da kesin olamaz."
          },
          {
            "p": "**Üçüncüsü, sayılar gerçeklikten daha sağlam görünür.** \"87 puan\" dediğinde, bu ölçülen bir değer gibi okunur, geleneksel bir yorumdan ziyade. Bu isimlendirme, o sayıdan dolayı baskı hissedebilir, gerçekten önemli olanı (Çağırması hoş mu? Anlamı uyuyor mu? İstenilen dilekleri içeriyor mu?) bir kenara itebilir."
          },
          {
            "p": "**Dördüncüsü, doğrulama imkanı yoktur.** Bir isim ile bir kişinin hayatı arasındaki ilişki doğrulanamaz. Doğru veya yanlış olduğu söylenemeyen bir şeyi bir puana dönüştürmek, yanlış olamayacak bir sayı ile sonuçlanır, ancak doğrulanamaz."
          },
          {
            "p": "Sadece **kanıtlanabilir olanı** kullanıyoruz. Yüksek Mahkeme resmi isim-hanja tablosu, her karakter için belirlenen okumalar ve tabloda listelenen anlamlar. Bunun yerine, bu adayın neden seçildiği ve neden belirli karakterlerin hariç tutulduğuna dair nedenler sağlıyoruz, **puanlar yerine nedenler** gösteriyoruz."
          }
        ]
      },
      {
        "title": "Darbe sayılarını kullanmıyoruz",
        "blocks": [
          {
            "p": "Yüksek Mahkeme tarafından sağlanan resmi isim-hanja verileri darbe sayılarını içermez. Aldığımız {characterTotal} karakter arasında, **hiçbir karakterin darbe sayısı yoktur.**"
          },
          {
            "p": "Darbe sayılarını kullanmak için, başka bir yerden sayılar elde etmemiz gerekir, ancak bu sayıların nereden geldiğini ve hangi kriterlerin kullanıldığını netleştiremiyorsak, bu, isimleri temelsiz sayılara göre değerlendirmek anlamına gelir. Temelsiz değerlere dayanarak isimleri değerlendirmemeye karar verdik."
          }
        ]
      },
      {
        "title": "Beş elementi yalnızca bir referans olarak kullanıyoruz",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Beş element bir daire içinde yerleştirilmiştir: nesil komşular arasında akar, kontrol bir atlar",
              "wood": "ağaç",
              "fire": "ateş",
              "earth": "toprak",
              "metal": "metal",
              "water": "su",
              "saeng": "Üretim — her biri komşusunu doğurur",
              "geuk": "Kontrol — her biri atladığına engel olur"
            },
            "caption": "Beş element arasındaki ilişkiler. Çember boyunca hareket etmek karşılıklı üretimi (相生) temsil ederken, birini atlayıp baskı yapmak karşılıklı kısıtlamayı (相剋) temsil eder. Bu ilişkiyi yalnızca adayları karşılaştırmak için ek bir eksen olarak kullanıyoruz."
          },
          {
            "p": "Eğer doğum ayınızı girdiyseniz, o aya dayanan beş elementin basitleştirilmiş referansını adayları karşılaştırmak için ek bir eksen olarak kullanıyoruz. Ancak bu, kesin bir saju analizi değildir ve **isimlerin bir kişinin kaderini veya karakterini belirlediğini iddia etmiyoruz.**"
          },
          {
            "p": "Son seçimde öncelik verdiğimiz şeyler sesler, anlam kombinasyonları, ailenin iletmek istediği değerler ve kaydedilebilir olup olmadığıdır. Eğer doğum ayınızı girmediyseniz, analizden beş element referansını tamamen hariç tutuyoruz — bilinmeyen bilgiler hakkında keyfi varsayımlar yapmıyoruz."
          },
          {
            "p": "Eğer kesin bir saju tabanlı analiz istiyorsanız, bunu ayrı bir detaylı raporda ele alıyoruz. Beş elementleri ücretsiz hanja eşleştirmede öncelik vermememizin nedeni, eksik bir doğum tarihi ve saatine dayanan beş elementlerden elde edilen yargıları kesinmiş gibi sunmak istemememizdir."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Ücretli Ürünler",
    "title": "Ücretli ürünlerde neler var?",
    "summary": "Ücretsiz olarak ne kadarının görünür olduğunu ve her ürün için ödemeyle birlikte gelen ek özellikleri netleştiriyoruz. Fiyatlar, gerçek ürün ayarlarından alınmaktadır.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Ücretsiz olarak ne görünür?",
        "blocks": [
          {
            "p": "Bir isim oluşturmak ve sonuçları görüntülemek **ücretsizdir**. Üyelik kaydı gerekmemektedir. Hanja'nın eşleşen anlamlarını, Korece isimler oluşturmayı, küresel isim dönüşümünü ve Hangul telaffuz notasyonunu görebilir, ekran üzerinde önerilen sonuçlar ve bunların gerekçeleriyle birlikte inceleyebilirsiniz."
          },
          {
            "p": "Ücretli ürünler **ekranda daha önce gösterilenleri yeniden satmaz.** Daha fazla aday açar, daha fazla açıklama ekler veya saklanabilir veya iletilebilir bir format oluşturur."
          }
        ]
      },
      {
        "title": "Tüm adayların tam açıklaması — {priceUnlock}",
        "blocks": [
          {
            "p": "Önerilen sonuçlar, adayları birer birer açacak şekilde yapılandırılmıştır. Reklamları görüntülerken, bir seferde bir tane açılırken, bu ürün **tüm kalan adayları bir anda açar.**"
          },
          {
            "p": "Eğer acele etmiyorsanız, satın almanıza gerek yoktur. **Reklamlar aracılığıyla açılan sonuçlar ile ödemeden elde edilen sonuçlar tamamen aynıdır** — sadece beklemek meselesidir ve ödeme yapmak daha iyi adaylar sağlamaz."
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
              "**Maksimum 10 hanja adayı saju ve beş element kapsamlı raporu** — {priceTenSaju}. Yukarıdakilere ek olarak, doğum tarihinden türetilen saju tablosunu ve beş elementin güçlerini içerir, belirli bir hanjanın o isim için neden uygun olduğunu beş element perspektifinden inceler."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja kendisi kamuya açık bilgilerdir",
        "blocks": [
          {
            "p": "Kullanılabilir hanja ve anlamları, Kore Yüksek Mahkemesi tarafından belirlenen resmi isim-hanja tablosundan gelmektedir ve hepsi hizmetin kılavuz belgelerinde kamuya açıktır. Ücretli ürünlerin sattığı şey hanja bilgisi değil, **isime göre seçme ve açıklama eylemidir.**"
          }
        ]
      },
      {
        "title": "Küresel Kullanıcılar için PDF'ler",
        "blocks": [
          {
            "p": "Yabancı isimlerin Korece isimlere dönüştürülmesi veya isimlerin Hangul ile yazılması için mevcut belgeler. Fiyatlar, ödeme ekranında gösterilen tutarları takip eder."
          },
          {
            "ul": [
              "**Kore İsim Premium Raporu** — 3 sayfa. Kaligrafi kapağını, ismin anlamını ve seçme nedenini, ayrıca saju ve beş element yorumunu içerir.",
              "**Hangul İsim Sanatı** — 2 sayfa. Kaligrafi kapağı ve telaffuz kılavuzu içerir. İsim nasıl Hangul ile yazılır ve nasıl telaffuz edilir."
            ]
          }
        ]
      },
      {
        "title": "İsim Mührü",
        "blocks": [
          {
            "p": "Ekranda oluşturulan ismi fiziksel bir mühre kazıyoruz ve size gönderiyoruz. Fiyatlar modele göre değişir — yuvarlak mühür {priceStampRound}, kare mühür {priceStampSquare}, abanoz mühür {priceStampEbony}. Uluslararası gönderim de mevcuttur."
          },
          {
            "p": "**Buradan itibaren, ürünler gönderimi içerir.** Önceki maddelerden farklı olarak, üretim ve gönderim zaman alır ve bir teslimat adresi gereklidir. Gönderim bilgileri yalnızca sipariş işleme için ve yasal saklama için kullanılır ve işlem tamamlandıktan sonra, politika gereğince belirtilen süre sonunda imha edilecektir."
          }
        ]
      },
      {
        "title": "Satın Almadan Önce Bilinmesi Gerekenler",
        "blocks": [
          {
            "p": "**Dijital ürünler ödeme yapıldıktan hemen sonra sağlanır.** İndirme başlamadan önce istediğiniz zaman iptal edebilir ve tam bir geri ödeme alabilirsiniz, ancak indirme tamamlandıktan sonra, basit bir fikir değişikliği nedeniyle geri çekilme kısıtlanmıştır (Elektronik Ticaret Kanunu Madde 17, Fıkra 2). Bu koşul, ödeme ekranında ayrı olarak kabul edilmektedir."
          },
          {
            "p": "**Sonuçların içeriği hakkında şikayetler geri ödeme nedeni değildir.** Ancak, belge oluşturulmadıysa, dosya açılamıyorsa veya ödeme tutarı siparişle farklıysa, yeniden düzenleme veya tam geri ödeme olarak işleme alınacaktır."
          },
          {
            "p": "Detaylı koşullar [İade Politikası](/refund-policy) ve [Fiyatlandırma Kılavuzu](/pricing) belgelerinde belirtilmiştir. Bu metin, nelerin dahil olduğunu rehberlik etmekte olup, yasal koşullar bu iki belgede önceliklidir."
          }
        ]
      }
    ]
  },
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
  "effective": "{date} tarihinde yürürlüğe girer",
  "pager": {
    "label": "Bildirim sayfaları",
    "newer": "← Daha Yeni",
    "older": "Daha Eski →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "İletişim ve Hakkında sayfaları artık açık",
      "body": [
        "Sorular, iadeler, gizlilik talepleri ve hata raporları için artık tek bir yer var. Alt kısımdaki iletişim sayfası, e-posta ve şirket bilgilerini listeler.",
        "**Cevaplarımızın dayandığı şeyler ve bilerek yapmadığımız şeyler, hakkında sayfasında yazılıdır.**"
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "**PDF raporları Arapça ve Khmer için İngilizce olarak verilmektedir.**",
      "body": [
        "**Eğer hizmeti Arapça veya Khmer dilinde kullanıyorsanız, satın aldığınız PDF İngilizce olarak üretilmektedir. Belgelerimizi düzenleyen araç, henüz bu iki yazıda paragrafları ayarlayamamaktadır.**",
        "**Ekranınız kendi dilinizde kalır ve adınız belgenin içinde kendi yazınızla basılır.**",
        "**Aynı not, ödeme öncesinde görünmektedir. Araç bu yazıları desteklediğinde, burada belirteceğiz.**"
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "**Ödemeler henüz açılmamıştır.**",
      "body": [
        "**Bir isim oluşturmak ve sonucu okumak bugün ücretsizdir ve hesap açmanıza gerek yoktur.**",
        "**Ücretli ürünler henüz satışta değildir. Fiyatlandırma sayfasında gösterilen tutarlar, satışlar açıldığında geçerli olacaktır.**"
      ]
    }
  }
} satisfies NoticeCopy;
