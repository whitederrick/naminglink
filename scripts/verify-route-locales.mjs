#!/usr/bin/env node
/**
 * 「이 경로는 이 언어뿐」 규칙이 **naminglink에만 있고, 코드와 어긋나지 않는가.**
 *
 * ## 왜 이 검사가 필요한가 (2026-08-10)
 *
 * naminglink는 서비스가 두 갈래다.
 *
 *     한국어 전용   한글 이름 → 한자 매핑 · 한글 이름 → 글로벌 이름   (한글 이름이 있어야 쓴다)
 *     글로벌 전용   글로벌 이름 → 한글 발음 · 글로벌 이름 → 한글 이름 (한글 이름이 없는 사람용)
 *
 * **인연·사주·드림은 그렇지 않다.** 네 앱 모두 모든 서비스가 한국을 포함한 전 지역 대상이고,
 * 언어 전용 서비스가 하나도 없다(사용자 확인, 2026-08-10).
 *
 * 이 저장소의 습관은 「형제 앱 자산을 먼저 볼 것」이다. 그래서 **naminglink에만 맞는 이 구조가
 * 복사돼 갈 위험이 실재한다** — 복사되면 그 앱에서 22개 언어가 주소를 잃는다. 색인이 조용히
 * 줄어드는 종류의 사고라 화면만 봐서는 아무도 모른다.
 *
 * ## 무엇을 보는가
 *
 *   ① 형제 앱에 `route-locales.ts`가 없는가 · `track: "korean"`이 없는가
 *   ② naminglink의 `GLOBAL_ONLY_PATHS`가 `serviceType === "GLOBAL_TO_KOREAN"`과 맞는가
 *   ③ naminglink의 한국어 전용 서비스 경로가 그 반대편과 맞는가
 *
 * ②·③이 필요한 이유: `route-locales.ts`는 **미들웨어에 실리므로** `services.ts`(1,100줄)를
 * import 하지 않는다. 그래서 목록을 그 파일 안에 적어 두었고, 적어 둔 것은 언젠가 어긋난다.
 * 어긋나는 순간을 여기서 잡는다.
 *
 * 실행: node scripts/verify-route-locales.mjs
 */

import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { APP_KEYS } from "./app-keys.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OWNER = "naminglink";

const read = (file) => (existsSync(file) ? readFileSync(file, "utf8") : null);
const problems = [];
const notes = [];

console.log("경로별 언어 규칙 — naminglink 전용인가, 코드와 맞는가\n");

// ── ① 형제 앱에 번지지 않았는가 ────────────────────────────────────────────
for (const app of APP_KEYS.filter((a) => a !== OWNER)) {
  // 이 앱을 보기 전의 개수. **누적 개수로 O/X를 찍으면** 앞선 앱이 걸린 순간부터 뒤의 멀쩡한
  // 앱까지 전부 X로 나온다 — 판정은 맞는데 화면이 거짓말을 한다.
  const before = problems.length;
  const routeFile = path.join(ROOT, "apps", app, "src", "lib", "route-locales.ts");
  if (existsSource(routeFile)) {
    problems.push(
      `${app}에 route-locales.ts가 있다 — 이 앱은 언어 전용 서비스가 없다(전 지역 대상).`,
    );
  }
  const guideIndex = read(path.join(ROOT, "apps", app, "src", "lib", "guide-index.ts"));
  if (guideIndex && /track:\s*"korean"/.test(guideIndex)) {
    problems.push(
      `${app}의 guide-index.ts에 track: "korean"이 있다 — 이 앱의 안내는 전부 23개 언어다.`,
    );
  }
  console.log(
    `  ${app.padEnd(11)} 한국어 전용 구조 없음 ${problems.length === before ? "O" : "X"}`,
  );
}

function existsSource(file) {
  return existsSync(file);
}

// ── ②③ naminglink 목록이 서비스 정의와 맞는가 ─────────────────────────────
const routeSource = read(path.join(ROOT, "apps", OWNER, "src", "lib", "route-locales.ts"));
const services = read(path.join(ROOT, "apps", OWNER, "src", "lib", "services.ts"));

if (!routeSource || !services) {
  console.error("\nnaminglink의 route-locales.ts 또는 services.ts를 읽지 못했다. 실패로 센다.");
  process.exit(1);
}

