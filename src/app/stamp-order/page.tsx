import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { StampOrderForm } from "@/components/StampOrderForm";
import { getStampProduct, type StampRegion } from "@/lib/goods-products";
import { getRequestLocale } from "@/lib/locale";
import { displayPrice, getProductSetting } from "@/lib/product-settings";

export const metadata = {
  title: "이름 도장 신청 · Name Stamp | Naming-Link",
  description: "분석 결과의 한글·한자 이름으로 이름 도장을 제작해 배송해 드립니다.",
};

type StampOrderPageProps = {
  searchParams?: Promise<{ lang?: string; name?: string }>;
};

// 이름 도장 주문 페이지. 로케일로 지역을 정한다:
// ko → 국내(카카오페이·₩) / 그 외 → 글로벌(페이팔·US$, 국제 배송 포함).
export default async function StampOrderPage({ searchParams }: StampOrderPageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const region: StampRegion = locale === "ko" ? "domestic" : "global";
  const initialName = String(params?.name ?? "").trim().slice(0, 8);

  // 가격 표기는 관리자 조정형 상품 설정에서 읽고, 실패 시 정적 상품표로 폴백한다.
  let display = getStampProduct(region).display as string;
  try {
    display = displayPrice(await getProductSetting(region === "global" ? "STAMP_USD" : "STAMP_KRW"));
  } catch {
    // 설정 조회 실패 시 폴백 유지.
  }

  const heading =
    region === "global"
      ? { eyebrow: "Name goods", title: "Order a Korean name stamp", back: "Home" }
      : { eyebrow: "이름 굿즈", title: "이름 도장 신청", back: "홈으로" };

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
              {heading.back}
            </Link>
          </div>
          <div>
            <p className="text-sm font-semibold text-brand-teal">{heading.eyebrow}</p>
            <h1 className="mt-1 text-2xl font-semibold">{heading.title}</h1>
          </div>
        </header>
        <StampOrderForm
          region={region}
          display={display}
          initialName={/^[가-힣㐀-䶿一-鿿]{1,8}$/u.test(initialName) ? initialName : undefined}
        />
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
