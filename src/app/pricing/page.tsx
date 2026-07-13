import { PricingDocumentContent } from "@/components/LegalDocumentContent";
import { PolicyLayout } from "@/components/PolicyLayout";
import { LEGAL_EFFECTIVE_DATE } from "@/lib/company";

export default function PricingPage() {
  return (
    <PolicyLayout
      title={"\uC694\uAE08\uC548\uB0B4"}
      description={`\uC11C\uBE44\uC2A4\uBCC4 \uBB34\uB8CC \uC81C\uACF5 \uBC94\uC704\uC640 \uBD80\uAC00 \uC0C1\uD488 \uAC00\uACA9 \uC548\uB0B4\uC785\uB2C8\uB2E4. \uAE30\uC900\uC77C: ${LEGAL_EFFECTIVE_DATE}`}
    >
      <PricingDocumentContent />
    </PolicyLayout>
  );
}