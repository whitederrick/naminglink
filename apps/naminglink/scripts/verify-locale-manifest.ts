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
// SCOPES 는 광고 조건에서 빠졌다(2026-08-24, 전략 §3.1). manifest 의 scope 완료 판정은
// `completedLocales` 안에 남아 있고 **법률 게시가 계속 쓴다** — 여기서 직접 셀 일이 없어졌다.
import { inventoryVersion, scopeInventory } from "./locale-inventory";
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
import { TRADE_COPY_TOTAL, tradeCopyHash } from "./trade-copy";
import {
  loadTradeCopyReview,
  tradeCopyReviewPath,
  tradeCopyReviewProblems,
} from "./trade-copy-review";
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

// ── ④ 광고 개방 조건 (LOCALE_AD_STRATEGY_2026-08-21 §3.1) ─────────────────
//
// 옛 조건은 「manifest 의 필수 scope 4개 완료」였다. 그것은 잎 705개를 사람이 전부
// 판정하라는 뜻인데, 전략 문서 §2.2 가 **en·ja 외 20개 언어는 사람 검수가 구조적으로
// 불가능하다**고 판단하고 조건을 셋으로 바꿨다.
//
//   ① 전수 자동검증 + 구조 점검 통과
//   ② 핵심 거래·고지 문구를 사람이 확인 (금액·환불·사업자 정보·결제 고시 66자리)
//   ③ 확인된 중대 결함이 미해결로 남아 있지 않을 것
//
// **①은 여기서 선언으로 받지 않는다.** 이 검사기 자체가 전수 스윕 안에서 돌고, 스윕이
// 빨간불이면 배포 관문이 서므로 ①은 구조로 강제된다. 「자동검증 통과함」이라고 적은
// 문자열을 증거로 삼으면 그 문자열은 감싼 쪽이 통제하는 값이 된다 — 세 판 연속 뚫렸던
// 「감싸짐」과 같은 병이다(CLAUDE.md §13).
//
// ②·③은 기록이 필요하다. `docs/locale-review/trade-copy-review.json` 이 그것이고,
// **그 기록은 읽은 문구의 해시를 함께 든다** — 문구를 고치면 기록이 저절로 낡아
// 여기서 빨간불이 난다. 「한 번 읽었다」가 영원한 통행증이 되지 않게 하는 자리다.
//
// manifest 는 **법률 게시**가 계속 쓴다(§3.2). 광고만 이 조건을 본다.
console.log("\n④ 광고 개방 조건 — 거래 문구 검수 기록 (전략 §3.1 ②·③)");
{
  const review = loadTradeCopyReview();
  console.log(`  · 기록 위치 ${tradeCopyReviewPath()} · 검수된 로케일 {${review.map((r) => r.locale).sort().join(", ") || "없음"}}`);
  if (origins.size === 0) {
    fail("원문 로케일을 하나도 못 찾았다 — `services.ts`의 defaultLocale 파생이 깨졌다(0건은 통과가 아니다).");
  } else if (openedBeyondOrigin.length === 0) {
    console.log("  · 비교 0건 — 원문 밖에 열린 로케일이 아직 없다. **통과가 아니라 「열지 않았다」다.**");
  } else {
    const before = failures;
    for (const locale of openedBeyondOrigin) {
      const record = review.find((r) => r.locale === locale);
      if (!record) {
        fail(`${locale} 는 광고가 열려 있는데 거래 문구 검수 기록이 없다 — ${tradeCopyReviewPath()} 를 볼 것.`);
        continue;
      }
      const now = tradeCopyHash(locale as Parameters<typeof tradeCopyHash>[0]);
      for (const problem of tradeCopyReviewProblems(record, TRADE_COPY_TOTAL, now)) {
        fail(`${locale} — ${problem}`);
      }
    }
    if (failures === before) {
      console.log(`  ✓ 비교 ${openedBeyondOrigin.length}건 모두 조건 ②·③ 을 채운다: ${openedBeyondOrigin.join(", ")}`);
    }
  }
}

