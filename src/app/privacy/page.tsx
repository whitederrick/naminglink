import { LEGAL_EFFECTIVE_DATE, companyInfo } from "@/lib/company";
import { PolicyLayout, PolicySection } from "@/components/PolicyLayout";

export default function PrivacyPage() {
  return (
    <PolicyLayout
      title="개인정보처리방침"
      description={`${companyInfo.serviceName}는 이름 분석, 작명 결과 저장, 프리미엄 리포트와 주문 처리를 위해 필요한 범위의 개인정보를 처리합니다. 시행일: ${LEGAL_EFFECTIVE_DATE}`}
    >
      <PolicySection title="1. 처리하는 개인정보 항목">
        <p>
          회원 기능 이용 시 이메일, 인증 식별자, 로그인 이력이 처리될 수
          있습니다.
        </p>
        <p>
          작명 서비스 이용 시 이름, 성별/이미지, 생년월일, 생시, 국가, 언어,
          직업/분야, 사용 목적, 선호 톤, 피하고 싶은 의미, 입력 프롬프트와
          생성 결과가 처리됩니다.
        </p>
        <p>
          프리미엄 PDF, 캘리그라피, 도장 주문이 활성화되면 주문자명, 이메일,
          배송지, 결제 상태, 주문 처리 정보가 추가로 처리될 수 있습니다.
        </p>
        <p>
          서비스 안정성과 남용 방지를 위해 접속 IP, 브라우저 정보, 요청 시각,
          무료 사용 횟수, 광고 노출/보상 이벤트가 로그로 처리될 수 있습니다.
        </p>
      </PolicySection>

      <PolicySection title="2. 개인정보 처리 목적">
        <p>
          입력값 기반 이름 추천, 한자 의미 매칭, 국가별 언어와 문화권 분석,
          작명 이력 저장, 무료 사용량 제한, 고객 문의 응대, 결제와 배송 처리,
          부정 이용 방지를 위해 개인정보를 처리합니다.
        </p>
      </PolicySection>

      <PolicySection title="3. 보관 기간">
        <p>
          회원 계정 정보는 탈퇴 시까지 보관합니다. 작명 이력은 사용자가 삭제를
          요청하거나 서비스 운영 목적이 종료될 때까지 보관할 수 있습니다.
          결제·주문 관련 정보는 전자상거래 및 회계 증빙 목적의 법정 보관 기간에
          따라 보관합니다.
        </p>
      </PolicySection>

      <PolicySection title="4. 제3자 제공 및 처리 위탁">
        <p>
          서비스 운영을 위해 Supabase, Vercel, OpenAI API, 결제 대행사,
          광고 네트워크, 배송·제작 제휴사에 필요한 정보가 처리 또는 위탁될 수
          있습니다. 실제 결제/광고/배송사가 확정되면 본 방침에 구체 명칭을
          반영합니다.
        </p>
      </PolicySection>

      <PolicySection title="5. 국외 이전 가능성">
        <p>
          클라우드 호스팅, 인증, AI API, 이메일 발송 등 일부 처리 과정에서
          개인정보가 국외 서버에서 처리될 수 있습니다. 이전 국가, 수탁자, 보관
          기간은 서비스 제공자 확정 후 상세 고지합니다.
        </p>
      </PolicySection>

      <PolicySection title="6. 이용자의 권리">
        <p>
          이용자는 개인정보 열람, 정정, 삭제, 처리정지, 동의 철회를 요청할 수
          있습니다. 요청은 고객센터 이메일로 접수하며, 본인 확인 후 처리합니다.
        </p>
      </PolicySection>

      <PolicySection title="7. 개인정보 보호책임자">
        <p>책임자: {companyInfo.privacyOfficer}</p>
        <p>이메일: {companyInfo.email}</p>
      </PolicySection>
    </PolicyLayout>
  );
}
