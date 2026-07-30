import type { Metadata } from "next";
import Link from "next/link";

import { GuideShell } from "@/components/GuideShell";
import { guideEntriesFor } from "@/lib/guide-index";
import { isLocale } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { searchParams?: Promise<{ lang?: string }> };

/**
 * 허브의 문구도 대상에 맞춰 갈린다. 한국어 이용자에게는 명리 용어를 그대로 쓴 글이 중심이고,
 * 그 밖의 언어로 들어온 사람에게는 "이 숫자가 어떻게 나오는가"가 중심이다.
 */
const COPY = {
  ko: {
    eyebrow: "계산 근거",
    title: "무엇을 근거로 계산하는가",
    description:
      "인연링크가 쓰는 규칙을 전부 공개합니다. 항목과 비중, 지지 관계표의 점수, 신강·신약을 가르는 경계값까지 — 화면에 나온 숫자가 어디서 왔는지 확인하실 수 있습니다.",
    back: "사주 궁합",
    backPath: "/compatibility",
  },
  global: {
    eyebrow: "How this works",
    title: "What the number is based on",
    description:
      "Every rule we use, written out: the four factors and their weights, the branch relation table, and what happens to the dates you enter.",
    back: "Back to compatibility",
    backPath: "/compatibility",
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

  return (
    <GuideShell
      locale={locale}
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      backHref={localePath(copy.backPath, locale)}
      backLabel={copy.back}
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        {entries.map((entry) => (
          <li key={entry.slug}>
            <Link
              href={localePath(`/guide/${entry.slug}`, locale)}
              className="flex h-full flex-col rounded-xl border border-line bg-surface px-5 py-4 transition hover:bg-surface-strong"
            >
              <span className="text-xs font-semibold text-brand-plum">
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
