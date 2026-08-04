"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import {
  currentYear,
  getCountryOption,
  getCountryOptionsForLocale,
  getLanguageOptionsForCountry,
  type CountryOption,
  type FieldConfig,
  type Locale,
  type ServiceConfig,
} from "@/lib/services";
import { AdBanner } from "@/components/AdBanner";
import { useSelfGateNeeded } from "@/lib/offerwall";
import { AILoadingSteps } from "@/components/AILoadingSteps";
import { CandidateUnlockPanel } from "@/components/CandidateUnlockPanel";
import { ResultAddOnServices } from "@/components/ResultAddOnServices";
import { ResultCard } from "@/components/ResultCard";
import { ResultStorageNotice } from "@/components/ResultStorageNotice";
import { SelfAdCard } from "@/components/SelfAdCard";
import { LegalModal, type LegalDocument } from "@/components/LegalModal";
import { trackAdEvent, trackAnalytics } from "@/lib/analytics-client";
import {
  validateHanjaMeaningInput,
  type NamingFieldErrors,
} from "@/lib/naming-validation";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import { cappedCandidateCount } from "@/lib/candidate-count";
import {
  unlockedCandidateCount,
  unsealAllCandidates,
  unsealNextCandidate,
} from "@/lib/candidate-seal";
import { getFormCopy } from "@/lib/i18n-form";
import {
  getServiceOverride,
  localizeFieldHint,
  localizeFieldLabel,
  localizeFieldPlaceholder,
  localizeOptions,
  localizeSectionDescription,
  localizeSectionTitle,
} from "@/lib/i18n-service";
import { localePath } from "@/lib/locale-path";

type ApiResult = {
  ok: boolean;
  logId?: string | null;
  result?: unknown;
  persistence?: "saved" | "skipped" | "failed";
  error?: string;
  fieldErrors?: NamingFieldErrors;
  analysisMeta?: {
    officialCandidateCount?: number | null;
    /** 불용문자로 분류되어 후보에서 빠진 글자들. */
    avoidedExcluded?: Array<{
      hanja: string;
      reading: string;
      reason: string;
      categoryLabel: string;
    }>;
    /** 쓸 수 있는 글자가 모두 기피 대상이라 필터를 푼 음절. */
    avoidRestoredSyllables?: string[];
  };
};
// Analysis metadata is returned while the result is being prepared.

function fieldInitialValue(field: FieldConfig) {
  if (field.type === "checkbox") return field.defaultChecked ? "on" : "";
  return field.type === "select" ? field.options?.[0]?.value ?? "" : "";
}

