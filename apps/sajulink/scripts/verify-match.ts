// 궁합 채점 규칙 검증 + 회귀 하니스.
//
// 왜 필요한가: 점수 규칙을 손대면 총점이 움직이는데, 지금까지는 **무엇이 얼마나 움직였는지
// 볼 도구가 없었다.** 좋아진 것인지 그냥 달라진 것인지 구분할 근거가 없으면 규칙을 고칠 수
// 없다. 그래서 두 가지를 함께 한다.
//
//   1) 불변 규칙 검증 — 어떤 규칙 변경에도 깨지면 안 되는 것들(결정성·대칭성·점수 범위·
//      비중 정규화·지지 관계표의 정합성). 실패하면 종료 코드 1.
//   2) 회귀 스냅샷 — 고정 입력 세트의 총점을 `match-baseline.json`과 대조해 **차이를 표로
//      보여 준다.** 판정하지 않는다. 규칙을 의도적으로 바꿨으면 `--update`로 갱신한다.
//
// 실행: apps/inyeonlink 에서
//   ../naminglink/node_modules/.bin/tsx scripts/verify-match.ts
//   ../naminglink/node_modules/.bin/tsx scripts/verify-match.ts --update

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";

import {
  BRANCH_ANIMALS,
  ENGINE_VERSION,
  ENGINE_WEIGHTS,
  runMatch,
  scoreBand,
  type Person,
} from "../src/lib/engines";
import {
  EARTHLY_BRANCHES,
  branchRelation,
  BRANCH_RELATION_SCORE,
  SAMHAP_LEADERS,
} from "../src/lib/engines/branches";

// tsx는 이 스크립트를 CJS로 돌려서 `import.meta.dirname`이 비어 있다. __dirname을 쓴다.
const BASELINE_PATH = path.join(__dirname, "match-baseline.json");
const UPDATE = process.argv.includes("--update");

let failures = 0;
function check(label: string, actual: unknown, expected: unknown) {
  const ok = String(actual) === String(expected);
  if (!ok) failures += 1;
  console.log(
    `  ${ok ? "PASS" : "FAIL"}  ${label}${ok ? "" : `  ->  ${actual} (기대: ${expected})`}`,
  );
}

function ok(label: string, condition: boolean, detail = "") {
  if (!condition) failures += 1;
  console.log(`  ${condition ? "PASS" : "FAIL"}  ${label}${condition ? "" : `  ${detail}`}`);
}

const SEOUL = { timeZone: "Asia/Seoul", longitude: 126.978 };
const NEW_YORK = { timeZone: "America/New_York", longitude: -74.006 };

function person(overrides: Partial<Person> & Pick<Person, "year" | "month" | "day">): Person {
  return {
    gender: "female",
    calendarType: "solar",
    birthHour: 10,
    birthMinute: 30,
    birthplace: SEOUL,
    ...overrides,
  };
}

