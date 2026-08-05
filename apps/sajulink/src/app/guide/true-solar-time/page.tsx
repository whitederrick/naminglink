import type { Metadata } from "next";

import {
  GuideNote,
  GuideSection,
  GuideShell,
  GuideTable,
} from "@/components/GuideShell";
import { BIRTHPLACES } from "@/lib/birthplaces";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "true-solar-time";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

export default async function Page(props: GuidePageProps) {
  const { locale, entry, hubHref } = await guideContext(SLUG, props);
  const cityCount = BIRTHPLACES.length;

  return (
    <GuideShell
      locale={locale}
      eyebrow={entry.eyebrow}
      title={entry.title}
      description={entry.summary}
      backHref={hubHref}
      backLabel="계산 근거"
    >
      <GuideSection title="시계의 시각과 태양의 시각은 다릅니다">
        <p>
          사주의 시주(時柱)는 태양이 어디에 있는지로 정합니다. 그런데 우리가 보는 시계는 나라
          전체가 하나의 표준시를 쓰기 때문에, 태양의 실제 위치와 어긋납니다.
        </p>
        <p>
          한국의 표준시는 동경 135°를 기준으로 합니다. 서울의 경도는 약 127°이므로 8° 정도
          서쪽에 있고, 그만큼 태양이 늦게 남중합니다 — 시계로 정오일 때 서울의 태양은 아직
          남중 전입니다. 이 차이가 약 <b>32분</b>입니다.
        </p>
        <GuideNote title="32분이 시주를 한 칸 바꿉니다">
          사주의 시간은 두 시간 단위로 끊깁니다. 경계 근처에 태어나신 분은 32분 차이로 시주가
          통째로 바뀝니다 — 정확히 이 경계에 걸리는 분들 때문에 보정이 필요합니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="태어난 곳을 묻는 이유">
        <p>
          경도가 다르면 보정량도 다릅니다. 해외에서 태어나신 분에게 서울 기준 보정을 적용하면
          시주가 크게 어긋납니다. 그래서 입력 화면에서 태어난 곳을 함께 고르시게 하고, 그
          도시의 경도와 표준시간대로 계산합니다. 지금 목록에 {cityCount}곳이 들어 있습니다.
        </p>
        <p>
          같은 나라 안에서도 경도가 크게 벌어지는 곳(미국·러시아·인도네시아 등)은 도시를 나눠
          두었습니다. <b>경도 15°가 시주 한 칸</b>이기 때문입니다.
        </p>
        <p>
          고르지 않으시면 서울 기준으로 계산합니다. 국내 출생이 대부분이라 그 편이 실수가
          적지만, 해외에서 태어나셨다면 반드시 골라 주세요.
        </p>
      </GuideSection>

      <GuideSection title="표준시는 과거에 여러 번 바뀌었습니다">
        <p>
          보정을 &ldquo;경도 차이 ÷ 15° × 60분&rdquo; 하나로만 계산하면 안 되는 이유가
          있습니다. 표준시 자체가 시대마다 달랐기 때문입니다.
        </p>
        <GuideTable
          caption="한국의 표준시 변천 — 이 구간에 태어나신 분은 단순 계산으로는 어긋납니다"
          head={["시기", "무엇이 달랐나"]}
          rows={[
            ["1912년 이전", "표준시 자체가 없었습니다 (지방 평시)"],
            ["1954 – 1961", "표준시가 UTC+8:30이었습니다"],
            ["1948 – 51 · 1955 – 60 · 1987 – 88", "서머타임을 시행했습니다"],
          ]}
        />
        <p>
          사주링크는 표준 자오선을 고정값으로 두지 않고, 태어난 곳의 <b>IANA 표준시간대</b>{" "}
          정보로 그 시점에 실제로 쓰이던 표준시를 찾아 계산합니다. 서머타임과 과거 표준시가
          자동으로 반영됩니다.
        </p>
      </GuideSection>

      <GuideSection title="자정 직후 출생은 날짜까지 봅니다">
        <p>
          보정이 -32분이므로, 시계로 00:00~00:32에 태어나신 분은 진태양시로는 <b>전날 23시대</b>
          입니다. 시각만 되돌리고 날짜를 그대로 두면 &ldquo;전날 23시&rdquo;라는 시각으로 당일
          일주(日柱)를 쓰게 됩니다.
        </p>
        <p>
          사주링크는 이 경우 날짜도 함께 되돌립니다. 일주의 위 글자가 곧 나 자신을 가리키는
          일간이라, 여기가 어긋나면 풀이의 거의 모든 항목이 어긋납니다.
        </p>
      </GuideSection>

      <GuideSection title="시각을 모르셔도 됩니다">
        <p>
          출생 시각은 선택 사항입니다. 모르시면 시주를 뺀 채로 계산하고 결과 화면에 그 사실을
          표시합니다. 여덟 글자 중 둘이 빠지는 것이라 오행 세력과 강약 판정에 영향이 있으므로,
          아신다면 넣는 편이 정확합니다.
        </p>
        <p>
          연지(띠)는 시각과 무관하게 언제나 같습니다 —{" "}
          <a
            href={localePath("/guide/zodiac", locale)}
            className="font-semibold text-brand-navy underline underline-offset-2"
          >
            연지 하나만 보기 때문
          </a>
          입니다.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
