import type { Metadata } from "next";

import { DocBody } from "@/components/DocBody";
import { GuideShell } from "@/components/GuideShell";
import { getDocPage } from "@/lib/doc-content";
import { docValues } from "@/lib/doc-values";
import { guideHubHref, guideHubOrigins } from "@/lib/guide-back";
import { routeLocale } from "@/lib/route-locale";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 본문은 `lib/doc-content`에 있고 숫자·값은 `docValues()`가 채운다 — 23개 언어가 이 서비스의
 * 약속이고, 값은 자료가 정해야 글과 실제가 어긋나지 않기 때문이다.
 */
/**
 * **언어는 주소에서 온다** (2026-08-18). 예전에는 미들웨어가 `/ja/guide/…`를
 * `?lang=ja`로 되돌리고 화면이 `getRequestLocale()`로 읽었는데, 그 함수는 `headers()`를
 * 읽어 **이 화면을 미리 만들 수 없게** 했다(`lib/route-locale.ts`).
 *
 * `?from=`도 서버에서 읽지 않는다. 돌아가기 단추의 목적지만 달라지는 값이라 본문과
 * 무관하다(`components/GuideBackLink.tsx`).
 */

type PageProps = { params: Promise<{ locale: string }> };

const KEY = "guide/what-we-sell" as const;
const PATH = "/guide/what-we-sell";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = routeLocale((await params).locale);
  const doc = getDocPage(locale, KEY);

  return buildPageMetadata({
    path: PATH,
    locale,
    requested: locale,
    title: doc.title,
    description: doc.summary,
  });
}

export default async function Page({ params }: PageProps) {
  const locale = routeLocale((await params).locale);
  const doc = getDocPage(locale, KEY);
  const values = await docValues();

  return (
    <GuideShell
      locale={locale}
      eyebrow={doc.eyebrow}
      title={doc.title}
      description={doc.summary}
      backHref={guideHubHref(locale)}
      backLabel={doc.backLabel}
      backOrigins={guideHubOrigins(locale, doc.backLabel)}
    >
      <DocBody sections={doc.sections} locale={locale} values={values} />
    </GuideShell>
  );
}
