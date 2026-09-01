import data from "@/lib/dream-symbols.v2.data.json";

/**
 * 해몽 상징 사전 — **원문에서 다시 지은 것**(v2, 2026-08-31 교체).
 *
 * ## 왜 다시 지었나
 *
 * 옛 사전(218개, 2026-08-06 생성)은 AI가 상식으로 만든 것 위에 `source: "tradition"`이라는
 * **문자열 라벨**을 기계적으로 붙였다. 라벨은 적기만 하면 참이 되므로 347개 의미 중 345개가
 * "전통 근거 확인됨"이었는데 **166개는 근거가 아예 없었다**(CLAUDE.md §21). 사용자가
 * "근거도 없는 자료를 기준으로 잡은 게 문제 아니냐"고 짚어 **전량 폐기**하고 원문에서 새로
 * 지었다.
 *
 * ## 새 사전의 규칙은 하나다 — **인용이 없으면 항목이 존재할 수 없다**
 *
 * 모든 의미가 `cites`를 갖고, `cite.original`은 원문 파일과 **문자열로 대조된다**
 * (`scripts/verify-dream-cite.mjs`). 라벨과 달리 위조할 수 없다 — 지어낸 인용은 대조에서
 * 걸린다. 그래서 이 사전에는 `source` 필드도, "근거 없음" 상태도 없다. 없는 것은 아예
 * 항목이 되지 못했다.
 *
 * ## 원문 둘을 합쳤다 — 출처는 인용이 말한다
 *
 * 주공해몽(동아시아 전통)과 밀러(1901, 서양)를 한 사전으로 합쳤다(사용자 결정 2026-08-31).
 * **출처 라벨을 따로 만들지 않았다** — §21의 병을 되풀이하지 않으려고, 각 의미의
 * `cites[].work`가 곧 출처의 증거다. 화면은 그것을 읽어 절을 나눈다
 * (`meaningWork`·`meaningWorkLabel`, `dream-language.ts`).
 *
 * ## `tags`는 태몽 표시뿐이다
 *
 * 옛 사전에는 주제 태그가 200종 가까이 있었지만 전부 그 폐기된 AI 생성물이라 옮기지
 * 않았다. 지금 남은 것은 **태몽 표시 하나**다 — 태몽은 「이 상징의 뜻」이 아니라 「이
 * 상징이 태몽으로 전해지는가」라 원문 인용으로 세울 수 없고, 그래서 **의미가 아니라
 * 표시**로 둔다(`isConceptionDream` 주석과 같은 결). 옛 28개 중 21개만 옮겼다 —
 * 나머지 일곱은 v2에 그 상징 자체가 없고, **없는 것을 지어내지 않는다.**
 *
 * ## `dictVer`
 *
 * 캐시 키에 들어간다. **사전을 고치면 반드시 올릴 것** — 안 올리면 옛 해석이 계속 나온다
 * (인연링크 약관에서 순번 키를 쓰다 같은 일을 겪었다). 조립기가 값을 박는다.
 */

export type DreamPolarity = "positive" | "negative" | "neutral" | "ambivalent";

/** 이 의미의 근거가 된 원문. */
export type DreamWork = "zhougong" | "miller";

/**
 * 원문 인용 — **이 사전의 근거 그 자체**다.
 *
 * `original`은 원문에 **글자 그대로** 있어야 한다(`verify-dream-cite.mjs`가 대조한다).
 * 화면이 이것을 그대로 보여 주므로, 요약하거나 다듬어 넣지 말 것 — 다듬는 순간 대조가
 * 깨지고, 깨진 것을 눈감으면 옛 사전과 같아진다.
 */
export type DreamCite = {
  work: DreamWork;
  /** 주공해몽은 갈래 이름(`刀劍旌節鐘鼓`), 밀러는 표제어(`Mirror`). */
  locator?: string;
  original: string;
  translation_ko?: string;
};

