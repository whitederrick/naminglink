// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 271 — Theater~Threshing. 새 상징 여섯(theater·
// thermometer·thimble·thirst·thorns·threshing)을 세우고, 기존 둘
// (thief·thread)에 문맥을 나눠 붙였다. Thigh는 통째로 건너뛰었다 —
// 기존 legs가 이미 「허벅지」를 쥐고 세 문장 다 legs의 기존 의미와
// 같은 그림. Theater의 그랜드 오페라 문장도 기존 opera와 같은 그림이라
// 건너뜀. thread 기본값을 「실 꿈을 꿈」(더 막연한 새 그림)으로 바꿔
// FALLBACK_FIRST에 얼렸다.
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
  // ── 배치 271 새 문맥 (27건) ────────────────────────────────────────────
  { id: "thief", ctx: "도둑이 되어 경관에게 쫓김", text: "도둑이 되어 경관에게 쫓겼다" },
  { id: "thief", ctx: "스스로 도둑을 쫓거나 붙잡음", text: "스스로 도둑을 붙잡았다" },
  { id: "thread", ctx: "실 꿈을 꿈", text: "실 꿈을 꾸었다" },
  { id: "thread", ctx: "실이 끊어진 것을 봄", text: "실이 끊어진 것을 보았다" },
  { id: "theater", ctx: "극장에 있음", text: "극장에 있었다" },
  { id: "theater", ctx: "스스로 연극배우가 됨", text: "스스로 연극배우가 되었다" },
  { id: "theater", ctx: "보드빌 극장에 감", text: "보드빌 극장에 갔다" },
  { id: "theater", ctx: "극장에서 박수 치며 웃음", text: "극장에서 박수 치며 웃었다" },
  { id: "theater", ctx: "불이 나거나 소동이 일어 극장에서 달아나려 함", text: "불이 나서 극장에서 달아나려 했다" },
  { id: "thermometer", ctx: "온도계를 봄", text: "온도계를 보았다" },
  { id: "thermometer", ctx: "깨진 온도계를 봄", text: "깨진 온도계를 보았다" },
  { id: "thermometer", ctx: "온도계 수은이 내려감을 봄", text: "온도계 수은이 내려가는 것을 보았다" },
  { id: "thermometer", ctx: "온도계 수은이 올라감을 봄", text: "온도계 수은이 올라가는 것을 보았다" },
  { id: "thimble", ctx: "골무를 씀", text: "골무를 썼다" },
  { id: "thimble", ctx: "여성이 골무를 씀", text: "여성이 골무를 썼다" },
  { id: "thimble", ctx: "골무를 잃어버림", text: "골무를 잃어버렸다" },
  { id: "thimble", ctx: "낡거나 깨진 골무를 봄", text: "낡거나 깨진 골무를 보았다" },
  { id: "thimble", ctx: "새 골무를 받거나 삼", text: "새 골무를 받았다" },
  { id: "thimble", ctx: "끝이 열린 골무가 실은 막혀 있음을 봄", text: "끝이 열린 골무가 실은 막혀 있었다" },
  { id: "thirst", ctx: "갈증을 느낌", text: "갈증을 느꼈다" },
  { id: "thirst", ctx: "달콤한 음료로 갈증을 풂", text: "달콤한 음료로 갈증을 풀었다" },
  { id: "thirst", ctx: "남이 갈증에 마시는 것을 봄", text: "남이 갈증에 마시는 것을 보았다" },
  { id: "thorns", ctx: "가시 꿈을 꿈", text: "가시 꿈을 꾸었다" },
  { id: "thorns", ctx: "가시가 푸른 잎 아래 숨어 있음을 봄", text: "가시가 푸른 잎사귀 아래 숨어 있는 것을 보았다" },
  { id: "threshing", ctx: "곡식을 타작함", text: "곡식을 타작했다" },
  { id: "threshing", ctx: "짚만 많고 낟알은 적게 타작함", text: "짚만 많고 낟알은 적게 타작했다" },
  { id: "threshing", ctx: "타작하다가 기계가 고장 나거나 사고가 남", text: "타작하다가 기계가 고장 났다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징들의 옛 답이 그대로인지 ────────
  { id: "thief", ctx: "도적을 쫓아가는 것을 봄", text: "도적을 쫓아가는 것을 지켜보았다" },
  { id: "thread", ctx: "실을 얻음", text: "실을 얻었다" },
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
