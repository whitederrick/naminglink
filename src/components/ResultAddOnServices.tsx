import { ShoppingBag } from "lucide-react";
import type { ServiceConfig } from "@/lib/services";

function serviceCopy(service: ServiceConfig) {
  if (service.serviceType === "HANJA_MEANING_MATCH") {
    return {
      goodsTitle: "선택 이름 굿즈",
      goodsExamples: "도장 · 액자 · 키링 등",
      goodsBody:
        "선택한 한글·한자 이름을 도장, 액자, 키링 등에 적용해 제작을 신청할 수 있습니다.",
    };
  }

  if (service.serviceType === "KOREAN_TO_GLOBAL") {
    return {
      goodsTitle: "글로벌 이름 굿즈",
      goodsExamples: "명함 · 키링 · 티셔츠 등",
      goodsBody:
        "선택한 글로벌 이름을 명함, 키링, 티셔츠 등에 적용해 제작을 신청할 수 있습니다.",
    };
  }

  return {
    goodsTitle: "한글 이름 굿즈",
    goodsExamples: "모자 · 키링 · 티셔츠 등",
    goodsBody:
      "선택한 한글 이름을 모자, 키링, 티셔츠 등에 적용해 제작을 신청할 수 있습니다.",
  };
}

export function ResultAddOnServices({ service }: { service: ServiceConfig }) {
  const copy = serviceCopy(service);

  return (
    <section className="rounded-lg border border-line bg-surface p-5 shadow-sm">
      <p className="text-sm font-semibold text-brand-teal">결과를 더 활용해 보세요</p>
      <h2 className="mt-2 text-lg font-semibold">이름 굿즈</h2>
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
