/**
 * **어디로 돌아갈지를 주소에 실어 나른다.**
 *
 * ## 왜 이력(`history.back()`)으로 하면 안 되나 (2026-08-21)
 *
 * 처음에는 로그인이 쓰던 `router.back()` 을 안내·소개·문의·공지에도 쓰려 했다. 그런데
 * `window.history.length > 1` 은 **「우리 서비스의 이전 화면이 있다」가 아니라 「이 탭에
 * 아무 이력이나 있다」**는 뜻이다.
 *
 *     남의 사이트를 본다 → 주소를 직접 쳐서 /ko/about 에 온다 → 「이전 화면으로」
 *     → 홈이 아니라 **남의 사이트로 나간다**
 *
 * 재검증에서 지적받은 자리다. 로그인이 이미 같은 결함을 갖고 있으므로 「로그인과 같다」는
 * **일관성의 근거일 뿐 정확성의 근거가 아니다.**
 *
 * 그래서 이력에 기대지 않는다. **떠나는 쪽이 자기 주소를 실어 보내고**, 돌아가는 쪽은 그것이
 * 우리 주소인지 검사해서 쓴다. 결과 화면의 `?id=...` 까지 그대로 보존되고, 값이 없으면
 * (직접 방문·새 탭·크롤러) 원래의 대체 주소로 간다.
 *
 * ## 서버가 그린 HTML 에 실으면 안 된다
 *
 * `returnTo` 에는 `?id=<uuid>` 처럼 **끝없이 다른 값**이 들어온다. 그것을 푸터 링크에 서버가
 * 박아 두면 색인할 이유가 없는 주소를 내부 링크가 계속 공급하게 된다 — 이 저장소가 이미
 * 겪은 자리다(`components/GuideBackLink.tsx` 머리말). 그래서 **눌릴 때 브라우저에서** 붙인다.
 */

/** 주소에 실을 이름. 읽는 쪽과 쓰는 쪽이 같은 값을 봐야 하므로 여기 하나만 둔다. */
export const RETURN_TO_PARAM = "returnTo";

/** 역슬래시. **소스에 직접 적지 않는다** — 셸·히어독을 거치며 사라진 적이 있다. */
const BACKSLASH = String.fromCharCode(92);

/** 너무 긴 값은 받지 않는다. 주소창을 채우는 장난을 그대로 되돌려 주지 않기 위해서다. */
const MAX_LENGTH = 512;

/**
 * 제어 문자. **정규식 이스케이프를 쓰지 않는다** — 소스에 제어 바이트가 그대로 박혀 파일이
 * 이진으로 잡힌 적이 있다(2026-08-21).
 */
function hasControl(value: string): boolean {
  for (const ch of value) {
    const code = ch.charCodeAt(0);
    if (code < 32 || code === 127) return true;
  }
  return false;
}

/**
 * 공백류까지 포함해서 막는다. **날것 그대로의 주소**에 쓴다.
 *
 * 푼 값에는 쓰지 않는다 — `%20` 은 정상적인 우리 주소이고(경로에 띄어쓰기가 있으면 URL API 가
 * 그렇게 만든다), 그것을 막으면 **막는 쪽으로 틀린 것**이 된다.
 */
function hasBlankOrControl(value: string): boolean {
  for (const ch of value) {
    if (ch.trim() === "") return true;
  }
  return hasControl(value);
}

/**
 * **우리 주소인가.** 아니면 `null` 이다 — 부르는 쪽은 그때 제 대체 주소로 간다.
 *
 * 막는 것들:
 *
 *     https://evil.com     `/` 로 시작하지 않는다
 *     //evil.com           브라우저가 프로토콜 상대 주소로 읽는다
 *     /(역슬래시)evil.com   역슬래시를 `/` 로 고쳐 읽는 브라우저가 있다
 *     /%2F%2Fevil.com      풀어 보면 위와 같아진다
 *     javascript:alert(1)  `/` 로 시작하지 않으므로 위에서 걸린다
 *
 * **통과해야 하는 것도 목록에 있다.** `/a%20b` · `/100%` 처럼 정상적인 우리 주소를 막으면
 * 그것도 결함이다(`scripts/verify-return-to.ts` 의 `MUST_ALLOW`).
 */
