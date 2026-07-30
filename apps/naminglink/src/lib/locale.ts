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
  // 다언어 국가는 그 나라의 최대 사용 언어로 둔다. **접속 국가가 Accept-Language보다 앞선다**
  // (아래 getRequestLocale 참고) — 즉 퀘벡에서 브라우저가 프랑스어여도 영어가 나간다.
  // 예전 주석은 그 반대로 적혀 있었는데 코드와 어긋난 설명이었다. 국가 우선을 유지하기로
  // 결정했으므로(2026-07-30) 설명을 코드에 맞춘다. 특정 지역을 따로 잡아내는 것은 별건이고,
  // 그전까지는 화면의 언어 버튼이 그 몫을 한다.
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

export function isRtlLocale(locale: Locale) {
  return locale === "ar";
}

export async function getRequestLocale(searchLocale?: string) {
  if (isLocale(searchLocale)) {
    return searchLocale;
  }

  const headerStore = await headers();

  // 경로에 로케일이 있으면(`/ko/…`) 미들웨어가 `x-locale`로 넘겨 준다. 가장 먼저 본다 —
  // 이용자가 주소로 언어를 골랐다는 뜻이라 접속 국가·브라우저 설정보다 우선한다.
  // **레이아웃에는 이 경로뿐이다.** 레이아웃은 searchParams를 받지 못해 `?lang=`을 못 본다.
  const fromPath = headerStore.get("x-locale");
  if (isLocale(fromPath)) return fromPath;

  const country = headerStore.get("x-vercel-ip-country")?.toUpperCase();
  const acceptLanguage = headerStore.get("accept-language") ?? "";

  // **접속 국가가 브라우저 언어보다 앞선다(2026-07-30 확정).** 글로벌 서비스라 미국은 영어,
  // 인도네시아는 인니어, 스페인은 스페인어처럼 그 나라 대표 언어로 먼저 보여 주는 쪽을 택했다.
  // 다언어 국가(퀘벡·벨기에 네덜란드어권·스위스 이탈리아어권)에서는 이 판정이 어긋나는데,
  // 그것까지 맞추려면 지역 단위 정보가 필요하고 무리해서 잡을 일은 아니라고 보았다.
  // 어긋난 사람은 화면의 언어 버튼으로 바꾼다 — 그래서 그 버튼에 의도한 언어가 다 보여야 한다.
  if (country && countryLocaleMap[country]) {
    return countryLocaleMap[country];
  }

  return localeFromAcceptLanguage(acceptLanguage) ?? ("en" satisfies Locale);
}
