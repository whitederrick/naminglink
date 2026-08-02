import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";
import { getPublishedFooterContent } from "@/lib/site-content-server";

/**
 * 문의하기 — 어디로 연락하면 되는가.
 *
 * **애드센스가 요구하는 페이지다.** 심사 안내가 '소개'와 '문의하기'를 투명성 항목으로 명시한다.
 * 전자상거래법이 요구하는 표시 항목(상호·대표자·사업자등록번호·주소·연락처)과도 겹친다.
 *
 * **값을 여기에 적지 않는다.** 전부 `getPublishedFooterContent()`에서 읽는다 — 푸터가 보는 것과
 * 같은 자료다. 손으로 적으면 관리자 화면에서 주소나 연락처를 바꿨을 때 이 페이지만 옛 값으로
 * 남고, 표시가와 실제가 어긋나는 것은 법이 금하는 것이다(안내 문서가 금액을 `product_settings`
 * 에서 읽는 것과 같은 이유다).
 *
 * 조회에 실패해도 페이지는 뜬다 — 그 자리에 폴백 값이 들어간다.
 */

type PageProps = { searchParams?: Promise<{ lang?: string }> };

const TITLE_KO = "문의하기";
const TITLE_EN = "Contact us";
const SUMMARY_KO =
  "이용 문의·환불·개인정보 요청·오류 신고를 받는 창구와 사업자 정보입니다.";
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
  const footer = await getPublishedFooterContent();

  const rows: Array<{ label: string; value: string }> = korean
    ? [
        { label: "상호", value: footer.companyName },
        { label: "대표자", value: footer.representative },
        { label: "사업자등록번호", value: footer.businessNumber },
        { label: "통신판매업 신고번호", value: footer.mailOrderNumber },
        { label: "주소", value: footer.address },
        { label: "고객센터", value: footer.customerCenter },
        { label: "이메일", value: footer.email },
        { label: "개인정보 보호책임자", value: footer.privacyOfficer },
        { label: "호스팅 제공자", value: footer.hostingProvider },
      ]
    : [
        { label: "Legal entity", value: footer.companyName },
        { label: "Representative", value: footer.representative },
        { label: "Business registration no.", value: footer.businessNumber },
        { label: "Mail-order sales no.", value: footer.mailOrderNumber },
        { label: "Address", value: footer.address },
        { label: "Customer service", value: footer.customerCenter },
        { label: "Email", value: footer.email },
        { label: "Privacy officer", value: footer.privacyOfficer },
        { label: "Hosting provider", value: footer.hostingProvider },
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
              문의는 <b>{footer.email}</b>로 보내 주십시오. 평일 기준으로 영업일 2일 안에
              답변드립니다. 결제·환불처럼 주문과 관련된 문의는 <b>주문번호나 결제한 이메일</b>을
              함께 적어 주시면 확인이 빠릅니다.
            </p>
            <p>
              전화 문의는 {footer.customerCenter}로 받습니다.
            </p>
          </GuideSection>

          <GuideSection title="무엇을 이 창구로 보내면 되나">
            <ul>
              <li>
                <b>결제·환불</b> — 문서가 만들어지지 않았거나 결제 금액이 주문과 다른 경우에는
                전액 환불해 드립니다. 자세한 조건은{" "}
                <a href={localePath("/refund-policy", locale)}>환불 정책</a>에 있습니다.
              </li>
              <li>
                <b>개인정보</b> — 열람·정정·삭제 요청을 받습니다. 처리 방침은{" "}
                <a href={localePath("/privacy", locale)}>개인정보 처리방침</a>에 있습니다.
              </li>
              <li>
                <b>오류 신고</b> — 한자 뜻이나 독음, 계산 결과가 이상해 보이면 알려 주십시오.
                어느 화면에서 어떤 값을 넣었을 때인지 함께 적어 주시면 도움이 됩니다.
              </li>
              <li>
                <b>제휴·기타</b> — 같은 주소로 보내 주십시오.
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="사업자 정보">
            {/* 안내 문서와 같은 목록 꼴로 낸다. `dl`은 이 화면의 서식에 없어 여백이 어색해진다. */}
            <ul>
              {rows.map((row) => (
                <li key={row.label}>
                  <b>{row.label}</b> — {row.value}
                </li>
              ))}
            </ul>
          </GuideSection>

          <GuideNote>
            이름이나 생년월일은 문의 메일에 적지 않으셔도 됩니다. 무료 결과는 서버에 저장되지
            않으므로 저희가 다시 찾아볼 수 없고, 확인이 필요한 것은 주문번호로 충분합니다.
          </GuideNote>
        </>
      ) : (
        <>
          <GuideSection title="Email us">
            <p>
              Write to <b>{footer.email}</b>. We reply within two business days. For anything about
              an order — payment, refund, a file you did not receive — please include your{" "}
              <b>order number or the email you paid with</b>.
            </p>
            <p>Phone enquiries: {footer.customerCenter} (Korean business hours).</p>
          </GuideSection>

          <GuideSection title="What to send here">
            <ul>
              <li>
                <b>Payments and refunds</b> — if a document was never produced, or the amount
                charged differs from your order, we refund in full. See the{" "}
                <a href={localePath("/refund-policy", locale)}>refund policy</a>.
              </li>
              <li>
                <b>Privacy</b> — requests to access, correct or delete your data. See the{" "}
                <a href={localePath("/privacy", locale)}>privacy policy</a>.
              </li>
              <li>
                <b>Corrections</b> — if a hanja meaning, reading or calculation looks wrong, tell
                us. Mentioning which screen and what you entered helps a great deal.
              </li>
              <li>
                <b>Anything else</b> — partnerships and press go to the same address.
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="Company details">
            {/* 안내 문서와 같은 목록 꼴로 낸다. `dl`은 이 화면의 서식에 없어 여백이 어색해진다. */}
            <ul>
              {rows.map((row) => (
                <li key={row.label}>
                  <b>{row.label}</b> — {row.value}
                </li>
              ))}
            </ul>
          </GuideSection>

          <GuideNote>
            You do not need to include a name or birth date in your message. Free results are never
            stored on our servers, so we cannot look them up again — an order number is enough.
          </GuideNote>
        </>
      )}
    </GuideShell>
  );
}
