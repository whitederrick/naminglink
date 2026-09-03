import fs from "node:fs";

const peachPath = "apps/dreamslink/data-sources/extract/km3.json";
const peachData = JSON.parse(fs.readFileSync(peachPath, "utf8"));
const peach = peachData.find((x) => x.id === "peach");
if (!peach) throw new Error("peach not found in km3.json");
Object.assign(peach.contexts, {
  "복숭아를 보거나 먹음": "자식이 앓고 실망스럽게",
  "잎이 우거진 나무에 달린 복숭아를 봄": "우거진 나무 무릅쓰고",
  "마른 복숭아를 봄": "마른 등쳐",
  "처녀가 무성한 나무에서 탐스러운 복숭아를 땀": "처녀가 무성한 탐스러운",
  "복숭아가 설익고 옹이가 짐": "설익고 옹이 박대",
});
Object.assign(peach.contexts_en, {
  "복숭아를 보거나 먹음": "sickness children disappointing",
  "잎이 우거진 나무에 달린 복숭아를 봄": "foliage secure striving",
  "마른 복숭아를 봄": "dried enemies steal",
  "처녀가 무성한 나무에서 탐스러운 복숭아를 땀": "gathering luscious husband",
  "복숭아가 설익고 옹이가 짐": "green knotty unkindness",
});
fs.writeFileSync(peachPath, JSON.stringify(peachData, null, 2) + "\n");
console.log("patched peach in km3.json");

const pcPath = "apps/dreamslink/data-sources/extract/km8.json";
const pcData = JSON.parse(fs.readFileSync(pcPath, "utf8"));
const peacock = pcData.find((x) => x.id === "peacock");
if (!peacock) throw new Error("peacock not found in km8.json");
Object.assign(peacock.contexts, {
  "공작 꿈을 꿈": "빛나는 흐름 슬픔",
  "여성이 공작을 소유함": "여성이 소유 헤아려 속을",
  "공작의 거친 울음소리를 들으며 화려한 깃털을 봄": "울음소리 곱고 훤칠",
});
Object.assign(peacock.contexts_en, {
  "공작 꿈을 꿈": "brilliant stream sorrow",
  "여성이 공작을 소유함": "owns deceived honor",
  "공작의 거친 울음소리를 들으며 화려한 깃털을 봄": "harsh voices beautiful discomfort",
});
fs.writeFileSync(pcPath, JSON.stringify(pcData, null, 2) + "\n");
console.log("patched peacock in km8.json");
