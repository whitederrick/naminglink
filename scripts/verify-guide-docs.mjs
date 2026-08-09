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
 * 앱별 한국어 원문(`lib/doc-content/ko.ts`). 없는 앱은 아직 안 옮긴 것이다.
 *
 * 파일을 통째로 읽어 두고 문서 하나의 글만 잘라 쓴다. TypeScript 를 파싱하지 않는 것은
 * 검사기가 앱의 빌드 도구에 기대지 않게 하려는 것이다 — `tsx` 가 없는 컴퓨터에서도 돌아야 한다.
 */
const docContentKo = Object.fromEntries(
  APP_KEYS.map((app) => {
    const file = `apps/${app}/src/lib/doc-content/ko.ts`;
    return [app, existsSync(file) ? readFileSync(file, "utf8") : null];
  }),
);

/** 한국어 원문에서 문서 하나의 글만 잘라 낸다. 다음 문서 키가 나오는 자리에서 끊는다. */
function docContentProse(app, slug) {
  const source = docContentKo[app];
  if (!source) return "";
  const start = source.indexOf(`"guide/${slug}"`);
  if (start < 0) return "";
  const rest = source.slice(start + 1);
  const next = rest.search(/\n {2}["a-zA-Z][\w/-]*: \{/);
  return next < 0 ? rest : rest.slice(0, next);
}

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
  // `audience` 는 2026-08-09에 `track` 으로 바뀌었다 — 문서를 가르는 기준이 언어가 아니라
  // 어느 서비스를 설명하는가로 옮겨졌기 때문이다. 옛 형태(형제 앱)도 아직 읽어야 한다.
  //
  // **갈래 이름을 목록으로 두지 않는다.** 처음에는 `(ko|global|korean|common)` 으로 적어
  // 두었는데, 인연링크가 자기 서비스 이름(`gunghap`·`affinity`)을 쓰자 그 줄들이 안 맞았다.
  // 안 맞으면 **0건이 되는 것이 아니라 짝이 밀려 붙는다** — 첫 슬러그가 한참 뒤의 갈래와
  // 짝지어져 조용히 틀린 표를 만든다. 갈래 이름은 앱마다 다른 것이 정상이므로 무엇이든 받는다.
  const re = /slug:\s*"([a-z0-9-]+)"[\s\S]*?(?:track|audience):\s*"([a-z-]+)"/g;
  let match;
  while ((match = re.exec(source))) {
    // `track` 은 대상 서비스를 뜻하고 `audience` 는 언어를 뜻했다. 아래 검사들은 아직 언어
    // 기준이므로, **`global` 이라고 적힌 옛 값만** global 로 보고 나머지는 「한국어 원문이
    // 기준」인 ko 로 접어 둔다. 옮긴 앱에는 언어 검사가 걸리지 않으므로 이 접기는 무해하다.
    const track = match[2];
    entries.push({ slug: match[1], audience: track === "global" ? "global" : "ko" });
  }
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

    /**
     * **본문이 어디에 있는가.**
     *
     * 옮기는 중이다. 아직 `page.tsx`의 JSX에 한 언어로 적힌 문서가 있고, `lib/doc-content`로
     * 옮겨져 23개 언어를 갖는 문서가 있다. 뒤엣것은 한국어 원문(`ko.ts`)에서 재야 한다 —
     * 페이지에는 글이 한 글자도 없으므로 여기서 세면 「본문이 얇다」가 된다.
     *
     * **옮겨진 문서에는 언어 검사를 걸지 않는다.** `audience`는 「이 문서는 한 언어짜리다」를
     * 전제한 값이고, 그 전제가 없어지는 중이다. 로케일이 다 있는지는
     * `verify-doc-locales.mjs`가 따로 센다.
     */
    const moved = docContentKo[app]?.includes(`"guide/${entry.slug}"`) ?? false;
    const prose = moved ? docContentProse(app, entry.slug) : proseOf(source);
    const ko = (prose.match(/[가-힣]/g) || []).length;
    const en = (prose.match(/[A-Za-z]/g) || []).length;

    // ① 본문 언어가 audience와 맞는가 — 아직 안 옮긴 문서에만 해당한다
    if (!moved) {
      const wrote = ko > en ? "ko" : "global";
      if (wrote !== entry.audience) {
        problems.push([
          app,
          entry.slug,
          `audience=${entry.audience}인데 본문은 ${wrote === "ko" ? "한국어" : "영어"}다 (한글 ${ko} · 라틴 ${en})`,
        ]);
      }
    }

    // ② 자리만 만들고 안 채운 것. 옮긴 문서는 한국어 원문이 기준이다.
    const volume = moved || entry.audience === "ko" ? ko : en;
    const floor = moved ? FLOOR.ko : FLOOR[entry.audience];
    if (volume < floor && !NOT_PROSE[`${app}/${entry.slug}`]) {
      problems.push([app, entry.slug, `본문이 얇다 — ${volume}자 (하한 ${floor})`]);
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
