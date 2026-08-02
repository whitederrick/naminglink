import type { Metadata } from "next";
import Link from "next/link";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { HanjaSyllableList } from "@/components/HanjaSyllableList";
import { formatCount, getGuideCounts } from "@/lib/guide-data";
import { getChosungGroups, TINY_GROUP_LIMIT } from "@/lib/hanja-guide-data";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { searchParams?: Promise<{ lang?: string }> };

const TITLE = "인명용 한자 전체 목록";
const DESCRIPTION =
  "출생신고에 쓸 수 있는 한자를 초성별로 정리했습니다. 글자마다 이름에 쓸 때의 지정 독음과 뜻을 함께 볼 수 있습니다.";

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);

  return buildPageMetadata({
    path: "/guide/hanja",
    locale,
    requested,
    title: TITLE,
    description: DESCRIPTION,
  });
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const [groups, counts] = await Promise.all([getChosungGroups(), getGuideCounts()]);

  const listed = groups.filter((group) => group.total > TINY_GROUP_LIMIT);
  // 3자·1자짜리 초성까지 페이지를 만들면 정확히 "얇은 페이지"가 된다. 여기서 바로 펼친다.
  const tiny = groups.filter((group) => group.total <= TINY_GROUP_LIMIT);

  return (
    <GuideShell
      locale={locale}
      eyebrow="목록"
      title={TITLE}
      description={DESCRIPTION}
      backHref={localePath("/guide", locale)}
      backLabel="이용 안내"
    >
      <GuideSection title="초성으로 찾기">
        <p>
          {counts
            ? `대법원 인명용 한자표의 ${formatCount(counts.characterTotal)}자 전부입니다. `
            : ""}
          글자마다 <b>이름에 쓸 때의 독음</b>과 뜻이 함께 적혀 있습니다. 표에 없는 한자는 이름의
          한자로 등록되지 않으므로, 여기 있는 글자 안에서 고르시면 됩니다.
        </p>
        {counts && counts.excludedNoStandardCode > 0 ? (
          <GuideNote title="찾으시는 글자가 목록에 없다면">
            <p>
              대법원이 발표한 글자 수는 {formatCount(counts.announcedTotal)}자인데 이 목록은{" "}
              {formatCount(counts.characterTotal)}자입니다.{" "}
              <strong>
                차이인 {formatCount(counts.excludedNoStandardCode)}자는 세계 공통 문자 코드에
                자리가 없어 어떤 서체로도 화면에 그릴 수 없는 글자입니다.
              </strong>{" "}
              대법원 전산은 그런 글자를 그림으로 보여 줍니다.
            </p>
            <p className="mt-1">
              왜 그런지와 저희가 그 글자를 권해 드리지 않는 이유는{" "}
              <a href={localePath("/guide/hanja-basics", locale)}>
                인명용 한자란 무엇인가
              </a>
              에 자세히 적었습니다. 그 글자의 실제 사용 가능 여부는 관할 관청에 문의하셔야 합니다.
            </p>
          </GuideNote>
        ) : null}
        <nav className="mt-2 grid gap-2 sm:grid-cols-2">
          {listed.map((group) => (
            <Link
              key={group.slug}
              href={localePath(`/guide/hanja/${group.slug}`, locale)}
              className="flex items-baseline justify-between gap-3 rounded-lg border border-line bg-surface px-4 py-3 transition hover:border-foreground"
            >
              <span className="text-lg font-semibold">{group.jamo}</span>
              <span className="text-sm text-muted">
                {formatCount(group.total)}자 · {group.syllables.length}개 음절
              </span>
            </Link>
          ))}
        </nav>
      </GuideSection>

      {tiny.length ? (
        <GuideSection title="글자가 적은 초성">
          <p>
            아래 초성은 인명용 한자가 몇 자뿐이라 따로 페이지를 두지 않고 여기에 펼쳤습니다.
          </p>
          {tiny.map((group) => (
            <div key={group.slug}>
              <p className="mt-2 text-sm font-semibold">{group.jamo}</p>
              <HanjaSyllableList syllables={group.syllables} />
            </div>
          ))}
        </GuideSection>
      ) : null}

      <GuideNote title="이 목록을 읽는 법">
        <p>
          <b>伽 · 가 · 절</b>이라면 &ldquo;伽&rdquo;를 이름에 쓸 때는 <b>가</b>로 읽으며 뜻은
          &ldquo;절&rdquo;이라는 뜻입니다. 같은 한자라도 이름에 쓸 때의 독음은 표가 정한 것
          하나뿐이라, 다른 방식으로는 이름에 올릴 수 없습니다.
        </p>
      </GuideNote>
    </GuideShell>
  );
}
