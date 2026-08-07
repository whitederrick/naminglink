// 로케일 사전에 **한국어가 남아 있는지** 전수로 센다.
//
// ## 왜 만들었는가 (2026-08-07)
//
// 드림링크의 **19개 로케일에 「해몽」·「태몽」이 한글 그대로** 나가고 있었다(문자열 55건).
// 러시아어 화면에 «Традиционная 해몽», 중국어 화면에 「传统的 해몽」이 찍혔다. 영어 원문에는
// 한국어가 한 글자도 없다 — 번역기가 **없던 한글을 집어넣은 것**이다.
//
// 원인은 번역기 지시문이었다. 용어를 한글로 적어 두어(「해몽 a traditional dream reading」식)
// 모델이 그것을 "이 낱말은 그대로 두라"로 읽었다. 사주링크는 같은 자리를 영어로만 적었고
// 누출이 5건뿐이었다 — **대조군이 이미 저장소 안에 있었던 셈이다.**
//
// ## 왜 기존 검사로는 안 잡혔나
//
// `verify-i18n`은 **키가 있는지**와 **구조가 맞는지**를 본다. 값이 한국어인 것은 구조로는
// 완벽하다 — 키도 있고, 플레이스홀더도 맞고, 줄 수도 같다. `verify-pdf-glyphs`도 한글은
// 서체에 있으므로 통과시킨다. **번역이 안 된 것과 잘못된 것은 다른 축이다.**
//
// ## 무엇을 정상으로 보는가
//
// 언어 선택기의 「한국어」, 브랜드 병기(「사주 링크」), 사업자 정보(상호·대표자·주소)는
// 한국어가 맞다 — 등기된 이름을 번역하면 사실이 아니게 된다.
//
// 실행: node scripts/verify-locale-leakage.mjs

import { readFileSync, existsSync, readdirSync } from "node:fs";

import { APP_KEYS } from "./app-keys.mjs";

/** 나와도 되는 한국어. **왜 되는지 함께 적는다.** */
const ALLOWED = [
  /한국어/, // 언어 선택기가 스물세 언어 이름을 각 언어로 적는다
  /사주\s*링크/, // 브랜드 병기 — 로고 옆 한글 표기
  /인연\s*링크/,
  /드림\s*링크/,
  /주\)Platforest/, // 사업자 정보 — 등기된 상호
  /곽은하/, // 대표자
  /서울특별시/, // 주소
  /가산동/,
];

/** 한글 두 자 미만은 세지 않는다. 단위·조사 조각이라 오탐만 는다. */
const MIN_HANGUL = 2;

const problems = [];
let scanned = 0;

for (const app of APP_KEYS) {
  const dir = `apps/${app}/src/lib/i18n-locales`;
  if (!existsSync(dir)) {
    // naminglink는 사전을 `Record<Locale, …>`로 두어 파일이 갈리지 않는다. 키 누락은 tsc가 잡는다.
    console.log(`  ${app.padEnd(12)} 로케일 파일 없음 — 건너뜀`);
    continue;
  }

  let leaking = 0;
  for (const file of readdirSync(dir)) {
    const locale = file.replace(/\.ts$/, "");
    if (locale === "ko") continue;
    scanned += 1;

    // 주석은 한국어로 적혀 있다. 걷어내지 않으면 파일마다 걸린다.
    const source = readFileSync(`${dir}/${file}`, "utf8")
      .replace(/\/\*[\s\S]*?\*\//g, " ")
      .replace(/^\s*\/\/.*$/gm, " ");

    let hits = 0;
    for (const match of source.matchAll(/"((?:[^"\\]|\\.)*)"/g)) {
      const text = match[1];
      if (ALLOWED.some((allow) => allow.test(text))) continue;
      if ((text.match(/[가-힣]/g) || []).length < MIN_HANGUL) continue;
      hits += 1;
      if (hits <= 2) {
        problems.push([app, locale, text.length > 64 ? `${text.slice(0, 64)}…` : text]);
      }
    }
    if (hits > 2) problems.push([app, locale, `… 그 밖 ${hits - 2}건`]);
    if (hits) leaking += 1;
  }

  console.log(`  ${app.padEnd(12)} 한국어가 남은 로케일 ${leaking}개`);
}

/**
 * 대조군 — 검사가 살아 있는지 증명한다.
 *
 * 실제로 있었던 누출과, 정상인 값을 함께 넣는다. 둘 다 맞아야 결과를 믿을 수 있다.
 */
const CONTROL = [
  { text: "Традиционная 해몽 не является ключом", expect: true },
  { text: "Традиционное толкование снов не является ключом", expect: false },
  { text: "현재 언어 한국어 English", expect: false },
  { text: "Saju-Link (사주 링크)", expect: false },
];
const controlOk = CONTROL.every((c) => {
  const leaks =
    !ALLOWED.some((a) => a.test(c.text)) && (c.text.match(/[가-힣]/g) || []).length >= MIN_HANGUL;
  return leaks === c.expect;
});

console.log("\n로케일 사전 한국어 누출 검사");
console.log(`  앱 ${APP_KEYS.length}개 · 로케일 파일 ${scanned}개`);

if (!controlOk) {
  console.log("  ✗ 대조군 실패 — 판정이 고장 났다. 이 결과를 믿지 말 것.");
  process.exit(1);
}
console.log("  ✓ 대조군: 누출은 잡고, 브랜드 병기와 언어 이름은 통과시킨다");

if (scanned === 0) {
  console.log("\n검사한 파일이 0개다 — 경로가 맞는지 확인할 것. 통과로 보지 않는다.");
  process.exit(1);
}

if (problems.length) {
  console.log(`\n한국어가 남은 자리 ${problems.length}건:`);
  let last = "";
  for (const [app, locale, text] of problems) {
    if (app !== last) console.log(`\n  [${app}]`);
    last = app;
    console.log(`    [${locale}] ${text}`);
  }
  console.log("\n번역기 지시문에 **한글로 용어를 적지 말 것** — 모델이 '그대로 두라'로 읽는다.");
  console.log("고친 뒤: tsx scripts/translate-i18n.ts <locale> --paths <잎>");
  process.exit(1);
}

console.log("\nALL PASS — 어느 로케일 사전에도 번역되지 않은 한국어가 없다.");
