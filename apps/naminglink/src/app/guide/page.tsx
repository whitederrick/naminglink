import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { GuideShell, GuideStats } from "@/components/GuideShell";
import { formatCount, getGuideCounts } from "@/lib/guide-data";
import { guideEntries } from "@/lib/guide-index";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { searchParams?: Promise<{ lang?: string }> };

const TITLE = "이름에 쓰는 한자 안내";
const DESCRIPTION =
  "인명용 한자가 무엇인지, 지정 독음과 성씨는 어떻게 다른지, 기피 한자를 왜 지우지 않는지 — Naming-Link가 무엇을 근거로 이름을 제안하는지 정리했습니다.";

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);

  return buildPageMetadata({
    path: "/guide",
    locale,
    requested,
    title: TITLE,
    description: DESCRIPTION,
  });
}

export default async function GuideIndexPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const counts = await getGuideCounts();

  return (
    <GuideShell
      locale={locale}
      eyebrow="이름에 쓰는 한자"
      title={TITLE}
      description={DESCRIPTION}
      backHref={localePath("/hanja-meaning", locale)}
      backLabel="한자 의미 매칭"
    >
      {counts ? (
        <GuideStats
          items={[
            { value: `${formatCount(counts.hanjaTotal)}자`, label: "인명용 한자" },
            { value: `${formatCount(counts.syllableCount)}개`, label: "걸쳐 있는 한글 음절" },
            { value: counts.effectiveDate ?? "—", label: "표 기준일" },
            { value: `${formatCount(counts.avoidTotal)}자`, label: "기피 한자 정리" },
          ]}
        />
      ) : null}

      {/* 허브는 짧게 둔다. 여기서 길게 설명하면 나눈 의미가 없다. */}
      <nav className="mt-8 grid gap-3">
        {guideEntries.map((entry) => (
          <Link
            key={entry.slug}
            href={localePath(`/guide/${entry.slug}`, locale)}
            className="group grid gap-1 rounded-lg border border-line bg-surface px-5 py-4 transition hover:border-foreground"
          >
            <p className="text-xs font-semibold tracking-wide text-brand-teal">
              {entry.eyebrow}
            </p>
            <p className="flex items-center gap-2 text-lg font-semibold">
              {entry.title}
              <ArrowRight
                aria-hidden="true"
                size={17}
                className="shrink-0 transition group-hover:translate-x-0.5"
              />
            </p>
            <p className="text-sm leading-7 text-muted">{entry.summary}</p>
          </Link>
        ))}
      </nav>
    </GuideShell>
  );
}
