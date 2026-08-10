#!/usr/bin/env node
/**
 * **광고 코드가 실려도 되는 화면에만 실려 있는가.**
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
 * ## 대조군을 손으로 적지 않는다 (2026-08-11)
 *
 * 예전에는 「미지원 넷은 0건, 대조군은 en·ja·ru에 있음」이 **스크립트 안에 박혀** 있었다.
 * 그 상태에서 적격 목록을 좁히면(사람이 검수한 로케일만 남기는 2차 조치) **이 검사기가 고쳐진
 * 코드를 결함이라고 부른다.** 그때 대조군을 지우면 회귀를 잡을 장치가 사라진다.
 *
 * 그래서 **배포가 스스로 말하게** 했다. 응답 헤더 둘을 읽는다:
 *
 *     X-Ad-Mode      review | live      광고 체제(관문이 도는가)
 *     X-Ad-Locales   ko,en,ja,…         광고 코드를 실어도 되는 로케일
 *
 * 두 값 모두 화면을 그리는 것과 **같은 모듈**(`src/lib/ads.ts`)에서 나오므로 어긋날 수 없다.
 * 헤더가 없으면 「확인 못 함」으로 실패시킨다 — 옛 배포를 검사해 놓고 통과로 세지 않는다.
 *
 * ## 세는 것
 *
 *   · 적격 로케일     광고 코드가 **있어야** 한다 (대조군)
 *   · 그 밖의 로케일   광고 코드가 **없어야** 한다 (미지원 넷 + 아직 검수하지 않은 언어)
 *   · 사이트 연결      `/ads.txt` 200 · `google-adsense-account` 메타 — 게재와 무관하게 살아 있어야 한다
 *
 * 실행:
 *   node scripts/verify-ads-locale-policy.mjs --base http://localhost:3001
 *   node scripts/verify-ads-locale-policy.mjs                 (기본: 운영 주소)
 */

const args = process.argv.slice(2);
const baseArg = args.indexOf("--base");
const BASE = (baseArg >= 0 ? args[baseArg + 1] : "https://naming-link.com").replace(/\/$/, "");

/** 이 서비스의 로케일 전부. 적격 목록은 배포가 알려 주고, 나머지가 곧 「실리면 안 되는」 쪽이다. */
const ALL_LOCALES = [
  "ko", "en", "ja", "zh", "de", "es", "fr", "it", "pt",
  "vi", "th", "id", "ru", "ar", "fil", "uz", "mn", "hi", "tr",
  "km", "ms", "kk", "pl",
];

