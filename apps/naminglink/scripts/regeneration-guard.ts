/**
 * **재생성 보호 관문** — 검수된 번역을 생성기가 조용히 덮지 못하게 한다.
 *
 * 구현 명세 §7·단계 3. 두 생성기가 **같은 판정**을 쓴다.
 *
 *     scripts/translate-doc-content.ts     (tsx)
 *     scripts/translate-legal-content.mjs  (node — 아래 CLI 를 하위 프로세스로 부른다)
 *
 * ## 왜 쓰기 전에 한 번에 판정하는가
 *
 * 로케일을 하나씩 검사하며 쓰면 **중간에 실패했을 때 앞의 파일은 이미 덮여 있다.** 그 상태는
 * 되돌리는 것이 git 이지 검사기가 아니다. 그래서 대상 전체의 보호 상태를 **한 파일도 쓰기
 * 전에** 판정한다 — 이 저장소 규칙이 「관문은 비싼 단계 앞에」다.
 *
 * ## 왜 CLI 가 붙어 있는가
 *
 * `translate-legal-content.mjs` 는 순수 node 라 TypeScript 인벤토리를 직접 못 부른다. 관문을
 * `.mjs` 로 한 벌 더 쓰면 **두 판정이 갈라진다** — 갈라진 판정은 언젠가 한쪽만 고쳐진다.
 * 그래서 구현은 하나로 두고, `.mjs` 쪽은 이 파일을 `tsx` 하위 프로세스로 부른다.
 *
 * 실행:
 *   npx tsx scripts/regeneration-guard.ts --scope docs --targets vi,th
 *   npx tsx scripts/regeneration-guard.ts --scope legal --all
 *   npx tsx scripts/regeneration-guard.ts --scope docs --all --invalidate-review=ja
 */
import { completedLocales, hashLeaves, hashValue, loadManifest, scopeComplete, type Manifest } from "./locale-manifest";
import { scopeInventory, type Scope } from "./locale-inventory";
import { localeCodes, type LocaleCode } from "../src/lib/locale-codes";

export type GuardRequest = {
  readonly scope: Scope;
  /** 명시적으로 지정한 로케일. `--all` 이면 빈 배열이다. */
  readonly targets: readonly string[];
  readonly all: boolean;
  /** `--invalidate-review=<locale>`. 하나만 받는다. */
  readonly invalidate: string | null;
  /** `--from-ko` 처럼 기준 원문을 바꾸는 실행인가. */
  readonly fromKo: boolean;
  /** `--fill-en` — 대상 로케일 없이 `en` 의 빈 키만 채우는 실행. */
  readonly fillEn?: boolean;
};

export type GuardResult =
  | { readonly ok: true; readonly allowed: string[]; readonly excluded: string[]; readonly notes: string[] }
  | { readonly ok: false; readonly errors: string[] };

/**
 * 검수가 끝나 보호되는 로케일. scope 단위로 본다 — `legal` 만 다시 만드는 일이 흔하다.
 *
 * `manifest` 를 받을 수 있게 둔 것은 **검사기가 대조군을 만들 수 있게** 하기 위해서다. 판정기가
 * 파일만 읽으면 「막는다」를 증명할 방법이 없고, 증명하지 못하는 관문은 언젠가 조용히 열린다.
 */
export function protectedLocales(scope: Scope, manifestOverride?: Manifest): Set<string> {
  const manifest = manifestOverride ?? loadManifest();
  const found = new Set<string>();
  for (const record of manifest.scopes) {
    if (record.scope === scope && scopeComplete(record)) found.add(record.locale);
  }
  return found;
}

/**
 * 기준 원문이 검수 당시와 같은가. **다르면 그 검수는 이미 뜻을 잃었다** — 보호 로케일을
 * 제외하고 나머지만 갱신해도, 다음 사람이 「검수됨」이라 적힌 옛 기준을 믿게 된다.
 */
