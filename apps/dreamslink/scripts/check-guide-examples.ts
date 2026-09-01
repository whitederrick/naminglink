// 안내 문서가 **약속한 예문**이 실제로 그렇게 동작하는지 본다.
//
// ## 왜 필요한가 (2026-09-01)
//
// 사전을 v2로 갈아 끼우면서(2026-08-31) 상징 목록이 통째로 바뀌었다. 그런데 안내 문서의
// 예문은 옛 사전(218개)을 보고 쓴 것이라 **두 가지가 조용히 거짓이 됐다.**
//
//   ① 걸린다고 적어 둔 문장이 안 걸린다
//      「높은 곳에서 떨어졌다」 — `추락` 표제어가 v2에 없다. 두 문서가 이것을
//      「이렇게 적으면 잘 걸립니다」의 본보기로 쓰고 있었다.
//
//   ② 정반대라고 적어 둔 짝이 정반대가 아니다
//      「뱀을 품는 것과 물리는 것은 전통적으로 정반대」 — v2 원문(주공해몽)에서는
//      **둘 다 길하다**(품속으로 들어옴=귀한 자식, 사람에게 덤벼듦=큰 재물).
//      네 문서가 이 짝을 대표 예시로 삼고 있었다.
//
// tsc도 `verify-dream-match`도 이것을 못 잡는다. 전자는 「값이 있다」만 보고, 후자는
// 하니스가 스스로 고른 문장만 본다 — **문서가 한 약속은 아무도 안 세고 있었다**
// (CLAUDE.md §24 「검사기는 있는 것만 훑는다」와 같은 자리).
//
// ## 이 검사기가 못 잡는 것 (§22 — 먼저 적는다)
//
//   · 문서에 적힌 **뜻**이 맞는지는 안 본다. 걸리는가와 극성이 갈리는가만 본다.
//   · 한국어 예문만 본다. 영어 문서의 예문은 여기 없다.
//   · 예문 목록을 **손으로 옮겨 적는다.** 문서에 새 예문이 늘면 여기 함께 적어야 한다.
//     문서를 파싱해 자동으로 뽑지 않는 이유는 「걸린다/안 걸린다」가 산문 안에 있어
//     기계가 가릴 수 없기 때문이다.
//
// ## 어떻게 재는가
//
// 재구현하지 않는다(CLAUDE.md §23). 제품이 실제로 쓰는 `matchDream`을 그대로 부른다.
//
// 실행: apps/dreamslink 에서
//   ../naminglink/node_modules/.bin/tsx scripts/check-guide-examples.ts

import { matchDream } from "../src/lib/engines/dream-match";

/** 문서가 「걸린다」고 약속한 문장. 하나도 못 찾으면 그 약속이 거짓이다. */
const SHOULD_MATCH: Array<{ where: string; text: string }> = [
  { where: "about", text: "어젯밤에 커다란 구렁이가 나를 감았다" },
  { where: "how-matching-works", text: "어젯밤에 커다란 구렁이가 나를 감았다" },
  { where: "how-to-write", text: "커다란 구렁이가 나를 감았다" },
  { where: "how-to-write", text: "맑은 물이 흐르는 것을 보았다" },
  { where: "how-to-write", text: "이가 저절로 빠졌다" },
  { where: "how-to-write", text: "돼지를 봤다" },
  { where: "how-to-write", text: "돼지가 집으로 들어왔다" },
  { where: "how-to-write", text: "맑은 물을 마셨다" },
  { where: "one-symbol-many-meanings", text: "해가 막 떠오르는 것을 보았다" },
  { where: "one-symbol-many-meanings", text: "해가 떨어지는 것을 보았다" },
  { where: "one-symbol-many-meanings", text: "돼지가 집으로 들어왔다" },
  { where: "not-found", text: "이가 저절로 빠졌다" },
  { where: "not-found", text: "맑은 물이 흐르는 것을 보았다" },
];

/** 문서가 「안 걸린다」고 약속한 문장. 걸리면 그것도 거짓이다. */
const SHOULD_NOT_MATCH: Array<{ where: string; text: string }> = [
  { where: "how-to-write", text: "무서웠다" },
  { where: "how-to-write", text: "기분이 이상했다" },
  { where: "how-to-write", text: "누군가 나를 미워하는 것 같았다" },
  { where: "not-found", text: "불안했다" },
];

/**
 * 문서가 **「정반대로 풀이해 왔다」**고 적은 짝.
 *
 * 「갈린다」로는 부족하다 — 옛 문서의 뱀 짝은 뜻이 **갈리기는 했지만 둘 다 길했다.**
 * 그래서 여기서는 **극성이 서로 반대인지**까지 본다.
 */
const OPPOSITE_PAIRS: Array<{ where: string; symbol: string; a: string; b: string }> = [
  {
    where: "one-symbol-many-meanings · how-to-write · about",
    symbol: "해",
    a: "해가 막 떠오르는 것을 보았다",
    b: "해가 떨어지는 것을 보았다",
  },
  {
    where: "good-and-bad",
    symbol: "돼지",
    a: "돼지를 잡았다",
    b: "돼지가 저절로 죽어 있었다",
  },
];

let bad = 0;

console.log("문서가 「걸린다」고 약속한 문장");
for (const c of SHOULD_MATCH) {
  const r = matchDream(c.text);
  if (r.matched.length === 0) {
    bad += 1;
    console.log(`  ✗ [${c.where}] "${c.text}" — 하나도 안 걸림`);
  } else {
    console.log(`  ✓ [${c.where}] "${c.text}" → ${r.matched.map((m) => m.term_ko).join(", ")}`);
  }
}

console.log("\n문서가 「안 걸린다」고 약속한 문장");
for (const c of SHOULD_NOT_MATCH) {
  const r = matchDream(c.text);
  if (r.matched.length > 0) {
    bad += 1;
    console.log(
      `  ✗ [${c.where}] "${c.text}" — 걸렸다: ${r.matched.map((m) => m.term_ko).join(", ")}`,
    );
  } else {
    console.log(`  ✓ [${c.where}] "${c.text}" — 안 걸림`);
  }
}

console.log("\n문서가 「정반대」라고 적은 짝 — 극성이 실제로 반대인가");
for (const p of OPPOSITE_PAIRS) {
  const pick = (text: string) => matchDream(text).matched.find((m) => m.term_ko === p.symbol);
  const a = pick(p.a);
  const b = pick(p.b);
  if (!a || !b) {
    bad += 1;
    console.log(`  ✗ [${p.where}] ${p.symbol} — 한쪽이 안 걸린다 (a=${!!a} b=${!!b})`);
    continue;
  }
  const opposed =
    (a.polarity === "positive" && b.polarity === "negative") ||
    (a.polarity === "negative" && b.polarity === "positive");
  if (!opposed) {
    bad += 1;
    console.log(
      `  ✗ [${p.where}] ${p.symbol} — 반대가 아니다: "${a.meaning.context}"(${a.polarity}) / "${b.meaning.context}"(${b.polarity})`,
    );
  } else {
    console.log(
      `  ✓ [${p.where}] ${p.symbol} — "${a.meaning.context}"(${a.polarity}) ↔ "${b.meaning.context}"(${b.polarity})`,
    );
  }
}

console.log(bad === 0 ? "\n어긋난 예문 0건" : `\n어긋난 예문 ${bad}건`);
process.exit(bad === 0 ? 0 : 1);
