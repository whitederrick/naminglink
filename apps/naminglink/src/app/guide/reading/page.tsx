import type { Metadata } from "next";

import { GuideSection, GuideShell } from "@/components/GuideShell";
import { findGuideEntry } from "@/lib/guide-index";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { searchParams?: Promise<{ lang?: string }> };

const ENTRY = findGuideEntry("reading")!;

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);

  return buildPageMetadata({
    path: "/guide/reading",
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
      backHref={localePath("/guide", locale)}
      backLabel="이용 안내"
    >
      <GuideSection title="지정 독음 — 같은 한자, 정해진 읽기">
        <p>
          인명용 한자표는 글자만 정하지 않습니다.{" "}
          <strong>그 글자를 이름에 쓸 때 어떻게 읽는지도 함께 정합니다.</strong> 이것을 지정
          독음이라고 합니다.
        </p>
        <p>
          한자는 원래 읽는 법이 여럿인 경우가 많습니다. 하지만 이름은 서류에 적히고 불리는
          것이라 읽는 법이 하나로 정해져 있어야 합니다. 그래서 표에는 글자마다 이름에 쓸 때의
          독음이 지정되어 있고, 그 독음이 아닌 방식으로는 이름에 올릴 수 없습니다.
        </p>
      </GuideSection>

      <GuideSection title="그래서 소리를 먼저 맞춥니다">
        <p>
          Naming-Link가 한글 이름에서 한자를 찾을 때 소리를 먼저 고정하는 이유가 이것입니다.
          &ldquo;지은&rdquo;이라는 이름을 정했다면 <b>지</b>로 읽도록 지정된 한자, <b>은</b>으로
          읽도록 지정된 한자 안에서만 뜻을 고를 수 있습니다.
        </p>
        <p>
          뜻이 아무리 좋아도 독음이 맞지 않으면 그 이름의 한자가 될 수 없습니다. 한자를 맞추느라
          이름의 소리를 바꾸지 않는 것도 같은 이유입니다 — 이름은 평생 불리는 것이고, 부르는
          소리가 먼저 정해진 뒤에 한자가 따라오는 것이 순서라고 봅니다.
        </p>
      </GuideSection>

      <GuideSection title="성(姓)은 이 표의 제한을 받지 않습니다">
        <p>
          자주 오해되는 부분입니다.{" "}
          <strong>
            인명용 한자표가 정하는 것은 &ldquo;이름&rdquo;이고, &ldquo;성&rdquo;은 그 대상이
            아닙니다.
          </strong>{" "}
          성의 한자는 가족관계등록부에 이미 올라 있는 것을 그대로 따르므로, 인명용 한자표에 없는
          글자를 성으로 쓰는 분들이 실제로 있습니다.
        </p>
        <p>
          Naming-Link가 성씨 한자를 이름 한자와 다르게 다루는 이유가 이것입니다. 성씨는 후보를
          도와드리기만 하고, 표에 없는 글자를 쓰시는 분을 위해 직접 입력하는 칸을 따로 두었습니다.
          남궁·선우처럼 두 글자인 성도 직접 입력으로 받습니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
