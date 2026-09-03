import fs from "node:fs";

const p = "apps/dreamslink/data-sources/extract/km3.json";
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const dove = d.find((x) => x.id === "dove");
if (!dove) throw new Error("dove not found in km3.json");

Object.assign(dove.contexts, {
  "사격 시합에 쓰이는 비둘기를 봄": "사격 시합 잔인함",
  "비둘기가 나는 것을 봄": "나는 날아 오해",
});
Object.assign(dove.contexts_en, {
  "사격 시합에 쓰이는 비둘기를 봄": "shooting match cruelty",
  "비둘기가 나는 것을 봄": "flying freedom misunderstanding",
});

fs.writeFileSync(p, JSON.stringify(d, null, 2) + "\n");
console.log("patched dove in km3.json");
