/**
 * **로케일 표를 찾는다 — 모양이 아니라 키로.** 파일 시스템을 건드리지 않는 순수 모듈이다.
 *
 * ## 왜 검사기에서 꺼냈나 (2026-08-20)
 *
 * `verify-locale-inventory.ts` 는 최상위에서 본문이 돌고 `process.exit` 로 끝난다. 그래서
 * 밖에서 `scanText` 만 부르려고 import 하면 **검사기가 통째로 실행되고 거기서 프로세스가
 * 죽는다.** 공격 시험을 쓰려다 그대로 걸렸다.
 *
 * 밖에서 시험할 수 없는 판정기는 대조군을 자기 안에서만 만들게 되고, 그러면 대조군이
 * 구현과 같은 사각지대를 갖는다. 이번 재검증에서 우회 다섯이 통과한 자리가 그것이다.
 */
import ts from "typescript";

import { localeCodes } from "../src/lib/locale-codes";

// ── ① 등록 대조 ────────────────────────────────────────────────────────────
/**
 * **로케일 표를 찾는다 — 모양이 아니라 키로.**
 *
 * ## 왜 세 번째로 고쳐 쓰나 (2026-08-20 · 결함 동결 P0-4)
 *
 * 앞선 두 판은 **선언 모양**을 쫓았다. `Record<Locale…>` 이라는 자료형 표기를 찾고, 그것을
 * 안 쓴 표를 놓치자 「최상위 키가 로케일인 객체 리터럴」이라는 모양을 하나 더 붙였다.
 * 모양을 하나 붙일 때마다 다음 모양이 샜다.
 *
 *     A. 따옴표 키          "ko": {...}      → 미탐지 (키 정규식이 따옴표를 안 봤다)
 *     B. 함수 안 무타입      들여쓰기 4칸+    → 미탐지 (키 정규식이 `^\s{2}` 였다)
 *     C. 로케일 키 1개       임계값 >= 2      → 미탐지
 *
 * A·B 는 Claude App 이, C 는 Codex 가 결함을 심어 통과시켰다. 새는 원인은 선언 모양이 아니라
 * **키 추출 한 줄**이었다 — 들여쓰기와 따옴표에 기대고 있었다.
 *
 * ## 지금의 계약
 *
 * > **리터럴 로케일 키를 가진 객체 리터럴**은 전부 검사 대상이다. 지원 로케일 코드가
 * > **하나라도** 키로 있으면 등록되었거나 이유와 함께 제외 선언돼 있어야 한다.
 * > 따옴표·들여쓰기·함수 안팎·자료형 유무를 가리지 않는다.
 *
 * 임계값이 1인 이유 — 「키 1개 + fallback」 표도 사용자에게 로케일별 문구를 낸다. 임계값을
 * 올려 오탐을 숨기면 그 부류가 통째로 검사 밖으로 나간다. **오탐은 `EXCLUDED_TABLES` 에
 * 이유와 함께 적는다.**
 *
 * ## 사각지대 (계약 밖이라고 여기 적는다)
 *
 * 이 검사기는 **리터럴 키**만 본다. 계산으로 만들어지는 표는 못 잡는다.
 *
 *     Object.fromEntries(LOCALES.map((l) => [l, copy(l)]))   ← 리터럴 키가 없다
 *
 * 그런 표는 **손으로 등록해야 한다.** 완전한 탐지기는 없고, AST 로도 이건 못 잡는다.
 * 검사기가 자기가 못 보는 것을 말하지 않은 것이 앞선 실패의 자리라 여기 적어 둔다.
 */
const LOCALE_KEYS: ReadonlySet<string> = new Set(localeCodes as readonly string[]);

/**
 * 로케일 표에 섞여도 되는 **비로케일 키**. 폴백 자리다.
 *
 * 이 목록을 늘리면 검사가 넓어진다 — 늘릴 때는 그 키가 정말 「로케일 하나당 값 하나」 구조의
 * 폴백인지 확인할 것.
 */
const FALLBACK_KEYS: ReadonlySet<string> = new Set(["default", "fallback"]);

