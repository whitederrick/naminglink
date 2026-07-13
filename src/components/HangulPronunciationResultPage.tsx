"use client";

import Link from "next/link";
import { Headphones, Home, ShoppingBag } from "lucide-react";
import { useMemo, useSyncExternalStore } from "react";
import { ResultCard } from "@/components/ResultCard";
import { SiteFooter } from "@/components/SiteFooter";
import {
  globalNameToHangulService,
  type Locale,
} from "@/lib/services";

type StoredResult = {
  result: unknown;
  logId: string | null;
  persistence: "saved" | "skipped" | "failed";
  createdAt: string;
};

function ResultServices() {
  return (
    <section className="rounded-lg border border-line bg-surface p-5 shadow-sm">
      <p className="text-sm font-semibold text-brand-teal">
        결과를 더 활용해 보세요
      </p>
      <h2 className="mt-2 text-lg font-semibold">부가 서비스</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <article className="flex h-full flex-col rounded-lg border border-line bg-background p-5">
          <span className="flex size-10 items-center justify-center rounded-lg bg-surface-strong text-brand-teal">
            <Headphones aria-hidden="true" size={20} />
          </span>
          <h3 className="mt-4 font-semibold">상세 발음 분석 리포트</h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            음절·발음 기호·표기 근거와 대안을 확인하고, 한글 발음을 음성으로
            들어보세요. PDF로 저장할 수 있습니다.
          </p>
          <button
            type="button"
            disabled
            className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-surface-strong px-3 text-sm font-semibold text-muted disabled:cursor-not-allowed"
          >
            신청 준비 중
          </button>
        </article>
        <article className="flex h-full flex-col rounded-lg border border-line bg-background p-5">
          <span className="flex size-10 items-center justify-center rounded-lg bg-surface-strong text-brand-teal">
            <ShoppingBag aria-hidden="true" size={20} />
          </span>
          <h3 className="mt-4 font-semibold">
            한글 이름 굿즈
            <span className="ml-1 text-sm font-medium text-muted">
              (모자 · 키링 · 흰색 티셔츠 등)
            </span>
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            선택한 한글 이름을 모자, 키링, 흰색 티셔츠 등에 새겨 나만의 굿즈를
            만들어보세요.
          </p>

          <button
            type="button"
            disabled
            className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-surface-strong px-3 text-sm font-semibold text-muted disabled:cursor-not-allowed"
          >
            굿즈 신청 준비 중
          </button>
        </article>
      </div>
    </section>
  );
}

const emptySubscribe = () => () => {};

export function HangulPronunciationResultPage({
  resultId,
  locale,
}: {
  resultId: string;
  locale: Locale;
}) {
  const storageKey = `naminglink:hangul-result:${resultId}`;
  const raw = useSyncExternalStore(
    emptySubscribe,
    () => sessionStorage.getItem(storageKey),
    () => null,
  );
  const ready = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const stored = useMemo(() => {
    if (!raw) return null;

    try {
      return JSON.parse(raw) as StoredResult;
    } catch {
      return null;
    }
  }, [raw]);

  return (
    <main className="min-h-screen">
      <section className="mx-auto grid w-full max-w-5xl gap-6 px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
          <Link
            href={`/?lang=${locale}`}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-foreground/80 bg-[linear-gradient(135deg,#10150f,#1c211a)] px-4 text-sm font-semibold text-white shadow-sm"
          >
            <Home aria-hidden="true" size={17} />
            홈
          </Link>
          <p className="text-sm text-muted">한글 발음 분석 결과</p>
        </header>

        {!ready ? (
          <section className="rounded-lg border border-line bg-surface p-6 text-sm text-muted shadow-sm">
            결과를 불러오고 있습니다.
          </section>
        ) : stored ? (
          <div className="grid gap-5">
            <section className="rounded-lg border border-line bg-surface p-5 shadow-sm">
              <p className="text-sm font-semibold text-brand-teal">분석 완료</p>
              <h1 className="mt-2 text-2xl font-semibold">
                본인 이름의 한글 발음 표기
              </h1>
            </section>
            <ResultCard
              service={globalNameToHangulService}
              result={stored.result}
              revealAll={false}
            />
            <ResultServices />
          </div>
        ) : (
          <section className="rounded-lg border border-line bg-surface p-6 shadow-sm">
            <h1 className="text-lg font-semibold">결과를 불러올 수 없습니다.</h1>
            <p className="mt-2 text-sm leading-6 text-muted">
              이 결과는 분석을 진행한 브라우저 탭에서만 확인할 수 있습니다.
            </p>
            <Link
              href={`/global-to-korean?lang=${locale}&mode=transliteration`}
              className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-semibold text-background"
            >
              입력 화면으로 돌아가기
            </Link>
          </section>
        )}
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}