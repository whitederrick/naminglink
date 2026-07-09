import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AuthPanel } from "@/components/AuthPanel";
import { SiteFooter } from "@/components/SiteFooter";

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto grid w-full max-w-4xl gap-6 px-5 py-8 sm:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm">
          <ArrowLeft aria-hidden="true" size={17} />
          Naming-Link
        </Link>
        <div>
          <p className="text-sm font-semibold text-brand-teal">
            Naming-Link Account
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
            계정
          </h1>
          <p className="mt-4 text-base leading-7 text-muted">
            로그인 후 작명 이력, 결제 이력, 프리미엄 리포트, 도장 주문 상태를
            이 화면에서 관리할 수 있도록 확장합니다.
          </p>
        </div>
        <AuthPanel intent="account" />
      </section>
      <SiteFooter />
    </main>
  );
}
