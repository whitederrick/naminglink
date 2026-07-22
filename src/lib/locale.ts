import { headers } from "next/headers";
import { supportedLocales, type Locale } from "@/lib/services";

const countryLocaleMap: Record<string, Locale> = {
  KR: "ko",
  JP: "ja",
  VN: "vi",
  PH: "fil",
  TH: "th",
  ID: "id",
  CN: "zh",
  TW: "zh",
  HK: "zh",
  MO: "zh",
  UZ: "uz",
  MN: "mn",
  IN: "hi",
  US: "en",
  MX: "es",
  BR: "pt",
  FR: "fr",
  GB: "en",
  TR: "tr",
  RU: "ru",
  AE: "ar",
  EG: "ar",
  SA: "ar",
  KH: "km",
  MY: "ms",
  DE: "de",
  AU: "en",
  CA: "en",
  AR: "es",
  CL: "es",
  KZ: "kk",
  PL: "pl",
  IT: "it",
  ES: "es",
  CO: "es",
  PE: "es",
  AT: "de",
  // 다언어 국가는 최대 사용 언어로 두되, Accept-Language가 있으면 그쪽이 우선한다.
  CH: "de",
  BE: "fr",
  NZ: "en",
  IE: "en",
};

export function isLocale(value: string | null | undefined): value is Locale {
  return supportedLocales.includes(value as Locale);
}

function localeFromAcceptLanguage(value: string): Locale | null {
  // "fr-FR,fr;q=0.9,en;q=0.7"을 q값 내림차순으로 정렬한 뒤 언어 태그의 primary subtag를
  // 정확히 대조한다. 부분 문자열 매칭은 목록 순서에 따라 엉뚱한 언어를 고를 수 있어 쓰지 않는다.
  const ranked = value
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const qParam = params.find((param) => param.trim().startsWith("q="));
      const quality = qParam ? Number(qParam.trim().slice(2)) : 1;
      return {
        // ko-KR·ko_KR 등 하이픈·언더스코어 구분 모두에서 primary subtag를 뽑는다.
        primary: tag.trim().toLowerCase().split(/[-_]/)[0],
        quality: Number.isFinite(quality) ? quality : 0,
      };
    })
    // q=0은 "수용 불가"를 뜻하므로 제외한다.
    .filter((entry) => entry.primary && entry.quality > 0)
    .sort((a, b) => b.quality - a.quality);

  for (const entry of ranked) {
    const matched = supportedLocales.find((locale) => locale === entry.primary);
    if (matched) return matched;
  }

  return null;
}

export async function getRequestLocale(searchLocale?: string) {
  if (isLocale(searchLocale)) {
    return searchLocale;
  }

  const headerStore = await headers();
  const country = headerStore.get("x-vercel-ip-country")?.toUpperCase();
  const acceptLanguage = headerStore.get("accept-language") ?? "";

  if (country && countryLocaleMap[country]) {
    return countryLocaleMap[country];
  }

  return localeFromAcceptLanguage(acceptLanguage) ?? ("en" satisfies Locale);
}
