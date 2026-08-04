import type { Metadata } from "next";

import {
  GuideNote,
  GuideSection,
  GuideShell,
  GuideTable,
} from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "ten-gods";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

/**
 * 일간 짝 여섯. 이름·뜻만 여기 있고 **점수는 적지 않는다** — 점수는 `relations.ts`의
 * BOND_SCORE에 있고, 글에 옮겨 적으면 규칙을 고쳤을 때 갈린다. 대신 순서로 높낮이를 보인다.
 */
const BONDS = [
  {
    pair: "정재 ↔ 정관",
    yin: "다른 음양",
    name: "유정(有情)",
    body: "전통이 부부의 자리로 보는 짝입니다. 음양이 어긋나 서로를 끌어당깁니다.",
  },
  {
    pair: "상관 ↔ 정인",
    yin: "다른 음양",
    name: "상관패인(傷官佩印)",
    body: "한쪽의 격한 기운을 다른 쪽이 감싸 줍니다.",
  },
  {
    pair: "비견 ↔ 비견",
    yin: "같은 음양",
    name: "대등",
    body: "닮았고 대등하지만, 서로 밀어 주지는 않습니다.",
  },
  {
    pair: "겁재 ↔ 겁재",
    yin: "다른 음양",
    name: "경쟁",
    body: "끌리지만 같은 자리를 다툽니다.",
  },
  {
    pair: "편재 ↔ 편관",
    yin: "같은 음양",
    name: "무정(無情)",
    body: "자극은 크지만 부담도 큽니다.",
  },
  {
    pair: "식신 ↔ 편인",
    yin: "같은 음양",
    name: "효신탈식(梟神奪食)",
    body: "내주는 기운을 상대가 거둬 가 흐름이 막힙니다.",
  },
];

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
      <GuideSection title="일간이 그 사람 자신입니다">
        <p>
          사주 여덟 글자 가운데 <b>일간</b>(태어난 날의 천간)이 그 사람 자신을 가리킵니다.
          나머지 일곱 글자는 그 일간이 놓인 환경으로 읽습니다.
        </p>
        <p>
          <b>십신</b>(十神)은 일간이 다른 글자를 어떻게 보는지를 열 가지로 나눈 것입니다. 나를
          키우는 것은 인성, 나와 같은 것은 비겁, 내가 낳는 것은 식상, 내가 누르는 것은 재성,
          나를 누르는 것은 관성 — 다섯 갈래를 다시 음양으로 갈라 열이 됩니다.
        </p>
      </GuideSection>

      <GuideSection title="두 사람의 일간이 서로에게 무엇인가">
        <p>
          궁합의 첫 항목이 이것입니다. A의 일간이 B의 일간을 무엇으로 보는지가 정해지면 B가 A를
          보는 자리도 따라서 정해지므로, 짝은 <b>여섯 가지뿐</b>입니다.
        </p>
        <GuideTable
          caption="점수가 높은 순"
          head={["짝", "음양", "이름", "뜻"]}
          rows={BONDS.map((bond) => [bond.pair, bond.yin, bond.name, bond.body])}
        />
        <GuideNote title="음양이 갈림길입니다">
          음양이 어긋난 쪽(정재·정관·정인)이 유정하고, 같은 쪽(편재·편관·편인)이 무정하다는
          것이 십신의 정·편을 가르는 원리 그대로입니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="오행 셋이 아니라 십신으로 보는 이유">
        <p>
          일간 관계를 오행 셋(상생·같음·상극)으로만 보는 방식도 있습니다. 간단하지만{" "}
          <b>음양이 사라집니다.</b> 甲(양목)과 乙(음목)이 甲과 甲처럼 똑같은
          &ldquo;같음&rdquo;이 되고, 상극은 방향도 음양도 없이 한 점수로 뭉개집니다.
        </p>
        <p>
          배우자 자리는 어차피 십신으로 음양을 따져야 합니다. 오행으로 보는 항목과 십신으로 보는
          항목이 한 엔진에 섞이면 같은 두 글자를 두고 기준이 둘이 됩니다. 그래서 십신으로
          통일합니다.
        </p>
      </GuideSection>

      <GuideSection title="배우자 자리는 정재와 정관입니다">
        <p>전통 명리에서 배우자를 가리키는 십신은 성별에 따라 다릅니다.</p>
        <GuideTable
          head={["성별", "배우자 자리", "그에 준하는 자리"]}
          rows={[
            ["남성", "정재(正財)", "편재(偏財)"],
            ["여성", "정관(正官)", "편관(偏官)"],
          ]}
        />
        <p>
          같은 재성이라도 음양이 어긋난 <b>정재</b>라야 배우자 자리로 보고, 편재는 배우자가
          아니라 활동·재물의 성격으로 읽습니다. 그래서 정재·정관은 2점, 편재·편관은 1점으로
          나눠 세고 양쪽 방향을 합산합니다 — 둘 다 상대를 배우자 자리로 보면 가장 높습니다.
        </p>
        <GuideNote title="성별을 밝히지 않으면 이 항목을 뺍니다">
          판정할 수 없는 항목을 0점으로 두면 부당하게 낮은 점수가 됩니다. 항목을 빼고 남은
          비중을 다시 정규화합니다{" "}
          <a
            href={localePath("/guide/how-compatibility", locale)}
            className="font-semibold text-brand-plum underline underline-offset-2"
          >
            (항목과 비중)
          </a>
          .
        </GuideNote>
      </GuideSection>

      <GuideSection title="관계의 모양도 함께 보여드립니다">
        <p>
          점수와 별개로, 두 일간의 짝이 <b>어떤 모양</b>인지를 결과 화면에 적습니다. 서로 닮은
          자리인지, 한쪽이 다른 쪽을 키우는 자리인지, 눌리는 자리인지 — 키우거나 누르는 관계라면
          어느 쪽이 그 자리인지까지 밝힙니다.
        </p>
        <p>
          점수 하나만 내놓으면 &ldquo;그래서 뭐&rdquo;가 남기 때문입니다. 모양은 점수가 아니라
          읽을거리이고, 낮은 점수의 짝에도 읽을 것이 있습니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
