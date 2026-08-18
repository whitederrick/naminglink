"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

import { GuideShell } from "@/components/GuideShell";
import { isLocaleCode, type LocaleCode } from "@/lib/locale-codes";

/**
 * 로케일 갈래의 404 본문. **언어를 주소에서, 그것도 브라우저에서 읽는다.**
 *
 * ## 왜 이렇게까지 하나 (2026-08-18)
 *
 * `not-found.tsx`는 `params`를 받지 못한다. 그래서 처음에는 `getRequestLocale()`로 헤더를
 * 읽었는데, **그 한 줄이 `[locale]` 세그먼트 전체를 정적 렌더링에서 빼 버렸다** — 404 화면
 * 하나 때문에 23개 언어판의 모든 화면이 요청마다 다시 그려졌다. 빌드 표에서 전부 `ƒ`로
 * 남는 것을 보고 알았다.
 *
 * 영어 한 벌로 굳히는 선택지도 있었지만 23개 언어는 이 서비스의 약속이라 그러지 않았다.
 * 대신 **문구를 미리 다 실어 보내고** 주소를 보고 고른다. 404는 색인되지 않고 드물게 열리는
 * 화면이라 이 정도 무게는 감당할 수 있다.
 */

export type NotFoundLocaleCopy = {
  eyebrow: string;
  title: string;
  description: string;
  backLabel: string;
  links: { href: string; label: string; hint: string }[];
};

export function LocaleNotFound({
  copies,
  homeHrefs,
}: {
  copies: Record<LocaleCode, NotFoundLocaleCopy>;
  homeHrefs: Record<LocaleCode, string>;
}) {
  const first = usePathname().split("/")[1];
  // 주소에 로케일이 없을 리는 없지만(이 화면은 `[locale]` 아래에 있다), 없으면 영어로 떨어진다.
  const locale: LocaleCode = isLocaleCode(first) ? first : "en";
  const copy = copies[locale];

  return (
    <GuideShell
      locale={locale}
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      backHref={homeHrefs[locale]}
      backLabel={copy.backLabel}
    >
      <nav className="grid gap-3">
        {copy.links.map((link) => (
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
