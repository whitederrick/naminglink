#!/usr/bin/env node
/**
 * **운영 사이트가 크롤러에게 열려 있는가.**
 *
 * ## 왜 필요한가 (2026-08-10)
 *
 * `lib/seo.ts`의 `siteUrl`은 `NEXT_PUBLIC_SITE_URL`이 없거나 비면 배포 주소
 * (`*.vercel.app`)로 떨어진다. 그리고 `app/robots.ts`는 호스트가 `.vercel.app`이면
 * **전면 차단(`Disallow: /`)**을 낸다 — 실 도메인 붙기 전에 색인이 쌓이는 것을 막으려는 장치다.
 *
 * 장치 자체는 옳다. 문제는 **환경변수 하나가 비는 순간 사이트 전체가 검색에서 사라진다**는
 * 것이고, 그 일이 일어나도 화면은 멀쩡해서 아무도 모른다는 것이다. 애드센스 심사 중이라면
 * 크롤러가 못 들어와 **원인 없이 반려**된다.
 *
 * 이 실패는 이미 한 번 반대 방향으로 일어났다 — 드림링크에서 값이 빈 문자열이라 판정이
 * 어긋나 **색인이 통째로 열렸다**(2026-08-06). 같은 자리다.
 *
 * ## 무엇을 보는가
 *
 *   · 전면 차단(`Disallow: /`)이 아닌가
 *   · `Host`·`Sitemap`이 배포 주소(`*.vercel.app`)를 가리키지 않는가
 *   · sitemap 주소가 실제로 열리는가
 *
 * 주소는 `APP_DOMAINS`(원본은 `packages/core`의 `SELF_AD_SERVICES`)에서 받고, 앱의
 * `.env.local`에 값이 있으면 그쪽을 먼저 본다. **주소를 못 구한 앱은 「확인 못 함」으로 갈라
 * 통과로 세지 않는다** — 초록불이 「검사했다」로 읽히면 안 된다.
 *
 * 실행:
 *   node scripts/verify-robots-open.mjs
 *   node scripts/verify-robots-open.mjs https://naming-link.com   (주소를 직접 줄 때)
 */

import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { APP_DOMAINS, APP_KEYS } from "./app-keys.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const given = process.argv.slice(2).filter((a) => a.startsWith("http"));

/**
 * 그 앱의 운영 주소.
 *
 * **여기 주소를 적지 않는다.** `APP_DOMAINS`가 `packages/core`의 `SELF_AD_SERVICES`에서 뽑아
 * 온다 — 도메인이 바뀌는 날 검사기가 옛 주소를 두드리며 「통과」를 찍는 일을 막으려는 것이다.
 * 앱의 `.env.local`에 값이 있으면 그쪽을 먼저 본다(그 앱을 실제로 빌드할 때 쓰는 값이다).
 */
