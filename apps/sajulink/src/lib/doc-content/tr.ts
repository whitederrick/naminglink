import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Türkçe — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const TR_DOCS = {
  "about": {
    "eyebrow": "Giriş",
    "title": "Saju-Link Girişi",
    "summary": "Bu, doğum tarihine ve saatine dayalı bir saju (dört sütun okuması) oluşturan ve sekiz karakterin ne anlama geldiğini açıklayan bir hizmettir. Hesaplanan ve hesaplanmayan şeyleri netleştirir.",
    "backLabel": "Ana Sayfaya Dön",
    "sections": [
      {
        "title": "Ne yapıyoruz?",
        "blocks": [
          {
            "p": "Saju-Link, **doğum tarihi ve saatine dayalı saju (dört sütun) grafiğini oluşturur ve sekiz karakterin ne anlama geldiğini gösterir**. Beş elementin gücünü ve gün ustasının gücünü okur ve ayrıca günün sütununa dayalı olarak bugünün şansını inceler."
          },
          {
            "p": "Ekranda gördüğünüz şey **ücretsizdir ve üyelik gerektirmez.** Ücretli ürün, ekranda gösterilmeyen değerleri içeren bir PDF belgesidir — güçlü bir gün ustası ile zayıf bir gün ustası arasında ayrım yapmanın temeli, Wang Sang Hyu Su Sa ve gerçek güneş zamanı için düzeltme detayları."
          }
        ]
      },
      {
        "title": "Neleri hesaplıyoruz?",
        "blocks": [
          {
            "p": "Saju, **manseyeok (Kore lunisolar takvimi)** kullanılarak oluşturulur. Doğum zamanı, doğum yerinin **gerçek güneş zamanına** düzeltilir — çünkü güneşin gerçek konumu, saat aynı zamanı gösterse bile bölgeye göre değişir."
          },
          {
            "p": "Puanlar yalnızca belirlenen kurallara göre verilir. On Tanrı, yerli dal ilişkileri ve destekleyici unsurlar gibi geleneksel 명리 (myeongri, kader çalışması) kavramları hesaplama kurallarına dönüştürülür ve **aynı girdi her zaman aynı değeri verir**. Kurallar değiştiğinde, önceki sonuçların değişmeden kalmasını sağlamak için geriye dönük testler yapılır."
          },
          {
            "p": "**Ekrandaki cümlelerde AI kullanılmamaktadır.** Ücretsiz ekranda görünen açıklamalar, hesaplama sonuçlarına ekli sabit ifadelerdir. **Ücretli raporlardaki yorumlar** yalnızca üretken AI kullanır ve yine de AI puan oluşturmaz — yalnızca motor tarafından sağlanan değerlere dayalı cümleler yazar."
          }
        ]
      },
      {
        "title": "Neleri söylemiyoruz?",
        "blocks": [
          {
            "ul": [
              "**Kehanet hizmeti vermiyoruz.** Kimseyle tanışmanız veya kaçınmanız gerektiğini yazmıyoruz. Bu, geleneksel 명리 perspektiflerini özetleyen bir referans materyaldir.",
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
            "p": "Detaylı hesaplama yöntemleri [Kullanıcı Kılavuzu](/guide) içinde yazılıdır. İş bilgileri ve iletişim detayları [Bize Ulaşın](/contact) kısmında bulunabilir."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Hesaplama Temeli",
    "title": "Hesaplamaların temeli nedir?",
    "summary": "Saju-Link tarafından kullanılan tüm kuralları açıklıyoruz. Ekranda görüntülenen sayıların nereden geldiğini, bugünün şansı için yapılan ayarlamaları, yerli dal ilişkisi tablosundan gelen puanları ve güçlü bir gün ustası ile zayıf bir gün ustası arasındaki sınır değerlerini kontrol edebilirsiniz.",
    "backLabel": "Ana Sayfaya Dön",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Burada yazılı değerler **hesaplama kodundan doğrudan okunur**. Elle metne aktarılmadıkları için, kurallar değiştiğinde, bu belgede de sayılar buna göre değişecektir."
          }
        ]
      }
    ]
  },
  "guide/natal-chart": {
    "eyebrow": "Hizmet Temeli",
    "title": "Saju Grafiği — Sekiz karakter nereden gelir?",
    "summary": "Doğum yılı, ayı, günü ve saati nasıl dört sütun ve sekiz karakter haline getirdiğini açıklar ve hangi karakterin sizi işaret ettiğini belirler. Ayrıca, doğum zamanını tam olarak bilmeden bile neden görülebileceğini tartışır.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Dört Sütun, Sekiz Karakter",
        "blocks": [
          {
            "p": "Saju (四柱) kelime anlamı olarak **dört sütun** demektir. Doğum yılı, ayı, günü ve saati her biri bir sütun olarak belirlenir ve her sütun için iki karakter yazılır. Böylece toplamda sekiz karakter olur ki buna **원국 (won-guk)** denir."
          },
          {
            "table": {
              "head": [
                "Sütun",
                "Nereden gelir?",
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
            "p": "Sekiz karakterin hepsi aynı ağırlığı taşımaz. **Doğum gününün heavenly stem'i**, özellikle gün sütununun üst karakteri, **kendimi** işaret eder. Buna **gün sütunu (日干)** denir."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju, doğum yılı, ayı, günü ve saati için iki karakter kullanılarak oluşturulan sekiz karakterden oluşur ve heavenly stems ile earthly branches ile temsil edilir. Burada, belirgin gün sütunu (日干) kendimi işaret eden karakterdir.",
            "labels": {
              "year": "Yıl Sütunu",
              "yearNote": "Kök · Burç İşareti",
              "month": "Ay Sütunu",
              "monthNote": "Mevsim · Güç",
              "day": "Gün Ustası",
              "dayNote": "Kendisi · Eş Sarayı",
              "hour": "Saat Ustası",
              "hourNote": "İleri Yaşlar · Kullanım",
              "stem": "Gök Daldır",
              "stemNote": "Gün Daldır = Kendisi",
              "branch": "Yeryüzü Daldır",
              "branchNote": "Gün Daldır = Eş Sarayı"
            }
          },
          {
            "p": "Bu hizmetin gösterdiği şeyler çoğunlukla bu tek karakterden türetilir — eğilimlerin yorumu, beş elementin gücü, şu anda gereken enerji ve bugünün okuması hepsi Gün Daldır'a dayalı olarak ölçülür. Kalan yedi karakter, 'Gün Daldır'ın bulunduğu ortamı' gösterir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Neden Doğum Günü?",
        "blocks": [
          {
            "p": "Yıl Daldır, o yıl doğan herkes için aynıdır ve Ay Daldır, o ay doğan herkes için aynıdır. Gün Daldır, gün değiştiğinde değişir ve geleneksel falcılık bu konumu Song Hanedanı'ndan beri Kendisi olarak değerlendirmiştir. Saat Daldır dahil edilirse, aynı günde doğanlar arasında bile farklılık gösterir."
          }
        ]
      },
      {
        "title": "Güneş Terimleriyle Bölünmüştür, Takvim Yılıyla Değil",
        "blocks": [
          {
            "p": "Bir saju yılı 1 Ocak'ta değişmez, aksine **Ipchun (yaklaşık 4 Şubat)**'da değişir. Ay da güneş terimlerine göre bölünür."
          },
          {
            "p": "Bu nedenle, **Ocak ve erken Şubat'ta doğanlar, önceki yılın Yıl Daldır'ını alır**. Burada burçlarla ilgili yaygın bir yanlış anlama ortaya çıkar. Aynı şey, bir ay takvimi doğum günü girdiğinizde de geçerlidir — bu, güneş takvimine geri dönüştürülür ve ardından güneş terimlerine göre bölünür."
          }
        ]
      },
      {
        "title": "Doğum Zamanını Bilmeden de Okuyabilirsiniz",
        "blocks": [
          {
            "p": "Eğer zamanı girmezseniz, okuma üç sütun ve altı karaktere dayalı olacaktır, Saat Ustası hariç. Eksik değerleri tahmin etmiyoruz — rastgele bir Saat Ustası atamak, beş elementin gücünü bozabilir ve potansiyel olarak doğru sonuçlar yerine yanlış sonuçlara yol açabilir."
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
            "p": "Sekiz karakterin beş element olarak değerlendirilmesi, [Beş Element Gücü ve Güçlü/Zayıf Gün Ustası](/guide/five-elements) bölümünde devam ederken, kalan karakterlerin Gün Daldır'a dayalı olarak okunma yöntemi [On Tanrı](/guide/ten-gods) bölümünde devam eder."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Beş Element",
    "title": "Beş Element Gücü ve Güçlü/Zayıf Gün Ustası",
    "summary": "Sekiz karakteri beş element olarak sayarak hangi enerjinin güçlü, hangisinin zayıf olduğunu görüyoruz. Gün Daldır'ın gücünü belirleyen eşik değerlerini (45%·35%) açıklıyoruz.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Sekiz Karakteri Beş Enerji Olarak Sayma",
        "blocks": [
          {
            "p": "On Gök Daldır ve on iki Yeryüzü Daldır, her biri **Beş Element (五行)**'den birine aittir — Ağaç (木), Ateş (火), Toprak (土), Metal (金), Su (水). Orijinal grafikteki karakterleri kendi elementlerine göre sayarak, hangi enerjinin güçlü, hangisinin zayıf olduğunu belirleyebiliriz."
          },
          {
            "p": "Ancak, sadece sayıları saymıyoruz. Ayrıca **doğum ayının o enerjiyi destekleyip desteklemediğini** de dikkate alıyoruz. Aynı karakter bile, mevsimiyle buluşup buluşmadığına bağlı olarak farklı güçlere sahip olabilir. Buna Ay İşareti (月令) denir ve beş aşamaya ayrılır: Wang (旺), Sang (相), Hyu (休), Su (囚), ve Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ekran ve Raporun Farkı",
        "blocks": [
          {
            "p": "Ücretsiz ekran sadece **Ay İşareti yansıtıldıktan sonraki gücü** gösterir. Ay İşareti öncesindeki değerler ve Wang, Sang, Hyu, Su ve Sa tablosu, ücretli raporda yer alır — bu, değerlendirmelerin nerede ayrıldığını doğrudan kontrol etmeniz için sağlanır."
          }
        ]
      },
      {
        "title": "Gün Daldır'ın Gücü — Güçlü ve Zayıf",
        "blocks": [
          {
            "p": "Beş elementin güçlerini saydıktan sonra, **Gün Daldır'ın güçlü mü zayıf mı olduğunu** değerlendiriyoruz. Kriter, Gün Daldır ile uyumlu enerjilerin oranıdır."
          },
          {
            "p": "Gün Daldır ile uyumlu enerjiler **İnsaniyet ve Arkadaşlık** — beni doğuran ve bana benzer olan enerjilerdir. Beş elementten ikisi olduğundan, eğer bir önyargı yoksa, bu oran {evenAllyRatio} civarında olacaktır. Bu sınırın üstü ve altı dengeli olarak değerlendirilir."
          },
          {
            "table": {
              "head": [
                "Gün Daldır ile Uyumlu Enerjilerin Oranı",
                "Değerlendirme",
                "Bu Ne Anlama Geliyor?"
              ],
              "rows": [
                [
                  "{strongThreshold} veya daha yüksek",
                  "Güçlü Gün Ustası (身强)",
                  "Gün Daldır'ı destekleyen enerjiler bol."
                ],
                [
                  "{weakThreshold} veya daha yüksek ve {strongThreshold} altında",
                  "Dengeli (中和)",
                  "Her iki yönde de sonuç çıkarmak zordur."
                ],
                [
                  "{weakThreshold} altında",
                  "Zayıf Gün Ustası (身弱)",
                  "Gün Daldır'ı destekleyen enerjiler zayıf."
                ]
              ]
            }
          },
          {
            "p": "Bu tablodaki sayılar metinden alınmamıştır, aksine **motorun doğrudan okumasıdır**. Kurallar değişirse, bu belge de değişecektir."
          }
        ]
      },
      {
        "title": "Güç Ne İyi Ne Kötüdür",
        "blocks": [
          {
            "p": "Güçlü olmak iyi, zayıf olmak kötü anlamına gelmez. Güçlü olduğunda, ileriye itme gücü vardır, ancak bir tarafa kayma eğilimi vardır; zayıf olduğunda, başkalarının gücünü ödünç almak daha kolaydır, ancak yalnız başına dayanırken kolayca yorulabilir. **Her iki durumda da gereken enerjiler farklıdır.**"
          },
          {
            "p": "'Gerekli enerji' belirlemek destekleyici elementtir ve bu [Destekleyici Element](/guide/yongsin) bölümünde devam eder."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Sekiz karakterin nasıl belirlendiği [Saju Orijinal Grafiği](/guide/natal-chart) bölümünde yer almaktadır. Bugünün Gün Ustası'nın bu güçle nasıl etkileşimde bulunduğu ise [Bugünün Okuması](/guide/today-fortune) bölümünde ele alınmaktadır."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Destekleyici Element",
    "title": "Destekleyici Element — Şu Anda Gerekli Enerji",
    "summary": "Eğer Gün Daldır güçlü ise, azaltılması gereken enerjiyi; eğer zayıf ise, desteklenmesi gereken enerjiyi dikkate alırız. Bu, o enerjiyi nasıl seçeceğinizi ve dengede olduğunda nasıl başa çıkacağınızı açıklar.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Beş Element Tek Başına Yeterli Değildir",
        "blocks": [
          {
            "p": "Beş elementin eşit dağılıp dağılmadığını ölçmenin yolları vardır. Ancak gerçekten gerekli olan **bu saju'da neyin eksik ve neyin fazla olduğudur**."
          },
          {
            "p": "Eşit dağıtılmış bir saju her zaman rahat değildir, eğik bir saju da her zaman zor değildir. Eğilimin yönü ve bunu hafifleten bir elementin olup olmadığı, kavşaktır."
          }
        ]
      },
      {
        "title": "Destekleyici Element — Fazla İse Azalt, Eksik İse Ekle",
        "blocks": [
          {
            "p": "Destekleyici element (用神) **bu kişinin şu anda ihtiyaç duyduğu enerjidir**. Bunu belirlemenin birkaç yöntemi vardır (azaltma, ekleme, hastalık ve uyum), ancak en yaygın olarak kullanılan yöntem **azaltmadır (抑扶)**. Eğer gün ustası güçlü ise, azaltılması gereken bir enerji gerektiğine inanılır; eğer zayıf ise, eklenmesi gereken bir enerji gereklidir."
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
                  "Güçlü Gün Ustası (身强)",
                  "Azaltılması Gereken Enerji — Gıda ve Zenginlik, Resmi Pozisyon",
                  "Üç"
                ],
                [
                  "Zayıf Gün Ustası (身弱)",
                  "Eklenmesi Gereken Enerji — Kaynak, Arkadaş",
                  "İki"
                ],
                [
                  "Dengeli (中和)",
                  "Azaltma ile kapatılamaz, dolayısıyla en ince enerji",
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
            "p": "Gün ustası tarafı **Kaynak ve Arkadaş** — beni doğuran enerji ve benim gibi olan enerji. Beşten ikisi dahil olduğundan, tam denge {evenAllyRatio} olacaktır. Genişlik bu {evenAllyRatio} değerinin üstünde ve altında ayarlanmıştır."
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
                  "Güçlü Gün Ustası"
                ],
                [
                  "{weakThreshold} veya daha fazla ve {strongThreshold}'den az",
                  "Dengeli"
                ],
                [
                  "{weakThreshold}'den az",
                  "Zayıf Gün Ustası"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dengeli 'Daha Az Kesin Yargıdır'",
        "blocks": [
          {
            "p": "Dengeli, azaltma ile kapatılamayacağı anlamına gelir. Bu durumda, iki en ince enerji sadece gerekli olarak kabul edilir. Sonuç ekranında, bu 'şu anda ince pozisyon' olarak belirtilir, kesin bir ifade yerine."
          }
        ]
      },
      {
        "title": "Güç, Karakter Sayısı Değildir",
        "blocks": [
          {
            "p": "Beş elementin gücünü hesaplarken, sekiz karakter olduğu gibi sayılmaz. Değerler, doğum anındaki ayın enerjisinin mevsimini (月令) ve yerli dallar içindeki gizli göksel dalları (地藏干) yansıtır."
          },
          {
            "p": "Yalnızca yüzeysel karakterleri saymak, aynı 木 karakterlerinin mevsime bağlı olarak tamamen farklı güçlere sahip olabileceğini gözden kaçırır. Bahar 木 ile Sonbahar 木, aynı karakter olmasına rağmen, farklı güçlere sahiptir."
          }
        ]
      },
      {
        "title": "Destekleyici Elementi Nerede Kullanmalıyım",
        "blocks": [
          {
            "p": "Belirlenen destekleyici element iki yerde kullanılır. Biri sonuç ekranındaki **'şu anda ihtiyaç duyulan enerji'**, diğeri ise [bugünün şansı](/guide/today-fortune) — bugünün enerjisinin destekleyici elementle uyumlu olup olmadığı, o gün puanı en çok etkileyen unsurdur."
          }
        ]
      },
      {
        "title": "Bu Basit Bir Yargıdır",
        "blocks": [
          {
            "p": "Gerçek kader analizi, destekleyici elementi belirlemek için oluşumu ve mevsim koşullarını (mevsimin sıcaklığı ve nemi) dikkate alır ve sonuçlar yönteme bağlı olarak değişebilir. Saju-Link yalnızca **güç değerleri ile ölçülebilen azaltmayı** kullanır. Bu, yalnızca kurallara dönüştürülebilenlerin kullanılma ilkesinden kaynaklanır, bu nedenle aynı girdi her zaman aynı yanıtı verir."
          },
          {
            "p": "Bunun yerine, sonuç ekranı aynı zamanda güçlü ve zayıf gün ustasını, şu anda ihtiyaç duyulan enerji ile birlikte **okuma materyali** olarak sunar. Bu, puanın temelini gizlememek içindir."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "On Tanrı",
    "title": "On Tanrı — Benim Saju'mdaki On Pozisyon",
    "summary": "Gün ustasına dayanarak, kalan karakterler on isme bölünür. Aynı zenginlik elementi olsalar bile, normal zenginlik ile yan zenginlik arasındaki ayrımın nedenlerini tartışır.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Gün Ustası Kişinin Kendisi",
        "blocks": [
          {
            "p": "Saju'nun sekiz karakteri arasında, **gün ustası** (doğum gününün göksel dalı) kişinin kendisini ifade eder. Kalan yedi karakter, o gün ustasının bulunduğu çevre olarak okunur."
          },
          {
            "p": "**On Tanrı** (十神), gün ustasının diğer karakterleri nasıl algıladığını gösteren on bölümdür. Beni besleyen enerji Kaynak, benim gibi olan enerji Arkadaş, doğurduğum enerji Gıda ve Zenginlik, beni baskılayan enerji Resmi Pozisyon ve baskı yaptığım enerji Zenginlik — bu beş dal, yin ve yang'a daha da bölünerek on oluşturur."
          }
        ]
      },
      {
        "title": "Kalan Yedi Karakterin Benim İçin Anlamı",
        "blocks": [
          {
            "p": "Gün ustası belirlendikten sonra, orijinal grafikte kalan karakterler her biri bir isim alır. Beni doğuran enerji, benim gibi olan enerji, doğurduğum enerji, beni baskılayan enerji ve baskı yaptığım enerji — bu beş dal, yin ve yang aracılığıyla **on**'a daha da bölünür. Bu, On Tanrı'dır."
          },
          {
            "p": "Böylece, On Tanrı başkalarıyla olan ilişkileri değil, **kendimdeki pozisyonları** ifade eder. Hangi pozisyonların kalın veya ince olduğu, benim eğilimlerimi ve yaşam şeklimi gösterir."
          }
        ]
      },
      {
        "title": "Üç Element Yerine On Tanrı Olarak Görme Nedeni",
        "blocks": [
          {
            "p": "Günün day stem'inin ilişkisini sadece beş elementin üç yönü (destekleyici, aynı ve karşıt) üzerinden görme yöntemi de vardır. Bu basit bir yöntemdir, ancak **yin ve yang kaybolur.** 甲 (yang ahşap) ve 乙 (yin ahşap) 甲 ile aynı hale gelir, bu da 'benzerlik' temsilidir ve karşıt ilişki tek bir puanda yön veya yin ve yang olmadan bir araya getirilir."
          },
          {
            "p": "Eş pozisyonu, Ten Gods açısından yin ve yang'a göre değerlendirilmelidir. Beş element üzerinden görülen unsurlar, Ten Gods üzerinden görülenlerle bir motor içinde karıştırıldığında, aynı iki karakter için iki standart olacaktır. Bu nedenle, bunu Ten Gods altında birleştiriyoruz."
          }
        ]
      },
      {
        "title": "Eş pozisyonu 정재 ve 정관'dır",
        "blocks": [
          {
            "p": "Geleneksel fal bakma yöntemi, eş pozisyonunu cinsiyete göre farklı görmektedir. Erkekler için bu **정재 (正財)**, kadınlar için ise **정관 (正官)**'dır. Aynı zenginlik unsuru olsalar bile, yalnızca yin ve yang'da uyumsuz olan 정재 eş pozisyonu olarak kabul edilirken, 편재 eş olarak değil, aktivite ve zenginlik açısından okunur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cinsiyet belirtmezseniz, bu pozisyon atlanır",
        "blocks": [
          {
            "p": "Bu, hangi tarafın, 정재 veya 정관, eş pozisyonu olarak kabul edileceğinin belirlenememesindendir. Eksik bir değeri doldurmak için tahminde bulunmak yerine, o birim olmadan kalan unsurları okuyoruz."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "Bugünün şansı",
    "title": "Bugünün şansı nasıl çıkıyor?",
    "summary": "Bugünün day stem'i, orijinal haritayla karşılaştırılarak puanlanır. Destekleyici unsurların on iki ilişkisi ve yerel dalların yedi ilişkisi, tüm yirmi unsur ve bunların ilgili eklemeleri ve çıkarmaları tam olarak açıklanır.",
    "backLabel": "Hesaplama temeli",
    "sections": [
      {
        "title": "Bugün, sekiz karakterle aynı şekilde de belirlenir",
        "blocks": [
          {
            "p": "Her günün kendi **일진 (日辰)** vardır. Orijinal haritanın gün döngüsünü belirleme yöntemini kullanarak, bugün de bir heavenly stem ve bir earthly branch ile ilişkilendirilmiştir. Bugünün şansı, bu iki karakterin orijinal harita ile karşılaştırılması hakkındadır."
          },
          {
            "p": "Temel puan **{baseScore} puandır**. Aşağıdaki unsurlar eklenir ve çıkarılır ve nihayetinde {clampLow} puan ile {clampHigh} puan arasında sınırlıdır — 0 puan veya 100 puan belirtilmez."
          }
        ]
      },
      {
        "title": "① Bugünün enerjisi ihtiyacım olan mı?",
        "blocks": [
          {
            "p": "Bu en önemli pozisyondur. Bugünün enerjisinin, [억부용신](/guide/yongsin) tarafından belirlenen 'şu anda gereken enerji' ile örtüşüp örtüşmediğini kontrol ediyoruz."
          },
          {
            "table": {
              "head": [
                "Bugünün enerjisi",
                "Ekleme/Çıkarma"
              ],
              "rows": [
                [
                  "Şu anda gereken enerji",
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
                  "Zaten taşan tarafa daha fazla itme yapar",
                  "{todayIsGisin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "기신'i '용신 hariç her şey' olarak düşünmeyin",
        "blocks": [
          {
            "p": "Bunu yaparsanız, hem 용신'i üreten enerji hem de 용신'i baskılayan enerji kötü hale gelir ve yukarıdaki tabloda son iki satır ayırt edilemez hale gelir. Sadece 억부'nun anlamına göre **karşıt yönde daha fazla iten** enerji 기신 olarak görülür."
          }
        ]
      },
      {
        "title": "② Bugünün heavenly stem'i ile day stem'i arasındaki ilişki",
        "blocks": [
          {
            "p": "Beş elementin destekleyici ve karşıt ilişkileri doğrudan day stem ile bugünün heavenly stem'i arasında uygulanır."
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
                  "Bugün ve ben aynı enerjiye sahibiz",
                  "{sameElement}"
                ],
                [
                  "Ben bugünü baskılarım",
                  "{selfControls}"
                ],
                [
                  "Ben bugünkü ile dışarı akıyorum",
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
        "title": "③ Bugünün earthly branch'i orijinal haritanın earthly branch'leri ile buluşur",
        "blocks": [
          {
            "p": "Bugünün earthly branch'i, orijinal haritanın earthly branch'leri ile karşılaştırılır. İlişki tablosu [십이지 관계](/guide/branches) içindedir."
          },
          {
            "table": {
              "head": [
                "İlişki",
                "Ekleme/Çıkarma"
              ],
              "rows": [
                [
                  "tam triad (三合)",
                  "{branchSamhap}"
                ],
                [
                  "altı-harmoni çifti (六合)",
                  "{branchYukhap}"
                ],
                [
                  "yarım triad (半合)",
                  "{branchBanhap}"
                ],
                [
                  "sessiz, kalıcı uyumsuzluk (怨嗔)",
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
            "p": "Birden fazla sütun olduğunda, birden fazla ilişki ortaya çıkar. Hepsi eklenir, ancak bu tüm öğe **±{branchMaxAbs} puan** ile sınırlıdır — bu, tek bir toprak dalı ilişkisinin tüm günü belirlemesini önlemek içindir."
          }
        ]
      },
      {
        "title": "④ Güce Dayalı Düzeltme",
        "blocks": [
          {
            "p": "Aynı enerjiye sahip olsalar bile, güçlü bir gün ustası ile zayıf bir gün ustası için anlam farklıdır. Bu nedenle, son bir ayarlama yapıyoruz."
          },
          {
            "table": {
              "head": [
                "Durum",
                "Düzeltme"
              ],
              "rows": [
                [
                  "Zayıf gün ustası ama bugün onları destekliyor",
                  "{weakTodayHelps}"
                ],
                [
                  "Güçlü gün ustası ama bugün yükü uygun şekilde azaltıyor",
                  "{strongTodayDrains}"
                ],
                [
                  "Güçlü gün ustası ama bugün desteği artırıyor",
                  "{strongTodayHelps}"
                ],
                [
                  "Zayıf gün ustası ama bugün yükü artırıyor",
                  "{weakTodayBurdens}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Notlara ve Alanlara Göre Puanlar",
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
            "p": "Zenginlik, aşk, kariyer ve sağlık alanlarının toplam puanı {overallShare} olarak miras alınırken, geri kalan kısım On Tanrılar ve bu alanlarla ilgili toprak dalı ilişkilerine göre bölünür. Bu nedenle, toplam puan aynı olsa bile, alanlara göre sayılar kişiden kişiye farklılık gösterir."
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
    "title": "Toprak Dalları İlişkileri — Kombinasyon, Çatışma ve Uyumsuzluk",
    "summary": "Bu, bugünün gün ustasının doğum haritası ile nasıl etkileşimde bulunduğunu gösteren bir ilişki tablosudur. Her kombinasyon, çatışma ve uyumsuzluğun ne olduğunu ve kaç puanları olduğunu ortaya koyar.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Toprak Dalları On İki Karakterdir",
        "blocks": [
          {
            "p": "On iki toprak dalı (十二支) şunlardır: 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Yaygın olarak bilinen burçlar — Fare, Öküz, Kaplan, Tavşan, Ejderha, Yılan, At, Koyun, Maymun, Horoz, Köpek, Domuz — bu on iki karakterden birine bağlıdır."
          },
          {
            "figure": "branch-wheel",
            "caption": "On iki karakter bir daire içinde düzenlendiğinde, ilişkiler net bir şekilde görünür. Çatışma (沖) her zaman karşı karşıya gelirken, altı-harmoni ve uyumsuzluk daha yakın çiftlerdir. Bu çizgiler metinde yazılmamıştır, ancak hesaplama kurallarından doğrudan türetilmiştir.",
            "labels": {
              "alt": "Altı-harmoni, çatışma ve uyumsuzluğu bağlayan çizgilerle daire içinde düzenlenmiş on iki toprak dalını gösteren bir diyagram.",
              "yukhap": "Altı-Harmoni",
              "chung": "Çatışma",
              "wonjin": "Uyumsuzluk",
              "rat": "Fare",
              "ox": "Öküz",
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
            "p": "Saju'da, dört sütunun her birinin birer yerel dalı vardır. **Bugünün okuması**, **günün dalı** ile orijinal grafiğin dört dalını aşağıdaki ilişki tablosunu kullanarak eşleştirerek belirlenir."
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
                  "Triad (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Üç karakter bir araya geldiğinde, bir tamamlayıcı elemental formasyon (局) oluştururlar. Bu, en güçlü kombinasyon olarak kabul edilir.",
                  "{scoreSamhap}"
                ],
                [
                  "Altı Uyumu (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Birbirini çeken çiftler. Bu, yalnızca iki karakterden oluştuğu için en yaygın kombinasyondur.",
                  "{scoreYukhap}"
                ],
                [
                  "Yarım Triad (半合)",
                  "Triad'dan bir kraliyet karakteri (子·酉·午·卯) içeren iki karakter",
                  "Bir karakterin formasyona merkezi olduğu yarım kombinasyon. Sadece iki karakterle tamamlayıcı elemental formasyon oluşturmaz, bu nedenle triad'dan daha düşüktür.",
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
                  "Özel bir ilişkiye sahip olmayan kombinasyonlar. Bu, bir referans noktası olarak hizmet eder.",
                  "{scoreNeutral}"
                ],
                [
                  "Sakin Uyumsuzluk (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Hoşlanmadıkları halde ayrılamayan çiftler. Yüzeyde sakin görünürler ancak uzun süreli kabul edilirler.",
                  "{scoreWonjin}"
                ],
                [
                  "Çatışma (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Baş başa çarpışan çiftler. Bunlar birbirine bakan altı çifttir.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Triad ve Yarım Triadlar",
        "blocks": [
          {
            "p": "Bir triad, üç karakterin de mevcut olmasını gerektirir. Orijinal grafikte dört yerel dal bulunduğundan, günün dalı ile bunların birleşmesi mümkündür ve bu durumda bir triad oluşur — o zaman {scoreSamhap} puanı alır. Eğer yalnızca iki karakter varsa, bu bir yarım triad olur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yarım Triadların Tanınması İçin Kraliyet Karakterleri Gerekir",
        "blocks": [
          {
            "p": "Her iki karakterin de aynı triad grubuna ait olduğu durumlarda yarım triad olarak sayılan bir yöntem de vardır. Bu, 申辰 gibi kombinasyonların yüksek puan almasını sağlar. Bu nedenle, bu hizmet yalnızca kraliyet karakterlerini (子·酉·午·卯) içeren yarım triadları tanır ve 申辰·巳丑·寅戌·亥未 gibi kombinasyonları geçerli saymaz."
          }
        ]
      },
      {
        "title": "Sakin Uyumsuzluğun Ayrılma Nedeni",
        "blocks": [
          {
            "p": "Sakin uyumsuzluk çiftleri, çatışmalar kadar sık görülür. Hem çatışma hem de kombinasyonları sayarsak, bu altı çift {scoreNeutral} puanında yer alır, bu nedenle ayrı bir şekilde yer alırlar."
          },
          {
            "p": "Çatışmalar, baş başa çarpışan ve belirgin bir şekilde sergilenen çiftlerdir, sakin uyumsuzluk ise ince bir şekilde hizalanmamıştır. Bu nedenle, çatışmalardan ({scoreChung}) daha yüksek ancak ilişki yok puanından ({scoreNeutral}) kesinlikle daha düşük olan {scoreWonjin} puanında yer alır."
          }
        ]
      },
      {
        "title": "Çatışmalar için de puanlar atanır",
        "blocks": [
          {
            "p": "En düşük çatışma skoru {scoreChung}. 0'a yakın bir değer vermemek kasıtlıdır. Geleneksel 명리 (myeongri)'de, bir çatışma 'son' değil, 'çarpışma'dır ve alt sınırda bir puan vermek, hizmetin ilişki hakkında kesin bir ifade verdiği anlamına gelir."
          },
          {
            "p": "{scoreChung} minimumu ve {scoreSamhap} maksimumu ile fark belirgin ama kesin değildir."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Burç",
    "title": "Saju'da Burç Nerede?",
    "summary": "Burç, doğduğunuz yılın yerel dalıdır. Bu, burcun takvim yılından değil, saju yılından alınmasından kaynaklanır ve Ocak veya Şubat'ın başında doğanların bir önceki yılın burcuna sahip olmasının nedenini açıklar.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Burç, doğduğunuz yılın yerel dalıdır.",
        "blocks": [
          {
            "p": "Saju, yıl, ay, gün ve saat olmak üzere dört sütundan oluşur; her sütunun bir göksel dalı ve bir yerel dalı vardır. Bunlar arasında, **yılın yerel dalı** veya 연지 (yıl dalı), burç olarak adlandırdığımız hayvandır."
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
        "title": "Biz takvim yılını değil, saju yılını kullanıyoruz.",
        "blocks": [
          {
            "p": "Burç değişiminin noktası, güneş takviminin 1 Ocak'ı veya Ay Yeni Yılı değildir. Saju'da yıl değişimi için standart **Ipchun**'dur. Bu nedenle, Ocak veya Şubat'ın başında doğanlar, takvimin gösterdiğinden farklı bir burca sahip olabilir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Burç için neden doğrudan sormuyoruz.",
        "blocks": [
          {
            "p": "Bu nedenle, giriş ekranında burç seçmeden sadece doğum tarihini soruyoruz. Saju motoru yılı hesapladığında, otomatik olarak Ipchun sınırına uyum sağlar. Eğer doğrudan seçilirse, erken Şubat'ta doğan biri, gerçek burcuyla uyuşmayan bir burç seçebilir."
          }
        ]
      },
      {
        "title": "Burç, saju'daki bir karakterdir.",
        "blocks": [
          {
            "p": "Sekiz karakter arasında, burçla ilişkili olan **bir 연지 (yıl dalı)**dır. Diğer yedi karakter — özellikle kendisini ifade eden gün dalı — burçla hiçbir ilişkisi yoktur."
          },
          {
            "p": "Aynı yıl doğan insanlar aynı burcu paylaşır. Bu nedenle, burçtan elde edilebilecek bilgi sadece sekiz karakterden biri kadardır. Bu, bu hizmetin burcu **ayrı veya önemli bir şekilde ele almamasının** nedenidir — 연지 (yıl dalı) diğer yerel dallar gibi güç ve bugünün 일진 (günlük şans) değerlendirmesi için hesaplanır."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yine de, burcu göstermenin nedeni.",
        "blocks": [
          {
            "p": "Bu, 명리 (myeongri) terminolojisini bilmeseniz bile anlamın anlaşıldığı tek pozisyondur. Burç, orijinal grafik ekranında 연지 (yıl dalı) ile birlikte not edildiğinde, diğer yedi karakterin okunması için bir ipucu haline gelir."
          }
        ]
      },
      {
        "title": "Doğum saatini bilmeseniz bile yıl dalı aynı kalır.",
        "blocks": [
          {
            "p": "Eğer saati girmezseniz, saat sütunu atlanır ve 오행 (beş element) gücü değişir. Ancak, **yıl dalı aynı kalır** — bu, doğduğunuz yıla bağlı olarak belirlenir."
          },
          {
            "p": "Bu nedenle, yıl dalından türetilen hikaye, zamanı bilmeyenler için bile değişmez. Tersine, bu, yalnızca burca dayanarak söylenebileceklerin sınırlı olduğu anlamına gelir; zaman dahil olsa da olmasa da."
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
            "p": "Saju'nun saat pili (時柱), güneşin konumuna göre belirlenir. Ancak, gördüğümüz saat, ülke genelinde tek bir standart zaman kullanır ve bu, güneşin gerçek konumuyla uyumsuzdur."
          },
          {
            "p": "Kore'nin standart zamanı 135° doğu boylamına dayanmaktadır. Seul'ün boylamı yaklaşık 127° olduğundan, batıda yaklaşık 8°'dir ve bu da güneşin zirveye ulaşmasını geciktirir — saat 12:00 olduğunda, Seul'deki güneş hala zirvesine ulaşmamıştır. Bu fark yaklaşık **32 dakika**dır."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 dakika saat pilini bir slot değiştirir",
        "blocks": [
          {
            "p": "Saju'daki zaman, iki saatlik birimlere bölünmüştür. Sınırda doğanlar, 32 dakikalık bir farkla saat pilinin tamamen değişmesiyle karşılaşacaklardır — bu nedenle, tam olarak bu sınırda olanlar için ayarlamalar gereklidir."
          }
        ]
      },
      {
        "title": "Neden nerede doğduğunuzu sorduğumuzun nedeni",
        "blocks": [
          {
            "p": "Eğer boylam farklıysa, ayarlama miktarı da farklı olacaktır. Seul merkezli ayarlamayı yurt dışında doğan birine uygularsanız, saat pili önemli ölçüde uyumsuz olacaktır. Bu nedenle, giriş ekranı doğum yerinizi seçmenizi ister ve hesaplamalar o şehrin boylamı ve standart zamanına göre yapılır. Şu anda listede {cityCount} yer bulunmaktadır."
          },
          {
            "p": "Aynı ülkede bile, önemli ölçüde farklı boylamlara sahip yerler (örneğin, Amerika Birleşik Devletleri, Rusya, Endonezya vb.) şehirler olarak ayrılmıştır. **15° boylam bir saat piline eşittir**."
          },
          {
            "p": "Eğer seçmezseniz, hesaplamalar Seul'a göre yapılacaktır. Çoğu doğum yurt içindedir, bu nedenle hata payı daha azdır, ancak yurt dışında doğduysanız, lütfen seçimi yapmayı unutmayın."
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
                  "Yaz saati uygulaması hayata geçirildi"
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
            "p": "Ayarlama -32 dakika olduğundan, saat 00:00 ile 00:32 arasında doğanlar gerçek güneş zamanında **önceki gün saat 11**'de olacaktır. Eğer sadece zaman geri ayarlanırsa ve tarih aynı kalırsa, gün pili (日柱) \"önceki gün saat 11\" olarak yazılacaktır."
          },
          {
            "p": "Saju-Link bu durumda tarihi de ayarlayacaktır. Gün pilinin üzerindeki karakter, kendimi gösteren gün dalıdır (日干), bu nedenle bu uyumsuzsa, yorumlamadaki neredeyse tüm öğeler uyumsuz olacaktır."
          }
        ]
      },
      {
        "title": "Zamanı bilmenize gerek yok",
        "blocks": [
          {
            "p": "Doğum zamanı isteğe bağlıdır. Eğer bilmiyorsanız, hesaplamalar saat pili olmadan yapılacak ve bu durum sonuç ekranında gösterilecektir. Bu, sekiz karakterden ikisinin eksik olduğu anlamına gelir, bu nedenle beş elementin güç ve zayıflık değerlendirmesini etkileyecektir, bu yüzden biliyorsanız, dahil etmek daha doğru olacaktır."
          },
          {
            "p": "Yıl dalı (띠) her zaman aynıdır — [çünkü sadece yıl dalına bakıyoruz](/guide/zodiac)."
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
            "p": "Saju-Link hesap oluşturmaz. İsim, e-posta veya telefon numarası toplamaz. Tek toplanan bilgi doğum tarihi ve (isteğe bağlı olarak) doğum saati, doğum yeri ve cinsiyet olup, bu bilgiler hesaplama tamamlandıktan sonra kalmaz."
          },
          {
            "p": "Sonuç ekranında gösterilecek bir başlık girmek için bir alan vardır, ancak bu **sadece görüntüleme amaçlıdır** ve hesaplamalarda kullanılmaz. Gerçek adınızı girmenize gerek yoktur."
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
            "p": "**#**'den sonra gelenler girdi değerleridir. Bu kısma **fragment** denir, bu bölüm **tarayıcı sunucuya göndermediği** bir bölümdür. Bu standart web davranışıdır ve bizim oluşturduğumuz bir kural değildir — aslında bir belgedeki bir konumu belirtmek için tasarlanmıştır, bu nedenle sunucunun bunu görmesine gerek yoktur."
          },
          {
            "p": "Diğer bir deyişle, sonuç bağlantısını açtığınızda, tarayıcı o değeri hesaplama talep etmek için okur ve sunucumuz hesaplama için kullanılacak değerleri alır, yanıtı döner ve ardından bunu unutur."
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
            "p": "Hesaplama kendisi sunucuda yapılır. Saju'yu oluşturmak için ay takvimi tablosuna ihtiyaç vardır ve bu tablo tarayıcıya gönderilecek kadar büyük değildir. Ancak, **talebi işledikten sonra, o değeri hiçbir yerde kullanmıyoruz.** Veritabanına eklemek için bir kod yoktur."
          },
          {
            "p": "İşletim için gerekli minimum kayıtlar tutulur — aynı kişinin kısa bir süre içinde çok fazla talep göndermesini önlemek için bir sayaç. Bu, doğum tarihini içermez ve erişim IP'si saklanmaz. Sadece tarih ile hashlenmiş bir değer sayılır ve bu değer gün değiştiğinde değişir."
          }
        ]
      },
      {
        "title": "Bilgi saklanmadığı için yapılamayan şeyler",
        "blocks": [
          {
            "p": "Açıkçası, bilgi saklamadığımız için vazgeçilen bazı şeyler vardır."
          },
          {
            "ul": [
              "**Geçmiş sonuçları geri alamazsınız.** Onları tekrar görüntülemek için bağlantıya sahip olmanız gerekir.",
              "**Aynı değerler yeniden hesaplanacaktır.** Önbellek yoktur. Ancak, tüm kurallar deterministiktir, bu nedenle [aynı girdi her zaman aynı değeri verir](/guide/natal-chart).",
              "**Yenileme reklam kapısını geri getirecektir.** Bunun nedeni, görüntüleme geçmişini bırakacak bir yer olmamasıdır."
            ]
          }
        ]
      },
      {
        "title": "Eğer bir satın alma yaparsanız",
        "blocks": [
          {
            "p": "Bir rapor satın aldığınızda, bir işlem kaydı tutulacaktır. Ödeme, yasal saklama sürelerine tabidir ve bir sipariş geçmişi olmadan, iadeler işlenemez. Ancak, bu aşamada, **saju hesaplaması için kullanılan doğum tarihi siparişle ilişkilendirilmeyecek** — ödeme onaylandıktan sonra PDF oluşturulurken tekrar talep edilecektir."
          },
          {
            "p": "Daha fazla bilgi için lütfen [Gizlilik Politikasına](/privacy) bakın."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Ücretli ürünler",
    "title": "Ücretli raporda neler var",
    "summary": "PDF'ye eklenenlerin ne olduğunu açıklığa kavuşturur, ekranı değiştirmeden. Değerler ve içerikler, gerçek ürün ayarlarından alınır.",
    "backLabel": "Hesaplama temeli",
    "sections": [
      {
        "title": "Ekranı değiştirmeden, yalnızca PDF'ye eklendi",
        "blocks": [
          {
            "p": "Saju hesaplama ve sonuç sorgulama **ücretsizdir**. Ekranda, orijinal şemayı, beş elementi, bugünün şansını ve bunların temelini görebilirsiniz; çünkü ücretli rapor oluşturulurken hiçbir şey atlanmamıştır."
          },
          {
            "p": "Raporun rolü, **ekranda mevcut olmayan katmanlar eklemektir**. Bu katmanlar uydurulmamıştır; zaten puanlama sürecinde hesaplanan ancak ekranda kullanılmayan değerlerdir."
          }
        ]
      },
      {
        "title": "Ömür boyu saju ve bu yılın şans raporu PDF'si — {priceDomestic}",
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
            "p": "İçindekiler tablosu, ürün açıklamasından doğrudan okunur. **Sayfa sayısı, gerçek belgeyle aynıdır** — ürün bilgi bildiriminde belirtilen değerdir."
          }
        ]
      },
      {
        "title": "Ekranda olmayanlar",
        "blocks": [
          {
            "p": "Ücretsiz ekran, orijinal şemayı, beş elementi ve bugünün şansını gösterir. Hesaplama sürecinde üretilen ancak ekranda gösterilmeyen üç değer vardır ve bunlar ücretli raporun bölümleridir."
          },
          {
            "ul": [
              "**Gün dalı kolaylık oranı** — Güçlü veya zayıf bir gün ustası yargısının nerede yapıldığını sayısal olarak gösterir. Yargı adı tek başına, bunun kenarda mı yoksa bol mu olduğunu göstermez.",
              "**Wang Sang Hyu Su Sa** — Doğum ayının her enerjiyi ne kadar artırdığını gösterir. Güç çubuğu 'ne kadar var'ı gösteriyorsa, bu tablo 'mevsiminde mi'yi gösterir.",
              "**Gerçek güneş zamanı düzeltme detayları** — Kavram rehber belgede bulunmaktadır, ancak **'sizin durumunuzda kaç dakika kaydırıldı'** her kişi için farklı bir değerdir, bu nedenle yalnızca raporda yer almaktadır."
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
        "title": "Raporlar aynı zamanda referans materyalleridir",
        "blocks": [
          {
            "p": "Sayfa sayısının artması, sonuçların daha kesin olduğu anlamına gelmez. Raporun eklediği, **aynı hesaplamanın temelleridir**, daha güçlü bir iddia değil. Kader, sonuçların uygulayıcıya göre değişebileceği bir alandır ve bu hizmet yalnızca kurallara çevrilebilecek olanı hesaplar."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Duyuru",
    "title": "Açıklamalar",
    "summary": "Bu, kullanımı etkileyebilecek değişiklikleri bildirmek için bir yerdir.",
    "backLabel": "Başlangıca dön",
    "sections": []
  },
  "contact": {
    "eyebrow": "İletişim",
    "title": "Soruşturma",
    "summary": "Bu, kullanım, iade, kişisel bilgi talepleri ve hata raporları hakkında soruşturma için bir kanaldır, ayrıca iş bilgileri ile birlikte.",
    "backLabel": "Başlangıca dön",
    "sections": [
      {
        "title": "E-posta ile iletişim",
        "blocks": [
          {
            "p": "Lütfen soruşturmanızı **{email}** adresine gönderin. 2 iş günü içinde yanıt vereceğiz. Ödeme ve iade talepleri için, daha hızlı onay için **sipariş numarasını veya ödeme için kullanılan e-postayı** ekleyin."
          },
          {
            "p": "Telefonla soruşturmalar {customerCenter} üzerinden alınmaktadır."
          }
        ]
      },
      {
        "title": "Bu kanala neler gönderilebilir",
        "blocks": [
          {
            "ul": [
              "**Ödeme ve iade** — Eğer belge oluşturulmamışsa veya ödeme tutarı siparişten farklıysa, tam bir iade yapılacaktır. Koşullar [İade Politikasında](/refund-policy) bulunmaktadır.",
              "**Kişisel bilgi** — Görme, düzeltme ve silme taleplerini kabul ediyoruz. İşleme politikası [Gizlilik Politikasında](/privacy) bulunmaktadır.",
              "**Hesaplama hata raporu** — Eğer saju orijinal şeması veya puanları garip görünüyorsa, lütfen bize bildirin. Doğum tarihi ve saatini girdiğiniz zamanı eklerseniz, aynı değerlerle yeniden hesaplayabiliriz."
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
              "**Kişisel bilgi koruma sorumlu** — {privacyOfficer}",
              "**Barındırma sağlayıcısı** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Soruşturma e-postasında doğum tarihi ve saatinizi eklemenize gerek yoktur. Girdileri saklamıyoruz, bu nedenle daha sonra geri alamayız ve onaylanması gereken şey, sipariş numarası ile yeterlidir. Değerlerin kesinlikle gerekli olduğu durumlarda, örneğin bir hesaplama hata raporunda yalnızca ekleyin."
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
  "intro": "Fiyatlar ve şartlar gibi kullanım koşullarını etkileyen değişiklikler, uygulanmadan önce burada yayınlanacaktır. Ekranın daha hızlı hale gelmesi gibi birçok iç iyileştirme var — burada sadece bilmeniz gerekenler not edilecektir.",
  "empty": {
    "title": "Hiçbir bildirim yayınlanmamıştır.",
    "body": "Size bildirilmesi gereken herhangi bir değişiklik olursa, burada yayınlanacaktır."
  },
  "effective": "Geçerli tarih {date}",
  "pager": {
    "label": "Bildirim sayfası",
    "newer": "← En son",
    "older": "Önceki bildirimler →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Soru penceresi ve hizmet tanıtım sayfası açılmıştır.",
      "body": [
        "Soru, iade, kişisel bilgi talepleri ve hesaplama hatalarını bildirmek için tek bir pencere oluşturduk. Bunu ekranın altında 'Soru Sor' bölümünde kontrol edebilirsiniz.",
        "Hesaplama hatası gibi görünen bir durumu bize bildirdiğinizde, girdiğiniz doğum tarihini ve saatini eklemeyi unutmayın. Girdileri kaydetmiyoruz, bu nedenle o değer olmadan yeniden hesaplama yapamayız."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Arapça ve Khmer ekranlarında rapor İngilizce olarak oluşturulacaktır.",
      "body": [
        "Ekranı Arapça veya Khmer dilinde görüntülüyorsanız, satın aldığınız PDF raporu İngilizce olarak oluşturulacaktır. Bunun nedeni, aracın henüz bu iki yazıyı paragraflara formatlayamamış olmasıdır.",
        "Ekranı olduğu gibi görebilirsiniz ve raporda yazılı olan isim tam olarak girdiğiniz gibi olacaktır.",
        "Aynı bilgi, ödeme ekranında da önceden sağlanmaktadır. Bu araç bu yazıları desteklediğinde burada sizi bilgilendireceğiz."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Hesaplama kriterleri sonuçlarla birlikte verilecektir.",
      "body": [
        "Sonuç ekranı ve raporun altında, hesaplama kriterleri (örn., sajulink-natal-v1) belirtilmiştir. Girdi aynıysa, aynı kriterler altında her zaman aynı değer çıkacaktır.",
        "명리 (myeongri) yorumlama kuralları değişirse ve puanlar farklılık gösterebilecekse, önce bu durumu ve geçerli tarihi burada yayınlayacağız. Bunun nedeni, daha önce aldığınız sonuç bağlantılarındaki sayıların değişebileceğidir.",
        "Mevcut kriter v10'dur ve ödeme hala hazırlık aşamasındadır."
      ]
    }
  }
} satisfies NoticeCopy;
