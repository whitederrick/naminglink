#!/usr/bin/env node
/**
 * **지원하지 않는 언어의 화면에 구글 광고 코드가 없는가.**
 *
 * ## 왜 필요한가 (2026-08-10)
 *
 * 구글 게시자 정책:
 *
 * > "Placing Google ad code on pages with content primarily in an unsupported language is not
 * > permitted by the Google Publisher Policies."
 * > — support.google.com/adsense/answer/9727
 *
 * 지원 목록 49개에 **카자흐어·크메르어·몽골어·우즈베크어가 없다.** 그런데 `layout.tsx`가
 * 퍼블리셔 ID만 보고 로더를 전 페이지에 붙이고 있었다 — 그 네 언어 화면에도 광고 코드가
 * 실렸다. **광고가 채워지는지와 무관하게** 코드를 두는 것 자체가 위반이다.
 *
 * ## 왜 대조군이 있어야 하는가
 *
 * 「미지원 로케일에 0건」만 세면 **광고를 통째로 꺼도 초록불**이다. 지원 로케일에는 코드가
 * 있어야 한다는 것을 함께 세야 이 검사가 무엇을 재는지가 성립한다.
 *
 * 다만 퍼블리셔 ID가 없는 환경(다크 런치·미리보기)에서는 지원 로케일에도 코드가 없는 것이
 * 정상이다. 그때는 **「확인 못 함」으로 갈라** 통과로 세지 않는다.
 *
 * 실행:
 *   node scripts/verify-ads-locale-policy.mjs --base http://localhost:3001
 *   node scripts/verify-ads-locale-policy.mjs                 (기본: 운영 주소)
 */

const args = process.argv.slice(2);
const baseArg = args.indexOf("--base");
const BASE = (baseArg >= 0 ? args[baseArg + 1] : "https://naming-link.com").replace(/\/$/, "");

/** 구글이 지원하지 않는 로케일. `lib/ads.ts`의 목록과 반대편이다. */
const UNSUPPORTED = ["kk", "km", "mn", "uz"];
/** 대조군. 지원 로케일이고, 광고 코드가 **있어야** 한다. */
const SUPPORTED_SAMPLE = ["en", "ja", "ru"];

/**
 * 광고 코드로 세는 것들. 로더·유닛·GAM을 모두 본다 — 하나만 세면 나머지로 샌다.
 */
const AD_MARKERS = [
  ["adsbygoogle.js 로더", /pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js/],
  ["adsbygoogle 유닛", /class="[^"]*\badsbygoogle\b/],
  ["ca-pub 클라이언트", /data-ad-client="ca-pub-/],
  ["GAM gpt.js", /securepubads\.g\.doubleclick\.net\/tag\/js\/gpt\.js/],
  ["광고 자리 표시", /data-ad-placement=/],
];

/** 광고가 붙을 수 있는 화면들. 결과 화면은 결과가 없으면 광고가 없는 것이 정상이라 뺀다. */
const PATHS = ["", "/about", "/guide", "/global-to-korean", "/notice", "/contact"];

async function markersIn(url) {
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 (compatible; Googlebot/2.1)" },
    redirect: "follow",
  });
  if (!res.ok) return { status: res.status, found: [] };
  const html = await res.text();
  return {
    status: res.status,
    found: AD_MARKERS.filter(([, re]) => re.test(html)).map(([name]) => name),
  };
}

console.log("지원하지 않는 언어의 화면에 구글 광고 코드가 없는가\n");
console.log(`  기준 ${BASE}\n`);

const problems = [];
let checked = 0;

// ── ① 미지원 로케일 — 0건이어야 한다 ───────────────────────────────────────
for (const locale of UNSUPPORTED) {
  const hits = [];
  for (const path of PATHS) {
    const { status, found } = await markersIn(`${BASE}/${locale}${path}`);
    if (status !== 200) continue;
    checked += 1;
    if (found.length) hits.push(`${path || "/"} → ${found.join(", ")}`);
  }
  console.log(`  ${hits.length ? "✗" : "✓"} /${locale}  광고 코드 ${hits.length}건`);
  for (const hit of hits) problems.push(`/${locale}${hit}`);
}

// ── ② 대조군 — 지원 로케일에는 있어야 한다 ─────────────────────────────────
let supportedWithAds = 0;
for (const locale of SUPPORTED_SAMPLE) {
  const { status, found } = await markersIn(`${BASE}/${locale}`);
  if (status === 200 && found.length) supportedWithAds += 1;
}

if (checked === 0) {
  console.error("\n한 화면도 확인하지 못했다. 검사 0건은 통과가 아니라 실패다.");
  process.exit(1);
}

if (supportedWithAds === 0) {
  console.log(
    `\n  · 대조군: 지원 로케일(${SUPPORTED_SAMPLE.join("·")})에도 광고 코드가 없다.`,
  );
  console.log(
    "    퍼블리셔 ID가 없는 환경이면 정상이다. **다만 이 실행은 「광고가 꺼져 있다」만 확인했을 뿐,",
  );
  console.log("    로케일 판정이 실제로 도는지는 확인하지 못했다** — 통과로 세지 않는다.");
  if (problems.length === 0) {
    console.error("\n확인 못 함 — 광고를 켠 환경에서 다시 돌릴 것.");
    process.exit(1);
  }
} else {
  console.log(`\n  ✓ 대조군: 지원 로케일 ${supportedWithAds}/${SUPPORTED_SAMPLE.length}곳에 광고 코드가 있다`);
}

if (problems.length) {
  console.error(`\n정책 위반 ${problems.length}건 — 지원하지 않는 언어의 화면에 구글 광고 코드가 있다:`);
  for (const line of problems) console.error(`    ✗ ${line}`);
  console.error("\n판정은 `lib/ads.ts`의 adsAllowedForLocale 한 곳에 있다.");
  process.exit(1);
}

console.log(`\nALL PASS — 미지원 ${UNSUPPORTED.length}개 언어의 화면 ${checked}곳에 광고 코드가 없다.`);
