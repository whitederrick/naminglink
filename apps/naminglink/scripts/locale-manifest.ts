/**
 * **검수 manifest** — 「사람이 무엇을 읽고 승인했는가」의 기계 판정 기준.
 *
 * 구현 명세 §6. 파일 머리 표식(`@reviewed`)과 `docs/LOCALE_REVIEW_LOG.md`는 **사람이 읽는
 * 보조 기록**이고, 생성기·게시 관문·광고 개방이 판정에 쓰는 것은 이 파일 하나다.
 *
 * ## 왜 해시가 둘인가
 *
 *     reviewSourceHash   사람이 **대조한 기준 원문**
 *     targetHash         사람이 **승인한 대상 콘텐츠**
 *     generationProvenance  생성기가 실제로 무엇을 넣어 만들었나(판정에 쓰지 않는다)
 *
 * 하나로 합치면 `--from-ko`·`--fill-en` 같은 생성 방식이 검수 기준을 흔든다. 같은 번역인데
 * 만든 방법이 달랐다는 이유로 드리프트가 울리거나, 반대로 기준이 바뀌었는데 조용하다.
 *
 * ## 왜 값이 아니라 해시인가
 *
 * manifest 에 번역문을 통째로 넣으면 파일이 두 벌이 되고, 두 벌은 갈라진다. 해시만 두면
 * **콘텐츠가 유일한 원본**이고 manifest 는 그것을 가리키기만 한다.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import { SCOPES, inventoryVersion, scopeInventory, type Leaf, type Scope } from "./locale-inventory";
// **해시 계산은 한 곳에만 둔다.** 관리자 게시 관문(`src/app/api/admin/site-content`)이 같은
// 함수를 쓰므로, 여기서 따로 구현하면 두 판정이 갈라진다.
import { hashReviewLeaves, hashReviewValue } from "../src/lib/review-hash";
import { serviceList } from "../src/lib/services";
import type { LocaleCode } from "../src/lib/locale-codes";

export const MANIFEST_PATH = path.join(process.cwd(), "..", "..", "docs", "locale-review", "manifest.json");

export type SourceKind = "origin" | "translated";

export type GenerationProvenance = {
  /** `default` · `from-ko` · `fill-en` · `hand` */
  readonly mode: string;
  readonly inputLocale: string | null;
  readonly inputHash: string | null;
};

export type ArtifactRecord = {
  readonly id: string;
  readonly sourceKind: SourceKind;
  readonly reviewSourceHash?: string;
  readonly targetHash: string;
  readonly generationProvenance?: GenerationProvenance;
};

export type ScopeRecord = {
  readonly locale: string;
  readonly scope: Scope;
  readonly inventoryVersion: string;
  readonly artifacts: readonly ArtifactRecord[];
  readonly reviewer: string;
  readonly reviewedAt: string;
  readonly verdicts: { readonly modified: number; readonly approved: number; readonly deferred: number };
};

export type Manifest = { readonly version: 1; readonly scopes: readonly ScopeRecord[] };

export const EMPTY_MANIFEST: Manifest = { version: 1, scopes: [] };

/**
 * 값 해시. **NFC 로 맞춘 뒤 센다** — 같은 글자를 다르게 적은 유니코드 표현(한글 자모 분리,
 * 결합 악센트)이 다른 해시를 내면 드리프트가 헛울린다.
 */
export function hashValue(value: string): string {
  return hashReviewValue(value);
}

/** 잎 여럿을 한 값으로 묶는다. 경로까지 넣어 **순서가 아니라 이름**으로 고정한다. */
export function hashLeaves(leaves: readonly Leaf[]): string {
  return hashReviewLeaves(leaves);
}

/**
 * 원문 로케일. **손으로 적지 않는다** — 서비스 정의의 `defaultLocale`에서 파생한다
 * (`src/lib/services.ts`). 원문은 번역 검수 대상이 아니므로 광고 개방 불변식에서 빠진다.
 */
