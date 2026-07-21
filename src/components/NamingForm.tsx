"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { ArrowLeft, Send } from "lucide-react";
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
import { AILoadingSteps } from "@/components/AILoadingSteps";
import { CandidateUnlockPanel } from "@/components/CandidateUnlockPanel";
import { ResultAddOnServices } from "@/components/ResultAddOnServices";
import { ResultCard } from "@/components/ResultCard";
import { ResultStorageNotice } from "@/components/ResultStorageNotice";
import { LegalModal, type LegalDocument } from "@/components/LegalModal";
import { trackAdEvent, trackAnalytics } from "@/lib/analytics-client";
import {
  validateHanjaMeaningInput,
  type NamingFieldErrors,
} from "@/lib/naming-validation";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import { cappedCandidateCount } from "@/lib/candidate-count";
import { getFormCopy } from "@/lib/i18n-form";
import {
  getServiceOverride,
  localizeFieldHint,
  localizeFieldLabel,
  localizeFieldPlaceholder,
  localizeOptions,
  localizeSectionDescription,
} from "@/lib/i18n-service";

type ApiResult = {
  ok: boolean;
  logId?: string | null;
  result?: unknown;
  persistence?: "saved" | "skipped" | "failed";
  error?: string;
  fieldErrors?: NamingFieldErrors; analysisMeta?: { officialCandidateCount?: number | null };
};
// Analysis metadata is returned while the result is being prepared.

function fieldInitialValue(field: FieldConfig) {
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
  const isHangulTransliteration = service.slug === "global-name-to-hangul";
  const isHanjaMeaning = service.serviceType === "HANJA_MEANING_MATCH";
  const analysisAdSeconds = isHanjaMeaning
    ? HANJA_ANALYSIS_AD_SECONDS
    : DEFAULT_ANALYSIS_AD_SECONDS;
  const isKoreanToGlobal = service.serviceType === "KOREAN_TO_GLOBAL";
  const isGlobalToKorean =
    service.serviceType === "GLOBAL_TO_KOREAN" && !isHangulTransliteration;
  const usesDedicatedResultPage = isHanjaMeaning || isKoreanToGlobal;
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
  const [revealedCount, setRevealedCount] = useState(1);
  const [analysisCountdown, setAnalysisCountdown] = useState(0);
  const [officialCandidateCount, setOfficialCandidateCount] =
    useState<number | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [saveResult, setSaveResult] = useState(false);
  const [legalDocument, setLegalDocument] = useState<LegalDocument | null>(null);
  const selectedCountry = selectedCountryFromValues(values);
  const candidateCount = result?.result
    ? resultCandidateCount(result.result)
    : 0;

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
    setRevealedCount(1);

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
    trackAnalytics({ eventType: "ANALYSIS_STARTED", locale, serviceType: service.serviceType });
    let adStartedAt: number | null = null;
    let countdownTimer: number | null = null;
    let adWindowComplete = true;
    const startAdWindow = () => {
      if (adStartedAt !== null) return;

      adStartedAt = Date.now();
      adWindowComplete = false;
      setAnalysisCountdown(analysisAdSeconds);
      trackAdEvent({ eventType: "IMPRESSION", slotKey: "analysis_wait", locale, serviceType: service.serviceType });
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

    startAdWindow();

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
        outputLanguage:
          isHanjaMeaning || service.serviceType === "KOREAN_TO_GLOBAL"
            ? "ko"
            : values.targetLanguage || values.outputLanguage || locale,
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

      const payload = (await response.json()) as ApiResult; setOfficialCandidateCount(payload.analysisMeta?.officialCandidateCount ?? null);

      if (!response.ok || !payload.ok) {
        if (payload.fieldErrors) setFieldErrors(payload.fieldErrors);
        throw new Error(payload.error || t.errorRequestFailed);
      }

      const hasRewardableResult =
        !isHanjaMeaning || resultCandidateCount(payload.result) > 0;

      await completeAdWindow();

      trackAnalytics({ eventType: "ANALYSIS_COMPLETED", locale, serviceType: service.serviceType });
      if (hasRewardableResult) {
        trackAdEvent({ eventType: "REWARD_GRANTED", slotKey: "analysis_wait", locale, serviceType: service.serviceType });
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
          `/global-to-korean/result?lang=${locale}&id=${encodeURIComponent(resultId)}`,
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
          `/hanja-meaning/result?lang=${locale}&id=${encodeURIComponent(resultId)}`,
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
          `/korean-to-global/result?lang=${locale}&id=${encodeURIComponent(resultId)}`,
        );
        return;
      }

      setResult(payload);
    } catch (caught) {
      trackAnalytics({ eventType: "ANALYSIS_FAILED", locale, serviceType: service.serviceType });
      if (!adWindowComplete) await completeAdWindow();
      setError(caught instanceof Error ? caught.message : t.errorGeneric);
    } finally {
      if (countdownTimer !== null) window.clearInterval(countdownTimer);
      setAnalysisCountdown(0);
      setLoading(false);
    }
  }

  function updateField(field: FieldConfig, value: string) {
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
              <h2 className="text-lg font-semibold">{section.title}</h2>
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
                        ? "mt-5 grid grid-cols-[minmax(0,0.88fr)_minmax(0,1.08fr)_minmax(0,1.04fr)] gap-4"
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
                            : isKoreanToGlobal && field.name === "targetLanguage"
                              ? getLanguageOptionsForCountry(values.targetCountry)
                              : field.options;
                        return {
                          ...field,
                          label: localizedLabel,
                          placeholder: localizeFieldPlaceholder(
                            serviceOverride,
                            service.slug,
                            field.name,
                            field.placeholder,
                          ),
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
                본인 이름이 한글로 바뀌는 단계
              </h2>
              <ol className="mt-5 grid gap-4">
                {[
                  ["본명 확인", "입력한 원래 철자와 음절을 확인합니다."],
                  [
                    "언어·지역 발음 분석",
                    "표기 언어를 우선하고, 국가별 발음 차이를 반영합니다.",
                  ],
                  [
                    "발음 힌트 우선 반영",
                    "입력된 발음 힌트는 일반적인 발음 규칙보다 우선합니다.",
                  ],
                  [
                    "발음 구조화",
                    "실제 발음을 음절과 발음 기호로 분석합니다.",
                  ],
                  [
                    "한글 표기 제안",
                    "원래 발음을 유지하며, 자연스러운 한글로 제안합니다.",
                  ],
                ].map(([title, description], index) => (
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
                      href="/login"
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

        <button
          type="submit"
          disabled={loading}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-60"
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
              revealedCount={revealedCount}
              locale={isForeignAudience ? locale : "ko"}
            />
            <CandidateUnlockPanel
              revealedCount={revealedCount}
              totalCount={candidateCount}
              locale={locale}
              serviceType={service.serviceType}
              onUnlock={() =>
                setRevealedCount((current) =>
                  Math.min(candidateCount, current + 1),
                )
              }
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
            <AdBanner variant="leaderboard" />
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
          </div>
        </div>
      ) : null}
      {legalDocument ? (
        <LegalModal
          kind={legalDocument}
          onClose={() => setLegalDocument(null)}
        />
      ) : null}
    </div>
  );
}
