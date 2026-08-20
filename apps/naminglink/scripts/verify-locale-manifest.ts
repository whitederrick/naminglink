/**
 * **검수 manifest 와 광고 개방 상수가 어긋나지 않는가.**
 *
 * 구현 명세 §6·§11·단계 3. 세 자리가 같은 사실을 말해야 한다.
 *
 *     docs/locale-review/manifest.json   사람이 검수를 마친 증거이자 **개방 상한**
 *     AD_OPENED_LOCALES (src/lib/ads.ts) 운영자가 **실제로 연** 부분집합
 *     권위 인벤토리                       검수 대상 artifact 목록
 *
 * ## 왜 완전 일치가 아니라 부분집합인가
 *
 * 완전 일치를 요구하면 **「검수는 끝냈지만 색인을 고친 뒤에 열겠다」는 정상 상태가 불가능**해진다.
 * 부분집합이면 방향이 하나로 고정된다 — manifest 는 **켤 수 있는 것의 상한**이고 상수는
 * **실제로 켠 것**이다. 스크립트는 상한만 올리고, 여는 것은 사람이 상수를 고쳐야 한다.
 *
 * ## 왜 `ko`를 빼고 비교하는가
 *
 * `ko`는 원문이라 **번역 검수 행을 가질 수 없다.** 빼지 않으면 「원문을 검수하라」는 만족
 * 불가능한 요구가 되고, 그 예외를 손으로 적으면 그 목록이 다음 사고 자리가 된다. 그래서
 * `services.ts`의 `defaultLocale`에서 **파생한다**.
 *
 * ## 0건은 통과가 아니다
 *
 * manifest 가 비고 상수도 원문뿐이면 부분집합 관계는 **공허하게 참**이다. 그 참은 아무것도
 * 보증하지 않으므로 「비교 0건」을 통과로 찍지 않고 **그 상태 그대로 이름 붙여** 알린다.
 * 원문 밖 로케일이 하나라도 열린 뒤에는 실제 비교 건수가 1 이상이어야 한다.
 *
 * 실행: apps/naminglink 에서 `npx tsx scripts/verify-locale-manifest.ts`
 */
import { SCOPES, inventoryVersion, scopeInventory } from "./locale-inventory";
import {
  MANIFEST_PATH,
  completedLocales,
  hashValue,
  loadManifest,
  originLocales,
  scopeComplete,
  validateManifest,
} from "./locale-manifest";
import { AD_OPENED_LOCALES } from "../src/lib/ads";
import type { LocaleCode } from "../src/lib/locale-codes";

let failures = 0;
const fail = (message: string) => {
  failures += 1;
  console.log(`  ✗ ${message}`);
};

console.log("\n검수 manifest 검사\n");

const manifest = loadManifest();
const origins = originLocales();
const opened = new Set(AD_OPENED_LOCALES);
const openedBeyondOrigin = [...opened].filter((locale) => !origins.has(locale)).sort();
const completed = completedLocales(manifest);

console.log(`① 자료  manifest ${manifest.scopes.length}개 scope 기록 · 원문 로케일 {${[...origins].join(", ")}}`);
console.log(`        AD_OPENED_LOCALES {${[...opened].sort().join(", ")}} · 완료 로케일 {${[...completed].sort().join(", ") || "없음"}}`);
console.log(`        manifest 위치 ${MANIFEST_PATH.split(/[\\/]/).slice(-3).join("/")}`);

// ── ② 구조 규칙 ───────────────────────────────────────────────────────────
console.log("\n② 구조 규칙");
{
  const errors = validateManifest(manifest);
  if (errors.length) errors.forEach((error) => fail(error));
  else console.log(`  ✓ 규칙 위반 0건 (scope 기록 ${manifest.scopes.length}개)`);
}

