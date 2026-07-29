/**
 * 로케일 코드 목록만 담은 작은 모듈.
 *
 * **미들웨어(`proxy.ts`)가 이것을 쓴다.** `lib/services.ts`는 상품표·필드 정의까지 든 1,000줄이
 * 넘는 모듈이라 엣지에서 매 요청 올리기에는 무겁다. 코드 목록만 떼어 두면 미들웨어 번들이
 * 배열 하나로 끝난다.
 *
 * `services.ts`가 이 배열을 그대로 가져다 `supportedLocales`를 만들므로 두 곳이 갈릴 일은 없다.
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
