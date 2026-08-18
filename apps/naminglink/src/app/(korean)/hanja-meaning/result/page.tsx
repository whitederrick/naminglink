import type { Metadata } from "next";
import { HanjaMeaningResultPage } from "@/components/HanjaMeaningResultPage";
import { noIndex } from "@/lib/seo";

// 결과 화면은 1회용 조회 ID에 묶인 남의 결과다. 색인되면 안 된다.
export const metadata: Metadata = { robots: noIndex };

type PageProps = {
  searchParams?: Promise<{ id?: string }>;
};

export default async function HanjaMeaningResultRoute({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  // 한국어 전용 서비스의 결과 화면이다. 언어를 판정할 일이 없다(`lib/route-locales.ts`).
  const locale = "ko" as const;
  const premiumTestMode =
    process.env.NODE_ENV !== "production" ||
    process.env.PREMIUM_TEST_MODE === "true";
  // 한자 상세는 국내 전용 상품이라 **토스페이먼츠만** 쓴다(2026-07-29 결제 일원화).
  // 예전에는 토스 키가 없으면 포트원으로 떨어졌으나 그 폴백을 지웠으므로, 여기서도
  // 토스 키 두 개만 본다. 서버(`premium-reports/order`)와 같은 기준이어야 한다 —
  // 화면만 열어 두면 버튼을 눌러도 503이 돌아온다.
  const paymentConfigured = Boolean(
    process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY && process.env.TOSS_SECRET_KEY,
  );

  return (
    <HanjaMeaningResultPage
      resultId={params?.id ?? ""}
      locale={locale}
      premiumTestMode={premiumTestMode}
      paymentConfigured={paymentConfigured}
    />
  );
}
