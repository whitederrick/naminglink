import type { Metadata } from "next";

import { LegalDocumentView } from "@/components/LegalDocumentView";
import { getCompanyInfo } from "@/lib/company-server";
import { getLegalDocument } from "@/lib/legal-content";
import { routeLocale } from "@/lib/route-locale";
import { buildPageMetadata } from "@/lib/seo";
import { getAllReportPrices } from "@/lib/report-product";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = routeLocale((await params).locale);
  const document = getLegalDocument(
        locale,
        "refund",
        await getCompanyInfo(),
        await getAllReportPrices(),
      );
  return buildPageMetadata({
    path: "/refund-policy",
    locale,
    requested: locale,
    // 제목에 브랜드를 붙이지 않는다 — 루트 레이아웃의 title.template이 붙여 준다.
    title: document.title,
    description: document.intro,
  });
}

export default async function RefundPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = routeLocale((await params).locale);
  return (
    <LegalDocumentView
      document={getLegalDocument(
        locale,
        "refund",
        await getCompanyInfo(),
        await getAllReportPrices(),
      )}
      locale={locale}
      path="/refund-policy"
    />
  );
}
