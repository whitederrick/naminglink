import type { FieldOption, Locale, ServiceConfig } from "@/lib/services";

// 외국인 대상 서비스(GLOBAL_TO_KOREAN)의 폼 설정 문자열을 로케일별로 치환한다.
// services.ts의 공유 설정 원본은 건드리지 않고, 렌더 시점에 안정적 키
// (서비스 slug + 섹션 제목/필드 이름, 옵션 value)로만 라벨을 갈아끼운다.
// 한국어 대상 서비스는 이 경로를 타지 않아 기존 한국어 문구가 그대로 유지된다.
type ServiceTextOverride = {
  hero?: {
    title?: string;
    eyebrow?: string;
    description?: string;
    promise?: string;
    resultLabel?: string;
  };
  sectionTitles?: Record<string, string>; // 원본(한국어) 섹션 제목 → 번역 제목
  sectionDescriptions?: Record<string, string>; // 원본 섹션 제목 → 설명
  fieldLabels?: Record<string, string>; // 필드 name → 라벨
  fieldHints?: Record<string, string>; // 필드 name → 힌트
  fieldPlaceholders?: Record<string, string>; // 필드 name → 플레이스홀더
};

export type ServiceCopyOverride = {
  // originalName처럼 서비스마다 내용이 다른 필드가 있어 텍스트는 slug 기준으로 구분한다.
  byService: Record<string, ServiceTextOverride>;
  // 옵션 value는 서비스 간 의미가 동일하므로 전역으로 둔다.
  optionLabels: Record<string, string>;
};

const en: ServiceCopyOverride = {
  byService: {
    "global-to-korean": {
      hero: {
        title: "Turn your name into a Korean name",
        eyebrow: "A Korean name for life and work in Korea",
        description:
          "Tell us your original name, country, birth details, and how you'll use the name in Korea, and we'll suggest natural, explainable Korean names.",
        promise:
          "We recommend names that are easy to call and write, with meaning and pronunciation you can verify.",
        resultLabel: "Recommended Korean names",
      },
      sectionTitles: {
        "기본 정보": "Original identity",
        "출생 정보": "Birth profile",
        "한국 사용 맥락": "Korean usage context",
      },
      sectionDescriptions: {
        "기본 정보": "Choose the basic details we need to suggest a Korean name.",
        "출생 정보": "Select each item for an accurate comparison and analysis.",
        "한국 사용 맥락": "Choose the tone you want and how you'll use the name in Korea.",
      },
      fieldLabels: {
        originalName: "Original name",
        country: "Country",
        nameMotivation: "Purpose of your Korean name",
        gender: "Gender / image",
        birthYear: "Birth year",
        birthMonth: "Birth month",
        birthDay: "Birth day",
        birthHour: "Birth time",
        koreanFamilyName: "Preferred Korean family name",
        koreanTone: "Name tone",
        usageContext: "Usage context",
        outputLanguage: "Output language",
      },
      fieldPlaceholders: {
        originalName: "e.g., Nguyễn Minh Anh, 山田 太郎, María García",
      },
    },
    "global-name-to-hangul": {
      hero: {
        title: "Write your name in Hangul, by its real pronunciation",
        eyebrow: "Your name in Hangul",
        description:
          "We analyze how your name is pronounced and suggest a natural Hangul spelling.",
        promise:
          "We prioritize your name's own sounds and syllables, following Korean pronunciation rules.",
        resultLabel: "Recommended Hangul spellings",
      },
      sectionTitles: {
        "본명 정보": "Original name",
      },
      sectionDescriptions: {
        "본명 정보": "Choose the language and country used to write and pronounce your name.",
      },
      fieldLabels: {
        originalName: "Original name",
        originalNameLanguage: "Source language of your name",
        country: "Country",
        pronunciationHint: "Pronunciation hint (optional)",
      },
      fieldHints: {
        originalName: "※ Enter your full name in your local language.",
        originalNameLanguage: "※ Choose the language used to pronounce your name.",
        country:
          "※ This helps reflect pronunciation differences by country.\nChanging the country may change the result.",
        pronunciationHint:
          "※ Enter syllable breaks and pronunciation hints.\nWe apply your hint with top priority.",
      },
      fieldPlaceholders: {
        originalName: "e.g., Daniel Brooks",
        pronunciationHint: "e.g., sounds like Dan-yell",
      },
    },
  },
  optionLabels: {
    // 선호 한국 성
    recommend: "Recommend for me",
    // 이름 분위기
    natural_modern: "Natural and modern",
    traditional: "Traditional",
    business_friendly: "Business-friendly",
    soft: "Soft and warm",
    distinctive: "Distinctive",
    // 사용 맥락
    korean_workplace: "Korean workplace",
    school: "School / exchange",
    creator: "Creator / public profile",
    daily: "Daily life",
    // 출력 언어
    auto: "Match my browser locale",
    // 성별
    not_specified: "Not specified",
    female: "Female",
    male: "Male",
    neutral: "Neutral / any",
    // 이름 사용 목적
    auto_by_country: "Auto-select by country",
    korean_education: "Korean study, work, or exchange",
    k_culture: "K-culture, social media, alias",
    business: "Business, cards, global work",
    daily_social: "Friends, school, daily life",
    family_pet: "Child, family, or pet name",
    creator_brand: "Creator, brand, public profile",
    // 출생시(사주 12지시) — 시간 + 로마자 병기
    unknown: "Unknown",
    "23-01": "23:00–01:00 (Jasi)",
    "01-03": "01:00–03:00 (Chuksi)",
    "03-05": "03:00–05:00 (Insi)",
    "05-07": "05:00–07:00 (Myosi)",
    "07-09": "07:00–09:00 (Jinsi)",
    "09-11": "09:00–11:00 (Sasi)",
    "11-13": "11:00–13:00 (Osi)",
    "13-15": "13:00–15:00 (Misi)",
    "15-17": "15:00–17:00 (Sinsi)",
    "17-19": "17:00–19:00 (Yusi)",
    "19-21": "19:00–21:00 (Sulsi)",
    "21-23": "21:00–23:00 (Haesi)",
  },
};

const vi: ServiceCopyOverride = {
  byService: {
    "global-to-korean": {
      hero: {
        title: "Biến tên của bạn thành tên tiếng Hàn",
        eyebrow: "Tên tiếng Hàn cho cuộc sống và công việc tại Hàn Quốc",
        description:
          "Cho chúng tôi biết tên gốc, quốc gia, thông tin ngày sinh và cách bạn sẽ dùng tên tại Hàn Quốc — chúng tôi sẽ đề xuất những tên tiếng Hàn tự nhiên, dễ giải thích.",
        promise:
          "Chúng tôi đề xuất những cái tên dễ gọi, dễ viết, có thể kiểm chứng ý nghĩa và phát âm.",
        resultLabel: "Tên tiếng Hàn được đề xuất",
      },
      sectionTitles: {
        "기본 정보": "Thông tin cơ bản",
        "출생 정보": "Thông tin ngày sinh",
        "한국 사용 맥락": "Bối cảnh sử dụng tại Hàn Quốc",
      },
      sectionDescriptions: {
        "기본 정보": "Chọn các thông tin cơ bản cần thiết để đề xuất tên tiếng Hàn.",
        "출생 정보": "Chọn từng mục để so sánh và phân tích chính xác.",
        "한국 사용 맥락": "Chọn phong cách tên mong muốn và cách bạn sẽ dùng tên tại Hàn Quốc.",
      },
      fieldLabels: {
        originalName: "Tên gốc",
        country: "Quốc gia",
        nameMotivation: "Mục đích dùng tên tiếng Hàn",
        gender: "Giới tính / hình ảnh",
        birthYear: "Năm sinh",
        birthMonth: "Tháng sinh",
        birthDay: "Ngày sinh",
        birthHour: "Giờ sinh",
        koreanFamilyName: "Họ tiếng Hàn mong muốn",
        koreanTone: "Phong cách tên",
        usageContext: "Bối cảnh sử dụng",
        outputLanguage: "Ngôn ngữ kết quả",
      },
      fieldPlaceholders: {
        originalName: "VD: Nguyễn Minh Anh",
      },
    },
    "global-name-to-hangul": {
      hero: {
        title: "Viết tên bạn bằng Hangul theo đúng phát âm",
        eyebrow: "Tên của bạn bằng Hangul",
        description:
          "Chúng tôi phân tích cách phát âm tên bạn và đề xuất cách viết Hangul tự nhiên.",
        promise:
          "Ưu tiên âm và âm tiết trong chính tên bạn, tuân theo quy tắc phát âm tiếng Hàn.",
        resultLabel: "Cách viết Hangul được đề xuất",
      },
      sectionTitles: {
        "본명 정보": "Thông tin tên gốc",
      },
      sectionDescriptions: {
        "본명 정보": "Chọn ngôn ngữ và quốc gia dùng để viết và phát âm tên bạn.",
      },
      fieldLabels: {
        originalName: "Tên gốc",
        originalNameLanguage: "Ngôn ngữ của tên bạn",
        country: "Quốc gia",
        pronunciationHint: "Gợi ý phát âm (tùy chọn)",
      },
      fieldHints: {
        originalName: "※ Nhập họ tên đầy đủ bằng ngôn ngữ bản địa của bạn.",
        originalNameLanguage: "※ Chọn ngôn ngữ dùng để phát âm tên bạn.",
        country:
          "※ Giúp phản ánh khác biệt phát âm theo quốc gia.\nĐổi quốc gia có thể làm thay đổi kết quả.",
        pronunciationHint:
          "※ Nhập cách ngắt âm tiết và gợi ý phát âm.\nGợi ý của bạn được ưu tiên cao nhất.",
      },
      fieldPlaceholders: {
        originalName: "VD: Nguyễn Minh Anh",
        pronunciationHint: "VD: đọc gần giống Đa-ni-en",
      },
    },
  },
  optionLabels: {
    recommend: "Đề xuất giúp tôi",
    natural_modern: "Tự nhiên và hiện đại",
    traditional: "Truyền thống",
    business_friendly: "Phù hợp công việc",
    soft: "Nhẹ nhàng, ấm áp",
    distinctive: "Khác biệt",
    korean_workplace: "Nơi làm việc Hàn Quốc",
    school: "Trường học / trao đổi",
    creator: "Nhà sáng tạo / hồ sơ công khai",
    daily: "Cuộc sống hằng ngày",
    auto: "Theo ngôn ngữ trình duyệt",
    not_specified: "Không xác định",
    female: "Nữ",
    male: "Nam",
    neutral: "Trung tính / bất kỳ",
    auto_by_country: "Tự chọn theo quốc gia",
    korean_education: "Học tiếng Hàn, làm việc, du học",
    k_culture: "K-culture, mạng xã hội, biệt danh",
    business: "Kinh doanh, danh thiếp, công việc toàn cầu",
    daily_social: "Bạn bè, trường học, đời sống",
    family_pet: "Tên cho con, gia đình, thú cưng",
    creator_brand: "Nhà sáng tạo, thương hiệu, hồ sơ công khai",
    unknown: "Không rõ",
    "23-01": "23:00–01:00 (giờ Tý)",
    "01-03": "01:00–03:00 (giờ Sửu)",
    "03-05": "03:00–05:00 (giờ Dần)",
    "05-07": "05:00–07:00 (giờ Mão)",
    "07-09": "07:00–09:00 (giờ Thìn)",
    "09-11": "09:00–11:00 (giờ Tỵ)",
    "11-13": "11:00–13:00 (giờ Ngọ)",
    "13-15": "13:00–15:00 (giờ Mùi)",
    "15-17": "15:00–17:00 (giờ Thân)",
    "17-19": "17:00–19:00 (giờ Dậu)",
    "19-21": "19:00–21:00 (giờ Tuất)",
    "21-23": "21:00–23:00 (giờ Hợi)",
  },
};

