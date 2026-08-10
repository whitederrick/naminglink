#!/usr/bin/env node
/**
 * **화면 안의 링크가 전부 최종 주소를 가리키는가.**
 *
 * ## 왜 필요한가 (2026-08-10)
 *
 * 한국어 전용 화면을 단일 URL로 모으고 sitemap에서 로케일 변형을 뺐는데, **내부 링크는 옛
 * 주소를 계속 만들고 있었다.** `localePath()`가 경로 성격을 모른 채 무조건 로케일을 붙였기
 * 때문이다 — 홈의 `/ko/hanja-meaning`, 안내 허브의 한국어 전용 문서 여섯, 한자 목록의 초성
 * 링크 열셋이 전부 301을 거쳤다.
 *
 * 색인에서 지운 주소를 링크가 되살리면 「발견됨 - 색인 생성 안 됨」 더미가 줄지 않는다.
 * sitemap만 고치고 링크를 두면 **사이트가 스스로 옛 주소를 다시 알려 준다.**
 *
 * ## 무엇을 세는가
 *
 *   · 내부 링크의 3xx        0건이어야 한다
 *   · 내부 링크의 4xx·5xx     0건이어야 한다(끊긴 링크)
 *   · 내부 링크의 `?lang=`    0건이어야 한다(옛 주소 체계)
 *
 * **대조군:** 일부러 리다이렉트되는 주소를 넣어 잡히는지 본다. 안 잡히면 이 결과를 믿을 수 없다.
 *
 * 실행:
 *   node scripts/verify-internal-links.mjs --base http://localhost:3001
 *   node scripts/verify-internal-links.mjs                   (기본: 운영 주소)
 */

const args = process.argv.slice(2);
const baseArg = args.indexOf("--base");
const BASE = (baseArg >= 0 ? args[baseArg + 1] : "https://naming-link.com").replace(/\/$/, "");

const UA = { "user-agent": "Mozilla/5.0 (compatible; Googlebot/2.1)" };

async function getHtml(url) {
  const res = await fetch(url, { headers: UA, redirect: "follow" });
  return res.ok ? await res.text() : null;
}

async function statusOf(url) {
  try {
    const res = await fetch(url, { headers: UA, redirect: "manual" });
    return { status: res.status, location: res.headers.get("location") ?? "" };
  } catch (error) {
    return { status: 0, location: String(error?.message ?? error) };
  }
}

/** 훑을 화면. sitemap이 진실이고, 거기에 없지만 링크로 닿는 자리를 몇 개 더한다. */
async function seedPages() {
  const xml = (await getHtml(`${BASE}/sitemap.xml`)) ?? "";
  /**
   * **호스트를 `--base`로 갈아 끼운다.** sitemap의 `<loc>`는 절대 주소(운영 도메인)라, 그대로
   * 쓰면 로컬 빌드를 검사하라고 시켰는데 **운영을 훑는다.** 처음에 그렇게 만들어 「아직 배포
   * 안 된 운영」을 결함으로 18건 보고했다 — 검사기가 다른 사이트를 보고 있었다.
   */
  const fromSitemap = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (m) => `${BASE}${new URL(m[1]).pathname}`,
  );
  // 로케일별 첫 화면과 허브는 링크가 가장 많이 모이는 자리다. 언어 계열이 다른 것들을 고른다.
  const extra = ["/ko", "/en", "/ja", "/ru", "/ar", "/ko/guide", "/en/guide", "/guide/hanja"];
  return [...new Set([...fromSitemap, ...extra.map((p) => `${BASE}${p}`)])];
}

const internalHrefs = (html) =>
  [...html.matchAll(/href="(\/[^"]*)"/g)]
    .map((m) => m[1])
    // 앵커와 API·정적 자산은 화면 이동이 아니다.
    .filter((href) => !href.startsWith("//") && !href.startsWith("/api/"))
    .map((href) => href.split("#")[0])
    .filter(Boolean);

console.log("화면 안의 링크가 최종 주소를 가리키는가\n");
console.log(`  기준 ${BASE}`);

// ── 대조군 ─────────────────────────────────────────────────────────────────
//
// 리다이렉트되는 주소를 알아보는가. `/ko/guide/hanja` 는 한국어 전용이라 301이어야 한다.
const control = await statusOf(`${BASE}/ko/guide/hanja`);
if (control.status !== 301 && control.status !== 308) {
  console.error(
    `\n✗ 대조군 실패 — /ko/guide/hanja 가 ${control.status}다. 리다이렉트를 알아보지 못한다.`,
  );
  process.exit(1);
}
console.log(`  ✓ 대조군: 리다이렉트 주소를 ${control.status}로 알아본다\n`);

const pages = await seedPages();
if (pages.length === 0) {
  console.error("훑을 화면을 하나도 못 모았다. 검사 0건은 통과가 아니라 실패다.");
  process.exit(1);
}

/** 링크 → 그 링크를 담고 있던 화면들. 어디를 고쳐야 하는지 바로 알 수 있게 함께 모은다. */
const sources = new Map();
let scanned = 0;

for (const page of pages) {
  const html = await getHtml(page);
  if (!html) continue;
  scanned += 1;
  for (const href of internalHrefs(html)) {
    if (!sources.has(href)) sources.set(href, new Set());
    sources.get(href).add(page.replace(BASE, "") || "/");
  }
}

if (scanned === 0) {
  console.error("한 화면도 읽지 못했다. 검사 0건은 통과가 아니라 실패다.");
  process.exit(1);
}

const problems = [];
let checked = 0;

for (const [href, pagesWithIt] of sources) {
  if (href.includes("?lang=")) {
    problems.push(`옛 주소 체계 ?lang= — ${href}  (${[...pagesWithIt].slice(0, 2).join(", ")})`);
    continue;
  }
  const { status, location } = await statusOf(`${BASE}${href}`);
  checked += 1;
  if (status >= 300 && status < 400) {
    problems.push(
      `${status} → ${location.replace(BASE, "")} — ${href}  (${[...pagesWithIt].slice(0, 2).join(", ")})`,
    );
  } else if (status >= 400 || status === 0) {
    problems.push(`끊김 ${status} — ${href}  (${[...pagesWithIt].slice(0, 2).join(", ")})`);
  }
}

console.log(`  화면 ${scanned}개 · 서로 다른 내부 링크 ${sources.size}개 · 상태 확인 ${checked}개`);

if (problems.length) {
  console.error(`\n최종 주소가 아닌 링크 ${problems.length}건:`);
  for (const line of problems) console.error(`    ✗ ${line}`);
  console.error(
    "\n링크는 `lib/locale-path.ts`의 `localePath`가 만든다 — 경로 규칙은 `lib/route-locales.ts`.",
  );
  process.exit(1);
}

console.log(`\nALL PASS — 내부 링크 ${checked}개가 전부 최종 주소다(3xx·4xx·?lang= 0건).`);
// 성공도 못 박는다 — `fetch`의 keep-alive 소켓 때문에 그냥 두면 운영 주소에서 안 끝난다.
process.exit(0);
