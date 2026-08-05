// 무료 응답이 유료 몫을 흘리지 않는지, 한 주문이 결과 한 벌에만 묶이는지 확인한다.
//
// **인연링크에서 실제로 새던 자리다**(2026-08-02). 엔진 결과를 통째로 돌려주는 바람에 PDF에만
// 담기로 한 값이 결제 없이 브라우저까지 갔다. 화면이 그리지 않을 뿐 개발자도구 Network 탭
// 하나면 보였다. 사주링크는 그 코드를 복제해 시작했으므로 같은 검사를 그대로 물려받는다.
//
// 실행: apps/sajulink 에서
//   ../naminglink/node_modules/.bin/tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-public-outcome.ts

import type { Person } from "../src/lib/engines";
import { prepare, toReading } from "../src/lib/engines/prepare";
import { todayFortune, todayPillarOf } from "../src/lib/engines/today-fortune";
import { PAID_ONLY_READING_FIELDS, publicSajuOutcome } from "../src/lib/public-outcome";
import { inputFingerprint } from "../src/lib/report-order-binding";

let failures = 0;

function check(label: string, condition: boolean, detail = "") {
  console.log(`  ${condition ? "✓" : "✗"} ${label}${detail ? ` — ${detail}` : ""}`);
  if (!condition) failures += 1;
}

const PERSON: Person = {
  label: "검사",
  gender: "female",
  calendarType: "solar",
  year: 1990,
  month: 5,
  day: 15,
  birthHour: 9,
  birthMinute: 30,
};

const reading = toReading(prepare(PERSON));
const fortune = todayFortune(reading, todayPillarOf("2026-08-04"));
const outcome = publicSajuOutcome(reading, fortune);
const json = JSON.stringify(outcome);

console.log("무료 응답 검사 — 파는 것이 결제 없이 나가지 않는가");

console.log("\n== 유료 전용 필드");
for (const field of PAID_ONLY_READING_FIELDS) {
  check(`\`${field}\`가 무료 응답에 없다`, !(field in outcome.reading));
}

// **대조군.** 마스킹하지 않은 원본을 같은 방식으로 검사해 "걸리는지" 본다. 이것이 없으면
// 검사 방식이 잘못돼 아무것도 못 잡는 상태에서도 전부 통과로 뜬다(실제로 겪은 함정이다).
console.log("\n== 대조군");
const present = PAID_ONLY_READING_FIELDS.filter((field) => field in reading);
check(
  "원본(엔진 결과)에는 그 필드들이 있다",
  present.length === PAID_ONLY_READING_FIELDS.length,
  `${present.length}/${PAID_ONLY_READING_FIELDS.length}`,
);
check("검사한 필드가 0개가 아니다", PAID_ONLY_READING_FIELDS.length > 0);

// **값으로 보는 검사에도 대조군이 필요하다.** 필드 이름이 사라진 것만 보면, 값이 다른 키에
// 실려 나가는 경우를 놓친다. 그래서 아래에서 값 자체를 문자열로 찾는데 — 그 방식이 실제로
// 걸어 내는지 **마스킹하지 않은 원본으로 확인**한다. 이걸 빠뜨리면 검사가 아무것도 못 잡는
// 상태에서도 전부 통과로 뜬다.
const rawJson = JSON.stringify(reading);
check(
  "원본에서는 강약 판정 값이 잡힌다",
  rawJson.includes(`"${reading.bodyStrength}"`),
  reading.bodyStrength,
);
check(
  "원본에서는 아군 비율 값이 잡힌다",
  rawJson.includes(String(reading.allyRatio)),
  String(reading.allyRatio),
);

