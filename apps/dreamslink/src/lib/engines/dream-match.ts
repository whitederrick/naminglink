import { ALIASES_EN } from "@/lib/dream-aliases-en";
import { CONTEXT_KO } from "@/lib/dream-contexts-ko";
import { CONTEXT_EN } from "@/lib/dream-contexts";
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

/**
 * 규칙을 바꾸면 올린다 — 결과 문서에 찍히고 캐시 키에도 들어간다.
 *
 * 1.4.0 (2026-08-07) — **어미 `-ing`을 뺐다.** 영어에서 `-ing`는 활용형이 아니라 다른 낱말을
 * 만드는 일이 잦다 — 「a bell was ringing」이 반지(ring)로, 「a fishing boat」가 물고기(fish)로
 * 걸렸다. 별칭 706개를 실제 문장에 태워 찾았다. 빼도 잃는 것이 없다(`flying`·`eating`은
 * 표기 자체가 그 꼴이라 어미 없이 걸린다).
 *
 * 1.3.0 (2026-08-07) — **한국어 판별도 틀리고 있었다.** 상황이 사전형(「반지를 잃음」)이라
 * 활용형(「잃어버렸다」)과 안 맞고, 상징 이름만 양쪽에서 1점씩 받아 동점이 되어 앞의 의미가
 * 이겼다 — 반지·신발·머리·아기·화장실·거미 여섯 자리가 라이브에서 틀렸다. 매칭 키를 화면
 * 문구에서 떼어 냈다(`dream-contexts-ko.ts`). 문장 쌍을 8 → 54개로 늘려 잡은 것이다.
 *
 * 1.2.0 (2026-08-07) — **영어에도 낱말 경계를 넣었다.** 그전까지 라틴은 무조건 통과라
 * 「I saw a fox」가 소(ox)로, 「was taking a test」가 왕(king)으로 걸렸다. 시험 문장 일곱 중
 * 여섯이 오탐이었다. 한글에서 2026-08-06에 고친 것과 같은 결함이 영어에 남아 있었다.
 *
 * 1.1.0 (2026-08-07) — **영어 경로를 살렸다.** 그전까지 22개 언어에서 상황 판별이 죽어 있어
 * 「A snake bit me」가 재물 꿈으로 읽혔다. 영어 상황 키워드·영어 별칭·슬래시 표기 분리·
 * 임신 신호 영어판·기능어 거르기를 함께 넣었다. 한국어 결과는 바뀌지 않는다.
 */
export const ENGINE_VERSION = "dream-1.4.0";

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
  /**
   * 이 의미가 **글의 상황과 실제로 맞아 골라졌는가**, 아니면 걸리는 상황이 없어 대표(첫 번째)
   * 의미로 떨어졌는가. 의미가 하나뿐인 상징은 애초에 가릴 상황이 없으므로 `true`다.
   *
   * **집계용이다.** 화면에는 안 쓰고, 어느 상징이 자주 "대표로만 떨어지는지" 세는 데 쓴다
   * (`DreamResultView`가 익명 카운트로 보낸다) — 사전을 어디부터 넓힐지 감이 아니라 실측으로
   * 정하려는 것이다(2026-08-26).
   */
  contextMatched: boolean;
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
 *
 * 📄 **별칭을 늘리거나 줄이면 `app/guide/how-matching-works`도 함께 볼 것** — 그 문서가 수를
 * 적고 있다(`verify-guide-numbers`가 센다).
 */
