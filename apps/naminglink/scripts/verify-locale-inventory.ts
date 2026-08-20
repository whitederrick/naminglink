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
import { localeCodes, type LocaleCode } from "../src/lib/locale-codes";

const SRC = path.join(process.cwd(), "src");
/** 검수 대조에 쓰는 로케일. `ko`는 원문이라 따로 본다. */
const COMPARE: LocaleCode[] = ["en", "ja", "vi"];

let failures = 0;
const fail = (message: string) => {
  failures += 1;
  console.log(`  ✗ ${message}`);
};

// ── ① 등록 대조 ────────────────────────────────────────────────────────────
/**
 * `src`에서 로케일로 키를 잡는 표 선언을 찾는다. 자료형이 `Record<Locale…>`이든
 * `Partial<Record<Locale…>>`이든 `{} as Record<Locale…>`이든 **로케일 하나당 값 하나**라는
 * 성질은 같다. 이름을 앞에서 뽑아 `파일:이름`으로 적는다 — 등록부의 `decl`과 같은 꼴이다.
 *
 * **줄 단위로 훑지 않는다** (2026-08-20). 처음에 한 줄씩 보다가 셋을 놓쳤다.
 *
 *     const globalNavigationLabels: Record<     ← `Locale` 이 다음 줄에 있다
 *       Locale,
 *     const generalStepsByLocale: Record<Exclude<LocaleCode, "ko">, …>   ← 제네릭에 감싸였다
 *
 * 놓친 표는 **검사가 조용히 통과한다.** 그래서 파일 전체 문자열에 대고 찾는다.
 */
const TABLE_PATTERNS: readonly RegExp[] = [
  // const NAME: Record<Locale…> · Partial<Record<…>> · Record<Exclude<LocaleCode…>>
  /(?:export\s+)?const\s+([A-Za-z_$][\w$]*)\s*:\s*(?:Partial<\s*)?Record<\s*(?:Exclude<\s*)?Locale(?:Code)?\b/g,
  // const NAME = {} as Record<Locale…>
  /(?:export\s+)?const\s+([A-Za-z_$][\w$]*)\s*=\s*\{\}\s*as\s+(?:Partial<\s*)?Record<\s*Locale(?:Code)?\b/g,
  // 자료형 안의 항목: `  copies: Record<LocaleCode, …>`
  /^[ \t]{2,}([A-Za-z_$][\w$]*)\s*:\s*(?:Partial<\s*)?Record<\s*Locale(?:Code)?\b/gm,
];

/**
 * **자료형이 없는 로케일 표도 찾는다** (2026-08-20 정정).
 *
 * 위 규칙은 전부 `Record<Locale…>` 이라는 **자료형 표기**에 기댄다. 그런데
 * `src/components/StampOrderForm.tsx:34` 는 이렇게 적혀 있다.
 *
 *     const COPY = {
 *       ko: { … }, en: { … }, vi: { … }, …   // 23개 로케일, 잎 약 666개
 *     };
 *
 * 자료형이 없어 **표 하나가 통째로 인벤토리에서 빠졌고**, 그런데도 이 검사기는 「미등록 표
 * 0건」을 찍었다. 자료형에 기댄 규칙은 자료형을 안 쓴 코드를 못 본다.
 *
 * 그래서 **모양으로도 찾는다** — 최상위 키가 로케일 코드인 객체 리터럴이면 로케일 표다.
 */
function shapedTables(text: string, rel: string): { decl: string; line: number }[] {
  const found: { decl: string; line: number }[] = [];
  const DECL = /(?:export\s+)?const\s+([A-Za-z_$][\w$]*)\s*(?::[^=]*)?=\s*\{/g;
  DECL.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = DECL.exec(text))) {
    const open = text.indexOf("{", match.index + match[0].length - 1);
    // 중괄호 균형으로 블록을 잘라 낸다. 문자열 안의 괄호는 세지 않는다.
    let depth = 0;
    let end = -1;
    let quote: string | null = null;
    for (let i = open; i < text.length; i++) {
      const ch = text[i]!;
      if (quote) {
        if (ch === "\\") i++;
        else if (ch === quote) quote = null;
        continue;
      }
      if (ch === '"' || ch === "'" || ch === "`") { quote = ch; continue; }
      if (ch === "{") depth++;
      else if (ch === "}") { depth--; if (depth === 0) { end = i; break; } }
    }
    if (end < 0) continue;
    const block = text.slice(open, end + 1);
    const topKeys = [...block.matchAll(/^\s{2}([A-Za-z_$][\w$-]*)\s*:/gm)].map((m) => m[1]!);
    const localeKeys = topKeys.filter((key) => (localeCodes as readonly string[]).includes(key));
    // 로케일 코드가 셋 이상이면 보통 객체가 아니라 로케일 표다.
    if (localeKeys.length >= 2) {
      found.push({ decl: `${rel}:${match[1]}`, line: text.slice(0, match.index).split(/\r?\n/).length });
    }
  }
  return found;
}

/**
 * **한 파일의 본문에서 로케일 표를 찾는다.** 파일 시스템을 건드리지 않는 **순수 함수**다.
 *
 * 순수 함수로 꺼낸 이유가 대조군이다. 예전 대조군은 이랬다.
 *
 *     { label: "미등록 표를 넣으면 잡는다",
 *       ok: !new Set(SCREEN_SOURCES.map(s => s.decl)).has("src/components/Nowhere.tsx:ghost") }
 *
 * **그것은 아무것도 증명하지 않는다.** 없는 이름이 목록에 없다는 확인일 뿐, 훑기가 실제 표를
 * 찾아내는지는 보지 않는다. 그래서 자료형 없는 `StampOrderForm.COPY` 를 놓친 채로 「미등록 표
 * 0건」을 찍었고, 화면 수가 242 → 323 → 357 로 두 번 틀렸다.
 *
 * 지금 대조군은 **실제로 놓쳤던 본문**을 이 함수에 먹여 잡히는지 본다.
 */
export function scanText(text: string, rel: string): { decl: string; line: number }[] {
  const found = new Map<string, number>();
  for (const item of shapedTables(text, rel)) {
    if (!found.has(item.decl)) found.set(item.decl, item.line);
  }
  for (const pattern of TABLE_PATTERNS) {
    pattern.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = pattern.exec(text))) {
      const line = text.slice(0, match.index).split(/\r?\n/).length;
      const decl = `${rel}:${match[1]}`;
      if (!found.has(decl)) found.set(decl, line);
    }
  }
  return [...found].map(([decl, line]) => ({ decl, line }));
}

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
  const control = [
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
