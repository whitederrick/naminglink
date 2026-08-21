/**
 * **재검증에서 뚫린 우회를 그대로 시험한다.**
 *
 * 2026-08-20 · Codex 재검증(66f15c4 불합격)에서 나온 P0 다섯. **공격을 고치기 전에 썼다.**
 *
 * ## 왜 이 파일이 따로 있나
 *
 * 앞선 대조군은 전부 **내 구현을 보고** 만들었다. 그러면 같은 사각지대가 양쪽에 들어가서,
 * 검사기는 초록불인데 우회는 남는다. 실제로 다섯 다 그렇게 통과했다.
 *
 * 여기 있는 공격은 **결함 진술에서** 만들었다. 구현을 보지 않고, 코덱스가 적은 재현 절차를
 * 그대로 옮겼다.
 *
 * ## 판정은 출력 본문으로 한다
 *
 * `exit 1` 은 「잡았다」가 아니다. 「끝났는데 0이 아니다」일 뿐이고, 죽어도 1이고 파일이
 * 없어도 1이다. 재검증에서 Claude App 이 그것으로 D~J 를 잘못 읽었다. 그래서 여기서는
 * **어떤 오류 문구가 나왔는지**를 본다.
 *
 * 실행: apps/naminglink 에서
 *   npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-review-attacks.ts
 */
import path from "node:path";

import { buildSeal } from "./seal-locale-review";
import { fileOnlyReader } from "./legal-source";
import {
  docsEnAdjudicationErrors,
  hashValue,
  originAllowed,
  originDocsEnErrors,
  ORIGIN_DOCS_EN,
  validateManifest,
  type Manifest,
  type ScopeRecord,
} from "./locale-manifest";
import { IGNORE_FLAG } from "./load-env-local";
import { inventoryVersion, scopeInventory } from "./locale-inventory";
import { scanText } from "./locale-table-scan";

let failures = 0;
const check = (label: string, ok: boolean, detail = "") => {
  if (ok) console.log(`  ✓ ${label}`);
  else {
    failures += 1;
    console.log(`  ✗ ${label}${detail ? `\n      ${detail}` : ""}`);
  }
};

/** 오류 목록에 그 문구가 있는가. **개수가 아니라 내용으로 판정한다.** */
const says = (errors: readonly string[], needle: string) =>
  errors.some((error) => error.includes(needle));

function record(over: Partial<ScopeRecord> & Pick<ScopeRecord, "locale" | "scope">): ScopeRecord {
  return {
    inventoryVersion: inventoryVersion(over.locale as never),
    artifacts: [],
    reviewer: "공격",
    reviewedAt: "2026-08-20",
    verdicts: { modified: 0, approved: 0, deferred: 0 },
    ...over,
  } as ScopeRecord;
}