/**
 * **로케일 표인가.** 임계값은 1이되, 판정은 키 **구성**으로 한다.
 *
 * 임계값 1만으로는 못 쓴다 — `id` 가 인도네시아어 코드라서 `{ id, title, createdAt }` 같은
 * 평범한 객체가 전부 걸린다(실제로 9건 걸렸다). 그렇다고 임계값을 올리면 「로케일 키 1개」
 * 표가 통째로 검사 밖으로 나간다. **그건 합의된 결함을 범위 밖으로 옮기는 것이다.**
 *
 * 로케일 표의 성질은 개수가 아니라 **구성**이다 — 키가 전부 로케일 코드(또는 폴백)다.
 *
 *     { ko: …, en: … }              로케일 표 ✓
 *     { ko: … }                     로케일 표 ✓  ← 키 1개도 표다 (C)
 *     { ko: …, fallback: … }        로케일 표 ✓
 *     { id: "x", title: "y" }       표가 아니다 — title 은 로케일이 아니다
 *
 * 오탐이 남으면 임계값을 올리지 말고 `EXCLUDED_TABLES` 에 **이유와 함께** 적는다.
 */
function isLocaleTable(keys: readonly string[]): boolean {
  if (keys.length === 0) return false;
  let localeKeys = 0;
  for (const key of keys) {
    if (LOCALE_KEYS.has(key)) localeKeys += 1;
    else if (!FALLBACK_KEYS.has(key)) return false;
  }
  return localeKeys >= 1;
}

/**
 * 객체 리터럴의 **리터럴 키**를 읽는다. 따옴표가 있든 없든, 깊이가 얼마든 같다.
 *
 * **줄임 표기(`{ id, ...rest }`)는 세지 않는다.** 로케일 표는 값을 반드시 적는다
 * (`ko: {…}`). 줄임만 있는 객체는 표가 아니라 인자 뭉치다 — `id` 가 인도네시아어 코드라서
 * `{ id, ...changes }` 가 표로 걸렸다.
 */
function literalKeysOf(node: ts.ObjectLiteralExpression): string[] {
  const keys: string[] = [];
  for (const prop of node.properties) {
    if (ts.isShorthandPropertyAssignment(prop) || ts.isSpreadAssignment(prop)) continue;
    const name = prop.name;
    if (!name) continue;
    if (ts.isIdentifier(name)) keys.push(name.text);
    else if (ts.isStringLiteral(name)) keys.push(name.text);
    else if (ts.isNumericLiteral(name)) keys.push(name.text);
    else if (ts.isComputedPropertyName(name)) {
      /**
       * `["ko"]` 처럼 **계산 문법이지만 값이 정적으로 확정된** 키(2026-08-20 재검증).
       *
       * 사각지대를 「계산으로 만드는 표」라고 적어 놓고 이걸 놓쳤다 — 계약이 자기 경계를
       * 틀리게 말한 것이다. 대괄호가 붙었을 뿐 `ko:` 와 같은 문자열이고, 실제 컴포넌트에
       * 넣었더니 미등록 0건으로 통과했다. **여기서 걸러야 할 것은 문법이 아니라 「값을
       * 지금 알 수 있는가」다.**
       */
      const inner = name.expression;
      if (ts.isStringLiteral(inner) || ts.isNoSubstitutionTemplateLiteral(inner)) {
        keys.push(inner.text);
      }
    }
  }
  return keys;
}

/**
 * **자료형으로 선언된 로케일 표.** `Record<Locale…>` · `Partial<Record<…>>` ·
 * `Record<Exclude<LocaleCode, "ko">, …>` · `{} as Record<LocaleCode, …>`.
 *
 * 키 구성만 보면 **빈 객체로 시작해 나중에 채우는 표**를 놓친다 — `not-found.tsx` 의
 * `const copies = {} as Record<LocaleCode, …>` 가 그렇다. 자료형이 곧 선언이므로 함께 본다.
 */
