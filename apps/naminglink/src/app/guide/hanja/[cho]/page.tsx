import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GuideSection, GuideShell } from "@/components/GuideShell";
import { HanjaSyllableList } from "@/components/HanjaSyllableList";
import { formatCount } from "@/lib/guide-data";
import {
  getChosungGroup,
  indexableChosungSlugs,
  TINY_GROUP_LIMIT,
} from "@/lib/hanja-guide-data";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ cho: string }>;
  searchParams?: Promise<{ lang?: string }>;
};

/**
 * 초성 목록은 DB에서 오므로 빌드 시점에 경로를 미리 만들어 둔다. 없는 초성으로 들어오면
 * `notFound()`가 받는다 — 아무 값이나 경로가 되면 빈 페이지가 무한히 생긴다.
 */
export async function generateStaticParams() {
  return (await indexableChosungSlugs()).map((cho) => ({ cho }));
}

function titleOf(jamo: string) {
  return `${jamo}으로 시작하는 인명용 한자`;
}

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const { cho } = await params;
  const group = await getChosungGroup(cho);
  if (!group) return {};

  const search = await searchParams;
  const requested = isLocale(search?.lang) ? search.lang : null;
  const locale = await getRequestLocale(search?.lang);

  return buildPageMetadata({
    path: `/guide/hanja/${group.slug}`,
    locale,
    requested,
    title: titleOf(group.jamo),
    description: `${group.jamo}으로 시작하는 이름에 쓸 수 있는 한자 ${formatCount(group.total)}자입니다. 글자마다 지정 독음과 뜻을 함께 정리했습니다.`,
  });
}

export default async function Page({ params, searchParams }: PageProps) {
  const { cho } = await params;
  const group = await getChosungGroup(cho);
  if (!group || group.total <= TINY_GROUP_LIMIT) notFound();

  const search = await searchParams;
  const locale = await getRequestLocale(search?.lang);

  return (
    <GuideShell
      locale={locale}
      eyebrow="목록"
      title={titleOf(group.jamo)}
      description={`이름에 쓸 수 있는 한자 ${formatCount(group.total)}자를 음절 ${group.syllables.length}개로 나누어 정리했습니다.`}
      backHref={localePath("/guide/hanja", locale)}
      backLabel="전체 목록"
    >
      {/* 음절이 많으면(ㅅ은 69개) 위에서 아래로 훑기 어렵다. 목차를 두어 바로 건너뛰게 한다. */}
      <nav className="flex flex-wrap gap-1.5">
        {group.syllables.map((item) => (
          <Link
            key={item.syllable}
            href={`#syllable-${item.syllable}`}
            className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm transition hover:border-foreground"
          >
            {item.syllable}
          </Link>
        ))}
      </nav>

      <GuideSection title={`${group.jamo} · ${formatCount(group.total)}자`}>
        <HanjaSyllableList syllables={group.syllables} />
      </GuideSection>
    </GuideShell>
  );
}
