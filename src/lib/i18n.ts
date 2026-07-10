import type { Locale } from "@/lib/services";

type ServiceLandingCopy = {
  audience: string;
  title: string;
  description: string;
};

type LandingCopy = {
  badge: string;
  heroLines: [string, string, string];
  descriptionLines: [string, string, string];
  primaryCta: string;
  secondaryCta: string;
  servicePickerTitle: string;
  servicePickerHint: string;
  currentLanguage: string;
  moreLanguages: string;
  closeLanguages: string;
  services: Record<string, ServiceLandingCopy>;
};

const serviceCopies: Record<Locale, LandingCopy["services"]> = {
  ko: {
    "hanja-meaning": {
      audience: "이미 한글 이름을 정한 부모",
      title: "한자 의미 매칭",
      description:
        "한글 이름의 소리를 유지하면서 인명용 한자, 뜻, 배제 사유를 함께 제안합니다.",
    },
    "korean-to-global": {
      audience: "유학, 이민, 해외 비즈니스",
      title: "글로벌 이름 변환",
      description:
        "한국 이름의 소리와 의미를 살려 영어, 일본어, 중국어, 유럽권 이름으로 확장합니다.",
    },
    "global-to-korean": {
      audience: "한국 이름이 필요한 외국인",
      title: "한국 이름 만들기",
      description:
        "국가, 생년월일, 사용 맥락을 반영해 자연스럽고 설명 가능한 한글 이름을 제안합니다.",
    },
  },
  en: {
    "hanja-meaning": {
      audience: "Parents with a Korean name",
      title: "Hanja Meaning Match",
      description:
        "Match a Korean name with name-use Hanja, meanings, and clear exclusion reasons.",
    },
    "korean-to-global": {
      audience: "Study, immigration, global work",
      title: "Korean to Global Name",
      description:
        "Adapt the sound and meaning of a Korean name for English, Japanese, Chinese, and European contexts.",
    },
    "global-to-korean": {
      audience: "Foreigners who need a Korean name",
      title: "Create a Korean Name",
      description:
        "Suggest natural Hangul names based on country, birth profile, and real Korean usage.",
    },
  },
  ja: {
    "hanja-meaning": {
      audience: "韓国語名を決めたご家族",
      title: "漢字意味マッチング",
      description:
        "韓国語名の音を保ちながら、人名用漢字、意味、除外理由を提案します。",
    },
    "korean-to-global": {
      audience: "留学、移住、海外ビジネス",
      title: "グローバル名変換",
      description:
        "韓国名の音と意味を生かし、海外で自然に使える名前へ整えます。",
    },
    "global-to-korean": {
      audience: "韓国名が必要な外国人",
      title: "韓国名を作成",
      description:
        "国、出生情報、使用場面を反映し、自然なハングル名を提案します。",
    },
  },
  zh: {
    "hanja-meaning": {
      audience: "已决定韩文名的父母",
      title: "汉字含义匹配",
      description:
        "在保留韩文名发音的基础上，推荐可用于人名的汉字、含义和排除理由。",
    },
    "korean-to-global": {
      audience: "留学、移民、海外商务",
      title: "韩文名全球化",
      description:
        "根据韩文名的声音和含义，转换为适合多语境使用的名字。",
    },
    "global-to-korean": {
      audience: "需要韩文名的外国人",
      title: "创建韩文名",
      description:
        "结合国家、出生资料和使用场景，推荐自然且易说明的韩文名。",
    },
  },
  de: {
    "hanja-meaning": {
      audience: "Eltern mit festem koreanischem Namen",
      title: "Hanja-Bedeutung",
      description:
        "Ordnet einem koreanischen Namen passende Namens-Hanja, Bedeutungen und Ausschlussgründe zu.",
    },
    "korean-to-global": {
      audience: "Studium, Migration, Business",
      title: "Globaler Name",
      description:
        "Überträgt Klang und Bedeutung eines koreanischen Namens in passende internationale Varianten.",
    },
    "global-to-korean": {
      audience: "Ausländer mit koreanischem Namen",
      title: "Koreanischen Namen erstellen",
      description:
        "Erstellt natürliche Hangul-Namen nach Land, Geburtsprofil und koreanischem Nutzungskontext.",
    },
  },
  es: {
    "hanja-meaning": {
      audience: "Familias con nombre coreano definido",
      title: "Significado Hanja",
      description:
        "Relaciona un nombre coreano con Hanja de uso personal, significados y motivos de descarte.",
    },
    "korean-to-global": {
      audience: "Estudios, migración, negocios",
      title: "Nombre global",
      description:
        "Adapta el sonido y significado de un nombre coreano para contextos internacionales.",
    },
    "global-to-korean": {
      audience: "Extranjeros que necesitan nombre coreano",
      title: "Crear nombre coreano",
      description:
        "Propone nombres Hangul naturales según país, perfil de nacimiento y uso en Corea.",
    },
  },
  fr: {
    "hanja-meaning": {
      audience: "Parents ayant choisi un prénom coréen",
      title: "Sens Hanja",
      description:
        "Associe un prénom coréen à des Hanja autorisés, avec sens et raisons d'exclusion.",
    },
    "korean-to-global": {
      audience: "Études, expatriation, affaires",
      title: "Nom global",
      description:
        "Adapte le son et le sens d'un nom coréen aux usages internationaux.",
    },
    "global-to-korean": {
      audience: "Étrangers voulant un nom coréen",
      title: "Créer un nom coréen",
      description:
        "Propose des noms Hangul naturels selon pays, naissance et contexte d'usage.",
    },
  },
  it: {
    "hanja-meaning": {
      audience: "Genitori con nome coreano scelto",
      title: "Significato Hanja",
      description:
        "Abbina il nome coreano a Hanja per nomi propri, con significati e motivi di esclusione.",
    },
    "korean-to-global": {
      audience: "Studio, migrazione, business",
      title: "Nome globale",
      description:
        "Adatta suono e significato di un nome coreano per contesti internazionali.",
    },
    "global-to-korean": {
      audience: "Stranieri che vogliono un nome coreano",
      title: "Crea nome coreano",
      description:
        "Propone nomi Hangul naturali in base a paese, nascita e uso in Corea.",
    },
  },
  pt: {
    "hanja-meaning": {
      audience: "Famílias com nome coreano definido",
      title: "Significado Hanja",
      description:
        "Relaciona o nome coreano a Hanja permitidos, com sentidos e motivos de exclusão.",
    },
    "korean-to-global": {
      audience: "Estudo, imigração, negócios",
      title: "Nome global",
      description:
        "Adapta som e significado de um nome coreano para contextos internacionais.",
    },
    "global-to-korean": {
      audience: "Estrangeiros que precisam de nome coreano",
      title: "Criar nome coreano",
      description:
        "Sugere nomes em Hangul conforme país, nascimento e uso real na Coreia.",
    },
  },
  vi: {
    "hanja-meaning": {
      audience: "Cha mẹ đã chọn tên tiếng Hàn",
      title: "Ghép nghĩa Hanja",
      description:
        "Gợi ý Hanja dùng cho tên người, ý nghĩa và lý do loại trừ theo âm tên Hàn.",
    },
    "korean-to-global": {
      audience: "Du học, định cư, kinh doanh",
      title: "Tên toàn cầu",
      description:
        "Chuyển âm và ý nghĩa tên Hàn sang các ngữ cảnh quốc tế tự nhiên hơn.",
    },
    "global-to-korean": {
      audience: "Người nước ngoài cần tên Hàn",
      title: "Tạo tên tiếng Hàn",
      description:
        "Đề xuất tên Hangul tự nhiên theo quốc gia, ngày sinh và mục đích sử dụng.",
    },
  },
  th: {
    "hanja-meaning": {
      audience: "ครอบครัวที่มีชื่อเกาหลีแล้ว",
      title: "จับคู่ความหมายฮันจา",
      description:
        "เสนอฮันจาสำหรับชื่อบุคคล พร้อมความหมายและเหตุผลที่ควรตัดออก",
    },
    "korean-to-global": {
      audience: "เรียนต่อ ย้ายถิ่น ธุรกิจ",
      title: "ชื่อสากล",
      description:
        "ปรับเสียงและความหมายของชื่อเกาหลีให้เหมาะกับบริบทต่างประเทศ",
    },
    "global-to-korean": {
      audience: "ชาวต่างชาติที่ต้องการชื่อเกาหลี",
      title: "สร้างชื่อเกาหลี",
      description:
        "แนะนำชื่อฮันกึลที่เป็นธรรมชาติตามประเทศ ข้อมูลเกิด และการใช้งานจริง",
    },
  },
  id: {
    "hanja-meaning": {
      audience: "Orang tua dengan nama Korea",
      title: "Makna Hanja",
      description:
        "Mencocokkan nama Korea dengan Hanja nama orang, makna, dan alasan pengecualian.",
    },
    "korean-to-global": {
      audience: "Studi, migrasi, bisnis global",
      title: "Nama global",
      description:
        "Menyesuaikan bunyi dan makna nama Korea untuk konteks internasional.",
    },
    "global-to-korean": {
      audience: "Orang asing yang butuh nama Korea",
      title: "Buat nama Korea",
      description:
        "Menyarankan nama Hangul alami berdasarkan negara, data lahir, dan konteks Korea.",
    },
  },
  ru: {
    "hanja-meaning": {
      audience: "Родители с выбранным корейским именем",
      title: "Значение ханча",
      description:
        "Подбирает разрешенные ханча, значения и причины исключения для корейского имени.",
    },
    "korean-to-global": {
      audience: "Учеба, переезд, международная работа",
      title: "Глобальное имя",
      description:
        "Адаптирует звучание и смысл корейского имени для международной среды.",
    },
    "global-to-korean": {
      audience: "Иностранцы, которым нужно корейское имя",
      title: "Создать корейское имя",
      description:
        "Предлагает естественные имена хангыль с учетом страны, рождения и контекста.",
    },
  },
  ar: {
    "hanja-meaning": {
      audience: "آباء اختاروا اسما كوريا",
      title: "مطابقة معنى الهانجا",
      description:
        "اقتراح هانجا مناسبة للاسم الكوري مع المعاني وأسباب الاستبعاد.",
    },
    "korean-to-global": {
      audience: "دراسة أو هجرة أو أعمال عالمية",
      title: "اسم عالمي",
      description:
        "تحويل صوت ومعنى الاسم الكوري إلى خيارات مناسبة للسياقات الدولية.",
    },
    "global-to-korean": {
      audience: "أجانب يحتاجون إلى اسم كوري",
      title: "إنشاء اسم كوري",
      description:
        "اقتراح أسماء هانغول طبيعية حسب الدولة وبيانات الميلاد والاستخدام في كوريا.",
    },
  },
  fil: {
    "hanja-meaning": {
      audience: "Mga magulang na may Korean name",
      title: "Kahulugan ng Hanja",
      description:
        "Itinutugma ang Korean name sa Hanja para sa pangalan, kasama ang kahulugan at dahilan ng pag-alis.",
    },
    "korean-to-global": {
      audience: "Pag-aaral, migrasyon, global work",
      title: "Global name",
      description:
        "Inaangkop ang tunog at kahulugan ng Korean name para sa internasyonal na paggamit.",
    },
    "global-to-korean": {
      audience: "Dayuhang kailangan ng Korean name",
      title: "Gumawa ng Korean name",
      description:
        "Nagmumungkahi ng natural na Hangul name ayon sa bansa, kapanganakan, at gamit sa Korea.",
    },
  },
  uz: {
    "hanja-meaning": {
      audience: "Koreyscha ism tanlagan ota-onalar",
      title: "Hanja ma'nosi",
      description:
        "Koreyscha ism tovushiga mos Hanja, ma'no va chiqarish sabablarini taklif qiladi.",
    },
    "korean-to-global": {
      audience: "O'qish, migratsiya, global ish",
      title: "Global ism",
      description:
        "Koreyscha ism tovushi va ma'nosini xalqaro muhitga moslashtiradi.",
    },
    "global-to-korean": {
      audience: "Koreyscha ism kerak bo'lgan xorijliklar",
      title: "Koreyscha ism yaratish",
      description:
        "Mamlakat, tug'ilish profili va Koreyada ishlatish maqsadiga mos Hangul ism taklif qiladi.",
    },
  },
  mn: {
    "hanja-meaning": {
      audience: "Солонгос нэр сонгосон эцэг эх",
      title: "Ханжа утга",
      description:
        "Солонгос нэрийн дуунд тохирох нэрийн ханжа, утга, хасах шалтгааныг санал болгоно.",
    },
    "korean-to-global": {
      audience: "Суралцах, шилжих, олон улсын ажил",
      title: "Глобал нэр",
      description:
        "Солонгос нэрийн дуу, утгыг олон улсын орчинд байгалийн болгоно.",
    },
    "global-to-korean": {
      audience: "Солонгос нэр хэрэгтэй гадаад хүн",
      title: "Солонгос нэр бүтээх",
      description:
        "Улс, төрсөн мэдээлэл, Солонгост хэрэглэх нөхцөлд тохирсон Хангыл нэр санал болгоно.",
    },
  },
  hi: {
    "hanja-meaning": {
      audience: "कोरियाई नाम चुन चुके माता-पिता",
      title: "हंजा अर्थ मिलान",
      description:
        "कोरियाई नाम की ध्वनि रखते हुए नाम-उपयोग हंजा, अर्थ और हटाने के कारण सुझाता है.",
    },
    "korean-to-global": {
      audience: "पढ़ाई, प्रवास, वैश्विक काम",
      title: "वैश्विक नाम",
      description:
        "कोरियाई नाम की ध्वनि और अर्थ को अंतरराष्ट्रीय संदर्भों के लिए ढालता है.",
    },
    "global-to-korean": {
      audience: "जिन विदेशियों को कोरियाई नाम चाहिए",
      title: "कोरियाई नाम बनाएं",
      description:
        "देश, जन्म प्रोफाइल और कोरिया में उपयोग के आधार पर स्वाभाविक हांगुल नाम सुझाता है.",
    },
  },
  tr: {
    "hanja-meaning": {
      audience: "Korece adı seçen aileler",
      title: "Hanja anlamı",
      description:
        "Korece adın sesini koruyarak ad için Hanja, anlam ve eleme nedenleri önerir.",
    },
    "korean-to-global": {
      audience: "Eğitim, göç, global iş",
      title: "Global ad",
      description:
        "Korece adın sesini ve anlamını uluslararası bağlamlara uyarlar.",
    },
    "global-to-korean": {
      audience: "Korece ada ihtiyaç duyan yabancılar",
      title: "Korece ad oluştur",
      description:
        "Ülke, doğum profili ve Kore'deki kullanım amacına göre doğal Hangul adlar önerir.",
    },
  },
  km: {
    "hanja-meaning": {
      audience: "ឪពុកម្តាយដែលមានឈ្មោះកូរ៉េរួចហើយ",
      title: "អត្ថន័យ Hanja",
      description:
        "ផ្គូផ្គងឈ្មោះកូរ៉េជាមួយ Hanja សម្រាប់ឈ្មោះមនុស្ស អត្ថន័យ និងមូលហេតុដែលគួរដកចេញ។",
    },
    "korean-to-global": {
      audience: "ការសិក្សា អន្តោប្រវេសន៍ ការងារសកល",
      title: "ឈ្មោះសកល",
      description:
        "កែសំឡេង និងអត្ថន័យឈ្មោះកូរ៉េឱ្យសមនឹងបរិបទអន្តរជាតិ។",
    },
    "global-to-korean": {
      audience: "ជនបរទេសដែលត្រូវការឈ្មោះកូរ៉េ",
      title: "បង្កើតឈ្មោះកូរ៉េ",
      description:
        "ណែនាំឈ្មោះ Hangul ធម្មជាតិតាមប្រទេស ព័ត៌មានកំណើត និងការប្រើប្រាស់នៅកូរ៉េ។",
    },
  },
  ms: {
    "hanja-meaning": {
      audience: "Ibu bapa dengan nama Korea",
      title: "Makna Hanja",
      description:
        "Memadankan nama Korea dengan Hanja nama orang, makna, dan sebab pengecualian.",
    },
    "korean-to-global": {
      audience: "Belajar, migrasi, kerja global",
      title: "Nama global",
      description:
        "Menyesuaikan bunyi dan makna nama Korea untuk konteks antarabangsa.",
    },
    "global-to-korean": {
      audience: "Warga asing yang perlukan nama Korea",
      title: "Cipta nama Korea",
      description:
        "Mencadangkan nama Hangul semula jadi mengikut negara, kelahiran, dan kegunaan di Korea.",
    },
  },
  kk: {
    "hanja-meaning": {
      audience: "Корейше есім таңдаған ата-ана",
      title: "Ханча мағынасы",
      description:
        "Корей есімінің дыбысына сай адам атына арналған ханча, мағына және алып тастау себептерін ұсынады.",
    },
    "korean-to-global": {
      audience: "Оқу, көшу, халықаралық жұмыс",
      title: "Ғаламдық есім",
      description:
        "Корей есімінің дыбысы мен мағынасын халықаралық ортаға бейімдейді.",
    },
    "global-to-korean": {
      audience: "Корейше есім қажет шетелдіктер",
      title: "Корейше есім жасау",
      description:
        "Ел, туған күн профилі және Кореяда қолдану мақсатына сай Hangul есімдерін ұсынады.",
    },
  },
  pl: {
    "hanja-meaning": {
      audience: "Rodzice z koreańskim imieniem",
      title: "Znaczenie Hanja",
      description:
        "Dobiera Hanja do koreańskiego imienia, wraz ze znaczeniem i powodami odrzucenia.",
    },
    "korean-to-global": {
      audience: "Studia, migracja, praca globalna",
      title: "Nazwa globalna",
      description:
        "Dostosowuje brzmienie i sens koreańskiego imienia do kontekstu międzynarodowego.",
    },
    "global-to-korean": {
      audience: "Cudzoziemcy potrzebujący koreańskiego imienia",
      title: "Stwórz koreańskie imię",
      description:
        "Proponuje naturalne imiona Hangul według kraju, urodzenia i użycia w Korei.",
    },
  },
};

