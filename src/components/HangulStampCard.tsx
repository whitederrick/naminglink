"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";

import { getResultCopy } from "@/lib/i18n-result";
import type { Locale } from "@/lib/services";

// 도장에 새길 수 있는 최대 글자 수. stamp-order의 stampName 검증(한글 1~8자, 공백 불가)과 맞춘다.
const STAMP_MAX = 8;

// 발음 표기(외국 이름 → 한글 음차) 결과 전용 도장 카드.
// 음차 이름은 "다니엘 브룩스"처럼 공백으로 나뉜 여러 조각이라 도장 8자를 넘기기 쉽다. 그래서
// ① 오픈된 표기 후보 중 하나를 고르고 ② 그 후보의 이름 조각(공백 단위)에서 새길 부분만 골라
// 도장 문구를 만든다. 조각을 원래 순서로 공백 없이 이어 붙이고, 8자를 넘으면 신청을 막는다.
export function HangulStampCard({
  candidates,
  revealedCount,
  locale,
}: {
  candidates: Array<{ hangul: string }>;
  revealedCount: number;
  locale: Locale;
}) {
  const copy = getResultCopy(locale);
  const revealed = candidates
    .map((candidate) => candidate.hangul.trim())
    .filter((hangul) => /^[가-힣]{1,12}(?:\s[가-힣]{1,12}){0,3}$/.test(hangul))
    .slice(0, Math.max(1, revealedCount));

  const [spellingIndex, setSpellingIndex] = useState(0);
  const spelling = revealed[Math.min(spellingIndex, revealed.length - 1)] ?? "";
  const parts = spelling.split(/\s+/).filter(Boolean);

  // 표기를 바꾸면 조각 선택도 초기화한다(조각 구성이 후보마다 다르므로 인덱스가 의미를 잃는다).
  const [selectedForSpelling, setSelectedForSpelling] = useState("");
  const [selectedParts, setSelectedParts] = useState<number[]>([]);
  if (selectedForSpelling !== spelling) {
    setSelectedForSpelling(spelling);
    setSelectedParts(parts.map((_, index) => index)); // 기본은 전체 선택(한국식 성+이름).
  }

  const togglePart = (index: number) => {
    setSelectedParts((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index].sort((a, b) => a - b),
    );
  };

  // 선택 조각을 원래 순서로 공백 없이 이어 붙인다(도장 문구엔 공백이 들어가지 않는다).
  const stampText = selectedParts.map((index) => parts[index]).join("");
  const tooLong = stampText.length > STAMP_MAX;
  const canOrder = stampText.length > 0 && !tooLong;

  if (revealed.length === 0) return null;

  return (
    <section className="rounded-lg border border-line bg-surface p-5 shadow-sm">
      <p className="text-sm font-semibold text-brand-teal">{copy.goodsEyebrow}</p>
      <h2 className="mt-2 text-lg font-semibold">{copy.goodsSectionTitle}</h2>
      <article className="mt-5 flex flex-col rounded-lg border border-line bg-background p-5">
        <span className="flex size-10 items-center justify-center rounded-lg bg-surface-strong text-brand-teal">
          <ShoppingBag aria-hidden="true" size={20} />
        </span>
        <h3 className="mt-4 font-semibold">{copy.goodsItemTitle}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{copy.goodsItemDescription}</p>

        {revealed.length > 1 ? (
          <div className="mt-4">
            <p className="text-xs font-medium text-muted">{copy.stampChooseSpelling}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {revealed.map((hangul, index) => (
                <button
                  key={hangul}
                  type="button"
                  onClick={() => setSpellingIndex(index)}
                  className={`rounded-lg border px-3 py-1.5 text-sm font-semibold transition ${
                    spellingIndex === index
                      ? "border-brand-teal bg-surface-strong text-brand-teal"
                      : "border-line bg-background hover:border-brand-teal/50"
                  }`}
                >
                  {hangul}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {parts.length > 1 ? (
          <div className="mt-4">
            <p className="text-xs font-medium text-muted">{copy.stampChooseParts}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {parts.map((part, index) => (
                <button
                  key={`${part}-${index}`}
                  type="button"
                  onClick={() => togglePart(index)}
                  className={`rounded-lg border px-3 py-1.5 text-sm font-semibold transition ${
                    selectedParts.includes(index)
                      ? "border-brand-teal bg-surface-strong text-brand-teal"
                      : "border-line bg-background hover:border-brand-teal/50"
                  }`}
                >
                  {part}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-4 rounded-lg bg-surface-strong px-4 py-3">
          <p className="text-xs text-muted">
            {locale === "ko" ? "도장 문구" : "Stamp"} ({stampText.length}/{STAMP_MAX})
          </p>
          <p className="mt-1 text-lg font-semibold tracking-wide">{stampText || "—"}</p>
        </div>
        {tooLong ? <p className="mt-2 text-sm font-medium text-red-600">{copy.stampTooLong}</p> : null}

        <Link
          href={`/stamp-order?lang=${locale}&name=${encodeURIComponent(stampText)}`}
          aria-disabled={!canOrder}
          tabIndex={canOrder ? undefined : -1}
          className={`mt-5 inline-flex h-10 items-center justify-center rounded-lg px-3 text-sm font-semibold transition ${
            canOrder
              ? "bg-foreground text-background hover:bg-brand-teal"
              : "pointer-events-none bg-line text-muted"
          }`}
        >
          {copy.goodsButton}
        </Link>
      </article>
    </section>
  );
}
