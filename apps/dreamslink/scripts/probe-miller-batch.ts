// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 316 — Wine~Winter(새 20판 묶음의 9/20). 새 상징
// 넷(wine·wine-cellar·wine-glass·winter), 기존 wings(날개, zhougong
// 하나뿐이던 상징)에 문맥 둘을 나눠 붙였다 — 기본값이 「몸에 날개가
// 돋아 낢」에서 「자신에게 날개가 있음」으로 바뀌어 얼렸다.
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
  // ── 배치 316 새 문맥 (11건) ────────────────────────────────────────────
  { id: "wine", ctx: "포도주를 마심", text: "포도주를 마셨는데 오랜 벗과 우정이 깊어졌다" },
  { id: "wine", ctx: "포도주 병을 깨뜨림", text: "포도주 병을 깨뜨렸는데 사랑이 도를 넘어섰다" },
  { id: "wine", ctx: "포도주가 든 통을 봄", text: "포도주가 든 통을 보았는데 큰 사치를 누렸다" },
  { id: "wine", ctx: "포도주를 이 그릇에서 저 그릇으로 따름", text: "포도주를 이 그릇에서 저 그릇으로 따랐는데 여러 명소를 여행했다" },
  { id: "wine", ctx: "포도주를 다루는 일을 함", text: "포도주를 다루는 일을 했는데 벌이가 좋았다" },
  { id: "wine", ctx: "젊은 여성이 포도주를 마심", text: "젊은 여성이 포도주를 마셨는데 부유한 신사와 혼인했다" },
  { id: "wine-cellar", ctx: "포도주 저장고 꿈을 꿈", text: "포도주 저장고 꿈을 꾸었는데 훌륭한 즐거움이 찾아왔다" },
  { id: "wine-glass", ctx: "포도주잔을 봄", text: "포도주잔을 보았는데 실망스러운 일에 심각하게 영향을 받았다" },
  { id: "wings", ctx: "자신에게 날개가 있음", text: "자신에게 날개가 있었는데 먼 길 떠난 이의 안전이 걱정됐다" },
  { id: "wings", ctx: "날짐승이나 새의 날개를 봄", text: "새의 날개를 보았는데 역경을 이겨내고 부귀를 얻었다" },
  { id: "winter", ctx: "겨울 꿈을 꿈", text: "겨울 꿈을 꾸었는데 건강이 나빠지고 운이 풀리지 않았다" },

  // ── 지킴 케이스 — wings 기존 zhougong 답 · liquor(wine 별칭 회수 뒤)가 여전히 걸리는지 ──
  { id: "wings", ctx: "몸에 날개가 돋아 낢", text: "몸에 날개가 돋아났는데 크게 길했다" },
  { id: "liquor", ctx: "술에 취하도록 마심", text: "소주를 마셨는데 취했다" },
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
