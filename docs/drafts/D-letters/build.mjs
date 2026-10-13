// 입문 문서(saju-letters) 조립기.
//   node build.mjs leaves  <작업폴더>            번역할 잎 목록(ko·en)을 만든다 → <작업폴더>/leaves.json
//   node build.mjs assemble <작업폴더> <로케일…>   skeleton + 번역(<작업폴더>/tr/<loc>.json) + 채움(<작업폴더>/fill/<loc>.json) → <작업폴더>/doc/<loc>.json
// 표의 값(천간 이름·오행·음양, 지지·띠)과 backLabel 은 번역하지 않고 각 로케일의 기존 문서에서 글자 그대로 채운다.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";

const HERE = "C:/myProjects/naminglink/docs/drafts/D-letters";
const [mode, work, ...locales] = process.argv.slice(2);
if (!["leaves", "assemble"].includes(mode ?? "") || !work) { console.error("쓰는 법: build.mjs leaves|assemble <작업폴더> [로케일…]"); process.exit(2); }
const ko = JSON.parse(readFileSync(`${HERE}/skeleton.ko.json`, "utf8"));
const en = JSON.parse(readFileSync(`${HERE}/skeleton.en.json`, "utf8"));
const isMarker = (s) => typeof s === "string" && /^@[A-Z_0-9]+$/.test(s);

// 잎 = 문자열 중 마커·key·slug 가 아닌 것
function leavesOf(node, trail, out) {
  if (typeof node === "string") { if (!isMarker(node)) out.push([trail.join("."), node]); return out; }
  if (Array.isArray(node)) { node.forEach((x, i) => leavesOf(x, [...trail, String(i)], out)); return out; }
  if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) { if (k === "key" || k === "slug") continue; leavesOf(v, [...trail, k], out); }
  }
  return out;
}
const koLeaves = leavesOf(ko, [], []);
const enLeaves = leavesOf(en, [], []);
if (koLeaves.length !== enLeaves.length || koLeaves.some(([p], i) => p !== enLeaves[i][0])) throw new Error("ko·en 골격 구조가 다르다");

if (mode === "leaves") {
  mkdirSync(work, { recursive: true });
  const koMap = new Map(koLeaves);
  const out = Object.fromEntries(enLeaves.map(([p, t]) => [p, { en: t, ko: koMap.get(p) }]));
  writeFileSync(`${work}/leaves.json`, JSON.stringify(out, null, 2), "utf8");
  console.log(`잎 ${enLeaves.length}개 → ${work}/leaves.json`);
  process.exit(0);
}

const LINKRE = /\]\((\/[^)\s]*)\)/g;
const BOLDRE = /\*\*[^*]+\*\*/g;
const setOf = (s, re) => [...(s.match(re) ?? [])].sort().join(",");
let failed = 0;
mkdirSync(`${work}/doc`, { recursive: true });
for (const loc of locales) {
  try {
    const fill = JSON.parse(readFileSync(`${work}/fill/${loc}.json`, "utf8"));
    let source = null;
    if (loc === "ko") source = new Map(koLeaves);
    else if (loc === "en") source = new Map(enLeaves);
    else {
      const f = `${work}/tr/${loc}.json`;
      if (!existsSync(f)) throw new Error("번역 파일 없음");
      source = new Map(Object.entries(JSON.parse(readFileSync(f, "utf8"))));
    }
    const enMap = new Map(enLeaves);
    const errs = [];
    for (const [p, enText] of enMap) {
      const t = source.get(p);
      if (typeof t !== "string" || !t.trim()) { errs.push(`${p}: 번역 없음`); continue; }
      if (setOf(t, LINKRE) !== setOf(enText, LINKRE)) errs.push(`${p}: 링크 ${setOf(t, LINKRE)} ≠ ${setOf(enText, LINKRE)}`);
      if ((t.match(BOLDRE) ?? []).length !== (enText.match(BOLDRE) ?? []).length) errs.push(`${p}: 굵게 표기 개수`);
      if (/\{\{|\}\}|undefined|@[A-Z_]{3,}/.test(t)) errs.push(`${p}: 이상 문자열 [${t.slice(0, 60)}]`);
      // 원문이 든 한자 글자(甲子 등)는 번역에도 남아야 한다 — 일주 예시가 사라지면 설명이 성립하지 않는다
      const han = (enText.match(/[\u4e00-\u9fff]/g) ?? []).sort().join("");
      const hanT = (t.match(/[\u4e00-\u9fff]/g) ?? []).sort().join("");
      if (p === "sections.3.blocks.1.p" && !t.includes("甲子")) errs.push(`${p}: 일주 예시 甲子 가 없다`);
      void han;
    }
    if (errs.length) throw new Error(`조립 검사 ${errs.length}건\n${errs.slice(0, 10).join("\n")}`);

    const graft = (node, trail) => {
      if (typeof node === "string") {
        switch (node) {
          case "@BACK_LABEL": return fill.backLabel;
          case "@STEM_HEAD1": return fill.stemHead1;
          case "@ZODIAC_CAPTION": return fill.zodiacCaption;
          default: {
            if (isMarker(node)) throw new Error(`아는 마커가 아니다: ${node}`);
            const p = trail.join(".");
            if (!source.has(p)) throw new Error(`잎 ${p} 없음`);
            return source.get(p);
          }
        }
      }
      if (Array.isArray(node)) return node.map((x, i) => graft(x, [...trail, String(i)]));
      if (node && typeof node === "object") {
        const out = {};
        for (const [k, v] of Object.entries(node)) {
          if (k === "slug") continue;
          if (k === "rows" && v === "@STEM_ROWS") out[k] = fill.stemRows;
          else if (k === "rows" && v === "@ZODIAC_ROWS") out[k] = fill.zodiacRows;
          else if (k === "head" && v === "@ZODIAC_HEAD") out[k] = fill.zodiacHead;
          else if (k === "key") out[k] = v;
          else out[k] = graft(v, [...trail, k]);
        }
        return out;
      }
      return node;
    };
    const doc = graft(en, []);
    // 표 구조 검사: 칸 수 = 머리글 수
    for (const s of doc.sections) for (const b of s.blocks) if (b.table) {
      b.table.rows.forEach((r, i) => { if (r.length !== b.table.head.length) throw new Error(`표 행 ${i} 칸 수 ${r.length}≠${b.table.head.length}`); });
    }
    writeFileSync(`${work}/doc/${loc}.json`, JSON.stringify([doc], null, 2), "utf8");
    console.log(`${loc} — 조립 통과`);
  } catch (e) {
    failed++;
    console.log(`${loc} — ${String(e.message).split("\n").slice(0, 12).join("\n")}`);
  }
}
process.exit(failed ? 1 : 0);
