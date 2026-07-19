import { AlertTriangle, CheckCircle2, Lock } from "lucide-react";
import type { ServiceConfig } from "@/lib/services";

type ResultCardProps = {
  service: ServiceConfig;
  result: unknown;
  revealedCount: number;
  candidateLimit?: number;
  detailedHanja?: boolean;
};

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

function text(value: unknown) {
  return typeof value === "string" || typeof value === "number"
    ? String(value)
    : "";
}

function publicFacingHanjaText(value: unknown) {
  const content = text(value);

  if (/내장 샘플|PDF 검수 데이터|import 대상|서비스 내 공식 한자 DB/.test(content)) {
    return "현재 검토 자료만으로 지정 음가와 등록 가능성을 충분히 확인하기 어렵습니다. 검증되지 않은 글자를 임의로 제안하지 않고, 공식 인명용 한자 조회 기준과 대조하기 전까지 추천을 보류했습니다.";
  }

  return content;
}

function compactRejectedReason(value: unknown) {
  const content = publicFacingHanjaText(value);
  if (/부정적 의미|자의.*부적합|이름.*부적합/.test(content)) return "부정적 의미 포함";
  if (/제외 조건|원하지 않는 의미/.test(content)) return "입력한 제외 조건과 일치";
  if (/지정 음가|공식.*확인|등록 가능/.test(content)) return "공식 음가·등록 기준 확인 필요";
  if (/사설영역|표시|글자 형태/.test(content)) return "표시·글자 형태 확인 필요";
  const firstSentence = content.split(/[.!?]/)[0]?.trim() || "추천 기준에 맞지 않음";
  return firstSentence.length > 32 ? `${firstSentence.slice(0, 32)}…` : firstSentence;
}

function arrayRecords(value: unknown) {
  return Array.isArray(value)
    ? value.filter(
        (item): item is Record<string, unknown> =>
          item !== null && typeof item === "object" && !Array.isArray(item),
      )
    : [];
}

function getCandidates(record: Record<string, unknown>) {
  return arrayRecords(record.candidates);
}

function numberValue(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}

function candidateRate(item: Record<string, unknown>) {
  return numberValue(item.matching_rate) ?? numberValue(item.suitability_score);
}

function candidateTitle(
  service: ServiceConfig,
  item: Record<string, unknown>,
  index: number,
) {
  if (service.serviceType === "GLOBAL_TO_KOREAN") {
    return text(item.hangul) || text(item.name) || `후보 ${index + 1}`;
  }

  if (service.serviceType === "KOREAN_TO_GLOBAL") {
    return text(item.name) || text(item.hangul) || `후보 ${index + 1}`;
  }

  return text(item.hanja) || text(item.hangul) || `후보 ${index + 1}`;
}

function candidateRows(
  service: ServiceConfig,
  item: Record<string, unknown>,
  detailedHanja = false,
) {
  if (service.slug === "global-name-to-hangul") {
    return [
      ["원어 발음 기준", item.source_pronunciation_basis],
      ["발음 기호", item.ipa],
      ["음절 분석", item.syllables],
      ["한글 표기 발음", item.pronunciation],
      ["추천 이유", item.recommendation_reason],
      ["한국어 자연스러움", item.cultural_fit],
      ["주의", item.caution_notes],
    ] satisfies Array<[string, unknown]>;
  }

  if (service.serviceType === "GLOBAL_TO_KOREAN") {
    return [
      ["추천 이유", item.recommendation_reason],
      ["발음", item.pronunciation],
      ["이름 의미", item.meaning],
      ["한국어 자연스러움", item.cultural_fit],
      ["사용 맥락", item.usage_note],
      ["한자 확장", item.hanja_addon_note],
      ["주의", item.caution_notes],
    ] satisfies Array<[string, unknown]>;
  }

  if (service.serviceType === "HANJA_MEANING_MATCH") {
    const rows: Array<[string, unknown]> = [
      ["한자 구성과 기본 뜻", compactHanjaComposition(item) || item.meaning],
      ["이 후보의 의미 구성", item.recommendation_reason],
    ];
    if (detailedHanja) {
      rows.push(
        ["이름 의미 이야기", item.story],
        ["실사용 이름 해석", item.practical_analysis],
      );
    }
    return rows.filter((row) => Boolean(row[1]));
  }

  return [
    ["추천 이유", item.recommendation_reason],
    ["의미", item.meaning || item.meaning_connection],
    ["이름 이야기", item.story],
    ["사주/정교화 메모", item.saju_note],
    ["현지/문화 적합성", item.cultural_fit || item.local_cautions],
    ["사용 인상", item.professional_impression || item.usage_note],
    ["주의", item.caution_notes],
    ["공식 데이터 상태", item.official_status],
  ] satisfies Array<[string, unknown]>;
}

