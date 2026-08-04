import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { GuideShell, GuideStats } from "@/components/GuideShell";
import { guideBackLink, guideOriginQuery } from "@/lib/guide-back";
import { formatCount, getGuideCounts } from "@/lib/guide-data";
import { guideEntriesFor } from "@/lib/guide-index";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { searchParams?: Promise<{ lang?: string; from?: string }> };

/**
 * 허브의 문구도 대상에 맞춰 갈린다. 한국어 이용자에게는 인명용 한자 제도가 중심이고,
 * 그 밖의 언어로 들어온 사람에게는 "네 이름을 한국어로 어떻게 다루는가"가 중심이다.
 * 카드만 영어로 갈아 끼우고 제목은 한국어로 두면 앞뒤가 맞지 않는다.
 */
const COPY = {
  ko: {
    eyebrow: "이름에 쓰는 한자",
    title: "이름에 쓰는 한자 안내",
    description:
      "인명용 한자가 무엇인지, 지정 독음과 성씨는 어떻게 다른지, 기피 한자를 왜 지우지 않는지 — Naming-Link가 무엇을 근거로 이름을 제안하는지 정리했습니다.",
  },
  global: {
    eyebrow: "How Naming-Link works",
    title: "What we base your name on",
    description:
      "How we choose a Korean surname, what we check before suggesting a given name, and how we write your name in Hangul — with the parts we deliberately leave out.",
  },
} as const;

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);

  const copy = locale === "ko" ? COPY.ko : COPY.global;
  return buildPageMetadata({
    path: "/guide",
    locale,
    requested,
    title: copy.title,
    description: copy.description,
  });
}

export default async function GuideIndexPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const counts = await getGuideCounts();
  // 한국어면 한국어 문서, 그 밖의 언어면 영어 문서만 보여준다(`lib/guide-index.ts`).
  const entries = guideEntriesFor(locale);
  const copy = locale === "ko" ? COPY.ko : COPY.global;
  // 안내를 부른 서비스로 돌려보낸다. 없으면 로케일 기본값(`lib/guide-back.ts`).
  const back = guideBackLink(locale, params?.from);
  const originQuery = guideOriginQuery(params?.from);

  return (
    <GuideShell
      locale={locale}
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      backHref={back.href}
      backLabel={back.label}
    >
      {counts && locale === "ko" ? (
        <GuideStats
          items={[
            { value: `${formatCount(counts.characterTotal)}자`, label: "인명용 한자" },
            { value: `${formatCount(counts.syllableCount)}개`, label: "걸쳐 있는 한글 음절" },
            { value: counts.effectiveDate ?? "—", label: "표 기준일" },
            { value: `${formatCount(counts.avoidTotal)}자`, label: "기피 한자 정리" },
          ]}
        />
      ) : null}

      {/* 허브는 짧게 둔다. 여기서 길게 설명하면 나눈 의미가 없다. */}
      <nav className="mt-8 grid gap-3">
        {entries.map((entry) => (
          <Link
            key={entry.slug}
            // 출처를 문서까지 들고 간다. 문서에서 허브로, 허브에서 서비스로 두 번 눌러
            // 나가는 길에서도 처음 들어온 화면으로 돌아가야 한다.
            href={localePath(`/guide/${entry.slug}`, locale, originQuery)}
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
