import { ko } from "./ko";
import { en } from "./en";
import { ja } from "./ja";
import { zh } from "./zh";
import { de } from "./de";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { pt } from "./pt";
import { vi } from "./vi";
import { th } from "./th";
import { id } from "./id";
import { ru } from "./ru";
import { ar } from "./ar";
import { fil } from "./fil";
import { uz } from "./uz";
import { mn } from "./mn";
import { hi } from "./hi";
import { tr } from "./tr";
import { km } from "./km";
import { ms } from "./ms";
import { kk } from "./kk";
import { pl } from "./pl";
import type { ReportCopy } from "./types";
import { supportedLocales, type Locale } from "@/lib/services";

// 신고 모달 문구. 23개 로케일 전부 채워져 있다. `Record`(부분이 아님)라 로케일을 추가하면
// 여기서 컴파일이 깨져 빠뜨릴 수 없다 — checkout-consent와 같은 패턴.
export const reportCopies: Record<Locale, ReportCopy> = {
  ko,
  en,
  ja,
  zh,
  de,
  es,
  fr,
  it,
  pt,
  vi,
  th,
  id,
  ru,
  ar,
  fil,
  uz,
  mn,
  hi,
  tr,
  km,
  ms,
  kk,
  pl,
};

export type { ReportCopy };

function resolveLocale(value: string | undefined): Locale {
  return supportedLocales.includes(value as Locale) ? (value as Locale) : "en";
}

export function getReportCopy(locale: string | undefined): ReportCopy {
  return reportCopies[resolveLocale(locale)];
}
