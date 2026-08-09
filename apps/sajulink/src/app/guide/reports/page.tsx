import type { Metadata } from "next";

import { DocBody } from "@/components/DocBody";
import { GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { getDictionary } from "@/lib/i18n";

const SLUG = "reports";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

/**
 * 유료 리포트에는 무엇이 들어가나.
 *
 * **목차와 금액을 글에 적지 않는다.** 목차는 구매 패널이 쓰는 사전 값(`report.contents`)을,
 * 금액은 상품 설정을 그대로 읽는다. 상품 구성을 고쳤을 때 안내만 옛 목차로 남으면, 그것은
 * 팔기 전에 알려야 할 것을 틀리게 알린 것이 된다.
 */
export default async function Page(props: GuidePageProps) {
  const { locale, doc, hubHref, values } = await guideContext(SLUG, props);
  const dictionary = getDictionary(locale);

  return (
    <GuideShell
      locale={locale}
      eyebrow={doc.eyebrow}
      title={doc.title}
      description={doc.summary}
      backHref={hubHref}
      backLabel={doc.backLabel}
    >
      <DocBody
        sections={doc.sections}
        locale={locale}
        values={values}
        slots={{
          // 사전이 이미 23개 언어로 갖고 있는 목록이다. 안내 자료에 옮겨 적으면 같은 목록이
          // 두 곳에 살게 되고, 장 구성을 고치는 날 한쪽만 따라온다.
          reportContents: (
            <ul>
              {dictionary.report.contents.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ),
        }}
      />
    </GuideShell>
  );
}
