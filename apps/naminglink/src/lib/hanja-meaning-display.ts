/**
 * **뜻이 없는 글자를 어떻게 말할 것인가** — 화면·PDF·유료 리포트가 **같은 규칙**을 쓴다.
 *
 * ## 왜 필요한가 (2026-08-20)
 *
 * 대법원 인명용 한자표에는 **뜻 칸에 뜻이 아니라 발음이 그대로 적힌 글자**가 있다.
 *
 *     鐘  발음 종 · 이름 사용 가능 · 뜻 칸 "종"
 *     鍾  발음 종 · 이름 사용 가능 · 뜻 칸 "술잔 쇠북"
 *
 * 이름에 쓸 수 있는 9,938자 중 **410자**가 그렇다(功·肝·權 등). 이 글자를 후보에서 통째로
 * 빼면 그 글자를 돌림자로 쓰는 집안은 결과를 하나도 못 받는다. 그렇다고 "종"을 뜻이라고
 * 내보이면 「鐘은 '종'의 뜻을 지닙니다」 같은 동어 반복이 유료 리포트에 실린다.
 *
 * 그래서 **모른다고 말한다.** 지어내지 않고, 숨기지도 않는다.
 *
 * ## 왜 별도 모듈인가
 *
 * `hanja.ts` 는 1,700줄이고 `hanjaBank` 를 품고 있다. 결과 화면(`"use client"`)이 그것을
 * 끌어오면 그만큼이 브라우저 번들에 실린다. 규칙은 짧으므로 따로 둔다.
 */

/** 뜻으로 볼 수 없는 자리표시자. 자료 정비 중에 들어온 값들이다. */
const PLACEHOLDER = /^(AI의미해석대상|뜻확인필요|의미확인필요|미상|없음)$/;

const normalize = (value: string) => value.replace(/[\s()·,.'"-]/g, "");

export type HanjaMeaningDisplay = {
  /** 자료에 쓸 만한 뜻이 있는가. */
  readonly known: boolean;
  /** 화면에 그대로 쓸 문구. 뜻을 모르면 그렇게 적힌다. */
  readonly text: string;
};

/** 뜻을 모를 때 화면에 쓰는 문구. 한 곳에서만 정한다. */
export const UNKNOWN_MEANING_TEXT = "뜻 미상";

/** 뜻을 모르는 이유. 좁은 자리에서는 생략한다. */
export const UNKNOWN_MEANING_NOTE = "공식 인명용 한자표에 뜻이 적혀 있지 않습니다.";

/**
 * 그 글자의 뜻을 화면에 어떻게 적을지 정한다.
 *
 * **발음과 같은 값은 뜻이 아니다.** `鐘`의 뜻 칸에 적힌 "종"은 그 글자의 뜻이 아니라 읽는
 * 소리다. 그것을 뜻이라고 내보이면 이용자가 잘못 안다.
 */
export function hanjaMeaningDisplay(
  meaning: string | null | undefined,
  reading: string | null | undefined,
): HanjaMeaningDisplay {
  const value = (meaning ?? "").trim();
  const normalized = normalize(value);
  const normalizedReading = normalize(reading ?? "");

  if (!normalized) return { known: false, text: UNKNOWN_MEANING_TEXT };
  if (normalizedReading && normalized === normalizedReading) {
    return { known: false, text: UNKNOWN_MEANING_TEXT };
  }
  if (PLACEHOLDER.test(normalized)) return { known: false, text: UNKNOWN_MEANING_TEXT };
  return { known: true, text: value };
}

/** 뜻을 아는 글자만 남긴다. 뜻으로 문장을 만드는 자리에서 쓴다. */
export function withKnownMeaning<T extends { meaning?: string | null; reading?: string | null }>(
  items: readonly T[],
): T[] {
  return items.filter((item) => hanjaMeaningDisplay(item.meaning, item.reading).known);
}
