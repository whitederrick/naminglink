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

import { buildSeal, renderSeal, SEAL_PATH } from "./seal-locale-review";
import { fileOnlyReader } from "./legal-source";
import { loadManifest, hashValue, type Manifest, type ScopeRecord } from "./locale-manifest";
import { scopeInventory } from "./locale-inventory";
import { LEGAL_REVIEW_SEAL, sealedLegalHash } from "../src/lib/locale-review-seal";
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
  const { seal, skipped } = await buildSeal(manifest, fileOnlyReader);
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
  // **건너뜀은 통과가 아니다.** 봉인이 빠진 로케일은 런타임에서 게시가 열린다.
  for (const note of skipped) fail(`봉인이 빠졌다(게시가 열린다): ${note}`);
}

// ── ② 관문 판정 ────────────────────────────────────────────────────────────
/** 라우트와 같은 판정식(`site-content/route.ts`). 여기 두 벌이 되지 않게 규칙만 옮겨 적는다. */
const blocked = (locale: string, kind: string, content: unknown) => {
  const sealed = sealedLegalHash(locale, kind);
  return Boolean(sealed) && sealed !== hashReviewDocument(content);
};

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
  const decide = (lookup: (l: string, k: string) => string | null, content: unknown) => {
    const sealed = lookup("en", "terms");
    return Boolean(sealed) && sealed !== hashReviewDocument(content);
  };
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

  // manifest 드리프트가 있으면 봉인하지 않는다(틀린 값을 정답으로 굳히지 않는다).
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
  const drifted: Manifest = { version: 1, scopes: [driftedRecord] };
  const result = await buildSeal(drifted, fileOnlyReader);
  check("드리프트가 있으면 봉인하지 않는다", Object.keys(result.seal).length === 0);
  check("건너뛴 이유를 알린다", result.skipped.length > 0);

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
