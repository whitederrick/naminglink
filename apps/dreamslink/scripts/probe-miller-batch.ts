// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 324 — Zebra~Zoological Garden(새 20판 묶음의
// 17/20). **밀러 1901 사전 원문의 마지막 표제어들 — 이 배치로
// 밀러 원문 추출이 전부 끝났다.** 새 상징 다섯(zebra 얼룩말·zenith
// 천정·zephyr 산들바람·zinc 아연·zodiac 황도대), 기존 menagerie
// (동물원, 밀러 자신의 Menagerie 표제어)에 문맥 하나를 나눠 붙였다
// (같은 그림·다른 판단이라 §31 대신 문구를 갈라 함께 남김).
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
  // ── 배치 324 새 문맥 (13건) — 밀러 원문 마지막 배치 ──────────────────
  { id: "zebra", ctx: "얼룩말 꿈을 꿈", text: "얼룩말 꿈을 꾸었는데 변화무쌍하고 덧없는 일에 관심을 두게 됐다" },
  { id: "zebra", ctx: "야생 얼룩말이 제 고향 땅에 있는 것을 봄", text: "야생 얼룩말이 제 고향 땅에 있는 것을 보았는데 헛된 공상을 좇다가 만족스럽지 못한 즐거움만 얻었다" },
  { id: "zenith", ctx: "천정 꿈을 꿈", text: "천정 꿈을 꾸었는데 화려한 번영이 있고 고르는 구혼자가 뜻대로 됐다" },
  { id: "zephyr", ctx: "부드러운 산들바람 꿈을 꿈", text: "부드러운 산들바람 꿈을 꾸었는데 재물을 바쳐서라도 사랑하는 이를 얻으려 했다" },
  { id: "zephyr", ctx: "젊은 여성이 산들바람의 속삭임에 서글퍼짐", text: "젊은 여성이 산들바람의 속삭임에 서글퍼졌는데 연인이 떠나 있어야 해서 불안한 시기를 보냈다" },
  { id: "zinc", ctx: "아연을 다루거나 봄", text: "아연을 다루거나 보았는데 탄탄하고 힘찬 발전을 이뤘다" },
  { id: "zinc", ctx: "아연 광석 꿈을 꿈", text: "아연 광석 꿈을 꾸었는데 뜻깊은 성공이 다가왔다" },
  { id: "zodiac", ctx: "황도대 꿈을 꿈", text: "황도대 꿈을 꾸었는데 재산이 남달리 불어날 전조였다" },
  { id: "zodiac", ctx: "황도대가 기이하게 보임", text: "황도대가 기이하게 보였는데 뜻밖의 슬픔이 드리우고 있었다" },
  { id: "zodiac", ctx: "황도대를 연구함", text: "황도대를 연구했는데 낯선 이들과 사귀며 호의를 얻었다" },
  { id: "zodiac", ctx: "자신이 황도대에 다가가거나 황도대가 자신에게 다가옴", text: "황도대가 자신에게 다가왔는데 상상하지 못한 큰 성공을 투기에서 거뒀다" },
  { id: "zodiac", ctx: "황도대 지도를 그림", text: "황도대 지도를 그렸는데 앞으로 이득이 생겼다" },
  { id: "menagerie", ctx: "동물원 여러 곳을 두루 다님", text: "동물원 여러 곳을 두루 다녔는데 운수가 오르내려 때로 적에게 밀리는 듯해도 다시 성공의 앞자리에 섰다" },

  // ── 지킴 케이스 — menagerie의 기존 답이 여전히 걸리는지 ──
  { id: "menagerie", ctx: "동물원에 감", text: "동물원에 갔다" },
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
