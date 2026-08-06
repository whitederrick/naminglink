"use client";

/**
 * 결제창에 다녀오는 동안 입력값을 브라우저에 맡겨 두고, 돌아와서 되돌린다.
 *
 * ## 왜 필요한가
 *
 * 적어 주신 꿈은 주소의 프래그먼트(#)에만 있고 **서버로 가지 않는다** — 브라우저가 프래그먼트를
 * 전송하지 않기 때문이고, 이 서비스가 입력을 저장하지 않는다는 원칙이 유료 흐름에서도
 * 유지되는 이유다(가장 사적인 글이라 더욱 그렇다).
 *
 * 그런데 국내 결제(토스)는 결제 후 **우리 서버 승인 라우트로** 리디렉트되어 승인된다. 서버가
 * 애초에 받은 적 없는 프래그먼트를 되돌려 줄 수는 없으므로, 돌아온 주소에는 꿈이 없다.
 * 그래서 결제 직전에 브라우저에 맡겨 두고 돌아와서 주소에 되돌려 놓는다.
 *
 * `sessionStorage`는 **이용자 브라우저**이지 서버가 아니므로 미저장 원칙과 충돌하지 않는다.
 * 탭을 닫으면 함께 사라진다.
 *
 * ## 왜 한 파일에 모으는가
 *
 * 맡기는 쪽과 되돌리는 쪽이 **같은 문자열**을 봐야 하는데, 그 문자열이 파일마다 따로 적혀
 * 있으면 한쪽만 고쳐도 컴파일은 통과하고 결제만 조용히 깨진다.
 *
 * ⚠️ **이 앱에도 맡기는 코드만 있고 되돌리는 코드가 없었다**(2026-08-06, `ReportPurchasePanel`
 * 안에 키와 저장 함수만 있었다). 사주링크가 같은 날 같은 자리에서 걸린 것과 같은 결함이고,
 * 상품을 켰다면 국내 결제는 승인되고 화면은 "결과를 읽을 수 없습니다"로 끝났을 것이다.
 * 없는 코드는 컴파일러에게 보이지 않으므로 `scripts/verify-payment-return.mjs`가 센다.
 */

const PENDING_KEY = "dreamslink.pendingPayment";

/** 결제창으로 넘어가기 직전, 지금 화면의 입력값을 맡겨 둔다. */
export function rememberForRedirect(orderId: string) {
  try {
    window.sessionStorage.setItem(
      PENDING_KEY,
      JSON.stringify({ orderId, fragment: window.location.hash.slice(1) }),
    );
  } catch {
    // 저장을 못 해도 결제는 진행한다. 돌아왔을 때 결과를 못 그릴 뿐이다.
  }
}

/**
 * 결제에서 돌아온 주소에 프래그먼트를 되살린다.
 *
 * 해시가 이미 있으면(해외 결제는 현재 주소로 그대로 돌아온다) 아무것도 하지 않는다. 해시만
 * 바뀌는 이동이라 문서를 다시 불러오지 않고 `hashchange`가 뜨므로, 프래그먼트를 지켜보는
 * 쪽이 그것을 받아 계산을 시작한다.
 */
export function restoreFragmentAfterPayment() {
  if (window.location.hash) return;
  const params = new URLSearchParams(window.location.search);
  // 결제에서 돌아온 주소에만 손댄다. 해시 없이 그냥 들어온 사람의 주소를 건드리면 안 된다.
  if (!params.get("payment")) return;
  try {
    const raw = window.sessionStorage.getItem(PENDING_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw) as { fragment?: string };
    if (saved.fragment) {
      window.location.replace(`${window.location.href}#${saved.fragment}`);
    }
  } catch {
    // 복원에 실패하면 결과 화면이 "결과 정보를 읽을 수 없습니다"로 안내한다.
  }
}
