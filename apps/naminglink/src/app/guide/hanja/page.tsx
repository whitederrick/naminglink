import type { Metadata } from "next";
import Link from "next/link";

import { DocBody } from "@/components/DocBody";
import { GuideShell } from "@/components/GuideShell";
import { HanjaSyllableList } from "@/components/HanjaSyllableList";
import { getDocPage } from "@/lib/doc-content";
import { docValues } from "@/lib/doc-values";
import { guideHubHref } from "@/lib/guide-back";
import { formatCount } from "@/lib/guide-data";
import { getChosungGroups, TINY_GROUP_LIMIT } from "@/lib/hanja-guide-data";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 인명용 한자 전체 목록.
 *
 * **글과 표를 나눠 둔다.** 읽는 법을 설명하는 산문은 `lib/doc-content`에 있어 23개 언어로
 * 번역되고, **한자 표 자체는 옮기지 않는다** — 글자와 지정 독음·뜻은 대법원이 정한 한국 법령
 * 자료이고, 9,088자의 뜻을 모델로 옮겨 무료 화면에 붙이는 것은 「AI는 결제한 경로에서만」
 * 방침에 어긋난다.
 *
 * 초성 단추와 음절 목록은 눌러서 넘어가는 것이라 자료로 만들 수 없다. 자료에는 자리 이름만
 * 두고(`slot`) 여기서 끼워 넣는다.
 */

type PageProps = { searchParams?: Promise<{ lang?: string; from?: string }> };

const KEY = "guide/hanja" as const;

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);
  const doc = getDocPage(locale, KEY);

  return buildPageMetadata({
    path: "/guide/hanja",
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
  const [groups, values] = await Promise.all([getChosungGroups(), docValues()]);

  const listed = groups.filter((group) => group.total > TINY_GROUP_LIMIT);
  // 3자·1자짜리 초성까지 페이지를 만들면 정확히 "얇은 페이지"가 된다. 여기서 바로 펼친다.
  const tiny = groups.filter((group) => group.total <= TINY_GROUP_LIMIT);

  return (
    <GuideShell
      locale={locale}
      eyebrow={doc.eyebrow}
      title={doc.title}
      description={doc.summary}
      backHref={guideHubHref(locale, params?.from)}
      backLabel={doc.backLabel}
    >
      <DocBody
        sections={doc.sections}
        locale={locale}
        values={values}
        slots={{
          chosung: (
            <nav key="chosung" className="mt-2 grid gap-2 sm:grid-cols-2">
              {listed.map((group) => (
                <Link
                  key={group.slug}
                  href={localePath(`/guide/hanja/${group.slug}`, locale)}
                  className="flex items-baseline justify-between gap-3 rounded-lg border border-line bg-surface px-4 py-3 transition hover:border-foreground"
                >
                  <span className="text-lg font-semibold">{group.jamo}</span>
                  <span className="text-sm text-muted">
                    {formatCount(group.total)} · {group.syllables.length}
                  </span>
                </Link>
              ))}
            </nav>
          ),
          // 글자가 적은 초성이 하나도 없으면 아무것도 넘기지 않는다 — 그러면 그 절은 설명만
          // 남는다. 표가 갱신되어 그런 초성이 사라지는 날 빈 목록이 남지 않게 하려는 것이다.
          ...(tiny.length
            ? {
                tiny: (
                  <div key="tiny">
                    {tiny.map((group) => (
                      <div key={group.slug}>
                        <p className="mt-2 text-sm font-semibold">{group.jamo}</p>
                        <HanjaSyllableList syllables={group.syllables} />
                      </div>
                    ))}
                  </div>
                ),
              }
            : {}),
        }}
      />
    </GuideShell>
  );
}