// 참고 — manifest 완료 로케일은 **법률 게시**가 쓴다. 광고 조건에서는 뺐다(§3.1).
console.log(`  · (참고) manifest 필수 scope 완료 로케일: {${[...completed].sort().join(", ") || "없음"}} — 법률 게시가 쓴다`);

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
       * 아래 다섯은 **광고 개방 조건 ②·③의 판정기**를 시험한다. 이 관문은 「사람이 읽었다」는
       * 기록을 믿는 자리다 — 판정기가 죽어 있으면 기록만 적으면 광고가 열린다.
       * 「감싸짐」이 세 판 연속 뚫린 자리가 정확히 이런 모양이었다(CLAUDE.md §13).
       */
      label: "거래 문구 검수: 자리 수가 모자라면 잡는다",
      ok:
        tradeCopyReviewProblems(
          { locale: "en", reviewedOn: "d", reviewer: "r", record: "x", positions: 10, verdicts: { good: 10, doubt: 0, fix: 0 }, unresolvedCritical: 0, sourceHash: "h" },
          TRADE_COPY_TOTAL,
          "h",
        ).length > 0,
    },
    {
      label: "거래 문구 검수: 판정이 0건이면 잡는다",
      ok:
        tradeCopyReviewProblems(
          { locale: "en", reviewedOn: "d", reviewer: "r", record: "x", positions: 0, verdicts: { good: 0, doubt: 0, fix: 0 }, unresolvedCritical: 0, sourceHash: "h" },
          0,
          "h",
        ).length > 0,
    },
    {
      label: "거래 문구 검수: 미해결 중대 결함이 남으면 잡는다",
      ok:
        tradeCopyReviewProblems(
          { locale: "en", reviewedOn: "d", reviewer: "r", record: "x", positions: 2, verdicts: { good: 2, doubt: 0, fix: 0 }, unresolvedCritical: 1, sourceHash: "h" },
          2,
          "h",
        ).length > 0,
    },
    {
      label: "거래 문구 검수: 읽은 뒤 문구가 바뀌면 잡는다(해시)",
      ok:
        tradeCopyReviewProblems(
          { locale: "en", reviewedOn: "d", reviewer: "r", record: "x", positions: 2, verdicts: { good: 2, doubt: 0, fix: 0 }, unresolvedCritical: 0, sourceHash: "old" },
          2,
          "new",
        ).length > 0,
    },
    {
      label: "거래 문구 검수: 온전한 기록은 통과시킨다(대조군)",
      ok:
        tradeCopyReviewProblems(
          { locale: "en", reviewedOn: "d", reviewer: "r", record: "x", positions: 2, verdicts: { good: 1, doubt: 1, fix: 0 }, unresolvedCritical: 0, sourceHash: "h" },
          2,
          "h",
        ).length === 0,
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
       * **이름이 본문보다 넓게 말하고 있었다** (2026-08-20 재검증). 이름은 「en/docs」인데
       * 본문은 `vi` 를 쓴다. 그래서 en/docs 199개 전부 origin 위장이 오류 0건으로 통과하는
       * 동안에도 이 대조군은 초록불이었다. 이름을 본문에 맞추고, en 갈래는 아래에 따로 둔다.
       */
      label: "docs 에서 en 이 아닌 로케일의 origin 을 잡는다",
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
        }).some((error) => error.includes("origin 일 수 없다")),
    },
    {
      // **본론** — en/docs 를 전부 origin 으로 적으면 잡는가. 위 이름이 약속하던 것.
      label: "en/docs 를 전부 origin 으로 적으면 잡는다 (ORIGIN_DOCS_EN 밖)",
      ok:
        validateManifest({
          version: 1,
          scopes: [
            {
              locale: "en",
              scope: "docs",
              inventoryVersion: inventoryVersion("en"),
              artifacts: scopeInventory("docs", "en").map((leaf) => ({
                id: leaf.path,
                sourceKind: "origin" as const,
                targetHash: hashValue(leaf.value),
              })),
              reviewer: "r",
              reviewedAt: "d",
              verdicts: {
                modified: 0,
                approved: scopeInventory("docs", "en").length,
                deferred: 0,
              },
            },
          ],
        }).some((error) => error.includes("ORIGIN_DOCS_EN")),
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
      /**
       * **반대 방향.** 늘 실패하는 검사는 검사가 아니다.
       *
       * 옛 대조군은 「en/docs 의 origin 은 정당하다」였는데, 그 규칙이 en/docs 199개 위장을
       * 허용한 통로였다. 이제 정당한 origin 자리는 `screen`·`consent`(직접 작성물)다.
       */
      label: "en/screen 의 origin 은 정당하다(막지 않는다)",
      ok:
        validateManifest({
          version: 1,
          scopes: [
            {
              locale: "en",
              scope: "screen",
              inventoryVersion: inventoryVersion("en"),
              artifacts: scopeInventory("screen", "en")
                .slice(0, 3)
                .map((leaf) => ({
                  id: leaf.path,
                  sourceKind: "origin" as const,
                  targetHash: hashValue(leaf.value),
                })),
              reviewer: "r",
              reviewedAt: "d",
              verdicts: { modified: 0, approved: 3, deferred: 0 },
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
        }).some((error) => error.includes("origin 일 수 없다")),
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
