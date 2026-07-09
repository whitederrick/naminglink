import { LEGAL_EFFECTIVE_DATE, companyInfo } from "@/lib/company";
import { PolicyLayout, PolicySection } from "@/components/PolicyLayout";

export default function TermsPage() {
  return (
    <PolicyLayout
      title="이용약관"
      description={`${companyInfo.serviceName} 이용 조건과 서비스 범위를 안내합니다. 시행일: ${LEGAL_EFFECTIVE_DATE}`}
    >
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
          재다운로드, 도장 제작 상태 확인 등은 로그인 계정 기준으로 제공될 수
          있습니다.
        </p>
      </PolicySection>

      <PolicySection title="3. AI 결과와 검토 책임">
        <p>
          AI 추천 결과에는 언어적, 문화적, 전통적 참고가 포함됩니다. 사용자는
          최종 이름 선택 전 가족관계등록 기관, 전문가, 현지 사용자, 법률·상표
          검토 등을 통해 적합성을 확인해야 합니다.
        </p>
      </PolicySection>

      <PolicySection title="4. 유료 서비스">
        <p>
          프리미엄 PDF, 캘리그라피 이미지, 도장 신청, 광고 시청 후 잠금 해제
          등은 별도 가격 또는 조건으로 제공될 수 있습니다. 결제 전 상품 내용,
          가격, 제공 방식, 환불 조건을 화면에 고지합니다.
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
    </PolicyLayout>
  );
}
