// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 257 — 기존 barn·deer·coach·ascend·horse 다섯에
// 문맥을 보태고, 새 상징 셋(stain·stall·stammer)을 세웠다. deer의 Stag는
// 기존 「사슴 꿈을 꿈」과 같은 work·같은 그림이라 인용만 포갰다(새 문맥
// 아님). barn은 밀러 Stable 첫 문장이 조건 없는 가장 넓은 그림이라
// 기본값을 바꿨고, ascend·horse는 옛 값 그대로 얼렸다. horse는 이미
// 의미 62개라 "stallion"·"climbing" 같은 낱말이 이미 aliases_en로
// 쥐여 있어 판별어로 못 쓴다는 것을 이번에 다시 확인했다)
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
  // ── 배치 257 새 문맥 (18건, Stag는 기존 「사슴 꿈을 꿈」에 인용만 포개져 지킴 케이스로 대신함) ──
  { id: "barn", ctx: "마구간(축사) 꿈을 꿈", text: "마구간 꿈을 꾸었다" },
  { id: "barn", ctx: "축사가 불타는 것을 봄", text: "축사가 불타는 것을 보았다" },
  { id: "coach", ctx: "마부를 봄", text: "마부를 보았다" },
  { id: "stain", ctx: "손이나 옷에 얼룩이 묻음", text: "손에 얼룩이 묻었다" },
  { id: "stain", ctx: "남의 옷이나 살에 묻은 얼룩을 봄", text: "남의 옷에 묻은 얼룩을 보았다" },
  { id: "ascend", ctx: "계단을 오름", text: "계단을 올라갔다" },
  { id: "ascend", ctx: "계단에서 떨어짐", text: "계단에서 떨어졌다" },
  { id: "ascend", ctx: "계단을 걸어 내려감", text: "계단을 걸어서 내려갔다" },
  { id: "ascend", ctx: "넓고 근사한 계단을 봄", text: "넓고 근사한 계단을 보았다" },
  { id: "ascend", ctx: "남들이 계단을 내려가는 것을 봄", text: "남들이 계단을 내려가는 것을 보았다" },
  { id: "ascend", ctx: "계단 층계에 앉음", text: "계단 층계에 앉았다" },
  { id: "stall", ctx: "축사 칸(마구간 칸막이) 꿈을 꿈", text: "축사 칸을 보는 꿈을 꾸었다" },
  { id: "horse", ctx: "멋진 종마를 탐", text: "멋진 종마를 탔다" },
  { id: "horse", ctx: "광견병에 걸린 종마를 봄", text: "광견병에 걸린 종마를 보았다" },
  { id: "stammer", ctx: "스스로 말을 더듬음", text: "스스로 말을 더듬었다" },
  { id: "stammer", ctx: "남이 말을 더듬는 것을 들음", text: "남이 말을 더듬는 것을 들었다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ──────────────
  { id: "deer", ctx: "사슴 꿈을 꿈", text: "사슴 꿈을 꾸었다" },
  { id: "coach", ctx: "역마차를 타고 감", text: "역마차를 타고 갔다" },
  { id: "coach", ctx: "역마차를 몲", text: "역마차를 몰았다" },
  { id: "barn", ctx: "잘 익은 곡식과 완벽한 옥수수 이삭, 살진 가축들로 가득 찬 헛간을 봄", text: "잘 익은 곡식과 살진 가축들로 가득 찬 헛간을 보았다" },
  { id: "barn", ctx: "텅 빈 헛간을 봄", text: "헛간이 텅 비어 있었다" },
  { id: "ascend", ctx: "비틀거리지 않고 계단 꼭대기까지 오름", text: "비틀거리지 않고 계단 꼭대기까지 올라갔다" },
  { id: "ascend", ctx: "오르는 도중에 비틀거림", text: "계단을 오르는 도중에 비틀거렸다" },
  { id: "horse", ctx: "훌륭한 씨수말을 봄", text: "훌륭한 씨수말을 보았다" },
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