function sourceDrift(
  scope: Scope,
  locale: string,
  manifestOverride?: Manifest,
): { drifted: boolean; recorded: string; current: string } | null {
  const manifest = manifestOverride ?? loadManifest();
  const record = manifest.scopes.find((item) => item.scope === scope && item.locale === locale);
  if (!record) return null;
  /**
   * **기준 원문이 있는 artifact 만 비교한다** (2026-08-20 정정).
   *
   * 처음에는 `recorded` 를 `reviewSourceHash` 가 있는 것만으로 만들고 `current` 는 원문 로케일의
   * **잎 전부**로 만들었다. `sourceKind: "origin"` 인 artifact(사람이 쓴 영어 원문 등)는
   * `reviewSourceHash` 가 없는 것이 정상인데, 그러면 두 집합의 경로 수가 달라 **언제나 드리프트**가
   * 된다. `en` 검수를 마치는 순간 `--all` 이 영구 빨간불이 되는 자리였다.
   */
  const compared = record.artifacts.filter((artifact) => artifact.reviewSourceHash);
  if (compared.length === 0) return null;
  const comparedPaths = new Set(compared.map((artifact) => artifact.id));
  const recorded = hashLeaves(
    compared.map((artifact) => ({ path: artifact.id, value: artifact.reviewSourceHash! })),
  );
  // 기준 원문은 scope 마다 다르다 — docs 는 `en`, legal 은 `ko`(명세 §4.2).
  const sourceLocale: LocaleCode = scope === "legal" ? "ko" : "en";
  // **값이 아니라 값의 해시를 넣는다.** manifest 가 담는 것이 해시이므로 양쪽 단위를 맞춰야
  // 「같다」가 성립한다 — 한쪽만 원문이면 언제나 달라 관문이 늘 빨간불이 된다.
  const current = hashLeaves(
    scopeInventory(scope, sourceLocale)
      .filter((leaf) => comparedPaths.has(leaf.path))
      .map((leaf) => ({ path: leaf.path, value: hashValue(leaf.value) })),
  );
  return { drifted: recorded !== current, recorded, current };
}

export function evaluate(request: GuardRequest, manifestOverride?: Manifest): GuardResult {
  const errors: string[] = [];
  const notes: string[] = [];

  // ① 인자 없는 실행은 사용법 오류다. **가장 파괴적인 동작을 기본값 자리에 두지 않는다.**
  //
  // **`--fill-en` 은 예외다** (2026-08-20 정정). 그것은 「대상 로케일 없이 `en` 만 채우는」
  // 정당한 실행인데, 처음에 이 규칙이 그것까지 막아 **`--fill-en` 이 언제나 실패했다.**
  // 관문이 정상 경로를 막으면 사람은 관문을 끄는 법을 먼저 배운다.
  if (!request.all && request.targets.length === 0 && !request.invalidate && !request.fillEn) {
    errors.push(
      "대상이 없다. 로케일을 적거나 `--all` 을 명시할 것 — 인자 없는 실행을 전체 갱신으로 읽지 않는다.",
    );
    return { ok: false, errors };
  }

  // ② `--invalidate-review` 는 로케일 하나를 요구하고 `--all` 과 함께 쓸 수 없다.
  if (request.invalidate !== null) {
    if (request.all) {
      errors.push("`--invalidate-review` 는 `--all` 과 함께 쓸 수 없다 — 한 번에 전부 날리는 길을 두지 않는다.");
    }
    if (!request.invalidate.trim()) {
      errors.push("`--invalidate-review=<locale>` 에 로케일을 적을 것.");
    } else if (!localeCodes.includes(request.invalidate as LocaleCode)) {
      errors.push(`모르는 로케일: ${request.invalidate}`);
    }
  }

  const unknown = request.targets.filter((locale) => !localeCodes.includes(locale as LocaleCode));
  if (unknown.length) errors.push(`모르는 로케일: ${unknown.join(", ")}`);

  const guarded = protectedLocales(request.scope, manifestOverride);
  const invalidated = request.invalidate ?? "";

  // ③ 검수 로케일을 **직접 지정**하면 아무것도 쓰지 않고 실패한다.
  const directlyProtected = request.targets.filter((locale) => guarded.has(locale) && locale !== invalidated);
  for (const locale of directlyProtected) {
    errors.push(
      `${locale} 는 ${request.scope} 검수가 끝난 로케일이다. 덮으려면 \`--invalidate-review=${locale}\` 로 검수를 명시적으로 폐기할 것.`,
    );
  }

  // ④ 검수 완료 뒤 보호 로케일에 `--from-ko` 를 쓰면 기준 원문이 바뀐다(명세 §7-9).
  if (request.fromKo) {
    const affected = request.all
      ? [...guarded].filter((locale) => locale !== invalidated)
      : directlyProtected;
    for (const locale of affected) {
      errors.push(`${locale} 는 검수된 로케일이라 \`--from-ko\` 로 다시 만들 수 없다 — 검수 기준이 \`en\` 이다.`);
    }
  }

  // ⑤ 제외된 보호 로케일의 **기준 원문이 바뀌었으면** 아무것도 쓰지 않고 실패한다.
  for (const locale of guarded) {
    if (locale === invalidated) continue;
    const drift = sourceDrift(request.scope, locale, manifestOverride);
    if (drift?.drifted) {
      errors.push(
        `${locale} 의 기준 원문이 검수 당시와 다르다(${drift.recorded} → ${drift.current}). ` +
          `그 검수는 이미 뜻을 잃었으므로 재생성 전에 다시 검수하거나 \`--invalidate-review=${locale}\` 로 폐기할 것.`,
      );
    }
  }

  if (errors.length) return { ok: false, errors };

  // ⑥ `--all` 은 보호 로케일을 제외하되 **제외 목록을 반드시 알린다.** 조용한 누락을 만들지 않는다.
  const requested = request.all ? [...localeCodes] : [...request.targets];
  const excluded = requested.filter((locale) => guarded.has(locale) && locale !== invalidated);
  const allowed = requested.filter((locale) => !excluded.includes(locale));

  if (invalidated) {
    notes.push(`검수 폐기: ${invalidated} — manifest 의 ${request.scope} 기록을 같은 변경에서 지울 것.`);
  }
  if (excluded.length) {
    notes.push(`검수돼 제외한 로케일 ${excluded.length}개: ${excluded.join(", ")}`);
  }
  if (allowed.length === 0 && !request.fillEn) {
    return { ok: false, errors: ["갱신할 대상이 하나도 남지 않았다 — 0건 실행을 성공으로 세지 않는다."] };
  }

  const completed = completedLocales(manifestOverride ?? loadManifest());
  if (completed.size > 0) {
    notes.push(`검수 완료 로케일(전 scope): ${[...completed].sort().join(", ")}`);
  }

  return { ok: true, allowed, excluded, notes };
}

