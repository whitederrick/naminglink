import { PrivacyDocumentContent } from "@/components/LegalDocumentContent";
import { PolicyLayout } from "@/components/PolicyLayout";
import { LEGAL_EFFECTIVE_DATE, companyInfo } from "@/lib/company";

export default function PrivacyPage() {
  return (
    <PolicyLayout
      title="개인정보처리방침"
      description={`${companyInfo.serviceName}는 이름 분석, 결과 저장, 상세 리포트와 주문 처리를 위해 필요한 범위의 개인정보를 처리합니다. 시행일: ${LEGAL_EFFECTIVE_DATE}`}
    >
      <PrivacyDocumentContent />
    </PolicyLayout>
  );
}