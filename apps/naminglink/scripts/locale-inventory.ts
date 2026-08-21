/**
 * **권위 인벤토리** — 검수 대상 artifact 목록의 유일한 출처.
 *
 * 구현 명세 §5. manifest·검수지·`targetHash`가 **모두 이 모듈의 출력을 쓴다.** 세 자리가 각각
 * 대상을 세면 언젠가 갈라지고, 갈라진 뒤에는 검수 로그가 초록불인 채 아무도 안 읽은 문구가
 * 남는다.
 *
 * ## 왜 텍스트 추출이 아닌가
 *
 * 협의(2026-08-20) 동안 화면 문자열 수가 **198 → 222 → 225 → 242**로 네 번 바뀌었다. 결정이
 * 흔들린 것이 아니라 **세는 방법이 매번 달랐다** — 정규식으로 문자열 리터럴을 세면 식별자꼴
 * 값이 걸러지고, 게터 하나를 빠뜨리면 그만큼 조용히 준다.
 *
 * 그래서 여기서는 **실제 모듈을 불러** 값을 받아 잎 경로를 센다. 서식·주석·후행 쉼표·따옴표
 * 없는 키가 결과를 바꾸지 못한다.
 *
 * ## 등록부를 손으로 적는 이유와 그 대가
 *
 * `screen`은 표가 여러 파일에 흩어져 있어 자동으로 모을 방법이 없다. 그래서 아래 `SCREEN_SOURCES`
 * 에 손으로 적는다. **손으로 적은 목록은 빠뜨린다** — 그래서 `verify-locale-inventory.ts`가
 * `src` 전체의 `Record<Locale…>` 선언을 훑어 이 목록과 대조하고, 등록도 제외 선언도 없는 표가
 * 하나라도 있으면 실패한다. 목록이 아니라 **대조**가 보증한다.
 */
import { localeCodes, type LocaleCode } from "../src/lib/locale-codes";
import type { Locale } from "../src/lib/services";

import { landingCopies, hangulPronunciationCopy } from "../src/lib/i18n";
import { getResultCopy } from "../src/lib/i18n-result";
import { getFormCopy, getPlainSubmitCopy } from "../src/lib/i18n-form";
import { getAccountCopy } from "../src/lib/i18n-account";
import { getAuthCopy } from "../src/lib/i18n-auth";
import { getServiceOverride } from "../src/lib/i18n-service";
import { notFoundCopies } from "../src/lib/not-found-copy";
import { localeLabels } from "../src/lib/services";
import { stampPausedNotice } from "../src/lib/stamp-order-copy";
import { uiLabels } from "../src/lib/ui-labels";

import { footerCopies } from "../src/components/SiteFooter";
import { homeLabels, globalNavigationLabels, shellCopies } from "../src/components/ServiceShell";
import { COPY as stampOrderCopies } from "../src/components/StampOrderForm";
import { resultCardCopies } from "../src/components/ResultCard";
import { unlockCopies } from "../src/components/CandidateUnlockPanel";
import { premiumCopies } from "../src/components/GlobalNamePremiumPanel";
import { COPY as accountDeleteCopies } from "../src/components/AccountDeletePanel";
import { AD_NOTICE } from "../src/components/AdBanner";
import { generalStepsByLocale } from "../src/components/AILoadingSteps";

import { KO_DOCS } from "../src/lib/doc-content/ko";
import { EN_DOCS } from "../src/lib/doc-content/en";
import { getDocPage, getNoticeCopy } from "../src/lib/doc-content";
import { getLegalLocaleContent } from "../src/lib/legal-content";
import { getConsentCopy } from "../src/lib/checkout-consent";
import { ko as koConsent } from "../src/lib/checkout-consent/ko";

export type Scope = "screen" | "docs" | "legal" | "consent";
export const SCOPES: readonly Scope[] = ["screen", "docs", "legal", "consent"];

/** 검수 단위. `path`가 artifact id의 뒷부분이 된다. */
export type Leaf = { readonly path: string; readonly value: string };