// 고정 입력 세트. 각 사례는 **규칙의 특정 갈래를 지나가도록** 골랐다. 하나를 고치면 어떤
// 사례가 움직이는지가 곧 그 규칙이 무엇을 건드렸는지를 말해 준다.
const CASES: Array<{ id: string; note: string; a: Person; b: Person }> = [
  {
    id: "banhap-no-leader",
    note: "삼합 그룹이되 왕지가 없는 두 글자(申辰) — 합으로 치지 않는다",
    a: person({ year: 1992, month: 3, day: 14, gender: "female" }),
    b: person({ year: 1988, month: 7, day: 2, gender: "male" }),
  },
  {
    id: "banhap-year",
    note: "연지 반합(申子 — 왕지 子를 낀다)",
    a: person({ year: 1992, month: 3, day: 14, gender: "female" }),
    b: person({ year: 1996, month: 6, day: 10, gender: "male" }),
  },
  {
    id: "chung-year",
    note: "연지 충(子午)",
    a: person({ year: 1984, month: 5, day: 20, gender: "male" }),
    b: person({ year: 1990, month: 9, day: 8, gender: "female" }),
  },
  {
    id: "same-branch",
    note: "같은 지지",
    a: person({ year: 1990, month: 4, day: 4, gender: "male" }),
    b: person({ year: 1990, month: 11, day: 21, gender: "female" }),
  },
  {
    id: "wonjin-candidate",
    note: "연지 원진(子未)",
    a: person({ year: 1996, month: 6, day: 10, gender: "female" }),
    b: person({ year: 1991, month: 10, day: 25, gender: "male" }),
  },
  {
    id: "no-gender",
    note: "성별 미입력 — 배우자성 항목이 빠지고 비중이 재정규화된다",
    a: person({ year: 1993, month: 1, day: 30, gender: null }),
    b: person({ year: 1995, month: 8, day: 17, gender: null }),
  },
  {
    id: "no-birthtime",
    note: "출생 시각 미입력 — 시주가 빠진다",
    a: person({ year: 1987, month: 7, day: 15, birthHour: null, birthMinute: null }),
    b: person({ year: 1986, month: 2, day: 3, birthHour: null, birthMinute: null, gender: "male" }),
  },
  {
    id: "overseas",
    note: "해외 출생(뉴욕) — 진태양시 경로",
    a: person({ year: 1994, month: 12, day: 1, birthplace: NEW_YORK, gender: "male" }),
    b: person({ year: 1997, month: 4, day: 22, gender: "female" }),
  },
  {
    id: "dst-1987",
    note: "1987 서머타임 구간 출생",
    a: person({ year: 1987, month: 7, day: 20, birthHour: 0, birthMinute: 20, gender: "female" }),
    b: person({ year: 1985, month: 3, day: 9, gender: "male" }),
  },
  {
    id: "lunar",
    note: "음력 입력",
    a: person({ year: 1989, month: 5, day: 5, calendarType: "lunar", gender: "female" }),
    b: person({ year: 1983, month: 9, day: 12, gender: "male" }),
  },
  {
    id: "same-person",
    note: "같은 사주 두 명 — 자기 자신과의 궁합",
    a: person({ year: 1991, month: 6, day: 6, gender: "male" }),
    b: person({ year: 1991, month: 6, day: 6, gender: "female" }),
  },
];

console.log(`엔진: ${ENGINE_VERSION}\n`);

// ───────────────────────────────────────────────────────────────────────────
console.log("=== 1. 지지 관계표의 정합성 ===");
// 십이지 관계는 표가 스스로를 검증할 수 있다. 각 지지가 갖는 관계의 **개수**가 정해져 있기
// 때문이다. 표를 손으로 고치다 한 쌍을 빠뜨리면 여기서 걸린다.

const branches = [...EARTHLY_BRANCHES];

for (const branch of branches) {
  const relations = branches
    .filter((other) => other !== branch)
    .map((other) => branchRelation(branch, other));
  const count = (kind: string) => relations.filter((r) => r === kind).length;

  // 충은 마주 보는 하나뿐이고, 육합도 하나, 원진도 하나다. 반합은 같은 국의 왕지 하나뿐이되
  // 자기가 왕지이면 나머지 둘 모두와 반합이 된다.
  ok(`${branch} 충 1개`, count("CHUNG") === 1, `실제 ${count("CHUNG")}개`);
  ok(`${branch} 육합 1개`, count("YUKHAP") === 1, `실제 ${count("YUKHAP")}개`);
  ok(`${branch} 원진 1개`, count("WONJIN") === 1, `실제 ${count("WONJIN")}개`);

  const expectedBanhap = SAMHAP_LEADERS.has(branch) ? 2 : 1;
  ok(
    `${branch} 반합 ${expectedBanhap}개`,
    count("BANHAP") === expectedBanhap,
    `실제 ${count("BANHAP")}개`,
  );
}

// 충·육합·원진의 상대가 서로 겹치면 판정 순서에 따라 결과가 달라진다. 겹치지 않는 것을
// 표로 확인한다 — 원진을 넣으면서 실제로 확인한 사실이므로 규칙으로 고정해 둔다.
for (const branch of branches) {
  const partners = branches.filter((other) => other !== branch);
  const find = (kind: string) => partners.find((other) => branchRelation(branch, other) === kind);
  const chung = find("CHUNG");
  const yukhap = find("YUKHAP");
  const wonjin = find("WONJIN");
  ok(
    `${branch}의 충·육합·원진 상대가 서로 다름`,
    new Set([chung, yukhap, wonjin]).size === 3,
    `충 ${chung} 육합 ${yukhap} 원진 ${wonjin}`,
  );
}

// 관계는 방향에 무관해야 한다(대칭). 144조합 전수.
let asymmetric = 0;
for (const left of branches) {
  for (const right of branches) {
    if (branchRelation(left, right) !== branchRelation(right, left)) asymmetric += 1;
  }
}
check("지지 관계는 대칭(144조합)", asymmetric, 0);

