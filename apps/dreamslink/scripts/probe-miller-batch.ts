// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 294 — Wagon(새 20판 묶음의 7/20). 표제어 하나뿐
// (문맥 아홉)이라 단독 배치로 뗐다. 기존 wagon(짐수레) 상징은 배치 32의
// Driving 표제어에서 "짐수레를 몲" 하나만으로 세워졌었는데, 밀러 원
// Wagon 표제어의 아홉 문맥이 term_en이 똑같아 자연히 합쳐졌다.
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
  // ── 배치 294 새 문맥 (9건) ─────────────────────────────────────────────
  { id: "wagon", ctx: "짐수레 꿈을 꿈", text: "짐수레 꿈을 꾸었는데 불행한 배필을 만났다" },
  { id: "wagon", ctx: "짐수레를 몰고 언덕을 내려감", text: "짐수레를 몰고 내리막을 내려갔는데 불안한 일이 생겼다" },
  { id: "wagon", ctx: "짐수레를 몰고 언덕을 올라감", text: "짐수레를 몰고 오르막을 올라갔는데 세속의 일이 나아졌다" },
  { id: "wagon", ctx: "짐을 가득 실은 짐수레를 몲", text: "짐을 가득 실은 짐수레를 몰았는데 의무가 저를 붙들어 두었다" },
  { id: "wagon", ctx: "흐린 물속으로 짐수레를 몲", text: "흐린 물속으로 짐수레를 몰았는데 불행의 소용돌이에 빠졌다" },
  { id: "wagon", ctx: "포장을 씌운 짐수레를 봄", text: "포장을 씌운 짐수레를 보았는데 알 수 없는 배신에 둘러싸였다" },
  { id: "wagon", ctx: "젊은 여성이 위험한 둑 근처에서 짐수레를 몲", text: "젊은 여성이 위험한 제방 근처에서 짐수레를 몰았는데 부적절한 얽힘에 빠졌다" },
  { id: "wagon", ctx: "맑은 개울을 가로질러 짐수레를 몲", text: "맑은 개울을 가로질러 짐수레를 몰았는데 불명예 없이 모험을 즐겼다" },
  { id: "wagon", ctx: "부서진 짐수레를 봄", text: "부서진 짐수레를 보았는데 고통과 실패가 나타났다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────
  { id: "wagon", ctx: "짐수레를 몲", text: "짐수레를 몰았다" },
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
