import {
  CONCEPTION_TAG,
  DREAM_SYMBOLS,
  type DreamMeaning,
  type DreamPolarity,
  type DreamSymbol,
} from "@/lib/dream-symbols";

/**
 * 꿈 텍스트에서 전통 상징을 찾는다. **여기에는 모델이 없다.**
 *
 * 규칙 엔진으로 두는 이유가 셋이다.
 *
 * 1. **무료 화면이 트래픽을 받는다.** 꿈은 매일 꾸는 것이라 조회가 사주·궁합과 비교가 안 되게
 *    많다. 조회마다 모델을 부르면 비용·지연·광고 속도가 함께 나빠진다
 *    (`ai-only-on-paid-path` — 이 저장소의 결정이다).
 * 2. **같은 꿈이면 같은 상징이 나와야 한다.** 어제와 오늘 다른 상징이 나오면 사전이 있으나 마나다.
 * 3. **모델을 묶어 두는 밧줄이 이 결과다.** 해석은 여기서 나온 의미만 근거로 쓴다.
 *
 * 엔진 규칙을 바꾸면 `ENGINE_VERSION`을 올린다 — 결과 문서에 찍히고 캐시 키에도 들어간다.
 */

export const ENGINE_VERSION = "dream-1.0.0";

export type MatchedSymbol = {
  id: string;
  /**
   * 상징 이름 **두 벌.**
   *
   * 예전에는 `term: symbol.term_ko` 하나였고, 그 탓에 화면·PDF가 스물세 언어 전부에서 상징
   * 이름을 한국어로 그렸다. 고르는 일은 `lib/dream-language.ts`가 한다 — 여기서는 두 벌을
   * 다 실어 보낸다.
   */
  term_ko: string;
  term_en: string;
  /** 이 꿈에서 고른 의미. 상징에 의미가 여럿이면 상황으로 고른다. */
  meaning: DreamMeaning;
  polarity: DreamPolarity;
  weight: number;
  tags: string[];
  culture_note?: string;
  /** 무엇이 걸렸는지. 화면에서 "왜 이 상징인가"를 보일 때 쓴다. */
  matchedOn: string;
  /** 꿈 텍스트에서 처음 나온 위치. 같은 무게면 먼저 말한 것을 앞에 둔다. */
  at: number;
};

export type DreamOutcome = {
  engineVersion: string;
  matched: MatchedSymbol[];
  /** 전체 기조. 상징이 없으면 `neutral`이다. */
  mood: DreamPolarity;
  /** 상징들이 함께 가리키는 주제(태그) 상위. */
  themes: string[];
  /** 태몽 상징이 걸렸는가. **판별이 아니다** — `isConceptionDream` 주석 참고. */
  conception: boolean;
};

/**
 * 매칭 전 정규화.
 *
 * 한국어는 조사가 붙어 오므로(「돼지가」·「돼지를」) 부분 문자열로 찾는다. 공백을 지우지 않는
 * 이유는 영어 상징(`clear water`)이 공백을 품기 때문이다 — 지우면 그쪽이 영영 안 걸린다.
 */
function normalize(text: string) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

/**
 * 이 상징이 꿈에 나오는가. 걸렸으면 **무엇에** 걸렸는지와 **어디서** 걸렸는지를 함께 준다.
 *
 * 긴 표기부터 본다. 「흙탕물」과 「물」이 둘 다 사전에 있을 때 짧은 쪽이 먼저 걸리면 구체적인
 * 상징을 놓친다.
 */
function findTerm(haystack: string, symbol: DreamSymbol) {
  const terms = [symbol.term_ko, symbol.term_en, ...(symbol.aliases ?? [])]
    .filter(Boolean)
    .map((term) => term.toLowerCase())
    .sort((a, b) => b.length - a.length);

  for (const term of terms) {
    let from = 0;
    for (;;) {
      const at = haystack.indexOf(term, from);
      if (at < 0) break;
      if (isStandalone(haystack, term, at)) return { matchedOn: term, at };
      from = at + 1;
    }
  }
  return null;
}

