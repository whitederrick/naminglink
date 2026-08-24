import type { Metadata } from "next";

import { localizeCompanyValues } from "@naminglink/core/company-display";
import { DocBody } from "@/components/DocBody";
import { GuideShell } from "@/components/GuideShell";
import { getCompanyInfo } from "@/lib/company-server";
import { getDocPage } from "@/lib/doc-content";
import { routeLocale } from "@/lib/route-locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 문의하기 — 어디로 연락하면 되는가.
 *
 * **애드센스가 요구하는 페이지다.** 심사 안내가 '소개'와 '문의하기'를 투명성 항목으로 명시한다.
 * 전자상거래법이 요구하는 표시 항목과도 겹친다.
 *
 * **값을 문서에 적지 않는다.** 본문에는 `{email}`처럼 자리표시자만 있고 실제 값은 여기서
 * `getCompanyInfo()`로 읽어 넘긴다 — naminglink 관리자 화면이 관리하는 같은 행이다. 손으로
 * 적으면 값이 바뀔 때 이 페이지만 옛 값으로 남고, **표시와 실제가 어긋나는 것은 법이 금하는
 * 것이다.** 약관에서는 값을 박아 둔 탓에 번역기가 대표자 이름을 언어마다 다른 한자로 지어낸
 * 일까지 있었다(2026-08-07).
 */

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = routeLocale((await params).locale);
  const requested = locale;
  const doc = getDocPage(locale, "contact");

  return buildPageMetadata({
    path: "/contact",
    locale,
    requested: locale,
    title: doc.title,
    description: doc.summary,
  });
}

export default async function Page({ params }: PageProps) {
  const locale = routeLocale((await params).locale);
  const doc = getDocPage(locale, "contact");
  const company = await getCompanyInfo();

  return (
    <GuideShell
      locale={locale}
      eyebrow={doc.eyebrow}
      title={doc.title}
      description={doc.summary}
      backHref={localePath("/", locale)}
      backLabel={doc.backLabel}
    >
      <DocBody
        sections={doc.sections}
        locale={locale}
        values={localizeCompanyValues(locale, {
          companyName: company.legalEntity,
          representative: company.representative,
          businessNumber: company.businessNumber,
          mailOrderNumber: company.mailOrderNumber,
          address: company.address,
          customerCenter: company.customerCenter,
          email: company.email,
          privacyOfficer: company.privacyOfficer,
          hostingProvider: company.hostingProvider,
        })}
      />
    </GuideShell>
  );
}
