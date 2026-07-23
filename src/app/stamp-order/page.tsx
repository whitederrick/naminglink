import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { StampOrderForm } from "@/components/StampOrderForm";
import { getRequestLocale } from "@/lib/locale";

export const metadata = {
  title: "이름 도장 신청 | Naming-Link",
  description: "분석 결과의 한글·한자 이름으로 이름 도장을 제작해 배송해 드립니다.",
};

type StampOrderPageProps = {
  searchParams?: Promise<{ lang?: string; name?: string }>;
};

// 이름 도장 주문 페이지(한국어 전용 v1). 결과 페이지의 굿즈 섹션에서 진입한다.
export default async function StampOrderPage({ searchParams }: StampOrderPageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const initialName = String(params?.name ?? "").trim().slice(0, 8);

  return (
    <main className="min-h-screen">
      <section className="mx-auto grid w-full max-w-3xl gap-6 px-5 py-6 sm:px-8">
        <header className="grid gap-3 border-b border-line pb-5">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={`/?lang=${locale}`}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line bg-surface px-4 text-sm font-semibold shadow-sm"
            >
              <ArrowLeft aria-hidden="true" size={17} />
              홈으로
            </Link>
          </div>
          <div>
            <p className="text-sm font-semibold text-brand-teal">이름 굿즈</p>
            <h1 className="mt-1 text-2xl font-semibold">이름 도장 신청</h1>
          </div>
        </header>
        <StampOrderForm initialName={/^[가-힣㐀-䶿一-鿿]{1,8}$/u.test(initialName) ? initialName : undefined} />
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
