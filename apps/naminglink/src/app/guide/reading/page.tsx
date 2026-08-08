import type { Metadata } from "next";

import { DocBody } from "@/components/DocBody";
import { GuideShell } from "@/components/GuideShell";
import { getDocPage } from "@/lib/doc-content";
import { guideHubHref } from "@/lib/guide-back";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 본문은 `lib/doc-content`에 있다 — 23개 언어가 이 서비스의 약속이라서다.
 *
 * 예전에는 이 파일의 JSX에 한국어(또는 영어) 한 벌만 적혀 있었고, 그래서 나머지 언어로
 * 들어온 사람은 읽을 수 없는 글을 봤다. 2026-08-08 서치 콘솔이 그 자리를 「중복 페이지」로
 * 짚었다 — 번역 없는 문서를 23개 언어 주소로 내보내고 있었기 때문이다.
 */

type PageProps = { searchParams?: Promise<{ lang?: string; from?: string }> };

const KEY = "guide/reading" as const;
const PATH = "/guide/reading";

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

  return (
    <GuideShell
      locale={locale}
      eyebrow={doc.eyebrow}
      title={doc.title}
      description={doc.summary}
      backHref={guideHubHref(locale, params?.from)}
      backLabel={doc.backLabel}
    >
      <DocBody sections={doc.sections} locale={locale} />
    </GuideShell>
  );
}
