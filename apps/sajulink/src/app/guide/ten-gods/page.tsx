import type { Metadata } from "next";

import {
  GuideNote,
  GuideSection,
  GuideShell,
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

      <GuideSection title="나머지 일곱 글자가 나에게 무엇인가">
        <p>
          일간이 정해지면 원국의 나머지 글자는 저마다 이름을 얻습니다. 나를 낳아 주는 기운,
          나와 같은 기운, 내가 낳는 기운, 내가 누르는 기운, 나를 누르는 기운 — 다섯 갈래이고
          각각을 음양으로 다시 갈라 <b>열 가지</b>가 됩니다. 이것이 십신입니다.
        </p>
        <p>
          그래서 십신은 남과의 관계가 아니라 <b>내 안의 자리</b>를 가리킵니다. 어느 자리가
          두터운지 얇은지가 성향과 살아가는 결을 말해 줍니다.
        </p>
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
        <p>
          전통 명리는 배우자를 가리키는 자리를 성별로 다르게 봅니다. 남성에게는{" "}
          <b>정재(正財)</b>, 여성에게는 <b>정관(正官)</b>입니다. 같은 재성이라도 음양이 어긋난
          정재라야 배우자 자리로 보고, 편재는 배우자가 아니라 활동·재물의 성격으로 읽습니다.
        </p>
        <GuideNote title="성별을 밝히지 않으시면 이 자리를 뺍니다">
          정재와 정관 중 어느 쪽을 배우자 자리로 볼지 정할 수 없기 때문입니다. 없는 값을
          추측해 채우는 대신 그 항목만 빼고 나머지로 읽습니다.
        </GuideNote>
      </GuideSection>

    </GuideShell>
  );
}
