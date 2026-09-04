import fs from "node:fs";

// dog(개) — 배치 199: 「Pup」을 더한다.
const pDog = "apps/dreamslink/data-sources/extract/km9.json";
const dDog = JSON.parse(fs.readFileSync(pDog, "utf8"));
const dog = dDog.find((x) => x.id === "dog");
if (!dog) throw new Error("dog not found in km9.json");

Object.assign(dog.contexts, {
  "강아지 꿈을 꿈": "가엾고 하찮은",
});
Object.assign(dog.contexts_en, {
  "강아지 꿈을 꿈": "entertain innocent hapless",
});

fs.writeFileSync(pDog, JSON.stringify(dDog, null, 2) + "\n");
console.log("patched dog in km9.json");

// pocketbook(지갑) — 배치 199: 「Purse」를 더한다.
const pPocket = "apps/dreamslink/data-sources/extract/kmm186.json";
const dPocket = JSON.parse(fs.readFileSync(pPocket, "utf8"));
const pocketbook = dPocket.find((x) => x.id === "pocketbook");
if (!pocketbook) throw new Error("pocketbook not found in kmm186.json");

Object.assign(pocketbook.contexts, {
  "지갑에 다이아몬드와 새 지폐가 가득함": "다이아몬드 가득",
});
Object.assign(pocketbook.contexts_en, {
  "지갑에 다이아몬드와 새 지폐가 가득함": "diamonds cheer harmony",
});

fs.writeFileSync(pPocket, JSON.stringify(dPocket, null, 2) + "\n");
console.log("patched pocketbook in kmm186.json");
