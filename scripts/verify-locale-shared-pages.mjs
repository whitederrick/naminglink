#!/usr/bin/env node
/**
 * 로케일 주소가 여럿인데 **본문이 같은** 화면을 찾는다.
 *
 * 2026-08-08 서치 콘솔이 `/{언어}/guide/hanja/{초성}`을 「중복 페이지, 구글에서 사용자와 다른
 * 표준을 선택함」으로 잡았고, 애드센스는 사이트 전체를 「가치가 별로 없는 콘텐츠」로 판정했다.
 * 원인은 한 화면이 24개 주소로 열려 있는데 페이지의 약 95%가 24벌 모두 같은 글자였던 것이다.
 *
 * 정적 grep으로는 못 잡는다(오탐만 난다 — 한국어 리터럴은 대개 주석이다). **렌더된 글을 겨룬다.**
 *
 * 판정: 두 로케일의 본문이 임계값 이상으로 같은데 hreflang을 싣고 있으면 결함이다.
 *   hreflang = 「각자 색인되는 언어판이 여럿이다」는 선언이므로, 같은 글에 그것을 달면 거짓말이다.
 *   같은 글이어도 canonical을 한 주소로 모으고 hreflang을 뺐으면 통과한다.
 *
 * 쓰기:
 *   node scripts/verify-locale-shared-pages.mjs                 # 운영 주소
 *   node scripts/verify-locale-shared-pages.mjs --base http://localhost:3001
 *   node scripts/verify-locale-shared-pages.mjs --report        # 판정 없이 유사도 분포만
 */

const args = process.argv.slice(2);
const baseArg = args.indexOf("--base");
const BASE = (baseArg >= 0 ? args[baseArg + 1] : "https://naming-link.com").replace(/\/$/, "");
const REPORT_ONLY = args.includes("--report");

/**
 * 임계값. **분포를 보고 한 번 정한 값이고, 통과시키려고 옮기지 않는다.**
 * 2026-08-10 실측에서 제대로 번역된 문서는 0.0x~0.2 대, 한국어 한 벌 화면은 0.9 위였다.
 */
const SAME_THRESHOLD = 0.75;

/** 비교에 쓸 두 로케일. 문자 계열이 아예 달라야 「번역됐다」가 분명해진다. */
const LOCALE_A = "ko";
const LOCALE_B = "ru";

/**
 * 대조군. **번역이 끝났다고 아는 문서**다 — 이것이 「같다」로 나오면 검사기가 고장 난 것이지
 * 사이트가 잘못된 것이 아니다. 대조군 없이 초록불을 믿지 않는다.
 *
 * 처음에는 `/guide/hanja-basics`를 썼는데 **그 문서가 한국어 전용이 되면서 대조군이 사라졌다.**
 * 대조군은 「23개 언어로 남기로 한 것」 중에서 골라야 한다.
 */
const CONTROL_PATH = "/about";

async function fetchText(url, redirect = "follow") {
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" },
    redirect,
  });
  const html = redirect === "manual" ? "" : await res.text();
  return { status: res.status, html, location: res.headers.get("location") ?? "" };
}

function visibleText(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#?\w+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function hasHreflang(html) {
  return /rel="alternate"[^>]*hreflang=/i.test(html) || /hreflang=[^>]*rel="alternate"/i.test(html);
}

/**
 * 겹치는 정도. 낱말 다중집합의 교집합을 큰 쪽 크기로 나눈다.
 * 한국어·러시아어처럼 문자 계열이 다르면 제대로 번역된 글은 낮게 나오고, 번역이 안 된 표는
 * 낱말이 그대로 살아 있어 높게 나온다.
 */
function similarity(a, b) {
  const count = (s) => {
    const m = new Map();
    for (const w of s.split(" ")) if (w) m.set(w, (m.get(w) ?? 0) + 1);
    return m;
  };
  const ma = count(a);
  const mb = count(b);
  const sizeA = [...ma.values()].reduce((x, y) => x + y, 0);
  const sizeB = [...mb.values()].reduce((x, y) => x + y, 0);
  if (!sizeA || !sizeB) return 1; // 한쪽이 비면 비교가 성립하지 않는다 — 결함으로 센다
  let shared = 0;
  for (const [w, n] of ma) shared += Math.min(n, mb.get(w) ?? 0);
  return shared / Math.max(sizeA, sizeB);
}

/** sitemap의 로케일 없는 경로 + sitemap에 없지만 색인이 열려 있는 경로를 함께 본다. */
async function collectPaths() {
  const { html } = await fetchText(`${BASE}/sitemap.xml`);
  const paths = new Set();
  for (const m of html.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const u = new URL(m[1]);
    const p = u.pathname.replace(/^\/[a-z]{2,3}(?=\/|$)/, "") || "/";
    paths.add(p);
  }

  // sitemap에 없는 것이 가장 위험하다 — 아무도 세지 않는데 색인은 열려 있다.
  const hub = await fetchText(`${BASE}/${LOCALE_A}/guide/hanja`);
  for (const m of hub.html.matchAll(/href="\/[a-z]{2,3}(\/guide\/hanja\/[a-z]+)"/g)) {
    paths.add(m[1]);
  }
  return [...paths].sort();
}

const localeUrl = (path, locale) => `${BASE}/${locale}${path === "/" ? "" : path}`;

