import type { Metadata } from "next";
import Link from "next/link";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { isLocale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { NOTICE_KIND_LABEL, notices } from "@/lib/notices";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 공지사항.
 *
 * **무엇을 적는가는 `lib/notices.ts`에 적어 두었다.** 이 파일은 그것을 늘어놓기만 한다.
 * naminglink의 같은 페이지와 짜임이 같다.
 *
 * 글은 한국어와 영어 두 벌이다(소개·문의하기와 같은 기준). 공지는 **이용 조건이 달라지는
 * 것**을 알리는 자리라 읽지 못하는 언어로 띄우면 알린 것이 되지 않는다 — 23로케일 번역이
 * 필요해지면 그때 약관과 같은 방식으로 옮긴다.
 *
 * **페이징은 미리 넣어 두었다.** 지금은 공지가 적어 한 장에 다 들어가므로 화면에 아무것도
 * 나타나지 않는다. 쌓인 뒤에 붙이려 하면 그때는 이미 긴 목록을 보고 있는 사람이 있다.
 */

type PageProps = { searchParams?: Promise<{ lang?: string; page?: string }> };

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

const TITLE_KO = "공지사항";
const TITLE_EN = "Notices";
const SUMMARY_KO = "이용에 영향이 있는 변경을 알리는 자리입니다.";
const SUMMARY_EN = "Where we announce changes that affect how you use the service.";

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);
  const korean = locale === "ko";

  return buildPageMetadata({
    path: "/notice",
    locale,
    requested,
    title: korean ? TITLE_KO : TITLE_EN,
    description: korean ? SUMMARY_KO : SUMMARY_EN,
  });
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  const korean = locale === "ko";
  const language = korean ? "ko" : "en";

  const lastPage = Math.max(1, Math.ceil(notices.length / PAGE_SIZE));
  const page = resolvePage(params?.page, lastPage);
  const shown = notices.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <GuideShell
      locale={locale}
      eyebrow={korean ? "공지" : "Notices"}
      title={korean ? TITLE_KO : TITLE_EN}
      description={korean ? SUMMARY_KO : SUMMARY_EN}
      backHref={localePath("/", locale)}
      backLabel={korean ? "처음으로" : "Home"}
    >
      <GuideNote>
        {korean
          ? "가격·약관처럼 이용 조건이 달라지는 변경은 시행 전에 이 자리에 올립니다. 화면이 빨라졌다거나 하는 내부 개선은 적지 않습니다 — 여기에 적히는 것은 알고 계셔야 하는 것뿐입니다."
          : "Changes to your terms of use — prices, policies — are posted here before they take effect. Internal improvements are not listed: what appears here is what you need to know."}
      </GuideNote>

      {notices.length === 0 ? (
        <GuideSection title={korean ? "올라온 공지가 없습니다" : "No notices yet"}>
          <p>
            {korean
              ? "알려 드릴 변경이 생기면 이 자리에 올립니다."
              : "When something changes, it will appear here."}
          </p>
        </GuideSection>
      ) : (
        shown.map((notice) => (
          <GuideSection key={notice.id} title={notice.title[language]}>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
              <span className="rounded-full border border-line px-2 py-0.5">
                {NOTICE_KIND_LABEL[notice.kind][language]}
              </span>
              <span>{notice.publishedAt}</span>
              {notice.effectiveFrom ? (
                <span>
                  {korean
                    ? `${notice.effectiveFrom}부터 적용`
                    : `Takes effect ${notice.effectiveFrom}`}
                </span>
              ) : null}
            </p>
            {notice.body[language].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </GuideSection>
        ))
      )}

      {/* 한 장에 다 들어가면 아무것도 그리지 않는다. 넘길 곳이 없는 이전·다음 단추는 화면만
          어지럽힌다. 이 자리는 공지가 열한 개가 되는 날 저절로 나타난다. */}
      {lastPage > 1 ? (
        <nav
          aria-label={korean ? "공지 페이지" : "Notice pages"}
          className="mt-10 flex items-center justify-center gap-4 border-t border-line pt-5 text-sm"
        >
          {page > 1 ? (
            <Link
              href={localePath("/notice", locale, page - 1 === 1 ? undefined : `page=${page - 1}`)}
              className="rounded-lg border border-line px-3 py-2 font-medium transition hover:border-foreground"
            >
              {korean ? "← 최신" : "← Newer"}
            </Link>
          ) : null}
          <span className="tabular-nums text-muted">
            {page} / {lastPage}
          </span>
          {page < lastPage ? (
            <Link
              href={localePath("/notice", locale, `page=${page + 1}`)}
              className="rounded-lg border border-line px-3 py-2 font-medium transition hover:border-foreground"
            >
              {korean ? "지난 공지 →" : "Older →"}
            </Link>
          ) : null}
        </nav>
      ) : null}
    </GuideShell>
  );
}
