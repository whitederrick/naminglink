// 있어야 할 페이지에 **실제로 닿는지** 화면을 열어 확인한다.
//
// **왜 만들었는가**(2026-08-04). naminglink의 소개·문의하기·공지사항이 어디에서도 닿지
// 않고 있었다. 셋 다 파일이 있었고, sitemap에도 있었고, 푸터 코드에도 있었다. 그래서
// **모든 검사를 통과했다.** 실제로는 팝업형 푸터가 그것을 안 그렸고 랜딩·서비스·결과·안내
// 화면이 전부 팝업형이라, 약관 페이지와 도장 주문 화면에서만 보였다.
//
// 정작 `SiteFooter.tsx` 주석은 이렇게 적고 있었다 —
//   "애드센스 심사는 이 페이지들이 있는지를 보는데, 어디에서도 닿지 않는 페이지는 없는 것과 같다."
// **의도는 적혔는데 그것을 지키는 검사가 없었다.**
//
// 파일이 있는지가 아니라 **HTML에 링크가 있는지**를 센다. 화면을 여러 종류로 도는 것이 핵심이다
// — 한 화면만 보면 그 화면이 쓰는 푸터만 보게 된다.
//
// 실행: dev 서버를 띄운 뒤(포트는 각 앱 `package.json`의 `dev` 스크립트)
//   node scripts/verify-reachable-links.mjs naminglink  http://localhost:3001
//   node scripts/verify-reachable-links.mjs inyeonlink  http://localhost:3002
//   node scripts/verify-reachable-links.mjs sajulink    http://localhost:3003
//   node scripts/verify-reachable-links.mjs dreamslink  http://localhost:3004
//
// **앱 목록을 여기에 손으로 적지 않는다**(2026-08-07). 이 검사기는 인자로 앱을 받아
// `verify-app-coverage`가 못 잡는 자리였고, 실제로 두 앱만 받은 채 남아 있었다. 지금은
// `APP_KEYS`를 읽어 **표에 없는 앱이 있으면 실행 전에 실패한다** — 새 앱을 붙인 사람이
// "이 검사기는 왜 안 도나"를 묻기 전에 검사기가 먼저 말한다.

import { APP_KEYS } from "./app-keys.mjs";

const TARGETS = {
  naminglink: {
    // 화면 종류를 고루 고른다. 푸터가 두 모양(links·modal)이라 한쪽만 보면 못 잡는다.
    pages: [
      "/ko",                    // 랜딩
      "/ko/hanja-meaning",      // 서비스 입력
      "/ko/guide",              // 안내 허브
      "/ko/guide/hanja-basics", // 안내 문서
      "/ko/notice",             // 정책성 화면
      "/ko/about",
    ],
    required: {
      "/ko/about": "소개",
      "/ko/contact": "문의하기",
      "/ko/notice": "공지사항",
    },
    // 이용 안내는 출처를 실어 보내므로 경로만 맞으면 된다.
    requiredPrefix: { "/ko/guide": "이용 안내" },
  },
  inyeonlink: {
    pages: ["/ko", "/ko/compatibility", "/ko/affinity", "/ko/guide", "/ko/notice"],
    required: {
      "/ko/about": "소개",
      "/ko/contact": "문의하기",
      "/ko/notice": "공지사항",
    },
    requiredPrefix: { "/ko/guide": "이용 안내" },
  },
  sajulink: {
    // 사주는 화면이 둘로 갈린다 — 평생 사주(`/reading`)와 오늘의 운세(`/today`). 결과 화면은
    // 입력이 있어야 그려지므로 입력 화면까지만 본다.
    pages: ["/ko", "/ko/reading", "/ko/today", "/ko/guide", "/ko/guide/yongsin", "/ko/notice"],
    required: {
      "/ko/about": "소개",
      "/ko/contact": "문의하기",
      "/ko/notice": "공지사항",
    },
    requiredPrefix: { "/ko/guide": "이용 안내" },
  },
  dreamslink: {
    // **상징 페이지를 반드시 넣는다.** 이 앱은 색인 960개 중 대부분이 상징 사전이라, 거기에서
    // 푸터가 안 그려지면 사이트의 거의 전부가 약관·안내에 닿지 않는 상태가 된다. 실제로
    // `/dream`·`/dream/result`에 머리글·푸터가 통째로 없던 채 라이브에 나가 있었다(2026-08-06).
    // `/dream/symbol/pig`은 **낱장 하나를 대표로** 넣은 것이다. 215장이 같은 템플릿이라
    // 하나가 닿으면 전부 닿고, 목록(`/dream/symbols`)만 보면 정작 색인의 대부분인 낱장을
    // 한 번도 안 열어 보게 된다.
    pages: [
      "/ko",
      "/ko/dream",
      "/ko/dream/symbols",
      "/ko/dream/symbol/pig",
      "/ko/guide",
      "/ko/notice",
    ],
    required: {
      "/ko/about": "소개",
      "/ko/contact": "문의하기",
      "/ko/notice": "공지사항",
    },
    requiredPrefix: { "/ko/guide": "이용 안내" },
  },
};