async function main() {
  console.log("\n재검증 우회 공격 — 결함 진술에서 만든 다섯\n");

  // ── ① artifact 1개 승인으로 약관 4종 전체가 봉인되는가 ───────────────────
  console.log("① artifact 1개 승인 → 약관 4종 봉인 (Codex P0)");
  {
    const koLegal = scopeInventory("legal", "ko");
    const one = koLegal[0]!;
    const partial: Manifest = {
      version: 1,
      scopes: [
        record({
          locale: "ko",
          scope: "legal",
          artifacts: [{ id: one.path, sourceKind: "origin", targetHash: hashValue(one.value) }],
          verdicts: { modified: 0, approved: 1, deferred: 0 },
        }),
      ],
    };
    let sealedKeys: string[] = [];
    let threw = "";
    try {
      sealedKeys = Object.keys((await buildSeal(partial, fileOnlyReader)).seal);
    } catch (error) {
      threw = (error as Error).name;
    }
    check(
      `artifact 1개(전체 ${koLegal.length}개)로는 봉인하지 않는다`,
      sealedKeys.length === 0,
      `봉인됨: ${JSON.stringify(sealedKeys)} · 던진 것: ${threw || "없음"}`,
    );
    check("불완전한 검수라고 알린다", threw !== "", `던진 것: ${threw || "없음"}`);
  }

  // ── ② en/docs 199개를 전부 origin 으로 위장할 수 있는가 ──────────────────
  console.log("\n② en/docs 전부 origin 위장 (Codex P0)");
  {
    const enDocs = scopeInventory("docs", "en");
    const forged: Manifest = {
      version: 1,
      scopes: [
        record({
          locale: "en",
          scope: "docs",
          artifacts: enDocs.map((leaf) => ({
            id: leaf.path,
            sourceKind: "origin" as const,
            targetHash: hashValue(leaf.value),
          })),
          verdicts: { modified: 0, approved: enDocs.length, deferred: 0 },
        }),
      ],
    };
    const errors = validateManifest(forged);
    check(
      `en/docs ${enDocs.length}개를 전부 origin 으로 적으면 잡는다`,
      errors.length > 0,
      "어느 것이 직접 작성이고 어느 것이 --fill-en 산출물인지 가릴 권위 자료가 없다",
    );
  }

  // ── ③ 정상 en/screen origin 이 거짓 거부되는가 ──────────────────────────
  console.log("\n③ 정상 en/screen origin 거짓 거부 (Codex P0 · 반대 방향)");
  {
    const enScreen = scopeInventory("screen", "en");
    const legit: Manifest = {
      version: 1,
      scopes: [
        record({
          locale: "en",
          scope: "screen",
          artifacts: enScreen.map((leaf) => ({
            id: leaf.path,
            sourceKind: "origin" as const,
            targetHash: hashValue(leaf.value),
          })),
          verdicts: { modified: 0, approved: enScreen.length, deferred: 0 },
        }),
      ],
    };
    const errors = validateManifest(legit);
    check(
      "en/screen 의 origin 은 정당하다(막지 않는다)",
      errors.length === 0,
      `거부됨: ${errors[0] ?? ""}`,
    );
    check(
      "「origin 일 수 있는 로케일은 ko 뿐」으로 막지 않는다",
      !says(errors, "origin 일 수 있는 로케일"),
      "sourceLocaleFor 는 screen 을 전 로케일 origin 으로 보는데 sourceKindErrors 는 ko 만 본다 — 규칙 두 벌",
    );
  }

  // ── ④ CANNOT_RUN 이 exit 0 으로 통과하는가 ──────────────────────────────
  console.log("\n④ CANNOT_RUN 이 통과로 새는가 (Codex P0)");
  {
    /**
     * **소스를 읽어 판정하지 않는다.** 처음에 그렇게 썼다가 거짓 초록불이 났다 —
     * `CANNOT_RUN` 근처에 `failures +=` 가 있기만 하면 통과로 셌다. 실제로 돌려서
     * **종료 코드와 출력**을 함께 본다.
     */
    const { spawnSync } = await import("node:child_process");
    const env = { ...process.env };
    // 자격증명을 뺀다 — 「못 물어보는」 상태를 만든다.
    for (const key of Object.keys(env)) {
      if (/SUPABASE/i.test(key)) delete env[key];
    }
    /**
     * **환경변수만 지워서는 그 상태가 안 만들어진다** (2026-08-21).
     *
     * `verify-legal-source.ts` 에 `.env.local` 배선을 넣자 이 공격이 그 자리에서 뚫렸다 —
     * 부모 환경을 아무리 비워도 검사기가 파일을 스스로 읽어 **자격증명이 되살아났다.**
     * 배선을 넣으면서 못 돎 경로를 시험할 방법을 없앤 것이다. 파일도 함께 끈다.
     */
    env[IGNORE_FLAG] = "1";
    /**
     * **tsx 실행 파일을 경로로 박지 않는다**(2차 재검증 P1).
     *
     * `process.cwd()/node_modules/tsx/...` 로 박아 뒀더니 **격리 복사본에서 제품 검사를
     * 하기도 전에 `MODULE_NOT_FOUND` 로 죽었다.** 워크트리에는 앱 로컬 `node_modules` 가
     * 없고 상위에서 해석되기 때문이다. 공격이 크래시를 결함으로 셀 뻔했다.
     *
     * 모듈 해석으로 찾는다 — 어디서 돌든 지금 프로세스가 쓰는 그 tsx 다.
     */
    const { createRequire } = await import("node:module");
    const require_ = createRequire(path.join(process.cwd(), "package.json"));
    const tsxCli = path.join(path.dirname(require_.resolve("tsx/package.json")), "dist", "cli.mjs");
    const run = spawnSync(
      process.execPath,
      [tsxCli, "--tsconfig", "scripts/tsconfig.sweep.json", "scripts/verify-legal-source.ts"],
      { env, encoding: "utf8", cwd: process.cwd() },
    );
    // **크래시를 결함으로 세지 않는다.** 제품 검사가 실제로 돌았는지 먼저 본다.
    check(
      "공격이 제품 검사를 실제로 돌렸다(크래시가 아니다)",
      !`${run.stderr ?? ""}`.includes("MODULE_NOT_FOUND"),
      `tsx 를 찾지 못했다: ${tsxCli}`,
    );
    const out = `${run.stdout ?? ""}${run.stderr ?? ""}`;
    const saidCannotRun = out.includes("CANNOT_RUN");
    check(
      "자격증명 없이 돌리면 CANNOT_RUN 을 알린다",
      saidCannotRun,
      `종료 ${run.status} · 출력 ${out.slice(-120).replace(/\s+/g, " ")}`,
    );
    check(
      "그리고 **통과로 끝내지 않는다**(exit ≠ 0)",
      saidCannotRun && run.status !== 0,
      `CANNOT_RUN 을 찍고도 exit ${run.status} 로 끝났다 — 「못 돎은 통과가 아니다」 위반`,
    );
  }

  // ── ⑤ 정적 계산 키 표를 스캐너가 보는가 ─────────────────────────────────
  console.log("\n⑤ 정적 계산 키 [\"ko\"] 표 (Codex P0)");
  {
    const body = `const computedLocaleCopy = {\n  ["ko"]: { label: "검증용" },\n  ["en"]: { label: "probe" },\n};`;
    const hits = scanText(body, "src/components/__Attack.tsx");
    check(
      '["ko"] 처럼 계산 키로 적은 표도 잡는다',
      hits.length > 0,
      "동적 계산이 아니라 **정적으로 확정된** 리터럴이다. literalKeysOf 가 ComputedPropertyName 을 안 읽는다",
    );
    // 반대 방향 — 진짜 동적인 것은 계약 밖이므로 안 잡혀야 한다(사각지대 선언과 일치).
    const dynamic = `const t = Object.fromEntries(LOCALES.map((l) => [l, copy(l)]));`;
    check(
      "진짜 동적 표는 계약 밖이라 안 잡는다(사각지대 선언과 일치)",
      scanText(dynamic, "src/components/__Attack.tsx").length === 0,
    );
  }

  // ── ⑥ 2차 재검증에서 나온 것 ────────────────────────────────────────────
  console.log("\n⑥ 2차 재검증 (Codex · Claude App)");
  {
    /**
     * **P0 — `ORIGIN_DOCS_EN` 을 비워 둔 것이 새 거짓 거부다.**
     *
     * 「가릴 자료가 없다」고 적었는데 `doc-content/en.ts:7` 이 적고 있었다 — 소개·문의처럼
     * 사람이 쓴 글과 옮겨 온 글이 함께 있다. 안 찾은 것이다. 비워 두면 en 검수를 시작하는
     * 순간 **있지도 않은 ko 원문 해시를 요구**받는다.
     */
    const enDocsLeaves = scopeInventory("docs", "en");
    const one = (prefix: string) => enDocsLeaves.find((leaf) => leaf.path.startsWith(prefix))!;
    const asOrigin = (leaf: { path: string; value: string }): Manifest => ({
      version: 1,
      scopes: [
        record({
          locale: "en",
          scope: "docs",
          artifacts: [{ id: leaf.path, sourceKind: "origin" as const, targetHash: hashValue(leaf.value) }],
          verdicts: { modified: 0, approved: 1, deferred: 0 },
        }),
      ],
    });

    const aboutErrors = validateManifest(asOrigin(one("docs.about.")));
    check(
      "사람이 영어로 쓴 docs.about 의 origin 은 정당하다(막지 않는다)",
      !says(aboutErrors, "ORIGIN_DOCS_EN"),
      `거부됨: ${aboutErrors.find((e) => e.includes("ORIGIN_DOCS_EN")) ?? ""}`,
    );
    check(
      "옮겨 온 docs.guide 를 origin 으로 적으면 여전히 잡는다",
      says(validateManifest(asOrigin(one("docs.guide"))), "ORIGIN_DOCS_EN"),
    );

    /** **P2 — 같은 artifact id 를 두 번 적어도 통과한다.** 판정 수를 채우는 통로가 된다. */
    const leaf = scopeInventory("screen", "en")[0]!;
    const duplicated: Manifest = {
      version: 1,
      scopes: [
        record({
          locale: "en",
          scope: "screen",
          artifacts: [
            { id: leaf.path, sourceKind: "origin" as const, targetHash: hashValue(leaf.value) },
            { id: leaf.path, sourceKind: "origin" as const, targetHash: hashValue(leaf.value) },
          ],
          verdicts: { modified: 0, approved: 2, deferred: 0 },
        }),
      ],
    };
    check(
      "같은 artifact id 를 두 번 적으면 잡는다",
      says(validateManifest(duplicated), "두 번"),
      "판정 수를 채우려고 같은 id 를 복제할 수 있다",
    );

    /** **P2 — 목록 항목 자체를 아무도 검사하지 않는다.** 이유가 비어도, 좌표가 없어도. */
    const listErrors = originDocsEnErrors();
    check(
      "ORIGIN_DOCS_EN 의 이유가 비어 있지 않고 좌표가 실재한다",
      listErrors.length === 0,
      listErrors[0] ?? "",
    );
  }

  // ── ⑦ 접두사 아래로 자라는 문 ────────────────────────────────────────────
  console.log("\n⑦ 아직 없는 잎이 origin 으로 통과하는가 (3차 재검증 · 두 검토자 공통)");
  {
    /**
     * **접두사 판정은 옆이 아니라 아래로 새는 문이었다.**
     *
     * 끝점(`docs.about.`)을 찍어 `docs.aboutXxx` 는 막았지만, 그 **아래** 새로 생기는 잎은
     * 그대로 통과했다. 두 검토자가 독립적으로 같은 자리를 냈고, 코덱스는 실물까지 재현했다 —
     * `docs.about.__future_unreviewed__` 가 검수 없이 origin 이 된다.
     *
     * 실물 위험은 `notices.` 다. 공지는 운영 중에 늘어나고, 한국어로 써서 옮긴 공지가
     * `notices.items.*` 로 들어오면 **옮긴 글이 원문으로 둔갑**한다.
     */
    for (const probe of [
      "docs.about.__future_unreviewed__",
      "docs.contact.__future_unreviewed__",
      "docs.notice.__future_unreviewed__",
      "notices.items.2099-01-01-not-yet-written.title",
    ]) {
      check(
        `아직 없는 잎 ${probe} 은 origin 이 아니다`,
        !originAllowed("docs", "en", probe),
        "접두사로 판정하면 앞으로 생길 공지·문단이 검수 없이 원문이 된다",
      );
    }

    /**
     * **닫는 쪽으로만 고치면 그것도 결함이다**(2026-08-20 P0 과 같은 병). 실제로 갈라 둔
     * 78개는 그대로 origin 이어야 한다 — 아니면 있지도 않은 ko 원문 해시를 요구받는다.
     */
    const listed = ORIGIN_DOCS_EN.flatMap((entry) => entry.originIds);
    check(
      `갈라 둔 잎 ${listed.length}개는 그대로 origin 이다`,
      listed.length === 78 && listed.every((id) => originAllowed("docs", "en", id)),
      `origin 이 아닌 것: ${listed.find((id) => !originAllowed("docs", "en", id)) ?? "(없음)"}`,
    );

    /**
     * **빠져나갈 길이 있어야 관문이다** (4차 재검증 P1).
     *
     * 처음엔 origin 만 적을 수 있었다. 그래서 새 잎이 생기면 「옮긴 것이면 그대로 두라」는
     * 안내를 따라도 **다음 실행에서 또 빨간불**이었다 — 사람이 할 수 있는 일이 거짓으로
     * origin 이라고 적는 것뿐이었고, 그러면 검수 증빙의 출처가 통째로 틀어진다.
     *
     * 실제 표로는 이 갈래를 시험할 수 없다(지금은 안 가른 잎이 없다). **가짜 표를 넣어** 본다.
     */
    const NEW_LEAF = "notices.items.2099-01-01-new-notice.title";
    const inventory = [...scopeInventory("docs", "en").map((leaf) => leaf.path), NEW_LEAF];
    const group = (originIds: string[], translatedIds: string[]) => [
      { prefix: "notices.items.2099-", reason: "시험용 묶음", originIds, translatedIds },
    ];

    check(
      "안 가른 새 잎은 빨간불이다",
      says(docsEnAdjudicationErrors(group([], []), inventory), "아직 안 갈랐다"),
      "새로 생긴 잎이 조용히 흘러가면 안 된다",
    );
    check(
      "**translated 로 적으면 빨간불이 멎는다**",
      docsEnAdjudicationErrors(group([], [NEW_LEAF]), inventory).length === 0,
      `아직 남는다: ${docsEnAdjudicationErrors(group([], [NEW_LEAF]), inventory)[0] ?? ""}`,
    );
    check(
      "그렇게 적어도 origin 으로는 통하지 않는다",
      !originAllowed("docs", "en", NEW_LEAF),
      "translated 로 적었다고 origin 이 되면 갈래를 적는 의미가 없다",
    );
    check(
      "origin 으로 적어도 빨간불이 멎는다(닫는 쪽으로만 고치지 않았다)",
      docsEnAdjudicationErrors(group([NEW_LEAF], []), inventory).length === 0,
      "영어로 새로 쓴 글까지 막으면 그것이 거짓 거부다",
    );
    check(
      "양쪽에 적으면 잡는다",
      says(docsEnAdjudicationErrors(group([NEW_LEAF], [NEW_LEAF]), inventory), "양쪽에 적혀"),
      "판정이 둘이면 어느 쪽이 참인지 아무도 모른다",
    );

    // 옆으로 새는 문도 여전히 닫혀 있는지 함께 본다(끝점이 지워지면 되살아난다).
    check(
      "docs.aboutXxx 처럼 옆으로 새는 이름도 막힌다",
      !originAllowed("docs", "en", "docs.aboutUs.title"),
      "접두사 끝점이 지워지면 되살아나는 자리다",
    );
  }

  console.log(
    failures === 0
      ? "\n공격 일곱 묶음이 전부 막혔다(1차 다섯 + 2차 재검증분 + 3차 재검증분)\n"
      : `\n뚫린 우회 ${failures}건 — 아직 병합할 수 없다\n`,
  );
  process.exit(failures === 0 ? 0 : 1);
}

void main();
