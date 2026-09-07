// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 273 — Till~Tomb. 새 상징 여섯(till·tipsy·toad·
// tobacco·toddy·tomatoes)을 세우고, 기존 셋(lumber·alarm-bell·grave)에
// 문맥을 나눠 붙였다. Timber는 lumber와 같은 물건(aliases_en에 이미
// timber가 있었다) — 「목재를 봄」 문장은 lumber 「목재를 봄」과 글자까지
// 같은 그림에 정반대 풀이라 건너뛰고 「죽은 듯 보임」만 붙임. Tocsin은
// alarm-bell과 같은 물건(종=경종)이라 병합했는데, term_en을 원문 그대로
// "alarm bell"(공백)로 안 맞추고 "alarm-bell"(하이픈)로 잘못 지어 처음엔
// 딴 상징이 생겼다 — 원문 term_en을 그대로 복사해 바로잡음(배치 232
// india-rubber 전례와 같은 실수). Tomb의 「제 무덤을 봄」은 grave 「자기
// 무덤을 봄」과 같은 그림이라 건너뜀. alarm-bell 기본값은 새 「위급을
// 알리는 종소리를 들음」으로 바꿔 얼렸다(상징 자체를 describe하는 더
// 자연스러운 자리).
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
  // ── 배치 273 새 문맥 (23건) ────────────────────────────────────────────
  { id: "till", ctx: "돈궤에 돈과 귀중품이 있음을 봄", text: "돈궤에 돈과 귀중품이 있는 것을 보았다" },
  { id: "till", ctx: "돈궤가 비어 있음을 봄", text: "돈궤가 비어 있는 것을 보았다" },
  { id: "lumber", ctx: "목재가 죽은 듯 보임", text: "목재가 죽은 듯 보였다" },
  { id: "tipsy", ctx: "스스로 거나하게 취함", text: "스스로 거나하게 취했다" },
  { id: "tipsy", ctx: "남이 거나하게 취해 있는 것을 봄", text: "남이 거나하게 취해 있는 것을 보았다" },
  { id: "toad", ctx: "두꺼비 꿈을 꿈", text: "두꺼비 꿈을 꾸었다" },
  { id: "toad", ctx: "여성이 두꺼비 꿈을 꿈", text: "여성이 두꺼비 꿈을 꾸었다" },
  { id: "toad", ctx: "두꺼비를 죽임", text: "두꺼비를 죽였다" },
  { id: "toad", ctx: "두꺼비에 손을 댐", text: "두꺼비에 손을 댔다" },
  { id: "tobacco", ctx: "담배 꿈을 꿈", text: "담배 꿈을 꾸었다" },
  { id: "tobacco", ctx: "담배를 씀", text: "담배를 사용했다" },
  { id: "tobacco", ctx: "담배가 자라는 것을 봄", text: "담배가 자라는 것을 보았다" },
  { id: "tobacco", ctx: "잎담배가 말라 있는 것을 봄", text: "잎담배가 말라 있는 것을 보았다" },
  { id: "tobacco", ctx: "담배를 피움", text: "담배를 피웠다" },
  { id: "alarm-bell", ctx: "위급을 알리는 종소리를 들음", text: "위급을 알리는 종소리를 들었다" },
  { id: "alarm-bell", ctx: "여성이 위급을 알리는 종소리를 들음", text: "여성이 위급을 알리는 종소리를 들었다" },
  { id: "toddy", ctx: "토디를 마심", text: "토디를 마셨다" },
  { id: "tomatoes", ctx: "토마토를 먹음", text: "토마토를 먹었다" },
  { id: "tomatoes", ctx: "토마토가 자라는 것을 봄", text: "토마토가 자라는 것을 보았다" },
  { id: "tomatoes", ctx: "여성이 잘 익은 토마토를 봄", text: "여성이 잘 익은 토마토를 보았다" },
  { id: "grave", ctx: "무덤들을 봄", text: "무덤들을 보았다" },
  { id: "grave", ctx: "낡고 허물어진 무덤을 봄", text: "낡고 허물어진 무덤을 보았다" },
  { id: "grave", ctx: "무덤의 비문을 읽음", text: "무덤의 비문을 읽었다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징들의 옛 답이 그대로인지 ────────
  { id: "lumber", ctx: "목재를 봄", text: "목재를 보았다" },
  { id: "alarm-bell", ctx: "잠결에 종소리를 들음", text: "잠결에 종소리를 들었다" },
  { id: "grave", ctx: "빈 무덤을 들여다봄", text: "빈 무덤을 들여다보았다" },
  { id: "grave", ctx: "자기 무덤을 봄", text: "자기 무덤을 보았다" },
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
