import fs from "node:fs";

// person-reading-a-book(책 읽는 사람) — 배치 213: 밀러 「Reading」 셋을 더한다.
const pReading = "apps/dreamslink/data-sources/extract/km9.json";
const dReading = JSON.parse(fs.readFileSync(pReading, "utf8"));
const reading = dReading.find((x) => x.id === "person-reading-a-book");
if (!reading) throw new Error("person-reading-a-book not found in km9.json");

// 기존 별칭이 전부 "~하는 사람"류라 "제가 책을 읽는" 식의 자기 행위 문장은 이름 자체가
// 안 걸렸다 — 활용형 별칭을 더한다(§29 곁가지 ①과 같은 자리).
reading.aliases.push("책 읽기", "책을 읽어", "책을 읽었다", "책을 읽는데");
// 곁가지(옛 상처) — 프로브가 찾았다. 기존 문맥 이름 자체(「남이 책 읽는 것을 봄」)가
// 그 문맥의 매칭 문장인데, "책 읽는 것"이 별칭에 없어 한 번도 안 걸리고 있었다
// (CLAUDE.md §29 곁가지 ①과 같은 자리, 이번엔 이름 자체가 죽어 있었다).
reading.aliases.push("책 읽는 것을", "책 읽는 것");
Object.assign(reading.contexts, {
  "제가 책 읽기에 몰두함": "제가 몰두 어려운일",
  "책을 읽어 주거나 책 이야기를 나눔": "읽어 이야기를",
  "책 내용이 흐릿하거나 앞뒤가 안 맞음": "흐릿하 앞뒤가",
});
Object.assign(reading.contexts_en, {
  "제가 책 읽기에 몰두함": "engaged excel difficult",
  "책을 읽어 주거나 책 이야기를 나눔": "discuss literary cultivate",
  "책 내용이 흐릿하거나 앞뒤가 안 맞음": "indistinct incoherent worries",
});

fs.writeFileSync(pReading, JSON.stringify(dReading, null, 2) + "\n");
console.log("patched person-reading-a-book in km9.json");

// entertainment(연회) — 배치 213: 밀러 「Reception」 둘을 더한다. "환영회"는 이 상징의
// 이름(연회)을 안 담고 있어 그 자체로는 안 걸린다 — 별칭으로 올려 진입점을 만든다.
const pEnt = "apps/dreamslink/data-sources/extract/kmm31.json";
const dEnt = JSON.parse(fs.readFileSync(pEnt, "utf8"));
const ent = dEnt.find((x) => x.id === "entertainment");
if (!ent) throw new Error("entertainment not found in kmm31.json");

// "환영회에 참석함"(길함)은 넣지 않는다 — 이미 있는 「즐거움을 위해 파티에 참석함」
// (밀러 Party)과 같은 그림·같은 결과라 겹치고, 실제로 판별어를 짜 보니 둘 다
// "참석"을 중심으로 겹쳐 verify-dream-km이 동점 위험으로 막았다(mb213 참고).
// "환영회"는 「혼란이 있음」 하나의 이름 진입점으로만 쓴다.
ent.aliases.push("환영회", "환영회에서");
Object.assign(ent.contexts, {
  "환영회에서 혼란이 있음": "혼란 혼란이",
});
Object.assign(ent.contexts_en, {
  "환영회에서 혼란이 있음": "confusion disquietude",
});

fs.writeFileSync(pEnt, JSON.stringify(dEnt, null, 2) + "\n");
console.log("patched entertainment in kmm31.json");
