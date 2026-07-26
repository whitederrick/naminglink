// ko.ts의 4개 문서 sections를 translate-legal-content.mjs가 읽는 _ko-docs.json으로 추출한다.
// (번역 스크립트는 .mjs라 TS를 직접 임포트할 수 없어 이 스냅샷을 거친다.)
// 실행: npx tsx --tsconfig tsconfig.json scripts/extract-ko-docs.ts
import { writeFileSync } from "node:fs";
import path from "node:path";

import ko from "../src/lib/legal-content/ko";
import { legalDocumentKinds } from "../src/lib/legal-content";

const docs: Record<string, unknown> = {};
for (const kind of legalDocumentKinds) docs[kind] = ko.documents[kind].sections;
const target = path.join(process.cwd(), "src", "lib", "legal-content", "_ko-docs.json");
writeFileSync(target, JSON.stringify(docs, null, 2), "utf8");
console.log(`written: ${target}`);