const th: ServiceCopyOverride = {
  byService: {
    "global-to-korean": {
      hero: {
        title: "เปลี่ยนชื่อของคุณให้เป็นชื่อเกาหลี",
        eyebrow: "ชื่อเกาหลีสำหรับการใช้ชีวิตและทำงานในเกาหลี",
        description:
          "บอกเราถึงชื่อจริงดั้งเดิม ประเทศ ข้อมูลวันเกิด และวิธีที่คุณจะใช้ชื่อในเกาหลี แล้วเราจะแนะนำชื่อเกาหลีที่เป็นธรรมชาติและอธิบายที่มาได้",
        promise:
          "เราแนะนำชื่อที่เรียกง่าย เขียนง่าย พร้อมความหมายและการออกเสียงที่ตรวจสอบได้",
        resultLabel: "ชื่อเกาหลีที่แนะนำ",
      },
      sectionTitles: {
        "기본 정보": "ข้อมูลพื้นฐาน",
        "출생 정보": "ข้อมูลการเกิด",
        "한국 사용 맥락": "บริบทการใช้งานในเกาหลี",
      },
      sectionDescriptions: {
        "기본 정보": "เลือกข้อมูลพื้นฐานที่จำเป็นสำหรับการแนะนำชื่อเกาหลี",
        "출생 정보": "เลือกแต่ละรายการเพื่อการเปรียบเทียบและวิเคราะห์ที่แม่นยำ",
        "한국 사용 맥락": "เลือกสไตล์ชื่อที่ต้องการและวิธีที่คุณจะใช้ชื่อในเกาหลี",
      },
      fieldLabels: {
        originalName: "ชื่อจริงดั้งเดิม",
        country: "ประเทศ",
        nameMotivation: "วัตถุประสงค์ของชื่อเกาหลี",
        gender: "เพศ / ภาพลักษณ์",
        birthYear: "ปีเกิด",
        birthMonth: "เดือนเกิด",
        birthDay: "วันเกิด",
        birthHour: "เวลาเกิด",
        koreanFamilyName: "นามสกุลเกาหลีที่ต้องการ",
        koreanTone: "สไตล์ของชื่อ",
        usageContext: "บริบทการใช้งาน",
        outputLanguage: "ภาษาของผลลัพธ์",
      },
      fieldPlaceholders: {
        originalName: "เช่น สมชาย ใจดี, María García",
      },
    },
    "global-name-to-hangul": {
      hero: {
        title: "เขียนชื่อของคุณเป็นฮันกึลตามการออกเสียงจริง",
        eyebrow: "ชื่อของคุณในอักษรฮันกึล",
        description:
          "เราวิเคราะห์วิธีการออกเสียงชื่อของคุณและแนะนำการเขียนฮันกึลที่เป็นธรรมชาติ",
        promise:
          "เราให้ความสำคัญกับเสียงและพยางค์ในชื่อของคุณเป็นหลัก โดยยึดตามกฎการออกเสียงภาษาเกาหลี",
        resultLabel: "การเขียนฮันกึลที่แนะนำ",
      },
      sectionTitles: {
        "본명 정보": "ข้อมูลชื่อจริง",
      },
      sectionDescriptions: {
        "본명 정보": "เลือกภาษาและประเทศที่ใช้เขียนและออกเสียงชื่อของคุณ",
      },
      fieldLabels: {
        originalName: "ชื่อจริงดั้งเดิม",
        originalNameLanguage: "ภาษาต้นทางของชื่อคุณ",
        country: "ประเทศ",
        pronunciationHint: "คำใบ้การออกเสียง (ไม่บังคับ)",
      },
      fieldHints: {
        originalName: "※ กรอกชื่อ-นามสกุลเต็มด้วยภาษาท้องถิ่นของคุณ",
        originalNameLanguage: "※ เลือกภาษาที่ใช้ออกเสียงชื่อของคุณ",
        country:
          "※ ช่วยสะท้อนความต่างของการออกเสียงในแต่ละประเทศ\nการเปลี่ยนประเทศอาจทำให้ผลลัพธ์เปลี่ยนไป",
        pronunciationHint:
          "※ กรอกการแบ่งพยางค์และคำใบ้การออกเสียง\nคำใบ้ของคุณจะถูกใช้เป็นอันดับแรก",
      },
      fieldPlaceholders: {
        originalName: "เช่น สมชาย ใจดี",
        pronunciationHint: "เช่น ออกเสียงคล้าย สม-ชาย",
      },
    },
  },
  optionLabels: {
    recommend: "ให้ระบบแนะนำให้ฉัน",
    natural_modern: "เป็นธรรมชาติและทันสมัย",
    traditional: "แบบดั้งเดิม",
    business_friendly: "เหมาะกับการทำงาน",
    soft: "นุ่มนวลอบอุ่น",
    distinctive: "โดดเด่นไม่ซ้ำใคร",
    korean_workplace: "ที่ทำงานในเกาหลี",
    school: "โรงเรียน / นักเรียนแลกเปลี่ยน",
    creator: "ครีเอเตอร์ / โปรไฟล์สาธารณะ",
    daily: "ชีวิตประจำวัน",
    auto: "ตามภาษาของเบราว์เซอร์",
    not_specified: "ไม่ระบุ",
    female: "หญิง",
    male: "ชาย",
    neutral: "เป็นกลาง / แบบใดก็ได้",
    auto_by_country: "เลือกอัตโนมัติตามประเทศ",
    korean_education: "เรียนภาษาเกาหลี ทำงาน หรือแลกเปลี่ยน",
    k_culture: "K-culture โซเชียลมีเดีย ชื่อเล่น",
    business: "ธุรกิจ นามบัตร งานระดับสากล",
    daily_social: "เพื่อน โรงเรียน ชีวิตประจำวัน",
    family_pet: "ชื่อสำหรับลูก ครอบครัว หรือสัตว์เลี้ยง",
    creator_brand: "ครีเอเตอร์ แบรนด์ โปรไฟล์สาธารณะ",
    unknown: "ไม่ทราบ",
    "23-01": "23:00–01:00 (ยามจาซี)",
    "01-03": "01:00–03:00 (ยามชุกซี)",
    "03-05": "03:00–05:00 (ยามอินซี)",
    "05-07": "05:00–07:00 (ยามมโยซี)",
    "07-09": "07:00–09:00 (ยามจินซี)",
    "09-11": "09:00–11:00 (ยามซาซี)",
    "11-13": "11:00–13:00 (ยามโอซี)",
    "13-15": "13:00–15:00 (ยามมีซี)",
    "15-17": "15:00–17:00 (ยามซินซี)",
    "17-19": "17:00–19:00 (ยามยูซี)",
    "19-21": "19:00–21:00 (ยามซุลซี)",
    "21-23": "21:00–23:00 (ยามแฮซี)",
  },
};

