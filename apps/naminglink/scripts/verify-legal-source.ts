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
 *   ④ 봉인이 **승인한 것만** 봉인한다 — 양방향
 *   ⑤ 없음 · 못 물음 · 있음 **세 상태가 갈리는가**
 *   ⑥ 운영 현황 — 물어볼 수 있으면 어느 로케일이 DB 를 쓰는가
 *
 * ## §④ 는 한 번 결함을 기능이라고 증명했다 (2026-08-20 정정)
 *
 * 예전 §④ 는 「파일과 DB 의 봉인 해시가 **실제로 다르다**」를 배선의 증거로 삼았다.
 * **그 갈라짐이 바로 결함이었다**(결함 동결 P0-1) — manifest 가 파일을 승인한 상태에서 DB 가
 * 다르면 「승인한 적 없는 내용이 봉인된다」는 뜻이다. 지금은 양방향으로 본다.
 *
 * 실행: apps/naminglink 에서 `npx tsx scripts/verify-legal-source.ts`
 */
import {
  fileOnlyReader,
  resolveLegalDocuments,
  resolvedLegalLeaves,
  supabasePublishedReader,
} from "./legal-source";
import { buildSeal, SealEnvironmentError, SealMismatchError } from "./seal-locale-review";
import { hashValue, type Manifest, type ScopeRecord } from "./locale-manifest";
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
      key.includes(firstKind)
        ? ({ state: "found", content: altered } as const)
        : ({ state: "absent" } as const),
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
    const resolved = await resolveLegalDocuments("ko", () => ({
      state: "found",
      content: { 이건: "약관이 아니다" },
    }));
    check("source === 'file'(화면도 파일로 떨어진다)", resolved.source === "file");
    check(`깨진 종류를 전부 남긴다 (${resolved.invalidFromDb.length}종)`, resolved.invalidFromDb.length === kinds.length);
  }

  // ── ④ 봉인이 **승인한 것만** 봉인한다 ──────────────────────────────────
  /**
   * **이 절은 한 번 결함을 기능이라고 증명했다** (2026-08-20 정정 · 결함 동결 P0-1).
   *
   * 예전 문구는 "두 봉인 해시가 실제로 다르다(고르기가 값에 닿는다)" 였다. 파일 기준 봉인과
   * DB 기준 봉인이 **갈라지는 것**을 배선의 증거로 삼았는데, **그 갈라짐이 바로 결함이다.**
   * manifest 가 파일 내용을 승인해 둔 상태에서 DB 문서가 다르면, 그것은 「고르기가 값에
   * 닿는다」가 아니라 「승인한 적 없는 내용이 봉인된다」는 뜻이었다.
   *
   * 지금 보는 것은 **양방향**이다. 승인분은 봉인되고, 승인 안 된 것은 전체가 죽는다.
   */
  console.log("\n④ 봉인이 승인한 것만 봉인한다 — 양방향");
  {
    const approvedFrom = (documents: Record<string, unknown>): Manifest => {
      const leavesOf = resolvedLegalLeaves("ko", {
        locale: "ko", source: "file", documents, invalidFromDb: [], unavailable: [],
      });
      const record: ScopeRecord = {
        locale: "ko",
        scope: "legal",
        inventoryVersion: "t",
        artifacts: leavesOf.map((leaf) => ({
          id: leaf.path,
          sourceKind: "origin" as const,
          targetHash: hashValue(leaf.value),
        })),
        reviewer: "시험",
        reviewedAt: "2026-08-20",
        verdicts: { modified: 0, approved: leavesOf.length, deferred: 0 },
      };
      return { version: 1, scopes: [record] };
    };

    const fileDocs = getLegalLocaleContent("ko").documents as unknown as Record<string, unknown>;
    const altered = alteredDocument(firstKind);
    const dbReader = (key: string) =>
      key.includes(firstKind)
        ? ({ state: "found", content: altered } as const)
        : ({ state: "absent" } as const);

    // ④-1 파일을 승인했고 원본도 파일 → 봉인된다
    const onFile = await buildSeal(approvedFrom(fileDocs), fileOnlyReader);
    check("파일을 승인했고 원본도 파일 → 봉인된다", Object.keys(onFile.seal).length > 0);
    check("원본 표기가 file", onFile.sources.ko === "file");

    // ④-2 **결함 재현 방향** — 파일을 승인했는데 DB 가 다르다 → 전체가 죽는다
    let threw: SealMismatchError | null = null;
    try {
      await buildSeal(approvedFrom(fileDocs), dbReader);
    } catch (error) {
      threw = error instanceof SealMismatchError ? error : null;
      if (!threw) throw error;
    }
    check(
      "파일을 승인했는데 DB 가 다르다 → SealMismatchError 로 죽는다",
      threw !== null,
      "승인한 적 없는 DB 내용이 봉인되고 있다",
    );
    check("죽은 이유를 남긴다", (threw?.reasons.length ?? 0) > 0);

    // ④-3 **반대 방향** — DB 기준으로 정상 승인했다 → 막지 않는다
    const dbDocs = { ...fileDocs, [firstKind]: altered };
    const onDb = await buildSeal(approvedFrom(dbDocs), dbReader);
    check("DB 를 정상 승인했고 원본도 DB → 봉인된다(막지 않는다)", Object.keys(onDb.seal).length > 0);
    check("원본 표기가 db", onDb.sources.ko === "db");
    check(
      "봉인값이 파일이 아니라 DB 내용이다(고르기가 값에 닿는다)",
      onDb.seal[`ko:${firstKind}`] === hashReviewDocument(altered),
    );
    check(
      "게시본이 없는 종류는 두 봉인이 같다",
      kinds.length < 2 || onFile.seal[`ko:${kinds[1]}`] === onDb.seal[`ko:${kinds[1]}`],
    );
  }

  // ── ⑤ 세 상태가 갈리는가 ──────────────────────────────────────────────
  /**
   * **자격증명 없음 · 조회 오류 · 게시본 없음은 서로 다른 것이다** (결함 동결 P0-3).
   *
   * 2판까지 이 절은 "자격증명이 없는 컴퓨터에서도 같은 값이 나온다. 실패가 아니다" 라고
   * **적어 놓고 통과**시켰다. 그게 결함이었다 — 못 물어본 것을 「게시본 없음」으로 세면,
   * DB 가 죽은 동안 검수했을 때 **파일을 봉인해 놓고 화면은 DB 를 내보낸다.**
   */
  console.log("\n⑤ 세 상태가 갈리는가 — 없음 · 못 물음 · 있음");
  {
    const absent = await resolveLegalDocuments("ko", () => ({ state: "absent" }));
    const cannotAsk = await resolveLegalDocuments("ko", () => ({
      state: "unavailable",
      reason: "시험용 — 자격증명 없음",
    }));
    check("게시본 없음 → source=file · unavailable 0건", absent.source === "file" && absent.unavailable.length === 0);
    check(
      `못 물음 → unavailable ${cannotAsk.unavailable.length}건으로 남는다`,
      cannotAsk.unavailable.length === kinds.length,
    );
    check(
      "두 상태가 구분된다(같은 값으로 뭉개지 않는다)",
      absent.unavailable.length !== cannotAsk.unavailable.length,
    );

    // 봉인 쪽 — 못 물으면 **환경 실패로 죽는다**. 파일로 조용히 봉인하지 않는다.
    let envError: SealEnvironmentError | null = null;
    try {
      await buildSeal(
        { version: 1, scopes: [] },
        () => ({ state: "unavailable", reason: "시험용" }),
      );
      // scope 가 비면 reader 를 부르지 않으므로, 실제 레코드로 다시 본다.
      const koLeaves = resolvedLegalLeaves("ko", absent);
      await buildSeal(
        {
          version: 1,
          scopes: [
            {
              locale: "ko",
              scope: "legal",
              inventoryVersion: "t",
              artifacts: koLeaves.map((l) => ({
                id: l.path,
                sourceKind: "origin" as const,
                targetHash: hashValue(l.value),
              })),
              reviewer: "시험",
              reviewedAt: "2026-08-20",
              verdicts: { modified: 0, approved: koLeaves.length, deferred: 0 },
            },
          ],
        },
        () => ({ state: "unavailable", reason: "시험용 — 자격증명 없음" }),
      );
    } catch (error) {
      if (!(error instanceof SealEnvironmentError)) throw error;
      envError = error;
    }
    check("못 물으면 봉인이 환경 실패로 죽는다(파일로 봉인하지 않는다)", envError !== null);
    check(
      "환경 실패와 결함이 다른 오류다",
      envError !== null && !(envError instanceof SealMismatchError),
    );
  }

  // ── ⑥ 운영 현황 ───────────────────────────────────────────────────────
  console.log("\n⑥ 운영 현황");
  {
    const reader = await supabasePublishedReader();
    const probe = await resolveLegalDocuments("ko", reader);
    if (probe.unavailable.length) {
      // **통과가 아니다.** 환경변수가 없어 운영 원본을 확인하지 못했다.
      console.log("  · CANNOT_RUN — 환경변수가 없어 게시본을 물어보지 못했다.");
      console.log(`    ${probe.unavailable[0]!.reason}`);
      console.log("    운영 현황은 이 컴퓨터에서 알 수 없다. 위 ①~⑤ 는 주입 reader 라 유효하다.");
    } else if (probe.source === "db") {
      console.log("  · ko 의 운영 원본은 **DB 게시본**이다. 봉인·packet 이 그 값을 쓴다.");
    } else {
      console.log("  · ko 의 운영 원본은 **파일**이다 — 물어봤고 `legal.*` 게시본이 없었다.");
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
