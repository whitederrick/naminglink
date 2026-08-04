import type { Locale } from "@/lib/i18n";
import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

import { ar } from "@/lib/legal-locales/ar";
import { de } from "@/lib/legal-locales/de";
import { es } from "@/lib/legal-locales/es";
import { fil } from "@/lib/legal-locales/fil";
import { fr } from "@/lib/legal-locales/fr";
import { hi } from "@/lib/legal-locales/hi";
import { id } from "@/lib/legal-locales/id";
import { it } from "@/lib/legal-locales/it";
import { ja } from "@/lib/legal-locales/ja";
import { kk } from "@/lib/legal-locales/kk";
import { km } from "@/lib/legal-locales/km";
import { mn } from "@/lib/legal-locales/mn";
import { ms } from "@/lib/legal-locales/ms";
import { pl } from "@/lib/legal-locales/pl";
import { pt } from "@/lib/legal-locales/pt";
import { ru } from "@/lib/legal-locales/ru";
import { th } from "@/lib/legal-locales/th";
import { tr } from "@/lib/legal-locales/tr";
import { uz } from "@/lib/legal-locales/uz";
import { vi } from "@/lib/legal-locales/vi";
import { zh } from "@/lib/legal-locales/zh";

/**
 * ko·en을 뺀 나머지 로케일의 약관.
 *
 * **`Record<Exclude<Locale, "ko" | "en">, …>`로 잡은 것이 핵심이다.** 로케일을 늘리면 여기서
 * 컴파일이 깨져 빠뜨릴 수 없다 — 약관은 한 언어라도 비면 그 언어 이용자에게 다른 조건을 알린
 * 것이 되므로 조용히 영어로 폴백하게 두지 않는다(naminglink 결제 고지와 같은 규칙).
 *
 * ko·en은 `legal-content.ts`에 원문 그대로 둔다. 원문과 그 짝은 한자리에 있는 편이 낫고,
 * 나머지는 거기서 번역해 만든 것이다.
 */
export const legalLocaleDocuments: Record<
  Exclude<Locale, "ko" | "en">,
  LegalLocaleDocuments
> = {
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
