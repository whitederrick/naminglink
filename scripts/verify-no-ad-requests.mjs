#!/usr/bin/env node
/**
 * **광고가 붙으면 안 되는 화면에서 구글 광고 요청이 실제로 0건인가.**
 *
 * ## 왜 정적 검사로는 부족한가 (2026-08-11)
 *
 * 서버 HTML만 세던 검사기는 이 자리를 **놓쳤다.** 로더는 HTML에 있었지만, 그 로더가 **런타임에
 * 스스로 만드는 자동 광고 자리**는 HTML 어디에도 없다. 실측에서 이렇게 나왔다:
 *
 *     /en/login    <ins class="adsbygoogle adsbygoogle-noablate">  1개 · aswift 프레임 1개
 *     /en/pricing  같음
 *
 * 발행한 콘텐츠가 없는 화면이 광고 화면이 되어 있었고, 그것이 2026-08-10 반려 사유와 같은
 * 자리다. **정적 HTML에 광고 코드가 없다」와 「광고 요청이 없다」는 다른 말이다.**
 *
 * ## 무엇을 어떻게 재는가
 *
 * 헤드리스 크롬을 띄우고 CDP로 붙어 `Network.requestWillBeSent`를 받는다. 화면마다 3초를
 * 기다린 뒤(스크립트가 늦게 붙는 경우가 있다) 구글 광고 호스트로 나간 요청을 센다.
 *
 * **대조군이 먼저다.** 광고 호스트로 요청을 일부러 한 번 만들어 탐지되는지 본다 — 그것이
 * 안 잡히면 아래의 「0건」은 아무 뜻이 없다(이 검사기가 존재하는 이유가 그 교훈이다).
 *
 * 크롬을 못 찾으면 「확인 못 함」으로 끝낸다. 통과로 세지 않는다.
 *
 * 실행:
 *   node scripts/verify-no-ad-requests.mjs --base http://localhost:3001
 *   node scripts/verify-no-ad-requests.mjs                  (기본: 운영 주소)
 *   CHROME_PATH=... 로 크롬 위치를 직접 줄 수 있다
 */

import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

const args = process.argv.slice(2);
const baseArg = args.indexOf("--base");
const BASE = (baseArg >= 0 ? args[baseArg + 1] : "https://naming-link.com").replace(/\/$/, "");

/**
 * 크롬 위치. `apps/naminglink/scripts/render-og-images.ts`가 쓰는 목록과 같은 자리를 본다 —
 * 그쪽을 고치면 여기도 함께 볼 것(둘 다 헤드리스 크롬이 필요한 검사·생성기다).
 */
const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

/** 광고 요청으로 세는 호스트. 하나만 세면 나머지로 샌다. */
const AD_HOSTS = [
  "pagead2.googlesyndication.com",
  "googleads.g.doubleclick.net",
  "securepubads.g.doubleclick.net",
  "tpc.googlesyndication.com",
  "partner.googleadservices.com",
  "adservice.google.com",
  "fundingchoicesmessages.google.com",
  "ep1.adtrafficquality.google",
  "ep2.adtrafficquality.google",
  "googletagservices.com",
];

const isAdRequest = (url) => AD_HOSTS.some((host) => url.includes(host));

/**
 * 광고가 붙으면 안 되는 화면.
 *
 * 결과 화면 배너는 **검수한 로케일의 진짜 결과**에만 붙는다. 여기 있는 것은 전부 그 조건이
 * 아닌 자리다 — 입력·안내·로그인·요금·주문·없는 주소, 그리고 세션 없는 결과 주소.
 */
const PATHS = [
  "",
  "/global-to-korean",
  "/guide",
  "/login",
  "/pricing",
  "/stamp-order",
  "/global-to-korean/result",
  "/no-such-page-for-404-check",
];

/** 로케일 표본. 검수 로케일(ko)·미검수 지원 언어(en·ja)·미지원 언어(kk·km)를 섞는다. */
const LOCALES = ["ko", "en", "ja", "kk", "km"];

/** 화면마다 기다리는 시간. 스크립트가 늦게 붙는 경우가 있어 즉시 재면 놓친다. */
const SETTLE_MS = 3000;

function findChrome() {
  return CHROME_CANDIDATES.find((candidate) => existsSync(candidate)) ?? null;
}

/** CDP 소켓 하나를 감싼다. 응답은 id로, 이벤트는 구독자에게. */
function cdpClient(socket) {
  let nextId = 0;
  const pending = new Map();
  const listeners = [];

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id !== undefined && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result);
      return;
    }
    for (const listener of listeners) listener(message);
  });

  return {
    send(method, params = {}, sessionId) {
      const id = (nextId += 1);
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
        socket.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
      });
    },
    on(listener) {
      listeners.push(listener);
    },
  };
}

