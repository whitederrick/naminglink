#!/usr/bin/env node
/**
 * **결제 고시가 그 사람의 언어로 나가는가.**
 *
 * ## 왜 이 검사가 필요한가 (2026-08-19)
 *
 * `CheckoutConsent`는 상품 정보 고시와 청약철회 제한을 그린다 — 전자상거래법이 요구하는
 * 고지다. 그런데 `locale`을 **안 넘기면 조용히 영어로 떨어진다**:
 *
 *     lib/checkout-consent  resolveLocale(undefined) → "en"
 *
 * 실제로 그랬다. 한자 결제 패널만 이 값을 넘기지 않아, 같은 화면의 후보 패널은 한국어인데
 * **결제 직전의 고시만 영어**로 나갔다. 네 자리 중 세 곳은 넘기고 있었으므로 코드를 훑어봐도
 * 눈에 띄지 않는다 — **빠진 배선은 세어야 보인다.**
 *
 * ## 무엇을 보는가
 *
 *   ① `<CheckoutConsent` 를 쓰는 모든 자리가 `locale=` 을 함께 넘기는가
 *   ② 쓰는 자리를 한 곳도 못 찾으면 실패 — 검사 0건은 통과가 아니다
 *
 * 앱 목록은 손으로 적지 않는다(`scripts/app-keys.mjs`).
 *
 * 실행: node scripts/verify-consent-locale.mjs
 */

import { readFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { APP_KEYS } from "./app-keys.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TAG = "<CheckoutConsent";

const problems = [];
let used = 0;

/** 그 파일에서 `<CheckoutConsent … />` 한 덩어리씩 잘라 낸다. 닫는 `>`까지 본다. */
function usages(source) {
  const found = [];
  let at = source.indexOf(TAG);
  while (at >= 0) {
    const end = source.indexOf(">", at);
    found.push(source.slice(at, end < 0 ? source.length : end + 1));
    at = source.indexOf(TAG, at + TAG.length);
  }
  return found;
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".tsx")) out.push(full);
  }
  return out;
}

console.log("결제 고시 언어 — 쓰는 자리마다 로케일이 넘어가는가\n");

for (const app of APP_KEYS) {
  const src = path.join(ROOT, "apps", app, "src");
  if (!existsSync(src)) continue;
  let inApp = 0;

  for (const file of walk(src)) {
    const source = readFileSync(file, "utf8");
    if (!source.includes(TAG)) continue;
    for (const block of usages(source)) {
      inApp += 1;
      used += 1;
      if (!/\blocale=/.test(block)) {
        problems.push(
          `${app}/${path.relative(src, file).split(path.sep).join("/")}: ` +
            "locale 을 안 넘긴다 — 고시가 영어로 나간다",
        );
      }
    }
  }
  if (inApp) console.log(`  ${app.padEnd(11)} 쓰는 자리 ${inApp}곳`);
}

/**
 * **대조군.** 판정이 살아 있는가 — 없는 자리를 잡고, 있는 자리는 통과시킨다.
 * 이 두 줄이 없으면 정규식이 죽어도 초록이 나온다.
 */
const controlCaught = !/\blocale=/.test('<CheckoutConsent kind="DIGITAL" checked={x}>');
const controlPasses = /\blocale=/.test('<CheckoutConsent kind="DIGITAL" locale={locale}>');
if (!controlCaught || !controlPasses) {
  console.error(`\n✗ 대조군 실패 — 빠짐 감지 ${controlCaught} · 정상 통과 ${controlPasses}`);
  process.exit(1);
}
console.log("\n  ✓ 대조군: locale 이 빠진 자리는 잡고, 넘기는 자리는 통과시킨다");

if (used === 0) {
  console.error("\n쓰는 자리를 한 곳도 못 찾았다 — 검사 0건은 통과가 아니다. 부품 이름이 바뀌었는지 볼 것.");
  process.exit(1);
}

if (problems.length) {
  console.log(`\n어긋난 자리 ${problems.length}건:`);
  for (const line of problems) console.log(`    ✗ ${line}`);
  process.exit(1);
}

console.log(`\nALL PASS — 결제 고시 ${used}곳이 모두 로케일을 받는다.`);
process.exit(0);
