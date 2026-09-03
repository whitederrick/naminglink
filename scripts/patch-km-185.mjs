import fs from "node:fs";

const pDrama = "apps/dreamslink/data-sources/extract/kmm27.json";
const dDrama = JSON.parse(fs.readFileSync(pDrama, "utf8"));
const drama = dDrama.find((x) => x.id === "drama");
if (!drama) throw new Error("drama not found in kmm27.json");

Object.assign(drama.contexts, {
  "처녀가 연극에 감": "다정한 벗에게 구애받",
  "연극을 오가는 데 곤란을 겪거나 어수선하고 흉한 장면을 봄": "오가는 곤란 어수선 흉한",
});
Object.assign(drama.contexts_en, {
  "처녀가 연극에 감": "courted marry",
  "연극을 오가는 데 곤란을 겪거나 어수선하고 흉한 장면을 봄": "trouble discordant hideous",
});

fs.writeFileSync(pDrama, JSON.stringify(dDrama, null, 2) + "\n");
console.log("patched drama in kmm27.json");

const pKm3 = "apps/dreamslink/data-sources/extract/km3.json";
const dKm3 = JSON.parse(fs.readFileSync(pKm3, "utf8"));

const joy = dKm3.find((x) => x.id === "joy");
if (!joy) throw new Error("joy not found in km3.json");

Object.assign(joy.contexts, {
  "기쁨이나 즐거움을 누리는 꿈을 꿈": "이득 즐거움을 누리는",
});
Object.assign(joy.contexts_en, {
  "기쁨이나 즐거움을 누리는 꿈을 꿈": "gain personal enjoyment",
});

const farming = dKm3.find((x) => x.id === "farming");
if (!farming) throw new Error("farming not found in km3.json");

Object.assign(farming.contexts, {
  "쟁기 꿈을 꿈": "쟁기",
  "사람들이 밭을 가는 것을 봄": "사람들이",
  "처녀가 애인이 밭을 가는 것을 봄": "애인이",
  "제가 직접 밭을 갊": "제가 직접 스스로",
});
Object.assign(farming.contexts_en, {
  "쟁기 꿈을 꿈": "chanced",
  "사람들이 밭을 가는 것을 봄": "persons advancement",
  "처녀가 애인이 밭을 가는 것을 봄": "lover noble wealthy",
  "제가 직접 밭을 갊": "yourself rapid increase",
});
farming.aliases.push("쟁기가", "쟁기를", "쟁기", "밭을 가는", "밭 갈고", "밭을 갈았다");
farming.aliases_en.push("a plow", "plows");

fs.writeFileSync(pKm3, JSON.stringify(dKm3, null, 2) + "\n");
console.log("patched joy and farming in km3.json");
