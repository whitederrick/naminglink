import fs from "node:fs";

const p = "apps/dreamslink/data-sources/extract/km9.json";
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const pear = d.find((x) => x.id === "pear");
if (!pear) throw new Error("pear not found in km9.json");

Object.assign(pear.contexts, {
  "우아한 나무에 달린 황금빛 열매를 감상함": "우아한 황금빛 밝은 낯빛",
  "배를 거둠": "거두 반가운 뜻밖의",
  "배를 저장함": "저장 담담히",
  "배를 구움": "구웠 밍밍",
});
Object.assign(pear.contexts_en, {
  "우아한 나무에 달린 황금빛 열매를 감상함": "admire golden graceful promising",
  "배를 거둠": "gathering pleasant surprises",
  "배를 저장함": "preserve philosophically",
  "배를 구움": "baking insipid friendships",
});

fs.writeFileSync(p, JSON.stringify(d, null, 2) + "\n");
console.log("patched pear in km9.json");
