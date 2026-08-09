import type { Metadata } from "next";

import { BranchWheel, BranchWheelLegend, GuideFigure } from "@/components/GuideFigure";
import {
  GuideNote,
  GuideSection,
  GuideShell,
  GuideTable,
} from "@/components/GuideShell";
import { BRANCH_RELATION_SCORE } from "@/lib/engines/branches";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";

const SLUG = "branches";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

/**
 * 그림 안의 글자. **이 문서를 `doc-content`로 옮기면 이 상수는 사라진다** — 자료의
 * `figure.labels`가 대신 넘기고, 그래야 23개 언어에서 그림 안도 그 언어로 나온다. 지금은 이
 * 문서가 아직 한국어 JSX라 여기 둔다(`docs/I18N_DOC_CONTENT.md` 이관 절차 ④).
 */
const WHEEL_LABELS = {
  alt: "십이지 열두 글자를 원으로 놓고 육합·충·원진을 선으로 이은 그림",
  yukhap: "육합",
  chung: "충",
  wonjin: "원진",
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

/**
 * 관계별 설명. **점수는 여기에 적지 않는다** — `BRANCH_RELATION_SCORE`에서 읽는다.
 * 표를 손으로 옮겨 적으면 규칙을 고쳤을 때 글만 옛날 값으로 남는다.
 */
const RELATIONS = [
  {
    key: "SAMHAP" as const,
    name: "삼합(三合)",
    pairs: "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
    body: "세 글자가 다 모여 하나의 국(局)을 이룬 것. 가장 강한 합으로 봅니다.",
  },
  {
    key: "YUKHAP" as const,
    name: "육합(六合)",
    pairs: "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
    body: "서로 끌어당기는 짝. 두 글자만으로 성립하므로 궁합에서 가장 자주 나오는 합입니다.",
  },
  {
    key: "BANHAP" as const,
    name: "반합(半合)",
    pairs: "삼합 중 왕지(子·酉·午·卯)를 낀 두 글자",
    body: "국의 중심이 되는 글자를 낀 절반의 합. 두 글자로는 국을 이루지 못해 삼합보다 낮습니다.",
  },
  {
    key: "SAME" as const,
    name: "같은 지지",
    pairs: "子子 · 丑丑 …",
    body: "같은 글자끼리. 닮았다는 뜻이지 끌어당긴다는 뜻은 아니라고 보아 중간에 둡니다.",
  },
  {
    key: "NEUTRAL" as const,
    name: "무관계",
    pairs: "위아래 어디에도 들지 않는 짝",
    body: "특별한 관계가 없는 조합. 기준점이 되는 자리입니다.",
  },
  {
    key: "WONJIN" as const,
    name: "원진(怨嗔)",
    pairs: "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
    body: "미워하면서도 떨어지지 못하는 짝. 겉으로는 조용하지만 오래간다고 봅니다.",
  },
  {
    key: "CHUNG" as const,
    name: "충(沖)",
    pairs: "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
    body: "정면으로 부딪치는 짝. 마주 보는 여섯 쌍입니다.",
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
      <GuideSection title="지지는 열두 글자입니다">
        <p>
          십이지(十二支)는 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥 열둘입니다. 흔히 아는 띠 —
          쥐·소·범·토끼·용·뱀·말·양·원숭이·닭·개·돼지 — 가 이 열두 글자에 하나씩 붙습니다.
        </p>
        <GuideFigure caption="열두 글자를 원으로 놓으면 관계가 한눈에 보입니다. 충(冲)은 언제나 마주 보는 자리이고, 육합과 원진은 그보다 가까운 짝입니다. 이 선들은 글에 적어 둔 것이 아니라 계산 규칙에서 그대로 뽑았습니다.">
          <BranchWheel labels={WHEEL_LABELS} />
          <BranchWheelLegend labels={WHEEL_LABELS} />
        </GuideFigure>
        <p>
          사주에서는 네 기둥마다 지지가 하나씩 있습니다. 인연링크는 그중 <b>일지</b>(배우자궁)와{" "}
          <b>연지</b>(띠) 둘을 씁니다. 두 자리 모두 아래 같은 관계표로 판정합니다.
        </p>
      </GuideSection>

      <GuideSection title="관계표 전체">
        <GuideTable
          caption="점수가 높은 순. 인연링크가 실제로 쓰는 값입니다."
          head={["관계", "해당하는 짝", "뜻", "점수"]}
          rows={RELATIONS.map((relation) => [
            relation.name,
            <span key="pairs" className="whitespace-nowrap text-muted">
              {relation.pairs}
            </span>,
            relation.body,
            BRANCH_RELATION_SCORE[relation.key],
          ])}
        />
      </GuideSection>

      <GuideSection title="삼합은 이 서비스에서 나오지 않습니다">
        <p>
          삼합은 세 글자가 다 모여야 성립합니다. 그런데 궁합은 두 사람의 지지를 <b>하나씩</b>{" "}
          맞대는 구조라 글자가 둘뿐입니다. 그래서 여기서 나오는 것은 언제나 반합이고, 삼합{" "}
          {BRANCH_RELATION_SCORE.SAMHAP}점은 각자의 사주 안에서 국을 볼 때를 위해 남겨 둔
          자리입니다.
        </p>
        <GuideNote title="반합은 왕지가 있어야 인정합니다">
          같은 삼합 그룹에 둘 다 들어 있기만 하면 반합으로 치는 방식도 있습니다. 그러면 申辰처럼
          합이라 부르기 어려운 조합까지 높은 점수를 받습니다. 그래서 이 서비스는{" "}
          <b>왕지</b>(子·酉·午·卯)를 낀 두 글자라야 반합으로 인정하고, 왕지가 빠진
          申辰·巳丑·寅戌·亥未는 합으로 치지 않습니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="원진을 따로 둔 이유">
        <p>
          원진 여섯 쌍은 궁합에서 충 못지않게 자주 보는 자리입니다. 합과 충만 세는 방식이라면
          이 여섯 쌍이 전부 무관계 {BRANCH_RELATION_SCORE.NEUTRAL}점에 묻히므로, 따로 자리를
          둡니다.
        </p>
        <p>
          충이 정면으로 부딪쳐 크게 드러나는 것이라면 원진은 은근히 어긋나는 것입니다. 그래서
          충({BRANCH_RELATION_SCORE.CHUNG})보다는 높고 무관계(
          {BRANCH_RELATION_SCORE.NEUTRAL})보다는 확실히 낮은 {BRANCH_RELATION_SCORE.WONJIN}점에
          둡니다.
        </p>
      </GuideSection>

      <GuideSection title="충에도 점수를 남깁니다">
        <p>
          가장 낮은 충이 {BRANCH_RELATION_SCORE.CHUNG}점입니다. 0점에 가까운 값을 주지 않는 것은
          의도적입니다. 전통 명리에서 충은 &ldquo;끝&rdquo;이 아니라 &ldquo;부딪침&rdquo;이고,
          바닥에 가까운 점수를 주면 서비스가 관계를 단정하는 꼴이 되기 때문입니다.
        </p>
        <p>
          최저 {BRANCH_RELATION_SCORE.CHUNG} · 최고 {BRANCH_RELATION_SCORE.SAMHAP}으로 폭을 두어
          차이는 분명히 보이되 단정하지는 않습니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
