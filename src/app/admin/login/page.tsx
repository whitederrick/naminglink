import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AdminLoginPanel } from "@/components/AdminLoginPanel";

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto grid w-full max-w-xl gap-6 px-5 py-10 sm:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm">
          <ArrowLeft aria-hidden="true" size={17} />
          Naming-Link
        </Link>
        <div>
          <p className="text-sm font-semibold text-brand-teal">
            Naming-Link Operations
          </p>
          <h1 className="mt-3 text-3xl font-semibold">시스템 관리자</h1>
          <p className="mt-3 text-sm leading-6 text-muted">
            정책, 요금, 푸터와 운영 데이터를 관리하는 전용 로그인입니다.
          </p>
        </div>
        <AdminLoginPanel />
      </section>
    </main>
  );
}
