/**
 * **권위 인벤토리가 실제 화면 전부를 담고 있는가.**
 *
 * 구현 명세 §5·단계 1. `scripts/locale-inventory.ts`의 `SCREEN_SOURCES`는 **손으로 적은
 * 목록**이고, 손으로 적은 목록은 빠뜨린다. 그래서 이 검사기가 `src` 전체의 로케일 표 선언을
 * 훑어 등록부와 대조한다 — 목록이 아니라 **대조**가 보증한다.
 *
 * ## 왜 만들었나 (2026-08-20)
 *
 * 협의에서 화면 문자열 수가 198 → 222 → 225 → 242로 네 번 바뀌었다. 매번 세는 방법이 달랐고,
 * 마지막 242조차 **표 아홉 개를 빠뜨린 값**이었다. 실제로 세어 보니 317이다.
 *
 *     빠져 있던 표   SiteFooter · ServiceShell(둘) · ResultCard · CandidateUnlockPanel ·
 *                    GlobalNamePremiumPanel · AccountDeletePanel · AdBanner · AILoadingSteps ·
 *                    stamp-order 화면
 *
 * 검수 대상에서 빠진 문구는 **아무도 안 읽은 채 검수 완료로 표시된다.** 그것이 이 협의가
 * 위험 1로 세워 둔 바로 그 모양이다.
 *
 * ## 무엇을 세는가
 *
 *   ① 등록 대조   `src`의 로케일 표 선언이 전부 등록됐거나 이유와 함께 제외됐는가
 *   ② 잎 대조     `en`·`ja`·`vi`의 잎 경로가 같은가
 *   ③ 원문 차이   `ko`와의 차이가 `koAbsent`로 선언된 표에서만 나오는가
 *   ④ 0건 금지    scope마다 대상이 1개 이상인가
 *   ⑤ 대조군      판정기가 살아 있는가
 *
 * 실행: apps/naminglink 에서 `npx tsx scripts/verify-locale-inventory.ts`
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

import {
  EXCLUDED_TABLES,
  SCOPES,
  SCREEN_SOURCES,
  inventoryVersion,
  scopeInventory,
  type Scope,
} from "./locale-inventory";
import { scanText } from "./locale-table-scan";
import type { LocaleCode } from "../src/lib/locale-codes";

const SRC = path.join(process.cwd(), "src");
/** 검수 대조에 쓰는 로케일. `ko`는 원문이라 따로 본다. */
const COMPARE: LocaleCode[] = ["en", "ja", "vi"];

let failures = 0;
const fail = (message: string) => {
  failures += 1;
  console.log(`  ✗ ${message}`);
};

/** 번역 파이프라인이 만드는 로케일 파일은 표가 아니라 값이다(scope 가 따로 있다). */
const SKIP_DIR = /^src\/lib\/(doc-content|legal-content|checkout-consent)\//;

function declaredTables(): { decl: string; line: number }[] {
  const found = new Map<string, number>();
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir)) {
      const full = path.join(dir, entry);
      if (statSync(full).isDirectory()) {
        walk(full);
        continue;
      }
      if (!/\.tsx?$/.test(entry)) continue;
      const rel = path.relative(process.cwd(), full).split(path.sep).join("/");
      if (SKIP_DIR.test(rel)) continue;
      for (const item of scanText(readFileSync(full, "utf8"), rel)) {
        if (!found.has(item.decl)) found.set(item.decl, item.line);
      }
    }
  };
  walk(SRC);
  return [...found].map(([decl, line]) => ({ decl, line })).sort((a, b) => (a.decl < b.decl ? -1 : 1));
}

console.log("\n권위 인벤토리 검사\n");

const registered = new Set(SCREEN_SOURCES.map((s) => s.decl));
const excluded = new Map(EXCLUDED_TABLES.map((e) => [e.decl, e.reason]));
const declared = declaredTables();

if (declared.length === 0) {
  fail("`src`에서 로케일 표를 하나도 찾지 못했다 — 훑는 규칙이 깨졌다(0건은 통과가 아니다).");
}

