/**
 * **검수 봉인을 만든다** — `docs/locale-review/manifest.json` → `src/lib/locale-review-seal.ts`.
 *
 * 구현 명세 §8. 배포된 함수는 저장소의 `docs/` 를 읽을 수 없어서, 관리자 게시 관문이 볼 수
 * 있는 자리에 승인 해시를 한 벌 복사해 둔다. **판정의 진실은 manifest 이고 봉인은 복사본이다.**
 *
 * 복사본이 원본과 갈라지는 것이 이 구조의 유일한 위험이라, 그 자리에
 * `scripts/verify-legal-publish-gate.ts` 를 세워 둔다.
 *
 * 실행: apps/naminglink 에서 `npx tsx scripts/seal-locale-review.ts`
 */
import { writeFileSync } from "node:fs";
import path from "node:path";

import { loadManifest, scopeComplete, hashValue, type Manifest } from "./locale-manifest";
import {
  fileOnlyReader,
  resolveLegalDocuments,
  resolvedLegalLeaves,
  supabasePublishedReader,
  type PublishedLegalReader,
} from "./legal-source";
import { hashReviewDocument } from "../src/lib/review-hash";

export const SEAL_PATH = path.join(process.cwd(), "src", "lib", "locale-review-seal.ts");

/**
 * **봉인을 만들 수 없다.** 검수가 승인한 문서와 지금 운영 원본이 다르다는 뜻이다.
 *
 * 결함 동결 P0-1 조건 ③. 예전에는 `skipped` 배열만 돌려줬는데, **호출자가 무시할 수 있는
 * 반환값은 관문이 아니다.** 부르는 쪽이 그냥 넘어가면 반쪽 봉인이 그대로 쓰인다.
 * 지금은 던진다 — 넘어가려면 명시적으로 잡아야 한다.
 */
export class SealMismatchError extends Error {
  readonly reasons: readonly string[];
  constructor(reasons: readonly string[]) {
    super(`검수와 운영 원본이 어긋난다 (${reasons.length}건)`);
    this.name = "SealMismatchError";
    this.reasons = reasons;
  }
}

/**
 * **운영 원본을 물어보지 못했다.** 결함 동결 P0-3.
 *
 * `SealMismatchError` 와 **다른 것**이다. 저것은 「봤는데 다르다」(결함), 이것은 「못 봤다」
 * (환경). 둘을 한 오류로 묶으면 다시 「못 돎이 통과로 새는」 자리가 생긴다.
 */
export class SealEnvironmentError extends Error {
  readonly reasons: readonly string[];
  constructor(reasons: readonly string[]) {
    super(`운영 원본을 확인하지 못했다 — 환경변수 (${reasons.length}건)`);
    this.name = "SealEnvironmentError";
    this.reasons = reasons;
  }
}

/**
 * manifest 가 승인한 약관 문서의 해시.
 *
 * **드리프트가 있으면 봉인하지 않는다** — 검수 당시와 내용이 다르면 그 승인은 이미 뜻을
 * 잃었고, 그것을 봉인하면 관문이 **틀린 값을 정답으로** 굳힌다.
 *
 * ## 무엇과 대조하는가 (2026-08-20 정정 · 결함 동결 P0-1)
 *
 * 예전에는 드리프트를 **파일 인벤토리**로 검사하고 봉인 값은 **고른 원본**(DB일 수 있다)에서
 * 만들었다. 둘이 다른 것을 보므로, manifest 가 파일 내용을 승인해 둔 상태에서 DB 문서를
 * 바꿔 넣으면 검사는 파일끼리 통과하고 **승인한 적 없는 DB 내용이 봉인**됐다.
 *
 * 지금은 **먼저 고르고, 고른 것을 승인 해시와 대조한다.** 대조 대상과 봉인 대상이 같은
 * 문서다. 변환은 `resolvedLegalLeaves`(`legal-source.ts`) 하나를 packet 과 함께 쓴다.
 *
 * 그래서 **DB 기준으로 정상 승인한 manifest 도 통과한다** — 파일 기준으로 검사하던 때는
 * 그것이 거짓 드리프트로 거부됐고, 조건 ②(정상 승인분은 막지 않는다)를 시험할 방법조차
 * 없었다.
 *
 * @throws {SealMismatchError} 어긋나면 **부분 봉인을 만들지 않고 던진다**.
 */