export const landingCopies: Record<Locale, LandingCopy> = {
  ko: {
    badge: "Global Naming Studio",
    heroLines: ["소리, 의미, 문화권,", "생년월일의 균형까지", "설계하는 이름 서비스"],
    descriptionLines: [
      "한글 이름에 맞는 한자 의미부터 글로벌 이름 변환까지,",
      "이름이 실제로 쓰일 언어와 지역의 감각을 함께 살핍니다.",
      "부모의 바람, 사용 목적, 문화권의 뉘앙스를 한 흐름으로 연결합니다.",
    ],
    primaryCta: "한자 의미 매칭 시작",
    secondaryCta: "글로벌 이름 변환",
    servicePickerTitle: "목적별 시작",
    servicePickerHint: "첫 화면에서 바로 선택",
    currentLanguage: "현재 언어",
    moreLanguages: "더보기",
    closeLanguages: "닫기",
    services: serviceCopies.ko!,
  },
  en: {
    badge: "Global Naming Studio",
    heroLines: ["Sound, meaning,", "culture and birth,", "one name designed"],
    descriptionLines: [
      "From Hanja meaning for Korean names to global name adaptation,",
      "we read how a name feels in the language and region where it will be used.",
      "Family wishes, practical purpose, and cultural nuance are connected in one flow.",
    ],
    primaryCta: "Start Hanja matching",
    secondaryCta: "Create Korean name",
    servicePickerTitle: "Choose your purpose",
    servicePickerHint: "Start from the first screen",
    currentLanguage: "Current language",
    moreLanguages: "More",
    closeLanguages: "Close",
    services: serviceCopies.en!,
  },
  ja: {
    badge: "Global Naming Studio",
    heroLines: ["音、意味、文化圏、", "生年月日のバランスまで", "設計する名づけサービス"],
    descriptionLines: [
      "韓国語名に合う漢字の意味からグローバル名変換まで、",
      "実際に使われる言語と地域での響きを丁寧に見ます。",
      "家族の願い、利用目的、文化的ニュアンスを一つの流れで結びます。",
    ],
    primaryCta: "漢字意味を始める",
    secondaryCta: "韓国名を作る",
    servicePickerTitle: "目的別に開始",
    servicePickerHint: "最初の画面で選択",
    currentLanguage: "現在の言語",
    moreLanguages: "もっと見る",
    closeLanguages: "閉じる",
    services: serviceCopies.ja!,
  },
  zh: {
    badge: "Global Naming Studio",
    heroLines: ["声音、含义、文化圈，", "以及出生日期的平衡", "共同设计名字"],
    descriptionLines: [
      "从韩文名的汉字含义到全球化名字转换，",
      "我们一起判断名字在实际语言和地区中的感受。",
      "把家人的期望、使用目的和文化语感连接成一个完整方案。",
    ],
    primaryCta: "开始汉字匹配",
    secondaryCta: "创建韩文名",
    servicePickerTitle: "按目的开始",
    servicePickerHint: "在首页直接选择",
    currentLanguage: "当前语言",
    moreLanguages: "更多",
    closeLanguages: "关闭",
    services: serviceCopies.zh!,
  },
  de: {
    badge: "Global Naming Studio",
    heroLines: ["Klang, Sinn, Kultur", "Geburt im Blick", "Namen gestalten"],
    descriptionLines: [
      "Von Hanja-Bedeutungen für koreanische Namen bis zur globalen Namensanpassung,",
      "wir prüfen, wie ein Name in Sprache und Region tatsächlich wirkt.",
      "Familienwunsch, Nutzungszweck und kulturelle Nuance werden zusammengeführt.",
    ],
    primaryCta: "Hanja-Abgleich starten",
    secondaryCta: "Koreanischen Namen erstellen",
    servicePickerTitle: "Nach Zweck starten",
    servicePickerHint: "Direkt auf der Startseite wählen",
    currentLanguage: "Aktuelle Sprache",
    moreLanguages: "Mehr",
    closeLanguages: "Schließen",
    services: serviceCopies.de!,
  },
  es: {
    badge: "Global Naming Studio",
    heroLines: ["Sonido, sentido,", "cultura y nacimiento", "en un nombre"],
    descriptionLines: [
      "Desde el significado Hanja de un nombre coreano hasta su adaptación global,",
      "analizamos cómo se siente el nombre en el idioma y la región donde se usará.",
      "Unimos deseos familiares, propósito práctico y matices culturales.",
    ],
    primaryCta: "Iniciar Hanja",
    secondaryCta: "Crear nombre coreano",
    servicePickerTitle: "Elige tu propósito",
    servicePickerHint: "Selecciona desde la primera pantalla",
    currentLanguage: "Idioma actual",
    moreLanguages: "Más",
    closeLanguages: "Cerrar",
    services: serviceCopies.es!,
  },
  fr: {
    badge: "Global Naming Studio",
    heroLines: ["Son, sens, culture", "naissance équilibrée", "dans un nom"],
    descriptionLines: [
      "Du sens Hanja d'un prénom coréen à son adaptation mondiale,",
      "nous lisons l'effet du nom dans la langue et la région d'usage.",
      "Souhait familial, objectif pratique et nuance culturelle se rejoignent.",
    ],
    primaryCta: "Commencer le Hanja",
    secondaryCta: "Créer un nom coréen",
    servicePickerTitle: "Choisir un objectif",
    servicePickerHint: "Sélection immédiate",
    currentLanguage: "Langue actuelle",
    moreLanguages: "Plus",
    closeLanguages: "Fermer",
    services: serviceCopies.fr!,
  },
  it: {
    badge: "Global Naming Studio",
    heroLines: ["Suono, senso,", "cultura e nascita", "in un nome"],
    descriptionLines: [
      "Dal significato Hanja di un nome coreano all'adattamento globale,",
      "valutiamo come il nome risuona nella lingua e nella regione d'uso.",
      "Desideri familiari, scopo pratico e sfumature culturali si uniscono.",
    ],
    primaryCta: "Inizia Hanja",
    secondaryCta: "Crea nome coreano",
    servicePickerTitle: "Scegli lo scopo",
    servicePickerHint: "Seleziona subito",
    currentLanguage: "Lingua attuale",
    moreLanguages: "Altro",
    closeLanguages: "Chiudi",
    services: serviceCopies.it!,
  },
  pt: {
    badge: "Global Naming Studio",
    heroLines: ["Som, sentido,", "cultura e nascimento", "em um nome"],
    descriptionLines: [
      "Do significado Hanja de nomes coreanos à adaptação global,",
      "avaliamos como o nome funciona no idioma e na região de uso.",
      "Desejos familiares, objetivo prático e nuances culturais se conectam.",
    ],
    primaryCta: "Iniciar Hanja",
    secondaryCta: "Criar nome coreano",
    servicePickerTitle: "Escolha o objetivo",
    servicePickerHint: "Selecione na primeira tela",
    currentLanguage: "Idioma atual",
    moreLanguages: "Mais",
    closeLanguages: "Fechar",
    services: serviceCopies.pt!,
  },
  vi: {
    badge: "Global Naming Studio",
    heroLines: ["Âm, nghĩa, văn hóa", "và ngày sinh", "trong một tên"],
    descriptionLines: [
      "Từ nghĩa Hanja cho tên Hàn đến chuyển đổi tên toàn cầu,",
      "chúng tôi xem tên sẽ được cảm nhận thế nào trong ngôn ngữ và khu vực sử dụng.",
      "Mong muốn gia đình, mục đích dùng và sắc thái văn hóa được kết nối.",
    ],
    primaryCta: "Bắt đầu Hanja",
    secondaryCta: "Tạo tên Hàn",
    servicePickerTitle: "Chọn mục đích",
    servicePickerHint: "Bắt đầu ngay ở màn hình đầu",
    currentLanguage: "Ngôn ngữ hiện tại",
    moreLanguages: "Thêm",
    closeLanguages: "Đóng",
    services: serviceCopies.vi!,
  },
  th: {
    badge: "Global Naming Studio",
    heroLines: ["เสียงและความหมาย", "วัฒนธรรม วันเกิด", "ในชื่อเดียว"],
    descriptionLines: [
      "ตั้งแต่ความหมายฮันจาของชื่อเกาหลีจนถึงการปรับชื่อสากล",
      "เราดูว่าชื่อนั้นให้ความรู้สึกอย่างไรในภาษาและภูมิภาคที่ใช้จริง",
      "ความหวังของครอบครัว วัตถุประสงค์ และบริบทวัฒนธรรมจะเชื่อมกัน",
    ],
    primaryCta: "เริ่มฮันจา",
    secondaryCta: "สร้างชื่อเกาหลี",
    servicePickerTitle: "เลือกเป้าหมาย",
    servicePickerHint: "เลือกได้จากหน้าแรก",
    currentLanguage: "ภาษาปัจจุบัน",
    moreLanguages: "เพิ่มเติม",
    closeLanguages: "ปิด",
    services: serviceCopies.th!,
  },
  id: {
    badge: "Global Naming Studio",
    heroLines: ["Bunyi, makna,", "budaya dan lahir", "dalam satu nama"],
    descriptionLines: [
      "Dari makna Hanja untuk nama Korea hingga adaptasi nama global,",
      "kami menilai rasa nama dalam bahasa dan wilayah pemakaian nyata.",
      "Harapan keluarga, tujuan penggunaan, dan nuansa budaya disatukan.",
    ],
    primaryCta: "Mulai Hanja",
    secondaryCta: "Buat nama Korea",
    servicePickerTitle: "Pilih tujuan",
    servicePickerHint: "Mulai dari layar pertama",
    currentLanguage: "Bahasa saat ini",
    moreLanguages: "Lainnya",
    closeLanguages: "Tutup",
    services: serviceCopies.id!,
  },
  ru: {
    badge: "Global Naming Studio",
    heroLines: ["Звук и смысл", "культура и дата", "в одном имени"],
    descriptionLines: [
      "От значения ханча для корейского имени до глобальной адаптации,",
      "мы смотрим, как имя воспринимается в языке и регионе использования.",
      "Пожелания семьи, цель и культурный оттенок соединяются в один результат.",
    ],
    primaryCta: "Начать ханча",
    secondaryCta: "Создать корейское имя",
    servicePickerTitle: "Выберите цель",
    servicePickerHint: "Начните с первого экрана",
    currentLanguage: "Текущий язык",
    moreLanguages: "Еще",
    closeLanguages: "Закрыть",
    services: serviceCopies.ru!,
  },
  ar: {
    badge: "Global Naming Studio",
    heroLines: ["الصوت والمعنى", "والثقافة والميلاد", "في اسم واحد"],
    descriptionLines: [
      "من معنى الهانجا للأسماء الكورية إلى تحويل الاسم عالميا،",
      "نقرأ كيف سيبدو الاسم في اللغة والمنطقة التي سيستخدم فيها.",
      "رغبة العائلة والغرض العملي والحس الثقافي تجتمع في مسار واحد.",
    ],
    primaryCta: "ابدأ مطابقة الهانجا",
    secondaryCta: "أنشئ اسما كوريا",
    servicePickerTitle: "اختر الهدف",
    servicePickerHint: "ابدأ من الشاشة الأولى",
    currentLanguage: "اللغة الحالية",
    moreLanguages: "المزيد",
    closeLanguages: "إغلاق",
    services: serviceCopies.ar!,
  },
  fil: {
    badge: "Global Naming Studio",
    heroLines: ["Tunog at kahulugan", "kultura at buhay", "isang pangalan"],
    descriptionLines: [
      "Mula sa kahulugan ng Hanja para sa Korean name hanggang sa global name adaptation,",
      "binabasa namin kung paano mararamdaman ang pangalan sa wika at lugar ng paggamit.",
      "Pinagdurugtong ang hiling ng pamilya, praktikal na layunin, at cultural nuance.",
    ],
    primaryCta: "Simulan ang Hanja",
    secondaryCta: "Gumawa ng Korean name",
    servicePickerTitle: "Piliin ang layunin",
    servicePickerHint: "Magsimula rito",
    currentLanguage: "Kasalukuyang wika",
    moreLanguages: "Higit pa",
    closeLanguages: "Isara",
    services: serviceCopies.fil!,
  },
  uz: {
    badge: "Global Naming Studio",
    heroLines: ["Tovush, ma'no,", "madaniyat va tug'ilish", "bitta ismda"],
    descriptionLines: [
      "Koreyscha ism uchun Hanja ma'nosidan global ism moslashuvigacha,",
      "ism ishlatiladigan til va hududda qanday eshitilishini baholaymiz.",
      "Oila istagi, amaliy maqsad va madaniy ohang bitta oqimda ulanadi.",
    ],
    primaryCta: "Hanja bilan boshlash",
    secondaryCta: "Koreyscha ism yaratish",
    servicePickerTitle: "Maqsadni tanlang",
    servicePickerHint: "Birinchi ekrandan boshlang",
    currentLanguage: "Joriy til",
    moreLanguages: "Yana",
    closeLanguages: "Yopish",
    services: serviceCopies.uz!,
  },
  mn: {
    badge: "Global Naming Studio",
    heroLines: ["Дуу, утга, соёл", "төрсөн өдөр", "нэг нэрэнд"],
    descriptionLines: [
      "Солонгос нэрийн ханжа утгаас олон улсын нэрийн хувилбар хүртэл,",
      "нэрийг ашиглах хэл, бүс нутагт хэрхэн мэдрэгдэхийг харна.",
      "Гэр бүлийн хүсэл, хэрэглээний зорилго, соёлын өнгө аясыг нэгтгэнэ.",
    ],
    primaryCta: "Ханжа эхлүүлэх",
    secondaryCta: "Солонгос нэр бүтээх",
    servicePickerTitle: "Зорилгоо сонго",
    servicePickerHint: "Эхний дэлгэцээс эхэл",
    currentLanguage: "Одоогийн хэл",
    moreLanguages: "Дэлгэрэнгүй",
    closeLanguages: "Хаах",
    services: serviceCopies.mn!,
  },
  hi: {
    badge: "Global Naming Studio",
    heroLines: ["ध्वनि, अर्थ,", "संस्कृति और जन्म", "एक नाम में"],
    descriptionLines: [
      "कोरियाई नाम के हंजा अर्थ से लेकर वैश्विक नाम रूपांतरण तक,",
      "हम देखते हैं कि नाम उपयोग की भाषा और क्षेत्र में कैसा महसूस होगा.",
      "परिवार की इच्छा, उपयोग का उद्देश्य और सांस्कृतिक nuance एक साथ जुड़ते हैं.",
    ],
    primaryCta: "हंजा शुरू करें",
    secondaryCta: "कोरियाई नाम बनाएं",
    servicePickerTitle: "उद्देश्य चुनें",
    servicePickerHint: "पहली स्क्रीन से शुरू करें",
    currentLanguage: "वर्तमान भाषा",
    moreLanguages: "और",
    closeLanguages: "बंद",
    services: serviceCopies.hi!,
  },
  tr: {
    badge: "Global Naming Studio",
    heroLines: ["Ses, anlam,", "kültür ve doğum", "tek bir isimde"],
    descriptionLines: [
      "Korece adlar için Hanja anlamından global ad uyarlamasına kadar,",
      "adın kullanılacağı dil ve bölgede nasıl hissedileceğini inceleriz.",
      "Aile isteği, kullanım amacı ve kültürel nüans tek akışta birleşir.",
    ],
    primaryCta: "Hanja ile başla",
    secondaryCta: "Korece ad oluştur",
    servicePickerTitle: "Amacı seç",
    servicePickerHint: "İlk ekrandan başla",
    currentLanguage: "Geçerli dil",
    moreLanguages: "Daha",
    closeLanguages: "Kapat",
    services: serviceCopies.tr!,
  },
  km: {
    badge: "Global Naming Studio",
    heroLines: ["សំឡេង អត្ថន័យ", "វប្បធម៌ និងថ្ងៃកំណើត", "ក្នុងឈ្មោះមួយ"],
    descriptionLines: [
      "ពីអត្ថន័យ Hanja សម្រាប់ឈ្មោះកូរ៉េ ដល់ការកែឈ្មោះសកល,",
      "យើងពិនិត្យថាឈ្មោះនោះមានអារម្មណ៍យ៉ាងដូចម្តេចក្នុងភាសា និងតំបន់ដែលប្រើ។",
      "បំណងគ្រួសារ គោលបំណងប្រើប្រាស់ និងបរិបទវប្បធម៌ត្រូវបានភ្ជាប់ជាមួយគ្នា។",
    ],
    primaryCta: "ចាប់ផ្តើម Hanja",
    secondaryCta: "បង្កើតឈ្មោះកូរ៉េ",
    servicePickerTitle: "ជ្រើសគោលបំណង",
    servicePickerHint: "ចាប់ផ្តើមពីទំព័រដំបូង",
    currentLanguage: "ភាសាបច្ចុប្បន្ន",
    moreLanguages: "បន្ថែម",
    closeLanguages: "បិទ",
    services: serviceCopies.km!,
  },
  ms: {
    badge: "Global Naming Studio",
    heroLines: ["Bunyi, makna,", "budaya dan lahir", "dalam satu nama"],
    descriptionLines: [
      "Daripada makna Hanja untuk nama Korea hingga penyesuaian nama global,",
      "kami menilai rasa nama dalam bahasa dan wilayah penggunaannya.",
      "Harapan keluarga, tujuan praktikal, dan nuansa budaya disatukan.",
    ],
    primaryCta: "Mula Hanja",
    secondaryCta: "Cipta nama Korea",
    servicePickerTitle: "Pilih tujuan",
    servicePickerHint: "Mula dari skrin pertama",
    currentLanguage: "Bahasa semasa",
    moreLanguages: "Lagi",
    closeLanguages: "Tutup",
    services: serviceCopies.ms!,
  },
  kk: {
    badge: "Global Naming Studio",
    heroLines: ["Дыбыс, мағына,", "мәдениет пен туу", "бір есімде"],
    descriptionLines: [
      "Корей есіміне арналған ханча мағынасынан ғаламдық есімге дейін,",
      "есімнің қолданылатын тіл мен аймақта қалай қабылданатынын қараймыз.",
      "Отбасы тілегі, қолдану мақсаты және мәдени реңк бір ағынға бірігеді.",
    ],
    primaryCta: "Ханчадан бастау",
    secondaryCta: "Корейше есім жасау",
    servicePickerTitle: "Мақсатты таңдаңыз",
    servicePickerHint: "Бірінші экраннан бастаңыз",
    currentLanguage: "Қазіргі тіл",
    moreLanguages: "Тағы",
    closeLanguages: "Жабу",
    services: serviceCopies.kk!,
  },
  pl: {
    badge: "Global Naming Studio",
    heroLines: ["Brzmienie, sens,", "kultura i data", "w jednym imieniu"],
    descriptionLines: [
      "Od znaczenia Hanja dla koreańskiego imienia po adaptację globalną,",
      "sprawdzamy, jak imię brzmi w języku i regionie użycia.",
      "Życzenie rodziny, cel praktyczny i niuans kulturowy łączą się w całość.",
    ],
    primaryCta: "Zacznij Hanja",
    secondaryCta: "Stwórz koreańskie imię",
    servicePickerTitle: "Wybierz cel",
    servicePickerHint: "Zacznij od pierwszego ekranu",
    currentLanguage: "Obecny język",
    moreLanguages: "Więcej",
    closeLanguages: "Zamknij",
    services: serviceCopies.pl!,
  },
};

export function getLandingCopy(locale: Locale) {
  return landingCopies[locale] ?? landingCopies.en ?? landingCopies.ko!;
}

export function getTextDirection(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}
