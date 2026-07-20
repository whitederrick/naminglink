"use client";

import * as PortOne from "@portone/browser-sdk/v2";
import { CreditCard, Download, LoaderCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  HANJA_PRODUCTS,
  type HanjaProductCode,
} from "@/lib/hanja-products";
import { hasCompletePremiumBirthDate } from "@/lib/premium-hanja-eligibility";
import { birthHourRangeToHour } from "@/lib/birth-hour";
import { countCandidates } from "@/lib/candidate-count";

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
  paid?: boolean;
  confirmed?: boolean;
  nameSignature?: string;
};

type PremiumResult = {
  interpretation?: Record<string, string>;
  reportData?: { primaryCandidate?: { hanjaName?: string }; expiresAt?: string };
  entitlement?: { candidateLimit?: 5 | 10; includesSaju?: boolean; includesPdf?: boolean };
};


const CHECKOUT_KEY_PREFIX = "naminglink:premium:";

function checkoutKey(sessionId: string) {
  return `${CHECKOUT_KEY_PREFIX}${sessionId}`;
}

// 현재 화면의 이름과 복구 대상 결제가 같은 이름인지 확인하기 위한 서명.
function nameSignatureOf(inputFactors?: Record<string, unknown>) {
  if (!inputFactors) return "";
  const family = typeof inputFactors.familyName === "string" ? inputFactors.familyName : "";
  const given = typeof inputFactors.givenNameHangul === "string" ? inputFactors.givenNameHangul : "";
  return `${family}|${given}`;
}

// localStorage는 손상되거나 예전 스키마일 수 있으므로, 진행에 필요한 핵심 필드를 검증한 뒤에만 Checkout으로 취급한다.
function parseStoredCheckout(raw: string | null): Checkout | null {
  if (!raw) return null;
  let value: unknown;
  try {
    value = JSON.parse(raw);
  } catch {
    return null;
  }
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const record = value as Record<string, unknown>;
  const isString = (key: string) => typeof record[key] === "string" && (record[key] as string).length > 0;
  if (
    !isString("sessionId") ||
    !isString("paymentId") ||
    !isString("accessToken") ||
    !isString("productCode") ||
    !(record.productCode as string in HANJA_PRODUCTS)
  ) {
    return null;
  }
  return record as Checkout;
}

function saveCheckout(checkout: Checkout, nameSignature: string) {
  localStorage.setItem(
    checkoutKey(checkout.sessionId),
    JSON.stringify({ ...checkout, savedAt: Date.now(), nameSignature }),
  );
}

function updateStoredCheckout(sessionId: string, patch: Partial<Checkout>) {
  const parsed = parseStoredCheckout(localStorage.getItem(checkoutKey(sessionId)));
  if (!parsed) {
    localStorage.removeItem(checkoutKey(sessionId));
    return;
  }
  localStorage.setItem(checkoutKey(sessionId), JSON.stringify({ ...parsed, ...patch }));
}

const birthplaces = [
  ["서울", 126.978], ["인천", 126.7052], ["대전", 127.3845], ["대구", 128.6014],
  ["광주", 126.8526], ["부산", 129.0756], ["울산", 129.3114], ["제주", 126.5312],
] as const;

