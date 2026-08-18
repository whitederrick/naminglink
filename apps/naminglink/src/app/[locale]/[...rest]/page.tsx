import { notFound } from "next/navigation";

/**
 * 로케일 아래의 **없는 주소**를 받아 브랜드 404로 넘긴다.
 *
 * ## 왜 필요한가 (2026-08-18)
 *
 * `not-found.tsx`는 **매칭된 라우트가 `notFound()`를 불렀을 때** 그린다. 어느 라우트에도
 * 맞지 않는 주소(`/ja/zzz`)는 그 앞에서 끝나 Next의 기본 404(검은 글씨 한 줄)가 나간다.
 *
 * 예전에는 라우트가 평평해서 `app/not-found.tsx` 한 장이 그 자리를 받았다. 로케일을 경로
 * 조각으로 옮기며 루트가 `[locale]` 아래로 내려갔고, **그 순간 이 자리가 비었다** — 로컬
 * 운영 빌드로 열어 보고 알았다(빌드도 검사기도 아무 말을 하지 않는다).
 *
 * 이 라우트가 모든 나머지를 받아 `notFound()`를 부르면 `[locale]/not-found.tsx`가 그린다.
 * **실제 라우트를 가리지 않는다** — Next는 구체적인 경로를 먼저 맞춘다.
 *
 * `dynamicParams`를 켜 두는 이유: 레이아웃이 `false`로 두어 로케일 조각을 23개로 잠갔는데,
 * 그 값이 여기까지 내려오면 없는 주소가 **이 라우트에도 못 닿아** 다시 기본 404가 된다.
 * 여기서 만들어 둘 목록은 없고(없는 주소를 미리 셀 수는 없다) 하는 일은 404를 내는 것뿐이다.
 */
export const dynamicParams = true;

export default function CatchAllNotFound() {
  notFound();
}
