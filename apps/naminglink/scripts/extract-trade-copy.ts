// 거래 직결 문구 66자리를 두 로케일 짝으로 뽑아 JSON 으로 낸다. 사람이 읽을 것을 모은다.
//
// **자리 목록은 `trade-copy.ts` 한 벌이다** — 광고 개방 검사기도 같은 것을 쓴다.
// 여기에 목록을 다시 적지 않는다(CLAUDE.md §6).
//
// **검사기가 아니다.** 판정을 하지 않는다. 이름에 verify|audit|validate 를 넣지 않은 것도
// 그래서다 — 전수 스윕이 집어가면 안 된다.
//
// 실행 (apps/naminglink 에서):
//   node_modules/.bin/tsx --tsconfig tsconfig.json scripts/extract-trade-copy.ts <출력.json> [로케일=en]

import { writeFileSync } from "node:fs";

import { collectTradeCopy, tradeCopyHash, TRADE_COPY_EXPECTED, TRADE_COPY_TOTAL } from "./trade-copy";
import type { Locale } from "../src/lib/services";

const out = process.argv[2];
const target = (process.argv[3] ?? "en") as Locale;
if (!out) {
  console.error("사용법: extract-trade-copy.ts <출력.json> [로케일=en]");
  process.exit(1);
}

const base = collectTradeCopy("ko" as Locale);
const other = new Map(collectTradeCopy(target).map((item) => [item.id, item]));

const rows = base.map((item) => {
  const pair = other.get(item.id);
  if (!pair) throw new Error(`${target} 에 ${item.id} 가 없다`);
  return {
    id: item.id,
    group: item.group,
    groupLabel: item.groupLabel,
    place: item.place,
    label: item.label,
    ko: item.text,
    en: pair.text,
  };
});

for (const [group, want] of Object.entries(TRADE_COPY_EXPECTED)) {
  const got = rows.filter((r) => r.group === group).length;
  console.log(`  ${group}: ${got} (기대 ${want})${got === want ? "" : "   ← 어긋남"}`);
}
console.log(`  합계: ${rows.length} (기대 ${TRADE_COPY_TOTAL})`);
console.log(`  ${target} 해시: ${tradeCopyHash(target)}`);

writeFileSync(out, JSON.stringify(rows, null, 2), "utf8");
console.log(`\n${out} 에 썼다`);
process.exit(0);
