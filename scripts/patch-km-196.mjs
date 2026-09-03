import fs from "node:fs";

// blasphemy(신성모독) — 배치 196: 「Profanity」를 더한다. "profanity"가 이미 그
// 영어 별칭이었다.
const pBlas = "apps/dreamslink/data-sources/extract/kmm4.json";
const dBlas = JSON.parse(fs.readFileSync(pBlas, "utf8"));
const blasphemy = dBlas.find((x) => x.id === "blasphemy");
if (!blasphemy) throw new Error("blasphemy not found in kmm4.json");

blasphemy.aliases.push("욕설했다", "욕설하는", "욕설을", "욕설하며");

Object.assign(blasphemy.contexts, {
  "욕설하는 꿈을 꿈": "거칠고 무정",
  "남이 욕설하는 것을 봄": "해를 입고",
});
Object.assign(blasphemy.contexts_en, {
  "욕설하는 꿈을 꿈": "coarse unfeeling traits",
  "남이 욕설하는 것을 봄": "injured insulted",
});

fs.writeFileSync(pBlas, JSON.stringify(dBlas, null, 2) + "\n");
console.log("patched blasphemy in kmm4.json");

// wealth(재산) — 배치 196: 「Property」를 더한다. "property"가 이미 그 영어 별칭이었다.
const pWealth = "apps/dreamslink/data-sources/extract/km7.json";
const dWealth = JSON.parse(fs.readFileSync(pWealth, "utf8"));
const wealth = dWealth.find((x) => x.id === "wealth");
if (!wealth) throw new Error("wealth not found in km7.json");

Object.assign(wealth.contexts, {
  "너른 재산을 가짐": "너른 성공하고",
});
Object.assign(wealth.contexts_en, {
  "너른 재산을 가짐": "vast successful friendships",
});

fs.writeFileSync(pWealth, JSON.stringify(dWealth, null, 2) + "\n");
console.log("patched wealth in km7.json");

// harlot(몸 파는 이) — 배치 196: 「Prostitute」를 더한다. 첫 문장은 기존 "몸 파는 이와
// 어울림"과 같은 그림이라 인용이 자동으로 포개진다 — 나머지 둘만 새 문맥.
const pHarlot = "apps/dreamslink/data-sources/extract/kmm45.json";
const dHarlot = JSON.parse(fs.readFileSync(pHarlot, "utf8"));
const harlot = dHarlot.find((x) => x.id === "harlot");
if (!harlot) throw new Error("harlot not found in kmm45.json");

Object.assign(harlot.contexts, {
  "처녀가 몸 파는 이 꿈을 꿈": "처녀가 순결",
  "기혼 여성이 몸 파는 이 꿈을 꿈": "기혼 남편을 의심",
});
Object.assign(harlot.contexts_en, {
  "처녀가 몸 파는 이 꿈을 꿈": "young woman deceive purity",
  "기혼 여성이 몸 파는 이 꿈을 꿈": "married suspicion quarrels",
});

fs.writeFileSync(pHarlot, JSON.stringify(dHarlot, null, 2) + "\n");
console.log("patched harlot in kmm45.json");