const ja: ServiceCopyOverride = {
  byService: {
    "global-to-korean": {
      hero: {
        title: "あなたの名前を韓国の名前に",
        eyebrow: "韓国での生活や仕事のための韓国名",
        description:
          "元のお名前、国、出生情報、韓国での名前の使い方を教えていただければ、自然で由来を説明できる韓国の名前をご提案します。",
        promise:
          "呼びやすく書きやすい名前を、意味と発音を確認できる形でご提案します。",
        resultLabel: "おすすめの韓国名",
      },
      sectionTitles: {
        "기본 정보": "基本情報",
        "출생 정보": "出生情報",
        "한국 사용 맥락": "韓国での使用シーン",
      },
      sectionDescriptions: {
        "기본 정보": "韓国名のご提案に必要な基本情報を選択してください。",
        "출생 정보": "正確な比較・分析のために各項目を選択してください。",
        "한국 사용 맥락": "希望する名前の雰囲気と、韓国での名前の使い方を選択してください。",
      },
      fieldLabels: {
        originalName: "本名",
        country: "国",
        nameMotivation: "韓国名の使用目的",
        gender: "性別 / イメージ",
        birthYear: "生まれた年",
        birthMonth: "生まれた月",
        birthDay: "生まれた日",
        birthHour: "出生時刻",
        koreanFamilyName: "希望する韓国の姓",
        koreanTone: "名前の雰囲気",
        usageContext: "使用シーン",
        outputLanguage: "結果の言語",
      },
      fieldPlaceholders: {
        originalName: "例: 山田 太郎",
      },
    },
    "global-name-to-hangul": {
      hero: {
        title: "あなたの名前を実際の発音どおりにハングルで",
        eyebrow: "ハングルで書くあなたの名前",
        description:
          "お名前の発音を分析し、自然なハングル表記をご提案します。",
        promise:
          "韓国語の発音規則に沿いながら、お名前本来の音と音節を最優先します。",
        resultLabel: "おすすめのハングル表記",
      },
      sectionTitles: {
        "본명 정보": "本名の情報",
      },
      sectionDescriptions: {
        "본명 정보": "お名前の表記と発音に使う言語と国を選択してください。",
      },
      fieldLabels: {
        originalName: "本名",
        originalNameLanguage: "名前の元の言語",
        country: "国",
        pronunciationHint: "発音ヒント（任意）",
      },
      fieldHints: {
        originalName: "※ 現地の言語でフルネームを入力してください。",
        originalNameLanguage: "※ お名前の発音に使う言語を選択してください。",
        country:
          "※ 国ごとの発音の違いを反映するために使用します。\n国を変更すると結果が変わることがあります。",
        pronunciationHint:
          "※ 音節の区切りや発音のヒントを入力してください。\n入力されたヒントを最優先で反映します。",
      },
      fieldPlaceholders: {
        originalName: "例: 山田 太郎",
        pronunciationHint: "例: 「やまだ たろう」と発音します",
      },
    },
  },
  optionLabels: {
    recommend: "おすすめしてもらう",
    natural_modern: "自然でモダン",
    traditional: "伝統的",
    business_friendly: "ビジネス向き",
    soft: "やわらかく温かい",
    distinctive: "個性的",
    korean_workplace: "韓国の職場",
    school: "学校 / 交換留学",
    creator: "クリエイター / 公開プロフィール",
    daily: "日常生活",
    auto: "ブラウザの言語に合わせる",
    not_specified: "指定しない",
    female: "女性",
    male: "男性",
    neutral: "中性 / どちらでも",
    auto_by_country: "国に合わせて自動選択",
    korean_education: "韓国語学習・仕事・交換留学",
    k_culture: "K-カルチャー・SNS・ニックネーム",
    business: "ビジネス・名刺・グローバルな仕事",
    daily_social: "友人・学校・日常生活",
    family_pet: "子ども・家族・ペットの名前",
    creator_brand: "クリエイター・ブランド・公開プロフィール",
    unknown: "不明",
    "23-01": "23:00–01:00（子時）",
    "01-03": "01:00–03:00（丑時）",
    "03-05": "03:00–05:00（寅時）",
    "05-07": "05:00–07:00（卯時）",
    "07-09": "07:00–09:00（辰時）",
    "09-11": "09:00–11:00（巳時）",
    "11-13": "11:00–13:00（午時）",
    "13-15": "13:00–15:00（未時）",
    "15-17": "15:00–17:00（申時）",
    "17-19": "17:00–19:00（酉時）",
    "19-21": "19:00–21:00（戌時）",
    "21-23": "21:00–23:00（亥時）",
  },
};

const zh: ServiceCopyOverride = {
  byService: {
    "global-to-korean": {
      hero: {
        title: "把您的名字变成韩国名字",
        eyebrow: "适合在韩国生活与工作的韩国名字",
        description:
          "告诉我们您的原名、国家、出生信息以及在韩国使用名字的场景，我们将为您推荐自然、可解释的韩国名字。",
        promise:
          "我们推荐好叫又好写的名字，含义和发音都可以核实。",
        resultLabel: "推荐的韩国名字",
      },
      sectionTitles: {
        "기본 정보": "基本信息",
        "출생 정보": "出生信息",
        "한국 사용 맥락": "在韩国的使用场景",
      },
      sectionDescriptions: {
        "기본 정보": "请选择推荐韩国名字所需的基本信息。",
        "출생 정보": "请选择各项内容，以便进行准确的比较和分析。",
        "한국 사용 맥락": "请选择您想要的名字风格以及在韩国使用名字的方式。",
      },
      fieldLabels: {
        originalName: "原名",
        country: "国家",
        nameMotivation: "韩国名字的用途",
        gender: "性别 / 形象",
        birthYear: "出生年份",
        birthMonth: "出生月份",
        birthDay: "出生日期",
        birthHour: "出生时辰",
        koreanFamilyName: "期望的韩国姓氏",
        koreanTone: "名字风格",
        usageContext: "使用场景",
        outputLanguage: "结果语言",
      },
      fieldPlaceholders: {
        originalName: "例如：王小明",
      },
    },
    "global-name-to-hangul": {
      hero: {
        title: "按真实发音，用韩文写出您的名字",
        eyebrow: "用韩文书写您的名字",
        description:
          "我们会分析您名字的发音，并推荐自然的韩文写法。",
        promise:
          "遵循韩语发音规则，优先保留您名字本身的读音和音节。",
        resultLabel: "推荐的韩文写法",
      },
      sectionTitles: {
        "본명 정보": "原名信息",
      },
      sectionDescriptions: {
        "본명 정보": "请选择书写和读出您名字所用的语言和国家。",
      },
      fieldLabels: {
        originalName: "原名",
        originalNameLanguage: "名字的源语言",
        country: "国家",
        pronunciationHint: "发音提示（可选）",
      },
      fieldHints: {
        originalName: "※ 请用您的母语输入完整姓名。",
        originalNameLanguage: "※ 请选择读出您名字时使用的语言。",
        country:
          "※ 用于反映各国的发音差异。\n更改国家可能会改变结果。",
        pronunciationHint:
          "※ 请输入音节划分和发音提示。\n您的提示将被优先采用。",
      },
      fieldPlaceholders: {
        originalName: "例如：王小明",
        pronunciationHint: "例如：读音接近 Wang Xiao-ming",
      },
    },
  },
  optionLabels: {
    recommend: "由系统为我推荐",
    natural_modern: "自然现代",
    traditional: "传统",
    business_friendly: "适合商务",
    soft: "温柔亲切",
    distinctive: "独特有个性",
    korean_workplace: "韩国职场",
    school: "学校 / 交换",
    creator: "创作者 / 公开主页",
    daily: "日常生活",
    auto: "跟随浏览器语言",
    not_specified: "不指定",
    female: "女",
    male: "男",
    neutral: "中性 / 均可",
    auto_by_country: "按国家自动选择",
    korean_education: "学韩语、工作或交换",
    k_culture: "韩流文化、社交媒体、昵称",
    business: "商务、名片、国际工作",
    daily_social: "朋友、学校、日常生活",
    family_pet: "孩子、家人或宠物的名字",
    creator_brand: "创作者、品牌、公开主页",
    unknown: "不清楚",
    "23-01": "23:00–01:00（子时）",
    "01-03": "01:00–03:00（丑时）",
    "03-05": "03:00–05:00（寅时）",
    "05-07": "05:00–07:00（卯时）",
    "07-09": "07:00–09:00（辰时）",
    "09-11": "09:00–11:00（巳时）",
    "11-13": "11:00–13:00（午时）",
    "13-15": "13:00–15:00（未时）",
    "15-17": "15:00–17:00（申时）",
    "17-19": "17:00–19:00（酉时）",
    "19-21": "19:00–21:00（戌时）",
    "21-23": "21:00–23:00（亥时）",
  },
};

