import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { GuideShell } from "@/components/GuideShell";
import { ReturnLink } from "@/components/ReturnLink";
import { GuideEntryOrder } from "@/components/GuideEntryOrder";
import { guideBackLink, guideEntryOrders, guideServiceOrigins } from "@/lib/guide-back";
import { DocBody } from "@/components/DocBody";
import { getDocPage } from "@/lib/doc-content";
import { docValues } from "@/lib/doc-values";
import { docKeyFor, guideEntriesFor } from "@/lib/guide-index";
import { routeLocale } from "@/lib/route-locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

/**
 * **`?from=`을 서버에서 읽지 않는다** (2026-08-18). 그 값이 바꾸는 것은 돌아가기 단추의
 * 목적지와 카드 **순서**뿐이라 본문과 무관한데, 서버가 읽으면 23개 언어판 허브가 전부 미리
 * 만들어지지 못한다. 둘 다 브라우저가 정한다
 * (`components/GuideBackLink.tsx` · `components/GuideEntryOrder.tsx`).
 */
type PageProps = { params: Promise<{ locale: string }> };

/**
 * 허브의 문구도 대상에 맞춰 갈린다. 한국어 이용자에게는 인명용 한자 제도가 중심이고,
 * 그 밖의 언어로 들어온 사람에게는 "네 이름을 한국어로 어떻게 다루는가"가 중심이다.
 * 카드만 영어로 갈아 끼우고 제목은 한국어로 두면 앞뒤가 맞지 않는다.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = routeLocale((await params).locale);

  const doc = getDocPage(locale, "guide");
  return buildPageMetadata({
    path: "/guide",
    locale,
    requested: locale,
    title: doc.title,
    description: doc.summary,
  });
}

export default async function GuideIndexPage({ params }: PageProps) {
  const locale = routeLocale((await params).locale);
  // 예전에는 여기서 숫자판(`GuideStats`)을 그렸다. 허브 본문이 `doc-content` 로 옮겨가며
  // 그 자리를 자료가 갖게 됐는데 **조회만 남아 있었다** — 쓰지도 않는 값을 DB에서 읽고
  // 버리고 있었다.
  const values = await docValues();
  // 한국어 화면이 아니면 korean 갈래를 뺀다 — 그 안내가 설명하는 서비스는 한국어뿐이라
  // 끝까지 읽어도 갈 곳이 없다. 온 곳을 알면 그 갈래를 앞에 놓는다(`lib/guide-index.ts`).
  // 기본 순서로 그린다. 온 곳에 맞춘 순서는 브라우저가 CSS order로 갈아 끼운다.
  const entries = guideEntriesFor(undefined, locale);
  const doc = getDocPage(locale, "guide");
  // 안내를 부른 서비스로 돌려보낸다. 없으면 로케일 기본값(`lib/guide-back.ts`).
  //
  // **홈 이름은 소개 문서의 「처음으로」를 쓴다** (2026-10-12). 허브 문서 자신의 `backLabel` 은
  // 「이용 안내」인데, 이 단추는 **홈으로** 간다 — 푸터의 「이용 안내」(→ 목록)·문서의 ←
  // 「이용 안내」(→ 목록)와 같은 이름인데 도착지만 반대라 사용자가 흐름을 읽을 수 없었다.
  // 형제 앱(인연링크)의 허브는 이미 「처음으로」다.
  const homeLabel = getDocPage(locale, "about").backLabel;
  const back = guideBackLink(locale, undefined, homeLabel);

  return (
    <GuideShell
      locale={locale}
      eyebrow={doc.eyebrow}
      title={doc.title}
      description={doc.summary}
      backHref={back.href}
      backLabel={back.label}
      backOrigins={guideServiceOrigins(locale, homeLabel)}
    >
      <DocBody sections={doc.sections} locale={locale} values={values} />

      {/* 허브는 짧게 둔다. 여기서 길게 설명하면 나눈 의미가 없다. */}
      <GuideEntryOrder orders={guideEntryOrders(locale)} className="mt-8 grid gap-3">
        {entries.map((entry) => {
          // 제목·요약은 `doc-content`가 로케일별로 갖는다 — 목록만 한국어로 남지 않게.
          const doc = getDocPage(locale, docKeyFor(entry));
          return (
          <ReturnLink
            key={entry.slug}
            // **문서의 「이전 화면으로」는 이 허브로 돌아온다** (2026-10-12 사용자 확인).
            // 예전에는 문서에서 처음 들어온 화면(홈)으로 곧장 건너뛰었다 — 단추 이름은
            // 「이전 화면」인데 두 칸 앞으로 가서, 푸터의 이용 안내 → 목록 → 문서 → 이전
            // 화면으로가 홈으로 갔다. 이제 허브 주소를 (허브가 달고 있는 returnTo 까지)
            // 실어, 문서 → 허브 → 처음 화면으로 **한 칸씩** 돌아간다(`chain`).
            // 값이 한 겹 더 인코딩되는데 허브→문서는 깊이가 둘뿐이라 512자 상한 안이다.
            // 넘으면 버려져 문서 단추가 목록으로 떨어진다 — 틀린 곳으로 가지 않는다.
            chain
            href={localePath(`/guide/${entry.slug}`, locale)}
            className="group grid gap-1 rounded-lg border border-line bg-surface px-5 py-4 transition hover:border-foreground"
          >
            <p className="text-xs font-semibold tracking-wide text-brand-teal">
              {doc.eyebrow}
            </p>
            <p className="flex items-center gap-2 text-lg font-semibold">
              {doc.title}
              <ArrowRight
                aria-hidden="true"
                size={17}
                className="shrink-0 transition group-hover:translate-x-0.5"
              />
            </p>
            <p className="text-sm leading-7 text-muted">{doc.summary}</p>
          </ReturnLink>
          );
        })}
      </GuideEntryOrder>
    </GuideShell>
  );
}
