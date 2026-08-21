"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

import { currentInternalPath, withReturnTo } from "@/lib/return-to";

/**
 * **화면을 옮기는 푸터 링크.** 눌릴 때 지금 주소를 `returnTo` 로 실어 보낸다.
 *
 * ## 왜 서버가 아니라 여기서 붙이나
 *
 * `returnTo` 에는 결과 화면의 `?id=<uuid>` 처럼 **끝없이 다른 값**이 들어온다. 그것을 서버가
 * 푸터 링크에 박아 두면 색인할 이유가 없는 주소를 내부 링크가 계속 공급하게 된다 — 이
 * 저장소가 이미 겪은 자리다(`GuideBackLink.tsx` 머리말).
 *
 * 그래서 **미리 만든 HTML 에는 깨끗한 주소**가 실리고(크롤러·새 탭·자바스크립트가 없는
 * 환경도 그대로 동작한다), 실제로 눌린 순간에만 브라우저가 값을 붙여 옮긴다.
 *
 * ## 보조키 눌림은 건드리지 않는다
 *
 * 새 탭·새 창으로 여는 눌림은 가로채지 않는다. 그때는 `href` 가 그대로 쓰이고, 새 탭에는
 * 돌아갈 이전 화면이 없는 것이 맞다.
 */
export function ReturnLink({
  href,
  className,
  dir,
  children,
}: {
  href: string;
  className?: string;
  dir?: "ltr" | "rtl";
  children: ReactNode;
}) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={className}
      dir={dir}
      onClick={(event) => {
        if (event.defaultPrevented) return;
        if (event.button !== 0) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const from = currentInternalPath();
        if (!from) return;
        event.preventDefault();
        router.push(withReturnTo(href, from));
      }}
    >
      {children}
    </Link>
  );
}
