"use client";

import * as PortOne from "@portone/browser-sdk/v2";
import { useEffect, useState } from "react";

import { fillTemplate, type Dictionary, type Locale } from "@/lib/i18n";
import type { MatchInput } from "@/lib/match-input";

// 궁합 리포트 PDF 구매. 국내는 카카오페이(결제창), 해외는 페이팔(버튼을 패널 안에 그린다).
//
// **생년월일은 주문에는 보내지 않고 발급 요청에만 싣는다.** 주문 표에 누구의 사주였는지가
// 남지 않게 하려는 것이고, 이 서비스가 입력을 저장하지 않는다는 원칙이 유료 흐름에서도
// 유지되는 이유다. 대신 서버가 파일을 보관하지 않으므로 발급은 그 자리에서 받아야 한다 —
// 놓쳤을 때를 위해 같은 주문으로 몇 번은 다시 받을 수 있다.

type Checkout = {
  orderId: string;
  paymentId: string;
  storeId: string;
  channelKey: string;
  payMethod: string;
  uiType?: "PAYPAL_SPB";
  orderName: string;
  totalAmount: number;
  currency: string;
  display: string;
};

type Stage =
  | { name: "idle" }
  | { name: "ordering" }
  | { name: "paying" }
  | { name: "paypal"; checkout: Checkout }
  | { name: "issuing" }
  | { name: "done"; checkout: Checkout }
  | { name: "failed"; message: string };

export function ReportPurchasePanel({
  dictionary,
  locale,
  input,
}: {
  dictionary: Dictionary;
  locale: Locale;
  /** 결제가 끝난 뒤 PDF를 만드는 데 쓴다. 주문 생성에는 보내지 않는다. */
  input: MatchInput;
}) {
  const t = dictionary.report;
  const [stage, setStage] = useState<Stage>({ name: "idle" });
  const region = locale === "ko" ? "domestic" : "global";

  /** 결제가 확인된 주문으로 PDF를 받아 저장한다. */
  async function download(checkout: Checkout) {
    setStage({ name: "issuing" });
    const response = await fetch("/api/report/pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderId: checkout.orderId,
        paymentId: checkout.paymentId,
        locale,
        input,
      }),
    });
    if (!response.ok) throw new Error(t.failed);

    // 서버가 파일을 보관하지 않으므로 응답을 그대로 내려받는다.
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "inyeonlink-report.pdf";
    link.click();
    URL.revokeObjectURL(url);
    setStage({ name: "done", checkout });
  }

  async function buy() {
    try {
      setStage({ name: "ordering" });
      const response = await fetch("/api/report/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // 여기에는 생년월일이 없다.
        body: JSON.stringify({ region, locale }),
      });
      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string; checkout?: Checkout }
        | null;
      if (!response.ok || !data?.ok || !data.checkout) {
        // 아직 판매 전(다크 런치)이면 버튼을 "준비 중"으로 되돌린다.
        throw new Error(
          data?.error === "NOT_ON_SALE" || data?.error === "PAYMENT_NOT_READY"
            ? t.preparing
            : t.failed,
        );
      }

      const checkout = data.checkout;
      if (checkout.uiType === "PAYPAL_SPB") {
        // 페이팔은 결제창을 띄우지 않고 버튼을 패널 안에 그린다. 컨테이너가 렌더된 뒤에
        // SDK를 불러야 하므로 단계만 바꾸고 아래 effect에 맡긴다.
        setStage({ name: "paypal", checkout });
        return;
      }

      setStage({ name: "paying" });
      const payment = await PortOne.requestPayment({
        storeId: checkout.storeId,
        channelKey: checkout.channelKey,
        paymentId: checkout.paymentId,
        orderName: checkout.orderName,
        totalAmount: checkout.totalAmount,
        currency: checkout.currency as never,
        payMethod: checkout.payMethod as never,
        // 리디렉션으로 돌아오면 결과 프래그먼트가 그대로 있어야 하므로 현재 주소를 그대로 쓴다.
        redirectUrl: window.location.href,
      });
      if (!payment) return;
      if (payment.code) throw new Error(payment.message || t.failed);
      if (payment.paymentId !== checkout.paymentId) throw new Error(t.failed);

      await download(checkout);
    } catch (caught) {
      setStage({
        name: "failed",
        message: caught instanceof Error ? caught.message : t.failed,
      });
    }
  }

  // 페이팔 버튼은 컨테이너(div.portone-ui-container)가 그려진 뒤에 SDK를 호출해야 한다.
  useEffect(() => {
    if (stage.name !== "paypal") return;
    const { checkout } = stage;
    void PortOne.loadPaymentUI(
      {
        uiType: "PAYPAL_SPB",
        storeId: checkout.storeId,
        channelKey: checkout.channelKey,
        paymentId: checkout.paymentId,
        orderName: checkout.orderName,
        totalAmount: checkout.totalAmount,
        currency: checkout.currency as never,
      },
      {
        onPaymentSuccess: () => {
          void download(checkout).catch((caught) =>
            setStage({
              name: "failed",
              message: caught instanceof Error ? caught.message : t.failed,
            }),
          );
        },
        onPaymentFail: (error) =>
          setStage({ name: "failed", message: error.message || t.failed }),
      },
    ).catch(() => setStage({ name: "failed", message: t.failed }));
    // 결제 UI는 이 단계에 들어올 때 한 번만 그린다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage.name]);

  const busy =
    stage.name === "ordering" || stage.name === "paying" || stage.name === "issuing";
  const busyLabel =
    stage.name === "ordering"
      ? t.ordering
      : stage.name === "paying"
        ? t.paying
        : t.issuing;

  return (
    <section className="mt-10 rounded-2xl border border-line bg-surface p-6 shadow-sm">
      <h2 className="break-keep-all text-lg font-semibold">{t.title}</h2>
      <p className="break-keep-all mt-2 text-sm leading-6 text-muted">{t.body}</p>

      <ul className="mt-4 space-y-1.5">
        {t.contents.map((line) => (
          <li key={line} className="break-keep-all text-sm leading-6 text-muted">
            {line}
          </li>
        ))}
      </ul>

      {stage.name === "paypal" ? (
        <div className="portone-ui-container mt-5" />
      ) : (
        <button
          type="button"
          onClick={stage.name === "done" ? () => void download(stage.checkout) : buy}
          disabled={busy}
          className="mt-5 w-full rounded-full bg-brand-plum px-8 py-3.5 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
        >
          {busy
            ? busyLabel
            : stage.name === "done"
              ? t.retry
              : fillTemplate(t.buyButton, {
                  price: locale === "ko" ? "₩990" : "US$2.99",
                })}
        </button>
      )}

      {stage.name === "done" ? (
        <p className="break-keep-all mt-3 text-sm text-brand-sage">{t.done}</p>
      ) : null}
      {stage.name === "failed" ? (
        <p role="alert" className="break-keep-all mt-3 text-sm text-brand-plum">
          {stage.message}
        </p>
      ) : null}
    </section>
  );
}
