// **거래 직결 문구 66자리가 어디인가** — 이 목록 한 벌이 원본이다.
//
// 추출기(`extract-trade-copy.ts`)와 광고 개방 검사기(`verify-locale-manifest.ts`)가
// 둘 다 이것을 쓴다. 목록을 두 벌로 적으면 하나만 고쳐지는 날이 온다(CLAUDE.md §6).
//
// 무엇이 66자리인지는 `docs/TRADE_COPY_REVIEW_EN_2026-08-21.md` §2 가 정했다 —
// 금액 21 · 환불 15 · 결제 고시 19 · 사업자 11. 합이 맞지 않으면 던진다:
// 목록과 문서가 어긋난 것이고, **그때 통과시키면 검사받지 않은 자리가 생긴다.**
//
// 절을 제목이 아니라 **차례(index)** 로 고르는 이유: 제목은 로케일마다 다른 문자열이라
// 한국어판에서 못 찾는다.

import { createHash } from "node:crypto";

import { localizeCompanyValue } from "@naminglink/core/company-display";

import { companyInfo } from "../src/lib/company";
import { getConsentCopy } from "../src/lib/checkout-consent";
import { getLegalLocaleContent } from "../src/lib/legal-content";
import type { Locale } from "../src/lib/services";

export type TradeCopyGroup = "A" | "B" | "C" | "D";

export type TradeCopyItem = {
  readonly id: string;
  readonly group: TradeCopyGroup;
  readonly groupLabel: string;
  readonly place: string;
  readonly label: string;
  readonly text: string;
};

/** 묶음별 자리 수. 합 66. */
export const TRADE_COPY_EXPECTED: Readonly<Record<TradeCopyGroup, number>> = {
  A: 21,
  B: 15,
  C: 19,
  D: 11,
};

export const TRADE_COPY_TOTAL = Object.values(TRADE_COPY_EXPECTED).reduce((a, b) => a + b, 0);

const CONSENT_KINDS = [
  { kind: "DIGITAL" as const, label: "디지털 콘텐츠" },
  { kind: "MADE_TO_ORDER" as const, label: "주문 제작(도장)" },
];

const COMPANY_FIELDS = [
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

/** 한 로케일의 66자리를 모은다. 순서는 언제나 같다 — 해시가 순서에 걸리기 때문이다. */
export function collectTradeCopy(locale: Locale): TradeCopyItem[] {
  const content = getLegalLocaleContent(locale);
  const items: TradeCopyItem[] = [];

  const pushSection = (
    group: TradeCopyGroup,
    groupLabel: string,
    doc: "terms" | "privacy" | "refund" | "pricing",
    sectionIndex: number,
    idPrefix: string,
  ) => {
    const section = content.documents[doc].sections[sectionIndex];
    if (!section) {
      throw new Error(`${locale}/${doc}[${sectionIndex}] 가 없다 — 목록과 파일이 어긋났다`);
    }
    section.paragraphs.forEach((text, i) => {
      items.push({
        id: `${idPrefix}-${i + 1}`,
        group,
        groupLabel,
        place: `[${doc}] ${section.title}`,
        label: `문단 ${i + 1} / ${section.paragraphs.length}`,
        text,
      });
    });
  };

  // C. 결제 고시 19 — 전자상거래법 제17조 제2항의 청약철회 제한 고지다.
  for (const { kind, label } of CONSENT_KINDS) {
    const copy = getConsentCopy(locale, kind);
    copy.info.forEach(([name, body], i) => {
      items.push({
        id: `C-${kind}-info-${i + 1}`,
        group: "C",
        groupLabel: "C. 결제 고시",
        place: `checkout-consent · ${label}`,
        label: name,
        text: body,
      });
    });
    for (const key of ["consent", "required", "refund"] as const) {
      items.push({
        id: `C-${kind}-${key}`,
        group: "C",
        groupLabel: "C. 결제 고시",
        place: `checkout-consent · ${label}`,
        label: key,
        text: copy[key],
      });
    }
  }

  // B. 환불 15 — 문서 전문. 일부 절만 고르지 않는다.
  content.documents.refund.sections.forEach((_section, index) => {
    pushSection("B", "B. 환불 정책", "refund", index, `B-${index + 1}`);
  });

  // A. 금액 21 — terms §4 는 sections[3], pricing §3~§7 은 sections[2]~[6].
  pushSection("A", "A. 금액", "terms", 3, "A-terms4");
  for (let i = 2; i <= 6; i += 1) {
    pushSection("A", "A. 금액", "pricing", i, `A-pricing${i + 1}`);
  }

  // D. 사업자 9 + 곁가지 2 — **화면이 그리는 값**을 쓴다. 모듈 함수를 부른 결과를
  // 화면 값으로 갈음하면 사람이 엉뚱한 것을 읽는다(CLAUDE.md §10 #39).
  const facts = companyInfo as unknown as Record<string, string>;
  for (const { key, label } of COMPANY_FIELDS) {
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
      text: localizeCompanyValue(locale, "", raw),
    });
  }
  pushSection("D", "D. 사업자 정보 (곁가지)", "privacy", 7, "D-privacy8");

  const counts = items.reduce<Record<string, number>>((acc, item) => {
    acc[item.group] = (acc[item.group] ?? 0) + 1;
    return acc;
  }, {});
  for (const [group, want] of Object.entries(TRADE_COPY_EXPECTED)) {
    const got = counts[group] ?? 0;
    if (got !== want) {
      throw new Error(`${locale}: ${group} 묶음이 ${got}자리 — ${want}자리여야 한다`);
    }
  }
  return items;
}

/**
 * 그 로케일의 66자리 **내용**에 대한 해시.
 *
 * 검수 기록이 이 값을 함께 들고 있으므로, **문구를 고치면 기록이 저절로 낡는다** —
 * 「한 번 읽었다」가 영원한 통행증이 되지 않게 하는 자리다.
 */
export function tradeCopyHash(locale: Locale): string {
  const hash = createHash("sha256");
  for (const item of collectTradeCopy(locale)) {
    // JSON 으로 감싸 자리 경계를 분명히 한다. 구분자를 이스케이프로 적었다가
    // 진짜 제어 바이트가 파일에 박힌 적이 있다(CLAUDE.md §10 #30).
    hash.update(JSON.stringify([item.id, item.text]));
  }
  return hash.digest("hex");
}
