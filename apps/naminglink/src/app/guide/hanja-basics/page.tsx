import type { Metadata } from "next";

import { DocBody } from "@/components/DocBody";
import { GuideShell } from "@/components/GuideShell";
import { getDocPage } from "@/lib/doc-content";
import { docValues } from "@/lib/doc-values";
import { guideHubHref } from "@/lib/guide-back";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 본문은 `lib/doc-content`에 있고 숫자·값은 `docValues()`가 채운다 — 23개 언어가 이 서비스의
 * 약속이고, 값은 자료가 정해야 글과 실제가 어긋나지 않기 때문이다.
 */

type PageProps = { searchParams?: Promise<{ lang?: string; from?: string }> };

const KEY = "guide/hanja-basics" as const;
const PATH = "/guide/hanja-basics";

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);
  const doc = getDocPage(locale, KEY);

  return buildPageMetadata({
    path: PATH,
    locale,
    requested,
    title: doc.title,
    description: doc.summary,
  });
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const doc = getDocPage(locale, KEY);
  const values = await docValues();

  return (
    <GuideShell
      locale={locale}
      eyebrow={doc.eyebrow}
      title={doc.title}
      description={doc.summary}
      backHref={guideHubHref(locale, params?.from)}
      backLabel={doc.backLabel}
    >
      <DocBody sections={doc.sections} locale={locale} values={values} />
    </GuideShell>
  );
}
