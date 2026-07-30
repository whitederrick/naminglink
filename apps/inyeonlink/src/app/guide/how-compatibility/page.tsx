import type { Metadata } from "next";

import {
  GuideNote,
  GuideSection,
  GuideShell,
  GuideTable,
} from "@/components/GuideShell";
import { ENGINE_WEIGHTS } from "@/lib/engines";
import { SAJU_WEIGHTS } from "@/lib/engines/saju";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "how-compatibility";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

// 비중은 엔진 상수를 그대로 읽어 백분율로 보인다. 글에 손으로 적으면 규칙을 고쳤을 때
// 화면과 글이 갈린다(`lib/engines/saju.ts`의 SAJU_WEIGHTS).
const percent = (value: number) => `${Math.round(value * 100)}%`;

export default async function Page(props: GuidePageProps) {
  const { locale, entry } = await guideContext(SLUG, props);

  return (
    <GuideShell
      locale={locale}
      eyebrow={entry.eyebrow}
      title={entry.title}
      description={entry.summary}
      backHref={localePath("/guide", locale)}
      backLabel="계산 근거"
    >
      <GuideSection title="두 축을 나누어 계산하고 합칩니다">
        <p>
          매칭률은 두 갈래에서 나옵니다. <b>사주 궁합</b>은 두 사람의 사주 원국 전체를 보고,{" "}
          <b>띠 궁합</b>은 태어난 해의 지지 하나만 봅니다. 둘을 가중 평균해 최종 값을 냅니다.
        </p>
        <GuideTable
          head={["축", "무엇을 보는가", "비중"]}
          rows={[
            ["사주 궁합", "일간·일지·오행 세력 — 네 항목", percent(ENGINE_WEIGHTS.saju)],
            ["띠 궁합", "연지(年支)끼리의 관계 하나", percent(ENGINE_WEIGHTS.zodiac)],
          ]}
        />
        <p>
          사주 쪽이 훨씬 무거운 것은 쓰는 정보의 양이 다르기 때문입니다. 사주는 네 기둥을 전부
          보지만 띠는 글자 하나입니다. 그렇다고 띠를 빼지 않는 이유는 두 가지입니다 — 가장
          직관적으로 이해되는 항목이고, <b>출생 시각을 몰라도 값이 흔들리지 않는 유일한 축</b>
          이기 때문입니다.
        </p>
      </GuideSection>

      <GuideSection title="사주 궁합의 네 항목">
        <p>
          사주 쪽은 다시 넷으로 갈립니다. 각 항목이 보는 것이 서로 겹치지 않도록 골랐습니다.
        </p>
        <GuideTable
          head={["항목", "무엇을 보는가", "비중"]}
          rows={[
            [
              "일간 관계",
              "두 사람의 일간(日干)이 서로에게 무엇인가 — 십신으로 봅니다",
              percent(SAJU_WEIGHTS.dayMasterRelation),
            ],
            [
              "오행 보완",
              "상대가 내게 필요한 기운을 갖고 있는가 — 억부용신으로 봅니다",
              percent(SAJU_WEIGHTS.elementSupply),
            ],
            [
              "배우자성",
              "상대의 일간이 내 배우자 자리에 해당하는가",
              percent(SAJU_WEIGHTS.spouseStar),
            ],
            [
              "일지 관계",
              "두 사람의 일지(日支)가 합인가 충인가",
              percent(SAJU_WEIGHTS.dayBranchRelation),
            ],
          ]}
        />
        <p>
          일지를 보는 것은 전통 명리에서 <b>일지가 배우자궁</b>이기 때문입니다. 네 기둥 가운데
          배우자 자리를 가리키는 것이 일지라, 궁합에서 가장 먼저 보는 자리이기도 합니다.
        </p>
      </GuideSection>

      <GuideSection title="성별을 밝히지 않으면 배우자성을 뺍니다">
        <p>
          배우자성은 성별을 알아야 계산됩니다. 전통 명리가 배우자를 가리키는 자리를 성별에 따라
          다르게 보기 때문입니다. 밝히지 않으신 경우 이 항목을 <b>빼고</b> 남은 세 항목의 비중을
          다시 정규화합니다.
        </p>
        <GuideNote title="0점으로 두지 않습니다">
          빠진 자리를 0점으로 처리하면 성별을 밝히지 않았다는 이유만으로 점수가 부당하게
          내려갑니다. 비중을 다시 나누면 그런 일이 생기지 않습니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="출생 시각을 몰라도 계산됩니다">
        <p>
          출생 시각은 시주(時柱)를 정하는 데 쓰입니다. 모르시면 시주를 뺀 채로 계산하고, 결과
          화면에 그 사실을 표시합니다. 궁합의 네 항목 가운데 시주를 직접 쓰는 것은 없기 때문에
          값이 크게 흔들리지는 않지만, 오행 세력에는 영향이 있습니다.
        </p>
        <p>
          시각을 아신다면 태어난 곳도 함께 골라 주세요. 표준시와 실제 태양의 위치가 달라
          그대로 쓰면 시주가 어긋날 수 있습니다{" "}
          <a
            href={localePath("/guide/true-solar-time", locale)}
            className="font-semibold text-brand-plum underline underline-offset-2"
          >
            (진태양시 보정)
          </a>
          .
        </p>
      </GuideSection>

      <GuideSection title="같은 입력이면 언제나 같은 값입니다">
        <p>
          모든 점수가 규칙으로 정해집니다. 인공지능을 쓰지 않고, 난수도 쓰지 않습니다. 그래서
          같은 두 생년월일을 몇 번을 넣어도 결과가 달라지지 않습니다. 저장하지 않는 서비스라
          이전 결과를 꺼내 볼 수 없는데, 그 자리를 <b>결정성</b>이 대신합니다.
        </p>
        <GuideNote title="규칙을 고치면 판이 올라갑니다">
          점수 규칙을 바꿀 때마다 엔진 버전을 올립니다. 결과 화면 아래에 그 버전이 적혀 있어,
          지금 보고 계신 숫자가 어느 규칙으로 계산된 것인지 구분됩니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="이 결과가 무엇이 아닌지">
        <p>
          전통 명리의 관점에서 규칙을 세워 계산한 <b>참고 자료</b>입니다. 과학적 예측이 아니고,
          두 사람의 관계에 대한 단정도 아닙니다. 점수의 폭을 최저 45점 근처로 잡아 둔 것도 그
          때문입니다 — 어떤 조합에도 0점에 가까운 값을 주지 않습니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
