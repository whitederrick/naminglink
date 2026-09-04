import fs from "node:fs";

// crow(까마귀) — 배치 212: 밀러 「Raven」에서 새 그림 하나만 더한다. 일반 목격 문장은
// 이미 있는 「까마귀를 봄」(밀러 Crow)과 같은 그림이라 건너뛰었다.
const pCrow = "apps/dreamslink/data-sources/extract/km9.json";
const dCrow = JSON.parse(fs.readFileSync(pCrow, "utf8"));
const crow = dCrow.find((x) => x.id === "crow");
if (!crow) throw new Error("crow not found in km9.json");

Object.assign(crow.contexts, {
  "처녀에게 까마귀 꿈이 나타나 정인이 배신함": "처녀에게 배신할",
});
Object.assign(crow.contexts_en, {
  "처녀에게 까마귀 꿈이 나타나 정인이 배신함": "lover betray",
});

fs.writeFileSync(pCrow, JSON.stringify(dCrow, null, 2) + "\n");
console.log("patched crow in km9.json");
