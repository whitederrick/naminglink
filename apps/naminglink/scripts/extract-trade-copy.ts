// 거래 직결 문구 66자리를 `ko` ↔ `en` 짝으로 뽑아 JSON 으로 낸다.
//
// 무엇이 66자리인지는 `docs/TRADE_COPY_REVIEW_EN_2026-08-21.md` §2 가 정한다 —
// 금액 21 · 환불 15 · 결제 고시 19 · 사업자 9 (+곁가지 2). 이 스크립트는 그 목록을
// **자리로** 다시 적은 것이고, 합계가 66이 아니면 멈춘다(목록과 코드가 어긋난 것이다).
//
// **검사기가 아니다.** 사람이 읽을 것을 모아 줄 뿐이라 판정을 하지 않는다.
// 이름에 verify|audit|validate 를 넣지 않은 것도 그래서다 — 전수 스윕이 집어가면 안 된다.
//
// 절을 제목이 아니라 **차례(index)** 로 고르는 이유: 제목은 로케일마다 다른 문자열이라
// 한국어판에서 못 찾는다. 차례는 두 파일이 같은 순서를 지킨다는 전제인데, 그 전제가
// 깨지면 아래 SHAPE 검사가 걸린다.
//
// 실행 (apps/naminglink 에서):
//   node_modules/.bin/tsx --tsconfig tsconfig.json scripts/extract-trade-copy.ts <출력.json>

import { writeFileSync } from "node:fs";

import { companyInfo, romanize } from "../src/lib/company";
import { getConsentCopy } from "../src/lib/checkout-consent";
import { getLegalLocaleContent } from "../src/lib/legal-content";

type Item = {
  id: string;
  group: "C" | "B" | "A" | "D";
  groupLabel: string;
  place: string;
  label: string;
  ko: string;
  en: string;
};

const ko = getLegalLocaleContent("ko");
const en = getLegalLocaleContent("en");

const items: Item[] = [];

function pushSection(
  group: Item["group"],
  groupLabel: string,
  doc: "terms" | "privacy" | "refund" | "pricing",
  sectionIndex: number,
  idPrefix: string,
) {
  const koSection = ko.documents[doc].sections[sectionIndex];
  const enSection = en.documents[doc].sections[sectionIndex];
  if (!koSection || !enSection) {
    throw new Error(`${doc}[${sectionIndex}] 가 한쪽에 없다 — 목록과 파일이 어긋났다`);
  }
  if (koSection.paragraphs.length !== enSection.paragraphs.length) {
    throw new Error(
      `${doc}[${sectionIndex}] 문단 수가 다르다: ko ${koSection.paragraphs.length} vs en ${enSection.paragraphs.length}`,
    );
  }
  koSection.paragraphs.forEach((koText, i) => {
    items.push({
      id: `${idPrefix}-${i + 1}`,
      group,
      groupLabel,
      place: `[${doc}] ${enSection.title}`,
      label: `문단 ${i + 1} / ${koSection.paragraphs.length}`,
      ko: koText,
      en: enSection.paragraphs[i],
    });
  });
}

// ── C. 결제 고시 19항목 ────────────────────────────────────────────────
// 사용자가 「C↔B 부터」라고 했다. 분쟁이 실제로 나는 자리이고, B(환불)와 같은 조건을
// 두 번 말하므로 나란히 읽어야 어긋남이 보인다.
const consentKinds = [
  { kind: "DIGITAL" as const, label: "디지털 콘텐츠" },
  { kind: "MADE_TO_ORDER" as const, label: "주문 제작(도장)" },
];

