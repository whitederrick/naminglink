// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 298 — Walnut~War(새 20판 묶음의 11/20). 새 상징
// 넷(walnut·waltz·want·war). want는 "궁핍"이 poverty·scarcity·adversity
// 셋이 이미 나눠 쥔 낱말이라 피하고 "결핍"으로 세웠다. war는 기존
// battle(전투)의 별칭에 있던 bare "전쟁"을 회수해 받았다 — 전투는 한 번의
// 교전, 전쟁은 국가 간 분쟁 상태로 개념이 다르다.
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
  // ── 배치 298 새 문맥 (15건) ────────────────────────────────────────────
  { id: "walnut", ctx: "호두 꿈을 꿈", text: "호두 꿈을 꾸었는데 풍성한 기쁨을 얻었다" },
  { id: "walnut", ctx: "썩은 호두를 깸", text: "썩은 호두를 깼는데 기대가 씁쓸하게 무너졌다" },
  { id: "walnut", ctx: "젊은 여성이 손에 호두 얼룩이 묻어 있음을 봄", text: "젊은 여성이 손에 호두 얼룩이 묻어 있음을 보았는데 연인의 마음이 다른 이에게 옮겨 갔다" },
  { id: "waltz", ctx: "왈츠 추는 것을 봄", text: "왈츠 추는 것을 보았는데 유쾌한 사람과 관계를 맺었다" },
  { id: "waltz", ctx: "젊은 여성이 연인과 왈츠를 춤", text: "젊은 여성이 연인과 왈츠를 추었는데 큰 찬사를 받았다" },
  { id: "waltz", ctx: "젊은 여성이 연인이 라이벌과 왈츠 추는 것을 봄", text: "젊은 여성이 연인이 라이벌과 왈츠 추는 것을 보았는데 전략으로 장애를 이겨냈다" },
  { id: "waltz", ctx: "젊은 여성이 다른 여자와 왈츠를 춤", text: "젊은 여성이 다른 여자와 왈츠를 추었는데 미덕으로 사랑받았다" },
  { id: "waltz", ctx: "젊은 여성이 사람들이 취한 듯 빙글빙글 도는 왈츠를 봄", text: "젊은 여성이 사람들이 취한 듯 빙글빙글 도는 왈츠를 보았는데 욕망에 깊이 휩싸였다" },
  { id: "want", ctx: "스스로 결핍한 처지에 있음을 봄", text: "스스로 결핍한 처지에 있음을 보았는데 삶의 현실을 저버렸다" },
  { id: "want", ctx: "결핍한 처지에서도 만족함", text: "결핍한 처지에서도 만족했는데 불행을 담대히 견뎠다" },
  { id: "want", ctx: "남의 결핍을 덜어 줌", text: "남의 결핍을 덜어 주었는데 사심 없는 친절로 존경받았다" },
  { id: "war", ctx: "전쟁 꿈을 꿈", text: "전쟁 꿈을 꾸었는데 사업에 불리한 상황이 생겼다" },
  { id: "war", ctx: "젊은 여성이 연인이 전쟁에 나감을 봄", text: "젊은 여성이 연인이 전쟁에 나감을 보았는데 해로운 소식을 들었다" },
  { id: "war", ctx: "제 나라가 전쟁에서 패함을 봄", text: "제 나라가 전쟁에서 패함을 보았는데 정치적 격변을 겪었다" },
  { id: "war", ctx: "전쟁의 승리를 봄", text: "전쟁의 승리를 보았는데 사업에 활기가 돌았다" },

  // ── 지킴 케이스 — battle에서 "전쟁" 별칭을 회수했으니 "전투"로도 여전히 걸리는지 ──
  { id: "battle", ctx: "전투 꿈을 꿈", text: "전투 꿈을 꾸었는데 어려움과 씨름했다" },
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
