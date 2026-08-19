"use client";

import { Children, Suspense, cloneElement, isValidElement, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";

/**
 * 안내 허브의 문서 카드 **순서**를 `?from=`에 맞춰 바꾼다.
 *
 * ## 왜 브라우저에서 하나 (2026-08-19)
 *
 * 허브는 온 곳을 알면 그 갈래의 문서를 앞에 놓는다(`guideEntriesFor`). 그 값이 쿼리라서
 * **서버가 읽는 순간 허브 전체가 미리 만들어지지 못한다.**
 *
 * 그런데 `from`이 바꾸는 것은 **순서뿐**이다 — 카드도 문구도 그대로다. 그래서 서버는 기본
 * 순서로 그대로 그리고(크롤러가 보는 것도 이 순서다), 브라우저가 CSS `order`만 갈아 끼운다.
 * 문구가 두 벌이 되지 않고, 다시 그리는 일도 없다.
 *
 * **순위는 서버가 계산해 넘긴다.** 갈래 판정(`trackForService`)을 여기로 들고 오면 규칙이
 * 두 곳에 생긴다. 아는 출처의 순서표만 받아 고른다.
 *
 * naminglink `components/GuideEntryOrder.tsx`와 같은 부품이다. **감싸는 태그만 다르다** —
 * 이 앱의 카드는 `<li>`라 목록으로 감싼다.
 */
type Props = {
  /** `from` → 카드 순위 배열. 기본 순서의 i번째 카드가 몇 번째로 갈지. */
  orders: Record<string, number[]>;
  className?: string;
  children: ReactNode;
};

/**
 * **`useSearchParams()`는 Suspense 안에 있어야 한다.** 밖에 두면 이 화면이 정적 렌더링에서
 * 빠지고(빌드가 그렇게 실패한다), 그것이 이 컴포넌트가 없애려던 바로 그 대가다.
 *
 * 대체(fallback)는 **기본 순서 그대로의 목록**이다 — 미리 만들어 둔 HTML에 실리는 것이 이쪽이고,
 * 크롤러가 보는 것도 이쪽이다.
 */
export function GuideEntryOrder({ orders, className, children }: Props) {
  return (
    <Suspense fallback={<ul className={className}>{children}</ul>}>
      <OrderedNav orders={orders} className={className}>
        {children}
      </OrderedNav>
    </Suspense>
  );
}

function OrderedNav({ orders, className, children }: Props) {
  const from = useSearchParams().get("from");
  const order = (from && orders[from]) || null;

  return (
    <ul className={className}>
      {Children.map(children, (child, index) => {
        if (!order || !isValidElement<{ style?: React.CSSProperties }>(child)) return child;
        return cloneElement(child, {
          style: { ...child.props.style, order: order[index] },
        });
      })}
    </ul>
  );
}
