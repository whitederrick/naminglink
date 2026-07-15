import { z } from "zod";
import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import { supportedLocales, type Locale } from "@/lib/services";

export const legalDocumentKinds = [
  "terms",
  "privacy",
  "refund",
  "pricing",
] as const;

export type LegalDocumentKind = (typeof legalDocumentKinds)[number];

export type PolicySectionContent = {
  title: string;
  paragraphs: string[];
};

export type PolicyDocumentContent = {
  title: string;
  description: string;
  effectiveDate: string;
  sections: PolicySectionContent[];
};

export type FooterContent = {
  companyName: string;
  serviceName: string;
  subtitle: string;
  representative: string;
  businessNumber: string;
  mailOrderNumber: string;
  address: string;
  customerCenter: string;
  email: string;
  privacyOfficer: string;
  hostingProvider: string;
  copyrightYear: number;
};

const policySectionSchema = z.object({
  title: z.string().trim().min(1).max(160),
  paragraphs: z.array(z.string().trim().min(1).max(5000)).min(1).max(30),
});

export const policyDocumentSchema = z.object({
  title: z.string().trim().min(1).max(160),
  description: z.string().trim().min(1).max(2000),
  effectiveDate: z.string().date(),
  sections: z.array(policySectionSchema).min(1).max(40),
});

export const footerContentSchema = z.preprocess(
  (value) => {
    if (!value || typeof value !== "object" || Array.isArray(value)) return value;

    const content = value as Record<string, unknown>;

    const isLegacyContent = typeof content.companyName !== "string";

    const sourceServiceName = isLegacyContent
      ? "Naming-Link"
      : typeof content.serviceName === "string"
        ? content.serviceName
        : "Naming-Link";
    const combinedServiceName = sourceServiceName.match(/^(.+?)\((.+)\)$/);

    return {
      ...content,
      companyName: isLegacyContent
        ? "(주)Platforest"
        : content.companyName,
      serviceName: combinedServiceName?.[1]?.trim() ?? sourceServiceName,
      subtitle:
        content.subtitle ??
        combinedServiceName?.[2]?.trim() ??
        content.studioName ??
        "Global Naming Studio",
      customerCenter: content.customerCenter ?? companyInfo.customerCenter,
    };
  },
  z.object({
    companyName: z.string().trim().min(1).max(120),
    serviceName: z.string().trim().min(1).max(120),
    subtitle: z.string().trim().min(1).max(160),
    representative: z.string().trim().min(1).max(120),
    businessNumber: z.string().trim().min(1).max(120),
    mailOrderNumber: z.string().trim().min(1).max(120),
    address: z.string().trim().min(1).max(500),
    customerCenter: z.string().trim().min(1).max(120),
    email: z.string().trim().email().max(320),
    privacyOfficer: z.string().trim().min(1).max(120),
    hostingProvider: z.string().trim().min(1).max(200),
    copyrightYear: z.number().int().min(2020).max(2100),
  }),
);

export const managedContentRequestSchema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.enum(legalDocumentKinds),
    locale: z.enum(supportedLocales as [Locale, ...Locale[]]),
    content: policyDocumentSchema,
    action: z.enum(["save_draft", "publish"]),
  }),
  z.object({
    kind: z.literal("footer"),
    locale: z.literal("global"),
    content: footerContentSchema,
    action: z.enum(["save_draft", "publish"]),
  }),
]);

export function getContentKey(
  kind: LegalDocumentKind | "footer",
  locale: Locale | "global",
) {
  return kind === "footer" ? "footer.global" : `legal.${kind}.${locale}`;
}

export const fallbackFooterContent: FooterContent = {
  companyName: "(주)Platforest",
  serviceName: "Naming-Link",
  subtitle: "Global Naming Studio",
  representative: companyInfo.representative,
  businessNumber: companyInfo.businessNumber,
  mailOrderNumber: companyInfo.mailOrderNumber,
  address: companyInfo.address,
  customerCenter: companyInfo.customerCenter,
  email: companyInfo.email,
  privacyOfficer: companyInfo.privacyOfficer,
  hostingProvider: companyInfo.hostingProvider,
  copyrightYear: 2026,
};

