// 사용: node insert-docs.mjs <대상 .ts> <docs.json(배열 {key, eyebrow, title, summary, backLabel, sections})> [ko]
// 앵커 「  "guide/ten-gods": {」 앞에 12개 문서를 넣는다. 이미 있거나 앵커가 1번이 아니면 던진다.
import { readFileSync, writeFileSync } from "node:fs";
const [file, jsonFile, style] = process.argv.slice(2);
const docs = JSON.parse(readFileSync(jsonFile, "utf8"));
if (!Array.isArray(docs) || docs.length === 0) throw new Error(`문서 ${Array.isArray(docs) ? docs.length : "?"}편`);
let text = readFileSync(file, "utf8");
const ANCHOR = '\n  "guide/ten-gods": {\n';
const n = text.split(ANCHOR).length - 1;
if (n !== 1) throw new Error(`${file} 앵커 ${n}번(정확히 1번이어야 한다)`);
for (const d of docs) if (text.includes(`"${d.key}": {`)) throw new Error(`${file} 에 ${d.key} 가 이미 있다`);
const shape = (d) => ({
  eyebrow: d.eyebrow, title: d.title, summary: d.summary, backLabel: d.backLabel,
  sections: d.sections.map((s) => (s.kind ? { kind: s.kind, title: s.title, blocks: s.blocks } : { title: s.title, blocks: s.blocks })),
});
let out = "";
for (const d of docs) {
  let body = JSON.stringify(shape(d), null, 2).split("\n").map((l, i) => (i === 0 ? l : "  " + l)).join("\n");
  if (style === "ko") body = body.replace(/^(\s*)"(eyebrow|title|summary|backLabel|sections|kind|blocks|p|ul|table|caption|head|rows)": /gm, "$1$2: ");
  out += `  "${d.key}": ${body},\n\n`;
}
text = text.replace(ANCHOR, "\n" + out + '  "guide/ten-gods": {\n');
writeFileSync(file, text, "utf8");
const back = readFileSync(file, "utf8");
const have = docs.filter((d) => back.includes(`"${d.key}": {`)).length;
console.log(`${file.split("/").pop()}: ${have}/${docs.length} 삽입 확인`);
if (have !== docs.length) process.exit(1);
