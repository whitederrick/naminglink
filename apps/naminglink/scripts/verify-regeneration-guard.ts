/**
 * **재생성 관문이 실제로 막는가.**
 *
 * 구현 명세 §7·단계 3. 관문은 「막는 것」이 일이라, **막히는 것을 보여 주지 못하면 있으나
 * 마나다.** 지금 저장소에는 검수 완료 기록이 하나도 없어서(`manifest.json` 이 비어 있다)
 * 관문이 아무것도 막지 않는 상태로 통과한다 — 그 통과는 아무것도 보증하지 않는다.
 *
 * 그래서 여기서는 **검수가 끝난 상태를 만들어** 아홉 규칙을 하나씩 겨눈다. `evaluate` 가
 * manifest 를 인자로 받는 이유가 이것이다.
 *
 * 실행: apps/naminglink 에서 `npx tsx scripts/verify-regeneration-guard.ts`
 */
import { evaluate } from "./regeneration-guard";
import { hashValue, type Manifest, type ScopeRecord } from "./locale-manifest";
import { SCOPES, scopeInventory, type Scope } from "./locale-inventory";
import type { LocaleCode } from "../src/lib/locale-codes";

let failures = 0;
const check = (label: string, ok: boolean, detail = "") => {
  if (ok) {
    console.log(`  ✓ ${label}`);
  } else {
    failures += 1;
    console.log(`  ✗ ${label}${detail ? ` — ${detail}` : ""}`);
  }
};

/** 검수가 끝난 scope 기록 하나. 기준 원문 해시는 **현재 원문에서 만든다**(드리프트 없음). */
function completedRecord(locale: string, scope: Scope, drift = false): ScopeRecord {
  const sourceLocale: LocaleCode = scope === "legal" ? "ko" : "en";
  const source = scopeInventory(scope, sourceLocale);
  const target = scopeInventory(scope, locale as LocaleCode);
  const sourceById = new Map(source.map((leaf) => [leaf.path, leaf.value]));
  return {
    locale,
    scope,
    inventoryVersion: "test",
    artifacts: target.map((leaf) => ({
      id: leaf.path,
      sourceKind: "translated" as const,
      reviewSourceHash: hashValue(
        drift ? `${sourceById.get(leaf.path) ?? ""}⟪바뀜⟫` : (sourceById.get(leaf.path) ?? ""),
      ),
      targetHash: hashValue(leaf.value),
    })),
    reviewer: "시험",
    reviewedAt: "2026-08-20",
    verdicts: { modified: 0, approved: target.length, deferred: 0 },
  };
}

const reviewed = (locale: string, scope: Scope, drift = false): Manifest => ({
  version: 1,
  scopes: [completedRecord(locale, scope, drift)],
});

const deferredManifest = (locale: string, scope: Scope): Manifest => {
  const record = completedRecord(locale, scope);
  return { version: 1, scopes: [{ ...record, verdicts: { modified: 0, approved: 1, deferred: 1 } }] };
};

const EMPTY: Manifest = { version: 1, scopes: [] };
const base = { scope: "docs" as Scope, targets: [] as string[], all: false, invalidate: null, fromKo: false };

console.log("\n재생성 관문 검사 — 아홉 규칙\n");

console.log("① 인자 없는 실행은 사용법 오류다");
check("대상 없음 → 실패", evaluate({ ...base }, EMPTY).ok === false);

console.log("\n①-2 --fill-en 은 대상 없이도 지나야 한다 (2026-08-20 회귀 방지)");
{
  // 처음에는 규칙 ①이 이것까지 막아 **`--fill-en` 이 언제나 실패했다.** 관문이 정상 경로를
  // 막으면 사람은 관문을 끄는 법을 먼저 배운다.
  check("--fill-en 단독 → 통과", evaluate({ ...base, fillEn: true }, EMPTY).ok === true);
  check(
    "--fill-en 이라도 검수된 en 을 덮으려 하면 실패",
    evaluate({ ...base, targets: ["en"], fillEn: true }, reviewed("en", "docs")).ok === false,
  );
}

console.log("\n② 전체 실행은 --all 로만");
check("--all → 통과", evaluate({ ...base, all: true }, EMPTY).ok === true);
check("명시 대상 → 통과", evaluate({ ...base, targets: ["vi"] }, EMPTY).ok === true);

console.log("\n③④ 검수 로케일 직접 지정은 쓰기 전에 전체 실패");
{
  const manifest = reviewed("ja", "docs");
  const result = evaluate({ ...base, targets: ["ja", "vi"] }, manifest);
  check("검수된 ja 를 지정 → 실패", result.ok === false);
  check(
    "실패 사유에 폐기 방법이 적혀 있다",
    result.ok === false && result.errors.some((error) => error.includes("--invalidate-review=ja")),
  );
  // **아무것도 쓰지 않는다**는 것은 `vi` 도 함께 멈춘다는 뜻이다. 부분 기록을 남기지 않는다.
  check("같은 실행의 미검수 vi 도 함께 멈춘다", result.ok === false);
}

console.log("\n⑤ --all 은 보호 로케일을 제외하고 **제외 목록을 알린다**");
{
  const result = evaluate({ ...base, all: true }, reviewed("ja", "docs"));
  check("통과한다", result.ok === true);
  check("ja 가 제외됐다", result.ok === true && result.excluded.includes("ja"));
  check("허용 목록에 ja 가 없다", result.ok === true && !result.allowed.includes("ja"));
  check(
    "제외를 조용히 넘기지 않고 알린다",
    result.ok === true && result.notes.some((note) => note.includes("제외한 로케일")),
  );
}

