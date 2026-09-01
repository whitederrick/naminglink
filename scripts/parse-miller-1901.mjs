// 밀러 《Ten Thousand Dreams Interpreted》(1901, Project Gutenberg eBook #926, 퍼블릭 도메인 —
// 저작권 문제 없고 상업적 이용 가능)을 표제어별로 쪼갠다.
//
// 형식: `_Headword_.` 줄 다음에 그 표제어의 해석 문단(들)이 이어지다가 다음 `_Headword_.`
// 줄에서 끝난다. 사전 본문은 서문·색인과 섞여 있어, 첫 표제어(_Abandon_.)부터 마지막
// 표제어(_Zoological Garden_.) 사이만 잘라 쓴다 — 그 앞은 소개 에세이, 그 뒤는 페이지 색인이다.
//
// 실행: node scripts/parse-miller-1901.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const srcPath = path.resolve("apps/dreamslink/data-sources/miller-1901-raw.txt");
const outPath = path.resolve("apps/dreamslink/data-sources/miller-1901-parsed.json");

const raw = readFileSync(srcPath, "utf8");
const lines = raw.split(/\r?\n/);

const HEADWORD = /^_([^_]+)_\.?\s*(?:\[\d+\])?\s*$/;

/**
 * **표제어 일곱은 제 줄을 못 얻었다** — 앞 표제어의 마지막 문장이나 제 첫 문장과 한 줄에
 * 붙어 있다(원본 조판 사고로 보인다). 위 `HEADWORD`는 「줄 전체가 표제어」만 보므로 이
 * 일곱을 **표제어로 세지 않았고, 그래서 앞 표제어의 본문 속에 통째로 묻혀 있었다**
 * (2026-09-01에 발견). 책 자신의 색인에는 일곱 다 표제어로 실려 있다.
 *
 *   줄머리형  `_Canary Birds_.  To dream of this sweet songster, …`  (Canary Birds·Cistern·Quoits)
 *   줄끝형    `… pleasant amusements and rivalries.  _Gale_.`        (Gale·Jailer·Katydids·Yule Log)
 *
 * **성경 인용 넷과 갈라야 한다** — 그쪽도 `_…_.` 꼴인데 ``…''로 감싸여 있다.
 * 그래서 「줄머리에 오고 뒤에 공백 둘」 또는 「줄끝에 오고 앞에 공백 둘」만 표제어로 본다.
 * 인용 넷은 줄머리가 백틱이고 뒤에 `''`가 붙어 둘 다에 걸리지 않는다(실제로 확인).
 */
const HEADWORD_INLINE_HEAD = /^_([^_\n]+)_\.\s{2,}(\S.*)$/;
const HEADWORD_INLINE_TAIL = /^(.*\S)\s{2,}_([^_\n]+)_\.$/;

// 서문 에세이 안에도 `_..._` 강조가 섞여 있다(예: 37번째 줄 책 제목). 진짜 사전은
// 알파벳순 표제어로 시작하므로 첫 항목을 "Abandon"으로 확정해 그 앞은 건너뛴다.
let started = false;
let currentHead = null;
let currentLines = [];
const entries = [];

function flush() {
  if (!currentHead) return;
  const text = currentLines.join("\n").trim();
  if (text) entries.push({ headword: currentHead, text });
}

for (const line of lines) {
  const m = line.match(HEADWORD);
  if (m) {
    const word = m[1].trim();
    if (!started) {
      if (word !== "Abandon") continue; // 서문 안의 강조는 무시
      started = true;
    }
    // 색인(페이지 번호) 구간에 들어서면 멈춘다 — 마지막 진짜 항목은 "Zoological Garden".
    flush();
    currentHead = word;
    currentLines = [];
    if (word === "Zoological Garden") {
      // 이 항목 본문까지는 담고, 그다음 루프에서 색인이 시작되면 아래 break로 끊는다.
    }
    continue;
  }
  if (!started) continue;

  // 줄끝형 — 이 줄의 앞부분은 **앞 표제어의 것**이므로 먼저 담고 나서 끊는다.
  const tail = line.match(HEADWORD_INLINE_TAIL);
  if (tail) {
    currentLines.push(tail[1]);
    flush();
    currentHead = tail[2].trim();
    currentLines = [];
    continue;
  }
  // 줄머리형 — 뒤에 남은 부분이 새 표제어의 첫 줄이다.
  const inlineHead = line.match(HEADWORD_INLINE_HEAD);
  if (inlineHead) {
    flush();
    currentHead = inlineHead[1].trim();
    currentLines = [inlineHead[2]];
    continue;
  }

  if (currentHead === "Zoological Garden" && /^[A-Z][a-z]/.test(line) && line.includes(". . .")) {
    break; // 색인 줄 패턴("Word . . . 41") 시작
  }
  currentLines.push(line);
}
flush();

writeFileSync(
  outPath,
  `${JSON.stringify(
    {
      source: "Project Gutenberg eBook #926 — Ten Thousand Dreams Interpreted (Gustavus Hindman Miller, 1901)",
      license: "Public domain (published 1901, expired copyright). Commercially usable.",
      fetchedAt: "2026-08-26",
      entries,
    },
    null,
    2,
  )}\n`,
  "utf8",
);

console.log(`총 표제어: ${entries.length}개`);
console.log(`첫 항목: ${entries[0]?.headword}`);
console.log(`마지막 항목: ${entries[entries.length - 1]?.headword}`);