const fallbackDocuments: Record<LegalDocumentKind, PolicyDocumentContent> = {
  terms: {
    title: "이용약관",
    description: `${companyInfo.serviceName} 이용 조건과 서비스 범위를 안내합니다.`,
    effectiveDate: LEGAL_EFFECTIVE_DATE,
    sections: [
      {
        title: "1. 서비스의 성격",
        paragraphs: [
          "Naming-Link는 한글 이름 한자 의미 매칭, 한국 이름과 글로벌 이름 간 변환, 문화권별 이름 해석을 제공하는 AI 기반 네이밍 스튜디오입니다.",
          "결과는 작명과 해석을 돕는 참고 자료이며, 가족관계등록, 여권, 비자, 상표, 법률 문서 등 공식 등록 가능성을 보증하지 않습니다.",
        ],
      },
      {
        title: "2. 회원과 비회원 이용",
        paragraphs: [
          "이름 분석과 광고 보상형 후보 열람은 비회원도 이용할 수 있습니다. 회원가입 또는 로그인은 굿즈 주문과 주문 이력 확인 등 계정이 필요한 기능에서만 요청할 수 있습니다.",
        ],
      },
      {
        title: "3. AI 결과와 검토 책임",
        paragraphs: [
          "AI 추천 결과에는 언어적, 문화적, 전통적 참고가 포함됩니다. 사용자는 최종 이름 선택 전 관련 기관, 전문가, 현지 사용자, 법률·상표 검토 등을 통해 적합성을 확인해야 합니다.",
        ],
      },
      {
        title: "4. 유료 서비스",
        paragraphs: [
          "상세 분석 리포트, 음성 발음, PDF 저장, 한글 이름 굿즈 등은 별도 가격 또는 조건으로 제공될 수 있습니다. 결제 전 상품 내용, 가격, 제공 방식, 환불 조건을 화면에 고지합니다.",
        ],
      },
      {
        title: "5. 광고 보상형 서비스",
        paragraphs: [
          "광고 시청을 통한 후보 잠금 해제는 광고 제공자의 정상적인 보상 확인이 완료된 경우에만 적용됩니다. 자동화된 광고 재생, 보상 조작, 비정상 반복 요청은 제한될 수 있습니다.",
        ],
      },
      {
        title: "6. 금지 행위",
        paragraphs: [
          "타인의 개인정보 무단 입력, 차별·혐오·사칭 목적의 이름 생성, 자동화된 과다 요청, 서비스 장애 유발, 결과물의 허위 공식 인증 표시는 금지됩니다.",
        ],
      },
      {
        title: "7. 책임 제한",
        paragraphs: [
          "회사는 고의 또는 중대한 과실이 없는 한 AI 추천 결과의 사용으로 발생한 간접 손해, 기대 이익 상실, 공식 등록 거절, 제3자 분쟁에 대해 책임을 지지 않습니다.",
        ],
      },
      {
        title: "8. 문의",
        paragraphs: [`서비스 문의: ${companyInfo.email}`],
      },
    ],
  },
  privacy: {
    title: "개인정보처리방침",
    description: `${companyInfo.serviceName}의 개인정보 처리 기준을 안내합니다.`,
    effectiveDate: LEGAL_EFFECTIVE_DATE,
    sections: [
      {
        title: "1. 처리하는 개인정보 항목",
        paragraphs: [
          "비회원 이름 서비스 이용 시 이름, 생년월일, 생시, 국가, 언어, 사용 목적과 발음 힌트는 분석 결과 생성 과정에서 일시적으로 처리되지만 입력 내용과 생성 결과를 서비스 데이터베이스에 저장하지 않습니다.",
          "굿즈 주문 기능을 이용할 때에만 주문자명, 이메일, 연락처, 배송지, 결제 상태와 주문 처리 정보가 추가로 처리될 수 있습니다.",
          "서비스 안정성과 남용 방지를 위해 일 단위로 변경되는 비식별 방문자 해시, 요청 시각, 서비스 종류, 무료 사용 횟수, AI 토큰·응답시간·처리 상태와 광고 노출·보상 이벤트를 최소 운영 로그로 처리할 수 있습니다.",
        ],
      },
      {
        title: "2. 개인정보 처리 목적",
        paragraphs: [
          "입력값 기반 이름 추천, 발음 분석, 국가별 언어와 문화권 분석, 무료 사용량 제한, 광고 보상 확인, 고객 문의 응대, 결제와 배송 처리, 부정 이용 방지를 위해 개인정보를 처리합니다.",
        ],
      },
      {
        title: "3. 보관 및 파기",
        paragraphs: [
          "분석 입력과 결과는 로그인한 회원이 결과 저장을 명시적으로 선택한 경우에만 계정에 보관하며, 회원이 삭제하거나 보관 목적이 종료되면 파기합니다. 비회원 및 저장을 선택하지 않은 회원의 입력과 결과는 저장하지 않습니다. 배송 상세정보는 주문 처리와 반품·분쟁 대응에 필요한 기간이 지나면 파기하거나 비식별화하며, 결제·주문 거래기록은 관계 법령의 법정 보관 기간에 따라 별도로 보관합니다.",
        ],
      },
      {
        title: "4. 제3자 제공 및 처리 위탁",
        paragraphs: [
          "서비스 운영을 위해 Supabase, Vercel, OpenAI API, 광고 네트워크, 결제 대행사, 배송·제작 제휴사에 필요한 정보가 처리 또는 위탁될 수 있습니다. 실제 사업자가 확정되면 구체 명칭과 처리 항목을 반영합니다.",
        ],
      },
      {
        title: "5. 국외 이전 가능성",
        paragraphs: [
          "클라우드 호스팅, 인증, AI API, 광고, 이메일 발송 등 일부 처리 과정에서 개인정보가 국외 서버에서 처리될 수 있습니다. 이전 국가, 수탁자, 목적과 보관 기간은 서비스 제공자 확정 후 상세 고지합니다.",
        ],
      },
      {
        title: "6. 이용자의 권리",
        paragraphs: [
          "이용자는 개인정보 열람, 정정, 삭제, 처리정지, 동의 철회를 요청할 수 있습니다. 요청은 고객센터 이메일로 접수하며, 본인 확인 후 처리합니다.",
        ],
      },
      {
        title: "7. 개인정보 보호책임자",
        paragraphs: [
          `책임자: ${companyInfo.privacyOfficer}`,
          `이메일: ${companyInfo.email}`,
        ],
      },
    ],
  },
  refund: {
    title: "환불 및 취소 정책",
    description: "디지털 상품과 맞춤 제작 굿즈의 취소 및 환불 기준을 안내합니다.",
    effectiveDate: LEGAL_EFFECTIVE_DATE,
    sections: [
      {
        title: "1. 공통 원칙",
        paragraphs: [
          "결제 기능이 활성화되면 각 상품의 제공 방식, 제작 착수 시점, 다운로드 여부에 따라 환불 가능 범위가 달라질 수 있습니다.",
        ],
      },
      {
        title: "2. 디지털 콘텐츠",
        paragraphs: [
          "결제 후 PDF 생성 또는 다운로드가 시작되기 전에는 취소가 가능합니다. 생성이 완료된 디지털 콘텐츠는 내용 오류나 시스템 장애가 확인되는 경우 재발급 또는 환불을 검토합니다.",
        ],
      },
      {
        title: "3. 맞춤 제작 굿즈",
        paragraphs: [
          "개인 맞춤 제작물은 제작 착수 전까지 취소가 가능합니다. 제작 착수 후에는 단순 변심 환불이 제한될 수 있으며, 오탈자, 파손, 오제작 또는 배송 문제는 확인 후 교환, 재제작, 환불 중 적절한 방식으로 처리합니다.",
        ],
      },
      {
        title: "4. 광고형 잠금 해제",
        paragraphs: [
          "광고 시청형 혜택은 결제 상품이 아닙니다. 광고 네트워크 오류로 보상이 지급되지 않은 경우 서비스 내 재시도 또는 고객센터 문의로 처리합니다.",
        ],
      },
      {
        title: "5. 문의",
        paragraphs: [`환불 문의: ${companyInfo.email}`],
      },
    ],
  },
  pricing: {
    title: "요금안내",
    description: "무료 서비스 범위와 부가 상품의 예정 가격을 안내합니다.",
    effectiveDate: LEGAL_EFFECTIVE_DATE,
    sections: [
      {
        title: "기본 분석",
        paragraphs: [
          "이름 분석은 비회원에게 제공되며 일일 사용량 제한이 적용될 수 있습니다. 추가 후보는 광고 시청 보상으로 순차적으로 열 수 있습니다.",
        ],
      },
      {
        title: "광고 보상형 이용",
        paragraphs: [
          "광고 시청 후 후보 잠금 해제는 별도 결제 없이 제공되는 광고형 혜택입니다. 광고 재고, 국가, 기기 또는 광고 제공자의 정책에 따라 이용 가능 여부가 달라질 수 있습니다.",
        ],
      },
      {
        title: "부가 서비스 예정가",
        paragraphs: [
          "프리미엄 작명 리포트 PDF: 9,900원",
          "캘리그라피 이미지: 6,900원",
          "한글 이름 굿즈: 상품별 별도 고지",
        ],
      },
      {
        title: "정식 결제 전 안내",
        paragraphs: [
          "PG 심사, 통신판매업 신고, 제작 제휴 조건이 확정되면 실제 결제 금액, 배송비, 제작 기간, 환불 조건을 상품 화면에 다시 고지합니다.",
        ],
      },
    ],
  },
};

export function getFallbackPolicyDocument(kind: LegalDocumentKind) {
  return fallbackDocuments[kind];
}

export function parseManagedContent(
  kind: LegalDocumentKind | "footer",
  value: unknown,
) {
  return kind === "footer"
    ? footerContentSchema.safeParse(value)
    : policyDocumentSchema.safeParse(value);
}
