import Link from "next/link";

import { BrandMark } from "@/components/BrandMark";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { localePath } from "@/lib/locale-path";
import type { Locale } from "@/lib/i18n";

/**
 * 랜딩 외 페이지의 머리글 — 브랜드와 언어 선택기.
 *
 * 예전에는 아래에 구분선을 긋고 브랜드 옆에 고정 배너를 함께 두었다. 그러면 화면을 열자마자
 * 선 하나와 광고 자리가 먼저 눈에 들고, 정작 이 화면이 무엇인지(제목)는 그 아래에서 시작한다.
 * **구분선을 지우고 배너는 제목 옆으로 옮겼다**(`PageTitle`) — 광고는 읽을 것이 있는 자리에
 * 붙어야 하고, 머리글은 돌아갈 길만 있으면 된다.
 *
 * **언어 선택기가 여기에 있다.** 예전에는 랜딩에만 있어서, 검색·광고·공유 링크로 궁합 화면에
 * 곧바로 들어온 사람은 언어 판정이 어긋나도 바꿀 방법이 없었다(naminglink에서 같은 구멍을
 * 2026-07-30에 메웠다). 자바스크립트는 쓰지 않는다 — `<details>`는 브라우저가 여닫는다.
 */
export function PageHeader({
  brand,
  locale,
  path,
}: {
  brand: string;
  locale: Locale;
  /**
   * 지금 화면의 경로(로케일 없는 형태). 예: `/compatibility`
   *
   * **부르는 쪽이 넘긴다.** 서버 컴포넌트라 지금 경로를 스스로 알 수 없고, 이것 하나 때문에
   * 클라이언트 컴포넌트로 내리면 머리글 전체가 하이드레이션 대상이 된다.
   */
  path: string;
}) {
  return (
    <header className="bg-background">
      {/* 좁은 화면에서는 언어 단추 줄이 브랜드 옆에서 접히며 로고를 밀어낸다. 랜딩 헤더와
          같은 처방으로, 접힐 때는 아래 줄로 내려가게 둔다. */}
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-4">
        <Link
          href={localePath("/", locale)}
          className="inline-flex shrink-0 items-center gap-2.5 text-foreground"
        >
          <BrandMark compact onLight />
          <span className="text-base font-semibold">{brand}</span>
        </Link>
        <LocaleSwitcher current={locale} path={path} className="min-w-0" />
      </div>
    </header>
  );
}
