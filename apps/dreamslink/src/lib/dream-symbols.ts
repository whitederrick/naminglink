import data from "@/lib/dream-symbols.data.json";

/**
 * 전통 해몽 상징 사전.
 *
 * ## 이 사전이 하는 일
 *
 * **모델을 사전에 묶어 둔다.** 해몽은 "그럴듯한 말"을 무한히 지어낼 수 있는 영역이라, 근거를
 * 걸어 두지 않으면 모델이 전통에 없는 의미를 전통인 양 쓴다. 그래서 규칙은 하나다 —
 * **`traditional` 서술은 여기 있는 의미에서만 나온다.** 매칭이 0건이면 전통 해석을 만들지 않고
 * "전통 상징을 찾지 못했다"고 말한다.
 *
 * ## 사전이 얕다는 사실을 알고 쓴다
 *
 * 상징 209개, **의미는 상징당 평균 1.1개**다. 사주 엔진처럼 값을 많이 내는 물건이 아니다.
 * 그래서 이 서비스는 사주처럼 아홉 장짜리 문서를 만들지 않는다 — 만들려면 없는 것을 지어내야
 * 하고, 그것이 이 파일이 막으려는 바로 그 일이다.
 *
 * ## `dictVer`
 *
 * 캐시 키에 들어간다. **사전을 고치면 반드시 올릴 것** — 안 올리면 옛 해석이 계속 나온다
 * (인연링크 약관에서 순번 키를 쓰다 같은 일을 겪었다).
 */

export type DreamPolarity = "positive" | "negative" | "neutral" | "ambivalent";

export type DreamMeaning = {
  /** 어떤 상황일 때의 의미인가. 비어 있으면 그 상징의 기본 의미다. */
  context?: string;
  interpretation_ko: string;
  interpretation_en: string;
  polarity?: DreamPolarity;
};

export type DreamSymbol = {
  id: string;
  term_ko: string;
  term_en: string;
  /** 표기 변형·동의어. 매칭은 이것까지 본다. */
  aliases?: string[];
  category: string;
  polarity: DreamPolarity;
  tags?: string[];
  /** 대표 상징일수록 크다. 무엇을 먼저 보여 줄지 정한다. */
  weight?: number;
  /** 한국 전통 해몽 배경. 209개 중 24개에만 있다 — 없다고 지어내지 말 것. */
  culture_note?: string;
  meanings: DreamMeaning[];
};

const source = data as { dictVer: string; symbols: DreamSymbol[] };

export const DICT_VERSION = source.dictVer;
export const DREAM_SYMBOLS: readonly DreamSymbol[] = source.symbols;

/** 태몽 상징. **판별이 아니라 표시다** — 자세한 사연은 `isConceptionDream`에 적었다. */
export const CONCEPTION_TAG = "태몽";

export function symbolById(id: string): DreamSymbol | undefined {
  return DREAM_SYMBOLS.find((symbol) => symbol.id === id);
}
