// 화면을 **실제로 열어** 그 언어로 나오는지 본다.
//
// ## 왜 정적 검사가 아닌가 (2026-08-07)
//
// 소스에 적힌 글자와 화면에 나온 글자는 같지 않다. 두 방향으로 어긋난다.
//
// **헛짚는 쪽.** `{locale === "ko" ? "문의하기" : "Contact"}`는 파일에 한국어가 있지만
// 일본어 화면에는 `Contact`가 나온다. 소스를 훑는 검사는 이걸 결함이라고 신고한다 —
// 실제로 돌려 보니 1,177건이 나왔고 대부분 이 종류였다.
//
// **못 보는 쪽이 더 중요하다.** 2026-08-06에 드림링크가 스물세 언어 전부에서 한국어 풀이를
// 내보내고 있었는데, 그 한국어는 **컴포넌트에 없었다.** 사전 데이터에 있었고 컴포넌트는
// `interpretation_ko`라는 **필드를 잘못 골랐을 뿐**이다. 소스에 한국어 리터럴이 없으니
// 정적 검사는 통과를 찍는다. 이 검사기를 만들게 된 바로 그 결함을 못 보는 것이다.
//
// 그래서 여기서는 **나온 것만** 본다. 분기든 폴백이든 상관없다.
//
// ## 무엇을 한국어로 보지 않는가
//
// 한자(漢字)는 한글이 아니므로 애초에 걸리지 않는다 — 사주 간지와 한자 이름은 어느 언어로
// 보든 그대로 찍혀야 하는 값이고, 이 검사는 그것을 건드리지 않는다.
// 언어 선택기의 「한국어」는 모든 화면에 있는 정상 값이라 뺀다.
//
// 실행: node scripts/verify-rendered-locale.mjs [기준주소접두어]
//   node scripts/verify-rendered-locale.mjs                 라이브
//   node scripts/verify-rendered-locale.mjs http://localhost 로컬(포트는 앱별 기본값)

import { APP_KEYS } from "./app-keys.mjs";
import { classifyKorean, glossControlHolds } from "./korean-gloss.mjs";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** 앱마다 열어 볼 화면. **서버가 그리는 것만** 여기 둔다(결과 화면은 별도 단계). */
const TARGETS = {
  naminglink: {
    live: "https://naming-link.com",
    port: 3001,
    /**
     * naminglink는 **흐름마다 보는 사람이 다르다.** 여기 넣는 것은 외국인용
     * `global-to-korean`(자기 이름을 한국 이름으로) 하나뿐이다.
     *
     * ⚠️ **`korean-to-global`을 넣지 말 것.** 이름은 비슷하지만 한국인이 자기 이름을 해외용
     * 이름으로 바꾸는 흐름이라 **본문이 한국어인 것이 맞다.** 실제로 넣어 보고 한국어 616자가
     * 나와 결함으로 잡았다가, 두 화면을 나란히 열어 보고서야 설계인 줄 알았다
     * (`/ja/global-to-korean`은 가나 361자로 정상이다). 한자 의미 매칭·도장 주문도 같은
     * 이유로 뺀다.
     */
    screens: ["/", "/global-to-korean", "/terms", "/privacy", "/refund-policy", "/pricing"],
  },
  inyeonlink: {
    live: "https://inyeon-link.com",
    port: 3002,
    screens: ["/", "/compatibility", "/affinity", "/terms", "/privacy", "/refund-policy", "/pricing"],
  },
  sajulink: {
    live: "https://saju-link.com",
    port: 3003,
    screens: ["/", "/reading", "/today", "/terms", "/privacy", "/refund-policy", "/pricing"],
  },
  dreamslink: {
    live: "https://dreams-link.com",
    port: 3004,
    screens: ["/", "/dream", "/terms", "/privacy", "/refund-policy", "/pricing"],
  },
};

/**
 * 표본 로케일. **문자 체계를 고루 고른다** — 라틴 하나만 보면 서체·방향 문제를 놓친다.
 * 전 로케일을 도는 것은 느리기만 하고, 사전이 로케일별로 갈리는 자리는 `verify-i18n`이 이미 센다.
 */
const LOCALES = ["ja", "es", "ru", "th", "vi", "ar"];

