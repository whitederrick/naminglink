// ko.ts의 4개 문서 sections를 translate-legal-content.mjs가 읽는 _ko-docs.json으로 추출한다.
// (번역 스크립트는 .mjs라 TS를 직접 임포트할 수 없어 이 스냅샷을 거친다.)
// 실행: npx tsx --tsconfig tsconfig.json scripts/extract-ko-docs.ts
//
// ## 사업자 정보는 값이 아니라 자리표시자로 나간다
//
// ko.ts는 `${companyInfo.email}`처럼 보간해 두는데, 이 파일이 임포트하는 것은 **평가된 모듈**이라
// 그 자리에 값이 들어 있다. 그대로 넘기면 번역기가 그 값을 번역해 버린다 — 2026-08-07까지
// 17개 로케일의 보호책임자 이름이 언어마다 다르게 음역돼 있었다(ja `郭恩河` / zh `郭恩哈`).
//
// 그래서 값을 다시 `{email}`·`{privacyOfficer}` 자리표시자로 되돌려 내보내고, 그 자리를 TS의
// 어떤 식으로 되살릴지도 `_tokens`에 함께 적는다. **표가 두 벌이면 어긋난다** — 번역 스크립트는
// 자기 표를 갖지 않고 이 파일이 적어 준 것을 읽는다.
import { writeFileSync } from "node:fs";
import path from "node:path";

import { COMPANY_FACTS } from "@naminglink/core/company";
import { companyInfo } from "@/lib/company";
import ko from "../src/lib/legal-content/ko";
import { legalDocumentKinds } from "../src/lib/legal-content";

/** 값 → 자리표시자 → 로케일 파일에 되살릴 TS 식. */
const TOKENS = [
  {
    value: companyInfo.privacyOfficer,
    token: "{privacyOfficer}",
    // 비한국어 로케일이므로 로마자 한 벌을 통과시킨다. ko.ts는 손으로 쓰므로 여기 대상이 아니다.
    expr: "${romanize(companyInfo.privacyOfficer)}",
  },
  { value: companyInfo.email, token: "{email}", expr: "${companyInfo.email}" },
];

/**
 * 자리표시자로 나가지 않은 사업자 값이 본문에 남았는지 본다.
 *
 * 남으면 번역기가 그것을 번역·음역한다. `serviceName`은 제외한다 — 브랜드 이름은 본문에
 * 그대로 쓰라고 프롬프트가 지시하는 값이고, 자리표시자로 바꾸면 문장이 어색해진다.
 */
const MUST_NOT_LEAK = Object.entries(COMPANY_FACTS)
  .filter(([, value]) => typeof value === "string" && value.trim().length >= 4)
  .map(([field, value]) => ({ field, value }));

function tokenize(text: string) {
  // 긴 값부터 바꾼다 — `곽은하`를 먼저 바꾸면 `곽은하(대표)`가 `{representative}(대표)`가 된다.
  return [...TOKENS]
    .sort((a, b) => b.value.length - a.value.length)
    .reduce((acc, t) => acc.split(t.value).join(t.token), text);
}

const docs: Record<string, unknown> = { _tokens: {} };
for (const t of TOKENS) (docs._tokens as Record<string, string>)[t.token] = t.expr;

const leaks: string[] = [];
for (const kind of legalDocumentKinds) {
  docs[kind] = ko.documents[kind].sections.map((section) => ({
    title: tokenize(section.title),
    paragraphs: section.paragraphs.map(tokenize),
  }));
  for (const text of JSON.stringify(docs[kind]).split("\n")) {
    for (const { field, value } of MUST_NOT_LEAK) {
      if (text.includes(value)) leaks.push(`${kind}: ${field} = ${value}`);
    }
  }
}

if (leaks.length) {
  console.error("사업자 값이 자리표시자 없이 본문에 있다:");
  for (const leak of new Set(leaks)) console.error(`  ${leak}`);
  console.error("→ ko.ts에서 그 자리를 보간으로 바꾸고, 위 TOKENS에 한 줄 더할 것.");
  process.exit(1);
}

const target = path.join(process.cwd(), "src", "lib", "legal-content", "_ko-docs.json");
writeFileSync(target, JSON.stringify(docs, null, 2), "utf8");
console.log(`written: ${target} (자리표시자 ${TOKENS.length}종)`);
