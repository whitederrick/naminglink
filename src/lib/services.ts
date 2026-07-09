export type Locale = "ko" | "en" | "ja" | "zh" | "de" | "es" | "fr";

export type ServiceType =
  | "HANJA_MEANING_MATCH"
  | "KOREAN_TO_GLOBAL"
  | "GLOBAL_TO_KOREAN";

export type FieldOption = {
  value: string;
  label: string;
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
};

const currentYear = new Date().getFullYear();

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

const languageOptions: FieldOption[] = [
  { value: "auto", label: "접속 환경에 맞춤" },
  { value: "ko", label: "한국어" },
  { value: "en", label: "English" },
  { value: "ja", label: "日本語" },
  { value: "zh", label: "中文" },
  { value: "de", label: "Deutsch" },
  { value: "es", label: "Español" },
  { value: "fr", label: "Français" },
];

const genderOptions: FieldOption[] = [
  { value: "not_specified", label: "선택 안 함" },
  { value: "female", label: "여성" },
  { value: "male", label: "남성" },
  { value: "neutral", label: "중성/무관" },
];

const targetRegionOptions: FieldOption[] = [
  { value: "en_us_ca", label: "영어권 - 미국/캐나다" },
  { value: "en_uk_ie", label: "영어권 - 영국/아일랜드" },
  { value: "ja_jp", label: "일본" },
  { value: "zh_cn", label: "중국어권 - 간체" },
  { value: "zh_tw_hk", label: "중국어권 - 번체" },
  { value: "de_dach", label: "독일어권 - 독일/오스트리아/스위스" },
  { value: "es_es", label: "스페인" },
  { value: "es_latam", label: "라틴아메리카 스페인어권" },
  { value: "fr_fr_ca", label: "프랑스어권 - 프랑스/캐나다" },
  { value: "global_business", label: "글로벌 비즈니스 공통" },
];

const countryOptions: FieldOption[] = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "gb", label: "United Kingdom" },
  { value: "ie", label: "Ireland" },
  { value: "jp", label: "Japan" },
  { value: "cn", label: "China" },
  { value: "tw", label: "Taiwan" },
  { value: "hk", label: "Hong Kong" },
  { value: "de", label: "Germany" },
  { value: "at", label: "Austria" },
  { value: "ch", label: "Switzerland" },
  { value: "es", label: "Spain" },
  { value: "mx", label: "Mexico" },
  { value: "ar", label: "Argentina" },
  { value: "cl", label: "Chile" },
  { value: "fr", label: "France" },
  { value: "au", label: "Australia" },
  { value: "other", label: "Other" },
];

const sharedPremiumAddOns: AddOn[] = [
  {
    key: "premiumPdf",
    title: "프리미엄 작명 리포트 PDF",
    priceLabel: "₩9,900",
    description:
      "후보별 의미, 배제 사유, 발음/문화권 분석, 사주 참고 메모를 인쇄 가능한 보고서로 제공합니다.",
  },
  {
    key: "calligraphy",
    title: "캘리그라피 이미지",
    priceLabel: "₩6,900",
    description:
      "선택한 이름을 카드, 모바일 배경, 출생 알림에 쓸 수 있는 이미지로 제작하는 부가 서비스입니다.",
  },
  {
    key: "stamp",
    title: "이름 도장 신청",
    priceLabel: "₩39,000",
    description:
      "한글 또는 한자 이름을 기준으로 도장 문구를 제안하고 제작/배송 신청으로 연결합니다.",
  },
  {
    key: "adUnlock",
    title: "광고 시청 후 후보 잠금 해제",
    priceLabel: "광고",
    description:
      "광고 네트워크 연동 전에도 보상형 광고 슬롯과 잠금 해제 흐름을 테스트할 수 있습니다.",
  },
];

