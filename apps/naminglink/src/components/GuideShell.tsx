import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/SiteFooter";
import { localePath } from "@/lib/locale-path";
import type { Locale } from "@/lib/services";

/**
 * 안내 문서의 겉틀. 히어로 + 읽기 좋은 본문 폭 + 푸터.
 *
 * **랜딩과 같은 배경 사진을 쓴다.** 안내 문서만 다른 그림을 쓰면 같은 사이트로 안 보인다.
 * 사진 위에 어두운 막을 깔고 글자를 얹는 방식도 랜딩과 같다.
 *
 * 본문은 `max-w-[68ch]`로 묶는다. 글줄이 길면 눈이 다음 줄 첫머리를 놓친다 — 한글은
 * 60~70자 근처가 읽기 편한 폭이다. 화면이 넓다고 글이 끝까지 늘어나면 안 된다.
 */
export function GuideShell({
  locale,
  eyebrow,
  title,
  description,
  backHref,
  backLabel,
  children,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  /** 돌아갈 곳. 보통 이 안내를 부른 서비스 화면이다. */
  backHref: string;
  backLabel: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/landing-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* 왼쪽을 더 어둡게 깐다. 글자가 앉는 쪽이라 대비가 필요하고, 오른쪽 붓글씨는 남긴다. */}
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(14,18,15,0.92),rgba(14,18,15,0.72)_55%,rgba(14,18,15,0.35))]" />
        {/* **본문과 같은 폭·같은 가운데 정렬을 쓴다.** 약관·가격 화면(`PolicyLayout`)이
            `mx-auto max-w-4xl`이라 문서 화면은 이 기준을 따른다. 히어로만 넓게 잡으면 제목과
            본문의 왼쪽 끝이 어긋나 다른 화면처럼 보인다. */}
        <div className="relative mx-auto grid w-full max-w-4xl gap-4 px-5 py-12 text-white sm:px-8 sm:py-16">
          <Link
            href={backHref}
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/35 bg-white/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/20"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            {backLabel}
          </Link>
          <p className="mt-2 text-sm font-semibold tracking-wide text-[#e6c8b6]">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl break-keep text-3xl font-semibold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="max-w-2xl break-keep text-sm leading-7 text-white/82 sm:text-base">
            {description}
          </p>
        </div>
      </section>

      <article className="mx-auto w-full max-w-4xl break-keep px-5 py-10 leading-8 text-foreground sm:px-8">
        {children}
      </article>

      <SiteFooter locale={locale} policyMode="modal" />
    </main>
  );
}

/** 안내 문서의 절. 제목과 본문의 간격을 한 곳에서 정한다. */
export function GuideSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="break-keep text-xl font-semibold sm:text-2xl">{title}</h2>
      <div className="mt-3 grid gap-4 text-[15px] leading-8 text-foreground/88">
        {children}
      </div>
    </section>
  );
}

/**
 * 숫자를 눈에 띄게 놓는 자리. **값을 하드코딩하지 말 것** — 부르는 쪽이 DB에서 읽어 넘긴다.
 * 표가 갱신되면 글의 숫자도 함께 바뀌어야 하기 때문이다.
 */
export function GuideStats({
  items,
}: {
  items: Array<{ value: string; label: string }>;
}) {
  return (
    <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-lg border border-line bg-surface px-4 py-3"
        >
          <dt className="text-xs text-muted">{item.label}</dt>
          <dd className="mt-1 text-lg font-semibold tabular-nums">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** 본문 중간에 끼우는 강조 상자. 근거·출처처럼 따로 떼어 두면 좋은 것에 쓴다. */
export function GuideNote({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="rounded-lg border border-brand-teal/25 bg-surface-strong px-4 py-3 text-sm leading-7">
      {title ? (
        <p className="font-semibold text-brand-teal">{title}</p>
      ) : null}
      <div className={title ? "mt-1" : undefined}>{children}</div>
    </aside>
  );
}

export function guideBackToService(slug: string, locale: Locale) {
  return localePath(`/${slug}`, locale);
}
