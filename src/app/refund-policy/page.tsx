import { RefundDocumentContent } from "@/components/LegalDocumentContent";
import { PolicyLayout } from "@/components/PolicyLayout";
import { LEGAL_EFFECTIVE_DATE } from "@/lib/company";

export default function RefundPolicyPage() {
  return (
    <PolicyLayout
      title={"\uD658\uBD88 \uBC0F \uCDE8\uC18C \uC815\uCC45"}
      description={`\uD504\uB9AC\uBBF8\uC5C4 \uB9AC\uD3EC\uD2B8, \uCE98\uB9AC\uADF8\uB77C\uD53C, \uB3C4\uC7A5 \uC8FC\uBB38\uC758 \uCDE8\uC18C \uAE30\uC900\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4. \uC2DC\uD589\uC77C: ${LEGAL_EFFECTIVE_DATE}`}
    >
      <RefundDocumentContent />
    </PolicyLayout>
  );
}