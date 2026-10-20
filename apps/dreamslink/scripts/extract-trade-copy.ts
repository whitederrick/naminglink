// 드림링크 거래 직결 문구를 한국어·영어 짝으로 뽑아 사람이 읽을 목록으로 낸다.
// naminglink 의 `extract-trade-copy.ts`(66자리)와 같은 일이다 — 광고 개방 조건 ②의 입력이다.
//
// **검사기가 아니다.** 판정을 하지 않는다. 이름에 verify|audit|validate 를 넣지 않은 것도
// 그래서다 — 전수 스윕이 집어가면 안 된다.
//
// **약관·환불·요금은 운영 서버가 실제로 내보내는 것을 받는다**(`/api/legal`). 이 문서들은
// 광고·결제 환경변수(`adsEnabled`·`paymentsConfigured`)와 DB 가격에 따라 문장이 달라져서,
// 이 컴퓨터에서 조립하면 사람이 운영에 없는 문구를 읽는다(CLAUDE.md §10 #39).
// 결제 동의·상품정보 고시는 클라이언트 사전(`getDictionary`)이고 환경에 따라 달라지지 않는다.
//
// 실행 (apps/dreamslink 에서):
//   ../naminglink/node_modules/.bin/tsx --tsconfig tsconfig.json scripts/extract-trade-copy.ts <출력.json>

import { createHash } from "node:crypto";
import { writeFileSync } from "node:fs";

import { getDictionary } from "../src/lib/i18n";

const ORIGIN = process.env.TRADE_COPY_ORIGIN ?? "https://dreams-link.com";
const KINDS = ["terms", "refund", "pricing", "privacy"] as const;
type Kind = (typeof KINDS)[number];

type Doc = {
  title: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export type Item = {
  id: string;
  group: "A" | "B" | "C" | "D";
  groupLabel: string;
  place: string;
  label: string;
  ko: string;
  en: string;
};

async function fetchDoc(kind: Kind, lang: "ko" | "en"): Promise<Doc> {
  const res = await fetch(`${ORIGIN}/api/legal?kind=${kind}&lang=${lang}`);
  if (!res.ok) throw new Error(`${kind}/${lang}: HTTP ${res.status}`);
  const body = (await res.json()) as { ok?: boolean; document?: Doc };
  if (!body.ok || !body.document) throw new Error(`${kind}/${lang}: 응답이 문서가 아니다`);
  return body.document;
}

/** 문서의 문단과 목록 항목을 한 줄씩 펼친다. 목록 항목도 한 자리다. */
function flatten(doc: Doc, sectionIndexes: number[] | "all") {
  const rows: { section: string; label: string; text: string }[] = [];
  doc.sections.forEach((section, si) => {
    if (sectionIndexes !== "all" && !sectionIndexes.includes(si)) return;
    section.paragraphs.forEach((text, i) =>
      rows.push({ section: section.heading, label: `문단 ${i + 1} / ${section.paragraphs.length}`, text }),
    );
    (section.bullets ?? []).forEach((text, i) =>
      rows.push({ section: section.heading, label: `항목 ${i + 1} / ${section.bullets!.length}`, text }),
    );
  });
  return rows;
}

async function pairDocs(
  kind: Kind,
  sectionIndexes: number[] | "all",
  group: Item["group"],
  groupLabel: string,
  idPrefix: string,
): Promise<Item[]> {
  const [ko, en] = await Promise.all([fetchDoc(kind, "ko"), fetchDoc(kind, "en")]);
  const koRows = flatten(ko, sectionIndexes);
  const enRows = flatten(en, sectionIndexes);
  if (koRows.length !== enRows.length) {
    throw new Error(`${kind}: 한국어 ${koRows.length}자리 / 영어 ${enRows.length}자리 — 구조가 어긋났다`);
  }
  return koRows.map((row, i) => ({
    id: `${idPrefix}-${i + 1}`,
    group,
    groupLabel,
    place: `[${kind}] ${row.section}  →  ${enRows[i].section}`,
    label: row.label,
    ko: row.text,
    en: enRows[i].text,
  }));
}

function consentItems(): Item[] {
  const ko = getDictionary("ko");
  const en = getDictionary("en");
  const items: Item[] = [];
  for (const [key, name] of [
    ["dreamCard", "꿈 카드"],
    ["conceptionReport", "태몽 리포트 PDF"],
  ] as const) {
    const k = ko[key];
    const e = en[key];
    if (k.productInfo.length !== e.productInfo.length) {
      throw new Error(`${key}: 고시 항목 수가 어긋났다`);
    }
    const push = (id: string, label: string, koText: string, enText: string) =>
      items.push({
        id: `C-${key}-${id}`,
        group: "C",
        groupLabel: "C. 결제 고시",
        place: `i18n · ${name}`,
        label,
        ko: koText,
        en: enText,
      });
    k.productInfo.forEach(([koName, koBody], i) => {
      push(`info-${i + 1}`, `${koName} / ${e.productInfo[i][0]}`, koBody, e.productInfo[i][1]);
    });
    push("consent", "동의 문구", k.consentLabel, e.consentLabel);
    push("required", "동의 안 했을 때", k.consentRequired, e.consentRequired);
    push("contact", "환불 요청처", k.refundContact, e.refundContact);
  }
  return items;
}

/**
 * 푸터가 그리는 사업자 값 아홉 칸. 모듈 함수 결과가 아니라 **운영 화면이 실제로 그린 것**을
 * 읽는다(CLAUDE.md §10 #39 — 중간에 컴포넌트가 한 겹 더 바꾼다). 푸터는 모바일·데스크톱
 * 두 벌을 내므로 이름으로 한 번만 센다.
 */
async function footerFacts(lang: "ko" | "en"): Promise<[string, string][]> {
  const res = await fetch(`${ORIGIN}/${lang}`);
  if (!res.ok) throw new Error(`/${lang}: HTTP ${res.status}`);
  const html = await res.text();
  const pattern =
    /\\"children\\":\[\\"([^"\\]+)\\",\\" \\",\[\\"\$\\",\\"strong\\",null,\{[^}]*?\\"children\\":\\"([^"\\]+)\\"\}\]\]/g;
  const seen = new Map<string, string>();
  for (const match of html.matchAll(pattern)) {
    if (!seen.has(match[1])) seen.set(match[1], match[2]);
  }
  return [...seen.entries()];
}

