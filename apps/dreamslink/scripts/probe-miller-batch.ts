// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 286 — Vase~Vehicle. 새 상징 셋(vase·vat·vatican),
// 기존 grave(무덤)·cash-box(금고)·vegetables(채소)·carriage(마차)에
// 문맥을 나눠 붙임. 밀러가 Vault 한 표제어에 두 뜻(납골 무덤 vs 귀중품
// 금고)을 섞어 써서 첫 문장은 grave에, 나머지 둘은 cash-box에 나눴다 —
// 첫 문장을 cash-box에 넣으면 기존 「금고를 봄」(안전, 길조)과 같은
// 그림에 정반대 극성이라 grave 쪽으로 돌렸다. Vehicle의 첫 문장(탈것을
// 타고 있음)은 기존 carriage 「마차를 타고 감」과 같은 그림이라 §31로
// 건너뜀. vegetables는 m286이 기존 채소 출처(zhougong)보다 사전순으로
// 앞서 기본값이 바뀔 뻔했으나 서로 다른 문헌의 다른 판단이라 있던
// 주공해몽 답을 그대로 얼렸다.
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
  // ── 배치 286 새 문맥 (16건) ────────────────────────────────────────────
  { id: "vase", ctx: "꽃병 꿈을 꿈", text: "꽃병 꿈을 꾸었다" },
  { id: "vase", ctx: "꽃병으로 마심", text: "꽃병으로 마셨다" },
  { id: "vase", ctx: "깨진 꽃병을 봄", text: "깨진 꽃병을 보았다" },
  { id: "vase", ctx: "처녀가 꽃병을 받음", text: "처녀가 꽃병을 받았다" },
  { id: "vat", ctx: "큰 통 꿈을 꿈", text: "큰 통 꿈을 꾸었다" },
  { id: "vatican", ctx: "바티칸 꿈을 꿈", text: "바티칸 꿈을 꾸었다" },
  { id: "grave", ctx: "납골 무덤 꿈을 꿈", text: "납골 무덤 꿈을 꾸었는데 사별의 슬픔을 느꼈다" },
  { id: "cash-box", ctx: "귀중품을 넣어 두는 금고를 봄", text: "귀중품을 넣어 두는 금고를 보았다" },
  { id: "cash-box", ctx: "금고 문이 열려 있음", text: "금고 문이 열려 있었다" },
  { id: "vegetables", ctx: "채소를 먹음", text: "채소를 먹었다" },
  { id: "vegetables", ctx: "시들거나 썩은 채소를 봄", text: "시들고 썩은 채소를 보았다" },
  { id: "vegetables", ctx: "처녀가 저녁상에 낼 채소를 손질함", text: "처녀가 저녁상에 낼 채소를 손질했다" },
  { id: "carriage", ctx: "마차에서 떨어짐", text: "마차에서 떨어졌다" },
  { id: "carriage", ctx: "부서진 마차를 봄", text: "부서진 마차를 보았다" },
  { id: "carriage", ctx: "마차를 삼", text: "마차를 샀다" },
  { id: "carriage", ctx: "마차를 팖", text: "마차를 팔았다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────
  { id: "vegetables", ctx: "채소를 심음", text: "채소를 심었다" },
  { id: "cash-box", ctx: "금고를 열려고 애씀", text: "금고를 열려고 애썼다" },
  { id: "carriage", ctx: "마차를 타고 감", text: "마차를 타고 갔다" },
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
