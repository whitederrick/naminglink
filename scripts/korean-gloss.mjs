// 번역문 속 한국어 조각이 **정상 용어 주석인지 잔재인지** 가른다.
//
// ## 왜 한 곳에 두는가 (2026-08-07)
//
// 이 레포는 한국 고유 용어에 원어를 괄호로 단다 — 「rapport de compatibilité (궁합 리포트 PDF)」.
// 649곳이 그렇고 정상이다. 그런데 **번역이 덜 된 자리도 똑같이 생겼다.**
//
// 이 규칙을 검사기마다 따로 적었더니 갈렸다. `verify-rendered-locale`은 규칙이 아예 없어
// **정상 글로스를 전부 잔재로 잡았고**, 그래서 늘 빨간불이었다 — 늘 실패하는 검사기는 없는
// 것과 같다. `verify-legal-residue`에만 규칙이 있었다. 한 곳에 두어 둘이 같은 것을 본다.
//
// 쓰는 곳: `verify-legal-residue.mjs`(파일) · `verify-rendered-locale.mjs`(렌더된 화면)

/** 한글 덩어리. 뒤에 붙는 공백까지 삼키므로 쓰는 쪽에서 trim한 자리로 경계를 잡는다. */
export const HANGUL_RUN = /[가-힣][가-힣\s]*/g;

/** 낱말을 이루는 글자 — 라틴·키릴·데바나가리·태국·아랍·한자·가나·숫자. */
const WORD_CHAR = /[0-9A-Za-zЀ-ӿऀ-ॿ฀-๿؀-ۿ一-鿿぀-ヿ]/;

/**
 * 한글 조각 하나를 가른다.
 *
 *   `gloss`  「번역어 (원어)」 — 정상
 *   `glued`  낱말에 눌어붙었다 — 반만 변환된 것(`мансей력`·`ने이버पे`)
 *   `list`   괄호 안에 `·`나 `,`로 여럿을 묶었다 — 옮기다 만 것
 *   `bare`   괄호 밖에 한국어가 그대로 있다
 *
 * `start`/`end`는 **trim한 조각의 자리**여야 한다. 한글 run이 뒤 공백을 삼키는 바람에
 * 「(궁합 리포트 PDF)」의 `P`가 붙어 있는 것으로 보여 정상 글로스를 잔재로 잡은 적이 있다.
 */
export function classifyKoreanRun(text, start, end) {
  const before = text.slice(0, start);
  const after = text.slice(end);

  const prevChar = start > 0 ? text[start - 1] : "";
  const nextChar = after[0] ?? "";
  if (WORD_CHAR.test(prevChar) || WORD_CHAR.test(nextChar)) return { kind: "glued" };

  // **전각 괄호도 함께 본다.** 중국어·일본어 번역문은 `（）`를 쓴다 — 반각만 보면
  // 「（사주）」·「（띠）」를 괄호 밖으로 잘못 읽는다.
  const open = Math.max(before.lastIndexOf("("), before.lastIndexOf("（"));
  const closeHalf = after.indexOf(")");
  const closeFull = after.indexOf("）");
  const close =
    closeHalf < 0 ? closeFull : closeFull < 0 ? closeHalf : Math.min(closeHalf, closeFull);
  // 여는 괄호와 이 조각 사이에 이미 닫는 괄호가 있으면 괄호 안이 아니다.
  const inParens = open >= 0 && close >= 0 && !/[)）]/.test(before.slice(open));
  if (!inParens) return { kind: "bare" };

  const inside = text.slice(open + 1, end + close);
  if (/[·,]/.test(inside.replace(/[^가-힣·,]/g, ""))) return { kind: "list", inside };
  return { kind: "gloss", inside };
}

/**
 * `text`의 한글 조각을 모두 갈라 돌려준다.
 *
 * 정상 글로스도 함께 돌려준다 — 쓰는 쪽이 「몇 개가 정상이었나」를 셀 수 있어야
 * 판정이 넓어져 전부 통과하는 상태를 알아챈다.
 */
export function classifyKorean(text) {
  const out = [];
  HANGUL_RUN.lastIndex = 0;
  let match;
  while ((match = HANGUL_RUN.exec(text)) !== null) {
    const fragment = match[0].trim();
    if (!fragment) continue;
    const lead = match[0].length - match[0].trimStart().length;
    const start = match.index + lead;
    const end = start + fragment.length;
    out.push({ fragment, start, end, ...classifyKoreanRun(text, start, end) });
  }
  return out;
}

/**
 * 대조군 표본. **잡아야 하는 것과 통과해야 하는 것을 함께** 담는다.
 *
 * 쓰는 쪽은 이것을 돌려 각 `kind`가 기대대로 나오는지 먼저 확인하고, 아니면 그날 결과를
 * 내놓지 말 것.
 */
export const GLOSS_CONTROL = [
  ["Bericht (궁합 리포트 PDF) ist", "gloss"],
  ["十二生肖（띠）的关系", "gloss"],
  ["saju (사주) analysis", "gloss"],
  ["Расчет мансейлек (мансей력) использует", "glued"],
  ["natal chart (재물·애정·직업·건강) y sus", "list"],
  ["Naming-Link 결과를 저장합니다", "bare"],
];

/** 대조군이 성립하는가. 아니면 그날 결과를 믿지 말 것. */
export function glossControlHolds() {
  return GLOSS_CONTROL.every(([sample, expected]) =>
    classifyKorean(sample).some((hit) => hit.kind === expected),
  );
}
