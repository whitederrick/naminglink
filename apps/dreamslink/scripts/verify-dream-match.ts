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
check("조사가 붙어도 걸린다", pig.matched.some((m) => m.id === "pig"), pig.matched.map((m) => m.term_ko).join(","));
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
  muddy.matched.map((m) => `${m.term_ko}(${m.matchedOn})`).join(","),
);

// **매칭 0건이 정상 결과다.** 여기서 억지로 뭔가를 만들면 그때부터 날조가 시작된다.
const none = matchDream("zzzz qqqq 아무 상징도 없는 문장");
check("미매칭은 빈 결과 + neutral", none.matched.length === 0 && none.mood === "neutral", none.mood);

// ── 낱말 경계 ───────────────────────────────────────────────────────────────
// **한 음절 상징이 다른 낱말 안에서 걸리면 안 된다.** 배포본에서 실제로 새고 있었다.
const inWord = matchDream("아무 특별할 것 없는 하루였다");
check("합성어 속 한 글자는 안 걸린다(특별→별)", !inWord.matched.some((m) => m.id === "star"), inWord.matched.map((m) => m.term_ko).join(","));

const particle = matchDream("뱀에게 물렸다");
check("조사 속 한 글자는 안 걸린다(에게→게)", !particle.matched.some((m) => m.term_ko === "게"), particle.matched.map((m) => m.term_ko).join(","));

// **낱말 첫머리가 통째로 열려 있었다.** 위의 두 경우(합성어 뒤·조사 속)만 막고 앞 글자만
// 보던 시절, 한 음절 상징이 낱말 **첫머리**에서는 그대로 걸렸다. 시험 문장 열두 개가 전부
// 오탐이었다(2026-08-06). 한 음절 상징이 예순 개라 실제 문장이면 거의 반드시 하나는 걸린다.
//
// **표본 하나로 끝내지 않는다.** 이 결함이 한 글자짜리 전부에 걸쳐 있었으므로 여럿을 센다.
const FIRST_SYLLABLE_TRAPS: Array<[string, string]> = [
  ["친구에게 말했다", "말"],
  ["배고픔을 느꼈다", "배"],
  ["손님이 찾아왔다", "손"],
  ["발표를 하는 꿈이었다", "발"],
  ["차분하게 걸었다", "자동차"],
  ["해변가를 걸었다", "해"],
  ["새벽에 깼다", "새"],
  ["개울가에 앉아 있었다", "개"],
  ["관심이 없었다", "관"],
  ["약속에 늦었다", "약"],
  ["밤늦게 돌아왔다", "밤"],
  ["소리를 질렀다", "소"],
];
const trapped = FIRST_SYLLABLE_TRAPS.filter(([text, term]) =>
  matchDream(text).matched.some((m) => m.term_ko === term),
);
check(
  `낱말 첫머리의 한 글자는 안 걸린다 (${FIRST_SYLLABLE_TRAPS.length}개)`,
  trapped.length === 0,
  trapped.map(([text, term]) => `${text}→${term}`).join(" · "),
);

// **막기만 하고 끝나면 안 된다.** 제대로 쓰인 한 글자 상징은 그대로 걸려야 한다.
// 조사가 붙은 꼴을 여럿 둔다 — 조사 목록(`PARTICLES`)을 줄이면 여기서 걸린다.
const standalone = matchDream("큰 별이 빛났다");
check("낱말로 쓰인 한 글자는 걸린다", standalone.matched.some((m) => m.id === "star"), standalone.matched.map((m) => m.term_ko).join(","));

const WITH_PARTICLES: Array<[string, string]> = [
  ["소를 몰고 갔다", "소"],
  ["불이 크게 났다", "불"],
  ["똥을 밟았다", "똥"],
  ["말이 달렸다", "말"],
  ["집에 들어갔다", "집"],
  ["밤을 주웠다", "밤"],
];
const lost = WITH_PARTICLES.filter(
  ([text, term]) => !matchDream(text).matched.some((m) => m.term_ko === term),
);
check(
  `조사가 붙은 한 글자는 그대로 걸린다 (${WITH_PARTICLES.length}개)`,
  lost.length === 0,
  lost.map(([text, term]) => `${text}→${term} 놓침`).join(" · "),
);

// ── 태몽 ───────────────────────────────────────────────────────────────────
// **태그가 아니라 고른 의미로 판정한다.** 사전을 넓히며 돼지·소·말에도 태몽 태그를 붙였는데,
// 태그만 보면 돼지꿈을 꾼 사람이 전부 태몽이 된다 — 돼지는 보통 재물 꿈이다.
const pigPlain = matchDream("돼지가 집에 들어왔다");
check("돼지꿈만으로는 태몽이 아니다", pigPlain.conception === false, `conception=${pigPlain.conception}`);

// 임신을 말한 사람에게는 태몽 의미가 먼저다. **낱말 수로 겨루면 원래 의미가 이긴다.**
const pigPregnant = matchDream("임신했는데 돼지가 집에 들어오는 꿈을 꿨다");
const pigMeaning = pigPregnant.matched.find((m) => m.id === "pig")?.meaning.interpretation_ko ?? "";
check("임신을 말하면 태몽 의미를 고른다", pigPregnant.conception && pigMeaning.includes("태몽"), pigMeaning);

// 의미 자체가 태몽인 상징은 맥락 없이도 태몽이다.
const dragon = matchDream("용이 하늘로 올라갔다");
check("전통적으로 태몽인 상징은 그대로 태몽", dragon.conception === true);

// 태몽과 무관한 꿈이 태몽으로 새지 않는다.
const fall = matchDream("추락하는 꿈을 꿨다");
check("무관한 꿈은 태몽이 아니다", fall.conception === false, `conception=${fall.conception}`);

// ── 대조군 — 검사가 실제로 잡는지 스스로 증명한다 ─────────────────────────
// 늘 통과하는 하니스는 없는 것과 같다. 아래가 통과해 버리면 위 검사들이 장식이다.
const control = matchDream("돼지");
check(
  "대조군 — 없는 상징은 걸리지 않는다",
  !control.matched.some((m) => m.id === "dragon"),
  control.matched.map((m) => m.term_ko).join(","),
);
check(
  "대조군 — 빈 입력은 아무것도 만들지 않는다",
  matchDream("").matched.length === 0,
);

console.log(failures === 0 ? "\nALL PASS" : `\n${failures}건 실패`);
if (failures > 0) process.exitCode = 1;
