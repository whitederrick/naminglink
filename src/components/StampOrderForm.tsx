"use client";

import * as PortOne from "@portone/browser-sdk/v2";
import { Stamp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  STAMP_MODEL_CODES,
  STAMP_MODELS,
  type StampModelCode,
  type StampRegion,
} from "@/lib/goods-products";

// 이름 도장 주문 폼.
// - domestic: 한국어 UI · 카카오페이(requestPayment, 리디렉션 복구) · 국내 배송.
// - global: 영어 UI · 페이팔 SPB(loadPaymentUI, 페이지 내 버튼) · 국제 배송(국가 입력 필수).
// 채널 키 등록 전에는 결제 버튼이 "준비 중"으로 남는 다크 런치 상태.

type StampCheckout = {
  orderId: string;
  paymentId: string;
  storeId: string;
  channelKey: string;
  payMethod: "CARD" | "EASY_PAY" | "PAYPAL";
  orderName: string;
  totalAmount: number;
  currency: "KRW" | "USD";
};

const PENDING_STAMP_KEY = "nl_stamp_pending";

const COPY = {
  ko: {
    heading: (display: string) => `이름 도장 신청 · ${display}`,
    intro:
      "분석 결과에서 고른 한글·한자 이름을 새긴 도장을 제작해 배송해 드립니다. 현재 대한민국 내 배송만 지원합니다.",
    modelLegend: "도장 종류",
    nameLabel: "도장에 새길 이름 (한글 또는 한자, 1~8자)",
    namePlaceholder: "예: 김하늘 또는 金昇河",
    nameInvalid: "도장 문구는 한글 또는 한자 1~8자여야 합니다.",
    recipient: "수령인",
    phone: "연락처",
    phonePlaceholder: "예: 010-1234-5678",
    email: "이메일 (선택)",
    country: "배송 국가",
    countryPlaceholder: "",
    address: "배송 주소 (대한민국 내)",
    addressPlaceholder: "우편번호와 함께 전체 주소를 입력해 주세요.",
    note: "요청사항 (선택)",
    privacy:
      "입력하신 수령인·연락처·주소는 도장 제작과 배송에만 사용되며, 관련 법령에 따른 보관 의무 기간이 지나면 파기됩니다.",
    payButton: (display: string) => `카카오페이로 결제 · ${display}`,
    paying: "결제 진행 중…",
    preparing: "결제 기능 준비 중입니다",
    orderFailed: "주문 생성에 실패했습니다.",
    payIncomplete: "결제가 완료되지 않았습니다.",
    payMismatch: "결제 식별값이 주문과 일치하지 않습니다.",
    confirmFailed: "결제 확인에 실패했습니다.",
    processFailed: "주문 처리에 실패했습니다.",
    recoverFailed: "결제 정보를 복구하지 못했습니다. 다시 시도해 주세요.",
    doneEyebrow: "주문이 접수되었습니다",
    doneTitle: "이름 도장 제작을 시작합니다",
    doneBody:
      "결제가 확인되었습니다. 제작이 시작되면 입력하신 연락처로 안내드리며, 발송까지는 영업일 기준 5~7일이 걸립니다. 로그인 상태로 주문하셨다면 계정 페이지의 주문 내역에서 진행 상태를 확인할 수 있습니다.",
    orderNo: "주문번호",
  },
  en: {
    heading: (display: string) => `Order a name stamp · ${display}`,
    intro:
      "We carve your chosen Hangul (or Hanja) name into a traditional Korean name stamp and ship it to you. International shipping is included in the price.",
    modelLegend: "Stamp type",
    nameLabel: "Name to carve (Hangul or Hanja, 1–8 characters)",
    namePlaceholder: "e.g. 김하늘",
    nameInvalid: "The stamp text must be 1–8 Hangul or Hanja characters.",
    recipient: "Recipient",
    phone: "Phone number",
    phonePlaceholder: "e.g. +1 555 123 4567",
    email: "Email (optional)",
    country: "Destination country",
    countryPlaceholder: "e.g. United States",
    address: "Shipping address",
    addressPlaceholder: "Full address including postal code.",
    note: "Special requests (optional)",
    privacy:
      "Your recipient, contact, and address details are used only to make and ship the stamp, and are destroyed after the legally required retention period.",
    payButton: (display: string) => `Pay with PayPal · ${display}`,
    paying: "Processing payment…",
    preparing: "Payment is coming soon",
    orderFailed: "Failed to create the order.",
    payIncomplete: "The payment was not completed.",
    payMismatch: "The payment ID does not match this order.",
    confirmFailed: "Failed to confirm the payment.",
    processFailed: "Failed to process the order.",
    recoverFailed: "Could not recover payment details. Please try again.",
    doneEyebrow: "Order received",
    doneTitle: "Your name stamp is on its way to production",
    doneBody:
      "Your payment is confirmed. We will contact you when production starts; international delivery typically takes 2–3 weeks after dispatch. If you ordered while signed in, you can track the status on your account page.",
    orderNo: "Order number",
  },
} as const;