export function originLocales(): ReadonlySet<string> {
  const found = new Set<string>();
  for (const service of serviceList) {
    if (service.defaultLocale && service.defaultLocale !== "auto") found.add(service.defaultLocale);
  }
  return found;
}

export function loadManifest(): Manifest {
  if (!existsSync(MANIFEST_PATH)) return EMPTY_MANIFEST;
  const parsed = JSON.parse(readFileSync(MANIFEST_PATH, "utf8")) as Manifest;
  return parsed;
}

export function saveManifest(manifest: Manifest): void {
  mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true });
  writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

/**
 * 구조 규칙 검사(명세 §6). **콘텐츠와 대조하지 않는다** — 그것은
 * `verify-locale-manifest.ts`가 인벤토리를 불러 한다.
 */
/**
 * **scope·로케일마다 정해진 `sourceKind`** (2026-08-20).
 *
 * 이것이 없으면 manifest 를 이렇게 위조할 수 있다 — 모든 artifact 를 `sourceKind: "origin"`
 * 으로 적으면 `reviewSourceHash` 가 **없어도 규칙 위반이 아니게** 되고, 「대조한 원문 없이
 * 검수 완료」가 성립한다. 실제로 재현됐다(검증 오류 0건 · completed: ["en"]).
 *
 * 원문일 수 있는 자리는 정해져 있다.
 *
 *     docs   `en` 만 origin 일 수 있다(사람이 쓴 영어 원문이 섞여 있다)
 *     legal  `ko` 만 origin — 나머지는 ko 에서 옮긴 것이다
 *     screen·consent  `ko` 만 origin — 손으로 쓰는 표이고 원문은 한국어다
 */
/**
 * **`en` docs 중 사람이 영어로 **직접 쓴** artifact.** 여기 없으면 `--fill-en` 산출물로 본다.
 *
 * ## 왜 목록이 필요한가 (2026-08-20 재검증)
 *
 * `en` docs 에는 직접 작성물과 `--fill-en` 산출물이 섞여 있는데, **`--fill-en` 이 흔적을
 * 남기지 않는다.** 그래서 어느 쪽인지 사후에 가릴 방법이 없다. 그 틈으로 en/docs 199개를
 * **전부 `origin` 으로 적어도 오류 0건**이 나왔다 — 대조한 원문 없이 검수 완료가 성립했다.
 *
 * 가릴 수 없으면 **선언하게 하고 기본은 닫는다.** 목록에 없는 것은 옮긴 것으로 보고
 * `reviewSourceHash` 를 요구한다. 목록에 넣으려면 **이유를 함께** 적어야 한다 —
 * `EXCLUDED_TABLES` 와 같은 방식이다.
 *
 * ## 비워 둔 것이 새 거짓 거부였다 (2026-08-20 2차 재검증 P0)
 *
 * 처음에는 「직접 쓴 영어 문서가 확인되면 그때 적는다」며 **비워 뒀다.** 그런데 바로 그
 * `en.ts` 머리말이 *「소개·문의처럼 사람이 쓴 글과, 한국어 원문에서 옮겨 온 글이 함께
 * 있다」*고 적고 있었다. **안 찾은 것이다.** 비워 두면 en 검수를 시작하는 순간 사람이 영어로
 * 쓴 78개에 대해 **있지도 않은 ko 원문 해시**를 요구받는다 — 통과하려면 거짓으로 적어야 하고,
 * 그러면 검수 증빙의 출처가 통째로 틀어진다. 막는 쪽으로 틀린 것도 결함이다.
 *
 * ## 어떻게 갈랐나 — 짐작이 아니라 이력으로
 *
 * `--fill-en` 은 **없는 키만** 채우므로 지금 파일만 봐서는 갈리지 않는다. 그래서 `en.ts` 가
 * 처음 생긴 `df1c6b4` 를 보고, 그 **부모 커밋의 화면 소스에 그 영어 문장이 이미 있었는지**를
 * 대조했다.
 *
 *     df1c6b4 시점 en.ts 의 절     about · notice · contact · notices 메타
 *     그 문장이 부모 JSX 에 있는가  있다 (about/contact/notice/page.tsx · lib/notices.ts)
 *     `guide` 는                    df1c6b4 에 없다 — 뒤에 ko 에서 옮겨 왔다(eae9acb…acb2ea7)
 *
 * 이 결과가 인벤토리의 199개를 **78 origin · 121 translated** 로 가른다. 문장 일부는 부모에서
 * 그대로 찾히지 않는데, 다른 것은 `**강조**` 표기와 `{email}` 자리표뿐이고 본문은 같다
 * (예: "choose and understand Korean names" · "two business days").
 *
 * **`guide` 를 넣지 않는 것이 이 목록의 핵심이다.** 안내 13편이 여기 들어오면 옮겨 온 글이
 * 원문으로 둔갑한다.
 */
