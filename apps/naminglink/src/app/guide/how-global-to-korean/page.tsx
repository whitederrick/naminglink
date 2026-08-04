import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideHubHref } from "@/lib/guide-back";
import { findGuideEntry } from "@/lib/guide-index";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { searchParams?: Promise<{ lang?: string; from?: string }> };

const ENTRY = findGuideEntry("how-global-to-korean")!;

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);
  return buildPageMetadata({
    path: "/guide/how-global-to-korean",
    locale,
    requested,
    title: ENTRY.title,
    description: ENTRY.summary,
  });
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);

  return (
    <GuideShell
      locale={locale}
      eyebrow={ENTRY.eyebrow}
      title={ENTRY.title}
      description={ENTRY.summary}
      backHref={guideHubHref(locale, params?.from)}
      backLabel="이용 안내"
    >
      <GuideSection title="성(姓)부터 정합니다">
        <p>
          한국 이름은 성이 앞에 오고, 성은 이름과 달리 아무 글자나 쓰지 않습니다. 그래서 실제로
          쓰이는 성 가운데에서 고릅니다. <b>인구의 약 80%를 덮는 상위 20개 성</b>을 기본으로
          두고, 원래 성의 소리와 이어지는 성이 있으면 그것을 함께 제안합니다.
        </p>
        <p>
          예를 들어 Wang이면 &ldquo;왕&rdquo;, Ye면 &ldquo;예&rdquo;처럼 실제로 존재하는 한국
          성과 소리가 이어질 때가 있습니다. 그런 경우에는 그 성을 우선 보여드립니다 — 이름을
          말할 때 원래 이름과의 연결이 남는 편이 낫기 때문입니다.
        </p>
        <p>
          직접 고르셔도 되고 저희가 추천하도록 두셔도 됩니다. 어느 쪽이든 <b>실존하는 성</b>
          안에서만 제안합니다.
        </p>
      </GuideSection>

      <GuideSection title="부르기 쉽고 쓰기 쉬운 이름을 봅니다">
        <p>
          한국에서 실제로 불릴 이름이므로, 한국 사람이 듣고 바로 적을 수 있는지를 먼저 봅니다.
          발음이 어렵거나 받침이 헷갈리는 이름은 매번 설명해야 하고, 그 부담은 이름을 쓰는
          사람에게 돌아갑니다.
        </p>
        <p>
          동시에 뜻도 함께 봅니다. 한국 이름은 뜻을 담는 것이 보통이라, 어떤 뜻으로 읽히는지와
          왜 그 이름을 골랐는지를 결과에 적어 드립니다.
        </p>
      </GuideSection>

      <GuideSection title="쓰임새를 함께 묻습니다">
        <p>
          한국에서 어떻게 쓸 이름인지에 따라 어울리는 이름이 달라집니다. 유학이나 취업처럼 서류에
          오래 남을 이름인지, 친구들이 부를 이름인지, 온라인에서 쓸 이름인지 — 그 목적을 입력에
          받아 기준에 넣습니다.
        </p>
      </GuideSection>

      <GuideNote title="이 화면의 언어">
        <p>
          이 서비스는 한국 밖에 계신 분을 위한 것이라 화면이 접속 국가의 언어로 나옵니다. 화면
          위쪽 &ldquo;기본 언어&rdquo; 칸에서 직접 바꾸실 수도 있습니다. 같은 안내를 영어로도
          두었습니다.
        </p>
      </GuideNote>
    </GuideShell>
  );
}
