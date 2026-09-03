import fs from "node:fs";

const p = "apps/dreamslink/data-sources/extract/kmm15.json";
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const coins = d.find((x) => x.id === "coins");
if (!coins) throw new Error("coins not found in kmm15.json");

Object.assign(coins.contexts, {
  "동전 꿈을 꿈": "만족스럽지 못한 애정이",
  "동전을 잃음": "잃었 하찮게 어긋날",
  "동전을 찾음": "찾았 나아질",
  "동전을 셈": "셌 수완 알뜰",
});
Object.assign(coins.contexts_en, {
  "동전 꿈을 꿈": "unsatisfactory pursuits smallness",
  "동전을 잃음": "lose deference failures",
  "동전을 찾음": "find advance improvement",
  "동전을 셈": "count business economical",
});

fs.writeFileSync(p, JSON.stringify(d, null, 2) + "\n");
console.log("patched coins in kmm15.json");
