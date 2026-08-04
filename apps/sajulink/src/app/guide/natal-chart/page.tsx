import type { Metadata } from "next";

import {
  GuideNote,
  GuideSection,
  GuideShell,
  GuideTable,
} from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "natal-chart";

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
      backLabel="계산 근거"
    >
      <GuideSection title="네 기둥, 여덟 글자">
        <p>
          사주(四柱)는 말 그대로 <b>네 개의 기둥</b>입니다. 태어난 해·달·날·시각을 각각 하나의
          기둥으로 세우고, 기둥마다 두 글자를 씁니다. 그래서 모두 여덟 글자이고, 이것을{" "}
          <b>원국(元局)</b>이라고 부릅니다.
        </p>
        <GuideTable
          head={["기둥", "무엇에서 나오나", "두 글자"]}
          rows={[
            ["연주(年柱)", "태어난 해", "천간 + 지지"],
            ["월주(月柱)", "태어난 달", "천간 + 지지"],
            ["일주(日柱)", "태어난 날", "천간 + 지지"],
            ["시주(時柱)", "태어난 시각", "천간 + 지지"],
          ]}
        />
        <p>
          위 글자를 천간(天干), 아래 글자를 지지(地支)라 합니다. 천간은 열 가지, 지지는 열두
          가지입니다. 지지 열둘이 흔히 말하는 <b>띠</b>이기도 합니다.
        </p>
      </GuideSection>

      <GuideSection title="그중 나를 가리키는 글자는 하나입니다">
        <p>
          여덟 글자가 모두 같은 무게를 갖지는 않습니다. <b>태어난 날의 천간</b>, 곧 일주의 위
          글자가 <b>나 자신</b>을 가리킵니다. 이것을 <b>일간(日干)</b>이라 합니다.
        </p>
        <p>
          이 서비스가 보여 드리는 것은 대부분 이 한 글자에서 갈라져 나옵니다 — 성향 풀이도,
          오행의 강약도, 지금 필요한 기운도, 오늘의 운세도 일간을 기준으로 잽니다. 나머지 일곱
          글자는 &ldquo;일간이 어떤 환경에 놓였는가&rdquo;를 말해 줍니다.
        </p>
        <GuideNote title="왜 태어난 날인가">
          연주는 그 해에 태어난 모두가 같고 월주는 그 달에 태어난 모두가 같습니다. 날이 바뀌면
          달라지는 자리가 일주이고, 전통 명리는 송대 이후로 이 자리를 나로 봅니다. 시주까지 있으면
          같은 날 태어난 사람들 사이도 갈립니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="달력 해가 아니라 절기로 끊습니다">
        <p>
          사주의 한 해는 1월 1일이 아니라 <b>입춘(2월 4일 무렵)</b>에 바뀝니다. 달도 마찬가지로
          절기를 기준으로 끊습니다.
        </p>
        <p>
          그래서 <b>1월과 2월 초에 태어난 분은 앞 해의 연주</b>를 받습니다. 흔히 아는 띠와
          하나 어긋나는 일이 여기서 생깁니다. 음력 생일을 넣으셔도 같습니다 — 음력을 양력으로
          되돌린 뒤 절기로 다시 끊기 때문입니다.
        </p>
      </GuideSection>

      <GuideSection title="출생 시각을 몰라도 볼 수 있습니다">
        <p>
          시각을 넣지 않으시면 <b>시주를 빼고</b> 세 기둥 여섯 글자로 봅니다. 없는 값을 추측해
          채우지 않습니다 — 시주를 임의로 정하면 오행의 세력이 통째로 흔들려, 맞을 수도 있는
          답 대신 틀린 답을 확신하게 됩니다.
        </p>
        <p>
          시각을 아신다면 넣으시는 편이 낫습니다. 여덟 글자 중 둘이 더해지는 것이라 오행의
          세력과 강약 판정이 달라질 수 있습니다. 다만 시계 시각을 그대로 쓰지 않고{" "}
          <a href={localePath("/guide/true-solar-time", locale)}>진태양시로 고쳐</a> 씁니다.
        </p>
      </GuideSection>

      <GuideNote>
        여덟 글자를 오행으로 세어 강약을 보는 방법은{" "}
        <a href={localePath("/guide/five-elements", locale)}>오행 세력과 신강·신약</a>에,
        일간을 기준으로 나머지 글자를 읽는 방법은{" "}
        <a href={localePath("/guide/ten-gods", locale)}>십신</a>에 이어집니다.
      </GuideNote>
    </GuideShell>
  );
}
