// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 274 — Tongue~Tornado. 새 상징 넷(tongue·
// tooth-picks·topaz·tops)을 세우고, 기존 둘(teeth·firebrand)에 문맥을
// 나눠 붙였다. Toothless(이가 하나도 없는 상태)는 teeth의 기존 열다섯
// 의미와 안 겹치는 새 그림이라 붙임. Torch는 firebrand가 이미 「횃불」을
// 쥐고 있어 병합 — 막연한 첫 문장(횃불을 봄)은 firebrand 기본값과 같은
// 그림이라 건너뜀. Tornado는 통째로 건너뜀(hurricane과 같은 그림, 원문
// 각주도 Hurricane을 가리킴). Tops 셋째 문장도 첫 문장과 거의 같은
// 그림이라 건너뜀(밀러 원문 자체의 되풀이).
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
  // ── 배치 274 새 문맥 (14건) ────────────────────────────────────────────
  { id: "tongue", ctx: "제 혀를 봄", text: "제 혀를 보았다" },
  { id: "tongue", ctx: "남의 혀를 봄", text: "남의 혀를 보았다" },
  { id: "tongue", ctx: "제 혀에 무슨 이상이 생김", text: "제 혀에 무슨 이상이 생겼다" },
  { id: "teeth", ctx: "이가 하나도 없음", text: "이가 하나도 없었다" },
  { id: "teeth", ctx: "남이 이가 하나도 없음을 봄", text: "남이 이가 하나도 없는 것을 보았다" },
  { id: "tooth-picks", ctx: "이쑤시개 꿈을 꿈", text: "이쑤시개 꿈을 꾸었다" },
  { id: "tooth-picks", ctx: "이쑤시개를 씀", text: "이쑤시개를 사용했다" },
  { id: "topaz", ctx: "토파즈를 봄", text: "토파즈를 보았다" },
  { id: "topaz", ctx: "여성이 토파즈 장신구를 잃어버림", text: "여성이 토파즈 장신구를 잃어버렸다" },
  { id: "topaz", ctx: "친척이 아닌 남에게서 토파즈를 받음", text: "친척이 아닌 남에게서 토파즈를 받았다" },
  { id: "tops", ctx: "팽이 꿈을 꿈", text: "팽이 꿈을 꾸었다" },
  { id: "tops", ctx: "팽이가 도는 것을 봄", text: "팽이가 도는 것을 보았다" },
  { id: "firebrand", ctx: "횃불을 들고 다님", text: "횃불을 들고 다녔다" },
  { id: "firebrand", ctx: "횃불이 꺼짐", text: "횃불이 꺼졌다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징들의 옛 답이 그대로인지 ────────
  { id: "teeth", ctx: "이가 저절로 빠짐", text: "이가 저절로 빠졌다" },
  { id: "firebrand", ctx: "불붙은 나뭇가지를 봄", text: "불붙은 나뭇가지를 보았다" },
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