function compactHanjaComposition(item: Record<string, unknown>) {
  return getBreakdown(item.character_breakdown)
    .map((part) => {
      const character = text(part.character);
      const meaning = text(part.meaning);
      const reading = text(part.designated_reading) || text(part.syllable);
      if (!character) return "";
      if (!meaning) return reading ? `${character} (${reading})` : character;
      return `${character} · ${meaning}${reading ? ` (${reading})` : ""}`;
    })
    .filter(Boolean)
    .join(" / ");
}

function getRejected(record: Record<string, unknown>) {
  return [
    ...arrayRecords(record.rejected_hanja),
    ...arrayRecords(record.rejected_options),
  ];
}

function groupRejected(
  rejected: Record<string, unknown>[],
  compactHanja: boolean,
) {
  const groups = new Map<string, string[]>();
  for (const item of rejected) {
    const character = text(item.character || item.name || item.hangul);
    if (!character) continue;
    const reason = compactHanja
      ? compactRejectedReason(item.reason)
      : text(item.reason) || "추천 기준에 맞지 않음";
    const characters = groups.get(reason) ?? [];
    if (!characters.includes(character)) characters.push(character);
    groups.set(reason, characters);
  }
  return [...groups.entries()];
}

function getBreakdown(value: unknown) {
  return arrayRecords(value);
}

function getNestedOptions(value: unknown) {
  const record = asRecord(value);
  return arrayRecords(record.options);
}

const hanjaRecommendationFocus = [
  {
    label: "종합 의미 우선안",
    description: "음가, 자의 결합과 실사용 설명력을 종합적으로 살핀 우선안",
  },
  {
    label: "자의 명확성 우선안",
    description: "선택 조건을 가정하지 않고 각 한자의 뜻이 분명한 조합을 우선한 대안",
  },
  {
    label: "전통 오행 보완안",
    description: "출생월 기반의 간이 전통 오행 참고를 비교축으로 강조한 대안",
  },
  {
    label: "실사용 안정안",
    description: "자의의 명확성, 설명 용이성과 일상적인 사용성을 중시한 대안",
  },
  {
    label: "개성·희소성 대안",
    description: "지정 음가는 유지하면서 상대적으로 차별화된 자의와 인상을 검토한 대안",
  },
] as const;

function getHanjaFocus(item: Record<string, unknown>, index: number) {
  const fallback = hanjaRecommendationFocus[index] ?? {
    label: `추천 관점 ${index + 1}`,
    description: "다른 기준으로 비교할 수 있는 추천 대안",
  };

  return {
    label: text(item.recommendation_focus) || fallback.label,
    description: text(item.focus_summary) || fallback.description,
  };
}

function collectHanjaOptions(candidates: Record<string, unknown>[]) {
  const grouped = new Map<
    string,
    Map<string, Record<string, unknown>>
  >();

  for (const candidate of candidates) {
    for (const group of getBreakdown(candidate.hanja_options)) {
      const syllable = text(group.syllable) || "이름";
      const options = grouped.get(syllable) ?? new Map();

      for (const option of getNestedOptions(group)) {
        const character = text(option.character);
        if (!character) continue;
        const existing = options.get(character);
        if (
          !existing ||
          (candidateRate(option) ?? -1) > (candidateRate(existing) ?? -1)
        ) {
          options.set(character, option);
        }
      }

      grouped.set(syllable, options);
    }
  }

  return Array.from(grouped, ([syllable, options]) => ({
    syllable,
    options: Array.from(options.values()).sort(
      (a, b) => (candidateRate(b) ?? -1) - (candidateRate(a) ?? -1),
    ),
  }));
}

