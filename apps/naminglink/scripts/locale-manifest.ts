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
function allowedOriginLocale(scope: Scope): string {
  return scope === "docs" ? "en" : "ko";
}

export function sourceKindErrors(record: ScopeRecord): string[] {
  const errors: string[] = [];
  const allowed = allowedOriginLocale(record.scope);
  const key = `${record.locale}/${record.scope}`;
  if (record.locale === allowed) return errors;
  for (const artifact of record.artifacts ?? []) {
    if (artifact.sourceKind === "origin") {
      errors.push(
        `${key}:${artifact.id} — 이 scope 에서 origin 일 수 있는 로케일은 '${allowed}' 뿐이다. ` +
          `'${record.locale}' 는 옮긴 것이므로 translated 여야 하고 reviewSourceHash 가 있어야 한다.`,
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

    for (const artifact of record.artifacts ?? []) {
      const where = `${key}:${artifact.id}`;
      if (!artifact.targetHash) errors.push(`${where} — targetHash 가 없다`);
      if (artifact.sourceKind === "origin" && artifact.reviewSourceHash) {
        errors.push(`${where} — origin 인데 reviewSourceHash 가 있다(대조한 원문이 없어야 정상이다)`);
      }
      if (artifact.sourceKind === "translated" && !artifact.reviewSourceHash) {
        errors.push(`${where} — translated 인데 reviewSourceHash 가 없다`);
      }
      if (artifact.sourceKind !== "origin" && artifact.sourceKind !== "translated") {
        errors.push(`${where} — 모르는 sourceKind: ${String(artifact.sourceKind)}`);
      }
    }

    errors.push(...sourceKindErrors(record));
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
