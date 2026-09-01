import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Türkçe — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const TR_DOCS = {
  "guide": {
    "eyebrow": "Hesaplama Temeli",
    "title": "Hesaplama temeli nedir?",
    "summary": "Dreams-Link'in kullandığı tüm kuralları açıklıyoruz. Hangi sembollerin bulunduğunu, sözlükte ne yazıldığını kontrol edebilirsiniz — ekranda gösterilen yorumların nereden geldiğini.",
    "backLabel": "Ana Sayfaya Dön",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Burada yazılı tüm sayılar **sembol sözlüğünden ve eşleşme kurallarından doğrudan okunmaktadır.** Metni manuel olarak transkribe etmediğimiz için, sözlük genişletilirse veya kurallar değiştirilirse, bu belgelerdeki sayılar da değişecektir."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Hizmetin Temeli",
    "title": "Rüya hikayelerinde semboller nasıl bulunur.",
    "summary": "Serbest yazılmış cümlelerden sembollerin nasıl seçildiğini ve uzun bir kelimenin içinde tesadüfen bulunan bir sembolü nasıl filtrelediğimizi açıklar — 별 (\"yıldız\") kelimesinin içinde 특별할 (\"özel bir şey değil\") gibi.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Sizin sağladığınız metinde semboller buluyoruz.",
        "blocks": [
          {
            "p": "Rüya hikayenizi serbestçe yazdığınızda, o metinde sözlükten semboller arıyoruz. Öğeleri seçmenize veya belirli bir formatta yazmanıza gerek yok. Sadece normal bir şekilde yazın, örneğin 'Dün gece, kocaman bir piton etrafımda sarıldı.'"
          },
          {
            "p": "Arama yaparken, sadece sembolün adını değil, aynı zamanda **{aliasTotal} alternatif isim** de dikkate alıyoruz. Bunlar, 구렁이 (gureongi) ve 뱀 (baem), 떨어지다 (tteoreojida) ve 빠지다 (ppajida) gibi aynı şeyi ifade eden kelimelerdir. 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda) gibi son ekli varyasyonlar da dahil edilmektedir."
          }
        ]
      },
      {
        "title": "Bir kelimenin içinde tesadüfen beliren karakterler sayılmaz",
        "blocks": [
          {
            "p": "Bu, Korece'deki en zorlayıcı yönlerden biridir. Semboller arasında, **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son) gibi sıkça diğer kelimelerde yer alan **{singleCharSymbolTotal} tek karakterli sembol** bulunmaktadır."
          },
          {
            "ul": [
              "별 (\"yıldız\") özel **별**할 (\"özel bir şey değil\") içinde gizleniyor",
              "게 (\"yengeç\") 누군가에**게** (\"birisi tarafından\") içinde gizleniyor",
              "말 (\"at\") **말**했다 (\"dedi\") içinde, ve 배 (\"bot, armut\") **배**가 고팠다 (\"açtık\") içinde"
            ]
          },
          {
            "p": "Bunları sembol olarak saymak, alakasız yorumlara yol açar. Bu nedenle, çevresindeki karakterleri inceliyoruz — eğer **önünde bir Korece karakter varsa**, bunu daha uzun bir kelimenin parçası olarak değerlendiriyoruz ve saymıyoruz, ve **sonrasında bir ek veya fiil eki olup olmadığını** kontrol ediyoruz, böylece 「소가」 (soga) geçerken 「소리」 (sori) filtreleniyor."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu şekilde çalışıyor",
        "blocks": [
          {
            "p": "Bu kuralı uygulamadan önce, on iki gerçek cümle ile test yapıldığında, **on iki cümlede de** alakasız semboller bulunmaktaydı. Anlamlı içeriği olmayan bir cümle, hatta bir **a conception dream** (kavram rüyası) olarak işaretlenmişti."
          },
          {
            "p": "Şimdi, bir tane kaldı — 「배가 고팠다」 (bae ga gopatda) içindeki 배 (bae). Aynı ses çıkmasına rağmen farklı bir anlam taşıdığı için, sadece çevresindeki karakterlerle filtrelenemez."
          },
          {
            "p": "Bir şeyi bulamamak dürüst bir meseledir. Ancak, alakasız bir şey bulmak, o kelimenin arkasında daha önce hiç olmamış bir geleneği kurmak anlamına gelir."
          }
        ]
      },
      {
        "title": "Aynı karakterler her zaman aynı sonuçları verir",
        "blocks": [
          {
            "p": "Eşleşme kurallarında rastlantıya yer yoktur. Sözlük sabit ve kurallar belirlenmiştir, eğer aynı cümleyi tekrar girerseniz, **aynı sembol aynı sırada görünecektir**. Bugün gördüğünüz yorum, yarın gördüğünüzden farklı olmayacaktır."
          },
          {
            "p": "Bu özellik, kendimize verdiğimiz bir sözdür. Her seferinde değişen yorumlar eğlencelidir ama temelden yoksundur. Bu, [neden model kullanmadığımızın hikayesiyle](/guide/no-ai) bağlantılıdır."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Kişisel Bilgiler",
    "title": "Yazdığınız Rüyaların Saklanmama Yöntemi",
    "summary": "Rüya hikayelerinin hiçbir yerde kaydedilmediğinin teknik olarak ne anlama geldiğini ve sonuç bağlantısında nelerin bulunduğunu açıklıyoruz.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Üyelik Gerekmez",
        "blocks": [
          {
            "p": "Dreams-Link hesap oluşturmaz. İsim, e-posta veya telefon numarası toplamayız. Tek topladığımız şeyler, yazdığınız rüyalar, uyandığınızda hissettiğiniz duygular ve aynı rüyayı tekrar tekrar görüp görmediğinizdir, ve bu yorumlama tamamlandıktan sonra kalmaz."
          },
          {
            "p": "Rüya hikayeleri, bu hizmetin aldığı en özel değerlerdir. Bu yüzden kurallar gereğinden daha katıdır — gönderdiğiniz şeyleri yazmak için bile bir tablo oluşturmadık."
          }
        ]
      },
      {
        "title": "Sonuç bağlantısında neler bulunur",
        "blocks": [
          {
            "p": "Hesaplama tamamlandığında, adres şöyle görünecektir."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "**#**'den sonra gelen kısım, girdi değeridir. Bu kısma **fragment** denir, bu da **tarayıcının sunucuya göndermediği bir parçadır.** Bu standart web davranışıdır ve bizim oluşturduğumuz bir kural değildir — aslında bir belgedeki bir konumu belirtmek için tasarlanmıştır, bu yüzden sunucunun bunu görmesine gerek yoktur."
          },
          {
            "p": "Burada, bu özellik özellikle önemlidir — sağladığınız rüya **erişim kayıtlarında kalmaz.**"
          },
          {
            "p": "Diğer bir deyişle, sonuç bağlantısını açtığınızda, tarayıcı o değeri hesaplama talep etmek için okur, ve sunucumuz hesaplama için değeri alır, cevabı döner ve sonra unutur."
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
            "p": "Hesaplama kendisi sunucuda yapılır. Sembolleri bulmak, tüm sözlüğü gerektirir ve o sözlük tarayıcıya gönderilecek kadar büyük değildir. Sözlüğü sunucuda tutmak, bir hata düzeltildiğinde herkes için anında yansıması anlamına gelir. Ancak, **talebi işledikten sonra, o değer hiçbir yerde kullanılmaz.** Veritabanına eklemek için bir kod yoktur."
          },
          {
            "p": "İşlem için gerekli minimum bir kayıt tutulur — aynı kişinin kısa bir süre içinde çok fazla talep göndermesini önlemek için bir sayaç. Bu, rüya içeriğini içermez ve erişim IP'si de saklanmaz. Sadece tarih ile hash'lenmiş bir değer sayılır ve o değer gün değiştiğinde değişir."
          }
        ]
      },
      {
        "title": "Saklanmadığı için yapılamayanlar",
        "blocks": [
          {
            "p": "Açıkçası, veri saklamadığımız için vazgeçtiğimiz şeyler var."
          },
          {
            "ul": [
              "**Rüya günlüğü yoktur.** Geçen haftanın yorumunu geri alamazsınız ve tekrar görmek için bağlantıya sahip olmalısınız. Bu kasıtlı olarak yapılmıştır — bir günlüğü oluşturmak için, en özel yazılar sürekli olarak saklanmalıdır.",
              "**Her seferinde aynı değeri yeniden hesaplıyoruz.** Önbellek yoktur. Bunun yerine, sözlük sabittir ve eşleşme kuralları belirleyicidir, bu yüzden aynı metin her zaman aynı sembolü verir — kurallar, önbelleğin garanti edeceği şeyi değiştirir.",
              "**Sayfayı yenilemek, reklam kapısını tekrar açar.** Bunun nedeni, görüntüleme kayıtlarını bırakacak bir yer olmamasıdır."
            ]
          }
        ]
      },
      {
        "title": "Satın alma durumunda",
        "blocks": [
          {
            "p": "Bir rapor satın alırsanız, o anda bir işlem kaydı tutulacaktır. Ödeme, yasal olarak tanımlanmış bir saklama süresine sahiptir ve bir sipariş geçmişi olmadan iade işlemleri yapılamaz. Ancak, yine de, **okuma için kullanılan rüya metni siparişle ilişkilendirilmez** — bu, ödeme onaylandıktan sonra belge oluşturulurken tekrar alınır ve o anda yazılır."
          },
          {
            "p": "Detaylar için lütfen [gizlilik politikası](/privacy) sayfasına bakın."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Duyuru",
    "title": "Açıklamalar",
    "summary": "Bu, kullanımınızı etkileyebilecek değişiklikleri bildirmek için bir yerdir.",
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
            "p": "Lütfen sorularınızı **{email}** adresine gönderin. 2 iş günü içinde yanıt vereceğiz. Ödeme ve iade talepleri için **sipariş numaranızı veya ödeme e-postanızı** eklemek daha hızlıdır."
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
              "**Ödeme ve İade** — Eğer belge oluşturulmamışsa veya ödeme tutarı siparişten farklıysa, tam bir iade yapılacaktır. Koşullar [iade politikası](/refund-policy) sayfasında bulunmaktadır.",
              "**Kişisel Bilgiler** — Erişim, düzeltme ve silme taleplerini kabul ediyoruz. İşleme politikası [gizlilik politikası](/privacy) sayfasında yer almaktadır.",
              "**Yorum Hatalarını Bildirin** — Eğer semboller yanlış bulunmuşsa veya yorum garip görünüyorsa, lütfen bize bildirin. O rüyayı yazdığınız zamanı eklerseniz, aynı metinle tekrar kontrol edebiliriz."
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
            "p": "Soruşturma e-postasında sağladığınız rüyayı yeniden yazmanıza gerek yoktur. Girdiğimiz verileri kaydetmiyoruz, bu nedenle tekrar kontrol edemeyiz ve sipariş numarası doğrulama için yeterlidir. Yalnızca, yorum hatalarını bildirmek gibi kesinlikle gerekli olduğunda yazmalısınız."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Hizmet İlkeleri",
    "title": "Ne Yapmıyoruz",
    "summary": "Biz piyango numaraları, rüya günlükleri, hamilelik belirlemeleri veya tılsımlar sağlamıyoruz. Bunların her birini yapmamayı neden seçtiğimizi açıklıyoruz.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Piyango numaraları sağlamıyoruz",
        "blocks": [
          {
            "p": "Rüya yorumlama hizmetlerinde yaygın olarak ele alınsa da, bunu yapmıyoruz. **Rüyalardan numara çekmek için geleneksel rüya yorumlamasında bir dayanak yoktur.** Domuz rüyalarının zenginlik olarak yorumlandığına dair kayıtlar olsa da, bunu üretecek bir kural herhangi bir literatürde yoktur."
          },
          {
            "p": "Onları oluşturmak için, uydurmamız gerekecek ve o anda bu hizmet, geleneğin elden geçirdiği yorumları iletmek için bir yer olmaktan çıkacaktır. Bu özellikle endişe vericidir çünkü finansal kayba yol açabilir."
          }
        ]
      },
      {
        "title": "Rüya günlükleri oluşturmuyoruz",
        "blocks": [
          {
            "p": "Geçmiş rüyaları toplamak için bir özellik olması elbette kullanışlı olurdu, ancak bu, **sağladığınız rüyaları sürekli depolamayı gerektirir.** Rüya anlatıları, bu hizmetin aldığı en özel unsurdur ve bunu değiştirmemeye karar verdik."
          },
          {
            "p": "Bunun yerine, saklamak istediğiniz rüyalar **görüntü veya belgeler olarak alınabilir.** Depolama sorumluluğu kullanıcıların üzerindedir, bizim üzerimizde değil — [Rüyalarınızı Saklamanın İki Yolu](/guide/reports)"
          }
        ]
      },
      {
        "title": "Hamilelik veya cinsiyet belirlemiyoruz",
        "blocks": [
          {
            "p": "Sadece bir **a conception dream** (kavram rüyası) olarak yorumlanan bir sembolün belirdiğini ifade edeceğiz. Hamile olup olmadığınız veya çocuğunuzun kız mı yoksa erkek mi olduğu, **rüyalar aracılığıyla bilinecek bir şey değildir.** Bu tür ifadeler ekranda veya ücretli belgelerde yer almaz."
          }
        ]
      },
      {
        "title": "Tılsımlar veya nazar boncukları satmıyoruz",
        "blocks": [
          {
            "p": "Kötü bir şekilde yorumlanan bir sembol, bir şey satın almak için bir neden değildir. Kötü bir rüya, geleneksel olarak **şu anda incelenmesi gereken bir durumu belirtmek için** kullanılmıştır, bir şeyden kaçınmak için ödeme yapmak için değil."
          },
          {
            "p": "Buna dayanarak bir kaygı yaratmıyoruz. Satışını yaptığımız tek şey yukarıda belirtilen iki şeydir ve hiçbiri ek yorum sağlamaz, daha ziyade **aynı içeriği saklama yollarıdır.**"
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
            "p": "Sözlükte mevcut olmayan semboller için, **bulamadığımızı belirteceğiz.** Benzerlerini bir araya getirmiyor veya alanı makul cümlelerle doldurmuyoruz. Bu nedenle, bu hizmet [rüya yorumlaması için yapay zeka kullanmıyor](/guide/no-ai). Model, bilmediği şeyleri bilmediğini söylemez."
          }
        ]
      }
    ]
  },
  "about": {
    "eyebrow": "Tanıtım",
    "title": "Dreams-Link'e Giriş",
    "summary": "Bu, geleneksel rüya yorumlama sembol sözlüğünü kullanarak rüyaları yorumlayan bir hizmettir. Ne üzerine kurulu olduğunu ve neyin belirtilmediğini netleştirir.",
    "backLabel": "Ana Sayfaya Dön",
    "sections": [
      {
        "title": "Ne yapıyoruz?",
        "blocks": [
          {
            "p": "Dreams-Link, yazdığınız rüyalardan **geleneksel rüya yorumlamada kullanılan sembolleri** bulur ve anlamlarını gösterir. Rüyalar her gün yaşadığımız bir şey olduğu için, ekranda gördüğünüz yorumlar **ücretsizdir ve üyelik gerektirmez.**"
          },
          {
            "p": "Ücretli olarak satılan tek şeyler **iki saklama biçimidir** — iyi bir rüya içeren bir görüntü (rüya kartı) ve geleneksel olarak bir **a conception dream** (kavram rüyası) olarak kabul edilen bir sembol belirdiğinde arka planı içeren bir PDF."
          }
        ]
      },
      {
        "title": "Temel nedir?",
        "blocks": [
          {
            "p": "Yorumlamanın temeli, **{symbolTotal} sembolden oluşan bir sözlük**. Rüya metninde sembolleri buluyoruz ve yalnızca o semboller için sözlükte kaydedilen anlamları gösteriyoruz. Bir sembolün birden fazla anlamı varsa, duruma göre seçim yapıyoruz — doğan güneş ve batan güneş geleneksel olarak zıt olarak yorumlanır."
          },
          {
            "p": "Sözlükteki tüm anlamlar, **eski rüya yorumlama kitaplarının orijinal metinlerinden çevrilmiştir** ve her anlam, temelini oluşturan orijinal metinle birlikte gelir. Temel olarak kullanılan orijinal metinler iki tanedir — **Zhou Gong'un Rüya Yorumu**, Doğu Asya'da uzun zamandır okunan bir rüya yorumlama kitabıdır ve **Miller'ın Rüya Kitabı**, 1901'de yayımlanan bir Batı kitabıdır."
          },
          {
            "p": "Arama, **yalnızca sabit kurallara göre** yapılır. Aynı rüya her zaman aynı sembolleri verir ve yorumlar dünden bugüne değişmez."
          }
        ]
      },
      {
        "title": "Neleri söylemiyoruz?",
        "blocks": [
          {
            "p": "**Sözlükte olmayan geleneksel anlamlar yaratmıyoruz.** Hiçbir sembol bulunamazsa, basitçe bulunmadığını belirtir ve sonuçlandırırız. O alanı makul kelimelerle doldurmak, bu hizmetin en dikkatli olduğu konudur."
          },
          {
            "p": "**a conception dreamlar yalnızca işaretlerdir, belirlemeler değildir.** Rüyanızda geleneksel olarak bir **a conception dream** (kavram rüyası) olarak kabul edilen bir sembolün belirdiğini yalnızca bildiriyoruz. Hamilelik veya çocuğun cinsiyetini tahmin etmiyoruz ve bu tür iddialar için bir dayanak yoktur."
          },
          {
            "p": "Sağlık, zenginlik veya kariyer hakkında **kesin ifadeler yapmıyoruz.** Bu, geleneksel rüya yorumlama perspektifinden bir referanstır ve tıbbi, finansal veya hukuki tavsiye değildir."
          }
        ]
      },
      {
        "title": "Yazdığınız rüyaları saklamıyoruz.",
        "blocks": [
          {
            "p": "Rüya hikayeleri, bu hizmetin aldığı en özel kısımdır. Bu nedenle, **saklamıyoruz.** Girdiler yalnızca hesaplamalar için kullanılır ve sunucuda herhangi bir formda kaydedilmez."
          },
          {
            "p": "Rüyaları bir rüya günlüğü gibi toplamak için **bir işlev yaratmamaya karar verdik.** Bu değerli bir özellik, ancak en özel yazıları saklamayı gerektirir."
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
  "guide/symbol-dictionary": {
    "eyebrow": "Hizmetin Temeli",
    "title": "Sembol sözlüğünün temeli nedir?",
    "summary": "Yorumların nereden geldiğini netleştirir. {symbolTotal} sembolün sekiz kategoriye ayrılma kriterleri, her anlamın yanına orijinal metin pasajlarının eklenme nedeni ve boş alanları doldurmama ilkesi.",
    "backLabel": "Yorumlama temeli",
    "sections": [
      {
        "title": "Sadece sözlükte yazılanları gösteriyoruz.",
        "blocks": [
          {
            "p": "Dreams-Link'in yorumları, **önceden yazılmış bir sembol sözlüğünden** gelmektedir. Sağladığınız metinde sembolleri buluyoruz ve bu semboller için sözlükte kaydedilen anlamları olduğu gibi gösteriyoruz. Sözlükte olmayan kelimeler yaratmıyoruz."
          },
          {
            "p": "Şu anda sözlükte **{symbolTotal} sembol** bulunmaktadır ve bu sembollerin toplamda **{meaningTotal} anlamı** vardır. Bazı sembollerin yalnızca bir anlamı vardır, ancak çoğunun birden fazla anlamı vardır ve her anlam için, **o anlamın geçerli olduğu durum** da belirtilmiştir."
          }
        ]
      },
      {
        "title": "Sekiz kategoriye ayrılmıştır.",
        "blocks": [
          {
            "p": "Rüyalarda görünenleri özelliklerine göre sekiz kategoriye grupladık. Şu anda listelenen sayı parantez içinde yer almaktadır."
          },
          {
            "ul": [
              "**Nesneler**({categoryThing}) · **Eylemler**({categoryAction}) · **Hayvanlar**({categoryAnimal}) — en kalın üç kategori. Bunlar, eski rüya yorumlama kitaplarının çoğunlukla tartıştığı: görünür nesneler, hayvanlar ve rüyalarda gerçekleştirilen eylemlerdir.",
              "**Doğa**({categoryNature}) · **İnsanlar**({categoryPerson}) — su, ateş, güneş ve ay gibi büyük ve eski şeyler ve rüyalarda görünen krallar, hırsızlar ve ölüler gibi insanlar.",
              "**Yerler**({categoryPlace}) · **Vücut**({categoryBody}) · **Renkler**({categoryColor}) — evler ve mezarlar gibi yerler, dişler, saç ve kan gibi vücut parçaları ve renkler."
            ]
          },
          {
            "p": "Onları kategoriye göre görüntülemek için, [sembol sözlüğünde](/dream/symbols) tam listeyi görebilirsiniz."
          }
        ]
      },
      {
        "title": "Her anlam bir orijinal metin pasajı ile birlikte gelir.",
        "blocks": [
          {
            "p": "Sözlükteki **{meaningTotal} anlamın** her biri, o anlamın temelini oluşturan **orijinal metin pasajı** ile birlikte gelir. Tüm {symbolTotal} sembol bu şekilde — eğer orijinal metin pasajı yoksa, girişin kendisi oluşturulamaz."
          },
          {
            "p": "Temel olarak kullanılan orijinal metinler iki tanedir. **Zhou Gong'un Rüya Yorumu**, Doğu Asya'da uzun zamandır okunan bir rüya yorumlama kitabıdır ve **Miller'ın Rüya Kitabı**, 1901'de yayımlanan bir Batı kitabıdır. Bir sembolü açtığınızda, anlamın hangi orijinal metinden geldiğini, pasajı ve anlamını görebilirsiniz."
          },
          {
            "p": "**Boş alanları doldurmuyoruz.** Makul kökenler eklemek, belgeyi kalınlaştırır, ancak o anda bu sözlük, aktarılmış olanın bir çevirisi olmaktan çıkıp bir uydurma haline gelir. Orijinal metinde olmayanı yazmıyoruz ve yazdığımız şeyler için orijinal metni eklemeliyiz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Genişletirken, yalnızca orijinal metinden genişletiyoruz.",
        "blocks": [
          {
            "p": "Sembollerin modellerine dayalı girişler oluşturmaya çalıştık, ancak ortaya çıkan girişler ya 「aşk → iyi ilişki」 gibi aynı kelimeleri tekrar ediyor ya da gelenekten herhangi bir dayanak sunmuyor. Bu nedenle, **hiçbirini dahil etmedik.** Sözlüğün mevcut boyutu, girişler oluşturmaktan değil, orijinal metinlerin çevirisinden kaynaklanmaktadır — model kullanmama nedenleri [model kullanmamayı neden tercih etmiyoruz](/guide/no-ai) kısmında detaylandırılmıştır."
          }
        ]
      },
      {
        "title": "İyi ve kötü, sözlük tarafından belirlenmiştir.",
        "blocks": [
          {
            "p": "Her sembol, uğurluluk ve uğursuzluk belirtileri ile birlikte gelir. **İyi {polarityPositive}**, **duruma göre belirsiz {polarityAmbivalent}**, **dikkatli {polarityNegative}** ve **nötr {polarityNeutral}**."
          },
          {
            "p": "Dört kategori arasında, **duruma göre değişenlerin sayısı en fazladır.** Bu, dengelediğimiz bir şey değildir; orijinal metinlerde nasıl yazıldığıdır — aynı sembol için bile, yapılan şeylere bağlı olarak birçok yerde zıt şekilde yorumlanmıştır. Bu değer, her sembolün doğasını yansıtır ve rüyanın genel atmosferi, bulunan sembolleri toplayarak yeniden hesaplanır."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Hizmet Temeli",
    "title": "Neden aynı sembolün farklı anlamları vardır.",
    "summary": "Doğan güneş ve batan güneş geleneksel olarak zıt olarak yorumlanır. Bu, {symbolTotal} sembolün {meaningTotal} anlamı olduğu yapıyı ve durumu nasıl ayırt edeceğimizi tartışır.",
    "backLabel": "Yorumlama temeli",
    "sections": [
      {
        "title": "Semboller aynı olsa bile, farklı durumlar farklı anlamlar verir.",
        "blocks": [
          {
            "p": "Eski rüya yorumlama kitaplarında, bir sembol her zaman bir anlam taşımaz. Aynı güneş için bile, **doğan güneş ve batan güneş zıt şekilde yorumlanmıştır** — ilki, evde refahı belirtirken, ikincisi, ebeveyn kaybı endişesini belirtir. Sözlük bu şekilde yazılmıştır."
          },
          {
            "p": "Bu {symbolTotal} sembolün toplamda {meaningTotal} anlamı olmasının nedeni, her anlam için, **o anlamın geçerli olduğu durum** da belirtilmiş olmasıdır, bu nedenle o durum sağladığınız metinde görünüyorsa, o anlamı seçiyoruz."
          }
        ]
      },
      {
        "title": "Durumu nasıl ayırt ediyoruz?",
        "blocks": [
          {
            "p": "Sağladığınız metinde durumu belirten kelimelere bakıyoruz. 「Güneşin battığını gördüm」 ifadesinde, batma durumu belirtilirken, 「Güneşin yeni doğduğunu gördüm」 ifadesinde, doğma durumu belirtilmektedir. Eğer durumu belirten kelimeler yoksa, o sembolün **temel anlamına** dayanarak yorumluyoruz."
          },
          {
            "p": "Bu nedenle, rüyanızı yazarken, **sadece neyin belirdiğini değil, aynı zamanda hangi eylemlerin gerçekleştirildiğini de** eklemeyi unutmayın; bu, yorumun daha doğru olmasını sağlar. \"Bir domuz gördüm\" demek, \"domuz eve girdi\" demekten daha az şey ifade eder."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ne kadar çok yazarsanız, o kadar iyi, ancak kapsamlı yazmaya gerek yok.",
        "blocks": [
          {
            "p": "Birkaç cümle yeterlidir. Daha fazla yazmak, daha fazla sembol bulmak anlamına gelmez; aksine, ilgisiz ifadeler karıştığında, yanlış sembollere yol açabilir."
          }
        ]
      },
      {
        "title": "{contextSplitSymbolTotal} sembol, farklı anlamlarla birlikte bulunmaktadır.",
        "blocks": [
          {
            "p": "Sözlükteki {symbolTotal} sembolden, **{contextSplitSymbolTotal}** durumuna bağlı olarak farklı anlamlara sahip olanlardır. Geri kalanlar ise durumdan bağımsız olarak tek bir yönde yorumlanabilir."
          },
          {
            "p": "Bu **{contextSplitSymbolTotal}** semboller en hassas olanlardır. Durumu yanlış anlamak, iyi haberleri kötü haber olarak iletmekle sonuçlanabilir veya tam tersi. Bu nedenle, durum belirsizse, **sembolün temel anlamını** zorlamadan alırız — belirsiz olanı kesinmiş gibi konuşmak istemiyoruz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Uyanma anındaki his de dikkate alınır.",
        "blocks": [
          {
            "p": "Rüya içeriğinin altında sorulan hisler ve tekrarlar, sembolleri bulmak için kullanılmaz. Farklı anlamların olduğu durumlarda hangi yönde yorum yapılacağını belirlerken referans alınır. Seçim yapmanıza gerek yoktur; sonuçlar yine de sağlanacaktır."
          }
        ]
      },
      {
        "title": "Rüyanın genel atmosferi ayrı olarak sayılır.",
        "blocks": [
          {
            "p": "Birden fazla sembol bulunursa, her sembolün olumlu mu yoksa ihtiyatlı mı olduğunu toplayarak rüyanın genel tonunu belirleriz. Bir iyi sembol ve bir ihtiyatlı sembol içeren bir rüya, sadece \"iyi rüya\" olarak adlandırılmaz."
          },
          {
            "p": "Çeşitli sembolleri ve anlamlarını [sembol sözlüğünde](/dream/symbols) önizleyebilirsiniz. Rüyanızı yazmadan önce nelerin dahil olduğunu gözden geçirmek de iyidir."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Hizmetin Temeli",
    "title": "Uğurlu ve uğursuz rüyaları ayırt etme kriterleri",
    "summary": "Her sembole atanan dört değer ve dağılımları, en çok değişken anlamların nedenleri ve karışık rüyaları neden karışık olarak tartıştığımız.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Her sembole dört kategoriden biri atanır.",
        "blocks": [
          {
            "p": "Sözlükteki {symbolTotal} sembol, aşağıdakilerden biri olarak kategorize edilmiştir."
          },
          {
            "ul": [
              "**Olumlu {polarityPositive}** — zenginlik, kutlamalar veya hayırseverler gibi hoş olaylar olarak yorumlanır.",
              "**Çelişkili {polarityAmbivalent}** — anlamları alınan eylemlere bağlı olarak değişebilen güneş veya domuz gibi semboller. **Bu en yaygın ve en ihtiyatlı kategoridir.**",
              "**İhtiyatlı {polarityNegative}** — anlaşmazlıklar, kayıplar veya olumsuz olaylar olarak yorumlanır.",
              "**Nötr {polarityNeutral}** — kendileri ne uğurlu ne de uğursuz olan semboller, renkler gibi."
            ]
          }
        ]
      },
      {
        "title": "En çok değişken anlamların nedenleri",
        "blocks": [
          {
            "p": "Bu, sağladığımız bir denge değil. **Bu, orijinal metinlerin yazılış şeklidir.** Eski rüya yorumlama metinleri, aynı sembol için farklı anlamlar kaydetmiştir ve bu durumların çoğu karşıt durumlar içermektedir — bir domuz yakalamak uğurlu, ancak bir domuzun kendi kendine ölmesi uğursuzdur, aynı şey doğan ve batan güneş için de geçerlidir."
          },
          {
            "p": "Bu nedenle, \"iyi bir sembol belirdi\" demek, \"iyi şeyler olacak\" demek anlamına gelmez. İletilebilecek olan, o sembolün gelenekte nasıl yorumlandığı ile sınırlıdır."
          }
        ]
      },
      {
        "title": "Bir rüyanın tonu sembollerinden toplanır.",
        "blocks": [
          {
            "p": "Birden fazla sembol bulunursa, uğurlu ve ihtiyatlı anlamlarını toplayarak rüyanın genel tonunu belirleriz. Sadece olumlu semboller görünüyorsa, bu iyi bir rüyadır; sadece ihtiyatlı semboller görünüyorsa, bu ihtiyatlı bir rüyadır; eğer **karışıksa, karışık olarak tartışacağız.**"
          },
          {
            "p": "Karışık bir yorumu tek bir tarafa zorlamıyoruz. Gerçekte, insanların gördüğü rüyalar çoğunlukla karışıktır ve bunları \"iyi bir rüya\" olarak özetlemek ne doğru ne de faydalıdır."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Söylenmeyen kelimeler",
        "blocks": [
          {
            "p": "Ne olacağı, ne zaman olacağı veya sağlık ve zenginlik hakkında kesin ifadeler yapmıyoruz. Geleneksel sembollerin anlamlarını çevirmek, geleceği tahmin etmekten farklıdır."
          }
        ]
      },
      {
        "title": "İhtiyatlı rüyalar belirdiğinde",
        "blocks": [
          {
            "p": "İhtiyatlı olarak yorumlanan bir sembol belirse bile, bu mutlaka kötü haber anlamına gelmez. Geleneksel rüya yorumlamasında, uğursuz rüyalar genellikle **şu anda incelenmesi gereken durumu** belirtmek için kullanılmıştır. Eğer bir anlaşmazlık olarak yorumlanan bir sembol belirse, bu, dilinizi tutmanız için bir öneri olarak okunabilir."
          },
          {
            "p": "Aynı nedenle, bu hizmet tılsım veya nazar boncuğu satmamaktadır. Satılan tek şey, [rüyalarınızı korumanın iki yöntemi](/guide/reports)dir."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Gebelik rüyaları",
    "title": "Gebelik rüyalarını nasıl ayırt ederiz",
    "summary": "{conceptionSymbolTotal} gebelik rüyası sembolünü nasıl belirlediğimiz, neden tüm domuz rüyalarının gebelik rüyası olmadığı ve gebelik veya cinsiyet belirlemediğimiz ilkesi.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Öncelikle, netleştirelim.",
        "blocks": [
          {
            "p": "**Dreams-Link gebelik durumunu belirlemez. Çocuğun cinsiyetini de belirtmiyoruz.** Bu, rüyalar aracılığıyla bilinebilecek bir şey değildir, ayrıca yapabileceğimiz bir şey de değildir."
          },
          {
            "p": "İletilebilecek olan, sadece şudur — **bu rüyada geleneksel olarak gebelik rüyası olarak yorumlanan bir sembolün belirdiği.** O sembolün antik çağlarda nasıl yorumlandığı, sağlayabileceğimiz tek bilgidir."
          }
        ]
      },
      {
        "title": "Gebelik rüyası olarak yorumlanan {conceptionSymbolTotal} sembol vardır.",
        "blocks": [
          {
            "p": "Sözlükteki {symbolTotal} sembolden, **{conceptionSymbolTotal}** gebelik rüyası olarak işaretlenmiştir. Birçokları, ejderha, domuz ve kaplan gibi hayvanlar ile şeftali, hurma ve jujube gibi meyvelerin yanı sıra güneş ve ayı da içerir."
          },
          {
            "p": "Ancak, **o sembol belirdiği için hemen gebelik rüyası olduğu anlamına gelmez.** Bu, bu hizmetin önemli bir çaba sarf ettiği yerdir."
          }
        ]
      },
      {
        "title": "Seçilen anlam üzerinden belirliyoruz, sembol üzerinden değil.",
        "blocks": [
          {
            "p": "Domuz, gebelik rüyalarının sembolüdür, ancak aynı zamanda **zenginlik rüyalarının da temsilcisidir.** Sadece sembol belirdiği için bunu gebelik rüyası olarak ilan edersek, domuz gören herkesin gebelik rüyası gördüğünü söylemiş oluruz. Gerçekte, çoğu zenginlik rüyası olarak yorumlanmıştır."
          },
          {
            "p": "Bu nedenle, **sembolün kendisinden değil, o sembolden seçilen gerçek anlamdan** bakarız. Sadece sağladığınız duruma dayalı olarak gebelik anlamına yönelen anlam seçildiğinde, bunu gebelik rüyası olarak işaretleriz. Aynı domuzla bile, cümleye bağlı olarak yorum farklılık gösterebilir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Eğer gebelikten bahsederseniz, önce buna bakacağız.",
        "blocks": [
          {
            "p": "Yazınız gebelik, gebelik rüyaları veya doğum gibi terimler içeriyorsa, o sembolün taşıdığı anlamlar arasında gebelik anlamını önceliklendiririz. Aynı rüya bile mevcut duruma bağlı olarak farklı yorumlanabilir."
          }
        ]
      },
      {
        "title": "Ayrı bir gebelik rüyası raporu olmasının nedeni.",
        "blocks": [
          {
            "p": "Gebelik rüyaları, diğer rüyalardan farklı bir amaca hizmet eder. Genellikle çocuk doğduktan uzun süre sonra tartışılır ve aile üyeleri arasında paylaşılır. Bu nedenle, sadece ekranda görmek yerine, **saklanabilir bir belge** oluşturduk."
          },
          {
            "p": "Nelerin dahil olduğu, [rüyalarınızı korumanın iki yöntemi](/guide/reports) başlığında özetlenmiştir. Tüm yorumları satın almadan görüntüleyebilirsiniz."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Nasıl Kullanılır",
    "title": "Bir Rüya Nasıl Yazılır",
    "summary": "Gördüğünüz ve yaptığınız şeyleri yazarsanız, iyi yorumlanır. Tek bir fiilin anlamı nasıl belirlediğini ve neden hislerinizi sorduğumuzu ve rüyanın tekrar edip etmediğini de açıklıyoruz.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Lütfen gördüğünüz ve yaptığınız şeyleri yazın",
        "blocks": [
          {
            "p": "Belirli bir format yoktur. Normalde konuştuğunuz gibi iki veya üç cümle yeterlidir. Ancak, iyi yorumlanan şey — **gördüğünüz şey** ve **olan şey** ile belirlenir."
          },
          {
            "ul": [
              "İyi yorumlanan — 「Beni saran büyük bir yılan」, 「Açık suyun aktığını gördüm」, 「Dişim kendiliğinden düştü」",
              "Yorumlanmayan — 「Korktum」, 「Garip hissettim」, 「Birinin benden nefret ettiğini düşündüm」"
            ]
          },
          {
            "p": "Eğer sadece hislerinizi yazarsanız, bulunacak semboller olmayacaktır. Geleneksel rüya yorumlaması, [nesneler ve eylemler](/guide/categories) hakkında konuşur, duygular hakkında değil."
          }
        ]
      },
      {
        "title": "Yaptıklarınızı yazmak daha doğru hale getirir",
        "blocks": [
          {
            "p": "Aynı sembol bile duruma bağlı olarak farklı anlamlar taşıyabilir, {contextSplitSymbolTotal} durumda. Güneşin doğuşu ve batışı geleneksel olarak zıt şekillerde yorumlanmıştır."
          },
          {
            "p": "Bu nedenle, 「Bir domuz gördüm」 ifadesi, 「Domuz eve girdi」 ifadesinden daha az doğrudur ve 「Su vardı」 ifadesi, 「Açık su içtim」 ifadesinden daha az doğrudur. **Tek bir fiil anlamı belirler.**"
          }
        ]
      },
      {
        "title": "Duygular ve tekrar hakkında sormanın nedeni",
        "blocks": [
          {
            "p": "Rüya içeriğinin altında, **uyanırken nasıl hissettiğinizi** ve **tekrarlayan rüyalarınız olup olmadığını** seçmek için bir yer vardır. Sonuçların sağlanması için her ikisini de seçmeniz gerekmez."
          },
          {
            "p": "Bu değerler sembolleri bulmak için kullanılmaz. Aynı sembolden **hangi anlamı seçeceğinizi** ve sonuçları nasıl ileteceğinizi belirlerken referans alınır. Tekrarlayan rüyalar, bir kez görülen bir rüyadan farklı şekilde değerlendirilmiştir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hamilelikten bahseden durumlar",
        "blocks": [
          {
            "p": "Metin hamilelik, conception dream veya doğum gibi kelimeler içeriyorsa, önce o sembolün conception dream anlamına bakarız. Aynı domuz rüyası bile, antik insanlar tarafından duruma bağlı olarak farklı yorumlanmıştır — [태몽'u nasıl ayırt edersiniz](/guide/conception-dreams)"
          }
        ]
      },
      {
        "title": "Uzun yazmaya gerek yoktur",
        "blocks": [
          {
            "p": "Daha uzun bir metin, daha fazla sembol bulunacağı anlamına gelmez. Aslında, alakasız kelimelerin uzun bir şekilde karıştırılması durumunda, alakasız kelimelerin semboller olarak yorumlanma olasılığı artar. Lütfen sadece **unutulmaz sahneleri** yazın."
          },
          {
            "p": "Yazdığınız metin hiçbir yerde kaydedilmeyecektir. Serbestçe yazabilmenizin nedeni, [kaydetmeme yöntemi](/guide/no-storage) ile açıklanmaktadır."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Hizmet Temeli",
    "title": "Sekiz Kategoriye Ayrılmış Kriterler",
    "summary": "Sekiz kategori — nesneler, eylemler ve hayvanlardan vücut ve renklere kadar — her birinin kaç sembol içerdiği ve neden duygular için bir kategori olmadığı.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Rüyalarda görünen şeylerin sekiz kategoriye ayrılması",
        "blocks": [
          {
            "p": "{symbolTotal} sembolü karakterlerine göre sekiz kategoriye grupladık. Ayırıcı soru **rüyada ne olarak göründüğüdür** — bir canavar, bir nesne veya yaptığınız bir şey."
          },
          {
            "ul": [
              "**Nesneler {categoryThing}** — para, aynalar ve bıçaklar gibi somut eşyalar. Bu en kalın kategoridir.",
              "**Eylemler {categoryAction}** — rüyada yapılan veya deneyimlenen şeyler, örneğin banyo yapmak, parti yapmak veya dövülmek.",
              "**Hayvanlar {categoryAnimal}** — ejderhalar, domuzlar, yılanlar ve inekler. Bunların birçoğu 태몽 olarak değerlendirilmiştir.",
              "**Doğa {categoryNature}** — su, ateş, güneş ve ay gibi büyük ve eski şeyler.",
              "**İnsanlar {categoryPerson}** — rüyalarda görünen insanlar, örneğin krallar, hırsızlar ve ölü bireyler.",
              "**Yerler {categoryPlace}** — rüyaların gerçekleştiği yerler, örneğin evler, kuyular ve mezarlar.",
              "**Vücut {categoryBody}** — dişler, saç, kan. Anlam, vücudun neresinde olduğuna bağlı olarak değişir.",
              "**Renkler {categoryColor}** — kendi başlarına iyi veya kötü değildirler ve neyle ilişkilendirildiklerine göre yorumlanır."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sayısal kategorilerin olmama nedeni",
        "blocks": [
          {
            "p": "「üç」 veya 「yedi」 gibi sayılar için bir kategori oluşturmadık. **İki orijinal metin de bir sayıyı giriş olarak yazmaz.** O kategoriyi açmak ve doldurmak için, her iki metinde de görünmeyen bir şey yazmamız gerekecek."
          }
        ]
      },
      {
        "title": "Duygusal kategori olmama nedeni",
        "blocks": [
          {
            "p": "「kaygı」 veya 「özlem」 gibi duygular için bir kategori oluşturmadık. **Bu, antik rüya yorumlama metinlerinin duygulardan bahsetmemesindendir.** Her iki orijinal metin de görülen şeyler ve olan şeyler hakkında konuşur, rüya görenin hislerini yorumlama konusu olarak değil."
          },
          {
            "p": "Bir zamanlar duygular için bir kategori oluşturmaya çalıştık ve çıkan terimler 「duygusal kayıp」 ve 「duygusal denge」 gibi oldu. Bunlar rüyalarda görünen **şekiller** değil, modern psikolojiden kelimelerdir. Bu farklı bir hizmettir ve bu sözlüğün amacı değildir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yani yazarken",
        "blocks": [
          {
            "p": "Lütfen hislerden ziyade **gördüğünüz ve yaptığınız şeyleri** yazın, çünkü bu çok daha iyi yorumlanacaktır. Ancak, uyanırken nasıl hissettiğinizi ayrı olarak soruyoruz — bu, aynı sembol için anlamların değişebileceği durumlarda referans alınır."
          }
        ]
      },
      {
        "title": "Renkler yalnız kullanılmaz",
        "blocks": [
          {
            "p": "Renkler {categoryColor} kendi başlarına iyi veya kötü değildir. Mavi yılanlar ve kırmızı yılanlar farklı yorumlandığı gibi, anlamları **neyle ilişkilendirildiklerine** bağlı olarak değişir. Bu nedenle, bu kategori diğer sembollerle birlikte ortaya çıktıklarında okunan değerler olarak değerlendirilir."
          },
          {
            "p": "Kategorilere göre tam liste [Sembol Sözlüğü](/dream/symbols) içinde mevcuttur. Bir sembolü açtığınızda, iletilen anlam, kategori ve ilgili semboller sağlanacaktır."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Nasıl Kullanılır",
    "title": "Bir Sembol Bulunamadığında",
    "summary": "Eğer hiçbir şey bulunamazsa, bunu söyleriz. Bunun neden olduğunu, o ekranda ne gösterdiğimizi ve sözlüğün nasıl genişletildiğini kapsar.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Hiçbir şey bulamadığımızda, bulamadığımızı söyleriz",
        "blocks": [
          {
            "p": "Eğer yazdığınız metinde tek bir sembol bulamazsak, **bulamadığımızı söyleriz.** Benzer bir sembolü zorla eklemeyiz veya boşluğu doldurmak için makul bir cümle yazmayız."
          },
          {
            "p": "Bu, bu hizmet için en endişe verici konudur. Boşluğu doldurduğunuz anda, gelen yorum ile gerçekte yapılan şey ayrılır."
          }
        ]
      },
      {
        "title": "Neden bulunamıyor?",
        "blocks": [
          {
            "p": "Genellikle aşağıdakilerden biridir."
          },
          {
            "ul": [
              "**Henüz sözlükte olmayan bir semboldür.** Şu anda {symbolTotal} sembol listelenmiştir, ancak rüyalarda ortaya çıkabilecek daha birçok sembol vardır.",
              "**Sadece hislerinizi yazdınız.** Eğer sadece \"korktum\" veya \"garip hissettim\" gibi duygularınız varsa, tanımlanabilir semboller yoktur. Geleneksel hayal yorumlama, **görünür nesneler ve eylemler** ile ilgilidir, duygularla değil.",
              "**Çok kısa.** Sadece bir veya iki kelime yazmak yerine cümleler halinde yazmak daha iyidir."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yeniden yazmayı denediğinizde",
        "blocks": [
          {
            "p": "Lütfen rüyada **ne gördüğünüzü ve ne yaptığınızı** ekleyin. \"Kaygılıydım\" demek, \"dişlerim kendiliğinden döküldü\" demekten daha az etkilidir ve \"bunu sevdim\" demek, \"temiz su aktığını gördüm\" demekten daha az etkilidir."
          }
        ]
      },
      {
        "title": "Boş bir ekran bırakmıyoruz",
        "blocks": [
          {
            "p": "Bir şey bulunamadığında, o ekranda **{popularSymbolCount} sık aranan sembolü** de gösteriyoruz. Bunlar, rüyanızda biri varsa hatırlamanıza yardımcı olabilecek, sözlükteki en temsilci olanlardan seçilmiştir."
          },
          {
            "p": "Her şeyi gözden geçirmek isterseniz, [sembol sözlüğü](/dream/symbols) içinde kategoriye göre düzenlenmiş {symbolTotal} sembol bulabilirsiniz. Her sembol, ilettiği anlamı ve ilgili sembolleri içerir."
          }
        ]
      },
      {
        "title": "Sözlük gelecekte nasıl genişleyecek?",
        "blocks": [
          {
            "p": "Sayıları artırmaktan ziyade, öncelikle **zaten orada olanı doğru bir şekilde tanımlamaya** odaklanıyoruz. Aynı semboller için {aliasTotal} alternatif isim ekledik ve biçimlerini değiştiren eklerle birlikte kelimelerin de tanımlanabilmesini sağladık."
          },
          {
            "p": "Sembollerin kendisini genişletirken, yalnızca **orijinal metinde yazılı olanı** ekliyoruz. Bir anlamın karşılık gelen bir orijinal ifadesi yoksa, bir giriş oluşturulmayacaktır — temelsiz bir şekilde sayıları artırmak, onu bir sözlük değil, bir yaratım haline getirir. Bu girişimin nedenleri ve sonuçları, [neden model kullanmıyoruz](/guide/no-ai) başlığı altında belgelenmiştir."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Hizmet Temeli",
    "title": "Hayal yorumlamasında yapay zeka kullanmama nedenleri",
    "summary": "Bir modeli yorum oluşturmak için çağıran bir kod yoktur. Bu, bir modeli kullanarak sözlüğü genişletme girişiminin sonucu ve bunun sonucunda kazanılanlar ile kaybedilenlerdir.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Hayal yorumlamasında yapay zeka kullanılmamaktadır",
        "blocks": [
          {
            "p": "Mevcut birçok hayal yorumlama hizmeti, hayal hikayelerini üretken modellere yerleştirerek oluşturulan yazılar gösterir. Dreams-Link bunu yapmaz. **Bir modeli yorum oluşturmak için çağıran bir kod yoktur.**"
          },
          {
            "p": "Yaptığımız şey basit. Sağladığınız metindeki sembolleri buluyoruz ve o semboller hakkında sözlükte yazılı olan anlamları seçiyoruz. Sözlükte yer almayan cümleler için bir yer yoktur."
          },
          {
            "p": "Sözlük kendisi bir model tarafından oluşturulmamıştır. Her anlam, **orijinal hayal yorumlama metninden hangi pasajın geldiği ile birlikte** gelir ve o pasaj, orijinal dosya ile kelime kelime karşılaştırılır."
          }
        ]
      },
      {
        "title": "Bu karar neden alındı?",
        "blocks": [
          {
            "p": "**Modeller, bilmediklerini bilmediklerini söylemezler.** İletilen bir temeli olmayan semboller hakkında sorulduğunda, makul kökenler uydururlar. Ve uydurulup uydurulmadığı, okuyucunun ayırt edemeyeceği bir şeydir. Geleneksel iletimin yerinde yaratım varsa, hizmetin temeli çöker."
          },
          {
            "p": "Sözlüğü genişletmek için bir modelin semboller oluşturmasına izin vermeyi denedik. Benimsenmeye değer bulunan altmış altı örnekten, **elli beşi iletilen bir temel sağlayamadı** ve geleneksel hayal yorumlamasında var olamayacak örnekler de vardı, örneğin metro ve otoyol. Bu nedenle, **hiçbiri dahil edilmedi.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Daha büyük bir modelle de aynı şey geçerliydi",
        "blocks": [
          {
            "p": "Daha iyi bir modelde aynı şeyi çalıştırdığımızda, on dokuzdan biri geçti ve o da sadece aynı temele sahip aynı kelimenin tekrarıydı. Daha büyük bir model, bilmediği şeyler hakkında **daha makul** konuşur."
          }
        ]
      },
      {
        "title": "Model kullanmamanın faydaları",
        "blocks": [
          {
            "ul": [
              "**Eğer aynı rüya ise, aynı yorum çıkacaktır.** Her baktığınızda kelimeler değişmez.",
              "**Hızlıdır.** Modelin yanıtını beklemek yoktur, bu nedenle sonuçlar hemen mevcuttur.",
              "**Yazdığınız rüya dışarı çıkmaz.** Harici bir şirketin sunucusuna göndermeye gerek yoktur — bunu [kaydetmeyen yöntemle](/guide/no-storage) birlikte okuyun lütfen.",
              "**Ücretsiz sunulabilir.** Rüyalar her gün yaşadığımız bir şeydir, bu nedenle birçok sorgu vardır. Her sorgu için bir model çağrılırsa, maliyet bir yerden karşılanmalıdır."
            ]
          }
        ]
      },
      {
        "title": "Bunun yerine, ne kaybedildi",
        "blocks": [
          {
            "p": "Sözlükte olmayanı yorumlayamayız. Eğer bir model kullansaydık, yazdığınız her şey için makul bir yanıt olacaktı. **Bulamadığımızda bulamadığımızı söylemeyi** tercih ettik. O zaman gösterdiğimiz şey, [bir sembol bulunamadığında](/guide/not-found) belgelenmiştir."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Ücretli Ürünler",
    "title": "Rüyalarınızı Saklamanın İki Yolu",
    "summary": "Yorumlama kendisi bir ücret gerektirmez. İki ücretli seçeneğin ne olduğunu, neler içerdiğini ve neden daha iyi yorumlar olmadığını açıklar.",
    "backLabel": "Yorumlama Temeli",
    "sections": [
      {
        "title": "Yorumlama kendisi bir ücret gerektirmez",
        "blocks": [
          {
            "p": "Rüyanızı yazmak ve hangi sembollerin dahil olduğunu görmek **para gerektirmez ve üyelik gerektirmez.** İnsanlar her gün rüya gördükleri için, bu alanın ücretsiz sunulması gerektiğini düşündük."
          },
          {
            "p": "**İki ücretli seçenek daha iyi yorumlar değildir.** Bunlar, **aynı yorumu saklamanın iki yoludur.** Ödeme yaptıktan sonra ekranda gördüğünüz içerik değişmez."
          }
        ]
      },
      {
        "title": "Rüya Kartı — Bir Görüntü",
        "blocks": [
          {
            "p": "Rüyanızda bulunan sembolleri ve anlamlarını **bir görüntüde** sağlıyoruz. Bu bir görüntü dosyasıdır, PDF değil, bu nedenle olduğu gibi kaydedebilir veya başkalarına gönderebilirsiniz."
          },
          {
            "p": "Bu, ekranı kapattıktan sonra güzel bir rüyanın kaybolduğunu hissedenler içindir. Rüyaları kaydetmediğimiz için, onları korumak istiyorsanız tek yol budur."
          }
        ]
      },
      {
        "title": "Konsept Rüya Raporu — {conceptionPages} sayfa belge",
        "blocks": [
          {
            "p": "Bir konsept rüyasını gösteren semboller hakkında **{conceptionPages} sayfalık bir belge** oluşturuyoruz. Hangi sembollerin ortaya çıktığını, bu sembollerin geleneksel olarak nasıl yorumlandığını ve bu bilgiyi kaydetmek için bir alan içerir."
          },
          {
            "p": "Konsept rüyaları, çocuk doğduktan sonra bile aile üyeleri arasında sıkça tartışılır ve paylaşılır, bu nedenle ekranda sadece görüntülemek için çok değerli olan rüyalar için ayrı bir belge oluşturduk."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Burada da kullanılmayan kelimler",
        "blocks": [
          {
            "p": "Hamilelik durumu veya çocuğun cinsiyeti hakkında yargılarda bulunmuyoruz. Bu tür ifadeler belgede yer almaz. Daha fazla ayrıntı için lütfen [konsept rüyalarının nasıl filtrelendiğine](/guide/conception-dreams) bakın."
          }
        ]
      },
      {
        "title": "Artık neden belge yok?",
        "blocks": [
          {
            "p": "Kardeş hizmet dokuz sayfalık bir rapor üretir. Bu, saju motorunun tek bir doğum tarihinden birçok değer çıkarmasındandır. Geleneksel Kore hayal yorumlaması bu şekilde çalışmaz."
          },
          {
            "p": "Sözlük {symbolTotal} sembol ve {meaningTotal} anlam içerir, ancak **tek bir rüya için yalnızca birkaç sembol gerçekten geçerlidir.** Bunu dokuz sayfaya genişletmek için, orijinal metinde bulunmayan şeyler yazmak gerekir ve bu, bu hizmetin yapmamayı seçtiği şeydir. Bu nedenle, belge, malzemelerin dürüstçe izin verdiği kadar uzun olup, daha uzun değildir."
          }
        ]
      },
      {
        "title": "Değerler ve Erişim",
        "blocks": [
          {
            "p": "Fiyatlar [fiyat rehberinde](/pricing) mevcuttur. Bu belgenin miktarları listelememesinin nedeni kasıtlıdır — değerler değiştiğinde, rehber belgesinin güncel olmayan miktarlarla kalmasını önlemektir. Ekran ve şartlar, tüm miktarları aynı yerden okur."
          },
          {
            "p": "Ödediğiniz belge **aynı siparişle tekrar alınabilir.** Ancak, dosyaları saklamadığımız için sonuç ekranını terk ettiğinizde yeniden oluşturulamaz — lütfen aldığınız dosyayı saklayın."
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
  "intro": "Kullanım şartlarınızda — fiyatlar, politikalar — yapılacak değişiklikler burada yürürlüğe girmeden önce yayınlanır. Ekranın hızlanması gibi iç iyileştirmeler burada yayınlanmaz: burada görünenler bilmeniz gerekenlerdir.",
  "empty": {
    "title": "Hiçbir bildirim yayınlanmadı",
    "body": "Sizi bilgilendirmek için herhangi bir değişiklik olursa, burada yayınlanacaktır."
  },
  "effective": "Geçerli tarih {date}",
  "pager": {
    "label": "Bildirim Sayfası",
    "newer": "← En Yeni",
    "older": "Önceki Bildirimler →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "Verdiğiniz rüya saklanmamıştır.",
      "body": [
        "Rüya hikayeleri, bu hizmetin aldığı en özel değerlerdir. Bu nedenle, hiçbir tabloda kaydedilmezler. Girdi, yalnızca hesaplama için sonuç adresinde taşınır ve pencere kapandığında kaybolur.",
        "Rüyaları toplayan ve akışını gösteren bir özellik oluşturmamaya karar verdik (rüya günlüğü). Bu yararlı bir özellik, ancak bunu yapmak için en özel yazıların sürekli olarak saklanması gerekir.",
        "Sonuç bağlantısını başkalarına gönderdiğinizde, rüya içeriğini içerir. Paylaşırken dikkatli olun."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Sonuçlar, sembol sözlüğü ve hesaplama kriterlerini içerir.",
      "body": [
        "Yorumlama temeli, geleneksel rüya yorumlama sembol sözlüğüdür. Sonuçlar ve belgeler, o sözlüğün versiyonunu (örneğin 1.2.0) ve eşleşme kurallarının versiyonunu (örneğin dream-1.0.0) içerecektir. Aynı rüya, aynı kriterlere dayalı olarak her zaman aynı sembolü verecektir.",
        "Sözlüğe semboller ekler veya sonuçları değiştirebilecek şekilde anlamları değiştirirsek, bu durum burada sunulur. Bu, daha önce aldığınız sonuçların değişebileceği anlamına gelir.",
        "Sözlükte yer almayan geleneksel anlamlar oluşturmayız. Eğer semboller bulunamazsa, basitçe bulunmadığını belirtir ve sonuçlandırırız."
      ]
    },
    "2026-08-06-conception": {
      "title": "Sadece bir **a conception dream** (kavram rüyası) hakkında sizi bilgilendiriyoruz ve yargılarda bulunmuyoruz.",
      "body": [
        "Eğer geleneksel olarak bir **a conception dream** (kavram rüyası) olarak görülen semboller rüyada belirse, bu durumu size bildireceğiz. Ancak, hamilelik durumu veya çocuğun cinsiyeti hakkında bir belirleme yapmıyoruz — bu tür iddiaların bir dayanağı yoktur ve tıbbi yargılar tıbbi kurumların sorumluluğundadır.",
        "Geleneksel anlatılarda oğul ve kızların bahsi, aktarılan geleneklerin bir yansımasıdır ve bunun doğru bir şekilde tahmin ettiğimiz anlamına gelmez."
      ]
    }
  }
} satisfies NoticeCopy;
