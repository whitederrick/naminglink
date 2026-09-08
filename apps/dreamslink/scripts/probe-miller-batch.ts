// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 296 — Walking~Wallet(새 20판 묶음의 9/20). 새 상징
// 둘(walking·walking-stick), 기존 pocketbook(지갑)에 문맥을 나눠 붙였다.
// Wallet은 pocketbook이 이미 term_ko "지갑"을 쥐고 있어 합쳤다. Walking은
// 각주 [239] See Wading가 있었지만 실제 그림(가시밭길·밤길)이 배치 293의
// Wading(물속을 걺, bathing에 합침)과 전혀 달라 새 상징으로 세웠다.
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
  // ── 배치 296 새 문맥 (9건) ─────────────────────────────────────────────
  { id: "walking", ctx: "가시덤불에 얽힌 험한 길을 걸음", text: "가시덤불에 얽힌 험한 길을 걸었는데 사업이 얽혀 몹시 괴로웠다" },
  { id: "walking", ctx: "쾌적한 곳을 걸음", text: "쾌적한 곳을 걸었는데 행운과 은혜를 누렸다" },
  { id: "walking", ctx: "밤에 걸음", text: "밤에 걸었는데 불행한 일이 닥쳤다" },
  { id: "walking", ctx: "젊은 여성이 꿈속에서 빠르게 걷고 있음", text: "젊은 여성이 꿈속에서 빠르게 걷고 있었는데 재산을 물려받았다" },
  { id: "walking-stick", ctx: "지팡이를 봄", text: "지팡이를 보았는데 계약에서 낭패를 보았다" },
  { id: "walking-stick", ctx: "지팡이를 짚고 걸음", text: "지팡이를 짚고 걸었는데 남의 조언에 기댔다" },
  { id: "walking-stick", ctx: "멋진 지팡이에 감탄함", text: "멋진 지팡이에 감탄했는데 남에게 이익을 맡겼다" },
  { id: "pocketbook", ctx: "지갑을 봄", text: "그냥 지갑을 보았는데 유쾌한 부담이 생겼다" },
  { id: "pocketbook", ctx: "낡거나 더러운 지갑을 봄", text: "낡고 더러운 지갑을 보았는데 좋지 않은 결과를 얻었다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────
  { id: "pocketbook", ctx: "돈과 지폐가 든 지갑을 찾아냄", text: "돈과 지폐가 든 지갑을 찾아냈는데 운이 좋았다" },
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
