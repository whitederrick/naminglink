"use client";

import { FormEvent, useMemo, useState } from "react";
import { Eye, Send } from "lucide-react";
import type { ServiceConfig } from "@/lib/services";
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

export function NamingForm({ service }: { service: ServiceConfig }) {
  const initialValues = useMemo(
    () =>
      Object.fromEntries(service.fields.map((field) => [field.name, ""])) as
        Record<string, string>,
    [service.fields],
  );

  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ApiResult | null>(null);
  const [revealAll, setRevealAll] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    setRevealAll(false);

    try {
      const response = await fetch("/api/naming", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serviceType: service.serviceType,
          inputFactors: values,
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

  return (
    <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
      <form
        onSubmit={onSubmit}
        className="rounded-lg border border-line bg-surface p-5 shadow-sm"
      >
        <div className="grid gap-4">
          {service.fields.map((field) => (
            <label key={field.name} className="grid gap-2">
              <span className="text-sm font-medium">{field.label}</span>
              {field.multiline ? (
                <textarea
                  required={field.required}
                  value={values[field.name]}
                  placeholder={field.placeholder}
                  rows={4}
                  onChange={(event) =>
                    setValues((current) => ({
                      ...current,
                      [field.name]: event.target.value,
                    }))
                  }
                  className="min-h-28 resize-y rounded-lg border border-line bg-background px-3 py-3 text-sm outline-none transition focus:border-foreground"
                />
              ) : (
                <input
                  required={field.required}
                  value={values[field.name]}
                  placeholder={field.placeholder}
                  onChange={(event) =>
                    setValues((current) => ({
                      ...current,
                      [field.name]: event.target.value,
                    }))
                  }
                  className="h-11 rounded-lg border border-line bg-background px-3 text-sm outline-none transition focus:border-foreground"
                />
              )}
            </label>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send aria-hidden="true" size={17} />
          생성하기
        </button>

        {error ? (
          <p className="mt-4 rounded-lg border border-brand-rose/30 bg-brand-rose/10 px-3 py-2 text-sm text-brand-rose">
            {error}
          </p>
        ) : null}
      </form>

      <section className="grid content-start gap-4">
        {loading ? (
          <>
            <AILoadingSteps />
            <AdBanner />
          </>
        ) : null}

        {result?.result ? (
          <div className="grid gap-4">
            <div className="flex flex-col gap-3 rounded-lg border border-line bg-surface p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium">생성 완료</p>
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
                {revealAll ? "잠금 보기" : "전체 보기"}
              </button>
            </div>
            <ResultCard
              serviceType={service.serviceType}
              result={result.result}
              revealAll={revealAll}
            />
          </div>
        ) : null}

        {!loading && !result ? (
          <div className="rounded-lg border border-line bg-surface p-5 shadow-sm">
            <p className="text-sm font-medium">결과 미리보기</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              입력값을 제출하면 이 영역에 작명 결과와 저장 상태가 표시됩니다.
            </p>
          </div>
        ) : null}
      </section>
    </div>
  );
}
