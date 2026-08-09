import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

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
  "guide/reading": {
    "eyebrow": "Okumalar",
    "title": "Sabit okumalar — her karakter için bir telaffuz",
    "summary": "Resmi tablo yalnızca karakterleri listelemez. Ayrıca, her birinin bir isimde kullanıldığında nasıl okunacağını da sabitler.",
    "backLabel": "Kılavuz",
    "sections": [
      {
        "title": "Her karakter için sabit bir okuma",
        "blocks": [
          {
            "p": "İsim-hanja tablosu yalnızca hangi karakterlerin kullanılabileceğini belirlemez. **Aynı zamanda her karakterin bir isimde göründüğünde nasıl okunacağını da sabitler.** O sabit okuma, kayıt için geçerli olandır."
          },
          {
            "p": "Çoğu hanja'nın birkaç olası okuması vardır. Ancak bir isim, belgelerde yazılır ve yüksek sesle söylenir, bu nedenle tam olarak bir tane gerektirir. Bu nedenle tablo, her karaktere isimlerde kullanılmak üzere okumasını atar ve başka bir okuma kaydedilemez."
          }
        ]
      },
      {
        "title": "Bu yüzden ses önce gelir",
        "blocks": [
          {
            "p": "Bu nedenle Naming-Link, hanja aramadan önce sesi sabitler. İsim \"지은\" ise, anlam yalnızca **지** okumasına atanan karakterler ve **은** okumasına atanan karakterler arasında seçilebilir."
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
            "p": "Bu genellikle yanlış anlaşılır. **Tablo, verilen ismi yönetir, soyadını değil.** Bir soyadı, aile kaydında zaten ne varsa ona uyar, bu nedenle bazı insanlar isim-hanja tablosunda olmayan karakterler kullanır."
          },
          {
            "p": "Bu nedenle Naming-Link, soyadı hanja'yı farklı bir şekilde ele alır. Sadece size bir soyadı bulmanıza yardımcı oluruz ve tablo dışındaki karakteri olan insanlar için doğrudan bir tane girme alanı bırakırız. İki heceli soyadlar, Namgung ve Seonwoo gibi, aynı şekilde girilir."
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
  "guide/avoid": {
    "eyebrow": "Gelenekler",
    "title": "Geleneksel Olarak Kaçınılan Karakterler",
    "summary": "Bu yasal olarak yasak değildir ama bir gelenektir. Kaçınılanların nedenleri ve nasıl ele alındığı hakkında yazdık.",
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
            "p": "Kişisel isimler için karakterler listesine dahil olan ve **yasal olarak kabul edilebilir** olan ancak isimler için uygun görülmeyen karakterler vardır."
          },
          {
            "p": "Temel düşünce, **\"aşırı anlam aslında istenmeyen bir şeydir.\"** Bu, bir ismin kişinin önüne geçebileceğine inanarak eski bir ölçülülük anlayışını yansıtır."
          },
          {
            "ul": [
              "珍·寶 — çok değerli olarak görülen karakterler",
              "王·帝 — çok fazla güç taşıyan karakterler",
              "cennet ve tanrılar — bir kişinin temsil etmesi için çok büyük"
            ]
          },
          {
            "p": "**Ancak, bu karakterler kullanılamaz değildir.** Yasal bir yasak değil ama bir gelenektir ve gelenekler bölgeye, aileye ve nesle göre değişir ve zamanla değişebilir."
          },
          {
            "p": "Aslında, derlediğimiz {avoidTotal} karakter arasında, {avoidCommonlyUsed} hala isimlerde yaygın olarak kullanılmaktadır. Kaçınılan olarak bilinenlerin yine de yaygın olarak kullanılması, bu geleneğin mutlak olmadığını göstermektedir."
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
              "**Hazine ve Nesneler** — Zenginlik veya nesneleri doğrudan ifade eden karakterler",
              "**Cennet ve Doğa** — Güneş, ay ve gökyüzü gibi bir kişinin temsil etmesi için çok büyük görülen şeyler",
              "**Krallar ve Soylular** — Kral veya imparator gibi statüyü belirten karakterler",
              "**Kutsal Varlıklar** — Tanrılar veya ruhlar gibi kutsal alanları ifade eden karakterler",
              "**Mevsimler ve Diğerleri** — Belirli zamanlar veya durumlarla bağlantılı karakterler",
              "**Hayvanlar** — Ejderhalar veya kaplanlar gibi güçlü enerjiye sahip olduğu düşünülen hayvanlar",
              "**Aşırılık** — Aşırı büyük veya taşan anlamlara sahip olarak görülen karakterler"
            ]
          }
        ]
      },
      {
        "title": "Karakterleri Kendiniz Ekleyebilir veya Çıkarabilirsiniz",
        "blocks": [
          {
            "p": "Bu karakterleri keyfi olarak silmiyoruz. **İsimlendirenin bunlarla nasıl başa çıkacağını seçmesi için giriş ekranında iki seçenek sağladık.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Giriş Ekranında Mevcut Olan Seçenekler",
        "blocks": [
          {
            "p": "**Kaçınılan Karakterleri Adaylardan Hariç Tut** — Eğer etkinleştirilirse, tamamen hariç tutulur. Eğer devre dışı bırakılırsa, sonuçlarda \"Geleneksel Olarak Kaçınılan\" etiketi ve neden ile birlikte kalır."
          },
          {
            "p": "**Hatta Yaygın Olarak Kullanılan Karakterleri Hariç Tut** — Bu, kaçınılma listesinde olan ancak aslında yaygın olarak kullanılan karakterleri hariç tutar (圭·琳·玲·元·太·星·海 vb.). Eğer etkinleştirilirse, adaylar önemli ölçüde azalır."
          },
          {
            "p": "Varsayılan olarak, **hariç tutmamak ama yalnızca göstermek** şeklindedir. Eğer listeden sessizce çıkarılırsa, o karakteri kullanmak isteyenler için var olmadığı gibi görünebilir."
          }
        ]
      },
      {
        "title": "Seçeneklerin Kaybolmadığından Emin Olmak",
        "blocks": [
          {
            "p": "Eğer o hece için kullanılabilir karakter kalmadıysa, o hece için hariç tutmayı kaldıracağız ve adayları göstereceğiz. Hiç seçenek olmamasından daha iyi olduğunu düşünüyoruz."
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
            "p": "Bir ismi başka bir dile çevirmenin tek bir yolu yoktur. Sesin mi yoksa anlamın mı korunacağına bağlı olarak, yerel bağlamda doğal bir isim seçmek veya bireyselliği önceliklendirmek gibi cevaplar farklılık gösterecektir. Bu nedenle, tek bir seçenek sunmak yerine, **beş farklı perspektiften birini sağlıyoruz.**"
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
            "p": "Beş seçenek sağlanacağından emin olunmaktadır. Tercihler kişiden kişiye değiştiğinden, birini doğru cevap olarak sunmaktansa seçim yapma imkanı vermenin daha iyi olduğunu düşünüyoruz."
          }
        ]
      },
      {
        "title": "Her Dilin Farklı Yazım Sistemi Kuralları Vardır",
        "blocks": [
          {
            "p": "Roman harfleri kullanmayan bir dile çevirirken, o dilin alfabesinde yazılması gerekir. Japonca için kana ve kanji; Rusça, Moğolca ve Kazakça için Kiril; Arapça için Arap alfabesi; Tayca, Kmerce ve Hintçe için kendi alfabeleri kullanılır. Eğer Roman harfleriyle yazarsanız ve buna \"Japonca isim\" derseniz, o ülkede kullanılamaz."
          },
          {
            "p": "Bu nedenle, her dilin yazım sistemi için ayrı kurallarımız vardır ve sunucu sonuçların o yazım sisteminde olduğundan emin olmak için bir kez daha kontrol eder. Soyadlarını atlama veya Hangul karıştırma gibi hatalar burada filtrelenir."
          }
        ]
      },
      {
        "title": "Gerçekten Kullanılan İsimleri Kullanıyoruz",
        "blocks": [
          {
            "p": "Bu ülkede var olmayan ama makul görünen isimler yaratmaktan kaçınmak için, seçeneklerimizi mevcut isimlere dayandırıyoruz. İsimler belgelerde ve tanıtımlarda kullanılır, bu nedenle yerel bir kişi \"böyle bir isim yok\" düşüncesine kapılırsa, bu isim kullanılamaz."
          }
        ]
      },
      {
        "title": "Seçimi ve Tanımı Ayırıyoruz",
        "blocks": [
          {
            "p": "Beş aday belirleme görevini, her bir adayı detaylı bir şekilde tanımlama görevinden ayrı olarak yürütüyoruz. Tanım çok zaman aldığından, bu kısmı ayırarak aynı anda oluşturuyoruz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu Neden Değiştirildi?",
        "blocks": [
          {
            "p": "Başlangıçta, beş perspektifi ayrı ayrı oluşturuyorduk. Daha hızlıydı, ancak **aday sayısı her seferinde değişiyordu.** Her kişi adayları seçtikçe, örtüşmeler veya tutarsızlıklar oluyordu ve biri başarısız olursa, o aday tamamen kayboluyordu, bu da beş yerine sadece iki veya üç adayla sonuçlanıyordu."
          },
          {
            "p": "Artık, aday setini ve perspektif dağılımını bir seferde belirlediğimiz için, **sayı sabit.** Bir tanım başarısız olsa bile, adaylar kalır ve kısa bilgilerle sunulur. Aynı sayının sürekli olarak olmasının, biraz daha uzun sürse bile daha iyi olduğunu düşünüyoruz."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Hizmet Temeli",
    "title": "Hanja anlamlarının eşleştirilmesinin temeli nedir?",
    "summary": "Öncelikle, sesler sabitlenir ve o sesle kaydedilebilecek hanja'lar toplanır, anlam ise tek bir karakter yerine bir kombinasyon olarak görülür.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Öncelikle sesleri sabitleyin",
        "blocks": [
          {
            "p": "\"지은\" üzerinde karar verdiyseniz, o zaman **지** ve **은** değişmez. Hanja ile eşleşmesi için ismin sesini değiştirmiyoruz. Bir isim, ömür boyu çağrılan bir şeydir ve sesin önce sabitlenmesi, ardından hanja'nın gelmesi gerektiğine inanıyoruz."
          },
          {
            "figure": "hanja-match-flow",
            "labels": {
              "soundStep": "① Sesi sabitleyin",
              "soundNote": "Bir karakterle uyum sağlamak için asla değiştirmiyoruz",
              "tableStep": "② Resmi tabloya göre filtreleyin",
              "tableBody": "sadece o okumayı atan karakterler",
              "tableNote": "tablodaki toplam {total} karakterden",
              "tableNoteNoCount": "sadece tabloda bulunan karakterler",
              "combineStep": "③ İkisini bir arada okuyun",
              "combineNote": "anlam, çiftin nasıl okunduğudur, her bir karakterin anlamı değil"
            },
            "caption": "Adayların daraltıldığı sıra budur. Önce hanja seçmek ve sesleri eşleştirmek değil, seslerin önce gelmesi ve yalnızca o sesle okunması belirlenen karakterlerin aday olması gerektiğidir."
          }
        ]
      },
      {
        "title": "O sesle kaydedilebilecek yalnızca hanja'ları toplayın",
        "blocks": [
          {
            "p": "Resmi isim-hanja tablosunda, her karakter için isimlerde kullanıldığında belirlenmiş bir okuma vardır. Sadece **지** ve **은** olarak okunması belirlenen karakterler aday olur. Anlam ne kadar iyi olursa olsun, okuma eşleşmiyorsa, o hanja o isim için olamaz."
          },
          {
            "p": "Adayları seçme aralığı, Yüksek Mahkeme tablosundaki {characterTotal} karakterdir. Bu tabloda bulunmayan karakterler hiç sunulmaz — gösterilse bile, kaydedilemezler."
          },
          {
            "p": "Yüksek Mahkeme tarafından yayımlanan tabloda bulunan karakter sayısı, bunun biraz üzerindedir. Tablo ayrıca, ekranlarda ve belgelerde düzgün bir şekilde görüntülenemeyen **standart karakter kodlarına sahip olmayan karakterleri** de içerir, bu nedenle bu karakterler adaylardan hariç tutulmuştur. Bu karakterlerle kaydedilip kaydedilemeyeceğini ilgili otoriteye kontrol etmelisiniz."
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
            "p": "Bir nesil karakteri kullanıyorsanız, o karakter sabitlenir ve kalan pozisyonlardan kombinasyonlar aranır. Aile adı (성) resmi isim-hanja tablosuyla kısıtlanmadığı için ayrı bir şekilde ele alınır."
          }
        ]
      },
      {
        "title": "Kaçınılması gereken gelenekleri kaldırmadan belirtiriz",
        "blocks": [
          {
            "p": "Geleneksel olarak kaçınılması gereken bir karakter adaylar arasında yer alıyorsa, onu kaldırmıyoruz, ancak yanında nedenini gösteriyoruz. Bu bir gelenek meselesidir, yasayla ilgili değildir ve tamamen girdi ekranından hariç tutmayı seçebilirsiniz. Daha fazla ayrıntı için [Geleneksel Olarak Kaçınılan Hanja](/guide/avoid) sayfasına bakın."
          }
        ]
      },
      {
        "title": "Hariç tutma nedenlerini de bildiriyoruz",
        "blocks": [
          {
            "p": "Belirli karakterlerin adaylardan neden hariç tutulduğunu gösteriyoruz. Sadece seçilenleri gösterirsek, \"bu neden?\" sorusunu bilemezsiniz. O hece için kullanılabilir karakter kalmadığında, o hece için hariç tutmayı kaldırır ve adayları gösteririz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sonuçları nasıl okuyacağınız",
        "blocks": [
          {
            "p": "Adaylar **perspektiflerdir, sıralama değil.** İlk olan en iyi isim demek değildir; farklı perspektiflerden seçilirler. Anlamların kombinasyonuna öncelik verenler, nadir karakterleri seçenler ve tarafsızlığı vurgulayanlar yan yana sunulur. Hangi perspektifi değerli bulduğunuza bağlı olarak cevap değişir."
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
  "guide/hanja-basics": {
    "eyebrow": "Sistem",
    "title": "Resmi isim-hanja nedir?",
    "summary": "Çocuk isimleri için kullanılabilecek hanja, Yüksek Mahkeme tarafından bir tabloda belirlenmiştir. Bu tablo nedir ve neden oluşturulmuştur özetlenmiştir.",
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
            "p": "Bir çocuğun adı için herhangi bir karakter kullanamazsınız. **Doğum kaydı için kullanılabilecek hanja, Yüksek Mahkeme tarafından bir tabloda belirlenmiştir ve yalnızca o tabloda bulunan karakterler isimler için hanja olarak kaydedilebilir.** Buna resmi isim-hanja denir."
          }
        ]
      },
      {
        "title": "Neden bu şekilde belirlenmiştir?",
        "blocks": [
          {
            "p": "On binlerce hanja vardır. Bunlar arasında bazıları hoş olmayan anlamlara sahiptir, bazıları artık kullanılmamaktadır ve bilinen okumaları yoktur, bazıları ise bilgisayarlarda hiç görüntülenemez. Böyle karakterler bir isimde yer alırsa, nihayetinde bu ismi ömür boyu kullanacak olan kişi yükü taşımak zorunda kalır. İsimler, ikamet kaydı, pasaportlar, bankalar ve okullar gibi çeşitli yerlerde farklı şekilde kırılabilir veya okunabilir, bu da bireyin kendi ismini açıklamasını gerektirir."
          },
          {
            "p": "Bu nedenle, isimlerde kullanılabilecek hanja aralığını önceden tanımlama yöntemi seçilmiştir. Kısıtlayıcı bir düzenleme olmaktan çok, bir kişinin yaşamı boyunca sorun yaşamadan isimlerin kullanılmasını sağlamak için bir mekanizma gibidir."
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
            "p": "{characterTotal} karakter, {syllableCount} Hangul hecesini kapsamaktadır. Orijinal dosyanın hash değeri de saklanmaktadır, bu nedenle tablo değişirse, ne zaman ve neyin değiştiği kontrol edilebilir."
          }
        ]
      },
      {
        "title": "Yüksek Mahkeme tarafından açıklanan karakter sayısı, gösterdiğimizden farklıdır",
        "blocks": [
          {
            "p": "**Yüksek Mahkeme tarafından açıklanan resmi isim-hanja {announcedTotal} karakterdir, oysa sunduğumuz adaylar {characterTotal} karakterdir.** Bu farkı gizlemenin bir nedeni yoktur, bu nedenle bunu açıkça ifade ediyoruz."
          },
          {
            "p": "Yüksek Mahkeme'nin sorgulama verilerini kontrol ederseniz, {listedTotal} karakter içermektedir. Bunlar arasında, **{excludedNoStandardCode} karakter** **küresel ortak karakter kodunda (Unicode) yeri olmayan karakterlerdir.** Yüksek Mahkeme'nin sistemi, bu tür karakterleri yalnızca kendi sisteminde çalışan numaralarla işler ve ekran üzerinde karakterler yerine **görüntü** olarak gösterir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Daha fazla yazı tipi eklemek sorunu çözmez",
        "blocks": [
          {
            "p": "Bir karakterin ekranda görünmesi için, **dünya tarafından kabul edilen bir numaraya** sahip olması gerekir ve yazı tipi, o numaraya karşılık gelen görüntüyü içerir. Numarası olmayan karakterler herhangi bir yazı tipine dahil edilemez. Ne kadar çok yazı tipi eklersek ekleyelim, bu karakterler boş kareler olarak görünmeye devam edecektir."
          }
        ]
      },
      {
        "title": "Bu nedenle, adaylardan çıkarılmışlardır",
        "blocks": [
          {
            "p": "**Görüntülenemeyen karakterlerle listeyi doldurmak faydalı değildir.** Bu karakterlerin çoğunun anlamları da verilerimizde boş olduğundan, bu durum isimlerin anlamlarına dayalı olarak seçilmesi yöntemimizle uyumlu değildir."
          },
          {
            "p": "**Daha önemli bir neden, ismi kullanacak olan kişidedir.** Bir isim, bir kişinin yaşamı boyunca çeşitli yerlerde kaydedilecek bir değerdir. Karakter kodu olmayan karakterler, doğum kaydı tamamlandıktan sonra bile bankalar, okullar, hastaneler veya pasaportlar için sistemlere girilemeyebilir veya basılamayabilir. Bu nedenle, bu tür karakterleri öneremeyiz."
          },
          {
            "p": "Ancak, **bu karakterlerin kullanılabilir olup olmadığını belirlemiyoruz.** Çünkü bunlar Yüksek Mahkeme'nin tablosundaki karakterlerdir, kayıt işlemi mümkün olabilir. Eğer gerçekten o karakteri kullanmak istiyorsanız, lütfen Yüksek Mahkeme'nin elektronik aile ilişkisi kayıt sisteminde doğrudan kontrol edin ve **ilgili otoriteyle gerçek kullanılabilirlik hakkında bilgi alın.**"
          }
        ]
      },
      {
        "title": "Tabloda yer almayan hanja kullanmak istiyorsanız",
        "blocks": [
          {
            "p": "Onları kullanamazsınız. Daha doğru bir ifadeyle, bu karakterler isim için hanja olarak kaydedilmeyecek ve isim yalnızca Hangul olarak kaydedilecektir. Hanja ile birlikte kullanmak istiyorsanız, tablodan seçim yapmalısınız."
          },
          {
            "p": "Bu nedenle, tabloda yer almayan karakterleri aday olarak sunmuyoruz. Ekranda görünen tüm hanja, doğum kaydı için gerçekten kullanılabilecek karakterlerdir. Tam liste [Resmi İsim-Hanja Tam Listesi](/guide/hanja) adresinde mevcuttur."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Liste",
    "title": "Resmi İsim Hanja Tam Listesi",
    "summary": "Doğum kaydı için kullanılabilecek hanja'yı ilk ünlüye göre düzenledik. İsimlerde kullanıldığında her karakterin belirlenen okumasını ve anlamını görebilirsiniz.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "İlk Ünlüye Göre Arama",
        "slot": "chosung",
        "blocks": [
          {
            "p": "Bu, Yüksek Mahkeme'nin resmi isim-hanja tablosundaki tüm {characterTotal} karakteri içermektedir. Her karakter, **isimlerde kullanıldığında okumasını** ve anlamını içerir. Tabloda yer almayan karakterler isim hanja olarak kaydedilemeyeceğinden, burada listelenen karakterlerden seçim yapmalısınız."
          },
          {
            "p": "Aşağıdaki butondaki iki sayı, **o ilk ünlüye sahip karakterlerin sayısını** ve **kapsanan hece sayısını** temsil etmektedir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Aradığınız karakter listede yoksa",
        "blocks": [
          {
            "p": "Yüksek Mahkeme tarafından açıklanan karakter sayısı {announcedTotal} iken, bu liste {characterTotal} karakter içermektedir. **{excludedNoStandardCode} karakterin farkı, evrensel karakter kodunda yeri olmadığı için hiçbir yazı tipinde görüntülenemeyenlerdir.** Yüksek Mahkeme'nin sistemi, bu karakterleri görüntü olarak gösterir."
          },
          {
            "p": "Bunun nedenlerini ve bu karakterleri neden önermediğimizi [Resmi İsim Hanja Nedir?](/guide/hanja-basics) adresinde detaylandırdık. Bu karakterlerin gerçek kullanılabilirliği hakkında ilgili otoriteyle kontrol etmelisiniz."
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
            "p": "**伽 · 가 · 절** için, bir isimde \"伽\" kullanıldığında, **가** olarak okunur ve \"tapınak\" anlamına gelir. Aynı hanja için bile, isimlerde kullanıldığında okuma tablo tarafından sabitlenmiştir ve başka bir şekilde kullanılamaz."
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
