// 《주공해몽》 원문(위키문고 원본, apps/dreamslink/data-sources/zhougong-jiemeng-raw.txt)을
// 분류별 · 항목별로 쪼개 구조화된 JSON으로 만든다.
//
// 각 줄은 전각 공백(　)으로 나뉜 2~3개의 짧은 구절이다. 예:
//   "天光照主疾病除　天晴雨散百憂去　天明婦人生貴子"
// → 세 항목으로 쪼갠다. 분류(章節)는 "== 이름 ==" 줄이 이후 항목까지 이어진다.
//
// 실행: node scripts/parse-zhougong-jiemeng.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const srcPath = path.resolve(
  "apps/dreamslink/data-sources/zhougong-jiemeng-raw.txt",
);
const outPath = path.resolve(
  "apps/dreamslink/data-sources/zhougong-jiemeng-parsed.json",
);

const raw = readFileSync(srcPath, "utf8");
const lines = raw.split(/\r?\n/);

let category = null;
const entries = [];
let categoryOrder = 0;

for (const line of lines) {
  const trimmed = line.trim();
  if (!trimmed) continue;
  if (trimmed.startsWith("{{")) continue; // 위키 템플릿({{Header|...}}, {{Pd-old}})

  const categoryMatch = trimmed.match(/^==\s*(.+?)\s*==$/);
  if (categoryMatch) {
    category = categoryMatch[1];
    categoryOrder += 1;
    continue;
  }

  if (!category) continue; // 머리말(詩曰 구절) — 분류 밖이라 항목으로 안 센다

  const phrases = trimmed.split("　").map((s) => s.trim()).filter(Boolean);
  for (const phrase of phrases) {
    entries.push({ category, categoryOrder, text: phrase });
  }
}

const byCategory = new Map();
for (const e of entries) {
  byCategory.set(e.category, (byCategory.get(e.category) ?? 0) + 1);
}

writeFileSync(
  outPath,
  `${JSON.stringify({ source: "zh.wikisource.org/wiki/周公解夢", fetchedAt: "2026-08-26", entries }, null, 2)}\n`,
  "utf8",
);

console.log(`총 항목: ${entries.length}개, 분류: ${byCategory.size}개`);
for (const [cat, count] of byCategory) {
  console.log(`  ${cat}: ${count}`);
}
