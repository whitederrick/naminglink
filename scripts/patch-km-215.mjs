import fs from "node:fs";

// clergyman(목사) — 배치 215: 밀러 「Religion」 끝자락의 목사 관련 둘을 더한다.
// "목사가"가 이미 이 상징의 별칭이라 religion이 아니라 여기로 옮겨 붙인다
// (§25 곁가지 — 새 이름이 남이 이미 쓰던 이름을 가로챌 뻔했다).
const pClergy = "apps/dreamslink/data-sources/extract/kmm14.json";
const dClergy = JSON.parse(fs.readFileSync(pClergy, "utf8"));
const clergy = dClergy.find((x) => x.id === "clergyman");
if (!clergy) throw new Error("clergyman not found in kmm14.json");

Object.assign(clergy.contexts, {
  "목사가 사적인 자리에서 일을 그만두었다고 말함": "사적인 뜻밖의",
  "목사가 직무상 경고하듯 일을 그만두었다고 말함": "직무상 경고하듯",
});
Object.assign(clergy.contexts_en, {
  "목사가 사적인 자리에서 일을 그만두었다고 말함": "social favorable tidings",
  "목사가 직무상 경고하듯 일을 그만두었다고 말함": "professional warning intriguing",
});

fs.writeFileSync(pClergy, JSON.stringify(dClergy, null, 2) + "\n");
console.log("patched clergyman in kmm14.json");
