// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 269 — 밀러 Teeth 하나만 단독으로 다룬 배치(19문장으로
// 가장 긴 표제어라 horse류처럼 단독으로 뗌). 새 상징 없이 전부 기존
// teeth(이)에 붙였다. 열셋을 새로 넣고 여섯은 건너뛰었다 — 「이 꿈을 꿈」
// (너무 막연해 기본값과 못 가름) · 「이가 흔들림」(기존 「이가 저절로
// 빠짐」의 판별어가 이미 「흔들리」를 쥠) · 「이를 닦거나 씻음」(기존
// brushing-teeth 「이를 닦음」과 같은 그림) · 「이를 잃음」(기존 「이가
// 저절로 빠짐」과 같은 그림) · 「하나·둘·셋 빠짐」(개수를 띄어 적으면
// 1글자로 쪼개져 판별 불가) · 「썩은 이를 스스로 뽑음」(「이가 모두
// 빠짐」과 같은 결과라는 각주 문장). teeth 는 기본값을 있던 대로
// FALLBACK_FIRST 로 얼렸다(「이가 저절로 빠짐」).
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
  // ── 배치 269 새 문맥 (13건, 전부 기존 teeth 에 붙임) ──────────────────
  { id: "teeth", ctx: "의사가 이를 뽑아 줌", text: "의사가 내 이를 뽑아 주었다" },
  { id: "teeth", ctx: "이를 때움", text: "이를 때웠다" },
  { id: "teeth", ctx: "틀니를 해 넣음", text: "틀니를 해 넣었다" },
  { id: "teeth", ctx: "이가 얻어맞아 빠짐", text: "이가 얻어맞아 빠졌다" },
  { id: "teeth", ctx: "이를 살펴봄", text: "이를 살펴보았다" },
  { id: "teeth", ctx: "이가 썩어 들쭉날쭉함을 봄", text: "이가 썩어 들쭉날쭉해 보였다" },
  { id: "teeth", ctx: "이를 뱉어냄", text: "이를 뱉어냈다" },
  { id: "teeth", ctx: "이가 온전치 않음을 봄", text: "이가 온전치 않았다" },
  { id: "teeth", ctx: "이가 모두 빠짐", text: "이가 모두 빠졌다" },
  { id: "teeth", ctx: "치석이 떨어져 이가 희고 온전해짐을 봄", text: "치석이 떨어져 이가 희고 온전해졌다" },
  { id: "teeth", ctx: "희고 아름다운 이를 스스로 대견해함", text: "희고 아름다운 이를 스스로 대견해했다" },
  { id: "teeth", ctx: "이를 뽑아 잃어버리고 찾지 못해 수수께끼로 남음", text: "이를 뽑아 잃어버렸는데 온통 수수께끼로 남았다" },
  { id: "teeth", ctx: "치과의사가 이를 완벽히 닦아 주었는데 다음날 녹슬어 있음을 봄", text: "치과의사가 이를 완벽히 닦아 주었는데 다음날 녹슬어 있었다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징(teeth)의 옛 답이 그대로인지 ────
  { id: "teeth", ctx: "이가 저절로 빠짐", text: "이가 저절로 빠졌다" },
  { id: "teeth", ctx: "빠진 이가 다시 남", text: "빠진 이가 다시 났다" },
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
