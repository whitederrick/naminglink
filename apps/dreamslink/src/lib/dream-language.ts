import { CONCEPTION_TAG, type DreamMeaning, type DreamSymbol } from "@/lib/dream-symbols";
import { TAG_LABELS_EN } from "@/lib/dream-tags";
import type { Locale } from "@/lib/i18n";

/**
 * 해몽 **내용**이 어느 언어로 나가는가.
 *
 * ## 화면 언어와 다른 축이다
 *
 * 화면 문구(`i18n.ts`)는 23개 언어를 갖췄지만 **상징 사전은 한국어와 영어 두 벌뿐**이다
 * (`interpretation_ko` / `interpretation_en`). 전통 해몽 문헌을 스물세 벌로 옮기는 것은
 * 번역이 아니라 새 사전을 쓰는 일이라, 안내 문서를 ko·global 둘로 가른 것과 같은 판단을 했다.
 *
 * 그래서 이탈리아어로 들어온 사람은 **화면은 이탈리아어, 해몽 내용은 영어**를 본다.
 *
 * ## 이게 없어서 무슨 일이 있었나
 *
 * 화면·PDF가 `interpretation_ko`를 **박아 두고 있었다**(2026-08-06 발견). 스물세 언어 전부에서
 * 상징 이름과 풀이가 한국어로 나갔다 — 무료 화면도, 결제하고 받는 태몽 리포트도 그랬다.
 * `locale`을 인자로 받아 놓고 쓰지 않는 함수가 셋이었다.
 *
 * 값을 고르는 자리를 **여기 하나로** 모은 이유가 그것이다. 읽는 곳이 셋(결과 화면·태몽 PDF·
 * 꿈 카드)이라 각자 고르게 두면 또 갈린다.
 */
export type ReadingLanguage = "ko" | "en";

export function readingLanguage(locale: Locale): ReadingLanguage {
  return locale === "ko" ? "ko" : "en";
}

/**
 * 상징 이름. 사전에 두 벌이 다 있다.
 *
 * 인자를 `DreamSymbol`이 아니라 **두 이름만** 요구하는 모양으로 둔다. 부르는 쪽이 사전 원본을
 * 들고 있을 때도 있고 엔진이 낸 `MatchedSymbol`을 들고 있을 때도 있는데, 둘 다 이 두 자리를
 * 갖고 있으므로 여기서 갈라 놓으면 부르는 쪽마다 다시 조회하게 된다.
 */
export function symbolTerm(
  symbol: Pick<DreamSymbol, "term_ko" | "term_en">,
  language: ReadingLanguage,
): string {
  return language === "ko" ? symbol.term_ko : symbol.term_en;
}

/** 고른 의미의 풀이. 사전에 두 벌이 다 있다(256개 전부 채워져 있다). */
export function meaningText(meaning: DreamMeaning, language: ReadingLanguage): string {
  return language === "ko" ? meaning.interpretation_ko : meaning.interpretation_en;
}

/**
 * 전해 오는 배경 한 줄(`culture_note`).
 *
 * **한국어로만 있고 24개뿐이다.** 영어 판이 없으므로 영어로 읽는 사람에게는 아예 보이지
 * 않는다 — 한국어 문장을 그대로 내보내는 것보다 없는 편이 낫다. 지어내는 것은 이 서비스가
 * 가장 경계하는 일이라 여기서 모델을 부르지도 않는다.
 */
export function cultureNote(
  note: string | undefined,
  language: ReadingLanguage,
): string | undefined {
  return language === "ko" ? note : undefined;
}

/**
 * 의미가 갈리는 **상황**(`meaning.context`)의 표시 문자열.
 *
 * ⚠️ **이 필드는 한국어 한 벌뿐이다.** 풀이는 `interpretation_ko`/`_en` 두 벌인데 상황은
 * 하나라, 접근자 없이 그대로 그리면 **영어 문서에 한국어가 실린다** — 유료 태몽 리포트와
 * 상징 페이지가 실제로 그랬다(2026-08-07 발견). 2026-08-06에 고친 `interpretation_ko` 결함과
 * 같은 종류인데 이 필드만 빠져 있었다.
 *
 * `cultureNote`·`themeLabels`와 같은 규칙을 쓴다 — **한국어 낱말이 영어 화면에 섞이느니 그
 * 항목이 빠지는 편이 낫다.** 매칭은 이 값을 그대로 쓴다(`dream-match.ts`), 화면에 안 낼 뿐이다.
 *
 * 영어 상황 설명이 필요해지면 사전에 `context_en`을 더하고 이 함수가 그것을 돌려주면 된다.
 * 그때까지 **부르는 쪽이 각자 판단하지 않게** 자리를 여기 하나로 둔다.
 */
export function contextText(
  context: string | undefined,
  language: ReadingLanguage,
): string | undefined {
  return language === "ko" ? context : undefined;
}

/**
 * 주제 꼬리표(`tags`)의 표시 이름.
 *
 * 사전의 태그는 한국어 낱말이다(`재물`·`태몽`·`경계`…). 영어 판은 `dream-tags.ts`가 들고
 * 있으며, **표에 없는 태그는 내보내지 않는다** — 한국어 낱말이 영어 화면에 섞이느니 그
 * 항목이 빠지는 편이 낫다. 태그를 사전에 더하면 그 표도 함께 채울 것(`scripts/build-dream-tags.ts`).
 */
export function themeLabels(tags: readonly string[], language: ReadingLanguage): string[] {
  if (language === "ko") return [...tags];
  return tags.map((tag) => TAG_LABELS_EN[tag]).filter((label): label is string => Boolean(label));
}

/** 태몽 꼬리표인가. 표시 언어와 무관하게 **판정은 한국어 원본 태그로** 한다. */
export function isConceptionTag(tag: string): boolean {
  return tag === CONCEPTION_TAG;
}
