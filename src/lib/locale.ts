import { headers } from "next/headers";
import { supportedLocales, type Locale } from "@/lib/services";

const countryLocaleMap: Record<string, Locale> = {
  KR: "ko",
  JP: "ja",
  VN: "vi",
  PH: "fil",
  TH: "th",
  ID: "id",
  CN: "zh",
  TW: "zh",
  HK: "zh",
  MO: "zh",
  UZ: "uz",
  MN: "mn",
  IN: "hi",
  US: "en",
  MX: "es",
  BR: "pt",
  FR: "fr",
  GB: "en",
  TR: "tr",
  RU: "ru",
  AE: "ar",
  EG: "ar",
  SA: "ar",
  KH: "km",
  MY: "ms",
  DE: "de",
  AU: "en",
  CA: "en",
  AR: "es",
  CL: "es",
  KZ: "kk",
  PL: "pl",
  IT: "it",
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
