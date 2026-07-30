import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell, GuideStats } from "@/components/GuideShell";
import { formatCount, getGuideCounts } from "@/lib/guide-data";
import { findGuideEntry } from "@/lib/guide-index";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { searchParams?: Promise<{ lang?: string }> };

const ENTRY = findGuideEntry("avoid")!;

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);

  return buildPageMetadata({
    path: "/guide/avoid",
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
      {counts ? (
        <GuideStats
          items={[
            { value: `${formatCount(counts.avoidTotal)}자`, label: "정리한 기피 한자" },
            {
              value: `${formatCount(counts.avoidCommonlyUsed)}자`,
              label: "그중 지금도 흔히 쓰이는 글자",
            },
          ]}
        />
      ) : null}

      <GuideSection title="법적으로는 아무 문제 없는 글자입니다">
        <p>
          인명용 한자표에 들어 있어서{" "}
          <strong>법적으로는 아무 문제 없이 쓸 수 있는데도</strong>, 이름에 잘 올리지 않는다고
          여겨져 온 글자들이 있습니다.
        </p>
        <p>
          바탕에 있는 생각은 <strong>&ldquo;뜻이 지나치면 오히려 좋지 않다&rdquo;</strong>는
          것입니다. 뜻이 너무 귀하거나(珍·寶), 기가 너무 세다고 보는 글자(王·帝), 하늘이나
          신령처럼 사람이 담기에 크다고 여겨온 것들이 여기 해당합니다. 이름이 그 사람을 누른다고
          보는, 오래된 절제의 감각입니다.
        </p>
        <p>
          <strong>그렇다고 못 쓰는 글자는 아닙니다.</strong> 법이 금지하는 것이 아니라 관습이고,
          관습은 지역과 집안, 세대에 따라 다르며 시간이 지나면서 바뀌기도 합니다.
          {counts
            ? ` 실제로 저희가 정리한 ${formatCount(counts.avoidTotal)}자 가운데 ${formatCount(counts.avoidCommonlyUsed)}자는 지금도 이름에 흔히 쓰입니다.`
            : ""}{" "}
          기피된다고 알려져 있으면서도 많이 쓰인다는 것은, 이 관습이 절대적이지 않다는 뜻이기도
          합니다.
        </p>
      </GuideSection>

      <GuideSection title="어떤 갈래가 있나">
        <p>현재 정리된 글자를 일곱 갈래로 나누어 두었습니다.</p>
        <ul className="grid gap-2 text-[15px] leading-7">
          <li>
            <b>보물·사물</b> — 재물이나 물건을 그대로 가리키는 글자
          </li>
          <li>
            <b>하늘·자연</b> — 해·달·하늘처럼 사람이 담기에 크다고 여겨온 것
          </li>
          <li>
            <b>왕·귀함</b> — 왕·제왕처럼 지위를 뜻하는 글자
          </li>
          <li>
            <b>신령</b> — 신·영처럼 신성한 영역을 가리키는 글자
          </li>
          <li>
            <b>계절·기타</b> — 특정 시기나 상태에 묶이는 글자
          </li>
          <li>
            <b>동물</b> — 용·호랑이처럼 기운이 세다고 보는 동물
          </li>
          <li>
            <b>지나침</b> — 뜻이 지나치게 크거나 넘친다고 보는 글자
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="빼거나 넣거나, 직접 고르실 수 있습니다">
        <p>
          저희는 이런 글자를 마음대로 지우지 않습니다.{" "}
          <strong>어떻게 다룰지를 이름 짓는 분이 직접 고르시도록</strong> 입력 화면에 두 가지
          선택을 두었습니다.
        </p>
        <GuideNote title="입력 화면에서 고르실 수 있는 것">
          <p>
            <b>기피 한자를 후보에서 뺀다</b> — 켜면 아예 제외합니다. 끄면 빼지 않고 결과에
            &ldquo;전통상 기피&rdquo; 표시와 그 이유만 붙여 드립니다.
          </p>
          <p className="mt-1">
            <b>흔히 쓰이는 글자까지 뺀다</b> — 기피 목록에 오르지만 실제로는 많이 쓰이는
            글자(圭·琳·玲·元·太·星·海 등)까지 제외합니다. 켜면 후보가 크게 줄어듭니다.
          </p>
          <p className="mt-2 text-muted">
            기본값은 <b>빼지 않고 표시만</b> 하는 쪽입니다. 목록에서 조용히 빼버리면, 정작 그
            글자를 쓰고 싶은 분에게는 그 글자가 존재하지 않는 것처럼 보이기 때문입니다.
          </p>
        </GuideNote>
        <p>
          쓸 수 있는 글자가 그 음절에 하나도 남지 않게 되는 경우에는, 그 음절에 한해 제외를
          풀어 후보를 보여드립니다. 고를 것이 아예 없어지는 편보다 낫다고 보기 때문입니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