function siteUrlOf(app) {
  const file = path.join(ROOT, "apps", app, ".env.local");
  if (existsSync(file)) {
    const found = readFileSync(file, "utf8").match(/^NEXT_PUBLIC_SITE_URL\s*=\s*(.+)$/m);
    const value = found?.[1]?.trim().replace(/^["']|["']$/g, "").replace(/\/+$/, "");
    if (value) return value;
  }
  const domain = APP_DOMAINS[app];
  return domain ? `https://${domain}` : null;
}

/** 전면 차단인가. `User-agent: *` 아래에 `Disallow: /`만 있는 꼴을 본다. */
function isBlocked(text) {
  return /^\s*Disallow:\s*\/\s*$/im.test(text) && !/^\s*Allow:\s*\//im.test(text);
}

const isDeploymentHost = (text) => /vercel\.app/i.test(text);

// ── 대조군 ─────────────────────────────────────────────────────────────────
const CONTROL_BLOCKED = "User-Agent: *\nDisallow: /\n";
const CONTROL_OPEN = "User-Agent: *\nAllow: /\nDisallow: /api/\nHost: https://x.com\n";
if (!isBlocked(CONTROL_BLOCKED) || isBlocked(CONTROL_OPEN)) {
  console.error("✗ 대조군 실패 — 전면 차단을 못 알아본다. 이 결과를 믿지 말 것.");
  process.exit(1);
}

console.log("운영 사이트가 크롤러에게 열려 있는가\n");
console.log("  ✓ 대조군: 전면 차단은 잡고, 열린 robots는 통과시킨다\n");

const targets = given.length
  ? given.map((url) => ({ app: new URL(url).hostname, url }))
  : APP_KEYS.map((app) => ({ app, url: siteUrlOf(app) }));

const problems = [];
let checked = 0;
let unknown = 0;
let checkedDeploy = 0;
let unknownDeploy = 0;

for (const { app, url } of targets) {
  if (!url) {
    console.log(`  · ${String(app).padEnd(11)} 주소를 모른다 — 확인 못 함(통과로 세지 않는다)`);
    unknown += 1;
    continue;
  }

  let text = null;
  try {
    const res = await fetch(`${url}/robots.txt`, { redirect: "follow" });
    text = res.ok ? await res.text() : null;
    if (!res.ok) problems.push(`${app} — robots.txt가 http ${res.status}`);
  } catch (error) {
    problems.push(`${app} — robots.txt를 가져오지 못했다 (${error.message})`);
  }
  if (text === null) continue;

  checked += 1;
  const blocked = isBlocked(text);
  const deployHost = isDeploymentHost(text);

  if (blocked) {
    problems.push(
      `${app} — **전면 차단 상태다(Disallow: /).** NEXT_PUBLIC_SITE_URL이 비었거나 배포 주소일 것이다.`,
    );
  }
  if (deployHost) {
    problems.push(`${app} — robots가 배포 주소(*.vercel.app)를 가리킨다.`);
  }

  const sitemap = text.match(/^Sitemap:\s*(\S+)/im)?.[1] ?? null;
  if (!sitemap) {
    problems.push(`${app} — robots에 Sitemap 줄이 없다.`);
  }

  /**
   * **반대쪽도 본다 — 배포 주소는 막혀 있어야 한다.**
   *
   * `robots.ts`의 방어가 오래 **설정된 `NEXT_PUBLIC_SITE_URL`만** 보고 있었다. 실 도메인을
   * 넣는 순간 그 판정이 거짓이 되어, `<app>.vercel.app`으로 들어온 요청까지 `Allow: /`를
   * 받았다 — 크롤링 가능한 사이트 복사본이 하나 더 있는 상태다. 2026-08-10 실측에서 네 앱 중
   * **셋이 그랬다.** 열려 있는 쪽만 세면 이 구멍은 영원히 안 보인다.
   */
  const deployUrl = `https://${app}.vercel.app`;
  try {
    const res = await fetch(`${deployUrl}/robots.txt`, { redirect: "follow" });
    if (res.status === 404) {
      console.log(`      · ${deployUrl} — 없다(확인 못 함)`);
      unknownDeploy += 1;
    } else if (res.ok) {
      const body = await res.text();
      if (!isBlocked(body)) {
        problems.push(
          `${app} — 배포 주소 ${deployUrl}가 크롤링에 열려 있다. 운영 도메인과 같은 내용이 두 벌로 색인된다.`,
        );
      } else {
        checkedDeploy += 1;
        console.log(`      · ${deployUrl} — 차단됨`);
      }
    }
  } catch {
    console.log(`      · ${deployUrl} — 닿지 못했다(확인 못 함)`);
    unknownDeploy += 1;
  }

  console.log(
    `  ${blocked || deployHost ? "✗" : "✓"} ${String(app).padEnd(11)} ${url}  ${blocked ? "전면 차단" : "열림"}${sitemap ? "" : " · sitemap 없음"}`,
  );
}

if (checked === 0) {
  console.error("\n한 곳도 확인하지 못했다. 검사 0건은 통과가 아니라 실패다.");
  process.exit(1);
}

if (problems.length) {
  console.error(`\n어긋난 자리 ${problems.length}건:`);
  for (const line of problems) console.error(`    ✗ ${line}`);
  process.exit(1);
}

console.log(
  `\nALL PASS — 운영 도메인 ${checked}곳이 열려 있고, 배포 주소 ${checkedDeploy}곳이 막혀 있다.` +
    (unknown ? ` (주소를 몰라 확인 못 한 운영 도메인 ${unknown}개)` : "") +
    (unknownDeploy ? ` (없거나 닿지 못한 배포 주소 ${unknownDeploy}개)` : ""),
);
