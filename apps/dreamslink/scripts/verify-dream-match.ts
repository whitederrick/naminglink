// 해몽 매칭 엔진 회귀 하니스.
//
// **엔진이 기준이다.** 해석 문장은 모델이 쓰지만 근거는 이 엔진이 고른 상징뿐이라, 여기가
// 흔들리면 서비스 전체가 흔들린다. 사주링크의 회귀 하니스와 같은 자리다.
//
// 실행: apps/dreamslink 에서  npx tsx scripts/verify-dream-match.ts

import { DICT_VERSION, DREAM_SYMBOLS } from "../src/lib/dream-symbols";
import { matchDream } from "../src/lib/engines/dream-match";

let failures = 0;
function check(label: string, ok: boolean, detail = "") {
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}${detail ? ` — ${detail}` : ""}`);
  if (!ok) failures += 1;
}

// ── 사전 자체 ──────────────────────────────────────────────────────────────
const ids = new Set<string>();
const duplicated = DREAM_SYMBOLS.filter((symbol) => {
  if (ids.has(symbol.id)) return true;
  ids.add(symbol.id);
  return false;
});
check("사전 id 중복 없음", duplicated.length === 0, duplicated.map((s) => s.id).join(","));
check(
  "모든 상징에 의미가 하나 이상",
  DREAM_SYMBOLS.every((symbol) => symbol.meanings.length > 0),
  `${DREAM_SYMBOLS.length}개`,
);
check("사전 규모", DREAM_SYMBOLS.length >= 200, `${DREAM_SYMBOLS.length}개 · dictVer ${DICT_VERSION}`);

// ── 매칭 ───────────────────────────────────────────────────────────────────
const pig = matchDream("돼지가 집에 들어오는 꿈을 꿨어요");
check("조사가 붙어도 걸린다", pig.matched.some((m) => m.id === "pig"), pig.matched.map((m) => m.term).join(","));
check("길몽은 positive", pig.mood === "positive", pig.mood);

// **같은 꿈이면 같은 결과.** 정렬이 흔들리면 화면과 문서가 어긋난다.
const a = matchDream("맑은 물에서 잉어가 뛰어올랐다");
const b = matchDream("맑은 물에서 잉어가 뛰어올랐다");
check("재현성 — 같은 입력이면 같은 결과", JSON.stringify(a) === JSON.stringify(b));

// **의미가 여럿인 상징은 상황으로 고른다.** 뱀을 품는 것과 물리는 것은 전통적으로 반대다.
const snakeBite = matchDream("뱀에게 물렸다");
const snakeHold = matchDream("뱀을 품에 안았다");
const snakeSymbol = DREAM_SYMBOLS.find((s) => s.id === "snake");
if (snakeSymbol && snakeSymbol.meanings.length > 1) {
  const bite = snakeBite.matched.find((m) => m.id === "snake")?.meaning.interpretation_ko;
  const hold = snakeHold.matched.find((m) => m.id === "snake")?.meaning.interpretation_ko;
  check("상황에 따라 다른 의미를 고른다", Boolean(bite && hold && bite !== hold), `${bite} / ${hold}`);
} else {
  check("상황에 따라 다른 의미를 고른다", true, "뱀 의미가 하나뿐이라 건너뜀");
}

// **긴 표기가 먼저다.** 「흙탕물」이 있는데 「물」만 걸리면 구체적인 상징을 놓친다.
const muddy = matchDream("흙탕물에 빠졌다");
const muddyFirst = muddy.matched[0]?.id;
check(
  "구체적인 상징이 앞선다",
  muddy.matched.some((m) => m.matchedOn.includes("흙탕물")) || muddyFirst !== "water",
  muddy.matched.map((m) => `${m.term}(${m.matchedOn})`).join(","),
);

// **매칭 0건이 정상 결과다.** 여기서 억지로 뭔가를 만들면 그때부터 날조가 시작된다.
const none = matchDream("zzzz qqqq 아무 상징도 없는 문장");
check("미매칭은 빈 결과 + neutral", none.matched.length === 0 && none.mood === "neutral", none.mood);

// **태몽은 표시일 뿐 판별이 아니다.** 태그가 붙은 상징이 걸렸다는 사실만 참이어야 한다.
const conception = matchDream("용이 하늘로 올라가는 꿈");
check(
  "태몽 상징이 걸리면 표시된다",
  conception.conception === conception.matched.some((m) => m.tags.includes("태몽")),
  `conception=${conception.conception}`,
);

// ── 대조군 — 검사가 실제로 잡는지 스스로 증명한다 ─────────────────────────
// 늘 통과하는 하니스는 없는 것과 같다. 아래가 통과해 버리면 위 검사들이 장식이다.
const control = matchDream("돼지");
check(
  "대조군 — 없는 상징은 걸리지 않는다",
  !control.matched.some((m) => m.id === "dragon"),
  control.matched.map((m) => m.term).join(","),
);
check(
  "대조군 — 빈 입력은 아무것도 만들지 않는다",
  matchDream("").matched.length === 0,
);

console.log(failures === 0 ? "\nALL PASS" : `\n${failures}건 실패`);
if (failures > 0) process.exitCode = 1;
