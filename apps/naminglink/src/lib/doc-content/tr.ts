import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Türkçe — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const TR_DOCS = {
  "about": {
    "eyebrow": "Hakkında",
    "title": "Naming-Link Hakkında",
    "summary": "Korece isimleri seçmenize ve anlamınıza yardımcı oluyoruz. İşte sonuçlarımızı dayandırdığımız noktalar ve bilerek yapmadığımız şeyler.",
    "backLabel": "Ana Sayfa",
    "sections": [
      {
        "title": "Ne yapıyoruz",
        "blocks": [
          {
            "p": "Naming-Link, **Korece isimleri seçmenize ve anlamınıza** yardımcı olur — bir çocuğun isminin arkasındaki hanja, yurtdışında kullanılacak bir Korece isim, kendi adınızın Hangul yazımı ve mühür veya basılı rapor gibi hatıralar."
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
            "p": "Saju ve beş-element figürleri, **Kore lunisolar takviminden** hesaplanır ve doğum zamanı, doğum yeri için gerçek güneş zamanına göre düzeltilir. Okuma, geleneksel bir referanstır, tahmin değildir."
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
              "**Gelecek tahmin etmiyoruz.** Burada hiçbir şey şans, zenginlik veya koruma vaat etmez.",
              "**Adınızı saklamıyoruz.** Ücretsiz sonuçlar asla sunucularımıza yazılmaz ve ücretli belgeler, dosyanın bir kopyasını saklamadan teslim edilir.",
              "**Ödeme, daha iyi bir cevap almanızı sağlamaz.** Bir reklamla açmak ve bir ödeme ile açmak tam olarak aynı içeriği verir."
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
            "p": "Şirket bilgileri ve bize nasıl ulaşacağınız [iletişim sayfasında](/contact) bulunmaktadır; bu, iadeler, gizlilik talepleri ve hata raporlarını içerir."
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
            "p": "İsim-hanja tablosu yalnızca hangi karakterlerin kullanılabileceğini belirlemez. **Aynı zamanda, her karakterin bir isimde göründüğünde nasıl okunacağını da sabitler.** Bu sabit okuma, kaydın dayandığı şeydir."
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
            "p": "Bu nedenle Naming-Link, hanja aramadan önce sesi sabitler. İsim \"지은\" ise, anlam yalnızca **지** okumasına atanan karakterler ve **은** okumasına atanan karakterler arasından seçilebilir."
          },
          {
            "p": "Ne kadar iyi bir anlam olursa olsun, okuması uymayan bir karakter o isim için kullanılamaz. Ayrıca, bir karakterle uyum sağlamak için bir ismin sesini asla değiştirmiyoruz — bir isim bir ömür boyu söylenir ve ses önce belirlenir, hanja ardından gelir."
          }
        ]
      },
      {
        "title": "Soyadlar bu tablonun dışındadır",
        "blocks": [
          {
            "p": "Bu genellikle yanlış anlaşılır. **Tablo, verilen ismi yönetir, soyadını değil.** Bir soyadı, aile kaydında zaten ne varsa ona uyar, bu nedenle bazı insanlar isim-hanja tablosunda olmayan karakterleri kullanır."
          },
          {
            "p": "Bu nedenle Naming-Link, soyadı hanja'yı farklı şekilde ele alır. Sadece bir soyadı bulmanıza yardımcı oluyoruz ve tablo dışındaki karakteri olan insanlar için doğrudan bir alan bırakıyoruz. İki heceli soyadlar, Namgung ve Seonwoo gibi, aynı şekilde girilir."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Nasıl çalışır",
    "title": "Adınızı Hangul'da nasıl yazıyoruz",
    "summary": "Yabancı bir ismi Hangul'da yazarken sesleri nasıl seçtiğimiz ve neden hanja eklemediğimiz.",
    "backLabel": "Kılavuz",
    "sections": [
      {
        "title": "Ses taşırız, anlamı değil",
        "blocks": [
          {
            "p": "Bu hizmet, **adınızı** Hangul'da yazar. Size bir Korece isim vermez. Michael, 마이클 olur — aynı isim, Korelilerin okuyup söyleyebileceği şekilde yazılmıştır. Bunu, benzer bir anlamı olan bir Korece isimle değiştirmiyoruz."
          },
          {
            "p": "Eğer istediğiniz bir Korece ismi ise, **bu farklı bir hizmettir.** Biri adınızı korur ve yalnızca yazı tipini değiştirir; diğeri yeni bir isim önerir."
          }
        ]
      },
      {
        "title": "Korece'de olmayan sesler",
        "blocks": [
          {
            "p": "Her dilin Korece'nin eksik olduğu sesler vardır — f, v, z, th ve Korece'nin yapmadığı ünlü ayrımları. Bu nedenle, adınızı yüksek sesle okuduğunda **bir Korece konuşucunun gerçekten söylediği** şeyi yazarız, orijinal fonetiği sembol sembol transkribe etmek yerine. Amaç, kullanılacak yazım değil, en teknik olarak sadık olanıdır."
          },
          {
            "p": "Aynı yazım, bir ismin nereden geldiğine bağlı olarak farklılık gösterebilir, bu nedenle dilinizi ve ülkenizi soruyoruz ve o telaffuzdan hareket ediyoruz."
          }
        ]
      },
      {
        "title": "Birden fazla yazım, yan yana",
        "blocks": [
          {
            "p": "Tek bir doğru cevap yoktur. Orijinal sese en yakın yazım, Kore'de en yaygın olarak kullanılan yazım ve yazması en kolay olan yazım genellikle üç farklı şeydir. Bu nedenle, bunları birlikte gösteriyoruz ve ayıran şeyleri söylüyoruz."
          },
          {
            "p": "Eğer hiçbiri doğru gelmiyorsa, istediğiniz ses hakkında bir ipucu ekleyebilir ve tekrar çalıştırabilirsiniz — örneğin, belirli bir hecenin farklı yazılması gerektiğini."
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
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Nasıl çalışır",
    "title": "Korece ismi nasıl oluşturuyoruz",
    "summary": "Mevcut soyadlar arasından seçiyoruz, ismin ne kadar kolay söylendiğini ve yazıldığını değerlendiriyoruz ve ismin ne için olduğunu soruyoruz.",
    "backLabel": "Kılavuz",
    "sections": [
      {
        "title": "Aile adıyla başlıyoruz",
        "blocks": [
          {
            "p": "Kore'de aile adı önce gelir ve verilen adlar gibi serbestçe icat edilmez — onu miras alırsınız. Bu nedenle yalnızca Korelilerin gerçekten sahip olduğu soyadlarını öneriyoruz. Varsayılan havuzumuz **en yaygın 20 soyadı** içerir ve bunlar toplamda nüfusun yaklaşık %80'ini kapsar."
          },
          {
            "p": "Eğer kendi soyadınız bir gerçek Kore soyadı ile ses uyumu içindeyse — Wang ile 왕, Ye ile 예 — o soyadı önce gelir. Orijinal adınıza bir bağ kurmak, rastgele seçilen bir soyadından daha değerlidir."
          },
          {
            "p": "Bir soyadı kendiniz seçebilir veya bizim önerimizi alabilirsiniz. Her iki durumda da **mevcut bir soyadı** olacaktır."
          }
        ]
      },
      {
        "title": "Söylemesi kolay, yazması kolay",
        "blocks": [
          {
            "p": "Bu, Kore'deki insanların sizi gerçekten çağıracağı bir isimdir, bu yüzden ilk kontrol ettiğimiz şey, bir Korelinin onu bir kez duyup yazıp yazamayacağıdır. Her seferinde hecelemek zorunda olduğunuz bir isim, sizin taşıdığınız bir yük, bizim değil."
          },
          {
            "p": "Anlam da önemlidir. Koreli verilen adlar genellikle bir anlam taşır, bu yüzden ismin ne şekilde okunduğunu ve neden bunu seçtiğimizi size bildiriyoruz — sadece ismin kendisini değil."
          }
        ]
      },
      {
        "title": "İsmin ne için olduğunu soruyoruz",
        "blocks": [
          {
            "p": "Üniversite belgeleri için bir isim, arkadaşların bir odanın içinde bağıracağı bir isimle veya çevrimiçi kullanacağınız bir takma adla aynı değildir. Onu nasıl kullanmayı planladığınızı soruyoruz ve bunu dikkate alıyoruz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu bir transliterasyon değil",
        "blocks": [
          {
            "p": "Burada **yeni bir Kore ismi** öneriyoruz. Mevcut isminizin Hangul ile yazılmasını istiyorsanız — Michael olarak 마이클 — [Hangul heceleme kılavuzuna](/guide/how-hangul-transliteration) bakın."
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
    "summary": "Sorular, iade, gizlilik talepleri ve hata raporları için nasıl ulaşabileceğinizi, şirket bilgilerimizle birlikte.",
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
              "**Ödemeler ve iadeler** — eğer bir belge hiç üretilmediyse veya tahsil edilen miktar siparişinizden farklıysa, tam olarak iade yapıyoruz. [İade politikası](/refund-policy) için bakın.",
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
              "**İşletme kayıt no.** — {businessNumber}",
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
            "p": "Mesajınızda bir isim veya doğum tarihi eklemeniz gerekmez. Ücretsiz sonuçlar asla sunucularımızda saklanmaz, bu yüzden onları tekrar bulamayız — bir sipariş numarası yeterlidir."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Gelenekler",
    "title": "Kaçınılması Gereken Karakterler",
    "summary": "Yasal olarak yasak değildir ama bir gelenektir. Kaçınılması gereken karakterler ve nedenleri hakkında yazdık ve bunu nasıl ele aldığımızı.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Yasal Olarak Kabul Edilen Karakterler",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} karakter",
                "label": "Derlenen Kaçınılan Karakterler"
              },
              {
                "value": "{avoidCommonlyUsed} karakter",
                "label": "Aralarında, hâlâ yaygın olarak kullanılan karakterler"
              }
            ]
          },
          {
            "p": "Kişisel isimler için karakter listesine dahil olan ve **yasal olarak kabul edilen** karakterler vardır, ancak isimler için uygun görülmez."
          },
          {
            "p": "The underlying thought is that **\"excessive meaning is actually undesirable.\"** This includes characters that are considered too precious (珍 treasure, 寶 jewel), characters viewed as having too strong a presence (王 king, 帝 emperor), and those regarded as too grand for a person to embody, like heaven or deities. This reflects an old sense of restraint, believing that a name can overshadow the person."
          },
          {
            "p": "**Ancak, bu karakterler kullanılamaz değildir.** Yasal bir yasak değil, bir gelenektir ve gelenekler bölgeye, aileye ve nesle göre değişir ve zamanla değişebilir."
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
              "**Hazine ve Nesneler** — Zenginlik veya eşyaları doğrudan ifade eden karakterler",
              "**Gökler ve Doğa** — Güneş, ay ve gökyüzü gibi bir kişinin temsil etmesi için çok büyük kabul edilen şeyler",
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
        "title": "Karakterleri Kendiniz Ekleyebilir veya Çıkartabilirsiniz",
        "blocks": [
          {
            "p": "Bu karakterleri keyfi olarak silmiyoruz. **İsim verenin bunlarla nasıl başa çıkacağını seçmesi için giriş ekranında iki seçenek sunduk.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Giriş Ekranında Mevcut Olan Seçenekler",
        "blocks": [
          {
            "p": "**Kaçınılan Karakterleri Adaylardan Hariç Tut** — Eğer etkinleştirilirse, tamamen hariç tutulur. Eğer devre dışı bırakılırsa, sonuçlarda \"Geleneksel Olarak Kaçınılan\" etiketi ve ek neden ile birlikte kalır."
          },
          {
            "p": "**Hatta Yaygın Olarak Kullanılan Karakterleri Hariç Tut** — Bu, kaçınma listesinde olan ancak aslında yaygın olarak kullanılan karakterleri hariç tutar (圭·琳·玲·元·太·星·海 vb.). Eğer etkinleştirilirse, adaylar önemli ölçüde azalır."
          },
          {
            "p": "Varsayılan olarak, **hariç tutmamak ama yalnızca görüntülemek** şeklindedir. Eğer listeden sessizce çıkarılırsa, o karakteri kullanmak isteyenler için yokmuş gibi görünebilir."
          }
        ]
      },
      {
        "title": "Seçeneklerin Kaybolmadığından Emin Olma",
        "blocks": [
          {
            "p": "O hece için kullanılabilir karakter kalmadığında, o hece için hariç tutmayı kaldıracak ve adayları göstereceğiz. Hiçbir seçenek olmamasından daha iyi olduğunu düşünüyoruz."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Hizmet Temeli",
    "title": "Küresel İsim Dönüşümünün Temeli Nedir?",
    "summary": "Her dilin yazım sistemlerini koruyarak ve yalnızca mevcut isimleri kullanarak beş perspektiften adaylar sunuyoruz.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Adaylar Beş Perspektiften Sağlanır",
        "blocks": [
          {
            "p": "Bir ismi başka bir dile çevirmenin tek bir yolu yoktur. Sesin veya anlamın korunmasına bağlı olarak, yerel bağlamda doğal bir isim seçmek veya bireyselliği önceliklendirmek gibi cevaplar farklılık gösterecektir. Bu nedenle, tek bir seçenek sunmak yerine, **beş farklı perspektiften birini sunuyoruz.**"
          },
          {
            "ul": [
              "**Ses Koruma Seçeneği** — Orijinal ismin sesini mümkün olduğunca korur",
              "**Anlam Çeviri Seçeneği** — İsimdeki anlamı o dilin ismine çevirir",
              "**Ses ve Anlam Uzlaşma Seçeneği** — Her birinden yarısını alır",
              "**Yerel Gerçeklik Seçeneği** — O kültürel bağlamda gerçekten yaygın olarak kullanılan isimleri seçer",
              "**Bireysellik ve Markalaşma Seçeneği** — Akılda kalıcı ve belirgin isimleri önceliklendirir"
            ]
          },
          {
            "p": "Beş seçenek sağlanacağından emin olunmaktadır. Tercihler kişiden kişiye değiştiği için, tek bir doğru cevap sunmaktansa seçim yapma imkanı vermenin daha iyi olduğunu düşünüyoruz."
          }
        ]
      },
      {
        "title": "Her Dilin Farklı Yazım Sistemi Kuralları Vardır",
        "blocks": [
          {
            "p": "Roman harfleri kullanmayan bir dile çevirirken, o dilin alfabesiyle yazılması gerekir. Japonca için kana ve kanji; Rusça, Moğolca ve Kazakça için Kiril alfabesi; Arapça için Arap alfabesi; Tayca, Kmerce ve Hintçe için kendi yazı sistemleri gereklidir. Eğer Roman harfleriyle yazarsanız ve buna \"Japonca isim\" derseniz, o ülkede kullanılamaz."
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
            "p": "O ülkede var olmayan ancak makul görünen isimler yaratmaktan kaçınmak için, seçeneklerimizi mevcut isimlere dayandırıyoruz. İsimler belgelerde ve tanıtımlarda kullanılır, bu nedenle yerel bir kişi \"böyle bir isim yok\" derse, bu isim kullanılamaz."
          }
        ]
      },
      {
        "title": "Seçim ve Tanımı Ayırıyoruz",
        "blocks": [
          {
            "p": "Beş aday belirleme görevini, her adayın detaylı tanımını yapma görevinden ayrı olarak yürütüyoruz. Tanımın çok zaman aldığından, bu kısmı ayırarak aynı anda oluşturuyoruz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu Neden Değiştirildi?",
        "blocks": [
          {
            "p": "Başlangıçta, beş perspektifi ayrı ayrı oluşturduk. Daha hızlıydı, ancak **aday sayısı her seferinde değişiyordu.** Her kişi adayları seçtikçe, örtüşmeler veya tutarsızlıklar oluyordu ve biri başarısız olursa, o aday tamamen kayboluyor ve beş yerine yalnızca iki veya üç aday kalıyordu."
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
    "title": "Hanja anlamlarını eşleştirmenin temeli nedir?",
    "summary": "Öncelikle, sesler sabitlenir ve yalnızca o sesle kaydedilebilecek hanja toplanır, anlam ise tek bir karakter yerine bir kombinasyon olarak görülür.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Öncelikle sesleri sabitleyin",
        "blocks": [
          {
            "p": "\"지은\" olarak karar verdiyseniz, **지** ve **은** değişmez. Hanja ile eşleşmesi için ismin sesini değiştirmiyoruz. Bir isim, ömür boyu çağrılan bir şeydir ve önce sesin sabitlenmesi, ardından hanja'nın gelmesi gerektiğine inanıyoruz."
          },
          {
            "figure": "hanja-match-flow",
            "caption": "Adayların daraltıldığı sıradır. Önce hanja seçip sesleri eşleştirmek değil, seslerin önce gelmesi ve yalnızca o sesle okunması gereken karakterlerin aday olması gerektiğidir."
          }
        ]
      },
      {
        "title": "O sesle kaydedilebilecek yalnızca hanja toplayın",
        "blocks": [
          {
            "p": "Resmi isim-hanja tablosunda, her karakter için isimlerde kullanıldığında belirlenmiş bir okuma vardır. Sadece **지** ve **은** olarak okunması gereken karakterler aday olur. Anlam ne kadar iyi olursa olsun, okuma eşleşmiyorsa, o hanja o isim için olamaz."
          },
          {
            "p": "Adayları seçme aralığı, Yüksek Mahkeme tablosundaki {characterTotal} karakterdir. Bu tabloda yer almayan karakterler hiç sunulmaz — gösterilse bile, kaydedilemez."
          },
          {
            "p": "Yüksek Mahkeme tarafından yayımlanan tabloda yer alan karakter sayısı bundan biraz fazladır. Tablo ayrıca **standart karakter kodlarına sahip olmayan karakterleri** de içermektedir; bu karakterler ekranlarda ve belgelerde düzgün bir şekilde görüntülenemediği için adaylardan çıkarılmıştır. Bu karakterlerle kayıt olup olamayacağınızı ilgili otoriteye kontrol etmelisiniz."
          }
        ]
      },
      {
        "title": "Anlam, tek bir karakter değil, bir kombinasyon olarak görülmektedir",
        "blocks": [
          {
            "p": "Her bir bireysel karakterin iyi olması ile iki karakterin birleştirildiğinde okunan anlamının iyi olması farklıdır. İsimler kombinasyonlar olarak okunur, bu nedenle kombinasyonları birlikte inceliyoruz. Dahil etmek veya kaçınmak istediğiniz belirli anlamlar varsa, bunlar dikkate alınır."
          },
          {
            "p": "Bir nesil karakteri kullanıyorsanız, o karakter sabittir ve kalan pozisyonlardan kombinasyonlar aranır. Aile adı (성) resmi isim-hanja tablosuna göre kısıtlanmamıştır, bu nedenle ayrı bir şekilde ele alınır."
          }
        ]
      },
      {
        "title": "Kaçınma geleneklerini kaldırmadan belirtiriz",
        "blocks": [
          {
            "p": "Geleneksel olarak kaçınılması gereken bir karakter adaylar arasında yer alıyorsa, onu kaldırmıyoruz, ancak yanında nedenini gösteriyoruz. Bu bir gelenek meselesidir, yasa değil, ve tamamen girdi ekranından hariç tutmayı seçebilirsiniz. Daha fazla ayrıntı için [Geleneksel Olarak Kaçınılan Hanja](/guide/avoid) bölümüne bakın."
          }
        ]
      },
      {
        "title": "Adaylardan çıkarılma nedenlerini de bildiriyoruz",
        "blocks": [
          {
            "p": "Belirli karakterlerin adaylardan neden çıkarıldığını gösteriyoruz. Sadece seçilenleri gösterirsek, \"neden bu?\" sorusunu bilemezsiniz. O hece için kullanılabilir karakter kalmadığında, o hece için hariç tutmayı kaldırır ve adayları gösteririz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sonuçları nasıl okuyacağınız",
        "blocks": [
          {
            "p": "Adaylar **perspektiflerdir, sıralama değil**. İlk olanın en iyi isim olduğu anlamına gelmez; farklı perspektiflerden seçilirler. Anlam kombinasyonunu önceliklendirenler, alışılmadık karakterleri seçenler ve tarafsızlığı vurgulayanlar yan yana sunulur. Cevap, hangi perspektifi değerli bulduğunuza bağlı olarak değişir."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Standartlarımız",
    "title": "Kullanmaktan Kaçındığımız Şeyler",
    "summary": "Toplam şans veya sayısal puanlar atamıyoruz, ayrıca darbe sayıları da kullanmıyoruz. Beş element yalnızca ek bir eksen olarak kullanılır. İşte nedenleri.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Toplam şans veya sayısal puan atamama nedenleri",
        "blocks": [
          {
            "p": "İsimlere puan vermek için toplam şans veya sayısal puan atayan yöntemler vardır. Naming-Link bu sayıları sağlamaz. Nedenleri dört katmanlıdır."
          },
          {
            "p": "**Birincisi, tek bir standart yoktur.** Şans hesaplama yöntemleri okula göre değişir ve aynı isim bir standartla olumlu, diğer bir standartla olumsuz değerlendirilebilir. Hangisinin doğru olduğunu belirleyecek bir temelimiz yok. Birini doğruymuş gibi sunmak dürüst değildir."
          },
          {
            "p": "**İkincisi, bu hesaplamalar darbe sayılarına dayanır.** Ancak, Yüksek Mahkeme verileri hiç darbe sayısı içermemektedir. Dahası, darbe sayıları, karakterlerin normal veya basitleştirilmiş olarak sayılıp sayılmadığına ve köklerin nasıl sayıldığına bağlı olarak değişebilir. Temel sayılar kesin olarak belirlenmediğinden, bunların üzerine inşa edilen puanlar kesin olamaz."
          },
          {
            "p": "**Üçüncüsü, sayılar gerçeklikten daha sağlam görünür.** \"87 puan\" dediğinde, bu ölçülen bir değer gibi okunur, geleneksel bir yorumdan ziyade. Bu isimler o sayıdan baskı hissedebilir, gerçekten önemli olanı (Çağırmak hoş mu? Anlam uyuyor mu? İstenilen dilekleri içeriyor mu?) bir kenara itebilir."
          },
          {
            "p": "**Dördüncüsü, doğrulama yolu yoktur.** Bir isim ile bir kişinin yaşamı arasındaki ilişki doğrulanamaz. Doğru ya da yanlış olduğu söylenemeyen bir şeyi bir puana dönüştürmek, yanlış olamayacak bir sayıya yol açar, ancak doğrulanamaz."
          },
          {
            "p": "Sadece **kanıtlanabilir olanı** kullanıyoruz. Yüksek Mahkeme resmi isim-hanja tablosu, her karakter için belirlenen okumalar ve tabloda listelenen anlamlar. Bunun yerine, bu adayın neden seçildiği ve belirli karakterlerin neden hariç tutulduğuna dair nedenler sağlıyoruz, **puanlar yerine nedenler** gösteriyoruz."
          }
        ]
      },
      {
        "title": "Darbe sayılarını kullanmıyoruz",
        "blocks": [
          {
            "p": "Yüksek Mahkeme tarafından sağlanan resmi isim-hanja verileri darbe sayıları içermez. Aldığımız {characterTotal} karakter arasında, **hiçbir karakterin darbe sayısı yoktur.**"
          },
          {
            "p": "Darbe sayıları kullanmak için, başka bir yerden sayıları elde etmemiz gerekir, ancak bu sayıların nereden geldiğini ve hangi kriterlerin kullanıldığını netleştiremiyorsak, bu, isimleri temelsiz sayılara dayanarak değerlendirmek anlamına gelir. Kanıtlanamayan değerlere dayanarak isimleri değerlendirmemeye karar verdik."
          }
        ]
      },
      {
        "title": "Beş elementi yalnızca referans olarak kullanıyoruz",
        "blocks": [
          {
            "figure": "five-elements",
            "caption": "Beş element arasındaki ilişkiler. Daire boyunca hareket etmek karşılıklı üretimi (相生) temsil ederken, birini atlamak ve baskı yapmak karşılıklı kısıtlamayı (相剋) temsil eder. Bu ilişkiyi yalnızca adayları karşılaştırmak için ek bir eksen olarak kullanıyoruz."
          },
          {
            "p": "Doğum ayınızı girdiyseniz, o ay temelinde beş elementlerin basitleştirilmiş bir referansını kullanıyoruz. Ancak bu, kesin bir saju analizi değildir ve **isimlerin bir kişinin kaderini veya karakterini belirlediğini iddia etmiyoruz.**"
          },
          {
            "p": "Son seçimde öncelik verdiğimiz şeyler sesler, anlam kombinasyonları, ailenin iletmek istediği değerler ve gerçekten kaydedilip kaydedilemeyeceğidir. Doğum ayınızı girmediyseniz, beş element referansını analizden tamamen hariç tutuyoruz — bilinmeyen bilgiler hakkında keyfi varsayımlar yapmıyoruz."
          },
          {
            "p": "Kesin bir saju tabanlı analiz istiyorsanız, bunu ayrı bir detaylı raporda ele alıyoruz. Beş elementleri önceliklendirmememizin nedeni, eksik doğum tarihi ve saatinden türetilen beş elementlere dayanan yargıları kesinmiş gibi sunmak istemememizdir."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Ücretli Ürünler",
    "title": "Ücretli ürünlerde neler var?",
    "summary": "Ücretsiz olarak ne kadarının görünür olduğunu ve her ürün için ödeme ile hangi ek özelliklerin geldiğini netleştiriyoruz. Fiyatlar, gerçek ürün ayarlarından alınmaktadır.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Ücretsiz olarak ne görünür?",
        "blocks": [
          {
            "p": "Bir isim oluşturmak ve sonuçları görüntülemek **ücretsizdir**. Üyelik kaydı gerektirmez. Ekranda hanja'nın eşleşen anlamlarını, Korece isimler oluşturmayı, küresel isim dönüşümünü ve Hangul telaffuz notasyonunu görebilir, önerilen sonuçları ve bunların gerekçelerini izleyebilirsiniz."
          },
          {
            "p": "Ücretli ürünler **daha önce ekranda gösterilenleri yeniden satmaz.** Daha fazla aday açar, daha fazla açıklama ekler veya saklanabilir veya iletilebilir bir format oluşturur."
          }
        ]
      },
      {
        "title": "Tüm adayların tam açıklaması — {priceUnlock}",
        "blocks": [
          {
            "p": "Önerilen sonuçlar, adayları birer birer açacak şekilde yapılandırılmıştır. Reklamları görüntülerken, bir tane açılırken, bu ürün **tüm kalan adayları bir anda açar.**"
          },
          {
            "p": "Aceleniz yoksa, satın almanıza gerek yok. **Reklamlar aracılığıyla açılan sonuçlar ile ödemeden elde edilenler tamamen aynıdır** — sadece beklemek meselesidir ve ödeme yapmak daha iyi adaylar sağlamaz."
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
            "p": "Kullanılabilir hanja ve anlamları, Yüksek Mahkeme tarafından belirlenen resmi isim-hanja tablosundan gelmektedir ve hepsi hizmetin rehber belgelerinde kamuya açıktır. Ücretli ürünlerin sattığı şey hanja bilgisi değil, **isime göre seçme ve açıklama eylemidir.**"
          }
        ]
      },
      {
        "title": "Küresel Kullanıcılar için PDF'ler",
        "blocks": [
          {
            "p": "Yabancı isimlerin Korece isimlere dönüştürülmesi veya isimlerin Hangul ile yazılması için mevcut belgeler. Fiyatlar, ödeme ekranında gösterilen miktarları takip eder."
          },
          {
            "ul": [
              "**Kore İsim Premium Raporu** — 3 sayfa. Kaligrafi kapağı, ismin anlamı ve seçilme nedeni ile saju ve beş element yorumunu içerir.",
              "**Hangul İsim Sanatı** — 2 sayfa. Kaligrafi kapağı ve telaffuz kılavuzu içerir. İsim nasıl Hangul ile yazılır ve nasıl telaffuz edilir içerir."
            ]
          }
        ]
      },
      {
        "title": "İsim Mührü",
        "blocks": [
          {
            "p": "Ekranda oluşturulan ismi fiziksel bir mühre kazıyoruz ve size gönderiyoruz. Fiyatlar modele göre değişir — yuvarlak mühür {priceStampRound}, kare mühür {priceStampSquare}, ebanoz mühür {priceStampEbony}. Uluslararası gönderim de mevcuttur."
          },
          {
            "p": "**Buradan itibaren, ürünler kargo dahil.** Önceki ürünlerden farklı olarak, üretim ve kargo zaman alır ve bir teslimat adresi gereklidir. Kargo bilgileri yalnızca sipariş işleme ve yasal saklama için kullanılır ve işlem tamamlandıktan sonra, politika gereği belirtilen süre sonunda imha edilecektir."
          }
        ]
      },
      {
        "title": "Satın Almadan Önce Bilinmesi Gerekenler",
        "blocks": [
          {
            "p": "**Dijital ürünler, ödeme yapıldıktan hemen sonra sağlanır.** İndirme başlamadan önce istediğiniz zaman iptal edebilir ve tam geri ödeme alabilirsiniz, ancak indirme tamamlandıktan sonra, basit bir fikir değişikliği nedeniyle geri çekilme kısıtlanmıştır (Elektronik Ticaret Yasası Madde 17, Fıkra 2). Bu koşul, ödeme ekranında ayrı olarak kabul edilir."
          },
          {
            "p": "**Sonuçların içeriğiyle ilgili şikayetler geri ödeme nedeni değildir.** Ancak, belge oluşturulmadıysa, dosya açılamıyorsa veya ödeme tutarı siparişle farklıysa, yeniden düzenleme veya tam geri ödeme olarak işleme alınacaktır."
          },
          {
            "p": "Detaylı koşullar [Geri Ödeme Politikası](/refund-policy) ve [Fiyatlandırma Rehberi](/pricing) içinde belirtilmiştir. Bu metin, nelerin dahil olduğunu rehberlik etmekte olup, yasal koşullar bu iki belgede önceliklidir."
          }
        ]
      }
    ]
  },
  "guide/hanja-basics": {
    "eyebrow": "Sistem",
    "title": "Resmi isim-hanja nedir?",
    "summary": "Çocuk isimleri için kullanılabilecek hanja, Yüksek Mahkeme tarafından bir tabloda belirlenmiştir. Bu, tablonun ne olduğunu ve neden oluşturulduğunu özetler.",
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
            "p": "Bir çocuğun ismi için her karakteri kullanamazsınız. **Doğum kaydı için kullanılabilecek hanja, Yüksek Mahkeme tarafından bir tabloda belirlenmiştir ve yalnızca o tabloda bulunan karakterler isimler için hanja olarak kaydedilebilir.** Buna resmi isim-hanja denir."
          }
        ]
      },
      {
        "title": "Neden belirlenmiştir?",
        "blocks": [
          {
            "p": "On binlerce hanja vardır. Bunlar arasında bazıları hoş olmayan anlamlara sahiptir, bazıları artık kullanılmamaktadır ve bilinen okumaları yoktur, bazıları ise bilgisayarlarda hiç görüntülenemez. Eğer böyle karakterler bir isimde yer alırsa, nihayetinde yükü taşıyan kişi, o ismi ömür boyu kullanacak olandır. İsimler, ikamet kaydı, pasaportlar, bankalar ve okullar gibi çeşitli yerlerde farklı okunabilir veya kırılabilir, bu da bireyin kendi ismini açıklamasını gerektirir."
          },
          {
            "p": "Bu nedenle, isimlerde kullanılabilecek hanja aralığını önceden tanımlama yöntemi seçilmiştir. Kısıtlayıcı bir düzenleme olmaktan çok, bir kişinin hayatı boyunca isimlerin sorun çıkmadan kullanılmasını sağlamak için bir mekanizmadır."
          }
        ]
      },
      {
        "title": "Tanımların temeli nedir?",
        "blocks": [
          {
            "p": "Yüksek Mahkeme, resmi isim-hanja tablosunu oluşturur, gerektiğinde revize eder ve karakterler ekler."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu ekranda kullanılan materyaller",
        "blocks": [
          {
            "p": "{publisher} resmi isim-hanja verisi · {effectiveDate} itibarıyla"
          },
          {
            "p": "{characterTotal} karakter {syllableCount} Hangul hecesini kapsamaktadır. Orijinal dosyanın hash değeri de saklanmaktadır, bu nedenle tablo değişirse, ne zaman ve neyin değiştiği kontrol edilebilir."
          }
        ]
      },
      {
        "title": "Yüksek Mahkeme tarafından açıklanan karakter sayısı, gösterdiğimizden farklıdır",
        "blocks": [
          {
            "p": "**Yüksek Mahkeme tarafından açıklanan resmi isim-hanja {announcedTotal} karakterdir, oysa sunduğumuz adaylar {characterTotal} karakterdir.** Bu farkı gizlemek için bir neden yoktur, bu nedenle bunu açıkça belirtiriz."
          },
          {
            "p": "Yüksek Mahkeme'nin sorgulama verilerini kontrol ederseniz, {listedTotal} karakter içerir. Bunlar arasında, **{excludedNoStandardCode} karakter** **küresel ortak karakter kodunda (Unicode) yeri olmayan karakterlerdir.** Yüksek Mahkeme'nin sistemi, bu tür karakterleri yalnızca kendi sisteminde çalışan numaralarla işler ve ekran üzerinde karakterler yerine **görüntü** olarak gösterir."
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
        "title": "Bu nedenle, adaylardan çıkarılmışlardır",
        "blocks": [
          {
            "p": "**Görüntülenemeyen karakterlerle liste doldurmak faydalı değildir.** Bu karakterlerin çoğunun anlamları da verilerimizde boştur, bu da hizmetin isimleri anlamlara dayalı seçme yöntemine uymamaktadır."
          },
          {
            "p": "**Daha önemli bir neden, ismi kullanacak kişiyle ilgilidir.** Bir isim, bir kişinin hayatı boyunca çeşitli yerlerde kaydedilecek bir değerdir. Karakter kodu olmayan karakterler, doğum kaydı tamamlandıktan sonra bile bankalar, okullar, hastaneler veya pasaportlar için sistemlere girilemeyebilir veya yazdırılamayabilir. Bu nedenle, bu tür karakterleri öneremeyiz."
          },
          {
            "p": "Ancak, **bu karakterlerin kullanılabilir olup olmadığını belirlemiyoruz.** Çünkü bunlar Yüksek Mahkeme'nin tablosundaki karakterlerdir, kayıt mümkün olabilir. Eğer gerçekten o karakteri kullanmak istiyorsanız, lütfen Yüksek Mahkeme'nin elektronik aile ilişkileri kayıt sisteminde doğrudan kontrol edin ve **ilgili otoriteden gerçek kullanılabilirlik hakkında bilgi alın.**"
          }
        ]
      },
      {
        "title": "Tabloda olmayan hanja kullanmak istiyorsanız",
        "blocks": [
          {
            "p": "Onları kullanamazsınız. Daha doğrusu, bu karakterler isim için hanja olarak kaydedilmeyecek ve isim yalnızca Hangul olarak kaydedilecektir. Eğer hanja kullanmak istiyorsanız, tablodan seçmelisiniz."
          },
          {
            "p": "Bu nedenle, tabloda olmayan karakterleri aday olarak sunmuyoruz. Ekranda görünen tüm hanja, doğum kaydı için gerçekten kullanılabilecek karakterlerdir. Tam liste [Resmi İsim-Hanja Tam Listesi](/guide/hanja) içinde mevcuttur."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Liste",
    "title": "Resmi İsim Hanja Tam Listesi",
    "summary": "Doğum kaydı için kullanılabilecek hanja, ilk ünlüye göre düzenlenmiştir. Her karakterin isimlerde kullanıldığında belirlenen okumasını ve anlamını görebilirsiniz.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "İlk Ünlüye Göre Ara",
        "slot": "chosung",
        "blocks": [
          {
            "p": "Bu, Yüksek Mahkeme'nin resmi isim-hanja tablosundaki tüm {characterTotal} karakteri içermektedir. Her karakter, **isimlerde kullanıldığında okumasını** ve anlamını içerir. Tabloda yer almayan karakterler isim hanja olarak kaydedilemez, bu nedenle burada listelenen karakterlerden seçmelisiniz."
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
            "p": "Yüksek Mahkeme tarafından açıklanan karakter sayısı {announcedTotal}, ancak bu liste {characterTotal} karakter içermektedir. **{excludedNoStandardCode} karakterin farkı, evrensel karakter kodunda yeri olmadığı için hiçbir fontta görüntülenemeyenlerdir.** Yüksek Mahkeme'nin sistemi, bu karakterleri görüntü olarak gösterir."
          },
          {
            "p": "Bunun nedenlerini ve bu karakterleri neden önermediğimizi [Resmi İsim Hanja Nedir?](/guide/hanja-basics) içinde detaylandırdık. Bu karakterlerin gerçek kullanılabilirliği için ilgili otoriteyle kontrol etmelisiniz."
          }
        ]
      },
      {
        "title": "Çok Az Karakterli Başlangıç Ünlüleri",
        "slot": "küçük",
        "blocks": [
          {
            "p": "Aşağıdaki başlangıç ünlüleri için çok az resmi isim hanja bulunmaktadır, bu yüzden bunları ayrı bir sayfa olmadan burada gösterdik."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu Listeyi Nasıl Okuyacaksınız",
        "blocks": [
          {
            "p": "**伽 · 가 · 절** için, bir isimde \"伽\" kullanıldığında, **가** olarak okunur ve \"tapınak\" anlamına gelir. Aynı hanja için bile, isimlerdeki okuma, tablo tarafından belirlenmiştir ve başka bir şekilde kullanılamaz."
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
  "intro": "Kullanım şartlarınızda yapılan değişiklikler — fiyatlar, politikalar — burada yürürlüğe girmeden önce yayınlanır. İçsel iyileştirmeler listelenmez: burada görünenler bilmeniz gerekenlerdir.",
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
        "Sorular, iadeler, gizlilik talepleri ve hata raporları artık tek bir yere yönlendiriliyor. Alt kısımda bulunan iletişim sayfası, e-posta ve şirket bilgilerini listeler.",
        "Cevaplarımızın dayandığı şeyler ve kasıtlı olarak yapmadığımız şeyler, hakkında sayfasında yazılıdır."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF raporları Arapça ve Khmer için İngilizce olarak verilmektedir",
      "body": [
        "Eğer hizmeti Arapça veya Khmer dilinde kullanıyorsanız, satın aldığınız PDF İngilizce olarak üretilmektedir. Belgelerimizi düzenleyen araç, henüz bu iki yazıda paragrafları ayarlayamamaktadır.",
        "Ekran dilinizde kalır ve adınız belgede kendi yazınızla basılır.",
        "Aynı not, ödeme öncesinde görünmektedir. Araç bu yazıları desteklediğinde, burada belirteceğiz."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Ödemeler henüz açık değil",
      "body": [
        "Bir isim oluşturmak ve sonucu okumak bugün ücretsizdir ve hesap gerektirmez.",
        "Ücretli ürünler henüz satışta değildir. Fiyatlandırma sayfasında gösterilen tutarlar, satışlar açıldığında geçerli olacaklardır."
      ]
    }
  }
} satisfies NoticeCopy;
