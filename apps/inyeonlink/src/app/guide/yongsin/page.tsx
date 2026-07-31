import type { Metadata } from "next";

import {
  GuideNote,
  GuideSection,
  GuideShell,
  GuideTable,
} from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "yongsin";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

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
      <GuideSection title="오행이 '고른가'는 궁합의 질문이 아닙니다">
        <p>
          두 사람의 오행을 합쳐 다섯 기운이 고르게 퍼졌는지를 재는 방식도 있습니다. 그런데 궁합의
          질문은 그것이 아닙니다. <b>상대가 내게 필요한 것을 갖고 있는가</b>입니다.
        </p>
        <p>
          균형도는 대칭적이지만 보완은 본래 비대칭입니다. A에게 필요한 것과 B에게 필요한 것이
          다르기 때문입니다. 그래서 양쪽을 각각 재고 평균합니다 — 평균이므로 총점은 대칭으로
          남습니다.
        </p>
      </GuideSection>

      <GuideSection title="억부용신 — 넘치면 덜고 모자라면 보탠다">
        <p>
          용신(用神)은 &ldquo;이 사람에게 지금 필요한 기운&rdquo;입니다. 정하는 방법이 여럿
          있지만(억부·조후·병약·통관) 규칙으로 옮길 수 있고 가장 널리 쓰이는 것이{" "}
          <b>억부(抑扶)</b>입니다. 일간이 강하면 덜어 내는 기운이, 약하면 보태는 기운이
          필요하다고 봅니다.
        </p>
        <GuideTable
          head={["판정", "무엇이 필요한가", "몇 가지"]}
          rows={[
            ["신강(身强)", "덜어 내는 기운 — 식상·재성·관성", "셋"],
            ["신약(身弱)", "보태는 기운 — 인성·비겁", "둘"],
            ["중화(中和)", "억부로 가릴 수 없으므로 가장 얇은 기운", "둘"],
          ]}
        />
      </GuideSection>

      <GuideSection title="강약을 가르는 경계값">
        <p>
          일간 편은 <b>인성과 비겁</b>입니다 — 나를 낳는 기운과 나와 같은 기운. 다섯 중 둘이므로
          기운이 완전히 고르면 40%가 됩니다. 그 40%를 중심으로 위아래에 폭을 둡니다.
        </p>
        <GuideTable
          caption="아군(인성+비겁)이 전체 세력에서 차지하는 비율"
          head={["비율", "판정"]}
          rows={[
            ["45% 이상", "신강"],
            ["35% 이상 45% 미만", "중화"],
            ["35% 미만", "신약"],
          ]}
        />
        <GuideNote title="중화는 '덜 확신하는 판정'입니다">
          중화라는 것은 억부로는 가릴 수 없다는 뜻입니다. 이때는 단순히 가장 얇은 두 기운을
          필요한 것으로 봅니다. 결과 화면에도 단정이 아니라 &ldquo;지금 얇은 자리&rdquo;로
          적습니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="세력은 글자 개수가 아닙니다">
        <p>
          오행의 세력을 셀 때 여덟 글자를 눈에 보이는 대로 세지 않습니다. 지지 안에 숨은 천간
          (<b>지장간</b>)과 태어난 달이 어느 기운의 계절인가(<b>월령</b>)를 함께 반영한 값을
          씁니다.
        </p>
        <p>
          표면 글자만 세면 같은 木 두 글자라도 계절에 따라 힘이 전혀 다른 것을 놓칩니다. 봄의
          木과 가을의 木은 같은 글자여도 세력이 다릅니다.
        </p>
      </GuideSection>

      <GuideSection title="채워 주는 정도를 점수로">
        <p>
          상대의 세력에서 내 용신군이 차지하는 비율을 봅니다. 다만 그 비율을 그대로 쓰지 않고{" "}
          <b>용신군의 크기로 기대치를 나눕니다.</b> 신강일 때 용신군은 셋(기대 60%), 신약일 때는
          둘(기대 40%)이라, 비율을 그대로 쓰면 신강인 사람이 늘 높은 점수를 받게 됩니다.
        </p>
        <p>
          기대치만큼 채워 주면 78점 근처가 나오고, 훨씬 많이 채워 주면 100점, 크게 모자라면 55점
          쪽으로 갑니다. 여기서도 바닥을 0에 두지 않습니다.
        </p>
      </GuideSection>

      <GuideSection title="이것은 간이 판정입니다">
        <p>
          실제 명리는 격국과 조후(계절의 한난조습)까지 보고 용신을 정하며, 술사에 따라 결론이
          갈리기도 합니다. 인연링크는 <b>세력 수치로 잴 수 있는 억부만</b> 씁니다. 규칙으로 옮길
          수 있는 것만 쓴다는 원칙 때문이고, 그래서 같은 입력이면 언제나 같은 답이 나옵니다.
        </p>
        <p>
          그 대신 결과 화면에 각자의 신강·신약과 지금 필요한 기운을 <b>읽을거리로</b> 함께
          내보냅니다. 점수의 근거를 감추지 않으려는 것입니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
