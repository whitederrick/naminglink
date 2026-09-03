import fs from "node:fs";

const p = "apps/dreamslink/data-sources/extract/km4.json";
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const parrot = d.find((x) => x.id === "parrot");
if (!parrot) throw new Error("parrot not found in km4.json");

parrot.aliases.push("앵무새들");

Object.assign(parrot.contexts, {
  "앵무새들이 재잘거림": "재잘거 경박한 뜬소문",
  "가만히 있는 앵무새를 봄": "가만히 다툼이 그칠",
  "처녀가 앵무새를 가짐": "처녀가 다투기 좋아하는",
  "앵무새를 가르침": "가르치 사사로운 곤란",
  "죽은 앵무새를 봄": "죽은 벗을 잃을",
});
Object.assign(parrot.contexts_en, {
  "앵무새들이 재잘거림": "chattering frivolous gossip",
  "가만히 있는 앵무새를 봄": "repose peaceful intermission",
  "처녀가 앵무새를 가짐": "owns lover quarrelsome",
  "앵무새를 가르침": "teach private affairs",
  "죽은 앵무새를 봄": "dead loss social",
});

fs.writeFileSync(p, JSON.stringify(d, null, 2) + "\n");
console.log("patched parrot in km4.json");
