import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Türkçe — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const TR_DOCS = {
  "about": {
    "eyebrow": "Giriş",
    "title": "Dreams-Link'e Giriş",
    "summary": "Bu, geleneksel bir rüya yorumlama sembol sözlüğü kullanarak rüyaları yorumlayan bir hizmettir. Ne tür bilgilerin temel alındığını ve neyin belirtilmediğini netleştirir.",
    "backLabel": "Ana Sayfaya Dön",
    "sections": [
      {
        "title": "Ne yapıyoruz?",
        "blocks": [
          {
            "p": "Dreams-Link, yazdığınız rüyalardan **geleneksel rüya yorumlamada kullanılan sembolleri** bulur ve anlamlarını gösterir. Rüyalar günlük olarak deneyimlediğimiz bir şey olduğu için, ekranda gösterilen yorumlar **ücretsizdir ve üyelik gerektirmez.**"
          },
          {
            "p": "Ücretli olarak satılan tek şeyler, **iyi bir rüyayı içeren bir görüntü (rüya kartı)** ve geleneksel olarak bir 태몽 (hamilelik habercisi rüya) olarak kabul edilen bir sembolün belirdiği arka planı yakalayan bir PDF'dir."
          }
        ]
      },
      {
        "title": "Yorumlama için temel nedir?",
        "blocks": [
          {
            "p": "Yorumlama için temel, **{symbolTotal} sembolden oluşan bir sözlüktür.** Rüya metninde sembolleri buluyoruz ve yalnızca o semboller için sözlükte kaydedilen anlamları gösteriyoruz. Bir sembolün birden fazla anlamı varsa, bağlama göre seçim yapıyoruz — örneğin, bir yılan tutmak ve ısırılmak geleneksel olarak zıt olarak kabul edilir."
          },
          {
            "p": "Arama, **sadece sabit kurallara göre** yapılır. Aynı rüya ise, aynı semboller her zaman ortaya çıkar ve yorumlama dünden bugüne değişmez."
          }
        ]
      },
      {
        "title": "Neleri söylemiyoruz?",
        "blocks": [
          {
            "p": "**Sözlükte yer almayan geleneksel anlamlar icat etmiyoruz.** Eğer sembol bulunamazsa, basitçe bulunmadığını belirtiriz ve sonuçlandırırız. O alanı makul kelimelerle doldurmak, bu hizmetin en dikkatli olduğu konudur."
          },
          {
            "p": "**Bir 태몽 sadece bir işarettir, bir yargı değildir.** Rüyada geleneksel olarak bir 태몽 olarak kabul edilen bir sembolün belirdiğini sadece bildiriyoruz. Hamilelik veya çocuğun cinsiyeti hakkında tahminde bulunmuyoruz ve bu tür iddialar için bir temel yoktur."
          },
          {
            "p": "**Sağlık, zenginlik veya kariyer hakkında kesin ifadeler vermiyoruz.** Bu, geleneksel rüya yorumlama perspektifinden bir referanstır ve tıbbi, finansal veya hukuki tavsiye değildir."
          }
        ]
      },
      {
        "title": "Yazdığınız rüyaları saklamıyoruz.",
        "blocks": [
          {
            "p": "Rüya hikayeleri, bu hizmetin aldığı en özel kısımdır. Bu nedenle, **onları saklamıyoruz.** Girdi yalnızca hesaplamalar için kullanılır ve herhangi bir sunucu kaydına kaydedilmez."
          },
          {
            "p": "**Rüyaları bir rüya günlüğü gibi toplamak için bir işlev oluşturmamaya karar verdik.** Bu değerli bir özellik, ancak en özel yazıları saklamayı gerektirir."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Yöntem daha ayrıntılı olarak [rehber belgesinde](/guide) açıklanmıştır. İş bilgileri ve iletişim detayları [bize ulaşın](/contact) kısmında bulunabilir."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Hesaplama Temeli",
    "title": "Hesaplama temeli nedir?",
    "summary": "Dreams-Link'in kullandığı tüm kuralları açıklıyoruz. Hangi sembollerin bulunduğunu, sözlükte ne yazıldığını — ekranda gösterilen yorumların nereden geldiğini kontrol edebilirsiniz.",
    "backLabel": "Ana Sayfaya Dön",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Burada yazılı tüm sayılar, **sembol sözlüğünden ve arama kurallarından doğrudan okunmaktadır.** Metni manuel olarak yazmadığımız için, sözlük genişletilirse veya kurallar değiştirilirse, bu belgelerdeki sayılar da değişecektir."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Hizmetin Temeli",
    "title": "Sembol sözlüğünün temeli nedir?",
    "summary": "Yorumların nereden geldiğini netleştirir. 215 sembolün dokuz kategoriye ayrılma kriterleri, yalnızca 24'ünün neden desteklenebileceği ve neden boşlukları doldurmadığımızı açıklar.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Sadece sözlükte yazılı olanları gösteriyoruz.",
        "blocks": [
          {
            "p": "Dreams-Link'ten gelen yorumlar, **önceden yazılmış bir sembol sözlüğünden** gelmektedir. Sağladığınız metinde sembolleri buluyoruz ve o semboller için sözlükte kaydedilen anlamları gösteriyoruz. Sözlükte yer almayan kelimeler yaratmıyoruz."
          },
          {
            "p": "Şu anda sözlükte **{symbolTotal} sembol** bulunmaktadır ve bu sembollerin toplamda **{meaningTotal} anlamı** vardır. Çoğu sembolün yalnızca bir anlamı varken, bazıları bağlama göre birden fazla anlama sahiptir."
          }
        ]
      },
      {
        "title": "Dokuz kategoriye ayrılmıştır.",
        "blocks": [
          {
            "p": "Rüyalarda görünenleri özelliklerine göre dokuz kategoriye grupladık. Parantez içindeki sayılar mevcut sayımlardır."
          },
          {
            "ul": [
              "**Nesneler**({categoryThing}) · **Hayvanlar**({categoryAnimal}) · **Doğa**({categoryNature}) — en büyük üç kategori. Geleneksel rüya yorumlaması esas olarak görünür nesneleri, hayvanları ve gökyüzü ile su unsurlarını tartışır.",
              "**Eylemler**({categoryAction}) · **Vücut**({categoryBody}) — kovalanmak veya düşmek gibi yapılanlar ve vücutta nerede, yüz veya saç gibi.",
              "**İnsanlar**({categoryPerson}) · **Yerler**({categoryPlace}) · **Renkler**({categoryColor}) · **Sayılara**({categoryNumber})"
            ]
          },
          {
            "p": "Onları kategoriye göre görüntülemek için, [sembol sözlüğünde](/dream/symbols) tam listeyi görebilirsiniz."
          }
        ]
      },
      {
        "title": "Sadece {cultureNoteTotal} desteklenebilir.",
        "blocks": [
          {
            "p": "Semboller arasında, **{cultureNoteTotal}** yanlarında yorumlama nedenleri yazılı olanlardır. Örneğin, diş kaybı rüyasında üst ve alt dişlerin ayrımının nedenidir. Kalan sembollerin boş alanları vardır."
          },
          {
            "p": "**Boş alanları doldurmadık.** Makul kökenler eklemek, belgeyi kalınlaştırır, ancak o anda bu sözlük geleneksel bir şey ile değil, uydurulmuş bir şey ile iletilmiş olur. Ne desteklenebilir ne de desteklenemez olduğunu ayırt etmek daha dürüsttür."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sözlüğü keyfi olarak genişletmeme nedenleri.",
        "blocks": [
          {
            "p": "Aslında sembolleri yüzlerce olarak genişletmeyi denedik ama vazgeçtik. Otomatik olarak oluşturulan girişler ya 'romantizm → iyi ilişki' gibi aynı ifadeleri tekrarladı ya da herhangi bir desteklenmiş köken sağlamadı. **Mevcut olanı doğru bir şekilde bulmanın**, sayıları artırmaktan daha iyi olduğuna karar verdik."
          }
        ]
      },
      {
        "title": "İyi ve kötü, sözlük tarafından belirlenmiştir.",
        "blocks": [
          {
            "p": "Her sembolün hem iyi hem de kötü anlamları vardır. **İyi {polarityPositive}**, **belirsiz {polarityAmbivalent}**, **uyarıcı {polarityNegative}** ve **nötr {polarityNeutral}**."
          },
          {
            "p": "İyi anlamların yarıdan fazlasının aşırı cömert olmamızdan değil, geleneksel rüya yorumlamasının her zaman böyle olmasından kaynaklandığı — domuzlar, ejderhalar ve ateş gibi büyük ve güçlü semboller genellikle iyi işaretler olarak görülmüştür. Ancak, tüm rüyalar olumlu bir şekilde yorumlanmaz. Bu değer, her sembolün doğasını yansıtır ve rüyanın genel atmosferi, bulunan sembolleri toplayarak yeniden değerlendirilir."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Hizmetin Temeli",
    "title": "Rüya hikayelerinde sembolleri nasıl buluruz.",
    "summary": "Serbest yazılmış cümlelerden sembollerin nasıl seçildiğini ve 'özel' gibi kelimelere yanlışlıkla giren harflerin nasıl filtrelendiğini açıklar.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Sağladığınız metinde sembolleri buluyoruz.",
        "blocks": [
          {
            "p": "Rüya hikayenizi serbestçe yazdığınızda, o metinde sözlükten sembolleri arıyoruz. Öğeleri seçmenize veya belirli bir formatta yazmanıza gerek yok. Sadece normal bir şekilde yazın, örneğin 'Dün gece, kocaman bir piton etrafımda dolandı.'"
          },
          {
            "p": "Arama yaparken, sadece sembolün adını değil, aynı zamanda **{aliasTotal} alternatif isimleri** de dikkate alıyoruz. Bunlar, 구렁이 (gureongi) ve 뱀 (baem), 떨어지다 (tteoreojida) ve 빠지다 (ppajida) gibi aynı şeyi ifade eden kelimelerdir. Son eklerle yapılan varyasyonlar, örneğin 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda) da dahil edilmektedir."
          }
        ]
      },
      {
        "title": "Bir kelime içinde tesadüfen bulunan karakterler sayılmaz",
        "blocks": [
          {
            "p": "Bu, Korece'deki en zorlu yönlerden biridir. Semboller arasında, **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son) gibi sıkça diğer kelimelerde de görülen **{singleCharSymbolTotal} tek karakterli sembol** bulunmaktadır."
          },
          {
            "ul": [
              "\"Sıradan bir gündü\" ifadesindeki **yıldız**",
              "\"Birisi tarafından kovalandım\" ifadesindeki **şey**",
              "\"O kişi dedi ki\" ifrasındaki **kelime** ve \"Açlık hissettim\" ifrasındaki **karın**"
            ]
          },
          {
            "p": "Bunları sembol olarak saymak, alakasız yorumlara yol açar. Bu nedenle, çevredeki karakterleri inceliyoruz — eğer **önünde bir Korece karakter varsa**, bunu bir kelime parçası olarak kabul ediyoruz ve saymıyoruz, ayrıca sonundaki ekin bir ek mi yoksa son mu olduğunu ayırt ediyoruz, böylece 「소가」 (soga) geçerken 「소리」 (sori) dışarıda bırakılıyor."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu şekilde çalışıyor",
        "blocks": [
          {
            "p": "Bu kuralı uygulamadan önce, on iki gerçek cümle ile test yapıldığında, **on iki cümlede de** alakasız semboller bulunuyordu. Anlamlı içerik taşımayan bir cümle bile bir 태몽 (taemong) olarak işaretlendi."
          },
          {
            "p": "Şimdi, bir tane kaldı — 「배가 고팠다」 (bae ga gopatda) ifrasındaki 배 (bae). Aynı sesle çıkmasına rağmen farklı bir anlam taşıdığı için, sadece çevredeki karakterlerle filtrelenemez."
          },
          {
            "p": "Bir şeyi bulamamak dürüst bir meseledir. Ancak, alakasız bir şeyi bulmak, o kelimenin arkasında hiç olmadığı bir geleneği kurmak anlamına gelir."
          }
        ]
      },
      {
        "title": "Aynı karakterler her zaman aynı sonuçları verir",
        "blocks": [
          {
            "p": "Arama kurallarında tesadüfe yer yoktur. Sözlük sabit ve kurallar belirlenmiştir, eğer aynı cümleyi tekrar girerseniz, **aynı sembol aynı sırayla görünecektir**. Bugün gördüğünüz yorum, yarın gördüğünüzden farklı olmayacaktır."
          },
          {
            "p": "Bu özellik, kendimize verdiğimiz bir sözdür. Her seferinde değişen yorumlar eğlencelidir ama temeli yoktur. Bu, [neden model kullanmadığımız](/guide/no-ai) hikayesiyle bağlantılıdır."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Hizmet Temeli",
    "title": "Aynı sembolün farklı anlamlara sahip olmasının nedeni",
    "summary": "Geleneksel olarak, bir yılanı tutmak ve bir yılandan ısırılmak zıt anlamlardır. Bu, 215 sembolün 256 anlamı olan yapıyı ve durumları nasıl yorumlayacağımızı tartışır.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Semboller aynı olsa da, farklı durumlar farklı anlamlar doğurur",
        "blocks": [
          {
            "p": "Geleneksel 해몽 (rüya yorumu) içinde, tek bir sembol her zaman bir anlama sahip değildir. Aynı yılan için bile, **tutmak ve ısırılmak tamamen zıt olarak yorumlanmıştır.** Bu, sözlükte de belirtilmiştir."
          },
          {
            "p": "Bu nedenle, {symbolTotal} sembolün toplamda {meaningTotal} anlamı vardır. Her anlam, **uygulandığı bağlamı** içerir ve eğer o bağlam, sağladığınız metinde görünüyorsa, o anlamı seçiyoruz."
          }
        ]
      },
      {
        "title": "Durumu nasıl tanımlarsınız",
        "blocks": [
          {
            "p": "Sağladığınız metnin, o durumu belirten kelimeleri içerip içermediğini kontrol ediyoruz. 「뱀이 나를 물었다」 (baemi nareul mul-eotda) ifrasında ısırılma durumu tanımlanırken, 「뱀을 품에 안았다」 (baemeul pume anatda) ifrasında tutma durumu tanımlanır. Eğer durumu belirten kelimeler yoksa, o sembolün **temel anlamını** kullanarak yorumluyoruz."
          },
          {
            "p": "Bu nedenle, rüyanızı yazarken, **sadece neyin belirdiğini değil, hangi eylemlerin yapıldığını** da eklerseniz, yorum daha doğru olacaktır. 「돼지를 봤다」 (dwaeji-reul bwatda) ifrası, 「돼지가 집으로 들어왔다」 (dwaeji-ga jib-euro deureowatda) ifrasından daha az şey ifade eder."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ne kadar çok yazarsanız o kadar iyi, ama uzun yazmaya gerek yok",
        "blocks": [
          {
            "p": "İki veya üç cümle yeterlidir. Daha uzun yazmak, daha fazla sembol bulmak anlamına gelmez; aksine, alakasız kelimeler karıştığında, alakasız semboller tanımlanabilir."
          }
        ]
      },
      {
        "title": "{contextSplitSymbolTotal} bölünmüş anlamlara sahip sembol vardır",
        "blocks": [
          {
            "p": "Sözlükteki {symbolTotal} sembol arasında, **{contextSplitSymbolTotal}** durumuna bağlı olarak değişen anlamlara sahip olanlar bulunmaktadır. Geri kalanlar, durumdan bağımsız olarak tek bir yönde okunmuştur."
          },
          {
            "p": "Bu {contextSplitSymbolTotal} en dikkatli alanlardır. Durumu yanlış okumak, iyi haberi kötü haber olarak iletmeye veya tam tersine yol açabilir. Bu nedenle, durum belirsizse, o sembolün temel anlamıyla gitmeyi tercih ederiz — belirsiz bir şeyi kesinmiş gibi ifade etmek istemiyoruz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Uyanma anındaki hisler de dikkate alınır",
        "blocks": [
          {
            "p": "Rüya içeriğinin altında sorulan hisler ve tekrarlar, sembolleri bulmak için kullanılmaz. Bölünmüş anlamlara sahip durumlarda hangi şekilde yorum yapılacağına karar verirken referans alınır. Seçim yapmanıza gerek yok; sonuçlar yine de sağlanacaktır."
          }
        ]
      },
      {
        "title": "Rüyanın genel atmosferi ayrı olarak sayılır",
        "blocks": [
          {
            "p": "Birden fazla sembol bulunursa, her bir sembolün olumlu mu yoksa ihtiyatlı mı olduğunu toplayarak rüyanın genel tonunu belirleriz. Bir iyi sembol ve bir ihtiyatlı sembol içeren bir rüya, sadece 'iyi rüya' olarak adlandırılmaz."
          },
          {
            "p": "Çeşitli sembolleri ve anlamlarını [sembol sözlüğünde](/dream/symbols) önizleyebilirsiniz. Rüyanızı yazmadan önce nelerin dahil olduğunu gözden geçirmek de iyidir."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Hizmet Temeli",
    "title": "길몽 (uğurlu rüyalar) ve 흉몽 (kötü rüyalar) ayırt etme kriterleri",
    "summary": "Her sembole atanan dört değer ve bunların dağılımı, olumlu olanların neden yarıdan fazla olduğu ve karışık rüyaları neden karışık olarak ilettiğimiz.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Her sembole dört değerden biri atanır",
        "blocks": [
          {
            "p": "Sözlükteki {symbolTotal} sembol arasında, her biri aşağıdakilerden biri olarak kategorize edilmiştir."
          },
          {
            "ul": [
              "**{polarityPositive} olumlu semboller** — zenginlik, kutlamalar ve hayırseverler gibi şanslı olaylar olarak yorumlananlar.",
              "**{polarityAmbivalent} duruma göre değişen semboller** — anlamı yapılan eyleme bağlı olarak değişebilen yılanlar gibi. Bu kategori en dikkatli olandır.",
              "**{polarityNegative} ihtiyatlı semboller** — dedikodu, anlaşmazlık veya kayıplar olarak görülenler.",
              "**{polarityNeutral} nötr semboller** — kendileri ne iyi ne de kötü olanlar, renkler veya sayılar gibi."
            ]
          }
        ]
      },
      {
        "title": "Olumlu sembollerin yarıdan fazla olmasının nedeni",
        "blocks": [
          {
            "p": "Bu, değerlendirmelerimizde cömert olduğumuz anlamına gelmez. **Geleneksel 해몽 (rüya yorumu) her zaman böyle olmuştur.** Domuzlar, ejderhalar, ateş ve su gibi büyük ve güçlü semboller genellikle iyi işaretler olarak görülmüştür ve sözlük bu geleneği yansıtmaktadır."
          },
          {
            "p": "Bu nedenle, 'iyi bir sembol belirdi' demek, 'iyi şeyler olacak' demek anlamına gelmez. İletilebilecek olan, o sembolün gelenekte nasıl yorumlandığı ile sınırlıdır."
          }
        ]
      },
      {
        "title": "Bir rüyanın tonu sembollerinden toplanır",
        "blocks": [
          {
            "p": "Birden fazla sembol bulunursa, bunların her birinin uğurluluğunu toplayarak rüyanın genel tonunu belirleriz. Sadece olumlu semboller görünüyorsa, bu iyi bir rüyadır; sadece ihtiyatlı semboller görünüyorsa, bu ihtiyatlı bir rüyadır; eğer **karışık ise, bunu karışık olarak iletiyoruz.**"
          },
          {
            "p": "Karışık sembolleri zorla bir tarafa kategorize etmiyoruz. Gerçekte, insanların gördüğü rüyalar genellikle karışıktır ve bunları 'iyi rüya' olarak özetlemek ne doğru ne de yardımcıdır."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kullanılmaması Gereken Kelimeler",
        "blocks": [
          {
            "p": "Ne olacağı, ne zaman olacağı veya sağlık ve zenginlik ile ilgili kesin ifadeler vermeyin. Geleneksel olarak aktarılan sembollerin anlamlarını iletmek, geleceği tahmin etmekten farklıdır."
          }
        ]
      },
      {
        "title": "Uyarıcı Bir Rüya Göründüğünde",
        "blocks": [
          {
            "p": "Uyarı olarak yorumlanan bir sembol görünse bile, bu mutlaka kötü bir haber olduğu anlamına gelmez. Geleneksel rüya yorumunda, bir **durumu işaret eden bir ifade** olarak genellikle kötü rüya kullanılmıştır. Eğer çatışma öneren bir sembol görünürse, bu sözleri tutma hatırlatıcısı olarak okunabilir."
          },
          {
            "p": "Aynı nedenle, bu hizmet tılsım veya nazar boncuğu satmamaktadır. Satılan yalnızca [rüyalarınızı korumanın iki yolu](/guide/reports)dır."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Gebelik Rüyası",
    "title": "Gebelik Rüyalarını Nasıl Yorumlayabilirsiniz",
    "summary": "27 gebelik rüyası sembolünü nasıl belirleyeceğinizi, neden tüm domuz rüyalarının gebelik rüyası olarak kabul edilmediğini ve gebelik veya cinsiyet tahmin etmeyen ilkeyi açıklar.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Öncelikle Bunu Netleştirin",
        "blocks": [
          {
            "p": "**Dreams-Link gebelik durumunu belirlemez. Ayrıca çocuğun cinsiyetini de göstermez.** Bunlar rüyalar aracılığıyla bilinemeyen konulardır ve bunu yapmamız mümkün değildir."
          },
          {
            "p": "Size söyleyebileceğimiz şey sınırlıdır — **bu rüyada geleneksel olarak gebelik rüyası olarak kabul edilen bir sembolün belirdiği gerçeği.** Atalarımızın bu sembolü nasıl yorumladığı budur."
          }
        ]
      },
      {
        "title": "Gebelik Rüyası Olarak Kabul Edilen {conceptionSymbolTotal} Sembol Var",
        "blocks": [
          {
            "p": "Sözlükteki {symbolTotal} sembol arasında, **{conceptionSymbolTotal}** gebelik rüyası olarak işaretlenmiştir. Ejderhalar, domuzlar ve yılanlar gibi birçok hayvanın yanı sıra, şeftali ve kestane gibi meyveler ile güneş ve ay da dahildir."
          },
          {
            "p": "Ancak, **o sembolün görünmesi hemen gebelik rüyası olduğu anlamına gelmez.** Bu, bu hizmetin çaba sarf ettiği yerdir."
          }
        ]
      },
      {
        "title": "Yargı, Sembollere Değil, Gerçek Anlamlara Dayanır",
        "blocks": [
          {
            "p": "Domuz, gebelik rüyalarının sembolüdür ve aynı zamanda **zenginlik rüyalarını temsil eder.** Eğer sembol sadece göründüğü için gebelik rüyası olarak kabul edilirse, o zaman domuz gören herkesin bir gebelik rüyası görmüş olması gerekir. Gerçekte, çoğunlukla zenginlik rüyası olarak yorumlanmıştır."
          },
          {
            "p": "Bu nedenle, **o sembolden türetilen gerçek anlama bakarız, sembole değil.** Sadece sağladığınız durumda gebelik yönünde anlam seçildiğinde bunu gebelik rüyası olarak işaretleriz. Aynı domuzda bile, bağlam farklıysa yargı değişir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Eğer Gebelikten Bahsederseniz, Öncelikle Buna Bakarız",
        "blocks": [
          {
            "p": "Eğer yazınızda gebelik, gebelik rüyası veya doğum gibi kelimeler varsa, öncelikle o sembolün gebelik yönündeki anlamına bakarız. Aynı domuz rüyasında bile, atalarımızın bunu yorumlama şekli mevcut duruma bağlı olarak değişmiştir."
          }
        ]
      },
      {
        "title": "Gebelik Rüyası Raporlarını Ayırmanın Sebebi",
        "blocks": [
          {
            "p": "Gebelik rüyaları, diğer rüyalardan farklı bir amaca hizmet eder. Çocuk doğduktan sonra bile sıkça konuşulur ve aile üyeleri arasında paylaşılır. Bu nedenle, sadece ekranda görmek yerine, ayrı bir **saklanabilir belge oluşturduk.**"
          },
          {
            "p": "Nelerin dahil olduğu [rüyalarınızı korumanın iki yolu](/guide/reports) içinde belirtilmiştir. Ekranda gördüğünüz her şeyi satın almadan tüm yorumları görebilirsiniz."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Nasıl Kullanılır",
    "title": "Rüyanızı Etkili Bir Şekilde Nasıl Yazarsınız",
    "summary": "Gördüğünüz ve yaptığınız şeyleri yazarsanız, iyi bir şekilde yorumlanır. Tek bir fiilin anlamı nasıl belirleyebileceğini ve neden duygular ve tekrar hakkında soru sorduğumuzu açıklar.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Lütfen Gördüğünüz ve Yaptığınız Şeyi Yazın",
        "blocks": [
          {
            "p": "Belirli bir format yoktur. Normalde konuştuğunuz gibi birkaç cümle yeterlidir. Ancak, iyi çalışan şeyler belirlenmiştir — **görünen şey** ve **olan şey.**"
          },
          {
            "ul": [
              "İyi çalışanlar — 「Beni saran büyük bir yılan」, 「Açık suyun aktığını gördüm」, 「Yüksek bir yerden düştüm」",
              "İyi çalışmayanlar — 「Korktum」, 「Garip hissettim」, 「Birinin benden nefret ettiğini hissettim」"
            ]
          },
          {
            "p": "Eğer sadece duyguları yazarsanız, bulunacak semboller olmayacaktır. Bunun nedeni, geleneksel rüya yorumunun [nesneler ve eylemler](/guide/categories) hakkında konuşmasıdır, duygular değil."
          }
        ]
      },
      {
        "title": "Yaptığınızı Yazmak Daha Doğru Olmasını Sağlar",
        "blocks": [
          {
            "p": "Aynı sembol ile bile, durumlara bağlı olarak anlamların farklılaştığı {contextSplitSymbolTotal} durum vardır. Geleneksel olarak, bir yılanı tutmak ve ısırılmak zıt olarak yorumlanmıştır."
          },
          {
            "p": "Bu nedenle, 「Bir domuz gördüm」 ifadesi, 「Bir domuz eve girdi」 ifadesinden daha az doğrudur ve 「Su vardı」 ifadesi, 「Açık su içtim」 ifadesinden daha az doğrudur. **Tek bir fiil anlamı belirler.**"
          }
        ]
      },
      {
        "title": "Neden Duygular ve Tekrar Hakkında Soru Soruyoruz",
        "blocks": [
          {
            "p": "Rüya içeriğinin altında, **uyandığınızda hissettiğiniz duygu** ve **aynı rüyayı tekrar edip etmediğiniz** seçeneğini belirleyeceğiniz bir yer vardır. Sonuç sağlanması için her ikisini seçmeniz gerekmez."
          },
          {
            "p": "Bu değerler sembolleri bulmak için kullanılmaz. Aynı sembolden **hangi anlamı seçeceğimizi** belirlerken ve sonucu nasıl ileteceğimizi belirlerken referans alınır."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Eğer Gebelikten Bahsederseniz",
        "blocks": [
          {
            "p": "Eğer yazınızda gebelik, gebelik rüyası veya doğum gibi kelimeler varsa, öncelikle o sembolün gebelik yönündeki anlamına bakarız. Aynı domuz rüyasında bile, atalarımızın bunu yorumlama şekli mevcut duruma bağlı olarak değişmiştir — [gebelik rüyalarını nasıl yorumlayacağınız](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Uzun Metinler Yazmanıza Gerek Yok",
        "blocks": [
          {
            "p": "Daha uzun bir metin, daha fazla sembol bulunacağı anlamına gelmez. Aksine, alakasız kelimelerin uzun bir şekilde karışması durumunda, alakasız kelimelerin semboller olarak yorumlanma olasılığı daha yüksektir. **Lütfen sadece hatırladığınız sahneleri yazın.**"
          },
          {
            "p": "Sağladığınız metin hiçbir yerde kaydedilmez. Serbest yazabilmenizin nedeni, [kaydetmeme yöntemi](/guide/no-storage) içinde belirtilmiştir."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Hizmetin Temeli",
    "title": "Dokuz Kategoriye Bölünmüş Kriterler",
    "summary": "Nesneler, hayvanlar ve doğadan renklere ve sayılara kadar dokuz kategori vardır ve duygusal bir kategorinin dahil edilmemesi için bir neden vardır.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Rüyalardaki Semboller Dokuz Kategoriye Bölünmüştür",
        "blocks": [
          {
            "p": "{symbolTotal} sembol, özelliklerine göre dokuz kategoriye gruplandırılmıştır. Bölünme kriteri, **rüyalarda nasıl göründükleridir** — hayvanlar, nesneler veya yaptığım eylemler olarak."
          },
          {
            "ul": [
              "**Nesneler {categoryThing}** — Para, aynalar ve bıçaklar gibi somut eşyalar. Bu en kalın kategoridir.",
              "**Hayvanlar {categoryAnimal}** — ejderha·domuz·yılan·inek. Bunların birçoğu 태몽 (hamilelik rüyaları) olarak görülmektedir.",
              "**Doğa {categoryNature}** — su·ateş·güneş·ay·dağ gibi büyük ve eski şeyler.",
              "**Eylem {categoryAction}** — rüyalarda yapılan şeyler, örneğin kovalanmak·düşmek·uçmak.",
              "**Vücut {categoryBody}** — diş·saç·kan. Anlamı, vücudun neresinde olduğuna bağlı olarak değişir.",
              "**Kişi {categoryPerson}** · **Yer {categoryPlace}** · **Renk {categoryColor}** · **Sayı {categoryNumber}**"
            ]
          }
        ]
      },
      {
        "title": "Neden bir duygu kategorisi yok?",
        "blocks": [
          {
            "p": "「kaygı」·「özlem」 gibi kategoriler dahil edilmemiştir. **Bu, geleneksel 해몽 (rüya yorumlama) duyguları ele almadığı içindir.** Eski yorumlar, rüya sahibinin hislerinden ziyade görünen ve olan şeylere odaklanmıştır."
          },
          {
            "p": "Bir duygu kategorisi oluşturmaya çalıştım, ancak sonuçlar 「sevgi kaybı」·「duygusal denge」 gibi terimler oldu. Bunlar rüyalardan değil, modern psikolojiden gelen **semboller** değildir. Bu, farklı bir hizmet türüdür ve bu sözlüğün amacı değildir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yani yazarken",
        "blocks": [
          {
            "p": "Lütfen hislerden ziyade **ne gördüğünüzü ve ne yaptığınızı** yazın; bu çok daha iyi sonuçlar verecektir. Ancak, uyanınca hislerinizi ayrı olarak soracağım — aynı sembol durumuna bağlı olarak farklı anlamlar taşıyabilir."
          }
        ]
      },
      {
        "title": "Renkler ve sayılar tek başına durmaz",
        "blocks": [
          {
            "p": "Renk {categoryColor} ve sayı {categoryNumber} kendi başlarına iyi veya kötü anlamlar taşımaz. Beyaz bir yılan ile siyah bir yılan farklıdır; anlamları **ne ile ilişkilendirildiklerine** bağlı olarak değişir. Bu nedenle, bu iki kategori diğer sembollerle birlikte değerlendirilir."
          },
          {
            "p": "Kategorilere göre tam bir liste [Sembol Sözlüğü](/dream/symbols) içinde mevcuttur. Bir sembolü açmak, onun iletilen anlamını, kategorisini ve ilgili sembolleri gösterir."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Nasıl kullanılır",
    "title": "Bir sembol bulunamadığında",
    "summary": "Eğer bulamazsam, size bulunmadığını bildireceğim. Neden bulunamadığını, o ekranda ne göstereceğimi ve sözlüğün nasıl genişletileceğini tartışacağım.",
    "backLabel": "Yorumlama temeli",
    "sections": [
      {
        "title": "Bulunmadığında, size bulunmadığını bildireceğim",
        "blocks": [
          {
            "p": "Eğer sağladığınız metinde hiçbir sembol bulamazsam, **bulunmadığını bildireceğim.** Benzer bir şeyle zorla ilişkilendirmeyecek veya yeri doldurmak için makul cümleler oluşturmayacağım."
          },
          {
            "p": "Bu, bu hizmetin en dikkatli olduğu konudur. Bir boşluğu doldurduğum an, yorumları iletme ifadesiyle çelişir."
          }
        ]
      },
      {
        "title": "Neden bulunamıyor?",
        "blocks": [
          {
            "p": "Genellikle, aşağıdakilerden biridir."
          },
          {
            "ul": [
              "**Henüz sözlükte olmayan bir sembol.** Şu anda {symbolTotal} sembol listelenmiştir, ancak rüyalarda ortaya çıkabilecek daha birçok sembol vardır.",
              "**Sadece duyguları yazdınız.** Eğer sadece 「korktum」·「garip hissettim」 gibi duygular varsa, eşleştirilebilecek semboller yoktur. Geleneksel 해몽, **görünen nesneler ve eylemler** hakkında konuşur, duygular değil.",
              "**Çok kısa.** Bir veya iki kelime yerine cümleler yazmak daha iyidir."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yeniden yazmayı denediğinizde",
        "blocks": [
          {
            "p": "Lütfen rüyada **ne gördüğünüzü ve ne yaptığınızı** dahil edin. 「Kaygılıydım」 demek, 「Yüksek bir yerden düştüm」 demekten daha az etkilidir ve 「Beğendim」 demek, 「Temiz suyun aktığını gördüm」 demekten daha az etkilidir."
          }
        ]
      },
      {
        "title": "Boş bir ekran bırakmam",
        "blocks": [
          {
            "p": "Bir şey bulunamadığında, o ekranda **{popularSymbolCount} sık aranan sembolü** de göstereceğim. Bunlar, temsil edilebilirliklerine göre sözlükten seçilmiştir ve bunlardan birinin rüyanızda görünüp görünmediğini hatırlamanıza yardımcı olabilir."
          },
          {
            "p": "Tüm listeyi gözden geçirmek isterseniz, [Sembol Sözlüğü](/dream/symbols) içinde kategoriye göre düzenlenmiş {symbolTotal} sembol bulunmaktadır. Her sembol, iletilen anlamını ve ilgili sembolleri içerir."
          }
        ]
      },
      {
        "title": "Sözlük gelecekte nasıl genişletilecek?",
        "blocks": [
          {
            "p": "Sayıları artırmak yerine, **zaten mevcut olanı doğru bir şekilde tanımlamaya** odaklanıyorum. Aynı sembol için {aliasTotal} alternatif isim ekledim ve ek eklerle değişen kelimeleri tanımayı mümkün kıldım."
          },
          {
            "p": "Sembolleri genişletirken, yalnızca **iletim kanıtı sağlayabilecek olanları** dahil edeceğim. Kanıt olmadan sayıları artırmak, bir sözlükten ziyade yaratım haline gelir — bu girişimlerin ve sonuçların belgelerini [Neden model kullanmıyorum](/guide/no-ai) içinde kaydettim."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Hizmet temeli",
    "title": "해몽'da yapay zeka kullanmama nedenleri",
    "summary": "Yorumlama oluşturma sürecinde bir modeli çağıran hiçbir kod yok. Ampirik sonuçlara dayalı bir model kullanarak sözlüğü genişletme girişiminden vazgeçtim ve böylece kazanılan ve vazgeçilenler.",
    "backLabel": "Yorumlama temeli",
    "sections": [
      {
        "title": "해몽'da yapay zeka kullanılmıyor",
        "blocks": [
          {
            "p": "Mevcut birçok 해몽 hizmeti, rüya hikayelerini üretken modellere yerleştirerek oluşturulan metinler gösterir. Dreams-Link bunu yapmaz. **Yorumlama oluşturma sürecinde bir modeli çağıran hiçbir kod yoktur.**"
          },
          {
            "p": "Yaptığım şey basit. Sağladığınız metindeki sözlükte bulunan sembolleri bulup, o semboller için sözlüğün yazdığı anlamları seçip gösteriyorum. Sözlükte olmayan cümleler için bir yer yok."
          }
        ]
      },
      {
        "title": "Bu karar neden alındı?",
        "blocks": [
          {
            "p": "**Modeller, bilmediklerini bilmediklerini söylemez.** İletim kanıtı olmayan semboller hakkında sorulduğunda, makul kökenler uydururlar. Ve bunun uydurma olup olmadığı, okuyucunun ayırt edemeyeceği bir şeydir. Eğer iletimi yerine yaratım koyarsanız, hizmetin temeli çöker."
          },
          {
            "p": "Aslında, sözlüğü genişletmek için bir modelin semboller oluşturmasını sağlamaya çalıştım. Dikkate alınabilecek altmış altı örnekten, **elli beşi herhangi bir iletim kanıtı sağlayamadı** ve bazıları geleneksel 해몽'da var olamayacak şeyler içeriyordu, örneğin metro ve otoyollar. Bu nedenle, **hiçbiri dahil edilmedi.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Daha büyük modellerle de aynıydı",
        "blocks": [
          {
            "p": "Daha iyi bir modelle aynı görevi denediğimde, on dokuzun yalnızca biri geçti ve o da sadece kanıt pozisyonundaki aynı kelimelerin tekrarıydı. Daha büyük modeller, bilmedikleri hakkında **daha makul** konuşurlar."
          }
        ]
      },
      {
        "title": "Model kullanmamanın faydaları",
        "blocks": [
          {
            "ul": [
              "**Eğer aynı rüya ise, aynı yorum çıkacaktır.** Her seferinde kelimeler değişmez.",
              "**Hızlıdır.** Bir modelin yanıtını beklemek yoktur, bu nedenle sonuçlar hemen teslim edilir.",
              "**Sağladığınız rüya dışarı çıkmaz.** Dış şirket sunucularına göndermeye gerek yoktur — lütfen [saklamama yöntemini](/guide/no-storage) takip edin.",
              "**Ücretsiz sunulabilir.** Rüyalar her gün gördüğümüz şeylerdir, bu nedenle birçok sorgu vardır. Her sorgu için bir model çağrılırsa, maliyetler bir yerden karşılanmak zorundadır."
            ]
          }
        ]
      },
      {
        "title": "Bunun yerine ne verildi",
        "blocks": [
          {
            "p": "Sözlükte olmayanı yorumlayamayız. Bir model kullanılmış olsaydı, yazdığınız her şey makul bir cevap üretirdi. Bulunamadığında **bulunamadığını söyleyen tarafı** seçtik. O zaman gösterdiğimiz şey, [bir sembol bulunamadığında](/guide/not-found) yazılmıştır."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Ücretli Ürünler",
    "title": "Rüyalarınızı Saklamanın İki Yolu",
    "summary": "Yorumlama kendisi bir ücret talep etmez. Satışa sunduğumuz iki şeyin ne olduğunu, neler içerdiğini ve neden daha iyi yorumlar olmadığını açıklıyoruz.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Yorumlama kendisi bir ücret talep etmez",
        "blocks": [
          {
            "p": "Rüyalarınızı yazmak ve hangi sembollerin mevcut olduğunu görmek **para talep etmez ve üyelik gerektirmez.** İnsanlar her gün rüya gördüğü için, bu alanın ücretsiz olması gerektiğine karar verdik."
          },
          {
            "p": "**Satışa sunduğumuz iki şey daha iyi yorumlar değildir.** Onlar **aynı yorumlamayı saklamanın iki yoludur.** Ekranda gördüğünüz içerik, ödeme sonrasında değişmez."
          }
        ]
      },
      {
        "title": "Rüya Kartı — Bir Görüntü",
        "blocks": [
          {
            "p": "Rüyanızda bulunan sembolleri ve anlamlarını **bir görüntüde** sağlıyoruz. Bu bir görüntü dosyasıdır, PDF değildir, bu yüzden olduğu gibi kaydedebilir veya başkalarına gönderebilirsiniz."
          },
          {
            "p": "Bu, iyi bir rüya ekran kapandıktan sonra kaybolduğunda pişmanlık duyanlar içindir. Rüyaları kaydetmediğimiz için, bunu saklamak istiyorsanız, tek yol budur."
          }
        ]
      },
      {
        "title": "태몽 Raporu — {conceptionPages} Sayfa Belgesi",
        "blocks": [
          {
            "p": "태몽 (kavram rüyaları) olarak yorumlanan semboller gösteren rüyalar için, **{conceptionPages} sayfalık bir belge oluşturuyoruz.** Hangi sembollerin ortaya çıktığını, bu sembollerin geleneksel olarak nasıl yorumlandığını ve bunu kaydetmek için bir yer içerir."
          },
          {
            "p": "태몽, çocuk doğduktan sonra bile aile üyeleri arasında sıkça tartışıldığı ve paylaşıldığı için, ekran üzerinde sadece görüntülemek için çok değerli olan rüyalar için ayrı bir belge oluşturduk."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Burada da Söylenmeyen Kelimeler",
        "blocks": [
          {
            "p": "Hamilelik durumu veya çocuğun cinsiyetini belirlemiyoruz. Bu tür ifadeler belgede yer almaz. Ayrıntılar için [태몽 nasıl yorumlanır](/guide/conception-dreams) kısmına bakın."
          }
        ]
      },
      {
        "title": "Artık Belge Olmamasının Sebebi",
        "blocks": [
          {
            "p": "Kardeş hizmetler dokuz sayfalık raporlar sağlar. Saju motoru sadece bir doğum tarihinden birçok değer çıkarır. Rüya yorumlaması bu şekilde çalışmaz."
          },
          {
            "p": "Sözlükte listelenen semboller toplam {symbolTotal} olup, bunların çoğu **her biri için bir anlam taşır.** Bunu dokuz sayfaya yaymak için, hiçbir materyalde bulunmayan geleneksel anlamları yazmamız gerekecekti ve bu, bu hizmetin yapmamaya karar verdiği şeydir. Bu nedenle, belge yalnızca materyallerin dürüstçe izin verdiği kadar uzun olup, daha uzun değildir."
          }
        ]
      },
      {
        "title": "Fiyatlar ve Satış Durumu",
        "blocks": [
          {
            "p": "Fiyatlar [fiyatlandırma kılavuzunda](/pricing) listelenmiştir. Bu belgenin miktarları listelememesinin nedeni kasıtlıdır — fiyatlar değiştiğinde, rehber belgesinin eski miktarlarla kalmasını önlemektir. Ekran ve şartlar, bir yerden aynı miktarı okur."
          },
          {
            "p": "Satın aldığınız belgeler **aynı siparişle tekrar alınabilir.** Ancak, dosyaları saklamadığımız için, sonuç ekranını terk ettikten sonra bunları yeniden oluşturamazsınız — lütfen aldığınız dosyaları saklayın."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Kişisel Bilgiler",
    "title": "Yazdığınız Rüyaları Saklamama Yöntemi",
    "summary": "Rüya hikayelerinin hiçbir yerde kaydedilmediğinin teknik olarak ne anlama geldiğini ve sonuç bağlantısında nelerin bulunduğunu açıklıyoruz.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Üyelik Gerekmez",
        "blocks": [
          {
            "p": "Dreams-Link hesap oluşturmaz. İsim, e-posta veya telefon numarası toplamayız. Tek topladığımız şey, yazdığınız rüyalar, uyandığınızda hissettiğiniz duygu ve aynı rüyayı tekrar tekrar görüp görmediğinizdir ve bu, yorumlama tamamlandıktan sonra kalmaz."
          },
          {
            "p": "Rüya hikayeleri, bu hizmetin aldığı en özel değerlerdir. Bu yüzden kurallar gereğinden daha katıdır — gönderdiğiniz şeyi yazmak için bile bir alan oluşturmadık."
          }
        ]
      },
      {
        "title": "Sonuç bağlantısında neler var",
        "blocks": [
          {
            "p": "Hesaplama tamamlandığında, adres şöyle görünecektir."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "**#**'den sonra gelen şey, giriş değeridir. Bu kısma **fragment** denir, bu da **tarayıcının sunucuya göndermediği bir parçadır.** Bu standart web davranışıdır ve bizim oluşturduğumuz bir kural değildir — aslında bir belgede bir konumu belirtmek için tasarlanmıştır, bu yüzden sunucunun bunu görmesine gerek yoktur."
          },
          {
            "p": "Burada, bu özellik özellikle önemlidir — sağladığınız rüya **erişim kayıtlarında kalmaz.**"
          },
          {
            "p": "Başka bir deyişle, sonuç bağlantısını açtığınızda, tarayıcı bu değeri hesaplama talep etmek için okur ve sunucumuz hesaplama için bu değeri alır, cevabı döner ve sonra unutur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bağlantıları başkalarına gönderirken dikkatli olun",
        "blocks": [
          {
            "p": "Sunucuda saklanmadığı gerçeği, bağlantının güvenli olduğu anlamına gelmez. Sonuç bağlantısı, sağladığınız rüyayı içerir, bu yüzden o bağlantıyı alan kişi o içeriği okuyabilir."
          }
        ]
      },
      {
        "title": "Hesaplama neden sunucuda yapılıyor ama saklanmıyor?",
        "blocks": [
          {
            "p": "Hesaplama kendisi sunucuda yapılır. Sembolleri bulmak, tüm sözlüğü gerektirir ve o sözlük tarayıcıya gönderilecek kadar büyük değildir. Sözlüğü sunucuda tutmak, bir hata düzeltildiğinde bunun herkes için bir anda yansıtılması anlamına gelir. Ancak, **isteği işledikten sonra, bu değer hiçbir yerde kullanılmaz.** Veritabanına eklemek için bir kod yoktur."
          },
          {
            "p": "İşlem için gerekli olan minimal bir kayıt tutulur — aynı kişinin kısa bir süre içinde çok fazla talep göndermesini önlemek için bir sayaç. Bu, rüya içeriğini içermez ve erişim IP'si de saklanmaz. Sadece tarih ile hash'lenmiş bir değer sayılır ve bu değer gün değiştiğinde değişir."
          }
        ]
      },
      {
        "title": "Saklanmadığı için yapılamayan şeyler",
        "blocks": [
          {
            "p": "Açık olmak gerekirse, veri saklamadığımız için vazgeçtiğimiz şeyler var."
          },
          {
            "ul": [
              "**Rüya günlüğü yok.** Geçen haftanın yorumunu geri alamazsınız ve tekrar görmek için bağlantıya sahip olmalısınız. Bu kasıtlı olarak yapılmıştır — bir günlüğü oluşturmak için, en özel yazıların sürekli olarak saklanması gerekir.",
              "**Aynı değeri tekrar bulmak.** Önbellek yok. Bunun yerine, sözlük sabittir ve eşleşme kuralları belirleyicidir, bu yüzden aynı metin her zaman aynı sembolü verir — kurallar, önbelleğin garanti edeceği şeyi değiştirir.",
              "**Sayfayı yenilemek, reklam kapısını tekrar açar.** Bunun nedeni, görüntüleme kayıtlarını bırakacak bir yer olmamasıdır."
            ]
          }
        ]
      },
      {
        "title": "Satın alma durumunda",
        "blocks": [
          {
            "p": "Bir rapor satın alırsanız, o anda bir işlem kaydı tutulacaktır. Ödeme, yasal olarak tanımlanmış bir saklama süresine sahiptir ve bir sipariş geçmişi olmadan geri ödemeler işlenemez. Ancak, yine de, **yorumlamada yazılan rüya içeriği siparişle ilişkilendirilmez** — bu, ödeme onaylandıktan sonra belge oluşturulurken tekrar alınır ve o anda yazılır."
          },
          {
            "p": "Ayrıntılar için lütfen [gizlilik politikasına](/privacy) bakın."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Duyuru",
    "title": "Duyurular",
    "summary": "Bu, kullanımınızı etkileyebilecek değişiklikler hakkında sizi bilgilendirmek için bir yerdir.",
    "backLabel": "Ana Sayfaya Dön",
    "sections": []
  },
  "contact": {
    "eyebrow": "İletişim",
    "title": "Soruşturma",
    "summary": "Bu, kullanım, iade, kişisel bilgi talepleri ve hata raporları ile iş bilgileri hakkında sorular için bir kanaldır.",
    "backLabel": "Ana Sayfaya Dön",
    "sections": [
      {
        "title": "E-posta ile İletişim",
        "blocks": [
          {
            "p": "Lütfen sorularınızı **{email}** adresine gönderin. 2 iş günü içinde yanıt vereceğiz. Ödeme ve iade talepleri için, **sipariş numaranızı veya ödeme e-posta adresinizi** eklemek daha hızlıdır."
          },
          {
            "p": "Telefonla yapılan sorgular {customerCenter} üzerinden alınmaktadır."
          }
        ]
      },
      {
        "title": "Bu kanala ne gönderilebilir?",
        "blocks": [
          {
            "ul": [
              "**Ödeme ve İade** — Eğer belge oluşturulmamışsa veya ödeme tutarı siparişten farklıysa, tam bir iade yapılacaktır. Koşullar [iade politikası](/refund-policy) içindedir.",
              "**Kişisel Bilgiler** — Erişim, düzeltme ve silme taleplerini kabul ediyoruz. İşleme politikası [gizlilik politikası](/privacy) içindedir.",
              "**Yorum Hatalarını Bildirin** — Eğer semboller yanlış bulunmuşsa veya yorum garip görünüyorsa, lütfen bize bildirin. O rüyayı yazdığınız zamanı eklerseniz, aynı metinle tekrar bakabiliriz."
            ]
          }
        ]
      },
      {
        "title": "İş Bilgileri",
        "blocks": [
          {
            "ul": [
              "**İşletme Adı** — {companyName}",
              "**Temsilci** — {representative}",
              "**İşletme Kaydı Numarası** — {businessNumber}",
              "**Mail Order İşletme Kaydı Numarası** — {mailOrderNumber}",
              "**Adres** — {address}",
              "**Müşteri Merkezi** — {customerCenter}",
              "**E-posta** — {email}",
              "**Kişisel Bilgi Koruma Sorumlusu** — {privacyOfficer}",
              "**Hosting Sağlayıcısı** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Sorgu e-postasında sağladığınız rüyayı yeniden yazmanıza gerek yoktur. Girdileri kaydetmiyoruz, bu nedenle tekrar bakamayız ve sipariş numarası doğrulama için yeterlidir. Yalnızca rapor yorum hataları gibi kesinlikle gerekli olduğunda yazın."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Hizmet İlkeleri",
    "title": "Yapmadığımız Şeyler",
    "summary": "Biz piyango numaraları, rüya günlükleri, hamilelik belirlemeleri veya tılsımlar sağlamıyoruz. Her birini neden yapmadığımızı açıklıyoruz.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Piyango numaraları sağlamıyoruz",
        "blocks": [
          {
            "p": "Rüya yorumlama hizmetlerinde yaygın olarak ele alınsa da, bunu yapmıyoruz. **Rüyalardan numara çekmek için geleneksel rüya yorumlamasında bir temel yoktur.** Domuz rüyalarının zenginlik olarak yorumlandığına dair kayıtlar olsa da, bunu üreten herhangi bir literatürde altı numara çıkarma kuralı yoktur."
          },
          {
            "p": "Onları oluşturmak için, uydurmamız gerekecek ve o anda bu hizmet, geleneğin elden geçirdiği yorumları iletme yeri olmaktan çıkacaktır. Bu, özellikle maddi kayba yol açabileceği için endişe vericidir."
          }
        ]
      },
      {
        "title": "Rüya günlükleri oluşturmuyoruz",
        "blocks": [
          {
            "p": "Geçmiş rüyaları toplamak için bir özellik olması pratik olsa da, **sağladığınız rüyaları sürekli olarak saklamamız gerekecek.** Rüya anlatımları, bu hizmetin aldığı en özel unsurdur ve bunu değiştirmemeye karar verdik."
          },
          {
            "p": "Bunun yerine, saklamak istediğiniz rüyalar **görüntü veya belge olarak alınabilir.** Saklama sorumluluğu kullanıcılara aittir, bize değil — [Rüyalarınızı Saklamanın İki Yolu](/guide/reports)"
          }
        ]
      },
      {
        "title": "Hamilelik veya cinsiyet belirlemiyoruz",
        "blocks": [
          {
            "p": "Sadece bir sembolün bir 태몽 (hamilelik rüyası) olarak yorumlandığını belirteceğiz. Hamile olup olmadığınız veya çocuğunuzun kız mı yoksa erkek mi olduğu **rüyalar aracılığıyla bilinemeyen bir şeydir.** Bu tür ifadeler ekranda veya ücretli belgelerde yer almaz."
          }
        ]
      },
      {
        "title": "Tılsım veya muska satmıyoruz",
        "blocks": [
          {
            "p": "Bir sembolün ihtiyati olarak yorumlanması, bir şey satın almak için bir neden olduğu anlamına gelmez. Bir 흉몽 (kötü rüya) geleneksel olarak **şimdi incelemeniz gereken bir durumu belirtmek için** kullanılmıştır, bir şeyi önlemek için ödeme yapmak için değil."
          },
          {
            "p": "Buna dayanarak bir şey satmak için kaygı yaratmıyoruz. Satışını yaptığımız tek şey yukarıda belirtilen iki şeydir ve hiçbiri ek yorum sağlamaz, aksine **aynı içeriği saklama yollarıdır.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Gelecek hakkında kesin ifadeler yapmıyoruz",
        "blocks": [
          {
            "p": "Bir şeyin olup olmayacağı, ne zaman olacağı veya sağlık, zenginlik veya yaşam süresi ile ilgili kesin ifadeler yapmıyoruz. Geleneksel sembollerin anlamlarını iletmek ve geleceği tahmin etmek farklı konulardır."
          }
        ]
      },
      {
        "title": "Mevcut olmayan yorumlar uydurmuyoruz",
        "blocks": [
          {
            "p": "Sözlükte mevcut olmayan semboller için, **bulamadığımızı belirteceğiz.** Benzer olanları bir araya getirmiyoruz veya alanı makul cümlelerle doldurmuyoruz. Bu nedenle, bu hizmet [rüya yorumlaması için yapay zeka kullanmıyor](/guide/no-ai). Model, bilmediği şeyleri bilmediğini söylemez."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const TR_NOTICES = {
  "kindLabels": {
    "service": "Hizmet",
    "product": "Raporlar",
    "engine": "Hesaplama",
    "support": "Destek"
  },
  "intro": "Kullanım şartlarınızla ilgili değişiklikler — fiyatlar, politikalar — burada yürürlüğe girmeden önce yayınlanır. Ekranın hızlanması gibi iç iyileştirmeler burada yayınlanmaz: burada görünen, bilmeniz gerekenlerdir.",
  "empty": {
    "title": "Hiçbir duyuru yayınlanmadı",
    "body": "Eğer size bildirilmesi gereken herhangi bir değişiklik olursa, buraya yazılacaktır."
  },
  "effective": "Geçerli tarih {date} itibarıyla",
  "pager": {
    "label": "Bildirim Sayfası",
    "newer": "← En Yeni",
    "older": "Önceki Bildirimler →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "Verdiğiniz rüya saklanmamıştır.",
      "body": [
        "Rüya hikayeleri, bu hizmetin aldığı en özel değerlerdir. Bu nedenle, hiçbir tabloda kaydedilmezler. Girdi, yalnızca hesaplama için sonuç adresinde taşınır ve pencere kapatıldığında kaybolur.",
        "Rüyaları toplayan ve akışı gösteren (rüya günlüğü) bir özellik oluşturmamaya karar verdik. Bu yararlı bir özellik, ancak bunu yapmak için en özel yazıların sürekli saklanması gerekir.",
        "Sonuç bağlantısını başkalarına gönderdiğinizde, rüya içeriğini içerir. Paylaşırken dikkatli olun."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Sonuçlar, sembol sözlüğü ve hesaplama kriterlerini içerir.",
      "body": [
        "Yorumlama temeli, geleneksel 해몽 (rüya yorumlama) sembol sözlüğüdür. Sonuçlar ve belgeler, o sözlüğün versiyonunu (örneğin, 1.2.0) ve kural bulma kriterlerini (örneğin, dream-1.0.0) içerecektir. Aynı rüya, her zaman aynı kriterlere dayalı olarak aynı sembolü verecektir.",
        "Sembollerin eklenmesi veya anlamların önceden değiştirilmesi sonuçları değiştirebiliyorsa, bu durum burada sunulmaktadır. Çünkü daha önce aldığınız sonuçlar değişebilir.",
        "Sözlükte yer almayan geleneksel anlamlar oluşturmayız. Eğer semboller bulunamazsa, basitçe bulunmadığını belirtir ve sonuçlandırırız."
      ]
    },
    "2026-08-06-conception": {
      "title": "Sadece 태몽 hakkında bilgi veriyoruz ve yargıda bulunmuyoruz.",
      "body": [
        "Eğer rüyada geleneksel olarak 태몽 olarak görülen semboller ortaya çıkarsa, bu durumu size bildireceğiz. Ancak, hamilelik durumu veya çocuğun cinsiyetini belirlemiyoruz — bu tür iddiaların bir temeli yoktur ve tıbbi yargılar tıbbi kurumların sorumluluğundadır.",
        "Geleneksel anlatılarda oğul ve kızların bahsedilmesi, aktarılan geleneklerin bir yansımasıdır ve bunun doğru bir şekilde tahmin ettiğimiz anlamına gelmez."
      ]
    }
  }
} satisfies NoticeCopy;
