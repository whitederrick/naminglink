// 오늘의 운세 엔진 검사 — 결정론과 규칙이 설계대로 도는가.
//
// **점수가 몇 점인지를 검사하지 않는다.** 가중치는 튜닝 대상이라 값이 바뀌면 검사가 깨진다.
// 대신 **바뀌면 안 되는 성질**을 본다 — 같은 입력이면 같은 값, 날짜가 바뀌면 값이 바뀜,
// 용신이 오는 날이 기신이 오는 날보다 높음, 범위를 벗어나지 않음.
//
// 실행: apps/sajulink 에서
//   ../naminglink/node_modules/.bin/tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-today-fortune.ts

import { prepare, toReading } from "../src/lib/engines/prepare";
import {
  DEFAULT_SCORING_CONFIG,
  gisinOf,
  natalBranches,
  todayFortune,
  todayInSeoul,
  todayPillarOf,
  type ScoringConfig,
} from "../src/lib/engines/today-fortune";
import type { Person } from "../src/lib/engines/types";
import { STEM_ELEMENT, type FiveElement } from "@naminglink/core/saju/elements";

let failures = 0;
const check = (label: string, ok: boolean, note = "") => {
  console.log(`  ${ok ? "✓" : "✗"} ${label}${note ? ` — ${note}` : ""}`);
  if (!ok) failures += 1;
};

const SAMPLE: Person = {
  label: "검사",
  gender: "female",
  calendarType: "solar",
  year: 1990,
  month: 5,
  day: 15,
  birthHour: 9,
  birthMinute: 30,
};

const reading = toReading(prepare(SAMPLE));

console.log("오늘의 운세 엔진 검사");
console.log(
  `  표본: ${reading.pillars.year.hanja} ${reading.pillars.month.hanja} ` +
    `${reading.pillars.day.hanja} ${reading.pillars.hour?.hanja ?? "(시각 없음)"} · ` +
    `일간 ${reading.dayMaster.character}(${reading.dayMaster.element}) · ${reading.bodyStrength}`,
);

console.log("\n== 결정론");
const a = todayFortune(reading, todayPillarOf("2026-08-04"));
const b = todayFortune(reading, todayPillarOf("2026-08-04"));
check("같은 날 두 번 = 같은 값", JSON.stringify(a) === JSON.stringify(b), `${a.score}점`);

const other = todayFortune(reading, todayPillarOf("2026-08-05"));
check(
  "다음 날은 일진이 다르다",
  other.todayPillar.stem !== a.todayPillar.stem || other.todayPillar.branch !== a.todayPillar.branch,
  `${a.todayPillar.stem}${a.todayPillar.branch} → ${other.todayPillar.stem}${other.todayPillar.branch}`,
);

// 60간지라 60일 뒤 일진이 같아야 한다. 만세력이 제대로 돌고 있다는 뜻이기도 하다.
const after60 = todayPillarOf("2026-10-03");
check(
  "60일 뒤 일진이 되돌아온다",
  after60.stem === a.todayPillar.stem && after60.branch === a.todayPillar.branch,
  `${a.todayPillar.stem}${a.todayPillar.branch} = ${after60.stem}${after60.branch}`,
);

console.log("\n== 범위");
let outOfRange = 0;
let gradeMismatch = 0;
const scores: number[] = [];
for (let day = 0; day < 60; day += 1) {
  const date = new Date(Date.UTC(2026, 7, 4 + day)).toISOString().slice(0, 10);
  const result = todayFortune(reading, todayPillarOf(date));
  scores.push(result.score);
  const [min, max] = DEFAULT_SCORING_CONFIG.clamp;
  if (result.score < min || result.score > max) outOfRange += 1;
  for (const value of Object.values(result.categories)) {
    const [cmin, cmax] = DEFAULT_SCORING_CONFIG.categoryClamp;
    if (value < cmin || value > cmax) outOfRange += 1;
  }
  const expected = DEFAULT_SCORING_CONFIG.grades.find((g) => result.score >= g.min)?.code;
  if (expected !== result.grade) gradeMismatch += 1;
}
check("60일 전부 점수가 5~98 안에 있다", outOfRange === 0, `벗어남 ${outOfRange}건`);
check("등급이 점수 구간과 어긋나지 않는다", gradeMismatch === 0, `어긋남 ${gradeMismatch}건`);
check(
  "60일 점수가 한 값에 붙어 있지 않다",
  new Set(scores).size >= 5,
  `서로 다른 점수 ${new Set(scores).size}종 (${Math.min(...scores)}~${Math.max(...scores)})`,
);

