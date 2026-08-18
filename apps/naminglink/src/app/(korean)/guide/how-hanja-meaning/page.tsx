import type { Metadata } from "next";

import { DocBody } from "@/components/DocBody";
import { GuideShell } from "@/components/GuideShell";
import { getDocPage } from "@/lib/doc-content";
import { docValues } from "@/lib/doc-values";
import { guideHubHref, guideHubOrigins } from "@/lib/guide-back";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 본문은 `lib/doc-content`에 있고 숫자·값은 `docValues()`가 채운다 — 23개 언어가 이 서비스의
 * 약속이고, 값은 자료가 정해야 글과 실제가 어긋나지 않기 때문이다.
 *
 * **한국어 한 벌짜리 화면이라 요청에서 언어를 읽지 않는다** (2026-08-18).
 *
 * 이 문서는 한국어 전용 서비스를 설명하는 글이라 로케일 주소를 갖지 않는다
 * (`lib/route-locales.ts`). 그런데도 `getRequestLocale()`을 부르고 있었고, 그 함수는
 * `headers()`를 읽는다 — **읽는 순간 이 화면은 미리 만들어지지 못한다.** 늘 `ko`가 나오는
 * 판정을 위해 요청마다 서버가 이 글을 다시 그리고 있었다.
 *
 * `?from=`도 같은 이유로 서버에서 읽지 않는다. 돌아가기 단추의 목적지만 달라지는 값이라
 * 본문과 무관하다(`components/GuideBackLink.tsx`).
 */

const LOCALE = "ko" as const;
const KEY = "guide/how-hanja-meaning" as const;
const PATH = "/guide/how-hanja-meaning";

export function generateMetadata(): Metadata {
  const doc = getDocPage(LOCALE, KEY);

  return buildPageMetadata({
    path: PATH,
    locale: LOCALE,
    title: doc.title,
    description: doc.summary,
  });
}

export default async function Page() {
  const doc = getDocPage(LOCALE, KEY);
  const values = await docValues();

  return (
    <GuideShell
      locale={LOCALE}
      eyebrow={doc.eyebrow}
      title={doc.title}
      description={doc.summary}
      backHref={guideHubHref(LOCALE)}
      backLabel={doc.backLabel}
      backOrigins={guideHubOrigins(LOCALE, doc.backLabel)}
    >
      <DocBody sections={doc.sections} locale={LOCALE} values={values} />
    </GuideShell>
  );
}
