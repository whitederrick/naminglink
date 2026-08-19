import Image from "next/image";
import { Suspense, type ReactNode } from "react";

import {
  GuideBackLink,
  GuideBackLinkView,
  type BackTarget,
} from "@/components/GuideBackLink";
import { SiteFooter } from "@/components/SiteFooter";
import type { Locale } from "@/lib/i18n";

/**
 * 안내 문서의 겉틀. 히어로 + 읽기 좋은 본문 폭 + 푸터.
 *
 * **naminglink `GuideShell`과 같은 문법이다.** 랜딩과 같은 배경 사진을 쓰고, 그 위에 어두운
 * 막을 깔고 글자를 얹는다 — 안내 문서만 다른 그림을 쓰면 같은 사이트로 안 보인다.
 *
 * 본문 폭은 `max-w-4xl`로 묶는다. 글줄이 길면 눈이 다음 줄 첫머리를 놓친다. 약관·가격 화면
 * (`LegalDocumentView`)이 `max-w-3xl`이라 그보다 한 단계만 넓게 둔다 — 이 글에는 표가 들어간다.
 */
export function GuideShell({
  locale,
  eyebrow,
  title,
  description,
  backHref,
  backLabel,
  backOrigins,
  children,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  /** 돌아갈 곳. 보통 이 안내를 부른 화면이다. */
  backHref: string;
  backLabel: string;
  /**
   * 출처(`?from=`)별 목적지. **주면 브라우저가 고르고, 안 주면 `backHref` 그대로다.**
   * 서버가 `?from=`을 읽으면 단추 하나 때문에 이 화면 전체가 요청마다 다시 그려진다
   * (`components/GuideBackLink.tsx`).
   */
  backOrigins?: Record<string, BackTarget>;
  children: ReactNode;
}) {
  const back: BackTarget = { href: backHref, label: backLabel };
  return (
    <main className="min-h-screen bg-background">
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/landing-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-center"
        />
        {/* 왼쪽을 더 어둡게 깐다. 글자가 앉는 쪽이라 대비가 필요하고, 오른쪽 매듭은 남긴다.
            방향과 색은 랜딩 히어로의 그라데이션과 같은 값이다. */}
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(18,12,15,0.93),rgba(18,12,15,0.74)_55%,rgba(18,12,15,0.35))]" />
        <div className="relative mx-auto grid w-full max-w-4xl gap-4 px-5 py-12 text-white sm:px-8 sm:py-16">
          {backOrigins ? (
            // 대체는 기본 목적지 그대로다 — 미리 만들어 둔 HTML에 실리는 것이 이쪽이다.
            <Suspense fallback={<GuideBackLinkView {...back} />}>
              <GuideBackLink fallback={back} origins={backOrigins} />
            </Suspense>
          ) : (
            <GuideBackLinkView {...back} />
          )}
          <p className="mt-2 text-sm font-semibold tracking-wide text-[#b9a8dd]">
            {eyebrow}
          </p>
          <h1 className="break-keep-all max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="break-keep-all max-w-2xl text-sm leading-7 text-white/82 sm:text-base">
            {description}
          </p>
        </div>
      </section>

      <article className="break-keep-all mx-auto w-full max-w-4xl px-5 py-10 leading-8 text-foreground sm:px-8">
        {children}
      </article>

      <SiteFooter locale={locale} />
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
      <h2 className="break-keep-all text-xl font-semibold sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 grid gap-4 text-[15px] leading-8 text-foreground/88">
        {children}
      </div>
    </section>
  );
}

/**
 * 숫자를 눈에 띄게 놓는 자리. **값을 하드코딩하지 말 것** — 부르는 쪽이 사전이나 DB에서 읽어
 * 넘긴다. 사전이 커지면 글의 숫자도 함께 바뀌어야 하기 때문이다.
 */
export function GuideStats({
  items,
}: {
  items: Array<{ value: string; label: string }>;
}) {
  return (
    <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-lg border border-line bg-surface px-4 py-3">
          <dt className="text-xs text-muted">{item.label}</dt>
          <dd className="mt-1 text-lg font-semibold tabular-nums">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * 본문 중간에 끼우는 강조 상자. 근거·한계처럼 따로 떼어 두면 좋은 것에 쓴다.
 *
 * 이 서비스의 글에는 **한계를 밝히는 상자가 유난히 자주 나온다.** 명리는 술사에 따라 결론이
 * 갈리는 분야라, 규칙으로 옮기면서 무엇을 버렸는지 같이 적지 않으면 글이 단정이 된다.
 */
export function GuideNote({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="rounded-lg border border-brand-violet/25 bg-surface-strong px-4 py-3 text-sm leading-7">
      {title ? <p className="font-semibold text-brand-violet">{title}</p> : null}
      <div className={title ? "mt-1" : undefined}>{children}</div>
    </aside>
  );
}

/**
 * 값이 든 표. **여기 들어가는 숫자는 전부 엔진 코드에서 가져온다**(`lib/engines/`).
 * 글에 손으로 옮겨 적으면 규칙을 고쳤을 때 글만 옛날 값으로 남는다.
 */
export function GuideTable({
  head,
  rows,
  caption,
}: {
  head: string[];
  rows: Array<Array<ReactNode>>;
  caption?: string;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
        {caption ? (
          <caption className="pb-2 text-left text-xs text-muted">
            {caption}
          </caption>
        ) : null}
        <thead>
          <tr className="border-b border-line">
            {head.map((cell) => (
              <th key={cell} className="py-2 pr-4 font-semibold">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-line/60">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`py-2 pr-4 align-top ${
                    cellIndex === head.length - 1 ? "tabular-nums" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
