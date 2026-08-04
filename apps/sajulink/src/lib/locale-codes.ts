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


/**
 * 모델에게 "어느 언어로 쓰라"고 말할 때 쓰는 이름. **naminglink `lib/openai.ts`에서 그대로
 * 가져왔다** — 같은 표를 두 벌 만들면 한쪽만 고쳐지고, 그 어긋남은 "왜 이 언어만 영어로
 * 나오지"로만 보인다.
 *
 * 코드(`ko`)가 아니라 이름(`Korean (한국어)`)을 넘긴다. 코드만 주면 모델이 무시하고 한국어로
 * 쓰는 사례가 naminglink에서 확인됐다(2026-07-22).
 */
export const OUTPUT_LANGUAGE_NAMES: Record<string, string> = {
  ko: "Korean (한국어)",
  en: "English",
  ja: "Japanese (日本語)",
  zh: "Simplified Chinese (简体中文)",
  de: "German (Deutsch)",
  es: "Spanish (Español)",
  fr: "French (Français)",
  it: "Italian (Italiano)",
  pt: "Portuguese (Português)",
  vi: "Vietnamese (Tiếng Việt)",
  th: "Thai (ไทย)",
  id: "Indonesian (Bahasa Indonesia)",
  ru: "Russian (Русский)",
  ar: "Arabic (العربية)",
  fil: "Filipino (Tagalog)",
  uz: "Uzbek (O'zbekcha)",
  mn: "Mongolian (Монгол)",
  hi: "Hindi (हिन्दी)",
  tr: "Turkish (Türkçe)",
  km: "Khmer (ភាសាខ្មែរ)",
  ms: "Malay (Bahasa Melayu)",
  kk: "Kazakh (Қазақша)",
  pl: "Polish (Polski)",
};

export function localeLanguageName(locale: string) {
  return OUTPUT_LANGUAGE_NAMES[locale] ?? OUTPUT_LANGUAGE_NAMES.en!;
}
