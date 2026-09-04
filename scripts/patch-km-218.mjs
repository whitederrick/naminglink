import fs from "node:fs";

// dead-person(죽은 사람) — 배치 218: 밀러 「Resurrection」 둘을 더한다. 이미 있는
// 「죽은 사람이 되살아남」(주공해몽)과 그림은 비슷하나 밀러는 "제가"/"남이"로 갈라
// 각각 다른 결과를 말해 둘 다 새로 더한다.
const pDead = "apps/dreamslink/data-sources/extract/km1.json";
const dDead = JSON.parse(fs.readFileSync(pDead, "utf8"));
const dead = dDead.find((x) => x.id === "dead-person");
if (!dead) throw new Error("dead-person not found in km1.json");

// 기존 별칭이 전부 명사형(시신·시체·망자 등)이라 "죽었다가 되살아났다" 같은 동사형
// 문장은 이름 자체가 안 걸렸다 — 활용형 별칭을 더한다(§29 곁가지 ①과 같은 자리).
dead.aliases.push("죽었다가");
Object.assign(dead.contexts, {
  "제가 죽었다가 되살아남": "제가 번민",
  "남이 죽었다가 되살아나는 것을 봄": "남이 배려 가벼워질",
});
Object.assign(dead.contexts_en, {
  "제가 죽었다가 되살아남": "vexation eventually desires",
  "남이 죽었다가 되살아나는 것을 봄": "troubles lightened thoughtfulness",
});

fs.writeFileSync(pDead, JSON.stringify(dDead, null, 2) + "\n");
console.log("patched dead-person in km1.json");