/**
 * 사업자 정보에 나오는 한국어 조각. 상호·대표자·주소는 한국 법인의 등기된 이름이라
 * 번역하면 안 된다 — 전자상거래법이 요구하는 것은 「사실」이지 「읽기 쉬운 말」이 아니다.
 *
 * **손으로 적지 않고 `COMPANY_FACTS`에서 만든다.** 예전에는 「서울특별시」·「가산동」처럼
 * 앞머리만 적어 두고 `startsWith`로 걸렀는데, 주소가 숫자에서 끊겨(「디지털로 130, 13층
 * 1309호」) 조각이 갈리는 순간 그 방식이 통째로 무너졌다. 값이 바뀌면 여기도 따라 움직인다.
 */
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const COMPANY_HANGUL = (() => {
  // node로 도는 스크립트라 .ts를 import할 수 없다. 선언 블록만 잘라 한글을 뽑는다 —
  // 주석의 한국어까지 예외로 삼지 않도록 `COMPANY_FACTS = {` 부터 첫 `};` 까지만 본다.
  const file = path.resolve(REPO, "packages/core/src/company.ts");
  const text = readFileSync(file, "utf8");
  const at = text.indexOf("COMPANY_FACTS: CompanyFacts = {");
  if (at < 0) {
    console.log("  ✗ COMPANY_FACTS를 못 찾았다 — 사업자 정보 예외를 만들 수 없다.");
    process.exit(1);
  }
  const block = text.slice(at, text.indexOf("};", at));
  return new Set(block.match(/[가-힣]+/g) ?? []);
})();

/**
 * 브랜드 워드마크의 한글 병기. 「Saju-Link / 사주 - 링크」처럼 로고 옆에 한글을 함께 적는
 * 것은 **의도된 표기**라 어느 언어에서나 그대로 나온다.
 *
 * **손으로 적지 않고 각 앱의 `SERVICE_SUBTITLE`에서 만든다.** 예전에는 「인연」·「드림」·
 * 「네이밍」을 손으로 적어 두었는데 **「사주」만 빠져** 사주링크 홈이 여섯 로케일에서
 * 결함으로 잡혔다 — 규칙은 맞았고 목록이 틀렸다. 값에서 만들면 그럴 일이 없다.
 */
const BRAND_HANGUL = (() => {
  const words = new Set();
  for (const app of APP_KEYS) {
    const file = path.resolve(REPO, "apps", app, "src/lib/company.ts");
    let text = "";
    try {
      text = readFileSync(file, "utf8");
    } catch {
      continue; // naminglink는 이 상수를 두지 않는다
    }
    const match = text.match(/SERVICE_SUBTITLE\s*=\s*"([^"]+)"/);
    if (!match) continue;
    for (const word of match[1].match(/[가-힣]+/g) ?? []) words.add(word);
  }
  return words;
})();

/**
 * 그 밖에 나와도 되는 한국어. **왜 되는지 함께 적는다** — 이유 없는 예외는 검사를 조용히 비운다.
 */
const ALLOWED = [
  "한국어", // 언어 선택기가 스물세 언어 이름을 각 언어로 적는다
  "네이밍", // naminglink는 SERVICE_SUBTITLE 상수를 두지 않아 여기 남는다
];

const prefix = process.argv[2];

