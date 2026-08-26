"use client";

import Link from "next/link";
import { useCallback, useState } from "react";

import { AdBanner } from "@/components/AdBanner";
import { GuideLink } from "@/components/GuideLink";
import { localePath } from "@/lib/locale-path";
import { ReportPurchasePanel } from "@/components/ReportPurchasePanel";
import { emphasize } from "@/lib/emphasize";
import {
  scoreBand,
  type EngineResult,
  type Factor,
  type MutualRelation,
} from "@/lib/engines";
import type {
  PublicMatchOutcome,
  PublicPersonReading,
} from "@/lib/public-outcome";
import { fillTemplate, type Dictionary, type Locale } from "@/lib/i18n";
import { decodeMatchInput, type MatchInput } from "@/lib/match-input";
import {
  useResolveResult,
  useRestorePendingPaymentFragment,
  useResultFragment,
} from "@/lib/use-result-fragment";
import { romanizePillar } from "@naminglink/core/saju";

// 결제복귀 프래그먼트 복원과 계산 요청·결과 상태 관리는 AffinityResultView.tsx와 같은 훅
// (use-result-fragment.ts)을 쓴다 — 예전에는 두 파일이 이 로직 전체를 복붙해 두고 있었다.
// 그 훅이 돌려주는 `ResolveState`가 여기서 쓰던 `State`(loading/error/ready) 모양과 같다.

/**
 * 간지 아래에 적을 독음. **한국어면 한글, 그 밖에는 로마자다.**
 *
 * 한자(壬申)는 어느 언어에서도 그대로 둔다 — 그것이 간지의 원문이다. 바꾸는 것은 독음뿐인데,
 * 예전에는 로케일과 무관하게 언제나 한글이라 **독일어 이용자에게 「임신」이 나갔다**(2026-08-07).
 * 읽을 수 없는 글자는 정보가 아니다.
 */
function pillarReading(hangul: string, locale: Locale) {
  return locale === "ko" ? hangul : romanizePillar(hangul);
}

