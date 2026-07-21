export type Locale =
  | "ko"
  | "en"
  | "ja"
  | "zh"
  | "de"
  | "es"
  | "fr"
  | "it"
  | "pt"
  | "vi"
  | "th"
  | "id"
  | "ru"
  | "ar"
  | "fil"
  | "uz"
  | "mn"
  | "hi"
  | "tr"
  | "km"
  | "ms"
  | "kk"
  | "pl";

export type ServiceType =
  | "HANJA_MEANING_MATCH"
  | "KOREAN_TO_GLOBAL"
  | "GLOBAL_TO_KOREAN";

export type FieldOption = {
  value: string;
  label: string;
};

export type CountryOption = FieldOption & {
  locale: Locale;
  languageName: string;
  localNameHint: string;
  languageLocales?: Locale[];
  suggestedMotivation?: "korean_education" | "k_culture";
  motivationNote?: string;
};

export type FieldConfig = {
  name: string;
  label: string;
  hint?: string;
  placeholder?: string;
  type?: "text" | "textarea" | "select";
  options?: FieldOption[];
  required?: boolean;
};

export type FieldSection = {
  title: string;
  description: string;
  fields: FieldConfig[];
};

export type AddOn = {
  key: "premiumPdf" | "calligraphy" | "stamp" | "adUnlock";
  title: string;
  priceLabel: string;
  description: string;
};

export type ServiceConfig = {
  slug: string;
  serviceType: ServiceType;
  title: string;
  shortTitle: string;
  eyebrow: string;
  audience: string;
  description: string;
  promise: string;
  icon: "hanja" | "passport" | "korean";
  defaultLocale: Locale | "auto";
  resultLabel: string;
  sections: FieldSection[];
  addOns: AddOn[];
};

export const localeLabels: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  zh: "中文",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  pt: "Português",
  vi: "Tiếng Việt",
  th: "ไทย",
  id: "Bahasa Indonesia",
  ru: "Русский",
  ar: "العربية",
  fil: "Filipino",
  uz: "O‘zbekcha",
  mn: "Монгол",
  hi: "हिन्दी",
  tr: "Türkçe",
  km: "ភាសាខ្មែរ",
  ms: "Bahasa Melayu",
  kk: "Қазақша",
  pl: "Polski",
};

export const primaryLocales: Locale[] = ["ko", "en", "ja", "zh", "de", "es"];

export const secondaryLocales: Locale[] = [
  "fr",
  "it",
  "pt",
  "vi",
  "th",
  "id",
  "ru",
  "ar",
  "fil",
  "uz",
  "mn",
  "hi",
  "tr",
  "km",
  "ms",
  "kk",
  "pl",
];

export const supportedLocales: Locale[] = [
  ...primaryLocales,
  ...secondaryLocales,
];

export const currentYear = new Date().getFullYear();

export const yearOptions = Array.from({ length: 120 }, (_, index) => {
  const year = currentYear - index;
  return { value: String(year), label: String(year) };
});

export const monthOptions = Array.from({ length: 12 }, (_, index) => {
  const month = index + 1;
  return { value: String(month).padStart(2, "0"), label: `${month}월` };
});

export const dayOptions = Array.from({ length: 31 }, (_, index) => {
  const day = index + 1;
  return { value: String(day).padStart(2, "0"), label: `${day}일` };
});

const hanjaBirthYearOptions = [
  yearOptions[0],
  { value: String(currentYear + 1), label: `${currentYear + 1}(예정)` },
  ...yearOptions.slice(1, 25),
];

const hanjaBirthMonthOptions = [
  ...monthOptions,
  { value: "unknown", label: "미정" },
];

const hanjaBirthDayOptions = [
  ...dayOptions,
  { value: "unknown", label: "미정" },
];

