import { LEGAL_EFFECTIVE_DATE, companyInfo } from "@/lib/company";
import { PolicyLayout, PolicySection } from "@/components/PolicyLayout";

export default function RefundPolicyPage() {
  return (
    <PolicyLayout
      title="환불 및 취소 정책"
      description={`프리미엄 리포트, 캘리그라피, 도장 주문의 취소 기준을 안내합니다. 시행일: ${LEGAL_EFFECTIVE_DATE}`}
    >
      <PolicySection title="1. 공통 원칙">
        <p>
          결제 기능이 활성화되면 각 상품의 제공 방식, 제작 착수 시점, 다운로드
          여부에 따라 환불 가능 범위가 달라질 수 있습니다.
        </p>
      </PolicySection>

      <PolicySection title="2. 프리미엄 PDF">
        <p>
          결제 후 PDF 생성 또는 다운로드가 시작되기 전에는 취소가 가능합니다.
          생성이 완료된 디지털 콘텐츠는 내용 오류나 시스템 장애가 확인되는 경우
          재발급 또는 환불을 검토합니다.
        </p>
      </PolicySection>

      <PolicySection title="3. 캘리그라피 이미지">
        <p>
          개인 맞춤 제작물은 제작 착수 전까지 취소가 가능합니다. 제작 착수 후에는
          단순 변심 환불이 제한될 수 있으며, 오탈자나 주문 정보 반영 오류는 수정
          또는 재제작으로 처리합니다.
        </p>
      </PolicySection>

      <PolicySection title="4. 도장 주문">
        <p>
          실물 도장은 맞춤 제작 상품입니다. 제작 전에는 취소가 가능하지만, 제작
          착수 후에는 단순 변심 환불이 제한될 수 있습니다. 파손, 오제작, 배송
          문제는 확인 후 교환, 재제작, 환불 중 적절한 방식으로 처리합니다.
        </p>
      </PolicySection>

      <PolicySection title="5. 광고형 잠금 해제">
        <p>
          광고 시청형 혜택은 결제 상품이 아니며, 광고 네트워크 오류로 보상이
          지급되지 않은 경우 서비스 내 보상 재시도 또는 고객센터 문의로 처리합니다.
        </p>
      </PolicySection>

      <PolicySection title="6. 문의">
        <p>환불 문의: {companyInfo.email}</p>
      </PolicySection>
    </PolicyLayout>
  );
}
