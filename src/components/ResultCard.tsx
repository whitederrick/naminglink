import type { ServiceType } from "@/lib/services";

type ResultCardProps = {
  serviceType: ServiceType;
  result: unknown;
  revealAll: boolean;
};

type ResultItem = {
  title: string;
  subtitle?: string;
  body: string;
  meta?: string;
};

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

function asText(value: unknown) {
  return typeof value === "string" ? value : "";
}

function buildItems(serviceType: ServiceType, result: unknown): ResultItem[] {
  const record = asRecord(result);

  if (serviceType === "BABY_HANJA") {
    const luckyElements = Array.isArray(record.lucky_elements)
      ? record.lucky_elements.filter((item) => typeof item === "string")
      : [];

    return [
      {
        title: asText(record.summary) || "뜻풀이 스토리",
        body: asText(record.detailed_story),
        meta: luckyElements.join(" · "),
      },
    ];
  }

  if (serviceType === "KOREAN_FOR_FOREIGNER" && Array.isArray(record.names)) {
    return record.names.map((item) => {
      const name = asRecord(item);

      return {
        title: asText(name.hangul),
        subtitle: asText(name.pronunciation),
        body: asText(name.story) || asText(name.meaning),
        meta: [asText(name.hanja), asText(name.meaning)]
          .filter(Boolean)
          .join(" · "),
      };
    });
  }

  if (
    serviceType === "FOREIGN_FOR_KOREAN" &&
    Array.isArray(record.recommendations)
  ) {
    return record.recommendations.map((item) => {
      const name = asRecord(item);

      return {
        title: asText(name.name),
        body: asText(name.nuance),
        meta: asText(name.meaning_connection),
      };
    });
  }

  return [
    {
      title: "생성 결과",
      body: JSON.stringify(result, null, 2),
    },
  ];
}

export function ResultCard({ serviceType, result, revealAll }: ResultCardProps) {
  const items = buildItems(serviceType, result);

  return (
    <div className="grid gap-3">
      {items.map((item, index) => {
        const locked = index > 0 && !revealAll;

        return (
          <article
            key={`${item.title}-${index}`}
            className="relative overflow-hidden rounded-lg border border-line bg-surface p-5 shadow-sm"
          >
            <div className={locked ? "select-none blur-sm" : ""}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                {item.subtitle ? (
                  <p className="text-sm text-muted">{item.subtitle}</p>
                ) : null}
              </div>
              {item.meta ? (
                <p className="mt-3 text-sm font-medium text-brand-teal">
                  {item.meta}
                </p>
              ) : null}
              <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-muted">
                {item.body}
              </p>
            </div>
            {locked ? (
              <div className="absolute inset-0 flex items-center justify-center bg-white/60 px-4 text-center">
                <span className="rounded-lg bg-foreground px-3 py-2 text-sm font-medium text-background">
                  잠금 후보
                </span>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
