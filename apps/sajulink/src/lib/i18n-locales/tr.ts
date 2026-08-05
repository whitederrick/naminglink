// 사주링크 화면 사전의 Turkish (Türkçe)(tr) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **인연링크에서 물려받은 옛 번역을 되살린 것이 아니다.** 그 파일들은 궁합 서비스의 UI라,
// 되살리면 사주 화면에 궁합·인연이 다시 들어온다. 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const tr: Dictionary = {
  "brand": "SajuLink",
  "tagline": "Doğum tarihinden okunan Dört Sütünüz",
  "currentLanguage": "Geçerli dil",
  "moreLanguages": "Daha",
  "closeLanguages": "Kapat",
  "landing": {
    "title": "Doğduğunuz sekiz karakter\n",
    "subtitle": "Tek ihtiyacınız olan doğum tarihi.\nSaju (Dört Sütun) haritanızı oluşturuyoruz, beş elementi tartıyoruz ve gün ustanızın gücünü okuyoruz.",
    "cta": "Sajumu Gör",
    "howTitle": "Nasıl hesaplanır",
    "steps": [
      "Doğum tarihinizi girin. Doğum saati isteğe bağlıdır.",
      "Doğduğunuz yıl, ay, gün ve saat sekiz karakter haline gelir — doğum haritanız. Bunlardan her bir elementin ağırlığını ve gün ustanızın gücünü okuyoruz.",
      "Bugünün sütunu o haritaya karşılaştırılarak, bugünün falını da veriyoruz."
    ],
    "privacyTitle": "Girdiğiniz hiçbir bilgi saklanmaz",
    "privacyBody": "Doğum tarihleri yalnızca sonuç hesaplanırken kullanılır, hiçbir yere kaydedilmez. Hesap açmanız gerekmez. Sonuç bağlantısında taşınan hiçbir bilgi sunucuya gönderilmez.",
    "disclaimer": "Bu, referans için sunulan geleneksel bir Saju okumadır. Bilimsel bir tahmin veya birinin geleceği hakkında bir hüküm değildir."
  },
  "form": {
    "title": "Doğum tarihiniz",
    "description": "Doğum saatini bilmek yorumu keskinleştirir ama zorunlu değildir.",
    "meLegend": "Hakkınızda",
    "nickname": "Nasıl anılsın",
    "nicknamePlaceholder": "örn. Ben",
    "nicknameHint": "Yalnızca sonuç ekranında görünür. Hesaplamada kullanılmaz.",
    "gender": "Cinsiyet",
    "male": "Erkek",
    "female": "Kadın",
    "genderUnspecified": "Belirtmek istemiyorum",
    "genderHint": "Geleneksel Saju, eş ve çocuk pozisyonlarını cinsiyete göre farklı okur. Bunu atlarsanız, bu faktörler hesaplamadan çıkar.",
    "birthplace": "Doğum yeri",
    "birthplaceHint": "Saat sütunu, doğduğunuz yerin gerçek güneş saatine göre hesaplanır. Doğum yeriniz listede yoksa, en yakın şehri seçin.\nKore anakarasında şehirler arasındaki fark iki dakikadan azdır. Yaz saati uygulaması ve tarihsel zaman dilimi değişiklikleri de yansıtılmaktadır.",
    "calendar": "Takvim",
    "solar": "Güneş takvimi",
    "lunar": "Ay takvimi",
    "leapMonth": "Artık ay",
    "birthDate": "Doğum tarihi",
    "year": "Yıl",
    "month": "Ay",
    "day": "Gün",
    "birthTime": "Doğum saati",
    "unknownTime": "Saati bilmiyorum",
    "hour": "Saat",
    "minute": "Dakika",
    "submit": "Reklamı izleyin ve Saju'mu görün",
    "submitNoAd": "Saju'mu görün",
    "submitting": "Hesaplanıyor…",
    "errorInvalidDate": "Lütfen doğum tarihini kontrol edin. Ay takvimi tarihlerinde artık aya denk gelip gelmediğini de kontrol edin.",
    "errorGeneric": "Hesaplama başarısız oldu. Lütfen biraz sonra tekrar deneyin."
  },
  "reading": {
    "chartTitle": "Doğum haritanız",
    "chartHint": "Saju, doğum yılı, ayı, günü ve saatini her biri iki karakter olarak gösterir. Aşağıdaki her şey bu sekiz karakterden okunur.",
    "pillarYear": "Yıl",
    "pillarMonth": "Ay",
    "pillarDay": "Gün",
    "pillarHour": "Saat",
    "pillarHourUnknown": "Doğum saati yok",
    "dayMasterLabel": "Gün efendisi",
    "animalLabel": "Burç",
    "seasonLabel": "Doğum mevsimi",
    "elementsTitle": "Element gücü",
    "strongest": "En güçlü",
    "scarcest": "En zayıf",
    "strengthTitle": "Sizinle birlikte doğduğunuz şey",
    "cautionTitle": "Dikkat edilecek yan",
    "bodyStrengthTitle": "Gün efendisinin gücü",
    "favorableLabel": "Şimdi ihtiyacınız olan"
  },
  "bodyStrength": {
    "STRONG": {
      "name": "Güçlü gün efendisi",
      "body": "Gün efendinizi destekleyen elementler bol. Bu size kendi itici gücünüzü verir ama dengeyi kolayca bir yana yatırır — fazlayı çeken bir şey olduğunda daha rahat edersiniz."
    },
    "BALANCED": {
      "name": "Dengeli gün efendisi",
      "body": "Gün efendinizi destekleyen güçlerle ondan çekenler neredeyse eşit. İki yandan birine karar vermek zor olduğu için burada en ince kalan neyse ihtiyacınız o sayılır."
    },
    "WEAK": {
      "name": "Zayıf gün efendisi",
      "body": "Gün efendinizi destekleyen elementler ince. Çevrenizden güç almayı iyi bilirsiniz ama tek başınıza uzun süre direnmek sizi yıpratır — arkanızda duran bir şey olduğunda açılırsınız."
    }
  },
  "tenGods": {
    "BIGYEON": {
      "name": "Yoldaş (比肩)",
      "body": "Seninle omuz omuza duran enerji. Kalın, kendi alanını koruma gücü verir ve öncelikle kendi payını talep etmeni sağlar."
    },
    "GEOPJAE": {
      "name": "Rakip (劫財)",
      "body": "Sana benzeyen ama farklı çalışan enerji. İtiş gücü verir, ancak aşırı olduğunda sahip oldukların dağılma eğilimindedir."
    },
    "SIKSIN": {
      "name": "İfade (食神)",
      "body": "İçindeki şeyi dünyaya çıkaran enerji. İfade ve yaşamın basit zevki buradan gelir; bulunduğu yerde rahatlık vardır."
    },
    "SANGGWAN": {
      "name": "Sarsıcı (傷官)",
      "body": "Sabit bir çerçeveyi sarsan enerji. Yetenek ve keskin bir kenar verir, ancak aşırı olduğunda kurallarla ve hiyerarşiyle çarpışır."
    },
    "PYEONJAE": {
      "name": "Beklenmedik Varlık (偏財)",
      "body": "Geniş türdeki zenginlik enerjisi. Sahip olduğu şeylerle aktif ve özgürdür, beklenmedik yerlerden fırsatlar getirir."
    },
    "JEONGJAE": {
      "name": "Düzenli Varlık (正財)",
      "body": "Sabit türdeki zenginlik enerjisi, parça parça toplanır. Geleneksel Saju, bunu bir erkeğin eş pozisyonu olarak da okur."
    },
    "PYEONGWAN": {
      "name": "Meydan Okuyan (偏官)",
      "body": "Seni tetikte ve dik tutan enerji. Baskı altında güçlenirsin, ancak aşırı olduğunda sürekli kovalanıyormuş gibi hissedersin."
    },
    "JEONGGWAN": {
      "name": "Otorite (正官)",
      "body": "Seni düzene sokan düzen enerjisi. Adını ve konumunu korur; geleneksel Saju, bunu bir kadının eş pozisyonu olarak da okur."
    },
    "PYEONIN": {
      "name": "Sıra Dışı Destek (偏印)",
      "body": "Seni alışılmadık bir yolla destekleyen enerji. Derinlere inme gücü verir, ancak aşırı olduğunda düşünce elden önce gider."
    },
    "JEONGIN": {
      "name": "Kollayan (正印)",
      "body": "Seni tutan ve büyüten enerji. Öğrenme ve dayanacak bir şey verir; aşırı olduğunda kendi başına çıkma işi gecikir."
    }
  },
  "dayMasters": {
    "甲": {
      "name": "Yang Ağaç (甲)",
      "trait": "Dümdüz büyüyen uzun bir ağaç. Yön bir kez belirlendi mi sapmaz, eğilmektense dayanmayı seçer."
    },
    "乙": {
      "name": "Yin Ağaç (乙)",
      "trait": "Sarmaşık — esnek bir ot. İlerlemek için koşullara göre eğilir ve kopmaz."
    },
    "丙": {
      "name": "Yang Ateş (丙)",
      "trait": "Öğle güneşi. Duygular açıkça görünür, ortam aydınlanır, öne çıkmak doğal gelir."
    },
    "丁": {
      "name": "Yin Ateş (丁)",
      "trait": "Mum ışığı. Sessizce ve uzun yanar, önce en yakınındakini ısıtır."
    },
    "戊": {
      "name": "Yang Toprak (戊)",
      "trait": "Açık arazi ve dağlar. Sarsılması zordur, yaslanması kolaydır; ama bir kez verdiği kararı ağır değiştirir."
    },
    "己": {
      "name": "Yin Toprak (己)",
      "trait": "Tarla toprağı. Geleni alır ve büyütür; sergilemekten çok gözetir."
    },
    "庚": {
      "name": "Yang Metal (庚)",
      "trait": "İşlenmemiş demir. Kararlı ve nettir, askıda kalan işlere sabrı azdır."
    },
    "辛": {
      "name": "Yin Metal (辛)",
      "trait": "Yontulmuş bir mücevher. İnce bir zevki ve yüksek ölçüleri vardır; özensizliği geçiştiremez."
    },
    "壬": {
      "name": "Yang Su (壬)",
      "trait": "Irmak ve deniz. Bakışı geniştir, işlerin nasıl aktığını görür."
    },
    "癸": {
      "name": "Yin Su (癸)",
      "trait": "Çiy ve yağmur. Sessizce sızar, sözden önce havayı okur."
    }
  },
  "dayMasterSigns": {
    "甲": [
      "İlk tanışmada bile ne düşünüyorsa onu söyler.",
      "Bir kez kurduğu planı ya da verdiği sözü kolay kolay değiştirmez.",
      "Reddederken sözü dolandırmaz; bu sert duyulabilir."
    ],
    "乙": [
      "Çatışmanın etrafından dolaşır, başka bir yol tutar.",
      "Yumuşak görünür ama sonunda gitmek istediği yerdedir.",
      "Bir gruba katılmadan önce ortamı okur."
    ],
    "丙": [
      "Yeni tanıştığı kişiye ilk kendisi söz atar.",
      "Neyi sevip sevmediği yüzünden okunur.",
      "Kalabalıkta çabalamadan ortada bulur kendini."
    ],
    "丁": [
      "Başta sessizdir; yakınlaştıkça özenle ilgilenir.",
      "Kalabalık yerine bir iki kişiyle uzun uzun konuşmayı sever.",
      "Geçerken söylenmiş bir sözü aklında tutar, sonra çıkarır."
    ],
    "戊": [
      "Az konuşur; acele işlerde bile sesi zor yükselir.",
      "Herkes kararı ertelerken sonunda toparlayan kişidir.",
      "Bir kez hayır dediyse o hayır uzun süre öyle kalır."
    ],
    "己": [
      "Konuştuğundan daha uzun dinler.",
      "Reddetmekte zorlanır, işler üstüne yığılır.",
      "Sessizce hallettiği şeyler ancak sonradan ortaya çıkar."
    ],
    "庚": [
      "Çabuk karar verir ve kararını orada söyler.",
      "Sözü yumuşatmaz; bu soğuk gelebilir.",
      "Bir iş uzadığında sıkıldığı gözle görülür."
    ],
    "辛": [
      "Giyimi ve seçtiği eşyalar konusunda net ölçüleri vardır.",
      "Yarım bırakılmış bir işi söylemeden geçemez.",
      "Övgüde cimridir ama bir kez takdir ettiyse gerçekten öyledir."
    ],
    "壬": [
      "Her türden insanla rahat kaynaşır.",
      "Önündeki işten önce sonrasında olacakları konuşur.",
      "Uzun süre tek yere bağlı kalmak onu sıkar."
    ],
    "癸": [
      "Az konuşur ama durumu tam olarak okumuştur.",
      "Havanın değiştiğini ilk fark eden odur.",
      "İç dünyasını kolay açmaz; onu tanımak zaman alır."
    ]
  },
  "animalTraits": {
    "rat": "Çabuk fark eder, önemli olanı çabuk güvenceye alır. Kriz anında ilk hareket eden odur.",
    "ox": "Ağır görünür ama işi sonuna götürür. Üstlendiğini bırakmaz.",
    "tiger": "Korkusuzdur ve önden gider. Haksızlığı görmezden gelemez.",
    "rabbit": "Yumuşak ve sezgilidir. Çarpışmak yerine dolaşmayı bilir.",
    "dragon": "Gönlü geniş, idealleri yüksektir. Sıradan olanla nadiren yetinir.",
    "snake": "İçini kolay açmaz, derin düşünür. Değerlendirmesi isabetlidir.",
    "horse": "Neşeli ve hareketlidir. En zor geldiği şey bir yere kapatılmaktır.",
    "goat": "Sıcak ve düşüncelidir. Sert sözleri uzun süre içinde taşır.",
    "monkey": "Becerikli ve çabuk uyum sağlar. Tekrardan sıkılır.",
    "rooster": "Çalışkan ve titizdir. Yerinde olmayan bir şeyi öylece bırakamaz.",
    "dog": "Bir kez güvendi mi sonuna kadar sadıktır. İhanet onu özellikle derinden yaralar.",
    "pig": "Cömert ve açık sözlüdür. Kolay güvenir, bunun bedelini ödediği olur."
  },
  "result": {
    "title": "Saju okumanız",
    "recalculate": "Baştan başla",
    "copyLink": "Sonuç bağlantısını kopyala",
    "copied": "Kopyalandı",
    "missingInput": "Bu sonuç okunamadı. Lütfen tarihleri yeniden girin.",
    "partialTime": "Doğum saati girilmediği için saat sütunu hesaba katılmadı. Saati eklemek yorumu daha kesin yapar.",
    "engineVersion": "Hesaplama sürümü",
    "disclaimer": "Bu, referans için sunulan geleneksel bir Saju okumasıdır. Bilimsel bir tahmin veya geleceğiniz hakkında bir hüküm değildir."
  },
  "today": {
    "menu": "Bugünün falı",
    "title": "Bugünün falı",
    "pillarLabel": "Bugünün sütunu",
    "scoreLabel": "Bugünün puanı",
    "grades": {
      "DAEGIL": {
        "name": "Çok uğurlu",
        "body": "Bugünün enerjisi, haritanızla en iyi açıda buluşuyor. Ertelediğiniz şeyleri almak için iyi bir gün."
      },
      "GIL": {
        "name": "Uğurlu",
        "body": "Bugün akıntı sizinle birlikte. Normalde yaptığınız şeyler, normalden daha kolay ilerliyor."
      },
      "PYEONG": {
        "name": "Dengeli",
        "body": "Hiçbir şey sizi zorlamıyor ve hiçbir şey sizi engellemiyor. Normal yaptığınız gibi yapın ve normalde aldığınız şeyi alırsınız."
      },
      "JUUI": {
        "name": "Dikkat edin",
        "body": "Bugünün enerjisinin bazıları haritanızla ters düşüyor. Yeni şeyler başlatmaktan çok, işleri bitirmekle harcamak daha iyi."
      },
      "JOSIM": {
        "name": "Dikkatli ol",
        "body": "Bugünün enerjisi haritanızı etkiliyor. Bir karar bekleyebiliyorsa, beklesin."
      }
    },
    "categories": {
      "wealth": "Para",
      "love": "Aşk",
      "career": "İş",
      "health": "Sağlık"
    },
    "luckyTitle": "Bugün bunları yakın tutun",
    "luckyElement": "Element",
    "luckyColor": "Renk",
    "luckyDirection": "Yön",
    "luckyTime": "Saatler",
    "luckyNumber": "Numaralar",
    "luckyColors": {
      "TEAL": "turkuaz",
      "GREEN": "yeşil",
      "RED": "kırmızı",
      "ORANGE": "turuncu",
      "YELLOW": "sarı",
      "OCHRE": "kahverengi",
      "WHITE": "beyaz",
      "GOLD": "altın",
      "BLACK": "siyah",
      "NAVY": "lacivert"
    },
    "luckyDirections": {
      "EAST": "Doğu",
      "SOUTH": "Güney",
      "CENTER": "Merkez",
      "WEST": "Batı",
      "NORTH": "Kuzey"
    },
    "basisTitle": "Bu puanın nereden geldiği",
    "factors": {
      "TODAY_IS_YONGSIN": "Bugünün elementi, haritanızın ihtiyaç duyduğu elementtir",
      "TODAY_GENERATES_YONGSIN": "Bugünün elementi, haritanızın ihtiyaç duyduğu elementi besler",
      "TODAY_IS_GISIN": "Bugünün elementi, zaten dolu olan tarafı daha da ileri iter",
      "TODAY_CONTROLS_YONGSIN": "Bugünün elementi, haritanızın ihtiyaç duyduğu elementi baskılar",
      "TODAY_GENERATES_SELF": "Bugünün elementi, gün ustanızı destekler",
      "TODAY_SAME_ELEMENT": "Bugünün elementi, gün ustanızla aynıdır",
      "SELF_GENERATES_TODAY": "Gün ustanız, bugünün elementine akar",
      "TODAY_CONTROLS_SELF": "Bugünün elementi, gün ustanızı baskılar",
      "SELF_CONTROLS_TODAY": "Gününüzün ustası, bugünün elementini kontrol ediyor",
      "WEAK_HELPED": "Zayıf bir gün ustası, bugün güç alıyor",
      "STRONG_OVERFED": "Güçlü bir gün ustası, bugün daha ağırlaşıyor",
      "STRONG_DRAINED": "Güçlü bir gün ustası, bugün daha iyi bir dengeye çekiliyor",
      "WEAK_BURDENED": "Zayıf bir gün ustası, bugün daha fazla yük taşıyor",
      "BRANCH_SAMHAP": "Bugünün dalı, haritanızla tam bir üçgen oluşturuyor",
      "BRANCH_BANHAP": "Bugünün dalı, haritanızla yarım bir üçgen oluşturuyor",
      "BRANCH_YUKHAP": "Bugünün dalı, haritanızla altı uyum oluşturuyor",
      "BRANCH_SAME": "Bugünün dalı, haritanızdaki bir dal ile aynı",
      "BRANCH_NEUTRAL": "Bugünün dalının haritanızla özel bir bağı yok",
      "BRANCH_WONJIN": "Bugünün dalı, haritanızla sessiz bir uyumsuzluk içinde",
      "BRANCH_CHUNG": "Bugünün dalı, haritanızla çatışıyor"
    },
    "bookmarkHint": "Doğum tarihinizi saklamıyoruz, bu yüzden her seferinde tekrar girilmesi gerekiyor. **Bu sonuç bağlantısını yer imlerine ekleyin** ve her gün o günün şansını açacaktır.",
    "disclaimer": "Bugünün şansı, gün sütunu ile haritanız arasındaki ilişkiyi bir puana dönüştürür. Bu, günü nasıl geçireceğinize dair bir nottur, bir kehanet değildir."
  },
  "ads": {
    "label": "Reklam"
  },
  "analyzing": {
    "title": "Grafiğinizi oluşturma",
    "quotes": [
      "Saju, sabit bir cevap değildir. Kendinizi anlamanın bir dilidir.",
      "Doğduğunuz şeyi bilmek ile onu yaşamak iki farklı şeydir.",
      "Güçlü bir pozisyon kullanıma bağlıdır; ince bir pozisyon ise doldurmaya bağlıdır.",
      "Aynı sekiz karakter, nasıl okuduğunuza bağlı olarak farklı bir gün yaratır.",
      "İyi bir gün beklemektense, sahip olduğunuz günü nasıl kullanacağınızı bilmek daha iyidir.",
      "İnsanların zayıflık olarak adlandırdığı pozisyon genellikle en fazla büyümenin gerçekleştiği yerdir.",
      "Sezonun ileriye ittiği bazı enerjiler vardır; bazılarını ise kendiniz yaratmalısınız.",
      "Skordan daha önemli olan, onu nasıl okuduğunuzdur.",
      "Bugünün talihi bir günün havasıdır, yaşadığınız yerin iklimi değildir.",
      "Sajunuzu bilmek, kendinizi görmek demektir, ileriye bakmak değil."
    ],
    "watching": "Reklam izleniyor",
    "remaining": "Sonucunuz {seconds} sn içinde açılır"
  },
  "reportDetail": {
    "depthTitle": "Grafiğinize daha yakından bakış",
    "vitalityTitle": "Mevsimin öne ittiği",
    "vitalityHint": "Çubuklar bir elementin ne kadar olduğunu gösterir; bu tablo doğum ayının onu destekleyip desteklemediğini belirtir. Aynı miktar, wang'da ve sa'da farklı bir güç taşır.",
    "vitalities": {
      "WANG": {
        "name": "Wang (旺)",
        "body": "en güçlü olduğu yer"
      },
      "SANG": {
        "name": "Sang (相)",
        "body": "güçte bir sonraki"
      },
      "HYU": {
        "name": "Hyu (休)",
        "body": "sırası geçtikten sonra dinlenmede"
      },
      "SU": {
        "name": "Su (囚)",
        "body": "sıkışmış, hareket etmesi zor"
      },
      "SA": {
        "name": "Sa (死)",
        "body": "en zayıf hâlinde"
      }
    },
    "rawLabel": "Mevsim öncesi",
    "strengthLabel": "Mevsim sonrası",
    "earthSeasonNote": "Geçiş mevsiminde (辰未戌丑) doğduğunuz için toprak da wang olarak sayılır.",
    "allyRatioLabel": "Müttefik oranı",
    "allyRatioHint": "Kaynak ve arkadaş yıldızlarının birleşik payı. %45'in üzerinde güçlü, %35'in altında zayıf olarak değerlendirilir. Kararın ne kadar yakın olduğunu görebilmeniz için sayı yazılmıştır.",
    "stemGodsTitle": "Her bir sütun sizin için ne ifade ediyor",
    "stemGodsHint": "Gün ustanızdan ölçülen, kalan her bir gövde on tanrı adından birini alır. Hangilerinin kalın olduğu, temperament hakkında çok şey söyler.",
    "pillarColumn": "Direk",
    "tenGodColumn": "On Tanrı",
    "meaningColumn": "Ne anlama geliyor",
    "yearOutlookTitle": "Bu yılın görünümü",
    "factorsTitle": "Bugünkü puanın kaynağı",
    "factorsHint": "Ekran faktörlerin adını gösteriyor; burada her biri eklediği veya çıkardığı puanlarla birlikte yazılmıştır.",
    "deltaColumn": "Puanlar",
    "appendixTitle": "Bu harita nasıl oluşturuldu",
    "timeCorrectionLabel": "Doğum saati",
    "timeCorrectionApplied": "Gerçek güneş saatine düzeltilip {time} olarak okundu.",
    "timeCorrectionNone": "Doğum saati verilmedi, bu yüzden saat sütunu hariç tutuldu.",
    "timeCorrectionDateShift": "Düzeltme, tarihi {date} olarak değiştirdi, bu yüzden o günün sütunu kullanıldı.",
    "calendarLabel": "Haritanın çıkarıldığı tarih",
    "solarLabel": "Güneş",
    "lunarLabel": "Ay",
    "lunarUnavailable": "Bu tarih takvim tablosunda yok, bu yüzden ay tarihi gösterilmedi."
  },
  "report": {
    "title": "Hayat okumanızı PDF olarak saklayın",
    "body": "Bu okumayı bir PDF haline getiriyoruz — doğum haritanız, beş elementin dengesi, gün ustanızın gücü ve şu anda ihtiyaç duyduğu enerji, ve bugünün talihi, hepsi tek bir sayfada.",
    "buyButton": "{price} ödeyip indirin",
    "preparing": "Henüz kullanılamıyor",
    "ordering": "Siparişiniz oluşturuluyor…",
    "paying": "Ödeme işleniyor…",
    "issuing": "Raporunuz hazırlanıyor…",
    "done": "İndirildi. Yeniden indirmek için aşağıdaki düğmeyi kullanın.",
    "failed": "Ödeme ya da indirme başarısız oldu. Lütfen biraz sonra tekrar deneyin.",
    "retry": "Yeniden indir",
    "contents": [
      "Gün ustanız ve karakteriniz — bir özet, güçlü ve dikkat edilmesi gereken noktalar",
      "Doğum haritanız — dört sütunun sekiz karakteri",
      "Beş elementin dengesi, en kalın ve en ince olanı",
      "Gün ustanızın gücü ve şu anda ihtiyaç duyduğu enerji",
      "Bugünün talihi ve dört alan (para, aşk, iş, sağlık)"
    ],
    "consentLabel": "Bu ürünün ödeme sonrası anında teslim edilen dijital içerik olduğunu ve **indirme tamamlandıktan sonra basit fikir değişikliğine dayalı cayma hakkının kısıtlandığını** anladım.",
    "consentRequired": "Ödeme yapmadan önce lütfen cayma koşullarını onaylayın.",
    "productInfoTitle": "Ürün bilgileri",
    "productInfo": [
      [
        "Sağlayıcı",
        "{brand}"
      ],
      [
        "Biçim",
        "Bir PDF belgesi (5 A4 sayfası), ödeme hemen sonrasında ekranda indirilecektir."
      ],
      [
        "Gereksinimler",
        "PDF açabilen herhangi bir cihaz. Kurulum ya da hesap gerekmez."
      ],
      [
        "Kullanım süresi",
        "Sınır yok. İndirdiğiniz dosya sizde kalır."
      ],
      [
        "Yeniden indirme",
        "Aynı sipariş için en fazla beş kez. Dosyanın kopyasını saklamadığımız için sonuç ekranından ayrıldıktan sonra yeniden üretilemez."
      ],
      [
        "Cayma",
        "İndirme başlamadan önce tam iade. İndirme tamamlandıktan sonra fikir değişikliğine dayalı cayma kısıtlanır (Kore E-Ticaret Kanunu md. 17/2)."
      ],
      [
        "İade masrafları",
        "Yok — dijital içerik, gönderilen bir şey yok."
      ]
    ],
    "refundContact": "İade ve sorularınız için aşağıdaki müşteri hizmetlerine ya da e-posta adresine yazın. Belge üretilemediyse ya da tahsil edilen tutar siparişten farklıysa tamamını iade ederiz.",
    "pdfLanguageNotice": "PDF, bu ekranla aynı dilde oluşturulur."
  },
  "premiumReport": {
    "title": "Premium okumanızı PDF olarak saklayın",
    "body": "Hayat okumasındaki her şey, ayrıca **ekranda asla görünmeyen sayılar** — güçlü veya zayıf olanı belirleyen müttefik oranı, doğum ayının her elementi ne kadar yükselttiği ve doğum saatinize uygulanan gerçek-güneş-zaman düzeltmesi.",
    "buyButton": "{price} ödeyin ve indirin",
    "preparing": "Henüz mevcut değil",
    "ordering": "Siparişinizi oluşturuyor…",
    "paying": "Ödeme işleniyor…",
    "issuing": "Raporunuzu hazırlıyor…",
    "done": "İndirildi. Yeniden indirmek için aşağıdaki butonu kullanın.",
    "failed": "Ödeme veya indirme başarısız oldu. Lütfen bir süre sonra tekrar deneyin.",
    "retry": "Yeniden indirin",
    "contents": [
      "Gün ustanız ve temperamentiniz — bir özet, güçlü yönler ve dikkat edilmesi gerekenler",
      "Natal haritanız — dört sütunun sekiz karakteri",
      "Beş element, gün ustanızın gücü ve ihtiyaçları",
      "Bugünün şansı ve dört alan (para, aşk, iş, sağlık)",
      "Her bir sütun sizin için ne anlama geliyor — haritanızdan okunan on tanrı",
      "Mevsimsel duruş ve müttefik oranı — hükmün arkasındaki sayılar",
      "Bu yılın görünümü, bugünün puanlama faktörleri ve zaman düzeltmesi"
    ],
    "consentLabel": "Bu ürünün, ödeme yapıldıktan sonra hemen sunulan dijital içerik olduğunu ve **indirme tamamlandıktan sonra basit bir fikir değişikliği nedeniyle geri çekilmenin kısıtlandığını** anlıyorum.",
    "consentRequired": "Ödeme yapmadan önce geri çekilme şartlarını onaylayın.",
    "productInfoTitle": "Ürün bilgisi",
    "productInfo": [
      [
        "Sağlayıcı",
        "{brand}"
      ],
      [
        "Format",
        "Bir PDF belgesi (7 A4 sayfası), ödeme yapıldıktan hemen sonra ekrandan indirilecektir."
      ],
      [
        "Gereksinimler",
        "PDF açabilen herhangi bir cihaz. Kurulum veya hesap gerekmez."
      ],
      [
        "Kullanım süresi",
        "Sınırsız. İndirdiğiniz dosyayı saklarsınız."
      ],
      [
        "Yeniden indirme",
        "Aynı siparişle beş kez. Sunucuda kopya saklanmadığı için sonuç ekranını terk ettikten sonra tekrar oluşturulamaz."
      ],
      [
        "İptal",
        "İndirme başlamadan önce tam geri ödeme. Tamamlandıktan sonra, fikir değişikliği nedeniyle iptal sınırlıdır (Madde 17(2), Kore Elektronik Ticaret Yasası)."
      ],
      [
        "İade masrafları",
        "Yok — dijital içerik, hiçbir şey gönderilmez."
      ]
    ],
    "refundContact": "İadeler veya sorular için, müşteri merkeziyle iletişime geçin veya aşağıdaki e-posta adresine yazın. Belge üretilemediyse veya tahsil edilen tutar siparişle farklıysa, tam geri ödeme yaparız.",
    "pdfLanguageNotice": "PDF, bu ekranla aynı dilde üretilir."
  },
  "fallbackReport": {
    "summary": "{season} enerjisi içinde doğmuş bir {dayMaster} gün ustası. Tüm haritada {strongest} en kalın, {scarcest} ise en ince. Aşağıdaki açıklamalar bu sekiz karakterden türetilmiştir — buradaki her sayı ve her sütun hesaplanmıştır, seçilmemiştir.",
    "personality": "Gün ustanız {dayMaster} — {element} enerjisi — ve bu harita {strengthName} olarak okunuyor. Hangi tarafın daha kalın olduğu, gün ustasını destekleyen mi yoksa ondan çeken mi olduğu, tahılı şekillendirir ve günlük yaşamda bu şekilde kendini gösterir.",
    "cautions": {
      "STRONG": [
        "O kadar zorlayıcı oluyorsunuz ki, genellikle eğilimi yalnızca gerçekleştiğinde fark ediyorsunuz.",
        "Yardımın mevcut olduğu yerlerde bile, sonunda işi yalnız başınıza halletmeye çalışıyorsunuz, bu da işi büyütüyor.",
        "Aşırı yükü çeken bir yere yer açtığınızda her şey yerli yerine oturur."
      ],
      "BALANCED": [
        "Hiçbir şey sizi bir tarafa eğmez, bu yüzden ertelenen bir karar sadece ertelenmiş kalır.",
        "Duruma iyi uyum sağlıyorsunuz, bu da kendi sınırınızı bulanıklaştırabilir.",
        "Şu anda en ince olan tarafa yönelmek, tutabileceğiniz bir yön verir."
      ],
      "WEAK": [
        "Yalnız başına dayanmak, beklediğinizden daha çabuk sizi yıpratır.",
        "Arkanızda hiçbir şey yoksa, kararlar kayar ve an geçer.",
        "Destekleyici insanları yakın tutmak bu haritada bir zayıflık değil — bu bir yöntemdir."
      ]
    },
    "scarcityCaution": "Şu anda en ince element {scarcest}. O elementin yönettiği alanlarda harekete geçmekte en yavaş olduğunuz yer burası.",
    "elementBalance": "Güç bakımından, {strongest} % {strongestPct} ile önde ve {scarcest} % {scarcestPct} ile geride kalıyor. Doğduğunuz ay {season} mevsiminde, bu da o elementi bir kez daha yukarı itiyor — aynı miktar, mevsimin destekleyip desteklememesine bağlı olarak farklı bir güç taşır. Şu anda ihtiyacınız olan {favorable}, ve o elementin doldurulduğu yerlerde işler kolaylaşır.",
    "todayHeadline": "Bugün {grade} olarak geçiyor",
    "todayMessage": "Bugünün puanı {score}, derecelendirme {gradeName}. {gradeBody} Günün direği {pillar}, ve bu puandaki en büyük etki “{topFactor}” oldu.",
    "todayAdvice": {
      "HIGH": "Ertelediğiniz mesajı veya düzenlemeyi almak için iyi bir gün — ancak hepsini bugün bitirmeye çalışmamak daha iyi.",
      "MID": "Her zamanki gibi yapın ve her zamanki gibi sonuç alırsınız. Yeni bir şeye başlamak yerine, elinizdeki bir şeyi bir adım ileri taşıyın.",
      "LOW": "Bugün bazı şeyler haritaya ters düşüyor. Başlamaktan çok bitirip kontrol etmekle geçirmekte daha iyi."
    },
    "luckyNote": "Bugünün şanslı elementi {element}. {colors} aralığı, {direction} tarafı ve {time} civarı, o enerjinin en yoğun olduğu yerlerdir.",
    "domains": {
      "wealth": "Bugün para durumu {score}. Bu değer, bugünün enerjisinin zenginlik yıldızlarına (財星) ulaşıp ulaşmadığına bağlı olarak değişir — neyi yönettiğiniz ve neyi topladığınız.",
      "love": "Bugün sevgi durumu {score}. Bu değer, bugünün dalının sizin gün dalınız (日支) ile nasıl bir araya geldiğine bağlıdır, eş palası — uyum yükseltir, çatışma düşürür.",
      "career": "Bugün iş durumu {score}. Bu değer, bugünün enerjisinin memur (官星) ve çıktı (食傷) yıldızlarına ulaşıp ulaşmadığına bağlı olarak değişir — neyi üstlendiğiniz ve neyi ortaya koyduğunuz.",
      "health": "Bugün sağlık durumu {score}. Bu değer, doğum haritanızdaki kaç dalın bugünkü ile çatıştığına ve bugünün elementinin ihtiyaç duyduğunuz bir element olup olmadığına bağlıdır."
    },
    "yearOutlook": "Bu yılın direği {pillar}, taşıdığı element {element}. {relation} Bu okuma, yalnızca yılın direğinin şu anda ihtiyaç duyduğunuz şeyle nasıl bir araya geldiğine bakar; yılı ay ay parçalamaz.",
    "yearRelations": {
      "YONGSIN": "İhtiyacınız olan element bu yıl doğrudan geliyor. Biriktirdiğiniz şeyleri ortaya çıkarmak için uygun bir zaman.",
      "GENERATES": "Bu yıl ihtiyacınız olan elementi besliyor, bu yüzden mevcut durum yavaş yavaş daha nazik hale geliyor — hemen değil, ama sürekli.",
      "GISIN": "Bu yıl, zaten eğilim gösterdiğiniz yöne bir kez daha itiyor. Yeni bir şey açmaktan çok, elinizdekileri kapatmak daha iyi.",
      "CONTROLS": "Bu yıl, ihtiyacınız olan elementi baskı altında tutan bir şey var, bu yüzden kararlar daha yavaş geliyor. Kendi son tarihlerinizin belirlenmesi yardımcı olur.",
      "NEUTRAL": "Bu yıl, ihtiyacınız olan şeyle ne çatışıyor ne de besliyor. Sahip olduğunuz yeri korumak daha iyi bir ticaret."
    },
    "disclaimer": "Geleneksel myeongri referansı, bilimsel bir tahmin veya olması gerekenler hakkında bir ifade değildir."
  },
  "footer": {
    "privacy": "Gizlilik",
    "terms": "Şartlar",
    "refund": "İade",
    "pricing": "Fiyatlar",
    "legalEntity": "Şirket",
    "representative": "Temsilci",
    "businessNumber": "Kayıt No.",
    "mailOrderNumber": "Online satış",
    "address": "Adres",
    "customerCenter": "Müşteri hizmetleri",
    "email": "Email",
    "privacyOfficer": "Gizlilik sorumlusu",
    "hostingProvider": "Hosting",
    "providedBy": "Sağlayan",
    "effective": "Yürürlük tarihi",
    "backHome": "Ana sayfaya dön"
  },
  "animals": {
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
  },
  "elements": {
    "WOOD": "Ağaç",
    "FIRE": "Ateş",
    "EARTH": "Toprak",
    "METAL": "Metal",
    "WATER": "Su"
  }
};
