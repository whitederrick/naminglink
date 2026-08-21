/**
 * **관리자 약관 게시 관문이 실제로 막는가, 그리고 봉인이 manifest 와 같은가.**
 *
 * 구현 명세 §8·단계 3. 이 구조에는 복사본이 하나 있다.
 *
 *     docs/locale-review/manifest.json   판정의 진실
 *     src/lib/locale-review-seal.ts      배포된 함수가 읽을 수 있는 복사본
 *
 * **복사본이 원본과 갈라지는 것이 유일한 위험이다.** 갈라지면 관문은 초록불인 채 승인되지 않은
 * 약관을 통과시키거나, 반대로 승인된 것을 막아 운영자가 일을 못 한다. 그래서 여기서 매번
 * 다시 만들어 대조한다.
 *
 * 실행: apps/naminglink 에서 `npx tsx scripts/verify-legal-publish-gate.ts`
 */
import { readFileSync } from "node:fs";

import { buildSeal, renderSeal, SealMismatchError, SEAL_PATH } from "./seal-locale-review";
import { fileOnlyReader } from "./legal-source";
import { loadManifest, hashValue, type ScopeRecord } from "./locale-manifest";
import { scopeInventory } from "./locale-inventory";
import {
  LEGAL_REVIEW_SEAL,
  isBlockedBySeal,
  legalPublishBlocked,
} from "../src/lib/locale-review-seal";
import { hashReviewDocument } from "../src/lib/review-hash";
import { getLegalLocaleContent } from "../src/lib/legal-content";

let failures = 0;
const fail = (message: string) => {
  failures += 1;
  console.log(`  ✗ ${message}`);
};
const check = (label: string, ok: boolean, detail = "") => {
  if (ok) console.log(`  ✓ ${label}`);
  else fail(`${label}${detail ? ` — ${detail}` : ""}`);
};

