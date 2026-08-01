import type { LocaleCode } from "@/lib/locale-codes";

/**
 * PDF를 어느 언어로 낼 것인가.
 *
 * 보통은 이용자의 언어 그대로다. **아랍어·크메르어만 영어로 낸다.**
 *
 * 이유는 라이브러리다. `@react-pdf/textkit`이 그 두 문자 체계의 **문단**을 렌더하다 죽거나
 * 글자를 뒤엉키게 놓는다(2026-08-01 두 앱 모두에서 실측).
 *
 *   ar  렌더는 성공하지만 양방향 재정렬이 깨져 **읽을 수 없는 지면**이 나온다.
 *   km  `xCoordinate`가 null이 되어 렌더 자체가 실패한다 — 결제하고도 파일을 못 받는다.
 *
 * `@react-pdf/renderer`는 이미 최신(4.5.1)이라 올릴 버전도 없다. 인연링크가 같은 이유로 같은
 * 판단을 하고 있다(`apps/inyeonlink/src/lib/pdf/fonts.tsx`의 `pdfLocale`).
 *
 * **서체는 등록돼 있다.** 문서 언어가 영어로 바뀌어도 이용자가 적은 **이름은 그 문자 그대로**
 * 찍혀야 하고, 한 줄짜리 이름은 문제없이 렌더된다. 등록을 빼면 이름이 내장 Helvetica로
 * 되돌아가 엉뚱한 라틴 글자가 된다.
 *
 * 라이브러리가 고쳐지면 이 목록을 비우는 것으로 되돌린다 — 그래서 판단을 한곳에 가둬 둔다.
 */
const PDF_FALLBACK_TO_EN: ReadonlySet<string> = new Set(["ar", "km"]);

/** 이 언어로 주문된 PDF를 실제로 어느 언어로 만들 것인가. */
export function pdfOutputLanguage(language: string): string {
  return PDF_FALLBACK_TO_EN.has(language) ? "en" : language;
}

/**
 * 이 화면 언어의 PDF가 다른 언어로 나가는가. 구매 화면의 고지 문구를 켜는 데 쓴다.
 *
 * 로케일을 못 받은 화면(`undefined`)은 영어로 보므로 고지할 것이 없다.
 */
export function pdfLanguageDiffers(locale: LocaleCode | string | null | undefined): boolean {
  return Boolean(locale) && PDF_FALLBACK_TO_EN.has(locale as string);
}