const id: ServiceCopyOverride = {
  byService: {
    "global-to-korean": {
      hero: {
        title: "Ubah nama Anda menjadi nama Korea",
        eyebrow: "Nama Korea untuk hidup dan bekerja di Korea",
        description:
          "Beri tahu kami nama asli, negara, data kelahiran, dan bagaimana Anda akan menggunakan nama itu di Korea — kami akan mengusulkan nama Korea yang alami dan mudah dijelaskan.",
        promise:
          "Kami merekomendasikan nama yang mudah dipanggil dan ditulis, dengan arti dan pelafalan yang dapat diverifikasi.",
        resultLabel: "Nama Korea yang direkomendasikan",
      },
      sectionTitles: {
        "기본 정보": "Informasi dasar",
        "출생 정보": "Informasi kelahiran",
        "한국 사용 맥락": "Konteks penggunaan di Korea",
      },
      sectionDescriptions: {
        "기본 정보": "Pilih informasi dasar yang kami perlukan untuk mengusulkan nama Korea.",
        "출생 정보": "Pilih setiap item untuk perbandingan dan analisis yang akurat.",
        "한국 사용 맥락": "Pilih gaya nama yang diinginkan dan cara Anda akan menggunakan nama itu di Korea.",
      },
      fieldLabels: {
        originalName: "Nama asli",
        country: "Negara",
        nameMotivation: "Tujuan nama Korea Anda",
        gender: "Jenis kelamin / citra",
        birthYear: "Tahun lahir",
        birthMonth: "Bulan lahir",
        birthDay: "Tanggal lahir",
        birthHour: "Jam lahir",
        koreanFamilyName: "Marga Korea yang diinginkan",
        koreanTone: "Gaya nama",
        usageContext: "Konteks penggunaan",
        outputLanguage: "Bahasa hasil",
      },
      fieldPlaceholders: {
        originalName: "Contoh: Siti Rahayu",
      },
    },
    "global-name-to-hangul": {
      hero: {
        title: "Tulis nama Anda dalam Hangul sesuai pelafalan aslinya",
        eyebrow: "Nama Anda dalam Hangul",
        description:
          "Kami menganalisis cara nama Anda dilafalkan dan mengusulkan penulisan Hangul yang alami.",
        promise:
          "Kami mengutamakan bunyi dan suku kata nama Anda sendiri, mengikuti aturan pelafalan bahasa Korea.",
        resultLabel: "Penulisan Hangul yang direkomendasikan",
      },
      sectionTitles: {
        "본명 정보": "Informasi nama asli",
      },
      sectionDescriptions: {
        "본명 정보": "Pilih bahasa dan negara yang digunakan untuk menulis dan melafalkan nama Anda.",
      },
      fieldLabels: {
        originalName: "Nama asli",
        originalNameLanguage: "Bahasa sumber nama Anda",
        country: "Negara",
        pronunciationHint: "Petunjuk pelafalan (opsional)",
      },
      fieldHints: {
        originalName: "※ Masukkan nama lengkap Anda dalam bahasa lokal Anda.",
        originalNameLanguage: "※ Pilih bahasa yang digunakan untuk melafalkan nama Anda.",
        country:
          "※ Ini membantu mencerminkan perbedaan pelafalan antarnegara.\nMengubah negara dapat mengubah hasil.",
        pronunciationHint:
          "※ Masukkan pemisahan suku kata dan petunjuk pelafalan.\nPetunjuk Anda diterapkan dengan prioritas tertinggi.",
      },
      fieldPlaceholders: {
        originalName: "Contoh: Siti Rahayu",
        pronunciationHint: "Contoh: dibaca seperti Si-ti Ra-ha-yu",
      },
    },
  },
  optionLabels: {
    recommend: "Rekomendasikan untuk saya",
    natural_modern: "Alami dan modern",
    traditional: "Tradisional",
    business_friendly: "Cocok untuk bisnis",
    soft: "Lembut dan hangat",
    distinctive: "Khas dan berbeda",
    korean_workplace: "Tempat kerja di Korea",
    school: "Sekolah / pertukaran pelajar",
    creator: "Kreator / profil publik",
    daily: "Kehidupan sehari-hari",
    auto: "Sesuai bahasa browser saya",
    not_specified: "Tidak ditentukan",
    female: "Perempuan",
    male: "Laki-laki",
    neutral: "Netral / bebas",
    auto_by_country: "Pilih otomatis berdasarkan negara",
    korean_education: "Belajar bahasa Korea, kerja, atau pertukaran",
    k_culture: "K-culture, media sosial, nama alias",
    business: "Bisnis, kartu nama, karier global",
    daily_social: "Teman, sekolah, kehidupan sehari-hari",
    family_pet: "Nama anak, keluarga, atau hewan peliharaan",
    creator_brand: "Kreator, merek, profil publik",
    unknown: "Tidak tahu",
    "23-01": "23:00–01:00 (Jasi)",
    "01-03": "01:00–03:00 (Chuksi)",
    "03-05": "03:00–05:00 (Insi)",
    "05-07": "05:00–07:00 (Myosi)",
    "07-09": "07:00–09:00 (Jinsi)",
    "09-11": "09:00–11:00 (Sasi)",
    "11-13": "11:00–13:00 (Osi)",
    "13-15": "13:00–15:00 (Misi)",
    "15-17": "15:00–17:00 (Sinsi)",
    "17-19": "17:00–19:00 (Yusi)",
    "19-21": "19:00–21:00 (Sulsi)",
    "21-23": "21:00–23:00 (Haesi)",
  },
};

const de: ServiceCopyOverride = {
  byService: {
    "global-to-korean": {
      hero: {
        title: "Verwandeln Sie Ihren Namen in einen koreanischen Namen",
        eyebrow: "Ein koreanischer Name für Leben und Arbeit in Korea",
        description:
          "Nennen Sie uns Ihren ursprünglichen Namen, Ihr Land, Ihre Geburtsdaten und wie Sie den Namen in Korea verwenden möchten — wir schlagen Ihnen natürliche, gut erklärbare koreanische Namen vor.",
        promise:
          "Wir schlagen Namen vor, die leicht zu rufen und zu schreiben sind — mit überprüfbarer Bedeutung und Aussprache.",
        resultLabel: "Empfohlene koreanische Namen",
      },
      sectionTitles: {
        "기본 정보": "Grundinformationen",
        "출생 정보": "Geburtsdaten",
        "한국 사용 맥락": "Verwendung in Korea",
      },
      sectionDescriptions: {
        "기본 정보": "Wählen Sie die Grundangaben, die wir für den Vorschlag eines koreanischen Namens benötigen.",
        "출생 정보": "Wählen Sie jede Angabe für einen genauen Vergleich und eine genaue Analyse.",
        "한국 사용 맥락": "Wählen Sie den gewünschten Namensstil und wie Sie den Namen in Korea verwenden möchten.",
      },
      fieldLabels: {
        originalName: "Ursprünglicher Name",
        country: "Land",
        nameMotivation: "Zweck Ihres koreanischen Namens",
        gender: "Geschlecht / Image",
        birthYear: "Geburtsjahr",
        birthMonth: "Geburtsmonat",
        birthDay: "Geburtstag",
        birthHour: "Geburtszeit",
        koreanFamilyName: "Gewünschter koreanischer Familienname",
        koreanTone: "Namensstil",
        usageContext: "Verwendungskontext",
        outputLanguage: "Ergebnissprache",
      },
      fieldPlaceholders: {
        originalName: "z. B. Lukas Müller",
      },
    },
    "global-name-to-hangul": {
      hero: {
        title: "Schreiben Sie Ihren Namen in Hangul — nach seiner echten Aussprache",
        eyebrow: "Ihr Name in Hangul",
        description:
          "Wir analysieren, wie Ihr Name ausgesprochen wird, und schlagen eine natürliche Hangul-Schreibweise vor.",
        promise:
          "Wir stellen die Laute und Silben Ihres Namens in den Vordergrund und folgen dabei den koreanischen Ausspracheregeln.",
        resultLabel: "Empfohlene Hangul-Schreibweisen",
      },
      sectionTitles: {
        "본명 정보": "Angaben zum Namen",
      },
      sectionDescriptions: {
        "본명 정보": "Wählen Sie die Sprache und das Land, mit denen Ihr Name geschrieben und ausgesprochen wird.",
      },
      fieldLabels: {
        originalName: "Ursprünglicher Name",
        originalNameLanguage: "Ausgangssprache Ihres Namens",
        country: "Land",
        pronunciationHint: "Aussprachehinweis (optional)",
      },
      fieldHints: {
        originalName: "※ Geben Sie Ihren vollständigen Namen in Ihrer Landessprache ein.",
        originalNameLanguage: "※ Wählen Sie die Sprache, in der Ihr Name ausgesprochen wird.",
        country:
          "※ So berücksichtigen wir Ausspracheunterschiede je Land.\nEin anderes Land kann das Ergebnis verändern.",
        pronunciationHint:
          "※ Geben Sie Silbengrenzen und Aussprachehinweise ein.\nIhr Hinweis wird mit höchster Priorität angewendet.",
      },
      fieldPlaceholders: {
        originalName: "z. B. Lukas Müller",
        pronunciationHint: "z. B. klingt wie Luh-kas Mül-ler",
      },
    },
  },
  optionLabels: {
    recommend: "Für mich empfehlen",
    natural_modern: "Natürlich und modern",
    traditional: "Traditionell",
    business_friendly: "Businesstauglich",
    soft: "Sanft und warm",
    distinctive: "Unverwechselbar",
    korean_workplace: "Koreanischer Arbeitsplatz",
    school: "Schule / Austausch",
    creator: "Creator / öffentliches Profil",
    daily: "Alltag",
    auto: "An Browsersprache anpassen",
    not_specified: "Keine Angabe",
    female: "Weiblich",
    male: "Männlich",
    neutral: "Neutral / egal",
    auto_by_country: "Automatisch nach Land wählen",
    korean_education: "Koreanisch lernen, Arbeit oder Austausch",
    k_culture: "K-Kultur, Social Media, Alias",
    business: "Business, Visitenkarten, internationale Arbeit",
    daily_social: "Freunde, Schule, Alltag",
    family_pet: "Name für Kind, Familie oder Haustier",
    creator_brand: "Creator, Marke, öffentliches Profil",
    unknown: "Unbekannt",
    "23-01": "23:00–01:00 (Jasi)",
    "01-03": "01:00–03:00 (Chuksi)",
    "03-05": "03:00–05:00 (Insi)",
    "05-07": "05:00–07:00 (Myosi)",
    "07-09": "07:00–09:00 (Jinsi)",
    "09-11": "09:00–11:00 (Sasi)",
    "11-13": "11:00–13:00 (Osi)",
    "13-15": "13:00–15:00 (Misi)",
    "15-17": "15:00–17:00 (Sinsi)",
    "17-19": "17:00–19:00 (Yusi)",
    "19-21": "19:00–21:00 (Sulsi)",
    "21-23": "21:00–23:00 (Haesi)",
  },
};

