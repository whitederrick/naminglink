import Link from "next/link";
import { companyInfo } from "@/lib/company";

type SiteFooterProps = {
  tone?: "light" | "dark";
  className?: string;
};

const footerLinks = [
  { href: "/terms", label: "이용약관" },
  { href: "/privacy", label: "개인정보처리방침" },
  { href: "/refund-policy", label: "환불정책" },
  { href: "/pricing", label: "요금안내" },
  { href: "/login", label: "로그인" },
];

export function SiteFooter({ tone = "dark", className = "" }: SiteFooterProps) {
  const isLight = tone === "light";
  const wrapperClass = isLight
    ? "border-white/15 text-white/72"
    : "border-line text-muted";
  const linkClass = isLight
    ? "text-white/86 hover:text-white"
    : "text-foreground hover:text-brand-teal";

  return (
    <footer
      className={`border-t px-5 py-3 text-center text-xs leading-6 sm:px-8 ${wrapperClass} ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 font-semibold">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span>상호 {companyInfo.legalEntity}</span>
          <span>대표자 {companyInfo.representative}</span>
          <span>{companyInfo.businessNumber}</span>
          <span>주소 {companyInfo.address}</span>
          <span>고객센터 {companyInfo.customerCenter}</span>
          <span>이메일 {companyInfo.email}</span>
          <span>개인정보 보호책임자 {companyInfo.privacyOfficer}</span>
          <span>{companyInfo.mailOrderNumber}</span>
          <span>호스팅 제공 {companyInfo.hostingProvider}</span>
        </div>
        <p className="font-medium">
          © 2026 {companyInfo.serviceName} · Provided by {companyInfo.studioName}
        </p>
      </div>
    </footer>
  );
}
