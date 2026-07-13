"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { Send } from "lucide-react";
import {
  getCountryOption,
  getCountryOptionsForLocale,
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
import { LegalModal, type LegalDocument } from "@/components/LegalModal";

type ApiResult = {
  ok: boolean;
  logId?: string | null;
  result?: unknown;
  persistence?: "saved" | "skipped" | "failed";
  error?: string;
};

function fieldInitialValue(field: FieldConfig) {
  return field.type === "select" ? field.options?.[0]?.value ?? "" : "";
}

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: FieldConfig;
  value: string;
  onChange: (value: string) => void;
}) {
  if (field.type === "select") {
    return (
      <select
        required={field.required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 rounded-lg border border-line bg-background px-3 text-sm outline-none transition focus:border-foreground"
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
        value={value}
        placeholder={field.placeholder}
        rows={4}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-28 resize-y rounded-lg border border-line bg-background px-3 py-3 text-sm outline-none transition focus:border-foreground"
      />
    );
  }

  return (
    <input
      required={field.required}
      value={value}
      placeholder={field.placeholder}
      onChange={(event) => onChange(event.target.value)}
      className="h-11 rounded-lg border border-line bg-background px-3 text-sm outline-none transition focus:border-foreground"
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

const ANALYSIS_AD_SECONDS = 5;

function resultCandidateCount(result: unknown) {
  if (!result || typeof result !== "object" || Array.isArray(result)) return 0;
  const candidates = (result as Record<string, unknown>).candidates;
  return Array.isArray(candidates) ? Math.min(candidates.length, 5) : 0;
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
  const isGlobalToKorean =
    service.serviceType === "GLOBAL_TO_KOREAN" && !isHangulTransliteration;
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

        return [field.name, fieldInitialValue(field)];
      }),
    );

    return Object.fromEntries(entries) as Record<string, string>;
  }, [isHangulTransliteration, locale, service.sections]);

  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ApiResult | null>(null);
  const [revealedCount, setRevealedCount] = useState(1);
  const [analysisCountdown, setAnalysisCountdown] = useState(0);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [legalDocument, setLegalDocument] = useState<LegalDocument | null>(null);
  const selectedCountry = selectedCountryFromValues(values);
  const candidateCount = result?.result
    ? resultCandidateCount(result.result)
    : 0;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setResult(null);
    setRevealedCount(1);

    if (!agreedToTerms || !agreedToPrivacy) {
      setError("이용약관과 개인정보처리방침에 동의해야 분석을 시작할 수 있습니다.");
      return;
    }

    setLoading(true);
    setAnalysisCountdown(ANALYSIS_AD_SECONDS);
    const adStartedAt = Date.now();
    const countdownTimer = window.setInterval(() => {
      const elapsed = Math.floor((Date.now() - adStartedAt) / 1000);
      setAnalysisCountdown(Math.max(0, ANALYSIS_AD_SECONDS - elapsed));
    }, 250);
    let adWindowComplete = false;
    const completeAdWindow = async () => {
      const remaining = ANALYSIS_AD_SECONDS * 1000 - (Date.now() - adStartedAt);
      if (remaining > 0) {
        await new Promise((resolve) => window.setTimeout(resolve, remaining));
      }
      adWindowComplete = true;
      setAnalysisCountdown(0);
    };

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
        outputLanguage: values.outputLanguage || locale,
        selectedAddOns: [],
        serviceSlug: service.slug,
        countryProfile,
        legalConsent: {
          termsVersion: "2026-07-09",
          privacyVersion: "2026-07-09",
          consentedAt: new Date().toISOString(),
        },
      };
      const response = await fetch("/api/naming", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serviceType: service.serviceType,
          inputFactors,
        }),
      });

      const payload = (await response.json()) as ApiResult;

      await completeAdWindow();

      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "작명 요청을 처리하지 못했습니다.");
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
        router.replace(
          `/global-to-korean/result?lang=${locale}&id=${encodeURIComponent(resultId)}`,
        );
        return;
      }

      setResult(payload);
    } catch (caught) {
      if (!adWindowComplete) await completeAdWindow();
      setError(caught instanceof Error ? caught.message : "오류가 발생했습니다.");
    } finally {
      window.clearInterval(countdownTimer);
      setAnalysisCountdown(0);
      setLoading(false);
    }
  }

  function updateField(field: FieldConfig, value: string) {
    setValues((current) => {
      const next = {
        ...current,
        [field.name]: value,
      };

      if (
        isHangulTransliteration &&
        field.name === "originalNameLanguage"
      ) {
        next.country = getCountryOptionsForLocale(value)[0]?.value ?? "";
      }

      if (field.name === "country" || field.name === "targetCountry") {
        const country = getCountryOption(value);

        if (country && "outputLanguage" in next) {
          next.outputLanguage = country.locale;
        }
      }

      return next;
    });
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={onSubmit} className="grid gap-4">
        <div
          className={
            isHangulTransliteration
              ? "grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
              : isGlobalToKorean
                ? "grid gap-4 lg:grid-cols-3"
                : "grid gap-4"
          }
        >
          {service.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-lg border border-line bg-surface p-5 shadow-sm"

            >
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                {section.description}
              </p>

              <div
                className={
                  isGlobalToKorean
                    ? "mt-5 grid gap-4"
                    : isHangulTransliteration
                      ? "mt-5 grid gap-x-4 gap-y-6 md:grid-cols-2"
                      : "mt-5 grid gap-4 md:grid-cols-2"
                }
              >
                {section.fields.map((field) => (
                  <label
                    key={field.name}
                    className={
                      field.type === "textarea" && !isGlobalToKorean
                        ? "grid gap-2 md:col-span-2"
                        : "grid gap-2"
                    }
                  >
                    <span className="text-sm font-medium">{field.label}</span>
                    <FieldInput
                      field={
                        isHangulTransliteration && field.name === "country"
                          ? {
                              ...field,
                              options: getCountryOptionsForLocale(
                                values.originalNameLanguage,
                              ),
                            }
                          : field
                      }
                      value={values[field.name] ?? ""}
                      onChange={(value) => updateField(field, value)}
                    />
                    {(field.name === "country" ||
                      field.name === "targetCountry") &&
                    selectedCountry && !isHangulTransliteration ? (
                      <span className="text-xs leading-5 text-muted">
                        기본 언어: {selectedCountry.languageName} · 현지 이름
                        예시: {selectedCountry.localNameHint}
                        {selectedCountry.motivationNote
                          ? ` · 추천 옵션: ${selectedCountry.motivationNote}`
                          : ""}
                      </span>
                    ) : null}
                    {field.hint ? (
                      <span className="text-xs leading-5 text-muted">
                        {field.hint.split("\n").map((line, index) => (
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
          <h2 className="text-lg font-semibold">필수 동의</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            이름, 생년월일, 국가, 사용 목적 등 입력값은 작명 분석과 결과 저장을
            위해 처리됩니다.
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
                  이용약관
                </button>
                에 동의합니다.
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
                  개인정보처리방침
                </button>
                에 동의합니다.
              </span>
            </label>
          </div>
        </section>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send aria-hidden="true" size={17} />
          {isHangulTransliteration ? "한글 발음 분석 시작" : "광고 확인 후 분석 시작"}
        </button>

        {error ? (
          <p className="rounded-lg border border-brand-rose/30 bg-brand-rose/10 px-3 py-2 text-sm text-brand-rose">
            {error}
          </p>
        ) : null}
      </form>

      <section className="grid content-start gap-4">
        {loading ? (
          <div className="grid gap-3">
            <AdBanner variant="leaderboard" />
            <p className="text-center text-sm font-medium text-brand-teal">
              광고 확인 후 결과를 공개합니다. {analysisCountdown}초
            </p>
            <AILoadingSteps />
          </div>
        ) : null}

        {result?.result && !isHangulTransliteration ? (
          <div className="grid gap-4">
            <div className="rounded-lg border border-line bg-surface p-4 shadow-sm">
              <p className="text-sm font-semibold text-brand-teal">분석 완료</p>
              <p className="mt-1 text-sm leading-6 text-muted">
                가장 적합한 후보 1개를 먼저 공개했습니다. 추가 후보는 광고 확인 또는 향후 결제로 한 개씩 열 수 있습니다.
              </p>
            </div>
            <ResultCard
              service={service}
              result={result.result}
              revealedCount={revealedCount}
            />
            <CandidateUnlockPanel
              revealedCount={revealedCount}
              totalCount={candidateCount}
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
      {legalDocument ? (
        <LegalModal
          kind={legalDocument}
          onClose={() => setLegalDocument(null)}
        />
      ) : null}
    </div>
  );
}