export async function buildSeal(
  manifest: Manifest,
  /**
   * 운영 원본을 고르는 reader. **주입한다** — 검사기가 자격증명 없이 배선을 시험할 수 있어야
   * 한다(`legal-source.ts` 주석 참고). 기본값은 파일만 보는 reader 라, 부르는 쪽이 DB 를
   * 쓰려면 명시해야 한다.
   */
  reader: PublishedLegalReader = fileOnlyReader,
): Promise<{ seal: Record<string, string>; skipped: string[]; sources: Record<string, string> }> {
  const seal: Record<string, string> = {};
  const reasons: string[] = [];
  /** 로케일별로 **무엇을 봉인했는지**. 파일인지 DB 게시본인지 기록에 남는다. */
  const sources: Record<string, string> = {};

  for (const record of manifest.scopes) {
    if (record.scope !== "legal" || !scopeComplete(record)) continue;

    // **DEC-01 — DB 게시본이 있으면 그것이 운영 원본이다.** 화면이 고르는 순서와 같다.
    // 먼저 고른다. 대조도 봉인도 **이 결과 하나**를 본다.
    const resolved = await resolveLegalDocuments(record.locale, reader);
    sources[record.locale] = resolved.source;
    if (resolved.unavailable.length) {
      /**
       * **못 물어본 것을 「게시본 없음」으로 세지 않는다** (결함 동결 P0-3).
       *
       * 여기서 넘어가면 자격증명 없는 컴퓨터가 **파일을 봉인해 놓고**, 화면은 DB 게시본을
       * 내보내는 상태가 만들어진다. 봉인은 운영 원본을 봐야 하는데 운영 원본을 못 봤다.
       * 통과도 실패도 아닌 **환경 실패**다.
       */
      throw new SealEnvironmentError(
        resolved.unavailable.map((u) => `${record.locale}:${u.kind} — ${u.reason}`),
      );
    }
    if (resolved.invalidFromDb.length) {
      reasons.push(
        `${record.locale} — DB 게시본이 있는데 형식이 깨졌다(${resolved.invalidFromDb.join(", ")}). 화면은 파일로 떨어지므로 봉인하지 않는다.`,
      );
      continue;
    }

    // 고른 원본을 인벤토리와 **같은 잎 모양**으로 펴서 승인 해시와 대조한다.
    const leaves = resolvedLegalLeaves(record.locale, resolved);
    const byId = new Map(leaves.map((l) => [l.path, l.value]));

    /**
     * **적힌 것이 맞는가 뿐 아니라, 빠짐없이 적혔는가** (2026-08-20 재검증 P0).
     *
     * 예전에는 manifest 에 **적힌 artifact 만** 대조하고 `resolved.documents` **전체**를
     * 봉인했다. 그래서 115개 중 1개만 적어 넣어도 약관 4종이 통째로 봉인됐다 —
     * 아무도 안 읽은 문서가 「승인됨」으로 굳는다.
     *
     * 「검사 0건은 실패」와 같은 자리다. **대조한 개수가 대상 개수와 같아야** 그 검수가
     * 그 문서를 덮었다고 말할 수 있다.
     */
    const covered = new Set(record.artifacts.map((artifact) => artifact.id));
    const missing = leaves.filter((leaf) => !covered.has(leaf.path));
    if (missing.length) {
      reasons.push(
        `${record.locale} — 검수가 덮지 못한 문장이 ${missing.length}건 있다(대상 ${leaves.length} · 기록 ${covered.size}). ` +
          `예: ${missing.slice(0, 3).map((leaf) => leaf.path).join(", ")}${missing.length > 3 ? " …" : ""}. ` +
          "일부만 검수하고 문서 전체를 봉인할 수 없다.",
      );
      continue;
    }

    const drifted = record.artifacts.filter((artifact) => {
      const current = byId.get(artifact.id);
      return current === undefined || hashValue(current) !== artifact.targetHash;
    });
    if (drifted.length) {
      /**
       * **건너뛰면 열린다** (2026-08-20 정정).
       *
       * 처음에는 여기서 `continue` 로 넘어갔다. 그러면 그 로케일의 봉인이 **아예 없는** 상태가
       * 되고, 런타임의 `sealedLegalHash` 는 `null` 을 돌려주며, 관문은 「검수 안 된 로케일」로
       * 보아 **게시를 허용한다.** 검수 뒤 내용이 바뀐 바로 그 문서가 가장 게시되면 안 되는
       * 것인데 정반대로 열렸다 — fail-open 이다.
       */
      const where = resolved.source === "db" ? "DB 게시본" : "파일";
      reasons.push(
        `${record.locale} — 검수가 승인한 내용과 지금 운영 원본(${where})이 다르다. artifact ${drifted.length}건: ${drifted.slice(0, 3).map((d) => d.id).join(", ")}${drifted.length > 3 ? " …" : ""}`,
      );
      continue;
    }

    for (const kind of Object.keys(resolved.documents)) {
      seal[`${record.locale}:${kind}`] = hashReviewDocument(resolved.documents[kind]);
    }
  }

  // **부분 봉인을 돌려주지 않는다.** 어긋난 로케일이 하나라도 있으면 전체가 죽는다.
  if (reasons.length) throw new SealMismatchError(reasons);

  return { seal, skipped: [], sources };
}

