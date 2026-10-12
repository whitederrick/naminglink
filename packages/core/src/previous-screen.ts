/**
 * **「이전 화면으로」 단추의 이름** — 네 앱이 함께 쓴다 (2026-10-12).
 *
 * 안내 문서의 ← 는 `returnTo` 가 있으면 그 화면으로 가고, 이름은 도착지가 어디든 이 문구를
 * 쓴다. 「처음으로」라고 적힌 단추가 이전 화면으로 가면 거짓말이고, 반대로 이전 화면으로 가는
 * 단추를 「이용 안내」라고 적어도 거짓말이다(naminglink `GuideBackLink` 머리말).
 *
 * ## 값의 출처
 *
 * naminglink `lib/i18n-auth.ts` 의 `back`(로그인 화면의 ← )과 같은 값이다. 형제 앱에는 그
 * 사전이 없어(로그인 화면이 없다) 여기 한 벌을 둔다. **두 곳이 갈라지지 않도록**
 * naminglink `scripts/verify-return-to.ts` 가 로케일마다 같은지 센다.
 *
 * 키를 `Record<PreviousScreenLocale, string>` 으로 둔 것은 로케일이 빠지면 tsc 가 막게 하기
 * 위해서다(`Record<string, …>` 면 빠져도 조용하다).
 */
export const PREVIOUS_SCREEN_LOCALES = [
  "ko",
  "en",
  "vi",
  "th",
  "ja",
  "zh",
  "id",
  "de",
  "es",
  "fr",
  "it",
  "pt",
  "ru",
  "ar",
  "tr",
  "fil",
  "uz",
  "mn",
  "hi",
  "km",
  "kk",
  "ms",
  "pl",
] as const;

export type PreviousScreenLocale = (typeof PREVIOUS_SCREEN_LOCALES)[number];

export const PREVIOUS_SCREEN_LABEL: Record<PreviousScreenLocale, string> = {
  ko: "이전 화면으로",
  en: "Back",
  vi: "Quay lại",
  th: "ย้อนกลับ",
  ja: "前の画面に戻る",
  zh: "返回上一页",
  id: "Kembali",
  de: "Zurück",
  es: "Volver",
  fr: "Retour",
  it: "Indietro",
  pt: "Voltar",
  ru: "Назад",
  ar: "رجوع",
  tr: "Geri",
  fil: "Bumalik",
  uz: "Orqaga",
  mn: "Буцах",
  hi: "वापस",
  km: "ត្រឡប់ក្រោយ",
  kk: "Артқа",
  ms: "Kembali",
  pl: "Wstecz",
};

/** 모르는 로케일은 영어로 — 빈 단추를 그리느니 영어가 낫다. */
export function previousScreenLabel(locale: string | undefined): string {
  if (locale && Object.hasOwn(PREVIOUS_SCREEN_LABEL, locale)) {
    return PREVIOUS_SCREEN_LABEL[locale as PreviousScreenLocale];
  }
  return PREVIOUS_SCREEN_LABEL.en;
}
