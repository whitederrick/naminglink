import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { GuideShell } from "@/components/GuideShell";
import { getDocPage } from "@/lib/doc-content";
import { getResultCopy } from "@/lib/i18n-result";
import { localePath } from "@/lib/locale-path";
import { notFoundCopies } from "@/lib/not-found-copy";
import { noIndex } from "@/lib/seo";

/**
 * 한국어 전용 갈래의 404.
 *
 * **루트 레이아웃이 둘이라 이 화면도 둘이다** (2026-08-18). `not-found`는 자기 위의 루트
 * 레이아웃 안에서 그려지므로, 로케일 갈래의 것을 이 갈래가 쓸 수 없다. 문구는 한 벌만 두고
 * 양쪽이 같은 표를 읽는다(`lib/not-found-copy.ts`).
 *
 * 지키는 것은 로케일 갈래와 같다 — canonical을 넣지 않고(404는 정본이 없는 자리다), 상태
 * 코드는 Next가 내고, 막다른 길로 두지 않는다.
 *
 * **여기는 언어를 판정하지 않는다.** 이 갈래의 주소에는 로케일이 없고 화면은 한국어뿐이다.
 */

const LOCALE = "ko" as const;

export const metadata: Metadata = { robots: noIndex };

export default function NotFound() {
  const copy = notFoundCopies[LOCALE];
  const guide = getDocPage(LOCALE, "guide");
  const about = getDocPage(LOCALE, "about");
  const result = getResultCopy(LOCALE);

  const links = [
    { href: localePath("/guide", LOCALE), label: guide.title, hint: guide.summary },
    { href: localePath("/about", LOCALE), label: about.title, hint: about.summary },
  ];

  return (
    <GuideShell
      locale={LOCALE}
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      backHref={localePath("/", LOCALE)}
      backLabel={result.home}
    >
      <nav className="grid gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group grid gap-1 rounded-lg border border-line bg-surface px-5 py-4 transition hover:border-foreground"
          >
            <p className="flex items-center gap-2 text-lg font-semibold">
              {link.label}
              <ArrowRight
                aria-hidden="true"
                size={17}
                className="shrink-0 transition group-hover:translate-x-0.5"
              />
            </p>
            <p className="text-sm leading-7 text-muted">{link.hint}</p>
          </Link>
        ))}
      </nav>
    </GuideShell>
  );
}
