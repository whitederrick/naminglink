// 화면에 나가는 글이 **사전을 거치는지** 전수로 센다.
//
// ## 왜 만들었는가 (2026-08-07)
//
// 사전이 23로케일로 완벽해도, 컴포넌트에 문자열이 박혀 있으면 화면은 바뀌지 않는다.
// 드림링크가 실제로 그랬다 — 화면과 유료 PDF가 `interpretation_ko`를 박아 두어 **스물세 개
// 언어 전부에서 한국어 풀이**가 나가고 있었다(2026-08-06 발견). `locale`을 인자로 받아 놓고
// 쓰지 않는 함수가 셋이었다.
//
// **tsc도 빌드도 `verify-i18n`도 통과한다.** 사전은 멀쩡하고, 타입도 맞고, 화면도 그려진다.
// 틀린 것은 "그 자리에서 사전을 읽었어야 하는데 안 읽었다"는 사실 하나뿐이라, 그 자리를
// 아는 사람이 그 파일을 다시 열어 보기 전에는 드러나지 않는다.
//
// ## 무엇을 세지 않는가 — 이것이 이 검사의 절반이다
//
// **설계상 한국어인 화면이 있다.** 안내 문서는 `audience: "ko" | "global"`로 ko판과 en판을
// 따로 두는 구조이고, 소개·공지도 같은 정책이다(→ 두 겹 번역 층). 운영자 화면은 아예
// 한국어 전용이다. 이것들을 결함이라고 부르면 **멀쩡한 설계를 뜯게 된다** — 2026-08-07에
// 실제로 그렇게 오판할 뻔했다. 그래서 제외를 목록으로 못 박고 이유를 함께 적는다.
//
// 실행: node scripts/verify-screen-strings.mjs

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";

import { APP_KEYS } from "./app-keys.mjs";

/**
 * 이 아래는 세지 않는다. **경로마다 왜인지 적는다** — 이유 없는 제외는 다음 사람이 늘린다.
 */
const EXEMPT = [
  ["src/app/guide/", "안내 문서는 ko판·en판을 따로 두는 설계다(guide-index.ts의 audience)."],
  ["src/app/about/", "소개는 ko·en 두 벌 정책이다. 23로케일 번역 대상이 아니다."],
  ["src/app/contact/", "문의도 같은 정책이다."],
  ["src/app/notice/", "공지도 같은 정책이다."],
  ["src/app/naming-artist/", "운영자 콘솔은 한국어 전용이다. 이용자 화면이 아니다."],
  ["src/components/Admin", "운영자 콘솔 컴포넌트. 위와 같은 이유."],
  ["src/lib/legal-content", "약관 원문은 별도 파이프라인(translate-legal)이 23로케일을 만든다."],
  ["src/lib/i18n", "사전 그 자체."],
  ["src/lib/guide-", "안내 문서 목록. 위 guide와 같은 이유."],
];

/** 주석을 걷어낸다. 이 저장소는 주석이 한국어라, 안 걷으면 소음이 결과를 덮는다. */
function stripComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, " ").replace(/^\s*\/\/.*$/gm, " ");
}

/**
 * 화면에 나갈 수 있는 한국어 문자열만 남긴다.
 *
 * 한글 네 자 이상을 기준으로 삼는다. 그보다 짧으면 단위·조사 조각이라 오탐이 급증한다.
 */
function screenStringsOf(code) {
  const found = [];

  // ① 문자열 리터럴
  for (const m of code.matchAll(/(["'`])((?:(?!\1)[^\\]|\\.)*)\1/g)) {
    const text = m[2];
    if ((text.match(/[가-힣]/g) || []).length >= 4) found.push(text.trim());
  }

  // ② JSX 텍스트 노드 — 태그와 태그 사이에 그대로 적힌 글
  for (const m of code.matchAll(/>([^<>{}]*[가-힣]{4,}[^<>{}]*)</g)) {
    found.push(m[1].replace(/\s+/g, " ").trim());
  }

  return [...new Set(found)];
}

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const full = `${dir}/${name}`;
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.tsx?$/.test(name)) out.push(full);
  }
  return out;
}