export function StampOrderForm({
  initialName,
  region = "domestic",
  display,
}: {
  initialName?: string;
  region?: StampRegion;
  display: string;
}) {
  const global = region === "global";
  const copy = global ? COPY.en : COPY.ko;
  const [stampName, setStampName] = useState(initialName ?? "");
  const [model, setModel] = useState<StampModelCode>("ROUND_WOOD");
  const [recipient, setRecipient] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [stage, setStage] = useState<"idle" | "ordering" | "paying" | "confirming" | "done">(
    "idle",
  );
  const [error, setError] = useState("");
  const [completedOrderId, setCompletedOrderId] = useState("");
  const [spbCheckout, setSpbCheckout] = useState<StampCheckout | null>(null);
  const redirectHandled = useRef(false);

  const channelKey = global
    ? process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY_PAYPAL
    : (process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY_KAKAOPAY ??
      process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY);
  const configured = Boolean(process.env.NEXT_PUBLIC_PORTONE_STORE_ID && channelKey);

  async function confirmOrder(orderId: string, paymentId: string) {
    const response = await fetch("/api/goods/stamp-confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId, paymentId }),
    });
    const data = (await response.json().catch(() => null)) as
      | { ok?: boolean; error?: string }
      | null;
    if (!response.ok || !data?.ok) {
      throw new Error(data?.error || copy.confirmFailed);
    }
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (stage !== "idle") return;
    setError("");
    if (!/^[가-힣㐀-䶿一-鿿]{1,8}$/u.test(stampName.trim())) {
      setError(copy.nameInvalid);
      return;
    }
    setStage("ordering");
    try {
      const response = await fetch("/api/goods/stamp-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          region,
          stampName: stampName.trim(),
          model,
          recipient: recipient.trim(),
          phone: phone.trim(),
          email: email.trim(),
          country: global ? country.trim() : undefined,
          address: address.trim(),
          note: note.trim() || undefined,
        }),
      });
      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string; checkout?: StampCheckout }
        | null;
      if (!response.ok || !data?.ok || !data.checkout) {
        throw new Error(data?.error || copy.orderFailed);
      }
      const checkout = data.checkout;
      setStage("paying");
      if (global) {
        // 페이팔 SPB는 페이지 내 버튼을 렌더하므로 리디렉션 복구가 필요 없다.
        setSpbCheckout(checkout);
        return;
      }
      sessionStorage.setItem(
        PENDING_STAMP_KEY,
        JSON.stringify({ orderId: checkout.orderId, paymentId: checkout.paymentId }),
      );
      const redirectUrl = new URL(window.location.href);
      redirectUrl.searchParams.set("stampOrder", checkout.orderId);
      const payment = await PortOne.requestPayment({
        storeId: checkout.storeId,
        channelKey: checkout.channelKey,
        paymentId: checkout.paymentId,
        orderName: checkout.orderName,
        totalAmount: checkout.totalAmount,
        currency: checkout.currency,
        payMethod: checkout.payMethod as "CARD" | "EASY_PAY",
        redirectUrl: redirectUrl.toString(),
      });
      if (!payment) return;
      if (payment.code) throw new Error(payment.message || copy.payIncomplete);
      if (payment.paymentId !== checkout.paymentId) throw new Error(copy.payMismatch);
      setStage("confirming");
      await confirmOrder(checkout.orderId, checkout.paymentId);
      sessionStorage.removeItem(PENDING_STAMP_KEY);
      setCompletedOrderId(checkout.orderId);
      setStage("done");
    } catch (caught) {
      sessionStorage.removeItem(PENDING_STAMP_KEY);
      setStage("idle");
      setError(caught instanceof Error ? caught.message : copy.processFailed);
    }
  }

  // 페이팔 SPB 버튼 렌더: paying 단계에서 컨테이너가 그려진 뒤 SDK를 호출한다.
  useEffect(() => {
    if (!global || stage !== "paying" || !spbCheckout) return;
    const checkout = spbCheckout;
    void PortOne.loadPaymentUI(
      {
        uiType: "PAYPAL_SPB",
        storeId: checkout.storeId,
        channelKey: checkout.channelKey,
        paymentId: checkout.paymentId,
        orderName: checkout.orderName,
        totalAmount: checkout.totalAmount,
        currency: checkout.currency as "USD",
      },
      {
        onPaymentSuccess: () => {
          setSpbCheckout(null);
          setStage("confirming");
          confirmOrder(checkout.orderId, checkout.paymentId)
            .then(() => {
              setCompletedOrderId(checkout.orderId);
              setStage("done");
            })
            .catch((caught) => {
              setStage("idle");
              setError(caught instanceof Error ? caught.message : copy.processFailed);
            });
        },
        onPaymentFail: (paymentError) => {
          setSpbCheckout(null);
          setStage("idle");
          setError(paymentError.message || copy.payIncomplete);
        },
      },
    ).catch((caught) => {
      setSpbCheckout(null);
      setStage("idle");
      setError(caught instanceof Error ? caught.message : copy.processFailed);
    });
    // SPB 렌더는 결제 시도 단위로 한 번만 실행한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [global, stage, spbCheckout]);

  // 모바일 간편결제 리디렉션 복귀(국내 카카오페이 전용): URL의 주문 식별값으로 confirm을 마저 수행한다.
  useEffect(() => {
    if (global || redirectHandled.current) return;
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get("stampOrder");
    if (!orderId) return;
    redirectHandled.current = true;
    const failureCode = params.get("code");
    const failureMessage = params.get("message");
    const clearParams = () => {
      for (const key of ["stampOrder", "paymentId", "txId", "code", "message"]) {
        params.delete(key);
      }
      const query = params.toString();
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${query ? `?${query}` : ""}`,
      );
    };
    const pendingRaw = sessionStorage.getItem(PENDING_STAMP_KEY);
    sessionStorage.removeItem(PENDING_STAMP_KEY);
    let pending: { orderId?: string; paymentId?: string } | null = null;
    try {
      pending = pendingRaw
        ? (JSON.parse(pendingRaw) as { orderId?: string; paymentId?: string })
        : null;
    } catch {
      pending = null;
    }
    void Promise.resolve()
      .then(async () => {
        if (failureCode) throw new Error(failureMessage || copy.payIncomplete);
        if (!pending || pending.orderId !== orderId || !pending.paymentId) {
          throw new Error(copy.recoverFailed);
        }
        setStage("confirming");
        await confirmOrder(orderId, pending.paymentId);
        setCompletedOrderId(orderId);
        setStage("done");
      })
      .catch((caught) => {
        setStage("idle");
        setError(caught instanceof Error ? caught.message : copy.processFailed);
      })
      .finally(() => {
        clearParams();
      });
    // 리디렉션 복구는 최초 마운트에서 한 번만 실행한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (stage === "done") {
    return (
      <section className="rounded-lg border border-brand-teal/25 bg-surface p-6 shadow-sm">
        <p className="text-sm font-semibold text-brand-teal">{copy.doneEyebrow}</p>
        <h2 className="mt-2 text-xl font-semibold">{copy.doneTitle}</h2>
        <p className="mt-3 text-sm leading-6 text-muted">{copy.doneBody}</p>
        <p className="mt-3 text-xs text-muted">
          {copy.orderNo}: {completedOrderId}
        </p>
      </section>
    );
  }

  const busy = stage !== "idle";
  const inputClass =
    "h-11 w-full rounded-lg border border-line bg-background px-3 text-sm";

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-lg border border-line bg-surface p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-strong text-brand-teal">
          <Stamp aria-hidden="true" size={20} />
        </span>
        <div>
          <p className="text-sm font-semibold text-brand-teal">{copy.heading(display)}</p>
          <p className="mt-1 text-sm leading-6 text-muted">{copy.intro}</p>
        </div>
      </div>

      <fieldset className="grid gap-2">
        <legend className="text-sm font-medium">{copy.modelLegend}</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {STAMP_MODEL_CODES.map((code) => {
            const item = STAMP_MODELS[code];
            const selected = model === code;
            return (
              <label
                key={code}
                className={`flex cursor-pointer flex-col gap-1 rounded-lg border p-3 text-sm transition ${
                  selected
                    ? "border-brand-teal bg-surface-strong"
                    : "border-line bg-background hover:border-brand-teal/50"
                }`}
              >
                <span className="flex items-center gap-2 font-semibold">
                  <input
                    type="radio"
                    name="stampModel"
                    value={code}
                    checked={selected}
                    onChange={() => setModel(code)}
                    className="accent-current"
                  />
                  {global ? item.nameEn : item.name}
                </span>
                <span className="text-xs leading-5 text-muted">
                  {global ? item.descriptionEn : item.description}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <label className="grid gap-1 text-sm">
        <span className="font-medium">{copy.nameLabel}</span>
        <input
          value={stampName}
          onChange={(event) => setStampName(event.target.value)}
          placeholder={copy.namePlaceholder}
          required
          maxLength={8}
          className={inputClass}
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="font-medium">{copy.recipient}</span>
          <input
            value={recipient}
            onChange={(event) => setRecipient(event.target.value)}
            required
            maxLength={40}
            className={inputClass}
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium">{copy.phone}</span>
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder={copy.phonePlaceholder}
            required
            className={inputClass}
          />
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">{copy.email}</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={inputClass}
        />
      </label>
      {global ? (
        <label className="grid gap-1 text-sm">
          <span className="font-medium">{copy.country}</span>
          <input
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            placeholder={copy.countryPlaceholder}
            required
            maxLength={60}
            className={inputClass}
          />
        </label>
      ) : null}
      <label className="grid gap-1 text-sm">
        <span className="font-medium">{copy.address}</span>
        <textarea
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          placeholder={copy.addressPlaceholder}
          required
          rows={3}
          maxLength={300}
          className="w-full rounded-lg border border-line bg-background px-3 py-2 text-sm"
        />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">{copy.note}</span>
        <input
          value={note}
          onChange={(event) => setNote(event.target.value)}
          maxLength={500}
          className={inputClass}
        />
      </label>

      <p className="text-xs leading-5 text-muted">{copy.privacy}</p>

      {configured ? (
        <button
          type="submit"
          disabled={busy}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy ? copy.paying : copy.payButton(display)}
        </button>
      ) : (
        <button
          type="button"
          disabled
          className="inline-flex h-11 cursor-not-allowed items-center justify-center rounded-lg border border-brand-teal/35 bg-surface-strong px-4 text-sm font-semibold text-brand-teal opacity-60"
        >
          {copy.preparing}
        </button>
      )}
      {global && stage === "paying" ? <div className="portone-ui-container" /> : null}
      {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
    </form>
  );
}
