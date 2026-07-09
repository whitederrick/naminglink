"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { Eye, FileText, Palette, Send, Stamp } from "lucide-react";
import {
  getCountryOption,
  type CountryOption,
  type FieldConfig,
  type ServiceConfig,
} from "@/lib/services";
import { AdBanner } from "@/components/AdBanner";
import { AILoadingSteps } from "@/components/AILoadingSteps";
import { ResultCard } from "@/components/ResultCard";

type ApiResult = {
  ok: boolean;
  logId?: string | null;
  result?: unknown;
  persistence?: "saved" | "skipped" | "failed";
  error?: string;
};

const addOnIcons = {
  premiumPdf: FileText,
  calligraphy: Palette,
  stamp: Stamp,
  adUnlock: Eye,
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

export function NamingForm({ service }: { service: ServiceConfig }) {
  const initialValues = useMemo(() => {
    const entries = service.sections.flatMap((section) =>
      section.fields.map((field) => [field.name, fieldInitialValue(field)]),
    );

    return Object.fromEntries(entries) as Record<string, string>;
  }, [service.sections]);

  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ApiResult | null>(null);
  const [revealAll, setRevealAll] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([
    "premiumPdf",
  ]);
  const selectedCountry = selectedCountryFromValues(values);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setResult(null);
    setRevealAll(false);

    if (!agreedToTerms || !agreedToPrivacy) {
      setError("이용약관과 개인정보처리방침에 동의해야 분석을 시작할 수 있습니다.");
      return;
    }

    setLoading(true);

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

      const response = await fetch("/api/naming", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serviceType: service.serviceType,
          inputFactors: {
            ...values,
            selectedAddOns,
            serviceSlug: service.slug,
            countryProfile,
            legalConsent: {
              termsVersion: "2026-07-09",
              privacyVersion: "2026-07-09",
              consentedAt: new Date().toISOString(),
            },
          },
        }),
      });

      const payload = (await response.json()) as ApiResult;

      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "작명 요청을 처리하지 못했습니다.");
      }

      setResult(payload);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }

  function toggleAddOn(key: string) {
    setSelectedAddOns((current) =>
      current.includes(key)
        ? current.filter((item) => item !== key)
        : [...current, key],
    );
  }

  function updateField(field: FieldConfig, value: string) {
    setValues((current) => {
      const next = {
        ...current,
        [field.name]: value,
      };

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
    <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
      <form onSubmit={onSubmit} className="grid gap-4">
        {service.sections.map((section) => (
          <section
            key={section.title}
            className="rounded-lg border border-line bg-surface p-5 shadow-sm"
          >
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              {section.description}
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {section.fields.map((field) => (
                <label
                  key={field.name}
                  className={
                    field.type === "textarea"
                      ? "grid gap-2 md:col-span-2"
                      : "grid gap-2"
                  }
                >
                  <span className="text-sm font-medium">{field.label}</span>
                  <FieldInput
                    field={field}
                    value={values[field.name] ?? ""}
                    onChange={(value) => updateField(field, value)}
                  />
                  {(field.name === "country" ||
                    field.name === "targetCountry") &&
                  selectedCountry ? (
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
                      {field.hint}
                    </span>
                  ) : null}
                </label>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-lg border border-line bg-surface p-5 shadow-sm">
          <h2 className="text-lg font-semibold">부가 서비스</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            결제와 광고 연동 전에도 실제 상품 구조와 신청 흐름을 확인할 수 있습니다.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {service.addOns.map((addOn) => {
              const Icon = addOnIcons[addOn.key];
              const selected = selectedAddOns.includes(addOn.key);

              return (
                <button
                  key={addOn.key}
                  type="button"
                  onClick={() => toggleAddOn(addOn.key)}
                  className={`rounded-lg border p-4 text-left transition ${
                    selected
                      ? "border-foreground bg-surface-strong"
                      : "border-line bg-background hover:border-foreground"
                  }`}
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-2 font-semibold">
                      <Icon aria-hidden="true" size={17} />
                      {addOn.title}
                    </span>
                    <span className="text-sm text-brand-teal">
                      {addOn.priceLabel}
                    </span>
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-muted">
                    {addOn.description}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

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
                <Link href="/terms" className="font-semibold text-foreground">
                  이용약관
                </Link>
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
                <Link href="/privacy" className="font-semibold text-foreground">
                  개인정보처리방침
                </Link>
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
          프리미엄 분석 시작
        </button>

        {error ? (
          <p className="rounded-lg border border-brand-rose/30 bg-brand-rose/10 px-3 py-2 text-sm text-brand-rose">
            {error}
          </p>
        ) : null}
      </form>

      <section className="grid content-start gap-4">
        <AdBanner variant="leaderboard" />
        {loading ? <AILoadingSteps /> : null}

        {result?.result ? (
          <div className="grid gap-4">
            <div className="flex flex-col gap-3 rounded-lg border border-line bg-surface p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium">분석 완료</p>
                <p className="mt-1 text-sm text-muted">
                  저장 상태: {result.persistence ?? "skipped"}
                  {result.logId ? ` · ${result.logId}` : ""}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setRevealAll((current) => !current)}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line px-3 text-sm font-medium transition hover:border-foreground"
              >
                <Eye aria-hidden="true" size={17} />
                {revealAll ? "잠금 보기" : "전체 후보 보기"}
              </button>
            </div>
            <ResultCard
              service={service}
              result={result.result}
              revealAll={revealAll}
            />
          </div>
        ) : null}

        {!loading && !result ? (
          <div className="rounded-lg border border-line bg-surface p-5 shadow-sm">
            <p className="text-sm font-medium">프리미엄 결과 미리보기</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              제출 후 후보, 배제 사유, 사주 참고 메모, 부가 서비스 제안이 이 영역에 표시됩니다.
            </p>
          </div>
        ) : null}
      </section>
    </div>
  );
}
