"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  hanjaNameOptions,
  familyNameHanja,
  familyNameHangul,
}: {
  service: ServiceConfig;
  locale?: string;
  // 도장에 새길 후보 한글 이름(오픈된 것만). 있으면 사용자가 후보를 골라 도장 신청으로 넘긴다.
  stampNameOptions?: string[];
  /**
   * 한자 매핑 결과의 이름 한자 후보(오픈된 것만).
   *
   * 도장은 새기고 나면 되돌릴 수 없어 **오타가 그대로 물건이 된다.** 그래서 자유 입력으로 받지
   * 않고 이미 분석된 후보에서 고르게 한다.
   */
  hanjaNameOptions?: string[];
  /** 입력 화면에서 받은 성의 한자. 없으면 여기서 고르거나 직접 넣는다. */
  familyNameHanja?: string;
  /** 성의 한글. 이걸로 성 한자 후보를 조회한다. */
  familyNameHangul?: string;
}) {
  const options = stampNameOptions?.filter((name) => name.length > 0) ?? [];
  const [selectedName, setSelectedName] = useState(options[0] ?? "");

  // 한자 도장: 성(한자) + 이름(후보에서 선택).
  const hanjaOptions = hanjaNameOptions?.filter((name) => name.length > 0) ?? [];
  const [selectedHanja, setSelectedHanja] = useState(hanjaOptions[0] ?? "");
  const [familyHanja, setFamilyHanja] = useState(familyNameHanja ?? "");
  // 성 한자 후보. **성씨는 인명용한자 제한을 받지 않으므로 목록에 없을 수 있다.** 그래서 후보를
  // 보여 주되 직접 입력하는 칸을 함께 둔다 — 둘 중 하나만 두면 쓰지 못하는 사람이 생긴다.
  const [familyOptions, setFamilyOptions] = useState<
    Array<{ hanja: string; meaning: string }>
  >([]);

  useEffect(() => {
    const syllable = (familyNameHangul ?? "").trim();
    if (hanjaOptions.length === 0 || !/^[가-힣]$/.test(syllable)) return;
    let cancelled = false;
    void fetch(`/api/hanja/surname?syllable=${encodeURIComponent(syllable)}`)
      .then((response) => response.json())
      .then((data) => {
        if (!cancelled && Array.isArray(data?.options)) setFamilyOptions(data.options);
      })
      .catch(() => {
        // 후보를 못 받아도 직접 입력으로 진행할 수 있다.
      });
    return () => {
      cancelled = true;
    };
  }, [familyNameHangul, hanjaOptions.length]);
  // 서버 검증과 같은 규칙(한글 또는 한자 1~8자, 공백 불가)을 화면에서도 지킨다.
  const composedHanja = `${familyHanja}${selectedHanja}`.replace(/\s/g, "");
  const hanjaValid = /^[가-힣㐀-䶿一-鿿]{1,8}$/u.test(composedHanja);
  // 권할 굿즈가 없는 흐름에서는 자리를 아예 내지 않는다. 호출부마다 빼는 대신 여기서 거르는
  // 것은 이 컴포넌트를 부르는 곳이 넷이라 한 곳만 놓쳐도 그대로 남기 때문이다.
  const showGoods = goodsAvailableFor(service);

  // 외국인 대상 서비스는 결과 페이지 사전(i18n-result)의 굿즈 문구를 로케일별로 사용한다.
  const foreign = locale && locale !== "ko";

  // 도장은 **모델마다 값이 다르다**(원형 목도장·사각 목도장·흑단). 버튼에 한 값을 박아 두면
  // 실제로 고르는 모델과 어긋나므로, 파는 모델들의 가격 폭을 DB에서 받아 적는다.
  // 살 수 없으면(판매 중지·결제 미준비) 빈 배열이 오고 금액을 아예 적지 않는다.
  const stampCodes = foreign
    ? ["STAMP_ROUND_WOOD_USD", "STAMP_SQUARE_WOOD_USD", "STAMP_EBONY_USD"]
    : ["STAMP_ROUND_WOOD_KRW", "STAMP_SQUARE_WOOD_KRW", "STAMP_EBONY_KRW"];
  const [stampPriceRange, setStampPriceRange] = useState<string | null>(null);
  useEffect(() => {
    let alive = true;
    void (async () => {
      try {
        const response = await fetch(`/api/product-info?codes=${stampCodes.join(",")}`);
        const data = (await response.json().catch(() => null)) as
          | { products?: Record<string, { amount?: number; display?: string }> }
          | null;
        const rows = Object.values(data?.products ?? {}).filter(
          (row): row is { amount: number; display: string } =>
            typeof row?.amount === "number" && typeof row?.display === "string",
        );
        if (!alive || rows.length === 0) return;
        const sorted = [...rows].sort((a, b) => a.amount - b.amount);
        const low = sorted[0]!.display;
        const high = sorted[sorted.length - 1]!.display;
        setStampPriceRange(low === high ? low : `${low}~${high}`);
      } catch {
        // 조회 실패 시 금액을 적지 않는다. 틀린 값을 보여 주는 것보다 낫다.
      }
    })();
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foreign]);
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
          {/* 한자 도장: 성은 입력, 이름은 분석된 후보에서 고른다. 도장은 새기고 나면 되돌릴 수
              없으므로 자유 입력으로 받지 않는다. */}
          {hanjaOptions.length > 0 ? (
            <div className="mt-4">
              <p className="text-xs font-medium text-muted">도장에 새길 한자 선택</p>
              <div className="mt-2 flex items-center gap-2">
                <label className="flex items-center gap-1.5 text-xs text-muted">
                  성(한자)
                  <input
                    value={familyHanja}
                    onChange={(event) => setFamilyHanja(event.target.value.trim().slice(0, 2))}
                    placeholder="예: 金"
                    className="h-8 w-16 rounded border border-line bg-background px-2 text-center text-sm"
                  />
                </label>
                <span className="text-xs text-muted">+</span>
                <div className="flex flex-wrap gap-2">
                  {hanjaOptions.map((name) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() => setSelectedHanja(name)}
                      className={`rounded-lg border px-3 py-1.5 text-sm font-semibold transition ${
                        selectedHanja === name
                          ? "border-brand-teal bg-surface-strong text-brand-teal"
                          : "border-line bg-background hover:border-brand-teal/50"
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
              {familyOptions.length > 0 ? (
                <div className="mt-2">
                  <p className="text-xs text-muted">
                    성 한자 후보 (직접 입력해도 됩니다)
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {familyOptions.map((option) => (
                      <button
                        key={option.hanja}
                        type="button"
                        onClick={() => setFamilyHanja(option.hanja)}
                        title={option.meaning}
                        className={`rounded border px-2 py-1 text-sm transition ${
                          familyHanja === option.hanja
                            ? "border-brand-teal bg-surface-strong text-brand-teal"
                            : "border-line bg-background hover:border-brand-teal/50"
                        }`}
                      >
                        {option.hanja}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              <p className="mt-2 text-xs text-muted">
                새길 문구{" "}
                <span className="font-semibold text-foreground">
                  {composedHanja || "—"}
                </span>
                {familyHanja ? null : " · 성의 한자를 넣으면 성명 전체가 새겨집니다"}
              </p>
              {!hanjaValid && composedHanja ? (
                <p className="mt-1 text-xs text-brand-rose">
                  도장 문구는 한글 또는 한자 1~8자여야 합니다.
                </p>
              ) : null}
            </div>
          ) : null}

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
            href={(() => {
              const base = `/stamp-order?lang=${locale ?? "ko"}`;
              // 한자 후보를 고른 경우가 우선이다(한자 매핑 흐름).
              if (hanjaOptions.length > 0 && hanjaValid) {
                return `${base}&name=${encodeURIComponent(composedHanja)}`;
              }
              if (selectedName) return `${base}&name=${encodeURIComponent(selectedName)}`;
              return base;
            })()}
            className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-foreground px-3 text-sm font-semibold text-background transition hover:bg-brand-teal"
          >
            {(foreign ? copy.button : "이름 도장 신청") +
              (stampPriceRange ? ` · ${stampPriceRange}` : "")}
          </Link>
        </article>
      </div>
    </section>
  );
}