export type DreamMeaning = {
  /**
   * 어떤 상황일 때의 의미인가.
   *
   * ⚠️ **화면 문구이면서 매칭 키의 일부다.** 판별어 표(`dream-contexts*.v2.ts`)가
   * `상징id::이 문구`를 키로 쓴다 — 문구를 고치면 그 자리의 판별이 통째로 죽는다.
   * 고칠 일이 있으면 추출 파일의 `context`를 고치고 표를 다시 만든다.
   */
  context?: string;
  interpretation_ko: string;
  interpretation_en: string;
  polarity?: DreamPolarity;
  /**
   * 근거. **비어 있을 수 없다** — 조립기가 인용 없는 항목을 만들지 않는다.
   *
   * 여럿인 경우는 **한 원문 안에서** 같은 말을 하는 줄이 둘일 때다(`殺豬吉豬自死凶`와
   * `殺豬豖者大吉利`는 둘 다 "돼지를 잡으면 길하다"). **서로 다른 원문의 인용이 한
   * 의미에 섞이지는 않는다** — 그렇게 합쳤다가 밀러 해석 아래 주공해몽 인용이 붙는
   * 사고를 냈다(CLAUDE.md §22와 같은 병, 2026-08-31에 고침).
   */
  cites: DreamCite[];
};

export type DreamSymbol = {
  id: string;
  /** 괄호 없는 본말. **매칭이 이것을 쓴다** — 화면 이름은 `label_ko`다. */
  term_ko: string;
  term_en: string;
  /** 표기 변형·동의어. 매칭은 이것까지 본다. */
  aliases?: string[];
  category: string;
  polarity: DreamPolarity;
  /**
   * 화면에 쓸 이름. **한국어 이름이 다른 상징과 겹칠 때만** 있다
   * (「배(선박)」·「배(과일)」·「배(복부)」·「산(山)」·「산(산성)」·「절(인사)」·「절(사찰)」).
   * 없으면 `term_ko`를 쓴다 — `symbolLabel()`을 거칠 것.
   */
  label_ko?: string;
  /** 이 상징의 의미들이 어느 원문에서 왔는가. 조립기가 인용에서 **세어서** 낸다. */
  works?: DreamWork[];
  /** 지금은 태몽 표시뿐이다(위 머리말 참고). */
  tags?: string[];
  /** 대표 상징일수록 크다. 무엇을 먼저 보여 줄지 정한다. */
  weight?: number;
  meanings: DreamMeaning[];
};

const source = data as unknown as { dictVer: string; symbols: DreamSymbol[] };

export const DICT_VERSION = source.dictVer;
export const DREAM_SYMBOLS: readonly DreamSymbol[] = source.symbols;

/** 태몽 상징. **판별이 아니라 표시다** — 자세한 사연은 `isConceptionDream`에 적었다. */
export const CONCEPTION_TAG = "태몽";

export function symbolById(id: string): DreamSymbol | undefined {
  return DREAM_SYMBOLS.find((symbol) => symbol.id === id);
}

/**
 * **상징을 하나도 못 찾은 화면이 대신 보여 주는 「자주 찾는 상징」.**
 *
 * 고르는 기준은 `weight`이고, 그 값은 조립기의 `POPULAR_SYMBOL_IDS`가 정한다
 * (`scripts/build-dream-dictionary-v2.mjs`).
 *
 * **판정을 여기 한 벌만 둔다.** 2026-09-01까지 이 규칙(`weight >= 3`)이 결과 화면에만
 * 적혀 있었고, 안내 문서는 그 수를 셀 방법이 없어 자리표시자가 빈 채로 있었다 —
 * 그 문단은 23개 언어 전부에서 **한 번도 그려진 적이 없다.** 규칙이 두 곳에 적히면
 * 하나만 고쳐지는 날이 온다(CLAUDE.md §6).
 */
export const POPULAR_SYMBOLS: readonly DreamSymbol[] = DREAM_SYMBOLS.filter(
  (symbol) => (symbol.weight ?? 1) >= 3,
);

/**
 * 이 의미가 어느 원문에서 왔는가. **화면이 이 값으로 절을 나눈다.**
 *
 * 값을 세지 않고 `cites[0]`만 보는 이유는 **한 의미의 인용은 전부 같은 원문**이기
 * 때문이다(조립기가 그렇게 보장하고, 섞이면 그것이 결함이다 — `DreamMeaning.cites` 주석).
 */
export function meaningWork(meaning: Pick<DreamMeaning, "cites">): DreamWork | undefined {
  return meaning.cites?.[0]?.work;
}

/** 화면에 쓸 상징 이름. 겹치는 이름만 괄호가 붙는다. */
export function symbolLabel(symbol: Pick<DreamSymbol, "term_ko" | "label_ko">): string {
  return symbol.label_ko ?? symbol.term_ko;
}
