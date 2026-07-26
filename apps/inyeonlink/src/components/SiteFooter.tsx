import Link from "next/link";

import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import { getDictionary, type Locale } from "@/lib/i18n";

// 루트 레이아웃에 두어 모든 화면에 깔린다. 결과 화면은 배경 이미지를 fixed로 깔기 때문에
// 푸터에 relative z-10을 줘야 배경 위로 올라온다.
export function SiteFooter({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const t = dictionary.footer;

  return (
    <footer className="relative z-10 border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand-plum">
              {dictionary.brand}
            </p>
            <p className="break-keep-all mt-2 max-w-md text-xs leading-5 text-muted">
              {t.disclaimer}
            </p>
          </div>

          <nav aria-label={t.linksLabel} className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href={`/privacy?lang=${locale}`} className="text-muted hover:text-foreground">
              {t.privacy}
            </Link>
            <Link href={`/terms?lang=${locale}`} className="text-muted hover:text-foreground">
              {t.terms}
            </Link>
            <a
              href={companyInfo.siblingServiceUrl}
              className="text-muted hover:text-foreground"
              rel="noreferrer"
            >
              {companyInfo.siblingServiceName}
            </a>
          </nav>
        </div>

        <dl className="mt-8 grid gap-x-8 gap-y-1.5 border-t border-line pt-6 text-xs text-muted sm:grid-cols-2 lg:grid-cols-3">
          <Row label={t.legalEntity} value={companyInfo.legalEntity} />
          <Row label={t.representative} value={companyInfo.representative} />
          <Row label={t.businessNumber} value={companyInfo.businessNumber} />
          <Row label={t.mailOrderNumber} value={companyInfo.mailOrderNumber} />
          <Row label={t.address} value={companyInfo.address} />
          <Row label={t.contact} value={`${companyInfo.customerCenter} · ${companyInfo.email}`} />
        </dl>

        <p className="mt-6 text-xs text-muted">
          © {companyInfo.legalEntity} · {t.effective} {LEGAL_EFFECTIVE_DATE}
        </p>
      </div>
    </footer>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <dt className="shrink-0">{label}</dt>
      <dd className="min-w-0 break-words text-foreground/70">{value}</dd>
    </div>
  );
}
