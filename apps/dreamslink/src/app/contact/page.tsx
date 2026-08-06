import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { getCompanyInfo } from "@/lib/company-server";
import { isLocale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 문의하기 — 어디로 연락하면 되는가.
 *
 * **애드센스가 요구하는 페이지다.** 심사 안내가 '소개'와 '문의하기'를 투명성 항목으로 명시한다.
 * 전자상거래법이 요구하는 표시 항목과도 겹친다.
 *
 * **값을 여기에 적지 않는다.** `getCompanyInfo()`가 naminglink 관리자 화면이 관리하는 같은 행
 * (`footer.global`)에서 읽는다 — 같은 사업자이므로 원본은 하나여야 하고, 손으로 적으면 번호가
 * 나올 때마다 두 곳을 맞춰야 한다(실제로 못 맞춰 인연링크 푸터만 "준비 중"이던 적이 있다).
 */

type PageProps = { searchParams?: Promise<{ lang?: string }> };

const TITLE_KO = "문의하기";
const TITLE_EN = "Contact us";
const SUMMARY_KO = "이용 문의·환불·개인정보 요청·오류 신고를 받는 창구와 사업자 정보입니다.";
const SUMMARY_EN =
  "How to reach us for questions, refunds, privacy requests and error reports, with our company details.";

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);
  const korean = locale === "ko";

  return buildPageMetadata({
    path: "/contact",
    locale,
    requested,
    title: korean ? TITLE_KO : TITLE_EN,
    description: korean ? SUMMARY_KO : SUMMARY_EN,
  });
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const korean = locale === "ko";
  const company = await getCompanyInfo();

  const rows: Array<{ label: string; value: string }> = korean
    ? [
        { label: "상호", value: company.legalEntity },
        { label: "대표자", value: company.representative },
        { label: "사업자등록번호", value: company.businessNumber },
        { label: "통신판매업 신고번호", value: company.mailOrderNumber },
        { label: "주소", value: company.address },
        { label: "고객센터", value: company.customerCenter },
        { label: "이메일", value: company.email },
        { label: "개인정보 보호책임자", value: company.privacyOfficer },
        { label: "호스팅 제공자", value: company.hostingProvider },
      ]
    : [
        { label: "Legal entity", value: company.legalEntity },
        { label: "Representative", value: company.representative },
        { label: "Business registration no.", value: company.businessNumber },
        { label: "Mail-order sales no.", value: company.mailOrderNumber },
        { label: "Address", value: company.address },
        { label: "Customer service", value: company.customerCenter },
        { label: "Email", value: company.email },
        { label: "Privacy officer", value: company.privacyOfficer },
        { label: "Hosting provider", value: company.hostingProvider },
      ];

  return (
    <GuideShell
      locale={locale}
      eyebrow={korean ? "문의" : "Contact"}
      title={korean ? TITLE_KO : TITLE_EN}
      description={korean ? SUMMARY_KO : SUMMARY_EN}
      backHref={localePath("/", locale)}
      backLabel={korean ? "처음으로" : "Home"}
    >
      {korean ? (
        <>
          <GuideSection title="이메일로 연락하기">
            <p>
              문의는 <b>{company.email}</b>로 보내 주십시오. 영업일 2일 안에 답변드립니다.
              결제·환불 문의는 <b>주문번호나 결제한 이메일</b>을 함께 적어 주시면 확인이 빠릅니다.
            </p>
            <p>전화 문의는 {company.customerCenter}로 받습니다.</p>
          </GuideSection>

          <GuideSection title="무엇을 이 창구로 보내면 되나">
            <ul>
              <li>
                <b>결제·환불</b> — 문서가 만들어지지 않았거나 결제 금액이 주문과 다른 경우에는
                전액 환불해 드립니다. 조건은{" "}
                <a href={localePath("/refund-policy", locale)}>환불 정책</a>에 있습니다.
              </li>
              <li>
                <b>개인정보</b> — 열람·정정·삭제 요청을 받습니다. 처리 방침은{" "}
                <a href={localePath("/privacy", locale)}>개인정보 처리방침</a>에 있습니다.
              </li>
              <li>
                <b>계산 오류 신고</b> — 사주 원국이나 점수가 이상해 보이면 알려 주십시오. 어떤
                생년월일시를 넣었을 때인지 함께 적어 주시면 같은 값으로 다시 계산해 볼 수 있습니다.
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="사업자 정보">
            {/* 안내 문서와 같은 목록 꼴로 낸다. */}
            <ul>
              {rows.map((row) => (
                <li key={row.label}>
                  <b>{row.label}</b> — {row.value}
                </li>
              ))}
            </ul>
          </GuideSection>

          <GuideNote>
            생년월일시를 문의 메일에 적으실 필요는 없습니다. 저희는 입력을 저장하지 않으므로 다시
            찾아볼 수 없고, 확인이 필요한 것은 주문번호로 충분합니다. 계산 오류 신고처럼 값이
            꼭 필요한 경우에만 적어 주십시오.
          </GuideNote>
        </>
      ) : (
        <>
          <GuideSection title="Email us">
            <p>
              Write to <b>{company.email}</b>. We reply within two business days. For anything
              about an order, please include your <b>order number or the email you paid with</b>.
            </p>
            <p>Phone: {company.customerCenter} (Korean business hours).</p>
          </GuideSection>

          <GuideSection title="What to send here">
            <ul>
              <li>
                <b>Payments and refunds</b> — if a report was never produced, or the amount charged
                differs from your order, we refund in full. See the{" "}
                <a href={localePath("/refund-policy", locale)}>refund policy</a>.
              </li>
              <li>
                <b>Privacy</b> — requests to access, correct or delete your data. See the{" "}
                <a href={localePath("/privacy", locale)}>privacy policy</a>.
              </li>
              <li>
                <b>Calculation errors</b> — if a chart or a score looks wrong, tell us which birth
                details produced it so we can reproduce the reading.
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="Company details">
            <ul>
              {rows.map((row) => (
                <li key={row.label}>
                  <b>{row.label}</b> — {row.value}
                </li>
              ))}
            </ul>
          </GuideSection>

          <GuideNote>
            You do not need to send birth details. We never store what you enter, so we cannot look
            a reading up again — an order number is enough, except when you are reporting a
            calculation error.
          </GuideNote>
        </>
      )}
    </GuideShell>
  );
}
