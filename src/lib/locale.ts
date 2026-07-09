import { headers } from "next/headers";
import type { Locale } from "@/lib/services";

const supportedLocales: Locale[] = ["ko", "en", "ja", "zh", "de", "es", "fr"];

const countryLocaleMap: Record<string, Locale> = {
  KR: "ko",
  JP: "ja",
  CN: "zh",
  TW: "zh",
  HK: "zh",
  MO: "zh",
  DE: "de",
  AT: "de",
  CH: "de",
  ES: "es",
  MX: "es",
  AR: "es",
  CL: "es",
  CO: "es",
  PE: "es",
  FR: "fr",
  BE: "fr",
  CA: "en",
  US: "en",
  GB: "en",
  IE: "en",
  AU: "en",
  NZ: "en",
};

export function isLocale(value: string | null | undefined): value is Locale {
  return supportedLocales.includes(value as Locale);
}

function localeFromAcceptLanguage(value: string): Locale | null {
  const lower = value.toLowerCase();

  for (const locale of supportedLocales) {
    if (lower.includes(locale)) {
      return locale;
    }
  }

  return null;
}

export async function getRequestLocale(searchLocale?: string) {
  if (isLocale(searchLocale)) {
    return searchLocale;
  }

  const headerStore = await headers();
  const country = headerStore.get("x-vercel-ip-country")?.toUpperCase();
  const acceptLanguage = headerStore.get("accept-language") ?? "";

  if (country && countryLocaleMap[country]) {
    return countryLocaleMap[country];
  }

  return localeFromAcceptLanguage(acceptLanguage) ?? ("en" satisfies Locale);
}
