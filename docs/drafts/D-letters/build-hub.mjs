// 허브(guide) 도입 한 절 조립·삽입기.
//   node build-hub.mjs leaves   <작업폴더>            번역할 잎(4개) → <작업폴더>/hub-leaves.json
//   node build-hub.mjs assemble <작업폴더> <로케일…>   hub.ko/en + 번역(<작업폴더>/tr-hub/<loc>.json) + 채움 → <작업폴더>/doc-hub/<loc>.json
//   node build-hub.mjs insert   <작업폴더> <로케일…>   doc-hub/<loc>.json 을 로케일 파일의 `guide` 문서 sections 맨 앞에 넣는다
// {{E1}}·{{E2}}·{{E3}} 는 각 사전 문서의 꼬리표(eyebrow)로 채운다 — 번역하지 않는다.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";

const HERE = "C:/myProjects/naminglink/docs/drafts/D-letters";
const DOCS = "C:/myProjects/naminglink/apps/sajulink/src/lib/doc-content";
const [mode, work, ...locales] = process.argv.slice(2);
if (!["leaves", "assemble", "insert"].includes(mode ?? "") || !work) { console.error("쓰는 법: build-hub.mjs leaves|assemble|insert <작업폴더> [로케일…]"); process.exit(2); }
const ko = JSON.parse(readFileSync(`${HERE}/hub.ko.json`, "utf8"));
const en = JSON.parse(readFileSync(`${HERE}/hub.en.json`, "utf8"));
const flat = (d) => ({ p: d.p, "ul.0": d.ul[0], "ul.1": d.ul[1], "ul.2": d.ul[2] });
const KEYS = ["p", "ul.0", "ul.1", "ul.2"];

if (mode === "leaves") {
  mkdirSync(work, { recursive: true });
  const k = flat(ko), e = flat(en);
  writeFileSync(`${work}/hub-leaves.json`, JSON.stringify(Object.fromEntries(KEYS.map((x) => [x, { en: e[x], ko: k[x] }])), null, 2), "utf8");
  console.log("잎 4개");
  process.exit(0);
}

const LINKRE = /\]\((\/[^)\s]*)\)/g;
const BOLDRE = /\*\*[^*]+\*\*/g;
const TOKRE = /\{\{E\d\}\}/g;
const setOf = (s, re) => [...(s.match(re) ?? [])].sort().join(",");
const enFlat = flat(en);
let failed = 0;

if (mode === "assemble") {
  mkdirSync(`${work}/doc-hub`, { recursive: true });
  for (const loc of locales) {
    try {
      const fill = JSON.parse(readFileSync(`${work}/fill/${loc}.json`, "utf8"));
      let src;
      if (loc === "ko") src = flat(ko);
      else if (loc === "en") src = enFlat;
      else {
        const f = `${work}/tr-hub/${loc}.json`;
        if (!existsSync(f)) throw new Error("번역 파일 없음");
        src = JSON.parse(readFileSync(f, "utf8"));
      }
      const errs = [];
      const out = {};
      for (const k of KEYS) {
        const t = src[k];
        if (typeof t !== "string" || !t.trim()) { errs.push(`${k}: 번역 없음`); continue; }
        if (setOf(t, LINKRE) !== setOf(enFlat[k], LINKRE)) errs.push(`${k}: 링크 불일치`);
        if ((t.match(BOLDRE) ?? []).length !== (enFlat[k].match(BOLDRE) ?? []).length) errs.push(`${k}: 굵게 표기 개수`);
        if (setOf(t, TOKRE) !== setOf(enFlat[k], TOKRE)) errs.push(`${k}: 토큰 불일치 ${setOf(t, TOKRE)}`);
        out[k] = t.replace(/\{\{E(\d)\}\}/g, (_, i) => fill[["", "eyebrowStems", "eyebrowBranches", "eyebrowPillars"][Number(i)]]);
        if (/\{\{|\}\}|undefined/.test(out[k])) errs.push(`${k}: 이상 문자열`);
      }
      if (errs.length) throw new Error(errs.join("\n"));
      const section = { blocks: [{ p: out.p }, { ul: [out["ul.0"], out["ul.1"], out["ul.2"]] }] };
      writeFileSync(`${work}/doc-hub/${loc}.json`, JSON.stringify(section, null, 2), "utf8");
      console.log(`${loc} — 허브 조립 통과`);
    } catch (e) { failed++; console.log(`${loc} — ${e.message}`); }
  }
  process.exit(failed ? 1 : 0);
}

// insert
for (const loc of locales) {
  try {
    const file = `${DOCS}/${loc}.ts`;
    let text = readFileSync(file, "utf8");
    if (text.includes("\r\n")) throw new Error("CRLF 파일 — LF 로 맞춘 뒤 넣을 것");
    const section = JSON.parse(readFileSync(`${work}/doc-hub/${loc}.json`, "utf8"));
    const head = loc === "ko" ? "\n  guide: {\n" : '\n  "guide": {\n';
    const n = text.split(head).length - 1;
    if (n !== 1) throw new Error(`앵커 ${n}번`);
    const at = text.indexOf(head);
    const sec = text.indexOf("sections: [\n", at);
    const secKeyed = loc === "ko" ? "sections: [\n" : null;
    void secKeyed;
    let pos = sec;
    if (pos < 0 || pos - at > 4000) {
      pos = text.indexOf('"sections": [\n', at);
      if (pos < 0 || pos - at > 4000) throw new Error("sections 자리를 못 찾음");
      pos += '"sections": [\n'.length;
    } else pos += "sections: [\n".length;
    if (text.slice(pos, pos + 400).includes("saju-letters")) throw new Error("이미 들어 있다");
    const ind = "      ";
    const quote = loc !== "ko";
    const body = JSON.stringify(section, null, 2).split("\n").map((l) => ind + l).join("\n");
    const out = (quote ? body : body.replace(/^(\s*)"(blocks|p|ul)": /gm, "$1$2: ")) + ",\n";
    text = text.slice(0, pos) + out + text.slice(pos);
    writeFileSync(file, text, "utf8");
    console.log(`${loc} — 삽입`);
  } catch (e) { failed++; console.log(`${loc} — ${e.message}`); }
}
process.exit(failed ? 1 : 0);