export const birthHourOptions = [
  { value: "unknown", label: "모름" },
  { value: "23-01", label: "자시 23:00-01:00" },
  { value: "01-03", label: "축시 01:00-03:00" },
  { value: "03-05", label: "인시 03:00-05:00" },
  { value: "05-07", label: "묘시 05:00-07:00" },
  { value: "07-09", label: "진시 07:00-09:00" },
  { value: "09-11", label: "사시 09:00-11:00" },
  { value: "11-13", label: "오시 11:00-13:00" },
  { value: "13-15", label: "미시 13:00-15:00" },
  { value: "15-17", label: "신시 15:00-17:00" },
  { value: "17-19", label: "유시 17:00-19:00" },
  { value: "19-21", label: "술시 19:00-21:00" },
  { value: "21-23", label: "해시 21:00-23:00" },
];

const hanjaBirthHourOptions = birthHourOptions.map((option) =>
  option.value === "unknown" ? { ...option, label: "미정" } : option,
);

const languageOptions: FieldOption[] = [
  { value: "auto", label: "접속 환경에 맞춤" },
  ...supportedLocales.map((locale) => ({
    value: locale,
    label: localeLabels[locale],
  })),
];

const nameLanguageOptions: FieldOption[] = supportedLocales.map((locale) => ({
  value: locale,
  label: localeLabels[locale],
}));

const genderOptions: FieldOption[] = [
  { value: "not_specified", label: "선택 안 함" },
  { value: "female", label: "여성" },
  { value: "male", label: "남성" },
  { value: "neutral", label: "중성/무관" },
];

export const nameMotivationOptions: FieldOption[] = [
  {
    value: "auto_by_country",
    label: "국가별 추천 목적 자동 선택",
  },
  {
    value: "korean_education",
    label: "한국어 교육, 취업, 유학 실용 목적",
  },
  {
    value: "k_culture",
    label: "K-culture, SNS, 부캐, 애칭 이름",
  },
  {
    value: "business",
    label: "비즈니스, 명함, 글로벌 업무",
  },
  {
    value: "daily_social",
    label: "친구, 학교, 일상 생활",
  },
  {
    value: "family_pet",
    label: "자녀, 가족, 반려동물 이름",
  },
  {
    value: "creator_brand",
    label: "크리에이터, 브랜드, 공개 프로필",
  },
];