function PronunciationCandidateDetails({
  item,
  title,
  matchingRate,
}: {
  item: Record<string, unknown>;
  title: string;
  matchingRate: number | null;
}) {
  const pronunciationFacts = [
    ["원어 발음 기준", item.source_pronunciation_basis],
    ["발음 기호", item.ipa],
    ["음절 분석", item.syllables],
    ["한글 표기 발음", item.pronunciation],
  ] satisfies Array<[string, unknown]>;
  const explanations = [
    ["표기 근거", item.recommendation_reason],
    ["한국어 표기 특징", item.cultural_fit],
  ] satisfies Array<[string, unknown]>;

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-start justify-between gap-4 rounded-lg bg-surface-strong p-5">
        <div>
          <p className="text-sm font-semibold text-brand-teal">
            추천 한글 표기
          </p>
          <h3 className="mt-2 text-3xl font-semibold tracking-normal sm:text-4xl">
            {title}
          </h3>
        </div>
        {matchingRate !== null ? (
          <span className="rounded-lg bg-background px-3 py-2 text-sm font-semibold text-brand-teal shadow-sm">
            매칭률 {matchingRate}%
          </span>
        ) : null}
      </div>

      <dl className="grid gap-3 sm:grid-cols-2">
        {pronunciationFacts
          .filter(([, value]) => text(value))
          .map(([label, value]) => (
            <div
              key={label}
              className="rounded-lg border border-line bg-background p-4"
            >
              <dt className="text-xs font-semibold text-brand-teal">{label}</dt>
              <dd className="mt-2 text-base font-medium leading-6 text-foreground">
                {text(value)}
              </dd>
            </div>
          ))}
      </dl>

      <dl className="grid gap-3 md:grid-cols-2">
        {explanations
          .filter(([, value]) => text(value))
          .map(([label, value]) => (
            <div key={label} className="rounded-lg bg-surface-strong p-4">
              <dt className="text-sm font-semibold">{label}</dt>
              <dd className="mt-2 text-sm leading-6 text-muted">
                {text(value)}
              </dd>
            </div>
          ))}
      </dl>

      {text(item.caution_notes) ? (
        <div className="rounded-lg border border-brand-rose/20 bg-brand-rose/5 p-4">
          <p className="text-sm font-semibold">확인 사항</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            {text(item.caution_notes)}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function ResultCard({
  service,
  result,
  revealedCount,
  candidateLimit = 5,
  detailedHanja = false,
}: ResultCardProps) {
  const record = asRecord(result);
  const allCandidates = getCandidates(record).sort(
    (a, b) => (candidateRate(b) ?? -1) - (candidateRate(a) ?? -1),
  );
  const candidates = allCandidates.slice(0, candidateLimit);
  const rejected = getRejected(record);
  const rejectedGroups = groupRejected(
    rejected,
    service.serviceType === "HANJA_MEANING_MATCH",
  );
  const commonAnalysis = asRecord(record.common_analysis);
  const firstCandidate = candidates[0] ?? {};
  const allCandidatesRevealed =
    allCandidates.length > 0 &&
    candidateLimit >= allCandidates.length &&
    revealedCount >= allCandidates.length;
  const comprehensiveHanjaOptions = collectHanjaOptions(candidates);

  return (
    <div className="grid gap-4">
      {service.slug !== "global-name-to-hangul" ? (
        <section className="rounded-lg border border-line bg-surface p-5 shadow-sm">
          {service.serviceType === "HANJA_MEANING_MATCH" ? (
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-brand-teal">
                  {allCandidatesRevealed ? "전체 후보 조회 완료" : "무료 후보 조회 완료"}
                </p>
                <h1 className="mt-1 text-2xl font-semibold">기본 검토 요약</h1>
              </div>
              <span className="rounded-full bg-brand-teal/10 px-3 py-1.5 text-xs font-semibold text-brand-teal">
                {candidates.length > 0
                  ? `추천 이름 조합 ${Math.min(revealedCount, candidates.length)}개 공개`
                  : "공식 확인 필요"}
              </span>
            </div>
          ) : (
            <p className="text-sm font-semibold text-brand-teal">분석 요약</p>
          )}
          <p className="mt-3 text-sm leading-6 text-muted">
            {publicFacingHanjaText(record.analysis_summary) || "분석 결과가 준비되었습니다."}
          </p>
          {service.serviceType === "HANJA_MEANING_MATCH" ? (
            <div className="mt-5 grid gap-4 border-t border-line pt-5 md:grid-cols-2">
              {[
                [
                  "음가 적합성",
                  commonAnalysis.sound_basis ||
                    "정해 둔 한글 이름의 각 음절과 공식 지정 발음이 일치하는 한자만 후보로 검토했습니다.",
                ],
                [
                  "출생 정보 참고 범위",
                  commonAnalysis.birth_reference || firstCandidate.saju_note,
                ],
                [
                  "자형 적용 기준",
                  commonAnalysis.caution_notes || firstCandidate.caution_notes,
                ],
                [
                  "등록 가능성 판단 기준",
                  commonAnalysis.official_status || firstCandidate.official_status,
                ],
              ]
                .filter(([, value]) => text(value))
                .map(([label, value]) => (
                  <div key={String(label)} className="rounded-lg bg-surface-strong p-4">
                    <p className="text-sm font-semibold">{text(label)}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {text(value)}
                    </p>
                  </div>
                ))}
            </div>
          ) : null}
        </section>
      ) : null}

      <section className="grid gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{service.resultLabel}</h2>
          {service.slug !== "global-name-to-hangul" ? (
            <span className="text-sm text-muted">
              {candidates.length > 0
                ? allCandidatesRevealed
                  ? `${allCandidates.length}개 전체 공개`
                  : `${Math.min(revealedCount, candidates.length)}개 공개 · 추가 후보 잠금`
                : "추천 보류"}
            </span>
          ) : null}
        </div>

        {candidates.length === 0 ? (
          <div className="rounded-lg border border-line bg-surface p-5 text-sm leading-6 text-muted shadow-sm">
            확인되지 않은 한자를 임의로 추천하지 않았습니다. 아래 검토 사유를 확인해 주세요.
          </div>
        ) : null}

        {candidates.map((item, index) => {
          const locked = index >= revealedCount;
          const title = candidateTitle(service, item, index);
          const subtitle =
            [text(item.hangul), text(item.pronunciation), text(item.region_fit)]
              .filter(Boolean)
              .join(" · ") || "추천 후보";
          const matchingRate = candidateRate(item);
          const focus = getHanjaFocus(item, index);

          return (
            <article
              key={`${title}-${index}`}
              className={`relative overflow-hidden rounded-lg border border-line bg-surface p-5 shadow-sm ${
                locked ? "min-h-32" : ""
              }`}
            >
              {!locked ? (
                <div>
                {service.slug === "global-name-to-hangul" ? (
                  <PronunciationCandidateDetails
                    item={item}
                    title={title}
                    matchingRate={matchingRate}
                  />
                ) : (
                  <>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        {service.serviceType === "HANJA_MEANING_MATCH" ? (
                          <p className="mb-2 inline-flex rounded-full bg-brand-teal/10 px-2.5 py-1 text-xs font-semibold text-brand-teal">
                            {focus.label}
                          </p>
                        ) : null}
                        <p className="text-sm text-muted">{subtitle}</p>
                        <h3 className="mt-1 text-2xl font-semibold tracking-normal">
                          {title}
                        </h3>
                        {service.serviceType === "HANJA_MEANING_MATCH" ? (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {getBreakdown(item.character_breakdown)
                              .filter((part) => text(part.origin_label))
                              .map((part) => (
                                <span
                                  key={`${text(part.character)}-${text(part.origin_label)}`}
                                  className="rounded-full border border-brand-teal/25 bg-brand-teal/5 px-2.5 py-1 text-xs font-semibold text-brand-teal"
                                >
                                  {text(part.character)} · {text(part.origin_label)}
                                </span>
                              ))}
                          </div>
                        ) : null}
                        {service.serviceType === "HANJA_MEANING_MATCH" ? (
                          <p className="mt-2 text-sm leading-6 text-muted">
                            {focus.description}
                          </p>
                        ) : null}
                      </div>
                      {matchingRate !== null ? (
                        <span className="rounded-lg bg-surface-strong px-3 py-2 text-sm font-semibold text-brand-teal">
                          {service.serviceType === "HANJA_MEANING_MATCH"
                            ? `조건 적합도 ${matchingRate}점`
                            : `매칭률 ${matchingRate}%`}
                        </span>
                      ) : service.serviceType === "HANJA_MEANING_MATCH" ? (
                        <span className="rounded-lg bg-surface-strong px-3 py-2 text-sm font-semibold text-brand-teal">
                          공식 음가 확인
                        </span>
                      ) : null}
                    </div>

                    <dl className="mt-4 grid gap-3 text-sm leading-6">
                      {candidateRows(service, item, detailedHanja)
                        .filter(([, value]) => text(value))
                        .map(([label, value]) => (
                          <div key={label} className="grid gap-1">
                            <dt className="font-medium text-foreground">
                              {label}
                            </dt>
                            <dd className="text-muted">{text(value)}</dd>
                          </div>
                        ))}
                    </dl>
                  </>
                )}

                {service.serviceType !== "HANJA_MEANING_MATCH" &&
                getBreakdown(item.character_breakdown).length ? (
                  <div className="mt-5 rounded-lg bg-surface-strong p-4">
                    <p className="text-sm font-semibold">음절별 한자 매칭</p>
                    <div className="mt-3 grid gap-2">
                      {getBreakdown(item.character_breakdown).map(
                        (part, partIndex) => (
                          <div
                            key={`${text(part.syllable)}-${text(part.character)}-${partIndex}`}
                            className="grid gap-1 rounded-lg bg-surface px-3 py-2 text-sm"
                          >
                            <p className="font-semibold">
                              {text(part.syllable)} → {text(part.character)}
                              {text(part.designated_reading)
                                ? ` / 지정 발음 ${text(part.designated_reading)}`
                                : ""}
                            </p>
                            <p className="text-muted">
                              {text(part.meaning)}
                              {text(part.note) ? ` · ${text(part.note)}` : ""}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                ) : null}
              </div>

              ) : null}

              {locked ? (
                <div className="grid min-h-32 content-center gap-3 text-center">
                  {service.serviceType === "HANJA_MEANING_MATCH" ? (
                    <div>
                      <p className="text-sm font-semibold text-brand-teal">
                        {index + 1}순위 · {focus.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {focus.description}
                      </p>
                    </div>
                  ) : null}
                  <span className="mx-auto inline-flex items-center gap-2 rounded-lg bg-foreground px-3 py-2 text-sm font-medium text-background">
                    <Lock aria-hidden="true" size={16} />
                    광고 1회 또는 전체 결제로 공개
                  </span>
                </div>
              ) : null}
            </article>
          );
        })}
      </section>

      {service.serviceType === "HANJA_MEANING_MATCH" && candidates.length > 0 ? (
        allCandidatesRevealed && comprehensiveHanjaOptions.length ? (
          <section className="rounded-lg border border-brand-teal/25 bg-surface p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal">
                <CheckCircle2 aria-hidden="true" size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-teal">
                  전체 후보 확인 완료
                </p>
                <h2 className="mt-1 text-lg font-semibold">한자 종합 상세</h2>
                <p className="mt-2 text-sm leading-6 text-muted">
                  다섯 후보에 사용된 한자를 음절별로 합쳐, 중복 없이 비교합니다.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-5">
              {comprehensiveHanjaOptions.map((group) => (
                <div key={group.syllable} className="grid gap-3">
                  <p className="text-sm font-semibold">
                    {group.syllable} 음절 추천 한자
                  </p>
                  <div className="grid gap-3 md:grid-cols-3">
                    {group.options.map((option) => (
                      <div
                        key={`${group.syllable}-${text(option.character)}`}
                        className="rounded-lg border border-line bg-background p-4 text-sm"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-2xl font-semibold">
                            {text(option.character)}
                          </p>
                          {candidateRate(option) !== null ? (
                            <span className="rounded-lg bg-surface-strong px-2 py-1 text-xs font-semibold text-brand-teal">
                              {candidateRate(option)}%
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-2 font-medium">{text(option.meaning)}</p>
                        <p className="mt-1 text-muted">
                          지정 발음 {text(option.designated_reading)}
                        </p>
                        {text(option.interpretation) ? (
                          <p className="mt-2 leading-5 text-muted">
                            {text(option.interpretation)}
                          </p>
                        ) : null}
                        {text(option.recommendation_reason) ? (
                          <p className="mt-2 leading-5 text-muted">
                            {text(option.recommendation_reason)}
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="rounded-lg border border-dashed border-line bg-surface-strong p-5 text-center">
            <Lock aria-hidden="true" className="mx-auto text-muted" size={20} />
            <h2 className="mt-3 text-base font-semibold">한자 종합 상세 잠금</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              모든 추천 후보를 확인하면 음절별 한자 뜻과 추천 근거를 한 번에 비교할 수 있습니다.
            </p>
          </section>
        )
      ) : null}

      {rejected.length ? (
        <section className="rounded-lg border border-brand-rose/25 bg-brand-rose/5 p-5">
          <div className="flex items-center gap-2">
            <AlertTriangle
              aria-hidden="true"
              className="text-brand-rose"
              size={18}
            />
            <h2 className="text-base font-semibold">배제 후보 요약</h2>
          </div>
          <div className="mt-4 grid gap-2">
            {rejectedGroups.map(([reason, characters]) => (
              <div
                key={reason}
                className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-lg bg-surface px-4 py-2.5 text-sm"
              >
                <p className="font-semibold">{reason}</p>
                <p className="text-base font-semibold tracking-wide text-brand-rose">
                  {characters.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {service.serviceType !== "HANJA_MEANING_MATCH" &&
      text(record.official_verification_note) ? (
        <section className="rounded-lg border border-line bg-surface p-5">
          <div className="flex items-center gap-2">
            <CheckCircle2
              aria-hidden="true"
              className="text-brand-teal"
              size={18}
            />
            <h2 className="text-base font-semibold">공식 확인 안내</h2>
          </div>
          <p className="mt-3 text-sm leading-6 text-muted">
            {text(record.official_verification_note)}
          </p>
        </section>
      ) : null}
    </div>
  );
}
