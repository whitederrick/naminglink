"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import {
  scoreBand,
  type EngineResult,
  type Factor,
  type MatchOutcome,
} from "@/lib/engines";
import { fillTemplate, type Dictionary, type Locale } from "@/lib/i18n";
import { decodeMatchInput, type MatchInput } from "@/lib/match-input";

type State =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; outcome: MatchOutcome; input: MatchInput };

export function MatchResultView({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const [state, setState] = useState<State>({ status: "loading" });
  const [copied, setCopied] = useState(false);
  const t = dictionary.result;

  useEffect(() => {
    let cancelled = false;

    // 입력값은 프래그먼트에만 있다. 서버 컴포넌트는 프래그먼트를 볼 수 없으므로(브라우저가
    // 서버로 보내지 않는다) 여기서 읽어 POST로 계산을 요청한다.
    //
    // 프래그먼트 해석 실패도 예외로 던져 한 갈래로 모은다. effect 안에서 setState를 동기로
    // 호출하면 렌더가 연쇄로 도는데, .catch는 마이크로태스크라 그 문제가 없다.
    async function resolve() {
      const fragment = window.location.hash.slice(1);
      const input = fragment
        ? decodeMatchInput(decodeURIComponent(fragment))
        : null;
      if (!input) throw new Error("MISSING_INPUT");

      const response = await fetch("/api/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "UNKNOWN");
      }
      return { outcome: (await response.json()) as MatchOutcome, input };
    }

    resolve()
      .then(({ outcome, input }) => {
        if (!cancelled) setState({ status: "ready", outcome, input });
      })
      .catch((cause: Error) => {
        if (cancelled) return;
        setState({ status: "error", message: errorMessage(cause.message) });
      });

    function errorMessage(code: string) {
      if (code === "MISSING_INPUT") return t.missingInput;
      if (code === "UNCALCULABLE_DATE" || code === "INVALID_INPUT") {
        return dictionary.form.errorInvalidDate;
      }
      return dictionary.form.errorGeneric;
    }

    return () => {
      cancelled = true;
    };
  }, [dictionary, t.missingInput]);

  const copyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  if (state.status === "loading") {
    return <p className="mt-16 text-center text-muted">{dictionary.form.submitting}</p>;
  }

  if (state.status === "error") {
    return (
      <div className="mt-16 text-center">
        <p role="alert" className="break-keep-all text-muted">
          {state.message}
        </p>
        <Link
          href={`/compatibility?lang=${locale}`}
          className="mt-6 inline-block rounded-full bg-brand-plum px-6 py-3 font-semibold text-white"
        >
          {t.recalculate}
        </Link>
      </div>
    );
  }

  const { outcome, input } = state;
  const band = scoreBand(outcome.totalScore);
  const nameA = input.a.label?.trim() || dictionary.form.personA;
  const nameB = input.b.label?.trim() || dictionary.form.personB;

  return (
    <div className="mt-10">
      <p className="text-center text-sm text-muted">
        {nameA} · {nameB}
      </p>

      <section className="mt-6 rounded-3xl border border-line bg-surface px-6 py-10 text-center">
        <p className="text-sm text-muted">{t.totalLabel}</p>
        <p className="mt-2 text-6xl font-bold text-brand-plum">
          {outcome.totalScore}
          <span className="text-3xl">%</span>
        </p>
        <p className="break-keep-all mt-3 text-lg font-semibold">
          {dictionary.bands[band]}
        </p>
      </section>

      {outcome.precision === "PARTIAL_NO_TIME" ? (
        <p className="break-keep-all mt-4 rounded-xl bg-surface-strong px-4 py-3 text-sm text-muted">
          {t.partialTime}
        </p>
      ) : null}

      <h2 className="mt-10 text-xl font-semibold">{t.breakdown}</h2>
      <div className="mt-4 space-y-4">
        {outcome.engines.map((engine) => (
          <EngineCard key={engine.key} engine={engine} dictionary={dictionary} />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href={`/compatibility?lang=${locale}`}
          className="rounded-full border border-line px-6 py-3 font-semibold"
        >
          {t.recalculate}
        </Link>
        <button
          type="button"
          onClick={copyLink}
          className="rounded-full bg-brand-plum px-6 py-3 font-semibold text-white"
        >
          {copied ? t.copied : t.copyLink}
        </button>
      </div>

      <p className="mt-10 text-xs text-muted">
        {t.engineVersion}: {outcome.engineVersion}
      </p>
      <p className="break-keep-all mt-2 text-xs text-muted">{t.disclaimer}</p>
    </div>
  );
}

function EngineCard({
  engine,
  dictionary,
}: {
  engine: EngineResult;
  dictionary: Dictionary;
}) {
  const meta = dictionary.engines[engine.key];
  return (
    <section className="rounded-2xl border border-line bg-surface p-5">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-semibold">{meta.name}</h3>
        <span className="text-2xl font-bold text-brand-copper">
          {engine.score}%
        </span>
      </div>
      <p className="break-keep-all mt-1 text-sm text-muted">{meta.description}</p>
      <ul className="mt-4 space-y-3">
        {engine.factors.map((factor) => (
          <FactorRow key={factor.key} factor={factor} dictionary={dictionary} />
        ))}
      </ul>
    </section>
  );
}

function FactorRow({
  factor,
  dictionary,
}: {
  factor: Factor;
  dictionary: Dictionary;
}) {
  // 엔진은 사전 키와 파라미터만 준다. 띠·오행 이름도 사전에서 번역해 끼운다.
  const params = Object.fromEntries(
    Object.entries(factor.noteParams ?? {}).map(([key, value]) => [
      key,
      dictionary.animals[value] ?? dictionary.elements[value] ?? value,
    ]),
  );
  const note = fillTemplate(dictionary.notes[factor.note] ?? factor.note, params);

  return (
    <li>
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="font-medium">{dictionary.factors[factor.key]}</span>
        <span className="text-muted">{factor.score}</span>
      </div>
      <div
        aria-hidden
        className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface-strong"
      >
        <div
          className="h-full rounded-full bg-brand-copper"
          style={{ width: `${factor.score}%` }}
        />
      </div>
      <p className="break-keep-all mt-1.5 text-sm text-muted">{note}</p>
    </li>
  );
}