const es: ServiceCopyOverride = {
  byService: {
    "global-to-korean": {
      hero: {
        title: "Convierte tu nombre en un nombre coreano",
        eyebrow: "Un nombre coreano para vivir y trabajar en Corea",
        description:
          "Cuéntanos tu nombre original, tu país, tus datos de nacimiento y cómo usarás el nombre en Corea, y te sugeriremos nombres coreanos naturales y fáciles de explicar.",
        promise:
          "Recomendamos nombres fáciles de pronunciar y escribir, con significado y pronunciación que puedes verificar.",
        resultLabel: "Nombres coreanos recomendados",
      },
      sectionTitles: {
        "기본 정보": "Información básica",
        "출생 정보": "Datos de nacimiento",
        "한국 사용 맥락": "Contexto de uso en Corea",
      },
      sectionDescriptions: {
        "기본 정보": "Elige los datos básicos que necesitamos para sugerirte un nombre coreano.",
        "출생 정보": "Selecciona cada dato para una comparación y un análisis precisos.",
        "한국 사용 맥락": "Elige el estilo de nombre que quieres y cómo lo usarás en Corea.",
      },
      fieldLabels: {
        originalName: "Nombre original",
        country: "País",
        nameMotivation: "Propósito de tu nombre coreano",
        gender: "Género / imagen",
        birthYear: "Año de nacimiento",
        birthMonth: "Mes de nacimiento",
        birthDay: "Día de nacimiento",
        birthHour: "Hora de nacimiento",
        koreanFamilyName: "Apellido coreano preferido",
        koreanTone: "Estilo del nombre",
        usageContext: "Contexto de uso",
        outputLanguage: "Idioma del resultado",
      },
      fieldPlaceholders: {
        originalName: "Ej.: María García",
      },
    },
    "global-name-to-hangul": {
      hero: {
        title: "Escribe tu nombre en hangul según su pronunciación real",
        eyebrow: "Tu nombre en hangul",
        description:
          "Analizamos cómo se pronuncia tu nombre y te sugerimos una escritura natural en hangul.",
        promise:
          "Priorizamos los sonidos y las sílabas propios de tu nombre, siguiendo las reglas de pronunciación del coreano.",
        resultLabel: "Escrituras en hangul recomendadas",
      },
      sectionTitles: {
        "본명 정보": "Información del nombre original",
      },
      sectionDescriptions: {
        "본명 정보": "Elige el idioma y el país con los que se escribe y pronuncia tu nombre.",
      },
      fieldLabels: {
        originalName: "Nombre original",
        originalNameLanguage: "Idioma de origen de tu nombre",
        country: "País",
        pronunciationHint: "Pista de pronunciación (opcional)",
      },
      fieldHints: {
        originalName: "※ Escribe tu nombre completo en tu idioma local.",
        originalNameLanguage: "※ Elige el idioma con el que se pronuncia tu nombre.",
        country:
          "※ Ayuda a reflejar las diferencias de pronunciación por país.\nCambiar el país puede cambiar el resultado.",
        pronunciationHint:
          "※ Indica la separación de sílabas y pistas de pronunciación.\nTu pista se aplica con máxima prioridad.",
      },
      fieldPlaceholders: {
        originalName: "Ej.: María García",
        pronunciationHint: "Ej.: suena como Ma-ri-a Gar-si-a",
      },
    },
  },
  optionLabels: {
    recommend: "Recomiéndame uno",
    natural_modern: "Natural y moderno",
    traditional: "Tradicional",
    business_friendly: "Apto para negocios",
    soft: "Suave y cálido",
    distinctive: "Distintivo",
    korean_workplace: "Trabajo en Corea",
    school: "Escuela / intercambio",
    creator: "Creador / perfil público",
    daily: "Vida diaria",
    auto: "Según el idioma de mi navegador",
    not_specified: "Sin especificar",
    female: "Femenino",
    male: "Masculino",
    neutral: "Neutro / cualquiera",
    auto_by_country: "Selección automática según el país",
    korean_education: "Estudiar coreano, trabajo o intercambio",
    k_culture: "Cultura K, redes sociales, alias",
    business: "Negocios, tarjetas de visita, trabajo global",
    daily_social: "Amigos, escuela, vida diaria",
    family_pet: "Nombre para hijos, familia o mascotas",
    creator_brand: "Creador, marca, perfil público",
    unknown: "Desconocida",
    "23-01": "23:00–01:00 (Jasi)",
    "01-03": "01:00–03:00 (Chuksi)",
    "03-05": "03:00–05:00 (Insi)",
    "05-07": "05:00–07:00 (Myosi)",
    "07-09": "07:00–09:00 (Jinsi)",
    "09-11": "09:00–11:00 (Sasi)",
    "11-13": "11:00–13:00 (Osi)",
    "13-15": "13:00–15:00 (Misi)",
    "15-17": "15:00–17:00 (Sinsi)",
    "17-19": "17:00–19:00 (Yusi)",
    "19-21": "19:00–21:00 (Sulsi)",
    "21-23": "21:00–23:00 (Haesi)",
  },
};

const fr: ServiceCopyOverride = {
  byService: {
    "global-to-korean": {
      hero: {
        title: "Transformez votre prénom en prénom coréen",
        eyebrow: "Un prénom coréen pour vivre et travailler en Corée",
        description:
          "Indiquez-nous votre prénom d'origine, votre pays, vos informations de naissance et l'usage prévu du prénom en Corée : nous vous proposerons des prénoms coréens naturels et faciles à expliquer.",
        promise:
          "Nous recommandons des prénoms faciles à appeler et à écrire, dont vous pouvez vérifier le sens et la prononciation.",
        resultLabel: "Prénoms coréens recommandés",
      },
      sectionTitles: {
        "기본 정보": "Informations de base",
        "출생 정보": "Informations de naissance",
        "한국 사용 맥락": "Contexte d'utilisation en Corée",
      },
      sectionDescriptions: {
        "기본 정보": "Choisissez les informations de base nécessaires pour vous proposer un prénom coréen.",
        "출생 정보": "Sélectionnez chaque élément pour une comparaison et une analyse précises.",
        "한국 사용 맥락": "Choisissez le style de prénom souhaité et l'usage que vous en ferez en Corée.",
      },
      fieldLabels: {
        originalName: "Prénom d'origine",
        country: "Pays",
        nameMotivation: "Finalité de votre prénom coréen",
        gender: "Genre / image",
        birthYear: "Année de naissance",
        birthMonth: "Mois de naissance",
        birthDay: "Jour de naissance",
        birthHour: "Heure de naissance",
        koreanFamilyName: "Nom de famille coréen souhaité",
        koreanTone: "Style du prénom",
        usageContext: "Contexte d'utilisation",
        outputLanguage: "Langue du résultat",
      },
      fieldPlaceholders: {
        originalName: "Ex. : Louis Martin",
      },
    },
    "global-name-to-hangul": {
      hero: {
        title: "Écrivez votre prénom en hangeul, selon sa vraie prononciation",
        eyebrow: "Votre prénom en hangeul",
        description:
          "Nous analysons la prononciation de votre prénom et proposons une graphie naturelle en hangeul.",
        promise:
          "Nous privilégions les sons et syllabes propres à votre prénom, en suivant les règles de prononciation du coréen.",
        resultLabel: "Graphies en hangeul recommandées",
      },
      sectionTitles: {
        "본명 정보": "Informations sur le prénom d'origine",
      },
      sectionDescriptions: {
        "본명 정보": "Choisissez la langue et le pays utilisés pour écrire et prononcer votre prénom.",
      },
      fieldLabels: {
        originalName: "Prénom d'origine",
        originalNameLanguage: "Langue d'origine de votre prénom",
        country: "Pays",
        pronunciationHint: "Indication de prononciation (facultatif)",
      },
      fieldHints: {
        originalName: "※ Saisissez votre nom complet dans votre langue locale.",
        originalNameLanguage: "※ Choisissez la langue utilisée pour prononcer votre prénom.",
        country:
          "※ Cela permet de refléter les différences de prononciation selon le pays.\nChanger de pays peut modifier le résultat.",
        pronunciationHint:
          "※ Indiquez la coupure des syllabes et des indications de prononciation.\nVotre indication est appliquée en priorité absolue.",
      },
      fieldPlaceholders: {
        originalName: "Ex. : Louis Martin",
        pronunciationHint: "Ex. : se prononce comme Loui-s Mar-tin",
      },
    },
  },
  optionLabels: {
    recommend: "Recommandez pour moi",
    natural_modern: "Naturel et moderne",
    traditional: "Traditionnel",
    business_friendly: "Adapté au monde professionnel",
    soft: "Doux et chaleureux",
    distinctive: "Original",
    korean_workplace: "Travail en Corée",
    school: "École / échange",
    creator: "Créateur / profil public",
    daily: "Vie quotidienne",
    auto: "Selon la langue de mon navigateur",
    not_specified: "Non précisé",
    female: "Féminin",
    male: "Masculin",
    neutral: "Neutre / indifférent",
    auto_by_country: "Sélection automatique selon le pays",
    korean_education: "Étude du coréen, travail ou échange",
    k_culture: "Culture K, réseaux sociaux, pseudonyme",
    business: "Affaires, cartes de visite, travail international",
    daily_social: "Amis, école, vie quotidienne",
    family_pet: "Prénom pour un enfant, la famille ou un animal",
    creator_brand: "Créateur, marque, profil public",
    unknown: "Inconnue",
    "23-01": "23:00–01:00 (Jasi)",
    "01-03": "01:00–03:00 (Chuksi)",
    "03-05": "03:00–05:00 (Insi)",
    "05-07": "05:00–07:00 (Myosi)",
    "07-09": "07:00–09:00 (Jinsi)",
    "09-11": "09:00–11:00 (Sasi)",
    "11-13": "11:00–13:00 (Osi)",
    "13-15": "13:00–15:00 (Misi)",
    "15-17": "15:00–17:00 (Sinsi)",
    "17-19": "17:00–19:00 (Yusi)",
    "19-21": "19:00–21:00 (Sulsi)",
    "21-23": "21:00–23:00 (Haesi)",
  },
};

