// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 265 — 새 상징 넷(switch·railroad-switch·
// tacks·tadpole)을 세우고, 기존 sword(이미 의미 27개)·table 둘에
// 문맥을 보탰다. Switch 넷째 문장은 같은 헤드워드의 첫 문장과 같은
// 그림(그냥 「a switch」)인데 풀이가 달라 건너뛰었다 — 밀러가 자기
// 헤드워드 안에서도 되풀이한 드문 자리. Sword 첫·넷째 문장은 각각
// 기존 「칼을 차고 길을 감」(zhougong)·「동강 난 칼을 봄」(밀러
// Knives)과 같은 그림·다른 풀이라 건너뛰었다. sword는 있던 답
// 그대로, table은 옛 zhougong 기본값(집 안에 괴어 둠, 특이한 좁은
// 그림)을 밀러의 「식사를 앞두고 차림」(훨씬 흔한 그림)으로 바꿨다.
// switch(회초리)가 기존 chastise(체벌)의 별칭 "회초리"와 겹쳐서
// chastise 쪽에서 놓아줬다 — chastise는 이미 "꾸중"·"종아리를
// 맞았다"로 충분히 걸린다.
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
  // ── 배치 265 새 문맥 (19건) ──────────────────────────────────────────────
  { id: "switch", ctx: "회초리 꿈을 꿈", text: "회초리 꿈을 꾸었다" },
  { id: "switch", ctx: "부러진 회초리를 봄", text: "부러진 회초리를 보았다" },
  { id: "railroad-switch", ctx: "철도 선로전환기 꿈을 꿈", text: "철도 선로전환기 꿈을 꾸었다" },
  { id: "sword", ctx: "남에게 칼을 빼앗김", text: "남에게 칼을 빼앗겼다" },
  { id: "sword", ctx: "남들이 칼을 지니고 있는 것을 봄", text: "남들이 칼을 지니고 있는 것을 보았다" },
  { id: "table", ctx: "식사를 앞두고 탁자를 차림", text: "식사를 앞두고 탁자를 차렸다" },
  { id: "table", ctx: "빈 탁자를 봄", text: "탁자가 텅 비어 있었다" },
  { id: "table", ctx: "탁자를 치움", text: "탁자를 치웠다" },
  { id: "table", ctx: "식탁보 없는 탁자에서 먹음", text: "식탁보 없는 탁자에서 먹었다" },
  { id: "table", ctx: "탁자가 알 수 없이 저절로 걷거나 움직이는 것을 봄", text: "탁자가 저절로 움직이는 것을 보았다" },
  { id: "table", ctx: "탁자에 얼룩진 식탁보가 덮여 있음", text: "탁자에 얼룩진 식탁보가 덮여 있었다" },
  { id: "table", ctx: "부서진 탁자를 봄", text: "부서진 탁자를 보았다" },
  { id: "table", ctx: "누군가 탁자 위에 서 있거나 앉아 있는 것을 봄", text: "누군가 탁자 위에 앉아있는 것을 보았다" },
  { id: "table", ctx: "탁자를 두드리거나 글을 쓰는 소리를 보거나 들음", text: "탁자를 두드리거나 하는 소리를 들었다" },
  { id: "tacks", ctx: "압정 꿈을 꿈", text: "압정 꿈을 꾸었다" },
  { id: "tacks", ctx: "여성이 압정을 박음", text: "여성이 압정을 박았다" },
  { id: "tacks", ctx: "압정을 박다가 손가락을 다침", text: "압정을 박다가 손가락을 다쳤다" },
  { id: "tadpole", ctx: "올챙이 꿈을 꿈", text: "올챙이 꿈을 꾸었다" },
  { id: "tadpole", ctx: "여성이 맑은 물속의 올챙이를 봄", text: "여성이 맑은 물속의 올챙이를 보았다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────────
  { id: "sword", ctx: "칼을 봄", text: "칼을 보았다" },
  { id: "sword", ctx: "칼을 잃어버림", text: "칼을 잃어버렸다" },
  { id: "table", ctx: "탁자를 집 안에 괴어 둠", text: "탁자를 집 안에 괴어 두었다" },
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
