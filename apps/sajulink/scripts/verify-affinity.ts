// 인연의 결 엔진 검증.
//
// 이 화면의 주장은 하나다 — **점수 규칙을 새로 만들지 않았고, 궁합 엔진의 것을 그대로 거꾸로
// 돌렸을 뿐이다.** 그 주장이 참인지 기계가 확인한다. 여기 실패가 나면 두 화면이 같은 사람을 두고
// 다른 말을 하고 있다는 뜻이고, 그건 유료 상품(궁합)의 신뢰를 깎는다.
//
// 확인하는 것:
//   1) 결정성 — 같은 입력이면 언제나 같은 결과(저장하지 않으므로 캐시 대신 결정성으로 보장)
//   2) 축 완전성 — 천간 10, 지지 12, 정렬은 내림차순
//   3) **궁합 엔진과의 일치** — 인연의 결이 1등으로 꼽은 일간을 실제로 가진 사람을 만들어
//      runMatch를 돌리면, 그 사람의 일간 관계·띠 관계 항목 점수가 여기서 말한 값과 같아야 한다
//   4) 성별 미선택 시 배우자성 항목이 빠지는가
//
// 실행: apps/inyeonlink 에서
//   ../naminglink/node_modules/.bin/tsx scripts/verify-affinity.ts

import {
  AFFINITY_VERSION,
  ENGINE_VERSION,
  runAffinity,
  runMatch,
  type Person,
} from "../src/lib/engines";
import { EARTHLY_BRANCHES } from "../src/lib/engines/branches";
import { prepare } from "../src/lib/engines/prepare";

let failures = 0;

function ok(label: string, condition: boolean, detail = "") {
  if (!condition) failures += 1;
  console.log(
    `  ${condition ? "PASS" : "FAIL"}  ${label}${condition ? "" : `  ${detail}`}`,
  );
}

const SEOUL = { timeZone: "Asia/Seoul", longitude: 126.978 };

function person(
  overrides: Partial<Person> & Pick<Person, "year" | "month" | "day">,
): Person {
  return {
    gender: "female",
    calendarType: "solar",
    birthHour: 10,
    birthMinute: 30,
    birthplace: SEOUL,
    ...overrides,
  };
}

/**
 * 특정 일간을 가진 실제 날짜를 찾는다.
 *
 * 일주는 60일 주기라 어느 날부터 세든 60일 안에 반드시 나온다. 인연의 결이 "이런 사람"이라고
 * 말한 유형을 **실존하는 생년월일로 바꿔** 궁합 엔진에 넣어 보기 위한 것이다.
 */
function findDateWithDayStem(stem: string) {
  const start = new Date(Date.UTC(1990, 0, 1));
  for (let offset = 0; offset < 60; offset += 1) {
    const date = new Date(start.getTime() + offset * 86400000);
    const candidate = person({
      year: date.getUTCFullYear(),
      month: date.getUTCMonth() + 1,
      day: date.getUTCDate(),
    });
    if (prepare(candidate).dayMaster.character === stem) return candidate;
  }
  return null;
}

console.log(`인연의 결 검증 — ${AFFINITY_VERSION} (점수 규칙 ${ENGINE_VERSION})\n`);

// 기준이 되는 사람 하나. 값을 바꾸면 아래 기대치가 함께 흔들리므로 고정해 둔다.
const me = person({ year: 1988, month: 5, day: 17, gender: "male" });

console.log("1) 결정성");
{
  const first = runAffinity(me, "female");
  const second = runAffinity(me, "female");
  ok(
    "같은 입력 두 번 → 같은 결과",
    JSON.stringify(first) === JSON.stringify(second),
  );
}

console.log("\n2) 축 완전성과 정렬");
{
  const outcome = runAffinity(me, "female");
  ok("천간 10개", outcome.stems.length === 10, `${outcome.stems.length}`);
  ok("띠 12개", outcome.zodiac.length === 12, `${outcome.zodiac.length}`);
  ok(
    "일지 12개",
    outcome.dayBranch.length === EARTHLY_BRANCHES.length,
    `${outcome.dayBranch.length}`,
  );
  ok(
    "천간 정렬이 내림차순",
    outcome.stems.every(
      (candidate, index) =>
        index === 0 || outcome.stems[index - 1].rank >= candidate.rank,
    ),
  );
  ok(
    "띠 정렬이 내림차순",
    outcome.zodiac.every(
      (candidate, index) =>
        index === 0 || outcome.zodiac[index - 1].score >= candidate.score,
    ),
  );
  ok(
    "필요한 기운이 비어 있지 않다",
    outcome.needElements.length > 0,
    JSON.stringify(outcome.needElements),
  );
}