export function parseArgs(argv: readonly string[]): GuardRequest {
  const scopeIndex = argv.indexOf("--scope");
  const scope = (scopeIndex >= 0 ? argv[scopeIndex + 1] : "docs") as Scope;
  const targetsIndex = argv.indexOf("--targets");
  const targets =
    targetsIndex >= 0
      ? (argv[targetsIndex + 1] ?? "").split(",").map((value) => value.trim()).filter(Boolean)
      : argv.filter((value) => !value.startsWith("--") && value !== scope && value !== argv[targetsIndex + 1]);
  const invalidateArg = argv.find((value) => value.startsWith("--invalidate-review"));
  const invalidate = invalidateArg ? (invalidateArg.split("=")[1] ?? "") : null;
  return {
    scope,
    targets,
    all: argv.includes("--all"),
    invalidate,
    fromKo: argv.includes("--from-ko"),
    fillEn: argv.includes("--fill-en"),
  };
}

/** CLI. `.mjs` 생성기가 하위 프로세스로 부른다. 마지막 줄에 `ALLOWED=a,b,c` 를 찍는다. */
function main() {
  const request = parseArgs(process.argv.slice(2));
  const result = evaluate(request);
  if (!result.ok) {
    console.error(`재생성 관문 — ${request.scope} · 아무것도 쓰지 않고 멈춘다`);
    for (const error of result.errors) console.error(`  ✗ ${error}`);
    process.exit(1);
  }
  for (const note of result.notes) console.log(`  · ${note}`);
  console.log(`ALLOWED=${result.allowed.join(",")}`);
  process.exit(0);
}

/**
 * 직접 실행일 때만 CLI 로 돈다. tsx 가 cjs 로 옮기므로 최상위 await 는 쓰지 않는다.
 *
 * **끝만 맞춰 보면 안 된다** (2026-08-20). 처음에 `/regeneration-guard\.ts$/` 로 두었더니
 * `verify-regeneration-guard.ts` 가 그 규칙에 걸려, **검사기를 돌릴 때마다 CLI 가 먼저 떠서
 * 사용법 오류로 죽었다.** 파일 이름 전체로 판정한다.
 */
const entry = process.argv[1] ? process.argv[1].split(/[\\/]/).pop() : "";
if (entry === "regeneration-guard.ts" || entry === "regeneration-guard.mjs") main();