function findTerm(haystack: string, symbol: DreamSymbol) {
  const terms = [
    symbol.term_ko,
    symbol.term_en,
    ...(symbol.aliases ?? []),
    // 영어로 달리 부르는 말. 사전의 `aliases`가 한국어뿐이라 따로 둔다(`dream-aliases-en.ts`).
    ...(ALIASES_EN[symbol.id] ?? []),
  ]
    .filter(Boolean)
    /**
     * **`/`로 묶어 적은 표기를 가른다.**
     *
     * 사전에 `cow / ox`·`rat / mouse`처럼 두 이름을 한 칸에 적은 상징이 43개 있다. 통째로
     * 찾으면 「I saw a cow」가 **안 걸린다** — 이용자가 슬래시를 칠 리 없기 때문이다.
     * 2026-08-07까지 그 43개가 영어 글에서 사실상 안 잡히고 있었다.
     *
     * 한국어 표기에는 `/`가 없어 이 갈래는 아무 일도 하지 않는다.
     */
    .flatMap((term) => term.split("/"))
    .map((term) => term.trim().toLowerCase())
    .filter((term) => term.length > 0)
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

/** 라틴 낱말을 이루는 글자. 이것이 앞뒤에 붙어 있으면 낱말의 조각이다. */
const LATIN_WORD = /[a-z0-9]/;

/**
 * 상징 뒤에 붙어도 **낱말이 끝난 것으로 보는** 영어 어미.
 *
 * 허용하지 않으면 「two pigs」·「foxes」 같은 정상 매칭이 통째로 죽는다. 한국어의 `PARTICLES`와
 * 같은 자리다 — 늘리면 매칭이 늘고 오탐도 함께 는다.
 *
 * ⚠️ **`ing`은 일부러 뺐다**(2026-08-07). 영어에서 `-ing`는 활용형이 아니라 **다른 낱말**을
 * 만드는 일이 잦다:
 *
 *   ring  + ing → ringing  「a bell was ringing」이 반지로 걸렸다
 *   fish  + ing → fishing   「I was on a fishing boat」이 물고기로 걸렸다
 *
 * 빼도 잃는 것이 없다. `flying`·`eating`·`singing`처럼 -ing로 끝나는 상징은 **표기 자체가
 * 그 꼴**이라 어미 없이 그대로 걸린다. 별칭 706개를 실제 문장에 태워 확인했다.
 *
 * 긴 것을 앞에 둔다. `es`가 `s`보다 먼저 걸려야 「foxes」에서 뒤가 비는 것을 본다.
 */
const EN_SUFFIXES = ["'s", "es", "ed", "s"];

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
 * **앞뒤를 다 본다.**
 *
 * 처음에는 앞 글자만 봤다. "한국어는 조사가 뒤에 붙으므로 뒤를 막으면 정상 매칭이 전부
 * 죽는다"고 판단했는데, 그 판단이 **낱말 첫머리를 통째로 열어 두었다.** 실측하면 이렇다:
 *
 *   「친구에게 말했다」   → **말**했다의 `말`이 말(馬)로 걸린다
 *   「배가 고팠다」       → **배**고프다의 `배`가 배(舟)로 걸린다
 *   「손님이 찾아왔다」   → **손**님의 `손`이 손(手)으로 걸린다
 *
 * 시험 문장 열두 개가 **전부** 오탐이었다. 한 음절 상징이 예순 개나 되므로(소·말·배·눈·피·
 * 발·손·밤·별·차·개·새·해·달…) 실제 문장이면 거의 반드시 하나는 걸린다.
 *
 * 그래서 뒤도 본다. 다만 뒤가 한글이라고 무조건 막으면 「소가」·「불이」가 죽으므로,
 * **뒤따르는 것이 조사·어미인지**를 본다. 조사면 낱말이 끝난 것이고, 아니면 합성어다.
 *
 * 놓치는 쪽을 택한다. 못 찾으면 "찾지 못했습니다"로 끝나지만, 잘못 찾으면 없는 전통 의미가
 * 사실인 양 나간다. 자주 쓰는 합성어는 `aliases`에 따로 적어 살린다.
 *
 * 📄 **이 규칙을 고치면 `app/guide/how-matching-works`도 함께 볼 것.** 그 문서가 이용자에게
 * 이 규칙을 설명한다(「앞에 한글이 붙어 있으면 낱말의 조각으로 보고…」). 규칙만 고치면 문서가
 * 조용히 거짓이 된다 — 숫자는 `verify-guide-numbers`가 세지만 서술은 사람이 봐야 한다.
 */
function isStandalone(haystack: string, term: string, at: number) {
  /**
   * **라틴 문자는 낱말 경계를 본다**(2026-08-07에 넣었다).
   *
   * 그전에는 이 함수가 한글만 보고 라틴은 무조건 통과시켰다. 한글에서 고친 바로 그 결함이
   * 영어에는 남아 있었던 것이고, 실측하면 이랬다:
   *
   *   "I saw a fox"        → f**ox**가 소(ox)로 걸렸다
   *   "was taking a test"  → ta**king**이 왕(king)으로 걸렸다
   *   "I was in tears"     → t**ears**가 귀(ear)로 걸렸다
   *   "a crowd of people"  → **crow**d가 까마귀로 걸렸다
   *   "a long beard"       → **bear**d가 곰으로, b**ear**d가 귀로 걸렸다
   *
   * 시험 문장 일곱 개 중 여섯에 오탐이 있었다. 영어 별칭 691개를 넣으면서 크게 드러났지만
   * **뿌리는 그전부터 있었다** — `ox`·`ear`·`rain`은 원래 사전의 표기다.
   *
   * 앞은 글자가 아니어야 하고, 뒤는 글자가 아니거나 **영어 어미**여야 한다. 어미를 허용하지
   * 않으면 「two pigs」·「the dog barked」 같은 정상 매칭이 통째로 죽는다.
   */
  if (!HANGUL.test(term)) {
    const before = at > 0 ? haystack[at - 1] : "";
    if (LATIN_WORD.test(before)) return false;

    const after = haystack.slice(at + term.length);
    if (!LATIN_WORD.test(after[0] ?? "")) return true;
    return EN_SUFFIXES.some(
      (suffix) => after.startsWith(suffix) && !LATIN_WORD.test(after[suffix.length] ?? ""),
    );
  }

  // **2글자 이상이라고 경계 검사를 건너뛰지 않는다.** 예전에는 `term.length > 1`이면 무조건
  // 통과시켰다 — "무덤"(2글자)이 "무덤덤했다"(무심했다)의 앞부분과 우연히 겹쳐 걸리는 식의
  // 오탐이 그래서 새고 있었다(2026-08-26 코드 리뷰에서 실행으로 확인). 길이와 무관하게
  // 아래 경계 검사를 그대로 적용한다.
  const before = at > 0 ? haystack[at - 1] : "";
  if (HANGUL.test(before)) return false;

  const after = haystack.slice(at + term.length);
  const next = after[0] ?? "";
  // 뒤가 한글이 아니면(공백·문장부호·끝) 낱말이 끝난 것이다.
  if (!HANGUL.test(next)) return true;
  return PARTICLES.some((particle) => after.startsWith(particle));
}

/**
 * 한 음절 상징 뒤에 붙어도 **낱말이 끝난 것으로 보는** 조사·어미.
 *
 * 긴 것부터 적는다 — `startsWith`로 보므로 순서 자체는 결과를 바꾸지 않지만, 읽는 사람이
 * 「에게」와 「에」가 둘 다 있다는 것을 알아보게 한다.
 *
 * **여기 없는 것은 합성어로 본다.** 목록을 늘리면 매칭이 늘고 오탐도 함께 는다. 늘릴 때는
 * `scripts/verify-dream-match.ts`의 오탐 대조군을 함께 돌릴 것.
 */
const PARTICLES = [
  "에게서", "에게", "에서", "으로", "부터", "까지", "처럼", "보다", "마다", "조차", "밖에",
  "이라", "라고", "이나", "이며", "이고", "이다", "인데", "인가",
  "은", "는", "이", "가", "을", "를", "의", "에", "와", "과", "도", "만", "로", "나", "야",
];
/**
 * **클렌징(2026-08-27) — 어미를 여기 더하는 시도는 되돌렸다.** "다"·"어요"·"았"·"었"·
 * "였"·"던"을 넣어 봤더니 "결혼했다"·"벌거벗었다" 같은 정상 매칭은 살아났지만, 그 대가로
 * "말았다"(그만두다)가 말(馬)로, "새었다"(날이 새다)가 새(鳥)로, "개었다"(날이 개다)가
 * 개(犬)로, "물건을 집었다"가 집(家)으로, "라면이 불었다"가 불(火)로 걸리는 **새 오탐
 * 다섯 건**이 실측으로 드러났다 — 한 음절 상징이 예순 개나 되는데 그 상당수가 이런
 * 동형이의어 동사 어간과 겹친다. "다"만 남겨도 "하지 말다"·"가스가 새다"·"하늘이
 * 개다"·"물건을 집다"·"풍선이 불다"에서 사전형으로 같은 문제가 났다. **이 목록은
 * 조사만 담아야 안전하다** — 어미를 담으려면 이 목록이 아니라 상징별 `aliases`에
 * 완전한 활용형을 하나씩 올리는 쪽으로 간다(같은 클렌징에서 "이가 빠졌다"·"거미줄"이
 * 그 예 — dream-symbols.data.json 쪽에서 고쳤다).
 */

/**
 * 상황에 맞는 의미를 고른다.
 *
 * 의미가 하나면 그것이다(사전의 대부분이 그렇다). 여럿이면 `context`의 낱말이 꿈에 몇 개나
 * 나오는지로 고른다 — 「뱀에게 물렸다」와 「뱀을 품었다」는 전통적으로 정반대다.
 *
 * **아무 것도 안 걸리면 첫 번째를 쓴다.** 사전이 첫 의미를 대표로 적어 두었기 때문이고,
 * 억지로 고르느니 대표를 쓰는 편이 덜 틀린다.
 *
 * 📄 **이 규칙을 고치면 `app/guide/one-symbol-many-meanings`도 함께 볼 것.**
 */
function chooseMeaning(
  haystack: string,
  symbol: DreamSymbol,
): { meaning: DreamMeaning; contextMatched: boolean } {
  const meanings = symbol.meanings;
  if (meanings.length <= 1) return { meaning: meanings[0], contextMatched: true };

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
    if (conceptionMeaning) return { meaning: conceptionMeaning, contextMatched: true };
  }

  const korean = isKoreanText(haystack);

  /**
   * **영어에서만** 상징 이름을 점수에서 뺀다.
   *
   * 영어 키워드는 상징 이름을 함께 적는 것이 자연스러워(`snake bite bitten`) **모든 의미가
   * 이름으로 1점씩 받는다.** 그러면 실제로 가르는 낱말이 0점일 때 동점이 되고 앞의 것이 이긴다 —
   * 「A snake bit me」가 재물 꿈으로 읽히던 이유의 절반이 이것이었다(2026-08-07).
   *
   * ⚠️ **한국어에는 적용하지 않는다.** 한국어 상황은 자연스러운 구절이라 이름이 **어떻게 적혔는지
   * 자체가 판별 정보**다 — 「깨진 거울」과 「거울을 봄」에서 앞의 것만 이름이 조사 없이 들어간다.
   * 이름을 빼면 둘 다 0점이 되어 판별이 죽는다(실제로 그렇게 만들었다가 `verify-dream-context-
   * parity`가 잡았다). 한국어 쪽은 이미 맞게 돌고 있으므로 건드리지 않는다.
   */
  const ownTerms = korean
    ? []
    : [symbol.term_ko, symbol.term_en, ...(symbol.aliases ?? [])]
        .filter(Boolean)
        .map((term) => term.toLowerCase());

  let best = meanings[0];
  let bestScore = 0;
  for (const meaning of meanings) {
    const score = contextScore(haystack, contextFor(meaning, korean), ownTerms);
    if (score > bestScore) {
      best = meaning;
      bestScore = score;
    }
  }
  return { meaning: best, contextMatched: bestScore > 0 };
}

