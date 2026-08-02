"use client";

import { CheckoutConsent } from "@/components/CheckoutConsent";
import { CreditCard, Download, LoaderCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  HANJA_PRODUCTS,
  HANJA_PRODUCT_CODES,
  type HanjaProductCode,
} from "@/lib/hanja-products";
import { hasCompletePremiumBirthDate } from "@/lib/premium-hanja-eligibility";
import { birthHourRangeToHour } from "@/lib/birth-hour";
import { countCandidates } from "@/lib/candidate-count";
import type { UnsealEntitlement } from "@/lib/candidate-seal";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

function hasAdminRole(appMetadata: unknown) {
  if (!appMetadata || typeof appMetadata !== "object") return false;
  const meta = appMetadata as { role?: unknown; roles?: unknown };
  const isAdmin = (value: unknown) => value === "admin" || value === "super_admin";
  return isAdmin(meta.role) || (Array.isArray(meta.roles) && meta.roles.some(isAdmin));
}

type Checkout = {
  // 국내는 토스페이먼츠 직접, 해외는 포트원. 서버가 정해서 내려준다.
  provider?: "TOSS" | "PORTONE";
  clientKey?: string | null;
  orderId?: string;
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
  reportData?: { primaryCandidate?: { hanjaName?: string }; childNameHangul?: string; expiresAt?: string };
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

// 리포트는 결제 후 24시간이면 서버에서 삭제되므로, 그보다 오래된 항목은 접근 토큰·연락처
// PII를 브라우저에 남겨둘 이유가 없다. 파싱 시점에 만료 항목을 지워 영구 잔존을 막는다.
const CHECKOUT_TTL_MS = 48 * 60 * 60 * 1000;

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
  const savedAt = typeof record.savedAt === "number" ? record.savedAt : 0;
  if (!savedAt || Date.now() - savedAt > CHECKOUT_TTL_MS) return null;
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
  /**
   * 상세 분석이 준비됐을 때 부른다.
   *
   * **결제 증명을 함께 넘긴다.** 잠긴 후보는 봉인되어 있어 화면이 스스로 열 수 없고, 서버가
   * 이 증명을 다시 확인해야 열린다. 개수(`candidateLimit`)는 화면 표시용일 뿐이고, 실제로 어디까지
   * 여는지는 서버가 상품표를 보고 정한다.
   */
  onPremiumReady?: (
    candidateLimit: 5 | 10,
    entitlement: UnsealEntitlement,
    headers?: Record<string, string>,
  ) => void | Promise<void>;
}) {
  const [customerName, setCustomerName] = useState("");
  // 청약철회 제한 동의. 체크 전에는 결제로 넘어가지 않는다.
  const [consented, setConsented] = useState(false);
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

  // **구매 가능 여부와 가격을 서버에 묻는다.** 응답에 코드가 있으면 살 수 있고, 없으면 준비 중이다
  // (`/api/product-info`가 상품 판매 여부와 결제 수단 준비 여부를 함께 본다).
  //
  // 예전에는 정적 상품표(`hanja-products.ts`)의 금액을 그대로 그렸다. 그래서 상품을 내려도
  // 화면에는 2,900원·4,900원·9,900원이 그대로 보였다 — 팔지 않는 값을 계속 노출한 것이다.
  // 금액 결정은 여전히 주문 라우트가 하고, 여기서 받는 값은 표시용이다.
  const [offers, setOffers] = useState<Record<string, string>>({});
  useEffect(() => {
    let alive = true;
    void (async () => {
      try {
        const response = await fetch(
          `/api/product-info?codes=${HANJA_PRODUCT_CODES.join(",")}`,
        );
        const data = (await response.json().catch(() => null)) as
          | { ok?: boolean; products?: Record<string, { display?: string }> }
          | null;
        if (!alive) return;
        const next: Record<string, string> = {};
        for (const [code, info] of Object.entries(data?.products ?? {})) {
          if (info?.display) next[code] = info.display;
        }
        setOffers(next);
      } catch {
        // 조회 실패는 "살 수 없음"으로 둔다. 확인되지 않은 가격으로 버튼을 여는 것보다 낫다.
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const selectedPrice = offers[selectedProductCode] ?? null;
  // 결제 키가 있어도 상품이 판매 중이 아니면 살 수 없다. 둘을 함께 본 결과가 selectedPrice다.
  const purchasable = paymentConfigured && selectedPrice !== null;
  const availableCandidates = countCandidates(result);
  // 운영자(admin)로 로그인한 경우에만 결제 없이 테스트 버튼을 노출하고, 서버 검증용 토큰을 확보한다.
  const [adminToken, setAdminToken] = useState<string | null>(null);

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;
    void supabase.auth.getSession().then(({ data }) => {
      const session = data.session;
      if (session?.user && hasAdminRole(session.user.app_metadata)) {
        setAdminToken(session.access_token);
      }
    });
  }, []);

  async function postJson(path: string, body: unknown, extraHeaders?: Record<string, string>) {
    const response = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(extraHeaders ?? {}) },
      body: JSON.stringify(body),
    });
    const payload = await response.json().catch(() => null) as Record<string, unknown> | null;
    if (!response.ok || !payload?.ok) throw new Error(String(payload?.error || "요청 처리에 실패했습니다."));
    return payload;
  }

  const adminAuthHeader = () =>
    adminToken ? { Authorization: `Bearer ${adminToken}` } : undefined;

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
    await onPremiumReady?.(candidateLimit, {
      premium: {
        sessionId: nextCheckout.sessionId,
        accessToken: nextCheckout.accessToken,
      },
    });

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
        withdrawalConsent: true,
      });
      const nextCheckout = order.checkout as Checkout;
      setCheckout(nextCheckout);
      saveCheckout(nextCheckout, nameSignatureOf(inputFactors));

      setStage("paying");

      if (nextCheckout.provider === "TOSS") {
        if (!nextCheckout.clientKey || !nextCheckout.orderId) {
          throw new Error("결제 준비에 실패했습니다.");
        }
        // 토스는 결제창을 통과해도 아직 결제가 아니다. successUrl(우리 서버 라우트)에 브라우저가
        // 닿는 순간 서버가 승인한다 — 결과 화면을 먼저 띄우고 JS를 기다리면 그 사이 창을 닫을
        // 여지가 생기고, 승인은 10분 안에 해야 한다. 돌아올 자리(premiumSession 포함)는 주문
        // metadata.returnPath에 서버가 적어 두었다. 여기서부터 페이지를 떠난다.
        const { loadTossPayments, ANONYMOUS } = await import("@tosspayments/tosspayments-sdk");
        const tossPayments = await loadTossPayments(nextCheckout.clientKey);
        const payment = tossPayments.payment({ customerKey: ANONYMOUS });
        const failUrl = new URL(window.location.href);
        failUrl.searchParams.set("premiumSession", nextCheckout.sessionId);
        failUrl.searchParams.set("payment", "failed");
        await payment.requestPayment({
          method: "CARD",
          amount: { currency: "KRW", value: nextCheckout.totalAmount },
          orderId: nextCheckout.orderId,
          orderName: nextCheckout.orderName,
          successUrl: new URL("/api/payments/toss/confirm", window.location.origin).toString(),
          failUrl: failUrl.toString(),
        });
        return;
      }

      // 한자 상세는 **국내 전용 상품이라 토스페이먼츠만** 쓴다(2026-07-29 결제 일원화).
      // 예전에는 토스 키가 없으면 포트원 국내 채널로 떨어뜨렸는데, 계약하지 않은 채널로
      // 결제가 나가는 길이라 지웠다. 서버도 토스 키가 없으면 주문 자체를 열지 않는다.
      throw new Error("결제가 완료되지 않았습니다.");
    } catch (caught) {
      setStage("idle");
      setError(caught instanceof Error ? caught.message : "결제 처리에 실패했습니다.");
    }
  }

  useEffect(() => {
    if (redirectHandled.current) return;
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("premiumSession");
    // 토스는 승인 라우트가 payment=paid&orderId=를 붙여 돌려보낸다. 토스 주문은
    // provider_payment_id가 orderId와 같으므로 그 값이 곧 결제 식별값이다.
    const tossPayment = params.get("payment");
    const paymentId =
      params.get("paymentId") ?? (tossPayment === "paid" ? params.get("orderId") : null);
    const failureCode = params.get("code") ?? (tossPayment === "failed" ? "TOSS_FAILED" : null);
    const failureMessage = params.get("message");
    if (!sessionId || (!paymentId && !failureCode)) return;
    redirectHandled.current = true;
    const clearParams = () => {
      params.delete("premiumSession");
      params.delete("paymentId");
      params.delete("txId");
      params.delete("code");
      params.delete("message");
      params.delete("payment");
      params.delete("orderId");
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
      if (!paymentId || resumed.paymentId !== paymentId) {
        throw new Error("결제 식별값이 주문과 일치하지 않습니다.");
      }
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
          // 만료(TTL 경과)·손상 항목은 스캔 시점에 정리해 토큰·PII 잔존을 막는다.
          if (!parsed) localStorage.removeItem(key);
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
          headers: { "Content-Type": "application/json", ...(adminAuthHeader() ?? {}) },
          body: JSON.stringify({ reportData: premium.reportData }),
        });
        if (!response.ok) throw new Error("테스트 PDF 생성에 실패했습니다.");
        const url = URL.createObjectURL(await response.blob());
        const anchor = document.createElement("a");
        anchor.href = url;
        // 파일명에 분석 대상자 이름을 넣는다(예: naminglink-premium-안준수.pdf).
        const childName = String(premium.reportData.childNameHangul ?? "")
          .replace(/[\\/:*?"<>|.\s]+/g, "")
          .slice(0, 20);
        anchor.download = childName
          ? `naminglink-premium-${childName}.pdf`
          : "naminglink-premium-test.pdf";
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
      }, adminAuthHeader());
      setPremium(generated.premium as PremiumResult);
      await onPremiumReady?.(
        selectedProduct.candidateLimit,
        { test: true, productCode: selectedProduct.code },
        adminAuthHeader(),
      );
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
    // 살 수 없으면 금액을 적지 않는다 — 팔지 않는 값을 버튼에 노출하지 않는다.
    idle: selectedPrice ? `${selectedPrice} 결제하고 바로 공개` : "판매 준비 중입니다",
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
  // 결제한 상품. 주문에 담긴 코드가 기준이고, 운영자 테스트로 열어 본 경우에는 고른 상품을 쓴다.
  const purchasedProduct = checkout
    ? (HANJA_PRODUCTS[checkout.productCode] ?? null)
    : testResult
      ? selectedProduct
      : null;
  const readyIncludesPdf = checkout
    ? (checkout.includesPdf ?? HANJA_PRODUCTS[checkout.productCode]?.includesPdf ?? false)
    : testResult && selectedProduct.includesPdf;

  return (
    <section id="premium-hanja-analysis" className="rounded-lg border border-brand-teal/30 bg-surface p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal"><CreditCard size={20} /></span>
        <div>
          {/* 결제가 끝난 뒤에는 **고르라는 안내를 지운다.** 이미 산 사람에게 "2,900원 상품도 있다"고
              말할 이유가 없고, 그 자리에는 무엇을 받았는지가 와야 한다. */}
          {stage === "ready" && purchasedProduct ? (
            <>
              <p className="text-sm font-semibold text-brand-teal">받으신 상품</p>
              <h2 className="mt-1 text-xl font-semibold">{purchasedProduct.name}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                {[
                  `한자 후보 최대 ${purchasedProduct.candidateLimit}개의 후보별 상세 설명`,
                  "한자 종합 상세",
                  purchasedProduct.includesSaju ? "사주 원국과 오행 분석" : null,
                ]
                  .filter(Boolean)
                  .join(" · ")}
                {purchasedProduct.includesPdf
                  ? "이 담긴 PDF입니다. 아래에서 내려받으세요."
                  : "를 아래에서 확인하실 수 있습니다."}
              </p>
            </>
          ) : (
            <>
              <p className="text-sm font-semibold text-brand-teal">한자 이름 상세 상품</p>
              <h2 className="mt-1 text-xl font-semibold">원하는 분석 범위만 선택하세요</h2>
              {/* 안내에 금액을 적지 않는다. 상품마다 값이 다르고 관리자 화면에서 바뀌므로,
                  여기 박아 두면 위 카드에 표시된 가격과 어긋난다. */}
              <p className="mt-2 text-sm leading-6 text-muted">모든 상품에 후보별 상세 설명과 한자 종합 상세가 포함됩니다. 사주·오행이 필요하지 않으면 출생일 없이도 이용할 수 있는 상품이 있습니다.</p>
            </>
          )}
        </div>
      </div>

      {stage === "idle" ? (
        <div className="mt-5 grid gap-4">
          <div className="grid gap-3 lg:grid-cols-3">
            {Object.values(HANJA_PRODUCTS).map((product) => {
              const offer = offers[product.code] ?? null;
              // 출생일이 없어 못 고르는 것과, 아직 팔지 않아 못 고르는 것은 사유가 다르다.
              // 둘 다 선택은 막되 안내 문구는 따로 보여 준다.
              const disabled = (product.includesSaju && !birthDateReady) || offer === null;
              return (
                <label key={product.code} className={`rounded-lg border p-4 ${selectedProductCode === product.code ? "border-brand-teal bg-brand-teal/5" : "border-line bg-background"} ${disabled ? "cursor-not-allowed opacity-55" : "cursor-pointer"}`}>
                  <span className="flex items-start gap-2">
                    <input type="radio" name="hanja-product" value={product.code} checked={selectedProductCode === product.code} disabled={disabled} onChange={() => setSelectedProductCode(product.code)} />
                    <span>
                      {/* 살 수 없으면 금액 자리에 상태를 적는다. 팔지 않는 값을 보여 주지 않는다. */}
                      <span className="block font-semibold">{offer ?? "판매 준비 중"}</span>
                      <span className="mt-1 block text-sm">{product.name}</span>
                    </span>
                  </span>
                  <span className="mt-3 block text-xs leading-5 text-muted">
                    후보 최대 {product.candidateLimit}개 상세 · 현재 결과 {Math.min(product.candidateLimit, availableCandidates)}개 제공 · 한자 종합 상세
                    {product.includesSaju ? " · 사주·오행 · PDF" : ""}
                  </span>
                  {offer !== null && product.includesSaju && !birthDateReady ? (
                    <span className="mt-2 block text-xs text-brand-rose">출생 연·월·일 확정 후 이용 가능</span>
                  ) : null}
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

      {/* 결제 전 고지. 이미 결제가 끝나 내려받기만 남은 단계에서는 다시 묻지 않는다.
          **살 수 있을 때만 묻는다** — 청약철회 제한 동의는 결제 직전에 받는 조치라,
          판매 중이 아닌 화면에 띄우면 뜻이 없고 결제 자리가 살아 있는 것처럼 보인다. */}
      {stage !== "ready" && purchasable ? (
        <CheckoutConsent
          kind="DIGITAL"
          checked={consented}
          onChange={setConsented}
          className="mt-5"
        />
      ) : null}

      <button
        type="button"
        onClick={stage === "ready" ? download : startPayment}
        disabled={busy || !inputFactors || (!purchasable && stage !== "ready") || (stage !== "ready" && !consented) || (stage === "ready" && !readyIncludesPdf)}
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
      {stage === "idle" && (premiumTestMode || adminToken) ? (
        <button
          type="button"
          onClick={runDeveloperTest}
          disabled={!inputFactors}
          className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-lg border border-brand-teal/40 px-4 text-sm font-semibold text-brand-teal disabled:opacity-50"
        >
          {adminToken && !premiumTestMode ? "운영자 테스트: 결제 없이 상세 확인" : "선택 상품을 결제 없이 테스트"}
        </button>
      ) : null}
      {!paymentConfigured ? <p className="mt-3 text-xs text-muted">토스페이먼츠 키를 등록하면 실제 결제 버튼이 활성화됩니다. 로컬에서는 아래 개발자 테스트를 이용할 수 있습니다.</p> : null}
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
