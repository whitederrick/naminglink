import { headers } from "next/headers";
import type { Locale } from "@/lib/services";

const supportedLocales: Locale[] = ["ko", "en", "ja", "zh"];

export function isLocale(value: string | null | undefined): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export async function getRequestLocale(searchLocale?: string) {
  if (isLocale(searchLocale)) {
    return searchLocale;
  }

  const headerStore = await headers();
  const country = headerStore.get("x-vercel-ip-country")?.toUpperCase();
  const acceptLanguage = headerStore.get("accept-language") ?? "";

  if (country === "KR" || acceptLanguage.toLowerCase().includes("ko")) {
    return "ko" satisfies Locale;
  }

  if (country === "JP" || acceptLanguage.toLowerCase().includes("ja")) {
    return "ja" satisfies Locale;
  }

  if (
    ["CN", "TW", "HK", "MO"].includes(country ?? "") ||
    acceptLanguage.toLowerCase().includes("zh")
  ) {
    return "zh" satisfies Locale;
  }

  return "en" satisfies Locale;
}
