"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useSyncExternalStore } from "react";

import { readReturnTo } from "@/lib/return-to";

/**
 * 안내 화면의 「돌아가기」. **주소의 `?from=`을 서버가 아니라 브라우저에서 읽는다.**
 *
 * ## 왜 옮겼나 (2026-08-18)
 *
 * 안내 문서는 부른 화면으로 돌려보내야 한다(`lib/guide-back.ts`). 그 값을 `searchParams`로
 * 받고 있었는데, **페이지가 `searchParams`를 읽는 순간 Next는 그 화면을 정적으로 만들지
 * 않는다.** 안내 문서 열한 편이 그 한 줄 때문에 요청마다 새로 그려지고 있었다.
 *
 * `from`은 **본문과 무관한 값**이다 — 글도 제목도 바뀌지 않고 돌아가기 단추의 목적지만
 * 달라진다. 그런 값을 위해 문서 전체를 동적으로 둘 이유가 없다.
 *
 * ## 크롤러가 보는 것이 오히려 낫다
 *
 * 미리 만들어 둔 HTML에는 `?from=`이 없는 **깨끗한 주소**가 실린다. 예전에는 서버가
 * `/guide?from=hanja-meaning` 같은 주소를 HTML에 그대로 찍어 구글에 계속 알려 주고 있었다 —
 * 색인할 이유가 없는 주소를 내부 링크가 다시 공급하던 자리다.
 *
 * ## 사전을 클라이언트로 들고 오지 않는다
 *
 * 돌아갈 곳의 **이름**은 23개 언어 사전(`landingCopies`)에 있다. 그것을 여기서 부르면 사전이
 * 통째로 브라우저 번들에 실린다. 그래서 서버가 **지금 이 로케일의 후보 넷만** 미리 만들어
 * `origins`로 넘긴다.
 */

export type BackTarget = { href: string; label: string };

/**
 * **주소에 실려 온 `returnTo`.** 상태를 두지 않는다 — `useEffect` 안에서 `setState` 하는
 * 모양은 이 저장소가 이미 한 번 고친 자리다(`3d21920`, `react-hooks/set-state-in-effect`).
 *
 * 서버 스냅샷은 `null` 이라 미리 만든 HTML 에는 늘 대체 주소가 실리고, 브라우저가 붙은
 * 뒤에만 갈래가 생긴다.
 */
const NO_SUBSCRIBE = () => () => {};
const NO_RETURN_TO = () => null;
function useReturnTo() {
  return useSyncExternalStore(NO_SUBSCRIBE, readReturnTo, NO_RETURN_TO);
}

/**
 * 겉모습은 이 한 곳에서만 그린다. 정적 대체(Suspense fallback)와 클라이언트가 그린 결과가
 * 달라 보이면 하이드레이션 직후에 단추가 깜빡인다.
 *
 * ## 돌아가기 규칙을 하나로 맞춘다 (2026-08-21)
 *
 * 같은 푸터에서 들어가는데 돌아가는 규칙이 셋이었다.
 *
 *     로그인            router.back()          → 진짜 이전 화면
 *     이용 안내          미리 만든 출처 표 셋    → **입력 화면만** 안다
 *     소개·문의·공지     출처 개념이 없음        → 늘 「처음으로」
 *
 * 그래서 **결과 화면에서 이용 안내로 들어가면 결과가 아니라 입력 화면으로** 돌아갔다.
 * 결과 화면 주소는 `?id=<uuid>`라 미리 만들어 둘 수 없으니, 표를 아무리 늘려도 못 담는다.
 *
 * **이력으로 풀지 않는다.** 처음에 `history.back()` 으로 고쳤다가 재검증에서 막혔다 —
 * `window.history.length > 1` 은 「우리 화면이 있다」가 아니라 「이 탭에 아무 이력이나 있다」라,
 * 남의 사이트에서 주소를 직접 치고 들어온 사람을 **남의 사이트로 되돌려 보낸다.**
 * 지금은 떠나는 쪽이 자기 주소를 실어 보낸다(`lib/return-to.ts`).
 *
 * 이름도 함께 갈린다. 「처음으로」라고 적힌 단추가 이전 화면으로 가면 그것은 거짓말이다.
 * `previousLabel` 은 서버가 로케일에서 뽑아 넘긴다(사전을 브라우저로 들고 오지 않는다).
 */
export function GuideBackLinkView({
  href,
  label,
  previousLabel,
}: BackTarget & { previousLabel?: string }) {
  const returnTo = useReturnTo();
  const target = returnTo && previousLabel ? { href: returnTo, label: previousLabel } : { href, label };

  return (
    <Link
      href={target.href}
      className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/35 bg-white/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/20"
    >
      <ArrowLeft aria-hidden="true" size={16} />
      {target.label}
    </Link>
  );
}

/**
 * **아는 `from`만 받는다.** 표에 없는 값이 오면 무시하고 기본 목적지로 떨어진다 — 주소를
 * 그대로 링크로 삼지 않으므로 남이 만든 주소로 다른 곳에 보낼 수 없다(서버가 하던 판정을
 * 그대로 옮겼다).
 *
 * `returnTo` 가 함께 오면 **그쪽이 이긴다** — 더 정확하기 때문이다(`?id=` 까지 보존한다).
 * 그 판정은 `GuideBackLinkView` 안에 하나만 있다.
 */
export function GuideBackLink({
  fallback,
  origins,
  previousLabel,
}: {
  fallback: BackTarget;
  origins: Record<string, BackTarget>;
  previousLabel?: string;
}) {
  const from = useSearchParams().get("from");
  const target = (from && origins[from]) || fallback;
  return (
    <GuideBackLinkView href={target.href} label={target.label} previousLabel={previousLabel} />
  );
}
