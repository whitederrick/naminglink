import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Türkçe — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const TR_DOCS = {
  "about": {
    "eyebrow": "Hakkında",
    "title": "Inyeon-Link Hakkında",
    "summary": "İki doğum haritasını Kore Saju geleneğinde karşılaştırıyoruz. İşte hesapladıklarımız ve iddia etmediğimiz şeyler.",
    "backLabel": "Ana Sayfa",
    "sections": [
      {
        "title": "Ne yapıyoruz",
        "blocks": [
          {
            "p": "Inyeon-Link, doğum tarihleri ve saatlerinden iki doğum haritası oluşturur ve **iki enerji setinin nasıl buluştuğunu gösterir.** Kendi haritanızı tek başına da okuyabilir ve hangi temperamentlerin size uygun olduğunu görebilirsiniz."
          },
          {
            "p": "Ekranda okuma **ücretsizdir ve hesap gerektirmez.** Ücretli öğeler, ekranın asla göstermediği sayıları taşıyan PDF raporlarıdır — element güçleri, on tanrı eşleşmeleri ve dört sütun arasındaki ilişkiler."
          }
        ]
      },
      {
        "title": "Ne hesaplıyoruz",
        "blocks": [
          {
            "p": "Haritalar, **Kore lunisolar takvimi**'nden oluşturulur ve doğum zamanı, doğum yeri için **gerçek güneş zamanı**'na düzeltilir — aynı saat, nerede doğduğunuza bağlı olarak farklı bir güneş konumu anlamına gelir."
          },
          {
            "p": "Puanlar yalnızca sabit kurallardan gelir. Geleneksel kavramlar — on tanrı, dal ilişkileri, destekleyici element — kurallar olarak ifade edilir, bu nedenle **aynı girdi her zaman aynı sonucu verir.** Bir kural değiştiğinde, eski okumaların hareket etmediğinden emin olmak için bir regresyon testi yaparız."
          },
          {
            "p": "**AI kullanılmamaktadır.** Ekrandaki her cümle, hesaplanan bir sonuca bağlı sabit metinlerdir."
          }
        ]
      },
      {
        "title": "İddia etmeyeceğimiz şeyler",
        "blocks": [
          {
            "ul": [
              "**Gelecek tahmin etmiyoruz.** Burada kimseyi takip etmeniz veya kaçınmanız için bir şey yok. Bu, bir gelenekten alınan bir referanstır.",
              "**Girdiğiniz bilgileri saklamıyoruz.** Doğum detayları hesaplama anında kullanılır ve asla yazılmaz; sonuç bağlantıları, bir tarayıcının sunucuya göndermediği URL'nin kısmında yaşar.",
              "**Bir puan, bir kişi hakkında bir hüküm değildir.** Düşük bir sayı, bir ilişkiyi geçersiz kılmaz."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Yöntem, [rehberlerde](/guide) ayrıntılı olarak açıklanmıştır. Şirket bilgileri ve bize nasıl ulaşacağınız [iletişim sayfasında](/contact) bulunmaktadır."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Hesaplama Temeli",
    "title": "Hesaplama Temeli Nedir?",
    "summary": "Inyeon-Link, kullandığı tüm kuralları ortaya koyar. Öğeleri ve ağırlıklarını, yer dalı ilişki tablosundan gelen puanları ve güçlü bir gün ustası ile zayıf bir gün ustası arasındaki eşiği ayırt eden değerleri kontrol edebilirsiniz — ekrandaki sayıların nereden geldiğini görebilirsiniz.",
    "backLabel": "Başlangıca Dön",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Burada yazılı değerler, **hesaplama kodundan doğrudan okunmuştur.** Manuel olarak metne aktarılmadıkları için, kurallar değişirse, bu belgede de sayılar değişecektir."
          }
        ]
      }
    ]
  },
  "guide/how-compatibility": {
    "eyebrow": "Hizmet Temeli",
    "title": "Saju Uyumluluğu Neye Bakar?",
    "summary": "Dört öğeyi ve bunların ağırlıklarını netleştirir ve neden bu dört öğenin seçildiğini açıklar. Ayrıca, doğum zamanını bilmeden bile hesaplamaların neden yapılabileceğini ele alır.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "İki Eksenin Hesaplanması ve Birleştirilmesi",
        "blocks": [
          {
            "p": "Eşleşme oranı iki daldan gelir. **Saju uyumluluğu**, her iki bireyin tam saju orijinal haritasına bakarken, **burç uyumluluğu** yalnızca doğum yılından bir yer dalını dikkate alır. Nihai değer, ikisinin ağırlıklı ortalaması alınarak elde edilir."
          },
          {
            "table": {
              "head": [
                "Eksen",
                "Neye Bakılır",
                "Ağırlık"
              ],
              "rows": [
                [
                  "Saju Uyumluluğu",
                  "Gün dalı, gün dalı ve beş element — dört öğe",
                  "{weightSaju}"
                ],
                [
                  "Burç Uyumluluğu",
                  "Yıl dalları arasındaki ilişki",
                  "{weightZodiac}"
                ]
              ]
            }
          },
          {
            "p": "Saju tarafı çok daha ağırdır çünkü kullanılan bilgi miktarı farklıdır. Saju, dört sütunun tamamını dikkate alırken, burç yalnızca bir karaktere bakar. Ancak, burç iki nedenle hariç tutulmaz — en sezgisel olarak anlaşılır öğedir ve **değerinin doğum zamanını bilmeden bile dalgalanmadığı tek eksendir**."
          }
        ]
      },
      {
        "title": "Saju Uyumluluğunun Dört Öğesi",
        "blocks": [
          {
            "p": "Saju tarafı daha da dört parçaya ayrılır. Her öğe, dikkate aldıkları şeylerin örtüşmemesini sağlamak için seçilmiştir."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju, doğum yılı, ayı, günü ve saati ile ilgili göksel dallar ve yer dallarından oluşan sekiz karakterden oluşur. Aşağıda bahsedilen gün dalı ve gün dalı, gün sütunundaki iki karakterdir.",
            "labels": {
              "year": "Yıl Sütunu",
              "yearNote": "Kök · Burç",
              "month": "Ay Sütunu",
              "monthNote": "Mevsim · Güç",
              "day": "Gün Sütunu",
              "dayNote": "Ben · Eş Sarayı",
              "hour": "Saat Sütunu",
              "hourNote": "Son Yıllar · Kullanım",
              "stem": "Göksel Dal",
              "stemNote": "Gün Dalı = Ben",
              "branch": "Dünya Dalı",
              "branchNote": "Gün Dalı = Eş Sarayı"
            }
          },
          {
            "table": {
              "head": [
                "Öğe",
                "Ne Olarak Değerlendirilir",
                "Ağırlık"
              ],
              "rows": [
                [
                  "Gün Gövdesi İlişkisi",
                  "İki kişinin gün gövdeleri (日干) arasındaki ilişki — On Tanrılar perspektifinden incelenir",
                  "{weightDayMaster}"
                ],
                [
                  "Beş Element Tamamlaması",
                  "Eşimin ihtiyaç duyduğu enerjiye sahip mi — mevcut durumda gereken destekleyici element açısından incelenir",
                  "{weightElementSupply}"
                ],
                [
                  "Eş Yıldızı",
                  "Eşimin gün gövdesi benim eş pozisyonumla örtüşüyor mu?",
                  "{weightSpouseStar}"
                ],
                [
                  "Gün Dalı İlişkisi",
                  "İki kişinin gün dalları (日支) bir kombinasyon mu yoksa bir çatışma mı?",
                  "{weightDayBranch}"
                ]
              ]
            }
          },
          {
            "p": "Gün dalı, gelenek bu dalı **eş sarayı** olarak değerlendirdiği için okunur. Dört sütundan, partneri işaret eden tek dal olduğu için uyumluluğun bakıldığı ilk yerdir."
          }
        ]
      },
      {
        "title": "Cinsiyet açıklanmadığında, eş elementi hariç tutulur",
        "blocks": [
          {
            "p": "Eş elementi hesaplama için cinsiyet bilgisi gerektirir. Gelenek, eşe işaret eden pozisyonu cinsiyete göre farklı okur. Eğer açıklanmazsa, bu öğe **hariç tutulacak** ve kalan üç öğenin ağırlıkları yeniden normalize edilecektir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "0 puan olarak değerlendirilmez",
        "blocks": [
          {
            "p": "Eksik pozisyonlar 0 puan olarak değerlendirilirse, puan cinsiyet açıklanmadığı için haksız yere düşürülecektir. Ağırlıkları yeniden normalize etmek bu sorunu önler."
          }
        ]
      },
      {
        "title": "Doğum zamanı bilinmeden hesaplamalar yapılabilir",
        "blocks": [
          {
            "p": "Doğum zamanı saat sütununu belirlemek için kullanılır. Bilinmiyorsa, hesaplamalar saat sütunu olmadan yapılacak ve bu durum sonuç ekranında belirtilecektir. Dört uyumluluk öğesi arasında saat sütunu için doğrudan bir girdi olmadığından, değerler önemli ölçüde dalgalanmayacaktır, ancak bu beş elementin dengesini etkiler."
          },
          {
            "p": "Eğer zamanı biliyorsanız, lütfen doğum yerini de seçin. Standart zaman gerçek güneş pozisyonundan farklıysa, olduğu gibi kullanmak saat sütununu yanlış hizalayabilir [(gerçek güneş zamanı düzeltmesi)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "Aynı girdi her zaman aynı değeri verir",
        "blocks": [
          {
            "p": "Tüm puanlar kurallara göre belirlenir. Yapay zeka kullanılmaz ve rastgele sayılar kullanılmaz. Bu nedenle, aynı iki doğum tarihini birden fazla kez girmek farklı sonuçlar vermez. Veri saklamayan bir hizmet olarak, önceki sonuçlar geri alınamaz, ancak **belirlenebilirlik** bunun telafisini sağlar."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kuralların değiştirilmesi versiyonu yükseltir",
        "blocks": [
          {
            "p": "Puanlama kuralları her değiştiğinde, motor versiyonu güncellenir. Versiyon, sonuç ekranının altında belirtilir ve şu anda görüntülediğiniz sayıları hesaplamak için hangi kuralların kullanıldığını ayırt etmenizi sağlar."
          }
        ]
      },
      {
        "title": "Bu sonuç ne değildir",
        "blocks": [
          {
            "p": "Bu, geleneğin perspektifine dayanan kurallardan hesaplanan bir **referans materyali**dir. Bilimsel bir tahmin değildir, iki birey arasındaki ilişki hakkında kesin bir ifade değildir. Bu nedenle, puan aralığı yaklaşık 45 puan minimum olarak ayarlanmıştır — hiçbir kombinasyon 0 puana yakın bir değer vermez."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "İlişki Tablosu",
    "title": "On İki Dünya Dalı — Kombinasyon, Çatışma, Uyumsuzluk",
    "summary": "Bu, hem gün dalı uyumluluğu hem de burç uyumluluğu için kullanılan bir ilişki tablosudur. Her kombinasyonun, çatışmanın ve uyumsuzluğun ne anlama geldiğini ve ilgili puanlarını tamamen açıklar.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Dünya dalları on iki karakterden oluşur",
        "blocks": [
          {
            "p": "On iki dünya dalı (十二支) şunlardır: 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. İyi bilinen burçlar bu on iki karakterle ilişkilidir."
          },
          {
            "figure": "branch-wheel",
            "caption": "On iki karakteri bir daire içinde düzenlemek ilişkileri net bir şekilde gösterir. Bir çatışma her zaman tam karşısında otururken, bir altı-harmoni çifti ve sessiz bir uyumsuzluk daha yakın komşulardır. Bu çizgiler doğrudan hesaplama kurallarından türetilmiştir, metinde yazılı değildir.",
            "labels": {
              "alt": "Altı-harmoni, çatışma ve uyumsuzluğu bağlayan çizgilerle daire içinde düzenlenmiş on iki dünya dalını gösteren bir diyagram.",
              "yukhap": "Altı-Harmoni",
              "chung": "Çatışma",
              "wonjin": "Uyumsuzluk",
              "rat": "Fare",
              "ox": "Öküz",
              "tiger": "Kaplan",
              "rabbit": "Tavşan",
              "dragon": "Ejderha",
              "snake": "Yılan",
              "horse": "At",
              "goat": "Keçi",
              "monkey": "Maymun",
              "rooster": "Horoz",
              "dog": "Köpek",
              "pig": "Domuz"
            }
          },
          {
            "p": "Saju'da, dört sütundan her birinin birer **yer dalı** vardır. Inyeon-Link, bunlar arasında **gün dalı** (eş palası) ve **yıl dalı** (zodyak hayvanı) kullanır. Her iki pozisyon, aşağıdaki ilişki tablosu kullanılarak değerlendirilir."
          }
        ]
      },
      {
        "title": "Tam İlişki Tablosu",
        "blocks": [
          {
            "table": {
              "caption": "En yüksek puana göre sıralanmıştır. Bunlar Inyeon-Link tarafından gerçekten kullanılan değerlerdir.",
              "head": [
                "İlişki",
                "Karşılık Gelen Çift",
                "Anlamı",
                "Puan"
              ],
              "rows": [
                [
                  "Kombinasyon (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Üç karakter bir araya geldiğinde, tam bir **guk** (局) oluştururlar. Bu, en güçlü kombinasyon olarak kabul edilir.",
                  "{scoreSamhap}"
                ],
                [
                  "Altı-Harmoni (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Birbirini çeken çiftler. Bu, uyumlulukta en yaygın kombinasyondur çünkü sadece iki karakterden oluşur.",
                  "{scoreYukhap}"
                ],
                [
                  "Yarım üçlü (半合)",
                  "Üçlüden (子·酉·午·卯) bir kraliyet dalı (王地) içeren iki karakter",
                  "Tam bir kombinasyon oluşturamayacak şekilde merkezdeki karakteri içeren yarım bir kombinasyon. Bu, tam bir üçlüden daha düşük bir seviyededir.",
                  "{scoreBanhap}"
                ],
                [
                  "Aynı yer dalı",
                  "子子 · 丑丑 …",
                  "Aynı olan karakterler. Bu, birbirine benzediği anlamına gelir, ancak çekim anlamına gelmez, bu yüzden ortada yer alır.",
                  "{scoreSame}"
                ],
                [
                  "Nötr",
                  "Üstte veya altta yer almayan çiftler",
                  "Özel bir ilişki içermeyen bir kombinasyon. Bu, referans noktasıdır.",
                  "{scoreNeutral}"
                ],
                [
                  "Sessiz uyumsuzluk (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Kızgınlık besleseler de ayrılamayan çiftler. Dışarıdan sessiz görünürler ama uzun süre devam ettikleri kabul edilir.",
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
        "title": "Tam üçlüler bu hizmette görünmez",
        "blocks": [
          {
            "p": "Tam bir üçlü oluşturmak için üç karakter gereklidir. Ancak, uyumluluk, iki kişinin yer dallarını **birer birer** eşleştirerek yapılandırıldığından, burada her zaman bir yarım üçlü görünür ve tam üçlü {scoreSamhap} puanları, her saju içindeki oluşumları incelemek için ayrılmıştır."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yarım üçlüler bir kraliyet dalı içermelidir",
        "blocks": [
          {
            "p": "Her iki karakterin aynı üçlü grubuna ait olması durumunda yarım üçlü olarak sayılan bir yöntem de vardır. Bu, 申辰 gibi üçlü olarak adlandırılması zor olan kombinasyonlar için bile yüksek puanlar elde edebilir. Bu nedenle, bu hizmet, yalnızca bir kraliyet dalı (王地) (子·酉·午·卯) içeren çiftler için yarım üçlüleri tanır ve kraliyet dalı içermeyen kombinasyonlar, 申辰·巳丑·寅戌·亥未 gibi üçlü olarak sayılmaz."
          }
        ]
      },
      {
        "title": "Sessiz uyumsuzluğun ayrılma nedeni",
        "blocks": [
          {
            "p": "Sessiz uyumsuzluk çiftleri, uyumlulukta çatışmalar kadar sık görülür. Eğer kombinasyonları çiftler ve çatışmalar olarak sayarsak, bu altı çift, nötr {scoreNeutral} puanlarının altında kalır, bu yüzden ayrı bir şekilde yer alır."
          },
          {
            "p": "Çatışmalar açık ve çarpıcıyken, sessiz uyumsuzluk ince bir uyumsuzluktur. Bu nedenle, çatışmalardan ({scoreChung}) daha yüksek ama nötrden ({scoreNeutral}) kesinlikle daha düşük olan {scoreWonjin} puanında yer alır."
          }
        ]
      },
      {
        "title": "Çatışmalara da puan verilir",
        "blocks": [
          {
            "p": "En düşük çatışma puanı {scoreChung}'dir. Amaç, 0'a yakın bir değer atamak değildir. Gelenekte bir çatışma 'son' değil, bir 'çarpışma' olarak kabul edilir ve düşük bir puan atamak, hizmetin ilişki hakkında kesin bir ifade yaptığı anlamına gelir."
          },
          {
            "p": "Minimum {scoreChung} ve maksimum {scoreSamhap} ile aralık açıktır, ancak kesin bir sonuç vermez."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodyak",
    "title": "Neden burç uyumu yıl dalını dikkate alıyor?",
    "summary": "Burç, doğum yılının yerel dalıdır. Bu, burcun takvim yılından ziyade saju yıl sütunundan türediğini açıklar ve burç uyumunun önemini netleştirir.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Burç, doğum yılının yerel dalıdır",
        "blocks": [
          {
            "p": "Saju, yıl, ay, gün ve saat olmak üzere dört sütundan oluşur ve her sütun bir göksel dal ve bir yerel dal içerir. **Yıl dalı**, burç işareti olarak adlandırdığımız hayvanı taşıyan dalıdır."
          },
          {
            "table": {
              "caption": "On İki Yerel Dal ve Burç",
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
                  "Koyun"
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
        "title": "Saju yılını, takvim yılını değil kullanıyoruz",
        "blocks": [
          {
            "p": "Burcun değiştiği nokta, ne güneş takviminin 1 Ocak'ı ne de Ay Yeni Yılı'dır. Saju'da yıl değişimi için standart **Ipchun**'dur. Bu nedenle, Ocak veya Şubat'ın başında doğanlar, takvimdekiyle farklı bir burç yılına sahip olabilir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Burç hakkında doğrudan neden sormuyoruz",
        "blocks": [
          {
            "p": "Bu nedenle, giriş ekranında burç sormadan sadece doğum tarihini topluyoruz. Saju motoru yıl dalını hesapladığında, Ipchun sınırı otomatik olarak ayarlanır. Eğer doğrudan seçerseniz, Şubat'ın başında doğan biri, gerçek burcuyla uyuşmayan bir burç seçebilir."
          }
        ]
      },
      {
        "title": "Burç uyumu yalnızca bir ilişkiyi dikkate alır",
        "blocks": [
          {
            "p": "Burç uyumu hesaplaması basittir. İki kişinin yıl dallarını karşılaştırarak ilişkinin uyumlu, çatışmalı veya sessiz bir uyumsuzluk olup olmadığını belirler ve bu puanı olduğu gibi kullanır. Tek bir öğe olduğu için ağırlık dağıtımına gerek yoktur."
          },
          {
            "p": "Her ilişkinin puanları [On İki Dal İlişki Tablosu](/guide/branches) içinde listelenmiştir. Gün dalı uyumu aynı tabloyu kullanır."
          }
        ]
      },
      {
        "title": "Ağırlık belirlemenin nedeni",
        "blocks": [
          {
            "p": "Burç uyumu, son eşleşme oranının {weightZodiac} kadarını oluşturur. Saju uyumu dört sütunu da dikkate alırken, burç yalnızca bir karakteri dikkate alır, bu nedenle eşit ağırlıklandırılamazlar."
          },
          {
            "p": "Ancak, dışlanmamasının iki nedeni vardır."
          },
          {
            "ul": [
              "**En sezgisel olarak anlaşılabilir öğedir**. Geleneğin kelime dağarcığını bilmeden bile, 'kaplan ve maymun çatışır' anlamlıdır.",
              "**Doğum saati bilinmediğinde bile dalgalanmayan tek eksendir**. Zamanı bilmiyorsanız, saat sütunu eksik olur ve beş elementin gücü değişir, ancak yıl dalı aynı kalır."
            ]
          }
        ]
      },
      {
        "title": "Burç uyumunu ayrıca ayrı olarak da görebilirsiniz",
        "blocks": [
          {
            "p": "Sonuç ekranında, hem saju uyumu hem de burç uyumunun puanlarını ayrı olarak gösteriyoruz. Eğer yalnızca son eşleşme oranı sunulursa, o sayının nereden geldiği belirsizdir. Eğer iki değer önemli ölçüde farklıysa, bu durum kendisi dikkate değer."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "On Tanrı",
    "title": "On Tanrı ve Eş Pozisyonu",
    "summary": "Her kişinin gün dalının birbirine göre ne olduğunu On Tanrılar aracılığıyla inceliyoruz. Doğrudan zenginlik ve dolaylı zenginliğin neden farklı okunduğunu açıklıyoruz, her ikisi de zenginlik olmasına rağmen.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Gün dalı, kişinin kendisidir",
        "blocks": [
          {
            "p": "Saju'nun sekiz karakteri arasında, **gün dalı** (doğum gününün göksel dalı) kişinin kendisini ifade eder. Kalan yedi karakter, o gün dalının yerleştirildiği çevreyi okumaktadır."
          },
          {
            "p": "**On Tanrı** (十神), gün dalının diğer karakterleri nasıl algıladığını on kategoriye ayırır. Beni besleyen **kaynak**, benimle aynı olan **eş**, ürettiğim **çıktı**, kontrol ettiğim **zenginlik** ve beni kontrol eden **otorite**dir — bu beş, kutuplulukla ayrılır ve on olur."
          }
        ]
      },
      {
        "title": "Her kişinin gün dalı birbirine göre nedir",
        "blocks": [
          {
            "p": "Bu, uyumluluğun ilk maddesidir. A'nın gün dalının B'nin gün dalını nasıl algıladığı belirlendikten sonra, B'nin A'yı algılaması da belirlenir, bu nedenle **sadece altı olasılık vardır**."
          },
          {
            "table": {
              "caption": "En yüksek puana göre sıralanmıştır",
              "head": [
                "Çift",
                "Yin/Yang",
                "İsim",
                "Anlam"
              ],
              "rows": [
                [
                  "Doğrudan Zenginlik ↔ Doğrudan Otorite",
                  "Zıt kutupluluk",
                  "Sıcak bağ (有情)",
                  "Bu, geleneksel olarak eşin pozisyonu olarak görülen çifttir. Yin ve yang uyumsuzdur, birbirini çeker."
                ],
                [
                  "Zarar Verici Memur ↔ Doğrudan Kaynak",
                  "Zıt kutupluluk",
                  "Zarar Verici Memur Mühür Takıyor (傷官佩印)",
                  "Bir taraf diğer tarafın yoğun enerjisini sarar."
                ],
                [
                  "Arkadaş ↔ Arkadaş",
                  "Aynı kutupluluk",
                  "Eşit",
                  "Birbirlerine benzerler ve eşittirler, ancak birbirlerini zorlamazlar."
                ],
                [
                  "Rakip ↔ Rakip",
                  "Zıt kutupluluk",
                  "Rekabet",
                  "Birbirlerine çekilirler ama aynı pozisyon için rekabet ederler."
                ],
                [
                  "Dolaylı Zenginlik ↔ Dolaylı Otorite",
                  "Aynı kutupluluk",
                  "Soğuk bağ (無情)",
                  "Uyarım büyük, ama yük de ağırdır."
                ],
                [
                  "Yiyen Tanrı ↔ Dolaylı Kaynak",
                  "Aynı kutupluluk",
                  "Baykuş yıldızı yiyeceği çalar (梟神奪食)",
                  "Verilen enerji karşı taraf tarafından alınır, akışı engeller."
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yin ve Yang bir kavşakta",
        "blocks": [
          {
            "p": "Yin ve yangın uyumsuz olduğu taraf (Doğru Zenginlik, Doğru Memur, Doğru Arkadaş) duygusaldır, aynı taraf (Kaynak, Memur, Arkadaş) ise duygusuzdur, bu da On Tanrı'nın doğru ve yan tarafını ayıran ilkedir."
          }
        ]
      },
      {
        "title": "Üç element yerine On Tanrılarla bakmanın nedeni",
        "blocks": [
          {
            "p": "Gün dalının üç elementle olan ilişkisini görmenin bir yöntemi vardır (karşılıklı üretim, benzerlik, karşılıklı aşma). Bu basittir, ancak **yin ve yang kaybolur.** 甲 (yang ağaç) ve 乙 (yin ağaç) aynı 'benzerlik' haline gelir, 甲 ve 甲 gibi, karşılıklı aşma tek bir puana sıkıştırılır, yönsüz veya yin ve yang olmadan."
          },
          {
            "p": "Eş pozisyonu On Tanrılar açısından değerlendirilmelidir. Beş element tarafından görülen öğeler ile On Tanrılar tarafından görülen öğeler bir motor içinde karıştırılırsa, aynı iki karakter için iki standart olacaktır. Bu nedenle, On Tanrılar ile birleştiriyoruz."
          }
        ]
      },
      {
        "title": "Eş pozisyonu Doğru Zenginlik ve Doğru Memurdur",
        "blocks": [
          {
            "p": "Gelenekte, hangi On Tanrı'nın eşi temsil ettiği cinsiyete göre değişir."
          },
          {
            "table": {
              "head": [
                "Cinsiyet",
                "Eş Pozisyonu",
                "Karşılık Gelen Pozisyon"
              ],
              "rows": [
                [
                  "Erkek",
                  "Doğru Zenginlik (正財)",
                  "Dolaylı Zenginlik (偏財)"
                ],
                [
                  "Kadın",
                  "Doğru Otorite (正官)",
                  "Dolaylı Otorite (偏官)"
                ]
              ]
            }
          },
          {
            "p": "Aynı kaynak olsalar bile, yalnızca duygusal **Doğru Zenginlik** eş pozisyon olarak kabul edilirken, Kaynak aktivite ve zenginlik doğası olarak okunur. Bu nedenle, Doğru Zenginlik ve Doğru Memur 2 puan olarak sayılırken, Kaynak ve Memur 1 puan olarak sayılır ve her iki yön de toplanır — eğer her ikisi de eş pozisyon olarak görülüyorsa, bu en yüksek olanıdır."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cinsiyet açıklanmıyorsa, bu öğeyi atlayın",
        "blocks": [
          {
            "p": "Karar verilemeyen bir öğe 0 puan olarak ayarlandığında, bu haksız bir düşük puanla sonuçlanır. Öğeyi atladıktan sonra kalan ağırlık tekrar normalize edilir [(öğe ve ağırlık)](/guide/how-compatibility)."
          }
        ]
      },
      {
        "title": "İlişkinin şeklini de gösteriyoruz",
        "blocks": [
          {
            "p": "Puanın yanı sıra, sonuç ekranında gün dalı çiftinin **hangi şekli** olduğunu tanımlıyoruz. Benzer pozisyonlar mı, bir taraf diğerini mi destekliyor, yoksa bir taraf mı baskı altında — destekleyici veya baskılayıcı bir ilişki olup olmadığını belirtiriz ve hangi tarafın o pozisyonda olduğunu netleştiririz."
          },
          {
            "p": "Eğer yalnızca bir puan sunulursa, 'peki ne olacak' sorusunu bırakır. Şekil bir puan değil, okunacak bir şeydir ve düşük puanlı çiftlerin bile yorumlanacak bir şeyi vardır."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Beş element",
    "title": "Destekleyici Element — Şu anda gereken enerji",
    "summary": "Beş elementi 'iki seçtiler mi' olarak değil, 'karşı tarafın ihtiyacım olanı var mı' olarak görüyoruz. Ayrıca, güçlü bir gün ustası ile zayıf bir gün ustasını ayıran sınır değerini de açıklıyoruz.",
    "backLabel": "Hesaplama temeli",
    "sections": [
      {
        "title": "Beş elementin 'dengeli' olup olmadığı bir uyum sorusu değildir",
        "blocks": [
          {
            "p": "İki kişinin beş elementini birleştirerek beş enerjinin eşit dağıtılıp dağıtılmadığını ölçme yöntemi vardır. Ancak, uyum sorusu bu değildir. **Karşı tarafın ihtiyacım olanı var mı?**"
          },
          {
            "p": "Denge derecesi simetriktir, ancak tamamlayıcılık doğası gereği asimetriktir. Çünkü A'nın ihtiyacı, B'nin ihtiyacından farklıdır. Bu nedenle, her tarafı ayrı ayrı ölçeriz ve ortalama alırız — çünkü bu bir ortalama, toplam puan simetrik kalır."
          }
        ]
      },
      {
        "title": "Destekleyici Element — Aşırıysa azalt, yetersizse ekle",
        "blocks": [
          {
            "p": "Destekleyici Element (用神) 'bu kişinin şu anda ihtiyaç duyduğu enerji'dir. Bunu belirlemenin birkaç yöntemi vardır (baskılama, destekleme, hastalık ve iletişim), ancak kurallara dönüştürülebilir ve en yaygın olarak kullanılanı **baskılama (抑扶)**dır. Eğer gün ustası güçlü ise, azaltılması gereken enerji gerektiği görülür; zayıf ise, eklenmesi gereken enerji gereklidir."
          },
          {
            "table": {
              "head": [
                "Yargı",
                "Ne gereklidir",
                "Kaç tane"
              ],
              "rows": [
                [
                  "Güçlü gün ustası (身强)",
                  "Azaltıcı enerji — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Üç"
                ],
                [
                  "Zayıf gün ustası (身弱)",
                  "Ekleyici enerji — 印星 (in-seong) · 比劫 (bi-gyeob)",
                  "İki"
                ],
                [
                  "Dengeli (中和)",
                  "Destekleyici elementle kapatılamaz, bu yüzden en ince enerjidir",
                  "İki"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Güç ve zayıflık için eşik değerleri",
        "blocks": [
          {
            "p": "Gün dalı tarafı **印星 ve 比劫** — bana hayat veren enerji ve benimle benzer enerji. Beşten iki olduğu için, enerji tamamen dengelendiğinde, {evenAllyRatio} olur. Bu değerin üstünde ve altında bir aralık belirlenir."
          },
          {
            "table": {
              "caption": "Toplam güçteki müttefiklerin oranı (印星 + 比劫)",
              "head": [
                "Oran",
                "Yargı"
              ],
              "rows": [
                [
                  "{strongThreshold} veya daha fazla",
                  "Güçlü gün ustası"
                ],
                [
                  "{weakThreshold} veya daha fazla ve {strongThreshold} 'dan az",
                  "Dengeli"
                ],
                [
                  "{weakThreshold}'dan az",
                  "Zayıf gün ustası"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Denge 'daha az kesin bir yargıdır'",
        "blocks": [
          {
            "p": "Denge, destekleyici elementle kapatılamayacağını ifade eder. Bu durumda, iki en ince enerjiyi gerekli olarak görürüz. Sonuç ekranında, bu kesin bir ifade yerine 'şu anda ince bir pozisyonda' olarak belirtilir."
          }
        ]
      },
      {
        "title": "Güç, karakter sayısı değildir",
        "blocks": [
          {
            "p": "Beş elementin gücünü hesaplarken, yalnızca sekiz karakteri göründükleri gibi saymayız. Doğal dalların içinde gizli olan göksel dalları (地藏干) ve doğduğunuz ayın enerji mevsimini (月令) yansıtan bir değer kullanırız."
          },
          {
            "p": "Yüzey karakterlerini yalnızca sayarsak, iki karakterin de 木 olmasının mevsime bağlı olarak tamamen farklı güçlere sahip olabileceğini gözden kaçırırız. İlkbaharın 木 'ı ile sonbaharın 木 'ı, aynı karakter olmalarına rağmen farklı güçlere sahiptir."
          }
        ]
      },
      {
        "title": "Doldurma derecesini puanlama",
        "blocks": [
          {
            "p": "Karşı tarafın gücündeki destekleyici elementimin oranına bakıyoruz. Ancak, bu oranı doğrudan kullanmıyoruz, **beklentiyi destekleyici elementin büyüklüğüne bölüyoruz.** Güçlü olduğunda, destekleyici element üçtür (beklenti %60), zayıf olduğunda ise ikidir (beklenti %40), bu nedenle oranı doğrudan kullanmak, güçlü bir kişinin her zaman daha yüksek bir puan alması anlamına gelir."
          },
          {
            "p": "Beklenen seviyeye kadar doldurulursa, yaklaşık 78 puan elde edilir ve çok daha fazla doldurulursa 100 puana ulaşır, eğer önemli ölçüde eksikse 55 puana doğru gider. Burada da alt sınır 0 olarak belirlenmemiştir."
          }
        ]
      },
      {
        "title": "Bu ön bir yargıdır",
        "blocks": [
          {
            "p": "Gerçek saju analizi, destekleyici elementi belirlemek için oluşumu ve mevsim iklimini (mevsimin sıcaklığı ve nemi) dikkate alır ve sonuçlar kullanılan yönteme bağlı olarak değişebilir. Inyeon-Link yalnızca **güç değerleri** ile ölçülebilen destekleyici elementleri kullanır. Bu, yalnızca kurallara dönüştürülebilenlerin kullanılma ilkesinden kaynaklanmaktadır, bu nedenle aynı girdi her zaman aynı yanıtı verir."
          },
          {
            "p": "Bunun yerine, sonuç ekranı ayrıca her kişinin gücünü ve zayıflığını, şu anda gereken enerji ile birlikte **okuma materyali** olarak sunar. Bu, puanın temelini gizlemekten kaçınmak içindir."
          }
        ]
      }
    ]
  },
  "guide/affinity": {
    "eyebrow": "Standartlarımız",
    "title": "Inyeon’in Eşleşmesi — Toplam puan vermeme nedeni",
    "summary": "Bir kişinin verilerini alırken rakip pozisyonunu boş bırakıyoruz ve o pozisyona girebilecek tüm olası değerleri bu pozisyona yerleştiriyoruz. Bu şekilde elde edilen tür için toplam puan eklememe nedenini açıklıyoruz.",
    "backLabel": "Hesaplama temeli",
    "sections": [
      {
        "title": "Rakip pozisyonunu boş bırakırken hesaplamalar yapılır",
        "blocks": [
          {
            "p": "Uyumluluk puanları iki kişinin eşleştirilmesiyle hesaplanır. **Inyeon’in Eşleşmesi** yalnızca bir kişinin verilerini alırken rakip pozisyonunu boş bırakır ve o pozisyona girebilecek tüm olası değerleri test eder. Bu, uyumluluk motorunu tersine çalıştırmak gibidir."
          },
          {
            "p": "Bu nedenle, rakibin doğum tarihini bilmek gerekli değildir. Henüz tanışmadığımız biri hakkında, 'Benim için hangi tür eşleşme profili uygundur?' diyebiliriz."
          }
        ]
      },
      {
        "title": "Milyonlarca kombinasyon çalıştırmıyoruz",
        "blocks": [
          {
            "p": "Saju'daki uyumluluk puanı dört öğeden oluşur ve **her bir öğe incelediği şeyde örtüşmez.**"
          },
          {
            "table": {
              "head": [
                "Öğe",
                "İnceleme ekseni nedir",
                "Durum sayısı"
              ],
              "rows": [
                [
                  "Gün dalı ilişkisi · Eşsel doğa",
                  "Her iki kişinin gün dalları — göksel dallar",
                  "10"
                ],
                [
                  "Beş element tamamlama",
                  "Benim destekleyici elementim ve rakibin beş element gücü",
                  "5"
                ],
                [
                  "gün dalı ilişkisi",
                  "iki kişinin gün dalları",
                  "12"
                ],
                [
                  "zodyak ilişkisi",
                  "iki kişinin yıl dalları",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Değerler öğeler arasında değişim yapmadığı için, **her dal için en yüksek noktayı bulmak genel en yüksek nokta olacaktır.** Doğum tarihinin tüm kombinasyonlarını kontrol etmeye gerek yoktur — sadece on göksel dalı, on iki yerel dalı ve beş elementi ayarlamak yeterlidir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Aynı kurallar geçerlidir",
        "blocks": [
          {
            "p": "Burada yazılı puanlar doğrudan uyumluluk motorundan alınmıştır. Yeni kurallar oluşturulmadığı için, burada en üstte çıkan tür, gerçek uyumlulukta da o öğe için en yüksek puana sahip olacaktır. Eğer uyumluluk kuralları değiştirilirse, bu ekran da buna uyacaktır."
          }
        ]
      },
      {
        "title": "Toplam puan verilmez",
        "blocks": [
          {
            "p": "Bu ekran üzerindeki en önemli karardır. Her dal için en yüksek puanları toplamak 'mükemmel eşleşme' gibi görünebilir, ancak o kişi **gerçekte var olmayabilir.**"
          },
          {
            "p": "Gerçek kişilerde, gün ustası ve beş element ayrı çalışmaz. 甲木 ile doğan bir kişi genellikle güçlü bir 木 enerjisine de sahiptir. Dalları ayrı ayrı sayma yöntemi bu ilişkiyi göz ardı eder, bu nedenle her dal için en yüksek puanları birleştirerek elde edilen değer, gerçekte var olmayan bir kombinasyon olur."
          },
          {
            "p": "Bu nedenle, ekran yalnızca **öğe puanlarını** gösterir ve toplam puan sağlamaz. Toplam puan, diğer kişinin doğum tarihini alarak [saju uyumluluğu](/compatibility) ile hesaplanacaktır."
          }
        ]
      },
      {
        "title": "'eşleşme türlerini' nasıl okuyacağınız",
        "blocks": [
          {
            "p": "Sonuç, 'bu türde bir kişiyle karşılaşırsanız, bu öğe yüksek puan alacaktır' anlamına gelir. Bu, bir kişiyi seçme kriteri değil, kendimi anlama açısından bir bakış açısıdır."
          },
          {
            "p": "Belirli türlerin yüksek puan almasının nedenleri de madde madde belirtilmiştir — gün ustasının uygun bir pozisyonda olup olmadığı veya o kişinin şu anda ihtiyacım olan enerjiyi taşıyıp taşımadığı."
          }
        ]
      },
      {
        "title": "Doğrulama aracı",
        "blocks": [
          {
            "p": "Aklınızdaki kişinin o türe uyup uymadığını merak edebilirsiniz. Sonuç ekranındaki doğrulama aracına doğum tarihlerini girerek, onların gün ustası, gün dalı ve yıl dalı hakkında bilgi alacaksınız. Girdiğiniz değerler bu aşamada kaydedilmez [(kaydedilmez)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Zaman",
    "title": "Doğum zamanını gerçek güneş zamanına çevirin",
    "summary": "Standart zaman ve güneşin gerçek konumu farklıdır. Doğum yerinin boylamına göre zaman düzeltilmelidir, böylece zaman sütununun doğru olduğu açıklanır.",
    "backLabel": "Hesaplama temeli",
    "sections": [
      {
        "title": "Saatteki zaman ile güneşin zamanı farklıdır",
        "blocks": [
          {
            "p": "Saju'nun zaman sütunu (時柱) güneşin konumuna göre belirlenir. Ancak, gördüğümüz saat, ülke genelinde tek bir standart zaman kullanır, bu da güneşin gerçek konumuyla bir tutarsızlık yaratır."
          },
          {
            "p": "Kore'nin standart zamanı 135° doğu boylamına dayanmaktadır. Seul'ün boylamı yaklaşık 127° olduğundan, bu yaklaşık 8° batıda olup, güneşin zirveye ulaşmasını geciktirir — saat 12:00 olduğunda, Seul'deki güneş henüz zirveye ulaşmamıştır. Bu fark yaklaşık **32 dakika**dır."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 dakika zaman sütununu bir slot değiştirir",
        "blocks": [
          {
            "p": "Saju'daki zaman iki saatlik birimlere bölünmüştür. Sınırda doğanlar, 32 dakikalık bir farkla zaman sütunlarının tamamen değişmesiyle karşılaşacaklardır — bu düzeltme, tam olarak bu sınırda kalanlar için gereklidir."
          }
        ]
      },
      {
        "title": "Neden doğum yerini soruyoruz",
        "blocks": [
          {
            "p": "Boylam farklıysa, düzeltme miktarı da farklı olacaktır. Seul merkezli düzeltmeyi yurt dışında doğan birine uygulamak, zaman sütununda önemli bir tutarsızlığa yol açacaktır. Bu nedenle, giriş ekranı doğum yerinizi seçmenizi gerektirir ve hesaplama o şehrin boylamı ve standart zamanına dayanmaktadır. Şu anda listede {cityCount} yer bulunmaktadır."
          },
          {
            "p": "Aynı ülke içinde (örneğin ABD, Rusya, Endonezya vb.) boylamın çok değiştiği yerlerde, şehirler ayrılmıştır. **15° boylam bir zaman sütunu slotuna eşittir.**"
          },
          {
            "p": "Seçmezseniz, hesaplama Seul'a dayalı olacaktır. Çoğu doğum yurt içinde olduğundan, bu hata olasılığını azaltır, ancak yurt dışında doğduysanız lütfen seçtiğinizden emin olun."
          }
        ]
      },
      {
        "title": "Standart zaman geçmişte birkaç kez değişti",
        "blocks": [
          {
            "p": "Düzeltmenin basitçe 'boylam farkı ÷ 15° × 60 dakika' olarak hesaplanamamasının bir nedeni vardır. Standart zaman kendisi farklı dönemlerde değişmiştir."
          },
          {
            "table": {
              "caption": "Kore'deki standart zaman değişiklikleri — bu dönemde doğanlar basit hesaplamalarla uyumsuzluk yaşayacaklar",
              "head": [
                "Dönem",
                "Ne farklıydı"
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
            "p": "Inyeon-Link, standart meridyen için sabit bir değer kullanmaz, ancak doğum yerinin **IANA zaman dilimi** bilgisine dayanarak o dönemde gerçekten kullanılan standart zamanı hesaplar. Yaz saati uygulaması ve geçmiş standart zamanlar otomatik olarak yansıtılır."
          }
        ]
      },
      {
        "title": "Gece yarısından hemen sonra doğanlar tarih de dikkate alınır",
        "blocks": [
          {
            "p": "Düzeltme -32 dakika olduğundan, saatle 00:00 ile 00:32 arasında doğanlar gerçek güneş zamanında **önceki gün 23:00**'de olacaktır. Sadece zaman geri alınırsa ve tarih değiştirilmezse, gün dalı 'önceki gün 23:00' olarak yazılacaktır."
          },
          {
            "p": "Inyeon-Link bu durumda tarihi de geri alacaktır. Gün dalı, saju'da kişiyi kendisini gösterir, bu yanlışsa, neredeyse tüm uyumluluk öğeleri yanlış olacaktır."
          }
        ]
      },
      {
        "title": "Zamanı bilmenize gerek yok",
        "blocks": [
          {
            "p": "Doğum zamanı isteğe bağlıdır. Bilmiyorsanız, hesaplama zaman dalı olmadan yapılacak ve bu durum sonuç ekranında gösterilecektir. Zaman dalının doğrudan yazılması gereken uyumluluk öğesi yoktur, ancak beş elementi etkiler, bu nedenle biliyorsanız, dahil etmek daha doğru olacaktır."
          },
          {
            "p": "Burç uyumluluğu her zaman aynı değeri taşır, çünkü [sadece yıl dalına bakar](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Kişisel Bilgiler",
    "title": "Girilen bilgilerin saklanmaması yöntemi",
    "summary": "Bu, doğum tarihinizin hiçbir yerde kaydedilmediğinin teknik olarak ne anlama geldiğini ve sonuç bağlantısında nelerin bulunduğunu açıklar.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Üyelik gerekmiyor",
        "blocks": [
          {
            "p": "Inyeon-Link hesap oluşturmaz. İsim, e-posta veya telefon numarası toplamaz. Tek toplanan bilgi doğum tarihi ve (isteğe bağlı olarak) doğum zamanı, doğum yeri ve cinsiyettir ve bu bilgiler hesaplama tamamlandıktan sonra bile kalmaz."
          },
          {
            "p": "Sonuç ekranında görüntülenecek bir başlık girmek için bir alan vardır, ancak bu **sadece görüntüleme amacıyla**dır ve hesaplamada kullanılmaz. Gerçek adınızı girmenize gerek yoktur."
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
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "**#**'dan sonra gelenler giriş değerleridir. Bu kısma **fragment** denir, bu da **tarayıcının sunucuya göndermediği bir bölümdür**. Bu standart web davranışıdır ve bizim oluşturduğumuz bir kural değildir — aslında bir belgede bir konumu belirtmek için tasarlanmıştır, bu nedenle sunucunun bunu görmesine gerek yoktur."
          },
          {
            "p": "Başka bir deyişle, sonuç bağlantısını açtığınızda, tarayıcı o değeri hesaplama talep etmek için okur ve sunucumuz hesaplama için gerekli değerleri alır, yanıtı döner ve sonra bunu unutur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Başkalarına bağlantı gönderirken dikkatli olun",
        "blocks": [
          {
            "p": "Sunucuda saklanmadığı ve bağlantının güvenli olduğu gerçeği aynı şey değildir. Sonuç bağlantısı her iki doğum tarihinizi içerir, bu nedenle o bağlantıyı alan kişi aynı sonucu görebilir."
          }
        ]
      },
      {
        "title": "Hesaplama neden sunucuda yapılıyor ama saklanmıyor?",
        "blocks": [
          {
            "p": "Hesaplama kendisi sunucuda yapılır. Saju'yu oluşturmak için Kore lunisolar takvimi gereklidir ve o tablo tarayıcıya gönderilecek kadar büyük değildir. Ancak, **talep işlendikten sonra, o değer hiçbir yerde kullanılmaz.** Veritabanında saklamak için bir kod yoktur."
          },
          {
            "p": "İşlem için gerekli olan minimal bir kayıt tutulur — aynı kişinin kısa bir süre içinde çok fazla talep göndermesini önlemek için bir sayaç. Bu doğum tarihini içermez ve erişim IP'si de saklanmaz. Sadece tarih ile hash'lenmiş bir değer sayılır ve o değer gün değiştiğinde değişir."
          }
        ]
      },
      {
        "title": "Bilgilerin saklanmaması nedeniyle yapılamayan şeyler",
        "blocks": [
          {
            "p": "Açıkçası, bilgi saklamadığımız için vazgeçtiğimiz şeyler var."
          },
          {
            "ul": [
              "**Geçmiş sonuçları geri alamazsınız.** Yeniden görüntülemek için bağlantıya sahip olmanız gerekir.",
              "**Aynı değerler yeniden hesaplanacaktır.** Önbellek yoktur. Ancak, tüm kurallar deterministiktir, bu nedenle [aynı girdi her zaman aynı değeri verir](/guide/how-compatibility).",
              "**Yenileme, reklam kapısını geri getirecektir.** Bunun nedeni, görüntüleme kayıtlarını saklayacak bir yerin olmamasıdır."
            ]
          }
        ]
      },
      {
        "title": "Satın alma durumunda",
        "blocks": [
          {
            "p": "Bir rapor satın alırsanız, o anda bir işlem kaydı tutulacaktır. Yasa, ödemeler için bir saklama süresi belirler ve bir sipariş geçmişi olmadan iadeler işlenemez. Ancak, yine de, **uygulama hesaplamaları için kullanılan doğum tarihi siparişle ilişkilendirilmez** — ödeme onaylandıktan sonra PDF oluşturulurken tekrar toplanır."
          },
          {
            "p": "Ayrıntılar [Gizlilik Politikası](/privacy) içinde belirtilmiştir."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Ücretli Ürünler",
    "title": "Ücretli raporda neler var?",
    "summary": "Bu, ekranı değiştirmeden PDF'ye eklenenleri madde madde açıklar. Değerler ve içerikler, gerçek ürün ayarlarından okunur.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Ekran değişmeden, sadece PDF'ye eklenmiştir",
        "blocks": [
          {
            "p": "Uyumluluk hesaplamaları ve sonuç sorgulamaları **ücretsizdir**. Eşleşme oranları, öğe puanları ve ağırlıkları, her iki bireyin saju orijinal tabloları ve ilişki şekli ekran üzerinde görüntülenebilir. Ücretli rapor oluşturulurken ekrandan hiçbir şey kaldırılmamıştır."
          },
          {
            "p": "Raporun amacı, **ekranda olmayan katmanlar eklemektir**. Ve o katman uydurulmuş değildir; zaten puanlama sürecinde hesaplanan ancak ekranda kullanılmayan değerlerden oluşur."
          }
        ]
      },
      {
        "title": "Saju Uyumluluk Raporu PDF — {priceGunghapDomestic}",
        "slot": "gunghapContents",
        "blocks": [
          {
            "p": "Yerli ödeme {priceGunghapDomestic} (KDV dahil), uluslararası ödeme {priceGunghapGlobal}. A4 {pagesGunghap} sayfa."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "**Sayfa 1-3, ekranda olanları korumak için düzenlenmiştir** ve **sayfa 4'ten itibaren ekranda olmayan içeriklerdir**. Aşağıda, belirli şeylerin neden ekranda gösterilmediği açıklanmaktadır."
          }
        ]
      },
      {
        "title": "Sayfa 4 — İki enerjinin yönü",
        "blocks": [
          {
            "p": "Ekrandaki beş elementin öğeleri tek bir puan olarak sunulmaktadır. Ancak, bu tek puan **iki yönün ortalamasıdır** — diğerinin beni ne kadar doldurduğunu ve benim diğerini ne kadar doldurduğumu ölçerek bu değerleri ortalıyor."
          },
          {
            "p": "Tamamlayıcılık doğası gereği **asimetriktir**. Bunun nedeni, benim ihtiyaç duyduğum enerjilerin ve diğerinin ihtiyaç duyduğu enerjilerin farklı olmasıdır. Eğer sadece ortalamaya bakarsanız, bir tarafın diğerini önemli ölçüde doldurduğu bir ilişki ile her iki tarafın birbirini eşit şekilde doldurduğu bir ilişki aynı sayı olarak görünecektir. Rapor bu ikisini ayırır."
          },
          {
            "p": "Aynı bölümde **dört sütunun ilişki grafiği** de bulunmaktadır. Eşleşme oranına giren tek öğe gün dalıdır (日支) — çünkü bu eş pozisyonudur — ancak diğer yıl, ay ve saat dalları da aynı ilişki grafiği ile okunabilir."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bu tablodaki puanlar eşleşme oranına girmez",
        "blocks": [
          {
            "p": "Eğer dahil edilirse, toplam puan değişir ve daha önce gönderilen sonuç bağlantısıyla eşleşmez. Bu nedenle, yalnızca okuma materyali olarak dahil edilmiştir ve bu durum tablonun altında belirtilmiştir."
          }
        ]
      },
      {
        "title": "Sayfa 5 — Her kişinin saju'suna daha yakından bakış",
        "blocks": [
          {
            "p": "Ekrandaki beş element çubukları **ne kadar mevcut olduğunu** gösterir. Rapor, **doğum ayının bu enerjiyi destekleyip desteklemediğini** de ekler. Aynı miktarda olsa bile, güçlü (旺) ve ölü (死) enerji farklı güçlere sahiptir."
          },
          {
            "p": "Ayın enerjisi ile çarpıldıktan sonra güçleri yan yana görebilir, mevsimin bunu ne kadar artırdığını gösterir. Güçlü gün ustası ile zayıf gün ustası arasındaki farkı belirleyen **müttefik oranı** da belirtilmiştir — ekran yalnızca yargıyı gösterir, ancak rapor bu yargının nerede yapıldığını gösterir."
          }
        ]
      },
      {
        "title": "Sayfa 6 — Diğer kişinin dört sütunu benim için ne anlama geliyor",
        "blocks": [
          {
            "p": "Eşleşme oranı yalnızca her iki bireyin **gün dallarını** karşılaştırır. Ancak, diğer kişinin kalan üç sütunu da Ten Gods tarafından aynı kurallara göre belirlenir. Sadece gün dalına bakarak **bu kişinin benim için ne anlama geldiğini** anlayabilirsiniz, ancak **o kişinin benim için ne pozisyonda olduğunu** bilemezsiniz."
          },
          {
            "p": "Yönler olduğundan, her iki taraf ayrı ayrı sunulmaktadır. Benim gördüğüm ve diğerinin gördüğü farklıdır."
          }
        ]
      },
      {
        "title": "Sayfa 7 — Bu saju nasıl hesaplandı",
        "blocks": [
          {
            "p": "Doğum zamanının gerçek güneş zamanına ne kadar ayarlandığını, düzeltmenin tarihi değiştirip değiştirmediğini ve saju oluşturulduğunda güneş ve ay tarihinin ne olduğunu belirtir. Kavram, [Doğum zamanını gerçek güneş zamanına ayarlama](/guide/true-solar-time) belgesinde açıklanmaktadır, ancak **sizin durumunuzda kaç dakika ayarlandığı** kişiden kişiye değiştiği için yalnızca raporda yer almaktadır."
          }
        ]
      },
      {
        "title": "Inyeon eşleşme profili raporu PDF — {priceAffinityDomestic}",
        "slot": "affinityContents",
        "blocks": [
          {
            "p": "Yerli ödeme {priceAffinityDomestic} (KDV dahil), uluslararası ödeme {priceAffinityGlobal}. A4 {pagesAffinity} sayfa."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Bu bölüm **genel sıralama tablosudur**. Ekran yalnızca iyi eşleşen setleri gösterir, ancak rapor on tane göksel dalı ve on iki yer dalını **tamamen** sıralar. Sadece en üst setlere bakarsanız, 'sonraki kim' ve 'en az uyumlu olan hangisi' hakkında bilgi sahibi olamazsınız."
          }
        ]
      },
      {
        "title": "Satın almadan önce bilinmesi gerekenler",
        "blocks": [
          {
            "p": "**Sunucu dosyaları saklamaz.** Ödeme onaylandıktan sonra, belge hemen oluşturulur ve gönderilir, sunucuda hiçbir şey bırakılmaz. Bu hizmetin girdi değerlerini saklamama ilkesi, ücretli akışta da korunmaktadır."
          },
          {
            "p": "Bu nedenle, **lütfen ödemeden hemen sonra dosyayı kaydedin.** Aynı siparişi beş kez alabilirsiniz, ancak sonuç ekranından çıkarsanız ve girdi değerleri kaybolursa, bunu yeniden oluşturamazsınız."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Raporlar da referans materyallerdir",
        "blocks": [
          {
            "p": "Uzunluğun artması, sonucun daha kesin olduğu anlamına gelmez. Raporun daha fazla içerdiği şey, **aynı hesaplamanın dayanağıdır**, daha güçlü bir iddia değil. Kader okuma, sonuçların uygulayıcıya göre değişebileceği bir alandır ve bu hizmet yalnızca kurallara çevrilebilecek olanı hesaplar."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Duyuru",
    "title": "Duyurular",
    "summary": "Bu, kullanımı etkileyen değişiklikleri bildirmek için bir yerdir.",
    "backLabel": "Ana Sayfaya Dön",
    "sections": []
  },
  "contact": {
    "eyebrow": "İletişim",
    "title": "Sorgular",
    "summary": "Bu, kullanım, geri ödemeler, kişisel bilgi talepleri ve hata raporları hakkında sorgular için bir kanaldır, ayrıca iş bilgilerini de içerir.",
    "backLabel": "Ana Sayfaya Dön",
    "sections": [
      {
        "title": "E-posta ile İletişim",
        "blocks": [
          {
            "p": "Sorgularınızı **{email}** adresine gönderebilirsiniz. 2 iş günü içinde yanıt vereceğiz. Ödeme ve geri ödeme sorguları için, daha hızlı onay için **sipariş numarasını veya ödeme için kullanılan e-postayı** ekleyin."
          },
          {
            "p": "Telefonla sorgular {customerCenter} numarasından yapılabilir."
          }
        ]
      },
      {
        "title": "Bu kanala neler gönderilebilir?",
        "blocks": [
          {
            "ul": [
              "**Ödeme ve Geri Ödeme** — Eğer belge oluşturulmadıysa veya ödeme tutarı siparişle farklıysa, tam geri ödeme yapılacaktır. Koşullar [geri ödeme politikası](/refund-policy) içindedir.",
              "**Kişisel Bilgiler** — Görüntüleme, düzeltme ve silme taleplerini kabul ediyoruz. İşleme politikası [gizlilik politikası](/privacy) içindedir.",
              "**Hesaplama Hatası Raporu** — Eğer saju orijinal grafiği veya puanı garip görünüyorsa, lütfen bize bildirin. Tarih ve saati girdiğiniz zamanı eklerseniz, aynı değerlerle yeniden hesaplayabiliriz."
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
              "**Posta Siparişi İşletme Kaydı Numarası** — {mailOrderNumber}",
              "**Adres** — {address}",
              "**Müşteri Merkezi** — {customerCenter}",
              "**E-posta** — {email}",
              "**Kişisel Bilgi Koruma Sorumlusu** — {privacyOfficer}",
              "**Barındırma Sağlayıcısı** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Sorgu e-postasında doğum tarihini ve saatini dahil etmenize gerek yoktur. Girdileri saklamıyoruz, bu nedenle geri alamıyoruz ve sipariş numarası onay için yeterlidir. Hesaplama hatası raporu için gerekli değilse, lütfen yalnızca bunu ekleyin."
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
  "intro": "Kullanım şartlarınızda yapılan değişiklikler — fiyatlar, politikalar — burada yürürlüğe girmeden önce yayınlanır. Dahili iyileştirmeler listelenmez: burada görünenler bilmeniz gerekenlerdir.",
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
        "Sorular, iadeler, gizlilik talepleri ve hesaplama hataları raporları artık tek bir yere yönlendiriliyor — alt kısımdaki iletişim sayfasına bakın.",
        "Eğer bir şey yanlış hesaplanmış görünüyorsa, lütfen bunu üreten doğum bilgilerini ekleyin. Girdiğiniz bilgileri saklamıyoruz, bu yüzden olmadan okumayı yeniden üretemeyiz."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Raporlar Arapça ve Khmerce için İngilizce olarak verilmektedir",
      "body": [
        "Eğer Arapça veya Khmerce okuyorsanız, satın aldığınız PDF raporu İngilizce olarak üretilmektedir. Belgelerimizi düzenleyen araç henüz bu yazılarda paragrafları ayarlayamıyor.",
        "Ekran dilinizde kalır ve adınız rapor içinde kendi yazınızla basılır.",
        "Aynı not, ödeme öncesinde görünür. Araç bu yazıları desteklediğinde, burada bunu belirteceğiz."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Her okuma kullanılan kural versiyonunu taşır",
      "body": [
        "Her okuma ve rapor, onu üretmek için kullanılan kural setini taşır (örneğin inyeonlink-match-v10). Aynı girdi, aynı kural setinde her zaman aynı sayıları verir.",
        "Eğer puanı etkileyebilecek şekilde yorumlama kurallarını değiştirirsek, bunu burada ilk olarak yayınlarız, yürürlüğe girdiği tarih ile birlikte — çünkü zaten sahip olduğunuz bir sonuç bağlantısı o zaman farklı bir şekilde okunacaktır.",
        "Mevcut kural seti v10'dur. Ödemeler henüz açık değildir."
      ]
    }
  }
} satisfies NoticeCopy;
