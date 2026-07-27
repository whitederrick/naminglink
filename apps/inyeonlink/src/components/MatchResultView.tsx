"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { AdBanner } from "@/components/AdBanner";
import {
  scoreBand,
  type EngineResult,
  type Factor,
  type MatchOutcome,
  type MutualRelation,
  type PersonReading,
} from "@/lib/engines";
import { fillTemplate, type Dictionary, type Locale } from "@/lib/i18n";
import { decodeMatchInput, type MatchInput } from "@/lib/match-input";

// 결과에는 **어느 프래그먼트로 계산한 것인지**를 함께 담는다. 주소의 프래그먼트가 바뀌었는데
// 상태가 아직 이전 것이면 그건 낡은 화면이므로 "계산 중"으로 보여야 한다. effect 안에서
// 동기로 상태를 되돌리는 대신 렌더에서 비교하는 방식이라 렌더가 연쇄로 돌지 않는다.
type State =
  | { status: "loading" }
  | { status: "error"; message: string; fragment: string }
  | {
      status: "ready";
      outcome: MatchOutcome;
      input: MatchInput;
      fragment: string;
    };

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

  // 지금 화면이 어느 프래그먼트로 계산된 것인지 기억한다. null이면 아직 못 읽은 것이다.
  //
  // **두 번째 궁합에서 "결과 정보를 읽을 수 없습니다"가 뜨던 원인이 여기였다.**
  //
  // 예전에는 마운트할 때 `window.location.hash`를 딱 한 번 읽었다. 그런데 결과 화면에서
  // "다시 계산하기"로 돌아가 다시 계산하면, 이번에는 `/compatibility/result`가 Next의 라우터
  // 캐시에 이미 있어 서버를 다녀오지 않는다. 그러면 전환이 거의 한 틱에 끝나면서 **주소의
  // 해시가 반영되기 전에 이 컴포넌트가 마운트되어** 빈 문자열을 읽는다. 빈 값은 곧
  // MISSING_INPUT이고, 그게 그 메시지다. 첫 번째에는 RSC를 받아 오느라 시간이 걸려 그 사이
  // 주소가 갱신되므로 멀쩡히 동작한다.
  //
  // 그래서 **비어 있으면 곧바로 실패로 단정하지 않고 잠깐 기다렸다 다시 본다.** 정말로 해시
  // 없이 들어온 경우(주소를 직접 친 경우)에만 마지막에 빈 값을 확정해 오류를 보여 준다.
  const [resolvedFragment, setResolvedFragment] = useState<string | null>(null);

  useEffect(() => {
    let stopped = false;

    // commitEmpty=false면 빈 해시는 아직 "결론"으로 삼지 않는다.
    const sync = (commitEmpty: boolean) => {
      // 프래그먼트가 둘 붙어 있는 주소가 실제로 만들어졌었다
      // (`#첫번째조회#두번째조회`). 그런 주소가 이미 공유됐을 수 있으므로 마지막 조각을
      // 쓴다 — 나중에 붙은 쪽이 그 화면이 보여 주려던 결과다. 프래그먼트가 하나면
      // split 결과도 하나라 동작이 달라지지 않는다.
      const current = window.location.hash.slice(1).split("#").pop() ?? "";
      if (!current && !commitEmpty) return false;
      setResolvedFragment((previous) =>
        previous === current ? previous : current,
      );
      return true;
    };

    const timers: number[] = [];
    if (!sync(false)) {
      // 주소가 갱신되기를 기다린다. 마지막 한 번은 빈 값이라도 확정해 오류를 띄운다 —
      // 그렇지 않으면 해시 없이 들어온 사람이 "계산 중…"에 영원히 갇힌다.
      for (const delay of [0, 30, 100, 300]) {
        timers.push(
          window.setTimeout(() => {
            if (!stopped) sync(false);
          }, delay),
        );
      }
      timers.push(
        window.setTimeout(() => {
          if (!stopped) sync(true);
        }, 700),
      );
    }

    // 리렌더 없이 주소만 바뀌는 경로도 있다. 이벤트가 왔다는 것은 주소가 확정됐다는 뜻이라
    // 빈 값도 그대로 받는다. pushState는 hashchange를 발생시키지 않으므로 popstate도 듣고,
    // 뒤로 가기로 되살아난 페이지(bfcache)까지 덮도록 pageshow도 듣는다.
    const onNavigate = () => sync(true);
    window.addEventListener("hashchange", onNavigate);
    window.addEventListener("popstate", onNavigate);
    window.addEventListener("pageshow", onNavigate);

    return () => {
      stopped = true;
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("hashchange", onNavigate);
      window.removeEventListener("popstate", onNavigate);
      window.removeEventListener("pageshow", onNavigate);
    };
  }, []);

  useEffect(() => {
    if (resolvedFragment === null) return;
    const fragment = resolvedFragment;
    let cancelled = false;

    // 입력값은 프래그먼트에만 있다. 서버 컴포넌트는 프래그먼트를 볼 수 없으므로(브라우저가
    // 서버로 보내지 않는다) 여기서 읽어 POST로 계산을 요청한다.
    //
    // 프래그먼트 해석 실패도 예외로 던져 한 갈래로 모은다. effect 안에서 setState를 동기로
    // 호출하면 렌더가 연쇄로 도는데, .catch는 마이크로태스크라 그 문제가 없다.
    async function resolve() {
      // 프래그먼트에는 base64가 들어가지만, 사용자가 주소를 손대 잘못된 퍼센트 인코딩이
      // 섞이면 decodeURIComponent가 던진다. 그것도 "읽을 수 없는 결과"로 같이 다룬다.
      let decoded: string | null = null;
      try {
        decoded = fragment ? decodeURIComponent(fragment) : null;
      } catch {
        decoded = null;
      }
      const input = decoded ? decodeMatchInput(decoded) : null;
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
        if (!cancelled) setState({ status: "ready", outcome, input, fragment });
      })
      .catch((cause: Error) => {
        if (cancelled) return;
        setState({
          status: "error",
          message: errorMessage(cause.message),
          fragment,
        });
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
  }, [resolvedFragment, dictionary, t.missingInput]);

  const copyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  // 아직 못 읽었거나, 읽어 둔 결과가 지금 주소의 프래그먼트와 다르면(= 두 번째 궁합을 방금
  // 요청했으면) 계산 중으로 본다.
  if (state.status === "loading" || state.fragment !== resolvedFragment) {
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

      <RelationSection
        relation={outcome.relation}
        names={[nameA, nameB]}
        dictionary={dictionary}
      />

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

      {/* 면책 문구는 바로 아래 PrivacyNotice가 본문 크기로 싣는다. 여기서 또 적으면
          같은 말이 두 번 나온다. */}
      <p className="mt-10 text-xs text-muted">
        {t.engineVersion}: {outcome.engineVersion}
      </p>

      {/* 광고는 결과 화면 안쪽, 그것도 '결과가 실제로 나온' 갈래에만 둔다. 페이지 쪽에 두면
          입력을 못 읽어 오류가 뜬 화면에도 광고가 실리는데, 내용 없는 화면의 광고는 애드센스
          정책 위반이다. 다시 계산·링크 복사 버튼과는 한 칸 떨어뜨려 오클릭을 피한다. */}
      <AdBanner placement="result" locale={locale} className="mt-10" />
    </div>
  );
}