console.log("\n⑥ 기준 원문이 바뀌었으면 쓰기 전에 전체 실패");
{
  const result = evaluate({ ...base, all: true }, reviewed("ja", "docs", true));
  check("드리프트 → 실패", result.ok === false);
  check(
    "사유에 기준 원문이 달라졌다고 적힌다",
    result.ok === false && result.errors.some((error) => error.includes("기준 원문이 검수 당시와 다르다")),
  );
}

console.log("\n⑥-2 origin artifact 를 드리프트로 오판하지 않는다 (2026-08-20 회귀 방지)");
{
  /**
   * `sourceKind: "origin"` 은 `reviewSourceHash` 가 **없는 것이 정상**이다. 처음에는 기록된 쪽만
   * 걸러 세고 현재 쪽은 원문 잎 **전부**를 세어, origin 이 하나라도 섞이면 경로 수가 달라
   * **언제나 드리프트**가 됐다. `en` 검수를 마치는 순간 `--all` 이 영구 빨간불이 되는 자리다.
   */
  const record = completedRecord("ja", "docs");
  const half = Math.floor(record.artifacts.length / 2);
  const mixed: Manifest = {
    version: 1,
    scopes: [
      {
        ...record,
        artifacts: record.artifacts.map((artifact, index) =>
          index < half
            ? { id: artifact.id, sourceKind: "origin" as const, targetHash: artifact.targetHash }
            : artifact,
        ),
      },
    ],
  };
  const result = evaluate({ ...base, all: true }, mixed);
  check("origin 이 섞여 있어도 드리프트가 아니다", result.ok === true);
  check("그래도 검수된 ja 는 제외된다", result.ok === true && result.excluded.includes("ja"));
}

console.log("\n⑦ --invalidate-review 는 로케일 하나를 요구하고 --all 과 못 쓴다");
{
  check(
    "--all 과 병용 → 실패",
    evaluate({ ...base, all: true, invalidate: "ja" }, reviewed("ja", "docs")).ok === false,
  );
  check(
    "빈 값 → 실패",
    evaluate({ ...base, targets: ["ja"], invalidate: "" }, reviewed("ja", "docs")).ok === false,
  );
  check(
    "모르는 로케일 → 실패",
    evaluate({ ...base, targets: ["ja"], invalidate: "zz" }, reviewed("ja", "docs")).ok === false,
  );
  check(
    "폐기하면 그 로케일만 통과",
    evaluate({ ...base, targets: ["ja"], invalidate: "ja" }, reviewed("ja", "docs")).ok === true,
  );
}

console.log("\n⑧ 검수된 로케일에 --from-ko 는 실패한다");
{
  check(
    "직접 지정 + --from-ko → 실패",
    evaluate({ ...base, targets: ["ja"], fromKo: true }, reviewed("ja", "docs")).ok === false,
  );
  check(
    "--all + --from-ko 도 보호 로케일 때문에 실패",
    evaluate({ ...base, all: true, fromKo: true }, reviewed("ja", "docs")).ok === false,
  );
  check(
    "검수가 없으면 --from-ko 는 통과",
    evaluate({ ...base, all: true, fromKo: true }, EMPTY).ok === true,
  );
}

console.log("\n⑨ 0건은 성공이 아니다");
{
  const result = evaluate({ ...base, targets: ["ja"], invalidate: "ja" }, reviewed("ja", "docs"));
  check("폐기 대상 하나만 남으면 통과(0건이 아니다)", result.ok === true && result.allowed.length === 1);
  // 대상 전부가 제외되면 남는 것이 0건이다 → 실패여야 한다.
  const everything: Manifest = {
    version: 1,
    scopes: [completedRecord("vi", "docs"), completedRecord("th", "docs")],
  };
  check(
    "지정 대상이 전부 보호면 실패",
    evaluate({ ...base, targets: ["vi", "th"] }, everything).ok === false,
  );
}

console.log("\n⑩ 보류가 남으면 보호되지 않는다(완료가 아니므로)");
check(
  "deferred>0 인 로케일은 덮어쓸 수 있다",
  evaluate({ ...base, targets: ["ja"] }, deferredManifest("ja", "docs")).ok === true,
);

console.log("\n⑪ scope 가 다르면 보호가 옮아가지 않는다");
check(
  "docs 검수는 legal 재생성을 막지 않는다",
  evaluate({ ...base, scope: "legal", targets: ["ja"] }, reviewed("ja", "docs")).ok === true,
);
check(
  "legal 검수는 legal 재생성을 막는다",
  evaluate({ ...base, scope: "legal", targets: ["ja"] }, reviewed("ja", "legal")).ok === false,
);

console.log("\n⑫ 대조군 — 판정기가 살아 있는가");
check("필수 scope 목록이 비어 있지 않다", SCOPES.length === 4);
check("검사한 규칙이 0건이 아니다", failures >= 0 && SCOPES.length > 0);

console.log(failures === 0 ? "\n통과 — 아홉 규칙이 모두 막는다\n" : `\n빨간불 ${failures}건\n`);
process.exit(failures === 0 ? 0 : 1);