export const ORIGIN_DOCS_EN: readonly { prefix: string; reason: string }[] = [
  {
    // 잎 29개. 경계를 위해 끝점을 찍는다 — `docs.about` 로만 적으면 `docs.aboutXxx` 도 걸린다.
    prefix: "docs.about.",
    reason:
      "소개는 화면 JSX 에 영어로 쓰여 있던 것을 자료로 옮긴 것이다(df1c6b4). " +
      "부모 커밋 about/page.tsx 에 본문이 그대로 있다(\"choose and understand Korean names\").",
  },
  {
    prefix: "docs.contact.",
    reason:
      "문의도 같은 커밋에서 영어 원문째 옮겨 왔다(df1c6b4). " +
      "부모 커밋 contact/page.tsx 에 본문이 있다(\"two business days\" · \"Korean business hours\").",
  },
  {
    prefix: "docs.notice.",
    reason: "공지 화면 겉틀 4개. 부모 커밋 notice/page.tsx 에 영어로 있었다(df1c6b4).",
  },
  {
    prefix: "notices.",
    reason:
      "공지 목록의 문구와 메타 21개(kindLabels·intro·empty·effective·pager·items). " +
      "부모 커밋 lib/notices.ts 에 영어로 있었다(df1c6b4).",
  },
];

/**
 * **목록 자체를 검사한다.** 이유가 비었거나 좌표가 실재하지 않으면 잡는다.
 *
 * 2차 재검증 지적(P2). 목록이 `{prefix, reason}` 을 **선언만** 하고 아무도 안 봤다.
 * 이유 없는 항목은 검사를 조용히 비우고, 죽은 좌표는 오래 남아 근거처럼 보인다 —
 * `EXCLUDED_TABLES` 에 세워 둔 규칙과 같다.
 */
export function originDocsEnErrors(): string[] {
  const errors: string[] = [];
  const leaves = scopeInventory("docs", "en");
  for (const entry of ORIGIN_DOCS_EN) {
    if (!entry.reason.trim()) {
      errors.push(`ORIGIN_DOCS_EN:${entry.prefix} — 이유가 비어 있다. 이유 없는 예외는 검사를 비운다.`);
    }
    if (!leaves.some((leaf) => leaf.path.startsWith(entry.prefix))) {
      errors.push(
        `ORIGIN_DOCS_EN:${entry.prefix} — en/docs 인벤토리에 그 좌표가 없다. 적용되지 않는 예외는 지운다.`,
      );
    }
  }
  return errors;
}

/**
 * **그 자리에서 `origin` 이 성립하는가.** 판정은 여기 하나뿐이다.
 *
 * 재검증에서 규칙이 **두 벌**이라 정상 기록이 거짓 거부됐다. `sourceLocaleFor` 는
 * `screen`·`consent` 를 전 로케일 `origin` 으로 보는데, 옛 `allowedOriginLocale` 은 `ko` 만
 * 허용해서 **정상 `en/screen` 검수 manifest 를 아예 만들 수 없었다.** 광고 개방 상한까지
 * 갈 길이 막힌 것이다.
 *
 *     screen · consent   전 로케일 origin      ← 생성기 없는 직접 작성물
 *     legal              ko 만
 *     docs               en 만, 그중에서도 ORIGIN_DOCS_EN 에 적힌 것만
 */
