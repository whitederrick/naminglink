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
            "p": "Haritalar, **Kore lunisolar almanağı**'ndan oluşturulur ve doğum zamanı, doğum yeri için **gerçek güneş zamanı**'na düzeltilir — aynı saat, nerede doğduğunuza bağlı olarak farklı bir güneş konumu anlamına gelir."
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
            "p": "Eşleşme oranı iki eksenden gelir. **Saju uyumluluğu**, her iki bireyin tam saju orijinal haritasına bakarken, **burç uyumluluğu** yalnızca doğum yılından bir yer dalını dikkate alır. Nihai değer, ikisinin ağırlıklı ortalaması alınarak elde edilir."
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
                  "Gün gövdesi, gün dalı ve beş element — dört öğe",
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
            "caption": "Saju, doğum yılı, ayı, günü ve saati ile ilgili göksel gövdeler ve yer dallarından oluşan sekiz karakterden oluşur. Aşağıda bahsedilen gün gövdesi ve gün dalı, gün sütunundaki iki karakterdir.",
            "labels": {
              "year": "Yıl Sütunu",
              "yearNote": "Kök · Burç",
              "month": "Ay Sütunu",
              "monthNote": "Mevsim · Güç",
              "day": "Gün Sütunu",
              "dayNote": "Ben · Eş Sarayı",
              "hour": "Saat Sütunu",
              "hourNote": "Son Yıllar · Kullanım",
              "stem": "Göksel Gövde",
              "stemNote": "Gün Gövdesi = Ben",
              "branch": "Yer Dalı",
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
    "eyebrow": "İlişki tablosu",
    "title": "Burç Hayvanları ve Gün Dalları Nasıl Buluşur — On İki Dal Tablosu",
    "summary": "İki kişinin burç hayvanları ve gün dalları yan yana konduğunda kullanılan ilişki tablosu. On iki hayvanın her biri için hangi hayvanlarla harmoni, çatışma ya da uyumsuzluk oluşturduğunu gösterir ve her ilişkinin puanını açıkça belirtir.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Burç hayvanları ve gün dalları aynı tabloyu kullanır",
        "blocks": [
          {
            "p": "Inyeon-Link, iki kişinin yer dallarını iki yerde yan yana koyar: doğum yılının dalına bakan **burç uyumu** ve doğum gününün dalına bakan **gün dalı uyumu** (eş sarayı). İkisi de aşağıdaki tabloyla değerlendirilir; tek fark, her birinin nihai puandaki ağırlığıdır."
          },
          {
            "figure": "branch-wheel",
            "caption": "On iki karakteri bir daire içine dizmek ilişkileri bir bakışta netleştirir. Çatışma her zaman tam karşıdadır; altı-harmoni çifti ve sessiz uyumsuzluk ise daha yakın komşulardır. Bu çizgiler elle yazılmaz; doğrudan hesaplama kurallarından çizilir.",
            "labels": {
              "alt": "On iki yer dalının bir daire içinde dizildiği; altı-harmoni, çatışma ve uyumsuzluk çiftlerini çizgilerin birbirine bağladığı bir diyagram.",
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
              "goat": "Koyun",
              "monkey": "Maymun",
              "rooster": "Horoz",
              "dog": "Köpek",
              "pig": "Domuz"
            }
          }
        ]
      },
      {
        "title": "On iki burç hayvanının her biri için ilişkiler",
        "blocks": [
          {
            "p": "Tablo, her hayvan için hangi hayvanlarla hangi ilişkiyi kurduğunu listeler. Yalnızca bu hizmetin harmoni olarak tanıdığı çiftler yer alır; bu yüzden bir satırda görünmeyen hayvanla özel bir ilişki yoktur — **nötrdür**."
          },
          {
            "table": {
              "caption": "Tek bir hayvandan görülen dört ilişki türü",
              "head": [
                "Sizin hayvanınız",
                "Çeken çift (Altı-Harmoni)",
                "Yarım üçlü",
                "Sessizce uyumsuz (Uyumsuzluk)",
                "Kafa kafaya çarpışma (Çatışma)"
              ],
              "rows": [
                [
                  "Fare (子)",
                  "Öküz",
                  "Maymun · Ejderha",
                  "Koyun",
                  "At"
                ],
                [
                  "Öküz (丑)",
                  "Fare",
                  "Horoz",
                  "At",
                  "Koyun"
                ],
                [
                  "Kaplan (寅)",
                  "Domuz",
                  "At",
                  "Horoz",
                  "Maymun"
                ],
                [
                  "Tavşan (卯)",
                  "Köpek",
                  "Domuz · Koyun",
                  "Maymun",
                  "Horoz"
                ],
                [
                  "Ejderha (辰)",
                  "Horoz",
                  "Fare",
                  "Domuz",
                  "Köpek"
                ],
                [
                  "Yılan (巳)",
                  "Maymun",
                  "Horoz",
                  "Köpek",
                  "Domuz"
                ],
                [
                  "At (午)",
                  "Koyun",
                  "Kaplan · Köpek",
                  "Öküz",
                  "Fare"
                ],
                [
                  "Koyun (未)",
                  "At",
                  "Tavşan",
                  "Fare",
                  "Öküz"
                ],
                [
                  "Maymun (申)",
                  "Yılan",
                  "Fare",
                  "Tavşan",
                  "Kaplan"
                ],
                [
                  "Horoz (酉)",
                  "Ejderha",
                  "Yılan · Öküz",
                  "Kaplan",
                  "Tavşan"
                ],
                [
                  "Köpek (戌)",
                  "Tavşan",
                  "At",
                  "Yılan",
                  "Ejderha"
                ],
                [
                  "Domuz (亥)",
                  "Kaplan",
                  "Tavşan",
                  "Ejderha",
                  "Yılan"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "İki kişi tabloda buluştuğunda",
        "blocks": [
          {
            "p": "Tabloyu okumak, iki hayvanı aynı satırda bulmak demektir. İşte örnek olarak birkaç çift."
          },
          {
            "ul": [
              "**Fare ve Öküz** — altı-harmoni. Yalnızca iki karaktere gerek duyar; bu yüzden uyumda en sık görülen ve iyi bir harmonidir.",
              "**Fare ve Ejderha** — yarım üçlü: 申子辰 üçlüsünün üç karakterinden ikisi, ortadaki (子) dahil.",
              "**Fare ve Kaplan** — tabloda yok, yani nötr: ne harmoni ne çatışma, yalnızca başlangıç düzeyi.",
              "**Fare ve Koyun** — uyumsuzluk. Yüzeyde sakin görünür, ama bu uyumsuzluğun kalıcı olduğuna inanılır.",
              "**Kaplan ve Maymun** — çatışma. Tam karşılıklı otururlar ve kafa kafaya çarpıştıkları düşünülür."
            ]
          }
        ]
      },
      {
        "title": "Her ilişki kaç puan alır",
        "blocks": [
          {
            "table": {
              "caption": "En yüksekten başlayarak. Bunlar Inyeon-Link'in gerçekten kullandığı değerlerdir.",
              "head": [
                "İlişki",
                "Puan"
              ],
              "rows": [
                [
                  "Altı-Harmoni",
                  "{scoreYukhap}"
                ],
                [
                  "Yarım üçlü",
                  "{scoreBanhap}"
                ],
                [
                  "Aynı dal",
                  "{scoreSame}"
                ],
                [
                  "Nötr",
                  "{scoreNeutral}"
                ],
                [
                  "Uyumsuzluk",
                  "{scoreWonjin}"
                ],
                [
                  "Çatışma",
                  "{scoreChung}"
                ]
              ]
            }
          },
          {
            "p": "Aynı dal (aynı hayvandan iki kişi) çekim değil benzerlik anlamına gelir; bu yüzden nötrün hemen üstündedir. Burç uyumu da olsa gün dalı uyumu da olsa, bu tablodaki değer doğrudan nihai puana girer."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tam üçlüler neden tabloda yok",
        "blocks": [
          {
            "p": "Tam bir üçlü (申子辰, 巳酉丑, 寅午戌, 亥卯未) üç karakterin hepsini gerektirir. İki kişiyi yan yana koyunca yalnızca iki karakter olur; dolayısıyla uyumda tam üçlü oluşamaz, yalnızca yarım üçlüler görülür. {scoreSamhap} olan tam üçlü puanı, üç karakterin kişinin kendi haritası içinde bir araya geldiği durum için saklanır."
          }
        ]
      },
      {
        "title": "申辰, 巳丑, 寅戌 ve 亥未 harmoni sayılmaz",
        "blocks": [
          {
            "p": "Bazı yöntemler aynı üçlü grubundan herhangi iki karakteri yarım üçlü sayar. Inyeon-Link saymaz: yukarıdaki yarım üçlü sütununun gösterdiği gibi, yalnızca grubun merkezindeki **kraliyet dalını** (子, 午, 卯, 酉) içeren çiftleri kabul eder. Onsuz bir çiftte oluşumun etrafında toplanacağı bir merkez yoktur; bu yüzden nötr sayılır."
          }
        ]
      },
      {
        "title": "Uyumsuzluk ve çatışma tabanda durmaz",
        "blocks": [
          {
            "p": "Yalnızca harmoniler ve çatışmalar sayılsaydı, altı uyumsuzluk çiftinin hepsi nötrün içinde kaybolurdu. Bu yüzden uyumsuzluğun kendi yeri vardır: kafa kafaya çatışmadan yüksek, nötrden düşük, {scoreWonjin} puan."
          },
          {
            "p": "Çatışma bile {scoreChung} puanını korur. Geleneksel myeongri'de çatışma bir çarpışmadır, ilişkinin sonu değil. Sıfıra yakın bir değer hizmetin iki kişi hakkında hüküm vermesine yol açardı; bu yüzden aralık, hüküm vermeden farkı gösterecek kadar geniş tutulur."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Burç",
    "title": "Neden burç uyumu yıl dalını dikkate alıyor?",
    "summary": "Burç, doğum yılının yer dalıdır. Bu, burcun takvim yılından ziyade saju yıl sütunundan türediğini açıklar ve burç uyumunun önemini netleştirir.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Burç, doğum yılının yer dalıdır",
        "blocks": [
          {
            "p": "Saju, yıl, ay, gün ve saat olmak üzere dört sütundan oluşur ve her sütun bir göksel gövde ve bir yer dalı içerir. **Yıl dalı**, burç işareti olarak adlandırdığımız hayvanı taşıyan dalıdır."
          },
          {
            "table": {
              "caption": "On İki Yer Dalı ve Burç",
              "head": [
                "Yer Dalı",
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
    "summary": "Her kişinin gün gövdesinin birbirine göre ne olduğunu On Tanrılar aracılığıyla inceliyoruz. Doğrudan zenginlik ve dolaylı zenginliğin neden farklı okunduğunu açıklıyoruz, her ikisi de zenginlik olmasına rağmen.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Gün gövdesi, kişinin kendisidir",
        "blocks": [
          {
            "p": "Saju'nun sekiz karakteri arasında, **gün gövdesi** (doğum gününün göksel gövdesi) kişinin kendisini ifade eder. Kalan yedi karakter, o gün gövdesinin yerleştirildiği çevreyi okumaktadır."
          },
          {
            "p": "**On Tanrı** (十神), gün gövdesinin diğer karakterleri nasıl algıladığını on kategoriye ayırır. Beni besleyen **kaynak**, benimle aynı olan **eş**, ürettiğim **çıktı**, kontrol ettiğim **zenginlik** ve beni kontrol eden **otorite**dir — bu beş, kutuplulukla ayrılır ve on olur."
          }
        ]
      },
      {
        "title": "Her kişinin gün gövdesi birbirine göre nedir",
        "blocks": [
          {
            "p": "Bu, uyumluluğun ilk maddesidir. A'nın gün gövdesinin B'nin gün gövdesini nasıl algıladığı belirlendikten sonra, B'nin A'yı algılaması da belirlenir, bu nedenle **sadece altı olasılık vardır**."
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
            "p": "Yin ile yang'ın uyumsuz olduğu taraf (Doğru Zenginlik, Doğru Memur, Doğru Arkadaş) duygusaldır, aynı taraf (Kaynak, Memur, Arkadaş) ise duygusuzdur, bu da On Tanrı'nın doğru ve yan tarafını ayıran ilkedir."
          }
        ]
      },
      {
        "title": "Üç element yerine On Tanrılarla bakmanın nedeni",
        "blocks": [
          {
            "p": "Gün gövdesinin üç elementle olan ilişkisini görmenin bir yöntemi vardır (karşılıklı üretim, benzerlik, karşılıklı aşma). Bu basittir, ancak **yin ve yang kaybolur.** 甲 (yang ağaç) ve 乙 (yin ağaç) aynı 'benzerlik' haline gelir, 甲 ve 甲 gibi, karşılıklı aşma tek bir puana sıkıştırılır, yönsüz veya yin ve yang olmadan."
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
            "p": "Puanın yanı sıra, sonuç ekranında gün gövdesi çiftinin **hangi şekli** olduğunu tanımlıyoruz. Benzer pozisyonlar mı, bir taraf diğerini mi destekliyor, yoksa bir taraf mı baskı altında — destekleyici veya baskılayıcı bir ilişki olup olmadığını belirtiriz ve hangi tarafın o pozisyonda olduğunu netleştiririz."
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
            "p": "Gün gövdesi tarafı **印星 ve 比劫** — bana hayat veren enerji ve benimle benzer enerji. Beşten iki olduğu için, enerji tamamen dengelendiğinde, {evenAllyRatio} olur. Bu değerin üstünde ve altında bir aralık belirlenir."
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
            "p": "Beş elementin gücünü hesaplarken, yalnızca sekiz karakteri göründükleri gibi saymayız. Yer dallarının içinde gizli olan göksel gövdeleri (地藏干) ve doğduğunuz ayın enerji mevsimini (月令) yansıtan bir değer kullanırız."
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
    "summary": "Bir kişinin verilerini alırken karşı tarafın pozisyonunu boş bırakıyoruz ve o pozisyona girebilecek tüm olası değerleri bu pozisyona yerleştiriyoruz. Bu şekilde elde edilen tür için toplam puan eklememe nedenini açıklıyoruz.",
    "backLabel": "Hesaplama temeli",
    "sections": [
      {
        "title": "Karşı tarafın pozisyonunu boş bırakırken hesaplamalar yapılır",
        "blocks": [
          {
            "p": "Uyumluluk puanları iki kişinin eşleştirilmesiyle hesaplanır. **Inyeon’in Eşleşmesi** yalnızca bir kişinin verilerini alırken karşı tarafın pozisyonunu boş bırakır ve o pozisyona girebilecek tüm olası değerleri test eder. Bu, uyumluluk motorunu tersine çalıştırmak gibidir."
          },
          {
            "p": "Bu nedenle, karşı tarafın doğum tarihini bilmek gerekli değildir. Henüz tanışmadığımız biri hakkında, 'Benim için hangi tür eşleşme profili uygundur?' diyebiliriz."
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
                  "Gün gövdesi ilişkisi · Eşsel doğa",
                  "Her iki kişinin gün gövdeleri — göksel gövdeler",
                  "10"
                ],
                [
                  "Beş element tamamlama",
                  "Benim destekleyici elementim ve karşı tarafın beş element gücü",
                  "5"
                ],
                [
                  "gün dalı ilişkisi",
                  "iki kişinin gün dalları",
                  "12"
                ],
                [
                  "burç ilişkisi",
                  "iki kişinin yıl dalları",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Değerler öğeler arasında değişim yapmadığı için, **her dal için en yüksek noktayı bulmak genel en yüksek nokta olacaktır.** Doğum tarihinin tüm kombinasyonlarını kontrol etmeye gerek yoktur — sadece on göksel gövdeyi, on iki yer dalını ve beş elementi ayarlamak yeterlidir."
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
    "title": "Herkesin Doğum Saati Ayrı Ayrı Düzeltilir",
    "summary": "Uyum, iki kişinin saatlerini ayrı ayrı hesaplar. Bu sayfa, doğum yerleri ve dönemleri farklı olduğunda düzeltmenin nasıl uygulandığını ve yalnızca biri saatini bilmediğinde neyin değiştiğini açıklar.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Saat ile güneş uyuşmaz",
        "blocks": [
          {
            "p": "Saju'da doğum saati, saate göre değil güneşin konumuna göre okunur. Ancak bir ülkenin tamamı tek bir standart saat kullanır; bu yüzden saat ile herhangi bir yerin güneşi birbirinden ayrışır."
          },
          {
            "p": "Kore'nin standart saati 135°D'ye dayanır, Seul ise yaklaşık 127°D'dedir. Seul'ün güneşi en yüksek noktasına saatin söylediğinden yaklaşık **32 dakika** geç ulaşır."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 dakika saat sütununu bir basamak kaydırabilir",
        "blocks": [
          {
            "p": "Saate göre 11:40'ta Seul'de doğan biri gerçek güneş zamanına göre 11:08'de doğmuştur; bu hâlâ At saatinin (午, 11:00–13:00) içindedir. Saate göre 11:20'de doğan kişi 10:48'de doğmuştur ve bu Yılan saatine (巳, 9:00–11:00) düşer. Düzeltme tam da böyle bir sınırda duran insanlar için vardır."
          }
        ]
      },
      {
        "title": "Düzeltme her kişiye ayrı ayrı uygulanır",
        "blocks": [
          {
            "p": "Uyum, her kişinin haritasını kendi başına kurar. Giriş ekranının doğum yerini **her kişi için** sormasının nedeni budur. Biri Seul'de, diğeri yurt dışında doğduysa, saatleri farklı boylam ve saat dilimleriyle ayrı ayrı düzeltilir."
          },
          {
            "p": "Şehir listesi şu anda {cityCount} yer içerir. Boylamı çok değişen ülkelerde şehirler bölünür, çünkü **15° boylam saat sütununu bir basamak kaydırır**."
          },
          {
            "p": "Seçmezseniz Seul kullanılır. Yalnızca biri yurt dışında doğduysa ve ikisi de Seul'de bırakılırsa, yalnızca yurt dışında doğan kişinin saat sütunu yanlış olur; düzeltme kişi kişi uygulandığı için diğer kişinin değerleri etkilenmez."
          }
        ]
      },
      {
        "title": "Farklı dönemler farklı standart saatler kullandı",
        "blocks": [
          {
            "p": "Farklı yaşlardaki iki kişi, farklı dönemlerin standart saati altında yaşadı. Bu yüzden yalnızca boylam farkı yeterli değildir."
          },
          {
            "ul": [
              "**1912'den önce** — Kore'de birleşik bir standart saat yoktu (yerel ortalama saat).",
              "**1954–1961** — standart saat UTC+8:30'du.",
              "**1948–51 · 1955–60 · 1987–88** — yaz saati uygulaması yürürlükteydi."
            ]
          },
          {
            "p": "Inyeon-Link, standart bir meridyeni koda sabit olarak yazmaz. O anda gerçekten kullanılan standart saati bulmak için doğum yerinin **IANA saat dilimine** bakar; böylece doğum yılları farklı olsa bile her kişinin kendi dönemi uygulanır."
          }
        ]
      },
      {
        "title": "Gece yarısından hemen sonra gün gövdesi değişir",
        "blocks": [
          {
            "p": "Düzeltme −32 dakikadır; bu yüzden saate göre 00:00 ile 00:32 arasında doğan kişi, gerçek güneş zamanına göre **bir önceki günün 23:00 saatinde** doğmuştur. Tarih de onunla birlikte bir gün geri alınır."
          },
          {
            "p": "Uyumda bu çok önemlidir. Gün sütunu bir gün geri gidince hem gün gövdesi hem gün dalı değişir; böylece gün gövdesi ilişkisi, Eş Yıldızı ve gün dalı ilişkisi farklı karakterlerle yeniden hesaplanır ve beş element güçleri de onlarla birlikte kayar."
          }
        ]
      },
      {
        "title": "Yalnızca biri saatini bilmiyorsa sorun değil",
        "blocks": [
          {
            "p": "Doğum saati isteğe bağlıdır; ikisinden yalnızca biri saatini bilmese bile uyum hesaplanır. Yalnızca bilmeyen kişi saat sütunu olmadan hesaplanır ve sonuç ekranı bunu belirtir. Diğer kişinin değerleri olduğu gibi kalır."
          },
          {
            "p": "Dört uyum öğesinin hiçbiri saat sütununu doğrudan kullanmaz, ama beş element güçlerini etkiler; bu yüzden biliyorsanız girmek daha doğrudur. Burç uyumu, saat olsun olmasın aynı değeri verir — [yalnızca yıl dalına bakar](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Gizlilik",
    "title": "İki Kişinin Bilgilerini Nasıl Saklamıyoruz",
    "summary": "Uyum, başka birinin doğum tarihini de girmenizi ister. Bu sayfa, iki kişinin girdisinin hiçbir yere kaydedilmemesinin teknik olarak ne anlama geldiğini ve bir sonuç bağlantısıyla nelerin taşındığını açıklar.",
    "backLabel": "Hesaplama Temeli",
    "sections": [
      {
        "title": "Başka birinin bilgisini giriyorsunuz",
        "blocks": [
          {
            "p": "Uyum ekranı sizin doğum tarihinizi ve karşı tarafın doğum tarihini birlikte alır. Karşı tarafın doğum tarihi onun kişisel bilgisidir; bu yüzden Inyeon-Link'in ikisini nasıl ele aldığını ayrıca belirtiyoruz."
          },
          {
            "p": "Hesap yoktur; ad, e-posta adresi ya da telefon numarası istemeyiz. Yalnızca iki doğum tarihini ve isteğe bağlı olarak doğum saatini, doğum yerini ve cinsiyeti alırız; hesaplama bittiğinde hiçbiri kalmaz."
          },
          {
            "p": "Sonuç ekranında gösterilecek bir görünen ad alanı vardır, ancak yalnızca görüntü içindir ve hesaplamada kullanılmaz. Gerçek bir ad girmeniz gerekmez."
          }
        ]
      },
      {
        "title": "Bir sonuç bağlantısı iki doğum tarihini de içerir",
        "blocks": [
          {
            "p": "Hesaplama bittiğinde adres şöyle görünür."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "**#** işaretinden sonraki kısım iki kişinin girdisini taşır. Buna parça (fragment) denir ve standart web davranışına göre **tarayıcı onu sunucuya göndermez**. Bir belgenin içindeki konumu göstermek için tasarlanmıştır; sunucu onu hiç görmez."
          },
          {
            "p": "Bir sonuç bağlantısını açtığınızda tarayıcı bu değeri okur ve bir hesaplama ister; sunucu ihtiyaç duyduğu değerleri alır, yanıtı döndürür ve onları unutur."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bağlantıyı karşı tarafa göndermeden önce",
        "blocks": [
          {
            "p": "Bir sunucuda saklanmamak, bağlantının gizli olması demek değildir. Bağlantıyı alan herkes iki doğum tarihini olduğu gibi görebilir ve bir sohbet odasında bırakılan bağlantı, sunucumuzdan bağımsız olarak o sohbet odasında kalır. Lütfen karşı tarafın bilgilerini içerdiğini unutmadan gönderin."
          }
        ]
      },
      {
        "title": "Hesaplama sunucuda çalışsa da neden hiçbir şey kalmaz",
        "blocks": [
          {
            "p": "Bir saju haritası kurmak için bir takvim (almanak) tablosu gerekir; bu tablo tarayıcıya gönderilemeyecek kadar büyüktür, bu yüzden hesaplama sunucuda çalışır. Ancak **istek işlendikten sonra değerler başka hiçbir yerde kullanılmaz.** Onları bir veritabanına yazan bir kod yoktur."
          },
          {
            "p": "Kalan tek kayıt, bir kişinin kısa sürede çok fazla istek göndermesini engelleyen bir sayaçtır. Doğum tarihi içermez ve IP adresini olduğu gibi tutmaz; tarihle birlikte özetlenmiş (hash) tek bir değeri sayar ve bu değer gün değişince değişir."
          }
        ]
      },
      {
        "title": "Saklamayarak vazgeçtiklerimiz",
        "blocks": [
          {
            "p": "Hiçbir şey saklanmadığı için bazı şeylerden vazgeçtik."
          },
          {
            "ul": [
              "**Geçmiş bir uyum sonucunu geri getiremezsiniz.** Yeniden görmek için bağlantıyı saklamanız gerekir.",
              "**Aynı iki kişi her seferinde yeniden hesaplanır.** Önbellek yoktur. Ama her kural deterministiktir; bu yüzden [aynı girdi her zaman aynı değeri verir](/guide/how-compatibility).",
              "**Sayfayı yenilemek reklam kapısını geri getirir.** İzlediğinizin kaydını tutacak bir yer yoktur."
            ]
          }
        ]
      },
      {
        "title": "Bir rapor satın alırsanız",
        "blocks": [
          {
            "p": "Bir rapor satın alırsanız o noktada bir işlem kaydı tutulur: ödeme kayıtlarının yasal olarak zorunlu bir saklama süresi vardır ve sipariş geçmişi olmadan iade işlenemez. O zaman bile **iki doğum tarihi siparişe eklenmez**; ödeme onaylandıktan sonra PDF oluşturulurken yeniden istenir ve yalnızca o anda kullanılır."
          },
          {
            "p": "Ayrıntılar [gizlilik politikasında](/privacy)."
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
            "p": "Eşleşme oranı yalnızca her iki bireyin **gün gövdelerini** karşılaştırır. Ancak, diğer kişinin kalan üç sütunu da On Tanrı tarafından aynı kurallara göre belirlenir. Sadece gün gövdesine bakarak **bu kişinin benim için ne anlama geldiğini** anlayabilirsiniz, ancak **o kişinin benim için ne pozisyonda olduğunu** bilemezsiniz."
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
            "p": "Bu bölüm **genel sıralama tablosudur**. Ekran yalnızca iyi eşleşen setleri gösterir, ancak rapor on göksel gövdeyi ve on iki yer dalını **tamamen** sıralar. Sadece en üst setlere bakarsanız, 'sonraki kim' ve 'en az uyumlu olan hangisi' hakkında bilgi sahibi olamazsınız."
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
