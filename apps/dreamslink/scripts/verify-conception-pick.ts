// **태몽 신호가 있을 때, 태몽 의미가 둘 이상인 상징에서 올바른 쪽이 뽑히는지** 지킨다.
//
// ## 무엇을 막는가 (2026-09-02에 실제로 뚫려 있던 자리)
//
// `chooseMeaning` 은 꿈 글에 태몽 낱말(임신·태몽·출산…)이 있으면 태몽 의미를 먼저 본다.
// 그런데 첫 판은 `meanings.find(...)` 로 **맨 앞의 태몽 의미를 무조건** 돌려주었다 —
// 점수를 보지 않았다. 그래서 **태몽 의미가 둘 이상인 상징 다섯**에서 뒤엣것이 영영
// 안 뽑혔다(뱀·해·달·분·출산). 실물로 이랬다:
//
//   「임신 중인데 뱀이 몸을 휘감는 꿈을 꿨다」 → 「뱀이 품속으로 들어옴」  (틀림)
//   「출산 꿈인데 미혼 여성이 아이를 낳았다」   → 「기혼 여성이 …」        (틀림)
//
// 유료 태몽 리포트가 읽는 자리라 조용히 틀린 뜻이 나갔다. 고침은 **태몽 의미들 안에서
// 점수로 고르는 것**이고, 이 검사기가 그것을 지킨다.
//
// ## 이 검사기가 못 잡는 것 (§22 — 먼저 적는다)
//
//   · 태몽 의미가 **하나뿐인** 상징은 안 본다 — 거기서는 고를 것이 없다.
//   · 「이 뜻이 옳은가」는 안 본다. **어느 의미가 뽑히는가**만 본다.
//   · 문장을 손으로 적는다. 사전이 커지면 이 목록도 함께 늘려야 한다 —
//     `태몽 의미가 둘 이상인 상징`이 다섯을 넘으면 아래 CASES 에 더할 것.
//   · **띄어쓴 꼴은 못 본다.** 판별어는 공백으로 쪼개지므로 한 토큰이 「품 안」을 걸칠
//     수 없다 — 「해가 품 안으로 들어왔다」는 지금도 안 갈린다(사전은 「품안」을 갖고
//     있다). 같은 한계로 1글자 판별어(「흰 산호」)도 못 쓴다.
//
// 재구현하지 않는다 — 제품이 쓰는 matchDream 을 그대로 부른다(CLAUDE.md §23).
//
// 실행: apps/dreamslink 에서  npx tsx scripts/verify-conception-pick.ts
// 종료 코드: 0 전부 통과 / 1 어긋난 것 있음 / 2 검사할 것이 없음
import { matchDream, isConceptionMeaning } from "../src/lib/engines/dream-match";
import { DREAM_SYMBOLS } from "../src/lib/dream-symbols";

type Case = { id: string; text: string; want: string };

const CASES: Case[] = [
  // 뒤엣 태몽 의미 — 고치기 전에는 다섯 다 앞엣것으로 갔다
  { id: "snake", text: "임신 중인데 뱀이 몸을 휘감는 꿈을 꿨다", want: "뱀이 몸을 휘감음" },
  { id: "sun", text: "임신했는데 해가 품속으로 들어오는 꿈을 꿨다", want: "해가 품 안으로 들어옴" },
  { id: "moon", text: "임신했는데 달이 품 안으로 들어오는 꿈을 꿨다", want: "달이 품 안으로 들어옴" },
  { id: "face-powder", text: "임신했는데 분을 얻어 아내에게 주었다", want: "분을 얻어 아내에게 줌" },
  { id: "birth", text: "출산 꿈인데 미혼 여성이 아이를 낳았다", want: "미혼 여성이 아이를 낳는 꿈을 꿈" },
  // 앞엣 태몽 의미 — 고침이 이쪽을 깨뜨리면 안 된다
  { id: "snake", text: "임신했는데 뱀이 품속으로 들어왔다", want: "뱀이 품속으로 들어옴" },
  { id: "sun", text: "임신했는데 해를 삼켰다", want: "해를 삼킴" },
  { id: "moon", text: "임신했는데 달을 삼켰다", want: "달을 삼킴" },
  { id: "birth", text: "출산 꿈인데 기혼 여성이 아이를 낳았다", want: "기혼 여성이 아이를 낳는 꿈을 꿈" },
];

// **검사 0건은 통과가 아니다**(§3) — 지킬 상징이 실제로 그 모양인지 먼저 센다.
const multi = DREAM_SYMBOLS.filter(
  (s) => s.meanings.filter((m) => isConceptionMeaning(m)).length >= 2,
);
console.log(`태몽 의미가 둘 이상인 상징 ${multi.length}개: ${multi.map((s) => s.id).join(", ")}`);
if (multi.length === 0) {
  console.error("지킬 자리가 하나도 없다 — 검사 안 됨으로 처리한다.");
  process.exit(2);
}
const covered = new Set(CASES.map((c) => c.id));
const uncovered = multi.filter((s) => !covered.has(s.id));
if (uncovered.length > 0) {
  console.error(`시험 문장이 없는 상징: ${uncovered.map((s) => s.id).join(", ")} — CASES 에 더할 것.`);
}

let bad = uncovered.length;
for (const c of CASES) {
  const hit = matchDream(c.text).matched.find((m) => m.id === c.id);
  const got = hit?.meaning?.context ?? "(안 걸림)";
  if (got === c.want) {
    console.log(`✓ [${c.id}] "${c.text}" → 「${got}」`);
  } else {
    bad += 1;
    console.log(`✗ [${c.id}] "${c.text}" → 「${got}」  (바란 것: 「${c.want}」)`);
  }
}

console.log(`\n시험 ${CASES.length}건 · 어긋난 것 ${bad}건`);
process.exit(bad > 0 ? 1 : 0);
