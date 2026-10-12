// 사용: node apply-saju.mjs <check|insert> <로케일…>
//  check  — 번역 골격을 경로별로 펼쳐 토큰을 채우고 검사한다(저장소에 쓰지 않는다)
//  insert — check 통과 후 82편을 로케일 파일에 넣는다(insert-docs.mjs)
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";

const SP = "C:/Users/white/AppData/Local/Temp/claude/C--myProjects-naminglink/7a99bada-f923-4caa-869f-cf34b3081068/scratchpad";
const HERE = `${SP}/saju`;
const REPO = "C:/myProjects/naminglink/apps/sajulink/src/lib/doc-content";
const [mode, ...locales] = process.argv.slice(2);
if (!["check", "insert"].includes(mode ?? "") || !locales.length) { console.error("쓰는 법: apply-saju.mjs <check|insert> <로케일…>"); process.exit(2); }
mkdirSync(`${HERE}/work/doc`, { recursive: true });

const leaves = JSON.parse(readFileSync(`${HERE}/work/en-leaves.json`, "utf8"));
const map = JSON.parse(readFileSync(`${HERE}/work/unique-map.json`, "utf8"));
const enDocs = JSON.parse(readFileSync(`${HERE}/out/saju82.en.json`, "utf8"));
const idOfPath = new Map();
for (const [id, paths] of Object.entries(map)) for (const p of paths) idOfPath.set(p, id);

const QUOTE = { ja: ["「", "」"], zh: ["“", "”"], de: ["„", "“"], fr: ["« ", " »"], ru: ["«", "»"], pl: ["„", "”"], ar: ["«", "»"], uz: ["“", "”"], kk: ["«", "»"], mn: ["“", "”"] };
const setOf = (s, re) => [...(s.match(re) ?? [])].sort().join(",");
const PHRE = /\{[a-zA-Z]+\}/g;
const LINKRE = /\]\((\/[^)\s]*)\)/g;

let failed = 0;
for (const loc of locales) {
  try {
    const trFile = `${HERE}/work/tr/${loc}.json`;
    let tr;
    if (existsSync(trFile)) tr = JSON.parse(readFileSync(trFile, "utf8"));
    else {
      const parts = readdirSync(`${HERE}/work/tr`).filter((n) => n.startsWith(`${loc}.p`) && n.endsWith(".json")).sort();
      if (!parts.length) throw new Error("번역 파일 없음");
      tr = Object.assign({}, ...parts.map((n) => JSON.parse(readFileSync(`${HERE}/work/tr/${n}`, "utf8"))));
    }
    const fill = JSON.parse(readFileSync(`${HERE}/work/fill/${loc}.json`, "utf8"));
    const [qo, qc] = QUOTE[loc] ?? ['"', '"'];
    const byPath = {};
    const errs = [];
    for (const l of leaves) {
      let t;
      if (/^\{\{G:[A-Z]+\}\}$/.test(l.en)) t = l.en;
      else if (/^(\{[a-zA-Z]+\}|\{\{[A-Za-z]+\d*\}\})$/.test(l.en)) t = l.en;
      else {
        const id = idOfPath.get(l.path);
        t = tr[id];
        if (typeof t !== "string") throw new Error(`${l.path} (${id}) 번역이 없다`);
      }
      const f = l.fills ?? {};
      t = t.replace(/\{\{G:([A-Z]+)\}\}/g, (_, k) => fill.tenGodNames[k]);
      t = t.replace(/\{\{TRAIT\}\}/g, () => `${qo}${fill.dayMasterTraits[f.TRAIT]}${qc}`);
      t = t.replace(/\{\{S(\d+)\}\}/g, (_, i) => fill.dayMasterNames[f[`S${i}`]]);
      t = t.replace(/\{\{([cnL])(\d+)\}\}/g, (_, k, i) => f[`${k}${i}`]);
      if (/\{\{|\}\}/.test(t)) errs.push(`${l.path}: 채우지 못한 토큰 [${t.slice(0, 80)}]`);
      if (/undefined/.test(t)) errs.push(`${l.path}: undefined 가 섞였다`);
      // 원문(raw)과 자리표시자·링크가 같아야 한다
      if (setOf(t, PHRE) !== setOf(l.raw, PHRE)) errs.push(`${l.path}: 자리표시자 ${setOf(t, PHRE)} ≠ ${setOf(l.raw, PHRE)}`);
      if (setOf(t, LINKRE) !== setOf(l.raw, LINKRE)) errs.push(`${l.path}: 링크 ${setOf(t, LINKRE)} ≠ ${setOf(l.raw, LINKRE)}`);
      byPath[l.path] = t;
    }
    if (errs.length) throw new Error(`적용 검사 ${errs.length}건\n${errs.slice(0, 8).join("\n")}`);
    const graft = (v, trail) => {
      if (typeof v === "string") { const p = trail.join("."); if (!(p in byPath)) throw new Error(`잎 ${p} 없음`); return byPath[p]; }
      if (Array.isArray(v)) return v.map((x, i) => graft(x, [...trail, String(i)]));
      if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, k === "kind" ? x : graft(x, [...trail, k])]));
      return v;
    };
    const docs = enDocs.map((d) => ({ key: d.key, ...graft({ eyebrow: d.eyebrow, title: d.title, summary: d.summary, backLabel: d.backLabel, sections: d.sections }, ["docs", d.key]) }));
    const docFile = `${HERE}/work/doc/${loc}.json`;
    writeFileSync(docFile, JSON.stringify(docs, null, 2), "utf8");
    if (mode === "check") { console.log(`${loc} — 적용 검사 통과 (${docs.length}편)`); continue; }
    const out = execFileSync("node", [`${SP}/insert-docs.mjs`, `${REPO}/${loc}.ts`, docFile], { encoding: "utf8" });
    console.log(`${loc} — ${out.trim()}`);
  } catch (e) {
    failed++;
    console.log(`${loc} — ${String(e.message).split("\n").slice(0, 10).join("\n")}`);
  }
}
process.exit(failed ? 1 : 0);
