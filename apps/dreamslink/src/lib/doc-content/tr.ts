import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Türkçe — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const TR_DOCS = {
  "about": {
    "eyebrow": "Giriş",
    "title": "Dreams-Link'e Giriş",
    "summary": "Bu, geleneksel bir rüya yorumlama sembol sözlüğü kullanarak rüyaları yorumlayan bir hizmettir. Ne tür bilgilerin temel alındığını ve ne tür bilgilerin belirtilmediğini netleştirir.",
    "backLabel": "Ana Sayfaya Dön",
    "sections": [
      {
        "title": "Ne yapıyoruz?",
        "blocks": [
          {
            "p": "Dreams-Link, yazdığınız rüyalardan **geleneksel rüya yorumlamada kullanılan sembolleri** bulur ve anlamlarını gösterir. Rüyalar günlük olarak deneyimlediğimiz şeyler olduğundan, ekranda gösterilen yorumlar **ücretsizdir ve üyelik gerektirmez.**"
          },
          {
            "p": "The only things sold for a fee are **two forms of preservation** — an image (dream card) containing a good dream and a PDF that captures the background when a symbol traditionally considered a a conception dream appears."
          }
        ]
      },
      {
        "title": "Yorumlama için temel nedir?",
        "blocks": [
          {
            "p": "Yorumlama için temel, **{symbolTotal} sembolden oluşan bir sözlüktür.** Rüya metninde sembolleri buluyoruz ve yalnızca o semboller için sözlükte kaydedilen anlamları gösteriyoruz. Bir sembolün birden fazla anlamı varsa, bağlama göre seçim yapıyoruz — örneğin, bir yılanı tutmak ve ısırılmak geleneksel olarak zıt olarak kabul edilir."
          },
          {
            "p": "Arama, **sadece sabit kurallara göre** yapılır. Aynı rüya ise, aynı semboller her zaman ortaya çıkar ve yorum dün ile bugün arasında değişmez."
          }
        ]
      },
      {
        "title": "Neleri söylemiyoruz?",
        "blocks": [
          {
            "p": "**Sözlükte olmayan geleneksel anlamlar icat etmiyoruz.** Eğer sembol bulunamazsa, basitçe bulunmadığını belirtir ve sonuçlandırırız. O alanı makul kelimelerle doldurmak, bu hizmetin en dikkatli olduğu konudur."
          },
          {
            "p": "**A a conception dream is merely a sign, not a judgment.** We only inform you that a symbol traditionally considered a a conception dream appeared in the dream. We do not predict pregnancy or the child's gender, and there is no basis for such claims."
          },
          {
            "p": "**Sağlık, zenginlik veya kariyer hakkında kesin ifadeler yapmıyoruz.** Bu, geleneksel rüya yorumlama perspektifinden bir referanstır ve tıbbi, finansal veya hukuki tavsiye değildir."
          }
        ]
      },
      {
        "title": "Yazdığınız rüyaları saklamıyoruz.",
        "blocks": [
          {
            "p": "Rüya hikayeleri, bu hizmetin aldığı en özel kısımdır. Bu nedenle, **onları saklamıyoruz.** Girdiğiniz bilgiler yalnızca URL'de taşınır ve okuma için kullanılır; sunucularımızda herhangi bir tabloda kaydedilmez."
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
            "p": "Burada yazılı tüm sayılar, **sembol sözlüğünden ve eşleşme kurallarından doğrudan okunur.** Metni manuel olarak transkribe etmediğimiz için, sözlük genişletilirse veya kurallar değiştirilirse, bu belgelerdeki sayılar da değişecektir."
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
            "p": "Dreams-Link'ten gelen yorumlar, **önceden yazılmış bir sembol sözlüğünden** gelmektedir. Sağladığınız metinde sembolleri buluyoruz ve o semboller için sözlükte kaydedilen anlamları gösteriyoruz. Sözlükte olmayan kelimeler yaratmıyoruz."
          },
          {
            "p": "Şu anda sözlükte **{symbolTotal} sembol** bulunmaktadır ve bu sembollerin toplamda **{meaningTotal} anlamı** vardır. Çoğu sembolün yalnızca bir anlamı varken, bazıları bağlama bağlı olarak birden fazla anlam taşır."
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
              "**Eylemler**({categoryAction}) · **Vücut**({categoryBody}) — kovalanmak veya düşmek gibi yapılan şeyler ve yüz veya saç gibi vücudun neresinde olduğu.",
              "**İnsanlar**({categoryPerson}) · **Yerler**({categoryPlace}) · **Renkler**({categoryColor}) · **Sayilar**({categoryNumber})"
            ]
          },
          {
            "p": "Onları kategoriye göre görmek için, [sembol sözlüğünde](/dream/symbols) tam listeyi görebilirsiniz."
          }
        ]
      },
      {
        "title": "Sadece {cultureNoteTotal} desteklenebilir.",
        "blocks": [
          {
            "p": "Semboller arasında, **{cultureNoteTotal}** ile birlikte yorumlama nedenleri yazılıdır. Örneğin, diş kaybı rüyasında üst ve alt dişler arasındaki ayrımın nedeni. Kalan sembollerin boş alanları vardır."
          },
          {
            "p": "**Boş alanları doldurmadık.** Makul kökenler eklemek, belgeyi kalınlaştırır, ancak o anda bu sözlük geleneksel olanı iletmek yerine onu uydurmuş olur. Neyin desteklenebileceğini ve neyin desteklenemeyeceğini ayırt etmek daha dürüsttür."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sözlüğü keyfi olarak genişletmeme nedenleri.",
        "blocks": [
          {
            "p": "Aslında sembolleri yüzlerce genişletmeyi denedik ama vazgeçtik. Otomatik olarak oluşturulan girişler ya 'romantizm → iyi ilişki' gibi aynı ifadeleri tekrarladı ya da belgelenmiş geleneksel bir kaynak sağlamadı. **Mevcut olanı doğru bir şekilde bulmanın** sayıları artırmaktan daha iyi olduğuna karar verdik."
          }
        ]
      },
      {
        "title": "İyi ve kötü, sözlük tarafından belirlenmiştir.",
        "blocks": [
          {
            "p": "Her sembol, yanında kaydedilmiş olan uğurluluğu taşır. **İyi {polarityPositive}**, **belirsiz {polarityAmbivalent}**, **dikkatli {polarityNegative}** ve **nötr {polarityNeutral}**."
          },
          {
            "p": "İyi anlamların yarıdan fazlasının bulunması, cömert olduğumuzdan değil, geleneksel rüya yorumlamasının her zaman böyle olmasındandır — domuzlar, ejderhalar ve ateş gibi büyük ve güçlü semboller genellikle iyi işaretler olarak görülmüştür. Ancak, tüm rüyalar olumlu bir şekilde yorumlanmaz. Bu değer, her sembolün doğasını yansıtır ve rüyanın genel atmosferi, bulunan sembolleri toplayarak yeniden değerlendirilir."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Hizmetin Temeli",
    "title": "Rüya hikayelerinde sembolleri nasıl buluruz.",
    "summary": "Serbest yazılmış cümlelerden sembollerin nasıl seçildiğini ve uzun bir kelimenin içinde tesadüfen yer alan bir sembolü nasıl filtrelediğimizi açıklar — 별 (\"yıldız\") kelimesinin içinde 특별할 (\"özel bir şey değil\") gibi.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Sağladığınız metinde sembolleri buluyoruz.",
        "blocks": [
          {
            "p": "Rüya hikayenizi serbestçe yazdığınızda, o metinde sözlükten semboller arıyoruz. Öğeleri seçmenize veya belirli bir formatta yazmanıza gerek yoktur. Sadece normal şekilde yazın, örneğin 'Dün gece, dev bir piton etrafımda dolandı.'"
          },
          {
            "p": "Arama yaparken, sadece sembolün adını değil, aynı zamanda **{aliasTotal} alternatif isimleri** de dikkate alıyoruz. Bunlar, 구렁이 (gureongi) ve 뱀 (baem), 떨어지다 (tteoreojida) ve 빠지다 (ppajida) gibi aynı şeyi ifade eden kelimelerdir. Son eklerle yapılan varyasyonlar, örneğin 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda) da dahil edilmektedir."
          }
        ]
      },
      {
        "title": "Bir kelime içinde tesadüfen ortaya çıkan karakterler sayılmaz",
        "blocks": [
          {
            "p": "Bu, Korece'deki en zorlayıcı yönlerden biridir. Semboller arasında, **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son) gibi sıkça diğer kelimelerde de görülen **{singleCharSymbolTotal} tek karakterli sembol** bulunmaktadır."
          },
          {
            "ul": [
              "특**별**할 (\"özel değil\") içinde gizli olan 별 (\"yıldız\")",
              "누군가에**게** (\"birisi tarafından\") içinde gizli olan 게 (\"yengeç\")",
              "**말**했다 (\"dedi\") içinde bulunan 말 (\"at\"), ve **배**가 고팠다 (\"açtık\") içinde bulunan 배 (\"bot, armut\")"
            ]
          },
          {
            "p": "Bunları sembol olarak saymak, alakasız yorumlara yol açar. Bu nedenle, çevresindeki karakterleri inceliyoruz — eğer **önünde bir Korece karakter varsa**, bunu daha uzun bir kelimenin parçası olarak kabul ediyoruz ve saymıyoruz, ayrıca **sonrasında bir ek veya fiil eki olup olmadığını** kontrol ediyoruz, böylece 「소가」 (soga) geçerken 「소리」 (sori) hariç tutulur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu şekilde çalışıyor",
        "blocks": [
          {
            "p": "Bu kuralı uygulamadan önce, on iki gerçek cümle ile test yapıldığında, **on iki cümle de** alakasız semboller içeriyordu. Anlamlı içeriği olmayan bir cümle, hatta bir conception dream olarak işaretlenmişti."
          },
          {
            "p": "Şimdi, bir tane kaldı — 「배가 고팠다」 (bae ga gopatda) içindeki 배 (bae). Aynı sesle ama farklı bir anlamda olduğu için, sadece çevresindeki karakterlerle filtrelenemez."
          },
          {
            "p": "Bir şeyi bulamamak dürüst bir meseledir. Ancak, alakasız bir şey bulmak, o kelimenin arkasında asla sahip olmadığı bir geleneği kurmak anlamına gelir."
          }
        ]
      },
      {
        "title": "Aynı karakterler her zaman aynı sonuçları verir",
        "blocks": [
          {
            "p": "Eşleştirme kurallarında tesadüfe yer yoktur. Sözlük sabittir ve kurallar belirlenmiştir, eğer aynı cümleyi tekrar girerseniz, **aynı sembol aynı sırada görünecektir**. Bugün gördüğünüz yorum, yarın gördüğünüzden farklı olmayacaktır."
          },
          {
            "p": "Bu özellik, kendimize verdiğimiz bir sözdür. Her seferinde değişen yorumlar eğlencelidir ama temelden yoksundur. Bu, [neden model kullanmadığımızı](/guide/no-ai) anlatan hikaye ile bağlantılıdır."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Hizmet Temeli",
    "title": "Aynı sembolün farklı anlamlara sahip olmasının nedeni",
    "summary": "Geleneksel olarak, bir yılanı tutmak ve bir yılan tarafından ısırılmak zıt anlamlardır. Bu, 215 sembolün 256 anlamı olan yapıyı ve durumları nasıl yorumlayacağımızı tartışır.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Semboller aynı olsa da, farklı durumlar farklı anlamlar doğurur",
        "blocks": [
          {
            "p": "Geleneksel hayal yorumunda, tek bir sembol her zaman bir anlama sahip değildir. Aynı yılan için bile, **tutmak ve ısırılmak tamamen zıt olarak yorumlanmıştır.** Bu, sözlükte de belirtilmiştir."
          },
          {
            "p": "Bu nedenle, {symbolTotal} sembolün toplamda {meaningTotal} anlamı vardır. Her anlam, **uygulandığı bağlamı** içerir ve eğer o bağlam, sağladığınız metinde görünüyorsa, o anlamı seçiyoruz."
          }
        ]
      },
      {
        "title": "Durumu nasıl belirleriz",
        "blocks": [
          {
            "p": "Sağladığınız metnin, o durumu belirten kelimeleri içerip içermediğini kontrol ediyoruz. 「뱀이 나를 물었다」 (baemi nareul mul-eotda) ifadesinde, ısırma durumu tanımlanırken, 「뱀을 품에 안았다」 (baemeul pume anatda) ifadesinde, tutma durumu tanımlanır. Eğer durumu belirten kelimeler yoksa, o sembolün **temel anlamını** kullanarak yorumluyoruz."
          },
          {
            "p": "Bu nedenle, hayalinizi yazarken, **sadece neyin göründüğünü değil, hangi eylemlerin yapıldığını** da eklerseniz, yorum daha doğru olacaktır. 「돼지를 봤다」 (dwaeji-reul bwatda) ifadesi, 「돼지가 집으로 들어왔다」 (dwaeji-ga jib-euro deureowatda) ifadesinden daha az şey ifade eder."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ne kadar çok yazarsanız, o kadar iyi, ama uzun yazmaya gerek yok",
        "blocks": [
          {
            "p": "İki veya üç cümle yeterlidir. Daha uzun yazmak, daha fazla sembol bulmak anlamına gelmez; aksine, alakasız kelimelerin karışması durumunda, alakasız semboller tanımlanabilir."
          }
        ]
      },
      {
        "title": "{contextSplitSymbolTotal} bölünmüş anlamlara sahip sembol vardır",
        "blocks": [
          {
            "p": "Sözlükteki {symbolTotal} sembol arasında, **{contextSplitSymbolTotal}** durumuna bağlı olarak değişen anlamlara sahip olanlar vardır. Geri kalanlar, durumdan bağımsız olarak tek bir yönde okunmuştur."
          },
          {
            "p": "Bu {contextSplitSymbolTotal} en dikkatli alanlardır. Durumu yanlış okumak, iyi haberi kötü haber olarak veya tersine iletmeye yol açabilir. Bu nedenle, durum belirsizse, o sembolün temel anlamıyla gitmeyi tercih ediyoruz — belirsiz bir şeyi kesinmiş gibi ifade etmek istemiyoruz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Uyanma anındaki hisler de dikkate alınır",
        "blocks": [
          {
            "p": "Hayal içeriğinin altında sorulan hisler ve tekrarlar, sembolleri bulmak için kullanılmaz. Bölünmüş anlamlar içeren durumlarda hangi yönde yorum yapılacağına karar verirken referans alınır. Seçim yapmanıza gerek yok; sonuçlar yine de sağlanacaktır."
          }
        ]
      },
      {
        "title": "Hayalin genel atmosferi ayrı olarak sayılır",
        "blocks": [
          {
            "p": "Birden fazla sembol bulunursa, her bir sembolün olumlu mu yoksa ihtiyatlı mı olduğunu toplayarak hayalin genel tonunu belirleriz. Bir iyi sembol ve bir ihtiyatlı sembol içeren bir hayal, sadece 'iyi hayal' olarak adlandırılmaz."
          },
          {
            "p": "Çeşitli sembolleri ve anlamlarını [sembol sözlüğünde](/dream/symbols) önizleyebilirsiniz. Hayalinizi yazmadan önce nelerin dahil olduğunu gözden geçirmek de iyidir."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Hizmet Temeli",
    "title": "Uğurlu hayalleri ve uğursuz hayalleri ayırt etme kriterleri",
    "summary": "Her sembole atanan dört değer ve bunların dağılımı, olumlu olanların neden yarıdan fazla olduğu ve karışık hayalleri neden karışık olarak ilettiğimiz.",
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
              "**{polarityAmbivalent} duruma göre değişen semboller** — yılanlar gibi, anlamı yapılan şeye bağlı olarak değişebilir. Bu kategori en dikkatli olanıdır.",
              "**{polarityNegative} uğursuz semboller** — dedikodu, tartışmalar veya kayıplar olarak görülenler.",
              "**{polarityNeutral} nötr semboller** — kendileri iyi ya da kötü olmayanlar, renkler veya sayılar gibi."
            ]
          }
        ]
      },
      {
        "title": "Olumlu sembollerin yarıdan fazla olmasının nedeni",
        "blocks": [
          {
            "p": "Bu, değerlendirmelerimizde cömert olduğumuzdan değil. **Geleneksel hayal yorumu (hayal yorumu) her zaman böyle olmuştur.** Domuzlar, ejderhalar, ateş ve su gibi büyük ve güçlü semboller genellikle iyi işaretler olarak görülmüştür ve sözlük bu geleneği yansıtır."
          },
          {
            "p": "Bu nedenle, 'iyi bir sembolün ortaya çıkması' demek, 'iyi şeylerin olacağı' anlamına gelmez. İletilebilecek olan, o sembolün gelenekte nasıl yorumlandığı ile sınırlıdır."
          }
        ]
      },
      {
        "title": "Bir hayalin tonu sembollerinden toplanır",
        "blocks": [
          {
            "p": "Birden fazla sembol bulunursa, her birinin olumluğunu toplayarak hayalin genel tonunu belirleriz. Sadece olumlu semboller görünüyorsa, bu iyi bir hayaldir; sadece uğursuz semboller görünüyorsa, bu uğursuz bir hayaldir; eğer **karışık ise, karışık olarak iletiyoruz.**"
          },
          {
            "p": "Karışık sembolleri bir tarafa zorla kategorize etmiyoruz. Gerçekte, insanların gördüğü hayaller genellikle karışıktır ve bunları 'iyi bir hayal' olarak özetlemek ne doğru ne de yardımcıdır."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kullanılmaması Gereken Kelimeler",
        "blocks": [
          {
            "p": "Ne olacağı, ne zaman olacağı veya sağlık ve zenginlik hakkında kesin ifadeler vermeyin. Geleneksel olarak aktarılan sembollerin anlamlarını iletmek, geleceği tahmin etmekten farklıdır."
          }
        ]
      },
      {
        "title": "Kötü Bir Rüya Göründüğünde",
        "blocks": [
          {
            "p": "Bir uyarı olarak yorumlanan bir sembol görünse bile, bu mutlaka kötü bir haber değildir. Geleneksel rüya yorumunda, kötü bir rüya genellikle **mevcut durumu işaret eden bir ifade** olarak kullanılmıştır. Eğer çatışma öneren bir sembol görünürse, bu sözleri tutma hatırlatıcısı olarak okunabilir."
          },
          {
            "p": "Aynı nedenle, bu hizmet tılsım veya nazar boncuğu satmamaktadır. Satılan yalnızca [rüyalarınızı korumanın iki yolu](/guide/reports)dır."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Kavuşma Rüyası",
    "title": "Kavuşma Rüyalarını Nasıl Yorumlayabilirsiniz",
    "summary": "27 kavuşma rüyası sembolünü nasıl belirleyeceğinizi, tüm domuz rüyalarının neden kavuşma rüyası olarak kabul edilmediğini ve hamilelik veya cinsiyet tahmin etmeyen ilkeleri açıklar.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Öncelikle Bunu Netleştirin",
        "blocks": [
          {
            "p": "**Dreams-Link hamilelik durumunu belirlemez. Ayrıca çocuğun cinsiyetini de göstermez.** Bunlar rüyalar aracılığıyla bilinemeyen konulardır ve bizim yapabileceğimiz bir şey değildir."
          },
          {
            "p": "Size söyleyebileceğimiz şey sınırlıdır — **bu rüyada geleneksel olarak bir kavuşma rüyası olarak kabul edilen bir sembolün belirdiği gerçeği.** Atalarımızın bu sembolü nasıl yorumladığı budur."
          }
        ]
      },
      {
        "title": "Kavuşma Rüyası Olarak Kabul Edilen {conceptionSymbolTotal} Sembol Var",
        "blocks": [
          {
            "p": "Sözlükteki {symbolTotal} sembol arasında, **{conceptionSymbolTotal}** kavuşma rüyası olarak işaretlenmiştir. Ejderhalar, domuzlar ve yılanlar gibi birçok hayvanın yanı sıra, şeftali ve kestane gibi meyveler ile güneş ve ay da dahildir."
          },
          {
            "p": "Ancak, **o sembolün görünmesi hemen bir kavuşma rüyası olduğu anlamına gelmez.** Bu, bu hizmetin çaba sarf ettiği yerdir."
          }
        ]
      },
      {
        "title": "Yargı, Sembollere Değil, Gerçek Anlamlara Dayanır",
        "blocks": [
          {
            "p": "Domuz, kavuşma rüyalarının sembolüdür ve aynı zamanda **zenginlik rüyalarını temsil eder.** Eğer sembol sadece göründüğü için kavuşma rüyası olarak kabul edilirse, o zaman domuz gören herkes bir kavuşma rüyası yaşamış olurdu. Gerçekte, çoğunlukla zenginlik rüyası olarak yorumlanmıştır."
          },
          {
            "p": "Bu nedenle, **o sembolden türetilen gerçek anlama bakarız, sembole değil.** Sadece sağladığınız durumdaki kavuşma yönüne eğilimli anlam seçildiğinde bunu kavuşma rüyası olarak işaretleriz. Aynı domuzda bile, cümle farklıysa okuma değişir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Eğer Hamilelikten Bahsederseniz, Öncelikle Buna Bakarız",
        "blocks": [
          {
            "p": "Eğer yazınız hamilelik, kavuşma rüyası veya doğum gibi kelimeler içeriyorsa, önce o sembolün kavuşma yönüne eğilimli anlamına bakarız. Aynı domuz rüyasında bile, atalarımızın bunu yorumlama şekli mevcut duruma bağlı olarak değişmiştir."
          }
        ]
      },
      {
        "title": "Kavuşma Rüyası Raporlarını Ayırmanın Sebebi",
        "blocks": [
          {
            "p": "Kavuşma rüyaları, diğer rüyalardan farklı bir amaca hizmet eder. Çocuk doğduktan sonra bile sıkça konuşulur ve aile üyeleri arasında paylaşılır. Bu nedenle, sadece ekranda görmek yerine, ayrı bir **saklanabilir belge** oluşturduk."
          },
          {
            "p": "Nelerin dahil olduğu [rüyalarınızı korumanın iki yolu](/guide/reports) not edilmiştir. Ekranda gördüğünüz şeyleri satın almadan tüm yorumları görebilirsiniz."
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
            "p": "Belirli bir format yoktur. Normalde konuştuğunuz gibi birkaç cümle yeterlidir. Ancak, iyi çalışan şeyler belirlenmiştir — **görünen şeyler** ve **olanlar.**"
          },
          {
            "ul": [
              "İyi çalışanlar — 「Beni saran büyük bir yılan」, 「Açık su aktığını gördüm」, 「Yüksek bir yerden düştüm」",
              "İyi çalışmayanlar — 「Korktum」, 「Garip hissettim」, 「Birinin benden nefret ettiğini hissettim」"
            ]
          },
          {
            "p": "Eğer sadece duyguları yazarsanız, bulunacak semboller olmayacaktır. Bunun nedeni, geleneksel rüya yorumunun [nesneler ve eylemler](/guide/categories) hakkında konuşmasıdır, duygular değil."
          }
        ]
      },
      {
        "title": "Yaptığınız Şeyi Yazmak Daha Doğru Olur",
        "blocks": [
          {
            "p": "Aynı sembol ile bile, durumlara bağlı olarak anlamların farklı olduğu {contextSplitSymbolTotal} durum vardır. Geleneksel olarak, bir yılanı tutmak ve ısırılmak zıt olarak yorumlanmıştır."
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
            "p": "Rüya içeriğinin altında, **uyandığınızda hissettiğiniz duygu** ve **aynı rüyayı tekrar edip etmediğiniz** seçeneğini belirleyeceğiniz bir yer vardır. Sonuç sağlanması için her ikisini de seçmeniz gerekmez."
          },
          {
            "p": "Bu değerler sembolleri bulmak için kullanılmaz. Aynı sembolden **hangi anlamı seçeceğimizi** belirlerken ve sonucu nasıl ileteceğimizi belirlerken referans alınır."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hamilelikten Bahsettiğiniz Durumlarda",
        "blocks": [
          {
            "p": "Eğer yazınız hamilelik, kavuşma rüyası veya doğum gibi kelimeler içeriyorsa, önce o sembolün kavuşma yönüne eğilimli anlamına bakarız. Aynı domuz rüyasında bile, atalarımızın bunu yorumlama şekli mevcut duruma bağlı olarak değişmiştir — [kavuşma rüyalarını nasıl yorumlayacağınız](/guide/conception-dreams)."
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
            "p": "Sağladığınız metin hiçbir yerde kaydedilmez. Serbestçe yazabilmenizin nedeni [veri saklamama yöntemi](/guide/no-storage) olarak not edilmiştir."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Hizmetin Temeli",
    "title": "Dokuz Kategoriye Ayrılmış Kriterler",
    "summary": "Nesneler, hayvanlar ve doğadan renklere ve sayılara kadar dokuz kategori vardır ve duygusal bir kategorinin neden dahil edilmediği ile ilgili bir sebep vardır.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Rüyalardaki Semboller Dokuz Kategoriye Ayrılmıştır",
        "blocks": [
          {
            "p": "{symbolTotal} sembol, özelliklerine göre dokuz kategoriye gruplandırılmıştır. Bölünme kriteri, **rüyalarda nasıl göründükleridir** — hayvanlar, nesneler veya yaptığımız eylemler olarak."
          },
          {
            "ul": [
              "**Nesneler {categoryThing}** — Para, aynalar ve bıçaklar gibi somut eşyalar. Bu en kalın kategoridir.",
              "**Animals {categoryAnimal}** — dragon·pig·snake·cow. Many of these are seen as conception dreams.",
              "**Doğa {categoryNature}** — su·ateş·güneş·ay·dağ gibi büyük ve eski şeyler.",
              "**Eylem {categoryAction}** — rüyada yapılan şeyler, örneğin kovalanmak·düşmek·uçmak.",
              "**Vücut {categoryBody}** — diş·saç·kan. Anlam, vücudun neresinde olduğuna bağlı olarak değişir.",
              "**Kişi {categoryPerson}** · **Yer {categoryPlace}** · **Renk {categoryColor}** · **Sayı {categoryNumber}**"
            ]
          }
        ]
      },
      {
        "title": "Neden bir duygu kategorisi yok?",
        "blocks": [
          {
            "p": "「kaygı」·「özlem」 gibi kategoriler dahil edilmemiştir. **Bu, geleneksel rüya yorumunun duyguları ele almaması nedeniyledir.** Eski yorumlar, rüya görenin hislerinden ziyade görünen ve olan şeylere odaklanıyordu."
          },
          {
            "p": "Bir duygu kategorisi oluşturmaya çalıştık, ancak sonuçlar 「sevgi kaybı」·「duygusal denge」 gibi terimler oldu. Bunlar rüyalardan gelen **semboller** değil, modern psikolojiden kelimelerdir. Bu, farklı bir hizmet türüdür ve bu sözlüğün amacı değildir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yani yazarken",
        "blocks": [
          {
            "p": "Lütfen **gördüğünüz ve yaptığınız şeyleri** yazın; bu çok daha iyi sonuçlar verecektir. Ancak, uyanınca hislerinizi ayrı olarak soracağız — aynı sembol durumuna bağlı olarak farklı anlamlar taşıyabilir."
          }
        ]
      },
      {
        "title": "Renkler ve sayılar tek başına durmaz",
        "blocks": [
          {
            "p": "Renk {categoryColor} ve sayı {categoryNumber} doğuştan iyi veya kötü anlamlara sahip değildir. Beyaz bir yılan ile siyah bir yılan farklıdır, anlamları **ilişkilendirildikleri şeylere** bağlı olarak değişir. Bu nedenle, bu iki kategori diğer sembollerle birlikte değerlendirilir."
          },
          {
            "p": "Kategorilere göre tam bir liste [sembol sözlüğünde](/dream/symbols) mevcuttur. Bir sembole açıldığında, geleneksel anlamı, kategorisi ve ilgili semboller gösterilecektir."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Nasıl kullanılır",
    "title": "Bir sembol bulunamadığında",
    "summary": "Bulamazsanız, bulunmadığını bildireceğiz. Neden bulunamadığını, o ekranda size ne göstereceğimizi ve sözlüğün nasıl genişletileceğini tartışacağız.",
    "backLabel": "Yorumlama temeli",
    "sections": [
      {
        "title": "Bulunmadığında, bulunmadığını bildireceğiz",
        "blocks": [
          {
            "p": "Eğer sağladığınız metinde herhangi bir sembol bulamazsak, **bulunmadığını bildireceğiz.** Benzer bir şeyle zorla ilişkilendirmeyecek veya yeri doldurmak için makul cümleler oluşturmayacağız."
          },
          {
            "p": "Bu, bu hizmetin en dikkatli olduğu konudur. Bir boşluğu doldurduğumuz an, sadece geleneksel yorumları aktarma vaadini bozar."
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
              "**Henüz sözlükte olmayan bir sembol.** Şu anda {symbolTotal} sembol listelenmiştir, ancak rüyalarda ortaya çıkabilecek çok daha fazlası vardır.",
              "**Sadece duyguları yazdınız.** Eğer sadece 「korktum」·「garip hissettim」 gibi duygular varsa, eşleştirilebilecek semboller yoktur. Geleneksel rüya yorumu, duygulardan ziyade **görünen nesneler ve eylemler** hakkında konuşur.",
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
            "p": "Lütfen rüyada **gördüğünüz ve yaptığınız şeyleri** dahil edin. 「Kaygılıydım」 demek, 「Yüksek bir yerden düştüm」 demekten daha az etkilidir ve 「Beğendim」 demek, 「Açık su akarken gördüm」 demekten daha az etkilidir."
          }
        ]
      },
      {
        "title": "boş bir ekran bırakmıyoruz",
        "blocks": [
          {
            "p": "Bir şey bulunamadığında, o ekranda **{popularSymbolCount} sık aranan sembolü** de göstereceğiz. Bunlar, temsil edilebilirliklerine göre sözlükten seçilmiştir ve birinin rüyanızda görünüp görünmediğini hatırlamanıza yardımcı olabilir."
          },
          {
            "p": "Tüm listeyi gözden geçirmek isterseniz, [sembol sözlüğünde](/dream/symbols) kategoriye göre düzenlenmiş {symbolTotal} sembol bulunmaktadır. Her sembol, geleneksel anlamını ve ilgili sembolleri içerir."
          }
        ]
      },
      {
        "title": "Sözlük gelecekte nasıl genişletilecek?",
        "blocks": [
          {
            "p": "Sayıları artırmaktan ziyade, **zaten var olanı doğru bir şekilde tanımlamaya** odaklanıyoruz. Aynı sembol için {aliasTotal} alternatif isim ekledik ve eklerin formunu değiştiren kelimeleri tanımayı mümkün kıldık."
          },
          {
            "p": "Sembolleri genişletirken, yalnızca **belgelenmiş geleneksel bir kaynağı sağlayabilenleri** dahil edeceğiz. Kanıt olmadan sayıları artırmak, bir sözlükten ziyade yaratım haline gelir — [modelleri neden kullanmadığımızı](/guide/no-ai) belgelerle kaydettik."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Hizmet temeli",
    "title": "Rüya yorumunda yapay zekanın kullanılmaması nedenleri",
    "summary": "Yorumlama oluşturma sürecinde bir modeli çağıran hiçbir kod yoktur. Empirik sonuçlara dayanan bir model kullanarak sözlüğü genişletme girişiminden vazgeçtik ve böylece kazanılan ve vazgeçilen şeyler.",
    "backLabel": "Yorumlama temeli",
    "sections": [
      {
        "title": "Rüya yorumunda yapay zeka kullanılmamaktadır",
        "blocks": [
          {
            "p": "Mevcut birçok rüya yorum hizmeti, rüya hikayelerini üretken modellere yerleştirerek oluşturulan metinler göstermektedir. Dreams-Link bunu yapmamaktadır. **Yorumlama oluşturma sürecinde bir modeli çağıran hiçbir kod yoktur.**"
          },
          {
            "p": "Yaptığımız şey basittir. Sağladığınız metindeki sözlükte bulunan sembolleri buluyoruz ve bu semboller için sözlüğün yazdığı anlamları seçip gösteriyoruz. Sözlükte olmayan cümleler için bir yer yoktur."
          }
        ]
      },
      {
        "title": "Bu karar neden alındı?",
        "blocks": [
          {
            "p": "**Modeller, bilmediklerini bilmediklerini söylemez.** Belgelenmiş geleneksel bir kaynağı olmayan semboller hakkında sorulduğunda, makul kökenler uydururlar. Ve uydurulup uydurulmadığı, okuyucunun ayırt edemeyeceği bir şeydir. Eğer geleneksel aktarımın yerini yaratım alırsa, hizmetin temeli çöker."
          },
          {
            "p": "Aslında, sözlüğü genişletmek için bir modelin semboller oluşturmasını sağlamaya çalıştık. Dikkate değer altmış altı örnekten, **elli beşi belgelenmiş geleneksel bir kaynak sağlayamadı** ve bazıları geleneksel rüya yorumunda var olamayacak şeyler içeriyordu, örneğin metro ve otoyollar. Bu nedenle, **hiçbiri dahil edilmedi.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Daha büyük modeller için de aynı şey geçerliydi",
        "blocks": [
          {
            "p": "Aynı görevi daha iyi bir modelle denediğimizde, on dokuzun sadece biri geçti ve o da sadece kanıt pozisyonunda aynı kelimelerin tekrarıydı. Daha büyük modeller, bilmedikleri şeyler hakkında **daha makul** konuşurlar."
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
              "**Sağladığınız rüya dışarı çıkmaz.** Dış şirket sunucularına göndermeye gerek yoktur — lütfen [saklamama yöntemini](/guide/no-storage) okuyun.",
              "**Ücretsiz sunulabilir.** Rüyalar, her gün gördüğümüz şeylerdir, bu nedenle birçok sorgu vardır. Her sorgu için bir model çağrılırsa, maliyetlerin bir yerden karşılanması gerekir."
            ]
          }
        ]
      },
      {
        "title": "Bunun yerine ne verilir",
        "blocks": [
          {
            "p": "Sözlükte olmayanı yorumlayamayız. Bir model kullanılsaydı, yazdığınız her şey makul bir cevap üretebilirdi. Bulunamadığında **bulunamadığını söyleyen tarafı seçtik.** O zaman gösterdiğimiz şey, [bir sembol bulunamadığında](/guide/not-found) yazılmıştır."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Ücretli Ürünler",
    "title": "Rüyalarınızı Saklamanın İki Yolu",
    "summary": "Yorumlama kendisi bir ücret gerektirmez. Satışa sunduğumuz iki şeyin ne olduğunu, neler içerdiğini ve neden daha iyi yorumlar olmadığını açıklıyoruz.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Yorumlama kendisi bir ücret gerektirmez",
        "blocks": [
          {
            "p": "Rüyalarınızı yazmak ve hangi sembollerin mevcut olduğunu görmek **para gerektirmez ve üyelik gerektirmez.** İnsanlar her gün rüya gördüğünden, bu alanın ücretsiz olması gerektiğine karar verdik."
          },
          {
            "p": "**Satışa sunduğumuz iki şey daha iyi yorumlar değildir.** Onlar **aynı yorumu saklamanın iki yoludur.** Ekranda gördüğünüz içerik, ödeme sonrasında değişmez."
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
            "p": "Bu, iyi bir rüya ekranı kapandıktan sonra kaybolduğunda pişmanlık hissedenler içindir. Rüyaları saklamadığımız için, bunu saklamak istiyorsanız, tek yol budur."
          }
        ]
      },
      {
        "title": "Conception Dream Report — {conceptionPages} Sayfa Belgesi",
        "blocks": [
          {
            "p": "Conception dreams olarak yorumlanan semboller gösteren rüyalar için, **{conceptionPages} sayfalık bir belge oluşturuyoruz.** Hangi sembollerin ortaya çıktığını, bu sembollerin geleneksel olarak nasıl yorumlandığını ve bunu kaydetmek için bir yer içerir."
          },
          {
            "p": "Conception dream'ler, çocuk doğduktan sonra bile aile üyeleri arasında sıkça tartışıldığı ve paylaşıldığı için, ekran üzerinde sadece görüntülemek için çok değerli olan rüyalar için ayrı bir belge oluşturduk."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Burada da Söylenmeyen Kelimeler",
        "blocks": [
          {
            "p": "Hamilelik durumu veya çocuğun cinsiyetini belirlemiyoruz. Bu tür ifadeler belgede yer almaz. Ayrıntılar için [bir conception dream'ü nasıl yorumlayacağınızı](/guide/conception-dreams) görün."
          }
        ]
      },
      {
        "title": "Artık Neden Belge Yok",
        "blocks": [
          {
            "p": "Kardeş hizmetler dokuz sayfalık raporlar sağlar. Saju motoru sadece bir doğum tarihinden birçok değer çıkarır. Rüya yorumlaması bu şekilde çalışmaz."
          },
          {
            "p": "Sözlükte listelenen semboller toplam {symbolTotal} ve bunların çoğu **her biri için bir anlam taşır.** Bunu dokuz sayfaya yaymak için, hiçbir materyalde bulunmayan geleneksel anlamları yazmamız gerekecek ve bu, bu hizmetin yapmamaya karar verdiği şeydir. Bu nedenle, belge yalnızca materyallerin dürüstçe izin verdiği kadar uzun olup, daha uzun değildir."
          }
        ]
      },
      {
        "title": "Fiyatlar ve Satış Durumu",
        "blocks": [
          {
            "p": "Fiyatlar [fiyatlandırma kılavuzunda](/pricing) listelenmiştir. Bu belgenin miktarları listelememesinin nedeni kasıtlıdır — fiyatlar değiştiğinde, rehber belgesinin eski miktarlarla kalmasını önlemektir. Ekran ve şartlar her yerden aynı miktarı okur."
          },
          {
            "p": "Satın aldığınız belgeler **aynı siparişle tekrar alınabilir.** Ancak dosyaları saklamadığımız için, sonuç ekranını terk ettikten sonra bunları yeniden oluşturamazsınız — lütfen aldığınız dosyaları saklayın."
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
            "p": "Dreams-Link hesap oluşturmaz. İsim, e-posta veya telefon numarası toplamıyoruz. Topladığımız tek şey, yazdığınız rüyalar, uyandığınızda hissettiğiniz duygular ve aynı rüyayı tekrar tekrar görüp görmediğinizdir ve bu, yorumlama tamamlandıktan sonra kalmaz."
          },
          {
            "p": "Rüya hikayeleri, bu hizmetin aldığı en özel değerlerdir. Bu nedenle, kurallar gereğinden daha katıdır — gönderdiğiniz şeyleri yazmak için bile bir tablo oluşturmadık."
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
            "p": "**#**'den sonra gelen şey, giriş değeridir. Bu kısma **fragment** denir, bu **tarayıcının sunucuya göndermediği bir parçadır.** Bu standart web davranışıdır ve bizim oluşturduğumuz bir kural değildir — bu, aslında bir belgede bir konumu belirtmek için tasarlanmıştır, bu nedenle sunucunun bunu görmesine gerek yoktur."
          },
          {
            "p": "Burada, bu özellik özellikle önemlidir — sağladığınız rüya **erişim kayıtlarında kalmaz.**"
          },
          {
            "p": "Başka bir deyişle, sonuç bağlantısını açtığınızda, tarayıcı o değeri hesaplama talep etmek için okur ve sunucumuz hesaplama için değeri alır, yanıtı döndürür ve sonra unutur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bağlantıları başkalarına gönderirken dikkatli olun",
        "blocks": [
          {
            "p": "Sunucuda saklanmadığı gerçeği, bağlantının güvenli olduğu anlamına gelmez. Sonuç bağlantısı, sağladığınız rüyayı içerir, bu nedenle o bağlantıyı alan kişi o içeriği okuyabilir."
          }
        ]
      },
      {
        "title": "Hesaplama neden sunucuda yapılır ama saklanmaz?",
        "blocks": [
          {
            "p": "Hesaplama kendisi sunucuda yapılır. Sembolleri bulmak, tüm sözlüğü gerektirir ve o sözlük tarayıcıya gönderilecek kadar büyük değildir. Sözlüğü sunucuda tutmak, bir hata düzeltildiğinde herkes için bir anda yansıdığı anlamına gelir. Ancak, **talep işlendikten sonra, o değer hiçbir yerde kullanılmaz.** Veritabanına eklemek için hiçbir kod yoktur."
          },
          {
            "p": "İşlem için gerekli olan minimal bir kayıt tutulur — aynı kişinin kısa bir süre içinde çok fazla talep göndermesini önlemek için bir sayaç. Bu, rüya içeriğini içermez ve erişim IP'si de saklanmaz. Sadece tarih ile hashlenmiş bir değer sayılır ve o değer gün değiştiğinde değişir."
          }
        ]
      },
      {
        "title": "Saklanmadığı için yapılamayan şeyler",
        "blocks": [
          {
            "p": "Açıkçası, veri saklamadığımız için vazgeçtiğimiz şeyler var."
          },
          {
            "ul": [
              "**Rüya günlüğü yoktur.** Geçen haftanın yorumunu geri alamazsınız ve tekrar görmek için bağlantıya sahip olmalısınız. Bu kasıtlı olarak yapılmıştır — bir günlüğü oluşturmak için, en özel yazıların sürekli saklanması gerekir.",
              "**Her seferinde aynı değeri yeniden hesaplıyoruz.** Önbellek yoktur. Bunun yerine, sözlük sabittir ve eşleşme kuralları belirleyicidir, bu nedenle aynı metin her zaman aynı sembolü verir — kurallar, önbelleğin garanti edeceği şeyi değiştirir.",
              "**Yenilemek, reklam kapısını tekrar açacaktır.** Bunun nedeni, görüntüleme kayıtlarını bırakacak bir yer olmamasıdır."
            ]
          }
        ]
      },
      {
        "title": "Satın alma durumunda",
        "blocks": [
          {
            "p": "Bir rapor satın alırsanız, o anda bir işlem kaydı tutulacaktır. Ödeme, yasal olarak tanımlanmış bir saklama süresine sahiptir ve bir sipariş geçmişi olmadan geri ödemeler işlenemez. Ancak, yine de, **okuma için kullanılan rüya metni siparişle ilişkilendirilmez** — bu, ödeme onaylandıktan sonra belge oluşturulurken tekrar alınır ve o anda yazılır."
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
    "summary": "Bu, kullanımınızı etkileyebilecek değişiklikleri bildirmek için bir yerdir.",
    "backLabel": "Ana Sayfaya Dön",
    "sections": []
  },
  "contact": {
    "eyebrow": "İletişim",
    "title": "Soru ve Talepler",
    "summary": "Bu, kullanım, geri ödemeler, kişisel bilgi talepleri ve hata raporları hakkında sorular için iletişim kanalınızdır, ayrıca iş bilgilerini de içerir.",
    "backLabel": "Ana Sayfaya Dön",
    "sections": [
      {
        "title": "E-posta ile İletişim",
        "blocks": [
          {
            "p": "Lütfen sorularınızı **{email}** adresine gönderin. 2 iş günü içinde yanıt vereceğiz. Ödeme ve geri ödeme talepleri için, **sipariş numaranızı veya ödeme e-posta adresinizi** eklemek daha hızlıdır."
          },
          {
            "p": "Telefonla yapılan sorular {customerCenter} üzerinden alınmaktadır."
          }
        ]
      },
      {
        "title": "Bu kanala ne gönderilebilir?",
        "blocks": [
          {
            "ul": [
              "**Ödeme ve Geri Ödeme** — Eğer belge oluşturulmamışsa veya ödeme tutarı siparişten farklıysa, tam geri ödeme yapılacaktır. Koşullar [geri ödeme politikası](/refund-policy) içindedir.",
              "**Kişisel Bilgiler** — Erişim, düzeltme ve silme taleplerini kabul ediyoruz. İşleme politikası [gizlilik politikası](/privacy) içindedir.",
              "**Yorum Hatalarını Bildirin** — Eğer semboller yanlış bulunmuşsa veya yorum garip görünüyorsa, lütfen bize bildirin. O rüya hikayesini ne zaman yazdığınızı eklerseniz, aynı metinle tekrar kontrol edebiliriz."
            ]
          }
        ]
      },
      {
        "title": "İş Bilgileri",
        "blocks": [
          {
            "ul": [
              "**Şirket Adı** — {companyName}",
              "**Temsilci** — {representative}",
              "**İşletme Kaydı Numarası** — {businessNumber}",
              "**Sanal Mağaza İşletme Kaydı Numarası** — {mailOrderNumber}",
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
            "p": "Soru e-posta ile sağladığınız rüyayı yeniden yazmanıza gerek yoktur. Girdileri kaydetmiyoruz, bu nedenle tekrar kontrol edemeyiz ve sipariş numarası doğrulama için yeterlidir. Sadece rapor yorum hataları gibi kesinlikle gerekli olduğunda yazın."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Hizmet İlkeleri",
    "title": "Yapmadığımız Şeyler",
    "summary": "Biz piyango numaraları, rüya günlüğü, hamilelik belirlemeleri veya tılsımlar sağlamıyoruz. Her birini yapmamaya neden olduğumuzu açıklıyoruz.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Piyango numaraları sağlamıyoruz",
        "blocks": [
          {
            "p": "Rüya yorumlama hizmetlerinde yaygın olarak ele alınsa da, bunu yapmıyoruz. **Rüyalardan numara çekmek için geleneksel rüya yorumlamasında bir temel yoktur.** Domuz rüyalarının zenginlik olarak yorumlandığına dair kayıtlar olsa da, bunu üreten herhangi bir literatürde altı numara çıkarma kuralı yoktur."
          },
          {
            "p": "Bunları oluşturmak için, uydurmamız gerekecek ve o anda bu hizmet, geleneğin elden geçirdiği yorumları iletmek için bir yer olmaktan çıkacaktır. Bu, finansal kayba yol açabileceği için özellikle endişe vericidir."
          }
        ]
      },
      {
        "title": "Rüya günlüğü oluşturmuyoruz",
        "blocks": [
          {
            "p": "Geçmiş rüyaları toplamak için bir özellik olması pratik olsa da, **sağladığınız rüyaları sürekli olarak saklamamız gerekir.** Rüya anlatımları, bu hizmetin aldığı en özel unsurdur ve bunu değiştirmemeye karar verdik."
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
            "p": "Sadece bir **hamilelik belirleme rüyası** olarak yorumlanan bir sembolün ortaya çıktığını belirteceğiz. Hamile olup olmadığınız veya çocuğunuzun kız mı yoksa erkek mi olduğu, **rüyalar aracılığıyla bilinecek bir şey değildir.** Bu tür ifadeler ekranda veya ücretli belgelerde yer almaz."
          }
        ]
      },
      {
        "title": "Tılsım veya muska satmıyoruz",
        "blocks": [
          {
            "p": "Kötü bir şekilde yorumlanan bir sembol, bir şey satın almak için bir neden değildir. Kötü bir rüya, geleneksel olarak **şu anda incelemeniz gereken bir durumu belirtmek için** kullanılmıştır, bir şeyi önlemek için ödeme yapmak için değil."
          },
          {
            "p": "Buna dayanarak bir şey satmak için kaygı yaratmıyoruz. Satışını yaptığımız tek şey yukarıda belirtilen iki şeydir ve hiçbiri ek yorum sağlamaz, daha ziyade **aynı içeriği saklama yollarıdır.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Gelecek hakkında kesin ifadeler yapmıyoruz",
        "blocks": [
          {
            "p": "Bir şeyin olup olmayacağı, ne zaman olacağı veya sağlık, zenginlik veya yaşam süresi hakkında kesin ifadeler yapmıyoruz. Geleneksel sembollerin anlamlarını iletmek ile geleceği tahmin etmek farklı konulardır."
          }
        ]
      },
      {
        "title": "Mevcut olmayan yorumlar uydurmuyoruz",
        "blocks": [
          {
            "p": "Sözlükte mevcut olmayan semboller için, **bulamadığımızı belirteceğiz.** Benzerlerini bir araya getirmiyoruz veya alanı makul cümlelerle doldurmuyoruz. Bu nedenle, bu hizmet [rüya yorumlaması için yapay zeka kullanmıyor](/guide/no-ai). Model, bilmediği şeyleri bilmediğini söylemez."
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
  "intro": "Kullanım şartlarınıza ilişkin değişiklikler — fiyatlar, politikalar — yürürlüğe girmeden önce burada yayınlanır. Ekranın hızlanması gibi iç iyileştirmeler burada yayınlanmaz: burada görünen, bilmeniz gerekenlerdir.",
  "empty": {
    "title": "Hiçbir duyuru yayınlanmadı",
    "body": "Eğer size bildirilmesi gereken herhangi bir değişiklik olursa, burada yayınlanacaktır."
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
        "Rüya hikayeleri, bu hizmetin aldığı en özel değerlerdir. Bu nedenle, herhangi bir tabloda kaydedilmezler. Girdi, yalnızca hesaplama için sonuç adresinde taşınır ve pencere kapatıldığında kaybolur.",
        "Rüyaları toplayan ve akışı gösteren (rüya günlüğü) bir özellik oluşturmamaya karar verdik. Bu yararlı bir özellik, ancak bunu yapmak için en özel yazıların sürekli olarak saklanması gerekir.",
        "Sonuç bağlantısını başkalarına gönderdiğinizde, rüya içeriğini içerir. Paylaşırken dikkatli olun."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Sonuçlar, sembol sözlüğü ve hesaplama kriterlerini içerir.",
      "body": [
        "Yorumlama temeli, geleneksel rüya yorumlama sembol sözlüğüdür. Sonuçlar ve belgeler, o sözlüğün versiyonunu (örneğin 1.2.0) ve eşleşme kurallarının versiyonunu (örneğin dream-1.0.0) içerecektir. Aynı rüya, her zaman aynı kriterlere dayalı olarak aynı sembolü verecektir.",
        "Sözlüğe semboller ekler veya sonuçları değiştirebilecek şekilde anlamları değiştirirsek, bu durum burada belirtilir. Çünkü daha önce aldığınız sonuçlar değişebilir.",
        "Sözlükte olmayan geleneksel anlamlar oluşturmayız. Eğer sembol bulunamazsa, basitçe bulunmadığını belirtir ve sonuçlandırırız."
      ]
    },
    "2026-08-06-conception": {
      "title": "We only inform you about a conception dream and do not make judgments.",
      "body": [
        "If symbols traditionally viewed as a conception dream appear in the dream, we will inform you of that fact. However, we do not determine pregnancy status or the child's gender — such claims have no basis, and medical judgments are the responsibility of medical institutions.",
        "Geleneksel anlatılarda oğul ve kızların bahsedilmesi, geçmişten gelen geleneklerin bir yansımasıdır ve bunun doğru bir şekilde tahmin ettiğimiz anlamına gelmez."
      ]
    }
  }
} satisfies NoticeCopy;