const globalToKoreanAddOns: AddOn[] = [
  {
    key: "premiumPdf",
    title: "한자 의미 확장 리포트 PDF",
    priceLabel: "₩9,900",
    description:
      "기본 결과는 한글 이름 중심으로 제공하고, 선택 시 한자 의미, 해석, 등록 가능성 검토 메모를 별도 리포트로 확장합니다.",
  },
  {
    key: "calligraphy",
    title: "한글 이름 캘리그라피",
    priceLabel: "₩6,900",
    description:
      "선택한 한글 이름을 카드, 프로필, 한국 생활 소개용 이미지로 제작합니다.",
  },
  {
    key: "stamp",
    title: "한글 이름 도장 신청",
    priceLabel: "₩39,000",
    description:
      "외국인 사용자가 실제로 쓰기 쉬운 한글 이름 기준으로 도장 문구와 제작 신청을 연결합니다.",
  },
  {
    key: "adUnlock",
    title: "광고 시청 후 후보 잠금 해제",
    priceLabel: "광고",
    description:
      "광고 네트워크 연동 전에도 보상형 광고 슬롯과 잠금 해제 흐름을 테스트할 수 있습니다.",
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
      "먼저 정한 한글 이름의 소리를 유지하면서 부모의 바람, 제외하고 싶은 의미, 출생 정보 참고값을 함께 검토해 한자 후보와 배제 사유를 제안합니다.",
    promise:
      "공식 인명용 한자표의 지정 발음, 첫소리 ㄴ/ㄹ 예외, 동자/속자/약자와 부수 변형 주의사항을 결과 설명에 반영합니다.",
    icon: "hanja",
    defaultLocale: "ko",
    resultLabel: "추천 한자 조합",
    sections: [
      {
        title: "아이의 한글 이름",
        description: "먼저 정해 둔 한글 이름과 기본 이미지를 입력합니다.",
        fields: [
          {
            name: "familyName",
            label: "성",
            placeholder: "예: 김",
            required: true,
          },
          {
            name: "givenNameHangul",
            label: "한글 이름",
            placeholder: "예: 서윤",
            required: true,
          },
          {
            name: "gender",
            label: "성별/이미지",
            type: "select",
            options: genderOptions,
          },
        ],
      },
      {
        title: "사주 참고 정보",
        description:
          "생년월일과 생시는 전통적 균형감을 참고하기 위한 입력값입니다.",
        fields: [
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
            options: yearOptions.slice(0, 25),
            required: true,
          },
          {
            name: "birthMonth",
            label: "출생 월",
            type: "select",
            options: monthOptions,
            required: true,
          },
          {
            name: "birthDay",
            label: "출생 일",
            type: "select",
            options: dayOptions,
            required: true,
          },
          {
            name: "birthHour",
            label: "생시",
            type: "select",
            options: birthHourOptions,
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
            label: "담고 싶은 가치",
            placeholder: "예: 지혜, 평안, 밝음, 자기 길을 잃지 않는 사람",
            type: "textarea",
            required: true,
          },
          {
            name: "excludedMeanings",
            label: "피하고 싶은 의미/한자",
            placeholder: "예: 너무 강한 기운, 죽음/병/원망 계열 의미, 가족 이름과 중복",
            type: "textarea",
          },
          {
            name: "outputLanguage",
            label: "결과 언어",
            type: "select",
            options: languageOptions,
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
      "한글 이름의 소리와 한자 의미, 사용 국가, 직업 이미지, 지역별 발음 감각을 함께 반영해 영어/일본어/중국어/독일어/스페인어권 후보를 제안합니다.",
    promise:
      "단순 발음 변환이 아니라 국가별 자연스러움, 문서 사용성, 소개 문구, 피해야 할 현지 인상을 함께 검토합니다.",
    icon: "passport",
    defaultLocale: "ko",
    resultLabel: "추천 글로벌 이름",
    sections: [
      {
        title: "기존 이름과 정체성",
        description: "이름의 소리와 의미를 최대한 보존하기 위한 기준을 입력합니다.",
        fields: [
          {
            name: "koreanName",
            label: "한글 이름",
            placeholder: "예: 김지윤",
            required: true,
          },
          {
            name: "hanjaMeaning",
            label: "이름의 한자/의미",
            placeholder: "예: 智 지혜, 潤 윤택함",
            required: true,
          },
          {
            name: "gender",
            label: "성별/이미지",
            type: "select",
            options: genderOptions,
          },
        ],
      },
      {
        title: "지역과 사용 목적",
        description: "이름을 실제로 쓸 국가, 맥락, 직업 이미지를 선택합니다.",
        fields: [
          {
            name: "targetRegion",
            label: "목표 지역",
            type: "select",
            options: targetRegionOptions,
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
            name: "industry",
            label: "직업/분야",
            placeholder: "예: 디자이너, 개발자, 창업가, 의료, 금융",
          },
          {
            name: "preferredTone",
            label: "원하는 이미지",
            type: "select",
            options: [
              { value: "trustworthy", label: "신뢰감" },
              { value: "premium", label: "고급스러움" },
              { value: "friendly", label: "친근함" },
              { value: "creative", label: "창의적" },
              { value: "classic", label: "클래식" },
            ],
          },
        ],
      },
      {
        title: "사주와 발음 조건",
        description: "정교화용 참고값과 피해야 할 발음 조건을 입력합니다.",
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
            label: "생시",
            type: "select",
            options: birthHourOptions,
          },
          {
            name: "pronunciationRules",
            label: "발음/철자 조건",
            placeholder: "예: R 발음 피하기, 두 음절 유지, 한국 이름과 첫소리 연결",
            type: "textarea",
          },
          {
            name: "outputLanguage",
            label: "결과 언어",
            type: "select",
            options: languageOptions,
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
    eyebrow: "한국 생활과 브랜드를 위한 이름",
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
        description: "Choose structured identity data for a Korean name.",
        fields: [
          {
            name: "originalName",
            label: "Original name",
            placeholder: "e.g. Daniel Brooks",
            required: true,
          },
          {
            name: "country",
            label: "Country",
            type: "select",
            options: countryOptions,
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
        description: "Use dropdowns so the input stays clean and comparable.",
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
        description: "Select the tone and practical Korean context.",
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

export const serviceList = Object.values(services);

export function getServiceBySlug(slug: string) {
  return serviceList.find((service) => service.slug === slug);
}
