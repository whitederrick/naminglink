// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 270 — Telegram~Thaw. 새 상징 다섯(telephone·
// temptation·tent·sermon-text·thaw)을 세우고, 기존 다섯(cable·spyglass·
// lodger·ninepins·house)에 문맥을 나눠 붙였다. Tempest·Terror는 통째로
// 건너뛰었다(각각 hurricane·afraid와 같은 그림). tent는 camp가 이미
// 쥐고 있던 「텐트」 별칭을 더 정확한 임자인 새 상징으로 옮겨 왔다
// (camp에는 「캠핑」·「야영지」만 남김).
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
  // ── 배치 270 새 문맥 (22건) ────────────────────────────────────────────
  { id: "cable", ctx: "전보를 보냄", text: "전보를 보냈다" },
  { id: "cable", ctx: "스스로 전신기사가 되어 메시지를 보냄", text: "스스로 전신기사가 되어 메시지를 보냈다" },
  { id: "cable", ctx: "전신국에 있음을 봄", text: "전신국에 있었다" },
  { id: "telephone", ctx: "전화 꿈을 꿈", text: "전화 꿈을 꾸었다" },
  { id: "telephone", ctx: "여성이 전화로 이야기함", text: "여성이 전화로 이야기했다" },
  { id: "telephone", ctx: "여성이 전화로 잘 들리지 않아 애먹음", text: "여성이 전화로 잘 들리지 않아 애먹었다" },
  { id: "spyglass", ctx: "망원경으로 별과 행성을 봄", text: "망원경으로 별과 행성을 보았다" },
  { id: "temptation", ctx: "유혹에 둘러싸임", text: "유혹에 둘러싸였다" },
  { id: "temptation", ctx: "유혹을 물리침", text: "유혹을 물리쳤다" },
  { id: "lodger", ctx: "스스로 세입자라고 여김", text: "스스로 세입자라고 여겼다" },
  { id: "ninepins", ctx: "남이 구주희 하는 것을 봄", text: "남이 구주희 하는 것을 보았다" },
  { id: "ninepins", ctx: "여성이 구주희에서 성공함", text: "여성이 구주희에서 성공했다" },
  { id: "tent", ctx: "텐트 안에 있음", text: "텐트 안에 있었다" },
  { id: "tent", ctx: "텐트 여러 채를 봄", text: "텐트 여러 채를 보았다" },
  { id: "tent", ctx: "텐트가 찢어지거나 낡음", text: "텐트가 찢어지거나 낡았다" },
  { id: "sermon-text", ctx: "설교 본문을 두고 다툼", text: "설교 본문을 두고 다투었다" },
  { id: "sermon-text", ctx: "설교 본문을 떠올리려 애씀", text: "설교 본문을 떠올리려 애썼다" },
  { id: "sermon-text", ctx: "설교 본문을 되뇌며 곱씹음", text: "설교 본문을 되뇌며 곱씹었다" },
  { id: "house", ctx: "쉬 썩는 재료로 지붕을 이음", text: "집 지붕을 쉬 썩는 재료로 이었다" },
  { id: "house", ctx: "짚으로 이은 지붕이 새는 것을 봄", text: "집의 짚으로 이은 지붕이 새는 것을 보았다" },
  { id: "thaw", ctx: "얼음이 녹는 것을 봄", text: "얼음이 녹는 것을 보았다" },
  { id: "thaw", ctx: "오랜 추위 끝에 땅이 녹는 것을 봄", text: "오랜 추위 끝에 땅이 녹는 것을 보았다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징들의 옛 답이 그대로인지 ────────
  { id: "cable", ctx: "케이블을 봄", text: "케이블을 보았다" },
  { id: "cable", ctx: "해외 전보를 받음", text: "해외 전보를 받았다" },
  { id: "spyglass", ctx: "망원경으로 봄", text: "망원경으로 들여다보았다" },
  { id: "lodger", ctx: "하숙인이 셈을 치름", text: "하숙인이 셈을 치렀다" },
  { id: "ninepins", ctx: "구주희를 함", text: "구주희를 했다" },
  { id: "house", ctx: "지붕을 새로 덮음", text: "집 지붕을 새로 덮었다" },
  { id: "camp", ctx: "노천에서 야영함", text: "노천에서 야영을 했다" },
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
