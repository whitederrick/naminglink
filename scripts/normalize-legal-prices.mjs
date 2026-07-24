// 약관 로케일 파일의 원화 금액 표기를 정규 형식(2,900)으로 통일한다.
// AI 번역이 로케일 관습대로 2.900 / 2 900으로 바꿔놓아, 다른 표기에 익숙한 독자에게는
// 2.9로 읽힐 수 있고 금액 검증(validate-legal-content)도 통과하지 못한다.
// 결정적 문자열 치환이라 번역을 다시 부르지 않는다.
// 실행: cd scripts && node normalize-legal-prices.mjs
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "lib", "legal-content");
const AMOUNTS = [
  ["2", "900"],
  ["4", "900"],
  ["9", "900"],
  ["39", "000"],
];
// 마침표·일반 공백·비분리 공백·좁은 비분리 공백 모두 천 단위 구분자로 쓰였다.
const SEPARATOR = "[.\\u0020\\u00a0\\u202f\\u2009]";

let changedFiles = 0;
for (const file of readdirSync(DIR).filter((name) => name.endsWith(".ts") && name !== "ko.ts" && name !== "types.ts" && name !== "index.ts")) {
  const full = path.join(DIR, file);
  const before = readFileSync(full, "utf8");
  let after = before;
  for (const [head, tail] of AMOUNTS) {
    after = after.replace(new RegExp(`\\b${head}${SEPARATOR}${tail}\\b`, "g"), `${head},${tail}`);
  }
  if (after !== before) {
    writeFileSync(full, after);
    changedFiles += 1;
    console.log(`normalized: ${file}`);
  }
}
console.log(changedFiles ? `\n${changedFiles}개 파일 정규화.` : "\n변경 없음.");
