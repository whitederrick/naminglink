// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 272 — Throat~Tiger. 새 상징 넷(throne·thumb·
// tickle·ticks)을 세우고, 기존 셋(neck·thunder·tiger)에 문맥을 나눠
// 붙였다. Throat은 「목」이 이미 neck의 term_ko라 그쪽에 병합. thunder·
// tiger 둘 다 막연한 첫 문장(천둥소리를 들음·경관에게 잡힘류 이미
// 있음)을 건너뛰었고, tiger의 「물리치거나 죽임」도 기존 「호랑이를
// 잡음」(殺, 이미 죽였 discriminator를 쥠)과 같은 그림이라 건너뜀.
// thunder·tiger 기본값은 있던 대로 FALLBACK_FIRST로 얼렸다.
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
  // ── 배치 272 새 문맥 (24건) ────────────────────────────────────────────
  { id: "neck", ctx: "잘 발달되고 우아한 목을 봄", text: "잘 발달되고 우아한 목을 보았다" },
  { id: "neck", ctx: "목이 아픔을 느낌", text: "목이 아픔을 느꼈다" },
  { id: "throne", ctx: "왕좌에 앉음", text: "왕좌에 앉았다" },
  { id: "throne", ctx: "왕좌에서 내려옴", text: "왕좌에서 내려왔다" },
  { id: "throne", ctx: "남이 왕좌에 있음을 봄", text: "남이 왕좌에 있는 것을 보았다" },
  { id: "thumb", ctx: "엄지손가락을 봄", text: "엄지손가락을 보았다" },
  { id: "thumb", ctx: "엄지손가락이 아픔", text: "엄지손가락이 아팠다" },
  { id: "thumb", ctx: "엄지손가락이 없음", text: "엄지손가락이 없었다" },
  { id: "thumb", ctx: "엄지손가락이 유난히 작아 보임", text: "엄지손가락이 유난히 작아 보였다" },
  { id: "thumb", ctx: "엄지손가락이 비정상적으로 큼", text: "엄지손가락이 비정상적으로 컸다" },
  { id: "thumb", ctx: "엄지손가락이 더러움", text: "엄지손가락이 더러웠다" },
  { id: "thumb", ctx: "엄지손가락 손톱이 아주 길게 자람", text: "엄지손가락 손톱이 아주 길게 자랐다" },
  { id: "thunder", ctx: "천둥 치는 소나기 속에 있음", text: "천둥 치는 소나기 속에 있었다" },
  { id: "thunder", ctx: "땅을 뒤흔드는 무시무시한 천둥소리를 들음", text: "땅을 뒤흔드는 무시무시한 천둥소리를 들었다" },
  { id: "tickle", ctx: "간지럼을 탐", text: "간지럼을 탔다" },
  { id: "tickle", ctx: "남을 간지럽힘", text: "남을 간지럽혔다" },
  { id: "ticks", ctx: "진드기가 살갗을 기어다님을 봄", text: "진드기가 살갗을 기어다니는 것을 보았다" },
  { id: "ticks", ctx: "몸의 진드기를 눌러 죽임", text: "몸의 진드기를 눌러죽였다" },
  { id: "ticks", ctx: "가축에 붙은 큰 진드기를 봄", text: "가축에 붙은 큰 진드기를 보았다" },
  { id: "tiger", ctx: "호랑이가 저를 향해 다가옴", text: "호랑이가 저를 향해 다가왔다" },
  { id: "tiger", ctx: "호랑이가 저를 공격함", text: "호랑이가 저를 공격했다" },
  { id: "tiger", ctx: "호랑이가 저에게서 달아나는 것을 봄", text: "호랑이가 저에게서 달아나는 것을 보았다" },
  { id: "tiger", ctx: "우리에 갇힌 호랑이들을 봄", text: "우리에 갇힌 호랑이들을 보았다" },
  { id: "tiger", ctx: "호랑이 가죽 깔개를 봄", text: "호랑이 가죽 깔개를 보았다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징들의 옛 답이 그대로인지 ────────
  { id: "neck", ctx: "제 목을 봄", text: "제 목을 보았다" },
  { id: "thunder", ctx: "우레가 크게 침", text: "우레가 크게 쳤다" },
  { id: "tiger", ctx: "사나운 호랑이가 크게 울부짖음", text: "사나운 호랑이가 크게 울부짖었다" },
  { id: "tiger", ctx: "호랑이를 잡음", text: "호랑이를 잡았다" },
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
