import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Türkçe — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const TR_DOCS = {
  "about": {
    "eyebrow": "Hakkında",
    "title": "Naming-Link Hakkında",
    "summary": "Size Korece isimleri seçme ve anlama konusunda yardımcı oluyoruz. Sonuçlarımızı neye dayandırdığımız ve bilerek ne yapmadığımız burada.",
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
            "p": "Hanja, **Kore Yüksek Mahkemesi'nin resmi isim-hanja tablosundan** gelir. Her karakterin isimlerde kullanılmak üzere belirlenmiş bir okunuşu vardır ve tablonun dışındaki karakterler kaydedilemez. Biz bu listeye ekleme yapmıyoruz veya favori karakterler seçmiyoruz."
          },
          {
            "p": "Saju ve beş-element figürleri, **Kore lunisolar takviminden** hesaplanır; doğum zamanı, doğum yerinin gerçek güneş zamanına göre düzeltilir. Okuma, geleneksel bir referanstır, tahmin değildir."
          },
          {
            "p": "Yazılı açıklamalar AI tarafından üretilir. **Şeyler icat etmesini** önlemek için, modele yalnızca sizin girdiniz ve kendi referans verilerimiz verilir ve bunun içinde kalması söylenir. Rehberler bunu detaylı bir şekilde açıklar."
          }
        ]
      },
      {
        "title": "Ne yapmıyoruz",
        "blocks": [
          {
            "ul": [
              "**Gelecekten haber vermiyoruz.** Burada hiçbir şey şans, zenginlik veya koruma vaat etmez.",
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
    "summary": "Korece bir soyadı nasıl seçiyoruz, belirli bir isim önermeden önce neyi kontrol ediyoruz ve isminizi Hangul'da nasıl yazıyoruz — bilerek çıkardığımız kısımlar ile birlikte.",
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
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Okumalar",
    "title": "Belirlenmiş okumalar — her karakter için bir telaffuz",
    "summary": "Resmi tablo yalnızca karakterleri listelemez. Ayrıca, her birinin bir isimde kullanıldığında nasıl okunduğunu da belirler.",
    "backLabel": "Rehber",
    "sections": [
      {
        "title": "Her karakter için belirlenmiş bir okuma",
        "blocks": [
          {
            "p": "İsim-hanja tablosu yalnızca hangi karakterlerin kullanılabileceğini belirlemez. **Aynı zamanda, her karakterin bir isimde göründüğünde nasıl okunduğunu da belirler.** Bu belirlenmiş okuma, kayıtta esas alınır."
          },
          {
            "p": "Çoğu hanja'nın birkaç olası okuması vardır. Ancak bir isim, belgelerde yazılır ve yüksek sesle söylenir, bu nedenle tam olarak bir tane gerektirir. Bu nedenle, tablo her karaktere isimlerde kullanılmak üzere okumasını atar ve başka bir okuma kaydedilemez."
          }
        ]
      },
      {
        "title": "Bu yüzden ses önce gelir",
        "blocks": [
          {
            "p": "Bu nedenle Naming-Link, hanja aramadan önce sesi belirler. Eğer isim \"지은\" ise, anlam yalnızca **지** okumasına atanmış karakterler ve **은** okumasına atanmış karakterler arasından seçilebilir."
          },
          {
            "p": "Ne kadar iyi bir anlam olursa olsun, okuması uymayan bir karakter o isim için kullanılamaz. Ayrıca, bir karaktere uyması için ismin sesini asla değiştirmiyoruz — bir isim ömür boyu söylenir ve ses önce belirlenir, hanja ise ardından gelir."
          }
        ]
      },
      {
        "title": "Soyadlar bu tablonun dışındadır",
        "blocks": [
          {
            "p": "Bu genellikle yanlış anlaşılır. **Tablo, verilen ismi yönetir, soyadını değil.** Bir soyadı, aile kaydında zaten bulunanı takip eder, bu nedenle bazı insanlar isim-hanja tablosunda olmayan karakterleri kullanır."
          },
          {
            "p": "Bu nedenle Naming-Link, soyadı hanja'yı farklı bir şekilde ele alır. Sadece size bir soyadı bulmanıza yardımcı oluyoruz ve tablo dışındaki karakteri olan kişiler için doğrudan bir tane girme alanı bırakıyoruz. Namgung ve Seonwoo gibi iki heceli soyadları aynı şekilde girilir."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Nasıl çalışır",
    "title": "İsminizi Hangul'da nasıl yazıyoruz",
    "summary": "Yabancı bir ismi Hangul'da yazarken sesleri nasıl seçtiğimiz ve neden hanja eklemediğimiz.",
    "backLabel": "Rehber",
    "sections": [
      {
        "title": "Anlamı değil, sesi taşırız",
        "blocks": [
          {
            "p": "Bu hizmet, **isminizi** Hangul'da yazar. Size bir Korece isim vermez. Michael becomes 마이클 — aynı isim, Korelilerin okuyup söyleyebileceği şekilde yazılmıştır. Benzer bir anlam taşıyan bir Korece isimle değiştirmiyoruz."
          },
          {
            "p": "Eğer istediğiniz bir Kore adıysa, **bu farklı bir hizmettir**. Birisi adınızı korur ve sadece yazıyı değiştirir; diğeri ise yeni bir ad önerir."
          }
        ]
      },
      {
        "title": "Korece sesler yoktur",
        "blocks": [
          {
            "p": "Her dilin Korece'nin eksik olduğu sesleri vardır — f, v, z, th ve Korece'nin yapmadığı ünlü ayrımları. Bu sesler için, adınızı yüksek sesle okurken **bir Korece konuşanın gerçekten söylediği** şeyi yazarız, orijinal fonetiği harf harf transkribe etmek yerine. Amaç, kullanılacak yazımın doğru olmasıdır, en teknik olanı değil."
          },
          {
            "p": "Aynı yazım, bir adın nereden geldiğine bağlı olarak farklılık gösterebilir, bu yüzden dilinizi ve ülkenizi soruyoruz ve bu telaffuzdan yola çıkıyoruz."
          }
        ]
      },
      {
        "title": "Birden fazla yazım, yan yana",
        "blocks": [
          {
            "p": "Tek bir doğru cevap yoktur. Orijinal sese en yakın yazım, Kore'de en yaygın olarak kullanılan yazım ve yazması en kolay olan yazım genellikle üç farklı şeydir. Bu yüzden hepsini bir arada gösteriyoruz ve aralarındaki farkları açıklıyoruz."
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
            "p": "Bir transliterasyona hanja eklemiyoruz. Hanja anlam taşır ve bu akış sesle ilgilidir. Karakterleri sadece sese eşleştirmek, istemediğiniz bir anlamla sonuçlanmanıza neden olabilir."
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
            "p": "Kore'de aile adı önce gelir ve verilen adlar gibi serbestçe icat edilmez — onu miras alırsınız. Bu yüzden yalnızca Korelilerin gerçekten sahip olduğu soyadlarını öneriyoruz. Varsayılan havuzumuz, nüfusun yaklaşık %80'ini kapsayan **en yaygın 20 soyadı**dır."
          },
          {
            "p": "Eğer kendi soyadınız bir gerçek Kore soyadıyla ses olarak örtüşüyorsa — Wang ile 왕, Ye ile 예 — o zaman onu ilk sıraya koyarız. Orijinal adınıza bir bağ tutmak, rastgele seçilen bir soyadından daha değerlidir."
          },
          {
            "p": "Bir soyadı kendiniz seçebilir veya bize bir öneri yapmamıza izin verebilirsiniz. Her iki durumda da **var olan bir soyadı** olacaktır."
          }
        ]
      },
      {
        "title": "Söylemesi kolay, yazması kolay",
        "blocks": [
          {
            "p": "Bu, Kore'de insanların sizi gerçekten çağıracağı bir isimdir, bu yüzden kontrol ettiğimiz ilk şey, bir Korelinin onu bir kez duyup yazıp yazamayacağıdır. Her seferinde hecelemek gereken bir isim, sizin taşıdığınız bir yük, bizim değil."
          },
          {
            "p": "Anlam da önemlidir. Korece verilen adlar genellikle bir anlam taşır, bu yüzden adın ne okunduğunu ve neden seçtiğimizi size bildiriyoruz — sadece adın kendisi değil."
          }
        ]
      },
      {
        "title": "Adın ne için olduğunu soruyoruz",
        "blocks": [
          {
            "p": "Üniversite belgeleri için bir ad, arkadaşların bir odanın içinde bağıracağı bir adla veya çevrimiçi kullanacağınız bir takma adla aynı değildir. Onu nasıl kullanmayı planladığınızı soruyoruz ve bunu dikkate alıyoruz."
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
            "p": "**{email}** adresine yazın. İki iş günü içinde yanıt veriyoruz. Bir siparişle ilgili her şey için — ödeme, iade, almadığınız bir dosya — lütfen **sipariş numaranızı veya ödediğiniz e-postayı** ekleyin."
          },
          {
            "p": "Telefonla sorgular: {customerCenter} (Kore iş saatleri)."
          }
        ]
      },
      {
        "title": "Buraya ne göndermeliyim",
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
            "p": "Mesajınıza bir isim veya doğum tarihi eklemeniz gerekmez. Ücretsiz sonuçlar sunucularımızda asla saklanmaz, bu nedenle onları tekrar arayamıyoruz — bir sipariş numarası yeterlidir."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Gelenekler",
    "title": "Kaçınılması Gereken Karakterler",
    "summary": "Bu yasal olarak yasak değildir ama bir gelenektir. Kaçınılması gerekenler ve nedenleri hakkında yazdık ve bunu nasıl ele aldığımızı açıkladık.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Yasal Olarak Kabul Edilebilir Karakterler",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} karakter",
                "label": "Derlenen Kaçınılan Karakterler"
              },
              {
                "value": "{avoidCommonlyUsed} karakter",
                "label": "Aralarında, hala yaygın olarak kullanılan karakterler"
              }
            ]
          },
          {
            "p": "Kişisel isimler için karakter listesine dahil olan ve **yasal olarak kabul edilebilir** olan karakterler vardır, ancak isimler için uygun görülmez."
          },
          {
            "p": "The underlying thought is that **\"excessive meaning is actually undesirable.\"** This includes characters that are considered too precious (珍 treasure, 寶 jewel), characters viewed as having too strong a presence (王 king, 帝 emperor), and those regarded as too grand for a person to embody, like heaven or deities. This reflects an old sense of restraint, believing that a name can overshadow the person."
          },
          {
            "p": "**Ancak, bu karakterler kullanılamaz değildir.** Bu yasal bir yasak değil, bir gelenektir ve gelenekler bölgeye, aileye ve nesle göre değişir ve zamanla değişebilir."
          },
          {
            "p": "Aslında, derlediğimiz {avoidTotal} karakter arasında, {avoidCommonlyUsed} hala isimlerde yaygın olarak kullanılmaktadır. Kaçınılması gerekenler olarak bilinse de hala yaygın olarak kullanılması, bu geleneğin mutlak olmadığını göstermektedir."
          }
        ]
      },
      {
        "title": "Hangi Kategoriler Vardır?",
        "blocks": [
          {
            "p": "Şu anda derlenen karakterler yedi kategoriye ayrılmıştır."
          },
          {
            "ul": [
              "**Hazineler ve Eşyalar** — Zenginliği veya nesneleri doğrudan ifade eden karakterler",
              "**Cennet ve Doğa** — Bir kişinin temsil etmesi için çok büyük görülen güneş, ay ve gökyüzü gibi şeyler",
              "**Krallar ve Soylular** — Kral veya imparator gibi statüyü belirten karakterler",
              "**Kutsal Varlıklar** — Tanrılar veya ruhlar gibi kutsal alanları ifade eden karakterler",
              "**Mevsimler ve Diğerleri** — Belirli zamanlar veya durumlarla bağlantılı karakterler",
              "**Hayvanlar** — Ejderhalar veya kaplanlar gibi güçlü enerjiye sahip olduğu düşünülen hayvanlar",
              "**Aşırılık** — Aşırı büyük veya taşan anlamlara sahip olduğu düşünülen karakterler"
            ]
          }
        ]
      },
      {
        "title": "Karakterleri Kendiniz Ekleyebilir veya Çıkarabilirsiniz",
        "blocks": [
          {
            "p": "Bu karakterleri keyfi olarak silmiyoruz. **İsimlendirenin bunları nasıl ele alacağını seçmesi için giriş ekranında iki seçenek sunduk.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Giriş Ekranında Mevcut Olan Seçenekler",
        "blocks": [
          {
            "p": "**Kaçınılan Karakterleri Adaylardan Hariç Tut** — Eğer etkinleştirilirse, tamamen hariç tutulur. Eğer devre dışı bırakılırsa, sonuçlarda \"Geleneksel Olarak Kaçınılan\" etiketi ve ekli neden ile kalır."
          },
          {
            "p": "**Hatta Yaygın Olarak Kullanılan Karakterleri Hariç Tut** — Bu, kaçınılması gereken listede olan ancak aslında yaygın olarak kullanılan karakterleri (圭·琳·玲·元·太·星·海, vb.) hariç tutar. Eğer etkinleştirilirse, adaylar önemli ölçüde azalır."
          },
          {
            "p": "Varsayılan olarak, **hariç tutmamak ama yalnızca görüntülemek** şeklindedir. Eğer listeden sessizce kaldırılırsa, o karakteri kullanmak isteyenler için var olmadığı gibi görünebilir."
          }
        ]
      },
      {
        "title": "Seçeneklerin Kaybolmadığından Emin Olma",
        "blocks": [
          {
            "p": "O hece için kullanılabilir karakter kalmadığında, o hece için hariç tutmayı kaldıracağız ve adayları göstereceğiz. Hiç seçenek olmamasından daha iyi olduğuna inanıyoruz."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Hizmet Temeli",
    "title": "Küresel İsim Dönüşümünün Temeli Nedir?",
    "summary": "Her dilin yazım sistemlerini koruyarak ve yalnızca mevcut isimleri kullanarak beş perspektiften adaylar sağlıyoruz.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Adaylar Beş Perspektiften Sağlanır",
        "blocks": [
          {
            "p": "Bir ismi başka bir dile çevirmenin tek bir yolu yoktur. Sesin mi yoksa anlamın mı korunacağına bağlı olarak, yerel bağlamda doğal bir isim seçmek veya bireyselliği önceliklendirmek gibi cevaplar farklılık gösterecektir. Bu nedenle, tek bir seçenek sunmak yerine, **beş farklı perspektiften birer tane** sağlıyoruz."
          },
          {
            "ul": [
              "**Ses Koruma Seçeneği** — Orijinal ismin sesini mümkün olduğunca korur",
              "**Anlam Çeviri Seçeneği** — İsimdeki anlamı o dilin ismine çevirir",
              "**Ses ve Anlam Uzlaşma Seçeneği** — Her birinden yarısını alır",
              "**Yerel Gerçeklik Seçeneği** — O kültürel bağlamda gerçekten yaygın olarak kullanılan isimleri seçer",
              "**Bireysellik ve Markalaşma Seçeneği** — Akılda kalıcı ve ayırt edici isimleri önceliklendirir"
            ]
          },
          {
            "p": "Beş seçenek sağlanacağından emin olunmaktadır. Tercihler kişiden kişiye değiştiği için, doğru cevap olarak birini sunmaktansa seçim yapma imkanı vermenin daha iyi olduğuna inanıyoruz."
          }
        ]
      },
      {
        "title": "Her Dilin Farklı Yazım Sistemi Kuralları Vardır",
        "blocks": [
          {
            "p": "Roman harfleri kullanmayan bir dile çevirirken, o dilin alfabesiyle yazılması gerekir. Japonca için kana ve kanji; Rusça, Moğolca ve Kazakça için Kiril; Arapça için Arap alfabesi; Tayca, Kmerce ve Hintçe için ise kendi alfabeleriyle yazılmalıdır. Eğer Roman harfleriyle yazarsanız ve buna \"Japonca isim\" derseniz, o ülkede kullanılamaz."
          },
          {
            "p": "Bu nedenle, her dilin yazım sistemi için ayrı kurallarımız vardır ve sunucu, sonuçların o yazım sisteminde olduğundan emin olmak için bir kez daha kontrol eder. Soyadlarının atlanması veya Hangul'un karıştırılması gibi hatalar burada filtrelenir."
          }
        ]
      },
      {
        "title": "Gerçekten Kullanılan İsimleri Kullanıyoruz",
        "blocks": [
          {
            "p": "Gerçekten var olmayan ama makul görünen isimler yaratmaktan kaçınmak için, seçeneklerimizi mevcut isimlere dayandırıyoruz. İsimler belgelerde ve tanıtımlarda kullanılır, bu nedenle yerel bir kişi \"böyle bir isim yok\" düşüncesindeyse, bu isim kullanılamaz."
          }
        ]
      },
      {
        "title": "Seçim ve Tanımı Ayırıyoruz",
        "blocks": [
          {
            "p": "Beş aday belirleme görevini, her adayın detaylı tanımını yapma görevinden ayrı olarak ele alıyoruz. Tanımın çok zaman alması nedeniyle, bu kısmı ayrı tutarak aynı anda oluşturuyoruz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Neden Bu Değiştirildi?",
        "blocks": [
          {
            "p": "Başlangıçta, beş perspektifi ayrı ayrı oluşturduk. Daha hızlıydı, ancak **aday sayısı her seferinde değişiyordu.** Her kişi adayları seçerken, örtüşmeler veya tutarsızlıklar oluyordu ve biri başarısız olursa, o aday tamamen kayboluyordu, bu da beş yerine sadece iki veya üç adayla sonuçlanıyordu."
          },
          {
            "p": "Artık, aday setini ve perspektif dağılımını bir kerede belirlediğimiz için, **sayı sabit.** Bir tanım başarısız olsa bile, adaylar kalır ve kısa bilgilerle sunulur. Biraz daha uzun sürse bile, her zaman aynı sayıda olmasının daha iyi olduğuna inanıyoruz."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Hizmet Temeli",
    "title": "Hanja anlamlarının eşleştirilmesi için temel nedir?",
    "summary": "Öncelikle, sesler sabitlenir ve yalnızca o sesle kaydedilebilecek hanja toplanır ve anlam, tek bir karakter yerine bir kombinasyon olarak görülür.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Öncelikle sesleri sabitleyin",
        "blocks": [
          {
            "p": "\"지은\" olarak karar verdiyseniz, **지** ve **은** değişmez. Hanja ile eşleşmesi için ismin sesini değiştirmiyoruz. Bir isim, ömür boyu çağrılan bir şeydir ve sesin önce sabitlenmesi, ardından hanja'nın gelmesi gerektiğine inanıyoruz."
          },
          {
            "figure": "hanja-match-flow",
            "labels": {
              "soundStep": "① Sesi sabitleyin",
              "soundNote": "Bir karakterle uyum sağlamak için asla değiştirmiyoruz",
              "tableStep": "② Resmi tabloya göre filtreleyin",
              "tableBody": "sadece o okuma ile atanan karakterler",
              "tableNote": "tablodaki {total} karakterden",
              "tableNoteNoCount": "sadece tabloda bulunan karakterler",
              "combineStep": "③ İkisini bir arada okuyun",
              "combineNote": "anlam, çiftin nasıl okunduğudur, her bir karakterin anlamı değil"
            },
            "caption": "Adayların daraltıldığı sıra budur. Önce hanja seçmek ve sesleri eşleştirmek değil, seslerin önce gelmesi ve yalnızca o sesle okunması gereken karakterlerin aday olması gerektiğidir."
          }
        ]
      },
      {
        "title": "O sesle kaydedilebilecek yalnızca hanja toplayın",
        "blocks": [
          {
            "p": "Resmi isim-hanja tablosunda, her karakter için isimlerde kullanıldığında belirlenmiş bir okuma vardır. Yalnızca **지** ve **은** olarak okunması gereken karakterler aday olur. Anlam ne kadar iyi olursa olsun, okuma eşleşmiyorsa, o hanja o isim için olamaz."
          },
          {
            "p": "Adayları seçme aralığı, Yüksek Mahkeme tablosundaki {characterTotal} karakterdir. Bu tabloda bulunmayan karakterler hiç sunulmaz — gösterilse bile, kaydedilemezler."
          },
          {
            "p": "Yüksek Mahkeme tarafından yayımlanan tabloda bulunan karakter sayısı, bundan biraz fazladır. Tablo ayrıca, ekranlarda ve belgelerde düzgün bir şekilde görüntülenemeyen **standart karakter kodlarına sahip olmayan karakterleri** de içerir, bu nedenle bu karakterler adaylardan çıkarılmıştır. O karakterlerle kaydedilip kaydedilemeyeceğini ilgili otorite ile kontrol etmelisiniz."
          }
        ]
      },
      {
        "title": "Anlam, tek bir karakter değil, bir kombinasyon olarak görülür",
        "blocks": [
          {
            "p": "Her bir bireysel karakterin anlamının iyi olması ile iki karakterin bir araya geldiğinde okunan anlamının iyi olması farklıdır. İsimler kombinasyonlar olarak okunur, bu nedenle kombinasyonları birlikte inceliyoruz. Dahil etmek veya kaçınmak istediğiniz belirli anlamlar varsa, bunlar dikkate alınır."
          },
          {
            "p": "Bir nesil karakteri kullanıyorsanız, o karakter sabittir ve kalan pozisyonlardan kombinasyonlar aranır. Aile adı (성) resmi isim-hanja tablosu tarafından kısıtlanmadığı için ayrı bir şekilde ele alınır."
          }
        ]
      },
      {
        "title": "Kaçınılması gereken gelenekleri belirtiriz, ancak onları kaldırmayız",
        "blocks": [
          {
            "p": "Geleneksel olarak kaçınılması gereken bir karakter adaylar arasında yer alıyorsa, onu kaldırmıyoruz, ancak nedenini de gösteriyoruz. Bu bir gelenek meselesidir, yasa değil ve tamamen girdi ekranından hariç tutmayı seçebilirsiniz. Daha fazla ayrıntı için [Geleneksel Olarak Kaçınılan Hanja](/guide/avoid) kısmına bakın."
          }
        ]
      },
      {
        "title": "Ayrıca dışlama nedenlerini de bildiriyoruz",
        "blocks": [
          {
            "p": "Belirli karakterlerin adaylardan neden çıkarıldığını gösteriyoruz. Sadece seçilenleri gösterirsek, \"neden bu?\" bilemezsiniz. O hece için kullanılabilir karakter kalmadığında, o hece için dışlamayı kaldırır ve adayları gösteririz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sonuçları nasıl okuyacağınız",
        "blocks": [
          {
            "p": "Adaylar **perspektiflerdir, sıralama değil.** İlk olan en iyi isim demek değildir; farklı perspektiflerden seçilirler. Anlamların kombinasyonuna öncelik verenler, alışılmadık karakterleri seçenler ve tarafsızlığı vurgulayanlar yan yana sunulur. Cevap, hangi perspektifi değerli bulduğunuza bağlı olarak değişir."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Standartlarımız",
    "title": "Kullanmıyoruz",
    "summary": "Toplam şans veya sayısal puanlar atamıyoruz, ayrıca darbe sayıları da kullanmıyoruz. Beş element yalnızca ek bir eksen olarak kullanılır. İşte nedenleri.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Toplam şans veya sayısal puan atamama nedenleri",
        "blocks": [
          {
            "p": "İsimlere puan vermek için toplam şans veya sayısal puanlar atayan yöntemler vardır. Naming-Link bu sayıları sağlamaz. Nedenleri dört katmanlıdır."
          },
          {
            "p": "**Öncelikle, tek bir standart yoktur.** Şans hesaplama yöntemleri okula göre değişir ve aynı isim bir standartla olumlu, diğer bir standartla olumsuz değerlendirilebilir. Hangisinin doğru olduğunu belirleyecek bir temelimiz yok. Birini doğruymuş gibi sunmak dürüst değildir."
          },
          {
            "p": "**İkincisi, bu hesaplamalar darbe sayılarına dayanır.** Ancak, Yüksek Mahkeme verileri hiç darbe sayısı içermez. Dahası, darbe sayıları, düzenli veya basitleştirilmiş karakter olarak sayılıp sayılmadığına ve nasıl radikallerin sayıldığına bağlı olarak değişebilir. Temel sayılar kesin olarak belirlenmediğinden, bunların üzerine inşa edilen puanlar kesin olamaz."
          },
          {
            "p": "**Üçüncüsü, sayılar gerçekte olduğundan daha sağlam görünür.** \"87 puan\" dediğinde, bu ölçülen bir değer gibi okunur, geleneksel bir yorumdan ziyade. Bu isimlendirmeler, o sayıdan baskı hissedebilir, gerçekten önemli olanı (Çağırmak hoş mu? Anlam uyar mı? İstenilen dilekleri içeriyor mu?) bir kenara itebilir."
          },
          {
            "p": "**Dördüncüsü, doğrulanacak bir yol yoktur.** Bir isim ile bir kişinin hayatı arasındaki ilişki doğrulanamaz. Doğru veya yanlış denilemeyecek bir şeyi bir puana dönüştürmek, yanlış olamayacak bir sayı ile sonuçlanır, ancak bu sayı doğrulanamaz."
          },
          {
            "p": "Sadece **kanıtlanabilir olanı** kullanıyoruz. Yüksek Mahkeme resmi isim-hanja tablosu, her karakter için belirlenen okumalar ve tabloda listelenen anlamlar. Bunun yerine, bu adayın neden seçildiğine ve neden belirli karakterlerin dışlandığına dair nedenler sağlıyoruz, **puanlar yerine nedenler** gösteriyoruz."
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
            "p": "Darbe sayılarını kullanmak için, başka bir yerden sayılar elde etmemiz gerekir, ancak bu sayıların nereden geldiğini ve hangi kriterlerin kullanıldığını netleştiremiyorsak, bu, isimleri temelsiz sayılara dayanarak değerlendirmek anlamına gelir. İsimleri kanıtlanamaz değerlere dayalı olarak değerlendirmemeye karar verdik."
          }
        ]
      },
      {
        "title": "Beş elementi yalnızca referans olarak kullanıyoruz",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Bir daire içinde yer alan beş element: nesil komşular arasında akar, kontrol bir atlar",
              "wood": "ağaç",
              "fire": "ateş",
              "earth": "toprak",
              "metal": "metal",
              "water": "water",
              "saeng": "Üretim — her biri komşusunu doğurur",
              "geuk": "Kontrol — her biri atladığı öğeyi kısıtlar"
            },
            "caption": "Beş element arasındaki ilişkiler. Çember boyunca hareket etmek karşılıklı üretimi (相生) temsil ederken, birini atlayıp diğerini kısıtlamak karşılıklı kısıtlamayı (相剋) temsil eder. Bu ilişkiyi yalnızca adayları karşılaştırmak için ek bir eksen olarak kullanıyoruz."
          },
          {
            "p": "Eğer doğum ayınızı girdiyseniz, o aya dayanan beş elementin basitleştirilmiş bir referansını adayları karşılaştırmak için ek bir eksen olarak kullanıyoruz. Ancak bu, kesin bir saju analizi değildir ve **isimlerin bir kişinin kaderini veya karakterini belirlediğini iddia etmiyoruz.**"
          },
          {
            "p": "Son seçimde öncelik verdiğimiz şeyler sesler, anlam kombinasyonları, ailenin iletmek istediği değerler ve kaydedilip kaydedilemeyeceğidir. Eğer doğum ayınızı girmediyseniz, analizden beş element referansını tamamen hariç tutuyoruz — bilinmeyen bilgiler hakkında keyfi varsayımlar yapmıyoruz."
          },
          {
            "p": "Eğer kesin bir saju tabanlı analiz istiyorsanız, bunu ayrı bir detaylı raporda ele alıyoruz. Beş elementleri ücretsiz hanja eşleştirmede öncelik vermememizin nedeni, eksik doğum tarihi ve saatine dayanan beş elementlerden elde edilen yargıları kesinmiş gibi sunmak istemememizdir."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Ücretli Ürünler",
    "title": "Ücretli ürünlerde neler var?",
    "summary": "Ücretsiz olarak ne kadarının görünür olduğunu ve her ürün için ödemenin getirdiği ek özellikleri netleştiriyoruz. Fiyatlar, gerçek ürün ayarlarından alınmaktadır.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Ücretsiz olarak neler görünür?",
        "blocks": [
          {
            "p": "Bir isim oluşturmak ve sonuçları görüntülemek **ücretsizdir**. Üyelik kaydı gerektirmez. Ekranda hanja'nın eşleşen anlamlarını, Korece isimler oluşturmayı, küresel isim dönüşümünü ve Hangul telaffuz notasyonunu görebilir, önerilen sonuçları ve bunların gerekçelerini inceleyebilirsiniz."
          },
          {
            "p": "Ücretli ürünler **ekranda zaten gösterilenleri yeniden satmaz.** Daha fazla aday açar, daha fazla açıklama ekler veya saklanabilir veya iletilebilir bir format oluşturur."
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
            "p": "Eğer acele etmiyorsanız, satın almanıza gerek yok. **Reklamlar aracılığıyla açılan sonuçlar ile ödemeden elde edilenler tamamen aynıdır** — sadece beklemek meselesidir ve ödeme yapmak daha iyi adaylar sağlamaz."
          }
        ]
      },
      {
        "title": "Hanja Detayları — Üç Aşama",
        "blocks": [
          {
            "p": "Bir Hangul ismine eklemek için hanja seçme akışında üç detaylı ürün bulunmaktadır."
          },
          {
            "ul": [
              "**Maksimum 5 hanja adayı detaylı** — {priceFiveDetail}. Ekranda beş adaya kadar açıklamaları genişletebilirsiniz. PDF yoktur.",
              "**Maksimum 10 hanja adayı genişletilmiş detaylı PDF** — {priceTenDetail}. Aday sayısı on'a çıkar ve bir PDF belgesi eklenir.",
              "**Maksimum 10 hanja adayı saju ve beş elementler kapsamlı raporu** — {priceTenSaju}. Yukarıdakilere ek olarak, doğum tarihinden elde edilen saju tablosunu ve beş elementlerin güçlerini içerir, belirli bir hanja'nın o isim için neden uygun olduğunu beş elementler perspektifinden inceler."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja kendisi kamuya açık bilgilerdir",
        "blocks": [
          {
            "p": "Kullanılabilir hanja ve anlamları, Kore Yüksek Mahkemesi tarafından belirlenen resmi isim-hanja tablosundan gelmektedir ve hepsi hizmetin kılavuz belgelerinde kamuya açıktır. Ücretli ürünlerin sattığı şey hanja bilgisi değil, **seçme ve açıklama eylemidir.**"
          }
        ]
      },
      {
        "title": "Küresel Kullanıcılar için PDF'ler",
        "blocks": [
          {
            "p": "Yabancı isimleri Korece isimlere dönüştürmek veya isimleri Hangul ile yazmak için mevcut belgeler. Fiyatlar, ödeme ekranında gösterilen miktarları takip eder."
          },
          {
            "ul": [
              "**Korece İsim Premium Raporu** — 3 sayfa. Kaligrafi kapağı, ismin anlamı ve seçilme nedeni, saju ve beş elementler yorumunu içerir.",
              "**Hangul İsim Sanatı** — 2 sayfa. Kaligrafi kapağı ve telaffuz kılavuzu içerir. İsim nasıl Hangul ile yazılır ve nasıl telaffuz edilir."
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
            "p": "**Buradan itibaren, ürünler kargo içerir.** Önceki maddelerden farklı olarak, üretim ve kargo zaman alır ve bir teslimat adresi gereklidir. Kargo bilgileri yalnızca sipariş işleme için kullanılır ve yasal saklama için, işlem tamamlandıktan sonra, politika gereğince belirtilen süre sonunda imha edilecektir."
          }
        ]
      },
      {
        "title": "Satın Almadan Önce Bilinmesi Gerekenler",
        "blocks": [
          {
            "p": "**Dijital ürünler ödeme yapıldığında hemen sağlanır.** İndirme başlamadan önce istediğiniz zaman iptal edebilir ve tam bir geri ödeme alabilirsiniz, ancak indirme tamamlandıktan sonra, basit bir fikir değişikliği nedeniyle geri çekilme kısıtlanır (Elektronik Ticaret Yasası'nın 17. Maddesi, 2. Fıkrası). Bu koşul, ödeme ekranında ayrı olarak kabul edilir."
          },
          {
            "p": "**Sonuçların içeriği hakkında şikayetler geri ödeme nedeni değildir.** Ancak, belge oluşturulmadıysa, dosya açılamıyorsa veya ödeme miktarı siparişle farklıysa, yeniden düzenleme veya tam geri ödeme olarak işleme alınacaktır."
          },
          {
            "p": "Detaylı koşullar [İade Politikası](/refund-policy) ve [Fiyatlandırma Kılavuzu](/pricing) belgelerinde belirtilmiştir. Bu metin, nelerin dahil olduğunu rehberlik etmekte olup, yasal koşullar bu iki belgede önceliklidir."
          }
        ]
      }
    ]
  },
  "guide/hanja-basics": {
    "eyebrow": "Sistem",
    "title": "Resmi isim-hanja nedir?",
    "summary": "Çocuk isimleri için kullanılabilecek hanja, Yüksek Mahkeme tarafından bir tabloda belirlenmiştir. Bu tabloyun ne olduğunu ve neden oluşturulduğunu özetler.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Resmi isim-hanja nedir?",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal} karakter",
                "label": "Resmi isim-hanja"
              },
              {
                "value": "{syllableCount} hece",
                "label": "Hangul heceleri dahil"
              },
              {
                "value": "{effectiveDate}",
                "label": "Tablo referans tarihi"
              }
            ]
          },
          {
            "p": "Bir çocuğun ismi için herhangi bir karakter kullanamazsınız. **Doğum kaydı için kullanılabilecek hanja, Yüksek Mahkeme tarafından bir tabloda belirlenmiştir ve yalnızca o tabloda bulunan karakterler isimler için hanja olarak kaydedilebilir.** Buna resmi isim-hanja denir."
          }
        ]
      },
      {
        "title": "Neden oluşturulmuştur?",
        "blocks": [
          {
            "p": "On binlerce hanja vardır. Bunlar arasında bazıları hoş olmayan anlamlara sahiptir, bazıları artık kullanılmamaktadır ve bilinen okumaları yoktur, bazıları ise bilgisayarlarda hiç gösterilemez. Eğer böyle karakterler bir isimde yer alırsa, nihayetinde bu ismi bir ömür boyu kullanacak olan kişi yükü taşır. İsimler, ikamet kaydı, pasaportlar, bankalar ve okullar gibi çeşitli yerlerde farklı okunabilir veya bozulabilir, bu da bireyin kendi ismini açıklamasını gerektirir."
          },
          {
            "p": "Bu nedenle, isimlerde kullanılabilecek hanja aralığını önceden tanımlamak için bir yöntem seçilmiştir. Kısıtlayıcı bir düzenleme olmaktan çok, bir kişinin yaşamı boyunca isimlerin sorun çıkmadan kullanılmasını sağlamak için bir mekanizmadır."
          }
        ]
      },
      {
        "title": "Tanımların temeli nedir?",
        "blocks": [
          {
            "p": "Yüksek Mahkeme, gerektiğinde revize edilen resmi isim-hanja tablosunu oluşturur ve karakterler eklenir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu ekran için kullanılan materyaller",
        "blocks": [
          {
            "p": "{publisher} resmi isim-hanja verisi · {effectiveDate} itibarıyla"
          },
          {
            "p": "{characterTotal} karakter, {syllableCount} Hangul hecesini kapsamaktadır. Orijinal dosyanın hash değeri de saklanır, bu nedenle tablo değişirse, ne zaman ve neyin değiştiği kontrol edilebilir."
          }
        ]
      },
      {
        "title": "Yüksek Mahkeme tarafından açıklanan karakter sayısı, gösterdiğimizden farklıdır",
        "blocks": [
          {
            "p": "**Yüksek Mahkeme tarafından açıklanan resmi isim-hanja {announcedTotal} karakterdir, oysa sunduğumuz adaylar {characterTotal} karakterdir.** Bu farkı gizlemek için bir neden yoktur, bu nedenle bunu açıkça ifade ediyoruz."
          },
          {
            "p": "Yüksek Mahkeme'nin sorgulama verilerini kontrol ederseniz, {listedTotal} karakter içerir. Bunlar arasında, **{excludedNoStandardCode} karakter** **küresel ortak karakter kodunda (Unicode) yeri olmayan karakterlerdir.** Yüksek Mahkeme'nin sistemi, bu tür karakterleri yalnızca kendi sistemi içinde çalışan numaralarla işler ve ekranda **görüntü** olarak gösterilir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Daha fazla font eklemek sorunu çözmez",
        "blocks": [
          {
            "p": "Bir karakterin ekranda görünmesi için, **dünya tarafından kabul edilen bir numara** olması gerekir ve font, o numaraya karşılık gelen görüntüyü içerir. Numarası olmayan karakterler hiçbir fonta dahil edilemez. Ne kadar çok font eklersek ekleyelim, bu karakterler boş kareler olarak görünür."
          }
        ]
      },
      {
        "title": "Bu nedenle, adaylardan çıkarılmıştır",
        "blocks": [
          {
            "p": "**Gösterilemeyen karakterlerle listeyi doldurmak faydalı değildir.** Bu karakterlerin çoğunun anlamları da verilerimizde boş olduğundan, bu durum isimlerin anlamlarına dayalı olarak seçilmesi yöntemimizle uyumlu değildir."
          },
          {
            "p": "**Daha önemli bir neden, ismi kullanacak kişiyle ilgilidir.** Bir isim, bir kişinin yaşamı boyunca çeşitli yerlerde kaydedilecek bir değerdir. Karakter kodu olmayan karakterler, doğum kaydı tamamlandıktan sonra bile bankalar, okullar, hastaneler veya pasaport sistemlerinde girilemeyebilir veya basılamayabilir. Bu nedenle, bu tür karakterleri öneremeyiz."
          },
          {
            "p": "Ancak, **bu karakterlerin kullanılabilir olup olmadığını belirlemiyoruz.** Çünkü bunlar Yüksek Mahkeme'nin tablosundaki karakterlerdir, kayıt işlemi mümkün olabilir. Eğer gerçekten o karakteri kullanmak istiyorsanız, lütfen Yüksek Mahkeme'nin elektronik aile ilişkileri kayıt sisteminde doğrudan kontrol edin ve **ilgili otoriteden gerçek kullanılabilirlik hakkında bilgi alın.**"
          }
        ]
      },
      {
        "title": "Tabloda olmayan hanja kullanmak istiyorsanız",
        "blocks": [
          {
            "p": "Onları kullanamazsınız. Daha doğrusu, bu karakterler isim için hanja olarak kaydedilmeyecek ve isim yalnızca Hangul olarak kaydedilecektir. Hanja'yı birlikte kullanmak istiyorsanız, tablodan seçim yapmalısınız."
          },
          {
            "p": "Bu nedenle, tabloda olmayan karakterleri aday olarak sunmuyoruz. Ekranda görünen tüm hanja, doğum kaydı için gerçekten kullanılabilecek karakterlerdir. Tam liste [Resmi İsim-Hanja Tam Listesi](/guide/hanja) adresinde mevcuttur."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Liste",
    "title": "Resmi İsim Hanja Tam Listesi",
    "summary": "Doğum kaydı için kullanılabilecek hanja'yı ilk ünlüye göre düzenledik. Her karakterin isimlerde kullanıldığında belirlenen okunuşunu ve anlamını görebilirsiniz.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "İlk Ünlüye Göre Ara",
        "slot": "chosung",
        "blocks": [
          {
            "p": "Bu, Yüksek Mahkeme'nin resmi isim-hanja tablosundaki tüm {characterTotal} karakteri içermektedir. Her karakter, **isimlerde kullanıldığında okunuşunu** ve anlamını içerir. Tabloda yer almayan karakterler isim hanja olarak kaydedilemez, bu nedenle burada listelenen karakterlerden seçim yapmalısınız."
          },
          {
            "p": "Aşağıdaki butondaki iki sayı, **o ilk ünlüye sahip karakterlerin sayısını** ve **kapsanan hece sayısını** temsil eder."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Aradığınız karakter listede yoksa",
        "blocks": [
          {
            "p": "Yüksek Mahkeme tarafından açıklanan karakter sayısı {announcedTotal}, ancak bu liste {characterTotal} karakter içermektedir. **{excludedNoStandardCode} karakterlik fark, evrensel karakter kodunda yeri olmadığı için hiçbir fontta gösterilemeyen karakterlerdir.** Yüksek Mahkeme'nin sistemi, bu karakterleri görüntü olarak gösterir."
          },
          {
            "p": "Bunun nedenlerini ve bu karakterleri neden önermediğimizi [Resmi İsim Hanja Nedir?](/guide/hanja-basics) adresinde detaylandırdık. Bu karakterlerin gerçek kullanılabilirliği için ilgili otorite ile kontrol etmelisiniz."
          }
        ]
      },
      {
        "title": "Az Sayıda Karaktere Sahip İlk Ünlüler",
        "slot": "tiny",
        "blocks": [
          {
            "p": "Aşağıdaki ilk ünlüler, çok az resmi isim hanja'ya sahiptir, bu nedenle burada ayrı bir sayfa olmadan gösterilmiştir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu Listeyi Nasıl Okursunuz",
        "blocks": [
          {
            "p": "Örneğin, **伽 · 가 · 절** için, bir isimde \"伽\" kullanıldığında, **가** olarak okunur ve \"tapınak\" anlamına gelir. Aynı hanja için bile, isimlerde kullanıldığında okunuşu tablo tarafından sabitlenmiştir ve başka bir şekilde kullanılamaz."
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
  "intro": "Kullanım şartlarınızda yapılan değişiklikler — fiyatlar, politikalar — yürürlüğe girmeden önce burada yayınlanır. İçsel iyileştirmeler listelenmez: burada görünenler bilmeniz gerekenlerdir.",
  "empty": {
    "title": "Henüz bildirim yok",
    "body": "Bir şey değiştiğinde, burada görünecektir."
  },
  "effective": "{date} itibarıyla yürürlüğe girer",
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
        "Cevaplarımızın dayandığı şeyler ve kasıtlı olarak yapmadığımız şeyler hakkında bilgi, hakkında sayfasında yazılıdır."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF raporları Arapça ve Kmer için İngilizce olarak verilmektedir",
      "body": [
        "Eğer hizmeti Arapça veya Kmerce kullanıyorsanız, satın aldığınız PDF İngilizce olarak üretilmektedir. Belgelerimizi düzenleyen araç, henüz bu iki yazıda paragrafları ayarlayamamaktadır.",
        "Ekranınız kendi dilinizde kalır ve adınız belgenin içinde kendi yazı sisteminizle basılır.",
        "Aynı not, ödeme öncesinde görünür. Araç bu yazı sistemlerini desteklediğinde, burada belirteceğiz."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Ödemeler henüz açık değil",
      "body": [
        "Bir isim oluşturmak ve sonucu okumak bugün ücretsizdir ve hesap açmanıza gerek yoktur.",
        "Ücretli öğeler henüz satışta değil. Fiyatlandırma sayfasında gösterilen tutarlar, satışlar açıldığında geçerli olacaktır."
      ]
    }
  }
} satisfies NoticeCopy;
