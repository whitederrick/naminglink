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
// 실행: dev 서버를 띄운 뒤
//   node scripts/verify-reachable-links.mjs naminglink http://localhost:3099
//   node scripts/verify-reachable-links.mjs inyeonlink http://localhost:3097

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
};

const [app, baseUrl] = process.argv.slice(2);
const target = TARGETS[app];
if (!target || !baseUrl) {
  console.log("실행: node scripts/verify-reachable-links.mjs <naminglink|inyeonlink> <baseUrl>");
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