async function businessItems(): Promise<Item[]> {
  const [ko, en] = await Promise.all([footerFacts("ko"), footerFacts("en")]);
  if (ko.length !== 9 || en.length !== 9) {
    throw new Error(`푸터 사업자 칸이 ko ${ko.length} · en ${en.length} — 9칸이어야 한다`);
  }
  return ko.map(([koLabel, koValue], i) => ({
    id: `D-footer-${i + 1}`,
    group: "D" as const,
    groupLabel: "D. 사업자 정보",
    place: "푸터 (운영 화면)",
    label: `${koLabel} / ${en[i][0]}`,
    ko: koValue,
    en: en[i][1],
  }));
}

async function main() {
  const out = process.argv[2];
  if (!out) {
    console.error("사용법: extract-trade-copy.ts <출력.json>");
    process.exit(1);
  }

  const terms = await fetchDoc("terms", "ko");
  const feeIdx = terms.sections.findIndex((s) => s.heading.startsWith("2."));
  const paidIdx = terms.sections.findIndex((s) => s.heading.startsWith("3."));
  const privacyKo = await fetchDoc("privacy", "ko");
  const officerIdx = privacyKo.sections.findIndex((s) => s.heading.startsWith("9."));
  if (feeIdx < 0 || paidIdx < 0 || officerIdx < 0) {
    throw new Error("약관 2·3항 또는 방침 9항을 못 찾았다 — 번호가 바뀌었다");
  }

  const items: Item[] = [
    ...(await pairDocs("terms", [feeIdx, paidIdx], "A", "A. 금액·유료 상품", "A-terms")),
    ...(await pairDocs("pricing", "all", "A", "A. 금액·유료 상품", "A-pricing")),
    ...(await pairDocs("refund", "all", "B", "B. 환불 정책", "B-refund")),
    ...consentItems(),
    ...(await businessItems()),
    ...(await pairDocs("privacy", [officerIdx], "D", "D. 사업자·연락처 (곁가지)", "D-privacy")),
  ];

  const counts: Record<string, number> = {};
  for (const item of items) counts[item.group] = (counts[item.group] ?? 0) + 1;
  for (const [g, n] of Object.entries(counts)) console.log(`  ${g}: ${n}`);
  console.log(`  합계: ${items.length}`);

  const hash = createHash("sha256");
  for (const item of items) hash.update(JSON.stringify([item.id, item.en]));
  console.log(`  en 해시: ${hash.digest("hex")}`);

  writeFileSync(out, JSON.stringify(items, null, 2), "utf8");
  console.log(`\n${out} 에 썼다`);
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
