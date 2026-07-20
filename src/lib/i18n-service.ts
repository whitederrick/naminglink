import type { FieldOption, Locale } from "@/lib/services";

// 외국인 대상 서비스(GLOBAL_TO_KOREAN)의 폼 설정 문자열을 로케일별로 치환한다.
// services.ts의 공유 설정 원본은 건드리지 않고, 렌더 시점에 안정적 키
// (섹션 제목·필드 이름·옵션 value)로만 라벨을 갈아끼운다. 한국어 대상 서비스는
// 이 경로를 타지 않으므로 기존 한국어 문구가 그대로 유지된다.
export type ServiceCopyOverride = {
  sectionDescriptions: Record<string, string>; // 섹션 제목(영문 키) → 설명
  fieldLabels: Record<string, string>; // 필드 name → 라벨
  optionLabels: Record<string, string>; // 옵션 value → 라벨
};

const en: ServiceCopyOverride = {
  sectionDescriptions: {
    "Original identity": "Choose the basic details we need to suggest a Korean name.",
    "Birth profile": "Select each item for an accurate comparison and analysis.",
    "Korean usage context": "Choose the tone you want and how you'll use the name in Korea.",
  },
  fieldLabels: {
    nameMotivation: "Purpose of your Korean name",
  },
  optionLabels: {
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

// ko/en만 작성했고, 나머지 로케일은 영어로 폴백한다.
const overrides: Partial<Record<Locale, ServiceCopyOverride>> = { en };

// 한국어는 원본 설정(services.ts)을 그대로 쓰므로 null을 반환한다.
export function getServiceOverride(locale: Locale): ServiceCopyOverride | null {
  if (locale === "ko") return null;
  return overrides[locale] ?? en;
}

export function localizeSectionDescription(
  override: ServiceCopyOverride | null,
  sectionTitle: string,
  original: string,
) {
  return override?.sectionDescriptions[sectionTitle] ?? original;
}

export function localizeFieldLabel(
  override: ServiceCopyOverride | null,
  fieldName: string,
  original: string,
) {
  return override?.fieldLabels[fieldName] ?? original;
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
