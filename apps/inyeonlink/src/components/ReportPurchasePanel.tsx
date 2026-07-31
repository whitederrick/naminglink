"use client";

import * as PortOne from "@portone/browser-sdk/v2";
import { useEffect, useState } from "react";

import type { AffinityInput } from "@/lib/affinity-input";
import { fillTemplate, getDictionary, type Locale, type ReportCopy } from "@/lib/i18n";
import { pdfLanguageDiffers } from "@/lib/pdf/fonts";
import type { MatchInput } from "@/lib/match-input";
import type { ReportKind } from "@/lib/report-product";

// 리포트 PDF 구매. 국내는 토스페이먼츠(결제창), 해외는 페이팔(버튼을 패널 안에 그린다).
//
// **상품 둘이 이 패널 하나를 쓴다**(사주 궁합 · 인연의 결). 다른 것은 `kind`, 보낼 입력값,
// 그리고 문구뿐이라 패널을 복사할 이유가 없다 — 복사하면 청약철회 동의나 재발급 처리 같은
// 법·결제 관련 처리가 두 벌이 되고, 한쪽만 고치는 순간 어긋난다.
//
// **생년월일은 주문에는 보내지 않고 발급 요청에만 싣는다.** 주문 표에 누구의 사주였는지가
// 남지 않게 하려는 것이고, 이 서비스가 입력을 저장하지 않는다는 원칙이 유료 흐름에서도
// 유지되는 이유다. 대신 서버가 파일을 보관하지 않으므로 발급은 그 자리에서 받아야 한다 —
// 놓쳤을 때를 위해 같은 주문으로 몇 번은 다시 받을 수 있다.