function FieldInput({
  field,
  value,
  onChange,
  invalid = false,
  errorId,
  disabled = false,
}: {
  field: FieldConfig;
  value: string;
  onChange: (value: string) => void;
  invalid?: boolean;
  errorId?: string;
  disabled?: boolean;
}) {
  const disabledClass = disabled ? " disabled:cursor-not-allowed disabled:opacity-50" : "";

  // 켬/끔 하나로 끝나는 항목. 라벨은 바깥에서 이미 그리므로 여기서는 설명만 붙인다.
  if (field.type === "checkbox") {
    return (
      <label className="flex items-start gap-2.5 text-sm leading-6">
        <input
          type="checkbox"
          disabled={disabled}
          checked={value === "on"}
          onChange={(event) => onChange(event.target.checked ? "on" : "")}
          // 첫 줄 글자의 위쪽에 맞춘다. 예전 `mt-1.5`는 줄 높이(24px) 가운데에 맞추는 값이라
          // 설명이 여러 줄일 때 체크박스가 문장보다 내려앉아 보였다.
          className={`mt-0.5 size-4 shrink-0 accent-brand-teal${disabledClass}`}
        />
        <span className="break-keep-all text-muted">{field.placeholder}</span>
      </label>
    );
  }

  if (field.type === "select") {
    return (
      <select
        required={field.required}
        disabled={disabled}
        aria-invalid={invalid}
        aria-describedby={invalid ? errorId : undefined}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`h-11 w-full min-w-0 rounded-lg border bg-background px-3 text-sm outline-none transition ${
          invalid
            ? "border-brand-rose focus:border-brand-rose"
            : "border-line focus:border-foreground"
        }${disabledClass}`}
      >
        {field.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  if (field.type === "textarea") {
    return (
      <textarea
        required={field.required}
        disabled={disabled}
        aria-invalid={invalid}
        aria-describedby={invalid ? errorId : undefined}
        value={value}
        placeholder={field.placeholder}
        rows={4}
        onChange={(event) => onChange(event.target.value)}
        className={`min-h-28 w-full min-w-0 resize-y rounded-lg border bg-background px-3 py-3 text-sm outline-none transition ${
          invalid
            ? "border-brand-rose focus:border-brand-rose"
            : "border-line focus:border-foreground"
        }${disabledClass}`}
      />
    );
  }

  return (
    <input
      required={field.required}
      disabled={disabled}
      aria-invalid={invalid}
      aria-describedby={invalid ? errorId : undefined}
      value={value}
      placeholder={field.placeholder}
      onChange={(event) => onChange(event.target.value)}
      className={`h-11 w-full min-w-0 rounded-lg border bg-background px-3 text-sm outline-none transition ${
        invalid
          ? "border-brand-rose focus:border-brand-rose"
          : "border-line focus:border-foreground"
      }${disabledClass}`}
    />
  );
}

function selectedCountryFromValues(values: Record<string, string>) {
  return getCountryOption(values.country ?? values.targetCountry);
}

function resolveMotivation(
  values: Record<string, string>,
  country: CountryOption | undefined,
) {
  const selected = values.nameMotivation;

  if (selected === "auto_by_country") {
    return country?.suggestedMotivation ?? "general";
  }

  return selected || "general";
}

/**
 * 한글만 받는 칸. 한자 매핑 흐름의 성·이름·돌림자 글자다.
 *
 * 조합 중인 자모(ㄱ·ㅏ)까지 허용해야 한다. 완성형만 통과시키면 한글 IME로 "홍"을 치는 동안
 * "ㅎ" 단계에서 글자가 지워져 아무것도 못 쓴다. 완성형 검사는 제출 때 한 번 더 한다.
 */
const hangulOnlyFields = new Set(["familyName", "givenNameHangul", "generationSyllable"]);

const DEFAULT_ANALYSIS_AD_SECONDS = 10;
const HANJA_ANALYSIS_AD_SECONDS = 15;

const resultCandidateCount = (result: unknown) => cappedCandidateCount(result, 5);

// 초안 보존 시간. 결과 페이지에서 "입력 수정"으로 돌아오는 흐름은 살리되,
// 한참 뒤 다시 방문했을 때 옛 입력이 계속 남아 있는 문제를 막는다.
const DRAFT_TTL_MS = 60 * 60 * 1000;

function persistDraft(storageKey: string, values: Record<string, string>) {
  sessionStorage.setItem(
    storageKey,
    JSON.stringify({ values, savedAt: Date.now() }),
  );
}

function restoredDraftValues(
  initialValues: Record<string, string>,
  storageKey: string,
) {
  if (typeof window === "undefined") return initialValues;
  const rawDraft = sessionStorage.getItem(storageKey);
  if (!rawDraft) return initialValues;

  try {
    const parsedDraft = JSON.parse(rawDraft) as Record<string, unknown>;
    const savedAt =
      typeof parsedDraft.savedAt === "number" ? parsedDraft.savedAt : null;
    const draftValues =
      parsedDraft.values && typeof parsedDraft.values === "object"
        ? (parsedDraft.values as Record<string, unknown>)
        : null;
    // 구버전(평면 객체) 초안이거나 보존 시간이 지난 초안은 버린다.
    if (!savedAt || !draftValues || Date.now() - savedAt > DRAFT_TTL_MS) {
      sessionStorage.removeItem(storageKey);
      return initialValues;
    }
    const restored = Object.fromEntries(
      Object.keys(initialValues).flatMap((fieldName) =>
        typeof draftValues[fieldName] === "string"
          ? [[fieldName, draftValues[fieldName]]]
          : [],
      ),
    ) as Record<string, string>;
    return { ...initialValues, ...restored };
  } catch {
    sessionStorage.removeItem(storageKey);
    return initialValues;
  }
}

export function NamingForm({
  service,
  locale,
}: {
  service: ServiceConfig;
  locale: Locale;
}) {
  const router = useRouter();
  // 오퍼월이 도는 방문이면 false. 판정 중에는 null이라 제출을 잠깐 막는다.
  const selfGateNeeded = useSelfGateNeeded();
  const isHangulTransliteration = service.slug === "global-name-to-hangul";
  // 한글 발음 표기는 API에서는 GLOBAL_TO_KOREAN을 재사용하지만,
  // 통계(site_events)에서는 별도 서비스로 구분해 집계한다.
  const analyticsServiceType = isHangulTransliteration
    ? "GLOBAL_NAME_TO_HANGUL"
    : service.serviceType;
  const isHanjaMeaning = service.serviceType === "HANJA_MEANING_MATCH";
  const analysisAdSeconds = isHanjaMeaning
    ? HANJA_ANALYSIS_AD_SECONDS
    : DEFAULT_ANALYSIS_AD_SECONDS;
  const isKoreanToGlobal = service.serviceType === "KOREAN_TO_GLOBAL";
  const isGlobalToKorean =
    service.serviceType === "GLOBAL_TO_KOREAN" && !isHangulTransliteration;
  const usesDedicatedResultPage =
    isHanjaMeaning || isKoreanToGlobal || isGlobalToKorean;
  // 외국인 대상 서비스(GLOBAL_TO_KOREAN: 한국 이름 만들기·발음 표기)만 로케일에 따라 번역한다.
  // 한국어 대상 서비스는 항상 ko를 사용해 기존 한국어 문구를 그대로 유지한다.
  const isForeignAudience = service.serviceType === "GLOBAL_TO_KOREAN";
  const t = getFormCopy(isForeignAudience ? locale : "ko");
  // 외국인 대상 서비스일 때만 폼 설정(섹션 설명·필드 라벨·옵션) 로케일 오버라이드를 적용한다.
  const serviceOverride = isForeignAudience ? getServiceOverride(locale) : null;
  const initialValues = useMemo(() => {
    const preferredNameLocale =
      isHangulTransliteration && getCountryOptionsForLocale(locale).length > 0
        ? locale
        : "en";
    const entries = service.sections.flatMap((section) =>
      section.fields.map((field) => {
        if (isHangulTransliteration && field.name === "originalNameLanguage") {
          return [field.name, preferredNameLocale];
        }

        if (isHangulTransliteration && field.name === "country") {
          return [
            field.name,
            getCountryOptionsForLocale(preferredNameLocale)[0]?.value ?? "",
          ];
        }

        // 외국인 대상 서비스(한국 이름 만들기)도 랜딩에서 고른 언어(lang)에 맞는 국가를 기본 선택한다.
        if (!isHangulTransliteration && field.name === "country") {
          const localizedCountry = getCountryOptionsForLocale(locale)[0]?.value;
          if (localizedCountry) return [field.name, localizedCountry];
        }

        return [field.name, fieldInitialValue(field)];
      }),
    );

    return Object.fromEntries(entries) as Record<string, string>;
  }, [isHangulTransliteration, locale, service.sections]);
  // 외국인 대상 서비스는 로케일별로 초안을 분리해, 랜딩에서 다른 언어를 고르면 새 기본값(국가 프리셋)이 적용되게 한다.
  const draftStorageKey = `naminglink:form-draft:${service.slug}${
    isForeignAudience ? `:${locale}` : ""
  }`;

  // SSR과 클라이언트 첫 렌더가 동일하도록 초기값은 결정적인 initialValues를 쓰고,
  // sessionStorage 초안 복원은 마운트 후 useEffect에서 적용해 hydration 불일치를 막는다.
  const [values, setValues] = useState(initialValues);
  useEffect(() => {
    void Promise.resolve().then(() => {
      const restored = restoredDraftValues(initialValues, draftStorageKey);
      setValues((current) =>
        Object.keys(restored).some((key) => restored[key] !== current[key])
          ? restored
          : current,
      );
    });
    // 마운트 시 한 번만 초안을 복원한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draftStorageKey]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<NamingFieldErrors>({});
  const [result, setResult] = useState<ApiResult | null>(null);
  const [analysisCountdown, setAnalysisCountdown] = useState(0);
  const [officialCandidateCount, setOfficialCandidateCount] =
    useState<number | null>(null);
  const [avoidedExcluded, setAvoidedExcluded] = useState<
    NonNullable<ApiResult["analysisMeta"]>["avoidedExcluded"]
  >([]);
  const [avoidRestored, setAvoidRestored] = useState<string[]>([]);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [saveResult, setSaveResult] = useState(false);
  const [legalDocument, setLegalDocument] = useState<LegalDocument | null>(null);
  const selectedCountry = selectedCountryFromValues(values);
  const candidateCount = result?.result
    ? resultCandidateCount(result.result)
    : 0;
  // 몇 개가 열려 있는지는 후보 자체에서 센다. 예전에는 별도 상태(`revealedCount`)로 세었는데,
  // 실제로 여는 일은 서버가 하므로 그 상태가 서버와 어긋날 수 있었다.
  const revealedCount = unlockedCandidateCount(result?.result);

  /** 광고를 본 대가로 잠긴 첫 후보 하나를 연다. 실패는 패널이 문구로 알린다. */
  async function revealNextCandidate(ticket: string | null) {
    const current = result?.result;
    if (!current) return;
    const opened = await unsealNextCandidate(current, ticket);
    setResult((previous) => (previous ? { ...previous, result: opened } : previous));
  }

  /** 결제로 잠긴 후보를 한 번에 연다. */
  async function revealAllCandidates(order: { orderId: string; paymentId: string }) {
    const current = result?.result;
    if (!current) return;
    const opened = await unsealAllCandidates(current, { order });
    setResult((previous) => (previous ? { ...previous, result: opened } : previous));
  }

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;

    void supabase.auth.getSession().then(({ data }) => {
      setIsSignedIn(Boolean(data.session?.user));
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const signedIn = Boolean(session?.user);
      setIsSignedIn(signedIn);
      if (!signedIn) setSaveResult(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setResult(null);

    if (isHanjaMeaning) {
      const validationErrors = validateHanjaMeaningInput(values);
      setFieldErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) {
        setError(t.errorCheckInput);
        return;
      }
    } else {
      setFieldErrors({});
    }

    if (!agreedToTerms || !agreedToPrivacy) {
      setError(t.errorConsent);
      return;
    }

    let accessToken: string | null = null;
    if (saveResult) {
      const supabase = getSupabaseBrowserClient();
      const { data } = (await supabase?.auth.getSession()) ?? {
        data: { session: null },
      };
      accessToken = data.session?.access_token ?? null;

      if (!accessToken) {
        setSaveResult(false);
        setIsSignedIn(false);
        setError(t.errorLoginToSave);
        return;
      }
    }

    setOfficialCandidateCount(null);
    setLoading(true);
    trackAnalytics({ eventType: "ANALYSIS_STARTED", locale, serviceType: analyticsServiceType });
    let adStartedAt: number | null = null;
    let countdownTimer: number | null = null;
    let adWindowComplete = true;
    const startAdWindow = () => {
      if (adStartedAt !== null) return;

      adStartedAt = Date.now();
      adWindowComplete = false;
      setAnalysisCountdown(analysisAdSeconds);
      trackAdEvent({ eventType: "IMPRESSION", slotKey: "analysis_wait", locale, serviceType: analyticsServiceType });
      countdownTimer = window.setInterval(() => {
        if (adStartedAt === null) return;
        const elapsed = Math.floor((Date.now() - adStartedAt) / 1000);
        setAnalysisCountdown(Math.max(0, analysisAdSeconds - elapsed));
      }, 250);
    };
    const completeAdWindow = async () => {
      if (adWindowComplete || adStartedAt === null) return;

      const remaining = analysisAdSeconds * 1000 - (Date.now() - adStartedAt);
      if (remaining > 0) {
        await new Promise((resolve) => window.setTimeout(resolve, remaining));
      }
      adWindowComplete = true;
      setAnalysisCountdown(0);
    };

    // 오퍼월이 도는 방문에서는 우리 게이트를 띄우지 않는다. 한 번의 이용에 광고 관문이 둘이면
    // 이용자가 두 번 붙잡힌다. 판정 근거는 `lib/offerwall.ts`에 적어 두었다.
    // completeAdWindow는 adStartedAt이 null이면 그냥 돌아가므로 아래 호출들은 손댈 것이 없다.
    if (selfGateNeeded) startAdWindow();

    try {
      const countryProfile = selectedCountry
        ? {
            code: selectedCountry.value,
            label: selectedCountry.label,
            defaultLocale: selectedCountry.locale,
            languageName: selectedCountry.languageName,
            localNameHint: selectedCountry.localNameHint,
            suggestedMotivation: selectedCountry.suggestedMotivation ?? null,
            motivationNote: selectedCountry.motivationNote ?? null,
            resolvedMotivation: resolveMotivation(values, selectedCountry),
          }
        : null;

      const inputFactors = {
        ...values,
        // KOREAN_TO_GLOBAL은 사용자가 한국인이므로 설명 언어는 항상 한국어다.
        // 대상 언어(targetLanguage)를 outputLanguage로 넘기면 모델이 설명까지 그 언어로 써 버린다.
        // "auto"(기본값)는 truthy라 그대로 두면 서버가 IP로 언어를 추정해, ja UI로 보면서
        // 한국 IP면 설명이 한국어가 되는 사고가 난다 — 사용자가 실제로 읽고 있는 UI 로케일로 확정한다.
        outputLanguage:
          isHanjaMeaning || service.serviceType === "KOREAN_TO_GLOBAL"
            ? "ko"
            : values.targetLanguage ||
              (values.outputLanguage && values.outputLanguage !== "auto"
                ? values.outputLanguage
                : locale),
        selectedAddOns: [],
        serviceSlug: service.slug,
        countryProfile,
        legalConsent: {
          termsVersion: "2026-07-09",
          privacyVersion: "2026-07-09",
          consentedAt: new Date().toISOString(),
        },
      };
      persistDraft(draftStorageKey, values);
      const response = await fetch("/api/naming", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        },
        body: JSON.stringify({
          serviceType: service.serviceType,
          inputFactors,
          saveResult,
        }),
      });

      // Candidate count is available after the response body is parsed.
      // It is shown during any remaining part of the ten-second analysis window.

      const payload = (await response.json()) as ApiResult; setOfficialCandidateCount(payload.analysisMeta?.officialCandidateCount ?? null); setAvoidedExcluded(payload.analysisMeta?.avoidedExcluded ?? []); setAvoidRestored(payload.analysisMeta?.avoidRestoredSyllables ?? []);

      if (!response.ok || !payload.ok) {
        if (payload.fieldErrors) setFieldErrors(payload.fieldErrors);
        throw new Error(payload.error || t.errorRequestFailed);
      }

      const hasRewardableResult =
        !isHanjaMeaning || resultCandidateCount(payload.result) > 0;

      await completeAdWindow();

      trackAnalytics({ eventType: "ANALYSIS_COMPLETED", locale, serviceType: analyticsServiceType });
      if (hasRewardableResult) {
        trackAdEvent({ eventType: "REWARD_GRANTED", slotKey: "analysis_wait", locale, serviceType: analyticsServiceType });
      }

      if (isHangulTransliteration && payload.result) {
        const resultId = payload.logId ?? crypto.randomUUID();
        sessionStorage.setItem(
          `naminglink:hangul-result:${resultId}`,
          JSON.stringify({
            result: payload.result,
            logId: payload.logId ?? null,
            persistence: payload.persistence ?? "skipped",
            createdAt: new Date().toISOString(),
            inputFactors,
          }),
        );
        router.push(
          localePath("/global-to-korean/result", locale, `mode=transliteration&id=${encodeURIComponent(resultId)}`),
        );
        return;
      }

      if (isGlobalToKorean && payload.result) {
        const resultId = payload.logId ?? crypto.randomUUID();
        sessionStorage.setItem(
          `naminglink:korean-name-result:${resultId}`,
          JSON.stringify({
            result: payload.result,
            logId: payload.logId ?? null,
            persistence: payload.persistence ?? "skipped",
            createdAt: new Date().toISOString(),
            // 프리미엄 PDF 주문(결과 페이지)에서 원 입력값이 필요하다.
            inputFactors,
          }),
        );
        router.push(
          localePath("/global-to-korean/result", locale, `id=${encodeURIComponent(resultId)}`),
        );
        return;
      }

      if (isHanjaMeaning && payload.result) {
        const resultId = payload.logId ?? crypto.randomUUID();
        sessionStorage.setItem(
          `naminglink:hanja-result:${resultId}`,
          JSON.stringify({
            result: payload.result,
            logId: payload.logId ?? null,
            persistence: payload.persistence ?? "skipped",
            createdAt: new Date().toISOString(),
            inputFactors,
          }),
        );
        router.push(
          localePath("/hanja-meaning/result", locale, `id=${encodeURIComponent(resultId)}`),
        );
        return;
      }

      if (isKoreanToGlobal && payload.result) {
        const resultId = payload.logId ?? crypto.randomUUID();
        sessionStorage.setItem(
          `naminglink:korean-to-global-result:${resultId}`,
          JSON.stringify({
            result: payload.result,
            logId: payload.logId ?? null,
            persistence: payload.persistence ?? "skipped",
            createdAt: new Date().toISOString(),
          }),
        );
        router.push(
          localePath("/korean-to-global/result", locale, `id=${encodeURIComponent(resultId)}`),
        );
        return;
      }

      setResult(payload);
    } catch (caught) {
      trackAnalytics({ eventType: "ANALYSIS_FAILED", locale, serviceType: analyticsServiceType });
      if (!adWindowComplete) await completeAdWindow();
      setError(caught instanceof Error ? caught.message : t.errorGeneric);
    } finally {
      if (countdownTimer !== null) window.clearInterval(countdownTimer);
      setAnalysisCountdown(0);
      setLoading(false);
    }
  }

  function updateField(field: FieldConfig, rawValue: string) {
    // 한글만 받는 칸은 **입력 단계에서** 거른다. 제출할 때 오류로 돌려보내는 것보다, 애초에
    // 안 들어가는 편이 이용자에게 덜 번거롭다. 거름망은 검증(`naming-validation.ts`)과 같은
    // 범위(완성형 한글)를 쓴다 — 둘이 어긋나면 화면에는 들어가는데 제출은 막히는 칸이 생긴다.
    // 검증 자체는 그대로 둔다. 붙여넣기·자동완성·서버 직접 호출은 이 거름망을 지나지 않는다.
    const value = hangulOnlyFields.has(field.name)
      ? rawValue.replace(/[^가-힣ㄱ-ㅎㅏ-ㅣ]/g, "")
      : rawValue;

    setFieldErrors((current) => {
      if (!(field.name in current) && field.name !== "generationNameUsage") {
        return current;
      }

      const next = { ...current };
      delete next[field.name];

      if (field.name === "generationNameUsage") {
        delete next.generationSyllable;
        delete next.generationHanja;
      }

      return next;
    });
    setValues((current) => {
      const next = {
        ...current,
        [field.name]: value,
      };

      if (isHanjaMeaning && field.name === "birthStatus") {
        if (value === "expected") {
          next.birthYear = String(currentYear + 1);
          next.birthMonth = "unknown";
          next.birthDay = "unknown";
          next.birthHour = "unknown";
        } else {
          next.birthYear = String(currentYear);
          next.birthMonth = "01";
          next.birthDay = "01";
          next.birthHour = "unknown";
        }
      }

      if (
        isHangulTransliteration &&
        field.name === "originalNameLanguage"
      ) {
        next.country = getCountryOptionsForLocale(value)[0]?.value ?? "";
      }

      if (field.name === "country" || field.name === "targetCountry") {
        const country = getCountryOption(value);

        if (field.name === "targetCountry" && country && "targetLanguage" in next) {
          next.targetLanguage = country.locale;
        }

        if (country && "outputLanguage" in next) {
          next.outputLanguage = country.locale;
        }
      }

      return next;
    });
  }

  // 초안 저장은 상태 업데이터 밖에서 수행한다(업데이터 내부 부수효과는 StrictMode에서 이중 실행됨).
  useEffect(() => {
    if (values === initialValues) return;
    persistDraft(draftStorageKey, values);
  }, [values, initialValues, draftStorageKey]);

  return (
    <div className="grid gap-6">
      <form id="naming-input-form" onSubmit={onSubmit} className="grid gap-4">
        <div
          className={
            isHangulTransliteration
              ? "grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
              : isGlobalToKorean || isKoreanToGlobal
                ? "grid gap-4 lg:grid-cols-3"
                : isHanjaMeaning
                  ? "grid gap-4 lg:grid-cols-2"
                  : "grid gap-4"
          }
        >
          {service.sections.map((section, sectionIndex) => (
            <section
              key={section.title}
              className={`rounded-lg border border-line bg-surface p-5 shadow-sm ${
                isHanjaMeaning && sectionIndex >= 2 ? "lg:col-span-2" : ""
              }`}

            >
              <h2 className="text-lg font-semibold">
                {localizeSectionTitle(serviceOverride, service.slug, section.title)}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                {localizeSectionDescription(
                  serviceOverride,
                  service.slug,
                  section.title,
                  section.description,
                )}
              </p>

              <div
                className={
                  isGlobalToKorean || isKoreanToGlobal
                    ? "mt-5 grid gap-4"
                    : isHangulTransliteration
                      ? "mt-5 grid gap-x-4 gap-y-6 md:grid-cols-2"
                      : isHanjaMeaning && sectionIndex === 0
                        // 3열은 좁은 화면에서 한 칸이 100px도 안 된다. 모바일은 세로로 쌓는다.
                        ? "mt-5 grid gap-4 sm:grid-cols-[minmax(0,0.88fr)_minmax(0,1.08fr)_minmax(0,1.04fr)]"
                        : isHanjaMeaning && sectionIndex === 1
                          ? "mt-5 grid grid-cols-6 gap-4 md:grid-cols-4"
                          : "mt-5 grid gap-4 md:grid-cols-2"
                }
              >
                {section.fields.map((field) => (
                  (() => {
                    const fieldError = fieldErrors[field.name];
                    const fieldErrorId = `${service.slug}-${field.name}-error`;
                    const localizedLabel = localizeFieldLabel(
                      serviceOverride,
                      service.slug,
                      field.name,
                      field.label,
                    );
                    const localizedHint = localizeFieldHint(
                      serviceOverride,
                      service.slug,
                      field.name,
                      field.hint,
                    );
                    // 돌림자를 '사용함'으로 선택했을 때만 돌림자 글자·한자 입력을 허용한다.
                    const fieldDisabled =
                      (field.name === "generationSyllable" ||
                        field.name === "generationHanja") &&
                      values.generationNameUsage !== "used";

                    return (
                  <label
                    key={field.name}
                    className={`min-w-0 ${
                      isHanjaMeaning &&
                            sectionIndex === 1 &&
                            field.name === "birthStatus"
                          ? "col-span-6 grid gap-2 md:col-span-4"
                          : isHanjaMeaning &&
                              sectionIndex === 1 &&
                              (field.name === "calendarType" || field.name === "birthYear")
                          ? "col-span-3 grid gap-2 md:col-span-1"
                          : isHanjaMeaning &&
                              sectionIndex === 1 &&
                              field.name === "birthHour"
                            ? "col-span-2 grid gap-2 md:col-span-4"
                            : isHanjaMeaning && sectionIndex === 1
                              ? "col-span-2 grid gap-2 md:col-span-1"
                              : isHanjaMeaning &&
                                  sectionIndex === 2 &&
                                  field.type === "textarea"
                                ? "grid gap-2 rounded-lg border border-line bg-surface-strong/60 p-4 [&_textarea]:border-foreground/20 [&_textarea]:bg-surface"
                              : isHanjaMeaning &&
                                    sectionIndex === 2 &&
                                    field.type === "checkbox"
                                  // 두 체크박스가 2열로 나란히 선다. 항목명 줄 수가 다르면
                                  // ("불용문자 후보에서 빼기" 1줄 / "논쟁적인 글자까지 제외 (고급)" 2줄)
                                  // 오른쪽 설명만 아래로 밀린다. subgrid로 두 열이 같은 행을
                                  // 공유하게 해서 항목명 줄과 설명 줄을 각각 맞춘다.
                                  ? "grid gap-2 md:row-span-2 md:grid-rows-subgrid"
                              : field.type === "textarea" && !isGlobalToKorean && !isKoreanToGlobal
                                    ? "grid gap-2 md:col-span-2"
                                    : "grid gap-2"
                    }`}
                  >
                    <span className="text-sm font-medium">{localizedLabel}</span>
                    <FieldInput
                      field={(() => {
                        const resolvedOptions =
                          isHangulTransliteration && field.name === "country"
                            ? getCountryOptionsForLocale(values.originalNameLanguage)
                            : isGlobalToKorean && field.name === "country"
                              ? getCountryOptionsForLocale(locale)
                              : isKoreanToGlobal && field.name === "targetLanguage"
                                ? getLanguageOptionsForCountry(values.targetCountry)
                                : field.options;
                        // 본명 입력 예시는 선택된 국가의 현지 이름 예시를 따라간다.
                        // (모든 언어에서 'Daniel Brooks'가 나오던 문제 방지 — 국가를 바꾸면 예시도 바뀐다.)
                        const resolvedPlaceholder =
                          isForeignAudience &&
                          field.name === "originalName" &&
                          selectedCountry?.localNameHint
                            ? selectedCountry.localNameHint
                            : localizeFieldPlaceholder(
                                serviceOverride,
                                service.slug,
                                field.name,
                                field.placeholder,
                              );
                        return {
                          ...field,
                          label: localizedLabel,
                          placeholder: resolvedPlaceholder,
                          options: resolvedOptions
                            ? localizeOptions(serviceOverride, resolvedOptions)
                            : resolvedOptions,
                        };
                      })()}
                      value={values[field.name] ?? ""}
                      onChange={(value) => updateField(field, value)}
                      invalid={Boolean(fieldError)}
                      errorId={fieldErrorId}
                      disabled={fieldDisabled}
                    />
                    {fieldError ? (
                      <span
                        id={fieldErrorId}
                        role="alert"
                        className="text-xs leading-5 text-brand-rose"
                      >
                        {fieldError}
                      </span>
                    ) : null}
                    {(field.name === "country" ||
                      field.name === "targetCountry") &&
                    selectedCountry &&
                    !isHangulTransliteration &&
                    !isKoreanToGlobal ? (
                      <span className="text-xs leading-5 text-muted">
                        {t.countryHint({
                          languageName: selectedCountry.languageName,
                          localNameHint: selectedCountry.localNameHint,
                          motivationNote: selectedCountry.motivationNote,
                        })}
                      </span>
                    ) : null}
                    {localizedHint ? (
                      <span className="text-xs leading-5 text-muted">
                        {localizedHint.split("\n").map((line, index) => (
                          <span
                            key={`${field.name}-hint-${index}`}
                            className={index === 0 ? "block" : "block pl-4"}
                          >
                            {line.trimStart()}
                          </span>
                        ))}
                      </span>
                    ) : null}
                  </label>
                    );
                  })()
                ))}
              </div>
            </section>
          ))}
          {isHangulTransliteration ? (
            <aside className="rounded-lg border border-brand-teal/25 bg-surface-strong p-5 shadow-sm lg:col-span-1">
              <h2 className="text-lg font-semibold">
                {t.transliterationStepsTitle}
              </h2>
              <ol className="mt-5 grid gap-4">
                {t.transliterationSteps.map(([title, description], index) => (
                  <li key={title} className="grid grid-cols-[2rem_1fr] gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-brand-teal text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{title}</p>
                      <p className="mt-1 text-xs leading-5 text-muted">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </aside>
          ) : null}
        </div>


        <section className="rounded-lg border border-line bg-surface p-5 shadow-sm">
          {/* 이용 안내. **동의 항목 위**에 선을 긋고 둔다(사용자 결정).

              아래에 두면 그 링크가 동의 영역의 일부처럼 읽힌다 — 동의는 법적 의미가 있는
              자리라 경계가 분명해야 한다. 위에 두고 선으로 가르면 그 혼동이 없다.

              데스크탑에서 이 칸은 옆 광고(280px)보다 내용이 짧아 아래가 99px 비어 있었다(실측).
              여기에 한 줄이 들어가면 그 빈 자리도 줄어든다.

              한국어에서만 건다 — 인명용 한자는 한국 제도라 다른 언어판에서는 읽을 수 없다. */}
          {locale === "ko" ? (
            <div className="mb-5 border-b border-line pb-4">
              <Link
                href={localePath("/guide", locale, `from=${service.slug}`)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-teal underline decoration-brand-teal/30 underline-offset-4 transition hover:decoration-brand-teal"
              >
                이름에 쓰는 한자 안내
                <ArrowRight aria-hidden="true" size={14} />
              </Link>
              <p className="mt-1 text-xs leading-5 text-muted">
                인명용 한자가 무엇인지, 어떤 근거로 후보를 고르는지 정리했습니다.
              </p>
            </div>
          ) : null}
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,26rem)]">
            <div>
              <h2 className="text-lg font-semibold">{t.consentTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                {t.consentIntro}
                <span className="block sm:inline">{t.consentIntroSaved}</span>
              </p>
              <div className="mt-4 grid gap-3">
                <label className="flex items-start gap-3 text-sm leading-6">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(event) => setAgreedToTerms(event.target.checked)}
                    className="mt-1 h-4 w-4"
                  />
                  <span>
                    <button
                      type="button"
                      onClick={() => setLegalDocument("terms")}
                      className="font-semibold text-foreground underline decoration-line underline-offset-4"
                    >
                      {t.termsLink}
                    </button>
                    {t.agreeToTermsSuffix}
                  </span>
                </label>
                <label className="flex items-start gap-3 text-sm leading-6">
                  <input
                    type="checkbox"
                    checked={agreedToPrivacy}
                    onChange={(event) => setAgreedToPrivacy(event.target.checked)}
                    className="mt-1 h-4 w-4"
                  />
                  <span>
                    <button
                      type="button"
                      onClick={() => setLegalDocument("privacy")}
                      className="font-semibold text-foreground underline decoration-line underline-offset-4"
                    >
                      {t.privacyLink}
                    </button>
                    {t.agreeToPrivacySuffix}
                  </span>
                </label>
                {isSignedIn ? (
                  <label className="flex items-start gap-3 rounded-lg border border-brand-teal/25 bg-background p-3 text-sm leading-6">
                    <input
                      type="checkbox"
                      checked={saveResult}
                      onChange={(event) => setSaveResult(event.target.checked)}
                      className="mt-1 h-4 w-4"
                    />
                    <span>
                      <strong className="block font-semibold text-foreground">
                        {t.saveResultLabel}
                      </strong>
                      <span className="text-muted">
                        {t.saveResultHint}
                      </span>
                    </span>
                  </label>
                ) : (
                  <p className="rounded-lg border border-line bg-background p-3 text-sm leading-6 text-muted">
                    {t.guestNoSavePrefix}
                    <Link
                      href={localePath("/login", locale)}
                      className="font-semibold text-foreground underline decoration-line underline-offset-4"
                    >
                      {t.loginLink}
                    </Link>
                    {t.guestNoSaveSuffix}
                  </p>
                )}
              </div>
            </div>
            <div className="flex border-t border-line pt-5 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
              <AdBanner
                variant="inline"
                slotKey="consent_card"
                label={t.adConsentLabel}
              />
            </div>
          </div>
        </section>

        {/* **애드센스 상태로 제출을 막지 않는다.** 예전에는 `!adsEnabled`면 버튼을 잠갔다.
            "버튼은 광고를 보고 시작한다는데 띄울 광고가 없다"는 이유였는데, 관문에서
            애드센스를 걷어낸 지금은 그 전제가 없다 — 셀프 광고가 항상 뜨고 대기 시간도 그대로
            돌아 "1광고 1결과"가 성립한다.

            잠금을 남기면 파급이 너무 크다. `adsEnabled`는 퍼블리셔 ID 형식이 맞아야 참이라
            **오타 하나로도 조용히 거짓이 되고, 그 순간 네 서비스의 제출이 전부 죽는다.**
            심사 반려로 ID를 빼는 경우도 같다. 광고 설정 실수가 서비스 정지가 되면 안 된다.
            (심사 중에 버튼이 안 눌리는 사이트를 검토자가 보는 것도 그 자체로 위험하다.) */}
        <button
          type="submit"
          disabled={loading || selfGateNeeded === null}
          // 문구가 긴 로케일("광고 확인 후 한글 발음 분석 시작")이 좁은 화면에서 두 줄로
          // 넘어가지 않도록 모바일만 글자를 한 단계 줄인다.
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-3 text-[13px] font-semibold text-background transition hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-60 sm:px-4 sm:text-sm"
        >
          <Send aria-hidden="true" size={17} />
          {isHangulTransliteration ? t.submitTransliteration : t.submitDefault}
        </button>

        {error ? (
          <p className="rounded-lg border border-brand-rose/30 bg-brand-rose/10 px-3 py-2 text-sm text-brand-rose">
            {error}
          </p>
        ) : null}
      </form>

      <section className="grid content-start gap-4">
        {result?.result && !isHangulTransliteration && !usesDedicatedResultPage ? (
          <div className="grid gap-4">
            <ResultStorageNotice persistence={result.persistence} />
            <div className="rounded-lg border border-line bg-surface p-4 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold text-brand-teal">{t.analysisDone}</p>
                <a
                  href="#naming-input-form"
                  className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-line bg-background px-3 text-sm font-semibold"
                >
                  <ArrowLeft aria-hidden="true" size={16} />
                  {t.editInput}
                </a>
              </div>
              <p className="mt-1 text-sm leading-6 text-muted">
                {t.previewNote}
              </p>
            </div>
            <ResultCard
              service={service}
              result={result.result}
              locale={isForeignAudience ? locale : "ko"}
            />
            <CandidateUnlockPanel
              revealedCount={revealedCount}
              totalCount={candidateCount}
              locale={locale}
              serviceType={service.serviceType}
              onUnlock={revealNextCandidate}
              onUnlockAll={revealAllCandidates}
            />
            <ResultAddOnServices service={service} />
          </div>
        ) : null}
      </section>
      {loading ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.adDialogLabel}
          className="fixed inset-0 z-50 grid place-items-center bg-foreground/55 p-4 backdrop-blur-sm"
        >
          <div className="grid w-full max-w-xl gap-4 rounded-xl border border-line bg-background p-5 shadow-2xl sm:p-6">
            <div>
              <p className="text-sm font-semibold text-brand-teal">
                {isHanjaMeaning ? "광고와 함께 진행하는 한자 이름 분석" : t.loadingEyebrow}
              </p>
              <h2 className="mt-1 text-lg font-semibold">
                {isHanjaMeaning
                  ? "부모님의 바람이 오래 남을 한자 이름을 정성껏 찾고 있습니다"
                  : t.loadingTitle}
              </h2>
            </div>
            {/* **이 자리에 애드센스 표시 광고를 두지 않는다.** 예전에는 여기에 `analysis_wait`
                슬롯이 있었는데, 두 가지가 겹쳐 정책에 걸린다.

                  ① 이 상자는 닫을 수 없는 전면 오버레이다(role="dialog" · fixed inset-0).
                     구글은 표시 광고를 이런 오버레이·팝업에 싣는 것을 금지한다.
                  ② 결과를 보려면 광고를 보고 기다려야 한다 — 즉 보상형이다. 애드센스 표시
                     광고는 콘텐츠 해제의 대가로 쓸 수 없고, 보상형은 GAM·AdMob의 보상형
                     포맷으로만 허용된다.

                게이트의 대가는 **오퍼월(진입)과 GAM 보상형(후보 열기)**이 맡고, 그 둘이 없을
                때는 셀프 광고가 자리를 채운다. 게이트를 없애거나 기다림을 건너뛰지 않는다 —
                채울 것만 바꾼다. 애드센스 표시 광고는 모달 밖 일반 자리에만 남는다. */}
            <SelfAdCard />
            <p className="text-center text-sm font-medium text-brand-teal">
              {analysisCountdown > 0
                ? isHanjaMeaning
                  ? `광고와 한자 분석을 함께 진행하고 있습니다 · ${analysisCountdown}초`
                  : t.loadingCountdown(analysisCountdown)
                : isHanjaMeaning
                  ? "광고 확인 완료 · 한자 분석 결과를 마무리하고 있습니다"
                  : t.loadingDone}
            </p>
            <AILoadingSteps
              variant={
                isHanjaMeaning
                  ? "hanja"
                  : service.serviceType === "KOREAN_TO_GLOBAL"
                    ? "global"
                    : "general"
              }
              locale={isForeignAudience ? locale : "ko"}
              candidateCount={officialCandidateCount}
            />

            {/* 무엇이 왜 빠졌는지 밝힌다. 이유 없이 후보가 줄면 이용자는 흔한 글자가 없는 것을
                오류로 여기고, 그 글자를 원하는 사람은 되돌릴 방법도 모른다. */}
            {isHanjaMeaning && avoidRestored.length > 0 ? (
              <p className="break-keep-all mt-3 text-xs leading-5 text-muted">
                {avoidRestored.join("·")} 음절은 쓸 수 있는 한자가 모두 기피 대상이라,
                제외하지 않고 그대로 보여 드립니다.
              </p>
            ) : null}

            {isHanjaMeaning && avoidedExcluded && avoidedExcluded.length > 0 ? (
              <details className="mt-4 rounded-lg border border-line bg-background px-4 py-3">
                <summary className="cursor-pointer text-sm font-semibold">
                  후보에서 뺀 불용문자 {avoidedExcluded.length}자
                </summary>
                <p className="mt-2 text-xs leading-5 text-muted">
                  법적 제한이 아니라 전통 성명학의 관습입니다. 빼지 않고 표시만 받으시려면 입력
                  화면에서 &ldquo;불용문자 후보에서 빼기&rdquo;를 끄고 다시 조회하십시오.
                </p>
                <ul className="mt-2 grid gap-1.5 text-xs leading-5 text-muted">
                  {avoidedExcluded.map((item) => (
                    <li key={item.hanja} className="break-keep-all">
                      <span className="font-semibold text-foreground">
                        {item.hanja}({item.reading})
                      </span>{" "}
                      · {item.categoryLabel} — {item.reason}
                    </li>
                  ))}
                </ul>
              </details>
            ) : null}
          </div>
        </div>
      ) : null}
      {legalDocument ? (
        <LegalModal
          kind={legalDocument}
          locale={isForeignAudience ? locale : "ko"}
          onClose={() => setLegalDocument(null)}
        />
      ) : null}
    </div>
  );
}