/**
 * 적어 주신 글이 한국어인가.
 *
 * **화면 언어가 아니라 글을 따른다.** 일본어 화면으로 보면서 한국어로 꿈을 적는 사람이 있고,
 * 그때 판별에 써야 할 것은 글의 언어다. 화면 언어로 고르면 그 사람이 엉뚱한 뜻을 받는다.
 */
function isKoreanText(haystack: string) {
  return HANGUL.test(haystack);
}

/**
 * 이 언어에서 판별에 쓸 상황 문자열.
 *
 * 영어 판은 사전 안이 아니라 **별도 표**에 있다(`dream-contexts.ts`) — 태그를 옮긴 표와 같은
 * 방식이다. 215개짜리 사전 파일을 다시 쓰지 않아도 되고, 표를 다시 만들어도 사전은 안 흔들린다.
 *
 * **표에 없으면 한국어로 떨어뜨리지 않고 빈 문자열을 준다.** 한국어를 영어 글에서 찾으면
 * 어차피 0점인데, 떨어뜨려 두면 「값이 있다」고 착각해 빠진 자리를 못 본다. 빠진 자리는
 * `verify-dream-context-parity`가 센다.
 */
function contextFor(meaning: DreamMeaning, korean: boolean) {
  const display = meaning.context ?? "";
  /**
   * 한국어도 **매칭 키를 따로 본다**(2026-08-07).
   *
   * 화면 문구는 사전형이라(「반지를 잃음」) 이용자가 쓰는 활용형(「잃어버렸다」)과 안 맞는다.
   * 그러면 판별할 낱말이 하나도 안 걸리고 **상징 이름만 양쪽에서 1점씩 받아 동점**이 되어,
   * 앞의 의미가 이긴다 — 라이브에서 여섯 자리가 그렇게 틀리고 있었다(`dream-contexts-ko.ts`).
   *
   * 표에 없으면 화면 문구를 그대로 쓴다. 의미가 하나뿐인 상징은 판별을 하지 않으므로
   * 표에 적을 이유가 없다.
   */
  if (korean) return CONTEXT_KO[display] ?? display;
  return CONTEXT_EN[display] ?? "";
}

