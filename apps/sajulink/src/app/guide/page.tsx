import type { Metadata } from "next";
import Link from "next/link";

import { GuideShell } from "@/components/GuideShell";
import { guideBackLink, guideOriginQuery } from "@/lib/guide-back";
import { guideEntriesFor } from "@/lib/guide-index";
import { isLocale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { searchParams?: Promise<{ lang?: string; from?: string }> };

/**
 * 허브의 문구도 대상에 맞춰 갈린다. 한국어 이용자에게는 명리 용어를 그대로 쓴 글이 중심이고,
 * 그 밖의 언어로 들어온 사람에게는 "이 숫자가 어떻게 나오는가"가 중심이다.
 */
const COPY = {
  ko: {
    eyebrow: "계산 근거",
    title: "무엇을 근거로 계산하는가",
    description:
      "사주링크가 쓰는 규칙을 전부 공개합니다. 오늘의 운세 스무 항목의 가감, 지지 관계표의 점수, 신강·신약을 가르는 경계값까지 — 화면에 나온 숫자가 어디서 왔는지 확인하실 수 있습니다.",
  },
  global: {
    eyebrow: "How this works",
    title: "What the number is based on",
    description:
      "Every rule we use, written out: the four factors and their weights, the branch relation table, and what happens to the dates you enter.",
  },
} as const;

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);
  const copy = locale === "ko" ? COPY.ko : COPY.global;

  return buildPageMetadata({
    path: "/guide",
    locale,
    requested,
    title: copy.title,
    description: copy.description,
  });
}

export default async function GuideIndexPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);
  // 한국어면 한국어 문서, 그 밖의 언어면 영어 문서만 보여준다(`lib/guide-index.ts`).
  const entries = guideEntriesFor(locale);
  const copy = locale === "ko" ? COPY.ko : COPY.global;
  // 안내를 부른 화면으로 돌려보낸다. 없으면 홈(`lib/guide-back.ts`).
  const back = guideBackLink(locale, params?.from);
  const originQuery = guideOriginQuery(params?.from);

  return (
    <GuideShell
      locale={locale}
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      backHref={back.href}
      backLabel={back.label}
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        {entries.map((entry) => (
          <li key={entry.slug}>
            <Link
              // 출처를 문서까지 들고 간다. 문서 → 허브 → 서비스로 두 번 눌러 나가는 길에서도
              // 처음 들어온 화면으로 돌아가야 한다.
              href={localePath(`/guide/${entry.slug}`, locale, originQuery)}
              className="flex h-full flex-col rounded-xl border border-line bg-surface px-5 py-4 transition hover:bg-surface-strong"
            >
              <span className="text-xs font-semibold text-brand-navy">
                {entry.eyebrow}
              </span>
              <span className="break-keep-all mt-1 text-base font-semibold">
                {entry.title}
              </span>
              <span className="break-keep-all mt-2 text-sm leading-6 text-muted">
                {entry.summary}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </GuideShell>
  );
}