/**
 * 광고 코드로 세는 것들. 로더·유닛·GAM을 모두 본다 — 하나만 세면 나머지로 샌다.
 *
 * **소유권 확인 메타 태그는 여기 없다.** `<meta name="google-adsense-account">`는 광고를
 * 요청하지 않는 연결 표시라 미지원 언어 화면에 있어도 위반이 아니다(사용자 결정 2026-08-11).
 * 아래 `AD_MARKERS`는 `data-ad-client=` 속성만 세므로 그 태그와 섞이지 않는다.
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

const UA = { "user-agent": "Mozilla/5.0 (compatible; Googlebot/2.1)" };

async function markersIn(url) {
  const res = await fetch(url, { headers: UA, redirect: "follow" });
  if (!res.ok) return { status: res.status, found: [], html: "" };
  const html = await res.text();
  return {
    status: res.status,
    found: AD_MARKERS.filter(([, re]) => re.test(html)).map(([name]) => name),
    html,
  };
}

console.log("광고 코드가 실려도 되는 화면에만 실려 있는가\n");
console.log(`  기준 ${BASE}\n`);

// ── ⓪ 배포에게 모드와 적격 목록을 묻는다 ───────────────────────────────────
const head = await fetch(`${BASE}/`, { headers: UA, redirect: "follow" });
const mode = head.headers.get("x-ad-mode");
const eligibleHeader = head.headers.get("x-ad-locales");

if (!mode || eligibleHeader === null) {
  console.error("확인 못 함 — 배포가 `X-Ad-Mode`·`X-Ad-Locales` 헤더를 내지 않는다.");
  console.error("  이 헤더는 `next.config.ts`가 `src/lib/ads.ts`의 값으로 만든다.");
  console.error("  옛 배포를 검사하고 있거나 헤더가 지워진 것이다. 통과로 세지 않는다.");
  process.exit(1);
}

const eligible = eligibleHeader.split(",").map((code) => code.trim()).filter(Boolean);
const ineligible = ALL_LOCALES.filter((code) => !eligible.includes(code));

console.log(`  광고 체제 ${mode === "live" ? "운영(live)" : "심사(review)"}`);
console.log(`  적격 로케일 ${eligible.length}개 — ${eligible.join("·") || "(없음)"}`);
console.log(`  실리면 안 되는 로케일 ${ineligible.length}개 — ${ineligible.join("·")}\n`);

if (eligible.length === 0) {
  console.error("적격 로케일이 0개다. 광고를 통째로 끈 배포이거나 목록이 비어 있다.");
  console.error("  그 상태에서는 「없어야 할 곳에 없다」만 세게 되어 검사가 성립하지 않는다.");
  process.exit(1);
}

const problems = [];
let checked = 0;

// ── ① 실리면 안 되는 로케일 — 0건이어야 한다 ───────────────────────────────
for (const locale of ineligible) {
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

// ── ② 대조군 — 적격 로케일에는 있어야 한다 ─────────────────────────────────
//
// 표본은 앞의 셋만 본다. 전부 훑으면 요청이 두 배가 되는데, 여기서 재는 것은 「판정이 실제로
// 도는가」이므로 표본이면 충분하다(①은 전수로 센다 — 그쪽이 위반이 되는 방향이다).
const sample = eligible.slice(0, 3);
let withAds = 0;
for (const locale of sample) {
  const { status, found } = await markersIn(`${BASE}/${locale}`);
  if (status === 200 && found.length) withAds += 1;
}

if (checked === 0) {
  console.error("\n한 화면도 확인하지 못했다. 검사 0건은 통과가 아니라 실패다.");
  process.exit(1);
}

if (withAds === 0) {
  console.log(`\n  · 대조군: 적격 로케일(${sample.join("·")})에도 광고 코드가 없다.`);
  console.log("    퍼블리셔 ID가 없는 환경이면 정상이다. **다만 이 실행은 「광고가 꺼져 있다」만");
  console.log("    확인했을 뿐, 로케일 판정이 실제로 도는지는 확인하지 못했다** — 통과로 세지 않는다.");
  if (problems.length === 0) {
    console.error("\n확인 못 함 — 광고를 켠 환경에서 다시 돌릴 것.");
    process.exit(1);
  }
} else {
  console.log(`\n  ✓ 대조군: 적격 로케일 ${withAds}/${sample.length}곳에 광고 코드가 있다`);
}

// ── ③ 사이트 연결 — 게재와 무관하게 살아 있어야 한다 ───────────────────────
//
// 광고를 손대다가 **연결까지 끊는 것**이 이 작업에서 가장 위험한 실수다. 애드센스 심사는
// 코드가 설치된 상태를 확인하는 절차이고, 연결이 끊기면 심사 자체가 진행되지 않는다.
const adsTxt = await fetch(`${BASE}/ads.txt`, { headers: UA, redirect: "follow" });
const homeHtml = await head.text();
const hasMeta = /name="google-adsense-account"/.test(homeHtml);
const adsTxtOk = adsTxt.ok && /^google\.com,\s*pub-\d+/m.test(await adsTxt.text());

console.log(`\n  ${adsTxtOk ? "✓" : "✗"} /ads.txt — ${adsTxtOk ? "200 · 퍼블리셔 줄 있음" : `상태 ${adsTxt.status}`}`);
console.log(`  ${hasMeta ? "✓" : "✗"} google-adsense-account 메타 태그`);
if (!adsTxtOk) problems.push("/ads.txt — 사이트 연결 표시가 없다");
if (!hasMeta) problems.push("google-adsense-account 메타 태그가 없다");

if (problems.length) {
  console.error(`\n결함 ${problems.length}건:`);
  for (const line of problems) console.error(`    ✗ ${line}`);
  console.error("\n판정은 `lib/ads.ts`의 adsAllowedForLocale·adsConfigured 두 곳에 있다.");
  process.exit(1);
}

console.log(
  `\nALL PASS — 실리면 안 되는 ${ineligible.length}개 언어의 화면 ${checked}곳에 광고 코드가 없고, 사이트 연결은 살아 있다.`,
);
