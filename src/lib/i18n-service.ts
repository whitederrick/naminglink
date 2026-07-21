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

// ko(원본)/en/vi/th를 작성했고, 나머지 로케일은 영어로 폴백한다.
const overrides: Partial<Record<Locale, ServiceCopyOverride>> = { en, vi, th };

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