console.log("\n3) 궁합 엔진과 같은 값을 말하는가");
{
  const outcome = runAffinity(me, "female");

  // 상위 3 + 최하위 1을 실제 사람으로 바꿔 궁합을 돌린다.
  const targets = [...outcome.stems.slice(0, 3), outcome.stems[9]];
  for (const candidate of targets) {
    const partnerBirth = findDateWithDayStem(candidate.stem);
    if (!partnerBirth) {
      ok(`${candidate.stem} 일간을 가진 날짜를 찾음`, false, "60일 안에 없음");
      continue;
    }
    const partner = { ...partnerBirth, gender: "female" as const };
    const match = runMatch(me, partner);
    const bondFactor = match.engines
      .find((engine) => engine.key === "saju")
      ?.factors.find((factor) => factor.key === "dayMasterRelation");
    const spouseFactor = match.engines
      .find((engine) => engine.key === "saju")
      ?.factors.find((factor) => factor.key === "spouseStar");

    ok(
      `${candidate.stem} — 일간 관계 점수가 궁합과 같다`,
      bondFactor?.score === candidate.bondScore,
      `인연의 결 ${candidate.bondScore} vs 궁합 ${bondFactor?.score}`,
    );
    ok(
      `${candidate.stem} — 배우자성 점수가 궁합과 같다`,
      spouseFactor?.score === candidate.spouse?.score,
      `인연의 결 ${candidate.spouse?.score} vs 궁합 ${spouseFactor?.score}`,
    );
  }

  // 띠 축도 같은 방식으로 맞대어 본다. 1등 띠를 가진 사람과의 궁합에서 띠 항목 점수가
  // 인연의 결이 말한 값과 같아야 한다.
  const bestZodiac = outcome.zodiac[0];
  const partnerBirth = findYearWithBranch(bestZodiac.branch);
  if (!partnerBirth) {
    ok(`${bestZodiac.branch} 연지를 가진 해를 찾음`, false, "12년 안에 없음");
  } else {
    const match = runMatch(me, partnerBirth);
    const branchFactor = match.engines
      .find((engine) => engine.key === "zodiac")
      ?.factors.find((factor) => factor.key === "branchRelation");
    ok(
      `${bestZodiac.branch}(${bestZodiac.animal}) — 띠 관계 점수가 궁합과 같다`,
      branchFactor?.score === bestZodiac.score,
      `인연의 결 ${bestZodiac.score} vs 궁합 ${branchFactor?.score}`,
    );
  }
}

console.log("\n4) 성별을 정하지 않으면 배우자성이 빠진다");
{
  const outcome = runAffinity(me, null);
  ok(
    "모든 후보의 배우자성이 null",
    outcome.stems.every((candidate) => candidate.spouse === null),
  );
  ok(
    "순위 점수가 일간 관계 점수와 같다(비중 재정규화)",
    outcome.stems.every((candidate) => candidate.rank === candidate.bondScore),
  );

  // 성별을 밝힌 경우와 순서가 달라질 수 있다. 그것은 정상이다 — 항목이 하나 늘었기 때문이다.
  const withGender = runAffinity(me, "female");
  console.log(
    `  참고: 성별 미선택 1위 ${outcome.stems[0].stem} / 여성 상대 1위 ${withGender.stems[0].stem}`,
  );
}

console.log("\n5) 띠 → 출생 연도 환산");
{
  const outcome = runAffinity(me, "female");
  ok("내 사주 연주의 해 = 1988", outcome.myZodiacYear === 1988, `${outcome.myZodiacYear}`);

  const rooster = outcome.zodiac.find((c) => c.animal === "rooster");
  ok(
    "닭띠(酉) 연도에 1981·1993·2005가 들어 있다",
    [1981, 1993, 2005].every((year) => rooster?.years.includes(year)),
    JSON.stringify(rooster?.years),
  );
  ok(
    "연도가 모두 12년 간격",
    (rooster?.years ?? []).every(
      (year, index, list) => index === 0 || year - list[index - 1] === 12,
    ),
  );
  ok(
    "내 띠(용)의 연도에 내 해가 들어 있다",
    outcome.zodiac.find((c) => c.animal === "dragon")?.years.includes(1988) ===
      true,
  );
  ok(
    "일지에는 연도를 붙이지 않는다",
    outcome.dayBranch.every((c) => c.years.length === 0),
  );

  // **입춘 경계.** 1988-01-15는 달력으로는 1988년이지만 사주로는 아직 1987년(정묘년)이다.
  // 여기서 한 해가 어긋나면 나이 차가 전부 어긋난다.
  const beforeIpchun = runAffinity(
    person({ year: 1988, month: 1, day: 15, gender: "male" }),
    "female",
  );
  ok(
    "1988-01-15 → 사주 연주는 1987년",
    beforeIpchun.myZodiacYear === 1987,
    `${beforeIpchun.myZodiacYear}`,
  );
  ok(
    "1988-01-15의 띠는 토끼(卯)",
    beforeIpchun.me.animal === "rabbit",
    beforeIpchun.me.animal,
  );
}

/** 특정 연지를 가진 해를 찾는다. 연주는 60년 주기이나 지지만 보면 12년 안에 반드시 나온다. */
function findYearWithBranch(branch: string) {
  for (let year = 1985; year < 1985 + 12; year += 1) {
    const candidate = person({ year, month: 6, day: 15, gender: "female" });
    if (prepare(candidate).yearBranch === branch) return candidate;
  }
  return null;
}

console.log(
  failures === 0
    ? "\nALL PASS — 인연의 결이 궁합 엔진과 같은 값을 말한다."
    : `\n${failures}건 실패`,
);
process.exit(failures === 0 ? 0 : 1);
