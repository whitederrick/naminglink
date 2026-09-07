// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 279 — Truss~Turf. 새 상징 셋(trusts·tub·tunnel)과
// 하나 더(racetrack), 기존 rupture(탈장)·fall(추락)에 문맥을 나눠 붙임.
// Truss는 이름 「탈장대」가 「탈장」을 품어(§25 곁가지) rupture에 합침.
// Tumble은 fall이 이미 별칭 「굴러떨어」를 쥐고 있어 그쪽에 합침. Turf의
// 둘째 문장(푸른 잔디를 봄)은 기존 grass 「푸른 풀밭을 봄」과 같은
// 그림이라 §31로 건너뜀 — 첫 문장(경마장)만 새 상징으로 세움. fall은
// m279가 기존 추락 출처(m32)보다 사전순으로 앞서 기본값이 바뀔 뻔했으나
// 옛 답을 그대로 얼렸다.
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
  // ── 배치 279 새 문맥 (14건) ────────────────────────────────────────────
  { id: "rupture", ctx: "탈장대(지지대)를 봄", text: "탈장대를 보았다" },
  { id: "trusts", ctx: "트러스트 꿈을 꿈", text: "트러스트 꿈을 꾸었다" },
  { id: "trusts", ctx: "스스로 트러스트의 일원이라 여김", text: "스스로 트러스트의 일원이라 여겼다" },
  { id: "tub", ctx: "물이 가득 찬 목욕통을 봄", text: "물이 가득 찬 목욕통을 보았다" },
  { id: "tub", ctx: "빈 목욕통을 봄", text: "목욕통이 비어 있었다" },
  { id: "tub", ctx: "부서진 목욕통을 봄", text: "부서진 목욕통을 보았다" },
  { id: "fall", ctx: "무언가에서 굴러떨어짐", text: "무언가에서 굴러떨어졌다" },
  { id: "fall", ctx: "남이 굴러떨어지는 것을 봄", text: "남이 굴러떨어지는 것을 보았다" },
  { id: "tunnel", ctx: "터널을 지나감", text: "터널을 지나갔다" },
  { id: "tunnel", ctx: "터널 안에서 기차가 다가오는 것을 봄", text: "터널 안에서 기차가 다가오는 것을 보았다" },
  { id: "tunnel", ctx: "차를 타고 터널을 지나감", text: "차를 타고 터널을 지나갔다" },
  { id: "tunnel", ctx: "터널이 무너져 내리는 것을 봄", text: "터널이 무너져 내리는 것을 보았다" },
  { id: "tunnel", ctx: "터널 안을 들여다봄", text: "터널 안을 들여다보았다" },
  { id: "racetrack", ctx: "경마장 꿈을 꿈", text: "경마장 꿈을 꾸었다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────
  { id: "rupture", ctx: "자신이 탈장됨", text: "내가 탈장되었다" },
  { id: "fall", ctx: "떨어져 몹시 놀람", text: "떨어져 몹시 놀랐다" },
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