// 점수표에 빠진 관계가 없어야 한다.
const seenRelations = new Set<string>();
for (const left of branches) {
  for (const right of branches) seenRelations.add(branchRelation(left, right));
}
for (const relation of seenRelations) {
  ok(
    `점수표에 ${relation} 있음`,
    typeof BRANCH_RELATION_SCORE[relation as keyof typeof BRANCH_RELATION_SCORE] === "number",
  );
}
check("띠 동물 12종", Object.keys(BRANCH_ANIMALS).length, 12);

// ───────────────────────────────────────────────────────────────────────────
console.log("\n=== 2. 엔진 비중 ===");
const weightSum = Object.values(ENGINE_WEIGHTS).reduce((sum, w) => sum + w, 0);
ok(`엔진 비중 합이 1 (실제 ${weightSum})`, Math.abs(weightSum - 1) < 1e-9);

// ───────────────────────────────────────────────────────────────────────────
console.log("\n=== 3. 불변 규칙 (전 사례) ===");

for (const testCase of CASES) {
  const first = runMatch(testCase.a, testCase.b);
  const second = runMatch(testCase.a, testCase.b);
  const swapped = runMatch(testCase.b, testCase.a);

  // 결정성 — 저장하지 않는 서비스라 캐시가 없다. 재조회 시 같은 값이 나오는 것을 이것으로
  // 보장한다. 유료 상품에서 숫자가 달라지면 환불 사유가 된다.
  ok(`[${testCase.id}] 결정성`, first.totalScore === second.totalScore,
    `${first.totalScore} vs ${second.totalScore}`);

  // 대칭성 — "A와 B의 궁합"과 "B와 A의 궁합"은 같은 값이어야 한다. 입력 순서는 두 사람의
  // 관계가 아니라 폼의 칸 순서일 뿐이다. 방향이 있는 해석(누가 생하는가)은 읽을거리로
  // 표시하되 **총점은 대칭이어야 한다.**
  ok(`[${testCase.id}] 대칭성`, first.totalScore === swapped.totalScore,
    `${first.totalScore} vs ${swapped.totalScore}`);

  // 점수 범위와 비중 정규화.
  for (const engine of first.engines) {
    ok(`[${testCase.id}] ${engine.key} 점수 범위`,
      engine.score >= 0 && engine.score <= 100, `실제 ${engine.score}`);
    const sum = engine.factors.reduce((acc, f) => acc + f.weight, 0);
    // 사주 엔진은 배우자성이 빠지면 비중 합이 1이 아니게 되고, 그때는 내부에서 나눠 정규화한다.
    // 여기서는 항목 점수가 전부 범위 안인지와 비중이 양수인지만 본다.
    ok(`[${testCase.id}] ${engine.key} 항목 비중 양수 (합 ${sum.toFixed(2)})`,
      engine.factors.every((f) => f.weight > 0));
    ok(`[${testCase.id}] ${engine.key} 항목 점수 범위`,
      engine.factors.every((f) => f.score >= 0 && f.score <= 100));
  }

  // 성별을 밝히지 않으면 배우자성 항목이 없어야 한다(임의 값으로 채우지 않는다).
  const sajuFactors = first.engines.find((e) => e.key === "saju")!.factors;
  const hasSpouse = sajuFactors.some((f) => f.key === "spouseStar");
  const genderKnown = testCase.a.gender !== null && testCase.b.gender !== null;
  ok(`[${testCase.id}] 배우자성 항목 ${genderKnown ? "있음" : "없음"}`, hasSpouse === genderKnown);

  // 강점과 주의점은 서로 다른 항목이어야 한다(항목이 2개 이상일 때).
  ok(`[${testCase.id}] 강점≠주의`,
    sajuFactors.length + 1 < 2 || first.highlights.strength.factor !== first.highlights.caution.factor
      || sajuFactors.length + 1 === 1);

  // precision은 두 사람 모두 시각을 넣었을 때만 COMPLETE.
  const expectPrecision =
    testCase.a.birthHour !== null && testCase.b.birthHour !== null ? "COMPLETE" : "PARTIAL_NO_TIME";
  check(`[${testCase.id}] precision`, first.precision, expectPrecision);
}

// ───────────────────────────────────────────────────────────────────────────
console.log("\n=== 4. 회귀 스냅샷 ===");