// ── ③ 인벤토리 대조 ────────────────────────────────────────────────────────
console.log("\n③ 인벤토리 대조 — manifest 의 artifact 가 실제 대상과 같은가");
if (manifest.scopes.length === 0) {
  console.log("  · 검수 기록이 아직 없다 — 대조할 것이 없다(단계 6 전).");
} else {
  for (const record of manifest.scopes) {
    const inventory = scopeInventory(record.scope, record.locale as LocaleCode);
    const expected = new Set(inventory.map((leaf) => leaf.path));
    const actual = new Set(record.artifacts.map((artifact) => artifact.id));
    const missing = [...expected].filter((id) => !actual.has(id));
    const extra = [...actual].filter((id) => !expected.has(id));
    const where = `${record.locale}/${record.scope}`;
    if (missing.length || extra.length) {
      fail(`${where} — 빠짐 ${missing.length} · 더함 ${extra.length} (인벤토리 ${expected.size}개)`);
      missing.slice(0, 5).forEach((id) => console.log(`      - ${id}`));
      extra.slice(0, 5).forEach((id) => console.log(`      + ${id}`));
    }

    // 값 드리프트 — 검수한 그 문장이 아직 그 자리에 있는가.
    const byId = new Map(inventory.map((leaf) => [leaf.path, leaf.value]));
    const drifted = record.artifacts.filter((artifact) => {
      const current = byId.get(artifact.id);
      return current !== undefined && hashValue(current) !== artifact.targetHash;
    });
    if (drifted.length) {
      fail(`${where} — 검수 뒤 내용이 바뀐 artifact ${drifted.length}건 (검수가 가리키는 문장이 사라졌다)`);
      drifted.slice(0, 5).forEach((artifact) => console.log(`      · ${artifact.id}`));
    }
    if (!missing.length && !extra.length && !drifted.length) {
      console.log(`  ✓ ${where} — artifact ${actual.size}개 일치 · 드리프트 없음`);
    }
  }
}

// ── ④ 광고 개방 불변식 ─────────────────────────────────────────────────────
console.log("\n④ 광고 개방 불변식 — AD_OPENED_LOCALES − {원문} ⊆ 검수 완료");
if (origins.size === 0) {
  fail("원문 로케일을 하나도 못 찾았다 — `services.ts`의 defaultLocale 파생이 깨졌다(0건은 통과가 아니다).");
} else if (openedBeyondOrigin.length === 0) {
  console.log("  · 비교 0건 — 원문 밖에 열린 로케일이 아직 없다. **통과가 아니라 「열지 않았다」다.**");
  console.log("    (`en`을 열면 여기서 실제 비교가 시작된다.)");
} else {
  const notCompleted = openedBeyondOrigin.filter((locale) => !completed.has(locale));
  if (notCompleted.length) {
    for (const locale of notCompleted) {
      fail(`${locale} 는 광고가 열려 있는데 검수 완료 기록이 없다 — manifest 에 필수 scope ${SCOPES.length}개가 deferred=0 으로 있어야 한다.`);
    }
  } else {
    console.log(`  ✓ 비교 ${openedBeyondOrigin.length}건 모두 완료 기록이 있다: ${openedBeyondOrigin.join(", ")}`);
  }
}

// ── ⑤ 보류가 남은 scope ────────────────────────────────────────────────────
console.log("\n⑤ 보류");
{
  const deferred = manifest.scopes.filter((record) => (record.verdicts?.deferred ?? 0) > 0);
  if (deferred.length) {
    for (const record of deferred) {
      console.log(`  · ${record.locale}/${record.scope} — 보류 ${record.verdicts.deferred}건 → 이 scope 는 완료가 아니다`);
    }
    const openedWithDeferred = deferred.filter((record) => opened.has(record.locale) && !origins.has(record.locale));
    for (const record of openedWithDeferred) {
      fail(`${record.locale} 는 보류가 남았는데 광고가 열려 있다`);
    }
  } else {
    console.log("  ✓ 보류가 남은 scope 없음");
  }
}

