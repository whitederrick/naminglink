// 근거 있는 의미를 가졌는데 `culture_note`가 비어 있던 상징 다섯에 원문 인용을 채운다.
//
// 어떻게 찾았나 — `scripts/audit-dream-source-coverage.mjs`를 짜서 상징별 원문 커버리지를
// 세다가, 손으로 셌던 수치(밀러 미개척 72개)와 스크립트 수치(74개)가 어긋나 원인을
// 봤더니 이 다섯이었다(CLAUDE.md §10 #40·41 — 보고에 실을 수를 손으로 세지 말 것.
// 이번엔 스크립트가 손 계산의 오차를 잡아냈다).
//
// 무엇이 문제였나 — 2026-08-26 `dc28636` 커밋이 이 다섯에 원문 근거로 새 의미를 넣으면서
// **인용문을 커밋 메시지에만 적고 데이터의 `culture_note`에는 안 넣었다.** 그 결과:
//   - 의미는 `source: "tradition"`으로 올바르게 표시됨(실제로 근거가 있으므로)
//   - 그런데 상징 화면(`dream/symbol/[id]/page.tsx`)의 "전해 오는 배경" 절은
//     `culture_note`로 그리므로 **아예 안 뜬다**
//   - 근거가 git 이력에만 살아 있고 제품에는 안 보이는 상태로 하루 넘게 방치됐다
//
// 다섯 인용 전부 `zhougong-jiemeng-parsed.json`에서 직접 재확인했다(커밋 메시지를
// 그대로 믿지 않고 원문 대조).
//
// 실행: node scripts/backfill-missing-culture-notes.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const filePath = path.resolve(
  "apps/dreamslink/src/lib/dream-symbols.data.json",
);
const data = JSON.parse(readFileSync(filePath, "utf8"));

const NOTES = {
  tiger:
    "중국 고전 《주공해몽》 「虎入宅中官職重」(호랑이가 집에 들어오면 중요한 관직을 얻는다)를 근거로 삼았다.",
  ox: "중국 고전 《주공해몽》 「牛觸人凡事不成」(소가 사람을 받으면 모든 일이 이루어지지 않는다)을 근거로 삼았다.",
  horse:
    "중국 고전 《주공해몽》 「乘馬快吉鈍主凶」(말을 타고 빨리 달리면 길하고 느리면 흉하다)을 근거로 삼았다.",
  fish: "중국 고전 《주공해몽》 「群魚游水主有財」(물고기가 떼지어 헤엄치면 재물이 생긴다)를 근거로 삼았다.",
  turtle:
    "중국 고전 《주공해몽》 「捉龜者主喪事至」(거북이를 잡으면 상을 당할 일이 온다)를 근거로 삼았다.",
};

let touched = 0;
for (const [id, note] of Object.entries(NOTES)) {
  const symbol = data.symbols.find((s) => s.id === id);
  if (!symbol) throw new Error(`상징 없음: ${id}`);
  if (symbol.culture_note) {
    console.log(`이미 있음, 건너뜀: ${id}`);
    continue;
  }
  symbol.culture_note = note;
  touched++;
  console.log(`근거 채움: ${id}`);
}

const previousVersion = data.dictVer;
const [major, minor] = previousVersion.split(".").map(Number);
data.dictVer = `${major}.${minor + 1}.0`;

const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`\n채운 상징: ${touched}개`);
console.log(`dictVer: ${previousVersion} -> ${data.dictVer}`);
