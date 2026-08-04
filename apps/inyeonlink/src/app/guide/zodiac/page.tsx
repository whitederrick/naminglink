import type { Metadata } from "next";

import {
  GuideNote,
  GuideSection,
  GuideShell,
  GuideTable,
} from "@/components/GuideShell";
import { ENGINE_WEIGHTS } from "@/lib/engines";
import { EARTHLY_BRANCHES, BRANCH_ANIMALS } from "@/lib/engines/branches";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "zodiac";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

/** 동물 코드 → 한국어 이름. 코드 자체는 엔진(`BRANCH_ANIMALS`)에 있다. */
const ANIMAL_KO: Record<string, string> = {
  rat: "쥐",
  ox: "소",
  tiger: "범",
  rabbit: "토끼",
  dragon: "용",
  snake: "뱀",
  horse: "말",
  goat: "양",
  monkey: "원숭이",
  rooster: "닭",
  dog: "개",
  pig: "돼지",
};

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
      <GuideSection title="띠는 태어난 해의 지지입니다">
        <p>
          사주는 연·월·일·시 네 기둥으로 되어 있고, 기둥마다 천간 하나와 지지 하나가 붙습니다.
          그중 <b>연주의 지지</b>, 즉 연지(年支)에 붙는 동물이 우리가 말하는 띠입니다.
        </p>
        <GuideTable
          caption="십이지와 띠"
          head={["지지", "띠"]}
          rows={EARTHLY_BRANCHES.map((branch) => [
            branch,
            ANIMAL_KO[BRANCH_ANIMALS[branch]] ?? BRANCH_ANIMALS[branch],
          ])}
        />
      </GuideSection>

      <GuideSection title="달력의 해가 아니라 사주의 해를 씁니다">
        <p>
          띠가 바뀌는 시점은 양력 1월 1일도, 설날도 아닙니다. 사주에서 해가 바뀌는 기준은{" "}
          <b>입춘</b>입니다. 그래서 1월이나 2월 초에 태어난 분은 달력상의 해와 사주의 해가
          다를 수 있습니다.
        </p>
        <GuideNote title="띠를 직접 묻지 않는 이유">
          입력 화면에서 띠를 고르게 하지 않고 생년월일만 받는 것이 이 때문입니다. 사주 엔진이
          계산한 연주에서 지지를 뽑으면 입춘 경계가 저절로 맞습니다. 직접 고르게 하면 2월 초
          출생자가 실제와 다른 띠를 고르게 됩니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="띠 궁합은 관계 하나만 봅니다">
        <p>
          띠 궁합의 계산은 단순합니다. 두 사람의 연지를 맞대어 그 관계가 합인지 충인지 원진인지
          판정하고, 그 점수를 그대로 씁니다. 항목이 하나뿐이라 가중치를 나눌 것도 없습니다.
        </p>
        <p>
          어떤 관계가 몇 점인지는{" "}
          <a
            href={localePath("/guide/branches", locale)}
            className="font-semibold text-brand-plum underline underline-offset-2"
          >
            십이지 관계표
          </a>
          에 전부 적어 두었습니다. 일지 궁합도 같은 표를 씁니다.
        </p>
      </GuideSection>

      <GuideSection title="비중을 30%로 둔 이유">
        <p>
          띠 궁합은 최종 매칭률의 {Math.round(ENGINE_WEIGHTS.zodiac * 100)}%를 차지합니다. 사주
          궁합이 네 기둥을 전부 보는 데 비해 띠는 글자 하나만 보므로, 같은 무게로 둘 수는
          없습니다.
        </p>
        <p>그렇다고 빼지 않는 이유가 둘 있습니다.</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <b>가장 직관적으로 이해되는 항목</b>입니다. 명리 용어를 모르셔도 &ldquo;범과 원숭이는
            충&rdquo;이라는 말은 뜻이 통합니다.
          </li>
          <li>
            <b>출생 시각을 몰라도 값이 흔들리지 않는 유일한 축</b>입니다. 시각을 모르시면 시주가
            빠지고 오행 세력이 달라지지만, 연지는 그대로입니다.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="띠 궁합만 따로 보실 수도 있습니다">
        <p>
          결과 화면에서 사주 궁합과 띠 궁합의 점수를 각각 보여드립니다. 최종 매칭률 하나만
          내놓으면 그 숫자가 어디서 왔는지 알 수 없기 때문입니다. 두 값이 크게 벌어져 있다면
          그것 자체가 읽을거리입니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
