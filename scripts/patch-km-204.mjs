import fs from "node:fs";

// rabbit(토끼) — 배치 204: 「Rabbit」 셋을 더한다. ⓪ grep이 "hare"만 보고 "토끼" 자체를
// 안 봐서, 이미 있던 rabbit(주공해몽, hare가 이미 그 영어 별칭)을 놓칠 뻔했다 —
// MT 관문이 "같은 id가 두 km 파일에" 로 잡았다.
const pRabbit = "apps/dreamslink/data-sources/extract/km2.json";
const dRabbit = JSON.parse(fs.readFileSync(pRabbit, "utf8"));
const rabbit = dRabbit.find((x) => x.id === "rabbit");
if (!rabbit) throw new Error("rabbit not found in km2.json");

rabbit.aliases.push("토끼들이", "토끼들을");

Object.assign(rabbit.contexts, {
  "토끼 꿈을 꿈": "형편이 흡족",
  "흰 토끼를 봄": "새하얀 신실",
  "토끼들이 뛰노는 것을 봄": "뛰어노 아이들이",
});
Object.assign(rabbit.contexts_en, {
  "토끼 꿈을 꿈": "favorable turns pleased gains",
  "흰 토끼를 봄": "white faithfulness love",
  "토끼들이 뛰노는 것을 봄": "frolicing children joys",
});

fs.writeFileSync(pRabbit, JSON.stringify(dRabbit, null, 2) + "\n");
console.log("patched rabbit in km2.json");
