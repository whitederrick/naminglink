import type { Metadata } from "next";

import { DocBody } from "@/components/DocBody";
import { GuideShell } from "@/components/GuideShell";
import { getDocPage } from "@/lib/doc-content";
import { routeLocale } from "@/lib/route-locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 소개 — 누가 만들고 무엇을 하는 곳인가.
 *
 * **애드센스가 요구하는 페이지다.** 심사 안내가 '소개'와 '문의하기'를 투명성 항목으로 명시한다.
 * 그 전에, 이름처럼 오래 쓰는 것을 정하는 서비스라면 만든 사람이 무엇을 근거로 삼는지 밝히는
 * 것이 먼저다.
 *
 * **자랑을 적지 않는다.** 무엇을 근거로 하는지, 무엇을 하지 않는지, 무엇을 저장하지 않는지를
 * 적는다. 사업자 정보와 연락처는 여기 옮겨 적지 않고 `/contact`와 푸터가 맡는다(값이 두 곳에
 * 있으면 언젠가 어긋난다).
 *
 * **본문은 `lib/doc-content`에 있다.** 예전에는 이 파일의 JSX에 한국어와 영어를 나란히 적어
 * 두었는데, 그러면 번역 파이프라인이 지나갈 수 없어 21개 언어가 영어를 보게 된다
 * (2026-08-08 서치 콘솔이 그 자리를 짚었다). 23개 언어는 이 서비스의 약속이다.
 */

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = routeLocale((await params).locale);
  const doc = getDocPage(locale, "about");

  return buildPageMetadata({
    path: "/about",
    locale,
    requested: locale,
    title: doc.title,
    description: doc.summary,
  });
}

export default async function Page({ params }: PageProps) {
  const locale = routeLocale((await params).locale);
  const doc = getDocPage(locale, "about");

  return (
    <GuideShell
      locale={locale}
      eyebrow={doc.eyebrow}
      title={doc.title}
      description={doc.summary}
      backHref={localePath("/", locale)}
      backLabel={doc.backLabel}
    >
      <DocBody sections={doc.sections} locale={locale} />
    </GuideShell>
  );
}
