"use client";

import * as PortOne from "@portone/browser-sdk/v2";
import { useEffect, useRef, useState } from "react";

import { fillTemplate, getDictionary, type Locale, type ReportCopy } from "@/lib/i18n";
import { pdfLanguageDiffers } from "@/lib/pdf/fonts";
import { rememberForRedirect } from "@/lib/pending-payment";
import type { DreamInput } from "@/lib/dream-input";
import type { ReportKind } from "@/lib/report-product";

// 유료 상품 구매. 국내는 토스페이먼츠(결제창), 해외는 페이팔(버튼을 패널 안에 그린다).
//
// **상품 둘이 이 패널 하나를 쓴다**(꿈 카드 · 태몽 리포트). 다른 것은 `kind`, 보낼 입력값,
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
 * 발급에 필요한 것만 추린 값.
 *
 * 결제에서 **돌아온** 자리에는 결제창 정보(clientKey·금액·표시문구)가 없다. 주소에 실려 오는
 * 것은 주문 번호뿐이고, 그것으로 발급은 충분하다. 그래서 발급·재발급은 `Checkout` 전체가
 * 아니라 이 값을 받는다 — 복귀 경로가 억지로 빈 `Checkout`을 지어내지 않아도 된다.
 */
type Issuable = { orderId: string; paymentId: string };

function issuableOf(checkout: Checkout): Issuable {
  return {
    orderId: checkout.orderId,
    // 토스 주문은 provider_payment_id를 orderId로 저장한다(결제 식별자가 따로 없다).
    paymentId: checkout.provider === "TOSS" ? checkout.orderId : checkout.paymentId,
  };
}

type Stage =
  | { name: "idle" }
  | { name: "ordering" }
  | { name: "paying" }
  | { name: "paypal"; checkout: PortOneCheckout }
  | { name: "issuing" }
  | { name: "done"; order: Issuable }
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
  input: DreamInput;
  /** 서버가 정한 표시 가격. 판매 전이면 null이라 버튼이 "준비 중"으로 뜬다. */
  offerPrice: string | null;
}) {
  const t = copy;
  const [stage, setStage] = useState<Stage>({ name: "idle" });
  // 청약철회 제한 동의. 체크하기 전에는 결제로 넘어가지 않는다 — 전자상거래법 §17②는 고지와
  // **동의**를 함께 요구하고, 그 조치가 없으면 우리가 환불 제한을 주장할 수 없다.
  const [consented, setConsented] = useState(false);
  /** 결제 복귀를 이미 처리했는가. 개발 모드의 이중 실행과 리렌더를 함께 막는다. */
  const returnHandled = useRef(false);
  // 화면 언어가 결제권역을 정한다 — ko는 국내(토스페이먼츠·원화), 나머지 22개는 해외
  // (페이팔·달러).
  //
  // ⚠️ **이 규칙은 `lib/report-product.ts`의 `regionForLocale`과 같은 것이다.** 그쪽이
  // `server-only`라 브라우저에서 부를 수 없어 여기 한 벌 더 있다. 바꿀 때는 두 곳을 함께
  // 고칠 것 — 어긋나면 화면이 보여 준 가격과 서버가 만드는 주문이 달라지고, 타입이 같아서
  // 컴파일러는 잡지 못한다.
  const region = locale === "ko" ? "domestic" : "global";

  /** 결제가 확인된 주문으로 PDF를 받아 저장한다. */
  async function download(order: Issuable) {
    setStage({ name: "issuing" });
    const response = await fetch("/api/report/pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind,
        orderId: order.orderId,
        paymentId: order.paymentId,
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
    setStage({ name: "done", order });
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

      await download(issuableOf(checkout));
    } catch (caught) {
      setStage({
        name: "failed",
        message: caught instanceof Error ? caught.message : t.failed,
      });
    }
  }

  // 토스 결제에서 돌아온 자리. **이것이 없으면 돈은 나가고 파일은 안 나온다.**
  //
  // 국내 결제는 우리 서버 승인 라우트를 거쳐 `?payment=paid&orderId=`로 이 화면에 되돌아온다.
  // 그 시점에 결제는 **이미 끝나 있다.** 화면이 할 일은 발급뿐인데 그 자리가 비어 있으면
  // 이용자는 버튼을 다시 누르는 수밖에 없고, 그러면 **새 주문이 하나 더 만들어진다** — 한 사람이
  // 두 번 결제하는 자리다(2026-08-06에 넣었다. 해외 결제는 현재 주소로 돌아와 이 문제가 없었다).
  //
  // 입력값 프래그먼트는 결과 화면(`MatchResultView`·`AffinityResultView`)이 이미 되돌려 놓았다.
  // 결과가 있어야 이 패널이 그려지므로, 여기까지 왔다면 입력은 갖춰져 있다.
  useEffect(() => {
    // 개발 모드는 effect를 두 번 돌린다. 발급을 두 번 부르지 않도록 막는다.
    if (returnHandled.current) return;
    const params = new URLSearchParams(window.location.search);
    const outcome = params.get("payment");
    if (!outcome) return;
    returnHandled.current = true;

    // 처리한 흔적만 지운다. **프래그먼트는 반드시 남긴다** — 입력값이 거기에만 있어서 함께
    // 지우면 새로고침에서 결과가 통째로 사라진다.
    const clearQuery = () => {
      params.delete("payment");
      params.delete("orderId");
      const query = params.toString();
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`,
      );
    };

    // effect 안에서 setState를 동기로 호출하면 렌더가 연쇄로 돈다. 마이크로태스크로 미뤄
    // 두 갈래(실패 안내·발급)를 함께 한 틱 뒤로 보낸다 — 결과 화면들과 같은 방식이다.
    void Promise.resolve()
      .then(async () => {
        const orderId = params.get("orderId") ?? "";
        if (outcome !== "paid" || !orderId) {
          // `failed`·`invalid`·`notfound` 모두 결제가 되지 않은 상태다 — 토스는 승인해야
          // 결제가 된다. 다시 시도하면 되므로 실패로 안내한다.
          setStage({ name: "failed", message: t.failed });
          return;
        }
        // 토스 주문은 결제 식별자가 따로 없어 주문 번호가 곧 그 값이다.
        await download({ orderId, paymentId: orderId });
      })
      .catch((caught: unknown) =>
        setStage({
          name: "failed",
          message: caught instanceof Error ? caught.message : t.failed,
        }),
      )
      .finally(clearQuery);
    // 복귀 처리는 최초 마운트에서 한 번만 한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          void download(issuableOf(checkout)).catch((caught) =>
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
          onClick={stage.name === "done" ? () => void download(stage.order) : buy}
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

      {/* **무엇으로 결제되는지 누르기 전에 알린다.**
          화면 언어가 결제사를 정하므로(위 `region` 주석), 영어로 보는 한국 이용자에게는
          페이팔만 뜬다. 누르고 나서 알면 늦는 조건이다. 금액과 통화는 이미 버튼에 있으니
          여기서 더할 것은 결제수단 하나뿐이다.

          **브랜드 이름만 쓰고 설명을 붙이지 않는다.** 고유명사라 번역이 필요 없어서인데,
          설명 문구를 달면 23로케일이 함께 걸린다 — 지금 필요한 정보는 이것 하나다.
          결제창이 이미 떠 있는 페이팔 단계에서는 버튼 자체가 브랜드를 보여 주므로 감춘다. */}
      {onSale && stage.name !== "paypal" ? (
        <p className="mt-2 text-center text-xs text-muted">
          {region === "domestic" ? "토스페이먼츠" : "PayPal"}
        </p>
      ) : null}

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
