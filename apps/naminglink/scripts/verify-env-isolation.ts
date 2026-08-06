// 개발·운영 격리 규칙 스윕. 저장소 전체(모든 앱)를 훑어 규칙이 새는 곳을 찾는다.
// 실행: npx tsx scripts/verify-env-isolation.ts
//
// 개발(로컬)과 운영(Vercel)이 **같은 Supabase 프로젝트**를 본다. DB를 나누는 대신 세 규칙으로
// 가르는데, 규칙이 흩어지면 상품·서비스가 늘어날 때 조용히 빠진다. 그래서 사람이 아니라
// 이 스크립트가 지킨다.
//
//   ① 이용자·결제가 만드는 행(orders·premium_analysis_sessions)은 `order-writes.ts`의
//      래퍼로만 INSERT한다 — is_test를 찍는 자리가 한 곳이어야 한다.
//   ② 운영자 설정(product_settings·site_contents)을 쓰는 라우트는 개발 환경 차단이 있어야 한다.
//   ③ 운영 DB에 붙는 스크립트는 APP_ENV 가드가 있어야 한다.
//
// DB에도 같은 규칙이 걸려 있다(is_test는 not null·기본값 없음). 이 스윕은 그 앞단에서
// **배포 전에** 걸러 주는 역할이다.
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

import { APP_KEYS } from "@naminglink/core/apps";

const REPO_ROOT = path.resolve(__dirname, "../../..");
// **앱 목록을 여기 적지 않는다.** 사주링크가 빠진 채로 "규칙 스윕 ALL PASS"를 찍고 있었다
// (2026-08-06). 검사에서 빠진 앱은 통과한 것이 아니라 검사받지 않은 것이다.
const APPS = APP_KEYS.map((key) => `apps/${key}`);

type Finding = { file: string; rule: string; detail: string };

const findings: Finding[] = [];
let scanned = 0;

function walk(dir: string, out: string[] = []): string[] {
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const entry of entries) {
    if (entry === "node_modules" || entry === ".next" || entry === "dist") continue;
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.(ts|tsx|mjs|js)$/.test(entry)) out.push(full);
  }
  return out;
}

const rel = (file: string) => path.relative(REPO_ROOT, file).replaceAll("\\", "/");

// `.from("orders")` 와 `.insert(` 사이에 줄바꿈·공백이 있어도 잡는다.
const insertPattern =
  /\.from\(\s*["'](orders|premium_analysis_sessions)["']\s*\)\s*(?:\r?\n\s*)*\.insert\(/g;
const controlWritePattern =
  /\.from\(\s*["'](product_settings|site_contents)["']\s*\)\s*(?:\r?\n\s*)*\.(insert|update|upsert|delete)\(/g;
const orderTouchPattern = /\.from\(\s*["'](orders|premium_analysis_sessions)["']\s*\)/;

// 래퍼 자신은 당연히 직접 INSERT한다.
//
// **이 목록도 앱마다 손으로 적혀 있었다.** 사주링크 래퍼가 빠져 있어서, 앱 목록을 늘리자마자
// 멀쩡한 래퍼가 "직접 INSERT한다"고 잡혔다(2026-08-06). 앱 목록에서 만들어 낸다.
const INSERT_ALLOWED = new Set(APPS.map((app) => `${app}/src/lib/order-writes.ts`));

for (const app of APPS) {
  for (const file of walk(path.join(REPO_ROOT, app))) {
    const source = readFileSync(file, "utf8");
    const name = rel(file);
    const isScript = name.includes("/scripts/");
    scanned += 1;

    // ① 주문·세션 INSERT는 래퍼로만
    for (const match of source.matchAll(insertPattern)) {
      if (INSERT_ALLOWED.has(name)) continue;
      // 스크립트는 래퍼(server-only)를 못 쓰므로 is_test를 직접 찍는 것을 허용하되, 반드시 찍어야 한다.
      if (isScript && /is_test\s*:/.test(source)) continue;
      findings.push({
        file: name,
        rule: "① 주문·세션 INSERT",
        detail: isScript
          ? `${match[1]}에 직접 INSERT하면서 is_test를 찍지 않았습니다.`
          : `${match[1]}에 직접 INSERT합니다. lib/order-writes.ts의 insertOrder/insertPremiumSession을 쓰세요.`,
      });
    }

    // ② 운영자 설정 쓰기 라우트에는 개발 환경 차단이 있어야 한다
    if (controlWritePattern.test(source)) {
      controlWritePattern.lastIndex = 0;
      if (!source.includes("isDevEnvironment") && !source.includes("assertDevEnvironment")) {
        findings.push({
          file: name,
          rule: "② 운영자 설정 쓰기",
          detail:
            "product_settings·site_contents를 쓰면서 개발 환경 차단이 없습니다. " +
            "isDevEnvironment()로 막고, 로컬에서는 DEV_PRODUCTS_ENABLED로 읽기 값만 덮으세요.",
        });
      }
    }
    controlWritePattern.lastIndex = 0;

    // ③ 운영 DB에 붙는 스크립트는 APP_ENV 가드가 있어야 한다
    if (isScript && orderTouchPattern.test(source)) {
      if (!source.includes("APP_ENV") && !source.includes("assertDevEnvironment")) {
        findings.push({
          file: name,
          rule: "③ 스크립트 가드",
          detail:
            "주문 표를 건드리면서 개발 환경 가드가 없습니다. " +
            "assertDevEnvironment() 또는 APP_ENV 확인을 맨 앞에 두세요.",
        });
      }
    }
  }
}

if (findings.length === 0) {
  console.log(`개발·운영 격리 규칙 스윕: ALL PASS (파일 ${scanned}개 검사)`);
  process.exit(0);
}

console.error(`개발·운영 격리 규칙 위반 ${findings.length}건 (파일 ${scanned}개 검사):\n`);
for (const finding of findings) {
  console.error(`  [${finding.rule}] ${finding.file}`);
  console.error(`      ${finding.detail}`);
}
process.exit(1);