/**
 * **검사기가 자기 대상을 스스로 정하지 않게 한다.**
 *
 * 표에 없는 앱이 하나라도 있으면 아무것도 검사하지 않고 실패한다. 인자로 앱을 받는 검사기라
 * `verify-app-coverage`가 못 잡는 자리이고, 그래서 이 파일이 두 앱만 받은 채로 오래 남아
 * 있었다 — 사주·드림에 대해서는 "통과"가 아니라 **한 번도 돌지 않았다**는 뜻이었다.
 */
const missing = APP_KEYS.filter((key) => !TARGETS[key]);
if (missing.length) {
  console.log(`앱 ${missing.join(", ")}이(가) TARGETS에 없다 — 화면 목록을 적을 것.`);
  console.log("빠진 앱은 통과한 것이 아니라 검사받지 않는다.");
  process.exit(1);
}

const usage = `실행: node scripts/verify-reachable-links.mjs <${APP_KEYS.join("|")}> <baseUrl>`;
const [app, baseUrl] = process.argv.slice(2);
const target = TARGETS[app];
if (!target || !baseUrl) {
  console.log(usage);
  process.exit(1);
}

const problems = [];
let checkedPages = 0;

for (const page of target.pages) {
  const response = await fetch(`${baseUrl}${page}`).catch(() => null);
  if (!response || !response.ok) {
    problems.push(`${page}: 열리지 않는다 (${response?.status ?? "연결 실패"})`);
    continue;
  }
  const html = await response.text();
  checkedPages += 1;

  /**
   * **로케일 접두어가 있든 없든 닿은 것으로 본다.**
   *
   * 인연링크 푸터는 한국어일 때 일부러 접두어를 뺀다(`SiteFooter.tsx`에 이유가 적혀 있다 —
   * 국내 방문자에게 주소가 짧아지고, 헤더로 언어가 갈리는 x-default 자리와 어긋나지 않는다).
   * naminglink는 붙인다. **이 검사가 볼 것은 "닿는가"이지 두 앱의 주소 취향이 아니다** —
   * 한 형태만 인정하면 멀쩡한 쪽을 결함이라고 부르게 된다(실제로 처음에 그랬다).
   */
  const reaches = (path) => {
    const bare = path.replace(/^\/[a-z]{2,3}(?=\/)/, "");
    return [path, bare].some(
      (candidate) => html.includes(`href="${candidate}"`) || html.includes(`href="${candidate}?`),
    );
  };

  for (const [href, label] of Object.entries({ ...target.required, ...target.requiredPrefix })) {
    if (!reaches(href)) problems.push(`${page}: ${label}(${href}) 링크가 없다`);
  }
}

/**
 * 대조군 — 검사가 살아 있는지 증명한다. 있을 수 없는 링크를 요구해서 반드시 걸리게 한다.
 * 이것이 없으면 규칙이 망가져 무엇도 못 잡는 상태에서 ALL PASS만 보게 된다.
 */
const control = await fetch(`${baseUrl}${target.pages[0]}`).then((r) => r.text());
const controlCaught = !control.includes('href="/ko/__없는페이지__"');

console.log(`닿는지 검사 — ${app}`);
console.log(`  화면 ${checkedPages}/${target.pages.length}개 · 요구 링크 ${Object.keys(target.required).length + Object.keys(target.requiredPrefix).length}종`);

if (!controlCaught) {
  console.log("  ✗ 대조군 실패 — 없는 링크가 있다고 나온다. 검사기가 고장 났다.");
  process.exit(1);
}
console.log("  ✓ 대조군: 없는 링크는 없다고 판정한다");

if (checkedPages === 0) {
  console.log("\n연 화면이 0개다 — 서버가 떠 있는지 확인할 것. 통과로 보지 않는다.");
  process.exit(1);
}

if (problems.length) {
  console.log("\n닿지 않는 자리:");
  for (const line of problems) console.log(`  ✗ ${line}`);
  process.exit(1);
}

console.log("\nALL PASS — 모든 화면에서 소개·문의하기·공지사항·이용 안내에 닿는다.");
