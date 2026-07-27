import type { Metadata } from "next";

import { LegalDocumentView } from "@/components/LegalDocumentView";
import { getDictionary } from "@/lib/i18n";
import { getCompanyInfo } from "@/lib/company-server";
import { getLegalDocument } from "@/lib/legal-content";
import { getRequestLocale } from "@/lib/locale";
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
  return {
    title: `${document.title} | ${getDictionary(locale).brand}`,
    description: document.intro,
  };
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
