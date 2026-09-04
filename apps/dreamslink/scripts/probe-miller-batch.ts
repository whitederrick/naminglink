// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 237 — Sausage·Saw·Sawdust·Scabbard·Scaffold)
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
  { id: "sausage", ctx: "소시지를 만듦", text: "소시지를 만들었다" },
  { id: "sausage", ctx: "소시지를 먹음", text: "소시지를 먹었다" },
  { id: "saw", ctx: "톱을 손으로 사용함", text: "톱을 손으로 사용했다" },
  { id: "saw", ctx: "기계 속 큰 톱들을 봄", text: "기계 속 큰 톱들을 보았다" },
  { id: "saw", ctx: "여성이 기계 속 큰 톱들을 봄", text: "여성이 기계 속 큰 톱들을 보았다" },
  { id: "saw", ctx: "녹슬거나 부러진 톱을 봄", text: "녹슬거나 부러진 톱을 보았다" },
  { id: "saw", ctx: "톱을 잃어버림", text: "톱을 잃어버렸다" },
  { id: "saw", ctx: "톱질 소리를 들음", text: "톱질 소리를 들었다" },
  { id: "saw", ctx: "녹슨 톱을 찾음", text: "녹슨 톱을 찾았다" },
  { id: "saw", ctx: "등에 톱을 짐", text: "등에 톱을 졌다" },
  { id: "sawdust", ctx: "톱밥 꿈을 꿈", text: "톱밥 꿈을 꾸었다" },
  { id: "scabbard", ctx: "칼집 꿈을 꿈", text: "칼집 꿈을 꾸었다" },
  { id: "scabbard", ctx: "제 칼집이 어디 있는지 궁금해함", text: "제 칼집이 어디 있는지 궁금해했다" },
  { id: "gallows", ctx: "처형대 꿈을 꿈", text: "처형대 꿈을 꾸었다" },
  { id: "gallows", ctx: "처형대에 오름", text: "처형대에 올라 오해받고 비난받았다" },
  { id: "gallows", ctx: "처형대에서 내려감", text: "처형대에서 내려갔다" },
  // 지킴 — 이번 배치가 건드린 기존 상징(saw·gallows)의 옛 답이 그대로인가
  { id: "saw", ctx: "톱을 봄", text: "톱을 보았다" },
  { id: "gallows", ctx: "벗이 교수대에 오른 것을 봄", text: "벗이 교수대에 오른 것을 보았다" },
  { id: "gallows", ctx: "제가 교수대에 오름", text: "내가 교수대에 올랐다" },
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
