// 인연링크 화면 사전의 터키어(tr) 판. `src/lib/i18n.ts`의 `en`을 구조·문장의 기준으로 옮겼고,
// 영어가 모호하거나 사주 용어의 뉘앙스가 필요한 자리는 같은 파일의 `ko` 원문을 대조해 맞췄다.
// 언어 선택기 3개 키와 footer 13개 키는 naminglink(`i18n.ts`·`SiteFooter.tsx`)의 tr을 그대로 가져와,
// 두 서비스에서 같은 말이 같은 자리에 보이도록 했다(customerCenter·effective·backHome만 새로 옮김).

import type { Dictionary } from "@/lib/i18n";

export const tr: Dictionary = {
  brand: "InyeonLink",
  tagline: "Saju ve burçlarla okunan uyum",
  currentLanguage: "Geçerli dil",
  moreLanguages: "Daha",
  closeLanguages: "Kapat",
  landing: {
    title: "İki kişinin birbirine\nne kadar uyduğunu görün",
    subtitle:
      "Tek gereken bir doğum tarihi.\nSaju (Dört Sütun) uyumu ile burç uyumunu birleştirip eşleşme oranı olarak gösteriyoruz.",
    cta: "Saju uyumuna bak",
    howTitle: "Nasıl hesaplanır",
    steps: [
      "Her iki doğum tarihini girin. Doğum saati isteğe bağlıdır.",
      "Saju uyumu gün efendilerinin elementlerinden, element dengesinden ve gün dalından; burç uyumu ise yıl dalından çıkar.",
      "İki puan ağırlıklı biçimde birleştirilerek tek bir eşleşme oranına dönüşür.",
    ],
    privacyTitle: "Girdiğiniz hiçbir bilgi saklanmaz",
    privacyBody:
      "Doğum tarihleri yalnızca sonuç hesaplanırken kullanılır, hiçbir yere kaydedilmez. Hesap açmanız gerekmez. Sonuç bağlantısında taşınan hiçbir bilgi sunucuya gönderilmez.",
    disclaimer:
      "Bu, yol gösterici olarak sunulan geleneksel bir Saju yorumudur. Bilimsel bir öngörü ya da herhangi bir ilişki hakkında bir hüküm değildir.",
  },
  form: {
    title: "İki doğum tarihi",
    description:
      "Doğum saatini bilmek yorumu keskinleştirir ama zorunlu değildir.",
    personA: "Birinci kişi",
    personB: "İkinci kişi",
    nickname: "Nasıl anılsın",
    nicknamePlaceholder: "örn. Ben",
    nicknameHint:
      "Yalnızca sonuç ekranında görünür. Hesaplamada kullanılmaz.",
    gender: "Cinsiyet",
    male: "Erkek",
    female: "Kadın",
    genderUnspecified: "Belirtmek istemiyorum",
    genderHint:
      "Geleneksel Saju eş konumunu cinsiyete göre farklı okur. Bunu boş bırakırsanız o etken hesaplamaya katılmaz.",
    birthplace: "Doğum yeri",
    birthplaceHint:
      "Saat sütunu, doğum yerinizdeki gerçek güneş saatine göre hesaplanır; yaz saati uygulaması ve geçmişteki saat dilimi değişiklikleri de dikkate alınır. Doğum yeriniz listede yoksa en yakın şehri seçin — ne kadar yakınsa saat sütunu o kadar doğru olur.",
    calendar: "Takvim",
    solar: "Güneş takvimi",
    lunar: "Ay takvimi",
    leapMonth: "Artık ay",
    birthDate: "Doğum tarihi",
    year: "Yıl",
    month: "Ay",
    day: "Gün",
    birthTime: "Doğum saati",
    unknownTime: "Saati bilmiyorum",
    hour: "Saat",
    minute: "Dakika",
    submit: "Reklamı izle ve uyum sonucunu gör",
    submitting: "Hesaplanıyor…",
    errorInvalidDate:
      "Lütfen doğum tarihini kontrol edin. Ay takvimi tarihlerinde artık aya denk gelip gelmediğini de kontrol edin.",
    errorGeneric: "Hesaplama başarısız oldu. Lütfen biraz sonra tekrar deneyin.",
  },
  reading: {
    chartTitle: "İki harita",
    chartHint:
      "Saju; doğum yılını, ayını, gününü ve saatini ikişer karakterle yazar. Aşağıdaki puanların tamamı bu sekiz karakterden çıkar.",
    pillarYear: "Yıl",
    pillarMonth: "Ay",
    pillarDay: "Gün",
    pillarHour: "Saat",
    pillarHourUnknown: "Doğum saati yok",
    dayMasterLabel: "Gün efendisi",
    animalLabel: "Burç",
    seasonLabel: "Doğum mevsimi",
    elementsTitle: "Element gücü",
    strongest: "En güçlü",
    scarcest: "En zayıf",
    strengthTitle: "Bu eşleşmenin güçlü yanı",
    cautionTitle: "Dikkat edilecek yan",
    bodyStrengthTitle: "Gün efendisinin gücü",
    favorableLabel: "Şimdi ihtiyacınız olan",
  },
  bodyStrength: {
    STRONG: {
      name: "Güçlü gün efendisi",
      body: "Gün efendinizi destekleyen elementler bol. Bu size kendi itici gücünüzü verir ama dengeyi kolayca bir yana yatırır — fazlayı çeken bir şey olduğunda daha rahat edersiniz.",
    },
    BALANCED: {
      name: "Dengeli gün efendisi",
      body: "Gün efendinizi destekleyen güçlerle ondan çekenler neredeyse eşit. İki yandan birine karar vermek zor olduğu için burada en ince kalan neyse ihtiyacınız o sayılır.",
    },
    WEAK: {
      name: "Zayıf gün efendisi",
      body: "Gün efendinizi destekleyen elementler ince. Çevrenizden güç almayı iyi bilirsiniz ama tek başınıza uzun süre direnmek sizi yıpratır — arkanızda duran bir şey olduğunda açılırsınız.",
    },
  },
  relation: {
    title: "İkiniz nasıl bir aradasınız",
    hint: "Saju, iki gün efendisinin birbirini nasıl gördüğünü on terimle adlandırır. Okumanın bir yönü vardır — sizin onu görüşünüzle onun sizi görüşü farklı olabilir.",
    directionLabel: "{from} → {to}",
    shapes: {
      ALIKE: {
        name: "Benzer",
        body: "Gün efendileriniz aynı enerjiyi taşıyor. Çoğu şey söylemeye gerek kalmadan anlaşılır, zevkleriniz de örtüşür. Sorun şu ki aynı yerlerde güçlü, aynı yerlerde zayıfsınız; zorluk çıktığında ikiniz de aynı noktada takılırsınız.",
      },
      NURTURING: {
        name: "Biri besler, biri açar",
        body: "Enerji tek yöne akar. Alan taraf rahat eder ve yapmak istedikleri çoğalır; veren taraf ise karşısındakinin iyi gitmesinden doyum alır. Akış tek yönlü olduğu için geri dönen bir şey olmazsa veren taraf zamanla tükenir.",
      },
      TENSION: {
        name: "Biri diğerini toparlar",
        body: "Biriniz diğerini dizginleyen konumdadır. Bu gerilim ikinizin de gevşemesini engeller ve birlikte çalışırken sonuç almanızı sağlar. Dizginlenen taraf sürekli değerlendiriliyormuş gibi hissedebilir; bu yüzden düzeltmeden önce takdir gelmelidir.",
      },
    },
    leadNote: {
      NURTURING: "Bu ilişkide enerjiyi veren taraf **{lead}**.",
      TENSION: "Bu ilişkide tempoyu belirleyen taraf **{lead}**.",
    },
  },
  tenGods: {
    BIGYEON: {
      name: "Yoldaş (比肩)",
      body: "Omuz omuza duran biri. Konuşması kolay, yanında olmak rahat — ama ikiniz aynı şeyi istediğinizde geri adım atmak zor.",
    },
    GEOPJAE: {
      name: "Rakip (劫財)",
      body: "Benzer, ama işi başka türlü yapan biri. Aynı yöne yüklendiğinizde güçlü olursunuz; paylaşılacak bir şey çıktığında hesap keskinleşir.",
    },
    SIKSIN: {
      name: "İfade (食神)",
      body: "İçinizdekini dışarı çıkaran biri. Yanında daha çok konuşur, daha çok şey yapmak istersiniz. En rahat konumlardan biridir.",
    },
    SANGGWAN: {
      name: "Sarsıcı (傷官)",
      body: "Kalıbınızı sarsan biri. İlginç ve kışkırtıcıdır — ama aranızda sözler sertleştiğinde açtığı iz uzun sürer.",
    },
    PYEONJAE: {
      name: "Beklenmedik Varlık (偏財)",
      body: "Kollamak isteyeceğiniz biri. Anlık keyifler boldur, ama ilişkinin ağırlığı hafif kalabilir.",
    },
    JEONGJAE: {
      name: "Düzenli Varlık (正財)",
      body: "Gelenekte erkek için eş konumu. İlgi istikrarlı gelir ve ilişki zirvelerden çok sıradan günlere yerleşir.",
    },
    PYEONGWAN: {
      name: "Meydan Okuyan (偏官)",
      body: "Sizi tetikte tutan biri. Çekim güçlüdür, gözünüzü ayırmak zordur; ama uzun süren yakınlık baskı gibi hissettirmeye başlayabilir.",
    },
    JEONGGWAN: {
      name: "Otorite (正官)",
      body: "Gelenekte kadın için eş konumu. Sizi yoluna sokar, ilişkiye düzen ve sağlamlık getirir.",
    },
    PYEONIN: {
      name: "Sıra Dışı Destek (偏印)",
      body: "Size alışılmadık bir yoldan yardım eden biri. Gerçekten derinleşen anlar olur, ama birbirinizin yöntemini anlamak zaman alır.",
    },
    JEONGIN: {
      name: "Kollayan (正印)",
      body: "Sizi kucaklayan ve gözeten biri. Yaslanmak istersiniz, içiniz rahatlar. Ama yaslanma hep tek yönlü olursa ilişki yana yatar.",
    },
  },
  dayMasters: {
    甲: { name: "Yang Ağaç (甲)", trait: "Dümdüz büyüyen uzun bir ağaç. Yön bir kez belirlendi mi sapmaz, eğilmektense dayanmayı seçer." },
    乙: { name: "Yin Ağaç (乙)", trait: "Sarmaşık — esnek bir ot. İlerlemek için koşullara göre eğilir ve kopmaz." },
    丙: { name: "Yang Ateş (丙)", trait: "Öğle güneşi. Duygular açıkça görünür, ortam aydınlanır, öne çıkmak doğal gelir." },
    丁: { name: "Yin Ateş (丁)", trait: "Mum ışığı. Sessizce ve uzun yanar, önce en yakınındakini ısıtır." },
    戊: { name: "Yang Toprak (戊)", trait: "Açık arazi ve dağlar. Sarsılması zordur, yaslanması kolaydır; ama bir kez verdiği kararı ağır değiştirir." },
    己: { name: "Yin Toprak (己)", trait: "Tarla toprağı. Geleni alır ve büyütür; sergilemekten çok gözetir." },
    庚: { name: "Yang Metal (庚)", trait: "İşlenmemiş demir. Kararlı ve nettir, askıda kalan işlere sabrı azdır." },
    辛: { name: "Yin Metal (辛)", trait: "Yontulmuş bir mücevher. İnce bir zevki ve yüksek ölçüleri vardır; özensizliği geçiştiremez." },
    壬: { name: "Yang Su (壬)", trait: "Irmak ve deniz. Bakışı geniştir, işlerin nasıl aktığını görür." },
    癸: { name: "Yin Su (癸)", trait: "Çiy ve yağmur. Sessizce sızar, sözden önce havayı okur." },
  },
  dayMasterSigns: {
    甲: [
      "İlk tanışmada bile ne düşünüyorsa onu söyler.",
      "Bir kez kurduğu planı ya da verdiği sözü kolay kolay değiştirmez.",
      "Reddederken sözü dolandırmaz; bu sert duyulabilir.",
    ],
    乙: [
      "Çatışmanın etrafından dolaşır, başka bir yol tutar.",
      "Yumuşak görünür ama sonunda gitmek istediği yerdedir.",
      "Bir gruba katılmadan önce ortamı okur.",
    ],
    丙: [
      "Yeni tanıştığı kişiye ilk kendisi söz atar.",
      "Neyi sevip sevmediği yüzünden okunur.",
      "Kalabalıkta çabalamadan ortada bulur kendini.",
    ],
    丁: [
      "Başta sessizdir; yakınlaştıkça özenle ilgilenir.",
      "Kalabalık yerine bir iki kişiyle uzun uzun konuşmayı sever.",
      "Geçerken söylenmiş bir sözü aklında tutar, sonra çıkarır.",
    ],
    戊: [
      "Az konuşur; acele işlerde bile sesi zor yükselir.",
      "Herkes kararı ertelerken sonunda toparlayan kişidir.",
      "Bir kez hayır dediyse o hayır uzun süre öyle kalır.",
    ],
    己: [
      "Konuştuğundan daha uzun dinler.",
      "Reddetmekte zorlanır, işler üstüne yığılır.",
      "Sessizce hallettiği şeyler ancak sonradan ortaya çıkar.",
    ],
    庚: [
      "Çabuk karar verir ve kararını orada söyler.",
      "Sözü yumuşatmaz; bu soğuk gelebilir.",
      "Bir iş uzadığında sıkıldığı gözle görülür.",
    ],
    辛: [
      "Giyimi ve seçtiği eşyalar konusunda net ölçüleri vardır.",
      "Yarım bırakılmış bir işi söylemeden geçemez.",
      "Övgüde cimridir ama bir kez takdir ettiyse gerçekten öyledir.",
    ],
    壬: [
      "Her türden insanla rahat kaynaşır.",
      "Önündeki işten önce sonrasında olacakları konuşur.",
      "Uzun süre tek yere bağlı kalmak onu sıkar.",
    ],
    癸: [
      "Az konuşur ama durumu tam olarak okumuştur.",
      "Havanın değiştiğini ilk fark eden odur.",
      "İç dünyasını kolay açmaz; onu tanımak zaman alır.",
    ],
  },
  animalTraits: {
    rat: "Çabuk fark eder, önemli olanı çabuk güvenceye alır. Kriz anında ilk hareket eden odur.",
    ox: "Ağır görünür ama işi sonuna götürür. Üstlendiğini bırakmaz.",
    tiger: "Korkusuzdur ve önden gider. Haksızlığı görmezden gelemez.",
    rabbit: "Yumuşak ve sezgilidir. Çarpışmak yerine dolaşmayı bilir.",
    dragon: "Gönlü geniş, idealleri yüksektir. Sıradan olanla nadiren yetinir.",
    snake: "İçini kolay açmaz, derin düşünür. Değerlendirmesi isabetlidir.",
    horse: "Neşeli ve hareketlidir. En zor geldiği şey bir yere kapatılmaktır.",
    goat: "Sıcak ve düşüncelidir. Sert sözleri uzun süre içinde taşır.",
    monkey: "Becerikli ve çabuk uyum sağlar. Tekrardan sıkılır.",
    rooster: "Çalışkan ve titizdir. Yerinde olmayan bir şeyi öylece bırakamaz.",
    dog: "Bir kez güvendi mi sonuna kadar sadıktır. İhanet onu özellikle derinden yaralar.",
    pig: "Cömert ve açık sözlüdür. Kolay güvenir, bunun bedelini ödediği olur.",
  },
  affinity: {
    menu: "Eşleşme profili",
    formTitle: "Size nasıl biri uyar",
    formDescription:
      "Tek bir doğum tarihi yeter. Kimsenin doğum gününü bilmeden de, aklınızda henüz biri yokken de okuyabilirsiniz.",
    meLegend: "Siz",
    genderHint:
      "Geleneksel Saju eş konumunu cinsiyete göre farklı okur. Boş bırakırsanız o etken tahmin edilmez, hesaplamadan çıkarılır.",
    seekingLabel: "Aradığınız kişi",
    seekingHint:
      "Eş konumu (Jeongjae / Jeonggwan) ancak iki tarafın da cinsiyeti bilindiğinde belirlenebilir.",
    seekingAny: "Belirtilmedi",
    submit: "Reklamı izle ve ilişki sonucunu gör",
    submitting: "Okunuyor…",

    resultTitle: "Eşleşme profiliniz",
    intro:
      "Haritanızın yöneldiği insan dokusunu derledik. **Bu tipleri, doğum gününü öğrenmeden çok önce mizaçlarından tanıyabilirsiniz.**",
    scoreCaption:
      "Bunlar uyum motorunun kullandığı etken puanlarının aynısıdır — birleştirilmiş bir eşleşme oranı değildir.",
    meTitle: "Sizin durduğunuz yer",
    meBody: "Siz {dayMaster} tipindesiniz; şu anki durumunuz: {strength}.",
    meHint:
      "Saju, doğum yılınızı, ayınızı, gününüzü ve saatinizi sekiz karakterle yazar. **Doğduğunuz günün ilk karakteri sizi temsil eder** — buna gün efendisi denir. Aşağıdaki tiplerin tamamı bu tek karaktere göre ayrılmıştır.",
    bestTitle: "Size uyan dokular",
    bestHint:
      "Bu, karşınızdakinin gün efendisidir — **doğduğu günün enerjisi** — on türe ayrılır ve bunlardan üçü sizinkiyle iyi kenetlenir. Doğum gününü öğrenmeden çok önce, aşağıdaki davranışlardan çoğu zaman tahmin edebilirsiniz.",
    signsTitle: "Dışarıdan böyle görünür",
    avoidTitle: "Emek isteyen dokular",
    avoidHint:
      "Bu bir uyarı değildir. Rahatlığın sonradan, ikiniz de zaman ayırdıktan sonra geleceği anlamına gelir.",
    bondLabel: "Mizaç uyumu",
    spouseLabel: "Eş konumu",
    spouseSkipped: "Cinsiyet belirtilmediği için bu etken hesaba katılmadı",
    scoreHelp:
      "**Mizaç uyumu** — doğduğunuz iki günün enerjisinin birbirine nasıl kenetlendiğine bakar. İtme çekme ilişkisi olsa bile yin ile yang çaprazlandığında en yüksek puanı alır.\n**Eş konumu** — geleneksel Saju eş için ayrı bir konum tanımlar: erkekte Jeongjae, kadında Jeonggwan. Bunu **iki yönlü** kontrol ederiz — karşınızdaki sizin için o konumda mı, siz onun için o konumda mısınız. İkisi birden olduğunda gelenek bu eşleşmeye en yüksek değeri verir.",
    typeHeading: "{name} gibi biri",
    needTitle: "Şu anda eksiğiniz olan",
    needBody:
      "Karşınızdaki kişide {elements} güçlü akıyorsa, sizde ince kalan yeri doldurur.",
    needHint:
      "Birinin beş elementini bakışta okuyamazsınız. Ama doğum tarihini öğrendiğinizde önce buraya bakın.",
    zodiacTitle: "Yan not olarak burç",
    zodiacHint:
      "Burç için yalnızca doğum yılı gerekir, bu yüzden en hızlı bakılacak şeydir. Aynı zamanda dört sütundan yalnızca biridir — ipucu olarak alın.",
    zodiacGood: "Size uyan burçlar",
    zodiacHard: "Sürtüşen burçlar",
    tableType: "Tür",
    tableSign: "Burç",
    tableYears: "Doğum yılları",
    bornYear: "{year} doğumlu",
    younger: "{n} yaş küçük",
    older: "{n} yaş büyük",
    sameAge: "aynı yaş",
    zodiacYearsCaution:
      "Saju'da yıl 1 Ocak'ta değil, Ipchun'da (4 Şubat civarı) döner. **Ocak ya da Şubat başında doğan herkes bir önceki yılın burcuna aittir**, bu yüzden o tarihlerde doğanlar için iki yılı da kontrol edin.",
    dayBranchTitle: "Bu kişi bana uyar mı?",
    dayBranchBody:
      "Birinin size uyup uymadığını anlamak için bir doğum tarihi yeter.\nTam yorum için sayfanın altındaki Saju uyumunu kullanın.",
    check: {
      button: "Birinin doğum gününü kontrol et",
      title: "Bu kişi hangi dokuda?",
      body: "Bir doğum tarihi girin, yukarıdaki on tipten hangisi olduğunu söyleyelim. Uyum puanı hesaplanmaz.",
      submit: "Kontrol et",
      checking: "Kontrol ediliyor…",
      rank: "sizin {rank}. sıranız",
      heading: "Bu kişi {name} tipinde",
      caution:
        "Bu yalnızca doğum gününü okur. **Gece yarısı civarında doğduysa** gün iki yandan birine kayabilir; Ocak ya da Şubat başı doğum günleri de bir önceki yılın burcuna aittir.",
      close: "Kapat",
      another: "Başka birini kontrol et",
      error: "Lütfen tarihi kontrol edin — böyle bir tarih yok ya da aralık dışında.",
    },
    nextTitle: "Aklınızda biri mi var?",
    nextBody:
      "İki doğum tarihini girin, yukarıdaki etkenlerin tamamı toplanarak gerçek eşleşme oranı çıksın.",
    nextButton: "Saju uyumuna bak",
    recalculate: "Yeniden oku",
    copyLink: "Sonuç bağlantısını kopyala",
    copied: "Kopyalandı",
    missingInput: "Sonucu okuyamadık. Lütfen baştan başlayın.",
    partialTime:
      "Doğum saati girilmediği için saat sütunu hesaba katılmadı. Saati eklemek neyin eksik olduğunu netleştirir.",
    disclaimer:
      "Geleneksel Saju bakışıyla hazırlanmış bir yol göstericidir. Belirli birini aramanızı ya da ondan kaçınmanızı söylemez.",
  },
  result: {
    title: "Uyum sonucu",
    totalLabel: "Eşleşme oranı",
    breakdown: "Etkenlere göre puan",
    recalculate: "Baştan başla",
    copyLink: "Sonuç bağlantısını kopyala",
    copied: "Kopyalandı",
    missingInput: "Bu sonuç okunamadı. Lütfen tarihleri yeniden girin.",
    partialTime:
      "Doğum saati girilmediği için saat sütunu hesaba katılmadı. Saati eklemek yorumu daha kesin yapar.",
    engineVersion: "Hesaplama sürümü",
    disclaimer:
      "Bu, yol gösterici olarak sunulan geleneksel bir Saju yorumudur. Bilimsel bir öngörü ya da herhangi bir ilişki hakkında bir hüküm değildir.",
  },
  ads: { label: "Reklam" },
  analyzing: {
    title: "İki harita karşılaştırılıyor",
    quotes: [
      "Doğru kişiyle tanışmaktan çok, onu tanırsınız.",
      "İyi bir eşleşme hiç tartışmayan değil, tartıştıktan sonra geri dönendir.",
      "Saju sabit bir cevap değildir. Birbirini anlamak için bir dildir.",
      "Bazı eşleşmeler benzediğiniz için kolaydır; bazıları benzemediğiniz için öğretir.",
      "Uzun süren ilişkiler genellikle hiçbir şeyin uzun süre söylenmeden kalmadığı ilişkilerdir.",
      "Karşınızdakinin yolu size yabancı geliyorsa, onda sizde olmayan bir şey var demektir.",
      "Uyumun yarısı doğuştandır, yarısı kurulur.",
      "Yaslanmakla vermek sırayla değiştiğinde ilişki uzun sürer.",
      "Puandan daha önemlisi, o puanı nasıl okuduğunuzdur.",
      "Mevsimleriniz farklıysa, birbirinize kendi mevsiminizin nasıl olduğunu anlatın.",
    ],
    watching: "Reklam izleniyor",
    remaining: "Sonucunuz {seconds} sn içinde açılır",
  },
  report: {
    title: "Bu yorumu PDF olarak saklayın",
    body:
      "Bu sonucu 7 sayfalık bir PDF'e dönüştürüyoruz. **Bu sayfaların dördü ekranda hiç yok** — enerji hangi yöne akıyor, her iki haritaya daha yakından bakış, dört direğin buluştuğu yer ve hesabın nasıl yapıldığı.",
    buyButton: "{price} ödeyip indirin",
    preparing: "Henüz kullanılamıyor",
    ordering: "Siparişiniz oluşturuluyor…",
    paying: "Ödeme işleniyor…",
    issuing: "Raporunuz hazırlanıyor…",
    done: "İndirildi. Yeniden indirmek için aşağıdaki düğmeyi kullanın.",
    failed: "Ödeme ya da indirme başarısız oldu. Lütfen biraz sonra tekrar deneyin.",
    retry: "Yeniden indir",
    contents: [
      "1. sayfa — eşleşme oranı, bu eşleşmenin güçlü yanı ve dikkat edilecek yan",
      "2. sayfa — ilişkinin biçimi, on tanrı ve etkenlere göre puanlar",
      "3. sayfa — iki harita ve element gücü",
          "4. sayfa — enerji hangi yöne akıyor ve dört direğin buluştuğu yer",
      "5. sayfa — her iki haritaya daha yakından bakış (mevsimin öne ittiği)",
      "6. sayfa — onun her direği sizin için nedir",
      "7. sayfa — bu haritalar böyle hesaplandı",
    ],
    consentLabel:
      "Bu ürünün ödeme sonrası anında teslim edilen dijital içerik olduğunu ve **indirme tamamlandıktan sonra basit fikir değişikliğine dayalı cayma hakkının kısıtlandığını** anladım.",
    consentRequired: "Ödeme yapmadan önce lütfen cayma koşullarını onaylayın.",
    productInfoTitle: "Ürün bilgileri",
    productInfo: [
      ["Sağlayıcı", "{brand}"],
      ["Biçim", "Bir PDF belgesi (7 sayfa), ödemeden hemen sonra ekrandan indirilir."],
      ["Gereksinimler", "PDF açabilen herhangi bir cihaz. Kurulum ya da hesap gerekmez."],
      ["Kullanım süresi", "Sınır yok. İndirdiğiniz dosya sizde kalır."],
      ["Yeniden indirme", "Aynı sipariş için en fazla beş kez. Dosyanın kopyasını saklamadığımız için sonuç ekranından ayrıldıktan sonra yeniden üretilemez."],
      ["Cayma", "İndirme başlamadan önce tam iade. İndirme tamamlandıktan sonra fikir değişikliğine dayalı cayma kısıtlanır (Kore E-Ticaret Kanunu md. 17/2)."],
      ["İade masrafları", "Yok — dijital içerik, gönderilen bir şey yok."],
    ],
    refundContact:
      "İade ve sorularınız için aşağıdaki müşteri hizmetlerine ya da e-posta adresine yazın. Belge üretilemediyse ya da tahsil edilen tutar siparişten farklıysa tamamını iade ederiz.",
    pdfLanguageNotice:
      "PDF, bu ekranla aynı dilde oluşturulur.",
  },
  affinityReport: {
    title: "Eşleşme profilinizi PDF olarak saklayın",
    body: "Bu yorumu dört sayfalık bir PDF belgesine dönüştürüyoruz. İçinde **ekranda görünmeyen tam sıralama** da var — ekran size ilk üçü verir, PDF on tipin ve on iki burcun tamamını taşır.",
    buyButton: "{price} ödeyip indirin",
    preparing: "Hazırlanıyor",
    ordering: "Sipariş oluşturuluyor…",
    paying: "Ödeme işleniyor…",
    issuing: "Raporunuz oluşturuluyor…",
    done: "İndirildi. Yeniden almak için aşağıdaki düğmeyi kullanın.",
    failed: "Ödeme ya da indirme tamamlanmadı. Lütfen kısa süre sonra tekrar deneyin.",
    retry: "Yeniden indir",
    contents: [
      "1. sayfa — Durduğunuz yer ve şu anda eksiğiniz olan",
      "2. sayfa — Size uyan üç doku, davranış ipuçlarıyla",
      "3. sayfa — Emek isteyen doku ve gün efendisi tam sıralaması",
      "4. sayfa — On iki burcun tam sıralaması, doğum yıllarıyla",
    ],
    consentLabel:
      "Bu, ödemeden hemen sonra teslim edilen dijital içeriktir. **İndirme tamamlandıktan sonra fikir değişikliğine dayalı cayma hakkının sınırlandığını** anlıyorum.",
    consentRequired: "Ödeme yapmadan önce lütfen cayma koşullarını kabul edin.",
    productInfoTitle: "Ürün bilgileri",
    productInfo: [
      ["Sağlayıcı", "{brand}"],
      ["Biçim", "Bir PDF belgesi (4 sayfa), ödemeden hemen sonra bu ekrandan indirilir."],
      ["Gereksinimler", "PDF açabilen herhangi bir cihaz. Kurulum yok, hesap yok."],
      ["Erişim", "Süre sınırı yok. İndirilen dosya sizindir."],
      ["Yeniden indirme", "Aynı sipariş için en fazla 5 kez. Dosyayı saklamadığımız için bu ekrandan ayrıldıktan sonra yeniden oluşturulamaz."],
      ["Cayma", "İndirme tamamlanmadan önce tam iade. Tamamlandıktan sonra fikir değişikliğine dayalı cayma sınırlanır."],
      ["İade masrafları", "Yok. Gönderilecek bir şey yok."],
    ],
    refundContact:
      "İade ve sorularınız için aşağıdaki destek hattına ya da e-posta adresine yazın. Belge hiç üretilmediyse ya da tahsil edilen tutar siparişten farklıysa tamamını iade ederiz.",
    pdfLanguageNotice:
      "PDF, bu ekranla aynı dilde oluşturulur.",
  },
  reportDetail: {
    supplyTitle: "Enerji hangi yöne akıyor",
    supplyHint: "Beş Element puanı iki yönün ortalamasıdır. Ortalama, kimin kimi beslediğini gizler. Burada bunları ayırıyoruz — bazı eşleşmelerde yalnızca bir taraf iyi besleniyor.",
    supplyReceiveLabel: "{name} ne kadar besleniyor",
    needsLabel: "Şimdi gereken",
    bondTitle: "İki Gün Efendisi arasındaki bağ",
    depthTitle: "Her iki haritaya daha yakından bakış",
    vitalityTitle: "Mevsimin öne ittiği",
    vitalityHint: "Çubuklar her elementten ne kadar bulunduğunu gösterir. Bu tablo, doğum ayının onu öne itip itmediğini gösterir. Aynı miktar Wang'da başka, Sa'da başka davranır.",
    vitalities: {
      WANG: { name: "Wang (旺)", body: "zirvesinde" },
      SANG: { name: "Sang (相)", body: "sırada yükselen" },
      HYU: { name: "Hyu (休)", body: "sırası geçtikten sonra dinlenmede" },
      SU: { name: "Su (囚)", body: "kapalı, hareketi güç" },
      SA: { name: "Sa (死)", body: "en zayıf hâlinde" },
    },
    seasonBoostTitle: "Ay onu ne kadar yükseltti",
    rawLabel: "Aydan önce",
    strengthLabel: "Aydan sonra",
    earthSeasonNote: "Geçiş ayında (辰未戌丑) doğum olduğu için Toprak da zirvede sayıldı.",
    allyRatioLabel: "Gün Efendisi tarafının payı",
    allyRatioHint: "Kaynak ile Denk toplamının bütüne oranı. %45'in üstü güçlü, %35'in altı zayıf sayılır. Kararın nerede düştüğünü görebilmeniz için sayıyı da yazıyoruz.",
    pillarsTitle: "Dört direğin buluştuğu yer",
    pillarsHint: "Uyum oranına yalnızca Gün dalı girer — eş makamı orasıdır. Diğer üç direk de aynı tabloyla okunabildiği için onları da veriyoruz.",
    branchRelations: {
      SAMHAP: "Üçlü uyum",
      BANHAP: "Yarım uyum",
      YUKHAP: "Altılı uyum",
      SAME: "Aynı dal",
      NEUTRAL: "İlişki yok",
      WONJIN: "Gizli kırgınlık",
      CHUNG: "Çarpışma",
    },
    pillarColumn: "Direk",
    relationColumn: "İlişki",
    relationScoreColumn: "Puan",
    tenGodColumn: "On Tanrı",
    stemGodsTitle: "Onun her direği sizin için nedir",
    stemGodsHint: "Uyum oranı yalnızca Gün Efendilerini karşılaştırır. Aynı kural onun diğer direkleri için de bir Tanrı belirler — o kişinin hangi yanının sizin için ne olduğu görünür.",
    seesLabel: "{from} açısından",
    notScoredNote: "Bu tablodaki puanlar uyum oranına dâhil değildir. Şiddeti karşılaştırabilesiniz diye yazılmıştır.",
    appendixTitle: "Bu harita böyle hesaplandı",
    timeCorrectionLabel: "Doğum saati",
    timeCorrectionApplied: "Gerçek güneş saatine düzeltilip {time} olarak okundu.",
    timeCorrectionNone: "Doğum saati verilmediği için Saat direği dışarıda bırakıldı.",
    timeCorrectionDateShift: "Düzeltme tarihi {date} tarihine taşıdı; Gün direği o günden alındı.",
    calendarLabel: "Haritanın çıkarıldığı tarih",
    solarLabel: "Güneş",
    lunarLabel: "Ay",
    lunarUnavailable: "Bu gün almanak tablosunda bulunmadığından ay takvimi tarihi yazılamadı.",
  },
  footer: {
    privacy: "Gizlilik",
    terms: "Şartlar",
    refund: "İade",
    pricing: "Fiyatlar",
    legalEntity: "Şirket",
    representative: "Temsilci",
    businessNumber: "Kayıt No.",
    mailOrderNumber: "Online satış",
    address: "Adres",
    customerCenter: "Müşteri hizmetleri",
    email: "Email",
    privacyOfficer: "Gizlilik sorumlusu",
    hostingProvider: "Hosting",
    providedBy: "Sağlayan",
    effective: "Yürürlük tarihi",
    backHome: "Ana sayfaya dön",
  },
  bands: {
    EXCELLENT: "Olağanüstü bir eşleşme",
    GOOD: "Güçlü bir eşleşme",
    FAIR: "İdare eden bir eşleşme",
    CHALLENGING: "Emek isteyen bir eşleşme",
  },
  engines: {
    saju: {
      name: "Saju uyumu",
      description:
        "Gün efendisi elementlerini, element dengesini ve gün dalını birlikte okur.",
    },
    zodiac: {
      name: "Burç uyumu",
      description: "İki doğum yılı dalı arasındaki ilişkiyi okur.",
    },
  },
  factors: {
    dayMasterRelation: "Gün efendisi elementleri",
    spouseStar: "Eş yıldızı",
    elementSupply: "Element beslemesi",
    dayBranchRelation: "Gün dalı",
    branchRelation: "Burçlar",
  },
  notes: {
    "strength.dayMasterRelation":
      "Mizaçlarınız birbirine hizmet eden bir konumda duruyor. Karşınızdakinin yolu size yabancı geldiğinde bile, sonunda sizde eksik olanı tamamlar.",
    "strength.spouseStar":
      "Her biriniz gelenekte eş konumu olarak okunan elementi taşıyorsunuz. Başından beri belirgin bir sebep olmadan rahat ettiyseniz, sebebi büyük olasılıkla budur.",
    "strength.elementSupply":
      "Her biriniz diğerinin şu anda ihtiyaç duyduğu şeyi taşıyorsunuz. Tek başınıza kımıldatmakta zorlandığınız işler birlikteyken daha kolay ilerler.",
    "strength.dayBranchRelation":
      "Gün dalı gelenekte eşin oturduğu yer olarak okunur. Sizinkiler birbiriyle iyi duruyor; bu da birlikte geçen zamanı rahat kılar.",
    "strength.branchRelation":
      "Burçlarınız birbiriyle iyi duruyor — dışarıdan doğal görünen ve ilk tanışmada kolay okunan türden bir eşleşme.",
    "caution.dayMasterRelation":
      "Mizaçların sürtüştüğü yer burası. Aynı iş karşısında hızınız ve yönteminiz farklı; bunu bile bile yapılmış gibi okumak kolaydır. Sonuçtan önce süreçte anlaşın.",
    "caution.spouseStar":
      "Hiçbiriniz geleneğin diğerinin eş konumu dediği elementi taşımıyorsunuz. Çekim hemen gelmeyebilir; bu, zamanla biriken türden bir eşleşme.",
    "caution.elementSupply":
      "Her birinizin ihtiyacı olan şey diğerinde de ince. İkinizin de iyi olduğu işte çok iyisiniz — ama ikinizin de eksik kaldığı yerler boş kalır. Onları ilişkinin dışından karşılamak daha iyi olur.",
    "caution.dayBranchRelation":
      "Birlikte yaşanan konumda sürtüşme olası. Genellikle büyük meselelerden çok küçük alışkanlıklarda ortaya çıkar; bu yüzden birkaç kuralı erkenden belirlemek işe yarar.",
    "caution.branchRelation":
      "Burçlarınız birbirinin karşısında duruyor. Olaylara farklı bakıyorsunuz; bu sürtüşme yaratır, ama aynı zamanda birbirinizden öğreneceğiniz çok şey var demektir.",

    "spouseStar.MUTUAL":
      "Her biriniz tam olarak diğerinin eş konumunda duruyorsunuz — geleneksel Saju'nun en yüksek değerlendirdiği eşleşme.",
    "spouseStar.STRONG":
      "Biriniz tam olarak eş konumunda, diğeriniz ona yakın bir konumda. Birbirinize duyduğunuzun büyüklüğü biraz farklı olabilir.",
    "spouseStar.PARTIAL":
      "Yalnızca biriniz diğerinin eş konumunda. İlk çekim tek yöne akmaya meyillidir, bu yüzden söylemeyi ertelememekte fayda var.",
    "spouseStar.SLIGHT":
      "Biriniz eş konumunun hemen yanında duruyor. Bu, ani bir çekim olarak gelmekten çok birlikte geçen zamanla birikir.",
    "spouseStar.NONE":
      "Hiçbiriniz geleneğin eş konumu dediği yerde durmuyorsunuz. Bu eşleşme çekimle değil, yan yana yaşayarak kurulur.",
    "dayMaster.CLASH_BONDED":
      "{elementA} ile {elementB} birbirini kısıtlar, ama kutupları terstir. Gelenek bunu eş eşleşmesi olarak okur — sürtünme bağlılığa dönüşme eğilimindedir.",
    "dayMaster.CLASH_HARSH":
      "{elementA} ile {elementB} aynı kutupta birbirini kısıtlar. Gerilim güçlüdür, her birinin diğerine yüklediği ağırlık da öyle.",
    "dayMaster.FLOW_GUARDED":
      "Biriniz enerjiyi dışarı verir, diğeriniz onu tutar. Sert olan dürtü karşı tarafta yumuşar — geleneğin korunmuş eşleşme dediği durum.",
    "dayMaster.FLOW_BLOCKED":
      "Biriniz enerjiyi dışarı verir, diğeriniz onu çekip alır. Burada veren taraf çabuk yorulur; bu yüzden her birinizin ne verip ne aldığını açıkça söylemesi iyi olur.",
    "dayMaster.PEER_EVEN":
      "İkiniz de {elementA} enerjisini aynı kutupla taşıyorsunuz. Bu, işleri eşit ve rahat kılar ama hiçbiriniz diğerini ileri itmez.",
    "dayMaster.PEER_RIVAL":
      "İkiniz de {elementA} enerjisini ters kutupla taşıyorsunuz. Çekim hızlıdır ama aynı alan için yarışırsınız.",
    "supply.AMPLE":
      "Her biriniz diğerinin ihtiyacı olandan bolca taşıyorsunuz. Birinci kişinin ihtiyacı {needA}, ikincisininki {needB} — ve karşı taraf bu yeri dolduruyor.",
    "supply.ENOUGH":
      "Her biriniz diğerinin ihtiyacı olandan makul bir pay taşıyorsunuz: birinci kişi için {needA}, ikinci kişi için {needB}.",
    "supply.THIN":
      "Her birinizin ihtiyacı olan — birinci kişi için {needA}, ikinci kişi için {needB} — diğerinde ince kalıyor.",
    "supply.SCARCE":
      "Hiçbiriniz diğerinin ihtiyacını kolayca karşılayamıyorsunuz: birinci kişi için {needA}, ikinci kişi için {needB}, ve her iki yer de boş duruyor. Bunu ilişkinin dışından karşılamak daha iyi olur.",
    "dayBranch.SAMHAP":
      "Gün dalları üçlü uyum oluşturuyor — eş konumundaki en güçlü eşleşme.",
    "dayBranch.BANHAP":
      "Gün dalları, bir üçlünün merkez harfi çevresinde yarım uyum oluşturuyor. Eş konumunda birbirine iyi giden bir eşleşme.",
    "dayBranch.YUKHAP": "Gün dalları altılı uyum oluşturuyor. Birbirinizi içinize çekiyorsunuz.",
    "dayBranch.SAME":
      "Gün dalları aynı. Bu işleri kolaylaştırır ama geriye pek yenilik bırakmaz.",
    "dayBranch.NEUTRAL": "Gün dalları arasında özel bir ilişki yok.",
    "dayBranch.WONJIN":
      "Gün dalları sessiz bir gücenme içinde. Açıkça patlayan pek bir şey olmaz ama adı konulamayan kırgınlıklar birikir — sonraya bırakmaktansa o anda söylemek daha iyi.",
    "dayBranch.CHUNG":
      "Gün dalları çatışıyor. Bu konum sürtüşmeye açıktır, bu yüzden birbirinizle nasıl konuştuğunuz önemlidir.",
    "zodiac.SAMHAP":
      "{animalA} ile {animalB} burçları üçlü uyum oluşturur — burç uyumunun en iyisi.",
    "zodiac.BANHAP":
      "{animalA} ile {animalB} burçları bir üçlünün merkezi çevresinde yarım uyum oluşturur, bu yüzden birbirinize uyarsınız.",
    "zodiac.YUKHAP": "{animalA} ile {animalB} burçları altılı uyum oluşturur. Birbirinize iyi uyarsınız.",
    "zodiac.SAME": "İkiniz de {animalA} yılında doğdunuz; mizaçlarınız birbirini yankılıyor.",
    "zodiac.NEUTRAL": "{animalA} ile {animalB} burçları arasında özel bir ilişki yok.",
    "zodiac.WONJIN":
      "{animalA} ile {animalB} burçları sessiz bir gücenme içindedir — açık bir kavga nadirdir ama ince bir uyumsuzluk uzun sürme eğilimindedir.",
    "zodiac.CHUNG":
      "{animalA} ile {animalB} burçları çatışır. Keskin biçimde farklısınız; bu da öğrenilecek çok şey var demektir.",
  },
  animals: {
    rat: "Fare",
    ox: "Öküz",
    tiger: "Kaplan",
    rabbit: "Tavşan",
    dragon: "Ejderha",
    snake: "Yılan",
    horse: "At",
    goat: "Keçi",
    monkey: "Maymun",
    rooster: "Horoz",
    dog: "Köpek",
    pig: "Domuz",
  },
  elements: {
    WOOD: "Ağaç",
    FIRE: "Ateş",
    EARTH: "Toprak",
    METAL: "Metal",
    WATER: "Su",
  },
};