function suggestedHour(value: unknown) {
  return birthHourRangeToHour(value) ?? 12;
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
  const availableCandidates = countCandidates(result);

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
    // 상품 식별은 저장된 productCode를 신뢰 소스로 사용한다(금액 역추론은 가격 개정 시 어긋난다).
    const fallbackProduct = HANJA_PRODUCTS[nextCheckout.productCode] ?? HANJA_PRODUCTS.TEN_SAJU_PDF;
    const candidateLimit = nextCheckout.candidateLimit ?? fallbackProduct.candidateLimit;
    const includesPdf = nextCheckout.includesPdf ?? fallbackProduct.includesPdf;
    setStage("verifying");
    await postJson("/api/premium-reports/confirm", {
      sessionId: nextCheckout.sessionId,
      paymentId: nextCheckout.paymentId,
      accessToken: nextCheckout.accessToken,
    });
    // 결제 확인에 성공한 주문만 이후 복구 후보로 삼는다.
    updateStoredCheckout(nextCheckout.sessionId, { confirmed: true });

    setStage("analyzing");
    // 다른 요청이 생성을 선점하면 202(GENERATING)가 돌아오므로 READY까지 폴링한다.
    // 서버는 150초 이상 멈춘 GENERATING 세션을 재청구하므로 그보다 길게 기다린다.
    let generated: Record<string, unknown> | null = null;
    for (let attempt = 0; attempt < 70; attempt++) {
      const response = await postJson(`/api/premium-reports/${nextCheckout.sessionId}/generate`, {
        accessToken: nextCheckout.accessToken,
      });
      if (response.status === "READY") {
        generated = response;
        break;
      }
      if (response.status !== "GENERATING") {
        throw new Error("상세 분석 상태를 확인하지 못했습니다. 잠시 후 다시 시도해 주세요.");
      }
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
    if (!generated) {
      throw new Error("상세 분석 생성이 지연되고 있습니다. 잠시 후 '이전 결제 결과 이어서 받기'로 다시 시도해 주세요.");
    }
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
      saveCheckout(nextCheckout, nameSignatureOf(inputFactors));

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
      // 결제창을 통과한 시점에 결제됨으로 표시한다. 이후 confirm이 실패해도 복구 후보로 남겨
      // 사용자가 재결제하지 않고 이어받도록 한다(confirm은 서버에서 실결제를 재검증한다).
      updateStoredCheckout(nextCheckout.sessionId, { paid: true });
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
    const failureCode = params.get("code");
    const failureMessage = params.get("message");
    if (!sessionId || !paymentId) return;
    redirectHandled.current = true;
    const clearParams = () => {
      params.delete("premiumSession");
      params.delete("paymentId");
      params.delete("txId");
      params.delete("code");
      params.delete("message");
      const query = params.toString();
      window.history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}`);
    };
    void Promise.resolve().then(async () => {
      // 모바일 카드 리디렉션이 실패로 돌아오면 code/message가 붙는다. 이때는 결제 확인을
      // 시도하지 않고 실패 원인을 그대로 안내한다.
      if (failureCode) {
        setStage("idle");
        setError(failureMessage || "결제가 완료되지 않았습니다. 다시 시도해 주세요.");
        clearParams();
        return;
      }
      const resumed = parseStoredCheckout(localStorage.getItem(checkoutKey(sessionId)));
      if (!resumed) throw new Error("결제는 완료되었지만 이 브라우저에서 주문 접근 정보를 찾을 수 없습니다.");
      if (resumed.paymentId !== paymentId) throw new Error("결제 식별값이 주문과 일치하지 않습니다.");
      // 리디렉션 복귀는 결제가 끝난 뒤이므로 결제됨으로 표시해 복구 후보로 남긴다.
      updateStoredCheckout(resumed.sessionId, { paid: true });
      setCheckout(resumed);
      await finishPremium(resumed);
      clearParams();
    }).catch((caught) => {
      setStage("idle");
      setError(caught instanceof Error ? caught.message : "결제 주문을 복구하지 못했습니다.");
    });
    // 결제 리디렉션 복구는 최초 마운트에서 한 번만 실행합니다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    void Promise.resolve().then(() => {
      const currentSignature = nameSignatureOf(inputFactors);
      const candidates = Object.keys(localStorage)
        .filter((key) => key.startsWith(CHECKOUT_KEY_PREFIX))
        .flatMap((key) => {
          const parsed = parseStoredCheckout(localStorage.getItem(key));
          return parsed ? [parsed] : [];
        })
        // 결제창을 통과(paid)했거나 확인까지 끝난(confirmed) 주문 중 현재 화면과 같은 이름만
        // 복구 대상으로 둔다. 미결제 중단 주문·다른 이름의 결제가 섞이는 것을 막으면서,
        // 결제 후 confirm이 실패한 주문도 이어받을 수 있게 한다.
        .filter((entry) => (entry.paid || entry.confirmed) && entry.nameSignature === currentSignature)
        .sort((a, b) => (b.savedAt ?? 0) - (a.savedAt ?? 0));
      setRecoverable(candidates[0] ?? null);
    });
  }, [inputFactors]);

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
    ? (checkout.includesPdf ?? HANJA_PRODUCTS[checkout.productCode]?.includesPdf ?? false)
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
                  <span className="mt-3 block text-xs leading-5 text-muted">
                    후보 최대 {product.candidateLimit}개 상세 · 현재 결과 {Math.min(product.candidateLimit, availableCandidates)}개 제공 · 한자 종합 상세
                    {product.includesSaju ? " · 사주·오행 · PDF" : ""}
                  </span>
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