export function renderSeal(seal: Record<string, string>): string {
  const entries = Object.keys(seal).sort();
  const body = entries.length
    ? entries.map((key) => `  ${JSON.stringify(key)}: ${JSON.stringify(seal[key])},`).join("\n")
    : "  // 아직 사람이 검수를 마친 약관 로케일이 없다(단계 6 전). 비어 있는 것이 현재 상태다.";
  return `/**
 * **검수 봉인** — 관리자 약관 게시 관문이 런타임에 보는 값.
 *
 * 구현 명세 §8. 판정의 **진실은 \`docs/locale-review/manifest.json\`** 이고 이 파일은 그것의
 * 복사본이다. 왜 복사가 필요한가 — 배포된 함수는 저장소의 \`docs/\` 를 읽을 수 없다. 그렇다고
 * manifest 를 \`src/\` 로 옮기면 검수 기록이 제품 코드에 섞인다.
 *
 * **손으로 고치지 말 것.** \`npx tsx scripts/seal-locale-review.ts\` 가 manifest 에서 만든다.
 * 둘이 어긋나면 \`scripts/verify-legal-publish-gate.ts\` 가 실패시킨다 — 복사본이 원본과 갈라진
 * 채로 관문이 도는 것이 이 구조의 유일한 위험이라, 그 자리에 검사기를 세워 둔다.
 *
 * 키는 \`<locale>:<kind>\` 이고 값은 **승인된 문서의 검수 해시**다. 여기 없는 (로케일, 문서)는
 * 아직 검수되지 않았다는 뜻이므로 게시를 막지 않는다.
 */
export const LEGAL_REVIEW_SEAL: Readonly<Record<string, string>> = {
${body}
};

/** 그 (로케일, 문서)가 검수돼 봉인됐는가. */
export function sealedLegalHash(locale: string, kind: string): string | null {
  return LEGAL_REVIEW_SEAL[\`\${locale}:\${kind}\`] ?? null;
}

/**
 * **게시를 막아야 하는가.** 관리자 라우트와 검사기가 **둘 다 이 함수를 부른다**.
 *
 * 결함 동결 P1-5 (2026-08-20). 예전에는 같은 판정식이 두 벌 적혀 있었다.
 *
 *     src/app/api/admin/site-content/route.ts   Boolean(sealedHash) && sealedHash !== incomingHash
 *     scripts/verify-legal-publish-gate.ts      같은 식을 옮겨 적음
 *
 * 그때는 값이 같았다. 그런데 **검사기가 규칙을 다시 적어 놓아서, 라우트를 고쳐도 검사기는
 * 초록불**이었다 — 갈라지는 것을 알아챌 방법이 없었다. 한 자리에서 export 하면 두 벌이
 * 아닌 것이 구조적으로 참이 된다.
 *
 * 봉인이 없으면 막지 않는다. 그 (로케일, 문서)는 아직 검수 대상이 아니라는 뜻이다.
 */
export function legalPublishBlocked(
  locale: string,
  kind: string,
  contentHash: string,
): boolean {
  return isBlockedBySeal(sealedLegalHash(locale, kind), contentHash);
}

/**
 * 판정의 **알맹이**. 봉인값을 주입받는다.
 *
 * 봉인이 비어 있는 동안에도 판정기가 살아 있는지 시험할 수 있어야 해서 꺼내 두었다. 이게
 * 없으면 대조군이 규칙을 **다시 적게** 되고, 그러면 P1-5 를 고치면서 같은 결함을 대조군에
 * 새로 심는 셈이 된다.
 */
export function isBlockedBySeal(sealed: string | null, contentHash: string): boolean {
  return sealed !== null && sealed !== contentHash;
}
`;
}

