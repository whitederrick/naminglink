// 인명용 한자표가 **개정됐는지만** 빠르게 본다.
//
// 전체 동기화(`official:sync`)는 음절 2,272개를 크롤해 오래 걸린다. 개정 여부만 알고 싶을
// 때는 표본 몇 개의 글자 수를 지금 자료와 대조하면 된다 — 글자가 늘면 그 음절의 응답 수가
// 늘어난다. **다르면 그때 전체 동기화를 돌린다.**
//
// 실행: apps/naminglink 에서  node scripts/check-official-hanja-revision.mjs [표본수]
//
// 왜 필요한가: 개정 주기가 2~3년으로 불규칙하고(docs/REFERENCE_DATA_UPDATES.md), 우리 표만
// 옛날 값으로 남으면 화면의 글자 수와 후보 목록이 사실과 달라진다.
import { readFileSync } from "node:fs";
import path from "node:path";

const BASE_URL = "https://efamily.scourt.go.kr";
const ENDPOINT = `${BASE_URL}/webhanja/whjsearch`;
const SAMPLE_SIZE = Number(process.argv[2] ?? 40);

const local = JSON.parse(
  readFileSync(path.join(process.cwd(), "data/official/scourt-hanja.json"), "utf8"),
);

/** 음절별로 우리가 가진 글자 수 */
const byReading = new Map();
for (const entry of local.entries) {
  byReading.set(entry.hangul, (byReading.get(entry.hangul) ?? 0) + 1);
}

// 글자가 많은 음절부터 본다. 추가가 일어나면 큰 음절에서 먼저 드러날 가능성이 높고,
// 표본이 적어도 신호를 잡을 확률이 올라간다.
const readings = [...byReading.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, SAMPLE_SIZE);

async function remoteCount(reading) {
  const query = new URLSearchParams({
    mode: "listUnicodeByKsnd",
    ksnd: reading.codePointAt(0).toString(16),
    ext: "0",
    pgmode: "1",
    pgno: "1",
    pgsize: "10000",
  });
  const response = await fetch(`${ENDPOINT}?${query}`, {
    headers: {
      "user-agent": "Naming-Link revision check/1.0",
      referer: `${BASE_URL}/cs/CsBltnWrtList.do?bltnbordId=0000010`,
    },
    signal: AbortSignal.timeout(30_000),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  return (data.resultlist ?? []).length;
}

console.log(`우리 자료: 기준일 ${local.source.effectiveDate} · 행 ${local.entries.length}`);
console.log(`표본 ${readings.length}개 음절을 대조합니다.\n`);

let changed = 0;
for (const [reading, mine] of readings) {
  let theirs;
  try {
    theirs = await remoteCount(reading);
  } catch (cause) {
    console.log(`  ? ${reading}  조회 실패 — ${cause instanceof Error ? cause.message : cause}`);
    continue;
  }
  if (theirs !== mine) {
    changed += 1;
    console.log(`  X ${reading}  우리 ${mine} → 대법원 ${theirs}  (${theirs - mine > 0 ? "+" : ""}${theirs - mine})`);
  }
  await new Promise((resolve) => setTimeout(resolve, 60));
}

console.log(
  changed === 0
    ? `\n표본 ${readings.length}개가 모두 같습니다. 개정 흔적이 없습니다.`
    : `\n${changed}개 음절에서 글자 수가 다릅니다. **전체 동기화를 돌리십시오**(npm run official:sync).`,
);
console.log("표본 검사라 '같다'가 개정이 없었다는 증명은 아닙니다. 분기마다 다시 보십시오.");
process.exitCode = changed === 0 ? 0 : 1;
