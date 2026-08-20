/**
 * **법률 검수의 원본을 순서대로 고르는가** — DB 게시본이 있으면 DB, 없으면 파일.
 *
 * 구현 명세 §4.1 · DEC-01.
 *
 * ## 이 검사기는 한 번 잘못 만들었다 (2026-08-20)
 *
 * 처음에는 「DB 에 `legal.*` 게시본이 있으면 실패」였다. 그것은 **오늘의 상태**를 검사한
 * 것이지 지켜야 할 성질을 검사한 것이 아니다. 운영자가 약관을 정상 게시하는 날 스윕이 영구
 * 빨간불이 되고, 그러면 사람은 검사기를 끄는 법을 먼저 배운다 — `--fill-en` 이 관문에 막혀
 * 언제나 실패하던 것과 **같은 결함을 새로 심은 것**이었다.
 *
 * 지금은 `scripts/legal-source.ts` 의 resolver 가 실제로 고르고, 여기서는 **그 고르기가
 * 화면과 같은 순서인지**를 본다. 자격증명이 없어도 돈다 — reader 를 주입하기 때문이다.
 *
 * ## 무엇을 세는가
 *
 *   ① 게시본이 없으면 파일을 고른다
 *   ② 게시본이 있으면 DB 를 고른다
 *   ③ 게시본이 깨졌으면 파일로 떨어지고 **그 사실을 남긴다**(조용히 넘기지 않는다)
 *   ④ 봉인이 고른 원본을 따라간다 — 파일과 DB 의 봉인 해시가 실제로 다르다
 *   ⑤ 운영 현황(자격증명이 있을 때만) — 지금 어느 로케일이 DB 를 쓰는가
 *
 * 실행: apps/naminglink 에서 `npx tsx scripts/verify-legal-source.ts`
 */
import { fileOnlyReader, resolveLegalDocuments, supabasePublishedReader } from "./legal-source";
import { buildSeal } from "./seal-locale-review";
import { hashValue, type Manifest, type ScopeRecord } from "./locale-manifest";
import { scopeInventory } from "./locale-inventory";
import { getLegalLocaleContent } from "../src/lib/legal-content";
import { hashReviewDocument } from "../src/lib/review-hash";
import { localeCodes } from "../src/lib/locale-codes";

let failures = 0;
const check = (label: string, ok: boolean, detail = "") => {
  if (ok) console.log(`  ✓ ${label}`);
  else {
    failures += 1;
    console.log(`  ✗ ${label}${detail ? ` — ${detail}` : ""}`);
  }
};

/** `ko` 약관 문서 하나를 조금 바꾼 값. 「DB 게시본」 흉내를 낸다. */
function alteredDocument(kind: string) {
  const original = getLegalLocaleContent("ko").documents[
    kind as keyof ReturnType<typeof getLegalLocaleContent>["documents"]
  ] as Record<string, unknown>;
  return { ...original, description: `${String(original.description ?? "")} ⟪DB 게시본⟫` };
}

