"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import {
  scoreBand,
  type EngineResult,
  type Factor,
  type MatchOutcome,
  type PersonReading,
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

      {/* 점수만 보여 주면 읽을 것이 없다. 강점과 주의점을 먼저 문장으로 짚어 주고, 그다음
          사주 원국과 오행 세력을 보여 준 뒤, 항목별 점수로 내려간다. */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <HighlightCard
          tone="strength"
          title={dictionary.reading.strengthTitle}
          factorLabel={dictionary.factors[outcome.highlights.strength.factor]}
          body={renderNote(dictionary, outcome.highlights.strength)}
        />
        <HighlightCard
          tone="caution"
          title={dictionary.reading.cautionTitle}
          factorLabel={dictionary.factors[outcome.highlights.caution.factor]}
          body={renderNote(dictionary, outcome.highlights.caution)}
        />
      </div>

      <h2 className="mt-12 text-xl font-semibold">
        {dictionary.reading.chartTitle}
      </h2>
      <p className="break-keep-all mt-2 text-sm text-muted">
        {dictionary.reading.chartHint}
      </p>
      <div className="mt-4 space-y-4">
        {outcome.people.map((person, index) => (
          <PersonCard
            key={index}
            reading={person}
            fallbackName={index === 0 ? nameA : nameB}
            dictionary={dictionary}
          />
        ))}
      </div>

      <h2 className="mt-12 text-xl font-semibold">{t.breakdown}</h2>
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

function HighlightCard({
  tone,
  title,
  factorLabel,
  body,
}: {
  tone: "strength" | "caution";
  title: string;
  factorLabel: string;
  body: string;
}) {
  const accent =
    tone === "strength"
      ? "border-brand-sage/35 bg-brand-sage/8"
      : "border-brand-copper/35 bg-brand-copper/8";
  return (
    <section className={`rounded-2xl border ${accent} p-5`}>
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
        {title}
      </p>
      <p className="break-keep-all mt-1 font-semibold">{factorLabel}</p>
      <p className="break-keep-all mt-2 text-sm leading-6 text-muted">{body}</p>
    </section>
  );
}

function PersonCard({
  reading,
  fallbackName,
  dictionary,
}: {
  reading: PersonReading;
  fallbackName: string;
  dictionary: Dictionary;
}) {
  const t = dictionary.reading;
  const dayMaster = dictionary.dayMasters[reading.dayMaster.character];
  const pillars = [
    { label: t.pillarYear, value: reading.pillars.year },
    { label: t.pillarMonth, value: reading.pillars.month },
    { label: t.pillarDay, value: reading.pillars.day },
    { label: t.pillarHour, value: reading.pillars.hour },
  ];
  const total =
    Object.values(reading.elements).reduce((sum, value) => sum + value, 0) || 1;

  return (
    <section className="rounded-2xl border border-line bg-surface p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold">{reading.label?.trim() || fallbackName}</h3>
        <p className="text-sm text-muted">
          {t.animalLabel} · {dictionary.animals[reading.animal]}
        </p>
      </div>

      {/* 사주 원국 — 네 기둥을 한자로 크게 보여 준다. 이 서비스에서 사용자가 가장 낯설어할
          부분이라 한글 독음을 함께 둔다. */}
      <div className="mt-4 grid grid-cols-4 gap-2">
        {pillars.map((pillar) => (
          <div
            key={pillar.label}
            className="rounded-xl border border-line bg-background px-2 py-3 text-center"
          >
            <p className="text-[11px] text-muted">{pillar.label}</p>
            {pillar.value ? (
              <>
                <p className="mt-1 text-xl font-semibold leading-tight">
                  {pillar.value.hanja}
                </p>
                <p className="mt-0.5 text-[11px] text-muted">
                  {pillar.value.hangul}
                </p>
              </>
            ) : (
              <p className="mt-2 text-[11px] leading-tight text-muted">
                {t.pillarHourUnknown}
              </p>
            )}
          </div>
        ))}
      </div>

      {dayMaster ? (
        <div className="mt-4 rounded-xl bg-surface-strong px-4 py-3">
          <p className="text-xs text-muted">
            {t.dayMasterLabel} · {dayMaster.name}
          </p>
          <p className="break-keep-all mt-1 text-sm leading-6">
            {dayMaster.trait}
          </p>
        </div>
      ) : null}

      <p className="break-keep-all mt-3 text-sm leading-6 text-muted">
        {dictionary.animalTraits[reading.animal]}
      </p>

      <div className="mt-5">
        <p className="text-xs font-semibold text-muted">{t.elementsTitle}</p>
        {/* 다섯 기운의 비율. 월령까지 반영한 세력이라 표면 글자 수와는 다르다. */}
        <div className="mt-2 flex h-2.5 overflow-hidden rounded-full bg-surface-strong">
          {ELEMENT_ORDER.map((element) => (
            <span
              key={element}
              className={ELEMENT_COLOR[element]}
              style={{ width: `${(reading.elements[element] / total) * 100}%` }}
              title={dictionary.elements[element]}
            />
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted">
          {ELEMENT_ORDER.map((element) => (
            <span key={element} className="flex items-center gap-1">
              <span
                aria-hidden
                className={`size-2 rounded-full ${ELEMENT_COLOR[element]}`}
              />
              {dictionary.elements[element]}
              <span className="text-foreground/60">
                {Math.round((reading.elements[element] / total) * 100)}%
              </span>
            </span>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted">
          {t.strongest} {dictionary.elements[reading.strongestElement]} ·{" "}
          {t.scarcest} {dictionary.elements[reading.scarcestElement]} ·{" "}
          {t.seasonLabel} {dictionary.elements[reading.seasonElement]}
        </p>
      </div>
    </section>
  );
}

// 오행의 관습적인 색. 목=청, 화=적, 토=황, 금=백(회), 수=흑.
const ELEMENT_ORDER = ["WOOD", "FIRE", "EARTH", "METAL", "WATER"] as const;
const ELEMENT_COLOR: Record<(typeof ELEMENT_ORDER)[number], string> = {
  WOOD: "bg-[#4f6f5e]",
  FIRE: "bg-[#b4535a]",
  EARTH: "bg-[#b4832f]",
  METAL: "bg-[#9aa0a6]",
  WATER: "bg-[#3f4a63]",
};

function renderNote(
  dictionary: Dictionary,
  highlight: { note: string; params?: Record<string, string> },
) {
  const params = Object.fromEntries(
    Object.entries(highlight.params ?? {}).map(([key, value]) => [
      key,
      dictionary.animals[value] ?? dictionary.elements[value] ?? value,
    ]),
  );
  return fillTemplate(dictionary.notes[highlight.note] ?? highlight.note, params);
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
