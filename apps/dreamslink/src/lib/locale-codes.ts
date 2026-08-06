/**
 * 로케일 코드 목록만 담은 작은 모듈.
 *
 * **미들웨어(`proxy.ts`)가 이것을 쓴다.** `lib/i18n.ts`는 23개 로케일 사전을 전부 끌어오는
 * 모듈이라 엣지에서 매 요청 올릴 것이 못 된다(사전 하나가 수백 줄이고 23개다). 코드 목록만
 * 떼어 두면 미들웨어 번들이 배열 하나로 끝난다.
 *
 * `i18n.ts`가 이 배열을 그대로 가져다 `supportedLocales`를 만드므로 두 곳이 갈릴 일은 없다.
 * naminglink `lib/locale-codes.ts`와 같은 구조다.
 */
export const localeCodes = [
  "ko",
  "en",
  "ja",
  "zh",
  "de",
  "es",
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
] as const;

export type LocaleCode = (typeof localeCodes)[number];

const codeSet: ReadonlySet<string> = new Set(localeCodes);

export function isLocaleCode(value: string | null | undefined): value is LocaleCode {
  return Boolean(value) && codeSet.has(value as string);
}
