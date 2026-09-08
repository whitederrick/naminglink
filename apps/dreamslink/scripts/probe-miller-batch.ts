// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 304 — Way~Weather(새 20판 묶음의 17/20). Way는
// 각주 [242] See Road and Path 그대로, 기존 road의 「길을 잃음」과
// 같은 그림이라 §31로 건너뜀. Wealth는 첫 문장이 기존 「재물을 가짐」
// (Riches)과 그림이 거의 같아 §31로 건너뛰고 나머지 둘만 wealth에
// 합쳤다. 새 상징 둘(weasel·weather).
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
  // ── 배치 304 새 문맥 (8건) ─────────────────────────────────────────────
  { id: "wealth", ctx: "남이 부유함을 봄", text: "남이 부유함을 보았는데 위태로운 때에 구해 줄 벗이 있었다" },
  { id: "wealth", ctx: "젊은 여성이 부유한 사람들과 어울림", text: "젊은 여성이 부유한 사람들과 어울렸는데 높은 포부를 품었다" },
  { id: "weasel", ctx: "약탈을 노리는 족제비를 봄", text: "약탈을 노리는 족제비를 보았는데 예전의 적을 조심해야 했다" },
  { id: "weasel", ctx: "족제비를 없앰", text: "족제비를 없앴는데 자신을 무너뜨리려던 계략을 좌절시켰다" },
  { id: "weather", ctx: "날씨 꿈을 꿈", text: "날씨 꿈을 꾸었는데 운이 오르내렸다" },
  { id: "weather", ctx: "기상청 보고서를 읽는다고 여김", text: "기상청 보고서를 읽는다고 여겼는데 거처를 옮기고 득을 보았다" },
  { id: "weather", ctx: "날씨 마녀를 봄", text: "날씨 마녀를 보았는데 가정에 불쾌한 일이 있었다" },
  { id: "weather", ctx: "날씨 마녀들이 날씨를 부리는 것을 봄", text: "날씨 마녀들이 날씨를 부리는 것을 보았는데 집안에 다툼이 있었다" },

  // ── 지킴 케이스 — wealth·road가 여전히 옛 답대로 걸리는지 ──
  { id: "wealth", ctx: "재물을 가짐", text: "재물을 가졌는데 노력과 정성으로 높은 자리에 올랐다" },
  { id: "road", ctx: "길을 잃음", text: "길을 잃었는데 사업이 실패할 뻔했다" },
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
