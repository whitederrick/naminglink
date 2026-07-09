import { AlertTriangle, CheckCircle2, Lock } from "lucide-react";
import type { ServiceConfig } from "@/lib/services";

type ResultCardProps = {
  service: ServiceConfig;
  result: unknown;
  revealAll: boolean;
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

function candidateRows(service: ServiceConfig, item: Record<string, unknown>) {
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

function getRejected(record: Record<string, unknown>) {
  return [
    ...arrayRecords(record.rejected_hanja),
    ...arrayRecords(record.rejected_options),
  ];
}

function getBreakdown(value: unknown) {
  return arrayRecords(value);
}

function getNestedOptions(value: unknown) {
  const record = asRecord(value);
  return arrayRecords(record.options);
}

export function ResultCard({ service, result, revealAll }: ResultCardProps) {
  const record = asRecord(result);
  const candidates = getCandidates(record)
    .sort((a, b) => (candidateRate(a) ?? 101) - (candidateRate(b) ?? 101))
    .slice(0, 5);
  const rejected = getRejected(record);

  return (
    <div className="grid gap-4">
      <section className="rounded-lg border border-line bg-surface p-5 shadow-sm">
        <p className="text-sm font-semibold text-brand-teal">분석 요약</p>
        <p className="mt-3 text-sm leading-6 text-muted">
          {text(record.analysis_summary) || "분석 결과가 준비되었습니다."}
        </p>
      </section>

      <section className="grid gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{service.resultLabel}</h2>
          <span className="text-sm text-muted">{candidates.length}개 후보</span>
        </div>

        {candidates.map((item, index) => {
          const locked = index > 0 && !revealAll;
          const title = candidateTitle(service, item, index);
          const subtitle =
            [text(item.hangul), text(item.pronunciation), text(item.region_fit)]
              .filter(Boolean)
              .join(" · ") || "추천 후보";
          const matchingRate = candidateRate(item);

          return (
            <article
              key={`${title}-${index}`}
              className="relative overflow-hidden rounded-lg border border-line bg-surface p-5 shadow-sm"
            >
              <div className={locked ? "select-none blur-sm" : ""}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-muted">{subtitle}</p>
                    <h3 className="mt-1 text-2xl font-semibold tracking-normal">
                      {title}
                    </h3>
                  </div>
                  {matchingRate !== null ? (
                    <span className="rounded-lg bg-surface-strong px-3 py-2 text-sm font-semibold text-brand-teal">
                      매칭률 {matchingRate}%
                    </span>
                  ) : null}
                </div>

                <dl className="mt-4 grid gap-3 text-sm leading-6">
                  {candidateRows(service, item)
                    .filter(([, value]) => text(value))
                    .map(([label, value]) => (
                      <div key={label} className="grid gap-1">
                        <dt className="font-medium text-foreground">{label}</dt>
                        <dd className="text-muted">{text(value)}</dd>
                      </div>
                    ))}
                </dl>

                {service.serviceType === "HANJA_MEANING_MATCH" &&
                getBreakdown(item.hanja_options).length ? (
                  <div className="mt-5 rounded-lg bg-surface-strong p-4">
                    <p className="text-sm font-semibold">추천 한자 상세</p>
                    <div className="mt-3 grid gap-4">
                      {getBreakdown(item.hanja_options).map(
                        (group, groupIndex) => (
                          <div
                            key={`${text(group.syllable)}-${groupIndex}`}
                            className="grid gap-2"
                          >
                            <p className="text-sm font-semibold">
                              {text(group.syllable)} 음절 후보
                            </p>
                            <div className="grid gap-2 md:grid-cols-3">
                              {getNestedOptions(group).map(
                                (option, optionIndex) => (
                                  <div
                                    key={`${text(option.character)}-${optionIndex}`}
                                    className={`rounded-lg border px-3 py-3 text-sm ${
                                      option.selected
                                        ? "border-foreground bg-surface"
                                        : "border-line bg-background"
                                    }`}
                                  >
                                    <div className="flex items-start justify-between gap-2">
                                      <p className="text-xl font-semibold">
                                        {text(option.character)}
                                      </p>
                                      {candidateRate(option) !== null ? (
                                        <span className="rounded-lg bg-surface-strong px-2 py-1 text-xs font-semibold text-brand-teal">
                                          {candidateRate(option)}%
                                        </span>
                                      ) : null}
                                    </div>
                                    <p className="mt-2 font-medium">
                                      {text(option.meaning)}
                                    </p>
                                    <p className="mt-1 text-muted">
                                      지정 발음 {text(option.designated_reading)}
                                    </p>
                                    <p className="mt-2 leading-5 text-muted">
                                      {text(option.interpretation)}
                                    </p>
                                    <p className="mt-2 leading-5 text-muted">
                                      {text(option.recommendation_reason)}
                                    </p>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                ) : null}

                {getBreakdown(item.character_breakdown).length ? (
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

              {locked ? (
                <div className="absolute inset-0 flex items-center justify-center bg-white/70 px-4 text-center">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-foreground px-3 py-2 text-sm font-medium text-background">
                    <Lock aria-hidden="true" size={16} />
                    프리미엄 후보 잠금
                  </span>
                </div>
              ) : null}
            </article>
          );
        })}
      </section>

      {rejected.length ? (
        <section className="rounded-lg border border-brand-rose/25 bg-brand-rose/5 p-5">
          <div className="flex items-center gap-2">
            <AlertTriangle
              aria-hidden="true"
              className="text-brand-rose"
              size={18}
            />
            <h2 className="text-base font-semibold">배제 후보와 이유</h2>
          </div>
          <div className="mt-4 grid gap-3">
            {rejected.map((item, index) => (
              <div
                key={`${text(item.character || item.name || item.hangul)}-${index}`}
                className="rounded-lg bg-surface px-4 py-3 text-sm"
              >
                <p className="font-semibold">
                  {text(item.character || item.name || item.hangul)}
                </p>
                <p className="mt-1 leading-6 text-muted">{text(item.reason)}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {text(record.official_verification_note) ? (
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
