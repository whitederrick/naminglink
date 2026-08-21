"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { useSyncExternalStore } from "react";
import { getAuthCopy } from "@/lib/i18n-auth";
import { localePath } from "@/lib/locale-path";
import { readReturnTo } from "@/lib/return-to";

const NO_SUBSCRIBE = () => () => {};
const NO_RETURN_TO = () => null;

/**
 * 결과 페이지 헤더와 같은 버튼 스타일로 로그인·계정 화면의 이동 UX를 통일한다.
 *
 * ## `history.back()` 을 걷어냈다 (2026-08-21 재검증)
 *
 * 예전에는 `window.history.length > 1` 이면 뒤로 갔다. 그런데 그 값은 **「우리 서비스의
 * 이전 화면이 있다」가 아니라 「이 탭에 아무 이력이나 있다」**는 뜻이다.
 *
 *     남의 사이트 → 주소를 직접 쳐서 /ko/login → 「이전 화면으로」 → **남의 사이트로 나간다**
 *
 * 안내·소개·문의·공지를 고치면서 같은 결함이 여기 이미 있었다는 것이 드러났다. 규칙을
 * 두 벌로 두지 않으려고 **같은 부품**(`lib/return-to.ts`)으로 옮긴다 — 푸터가 실어 보낸
 * 우리 주소가 있으면 그리로, 없으면 홈으로.
 */
export function AuthPageNav({ locale }: { locale?: string }) {
  const copy = getAuthCopy(locale);
  const homeHref = localePath("/", locale);
  const returnTo = useSyncExternalStore(NO_SUBSCRIBE, readReturnTo, NO_RETURN_TO);

  return (
    <div className="flex flex-wrap gap-2">
      {/**
       * **돌아갈 곳이 없으면 그리지 않는다.** 예전에는 늘 그려 놓고 눌리면 이력을 뒤졌는데,
       * 그 이력이 남의 사이트일 수 있었다. 지금은 우리 주소가 실려 왔을 때만 나온다 —
       * 직접 방문·새 탭에는 아래 「홈」만 남는다(그때는 그것이 맞다).
       */}
      {returnTo ? (
        <Link
          href={returnTo}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line bg-surface px-4 text-sm font-semibold shadow-sm"
        >
          <ArrowLeft aria-hidden="true" size={17} />
          {copy.back}
        </Link>
      ) : null}
      <Link
        href={homeHref}
        className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-foreground/80 bg-[linear-gradient(135deg,#10150f,#1c211a)] px-4 text-sm font-semibold text-white shadow-sm"
      >
        <Home aria-hidden="true" size={17} />
        {copy.home}
      </Link>
    </div>
  );
}
