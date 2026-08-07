// 인명용 한자·로마자 기준 자료가 **원본과 같은가.**
//
// ## 2026-08-07에 고친 것
//
// 원본 PDF(`docs/*.pdf`)가 없으면 **첫 줄에서 스택 트레이스로 죽었다.** 그 PDF는 레포에
// 없고(대법원·국립국어원에서 받아 두는 것) 그래서 **아홉 개 검사 중 하나도 돌지 않았다** —
// 분기 점검을 하러 온 사람이 얻는 것이 스택 트레이스뿐이었다.
//
// 지금은 **자료만으로 볼 수 있는 검사는 다 돌리고**, 해시 대조만 「원본 없음」으로 남긴다.
// 그 사실은 끝에 눈에 띄게 적는다 — 조용히 넘기면 「다 봤다」로 읽힌다.
//
// 실행: apps/naminglink 에서  node scripts/validate-official-reference-data.mjs
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const loadJson = async (relativePath) =>
  JSON.parse(await readFile(path.join(root, relativePath), "utf8"));

/** 원본 PDF가 없으면 `null`. 죽지 않고 「못 봤다」를 들고 간다. */
const sha256 = async (relativePath) => {
  try {
    return createHash("sha256")
      .update(await readFile(path.join(root, relativePath)))
      .digest("hex");
  } catch {
    return null;
  }
};

/** 해시를 대조하지 못한 원본. 끝에 다시 알린다. */
const missingSources = [];

const [hanja, romanization] = await Promise.all([
  loadJson("data/official/scourt-hanja.json"),
  loadJson("data/official/scourt-romanization.json"),
]);

const checks = [];
const check = (name, condition, actual) => {
  checks.push({ name, ok: Boolean(condition), actual });
};

const hanjaKeys = hanja.entries.map((entry) => `${entry.hangul}:${entry.hanja}`);
const romanKeys = romanization.entries.map(
  (entry) => `${entry.hangul}:${entry.romanization}:${entry.surnameUsable}:${entry.givenNameUsable}`,
);
const uniqueHanjaCharacters = new Set(hanja.entries.map((entry) => entry.hanja));
const romanReadings = new Set(romanization.entries.map((entry) => entry.hangul));
const meaningCount = hanja.entries.filter((entry) => entry.meaningKo).length;

check("romanization row count", romanization.entries.length === 2321, romanization.entries.length);
check("romanization unique reading count", romanReadings.size === 2272, romanReadings.size);
check("romanization rows have no exact duplicates", new Set(romanKeys).size === romanKeys.length, romanKeys.length);
check("Hanja reading-entry count", hanja.entries.length === 10380, hanja.entries.length);
check("Hanja listed code-point count", uniqueHanjaCharacters.size === 9493, uniqueHanjaCharacters.size);
check("Hanja rows have no reading-character duplicates", new Set(hanjaKeys).size === hanjaKeys.length, hanjaKeys.length);
check("Hanja meanings are substantially populated", meaningCount >= 10370, meaningCount);
check(
  "every Hanja reading exists in romanization reference",
  hanja.entries.every((entry) => romanReadings.has(entry.hangul)),
  hanja.entries.filter((entry) => !romanReadings.has(entry.hangul)).length,
);
check(
  "required representative Hanja are present",
  [
    ["가", "家"],
    ["남", "南"],
    ["규", "圭"],
    ["준", "俊"],
    ["수", "秀"],
  ].every(([reading, character]) =>
    hanja.entries.some((entry) => entry.hangul === reading && entry.hanja === character),
  ),
  "가-家, 남-南, 규-圭, 준-俊, 수-秀",
);
/** 원본이 있으면 해시를 대조하고, 없으면 「검사 안 함」으로 남긴다(통과로 세지 않는다). */
const checkHash = async (name, relativePath, expected) => {
  const actual = await sha256(relativePath);
  if (actual === null) {
    missingSources.push(relativePath);
    return;
  }
  check(name, expected === actual, expected);
};

await checkHash("Hanja PDF hash", "docs/hanja.pdf", hanja.source.sha256);
await checkHash(
  "romanization PDF hash",
  "docs/국어의 로마자 표기 조회.pdf",
  romanization.source.sha256,
);

const failed = checks.filter((item) => !item.ok);
console.log(
  JSON.stringify(
    { ok: failed.length === 0, checked: checks.length, checks, failed, missingSources },
    null,
    2,
  ),
);
if (missingSources.length) {
  console.error(
    `\n⚠ 원본 ${missingSources.length}개가 없어 해시를 대조하지 못했다: ${missingSources.join(", ")}`,
  );
  console.error("   자료가 원본과 같은지는 **확인되지 않았다.** 분기 점검 때는 원본을 받아 둘 것.");
  console.error("   (대법원 인명용 한자표 · 국립국어원 로마자 표기 조회 — `docs/`에 그대로 둔다)");
}
if (failed.length) process.exit(1);
