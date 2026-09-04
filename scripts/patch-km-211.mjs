import fs from "node:fs";

// mouse-trap(쥐덫) — 배치 211: 밀러 「Rat-trap」에서 새 그림 셋(빠짐·비어 있음·부서짐)만
// 더한다. 「덫을 놓음」은 이미 있는 「쥐덫을 놓음」(밀러 Mouse-trap)과 같은 그림·같은
// 결과라 건너뛰었다.
const pTrap = "apps/dreamslink/data-sources/extract/kmm134.json";
const dTrap = JSON.parse(fs.readFileSync(pTrap, "utf8"));
const trap = dTrap.find((x) => x.id === "mouse-trap");
if (!trap) throw new Error("mouse-trap not found in kmm134.json");

Object.assign(trap.contexts, {
  "쥐덫에 빠짐": "빠졌 빠지는 빼앗길",
  "쥐덫이 비어 있는 것을 봄": "비어",
  "부서진 쥐덫을 봄": "부서진 벗어날",
});
Object.assign(trap.contexts_en, {
  "쥐덫에 빠짐": "victimized robbed valuable",
  "쥐덫이 비어 있는 것을 봄": "absence slander competition",
  "부서진 쥐덫을 봄": "broken rid unpleasant",
});

fs.writeFileSync(pTrap, JSON.stringify(dTrap, null, 2) + "\n");
console.log("patched mouse-trap in kmm134.json");