/**
 * 잎을 모은다. **문자열만 잎이다** — 숫자·불리언은 번역 대상이 아니므로 세지 않는다.
 * 배열은 자리를 `[n]`으로 적어 순서가 바뀌면 경로가 달라지게 한다.
 */
export function leaves(value: unknown, prefix = "", out: Leaf[] = []): Leaf[] {
  if (typeof value === "string") {
    out.push({ path: prefix, value });
    return out;
  }
  if (Array.isArray(value)) {
    value.forEach((item, i) => leaves(item, `${prefix}[${i}]`, out));
    return out;
  }
  if (value && typeof value === "object") {
    for (const key of Object.keys(value as Record<string, unknown>).sort()) {
      const next = prefix ? `${prefix}.${key}` : key;
      leaves((value as Record<string, unknown>)[key], next, out);
    }
    return out;
  }
  return out;
}

/** 화면 로케일 표·게터 등록부. `decl`은 `verify-locale-inventory.ts`가 대조하는 좌표다. */
export type ScreenSource = {
  readonly id: string;
  readonly decl: string;
  readonly load: (locale: LocaleCode) => unknown;
  /** 원문 로케일에 값이 없는 것이 정상인 표. 이유를 함께 적는다. */
  readonly koAbsent?: string;
};

export const SCREEN_SOURCES: readonly ScreenSource[] = [
  { id: "landing", decl: "src/lib/i18n.ts:landingCopies", load: (l) => landingCopies[l as Locale] },
  {
    id: "hangulPronunciation",
    decl: "src/lib/i18n.ts:hangulPronunciationCopy",
    load: (l) => hangulPronunciationCopy[l as Locale],
  },
  { id: "result", decl: "src/lib/i18n-result.ts:resultCopies", load: (l) => getResultCopy(l as Locale) },
  { id: "form", decl: "src/lib/i18n-form.ts:formCopies", load: (l) => getFormCopy(l as Locale) },
  { id: "plainSubmit", decl: "src/lib/i18n-form.ts:plainSubmitCopies", load: (l) => getPlainSubmitCopy(l as Locale) },
  { id: "account", decl: "src/lib/i18n-account.ts:accountCopies", load: (l) => getAccountCopy(l) },
  { id: "auth", decl: "src/lib/i18n-auth.ts:authCopies", load: (l) => getAuthCopy(l) },
  {
    id: "serviceOverride",
    decl: "src/lib/i18n-service.ts:overrides",
    load: (l) => getServiceOverride(l as Locale),
    koAbsent: "한국어는 원문이라 덮어쓸 것이 없다 — `overrides`에 ko 항목이 없는 것이 설계다.",
  },
  { id: "notFound", decl: "src/lib/not-found-copy.ts:notFoundCopies", load: (l) => notFoundCopies[l] },
  { id: "localeLabel", decl: "src/lib/services.ts:localeLabels", load: (l) => localeLabels[l as Locale] },
  { id: "stampPaused", decl: "src/lib/stamp-order-copy.ts:stampPausedNotice", load: (l) => stampPausedNotice[l] },
  // 컴포넌트에 두 갈래로 박혀 있던 문구를 옮겨 온 표(구현 명세 §9). 옮긴 순간부터 검수 대상이다.
  { id: "uiLabels", decl: "src/lib/ui-labels.ts:uiLabels", load: (l) => uiLabels[l] },
  /**
   * 아래 둘은 **자료형 표기가 없어** 처음 훑기에서 통째로 빠졌다(2026-08-20). `shellCopies` 는
   * `Record<string, …>`이라 로케일이 빠져도 tsc 가 조용하다 → `locale-maps-must-be-record-localecode`.
   */
  { id: "shell", decl: "src/components/ServiceShell.tsx:shellCopies", load: (l) => shellCopies[l] },
  { id: "stampOrder", decl: "src/components/StampOrderForm.tsx:COPY", load: (l) => stampOrderCopies[l as keyof typeof stampOrderCopies] },
  { id: "footer", decl: "src/components/SiteFooter.tsx:footerCopies", load: (l) => footerCopies[l as Locale] },
  { id: "homeLabel", decl: "src/components/ServiceShell.tsx:homeLabels", load: (l) => homeLabels[l as Locale] },
  {
    id: "globalNavigation",
    decl: "src/components/ServiceShell.tsx:globalNavigationLabels",
    load: (l) => globalNavigationLabels[l as Locale],
  },
  { id: "resultCard", decl: "src/components/ResultCard.tsx:resultCardCopies", load: (l) => resultCardCopies[l] },
  { id: "candidateUnlock", decl: "src/components/CandidateUnlockPanel.tsx:unlockCopies", load: (l) => unlockCopies[l] },
  {
    id: "globalNamePremium",
    decl: "src/components/GlobalNamePremiumPanel.tsx:premiumCopies",
    load: (l) => premiumCopies[l],
  },
  { id: "accountDelete", decl: "src/components/AccountDeletePanel.tsx:COPY", load: (l) => accountDeleteCopies[l as Locale] },
  { id: "adNotice", decl: "src/components/AdBanner.tsx:AD_NOTICE", load: (l) => AD_NOTICE[l] },
  {
    id: "aiLoadingSteps",
    decl: "src/components/AILoadingSteps.tsx:generalStepsByLocale",
    load: (l) => (l === "ko" ? undefined : generalStepsByLocale[l as Exclude<LocaleCode, "ko">]),
    koAbsent: "한국어는 `generalSteps`를 따로 쓴다 — 자료형이 `Exclude<LocaleCode, \"ko\">`다.",
  },
];

