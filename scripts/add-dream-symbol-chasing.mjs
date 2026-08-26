// "쫓다"(능동, 내가 쫓음)를 새 상징으로 추가한다. 기존 "쫓김"(수동, 내가 쫓기는 것)의
// 반대 방향이 사전에 없어서 "강아지를 쫓아다니는 꿈" 같은 흔한 문장이 상징을 하나도
// 더 못 찾던 자리다(2026-08-26 사용자 지적, 실측으로 확인).
//
// 전통 근거(culture_note)를 못 대므로 source: "general" — 화면이 "전통 해몽"과
// 분리해서 보여준다. 이건 AI 초안 + 사용자 검토 파이프라인의 첫 조각이다. 아직 커밋
// 전이며, 검토받기 전까지는 임시 산출물이다.
//
// 실행: node scripts/add-dream-symbol-chasing.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const filePath = path.resolve(
  "apps/dreamslink/src/lib/dream-symbols.data.json",
);
const raw = readFileSync(filePath, "utf8");
const data = JSON.parse(raw);

if (data.symbols.some((s) => s.id === "chasing")) {
  console.log("이미 있음 — 건너뜀");
  process.exit(0);
}

const newSymbol = {
  id: "chasing",
  term_ko: "쫓음",
  term_en: "chasing",
  aliases: ["쫓아다니", "쫓아가", "쫓는", "쫓았", "추격", "뒤쫓"],
  category: "action",
  polarity: "positive",
  tags: ["추진력", "욕구"],
  weight: 2,
  meanings: [
    {
      context: "동물이나 사람을 쫓아감",
      interpretation_ko: "원하는 것을 향해 적극적으로 나아가는 마음",
      interpretation_en: "actively moving toward something you want",
      polarity: "positive",
      source: "general",
    },
    {
      context: "쫓다가 놓침",
      interpretation_ko: "원하는 것을 아직 붙잡지 못한 상태",
      interpretation_en: "not yet having caught up with what you're after",
      polarity: "neutral",
      source: "general",
    },
  ],
};

// "chased"(쫓김) 바로 뒤에 둔다 — 반대 방향 상징끼리 붙어 있어야 사전을 훑을 때 짝이 보인다.
const chasedIndex = data.symbols.findIndex((s) => s.id === "chased");
const insertAt = chasedIndex === -1 ? data.symbols.length : chasedIndex + 1;
data.symbols.splice(insertAt, 0, newSymbol);

const previousVersion = data.dictVer;
data.dictVer = "1.4.1";

const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`symbols: ${data.symbols.length - 1} -> ${data.symbols.length}`);
console.log(`dictVer: ${previousVersion} -> ${data.dictVer}`);
