"use client";

import * as PortOne from "@portone/browser-sdk/v2";
import { CreditCard, Download, LoaderCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  HANJA_PRODUCTS,
  type HanjaProductCode,
} from "@/lib/hanja-products";
import { hasCompletePremiumBirthDate } from "@/lib/premium-hanja-eligibility";

type Checkout = {
  sessionId: string;
  paymentId: string;
  accessToken: string;
  storeId: string;
  channelKey: string;
  orderName: string;
  totalAmount: number;
  currency: "KRW";
  productCode: HanjaProductCode;
  candidateLimit: 5 | 10;
  includesSaju: boolean;
  includesPdf: boolean;
  customer?: { fullName?: string; email?: string; phoneNumber?: string } | null;
  savedAt?: number;
};

type PremiumResult = {
  interpretation?: Record<string, string>;
  reportData?: { primaryCandidate?: { hanjaName?: string }; expiresAt?: string };
  entitlement?: { candidateLimit?: 5 | 10; includesSaju?: boolean; includesPdf?: boolean };
};

function saveCheckout(checkout: Checkout) {
  localStorage.setItem(
    `naminglink:premium:${checkout.sessionId}`,
    JSON.stringify({ ...checkout, savedAt: Date.now() }),
  );
}

const birthplaces = [
  ["서울", 126.978], ["인천", 126.7052], ["대전", 127.3845], ["대구", 128.6014],
  ["광주", 126.8526], ["부산", 129.0756], ["울산", 129.3114], ["제주", 126.5312],
] as const;

function suggestedHour(value: unknown) {
  if (typeof value !== "string" || value === "unknown") return 12;
  const [start, end] = value.split("-").map(Number);
  return start === 23 && end === 1 ? 0 : Number.isFinite(start) ? (start + 1) % 24 : 12;
}