for (const { kind, label } of consentKinds) {
  const koCopy = getConsentCopy("ko", kind);
  const enCopy = getConsentCopy("en", kind);
  if (koCopy.info.length !== enCopy.info.length) {
    throw new Error(`결제 고시 ${kind} 항목 수가 다르다: ko ${koCopy.info.length} vs en ${enCopy.info.length}`);
  }
  koCopy.info.forEach(([koName, koBody], i) => {
    const [enName, enBody] = enCopy.info[i];
    items.push({
      id: `C-${kind}-info-${i + 1}`,
      group: "C",
      groupLabel: "C. 결제 고시",
      place: `checkout-consent · ${label}`,
      label: `${enName} (원문 「${koName}」)`,
      ko: koBody,
      en: enBody,
    });
  });
  const tail = [
    { key: "consent", label: "동의문 — 실제로 체크를 받는 문장" },
    { key: "required", label: "미동의 안내" },
    { key: "refund", label: "환불 안내문" },
  ] as const;
  for (const { key, label: tailLabel } of tail) {
    items.push({
      id: `C-${kind}-${key}`,
      group: "C",
      groupLabel: "C. 결제 고시",
      place: `checkout-consent · ${label}`,
      label: tailLabel,
      ko: koCopy[key],
      en: enCopy[key],
    });
  }
}

// ── B. 환불 15문단 (문서 전문) ─────────────────────────────────────────
ko.documents.refund.sections.forEach((_section, index) => {
  pushSection("B", "B. 환불 정책", "refund", index, `B-${index + 1}`);
});

// ── A. 금액 21문단 ─────────────────────────────────────────────────────
// terms §4 Paid Services 는 sections[3]. pricing 은 §3~§7 이 sections[2]~[6].
pushSection("A", "A. 금액", "terms", 3, "A-terms4");
for (let i = 2; i <= 6; i += 1) {
  pushSection("A", "A. 금액", "pricing", i, `A-pricing${i + 1}`);
}

// ── D. 사업자 정보 9항목 ───────────────────────────────────────────────
// en 이 보는 것은 romanize 를 통과한 값이다. 한국어 원값과 나란히 놓는다.
const companyFields = [
  { key: "legalEntity", label: "상호" },
  { key: "representative", label: "대표자" },
  { key: "businessNumber", label: "사업자등록번호" },
  { key: "mailOrderNumber", label: "통신판매업 신고번호" },
  { key: "address", label: "주소" },
  { key: "customerCenter", label: "고객센터" },
  { key: "email", label: "이메일" },
  { key: "privacyOfficer", label: "개인정보 보호책임자" },
  { key: "hostingProvider", label: "호스팅 제공자" },
] as const;

const facts = companyInfo as unknown as Record<string, string>;
for (const { key, label } of companyFields) {
  const raw = facts[key];
  if (typeof raw !== "string") {
    throw new Error(`사업자 값 ${key} 가 없다 — core/company 의 COMPANY_FACTS 를 볼 것`);
  }
  items.push({
    id: `D-${key}`,
    group: "D",
    groupLabel: "D. 사업자 정보",
    place: "packages/core/src/company.ts",
    label,
    ko: raw,
    en: romanize(raw),
  });
}

// ── 곁가지 2 — privacy §8 개인정보 보호책임자 ──────────────────────────
pushSection("D", "D. 사업자 정보 (곁가지)", "privacy", 7, "D-privacy8");

// ── 합계 검사 — 목록과 어긋나면 여기서 멈춘다 ──────────────────────────
const counts = items.reduce<Record<string, number>>((acc, item) => {
  acc[item.group] = (acc[item.group] ?? 0) + 1;
  return acc;
}, {});
const expected = { A: 21, B: 15, C: 19, D: 11 };
const lines: string[] = [];
let mismatch = false;
for (const [group, want] of Object.entries(expected)) {
  const got = counts[group] ?? 0;
  lines.push(`  ${group}: ${got} (기대 ${want})${got === want ? "" : "   ← 어긋남"}`);
  if (got !== want) mismatch = true;
}
console.log(lines.join("\n"));
console.log(`  합계: ${items.length} (기대 66)`);
if (mismatch || items.length !== 66) {
  console.error("\n목록(docs/TRADE_COPY_REVIEW_EN_2026-08-21.md §2)과 어긋난다. 화면을 만들지 않는다.");
  process.exit(1);
}

const out = process.argv[2];
if (!out) {
  console.error("출력 경로를 인자로 줄 것");
  process.exit(1);
}
writeFileSync(out, JSON.stringify(items, null, 2), "utf8");
console.log(`\n${out} 에 썼다`);
process.exit(0);
