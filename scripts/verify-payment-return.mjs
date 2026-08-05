// 세 앱의 **결제 복귀**가 같은 규칙을 지키는지 전수로 센다.
//
// ## 왜 만들었는가 (2026-08-06)
//
// 사주링크가 결제 직전 입력값을 브라우저에 맡겨 두기만 하고 **되돌리는 코드가 아예 없었다.**
// 상품을 켰다면 국내 결제는 승인되고 화면은 "결과를 읽을 수 없습니다"로 끝났다. 같은 날 인연
// 링크에서는 되돌리기는 있는데 **발급을 이어받는 자리가 없었다** — 돈은 나가고 파일은 안 나오며,
// 이용자가 버튼을 다시 누르면 새 주문이 하나 더 생긴다.
//
// 세 앱은 "같은 구조"지만 **결제 흐름은 공유 코드가 아니라 앱마다 사본**이다(`packages/core`에는
// 엔진·PDF·env만 있다). 그래서 고칠 자리가 언제나 세 벌이고, 베낀 것이 원본이 아니라 이미 한
// 세대 열화된 사본인 일도 생긴다 — 사주는 인연을 베꼈고, 인연은 네이밍의 세 패널 중 어느 것도
// 그대로 옮기지 않았다.
//
// 빠진 것이 **타입이 아니라 "있어야 할 코드"**라 tsc가 못 잡는다. 없는 코드는 컴파일러에게
// 보이지 않는다. 그래서 사람이 아니라 이 파일이 센다.
//
// ## 무엇을 요구하는가
//
//   토스 결제를 여는 화면인가?      →  돌아온 결제를 이어받는가  (`?payment=`를 읽는가)
//   입력을 프래그먼트로 나르는 앱?  →  맡기는 코드와 되돌리는 코드가 **둘 다** 있는가
//
// 두 번째가 앱 단위인 것은, 맡기는 쪽(결제 패널)과 되돌리는 쪽(결과 화면)이 서로 다른 파일에
// 있어도 되기 때문이다. 다만 **둘 중 하나만 있으면 결제가 조용히 깨진다** — 실제로 그랬다.
//
// 실행: 저장소 뿌리에서  node scripts/verify-payment-return.mjs

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

// **세 앱 전부.** 앱을 늘리면 여기에 더한다 — 빠뜨리면 그 앱만 규칙 밖에 남는다.
const APPS = ["apps/naminglink", "apps/inyeonlink", "apps/sajulink"];