// tsx 가 cjs 로 옮기므로 최상위 await 를 쓸 수 없다. 감싼다.
async function main() {
console.log("\n약관 게시 관문 검사\n");

const manifest = loadManifest();

// ── ① 봉인이 manifest 와 같은가 ────────────────────────────────────────────
console.log("① 봉인 ↔ manifest");
{
  // **어긋나면 던진다**(결함 동결 P0-1 ③). 여기서 잡아 빨간불로 바꾼다.
  let seal: Record<string, string>;
  try {
    ({ seal } = await buildSeal(manifest, fileOnlyReader));
  } catch (error) {
    if (!(error instanceof SealMismatchError)) throw error;
    for (const note of error.reasons) fail(`봉인을 만들 수 없다: ${note}`);
    seal = {};
  }
  const onDisk = readFileSync(SEAL_PATH, "utf8");
  const expected = renderSeal(seal);
  check(
    `봉인 파일이 manifest 에서 다시 만든 것과 같다 (${Object.keys(seal).length}건)`,
    onDisk.replace(/\r\n/g, "\n") === expected.replace(/\r\n/g, "\n"),
    "`npx tsx scripts/seal-locale-review.ts` 를 다시 돌릴 것",
  );
  check(
    "불러온 상수도 같은 건수다",
    Object.keys(LEGAL_REVIEW_SEAL).length === Object.keys(seal).length,
  );
}

// ── ② 관문 판정 ────────────────────────────────────────────────────────────
/**
 * **라우트가 부르는 바로 그 함수를 부른다** (결함 동결 P1-5).
 *
 * 예전에는 여기 판정식을 **옮겨 적어** 두었다. 그때는 값이 같았지만, 라우트를 고쳐도 이 검사기는
 * 초록불이라 **갈라지는 것을 알아챌 방법이 없었다.** 지금은 한 자리에서 export 한 것을
 * 라우트(`site-content/route.ts`)와 여기가 함께 import 한다 — 두 벌이 아닌 것이 구조적으로 참이다.
 */
const blocked = (locale: string, kind: string, content: unknown) =>
  legalPublishBlocked(locale, kind, hashReviewDocument(content));

console.log("\n② 관문 판정");
{
  const sealedKeys = Object.keys(LEGAL_REVIEW_SEAL);
  if (sealedKeys.length === 0) {
    console.log("  · 봉인된 (로케일, 문서)가 아직 없다 — 실제 콘텐츠로는 막을 것이 없다.");
    console.log("    **통과가 아니라 「검수 전」이다.** 아래 대조군이 판정기가 살아 있는지 본다.");
  } else {
    for (const key of sealedKeys.slice(0, 4)) {
      const [locale, kind] = key.split(":");
      const documents = getLegalLocaleContent(locale as never).documents;
      const current = documents[kind as keyof typeof documents];
      check(`${key} — 승인된 내용 그대로는 통과`, !blocked(locale!, kind!, current));
      check(`${key} — 한 글자만 바꿔도 막힌다`, blocked(locale!, kind!, { ...(current as object), __t: "x" }));
    }
  }
}

// ── ③ 대조군 ───────────────────────────────────────────────────────────────
console.log("\n③ 대조군 — 판정기가 살아 있는가");
{
  // 봉인이 비어 있어도 판정식 자체는 시험할 수 있다. 가짜 봉인으로 세 갈래를 만든다.
  const fakeSeal = (map: Record<string, string>) => (locale: string, kind: string) =>
    map[`${locale}:${kind}`] ?? null;
  // **판정 알맹이를 그대로 부른다.** 여기 규칙을 다시 적으면 P1-5 를 고치면서 같은 결함을
  // 대조군에 새로 심는 셈이 된다.
  const decide = (lookup: (l: string, k: string) => string | null, content: unknown) =>
    isBlockedBySeal(lookup("en", "terms"), hashReviewDocument(content));
  const doc = { title: "T", sections: [{ title: "1. a", paragraphs: ["p"] }] };
  const approved = hashReviewDocument(doc);

  check("봉인이 없으면 막지 않는다", decide(fakeSeal({}), doc) === false);
  check("봉인과 같으면 막지 않는다", decide(fakeSeal({ "en:terms": approved }), doc) === false);
  check(
    "봉인과 다르면 막는다",
    decide(fakeSeal({ "en:terms": approved }), { ...doc, title: "바뀜" }) === true,
  );
  check(
    "다른 문서의 봉인은 이 문서를 막지 않는다",
    decide(fakeSeal({ "en:privacy": approved }), { ...doc, title: "바뀜" }) === false,
  );

  /**
   * **공용 판정 함수의 행동을 직접 본다**(결함 동결 P1-5 조건 ②).
   *
   * 「양쪽이 함께 바뀌는지」를 시험하지는 않는다 — import 하면 두 벌이 아닌 것이 구조적으로
   * 참이고, 거기에 시험을 더하면 「도는가만 보는 형식적 시험」이 하나 는다. 이번에 없앤 부류다.
   */
  const sealedNow = Object.keys(LEGAL_REVIEW_SEAL);
  if (sealedNow.length === 0) {
    check("봉인이 없으면 막지 않는다(공용 함수)", legalPublishBlocked("en", "terms", "무엇이든") === false);
  } else {
    const [locale, kind] = sealedNow[0]!.split(":");
    const sealedValue = LEGAL_REVIEW_SEAL[sealedNow[0]!]!;
    check("봉인 == 내용 → 허용(공용 함수)", legalPublishBlocked(locale!, kind!, sealedValue) === false);
    check("봉인 != 내용 → 차단(공용 함수)", legalPublishBlocked(locale!, kind!, "다른값") === true);
  }

  // manifest 드리프트가 있으면 **부분 봉인을 만들지 않고 죽는다**(결함 동결 P0-1 ③).
  const koLegal = scopeInventory("legal", "ko");
  const driftedRecord: ScopeRecord = {
    locale: "ko",
    scope: "legal",
    inventoryVersion: "t",
    artifacts: koLegal.map((leaf) => ({
      id: leaf.path,
      sourceKind: "origin" as const,
      targetHash: hashValue(`${leaf.value}⟪바뀜⟫`),
    })),
    reviewer: "시험",
    reviewedAt: "2026-08-20",
    verdicts: { modified: 0, approved: koLegal.length, deferred: 0 },
  };
  let mismatch: SealMismatchError | null = null;
  try {
    await buildSeal({ version: 1, scopes: [driftedRecord] }, fileOnlyReader);
  } catch (error) {
    if (!(error instanceof SealMismatchError)) throw error;
    mismatch = error;
  }
  check("드리프트가 있으면 던진다(부분 봉인을 돌려주지 않는다)", mismatch !== null);
  check("죽은 이유를 알린다", (mismatch?.reasons.length ?? 0) > 0);

  // 반대 방향 — 드리프트가 없으면 봉인한다(0건으로 늘 통과하는 검사가 아니다).
  const cleanRecord: ScopeRecord = {
    ...driftedRecord,
    artifacts: koLegal.map((leaf) => ({
      id: leaf.path,
      sourceKind: "origin" as const,
      targetHash: hashValue(leaf.value),
    })),
  };
  const clean = await buildSeal({ version: 1, scopes: [cleanRecord] }, fileOnlyReader);
  check("깨끗하면 봉인한다(대조군)", Object.keys(clean.seal).length > 0);
}

console.log(failures === 0 ? "\n통과\n" : `\n빨간불 ${failures}건\n`);
process.exit(failures === 0 ? 0 : 1);
}

void main();
