import fs from "node:fs";

// mouse(쥐) — 배치 210: 밀러 「Rat」에서 새 그림 하나(잡음)만 더한다. 나머지 둘은
// 이미 있는 「쥐를 봄」·「쥐를 죽임」(밀러 Mice)과 같은 그림이라 건너뛰었다.
const pMouse = "apps/dreamslink/data-sources/extract/km6.json";
const dMouse = JSON.parse(fs.readFileSync(pMouse, "utf8"));
const mouse = dMouse.find((x) => x.id === "mouse");
if (!mouse) throw new Error("mouse not found in km6.json");

Object.assign(mouse.contexts, {
  "쥐를 잡음": "잡았다 경멸했다",
});
Object.assign(mouse.contexts_en, {
  "쥐를 잡음": "scorn baseness outstrip",
});

fs.writeFileSync(pMouse, JSON.stringify(dMouse, null, 2) + "\n");
console.log("patched mouse in km6.json");
