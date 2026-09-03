import fs from "node:fs";

const p = "apps/dreamslink/data-sources/extract/km2.json";
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const road = d.find((x) => x.id === "road");
if (!road) throw new Error("road not found in km2.json");

Object.assign(road.contexts, {
  "좁고 험한 길에서 돌부리에 걸려 넘어짐": "돌부리 넘어졌 초조한 흥분",
  "제 길을 찾으려 애씀": "찾으려 해내지 못할",
  "풀과 꽃이 늘어선 오솔길을 걸음": "풀과 꽃이 늘어선 짐에서 벗어날",
});
Object.assign(road.contexts_en, {
  "좁고 험한 길에서 돌부리에 걸려 넘어짐": "narrow rough stumbling adversity",
  "제 길을 찾으려 애씀": "trying find path fail accomplish",
  "풀과 꽃이 늘어선 오솔길을 걸음": "grass flowers freedom oppressing",
});

fs.writeFileSync(p, JSON.stringify(d, null, 2) + "\n");
console.log("patched road in km2.json");
