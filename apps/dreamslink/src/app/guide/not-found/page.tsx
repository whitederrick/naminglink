import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "not-found";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

export default async function Page(props: GuidePageProps) {
  const { locale, entry, hubHref } = await guideContext(SLUG, props);

  return (
    <GuideShell
      locale={locale}
      eyebrow={entry.eyebrow}
      title={entry.title}
      description={entry.summary}
      backHref={hubHref}
      backLabel="풀이 근거"
    >
      <GuideSection title="못 찾았을 때는 못 찾았다고 말씀드립니다">
        <p>
          적어 주신 글에서 사전에 있는 상징을 하나도 찾지 못하면 <b>찾지 못했다고
          말씀드립니다.</b> 비슷한 것을 억지로 끌어다 붙이거나, 그럴듯한 문장을 만들어 그 자리를
          채우지 않습니다.
        </p>
        <p>
          이 서비스에서 가장 경계하는 일이 그것입니다. 빈자리를 채우는 순간, 전해 오는 해석을
          옮긴다는 말과 실제로 하는 일이 어긋납니다.
        </p>
      </GuideSection>

      <GuideSection title="왜 못 찾을까">
        <p>대개 다음 중 하나입니다.</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <b>사전에 아직 없는 상징입니다.</b> 지금 215개가 실려 있는데, 꿈에 나올 수 있는 것은
            그보다 훨씬 많습니다.
          </li>
          <li>
            <b>느낌만 적으셨습니다.</b> 「무서웠다」·「기분이 이상했다」처럼 감정만 있으면 걸릴
            상징이 없습니다. 전통 해몽은 감정이 아니라 <b>눈에 보인 사물과 행위</b>를 말합니다.
          </li>
          <li>
            <b>너무 짧습니다.</b> 한두 단어보다는 문장으로 적어 주시는 편이 낫습니다.
          </li>
        </ul>
        <GuideNote title="다시 적어 보실 때">
          꿈에서 <b>무엇을 보았고 무엇을 했는지</b>를 넣어 주세요. 「불안했다」보다 「높은 곳에서
          떨어졌다」가, 「좋았다」보다 「맑은 물이 흐르는 것을 보았다」가 걸립니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="빈 화면으로 두지는 않습니다">
        <p>
          찾지 못했을 때 그 화면에 <b>자주 찾는 상징 아홉 개</b>를 함께 보여드립니다. 사전에서
          대표성이 큰 것부터 고른 것이라, 꿈에 그중 하나가 있었는지 떠올려 보시는 데 도움이
          됩니다.
        </p>
        <p>
          전체를 훑어보고 싶으시면{" "}
          <a
            href={localePath("/dream/symbols", locale)}
            className="font-semibold text-brand-violet underline underline-offset-2"
          >
            상징 사전
          </a>
          에 215개가 갈래별로 정리돼 있습니다. 상징 하나하나에 전해 오는 뜻과 관련 상징이 함께
          적혀 있습니다.
        </p>
      </GuideSection>

      <GuideSection title="사전은 앞으로 어떻게 늘리나">
        <p>
          숫자를 늘리는 것보다 <b>있는 것을 정확히 찾아 주는 쪽</b>을 먼저 손보고 있습니다. 같은
          것을 다르게 부르는 말을 242개 넣어 두었고, 어미가 붙어 모양이 바뀐 말도 걸리게
          했습니다.
        </p>
        <p>
          상징 자체를 늘릴 때는 <b>전해 오는 근거를 댈 수 있는 것만</b> 넣습니다. 근거 없이
          숫자만 늘리면 사전이 아니라 창작이 됩니다 —{" "}
          <a
            href={localePath("/guide/no-ai", locale)}
            className="font-semibold text-brand-violet underline underline-offset-2"
          >
            모델을 쓰지 않는 이유
          </a>
          에 그 시도와 결과를 적어 두었습니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