async function measure(path) {
  /**
   * **로케일 주소가 301이면 그것으로 끝이다.**
   *
   * 한국어 전용 화면은 로케일 주소를 두지 않는다(`lib/route-locales.ts`). 리다이렉트를
   * 따라가 버리면 두 로케일이 같은 문서로 도착해 「본문이 같다」는 결함으로 잡히는데, 그건
   * 결함이 아니라 **의도한 상태**다. 따라가기 전에 상태 코드를 먼저 본다.
   */
  const [ra, rb] = await Promise.all([
    fetchText(localeUrl(path, LOCALE_A), "manual"),
    fetchText(localeUrl(path, LOCALE_B), "manual"),
  ]);
  if (ra.status === 301 && rb.status === 301) {
    return { path, pooled: true, target: rb.location };
  }

  /**
   * **한쪽만 301인 것은 글로벌 전용 화면의 모양이다** — 한국어 주소만 영어로 보낸다.
   *
   * 처음에는 이것을 「건너뜀」으로 적었는데, 그러면 오늘 새로 막은 바로 그 경로가 **조용히
   * 검사에서 빠진다.** 건너뛴 줄은 초록불 사이에 섞여 「검사됐다」로 읽힌다. 모양을 알아보고
   * **판정한다** — 리다이렉트가 같은 경로를 지키는지까지 본다.
   */
  if (ra.status === 301 && rb.status === 200) {
    const keepsPath = ra.location.includes(path);
    return keepsPath
      ? { path, koBlocked: true, target: ra.location }
      : { path, skipped: `${LOCALE_A} 리다이렉트가 경로를 잃었다 → ${ra.location}` };
  }
  if (rb.status === 301) {
    return { path, skipped: `${LOCALE_B}만 301 (${LOCALE_A}=${ra.status})` };
  }

  const [a, b] = await Promise.all([
    fetchText(localeUrl(path, LOCALE_A)),
    fetchText(localeUrl(path, LOCALE_B)),
  ]);
  if (a.status !== 200 || b.status !== 200) {
    return { path, skipped: `http ${a.status}/${b.status}` };
  }
  return {
    path,
    score: similarity(visibleText(a.html), visibleText(b.html)),
    hreflang: hasHreflang(b.html),
  };
}

const paths = await collectPaths();
if (paths.length === 0) {
  console.error("경로를 하나도 못 모았다 — sitemap을 못 읽었거나 주소가 틀렸다. 실패로 센다.");
  process.exit(1);
}

const rows = [];
for (const path of paths) {
  rows.push(await measure(path));
}

const measured = rows.filter((r) => r.score !== undefined);
if (measured.length === 0) {
  console.error("한 경로도 재지 못했다. 검사 0건은 통과가 아니라 실패다.");
  process.exit(1);
}

rows.sort((x, y) => (y.score ?? -1) - (x.score ?? -1));
console.log(`기준 ${BASE} · ${LOCALE_A} vs ${LOCALE_B} · 경로 ${paths.length}개\n`);
for (const r of rows) {
  if (r.pooled) {
    console.log(`  한 벌   301   ${r.path}`);
    continue;
  }
  if (r.koBlocked) {
    console.log(`  ko없음  301   ${r.path}  → ${r.target}`);
    continue;
  }
  if (r.skipped) {
    console.log(`  건너뜀  ${r.path}  (${r.skipped})`);
    continue;
  }
  const flag = r.score >= SAME_THRESHOLD ? (r.hreflang ? "결함" : "모음 ") : "    ";
  console.log(
    `  ${flag}  ${r.score.toFixed(3)}  hreflang=${r.hreflang ? "있음" : "없음"}  ${r.path}`,
  );
}

const control = measured.find((r) => r.path === CONTROL_PATH);
if (!control) {
  console.error(`\n대조군 ${CONTROL_PATH} 을 재지 못했다. 검사기를 믿을 수 없다.`);
  process.exit(1);
}
if (control.score >= SAME_THRESHOLD) {
  console.error(
    `\n대조군 ${CONTROL_PATH} 이 ${control.score.toFixed(3)} 로 「같다」고 나왔다.\n` +
      `번역이 끝났다고 아는 문서다 — 사이트가 아니라 검사기가 고장 났다.`,
  );
  process.exit(1);
}
console.log(`\n대조군 ${CONTROL_PATH} = ${control.score.toFixed(3)} (다름) — 검사기는 정상이다.`);

if (REPORT_ONLY) process.exit(0);

const broken = measured.filter((r) => r.score >= SAME_THRESHOLD && r.hreflang);
if (broken.length > 0) {
  console.error(
    `\n결함 ${broken.length}건 — 본문이 같은데 hreflang으로 언어판이 여럿이라고 선언한다:\n` +
      broken.map((r) => `  ${r.path}  (${r.score.toFixed(3)})`).join("\n") +
      `\n\n번역하거나, 그 경로를 \`lib/route-locales.ts\`의 갈래에 넣어 한 주소로 모을 것` +
      `(canonical 한 벌 · hreflang 없음 · 로케일 주소는 301).` +
      `\n**아직 배포하지 않았다면 여기가 빨간불인 것이 정상이다** — 이 검사는 기본으로 운영 주소를 본다.` +
      `\n  빌드 결과물로 재려면: node scripts/verify-locale-shared-pages.mjs --base http://localhost:PORT`,
  );
  process.exit(1);
}

const redirected = rows.filter((r) => r.pooled).length;
const koBlocked = rows.filter((r) => r.koBlocked).length;
const sameButPooled = measured.filter((r) => r.score >= SAME_THRESHOLD).length;
console.log(
  `통과 — 로케일 주소를 두지 않는 화면 ${redirected}건(301), ` +
    `한국어만 막은 화면 ${koBlocked}건, ` +
    `본문이 같지만 canonical로 모은 화면 ${sameButPooled}건, ` +
    `언어판이 각자 사는 화면 ${measured.length - sameButPooled}건.`,
);