export function MatchResultView({
  dictionary,
  locale,
  offerPrice,
}: {
  dictionary: Dictionary;
  locale: Locale;
  /**
   * 서버가 `product_settings`에서 읽어 온 표시 가격. 판매 중이 아니면 null이다.
   *
   * 화면에서 가격을 만들지 않는다 — 결제 금액은 서버가 정하므로, 버튼에만 값을 박아 두면
   * 관리자 화면에서 가격을 바꾸는 순간 표시가와 청구액이 어긋난다.
   */
  offerPrice: string | null;
}) {
  const [copied, setCopied] = useState(false);
  const t = dictionary.result;

  // 지금 화면이 어느 프래그먼트로 계산된 것인지 기억한다. null이면 아직 못 읽은 것이다.
  // 주소가 확정되기를 기다리는 사연은 `useResultFragment`에 적어 두었다 — 인연의 결 화면과
  // 같은 것을 쓴다.
  const resolvedFragment = useResultFragment();

  // 결제복귀 프래그먼트 복원 + 계산 요청·결과 상태. 두 화면이 함께 쓰는 훅이다(위 주석 참고).
  useRestorePendingPaymentFragment();
  const state = useResolveResult<MatchInput, PublicMatchOutcome>({
    fragment: resolvedFragment,
    decode: decodeMatchInput,
    fetchUrl: "/api/match",
    serviceType: "GUNGHAP_MATCH",
    locale,
    dictionary,
    missingInputMessage: t.missingInput,
  });

  const copyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  // 아직 못 읽었거나, 읽어 둔 결과가 지금 주소의 프래그먼트와 다르면(= 두 번째 궁합을 방금
  // 요청했으면) 계산 중으로 본다.
  if (state.status === "loading" || state.fragment !== resolvedFragment) {
    return (
      <p className="mt-16 text-center text-muted">{dictionary.analyzing.title}</p>
    );
  }

  if (state.status === "error") {
    return (
      <div className="mt-16 text-center">
        <p role="alert" className="break-keep-all text-muted">
          {state.message}
        </p>
        <Link
          href={localePath("/compatibility", locale)}
          className="mt-6 inline-block rounded-full bg-brand-plum px-6 py-3 font-semibold text-white"
        >
          {t.recalculate}
        </Link>
      </div>
    );
  }

  // 결과는 이미 손에 있지만, 광고를 켠 상태에서는 이용자가 "광고 보고 결과 보기"를 누르기
  // 전까지 열지 않는다. 오류 화면에는 게이트를 세우지 않는다 — 보여 줄 것이 없는데 광고를
  // 보게 하는 것은 정책 위반이자 무례한 일이다.

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
            locale={locale}
          />
        ))}
      </div>

      {/* 중간 고정 배너. 상단(제목 옆 `header`)과 함께 이 화면의 배너는 둘이다.
          읽을 것이 끝난 자리가 아니라 **읽는 도중**에 둔다 — 사주 원국을 다 본 뒤,
          항목별 점수로 넘어가기 전이 경계다. 위아래로 버튼이 없는 자리라 오클릭 위험도 낮다
          (애드센스에서 오클릭은 정책 위반이자 계정 정지 사유다). */}
      {/* 결과를 읽은 직후가 "이 숫자는 어떻게 나왔나"가 가장 궁금한 자리다. */}
      <GuideLink locale={locale} from="compatibility" className="mt-12" />

      <AdBanner
        variant="inline"
        slotKey="compatibility_result_inline"
        locale={locale}
        className="mb-12 mt-6"
      />

      <h2 className="mt-12 text-xl font-semibold">{t.breakdown}</h2>
      <div className="mt-4 space-y-4">
        {outcome.engines.map((engine) => (
          <EngineCard key={engine.key} engine={engine} dictionary={dictionary} />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href={localePath("/compatibility", locale)}
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

      {/* 결과를 다 읽은 자리에 PDF 판매를 둔다. 판매 전(다크 런치)에는 버튼을 눌러도
          "준비 중"으로 되돌아온다. */}
      <ReportPurchasePanel
        kind="gunghap"
        copy={dictionary.report}
        locale={locale}
        input={input}
        offerPrice={offerPrice}
      />

      {/* 배너는 위 한 자리로 옮겼다(상단 제목 옆 + 중간, 이 화면에 둘). 예전에는 여기 맨 아래에
          있었는데, 결과를 다 읽고 PDF 구매까지 지난 자리라 사실상 아무도 보지 않는 위치였다.
          광고는 '결과가 실제로 나온' 갈래 안에만 둔다 — 페이지 쪽에 두면 입력을 못 읽어 오류가
          뜬 화면에도 실리고, 내용 없는 화면의 광고는 애드센스 정책 위반이다. */}
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
  locale,
}: {
  reading: PublicPersonReading;
  fallbackName: string;
  dictionary: Dictionary;
  /** 간지 독음을 한글로 낼지 로마자로 낼지 가른다(`pillarReading`). */
  locale: Locale;
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
                  {pillarReading(pillar.value.hangul, locale)}
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

        {/* 신강·신약과 그래서 필요한 기운. 점수의 근거이자 이 사람 혼자만 봐도 읽을거리다. */}
        <div className="mt-4 rounded-lg bg-surface-strong/60 p-3">
          <p className="text-xs font-semibold text-muted">
            {t.bodyStrengthTitle}
            <span className="ml-2 font-normal text-foreground">
              {dictionary.bodyStrength[reading.bodyStrength].name}
            </span>
          </p>
          <p className="break-keep-all mt-1.5 text-xs leading-5 text-muted">
            {dictionary.bodyStrength[reading.bodyStrength].body}
          </p>
          <p className="mt-2 text-xs text-muted">
            {t.favorableLabel}{" "}
            <span className="font-semibold text-foreground">
              {reading.favorableElements
                .map((element) => dictionary.elements[element])
                .join(" · ")}
            </span>
          </p>
        </div>
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