const unregistered = declared.filter((d) => !registered.has(d.decl) && !excluded.has(d.decl));
console.log(`① 등록 대조 — src 로케일 표 선언 ${declared.length}건 · 등록 ${registered.size} · 제외 선언 ${excluded.size}`);
if (unregistered.length) {
  for (const item of unregistered) {
    fail(`등록도 제외 선언도 없는 로케일 표: ${item.decl} (${item.line}행)`);
  }
  console.log("     → `scripts/locale-inventory.ts`의 SCREEN_SOURCES 에 넣거나, 화면에 안 나가면");
  console.log("       EXCLUDED_TABLES 에 **이유와 함께** 적을 것. 이유 없는 제외는 검사를 조용히 비운다.");
} else {
  console.log("  ✓ 미등록 표 0건");
}

// 반대 방향도 본다 — 등록부에 적힌 좌표가 실제로 존재하는가.
const declaredSet = new Set(declared.map((d) => d.decl));
for (const source of SCREEN_SOURCES) {
  if (!declaredSet.has(source.decl)) {
    fail(`등록부의 좌표가 src 에 없다: ${source.decl} — 파일이 옮겨졌거나 이름이 바뀌었다.`);
  }
}
for (const [decl] of excluded) {
  if (!declaredSet.has(decl)) {
    fail(`제외 선언의 좌표가 src 에 없다: ${decl} — 적용되지 않는 예외는 지운다.`);
  }
}

// ── ②③④ 잎 대조 ──────────────────────────────────────────────────────────
console.log(`\n② 잎 개수 — inventoryVersion ${inventoryVersion("en")}`);
const counts: Record<Scope, Record<string, number>> = {} as never;
for (const scope of SCOPES) {
  counts[scope] = {};
  for (const locale of ["ko", ...COMPARE] as LocaleCode[]) {
    counts[scope][locale] = scopeInventory(scope, locale).length;
  }
}
console.log("  " + "scope".padEnd(10) + ["ko", ...COMPARE].map((l) => l.padStart(8)).join(""));
for (const scope of SCOPES) {
  console.log("  " + scope.padEnd(10) + ["ko", ...COMPARE].map((l) => String(counts[scope][l]).padStart(8)).join(""));
  if (counts[scope][COMPARE[0]] === 0) {
    fail(`${scope} 대상이 0건이다 — 0건은 통과가 아니라 실패다.`);
  }
}

console.log("\n③ 잎 경로 대조 (기준 en)");
for (const scope of SCOPES) {
  const base = scopeInventory(scope, "en").map((l) => l.path);
  const baseSet = new Set(base);
  for (const locale of COMPARE.slice(1)) {
    const other = scopeInventory(scope, locale).map((l) => l.path);
    const otherSet = new Set(other);
    const missing = base.filter((p) => !otherSet.has(p));
    const extra = other.filter((p) => !baseSet.has(p));
    if (missing.length || extra.length) {
      fail(`${scope} en↔${locale} — 빠짐 ${missing.length} · 더함 ${extra.length}`);
      [...missing.slice(0, 5)].forEach((p) => console.log(`      - ${p}`));
      [...extra.slice(0, 5)].forEach((p) => console.log(`      + ${p}`));
    }
  }
}
if (!failures) console.log("  ✓ en·ja·vi 잎 경로 일치");

