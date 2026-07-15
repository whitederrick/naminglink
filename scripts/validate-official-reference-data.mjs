import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const loadJson = async (relativePath) =>
  JSON.parse(await readFile(path.join(root, relativePath), "utf8"));
const sha256 = async (relativePath) =>
  createHash("sha256")
    .update(await readFile(path.join(root, relativePath)))
    .digest("hex");

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
check(
  "Hanja PDF hash",
  hanja.source.sha256 === (await sha256("docs/hanja.pdf")),
  hanja.source.sha256,
);
check(
  "romanization PDF hash",
  romanization.source.sha256 === (await sha256("docs/국어의 로마자 표기 조회.pdf")),
  romanization.source.sha256,
);

const failed = checks.filter((item) => !item.ok);
console.log(JSON.stringify({ ok: failed.length === 0, checks, failed }, null, 2));
if (failed.length) process.exit(1);