/**
 * 관계의 모양과 십신. 점수표가 "얼마나"를 말한다면 이 절은 "어떻게"를 말한다 —
 * 읽을거리로는 이쪽이 본론이라 점수 바로 다음에 둔다.
 */
function RelationSection({
  relation,
  names,
  dictionary,
}: {
  relation: MutualRelation;
  names: [string, string];
  dictionary: Dictionary;
}) {
  const t = dictionary.relation;
  const shape = t.shapes[relation.shape];
  const leadTemplate =
    relation.shape === "ALIKE" || relation.leadIndex === null
      ? null
      : t.leadNote[relation.shape];

  const directions = [
    { from: names[0], to: names[1], god: relation.aSeesB },
    { from: names[1], to: names[0], god: relation.bSeesA },
  ];

  return (
    <>
      <h2 className="mt-12 text-xl font-semibold">{t.title}</h2>
      <p className="break-keep-all mt-2 text-sm text-muted">{t.hint}</p>

      <section className="mt-4 rounded-2xl border border-brand-plum/25 bg-brand-plum/6 p-5">
        <p className="text-lg font-semibold text-brand-plum">{shape.name}</p>
        <p className="break-keep-all mt-2 text-sm leading-6 text-muted">
          {shape.body}
        </p>
        {leadTemplate ? (
          <p className="break-keep-all mt-3 text-sm leading-6">
            {emphasize(
              fillTemplate(leadTemplate, {
                lead: names[relation.leadIndex as 0 | 1],
              }),
            )}
          </p>
        ) : null}
      </section>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {directions.map((direction) => {
          const god = dictionary.tenGods[direction.god];
          return (
            <section
              key={`${direction.from}-${direction.to}`}
              className="rounded-2xl border border-line bg-surface p-5"
            >
              <p className="text-xs text-muted">
                {fillTemplate(t.directionLabel, {
                  from: direction.from,
                  to: direction.to,
                })}
              </p>
              <p className="mt-1 font-semibold">{god?.name ?? direction.god}</p>
              <p className="break-keep-all mt-2 text-sm leading-6 text-muted">
                {god?.body}
              </p>
            </section>
          );
        })}
      </div>
    </>
  );
}

/** 문구의 `**…**`만 굵게 만든다. 마크다운 전체를 지원할 이유는 없다. */
function emphasize(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} className="font-semibold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
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
