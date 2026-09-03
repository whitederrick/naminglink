// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 139 — Navy~Newspaper, 39건)
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
  { id: "navy", ctx: "해군을 봄", text: "꿈에 해군을 보았다" },
  { id: "navy", ctx: "해군을 보며 놀라거나 당황함", text: "해군을 보고 몹시 놀랐다" },
  { id: "navy", ctx: "낡고 초라한 해군을 봄", text: "낡고 초라한 해군을 보았다" },
  { id: "nearsighted", ctx: "제가 근시임을 봄", text: "내가 근시라는 것을 알았다" },
  { id: "nearsighted", ctx: "애인이 근시임을 봄", text: "애인이 근시였다" },
  { id: "neck", ctx: "제 목을 봄", text: "내 목을 보았다" },
  { id: "neck", ctx: "남의 목을 감탄하며 봄", text: "남의 목을 감탄하며 보았다" },
  { id: "neck", ctx: "여성이 제 목이 굵음을 봄", text: "여자가 제 목이 굵은 것을 보았다" },
  { id: "necklace", ctx: "여성이 목걸이를 받음", text: "여자가 목걸이를 선물받았다" },
  { id: "necklace", ctx: "목걸이를 잃어버림", text: "목걸이를 잃어버렸다" },
  { id: "necromancer", ctx: "강신술사와 그 술법을 봄", text: "강신술사가 술법을 부리는 것을 보았다" },
  { id: "needle", ctx: "바늘을 씀", text: "바느질을 하려고 바늘을 썼다" },
  { id: "needle", ctx: "바늘에 실을 뀀", text: "바늘에 실을 꿰었다" },
  { id: "needle", ctx: "바늘을 찾음", text: "바늘을 찾고 있었다" },
  { id: "needle", ctx: "바늘을 찾아냄", text: "바늘을 찾아냈다" },
  { id: "needle", ctx: "바늘이 부러짐", text: "바늘이 부러졌다" },
  { id: "neighbor", ctx: "이웃을 봄", text: "이웃을 보았다" },
  { id: "neighbor", ctx: "이웃이 슬퍼하거나 성난 모습임", text: "이웃이 슬퍼하는 모습이었다" },
  { id: "nephew", ctx: "잘생기고 볼품 있는 조카를 봄", text: "잘생긴 조카를 보았다" },
  { id: "nephew", ctx: "볼품없는 조카를 봄", text: "볼품없는 조카를 보았다" },
  { id: "bird-s-nest", ctx: "새 둥지를 봄", text: "새 둥지를 보았다" },
  { id: "bird-s-nest", ctx: "암탉이 둥지를 틈", text: "암탉이 둥지를 틀었다" },
  { id: "bird-s-nest", ctx: "둥지 안에 깨지거나 상한 알이 있음", text: "둥지 안에 깨진 알이 있었다" },
  { id: "net", ctx: "그물로 무언가를 옭아 잡음", text: "그물로 무언가를 옭아 잡았다" },
  { id: "nettles", ctx: "쐐기풀을 봄", text: "쐐기풀을 보았다" },
  { id: "nettles", ctx: "쐐기풀 사이를 쏘이지 않고 걸음", text: "쐐기풀 사이를 쏘이지 않고 걸었다" },
  { id: "nettles", ctx: "쐐기풀에 쏘임", text: "쐐기풀에 쏘였다" },
  { id: "nettles", ctx: "처녀가 쐐기풀 사이를 지나감", text: "처녀가 쐐기풀 사이를 지나갔다" },
  { id: "message", ctx: "좋은 소식을 들음", text: "좋은 소식을 들었다" },
  { id: "message", ctx: "나쁜 소식을 들음", text: "나쁜 소식을 들었다" },
  { id: "newspaper", ctx: "신문을 봄", text: "신문을 보았다" },
  { id: "newspaper", ctx: "신문을 찍어냄", text: "신문을 찍어냈다" },
  { id: "newspaper", ctx: "신문을 읽으려다 못 읽음", text: "신문을 읽으려다 못 읽었다" },
  // 지킴 — 이번 배치가 건드린 기존 상징의 옛 답이 그대로인가(§25 곁가지 · §30 곁가지)
  { id: "needle", ctx: "바늘을 얻음", text: "바늘이 생겼다" },
  { id: "bird-s-nest", ctx: "빈 새 둥지를 봄", text: "새 둥지가 텅 비어 있었다" },
  { id: "bird-s-nest", ctx: "둥지 안에 알이 있음", text: "둥지 안에 알이 있었다" },
  { id: "net", ctx: "고기 그물을 봄", text: "고기 그물을 보았다" },
  { id: "net", ctx: "찢어진 그물을 봄", text: "찢어진 그물을 보았다" },
  { id: "message", ctx: "기별을 받음", text: "기별을 받았다" },
  { id: "message", ctx: "기별을 보냄", text: "기별을 보냈다" },
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
