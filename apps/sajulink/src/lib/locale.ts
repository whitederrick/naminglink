import { headers } from "next/headers";

import {
  isLocale,
  supportedLocales,
  translatedLocales,
  type Locale,
} from "@/lib/i18n";

// naminglink의 판정 규칙과 같은 방식이다. 다만 사전이 다르므로 코드를 공유하지 않고
// 이 앱 안에 둔다 — 두 번째 소비자가 생기면 그때 packages/core로 옮긴다.

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
  CH: "de",
  BE: "fr",
  NZ: "en",
  IE: "en",
};

function localeFromAcceptLanguage(value: string): Locale | null {
  // q값 내림차순으로 정렬한 뒤 primary subtag를 정확히 대조한다. 부분 문자열 매칭은 목록
  // 순서에 따라 엉뚱한 언어를 고를 수 있어 쓰지 않는다.
  const ranked = value
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const qParam = params.find((param) => param.trim().startsWith("q="));
      const quality = qParam ? Number(qParam.trim().slice(2)) : 1;
      return {
        primary: tag.trim().toLowerCase().split(/[-_]/)[0],
        quality: Number.isFinite(quality) ? quality : 0,
      };
    })
    .filter((entry) => entry.primary && entry.quality > 0)
    .sort((a, b) => b.quality - a.quality);

  for (const entry of ranked) {
    const matched = supportedLocales.find((locale) => locale === entry.primary);
    if (matched) return matched;
  }

  return null;
}

/**
 * **번역이 실제로 있는 로케일만 통과시킨다.**
 *
 * `supportedLocales`는 이 서비스가 언젠가 지원할 23개 언어의 목록이고, `translatedLocales`는
 * 사전이 실제로 채워진 언어다. 지금은 ko·en 둘뿐이다.
 *
 * 둘을 가르지 않으면 이런 일이 난다 — 베트남에서 접속하면 국가 표로 `vi`가 잡히고, 화면은
 * 사전이 없어 영어로 떨어지는데 **약관만 베트남어 파일에서 나온다.** 그 파일은 인연링크에서
 * 물려받은 궁합 서비스 번역이라, 사주 서비스를 쓰는 사람에게 없는 상품의 조건을 베트남어로
 * 고지하게 된다. 화면과 고지가 서로 다른 언어·다른 서비스를 말하는 상태다.
 *
 * 그래서 화면이든 약관이든 **한 로케일로 함께 움직이게** 여기서 한 번 좁힌다. ⑦에서 사전과
 * 약관을 같이 채우면 `translatedLocales`가 늘어나 저절로 풀린다.
 */
function translated(value: string | null | undefined): Locale | null {
  return isLocale(value) && translatedLocales.includes(value) ? value : null;
}

export async function getRequestLocale(searchLocale?: string): Promise<Locale> {
  const fromSearch = translated(searchLocale);
  if (fromSearch) return fromSearch;

  const headerStore = await headers();

  // 경로에 로케일이 있으면(`/ko/…`) 미들웨어(`proxy.ts`)가 `x-locale`로 넘겨 준다. 가장 먼저
  // 본다 — 이용자가 주소로 언어를 골랐다는 뜻이라 접속 국가·브라우저 설정보다 우선한다.
  // **루트 레이아웃에는 이 경로뿐이다.** 레이아웃은 searchParams를 받지 못해 `?lang=`을 못 본다.
  const fromPath = translated(headerStore.get("x-locale"));
  if (fromPath) return fromPath;

  const country = headerStore.get("x-vercel-ip-country")?.toUpperCase();
  const acceptLanguage = headerStore.get("accept-language") ?? "";

  const fromCountry = translated(country ? countryLocaleMap[country] : null);
  if (fromCountry) return fromCountry;

  return translated(localeFromAcceptLanguage(acceptLanguage)) ?? "en";
}