export const countryOptions: CountryOption[] = [
  {
    value: "jp",
    label: "Japan / 日本",
    locale: "ja",
    languageName: "Japanese",
    localNameHint: "例: 山田 太郎",
  },
  {
    value: "vn",
    label: "Vietnam / Việt Nam",
    locale: "vi",
    languageName: "Vietnamese",
    localNameHint: "Ví dụ: Nguyễn Minh Anh",
    suggestedMotivation: "korean_education",
    motivationNote:
      "한국어 교육과 취업/유학 목적의 실용 수요가 매우 강한 우선 국가입니다.",
  },
  {
    value: "ph",
    label: "Philippines / Pilipinas",
    locale: "fil",
    languageLocales: ["en"],
    languageName: "Filipino",
    localNameHint: "Hal: Maria Santos",
  },
  {
    value: "th",
    label: "Thailand / ประเทศไทย",
    locale: "th",
    languageName: "Thai",
    localNameHint: "เช่น: สมชาย ใจดี",
    suggestedMotivation: "k_culture",
    motivationNote:
      "K-culture 기반으로 한국 이름을 직접 지어 쓰는 문화적 유행 수요가 강한 우선 국가입니다.",
  },
  {
    value: "id",
    label: "Indonesia",
    locale: "id",
    languageName: "Indonesian",
    localNameHint: "Contoh: Budi Santoso",
    suggestedMotivation: "k_culture",
    motivationNote:
      "K-culture 기반으로 한국 이름 짓기 관심이 두드러지는 우선 국가입니다.",
  },
  {
    value: "cn",
    label: "China / 中国",
    locale: "zh",
    languageName: "Chinese",
    localNameHint: "例如: 王小明",
  },
  {
    value: "tw",
    label: "Taiwan / 臺灣",
    locale: "zh",
    languageName: "Traditional Chinese",
    localNameHint: "例如: 陳怡君",
  },
  {
    value: "uz",
    label: "Uzbekistan / O‘zbekiston",
    locale: "uz",
    languageName: "Uzbek",
    localNameHint: "Masalan: Aziz Karimov",
  },
  {
    value: "mn",
    label: "Mongolia / Монгол",
    locale: "mn",
    languageName: "Mongolian",
    localNameHint: "Жишээ: Бат Эрдэнэ",
  },
  {
    value: "in",
    label: "India / भारत",
    locale: "hi",
    languageLocales: ["en"],
    languageName: "Hindi / English",
    localNameHint: "उदाहरण: आरव शर्मा",
  },
  {
    value: "us",
    label: "United States",
    locale: "en",
    languageLocales: ["es"],
    languageName: "English",
    localNameHint: "e.g. your full name in its original spelling",
  },
  {
    value: "mx",
    label: "Mexico / México",
    locale: "es",
    languageName: "Spanish",
    localNameHint: "Ej: José Hernández",
  },
  {
    value: "br",
    label: "Brazil / Brasil",
    locale: "pt",
    languageName: "Portuguese",
    localNameHint: "Ex: João Silva",
  },
  {
    value: "fr",
    label: "France",
    locale: "fr",
    languageName: "French",
    localNameHint: "Ex: Camille Dubois",
  },
  {
    value: "gb",
    label: "United Kingdom",
    locale: "en",
    languageName: "English",
    localNameHint: "e.g. Olivia Bennett",
  },
  {
    value: "tr",
    label: "Türkiye",
    locale: "tr",
    languageName: "Turkish",
    localNameHint: "Örn: Elif Yılmaz",
  },
  {
    value: "ru",
    label: "Russia / Россия",
    locale: "ru",
    languageName: "Russian",
    localNameHint: "Напр.: Анна Иванова",
  },
  {
    value: "ae",
    label: "United Arab Emirates / الإمارات",
    locale: "ar",
    languageLocales: ["en"],
    languageName: "Arabic",
    localNameHint: "مثال: أحمد المنصوري",
  },
  {
    value: "eg",
    label: "Egypt / مصر",
    locale: "ar",
    languageName: "Arabic",
    localNameHint: "مثال: مريم حسن",
  },
  {
    value: "sa",
    label: "Saudi Arabia / السعودية",
    locale: "ar",
    languageName: "Arabic",
    localNameHint: "مثال: خالد العتيبي",
  },
  {
    value: "kh",
    label: "Cambodia / កម្ពុជា",
    locale: "km",
    languageName: "Khmer",
    localNameHint: "ឧ: សុខ ស្រីនាង",
  },
  {
    value: "my",
    label: "Malaysia",
    locale: "ms",
    languageLocales: ["en", "zh"],
    languageName: "Malay",
    localNameHint: "Contoh: Nur Aisyah",
  },
  {
    value: "de",
    label: "Germany / Deutschland",
    locale: "de",
    languageName: "German",
    localNameHint: "z. B. Lukas Schneider",
  },
  {
    value: "au",
    label: "Australia",
    locale: "en",
    languageName: "English",
    localNameHint: "e.g. Amelia Wilson",
  },
  {
    value: "ca",
    label: "Canada",
    locale: "en",
    languageLocales: ["fr"],
    languageName: "English / French",
    localNameHint: "e.g. Noah Tremblay",
  },
  {
    value: "ar",
    label: "Argentina",
    locale: "es",
    languageName: "Spanish",
    localNameHint: "Ej: Valentina García",
  },
  {
    value: "cl",
    label: "Chile",
    locale: "es",
    languageName: "Spanish",
    localNameHint: "Ej: Martín González",
  },
  {
    value: "kz",
    label: "Kazakhstan / Қазақстан",
    locale: "kk",
    languageLocales: ["ru"],
    languageName: "Kazakh / Russian",
    localNameHint: "Мысалы: Айдана Нұрлан",
  },
  {
    value: "pl",
    label: "Poland / Polska",
    locale: "pl",
    languageName: "Polish",
    localNameHint: "Np.: Anna Kowalska",
  },
  {
    value: "it",
    label: "Italy / Italia",
    locale: "it",
    languageName: "Italian",
    localNameHint: "Es: Giulia Rossi",
  },
];

