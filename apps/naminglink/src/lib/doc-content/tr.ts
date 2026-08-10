import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

/** Türkçe — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const TR_DOCS = {
  "about": {
    "eyebrow": "Hakkında",
    "title": "Naming-Link Hakkında",
    "summary": "Size Korece isimler seçmenize ve anlamanıza yardımcı oluyoruz. İşte sonuçlarımızı dayandırdığımız noktalar ve kasıtlı olarak yapmadığımız şeyler.",
    "backLabel": "Ana Sayfa",
    "sections": [
      {
        "title": "Ne yapıyoruz",
        "blocks": [
          {
            "p": "Naming-Link, **Korece isimleri seçmenize ve anlamanıza** yardımcı olur — bir çocuğun isminin arkasındaki hanja, yurtdışında kullanılacak bir Korece isim, kendi isminizin Hangul yazımı ve mühür veya basılı rapor gibi hatıralar."
          },
          {
            "p": "Sonuçlarınızı görmek **ücretsizdir ve hesap gerektirmez.** Ücretli öğeler, ekranda zaten gösterilenleri yeniden satmaz: daha fazla aday açar, yazılı analiz ekler veya sonucu saklayabileceğiniz bir şeye dönüştürür."
          }
        ]
      },
      {
        "title": "Her hizmet kime yönelik",
        "blocks": [
          {
            "p": "Burada iki tür hizmet var: **zaten bir Korece isme sahip olanlar** için bir hizmet ve **bir isme ihtiyaç duyanlar** için bir hizmet. Bunlar sizden farklı şeyler gerektirir, bu yüzden farklı dillerde sunulurlar."
          },
          {
            "ul": [
              "**Kendi dilinizde sunulmaktadır** — kendi isminizi Hangul ile yazmak ve bir Korece ismi oluşturmak. Bunlar Korece ismi olmayan kişiler için tasarlanmıştır, bu yüzden geldiğiniz dile göre ilerler.",
              "**Sadece Korece sunulmaktadır** — bir çocuk için isim-hanja bulmak ve bir Korece ismi yurtdışında kullanılacak bir isme dönüştürmek. Her ikisi de çalışabilmek için **mevcut bir Hangul ismine** ihtiyaç duyar, bu yüzden ekranlar ve rehberleri Korece kalır."
            ]
          }
        ]
      },
      {
        "title": "Cevaplarımız neye dayanıyor",
        "blocks": [
          {
            "p": "Hanja, **Kore Yüksek Mahkemesi'nin resmi isim-hanja tablosundan** gelir. Her karakterin isimlerde kullanılmak üzere sabit bir okunuşu vardır ve tablo dışında kalan karakterler kaydedilemez. Biz bu listeye ekleme yapmıyoruz veya favori karakterler seçmiyoruz."
          },
          {
            "p": "Saju ve beş-element figürleri, **Kore lunisolar takviminden** hesaplanır, doğum zamanı doğum yerinin gerçek güneş zamanına göre düzeltilir. Okuma, geleneksel bir referanstır, bir tahmin değildir."
          },
          {
            "p": "Yazılı açıklamalar AI tarafından üretilir. **Şeyler icat etmesini** önlemek için, modele yalnızca sizin girdiniz ve kendi referans verilerimiz verilir ve bunun içinde kalması söylenir. Rehberler bunu ayrıntılı olarak açıklar."
          }
        ]
      },
      {
        "title": "Ne yapmıyoruz",
        "blocks": [
          {
            "ul": [
              "**Kehanet yapmıyoruz.** Burada hiçbir şey şans, zenginlik veya koruma vaat etmez.",
              "**İsminizi saklamıyoruz.** Ücretsiz sonuçlar asla sunucularımıza yazılmaz ve ücretli belgeler dosyanın bir kopyasını saklamadan teslim edilir.",
              "**Ödeme, daha iyi bir cevap satın almaz.** Reklamla açma ve ödeme ile açma tam olarak aynı içeriği verir."
            ]
          }
        ]
      },
      {
        "title": "Verilerimizin ve çevirilerimizin durumu",
        "blocks": [
          {
            "p": "**Bunu açıkça söylemeyi tercih ederiz.** Bir kişinin kontrol ettiği ve kimsenin kontrol etmediği şeyleri söylemek, her şeyin gözden geçirildiğini iddia etmekten daha faydalıdır."
          },
          {
            "ul": [
              "**İsim-hanja verisi** — {publisher} isim-hanja tablosu, {effectiveDate} itibarıyla. Kaynak dosyasının bir hash'ini saklıyoruz, böylece tablo değişirse neyin değiştiğini anlayabiliriz.",
              "**Derleyen** Platforest. Karakterler, okumalar ve anlamlar tablodan olduğu gibi aktarılır; biz ekleme veya çıkarma yapmayız.",
              "**Çeviri** — önce Korece, sonra İngilizce, ardından diğer dillerde yazılır. **Bunlar makine çevirileridir, otomatik olarak kontrol edilir** — eksik cümleler, tutarlı terminoloji ve eklenen değerlerin sağlam kalması için. Yerli konuşurlar tarafından gözden geçirilmemiştir.",
              "**Yazılı açıklamalar** AI tarafından üretilir, sizin girdiniz ve kendi referans verilerimizle sınırlıdır, böylece gerçekleri icat etmez."
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
            "p": "Şirket bilgileri ve bize nasıl ulaşabileceğiniz [iletişim sayfasında](/contact) bulunmaktadır; iade, gizlilik talepleri ve hata raporları dahil."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Naming-Link nasıl çalışır",
    "title": "İsminizi neye dayandırıyoruz",
    "summary": "Bir Korece soyadı nasıl seçiyoruz, bir isim önerirken neyi kontrol ediyoruz ve isminizi Hangul ile nasıl yazıyoruz — kasıtlı olarak dışarda bıraktığımız kısımlar.",
    "backLabel": "Rehber",
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
                "label": "Kapsanan Hangul heceleri"
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
            "p": "Aşağıdaki rehberler, kendi dilinizde sunulan hizmetleri kapsamaktadır. Naming-Link ayrıca **zaten bir Korece isme sahip olanlar** için iki hizmet sunmaktadır — bir çocuk için isim-hanja bulmak ve bir Korece ismi yurtdışında kullanılacak bir isme dönüştürmek. Bunlar mevcut bir Hangul ismine ihtiyaç duyar, bu yüzden her iki hizmet ve rehberleri Korece'dir."
          },
          {
            "p": "[Hakkında](/about) hangi hizmetin kime yönelik olduğunu açıklar."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Nasıl çalışır",
    "title": "İsminizi Hangul ile nasıl yazıyoruz",
    "summary": "Yabancı bir ismi Hangul ile yazarken sesleri nasıl seçiyoruz ve neden hanja eklemediğimizi.",
    "backLabel": "Rehber",
    "sections": [
      {
        "title": "Anlamı değil, sesi taşırız",
        "blocks": [
          {
            "p": "Bu hizmet, **isminizi** Hangul ile yazar. Size bir Korece ismi vermez. Michael becomes 마이클 — aynı isim, Korelilerin okuyup söyleyebileceği şekilde yazılmıştır. Benzer bir anlam taşıyan bir Korece ismi ile değiştirmiyoruz."
          },
          {
            "p": "Eğer istediğiniz bir Korece ismi ise, **bu farklı bir hizmettir.** Biri isminizi korur ve sadece yazı tipini değiştirir; diğeri yeni bir isim önerir."
          }
        ]
      },
      {
        "title": "Korece'de bulunmayan sesler",
        "blocks": [
          {
            "p": "Her dilin Korece'de bulunmayan sesleri vardır — f, v, z, th ve Korece'nin ayırt etmediği ünlü farklılıkları. Bu sesler için, isminizi yüksek sesle okurken **bir Korece konuşucunun gerçekten söylediği** şekilde yazıyoruz, orijinal fonetiği harf harf transkribe etmek yerine. Amaç, kullanılacak yazımın elde edilmesidir, en teknik olarak sadık olan değil."
          },
          {
            "p": "Aynı yazım, ismin nereden geldiğine bağlı olarak farklılık gösterebilir, bu yüzden dilinizi ve ülkenizi soruyoruz ve o telaffuzdan yola çıkıyoruz."
          }
        ]
      },
      {
        "title": "Birden fazla yazım, yan yana",
        "blocks": [
          {
            "p": "Tek bir doğru cevap yoktur. Orijinal sese en yakın yazım, Kore'de en yaygın olarak kullanılan yazım ve yazması en kolay olan yazım genellikle üç farklı şeydir. Bu yüzden bunları bir arada gösteriyoruz ve aralarındaki farkı belirtiyoruz."
          },
          {
            "p": "Eğer hiçbiri doğru gelmiyorsa, istediğiniz ses hakkında bir ipucu ekleyebilir ve tekrar çalıştırabilirsiniz — örneğin, belirli bir hecenin farklı yazılması gerektiğini belirtebilirsiniz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Burada hanja yok",
        "blocks": [
          {
            "p": "Bir transliterasyona hanja eklemiyoruz. Hanja anlam taşır ve bu akış sesle ilgilidir. Karakterleri yalnızca sese eşleştirmek, istemediğiniz bir anlamla sonuçlanmanıza neden olabilir."
          }
        ]
      },
      {
        "title": "Bu, pasaport romanizasyonunun tersine çalışır",
        "blocks": [
          {
            "p": "Bu ikisi kolayca karıştırılabilir, bu yüzden farkı burada: **ters yönde çalışırlar.**"
          },
          {
            "ul": [
              "**Romanizasyon** bir Koreli kişinin Hangul ismini Latin alfabesiyle yazar. Pasaport verildiğinde sabitlenir ve o zamandan itibaren biletler, vizeler ve banka hesapları bu yazımı takip eder. 김민준, Kim Minjun olur.",
              "**Hangul transliterasyonu** — bu hizmetin yaptığı — ters yönde çalışır. Latin alfabesiyle yazılmış bir ismi alır ve Hangul'da nasıl seslendiğini yazar. Daniel, 대니얼 olur."
            ]
          },
          {
            "p": "Burada elde ettiğiniz **pasaportunuzdaki yazımı değiştirmez.** O romanizasyon zaten sabitlenmiştir; bu, o ismin Hangul'da yeniden yazılmasıdır. İkisi her zaman birbirine tam olarak dönüşmez — Korece'de bulunmayan bir sesi yazmak, yolda biraz bilgi kaybına neden olur."
          }
        ]
      },
      {
        "title": "Bu yazımı nerede kullanırsınız",
        "blocks": [
          {
            "p": "Bir Hangul yazımına genellikle şu yerlerde ihtiyaç duyulur."
          },
          {
            "ul": [
              "**Kendinizi tanıtmak** — isminizi Hangul'da göstermek veya Korece söylemek",
              "**Bir formda Hangul ismi alanı** — isminizi Hangul'da isteyen kayıtlar ve başvurular. **Resmi belgede ne olacağına kurum karar verir** — burada elde ettiğiniz şey bunun yerini almaz.",
              "**Bir isim mührü veya hatıra** — oymak için yazım"
            ]
          },
          {
            "p": "**Birden fazla yazımın savunulabilir olması normaldir.** Bir isim Hangul'da birkaç şekilde yazılabiliyorsa, bunları yan yana gösteriyoruz ve seçimi size bırakıyoruz."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Nasıl çalışır",
    "title": "Korece bir isim nasıl oluşturuyoruz",
    "summary": "Mevcut soyadlarından seçim yapıyoruz, ismin ne kadar kolay söylendiğini ve yazıldığını değerlendiriyoruz ve ismin ne amaçla kullanılacağını soruyoruz.",
    "backLabel": "Kılavuz",
    "sections": [
      {
        "title": "Aile adıyla başlıyoruz",
        "blocks": [
          {
            "p": "Kore'de aile adı önce gelir ve verilen isimlerden farklı olarak serbestçe icat edilmez — onu miras alırsınız. Bu yüzden yalnızca Koreli insanların gerçekten sahip olduğu soyadlarını öneriyoruz. Varsayılan havuzumuz, nüfusun yaklaşık %80'ini kapsayan **en yaygın 20 soyadı**dır."
          },
          {
            "p": "Eğer kendi soyadınız bir gerçek Kore soyadıyla ses uyumu sağlıyorsa — Wang ile 왕, Ye ile 예 — onu önce koyuyoruz. Orijinal isminize bir bağlantı tutmak, rastgele seçilen bir soyadından daha değerlidir."
          },
          {
            "p": "Bir soyadı kendiniz seçebilir veya bize bir öneri yapmamıza izin verebilirsiniz. Her iki durumda da **var olan bir soyadı** olacaktır."
          }
        ]
      },
      {
        "title": "Seçilecek yirmi altı soyadı var",
        "blocks": [
          {
            "p": "Listeyi kasıtlı olarak dar tuttuk. **Kore soyadları gerçekten yoğunlaşmıştır** — Kim, Lee ve Park yalnızca nüfusun yaklaşık %45'ini oluşturur ve en iyi yirmi soyadı yaklaşık %80'ini. Nadir soyadları eklemek menüyü genişletebilir, ancak aynı zamanda Korelilerin isim olarak duymadığı isimler üretebilir."
          },
          {
            "ul": [
              "**En yaygın yirmi** (nüfusun yaklaşık %80'i) — 김 Kim · 이 Lee · 박 Park · 최 Choi · 정 Jung · 강 Kang · 조 Cho · 윤 Yoon · 장 Jang · 임 Lim · 한 Han · 오 Oh · 서 Seo · 신 Shin · 권 Kwon · 황 Hwang · 안 Ahn · 송 Song · 전 Jeon · 홍 Hong",
              "**Ses bağlantısını korumak için eklenen gerçek soyadları** — 왕 Wang · 진 Jin · 백 Baek · 마 Ma · 나 Na · 유 Yoo"
            ]
          },
          {
            "p": "İkinci grup, **kendi soyadınızın sesle taşınabilmesi** için vardır. Wang, Jin, Baek, Ma, Na ve Yoo, Korelilerin zaten sahip olduğu soyadlarıdır, bu yüzden isminizi söylemek, başladığınız isimle bir bağlantı kurar. Yirmi altısı da gerçek kullanımda olan soyadlarıdır — hiçbiri bizim icadımız değildir."
          }
        ]
      },
      {
        "title": "Söylemesi kolay, yazması kolay",
        "blocks": [
          {
            "p": "Bu, Kore'de insanların sizi gerçekten çağıracağı bir isimdir, bu yüzden ilk kontrol ettiğimiz şey, bir Korelinin onu bir kez duyup yazıp yazamayacağıdır. Her seferinde hecelemek gereken bir isim, sizin taşıdığınız bir yük olur, bizim değil."
          },
          {
            "p": "Anlam da önemlidir. Koreli verilen isimler genellikle bir anlam taşır, bu yüzden ismin ne okunduğunu ve neden onu seçtiğimizi size bildiriyoruz — sadece ismin kendisini değil."
          }
        ]
      },
      {
        "title": "İsmin ne amaçla kullanıldığını soruyoruz",
        "blocks": [
          {
            "p": "Üniversite evrakları için bir isim, arkadaşların bir odanın içinde bağıracağı bir isimle aynı değildir veya çevrimiçi kullanacağınız bir takma adla. Ne amaçla kullanmayı planladığınızı soruyoruz ve bunu dikkate alıyoruz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu bir transliterasyon değildir",
        "blocks": [
          {
            "p": "Burada bir **yeni Kore ismi** öneriyoruz. Mevcut isminizin Hangul'da yazılmasını istiyorsanız — Michael, 마이클 olarak — [Hangul yazım kılavuzuna](/guide/how-hangul-transliteration) bakın."
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
            "p": "**{email}** adresine yazın. İki iş günü içinde yanıtlıyoruz. Bir siparişle ilgili herhangi bir şey — ödeme, iade, almadığınız bir dosya — lütfen **sipariş numaranızı veya ödediğiniz e-posta adresini** ekleyin."
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
              "**Ticaret sicil no.** — {businessNumber}",
              "**Siparişle satış no.** — {mailOrderNumber}",
              "**Adres** — {address}",
              "**Müşteri hizmetleri** — {customerCenter}",
              "**E-posta** — {email}",
              "**Gizlilik sorumlusunun adı** — {privacyOfficer}",
              "**Barındırma sağlayıcısı** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Mesajınızda bir isim veya doğum tarihi belirtmenize gerek yoktur. Ücretsiz sonuçlar asla sunucularımızda saklanmaz, bu yüzden onları tekrar bulamayız — bir sipariş numarası yeterlidir."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Standartlarımız",
    "title": "Kullanmaktan Kaçındığımız Şeyler",
    "summary": "Toplam servet veya sayısal puanlar atamıyoruz, ayrıca darbe sayıları kullanmıyoruz. Beş element yalnızca ek bir eksen olarak kullanılır. İşte nedenleri.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Toplam servet veya sayısal puan atamama nedenleri",
        "blocks": [
          {
            "p": "İsimlere toplam servet veya sayısal puan atayan yöntemler vardır. Naming-Link bu sayıları sağlamaz. Nedenleri dördüncü."
          },
          {
            "p": "**Birincisi, tek bir standart yoktur.** Servet hesaplama yöntemleri okula göre değişir ve aynı isim bir standart tarafından olumlu, diğer bir standart tarafından olumsuz değerlendirilebilir. Hangisinin doğru olduğunu belirlemek için bir temelimiz yok. Birini doğruymuş gibi sunmak dürüst değildir."
          },
          {
            "p": "**İkincisi, bu hesaplamalar darbe sayılarına dayanır.** Ancak, Yüksek Mahkeme verileri darbe sayılarını hiç içermez. Dahası, darbe sayıları, karakterlerin normal veya basitleştirilmiş olarak sayılıp sayılmadığına ve radikallerin nasıl sayıldığına bağlı olarak değişebilir. Temel sayılar kesin olarak belirlenmediğinden, bunların üzerine inşa edilen puanlar kesin olamaz."
          },
          {
            "p": "**Üçüncüsü, sayılar gerçeklikten daha sağlam görünür.** \"87 puan\" dediğinde, bu ölçülen bir değer gibi okunur, geleneksel bir yorumdan ziyade. Bu isimler o sayıdan baskı hissedebilir, gerçekten önemli olanı (Çağırmak hoş mu? Anlamı uyuyor mu? İstenilen dilekleri içeriyor mu?) bir kenara itebilir."
          },
          {
            "p": "**Dördüncüsü, doğrulama yolu yoktur.** Bir isim ile bir kişinin hayatı arasındaki ilişki doğrulanamaz. Doğru veya yanlış olduğu söylenemeyen bir şeyi bir puana dönüştürmek, yanlış olamayacak bir sayıyı sonuçlandırır."
          },
          {
            "p": "Sadece **kanıtlanabilir** olanı kullanıyoruz. Yüksek Mahkeme resmi isim-hanja tablosu, her karakter için belirlenen okumalar ve tabloda listelenen anlamlar. Bunun yerine, bu adayın neden seçildiğine ve neden belirli karakterlerin dışlandığına dair nedenler sağlıyoruz, **puanlar yerine nedenler** gösteriyoruz."
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
            "p": "Darbe sayılarını kullanmak için, başka bir yerden sayılar elde etmemiz gerekecek, ancak bu sayıların nereden geldiğini ve nasıl sayıldığını netleştiremiyorsak, isimleri temelsiz sayılara dayanarak değerlendirmek anlamına gelir. Kanıtlanamayan değerlere dayanarak isimleri değerlendirmemeye karar verdik."
          }
        ]
      },
      {
        "title": "Beş elementi yalnızca bir referans olarak kullanıyoruz",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Bir daire içinde yer alan beş element: üretim komşular arasında gerçekleşir, kontrol birini atlar",
              "wood": "ahşap",
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
            "p": "Eğer doğum ayınızı girdiyseniz, o ay temel alınarak beş elementlerin basitleştirilmiş bir referansını kullanıyoruz. Ancak bu, kesin bir saju analizi değildir ve **isimlerin bir kişinin kaderini veya karakterini belirlediğini iddia etmiyoruz.**"
          },
          {
            "p": "Son seçimde öncelik verdiğimiz şeyler sesler, anlamların kombinasyonları, ailenin iletmek istediği değerler ve gerçekten kaydedilebilir olup olmadığıdır. Eğer doğum ayınızı girmediyseniz, beş element referansını analizden tamamen hariç tutuyoruz — bilinmeyen bilgiler hakkında keyfi varsayımlarda bulunmuyoruz."
          },
          {
            "p": "Kesin bir saju tabanlı analiz istiyorsanız, bunu ayrı bir detaylı raporda kapsıyoruz. Ücretsiz hanja eşleştirmede beş elementlere öncelik vermememizin nedeni, eksik doğum tarihi ve saatine dayanan beş elementlerden elde edilen yargıları kesinmiş gibi sunmak istemememizdir."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Ücretli Ürünler",
    "title": "Ücretli ürünlerde neler var?",
    "summary": "Ücretsiz olarak görünenin ne kadarını ve her ürün için ödemenin hangi ek özellikleri getirdiğini netleştiriyoruz. Fiyatlar, gerçek ürün ayarlarından alınır.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Ücretsiz olarak ne görülebilir?",
        "blocks": [
          {
            "p": "Bir isim oluşturmak ve sonuçları görüntülemek **ücretsizdir**. Üyelik kaydı gerektirmez. Ekranda hanja'nın eşleşen anlamlarını, Korece isimler oluşturmayı, küresel isim dönüşümünü ve Hangul telaffuz notasyonunu görebilir, önerilen sonuçları ve bunların gerekçelerini görüntüleyebilirsiniz."
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
            "p": "Önerilen sonuçlar, adayları birer birer açacak şekilde yapılandırılmıştır. Reklamları görüntülerken, bir tane açılırken, bu ürün **tüm kalan adayları bir anda açar**."
          },
          {
            "p": "Aceleniz yoksa, satın almanıza gerek yoktur. **Reklamlar aracılığıyla açılan sonuçlar ile ödemeli sonuçlar tamamen aynıdır** — beklemek meselesidir ve ödeme yapmak daha iyi adaylar sağlamaz."
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
              "**Maksimum 10 hanja adayı geniş detaylı PDF** — {priceTenDetail}. Aday sayısı on adede çıkar ve bir PDF belgesi eklenir.",
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
            "p": "Kullanılabilir hanja ve anlamları, Kore Yüksek Mahkemesi tarafından belirlenen resmi isim-hanja tablosundan gelmektedir ve hepsi hizmetin rehber belgelerinde kamuya açıktır. Ücretli ürünlerin sattığı şey hanja bilgisi değil, **isime göre seçme ve açıklama eylemidir**."
          }
        ]
      },
      {
        "title": "Küresel Kullanıcılar için PDF'ler",
        "blocks": [
          {
            "p": "Yabancı isimleri Kore isimlerine dönüştürmek veya isimleri Hangul ile yazmak için mevcut belgeler. Fiyatlar ödeme ekranında gösterilen miktarları takip eder."
          },
          {
            "ul": [
              "**Kore İsim Premium Raporu** — 3 sayfa. Kaligrafi kapağı, ismin anlamı ve seçilme nedeni, saju ve beş element yorumu içerir.",
              "**Hangul İsim Sanatı** — 2 sayfa. Kaligrafi kapağı ve telaffuz kılavuzu içerir. İsim nasıl Hangul ile yazılır ve nasıl telaffuz edilir içerir."
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
            "p": "**Buradan itibaren, ürünler kargo içerir.** Önceki ürünlerden farklı olarak, üretim ve kargo zaman alır ve bir teslimat adresi gereklidir. Kargo bilgileri yalnızca sipariş işleme için kullanılır ve yasal saklama için, işlem tamamlandıktan sonra, politika gereği belirtilen süre sonunda imha edilecektir."
          }
        ]
      },
      {
        "title": "Satın Almadan Önce Bilinmesi Gerekenler",
        "blocks": [
          {
            "p": "**Dijital ürünler ödeme yapıldıktan hemen sonra sağlanır.** İndirme başlamadan önce istediğiniz zaman iptal edebilir ve tam bir geri ödeme alabilirsiniz, ancak indirme tamamlandıktan sonra, basit bir fikir değişikliği nedeniyle geri çekilme kısıtlanır (Elektronik Ticaret Yasası'nın 17. Maddesi, 2. Fıkrası). Bu koşul, ödeme ekranında ayrı olarak kabul edilir."
          },
          {
            "p": "**Sonuçların içeriği ile ilgili şikayetler geri ödeme nedeni değildir.** Ancak, belge oluşturulmadıysa, dosya açılamıyorsa veya ödeme miktarı siparişle farklıysa, yeniden düzenleme veya tam geri ödeme olarak işleme alınacaktır."
          },
          {
            "p": "Detaylı koşullar [Geri Ödeme Politikası](/refund-policy) ve [Fiyatlandırma Kılavuzu](/pricing) belgelerinde belirtilmiştir. Bu metin, nelerin dahil olduğunu rehber olarak sunar ve yasal koşullar bu iki belgede önceliklidir."
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
  "intro": "Kullanım şartlarınızda yapılan değişiklikler — fiyatlar, politikalar — burada yürürlüğe girmeden önce yayınlanır. İçsel iyileştirmeler listelenmez: burada görünen, bilmeniz gerekenlerdir.",
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
        "Sorular, geri ödemeler, gizlilik talepleri ve hata raporları artık tek bir yere yönlendiriliyor. Alt kısımdaki iletişim sayfası, e-posta ve şirket bilgilerini listeler.",
        "Cevaplarımızın dayandığı şeyler ve kasıtlı olarak yapmadığımız şeyler hakkında bilgi, hakkında sayfasında yazılıdır."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF raporları Arapça ve Kmerce için İngilizce olarak verilmektedir",
      "body": [
        "Eğer hizmeti Arapça veya Kmerce kullanıyorsanız, satın aldığınız PDF İngilizce olarak üretilmektedir. Belgelerimizi düzenleyen araç, henüz bu iki yazıda paragrafları ayarlayamamaktadır.",
        "Ekran dilinizde kalır ve adınız belgenin içinde kendi yazınızla basılır.",
        "Aynı not, ödeme öncesinde görünmektedir. Araç bu yazıları desteklediğinde, burada belirtilecektir."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Ödemeler henüz açık değil",
      "body": [
        "Bir isim oluşturmak ve sonucu okumak bugün ücretsizdir ve hesap açmanıza gerek yoktur.",
        "Ücretli ürünler henüz satışta değildir. Fiyatlandırma sayfasında gösterilen miktarlar, satışlar açıldığında geçerli olacaktır."
      ]
    }
  }
} satisfies NoticeCopy;