async function main() {
  const manifest = loadManifest();
  // 봉인은 **실제 운영 원본**을 봐야 한다 — 런타임 관문이 그 값과 대조하기 때문이다.
  let seal: Record<string, string>;
  let sources: Record<string, string>;
  try {
    ({ seal, sources } = await buildSeal(manifest, await supabasePublishedReader()));
  } catch (error) {
    if (error instanceof SealEnvironmentError) {
      // **통과가 아니다.** 봉인은 운영 원본을 봐야 하는데 그것을 못 봤다.
      console.error("CANNOT_RUN — 운영 원본을 확인하지 못했다. 환경변수가 필요하다.");
      for (const note of error.reasons) console.error(`  · ${note}`);
      console.error("  .env.local 의 Supabase 자격증명을 채우고 다시 돌릴 것.");
      console.error("  **파일로 봉인하지 않았다** — 화면이 DB 게시본을 낼 수 있기 때문이다.");
      process.exit(1);
    }
    if (!(error instanceof SealMismatchError)) throw error;
    // **봉인을 쓰지 않는다.** 반쪽 봉인은 그 로케일의 게시를 열어 버린다(위 주석).
    console.error("봉인을 만들지 않았다 — 검수와 운영 원본이 어긋난 로케일이 있다.");
    for (const note of error.reasons) console.error(`  ✗ ${note}`);
    console.error("  다시 검수해 manifest 를 갱신하거나, 그 로케일의 검수를 폐기할 것.");
    process.exit(1);
  }
  writeFileSync(SEAL_PATH, renderSeal(seal), "utf8");
  console.log(`봉인 ${Object.keys(seal).length}건 · src/lib/locale-review-seal.ts`);
  for (const [locale, source] of Object.entries(sources)) {
    console.log(`  · ${locale} — 원본 ${source === "db" ? "DB 게시본" : "파일"}`);
  }
  if (Object.keys(seal).length === 0) {
    console.log("  · 검수 완료된 약관 로케일이 없다 — 비어 있는 것이 현재의 옳은 상태다.");
  }
  process.exit(0);
}

const entry = process.argv[1] ? process.argv[1].split(/[\\/]/).pop() : "";
if (entry === "seal-locale-review.ts") void main();