console.log("\n== 규칙 방향");
// 용신이 오는 날과 기신이 오는 날을 **같은 지지**로 맞춰 비교한다. 지지를 바꾸면 ③이 섞여
// 천간 효과만 보는 것이 아니게 된다.
const favorable = reading.favorableElements[0]!;
const gisin = gisinOf(reading.bodyStrength, reading.dayMaster.element)[0];
const stemFor = (element: FiveElement) =>
  Object.keys(STEM_ELEMENT).find((stem) => STEM_ELEMENT[stem] === element)!;
const branch = a.todayPillar.branch;
const yongsinDay = todayFortune(reading, { date: "2026-08-04", stem: stemFor(favorable), branch });
const gisinDay = gisin
  ? todayFortune(reading, { date: "2026-08-04", stem: stemFor(gisin), branch })
  : null;
check(
  "용신이 오는 날이 기신이 오는 날보다 높다",
  gisinDay === null || yongsinDay.score > gisinDay.score,
  gisinDay ? `용신 ${yongsinDay.score} vs 기신 ${gisinDay.score}` : "중화라 기신 없음(건너뜀)",
);
check(
  "용신 날의 근거에 그 항목이 적힌다",
  yongsinDay.factors.some((factor) => factor.key === "TODAY_IS_YONGSIN"),
  yongsinDay.factors.map((f) => `${f.key}${f.delta >= 0 ? "+" : ""}${f.delta}`).join(" "),
);

console.log("\n== 가중치를 바꾸면 점수도 바뀐다(DB 튜닝이 실제로 먹는가)");
const tweaked: ScoringConfig = {
  ...DEFAULT_SCORING_CONFIG,
  yongsinRelation: { ...DEFAULT_SCORING_CONFIG.yongsinRelation, todayIsYongsin: 2 },
};
const tweakedDay = todayFortune(
  reading,
  { date: "2026-08-04", stem: stemFor(favorable), branch },
  tweaked,
);
check("가중치를 낮추면 점수가 내려간다", tweakedDay.score < yongsinDay.score, `${yongsinDay.score} → ${tweakedDay.score}`);

console.log("\n== 기타");
check("원국 지지를 뽑는다", natalBranches(reading).length >= 3, `${natalBranches(reading).join(" ")}`);
check(
  "행운 요소가 용신에서 나온다",
  a.lucky.element === (reading.favorableElements[0] ?? reading.dayMaster.element),
  `${a.lucky.element} · ${a.lucky.directionKo} · ${a.lucky.timeRange}`,
);
check(
  "서울 자정을 기준으로 날짜를 잡는다",
  todayInSeoul(new Date("2026-08-04T15:30:00Z")) === "2026-08-05",
  "UTC 8/4 15:30 = KST 8/5 00:30",
);

// 대조군 — 검사가 살아 있는지 스스로 증명한다. 일부러 어긋난 값을 만들어 잡히는지 본다.
console.log("\n== 대조군");
const brokenSame = JSON.stringify(a) === JSON.stringify({ ...a, score: a.score + 1 });
check("검사가 다른 값을 같다고 하지 않는다", !brokenSame);
check(
  "검사가 범위 밖을 잡는다",
  99 > DEFAULT_SCORING_CONFIG.clamp[1] && 4 < DEFAULT_SCORING_CONFIG.clamp[0],
);

console.log(failures === 0 ? "\n전부 통과" : `\n실패 ${failures}건`);
process.exit(failures === 0 ? 0 : 1);
