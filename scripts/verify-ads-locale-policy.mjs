#!/usr/bin/env node
/**
 * **서버가 보내는 HTML에 광고 코드가 없는가. 그리고 사이트 연결은 살아 있는가.**
 *
 * ## 기대값이 뒤집혔다 (2026-08-11)
 *
 * 예전 이 검사는 「미지원 4개 언어에 0건, **지원 로케일에는 있어야 함**」을 셌다. 그때는
 * 로더가 전역 레이아웃에 있었기 때문이다. 그런데 실측에서 그 구조가 무엇을 하는지 드러났다:
 *
 *     /en/login    우리가 넣지 않은 <ins class="adsbygoogle adsbygoogle-noablate">  1개
 *     /en/pricing  같음                                                            1개
 *
 * **로더는 혼자서 자동 광고 자리(앵커·비네트)를 만든다.** 광고 단위를 두지 않은 화면도 로더만
 * 있으면 광고 화면이 된다 — 로그인·요금·빈 결과처럼 발행한 콘텐츠가 없는 화면이 그렇게 되는
 * 것이 2026-08-10 반려 사유와 같은 자리다.
 *
 * 그래서 로더를 **광고 단위가 실제로 그려질 때**만 부르도록 옮겼다(`lib/adsense-loader.ts`).
 * 그 결과 **서버 HTML에는 어느 로케일에도 광고 코드가 없다.** 이 검사의 기대값이 그것이다.
 *
 * ## 그러면 무엇이 대조군인가
 *
 * 「어디에도 없다」만 세면 **정규식이 고장 나도 초록불**이다. 그래서 탐지기를 **합성 표본**으로
 * 먼저 시험한다 — 실제 애드센스 스니펫 세 꼴을 넣어 전부 잡는지 본다. 그리고 사이트 연결
 * (`/ads.txt`·소유권 메타)이 살아 있는지를 함께 센다. 광고를 통째로 지운 것과 게재만 멈춘 것은
 * 전혀 다른 상태이고, 앞엣것은 심사를 멈춘다.
 *
 * 결과 화면 배너는 하이드레이션 뒤에 붙으므로 이 검사가 볼 수 없다. 그쪽은 브라우저 검사와
 * `apps/naminglink/scripts/verify-ad-mode.ts`(모듈 판정)가 맡는다.
 *
 * 실행:
 *   node scripts/verify-ads-locale-policy.mjs --base http://localhost:3001
 *   node scripts/verify-ads-locale-policy.mjs                 (기본: 운영 주소)
 */

const args = process.argv.slice(2);
const baseArg = args.indexOf("--base");
const BASE = (baseArg >= 0 ? args[baseArg + 1] : "https://naming-link.com").replace(/\/$/, "");

/** 이 서비스의 로케일 전부. 어느 것에도 광고 코드가 없어야 한다. */
const ALL_LOCALES = [
  "ko", "en", "ja", "zh", "de", "es", "fr", "it", "pt",
  "vi", "th", "id", "ru", "ar", "fil", "uz", "mn", "hi", "tr",
  "km", "ms", "kk", "pl",
];

/**
 * 광고 코드로 세는 것들. 로더·유닛·GAM을 모두 본다 — 하나만 세면 나머지로 샌다.
 *
 * **소유권 확인 메타 태그는 여기 없다.** `<meta name="google-adsense-account">`는 광고를
 * 요청하지 않는 연결 표시다. 아래는 `data-ad-client=` 속성만 세므로 그 태그와 섞이지 않는다.
 */
const AD_MARKERS = [
  ["adsbygoogle.js 로더", /pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js/],
  ["adsbygoogle 유닛", /class="[^"]*\badsbygoogle\b/],
  ["ca-pub 클라이언트", /data-ad-client="ca-pub-/],
  ["GAM gpt.js", /securepubads\.g\.doubleclick\.net\/tag\/js\/gpt\.js/],
  ["광고 자리 표시", /data-ad-placement=/],
];

/** 광고가 붙을 수 있었던 화면들. 결과 화면은 세션이 있어야 그려져 여기서 볼 수 없다. */
const PATHS = ["", "/about", "/guide", "/global-to-korean", "/notice", "/contact", "/pricing"];

const UA = { "user-agent": "Mozilla/5.0 (compatible; Googlebot/2.1)" };

function markersIn(html) {
  return AD_MARKERS.filter(([, re]) => re.test(html)).map(([name]) => name);
}

let failures = 0;
const problems = [];

console.log("서버 HTML에 광고 코드가 없는가 · 사이트 연결은 살아 있는가\n");
console.log(`  기준 ${BASE}\n`);

