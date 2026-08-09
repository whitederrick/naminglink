import type { Metadata } from "next";
import Link from "next/link";

import { DocBody } from "@/components/DocBody";
import { GuideShell } from "@/components/GuideShell";
import { getDocPage } from "@/lib/doc-content";
import { docValues } from "@/lib/doc-values";
import { guideBackLink, guideOriginQuery } from "@/lib/guide-back";
import { docKeyFor, guideEntriesFor } from "@/lib/guide-index";
import { isLocale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { searchParams?: Promise<{ lang?: string; from?: string }> };

/**
 * 안내 허브.
 *
 * **거르지 않는다.** 예전에는 한국어로 들어오면 상세 아홉 편을, 그 밖의 언어면 영어 요약 세
 * 편만 보여 줬다. 문서가 23개 언어로 나가는 지금 그 거르기는 **일본어 이용자에게서 아홉 편을
 * 빼앗는 규칙**이다. 이제 온 곳(`?from=`)을 알면 그 서비스를 설명하는 글을 앞에 놓을 뿐이다.
 *
 * 카드의 제목·요약도 `doc-content`가 로케일별로 갖는다 — 목록만 한국어로 남지 않게.
 */
export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);
  const doc = getDocPage(locale, "guide");

  return buildPageMetadata({
    path: "/guide",
    locale,
    requested,
    title: doc.title,
    description: doc.summary,
  });
}

export default async function GuideIndexPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const doc = getDocPage(locale, "guide");
  const values = await docValues(locale);
  const entries = guideEntriesFor(params?.from);
  // 안내를 부른 화면으로 돌려보낸다. 없으면 홈 — 그 이름은 이 문서가 갖고 있다.
  const back = guideBackLink(locale, params?.from, doc.backLabel);
  const originQuery = guideOriginQuery(params?.from);

  return (
    <GuideShell
      locale={locale}
      eyebrow={doc.eyebrow}
      title={doc.title}
      description={doc.summary}
      backHref={back.href}
      backLabel={back.label}
    >
      <DocBody sections={doc.sections} locale={locale} values={values} />

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {entries.map((entry) => {
          const card = getDocPage(locale, docKeyFor(entry));
          return (
            <li key={entry.slug}>
              <Link
                // 출처를 문서까지 들고 간다. 문서 → 허브 → 서비스로 두 번 눌러 나가는
                // 길에서도 처음 들어온 화면으로 돌아가야 한다.
                href={localePath(`/guide/${entry.slug}`, locale, originQuery)}
                className="flex h-full flex-col rounded-xl border border-line bg-surface px-5 py-4 transition hover:bg-surface-strong"
              >
                <span className="text-xs font-semibold text-brand-plum">{card.eyebrow}</span>
                <span className="break-keep-all mt-1 text-base font-semibold">{card.title}</span>
                <span className="break-keep-all mt-2 text-sm leading-6 text-muted">
                  {card.summary}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </GuideShell>
  );
}
