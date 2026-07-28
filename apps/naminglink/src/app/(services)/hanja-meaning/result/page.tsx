import { HanjaMeaningResultPage } from "@/components/HanjaMeaningResultPage";
import { getRequestLocale } from "@/lib/locale";

type PageProps = {
  searchParams?: Promise<{ id?: string; lang?: string }>;
};

export default async function HanjaMeaningResultRoute({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const premiumTestMode =
    process.env.NODE_ENV !== "production" ||
    process.env.PREMIUM_TEST_MODE === "true";
  // 한자 상세는 국내 상품이다. 국내 결제는 **토스페이먼츠 직접 연동**이므로 토스 키 두 개가
  // 있으면 그것만으로 열린다. 토스 키가 없을 때만 포트원으로 떨어지므로 포트원 조건도 함께 본다
  // (포트원은 넷을 모두 요구한다 — 하나만 빠져도 결제가 안 된다).
  const tossConfigured = Boolean(
    process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY && process.env.TOSS_SECRET_KEY,
  );
  const paymentConfigured =
    tossConfigured ||
    Boolean(
      process.env.NEXT_PUBLIC_PORTONE_STORE_ID &&
        process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY &&
        process.env.PORTONE_API_SECRET &&
        process.env.PORTONE_WEBHOOK_SECRET,
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
