import type { Metadata } from "next";

import { DocBody } from "@/components/DocBody";
import { GuideShell } from "@/components/GuideShell";
import { getDocPage } from "@/lib/doc-content";
import { guideHubHref } from "@/lib/guide-back";
import { getGuideCounts } from "@/lib/guide-data";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 본문은 `lib/doc-content`에 있다 — 23개 언어가 이 서비스의 약속이라서다.
 *
 * **숫자는 여기서 넘긴다.** 본문에는 `{avoidTotal}`처럼 자리표시자만 있고 값은 자료에서 읽는다.
 * 표가 갱신되면 글의 숫자도 함께 바뀌어야 하기 때문이다. 조회에 실패하면 그 블록은 그려지지
 * 않는다(`DocBody`) — 화면에 `{avoidTotal}`이 그대로 나가는 것보다 낫다.
 */

type PageProps = { searchParams?: Promise<{ lang?: string; from?: string }> };

const KEY = "guide/how-korean-to-global" as const;
const PATH = "/guide/how-korean-to-global";

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
  const counts = await getGuideCounts();

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
        values={
          counts
            ? {
                avoidTotal: counts.avoidTotal.toLocaleString("en-US"),
                avoidCommonlyUsed: counts.avoidCommonlyUsed.toLocaleString("en-US"),
                characterTotal: counts.characterTotal.toLocaleString("en-US"),
              }
            : {}
        }
      />
    </GuideShell>
  );
}
