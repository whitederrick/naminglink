import { LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import { PolicyLayout, PolicySection } from "@/components/PolicyLayout";

export default function PricingPage() {
  return (
    <PolicyLayout
      title="요금안내"
      description={`서비스별 무료 제공 범위와 부가 상품 가격 안내입니다. 기준일: ${LEGAL_EFFECTIVE_DATE}`}
    >
      <PolicySection title="기본 분석">
        <p>
          무료 분석은 일일 사용량 제한 안에서 제공됩니다. 트래픽과 AI 비용에 따라
          무료 제공 횟수는 조정될 수 있습니다.
        </p>
      </PolicySection>

      <PolicySection title="부가 서비스 예정가">
        <p>프리미엄 작명 리포트 PDF: 9,900원</p>
        <p>캘리그라피 이미지: 6,900원</p>
        <p>이름 도장 신청: 39,000원부터</p>
        <p>광고 시청 후 후보 잠금 해제: 광고형 무료 혜택</p>
      </PolicySection>

      <PolicySection title="정식 결제 전 안내">
        <p>
          PG 심사, 통신판매업 신고, 제작 제휴 조건이 확정되면 실제 결제 금액,
          배송비, 제작 기간, 환불 조건을 상품 화면에 다시 고지합니다.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
