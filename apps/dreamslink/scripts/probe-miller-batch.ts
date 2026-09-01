// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 22 — Crawl~Crown, 52건)
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
  { id: "crawl", ctx: "땅을 기어가다 손을 다침", text: "땅을 기어가다 손을 다쳤다" },
  { id: "crawl", ctx: "거칠고 돌 많은 곳을 기어감", text: "거칠고 돌이 많은 곳을 기어갔다" },
  { id: "crawl", ctx: "젊은 여성이 기어가는 꿈을 꿈", text: "여자가 기어가는 꿈을 꾸었다" },
  { id: "crawl", ctx: "남들과 진창에서 기어감", text: "남들과 진창에서 기어갔다" },
  { id: "cream", ctx: "크림이 상에 오른 것을 봄", text: "크림이 상에 올라온 것을 보았다" },
  { id: "cream", ctx: "농사짓는 이에게 크림 꿈이 나타남", text: "농부가 크림 꿈을 꾸었다" },
  { id: "cream", ctx: "크림을 마심", text: "크림을 마셨다" },
  { id: "cream", ctx: "연인에게 크림 꿈이 나타남", text: "애인과 함께 크림을 보았다" },
  { id: "credit", ctx: "외상을 청함", text: "외상을 달라고 청했다" },
  { id: "credit", ctx: "남에게 외상을 줌", text: "남에게 외상을 내주었다" },
  { id: "creek", ctx: "개울을 봄", text: "개울이 졸졸 흐르는 것을 보았다" },
  { id: "creek", ctx: "개울이 넘쳐흐름", text: "개울이 넘쳐흘렀다" },
  { id: "creek", ctx: "개울이 말라 있음", text: "개울이 말라 있었다" },
  { id: "cremation", ctx: "화장터에서 시신을 태우는 것을 봄", text: "화장터에서 남의 주검을 태우는 것을 보았다" },
  { id: "cremation", ctx: "제 몸이 태워지는 꿈을 꿈", text: "화장터에서 내가 스스로 태워지는 꿈을 꾸었다" },
  { id: "crew", ctx: "선원들이 배를 띄우려 채비하는 것을 봄", text: "선원들이 항구에서 떠나려 채비하는 것을 보았다" },
  { id: "crew", ctx: "폭풍 속에서 배를 구하려는 선원들을 봄", text: "폭풍 속에서 배를 구하려는 선원들을 보았다" },
  { id: "cricket", ctx: "귀뚜라미 우는 소리를 들음", text: "귀뚜라미 우는 소리를 들었다" },
  { id: "cricket", ctx: "귀뚜라미를 봄", text: "귀뚜라미가 눈에 보였다" },
  { id: "cries", ctx: "괴로워 울부짖는 소리를 들음", text: "괴로워 울부짖는 소리를 들었다" },
  { id: "cries", ctx: "놀라 지르는 소리를 들음", text: "놀라 지르는 비명 소리를 들었다" },
  { id: "cries", ctx: "들짐승 우는 소리를 들음", text: "들짐승이 우는 소리를 들었다" },
  { id: "cries", ctx: "살붙이나 벗이 도와 달라 외치는 소리를 들음", text: "가족이 도와 달라 외치는 소리를 들었다" },
  { id: "criminal", ctx: "죄를 지은 이와 어울림", text: "죄를 지은 이와 함께 어울렸다" },
  { id: "criminal", ctx: "범죄자가 법망을 피해 달아나는 것을 봄", text: "범죄자가 쫓기며 달아나는 것을 보았다" },
  { id: "crippled", ctx: "몸이 성치 않은 이를 봄", text: "성치 않은 몸으로 다니는 이를 보았다" },
  { id: "crochet-work", ctx: "코바늘뜨기를 함", text: "코바늘뜨기를 했다" },
  { id: "crockery", ctx: "깨끗한 사기그릇이 넉넉히 있음", text: "깨끗한 사기그릇이 넉넉히 많이 있었다" },
  { id: "crockery", ctx: "장사하는 이가 사기그릇 가게에 있음", text: "장사하는 사람이 사기그릇 가게에 있었다" },
  { id: "crockery", ctx: "젊은 여성이 사기그릇 가게 꿈을 꿈", text: "여자가 사기그릇 가게 꿈을 꾸었다" },
  { id: "crockery", ctx: "어수선하고 선반이 빈 가게를 봄", text: "어수선하고 선반이 비어 있는 사기그릇 가게를 보았다" },
  { id: "alligator", ctx: "악어 꿈을 꿈", text: "악어 꿈을 꾸고 적이 달려들어 배신을 당했다" },
  { id: "alligator", ctx: "악어 등을 밟고 섬", text: "악어 등을 밟고 섰다" },
  { id: "cross", ctx: "십자가를 봄", text: "십자가가 세워진 것을 보았다" },
  { id: "cross", ctx: "십자가를 진 사람을 봄", text: "십자가를 지고 가는 사람을 보았다" },
  { id: "cross-bones", ctx: "엇갈린 뼈 표시를 봄", text: "엇갈린 뼈 표시를 그려진 것을 보았다" },
  { id: "cross-bones", ctx: "장례 청첩에 엇갈린 뼈 표시가 있음", text: "장례 청첩에 엇갈린 뼈 표시가 있었다" },
  { id: "cross-roads", ctx: "갈림길에 이름", text: "갈림길에 다다랐다" },
  { id: "cross-roads", ctx: "어느 길로 갈지 정하지 못함", text: "갈림길에서 어느 쪽인지 정하지 못하고 망설였다" },
  { id: "cross-roads", ctx: "갈 길을 정함", text: "갈림길에서 갈 길을 골랐다" },
  { id: "croup", ctx: "아이가 크루프를 앓음", text: "아이가 크루프를 앓았다" },
  { id: "crow", ctx: "까마귀를 봄", text: "까마귀가 앉아 있는 것을 보았다" },
  { id: "crow", ctx: "까마귀 우는 소리를 들음", text: "까마귀 울음이 까악까악 들렸다" },
  { id: "crow", ctx: "젊은 남성에게 까마귀 꿈이 나타남", text: "젊은 남자가 까마귀 꿈을 꾸었다" },
  { id: "crowd", ctx: "잘 차려입은 큰 무리가 잔치에 모인 것을 봄", text: "잘 차려입은 사람들 무리가 잔치에 모인 것을 보았다" },
  { id: "crowd", ctx: "손님들의 흥이 깨지는 일이 생김", text: "군중 속에서 손님들의 흥이 깨지는 일이 생겼다" },
  { id: "crowd", ctx: "교회에 모인 무리를 봄", text: "교회에 모인 사람들 무리를 보았다" },
  { id: "crowd", ctx: "거리에 모인 무리를 봄", text: "거리에 모인 사람들 무리를 보았다" },
  { id: "crowd", ctx: "무리 속에서 제 말을 들리게 하려 애씀", text: "군중 속에서 내 말이 들리게 하려고 외쳤다" },
  { id: "crown", ctx: "왕관을 봄", text: "왕관이 반짝이며 놓인 것을 보았다" },
  { id: "crown", ctx: "제가 왕관을 씀", text: "내가 왕관을 썼다" },
  { id: "crown", ctx: "남에게 왕관을 씌움", text: "남에게 왕관을 씌워 주었다" },
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