export function getCountryOption(value: string | undefined) {
  return countryOptions.find((country) => country.value === value);
}

export function getCountryOptionsForLocale(locale: string | undefined) {
  if (!locale) return countryOptions;

  const isLanguageMatch = (country: CountryOption) =>
    country.locale === locale || country.languageLocales?.includes(locale as Locale);

  return [
    ...countryOptions.filter(isLanguageMatch),
    ...countryOptions.filter((country) => !isLanguageMatch(country)),
  ];
}

export function getCountryDefaultLocale(value: string | undefined) {
  return getCountryOption(value)?.locale;
}

export function getLanguageOptionsForCountry(value: string | undefined) {
  const country = getCountryOption(value);
  const preferredLocales = country
    ? [country.locale, ...(country.languageLocales ?? [])]
    : [];

  return [
    ...preferredLocales.map((locale) => ({
      value: locale,
      label: localeLabels[locale],
    })),
    ...supportedLocales
      .filter((locale) => !preferredLocales.includes(locale))
      .map((locale) => ({
        value: locale,
        label: localeLabels[locale],
      })),
  ];
}

const sharedPremiumAddOns: AddOn[] = [
  {
    key: "stamp",
    title: "이름 도장 신청",
    priceLabel: "₩39,000",
    description:
      "한글 또는 한자 이름을 기준으로 도장 문구를 제안하고 제작/배송 신청으로 연결합니다.",
  },
];

const globalToKoreanAddOns: AddOn[] = [
  {
    key: "stamp",
    title: "한글 이름 도장 신청",
    priceLabel: "₩39,000",
    description:
      "외국인 사용자가 실제로 쓰기 쉬운 한글 이름 기준으로 도장 문구와 제작 신청을 연결합니다.",
  },
];

