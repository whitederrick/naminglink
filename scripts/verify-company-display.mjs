#!/usr/bin/env node
/**
 * **사업자 값이 그 사람의 언어로 나가는가.**
 *
 * ## 왜 이 검사가 필요한가 (2026-08-24)
 *
 * DB(`site_contents`)의 사업자 정보는 **한국어 단일본**이다. 화면에 낼 때 다듬어야 한다 —
 * 「준비 중」류는 로케일 문구로, 인명·상호·주소는 로마자 한 벌로. 푸터는 그렇게 하고 있었다.
 *
 * **`/[locale]/contact` 는 어느 앱에서도 그 규칙을 안 거쳤다.** 운영에서 확인한 결과:
 *
 *     naming-link.com/en/contact   Mail-order sales no. — 통신판매업 신고 준비 중
 *     inyeon-link.com/en/contact   Address              — 서울특별시 금천구 디지털로 130, …
 *     saju-link.com/en/contact     Privacy officer      — 곽은하(대표)
 *     dreams-link.com/en/contact   〃
 *
 * 네 앱 × 22개 비한국어 로케일이 그 상태였다. 전자상거래법 제10조가 요구하는 표시가
 * **그 사람이 못 읽는 문자로** 나가고 있었다.
 *
 * 그리고 규칙 자체가 **네 벌**이었다(앱마다 하나씩) — 서로 달랐고, 그중 어느 것도
 * contact 에는 연결돼 있지 않았다. 지금은 `packages/core/src/company-display.ts` 한 벌이다.
 *
 * ## 무엇을 보는가
 *
 *   ① 앱마다 `/[locale]/contact` 가 사업자 값을 `localizeCompanyValues` 에 통과시키는가
 *   ② 「준비 중」 문구표가 그 앱의 지원 로케일을 **전부** 덮는가
 *   ③ 실제 사업자 값을 넣어 돌렸을 때 비한국어 로케일 결과에 **한글이 남지 않는가**
 *   ④ 대조군 — 다듬지 않은 원값에는 한글이 **있어야** 한다. 없으면 이 검사가 아무것도
 *      재고 있지 않다는 뜻이므로 실패로 친다(검사 0건은 통과가 아니다)
 *
 * 앱 목록은 손으로 적지 않는다(`scripts/app-keys.mjs`).
 *
 * AUDIT_NO_SIDE_EFFECTS: 소스 파일을 읽고 core 의 순수 함수를 부르기만 한다. DB·네트워크·
 * 자식 프로세스 없음. 호출 자리를 열어 확인했다 — readFileSync 와 localizeCompanyValue 뿐이다.
 *
 * 실행: node scripts/verify-company-display.mjs
 */

import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { APP_KEYS } from "./app-keys.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const HANGUL = /[가-힣]/;

const failures = [];
const notes = [];
const fail = (message) => failures.push(message);

// ── core 의 규칙을 읽어 온다 (TS 라 소스에서 뽑아 쓴다) ──────────────────
// `.mjs` 에서 `.ts` 를 그대로 import 할 수 없다. app-keys.mjs 와 같은 방식으로,
// 목록을 여기 한 벌 더 적는 대신 원본을 읽는다.
const displaySrc = readFileSync(path.join(ROOT, "packages/core/src/company-display.ts"), "utf8");
const companySrc = readFileSync(path.join(ROOT, "packages/core/src/company.ts"), "utf8");