export function safeReturnTo(value: string | null | undefined): string | null {
  if (!value) return null;
  if (value.length > MAX_LENGTH) return null;

  // **날것 그대로의 값.** 이것이 실제로 주소에 들어가므로 공백류까지 막는다.
  if (!value.startsWith("/")) return null;
  if (value.startsWith("//")) return null;
  if (value.includes(BACKSLASH)) return null;
  if (hasBlankOrControl(value)) return null;

  // **한 겹 풀어서도 본다.** 다만 풀리지 않는 값(홀로 있는 %, 끝에 붙은 %)은 **거부하지
  // 않는다** — 풀 수 없을 뿐 남의 사이트가 아니고, 브라우저도 그것을 구조로 읽지 않는다.
  // 예전에는 여기서 곧바로 null 을 내어 `/100%` 같은 우리 주소가 막혔다.
  let decoded: string | null = null;
  try {
    decoded = decodeURIComponent(value);
  } catch {
    decoded = null;
  }

  if (decoded !== null) {
    if (!decoded.startsWith("/")) return null;
    if (decoded.startsWith("//")) return null;
    if (decoded.includes(BACKSLASH)) return null;
    // 푼 값에서는 **제어 문자만** 막는다. `%20` 이 공백으로 풀리는 것은 정상이다.
    if (hasControl(decoded)) return null;
  }

  // **원본을 그대로 돌려준다.** 풀어서 돌려주면 `%3F` 가 `?` 로 바뀌는 식으로 주소의 뜻이
  // 달라진다 — 푸는 것은 검사에만 쓴다.
  return value;
}

/**
 * 지금 화면의 **내부 경로**. `returnTo` 자신은 빼고 싣는다 — 넣으면 돌아갈 곳이 겹겹이 쌓인다.
 *
 * 브라우저에서만 부른다(서버에는 「지금 화면」이 없다).
 */
export function currentInternalPath(): string | null {
  if (typeof window === "undefined") return null;
  const url = new URL(window.location.href);
  url.searchParams.delete(RETURN_TO_PARAM);
  return safeReturnTo(`${url.pathname}${url.search}${url.hash}`);
}

/**
 * 두 내부 주소가 **같은 화면**을 가리키는가. 조각(#)은 빼고 본다.
 *
 * 같은 화면이면 `returnTo` 를 붙이지 않는다 — `/ko/about` 에서 푸터의 「소개」를 다시 누르면
 * 「이전 화면으로」가 자기 자신을 가리키게 되어, 눌러도 제자리인 단추가 생긴다.
 */
export function isSameScreen(a: string, b: string): boolean {
  const strip = (value: string) => {
    const at = value.indexOf("#");
    return at === -1 ? value : value.slice(0, at);
  };
  return strip(a) === strip(b);
}

/**
 * 주소에 `returnTo` 를 붙인다. 실을 것이 없으면 원래 주소 그대로.
 *
 * **조각(#) 앞에 붙인다.** 뒤에 붙이면 `/ko/about#help?returnTo=...` 가 되어 쿼리가 통째로
 * **조각의 일부**가 된다 — 서버도 브라우저도 그것을 쿼리로 읽지 않아 값이 조용히 사라진다.
 */
export function withReturnTo(href: string, returnTo: string | null): string {
  if (!returnTo) return href;
  if (isSameScreen(href, returnTo)) return href;
  const hashAt = href.indexOf("#");
  const base = hashAt === -1 ? href : href.slice(0, hashAt);
  const fragment = hashAt === -1 ? "" : href.slice(hashAt);
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}${RETURN_TO_PARAM}=${encodeURIComponent(returnTo)}${fragment}`;
}

/**
 * 지금 주소에 실려 온 `returnTo`.
 *
 * **`useSearchParams` 를 쓰지 않는다.** 그것을 부르면 그 화면이 `Suspense` 경계를 요구하고,
 * 이 저장소에서는 그 갈래가 **운영에서만 갈아 끼워지고 dev 에서는 대체값에 머무는** 것을
 * 실측했다(2026-08-21). 여기서는 브라우저의 주소를 직접 읽는다.
 */
export function readReturnTo(): string | null {
  if (typeof window === "undefined") return null;
  return safeReturnTo(new URLSearchParams(window.location.search).get(RETURN_TO_PARAM));
}
