// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 261 — 새 상징 여섯(strawberries·street·
// street-poster·struggling·stumble·stumps)을 세우고, 기존 nursing·
// smoke 둘에 문맥을 보탰다. Suckle·Suffocating 은 원문 각주가 각각
// "See Nursing"·"See Smoke"로 가리켜 그대로 따랐다 — Suffocating은
// 본문에 "연기"가 안 나오지만 smoke 에 "질식"·"숨이 막히는" 별칭을
// 더해 걸리게 했다. struggling(몸부림)이 기존 agony(고통)의 별칭
// "몸부림"과, street(EN)가 road(길)의 EN 별칭 "street"와 겹치지만
// 둘 다 진짜 동의어 관계라 그대로 뒀다(참고 목록에만 남고 하드
// 실패는 아니다).
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
  // ── 배치 261 새 문맥 (16건) ──────────────────────────────────────────────
  { id: "strawberries", ctx: "딸기 꿈을 꿈", text: "딸기 꿈을 꾸었다" },
  { id: "strawberries", ctx: "딸기를 먹음", text: "딸기를 먹었다" },
  { id: "strawberries", ctx: "딸기를 거래함", text: "딸기를 거래했다" },
  { id: "street", ctx: "거리를 걸음", text: "거리를 걸었다" },
  { id: "street", ctx: "낯선 도시의 낯익은 거리가 어둡게 보임", text: "낯선 도시의 어둡게 보이는 거리에 있었다" },
  { id: "street", ctx: "거리가 환하게 불 밝혀져 있음", text: "거리가 환하게 밝혀져 있었다" },
  { id: "street", ctx: "거리를 지나며 불량배가 덮칠까 겁냄", text: "거리를 지나며 불량배가 덮칠까 겁냈다" },
  { id: "street-poster", ctx: "스스로 거리 벽보 붙이는 사람이 됨", text: "스스로 거리 벽보 붙이는 사람이 되었다" },
  { id: "street-poster", ctx: "거리 벽보 붙이는 사람이 일하는 것을 봄", text: "거리 벽보 붙이는 사람이 일하는 것을 보았다" },
  { id: "struggling", ctx: "몸부림치는 꿈을 꿈", text: "몸부림치는 꿈을 꾸었다" },
  { id: "stumble", ctx: "걷거나 뛰다가 걸려 넘어질 뻔함", text: "걷다가 걸려 넘어질 뻔했다" },
  { id: "stumps", ctx: "그루터기 꿈을 꿈", text: "그루터기 꿈을 꾸었다" },
  { id: "stumps", ctx: "그루터기로 가득한 들판을 봄", text: "그루터기로 가득한 들판을 보았다" },
  { id: "stumps", ctx: "그루터기를 파거나 뽑아냄", text: "그루터기를 파거나 뽑아냈다" },
  { id: "nursing", ctx: "새끼(아기)가 젖을 먹는 것을 봄", text: "새끼가 젖을 먹는 것을 보았다" },
  { id: "smoke", ctx: "스스로 숨이 막히는 느낌을 받음", text: "스스로 숨이 막히는 느낌을 받았다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징(nursing·smoke)의 옛 답이 그대로인지 ──
  { id: "nursing", ctx: "여성이 제 아기에게 젖을 물림", text: "여성이 제 아기에게 젖을 물렸다" },
  { id: "nursing", ctx: "처녀가 아기에게 젖을 물림", text: "처녀가 아기에게 젖을 물렸다" },
  { id: "smoke", ctx: "연기 꿈을 꿈", text: "연기 꿈을 꾸었다" },
  { id: "smoke", ctx: "연기에 휩싸임", text: "연기에 휩싸였다" },
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