/** 브라우저에서 도는 코드인가. 서버 라우트·헬퍼는 이 규칙의 대상이 아니다. */
function isClient(source) {
  return /^\s*["']use client["']/m.test(source);
}

/** 토스 결제창을 여는 화면인가. 여는 쪽이 곧 돌아오는 쪽이다. */
function startsTossPayment(source) {
  return /successUrl\s*:/.test(source);
}

/**
 * 돌아온 결제를 이어받는가.
 *
 * **이름이 아니라 하는 일로 찾는다** — 승인 라우트가 `?payment=`를 붙여 되돌리므로, 그 값을
 * 읽는 것이 이어받기의 최소 조건이다. 헬퍼 이름으로 찾으면 앱마다 이름이 달라 새는다.
 */
function resumesAfterReturn(source) {
  return /\.get\(\s*["']payment["']\s*\)/.test(source);
}

/** 입력값을 주소의 프래그먼트로 나르는 앱인가. 그렇다면 결제창을 거치며 그것이 사라진다. */
function carriesInputInFragment(source) {
  return /decodeFragment\s*\(|useResultFragment\s*\(/.test(source);
}

/** 결제 직전에 프래그먼트를 맡기는가. */
function remembersFragment(source) {
  return /rememberForRedirect\s*\(/.test(source) ||
    /sessionStorage\.setItem\(\s*[^)]*pendingPayment/.test(source);
}

/** 돌아와서 프래그먼트를 되돌리는가. */
function restoresFragment(source) {
  return /restoreFragmentAfterPayment\s*\(/.test(source) ||
    /sessionStorage\.getItem\(\s*[^)]*pendingPayment/.test(source);
}

/** 규칙에서 빼는 자리. **반드시 이유를 적는다.** key는 저장소 뿌리 기준 경로. */
const EXCEPTIONS = {
  // 지금은 비어 있다. 비어 있는 것이 정상이다 — 채우기 전에 정말 예외인지 먼저 의심할 것.
};

function sourceFiles(dir, found = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) sourceFiles(full, found);
    else if (/\.(tsx?|mjs)$/.test(entry)) found.push(full);
  }
  return found;
}

const problems = [];
let starters = 0;
let fragmentApps = 0;

for (const app of APPS) {
  const files = sourceFiles(join(app, "src"));
  let appRemembers = false;
  let appRestores = false;
  let appUsesFragment = false;

  for (const file of files) {
    const key = relative(".", file).split("\\").join("/");
    const source = readFileSync(file, "utf8");

    if (carriesInputInFragment(source)) appUsesFragment = true;
    if (isClient(source) && remembersFragment(source)) appRemembers = true;
    if (isClient(source) && restoresFragment(source)) appRestores = true;

    if (!isClient(source) || !startsTossPayment(source)) continue;
    starters += 1;
    if (EXCEPTIONS[key]?.resume) continue;
    if (!resumesAfterReturn(source)) {
      problems.push(`${key}: 토스 결제를 여는데 돌아온 결제를 이어받지 않는다 (돈은 나가고 파일은 안 나온다)`);
    }
  }

  if (!appUsesFragment) continue;
  fragmentApps += 1;
  if (appRemembers && !appRestores) {
    problems.push(`${app}: 프래그먼트를 맡기기만 하고 되돌리는 코드가 없다 (결제 후 결과를 못 읽는다)`);
  }
  if (appRestores && !appRemembers) {
    problems.push(`${app}: 되돌리는 코드는 있는데 맡기는 코드가 없다 (되돌릴 것이 저장되지 않는다)`);
  }
}

/**
 * 대조군 — 검사가 실제로 잡는지 스스로 증명한다.
 *
 * `CONTROL_HISTORICAL`은 **실제로 있었던 코드**다(사주링크 `ReportPurchasePanel`, 2026-08-06
 * 이전). 맡기기는 있고 이어받기가 없다. 검사기가 이걸 못 잡으면 같은 결함이 다시 들어와도 통과한다.
 */
const CONTROL_HISTORICAL = `"use client";
function rememberForRedirect(orderId) {
  window.sessionStorage.setItem(PENDING_KEY, JSON.stringify({ orderId }));
}
await payment.requestPayment({
  successUrl: returnTo.toString(),
  failUrl: failTo.toString(),
});`;
const CONTROL_FIXED = `"use client";
function rememberForRedirect(orderId) {
  window.sessionStorage.setItem(PENDING_KEY, JSON.stringify({ orderId }));
}
const outcome = params.get("payment");
await payment.requestPayment({ successUrl: returnTo.toString() });`;
/** 서버 승인 라우트. 여는 화면이 아니므로 이 규칙의 대상이 아니다. */
const CONTROL_SERVER = `const RESULT_PATH = "/reading/result";
export async function GET(request) {
  const successUrl = request.nextUrl.searchParams.get("successUrl");
}`;

const controlFailures = [];
if (resumesAfterReturn(CONTROL_HISTORICAL)) controlFailures.push("실제로 있었던 결함을 통과시킨다");
if (!resumesAfterReturn(CONTROL_FIXED)) controlFailures.push("고친 코드를 잡는다");
if (!startsTossPayment(CONTROL_HISTORICAL)) controlFailures.push("토스를 여는 화면을 못 알아본다");
if (isClient(CONTROL_SERVER)) controlFailures.push("서버 코드를 브라우저 코드로 본다");
if (!remembersFragment(CONTROL_HISTORICAL)) controlFailures.push("맡기는 코드를 못 알아본다");
if (restoresFragment(CONTROL_HISTORICAL)) controlFailures.push("되돌리는 코드가 없는데 있다고 본다");

console.log("결제 복귀 전수 검사");
console.log(`  토스를 여는 화면 ${starters}개 · 프래그먼트로 입력을 나르는 앱 ${fragmentApps}개 · 예외 ${Object.keys(EXCEPTIONS).length}개`);

if (controlFailures.length) {
  console.log("\n대조군 실패 — 검사기 자체가 고장 났다:");
  for (const line of controlFailures) console.log(`  ✗ ${line}`);
  process.exit(1);
}
console.log("  ✓ 대조군: 실제로 있었던 결함을 잡고, 고친 코드는 통과시킨다");

// 검사한 것이 0개면 통과가 아니다 — 경로나 표현이 바뀌어 아무것도 안 본 것이다.
if (starters === 0 || fragmentApps === 0) {
  console.log("\n검사한 화면이 0개다 — 경로가 바뀌었을 것이다. 통과로 보지 않는다.");
  process.exit(1);
}

if (problems.length) {
  console.log("\n결제 복귀가 빠진 자리:");
  for (const line of problems) console.log(`  ✗ ${line}`);
  process.exit(1);
}

console.log("  ✓ 여는 화면마다 이어받기가 있고, 맡기기와 되돌리기가 짝을 이룬다");
