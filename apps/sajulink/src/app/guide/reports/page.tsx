import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { getDictionary } from "@/lib/i18n";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { getAllReportPrices } from "@/lib/report-product";

/**
 * 유료 리포트에 무엇이 들어가는지 밝히는 글.
 *
 * **목차와 금액을 여기에 적지 않는다.** 목차는 구매 패널이 쓰는 사전 값(`report.contents`)을,
 * 금액은 상품 설정(`product_settings`)을 그대로 읽는다. 손으로 옮겨 적으면 장을 더하거나 값을
 * 바꿀 때 한쪽만 고쳐지고, **그 갈림은 아무도 눈치채지 못한다** — 안내 문서의 숫자를 엔진
 * 상수에서 읽는 것과 같은 이유다.
 *
 * **한계를 함께 적는다.** "이런 게 들어갑니다"만 있으면 광고 문구로 읽히고, 애드센스는 얄팍한
 * 홍보성 페이지를 싫어한다. 무엇보다 서버가 파일을 보관하지 않는다는 사실은 사기 전에 알아야
 * 하는 조건이다.
 */

const SLUG = "reports";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

export default async function Page(props: GuidePageProps) {
  const { locale, entry, hubHref } = await guideContext(SLUG, props);
  const dictionary = getDictionary(locale);
  const prices = await getAllReportPrices();

  return (
    <GuideShell
      locale={locale}
      eyebrow={entry.eyebrow}
      title={entry.title}
      description={entry.summary}
      backHref={hubHref}
      backLabel="계산 근거"
    >
      <GuideSection title="화면은 그대로 두고, PDF에만 더했습니다">
        <p>
          궁합 계산과 결과 조회는 <b>무료</b>입니다. 매칭률, 항목별 점수와 비중, 두 사람의 사주
          원국과 오행 세력, 관계의 모양까지 화면에서 전부 보실 수 있습니다. 유료 리포트를 만들면서
          화면에서 무엇을 빼지 않았습니다.
        </p>
        <p>
          리포트가 하는 일은 <b>화면에 없는 층을 더하는 것</b>입니다. 그리고 그 층은 지어낸 것이
          아니라, 점수를 내는 과정에서 이미 계산됐지만 화면에는 안 쓰던 값입니다.
        </p>
      </GuideSection>

      <GuideSection title={`사주 총운 리포트 PDF — ${prices.chongun.domestic}`}>
        <p>
          국내 결제 {prices.chongun.domestic}(부가세 포함), 해외 결제 {prices.chongun.global}.
          A4 {dictionary.report.contents.length}장입니다.
        </p>
        <ul>
          {dictionary.report.contents.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p>
          <b>1~3장은 화면에 있는 것</b>을 보관하기 좋게 정리한 것이고, <b>4장부터가 화면에 없는
          내용</b>입니다. 무엇이 왜 화면에 없었는지 아래에 적습니다.
        </p>
      </GuideSection>

      <GuideSection title="4장 — 두 기운이 오가는 방향">
        <p>
          화면의 오행 항목은 점수 하나로 나옵니다. 그런데 그 하나는 <b>두 방향의 평균</b>입니다 —
          상대가 나를 채워 주는 정도와, 내가 상대를 채워 주는 정도를 각각 재고 평균한 값입니다.
        </p>
        <p>
          보완은 본래 <b>비대칭</b>입니다. 나에게 필요한 기운과 상대에게 필요한 기운이 다르기
          때문입니다. 평균만 보면 한쪽만 크게 채워 주는 관계와 서로 고르게 채워 주는 관계가 같은
          숫자로 보입니다. 리포트는 그 둘을 갈라 보여 줍니다.
        </p>
        <p>
          같은 장에 <b>네 기둥의 지지 관계표</b>도 실립니다. 매칭률에 들어가는 것은 일지(日支)
          하나뿐인데 — 배우자 자리이기 때문입니다 — 나머지 연·월·시주도 같은 관계표로 읽을 수
          있습니다.
        </p>
        <GuideNote title="이 표의 점수는 매칭률에 들어가지 않습니다">
          넣으면 총점이 달라져 이미 나간 결과 링크와 어긋납니다. 그래서 읽을거리로만 싣고, 표
          아래에 그 사실을 적어 둡니다.
        </GuideNote>
      </GuideSection>

      <GuideSection title="5장 — 각자의 사주를 더 들여다봅니다">
        <p>
          화면의 오행 막대는 <b>&ldquo;얼마나 있는가&rdquo;</b>를 보여 줍니다. 리포트는 거기에
          <b> &ldquo;태어난 달이 그 기운을 밀어 주는가&rdquo;</b>를 더합니다. 같은 양이라도
          왕(旺)인 기운과 사(死)인 기운은 힘이 다릅니다.
        </p>
        <p>
          월령을 곱하기 전과 후의 세력을 나란히 두어, 계절이 무엇을 얼마나 밀어 올렸는지 숫자로
          보실 수 있습니다. 신강·신약을 가른 <b>아군 비율</b>도 함께 적습니다 — 화면은 판정만
          보여 주지만 리포트는 그 판정이 어디쯤에서 갈렸는지까지 보여 줍니다.
        </p>
      </GuideSection>

      <GuideSection title="6장 — 상대의 네 기둥은 나에게 무엇인가">
        <p>
          매칭률은 두 사람의 <b>일간끼리만</b> 비교합니다. 그런데 상대의 나머지 세 기둥도 같은
          규칙으로 십신이 정해집니다. 일주만 보면 &ldquo;이 사람이 내게 무엇인가&rdquo;는 알아도
          <b> 그 사람의 어느 자리가 내게 무엇인가</b>는 알 수 없습니다.
        </p>
        <p>방향이 있으므로 양쪽을 따로 싣습니다. 내가 볼 때와 상대가 볼 때가 다릅니다.</p>
      </GuideSection>

      <GuideSection title="7장 — 이 사주를 이렇게 계산했습니다">
        <p>
          출생 시각을 진태양시로 얼마나 고쳤는지, 보정으로 날짜가 넘어갔는지, 사주를 뽑은 양력·
          음력 날짜가 무엇인지를 적습니다. 개념은 <b>출생 시각을 진태양시로 고칩니다</b> 문서에
          설명해 두었지만, <b>&ldquo;당신의 경우 몇 분이 옮겨졌는지&rdquo;</b>는 사람마다 다른
          값이라 리포트에만 실립니다.
        </p>
      </GuideSection>

      <GuideSection
        title={`프리미엄 총운 리포트 PDF — ${prices.premium.domestic}`}
      >
        <p>
          국내 결제 {prices.premium.domestic}(부가세 포함), 해외 결제 {prices.premium.global}.
          A4 {dictionary.affinityReport.contents.length}장입니다.
        </p>
        <ul>
          {dictionary.affinityReport.contents.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p>
          이쪽은 <b>전체 순위표</b>가 핵심입니다. 화면은 잘 맞는 결 셋만 보여 주지만, 리포트에는
          천간 열 종과 열두 띠를 <b>전부</b> 순위로 싣습니다. 상위 셋만 보면 &ldquo;그 다음은
          누구인가&rdquo;와 &ldquo;가장 안 맞는 쪽은 어디인가&rdquo;를 알 수 없습니다.
        </p>
      </GuideSection>

      <GuideSection title="사기 전에 알아 두실 것">
        <p>
          <b>서버가 파일을 보관하지 않습니다.</b> 결제가 승인되면 그 자리에서 문서를 만들어
          내려보내고 서버에는 아무것도 남기지 않습니다. 입력값을 저장하지 않는다는 이 서비스의
          원칙이 유료 흐름에서도 그대로 지켜지기 때문입니다.
        </p>
        <p>
          그래서 <b>결제 직후 파일을 저장해 주십시오.</b> 같은 주문으로 다섯 번까지 다시 받을 수
          있지만, 결과 화면을 벗어나 입력값이 사라지면 그 뒤로는 다시 만들 수 없습니다.
        </p>
        <GuideNote title="리포트도 참고 자료입니다">
          장수가 늘었다고 결론이 더 확실해지는 것은 아닙니다. 리포트가 더 담는 것은 <b>같은
          계산의 근거</b>이지 더 강한 단정이 아닙니다. 명리는 술사에 따라 결론이 갈리는 분야이고,
          이 서비스는 규칙으로 옮길 수 있는 것만 계산합니다.
        </GuideNote>
      </GuideSection>
    </GuideShell>
  );
}
