import { isLocaleCode, localeCodes, type LocaleCode } from "@/lib/locale-codes";

/**
 * **로케일 감지의 순수한 부분.** 요청 헤더 값만 받고 `next/headers`를 쓰지 않는다.
 *
 * 미들웨어(`proxy.ts`)와 서버 컴포넌트(`lib/locale.ts`)가 **같은 표를 봐야 한다.** 루트에서
 * 감지해 리다이렉트하는 쪽은 미들웨어인데, `next/headers`는 거기서 못 쓴다. 표를 두 벌 적으면
 * 언젠가 갈라지고, 갈라지면 「루트가 보낸 언어」와 「그 화면이 그리는 언어」가 어긋난다.
 *
 * `lib/services.ts`가 아니라 `lib/locale-codes.ts`에만 기댄다 — 1,000줄짜리 모듈을 엣지 번들에
 * 올리지 않기 위해서다.
 */

const countryLocaleMap: Record<string, LocaleCode> = {
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

function localeFromAcceptLanguage(value: string): LocaleCode | null {
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
    const matched = localeCodes.find((locale) => locale === entry.primary);
    if (matched) return matched;
  }

  return null;
}

/**
 * 접속 국가와 브라우저 언어로 로케일을 정한다.
 *
 * **접속 국가가 브라우저 언어보다 앞선다(2026-07-30 확정).** 글로벌 서비스라 미국은 영어,
 * 인도네시아는 인니어처럼 그 나라 대표 언어를 먼저 보여 주는 쪽을 택했다. 다언어 국가
 * (퀘벡·벨기에 네덜란드어권·스위스 이탈리아어권)에서는 이 판정이 어긋나는데, 그것까지
 * 맞추려면 지역 단위 정보가 필요하다. 어긋난 사람은 화면의 언어 버튼으로 바꾼다.
 */
export function detectLocale(
  country: string | null | undefined,
  acceptLanguage: string | null | undefined,
): LocaleCode {
  const upper = country?.toUpperCase();
  if (upper && countryLocaleMap[upper]) return countryLocaleMap[upper];
  return localeFromAcceptLanguage(acceptLanguage ?? "") ?? "en";
}

export { isLocaleCode };
