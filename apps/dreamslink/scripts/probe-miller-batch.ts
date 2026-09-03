// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 140 — Newspaper Reporter~Numbers, 32건)
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
  { id: "newspaper-reporter", ctx: "신문 기자를 마지못해 봄", text: "신문 기자를 마지못해 보았다" },
  { id: "newspaper-reporter", ctx: "제가 신문 기자임을 봄", text: "내가 신문 기자였다" },
  { id: "new-year", ctx: "새해를 봄", text: "새해를 맞이했다" },
  { id: "new-year", ctx: "지친 마음으로 새해를 생각함", text: "지친 마음으로 새해를 생각했다" },
  { id: "niece", ctx: "여성이 제 조카딸을 봄", text: "여자가 제 조카딸을 보았다" },
  { id: "dark", ctx: "밤에 둘러싸임", text: "밤에 둘러싸였다" },
  { id: "dark", ctx: "밤이 걷히는 것을 봄", text: "밤이 걷히는 것을 보았다" },
  { id: "nightmare", ctx: "악몽에 사로잡힘", text: "악몽에 사로잡혔다" },
  { id: "nightmare", ctx: "처녀가 악몽에 사로잡힘", text: "처녀가 악몽에 사로잡혔다" },
  { id: "nightingale", ctx: "나이팅게일의 고운 노래를 들음", text: "나이팅게일의 고운 노래를 들었다" },
  { id: "nightingale", ctx: "나이팅게일이 잠잠한 것을 봄", text: "나이팅게일이 잠잠한 것을 보았다" },
  { id: "ninepins", ctx: "구주희를 함", text: "구주희를 했다" },
  { id: "nobility", ctx: "귀족과 어울림", text: "귀족과 어울렸다" },
  { id: "nobility", ctx: "처녀가 귀족 꿈을 꿈", text: "처녀가 귀족 꿈을 꾸었다" },
  { id: "noise", ctx: "이상한 소음을 들음", text: "이상한 소음을 들었다" },
  { id: "noise", ctx: "소음에 잠을 깸", text: "소음에 잠에서 깨어났다" },
  { id: "noodles", ctx: "국수를 봄", text: "국수를 보았다" },
  { id: "nose", ctx: "제 코를 봄", text: "제 코를 보았다" },
  { id: "nose", ctx: "제 코가 원래보다 작아 보임", text: "코가 원래보다 작아 보였다" },
  { id: "nose", ctx: "코에 털이 남을 봄", text: "코에 털이 자랐다" },
  { id: "bleeding", ctx: "코피가 남", text: "코피가 났다" },
  { id: "notary", ctx: "공증인을 봄", text: "공증인을 보았다" },
  { id: "notary", ctx: "여성이 공증인과 어울림", text: "여자가 공증인과 어울렸다" },
  { id: "november", ctx: "11월 꿈을 꿈", text: "11월 꿈을 꾸었다" },
  { id: "ache", ctx: "몸에 저림이 스멀스멀 번짐", text: "몸에 저림이 스멀스멀 번졌다" },
  { id: "figure", ctx: "숫자 때문에 사업이 어수선함", text: "숫자 때문에 사업이 어수선해졌다" },
  // 지킴 — 이번 배치가 건드린 기존 상징의 옛 답이 그대로인가(§25 곁가지 · §30 곁가지)
  { id: "dark", ctx: "길을 가다 어둠이 덮침", text: "길을 가다가 어둠이 덮쳤다" },
  { id: "dark", ctx: "어둠 속에서 벗이나 아이를 잃음", text: "어둠 속에서 아이를 잃어버렸다" },
  { id: "ache", ctx: "몸에 통증이 있음", text: "온몸에 통증이 있었다" },
  { id: "figure", ctx: "숫자를 봄", text: "숫자를 보았다" },
  { id: "bleeding", ctx: "피를 흘리는 꿈을 꿈", text: "피를 흘리는 꿈을 꾸었다" },
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
