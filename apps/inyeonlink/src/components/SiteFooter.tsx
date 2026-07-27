import { LegalLinks } from "@/components/LegalLinks";
import { getCompanyInfo } from "@/lib/company-server";
import { getDictionary, isRtlLocale, type Locale } from "@/lib/i18n";

// naminglink의 SiteFooter와 **같은 구조**다. 가운데 정렬 · 정책 링크 한 줄 · 사업자 정보
// 두 줄(모바일은 잘게 접음) · 저작권 한 줄. 두 서비스를 오가는 사용자가 같은 자리에서 같은
// 정보를 찾을 수 있어야 한다.
//
// 값도 같은 곳에서 온다 — naminglink 관리자 화면이 관리하는 `site_contents`다. naminglink는
// 관리자 화면에서 고치려고 클라이언트에서 API로 받아오고, 이 앱은 고칠 일이 없으므로 서버
// 컴포넌트에서 바로 읽는다. 링크 목록만 짧다(파는 것이 하나뿐이라 요금안내가 따로 없다).

export async function SiteFooter({
  locale,
  tone = "dark",
  className = "",
}: {
  locale: Locale;
  /** naminglink와 같은 뜻이다. "light" = 밝은 글씨(어두운 배경 위), "dark" = 어두운 글씨. */
  tone?: "light" | "dark";
  className?: string;
}) {
  const dictionary = getDictionary(locale);
  const copy = dictionary.footer;
  const companyInfo = await getCompanyInfo();

  const isOnDark = tone === "light";
  const wrapperClass = isOnDark
    ? "border-white/15 text-white/72"
    : "border-line text-muted";
  const linkClass = isOnDark
    ? "text-white/86 hover:text-white"
    : "text-foreground hover:text-brand-plum";
  const valueClass = isOnDark
    ? "font-semibold text-white"
    : "font-semibold text-foreground";

  // 사용자가 보고 있는 언어를 약관 페이지에도 그대로 넘긴다(IP·브라우저 언어 재추정 방지).
  const langQuery = locale === "ko" ? "" : `?lang=${locale}`;
  const footerLinks = [
    { kind: "terms" as const, href: `/terms${langQuery}`, label: copy.terms },
    { kind: "privacy" as const, href: `/privacy${langQuery}`, label: copy.privacy },
    { kind: "refund" as const, href: `/refund-policy${langQuery}`, label: copy.refund },
    { kind: "pricing" as const, href: `/pricing${langQuery}`, label: copy.pricing },
  ];

  const firstLine = [
    { label: copy.legalEntity, value: companyInfo.legalEntity },
    { label: copy.representative, value: companyInfo.representative },
    { label: copy.businessNumber, value: companyInfo.businessNumber },
    { label: copy.address, value: companyInfo.address },
  ];
  const secondLine = [
    { label: copy.customerCenter, value: companyInfo.customerCenter },
    { label: copy.email, value: companyInfo.email },
    { label: copy.privacyOfficer, value: companyInfo.privacyOfficer },
    { label: copy.mailOrderNumber, value: companyInfo.mailOrderNumber },
    { label: copy.hostingProvider, value: companyInfo.hostingProvider },
  ];
  // naminglink와 같은 묶음. 390px 폭에서도 각 줄이 넘치지 않도록 나눈 것이다.
  const mobileRows = [
    [firstLine[0], firstLine[1]],
    [firstLine[2]],
    [secondLine[3]],
    [firstLine[3]],
    [secondLine[0], secondLine[1]],
    [secondLine[2]],
    [secondLine[4]],
  ];

  const textDirection = isRtlLocale(locale) ? "rtl" : "ltr";

  return (
    <footer
      className={`relative z-10 border-t px-5 py-3 text-center text-xs leading-6 sm:px-8 ${wrapperClass} ${className}`}
      dir="ltr"
    >
      <div className="mx-auto max-w-7xl">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 font-semibold">
          <LegalLinks
            locale={locale}
            items={footerLinks}
            linkClassName={linkClass}
            textDirection={textDirection}
          />
        </nav>

        <div className="mt-1 grid gap-0.5 text-[11px] leading-5 sm:hidden">
          {mobileRows.map((row, rowIndex) => (
            <div
              key={`mobile-footer-row-${rowIndex}`}
              className="flex flex-wrap items-center justify-center gap-x-3 gap-y-0"
            >
              {row.map((item) => (
                // 주소처럼 긴 값은 nowrap이면 390px 뷰포트를 넘어 잘리므로 줄바꿈을 허용한다.
                <span
                  key={item.label}
                  className={
                    item.value.length > 30
                      ? "max-w-full [overflow-wrap:break-word]"
                      : "whitespace-nowrap"
                  }
                  dir={textDirection}
                >
                  {item.label} <strong className={valueClass}>{item.value}</strong>
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-1 hidden gap-0.5 text-[11px] leading-5 sm:grid">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-0 lg:flex-nowrap">
            {firstLine.map((item) => (
              <span
                key={item.label}
                className="whitespace-nowrap"
                dir={textDirection}
              >
                {item.label} <strong className={valueClass}>{item.value}</strong>
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-0 lg:flex-nowrap">
            {secondLine.map((item) => (
              <span
                key={item.label}
                className="whitespace-nowrap"
                dir={textDirection}
              >
                {item.label} <strong className={valueClass}>{item.value}</strong>
              </span>
            ))}
          </div>
        </div>

        <p className="font-medium" dir={textDirection}>
          © {new Date().getFullYear()} {companyInfo.serviceName} ·{" "}
          {copy.providedBy} {companyInfo.legalEntity}
        </p>
      </div>
    </footer>
  );
}
