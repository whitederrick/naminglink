"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import type { ServiceConfig, Locale } from "@/lib/services";
import { getResultCopy } from "@/lib/i18n-result";

/**
 * 굿즈를 권할 수 있는 흐름인가.
 *
 * 지금 파는 굿즈는 **이름 도장 하나뿐이고, 새기는 것은 한글·한자다.** 그래서 결과가 로마자
 * 이름인 KOREAN_TO_GLOBAL(한국인이 글로벌 이름을 받는 흐름)에는 권할 물건이 없다. 예전에는
 * "명함·키링·티셔츠"라고 적고 도장 신청으로 보냈는데, 만들지도 않는 물건을 늘어놓고 엉뚱한
 * 상품으로 넘기는 자리였다.
 *
 * 나머지 둘은 결과가 한글·한자라 도장이 그대로 맞는다 — 한자 매칭(HANJA_MEANING_MATCH)과
 * 외국인이 한국 이름을 받는 흐름(GLOBAL_TO_KOREAN)이다.
 */
function goodsAvailableFor(service: ServiceConfig) {
  return service.serviceType !== "KOREAN_TO_GLOBAL";
}

// 한국어 대상 서비스는 서비스별 한국어 굿즈 문구를 유지한다.
function koreanServiceCopy(service: ServiceConfig) {
  if (service.serviceType === "HANJA_MEANING_MATCH") {
    return {
      eyebrow: "결과를 더 활용해 보세요",
      sectionTitle: "이름 굿즈",
      goodsTitle: "선택 이름 굿즈",
      goodsExamples: "도장 · 액자 · 키링 등",
      goodsBody:
        "선택한 한글·한자 이름을 도장, 액자, 키링 등에 적용해 제작을 신청할 수 있습니다.",
      button: "굿즈 신청 준비 중",
    };
  }

  return {
    eyebrow: "결과를 더 활용해 보세요",
    sectionTitle: "이름 굿즈",
    goodsTitle: "한글 이름 굿즈",
    goodsExamples: "모자 · 키링 · 티셔츠 등",
    goodsBody:
      "선택한 한글 이름을 모자, 키링, 티셔츠 등에 적용해 제작을 신청할 수 있습니다.",
    button: "굿즈 신청 준비 중",
  };
}

export function ResultAddOnServices({
  service,
  locale,
  stampNameOptions,
}: {
  service: ServiceConfig;
  locale?: string;
  // 도장에 새길 후보 한글 이름(오픈된 것만). 있으면 사용자가 후보를 골라 도장 신청으로 넘긴다.
  stampNameOptions?: string[];
}) {
  const options = stampNameOptions?.filter((name) => name.length > 0) ?? [];
  const [selectedName, setSelectedName] = useState(options[0] ?? "");
  // 권할 굿즈가 없는 흐름에서는 자리를 아예 내지 않는다. 호출부마다 빼는 대신 여기서 거르는
  // 것은 이 컴포넌트를 부르는 곳이 넷이라 한 곳만 놓쳐도 그대로 남기 때문이다.
  const showGoods = goodsAvailableFor(service);

  // 외국인 대상 서비스는 결과 페이지 사전(i18n-result)의 굿즈 문구를 로케일별로 사용한다.
  const foreign = locale && locale !== "ko";
  const copy = foreign
    ? (() => {
        const r = getResultCopy(locale as Locale);
        return {
          eyebrow: r.goodsEyebrow,
          sectionTitle: r.goodsSectionTitle,
          goodsTitle: r.goodsItemTitle,
          goodsExamples: r.goodsItemSub.replace(/^\(|\)$/g, ""),
          goodsBody: r.goodsItemDescription,
          button: r.goodsButton,
        };
      })()
    : koreanServiceCopy(service);

  if (!showGoods) return null;

  return (
    <section className="rounded-lg border border-line bg-surface p-5 shadow-sm">
      <p className="text-sm font-semibold text-brand-teal">{copy.eyebrow}</p>
      <h2 className="mt-2 text-lg font-semibold">{copy.sectionTitle}</h2>
      <div className="mt-5 grid gap-4">
        <article className="flex h-full flex-col rounded-lg border border-line bg-background p-5">
          <span className="flex size-10 items-center justify-center rounded-lg bg-surface-strong text-brand-teal">
            <ShoppingBag aria-hidden="true" size={20} />
          </span>
          <h3 className="mt-4 font-semibold">
            {copy.goodsTitle}
            <span className="ml-1 text-sm font-medium text-muted">
              ({copy.goodsExamples})
            </span>
          </h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-muted">{copy.goodsBody}</p>
          {options.length > 0 ? (
            <div className="mt-4">
              <p className="text-xs font-medium text-muted">
                {foreign ? "Choose a name to carve" : "도장에 새길 이름 선택"}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {options.map((name) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setSelectedName(name)}
                    className={`rounded-lg border px-3 py-1.5 text-sm font-semibold transition ${
                      selectedName === name
                        ? "border-brand-teal bg-surface-strong text-brand-teal"
                        : "border-line bg-background hover:border-brand-teal/50"
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
          <Link
            href={
              selectedName
                ? `/stamp-order?lang=${locale ?? "ko"}&name=${encodeURIComponent(selectedName)}`
                : `/stamp-order?lang=${locale ?? "ko"}`
            }
            className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-foreground px-3 text-sm font-semibold text-background transition hover:bg-brand-teal"
          >
            {foreign ? copy.button : "이름 도장 신청 · ₩39,000"}
          </Link>
        </article>
      </div>
    </section>
  );
}