/** 사전 문구의 **굵게** 표기를 실제 강조로 바꾼다. */
function renderEmphasis(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

// 국내는 토스페이먼츠, 해외는 포트원(페이팔)이다. 서버가 어느 쪽으로 주문을 만들었는지
// `provider`로 알려 주고, 화면은 그에 맞는 결제창을 띄운다.
type TossCheckout = {
  provider: "TOSS";
  orderId: string;
  clientKey: string;
  orderName: string;
  totalAmount: number;
  currency: string;
  display: string;
};

type PortOneCheckout = {
  provider: "PORTONE";
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

type Checkout = TossCheckout | PortOneCheckout;

/**
 * 결제창에 다녀오는 동안 궁합 입력값을 브라우저에 맡겨 둔다.
 *
 * 입력값은 주소의 프래그먼트(#)에만 있고 서버로 가지 않는다. 토스는 결제 후 우리 서버 라우트로
 * 리디렉트되므로 그 사이 프래그먼트가 사라진다. sessionStorage는 **이용자 브라우저**이지
 * 서버가 아니므로, 저장하지 않는다는 원칙과 충돌하지 않는다. 탭을 닫으면 함께 사라진다.
 */
const PENDING_KEY = "inyeonlink.pendingPayment";

function rememberForRedirect(orderId: string) {
  try {
    window.sessionStorage.setItem(
      PENDING_KEY,
      JSON.stringify({ orderId, fragment: window.location.hash.slice(1) }),
    );
  } catch {
    // 저장을 못 해도 결제는 진행한다. 돌아왔을 때 결과를 못 그릴 뿐이다.
  }
}

type Stage =
  | { name: "idle" }
  | { name: "ordering" }
  | { name: "paying" }
  | { name: "paypal"; checkout: PortOneCheckout }
  | { name: "issuing" }
  | { name: "done"; checkout: Checkout }
  | { name: "failed"; message: string };

export function ReportPurchasePanel({
  kind,
  copy,
  locale,
  input,
  offerPrice,
}: {
  /** 어느 메뉴의 리포트인가. 주문·발급 요청에 그대로 실린다. */
  kind: ReportKind;
  /** 이 상품의 문구. 사전에서 골라 넘긴다(`report` 또는 `affinityReport`). */
  copy: ReportCopy;
  locale: Locale;
  /** 결제가 끝난 뒤 PDF를 만드는 데 쓴다. 주문 생성에는 보내지 않는다. */
  input: MatchInput | AffinityInput;
  /** 서버가 정한 표시 가격. 판매 전이면 null이라 버튼이 "준비 중"으로 뜬다. */
  offerPrice: string | null;
}) {
  const t = copy;
  const [stage, setStage] = useState<Stage>({ name: "idle" });
  // 청약철회 제한 동의. 체크하기 전에는 결제로 넘어가지 않는다 — 전자상거래법 §17②는 고지와
  // **동의**를 함께 요구하고, 그 조치가 없으면 우리가 환불 제한을 주장할 수 없다.
  const [consented, setConsented] = useState(false);
  const region = locale === "ko" ? "domestic" : "global";

  /** 결제가 확인된 주문으로 PDF를 받아 저장한다. */
  async function download(checkout: Checkout) {
    setStage({ name: "issuing" });
    const response = await fetch("/api/report/pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind,
        orderId: checkout.orderId,
        // 토스 주문은 provider_payment_id를 orderId로 저장한다(결제 식별자가 따로 없다).
        paymentId: checkout.provider === "TOSS" ? checkout.orderId : checkout.paymentId,
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
    link.download = `inyeonlink-${kind}.pdf`;
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
        // 동의 사실을 서버에도 보낸다. 주문에 남겨야 나중에 다툼이 생겼을 때 조치를 취했음을
        // 보일 수 있다(입력값은 여전히 보내지 않는다).
        body: JSON.stringify({ kind, region, locale, withdrawalConsent: true }),
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

      if (checkout.provider === "TOSS") {
        // 토스는 결제 후 우리 서버 라우트로 돌아가 승인된다. 그 사이 프래그먼트가 사라지므로
        // 입력값을 브라우저에 맡겨 두고, 돌아와서 복원한다.
        rememberForRedirect(checkout.orderId);
        setStage({ name: "paying" });
        const { loadTossPayments, ANONYMOUS } = await import(
          "@tosspayments/tosspayments-sdk"
        );
        const tossPayments = await loadTossPayments(checkout.clientKey);
        const payment = tossPayments.payment({ customerKey: ANONYMOUS });
        const returnTo = new URL(
          "/api/payments/toss/confirm",
          window.location.origin,
        );
        returnTo.searchParams.set("lang", locale);
        // 승인 라우트가 어느 결과 화면으로 되돌릴지 정하는 데 쓴다. 실패 자리도 상품마다
        // 다르므로 현재 경로를 그대로 쓴다 — 경로를 박아 두면 인연의 결에서 결제에 실패한
        // 사람이 궁합 화면으로 떨어진다.
        returnTo.searchParams.set("kind", kind);
        const failTo = new URL(window.location.pathname, window.location.origin);
        failTo.searchParams.set("lang", locale);
        failTo.searchParams.set("payment", "failed");

        // method: "CARD"가 카드·간편결제 통합결제창이라 토스페이·카카오페이·네이버페이·페이코가
        // 함께 들어온다. 리디렉트 방식이므로 여기서 함수가 반환되지 않는다.
        await payment.requestPayment({
          method: "CARD",
          amount: { currency: "KRW", value: checkout.totalAmount },
          orderId: checkout.orderId,
          orderName: checkout.orderName,
          successUrl: returnTo.toString(),
          failUrl: failTo.toString(),
        });
        return;
      }

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

  // 동의는 **주문을 만들기 전에만** 묻는다.
  //
  // 팔지도 않는 상품(판매 전)의 청약철회에 먼저 동의하라는 것은 말이 되지 않고, 주문이 만들어진
  // 뒤에는 동의 사실이 이미 서버에 남아 있어 화면에서 되돌릴 수 있게 두면 기록과 어긋난다.
  // 다시 받기도 이미 결제하며 동의한 주문이다.
  const onSale = Boolean(offerPrice);
  const consentNeeded =
    onSale && (stage.name === "idle" || stage.name === "failed");
  const blocked = busy || !onSale || (consentNeeded && !consented);
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

      {/* **PDF가 화면과 다른 언어로 나가는 경우의 고지.** 지금은 아랍어·크메르어뿐이다 —
          그 두 문자 체계는 PDF 렌더가 죽어서 영어로 낸다(`lib/pdf/fonts.tsx`).
          접어 두지 않고 그대로 보인다. 사고 나서 알면 늦는 조건이고, 실제로 뜨는 로케일이
          둘뿐이라 나머지 화면에는 아무것도 늘지 않는다. */}
      {pdfLanguageDiffers(locale) ? (
        <p className="break-keep-all mt-4 rounded-xl border border-brand-plum/25 bg-brand-plum/5 px-4 py-3 text-sm leading-6">
          {t.pdfLanguageNotice}
        </p>
      ) : null}

      {/* 상품정보제공 고시. 접어 두되 결제 전에 열어 볼 수 있어야 한다. */}
      <details className="mt-4 rounded-xl border border-line/70 bg-background/40 px-4 py-3">
        <summary className="cursor-pointer text-sm font-semibold">
          {t.productInfoTitle}
        </summary>
        <dl className="mt-3 grid gap-1.5 text-xs leading-5 text-muted">
          {/* `{brand}`를 이 서비스 이름으로 채운다. **사전에 "Naming-Link"라고 박혀 있었다** —
              naminglink의 고시 문구를 옮겨 오면서 값까지 함께 따라와, 인연링크 상품인데
              제작·공급자가 네이밍링크로 나가고 있었다(2026-07-31 사용자 지적).
              로케일마다 표기가 다르므로(ko 인연링크 · ja インヨンリンク · th อินยอนลิงก์)
              값을 박지 않고 그 로케일의 `brand`를 끌어다 쓴다. */}
          {t.productInfo.map(([label, value]) => (
            <div key={label} className="flex flex-wrap gap-x-2">
              <dt className="min-w-24 font-semibold text-foreground">{label}</dt>
              <dd className="break-keep-all flex-1">
                {fillTemplate(value, { brand: getDictionary(locale).brand })}
              </dd>
            </div>
          ))}
        </dl>
      </details>

      {consentNeeded ? (
      <label className="mt-4 flex items-start gap-2.5 text-sm leading-6">
        <input
          type="checkbox"
          checked={consented}
          onChange={(event) => setConsented(event.target.checked)}
          className="mt-1.5 size-4 shrink-0 accent-brand-plum"
        />
        <span className="break-keep-all text-muted">
          {renderEmphasis(t.consentLabel)}
        </span>
      </label>
      ) : null}

      {stage.name === "paypal" ? (
        <div className="portone-ui-container mt-5" />
      ) : (
        <button
          type="button"
          onClick={stage.name === "done" ? () => void download(stage.checkout) : buy}
          disabled={blocked}
          className="mt-5 w-full rounded-full bg-brand-plum px-8 py-3.5 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
        >
          {busy
            ? busyLabel
            : stage.name === "done"
              ? t.retry
              : offerPrice
                ? fillTemplate(t.buyButton, { price: offerPrice })
                : t.preparing}
        </button>
      )}

      {consentNeeded && !consented ? (
        <p className="break-keep-all mt-2 text-xs leading-5 text-muted">
          {t.consentRequired}
        </p>
      ) : null}
      {stage.name === "done" ? (
        <p className="break-keep-all mt-3 text-sm text-brand-sage">{t.done}</p>
      ) : null}
      <p className="break-keep-all mt-3 text-xs leading-5 text-muted">
        {t.refundContact}
      </p>

      {stage.name === "failed" ? (
        <p role="alert" className="break-keep-all mt-3 text-sm text-brand-plum">
          {stage.message}
        </p>
      ) : null}
    </section>
  );
}
