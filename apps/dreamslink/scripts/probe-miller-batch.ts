// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 283 — Uncle~Uniform. 새 상징 셋(uncle·subway·
// uniform), 기존 naked-body(알몸)·adversity(역경)에 문맥을 나눠 붙임.
// Underground의 첫 문장(지하 거처에 있음)은 기존 Basement 표제어와 같은
// 그림이라 §31로 건너뛰고 둘째 문장(지하철을 탐)만 새 상징(subway)으로
// 세웠다. Undress는 aliases_en에 이미 "undressed"가 있어 naked-body에
// 합쳤는데, 셋째 문장(남들이 옷 벗은 것을 봄)은 기존 「남이 알몸인 것을
// 봄」과 같은 그림이라 §31로 건너뜀. Unfortunate는 별칭 「불운한 처지」가
// 이미 있어 adversity에 합쳤다.
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
  // ── 배치 283 새 문맥 (13건) ────────────────────────────────────────────
  { id: "uncle", ctx: "꿈에 삼촌을 봄", text: "꿈에 삼촌을 보았다" },
  { id: "uncle", ctx: "삼촌이 상심한 모습을 되풀이해서 봄", text: "삼촌이 상심한 모습을 되풀이해서 보았다" },
  { id: "uncle", ctx: "삼촌이 죽은 것을 봄", text: "삼촌이 죽은 것을 보았다" },
  { id: "uncle", ctx: "삼촌과 오해가 생김", text: "삼촌과 오해가 생겼다" },
  { id: "subway", ctx: "지하철을 탐", text: "지하철을 탔다" },
  { id: "naked-body", ctx: "스스로 옷을 벗고 있음", text: "스스로 옷을 벗고 있었다" },
  { id: "naked-body", ctx: "여성이 제 나라 통치자가 옷 벗은 것을 봄", text: "여성이 제 나라 통치자가 옷 벗은 것을 보았다" },
  { id: "adversity", ctx: "스스로 불운하다고 여김", text: "스스로 불운하다고 여겼다" },
  { id: "uniform", ctx: "제복을 봄", text: "제복을 보았다" },
  { id: "uniform", ctx: "처녀가 제복을 입음", text: "처녀가 제복을 입었다" },
  { id: "uniform", ctx: "처녀가 제복을 벗어 버림", text: "처녀가 제복을 벗어 버렸다" },
  { id: "uniform", ctx: "낯선 제복을 입은 이들을 봄", text: "낯선 제복을 입은 이들을 보았다" },
  { id: "uniform", ctx: "제복 입은 벗이나 친척이 슬픈 낯빛인 것을 봄", text: "제복 입은 벗이 슬픈 낯빛인 것을 보았다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────
  { id: "naked-body", ctx: "남이 알몸인 것을 봄", text: "남이 알몸인 것을 보았다" },
  { id: "adversity", ctx: "역경에 처함", text: "내가 역경에 처했다" },
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
