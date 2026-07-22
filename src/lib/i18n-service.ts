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

// ko(원본)/en/vi/th/ja/zh/id/de/es를 작성했고, 나머지 로케일은 영어로 폴백한다.
const overrides: Partial<Record<Locale, ServiceCopyOverride>> = { en, vi, th, ja, zh, id, de, es };

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