console.log("\n④ 원문(ko) 차이가 선언된 표에서만 나오는가");
{
  const koPaths = new Set(scopeInventory("screen", "ko").map((l) => l.path));
  const enLeaves = scopeInventory("screen", "en");
  const declaredAbsent = SCREEN_SOURCES.filter((s) => s.koAbsent).map((s) => s.id);
  const undeclared = new Set<string>();
  for (const leaf of enLeaves) {
    if (koPaths.has(leaf.path)) continue;
    const owner = leaf.path.split(/[.[]/)[0];
    if (!declaredAbsent.includes(owner)) undeclared.add(owner);
  }
  if (undeclared.size) {
    for (const owner of undeclared) {
      fail(`ko 에만 없는 잎이 있는데 사유가 선언되지 않았다: ${owner} — SCREEN_SOURCES 의 koAbsent 에 적을 것.`);
    }
  } else {
    console.log(`  ✓ 선언된 표에서만 차이가 난다 (${declaredAbsent.join(", ") || "없음"})`);
  }
}

// ── ⑤ 대조군 ───────────────────────────────────────────────────────────────
console.log("\n⑤ 대조군 — 판정기가 살아 있는가");
{
  /**
   * **실제로 통과했던 본문을 그대로 먹인다** (결함 동결 P0-4 · 대조군 조건).
   *
   * 가짜 이름(`Nowhere.tsx:ghost`)은 아무것도 증명하지 않는다 — 없는 이름이 목록에 없다는
   * 확인일 뿐이다. 그것으로 초록불을 받는 동안 `StampOrderForm.COPY` 가 통째로 빠져 있었다.
   *
   * A·B 는 Claude App 이, C 는 Codex 가 통과시킨 모양이다.
   */
  const PLANTED: { tag: string; body: string }[] = [
    {
      tag: "A 따옴표 로케일 키",
      body: `const bannerCopy = {
  "ko": { title: "안내" },
  "en": { title: "Notice" },
  "ja": { title: "お知らせ" },
};`,
    },
    {
      tag: "B 함수 안 + 자료형 없음",
      body: `export function Probe() {
      const bannerCopy = {
        ko: { title: "안내" },
        en: { title: "Notice" },
      };
      return bannerCopy;
}`,
    },
    {
      tag: "C 로케일 키 1개 + fallback",
      body: `const soloCopy = { ko: { title: "안내" }, fallback: { title: "Notice" } };`,
    },
  ];
  /** 반대 방향 — 로케일 표가 아닌 것을 표로 세면 안 된다. `id` 는 인도네시아어 코드다. */
  const NOT_TABLES: { tag: string; body: string }[] = [
    { tag: "평범한 객체(id·title)", body: `const row = { id: "x", title: "y", createdAt: 1 };` },
    { tag: "줄임 표기 + 스프레드", body: `const body = JSON.stringify({ id, ...changes });` },
    { tag: "로케일 자료형이지만 Record 가 아님", body: `function f(locale: LocaleCode) { return locale; }` },
  ];

  const control = [
    ...PLANTED.map((item) => ({
      label: `${item.tag} 를 심으면 잡는다`,
      ok: scanText(item.body, "src/components/__Probe.tsx").length > 0,
    })),
    ...NOT_TABLES.map((item) => ({
      label: `${item.tag} 는 표로 세지 않는다`,
      ok: scanText(item.body, "src/components/__Probe.tsx").length === 0,
    })),
    {
      label: "미등록 표를 넣으면 잡는다",
      ok: !new Set(SCREEN_SOURCES.map((s) => s.decl)).has("src/components/Nowhere.tsx:ghost"),
    },
    {
      label: "잎 비교가 실제로 값을 본다",
      ok: scopeInventory("screen", "en").length > 0 && scopeInventory("docs", "en").length > 0,
    },
    {
      label: "제외 목록에 이유가 비어 있지 않다",
      ok: EXCLUDED_TABLES.every((e) => e.reason.trim().length > 0),
    },
  ];
  for (const item of control) {
    if (item.ok) console.log(`  ✓ ${item.label}`);
    else fail(`대조군 실패 — ${item.label}`);
  }
}

console.log(
  failures === 0
    ? `\n통과 — 화면 ${counts.screen.en} · 문서 ${counts.docs.en} · 법률 ${counts.legal.en} · 결제 고시 ${counts.consent.en}` +
        ` = 로케일당 ${SCOPES.reduce((a, s) => a + counts[s].en, 0)}개 (en 기준)\n`
    : `\n빨간불 ${failures}건\n`,
);
process.exit(failures === 0 ? 0 : 1);
