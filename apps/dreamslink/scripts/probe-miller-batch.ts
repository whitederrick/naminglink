// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 295 — Wagtail~Wake(새 20판 묶음의 8/20). 새 상징
// 다섯(wagtail·waif·waist·shirt-waist·waiter), 기존 weeping(울음)·
// condolence-visit(문상)에 문맥을 나눠 붙였다. Wail은 각주 [238] See
// Weeping으로 weeping에, Wake는 "장례식 밤샘"이 이미 condolence-visit의
// 영어 별칭("wake")이었던 것을 뒤늦게 찾아 그쪽에 합쳤다.
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
  // ── 배치 295 새 문맥 (14건) ────────────────────────────────────────────
  { id: "wagtail", ctx: "할미새를 봄", text: "할미새를 보았는데 불쾌한 뒷말의 희생양이 되었다" },
  { id: "waif", ctx: "떠돌이 아이를 봄", text: "떠돌이 아이를 보았는데 사업에서 불운했다" },
  { id: "weeping", ctx: "꿈속에서 울부짖는 소리를 들음", text: "꿈속에서 누군가 울부짖는 소리를 들었는데 두려운 소식이 왔다" },
  { id: "weeping", ctx: "젊은 여성이 울부짖는 소리를 들음", text: "젊은 여성이 울부짖는 소리를 들었는데 버림받아 홀로 남겨졌다" },
  { id: "waist", ctx: "둥글고 풍만한 허리를 봄", text: "둥글고 풍만한 허리를 보았는데 기분 좋은 운명의 배려를 받았다" },
  { id: "waist", ctx: "작고 부자연스러운 허리를 봄", text: "작고 부자연스러운 허리를 보았는데 달갑잖은 성공을 얻었다" },
  { id: "shirt-waist", ctx: "젊은 여성이 근사한 기성품 블라우스를 봄", text: "젊은 여성이 근사한 기성품 블라우스를 보았는데 찬사를 얻었다" },
  { id: "shirt-waist", ctx: "블라우스가 찢어짐", text: "블라우스가 찢어졌는데 부적절한 만남으로 비난받았다" },
  { id: "shirt-waist", ctx: "블라우스를 입어 봄", text: "블라우스를 입어 보았는데 사랑에서 경쟁자를 만났다" },
  { id: "shirt-waist", ctx: "블라우스를 몸에 맞게 고쳐 입는 데 성공함", text: "블라우스를 몸에 맞게 고쳐 입는 데 성공했는데 경쟁을 이겨내고 사랑하는 사람을 얻었다" },
  { id: "waiter", ctx: "웨이터를 봄", text: "웨이터를 보았는데 친구에게 유쾌한 대접을 받았다" },
  { id: "waiter", ctx: "무례하거나 무질서한 웨이터를 봄", text: "무례하고 무질서한 웨이터를 보았는데 불쾌한 사람들이 끼어들었다" },
  { id: "condolence-visit", ctx: "상갓집에서 밤을 지새움", text: "상갓집에서 밤을 지새웠는데 중요한 약속을 희생했다" },
  { id: "condolence-visit", ctx: "젊은 여성이 상갓집에서 연인을 봄", text: "젊은 여성이 상갓집에서 연인을 보았는데 정념의 애원에 설득당했다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────
  { id: "weeping", ctx: "남이 우는 것을 봄", text: "남이 우는 것을 보았다" },
  { id: "condolence-visit", ctx: "남에게 문상을 감", text: "남에게 문상을 갔다" },
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
