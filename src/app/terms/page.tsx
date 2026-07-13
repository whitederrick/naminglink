import { TermsDocumentContent } from "@/components/LegalDocumentContent";
import { PolicyLayout } from "@/components/PolicyLayout";
import { LEGAL_EFFECTIVE_DATE, companyInfo } from "@/lib/company";

export default function TermsPage() {
  return (
    <PolicyLayout
      title="이용약관"
      description={`${companyInfo.serviceName} 이용 조건과 서비스 범위를 안내합니다. 시행일: ${LEGAL_EFFECTIVE_DATE}`}
    >
      <TermsDocumentContent />
    </PolicyLayout>
  );
}