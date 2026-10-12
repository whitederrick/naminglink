// 새 12편이 쓰는 자리표시자가 docValues 에 전부 있고, 값이 엔진 계산과 같은지 본다.
import { pathToFileURL } from "node:url";

const APP = "C:/myProjects/naminglink/apps/inyeonlink/src/lib";
const pick = (m: any, n: string) => m[n] ?? m.default?.[n];
const dv = await import(pathToFileURL(`${APP}/doc-values.ts`).href);
const ko = await import(pathToFileURL(`${APP}/doc-content/ko.ts`).href);
const docValues = pick(dv, "docValues") as (l: string) => Promise<Record<string, string>>;
const KO_DOCS = pick(ko, "KO_DOCS") as Record<string, any>;

const values = await docValues("ko");
const keys = Object.keys(KO_DOCS).filter((k) => k.startsWith("guide/zodiac-"));
console.log(`띠별 문서 ${keys.length}편`);
const used = new Set<string>();
const scan = (v: unknown) => {
  if (typeof v === "string") for (const m of v.matchAll(/\{([a-zA-Z]+)\}/g)) used.add(m[1]!);
  else if (Array.isArray(v)) v.forEach(scan);
  else if (v && typeof v === "object") Object.values(v).forEach(scan);
};
keys.forEach((k) => scan(KO_DOCS[k]));
const missing = [...used].filter((u) => !(u in values));
console.log(`사용하는 자리표시자 ${used.size}종: ${[...used].sort().join(", ")}`);
console.log(`docValues 에 없는 것: ${missing.length ? missing.join(", ") : "없음"}`);
for (const k of ["weightZodiac", "weightSaju", "weightDayBranch", "weightDayBranchTotal", "swingZodiacYukhap", "swingZodiacChung", "scoreYukhap", "scoreChung"]) {
  console.log(`  ${k} = ${values[k]}`);
}
const expect: Record<string, string> = { weightDayBranchTotal: "14%", swingZodiacYukhap: "6.6", swingZodiacChung: "6.9" };
let bad = 0;
for (const [k, v] of Object.entries(expect)) if (values[k] !== v) { console.log(`✗ ${k}: ${values[k]} ≠ 기대 ${v}`); bad++; }
if (missing.length || bad) process.exit(1);
console.log("OK — 자리표시자 전부 채워지고 값이 손계산(14% · 6.6 · 6.9)과 같다");
