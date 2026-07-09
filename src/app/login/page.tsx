import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AuthPanel } from "@/components/AuthPanel";
import { SiteFooter } from "@/components/SiteFooter";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto grid w-full max-w-4xl gap-6 px-5 py-8 sm:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm">
          <ArrowLeft aria-hidden="true" size={17} />
          Naming-Link
        </Link>
        <div>
          <p className="text-sm font-semibold text-brand-teal">
            Global Naming Studio
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">
            로그인
          </h1>
          <p className="mt-4 text-base leading-7 text-muted">
            작명 결과, 프리미엄 PDF, 도장 주문 이력을 안전하게 관리하기 위한
            계정입니다.
          </p>
        </div>
        <AuthPanel />
      </section>
      <SiteFooter />
    </main>
  );
}
