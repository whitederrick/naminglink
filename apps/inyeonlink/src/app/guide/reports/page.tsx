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
 * **값과 목차를 글에 적지 않는다.** 값은 `product_settings`가, 목차는 로케일 사전이 정한다.
 * 상수에서 읽는 것과 같은 이유다 — 상품 구성을 고쳤을 때 안내만 옛 목차로 남으면 그것은
 * 팔기 전에 알려야 할 것을 틀리게 알린 것이 된다.
 *
 * **한계를 함께 적는다.** "이런 게 들어갑니다"만 있으면 광고 문구로 읽히고, 애드센스는 얄팍한
 * 홍보성 페이지를 싫어한다. 무엇보다 서버가 파일을 보관하지 않는다는 사실은 사기 전에 알아야
 * 하는 조건이다.
 */
export default async function Page(props: GuidePageProps) {
  const { locale, doc, hubHref, values } = await guideContext(SLUG, props);
  const dictionary = getDictionary(locale);

  /**
   * 목차는 자료가 아니라 **자리 이름**으로 둔다.
   *
   * 사전(`report.contents`)이 이미 23개 언어로 갖고 있는 목록이라, 안내 자료에 옮겨 적으면 같은
   * 목록이 두 곳에 살게 된다. 리포트 장 구성을 고치는 날 한쪽만 따라오는 것이 그 결말이다.
   */
  const contents = (lines: readonly string[]) => (
    <ul>
      {lines.map((line) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
  );

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
          gunghapContents: contents(dictionary.report.contents),
          affinityContents: contents(dictionary.affinityReport.contents),
        }}
      />
    </GuideShell>
  );
}
