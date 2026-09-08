// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 308 — Weeding~Well(새 20판 묶음(308~327)의
// 1/20). 새 상징 둘(weeding·weevil), 기존 well(우물, zhougong 스무
// 의미)에 문맥 넷을 나눠 붙였다. 셋은 §31로 건너뜀(우물에 빠짐·우물이
// 무너짐·맑은/흐린 물을 길어 올림 — 기존 zhougong 의미와 같은 그림).
// 기본값 플립 거절(well, 새 답이 옛 답보다 딱히 안 막연함).
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
  // ── 배치 308 새 문맥 (7건) ─────────────────────────────────────────────
  { id: "weeding", ctx: "스스로 잡초를 뽑음", text: "스스로 잡초를 뽑았는데 명예를 가져다줄 일에 어려움을 겪었다" },
  { id: "weeding", ctx: "남이 잡초 뽑는 것을 봄", text: "남이 잡초 뽑는 것을 보았는데 적이 계획을 뒤엎을까 두려웠다" },
  { id: "weevil", ctx: "바구미 꿈을 꿈", text: "바구미 꿈을 꾸었는데 장사에서 손실을 보았다" },
  { id: "well", ctx: "스스로 우물 안에서 일함", text: "스스로 우물 안에서 일했는데 역경에 굴복했다" },
  { id: "well", ctx: "빈 우물을 봄", text: "빈 우물을 보았는데 낯선 이에게 속내를 나누어 재물을 빼앗겼다" },
  { id: "well", ctx: "펌프가 있는 우물을 봄", text: "펌프가 있는 우물을 보았는데 앞날을 개척할 기회를 얻었다" },
  { id: "well", ctx: "저절로 솟는 우물 꿈을 꿈", text: "저절로 샘솟는 우물 꿈을 꾸었는데 지식과 즐거움의 세계에 들어섰다" },

  // ── 지킴 케이스 — well의 기존 답이 여전히 걸리는지 ──
  { id: "well", ctx: "몸이 우물에 빠짐", text: "우물에 빠졌는데 병이 들었다" },
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
