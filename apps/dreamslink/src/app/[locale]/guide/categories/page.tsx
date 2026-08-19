import type { Metadata } from "next";

import { DocBody } from "@/components/DocBody";
import { GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";

const SLUG = "categories";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

/**
 * 본문은 `lib/doc-content`에 있다.
 *
 * 예전에는 이 파일의 JSX가 한국어 산문을 들고 있었고, 그래서 이 문서는 한 언어짜리였다 —
 * 23개 언어는 이 서비스의 약속인데 안내 층만 예외였다. 숫자는 글에 적지 않고 `doc-values`가
 * 코드에서 읽어 넘긴다(`docs/I18N_DOC_CONTENT.md`).
 */
export default async function Page(props: GuidePageProps) {
  const { locale, doc, hubHref, hubOrigins, values } = await guideContext(SLUG, props);

  return (
    <GuideShell
      locale={locale}
      eyebrow={doc.eyebrow}
      title={doc.title}
      description={doc.summary}
      backHref={hubHref}
      backLabel={doc.backLabel}
      backOrigins={hubOrigins}
    >
      <DocBody sections={doc.sections} locale={locale} values={values} />
    </GuideShell>
  );
}
