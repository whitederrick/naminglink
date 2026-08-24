import { guideLinkLabel } from "@/components/GuideLink";
import { LegalLinks } from "@/components/LegalLinks";
import { guideHubHref } from "@/lib/guide-back";
import { getCompanyInfo } from "@/lib/company-server";
import { localizeCompanyValue } from "@naminglink/core/company-display";
import { getDictionary, isRtlLocale, type Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";

// naminglink의 SiteFooter와 **같은 구조**다. 가운데 정렬 · 정책 링크 한 줄 · 사업자 정보
// 두 줄(모바일은 잘게 접음) · 저작권 한 줄. 두 서비스를 오가는 사용자가 같은 자리에서 같은
// 정보를 찾을 수 있어야 한다.
//
// 값도 같은 곳에서 온다 — naminglink 관리자 화면이 관리하는 `site_contents`다. naminglink는
// 관리자 화면에서 고치려고 클라이언트에서 API로 받아오고, 이 앱은 고칠 일이 없으므로 서버
// 컴포넌트에서 바로 읽는다. 링크 목록만 짧다(파는 것이 하나뿐이라 요금안내가 따로 없다).


/**
 * 푸터 값 한 칸을 화면에 쓸 문자열로 다듬는다.
 *
 * DB(`site_contents`)에 들어 있는 값에는 **항목명이 그대로 붙어 있다** — `"통신판매업 신고 준비 중"`,
 * `"사업자등록번호 준비 중"`. 라벨과 함께 그리면 "통신판매업 통신판매업 신고 준비 중"이 된다.
 * 그래서 값이 라벨로 시작하면 그 부분을 떼고, 한국어가 아니면 로케일 표기로 바꾼다.
 * (naminglink는 한국어일 때 걷어내지 않아 같은 겹침이 남아 있다 — 그쪽도 손봐야 한다.)
 */
/**
 * 푸터 값 한 칸을 화면에 쓸 문자열로. **규칙은 core 에 한 벌 있다** —
 * 「준비 중」류의 로케일 문구와 인명·상호·주소의 로마자 표기, 그리고 라벨 겹침 떼기.
 * 예전에는 이 규칙이 앱마다 따로 있었고 서로 달랐다.
 */
function displayValue(locale: Locale, label: string, value: string) {
  return localizeCompanyValue(locale, label, value);
}

export async function SiteFooter({
  locale,
  tone = "dark",
  guideFrom,
  className = "",
}: {
  locale: Locale;
  /** naminglink와 같은 뜻이다. "light" = 밝은 글씨(어두운 배경 위), "dark" = 어두운 글씨. */
  tone?: "light" | "dark";
  /**
   * 이 푸터가 어느 화면에 달렸는가. 안내 문서의 "돌아가기"가 이 값으로 돌아갈 곳을 정한다.
   * 넘기지 않으면 홈으로 간다 — 랜딩·약관처럼 돌아갈 서비스 화면이 없는 자리가 그렇다.
   */
  guideFrom?: "dream";
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
    : "text-foreground hover:text-brand-violet";
  const valueClass = isOnDark
    ? "font-semibold text-white"
    : "font-semibold text-foreground";

  // 사용자가 보고 있는 언어를 약관 페이지에도 그대로 넘긴다(IP·브라우저 언어 재추정 방지).
  // 한국어는 로케일 없는 주소를 그대로 쓴다 — 국내 방문자에게 보이는 주소가 짧아지고,
  // 헤더로 언어가 갈리는 x-default 자리와도 어긋나지 않는다.
  const linkLocale = locale === "ko" ? null : locale;
  const footerLinks = [
    { kind: "terms" as const, href: localePath("/terms", linkLocale), label: copy.terms },
    { kind: "privacy" as const, href: localePath("/privacy", linkLocale), label: copy.privacy },
    { kind: "refund" as const, href: localePath("/refund-policy", linkLocale), label: copy.refund },
    { kind: "pricing" as const, href: localePath("/pricing", linkLocale), label: copy.pricing },
  ];

  const row = (label: string, value: string) => ({
    label,
    value: displayValue(locale, label, value),
  });
  const firstLine = [
    row(copy.legalEntity, companyInfo.legalEntity),
    row(copy.representative, companyInfo.representative),
    row(copy.businessNumber, companyInfo.businessNumber),
    row(copy.address, companyInfo.address),
  ];
  const secondLine = [
    row(copy.customerCenter, companyInfo.customerCenter),
    row(copy.email, companyInfo.email),
    row(copy.privacyOfficer, companyInfo.privacyOfficer),
    row(copy.mailOrderNumber, companyInfo.mailOrderNumber),
    row(copy.hostingProvider, companyInfo.hostingProvider),
  ];

  // © 줄에는 법인격 접두사를 뺀 상호를 쓴다. naminglink의 `providerName`과 같은 처리라
  // 두 서비스의 마지막 줄이 같은 이름으로 끝난다("(주)Platforest" → "Platforest").
  const providerName = companyInfo.legalEntity
    .replace(/^\(주\)\s*/, "")
    .replace(/^주식회사\s*/, "");
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
          {/* 안내 문서는 팝업이 아니라 페이지라 LegalLinks 밖에 둔다. 약관처럼 확인용으로
              잠깐 열어 보는 글이 아니라 처음부터 끝까지 읽는 글이기 때문이다.
              소개·문의하기도 같은 이유로 여기 둔다.

              **푸터에 거는 것이 핵심이다.** 애드센스 심사는 이 두 페이지가 있는지를 보는데,
              어디에서도 닿지 않는 페이지는 없는 것과 같다. 라벨만 갈라 모든 언어에서 건다 —
              두 페이지가 한국어·영어 두 벌이라 23로케일 사전에 넣을 이유가 없다. */}
          <a
            href={guideHubHref(linkLocale, guideFrom)}
            className={linkClass}
            dir={textDirection}
          >
            {guideLinkLabel(locale, "short")}
          </a>
          <a href={localePath("/about", linkLocale)} className={linkClass} dir={textDirection}>
            {locale === "ko" ? "소개" : "About"}
          </a>
          <a href={localePath("/contact", linkLocale)} className={linkClass} dir={textDirection}>
            {locale === "ko" ? "문의하기" : "Contact"}
          </a>
          <a href={localePath("/notice", linkLocale)} className={linkClass} dir={textDirection}>
            {locale === "ko" ? "공지사항" : "Notices"}
          </a>
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

        {/* naminglink의 © 줄과 같은 꼴이다 — `이름(부제) · Provided by 제공사`.
            제공사는 등록 상호가 아니라 법인격 접두사를 뗀 이름을 쓴다(위 providerName). */}
        <p className="font-medium" dir={textDirection}>
          © {new Date().getFullYear()} {companyInfo.serviceName}(
          {companyInfo.serviceSubtitle}) · {copy.providedBy} {providerName}
        </p>
      </div>
    </footer>
  );
}
