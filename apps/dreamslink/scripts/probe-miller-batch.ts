// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 267 — 20판 묶음(248~267)의 마지막 배치. 새
// 상징 여덟(tapestry·tapeworm·tar·tarantula·target·tassels·
// tattoo·taxes)을 세웠다. 전부 새 상징이라 기존 상징 지킴 케이스가
// 없다 — 이 판 이후 전수 스윕·git push·배포 확인이 뒤따른다.)
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
  // ── 배치 267 새 문맥 (17건, 20판 묶음의 마지막) ────────────────────────
  { id: "tapestry", ctx: "화려한 태피스트리를 봄", text: "화려한 태피스트리를 보았다" },
  { id: "tapestry", ctx: "여성이 자기 방에 태피스트리가 걸려 있는 꿈을 꿈", text: "여성이 자기 방에 태피스트리가 걸려 있는 꿈을 꾸었다" },
  { id: "tapeworm", ctx: "촌충을 보거나 몸에 지님", text: "촌충을 보았다" },
  { id: "tar", ctx: "타르를 봄", text: "타르를 보았다" },
  { id: "tar", ctx: "손이나 옷에 타르가 묻음", text: "손이나 옷에 타르가 묻었다" },
  { id: "tarantula", ctx: "타란튤라를 봄", text: "타란튤라를 보았다" },
  { id: "tarantula", ctx: "타란튤라를 죽임", text: "타란튤라를 죽였다" },
  { id: "target", ctx: "과녁 꿈을 꿈", text: "과녁 꿈을 꾸었다" },
  { id: "target", ctx: "여성이 스스로 과녁이 되었다고 여김", text: "여성이 스스로 과녁이 되었다고 여겼다" },
  { id: "tassels", ctx: "술 장식을 봄", text: "술 장식을 보았다" },
  { id: "tassels", ctx: "여성이 술 장식을 잃어버림", text: "여성이 술 장식을 잃어버렸다" },
  { id: "tattoo", ctx: "스스로의 몸에 문신이 새겨져 있는 것을 봄", text: "스스로의 몸에 문신이 새겨져 있는 것을 보았다" },
  { id: "tattoo", ctx: "남들의 몸에 새겨진 문신을 봄", text: "남들의 몸에 새겨진 문신을 보았다" },
  { id: "tattoo", ctx: "스스로 문신가가 됨", text: "스스로 문신가가 되었다" },
  { id: "taxes", ctx: "스스로 세금을 냄", text: "스스로 세금을 냈다" },
  { id: "taxes", ctx: "남들이 세금을 냄", text: "남들이 세금을 냈다" },
  { id: "taxes", ctx: "세금을 낼 수 없음", text: "세금 낼 돈이 없었다" },
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
