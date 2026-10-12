import type { Metadata } from "next";

import { DocBody } from "@/components/DocBody";
import { GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";

const SLUG = "zodiac-pair-tiger-tiger";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

/**
 * 띠 쌍 풀이 — 이 두 띠의 관계·점수·최종 매칭률에서의 몫(`docs/PLAN_DICTIONARY_B_C.md`).
 *
 * **본문은 `lib/doc-content`의 `guide/zodiac-pair-tiger-tiger`에 있고, 숫자는 `doc-values`가 엔진에서 읽어 넘긴다.**
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