const problems = [];
const apiStrings = [];
let scanned = 0;

for (const app of APP_KEYS) {
  const root = `apps/${app}/src`;
  const files = walk(root);
  let hits = 0;
  let api = 0;

  for (const file of files) {
    const rel = file.slice(`apps/${app}/`.length);
    if (EXEMPT.some(([prefix]) => rel.startsWith(prefix))) continue;
    scanned += 1;

    const code = stripComments(readFileSync(file, "utf8"));
    for (const text of screenStringsOf(code)) {
      const short = text.length > 46 ? `${text.slice(0, 46)}…` : text;
      /**
       * **API 라우트의 오류 문구는 따로 센다.**
       *
       * 화면 문구와 성격이 다르다 — 대부분 이용자가 볼 일 없는 상태(저장소 미설정, 잘못된
       * 요청)이고, 보이는 경우에도 화면이 자기 문구로 갈아 끼우는 자리가 많다. 이것까지
       * 실패로 잡으면 **진짜 화면 결함이 천 건의 소음에 묻힌다**(처음 돌렸을 때 실제로 그랬다).
       *
       * 다만 0으로 세지도 않는다. 23로케일 서비스에서 이용자에게 그대로 노출되는 오류가
       * 있다면 그건 결함이므로, 수만 세어 보여 주고 판단을 남긴다.
       */
      if (rel.startsWith("src/app/api/")) {
        api += 1;
        apiStrings.push([app, rel, short]);
      } else {
        hits += 1;
        problems.push([app, rel, short]);
      }
    }
  }

  console.log(
    `  ${app.padEnd(12)} 화면 ${String(hits).padStart(3)}건 · (참고) API 오류 문구 ${String(api).padStart(4)}건`,
  );
}

/**
 * 대조군 — 검사가 살아 있는지 증명한다.
 *
 * 실제로 있었던 결함(하드코딩된 한국어)과, 있어서는 안 될 오탐(주석 속 한국어·짧은 조각)을
 * 함께 넣는다. 둘 다 맞아야 이 결과를 믿을 수 있다.
 */
const CONTROL = [
  { name: "코드에 박힌 한국어", src: `const label = "찾지 못했습니다";`, expect: true },
  { name: "주석 속 한국어", src: `// 여기는 찾지 못했습니다를 그린다\nconst a = 1;`, expect: false },
  { name: "JSX 텍스트", src: `<p>상징을 찾지 못했습니다</p>`, expect: true },
  { name: "짧은 조각", src: `const unit = "자";`, expect: false },
];
const controlOk = CONTROL.every(
  (c) => screenStringsOf(stripComments(c.src)).length > 0 === c.expect,
);

console.log("\n화면 문자열 전수 검사");
console.log(`  앱 ${APP_KEYS.length}개 · 파일 ${scanned}개 · 제외 규칙 ${EXEMPT.length}개`);

if (!controlOk) {
  console.log("  ✗ 대조군 실패 — 판정이 고장 났다. 이 결과를 믿지 말 것.");
  process.exit(1);
}
console.log("  ✓ 대조군: 박힌 글은 잡고, 주석과 짧은 조각은 통과시킨다");
console.log(`  · API 라우트의 한국어 오류 문구 ${apiStrings.length}건 — 실패로 세지 않는다(위 주석 참고)`);

if (problems.length) {
  console.log(`\n사전을 거치지 않는 글 ${problems.length}건:`);
  let last = "";
  for (const [app, file, text] of problems) {
    if (app !== last) console.log(`\n  [${app}]`);
    last = app;
    console.log(`    ${file}`);
    console.log(`      ${text}`);
  }
  console.log("\n이 글은 어느 언어로 접속해도 한국어로 나간다. 사전으로 옮기거나,");
  console.log("설계상 한국어인 자리라면 EXEMPT에 **이유와 함께** 더할 것.");
  process.exit(1);
}

console.log("\nALL PASS — 이용자 화면의 글이 모두 사전을 거친다.");
