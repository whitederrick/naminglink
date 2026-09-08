// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 307 — Wedding Clothes~Wedlock(새 20판 묶음의
// 20/20, 마지막). 새 상징 넷(wedding-clothes·wedding-ring·wedge·
// wedlock). wedlock은 "굴레"가 기존 bridle(말굴레)이 이미 bare
// "굴레를"·"굴레가"를 쥐고 있어 피하고 "혼인생활"로 세웠다 — 혼례
// (사건)와는 결이 달라 기존 wedding 상징에 합치지 않았다.
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
  // ── 배치 307 새 문맥 (10건) ────────────────────────────────────────────
  { id: "wedding-clothes", ctx: "혼례복을 봄", text: "혼례복을 보았는데 즐거운 일에 함께하고 새 벗을 만났다" },
  { id: "wedding-clothes", ctx: "혼례복이 더럽거나 흐트러져 있음을 봄", text: "혼례복이 더럽고 흐트러져 있는 것을 보았는데 존경하던 사람과 멀어졌다" },
  { id: "wedding-ring", ctx: "여성의 결혼반지가 밝고 빛남", text: "여성의 결혼반지가 밝고 빛났는데 근심과 부정에서 보호받았다" },
  { id: "wedding-ring", ctx: "결혼반지를 잃어버리거나 깨뜨림", text: "결혼반지를 잃어버렸는데 죽음과 뜻이 안 맞음으로 슬픔이 들었다" },
  { id: "wedding-ring", ctx: "벗이나 다른 사람의 손에서 결혼반지를 봄", text: "벗의 손에서 결혼반지를 보았는데 맹세를 가벼이 여겼다" },
  { id: "wedge", ctx: "쐐기 꿈을 꿈", text: "쐐기 꿈을 꾸었는데 사업 문제로 친척과 멀어졌다" },
  { id: "wedlock", ctx: "달갑잖은 혼인생활에 매여 있음을 봄", text: "달갑잖은 혼인생활에 매여 있음을 보았는데 불쾌한 일에 휘말렸다" },
  { id: "wedlock", ctx: "젊은 여성이 혼인생활에 불만족함을 봄", text: "젊은 여성이 혼인생활에 불만족함을 보았는데 부끄러운 일탈로 이끌렸다" },
  { id: "wedlock", ctx: "기혼 여성이 제 혼례일을 꿈꿈", text: "기혼 여성이 제 혼례일을 꿈꾸었는데 비밀스러운 다툼에 휘말렸다" },
  { id: "wedlock", ctx: "여성이 혼인생활에서 기쁘고 안전하게 보살핌받는다고 여김", text: "여성이 혼인생활에서 기쁘고 안전하게 보살핌받는다고 여겼는데 상서로운 조짐이었다" },

  // ── 지킴 케이스 — bridle이 "혼인생활" 추가 뒤에도 "굴레"로 여전히 걸리는지 ──
  { id: "bridle", ctx: "굴레(고삐)를 보는 꿈을 꿈", text: "굴레를 보았다" },
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
