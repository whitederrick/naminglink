import { isLocale, supportedLocales, type Locale } from "@/lib/i18n";

/**
 * 접속 국가·브라우저 언어로 로케일을 고르는 **순수 규칙**.
 *
 * ## 왜 `locale.ts`에서 갈라 나왔나 (2026-08-19)
 *
 * 라우트를 `app/[locale]`로 옮기면서 미들웨어(`proxy.ts`)가 무접두 주소를 언어판으로 보내야
 * 하게 됐다. 그런데 판정 규칙은 `lib/locale.ts`에 있었고, 그 파일은 맨 위에서 `next/headers`를
 * 부른다 — **미들웨어에서 부를 수 없는 모듈**이다.
 *
 * 규칙을 미들웨어에 베껴 적으면 나라 표가 두 벌이 되고, 한쪽만 고쳐지는 날이 온다. 그래서
 * 표와 판정을 이 파일로 옮기고 `locale.ts`는 여기서 읽어 쓴다. **규칙은 한 곳에만 둔다.**
 *
 * naminglink `lib/locale-detect.ts`와 같은 자리다.
 */

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
 * 접속 국가와 브라우저 언어로 로케일을 정한다.
 *
 * **접속 국가가 브라우저 언어보다 앞선다.** 글로벌 서비스라 그 나라 대표 언어를 먼저 보여 주는
 * 쪽을 택했다. 다언어 국가에서는 이 판정이 어긋나는데, 어긋난 사람은 화면의 언어 버튼으로
 * 바꾼다.
 */
export function detectLocale(
  country: string | null | undefined,
  acceptLanguage: string | null | undefined,
): Locale {
  const upper = country?.toUpperCase();
  if (upper && countryLocaleMap[upper]) return countryLocaleMap[upper];
  return localeFromAcceptLanguage(acceptLanguage ?? "") ?? "en";
}

export { countryLocaleMap, localeFromAcceptLanguage };