function textOf(html) {
  let body = html.replace(/<(script|style|svg|noscript)[^>]*>[\s\S]*?<\/\1>/gi, " ");
  const match = body.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (match) body = match[1];
  return body
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * 한글이 든 토막 중 **잔재만** 뽑는다.
 *
 * 예전에는 한글이 보이면 전부 잡았다. 그래서 「rapport (궁합 리포트 PDF)」 같은 **정상 용어
 * 주석까지 잔재로 세어 이 검사가 늘 빨간불이었다** — 늘 실패하는 검사기는 없는 것과 같다.
 * 지금은 `korean-gloss`의 규칙으로 갈라, 괄호에 원어를 단 자리는 통과시킨다.
 */
function koreanChunks(text) {
  const chunks = [];
  for (const hit of classifyKorean(text)) {
    if (hit.kind === "gloss") {
      glossCount += 1;
      continue;
    }
    // 낱글자는 잡음이라 버리는데, **`glued`는 예외다** — 반만 변환된 낱말은 바로 그
    // 한 글자로 남는다(`мансей력`의 `력`, `시주(時柱)`의 `시`). 처음에 함께 버렸다가
    // 대조군이 그 자리에서 걸렸다.
    if (hit.kind !== "glued" && hit.fragment.length < 2) continue;
    // 주소는 「서울특별시 금천구 디지털로」처럼 여러 낱말이 한 덩어리로 잡힌다.
    // **낱말마다** 사업자 정보에 있는지 보고, 전부 있으면 통과시킨다 — 하나라도 낯선 낱말이
    // 섞이면 그 덩어리는 사업자 정보가 아니다.
    const words = hit.fragment.split(/\s+/).filter(Boolean);
    if (words.length > 0 && words.every((word) => COMPANY_HANGUL.has(word))) continue;
    if (words.length > 0 && words.every((word) => BRAND_HANGUL.has(word))) continue;
    if (ALLOWED.some((allow) => hit.fragment === allow || hit.fragment.startsWith(allow))) continue;
    // 사람이 판단할 수 있도록 앞뒤를 조금 붙여 보여 준다.
    chunks.push(text.slice(hit.start, Math.min(text.length, hit.end + 40)).trim());
  }
  return chunks;
}

const problems = [];
/** 정상 용어 주석 수. 0이면 규칙이 망가진 것이므로 대조군에서 함께 본다. */
let glossCount = 0;
let opened = 0;
let failedToOpen = 0;

for (const app of APP_KEYS) {
  const target = TARGETS[app];
  if (!target) {
    console.log(`  ${app} — TARGETS에 없다. 화면 목록을 적을 것.`);
    process.exit(1);
  }
  const base = prefix ? `${prefix}:${target.port}` : target.live;
  let hits = 0;

  for (const screen of target.screens) {
    for (const locale of LOCALES) {
      const url = `${base}/${locale}${screen === "/" ? "" : screen}`;
      const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } }).catch(
        () => null,
      );
      if (!response?.ok) {
        failedToOpen += 1;
        problems.push([app, `${locale}${screen}`, `열리지 않는다 (${response?.status ?? "연결 실패"})`]);
        continue;
      }
      opened += 1;
      const chunks = koreanChunks(textOf(await response.text()));
      if (chunks.length) {
        hits += 1;
        const sample = [...new Set(chunks)].slice(0, 3).join(" / ");
        problems.push([app, `${locale}${screen}`, `한국어 ${chunks.length}토막 — ${sample}`]);
      }
    }
  }

  console.log(`  ${app.padEnd(12)} 화면 ${target.screens.length}개 × 로케일 ${LOCALES.length}개 · 한국어가 나온 자리 ${hits}곳`);
}

/**
 * 대조군 — 검사가 살아 있는지 증명한다.
 *
 * 한국어가 든 글은 잡고, 언어 선택기의 「한국어」와 순수 라틴은 통과시켜야 한다. 이것이
 * 없으면 정규식이 망가진 채로 "ALL PASS"만 보게 된다.
 */
const CONTROL = [
  { text: "상징을 찾지 못했습니다", expect: true },
  { text: "Symbols were not found", expect: false },
  { text: "現在の言語 한국어 English", expect: false },
  // 정상 용어 주석은 통과해야 한다 — 이것을 잡던 탓에 이 검사가 늘 빨간불이었다.
  { text: "rapport de compatibilite (궁합 리포트 PDF) est", expect: false },
  { text: "十二生肖（띠）的关系", expect: false },
  // 반만 옮겨진 낱말은 잡아야 한다.
  { text: "Raschet manseylek (мансей력) ispolzuet", expect: true },
];
const controlOk =
  CONTROL.every((c) => koreanChunks(c.text).length > 0 === c.expect) && glossControlHolds();

console.log("\n화면 렌더 언어 검사");
console.log(`  앱 ${APP_KEYS.length}개 · 연 화면 ${opened}개 · 로케일 ${LOCALES.join("·")}`);

if (!controlOk) {
  console.log("  ✗ 대조군 실패 — 한국어 판정이 고장 났다. 이 결과를 믿지 말 것.");
  process.exit(1);
}
console.log(`  ✓ 대조군: 잔재는 잡고, 용어 주석·언어 선택기·라틴은 통과시킨다 (정상 주석 ${glossCount}개)`);

if (opened === 0) {
  console.log("\n연 화면이 0개다 — 주소가 맞는지 확인할 것. 통과로 보지 않는다.");
  process.exit(1);
}

if (problems.length) {
  console.log(`\n어긋난 자리 ${problems.length}건${failedToOpen ? ` (그중 열지 못한 것 ${failedToOpen}건)` : ""}:`);
  let last = "";
  for (const [app, where, why] of problems) {
    if (app !== last) console.log(`\n  [${app}]`);
    last = app;
    console.log(`    ${where.padEnd(24)} ${why}`);
  }
  console.log("\n⚠️ 한자는 한글이 아니므로 여기 걸리지 않는다 — 간지·한자 이름은 그대로 두는 것이 맞다.");
  process.exit(1);
}

console.log("\nALL PASS — 표본 로케일의 모든 화면이 그 언어로 나온다.");
// 성공도 못 박는다 — `fetch`의 keep-alive 소켓 때문에 그냥 두면 운영 주소에서 안 끝난다.
process.exit(0);
