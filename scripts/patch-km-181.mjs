import fs from "node:fs";

const pGun = "apps/dreamslink/data-sources/extract/kmm42.json";
const dGun = JSON.parse(fs.readFileSync(pGun, "utf8"));
const gun = dGun.find((x) => x.id === "gun");
if (!gun) throw new Error("gun not found in kmm42.json");

Object.assign(gun.contexts, {
  "권총 꿈을 봄": "언뜻",
  "권총을 소유함": "소유했 가졌 지녔",
});
Object.assign(gun.contexts_en, {
  "권총 꿈을 봄": "glimpse",
  "권총을 소유함": "own owned possess",
});

fs.writeFileSync(pGun, JSON.stringify(dGun, null, 2) + "\n");
console.log("patched gun in kmm42.json");

const pPit = "apps/dreamslink/data-sources/extract/km2.json";
const dPit = JSON.parse(fs.readFileSync(pPit, "utf8"));
const pit = dPit.find((x) => x.id === "pit");
if (!pit) throw new Error("pit not found in km2.json");

Object.assign(pit.contexts, {
  "문 앞에 구덩이와 도랑이 있음": "문앞 도랑",
  "깊은 구덩이를 들여다봄": "들여다보 들여다본",
  "구덩이에 빠짐": "빠졌 떨어졌",
  "구덩이에 빠지려다 잠에서 깸": "깨어났 잠에서",
  "구덩이 속으로 내려감": "내려갔 내려가는",
});
Object.assign(pit.contexts_en, {
  "문 앞에 구덩이와 도랑이 있음": "front door",
  "깊은 구덩이를 들여다봄": "looking deep",
  "구덩이에 빠짐": "fall fell",
  "구덩이에 빠지려다 잠에서 깸": "wake woke",
  "구덩이 속으로 내려감": "descending descend",
});
if (!pit.aliases.includes("구덩이가")) pit.aliases.push("구덩이가", "구덩이를", "구덩이에");
if (!pit.aliases_en.includes("a pit")) pit.aliases_en.push("a pit", "pits");

fs.writeFileSync(pPit, JSON.stringify(dPit, null, 2) + "\n");
console.log("patched pit in km2.json");