const it: ServiceCopyOverride = {
  byService: {
    "global-to-korean": {
      hero: {
        title: "Trasforma il tuo nome in un nome coreano",
        eyebrow: "Un nome coreano per vivere e lavorare in Corea",
        description:
          "Raccontaci il tuo nome originale, il paese, i dati di nascita e come userai il nome in Corea: ti suggeriremo nomi coreani naturali e facili da spiegare.",
        promise:
          "Raccomandiamo nomi facili da chiamare e da scrivere, con significato e pronuncia verificabili.",
        resultLabel: "Nomi coreani consigliati",
      },
      sectionTitles: {
        "기본 정보": "Informazioni di base",
        "출생 정보": "Dati di nascita",
        "한국 사용 맥락": "Contesto d'uso in Corea",
      },
      sectionDescriptions: {
        "기본 정보": "Scegli i dati di base necessari per suggerirti un nome coreano.",
        "출생 정보": "Seleziona ogni voce per un confronto e un'analisi accurati.",
        "한국 사용 맥락": "Scegli lo stile di nome desiderato e come userai il nome in Corea.",
      },
      fieldLabels: {
        originalName: "Nome originale",
        country: "Paese",
        nameMotivation: "Scopo del tuo nome coreano",
        gender: "Genere / immagine",
        birthYear: "Anno di nascita",
        birthMonth: "Mese di nascita",
        birthDay: "Giorno di nascita",
        birthHour: "Ora di nascita",
        koreanFamilyName: "Cognome coreano preferito",
        koreanTone: "Stile del nome",
        usageContext: "Contesto d'uso",
        outputLanguage: "Lingua del risultato",
      },
      fieldPlaceholders: {
        originalName: "Es.: Marco Rossi",
      },
    },
    "global-name-to-hangul": {
      hero: {
        title: "Scrivi il tuo nome in hangul, secondo la sua pronuncia reale",
        eyebrow: "Il tuo nome in hangul",
        description:
          "Analizziamo come si pronuncia il tuo nome e suggeriamo una grafia naturale in hangul.",
        promise:
          "Diamo priorità ai suoni e alle sillabe propri del tuo nome, seguendo le regole di pronuncia del coreano.",
        resultLabel: "Grafie in hangul consigliate",
      },
      sectionTitles: {
        "본명 정보": "Informazioni sul nome originale",
      },
      sectionDescriptions: {
        "본명 정보": "Scegli la lingua e il paese usati per scrivere e pronunciare il tuo nome.",
      },
      fieldLabels: {
        originalName: "Nome originale",
        originalNameLanguage: "Lingua di origine del tuo nome",
        country: "Paese",
        pronunciationHint: "Suggerimento di pronuncia (facoltativo)",
      },
      fieldHints: {
        originalName: "※ Inserisci il tuo nome completo nella tua lingua locale.",
        originalNameLanguage: "※ Scegli la lingua con cui si pronuncia il tuo nome.",
        country:
          "※ Serve a riflettere le differenze di pronuncia tra i paesi.\nCambiare paese può cambiare il risultato.",
        pronunciationHint:
          "※ Indica la divisione in sillabe e i suggerimenti di pronuncia.\nIl tuo suggerimento viene applicato con la massima priorità.",
      },
      fieldPlaceholders: {
        originalName: "Es.: Marco Rossi",
        pronunciationHint: "Es.: si pronuncia come Mar-co Ros-si",
      },
    },
  },
  optionLabels: {
    recommend: "Consigliamelo tu",
    natural_modern: "Naturale e moderno",
    traditional: "Tradizionale",
    business_friendly: "Adatto al lavoro",
    soft: "Morbido e caldo",
    distinctive: "Distintivo",
    korean_workplace: "Lavoro in Corea",
    school: "Scuola / scambio",
    creator: "Creator / profilo pubblico",
    daily: "Vita quotidiana",
    auto: "In base alla lingua del browser",
    not_specified: "Non specificato",
    female: "Femminile",
    male: "Maschile",
    neutral: "Neutro / indifferente",
    auto_by_country: "Selezione automatica in base al paese",
    korean_education: "Studio del coreano, lavoro o scambio",
    k_culture: "Cultura K, social media, alias",
    business: "Affari, biglietti da visita, lavoro internazionale",
    daily_social: "Amici, scuola, vita quotidiana",
    family_pet: "Nome per figli, famiglia o animali",
    creator_brand: "Creator, brand, profilo pubblico",
    unknown: "Sconosciuta",
    "23-01": "23:00–01:00 (Jasi)",
    "01-03": "01:00–03:00 (Chuksi)",
    "03-05": "03:00–05:00 (Insi)",
    "05-07": "05:00–07:00 (Myosi)",
    "07-09": "07:00–09:00 (Jinsi)",
    "09-11": "09:00–11:00 (Sasi)",
    "11-13": "11:00–13:00 (Osi)",
    "13-15": "13:00–15:00 (Misi)",
    "15-17": "15:00–17:00 (Sinsi)",
    "17-19": "17:00–19:00 (Yusi)",
    "19-21": "19:00–21:00 (Sulsi)",
    "21-23": "21:00–23:00 (Haesi)",
  },
};

const pt: ServiceCopyOverride = {
  byService: {
    "global-to-korean": {
      hero: {
        title: "Transforme seu nome em um nome coreano",
        eyebrow: "Um nome coreano para viver e trabalhar na Coreia",
        description:
          "Conte-nos seu nome original, país, dados de nascimento e como você usará o nome na Coreia — vamos sugerir nomes coreanos naturais e fáceis de explicar.",
        promise:
          "Recomendamos nomes fáceis de chamar e de escrever, com significado e pronúncia que você pode verificar.",
        resultLabel: "Nomes coreanos recomendados",
      },
      sectionTitles: {
        "기본 정보": "Informações básicas",
        "출생 정보": "Dados de nascimento",
        "한국 사용 맥락": "Contexto de uso na Coreia",
      },
      sectionDescriptions: {
        "기본 정보": "Escolha os dados básicos de que precisamos para sugerir um nome coreano.",
        "출생 정보": "Selecione cada item para uma comparação e uma análise precisas.",
        "한국 사용 맥락": "Escolha o estilo de nome desejado e como você usará o nome na Coreia.",
      },
      fieldLabels: {
        originalName: "Nome original",
        country: "País",
        nameMotivation: "Finalidade do seu nome coreano",
        gender: "Gênero / imagem",
        birthYear: "Ano de nascimento",
        birthMonth: "Mês de nascimento",
        birthDay: "Dia de nascimento",
        birthHour: "Hora de nascimento",
        koreanFamilyName: "Sobrenome coreano preferido",
        koreanTone: "Estilo do nome",
        usageContext: "Contexto de uso",
        outputLanguage: "Idioma do resultado",
      },
      fieldPlaceholders: {
        originalName: "Ex.: Ana Silva",
      },
    },
    "global-name-to-hangul": {
      hero: {
        title: "Escreva seu nome em hangul, conforme a pronúncia real",
        eyebrow: "Seu nome em hangul",
        description:
          "Analisamos como seu nome é pronunciado e sugerimos uma grafia natural em hangul.",
        promise:
          "Priorizamos os sons e as sílabas do seu próprio nome, seguindo as regras de pronúncia do coreano.",
        resultLabel: "Grafias em hangul recomendadas",
      },
      sectionTitles: {
        "본명 정보": "Informações do nome original",
      },
      sectionDescriptions: {
        "본명 정보": "Escolha o idioma e o país usados para escrever e pronunciar seu nome.",
      },
      fieldLabels: {
        originalName: "Nome original",
        originalNameLanguage: "Idioma de origem do seu nome",
        country: "País",
        pronunciationHint: "Dica de pronúncia (opcional)",
      },
      fieldHints: {
        originalName: "※ Digite seu nome completo no seu idioma local.",
        originalNameLanguage: "※ Escolha o idioma usado para pronunciar seu nome.",
        country:
          "※ Isso ajuda a refletir as diferenças de pronúncia entre países.\nMudar o país pode mudar o resultado.",
        pronunciationHint:
          "※ Informe a separação de sílabas e dicas de pronúncia.\nSua dica é aplicada com prioridade máxima.",
      },
      fieldPlaceholders: {
        originalName: "Ex.: Ana Silva",
        pronunciationHint: "Ex.: soa como A-na Sil-va",
      },
    },
  },
  optionLabels: {
    recommend: "Recomende para mim",
    natural_modern: "Natural e moderno",
    traditional: "Tradicional",
    business_friendly: "Adequado para negócios",
    soft: "Suave e acolhedor",
    distinctive: "Marcante",
    korean_workplace: "Trabalho na Coreia",
    school: "Escola / intercâmbio",
    creator: "Criador / perfil público",
    daily: "Dia a dia",
    auto: "Conforme o idioma do meu navegador",
    not_specified: "Não especificado",
    female: "Feminino",
    male: "Masculino",
    neutral: "Neutro / qualquer um",
    auto_by_country: "Seleção automática por país",
    korean_education: "Estudo de coreano, trabalho ou intercâmbio",
    k_culture: "Cultura K, redes sociais, apelido",
    business: "Negócios, cartões de visita, trabalho global",
    daily_social: "Amigos, escola, dia a dia",
    family_pet: "Nome para filhos, família ou pets",
    creator_brand: "Criador, marca, perfil público",
    unknown: "Não sei",
    "23-01": "23:00–01:00 (Jasi)",
    "01-03": "01:00–03:00 (Chuksi)",
    "03-05": "03:00–05:00 (Insi)",
    "05-07": "05:00–07:00 (Myosi)",
    "07-09": "07:00–09:00 (Jinsi)",
    "09-11": "09:00–11:00 (Sasi)",
    "11-13": "11:00–13:00 (Osi)",
    "13-15": "13:00–15:00 (Misi)",
    "15-17": "15:00–17:00 (Sinsi)",
    "17-19": "17:00–19:00 (Yusi)",
    "19-21": "19:00–21:00 (Sulsi)",
    "21-23": "21:00–23:00 (Haesi)",
  },
};

