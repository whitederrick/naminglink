import { PolicySection } from "@/components/PolicyLayout";
import { companyInfo } from "@/lib/company";

export function TermsDocumentContent() {
  return (
    <>
      <PolicySection title="1. 서비스의 성격">
        <p>
          Naming-Link는 한글 이름 한자 의미 매칭, 한국 이름과 글로벌 이름 간
          변환, 문화권별 이름 해석을 제공하는 AI 기반 네이밍 스튜디오입니다.
        </p>
        <p>
          결과는 작명과 해석을 돕는 참고 자료이며, 가족관계등록, 여권, 비자,
          상표, 법률 문서 등 공식 등록 가능성을 보증하지 않습니다.
        </p>
      </PolicySection>
      <PolicySection title="2. 회원과 비회원 이용">
        <p>
          기본 분석은 비회원도 이용할 수 있습니다. 프리미엄 PDF, 주문 이력,
          재다운로드, 굿즈 제작 상태 확인 등은 로그인 계정 기준으로 제공될 수
          있습니다.
        </p>
      </PolicySection>
      <PolicySection title="3. AI 결과와 검토 책임">
        <p>
          AI 추천 결과에는 언어적, 문화적, 전통적 참고가 포함됩니다. 사용자는
          최종 이름 선택 전 관련 기관, 전문가, 현지 사용자, 법률·상표 검토 등을
          통해 적합성을 확인해야 합니다.
        </p>
      </PolicySection>
      <PolicySection title="4. 유료 서비스">
        <p>
          상세 분석 리포트, 음성 발음, PDF 저장, 한글 이름 굿즈 등은 별도 가격
          또는 조건으로 제공될 수 있습니다. 결제 전 상품 내용, 가격, 제공 방식,
          환불 조건을 화면에 고지합니다.
        </p>
      </PolicySection>
      <PolicySection title="5. 금지 행위">
        <p>
          타인의 개인정보 무단 입력, 차별·혐오·사칭 목적의 이름 생성, 자동화된
          과다 요청, 서비스 장애 유발, 결과물의 허위 공식 인증 표시는 금지됩니다.
        </p>
      </PolicySection>
      <PolicySection title="6. 책임 제한">
        <p>
          회사는 고의 또는 중대한 과실이 없는 한 AI 추천 결과의 사용으로 발생한
          간접 손해, 기대 이익 상실, 공식 등록 거절, 제3자 분쟁에 대해 책임을
          지지 않습니다.
        </p>
      </PolicySection>
      <PolicySection title="7. 문의">
        <p>서비스 문의: {companyInfo.email}</p>
      </PolicySection>
    </>
  );
}

export function PrivacyDocumentContent() {
  return (
    <>
      <PolicySection title="1. 처리하는 개인정보 항목">
        <p>
          회원 기능 이용 시 이메일, 인증 식별자, 로그인 이력이 처리될 수
          있습니다.
        </p>
        <p>
          이름 서비스 이용 시 이름, 생년월일, 생시, 국가, 언어, 사용 목적,
          발음 힌트, 입력 프롬프트와 생성 결과가 처리될 수 있습니다.
        </p>
        <p>
          상세 분석 리포트와 굿즈 주문이 활성화되면 주문자명, 이메일, 배송지,
          결제 상태, 주문 처리 정보가 추가로 처리될 수 있습니다.
        </p>
        <p>
          서비스 안정성과 남용 방지를 위해 접속 IP, 브라우저 정보, 요청 시각,
          무료 사용 횟수, 광고 노출·보상 이벤트가 로그로 처리될 수 있습니다.
        </p>
      </PolicySection>
      <PolicySection title="2. 개인정보 처리 목적">
        <p>
          입력값 기반 이름 추천, 발음 분석, 국가별 언어와 문화권 분석, 결과
          저장, 무료 사용량 제한, 고객 문의 응대, 결제와 배송 처리, 부정 이용
          방지를 위해 개인정보를 처리합니다.
        </p>
      </PolicySection>
      <PolicySection title="3. 보관 기간">
        <p>
          회원 계정 정보는 탈퇴 시까지 보관합니다. 분석 이력은 사용자가 삭제를
          요청하거나 서비스 운영 목적이 종료될 때까지 보관할 수 있습니다.
          결제·주문 관련 정보는 법정 보관 기간에 따라 보관합니다.
        </p>
      </PolicySection>
      <PolicySection title="4. 제3자 제공 및 처리 위탁">
        <p>
          서비스 운영을 위해 Supabase, Vercel, OpenAI API, 결제 대행사,
          광고 네트워크, 배송·제작 제휴사에 필요한 정보가 처리 또는 위탁될 수
          있습니다. 실제 사업자가 확정되면 구체 명칭을 반영합니다.
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
    </>
  );
}