async function waitForDebugger(port) {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (res.ok) return (await res.json()).webSocketDebuggerUrl;
    } catch {
      // 아직 안 떴다.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  return null;
}

const chrome = findChrome();
console.log("광고가 붙으면 안 되는 화면에서 구글 광고 요청이 0건인가\n");
console.log(`  기준 ${BASE}`);

if (!chrome) {
  console.error("\n확인 못 함 — 크롬을 찾지 못했다. CHROME_PATH로 위치를 줄 것.");
  console.error(`  찾아본 자리: ${CHROME_CANDIDATES.join(", ")}`);
  process.exit(1);
}
console.log(`  크롬 ${chrome}\n`);

const port = 9222 + Math.floor(process.pid % 500);
const profile = mkdtempSync(path.join(tmpdir(), "naminglink-adcheck-"));
const child = spawn(
  chrome,
  [
    "--headless=new",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
    "--no-first-run",
    "--no-default-browser-check",
    "--disable-gpu",
    "--disable-extensions",
    "about:blank",
  ],
  { stdio: "ignore" },
);

let exitCode = 1;
try {
  const wsUrl = await waitForDebugger(port);
  if (!wsUrl) {
    console.error("확인 못 함 — 크롬 디버깅 포트가 열리지 않았다.");
    process.exit(1);
  }

  const socket = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });
  const cdp = cdpClient(socket);

  const requests = [];
  cdp.on((message) => {
    if (message.method === "Network.requestWillBeSent") {
      requests.push(message.params.request.url);
    }
  });

  const { targetId } = await cdp.send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await cdp.send("Target.attachToTarget", { targetId, flatten: true });
  await cdp.send("Network.enable", {}, sessionId);

  async function load(url) {
    requests.length = 0;
    await cdp.send("Page.navigate", { url }, sessionId);
    await new Promise((resolve) => setTimeout(resolve, SETTLE_MS));
    return requests.filter(isAdRequest);
  }

  // ── 대조군 — 탐지기가 살아 있는가 ────────────────────────────────────────
  // 광고 호스트로 요청을 일부러 만들어 본다. 이것이 안 잡히면 아래의 「0건」은 아무 뜻이 없다.
  await load(`${BASE}/`);
  await cdp.send(
    "Runtime.evaluate",
    {
      expression: `fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js").catch(() => {})`,
      awaitPromise: false,
    },
    sessionId,
  );
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const controlCaught = requests.some(isAdRequest);
  console.log(`  ${controlCaught ? "✓" : "✗"} 대조군: 일부러 낸 광고 요청을 잡는다`);
  if (!controlCaught) {
    console.error("\n대조군 실패 — 이 검사를 믿을 수 없다.");
    process.exit(1);
  }

  // ── 본 검사 ──────────────────────────────────────────────────────────────
  const problems = [];
  let visited = 0;
  for (const locale of LOCALES) {
    const hits = [];
    for (const suffix of PATHS) {
      const url = `${BASE}/${locale}${suffix}`;
      const found = await load(url);
      visited += 1;
      if (found.length) {
        hits.push(`${suffix || "/"} → ${[...new Set(found.map((u) => new URL(u).host))].join(", ")}`);
      }
    }
    console.log(`  ${hits.length ? "✗" : "✓"} /${locale}  광고 요청 ${hits.length}건`);
    for (const hit of hits) problems.push(`/${locale}${hit}`);
  }

  console.log(`\n  화면 ${visited}곳을 열어 ${SETTLE_MS / 1000}초씩 기다렸다`);

  if (problems.length) {
    console.error(`\n광고 요청 ${problems.length}건 — 광고가 붙으면 안 되는 화면이다:`);
    for (const line of problems) console.error(`    ✗ ${line}`);
    console.error("\n로더를 부르는 자리는 `lib/adsense-loader.ts` 하나다. 전역 레이아웃으로 되돌리지 말 것.");
  } else {
    console.log(`\nALL PASS — 화면 ${visited}곳에서 구글 광고 요청이 0건이다.`);
    exitCode = 0;
  }

  await cdp.send("Target.closeTarget", { targetId });
  socket.close();
} finally {
  child.kill();
  try {
    rmSync(profile, { recursive: true, force: true });
  } catch {
    // 프로필 정리 실패가 판정을 바꾸지는 않는다.
  }
}

process.exit(exitCode);