/**
 * 판별 점수에 넣지 않는 낱말.
 *
 * ## 왜 있는가
 *
 * 한국어 상황은 조사가 붙어 **내용어만 남는다**(`돼지가`·`집에`·`들어오거나`). 그래서 낱말
 * 겹침을 세는 것만으로 판별이 됐다.
 *
 * **영어는 다르다.** 「a pig enters the house or is held」를 쪼개면 `the`·`or`·`is`가 나오는데,
 * 이런 낱말은 **거의 모든 꿈에 있다.** 거르지 않으면 모든 의미가 2~3점을 고르게 받아 판별이
 * 잡음이 된다 — 지금처럼 전부 0점이라 첫째로 떨어지는 것보다 **더 나쁘다.** 조용히 무작위로
 * 고르기 때문이다.
 *
 * `context_en`을 넣기 전에 이것부터 있어야 한다.
 */
const SCORING_STOPWORDS = new Set([
  "a", "an", "the", "and", "or", "but", "if", "of", "in", "on", "at", "to", "into", "onto",
  "is", "am", "are", "was", "were", "be", "been", "being", "do", "does", "did", "done",
  "it", "its", "this", "that", "these", "those", "there", "here", "then", "than",
  "i", "me", "my", "you", "your", "he", "she", "him", "her", "his", "we", "us", "our",
  "they", "them", "their", "one", "some", "any", "all", "no", "not", "so", "as", "by",
  "for", "from", "with", "without", "up", "down", "out", "over", "under", "again",
  "have", "has", "had", "get", "got", "very", "just", "like", "when", "while", "who",
]);

