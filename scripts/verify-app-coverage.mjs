// **앱 목록을 손으로 적어 둔 자리를 찾아 실패시킨다.**
//
// ## 왜 만들었는가 (2026-08-06)
//
// 하루에 같은 결함이 여덟 곳에서 나왔다. 원인이 전부 하나였다 — 앱이 넷으로 늘었는데 도구들이
// `["naminglink", "inyeonlink"]`를 자기 파일에 적어 두고 둘에 멈춰 있었다.
//
//   verify-route-guards      사주링크를 빼고 "ALL PASS"를 찍었다
//   verify-app-split         두 앱만 더해 사주 방문 17건이 "새는 값"으로 잡혔다
//   api/admin/inyeon-status  콘솔이 인연링크만 물었다 — 그래서 사주링크가 Supabase 환경변수
//                            없이 며칠 떠 있는 것을 아무도 못 봤다
//
// **검사기에서 이 병은 특히 나쁘다.** 목록에서 빠진 앱은 통과하는 것이 아니라 **검사받지 않는데**
// 화면에는 "ALL PASS"가 찍힌다. 그래서 이 파일이 검사기를 검사한다.
//
// ## 무엇을 잡는가
//
// 앱 이름 문자열이 **둘 이상 나란히** 오는 자리(= 목록을 적어 둔 자리)를 잡는다.
//
//     const APPS = ["naminglink", "inyeonlink"];      ← 잡는다
//     if (key !== "naminglink") …                     ← 안 잡는다(단일 비교는 정상)
//
// 하나만 쓰는 것은 정상이다 — "이 앱이 naminglink인가"를 묻는 자리는 목록이 아니다. 목록을
// 만들려면 `scripts/app-keys.mjs`나 `@naminglink/core/apps`의 `APP_KEYS`를 쓸 것.
//
// 실행: 저장소 뿌리에서  node scripts/verify-app-coverage.mjs

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

import { APP_KEYS } from "./app-keys.mjs";

/** 뒤질 곳. 소스와 검사기 전부. */
const ROOTS = [
  "scripts",
  "packages",
  ...APP_KEYS.map((key) => `apps/${key}/src`),
  ...APP_KEYS.map((key) => `apps/${key}/scripts`),
];

/**
 * 규칙에서 빼는 자리. **반드시 이유를 적는다.**
 *
 * 목록에 없는 이탈은 실패다 — "어차피 괜찮은 자리"라는 판단이 사람 머릿속에만 있으면, 다음에
 * 진짜로 안 괜찮은 자리가 같은 모양으로 들어와도 아무도 못 알아본다.
 */
const EXCEPTIONS = {
  // 목록의 원본. 여기에 적혀 있어야 나머지가 읽어 쓸 수 있다.
  "packages/core/src/apps.ts": "APP_KEYS 원본",
  // 원본을 읽어 오는 리더. 정규식 안에 앱 이름이 없지만, 설명 주석에 예시로 적혀 있다.
  "scripts/app-keys.mjs": "원본을 읽는 리더 — 주석의 예시",
  // 이 파일. 무엇을 잡는지 설명하려면 예시를 적어야 한다.
  "scripts/verify-app-coverage.mjs": "이 검사기 자신 — 주석의 예시",
};

/** 앱 이름 문자열이 둘 이상 나란히 오는가. `apps/` 접두어가 붙은 경로 목록도 같은 병이다. */
const LIST_PATTERN = new RegExp(
  `["'](?:apps/)?(?:${APP_KEYS.join("|")})["']\\s*,\\s*["'](?:apps/)?(?:${APP_KEYS.join("|")})["']`,
);

function sourceFiles(dir, found = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return found; // 없는 디렉터리는 조용히 넘어간다(앱마다 scripts/가 있는 것은 아니다).
  }
  for (const entry of entries) {
    if (entry === "node_modules" || entry === ".next" || entry === "dist") continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) sourceFiles(full, found);
    else if (/\.(tsx?|mjs|js)$/.test(entry)) found.push(full);
  }
  return found;
}

const problems = [];
let scanned = 0;

for (const root of ROOTS) {
  for (const file of sourceFiles(root)) {
    const key = relative(".", file).split("\\").join("/");
    if (EXCEPTIONS[key]) continue;
    scanned += 1;
    const lines = readFileSync(file, "utf8").split(/\r?\n/);
    lines.forEach((line, index) => {
      // 주석은 넘어간다. **왜 그랬는지 설명하려면 예시를 적어야 하기 때문이다** — 이 규칙을
      // 만든 파일들부터 "예전에는 `["naminglink", "inyeonlink"]`였다"라고 적고 있다. 주석 속
      // 목록은 실행되지 않으므로 잃는 것이 없다(주석 처리된 코드는 못 잡지만, 그건 코드가
      // 아니다).
      const head = line.trimStart();
      if (head.startsWith("//") || head.startsWith("*") || head.startsWith("/*")) return;
      if (LIST_PATTERN.test(line)) {
        problems.push(`${key}:${index + 1}: 앱 목록을 손으로 적었다 — ${line.trim().slice(0, 80)}`);
      }
    });
  }
}

/**
 * 대조군 — 검사가 실제로 잡는지 스스로 증명한다.
 *
 * `CONTROL_HISTORICAL`은 **실제로 있었던 코드**다(`verify-route-guards.mjs`, 2026-08-06 이전).
 * 이걸 못 잡으면 같은 결함이 다시 들어와도 통과한다.
 */
const CONTROL_HISTORICAL = `const APPS = ["apps/naminglink", "apps/inyeonlink"];`;
const CONTROL_SINGLE = `if (!supabase || key !== "naminglink") return true;`;
const CONTROL_FIXED = `const APPS = APP_KEYS.map((key) => \`apps/\${key}\`);`;

const controlFailures = [];
if (!LIST_PATTERN.test(CONTROL_HISTORICAL)) controlFailures.push("실제로 있었던 결함을 통과시킨다");
if (LIST_PATTERN.test(CONTROL_SINGLE)) controlFailures.push("단일 비교를 목록으로 오인한다");
if (LIST_PATTERN.test(CONTROL_FIXED)) controlFailures.push("고친 코드를 잡는다");

console.log("앱 목록 하드코딩 전수 검사");
console.log(`  앱 ${APP_KEYS.length}개(${APP_KEYS.join(", ")}) · 검사한 파일 ${scanned}개 · 예외 ${Object.keys(EXCEPTIONS).length}개`);

if (controlFailures.length) {
  console.log("\n대조군 실패 — 검사기 자체가 고장 났다:");
  for (const line of controlFailures) console.log(`  ✗ ${line}`);
  process.exit(1);
}
console.log("  ✓ 대조군: 실제로 있었던 결함을 잡고, 단일 비교와 고친 코드는 통과시킨다");

// 검사한 파일이 0개면 통과가 아니다 — 경로가 바뀌어 아무것도 안 본 것이다.
if (scanned === 0) {
  console.log("\n검사한 파일이 0개다 — 경로가 바뀌었을 것이다. 통과로 보지 않는다.");
  process.exit(1);
}

if (problems.length) {
  console.log("\n앱 목록을 손으로 적어 둔 자리:");
  for (const line of problems) console.log(`  ✗ ${line}`);
  console.log("\n  → scripts/app-keys.mjs 또는 @naminglink/core/apps의 APP_KEYS를 쓰세요.");
  process.exit(1);
}

console.log("  ✓ 앱 목록을 손으로 적어 둔 자리가 없다");
