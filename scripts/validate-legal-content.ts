import { companyInfo } from "../src/lib/company";
import { supportedLocales } from "../src/lib/services";
import { getLegalLocaleContent, legalDocumentKinds } from "../src/lib/legal-content";
import ko from "../src/lib/legal-content/ko";
import { policyDocumentSchema } from "../src/lib/site-content";

const HANGUL = /[ᄀ-ᇿ㄰-㆏가-힯]/;
let failures = 0;

for (const locale of supportedLocales) {
  const { labels, documents } = getLegalLocaleContent(locale);
  const problems: string[] = [];

  for (const label of Object.values(labels)) {
    if (!label || typeof label !== "string") problems.push("empty label");
    if (locale !== "ko" && HANGUL.test(label)) problems.push(`hangul in label: ${label}`);
  }

  for (const kind of legalDocumentKinds) {
    const doc = documents[kind];
    const parsed = policyDocumentSchema.safeParse(doc);
    if (!parsed.success) {
      problems.push(`${kind}: schema fail — ${parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ")}`);
      continue;
    }
    const koDoc = ko.documents[kind];
    if (doc.sections.length !== koDoc.sections.length) {
      problems.push(`${kind}: ${doc.sections.length} sections vs ko ${koDoc.sections.length}`);
    }
    doc.sections.forEach((s, i) => {
      const koSection = koDoc.sections[i];
      if (koSection && s.paragraphs.length !== koSection.paragraphs.length) {
        problems.push(`${kind} section ${i + 1} ("${s.title.slice(0, 30)}"): ${s.paragraphs.length} paragraphs vs ko ${koSection.paragraphs.length}`);
      }
    });
    if (locale !== "ko") {
      // companyInfo 값(보호책임자 등)은 데이터라서 번역 대상이 아님 — 검사에서 제외
      const companyValues = Object.values(companyInfo);
      const all = [doc.title, doc.description, ...doc.sections.flatMap((s) => [s.title, ...s.paragraphs])];
      for (const text of all) {
        let stripped = text;
        for (const value of companyValues) stripped = stripped.split(value).join("");
        if (HANGUL.test(stripped)) problems.push(`${kind}: hangul remains — "${text.slice(0, 60)}"`);
      }
    }
    if (doc.effectiveDate !== "2026-07-22") problems.push(`${kind}: effectiveDate ${doc.effectiveDate}`);
    const priceOk = kind === "pricing" || kind === "refund" || kind === "terms"
      ? ["2,900", "4,900", "9,900", "990"].every((p) => JSON.stringify(doc).includes(p))
      : true;
    if (!priceOk) problems.push(`${kind}: missing one of the prices 2,900/4,900/9,900/990`);
  }

  if (problems.length) {
    failures += problems.length;
    console.log(`FAIL ${locale}`);
    for (const p of problems) console.log(`  - ${p}`);
  } else {
    console.log(`OK   ${locale}`);
  }
}

console.log(failures === 0 ? "\nALL PASS" : `\n${failures} problem(s)`);
process.exit(failures === 0 ? 0 : 1);
