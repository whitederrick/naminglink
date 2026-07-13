import { FileText, ShoppingBag } from "lucide-react";
import type { ServiceConfig } from "@/lib/services";

function serviceCopy(service: ServiceConfig) {
  if (service.serviceType === "HANJA_MEANING_MATCH") {
    return {
      reportTitle: "상세 한자 분석 리포트",
      reportBody:
        "후보별 한자 의미, 지정 발음, 배제 사유와 공식 데이터 확인 사항을 상세 리포트로 제공합니다. PDF로 저장할 수 있습니다.",
      goodsTitle: "선택 이름 굿즈",
      goodsExamples: "도장 · 액자 · 키링 등",
      goodsBody:
        "선택한 한글·한자 이름을 도장, 액자, 키링 등에 적용해 제작을 신청할 수 있습니다.",
    };
  }

  if (service.serviceType === "KOREAN_TO_GLOBAL") {
    return {
      reportTitle: "상세 글로벌 이름 리포트",
      reportBody:
        "국가·언어별 발음, 의미 연결, 사용 인상과 주의사항을 상세 리포트로 제공합니다. PDF로 저장할 수 있습니다.",
      goodsTitle: "글로벌 이름 굿즈",
      goodsExamples: "명함 · 키링 · 티셔츠 등",
      goodsBody:
        "선택한 글로벌 이름을 명함, 키링, 티셔츠 등에 적용해 제작을 신청할 수 있습니다.",
    };
  }

  return {
    reportTitle: "상세 이름 분석 리포트",
    reportBody:
      "이름의 의미, 발음, 문화권 적합성과 후보별 차이를 상세 리포트로 제공합니다. PDF로 저장할 수 있습니다.",
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
      <h2 className="mt-2 text-lg font-semibold">부가 서비스</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <article className="flex h-full flex-col rounded-lg border border-line bg-background p-5">
          <span className="flex size-10 items-center justify-center rounded-lg bg-surface-strong text-brand-teal">
            <FileText aria-hidden="true" size={20} />
          </span>
          <h3 className="mt-4 font-semibold">{copy.reportTitle}</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-muted">{copy.reportBody}</p>
          <button
            type="button"
            disabled
            className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-surface-strong px-3 text-sm font-semibold text-muted disabled:cursor-not-allowed"
          >
            상세 리포트 신청 준비 중
          </button>
        </article>
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