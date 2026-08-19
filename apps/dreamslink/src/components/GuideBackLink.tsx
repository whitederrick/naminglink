"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

/**
 * 안내 화면의 「돌아가기」. **주소의 `?from=`을 서버가 아니라 브라우저에서 읽는다.**
 *
 * ## 왜 옮겼나 (2026-08-19)
 *
 * 안내 문서는 부른 화면으로 돌려보낸다(`lib/guide-back.ts`). 그 값을 `searchParams`로 받고
 * 있었는데, **페이지가 `searchParams`를 읽는 순간 Next는 그 화면을 정적으로 만들지 않는다.**
 * 이 앱은 안내 열두 편이 `lib/guide-page.ts` 한 곳을 거치므로 **열두 편이 한꺼번에** 요청마다
 * 새로 그려지고 있었다.
 *
 * `from`은 **본문과 무관한 값**이다 — 글도 제목도 바뀌지 않고 돌아가기 단추의 목적지만
 * 달라진다. 그런 값을 위해 문서 전체를 동적으로 둘 이유가 없다.
 *
 * ## 크롤러가 보는 것이 오히려 낫다
 *
 * 미리 만들어 둔 HTML에는 `?from=`이 없는 **깨끗한 주소**가 실린다. 예전에는 서버가
 * `/guide?from=dream` 같은 주소를 HTML에 그대로 찍어 구글에 계속 알려 주고 있었다 — 색인할
 * 이유가 없는 주소를 내부 링크가 다시 공급하던 자리다.
 *
 * ## 사전을 클라이언트로 들고 오지 않는다
 *
 * 돌아갈 곳의 **이름**은 23개 언어 사전에 있다. 그것을 여기서 부르면 사전이 통째로 브라우저
 * 번들에 실린다. 그래서 서버가 **지금 이 로케일의 후보만** 미리 만들어 `origins`로 넘긴다.
 *
 * naminglink `components/GuideBackLink.tsx`와 같은 부품이다.
 */

export type BackTarget = { href: string; label: string };

/**
 * 겉모습은 이 한 곳에서만 그린다. 정적 대체(Suspense fallback)와 클라이언트가 그린 결과가
 * 달라 보이면 하이드레이션 직후에 단추가 깜빡인다.
 */
export function GuideBackLinkView({ href, label }: BackTarget) {
  return (
    <Link
      href={href}
      className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/35 bg-white/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/20"
    >
      <span aria-hidden>←</span>
      {label}
    </Link>
  );
}

/**
 * **아는 `from`만 받는다.** 표에 없는 값이 오면 무시하고 기본 목적지로 떨어진다 — 주소를
 * 그대로 링크로 삼지 않으므로 남이 만든 주소로 다른 곳에 보낼 수 없다(서버가 하던 판정을
 * 그대로 옮겼다).
 */
export function GuideBackLink({
  fallback,
  origins,
}: {
  fallback: BackTarget;
  origins: Record<string, BackTarget>;
}) {
  const from = useSearchParams().get("from");
  const target = (from && origins[from]) || fallback;
  return <GuideBackLinkView href={target.href} label={target.label} />;
}
