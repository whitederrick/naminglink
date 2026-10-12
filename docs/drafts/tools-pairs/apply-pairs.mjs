// 사용: node apply-pairs.mjs <check|insert> <로케일…>
//  check  — 번역을 경로 단위로 펼쳐 기존 검사기(validate-translation.mjs)로 확인한다(쓰지 않는다)
//  insert — check 통과 후 문서 38편을 저장소 로케일 파일에 넣는다(insert-docs.mjs)
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const SP = path.dirname(here);
const REPO = "C:/myProjects/naminglink/apps/inyeonlink/src/lib/doc-content";
const [mode, ...locales] = process.argv.slice(2);
if (!["check", "insert"].includes(mode ?? "") || !locales.length) { console.error("쓰는 법: apply-pairs.mjs <check|insert> <로케일…>"); process.exit(2); }
mkdirSync(path.join(here, "paths"), { recursive: true });
mkdirSync(path.join(here, "doc"), { recursive: true });

const map = JSON.parse(readFileSync(path.join(here, "unique-map.json"), "utf8"));
const leaves = JSON.parse(readFileSync(path.join(here, "en-leaves.json"), "utf8"));
const enDocs = JSON.parse(readFileSync(path.join(here, "pairs38.en.json"), "utf8"));

let failed = 0;
for (const loc of locales) {
  try {
    const tr = JSON.parse(readFileSync(path.join(here, "tr", `${loc}.json`), "utf8"));
    const byPath = {};
    for (const [id, paths] of Object.entries(map)) {
      if (typeof tr[id] !== "string") throw new Error(`${id} 번역이 없다`);
      for (const p of paths) byPath[p] = tr[id];
    }
    for (const l of leaves) if (!(l.path in byPath)) byPath[l.path] = l.en; // 자리표시자 전용 잎
    const pathFile = path.join(here, "paths", `${loc}.json`);
    writeFileSync(pathFile, JSON.stringify(byPath, null, 2), "utf8");
    try {
      execFileSync("node", [path.join(SP, "validate-translation.mjs"), path.join(here, "en-leaves.json"), pathFile, loc], { encoding: "utf8" });
    } catch (e) { throw new Error(`검증 실패\n${e.stdout ?? e.message}`); }
    if (mode === "check") { console.log(`${loc} — 검사 통과`); continue; }

    const graft = (v, trail) => {
      if (typeof v === "string") { const p = trail.join("."); if (!(p in byPath)) throw new Error(`잎 ${p} 없음`); return byPath[p]; }
      if (Array.isArray(v)) return v.map((x, i) => graft(x, [...trail, String(i)]));
      if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, k === "kind" ? x : graft(x, [...trail, k])]));
      return v;
    };
    const docs = enDocs.map((d) => ({ key: d.key, ...graft({ eyebrow: d.eyebrow, title: d.title, summary: d.summary, backLabel: d.backLabel, sections: d.sections }, ["docs", d.key]) }));
    const docFile = path.join(here, "doc", `${loc}.json`);
    writeFileSync(docFile, JSON.stringify(docs, null, 2), "utf8");
    const out = execFileSync("node", [path.join(SP, "insert-docs.mjs"), `${REPO}/${loc}.ts`, docFile], { encoding: "utf8" });
    console.log(`${loc} — ${out.trim()}`);
  } catch (e) {
    failed++;
    console.log(`${loc} — ${String(e.message).split("\n").slice(0, 8).join("\n")}`);
  }
}
process.exit(failed ? 1 : 0);
