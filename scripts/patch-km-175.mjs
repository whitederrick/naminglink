import fs from "node:fs";

const p = "apps/dreamslink/data-sources/extract/kmm149.json";
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const painting = d.find((x) => x.id === "painting");
if (!painting) throw new Error("painting not found in kmm149.json");

Object.assign(painting.contexts, {
  "그림들이 눈앞에 나타남": "눈앞에 속임수 악의",
  "그림을 만듦": "만들었 보람 없는",
  "그림을 없앰": "없애 용서받을",
  "그림을 삼": "샀 투기",
  "살아있는 나무에서 제 모습이 나타났다 사라지는 것을 봄": "나무 나타났다 동무를",
  "옛 거장과 현대 거장의 걸작들에 둘러싸임": "거장 걸작 채워지지",
});
Object.assign(painting.contexts_en, {
  "그림들이 눈앞에 나타남": "appearing prognosticate deception",
  "그림을 만듦": "make unremunerative enterprise",
  "그림을 없앰": "destroy pardoned strenuous",
  "그림을 삼": "buy worthless speculation",
  "살아있는 나무에서 제 모습이 나타났다 사라지는 것을 봄": "likeness tree companionship",
  "옛 거장과 현대 거장의 걸작들에 둘러싸임": "masters insatiable attainments",
});

fs.writeFileSync(p, JSON.stringify(d, null, 2) + "\n");
console.log("patched painting in kmm149.json");

const p2 = "apps/dreamslink/data-sources/extract/kmm26.json";
const d2 = JSON.parse(fs.readFileSync(p2, "utf8"));
const docks = d2.find((x) => x.id === "docks");
if (!docks) throw new Error("docks not found in kmm26.json");

Object.assign(docks.contexts, {
  "부두 위에 섬": "위에 서 용감할 영예",
  "부두에 닿으려다 실패함": "닿으려다 실패 잃을",
});
Object.assign(docks.contexts_en, {
  "부두 위에 섬": "stand upon brave honor",
  "부두에 닿으려다 실패함": "strive reach fail coveted",
});

fs.writeFileSync(p2, JSON.stringify(d2, null, 2) + "\n");
console.log("patched docks in kmm26.json");