/**
 * 화면에 나가지 않는 로케일 표. **이유 없이 여기 적지 말 것** — 이유가 없으면 다음 사람이
 * 판단할 수 없고, 그때 이 목록은 검사를 조용히 비우는 장치가 된다.
 */
export const EXCLUDED_TABLES: readonly { decl: string; reason: string }[] = [
  {
    decl: "src/lib/openai.ts:NAME_SCRIPT_RULES",
    reason: "모델 프롬프트에 넣는 문자 규칙. 화면에 그려지지 않는다.",
  },
  {
    decl: "src/lib/openai.ts:OUTPUT_LANGUAGE_NAMES",
    reason: "모델에 출력 언어를 지시하는 값. 화면에 그려지지 않는다.",
  },
  {
    decl: "src/lib/i18n.ts:serviceCopies",
    reason: "`landingCopies`의 `services` 자리에 접힌다. 따로 세면 두 번 세어진다.",
  },
  {
    decl: "src/app/[locale]/not-found.tsx:copies",
    reason: "`notFoundCopies`에서 만들어 넘기는 파생값. 원본은 등록돼 있다.",
  },
  {
    decl: "src/app/[locale]/not-found.tsx:homeHrefs",
    reason: "주소 문자열이라 번역 대상이 아니다.",
  },
  {
    decl: "src/components/LocaleNotFound.tsx:copies",
    reason: "props 자료형 선언. 값이 아니다.",
  },
  {
    decl: "src/components/LocaleNotFound.tsx:homeHrefs",
    reason: "props 자료형 선언. 값이 아니다.",
  },
];

/** 23로케일 전부에 있어야 하는 문서 키. `GlobalDocKey`와 같은 규칙으로 **파생한다.** */
export function globalDocKeys(): string[] {
  return Object.keys(KO_DOCS).filter((key) => key in EN_DOCS).sort();
}

/**
 * 문서 종류를 **손으로 적지 않는다.** 처음에 `["DIGITAL","GOODS"]`로 적었는데 `GOODS`는 없는
 * 이름이라(`ConsentKind = "DIGITAL" | "MADE_TO_ORDER"`) 결제 고시가 **절반만 세어졌다** —
 * 16개가 나왔고 실제는 34개다. 값에서 뽑으면 그럴 일이 없다
 * → `app-lists-must-not-be-hardcoded`.
 */
function legalKinds(): string[] {
  return Object.keys(getLegalLocaleContent("ko").documents).sort();
}

function consentKinds(): string[] {
  return Object.keys(koConsent).sort();
}

