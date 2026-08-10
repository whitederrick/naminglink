import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { StampOrderForm } from "@/components/StampOrderForm";
import {
  stampSettingCode,
  STAMP_MODEL_CODES,
  type StampModelCode,
  type StampRegion,
} from "@/lib/goods-products";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { getResultCopy } from "@/lib/i18n-result";
import { getPurchaseDisplay } from "@/lib/purchase";
import { buildPageMetadata } from "@/lib/seo";
import { localePath } from "@/lib/locale-path";

type StampOrderPageProps = {
  searchParams?: Promise<{ lang?: string; name?: string }>;
};

/**
 * 제목·설명을 **로케일별로** 낸다 (2026-08-10).
 *
 * 예전에는 23개 언어판이 전부 `"이름 도장 신청 · Name Stamp"` 한 벌을 썼다. 본문은 번역되는데
 * **검색 결과에 나오는 제목만 한·영 병기**로 나가는 상태였다 — 일본어로 검색한 사람에게
 * 한국어 제목이 보인다.
 *
 * **여기서 새 문구를 짓지 않는다.** 결과 화면의 굿즈 문구(`goodsItemTitle`·
 * `goodsItemDescription`)가 이미 23개 언어로 있고, 가리키는 것도 정확히 이 화면이다.
 * 화면에 보이는 말과 검색 결과의 말이 어긋나면 그것대로 이탈로 이어진다.
 */
export async function generateMetadata({
  searchParams,
}: StampOrderPageProps): Promise<Metadata> {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const copy = getResultCopy(locale);
  return buildPageMetadata({
    path: "/stamp-order",
    locale,
    requested: isLocale(params?.lang) ? params.lang : null,
    title: copy.goodsItemTitle,
    description: copy.goodsItemDescription,
  });
}

// 이름 도장 주문 페이지. 로케일로 지역을 정한다:
// ko → 국내(토스페이먼츠·₩) / 그 외 → 글로벌(포트원 페이팔·US$, 국제 배송 포함).
export default async function StampOrderPage({ searchParams }: StampOrderPageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const region: StampRegion = locale === "ko" ? "domestic" : "global";
  const initialName = String(params?.name ?? "").trim().slice(0, 8);

  // 모델별 표시 가격. **살 수 없으면 null이다**(판매 중지이거나 결제 수단 미준비).
  // **모델마다 값이 다르므로 셋을 모두 읽는다.** 하나만 읽어 머리말에 쓰면 고른 모델과 어긋난다.
  //
  // 예전에는 조회가 실패하면 정적 폴백 가격을 그렸다. 그래서 상품을 내려도 화면에는 ₩39,000이
  // 그대로 보였다 — 팔지 않는 상품의 정가를 계속 노출하는 셈이었다. 이제 null을 내려보내고
  // 화면이 가격을 감춘다.
  const modelPrices = Object.fromEntries(
    await Promise.all(
      STAMP_MODEL_CODES.map(async (code) => [
        code,
        await getPurchaseDisplay(stampSettingCode(code, region)),
      ] as const),
    ),
  ) as Record<StampModelCode, string | null>;

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
              href={localePath("/", locale)}
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
          modelPrices={modelPrices}
          locale={locale}
          initialName={/^[가-힣㐀-䶿一-鿿]{1,8}$/u.test(initialName) ? initialName : undefined}
        />
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
