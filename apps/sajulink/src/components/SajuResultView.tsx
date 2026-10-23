"use client";

import Link from "next/link";

import { AdBanner } from "@/components/AdBanner";
import { GuideLink } from "@/components/GuideLink";
import {
  DayMasterSection,
  ElementsSection,
  PillarsSection,
} from "@/components/ReadingSections";
import { ReportPurchasePanel } from "@/components/ReportPurchasePanel";
import { SelfAdCard } from "@/components/SelfAdCard";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";
import { useSajuOutcome } from "@/lib/use-saju-outcome";

/**
 * 사주 풀이 결과 — **평생 것만 있다.**
 *
 * 원국·일간·오행까지가 무료 몫이고, 강약·용신·십신·삶의 네 영역은 리포트가 판다
 * (`public-outcome.ts`가 응답에서부터 걷어낸다 — 화면이 안 그리는 것으로는 부족하다).
 *
 * **오늘의 운세는 여기 없다.** 예전에는 이 화면 한가운데에 하루짜리 점수가 가장 큰 글씨로
 * 있었다 — 사주를 보러 온 사람에게 그것이 결과처럼 읽혔다. 지금은 `/today/result`가 맡고
 * 아래에서 서로 오갈 수 있다(`TodayResultView` 주석 참고).
 *
 * 원국·일간·오행 세 구역은 `ReadingSections`로 뺐다 — 안내 「예시로 읽는 사주」가 같은 부품으로
 * 그려야 예시가 실제 화면과 어긋나지 않는다.
 */

export function SajuResultView({
  dictionary,
  locale,
  offerPrice,
}: {
  dictionary: Dictionary;
  locale: Locale;
  /** 서버가 `product_settings`에서 읽어 내려보낸 표시 가격. 판매 전이면 null이다. */
  offerPrice: string | null;
}) {
  const t = dictionary.result;
  const p = dictionary.report;
  const state = useSajuOutcome({ dictionary, locale, serviceType: "SAJU_READING" });

  if (state.status === "loading") {
    return <p className="mt-10 text-center text-muted">{t.title}</p>;
  }

  if (state.status === "error") {
    return (
      <p role="alert" className="mt-10 break-keep-all text-center text-brand-navy">
        {state.message}
      </p>
    );
  }

  const { reading } = state.outcome;

  return (
    <div className="mt-10 space-y-10">
      <PillarsSection dictionary={dictionary} locale={locale} reading={reading} />

      <DayMasterSection dictionary={dictionary} reading={reading} />

      <ElementsSection dictionary={dictionary} reading={reading} />

      {/* 중간 배너. 읽을 것이 끝난 자리가 아니라 **읽는 도중**의 섹션 경계에 둔다.
          위아래로 버튼이 없는 자리라 오클릭 위험도 낮다 — 애드센스에서 오클릭은 정책 위반이자
          계정 정지 사유다. */}
      <AdBanner
        variant="inline"
        slotKey="reading_result_inline"
        locale={locale}
        className="mb-12 mt-6"
      />

      {/* 유료 리포트 자리 — **실제 결제 패널이다.**
          예전에는 이 자리가 상품 설명과 가격만 그리는 상자였고, `ReportPurchasePanel`은 만들어져
          있는데 **어디에서도 부르지 않았다.** 상품을 켜는 날 구매로 가는 길이 없는 상태였다.
          문구를 여기서 또 그리던 것도 함께 없앴다 — 패널이 같은 사전(`report`)을 읽는다.
          판매 전이면 패널이 스스로 "준비 중"으로 뜬다. */}
      <ReportPurchasePanel
        copy={p}
        locale={locale}
        input={state.input}
        offerPrice={offerPrice}
      />

      {/* 오늘의 운세로 건너가는 자리. **같은 프래그먼트를 그대로 이어 붙인다** — 입력은 주소의
          프래그먼트에만 있으므로, 빠뜨리면 생년월일을 다시 넣게 된다.
          **구매 자리 뒤에 둔다** — 파는 것이 먼저다. */}
      <Link
        href={`${localePath("/today/result", locale)}#${state.fragment}`}
        className="block rounded-2xl border border-line/70 bg-surface/80 px-5 py-4 text-center text-sm font-semibold text-brand-navy"
      >
        {t.seeToday}
      </Link>

      {/* 형제 서비스. 파는 것과 우리 다른 화면 다음이다. */}
      <SelfAdCard dictionary={dictionary} />

      <GuideLink locale={locale} from="reading" className="mt-12" />
    </div>
  );
}