export function originAllowed(scope: Scope, locale: string, artifactId: string): boolean {
  if (scope === "screen" || scope === "consent") return true;
  if (scope === "legal") return locale === "ko";
  // docs
  if (locale !== "en") return false;
  return ORIGIN_DOCS_EN.some((entry) => artifactId.startsWith(entry.prefix));
}

export function sourceKindErrors(record: ScopeRecord): string[] {
  const errors: string[] = [];
  const key = `${record.locale}/${record.scope}`;
  for (const artifact of record.artifacts ?? []) {
    if (artifact.sourceKind !== "origin") continue;
    if (originAllowed(record.scope, record.locale, artifact.id)) continue;
    errors.push(
      record.scope === "docs" && record.locale === "en"
        ? `${key}:${artifact.id} — en/docs 는 ORIGIN_DOCS_EN 에 이유와 함께 적힌 것만 origin 이다. ` +
          "적혀 있지 않으면 `--fill-en` 산출물로 보고 translated + reviewSourceHash 를 요구한다."
        : `${key}:${artifact.id} — 이 scope 에서 '${record.locale}' 는 origin 일 수 없다. ` +
          "옮긴 것이므로 translated 여야 하고 reviewSourceHash 가 있어야 한다.",
    );
  }
  return errors;
}

/**
 * **`reviewSourceHash` 가 가리켜야 할 원문의 로케일.** `null` 이면 원문 자리라 해시가 없다.
 *
 * 결함 동결 P0-2 (2026-08-20). 2판까지는 "재계약하라"만 있고 **무엇에서** 계산할지가 없었다.
 * `en` docs 에는 사람이 쓴 원문과 `--fill-en` 산출물이 **섞여 있어** 로케일 단위 규칙으로는
 * 계산할 수 없다. 그래서 artifact 단위로 정한다.
 *
 *     en docs 직접 작성            origin      없음
 *     en docs 의 --fill-en 산출물  translated  대응하는 ko artifact
 *     비영어 docs                  translated  대응하는 en artifact
 *     ko legal                     origin      없음
 *     비한국어 legal               translated  대응하는 ko artifact
 *     screen · consent 전체 로케일 origin      없음   ← 생성기 없는 직접 작성물
 *
 * `screen`·`consent` 는 로케일을 가리지 않고 `origin` 이다. 사람이 다른 원문과 대조했다고
 * **명시한** artifact 만 `translated` 로 적고 실제 원문 해시를 쓴다.
 */
export function sourceLocaleFor(record: ScopeRecord, artifact: ArtifactRecord): string | null {
  if (artifact.sourceKind === "origin") return null;
  if (record.scope === "screen" || record.scope === "consent") return "ko";
  if (record.scope === "docs") return record.locale === "en" ? "ko" : "en";
  return "ko"; // legal
}

/** `origin` 이 성립하는 자리인지의 판정은 `originAllowed` 하나다(위 참고). */

/**
 * **`reviewSourceHash` 를 실제 원문에서 다시 계산해 대조한다.**
 *
 * 결함 동결 P0-2. 예전 검사는 **구조뿐**이었다 — `origin` 엔 없어야 하고 `translated` 엔
 * 있어야 한다. 값이 실제 원문과 맞는지는 아무도 보지 않았고, 그래서
 * `reviewSourceHash: "bogus"` 가 유효한 검수 증빙으로 통과했다.
 *
 * 더 나쁜 것: `regeneration-guard.ts` 가 이 값을 **드리프트 비교의 기준**으로 쓴다.
 * 위조값이면 기준 자체가 쓰레기다.
 *
 * `targetHash` 와 **같은 취급**을 받아야 한다 — 구조 검사가 아니라 재계산 대조.
 */
