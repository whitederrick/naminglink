import {
  isLocale,
  supportedLocales,
  translatedLocales,
  type Locale,
} from "@/lib/i18n";

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
 * **이 앱에는 `translated()`가 하나 더 있다.** 형제 앱들에는 없는 좁힘이고, 아래 주석이 그
 * 이유를 갖고 있다 — 갈라 나올 때 함께 들고 왔다. 이것을 빠뜨리면 화면은 영어인데 약관만
 * 다른 언어로 나가는 상태가 된다.
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

/**
 * 접속 국가와 브라우저 언어로 로케일을 정한다. **미들웨어가 무접두 주소를 보낼 곳이다.**
 *
 * 접속 국가가 브라우저 언어보다 앞선다. 마지막에 `translated()`로 한 번 더 좁히는 것은
 * `getRequestLocale`과 같다 — 사전이 없는 언어판으로 보내면 그 화면은 영어인데 주소만 그
 * 언어가 된다.
 */
export function detectLocale(
  country: string | null | undefined,
  acceptLanguage: string | null | undefined,
): Locale {
  const upper = country?.toUpperCase();
  const fromCountry = translated(upper ? countryLocaleMap[upper] : null);
  if (fromCountry) return fromCountry;
  return translated(localeFromAcceptLanguage(acceptLanguage ?? "")) ?? "en";
}

export { countryLocaleMap, localeFromAcceptLanguage, translated };
