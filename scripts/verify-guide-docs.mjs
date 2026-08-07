// 안내 문서 전수 검사 — 네 앱.
//
// **왜 만들었는가**(2026-08-07). 드림링크의 한국어 안내가 **한 편**뿐인 것을 아무도 모르고
// 있었다. 형제 앱은 9~10편이다. 파일이 있고 빌드가 되고 링크가 걸려 있으니 어느 검사도
// 빨개지지 않았고, **없는 것은 없다고 말해 주는 자리가 없었다.**
//
// 같은 자리에서 나올 수 있는 결함이 더 있다. 전부 tsc와 빌드를 통과하는 종류다:
//
//   · `audience: "ko"`인데 본문이 영어 — 한국어 이용자에게 영어가 나간다
//   · 목록에 있는데 파일이 없다(404) / 파일은 있는데 목록에 없다(아무도 못 닿는다)
//   · 형제 앱에서 복제한 뒤 남은 남의 서비스 이야기 — 「궁합」이 해몽 안내에 남는 식
//   · 없는 문서로 거는 링크
//   · audience가 다른 문서로 거는 링크 — 누르면 언어가 튄다
//
// 실행: node scripts/verify-guide-docs.mjs

import { readFileSync, existsSync, readdirSync } from "node:fs";

import { APP_KEYS } from "./app-keys.mjs";

/**
 * 그 앱에 있으면 안 되는 말. **라틴과 한글을 함께 본다** — 2026-08-05에 한글 「인연」을 놓쳐
 * 꼬리글이 `Saju-Link ( 인연 링크 )`로 배포됐다.
 */
const FOREIGN = {
  naminglink: [/궁합/, /해몽/, /태몽/, /인연링크/, /사주링크/, /드림링크/, /Inyeon-Link/i, /Saju-Link/i, /Dreams-Link/i],
  inyeonlink: [/해몽/, /태몽/, /작명/, /작명링크/, /사주링크/, /드림링크/, /Naming-Link/i, /Saju-Link/i, /Dreams-Link/i],
  sajulink: [/궁합/, /해몽/, /태몽/, /인연의 결/, /인연링크/, /드림링크/, /Inyeon-Link/i, /Naming-Link/i, /Dreams-Link/i],
  dreamslink: [/궁합/, /작명/, /인연의 결/, /인연링크/, /사주링크/, /Inyeon-Link/i, /Saju-Link/i, /Naming-Link/i],
};

/**
 * 본문 분량의 하한. **대상마다 다르다** — 한글은 라틴보다 같은 뜻을 훨씬 적은 글자로 적는다.
 * 실측 중앙값이 한국어 610자 · 영어 1,780자라, 그 아래로 크게 벗어난 것만 잡게 잡았다.
 * 문서를 길게 쓰라는 뜻이 아니라 **자리만 만들고 안 채운 것**을 찾으려는 값이다.
 */
const FLOOR = { ko: 450, global: 900 };

/**
 * 산문이 아니라서 이 잣대를 대면 안 되는 문서.
 *
 * 예외를 둘 때는 **왜인지 함께 적는다.** 이유 없는 예외는 다음 사람이 지우거나 늘린다.
 */
const NOT_PROSE = {
  "naminglink/hanja": "인명용 한자 9,088자 목록 페이지다. 글이 아니라 표라 분량으로 잴 수 없다.",
};

/** JSX에서 사람이 읽는 글만 남긴다. */
function proseOf(source) {
  const start = source.indexOf("<GuideShell");
  if (start < 0) return "";
  return source
    .slice(start)
    .replace(/className="[^"]*"/g, " ")
    .replace(/href=\{[^}]*\}/g, " ")
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function entriesOf(app) {
  const path = `apps/${app}/src/lib/guide-index.ts`;
  if (!existsSync(path)) return null;
  const source = readFileSync(path, "utf8");
  const entries = [];
  const re = /slug:\s*"([a-z0-9-]+)"[\s\S]*?audience:\s*"(ko|global)"/g;
  let match;
  while ((match = re.exec(source))) entries.push({ slug: match[1], audience: match[2] });
  return entries;
}

const problems = [];
let checked = 0;