function screenLeaves(locale: LocaleCode): Leaf[] {
  const out: Leaf[] = [];
  for (const source of SCREEN_SOURCES) {
    const value = source.load(locale);
    if (value === undefined || value === null) continue;
    leaves(value, source.id, out);
  }
  return out;
}

function docsLeaves(locale: LocaleCode): Leaf[] {
  const out: Leaf[] = [];
  for (const key of globalDocKeys()) {
    leaves(getDocPage(locale as Locale, key as never), `docs.${key}`, out);
  }
  leaves(getNoticeCopy(locale as Locale), "notices", out);
  return out;
}

/**
 * **파일만 읽는다 — 그리고 그것이 지금은 옳다.**
 *
 * 운영 약관 화면은 `site_contents.published_content` 가 있으면 그것을 먼저 쓴다(명세 §4.1,
 * DEC-01). 이 함수는 파일 폴백만 본다. 두 가지 이유다.
 *
 * ① `scopeInventory` 는 manifest·packet·해시·관문이 전부 쓰는 **동기** 함수다. 여기에 DB 읽기를
 *    넣으면 네 자리가 모두 자격증명을 요구하게 되고, 없는 컴퓨터에서는 검사기가 통째로 못 돈다.
 * ② 2026-08-20 조회에서 `legal.*` 게시본은 **0건**이라 파일이 곧 운영 출처다.
 *
 * ②가 깨지는 순간(게시본이 하나라도 생기는 순간) 이 함수는 **화면에 없는 문장을 검수 대상으로
 * 내놓게 된다.** 그래서 그 자리를 `scripts/verify-legal-source.ts` 가 지킨다 — 게시본이 생기면
 * 빨간불을 내고 법률 검수를 멈춘다. 그때 DB 경로를 배선한다.
 */
function legalLeaves(locale: LocaleCode): Leaf[] {
  const out: Leaf[] = [];
  const content = getLegalLocaleContent(locale as Locale);
  // **`labels`도 화면에 나간다** — 「시행일」·「로그인」처럼 약관 페이지가 그리는 문구다.
  // 처음에 `documents`만 세어 4개가 빠졌다(111. 실제는 115).
  leaves(content.labels, "legal.labels", out);
  for (const kind of legalKinds()) {
    leaves(content.documents[kind as keyof typeof content.documents], `legal.${kind}`, out);
  }
  return out;
}

function consentLeaves(locale: LocaleCode): Leaf[] {
  const out: Leaf[] = [];
  for (const kind of consentKinds()) {
    leaves(getConsentCopy(locale, kind as never), `consent.${kind}`, out);
  }
  return out;
}

const READERS: Record<Scope, (locale: LocaleCode) => Leaf[]> = {
  screen: screenLeaves,
  docs: docsLeaves,
  legal: legalLeaves,
  consent: consentLeaves,
};

/**
 * 한 scope의 검수 대상. **`ko`는 `notices`처럼 원문만 있는 자리를 포함하므로 개수가 다를 수
 * 있다** — 그 차이는 `koAbsent`에 이유가 적힌 표에서만 나와야 하고, `verify-locale-inventory`가
 * 그것을 센다.
 */
export function scopeInventory(scope: Scope, locale: LocaleCode): Leaf[] {
  const found = READERS[scope](locale);
  return [...found].sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0));
}

export function allLocales(): readonly LocaleCode[] {
  return localeCodes;
}

/**
 * 인벤토리 버전. **잎 경로 집합에서 파생한다** — 값이 아니라 구조에서 뽑으므로, 번역을 고쳐도
 * 버전은 그대로이고 대상이 늘거나 줄면 바뀐다. packet이 이 값을 봉인한다(명세 §5).
 */
export function inventoryVersion(locale: LocaleCode = "en"): string {
  const shape = SCOPES.map((scope) => `${scope}:${scopeInventory(scope, locale).map((l) => l.path).join(",")}`).join("|");
  let hash = 0x811c9dc5;
  for (let i = 0; i < shape.length; i++) {
    hash ^= shape.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return `inv1-${hash.toString(16).padStart(8, "0")}`;
}
