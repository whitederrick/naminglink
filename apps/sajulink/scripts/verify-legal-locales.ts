// 번역된 약관 21개 로케일이 ko 원본과 **구조가 같은지** 본다.
//
// 타입은 여기까지 못 본다. `LegalDocument`는 섹션 배열의 길이도, 문단 수도, 플레이스홀더가
// 살아 있는지도 보장하지 않는다. 정작 화면을 깨뜨리거나 고지를 무효로 만드는 것은 그쪽이다:
//
//   - 섹션·문단·항목 수가 어긋나면 조항 하나가 통째로 사라진 것이다
//   - 플레이스홀더가 번역돼 버리면 연락처·가격 자리에 `{email}`이 그대로 노출된다
//   - 한글이 남아 있으면 번역이 빠진 것이다
//
// 실행: apps/inyeonlink 에서
//   ../naminglink/node_modules/.bin/tsx --tsconfig tsconfig.json scripts/verify-legal-locales.ts
import { readFileSync } from "node:fs";
import path from "node:path";

import { supportedLocales } from "../src/lib/i18n";
import { legalLocaleDocuments } from "../src/lib/legal-locales";
import {
  LEGAL_PLACEHOLDERS,
  type LegalFlagCombo,
} from "../src/lib/legal-locales/types";
import type { LegalDocument } from "../src/lib/legal-content";

const COMBOS: LegalFlagCombo[] = ["a0p0", "a1p0", "a0p1", "a1p1"];
const KEYS = ["privacy", "terms", "refund", "pricing"] as const;
const HANGUL = /[가-힣]/;

const koDocs = JSON.parse(
  readFileSync(
    path.join(process.cwd(), "src", "lib", "legal-locales", "_ko-docs.json"),
    "utf8",
  ),
) as Record<LegalFlagCombo, Record<string, LegalDocument>>;

function placeholdersOf(document: LegalDocument) {
  const text = JSON.stringify(document);
  return LEGAL_PLACEHOLDERS.filter((token) => text.includes(token)).join(",");
}

let failures = 0;

// ko·en을 뺀 21개가 빠짐없이 있는지부터 본다(타입이 Record라 컴파일에서도 걸리지만,
// 이 스크립트만 돌려도 알 수 있게 한 번 더 확인한다).
const expected = supportedLocales.filter((locale) => locale !== "ko" && locale !== "en");
const missing = expected.filter((locale) => !(locale in legalLocaleDocuments));
if (missing.length) {
  console.log(`FAIL 로케일 누락: ${missing.join(", ")}`);
  failures += 1;
}

for (const locale of expected) {
  const bundle = legalLocaleDocuments[locale as keyof typeof legalLocaleDocuments];
  if (!bundle) continue;
  const problems: string[] = [];

  for (const combo of COMBOS) {
    for (const key of KEYS) {
      const source = koDocs[combo][key];
      const target = bundle[combo][key];
      const label = `${combo}/${key}`;

      if (target.sections.length !== source.sections.length) {
        problems.push(`${label}: 섹션 ${target.sections.length} ≠ ko ${source.sections.length}`);
        continue;
      }
      source.sections.forEach((section, index) => {
        const other = target.sections[index]!;
        if (other.paragraphs.length !== section.paragraphs.length) {
          problems.push(
            `${label} 섹션 ${index + 1}: 문단 ${other.paragraphs.length} ≠ ko ${section.paragraphs.length}`,
          );
        }
        const sourceBullets = section.bullets?.length ?? 0;
        const otherBullets = other.bullets?.length ?? 0;
        if (sourceBullets !== otherBullets) {
          problems.push(
            `${label} 섹션 ${index + 1}: 항목 ${otherBullets} ≠ ko ${sourceBullets}`,
          );
        }
      });

      if (placeholdersOf(target) !== placeholdersOf(source)) {
        problems.push(
          `${label}: 플레이스홀더 [${placeholdersOf(target)}] ≠ ko [${placeholdersOf(source)}]`,
        );
      }

      const text = [
        target.title,
        target.intro,
        ...target.sections.flatMap((section) => [
          section.heading,
          ...section.paragraphs,
          ...(section.bullets ?? []),
        ]),
      ].join(" ");
      // **괄호 안의 한국어는 통과시킨다.** `사주(四柱)`처럼 원어를 함께 보여 주는 것은 번역
      // 누락이 아니라 흔한 현지화 방식이고, 이 서비스는 한국 명리를 다루므로 오히려 도움이 된다.
      // 괄호 **밖**에 한국어가 남아 있으면 그건 번역이 빠진 것이다 — 상품명을 브랜드로 오인해
      // 그대로 둔 경우(`**궁합 리포트 PDF**`)와 문단이 통째로 안 옮겨진 경우가 실제로 있었다.
      const outsideParens = text.replace(/[(（][^)）]*[)）]/g, " ");
      if (HANGUL.test(outsideParens)) {
        const sample = outsideParens.match(/.{0,20}[가-힣]+.{0,20}/)?.[0] ?? "";
        problems.push(`${label}: 괄호 밖에 한글이 남아 있다 — "${sample.trim()}"`);
      }
    }
  }

  if (problems.length === 0) {
    console.log(`OK   ${locale}`);
    continue;
  }
  failures += 1;
  console.log(`FAIL ${locale}`);
  for (const problem of problems.slice(0, 6)) console.log(`  ${problem}`);
  if (problems.length > 6) console.log(`  … 외 ${problems.length - 6}건`);
}

if (failures) {
  console.error(`\n${failures}개 로케일에서 문제를 찾았습니다.`);
  process.exit(1);
}
console.log(`\nALL PASS — ${expected.length}개 로케일 × 조합 4 × 문서 4`);