const ru: ServiceCopyOverride = {
  byService: {
    "global-to-korean": {
      hero: {
        title: "Превратите своё имя в корейское имя",
        eyebrow: "Корейское имя для жизни и работы в Корее",
        description:
          "Укажите своё имя, страну, данные о рождении и то, как вы будете использовать имя в Корее, — и мы предложим естественные корейские имена с понятным объяснением.",
        promise:
          "Мы рекомендуем имена, которые легко произносить и писать, со значением и произношением, которые можно проверить.",
        resultLabel: "Рекомендуемые корейские имена",
      },
      sectionTitles: {
        "기본 정보": "Основная информация",
        "출생 정보": "Данные о рождении",
        "한국 사용 맥락": "Контекст использования в Корее",
      },
      sectionDescriptions: {
        "기본 정보": "Выберите основные данные, необходимые для подбора корейского имени.",
        "출생 정보": "Выберите каждый пункт для точного сравнения и анализа.",
        "한국 사용 맥락": "Выберите желаемый стиль имени и то, как вы будете использовать его в Корее.",
      },
      fieldLabels: {
        originalName: "Исходное имя",
        country: "Страна",
        nameMotivation: "Цель корейского имени",
        gender: "Пол / образ",
        birthYear: "Год рождения",
        birthMonth: "Месяц рождения",
        birthDay: "День рождения",
        birthHour: "Время рождения",
        koreanFamilyName: "Желаемая корейская фамилия",
        koreanTone: "Стиль имени",
        usageContext: "Контекст использования",
        outputLanguage: "Язык результата",
      },
      fieldPlaceholders: {
        originalName: "Напр.: Иван Петров",
      },
    },
    "global-name-to-hangul": {
      hero: {
        title: "Запишите своё имя хангылем по его реальному произношению",
        eyebrow: "Ваше имя хангылем",
        description:
          "Мы анализируем, как произносится ваше имя, и предлагаем естественную запись хангылем.",
        promise:
          "Мы отдаём приоритет звукам и слогам вашего имени, следуя правилам корейского произношения.",
        resultLabel: "Рекомендуемые записи хангылем",
      },
      sectionTitles: {
        "본명 정보": "Сведения об исходном имени",
      },
      sectionDescriptions: {
        "본명 정보": "Выберите язык и страну, используемые для написания и произношения вашего имени.",
      },
      fieldLabels: {
        originalName: "Исходное имя",
        originalNameLanguage: "Исходный язык вашего имени",
        country: "Страна",
        pronunciationHint: "Подсказка произношения (по желанию)",
      },
      fieldHints: {
        originalName: "※ Введите полное имя на вашем родном языке.",
        originalNameLanguage: "※ Выберите язык, на котором произносится ваше имя.",
        country:
          "※ Это помогает учесть различия произношения по странам.\nСмена страны может изменить результат.",
        pronunciationHint:
          "※ Укажите разбивку на слоги и подсказки произношения.\nВаша подсказка применяется с наивысшим приоритетом.",
      },
      fieldPlaceholders: {
        originalName: "Напр.: Иван Петров",
        pronunciationHint: "Напр.: звучит как И-ван Пет-ров",
      },
    },
  },
  optionLabels: {
    recommend: "Подобрать за меня",
    natural_modern: "Естественное и современное",
    traditional: "Традиционное",
    business_friendly: "Деловое",
    soft: "Мягкое и тёплое",
    distinctive: "Запоминающееся",
    korean_workplace: "Работа в Корее",
    school: "Учёба / обмен",
    creator: "Автор контента / публичный профиль",
    daily: "Повседневная жизнь",
    auto: "По языку моего браузера",
    not_specified: "Не указано",
    female: "Женское",
    male: "Мужское",
    neutral: "Нейтральное / любое",
    auto_by_country: "Автовыбор по стране",
    korean_education: "Изучение корейского, работа или обмен",
    k_culture: "K-культура, соцсети, псевдоним",
    business: "Бизнес, визитки, международная работа",
    daily_social: "Друзья, учёба, повседневная жизнь",
    family_pet: "Имя для ребёнка, семьи или питомца",
    creator_brand: "Автор контента, бренд, публичный профиль",
    unknown: "Неизвестно",
    "23-01": "23:00–01:00 (Jasi)",
    "01-03": "01:00–03:00 (Chuksi)",
    "03-05": "03:00–05:00 (Insi)",
    "05-07": "05:00–07:00 (Myosi)",
    "07-09": "07:00–09:00 (Jinsi)",
    "09-11": "09:00–11:00 (Sasi)",
    "11-13": "11:00–13:00 (Osi)",
    "13-15": "13:00–15:00 (Misi)",
    "15-17": "15:00–17:00 (Sinsi)",
    "17-19": "17:00–19:00 (Yusi)",
    "19-21": "19:00–21:00 (Sulsi)",
    "21-23": "21:00–23:00 (Haesi)",
  },
};

const ar: ServiceCopyOverride = {
  byService: {
    "global-to-korean": {
      hero: {
        title: "حوّل اسمك إلى اسم كوري",
        eyebrow: "اسم كوري للحياة والعمل في كوريا",
        description:
          "أخبرنا باسمك الأصلي ودولتك وبيانات ميلادك وكيف ستستخدم الاسم في كوريا، وسنقترح عليك أسماء كورية طبيعية يسهل شرحها.",
        promise:
          "نوصي بأسماء يسهل نداؤها وكتابتها، مع معنى ونطق يمكنك التحقق منهما.",
        resultLabel: "الأسماء الكورية الموصى بها",
      },
      sectionTitles: {
        "기본 정보": "المعلومات الأساسية",
        "출생 정보": "بيانات الميلاد",
        "한국 사용 맥락": "سياق الاستخدام في كوريا",
      },
      sectionDescriptions: {
        "기본 정보": "اختر البيانات الأساسية التي نحتاجها لاقتراح اسم كوري.",
        "출생 정보": "اختر كل بند للحصول على مقارنة وتحليل دقيقين.",
        "한국 사용 맥락": "اختر أسلوب الاسم الذي تريده وكيف ستستخدم الاسم في كوريا.",
      },
      fieldLabels: {
        originalName: "الاسم الأصلي",
        country: "الدولة",
        nameMotivation: "الغرض من اسمك الكوري",
        gender: "الجنس / الصورة",
        birthYear: "سنة الميلاد",
        birthMonth: "شهر الميلاد",
        birthDay: "يوم الميلاد",
        birthHour: "وقت الميلاد",
        koreanFamilyName: "اسم العائلة الكوري المفضل",
        koreanTone: "أسلوب الاسم",
        usageContext: "سياق الاستخدام",
        outputLanguage: "لغة النتيجة",
      },
      fieldPlaceholders: {
        originalName: "مثال: سارة أحمد",
      },
    },
    "global-name-to-hangul": {
      hero: {
        title: "اكتب اسمك بالهانغل وفق نطقه الحقيقي",
        eyebrow: "اسمك بحروف الهانغل",
        description:
          "نحلل كيفية نطق اسمك ونقترح كتابة طبيعية بالهانغل.",
        promise:
          "نمنح الأولوية لأصوات اسمك ومقاطعه، مع اتباع قواعد النطق الكورية.",
        resultLabel: "كتابات الهانغل الموصى بها",
      },
      sectionTitles: {
        "본명 정보": "معلومات الاسم الأصلي",
      },
      sectionDescriptions: {
        "본명 정보": "اختر اللغة والدولة المستخدمتين في كتابة اسمك ونطقه.",
      },
      fieldLabels: {
        originalName: "الاسم الأصلي",
        originalNameLanguage: "اللغة الأصلية لاسمك",
        country: "الدولة",
        pronunciationHint: "إرشاد النطق (اختياري)",
      },
      fieldHints: {
        originalName: "※ أدخل اسمك الكامل بلغتك المحلية.",
        originalNameLanguage: "※ اختر اللغة المستخدمة في نطق اسمك.",
        country:
          "※ يساعد ذلك على مراعاة اختلافات النطق بين الدول.\nقد يؤدي تغيير الدولة إلى تغيير النتيجة.",
        pronunciationHint:
          "※ أدخل تقسيم المقاطع وإرشادات النطق.\nيُطبَّق إرشادك بأعلى أولوية.",
      },
      fieldPlaceholders: {
        originalName: "مثال: سارة أحمد",
        pronunciationHint: "مثال: يُنطق مثل سا-را أح-مد",
      },
    },
  },
  optionLabels: {
    recommend: "اقترح لي",
    natural_modern: "طبيعي وعصري",
    traditional: "تقليدي",
    business_friendly: "مناسب للعمل",
    soft: "ناعم ودافئ",
    distinctive: "مميز",
    korean_workplace: "مكان عمل كوري",
    school: "مدرسة / تبادل طلابي",
    creator: "صانع محتوى / ملف عام",
    daily: "الحياة اليومية",
    auto: "حسب لغة المتصفح",
    not_specified: "غير محدد",
    female: "أنثى",
    male: "ذكر",
    neutral: "محايد / أي منهما",
    auto_by_country: "اختيار تلقائي حسب الدولة",
    korean_education: "دراسة الكورية أو العمل أو التبادل",
    k_culture: "الثقافة الكورية، وسائل التواصل، اسم مستعار",
    business: "الأعمال، بطاقات العمل، العمل الدولي",
    daily_social: "الأصدقاء، المدرسة، الحياة اليومية",
    family_pet: "اسم لطفل أو للعائلة أو لحيوان أليف",
    creator_brand: "صانع محتوى، علامة تجارية، ملف عام",
    unknown: "غير معروف",
    "23-01": "23:00–01:00 (Jasi)",
    "01-03": "01:00–03:00 (Chuksi)",
    "03-05": "03:00–05:00 (Insi)",
    "05-07": "05:00–07:00 (Myosi)",
    "07-09": "07:00–09:00 (Jinsi)",
    "09-11": "09:00–11:00 (Sasi)",
    "11-13": "11:00–13:00 (Osi)",
    "13-15": "13:00–15:00 (Misi)",
    "15-17": "15:00–17:00 (Sinsi)",
    "17-19": "17:00–19:00 (Yusi)",
    "19-21": "19:00–21:00 (Sulsi)",
    "21-23": "21:00–23:00 (Haesi)",
  },
};

