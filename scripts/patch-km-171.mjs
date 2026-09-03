import fs from "node:fs";

const p = "apps/dreamslink/data-sources/extract/kmm27.json";
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const doctor = d.find((x) => x.id === "doctor");
if (!doctor) throw new Error("doctor not found in kmm27.json");

Object.assign(doctor.contexts, {
  "처녀가 의사 꿈을 꿈": "처녀가 소일거리 희생",
  "아픈 처녀가 의사 꿈을 꿈": "아픈 곧 이겨낼",
  "의사가 몹시 근심스러워 보임": "몹시 근심스러 시련",
});
Object.assign(doctor.contexts_en, {
  "처녀가 의사 꿈을 꿈": "young woman sacrificing frivolous",
  "아픈 처녀가 의사 꿈을 꿈": "sick worry overcome",
  "의사가 몹시 근심스러워 보임": "anxious trials sorrow",
});

fs.writeFileSync(p, JSON.stringify(d, null, 2) + "\n");
console.log("patched doctor in kmm27.json");
