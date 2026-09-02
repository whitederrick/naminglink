// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 29 — Eagles~Elevator, 54건)
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
  { id: "eagle", ctx: "독수리가 머리 위로 높이 나는 것을 봄", text: "독수리가 머리 위로 높이 날고 있었다" },
  { id: "eagle", ctx: "먼 높은 곳에 앉은 독수리를 봄", text: "독수리가 먼 절벽에 앉아 있었다" },
  { id: "eagle", ctx: "보금자리의 새끼 독수리를 봄", text: "둥지에 새끼 독수리가 있었다" },
  { id: "eagle", ctx: "독수리를 죽임", text: "독수리를 죽였다" },
  { id: "eagle", ctx: "독수리 고기를 먹음", text: "독수리 고기를 먹었다" },
  { id: "eagle", ctx: "남이 죽인 독수리의 주검을 봄", text: "남이 죽인 독수리의 주검을 보았다" },
  { id: "eagle", ctx: "독수리 등에 올라탐", text: "독수리 등에 올라탔다" },
  { id: "ear", ctx: "귀를 봄", text: "귀를 보았다" },
  { id: "ear", ctx: "귀를 봄", text: "두 귀가 커져 있었다" },
  { id: "earring", ctx: "귀걸이를 봄", text: "귀걸이를 보았다" },
  { id: "earring", ctx: "부서진 귀걸이를 봄", text: "부서진 귀걸이를 보았다" },
  { id: "earthquake", ctx: "지진을 보거나 느낌", text: "지진이 나서 땅이 흔들렸다" },
  { id: "earwig", ctx: "집게벌레를 보거나 귀에 들어옴", text: "집게벌레가 귀에 들어왔다" },
  { id: "eating", ctx: "혼자서 먹음", text: "혼자 밥을 먹었다" },
  { id: "eating", ctx: "남과 함께 먹음", text: "여럿이 함께 밥을 먹었다" },
  { id: "eating", ctx: "다 먹기 전에 딸이 고기 접시를 물려 감", text: "다 먹기도 전에 딸이 고기 접시를 치웠다" },
  { id: "ebony", ctx: "흑단으로 만든 세간을 봄", text: "흑단으로 만든 세간을 보았다" },
  { id: "echo", ctx: "메아리를 들음", text: "메아리가 울렸다" },
  { id: "eclipse", ctx: "해가 가려지는 것을 봄", text: "일식이 일어나 해가 가려졌다" },
  { id: "eclipse", ctx: "달이 가려지는 것을 봄", text: "월식으로 달이 가려졌다" },
  { id: "ecstasy", ctx: "황홀함을 느낌", text: "황홀함에 가슴이 벅찼다" },
  { id: "ecstasy", ctx: "뒤숭숭한 꿈속에서 황홀함을 느낌", text: "뒤숭숭한 꿈속에서 황홀했다" },
  { id: "being-taught-letters", ctx: "배움을 얻고자 애씀", text: "배우고 싶은 마음이 간절해 애썼다" },
  { id: "being-taught-letters", ctx: "배우는 곳에 있음", text: "학교에서 배우고 있었다" },
  { id: "being-taught-letters", ctx: "누군가 글을 가르쳐 줌", text: "스승이 글을 가르쳐 주었다" },
  { id: "eel", ctx: "뱀장어를 꽉 붙잡고 있음", text: "뱀장어를 움켜쥐고 있었다" },
  { id: "eel", ctx: "뱀장어를 놓침", text: "뱀장어를 놓쳤다" },
  { id: "eel", ctx: "맑은 물속의 뱀장어를 봄", text: "맑은 물속에 뱀장어가 있었다" },
  { id: "eel", ctx: "죽은 뱀장어를 봄", text: "죽은 뱀장어를 보았다" },
  { id: "egg", ctx: "알이 든 둥지를 찾음", text: "알이 든 둥지를 찾았다" },
  { id: "egg", ctx: "달걀을 먹음", text: "달걀을 삶은 것을 먹었다" },
  { id: "egg", ctx: "깨진 달걀이 성함", text: "깨진 달걀이 신선했다" },
  { id: "egg", ctx: "썩은 달걀을 봄", text: "썩은 달걀을 보았다" },
  { id: "egg", ctx: "달걀 상자를 봄", text: "달걀 상자를 보았다" },
  { id: "egg", ctx: "달걀을 뒤집어씀", text: "달걀을 뒤집어썼다" },
  { id: "egg", ctx: "새알을 봄", text: "새알을 보았다" },
  { id: "elbow", ctx: "팔꿈치를 봄", text: "팔꿈치를 보았다" },
  { id: "elbow", ctx: "처녀가 팔꿈치를 봄", text: "아가씨가 팔꿈치를 보았다" },
  { id: "elbow", ctx: "팔꿈치가 더러움", text: "팔꿈치가 더러웠다" },
  { id: "elderberry", ctx: "덤불에 달린 딱총나무 열매를 봄", text: "덤불에 딱총나무 열매가 달려 있었다" },
  { id: "election", ctx: "선거하는 자리에 있음", text: "선거를 하는 자리에 있었다" },
  { id: "electricity", ctx: "전기를 봄", text: "전기가 번쩍였다" },
  { id: "electricity", ctx: "전기에 감전됨", text: "전기에 감전되었다" },
  { id: "electricity", ctx: "전기가 흐르는 전선을 봄", text: "늘어진 전깃줄을 보았다" },
  { id: "electricity", ctx: "전선으로 짐이나 제 몸을 실어 보냄", text: "전선으로 짐을 실어 보냈다" },
  { id: "elephant", ctx: "흰 코끼리를 봄", text: "코끼리를 보았다" },
  { id: "elephant", ctx: "코끼리를 타고 있음", text: "코끼리를 타고 있었다" },
  { id: "elephant", ctx: "코끼리 여럿을 봄", text: "코끼리 여러 마리를 보았다" },
  { id: "elephant", ctx: "외따로 있는 코끼리 한 마리를 봄", text: "코끼리가 홀로 있었다" },
  { id: "elephant", ctx: "코끼리에게 먹이를 줌", text: "코끼리에게 먹이를 주었다" },
  { id: "elevator", ctx: "승강기를 타고 올라감", text: "승강기를 타고 올라갔다" },
  { id: "elevator", ctx: "승강기를 타고 내려감", text: "승강기를 타고 내려갔다" },
  { id: "elevator", ctx: "승강기가 내려가 홀로 남겨진 듯함", text: "승강기가 내려가고 나만 남겨졌다" },
  { id: "elevator", ctx: "멈춰 서 있는 승강기를 봄", text: "승강기가 멈춰 있었다" },
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
