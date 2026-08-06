// 꿈 카드 견본을 굽는다. **눈으로 보기 위한 것이다.**
//
// 카드는 결제 뒤에만 나오는 물건이라, 화면을 열어 확인할 수가 없다. 글자가 넘치는지, 상징이
// 넷일 때 꼬리글이 밀리는지는 렌더 결과를 봐야만 안다(PDF도 같은 이유로 PNG로 본다 —
// [[naminglink-pdf-renderer]]).
//
// 실행: apps/dreamslink 에서
//   ../naminglink/node_modules/.bin/tsx --tsconfig tsconfig.json scripts/render-card-sample.ts
//   ... scripts/render-card-sample.ts en      (언어를 골라서)
// 산출: tmp/card-<locale>.png  (tmp/는 git이 무시한다)

import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

import { renderDreamCard } from "../src/lib/card/dream-card";
import { DICT_VERSION } from "../src/lib/dream-symbols";
import { matchDream } from "../src/lib/engines/dream-match";
import { isLocale, type Locale } from "../src/lib/i18n";

// 상징이 여럿 걸리는 문장을 쓴다. **한 개짜리로 확인하면 넘침을 못 본다.**
const SAMPLE_KO = "맑은 물에서 잉어가 뛰어올랐고, 돼지가 집으로 들어왔다. 하늘에는 용이 있었다.";
const SAMPLE_EN = "A carp leapt out of clear water and a pig came into the house. A dragon was in the sky.";

async function main() {
  const arg = process.argv[2];
  const locale: Locale = isLocale(arg) ? arg : "ko";
  const dreamText = locale === "ko" ? SAMPLE_KO : SAMPLE_EN;

  const buffer = await renderDreamCard({
    outcome: matchDream(dreamText),
    dreamText,
    locale,
    // 견본이라 시각을 고정한다. 매번 달라지면 diff로 볼 수 없다.
    generatedAt: "2026-08-06T00:00:00.000Z",
    dictVersion: DICT_VERSION,
  });

  const dir = path.join(process.cwd(), "tmp");
  mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `card-${locale}.png`);
  writeFileSync(file, buffer);
  console.log(`written: ${file} (${buffer.length.toLocaleString()} bytes)`);
}

void main();
