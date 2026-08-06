// PDF에 쓰는 **모든 문구가 실제로 찍힐 수 있는지** 렌더 없이 전수 확인한다.
//
// 실행: apps/dreamslink 에서
//   ../naminglink/node_modules/.bin/tsx scripts/verify-pdf-glyphs.ts
//
// 왜 렌더가 아니라 이건가: @react-pdf는 서체에 글리프가 없어도 **오류 없이** PDF를 만든다.
// 없는 글자는 내장 Helvetica로 되돌아가 엉뚱한 라틴 글자로 찍히는데, 텍스트를 추출하면 원래
// 문자열이 그대로 나와서 더더욱 안 보인다. 눈으로 보는 수밖에 없었고, 그래서 **표본만 보게
// 된다** — 2026-07-31에 로케일 열 개를 렌더해 놓고도 일본어 가나가 통째로 깨진 것을
// 놓쳤다(하필 눈으로 본 페이지에 가나가 적었다).
//
// 이 검사는 표본을 안 쓴다. 23로케일 사전의 **모든 문자열**을 실제 라우팅(`splitScriptRuns`)에
// 태우고, 배정된 서체 파일의 cmap에 그 글자가 있는지 본다. 몇 초면 끝나고 빠뜨림이 없다.
//
// **레이아웃은 이걸로 못 본다.** 넘침·겹침·빈 지면은 여전히 PNG로 봐야 한다
// (`scripts/render-report-scripts.tsx`). 둘은 서로를 대신하지 못한다.
import path from "node:path";

import fontkit from "fontkit";
import { splitScriptRuns } from "@naminglink/core/pdf/script-runs";

import { getDictionary, supportedLocales, type Locale } from "../src/lib/i18n";
import { FONT_FILES } from "../src/lib/pdf/fonts";

const REGISTERED = Object.keys(FONT_FILES);

/**
 * 이름은 이용자가 자기 문자로 적는다. 사전에 없는 문자 체계가 이 자리로 들어온다 —
 * **문서 언어가 영어로 바뀌어도 이름은 그대로다**(ar·km 이용자가 `pdfLocale` 때문에 영어
 * 리포트를 받아도 거기 찍히는 이름은 아랍 문자다).
 */
const NAME_SAMPLES = [
  "지현",
  "さくら",
  "ミナ",
  "小明",
  "Анастасия",
  "Ayşegül",
  "Nguyễn Thị Hà",
  "สมชาย",
  "अनन्या",
  "عبد الرحمن",
  "សុភា",
];

type Coverage = { family: string; files: string[]; has: (codePoint: number) => boolean };

function loadCoverage(): Map<string, Coverage> {
  const coverage = new Map<string, Coverage>();
  for (const [family, files] of Object.entries(FONT_FILES)) {
    const fonts = files.map(({ file }) => {
      const opened = fontkit.openSync(path.join(process.cwd(), "assets/fonts", file));
      // fontkit은 컬렉션(.ttc)이면 배열 같은 객체를 준다. 이 저장소는 단일 서체만 쓴다.
      return opened as { hasGlyphForCodePoint: (codePoint: number) => boolean };
    });
    coverage.set(family, {
      family,
      files: files.map(({ file }) => file),
      // 굵기가 둘이면 **둘 다** 있어야 한다 — 제목만 굵게 쓰는 자리에서 깨지기 때문이다.
      has: (codePoint) => fonts.every((font) => font.hasGlyphForCodePoint(codePoint)),
    });
  }
  return coverage;
}

/** 사전 어디에 있든 문자열을 전부 끌어모은다. */
function collectStrings(value: unknown, out: string[]) {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) for (const item of value) collectStrings(item, out);
  else if (value && typeof value === "object") {
    for (const item of Object.values(value)) collectStrings(item, out);
  }
}

// 공백·제어 문자는 글리프가 없어도 정상이다(줄바꿈·양방향 표시·결합용 제로폭 문자).
const IGNORED = new Set([..." \t\r\n ​‌‍‎‏﻿"]);

function main() {
  const coverage = loadCoverage();
  console.log(
    `서체 ${coverage.size}종: ${[...coverage.values()].map((c) => c.files.join("+")).join(", ")}\n`,
  );

  let failures = 0;
  for (const locale of supportedLocales as readonly Locale[]) {
    const strings: string[] = [];
    collectStrings(getDictionary(locale), strings);
    strings.push(...NAME_SAMPLES);

    // 어느 서체로 갔다가 못 찍히는지, 문자별로 모은다.
    const missing = new Map<string, Set<string>>();
    for (const raw of strings) {
      // `MixedText`가 `**`를 걷어내고 나서 라우팅한다. 같은 순서로 따라간다.
      for (const run of splitScriptRuns(raw.replace(/\*\*/g, ""), {
        registeredFamilies: REGISTERED,
      })) {
        const font = coverage.get(run.font);
        if (!font) {
          // 라우팅이 등록되지 않은 패밀리를 가리킨다 — 표가 어긋난 것이다.
          missing.set(`${run.font}(미등록)`, new Set(run.text));
          continue;
        }
        for (const char of run.text) {
          if (IGNORED.has(char) || font.has(char.codePointAt(0)!)) continue;
          const key = run.font;
          if (!missing.has(key)) missing.set(key, new Set());
          missing.get(key)!.add(char);
        }
      }
    }

    if (missing.size === 0) {
      console.log(`  O ${locale.padEnd(4)} 문자열 ${strings.length}`);
      continue;
    }
    failures += 1;
    console.log(`  X ${locale.padEnd(4)} 문자열 ${strings.length}`);
    for (const [family, chars] of missing) {
      const sample = [...chars].sort().slice(0, 30).join("");
      console.log(`       ${family}: ${chars.size}자 없음 — ${sample}`);
    }
  }

  console.log(
    failures === 0
      ? "\nALL PASS — 23로케일 문구와 이름 표본이 전부 찍힌다."
      : `\n${failures}개 로케일에서 글자가 깨진다. 서체를 등록하거나 라우팅을 고칠 것.`,
  );
  console.log("레이아웃은 이 검사로 안 보인다 — render-report-scripts.tsx로 PNG를 볼 것.");
  process.exitCode = failures === 0 ? 0 : 1;
}

main();
