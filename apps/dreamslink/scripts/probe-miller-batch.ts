// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 212 — Rattan Cane~Razor, 4개 헤드워드)
//
// ## 왜 이것이 따로 있어야 하나 (2026-09-01)
//
// 배치를 넣는 절차의 ⑨단계다. ⑧까지의 검사기 셋(`verify-dream-km`·`audit-km-dead-words`·
// `verify-dream-cite`)은 **「적어 둔 것이 규칙에 맞는가」만 본다.** 「이용자가 쓸 말로
// 걸리는가」는 아무도 안 본다 — 09-01 앞 세션에서 셋 다 초록불인데 **다섯 상징이 하나도
// 안 걸렸다**(별칭을 어간으로 적어서, CLAUDE.md §25). 배치 11 에서도 이 프로브가
// **9건을 잡았다**(안 걸림 2 · 엉뚱한 뜻 7) — 검사기 셋은 그때도 전부 초록불이었다.
//
// ## 이 프로브가 못 잡는 것 (§22 — 먼저 적는다)
//
//   · 뜻이 맞는지는 안 본다. **걸리는가와 어느 의미로 갈리는가**만 본다.
//   · 한국어 문장만 본다. 영어 판별어는 여기서 안 밟힌다.
//   · 문장을 **손으로 적는다** — 새 배치를 넣으면 `CASES`를 그 배치 것으로 갈아야 한다.
//     갈지 않으면 옛 배치를 다시 재면서 「새 배치를 쟀다」고 착각한다.
//   · 지난 배치는 여기 안 남는다. 영구 회귀는 `verify-dream-match.ts`가 맡는다.
//   · **아무것도 안 걸렸을 때 떨어지는 자리(첫 의미)는 여기서 안 잰다** —
//     `probe-water-fallback.ts`와 조립기의 「기본값이 바뀐 상징」 관문이 본다.
//   · **문장을 통과하도록 고르면 안 된다.** 안 걸리면 문장이 아니라 **데이터를 고친다** —
//     이용자는 이 파일을 안 보고 자기 말로 쓴다.
//
// 재구현하지 않는다 — 제품이 쓰는 matchDream 을 그대로 부른다(CLAUDE.md §23).
//
// 실행: apps/dreamslink 에서  npx tsx scripts/probe-miller-batch.ts
// 종료 코드: 0 전부 걸림 / 1 안 걸리거나 엉뚱한 뜻으로 걸린 것이 있음
import { matchDream } from "../src/lib/engines/dream-match";

type Case = { id: string; ctx: string; text: string };

const CASES: Case[] = [
  { id: "rattan-cane", ctx: "등나무 지팡이 꿈을 꿈", text: "등나무 지팡이 꿈을 꾸었다" },
  { id: "rattle", ctx: "아기가 딸랑이를 갖고 놂", text: "아기가 딸랑이를 갖고 놀았다" },
  { id: "rattle", ctx: "처녀에게 아기가 딸랑이를 갖고 노는 꿈이 나타남", text: "처녀에게 아기가 딸랑이를 갖고 노는 꿈이 나타났다" },
  { id: "rattle", ctx: "아기에게 딸랑이를 줌", text: "아기에게 딸랑이를 주었다" },
  { id: "crow", ctx: "처녀에게 까마귀 꿈이 나타나 정인이 배신함", text: "처녀에게 까마귀 꿈이 나타나더니 정인이 배신했다" },
  { id: "razor", ctx: "면도칼 꿈을 꿈", text: "면도칼 꿈을 꾸었다" },
  { id: "razor", ctx: "면도칼에 몸을 벰", text: "면도칼에 몸을 베었다" },
  { id: "razor", ctx: "면도칼로 싸움", text: "면도칼로 싸웠다" },
  { id: "razor", ctx: "부러지거나 녹슨 면도칼을 봄", text: "녹슨 면도칼을 보았다" },
  // 지킴 — 이번 배치가 건드린 기존 상징(crow)의 옛 답이 그대로인가
  { id: "crow", ctx: "까마귀를 봄", text: "까마귀를 보았다" },
  { id: "crow", ctx: "젊은 남성에게 까마귀 꿈이 나타남", text: "젊은 남자에게 까마귀 꿈이 나타났다" },
];

let notFound = 0;
let wrongCtx = 0;

for (const c of CASES) {
  const result = matchDream(c.text);
  const hit = result.matched.find((m) => m.id === c.id);
  if (!hit) {
    console.log(`✗ 안 걸림   [${c.id}] 「${c.text}」`);
    notFound++;
    continue;
  }
  if (hit.meaning.context !== c.ctx) {
    console.log(
      `✗ 다른 뜻   [${c.id}] 「${c.text}」\n              바란 것: ${c.ctx}\n              나온 것: ${hit.meaning.context}`,
    );
    wrongCtx++;
    continue;
  }
  console.log(`  OK        [${c.id}] ${c.ctx}`);
}

console.log(`\n시험 ${CASES.length}건 · 안 걸림 ${notFound}건 · 다른 뜻 ${wrongCtx}건`);
process.exit(notFound + wrongCtx > 0 ? 1 : 0);