export function reviewSourceHashErrors(record: ScopeRecord): string[] {
  const errors: string[] = [];
  const key = `${record.locale}/${record.scope}`;
  /** 원문 로케일별 인벤토리. 필요할 때만 읽는다. */
  const sourceCache = new Map<string, Map<string, string>>();
  const sourceLeaves = (locale: string) => {
    let found = sourceCache.get(locale);
    if (!found) {
      found = new Map(
        scopeInventory(record.scope, locale as LocaleCode).map((leaf) => [leaf.path, leaf.value]),
      );
      sourceCache.set(locale, found);
    }
    return found;
  };

  for (const artifact of record.artifacts ?? []) {
    const sourceLocale = sourceLocaleFor(record, artifact);
    if (sourceLocale === null) {
      if (artifact.reviewSourceHash !== undefined) {
        errors.push(`${key}:${artifact.id} — origin 인데 reviewSourceHash 가 있다.`);
      }
      continue;
    }
    if (artifact.reviewSourceHash === undefined) {
      errors.push(`${key}:${artifact.id} — translated 인데 reviewSourceHash 가 없다.`);
      continue;
    }
    // **대응하는 원문이 없으면 실패한다**(조건 ③). 없는 것을 대조했다고 말할 수 없다.
    const sourceValue = sourceLeaves(sourceLocale).get(artifact.id);
    if (sourceValue === undefined) {
      errors.push(
        `${key}:${artifact.id} — 대응하는 원문 artifact 가 '${sourceLocale}' 에 없다. ` +
          "무엇과 대조했는지 확인할 수 없으므로 검수 증빙으로 쓸 수 없다.",
      );
      continue;
    }
    const expected = hashValue(sourceValue);
    if (artifact.reviewSourceHash !== expected) {
      errors.push(
        `${key}:${artifact.id} — reviewSourceHash 가 '${sourceLocale}' 원문과 다르다` +
          `(기록 ${artifact.reviewSourceHash.slice(0, 12)}… · 실제 ${expected.slice(0, 12)}…). ` +
          "검수 뒤 원문이 바뀌었거나, 대조하지 않고 적은 값이다.",
      );
    }
  }
  return errors;
}

/**
 * 기록된 인벤토리 버전이 **지금 값과 같은가**.
 *
 * 다르면 검수 뒤 대상 목록이 바뀐 것이다 — 새 문구가 생겼거나 표가 늘었다. 그 상태의 검수는
 * 「본 적 없는 문장」을 포함한 채 완료로 남는다. 아무 문자열이나 적어 넣는 위조도 여기서 걸린다.
 */
export function inventoryVersionErrors(record: ScopeRecord): string[] {
  const current = inventoryVersion(record.locale as LocaleCode);
  if (record.inventoryVersion === current) return [];
  return [
    `${record.locale}/${record.scope} — inventoryVersion 이 다르다(기록 ${record.inventoryVersion} · 현재 ${current}). ` +
      "검수 뒤 대상 목록이 바뀌었다. packet 을 다시 발급해 검수할 것.",
  ];
}

