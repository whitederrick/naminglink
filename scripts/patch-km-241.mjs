import fs from "node:fs";

// snake(뱀) — 배치 241: 밀러 「Serpents」 하나를 더한다. 원문 각주 [199]
// 'See Snakes and Reptiles' 그대로.
const pSnake = "apps/dreamslink/data-sources/extract/km3.json";
const dSnake = JSON.parse(fs.readFileSync(pSnake, "utf8"));
const snake = dSnake.find((x) => x.id === "snake");
if (!snake) throw new Error("snake not found in km3.json");

Object.assign(snake.contexts, {
  "뱀 꿈이 병적인 우울을 가리킴": "병적인 우울 침체한처지",
});
Object.assign(snake.contexts_en, {
  "뱀 꿈이 병적인 우울을 가리킴": "morbidity depressed disappointment",
});

fs.writeFileSync(pSnake, JSON.stringify(dSnake, null, 2) + "\n");
console.log("patched snake in km3.json");
