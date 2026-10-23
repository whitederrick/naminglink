import type { Metadata } from "next";

import { DocBody } from "@/components/DocBody";
import { GuideShell } from "@/components/GuideShell";
import {
  DayMasterSection,
  ElementsSection,
  PillarsSection,
} from "@/components/ReadingSections";
import { EXAMPLE_KEYS, exampleReading } from "@/lib/example-readings";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { getDictionary } from "@/lib/i18n";

const SLUG = "examples";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

/**
 * 가상의 사주 셋을 **실제 결과 화면과 같은 부품**으로 그린다.
 *
 * 글은 `lib/doc-content`에, 값(이름·오행·퍼센트)은 `doc-values`가 엔진에서 읽어 넘긴다. 이
 * 파일이 하는 일은 각 예시 절 끝에 원국·일간·오행 구역을 끼워 넣는 것뿐이다(`slot`).
 * 풀이를 지어 쓰지 않는다 — 신강·신약·용신은 유료 리포트의 내용이라 예시에도 싣지 않는다.
 */
export default async function Page(props: GuidePageProps) {
  const { locale, doc, hubHref, hubOrigins, values } = await guideContext(SLUG, props);
  const dictionary = getDictionary(locale);

  const slots = Object.fromEntries(
    EXAMPLE_KEYS.map((key) => {
      const reading = exampleReading(key);
      return [
        `example${key}`,
        <div key={key} className="not-prose mt-6 space-y-4">
          <PillarsSection dictionary={dictionary} locale={locale} reading={reading} />
          <DayMasterSection dictionary={dictionary} reading={reading} />
          <ElementsSection dictionary={dictionary} reading={reading} />
        </div>,
      ];
    }),
  );

  return (
    <GuideShell
      locale={locale}
      eyebrow={doc.eyebrow}
      title={doc.title}
      description={doc.summary}
      backHref={hubHref}
      backLabel={doc.backLabel}
      backOrigins={hubOrigins}
    >
      <DocBody sections={doc.sections} locale={locale} values={values} slots={slots} />
    </GuideShell>
  );
}
