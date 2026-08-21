import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { ReturnLink } from "@/components/ReturnLink";
import { getDocPage, getNoticeCopy } from "@/lib/doc-content";
import { routeLocale } from "@/lib/route-locale";
import { localePath } from "@/lib/locale-path";
import { notices } from "@/lib/notices";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 공지사항.
 *
 * **무엇을 적는가는 `lib/notices.ts`에 적어 두었다.** 이 파일은 그것을 늘어놓기만 한다.
 *
 * **글과 메타데이터를 나눠 둔다.** 올린 날·적용일·종류는 `notices.ts`가 갖고, 읽는 글은
 * 로케일 자료(`doc-content`)가 공지 id로 갖는다. 날짜를 스물세 벌로 복제하면 어긋날 수 있고,
 * **어긋난 날짜는 이용 조건을 알린 시점을 다투게 만든다.**
 *
 * 예전에는 이 화면이 한국어와 영어 두 벌이었다. 공지는 **이용 조건이 달라지는 것**을 알리는
 * 자리라 읽지 못하는 언어로 띄우면 알린 것이 되지 않는다 — 23개 언어가 이 서비스의 약속이다.
 *
 * **페이징은 미리 넣어 두었다.** 지금은 공지가 적어 한 장에 다 들어가므로 화면에 아무것도
 * 나타나지 않는다. 쌓인 뒤에 붙이려 하면 그때는 이미 긴 목록을 보고 있는 사람이 있다.
 */

/**
 * **쪽 번호는 쿼리로 남는다.** 그래서 이 화면만 미리 만들어 두지 못한다 — 언어는 경로
 * 조각에서 오지만 `?page=`를 서버가 읽어야 목록을 자른다. 색인되는 것은 첫 쪽뿐이라
 * 지금은 이대로 둔다.
 */
type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ page?: string }>;
};

/** 한 장에 몇 개를 놓을 것인가. 공지 하나가 문단 두어 개라 열이면 한 화면에서 훑을 만하다. */
const PAGE_SIZE = 10;

/**
 * 주소의 `page`를 실제로 있는 장 번호로 바꾼다.
 *
 * **범위를 벗어난 값은 잘라 낸다.** 없는 장을 요청받았을 때 빈 화면을 보여 주면 공지가
 * 사라진 것처럼 읽힌다. 숫자가 아닌 값도 마찬가지로 첫 장으로 돌린다 — 링크는 우리가 만들지만
 * 주소는 남이 고쳐 넣을 수 있다.
 */
function resolvePage(raw: string | undefined, lastPage: number) {
  const parsed = Number.parseInt(raw ?? "", 10);
  if (!Number.isFinite(parsed)) return 1;
  return Math.min(Math.max(parsed, 1), lastPage);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = routeLocale((await params).locale);
  const doc = getDocPage(locale, "notice");

  return buildPageMetadata({
    path: "/notice",
    locale,
    requested: locale,
    title: doc.title,
    description: doc.summary,
  });
}

export default async function Page({ params, searchParams }: PageProps) {
  const locale = routeLocale((await params).locale);
  const query = await searchParams;
  const doc = getDocPage(locale, "notice");
  const copy = getNoticeCopy(locale);

  const lastPage = Math.max(1, Math.ceil(notices.length / PAGE_SIZE));
  const page = resolvePage(query?.page, lastPage);
  const shown = notices.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <GuideShell
      locale={locale}
      eyebrow={doc.eyebrow}
      title={doc.title}
      description={doc.summary}
      backHref={localePath("/", locale)}
      backLabel={doc.backLabel}
    >
      <GuideNote>{copy.intro}</GuideNote>

      {notices.length === 0 ? (
        <GuideSection title={copy.empty.title}>
          <p>{copy.empty.body}</p>
        </GuideSection>
      ) : (
        shown.map((notice) => {
          // 글이 없는 공지는 그리지 않는다. **빈 제목으로 그리면 공지가 있었다는 사실만 남고
          // 내용은 사라진다** — 새 공지를 올리고 번역을 돌리지 않았을 때 그렇게 된다.
          const text = copy.items[notice.id];
          if (!text) return null;

          return (
            <GuideSection key={notice.id} title={text.title}>
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                <span className="rounded-full border border-line px-2 py-0.5">
                  {copy.kindLabels[notice.kind]}
                </span>
                <span>{notice.publishedAt}</span>
                {notice.effectiveFrom ? (
                  <span>{copy.effective.replace("{date}", notice.effectiveFrom)}</span>
                ) : null}
              </p>
              {text.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </GuideSection>
          );
        })
      )}

      {/* 한 장에 다 들어가면 아무것도 그리지 않는다. 넘길 곳이 없는 이전·다음 단추는 화면만
          어지럽힌다. 이 자리는 공지가 열한 개가 되는 날 저절로 나타난다. */}
      {lastPage > 1 ? (
        <nav
          aria-label={copy.pager.label}
          className="mt-10 flex items-center justify-center gap-4 border-t border-line pt-5 text-sm"
        >
          {page > 1 ? (
            <ReturnLink
              href={localePath("/notice", locale, page - 1 === 1 ? undefined : `page=${page - 1}`)}
              className="rounded-lg border border-line px-3 py-2 font-medium transition hover:border-foreground"
            >
              {copy.pager.newer}
            </ReturnLink>
          ) : null}
          <span className="tabular-nums text-muted">
            {page} / {lastPage}
          </span>
          {page < lastPage ? (
            <ReturnLink
              href={localePath("/notice", locale, `page=${page + 1}`)}
              className="rounded-lg border border-line px-3 py-2 font-medium transition hover:border-foreground"
            >
              {copy.pager.older}
            </ReturnLink>
          ) : null}
        </nav>
      ) : null}
    </GuideShell>
  );
}
