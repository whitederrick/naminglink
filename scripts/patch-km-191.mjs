import fs from "node:fs";

// painting(그림) — 배치 191: 「Portrait」를 더한다. 각주가 가리키는 Pictures·Photographs·
// Paintings 중 painting에 붙인다(별도 photograph 상징도 있지만 원문에 매체 지정이 없다).
const pPainting = "apps/dreamslink/data-sources/extract/kmm149.json";
const dPainting = JSON.parse(fs.readFileSync(pPainting, "utf8"));
const painting = dPainting.find((x) => x.id === "painting");
if (!painting) throw new Error("painting not found in kmm149.json");

painting.aliases.push("초상화가", "초상화를");
Object.assign(painting.contexts, {
  "아름다운 사람의 초상화를 바라봄": "초상화를 바라",
});
Object.assign(painting.contexts_en, {
  "아름다운 사람의 초상화를 바라봄": "portrait person disquieting",
});

fs.writeFileSync(pPainting, JSON.stringify(dPainting, null, 2) + "\n");
console.log("patched painting in kmm149.json");

// letter-carrier(집배원) — 배치 191: 「Postman」을 더한다.
const pLetter = "apps/dreamslink/data-sources/extract/kmm97.json";
const dLetter = JSON.parse(fs.readFileSync(pLetter, "utf8"));
const letter = dLetter.find((x) => x.id === "letter-carrier");
if (!letter) throw new Error("letter-carrier not found in kmm97.json");

Object.assign(letter.contexts, {
  "집배원 꿈을 꿈": "성급한 소식",
});
Object.assign(letter.contexts_en, {
  "집배원 꿈을 꿈": "hasty news distressing",
});

fs.writeFileSync(pLetter, JSON.stringify(dLetter, null, 2) + "\n");
console.log("patched letter-carrier in kmm97.json");
