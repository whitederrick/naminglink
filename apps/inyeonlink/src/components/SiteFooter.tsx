import { LegalLinks } from "@/components/LegalLinks";
import { getCompanyInfo } from "@/lib/company-server";
import { getDictionary, isRtlLocale, type Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";

// naminglink의 SiteFooter와 **같은 구조**다. 가운데 정렬 · 정책 링크 한 줄 · 사업자 정보
// 두 줄(모바일은 잘게 접음) · 저작권 한 줄. 두 서비스를 오가는 사용자가 같은 자리에서 같은
// 정보를 찾을 수 있어야 한다.
//
// 값도 같은 곳에서 온다 — naminglink 관리자 화면이 관리하는 `site_contents`다. naminglink는
// 관리자 화면에서 고치려고 클라이언트에서 API로 받아오고, 이 앱은 고칠 일이 없으므로 서버
// 컴포넌트에서 바로 읽는다. 링크 목록만 짧다(파는 것이 하나뿐이라 요금안내가 따로 없다).

// "준비 중" 계열 문구의 로케일별 표기. naminglink `SiteFooter.tsx`의 `footerCopies[*].values`에서
// 그대로 가져왔다 — 사전(i18n)이 아니라 푸터 컴포넌트가 들고 있는 값이라 그쪽 구조를 따랐다.
const PENDING_COPIES: Record<
  Locale,
  { pending: string; registrationPending: string; mailOrderPending: string }
> = {
  ko: { pending: "확인 예정", registrationPending: "준비 중", mailOrderPending: "신고 준비 중" },
  en: { pending: "to be confirmed", registrationPending: "pending", mailOrderPending: "filing pending" },
  ja: { pending: "確認予定", registrationPending: "準備中", mailOrderPending: "申告準備中" },
  zh: { pending: "待确认", registrationPending: "准备中", mailOrderPending: "申报准备中" },
  de: { pending: "in Prüfung", registrationPending: "in Vorbereitung", mailOrderPending: "Meldung in Vorbereitung" },
  es: { pending: "por confirmar", registrationPending: "en preparación", mailOrderPending: "registro en preparación" },
  fr: { pending: "à confirmer", registrationPending: "en préparation", mailOrderPending: "déclaration en préparation" },
  it: { pending: "da confermare", registrationPending: "in preparazione", mailOrderPending: "segnalazione in preparazione" },
  pt: { pending: "a confirmar", registrationPending: "em preparação", mailOrderPending: "declaração em preparação" },
  vi: { pending: "sẽ xác nhận", registrationPending: "đang chuẩn bị", mailOrderPending: "đang chuẩn bị khai báo" },
  th: { pending: "รอยืนยัน", registrationPending: "กำลังเตรียม", mailOrderPending: "กำลังเตรียมแจ้ง" },
  id: { pending: "akan dikonfirmasi", registrationPending: "sedang disiapkan", mailOrderPending: "pelaporan disiapkan" },
  ru: { pending: "уточняется", registrationPending: "готовится", mailOrderPending: "подача готовится" },
  ar: { pending: "سيتم التأكيد", registrationPending: "قيد التحضير", mailOrderPending: "قيد الإبلاغ" },
  fil: { pending: "kukumpirmahin", registrationPending: "inihahanda", mailOrderPending: "inihahanda ang filing" },
  uz: { pending: "tasdiqlanadi", registrationPending: "tayyorlanmoqda", mailOrderPending: "ariza tayyorlanmoqda" },
  mn: { pending: "баталгаажина", registrationPending: "бэлтгэж байна", mailOrderPending: "мэдүүлэг бэлтгэж байна" },
  hi: { pending: "पुष्टि बाकी", registrationPending: "तैयारी में", mailOrderPending: "फाइलिंग तैयारी में" },
  tr: { pending: "onay bekliyor", registrationPending: "hazırlanıyor", mailOrderPending: "bildirim hazırlanıyor" },
  km: { pending: "នឹងបញ្ជាក់", registrationPending: "កំពុងរៀបចំ", mailOrderPending: "កំពុងរៀបចំដាក់ស្នើ" },
  ms: { pending: "akan disahkan", registrationPending: "sedang disediakan", mailOrderPending: "pemfailan disediakan" },
  kk: { pending: "нақтыланады", registrationPending: "дайындалуда", mailOrderPending: "өтініш дайындалуда" },
  pl: { pending: "do potwierdzenia", registrationPending: "w przygotowaniu", mailOrderPending: "zgłoszenie w przygotowaniu" },
};

/**
 * 푸터 값 한 칸을 화면에 쓸 문자열로 다듬는다.
 *
 * DB(`site_contents`)에 들어 있는 값에는 **항목명이 그대로 붙어 있다** — `"통신판매업 신고 준비 중"`,
 * `"사업자등록번호 준비 중"`. 라벨과 함께 그리면 "통신판매업 통신판매업 신고 준비 중"이 된다.
 * 그래서 값이 라벨로 시작하면 그 부분을 떼고, 한국어가 아니면 로케일 표기로 바꾼다.
 * (naminglink는 한국어일 때 걷어내지 않아 같은 겹침이 남아 있다 — 그쪽도 손봐야 한다.)
 */
function displayValue(locale: Locale, label: string, value: string) {
  const trimmed = value.trim();
  const pendingCopy = PENDING_COPIES[locale];

  if (trimmed === "통신판매업 신고 준비 중") return pendingCopy.mailOrderPending;
  if (trimmed === "사업자등록번호 준비 중") return pendingCopy.registrationPending;
  if (trimmed === "확인 예정") return pendingCopy.pending;

  // 위 세 가지 말고도 값이 라벨로 시작하면 겹치므로 떼어 낸다. 떼고 나서 빈 문자열이 되면
  // 값 자체가 라벨뿐이었다는 뜻이라 원래 값을 그대로 둔다.
  if (label && trimmed.startsWith(label)) {
    return trimmed.slice(label.length).trim() || trimmed;
  }
  return trimmed;
}

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
