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
  const paymentConfigured = Boolean(
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
