import type { Dictionary, Locale } from "@/lib/i18n";
import { ELEMENT_COLOR, pillarReading } from "@/lib/pillar-display";
import type { PublicPersonReading } from "@/lib/public-outcome";

/**
 * 사주 풀이 결과의 세 구역 — **원국 · 일간 · 오행 세력.**
 *
 * 결과 화면(`SajuResultView`)과 안내 「예시로 읽는 사주」(`/guide/examples`)가 함께 쓴다. 예시가
 * 실제 화면과 **같은 부품**으로 그려져야 "직접 넣으면 이렇게 나온다"는 말이 참이다 — 마크업을
 * 복사해 두면 한쪽만 고쳐지는 날 예시가 거짓이 된다.
 *
 * 훅이 없는 순수 표시 부품이라 서버·클라이언트 어디서든 쓴다.
 *
 * **무료 몫만 받는다.** `PublicPersonReading` 에는 강약·용신·근거 숫자가 없다
 * (`public-outcome.ts` 가 허용목록으로 걷어낸다) — 이 부품이 그릴 수 있는 것이 곧 무료 화면이다.
 */

type SectionProps = {
  dictionary: Dictionary;
  locale: Locale;
  reading: PublicPersonReading;
};

/** 사주 원국 — 네 기둥. 시각을 모르면 시주가 없다. */
export function PillarsSection({ dictionary, locale, reading }: SectionProps) {
  const r = dictionary.reading;
  return (
    <section className="rounded-2xl border border-line/70 bg-surface/80 p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-brand-navy">{r.chartTitle}</h2>
      <div className="mt-3 grid grid-cols-4 gap-2 text-center">
        {[reading.pillars.year, reading.pillars.month, reading.pillars.day, reading.pillars.hour].map(
          (pillar, index) => (
            <div key={index} className="rounded-xl border border-line/60 bg-surface px-2 py-3">
              <div className="text-2xl font-semibold">{pillar?.hanja ?? "—"}</div>
              <div className="mt-1 text-xs text-muted">
                {pillar ? pillarReading(pillar.hangul, locale) : ""}
              </div>
            </div>
          ),
        )}
      </div>
      <p className="break-keep-all mt-3 text-xs leading-6 text-muted">{r.chartHint}</p>
    </section>
  );
}

/**
 * 일간 한 줄 — 무료 화면에서 가장 개인적인 자리다.
 *
 * **강약 판정은 여기 없다.** 일간이 무엇인지는 원국 표에서 이미 보이므로 무료로 주고,
 * 그 일간이 강한지 약한지와 그래서 어떤 기운이 필요한지(용신)는 리포트가 판다.
 * 이름과 성향 한 줄은 사전이 갖는다 — 엔진은 글자(`甲`)만 준다.
 */
export function DayMasterSection({ dictionary, reading }: Omit<SectionProps, "locale">) {
  const r = dictionary.reading;
  const dayMaster = dictionary.dayMasters[reading.dayMaster.character];
  return (
    <section className="rounded-2xl border border-line/70 bg-surface/80 p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-brand-navy">{r.dayMasterLabel}</h2>
      <p className="mt-2 text-2xl font-semibold text-brand-navy">
        {dayMaster?.name ?? reading.dayMaster.character}
      </p>
      {dayMaster ? (
        <p className="break-keep-all mt-2 text-sm leading-7">{dayMaster.trait}</p>
      ) : null}
      <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs leading-6">
        <div className="flex gap-2">
          <dt className="text-muted">{r.animalLabel}</dt>
          <dd>{dictionary.animals[reading.animal] ?? reading.animal}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="text-muted">{r.seasonLabel}</dt>
          <dd>{dictionary.elements[reading.seasonElement]}</dd>
        </div>
      </dl>
    </section>
  );
}

/**
 * 오행 세력 — **막대로 개략만.** 리포트와 같은 눈금(합을 100으로 본 비율)이라 두 곳이 같은
 * 그림을 말한다. 월령 전 세력·왕상휴수사·강약 근거 숫자는 리포트에만 있다.
 */
export function ElementsSection({ dictionary, reading }: Omit<SectionProps, "locale">) {
  const r = dictionary.reading;

  // 리포트의 막대와 **같은 방식으로** 센다(합을 100으로 본다). 두 곳이 다른 눈금을 쓰면 산
  // 사람이 화면과 문서를 나란히 놓고 볼 때 값이 어긋난 것으로 읽힌다.
  const elementTotal =
    Object.values(reading.elements).reduce((sum, value) => sum + value, 0) || 1;
  const elementPercents = (
    Object.keys(reading.elements) as Array<keyof typeof reading.elements>
  ).map((element) => ({
    element,
    percent: Math.round((reading.elements[element] / elementTotal) * 100),
  }));

  return (
    <section className="rounded-2xl border border-line/70 bg-surface/80 p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-brand-navy">{r.elementsTitle}</h2>
      <div className="mt-3 flex h-2.5 overflow-hidden rounded-full bg-surface-strong">
        {elementPercents.map(({ element, percent }) => (
          <div
            key={element}
            style={{ width: `${percent}%`, backgroundColor: ELEMENT_COLOR[element] }}
          />
        ))}
      </div>
      <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs leading-6">
        {elementPercents.map(({ element, percent }) => (
          <div key={element} className="flex items-center gap-1.5">
            <span
              aria-hidden
              className="size-2 rounded-full"
              style={{ backgroundColor: ELEMENT_COLOR[element] }}
            />
            <dt>{dictionary.elements[element]}</dt>
            <dd className="tabular-nums text-muted">{percent}%</dd>
          </div>
        ))}
      </dl>
      <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <div className="rounded-lg border border-line/60 bg-surface px-3 py-2">
          <dt className="text-xs text-muted">{r.strongest}</dt>
          <dd className="mt-0.5 font-semibold">
            {dictionary.elements[reading.strongestElement]}
          </dd>
        </div>
        <div className="rounded-lg border border-line/60 bg-surface px-3 py-2">
          <dt className="text-xs text-muted">{r.scarcest}</dt>
          <dd className="mt-0.5 font-semibold">
            {dictionary.elements[reading.scarcestElement]}
          </dd>
        </div>
      </dl>
    </section>
  );
}