type Snapshot = {
  engineVersion: string;
  cases: Record<
    string,
    {
      total: number;
      band: string;
      saju: number;
      zodiac: number;
      factors: Record<string, number>;
      shape: string;
      pillarsA: string;
      pillarsB: string;
    }
  >;
};

function snapshot(): Snapshot {
  const cases: Snapshot["cases"] = {};
  for (const testCase of CASES) {
    const outcome = runMatch(testCase.a, testCase.b);
    const factors: Record<string, number> = {};
    for (const engine of outcome.engines) {
      for (const factor of engine.factors) factors[`${engine.key}.${factor.key}`] = factor.score;
    }
    const pillars = (index: 0 | 1) => {
      const reading = outcome.people[index];
      return [
        reading.pillars.year.hanja,
        reading.pillars.month.hanja,
        reading.pillars.day.hanja,
        reading.pillars.hour?.hanja ?? "—",
      ].join(" ");
    };
    cases[testCase.id] = {
      total: outcome.totalScore,
      band: scoreBand(outcome.totalScore),
      saju: outcome.engines.find((e) => e.key === "saju")!.score,
      zodiac: outcome.engines.find((e) => e.key === "zodiac")!.score,
      factors,
      shape: outcome.relation.shape,
      pillarsA: pillars(0),
      pillarsB: pillars(1),
    };
  }
  return { engineVersion: ENGINE_VERSION, cases };
}

const current = snapshot();

if (UPDATE || !existsSync(BASELINE_PATH)) {
  writeFileSync(BASELINE_PATH, `${JSON.stringify(current, null, 2)}\n`, "utf8");
  console.log(`  베이스라인을 ${existsSync(BASELINE_PATH) ? "갱신" : "생성"}했습니다: ${path.basename(BASELINE_PATH)}`);
  for (const testCase of CASES) {
    const row = current.cases[testCase.id];
    console.log(`  ${testCase.id.padEnd(18)} ${String(row.total).padStart(3)}점 ${row.band.padEnd(12)} ${testCase.note}`);
  }
} else {
  const baseline = JSON.parse(readFileSync(BASELINE_PATH, "utf8")) as Snapshot;
  if (baseline.engineVersion !== current.engineVersion) {
    console.log(`  엔진 버전이 다릅니다: ${baseline.engineVersion} → ${current.engineVersion}`);
  }

  let moved = 0;
  for (const testCase of CASES) {
    const before = baseline.cases[testCase.id];
    const after = current.cases[testCase.id];
    if (!before) {
      console.log(`  NEW   ${testCase.id.padEnd(18)} ${String(after.total).padStart(3)}점  ${testCase.note}`);
      moved += 1;
      continue;
    }
    if (before.total === after.total && before.saju === after.saju && before.zodiac === after.zodiac) {
      const factorMoved = Object.keys(after.factors).filter(
        (key) => before.factors[key] !== after.factors[key],
      );
      if (factorMoved.length === 0) continue;
    }
    moved += 1;
    const delta = after.total - before.total;
    const sign = delta > 0 ? `+${delta}` : String(delta);
    console.log(
      `  MOVE  ${testCase.id.padEnd(18)} ${String(before.total).padStart(3)} → ${String(after.total).padStart(3)} (${sign})  ${testCase.note}`,
    );
    for (const key of new Set([...Object.keys(before.factors), ...Object.keys(after.factors)])) {
      const from = before.factors[key];
      const to = after.factors[key];
      if (from === to) continue;
      console.log(`          ${key}: ${from ?? "—"} → ${to ?? "—"}`);
    }
    if (before.shape !== after.shape) console.log(`          shape: ${before.shape} → ${after.shape}`);
    if (before.pillarsA !== after.pillarsA) console.log(`          A 원국: ${before.pillarsA} → ${after.pillarsA}`);
    if (before.pillarsB !== after.pillarsB) console.log(`          B 원국: ${before.pillarsB} → ${after.pillarsB}`);
  }

  if (moved === 0) {
    console.log("  변동 없음 — 베이스라인과 일치합니다.");
  } else {
    console.log(`\n  ${moved}개 사례가 움직였습니다. 의도한 변경이면 --update로 갱신하십시오.`);
  }
}

console.log(`\n${failures === 0 ? "ALL PASS" : `${failures}건 실패`}`);
process.exit(failures === 0 ? 0 : 1);
