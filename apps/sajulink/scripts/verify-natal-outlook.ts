// 원국 기준 삶의 네 영역(`natal-outlook.ts`)이 규칙대로 도는지 본다.
//
// **왜 필요한가.** 이 점수는 리포트에 실려 나가고 이용자가 보관한다. 규칙을 손댄 뒤 "대충
// 비슷하네"로 넘기면, 어느 조항이 언제부터 달라졌는지 아무도 모른 채 문서만 바뀐다.
//
// **재현성이 핵심이다.** 같은 사주면 언제나 같은 값이어야 한다 — 재발급 5회가 보장된 상품이라
// 두 번 뽑아 다르면 그 자체가 결함이다.
//
// 실행: apps/sajulink 에서
//   ../naminglink/node_modules/.bin/tsx --tsconfig tsconfig.json scripts/verify-natal-outlook.ts

import { prepare, toReading } from "../src/lib/engines/prepare";
import {
  DEFAULT_NATAL_CONFIG,
  natalOutlook,
  natalTenGodShare,
} from "../src/lib/engines/natal-outlook";
import type { Gender } from "../src/lib/engines/types";

const SEOUL = { timeZone: "Asia/Seoul", longitude: 126.978 };

function person(overrides: Partial<Parameters<typeof prepare>[0]> = {}) {
  return prepare({
    gender: "female",
    calendarType: "solar",
    year: 1992,
    month: 3,
    day: 14,
    birthHour: 9,
    birthMinute: 20,
    birthplace: SEOUL,
    ...overrides,
  });
}

let failures = 0;
function check(label: string, ok: boolean, detail?: string) {
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}${detail ? ` — ${detail}` : ""}`);
  if (!ok) failures += 1;
}

const reading = toReading(person());
const outcome = natalOutlook(reading, "female");

console.log("== 기본");
check(
  "네 영역이 모두 범위 안",
  Object.values(outcome.scores).every((score) => score >= 5 && score <= 98),
  Object.entries(outcome.scores).map(([k, v]) => `${k}:${v}`).join(" "),
);
check("버전이 찍힌다", Boolean(outcome.version), outcome.version);

console.log("\n== 십신 비중");
const share = natalTenGodShare(reading);
const total = Object.values(share).reduce((sum, value) => sum + value, 0);
check("비중의 합이 1", Math.abs(total - 1) < 1e-9, total.toFixed(6));
check(
  "일간 자신은 세지 않는다(비견이 전부를 차지하지 않는다)",
  share.BIGYEON < 0.5,
  `비견 ${(share.BIGYEON * 100).toFixed(1)}%`,
);

console.log("\n== 재현성 — 같은 사주면 언제나 같은 값");
const again = natalOutlook(toReading(person()), "female");
check(
  "두 번 뽑아도 같다",
  JSON.stringify(outcome) === JSON.stringify(again),
);

console.log("\n== 성별");
const male = natalOutlook(reading, "male");
const unknown = natalOutlook(reading, null as Gender);
check(
  "남녀의 배우자성이 다르다(애정 점수가 갈린다)",
  male.scores.love !== outcome.scores.love,
  `남 ${male.scores.love} · 여 ${outcome.scores.love}`,
);
check(
  "성별을 모르면 배우자성을 세지 않는다",
  unknown.factors.love.every((factor) => factor.key === "LOVE_GENDER_UNKNOWN"),
  unknown.factors.love.map((f) => f.key).join(",") || "(항목 없음)",
);
check(
  "성별 미상이면 애정은 기준점 그대로",
  unknown.scores.love === DEFAULT_NATAL_CONFIG.base,
  String(unknown.scores.love),
);

console.log("\n== 규칙이 실제로 움직이는가");
// 재성 가중을 0으로 낮추면 재물 점수가 내려가야 한다. 안 움직이면 그 항목은 죽은 규칙이다.
const noWealth = natalOutlook(reading, "female", {
  ...DEFAULT_NATAL_CONFIG,
  wealth: { ...DEFAULT_NATAL_CONFIG.wealth, starShare: 0 },
});
check(
  "재성 가중을 낮추면 재물이 내려간다",
  noWealth.scores.wealth < outcome.scores.wealth,
  `${outcome.scores.wealth} → ${noWealth.scores.wealth}`,
);

console.log("\n== 대조군 — 검사가 살아 있는가");
// 사주가 다르면 값도 달라야 한다. 늘 같은 값을 내는 엔진이면 위의 검사가 전부 무의미하다.
const other = natalOutlook(toReading(person({ year: 1977, month: 11, day: 2 })), "female");
check(
  "다른 사주는 다른 값을 낸다",
  JSON.stringify(other.scores) !== JSON.stringify(outcome.scores),
  `${JSON.stringify(outcome.scores)} vs ${JSON.stringify(other.scores)}`,
);
check(
  "시각을 모르면 시주가 빠져 값이 달라진다",
  JSON.stringify(
    natalOutlook(toReading(person({ birthHour: null, birthMinute: null })), "female").scores,
  ) !== JSON.stringify(outcome.scores),
);

console.log(failures === 0 ? "\nALL PASS" : `\n${failures}건 실패`);
if (failures > 0) process.exitCode = 1;
