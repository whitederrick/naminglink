"use client";

// 결제 전 고지와 동의.
//
// **왜 필요한가.** 전자상거래법 제17조 제2항은 즉시 제공되는 디지털 콘텐츠와 주문에 따라 개별
// 생산되는 재화를 청약철회 제한 사유로 인정한다. 다만 단서가 붙는다 — 사업자가 *철회가 불가하다는
// 사실을 소비자가 쉽게 알 수 있는 곳에 표시하고 동의를 받는 조치*를 하지 않으면 **소비자는 그대로
// 청약철회를 할 수 있다.** 약관에 적어 두는 것만으로는 그 조치가 아니다. 그래서 결제 버튼 바로
// 앞에서 고지하고 동의를 받는다.
//
// 동의 사실은 서버가 주문에 남긴다(각 order 라우트의 `withdrawalConsentAt`). 화면의 체크박스는
// 되돌릴 수 있으므로 그것만으로는 나중에 다툼이 생겼을 때 조치를 취했음을 보일 수 없다.
//
// 상품정보 고시는 「전자상거래 등에서의 상품 등의 정보제공에 관한 고시」가 요구하는 항목이다.
// 디지털콘텐츠와 실물(도장)은 요구 항목이 다르므로 종류를 나눈다.

// 문구는 `@/lib/checkout-consent`에 로케일별로 있다. 예전에는 이 파일에 KO·EN 두 벌만 두고
// 한국어가 아니면 전부 영어를 내보냈는데, 구매자가 읽지 못하는 언어의 고지는 법이 요구하는
// "쉽게 알 수 있는 곳에 표시하고 동의를 받는" 조치로 보기 어렵다.
import { getConsentCopy, type ConsentKind } from "@/lib/checkout-consent";

export type { ConsentKind };

/** 사전 문구의 **굵게** 표기를 실제 강조로 바꾼다. */
function emphasize(text: string) {
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

export function CheckoutConsent({
  kind,
  locale,
  checked,
  onChange,
  className = "",
}: {
  kind: ConsentKind;
  /** 지원하는 23개 로케일은 각자의 문구를, 그 밖은 영문을 쓴다. */
  locale?: string;
  checked: boolean;
  onChange: (next: boolean) => void;
  className?: string;
}) {
  const copy = getConsentCopy(locale, kind);

  return (
    <div className={className}>
      <details className="rounded-lg border border-line bg-background px-4 py-3">
        <summary className="cursor-pointer text-sm font-semibold">{copy.infoTitle}</summary>
        <dl className="mt-3 grid gap-1.5 text-xs leading-5 text-muted">
          {copy.info.map(([label, value]) => (
            <div key={label} className="flex flex-wrap gap-x-2">
              <dt className="min-w-24 font-semibold text-foreground">{label}</dt>
              <dd className="flex-1 break-keep-all">{emphasize(value)}</dd>
            </div>
          ))}
        </dl>
      </details>

      <label className="mt-3 flex items-start gap-2.5 text-sm leading-6">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          className="mt-1.5 size-4 shrink-0 accent-brand-teal"
        />
        <span className="break-keep-all text-muted">{emphasize(copy.consent)}</span>
      </label>

      {!checked ? (
        <p className="mt-1.5 break-keep-all text-xs leading-5 text-muted">{copy.required}</p>
      ) : null}

      <p className="mt-2 break-keep-all text-xs leading-5 text-muted">{copy.refund}</p>
    </div>
  );
}
