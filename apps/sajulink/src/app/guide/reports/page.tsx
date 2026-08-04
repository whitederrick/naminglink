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
          사주 계산과 결과 조회는 <b>무료</b>입니다. 원국과 오행 세력, 오늘의 운세와 그 근거
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
          목차는 상품 문구에서 그대로 읽어 옵니다. <b>장수는 실제 문서와 같습니다</b> — 상품
          정보 고시에 적는 값이라 부풀리지 않습니다.
        </p>
      </GuideSection>

      <GuideSection title="화면에 없는 것은 무엇인가">
        <p>
          무료 화면은 원국과 오행 세력, 오늘의 운세까지 보여 드립니다. 그 계산 과정에서 나왔지만
          화면에 싣지 않는 값이 셋 있고, 그것이 유료 리포트의 몫입니다.
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <b>일간 편의 비율</b> — 신강·신약 판정이 어디쯤에서 갈렸는지를 숫자로 봅니다. 판정
            이름만으로는 경계에 아슬아슬했는지 넉넉했는지 알 수 없습니다.
          </li>
          <li>
            <b>왕상휴수사</b> — 태어난 달이 각 기운을 얼마나 밀어 올렸는지. 세력 막대가
            &ldquo;얼마나 있는가&rdquo;라면 이 표는 &ldquo;제철인가&rdquo;입니다.
          </li>
          <li>
            <b>진태양시 보정 내역</b> — 개념은 안내 문서에 있지만{" "}
            <b>&ldquo;당신의 경우 몇 분이 옮겨졌는지&rdquo;</b>는 사람마다 다른 값이라 리포트에만
            싣습니다.
          </li>
        </ul>
      </GuideSection>

      <GuideSection
        title={`프리미엄 총운 리포트 PDF — ${prices.premium.domestic}`}
      >
        <p>
          국내 결제 {prices.premium.domestic}(부가세 포함), 해외 결제 {prices.premium.global}.
          A4 {dictionary.premiumReport.contents.length}장입니다.
        </p>
        <ul>
          {dictionary.premiumReport.contents.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p>
          이쪽은 <b>근거 숫자</b>가 핵심입니다. 총운 리포트의 내용을 모두 담고, 거기에 위에 적은
          셋 — 일간 편의 비율, 왕상휴수사, 진태양시 보정 내역 — 을 더합니다. 판정을 믿으라고
          하는 대신 판정이 어떻게 나왔는지를 보여 드리는 몫입니다.
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
