// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 310 — Whale~Wheat(새 20판 묶음의 3/20). 새 상징
// 셋(whale·whalebone·wheat).
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
  // ── 배치 310 새 문맥 (11건) ────────────────────────────────────────────
  { id: "whale", ctx: "고래가 배로 다가오는 것을 봄", text: "고래가 배로 다가오는 것을 보았는데 의무 사이의 갈등을 겪었다" },
  { id: "whale", ctx: "고래가 없어짐", text: "고래가 없어졌는데 옳음과 마음이 끌리는 것 사이에서 기쁘게 결정했다" },
  { id: "whale", ctx: "고래가 배를 뒤엎는 것을 봄", text: "고래가 배를 뒤엎는 것을 보았는데 재앙의 소용돌이에 휘말렸다" },
  { id: "whalebone", ctx: "고래수염을 보거나 다룸", text: "고래수염을 보았는데 굳건한 이익을 줄 동맹을 맺었다" },
  { id: "wheat", ctx: "너른 밀밭에 밀이 자라는 것을 봄", text: "너른 밀밭에 밀이 자라는 것을 보았는데 관심사가 고무적인 전망을 갖게 되었다" },
  { id: "wheat", ctx: "밀이 여묾", text: "밀이 여물었는데 재물이 확실해졌다" },
  { id: "wheat", ctx: "굵고 맑은 밀알이 탈곡기를 지나가는 것을 봄", text: "굵고 맑은 밀알이 탈곡기를 지나가는 것을 보았는데 번영이 활짝 문을 열었다" },
  { id: "wheat", ctx: "밀을 자루나 통에 담아 둠을 봄", text: "밀을 자루나 통에 담아 둔 것을 보았는데 성공의 정점에 이르려는 결심이 승리로 이루어졌다" },
  { id: "wheat", ctx: "곳간이 잘 덮이지 않아 밀이 젖는 것을 봄", text: "곳간이 잘 덮이지 않아 밀이 젖는 것을 보았는데 적의 손에 이익이 줄었다" },
  { id: "wheat", ctx: "이삭에서 밀을 비벼 손에 담아 먹음", text: "이삭에서 밀을 비벼 손에 담아 먹었는데 힘써 애써 성공했다" },
  { id: "wheat", ctx: "밀로 덮인 가파른 언덕을 밀줄기를 잡고 오름", text: "밀로 덮인 가파른 언덕을 밀줄기를 잡고 올랐는데 큰 번영을 누렸다" },
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
