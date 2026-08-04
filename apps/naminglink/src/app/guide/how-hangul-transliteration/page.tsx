import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideHubHref } from "@/lib/guide-back";
import { findGuideEntry } from "@/lib/guide-index";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { searchParams?: Promise<{ lang?: string; from?: string }> };

const ENTRY = findGuideEntry("how-hangul-transliteration")!;

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);
  return buildPageMetadata({
    path: "/guide/how-hangul-transliteration",
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
      <GuideSection title="뜻이 아니라 소리를 옮깁니다">
        <p>
          이 서비스는 <b>이름을 한국어 소리에 맞춰 한글로 적는 것</b>입니다. 한국 이름을 새로
          지어 드리는 것이 아닙니다. Michael이 &ldquo;마이클&rdquo;이 되는 것이지 뜻이 비슷한
          한국 이름으로 바뀌는 것이 아닙니다.
        </p>
        <p>
          한국 이름을 원하시면 <b>한국 이름 만들기</b> 쪽이 맞습니다. 둘은 하는 일이 다릅니다 —
          하나는 이름을 그대로 두고 표기만 바꾸고, 다른 하나는 새 이름을 제안합니다.
        </p>
      </GuideSection>

      <GuideSection title="한국어에 없는 소리를 어떻게 다루나">
        <p>
          언어마다 한국어에 없는 소리가 있습니다. f·v·z·th 같은 자음, 한국어가 구분하지 않는
          모음이 그렇습니다. 그런 소리는 <b>한국 사람이 실제로 그 이름을 부를 때 내는 소리</b>에
          맞춰 적습니다 — 원어 발음을 기호처럼 옮기기보다, 한국에서 그렇게 불릴 표기를 고르는
          쪽입니다.
        </p>
        <p>
          같은 이름이라도 어느 언어에서 왔는지에 따라 소리가 달라집니다. 그래서 출신 언어와
          나라를 함께 받아 그 언어의 발음을 기준으로 삼습니다.
        </p>
      </GuideSection>

      <GuideSection title="여러 표기를 나란히 보여드립니다">
        <p>
          하나의 정답이 있는 일이 아닙니다. 원어 소리에 더 가까운 표기, 한국에서 더 흔히 쓰이는
          표기, 적기 쉬운 표기가 서로 다를 수 있습니다. 그래서 후보를 나란히 두고 각각 어떤 점이
          다른지 적어 드립니다.
        </p>
        <p>
          결과가 마음에 들지 않으면 원하는 소리를 힌트로 적어 다시 분석하실 수 있습니다. 예를
          들어 특정 음절을 다르게 적고 싶다는 뜻을 전하면 그것을 기준에 넣습니다.
        </p>
      </GuideSection>

      <GuideNote title="한자는 붙이지 않습니다">
        <p>
          한글 발음 표기에는 한자를 붙이지 않습니다. 한자는 뜻을 담는 글자인데 이 흐름은 소리를
          옮기는 것이라, 소리만 맞춰 한자를 붙이면 뜻이 엉뚱해질 수 있기 때문입니다.
        </p>
      </GuideNote>
    </GuideShell>
  );
}
