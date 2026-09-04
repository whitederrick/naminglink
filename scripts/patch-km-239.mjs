import fs from "node:fs";

// scissors(가위) — 배치 239: 밀러 「Scissors」 셋을 더한다. 「가위가
// 부러짐」은 기존 주공해몽 「가위의 다리가 부러짐」과 같은 그림이라 뺐다.
const pScissors = "apps/dreamslink/data-sources/extract/km9.json";
const dScissors = JSON.parse(fs.readFileSync(pScissors, "utf8"));
const scissors = dScissors.find((x) => x.id === "scissors");
if (!scissors) throw new Error("scissors not found in km9.json");

Object.assign(scissors.contexts, {
  "가위 꿈이 불길함": "불길했 아내들이 헐뜯을",
  "가위를 갈게 함": "갈게 갈았 내키지않는",
  "가위를 잃어버림": "잃어버 불쾌한일 벗어나려",
});
Object.assign(scissors.contexts_en, {
  "가위 꿈이 불길함": "unlucky wives jealous",
  "가위를 갈게 함": "sharpened repulsive feelings",
  "가위를 잃어버림": "lose escape unpleasant",
});

fs.writeFileSync(pScissors, JSON.stringify(dScissors, null, 2) + "\n");
console.log("patched scissors in km9.json");
