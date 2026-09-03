import fs from "node:fs";

const umbrellaPath = "apps/dreamslink/data-sources/extract/km3.json";
const umbrellaData = JSON.parse(fs.readFileSync(umbrellaPath, "utf8"));
const umbrella = umbrellaData.find((x) => x.id === "umbrella");
if (!umbrella) throw new Error("umbrella not found in km3.json");
Object.assign(umbrella.contexts, {
  "기혼자가 양산 꿈을 꿈": "기혼자 부적절한 즐거움",
  "처녀가 양산 꿈을 꿈": "처녀 밀회 들킬까",
});
Object.assign(umbrella.contexts_en, {
  "기혼자가 양산 꿈을 꿈": "married illicit enjoyments",
  "처녀가 양산 꿈을 꿈": "young woman flirtations lover",
});
fs.writeFileSync(umbrellaPath, JSON.stringify(umbrellaData, null, 2) + "\n");
console.log("patched umbrella in km3.json");

const packetPath = "apps/dreamslink/data-sources/extract/kmm148.json";
const packetData = JSON.parse(fs.readFileSync(packetPath, "utf8"));
const packet = packetData.find((x) => x.id === "packet");
if (!packet) throw new Error("packet not found in kmm5.json");
Object.assign(packet.contexts, {
  "제게 소포가 배달됨": "배달돼 반가운 보살핌",
  "소포를 나름": "소포를 나르 달갑잖은",
  "소포를 배달하다 길에서 떨어뜨림": "떨어뜨렸 거래 틀어질",
});
Object.assign(packet.contexts_en, {
  "제게 소포가 배달됨": "delivered pleasantly surprised absent",
  "소포를 나름": "carry parcel unpleasant task",
  "소포를 배달하다 길에서 떨어뜨림": "fall deal fail",
});
fs.writeFileSync(packetPath, JSON.stringify(packetData, null, 2) + "\n");
console.log("patched packet in kmm148.json");
