// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 285 — Vaccinate~Varnishing. 새 상징 여섯(vaccinate·
// vagrant·valentine·valley·vapor-bath·varnishing). Vagrant는 기존
// beggar(거지)가 영어 별칭 "a vagrant"를 쥐고 있었으나 개념이 달라(구걸
// vs 떠돎) 새 상징을 세우고 그 별칭을 beggar에서 회수했다. beggar의
// 「거지에게 적선함」(흉)과 Vagrant의 「부랑자에게 베풂」(길)이 같은
// 그림에 정반대 극성인데, 서로 다른 헤드워드(Beggar vs Vagrant)의 각자
// 판단이라 §31 건너뛰기 대상으로 보지 않고 둘 다 남겼다 — 다른 상징
// 이름이라 discriminator 충돌도 없다.
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
  // ── 배치 285 새 문맥 (15건) ────────────────────────────────────────────
  { id: "vaccinate", ctx: "스스로 예방접종을 받음", text: "스스로 예방접종을 받았다" },
  { id: "vaccinate", ctx: "남들이 예방접종을 받는 것을 봄", text: "남들이 예방접종을 받는 것을 보았다" },
  { id: "vaccinate", ctx: "처녀가 다리에 예방접종을 받음", text: "처녀가 다리에 예방접종을 받았다" },
  { id: "vagrant", ctx: "스스로 부랑자임을 봄", text: "스스로 부랑자임을 보았다" },
  { id: "vagrant", ctx: "부랑자들을 봄", text: "부랑자들을 보았다" },
  { id: "vagrant", ctx: "부랑자에게 베풂", text: "부랑자에게 베풀었다" },
  { id: "valentine", ctx: "발렌타인 카드를 보냄", text: "발렌타인 카드를 보냈다" },
  { id: "valentine", ctx: "처녀가 발렌타인 카드를 받음", text: "처녀가 발렌타인 카드를 받았다" },
  { id: "valley", ctx: "푸르고 아늑한 계곡을 걸음", text: "푸르고 아늑한 계곡을 걸었다" },
  { id: "valley", ctx: "메마른 계곡을 걸음", text: "메마른 계곡을 걸었다" },
  { id: "valley", ctx: "질척한 계곡을 걸음", text: "질척한 계곡을 걸었다" },
  { id: "vapor-bath", ctx: "증기욕 꿈을 꿈", text: "증기욕 꿈을 꾸었다" },
  { id: "vapor-bath", ctx: "증기욕에서 나옴", text: "증기욕에서 나왔다" },
  { id: "varnishing", ctx: "스스로 무언가에 니스칠을 함", text: "스스로 무언가에 니스칠을 했다" },
  { id: "varnishing", ctx: "남들이 니스칠을 하는 것을 봄", text: "남들이 니스칠을 하는 것을 보았다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────
  { id: "beggar", ctx: "거지에게 적선함", text: "거지에게 적선했다" },
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
