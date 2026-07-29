import type { Metadata } from "next";

import { LegalDocumentView } from "@/components/LegalDocumentView";
import { isLocale } from "@/lib/i18n";
import { getCompanyInfo } from "@/lib/company-server";
import { getLegalDocument } from "@/lib/legal-content";
import { getRequestLocale } from "@/lib/locale";
import { buildPageMetadata } from "@/lib/seo";
import { getReportPrices } from "@/lib/report-product";

// 제목을 고정하면 영어 화면에도 한국어 제목이 뜬다. 광고 심사와 검색 노출에서 실제로 읽히는
// 자리라 로케일을 따라가게 한다.
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  const document = getLegalDocument(
        locale,
        "privacy",
        await getCompanyInfo(),
        await getReportPrices(),
      );
  return buildPageMetadata({
    path: "/privacy",
    locale,
    requested: isLocale(lang) ? lang : null,
    // 제목에 브랜드를 붙이지 않는다 — 루트 레이아웃의 title.template이 붙여 준다.
    title: document.title,
    description: document.intro,
  });
}

export default async function PrivacyPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = await getRequestLocale(lang);
  return (
    <LegalDocumentView
      document={getLegalDocument(
        locale,
        "privacy",
        await getCompanyInfo(),
        await getReportPrices(),
      )}
      locale={locale}
    />
  );
}
