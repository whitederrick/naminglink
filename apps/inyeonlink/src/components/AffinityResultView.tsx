"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import type { FiveElement } from "@naminglink/core/saju";

import { AdBanner } from "@/components/AdBanner";
import { GuideLink } from "@/components/GuideLink";
import { trackAnalytics } from "@/lib/analytics-client";
import { localePath } from "@/lib/locale-path";
import { ReportPurchasePanel } from "@/components/ReportPurchasePanel";
import { TypeCheckModal } from "@/components/TypeCheckModal";
import {
  decodeAffinityInput,
  type AffinityInput,
} from "@/lib/affinity-input";
import { emphasize } from "@/lib/emphasize";
import type {
  AffinityOutcome,
  BranchCandidate,
  StemCandidate,
} from "@/lib/engines";
import { fillTemplate, type Dictionary, type Locale } from "@/lib/i18n";
import { decodeFragment, useResultFragment } from "@/lib/use-result-fragment";

// 궁합 결과 화면과 같은 뼈대다 — 프래그먼트를 읽어 POST로 계산을 요청하고, 주소가 바뀌면
// 다시 계산한다. 다른 것은 **보여 주는 방식**이다. 궁합은 하나의 총점을 크게 세우지만 여기서는
// 총점을 내지 않는다(`lib/engines/affinity.ts` 참고). 대신 유형을 세로로 늘어놓는다.

type State =
  | { status: "loading" }
  | { status: "error"; message: string; fragment: string }
  | {
      status: "ready";
      outcome: AffinityOutcome;
      input: AffinityInput;
      fragment: string;
    };

/** 본문에 세워 보여 줄 상위 유형 수. 하나만 내면 "그 사람 어디 있나"가 되고, 열을 다 내면 답이 아니다. */
const BEST_COUNT = 3;
/** 곁들이는 띠도 같은 이유로 셋만. */
const ZODIAC_COUNT = 3;

/**
 * 화면 아래쪽 두 버튼(유형 확인기·사주 궁합)이 함께 쓰는 모양.
 *
 * 세로로 이어지는 자리라 **폭이 다르면 층이 진 것처럼 보인다.** 한 곳에 적어 두면 한쪽만
 * 고쳐 어긋나는 일이 없다. 색은 각자 정한다 — 주된 다음 걸음은 사주 궁합이므로 그쪽만 칠한다.
 */
const ACTION_BUTTON =
  "inline-block w-full max-w-xs rounded-full px-7 py-3 font-semibold transition";