/**
 * 상황 낱말이 이용자 글에 몇 개나 있는가.
 *
 * 부분 문자열로 센다 — 한국어는 조사가 붙어 오므로 그래야 걸린다(`돼지가`가 「돼지가」에).
 * 영어는 기능어를 빼고 센다(위 `SCORING_STOPWORDS`).
 */
function contextScore(haystack: string, context: string, ownTerms: string[] = []) {
  const words = context
    .toLowerCase()
    .split(/[^0-9a-z가-힣]+/)
    .filter(
      (word) =>
        word.length >= 2 && !SCORING_STOPWORDS.has(word) && !ownTerms.includes(word),
    );
  return words.reduce((sum, word) => sum + (haystack.includes(word) ? 1 : 0), 0);
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

/**
 * 이용자가 임신을 말했는가. 태몽 맥락을 고르는 신호다.
 *
 * 📄 **이 목록을 고치면 `app/guide/conception-dreams`도 함께 볼 것.**
 *
 * ⚠️ **한국어만 적어 두면 22개 언어에서 이 규칙이 통째로 죽는다**(2026-08-07에 그랬다).
 * 영어는 어간으로 둔다 — `pregnan`이 pregnant·pregnancy를 함께 잡는다. 부분 문자열 매칭이라
 * 어간이 더 넓게 걸리고, 이 신호는 넓게 걸려도 손해가 적다(태몽 쪽 의미를 먼저 볼 뿐이다).
 */
const CONCEPTION_WORDS = [
  "임신",
  "태몽",
  "임산부",
  "출산",
  "아기를 가",
  "pregnan",
  "conception dream",
  "expecting a baby",
  "having a baby",
  "with child",
];

/** 이 의미가 태몽을 말하는가. 사전은 우리가 관리하는 canonical ko라 문구로 판정해도 흔들리지 않는다. */
export function isConceptionMeaning(meaning: DreamMeaning) {
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
    const { meaning, contextMatched } = chooseMeaning(haystack, symbol);
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
      contextMatched,
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
