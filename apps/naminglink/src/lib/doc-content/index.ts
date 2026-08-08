import type { Locale } from "@/lib/services";

import { AR_DOCS, AR_NOTICES } from "./ar";
import { DE_DOCS, DE_NOTICES } from "./de";
import { EN_DOCS, EN_NOTICES } from "./en";
import { ES_DOCS, ES_NOTICES } from "./es";
import { FIL_DOCS, FIL_NOTICES } from "./fil";
import { FR_DOCS, FR_NOTICES } from "./fr";
import { HI_DOCS, HI_NOTICES } from "./hi";
import { ID_DOCS, ID_NOTICES } from "./id";
import { IT_DOCS, IT_NOTICES } from "./it";
import { JA_DOCS, JA_NOTICES } from "./ja";
import { KK_DOCS, KK_NOTICES } from "./kk";
import { KM_DOCS, KM_NOTICES } from "./km";
import { KO_DOCS, KO_NOTICES, type DocKey } from "./ko";
import { MN_DOCS, MN_NOTICES } from "./mn";
import { MS_DOCS, MS_NOTICES } from "./ms";
import { PL_DOCS, PL_NOTICES } from "./pl";
import { PT_DOCS, PT_NOTICES } from "./pt";
import { RU_DOCS, RU_NOTICES } from "./ru";
import { TH_DOCS, TH_NOTICES } from "./th";
import { TR_DOCS, TR_NOTICES } from "./tr";
import { UZ_DOCS, UZ_NOTICES } from "./uz";
import { VI_DOCS, VI_NOTICES } from "./vi";
import { ZH_DOCS, ZH_NOTICES } from "./zh";
import type { DocPage, NoticeCopy } from "./types";

/**
 * 편집 문서(안내·소개·공지·문의)의 로케일 등록부.
 *
 * ## 대원칙: 23개 언어
 *
 * 이용자가 보는 글은 전부 23개 언어다 — 그것이 이 서비스의 약속이다. 예외는 아랍어·크메르어의
 * **유료 PDF 하나뿐**이고(렌더러가 그 문자를 못 그린다) 화면 문구에는 예외가 없다.
 *
 * ## 왜 `Record<Locale, …>`인가
 *
 * 표를 `Record<string, …>`으로 두면 로케일이 빠져도 tsc가 조용하고 읽는 쪽이 영어로 떨어진다.
 * **화면은 멀쩡해 보이니 그 언어 이용자만 영어를 본다** — 2026-08-07에 여덟 곳이 그랬다
 * (`verify-locale-maps`가 지금은 막는다).
 *
 * 그리고 **여기에 `EN_DOCS`를 대신 적어 두지 말 것.** 타입은 만족하면서 영어가 나가고, 그
 * 상태가 완성처럼 보인다. 번역이 안 됐으면 그 사실이 보여야 한다 —
 * `scripts/verify-doc-locales.mjs`가 로케일 파일과 등록부를 함께 센다.
 *
 * ko·en은 사람이 쓴 원문이고, 나머지 21개는 `scripts/translate-doc-content.ts`가 en의 구조를
 * 복사하고 잎만 갈아 끼워 만든다. **그 파일들은 손으로 고치지 않는다** — 다시 만들면 지워진다.
 */
const LOCALE_DOCS: Record<Locale, Record<DocKey, DocPage>> = {
  ko: KO_DOCS,
  en: EN_DOCS,
  ja: JA_DOCS,
  zh: ZH_DOCS,
  de: DE_DOCS,
  es: ES_DOCS,
  fr: FR_DOCS,
  it: IT_DOCS,
  pt: PT_DOCS,
  vi: VI_DOCS,
  th: TH_DOCS,
  id: ID_DOCS,
  ru: RU_DOCS,
  ar: AR_DOCS,
  fil: FIL_DOCS,
  uz: UZ_DOCS,
  mn: MN_DOCS,
  hi: HI_DOCS,
  tr: TR_DOCS,
  km: KM_DOCS,
  ms: MS_DOCS,
  kk: KK_DOCS,
  pl: PL_DOCS,
};

const LOCALE_NOTICES: Record<Locale, NoticeCopy> = {
  ko: KO_NOTICES,
  en: EN_NOTICES,
  ja: JA_NOTICES,
  zh: ZH_NOTICES,
  de: DE_NOTICES,
  es: ES_NOTICES,
  fr: FR_NOTICES,
  it: IT_NOTICES,
  pt: PT_NOTICES,
  vi: VI_NOTICES,
  th: TH_NOTICES,
  id: ID_NOTICES,
  ru: RU_NOTICES,
  ar: AR_NOTICES,
  fil: FIL_NOTICES,
  uz: UZ_NOTICES,
  mn: MN_NOTICES,
  hi: HI_NOTICES,
  tr: TR_NOTICES,
  km: KM_NOTICES,
  ms: MS_NOTICES,
  kk: KK_NOTICES,
  pl: PL_NOTICES,
};

/** 그 로케일의 문서 한 편. 로케일이 표에 없으면 tsc가 잡으므로 폴백을 두지 않는다. */
export function getDocPage(locale: Locale, key: DocKey): DocPage {
  return LOCALE_DOCS[locale][key];
}

/** 그 로케일의 공지 글. 메타데이터(날짜·종류)는 `lib/notices.ts`가 갖는다. */
export function getNoticeCopy(locale: Locale): NoticeCopy {
  return LOCALE_NOTICES[locale];
}

export type { DocKey };
