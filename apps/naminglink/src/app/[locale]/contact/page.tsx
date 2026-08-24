import type { Metadata } from "next";

import { localizeCompanyValues } from "@naminglink/core/company-display";
import { DocBody } from "@/components/DocBody";
import { GuideShell } from "@/components/GuideShell";
import { getDocPage } from "@/lib/doc-content";
import { routeLocale } from "@/lib/route-locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";
import { getPublishedFooterContent } from "@/lib/site-content-server";

/**
 * 문의하기 — 어디로 연락하면 되는가.
 *
 * **애드센스가 요구하는 페이지다.** 심사 안내가 '소개'와 '문의하기'를 투명성 항목으로 명시한다.
 * 전자상거래법이 요구하는 표시 항목(상호·대표자·사업자등록번호·주소·연락처)과도 겹친다.
 *
 * **값을 문서에 적지 않는다.** 본문에는 `{email}`처럼 자리표시자만 있고, 실제 값은 여기서
 * `getPublishedFooterContent()`로 읽어 넘긴다 — 푸터가 보는 것과 같은 자료다. 손으로 적으면
 * 관리자 화면에서 주소나 연락처를 바꿨을 때 이 페이지만 옛 값으로 남고, **표시와 실제가
 * 어긋나는 것은 법이 금하는 것이다.** 약관에서는 값을 박아 둔 탓에 번역기가 대표자 이름을
 * 언어마다 다른 한자로 지어낸 일까지 있었다(2026-08-07).
 *
 * 조회에 실패해도 페이지는 뜬다 — 그 자리에 폴백 값이 들어간다.
 */

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = routeLocale((await params).locale);
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
  const footer = await getPublishedFooterContent();

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
          companyName: footer.companyName,
          representative: footer.representative,
          businessNumber: footer.businessNumber,
          mailOrderNumber: footer.mailOrderNumber,
          address: footer.address,
          customerCenter: footer.customerCenter,
          email: footer.email,
          privacyOfficer: footer.privacyOfficer,
          hostingProvider: footer.hostingProvider,
        })}
      />
    </GuideShell>
  );
}