export function PremiumHanjaCheckoutPanel({
  inputFactors,
  result,
  paymentConfigured,
  premiumTestMode,
  onPremiumReady,
}: {
  inputFactors?: Record<string, unknown>;
  result: unknown;
  paymentConfigured: boolean;
  premiumTestMode: boolean;
  onPremiumReady?: (candidateLimit: 5 | 10) => void;
}) {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [birthTimeKnown, setBirthTimeKnown] = useState(inputFactors?.birthHour !== "unknown");
  const [exactHour, setExactHour] = useState(() => suggestedHour(inputFactors?.birthHour));
  const [exactMinute, setExactMinute] = useState(0);
  const [birthplace, setBirthplace] = useState("서울|126.978");
  const [lunarLeapMonth, setLunarLeapMonth] = useState(false);
  const [stage, setStage] = useState<"idle" | "ordering" | "paying" | "verifying" | "analyzing" | "pdf" | "ready">("idle");
  const [error, setError] = useState("");
  const [premium, setPremium] = useState<PremiumResult | null>(null);
  const [checkout, setCheckout] = useState<Checkout | null>(null);
  const [recoverable, setRecoverable] = useState<Checkout | null>(null);
  const [testResult, setTestResult] = useState(false);
  const birthDateReady = hasCompletePremiumBirthDate(inputFactors);
  const [selectedProductCode, setSelectedProductCode] = useState<HanjaProductCode>(
    birthDateReady ? "TEN_SAJU_PDF" : "FIVE_DETAIL",
  );
  const redirectHandled = useRef(false);
  const selectedProduct = HANJA_PRODUCTS[selectedProductCode];

  async function postJson(path: string, body: unknown) {
    const response = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const payload = await response.json().catch(() => null) as Record<string, unknown> | null;
    if (!response.ok || !payload?.ok) throw new Error(String(payload?.error || "요청 처리에 실패했습니다."));
    return payload;
  }

  async function finishPremium(nextCheckout: Checkout) {
    const fallbackProduct = Object.values(HANJA_PRODUCTS).find(
      (product) => product.amount === nextCheckout.totalAmount,
    ) ?? HANJA_PRODUCTS.TEN_SAJU_PDF;
    const candidateLimit = nextCheckout.candidateLimit ?? fallbackProduct.candidateLimit;
    const includesPdf = nextCheckout.includesPdf ?? fallbackProduct.includesPdf;
    setStage("verifying");
    await postJson("/api/premium-reports/confirm", {
      sessionId: nextCheckout.sessionId,
      paymentId: nextCheckout.paymentId,
      accessToken: nextCheckout.accessToken,
    });

    setStage("analyzing");
    const generated = await postJson(`/api/premium-reports/${nextCheckout.sessionId}/generate`, {
      accessToken: nextCheckout.accessToken,
    });
    setPremium((generated.premium ?? null) as PremiumResult | null);
    onPremiumReady?.(candidateLimit);

    if (includesPdf) {
      setStage("pdf");
      await postJson(`/api/premium-reports/${nextCheckout.sessionId}/pdf`, {
        accessToken: nextCheckout.accessToken,
      });
    }
    setStage("ready");
  }

  function detailedInputFactors() {
    const [birthplaceLabel, longitude] = birthplace.split("|");
    return {
      ...inputFactors,
      birthTimeKnown,
      premiumBirthHour: birthTimeKnown ? exactHour : null,
      premiumBirthMinute: birthTimeKnown ? exactMinute : null,
      birthplaceLabel,
      longitude: Number(longitude),
      lunarLeapMonth: inputFactors?.calendarType === "lunar" ? lunarLeapMonth : false,
    };
  }

  async function startPayment() {
    if (!inputFactors) return;
    setError("");
    try {
      setStage("ordering");
      const order = await postJson("/api/premium-reports/order", {
        productCode: selectedProductCode,
        inputFactors: detailedInputFactors(),
        customer: {
          fullName: customerName || undefined,
          email: customerEmail || undefined,
        },
      });
      const nextCheckout = order.checkout as Checkout;
      setCheckout(nextCheckout);
      saveCheckout(nextCheckout);

      setStage("paying");
      const redirectUrl = new URL(window.location.href);
      redirectUrl.searchParams.set("premiumSession", nextCheckout.sessionId);
      const payment = await PortOne.requestPayment({
        storeId: nextCheckout.storeId,
        channelKey: nextCheckout.channelKey,
        paymentId: nextCheckout.paymentId,
        orderName: nextCheckout.orderName,
        totalAmount: nextCheckout.totalAmount,
        currency: nextCheckout.currency,
        payMethod: "CARD",
        customer: nextCheckout.customer ?? undefined,
        redirectUrl: redirectUrl.toString(),
        customData: { sessionId: nextCheckout.sessionId },
      });
      if (!payment) return;
      if (payment.code) throw new Error(payment.message || "결제가 완료되지 않았습니다.");
      if (payment.paymentId !== nextCheckout.paymentId) throw new Error("결제 식별값이 주문과 일치하지 않습니다.");
      await finishPremium(nextCheckout);
    } catch (caught) {
      setStage("idle");
      setError(caught instanceof Error ? caught.message : "결제 처리에 실패했습니다.");
    }
  }

  useEffect(() => {
    if (redirectHandled.current) return;
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("premiumSession");
    const paymentId = params.get("paymentId");
    if (!sessionId || !paymentId) return;
    redirectHandled.current = true;
    void Promise.resolve().then(async () => {
      const stored = localStorage.getItem(`naminglink:premium:${sessionId}`);
      if (!stored) throw new Error("결제는 완료되었지만 이 브라우저에서 주문 접근 정보를 찾을 수 없습니다.");
      const resumed = JSON.parse(stored) as Checkout;
      if (resumed.paymentId !== paymentId) throw new Error("결제 식별값이 주문과 일치하지 않습니다.");
      setCheckout(resumed);
      await finishPremium(resumed);
      params.delete("premiumSession");
      params.delete("paymentId");
      params.delete("txId");
      params.delete("code");
      params.delete("message");
      const query = params.toString();
      window.history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}`);
    }).catch((caught) => {
      setStage("idle");
      setError(caught instanceof Error ? caught.message : "결제 주문을 복구하지 못했습니다.");
    });
    // 결제 리디렉션 복구는 최초 마운트에서 한 번만 실행합니다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    void Promise.resolve().then(() => {
      const candidates = Object.keys(localStorage)
        .filter((key) => key.startsWith("naminglink:premium:"))
        .flatMap((key) => {
          try {
            return [JSON.parse(localStorage.getItem(key) ?? "") as Checkout];
          } catch {
            return [];
          }
        })
        .sort((a, b) => (b.savedAt ?? 0) - (a.savedAt ?? 0));
      setRecoverable(candidates[0] ?? null);
    });
  }, []);

  async function download() {
    if (testResult && premium?.reportData) {
      setError("");
      try {
        const response = await fetch("/api/premium-reports/test/pdf", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reportData: premium.reportData }),
        });
        if (!response.ok) throw new Error("테스트 PDF 생성에 실패했습니다.");
        const url = URL.createObjectURL(await response.blob());
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "naminglink-premium-test.pdf";
        anchor.click();
        URL.revokeObjectURL(url);
      } catch (caught) {
        setError(caught instanceof Error ? caught.message : "테스트 PDF 다운로드에 실패했습니다.");
      }
      return;
    }
    if (!checkout) return;
    setError("");
    try {
      const payload = await postJson(`/api/premium-reports/${checkout.sessionId}/download`, {
        accessToken: checkout.accessToken,
      });
      const signedUrl = String(payload.signedUrl ?? "");
      if (!signedUrl) throw new Error("PDF 다운로드 주소가 없습니다.");
      window.location.assign(signedUrl);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "PDF 다운로드에 실패했습니다.");
    }
  }

  async function runDeveloperTest() {
    if (!inputFactors) return;
    setError("");
    setTestResult(true);
    try {
      setStage("analyzing");
      const generated = await postJson("/api/premium-reports/test", {
        productCode: selectedProductCode,
        inputFactors: detailedInputFactors(),
        result,
      });
      setPremium(generated.premium as PremiumResult);
      onPremiumReady?.(selectedProduct.candidateLimit);
      setStage("ready");
    } catch (caught) {
      setStage("idle");
      setTestResult(false);
      setError(caught instanceof Error ? caught.message : "프리미엄 테스트에 실패했습니다.");
    }
  }

  async function recoverPrevious() {
    if (!recoverable) return;
    setError("");
    setCheckout(recoverable);
    try {
      await finishPremium(recoverable);
    } catch (caught) {
      setStage("idle");
      setError(caught instanceof Error ? caught.message : "이전 결제 결과를 복구하지 못했습니다.");
    }
  }

  const busy = stage !== "idle" && stage !== "ready";
  const stageText = {
    idle: `${selectedProduct.amount.toLocaleString("ko-KR")}원 결제하고 바로 공개`,
    ordering: "안전한 주문 생성 중",
    paying: "결제창 확인 중",
    verifying: "결제 금액 검증 중",
    analyzing: selectedProduct.includesSaju
      ? "사주·오행과 이름을 상세 분석 중"
      : "한자 후보 상세 결과를 준비 중",
    pdf: "소장용 PDF 생성 중",
    ready: selectedProduct.includesPdf
      ? "상세 분석과 PDF 준비 완료"
      : "상세 결과 공개 완료",
  }[stage];
  const interpretation = premium?.interpretation ?? {};
  const readyIncludesPdf = checkout
    ? (checkout.includesPdf ?? checkout.totalAmount === 9900)
    : testResult && selectedProduct.includesPdf;

  return (
    <section id="premium-hanja-analysis" className="rounded-lg border border-brand-teal/30 bg-surface p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal"><CreditCard size={20} /></span>
        <div>
          <p className="text-sm font-semibold text-brand-teal">한자 이름 상세 상품</p>
          <h2 className="mt-1 text-xl font-semibold">원하는 분석 범위만 선택하세요</h2>
          <p className="mt-2 text-sm leading-6 text-muted">모든 상품에 후보별 상세 설명과 한자 종합 상세가 포함됩니다. 사주·오행이 필요하지 않으면 출생일 없이도 2,900원 또는 4,900원 상품을 이용할 수 있습니다.</p>
        </div>
      </div>

      {stage === "idle" ? (
        <div className="mt-5 grid gap-4">
          <div className="grid gap-3 lg:grid-cols-3">
            {Object.values(HANJA_PRODUCTS).map((product) => {
              const disabled = product.includesSaju && !birthDateReady;
              return (
                <label key={product.code} className={`rounded-lg border p-4 ${selectedProductCode === product.code ? "border-brand-teal bg-brand-teal/5" : "border-line bg-background"} ${disabled ? "cursor-not-allowed opacity-55" : "cursor-pointer"}`}>
                  <span className="flex items-start gap-2">
                    <input type="radio" name="hanja-product" value={product.code} checked={selectedProductCode === product.code} disabled={disabled} onChange={() => setSelectedProductCode(product.code)} />
                    <span>
                      <span className="block font-semibold">{product.amount.toLocaleString("ko-KR")}원</span>
                      <span className="mt-1 block text-sm">{product.name}</span>
                    </span>
                  </span>
                  <span className="mt-3 block text-xs leading-5 text-muted">후보 {product.candidateLimit}개 상세 · 한자 종합 상세{product.includesSaju ? " · 사주·오행 · PDF" : ""}</span>
                  {disabled ? <span className="mt-2 block text-xs text-brand-rose">출생 연·월·일 확정 후 이용 가능</span> : null}
                </label>
              );
            })}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="grid gap-1 text-sm">이름(선택)<input value={customerName} onChange={(event) => setCustomerName(event.target.value)} className="h-10 rounded-lg border border-line bg-background px-3" /></label>
            <label className="grid gap-1 text-sm">이메일(선택)<input type="email" value={customerEmail} onChange={(event) => setCustomerEmail(event.target.value)} className="h-10 rounded-lg border border-line bg-background px-3" /></label>
          </div>
          {selectedProduct.includesSaju ? <div className="rounded-lg bg-surface-strong p-4">
            <p className="text-sm font-semibold">정밀 사주 계산 정보</p>
            <p className="mt-1 text-xs leading-5 text-muted">무료 화면의 두 시간 단위 선택보다 정확한 출생 시·분과 지역을 사용합니다.</p>
            <label className="mt-3 flex items-center gap-2 text-sm"><input type="checkbox" checked={!birthTimeKnown} onChange={(event) => setBirthTimeKnown(!event.target.checked)} />태어난 시간을 모릅니다</label>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <label className="grid gap-1 text-sm">출생 시<input type="number" min={0} max={23} value={exactHour} disabled={!birthTimeKnown} onChange={(event) => setExactHour(Math.max(0, Math.min(23, Number(event.target.value))))} className="h-10 rounded-lg border border-line bg-background px-3 disabled:opacity-50" /></label>
              <label className="grid gap-1 text-sm">출생 분<input type="number" min={0} max={59} value={exactMinute} disabled={!birthTimeKnown} onChange={(event) => setExactMinute(Math.max(0, Math.min(59, Number(event.target.value))))} className="h-10 rounded-lg border border-line bg-background px-3 disabled:opacity-50" /></label>
              <label className="grid gap-1 text-sm">출생 지역<select value={birthplace} onChange={(event) => setBirthplace(event.target.value)} className="h-10 rounded-lg border border-line bg-background px-3">{birthplaces.map(([name, longitude]) => <option key={name} value={`${name}|${longitude}`}>{name}</option>)}</select></label>
            </div>
            {inputFactors?.calendarType === "lunar" ? <label className="mt-3 flex items-center gap-2 text-sm"><input type="checkbox" checked={lunarLeapMonth} onChange={(event) => setLunarLeapMonth(event.target.checked)} />입력한 음력 날짜는 윤달입니다</label> : null}
          </div> : null}
        </div>
      ) : null}

      <button
        type="button"
        onClick={stage === "ready" ? download : startPayment}
        disabled={busy || !inputFactors || (!paymentConfigured && stage !== "ready") || (stage === "ready" && !readyIncludesPdf)}
        className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background disabled:cursor-not-allowed disabled:opacity-50"
      >
        {busy ? <LoaderCircle className="animate-spin" size={17} /> : stage === "ready" && readyIncludesPdf ? <Download size={17} /> : <CreditCard size={17} />}
        {stage === "ready" && readyIncludesPdf ? "PDF 다운로드" : stageText}
      </button>
      {stage === "idle" && recoverable ? (
        <button
          type="button"
          onClick={recoverPrevious}
          className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-lg border border-line px-4 text-sm font-semibold"
        >
          이전 결제 결과 이어서 받기
        </button>
      ) : null}
      {stage === "idle" && premiumTestMode ? (
        <button
          type="button"
          onClick={runDeveloperTest}
          disabled={!inputFactors}
          className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-lg border border-brand-teal/40 px-4 text-sm font-semibold text-brand-teal disabled:opacity-50"
        >
          선택 상품을 결제 없이 테스트
        </button>
      ) : null}
      {!paymentConfigured ? <p className="mt-3 text-xs text-muted">포트원 환경변수를 등록하면 실제 결제 버튼이 활성화됩니다. 로컬에서는 아래 개발자 테스트를 이용할 수 있습니다.</p> : null}
      {!inputFactors ? <p className="mt-3 text-xs text-brand-rose">입력 화면에서 새로 분석한 결과에서 결제를 진행해 주세요.</p> : null}
      {error ? <p className="mt-3 rounded-lg bg-brand-rose/5 p-3 text-sm text-brand-rose">{error}</p> : null}

      {stage === "ready" && Object.keys(interpretation).length ? (
        <div className="mt-5 grid gap-3 border-t border-line pt-5 md:grid-cols-2">
          {[
            ["사주 원국 해설", interpretation.sajuOverview],
            ["오행 분포 해설", interpretation.fiveElementsAnalysis],
            ["이름과 사주의 균형", interpretation.namingBalance],
            ["이름 이야기", interpretation.story],
            ["실사용 해석", interpretation.practicalUse],
          ].filter(([, value]) => value).map(([title, value]) => (
            <article key={title} className="rounded-lg bg-surface-strong p-4 md:last:col-span-2"><h3 className="font-semibold">{title}</h3><p className="mt-2 whitespace-pre-line text-sm leading-7 text-muted">{value}</p></article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