const HANGUL = /[가-힣]/;

/**
 * 이 자리에 걸린 것이 **낱말인가, 다른 낱말의 조각인가.**
 *
 * 한 음절짜리 한글 상징이 통째로 새고 있었다(2026-08-06 배포본에서 실측):
 *
 *   「아무 특별할 것 없는 하루였다」  → **특별**의 `별`이 걸려 태몽으로 표시됐다
 *   「뱀에게 물렸다」                → 조사 **에게**의 `게`가 게(蟹)로 걸렸다
 *
 * 없는 상징을 만들어 내는 것이라, 이 서비스가 가장 경계하는 일이다.
 *
 * **앞 글자만 본다.** 한국어는 조사가 뒤에 붙으므로(`별이`·`돼지가`) 뒤를 막으면 정상 매칭이
 * 전부 죽는다. 반대로 합성어는 앞에 붙으므로(`특별`·`샛별`) 앞 글자가 한글이면 조각이다.
 *
 * 놓치는 쪽을 택한다. 못 찾으면 "찾지 못했습니다"로 끝나지만, 잘못 찾으면 없는 전통 의미가
 * 사실인 양 나간다. 자주 쓰는 합성어는 `aliases`에 따로 적어 살린다.
 */
function isStandalone(haystack: string, term: string, at: number) {
  if (term.length > 1 || !HANGUL.test(term)) return true;
  const before = at > 0 ? haystack[at - 1] : "";
  return !HANGUL.test(before);
}

/**
 * 상황에 맞는 의미를 고른다.
 *
 * 의미가 하나면 그것이다(사전의 대부분이 그렇다). 여럿이면 `context`의 낱말이 꿈에 몇 개나
 * 나오는지로 고른다 — 「뱀에게 물렸다」와 「뱀을 품었다」는 전통적으로 정반대다.
 *
 * **아무 것도 안 걸리면 첫 번째를 쓴다.** 사전이 첫 의미를 대표로 적어 두었기 때문이고,
 * 억지로 고르느니 대표를 쓰는 편이 덜 틀린다.
 */
function chooseMeaning(haystack: string, symbol: DreamSymbol): DreamMeaning {
  const meanings = symbol.meanings;
  if (meanings.length <= 1) return meanings[0];

  /**
   * **태몽 맥락은 낱말 수로 겨루지 않는다.**
   *
   * 돼지꿈은 보통 재물 꿈이고 임신한 사람이 꾸면 태몽으로 읽힌다. 둘 다 사전에 있는데, 낱말
   * 수로만 고르면 「임신했는데 돼지가 집에 들어왔다」에서 원래 의미가 이긴다 — `돼지가 집에
   * 들어오거나 품`이 두 낱말을 맞히고 태몽 쪽은 `임신` 하나뿐이기 때문이다.
   *
   * 임신을 말한 사람에게는 그쪽이 먼저다. 그런 신호가 없으면 이 규칙은 아무 일도 하지 않는다.
   */
  const saidPregnancy = CONCEPTION_WORDS.some((word) => haystack.includes(word));
  if (saidPregnancy) {
    const conceptionMeaning = meanings.find((meaning) => isConceptionMeaning(meaning));
    if (conceptionMeaning) return conceptionMeaning;
  }

  let best = meanings[0];
  let bestScore = 0;
  for (const meaning of meanings) {
    const words = (meaning.context ?? "")
      .toLowerCase()
      .split(/[^0-9a-z가-힣]+/)
      .filter((word) => word.length >= 2);
    const score = words.reduce(
      (sum, word) => sum + (haystack.includes(word) ? 1 : 0),
      0,
    );
    if (score > bestScore) {
      best = meaning;
      bestScore = score;
    }
  }
  return best;
}

