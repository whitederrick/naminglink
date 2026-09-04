import fs from "node:fs";

// rice(쌀) — 배치 222: 밀러 「Rice」 넷을 더한다. 기존 여섯 문맥(주공해몽)과 겹치지 않는다.
const pRice = "apps/dreamslink/data-sources/extract/km4.json";
const dRice = JSON.parse(fs.readFileSync(pRice, "utf8"));
const rice = dRice.find((x) => x.id === "rice");
if (!rice) throw new Error("rice not found in km4.json");

Object.assign(rice.contexts, {
  "쌀을 봄": "성공과 우정",
  "쌀을 먹음": "먹었다 안락",
  "쌀에 흙이 섞이거나 더러움": "흙이 섞이거나",
  "처녀가 쌀로 밥을 지음": "처녀가 소임을",
});
Object.assign(rice.contexts_en, {
  "쌀을 봄": "success friendships prosperity",
  "쌀을 먹음": "eat happiness comfort",
  "쌀에 흙이 섞이거나 더러움": "dirt impure sickness",
  "처녀가 쌀로 밥을 지음": "cooking duties wealth",
});

fs.writeFileSync(pRice, JSON.stringify(dRice, null, 2) + "\n");
console.log("patched rice in km4.json");
