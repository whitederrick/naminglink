import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { GuideShell, GuideStats } from "@/components/GuideShell";
import { guideBackLink, guideOriginQuery } from "@/lib/guide-back";
import { formatCount, getGuideCounts } from "@/lib/guide-data";
import { DocBody } from "@/components/DocBody";
import { getDocPage } from "@/lib/doc-content";
import { docValues } from "@/lib/doc-values";
import { docKeyFor, guideEntriesFor } from "@/lib/guide-index";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { searchParams?: Promise<{ lang?: string; from?: string }> };

/**
 * 허브의 문구도 대상에 맞춰 갈린다. 한국어 이용자에게는 인명용 한자 제도가 중심이고,
 * 그 밖의 언어로 들어온 사람에게는 "네 이름을 한국어로 어떻게 다루는가"가 중심이다.
 * 카드만 영어로 갈아 끼우고 제목은 한국어로 두면 앞뒤가 맞지 않는다.
 */
export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
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
  const [counts, values] = await Promise.all([getGuideCounts(), docValues()]);
  // **거르지 않는다.** 온 곳을 알면 그 갈래를 앞에 놓을 뿐이다(`lib/guide-index.ts`).
  // 예전에는 언어로 걸러 한국어 이용자만 상세 문서를 봤다.
  const entries = guideEntriesFor(params?.from);
  const doc = getDocPage(locale, "guide");
  // 안내를 부른 서비스로 돌려보낸다. 없으면 로케일 기본값(`lib/guide-back.ts`).
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

      {/* 허브는 짧게 둔다. 여기서 길게 설명하면 나눈 의미가 없다. */}
      <nav className="mt-8 grid gap-3">
        {entries.map((entry) => {
          // 제목·요약은 `doc-content`가 로케일별로 갖는다 — 목록만 한국어로 남지 않게.
          const doc = getDocPage(locale, docKeyFor(entry));
          return (
          <Link
            key={entry.slug}
            // 출처를 문서까지 들고 간다. 문서에서 허브로, 허브에서 서비스로 두 번 눌러
            // 나가는 길에서도 처음 들어온 화면으로 돌아가야 한다.
            href={localePath(`/guide/${entry.slug}`, locale, originQuery)}
            className="group grid gap-1 rounded-lg border border-line bg-surface px-5 py-4 transition hover:border-foreground"
          >
            <p className="text-xs font-semibold tracking-wide text-brand-teal">
              {doc.eyebrow}
            </p>
            <p className="flex items-center gap-2 text-lg font-semibold">
              {doc.title}
              <ArrowRight
                aria-hidden="true"
                size={17}
                className="shrink-0 transition group-hover:translate-x-0.5"
              />
            </p>
            <p className="text-sm leading-7 text-muted">{doc.summary}</p>
          </Link>
          );
        })}
      </nav>
    </GuideShell>
  );
}
