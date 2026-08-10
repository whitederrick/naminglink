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
