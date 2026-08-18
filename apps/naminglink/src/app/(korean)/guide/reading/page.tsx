import type { Metadata } from "next";

import { DocBody } from "@/components/DocBody";
import { GuideShell } from "@/components/GuideShell";
import { getDocPage } from "@/lib/doc-content";
import { guideHubHref, guideHubOrigins } from "@/lib/guide-back";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 본문은 `lib/doc-content`에 있다 — 23개 언어가 이 서비스의 약속이라서다.
 *
 * 예전에는 이 파일의 JSX에 한국어(또는 영어) 한 벌만 적혀 있었고, 그래서 나머지 언어로
 * 들어온 사람은 읽을 수 없는 글을 봤다. 2026-08-08 서치 콘솔이 그 자리를 「중복 페이지」로
 * 짚었다 — 번역 없는 문서를 23개 언어 주소로 내보내고 있었기 때문이다.
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
const KEY = "guide/reading" as const;
const PATH = "/guide/reading";

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
      <DocBody sections={doc.sections} locale={LOCALE} />
    </GuideShell>
  );
}
