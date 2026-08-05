// 두 앱의 API 라우트가 같은 규칙을 지키는지 전수로 센다.
//
// **왜 만들었는가**(2026-08-04). 인연링크 라우트 아홉 중 **여덟에만** 본문 크기 제한이 있었다.
// 하루 전 감사는 다섯 개를 표본으로 보고 "전부 있다"고 적었다. 표본으로 끝냈기 때문에 빠진
// 하나를 못 봤고, 그 기록이 다음 사람을 안심시킬 뻔했다.
//
// 손으로 맞추면 반드시 하나가 빠진다. 앱이 둘이고 라우트가 46개라 더 그렇다. 그래서 사람이
// 아니라 이 파일이 센다.
//
// ## 무엇을 요구하는가
//
// **무인증으로 부를 수 있는 라우트**에만 요구한다 — 아무나 반복해서 던질 수 있는 자리라야
// 본문 크기와 호출 횟수가 방어가 된다. 운영자 토큰·로그인·결제사 서명·접근 토큰 뒤에 있는
// 라우트는 그 관문이 이미 같은 일을 한다(관리자가 큰 JSON을 보내는 것은 막을 위협이 아니다).
//
//   본문을 읽는가?  →  크기를 재는가
//   무인증인가?     →  호출 횟수를 세는가
//
// 예외는 이 파일에 **이유와 함께** 적는다. 목록에 없는 이탈은 실패다 — "어차피 괜찮은 자리"라는
// 판단이 사람 머릿속에만 있으면, 다음에 진짜로 안 괜찮은 자리가 같은 모양으로 들어와도
// 아무도 못 알아본다.
//
// 실행: 저장소 뿌리에서  node scripts/verify-route-guards.mjs

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

// **세 앱 전부.** 사주링크가 빠져 있었다(2026-08-06) — 앱을 늘리면서 검사기를 안 늘렸고,
// 그동안 이 검사기의 "ALL PASS"는 세 앱 중 둘에 대한 말이었다. 앱을 더할 때 여기도 더할 것.
const APPS = ["apps/naminglink", "apps/inyeonlink", "apps/sajulink"];

