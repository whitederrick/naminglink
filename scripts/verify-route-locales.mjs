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
 *   ② naminglink의 `GLOBAL_ONLY_SERVICE_PATHS`가 `serviceType === "GLOBAL_TO_KOREAN"`과 맞는가
 *   ③ naminglink의 한국어 전용 서비스 경로가 그 반대편과 맞는가
 *   ④ 글로벌 전용 **굿즈** 경로가 실재하는 라우트이고, 서비스가 아닌가
 *   ⑤ `GLOBAL_ONLY_PATHS`가 그 두 목록의 합일 뿐인가 — 손으로 끼워 넣은 경로가 없는가
 *
 * ④⑤가 생긴 이유 (2026-08-19): 이름 도장은 **글로벌 전용인데 서비스가 아니다.** 국내 판매를
 * 하지 않기로 한 사업 결정이라 `/ko/stamp-order`가 열려 있으면 안 되는데, 도장은 굿즈라
 * `services.ts`에 없어 ②의 기준으로는 담기지 않는다. 기준을 느슨하게 푸는 대신 **글로벌 전용의
 * 정의를 서비스 갈래에서 경로 정책으로 넓혔다** — 서비스 목록은 여전히 `serviceType`과 1:1로
 * 맞아야 하고, 굿즈 목록은 「라우트가 실재하는가」와 「서비스가 아닌가」를 따로 센다.
 *
 * ②·③이 필요한 이유: `route-locales.ts`는 **미들웨어에 실리므로** `services.ts`(1,100줄)를
 * import 하지 않는다. 그래서 목록을 그 파일 안에 적어 두었고, 적어 둔 것은 언젠가 어긋난다.
 * 어긋나는 순간을 여기서 잡는다.
 *
 * 실행: node scripts/verify-route-locales.mjs
 */

import { readFileSync, existsSync, readdirSync } from "node:fs";
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

const globalPaths = listOf("GLOBAL_ONLY_SERVICE_PATHS");
const goodsPaths = listOf("GLOBAL_ONLY_GOODS_PATHS");
const koreanPaths = listOf("KOREAN_ONLY_SERVICE_PATHS");

if (!globalPaths || !goodsPaths || !koreanPaths) {
  console.error("\nroute-locales.ts에서 경로 목록을 못 읽었다 — 이 결과를 믿지 말 것.");
  process.exit(1);
}

/**
 * **주소가 있는 서비스만 견준다.** `global-name-to-hangul`은 `/global-to-korean`의 한 모드라
 * 자기 주소가 없다. 라우트 파일이 있는 것만 경로로 친다.
 */
/**
 * **한 디렉터리를 적어 두지 않는다** (2026-08-18). 정적화를 하며 라우트 그룹이 갈렸고
 * 한국어 전용 서비스는 `(korean)/`으로 옮겨졌다. `(services)` 한 자리만 보면 옮겨 간
 * 화면이 「주소가 없는 것」으로 읽혀, 이 검사가 통째로 헛돈다(대조군이 그것을 잡았다).
 */
const routed = (slug) => {
  const root = path.join(ROOT, "apps", OWNER, "src", "app");
  const stack = [root];
  while (stack.length) {
    const dir = stack.pop();
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const full = path.join(dir, entry.name);
      if (entry.name === slug && existsSync(path.join(full, "page.tsx"))) return true;
      stack.push(full);
    }
  }
  return false;
};

const expectedGlobal = globalSlugs.filter(routed).map((s) => `/${s}`).sort();
const expectedKorean = koreanSlugs.filter(routed).map((s) => `/${s}`).sort();

const diff = (a, b) => [
  ...a.filter((x) => !b.includes(x)).map((x) => `-${x}`),
  ...b.filter((x) => !a.includes(x)).map((x) => `+${x}`),
];

const globalDiff = diff(expectedGlobal, [...globalPaths].sort());
const koreanDiff = diff(expectedKorean, [...koreanPaths].sort());

