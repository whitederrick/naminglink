import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Türkçe — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const TR_DOCS = {
  "about": {
    "eyebrow": "Hakkında",
    "title": "Naming-Link Hakkında",
    "summary": "Size Korece isimleri seçme ve anlama konusunda yardımcı oluyoruz. İşte sonuçlarımızı dayandırdığımız noktalar ve kasıtlı olarak yapmadığımız şeyler.",
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
            "p": "Saju ve beş element figürleri, **Kore lunisolar takviminden** hesaplanır ve doğum zamanı, doğum yeri için gerçek güneş zamanına göre düzeltilir. Okuma, geleneksel bir referanstır, bir tahmin değildir."
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
              "**Ödeme yapmak daha iyi bir cevap satın almaz.** Reklamla açmak ve ödeme ile açmak tam olarak aynı içeriği verir."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Hizmet 23 dilde mevcuttur. Ücretli PDF'ler, Arapça ve Khmer için İngilizce olarak verilir — PDF düzenleyici bu yazı sistemlerini desteklemez — ve bunu ödemeden önce ekranda belirtiriz."
          }
        ]
      },
      {
        "title": "İletişim",
        "blocks": [
          {
            "p": "Şirket bilgileri ve bize ulaşma yolları [iletişim sayfasında](/contact) bulunmaktadır; bunlar arasında geri ödemeler, gizlilik talepleri ve hata raporları da yer alır."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Okumalar",
    "title": "Her karakter için sabit okumalar — bir telaffuz",
    "summary": "Resmi tablo yalnızca karakterleri listelemekle kalmaz. Ayrıca, her birinin bir isimde kullanıldığında nasıl okunacağını da sabitler.",
    "backLabel": "Kılavuz",
    "sections": [
      {
        "title": "Her karakter için sabit bir okuma",
        "blocks": [
          {
            "p": "İsim-hanja tablosu yalnızca hangi karakterlerin kullanılabileceğini belirlemekle kalmaz. **Aynı zamanda her karakterin bir isimde göründüğünde nasıl okunacağını da sabitler.** O sabit okuma, kayıt için geçerlidir."
          },
          {
            "p": "Çoğu hanja'nın birkaç olası okuması vardır. Ancak bir isim, belgelerde yazılır ve yüksek sesle söylenir, bu nedenle tam olarak bir tane gerektirir. Bu nedenle, tablo her karaktere isimlerde kullanılmak üzere bir okuma atar ve başka bir okuma kaydedilemez."
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
            "p": "Ne kadar iyi bir anlam olursa olsun, okuması eşleşmeyen bir karakter o isim için kullanılamaz. Ayrıca, bir karaktere uyması için bir ismin sesini asla değiştirmiyoruz — bir isim bir ömür boyu söylenir ve ses önce belirlenir, ardından hanja gelir."
          }
        ]
      },
      {
        "title": "Soyadları bu tablonun dışındadır",
        "blocks": [
          {
            "p": "Bu genellikle yanlış anlaşılır. **Tablo, verilen ismi yönetir, soyadını değil.** Bir soyadı, aile kaydında zaten ne varsa ona uyar, bu nedenle bazı insanlar isim-hanja tablosunda olmayan karakterler kullanır."
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
    "title": "İsminizi Hangul'de nasıl yazıyoruz",
    "summary": "Yabancı bir ismi Hangul'de yazarken sesleri nasıl seçtiğimiz ve neden hanja eklemediğimiz.",
    "backLabel": "Kılavuz",
    "sections": [
      {
        "title": "Anlamı değil, sesi taşırız",
        "blocks": [
          {
            "p": "Bu hizmet, **isminizi** Hangul'de yazar. Size Korece bir isim vermez. Michael, 마이클 olur — aynı isim, Korelilerin okuyup söyleyebileceği şekilde yazılmıştır. Bunu, benzer bir anlamı olan bir Korece isimle değiştirmiyoruz."
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
            "p": "Her dilin Korece'nin eksik olduğu sesleri vardır — f, v, z, th ve Korece'nin yapmadığı sesli harf ayrımları. Bu nedenle, **bir Korece konuşanın isminizi yüksek sesle okuduğunda gerçekten söylediği şeyi** yazarız, orijinal fonetiği sembol sembol yazmak yerine. Amaç, kullanılacak yazım değil, en teknik olarak sadık olanıdır."
          },
          {
            "p": "Aynı yazım, bir ismin nereden geldiğine bağlı olarak farklılık gösterebilir, bu nedenle dilinizi ve ülkenizi soruyoruz ve o telaffuzdan hareket ediyoruz."
          }
        ]
      },
      {
        "title": "Yan yana birkaç yazım",
        "blocks": [
          {
            "p": "Tek bir doğru cevap yoktur. Orijinal sese en yakın yazım, Kore'de en yaygın olarak kullanılan yazım ve yazması en kolay olan yazım genellikle üç farklı şeydir. Bu nedenle, bunları birlikte gösteriyoruz ve neyin ayırdığını söylüyoruz."
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
            "p": "Bir transliterasyona hanja eklemiyoruz. Hanja anlam taşır ve bu akış sesle ilgilidir. Karakterleri yalnızca sese eşleştirmek, istemediğiniz bir anlamla sonuçlanabilir."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Nasıl çalışır",
    "title": "Korece bir isim nasıl oluşturuyoruz",
    "summary": "Mevcut soyadlarından seçiyoruz, ismin ne kadar kolay söylendiğini ve yazıldığını değerlendiriyoruz ve ismin ne amaçla kullanılacağını soruyoruz.",
    "backLabel": "Kılavuz",
    "sections": [
      {
        "title": "Soyadından başlıyoruz",
        "blocks": [
          {
            "p": "Kore'de soyadı önce gelir ve verilen isimlerden farklı olarak serbestçe icat edilmez — onu miras alırsınız. Bu nedenle, yalnızca Korelilerin gerçekten sahip olduğu soyadlarını öneriyoruz. Varsayılan havuzumuz, **en yaygın 20 soyadı**dır ve bunlar toplamda nüfusun yaklaşık %80'ini kapsar."
          },
          {
            "p": "Eğer kendi soyadınız, ses olarak gerçek bir Korece soyadıyla örtüşüyorsa — Wang ile 왕, Ye ile 예 — onu ilk sıraya koyuyoruz. Orijinal isminize bir bağ tutmak, rastgele seçilen bir soyadından daha değerlidir."
          },
          {
            "p": "Bir soyadını kendiniz seçebilir veya bizim önerimizi kabul edebilirsiniz. Her iki durumda da, **var olan bir soyadı olacaktır.**"
          }
        ]
      },
      {
        "title": "Söylemesi kolay, yazması kolay",
        "blocks": [
          {
            "p": "Bu, Kore'de insanların sizi gerçekten çağıracağı bir isimdir, bu nedenle kontrol ettiğimiz ilk şey, bir Korelinin onu bir kez duyup yazabilmesidir. Her seferinde hecelemek gereken bir isim, sizin değil, sizin taşıdığınız bir yük."
          },
          {
            "p": "Anlam da önemlidir. Korece verilen isimler genellikle bir anlam taşır, bu nedenle ismin ne okuduğunu ve neden seçtiğimizi size bildiriyoruz — sadece ismin kendisini değil."
          }
        ]
      },
      {
        "title": "İsmin ne amaçla kullanılacağını soruyoruz",
        "blocks": [
          {
            "p": "Üniversite belgeleri için bir isim, odanın içinde arkadaşların bağıracağı bir isimle aynı değildir veya çevrimiçi kullanacağınız bir takma adla. Ne amaçla kullanmayı planladığınızı soruyoruz ve bunu dikkate alıyoruz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu bir transliterasyon değil",
        "blocks": [
          {
            "p": "Burada **yeni bir Korece isim** öneriyoruz. Eğer mevcut isminizin Hangul'de yazılmasını istiyorsanız — Michael, 마이클 olarak — [Hangul yazım kılavuzuna](/guide/how-hangul-transliteration) bakın."
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
    "summary": "Sorular, geri ödemeler, gizlilik talepleri ve hata raporları için nasıl ulaşabileceğiniz ve şirket bilgilerimiz.",
    "backLabel": "Ana Sayfa",
    "sections": [
      {
        "title": "Bize e-posta gönderin",
        "blocks": [
          {
            "p": "**{email}** adresine yazın. İki iş günü içinde yanıtlıyoruz. Bir siparişle ilgili herhangi bir şey — ödeme, geri ödeme, almadığınız bir dosya — lütfen **sipariş numaranızı veya ödediğiniz e-postayı** ekleyin."
          },
          {
            "p": "Telefonla sorular: {customerCenter} (Kore iş saatleri)."
          }
        ]
      },
      {
        "title": "Buraya ne göndermelisiniz",
        "blocks": [
          {
            "ul": [
              "**Ödemeler ve geri ödemeler** — eğer bir belge hiç üretilmediyse veya tahsil edilen tutar siparişinizden farklıysa, tam olarak geri ödüyoruz. [geri ödeme politikası](/refund-policy) için bakın.",
              "**Gizlilik** — verilerinize erişim, düzeltme veya silme talepleri. [gizlilik politikası](/privacy) için bakın.",
              "**Düzeltmeler** — eğer bir hanja anlamı, okuması veya hesaplaması yanlış görünüyorsa, bize bildirin. Hangi ekranda olduğunuzu ve ne girdiğinizi belirtmek çok yardımcı olur.",
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
              "**Sanal satış no.** — {mailOrderNumber}",
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
  "guide/avoid": {
    "eyebrow": "Geleneksel Olarak Kaçınılan Karakterler",
    "title": "Kaçınılan Karakterler",
    "summary": "Yasal olarak yasak değildir ama bir gelenektir. Kaçınılan karakterler ve nedenleri hakkında yazdık ve bunu nasıl ele aldığımızı.",
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
                "label": "Aralarında, hala yaygın olarak kullanılan karakterler"
              }
            ]
          },
          {
            "p": "Kişisel isimler için karakterler listesine dahil olan ve **yasal olarak kabul edilen** karakterler vardır, ancak isimler için uygun görülmez."
          },
          {
            "p": "Temel düşünce, **\"aşırı anlam aslında istenmeyen bir şeydir.\"** Bu, çok değerli (珍·寶) olarak görülen karakterleri, çok güçlü bir varlık olarak görülen karakterleri (王·帝) ve bir kişinin özümseyemeyeceği kadar büyük olan, cennet veya tanrılar gibi karakterleri içerir. Bu, bir ismin kişinin önüne geçebileceğine inanarak eski bir ihtiyat duygusunu yansıtır."
          },
          {
            "p": "**Ancak, bu karakterler kullanılamaz değildir.** Bu, yasal bir yasak değil, bir gelenektir ve gelenekler bölgeye, aileye ve nesle göre değişir ve zamanla değişebilir."
          },
          {
            "p": "Aslında, derlediğimiz {avoidTotal} karakter arasında, {avoidCommonlyUsed} hala isimlerde yaygın olarak kullanılmaktadır. Kaçınılan olarak bilinen ancak yine de yaygın olarak kullanılan bu karakterlerin varlığı, bu geleneğin mutlak olmadığını gösterir."
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
              "**Kutsal Varlıklar** — Tanrılar veya ruhlar gibi kutsal alanlara atıfta bulunan karakterler",
              "**Mevsimler ve Diğerleri** — Belirli zamanlara veya durumlara bağlı karakterler",
              "**Hayvanlar** — Ejderhalar veya kaplanlar gibi güçlü enerjiye sahip hayvanlar",
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
        "title": "Giriş Ekranında Mevcut Seçenekler",
        "blocks": [
          {
            "p": "**Kaçınılan Karakterleri Adaylardan Hariç Tut** — Eğer etkinleştirilirse, tamamen hariç tutulurlar. Eğer devre dışı bırakılırsa, sonuçlarda \"Geleneksel Olarak Kaçınılan\" etiketi ve ekli neden ile kalırlar."
          },
          {
            "p": "**Hatta Yaygın Olarak Kullanılan Karakterleri Hariç Tut** — Bu, kaçınma listesinde olan ancak aslında yaygın olarak kullanılan karakterleri (圭·琳·玲·元·太·星·海 vb.) hariç tutar. Eğer etkinleştirilirse, adaylar önemli ölçüde azalır."
          },
          {
            "p": "Varsayılan, **hariç tutmamak ama yalnızca göstermek**tir. Eğer listeden sessizce çıkarılırsa, o karakteri kullanmak isteyenler için yokmuş gibi görünebilir."
          }
        ]
      },
      {
        "title": "Seçeneklerin Kaybolmadığından Emin Olmak",
        "blocks": [
          {
            "p": "O hece için kullanılabilir karakter kalmadığında, o hece için hariç tutmayı kaldıracağız ve adayları göstereceğiz. Hiçbir seçenek olmamasından daha iyi olduğuna inanıyoruz."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Hizmet Temeli",
    "title": "Küresel İsim Dönüşümünün Temeli Nedir?",
    "summary": "Beş perspektiften adaylar sağlıyoruz, her dilin yazı sistemlerini koruyor ve yalnızca mevcut isimleri kullanıyoruz.",
    "backLabel": "Kullanım Kılavuzu",
    "sections": [
      {
        "title": "Adaylar Beş Perspektiften Sağlanır",
        "blocks": [
          {
            "p": "Bir ismi başka bir dile çevirmenin tek bir yolu yoktur. Sesin veya anlamın korunmasına, yerel bağlamda doğal bir isim seçmeye veya bireyselliği önceliklendirmeye bağlı olarak, cevaplar farklılık gösterecektir. Bu nedenle, tek bir seçenek sunmak yerine, **beş farklı perspektiften birini sağlıyoruz.**"
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
            "p": "Beş seçenek sağlanacağından emin olunmaktadır. Tercihler kişiden kişiye değiştiği için, tek bir doğru cevap sunmaktansa seçim yapma imkanı vermenin daha iyi olduğuna inanıyoruz."
          }
        ]
      },
      {
        "title": "Her Dilin Farklı Yazım Sistemi Kuralları Vardır",
        "blocks": [
          {
            "p": "Roman harfleri kullanmayan bir dile çevirirken, o dilin yazı sisteminde yazılması gerekir. Japonca için kana ve kanji; Rusça, Moğolca ve Kazakça için Kiril; Arapça için Arap alfabesi; Tayca, Khmerce ve Hintçe için kendi yazı sistemleri kullanılır. Eğer Roman harfleriyle yazarsanız ve buna \"Japonca isim\" derseniz, o ülkede kullanılamaz."
          },
          {
            "p": "Bu nedenle, her dilin yazı sistemi için ayrı kurallarımız vardır ve sunucu, sonuçların o yazı sisteminde olduğundan emin olmak için bir kez daha kontrol eder. Soyadları atlama veya Hangul karıştırma gibi hatalar burada filtrelenir."
          }
        ]
      },
      {
        "title": "Gerçekten Kullanılan İsimleri Kullanıyoruz",
        "blocks": [
          {
            "p": "Gerçekten var olmayan ama makul görünen isimler yaratmaktan kaçınmak için, seçeneklerimizi mevcut isimlere dayandırıyoruz. İsimler belgelerde ve tanıtımlarda kullanılır, bu nedenle yerel bir kişi \"böyle bir isim yok\" düşüncesine kapılırsa, kullanılamaz."
          }
        ]
      },
      {
        "title": "Seçim ve Tanımı Ayırıyoruz",
        "blocks": [
          {
            "p": "Beş aday belirleme görevini, her bir adayı ayrıntılı olarak tanımlama görevinden ayrı olarak ele alıyoruz. Tanımın çok zaman aldığı için, o kısmı ayırarak eş zamanlı olarak oluşturuyoruz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu Neden Değiştirildi?",
        "blocks": [
          {
            "p": "Başlangıçta, beş perspektifi ayrı ayrı oluşturduk. Daha hızlıydı, ancak **aday sayısı her seferinde değişiyordu.** Her kişi adayları seçtikçe, örtüşmeler veya tutarsızlıklar oluyordu ve biri başarısız olursa, o aday tamamen kayboluyordu, bu da beş yerine yalnızca iki veya üç ile sonuçlanıyordu."
          },
          {
            "p": "Artık, aday setini ve perspektif dağılımını bir seferde belirlediğimiz için, **sayı sabit.** Bir tanım başarısız olsa bile, adaylar kalır ve kısa bilgilerle sunulur. Aynı sayının sürekli olarak olmasının, biraz daha uzun sürse de daha iyi olduğuna inanıyoruz."
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
  "intro": "Kullanım şartlarınızda yapılan değişiklikler — fiyatlar, politikalar — burada yürürlüğe girmeden önce yayınlanır. İçsel iyileştirmeler listelenmez: burada görünen, bilmeniz gerekenlerdir.",
  "empty": {
    "title": "Henüz duyuru yok",
    "body": "Bir şey değiştiğinde, burada görünecektir."
  },
  "effective": "Yürürlüğe girer {date}",
  "pager": {
    "label": "Duyuru sayfaları",
    "newer": "← Daha Yeni",
    "older": "Eski →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "İletişim ve Hakkında sayfaları artık açık",
      "body": [
        "Sorular, geri ödemeler, gizlilik talepleri ve hata raporları artık tek bir yere yönlendiriliyor. Alt kısımda iletişim sayfası, e-posta adresimizi ve şirket bilgilerini listeliyor.",
        "Cevaplarımızın neye dayandığı ve kasıtlı olarak ne yapmadığımız, hakkında sayfasında yazılıdır."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF raporları Arapça ve Khmer için İngilizce olarak verilmektedir",
      "body": [
        "Eğer hizmeti Arapça veya Khmerce kullanıyorsanız, satın aldığınız PDF İngilizce olarak üretilir. Belgelerimizi düzenleyen araç, bu iki yazı sisteminde paragrafları ayarlayamıyor.",
        "Ekran dilinizde kalır ve isminiz belgede kendi yazı sisteminizle yazılır.",
        "Aynı not, ödemeden önce görünür. Araç bu yazı sistemlerini desteklediğinde, burada belirteceğiz."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Ödemeler henüz açık değil",
      "body": [
        "Bir isim oluşturmak ve sonucu okumak bugün ücretsizdir ve hesap gerektirmez.",
        "Ücretli öğeler henüz satışta değildir. Fiyatlandırma sayfasında gösterilen tutarlar, satışlar açıldığında geçerli olacaktır."
      ]
    }
  }
} satisfies NoticeCopy;
