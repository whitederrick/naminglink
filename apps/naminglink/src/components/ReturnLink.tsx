"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

import { currentInternalPath, readReturnTo, withReturnTo } from "@/lib/return-to";

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
 * ## 출처는 한 번 정해지면 따라다닌다
 *
 * 이미 `returnTo` 를 달고 있는 화면에서 또 눌리면 **그 값을 그대로 넘긴다.** 지금 화면으로
 * 갈아치우지 않는다 — 갈아치우면 한 칸 들어갈 때마다 출처가 밀려나, 두 칸만 들어가도
 * 처음 들어온 화면으로 돌아갈 길이 사라진다(안내 허브 → 안내 문서에서 실제로 그랬다).
 *
 * 겹쳐 싣지도 않는다. 겹쳐 실으면 한 번 누를 때마다 값이 배로 길어지고 512자 상한에
 * 걸리는 날 **조용히 통째로 버려진다.**
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
        const from = readReturnTo() ?? currentInternalPath();
        if (!from) return;
        const target = withReturnTo(href, from);
        // **붙일 것이 없으면 가로채지 않는다.** 지금 화면과 목적지가 같을 때가 그렇다
        // (/ko/about 에서 푸터의 「소개」를 다시 누르는 경우). 그대로 두면 평범한 링크다.
        if (target === href) return;
        event.preventDefault();
        router.push(target);
      }}
    >
      {children}
    </Link>
  );
}