// ── ⑥ 대조군 ───────────────────────────────────────────────────────────────
console.log("\n⑥ 대조군 — 판정기가 살아 있는가");
{
  /**
   * **결함 동결 P0-2 의 대조군 재료.** 같은 레코드를 두 갈래로 만들어 양방향을 본다 —
   * 하나는 Codex 가 통과시킨 `"bogus"`, 하나는 실제 `ko` 원문에서 계산한 값.
   */
  const jaLegal = scopeInventory("legal", "ja");
  const koLegalByPath = new Map(
    scopeInventory("legal", "ko").map((leaf) => [leaf.path, leaf.value]),
  );
  const jaLegalRecord = (sourceHash: (path: string) => string) => ({
    version: 1 as const,
    scopes: [
      {
        locale: "ja",
        scope: "legal" as const,
        inventoryVersion: inventoryVersion("ja"),
        artifacts: jaLegal.map((leaf) => ({
          id: leaf.path,
          sourceKind: "translated" as const,
          reviewSourceHash: sourceHash(leaf.path),
          targetHash: hashValue(leaf.value),
        })),
        reviewer: "대조군",
        reviewedAt: "2026-08-20",
        verdicts: { modified: 0, approved: jaLegal.length, deferred: 0 },
      },
    ],
  });
  const bogusSourceHashErrors = validateManifest(jaLegalRecord(() => "bogus"));
  const realSourceHashErrors = validateManifest(
    jaLegalRecord((path) => hashValue(koLegalByPath.get(path) ?? "")),
  );

  const control: { label: string; ok: boolean }[] = [
    {
      label: "origin 인데 reviewSourceHash 가 있으면 잡는다",
      ok:
        validateManifest({
          version: 1,
          scopes: [
            {
              locale: "en",
              scope: "docs",
              inventoryVersion: "x",
              artifacts: [{ id: "a", sourceKind: "origin", reviewSourceHash: "h", targetHash: "t" }],
              reviewer: "r",
              reviewedAt: "d",
              verdicts: { modified: 0, approved: 1, deferred: 0 },
            },
          ],
        }).length > 0,
    },
    {
      label: "translated 인데 reviewSourceHash 가 없으면 잡는다",
      ok:
        validateManifest({
          version: 1,
          scopes: [
            {
              locale: "en",
              scope: "docs",
              inventoryVersion: "x",
              artifacts: [{ id: "a", sourceKind: "translated", targetHash: "t" }],
              reviewer: "r",
              reviewedAt: "d",
              verdicts: { modified: 0, approved: 1, deferred: 0 },
            },
          ],
        }).length > 0,
    },
    {
      label: "artifact 0건이면 완료로 세지 않는다",
      ok:
        !scopeComplete({
          locale: "en",
          scope: "docs",
          inventoryVersion: "x",
          artifacts: [],
          reviewer: "r",
          reviewedAt: "d",
          verdicts: { modified: 0, approved: 0, deferred: 0 },
        }),
    },
    {
      label: "보류가 남으면 완료로 세지 않는다",
      ok:
        !scopeComplete({
          locale: "en",
          scope: "docs",
          inventoryVersion: "x",
          artifacts: [{ id: "a", sourceKind: "origin", targetHash: "t" }],
          reviewer: "r",
          reviewedAt: "d",
          verdicts: { modified: 0, approved: 0, deferred: 1 },
        }),
    },
    {
      label: "필수 scope 하나가 빠지면 완료 로케일이 아니다",
      ok: !completedLocales({
        version: 1,
        scopes: [
          {
            locale: "en",
            scope: "docs",
            inventoryVersion: "x",
            artifacts: [{ id: "a", sourceKind: "origin", targetHash: "t" }],
            reviewer: "r",
            reviewedAt: "d",
            verdicts: { modified: 0, approved: 1, deferred: 0 },
          },
        ],
      }).has("en"),
    },
    {
      /**
       * **판정 수가 0이면 완료가 아니다** (2026-08-20 회귀 방지). 처음에는 「보류 0 + artifact
       * 1개 이상」만 봐서, 아무도 아무것도 판정하지 않은 기록이 완료로 세어졌다.
       */
      label: "판정이 하나도 없으면 완료로 세지 않는다",
      ok: !scopeComplete({
        locale: "en",
        scope: "docs",
        inventoryVersion: "x",
        artifacts: [{ id: "a", sourceKind: "origin", targetHash: "t" }],
        reviewer: "r",
        reviewedAt: "d",
        verdicts: { modified: 0, approved: 0, deferred: 0 },
      }),
    },
    {
      label: "판정 수가 artifact 수보다 적으면 완료가 아니다",
      ok: !scopeComplete({
        locale: "en",
        scope: "docs",
        inventoryVersion: "x",
        artifacts: [
          { id: "a", sourceKind: "origin", targetHash: "t" },
          { id: "b", sourceKind: "origin", targetHash: "t2" },
        ],
        reviewer: "r",
        reviewedAt: "d",
        verdicts: { modified: 0, approved: 1, deferred: 0 },
      }),
    },
    {
      /**
       * **Codex 가 재현한 위조**(2026-08-20): `inventoryVersion: "bogus"` 에 모든 artifact 를
       * `sourceKind: "origin"` 으로 적으면 검증 오류 0건 · completed: ["en"] 이 나왔다.
       * 대조한 원문 없이 광고 개방 상한에 드는 길이었다. 두 규칙으로 닫았다.
       */
      label: "en/docs 를 전부 origin 으로 적어도 잡는다",
      ok:
        validateManifest({
          version: 1,
          scopes: [
            {
              locale: "vi",
              scope: "docs",
              inventoryVersion: inventoryVersion("vi"),
              artifacts: [{ id: "a", sourceKind: "origin", targetHash: "t" }],
              reviewer: "r",
              reviewedAt: "d",
              verdicts: { modified: 0, approved: 1, deferred: 0 },
            },
          ],
        }).some((error) => error.includes("origin 일 수 있는 로케일")),
    },
    {
      label: "지어낸 inventoryVersion 을 잡는다",
      ok:
        validateManifest({
          version: 1,
          scopes: [
            {
              locale: "en",
              scope: "docs",
              inventoryVersion: "bogus",
              artifacts: [{ id: "a", sourceKind: "origin", targetHash: "t" }],
              reviewer: "r",
              reviewedAt: "d",
              verdicts: { modified: 0, approved: 1, deferred: 0 },
            },
          ],
        }).some((error) => error.includes("inventoryVersion 이 다르다")),
    },
    {
      /**
       * **Codex 가 통과시킨 값**(2026-08-20 · 결함 동결 P0-2). `reviewSourceHash: "bogus"` 가
       * 유효한 검수 증빙으로 통과했다 — 검사가 **구조뿐**이라 값이 실제 원문과 맞는지는
       * 아무도 보지 않았다. 게다가 `regeneration-guard` 가 그 값을 드리프트 비교의 **기준**으로
       * 쓴다. 위조값이면 기준 자체가 쓰레기다.
       *
       * 가짜 이름이 아니라 **실제로 통과했던 값 그대로** 넣는다.
       */
      label: 'reviewSourceHash: "bogus" 를 잡는다 (Codex 가 통과시킨 값)',
      ok: bogusSourceHashErrors.some((error) => error.includes("원문과 다르다")),
    },
    {
      // 반대 방향 — 실제 ko 원문에서 계산한 값이면 막지 않는다.
      label: "실제 원문에서 계산한 reviewSourceHash 는 통과한다(대조군)",
      ok: realSourceHashErrors.length === 0,
    },
    {
      // 조건 ③ — 없는 것을 대조했다고 말할 수 없다.
      label: "대응하는 원문 artifact 가 없으면 잡는다",
      ok:
        validateManifest({
          version: 1,
          scopes: [
            {
              locale: "ja",
              scope: "legal",
              inventoryVersion: inventoryVersion("ja"),
              artifacts: [
                {
                  id: "legal.존재하지-않는.항목",
                  sourceKind: "translated",
                  reviewSourceHash: hashValue("x"),
                  targetHash: hashValue("y"),
                },
              ],
              reviewer: "r",
              reviewedAt: "d",
              verdicts: { modified: 0, approved: 1, deferred: 0 },
            },
          ],
        }).some((error) => error.includes("대응하는 원문")),
    },
    {
      // 반대 방향 — 옳게 적은 기록은 통과해야 한다. 늘 실패하는 검사는 검사가 아니다.
      label: "en/docs 의 origin 은 정당하다(대조군)",
      ok:
        validateManifest({
          version: 1,
          scopes: [
            {
              locale: "en",
              scope: "docs",
              inventoryVersion: inventoryVersion("en"),
              artifacts: [{ id: "a", sourceKind: "origin", targetHash: "t" }],
              reviewer: "r",
              reviewedAt: "d",
              verdicts: { modified: 0, approved: 1, deferred: 0 },
            },
          ],
        }).length === 0,
    },
    {
      label: "legal 은 ko 만 origin 이다",
      ok:
        validateManifest({
          version: 1,
          scopes: [
            {
              locale: "en",
              scope: "legal",
              inventoryVersion: inventoryVersion("en"),
              artifacts: [{ id: "a", sourceKind: "origin", targetHash: "t" }],
              reviewer: "r",
              reviewedAt: "d",
              verdicts: { modified: 0, approved: 1, deferred: 0 },
            },
          ],
        }).some((error) => error.includes("origin 일 수 있는 로케일")),
    },
    { label: "원문 로케일이 값에서 파생된다", ok: origins.has("ko") },
  ];
  for (const item of control) {
    if (item.ok) console.log(`  ✓ ${item.label}`);
    else fail(`대조군 실패 — ${item.label}`);
  }
}

console.log(failures === 0 ? "\n통과\n" : `\n빨간불 ${failures}건\n`);
process.exit(failures === 0 ? 0 : 1);