// ── ⓪ 대조군 — 탐지기가 살아 있는가 ────────────────────────────────────────
//
// 「어디에도 없다」를 세는 검사는 탐지기가 죽어도 초록불이다. 실제 스니펫 세 꼴을 합성해
// 전부 잡는지 먼저 본다.
const CONTROL_SAMPLES = [
  `<script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1"></script>`,
  `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1" data-ad-slot="2"></ins>`,
  `<script src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>`,
];
const controlCaught = CONTROL_SAMPLES.every((sample) => markersIn(sample).length > 0);
// 그리고 정상 HTML(소유권 메타만 있는 꼴)은 통과시켜야 한다 — 아니면 늘 빨간불이 된다.
const controlPasses =
  markersIn(`<meta name="google-adsense-account" content="ca-pub-1">`).length === 0;

console.log(`  ${controlCaught && controlPasses ? "✓" : "✗"} 대조군: 광고 스니펫 세 꼴을 잡고, 소유권 메타는 통과시킨다`);
if (!controlCaught || !controlPasses) {
  console.error("\n대조군 실패 — 이 검사를 믿을 수 없다.");
  process.exit(1);
}

// ── ① 배포가 밝히는 광고 체제 ──────────────────────────────────────────────
const head = await fetch(`${BASE}/`, { headers: UA, redirect: "follow" });
const mode = head.headers.get("x-ad-mode");
const eligible = (head.headers.get("x-ad-locales") ?? "").split(",").filter(Boolean);
const homeHtml = await head.text();

if (!mode) {
  console.error("\n확인 못 함 — 배포가 `X-Ad-Mode` 헤더를 내지 않는다.");
  console.error("  옛 배포를 검사하고 있거나 헤더가 지워진 것이다. 통과로 세지 않는다.");
  process.exit(1);
}

console.log(`\n  광고 체제 ${mode === "live" ? "운영(live)" : "심사(review)"}`);
console.log(`  광고를 실어도 되는 로케일 ${eligible.length}개 — ${eligible.join("·") || "(없음)"}`);
console.log("  (결과 화면 배너만 해당한다. 그 자리는 하이드레이션 뒤에 붙어 여기서 안 보인다)\n");

// ── ② 서버 HTML — 전 로케일 0건 ────────────────────────────────────────────
let checked = 0;
for (const locale of ALL_LOCALES) {
  const hits = [];
  for (const path of PATHS) {
    const res = await fetch(`${BASE}/${locale}${path}`, { headers: UA, redirect: "follow" });
    if (!res.ok) continue;
    checked += 1;
    const found = markersIn(await res.text());
    if (found.length) hits.push(`${path || "/"} → ${found.join(", ")}`);
  }
  if (hits.length) {
    failures += 1;
    console.log(`  ✗ /${locale}  광고 코드 ${hits.length}건`);
    for (const hit of hits) problems.push(`/${locale}${hit}`);
  }
}
console.log(`  ${failures === 0 ? "✓" : "✗"} 서버 HTML 광고 코드 — 화면 ${checked}곳에서 ${problems.length}건`);

if (checked === 0) {
  console.error("\n한 화면도 확인하지 못했다. 검사 0건은 통과가 아니라 실패다.");
  process.exit(1);
}

// ── ③ 사이트 연결 — 게재와 무관하게 살아 있어야 한다 ───────────────────────
//
// 광고를 손대다가 **연결까지 끊는 것**이 이 작업에서 가장 위험한 실수다. 심사는 연결된
// 사이트에만 진행된다(콘솔의 「사이트 소유권을 확인하세요」 항목).
const adsTxtRes = await fetch(`${BASE}/ads.txt`, { headers: UA, redirect: "follow" });
const adsTxtOk = adsTxtRes.ok && /^google\.com,\s*pub-\d+/m.test(await adsTxtRes.text());
const hasMeta = /name="google-adsense-account"/.test(homeHtml);

console.log(`  ${adsTxtOk ? "✓" : "✗"} /ads.txt — ${adsTxtOk ? "200 · 퍼블리셔 줄 있음" : `상태 ${adsTxtRes.status}`}`);
console.log(`  ${hasMeta ? "✓" : "✗"} google-adsense-account 메타 태그`);
if (!adsTxtOk) problems.push("/ads.txt — 사이트 연결 표시가 없다");
if (!hasMeta) problems.push("google-adsense-account 메타 태그가 없다");

if (problems.length) {
  console.error(`\n결함 ${problems.length}건:`);
  for (const line of problems) console.error(`    ✗ ${line}`);
  console.error("\n로더를 부르는 자리는 `lib/adsense-loader.ts` 하나다. 전역 레이아웃으로 되돌리지 말 것.");
  process.exit(1);
}

console.log(`\nALL PASS — 화면 ${checked}곳의 서버 HTML에 광고 코드가 없고, 사이트 연결은 살아 있다.`);
// 성공도 못 박는다 — `fetch`의 keep-alive 소켓 때문에 그냥 두면 운영 주소에서 안 끝난다.
process.exit(0);
