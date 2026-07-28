// 결제 전 고지 문구 검사.
//
// 이 문구는 전자상거래법 제17조 제2항의 청약철회 제한을 알리고 동의를 받는 고지다. 항목이 빠지거나
// 강조가 사라지면 **그 언어 구매자에게는 고지를 하지 않은 것이 된다.** 타입은 키 집합까지만
// 보장하므로, 타입이 못 보는 것을 여기서 한국어 원문과 대조한다:
//   - `info` 줄 수(DIGITAL 6 / MADE_TO_ORDER 7) — 상품정보 고시가 요구하는 항목 수
//   - `**강조**` 쌍 수 — 하필 "철회가 제한된다"는 핵심 문장을 감싼다
//   - 한국어 원문이 비한국어 사전에 그대로 남아 있는지(번역 누락)
//
// 실행: apps/naminglink 에서
//   node_modules/.bin/tsx scripts/verify-checkout-consent.ts

import { getConsentCopy } from "../src/lib/checkout-consent";
import type { ConsentKind } from "../src/lib/checkout-consent/types";
import { supportedLocales } from "../src/lib/services";

const KINDS: ConsentKind[] = ["DIGITAL", "MADE_TO_ORDER"];
const EXPECTED_INFO_ROWS: Record<ConsentKind, number> = {
  DIGITAL: 6,
  MADE_TO_ORDER: 7,
};

let failures = 0;

function fail(message: string) {
  failures += 1;
  console.error(`  ✗ ${message}`);
}

function boldPairs(value: string) {
  return (value.match(/\*\*/g) ?? []).length / 2;
}

function hasHangul(value: string) {
  return /[가-힣]/.test(value);
}

for (const kind of KINDS) {
  const base = getConsentCopy("ko", kind);
  const baseBold =
    boldPairs(base.consent) +
    base.info.reduce((sum, [, value]) => sum + boldPairs(value), 0);

  for (const locale of supportedLocales) {
    const copy = getConsentCopy(locale, kind);
    const label = `${locale}/${kind}`;

    if (copy.info.length !== EXPECTED_INFO_ROWS[kind]) {
      fail(
        `${label}: 상품정보 고시 항목이 ${copy.info.length}줄 (${EXPECTED_INFO_ROWS[kind]}줄이어야 함)`,
      );
    }

    const bold =
      boldPairs(copy.consent) +
      copy.info.reduce((sum, [, value]) => sum + boldPairs(value), 0);
    if (bold !== baseBold) {
      fail(`${label}: **강조** ${bold}쌍 (한국어 원문은 ${baseBold}쌍)`);
    }

    for (const field of ["infoTitle", "consent", "required", "refund"] as const) {
      if (!copy[field].trim()) fail(`${label}: ${field}가 비어 있다`);
      if (locale !== "ko" && hasHangul(copy[field])) {
        fail(`${label}: ${field}에 한국어가 남아 있다 — "${copy[field].slice(0, 30)}…"`);
      }
    }

    for (const [name, value] of copy.info) {
      if (!name.trim() || !value.trim()) fail(`${label}: 항목 "${name}"이 비어 있다`);
      if (locale !== "ko" && (hasHangul(name) || hasHangul(value))) {
        fail(`${label}: 항목 "${name}"에 한국어가 남아 있다`);
      }
      if (!value.includes("Naming-Link") && name.toLowerCase().includes("naming")) {
        fail(`${label}: 상호 "Naming-Link"가 번역됐다`);
      }
    }
  }
}

console.log(
  failures === 0
    ? `✓ ${supportedLocales.length}개 로케일 × ${KINDS.length}종 모두 통과`
    : `\n실패 ${failures}건`,
);
process.exit(failures > 0 ? 1 : 0);