/**
 * ④ 글로벌 전용 **굿즈** — 서비스가 아니므로 `serviceType`으로는 잴 수 없다.
 *
 * 대신 둘을 센다. 그 주소에 화면이 실제로 있는가(`routed`), 그리고 **서비스가 아닌가.**
 * 서비스가 이 목록으로 새어 들어오면 ②의 1:1 대조를 우회하는 뒷문이 된다.
 */
const goodsProblems = goodsPaths.flatMap((entry) => {
  const slug = entry.slice(1);
  const lines = [];
  if (!routed(slug)) lines.push(`${entry}에 해당하는 화면이 없다`);
  if (types.has(slug)) lines.push(`${entry}는 서비스다 — GLOBAL_ONLY_SERVICE_PATHS로 옮길 것`);
  return lines;
});

/**
 * ⑤ 합집합이 그 둘뿐인가.
 *
 * `GLOBAL_ONLY_PATHS`에 문자열을 직접 적으면 ②④ 어느 검사도 그 경로를 보지 않는다. 그 배열이
 * **펼침 둘로만** 이루어져 있음을 확인해 뒷문을 닫는다.
 */
const unionBody = /GLOBAL_ONLY_PATHS: string\[\] = \[([\s\S]*?)\]/.exec(routeSource)?.[1] ?? "";
const unionOk =
  unionBody.includes("...GLOBAL_ONLY_SERVICE_PATHS") &&
  unionBody.includes("...GLOBAL_ONLY_GOODS_PATHS") &&
  !unionBody.includes('"');

console.log(`\n  ${OWNER} 글로벌 전용 서비스 ${globalPaths.join(" ")} ${globalDiff.length ? "X" : "O"}`);
console.log(`  ${OWNER} 글로벌 전용 굿즈 ${goodsPaths.join(" ")} ${goodsProblems.length ? "X" : "O"}`);
console.log(`  ${OWNER} 한국어 전용 ${koreanPaths.join(" ")} ${koreanDiff.length ? "X" : "O"}`);
console.log(`  ${OWNER} GLOBAL_ONLY_PATHS = 서비스 + 굿즈 ${unionOk ? "O" : "X"}`);

if (globalDiff.length) {
  problems.push(`GLOBAL_ONLY_SERVICE_PATHS가 serviceType과 어긋난다: ${globalDiff.join(" ")}`);
}
for (const line of goodsProblems) problems.push(`GLOBAL_ONLY_GOODS_PATHS: ${line}`);
if (!unionOk) {
  problems.push(
    "GLOBAL_ONLY_PATHS가 두 목록의 합이 아니다 — 직접 적은 경로는 어느 검사도 보지 않는다.",
  );
}
if (koreanDiff.length) {
  problems.push(`KOREAN_ONLY_SERVICE_PATHS가 serviceType과 어긋난다: ${koreanDiff.join(" ")}`);
}

// ── 대조군 ─────────────────────────────────────────────────────────────────
//
// 판정이 살아 있는가. 어긋난 목록을 넣으면 잡아야 하고, 맞는 목록은 통과해야 한다.
const controlCaught = diff(expectedGlobal, ["/nonexistent-service"]).length > 0;
const controlPasses = diff(expectedGlobal, [...expectedGlobal]).length === 0;
/**
 * 굿즈 쪽 판정도 살아 있는가. **둘 다 센다** — 없는 화면을 「있다」고 하지 않는지, 서비스를
 * 서비스로 알아보는지. 한쪽만 보면 판정이 죽어도 초록이 나온다.
 */
const goodsControlCaught =
  !routed("nonexistent-goods") && types.has(expectedGlobal[0]?.slice(1) ?? "");
if (!controlCaught || !controlPasses || expectedGlobal.length === 0 || !goodsControlCaught) {
  console.error(
    `\n✗ 대조군 실패 — 어긋남 감지 ${controlCaught} · 일치 통과 ${controlPasses} · 굿즈 판정 ${goodsControlCaught} · 읽은 글로벌 서비스 ${expectedGlobal.length}개`,
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
