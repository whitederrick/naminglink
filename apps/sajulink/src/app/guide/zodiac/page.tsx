import type { Metadata } from "next";

import {
  GuideNote,
  GuideSection,
  GuideShell,
  GuideTable,
} from "@/components/GuideShell";
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

      <GuideSection title="띠는 사주에서 한 글자입니다">
        <p>
          여덟 글자 중 띠에 해당하는 것은 <b>연지 하나</b>입니다. 나머지 일곱 글자 — 특히 나를
          가리키는 일간 — 은 띠와 아무 상관이 없습니다.
        </p>
        <p>
          같은 해에 태어난 사람은 모두 같은 띠입니다. 그러니 띠로 알 수 있는 것은 여덟 글자 중
          하나만큼입니다. 이 서비스가 띠를 <b>따로 크게 다루지 않는 이유</b>가 그것입니다 —
          연지도 다른 지지와 똑같이 세력 계산과 오늘의 일진 판정에 들어갈 뿐입니다.
        </p>
        <GuideNote title="그래도 띠를 보여 드리는 이유">
          명리 용어를 모르셔도 뜻이 통하는 유일한 자리이기 때문입니다. 원국 화면에서 연지가
          무슨 띠인지 함께 적어 두면, 나머지 일곱 글자를 읽어 나가는 실마리가 됩니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="출생 시각을 몰라도 연지는 그대로입니다">
        <p>
          시각을 넣지 않으시면 시주가 빠지고 오행의 세력이 달라집니다. 그런데 <b>연지는 그대로</b>
          입니다 — 태어난 해만 알면 정해지기 때문입니다.
        </p>
        <p>
          그래서 시각을 모르시는 분께도 연지에서 나오는 이야기는 변하지 않습니다. 반대로 말하면,
          띠만으로 말할 수 있는 것은 시각을 넣든 안 넣든 그만큼뿐이라는 뜻이기도 합니다.
        </p>
      </GuideSection>

    </GuideShell>
  );
}
