import { ar } from "@/lib/checkout-consent/ar";
import { de } from "@/lib/checkout-consent/de";
import { en } from "@/lib/checkout-consent/en";
import { es } from "@/lib/checkout-consent/es";
import { fil } from "@/lib/checkout-consent/fil";
import { fr } from "@/lib/checkout-consent/fr";
import { hi } from "@/lib/checkout-consent/hi";
import { id } from "@/lib/checkout-consent/id";
import { it } from "@/lib/checkout-consent/it";
import { ja } from "@/lib/checkout-consent/ja";
import { kk } from "@/lib/checkout-consent/kk";
import { km } from "@/lib/checkout-consent/km";
import { ko } from "@/lib/checkout-consent/ko";
import { mn } from "@/lib/checkout-consent/mn";
import { ms } from "@/lib/checkout-consent/ms";
import { pl } from "@/lib/checkout-consent/pl";
import { pt } from "@/lib/checkout-consent/pt";
import { ru } from "@/lib/checkout-consent/ru";
import { th } from "@/lib/checkout-consent/th";
import { tr } from "@/lib/checkout-consent/tr";
import { uz } from "@/lib/checkout-consent/uz";
import { vi } from "@/lib/checkout-consent/vi";
import { zh } from "@/lib/checkout-consent/zh";
import type {
  ConsentCopy,
  ConsentCopySet,
  ConsentKind,
} from "@/lib/checkout-consent/types";
import { supportedLocales, type Locale } from "@/lib/services";

// 결제 전 고지 문구 레지스트리.
//
// **왜 23개를 다 두는가.** 전자상거래법 제17조 제2항의 청약철회 제한은 "소비자가 쉽게 알 수 있는
// 곳에 표시하고 동의를 받는" 조치를 전제로 한다. 구매자가 읽지 못하는 언어로 띄운 고지는 그 조치로
// 보기 어렵다. 예전에는 한국어가 아니면 전부 영어로 내보내고 있었다.
//
// 이 모듈은 클라이언트 번들에 실린다(CheckoutConsent가 "use client"). 로케일당 1.5KB 남짓이라
// 전체 30KB 수준이고, 결제 직전에 반드시 보여야 하는 문구라 지연 로딩으로 비우지 않는다.
// **약관 본문(`@/lib/legal-content`)과 혼동하지 말 것** — 그쪽은 문서 단위라 훨씬 크고 서버 전용이다.

// 23개 로케일 전부 채워져 있다. `Record`(부분이 아님)라 로케일을 추가하면 여기서 컴파일이 깨져
// 빠뜨릴 수 없다 — 결제 고지는 한 언어라도 비면 그 언어 구매자에게 조치를 하지 않은 것이 된다.
const copies: Record<Locale, ConsentCopySet> = {
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

export type { ConsentCopy, ConsentCopySet, ConsentKind };

// `@/lib/locale`의 isLocale은 next/headers를 끌고 오는 모듈에 있어 클라이언트에서 못 쓴다.
// 여기서는 목록만 보면 되므로 직접 판정한다.
function resolveLocale(value: string | undefined): Locale {
  return supportedLocales.includes(value as Locale) ? (value as Locale) : "en";
}

export function getConsentCopy(
  locale: string | undefined,
  kind: ConsentKind,
): ConsentCopy {
  return copies[resolveLocale(locale)][kind];
}