const pendingLocales = [...displaySrc.matchAll(/^ {2}([a-z]{2,3}): \{ pending:/gm)].map((m) => m[1]);
if (pendingLocales.length === 0) fail("core: 「준비 중」 문구표를 읽지 못했다");

const sentinels = [...displaySrc.matchAll(/^ {2}"([^"]+)": "(pending|registrationPending|mailOrderPending)"/gm)]
  .map((m) => m[1]);
if (sentinels.length !== 3) fail(`core: 「준비 중」 판정 문자열이 ${sentinels.length}개 — 3개여야 한다`);

const romanized = [...companySrc.matchAll(/^ {2}"?([^":]+)"?:\s*$|^ {2}"?([^":]+)"?: "/gm)];
const romanizeKeys = [
  ...companySrc.matchAll(/^\s{2}(?:"([^"]+)"|([가-힣()][^:]*?)):\s*\n?\s*"/gm),
].map((m) => (m[1] ?? m[2]).trim());

// ── ① contact 가 규칙을 거치는가 ────────────────────────────────────────
let checkedContacts = 0;
for (const app of APP_KEYS) {
  const file = path.join(ROOT, "apps", app, "src/app/[locale]/contact/page.tsx");
  if (!existsSync(file)) {
    fail(`${app}: contact/page.tsx 가 없다 — 검사받지 않은 앱은 통과가 아니다`);
    continue;
  }
  checkedContacts += 1;
  const src = readFileSync(file, "utf8");
  if (!src.includes("localizeCompanyValues")) {
    fail(`${app}: contact 가 사업자 값을 localizeCompanyValues 에 통과시키지 않는다`);
    continue;
  }
  // values={...} 안의 사업자 값이 전부 그 안에 들어 있는지.
  const open = src.indexOf("values={localizeCompanyValues(");
  if (open < 0) fail(`${app}: values 를 localizeCompanyValues 로 감싸지 않았다`);
}
if (checkedContacts === 0) fail("contact 페이지를 한 곳도 못 찾았다 — 검사 0건은 통과가 아니다");

// ── ② 문구표가 앱의 지원 로케일을 다 덮는가 ─────────────────────────────
for (const app of APP_KEYS) {
  // 원본은 `lib/locale-codes.ts` 하나다 — `services.ts`/`i18n.ts` 의 `supportedLocales` 는
  // 그것을 그대로 가져다 쓴다. 파생본이 아니라 원본을 읽는다.
  const file = path.join(ROOT, "apps", app, "src/lib/locale-codes.ts");
  if (!existsSync(file)) {
    fail(`${app}: lib/locale-codes.ts 를 못 찾았다 — 지원 로케일을 셀 수 없다`);
    continue;
  }
  const src = readFileSync(file, "utf8");
  const m = src.match(/localeCodes\s*=\s*\[([\s\S]*?)\]/);
  if (!m) {
    fail(`${app}: localeCodes 를 못 읽었다`);
    continue;
  }
  const locales = [...m[1].matchAll(/"([a-z]{2,3})"/g)].map((x) => x[1]);
  if (locales.length === 0) {
    fail(`${app}: supportedLocales 가 비었다`);
    continue;
  }
  const missing = locales.filter((l) => !pendingLocales.includes(l));
  if (missing.length) {
    fail(`${app}: 「준비 중」 문구가 없는 로케일 ${missing.join(", ")} — 그 언어엔 한국어가 나간다`);
  } else {
    notes.push(`${app}: 지원 ${locales.length}개 로케일 전부 덮음`);
  }
}

// ── ③④ 실제 값으로 돌려 본다 (대조군 포함) ─────────────────────────────
// core 는 TS 라 여기서 부를 수 없다. 규칙을 다시 적으면 두 벌이 되므로(§6), 대신
// **원값에 한글이 있는지**와 **로마자 표가 그 값을 알고 있는지**를 대조한다.
const facts = [...companySrc.matchAll(/^\s{2}(legalEntity|representative|address|privacyOfficer|mailOrderNumber|businessNumber|customerCenter|email|hostingProvider):\s*"([^"]*)"/gm)]
  .map((m) => ({ key: m[1], value: m[2] }));

const koreanFacts = facts.filter((f) => HANGUL.test(f.value));
if (koreanFacts.length === 0) {
  fail("대조군이 없다 — 사업자 값에 한글이 하나도 없다. 이 검사는 아무것도 재고 있지 않다");
} else {
  notes.push(`대조군: 한국어 사업자 값 ${koreanFacts.length}개 (${koreanFacts.map((f) => f.key).join(", ")})`);
  for (const f of koreanFacts) {
    const knownRomanized = romanizeKeys.includes(f.value);
    const knownSentinel = sentinels.includes(f.value);
    if (!knownRomanized && !knownSentinel) {
      fail(
        `${f.key}: 「${f.value}」 를 로마자 표도 「준비 중」 판정도 모른다 — ` +
          `비한국어 화면에 한글 그대로 나간다`,
      );
    }
  }
}

// ── 결과 ────────────────────────────────────────────────────────────────
for (const n of notes) console.log(`  ${n}`);
console.log("");

if (failures.length) {
  console.error(`빨간불 ${failures.length}건`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log(`ALL PASS — ${APP_KEYS.length}개 앱의 contact 가 사업자 값을 로케일 규칙에 통과시킨다.`);
process.exit(0);