export const services = {
  hanjaMeaning: {
    slug: "hanja-meaning",
    serviceType: "HANJA_MEANING_MATCH",
    title: "한글 이름에 맞는 한자 의미 매칭",
    shortTitle: "한자 의미",
    eyebrow: "부모를 위한 인명용 한자 설계",
    audience: "이미 한글 이름을 정한 부모",
    description:
      "먼저 정한 한글 이름의 소리를 유지하면서 부모의 바람,\n제외하고 싶은 의미, 출생 정보를 함께 검토해 한자 후보와\n배제 사유를 제안합니다.",
    promise:
      "공식 인명용 한자표의 지정 발음, 첫소리 ㄴ/ㄹ 예외, 동자/속자/약자와 부수 변형 주의사항을 반영합니다.",
    icon: "hanja",
    defaultLocale: "ko",
    resultLabel: "추천 한자 조합",
    sections: [
      {
        title: "아이의 한글 이름",
        description: "먼저 정해 둔 한글 이름과 돌림자 정보를 입력합니다.",
        fields: [
          {
            name: "familyName",
            label: "성",
            placeholder: "예: 김",
            required: true,
          },
          {
            name: "givenNameHangul",
            label: "이름(한글)",
            placeholder: "예: 서윤",
            required: true,
          },
          {
            name: "gender",
            label: "성별(선택)",
            type: "select",
            options: genderOptions,
          },
          {
            name: "generationNameUsage",
            label: "돌림자 여부",
            type: "select",
            options: [
              { value: "none", label: "사용 안 함" },
              { value: "used", label: "사용함" },
              { value: "unknown", label: "모름" },
            ],
          },
          {
            name: "generationSyllable",
            label: "돌림자 글자",
            placeholder: "예: 준",
          },
          {
            name: "generationHanja",
            label: "사용 한자",
            placeholder: "예: 俊",
          },
        ],
      },
      {
        title: "사주 참고 정보",
        description:
          "출생 전에는 예정 정보를 선택할 수 있으며, 미정 항목은 전통 오행 참고에서 제외합니다.",
        fields: [
          {
            name: "birthStatus",
            label: "출생 여부",
            type: "select",
            options: [
              { value: "born", label: "출생" },
              { value: "expected", label: "출생 예정" },
            ],
            required: true,
          },
          {
            name: "calendarType",
            label: "달력 기준",
            type: "select",
            options: [
              { value: "solar", label: "양력" },
              { value: "lunar", label: "음력" },
            ],
            required: true,
          },
          {
            name: "birthYear",
            label: "출생 연도",
            type: "select",
            options: hanjaBirthYearOptions,
            required: true,
          },
          {
            name: "birthMonth",
            label: "출생 월",
            type: "select",
            options: hanjaBirthMonthOptions,
            required: true,
          },
          {
            name: "birthDay",
            label: "출생 일",
            type: "select",
            options: hanjaBirthDayOptions,
            required: true,
          },
          {
            name: "birthHour",
            label: "태어난 시간",
            type: "select",
            options: hanjaBirthHourOptions,
            required: true,
          },
        ],
      },
      {
        title: "의미와 제한 조건",
        description: "부모가 담고 싶은 가치와 피하고 싶은 뜻을 적습니다.",
        fields: [
          {
            name: "parentWishes",
            label: "담고 싶은 가치(선택)",
            placeholder: "예: 지혜, 평안, 밝음, 자기 길을 잃지 않는 사람",
            type: "textarea",
          },
          {
            name: "excludedMeanings",
            label: "피하고 싶은 의미/한자(선택)",
            placeholder: "예: 너무 강한 기운, 죽음/병/원망 계열 의미, 가족 이름과 중복",
            type: "textarea",
          },
        ],
      },
    ],
    addOns: sharedPremiumAddOns,
  },
  koreanToGlobal: {
    slug: "korean-to-global",
    serviceType: "KOREAN_TO_GLOBAL",
    title: "한글 이름을 글로벌 이름으로 변환",
    shortTitle: "글로벌 이름",
    eyebrow: "해외 활동을 위한 고급 네이밍",
    audience: "유학, 이민, 해외 비즈니스, 크리에이터",
    description:
      "한글 이름의 소리와 한자 의미, 사용 국가, 사용 목적, 지역별 발음 등을 함께 반영해\n사용자가 원하는 언어 및 국가에 맞는 이름 후보를 제안합니다.",
    promise:
      "단순 발음 변환이 아닌 국가별 자연스러움, 피해야 할 표현 등을 함께 검토합니다.",
    icon: "passport",
    defaultLocale: "ko",
    resultLabel: "추천 글로벌 이름",
    sections: [
      {
        title: "기존 이름과 정체성",
        description: "글로벌 이름으로 이어갈 본명의 소리와 의미를 입력합니다. 한자와 의미를 자세히 적을수록 뜻을 살린 이름이 나옵니다.",
        fields: [
          {
            name: "familyName",
            label: "성(한글)",
            placeholder: "예: 안",
            required: true,
          },
          {
            name: "givenName",
            label: "이름(한글)",
            placeholder: "예: 남규",
            required: true,
          },
          {
            name: "familyNameHanja",
            label: "성의 한자(선택)",
            placeholder: "예: 安",
          },
          {
            name: "givenNameHanja",
            label: "이름의 한자(선택)",
            placeholder: "예: 南奎",
          },
          {
            name: "nameMeaning",
            label: "이름의 의미(선택)",
            placeholder: "예: 南 남녘, 奎 별이름 — 남쪽 하늘의 큰 별처럼 넓게 비추길 바라는 이름. 한자가 없는 순우리말 이름도 뜻을 적어 주세요.",
            type: "textarea",
          },
          {
            name: "gender",
            label: "성별/이미지",
            type: "select",
            options: genderOptions,
          },
          {
            name: "identityPriority",
            label: "보존 우선 기준",
            type: "select",
            options: [
              { value: "balanced", label: "소리와 의미를 균형 있게" },
              { value: "sound", label: "원래 이름의 소리 우선" },
              { value: "meaning", label: "원래 이름의 의미 우선" },
            ],
          },
        ],
      },
      {
        title: "사주 참고 정보",
        description: "이름의 전체적인 균형 참고를 위한 출생 정보를 선택합니다.",
        fields: [
          {
            name: "birthYear",
            label: "출생 연도",
            type: "select",
            options: yearOptions,
          },
          {
            name: "birthMonth",
            label: "출생 월",
            type: "select",
            options: monthOptions,
          },
          {
            name: "birthDay",
            label: "출생 일",
            type: "select",
            options: dayOptions,
          },
          {
            name: "birthHour",
            label: "태어난 시간",
            type: "select",
            options: birthHourOptions,
          },
        ],
      },
      {
        title: "지역과 사용 조건",
        description: "글로벌 이름을 실제로 사용할 국가와 상황을 선택합니다.",
        fields: [
          {
            name: "targetCountry",
            label: "사용할 국가",
            type: "select",
            options: countryOptions,
            required: true,
          },
          {
            name: "targetLanguage",
            label: "사용 언어",
            type: "select",
            options: getLanguageOptionsForCountry("jp"),
            required: true,
          },
          {
            name: "usageContext",
            label: "사용 목적",
            type: "select",
            options: [
              { value: "business", label: "비즈니스/명함" },
              { value: "study", label: "유학/학교" },
              { value: "creator", label: "크리에이터/브랜드" },
              { value: "daily", label: "일상/친구 관계" },
              { value: "legal_alias", label: "영문 별칭/서류" },
            ],
            required: true,
          },
          {
            name: "preferredTone",
            label: "원하는 이미지",
            type: "select",
            options: [
              { value: "no_preference", label: "상관 없음" },
              { value: "trustworthy", label: "신뢰감" },
              { value: "premium", label: "고급스러움" },
              { value: "friendly", label: "친근함" },
              { value: "creative", label: "창의적" },
              { value: "classic", label: "클래식" },
            ],
          },
        ],
      },
    ],
    addOns: sharedPremiumAddOns,
  },
  globalToKorean: {
    slug: "global-to-korean",
    serviceType: "GLOBAL_TO_KOREAN",
    title: "외국 이름을 한국 이름으로 변환",
    shortTitle: "한국 이름",
    eyebrow: "한국 생활과 브랜드를 위한 한글 이름",
    audience: "한국 이름이 필요한 외국인, 교포, 글로벌 브랜드",
    description:
      "원래 이름, 출신 국가, 생년월일과 생시, 한국에서의 사용 맥락을 선택값으로 받아 자연스럽고 설명 가능한 한국 이름을 제안합니다.",
    promise:
      "기본 결과는 외국인이 실제로 부르고 쓰기 쉬운 한글 이름을 중심으로 제안하고, 한자 풀이는 부가 리포트에서 확장합니다.",
    icon: "korean",
    defaultLocale: "auto",
    resultLabel: "추천 한국 이름",
    sections: [
      {
        title: "Original identity",
        description: "한글 이름 추천에 필요한 기본 정보를 선택합니다.",
        fields: [
          {
            name: "originalName",
            label: "현지어 이름 / Original name",
            placeholder: "예: Nguyễn Minh Anh, 山田 太郎, María García",
            required: true,
          },
          {
            name: "country",
            label: "국가 / Country",
            type: "select",
            options: countryOptions,
            required: true,
          },
          {
            name: "nameMotivation",
            label: "한국 이름 사용 목적",
            type: "select",
            options: nameMotivationOptions,
            required: true,
          },
          {
            name: "gender",
            label: "Gender / image",
            type: "select",
            options: genderOptions,
          },
        ],
      },
      {
        title: "Birth profile",
        description: "정확한 비교와 분석을 위해 항목별 정보를 선택합니다.",
        fields: [
          {
            name: "birthYear",
            label: "Birth year",
            type: "select",
            options: yearOptions,
            required: true,
          },
          {
            name: "birthMonth",
            label: "Birth month",
            type: "select",
            options: monthOptions,
            required: true,
          },
          {
            name: "birthDay",
            label: "Birth day",
            type: "select",
            options: dayOptions,
            required: true,
          },
          {
            name: "birthHour",
            label: "Birth time",
            type: "select",
            options: birthHourOptions,
            required: true,
          },
        ],
      },
      {
        title: "Korean usage context",
        description: "원하는 이름의 분위기와 한국에서의 사용 목적을 선택합니다.",
        fields: [
          {
            name: "koreanFamilyName",
            label: "Preferred Korean family name",
            type: "select",
            options: [
              { value: "recommend", label: "Recommend for me" },
              { value: "kim", label: "김 Kim" },
              { value: "lee", label: "이 Lee" },
              { value: "park", label: "박 Park" },
              { value: "choi", label: "최 Choi" },
              { value: "jung", label: "정 Jung" },
            ],
          },
          {
            name: "koreanTone",
            label: "Name tone",
            type: "select",
            options: [
              { value: "natural_modern", label: "Natural and modern" },
              { value: "traditional", label: "Traditional" },
              { value: "business", label: "Business-friendly" },
              { value: "soft", label: "Soft and warm" },
              { value: "distinctive", label: "Distinctive" },
            ],
          },
          {
            name: "usageContext",
            label: "Usage context",
            type: "select",
            options: [
              { value: "korean_workplace", label: "Korean workplace" },
              { value: "school", label: "School / exchange" },
              { value: "creator", label: "Creator / public profile" },
              { value: "daily", label: "Daily life" },
            ],
          },
          {
            name: "outputLanguage",
            label: "Output language",
            type: "select",
            options: languageOptions,
          },
        ],
      },
    ],
    addOns: globalToKoreanAddOns,
  },
} satisfies Record<string, ServiceConfig>;

