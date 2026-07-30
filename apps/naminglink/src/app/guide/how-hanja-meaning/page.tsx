import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { formatCount, getGuideCounts } from "@/lib/guide-data";
import { findGuideEntry } from "@/lib/guide-index";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { searchParams?: Promise<{ lang?: string }> };

const ENTRY = findGuideEntry("how-hanja-meaning")!;

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);
  return buildPageMetadata({
    path: "/guide/how-hanja-meaning",
    locale,
    requested,
    title: ENTRY.title,
    description: ENTRY.summary,
  });
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const counts = await getGuideCounts();

  return (
    <GuideShell
      locale={locale}
      eyebrow={ENTRY.eyebrow}
      title={ENTRY.title}
      description={ENTRY.summary}
      backHref={localePath("/guide", locale)}
      backLabel="이용 안내"
    >
      <GuideSection title="소리를 먼저 고정합니다">
        <p>
          &ldquo;지은&rdquo;이라고 정하셨다면 <b>지</b>와 <b>은</b>은 바뀌지 않습니다. 한자를
          맞추느라 이름의 소리를 바꾸지 않습니다. 이름은 평생 불리는 것이고, 부르는 소리가 먼저
          정해진 뒤에 한자가 따라오는 것이 순서라고 봅니다.
        </p>
      </GuideSection>

      <GuideSection title="그 소리로 등록 가능한 한자만 모읍니다">
        <p>
          인명용 한자표에는 글자마다 이름에 쓸 때의 독음이 지정되어 있습니다. <b>지</b>로 읽도록
          지정된 글자, <b>은</b>으로 읽도록 지정된 글자만 후보가 됩니다. 뜻이 아무리 좋아도
          독음이 맞지 않으면 그 이름의 한자가 될 수 없기 때문입니다.
        </p>
        {counts ? (
          <p>
            후보를 고르는 범위는 대법원 표{" "}
            {counts.effectiveDate ? `${counts.effectiveDate} 기준 ` : ""}
            {formatCount(counts.hanjaTotal)}자입니다. 이 표에 없는 글자는 아예 내놓지 않습니다 —
            보여드려도 등록되지 않기 때문입니다.
          </p>
        ) : null}
      </GuideSection>

      <GuideSection title="뜻은 글자 하나가 아니라 결합으로 봅니다">
        <p>
          글자 하나하나의 뜻이 좋은 것과, 두 글자가 붙었을 때 읽히는 뜻이 좋은 것은 다릅니다.
          이름은 붙여서 읽히므로 결합을 함께 봅니다. 입력하신 바람이나 피하고 싶은 의미가 있으면
          그것을 기준에 넣습니다.
        </p>
        <p>
          돌림자를 쓰시는 경우 그 글자는 고정하고 나머지 자리에서 조합을 찾습니다. 성(姓)은
          인명용 한자표의 제한을 받지 않으므로 따로 다룹니다.
        </p>
      </GuideSection>

      <GuideSection title="기피 관습은 지우지 않고 표시합니다">
        <p>
          후보에 전통적으로 기피된다고 여겨온 글자가 들어 있으면 지우지 않고 그 사유를 함께
          보여드립니다. 법이 아니라 관습이라 판단을 넘겨드리는 것이고, 입력 화면에서 아예 빼도록
          고르실 수도 있습니다.
        </p>
      </GuideSection>

      <GuideSection title="배제한 이유를 함께 알려드립니다">
        <p>
          왜 어떤 글자가 후보에서 빠졌는지 보여드립니다. 고른 것만 보여주면 &ldquo;왜
          이것인가&rdquo;를 알 수 없습니다. 쓸 수 있는 글자가 그 음절에 하나도 남지 않게 되면 그
          음절에 한해 제외를 풀어 후보를 보여드립니다.
        </p>
      </GuideSection>

      <GuideNote title="결과를 읽는 법">
        <p>
          후보는 <b>순위가 아니라 관점</b>입니다. 첫 번째가 가장 좋은 이름이라는 뜻이 아니라,
          서로 다른 관점에서 고른 것들입니다. 뜻의 결합을 앞세운 것, 흔하지 않은 글자를 고른 것,
          무난함을 앞세운 것이 나란히 놓입니다. 어느 관점을 중히 여기는지에 따라 답이 달라집니다.
        </p>
      </GuideNote>
    </GuideShell>
  );
}
