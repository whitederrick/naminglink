// PDF에 실릴 수 있는 **모든 문자가 실제로 찍히는지** 렌더 없이 전수 확인한다.
//
// 실행: apps/naminglink 에서
//   npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/verify-pdf-glyphs.ts
//
// 왜 렌더가 아니라 이건가: @react-pdf는 서체에 글리프가 없어도 **오류 없이** PDF를 만든다.
// 없는 글자는 내장 Helvetica로 되돌아가 엉뚱한 라틴 글자로 찍히는데, 텍스트를 추출하면 원래
// 문자열이 그대로 나와서 더더욱 안 보인다. 눈으로 보는 수밖에 없었고, 그러면 **표본만 보게
// 된다** — 인연링크에서 로케일 열 개를 렌더해 놓고도 일본어 가나가 통째로 깨진 것을 놓쳤다.
//
// **여기서 검사하는 문자열은 PDF 본문 그 자체가 아니다.** 글로벌 PDF의 해설은 주문 시점에
// 모델이 그 언어로 써 준다(`OUTPUT_LANGUAGE_NAMES`의 23개 언어). 미리 알 수 없으므로, 같은
// 언어의 화면 문구를 **그 언어의 문자 목록 표본**으로 삼는다. 문자 체계가 통째로 빠지는
// 종류의 결함은 이걸로 전부 드러난다.
//
// **레이아웃은 이걸로 못 본다.** 넘침·겹침·빈 지면은 여전히 PNG로 봐야 한다
// (`scripts/render-pdf-scripts.tsx`). 둘은 서로를 대신하지 못한다.
import path from "node:path";

import fontkit from "fontkit";
import { splitScriptRuns } from "@naminglink/core/pdf/script-runs";

import { getAccountCopy } from "@/lib/i18n-account";
import { getAuthCopy } from "@/lib/i18n-auth";
import { getFormCopy } from "@/lib/i18n-form";
import { getResultCopy } from "@/lib/i18n-result";
import { getServiceOverride } from "@/lib/i18n-service";
import { getLandingCopy } from "@/lib/i18n";
import { localeCodes } from "@/lib/locale-codes";
import type { Locale } from "@/lib/services";
import { FONT_FILES } from "@/lib/pdf/report-fonts";

const REGISTERED = Object.keys(FONT_FILES);

/**
 * 이용자가 자기 문자로 적는 자리. 원문 이름은 PDF 표지·아트 페이지에 **그대로** 실린다
 * (`for ${original.name}`). 해설이 영어로 나가도 이 자리는 이용자의 문자 그대로다.
 */
const NAME_SAMPLES = [
  "김하늘",
  "Emily Carter",
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

type Coverage = { files: string[]; has: (codePoint: number) => boolean };

function loadCoverage(): Map<string, Coverage> {
  const coverage = new Map<string, Coverage>();
  for (const [family, files] of Object.entries(FONT_FILES)) {
    const fonts = files.map(({ file }) => {
      const opened = fontkit.openSync(path.join(process.cwd(), "assets/fonts", file));
      return opened as { hasGlyphForCodePoint: (codePoint: number) => boolean };
    });
    coverage.set(family, {
      files: files.map(({ file }) => file),
      // 굵기가 둘이면 **둘 다** 있어야 한다 — 제목만 굵게 쓰는 자리에서 깨지기 때문이다.
      has: (codePoint) => fonts.every((font) => font.hasGlyphForCodePoint(codePoint)),
    });
  }
  return coverage;
}

function collectStrings(value: unknown, out: string[]) {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) for (const item of value) collectStrings(item, out);
  else if (value && typeof value === "object") {
    for (const item of Object.values(value)) collectStrings(item, out);
  }
}

// 공백·제어 문자는 글리프가 없어도 정상이다(줄바꿈·양방향 표시·결합용 제로폭 문자).
const IGNORED = new Set([..." \t\r\n ​‌‍‎‏﻿"]);

function main() {
  const coverage = loadCoverage();
  console.log(`서체 ${coverage.size}종\n`);

  let failures = 0;
  for (const locale of localeCodes as readonly Locale[]) {
    const strings: string[] = [];
    for (const source of [
      getLandingCopy(locale),
      getServiceOverride(locale),
      getFormCopy(locale),
      getResultCopy(locale),
      getAccountCopy(locale),
      getAuthCopy(locale),
    ]) {
      collectStrings(source, strings);
    }
    strings.push(...NAME_SAMPLES);

    const missing = new Map<string, Set<string>>();
    for (const raw of strings) {
      // `MixedText`가 `**`를 걷어내고 나서 라우팅한다. 같은 순서로 따라간다.
      for (const run of splitScriptRuns(raw.replace(/\*\*/g, ""), {
        registeredFamilies: REGISTERED,
      })) {
        const font = coverage.get(run.font);
        if (!font) {
          missing.set(`${run.font}(미등록)`, new Set(run.text));
          continue;
        }
        for (const char of run.text) {
          if (IGNORED.has(char) || font.has(char.codePointAt(0)!)) continue;
          if (!missing.has(run.font)) missing.set(run.font, new Set());
          missing.get(run.font)!.add(char);
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
      console.log(`       ${family}: ${chars.size}자 없음 — ${[...chars].sort().slice(0, 30).join("")}`);
    }
  }

  console.log(
    failures === 0
      ? "\nALL PASS — 23로케일 문구와 이름 표본이 전부 찍힌다."
      : `\n${failures}개 로케일에서 글자가 깨진다. 서체를 등록하거나 라우팅을 고칠 것.`,
  );
  console.log("레이아웃은 이 검사로 안 보인다 — PNG로 따로 볼 것.");
  process.exitCode = failures === 0 ? 0 : 1;
}

main();