/** 본문을 실제로 읽는가. 안 읽으면 잴 것도 없다(예: unlock-ticket은 본문이 없다). */
function readsBody(source) {
  return /await\s+request\.(json|text|formData)\s*\(/.test(source);
}

/**
 * 본문 크기를 재는가. **이름이 아니라 하는 일로 찾는다** — 예전에 헬퍼 이름으로만 찾다가
 * "제한이 없다"는 없는 결함을 만든 적이 있다(`WORKLOG_2026-08-03-2.md` §5).
 */
function boundsBody(source) {
  if (/readJsonBodyLimited\s*\(/.test(source)) return true;
  return /await\s+request\.text\(\)/.test(source) && /\.length\s*>\s*/.test(source);
}

/** 무인증 요청을 세는 자리. */
function limitsRate(source) {
  return /checkRateLimit\s*\(/.test(source);
}

/** 관문 뒤에 있는가. 있으면 아무나 부를 수 있는 자리가 아니다. */
function isGated(source) {
  return [
    /requireAdmin\s*\(/,                    // 운영자 토큰
    /Webhook\.verify\s*\(/,                 // 결제사 서명
    /CRON_SECRET/,                          // 크론 시크릿
    /getAuthenticatedUser\s*\(/,            // 로그인 사용자
    /isPremiumTestRequestAllowed\s*\(/,     // 운영자 전용 테스트 경로
    /getAuthorizedPremiumSession\s*\(/,     // 결제 세션 접근 토큰
    /verifyPremiumReportToken\s*\(/,        // 리포트 접근 토큰
  ].some((pattern) => pattern.test(source));
}

/** 규칙에서 빼는 자리. **반드시 이유를 적는다.** key는 저장소 뿌리 기준 경로. */
const EXCEPTIONS = {
  // 지금은 비어 있다. 비어 있는 것이 정상이다 — 채우기 전에 정말 예외인지 먼저 의심할 것.
};

function routeFiles(dir, found = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) routeFiles(full, found);
    else if (entry === "route.ts") found.push(full);
  }
  return found;
}

const problems = [];
let bodyRoutes = 0;
let publicRoutes = 0;

for (const app of APPS) {
  for (const file of routeFiles(join(app, "src/app/api"))) {
    const key = relative(".", file).split("\\").join("/");
    const source = readFileSync(file, "utf8");
    if (!/export\s+async\s+function\s+(POST|PUT|PATCH)\s*\(/.test(source)) continue;
    const exception = EXCEPTIONS[key] ?? {};
    const gated = isGated(source);
    if (!gated) publicRoutes += 1;

    if (readsBody(source)) {
      bodyRoutes += 1;
      if (!gated && !exception.body && !boundsBody(source)) {
        problems.push(`${key}: 무인증인데 본문 크기를 재지 않는다`);
      }
    }
    if (!gated && !exception.rate && !limitsRate(source)) {
      problems.push(`${key}: 무인증인데 호출 횟수를 세지 않는다`);
    }
  }
}

/**
 * 대조군 — 검사가 실제로 잡는지 스스로 증명한다.
 *
 * `CONTROL_HISTORICAL`은 **실제로 있었던 코드**다(인연링크 analytics, 2026-08-04 이전).
 * 검사기가 이걸 못 잡으면 같은 결함이 다시 들어와도 통과한다.
 */
const CONTROL_HISTORICAL = `export async function POST(request: NextRequest) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false }, { status: 400 });
  if (!(await checkRateLimit(request, "analytics", { windowSeconds: 3600, limit: 120 }))) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }
}`;
const CONTROL_FIXED = `export async function POST(request: NextRequest) {
  if (!(await checkRateLimit(request, "analytics", { windowSeconds: 3600, limit: 120 }))) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }
  const raw = await request.text();
  if (raw.length > 4 * 1024) return NextResponse.json({ ok: false }, { status: 413 });
}`;
const CONTROL_NO_BODY = `export async function POST(request: NextRequest) {
  if (!(await checkRateLimit(request, "t", { windowSeconds: 60, limit: 5 }))) return;
  return NextResponse.json({ ok: true });
}`;

const controlFailures = [];
if (boundsBody(CONTROL_HISTORICAL)) controlFailures.push("실제로 있었던 결함을 통과시킨다");
if (!boundsBody(CONTROL_FIXED)) controlFailures.push("고친 코드를 잡는다");
if (readsBody(CONTROL_NO_BODY)) controlFailures.push("본문을 안 읽는 코드를 읽는다고 본다");
if (!limitsRate(CONTROL_HISTORICAL)) controlFailures.push("레이트리밋을 못 알아본다");
if (isGated(CONTROL_FIXED)) controlFailures.push("관문이 없는데 있다고 본다");

console.log("API 라우트 관문 전수 검사");
console.log(`  본문을 받는 라우트 ${bodyRoutes}개 · 그중 무인증 ${publicRoutes}개 · 예외 ${Object.keys(EXCEPTIONS).length}개`);

if (controlFailures.length) {
  console.log("\n대조군 실패 — 검사기 자체가 고장 났다:");
  for (const line of controlFailures) console.log(`  ✗ ${line}`);
  process.exit(1);
}
console.log("  ✓ 대조군: 실제로 있었던 결함을 잡고, 고친 코드는 통과시킨다");

if (bodyRoutes === 0 || publicRoutes === 0) {
  console.log("\n검사한 라우트가 0개다 — 경로가 바뀌었을 것이다. 통과로 보지 않는다.");
  process.exit(1);
}

if (problems.length) {
  console.log("\n이탈:");
  for (const line of problems) console.log(`  ✗ ${line}`);
  console.log("\n예외로 둘 자리라면 이 파일의 EXCEPTIONS에 **이유와 함께** 적을 것.");
  process.exit(1);
}

console.log("\nALL PASS — 무인증 라우트가 모두 본문 크기와 호출 횟수를 잰다.");
