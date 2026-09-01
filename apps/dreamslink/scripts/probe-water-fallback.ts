// **물 꿈이 판별어에 하나도 안 걸렸을 때 어느 뜻으로 떨어지는가**를 잰다.
//
// `chooseMeaning`의 `pickByScore`는 점수가 전부 0이면 `from[0]` — 곧 **첫 의미**를 돌려준다
// (dream-match.ts). 그래서 상징의 첫 의미가 무엇이냐가 「아무것도 안 걸린 꿈」의 답을 정한다.
//
// 그런데 **첫 의미가 무엇이 되는지는 추출 파일 이름의 정렬 순서**가 정한다
// (`build-dream-dictionary-v2.mjs`는 `readdirSync().sort()` 차례로 의미를 밀어 넣는다).
// `m27b.json`은 `r4/r6/r9.json`보다 먼저 정렬되므로, 배치 27b가 물에 의미를 하나 더하면
// 그 의미가 **물의 첫 의미**가 되고 기본값이 통째로 바뀐다.
//
// 이 프로브는 그 기본값을 **고치기 전에 한 번, 고친 뒤에 한 번** 재기 위한 것이다
// (CLAUDE.md §3 — 대조군 없는 초록불은 아무것도 증명하지 않는다).
//
// ## 이 프로브가 못 잡는 것 (§22)
//
//   · 물 말고 다른 상징의 기본값은 안 본다.
//   · 뜻이 옳은지는 안 본다 — **어느 의미로 떨어지는가**만 본다.
//   · 영어 입력은 안 본다.
//
// 실행: apps/dreamslink 에서  npx tsx scripts/probe-water-fallback.ts
import { matchDream } from "../src/lib/engines/dream-match";

/** 판별어에 걸릴 만한 말이 없는, 그러나 물이 분명히 나오는 문장들. */
const CASES = [
  "물을 보았다",
  "눈앞에 물이 있었다",
  "물이 참 많았다",
  "커다란 물이 펼쳐져 있었다",
  "물 근처에 한참 머물렀다",
];

let bad = 0;
for (const text of CASES) {
  const r = matchDream(text);
  const water = r.matched.find((m) => m.id === "water");
  if (!water) {
    console.log(`✗ 안 걸림  「${text}」`);
    bad++;
    continue;
  }
  const flag = water.contextMatched ? "판별어 걸림" : "기본값으로 떨어짐";
  console.log(
    `  「${text}」\n      → [${water.polarity}] ${water.meaning.context}  (${flag})`,
  );
}

console.log(`\n시험 ${CASES.length}건 · 물이 안 걸린 것 ${bad}건`);
process.exit(bad > 0 ? 1 : 0);
