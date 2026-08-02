import type { Metadata } from "next";

import {
  FiveElementsCycle,
  FiveElementsLegend,
  GuideFigure,
} from "@/components/GuideFigure";
import { GuideSection, GuideShell } from "@/components/GuideShell";
import { formatCount, getGuideCounts } from "@/lib/guide-data";
import { findGuideEntry } from "@/lib/guide-index";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { searchParams?: Promise<{ lang?: string }> };

const ENTRY = findGuideEntry("what-we-dont-use")!;

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);

  return buildPageMetadata({
    path: "/guide/what-we-dont-use",
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
      <GuideSection title="총운·수리 점수를 내지 않는 이유">
        <p>
          이름에 총운이나 수리 점수를 매겨 등급을 내는 방식이 있습니다. Naming-Link는 그 숫자를
          내지 않습니다. 이유는 넷입니다.
        </p>
        <p>
          <strong>첫째, 기준이 하나가 아닙니다.</strong> 수리를 보는 방식은 유파마다 다르고, 같은
          이름이 어느 기준에서는 좋게, 어느 기준에서는 나쁘게 나옵니다. 그중 어느 것이 맞다고
          저희가 대신 정할 근거가 없습니다. 하나를 골라 놓고 그것이 정답인 양 보여드리는 것은
          정직하지 않습니다.
        </p>
        <p>
          <strong>둘째, 그 계산은 획수에 기댑니다.</strong> 그런데 대법원 자료에는 획수가 아예
          들어 있지 않습니다. 게다가 획수는 정자로 세느냐 약자로 세느냐, 부수를 어떻게 세느냐에
          따라 값이 달라집니다. 바탕이 되는 숫자부터 확정되지 않는데 그 위에 쌓은 점수가
          확정적일 수는 없습니다.
        </p>
        <p>
          {/* `</strong> &ldquo;`처럼 태그 뒤 공백 다음에 HTML 엔티티가 오면 JSX가 그 공백을
              지운다(실제로 "보입니다.“87점”"으로 붙어 나갔다). 엔티티 앞에는 `{" "}`로 공백을
              명시할 것. */}
          <strong>셋째, 숫자는 실제보다 단단해 보입니다.</strong>{" "}
          &ldquo;87점&rdquo;이라고 적히면 관습적 해석이 아니라 측정된 값처럼 읽힙니다. 이름을 짓는 분이 그 숫자에 눌려,
          정작 중요한 것(부르기 좋은가, 뜻이 어울리는가, 담고 싶은 바람이 담겼는가)을 뒤로 미루게
          됩니다.
        </p>
        <p>
          <strong>넷째, 확인할 방법이 없습니다.</strong> 이름과 그 사람의 삶 사이의 관계는 검증할
          수 있는 것이 아닙니다. 맞다 틀리다를 말할 수 없는 것을 점수로 바꾸면, 틀릴 수 없는 대신
          확인할 수도 없는 숫자가 됩니다.
        </p>
        <p>
          저희는 <strong>출처를 댈 수 있는 것만 근거로 씁니다.</strong> 대법원 인명용 한자표,
          글자마다 지정된 독음, 표에 기재된 뜻. 그 대신 결과에는 왜 이 후보가 뽑혔고 왜 어떤
          글자가 빠졌는지를 함께 적어, <strong>점수 대신 이유</strong>를 보여드립니다.
        </p>
      </GuideSection>

      <GuideSection title="획수는 쓰지 않습니다">
        <p>
          대법원이 제공하는 인명용 한자 자료에는 획수가 들어 있지 않습니다. 저희가 받은{" "}
          {counts ? `${formatCount(counts.characterTotal)}자` : "전체 글자"} 가운데 획수가 기재된
          글자는 <strong>한 자도 없습니다.</strong>
        </p>
        <p>
          획수를 쓰려면 어딘가 다른 곳에서 숫자를 가져와야 하는데, 그 숫자가 어느 자료에서 왔고
          어떤 기준으로 센 것인지 밝힐 수 없다면 근거 없는 숫자로 이름을 판단하는 셈이 됩니다.
          저희는 출처를 댈 수 없는 값으로 이름을 평가하지 않기로 했습니다.
        </p>
      </GuideSection>

      <GuideSection title="오행은 참고로만 씁니다">
        <GuideFigure caption="오행이 서로 맺는 관계입니다. 원을 따라 도는 것이 상생(相生), 하나 건너뛰어 누르는 것이 상극(相剋)입니다. 저희는 이 관계를 후보 비교의 보조 축 하나로만 씁니다.">
          <FiveElementsCycle />
          <FiveElementsLegend />
        </GuideFigure>
        <p>
          출생월을 입력하신 경우, 그 달을 기준으로 한 간이 오행 참고를 후보 비교의 보조 축
          하나로 활용합니다. 다만 이것은 정밀한 사주 원국 분석이 아니며,{" "}
          <strong>이름이 그 사람의 운명이나 성격을 결정한다고 말하지 않습니다.</strong>
        </p>
        <p>
          최종 선택에서 저희가 앞세우는 것은 소리, 뜻의 결합, 가족이 담고 싶은 가치, 그리고
          실제로 등록이 되는지입니다. 출생월을 입력하지 않으셨다면 오행 참고는 아예 빼고
          분석합니다 — 모르는 정보를 임의로 추정하지 않습니다.
        </p>
        <p>
          정밀한 사주 기반 분석을 원하시면 별도의 상세 리포트에서 다룹니다. 무료 한자 매칭에서
          오행을 앞세우지 않는 것은, 생년월일시가 정확히 갖춰지지 않은 상태에서 나온 오행 판단을
          확정적인 것처럼 보여드리고 싶지 않기 때문입니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