for (const app of APP_KEYS) {
  const entries = entriesOf(app);
  if (!entries?.length) {
    problems.push([app, "-", "guide-index.ts에서 문서를 하나도 읽지 못했다 — 형태가 바뀌었는지 볼 것"]);
    continue;
  }

  const dir = `apps/${app}/src/app/guide`;
  const onDisk = readdirSync(dir).filter((name) => existsSync(`${dir}/${name}/page.tsx`));
  for (const slug of onDisk) {
    if (!entries.some((entry) => entry.slug === slug)) {
      problems.push([app, slug, "파일은 있는데 guide-index에 없다 — 허브가 링크하지 않는다"]);
    }
  }

  const count = { ko: 0, global: 0 };

  for (const entry of entries) {
    const file = `${dir}/${entry.slug}/page.tsx`;
    if (!existsSync(file)) {
      problems.push([app, entry.slug, "목록에 있는데 파일이 없다 — 404가 된다"]);
      continue;
    }
    checked += 1;
    count[entry.audience] += 1;

    const source = readFileSync(file, "utf8");
    const prose = proseOf(source);
    const ko = (prose.match(/[가-힣]/g) || []).length;
    const en = (prose.match(/[A-Za-z]/g) || []).length;

    // ① 본문 언어가 audience와 맞는가
    const wrote = ko > en ? "ko" : "global";
    if (wrote !== entry.audience) {
      problems.push([
        app,
        entry.slug,
        `audience=${entry.audience}인데 본문은 ${wrote === "ko" ? "한국어" : "영어"}다 (한글 ${ko} · 라틴 ${en})`,
      ]);
    }

    // ② 자리만 만들고 안 채운 것
    const volume = entry.audience === "ko" ? ko : en;
    if (volume < FLOOR[entry.audience] && !NOT_PROSE[`${app}/${entry.slug}`]) {
      problems.push([app, entry.slug, `본문이 얇다 — ${volume}자 (하한 ${FLOOR[entry.audience]})`]);
    }

    // ③ 남의 서비스 이야기가 남아 있는가
    for (const pattern of FOREIGN[app] ?? []) {
      if (pattern.test(prose)) problems.push([app, entry.slug, `다른 서비스 잔재: ${pattern.source}`]);
    }

    // ④⑤ 문서끼리의 링크가 성립하는가
    for (const link of source.matchAll(/localePath\("\/guide\/([a-z0-9-]+)"/g)) {
      const target = entries.find((e) => e.slug === link[1]);
      if (!target) {
        problems.push([app, entry.slug, `없는 문서로 링크한다: /guide/${link[1]}`]);
      } else if (target.audience !== entry.audience) {
        problems.push([
          app,
          entry.slug,
          `audience가 다른 문서로 링크한다: /guide/${link[1]}(${target.audience}) — 누르면 언어가 튄다`,
        ]);
      }
    }
  }

  console.log(`  ${app.padEnd(12)} ko ${String(count.ko).padStart(2)}편 · global ${String(count.global).padStart(2)}편`);
}

/**
 * 대조군 — 검사가 살아 있는지 증명한다.
 *
 * 실제로 있었던 결함 두 가지를 만들어 넣고 잡히는지 본다. 이것이 없으면 규칙이 망가져
 * 아무것도 못 잡는 상태에서 "ALL PASS"만 보게 된다.
 */
const CONTROL = [
  { name: "영어 본문에 audience=ko", prose: "This document is written in English.", audience: "ko", caught: null },
  { name: "한국어 본문에 audience=ko", prose: "이 문서는 한국어로 적혀 있습니다.", audience: "ko", caught: null },
];
for (const c of CONTROL) {
  const ko = (c.prose.match(/[가-힣]/g) || []).length;
  const en = (c.prose.match(/[A-Za-z]/g) || []).length;
  c.caught = (ko > en ? "ko" : "global") !== c.audience;
}
console.log("\n안내 문서 전수 검사");
console.log(`  앱 ${APP_KEYS.length}개 · 문서 ${checked}편 · 예외 ${Object.keys(NOT_PROSE).length}개`);

if (!CONTROL[0].caught || CONTROL[1].caught) {
  console.log("  ✗ 대조군 실패 — 언어 판정이 고장 났다. 이 결과를 믿지 말 것.");
  process.exit(1);
}
console.log("  ✓ 대조군: 어긋난 언어는 잡고, 맞는 언어는 통과시킨다");

if (problems.length) {
  console.log(`\n어긋난 자리 ${problems.length}건:`);
  let last = "";
  for (const [app, slug, why] of problems) {
    if (app !== last) console.log(`\n  [${app}]`);
    last = app;
    console.log(`    ${slug.padEnd(28)} ${why}`);
  }
  process.exit(1);
}

console.log("\nALL PASS — 모든 안내 문서가 대상 언어로 적혀 있고, 닿고, 남의 서비스 이야기가 없다.");
