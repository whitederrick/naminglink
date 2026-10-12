import type { Metadata } from "next";

import { DocBody } from "@/components/DocBody";
import { GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";

const SLUG = "zodiac-dog";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

/**
 * 띠별 관계 풀이 — 이 띠가 열두 띠와 어떤 관계이고 몇 점인지(`docs/PLAN_DICTIONARY_B_C.md`).
 *
 * **본문은 `lib/doc-content`의 `guide/zodiac-dog`에 있고, 숫자는 `doc-values`가 엔진에서 읽어 넘긴다.**
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
