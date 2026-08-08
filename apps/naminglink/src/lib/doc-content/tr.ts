import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Türkçe — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const TR_DOCS = {
  "about": {
    "eyebrow": "Hakkında",
    "title": "Naming-Link Hakkında",
    "summary": "Size Korece isimler seçmenize ve anlamınıza yardımcı oluyoruz. İşte sonuçlarımızı dayandırdığımız noktalar ve kasıtlı olarak yapmadığımız şeyler.",
    "backLabel": "Ana Sayfa",
    "sections": [
      {
        "title": "Ne yapıyoruz",
        "blocks": [
          {
            "p": "Naming-Link, size **Korece isimler seçme ve anlama** konusunda yardımcı olur — bir çocuğun isminin arkasındaki hanja, yurtdışında kullanılacak bir Korece isim, kendi isminizin Hangul yazımı ve mühür veya basılı rapor gibi hatıralar."
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
            "p": "Hanja, **Kore Yüksek Mahkemesi'nin resmi isim-hanja tablosundan** gelir. Her karakterin isimlerde kullanılmak üzere belirlenmiş bir okunuşu vardır ve tablo dışındaki karakterler kaydedilemez. Biz bu listeye ekleme yapmıyoruz veya favori karakterler seçmiyoruz."
          },
          {
            "p": "Saju ve beş element figürleri, **Kore lunisolar takviminden** hesaplanır; doğum zamanı, doğum yerinin gerçek güneş saatine göre düzeltilir. Okuma, geleneksel bir referanstır, tahmin değildir."
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
              "**Ödeme yapmak daha iyi bir cevap almanızı sağlamaz.** Reklamla açma ve ödeme ile açma, tam olarak aynı içeriği verir."
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
  "guide/reading": {
    "eyebrow": "Okumalar",
    "title": "Belirli okumalar — her karakter için bir telaffuz",
    "summary": "Resmi tablo yalnızca karakterleri listelemekle kalmaz. Ayrıca, her birinin bir isimde kullanıldığında nasıl okunacağını da belirler.",
    "backLabel": "Kılavuz",
    "sections": [
      {
        "title": "Her karakter için belirli bir okuma",
        "blocks": [
          {
            "p": "İsim-hanja tablosu yalnızca hangi karakterlerin kullanılabileceğini belirlemekle kalmaz. **Aynı zamanda her karakterin bir isimde göründüğünde nasıl okunacağını da belirler.** O belirli okuma, kayıtta esas alınır."
          },
          {
            "p": "Çoğu hanja'nın birkaç olası okuması vardır. Ancak bir isim belgelerde yazılır ve yüksek sesle söylenir, bu nedenle tam olarak bir tane gerektirir. Bu nedenle, tablo her karaktere isimlerde kullanılmak üzere bir okuma atar ve başka bir okuma kaydedilemez."
          }
        ]
      },
      {
        "title": "Bu yüzden ses önce gelir",
        "blocks": [
          {
            "p": "Bu nedenle Naming-Link sesi belirlemeden önce hanja arar. İsim \"지은\" ise, anlam yalnızca **지** okumasına atanan karakterler ve **은** okumasına atanan karakterler arasından seçilebilir."
          },
          {
            "p": "Ne kadar iyi bir anlam olursa olsun, okuması uymayan bir karakter o isim için kullanılamaz. Ayrıca, bir karakterle uyum sağlamak için bir ismin sesini asla değiştirmeyiz — bir isim bir ömür boyu söylenir ve ses önce belirlenir, hanja ise ardından gelir."
          }
        ]
      },
      {
        "title": "Soyadları bu tablonun dışındadır",
        "blocks": [
          {
            "p": "Bu genellikle yanlış anlaşılır. **Tablo, verilen ismi yönetir, soyadını değil.** Bir soyadı, aile kaydında zaten bulunanı takip eder, bu nedenle bazı insanlar isim-hanja tablosunda olmayan karakterleri kullanır."
          },
          {
            "p": "Bu nedenle Naming-Link soyadı hanja'yı farklı bir şekilde ele alır. Sadece size bir soyadı bulmanıza yardımcı oluyoruz ve tablo dışındaki karakteri olan insanlar için doğrudan bir alan bırakıyoruz. İki heceli soyadları, Namgung ve Seonwoo gibi, aynı şekilde girilir."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Nasıl çalışır",
    "title": "İsminizi Hangul'da nasıl yazıyoruz",
    "summary": "Yabancı bir ismi Hangul'da yazarken sesleri nasıl seçtiğimiz ve neden hanja eklemediğimiz.",
    "backLabel": "Kılavuz",
    "sections": [
      {
        "title": "Anlamı değil, sesi taşırız",
        "blocks": [
          {
            "p": "Bu hizmet, **isminizi** Hangul'da yazar. Size Korece bir isim vermez. Michael, 마이클 olur — aynı isim, Korelilerin okuyup söyleyebileceği şekilde yazılmıştır. Bunu, benzer bir anlamı olan bir Korece isimle değiştirmiyoruz."
          },
          {
            "p": "Eğer istediğiniz bir Korece isimse, **bu farklı bir hizmettir.** Biri isminizi korur ve yalnızca yazı tipini değiştirir; diğeri yeni bir isim önerir."
          }
        ]
      },
      {
        "title": "Korece'de bulunmayan sesler",
        "blocks": [
          {
            "p": "Her dilin Korece'nin eksik olduğu sesleri vardır — f, v, z, th ve Korece'nin yapmadığı sesli harf ayrımları. Bu nedenle, isminizi yüksek sesle okurken **bir Korece konuşanın gerçekten söylediği** şeyi yazarız, orijinal fonetiği sembol sembol transkribe etmek yerine. Amaç, kullanılacak yazım değil, en teknik olarak sadık olanıdır."
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
            "p": "Tek bir doğru cevap yoktur. Orijinal sese en yakın yazım, Kore'de en yaygın olarak kullanılan yazım ve yazması en kolay olan yazım genellikle üç farklı şeydir. Bu nedenle, bunları bir arada gösteriyoruz ve neyin ayırdığını söylüyoruz."
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
            "p": "Bir transliterasyona hanja eklemiyoruz. Hanja anlam taşır ve bu akış sesle ilgilidir. Karakterleri yalnızca sese eşleştirmek, istemediğiniz bir anlamla sonuçlanmanıza neden olabilir."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Nasıl çalışır",
    "title": "Korece bir isim nasıl oluşturuyoruz",
    "summary": "Mevcut soyadlarından seçiyoruz, ismin ne kadar kolay söylendiğini ve yazıldığını değerlendiriyoruz ve ismin ne amaçla kullanıldığını soruyoruz.",
    "backLabel": "Kılavuz",
    "sections": [
      {
        "title": "Soyadı ile başlıyoruz",
        "blocks": [
          {
            "p": "Kore'de soyadı önce gelir ve verilen isimlerden farklı olarak serbestçe icat edilmez — onu miras alırsınız. Bu nedenle, yalnızca Korelilerin gerçekten sahip olduğu soyadlarını öneriyoruz. Varsayılan havuzumuz, **en yaygın 20 soyadı**dır; bunlar toplamda nüfusun yaklaşık %80'ini kapsar."
          },
          {
            "p": "Eğer kendi soyadınız, ses olarak gerçek bir Korece soyadıyla örtüşüyorsa — Wang ile 왕, Ye ile 예 — onu önce koyarız. Orijinal isminize bir bağ tutmak, rastgele seçilen bir soyadından daha değerlidir."
          },
          {
            "p": "Bir soyadını kendiniz seçebilir veya bize öneri yapmamızı sağlayabilirsiniz. Her iki durumda da, **var olan bir soyadı olacaktır.**"
          }
        ]
      },
      {
        "title": "Söylemesi kolay, yazması kolay",
        "blocks": [
          {
            "p": "Bu, Kore'de insanların sizi gerçekten çağıracağı bir isimdir, bu nedenle ilk kontrol ettiğimiz şey, bir Korelinin bunu bir kez duyup yazıp yazamayacağıdır. Her seferinde hecelemek gereken bir isim, sizin taşıdığınız bir yük, bizim değil."
          },
          {
            "p": "Anlam da önemlidir. Korece verilen isimler genellikle bir anlam taşır, bu nedenle ismin ne okuduğunu ve neden seçtiğimizi size söyleriz — sadece ismin kendisini değil."
          }
        ]
      },
      {
        "title": "İsmin ne amaçla kullanıldığını soruyoruz",
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
            "p": "Burada **yeni bir Korece isim** öneriyoruz. Eğer mevcut isminizin Hangul'da yazılmasını istiyorsanız — Michael, 마이클 olarak — [Hangul yazım kılavuzuna](/guide/how-hangul-transliteration) bakın."
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
    "title": "Bize ulaşın",
    "summary": "Sorular, iadeler, gizlilik talepleri ve hata raporları için bize nasıl ulaşacağınız, şirket bilgilerimizle birlikte.",
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
              "**Ödemeler ve iadeler** — eğer bir belge hiç üretilmediyse veya tahsil edilen tutar siparişinizden farklıysa, tam olarak iade ederiz. [İade politikası](/refund-policy) için bakın.",
              "**Gizlilik** — verilerinize erişim, düzeltme veya silme talepleri. [Gizlilik politikası](/privacy) için bakın.",
              "**Düzeltmeler** — eğer bir hanja anlamı, okuması veya hesaplaması yanlış görünüyorsa, bize bildirin. Hangi ekranda bulunduğunuzu ve ne girdiğinizi belirtmek çok yardımcı olur.",
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
            "p": "Mesajınızda bir isim veya doğum tarihi eklemeniz gerekmez. Ücretsiz sonuçlar asla sunucularımızda saklanmaz, bu nedenle onları tekrar bulamayız — bir sipariş numarası yeterlidir."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Gelenekler",
    "title": "Kaçınılması Gereken Karakterler",
    "summary": "Yasal olarak yasak değildir ama bir gelenektir. Kaçınılan karakterler ve nedenleri hakkında yazdık ve bunlarla nasıl başa çıktığımızı.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Yasal Olarak Kabul Edilen Karakterler",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} karakter",
                "label": "Derlenmiş Kaçınılan Karakterler"
              },
              {
                "value": "{avoidCommonlyUsed} karakter",
                "label": ""
              }
            ]
          },
          {
            "p": "Kişisel isimler için karakter listesine dahil olan ve **yasal olarak kabul edilen** karakterler vardır, ancak isimler için uygun görülmez."
          },
          {
            "p": "Temel düşünce, **\"aşırı anlam aslında istenmeyen bir şeydir.\"** Bu, çok değerli (珍·寶), çok güçlü bir varlık olarak görülen (王·帝) ve bir kişinin özümseyemeyeceği kadar büyük olan, cennet veya tanrılar gibi karakterleri içerir. Bu, bir ismin kişinin önüne geçebileceği eski bir ölçü duygusunu yansıtır."
          },
          {
            "p": "**Ancak, bu karakterler kullanılamaz değildir.** Bu yasal bir yasak değil, bir gelenektir ve gelenekler bölgeye, aileye ve nesle göre değişir ve zamanla değişebilir."
          },
          {
            "p": "Aslında, derlediğimiz {avoidTotal} karakter arasında, {avoidCommonlyUsed} hala isimlerde yaygın olarak kullanılmaktadır. Kaçınıldığı bilinse de hala yaygın olarak kullanılması, bu geleneğin mutlak olmadığını gösterir."
          }
        ]
      },
      {
        "title": "Hangi Kategoriler Var?",
        "blocks": [
          {
            "p": "Şu anda derlenen karakterler yedi kategoriye ayrılmıştır."
          },
          {
            "ul": [
              "**Hazine ve Nesneler** — Zenginlik veya nesneleri doğrudan ifade eden karakterler",
              "**Cennet ve Doğa** — Güneş, ay ve gökyüzü gibi bir kişinin özümseyemeyeceği kadar büyük olan şeyler",
              "**Krallar ve Soylular** — Kral veya imparator gibi statüyü belirten karakterler",
              "**Kutsal Varlıklar** — Tanrılar veya ruhlar gibi kutsal alanları ifade eden karakterler",
              "**Mevsimler ve Diğerleri** — Belirli zamanlara veya durumlara bağlı karakterler",
              "**Hayvanlar** — Ejderhalar veya kaplanlar gibi güçlü enerjiye sahip hayvanlar",
              "**Aşırılık** — Aşırı büyük veya taşan anlamlara sahip karakterler"
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
        "title": "Giriş Ekranında Mevcut Seçenekler",
        "blocks": [
          {
            "p": "**Kaçınılan Karakterleri Adaylardan Hariç Tut** — Eğer etkinleştirilirse, tamamen hariç tutulurlar. Eğer devre dışı bırakılırsa, sonuçlarda \"Geleneksel Olarak Kaçınılan\" etiketi ile birlikte kalırlar."
          },
          {
            "p": "**Hatta Yaygın Olarak Kullanılan Karakterleri Hariç Tut** — Bu, kaçınılma listesinde olan ancak aslında yaygın olarak kullanılan karakterleri hariç tutar (圭·琳·玲·元·太·星·海 vb.). Eğer etkinleştirilirse, adaylar önemli ölçüde azalır."
          },
          {
            "p": "Varsayılan, **hariç tutmamak ama yalnızca göstermek**. Eğer listeden sessizce çıkarılırsa, o karakteri kullanmak isteyenler için yokmuş gibi görünebilir."
          }
        ]
      },
      {
        "title": "Seçeneklerin Kaybolmadığından Emin Olmak",
        "blocks": [
          {
            "p": "O hece için kullanılabilir karakter kalmadığında, o hece için hariç tutmayı kaldırırız ve adayları gösteririz. Hiçbir seçenek olmamasının daha iyi olduğuna inanıyoruz."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Hizmet Temeli",
    "title": "Küresel İsim Dönüşümünün Temeli Nedir?",
    "summary": "Beş perspektiften adaylar sağlıyoruz, her dilin yazı sistemlerini koruyarak ve yalnızca mevcut isimleri kullanarak.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Adaylar Beş Perspektiften Sağlanır",
        "blocks": [
          {
            "p": "Bir ismi başka bir dile çevirmenin tek bir yolu yoktur. Sesin veya anlamın korunmasına göre, yerel bağlamda doğal bir isim seçmek veya bireyselliği önceliklendirmek gibi, cevaplar farklılık gösterecektir. Bu nedenle, tek bir seçenek sunmak yerine, **beş farklı perspektiften birini sağlıyoruz.**"
          },
          {
            "ul": [
              "**Ses Koruma Seçeneği** — Orijinal ismin sesini mümkün olduğunca korur",
              "**Anlam Çeviri Seçeneği** — İsimdeki anlamı o dilin ismine çevirir",
              "**Ses ve Anlam Uzlaşma Seçeneği** — Her birinden yarım alır",
              "**Yerel Otantik Seçenek** — O kültürel bağlamda gerçekten yaygın olarak kullanılan isimleri seçer",
              "**Bireysellik ve Markalaşma Seçeneği** — Akılda kalıcı ve ayırt edici isimleri önceliklendirir"
            ]
          },
          {
            "p": "Beş seçenek sağlanması garanti edilmektedir. Tercihler kişiden kişiye değiştiği için, birini doğru cevap olarak sunmaktansa, seçim yapma imkanı vermenin daha iyi olduğuna inanıyoruz."
          }
        ]
      },
      {
        "title": "Her Dilin Farklı Yazım Sistemi Kuralları Vardır",
        "blocks": [
          {
            "p": "Roman harfleri kullanmayan bir dile çevrildiğinde, o dilin yazı sisteminde yazılmalıdır. Japonca için kana ve kanji; Rusça, Moğolca ve Kazakça için Kiril; Arapça için Arap alfabesi; Tayca, Khmerce ve Hintçe için kendi yazı sistemleri kullanılır. Eğer Roman harfleriyle yazarsanız ve buna \"Japonca isim\" derseniz, o ülkede kullanılamaz."
          },
          {
            "p": "Bu nedenle, her dilin yazı sistemi için ayrı kurallarımız vardır ve sunucu, sonuçların o yazı sisteminde olduğundan emin olmak için bir kez daha kontrol eder. Soyadların atlanması veya Hangul'ün karıştırılması gibi hatalar burada filtrelenir."
          }
        ]
      },
      {
        "title": "Gerçekten Kullanılan İsimleri Kullanıyoruz",
        "blocks": [
          {
            "p": "Gerçekten var olmayan ama makul görünen isimler yaratmaktan kaçınmak için, seçeneklerimizi mevcut isimlere dayandırıyoruz. İsimler belgelerde ve tanıtımlarda kullanılır, bu nedenle yerel bir kişi \"böyle bir isim yok\" düşüncesine kapılırsa, o isim kullanılamaz."
          }
        ]
      },
      {
        "title": "Seçimi ve Açıklamayı Ayırıyoruz",
        "blocks": [
          {
            "p": "Beş aday belirleme görevini, her adayın detaylı açıklamasını yapma görevinden ayrı olarak ele alıyoruz. Açıklama çok zaman aldığından, bu kısmı ayrı tutarak eş zamanlı olarak oluşturuyoruz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Neden Bu Değiştirildi?",
        "blocks": [
          {
            "p": "Başlangıçta, beş perspektifi ayrı ayrı oluşturduk. Daha hızlıydı, ancak **aday sayısı her seferinde değişiyordu.** Her kişi adayları seçerken, örtüşmeler veya tutarsızlıklar oluyordu ve biri başarısız olursa, o aday tamamen kayboluyordu, bu da beş yerine yalnızca iki veya üç adayla sonuçlanıyordu."
          },
          {
            "p": "Artık, aday setini ve perspektif dağılımını bir seferde belirlediğimiz için, **sayı sabit.** Bir açıklama başarısız olsa bile, adaylar kalır ve kısa bilgilerle sunulur. Aynı sayının sürekli olarak olmasının, biraz daha uzun sürse bile daha iyi olduğuna inanıyoruz."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Hizmet Temeli",
    "title": "Hanja anlamlarını eşleştirme temeli nedir?",
    "summary": "Öncelikle sesler belirlenir ve yalnızca o sesle kaydedilebilecek hanja toplanır ve anlam, tek bir karakter yerine bir kombinasyon olarak değerlendirilir.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Öncelikle sesleri belirleyin",
        "blocks": [
          {
            "p": "\"지은\" olarak karar verdiyseniz, **지** ve **은** değişmez. Hanja ile eşleşmesi için ismin sesini değiştirmiyoruz. Bir isim, bir ömür boyu çağrılır ve sesin önce belirlenmesi gerektiğine inanıyoruz, ardından hanja gelir."
          },
          {
            "figure": "hanja-match-flow",
            "caption": "Adayların daraltıldığı sıradır. Hanja'yı önce seçip sesleri eşleştirmek değil, seslerin önce gelmesi ve yalnızca o sesle okunması gereken karakterlerin aday olmasıdır."
          }
        ]
      },
      {
        "title": "Yalnızca o sesle kaydedilebilecek hanja toplayın",
        "blocks": [
          {
            "p": "Resmi isim-hanja tablosunda, her karakterin isimlerde kullanıldığında belirlenmiş bir okuması vardır. Yalnızca **지** ve **은** olarak okunması gereken karakterler aday olur. Anlam ne kadar iyi olursa olsun, okuma eşleşmiyorsa, o hanja o isim için olamaz."
          },
          {
            "p": "Adayları seçme aralığı, Yüksek Mahkeme tablosundaki {characterTotal} karakterdir. Bu tabloda olmayan karakterler hiç sunulmaz — gösterilse bile, kaydedilemezler."
          },
          {
            "p": "Yüksek Mahkeme tarafından yayımlanan tabloda bulunan karakter sayısı, bu sayıdan biraz fazladır. Tablo ayrıca, ekranlarda ve belgelerde düzgün bir şekilde görüntülenemeyen **standart karakter kodu olmayan karakterleri** de içerir, bu nedenle bu karakterler adaylardan hariç tutulmuştur. Bu karakterlerle kaydedilip kaydedilemeyeceğini ilgili otoriteden kontrol etmelisiniz."
          }
        ]
      },
      {
        "title": "Anlam, tek bir karakter değil, bir kombinasyon olarak değerlendirilir",
        "blocks": [
          {
            "p": "Her bir bireysel karakterin anlamının iyi olması ve iki karakterin bir araya geldiğinde okunan anlamının iyi olması farklıdır. İsimler kombinasyonlar olarak okunur, bu nedenle kombinasyonları birlikte inceliyoruz. Dahil etmek veya kaçınmak istediğiniz belirli anlamlar varsa, bunlar dikkate alınır."
          },
          {
            "p": "Eğer bir nesil karakteri kullanıyorsanız, o karakter sabittir ve kalan pozisyonlardan kombinasyonlar aranır. Soyadı (성), resmi isim-hanja tablosuyla kısıtlanmadığı için ayrı bir şekilde ele alınır."
          }
        ]
      },
      {
        "title": "Kaçınma geleneklerini gösteriyoruz, ancak onları kaldırmıyoruz",
        "blocks": [
          {
            "p": "Eğer geleneksel olarak kaçınılması gereken bir karakter adaylar arasında yer alıyorsa, onu kaldırmıyoruz, ancak yanında nedenini gösteriyoruz. Bu bir gelenek meselesidir, yasak değil ve bunları giriş ekranından tamamen hariç tutmayı seçebilirsiniz. Daha fazla bilgi için [Geleneksel Olarak Kaçınılan Hanja](/guide/avoid) sayfasına bakın."
          }
        ]
      },
      {
        "title": "Hariç tutma nedenlerini de bildiriyoruz",
        "blocks": [
          {
            "p": "Belirli karakterlerin adaylardan neden çıkarıldığını gösteriyoruz. Sadece seçilenleri gösterirsek, \"neden bu?\" bilemezsiniz. Eğer o hece için kullanılabilir karakter kalmadıysa, o hece için hariç tutmayı kaldırırız ve adayları gösteririz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sonuçları nasıl okuyacağınız",
        "blocks": [
          {
            "p": "Adaylar **perspektiflerdir, sıralamalar değil.** İlk olan en iyi isim demek değildir; farklı perspektiflerden seçilirler. Anlam kombinasyonunu önceliklendirenler, nadir karakterleri seçenler ve tarafsızlığı vurgulayanlar yan yana sunulur. Cevap, hangi perspektifi değerli bulduğunuza bağlı olarak değişir."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Standartlarımız",
    "title": "Kullanmaktan Kaçındığımız Şeyler",
    "summary": "Toplam kehanet veya sayısal puanlar atamıyoruz, ayrıca darbe sayıları kullanmıyoruz. Beş element yalnızca ek bir eksen olarak kullanılır. İşte nedenleri.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Toplam kehanet veya sayısal puanlar atamama nedenleri",
        "blocks": [
          {
            "p": "İsimlere puan vermek için toplam kehanet veya sayısal puanlar atanmasına yönelik yöntemler vardır. Naming-Link bu sayıları sağlamaz. Nedenleri dört katmanlıdır."
          },
          {
            "p": "**İlk olarak, tek bir standart yoktur.** Kehanet hesaplama yöntemleri okula göre değişir ve aynı isim bir standartla olumlu, diğer bir standartla olumsuz değerlendirilebilir. Hangisinin doğru olduğunu belirleyecek bir temelimiz yok. Birini doğru cevap olarak sunmak dürüst değildir."
          },
          {
            "p": "**İkinci olarak, bu hesaplamalar darbe sayılarına dayanır.** Ancak, Yüksek Mahkeme verileri darbe sayılarını hiç içermez. Dahası, darbe sayıları, normal veya basitleştirilmiş karakterler olarak sayılıp sayılmadıklarına ve nasıl radikallerin sayıldığına bağlı olarak değişebilir. Temel sayılar kesin olarak belirlenmediğinden, bunların üzerine inşa edilen puanlar kesin olamaz."
          },
          {
            "p": "**Üçüncü olarak, sayılar gerçeklikten daha sağlam görünür.** \"87 puan\" dediğinde, ölçülen bir değer gibi okunur, geleneksel bir yorumdan ziyade. Bu isimlendirme, o sayıdan baskı hissedebilir, gerçekten önemli olanı (Çağırması hoş mu? Anlamı uyuyor mu? İstediğiniz dilekleri içeriyor mu?) bir kenara itebilir."
          },
          {
            "p": "**Dördüncü olarak, doğrulanamaz.** Bir isim ile bir kişinin hayatı arasındaki ilişki doğrulanamaz. Doğru veya yanlış olduğu söylenemeyen bir şeyi bir puana dönüştürmek, yanlış olamayacak bir sayı ile sonuçlanır, ancak bu sayı doğrulanamaz."
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
            "p": "Darbe sayılarını kullanmak için, başka bir yerden sayıları elde etmemiz gerekir, ancak bu sayıların nereden geldiğini ve hangi kriterlerin kullanıldığını netleştiremiyorsak, bu, temelsiz sayılara dayanarak isimleri yargılamak anlamına gelir. Temelsiz değerlere dayanarak isimleri değerlendirmemeye karar verdik."
          }
        ]
      },
      {
        "title": "Beş elementi yalnızca referans olarak kullanıyoruz",
        "blocks": [
          {
            "figure": "five-elements",
            "caption": "Beş element arasındaki ilişkiler. Çember boyunca hareket etmek karşılıklı üretimi (相生) temsil ederken, birini atlamak ve baskı yapmak karşılıklı kısıtlamayı (相剋) temsil eder. Bu ilişkiyi yalnızca adayları karşılaştırmak için ek bir eksen olarak kullanıyoruz."
          },
          {
            "p": "Doğum ayınızı girdiyseniz, o ay temelinde beş elementlerin basitleştirilmiş bir referansını kullanıyoruz, ancak bu kesin bir saju analizi değildir ve **isimlerin bir kişinin kaderini veya karakterini belirlediğini iddia etmiyoruz.**"
          },
          {
            "p": "Son seçimde öncelik verdiğimiz şeyler sesler, anlam kombinasyonları, ailenin iletmek istediği değerler ve gerçekten kaydedilebilir olup olmadığıdır. Eğer doğum ayınızı girmediyseniz, beş element referansını analizden tamamen hariç tutarız — bilinmeyen bilgiler hakkında keyfi varsayımlarda bulunmayız."
          },
          {
            "p": "Kesin bir saju tabanlı analiz istiyorsanız, bunu ayrı bir detaylı raporda kapsıyoruz. Beş elementleri önceliklendirmememizin nedeni, eksik bir doğum tarihi ve saatine dayanan beş elementlerden elde edilen yargıları kesinmiş gibi sunmak istemememizdir."
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
  "intro": "Kullanım koşullarınızdaki değişiklikler — fiyatlar, politikalar — burada yürürlüğe girmeden önce yayınlanır. İçsel iyileştirmeler listelenmez: burada görünenler bilmeniz gerekenlerdir.",
  "empty": {
    "title": "Henüz duyuru yok",
    "body": "Bir şey değiştiğinde, burada görünecektir."
  },
  "effective": "Yürürlüğe girer {date}",
  "pager": {
    "label": "Duyuru sayfaları",
    "newer": "← Daha Yeni",
    "older": "Daha Eski →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "İletişim ve Hakkında sayfaları artık açık",
      "body": [
        "Sorular, iadeler, gizlilik talepleri ve hata raporları artık tek bir yere yönlendiriliyor. Alt kısımda iletişim sayfası, e-posta adresimizi ve şirket bilgilerini listeliyor.",
        "Cevaplarımızın neye dayandığı ve kasıtlı olarak ne yapmadığımız, hakkında sayfasında yazılıdır."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF raporları Arapça ve Khmer için İngilizce olarak verilir",
      "body": [
        "Eğer hizmeti Arapça veya Khmerce kullanıyorsanız, satın aldığınız PDF İngilizce olarak üretilir. Belgelerimizi düzenleyen araç, bu iki yazı sisteminde henüz paragrafları ayarlayamıyor.",
        "Ekran dilinizde kalır ve isminiz belgenin içinde kendi yazı tipinizle basılır.",
        "Aynı not, ödeme öncesinde görünür. Araç bu yazı sistemlerini desteklediğinde, burada belirteceğiz."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Ödemeler henüz açık değil",
      "body": [
        "Bir isim oluşturmak ve sonucu okumak bugün ücretsizdir ve hesap gerekmez.",
        "Ücretli öğeler henüz satışta değildir. Fiyatlandırma sayfasında gösterilen tutarlar, satışlar açıldığında geçerli olacaklardır."
      ]
    }
  }
} satisfies NoticeCopy;