console.log("\n== 무료로 주기로 한 것은 제대로 나간다");
check("사주 원국", Boolean(outcome.reading.pillars.day.hanja));
check("오행 세력", Object.keys(outcome.reading.elements).length === 5);
check("일간", Boolean(outcome.reading.dayMaster.character));
check("띠·계절", Boolean(outcome.reading.animal) && Boolean(outcome.reading.seasonElement));
check("오늘의 운세 점수·등급", outcome.today.score > 0 && Boolean(outcome.today.grade));
check("근거 항목", Array.isArray(outcome.today.factors));
// 오늘의 운세는 아끼지 않는다 — 매일 다시 오게 만드는 것이 이 화면의 존재 이유다.
check("행운 요소도 무료다", Boolean(outcome.today.lucky.direction));

// **알고 남긴 겹침 하나.** 행운 요소의 오행은 용신의 첫 오행 그대로다(`luckyOf(favorable[0])`).
// 용신을 유료로 옮겨도 그 한 오행은 오늘의 운세를 타고 나간다 — 상품 결정이 "오늘의 운세는
// 무료"이고 행운 요소가 그 화면의 핵심이기 때문이다.
//
// 여기서 확인하는 것은 **그 겹침이 여전히 그 자리 하나인가**다. 행운 요소의 출처를 바꾸면
// (또는 용신이 다른 경로로 새기 시작하면) 이 검사가 먼저 어긋난다.
console.log("\n== 알고 남긴 겹침 — 행운 오행은 용신의 첫 오행이다");
check(
  "행운 오행 = 용신[0]",
  outcome.today.lucky.element === reading.favorableElements[0],
  `${outcome.today.lucky.element} / 용신 ${reading.favorableElements.join("·")}`,
);
// **오행 이름 하나로는 셀 수 없다.** 처음에 "용신의 나머지 오행이 응답에 없는가"를 이름으로
// 찾았더니 곧바로 걸렸는데, 새서가 아니라 `elements`가 다섯 오행을 **키로** 들고 있기
// 때문이었다 — 흔한 값을 기준 삼으면 멀쩡한 응답을 잡는다.
//
// 용신에만 있는 것은 **그 목록 자체**다(어느 오행이 몇 번째까지 필요한가). 그래서 직렬화한
// 배열로 찾는다.
const favorableList = JSON.stringify(reading.favorableElements);
check(
  "용신 목록이 통째로 나가지 않는다",
  !json.includes(favorableList),
  `${favorableList} (${reading.favorableElements.length}개)`,
);
check(
  "대조군 — 원본에서는 그 목록이 잡힌다",
  rawJson.includes(favorableList),
);

console.log("\n== 주문 결속 — 한 결제로 다른 사람 리포트를 받지 못하게");
const orderInput = { me: PERSON };
check("같은 입력은 같은 지문", inputFingerprint(orderInput) === inputFingerprint({ me: PERSON }));
check(
  "키 순서가 달라도 같은 지문",
  inputFingerprint({ me: { ...PERSON } }) === inputFingerprint(orderInput),
);
check(
  "생년월일 하루만 달라도 다른 지문",
  inputFingerprint({ me: { ...PERSON, day: PERSON.day + 1 } }) !== inputFingerprint(orderInput),
);
check(
  "지문에서 생년월일이 드러나지 않는다",
  !inputFingerprint(orderInput).includes(String(PERSON.year)),
);

console.log("\n== 응답 본문에 유료 값이 문자열로도 섞이지 않았는가");
// 필드 이름만 보면 값이 다른 키에 실려 나가는 경우를 놓친다. 그 항목에만 있는 값으로 본다.
check(
  "아군 비율(allyRatio)의 값이 응답에 없다",
  !json.includes(String(reading.allyRatio)),
  String(reading.allyRatio),
);
// 강약 판정은 `STRONG`·`BALANCED`·`WEAK` 셋 중 하나라 **이름이 아니라 값으로** 봐야 한다.
// 다른 키에 실려 나가도 여기서 걸린다.
check(
  "강약 판정 값이 응답에 없다",
  !json.includes(`"${reading.bodyStrength}"`),
  reading.bodyStrength,
);

console.log(failures === 0 ? "\n모두 통과" : `\n실패 ${failures}건`);
process.exit(failures === 0 ? 0 : 1);