export const globalNameToHangulService: ServiceConfig = {
  ...services.globalToKorean,
  slug: "global-name-to-hangul",
  title: "글로벌 이름을 발음대로 한글로 표기",
  shortTitle: "한글 발음 표기",
  eyebrow: "본인 이름을 한글로 표기",
  audience: "한글로 이름을 소개하거나 기록하려는 글로벌 사용자",
  description:
    "본인 이름의 발음을 분석해 자연스러운 한글 표기를 제안합니다.",
  promise:
    "본인 이름의 소리와 음절을 우선하며, 한국어 발음 규칙에 맞춰 안내합니다.",
  resultLabel: "추천 한글 발음 표기",
  sections: [
    {
      title: "Original name",
      description: "본명을 실제로 표기하고 발음하는 언어와 국가를 선택해 주세요.",
      fields: [
        {
          name: "originalName",
          label: "본명 / Original name",
          hint: "※ 현지 언어로 쓴 전체 이름을 입력하세요.",
          placeholder: "예: Daniel Brooks",
          required: true,
        },
        {
          name: "originalNameLanguage",
          label: "본명 표기 언어",
          hint: "※ 이름 발음에 사용하는 언어를 선택하세요.",
          type: "select",
          options: nameLanguageOptions,
          required: true,
        },
        {
          name: "country",
          label: "국가 / Country",
          hint: "※ 국가에 따른 발음 차이를 반영하는 보조 정보입니다.\n    국가 변경 시 발음이 달라질 수 있습니다.",
          type: "select",
          options: countryOptions,
          required: true,
        },
        {
          name: "pronunciationHint",
          label: "실제 발음 힌트 (선택)",
          hint: "※ 발음 음절 구분 및 발음 힌트를 입력하세요.\n    입력한 힌트를 가장 우선하여 적용합니다.",
          placeholder: "예: Dan-yell과 비슷함",
        },
      ],
    },
  ],
  addOns: [],
};

export const serviceList = Object.values(services);

export function getServiceBySlug(slug: string) {
  return serviceList.find((service) => service.slug === slug);
}