/**
 * 전체 기조.
 *
 * **좋은 것과 나쁜 것을 상쇄하지 않는다.** 길몽 둘과 흉몽 하나를 더해 "약간 좋음"으로 뭉개면
 * 이용자가 정작 걸리는 하나를 못 본다. 무게를 실어 많은 쪽을 고르되, 양쪽이 같으면 섞였다고
 * 말한다(`ambivalent`).
 */
function moodOf(matched: MatchedSymbol[]): DreamPolarity {
  if (!matched.length) return "neutral";
  const score = { positive: 0, negative: 0, neutral: 0, ambivalent: 0 };
  for (const item of matched) score[item.polarity] += item.weight;
  if (score.positive > score.negative) return "positive";
  if (score.negative > score.positive) return "negative";
  return score.positive === 0 ? "neutral" : "ambivalent";
}

/** 이용자가 임신을 말했는가. 태몽 맥락을 고르는 신호다. */
const CONCEPTION_WORDS = ["임신", "태몽", "임산부", "출산", "아기를 가"];

/** 이 의미가 태몽을 말하는가. 사전은 우리가 관리하는 canonical ko라 문구로 판정해도 흔들리지 않는다. */
function isConceptionMeaning(meaning: DreamMeaning) {
  return (
    meaning.context?.includes(CONCEPTION_TAG) === true ||
    meaning.interpretation_ko.includes(CONCEPTION_TAG)
  );
}

/**
 * 이 꿈을 태몽으로 볼 수 있는가.
 *
 * **태그가 아니라 고른 의미로 판정한다.** 태그만 보면 돼지꿈을 꾼 사람 전부가 태몽이 된다 —
 * 돼지는 태몽으로도 읽히지만 보통은 재물 꿈이기 때문이다(2026-08-06에 사전을 넓히며 실제로
 * 그렇게 새어 나왔다). 그 상징의 **태몽 의미가 실제로 선택됐을 때**만 참이다.
 *
 * ⚠️ **그래도 임신을 판별하지는 않는다.** 전통적으로 태몽으로 보아 온 상징이 나왔다는 사실까지만
 * 말한다. "임신입니다"는 의학적 단정이고, 이 서비스가 할 수 있는 말도 해도 되는 말도 아니다.
 * 화면과 문서의 문구도 거기까지만 간다.
 */
function isConceptionDream(matched: MatchedSymbol[]) {
  return matched.some((item) => isConceptionMeaning(item.meaning));
}

export function matchDream(text: string): DreamOutcome {
  const haystack = normalize(text);
  const matched: MatchedSymbol[] = [];

  for (const symbol of DREAM_SYMBOLS) {
    const hit = findTerm(haystack, symbol);
    if (!hit) continue;
    const meaning = chooseMeaning(haystack, symbol);
    matched.push({
      id: symbol.id,
      term_ko: symbol.term_ko,
      term_en: symbol.term_en,
      meaning,
      // 의미마다 극성이 다를 수 있다(뱀을 품으면 길, 물리면 흉). 고른 의미의 극성을 우선한다.
      polarity: meaning.polarity ?? symbol.polarity,
      weight: symbol.weight ?? 1,
      tags: symbol.tags ?? [],
      culture_note: symbol.culture_note,
      matchedOn: hit.matchedOn,
      at: hit.at,
    });
  }

  // 무게 내림차순, 같으면 꿈에서 먼저 나온 순. **정렬을 고정해야 같은 꿈이 같은 결과를 낸다.**
  matched.sort((a, b) => b.weight - a.weight || a.at - b.at);

  // 주제는 많이 나온 태그 순. 상징이 셋인데 전부 「재물」이면 그 꿈은 재물 꿈이다.
  const counts = new Map<string, number>();
  for (const item of matched) {
    for (const tag of item.tags) counts.set(tag, (counts.get(tag) ?? 0) + item.weight);
  }
  const themes = [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 3)
    .map(([tag]) => tag);

  return {
    engineVersion: ENGINE_VERSION,
    matched,
    mood: moodOf(matched),
    themes,
    conception: isConceptionDream(matched),
  };
}
