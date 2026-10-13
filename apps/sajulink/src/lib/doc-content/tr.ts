import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Türkçe — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const TR_DOCS = {
  "about": {
    "eyebrow": "Giriş",
    "title": "Saju-Link Girişi",
    "summary": "Bu, doğum tarihiniz ve saatiniz temelinde bir saju (dört-pillars okuma) oluşturan ve sekiz karakterin ne anlama geldiğini açıklayan bir hizmettir. Hesaplanan ve hesaplanmayan şeyleri netleştirir.",
    "backLabel": "Ana Sayfaya Dön",
    "sections": [
      {
        "title": "Ne yapıyoruz?",
        "blocks": [
          {
            "p": "Saju-Link, **doğum tarihiniz ve saatiniz temelinde saju (dört-pillars) grafiğini oluşturur ve sekiz karakterin ne anlama geldiğini gösterir**. Beş elementin gücünü ve gün sütununun gücünü okur ve ayrıca günün sütununa dayanarak bugünün şansını inceler."
          },
          {
            "p": "Ekranda gördüğünüz şey **ücretsizdir ve üyelik gerektirmez.** Ücretli ürün, ekranda gösterilmeyen değerleri içeren bir PDF belgesidir — güçlü bir gün sütunu ile zayıf bir gün sütunu arasındaki ayrımı yapmanın temeli, Wang Sang Hyu Su Sa ve gerçek güneş zamanı için düzeltme detayları."
          }
        ]
      },
      {
        "title": "Ne hesaplıyoruz?",
        "blocks": [
          {
            "p": "Saju, **manseyeok (Kore lunisolar takvimi)** kullanılarak oluşturulur. Doğum zamanı, doğum yerinin **gerçek güneş zamanı** ile düzeltilir — çünkü güneşin gerçek konumu, saat aynı zamanı gösterse bile bölgeye göre değişir."
          },
          {
            "p": "Puanlar yalnızca belirlenen kurallara göre verilir. On Tanrı, yerli dal ilişkileri ve elementleri dengeleme gibi geleneksel myeongri (Kore kader çalışması) kavramları hesaplama kurallarına dönüştürülür ve **aynı girdi her zaman aynı değeri verir**. Kurallar değiştiğinde, önceki sonuçların değişmeden kalmasını sağlamak için geriye dönük testler yapılır."
          },
          {
            "p": "**Ekrandaki cümlelerde AI kullanılmamaktadır.** Ücretsiz ekranda görünen açıklamalar, hesaplama sonuçlarına ekli sabit ifadelerdir. **Ücretli raporlardaki yorumlar** yalnızca üretken AI kullanır ve bu durumda bile AI puan oluşturmaz — yalnızca motor tarafından sağlanan değerlere dayanarak cümleler yazar."
          }
        ]
      },
      {
        "title": "Neleri söylemiyoruz?",
        "blocks": [
          {
            "ul": [
              "**Fal bakmıyoruz.** Kimseyle tanışmanız veya kaçınmanız gerektiğini yazmıyoruz. Bu, geleneksel myeongri'nin bakış açılarını özetleyen bir referans materyaldir.",
              "**Girdileri kaydetmiyoruz.** Doğum tarihi ve saati yalnızca hesaplama anında kullanılır ve sunucuda saklanmaz. Sonuç bağlantısı da tarayıcının sunucuya göndermediği bir yerde saklanır.",
              "**Puanlar insan değerleri olarak değerlendirilmez.** Bugünün şansı düşük olduğu için o günden vazgeçmeniz gerektiği anlamına gelmez."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Detaylı hesaplama yöntemleri [Kullanıcı Kılavuzu](/guide) içinde yazılıdır. İş bilgileri ve iletişim detayları [Bize Ulaşın](/contact) bölümünde bulunabilir."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Hesaplama Temeli",
    "title": "Hesaplamaların temeli nedir?",
    "summary": "Saju-Link tarafından kullanılan tüm kuralları açıklıyoruz. Ekranda görüntülenen sayıların nereden geldiğini, bugünün şansı için yapılan ayarlamaları, yerli dal ilişkileri tablosundan alınan puanları ve güçlü bir gün sütunu ile zayıf bir gün sütunu arasındaki sınır değerleri kontrol edebilirsiniz.",
    "backLabel": "Ana Sayfaya Dön",
    "sections": [
      {
        "blocks": [
          {
            "p": "Saju, doğumunuzun yılını, ayını, gününü ve saatini ikişer Çin karakteriyle, toplam sekiz karakter olarak yazar. Her çiftin üst karakterine **gök gövdesi**, alt karakterine **yer dalı** denir; doğduğunuz günün iki karakterine ise **Gün Sütunu** denir. Bu kelimeler size yabancıysa [Gök Gövdeleri, Yer Dalları ve Gün Sütunu — Harfler Nasıl Okunur](/guide/saju-letters) yazısıyla başlayın."
          },
          {
            "ul": [
              "**Gök gövdeleri** — Saju'nun on üst karakteri. Her birinin sabit bir elementi ve kutbu vardır; doğduğunuz günün gövdesi, sizi işaret eden gün gövdesidir.",
              "**Yer dalları** — Saju'nun on iki alt karakteri; burç hayvanlarıyla aynı karakterlerdir. Her dal, içinde gizli gövdeler barındırır.",
              "**Gün sütunları** — doğduğunuz günün gövdesi ile dalının oluşturduğu çift. 甲子'dan 癸亥'ye kadar 60 tanedir ve her birinin kendi maddesi vardır. Bunları aşağıdaki açılır listelerde bulabilirsiniz."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Burada yazılı değerler **hesaplama kodundan doğrudan okunmaktadır**. Manuel olarak metne aktarılmadıkları için, kurallar değişirse, bu belgede de sayılar buna göre değişecektir."
          }
        ]
      }
    ]
  },
  "guide/natal-chart": {
    "eyebrow": "Hizmet Temeli",
    "title": "doğum haritası — Sekiz karakter nereden geliyor?",
    "summary": "Yıl, ay, gün ve doğum saatinin nasıl dört sütun ve sekiz karakter haline geldiğini açıklar ve hangi karakterin sizi işaret ettiğini belirler. Ayrıca, doğum zamanını tam olarak bilmeden bile neden görülebileceğini tartışır.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Dört Sütun, Sekiz Karakter",
        "blocks": [
          {
            "p": "Saju (四柱) kelime anlamı olarak **dört sütun** demektir. Yıl, ay, gün ve doğum saati her biri bir sütun olarak belirlenir ve her sütun için iki karakter yazılır. Böylece toplamda sekiz karakter oluşur, bu da **doğum haritası** olarak adlandırılır."
          },
          {
            "table": {
              "head": [
                "Sütun",
                "Nereden geliyor?",
                "İki Karakter"
              ],
              "rows": [
                [
                  "Yıl Sütunu (年柱)",
                  "Doğum yılı",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Ay Sütunu (月柱)",
                  "Doğum ayı",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Gün Sütunu (日柱)",
                  "Doğum günü",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Zaman Sütunu (時柱)",
                  "Doğum saati",
                  "Heavenly Stem + Earthly Branch"
                ]
              ]
            }
          },
          {
            "p": "Üst karakterler heavenly stems (天干) olarak adlandırılırken, alt karakterler earthly branches (地支) olarak adlandırılır. On heavenly stems ve on iki earthly branches vardır. On iki earthly branches genellikle **burç işaretleri** olarak adlandırılır."
          }
        ]
      },
      {
        "title": "Aralarında, bir karakter bana işaret ediyor.",
        "blocks": [
          {
            "p": "Sekiz karakterin hepsi aynı ağırlığı taşımaz. **Doğum gününün heavenly stem'i**, özellikle gün sütununun üst karakteri, **kendimi** işaret eder. Bu, **gün sütunu (日干)** olarak adlandırılır."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju, yıl, ay, gün ve doğum saati için her biri iki karakter kullanılarak oluşturulan sekiz karakterden oluşur ve heavenly stems ile earthly branches ile temsil edilir. Burada, belirgin gün sütunu (日干) kendimi işaret eden karakterdir.",
            "labels": {
              "year": "Yıl Sütunu",
              "yearNote": "Kök · Burç İşareti",
              "month": "Ay Sütunu",
              "monthNote": "Mevsim · Güç",
              "day": "Gün Daldırımı",
              "dayNote": "Kendisi · Eş Sarayı",
              "hour": "Saat Daldırımı",
              "hourNote": "İleri Yaşlar · Kullanım",
              "stem": "Göksel Daldırımı",
              "stemNote": "Gün Daldırımı = Kendisi",
              "branch": "Yersel Daldırımı",
              "branchNote": "Gün Daldırımı = Eş Sarayı"
            }
          },
          {
            "p": "Bu hizmetin gösterdiği şeyler çoğunlukla bu tek karakterden türetilmektedir — eğilimlerin yorumu, beş elementin gücü, şu anda gereken enerji ve bugünün şansı, hepsi Gün Daldırımı'na dayanarak ölçülmektedir. Kalan yedi karakter, 'Gün Daldırımı'nın yerleştirildiği ortamı' belirtmektedir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Doğum Günü Neden Önemlidir?",
        "blocks": [
          {
            "p": "Yıl Daldırımı, o yıl doğan herkes için aynıdır ve Ay Daldırımı, o ay doğan herkes için aynıdır. Gün Daldırımı, gün değiştiğinde değişir ve geleneksel falcılık bu pozisyonu Song Hanedanlığı'ndan beri Kendisi olarak değerlendirmiştir. Saat Daldırımı dahil edilirse, aynı günde doğanlar arasında bile farklılık yaratır."
          }
        ]
      },
      {
        "title": "Güneş Terimleriyle Bölünmüştür, Takvim Yılıyla Değil",
        "blocks": [
          {
            "p": "Bir saju yılı 1 Ocak'ta değil, **Ipchun (yaklaşık 4 Şubat)**'ta değişir. Ay da güneş terimlerine göre bölünmektedir."
          },
          {
            "p": "Bu nedenle, **Ocak ve Şubat'ın başında doğanlar, bir önceki yılın Yıl Daldırımı'nı alır**. Bu, burçlarla ilgili yaygın bir yanlış anlamanın kaynağıdır. Eğer bir ay takvimi doğum tarihi girerseniz, bu geri güneş takvimine dönüştürülür ve ardından güneş terimlerine göre bölünür."
          }
        ]
      },
      {
        "title": "Doğum Zamanını Bilmeden de Okuyabilirsiniz",
        "blocks": [
          {
            "p": "Eğer zamanı girmezseniz, okuma üç daldırım ve altı karaktere dayanarak yapılır, Saat Daldırımı hariç. Eksik değerleri tahmin etmiyoruz — rastgele bir Saat Daldırımı atamak, beş elementin gücünü bozabilir ve potansiyel olarak doğru olan sonuçların yerine yanlış sonuçlara yol açabilir."
          },
          {
            "p": "Eğer zamanı biliyorsanız, dahil etmek daha iyidir. Sekiz karakter arasında iki karakter eklendiğinden, beş elementin gücü ve değerlendirmesi değişebilir. Ancak, saat zamanını doğrudan kullanmıyoruz, bunun yerine [Gerçek Güneş Zamanı](/guide/true-solar-time) kullanıyoruz."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Sekiz karakterin beş element olarak sayılmasıyla güç değerlendirmesi [Beş Element Gücü ve Güçlü/Zayıf Gün Daldırımı](/guide/five-elements) içinde devam ederken, kalan karakterlerin Gün Daldırımı'na dayalı olarak okunma yöntemi [On Tanrı](/guide/ten-gods) içinde devam etmektedir."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Beş Element",
    "title": "Beş Element Gücü ve Güçlü/Zayıf Gün Daldırımı",
    "summary": "Sekiz karakteri beş element olarak sayarak hangi enerjinin güçlü, hangisinin zayıf olduğunu görüyoruz. Gün Daldırımı'nın gücünü belirleyen eşik değerleri (45%·35%) açıklanmaktadır.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Sekiz Karakteri Beş Enerji Olarak Sayma",
        "blocks": [
          {
            "p": "On Göksel Daldırımı ve on iki Yersel Daldırımı, her biri **Beş Element (五行)**'den birine aittir — Ağaç (木), Ateş (火), Toprak (土), Metal (金), Su (水). Doğum haritasındaki karakterleri ilgili elementlerine göre sayarak hangi enerjinin güçlü, hangisinin zayıf olduğunu belirleyebiliriz."
          },
          {
            "p": "Ancak, sadece sayıları saymıyoruz. Ayrıca **doğum ayının o enerjiyi destekleyip desteklemediğini** de dikkate alıyoruz. Aynı karakter bile mevsimiyle buluşup buluşmadığına bağlı olarak farklı güçlere sahip olabilir. Bu, Ay İşareti (月令) olarak adlandırılır ve beş aşamaya ayrılır: Wang (旺), Sang (相), Hyu (休), Su (囚), ve Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ekran ve Raporun Farkı",
        "blocks": [
          {
            "p": "Ücretsiz ekran sadece **Ay İşareti'ni yansıttıktan sonraki gücü** gösterir. Ay İşareti öncesindeki değerler ve Wang, Sang, Hyu, Su ve Sa tablosu, ücretli raporda yer alır — bu, değerlendirmelerin nerede ayrıldığını doğrudan kontrol etmeniz için sağlanmaktadır."
          }
        ]
      },
      {
        "title": "Gün Daldırımı'nın Gücü — Güçlü ve Zayıf",
        "blocks": [
          {
            "p": "Beş elementin güçlerini saydıktan sonra, **Gün Daldırımı'nın güçlü mü yoksa zayıf mı olduğunu** değerlendiriyoruz. Kriter, Gün Daldırımı ile uyumlu enerjilerin oranıdır."
          },
          {
            "p": "Gün Daldırımı ile uyumlu enerjiler **Kaynak ve Arkadaş** — beni doğuran enerjiler ve bana benzer olan enerjilerdir. Beş elementten ikisi olduğundan, eğer bir tarafı yoksa, bu oran {evenAllyRatio} civarında olacaktır. O rakamın etrafındaki alanı dengeli olarak kabul ediyoruz ve üstünde ve altında güçlü veya zayıf olarak okuyoruz."
          },
          {
            "table": {
              "head": [
                "Gün Daldırımı ile Uyumlu Enerjilerin Oranı",
                "Değerlendirme",
                "Bu Ne Anlama Geliyor?"
              ],
              "rows": [
                [
                  "{strongThreshold} veya daha yüksek",
                  "Güçlü Gün Daldırımı (身强)",
                  "Gün Daldırımı'nı destekleyen enerjiler bol."
                ],
                [
                  "{weakThreshold} veya daha yüksek ve {strongThreshold}’dan az",
                  "Dengeli (中和)",
                  "Her iki yönde de sonuç çıkarmak zordur."
                ],
                [
                  "{weakThreshold}'dan az",
                  "Zayıf Gün Daldırımı (身弱)",
                  "Gün Daldırımı'nı destekleyen enerjiler zayıf."
                ]
              ]
            }
          },
          {
            "p": "Bu tablodaki sayılar metinden alınmamıştır, ancak **doğrudan motor üzerinden okunmaktadır**. Kurallar değişirse, bu belge de değişecektir."
          }
        ]
      },
      {
        "title": "Güç Ne İyi Ne Kötüdür",
        "blocks": [
          {
            "p": "Güçlü olmak iyi demek değildir, zayıf olmak da kötü demek değildir. Güçlü olduğunda ileriye itme gücüne sahip olursun, ancak bir tarafa eğilmek kolaydır; zayıf olduğunda başkalarının gücünü ödünç almak daha kolaydır, ancak yalnız başına dayanırken çabuk yorulabilirsin. **Her iki durumda da gereken enerjiler farklıdır.**"
          },
          {
            "p": "'Gerekli enerji'yi belirlemek, dengeleyici elementi oluşturur ve bu [Dengeleyici Element](/guide/yongsin) içinde devam eder."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Sekiz karakterin nasıl belirlendiği [doğum haritası](/guide/natal-chart) içindedir. Bugünün Gün Daldırımı'nın bu güçle nasıl etkileşime girdiği ise [bugünün şansı](/guide/today-fortune) içinde ele alınmaktadır."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Dengeleyici Element",
    "title": "Dengeleyici Element — Şu Anda Gerekli Enerji",
    "summary": "Eğer Gün Daldırımı güçlü ise, azaltılması gereken enerjiyi; zayıf ise, desteklenmesi gereken enerjiyi dikkate alırız. Bu, o enerjiyi nasıl seçeceğinizi ve dengelendiğinde nasıl ele alacağınızı açıklar.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Beş Element Yeterli Değildir",
        "blocks": [
          {
            "p": "Beş elementin eşit dağılıp dağılmadığını ölçmenin yolları vardır. Ancak gerçekten gereken **bu saju'da neyin eksik ve neyin fazla olduğudur**."
          },
          {
            "p": "Eşit dağıtılmış bir saju her zaman rahat değildir, eğik bir saju da her zaman zor değildir. Eğilimin yönü ve bunu hafifleten bir elementin olup olmadığı, kavşaktır."
          }
        ]
      },
      {
        "title": "Dengeleyici Element — Fazla İse Azalt, Eksik İse Ekle",
        "blocks": [
          {
            "p": "Dengeleyici element (用神) **bu kişinin şu anda ihtiyaç duyduğu enerjidir**. Bunu belirlemenin birkaç yöntemi vardır (baskı ve destek, mevsimsel denge, rahatsızlık, arabuluculuk) ve kurallar olarak ifade edilebilen — ve en yaygın olarak kullanılan — yöntem **baskı ve destek (抑扶)**'dir. Eğer gün sütunu güçlü ise, azaltılması gereken bir enerji gerektiğine inanılır; eğer zayıf ise, eklenmesi gereken bir enerji gereklidir."
          },
          {
            "table": {
              "head": [
                "Yargı",
                "Ne Gerekiyor",
                "Tür Sayısı"
              ],
              "rows": [
                [
                  "Güçlü Gün Sütunu (身强)",
                  "Boşaltılması gereken enerji — Çıktı, Zenginlik ve Resmi Pozisyon",
                  "Üç"
                ],
                [
                  "Zayıf Gün Sütunu (身弱)",
                  "Eklenmesi gereken enerji — Kaynak, Arkadaş",
                  "İki"
                ],
                [
                  "Dengeli (中和)",
                  "Baskı ve destek ile karar verilemez, bu yüzden en ince enerjiler",
                  "İki"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Güç ve Zayıflık Eşiği",
        "blocks": [
          {
            "p": "Gün sütunu tarafı **Kaynak ve Arkadaş** — beni doğuran enerji ve benim gibi olan enerji. Beşten ikisi dahil olduğundan, tam denge {evenAllyRatio} olacaktır. Genişlik bu {evenAllyRatio} değerinin üstünde ve altında ayarlanır."
          },
          {
            "table": {
              "caption": "Genel Güçteki Müttefiklerin Oranı (Kaynak + Arkadaş)",
              "head": [
                "Oran",
                "Yargı"
              ],
              "rows": [
                [
                  "{strongThreshold} veya daha fazla",
                  "Güçlü Gün Sütunu"
                ],
                [
                  "{weakThreshold} veya daha fazla ve {strongThreshold} 'dan az",
                  "Dengeli"
                ],
                [
                  "{weakThreshold} 'dan az",
                  "Zayıf Gün Sütunu"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dengeli 'Daha Az Kesin Yargı'dır",
        "blocks": [
          {
            "p": "Dengeli, baskı ve destek ile karar verilemeyeceği anlamına gelir. Bu durumda, iki en ince enerji sadece gerekli olarak kabul edilir. Sonuç ekranında, kesin bir ifade yerine 'şu anda ince pozisyon' olarak belirtilir."
          }
        ]
      },
      {
        "title": "Güç, Karakter Sayısı Değildir",
        "blocks": [
          {
            "p": "Beş elementin gücünü hesaplarken, sekiz karakter olduğu gibi sayılmaz. Değerler, doğum anında yer alan yer yüzü dalları içindeki gizli göksel kökleri (地藏干) ve doğduğum ayın enerji mevsimini (月令) yansıtır."
          },
          {
            "p": "Yalnızca yüzey karakterlerini saymak, aynı 木 karakterlerinin mevsime bağlı olarak tamamen farklı güçlere sahip olabileceğini gözden kaçırır. İlkbaharın 木 'u ve sonbaharın 木 'u, aynı karakter olmasına rağmen farklı güçlere sahiptir."
          }
        ]
      },
      {
        "title": "Dengeleyici Elementi Nerede Kullanmalıyım?",
        "blocks": [
          {
            "p": "Belirlenen dengeleyici element iki yerde kullanılır. Biri sonuç ekranındaki **'şu anda gereken enerji'**, diğeri ise [bugünün şansı](/guide/today-fortune) — bugünün enerjisinin dengeleyici elementle uyumlu olup olmadığı, o gün puanı en çok etkileyen unsurdur."
          }
        ]
      },
      {
        "title": "Bu Basit Bir Yargıdır",
        "blocks": [
          {
            "p": "Gerçek kader analizi, dengeleyici elementi belirlemek için oluşumu ve mevsimsel koşulları (mevsimin sıcaklığı ve nemi) dikkate alır ve sonuçlar yönteme bağlı olarak değişebilir. Saju-Link yalnızca **güç değerleri ile ölçülebilen azaltmayı** kullanır. Bu, yalnızca kurallara dönüştürülebilenlerin kullanılma ilkesinden kaynaklanmaktadır, bu nedenle aynı girdi her zaman aynı sonucu verir."
          },
          {
            "p": "Bunun yerine, sonuç ekranı ayrıca güçlü ve zayıf gün sütununu, şu anda gereken enerji ile birlikte **okuma materyali** olarak sunar. Bu, puanın temelini gizlememek içindir."
          }
        ]
      }
    ]
  },
  "guide/stem-gap": {
    "eyebrow": "Gök gövdeleri",
    "title": "Yang Ağaç (甲) — Ağaç, Yang",
    "summary": "甲 gök gövdesinin elementi ve kutbu, diğer dokuz gövdeyi nasıl okuduğu (On Tanrı) ve hangi yer dallarının onu barındırdığı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Yang Ağaç (甲): on gök gövdesinin birincisi",
        "blocks": [
          {
            "p": "甲: on gök gövdesinin birincisi. Elementi Ağaç, kutbu Yang. Saju-Link, gün gövdesi 甲 olan kişiye “Yang Ağaç (甲)” der."
          },
          {
            "p": "Sonuç ekranının bu gün gövdesi için gösterdiği satır: \"Dümdüz büyüyen uzun bir ağaç. Yön bir kez belirlendi mi sapmaz, eğilmektense dayanmayı seçer.\" Bu satırın aşağıdaki tablo veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Diğer gövdeleri nasıl okur (On Tanrı)",
        "blocks": [
          {
            "p": "Gün gövdesi 甲 olduğunda on gövdenin her biri şöyle okunur. Okumanın bir yönü vardır: 甲 diğer gövdeyi bu şekilde okur; diğer gövde 甲 gövdesini okuduğunda farklı bir ad çıkabilir."
          },
          {
            "table": {
              "caption": "Gün gövdesi Yang Ağaç (甲) olduğunda On Tanrı",
              "head": [
                "Diğer gövde",
                "Element ve kutup",
                "On Tanrı Adı"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Yang Ağaç",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Yin Ağaç",
                  "Rakip (劫財)"
                ],
                [
                  "Yang Ateş (丙)",
                  "Yang Ateş",
                  "İfade (食神)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Yin Ateş",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Yang Toprak",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yin Toprak (己)",
                  "Yin Toprak",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yang Metal (庚)",
                  "Yang Metal",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yin Metal (辛)",
                  "Yin Metal",
                  "Otorite (正官)"
                ],
                [
                  "Yang Su (壬)",
                  "Yang Su",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yin Su (癸)",
                  "Yin Su",
                  "Kollayan (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu olarak okunan gövdeler",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 甲 olduğunda Düzenli Varlık 己, Otorite ise 辛 olur. Cinsiyetinizi belirtmezseniz bu konum okunmaz."
          }
        ]
      },
      {
        "title": "甲 gövdesini barındıran dallar",
        "blocks": [
          {
            "p": "甲 gövdesinin yer dallarının içinde gizlendiği yer burasıdır (gizli gövdeler). Pay, o dalın otuz gününün 甲 gövdesine düşen oranıdır."
          },
          {
            "table": {
              "caption": "甲 gövdesini barındıran dallar",
              "head": [
                "Dal",
                "Hayvan",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "寅",
                  "Kaplan",
                  "ana (本氣)",
                  "{hidInBon}"
                ],
                [
                  "卯",
                  "Tavşan",
                  "kalan (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "亥",
                  "Domuz",
                  "orta (中氣)",
                  "{hidHaeJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gövde bir insanı belirlemez. Bir saju, sekiz karakterin birbiriyle ilişkisinden okunur.",
              "On Tanrı, gün gövdesinden yapılan bir değerlendirmedir. Aynı iki karakter, hangisinin gün gövdesi olduğuna göre farklı bir ad alır."
            ]
          },
          {
            "p": "On Tanrı'nın tamamı [On Tanrı rehberinde](/guide/ten-gods), element güçleri ve ay işareti [beş element rehberinde](/guide/five-elements) yer alır. Diğer gövdeler: [Yin Ağaç (乙)](/guide/stem-eul) · [Yang Ateş (丙)](/guide/stem-byeong) · [Yin Ateş (丁)](/guide/stem-jeong) · [Yang Toprak (戊)](/guide/stem-mu) · [Yin Toprak (己)](/guide/stem-gi) · [Yang Metal (庚)](/guide/stem-gyeong) · [Yin Metal (辛)](/guide/stem-sin) · [Yang Su (壬)](/guide/stem-im) · [Yin Su (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-eul": {
    "eyebrow": "Gök gövdeleri",
    "title": "Yin Ağaç (乙) — Ağaç, Yin",
    "summary": "乙 gök gövdesinin elementi ve kutbu, diğer dokuz gövdeyi nasıl okuduğu (On Tanrı) ve hangi yer dallarının onu barındırdığı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Yin Ağaç (乙): on gök gövdesinin ikincisi",
        "blocks": [
          {
            "p": "乙: on gök gövdesinin ikincisi. Elementi Ağaç, kutbu Yin. Saju-Link, gün gövdesi 乙 olan kişiye “Yin Ağaç (乙)” der."
          },
          {
            "p": "Sonuç ekranının bu gün gövdesi için gösterdiği satır: \"Sarmaşık — esnek bir ot. İlerlemek için koşullara göre eğilir ve kopmaz.\" Bu satırın aşağıdaki tablo veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Diğer gövdeleri nasıl okur (On Tanrı)",
        "blocks": [
          {
            "p": "Gün gövdesi 乙 olduğunda on gövdenin her biri şöyle okunur. Okumanın bir yönü vardır: 乙 diğer gövdeyi bu şekilde okur; diğer gövde 乙 gövdesini okuduğunda farklı bir ad çıkabilir."
          },
          {
            "table": {
              "caption": "Gün gövdesi Yin Ağaç (乙) olduğunda On Tanrı",
              "head": [
                "Diğer gövde",
                "Element ve kutup",
                "On Tanrı Adı"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Yang Ağaç",
                  "Rakip (劫財)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Yin Ağaç",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yang Ateş (丙)",
                  "Yang Ateş",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Yin Ateş",
                  "İfade (食神)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Yang Toprak",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yin Toprak (己)",
                  "Yin Toprak",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yang Metal (庚)",
                  "Yang Metal",
                  "Otorite (正官)"
                ],
                [
                  "Yin Metal (辛)",
                  "Yin Metal",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yang Su (壬)",
                  "Yang Su",
                  "Kollayan (正印)"
                ],
                [
                  "Yin Su (癸)",
                  "Yin Su",
                  "Sıra Dışı Destek (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu olarak okunan gövdeler",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 乙 olduğunda Düzenli Varlık 戊, Otorite ise 庚 olur. Cinsiyetinizi belirtmezseniz bu konum okunmaz."
          }
        ]
      },
      {
        "title": "乙 gövdesini barındıran dallar",
        "blocks": [
          {
            "p": "乙 gövdesinin yer dallarının içinde gizlendiği yer burasıdır (gizli gövdeler). Pay, o dalın otuz gününün 乙 gövdesine düşen oranıdır."
          },
          {
            "table": {
              "caption": "乙 gövdesini barındıran dallar",
              "head": [
                "Dal",
                "Hayvan",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "卯",
                  "Tavşan",
                  "ana (本氣)",
                  "{hidMyoBon}"
                ],
                [
                  "辰",
                  "Ejderha",
                  "kalan (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "未",
                  "Koyun",
                  "orta (中氣)",
                  "{hidMiJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gövde bir insanı belirlemez. Bir saju, sekiz karakterin birbiriyle ilişkisinden okunur.",
              "On Tanrı, gün gövdesinden yapılan bir değerlendirmedir. Aynı iki karakter, hangisinin gün gövdesi olduğuna göre farklı bir ad alır."
            ]
          },
          {
            "p": "On Tanrı'nın tamamı [On Tanrı rehberinde](/guide/ten-gods), element güçleri ve ay işareti [beş element rehberinde](/guide/five-elements) yer alır. Diğer gövdeler: [Yang Ağaç (甲)](/guide/stem-gap) · [Yang Ateş (丙)](/guide/stem-byeong) · [Yin Ateş (丁)](/guide/stem-jeong) · [Yang Toprak (戊)](/guide/stem-mu) · [Yin Toprak (己)](/guide/stem-gi) · [Yang Metal (庚)](/guide/stem-gyeong) · [Yin Metal (辛)](/guide/stem-sin) · [Yang Su (壬)](/guide/stem-im) · [Yin Su (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-byeong": {
    "eyebrow": "Gök gövdeleri",
    "title": "Yang Ateş (丙) — Ateş, Yang",
    "summary": "丙 gök gövdesinin elementi ve kutbu, diğer dokuz gövdeyi nasıl okuduğu (On Tanrı) ve hangi yer dallarının onu barındırdığı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Yang Ateş (丙): on gök gövdesinin üçüncüsü",
        "blocks": [
          {
            "p": "丙: on gök gövdesinin üçüncüsü. Elementi Ateş, kutbu Yang. Saju-Link, gün gövdesi 丙 olan kişiye “Yang Ateş (丙)” der."
          },
          {
            "p": "Sonuç ekranının bu gün gövdesi için gösterdiği satır: \"Öğle güneşi. Duygular açıkça görünür, ortam aydınlanır, öne çıkmak doğal gelir.\" Bu satırın aşağıdaki tablo veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Diğer gövdeleri nasıl okur (On Tanrı)",
        "blocks": [
          {
            "p": "Gün gövdesi 丙 olduğunda on gövdenin her biri şöyle okunur. Okumanın bir yönü vardır: 丙 diğer gövdeyi bu şekilde okur; diğer gövde 丙 gövdesini okuduğunda farklı bir ad çıkabilir."
          },
          {
            "table": {
              "caption": "Gün gövdesi Yang Ateş (丙) olduğunda On Tanrı",
              "head": [
                "Diğer gövde",
                "Element ve kutup",
                "On Tanrı Adı"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Yang Ağaç",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Yin Ağaç",
                  "Kollayan (正印)"
                ],
                [
                  "Yang Ateş (丙)",
                  "Yang Ateş",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Yin Ateş",
                  "Rakip (劫財)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Yang Toprak",
                  "İfade (食神)"
                ],
                [
                  "Yin Toprak (己)",
                  "Yin Toprak",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yang Metal (庚)",
                  "Yang Metal",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yin Metal (辛)",
                  "Yin Metal",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yang Su (壬)",
                  "Yang Su",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yin Su (癸)",
                  "Yin Su",
                  "Otorite (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu olarak okunan gövdeler",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 丙 olduğunda Düzenli Varlık 辛, Otorite ise 癸 olur. Cinsiyetinizi belirtmezseniz bu konum okunmaz."
          }
        ]
      },
      {
        "title": "丙 gövdesini barındıran dallar",
        "blocks": [
          {
            "p": "丙 gövdesinin yer dallarının içinde gizlendiği yer burasıdır (gizli gövdeler). Pay, o dalın otuz gününün 丙 gövdesine düşen oranıdır."
          },
          {
            "table": {
              "caption": "丙 gövdesini barındıran dallar",
              "head": [
                "Dal",
                "Hayvan",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "寅",
                  "Kaplan",
                  "orta (中氣)",
                  "{hidInJung}"
                ],
                [
                  "巳",
                  "Yılan",
                  "ana (本氣)",
                  "{hidSaBon}"
                ],
                [
                  "午",
                  "At",
                  "kalan (餘氣)",
                  "{hidOYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gövde bir insanı belirlemez. Bir saju, sekiz karakterin birbiriyle ilişkisinden okunur.",
              "On Tanrı, gün gövdesinden yapılan bir değerlendirmedir. Aynı iki karakter, hangisinin gün gövdesi olduğuna göre farklı bir ad alır."
            ]
          },
          {
            "p": "On Tanrı'nın tamamı [On Tanrı rehberinde](/guide/ten-gods), element güçleri ve ay işareti [beş element rehberinde](/guide/five-elements) yer alır. Diğer gövdeler: [Yang Ağaç (甲)](/guide/stem-gap) · [Yin Ağaç (乙)](/guide/stem-eul) · [Yin Ateş (丁)](/guide/stem-jeong) · [Yang Toprak (戊)](/guide/stem-mu) · [Yin Toprak (己)](/guide/stem-gi) · [Yang Metal (庚)](/guide/stem-gyeong) · [Yin Metal (辛)](/guide/stem-sin) · [Yang Su (壬)](/guide/stem-im) · [Yin Su (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-jeong": {
    "eyebrow": "Gök gövdeleri",
    "title": "Yin Ateş (丁) — Ateş, Yin",
    "summary": "丁 gök gövdesinin elementi ve kutbu, diğer dokuz gövdeyi nasıl okuduğu (On Tanrı) ve hangi yer dallarının onu barındırdığı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Yin Ateş (丁): on gök gövdesinin dördüncüsü",
        "blocks": [
          {
            "p": "丁: on gök gövdesinin dördüncüsü. Elementi Ateş, kutbu Yin. Saju-Link, gün gövdesi 丁 olan kişiye “Yin Ateş (丁)” der."
          },
          {
            "p": "Sonuç ekranının bu gün gövdesi için gösterdiği satır: \"Mum ışığı. Sessizce ve uzun yanar, önce en yakınındakini ısıtır.\" Bu satırın aşağıdaki tablo veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Diğer gövdeleri nasıl okur (On Tanrı)",
        "blocks": [
          {
            "p": "Gün gövdesi 丁 olduğunda on gövdenin her biri şöyle okunur. Okumanın bir yönü vardır: 丁 diğer gövdeyi bu şekilde okur; diğer gövde 丁 gövdesini okuduğunda farklı bir ad çıkabilir."
          },
          {
            "table": {
              "caption": "Gün gövdesi Yin Ateş (丁) olduğunda On Tanrı",
              "head": [
                "Diğer gövde",
                "Element ve kutup",
                "On Tanrı Adı"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Yang Ağaç",
                  "Kollayan (正印)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Yin Ağaç",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yang Ateş (丙)",
                  "Yang Ateş",
                  "Rakip (劫財)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Yin Ateş",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Yang Toprak",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yin Toprak (己)",
                  "Yin Toprak",
                  "İfade (食神)"
                ],
                [
                  "Yang Metal (庚)",
                  "Yang Metal",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yin Metal (辛)",
                  "Yin Metal",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yang Su (壬)",
                  "Yang Su",
                  "Otorite (正官)"
                ],
                [
                  "Yin Su (癸)",
                  "Yin Su",
                  "Meydan Okuyan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu olarak okunan gövdeler",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 丁 olduğunda Düzenli Varlık 庚, Otorite ise 壬 olur. Cinsiyetinizi belirtmezseniz bu konum okunmaz."
          }
        ]
      },
      {
        "title": "丁 gövdesini barındıran dallar",
        "blocks": [
          {
            "p": "丁 gövdesinin yer dallarının içinde gizlendiği yer burasıdır (gizli gövdeler). Pay, o dalın otuz gününün 丁 gövdesine düşen oranıdır."
          },
          {
            "table": {
              "caption": "丁 gövdesini barındıran dallar",
              "head": [
                "Dal",
                "Hayvan",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "午",
                  "At",
                  "ana (本氣)",
                  "{hidOBon}"
                ],
                [
                  "未",
                  "Koyun",
                  "kalan (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "戌",
                  "Köpek",
                  "orta (中氣)",
                  "{hidSulJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gövde bir insanı belirlemez. Bir saju, sekiz karakterin birbiriyle ilişkisinden okunur.",
              "On Tanrı, gün gövdesinden yapılan bir değerlendirmedir. Aynı iki karakter, hangisinin gün gövdesi olduğuna göre farklı bir ad alır."
            ]
          },
          {
            "p": "On Tanrı'nın tamamı [On Tanrı rehberinde](/guide/ten-gods), element güçleri ve ay işareti [beş element rehberinde](/guide/five-elements) yer alır. Diğer gövdeler: [Yang Ağaç (甲)](/guide/stem-gap) · [Yin Ağaç (乙)](/guide/stem-eul) · [Yang Ateş (丙)](/guide/stem-byeong) · [Yang Toprak (戊)](/guide/stem-mu) · [Yin Toprak (己)](/guide/stem-gi) · [Yang Metal (庚)](/guide/stem-gyeong) · [Yin Metal (辛)](/guide/stem-sin) · [Yang Su (壬)](/guide/stem-im) · [Yin Su (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-mu": {
    "eyebrow": "Gök gövdeleri",
    "title": "Yang Toprak (戊) — Toprak, Yang",
    "summary": "戊 gök gövdesinin elementi ve kutbu, diğer dokuz gövdeyi nasıl okuduğu (On Tanrı) ve hangi yer dallarının onu barındırdığı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Yang Toprak (戊): on gök gövdesinin beşincisi",
        "blocks": [
          {
            "p": "戊: on gök gövdesinin beşincisi. Elementi Toprak, kutbu Yang. Saju-Link, gün gövdesi 戊 olan kişiye “Yang Toprak (戊)” der."
          },
          {
            "p": "Sonuç ekranının bu gün gövdesi için gösterdiği satır: \"Açık arazi ve dağlar. Sarsılması zordur, yaslanması kolaydır; ama bir kez verdiği kararı ağır değiştirir.\" Bu satırın aşağıdaki tablo veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Diğer gövdeleri nasıl okur (On Tanrı)",
        "blocks": [
          {
            "p": "Gün gövdesi 戊 olduğunda on gövdenin her biri şöyle okunur. Okumanın bir yönü vardır: 戊 diğer gövdeyi bu şekilde okur; diğer gövde 戊 gövdesini okuduğunda farklı bir ad çıkabilir."
          },
          {
            "table": {
              "caption": "Gün gövdesi Yang Toprak (戊) olduğunda On Tanrı",
              "head": [
                "Diğer gövde",
                "Element ve kutup",
                "On Tanrı Adı"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Yang Ağaç",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Yin Ağaç",
                  "Otorite (正官)"
                ],
                [
                  "Yang Ateş (丙)",
                  "Yang Ateş",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Yin Ateş",
                  "Kollayan (正印)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Yang Toprak",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yin Toprak (己)",
                  "Yin Toprak",
                  "Rakip (劫財)"
                ],
                [
                  "Yang Metal (庚)",
                  "Yang Metal",
                  "İfade (食神)"
                ],
                [
                  "Yin Metal (辛)",
                  "Yin Metal",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yang Su (壬)",
                  "Yang Su",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yin Su (癸)",
                  "Yin Su",
                  "Düzenli Varlık (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu olarak okunan gövdeler",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 戊 olduğunda Düzenli Varlık 癸, Otorite ise 乙 olur. Cinsiyetinizi belirtmezseniz bu konum okunmaz."
          }
        ]
      },
      {
        "title": "戊 gövdesini barındıran dallar",
        "blocks": [
          {
            "p": "戊 gövdesinin yer dallarının içinde gizlendiği yer burasıdır (gizli gövdeler). Pay, o dalın otuz gününün 戊 gövdesine düşen oranıdır."
          },
          {
            "table": {
              "caption": "戊 gövdesini barındıran dallar",
              "head": [
                "Dal",
                "Hayvan",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "寅",
                  "Kaplan",
                  "kalan (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "辰",
                  "Ejderha",
                  "ana (本氣)",
                  "{hidJinBon}"
                ],
                [
                  "巳",
                  "Yılan",
                  "kalan (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "申",
                  "Maymun",
                  "kalan (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "戌",
                  "Köpek",
                  "ana (本氣)",
                  "{hidSulBon}"
                ],
                [
                  "亥",
                  "Domuz",
                  "kalan (餘氣)",
                  "{hidHaeYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gövde bir insanı belirlemez. Bir saju, sekiz karakterin birbiriyle ilişkisinden okunur.",
              "On Tanrı, gün gövdesinden yapılan bir değerlendirmedir. Aynı iki karakter, hangisinin gün gövdesi olduğuna göre farklı bir ad alır."
            ]
          },
          {
            "p": "On Tanrı'nın tamamı [On Tanrı rehberinde](/guide/ten-gods), element güçleri ve ay işareti [beş element rehberinde](/guide/five-elements) yer alır. Diğer gövdeler: [Yang Ağaç (甲)](/guide/stem-gap) · [Yin Ağaç (乙)](/guide/stem-eul) · [Yang Ateş (丙)](/guide/stem-byeong) · [Yin Ateş (丁)](/guide/stem-jeong) · [Yin Toprak (己)](/guide/stem-gi) · [Yang Metal (庚)](/guide/stem-gyeong) · [Yin Metal (辛)](/guide/stem-sin) · [Yang Su (壬)](/guide/stem-im) · [Yin Su (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gi": {
    "eyebrow": "Gök gövdeleri",
    "title": "Yin Toprak (己) — Toprak, Yin",
    "summary": "己 gök gövdesinin elementi ve kutbu, diğer dokuz gövdeyi nasıl okuduğu (On Tanrı) ve hangi yer dallarının onu barındırdığı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Yin Toprak (己): on gök gövdesinin altıncısı",
        "blocks": [
          {
            "p": "己: on gök gövdesinin altıncısı. Elementi Toprak, kutbu Yin. Saju-Link, gün gövdesi 己 olan kişiye “Yin Toprak (己)” der."
          },
          {
            "p": "Sonuç ekranının bu gün gövdesi için gösterdiği satır: \"Tarla toprağı. Geleni alır ve büyütür; sergilemekten çok gözetir.\" Bu satırın aşağıdaki tablo veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Diğer gövdeleri nasıl okur (On Tanrı)",
        "blocks": [
          {
            "p": "Gün gövdesi 己 olduğunda on gövdenin her biri şöyle okunur. Okumanın bir yönü vardır: 己 diğer gövdeyi bu şekilde okur; diğer gövde 己 gövdesini okuduğunda farklı bir ad çıkabilir."
          },
          {
            "table": {
              "caption": "Gün gövdesi Yin Toprak (己) olduğunda On Tanrı",
              "head": [
                "Diğer gövde",
                "Element ve kutup",
                "On Tanrı Adı"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Yang Ağaç",
                  "Otorite (正官)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Yin Ağaç",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yang Ateş (丙)",
                  "Yang Ateş",
                  "Kollayan (正印)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Yin Ateş",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Yang Toprak",
                  "Rakip (劫財)"
                ],
                [
                  "Yin Toprak (己)",
                  "Yin Toprak",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yang Metal (庚)",
                  "Yang Metal",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yin Metal (辛)",
                  "Yin Metal",
                  "İfade (食神)"
                ],
                [
                  "Yang Su (壬)",
                  "Yang Su",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yin Su (癸)",
                  "Yin Su",
                  "Beklenmedik Varlık (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu olarak okunan gövdeler",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 己 olduğunda Düzenli Varlık 壬, Otorite ise 甲 olur. Cinsiyetinizi belirtmezseniz bu konum okunmaz."
          }
        ]
      },
      {
        "title": "己 gövdesini barındıran dallar",
        "blocks": [
          {
            "p": "己 gövdesinin yer dallarının içinde gizlendiği yer burasıdır (gizli gövdeler). Pay, o dalın otuz gününün 己 gövdesine düşen oranıdır."
          },
          {
            "table": {
              "caption": "己 gövdesini barındıran dallar",
              "head": [
                "Dal",
                "Hayvan",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "丑",
                  "Öküz",
                  "ana (本氣)",
                  "{hidChukBon}"
                ],
                [
                  "午",
                  "At",
                  "orta (中氣)",
                  "{hidOJung}"
                ],
                [
                  "未",
                  "Koyun",
                  "ana (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gövde bir insanı belirlemez. Bir saju, sekiz karakterin birbiriyle ilişkisinden okunur.",
              "On Tanrı, gün gövdesinden yapılan bir değerlendirmedir. Aynı iki karakter, hangisinin gün gövdesi olduğuna göre farklı bir ad alır."
            ]
          },
          {
            "p": "On Tanrı'nın tamamı [On Tanrı rehberinde](/guide/ten-gods), element güçleri ve ay işareti [beş element rehberinde](/guide/five-elements) yer alır. Diğer gövdeler: [Yang Ağaç (甲)](/guide/stem-gap) · [Yin Ağaç (乙)](/guide/stem-eul) · [Yang Ateş (丙)](/guide/stem-byeong) · [Yin Ateş (丁)](/guide/stem-jeong) · [Yang Toprak (戊)](/guide/stem-mu) · [Yang Metal (庚)](/guide/stem-gyeong) · [Yin Metal (辛)](/guide/stem-sin) · [Yang Su (壬)](/guide/stem-im) · [Yin Su (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gyeong": {
    "eyebrow": "Gök gövdeleri",
    "title": "Yang Metal (庚) — Metal, Yang",
    "summary": "庚 gök gövdesinin elementi ve kutbu, diğer dokuz gövdeyi nasıl okuduğu (On Tanrı) ve hangi yer dallarının onu barındırdığı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Yang Metal (庚): on gök gövdesinin yedincisi",
        "blocks": [
          {
            "p": "庚: on gök gövdesinin yedincisi. Elementi Metal, kutbu Yang. Saju-Link, gün gövdesi 庚 olan kişiye “Yang Metal (庚)” der."
          },
          {
            "p": "Sonuç ekranının bu gün gövdesi için gösterdiği satır: \"İşlenmemiş demir. Kararlı ve nettir, askıda kalan işlere sabrı azdır.\" Bu satırın aşağıdaki tablo veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Diğer gövdeleri nasıl okur (On Tanrı)",
        "blocks": [
          {
            "p": "Gün gövdesi 庚 olduğunda on gövdenin her biri şöyle okunur. Okumanın bir yönü vardır: 庚 diğer gövdeyi bu şekilde okur; diğer gövde 庚 gövdesini okuduğunda farklı bir ad çıkabilir."
          },
          {
            "table": {
              "caption": "Gün gövdesi Yang Metal (庚) olduğunda On Tanrı",
              "head": [
                "Diğer gövde",
                "Element ve kutup",
                "On Tanrı Adı"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Yang Ağaç",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Yin Ağaç",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yang Ateş (丙)",
                  "Yang Ateş",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Yin Ateş",
                  "Otorite (正官)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Yang Toprak",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yin Toprak (己)",
                  "Yin Toprak",
                  "Kollayan (正印)"
                ],
                [
                  "Yang Metal (庚)",
                  "Yang Metal",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yin Metal (辛)",
                  "Yin Metal",
                  "Rakip (劫財)"
                ],
                [
                  "Yang Su (壬)",
                  "Yang Su",
                  "İfade (食神)"
                ],
                [
                  "Yin Su (癸)",
                  "Yin Su",
                  "Sarsıcı (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu olarak okunan gövdeler",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 庚 olduğunda Düzenli Varlık 乙, Otorite ise 丁 olur. Cinsiyetinizi belirtmezseniz bu konum okunmaz."
          }
        ]
      },
      {
        "title": "庚 gövdesini barındıran dallar",
        "blocks": [
          {
            "p": "庚 gövdesinin yer dallarının içinde gizlendiği yer burasıdır (gizli gövdeler). Pay, o dalın otuz gününün 庚 gövdesine düşen oranıdır."
          },
          {
            "table": {
              "caption": "庚 gövdesini barındıran dallar",
              "head": [
                "Dal",
                "Hayvan",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "巳",
                  "Yılan",
                  "orta (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "申",
                  "Maymun",
                  "ana (本氣)",
                  "{hidSinBon}"
                ],
                [
                  "酉",
                  "Horoz",
                  "kalan (餘氣)",
                  "{hidYuYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gövde bir insanı belirlemez. Bir saju, sekiz karakterin birbiriyle ilişkisinden okunur.",
              "On Tanrı, gün gövdesinden yapılan bir değerlendirmedir. Aynı iki karakter, hangisinin gün gövdesi olduğuna göre farklı bir ad alır."
            ]
          },
          {
            "p": "On Tanrı'nın tamamı [On Tanrı rehberinde](/guide/ten-gods), element güçleri ve ay işareti [beş element rehberinde](/guide/five-elements) yer alır. Diğer gövdeler: [Yang Ağaç (甲)](/guide/stem-gap) · [Yin Ağaç (乙)](/guide/stem-eul) · [Yang Ateş (丙)](/guide/stem-byeong) · [Yin Ateş (丁)](/guide/stem-jeong) · [Yang Toprak (戊)](/guide/stem-mu) · [Yin Toprak (己)](/guide/stem-gi) · [Yin Metal (辛)](/guide/stem-sin) · [Yang Su (壬)](/guide/stem-im) · [Yin Su (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-sin": {
    "eyebrow": "Gök gövdeleri",
    "title": "Yin Metal (辛) — Metal, Yin",
    "summary": "辛 gök gövdesinin elementi ve kutbu, diğer dokuz gövdeyi nasıl okuduğu (On Tanrı) ve hangi yer dallarının onu barındırdığı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Yin Metal (辛): on gök gövdesinin sekizincisi",
        "blocks": [
          {
            "p": "辛: on gök gövdesinin sekizincisi. Elementi Metal, kutbu Yin. Saju-Link, gün gövdesi 辛 olan kişiye “Yin Metal (辛)” der."
          },
          {
            "p": "Sonuç ekranının bu gün gövdesi için gösterdiği satır: \"Yontulmuş bir mücevher. İnce bir zevki ve yüksek ölçüleri vardır; özensizliği geçiştiremez.\" Bu satırın aşağıdaki tablo veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Diğer gövdeleri nasıl okur (On Tanrı)",
        "blocks": [
          {
            "p": "Gün gövdesi 辛 olduğunda on gövdenin her biri şöyle okunur. Okumanın bir yönü vardır: 辛 diğer gövdeyi bu şekilde okur; diğer gövde 辛 gövdesini okuduğunda farklı bir ad çıkabilir."
          },
          {
            "table": {
              "caption": "Gün gövdesi Yin Metal (辛) olduğunda On Tanrı",
              "head": [
                "Diğer gövde",
                "Element ve kutup",
                "On Tanrı Adı"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Yang Ağaç",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Yin Ağaç",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yang Ateş (丙)",
                  "Yang Ateş",
                  "Otorite (正官)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Yin Ateş",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Yang Toprak",
                  "Kollayan (正印)"
                ],
                [
                  "Yin Toprak (己)",
                  "Yin Toprak",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yang Metal (庚)",
                  "Yang Metal",
                  "Rakip (劫財)"
                ],
                [
                  "Yin Metal (辛)",
                  "Yin Metal",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yang Su (壬)",
                  "Yang Su",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yin Su (癸)",
                  "Yin Su",
                  "İfade (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu olarak okunan gövdeler",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 辛 olduğunda Düzenli Varlık 甲, Otorite ise 丙 olur. Cinsiyetinizi belirtmezseniz bu konum okunmaz."
          }
        ]
      },
      {
        "title": "辛 gövdesini barındıran dallar",
        "blocks": [
          {
            "p": "辛 gövdesinin yer dallarının içinde gizlendiği yer burasıdır (gizli gövdeler). Pay, o dalın otuz gününün 辛 gövdesine düşen oranıdır."
          },
          {
            "table": {
              "caption": "辛 gövdesini barındıran dallar",
              "head": [
                "Dal",
                "Hayvan",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "丑",
                  "Öküz",
                  "orta (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "酉",
                  "Horoz",
                  "ana (本氣)",
                  "{hidYuBon}"
                ],
                [
                  "戌",
                  "Köpek",
                  "kalan (餘氣)",
                  "{hidSulYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gövde bir insanı belirlemez. Bir saju, sekiz karakterin birbiriyle ilişkisinden okunur.",
              "On Tanrı, gün gövdesinden yapılan bir değerlendirmedir. Aynı iki karakter, hangisinin gün gövdesi olduğuna göre farklı bir ad alır."
            ]
          },
          {
            "p": "On Tanrı'nın tamamı [On Tanrı rehberinde](/guide/ten-gods), element güçleri ve ay işareti [beş element rehberinde](/guide/five-elements) yer alır. Diğer gövdeler: [Yang Ağaç (甲)](/guide/stem-gap) · [Yin Ağaç (乙)](/guide/stem-eul) · [Yang Ateş (丙)](/guide/stem-byeong) · [Yin Ateş (丁)](/guide/stem-jeong) · [Yang Toprak (戊)](/guide/stem-mu) · [Yin Toprak (己)](/guide/stem-gi) · [Yang Metal (庚)](/guide/stem-gyeong) · [Yang Su (壬)](/guide/stem-im) · [Yin Su (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-im": {
    "eyebrow": "Gök gövdeleri",
    "title": "Yang Su (壬) — Su, Yang",
    "summary": "壬 gök gövdesinin elementi ve kutbu, diğer dokuz gövdeyi nasıl okuduğu (On Tanrı) ve hangi yer dallarının onu barındırdığı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Yang Su (壬): on gök gövdesinin dokuzuncusu",
        "blocks": [
          {
            "p": "壬: on gök gövdesinin dokuzuncusu. Elementi Su, kutbu Yang. Saju-Link, gün gövdesi 壬 olan kişiye “Yang Su (壬)” der."
          },
          {
            "p": "Sonuç ekranının bu gün gövdesi için gösterdiği satır: \"Irmak ve deniz. Bakışı geniştir, işlerin nasıl aktığını görür.\" Bu satırın aşağıdaki tablo veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Diğer gövdeleri nasıl okur (On Tanrı)",
        "blocks": [
          {
            "p": "Gün gövdesi 壬 olduğunda on gövdenin her biri şöyle okunur. Okumanın bir yönü vardır: 壬 diğer gövdeyi bu şekilde okur; diğer gövde 壬 gövdesini okuduğunda farklı bir ad çıkabilir."
          },
          {
            "table": {
              "caption": "Gün gövdesi Yang Su (壬) olduğunda On Tanrı",
              "head": [
                "Diğer gövde",
                "Element ve kutup",
                "On Tanrı Adı"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Yang Ağaç",
                  "İfade (食神)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Yin Ağaç",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yang Ateş (丙)",
                  "Yang Ateş",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Yin Ateş",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Yang Toprak",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yin Toprak (己)",
                  "Yin Toprak",
                  "Otorite (正官)"
                ],
                [
                  "Yang Metal (庚)",
                  "Yang Metal",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yin Metal (辛)",
                  "Yin Metal",
                  "Kollayan (正印)"
                ],
                [
                  "Yang Su (壬)",
                  "Yang Su",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yin Su (癸)",
                  "Yin Su",
                  "Rakip (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu olarak okunan gövdeler",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 壬 olduğunda Düzenli Varlık 丁, Otorite ise 己 olur. Cinsiyetinizi belirtmezseniz bu konum okunmaz."
          }
        ]
      },
      {
        "title": "壬 gövdesini barındıran dallar",
        "blocks": [
          {
            "p": "壬 gövdesinin yer dallarının içinde gizlendiği yer burasıdır (gizli gövdeler). Pay, o dalın otuz gününün 壬 gövdesine düşen oranıdır."
          },
          {
            "table": {
              "caption": "壬 gövdesini barındıran dallar",
              "head": [
                "Dal",
                "Hayvan",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "子",
                  "Fare",
                  "kalan (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "申",
                  "Maymun",
                  "orta (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "亥",
                  "Domuz",
                  "ana (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gövde bir insanı belirlemez. Bir saju, sekiz karakterin birbiriyle ilişkisinden okunur.",
              "On Tanrı, gün gövdesinden yapılan bir değerlendirmedir. Aynı iki karakter, hangisinin gün gövdesi olduğuna göre farklı bir ad alır."
            ]
          },
          {
            "p": "On Tanrı'nın tamamı [On Tanrı rehberinde](/guide/ten-gods), element güçleri ve ay işareti [beş element rehberinde](/guide/five-elements) yer alır. Diğer gövdeler: [Yang Ağaç (甲)](/guide/stem-gap) · [Yin Ağaç (乙)](/guide/stem-eul) · [Yang Ateş (丙)](/guide/stem-byeong) · [Yin Ateş (丁)](/guide/stem-jeong) · [Yang Toprak (戊)](/guide/stem-mu) · [Yin Toprak (己)](/guide/stem-gi) · [Yang Metal (庚)](/guide/stem-gyeong) · [Yin Metal (辛)](/guide/stem-sin) · [Yin Su (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gye": {
    "eyebrow": "Gök gövdeleri",
    "title": "Yin Su (癸) — Su, Yin",
    "summary": "癸 gök gövdesinin elementi ve kutbu, diğer dokuz gövdeyi nasıl okuduğu (On Tanrı) ve hangi yer dallarının onu barındırdığı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Yin Su (癸): on gök gövdesinin onuncusu",
        "blocks": [
          {
            "p": "癸: on gök gövdesinin onuncusu. Elementi Su, kutbu Yin. Saju-Link, gün gövdesi 癸 olan kişiye “Yin Su (癸)” der."
          },
          {
            "p": "Sonuç ekranının bu gün gövdesi için gösterdiği satır: \"Çiy ve yağmur. Sessizce sızar, sözden önce havayı okur.\" Bu satırın aşağıdaki tablo veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Diğer gövdeleri nasıl okur (On Tanrı)",
        "blocks": [
          {
            "p": "Gün gövdesi 癸 olduğunda on gövdenin her biri şöyle okunur. Okumanın bir yönü vardır: 癸 diğer gövdeyi bu şekilde okur; diğer gövde 癸 gövdesini okuduğunda farklı bir ad çıkabilir."
          },
          {
            "table": {
              "caption": "Gün gövdesi Yin Su (癸) olduğunda On Tanrı",
              "head": [
                "Diğer gövde",
                "Element ve kutup",
                "On Tanrı Adı"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Yang Ağaç",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Yin Ağaç",
                  "İfade (食神)"
                ],
                [
                  "Yang Ateş (丙)",
                  "Yang Ateş",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Yin Ateş",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Yang Toprak",
                  "Otorite (正官)"
                ],
                [
                  "Yin Toprak (己)",
                  "Yin Toprak",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yang Metal (庚)",
                  "Yang Metal",
                  "Kollayan (正印)"
                ],
                [
                  "Yin Metal (辛)",
                  "Yin Metal",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yang Su (壬)",
                  "Yang Su",
                  "Rakip (劫財)"
                ],
                [
                  "Yin Su (癸)",
                  "Yin Su",
                  "Yoldaş (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu olarak okunan gövdeler",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 癸 olduğunda Düzenli Varlık 丙, Otorite ise 戊 olur. Cinsiyetinizi belirtmezseniz bu konum okunmaz."
          }
        ]
      },
      {
        "title": "癸 gövdesini barındıran dallar",
        "blocks": [
          {
            "p": "癸 gövdesinin yer dallarının içinde gizlendiği yer burasıdır (gizli gövdeler). Pay, o dalın otuz gününün 癸 gövdesine düşen oranıdır."
          },
          {
            "table": {
              "caption": "癸 gövdesini barındıran dallar",
              "head": [
                "Dal",
                "Hayvan",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "子",
                  "Fare",
                  "ana (本氣)",
                  "{hidJaBon}"
                ],
                [
                  "丑",
                  "Öküz",
                  "kalan (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "辰",
                  "Ejderha",
                  "orta (中氣)",
                  "{hidJinJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gövde bir insanı belirlemez. Bir saju, sekiz karakterin birbiriyle ilişkisinden okunur.",
              "On Tanrı, gün gövdesinden yapılan bir değerlendirmedir. Aynı iki karakter, hangisinin gün gövdesi olduğuna göre farklı bir ad alır."
            ]
          },
          {
            "p": "On Tanrı'nın tamamı [On Tanrı rehberinde](/guide/ten-gods), element güçleri ve ay işareti [beş element rehberinde](/guide/five-elements) yer alır. Diğer gövdeler: [Yang Ağaç (甲)](/guide/stem-gap) · [Yin Ağaç (乙)](/guide/stem-eul) · [Yang Ateş (丙)](/guide/stem-byeong) · [Yin Ateş (丁)](/guide/stem-jeong) · [Yang Toprak (戊)](/guide/stem-mu) · [Yin Toprak (己)](/guide/stem-gi) · [Yang Metal (庚)](/guide/stem-gyeong) · [Yin Metal (辛)](/guide/stem-sin) · [Yang Su (壬)](/guide/stem-im)"
          }
        ]
      }
    ]
  },

  "guide/branch-ja": {
    "eyebrow": "Yer dalları",
    "title": "子 — Fare dalı",
    "summary": "子 yer dalının barındırdığı gövdeler (gizli gövdeler), ay dalı olduğunda beş elementin gücü ve her gün gövdesi için okunan On Tanrı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "子: on iki yer dalının birincisi",
        "blocks": [
          {
            "p": "子: on iki yer dalının birincisi; Fare hayvanına aittir. Doğum ayının dalı 子 olduğunda mevsim kış, mevsimin sahibi olan element ise Su olur."
          },
          {
            "p": "Doğum gününün dalı 子 olduğunda bu karakter eş konumudur. Aşağıda bu dalın hangi gövdeleri barındırdığını ve bunların gün gövdesine göre ne olduğunu görebilirsiniz."
          }
        ]
      },
      {
        "title": "Bu dalın barındırdığı gövdeler (gizli gövdeler)",
        "blocks": [
          {
            "p": "Bir dal görünen tek bir karakterdir ama içinde gövdeler barındırır. Pay, dalın otuz gününün gövdeler arasında nasıl bölündüğünü gösterir; ana gövde ise dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "子 dalının gizli gövdeleri",
              "head": [
                "Gövde",
                "Element ve kutup",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "Yang Su (壬)",
                  "Yang Su",
                  "kalan (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "Yin Su (癸)",
                  "Yin Su",
                  "ana (本氣)",
                  "{hidJaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ay dalı 子 olduğunda beş elementin gücü",
        "blocks": [
          {
            "p": "Doğum ayının dalı 子 olduğunda her element bir durum alır (Wang, Sang, Hyu, Su, Sa) ve bu durum, gücüne uygulanan çarpan olur."
          },
          {
            "table": {
              "caption": "Ay dalı 子 için element durumları (kış)",
              "head": [
                "Element",
                "Durum",
                "Çarpan"
              ],
              "rows": [
                [
                  "Ağaç",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Ateş",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Toprak",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Metal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Su",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gün gövdesine göre On Tanrı",
        "blocks": [
          {
            "p": "子 dalının aynı gizli gövdeleri, gün gövdesine göre farklı On Tanrı olur. 子 gün dalı olduğunda bu tablo eş konumunun okumasıdır."
          },
          {
            "table": {
              "caption": "子 dalının gizli gövdelerinin her gün gövdesine göre karşılığı",
              "head": [
                "Gün gövdesi",
                "Yang Su (壬) — kalan (餘氣)",
                "Yin Su (癸) — ana (本氣)"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Sıra Dışı Destek (偏印)",
                  "Kollayan (正印)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Kollayan (正印)",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yang Ateş (丙)",
                  "Meydan Okuyan (偏官)",
                  "Otorite (正官)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Otorite (正官)",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Beklenmedik Varlık (偏財)",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yin Toprak (己)",
                  "Düzenli Varlık (正財)",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yang Metal (庚)",
                  "İfade (食神)",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yin Metal (辛)",
                  "Sarsıcı (傷官)",
                  "İfade (食神)"
                ],
                [
                  "Yang Su (壬)",
                  "Yoldaş (比肩)",
                  "Rakip (劫財)"
                ],
                [
                  "Yin Su (癸)",
                  "Rakip (劫財)",
                  "Yoldaş (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir dal bir insanı belirlemez. Aynı dal, gün gövdesine ve ay dalına göre farklı okunur.",
              "Dallar arasındaki uyum, çatışma ve uyumsuzluk gibi ilişkiler burada ele alınmaz."
            ]
          },
          {
            "p": "Dallar arasındaki ilişkiler [on iki dal tablosunda](/guide/branches), burç hayvanı olarak anlamı ise [burcun saju'daki yeri](/guide/zodiac) yazısında yer alır. Diğer dallar: [丑 (Öküz)](/guide/branch-chuk) · [寅 (Kaplan)](/guide/branch-in) · [卯 (Tavşan)](/guide/branch-myo) · [辰 (Ejderha)](/guide/branch-jin) · [巳 (Yılan)](/guide/branch-sa) · [午 (At)](/guide/branch-o) · [未 (Koyun)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [酉 (Horoz)](/guide/branch-yu) · [戌 (Köpek)](/guide/branch-sul) · [亥 (Domuz)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-chuk": {
    "eyebrow": "Yer dalları",
    "title": "丑 — Öküz dalı",
    "summary": "丑 yer dalının barındırdığı gövdeler (gizli gövdeler), ay dalı olduğunda beş elementin gücü ve her gün gövdesi için okunan On Tanrı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "丑: on iki yer dalının ikincisi",
        "blocks": [
          {
            "p": "丑: on iki yer dalının ikincisi; Öküz hayvanına aittir. Doğum ayının dalı 丑 olduğunda mevsim kış, mevsimin sahibi olan element ise Su olur. Bu bir geçiş ayıdır (辰未戌丑), bu nedenle Toprak da «Wang» durumunda sayılır."
          },
          {
            "p": "Doğum gününün dalı 丑 olduğunda bu karakter eş konumudur. Aşağıda bu dalın hangi gövdeleri barındırdığını ve bunların gün gövdesine göre ne olduğunu görebilirsiniz."
          }
        ]
      },
      {
        "title": "Bu dalın barındırdığı gövdeler (gizli gövdeler)",
        "blocks": [
          {
            "p": "Bir dal görünen tek bir karakterdir ama içinde gövdeler barındırır. Pay, dalın otuz gününün gövdeler arasında nasıl bölündüğünü gösterir; ana gövde ise dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "丑 dalının gizli gövdeleri",
              "head": [
                "Gövde",
                "Element ve kutup",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "Yin Su (癸)",
                  "Yin Su",
                  "kalan (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "Yin Metal (辛)",
                  "Yin Metal",
                  "orta (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "Yin Toprak (己)",
                  "Yin Toprak",
                  "ana (本氣)",
                  "{hidChukBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ay dalı 丑 olduğunda beş elementin gücü",
        "blocks": [
          {
            "p": "Doğum ayının dalı 丑 olduğunda her element bir durum alır (Wang, Sang, Hyu, Su, Sa) ve bu durum, gücüne uygulanan çarpan olur."
          },
          {
            "table": {
              "caption": "Ay dalı 丑 için element durumları (kış (geçiş ayı))",
              "head": [
                "Element",
                "Durum",
                "Çarpan"
              ],
              "rows": [
                [
                  "Ağaç",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Ateş",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Toprak",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Su",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gün gövdesine göre On Tanrı",
        "blocks": [
          {
            "p": "丑 dalının aynı gizli gövdeleri, gün gövdesine göre farklı On Tanrı olur. 丑 gün dalı olduğunda bu tablo eş konumunun okumasıdır."
          },
          {
            "table": {
              "caption": "丑 dalının gizli gövdelerinin her gün gövdesine göre karşılığı",
              "head": [
                "Gün gövdesi",
                "Yin Su (癸) — kalan (餘氣)",
                "Yin Metal (辛) — orta (中氣)",
                "Yin Toprak (己) — ana (本氣)"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Kollayan (正印)",
                  "Otorite (正官)",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Sıra Dışı Destek (偏印)",
                  "Meydan Okuyan (偏官)",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yang Ateş (丙)",
                  "Otorite (正官)",
                  "Düzenli Varlık (正財)",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Meydan Okuyan (偏官)",
                  "Beklenmedik Varlık (偏財)",
                  "İfade (食神)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Düzenli Varlık (正財)",
                  "Sarsıcı (傷官)",
                  "Rakip (劫財)"
                ],
                [
                  "Yin Toprak (己)",
                  "Beklenmedik Varlık (偏財)",
                  "İfade (食神)",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yang Metal (庚)",
                  "Sarsıcı (傷官)",
                  "Rakip (劫財)",
                  "Kollayan (正印)"
                ],
                [
                  "Yin Metal (辛)",
                  "İfade (食神)",
                  "Yoldaş (比肩)",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yang Su (壬)",
                  "Rakip (劫財)",
                  "Kollayan (正印)",
                  "Otorite (正官)"
                ],
                [
                  "Yin Su (癸)",
                  "Yoldaş (比肩)",
                  "Sıra Dışı Destek (偏印)",
                  "Meydan Okuyan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir dal bir insanı belirlemez. Aynı dal, gün gövdesine ve ay dalına göre farklı okunur.",
              "Dallar arasındaki uyum, çatışma ve uyumsuzluk gibi ilişkiler burada ele alınmaz."
            ]
          },
          {
            "p": "Dallar arasındaki ilişkiler [on iki dal tablosunda](/guide/branches), burç hayvanı olarak anlamı ise [burcun saju'daki yeri](/guide/zodiac) yazısında yer alır. Diğer dallar: [子 (Fare)](/guide/branch-ja) · [寅 (Kaplan)](/guide/branch-in) · [卯 (Tavşan)](/guide/branch-myo) · [辰 (Ejderha)](/guide/branch-jin) · [巳 (Yılan)](/guide/branch-sa) · [午 (At)](/guide/branch-o) · [未 (Koyun)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [酉 (Horoz)](/guide/branch-yu) · [戌 (Köpek)](/guide/branch-sul) · [亥 (Domuz)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-in": {
    "eyebrow": "Yer dalları",
    "title": "寅 — Kaplan dalı",
    "summary": "寅 yer dalının barındırdığı gövdeler (gizli gövdeler), ay dalı olduğunda beş elementin gücü ve her gün gövdesi için okunan On Tanrı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "寅: on iki yer dalının üçüncüsü",
        "blocks": [
          {
            "p": "寅: on iki yer dalının üçüncüsü; Kaplan hayvanına aittir. Doğum ayının dalı 寅 olduğunda mevsim ilkbahar, mevsimin sahibi olan element ise Ağaç olur."
          },
          {
            "p": "Doğum gününün dalı 寅 olduğunda bu karakter eş konumudur. Aşağıda bu dalın hangi gövdeleri barındırdığını ve bunların gün gövdesine göre ne olduğunu görebilirsiniz."
          }
        ]
      },
      {
        "title": "Bu dalın barındırdığı gövdeler (gizli gövdeler)",
        "blocks": [
          {
            "p": "Bir dal görünen tek bir karakterdir ama içinde gövdeler barındırır. Pay, dalın otuz gününün gövdeler arasında nasıl bölündüğünü gösterir; ana gövde ise dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "寅 dalının gizli gövdeleri",
              "head": [
                "Gövde",
                "Element ve kutup",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "Yang Toprak",
                  "kalan (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "Yang Ateş (丙)",
                  "Yang Ateş",
                  "orta (中氣)",
                  "{hidInJung}"
                ],
                [
                  "Yang Ağaç (甲)",
                  "Yang Ağaç",
                  "ana (本氣)",
                  "{hidInBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ay dalı 寅 olduğunda beş elementin gücü",
        "blocks": [
          {
            "p": "Doğum ayının dalı 寅 olduğunda her element bir durum alır (Wang, Sang, Hyu, Su, Sa) ve bu durum, gücüne uygulanan çarpan olur."
          },
          {
            "table": {
              "caption": "Ay dalı 寅 için element durumları (ilkbahar)",
              "head": [
                "Element",
                "Durum",
                "Çarpan"
              ],
              "rows": [
                [
                  "Ağaç",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Ateş",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Toprak",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Metal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Su",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gün gövdesine göre On Tanrı",
        "blocks": [
          {
            "p": "寅 dalının aynı gizli gövdeleri, gün gövdesine göre farklı On Tanrı olur. 寅 gün dalı olduğunda bu tablo eş konumunun okumasıdır."
          },
          {
            "table": {
              "caption": "寅 dalının gizli gövdelerinin her gün gövdesine göre karşılığı",
              "head": [
                "Gün gövdesi",
                "Yang Toprak (戊) — kalan (餘氣)",
                "Yang Ateş (丙) — orta (中氣)",
                "Yang Ağaç (甲) — ana (本氣)"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Beklenmedik Varlık (偏財)",
                  "İfade (食神)",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Düzenli Varlık (正財)",
                  "Sarsıcı (傷官)",
                  "Rakip (劫財)"
                ],
                [
                  "Yang Ateş (丙)",
                  "İfade (食神)",
                  "Yoldaş (比肩)",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Sarsıcı (傷官)",
                  "Rakip (劫財)",
                  "Kollayan (正印)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Yoldaş (比肩)",
                  "Sıra Dışı Destek (偏印)",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yin Toprak (己)",
                  "Rakip (劫財)",
                  "Kollayan (正印)",
                  "Otorite (正官)"
                ],
                [
                  "Yang Metal (庚)",
                  "Sıra Dışı Destek (偏印)",
                  "Meydan Okuyan (偏官)",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yin Metal (辛)",
                  "Kollayan (正印)",
                  "Otorite (正官)",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yang Su (壬)",
                  "Meydan Okuyan (偏官)",
                  "Beklenmedik Varlık (偏財)",
                  "İfade (食神)"
                ],
                [
                  "Yin Su (癸)",
                  "Otorite (正官)",
                  "Düzenli Varlık (正財)",
                  "Sarsıcı (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir dal bir insanı belirlemez. Aynı dal, gün gövdesine ve ay dalına göre farklı okunur.",
              "Dallar arasındaki uyum, çatışma ve uyumsuzluk gibi ilişkiler burada ele alınmaz."
            ]
          },
          {
            "p": "Dallar arasındaki ilişkiler [on iki dal tablosunda](/guide/branches), burç hayvanı olarak anlamı ise [burcun saju'daki yeri](/guide/zodiac) yazısında yer alır. Diğer dallar: [子 (Fare)](/guide/branch-ja) · [丑 (Öküz)](/guide/branch-chuk) · [卯 (Tavşan)](/guide/branch-myo) · [辰 (Ejderha)](/guide/branch-jin) · [巳 (Yılan)](/guide/branch-sa) · [午 (At)](/guide/branch-o) · [未 (Koyun)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [酉 (Horoz)](/guide/branch-yu) · [戌 (Köpek)](/guide/branch-sul) · [亥 (Domuz)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-myo": {
    "eyebrow": "Yer dalları",
    "title": "卯 — Tavşan dalı",
    "summary": "卯 yer dalının barındırdığı gövdeler (gizli gövdeler), ay dalı olduğunda beş elementin gücü ve her gün gövdesi için okunan On Tanrı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "卯: on iki yer dalının dördüncüsü",
        "blocks": [
          {
            "p": "卯: on iki yer dalının dördüncüsü; Tavşan hayvanına aittir. Doğum ayının dalı 卯 olduğunda mevsim ilkbahar, mevsimin sahibi olan element ise Ağaç olur."
          },
          {
            "p": "Doğum gününün dalı 卯 olduğunda bu karakter eş konumudur. Aşağıda bu dalın hangi gövdeleri barındırdığını ve bunların gün gövdesine göre ne olduğunu görebilirsiniz."
          }
        ]
      },
      {
        "title": "Bu dalın barındırdığı gövdeler (gizli gövdeler)",
        "blocks": [
          {
            "p": "Bir dal görünen tek bir karakterdir ama içinde gövdeler barındırır. Pay, dalın otuz gününün gövdeler arasında nasıl bölündüğünü gösterir; ana gövde ise dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "卯 dalının gizli gövdeleri",
              "head": [
                "Gövde",
                "Element ve kutup",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Yang Ağaç",
                  "kalan (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Yin Ağaç",
                  "ana (本氣)",
                  "{hidMyoBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ay dalı 卯 olduğunda beş elementin gücü",
        "blocks": [
          {
            "p": "Doğum ayının dalı 卯 olduğunda her element bir durum alır (Wang, Sang, Hyu, Su, Sa) ve bu durum, gücüne uygulanan çarpan olur."
          },
          {
            "table": {
              "caption": "Ay dalı 卯 için element durumları (ilkbahar)",
              "head": [
                "Element",
                "Durum",
                "Çarpan"
              ],
              "rows": [
                [
                  "Ağaç",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Ateş",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Toprak",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Metal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Su",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gün gövdesine göre On Tanrı",
        "blocks": [
          {
            "p": "卯 dalının aynı gizli gövdeleri, gün gövdesine göre farklı On Tanrı olur. 卯 gün dalı olduğunda bu tablo eş konumunun okumasıdır."
          },
          {
            "table": {
              "caption": "卯 dalının gizli gövdelerinin her gün gövdesine göre karşılığı",
              "head": [
                "Gün gövdesi",
                "Yang Ağaç (甲) — kalan (餘氣)",
                "Yin Ağaç (乙) — ana (本氣)"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Yoldaş (比肩)",
                  "Rakip (劫財)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Rakip (劫財)",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yang Ateş (丙)",
                  "Sıra Dışı Destek (偏印)",
                  "Kollayan (正印)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Kollayan (正印)",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Meydan Okuyan (偏官)",
                  "Otorite (正官)"
                ],
                [
                  "Yin Toprak (己)",
                  "Otorite (正官)",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yang Metal (庚)",
                  "Beklenmedik Varlık (偏財)",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yin Metal (辛)",
                  "Düzenli Varlık (正財)",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yang Su (壬)",
                  "İfade (食神)",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yin Su (癸)",
                  "Sarsıcı (傷官)",
                  "İfade (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir dal bir insanı belirlemez. Aynı dal, gün gövdesine ve ay dalına göre farklı okunur.",
              "Dallar arasındaki uyum, çatışma ve uyumsuzluk gibi ilişkiler burada ele alınmaz."
            ]
          },
          {
            "p": "Dallar arasındaki ilişkiler [on iki dal tablosunda](/guide/branches), burç hayvanı olarak anlamı ise [burcun saju'daki yeri](/guide/zodiac) yazısında yer alır. Diğer dallar: [子 (Fare)](/guide/branch-ja) · [丑 (Öküz)](/guide/branch-chuk) · [寅 (Kaplan)](/guide/branch-in) · [辰 (Ejderha)](/guide/branch-jin) · [巳 (Yılan)](/guide/branch-sa) · [午 (At)](/guide/branch-o) · [未 (Koyun)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [酉 (Horoz)](/guide/branch-yu) · [戌 (Köpek)](/guide/branch-sul) · [亥 (Domuz)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-jin": {
    "eyebrow": "Yer dalları",
    "title": "辰 — Ejderha dalı",
    "summary": "辰 yer dalının barındırdığı gövdeler (gizli gövdeler), ay dalı olduğunda beş elementin gücü ve her gün gövdesi için okunan On Tanrı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "辰: on iki yer dalının beşincisi",
        "blocks": [
          {
            "p": "辰: on iki yer dalının beşincisi; Ejderha hayvanına aittir. Doğum ayının dalı 辰 olduğunda mevsim ilkbahar, mevsimin sahibi olan element ise Ağaç olur. Bu bir geçiş ayıdır (辰未戌丑), bu nedenle Toprak da «Wang» durumunda sayılır."
          },
          {
            "p": "Doğum gününün dalı 辰 olduğunda bu karakter eş konumudur. Aşağıda bu dalın hangi gövdeleri barındırdığını ve bunların gün gövdesine göre ne olduğunu görebilirsiniz."
          }
        ]
      },
      {
        "title": "Bu dalın barındırdığı gövdeler (gizli gövdeler)",
        "blocks": [
          {
            "p": "Bir dal görünen tek bir karakterdir ama içinde gövdeler barındırır. Pay, dalın otuz gününün gövdeler arasında nasıl bölündüğünü gösterir; ana gövde ise dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "辰 dalının gizli gövdeleri",
              "head": [
                "Gövde",
                "Element ve kutup",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "Yin Ağaç (乙)",
                  "Yin Ağaç",
                  "kalan (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "Yin Su (癸)",
                  "Yin Su",
                  "orta (中氣)",
                  "{hidJinJung}"
                ],
                [
                  "Yang Toprak (戊)",
                  "Yang Toprak",
                  "ana (本氣)",
                  "{hidJinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ay dalı 辰 olduğunda beş elementin gücü",
        "blocks": [
          {
            "p": "Doğum ayının dalı 辰 olduğunda her element bir durum alır (Wang, Sang, Hyu, Su, Sa) ve bu durum, gücüne uygulanan çarpan olur."
          },
          {
            "table": {
              "caption": "Ay dalı 辰 için element durumları (ilkbahar (geçiş ayı))",
              "head": [
                "Element",
                "Durum",
                "Çarpan"
              ],
              "rows": [
                [
                  "Ağaç",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Ateş",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Toprak",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Su",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gün gövdesine göre On Tanrı",
        "blocks": [
          {
            "p": "辰 dalının aynı gizli gövdeleri, gün gövdesine göre farklı On Tanrı olur. 辰 gün dalı olduğunda bu tablo eş konumunun okumasıdır."
          },
          {
            "table": {
              "caption": "辰 dalının gizli gövdelerinin her gün gövdesine göre karşılığı",
              "head": [
                "Gün gövdesi",
                "Yin Ağaç (乙) — kalan (餘氣)",
                "Yin Su (癸) — orta (中氣)",
                "Yang Toprak (戊) — ana (本氣)"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Rakip (劫財)",
                  "Kollayan (正印)",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Yoldaş (比肩)",
                  "Sıra Dışı Destek (偏印)",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yang Ateş (丙)",
                  "Kollayan (正印)",
                  "Otorite (正官)",
                  "İfade (食神)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Sıra Dışı Destek (偏印)",
                  "Meydan Okuyan (偏官)",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Otorite (正官)",
                  "Düzenli Varlık (正財)",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yin Toprak (己)",
                  "Meydan Okuyan (偏官)",
                  "Beklenmedik Varlık (偏財)",
                  "Rakip (劫財)"
                ],
                [
                  "Yang Metal (庚)",
                  "Düzenli Varlık (正財)",
                  "Sarsıcı (傷官)",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yin Metal (辛)",
                  "Beklenmedik Varlık (偏財)",
                  "İfade (食神)",
                  "Kollayan (正印)"
                ],
                [
                  "Yang Su (壬)",
                  "Sarsıcı (傷官)",
                  "Rakip (劫財)",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yin Su (癸)",
                  "İfade (食神)",
                  "Yoldaş (比肩)",
                  "Otorite (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir dal bir insanı belirlemez. Aynı dal, gün gövdesine ve ay dalına göre farklı okunur.",
              "Dallar arasındaki uyum, çatışma ve uyumsuzluk gibi ilişkiler burada ele alınmaz."
            ]
          },
          {
            "p": "Dallar arasındaki ilişkiler [on iki dal tablosunda](/guide/branches), burç hayvanı olarak anlamı ise [burcun saju'daki yeri](/guide/zodiac) yazısında yer alır. Diğer dallar: [子 (Fare)](/guide/branch-ja) · [丑 (Öküz)](/guide/branch-chuk) · [寅 (Kaplan)](/guide/branch-in) · [卯 (Tavşan)](/guide/branch-myo) · [巳 (Yılan)](/guide/branch-sa) · [午 (At)](/guide/branch-o) · [未 (Koyun)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [酉 (Horoz)](/guide/branch-yu) · [戌 (Köpek)](/guide/branch-sul) · [亥 (Domuz)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sa": {
    "eyebrow": "Yer dalları",
    "title": "巳 — Yılan dalı",
    "summary": "巳 yer dalının barındırdığı gövdeler (gizli gövdeler), ay dalı olduğunda beş elementin gücü ve her gün gövdesi için okunan On Tanrı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "巳: on iki yer dalının altıncısı",
        "blocks": [
          {
            "p": "巳: on iki yer dalının altıncısı; Yılan hayvanına aittir. Doğum ayının dalı 巳 olduğunda mevsim yaz, mevsimin sahibi olan element ise Ateş olur."
          },
          {
            "p": "Doğum gününün dalı 巳 olduğunda bu karakter eş konumudur. Aşağıda bu dalın hangi gövdeleri barındırdığını ve bunların gün gövdesine göre ne olduğunu görebilirsiniz."
          }
        ]
      },
      {
        "title": "Bu dalın barındırdığı gövdeler (gizli gövdeler)",
        "blocks": [
          {
            "p": "Bir dal görünen tek bir karakterdir ama içinde gövdeler barındırır. Pay, dalın otuz gününün gövdeler arasında nasıl bölündüğünü gösterir; ana gövde ise dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "巳 dalının gizli gövdeleri",
              "head": [
                "Gövde",
                "Element ve kutup",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "Yang Toprak",
                  "kalan (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "Yang Metal (庚)",
                  "Yang Metal",
                  "orta (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "Yang Ateş (丙)",
                  "Yang Ateş",
                  "ana (本氣)",
                  "{hidSaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ay dalı 巳 olduğunda beş elementin gücü",
        "blocks": [
          {
            "p": "Doğum ayının dalı 巳 olduğunda her element bir durum alır (Wang, Sang, Hyu, Su, Sa) ve bu durum, gücüne uygulanan çarpan olur."
          },
          {
            "table": {
              "caption": "Ay dalı 巳 için element durumları (yaz)",
              "head": [
                "Element",
                "Durum",
                "Çarpan"
              ],
              "rows": [
                [
                  "Ağaç",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Ateş",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Toprak",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Metal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Su",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gün gövdesine göre On Tanrı",
        "blocks": [
          {
            "p": "巳 dalının aynı gizli gövdeleri, gün gövdesine göre farklı On Tanrı olur. 巳 gün dalı olduğunda bu tablo eş konumunun okumasıdır."
          },
          {
            "table": {
              "caption": "巳 dalının gizli gövdelerinin her gün gövdesine göre karşılığı",
              "head": [
                "Gün gövdesi",
                "Yang Toprak (戊) — kalan (餘氣)",
                "Yang Metal (庚) — orta (中氣)",
                "Yang Ateş (丙) — ana (本氣)"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Beklenmedik Varlık (偏財)",
                  "Meydan Okuyan (偏官)",
                  "İfade (食神)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Düzenli Varlık (正財)",
                  "Otorite (正官)",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yang Ateş (丙)",
                  "İfade (食神)",
                  "Beklenmedik Varlık (偏財)",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Sarsıcı (傷官)",
                  "Düzenli Varlık (正財)",
                  "Rakip (劫財)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Yoldaş (比肩)",
                  "İfade (食神)",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yin Toprak (己)",
                  "Rakip (劫財)",
                  "Sarsıcı (傷官)",
                  "Kollayan (正印)"
                ],
                [
                  "Yang Metal (庚)",
                  "Sıra Dışı Destek (偏印)",
                  "Yoldaş (比肩)",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yin Metal (辛)",
                  "Kollayan (正印)",
                  "Rakip (劫財)",
                  "Otorite (正官)"
                ],
                [
                  "Yang Su (壬)",
                  "Meydan Okuyan (偏官)",
                  "Sıra Dışı Destek (偏印)",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yin Su (癸)",
                  "Otorite (正官)",
                  "Kollayan (正印)",
                  "Düzenli Varlık (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir dal bir insanı belirlemez. Aynı dal, gün gövdesine ve ay dalına göre farklı okunur.",
              "Dallar arasındaki uyum, çatışma ve uyumsuzluk gibi ilişkiler burada ele alınmaz."
            ]
          },
          {
            "p": "Dallar arasındaki ilişkiler [on iki dal tablosunda](/guide/branches), burç hayvanı olarak anlamı ise [burcun saju'daki yeri](/guide/zodiac) yazısında yer alır. Diğer dallar: [子 (Fare)](/guide/branch-ja) · [丑 (Öküz)](/guide/branch-chuk) · [寅 (Kaplan)](/guide/branch-in) · [卯 (Tavşan)](/guide/branch-myo) · [辰 (Ejderha)](/guide/branch-jin) · [午 (At)](/guide/branch-o) · [未 (Koyun)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [酉 (Horoz)](/guide/branch-yu) · [戌 (Köpek)](/guide/branch-sul) · [亥 (Domuz)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-o": {
    "eyebrow": "Yer dalları",
    "title": "午 — At dalı",
    "summary": "午 yer dalının barındırdığı gövdeler (gizli gövdeler), ay dalı olduğunda beş elementin gücü ve her gün gövdesi için okunan On Tanrı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "午: on iki yer dalının yedincisi",
        "blocks": [
          {
            "p": "午: on iki yer dalının yedincisi; At hayvanına aittir. Doğum ayının dalı 午 olduğunda mevsim yaz, mevsimin sahibi olan element ise Ateş olur."
          },
          {
            "p": "Doğum gününün dalı 午 olduğunda bu karakter eş konumudur. Aşağıda bu dalın hangi gövdeleri barındırdığını ve bunların gün gövdesine göre ne olduğunu görebilirsiniz."
          }
        ]
      },
      {
        "title": "Bu dalın barındırdığı gövdeler (gizli gövdeler)",
        "blocks": [
          {
            "p": "Bir dal görünen tek bir karakterdir ama içinde gövdeler barındırır. Pay, dalın otuz gününün gövdeler arasında nasıl bölündüğünü gösterir; ana gövde ise dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "午 dalının gizli gövdeleri",
              "head": [
                "Gövde",
                "Element ve kutup",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "Yang Ateş (丙)",
                  "Yang Ateş",
                  "kalan (餘氣)",
                  "{hidOYeo}"
                ],
                [
                  "Yin Toprak (己)",
                  "Yin Toprak",
                  "orta (中氣)",
                  "{hidOJung}"
                ],
                [
                  "Yin Ateş (丁)",
                  "Yin Ateş",
                  "ana (本氣)",
                  "{hidOBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ay dalı 午 olduğunda beş elementin gücü",
        "blocks": [
          {
            "p": "Doğum ayının dalı 午 olduğunda her element bir durum alır (Wang, Sang, Hyu, Su, Sa) ve bu durum, gücüne uygulanan çarpan olur."
          },
          {
            "table": {
              "caption": "Ay dalı 午 için element durumları (yaz)",
              "head": [
                "Element",
                "Durum",
                "Çarpan"
              ],
              "rows": [
                [
                  "Ağaç",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Ateş",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Toprak",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Metal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Su",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gün gövdesine göre On Tanrı",
        "blocks": [
          {
            "p": "午 dalının aynı gizli gövdeleri, gün gövdesine göre farklı On Tanrı olur. 午 gün dalı olduğunda bu tablo eş konumunun okumasıdır."
          },
          {
            "table": {
              "caption": "午 dalının gizli gövdelerinin her gün gövdesine göre karşılığı",
              "head": [
                "Gün gövdesi",
                "Yang Ateş (丙) — kalan (餘氣)",
                "Yin Toprak (己) — orta (中氣)",
                "Yin Ateş (丁) — ana (本氣)"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "İfade (食神)",
                  "Düzenli Varlık (正財)",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Sarsıcı (傷官)",
                  "Beklenmedik Varlık (偏財)",
                  "İfade (食神)"
                ],
                [
                  "Yang Ateş (丙)",
                  "Yoldaş (比肩)",
                  "Sarsıcı (傷官)",
                  "Rakip (劫財)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Rakip (劫財)",
                  "İfade (食神)",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Sıra Dışı Destek (偏印)",
                  "Rakip (劫財)",
                  "Kollayan (正印)"
                ],
                [
                  "Yin Toprak (己)",
                  "Kollayan (正印)",
                  "Yoldaş (比肩)",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yang Metal (庚)",
                  "Meydan Okuyan (偏官)",
                  "Kollayan (正印)",
                  "Otorite (正官)"
                ],
                [
                  "Yin Metal (辛)",
                  "Otorite (正官)",
                  "Sıra Dışı Destek (偏印)",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yang Su (壬)",
                  "Beklenmedik Varlık (偏財)",
                  "Otorite (正官)",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yin Su (癸)",
                  "Düzenli Varlık (正財)",
                  "Meydan Okuyan (偏官)",
                  "Beklenmedik Varlık (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir dal bir insanı belirlemez. Aynı dal, gün gövdesine ve ay dalına göre farklı okunur.",
              "Dallar arasındaki uyum, çatışma ve uyumsuzluk gibi ilişkiler burada ele alınmaz."
            ]
          },
          {
            "p": "Dallar arasındaki ilişkiler [on iki dal tablosunda](/guide/branches), burç hayvanı olarak anlamı ise [burcun saju'daki yeri](/guide/zodiac) yazısında yer alır. Diğer dallar: [子 (Fare)](/guide/branch-ja) · [丑 (Öküz)](/guide/branch-chuk) · [寅 (Kaplan)](/guide/branch-in) · [卯 (Tavşan)](/guide/branch-myo) · [辰 (Ejderha)](/guide/branch-jin) · [巳 (Yılan)](/guide/branch-sa) · [未 (Koyun)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [酉 (Horoz)](/guide/branch-yu) · [戌 (Köpek)](/guide/branch-sul) · [亥 (Domuz)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-mi": {
    "eyebrow": "Yer dalları",
    "title": "未 — Koyun dalı",
    "summary": "未 yer dalının barındırdığı gövdeler (gizli gövdeler), ay dalı olduğunda beş elementin gücü ve her gün gövdesi için okunan On Tanrı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "未: on iki yer dalının sekizincisi",
        "blocks": [
          {
            "p": "未: on iki yer dalının sekizincisi; Koyun hayvanına aittir. Doğum ayının dalı 未 olduğunda mevsim yaz, mevsimin sahibi olan element ise Ateş olur. Bu bir geçiş ayıdır (辰未戌丑), bu nedenle Toprak da «Wang» durumunda sayılır."
          },
          {
            "p": "Doğum gününün dalı 未 olduğunda bu karakter eş konumudur. Aşağıda bu dalın hangi gövdeleri barındırdığını ve bunların gün gövdesine göre ne olduğunu görebilirsiniz."
          }
        ]
      },
      {
        "title": "Bu dalın barındırdığı gövdeler (gizli gövdeler)",
        "blocks": [
          {
            "p": "Bir dal görünen tek bir karakterdir ama içinde gövdeler barındırır. Pay, dalın otuz gününün gövdeler arasında nasıl bölündüğünü gösterir; ana gövde ise dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "未 dalının gizli gövdeleri",
              "head": [
                "Gövde",
                "Element ve kutup",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "Yin Ateş (丁)",
                  "Yin Ateş",
                  "kalan (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Yin Ağaç",
                  "orta (中氣)",
                  "{hidMiJung}"
                ],
                [
                  "Yin Toprak (己)",
                  "Yin Toprak",
                  "ana (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ay dalı 未 olduğunda beş elementin gücü",
        "blocks": [
          {
            "p": "Doğum ayının dalı 未 olduğunda her element bir durum alır (Wang, Sang, Hyu, Su, Sa) ve bu durum, gücüne uygulanan çarpan olur."
          },
          {
            "table": {
              "caption": "Ay dalı 未 için element durumları (yaz (geçiş ayı))",
              "head": [
                "Element",
                "Durum",
                "Çarpan"
              ],
              "rows": [
                [
                  "Ağaç",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Ateş",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Toprak",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Su",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gün gövdesine göre On Tanrı",
        "blocks": [
          {
            "p": "未 dalının aynı gizli gövdeleri, gün gövdesine göre farklı On Tanrı olur. 未 gün dalı olduğunda bu tablo eş konumunun okumasıdır."
          },
          {
            "table": {
              "caption": "未 dalının gizli gövdelerinin her gün gövdesine göre karşılığı",
              "head": [
                "Gün gövdesi",
                "Yin Ateş (丁) — kalan (餘氣)",
                "Yin Ağaç (乙) — orta (中氣)",
                "Yin Toprak (己) — ana (本氣)"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Sarsıcı (傷官)",
                  "Rakip (劫財)",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "İfade (食神)",
                  "Yoldaş (比肩)",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yang Ateş (丙)",
                  "Rakip (劫財)",
                  "Kollayan (正印)",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Yoldaş (比肩)",
                  "Sıra Dışı Destek (偏印)",
                  "İfade (食神)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Kollayan (正印)",
                  "Otorite (正官)",
                  "Rakip (劫財)"
                ],
                [
                  "Yin Toprak (己)",
                  "Sıra Dışı Destek (偏印)",
                  "Meydan Okuyan (偏官)",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yang Metal (庚)",
                  "Otorite (正官)",
                  "Düzenli Varlık (正財)",
                  "Kollayan (正印)"
                ],
                [
                  "Yin Metal (辛)",
                  "Meydan Okuyan (偏官)",
                  "Beklenmedik Varlık (偏財)",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yang Su (壬)",
                  "Düzenli Varlık (正財)",
                  "Sarsıcı (傷官)",
                  "Otorite (正官)"
                ],
                [
                  "Yin Su (癸)",
                  "Beklenmedik Varlık (偏財)",
                  "İfade (食神)",
                  "Meydan Okuyan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir dal bir insanı belirlemez. Aynı dal, gün gövdesine ve ay dalına göre farklı okunur.",
              "Dallar arasındaki uyum, çatışma ve uyumsuzluk gibi ilişkiler burada ele alınmaz."
            ]
          },
          {
            "p": "Dallar arasındaki ilişkiler [on iki dal tablosunda](/guide/branches), burç hayvanı olarak anlamı ise [burcun saju'daki yeri](/guide/zodiac) yazısında yer alır. Diğer dallar: [子 (Fare)](/guide/branch-ja) · [丑 (Öküz)](/guide/branch-chuk) · [寅 (Kaplan)](/guide/branch-in) · [卯 (Tavşan)](/guide/branch-myo) · [辰 (Ejderha)](/guide/branch-jin) · [巳 (Yılan)](/guide/branch-sa) · [午 (At)](/guide/branch-o) · [申 (Maymun)](/guide/branch-sin) · [酉 (Horoz)](/guide/branch-yu) · [戌 (Köpek)](/guide/branch-sul) · [亥 (Domuz)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sin": {
    "eyebrow": "Yer dalları",
    "title": "申 — Maymun dalı",
    "summary": "申 yer dalının barındırdığı gövdeler (gizli gövdeler), ay dalı olduğunda beş elementin gücü ve her gün gövdesi için okunan On Tanrı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "申: on iki yer dalının dokuzuncusu",
        "blocks": [
          {
            "p": "申: on iki yer dalının dokuzuncusu; Maymun hayvanına aittir. Doğum ayının dalı 申 olduğunda mevsim sonbahar, mevsimin sahibi olan element ise Metal olur."
          },
          {
            "p": "Doğum gününün dalı 申 olduğunda bu karakter eş konumudur. Aşağıda bu dalın hangi gövdeleri barındırdığını ve bunların gün gövdesine göre ne olduğunu görebilirsiniz."
          }
        ]
      },
      {
        "title": "Bu dalın barındırdığı gövdeler (gizli gövdeler)",
        "blocks": [
          {
            "p": "Bir dal görünen tek bir karakterdir ama içinde gövdeler barındırır. Pay, dalın otuz gününün gövdeler arasında nasıl bölündüğünü gösterir; ana gövde ise dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "申 dalının gizli gövdeleri",
              "head": [
                "Gövde",
                "Element ve kutup",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "Yang Toprak",
                  "kalan (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "Yang Su (壬)",
                  "Yang Su",
                  "orta (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "Yang Metal (庚)",
                  "Yang Metal",
                  "ana (本氣)",
                  "{hidSinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ay dalı 申 olduğunda beş elementin gücü",
        "blocks": [
          {
            "p": "Doğum ayının dalı 申 olduğunda her element bir durum alır (Wang, Sang, Hyu, Su, Sa) ve bu durum, gücüne uygulanan çarpan olur."
          },
          {
            "table": {
              "caption": "Ay dalı 申 için element durumları (sonbahar)",
              "head": [
                "Element",
                "Durum",
                "Çarpan"
              ],
              "rows": [
                [
                  "Ağaç",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Ateş",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Toprak",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Metal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Su",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gün gövdesine göre On Tanrı",
        "blocks": [
          {
            "p": "申 dalının aynı gizli gövdeleri, gün gövdesine göre farklı On Tanrı olur. 申 gün dalı olduğunda bu tablo eş konumunun okumasıdır."
          },
          {
            "table": {
              "caption": "申 dalının gizli gövdelerinin her gün gövdesine göre karşılığı",
              "head": [
                "Gün gövdesi",
                "Yang Toprak (戊) — kalan (餘氣)",
                "Yang Su (壬) — orta (中氣)",
                "Yang Metal (庚) — ana (本氣)"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Beklenmedik Varlık (偏財)",
                  "Sıra Dışı Destek (偏印)",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Düzenli Varlık (正財)",
                  "Kollayan (正印)",
                  "Otorite (正官)"
                ],
                [
                  "Yang Ateş (丙)",
                  "İfade (食神)",
                  "Meydan Okuyan (偏官)",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Sarsıcı (傷官)",
                  "Otorite (正官)",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Yoldaş (比肩)",
                  "Beklenmedik Varlık (偏財)",
                  "İfade (食神)"
                ],
                [
                  "Yin Toprak (己)",
                  "Rakip (劫財)",
                  "Düzenli Varlık (正財)",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yang Metal (庚)",
                  "Sıra Dışı Destek (偏印)",
                  "İfade (食神)",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yin Metal (辛)",
                  "Kollayan (正印)",
                  "Sarsıcı (傷官)",
                  "Rakip (劫財)"
                ],
                [
                  "Yang Su (壬)",
                  "Meydan Okuyan (偏官)",
                  "Yoldaş (比肩)",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yin Su (癸)",
                  "Otorite (正官)",
                  "Rakip (劫財)",
                  "Kollayan (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir dal bir insanı belirlemez. Aynı dal, gün gövdesine ve ay dalına göre farklı okunur.",
              "Dallar arasındaki uyum, çatışma ve uyumsuzluk gibi ilişkiler burada ele alınmaz."
            ]
          },
          {
            "p": "Dallar arasındaki ilişkiler [on iki dal tablosunda](/guide/branches), burç hayvanı olarak anlamı ise [burcun saju'daki yeri](/guide/zodiac) yazısında yer alır. Diğer dallar: [子 (Fare)](/guide/branch-ja) · [丑 (Öküz)](/guide/branch-chuk) · [寅 (Kaplan)](/guide/branch-in) · [卯 (Tavşan)](/guide/branch-myo) · [辰 (Ejderha)](/guide/branch-jin) · [巳 (Yılan)](/guide/branch-sa) · [午 (At)](/guide/branch-o) · [未 (Koyun)](/guide/branch-mi) · [酉 (Horoz)](/guide/branch-yu) · [戌 (Köpek)](/guide/branch-sul) · [亥 (Domuz)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-yu": {
    "eyebrow": "Yer dalları",
    "title": "酉 — Horoz dalı",
    "summary": "酉 yer dalının barındırdığı gövdeler (gizli gövdeler), ay dalı olduğunda beş elementin gücü ve her gün gövdesi için okunan On Tanrı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "酉: on iki yer dalının onuncusu",
        "blocks": [
          {
            "p": "酉: on iki yer dalının onuncusu; Horoz hayvanına aittir. Doğum ayının dalı 酉 olduğunda mevsim sonbahar, mevsimin sahibi olan element ise Metal olur."
          },
          {
            "p": "Doğum gününün dalı 酉 olduğunda bu karakter eş konumudur. Aşağıda bu dalın hangi gövdeleri barındırdığını ve bunların gün gövdesine göre ne olduğunu görebilirsiniz."
          }
        ]
      },
      {
        "title": "Bu dalın barındırdığı gövdeler (gizli gövdeler)",
        "blocks": [
          {
            "p": "Bir dal görünen tek bir karakterdir ama içinde gövdeler barındırır. Pay, dalın otuz gününün gövdeler arasında nasıl bölündüğünü gösterir; ana gövde ise dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "酉 dalının gizli gövdeleri",
              "head": [
                "Gövde",
                "Element ve kutup",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "Yang Metal (庚)",
                  "Yang Metal",
                  "kalan (餘氣)",
                  "{hidYuYeo}"
                ],
                [
                  "Yin Metal (辛)",
                  "Yin Metal",
                  "ana (本氣)",
                  "{hidYuBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ay dalı 酉 olduğunda beş elementin gücü",
        "blocks": [
          {
            "p": "Doğum ayının dalı 酉 olduğunda her element bir durum alır (Wang, Sang, Hyu, Su, Sa) ve bu durum, gücüne uygulanan çarpan olur."
          },
          {
            "table": {
              "caption": "Ay dalı 酉 için element durumları (sonbahar)",
              "head": [
                "Element",
                "Durum",
                "Çarpan"
              ],
              "rows": [
                [
                  "Ağaç",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Ateş",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Toprak",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Metal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Su",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gün gövdesine göre On Tanrı",
        "blocks": [
          {
            "p": "酉 dalının aynı gizli gövdeleri, gün gövdesine göre farklı On Tanrı olur. 酉 gün dalı olduğunda bu tablo eş konumunun okumasıdır."
          },
          {
            "table": {
              "caption": "酉 dalının gizli gövdelerinin her gün gövdesine göre karşılığı",
              "head": [
                "Gün gövdesi",
                "Yang Metal (庚) — kalan (餘氣)",
                "Yin Metal (辛) — ana (本氣)"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Meydan Okuyan (偏官)",
                  "Otorite (正官)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Otorite (正官)",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yang Ateş (丙)",
                  "Beklenmedik Varlık (偏財)",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Düzenli Varlık (正財)",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yang Toprak (戊)",
                  "İfade (食神)",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yin Toprak (己)",
                  "Sarsıcı (傷官)",
                  "İfade (食神)"
                ],
                [
                  "Yang Metal (庚)",
                  "Yoldaş (比肩)",
                  "Rakip (劫財)"
                ],
                [
                  "Yin Metal (辛)",
                  "Rakip (劫財)",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yang Su (壬)",
                  "Sıra Dışı Destek (偏印)",
                  "Kollayan (正印)"
                ],
                [
                  "Yin Su (癸)",
                  "Kollayan (正印)",
                  "Sıra Dışı Destek (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir dal bir insanı belirlemez. Aynı dal, gün gövdesine ve ay dalına göre farklı okunur.",
              "Dallar arasındaki uyum, çatışma ve uyumsuzluk gibi ilişkiler burada ele alınmaz."
            ]
          },
          {
            "p": "Dallar arasındaki ilişkiler [on iki dal tablosunda](/guide/branches), burç hayvanı olarak anlamı ise [burcun saju'daki yeri](/guide/zodiac) yazısında yer alır. Diğer dallar: [子 (Fare)](/guide/branch-ja) · [丑 (Öküz)](/guide/branch-chuk) · [寅 (Kaplan)](/guide/branch-in) · [卯 (Tavşan)](/guide/branch-myo) · [辰 (Ejderha)](/guide/branch-jin) · [巳 (Yılan)](/guide/branch-sa) · [午 (At)](/guide/branch-o) · [未 (Koyun)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [戌 (Köpek)](/guide/branch-sul) · [亥 (Domuz)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sul": {
    "eyebrow": "Yer dalları",
    "title": "戌 — Köpek dalı",
    "summary": "戌 yer dalının barındırdığı gövdeler (gizli gövdeler), ay dalı olduğunda beş elementin gücü ve her gün gövdesi için okunan On Tanrı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "戌: on iki yer dalının on birincisi",
        "blocks": [
          {
            "p": "戌: on iki yer dalının on birincisi; Köpek hayvanına aittir. Doğum ayının dalı 戌 olduğunda mevsim sonbahar, mevsimin sahibi olan element ise Metal olur. Bu bir geçiş ayıdır (辰未戌丑), bu nedenle Toprak da «Wang» durumunda sayılır."
          },
          {
            "p": "Doğum gününün dalı 戌 olduğunda bu karakter eş konumudur. Aşağıda bu dalın hangi gövdeleri barındırdığını ve bunların gün gövdesine göre ne olduğunu görebilirsiniz."
          }
        ]
      },
      {
        "title": "Bu dalın barındırdığı gövdeler (gizli gövdeler)",
        "blocks": [
          {
            "p": "Bir dal görünen tek bir karakterdir ama içinde gövdeler barındırır. Pay, dalın otuz gününün gövdeler arasında nasıl bölündüğünü gösterir; ana gövde ise dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "戌 dalının gizli gövdeleri",
              "head": [
                "Gövde",
                "Element ve kutup",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "Yin Metal (辛)",
                  "Yin Metal",
                  "kalan (餘氣)",
                  "{hidSulYeo}"
                ],
                [
                  "Yin Ateş (丁)",
                  "Yin Ateş",
                  "orta (中氣)",
                  "{hidSulJung}"
                ],
                [
                  "Yang Toprak (戊)",
                  "Yang Toprak",
                  "ana (本氣)",
                  "{hidSulBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ay dalı 戌 olduğunda beş elementin gücü",
        "blocks": [
          {
            "p": "Doğum ayının dalı 戌 olduğunda her element bir durum alır (Wang, Sang, Hyu, Su, Sa) ve bu durum, gücüne uygulanan çarpan olur."
          },
          {
            "table": {
              "caption": "Ay dalı 戌 için element durumları (sonbahar (geçiş ayı))",
              "head": [
                "Element",
                "Durum",
                "Çarpan"
              ],
              "rows": [
                [
                  "Ağaç",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Ateş",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Toprak",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Su",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gün gövdesine göre On Tanrı",
        "blocks": [
          {
            "p": "戌 dalının aynı gizli gövdeleri, gün gövdesine göre farklı On Tanrı olur. 戌 gün dalı olduğunda bu tablo eş konumunun okumasıdır."
          },
          {
            "table": {
              "caption": "戌 dalının gizli gövdelerinin her gün gövdesine göre karşılığı",
              "head": [
                "Gün gövdesi",
                "Yin Metal (辛) — kalan (餘氣)",
                "Yin Ateş (丁) — orta (中氣)",
                "Yang Toprak (戊) — ana (本氣)"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Otorite (正官)",
                  "Sarsıcı (傷官)",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Meydan Okuyan (偏官)",
                  "İfade (食神)",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yang Ateş (丙)",
                  "Düzenli Varlık (正財)",
                  "Rakip (劫財)",
                  "İfade (食神)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Beklenmedik Varlık (偏財)",
                  "Yoldaş (比肩)",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Sarsıcı (傷官)",
                  "Kollayan (正印)",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yin Toprak (己)",
                  "İfade (食神)",
                  "Sıra Dışı Destek (偏印)",
                  "Rakip (劫財)"
                ],
                [
                  "Yang Metal (庚)",
                  "Rakip (劫財)",
                  "Otorite (正官)",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yin Metal (辛)",
                  "Yoldaş (比肩)",
                  "Meydan Okuyan (偏官)",
                  "Kollayan (正印)"
                ],
                [
                  "Yang Su (壬)",
                  "Kollayan (正印)",
                  "Düzenli Varlık (正財)",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yin Su (癸)",
                  "Sıra Dışı Destek (偏印)",
                  "Beklenmedik Varlık (偏財)",
                  "Otorite (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir dal bir insanı belirlemez. Aynı dal, gün gövdesine ve ay dalına göre farklı okunur.",
              "Dallar arasındaki uyum, çatışma ve uyumsuzluk gibi ilişkiler burada ele alınmaz."
            ]
          },
          {
            "p": "Dallar arasındaki ilişkiler [on iki dal tablosunda](/guide/branches), burç hayvanı olarak anlamı ise [burcun saju'daki yeri](/guide/zodiac) yazısında yer alır. Diğer dallar: [子 (Fare)](/guide/branch-ja) · [丑 (Öküz)](/guide/branch-chuk) · [寅 (Kaplan)](/guide/branch-in) · [卯 (Tavşan)](/guide/branch-myo) · [辰 (Ejderha)](/guide/branch-jin) · [巳 (Yılan)](/guide/branch-sa) · [午 (At)](/guide/branch-o) · [未 (Koyun)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [酉 (Horoz)](/guide/branch-yu) · [亥 (Domuz)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-hae": {
    "eyebrow": "Yer dalları",
    "title": "亥 — Domuz dalı",
    "summary": "亥 yer dalının barındırdığı gövdeler (gizli gövdeler), ay dalı olduğunda beş elementin gücü ve her gün gövdesi için okunan On Tanrı — Saju-Link'in hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "亥: on iki yer dalının on ikincisi",
        "blocks": [
          {
            "p": "亥: on iki yer dalının on ikincisi; Domuz hayvanına aittir. Doğum ayının dalı 亥 olduğunda mevsim kış, mevsimin sahibi olan element ise Su olur."
          },
          {
            "p": "Doğum gününün dalı 亥 olduğunda bu karakter eş konumudur. Aşağıda bu dalın hangi gövdeleri barındırdığını ve bunların gün gövdesine göre ne olduğunu görebilirsiniz."
          }
        ]
      },
      {
        "title": "Bu dalın barındırdığı gövdeler (gizli gövdeler)",
        "blocks": [
          {
            "p": "Bir dal görünen tek bir karakterdir ama içinde gövdeler barındırır. Pay, dalın otuz gününün gövdeler arasında nasıl bölündüğünü gösterir; ana gövde ise dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "亥 dalının gizli gövdeleri",
              "head": [
                "Gövde",
                "Element ve kutup",
                "Konum",
                "Pay"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "Yang Toprak",
                  "kalan (餘氣)",
                  "{hidHaeYeo}"
                ],
                [
                  "Yang Ağaç (甲)",
                  "Yang Ağaç",
                  "orta (中氣)",
                  "{hidHaeJung}"
                ],
                [
                  "Yang Su (壬)",
                  "Yang Su",
                  "ana (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ay dalı 亥 olduğunda beş elementin gücü",
        "blocks": [
          {
            "p": "Doğum ayının dalı 亥 olduğunda her element bir durum alır (Wang, Sang, Hyu, Su, Sa) ve bu durum, gücüne uygulanan çarpan olur."
          },
          {
            "table": {
              "caption": "Ay dalı 亥 için element durumları (kış)",
              "head": [
                "Element",
                "Durum",
                "Çarpan"
              ],
              "rows": [
                [
                  "Ağaç",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Ateş",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Toprak",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Metal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Su",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gün gövdesine göre On Tanrı",
        "blocks": [
          {
            "p": "亥 dalının aynı gizli gövdeleri, gün gövdesine göre farklı On Tanrı olur. 亥 gün dalı olduğunda bu tablo eş konumunun okumasıdır."
          },
          {
            "table": {
              "caption": "亥 dalının gizli gövdelerinin her gün gövdesine göre karşılığı",
              "head": [
                "Gün gövdesi",
                "Yang Toprak (戊) — kalan (餘氣)",
                "Yang Ağaç (甲) — orta (中氣)",
                "Yang Su (壬) — ana (本氣)"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Beklenmedik Varlık (偏財)",
                  "Yoldaş (比肩)",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Düzenli Varlık (正財)",
                  "Rakip (劫財)",
                  "Kollayan (正印)"
                ],
                [
                  "Yang Ateş (丙)",
                  "İfade (食神)",
                  "Sıra Dışı Destek (偏印)",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yin Ateş (丁)",
                  "Sarsıcı (傷官)",
                  "Kollayan (正印)",
                  "Otorite (正官)"
                ],
                [
                  "Yang Toprak (戊)",
                  "Yoldaş (比肩)",
                  "Meydan Okuyan (偏官)",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yin Toprak (己)",
                  "Rakip (劫財)",
                  "Otorite (正官)",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yang Metal (庚)",
                  "Sıra Dışı Destek (偏印)",
                  "Beklenmedik Varlık (偏財)",
                  "İfade (食神)"
                ],
                [
                  "Yin Metal (辛)",
                  "Kollayan (正印)",
                  "Düzenli Varlık (正財)",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yang Su (壬)",
                  "Meydan Okuyan (偏官)",
                  "İfade (食神)",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yin Su (癸)",
                  "Otorite (正官)",
                  "Sarsıcı (傷官)",
                  "Rakip (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir dal bir insanı belirlemez. Aynı dal, gün gövdesine ve ay dalına göre farklı okunur.",
              "Dallar arasındaki uyum, çatışma ve uyumsuzluk gibi ilişkiler burada ele alınmaz."
            ]
          },
          {
            "p": "Dallar arasındaki ilişkiler [on iki dal tablosunda](/guide/branches), burç hayvanı olarak anlamı ise [burcun saju'daki yeri](/guide/zodiac) yazısında yer alır. Diğer dallar: [子 (Fare)](/guide/branch-ja) · [丑 (Öküz)](/guide/branch-chuk) · [寅 (Kaplan)](/guide/branch-in) · [卯 (Tavşan)](/guide/branch-myo) · [辰 (Ejderha)](/guide/branch-jin) · [巳 (Yılan)](/guide/branch-sa) · [午 (At)](/guide/branch-o) · [未 (Koyun)](/guide/branch-mi) · [申 (Maymun)](/guide/branch-sin) · [酉 (Horoz)](/guide/branch-yu) · [戌 (Köpek)](/guide/branch-sul)"
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-ja": {
    "eyebrow": "Gün sütunları",
    "title": "甲子 gün sütunu",
    "summary": "Saju-Link'in 甲子 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "甲子: altmışlık döngünün 1. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 甲子 olduğunda gün gövdesi 甲 (Ağaç, Yang), gün dalı ise 子 (Fare) olur. Altmışlık döngüde bu, 1. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 甲 olan kişiye “Yang Ağaç (甲)” der ve sonuç ekranının gösterdiği satır şudur: \"Dümdüz büyüyen uzun bir ağaç. Yön bir kez belirlendi mi sapmaz, eğilmektense dayanmayı seçer.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 子 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 甲 açısından okunduğunda, 子 dalının barındırdığı gövdeler şöyledir. Ana gövde (癸) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "甲子 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 甲 için"
              ],
              "rows": [
                [
                  "Yang Su (壬)",
                  "kalan (餘氣)",
                  "{hidJaYeo}",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yin Su (癸)",
                  "ana (本氣)",
                  "{hidJaBon}",
                  "Kollayan (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 甲 olduğunda Düzenli Varlık 己, Otorite ise 辛 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 己. 己, 子 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 辛. 辛, 子 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [癸亥](/guide/pillar-gye-hae), sonraki ise [乙丑](/guide/pillar-eul-chuk) sütunudur."
          },
          {
            "p": "[Yang Ağaç (甲)](/guide/stem-gap) ve [子 (Fare)](/guide/branch-ja) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-chuk": {
    "eyebrow": "Gün sütunları",
    "title": "乙丑 gün sütunu",
    "summary": "Saju-Link'in 乙丑 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "乙丑: altmışlık döngünün 2. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 乙丑 olduğunda gün gövdesi 乙 (Ağaç, Yin), gün dalı ise 丑 (Öküz) olur. Altmışlık döngüde bu, 2. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 乙 olan kişiye “Yin Ağaç (乙)” der ve sonuç ekranının gösterdiği satır şudur: \"Sarmaşık — esnek bir ot. İlerlemek için koşullara göre eğilir ve kopmaz.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 丑 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 乙 açısından okunduğunda, 丑 dalının barındırdığı gövdeler şöyledir. Ana gövde (己) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "乙丑 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 乙 için"
              ],
              "rows": [
                [
                  "Yin Su (癸)",
                  "kalan (餘氣)",
                  "{hidChukYeo}",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yin Metal (辛)",
                  "orta (中氣)",
                  "{hidChukJung}",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yin Toprak (己)",
                  "ana (本氣)",
                  "{hidChukBon}",
                  "Beklenmedik Varlık (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 乙 olduğunda Düzenli Varlık 戊, Otorite ise 庚 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 戊. 戊, 丑 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 庚. 庚, 丑 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [甲子](/guide/pillar-gap-ja), sonraki ise [丙寅](/guide/pillar-byeong-in) sütunudur."
          },
          {
            "p": "[Yin Ağaç (乙)](/guide/stem-eul) ve [丑 (Öküz)](/guide/branch-chuk) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-in": {
    "eyebrow": "Gün sütunları",
    "title": "丙寅 gün sütunu",
    "summary": "Saju-Link'in 丙寅 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "丙寅: altmışlık döngünün 3. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 丙寅 olduğunda gün gövdesi 丙 (Ateş, Yang), gün dalı ise 寅 (Kaplan) olur. Altmışlık döngüde bu, 3. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 丙 olan kişiye “Yang Ateş (丙)” der ve sonuç ekranının gösterdiği satır şudur: \"Öğle güneşi. Duygular açıkça görünür, ortam aydınlanır, öne çıkmak doğal gelir.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 寅 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 丙 açısından okunduğunda, 寅 dalının barındırdığı gövdeler şöyledir. Ana gövde (甲) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "丙寅 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 丙 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidInYeo}",
                  "İfade (食神)"
                ],
                [
                  "Yang Ateş (丙)",
                  "orta (中氣)",
                  "{hidInJung}",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yang Ağaç (甲)",
                  "ana (本氣)",
                  "{hidInBon}",
                  "Sıra Dışı Destek (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 丙 olduğunda Düzenli Varlık 辛, Otorite ise 癸 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 辛. 辛, 寅 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 癸. 癸, 寅 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [乙丑](/guide/pillar-eul-chuk), sonraki ise [丁卯](/guide/pillar-jeong-myo) sütunudur."
          },
          {
            "p": "[Yang Ateş (丙)](/guide/stem-byeong) ve [寅 (Kaplan)](/guide/branch-in) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-myo": {
    "eyebrow": "Gün sütunları",
    "title": "丁卯 gün sütunu",
    "summary": "Saju-Link'in 丁卯 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "丁卯: altmışlık döngünün 4. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 丁卯 olduğunda gün gövdesi 丁 (Ateş, Yin), gün dalı ise 卯 (Tavşan) olur. Altmışlık döngüde bu, 4. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 丁 olan kişiye “Yin Ateş (丁)” der ve sonuç ekranının gösterdiği satır şudur: \"Mum ışığı. Sessizce ve uzun yanar, önce en yakınındakini ısıtır.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 卯 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 丁 açısından okunduğunda, 卯 dalının barındırdığı gövdeler şöyledir. Ana gövde (乙) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "丁卯 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 丁 için"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "kalan (餘氣)",
                  "{hidMyoYeo}",
                  "Kollayan (正印)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "ana (本氣)",
                  "{hidMyoBon}",
                  "Sıra Dışı Destek (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 丁 olduğunda Düzenli Varlık 庚, Otorite ise 壬 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 庚. 庚, 卯 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 壬. 壬, 卯 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [丙寅](/guide/pillar-byeong-in), sonraki ise [戊辰](/guide/pillar-mu-jin) sütunudur."
          },
          {
            "p": "[Yin Ateş (丁)](/guide/stem-jeong) ve [卯 (Tavşan)](/guide/branch-myo) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-jin": {
    "eyebrow": "Gün sütunları",
    "title": "戊辰 gün sütunu",
    "summary": "Saju-Link'in 戊辰 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "戊辰: altmışlık döngünün 5. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 戊辰 olduğunda gün gövdesi 戊 (Toprak, Yang), gün dalı ise 辰 (Ejderha) olur. Altmışlık döngüde bu, 5. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 戊 olan kişiye “Yang Toprak (戊)” der ve sonuç ekranının gösterdiği satır şudur: \"Açık arazi ve dağlar. Sarsılması zordur, yaslanması kolaydır; ama bir kez verdiği kararı ağır değiştirir.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 辰 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 戊 açısından okunduğunda, 辰 dalının barındırdığı gövdeler şöyledir. Ana gövde (戊) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "戊辰 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 戊 için"
              ],
              "rows": [
                [
                  "Yin Ağaç (乙)",
                  "kalan (餘氣)",
                  "{hidJinYeo}",
                  "Otorite (正官)"
                ],
                [
                  "Yin Su (癸)",
                  "orta (中氣)",
                  "{hidJinJung}",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yang Toprak (戊)",
                  "ana (本氣)",
                  "{hidJinBon}",
                  "Yoldaş (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 戊 olduğunda Düzenli Varlık 癸, Otorite ise 乙 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 癸. 癸, 辰 içinde bulunur (orta (中氣))."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 乙. 乙, 辰 içinde bulunur (kalan (餘氣))."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [丁卯](/guide/pillar-jeong-myo), sonraki ise [己巳](/guide/pillar-gi-sa) sütunudur."
          },
          {
            "p": "[Yang Toprak (戊)](/guide/stem-mu) ve [辰 (Ejderha)](/guide/branch-jin) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-sa": {
    "eyebrow": "Gün sütunları",
    "title": "己巳 gün sütunu",
    "summary": "Saju-Link'in 己巳 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "己巳: altmışlık döngünün 6. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 己巳 olduğunda gün gövdesi 己 (Toprak, Yin), gün dalı ise 巳 (Yılan) olur. Altmışlık döngüde bu, 6. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 己 olan kişiye “Yin Toprak (己)” der ve sonuç ekranının gösterdiği satır şudur: \"Tarla toprağı. Geleni alır ve büyütür; sergilemekten çok gözetir.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 巳 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 己 açısından okunduğunda, 巳 dalının barındırdığı gövdeler şöyledir. Ana gövde (丙) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "己巳 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 己 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidSaYeo}",
                  "Rakip (劫財)"
                ],
                [
                  "Yang Metal (庚)",
                  "orta (中氣)",
                  "{hidSaJung}",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yang Ateş (丙)",
                  "ana (本氣)",
                  "{hidSaBon}",
                  "Kollayan (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 己 olduğunda Düzenli Varlık 壬, Otorite ise 甲 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 壬. 壬, 巳 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 甲. 甲, 巳 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [戊辰](/guide/pillar-mu-jin), sonraki ise [庚午](/guide/pillar-gyeong-o) sütunudur."
          },
          {
            "p": "[Yin Toprak (己)](/guide/stem-gi) ve [巳 (Yılan)](/guide/branch-sa) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-o": {
    "eyebrow": "Gün sütunları",
    "title": "庚午 gün sütunu",
    "summary": "Saju-Link'in 庚午 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "庚午: altmışlık döngünün 7. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 庚午 olduğunda gün gövdesi 庚 (Metal, Yang), gün dalı ise 午 (At) olur. Altmışlık döngüde bu, 7. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 庚 olan kişiye “Yang Metal (庚)” der ve sonuç ekranının gösterdiği satır şudur: \"İşlenmemiş demir. Kararlı ve nettir, askıda kalan işlere sabrı azdır.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 午 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 庚 açısından okunduğunda, 午 dalının barındırdığı gövdeler şöyledir. Ana gövde (丁) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "庚午 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 庚 için"
              ],
              "rows": [
                [
                  "Yang Ateş (丙)",
                  "kalan (餘氣)",
                  "{hidOYeo}",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yin Toprak (己)",
                  "orta (中氣)",
                  "{hidOJung}",
                  "Kollayan (正印)"
                ],
                [
                  "Yin Ateş (丁)",
                  "ana (本氣)",
                  "{hidOBon}",
                  "Otorite (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 庚 olduğunda Düzenli Varlık 乙, Otorite ise 丁 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 乙. 乙, 午 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 丁. 丁, 午 içinde bulunur (ana (本氣))."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [己巳](/guide/pillar-gi-sa), sonraki ise [辛未](/guide/pillar-sin-mi) sütunudur."
          },
          {
            "p": "[Yang Metal (庚)](/guide/stem-gyeong) ve [午 (At)](/guide/branch-o) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-mi": {
    "eyebrow": "Gün sütunları",
    "title": "辛未 gün sütunu",
    "summary": "Saju-Link'in 辛未 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "辛未: altmışlık döngünün 8. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 辛未 olduğunda gün gövdesi 辛 (Metal, Yin), gün dalı ise 未 (Koyun) olur. Altmışlık döngüde bu, 8. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 辛 olan kişiye “Yin Metal (辛)” der ve sonuç ekranının gösterdiği satır şudur: \"Yontulmuş bir mücevher. İnce bir zevki ve yüksek ölçüleri vardır; özensizliği geçiştiremez.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 未 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 辛 açısından okunduğunda, 未 dalının barındırdığı gövdeler şöyledir. Ana gövde (己) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "辛未 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 辛 için"
              ],
              "rows": [
                [
                  "Yin Ateş (丁)",
                  "kalan (餘氣)",
                  "{hidMiYeo}",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "orta (中氣)",
                  "{hidMiJung}",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yin Toprak (己)",
                  "ana (本氣)",
                  "{hidMiBon}",
                  "Sıra Dışı Destek (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 辛 olduğunda Düzenli Varlık 甲, Otorite ise 丙 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 甲. 甲, 未 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 丙. 丙, 未 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [庚午](/guide/pillar-gyeong-o), sonraki ise [壬申](/guide/pillar-im-sin) sütunudur."
          },
          {
            "p": "[Yin Metal (辛)](/guide/stem-sin) ve [未 (Koyun)](/guide/branch-mi) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sin": {
    "eyebrow": "Gün sütunları",
    "title": "壬申 gün sütunu",
    "summary": "Saju-Link'in 壬申 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "壬申: altmışlık döngünün 9. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 壬申 olduğunda gün gövdesi 壬 (Su, Yang), gün dalı ise 申 (Maymun) olur. Altmışlık döngüde bu, 9. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 壬 olan kişiye “Yang Su (壬)” der ve sonuç ekranının gösterdiği satır şudur: \"Irmak ve deniz. Bakışı geniştir, işlerin nasıl aktığını görür.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 申 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 壬 açısından okunduğunda, 申 dalının barındırdığı gövdeler şöyledir. Ana gövde (庚) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "壬申 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 壬 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidSinYeo}",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yang Su (壬)",
                  "orta (中氣)",
                  "{hidSinJung}",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yang Metal (庚)",
                  "ana (本氣)",
                  "{hidSinBon}",
                  "Sıra Dışı Destek (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 壬 olduğunda Düzenli Varlık 丁, Otorite ise 己 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 丁. 丁, 申 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 己. 己, 申 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [辛未](/guide/pillar-sin-mi), sonraki ise [癸酉](/guide/pillar-gye-yu) sütunudur."
          },
          {
            "p": "[Yang Su (壬)](/guide/stem-im) ve [申 (Maymun)](/guide/branch-sin) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-yu": {
    "eyebrow": "Gün sütunları",
    "title": "癸酉 gün sütunu",
    "summary": "Saju-Link'in 癸酉 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "癸酉: altmışlık döngünün 10. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 癸酉 olduğunda gün gövdesi 癸 (Su, Yin), gün dalı ise 酉 (Horoz) olur. Altmışlık döngüde bu, 10. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 癸 olan kişiye “Yin Su (癸)” der ve sonuç ekranının gösterdiği satır şudur: \"Çiy ve yağmur. Sessizce sızar, sözden önce havayı okur.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 酉 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 癸 açısından okunduğunda, 酉 dalının barındırdığı gövdeler şöyledir. Ana gövde (辛) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "癸酉 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 癸 için"
              ],
              "rows": [
                [
                  "Yang Metal (庚)",
                  "kalan (餘氣)",
                  "{hidYuYeo}",
                  "Kollayan (正印)"
                ],
                [
                  "Yin Metal (辛)",
                  "ana (本氣)",
                  "{hidYuBon}",
                  "Sıra Dışı Destek (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 癸 olduğunda Düzenli Varlık 丙, Otorite ise 戊 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 丙. 丙, 酉 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 戊. 戊, 酉 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [壬申](/guide/pillar-im-sin), sonraki ise [甲戌](/guide/pillar-gap-sul) sütunudur."
          },
          {
            "p": "[Yin Su (癸)](/guide/stem-gye) ve [酉 (Horoz)](/guide/branch-yu) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sul": {
    "eyebrow": "Gün sütunları",
    "title": "甲戌 gün sütunu",
    "summary": "Saju-Link'in 甲戌 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "甲戌: altmışlık döngünün 11. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 甲戌 olduğunda gün gövdesi 甲 (Ağaç, Yang), gün dalı ise 戌 (Köpek) olur. Altmışlık döngüde bu, 11. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 甲 olan kişiye “Yang Ağaç (甲)” der ve sonuç ekranının gösterdiği satır şudur: \"Dümdüz büyüyen uzun bir ağaç. Yön bir kez belirlendi mi sapmaz, eğilmektense dayanmayı seçer.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 戌 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 甲 açısından okunduğunda, 戌 dalının barındırdığı gövdeler şöyledir. Ana gövde (戊) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "甲戌 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 甲 için"
              ],
              "rows": [
                [
                  "Yin Metal (辛)",
                  "kalan (餘氣)",
                  "{hidSulYeo}",
                  "Otorite (正官)"
                ],
                [
                  "Yin Ateş (丁)",
                  "orta (中氣)",
                  "{hidSulJung}",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yang Toprak (戊)",
                  "ana (本氣)",
                  "{hidSulBon}",
                  "Beklenmedik Varlık (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 甲 olduğunda Düzenli Varlık 己, Otorite ise 辛 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 己. 己, 戌 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 辛. 辛, 戌 içinde bulunur (kalan (餘氣))."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [癸酉](/guide/pillar-gye-yu), sonraki ise [乙亥](/guide/pillar-eul-hae) sütunudur."
          },
          {
            "p": "[Yang Ağaç (甲)](/guide/stem-gap) ve [戌 (Köpek)](/guide/branch-sul) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-hae": {
    "eyebrow": "Gün sütunları",
    "title": "乙亥 gün sütunu",
    "summary": "Saju-Link'in 乙亥 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "乙亥: altmışlık döngünün 12. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 乙亥 olduğunda gün gövdesi 乙 (Ağaç, Yin), gün dalı ise 亥 (Domuz) olur. Altmışlık döngüde bu, 12. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 乙 olan kişiye “Yin Ağaç (乙)” der ve sonuç ekranının gösterdiği satır şudur: \"Sarmaşık — esnek bir ot. İlerlemek için koşullara göre eğilir ve kopmaz.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 亥 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 乙 açısından okunduğunda, 亥 dalının barındırdığı gövdeler şöyledir. Ana gövde (壬) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "乙亥 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 乙 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidHaeYeo}",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yang Ağaç (甲)",
                  "orta (中氣)",
                  "{hidHaeJung}",
                  "Rakip (劫財)"
                ],
                [
                  "Yang Su (壬)",
                  "ana (本氣)",
                  "{hidHaeBon}",
                  "Kollayan (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 乙 olduğunda Düzenli Varlık 戊, Otorite ise 庚 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 戊. 戊, 亥 içinde bulunur (kalan (餘氣))."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 庚. 庚, 亥 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [甲戌](/guide/pillar-gap-sul), sonraki ise [丙子](/guide/pillar-byeong-ja) sütunudur."
          },
          {
            "p": "[Yin Ağaç (乙)](/guide/stem-eul) ve [亥 (Domuz)](/guide/branch-hae) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-ja": {
    "eyebrow": "Gün sütunları",
    "title": "丙子 gün sütunu",
    "summary": "Saju-Link'in 丙子 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "丙子: altmışlık döngünün 13. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 丙子 olduğunda gün gövdesi 丙 (Ateş, Yang), gün dalı ise 子 (Fare) olur. Altmışlık döngüde bu, 13. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 丙 olan kişiye “Yang Ateş (丙)” der ve sonuç ekranının gösterdiği satır şudur: \"Öğle güneşi. Duygular açıkça görünür, ortam aydınlanır, öne çıkmak doğal gelir.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 子 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 丙 açısından okunduğunda, 子 dalının barındırdığı gövdeler şöyledir. Ana gövde (癸) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "丙子 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 丙 için"
              ],
              "rows": [
                [
                  "Yang Su (壬)",
                  "kalan (餘氣)",
                  "{hidJaYeo}",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yin Su (癸)",
                  "ana (本氣)",
                  "{hidJaBon}",
                  "Otorite (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 丙 olduğunda Düzenli Varlık 辛, Otorite ise 癸 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 辛. 辛, 子 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 癸. 癸, 子 içinde bulunur (ana (本氣))."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [乙亥](/guide/pillar-eul-hae), sonraki ise [丁丑](/guide/pillar-jeong-chuk) sütunudur."
          },
          {
            "p": "[Yang Ateş (丙)](/guide/stem-byeong) ve [子 (Fare)](/guide/branch-ja) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-chuk": {
    "eyebrow": "Gün sütunları",
    "title": "丁丑 gün sütunu",
    "summary": "Saju-Link'in 丁丑 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "丁丑: altmışlık döngünün 14. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 丁丑 olduğunda gün gövdesi 丁 (Ateş, Yin), gün dalı ise 丑 (Öküz) olur. Altmışlık döngüde bu, 14. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 丁 olan kişiye “Yin Ateş (丁)” der ve sonuç ekranının gösterdiği satır şudur: \"Mum ışığı. Sessizce ve uzun yanar, önce en yakınındakini ısıtır.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 丑 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 丁 açısından okunduğunda, 丑 dalının barındırdığı gövdeler şöyledir. Ana gövde (己) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "丁丑 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 丁 için"
              ],
              "rows": [
                [
                  "Yin Su (癸)",
                  "kalan (餘氣)",
                  "{hidChukYeo}",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yin Metal (辛)",
                  "orta (中氣)",
                  "{hidChukJung}",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yin Toprak (己)",
                  "ana (本氣)",
                  "{hidChukBon}",
                  "İfade (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 丁 olduğunda Düzenli Varlık 庚, Otorite ise 壬 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 庚. 庚, 丑 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 壬. 壬, 丑 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [丙子](/guide/pillar-byeong-ja), sonraki ise [戊寅](/guide/pillar-mu-in) sütunudur."
          },
          {
            "p": "[Yin Ateş (丁)](/guide/stem-jeong) ve [丑 (Öküz)](/guide/branch-chuk) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-in": {
    "eyebrow": "Gün sütunları",
    "title": "戊寅 gün sütunu",
    "summary": "Saju-Link'in 戊寅 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "戊寅: altmışlık döngünün 15. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 戊寅 olduğunda gün gövdesi 戊 (Toprak, Yang), gün dalı ise 寅 (Kaplan) olur. Altmışlık döngüde bu, 15. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 戊 olan kişiye “Yang Toprak (戊)” der ve sonuç ekranının gösterdiği satır şudur: \"Açık arazi ve dağlar. Sarsılması zordur, yaslanması kolaydır; ama bir kez verdiği kararı ağır değiştirir.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 寅 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 戊 açısından okunduğunda, 寅 dalının barındırdığı gövdeler şöyledir. Ana gövde (甲) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "戊寅 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 戊 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidInYeo}",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yang Ateş (丙)",
                  "orta (中氣)",
                  "{hidInJung}",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yang Ağaç (甲)",
                  "ana (本氣)",
                  "{hidInBon}",
                  "Meydan Okuyan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 戊 olduğunda Düzenli Varlık 癸, Otorite ise 乙 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 癸. 癸, 寅 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 乙. 乙, 寅 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [丁丑](/guide/pillar-jeong-chuk), sonraki ise [己卯](/guide/pillar-gi-myo) sütunudur."
          },
          {
            "p": "[Yang Toprak (戊)](/guide/stem-mu) ve [寅 (Kaplan)](/guide/branch-in) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-myo": {
    "eyebrow": "Gün sütunları",
    "title": "己卯 gün sütunu",
    "summary": "Saju-Link'in 己卯 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "己卯: altmışlık döngünün 16. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 己卯 olduğunda gün gövdesi 己 (Toprak, Yin), gün dalı ise 卯 (Tavşan) olur. Altmışlık döngüde bu, 16. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 己 olan kişiye “Yin Toprak (己)” der ve sonuç ekranının gösterdiği satır şudur: \"Tarla toprağı. Geleni alır ve büyütür; sergilemekten çok gözetir.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 卯 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 己 açısından okunduğunda, 卯 dalının barındırdığı gövdeler şöyledir. Ana gövde (乙) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "己卯 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 己 için"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "kalan (餘氣)",
                  "{hidMyoYeo}",
                  "Otorite (正官)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "ana (本氣)",
                  "{hidMyoBon}",
                  "Meydan Okuyan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 己 olduğunda Düzenli Varlık 壬, Otorite ise 甲 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 壬. 壬, 卯 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 甲. 甲, 卯 içinde bulunur (kalan (餘氣))."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [戊寅](/guide/pillar-mu-in), sonraki ise [庚辰](/guide/pillar-gyeong-jin) sütunudur."
          },
          {
            "p": "[Yin Toprak (己)](/guide/stem-gi) ve [卯 (Tavşan)](/guide/branch-myo) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-jin": {
    "eyebrow": "Gün sütunları",
    "title": "庚辰 gün sütunu",
    "summary": "Saju-Link'in 庚辰 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "庚辰: altmışlık döngünün 17. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 庚辰 olduğunda gün gövdesi 庚 (Metal, Yang), gün dalı ise 辰 (Ejderha) olur. Altmışlık döngüde bu, 17. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 庚 olan kişiye “Yang Metal (庚)” der ve sonuç ekranının gösterdiği satır şudur: \"İşlenmemiş demir. Kararlı ve nettir, askıda kalan işlere sabrı azdır.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 辰 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 庚 açısından okunduğunda, 辰 dalının barındırdığı gövdeler şöyledir. Ana gövde (戊) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "庚辰 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 庚 için"
              ],
              "rows": [
                [
                  "Yin Ağaç (乙)",
                  "kalan (餘氣)",
                  "{hidJinYeo}",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yin Su (癸)",
                  "orta (中氣)",
                  "{hidJinJung}",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yang Toprak (戊)",
                  "ana (本氣)",
                  "{hidJinBon}",
                  "Sıra Dışı Destek (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 庚 olduğunda Düzenli Varlık 乙, Otorite ise 丁 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 乙. 乙, 辰 içinde bulunur (kalan (餘氣))."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 丁. 丁, 辰 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [己卯](/guide/pillar-gi-myo), sonraki ise [辛巳](/guide/pillar-sin-sa) sütunudur."
          },
          {
            "p": "[Yang Metal (庚)](/guide/stem-gyeong) ve [辰 (Ejderha)](/guide/branch-jin) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-sa": {
    "eyebrow": "Gün sütunları",
    "title": "辛巳 gün sütunu",
    "summary": "Saju-Link'in 辛巳 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "辛巳: altmışlık döngünün 18. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 辛巳 olduğunda gün gövdesi 辛 (Metal, Yin), gün dalı ise 巳 (Yılan) olur. Altmışlık döngüde bu, 18. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 辛 olan kişiye “Yin Metal (辛)” der ve sonuç ekranının gösterdiği satır şudur: \"Yontulmuş bir mücevher. İnce bir zevki ve yüksek ölçüleri vardır; özensizliği geçiştiremez.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 巳 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 辛 açısından okunduğunda, 巳 dalının barındırdığı gövdeler şöyledir. Ana gövde (丙) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "辛巳 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 辛 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidSaYeo}",
                  "Kollayan (正印)"
                ],
                [
                  "Yang Metal (庚)",
                  "orta (中氣)",
                  "{hidSaJung}",
                  "Rakip (劫財)"
                ],
                [
                  "Yang Ateş (丙)",
                  "ana (本氣)",
                  "{hidSaBon}",
                  "Otorite (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 辛 olduğunda Düzenli Varlık 甲, Otorite ise 丙 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 甲. 甲, 巳 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 丙. 丙, 巳 içinde bulunur (ana (本氣))."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [庚辰](/guide/pillar-gyeong-jin), sonraki ise [壬午](/guide/pillar-im-o) sütunudur."
          },
          {
            "p": "[Yin Metal (辛)](/guide/stem-sin) ve [巳 (Yılan)](/guide/branch-sa) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-o": {
    "eyebrow": "Gün sütunları",
    "title": "壬午 gün sütunu",
    "summary": "Saju-Link'in 壬午 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "壬午: altmışlık döngünün 19. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 壬午 olduğunda gün gövdesi 壬 (Su, Yang), gün dalı ise 午 (At) olur. Altmışlık döngüde bu, 19. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 壬 olan kişiye “Yang Su (壬)” der ve sonuç ekranının gösterdiği satır şudur: \"Irmak ve deniz. Bakışı geniştir, işlerin nasıl aktığını görür.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 午 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 壬 açısından okunduğunda, 午 dalının barındırdığı gövdeler şöyledir. Ana gövde (丁) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "壬午 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 壬 için"
              ],
              "rows": [
                [
                  "Yang Ateş (丙)",
                  "kalan (餘氣)",
                  "{hidOYeo}",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yin Toprak (己)",
                  "orta (中氣)",
                  "{hidOJung}",
                  "Otorite (正官)"
                ],
                [
                  "Yin Ateş (丁)",
                  "ana (本氣)",
                  "{hidOBon}",
                  "Düzenli Varlık (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 壬 olduğunda Düzenli Varlık 丁, Otorite ise 己 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 丁. 丁, 午 içinde bulunur (ana (本氣))."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 己. 己, 午 içinde bulunur (orta (中氣))."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [辛巳](/guide/pillar-sin-sa), sonraki ise [癸未](/guide/pillar-gye-mi) sütunudur."
          },
          {
            "p": "[Yang Su (壬)](/guide/stem-im) ve [午 (At)](/guide/branch-o) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-mi": {
    "eyebrow": "Gün sütunları",
    "title": "癸未 gün sütunu",
    "summary": "Saju-Link'in 癸未 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "癸未: altmışlık döngünün 20. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 癸未 olduğunda gün gövdesi 癸 (Su, Yin), gün dalı ise 未 (Koyun) olur. Altmışlık döngüde bu, 20. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 癸 olan kişiye “Yin Su (癸)” der ve sonuç ekranının gösterdiği satır şudur: \"Çiy ve yağmur. Sessizce sızar, sözden önce havayı okur.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 未 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 癸 açısından okunduğunda, 未 dalının barındırdığı gövdeler şöyledir. Ana gövde (己) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "癸未 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 癸 için"
              ],
              "rows": [
                [
                  "Yin Ateş (丁)",
                  "kalan (餘氣)",
                  "{hidMiYeo}",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "orta (中氣)",
                  "{hidMiJung}",
                  "İfade (食神)"
                ],
                [
                  "Yin Toprak (己)",
                  "ana (本氣)",
                  "{hidMiBon}",
                  "Meydan Okuyan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 癸 olduğunda Düzenli Varlık 丙, Otorite ise 戊 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 丙. 丙, 未 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 戊. 戊, 未 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [壬午](/guide/pillar-im-o), sonraki ise [甲申](/guide/pillar-gap-sin) sütunudur."
          },
          {
            "p": "[Yin Su (癸)](/guide/stem-gye) ve [未 (Koyun)](/guide/branch-mi) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sin": {
    "eyebrow": "Gün sütunları",
    "title": "甲申 gün sütunu",
    "summary": "Saju-Link'in 甲申 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "甲申: altmışlık döngünün 21. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 甲申 olduğunda gün gövdesi 甲 (Ağaç, Yang), gün dalı ise 申 (Maymun) olur. Altmışlık döngüde bu, 21. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 甲 olan kişiye “Yang Ağaç (甲)” der ve sonuç ekranının gösterdiği satır şudur: \"Dümdüz büyüyen uzun bir ağaç. Yön bir kez belirlendi mi sapmaz, eğilmektense dayanmayı seçer.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 申 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 甲 açısından okunduğunda, 申 dalının barındırdığı gövdeler şöyledir. Ana gövde (庚) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "甲申 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 甲 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidSinYeo}",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yang Su (壬)",
                  "orta (中氣)",
                  "{hidSinJung}",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yang Metal (庚)",
                  "ana (本氣)",
                  "{hidSinBon}",
                  "Meydan Okuyan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 甲 olduğunda Düzenli Varlık 己, Otorite ise 辛 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 己. 己, 申 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 辛. 辛, 申 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [癸未](/guide/pillar-gye-mi), sonraki ise [乙酉](/guide/pillar-eul-yu) sütunudur."
          },
          {
            "p": "[Yang Ağaç (甲)](/guide/stem-gap) ve [申 (Maymun)](/guide/branch-sin) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-yu": {
    "eyebrow": "Gün sütunları",
    "title": "乙酉 gün sütunu",
    "summary": "Saju-Link'in 乙酉 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "乙酉: altmışlık döngünün 22. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 乙酉 olduğunda gün gövdesi 乙 (Ağaç, Yin), gün dalı ise 酉 (Horoz) olur. Altmışlık döngüde bu, 22. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 乙 olan kişiye “Yin Ağaç (乙)” der ve sonuç ekranının gösterdiği satır şudur: \"Sarmaşık — esnek bir ot. İlerlemek için koşullara göre eğilir ve kopmaz.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 酉 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 乙 açısından okunduğunda, 酉 dalının barındırdığı gövdeler şöyledir. Ana gövde (辛) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "乙酉 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 乙 için"
              ],
              "rows": [
                [
                  "Yang Metal (庚)",
                  "kalan (餘氣)",
                  "{hidYuYeo}",
                  "Otorite (正官)"
                ],
                [
                  "Yin Metal (辛)",
                  "ana (本氣)",
                  "{hidYuBon}",
                  "Meydan Okuyan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 乙 olduğunda Düzenli Varlık 戊, Otorite ise 庚 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 戊. 戊, 酉 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 庚. 庚, 酉 içinde bulunur (kalan (餘氣))."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [甲申](/guide/pillar-gap-sin), sonraki ise [丙戌](/guide/pillar-byeong-sul) sütunudur."
          },
          {
            "p": "[Yin Ağaç (乙)](/guide/stem-eul) ve [酉 (Horoz)](/guide/branch-yu) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sul": {
    "eyebrow": "Gün sütunları",
    "title": "丙戌 gün sütunu",
    "summary": "Saju-Link'in 丙戌 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "丙戌: altmışlık döngünün 23. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 丙戌 olduğunda gün gövdesi 丙 (Ateş, Yang), gün dalı ise 戌 (Köpek) olur. Altmışlık döngüde bu, 23. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 丙 olan kişiye “Yang Ateş (丙)” der ve sonuç ekranının gösterdiği satır şudur: \"Öğle güneşi. Duygular açıkça görünür, ortam aydınlanır, öne çıkmak doğal gelir.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 戌 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 丙 açısından okunduğunda, 戌 dalının barındırdığı gövdeler şöyledir. Ana gövde (戊) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "丙戌 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 丙 için"
              ],
              "rows": [
                [
                  "Yin Metal (辛)",
                  "kalan (餘氣)",
                  "{hidSulYeo}",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yin Ateş (丁)",
                  "orta (中氣)",
                  "{hidSulJung}",
                  "Rakip (劫財)"
                ],
                [
                  "Yang Toprak (戊)",
                  "ana (本氣)",
                  "{hidSulBon}",
                  "İfade (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 丙 olduğunda Düzenli Varlık 辛, Otorite ise 癸 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 辛. 辛, 戌 içinde bulunur (kalan (餘氣))."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 癸. 癸, 戌 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [乙酉](/guide/pillar-eul-yu), sonraki ise [丁亥](/guide/pillar-jeong-hae) sütunudur."
          },
          {
            "p": "[Yang Ateş (丙)](/guide/stem-byeong) ve [戌 (Köpek)](/guide/branch-sul) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-hae": {
    "eyebrow": "Gün sütunları",
    "title": "丁亥 gün sütunu",
    "summary": "Saju-Link'in 丁亥 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "丁亥: altmışlık döngünün 24. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 丁亥 olduğunda gün gövdesi 丁 (Ateş, Yin), gün dalı ise 亥 (Domuz) olur. Altmışlık döngüde bu, 24. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 丁 olan kişiye “Yin Ateş (丁)” der ve sonuç ekranının gösterdiği satır şudur: \"Mum ışığı. Sessizce ve uzun yanar, önce en yakınındakini ısıtır.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 亥 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 丁 açısından okunduğunda, 亥 dalının barındırdığı gövdeler şöyledir. Ana gövde (壬) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "丁亥 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 丁 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidHaeYeo}",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yang Ağaç (甲)",
                  "orta (中氣)",
                  "{hidHaeJung}",
                  "Kollayan (正印)"
                ],
                [
                  "Yang Su (壬)",
                  "ana (本氣)",
                  "{hidHaeBon}",
                  "Otorite (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 丁 olduğunda Düzenli Varlık 庚, Otorite ise 壬 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 庚. 庚, 亥 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 壬. 壬, 亥 içinde bulunur (ana (本氣))."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [丙戌](/guide/pillar-byeong-sul), sonraki ise [戊子](/guide/pillar-mu-ja) sütunudur."
          },
          {
            "p": "[Yin Ateş (丁)](/guide/stem-jeong) ve [亥 (Domuz)](/guide/branch-hae) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-ja": {
    "eyebrow": "Gün sütunları",
    "title": "戊子 gün sütunu",
    "summary": "Saju-Link'in 戊子 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "戊子: altmışlık döngünün 25. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 戊子 olduğunda gün gövdesi 戊 (Toprak, Yang), gün dalı ise 子 (Fare) olur. Altmışlık döngüde bu, 25. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 戊 olan kişiye “Yang Toprak (戊)” der ve sonuç ekranının gösterdiği satır şudur: \"Açık arazi ve dağlar. Sarsılması zordur, yaslanması kolaydır; ama bir kez verdiği kararı ağır değiştirir.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 子 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 戊 açısından okunduğunda, 子 dalının barındırdığı gövdeler şöyledir. Ana gövde (癸) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "戊子 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 戊 için"
              ],
              "rows": [
                [
                  "Yang Su (壬)",
                  "kalan (餘氣)",
                  "{hidJaYeo}",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yin Su (癸)",
                  "ana (本氣)",
                  "{hidJaBon}",
                  "Düzenli Varlık (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 戊 olduğunda Düzenli Varlık 癸, Otorite ise 乙 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 癸. 癸, 子 içinde bulunur (ana (本氣))."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 乙. 乙, 子 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [丁亥](/guide/pillar-jeong-hae), sonraki ise [己丑](/guide/pillar-gi-chuk) sütunudur."
          },
          {
            "p": "[Yang Toprak (戊)](/guide/stem-mu) ve [子 (Fare)](/guide/branch-ja) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-chuk": {
    "eyebrow": "Gün sütunları",
    "title": "己丑 gün sütunu",
    "summary": "Saju-Link'in 己丑 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "己丑: altmışlık döngünün 26. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 己丑 olduğunda gün gövdesi 己 (Toprak, Yin), gün dalı ise 丑 (Öküz) olur. Altmışlık döngüde bu, 26. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 己 olan kişiye “Yin Toprak (己)” der ve sonuç ekranının gösterdiği satır şudur: \"Tarla toprağı. Geleni alır ve büyütür; sergilemekten çok gözetir.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 丑 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 己 açısından okunduğunda, 丑 dalının barındırdığı gövdeler şöyledir. Ana gövde (己) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "己丑 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 己 için"
              ],
              "rows": [
                [
                  "Yin Su (癸)",
                  "kalan (餘氣)",
                  "{hidChukYeo}",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yin Metal (辛)",
                  "orta (中氣)",
                  "{hidChukJung}",
                  "İfade (食神)"
                ],
                [
                  "Yin Toprak (己)",
                  "ana (本氣)",
                  "{hidChukBon}",
                  "Yoldaş (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 己 olduğunda Düzenli Varlık 壬, Otorite ise 甲 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 壬. 壬, 丑 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 甲. 甲, 丑 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [戊子](/guide/pillar-mu-ja), sonraki ise [庚寅](/guide/pillar-gyeong-in) sütunudur."
          },
          {
            "p": "[Yin Toprak (己)](/guide/stem-gi) ve [丑 (Öküz)](/guide/branch-chuk) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-in": {
    "eyebrow": "Gün sütunları",
    "title": "庚寅 gün sütunu",
    "summary": "Saju-Link'in 庚寅 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "庚寅: altmışlık döngünün 27. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 庚寅 olduğunda gün gövdesi 庚 (Metal, Yang), gün dalı ise 寅 (Kaplan) olur. Altmışlık döngüde bu, 27. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 庚 olan kişiye “Yang Metal (庚)” der ve sonuç ekranının gösterdiği satır şudur: \"İşlenmemiş demir. Kararlı ve nettir, askıda kalan işlere sabrı azdır.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 寅 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 庚 açısından okunduğunda, 寅 dalının barındırdığı gövdeler şöyledir. Ana gövde (甲) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "庚寅 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 庚 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidInYeo}",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yang Ateş (丙)",
                  "orta (中氣)",
                  "{hidInJung}",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yang Ağaç (甲)",
                  "ana (本氣)",
                  "{hidInBon}",
                  "Beklenmedik Varlık (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 庚 olduğunda Düzenli Varlık 乙, Otorite ise 丁 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 乙. 乙, 寅 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 丁. 丁, 寅 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [己丑](/guide/pillar-gi-chuk), sonraki ise [辛卯](/guide/pillar-sin-myo) sütunudur."
          },
          {
            "p": "[Yang Metal (庚)](/guide/stem-gyeong) ve [寅 (Kaplan)](/guide/branch-in) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-myo": {
    "eyebrow": "Gün sütunları",
    "title": "辛卯 gün sütunu",
    "summary": "Saju-Link'in 辛卯 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "辛卯: altmışlık döngünün 28. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 辛卯 olduğunda gün gövdesi 辛 (Metal, Yin), gün dalı ise 卯 (Tavşan) olur. Altmışlık döngüde bu, 28. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 辛 olan kişiye “Yin Metal (辛)” der ve sonuç ekranının gösterdiği satır şudur: \"Yontulmuş bir mücevher. İnce bir zevki ve yüksek ölçüleri vardır; özensizliği geçiştiremez.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 卯 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 辛 açısından okunduğunda, 卯 dalının barındırdığı gövdeler şöyledir. Ana gövde (乙) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "辛卯 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 辛 için"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "kalan (餘氣)",
                  "{hidMyoYeo}",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "ana (本氣)",
                  "{hidMyoBon}",
                  "Beklenmedik Varlık (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 辛 olduğunda Düzenli Varlık 甲, Otorite ise 丙 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 甲. 甲, 卯 içinde bulunur (kalan (餘氣))."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 丙. 丙, 卯 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [庚寅](/guide/pillar-gyeong-in), sonraki ise [壬辰](/guide/pillar-im-jin) sütunudur."
          },
          {
            "p": "[Yin Metal (辛)](/guide/stem-sin) ve [卯 (Tavşan)](/guide/branch-myo) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-jin": {
    "eyebrow": "Gün sütunları",
    "title": "壬辰 gün sütunu",
    "summary": "Saju-Link'in 壬辰 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "壬辰: altmışlık döngünün 29. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 壬辰 olduğunda gün gövdesi 壬 (Su, Yang), gün dalı ise 辰 (Ejderha) olur. Altmışlık döngüde bu, 29. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 壬 olan kişiye “Yang Su (壬)” der ve sonuç ekranının gösterdiği satır şudur: \"Irmak ve deniz. Bakışı geniştir, işlerin nasıl aktığını görür.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 辰 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 壬 açısından okunduğunda, 辰 dalının barındırdığı gövdeler şöyledir. Ana gövde (戊) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "壬辰 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 壬 için"
              ],
              "rows": [
                [
                  "Yin Ağaç (乙)",
                  "kalan (餘氣)",
                  "{hidJinYeo}",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yin Su (癸)",
                  "orta (中氣)",
                  "{hidJinJung}",
                  "Rakip (劫財)"
                ],
                [
                  "Yang Toprak (戊)",
                  "ana (本氣)",
                  "{hidJinBon}",
                  "Meydan Okuyan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 壬 olduğunda Düzenli Varlık 丁, Otorite ise 己 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 丁. 丁, 辰 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 己. 己, 辰 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [辛卯](/guide/pillar-sin-myo), sonraki ise [癸巳](/guide/pillar-gye-sa) sütunudur."
          },
          {
            "p": "[Yang Su (壬)](/guide/stem-im) ve [辰 (Ejderha)](/guide/branch-jin) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-sa": {
    "eyebrow": "Gün sütunları",
    "title": "癸巳 gün sütunu",
    "summary": "Saju-Link'in 癸巳 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "癸巳: altmışlık döngünün 30. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 癸巳 olduğunda gün gövdesi 癸 (Su, Yin), gün dalı ise 巳 (Yılan) olur. Altmışlık döngüde bu, 30. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 癸 olan kişiye “Yin Su (癸)” der ve sonuç ekranının gösterdiği satır şudur: \"Çiy ve yağmur. Sessizce sızar, sözden önce havayı okur.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 巳 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 癸 açısından okunduğunda, 巳 dalının barındırdığı gövdeler şöyledir. Ana gövde (丙) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "癸巳 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 癸 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidSaYeo}",
                  "Otorite (正官)"
                ],
                [
                  "Yang Metal (庚)",
                  "orta (中氣)",
                  "{hidSaJung}",
                  "Kollayan (正印)"
                ],
                [
                  "Yang Ateş (丙)",
                  "ana (本氣)",
                  "{hidSaBon}",
                  "Düzenli Varlık (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 癸 olduğunda Düzenli Varlık 丙, Otorite ise 戊 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 丙. 丙, 巳 içinde bulunur (ana (本氣))."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 戊. 戊, 巳 içinde bulunur (kalan (餘氣))."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [壬辰](/guide/pillar-im-jin), sonraki ise [甲午](/guide/pillar-gap-o) sütunudur."
          },
          {
            "p": "[Yin Su (癸)](/guide/stem-gye) ve [巳 (Yılan)](/guide/branch-sa) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-o": {
    "eyebrow": "Gün sütunları",
    "title": "甲午 gün sütunu",
    "summary": "Saju-Link'in 甲午 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "甲午: altmışlık döngünün 31. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 甲午 olduğunda gün gövdesi 甲 (Ağaç, Yang), gün dalı ise 午 (At) olur. Altmışlık döngüde bu, 31. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 甲 olan kişiye “Yang Ağaç (甲)” der ve sonuç ekranının gösterdiği satır şudur: \"Dümdüz büyüyen uzun bir ağaç. Yön bir kez belirlendi mi sapmaz, eğilmektense dayanmayı seçer.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 午 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 甲 açısından okunduğunda, 午 dalının barındırdığı gövdeler şöyledir. Ana gövde (丁) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "甲午 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 甲 için"
              ],
              "rows": [
                [
                  "Yang Ateş (丙)",
                  "kalan (餘氣)",
                  "{hidOYeo}",
                  "İfade (食神)"
                ],
                [
                  "Yin Toprak (己)",
                  "orta (中氣)",
                  "{hidOJung}",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yin Ateş (丁)",
                  "ana (本氣)",
                  "{hidOBon}",
                  "Sarsıcı (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 甲 olduğunda Düzenli Varlık 己, Otorite ise 辛 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 己. 己, 午 içinde bulunur (orta (中氣))."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 辛. 辛, 午 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [癸巳](/guide/pillar-gye-sa), sonraki ise [乙未](/guide/pillar-eul-mi) sütunudur."
          },
          {
            "p": "[Yang Ağaç (甲)](/guide/stem-gap) ve [午 (At)](/guide/branch-o) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-mi": {
    "eyebrow": "Gün sütunları",
    "title": "乙未 gün sütunu",
    "summary": "Saju-Link'in 乙未 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "乙未: altmışlık döngünün 32. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 乙未 olduğunda gün gövdesi 乙 (Ağaç, Yin), gün dalı ise 未 (Koyun) olur. Altmışlık döngüde bu, 32. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 乙 olan kişiye “Yin Ağaç (乙)” der ve sonuç ekranının gösterdiği satır şudur: \"Sarmaşık — esnek bir ot. İlerlemek için koşullara göre eğilir ve kopmaz.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 未 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 乙 açısından okunduğunda, 未 dalının barındırdığı gövdeler şöyledir. Ana gövde (己) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "乙未 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 乙 için"
              ],
              "rows": [
                [
                  "Yin Ateş (丁)",
                  "kalan (餘氣)",
                  "{hidMiYeo}",
                  "İfade (食神)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "orta (中氣)",
                  "{hidMiJung}",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yin Toprak (己)",
                  "ana (本氣)",
                  "{hidMiBon}",
                  "Beklenmedik Varlık (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 乙 olduğunda Düzenli Varlık 戊, Otorite ise 庚 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 戊. 戊, 未 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 庚. 庚, 未 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [甲午](/guide/pillar-gap-o), sonraki ise [丙申](/guide/pillar-byeong-sin) sütunudur."
          },
          {
            "p": "[Yin Ağaç (乙)](/guide/stem-eul) ve [未 (Koyun)](/guide/branch-mi) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sin": {
    "eyebrow": "Gün sütunları",
    "title": "丙申 gün sütunu",
    "summary": "Saju-Link'in 丙申 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "丙申: altmışlık döngünün 33. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 丙申 olduğunda gün gövdesi 丙 (Ateş, Yang), gün dalı ise 申 (Maymun) olur. Altmışlık döngüde bu, 33. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 丙 olan kişiye “Yang Ateş (丙)” der ve sonuç ekranının gösterdiği satır şudur: \"Öğle güneşi. Duygular açıkça görünür, ortam aydınlanır, öne çıkmak doğal gelir.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 申 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 丙 açısından okunduğunda, 申 dalının barındırdığı gövdeler şöyledir. Ana gövde (庚) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "丙申 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 丙 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidSinYeo}",
                  "İfade (食神)"
                ],
                [
                  "Yang Su (壬)",
                  "orta (中氣)",
                  "{hidSinJung}",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yang Metal (庚)",
                  "ana (本氣)",
                  "{hidSinBon}",
                  "Beklenmedik Varlık (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 丙 olduğunda Düzenli Varlık 辛, Otorite ise 癸 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 辛. 辛, 申 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 癸. 癸, 申 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [乙未](/guide/pillar-eul-mi), sonraki ise [丁酉](/guide/pillar-jeong-yu) sütunudur."
          },
          {
            "p": "[Yang Ateş (丙)](/guide/stem-byeong) ve [申 (Maymun)](/guide/branch-sin) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-yu": {
    "eyebrow": "Gün sütunları",
    "title": "丁酉 gün sütunu",
    "summary": "Saju-Link'in 丁酉 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "丁酉: altmışlık döngünün 34. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 丁酉 olduğunda gün gövdesi 丁 (Ateş, Yin), gün dalı ise 酉 (Horoz) olur. Altmışlık döngüde bu, 34. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 丁 olan kişiye “Yin Ateş (丁)” der ve sonuç ekranının gösterdiği satır şudur: \"Mum ışığı. Sessizce ve uzun yanar, önce en yakınındakini ısıtır.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 酉 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 丁 açısından okunduğunda, 酉 dalının barındırdığı gövdeler şöyledir. Ana gövde (辛) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "丁酉 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 丁 için"
              ],
              "rows": [
                [
                  "Yang Metal (庚)",
                  "kalan (餘氣)",
                  "{hidYuYeo}",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yin Metal (辛)",
                  "ana (本氣)",
                  "{hidYuBon}",
                  "Beklenmedik Varlık (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 丁 olduğunda Düzenli Varlık 庚, Otorite ise 壬 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 庚. 庚, 酉 içinde bulunur (kalan (餘氣))."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 壬. 壬, 酉 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [丙申](/guide/pillar-byeong-sin), sonraki ise [戊戌](/guide/pillar-mu-sul) sütunudur."
          },
          {
            "p": "[Yin Ateş (丁)](/guide/stem-jeong) ve [酉 (Horoz)](/guide/branch-yu) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sul": {
    "eyebrow": "Gün sütunları",
    "title": "戊戌 gün sütunu",
    "summary": "Saju-Link'in 戊戌 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "戊戌: altmışlık döngünün 35. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 戊戌 olduğunda gün gövdesi 戊 (Toprak, Yang), gün dalı ise 戌 (Köpek) olur. Altmışlık döngüde bu, 35. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 戊 olan kişiye “Yang Toprak (戊)” der ve sonuç ekranının gösterdiği satır şudur: \"Açık arazi ve dağlar. Sarsılması zordur, yaslanması kolaydır; ama bir kez verdiği kararı ağır değiştirir.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 戌 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 戊 açısından okunduğunda, 戌 dalının barındırdığı gövdeler şöyledir. Ana gövde (戊) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "戊戌 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 戊 için"
              ],
              "rows": [
                [
                  "Yin Metal (辛)",
                  "kalan (餘氣)",
                  "{hidSulYeo}",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yin Ateş (丁)",
                  "orta (中氣)",
                  "{hidSulJung}",
                  "Kollayan (正印)"
                ],
                [
                  "Yang Toprak (戊)",
                  "ana (本氣)",
                  "{hidSulBon}",
                  "Yoldaş (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 戊 olduğunda Düzenli Varlık 癸, Otorite ise 乙 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 癸. 癸, 戌 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 乙. 乙, 戌 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [丁酉](/guide/pillar-jeong-yu), sonraki ise [己亥](/guide/pillar-gi-hae) sütunudur."
          },
          {
            "p": "[Yang Toprak (戊)](/guide/stem-mu) ve [戌 (Köpek)](/guide/branch-sul) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-hae": {
    "eyebrow": "Gün sütunları",
    "title": "己亥 gün sütunu",
    "summary": "Saju-Link'in 己亥 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "己亥: altmışlık döngünün 36. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 己亥 olduğunda gün gövdesi 己 (Toprak, Yin), gün dalı ise 亥 (Domuz) olur. Altmışlık döngüde bu, 36. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 己 olan kişiye “Yin Toprak (己)” der ve sonuç ekranının gösterdiği satır şudur: \"Tarla toprağı. Geleni alır ve büyütür; sergilemekten çok gözetir.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 亥 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 己 açısından okunduğunda, 亥 dalının barındırdığı gövdeler şöyledir. Ana gövde (壬) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "己亥 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 己 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidHaeYeo}",
                  "Rakip (劫財)"
                ],
                [
                  "Yang Ağaç (甲)",
                  "orta (中氣)",
                  "{hidHaeJung}",
                  "Otorite (正官)"
                ],
                [
                  "Yang Su (壬)",
                  "ana (本氣)",
                  "{hidHaeBon}",
                  "Düzenli Varlık (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 己 olduğunda Düzenli Varlık 壬, Otorite ise 甲 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 壬. 壬, 亥 içinde bulunur (ana (本氣))."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 甲. 甲, 亥 içinde bulunur (orta (中氣))."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [戊戌](/guide/pillar-mu-sul), sonraki ise [庚子](/guide/pillar-gyeong-ja) sütunudur."
          },
          {
            "p": "[Yin Toprak (己)](/guide/stem-gi) ve [亥 (Domuz)](/guide/branch-hae) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-ja": {
    "eyebrow": "Gün sütunları",
    "title": "庚子 gün sütunu",
    "summary": "Saju-Link'in 庚子 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "庚子: altmışlık döngünün 37. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 庚子 olduğunda gün gövdesi 庚 (Metal, Yang), gün dalı ise 子 (Fare) olur. Altmışlık döngüde bu, 37. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 庚 olan kişiye “Yang Metal (庚)” der ve sonuç ekranının gösterdiği satır şudur: \"İşlenmemiş demir. Kararlı ve nettir, askıda kalan işlere sabrı azdır.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 子 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 庚 açısından okunduğunda, 子 dalının barındırdığı gövdeler şöyledir. Ana gövde (癸) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "庚子 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 庚 için"
              ],
              "rows": [
                [
                  "Yang Su (壬)",
                  "kalan (餘氣)",
                  "{hidJaYeo}",
                  "İfade (食神)"
                ],
                [
                  "Yin Su (癸)",
                  "ana (本氣)",
                  "{hidJaBon}",
                  "Sarsıcı (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 庚 olduğunda Düzenli Varlık 乙, Otorite ise 丁 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 乙. 乙, 子 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 丁. 丁, 子 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [己亥](/guide/pillar-gi-hae), sonraki ise [辛丑](/guide/pillar-sin-chuk) sütunudur."
          },
          {
            "p": "[Yang Metal (庚)](/guide/stem-gyeong) ve [子 (Fare)](/guide/branch-ja) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-chuk": {
    "eyebrow": "Gün sütunları",
    "title": "辛丑 gün sütunu",
    "summary": "Saju-Link'in 辛丑 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "辛丑: altmışlık döngünün 38. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 辛丑 olduğunda gün gövdesi 辛 (Metal, Yin), gün dalı ise 丑 (Öküz) olur. Altmışlık döngüde bu, 38. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 辛 olan kişiye “Yin Metal (辛)” der ve sonuç ekranının gösterdiği satır şudur: \"Yontulmuş bir mücevher. İnce bir zevki ve yüksek ölçüleri vardır; özensizliği geçiştiremez.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 丑 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 辛 açısından okunduğunda, 丑 dalının barındırdığı gövdeler şöyledir. Ana gövde (己) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "辛丑 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 辛 için"
              ],
              "rows": [
                [
                  "Yin Su (癸)",
                  "kalan (餘氣)",
                  "{hidChukYeo}",
                  "İfade (食神)"
                ],
                [
                  "Yin Metal (辛)",
                  "orta (中氣)",
                  "{hidChukJung}",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yin Toprak (己)",
                  "ana (本氣)",
                  "{hidChukBon}",
                  "Sıra Dışı Destek (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 辛 olduğunda Düzenli Varlık 甲, Otorite ise 丙 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 甲. 甲, 丑 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 丙. 丙, 丑 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [庚子](/guide/pillar-gyeong-ja), sonraki ise [壬寅](/guide/pillar-im-in) sütunudur."
          },
          {
            "p": "[Yin Metal (辛)](/guide/stem-sin) ve [丑 (Öküz)](/guide/branch-chuk) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-in": {
    "eyebrow": "Gün sütunları",
    "title": "壬寅 gün sütunu",
    "summary": "Saju-Link'in 壬寅 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "壬寅: altmışlık döngünün 39. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 壬寅 olduğunda gün gövdesi 壬 (Su, Yang), gün dalı ise 寅 (Kaplan) olur. Altmışlık döngüde bu, 39. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 壬 olan kişiye “Yang Su (壬)” der ve sonuç ekranının gösterdiği satır şudur: \"Irmak ve deniz. Bakışı geniştir, işlerin nasıl aktığını görür.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 寅 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 壬 açısından okunduğunda, 寅 dalının barındırdığı gövdeler şöyledir. Ana gövde (甲) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "壬寅 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 壬 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidInYeo}",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yang Ateş (丙)",
                  "orta (中氣)",
                  "{hidInJung}",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yang Ağaç (甲)",
                  "ana (本氣)",
                  "{hidInBon}",
                  "İfade (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 壬 olduğunda Düzenli Varlık 丁, Otorite ise 己 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 丁. 丁, 寅 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 己. 己, 寅 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [辛丑](/guide/pillar-sin-chuk), sonraki ise [癸卯](/guide/pillar-gye-myo) sütunudur."
          },
          {
            "p": "[Yang Su (壬)](/guide/stem-im) ve [寅 (Kaplan)](/guide/branch-in) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-myo": {
    "eyebrow": "Gün sütunları",
    "title": "癸卯 gün sütunu",
    "summary": "Saju-Link'in 癸卯 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "癸卯: altmışlık döngünün 40. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 癸卯 olduğunda gün gövdesi 癸 (Su, Yin), gün dalı ise 卯 (Tavşan) olur. Altmışlık döngüde bu, 40. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 癸 olan kişiye “Yin Su (癸)” der ve sonuç ekranının gösterdiği satır şudur: \"Çiy ve yağmur. Sessizce sızar, sözden önce havayı okur.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 卯 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 癸 açısından okunduğunda, 卯 dalının barındırdığı gövdeler şöyledir. Ana gövde (乙) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "癸卯 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 癸 için"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "kalan (餘氣)",
                  "{hidMyoYeo}",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "ana (本氣)",
                  "{hidMyoBon}",
                  "İfade (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 癸 olduğunda Düzenli Varlık 丙, Otorite ise 戊 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 丙. 丙, 卯 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 戊. 戊, 卯 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [壬寅](/guide/pillar-im-in), sonraki ise [甲辰](/guide/pillar-gap-jin) sütunudur."
          },
          {
            "p": "[Yin Su (癸)](/guide/stem-gye) ve [卯 (Tavşan)](/guide/branch-myo) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-jin": {
    "eyebrow": "Gün sütunları",
    "title": "甲辰 gün sütunu",
    "summary": "Saju-Link'in 甲辰 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "甲辰: altmışlık döngünün 41. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 甲辰 olduğunda gün gövdesi 甲 (Ağaç, Yang), gün dalı ise 辰 (Ejderha) olur. Altmışlık döngüde bu, 41. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 甲 olan kişiye “Yang Ağaç (甲)” der ve sonuç ekranının gösterdiği satır şudur: \"Dümdüz büyüyen uzun bir ağaç. Yön bir kez belirlendi mi sapmaz, eğilmektense dayanmayı seçer.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 辰 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 甲 açısından okunduğunda, 辰 dalının barındırdığı gövdeler şöyledir. Ana gövde (戊) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "甲辰 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 甲 için"
              ],
              "rows": [
                [
                  "Yin Ağaç (乙)",
                  "kalan (餘氣)",
                  "{hidJinYeo}",
                  "Rakip (劫財)"
                ],
                [
                  "Yin Su (癸)",
                  "orta (中氣)",
                  "{hidJinJung}",
                  "Kollayan (正印)"
                ],
                [
                  "Yang Toprak (戊)",
                  "ana (本氣)",
                  "{hidJinBon}",
                  "Beklenmedik Varlık (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 甲 olduğunda Düzenli Varlık 己, Otorite ise 辛 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 己. 己, 辰 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 辛. 辛, 辰 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [癸卯](/guide/pillar-gye-myo), sonraki ise [乙巳](/guide/pillar-eul-sa) sütunudur."
          },
          {
            "p": "[Yang Ağaç (甲)](/guide/stem-gap) ve [辰 (Ejderha)](/guide/branch-jin) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-sa": {
    "eyebrow": "Gün sütunları",
    "title": "乙巳 gün sütunu",
    "summary": "Saju-Link'in 乙巳 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "乙巳: altmışlık döngünün 42. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 乙巳 olduğunda gün gövdesi 乙 (Ağaç, Yin), gün dalı ise 巳 (Yılan) olur. Altmışlık döngüde bu, 42. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 乙 olan kişiye “Yin Ağaç (乙)” der ve sonuç ekranının gösterdiği satır şudur: \"Sarmaşık — esnek bir ot. İlerlemek için koşullara göre eğilir ve kopmaz.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 巳 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 乙 açısından okunduğunda, 巳 dalının barındırdığı gövdeler şöyledir. Ana gövde (丙) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "乙巳 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 乙 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidSaYeo}",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yang Metal (庚)",
                  "orta (中氣)",
                  "{hidSaJung}",
                  "Otorite (正官)"
                ],
                [
                  "Yang Ateş (丙)",
                  "ana (本氣)",
                  "{hidSaBon}",
                  "Sarsıcı (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 乙 olduğunda Düzenli Varlık 戊, Otorite ise 庚 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 戊. 戊, 巳 içinde bulunur (kalan (餘氣))."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 庚. 庚, 巳 içinde bulunur (orta (中氣))."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [甲辰](/guide/pillar-gap-jin), sonraki ise [丙午](/guide/pillar-byeong-o) sütunudur."
          },
          {
            "p": "[Yin Ağaç (乙)](/guide/stem-eul) ve [巳 (Yılan)](/guide/branch-sa) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-o": {
    "eyebrow": "Gün sütunları",
    "title": "丙午 gün sütunu",
    "summary": "Saju-Link'in 丙午 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "丙午: altmışlık döngünün 43. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 丙午 olduğunda gün gövdesi 丙 (Ateş, Yang), gün dalı ise 午 (At) olur. Altmışlık döngüde bu, 43. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 丙 olan kişiye “Yang Ateş (丙)” der ve sonuç ekranının gösterdiği satır şudur: \"Öğle güneşi. Duygular açıkça görünür, ortam aydınlanır, öne çıkmak doğal gelir.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 午 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 丙 açısından okunduğunda, 午 dalının barındırdığı gövdeler şöyledir. Ana gövde (丁) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "丙午 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 丙 için"
              ],
              "rows": [
                [
                  "Yang Ateş (丙)",
                  "kalan (餘氣)",
                  "{hidOYeo}",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yin Toprak (己)",
                  "orta (中氣)",
                  "{hidOJung}",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yin Ateş (丁)",
                  "ana (本氣)",
                  "{hidOBon}",
                  "Rakip (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 丙 olduğunda Düzenli Varlık 辛, Otorite ise 癸 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 辛. 辛, 午 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 癸. 癸, 午 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [乙巳](/guide/pillar-eul-sa), sonraki ise [丁未](/guide/pillar-jeong-mi) sütunudur."
          },
          {
            "p": "[Yang Ateş (丙)](/guide/stem-byeong) ve [午 (At)](/guide/branch-o) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-mi": {
    "eyebrow": "Gün sütunları",
    "title": "丁未 gün sütunu",
    "summary": "Saju-Link'in 丁未 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "丁未: altmışlık döngünün 44. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 丁未 olduğunda gün gövdesi 丁 (Ateş, Yin), gün dalı ise 未 (Koyun) olur. Altmışlık döngüde bu, 44. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 丁 olan kişiye “Yin Ateş (丁)” der ve sonuç ekranının gösterdiği satır şudur: \"Mum ışığı. Sessizce ve uzun yanar, önce en yakınındakini ısıtır.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 未 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 丁 açısından okunduğunda, 未 dalının barındırdığı gövdeler şöyledir. Ana gövde (己) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "丁未 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 丁 için"
              ],
              "rows": [
                [
                  "Yin Ateş (丁)",
                  "kalan (餘氣)",
                  "{hidMiYeo}",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "orta (中氣)",
                  "{hidMiJung}",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yin Toprak (己)",
                  "ana (本氣)",
                  "{hidMiBon}",
                  "İfade (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 丁 olduğunda Düzenli Varlık 庚, Otorite ise 壬 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 庚. 庚, 未 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 壬. 壬, 未 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [丙午](/guide/pillar-byeong-o), sonraki ise [戊申](/guide/pillar-mu-sin) sütunudur."
          },
          {
            "p": "[Yin Ateş (丁)](/guide/stem-jeong) ve [未 (Koyun)](/guide/branch-mi) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sin": {
    "eyebrow": "Gün sütunları",
    "title": "戊申 gün sütunu",
    "summary": "Saju-Link'in 戊申 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "戊申: altmışlık döngünün 45. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 戊申 olduğunda gün gövdesi 戊 (Toprak, Yang), gün dalı ise 申 (Maymun) olur. Altmışlık döngüde bu, 45. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 戊 olan kişiye “Yang Toprak (戊)” der ve sonuç ekranının gösterdiği satır şudur: \"Açık arazi ve dağlar. Sarsılması zordur, yaslanması kolaydır; ama bir kez verdiği kararı ağır değiştirir.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 申 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 戊 açısından okunduğunda, 申 dalının barındırdığı gövdeler şöyledir. Ana gövde (庚) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "戊申 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 戊 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidSinYeo}",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yang Su (壬)",
                  "orta (中氣)",
                  "{hidSinJung}",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yang Metal (庚)",
                  "ana (本氣)",
                  "{hidSinBon}",
                  "İfade (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 戊 olduğunda Düzenli Varlık 癸, Otorite ise 乙 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 癸. 癸, 申 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 乙. 乙, 申 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [丁未](/guide/pillar-jeong-mi), sonraki ise [己酉](/guide/pillar-gi-yu) sütunudur."
          },
          {
            "p": "[Yang Toprak (戊)](/guide/stem-mu) ve [申 (Maymun)](/guide/branch-sin) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-yu": {
    "eyebrow": "Gün sütunları",
    "title": "己酉 gün sütunu",
    "summary": "Saju-Link'in 己酉 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "己酉: altmışlık döngünün 46. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 己酉 olduğunda gün gövdesi 己 (Toprak, Yin), gün dalı ise 酉 (Horoz) olur. Altmışlık döngüde bu, 46. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 己 olan kişiye “Yin Toprak (己)” der ve sonuç ekranının gösterdiği satır şudur: \"Tarla toprağı. Geleni alır ve büyütür; sergilemekten çok gözetir.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 酉 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 己 açısından okunduğunda, 酉 dalının barındırdığı gövdeler şöyledir. Ana gövde (辛) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "己酉 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 己 için"
              ],
              "rows": [
                [
                  "Yang Metal (庚)",
                  "kalan (餘氣)",
                  "{hidYuYeo}",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yin Metal (辛)",
                  "ana (本氣)",
                  "{hidYuBon}",
                  "İfade (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 己 olduğunda Düzenli Varlık 壬, Otorite ise 甲 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 壬. 壬, 酉 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 甲. 甲, 酉 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [戊申](/guide/pillar-mu-sin), sonraki ise [庚戌](/guide/pillar-gyeong-sul) sütunudur."
          },
          {
            "p": "[Yin Toprak (己)](/guide/stem-gi) ve [酉 (Horoz)](/guide/branch-yu) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sul": {
    "eyebrow": "Gün sütunları",
    "title": "庚戌 gün sütunu",
    "summary": "Saju-Link'in 庚戌 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "庚戌: altmışlık döngünün 47. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 庚戌 olduğunda gün gövdesi 庚 (Metal, Yang), gün dalı ise 戌 (Köpek) olur. Altmışlık döngüde bu, 47. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 庚 olan kişiye “Yang Metal (庚)” der ve sonuç ekranının gösterdiği satır şudur: \"İşlenmemiş demir. Kararlı ve nettir, askıda kalan işlere sabrı azdır.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 戌 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 庚 açısından okunduğunda, 戌 dalının barındırdığı gövdeler şöyledir. Ana gövde (戊) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "庚戌 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 庚 için"
              ],
              "rows": [
                [
                  "Yin Metal (辛)",
                  "kalan (餘氣)",
                  "{hidSulYeo}",
                  "Rakip (劫財)"
                ],
                [
                  "Yin Ateş (丁)",
                  "orta (中氣)",
                  "{hidSulJung}",
                  "Otorite (正官)"
                ],
                [
                  "Yang Toprak (戊)",
                  "ana (本氣)",
                  "{hidSulBon}",
                  "Sıra Dışı Destek (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 庚 olduğunda Düzenli Varlık 乙, Otorite ise 丁 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 乙. 乙, 戌 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 丁. 丁, 戌 içinde bulunur (orta (中氣))."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [己酉](/guide/pillar-gi-yu), sonraki ise [辛亥](/guide/pillar-sin-hae) sütunudur."
          },
          {
            "p": "[Yang Metal (庚)](/guide/stem-gyeong) ve [戌 (Köpek)](/guide/branch-sul) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-hae": {
    "eyebrow": "Gün sütunları",
    "title": "辛亥 gün sütunu",
    "summary": "Saju-Link'in 辛亥 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "辛亥: altmışlık döngünün 48. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 辛亥 olduğunda gün gövdesi 辛 (Metal, Yin), gün dalı ise 亥 (Domuz) olur. Altmışlık döngüde bu, 48. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 辛 olan kişiye “Yin Metal (辛)” der ve sonuç ekranının gösterdiği satır şudur: \"Yontulmuş bir mücevher. İnce bir zevki ve yüksek ölçüleri vardır; özensizliği geçiştiremez.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 亥 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 辛 açısından okunduğunda, 亥 dalının barındırdığı gövdeler şöyledir. Ana gövde (壬) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "辛亥 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 辛 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidHaeYeo}",
                  "Kollayan (正印)"
                ],
                [
                  "Yang Ağaç (甲)",
                  "orta (中氣)",
                  "{hidHaeJung}",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yang Su (壬)",
                  "ana (本氣)",
                  "{hidHaeBon}",
                  "Sarsıcı (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 辛 olduğunda Düzenli Varlık 甲, Otorite ise 丙 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 甲. 甲, 亥 içinde bulunur (orta (中氣))."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 丙. 丙, 亥 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [庚戌](/guide/pillar-gyeong-sul), sonraki ise [壬子](/guide/pillar-im-ja) sütunudur."
          },
          {
            "p": "[Yin Metal (辛)](/guide/stem-sin) ve [亥 (Domuz)](/guide/branch-hae) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-ja": {
    "eyebrow": "Gün sütunları",
    "title": "壬子 gün sütunu",
    "summary": "Saju-Link'in 壬子 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "壬子: altmışlık döngünün 49. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 壬子 olduğunda gün gövdesi 壬 (Su, Yang), gün dalı ise 子 (Fare) olur. Altmışlık döngüde bu, 49. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 壬 olan kişiye “Yang Su (壬)” der ve sonuç ekranının gösterdiği satır şudur: \"Irmak ve deniz. Bakışı geniştir, işlerin nasıl aktığını görür.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 子 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 壬 açısından okunduğunda, 子 dalının barındırdığı gövdeler şöyledir. Ana gövde (癸) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "壬子 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 壬 için"
              ],
              "rows": [
                [
                  "Yang Su (壬)",
                  "kalan (餘氣)",
                  "{hidJaYeo}",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yin Su (癸)",
                  "ana (本氣)",
                  "{hidJaBon}",
                  "Rakip (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 壬 olduğunda Düzenli Varlık 丁, Otorite ise 己 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 丁. 丁, 子 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 己. 己, 子 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [辛亥](/guide/pillar-sin-hae), sonraki ise [癸丑](/guide/pillar-gye-chuk) sütunudur."
          },
          {
            "p": "[Yang Su (壬)](/guide/stem-im) ve [子 (Fare)](/guide/branch-ja) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-chuk": {
    "eyebrow": "Gün sütunları",
    "title": "癸丑 gün sütunu",
    "summary": "Saju-Link'in 癸丑 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "癸丑: altmışlık döngünün 50. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 癸丑 olduğunda gün gövdesi 癸 (Su, Yin), gün dalı ise 丑 (Öküz) olur. Altmışlık döngüde bu, 50. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 癸 olan kişiye “Yin Su (癸)” der ve sonuç ekranının gösterdiği satır şudur: \"Çiy ve yağmur. Sessizce sızar, sözden önce havayı okur.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 丑 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 癸 açısından okunduğunda, 丑 dalının barındırdığı gövdeler şöyledir. Ana gövde (己) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "癸丑 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 癸 için"
              ],
              "rows": [
                [
                  "Yin Su (癸)",
                  "kalan (餘氣)",
                  "{hidChukYeo}",
                  "Yoldaş (比肩)"
                ],
                [
                  "Yin Metal (辛)",
                  "orta (中氣)",
                  "{hidChukJung}",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yin Toprak (己)",
                  "ana (本氣)",
                  "{hidChukBon}",
                  "Meydan Okuyan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 癸 olduğunda Düzenli Varlık 丙, Otorite ise 戊 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 丙. 丙, 丑 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 戊. 戊, 丑 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [壬子](/guide/pillar-im-ja), sonraki ise [甲寅](/guide/pillar-gap-in) sütunudur."
          },
          {
            "p": "[Yin Su (癸)](/guide/stem-gye) ve [丑 (Öküz)](/guide/branch-chuk) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-in": {
    "eyebrow": "Gün sütunları",
    "title": "甲寅 gün sütunu",
    "summary": "Saju-Link'in 甲寅 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "甲寅: altmışlık döngünün 51. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 甲寅 olduğunda gün gövdesi 甲 (Ağaç, Yang), gün dalı ise 寅 (Kaplan) olur. Altmışlık döngüde bu, 51. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 甲 olan kişiye “Yang Ağaç (甲)” der ve sonuç ekranının gösterdiği satır şudur: \"Dümdüz büyüyen uzun bir ağaç. Yön bir kez belirlendi mi sapmaz, eğilmektense dayanmayı seçer.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 寅 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 甲 açısından okunduğunda, 寅 dalının barındırdığı gövdeler şöyledir. Ana gövde (甲) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "甲寅 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 甲 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidInYeo}",
                  "Beklenmedik Varlık (偏財)"
                ],
                [
                  "Yang Ateş (丙)",
                  "orta (中氣)",
                  "{hidInJung}",
                  "İfade (食神)"
                ],
                [
                  "Yang Ağaç (甲)",
                  "ana (本氣)",
                  "{hidInBon}",
                  "Yoldaş (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 甲 olduğunda Düzenli Varlık 己, Otorite ise 辛 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 己. 己, 寅 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 辛. 辛, 寅 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [癸丑](/guide/pillar-gye-chuk), sonraki ise [乙卯](/guide/pillar-eul-myo) sütunudur."
          },
          {
            "p": "[Yang Ağaç (甲)](/guide/stem-gap) ve [寅 (Kaplan)](/guide/branch-in) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-myo": {
    "eyebrow": "Gün sütunları",
    "title": "乙卯 gün sütunu",
    "summary": "Saju-Link'in 乙卯 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "乙卯: altmışlık döngünün 52. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 乙卯 olduğunda gün gövdesi 乙 (Ağaç, Yin), gün dalı ise 卯 (Tavşan) olur. Altmışlık döngüde bu, 52. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 乙 olan kişiye “Yin Ağaç (乙)” der ve sonuç ekranının gösterdiği satır şudur: \"Sarmaşık — esnek bir ot. İlerlemek için koşullara göre eğilir ve kopmaz.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 卯 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 乙 açısından okunduğunda, 卯 dalının barındırdığı gövdeler şöyledir. Ana gövde (乙) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "乙卯 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 乙 için"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "kalan (餘氣)",
                  "{hidMyoYeo}",
                  "Rakip (劫財)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "ana (本氣)",
                  "{hidMyoBon}",
                  "Yoldaş (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 乙 olduğunda Düzenli Varlık 戊, Otorite ise 庚 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 戊. 戊, 卯 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 庚. 庚, 卯 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [甲寅](/guide/pillar-gap-in), sonraki ise [丙辰](/guide/pillar-byeong-jin) sütunudur."
          },
          {
            "p": "[Yin Ağaç (乙)](/guide/stem-eul) ve [卯 (Tavşan)](/guide/branch-myo) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-jin": {
    "eyebrow": "Gün sütunları",
    "title": "丙辰 gün sütunu",
    "summary": "Saju-Link'in 丙辰 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "丙辰: altmışlık döngünün 53. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 丙辰 olduğunda gün gövdesi 丙 (Ateş, Yang), gün dalı ise 辰 (Ejderha) olur. Altmışlık döngüde bu, 53. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 丙 olan kişiye “Yang Ateş (丙)” der ve sonuç ekranının gösterdiği satır şudur: \"Öğle güneşi. Duygular açıkça görünür, ortam aydınlanır, öne çıkmak doğal gelir.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 辰 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 丙 açısından okunduğunda, 辰 dalının barındırdığı gövdeler şöyledir. Ana gövde (戊) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "丙辰 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 丙 için"
              ],
              "rows": [
                [
                  "Yin Ağaç (乙)",
                  "kalan (餘氣)",
                  "{hidJinYeo}",
                  "Kollayan (正印)"
                ],
                [
                  "Yin Su (癸)",
                  "orta (中氣)",
                  "{hidJinJung}",
                  "Otorite (正官)"
                ],
                [
                  "Yang Toprak (戊)",
                  "ana (本氣)",
                  "{hidJinBon}",
                  "İfade (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 丙 olduğunda Düzenli Varlık 辛, Otorite ise 癸 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 辛. 辛, 辰 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 癸. 癸, 辰 içinde bulunur (orta (中氣))."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [乙卯](/guide/pillar-eul-myo), sonraki ise [丁巳](/guide/pillar-jeong-sa) sütunudur."
          },
          {
            "p": "[Yang Ateş (丙)](/guide/stem-byeong) ve [辰 (Ejderha)](/guide/branch-jin) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-sa": {
    "eyebrow": "Gün sütunları",
    "title": "丁巳 gün sütunu",
    "summary": "Saju-Link'in 丁巳 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "丁巳: altmışlık döngünün 54. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 丁巳 olduğunda gün gövdesi 丁 (Ateş, Yin), gün dalı ise 巳 (Yılan) olur. Altmışlık döngüde bu, 54. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 丁 olan kişiye “Yin Ateş (丁)” der ve sonuç ekranının gösterdiği satır şudur: \"Mum ışığı. Sessizce ve uzun yanar, önce en yakınındakini ısıtır.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 巳 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 丁 açısından okunduğunda, 巳 dalının barındırdığı gövdeler şöyledir. Ana gövde (丙) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "丁巳 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 丁 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidSaYeo}",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yang Metal (庚)",
                  "orta (中氣)",
                  "{hidSaJung}",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yang Ateş (丙)",
                  "ana (本氣)",
                  "{hidSaBon}",
                  "Rakip (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 丁 olduğunda Düzenli Varlık 庚, Otorite ise 壬 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 庚. 庚, 巳 içinde bulunur (orta (中氣))."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 壬. 壬, 巳 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [丙辰](/guide/pillar-byeong-jin), sonraki ise [戊午](/guide/pillar-mu-o) sütunudur."
          },
          {
            "p": "[Yin Ateş (丁)](/guide/stem-jeong) ve [巳 (Yılan)](/guide/branch-sa) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-o": {
    "eyebrow": "Gün sütunları",
    "title": "戊午 gün sütunu",
    "summary": "Saju-Link'in 戊午 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "戊午: altmışlık döngünün 55. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 戊午 olduğunda gün gövdesi 戊 (Toprak, Yang), gün dalı ise 午 (At) olur. Altmışlık döngüde bu, 55. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 戊 olan kişiye “Yang Toprak (戊)” der ve sonuç ekranının gösterdiği satır şudur: \"Açık arazi ve dağlar. Sarsılması zordur, yaslanması kolaydır; ama bir kez verdiği kararı ağır değiştirir.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 午 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 戊 açısından okunduğunda, 午 dalının barındırdığı gövdeler şöyledir. Ana gövde (丁) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "戊午 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 戊 için"
              ],
              "rows": [
                [
                  "Yang Ateş (丙)",
                  "kalan (餘氣)",
                  "{hidOYeo}",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yin Toprak (己)",
                  "orta (中氣)",
                  "{hidOJung}",
                  "Rakip (劫財)"
                ],
                [
                  "Yin Ateş (丁)",
                  "ana (本氣)",
                  "{hidOBon}",
                  "Kollayan (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 戊 olduğunda Düzenli Varlık 癸, Otorite ise 乙 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 癸. 癸, 午 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 乙. 乙, 午 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [丁巳](/guide/pillar-jeong-sa), sonraki ise [己未](/guide/pillar-gi-mi) sütunudur."
          },
          {
            "p": "[Yang Toprak (戊)](/guide/stem-mu) ve [午 (At)](/guide/branch-o) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-mi": {
    "eyebrow": "Gün sütunları",
    "title": "己未 gün sütunu",
    "summary": "Saju-Link'in 己未 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "己未: altmışlık döngünün 56. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 己未 olduğunda gün gövdesi 己 (Toprak, Yin), gün dalı ise 未 (Koyun) olur. Altmışlık döngüde bu, 56. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 己 olan kişiye “Yin Toprak (己)” der ve sonuç ekranının gösterdiği satır şudur: \"Tarla toprağı. Geleni alır ve büyütür; sergilemekten çok gözetir.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 未 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 己 açısından okunduğunda, 未 dalının barındırdığı gövdeler şöyledir. Ana gövde (己) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "己未 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 己 için"
              ],
              "rows": [
                [
                  "Yin Ateş (丁)",
                  "kalan (餘氣)",
                  "{hidMiYeo}",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yin Ağaç (乙)",
                  "orta (中氣)",
                  "{hidMiJung}",
                  "Meydan Okuyan (偏官)"
                ],
                [
                  "Yin Toprak (己)",
                  "ana (本氣)",
                  "{hidMiBon}",
                  "Yoldaş (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 己 olduğunda Düzenli Varlık 壬, Otorite ise 甲 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 壬. 壬, 未 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 甲. 甲, 未 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [戊午](/guide/pillar-mu-o), sonraki ise [庚申](/guide/pillar-gyeong-sin) sütunudur."
          },
          {
            "p": "[Yin Toprak (己)](/guide/stem-gi) ve [未 (Koyun)](/guide/branch-mi) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sin": {
    "eyebrow": "Gün sütunları",
    "title": "庚申 gün sütunu",
    "summary": "Saju-Link'in 庚申 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "庚申: altmışlık döngünün 57. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 庚申 olduğunda gün gövdesi 庚 (Metal, Yang), gün dalı ise 申 (Maymun) olur. Altmışlık döngüde bu, 57. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 庚 olan kişiye “Yang Metal (庚)” der ve sonuç ekranının gösterdiği satır şudur: \"İşlenmemiş demir. Kararlı ve nettir, askıda kalan işlere sabrı azdır.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 申 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 庚 açısından okunduğunda, 申 dalının barındırdığı gövdeler şöyledir. Ana gövde (庚) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "庚申 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 庚 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidSinYeo}",
                  "Sıra Dışı Destek (偏印)"
                ],
                [
                  "Yang Su (壬)",
                  "orta (中氣)",
                  "{hidSinJung}",
                  "İfade (食神)"
                ],
                [
                  "Yang Metal (庚)",
                  "ana (本氣)",
                  "{hidSinBon}",
                  "Yoldaş (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 庚 olduğunda Düzenli Varlık 乙, Otorite ise 丁 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 乙. 乙, 申 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 丁. 丁, 申 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [己未](/guide/pillar-gi-mi), sonraki ise [辛酉](/guide/pillar-sin-yu) sütunudur."
          },
          {
            "p": "[Yang Metal (庚)](/guide/stem-gyeong) ve [申 (Maymun)](/guide/branch-sin) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-yu": {
    "eyebrow": "Gün sütunları",
    "title": "辛酉 gün sütunu",
    "summary": "Saju-Link'in 辛酉 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "辛酉: altmışlık döngünün 58. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 辛酉 olduğunda gün gövdesi 辛 (Metal, Yin), gün dalı ise 酉 (Horoz) olur. Altmışlık döngüde bu, 58. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 辛 olan kişiye “Yin Metal (辛)” der ve sonuç ekranının gösterdiği satır şudur: \"Yontulmuş bir mücevher. İnce bir zevki ve yüksek ölçüleri vardır; özensizliği geçiştiremez.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 酉 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 辛 açısından okunduğunda, 酉 dalının barındırdığı gövdeler şöyledir. Ana gövde (辛) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "辛酉 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 辛 için"
              ],
              "rows": [
                [
                  "Yang Metal (庚)",
                  "kalan (餘氣)",
                  "{hidYuYeo}",
                  "Rakip (劫財)"
                ],
                [
                  "Yin Metal (辛)",
                  "ana (本氣)",
                  "{hidYuBon}",
                  "Yoldaş (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 辛 olduğunda Düzenli Varlık 甲, Otorite ise 丙 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 甲. 甲, 酉 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 丙. 丙, 酉 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [庚申](/guide/pillar-gyeong-sin), sonraki ise [壬戌](/guide/pillar-im-sul) sütunudur."
          },
          {
            "p": "[Yin Metal (辛)](/guide/stem-sin) ve [酉 (Horoz)](/guide/branch-yu) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sul": {
    "eyebrow": "Gün sütunları",
    "title": "壬戌 gün sütunu",
    "summary": "Saju-Link'in 壬戌 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "壬戌: altmışlık döngünün 59. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 壬戌 olduğunda gün gövdesi 壬 (Su, Yang), gün dalı ise 戌 (Köpek) olur. Altmışlık döngüde bu, 59. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 壬 olan kişiye “Yang Su (壬)” der ve sonuç ekranının gösterdiği satır şudur: \"Irmak ve deniz. Bakışı geniştir, işlerin nasıl aktığını görür.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 戌 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 壬 açısından okunduğunda, 戌 dalının barındırdığı gövdeler şöyledir. Ana gövde (戊) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "壬戌 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 壬 için"
              ],
              "rows": [
                [
                  "Yin Metal (辛)",
                  "kalan (餘氣)",
                  "{hidSulYeo}",
                  "Kollayan (正印)"
                ],
                [
                  "Yin Ateş (丁)",
                  "orta (中氣)",
                  "{hidSulJung}",
                  "Düzenli Varlık (正財)"
                ],
                [
                  "Yang Toprak (戊)",
                  "ana (本氣)",
                  "{hidSulBon}",
                  "Meydan Okuyan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 壬 olduğunda Düzenli Varlık 丁, Otorite ise 己 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 丁. 丁, 戌 içinde bulunur (orta (中氣))."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 己. 己, 戌 içinde bulunmaz."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [辛酉](/guide/pillar-sin-yu), sonraki ise [癸亥](/guide/pillar-gye-hae) sütunudur."
          },
          {
            "p": "[Yang Su (壬)](/guide/stem-im) ve [戌 (Köpek)](/guide/branch-sul) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-hae": {
    "eyebrow": "Gün sütunları",
    "title": "癸亥 gün sütunu",
    "summary": "Saju-Link'in 癸亥 gün sütununu nasıl okuduğu — gün dalının barındırdığı gövdelerin gün gövdesine göre ne olduğu — hesaplama kurallarındaki haliyle.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "癸亥: altmışlık döngünün 60. gün sütunu",
        "blocks": [
          {
            "p": "Doğum gününün gövde-dal çifti 癸亥 olduğunda gün gövdesi 癸 (Su, Yin), gün dalı ise 亥 (Domuz) olur. Altmışlık döngüde bu, 60. kombinasyondur."
          },
          {
            "p": "Saju-Link, gün gövdesi 癸 olan kişiye “Yin Su (癸)” der ve sonuç ekranının gösterdiği satır şudur: \"Çiy ve yağmur. Sessizce sızar, sözden önce havayı okur.\" Bu satırın aşağıdaki okuma veya puanlarla bir ilgisi yoktur."
          }
        ]
      },
      {
        "title": "Gün dalı 亥 tarafından barındırılan gövdelerin gün gövdesine göre karşılığı",
        "blocks": [
          {
            "p": "Gün dalı eş konumudur. Gün gövdesi 癸 açısından okunduğunda, 亥 dalının barındırdığı gövdeler şöyledir. Ana gövde (壬) dalı temsil eden enerjidir."
          },
          {
            "table": {
              "caption": "癸亥 gün dalının gizli gövdeleri",
              "head": [
                "Gizli gövde",
                "Konum",
                "Pay",
                "Gün gövdesi 癸 için"
              ],
              "rows": [
                [
                  "Yang Toprak (戊)",
                  "kalan (餘氣)",
                  "{hidHaeYeo}",
                  "Otorite (正官)"
                ],
                [
                  "Yang Ağaç (甲)",
                  "orta (中氣)",
                  "{hidHaeJung}",
                  "Sarsıcı (傷官)"
                ],
                [
                  "Yang Su (壬)",
                  "ana (本氣)",
                  "{hidHaeBon}",
                  "Rakip (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Eş konumu ve bu gün sütunu",
        "blocks": [
          {
            "p": "Geleneksel myeongri, eş konumunu erkekler için Düzenli Varlık (正財), kadınlar için Otorite (正官) olarak okur. Gün gövdesi 癸 olduğunda Düzenli Varlık 丙, Otorite ise 戊 olur."
          },
          {
            "p": "Erkekler için eş konumu (Düzenli Varlık): 丙. 丙, 亥 içinde bulunmaz."
          },
          {
            "p": "Kadınlar için eş konumu (Otorite): 戊. 戊, 亥 içinde bulunur (kalan (餘氣))."
          }
        ]
      },
      {
        "title": "Komşu gün sütunları ve onu oluşturan karakterler",
        "blocks": [
          {
            "p": "Altmışlık döngüde önceki gün sütunu [壬戌](/guide/pillar-im-sul), sonraki ise [甲子](/guide/pillar-gap-ja) sütunudur."
          },
          {
            "p": "[Yin Su (癸)](/guide/stem-gye) ve [亥 (Domuz)](/guide/branch-hae) karakterlerinden oluşur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu rehberin söylemedikleri",
        "blocks": [
          {
            "ul": [
              "Tek bir gün sütunu bir insanı ya da bir ilişkiyi belirlemez. Bir saju, dört sütunun sekiz karakterinin birbiriyle ilişkisinden okunur.",
              "Eş konumunun okuması geleneksel myeongri'nin bir kuralını taşır ve cinsiyetinizi belirtmezseniz bu konum okunmaz."
            ]
          }
        ]
      }
    ]
  },

  "guide/saju-letters": {
    "eyebrow": "Buradan başlayın",
    "title": "Gök Gövdeleri, Yer Dalları ve Gün Sütunu — Harfler Nasıl Okunur",
    "summary": "Bir Saju haritasındaki sekiz karakterin ne olduğunu ve gök gövdelerinin, yer dallarının ve gün sütununun ne anlama geldiğini iki basit tabloyla anlatır.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Saju iki tür karakterle yazılır",
        "blocks": [
          {
            "p": "Bir Saju haritasındaki sekiz karakter üst ve alt karakterlere ayrılır. Üst karakter on **gök gövdesinden (天干)** biridir, alt karakter ise on iki **yer dalından (地支)** biridir."
          },
          {
            "p": "Gövdeyi bir enerji türünün, dalı ise bir zaman ve mekânın etiketi olarak düşünün. Haftanın günlerinin adlarını ezberlemeniz gerekmediği gibi bunları da ezberlemeniz gerekmez; aşağıdaki tablolardan bakmanız yeterlidir. Dört sütunun sekiz karakter olarak nasıl oluştuğu [doğum haritası rehberinde](/guide/natal-chart) anlatılır."
          }
        ]
      },
      {
        "title": "On gök gövdesi",
        "blocks": [
          {
            "p": "On gök gövdesi vardır. Beş elementin (Ağaç, Ateş, Toprak, Metal, Su) her biri iki gövde alır; her çiftte ilk gövde Yang (陽), ikincisi Yin (陰)'dir."
          },
          {
            "table": {
              "caption": "Element ve kutbuyla on gök gövdesi",
              "head": [
                "Gök gövdesi",
                "Element ve kutup"
              ],
              "rows": [
                [
                  "Yang Ağaç (甲)",
                  "Yang Ağaç"
                ],
                [
                  "Yin Ağaç (乙)",
                  "Yin Ağaç"
                ],
                [
                  "Yang Ateş (丙)",
                  "Yang Ateş"
                ],
                [
                  "Yin Ateş (丁)",
                  "Yin Ateş"
                ],
                [
                  "Yang Toprak (戊)",
                  "Yang Toprak"
                ],
                [
                  "Yin Toprak (己)",
                  "Yin Toprak"
                ],
                [
                  "Yang Metal (庚)",
                  "Yang Metal"
                ],
                [
                  "Yin Metal (辛)",
                  "Yin Metal"
                ],
                [
                  "Yang Su (壬)",
                  "Yang Su"
                ],
                [
                  "Yin Su (癸)",
                  "Yin Su"
                ]
              ]
            }
          },
          {
            "p": "Doğduğunuz günün gövdesine **gün gövdesi (日干)** denir ve sizi işaret eden karakter odur."
          }
        ]
      },
      {
        "title": "On iki yer dalı",
        "blocks": [
          {
            "p": "On iki yer dalı vardır ve her birine bir burç hayvanı bağlıdır. Yani on iki dal, burçların kendisidir."
          },
          {
            "table": {
              "caption": "On İki Yerel Dal ve Burçlar",
              "head": [
                "Yerel Dal",
                "Burç"
              ],
              "rows": [
                [
                  "子",
                  "Fare"
                ],
                [
                  "丑",
                  "Öküz"
                ],
                [
                  "寅",
                  "Kaplan"
                ],
                [
                  "卯",
                  "Tavşan"
                ],
                [
                  "辰",
                  "Ejderha"
                ],
                [
                  "巳",
                  "Yılan"
                ],
                [
                  "午",
                  "At"
                ],
                [
                  "未",
                  "Keçi"
                ],
                [
                  "申",
                  "Maymun"
                ],
                [
                  "酉",
                  "Horoz"
                ],
                [
                  "戌",
                  "Köpek"
                ],
                [
                  "亥",
                  "Domuz"
                ]
              ]
            }
          },
          {
            "p": "Bir dal tek bir karakter gibi görünür ama içinde gövdeler barındırır. Bunlara **gizli gövdeler (支藏干)** denir. Bir dalın hangi gövdeleri ne oranda barındırdığı, her dalın sözlük maddesinde gösterilir. Burç hayvanının nasıl belirlendiği için [burç rehberine](/guide/zodiac) bakın."
          }
        ]
      },
      {
        "title": "Gün sütunu — çift olarak bir gövde ve bir dal",
        "blocks": [
          {
            "p": "Bir Saju haritasındaki her sütun iki karakterdir: bir gövde ile bir dal çifti. Doğduğunuz günün sütunu **Gün Sütunu (日柱)**'dur."
          },
          {
            "p": "Gövdeleri ve dalları sırayla eşleştirirseniz 甲子, 乙丑 ve 丙寅'den 癸亥'ye kadar **altmış** birleşim elde edersiniz. Bu döngüye altmışlık döngü denir. Sayı 10 × 12 = 120 değil altmıştır, çünkü Yang gövde yalnızca Yang dalla, Yin gövde yalnızca Yin dalla eşleşir."
          },
          {
            "p": "Gün sütununun üst karakteri, yukarıda tanıştığınız gün gövdesidir. Her sütunu tek tek açıklayan maddeler, [rehber listesinin](/guide) altındaki gövde, dal ve gün sütunu sözlüklerindedir."
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "On Tanrı",
    "title": "On Tanrı — Benim Saju'mdaki On Pozisyon",
    "summary": "Gün sütununa dayanarak, kalan karakterler on isimle bölünür. Aynı zenginlik elementi olsalar bile, normal zenginlik ile yan zenginlik arasındaki ayrımın nedenlerini tartışır.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Gün Sütunu Kişinin Kendisi",
        "blocks": [
          {
            "p": "Saju'nun sekiz karakteri arasında, **gün sütunu** (doğum gününün göksel kökü) kişinin kendisini ifade eder. Kalan yedi karakter, o gün sütununun bulunduğu çevre olarak okunur."
          },
          {
            "p": "**On Tanrı** (十神), gün sütununun diğer karakterleri nasıl algıladığını gösteren on bölümdür. Beni besleyen enerji Kaynak, benim gibi olan enerji Arkadaş, doğurduğum enerji Gıda ve Zenginlik, beni baskılayan enerji Resmi Pozisyon ve baskıladığım enerji Zenginlik — bu beş kategori yin ve yang'a daha da bölünerek on oluşturur."
          }
        ]
      },
      {
        "title": "Kalan Yedi Karakterin Benim İçin Anlamı",
        "blocks": [
          {
            "p": "Gün sütunu belirlendikten sonra, doğum haritasındaki kalan karakterler her biri bir isim alır. Beni doğuran enerji, benim gibi olan enerji, doğurduğum enerji, beni baskılayan enerji ve baskıladığım enerji — bu beş dal, yin ve yang ile daha da **on**'a bölünür. Bu, On Tanrı'dır."
          },
          {
            "p": "Böylece, On Tanrı başkalarıyla olan ilişkileri değil, **kendimdeki pozisyonları** ifade eder. Hangi pozisyonların kalın veya ince olduğu, benim eğilimlerimi ve yaşam tarzımı gösterir."
          }
        ]
      },
      {
        "title": "Neden bunu On Tanrılar aracılığıyla okuyoruz, üç element ilişkisi yerine?",
        "blocks": [
          {
            "p": "Gün dalını yalnızca beş elementin üç yönü (destekleyici, aynı ve karşıt) aracılığıyla görme yöntemi de vardır. Bu basittir, ancak **yin ve yang kaybolur.** 甲 (yang ahşap) ve 乙 (yin ahşap) 甲 ile aynı hale gelir, bu 'benzerlik' ifadesidir ve karşıt ilişki tek bir puanda yön veya yin ve yang olmadan bir araya getirilir."
          },
          {
            "p": "Eş pozisyonu, yin ve yang açısından On Tanrı'ya göre değerlendirilmelidir. Beş element aracılığıyla görülen unsurlar, On Tanrı aracılığıyla görülenlerle bir motor içinde karıştırıldığında, aynı iki karakter için iki standart olacaktır. Bu nedenle, On Tanrı altında birleştiriyoruz."
          }
        ]
      },
      {
        "title": "Eş pozisyonu Doğru Zenginlik ve Doğru Memur'dur",
        "blocks": [
          {
            "p": "Geleneksel fal bakımı, eş pozisyonunu cinsiyete göre farklı görür. Erkekler için bu **Doğru Zenginlik (正財)**, kadınlar için ise **Doğru Memur (正官)**'dur. Aynı zenginlik elementi olsalar bile, yalnızca yin ve yang açısından uyumsuz olan Doğru Zenginlik eş pozisyonu olarak kabul edilirken, Dolaylı Zenginlik eş olarak değil, aktivite ve zenginlik açısından okunur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cinsiyet belirtmezseniz, bu pozisyon atlanır",
        "blocks": [
          {
            "p": "Bu, eş pozisyonu olarak hangi tarafın, Doğru Zenginlik mi yoksa Doğru Memur mu olarak değerlendirileceğinin belirlenememesindendir. Eksik bir değeri doldurmak için tahminde bulunmak yerine, o birim olmadan kalan unsurları okuyoruz."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "Bugünün falı",
    "title": "Bugünün falı nasıl çıkıyor?",
    "summary": "Bugünün gün dalı, doğum haritasıyla karşılaştırılarak puanlanır. On üç baskı ve destek ilişkisi ve yedi yer dalı ilişkisi ile birlikte yirmi madde ve bunların ekleme ve çıkarma işlemleri tamamen açıklanır.",
    "backLabel": "Hesaplama temeli",
    "sections": [
      {
        "title": "Bugün, sekiz karakterle aynı şekilde de belirlenir",
        "blocks": [
          {
            "p": "Her günün kendi **gün sütunu (日辰)** vardır. Doğum haritasının gün sütununu belirleme yöntemini kullanarak, bugün de bir göksel dal ve bir yer dalı ile ilişkilendirilmiştir. Bugünün falı, bu iki karakterin doğum haritasıyla karşılaştırılması hakkındadır."
          },
          {
            "p": "Temel puan **{baseScore} puan**dır. Aşağıdaki unsurlar eklenir ve çıkarılır ve nihayetinde {clampLow} puan ile {clampHigh} puan arasında sınırlıdır — 0 puan veya 100 puan belirtilmez."
          }
        ]
      },
      {
        "title": "① Bugünün enerjisi ihtiyacım olan mı?",
        "blocks": [
          {
            "p": "Bu en önemli pozisyondur. Bugünün enerjisinin, [dengeleyici unsur](/guide/yongsin) tarafından belirlenen 'şu anda ihtiyaç duyulan enerji' ile örtüşüp örtüşmediğini kontrol ediyoruz."
          },
          {
            "table": {
              "head": [
                "Bugünün enerjisi",
                "Ekleme/Çıkarma"
              ],
              "rows": [
                [
                  "Şu anda ihtiyaç duyulan enerji",
                  "{todayIsYongsin}"
                ],
                [
                  "Gerekli enerjiyi üretir",
                  "{todayGeneratesYongsin}"
                ],
                [
                  "Gerekli enerjiyi baskılar",
                  "{todayControlsYongsin}"
                ],
                [
                  "Zaten taşan tarafta daha fazla itiyor",
                  "{todayIsGisin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Olumsuz unsuru 'dengeleyici unsur hariç her şey' olarak düşünmeyin",
        "blocks": [
          {
            "p": "Bunu yaparsanız, hem dengeleyici unsuru üreten enerji hem de dengeleyici unsuru baskılayan enerji kötü hale gelir ve yukarıdaki tabloda son iki satır ayırt edilemez hale gelir. Sadece **karşıt yönde daha fazla iten** enerji, baskı ve destek anlamına göre olumsuz unsur olarak görülür."
          }
        ]
      },
      {
        "title": "② Bugünün göksel dalı ile gün dalı arasındaki ilişki",
        "blocks": [
          {
            "p": "Beş elementin destekleyici ve karşıt ilişkileri doğrudan gün dalı ile bugünün göksel dalı arasında uygulanır."
          },
          {
            "table": {
              "head": [
                "İlişki",
                "Ekleme/Çıkarma"
              ],
              "rows": [
                [
                  "Bugün beni üretir",
                  "{generatesSelf}"
                ],
                [
                  "Bugün ve ben aynı enerjiyiz",
                  "{sameElement}"
                ],
                [
                  "Ben bugünü baskılarım",
                  "{selfControls}"
                ],
                [
                  "Ben bugünle akıyorum",
                  "{selfGenerates}"
                ],
                [
                  "Bugün beni baskılar",
                  "{controlsSelf}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "③ Bugünün yer dalı doğum haritasının yer dallarıyla buluşur",
        "blocks": [
          {
            "p": "Bugünün yer dalı, doğum haritasının yer dallarıyla karşılaştırılır. İlişki tablosu [yer dalı ilişkileri](/guide/branches) içindedir."
          },
          {
            "table": {
              "head": [
                "İlişki",
                "Ekleme/Çıkarma"
              ],
              "rows": [
                [
                  "tam üçlü (三合)",
                  "{branchSamhap}"
                ],
                [
                  "altı uyum (六合)",
                  "{branchYukhap}"
                ],
                [
                  "yarım üçlü (半合)",
                  "{branchBanhap}"
                ],
                [
                  "sessiz uyumsuzluk (怨嗔)",
                  "{branchWonjin}"
                ],
                [
                  "çatışma (沖)",
                  "{branchChung}"
                ]
              ]
            }
          },
          {
            "p": "Birden fazla sütun olduğunda, birden fazla ilişki ortaya çıkar. Hepsi eklenir, ancak bu tüm öğe **±{branchMaxAbs} puan** ile sınırlıdır — bu, tek bir yerli dal ilişkisinin tüm günü belirlemesini önlemek içindir."
          }
        ]
      },
      {
        "title": "④ Güce Dayalı Düzeltme",
        "blocks": [
          {
            "p": "Aynı enerjiye sahip olsalar bile, güçlü bir gün sütunu ile zayıf bir gün sütununun anlamı farklıdır. Bu nedenle, son bir ayarlama yapıyoruz."
          },
          {
            "table": {
              "head": [
                "Durum",
                "Düzeltme"
              ],
              "rows": [
                [
                  "Zayıf gün sütunu ama bugün onları destekliyor",
                  "{weakTodayHelps}"
                ],
                [
                  "Güçlü gün sütunu ama bugün yükü uygun şekilde azaltıyor",
                  "{strongTodayDrains}"
                ],
                [
                  "Güçlü gün sütunu ama bugün desteği kalınlaştırıyor",
                  "{strongTodayHelps}"
                ],
                [
                  "Zayıf gün sütunu ama bugün yükü artırıyor",
                  "{weakTodayBurdens}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Not ve Alanlara Göre Puanlar",
        "blocks": [
          {
            "p": "Toplam puan beş dereceye ayrılır."
          },
          {
            "table": {
              "head": [
                "Puan",
                "Derece"
              ],
              "rows": [
                [
                  "{gradeDaegilMin} puan veya daha fazla",
                  "Büyük Şans (大吉)"
                ],
                [
                  "{gradeGilMin} puan veya daha fazla",
                  "Şans (吉)"
                ],
                [
                  "{gradePyeongMin} puan veya daha fazla",
                  "Ortalama (平)"
                ],
                [
                  "{gradeJuuiMin} puan veya daha fazla",
                  "Dikkat (注意)"
                ],
                [
                  "{gradeJosimMin} puan veya daha fazla",
                  "Dikkatli Ol (操心)"
                ]
              ]
            }
          },
          {
            "p": "Zenginlik, aşk, kariyer ve sağlık alanları toplam puanın {overallShare} kadarını miras alır, geri kalan ise o alanlarla ilgili On Tanrı ve yerli dal ilişkilerine göre bölünür. Bu nedenle, toplam puan aynı olsa bile, alanlara göre sayılar kişiden kişiye farklılık gösterir."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Yukarıdaki sayılar tamamen motor ayarlarından okunmaktadır. Kurallar değişirse, bu belge de değişecektir ve herhangi bir puan değişikliği ilk olarak [Duyuru](/notice) kısmında yayınlanacaktır."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "İlişki Tablosu",
    "title": "Yerli Dal İlişkileri — Kombinasyon, Çatışma ve Uyumsuzluk",
    "summary": "Bu, bugünün gün sütununun doğum haritası ile nasıl etkileşime girdiğini gösteren bir ilişki tablosudur. Her kombinasyon, çatışma ve uyumsuzluğun ne olduğunu ve kaç puan taşıdığını ortaya koyar.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Yerli Dallar On İki Karakterdir",
        "blocks": [
          {
            "p": "On iki yerli dal (十二支) şunlardır: 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Yaygın olarak bilinen burç işaretleri — Fare, Sığır, Kaplan, Tavşan, Ejderha, Yılan, At, Koyun, Maymun, Horoz, Köpek, Domuz — bu on iki karakterden birine bağlıdır."
          },
          {
            "figure": "branch-wheel",
            "caption": "On iki karakter bir daire içinde düzenlendiğinde, ilişkiler net bir şekilde görünür. Çatışma (沖) her zaman karşı karşıya gelirken, altı uyum ve uyumsuzluk daha yakın çiftlerdir. Bu çizgiler metinde yazılı değildir, ancak hesaplama kurallarından doğrudan türetilmiştir.",
            "labels": {
              "alt": "Altı uyum, çatışma ve uyumsuzluğu bağlayan çizgilerle daire içinde düzenlenmiş on iki yerli dalı gösteren bir diyagram.",
              "yukhap": "altı uyum",
              "chung": "Çatışma",
              "wonjin": "Uyumsuzluk",
              "rat": "Fare",
              "ox": "Sığır",
              "tiger": "Kaplan",
              "rabbit": "Tavşan",
              "dragon": "Ejderha",
              "snake": "yılan",
              "horse": "at",
              "goat": "keçi",
              "monkey": "maymun",
              "rooster": "horoz",
              "dog": "köpek",
              "pig": "domuz"
            }
          },
          {
            "p": "Saju'da, dört sütunun her biri birer **yer dalı** içerir. **Bugünün okuması**, **günün dalı** ile doğum haritasının dört dalını aşağıdaki ilişki tablosunu kullanarak eşleştirerek belirlenir."
          }
        ]
      },
      {
        "title": "Genel İlişki Tablosu",
        "blocks": [
          {
            "table": {
              "caption": "En yüksek puana göre sıralanmıştır. Bunlar Saju-Link tarafından kullanılan değerlerdir.",
              "head": [
                "İlişki",
                "Karşılık Gelen Çift",
                "Anlam",
                "Puan"
              ],
              "rows": [
                [
                  "üçlü (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Üç karakter bir araya geldiğinde, bir **tam element formasyonu** (局) oluştururlar. Bu, en güçlü kombinasyon olarak kabul edilir.",
                  "{scoreSamhap}"
                ],
                [
                  "altı uyum (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Birbirini çeken çiftler. Bu, yalnızca iki karakterden oluştuğu için en yaygın kombinasyondur.",
                  "{scoreYukhap}"
                ],
                [
                  "yarım üçlü (半合)",
                  "Üçlüden bir kraliyet karakteri (子·酉·午·卯) içeren iki karakter",
                  "Bir karakterin formasyonda merkezi olduğu bir yarım üçlü. Sadece iki karakterle tam bir element formasyonu oluşturmaz, bu nedenle üçlüden daha düşüktür.",
                  "{scoreBanhap}"
                ],
                [
                  "Aynı Dal",
                  "子子 · 丑丑 …",
                  "Aynı olan karakterler. Bu, birbirine benzediği anlamına gelir ancak çekim anlamına gelmez, bu nedenle ortada yer alırlar.",
                  "{scoreSame}"
                ],
                [
                  "İlişki Yok",
                  "Yukarıda veya aşağıda yer almayan çiftler",
                  "Özel bir ilişkiye sahip olmayan kombinasyonlar. Bu bir referans noktası olarak hizmet eder.",
                  "{scoreNeutral}"
                ],
                [
                  "sessiz uyumsuzluk (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Hoşlanmadıkları halde ayrılamayan çiftler. Yüzeyde sessiz görünürler ancak uzun süreli kabul edilirler.",
                  "{scoreWonjin}"
                ],
                [
                  "Çatışma (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Baş başa çarpışan çiftler. Bunlar birbirine bakan altı çift.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "üçlüler ve yarım üçlüler",
        "blocks": [
          {
            "p": "Bir üçlü, üç karakterin de mevcut olmasını gerektirir. Doğum haritasında dört yer dalı bulunduğundan, gün dalının bunlarla birleşmesi mümkündür ve bu durumda bir üçlü oluşturur — o zaman, {scoreSamhap} puanı alır. Eğer yalnızca iki karakter varsa, bu bir yarım üçlüdür."
          }
        ]
      },
      {
        "kind": "note",
        "title": "yarım üçlülerin Tanınması için Kraliyet Karakterleri Gerekir",
        "blocks": [
          {
            "p": "Her iki karakterin de aynı üçlü grubuna ait olduğu durumlarda yarım üçlü olarak sayılan bir yöntem de vardır. Bu, 申辰 gibi kombinasyonların yüksek puan almasını sağlar. Bu nedenle, bu hizmet yalnızca kraliyet karakterleri (子·酉·午·卯) içeren yarım üçlüleri tanır ve 申辰·巳丑·寅戌·亥未 gibi kombinasyonları geçerli saymaz."
          }
        ]
      },
      {
        "title": "sessiz uyumsuzluğun Ayrılma Sebebi",
        "blocks": [
          {
            "p": "Altı sessiz uyumsuz çift, çatışmalar kadar sık görülür. Eğer yalnızca kombinasyonlar ve çatışmalar sayılırsa, bu altı çift {scoreNeutral} puanıyla ilişkisiz olarak gömülür, bu nedenle ayrı bir şekilde yer alırlar."
          },
          {
            "p": "Eğer çatışmalar, baş başa çarpışan ve belirgin bir şekilde sergilenen çiftlerse, sessiz uyumsuzluk ince bir şekilde uyumsuzdur. Bu nedenle, çatışmalardan ({scoreChung}) daha yüksek ancak ilişkisizden ({scoreNeutral}) kesinlikle daha düşük bir puan olan {scoreWonjin} ile yer alır."
          }
        ]
      },
      {
        "title": "Çatışmalar için de puanlar atanır",
        "blocks": [
          {
            "p": "En düşük çatışma skoru {scoreChung}. 0'a yakın bir değer vermemek kasıtlıdır. Geleneksel myeongri'de, bir çatışma 'son' değil, bir 'çarpışma' olarak görülür ve alt sınırda bir puan vermek, hizmetin ilişki hakkında kesin bir ifade verdiği anlamına gelir."
          },
          {
            "p": "{scoreChung} minimumu ve {scoreSamhap} maksimumu ile fark belirgin ancak kesin değildir."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Burç",
    "title": "Saju'da Burç Nerede?",
    "summary": "Burç, doğduğunuz yılın yerel dalıdır. Bu, burcun takvim yılı yerine saju yılından alınmasından kaynaklanır ve Ocak veya Şubat'ın başında doğanların bir önceki yılın burcuna sahip olmasının nedenini açıklar.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Burç, doğduğunuz yılın yerel dalıdır.",
        "blocks": [
          {
            "p": "Saju, yıl, ay, gün ve saat olmak üzere dört sütundan oluşur; her sütunun bir göksel dalı ve bir yerel dalı vardır. Bunlar arasında, **yılın yerel dalı**, yani yıl dalı, burç olarak adlandırdığımız hayvandır."
          },
          {
            "table": {
              "caption": "On İki Yerel Dal ve Burçlar",
              "head": [
                "Yerel Dal",
                "Burç"
              ],
              "rows": [
                [
                  "子",
                  "Fare"
                ],
                [
                  "丑",
                  "Öküz"
                ],
                [
                  "寅",
                  "Kaplan"
                ],
                [
                  "卯",
                  "Tavşan"
                ],
                [
                  "辰",
                  "Ejderha"
                ],
                [
                  "巳",
                  "Yılan"
                ],
                [
                  "午",
                  "At"
                ],
                [
                  "未",
                  "Keçi"
                ],
                [
                  "申",
                  "Maymun"
                ],
                [
                  "酉",
                  "Horoz"
                ],
                [
                  "戌",
                  "Köpek"
                ],
                [
                  "亥",
                  "Domuz"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Biz saju yılını, takvim yılını değil kullanıyoruz.",
        "blocks": [
          {
            "p": "Burç değişiminin noktası, güneş takviminin 1 Ocak'ı veya Ay Yeni Yılı değildir. Saju'da yıl değişimi için standart **Ipchun**'dur. Bu nedenle, Ocak veya Şubat'ın başında doğanlar, takvimin gösterdiğinden farklı bir burca sahip olabilirler."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Burç için neden doğrudan sormuyoruz.",
        "blocks": [
          {
            "p": "Bu nedenle, giriş ekranında burcu seçmeden sadece doğum tarihini soruyoruz. Saju motoru yılı hesapladığında, otomatik olarak Ipchun sınırına uyum sağlar. Eğer doğrudan seçilirse, erken Şubat'ta doğan biri, gerçek burcuyla uyuşmayan bir burç seçebilir."
          }
        ]
      },
      {
        "title": "Burç, saju'daki bir karakterdir.",
        "blocks": [
          {
            "p": "Sekiz karakter arasında, burçla ilişkili olan **bir yıl dalıdır**. Diğer yedi karakter — özellikle kendini ifade eden gün dalı — burçla hiçbir ilişkisi yoktur."
          },
          {
            "p": "Aynı yıl doğan insanlar aynı burcu paylaşır. Bu nedenle, burçtan elde edilebilecek bilgi, sekiz karakterden yalnızca birinin bilgisi kadardır. Bu, bu hizmetin burcu **ayrı veya önemli bir şekilde ele almamasının** nedenidir — yıl dalı, güç için hesaplanır ve bugünün gün sütunu, diğer yerel dallar gibi değerlendirilir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yine de, burcu göstermemizin nedeni.",
        "blocks": [
          {
            "p": "Bu, myeongri terimlerini bilmeseniz bile anlamın anlaşıldığı tek pozisyondur. Burç, doğum haritası ekranında yıl dalıyla birlikte not edildiğinde, diğer yedi karakterin okunması için bir ipucu haline gelir."
          }
        ]
      },
      {
        "title": "Doğum saatini bilmeseniz bile yıl dalı aynı kalır.",
        "blocks": [
          {
            "p": "Eğer zamanı girmezseniz, saat pili atlanır ve **beş elementin** (the five elements) gücü değişir. Ancak, **yıl dalı aynı kalır** — bu yalnızca doğduğunuz yıl ile belirlenir."
          },
          {
            "p": "Bu nedenle, yıl dalından türetilen hikaye, zamanı bilmeyenler için bile değişmez. Aksine, bu, yalnızca burca dayanarak söylenebileceklerin sınırlı olduğu anlamına gelir; zaman dahil olsa da olmasa da."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Zaman",
    "title": "Doğum saatini gerçek güneş zamanına dönüştürüyoruz.",
    "summary": "Standart zaman ve güneşin gerçek konumu farklıdır. Bu, saat sütununun doğru olması için doğum yerinin boylamına göre zamanın ayarlanması gerektiğini açıklar.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Saatteki zaman ile güneş zamanı farklıdır",
        "blocks": [
          {
            "p": "Saju'nun saat dalı (時柱) güneşin konumuna göre belirlenir. Ancak, gördüğümüz saat, tüm ülke için tek bir standart zaman kullanır ve bu, güneşin gerçek konumuyla uyumsuzdur."
          },
          {
            "p": "Kore'nin standart zamanı 135° doğu boylamına dayanmaktadır. Seul'ün boylamı yaklaşık 127°'dir, bu nedenle batıda yaklaşık 8°'dir, bu da güneşin zirveye ulaşmasını geciktirir — saat 12:00 olduğunda, Seul'deki güneş hala zirvesine ulaşmamıştır. Bu fark yaklaşık **32 dakika**dır."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 dakika saat dalını bir slot değiştirir",
        "blocks": [
          {
            "p": "Saju'daki zaman iki saatlik birimlere bölünmüştür. Sınırda doğanlar, 32 dakikalık bir farkla saat dalının tamamen değişmesiyle karşılaşacaklardır — bu sınırda tam olarak düşenler için ayarlamalar gereklidir."
          }
        ]
      },
      {
        "title": "Neden nerede doğduğunuzu sorduğumuzun nedeni",
        "blocks": [
          {
            "p": "Boylam farklıysa, ayarlama miktarı da farklı olacaktır. Seul merkezli ayarlamayı yurt dışında doğan birine uygularsanız, saat dalı önemli ölçüde uyumsuz olacaktır. Bu nedenle, giriş ekranı doğum yerinizi seçmenizi ister ve hesaplamalar o şehrin boylamı ve standart zamanı temel alınarak yapılır. Şu anda listede {cityCount} yer bulunmaktadır."
          },
          {
            "p": "Aynı ülkede bile, önemli ölçüde farklı boylamlara sahip yerler (örneğin Amerika Birleşik Devletleri, Rusya, Endonezya vb.) şehirler olarak ayrılmıştır. **15° boylam bir saat dalına eşittir**."
          },
          {
            "p": "Seçmezseniz, hesaplamalar Seul'a göre yapılacaktır. Çoğu doğum yurt içindedir, bu nedenle hata payı daha azdır, ancak yurt dışında doğduysanız, lütfen seçtiğinizden emin olun."
          }
        ]
      },
      {
        "title": "Standart zaman geçmişte birkaç kez değişti",
        "blocks": [
          {
            "p": "Ayarlamanın basitçe \"boylam farkı ÷ 15° × 60 dakika\" olarak hesaplanamamasının bir nedeni vardır. Standart zaman kendisi farklı dönemlerde değişmiştir."
          },
          {
            "table": {
              "caption": "Kore'nin standart zamanındaki değişiklikler — bu dönemde doğanlar basit hesaplamalarla uyumsuz olacaktır",
              "head": [
                "Dönem",
                "Ne farklıydı?"
              ],
              "rows": [
                [
                  "1912'den önce",
                  "Standart zaman yoktu (yerel ortalama zaman)"
                ],
                [
                  "1954 – 1961",
                  "Standart zaman UTC+8:30 idi"
                ],
                [
                  "1948 – 51 · 1955 – 60 · 1987 – 88",
                  "Yaz saati uygulaması yürürlüğe girdi"
                ]
              ]
            }
          },
          {
            "p": "Saju-Link, standart meridyeni sabit bir değer olarak belirlemez, ancak doğum yerinin **IANA zaman dilimi** bilgisine dayanarak o anda kullanılan gerçek standart zamanı hesaplar. Yaz saati uygulaması ve geçmiş standart zamanlar otomatik olarak yansıtılır."
          }
        ]
      },
      {
        "title": "Gece yarısından hemen sonra doğum tarihi de dikkate alınır",
        "blocks": [
          {
            "p": "Ayarlama -32 dakika olduğundan, saat 00:00 ile 00:32 arasında doğanlar gerçek güneş zamanında **önceki gün saat 11**'de olacaklardır. Sadece zaman geri ayarlanırsa ve tarih aynı kalırsa, gün dalı (日柱) \"önceki gün saat 11\" olarak yazılacaktır."
          },
          {
            "p": "Saju-Link bu durumda tarihi de ayarlayacaktır. Gün dalının üzerindeki karakter, kendimi gösteren gün dalıdır (日干), bu nedenle bu uyumsuzsa, yorumlamadaki neredeyse tüm öğeler uyumsuz olacaktır."
          }
        ]
      },
      {
        "title": "Zamanı bilmenize gerek yok",
        "blocks": [
          {
            "p": "Doğum zamanı isteğe bağlıdır. Bilmiyorsanız, hesaplamalar saat dalı olmadan yapılacaktır ve bu durum sonuç ekranında gösterilecektir. Bu, sekiz karakterden ikisinin eksik olduğu anlamına gelir, bu nedenle beş elementin güç ve zayıflık değerlendirmesini etkileyecektir, bu yüzden biliyorsanız dahil etmek daha doğrudur."
          },
          {
            "p": "Yıl dalı (zodyak hayvanı) her zaman aynıdır — [çünkü sadece yıl dalına bakıyoruz](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Kişisel Bilgiler",
    "title": "Girilen bilgileri saklamayan bir yöntem",
    "summary": "Doğum tarihinin hiçbir yerde kaydedilmediğinin teknik olarak ne anlama geldiğini ve sonuç bağlantısında nelerin bulunduğunu netleştirir.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Üyelik kaydı yoktur",
        "blocks": [
          {
            "p": "Saju-Link hesap oluşturmaz. İsim, e-posta veya telefon numarası toplamaz. Tek toplanan bilgi doğum tarihi ve (isteğe bağlı olarak) doğum saati, doğum yeri ve cinsiyettir ve bu bilgiler hesaplama tamamlandıktan sonra kalmaz."
          },
          {
            "p": "Sonuç ekranında görüntülenecek bir başlık girmek için bir alan vardır, ancak bu **sadece görüntüleme amaçlıdır** ve hesaplamalarda kullanılmaz. Gerçek adınızı girmenize gerek yoktur."
          }
        ]
      },
      {
        "title": "Sonuç bağlantısında neler var?",
        "blocks": [
          {
            "p": "Hesaplama tamamlandığında, adres şöyle görünür."
          },
          {
            "p": "**/ko/reading/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "**#**'den sonra gelenler giriş değerleridir. Bu kısma **fragment** denir, bu bölüm **tarayıcı sunucuya göndermediği** bir bölümdür. Bu standart web davranışıdır ve bizim oluşturduğumuz bir kural değildir — aslında bir belgedeki bir konumu belirtmek için tasarlanmıştır, bu nedenle sunucunun bunu görmesine gerek yoktur."
          },
          {
            "p": "Diğer bir deyişle, sonuç bağlantısını açtığınızda, tarayıcı bu değeri hesaplama talep etmek için okur ve sunucumuz hesaplama için kullanılacak değerleri alır, yanıtı döner ve ardından bunu unutur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bağlantıyı başkalarına gönderirken dikkatli olun",
        "blocks": [
          {
            "p": "Sunucuda saklanmadığı gerçeği bağlantının güvenli olduğu anlamına gelmez. Sonuç bağlantısı iki bireyin doğum tarihlerini içerir, bu nedenle o bağlantıyı alan kişi aynı sonucu görebilir."
          }
        ]
      },
      {
        "title": "Hesaplama neden sunucuda yapılıyor ama saklanmıyor?",
        "blocks": [
          {
            "p": "Hesaplama kendisi sunucuda yapılır. Saju'yu oluşturmak için ay takvimi tablosuna ihtiyaç vardır ve bu tablo tarayıcıya gönderilecek kadar büyük değildir. Ancak, **talebi işledikten sonra, bu değeri hiçbir yerde kullanmıyoruz.** Veritabanına eklemek için bir kod yoktur."
          },
          {
            "p": "İşletme için gerekli minimum kayıtlar tutulur — aynı kişinin kısa bir süre içinde çok fazla talep göndermesini önlemek için bir sayaç. Bu, doğum tarihini içermez ve erişim IP'si saklanmaz. Sadece tarih ile hashlenmiş bir değer sayılır ve bu değer gün değiştiğinde değişir."
          }
        ]
      },
      {
        "title": "Bilgi saklanmadığı için yapılamayan şeyler",
        "blocks": [
          {
            "p": "Açıkçası, bilgi saklamadığımız için vazgeçilen şeyler vardır."
          },
          {
            "ul": [
              "**Geçmiş sonuçları geri alamazsınız.** Onları tekrar görüntülemek için bağlantıya sahip olmanız gerekir.",
              "**Aynı değerler yeniden hesaplanacaktır.** Önbellek yoktur. Ancak, tüm kurallar belirleyici olduğundan, [aynı giriş her zaman aynı değeri verir](/guide/natal-chart).",
              "**Sayfayı yenilemek reklam kapısını geri getirecektir.** Bunun nedeni, görüntüleme geçmişi bırakacak bir yer olmamasıdır."
            ]
          }
        ]
      },
      {
        "title": "Eğer bir satın alma yaparsanız",
        "blocks": [
          {
            "p": "Bir rapor satın aldığınızda, bir işlem kaydı tutulacaktır. Ödeme, yasal saklama sürelerine tabidir ve bir sipariş geçmişi olmadan, iade işlemleri gerçekleştirilemez. Ancak, bu aşamada, **saju hesaplaması için kullanılan doğum tarihi siparişle ilişkilendirilmeyecek** — ödeme onaylandıktan sonra PDF oluşturulurken tekrar talep edilecektir."
          },
          {
            "p": "Daha fazla bilgi için lütfen [Gizlilik Politikamız](/privacy) sayfasına bakın."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Ücretli ürünler",
    "title": "Ücretli raporda neler var",
    "summary": "PDF'ye eklenenleri netleştirirken ekranı değiştirmeden tutar. Değerler ve içerikler, gerçek ürün ayarlarından alınmaktadır.",
    "backLabel": "Hesaplama temeli",
    "sections": [
      {
        "title": "Ekranı değiştirmeden, yalnızca PDF'ye eklenmiştir",
        "blocks": [
          {
            "p": "Saju hesaplama ve sonuç sorgulama **ücretsizdir**. Ekranda, doğum haritası, beş element, bugünün şansı ve bunların temeli dahil olmak üzere her şeyi görebilirsiniz; çünkü ücretli rapor oluşturulurken hiçbir şey atlanmamıştır."
          },
          {
            "p": "Raporun rolü, **ekranda mevcut olmayan katmanlar eklemektir**. Bu katmanlar uydurulmamıştır; zaten puanlama sürecinde hesaplanan ancak ekranda kullanılmayan değerlerdir."
          }
        ]
      },
      {
        "title": "Ömür boyu saju ve bu yılın şansı raporu PDF'si — {priceDomestic}",
        "slot": "reportContents",
        "blocks": [
          {
            "p": "Yerli ödeme {priceDomestic} (KDV dahil), uluslararası ödeme {priceGlobal}. {pageCount} A4 sayfasından oluşmaktadır."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "İçindekiler, ürün açıklamasından doğrudan okunmaktadır. **Sayfa sayısı, gerçek belge ile aynıdır** — ürün bilgi bildiriminde belirtilen değer olduğu için şişirilmemiştir."
          }
        ]
      },
      {
        "title": "Ekranda olmayanlar",
        "blocks": [
          {
            "p": "Ücretsiz ekran, doğum haritasını, beş elementi ve bugünün şansını gösterir. Hesaplama sürecinde üretilen ancak ekranda gösterilmeyen üç değer vardır ve bunlar ücretli raporun bölümleridir."
          },
          {
            "ul": [
              "**Gün dalının dostlarının oranı** — Güçlü veya zayıf bir gün dalı yargısının nerede yapıldığını sayısal olarak gösterir. Yargı adı tek başına, bunun kenarda mı yoksa bol mu olduğunu göstermez.",
              "**Wang Sang Hyu Su Sa** — Doğum ayının her enerjiyi ne kadar artırdığını gösterir. Güç çubuğu 'ne kadar var'ı gösteriyorsa, bu tablo 'mevsimde mi'yi gösterir.",
              "**Gerçek güneş saati düzeltme detayları** — Kavram rehberlik belgesindedir, ancak **'sizin durumunuzda kaç dakika kaydırıldı'** her kişi için farklı bir değerdir, bu nedenle yalnızca raporda yer almaktadır."
            ]
          }
        ]
      },
      {
        "title": "Satın almadan önce bilmeniz gerekenler",
        "blocks": [
          {
            "p": "**Sunucu dosyaları saklamaz.** Ödeme onaylandığında, belge hemen oluşturulur ve gönderilir, sunucuda hiçbir şey bırakılmaz. Bu hizmetin girdi değerlerini saklamama ilkesi, ücretli akışta bile korunmaktadır."
          },
          {
            "p": "Bu nedenle, **lütfen ödemeden hemen sonra dosyayı kaydedin.** Aynı siparişle beş kez alabilirsiniz, ancak sonuç ekranından çıkarsanız ve girdi değerleri kaybolursa, yeniden oluşturulamaz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Raporlar ayrıca referans materyallerdir",
        "blocks": [
          {
            "p": "Sayfa sayısının artması, sonuçların daha kesin olduğu anlamına gelmez. Raporun eklediği, **aynı hesaplamanın temeli**dir, daha güçlü bir iddia değildir. Kader, sonuçların uygulayıcıya göre değişebileceği bir alandır ve bu hizmet yalnızca kurallara çevrilebilecek olanları hesaplar."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Duyuru",
    "title": "Duyurular",
    "summary": "Bu, kullanımı etkileyebilecek değişiklikleri bildirmek için bir yerdir.",
    "backLabel": "Başlangıca dön",
    "sections": []
  },
  "contact": {
    "eyebrow": "İletişim",
    "title": "Sorgular",
    "summary": "Bu, kullanım, iade, kişisel bilgi talepleri ve hata raporları hakkında sorgular için iletişim kanalınızdır, ayrıca iş bilgileri ile birlikte.",
    "backLabel": "Başlangıca dön",
    "sections": [
      {
        "title": "E-posta ile iletişim",
        "blocks": [
          {
            "p": "Lütfen sorgularınızı **{email}** adresine gönderin. 2 iş günü içinde yanıt vereceğiz. Ödeme ve iade sorguları için, daha hızlı onay için **sipariş numarasını veya ödeme için kullanılan e-posta adresini** ekleyin."
          },
          {
            "p": "Telefon sorguları {customerCenter} numarasından alınmaktadır."
          }
        ]
      },
      {
        "title": "Bu kanala neler gönderilebilir",
        "blocks": [
          {
            "ul": [
              "**Ödeme ve iade** — Eğer belge oluşturulmamışsa veya ödeme tutarı siparişle farklıysa, tam iade yapılacaktır. Koşullar [İade Politikası](/refund-policy) sayfasındadır.",
              "**Kişisel bilgi** — Görme, düzeltme ve silme taleplerini kabul ediyoruz. İşlem politikası [Gizlilik Politikası](/privacy) sayfasındadır.",
              "**Hesaplama hata raporu** — Eğer saju doğum haritası veya puanları garip görünüyorsa, lütfen bize bildirin. Doğum tarihi ve saatini girdiğiniz zamanı eklerseniz, aynı değerlerle yeniden hesaplayabiliriz."
            ]
          }
        ]
      },
      {
        "title": "İş bilgileri",
        "blocks": [
          {
            "ul": [
              "**İş adı** — {companyName}",
              "**Temsilci** — {representative}",
              "**İşletme kayıt numarası** — {businessNumber}",
              "**Posta siparişi işletme kayıt numarası** — {mailOrderNumber}",
              "**Adres** — {address}",
              "**Müşteri merkezi** — {customerCenter}",
              "**E-posta** — {email}",
              "**Kişisel bilgi koruma sorumlusunun adı** — {privacyOfficer}",
              "**Barındırma sağlayıcısı** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Sorgu e-postasında doğum tarihi ve saatinizi eklemenize gerek yoktur. Girdileri saklamıyoruz, bu nedenle daha sonra geri alamayız ve onaylanması gereken şey, sipariş numarası ile yeterlidir. Değerlerin kesinlikle gerekli olduğu durumlarda, örneğin bir hesaplama hata raporunda yalnızca o zaman ekleyin."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const TR_NOTICES = {
  "kindLabels": {
    "service": "Hizmet",
    "product": "Rapor",
    "engine": "Hesaplama kriterleri",
    "support": "Soru"
  },
  "intro": "Fiyatlar ve şartlar gibi kullanım koşullarını etkileyen değişiklikler, uygulanmadan önce burada yayınlanacaktır. Ekranın hızlanması gibi iç iyileştirmeler burada yayınlanmaz: burada görünen yalnızca bilmeniz gerekenlerdir.",
  "empty": {
    "title": "Hiçbir bildirim yayınlanmamıştır.",
    "body": "Size bildirilmesi gereken herhangi bir değişiklik olursa, burada yayınlanacaktır."
  },
  "effective": "Geçerli tarih: {date}",
  "pager": {
    "label": "Bildirim sayfası",
    "newer": "← En son",
    "older": "Önceki bildirimler →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Soru penceresi ve hizmet tanıtım sayfası açılmıştır.",
      "body": [
        "Soru, iade, kişisel bilgi talepleri ve hesaplama hatalarını bildirmek için tek bir pencere oluşturduk. Bunu ekranın altında 'Soru Sor' kısmında kontrol edebilirsiniz.",
        "Hesaplama hatası gibi görünen bir durumu bize bildirdiğinizde, girdiğiniz doğum tarihini ve saatini eklemeyi unutmayın. Girdileri kaydetmiyoruz, bu nedenle o değer olmadan yeniden hesaplama yapamayız."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Arapça ve Khmer ekranlarında rapor İngilizce olarak oluşturulacaktır.",
      "body": [
        "Eğer ekranı Arapça veya Khmer dilinde görüntülüyorsanız, satın aldığınız PDF raporu İngilizce olarak oluşturulacaktır. Bunun nedeni, aracın bu iki yazıyı henüz paragraflara formatlayamamış olmasıdır.",
        "Ekranı olduğu gibi görebilirsiniz ve raporda yazılı olan isim tam olarak girdiğiniz gibi olacaktır.",
        "Aynı bilgi, ödeme ekranında da önceden sağlanmaktadır. Bu araç bu yazıları desteklediğinde burada sizi bilgilendireceğiz."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Hesaplama kriterleri sonuçlarla birlikte verilecektir.",
      "body": [
        "Sonuç ekranı ve raporun altında, hesaplama kriterleri (örneğin, sajulink-natal-v1) belirtilmiştir. Girdi aynıysa, aynı kriterler altında her zaman aynı değer çıkacaktır.",
        "Myeongri'yi yorumlama kuralları değişirse ve puanlar farklılık gösterebilir ise, önce bu durumu ve geçerli tarihi burada yayınlayacağız. Bunun nedeni, daha önce aldığınız sonuç bağlantılarındaki sayıların değişebileceğidir.",
        "Mevcut kriter v10'dur ve ödeme hala hazırlık aşamasındadır."
      ]
    }
  }
} satisfies NoticeCopy;
