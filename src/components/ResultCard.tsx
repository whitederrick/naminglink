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

function getRejected(record: Record<string, unknown>) {
  return [
    ...arrayRecords(record.rejected_hanja),
    ...arrayRecords(record.rejected_options),
  ];
}

function getBreakdown(value: unknown) {
  return arrayRecords(value);
}

export function ResultCard({ service, result, revealAll }: ResultCardProps) {
  const record = asRecord(result);
  const candidates = getCandidates(record);
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
          const title =
            text(item.hanja) ||
            text(item.name) ||
            text(item.hangul) ||
            `후보 ${index + 1}`;
          const subtitle =
            [text(item.hangul), text(item.pronunciation), text(item.region_fit)]
              .filter(Boolean)
              .join(" · ") || "추천 후보";
          const score = text(item.suitability_score);

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
                  {score ? (
                    <span className="rounded-lg bg-surface-strong px-3 py-2 text-sm font-semibold text-brand-teal">
                      {score}/100
                    </span>
                  ) : null}
                </div>

                <dl className="mt-4 grid gap-3 text-sm leading-6">
                  {(
                    [
                      ["의미", item.meaning || item.meaning_connection],
                      ["스토리", item.story],
                      ["사주/정교화", item.saju_note],
                      [
                        "현지/문화 적합성",
                        item.cultural_fit || item.local_cautions,
                      ],
                      [
                        "사용 인상",
                        item.professional_impression || item.usage_note,
                      ],
                      ["주의", item.caution_notes],
                    ] satisfies Array<[string, unknown]>
                  )
                    .filter(([, value]) => text(value))
                    .map(([label, value]) => (
                      <div key={label} className="grid gap-1">
                        <dt className="font-medium text-foreground">{label}</dt>
                        <dd className="text-muted">{text(value)}</dd>
                      </div>
                    ))}
                </dl>

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
