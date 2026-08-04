// 무료 API가 유료 리포트의 내용을 내보내지 않는지 본다.
//
// 이 서비스가 파는 것은 PDF 하나뿐이고, 그 값어치는 오로지 "화면에 없는 것이 여기 있다"에서
// 나온다. 그런데 `/api/match`·`/api/affinity`가 엔진 결과를 통째로 돌려주고 있어 파는 내용이
// 결제 없이 브라우저까지 갔다(2026-08-02 발견). 화면이 그리지 않을 뿐이라 눈으로는 안 보이고,
// 개발자도구 Network 탭에는 그대로 있었다.
//
// 타입에도 가드를 두었지만(`PAID_ONLY_READING_KEYS`가 필드가 늘면 컴파일을 깬다), 그것은
// **빠뜨린 키**를 잡을 뿐 "정말로 응답에서 빠졌는가"는 값으로 확인해야 한다. 여기서 실제
// 계산 결과를 만들어 대조한다.
//
// 실행: apps/inyeonlink 에서
//   node_modules/.bin/tsx scripts/verify-public-outcome.ts

import { runAffinity, runMatch, type Person } from "../src/lib/engines";
import {
  PAID_ONLY_READING_FIELDS,
  publicAffinityOutcome,
  publicMatchOutcome,
} from "../src/lib/public-outcome";
import { inputFingerprint } from "../src/lib/report-order-binding";

let failures = 0;

function check(label: string, condition: boolean, detail = "") {
  if (condition) {
    console.log(`  ✓ ${label}`);
    return;
  }
  failures += 1;
  console.error(`  ✗ ${label}${detail ? ` — ${detail}` : ""}`);
}

const personA: Person = {
  label: "A",
  gender: "female",
  calendarType: "solar",
  year: 1990,
  month: 5,
  day: 12,
  lunarLeapMonth: false,
  birthHour: 9,
  birthMinute: 30,
  birthplace: { timeZone: "Asia/Seoul", longitude: 126.978 },
};
const personB: Person = {
  ...personA,
  label: "B",
  gender: "male",
  year: 1988,
  month: 11,
  day: 3,
  birthHour: 14,
};

console.log("궁합 — /api/match");
const match = runMatch(personA, personB);
const publicMatch = publicMatchOutcome(match);
const matchWire = JSON.stringify(publicMatch);

check("원본에는 유료 심화 자료가 있다(대조군)", match.detail !== undefined);
check(
  "응답에는 detail이 없다",
  (publicMatch as Record<string, unknown>).detail === undefined,
);
for (const field of PAID_ONLY_READING_FIELDS) {
  check(`응답 어디에도 ${field}가 없다`, !matchWire.includes(`"${field}"`));
}
check(
  "화면이 쓰는 것은 남아 있다",
  publicMatch.totalScore === match.totalScore &&
    publicMatch.people[0].pillars !== undefined &&
    publicMatch.people[0].bodyStrength !== undefined &&
    publicMatch.people[1].favorableElements !== undefined &&
    publicMatch.relation !== undefined &&
    publicMatch.highlights !== undefined &&
    publicMatch.engines.length === match.engines.length,
);

console.log("\n인연의 결 — /api/affinity");
const affinity = runAffinity(personA, "male");
const publicAffinity = publicAffinityOutcome(affinity);
const affinityWire = JSON.stringify(publicAffinity);

check("원본은 천간 열 개를 담는다(대조군)", affinity.stems.length === 10);
check("원본은 띠 열둘을 담는다(대조군)", affinity.zodiac.length === 12);
check("응답의 천간은 넷뿐(상위 셋 + 꼴찌)", publicAffinity.stems.length === 4);
check("응답의 띠는 넷뿐(상위 셋 + 꼴찌)", publicAffinity.zodiac.length === 4);
check(
  "응답에 일지(dayBranch)가 없다",
  (publicAffinity as Record<string, unknown>).dayBranch === undefined,
);
for (const field of PAID_ONLY_READING_FIELDS) {
  check(`응답 어디에도 ${field}가 없다`, !affinityWire.includes(`"${field}"`));
}

// 화면은 `slice(0, 3)`으로 상위를, 마지막 자리로 꼴찌를 집는다. 자른 뒤에도 같은 자리에서
// 같은 것이 나와야 한다 — 여기가 어긋나면 화면이 엉뚱한 유형을 "가장 잘 맞는다"고 말한다.
check(
  "상위 셋이 원본과 같은 순서다",
  publicAffinity.stems.slice(0, 3).every((entry, index) => entry.stem === affinity.stems[index].stem),
);
check(
  "마지막 자리가 원본의 꼴찌다",
  publicAffinity.stems[publicAffinity.stems.length - 1].stem ===
    affinity.stems[affinity.stems.length - 1].stem,
);
check(
  "띠도 같은 규칙이다",
  publicAffinity.zodiac.slice(0, 3).every((entry, index) => entry.branch === affinity.zodiac[index].branch) &&
    publicAffinity.zodiac[publicAffinity.zodiac.length - 1].branch ===
      affinity.zodiac[affinity.zodiac.length - 1].branch,
);

// 확인기 팝업이 "몇 순위"를 답하려면 전체 순서가 필요하다. 점수는 담기지 않는다.
check("천간 순서는 열 개 전부 온다", publicAffinity.stemOrder.length === 10);
check(
  "순서가 원본과 일치한다",
  publicAffinity.stemOrder.every((stem, index) => stem === affinity.stems[index].stem),
);
check(
  "순서 목록은 글자만이다(점수 없음)",
  publicAffinity.stemOrder.every((stem) => typeof stem === "string"),
);

console.log("");
console.log("주문 결속 — 한 결제로 다른 사람 리포트를 받지 못하게");
const orderInput = { a: personA, b: personB };
check(
  "같은 입력은 같은 지문",
  inputFingerprint(orderInput) === inputFingerprint({ a: personA, b: personB }),
);
check(
  "키 순서가 달라도 같은 지문",
  inputFingerprint({ b: personB, a: personA }) === inputFingerprint(orderInput),
);
check(
  "생년월일 하루만 달라도 다른 지문",
  inputFingerprint({ a: personA, b: { ...personB, day: personB.day + 1 } }) !==
    inputFingerprint(orderInput),
);
check(
  "다른 사람으로 바꾸면 다른 지문",
  inputFingerprint({ a: personB, b: personA }) !== inputFingerprint(orderInput),
);
check(
  "지문에서 생년월일이 드러나지 않는다",
  /^[0-9a-f]{64}$/.test(inputFingerprint(orderInput)) &&
    !inputFingerprint(orderInput).includes(String(personA.year)),
);

console.log("");
if (failures > 0) {
  console.error(`실패 ${failures}건`);
  process.exit(1);
}
console.log("모두 통과");
