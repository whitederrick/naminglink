import type { Metadata } from "next";
import { ReturnLink } from "@/components/ReturnLink";

import { DocBody } from "@/components/DocBody";
import { GuideShell } from "@/components/GuideShell";
import { getDocPage } from "@/lib/doc-content";
import { docValues } from "@/lib/doc-values";
import { GuideEntryOrder } from "@/components/GuideEntryOrder";
import {
  guideBackLink,
  guideEntryOrders,
  guideServiceOrigins,
} from "@/lib/guide-back";
import {
  cardEntries,
  docKeyFor,
  groupEntries,
  guideEntriesFor,
  guideGroups,
  type GuideEntry,
} from "@/lib/guide-index";
import { routeLocale } from "@/lib/route-locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

/**
 * **`?from=`을 서버에서 읽지 않는다** (2026-08-19). 그 값이 바꾸는 것은 돌아가기 단추의
 * 목적지와 카드 **순서**뿐이라 본문과 무관한데, 서버가 읽으면 23개 언어판 허브가 전부 미리
 * 만들어지지 못한다. 둘 다 브라우저가 정한다
 * (`components/GuideBackLink.tsx` · `components/GuideEntryOrder.tsx`).
 */
type PageProps = { params: Promise<{ locale: string }> };

/**
 * 안내 허브.
 *
 * **거르지 않는다.** 예전에는 한국어로 들어오면 상세 아홉 편을, 그 밖의 언어면 영어 요약 세
 * 편만 보여 줬다. 문서가 23개 언어로 나가는 지금 그 거르기는 **일본어 이용자에게서 아홉 편을
 * 빼앗는 규칙**이다. 이제 온 곳(`?from=`)을 알면 그 서비스를 설명하는 글을 앞에 놓을 뿐이다.
 *
 * 카드의 제목·요약도 `doc-content`가 로케일별로 갖는다 — 목록만 한국어로 남지 않게.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = routeLocale((await params).locale);
  const requested = locale;
  const doc = getDocPage(locale, "guide");

  return buildPageMetadata({
    path: "/guide",
    locale,
    requested,
    title: doc.title,
    description: doc.summary,
  });
}

export default async function GuideIndexPage({ params }: PageProps) {
  const locale = routeLocale((await params).locale);
  const doc = getDocPage(locale, "guide");
  const values = await docValues(locale);
  // 기본 순서로 그린다. 온 곳에 맞춘 순서는 브라우저가 CSS order로 갈아 끼운다.
  const entries = cardEntries(guideEntriesFor(undefined));
  // 사전 묶음(띠별·띠 쌍)은 카드 아래에 접어 둔다. 제목은 그 묶음 첫 문서의 꼬리표
  // (`eyebrow`)를 쓴다 — 23개 언어로 이미 번역돼 있어 문구가 새로 생기지 않는다.
  const groups = guideGroups.map((group) => {
    const members = groupEntries(group);
    return {
      group,
      members,
      label: members.length ? getDocPage(locale, docKeyFor(members[0])).eyebrow : "",
    };
  });
  const renderCard = (entry: GuideEntry) => {
    const card = getDocPage(locale, docKeyFor(entry));
    return (
      <li key={entry.slug}>
        <ReturnLink
          // **문서의 「이전 화면으로」는 이 허브로 돌아온다**(`chain`, 2026-10-12).
          // 허브 주소를 (허브가 달고 있는 returnTo 까지) 실어 문서 → 허브 → 처음 화면
          // 으로 한 칸씩 돌아간다. 처음 화면으로 건너뛰면 단추 이름이 거짓말이 된다.
          chain
          href={localePath(`/guide/${entry.slug}`, locale)}
          className="flex h-full flex-col rounded-xl border border-line bg-surface px-5 py-4 transition hover:bg-surface-strong"
        >
          <span className="text-xs font-semibold text-brand-plum">{card.eyebrow}</span>
          <span className="break-keep-all mt-1 text-base font-semibold">{card.title}</span>
          <span className="break-keep-all mt-2 text-sm leading-6 text-muted">{card.summary}</span>
        </ReturnLink>
      </li>
    );
  };
  // 안내를 부른 화면으로 돌려보낸다. 없으면 홈 — 그 이름은 이 문서가 갖고 있다.
  const back = guideBackLink(locale, undefined, doc.backLabel);

  return (
    <GuideShell
      locale={locale}
      eyebrow={doc.eyebrow}
      title={doc.title}
      description={doc.summary}
      backHref={back.href}
      backLabel={back.label}
      backOrigins={guideServiceOrigins(locale, doc.backLabel)}
    >
      <DocBody sections={doc.sections} locale={locale} values={values} />

      {/* 카드 순서는 출처에 따라 갈리지만 **글은 그대로다.** 서버는 기본 순서로 그리고
          브라우저가 CSS order만 갈아 끼운다. */}
      <GuideEntryOrder orders={guideEntryOrders()} className="mt-8 grid gap-3 sm:grid-cols-2">
        {entries.map(renderCard)}
      </GuideEntryOrder>

      {/* 사전 묶음 — 기본은 접혀 있다. `<details>`라 스크립트가 없고, 접힌 글도 HTML에 실려
          크롤러가 링크를 따라간다. */}
      <div className="mt-6 grid gap-3">
        {groups.map(({ group, members, label }) =>
          members.length === 0 ? null : (
            <details
              key={group}
              className="rounded-xl border border-line bg-surface [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-base font-semibold">
                <span className="break-keep-all">{label}</span>
                <span className="text-sm font-normal text-muted">{members.length}</span>
              </summary>
              <ul className="grid gap-3 border-t border-line p-4 sm:grid-cols-2">
                {members.map(renderCard)}
              </ul>
            </details>
          ),
        )}
      </div>
    </GuideShell>
  );
}