async function main() {
  console.log("\n법률 검수 원본 선택 검사\n");

  const kinds = Object.keys(getLegalLocaleContent("ko").documents);
  const firstKind = kinds[0]!;

  // ── ① 게시본이 없으면 파일 ────────────────────────────────────────────
  console.log("① 게시본이 없으면 파일을 고른다");
  {
    const resolved = await resolveLegalDocuments("ko", fileOnlyReader);
    check("source === 'file'", resolved.source === "file");
    check(`문서 ${kinds.length}종이 다 있다`, Object.keys(resolved.documents).length === kinds.length);
    check(
      "파일과 같은 값이다",
      hashReviewDocument(resolved.documents[firstKind]) ===
        hashReviewDocument(getLegalLocaleContent("ko").documents[firstKind as never]),
    );
  }

  // ── ② 게시본이 있으면 DB ──────────────────────────────────────────────
  console.log("\n② 게시본이 있으면 DB 를 고른다");
  {
    const altered = alteredDocument(firstKind);
    const resolved = await resolveLegalDocuments("ko", (key) =>
      key.endsWith(`${firstKind}.ko`) || key.includes(firstKind) ? altered : null,
    );
    check("source === 'db'", resolved.source === "db");
    check(
      "고른 값이 파일이 아니라 게시본이다",
      hashReviewDocument(resolved.documents[firstKind]) !==
        hashReviewDocument(getLegalLocaleContent("ko").documents[firstKind as never]),
    );
    check("게시본이 없는 종류는 파일 그대로", kinds.length < 2 ||
      hashReviewDocument(resolved.documents[kinds[1]!]) ===
        hashReviewDocument(getLegalLocaleContent("ko").documents[kinds[1] as never]));
    check("형식이 멀쩡하면 invalidFromDb 가 비어 있다", resolved.invalidFromDb.length === 0);
  }

  // ── ③ 깨진 게시본은 파일로 떨어지되 남긴다 ────────────────────────────
  console.log("\n③ 게시본이 깨졌으면 파일로 떨어지고 그 사실을 남긴다");
  {
    const resolved = await resolveLegalDocuments("ko", () => ({ 이건: "약관이 아니다" }));
    check("source === 'file'(화면도 파일로 떨어진다)", resolved.source === "file");
    check(`깨진 종류를 전부 남긴다 (${resolved.invalidFromDb.length}종)`, resolved.invalidFromDb.length === kinds.length);
  }

  // ── ④ 봉인이 고른 원본을 따라간다 ─────────────────────────────────────
  console.log("\n④ 봉인이 고른 원본을 따라간다");
  {
    const koLegal = scopeInventory("legal", "ko");
    const record: ScopeRecord = {
      locale: "ko",
      scope: "legal",
      inventoryVersion: "t",
      artifacts: koLegal.map((leaf) => ({
        id: leaf.path,
        sourceKind: "origin" as const,
        targetHash: hashValue(leaf.value),
      })),
      reviewer: "시험",
      reviewedAt: "2026-08-20",
      verdicts: { modified: 0, approved: koLegal.length, deferred: 0 },
    };
    const manifest: Manifest = { version: 1, scopes: [record] };

    const fromFile = await buildSeal(manifest, fileOnlyReader);
    const altered = alteredDocument(firstKind);
    const fromDb = await buildSeal(manifest, (key) => (key.includes(firstKind) ? altered : null));

    check("파일 기준 봉인이 만들어진다", Object.keys(fromFile.seal).length > 0);
    check("파일 기준 원본 표기가 file", fromFile.sources.ko === "file");
    check("DB 기준 원본 표기가 db", fromDb.sources.ko === "db");
    check(
      "두 봉인 해시가 실제로 다르다(고르기가 값에 닿는다)",
      fromFile.seal[`ko:${firstKind}`] !== fromDb.seal[`ko:${firstKind}`],
      "resolver 를 거치지 않고 파일만 보고 있다는 뜻",
    );
    check(
      "게시본이 없는 종류는 두 봉인이 같다",
      kinds.length < 2 || fromFile.seal[`ko:${kinds[1]}`] === fromDb.seal[`ko:${kinds[1]}`],
    );
  }

  // ── ⑤ 운영 현황 ───────────────────────────────────────────────────────
  console.log("\n⑤ 운영 현황");
  {
    const reader = await supabasePublishedReader();
    const probe = await resolveLegalDocuments("ko", reader);
    if (probe.source === "file" && probe.invalidFromDb.length === 0) {
      console.log("  · ko 의 운영 원본은 **파일**이다 — `legal.*` 게시본이 없다.");
      console.log("    자격증명이 없는 컴퓨터에서도 같은 값이 나온다(파일 폴백). 실패가 아니다.");
    } else if (probe.source === "db") {
      console.log("  · ko 의 운영 원본은 **DB 게시본**이다. 봉인·packet 이 그 값을 쓴다.");
    }
    if (probe.invalidFromDb.length) {
      failures += 1;
      console.log(`  ✗ 깨진 게시본이 있다: ${probe.invalidFromDb.join(", ")} — 관리자 화면에서 다시 저장할 것.`);
    }
    console.log(`  · 로케일 ${localeCodes.length}개 중 검수 기록이 있는 것만 봉인 대상이다.`);
  }

  console.log(failures === 0 ? "\n통과\n" : `\n빨간불 ${failures}건\n`);
  process.exit(failures === 0 ? 0 : 1);
}

void main();