const tr: ServiceCopyOverride = {
  byService: {
    "global-to-korean": {
      hero: {
        title: "İsminizi bir Kore ismine dönüştürün",
        eyebrow: "Kore'de yaşam ve iş için bir Kore ismi",
        description:
          "Bize özgün isminizi, ülkenizi, doğum bilgilerinizi ve ismi Kore'de nasıl kullanacağınızı söyleyin; size doğal ve kolayca açıklanabilen Kore isimleri önerelim.",
        promise:
          "Çağırması ve yazması kolay, anlamı ve telaffuzu doğrulanabilir isimler öneriyoruz.",
        resultLabel: "Önerilen Kore isimleri",
      },
      sectionTitles: {
        "기본 정보": "Temel bilgiler",
        "출생 정보": "Doğum bilgileri",
        "한국 사용 맥락": "Kore'deki kullanım bağlamı",
      },
      sectionDescriptions: {
        "기본 정보": "Kore ismi önerebilmemiz için gereken temel bilgileri seçin.",
        "출생 정보": "Doğru karşılaştırma ve analiz için her ögeyi seçin.",
        "한국 사용 맥락": "İstediğiniz isim tarzını ve ismi Kore'de nasıl kullanacağınızı seçin.",
      },
      fieldLabels: {
        originalName: "Özgün isim",
        country: "Ülke",
        nameMotivation: "Kore isminizin amacı",
        gender: "Cinsiyet / imaj",
        birthYear: "Doğum yılı",
        birthMonth: "Doğum ayı",
        birthDay: "Doğum günü",
        birthHour: "Doğum saati",
        koreanFamilyName: "Tercih edilen Kore soyadı",
        koreanTone: "İsim tarzı",
        usageContext: "Kullanım bağlamı",
        outputLanguage: "Sonuç dili",
      },
      fieldPlaceholders: {
        originalName: "Örn.: Elif Yılmaz",
      },
    },
    "global-name-to-hangul": {
      hero: {
        title: "İsminizi gerçek telaffuzuna göre Hangıl ile yazın",
        eyebrow: "İsminiz Hangıl alfabesiyle",
        description:
          "İsminizin nasıl telaffuz edildiğini analiz eder ve doğal bir Hangıl yazımı öneririz.",
        promise:
          "Kore telaffuz kurallarına uyarak isminizin kendi seslerine ve hecelerine öncelik veririz.",
        resultLabel: "Önerilen Hangıl yazımları",
      },
      sectionTitles: {
        "본명 정보": "Özgün isim bilgileri",
      },
      sectionDescriptions: {
        "본명 정보": "İsminizin yazılışında ve telaffuzunda kullanılan dili ve ülkeyi seçin.",
      },
      fieldLabels: {
        originalName: "Özgün isim",
        originalNameLanguage: "İsminizin kaynak dili",
        country: "Ülke",
        pronunciationHint: "Telaffuz ipucu (isteğe bağlı)",
      },
      fieldHints: {
        originalName: "※ Tam adınızı kendi yerel dilinizde girin.",
        originalNameLanguage: "※ İsminizin telaffuzunda kullanılan dili seçin.",
        country:
          "※ Bu, ülkelere göre telaffuz farklarını yansıtmaya yardımcı olur.\nÜlkeyi değiştirmek sonucu değiştirebilir.",
        pronunciationHint:
          "※ Hece ayrımlarını ve telaffuz ipuçlarını girin.\nİpucunuz en yüksek öncelikle uygulanır.",
      },
      fieldPlaceholders: {
        originalName: "Örn.: Elif Yılmaz",
        pronunciationHint: "Örn.: E-lif Yıl-maz gibi okunur",
      },
    },
  },
  optionLabels: {
    recommend: "Benim için öner",
    natural_modern: "Doğal ve modern",
    traditional: "Geleneksel",
    business_friendly: "İş hayatına uygun",
    soft: "Yumuşak ve sıcak",
    distinctive: "Ayırt edici",
    korean_workplace: "Kore'de iş yeri",
    school: "Okul / değişim",
    creator: "İçerik üreticisi / herkese açık profil",
    daily: "Günlük yaşam",
    auto: "Tarayıcı dilime göre",
    not_specified: "Belirtilmedi",
    female: "Kadın",
    male: "Erkek",
    neutral: "Nötr / fark etmez",
    auto_by_country: "Ülkeye göre otomatik seçim",
    korean_education: "Korece öğrenimi, iş veya değişim",
    k_culture: "K-kültürü, sosyal medya, takma ad",
    business: "İş, kartvizit, küresel çalışma",
    daily_social: "Arkadaşlar, okul, günlük yaşam",
    family_pet: "Çocuk, aile veya evcil hayvan ismi",
    creator_brand: "İçerik üreticisi, marka, herkese açık profil",
    unknown: "Bilinmiyor",
    "23-01": "23:00–01:00 (Jasi)",
    "01-03": "01:00–03:00 (Chuksi)",
    "03-05": "03:00–05:00 (Insi)",
    "05-07": "05:00–07:00 (Myosi)",
    "07-09": "07:00–09:00 (Jinsi)",
    "09-11": "09:00–11:00 (Sasi)",
    "11-13": "11:00–13:00 (Osi)",
    "13-15": "13:00–15:00 (Misi)",
    "15-17": "15:00–17:00 (Sinsi)",
    "17-19": "17:00–19:00 (Yusi)",
    "19-21": "19:00–21:00 (Sulsi)",
    "21-23": "21:00–23:00 (Haesi)",
  },
};

// ko(원본)/en/vi/th/ja/zh/id/de/es/fr/it/pt/ru/ar/tr를 작성했고, 나머지 로케일은 영어로 폴백한다.
const overrides: Partial<Record<Locale, ServiceCopyOverride>> = { en, vi, th, ja, zh, id, de, es, fr, it, pt, ru, ar, tr };

// 한국어는 원본 설정(services.ts)을 그대로 쓰므로 null을 반환한다.
export function getServiceOverride(locale: Locale): ServiceCopyOverride | null {
  if (locale === "ko") return null;
  return overrides[locale] ?? en;
}

export function localizeSectionTitle(
  override: ServiceCopyOverride | null,
  slug: string,
  sectionTitle: string,
) {
  return override?.byService[slug]?.sectionTitles?.[sectionTitle] ?? sectionTitle;
}

// 서비스 소개 영역(제목·아이브로·설명·약속·결과 라벨)을 로케일에 맞게 덮어쓴 설정 사본을 돌려준다.
export function localizeServiceHero(
  override: ServiceCopyOverride | null,
  service: ServiceConfig,
): ServiceConfig {
  const hero = override?.byService[service.slug]?.hero;
  if (!hero) return service;
  return {
    ...service,
    title: hero.title ?? service.title,
    eyebrow: hero.eyebrow ?? service.eyebrow,
    description: hero.description ?? service.description,
    promise: hero.promise ?? service.promise,
    resultLabel: hero.resultLabel ?? service.resultLabel,
  };
}

export function localizeSectionDescription(
  override: ServiceCopyOverride | null,
  slug: string,
  sectionTitle: string,
  original: string,
) {
  return override?.byService[slug]?.sectionDescriptions?.[sectionTitle] ?? original;
}

export function localizeFieldLabel(
  override: ServiceCopyOverride | null,
  slug: string,
  fieldName: string,
  original: string,
) {
  return override?.byService[slug]?.fieldLabels?.[fieldName] ?? original;
}

export function localizeFieldHint(
  override: ServiceCopyOverride | null,
  slug: string,
  fieldName: string,
  original: string | undefined,
) {
  return override?.byService[slug]?.fieldHints?.[fieldName] ?? original;
}

export function localizeFieldPlaceholder(
  override: ServiceCopyOverride | null,
  slug: string,
  fieldName: string,
  original: string | undefined,
) {
  return override?.byService[slug]?.fieldPlaceholders?.[fieldName] ?? original;
}

export function localizeOptions(
  override: ServiceCopyOverride | null,
  options: FieldOption[],
): FieldOption[] {
  if (!override) return options;
  return options.map((option) => {
    const mapped = override.optionLabels[option.value];
    if (mapped) return { ...option, label: mapped };
    // 월("01".."12")·일("01".."31")은 규칙으로 숫자만 표시한다.
    if (/^\d{2}$/.test(option.value)) return { ...option, label: String(Number(option.value)) };
    return option;
  });
}
