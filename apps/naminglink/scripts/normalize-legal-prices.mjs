// 약관 로케일 파일의 원화 금액 표기를 결제 화면과 같은 ₩2,900 형식으로 통일한다.
//
// AI 번역이 두 가지를 로케일 관습대로 바꿔놓는다.
//   ① 천 단위 구분자: 2.900(de·it·pt·vi·id) / 2 900(fr) — 다른 표기에 익숙한 독자에겐 2.9로 읽힌다.
//   ② 통화 단위: ₩ 접두·₩ 접미·Won·won·وون·วอน·វ៉ុន·ウォン·韩元·वोन 이 뒤섞인다.
// 심지어 같은 파일 안에서도 문서마다 형식이 달라진다(de는 "990 Won"과 "990 ₩"을 함께 씀).
// product-settings의 displayPrice는 로케일과 무관하게 ₩39,000으로 렌더하므로 그 형식에 맞춘다.
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
// 각 언어가 쓴 '원'. 라틴 문자 표기만 단어 경계를 요구한다(다른 단어 안에 걸리지 않도록).
const WON_WORD = "(?:Won\\b|won\\b|وون|วอน|វ៉ុន|ウォン|韩元|वोन)";
const ALL_AMOUNTS = ["990", "2,900", "4,900", "9,900", "39,000"];

let changedFiles = 0;
for (const file of readdirSync(DIR).filter((name) => name.endsWith(".ts") && !["ko.ts", "types.ts", "index.ts"].includes(name))) {
  const full = path.join(DIR, file);
  const before = readFileSync(full, "utf8");
  let after = before;

  // ① 천 단위 구분자를 쉼표로.
  for (const [head, tail] of AMOUNTS) {
    after = after.replace(new RegExp(`\\b${head}${SEPARATOR}${tail}\\b`, "g"), `${head},${tail}`);
  }

  // ② 통화 단위를 ₩ 접두로. 접미 기호·각 언어 단어·이미 접두인 것의 여분 공백까지 한 형태로 모은다.
  for (const amount of ALL_AMOUNTS) {
    const escaped = amount.replace(/,/g, ",");
    after = after
      .replace(new RegExp(`${escaped}\\s*${WON_WORD}`, "g"), `₩${amount}`)
      .replace(new RegExp(`${escaped}\\s*₩`, "g"), `₩${amount}`)
      .replace(new RegExp(`₩\\s+${escaped}`, "g"), `₩${amount}`);
  }
  // 통화 단어를 걷어내면서 뒤 단어와 붙어버린 경우 공백을 되돌린다(띄어쓰기 없는 언어 포함).
  after = after.replace(/(₩[\d,]+)(?=\p{L})/gu, "$1 ");

  if (after !== before) {
    writeFileSync(full, after);
    changedFiles += 1;
    console.log(`normalized: ${file}`);
  }
}
console.log(changedFiles ? `\n${changedFiles}개 파일 정규화.` : "\n변경 없음.");