function namesLocaleRecord(node: ts.TypeNode | undefined): boolean {
  if (!node) return false;

  /** `Locale` · `LocaleCode` · `Exclude<LocaleCode, "ko">` — 키 자리가 로케일인가. */
  const keyIsLocale = (key: ts.TypeNode): boolean => {
    if (ts.isTypeReferenceNode(key) && ts.isIdentifier(key.typeName)) {
      if (/^Locale(Code)?$/.test(key.typeName.text)) return true;
      // Exclude<LocaleCode, …> · Extract<…> 처럼 감싼 것
      return (key.typeArguments ?? []).some(keyIsLocale);
    }
    return false;
  };

  /** `Record<K, V>` 인가. `Partial<Record<…>>` · `Readonly<Record<…>>` 도 푼다. */
  const isLocaleRecord = (current: ts.TypeNode): boolean => {
    if (!ts.isTypeReferenceNode(current) || !ts.isIdentifier(current.typeName)) return false;
    const name = current.typeName.text;
    const args = current.typeArguments ?? [];
    if (name === "Record") return args.length > 0 && keyIsLocale(args[0]!);
    // 감싸개는 안쪽을 본다. **`LocaleCode` 그 자체는 표가 아니다** — `locale: LocaleCode`
    // 같은 평범한 자리까지 표로 세면 60건이 걸린다(실제로 걸렸다).
    if (/^(Partial|Readonly|Required)$/.test(name)) return args.some(isLocaleRecord);
    return false;
  };

  let hit = false;
  const walk = (current: ts.Node) => {
    if (hit) return;
    if (ts.isTypeNode(current) && isLocaleRecord(current)) {
      hit = true;
      return;
    }
    ts.forEachChild(current, walk);
  };
  walk(node);
  return hit;
}

/**
 * 그 객체 리터럴을 **무슨 이름으로 부를 것인가.** 등록부의 `decl` 과 같은 꼴이어야 한다.
 * 가장 가까운 이름 붙은 조상을 찾는다 — `const X = {…}` · `X: {…}` · `X = {…}`.
 */
function nameFor(node: ts.Node): string | null {
  let current: ts.Node | undefined = node.parent;
  while (current) {
    if (ts.isVariableDeclaration(current) && ts.isIdentifier(current.name)) return current.name.text;
    if (ts.isPropertyAssignment(current)) {
      const key = current.name;
      if (ts.isIdentifier(key) || ts.isStringLiteral(key)) return key.text;
    }
    if (
      ts.isBinaryExpression(current) &&
      current.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
      ts.isIdentifier(current.left)
    ) {
      return current.left.text;
    }
    if (ts.isFunctionDeclaration(current) || ts.isClassDeclaration(current)) return null;
    current = current.parent;
  }
  return null;
}

export function scanText(text: string, rel: string): { decl: string; line: number }[] {
  const found = new Map<string, number>();
  const source = ts.createSourceFile(rel, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);

  const record = (name: string | null, node: ts.Node) => {
    if (!name) return;
    const decl = `${rel}:${name}`;
    if (!found.has(decl)) {
      found.set(decl, source.getLineAndCharacterOfPosition(node.getStart(source)).line + 1);
    }
  };

  const visit = (node: ts.Node) => {
    // ① 키 구성으로 — 자료형이 없어도 잡힌다
    if (ts.isObjectLiteralExpression(node) && isLocaleTable(literalKeysOf(node))) {
      record(nameFor(node), node);
    }
    // ② 자료형으로 — 빈 객체로 시작해 나중에 채우는 표도 잡힌다
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name)) {
      const asserted =
        node.initializer && ts.isAsExpression(node.initializer) ? node.initializer.type : undefined;
      if (namesLocaleRecord(node.type) || namesLocaleRecord(asserted)) {
        record(node.name.text, node);
      }
    }
    if (ts.isPropertySignature(node) && node.name && ts.isIdentifier(node.name)) {
      if (namesLocaleRecord(node.type)) record(node.name.text, node);
    }
    ts.forEachChild(node, visit);
  };
  visit(source);

  return [...found].map(([decl, line]) => ({ decl, line }));
}

