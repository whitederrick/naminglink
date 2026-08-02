import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { NOTICE_KIND_LABEL, notices } from "@/lib/notices";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 공지사항.
 *
 * **무엇을 적는가는 `lib/notices.ts`에 적어 두었다.** 이 파일은 그것을 늘어놓기만 한다.
 *
 * 글은 한국어와 영어 두 벌이다(소개·문의하기와 같은 기준). 공지는 **이용 조건이 달라지는
 * 것**을 알리는 자리라 읽지 못하는 언어로 띄우면 알린 것이 되지 않는다 — 23로케일 번역이
 * 필요해지면 그때 약관과 같은 방식으로 옮긴다.
 */

type PageProps = { searchParams?: Promise<{ lang?: string }> };

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
        notices.map((notice) => (
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
    </GuideShell>
  );
}
