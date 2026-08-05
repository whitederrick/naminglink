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
      //
      // **긴 값부터 지운다.** 짧은 값이 긴 값의 앞부분일 때 순서를 안 맞추면 검사가 깨진다 —
      // `representative: "곽은하"`를 먼저 지우면 `"곽은하(대표)"`가 `"(대표)"`만 남고, 그
      // 뒤에 오는 전체 값은 더 이상 매칭되지 않아 **멀쩡한 문서를 한글 잔존으로 잡는다**
      // (2026-08-06에 실제로 그랬다). 길이 내림차순이면 늘 긴 쪽이 먼저 사라진다.
      const companyValues = Object.values(companyInfo).sort(
        (a, b) => b.length - a.length,
      );
      const all = [doc.title, doc.description, ...doc.sections.flatMap((s) => [s.title, ...s.paragraphs])];
      for (const text of all) {
        let stripped = text;
        for (const value of companyValues) stripped = stripped.split(value).join("");
        if (HANGUL.test(stripped)) problems.push(`${kind}: hangul remains — "${text.slice(0, 60)}"`);
      }
    }
    if (doc.effectiveDate !== "2026-07-22") problems.push(`${kind}: effectiveDate ${doc.effectiveDate}`);
    // 일괄 공개 상품은 국내 990원·해외 US$1.99 이원 가격: 한국어 원본은 둘 다 병기하고,
    // 비한국어 번역은 해외 결제 가격(US$1.99)만 표기한다.
    // 비한국어는 금액 표기를 결제 화면(displayPrice)과 같은 ₩2,900·US$1.99 형식으로 고정한다.
    // 번역이 로케일 관습대로 2.900 / 990 Won / 1,99 US$ 등으로 되돌리면 여기서 걸린다
    // (되돌았을 때는 scripts/normalize-legal-prices.mjs·normalize-legal-usd.mjs 실행).
    const expectedPrices =
      locale === "ko"
        ? ["2,900", "4,900", "9,900", "990", "US$1.99"]
        : ["₩2,900", "₩4,900", "₩9,900", "US$1.99"];
    const priceOk = kind === "pricing" || kind === "refund" || kind === "terms"
      ? expectedPrices.every((p) => JSON.stringify(doc).includes(p))
      : true;
    if (!priceOk) problems.push(`${kind}: missing one of the prices ${expectedPrices.join("/")}`);
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