/** `slug: "x"` … `serviceType: "Y"` 짝을 순서대로 집는다. 둘은 같은 객체 안에 붙어 있다. */
function serviceTypes(source) {
  const found = new Map();
  for (const m of source.matchAll(/slug:\s*"([a-z-]+)",\s*\n\s*serviceType:\s*"([A-Z_]+)"/g)) {
    found.set(m[1], m[2]);
  }
  return found;
}

function listOf(name) {
  const m = new RegExp(`${name}[^=]*=\\s*\\[([^\\]]*)\\]`).exec(routeSource);
  return m ? [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]) : null;
}

const types = serviceTypes(services);
if (types.size === 0) {
  console.error("\nservices.ts에서 serviceType을 하나도 못 읽었다 — 이 결과를 믿지 말 것.");
  process.exit(1);
}

const globalSlugs = [...types].filter(([, t]) => t === "GLOBAL_TO_KOREAN").map(([s]) => s);
const koreanSlugs = [...types].filter(([, t]) => t !== "GLOBAL_TO_KOREAN").map(([s]) => s);

const globalPaths = listOf("GLOBAL_ONLY_PATHS");
const koreanPaths = listOf("KOREAN_ONLY_SERVICE_PATHS");

if (!globalPaths || !koreanPaths) {
  console.error("\nroute-locales.ts에서 경로 목록을 못 읽었다 — 이 결과를 믿지 말 것.");
  process.exit(1);
}

/**
 * **주소가 있는 서비스만 견준다.** `global-name-to-hangul`은 `/global-to-korean`의 한 모드라
 * 자기 주소가 없다. 라우트 파일이 있는 것만 경로로 친다.
 */
const routed = (slug) =>
  existsSync(path.join(ROOT, "apps", OWNER, "src", "app", "(services)", slug, "page.tsx"));

const expectedGlobal = globalSlugs.filter(routed).map((s) => `/${s}`).sort();
const expectedKorean = koreanSlugs.filter(routed).map((s) => `/${s}`).sort();

const diff = (a, b) => [
  ...a.filter((x) => !b.includes(x)).map((x) => `-${x}`),
  ...b.filter((x) => !a.includes(x)).map((x) => `+${x}`),
];

const globalDiff = diff(expectedGlobal, [...globalPaths].sort());
const koreanDiff = diff(expectedKorean, [...koreanPaths].sort());

console.log(`\n  ${OWNER} 글로벌 전용 ${globalPaths.join(" ")} ${globalDiff.length ? "X" : "O"}`);
console.log(`  ${OWNER} 한국어 전용 ${koreanPaths.join(" ")} ${koreanDiff.length ? "X" : "O"}`);

if (globalDiff.length) {
  problems.push(`GLOBAL_ONLY_PATHS가 serviceType과 어긋난다: ${globalDiff.join(" ")}`);
}
if (koreanDiff.length) {
  problems.push(`KOREAN_ONLY_SERVICE_PATHS가 serviceType과 어긋난다: ${koreanDiff.join(" ")}`);
}

// ── 대조군 ─────────────────────────────────────────────────────────────────
//
// 판정이 살아 있는가. 어긋난 목록을 넣으면 잡아야 하고, 맞는 목록은 통과해야 한다.
const controlCaught = diff(expectedGlobal, ["/nonexistent-service"]).length > 0;
const controlPasses = diff(expectedGlobal, [...expectedGlobal]).length === 0;
if (!controlCaught || !controlPasses || expectedGlobal.length === 0) {
  console.error(
    `\n✗ 대조군 실패 — 어긋남 감지 ${controlCaught} · 일치 통과 ${controlPasses} · 읽은 글로벌 서비스 ${expectedGlobal.length}개`,
  );
  process.exit(1);
}
console.log("\n  ✓ 대조군: 어긋난 목록은 잡고, 맞는 목록은 통과시킨다");

if (problems.length) {
  console.log(`\n어긋난 자리 ${problems.length}건:`);
  for (const line of problems) console.log(`    ✗ ${line}`);
  process.exit(1);
}

console.log(
  "\nALL PASS — 언어 전용 규칙은 naminglink에만 있고, 목록이 serviceType과 맞는다.",
);