export function AffinityResultView({
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
  const [state, setState] = useState<State>({ status: "loading" });
  const [copied, setCopied] = useState(false);
  const [checkOpen, setCheckOpen] = useState(false);
  const t = dictionary.affinity;
  const resolvedFragment = useResultFragment();

  useEffect(() => {
    if (resolvedFragment === null) return;
    const fragment = resolvedFragment;
    let cancelled = false;

    // 프래그먼트 해석 실패도 예외로 던져 한 갈래로 모은다. effect 안에서 setState를 동기로
    // 호출하면 렌더가 연쇄로 도는데, .catch는 마이크로태스크라 그 문제가 없다.
    async function resolve() {
      const decoded = decodeFragment(fragment);
      const input = decoded ? decodeAffinityInput(decoded) : null;
      if (!input) throw new Error("MISSING_INPUT");

      const response = await fetch("/api/affinity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "UNKNOWN");
      }
      return { outcome: (await response.json()) as AffinityOutcome, input };
    }

    resolve()
      .then(({ outcome, input }) => {
        if (cancelled) return;
        setState({ status: "ready", outcome, input, fragment });
        trackAnalytics({ eventType: "ANALYSIS_COMPLETED", serviceType: "AFFINITY_MATCH", locale });
      })
      .catch((cause: Error) => {
        if (cancelled) return;
        setState({
          status: "error",
          message: errorMessage(cause.message),
          fragment,
        });
        // 실패도 남긴다 — 완료만 세면 완료율이 항상 100%로 보인다.
        trackAnalytics({ eventType: "ANALYSIS_FAILED", serviceType: "AFFINITY_MATCH", locale });
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
  }, [resolvedFragment, dictionary, locale, t.missingInput]);

  const copyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  // 아직 못 읽었거나, 읽어 둔 결과가 지금 주소의 프래그먼트와 다르면 계산 중으로 본다.
  if (state.status === "loading" || state.fragment !== resolvedFragment) {
    return <p className="mt-16 text-center text-muted">{t.submitting}</p>;
  }

  if (state.status === "error") {
    return (
      <div className="mt-16 text-center">
        <p role="alert" className="break-keep-all text-muted">
          {state.message}
        </p>
        <Link
          href={localePath("/affinity", locale)}
          className="mt-6 inline-block rounded-full bg-brand-plum px-6 py-3 font-semibold text-white"
        >
          {t.recalculate}
        </Link>
      </div>
    );
  }

  // 결과는 이미 손에 있지만, 광고를 켠 상태에서는 이용자가 "광고 보고 결과 보기"를 누르기
  // 전까지 열지 않는다. 인연의 결은 후보를 하나씩 여는 구조가 아니라 한 번에 다 보는 1회성
  // 결과라, 진입에 두는 광고 하나가 이 화면의 유일한 보상형 자리다.
  // 오류 화면에는 세우지 않는다 — 보여 줄 것이 없는데 광고를 보게 할 수는 없다.
  // 간이 유형 확인기(TypeCheckModal)는 결과 안의 곁들임이라 게이트 대상이 아니다.

  const { outcome, input } = state;
  const best = outcome.stems.slice(0, BEST_COUNT);
  // 꼴찌 하나만 뽑는다. 여럿을 "피하라"고 늘어놓으면 서비스가 사람을 가려내는 꼴이 된다.
  const hardest = outcome.stems[outcome.stems.length - 1];
  const bodyStrength = dictionary.bodyStrength[outcome.me.bodyStrength];
  const dayMaster = dictionary.dayMasters[outcome.me.dayMaster.character];

  return (
    <div className="mt-6">
      <p className="break-keep-all leading-7 text-muted">
        {emphasize(t.intro)}
      </p>

      {outcome.precision === "PARTIAL_NO_TIME" ? (
        <p className="break-keep-all mt-4 rounded-xl border border-line bg-surface/70 px-4 py-3 text-sm leading-6 text-muted">
          {t.partialTime}
        </p>
      ) : null}

      {/* 내 자리부터 밝힌다. 무엇을 근거로 이런 유형을 골랐는지 먼저 보여야 뒤가 읽힌다. */}
      <section className="mt-8 rounded-2xl border border-brand-plum/25 bg-brand-plum/6 p-5">
        <h2 className="text-sm font-semibold text-brand-plum">{t.meTitle}</h2>
        <p className="break-keep-all mt-2 text-lg font-semibold">
          {fillTemplate(t.meBody, {
            dayMaster: dayMaster?.name ?? outcome.me.dayMaster.character,
            strength: bodyStrength?.name ?? outcome.me.bodyStrength,
          })}
        </p>
        <p className="break-keep-all mt-2 text-sm leading-6 text-muted">
          {dayMaster?.trait}
        </p>
        <p className="break-keep-all mt-2 text-sm leading-6 text-muted">
          {bodyStrength?.body}
        </p>
        {/* 일간이라는 말이 처음 나오는 자리. 여기서 풀어 두면 아래 유형 카드가 읽힌다. */}
        <p className="break-keep-all mt-4 border-t border-brand-plum/20 pt-3 text-sm leading-6 text-muted">
          {emphasize(t.meHint)}
        </p>
      </section>

      {/* 본문 — 성향으로 알아보는 자리 */}
      <h2 className="mt-12 text-xl font-semibold">{t.bestTitle}</h2>
      <p className="break-keep-all mt-2 text-sm leading-6 text-muted">
        {emphasize(t.bestHint)}
      </p>
      <div className="mt-4 space-y-4">
        {best.map((candidate, index) => (
          <StemCard
            key={candidate.stem}
            candidate={candidate}
            myElement={outcome.me.dayMaster.element}
            dictionary={dictionary}
            rank={index + 1}
            tone="best"
            showHelp={index === 0}
          />
        ))}
      </div>

      <h2 className="mt-12 text-xl font-semibold">{t.avoidTitle}</h2>
      <p className="break-keep-all mt-2 text-sm leading-6 text-muted">
        {t.avoidHint}
      </p>
      <div className="mt-4">
        <StemCard
          candidate={hardest}
          myElement={outcome.me.dayMaster.element}
          dictionary={dictionary}
          rank={null}
          tone="hard"
        />
      </div>

      {/* 필요한 기운 — 오행 축 */}
      <section className="mt-12 rounded-2xl border border-line bg-surface p-5">
        <h2 className="text-lg font-semibold">{t.needTitle}</h2>
        <p className="break-keep-all mt-2 leading-7">
          {fillTemplate(t.needBody, {
            elements: outcome.needElements
              .map((element) => dictionary.elements[element])
              .join(" · "),
          })}
        </p>
        <p className="break-keep-all mt-2 text-sm leading-6 text-muted">
          {t.needHint}
        </p>
      </section>

      {/* 중간 고정 배너. 상단(제목 옆 `header`)과 함께 이 화면의 배너는 둘이다.
          본론(맞는 유형·피할 유형·필요한 기운)이 끝나고 곁들임(띠)으로 넘어가는 경계에 둔다 —
          읽을 것이 끝난 자리가 아니라 읽는 도중이어야 한다. 위아래로 버튼이 없어 오클릭 위험도
          낮다(애드센스에서 오클릭은 정책 위반이자 계정 정지 사유다). */}
      {/* 결과를 읽은 직후가 "이 숫자는 어떻게 나왔나"가 가장 궁금한 자리다. */}
      <GuideLink locale={locale} className="mt-12" />

      <AdBanner placement="result" locale={locale} className="mb-12 mt-6" />

      {/* 곁들임 — 띠 */}
      <h2 className="mt-12 text-xl font-semibold">{t.zodiacTitle}</h2>
      <p className="break-keep-all mt-2 text-sm leading-6 text-muted">
        {t.zodiacHint}
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <BranchPanel
          title={t.zodiacGood}
          candidates={outcome.zodiac.slice(0, ZODIAC_COUNT)}
          myYear={outcome.myZodiacYear}
          dictionary={dictionary}
          tone="best"
        />
        <BranchPanel
          title={t.zodiacHard}
          candidates={outcome.zodiac.slice(-1)}
          myYear={outcome.myZodiacYear}
          dictionary={dictionary}
          tone="hard"
        />
      </div>
      <p className="break-keep-all mt-3 text-xs leading-5 text-muted">
        {emphasize(t.zodiacYearsCaution)}
      </p>

      {/* 일지는 상대의 생년월일을 알아야 확인할 수 있다. 그래서 "나중에 볼 것"으로 따로 둔다. */}
      <section className="mt-8 rounded-2xl border border-line bg-surface/70 p-5">
        <h2 className="text-base font-semibold">{t.dayBranchTitle}</h2>
        {/* 문장이 둘이다. 한 문단으로 붙이면 "간단히"라는 말과 달리 빽빽해 보이므로 줄을 나누고
            사이를 띄운다. space-y로 문장 사이만 벌리고 줄 안쪽은 leading으로 따로 잡는다. */}
        <div className="mt-3 space-y-2.5">
          {t.dayBranchBody.split("\n").map((line) => (
            <p
              key={line}
              className="break-keep-all text-sm leading-7 text-muted"
            >
              {emphasize(line)}
            </p>
          ))}
        </div>
        {/* 잘 맞는 일지 셋을 한자로 늘어놓았었는데 지웠다. **일지의 동물 이름은 거짓 신호다**
            — 바로 위 띠 칸에서 같은 동물 이름을 쓰는데 일지는 태어난 해가 아니라 태어난 날에서
            나오므로 띠와 아무 상관이 없다. 읽는 사람은 "호랑이띠 사람"으로 읽는다.
            동물 이름을 빼도 남는 것은 뜻 모를 한자 셋이고, 일지는 만세력으로 계산해야 나오는
            값이라 눈으로 대볼 수도 없다. 확인기로 넘기는 편이 정직하다. */}

        {/* 확인기는 여기에 둔다. 이 칸이 "생년월일을 알게 되면 확인해 보십시오"라고 말하는
            자리이므로, 확인할 수단이 같은 자리에 있어야 말이 맺힌다.
            아래 "사주 궁합 보기"와 **너비·정렬을 같게** 맞춘다(w-full max-w-xs, 가운데). 두
            버튼이 세로로 이어지는 자리라 폭이 다르면 층이 진 것처럼 보인다. 칠하지 않고
            테두리로 둔 것만 다르다 — 이 화면의 주된 다음 걸음은 사주 궁합이기 때문이다. */}
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setCheckOpen(true)}
            className={`${ACTION_BUTTON} border border-brand-plum/40 bg-brand-plum/8 text-brand-plum hover:bg-brand-plum/16`}
          >
            {t.check.button}
          </button>
        </div>
      </section>

      {checkOpen ? (
        <TypeCheckModal
          outcome={outcome}
          dictionary={dictionary}
          onClose={() => setCheckOpen(false)}
        />
      ) : null}

      {/* 결과를 다 읽은 자리에 PDF 판매를 둔다. 화면은 전부 무료이고 **PDF만 판다** — 이 메뉴는
          혼자서도 쓸 수 있는 진입점이라 유료로 막으면 진입점이 아니게 된다. 판매 전(다크 런치)
          에는 버튼이 "준비 중"으로 뜬다. */}
      <ReportPurchasePanel
        kind="affinity"
        copy={dictionary.affinityReport}
        locale={locale}
        input={input}
        offerPrice={offerPrice}
      />

      {/* 배너는 위 중간 자리로 옮겼다(상단 제목 옆 + 중간, 이 화면에 둘). 여기는 PDF 구매 패널과
          다음 서비스 안내 사이라 위아래가 전부 누를 것이었다 — 광고를 끼우기에 가장 나쁜 자리다. */}

      {/* 사주 궁합으로 이어 주는 계단. 이 화면이 못 하는 것(총점)을 하는 자리다. */}
      <section className="rounded-2xl border border-brand-plum/25 bg-brand-plum/6 p-6 text-center">
        <h2 className="text-lg font-semibold">{t.nextTitle}</h2>
        {/* 가운데 정렬한 짧은 문단이라 마지막 줄에 한 단어만 떨어지기 쉽다("…나옵니다." 하나만
            남았었다). balance가 줄 길이를 고르게 나눠 그 고아 줄을 없앤다. 폭도 함께 넓혀
            두 줄 안에 들어오게 한다 — 지원하지 않는 브라우저에서도 폭만으로 대개 해결된다. */}
        <p className="break-keep-all mx-auto mt-2 max-w-lg text-sm leading-6 text-muted [text-wrap:balance]">
          {t.nextBody}
        </p>
        <Link
          href={localePath("/compatibility", locale)}
          className={`${ACTION_BUTTON} mt-5 bg-brand-plum text-white hover:opacity-90`}
        >
          {t.nextButton}
        </Link>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href={localePath("/affinity", locale)}
          className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium"
        >
          {t.recalculate}
        </Link>
        <button
          type="button"
          onClick={copyLink}
          className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium"
        >
          {copied ? t.copied : t.copyLink}
        </button>
      </div>

      <p className="break-keep-all mt-6 text-xs leading-5 text-muted">
        {t.disclaimer}
      </p>
      <p className="mt-2 text-xs text-muted">
        {dictionary.result.engineVersion} {outcome.version} ·{" "}
        {outcome.engineVersion}
      </p>
    </div>
  );
}

function StemCard({
  candidate,
  myElement,
  dictionary,
  rank,
  tone,
  showHelp = false,
}: {
  candidate: StemCandidate;
  /** 내 일간의 오행. 짝 설명 문구가 두 오행을 함께 부르므로 필요하다. */
  myElement: FiveElement;
  dictionary: Dictionary;
  /** 순위. 피할 유형에는 붙이지 않는다. */
  rank: number | null;
  tone: "best" | "hard";
  /** 항목 풀이를 붙일지. 첫 카드에만 붙인다. */
  showHelp?: boolean;
}) {
  const t = dictionary.affinity;
  const stem = dictionary.dayMasters[candidate.stem];
  // 상대가 나에게 어떤 자리인지를 본문으로 쓴다. 방향이 있는 값이라 "내가 볼 때"를 쓴다 —
  // 상대를 찾는 사람은 나다.
  const god = dictionary.tenGods[candidate.iSeeThem];
  const bondNote = dictionary.notes[`dayMaster.${candidate.bond}`];
  const signs = dictionary.dayMasterSigns[candidate.stem];

  return (
    <section
      className={
        tone === "best"
          ? "rounded-2xl border border-line bg-surface p-5"
          : "rounded-2xl border border-line bg-surface/70 p-5"
      }
    >
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {rank ? (
          <span
            aria-hidden
            className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-plum text-xs font-semibold text-white"
          >
            {rank}
          </span>
        ) : null}
        <h3 className="text-lg font-semibold">
          {fillTemplate(t.typeHeading, {
            name: stem?.name ?? candidate.stem,
          })}
        </h3>
        <span className="text-xs text-muted">
          {dictionary.elements[candidate.element]}
        </span>
      </div>

      {/* 성향이 본문이다. 생일을 모르는 상대를 알아볼 수 있는 것은 이것뿐이다. */}
      <p className="break-keep-all mt-3 leading-7">{stem?.trait}</p>

      {/* 비유만으로는 눈앞의 사람에게 대 보기 어렵다. 같은 성질을 자리에서 볼 수 있는 행동으로
          풀어 덧붙인다 — 비유를 지우지 않고 아래에 쌓는다. */}
      {signs?.length ? (
        <div className="mt-4 rounded-xl bg-surface-strong/50 px-4 py-3">
          <p className="text-xs font-semibold text-brand-plum">
            {t.signsTitle}
          </p>
          <ul className="mt-2 space-y-1.5">
            {signs.map((sign) => (
              <li
                key={sign}
                className="break-keep-all flex gap-2 text-sm leading-6"
              >
                <span aria-hidden className="text-brand-plum">
                  ·
                </span>
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {god ? (
        <p className="break-keep-all mt-3 text-sm leading-6 text-muted">
          <span className="font-semibold text-foreground">{god.name}</span>{" "}
          {god.body}
        </p>
      ) : null}

      {bondNote ? (
        <p className="break-keep-all mt-2 text-sm leading-6 text-muted">
          {fillTemplate(bondNote, {
            // 궁합 화면에서는 A가 첫 번째 사람이다. 여기서 첫 번째 사람은 언제나 나다.
            elementA: dictionary.elements[myElement] ?? "",
            elementB: dictionary.elements[candidate.element] ?? "",
          })}
        </p>
      ) : null}

      {/* 항목 점수는 궁합 엔진이 실제로 쓰는 값이다. 총점으로 오해할 수 있는 자리라 주의를
          숫자 바로 옆에 붙인다 — 화면 첫머리에 두면 결과를 읽기도 전에 사과가 된다. */}
      <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-3 text-sm">
        <div className="flex items-baseline gap-2">
          <dt className="text-muted">{t.bondLabel}</dt>
          <dd className="font-semibold tabular-nums">{candidate.bondScore}</dd>
        </div>
        <div className="flex items-baseline gap-2">
          <dt className="text-muted">{t.spouseLabel}</dt>
          <dd className="font-semibold tabular-nums">
            {candidate.spouse ? (
              candidate.spouse.score
            ) : (
              <span className="text-xs font-normal text-muted">
                {t.spouseSkipped}
              </span>
            )}
          </dd>
        </div>
      </dl>
      <p className="break-keep-all mt-2 text-xs leading-5 text-muted">
        {t.scoreCaption}
      </p>
      {/* 두 항목의 이름만으로는 무엇을 재는지 알 수 없다("배우자성"이 무슨 말인지 모르겠다는
          지적이 있었다). 첫 카드에만 풀이를 달아 매 카드마다 같은 글을 반복하지 않는다. */}
      {showHelp ? (
        <div className="mt-3 space-y-2 rounded-xl border border-line bg-background/60 px-4 py-3">
          {t.scoreHelp.split("\n").map((line) => (
            <p
              key={line}
              className="break-keep-all text-xs leading-5 text-muted"
            >
              {emphasize(line)}
            </p>
          ))}
        </div>
      ) : null}
    </section>
  );
}

function BranchPanel({
  title,
  candidates,
  myYear,
  dictionary,
  tone,
}: {
  title: string;
  candidates: BranchCandidate[];
  /** 내 사주 연주의 해. 나이 차를 세는 기준이다. */
  myYear: number;
  dictionary: Dictionary;
  tone: "best" | "hard";
}) {
  const t = dictionary.affinity;

  return (
    <section
      className={
        tone === "best"
          ? "rounded-2xl border border-line bg-surface p-5"
          : "rounded-2xl border border-line bg-surface/70 p-5"
      }
    >
      <h3 className="text-sm font-semibold text-brand-plum">{title}</h3>
      <ul className="mt-3 space-y-4">
        {candidates.map((candidate) => (
          <li key={candidate.branch}>
            <p className="font-semibold">
              {dictionary.animals[candidate.animal] ?? candidate.animal}
            </p>
            <p className="break-keep-all mt-1 text-sm leading-6 text-muted">
              {dictionary.animalTraits[candidate.animal]}
            </p>
            {/* "닭띠와 맞습니다"만으로는 쓸 데가 없다. 남의 띠를 외우고 다니는 사람은 없고
                생년은 대개 안다 — 연도와 나이 차로 바꿔야 비로소 써먹을 수 있는 말이 된다. */}
            {candidate.years.length ? (
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {candidate.years.map((year) => (
                  <li
                    key={year}
                    className="rounded-full border border-line bg-background/70 px-2.5 py-1 text-xs tabular-nums"
                  >
                    {fillTemplate(t.bornYear, { year: String(year) })}
                    <span className="ml-1 text-muted">
                      {ageGapLabel(year - myYear, t)}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** 연도 차를 "3살 아래" 같은 말로. 양수면 나보다 늦게 태어난 것이다. */
function ageGapLabel(gap: number, t: Dictionary["affinity"]) {
  if (gap === 0) return t.sameAge;
  return fillTemplate(gap > 0 ? t.younger : t.older, {
    n: String(Math.abs(gap)),
  });
}
