import fs from "node:fs";

// prison(감옥) — 배치 195: 「Prison」 둘째 문장(공식으로 풀려남)만 더한다. 첫 문장은
// 기존 "감옥 꿈을 꿈"(밀러 Penitentiary)과 같은 그림이라 인용이 자동으로 포개진다.
const pPrison = "apps/dreamslink/data-sources/extract/km6.json";
const dPrison = JSON.parse(fs.readFileSync(pPrison, "utf8"));
const prison = dPrison.find((x) => x.id === "prison");
if (!prison) throw new Error("prison not found in km6.json");

prison.aliases.push("옥에서 풀려나", "옥에서 풀려났다");

Object.assign(prison.contexts, {
  "옥에서 풀려남": "풀려나 이겨낼",
});
Object.assign(prison.contexts_en, {
  "옥에서 풀려남": "dismissed overcome",
});

fs.writeFileSync(pPrison, JSON.stringify(dPrison, null, 2) + "\n");
console.log("patched prison in km6.json");
