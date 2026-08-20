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
import { scopeInventory } from "./locale-inventory";
import {
  fileOnlyReader,
  resolveLegalDocuments,
  supabasePublishedReader,
  type PublishedLegalReader,
} from "./legal-source";
import { hashReviewDocument } from "../src/lib/review-hash";
import type { LocaleCode } from "../src/lib/locale-codes";

export const SEAL_PATH = path.join(process.cwd(), "src", "lib", "locale-review-seal.ts");

/**
 * manifest 가 승인한 약관 문서의 해시. **드리프트가 있으면 봉인하지 않는다** — 검수 당시와
 * 내용이 다르면 그 승인은 이미 뜻을 잃었고, 그것을 봉인하면 관문이 **틀린 값을 정답으로**
 * 굳힌다.
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
  const skipped: string[] = [];
  /** 로케일별로 **무엇을 봉인했는지**. 파일인지 DB 게시본인지 기록에 남는다. */
  const sources: Record<string, string> = {};

  for (const record of manifest.scopes) {
    if (record.scope !== "legal" || !scopeComplete(record)) continue;

    const inventory = scopeInventory("legal", record.locale as LocaleCode);
    const byId = new Map(inventory.map((leaf) => [leaf.path, leaf.value]));
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
       *
       * 지금은 봉인을 만들지 않고 **호출자가 실패하게** 한다. `skipped` 가 비어 있지 않으면
       * `main()` 도 `verify-legal-publish-gate.ts` 도 빨간불이다.
       */
      skipped.push(`${record.locale} — 검수 뒤 내용이 바뀐 artifact ${drifted.length}건. 다시 검수할 것.`);
      continue;
    }

    // **DEC-01 — DB 게시본이 있으면 그것이 운영 원본이다.** 화면이 고르는 순서와 같다.
    const resolved = await resolveLegalDocuments(record.locale, reader);
    sources[record.locale] = resolved.source;
    if (resolved.invalidFromDb.length) {
      skipped.push(
        `${record.locale} — DB 게시본이 있는데 형식이 깨졌다(${resolved.invalidFromDb.join(", ")}). 화면은 파일로 떨어지므로 봉인하지 않는다.`,
      );
      continue;
    }
    for (const kind of Object.keys(resolved.documents)) {
      seal[`${record.locale}:${kind}`] = hashReviewDocument(resolved.documents[kind]);
    }
  }
  return { seal, skipped, sources };
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
`;
}

async function main() {
  const manifest = loadManifest();
  // 봉인은 **실제 운영 원본**을 봐야 한다 — 런타임 관문이 그 값과 대조하기 때문이다.
  const { seal, skipped, sources } = await buildSeal(manifest, await supabasePublishedReader());
  if (skipped.length) {
    // **봉인을 쓰지 않는다.** 반쪽 봉인은 그 로케일의 게시를 열어 버린다(위 주석).
    console.error("봉인을 만들지 않았다 — 검수와 내용이 어긋난 로케일이 있다.");
    for (const note of skipped) console.error(`  ✗ ${note}`);
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
