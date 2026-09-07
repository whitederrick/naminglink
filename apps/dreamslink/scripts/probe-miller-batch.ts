// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 268 — 다음 20판 묶음(268~287)의 첫 배치. 새
// 상징 셋(tea·teakettle·teasing)을 세우고, 기존 cup(잔)에 문맥
// 2개를 보탰다("찻잔"이 이미 별칭이었다). Teacups 둘째 문장(깨짐)은
// 기존 cup 「잔이 깨짐」(zhougong)과, Tears 두 문장은 각각 기존
// weeping 「우는 꿈을 꿈」·「남이 우는 것을 봄」(둘 다 밀러 Crying)과
// 같은 그림·다른 풀이라 건너뛰었다 — Tears 헤드워드는 결국 새 문맥을
// 하나도 못 얻었다. teakettle은 기존 jug(주전자)와 별칭이 겹치지
// 않도록 「찻주전자」로 이름을 갈랐다.
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
  // ── 배치 268 새 문맥 (13건) ──────────────────────────────────────────────
  { id: "tea", ctx: "스스로 차를 우림", text: "스스로 차를 우렸다" },
  { id: "tea", ctx: "벗들과 함께 차를 마심", text: "벗들과 함께 차를 마셨다" },
  { id: "tea", ctx: "찻잔에 남은 찌꺼기를 봄", text: "찻잔에 남은 찌꺼기를 보았다" },
  { id: "tea", ctx: "차를 쏟음", text: "차를 쏟았다" },
  { id: "tea", ctx: "찻잎 통이 비어 있는 것을 봄", text: "찻잎 통이 비어 있는 것을 보았다" },
  { id: "tea", ctx: "차를 애타게 마시고 싶어함", text: "차를 애타게 마시고 싶어했다" },
  { id: "cup", ctx: "찻잔 꿈을 꿈", text: "찻잔 꿈을 꾸었다" },
  { id: "cup", ctx: "찻잔으로 포도주를 마심", text: "찻잔으로 포도주를 마셨다" },
  { id: "teakettle", ctx: "찻주전자를 봄", text: "찻주전자를 보았다" },
  { id: "teakettle", ctx: "여성이 찻주전자에서 반짝이는 찬물을 따름", text: "여성이 찻주전자에서 반짝이는 찬물을 따랐다" },
  { id: "teasing", ctx: "스스로 남을 놀림", text: "스스로 남을 놀렸다" },
  { id: "teasing", ctx: "남에게 놀림을 당함", text: "남에게 놀림을 당했다" },
  { id: "teasing", ctx: "여성이 남에게 놀림을 당함", text: "여성이 남에게 놀림을 당했다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징(cup)의 옛 답이 그대로인지 ──────
  { id: "cup", ctx: "잔이 깨짐", text: "잔이 깨졌다" },
  { id: "cup", ctx: "은잔으로 물을 마심", text: "은잔으로 물을 마셨다" },
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
