// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 20 — Copying~Cotton Cloth, 60건)
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
  { id: "copying", ctx: "무언가를 베껴 씀", text: "문서를 베껴 썼다" },
  { id: "copying", ctx: "젊은 여성이 편지를 베껴 씀", text: "여자가 편지를 베껴 쓰고 있었다" },
  { id: "coral", ctx: "빛깔 있는 산호를 봄", text: "붉은 빛깔의 산호를 보았다" },
  { id: "coral", ctx: "흰 산호를 봄", text: "하얀 산호를 보았다" },
  { id: "cornet", ctx: "코넷을 보거나 그 소리를 들음", text: "코넷 소리를 들었다" },
  { id: "coronation", ctx: "대관식을 봄", text: "임금의 대관식을 보았다" },
  { id: "coronation", ctx: "젊은 여성이 대관식에 참여함", text: "여자가 대관식에 참여했다" },
  { id: "coronation", ctx: "대관식이 어수선하고 뒤죽박죽으로 나타남", text: "대관식이 어수선하고 뒤죽박죽이었다" },
  { id: "cork", ctx: "잔치에서 마개를 뽑음", text: "잔치에서 마개를 뽑았다" },
  { id: "cork", ctx: "약병 마개를 봄", text: "약병 마개를 보았다" },
  { id: "cork", ctx: "맑은 물 위에 뜬 낚시찌를 봄", text: "맑은 물 위에 뜬 낚시찌를 보았다" },
  { id: "cork", ctx: "찌가 뜬 물이 흔들림", text: "낚시찌가 뜬 물이 흔들렸다" },
  { id: "cork", ctx: "병에 마개를 막음", text: "병에 마개를 막았다" },
  { id: "cork", ctx: "젊은 여성이 샴페인 마개를 뽑음", text: "여자가 샴페인 마개를 뽑았다" },
  { id: "corn", ctx: "알록달록한 옥수수 이삭의 껍질을 벗김", text: "알록달록한 옥수수 껍질을 벗겼다" },
  { id: "corn", ctx: "남들이 옥수수를 거두는 것을 봄", text: "남들이 옥수수를 거두는 것을 보았다" },
  { id: "corn", ctx: "갓 갈아엎은 어린 옥수수를 봄", text: "갓 갈아엎은 어린 옥수수를 보았다" },
  { id: "corn", ctx: "옥수수가 익은 것을 봄", text: "옥수수가 익은 것을 보았다" },
  { id: "corn", ctx: "옥수수를 곳간에 쟁여 둔 것을 봄", text: "옥수수를 곳간에 쟁여 둔 것을 보았다" },
  { id: "corn", ctx: "낟알을 턴 옥수수를 봄", text: "낟알을 턴 옥수수를 보았다" },
  { id: "corn", ctx: "풋옥수수를 먹음", text: "풋옥수수를 먹었다" },
  { id: "corn-field", ctx: "푸르고 무성한 옥수수밭을 지나며 묵직한 이삭을 봄", text: "푸르고 무성한 옥수수밭을 지나갔다" },
  { id: "corn-field", ctx: "옥수수 이삭이 말라 죽은 것을 봄", text: "옥수수밭의 이삭이 말라 죽어 있었다" },
  { id: "corns", ctx: "티눈이 발을 아프게 함", text: "티눈이 발을 아프게 했다" },
  { id: "corns", ctx: "발의 티눈을 말끔히 없앰", text: "발의 티눈을 말끔히 없앴다" },
  { id: "corns", ctx: "젊은 여성의 발에 티눈이 남", text: "여자의 발에 티눈이 났다" },
  { id: "corkscrew", ctx: "코르크 따개를 봄", text: "코르크 따개가 놓인 것을 보았다" },
  { id: "corkscrew", ctx: "쓰다가 코르크 따개를 부러뜨림", text: "쓰다가 코르크 따개를 부러뜨렸다" },
  { id: "dead-person", ctx: "관에 뉘어 놓은 시신을 봄", text: "관에 뉘어 놓은 시신을 보았다" },
  { id: "dead-person", ctx: "검은 옷을 입은 시신을 봄", text: "검은 옷을 입은 시신을 보았다" },
  { id: "dead-person", ctx: "싸움터에 시신이 널려 있는 것을 봄", text: "싸움터에 시신이 널려 있었다" },
  { id: "dead-person", ctx: "짐승의 주검을 봄", text: "짐승의 주검을 보았다" },
  { id: "dead-person", ctx: "가까운 집안 사람의 시신을 봄", text: "가까운 집안 사람의 시신을 보았다" },
  { id: "dead-person", ctx: "시신의 한쪽 눈에만 돈을 얹음", text: "시신의 한쪽 눈에만 돈을 얹었다" },
  { id: "dead-person", ctx: "시신의 두 눈에 돈을 얹음", text: "시신의 두 눈에 돈을 얹었다" },
  { id: "dead-person", ctx: "젊은 여성이 일하는 가게 주인이 시신이 되어 있음", text: "일하는 가게 주인이 시신이 되어 있었다" },
  { id: "dead-person", ctx: "시신의 머리가 몸에서 떨어지는 것을 봄", text: "시신의 머리가 몸에서 떨어졌다" },
  { id: "dead-person", ctx: "시신을 봄", text: "시신을 보았다" },
  { id: "cornmeal", ctx: "옥수숫가루를 봄", text: "옥수숫가루를 보았다" },
  { id: "cornmeal", ctx: "옥수숫가루로 만든 빵을 먹음", text: "옥수숫가루로 만든 빵을 먹었다" },
  { id: "corner", ctx: "겁에 질려 모퉁이에 몸을 숨김", text: "겁에 질려 모퉁이에 숨었다" },
  { id: "corner", ctx: "사람들이 모퉁이에서 이야기하는 것을 봄", text: "사람들이 모퉁이에서 이야기하는 것을 보았다" },
  { id: "corpulence", ctx: "제 몸이 뚱뚱해짐", text: "살이 쪄서 뚱뚱해졌다" },
  { id: "corpulence", ctx: "남이 뚱뚱한 것을 봄", text: "남이 뚱뚱한 것을 보았다" },
  { id: "corpulence", ctx: "제 몸이 몹시 뚱뚱해 보임", text: "내 몸이 몹시 뚱뚱한 것을 보았다" },
  { id: "corset", ctx: "코르셋을 봄", text: "코르셋이 상자에 놓인 것을 보았다" },
  { id: "corset", ctx: "젊은 여성이 코르셋을 풀거나 조이며 짜증을 냄", text: "여자가 코르셋을 조이며 짜증을 냈다" },
  { id: "cossack", ctx: "코사크 병사를 봄", text: "코사크 병사를 보았다" },
  { id: "cot", ctx: "간이침대를 봄", text: "간이침대가 놓인 것을 보았다" },
  { id: "cot", ctx: "간이침대가 줄지어 놓여 있음", text: "간이침대가 줄지어 놓여 있었다" },
  { id: "cotton", ctx: "어린 목화가 자라는 밭을 봄", text: "어린 목화가 자라는 밭을 보았다" },
  { id: "cotton", ctx: "거둘 때가 된 목화를 봄", text: "거둘 때가 된 목화를 보았다" },
  { id: "cotton", ctx: "물건을 만드는 이가 목화 꿈을 꿈", text: "물건을 만드는 사람이 목화를 보았다" },
  { id: "cotton", ctx: "장사하는 이가 목화 꿈을 꿈", text: "장사하는 사람이 목화를 보았다" },
  { id: "cotton", ctx: "목화 더미를 봄", text: "목화 더미가 쌓인 것을 보았다" },
  { id: "cotton", ctx: "목화 값이 오름", text: "목화 값이 올랐다" },
  { id: "cotton-cap", ctx: "무명모자를 봄", text: "무명모자를 보았다" },
  { id: "cotton-cloth", ctx: "무명천을 봄", text: "무명천이 개켜 놓인 것을 보았다" },
  { id: "cotton-cloth", ctx: "젊은 여성이 무명천을 짬", text: "여자가 베틀에서 무명천을 짜고 있었다" },
  { id: "cotton-cloth", ctx: "혼인한 이가 무명천 꿈을 꿈", text: "혼인한 사람이 무명천 꿈을 꾸었다" },
];

let notFound = 0;
let wrongCtx = 0;
for (const c of CASES) {
  const r = matchDream(c.text);
  const hit = r.matched.find((m) => m.id === c.id);
  if (!hit) {
    notFound += 1;
    console.log(`✗ 안 걸림  [${c.id}] "${c.text}" → ${r.matched.map((m) => m.id).join(",") || "(0개)"}`);
    continue;
  }
  const got = hit.meaning?.context ?? "(없음)";
  if (got !== c.ctx) {
    wrongCtx += 1;
    console.log(`△ 다른 뜻 [${c.id}] "${c.text}" → 「${got}」 (바란 것: 「${c.ctx}」)`);
  } else {
    console.log(`✓ [${c.id}] "${c.text}" → 「${got}」`);
  }
}
console.log(`\n시험 ${CASES.length}건 · 안 걸림 ${notFound}건 · 다른 뜻 ${wrongCtx}건`);
process.exit(notFound + wrongCtx > 0 ? 1 : 0);
