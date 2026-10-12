// 사용: node apply-b-translations.mjs <check|build|insert> <로케일…>
//  check  — 번역을 경로 단위로 펼쳐 기존 검사기(validate-translation.mjs)와 띠 이름 일관성을 확인한다(쓰지 않는다)
//  build  — check 를 통과한 로케일의 문서 12편을 b12/doc/<로케일>.json 으로 만든다
//  insert — build 결과를 저장소 로케일 파일에 넣는다(insert-docs.mjs)
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const SP = path.dirname(here);
const REPO = "C:/myProjects/naminglink/apps/inyeonlink/src/lib/doc-content";
const [mode, ...locales] = process.argv.slice(2);
if (!["check", "build", "insert"].includes(mode ?? "") || !locales.length) {
  console.error("쓰는 법: apply-b-translations.mjs <check|build|insert> <로케일…>");
  process.exit(2);
}
mkdirSync(path.join(here, "doc"), { recursive: true });
mkdirSync(path.join(here, "paths"), { recursive: true });

const unique = JSON.parse(readFileSync(path.join(here, "unique.json"), "utf8"));
const map = JSON.parse(readFileSync(path.join(here, "unique-map.json"), "utf8"));
const leaves = JSON.parse(readFileSync(path.join(here, "en-b-leaves.json"), "utf8"));
const enDocs = JSON.parse(readFileSync(path.join(here, "B-zodiac-12.en.json"), "utf8"));
const ANIMALS = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
const HANJA = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const LABEL = (a) => `docs.guide/branches.sections.0.blocks.1.labels.${a}`;

function expand(loc) {
  const tr = JSON.parse(readFileSync(path.join(here, "tr", `${loc}.json`), "utf8"));
  const byPath = {};
  for (const [id, paths] of Object.entries(map)) {
    if (typeof tr[id] !== "string") throw new Error(`${loc} — ${id} 번역이 없다`);
    for (const p of paths) byPath[p] = tr[id];
  }
  for (const l of leaves) if (!(l.path in byPath)) byPath[l.path] = l.en; // 자리표시자 전용 잎
  return byPath;
}

let failed = 0;
for (const loc of locales) {
  try {
    const byPath = expand(loc);
    const pathFile = path.join(here, "paths", `${loc}.json`);
    writeFileSync(pathFile, JSON.stringify(byPath, null, 2), "utf8");

    // 1) 기존 검사기
    try {
      execFileSync("node", [path.join(SP, "validate-translation.mjs"), path.join(here, "en-b-leaves.json"), pathFile, loc], { encoding: "utf8" });
    } catch (e) { throw new Error(`검증 실패\n${e.stdout ?? e.message}`); }

    // 2) 표의 띠 이름이 검수가 끝난 라벨과 같은가(12문서 × 12행)
    const reviewed = JSON.parse(readFileSync(path.join(SP, "out", `${loc}.json`), "utf8"));
    const names = ANIMALS.map((a) => reviewed[LABEL(a)]);
    const mism = [];
    for (const d of enDocs) {
      const base = `docs.${d.key}.sections.1.blocks.1.table.rows`;
      for (let i = 0; i < 12; i++) {
        const cell = byPath[`${base}.${i}.0`];
        if (!cell || !cell.toLowerCase().includes(String(names[i]).toLowerCase()) || !cell.includes(HANJA[i])) mism.push(`${d.slug} 행${i}: 「${cell}」 ≠ 「${names[i]}」(${HANJA[i]})`);
      }
    }
    if (mism.length) throw new Error(`표의 띠 이름이 검수된 라벨과 다르다 ${mism.length}건: ${mism.slice(0, 3).join(" | ")}`);

    if (mode === "check") { console.log(`${loc} — 검사 통과`); continue; }

    // 3) 문서 구조(en)에 값을 얹는다
    const graft = (v, trail) => {
      if (typeof v === "string") {
        const p = trail.join(".");
        if (!(p in byPath)) throw new Error(`${loc} — 잎 ${p} 없음`);
        return byPath[p];
      }
      if (Array.isArray(v)) return v.map((x, i) => graft(x, [...trail, String(i)]));
      if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, k === "kind" ? x : graft(x, [...trail, k])]));
      return v;
    };
    const docs = enDocs.map((d) => ({
      key: d.key,
      ...graft({ eyebrow: d.eyebrow, title: d.title, summary: d.summary, backLabel: d.backLabel, sections: d.sections }, ["docs", d.key]),
    }));
    const docFile = path.join(here, "doc", `${loc}.json`);
    writeFileSync(docFile, JSON.stringify(docs, null, 2), "utf8");
    if (mode === "build") { console.log(`${loc} — 문서 12편 생성`); continue; }

    const out = execFileSync("node", [path.join(SP, "insert-docs.mjs"), `${REPO}/${loc}.ts`, docFile], { encoding: "utf8" });
    console.log(`${loc} — ${out.trim()}`);
  } catch (e) {
    failed++;
    console.log(`${loc} — ${String(e.message).split("\n").slice(0, 8).join("\n")}`);
  }
}
process.exit(failed ? 1 : 0);
