#!/usr/bin/env node
/**
 * **선언한 주소가 전부 살아 있고 서로를 가리키는가.**
 *
 * canonical·hreflang·sitemap은 「이 주소가 정본이다」, 「이것이 그 언어판이다」라고 구글에
 * 말하는 자리다. 그 주소가 리다이렉트되거나 죽어 있으면 **선언이 거짓말**이 되고, 구글은
 * 선언을 무시하고 스스로 정본을 고른다 — 서치 콘솔의 「구글에서 사용자와 다른 표준을
 * 선택함」이 그렇게 나온다.
 *
 * 2026-08-10에 URL 구조를 바꿨다(루트만 감지 302, 하위 무접두는 영어로 308). 그때
 * **sitemap과 x-default가 함께 바뀌지 않으면** 리다이렉트되는 주소를 색인하라고 내미는 꼴이
 * 된다. 이 검사가 그것을 막는다.
 *
 * ## 세는 것
 *
 *   · sitemap의 모든 `<loc>`      3xx·4xx 0건
 *   · 각 화면의 canonical          3xx·4xx 0건
 *   · hreflang이 가리키는 주소     3xx·4xx 0건
 *   · hreflang 묶음의 상호 참조    A가 B를 가리키면 B도 A를 가리켜야 한다
 *
 * **대조군:** 리다이렉트되는 주소를 알아보는지 먼저 확인한다.
 *
 * 실행: node scripts/verify-declared-urls.mjs --base http://localhost:3001
 */

const args = process.argv.slice(2);
const baseArg = args.indexOf("--base");
const BASE = (baseArg >= 0 ? args[baseArg + 1] : "https://naming-link.com").replace(/\/$/, "");
const UA = { "user-agent": "Mozilla/5.0 (compatible; Googlebot/2.1)" };

/**
 * 선언은 절대 주소(운영 도메인)로 적힌다. 검사할 기준으로 갈아 끼운다.
 *
 * **쿼리를 반드시 함께 옮긴다** (2026-08-10). 예전에는 `pathname`만 옮겨서
 * `/en/global-to-korean?mode=transliteration` 의 선언을 검사할 때 모드가 사라졌다 — **다른
 * 화면을 검사하고 통과를 찍고 있었다.** 그 때문에 그 화면이 301되는 한국어판을 hreflang으로
 * 선언하는 결함을 이 검사기가 놓쳤다.
 */
const toBase = (url) => {
  const parsed = new URL(url);
  return `${BASE}${parsed.pathname}${parsed.search}`;
};

async function statusOf(url) {
  try {
    const res = await fetch(url, { headers: UA, redirect: "manual" });
    return res.status;
  } catch {
    return 0;
  }
}

async function htmlOf(url) {
  const res = await fetch(url, { headers: UA, redirect: "follow" });
  return res.ok ? await res.text() : null;
}

const problems = [];

console.log("선언한 주소가 살아 있고 서로를 가리키는가\n");
console.log(`  기준 ${BASE}`);

// ── 대조군 ─────────────────────────────────────────────────────────────────
const control = await statusOf(`${BASE}/about`);
if (control < 300 || control >= 400) {
  console.error(`\n✗ 대조군 실패 — /about 이 ${control}다. 리다이렉트를 알아보지 못한다.`);
  process.exit(1);
}
console.log(`  ✓ 대조군: 리다이렉트되는 주소를 ${control}로 알아본다\n`);

// ── ① sitemap의 <loc> ──────────────────────────────────────────────────────
const xml = (await htmlOf(`${BASE}/sitemap.xml`)) ?? "";
const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (locs.length === 0) {
  console.error("sitemap을 읽지 못했다. 검사 0건은 통과가 아니라 실패다.");
  process.exit(1);
}
let badLocs = 0;
for (const loc of locs) {
  const status = await statusOf(toBase(loc));
  if (status !== 200) {
    badLocs += 1;
    if (badLocs <= 5) problems.push(`sitemap <loc> ${status} — ${new URL(loc).pathname}`);
  }
}
console.log(`  ${badLocs ? "✗" : "✓"} sitemap <loc> ${locs.length}개 · 200이 아닌 것 ${badLocs}개`);
if (badLocs > 5) problems.push(`… 그 밖 ${badLocs - 5}건`);

