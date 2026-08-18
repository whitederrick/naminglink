import type { Metadata } from "next";

import { LocaleNotFound, type NotFoundLocaleCopy } from "@/components/LocaleNotFound";
import { getDocPage } from "@/lib/doc-content";
import { getResultCopy } from "@/lib/i18n-result";
import { localeCodes, type LocaleCode } from "@/lib/locale-codes";
import { localePath } from "@/lib/locale-path";
import { notFoundCopies } from "@/lib/not-found-copy";
import { noIndex } from "@/lib/seo";

/**
 * 없는 주소로 들어왔을 때의 화면.
 *
 * ## 왜 만들었나 (2026-08-11)
 *
 * 이 앱에는 `not-found.tsx`가 **한 장도 없어서** Next의 기본 404(검은 글씨 한 줄)가 나가고
 * 있었다. URL 구조를 정리하며 301·308을 많이 걸었고 옛 링크를 타고 들어오는 사람이 늘어나는
 * 시점이라, 그 자리가 브랜드 밖 화면이면 곤란하다. 애드센스 심사에서도 「완성되지 않은
 * 사이트」로 읽히는 자리다.
 *
 * ## 지키는 것 셋
 *
 * · **canonical을 넣지 않는다.** 404는 정본이 없는 자리다. `robots`만 `noindex`로 둔다.
 * · **상태 코드는 Next가 낸다.** 200으로 나가는 「소프트 404」는 구글이 색인 문제로 잡는다.
 * · **막다른 길로 두지 않는다.** 홈·이용 안내·소개로 잇는다. 링크는 `localePath`로 만들어
 *   한국어 전용·글로벌 전용 규칙을 그대로 따른다(무접두 주소를 직접 적으면 3xx가 생긴다).
 *
 * ## 문구를 미리 다 만들어 넘긴다 (2026-08-18)
 *
 * `not-found.tsx`는 `params`를 받지 못한다. 그래서 예전에는 `getRequestLocale()`로 헤더를
 * 읽었는데, **그 한 줄이 `[locale]` 세그먼트 전체를 정적 렌더링에서 빼 버렸다** — 이 화면
 * 하나 때문에 23개 언어판의 모든 화면이 요청마다 다시 그려졌다.
 *
 * 이제 23개 언어의 문구를 **빌드 때 다 만들어** 클라이언트에 넘기고, 어느 것을 쓸지는 주소를
 * 보고 브라우저가 고른다(`components/LocaleNotFound.tsx`). 문구는 이미 있는 값들이다 —
 * 404 사전, 안내 허브와 소개 문서의 제목, 결과 화면 사전의 "홈".
 */

export const metadata: Metadata = { robots: noIndex };

/** 요청을 읽지 않는다. 값이 전부 사전에서 오므로 빌드 때 한 번 만들어진다. */
function buildCopies() {
  const copies = {} as Record<LocaleCode, NotFoundLocaleCopy>;
  const homeHrefs = {} as Record<LocaleCode, string>;

  for (const locale of localeCodes) {
    const guide = getDocPage(locale, "guide");
    const about = getDocPage(locale, "about");
    copies[locale] = {
      ...notFoundCopies[locale],
      backLabel: getResultCopy(locale).home,
      links: [
        { href: localePath("/guide", locale), label: guide.title, hint: guide.summary },
        { href: localePath("/about", locale), label: about.title, hint: about.summary },
      ],
    };
    homeHrefs[locale] = localePath("/", locale);
  }
  return { copies, homeHrefs };
}

export default function NotFound() {
  const { copies, homeHrefs } = buildCopies();
  return <LocaleNotFound copies={copies} homeHrefs={homeHrefs} />;
}
