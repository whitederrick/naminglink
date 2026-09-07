// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 277 — Treasures~Trousers. 새 상징 다섯(triangle·
// tripe·triplets·trophy·trousers), 기존 tree·ditch·gold-and-silver-
// treasure에 문맥을 나눠 붙임. Trees의 「dead trees」·「climb a tree」는
// 기존 tree와 같은 그림이라, 「cut one down」은 같은 그림에 극성이
// 정반대라 §31로 건너뜀. Treasures는 새 상징 「보물」로 세우려 했으나
// gold-and-silver-treasure가 이미 「보물」을 별칭으로 쥐고 있어(audit-
// cross-symbol-aliases가 잡음) 그 상징에 합쳤다. Trenches(→Ditch)도
// ditch에 aliases_en "trench"를 더하려다 pit이 이미 그 낱말을 쥐고 있어
// 뺐다(한국어 별칭 "참호"만 남김).
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
  // ── 배치 277 새 문맥 (17건) ────────────────────────────────────────────
  { id: "gold-and-silver-treasure", ctx: "보물을 찾아냄", text: "보물을 찾아냈다" },
  { id: "gold-and-silver-treasure", ctx: "보물을 잃음", text: "보물을 잃었다" },
  { id: "tree", ctx: "새 잎이 돋은 나무를 봄", text: "나무에 신록이 우거진 것을 보았다" },
  { id: "tree", ctx: "갓 베어진 푸른 나무를 봄", text: "누가 베어낸 푸른 나무가 쓰러진 것을 보았다" },
  { id: "ditch", ctx: "참호들을 봄", text: "참호들을 보았는데 낯선 사람의 배신이 걱정됐다" },
  { id: "ditch", ctx: "메워진 참호를 봄", text: "메워진 참호를 보았다" },
  { id: "triangle", ctx: "삼각형 꿈을 꿈", text: "삼각형 꿈을 꾸었다" },
  { id: "tripe", ctx: "천엽을 봄", text: "천엽을 보았다" },
  { id: "tripe", ctx: "천엽을 먹음", text: "천엽을 먹었다" },
  { id: "triplets", ctx: "세쌍둥이를 봄", text: "세쌍둥이를 보았다" },
  { id: "triplets", ctx: "남자가 아내에게 세쌍둥이가 있는 꿈을 꿈", text: "아내에게 세쌍둥이가 있는 꿈을 꾸었다" },
  { id: "triplets", ctx: "갓 태어난 세쌍둥이가 우는 소리를 들음", text: "갓 태어난 세쌍둥이가 우는 소리를 들었다" },
  { id: "triplets", ctx: "처녀가 세쌍둥이를 낳는 꿈을 꿈", text: "처녀가 세쌍둥이를 낳는 꿈을 꾸었다" },
  { id: "trophy", ctx: "전리품을 봄", text: "전리품을 보았다" },
  { id: "trophy", ctx: "여성이 전리품을 남에게 줌", text: "여성이 전리품을 남에게 주었다" },
  { id: "trousers", ctx: "바지 꿈을 꿈", text: "바지 꿈을 꾸었다" },
  { id: "trousers", ctx: "바지를 뒤집어 입음", text: "바지를 뒤집어 입었다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────
  { id: "gold-and-silver-treasure", ctx: "금은보화를 봄", text: "금은보화가 잔뜩 쌓인 것을 보았다" },
  { id: "tree", ctx: "큰 나무에 오름", text: "큰 나무에 기어올랐다" },
  { id: "ditch", ctx: "도랑에 빠짐", text: "도랑에 빠졌다" },
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