// ── ②③④ canonical·hreflang ────────────────────────────────────────────────
//
// 전부 열면 요청이 수천 건이 된다. 언어 계열이 다른 표본으로 본다 — 선언을 만드는 코드는
// 한 곳이라(`lib/seo.ts`) 표본이 맞으면 나머지도 같은 규칙으로 나온다.
const SAMPLE = [
  "/en/about",
  "/ja/guide",
  "/ru/notice",
  "/ar/contact",
  "/en",
  "/guide/hanja/sa",
  /**
   * **쿼리로 갈리는 화면을 표본에 둔다.** 발음 표기 흐름은 `?mode=transliteration` 으로만
   * 갈리는데, 표본에 없어서 **경로 판정이 쿼리를 못 떼는 결함을 오래 못 봤다.**
   * sitemap 에는 없지만(쿼리 주소를 제출하지 않는다) 자기 canonical 을 갖는 화면이다.
   */
  "/en/global-to-korean?mode=transliteration",
];
let checkedPages = 0;

for (const path of SAMPLE) {
  const html = await htmlOf(`${BASE}${path}`);
  if (!html) continue;
  checkedPages += 1;

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  if (!canonical) {
    problems.push(`${path} — canonical 선언이 없다`);
  } else {
    const status = await statusOf(toBase(canonical));
    if (status !== 200) problems.push(`${path} — canonical ${status} → ${canonical}`);
  }

  const alternates = [
    ...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/gi),
  ].map((m) => ({ lang: m[1], href: m[2] }));

  for (const { lang, href } of alternates) {
    const status = await statusOf(toBase(href));
    if (status === 200) continue;

    /**
     * **예외는 하나뿐이다: 루트의 x-default.**
     *
     * 루트(`/`)는 접속 언어를 감지해 302로 보내는 자리이고, 구글은 그렇게 이동하는 홈을
     * x-default로 쓰는 구성을 명시적으로 허용한다. 그 하나만 통과시킨다.
     *
     * **넓게 뚫지 않는다.** 「x-default는 3xx여도 된다」로 두면 하위 경로의 x-default가
     * 리다이렉트되는 날 — 2026-08-10 이전이 정확히 그 상태였다 — 검사기가 조용히 넘긴다.
     * 하위 x-default는 영어판을 직접 가리켜야 하고, 그것은 200이어야 한다.
     */
    const isRootXDefault =
      lang === "x-default" && new URL(href).pathname === "/" && status === 302;
    if (isRootXDefault) continue;

    problems.push(`${path} — hreflang ${lang} ${status} → ${href}`);
  }

  /**
   * **상호 참조.** 구글은 A가 B를 언어판이라고 하는데 B가 A를 되가리키지 않으면 그 쌍을
   * 무시한다. 자기 자신이 아닌 언어판 하나를 골라 되돌아오는지 본다.
   */
  const partner = alternates.find(
    ({ lang, href }) => lang !== "x-default" && toBase(href) !== `${BASE}${path}`,
  );
  if (canonical && partner) {
    const partnerHtml = await htmlOf(toBase(partner.href));
    if (!partnerHtml) {
      problems.push(`${path} — ${partner.lang} 판을 읽지 못했다 (${partner.href})`);
    } else if (!partnerHtml.includes(`href="${canonical}"`)) {
      problems.push(`${path} — ${partner.lang} 판이 이 화면(${canonical})을 되가리키지 않는다`);
    }
  }
}

console.log(`  ${problems.length ? "✗" : "✓"} 표본 ${checkedPages}개 화면의 canonical·hreflang`);

if (checkedPages === 0) {
  console.error("\n한 화면도 읽지 못했다. 검사 0건은 통과가 아니라 실패다.");
  process.exit(1);
}

if (problems.length) {
  console.error(`\n어긋난 선언 ${problems.length}건:`);
  for (const line of problems) console.error(`    ✗ ${line}`);
  console.error("\n선언은 `lib/seo.ts`(canonical·hreflang)와 `app/sitemap.ts`가 만든다.");
  process.exit(1);
}

console.log(`\nALL PASS — sitemap ${locs.length}개와 표본 ${checkedPages}개의 선언이 전부 200이다.`);
