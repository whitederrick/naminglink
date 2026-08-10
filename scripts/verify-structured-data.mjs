#!/usr/bin/env node
/**
 * **구조화 데이터(JSON-LD)가 문법에 맞고, 화면에 있는 값만 말하는가.**
 *
 * ## 왜 필요한가 (2026-08-11)
 *
 * 홈에 `Organization`·`WebSite`를 넣었다. 구조화 데이터에서 가장 흔한 위반은 문법 오류가 아니라
 * **화면에 없는 것을 선언하는 것**이다 — 없는 평점, 없는 가격, 화면 어디에도 없는 회사 정보.
 * 그래서 이 검사는 두 가지를 함께 본다.
 *
 *   ① JSON으로 파싱되는가 · 필수 필드가 비어 있지 않은가
 *   ② **그 값이 같은 화면의 HTML에 실제로 있는가** (푸터가 그리는 값과 같은 자료인가)
 *
 * ②가 이 검사의 핵심이다. 값의 출처가 갈리면(코드에 박은 값 vs DB에서 읽은 값) 언젠가 둘이
 * 어긋나는데, 어긋난 쪽은 **검색엔진만 보는 거짓말**이 되어 화면에서는 영영 안 보인다.
 *
 * **대조군**: JSON-LD가 없어야 하는 화면을 함께 훑어, 추출기가 실제로 「없음」을 알아보는지
 * 확인한다. 그것 없이 「홈에 있다」만 세면 추출기가 늘 참을 돌려줘도 초록불이다.
 *
 * 실행:
 *   node scripts/verify-structured-data.mjs --base http://localhost:3001
 *   node scripts/verify-structured-data.mjs                 (기본: 운영 주소)
 */

const args = process.argv.slice(2);
const baseArg = args.indexOf("--base");
const BASE = (baseArg >= 0 ? args[baseArg + 1] : "https://naming-link.com").replace(/\/$/, "");
const UA = { "user-agent": "Mozilla/5.0 (compatible; Googlebot/2.1)" };

/** 확인할 화면. 로케일이 달라도 같은 규칙이 지켜져야 한다(비한국어는 로마자 표기). */
const PAGES = ["/ko", "/en"];
/** 대조군. 지금은 홈에만 넣기로 했으므로 여기에는 없어야 한다. */
const WITHOUT = ["/en/guide"];

const BLOCK = /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;

function jsonLdIn(html) {
  const found = [];
  for (const match of html.matchAll(BLOCK)) {
    const raw = match[1].trim();
    try {
      const parsed = JSON.parse(raw);
      found.push(...(Array.isArray(parsed) ? parsed : [parsed]));
    } catch (error) {
      found.push({ __parseError: String(error), raw: raw.slice(0, 200) });
    }
  }
  return found;
}

/**
 * HTML에서 태그를 걷어낸 글자만 남긴다. 값이 화면에 **보이는지**를 보려는 것이라, 속성 안에만
 * 있는 값은 세지 않는다(JSON-LD 스크립트 자신도 태그로 걷힌다).
 */
function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/\s+/g, " ");
}

let failures = 0;
function check(label, ok, detail = "") {
  console.log(`  ${ok ? "✓" : "✗"} ${label}${detail ? ` — ${detail}` : ""}`);
  if (!ok) failures += 1;
}

console.log("구조화 데이터 검사\n");
console.log(`  기준 ${BASE}\n`);

// ── 대조군을 먼저 본다 ─────────────────────────────────────────────────────
// 추출기가 고장 나 늘 빈 배열을 돌려주면 아래 검사는 전부 「없다」로 초록이 된다. 그래서
// **있어야 하는 곳에서 하나라도 찾는 것**과 **없어야 하는 곳에서 0을 확인하는 것**을 함께 센다.
for (const path of WITHOUT) {
  const res = await fetch(`${BASE}${path}`, { headers: UA, redirect: "follow" });
  const blocks = res.ok ? jsonLdIn(await res.text()) : [];
  check(`대조군 ${path} — JSON-LD가 없다`, blocks.length === 0, `${blocks.length}개`);
}

for (const path of PAGES) {
  console.log(`\n== ${path}`);
  const res = await fetch(`${BASE}${path}`, { headers: UA, redirect: "follow" });
  if (!res.ok) {
    check(`${path} 응답 200`, false, `상태 ${res.status}`);
    continue;
  }
  const html = await res.text();
  const text = visibleText(html);
  const blocks = jsonLdIn(html);

  const broken = blocks.filter((block) => block.__parseError);
  check("JSON으로 파싱된다", broken.length === 0, broken[0]?.__parseError ?? "");
  if (broken.length) continue;

  const org = blocks.find((block) => block["@type"] === "Organization");
  const site = blocks.find((block) => block["@type"] === "WebSite");
  check("Organization이 있다", Boolean(org));
  check("WebSite가 있다", Boolean(site));
  if (!org || !site) continue;

  // ── 필수 필드 ────────────────────────────────────────────────────────────
  for (const [field, value] of [
    ["name", org.name],
    ["url", org.url],
    ["logo", org.logo],
    ["email", org.email],
    ["telephone", org.telephone],
    ["address.streetAddress", org.address?.streetAddress],
  ]) {
    check(`Organization.${field}가 비어 있지 않다`, Boolean(value && String(value).trim()));
  }
  check("url·logo가 절대 주소다", /^https?:\/\//.test(org.url ?? "") && /^https?:\/\//.test(org.logo ?? ""));
  check("WebSite.url이 Organization.url과 같다", site.url === org.url);
  check("WebSite.publisher가 같은 상호를 가리킨다", site.publisher?.name === org.name);

  // ── 화면에 있는 값인가 ───────────────────────────────────────────────────
  // 푸터가 그리는 사업자 정보와 같은 자료에서 나와야 한다. 여기서 어긋나면 검색엔진만 보는
  // 값이 생긴 것이다.
  for (const [field, value] of [
    ["name", org.name],
    ["email", org.email],
    ["telephone", org.telephone],
    ["address", org.address?.streetAddress],
  ]) {
    if (!value) continue;
    check(`${field} 값이 화면에도 있다`, text.includes(String(value)), String(value).slice(0, 40));
  }

  // 로고는 실제로 열려야 한다. 깨진 로고를 선언하면 리치 결과에서 통째로 무시된다.
  const logo = await fetch(org.logo, { headers: UA, redirect: "follow" });
  check("logo 주소가 200을 낸다", logo.ok, `상태 ${logo.status}`);
}

console.log(`\n${failures === 0 ? "ALL PASS" : `FAIL ${failures}건`}`);
process.exit(failures === 0 ? 0 : 1);