export function validateManifest(manifest: Manifest): string[] {
  const errors: string[] = [];
  if (manifest.version !== 1) errors.push(`알 수 없는 manifest version: ${String(manifest.version)}`);

  // 목록이 그 자체로 성립하는가. **manifest 와 무관하게 늘 본다.**
  errors.push(...originDocsEnErrors());

  const seen = new Set<string>();
  for (const record of manifest.scopes) {
    const key = `${record.locale}/${record.scope}`;
    if (seen.has(key)) errors.push(`같은 (locale, scope)가 두 번 있다: ${key}`);
    seen.add(key);

    if (!SCOPES.includes(record.scope)) errors.push(`${key} — 모르는 scope`);
    if (!record.reviewer?.trim()) errors.push(`${key} — reviewer 가 비어 있다`);
    if (!record.reviewedAt?.trim()) errors.push(`${key} — reviewedAt 가 비어 있다`);
    if (!record.inventoryVersion?.trim()) errors.push(`${key} — inventoryVersion 이 비어 있다`);
    if (!record.artifacts?.length) errors.push(`${key} — artifact 가 0건이다(0건은 완료가 아니다)`);

    // **같은 artifact id 를 두 번 적을 수 없다**(2차 재검증 P2). 판정 수를 채우는 통로가 된다.
    const seenIds = new Set<string>();
    for (const artifact of record.artifacts ?? []) {
      const where = `${key}:${artifact.id}`;
      if (seenIds.has(artifact.id)) errors.push(`${where} — 같은 artifact id 가 두 번 있다`);
      seenIds.add(artifact.id);
      if (!artifact.targetHash) errors.push(`${where} — targetHash 가 없다`);
      if (artifact.sourceKind !== "origin" && artifact.sourceKind !== "translated") {
        errors.push(`${where} — 모르는 sourceKind: ${String(artifact.sourceKind)}`);
      }
    }

    errors.push(...sourceKindErrors(record));
    // **구조가 아니라 값을 본다**(결함 동결 P0-2). 있고 없음 검사도 여기가 함께 한다 —
    // 두 벌이 되면 언젠가 갈라진다.
    errors.push(...reviewSourceHashErrors(record));
    errors.push(...inventoryVersionErrors(record));
  }
  return errors;
}

/**
 * scope 가 완료됐는가.
 *
 * `deferred > 0` 이면 완료가 아니다(명세 §6·§10). **그리고 판정 수가 artifact 수와 맞아야 한다**
 * (2026-08-20 정정).
 *
 * 처음에는 「보류 0 + artifact 1개 이상」만 봤다. 그러면 `{modified:0, approved:0, deferred:0}`
 * 처럼 **아무도 아무것도 판정하지 않은 기록**이 완료로 세어진다 — 실제로 `en` 이 검수 완료로
 * 인정되는 것을 재현했다. 검수 기록의 뜻은 「읽고 판정했다」이지 「줄이 있다」가 아니다.
 */
export function scopeComplete(record: ScopeRecord): boolean {
  const artifacts = record.artifacts?.length ?? 0;
  if (artifacts === 0) return false;
  const { modified = 0, approved = 0, deferred = 0 } = record.verdicts ?? {};
  if (deferred !== 0) return false;
  // 하나도 빠짐없이 판정됐는가. 남으면 그것이 곧 「아직 안 본 문장」이다.
  return modified + approved === artifacts;
}

/** 필수 scope 넷이 모두 완료되고 `deferred=0`인 로케일. 광고 개방의 **상한**이다. */
export function completedLocales(manifest: Manifest): ReadonlySet<string> {
  const byLocale = new Map<string, Set<Scope>>();
  for (const record of manifest.scopes) {
    if (!scopeComplete(record)) continue;
    if (!byLocale.has(record.locale)) byLocale.set(record.locale, new Set());
    byLocale.get(record.locale)!.add(record.scope);
  }
  const done = new Set<string>();
  for (const [locale, scopes] of byLocale) {
    if (SCOPES.every((scope) => scopes.has(scope))) done.add(locale);
  }
  return done;
}

/** 현재 콘텐츠에서 scope 하나의 해시를 만든다. 생성기 사전 판정과 packet 발급이 함께 쓴다. */
export function currentScopeHash(scope: Scope, locale: LocaleCode): string {
  return hashLeaves(scopeInventory(scope, locale));
}

/** manifest 에 적힌 대상 해시와 지금 콘텐츠가 같은가. 다르면 검수가 가리키는 것이 사라진 것이다. */
export function scopeDrift(record: ScopeRecord): { drifted: boolean; expected: string; actual: string } {
  const expected = hashLeaves(
    record.artifacts.map((artifact) => ({ path: artifact.id, value: artifact.targetHash })),
  );
  const actual = hashLeaves(
    scopeInventory(record.scope, record.locale as LocaleCode).map((leaf) => ({
      path: leaf.path,
      value: hashValue(leaf.value),
    })),
  );
  return { drifted: expected !== actual, expected, actual };
}
