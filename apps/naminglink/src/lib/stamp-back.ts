import { localePath } from "@/lib/locale-path";
import type { Locale } from "@/lib/services";

/**
 * **도장 신청 화면의 「돌아가기」가 가리킬 곳.**
 *
 * ## 왜 만들었나 (2026-08-20)
 *
 * 돌아가기가 **무조건 홈**이었다(`stamp-order/page.tsx`). 그런데 이 화면에 오는 길은 거의
 * 결과 화면의 도장 카드다. 돌아가면 결과가 사라지고, 사용자는 이름 변환을 처음부터 다시
 * 해야 한다 — 「잠깐 굿즈를 보러 나왔다」가 「하던 일을 잃었다」가 된다.
 *
 * 이 저장소는 같은 문제를 안내 화면에서 이미 풀었다(`lib/guide-back.ts`). 안내로 가는
 * 링크에 `from=`을 실어 보내고 돌아갈 때 그것을 되읽는다. 여기서도 같은 방식을 쓴다.
 *
 * ## 아는 값만 받는다
 *
 * `from`이 아는 출처일 때만 목적지를 만들고, **주소는 우리가 조립한다.** 주소를 그대로
 * 링크로 삼으면 남이 만든 주소로 사용자를 다른 곳에 보낼 수 있다.
 *
 * 결과 화면은 1회용 조회 ID에 묶여 있어 `rid`가 함께 있어야 돌아갈 수 있다. `rid`는 **글자
 * 모양을 검사**해서 통과한 것만 쓴다.
 *
 * ## 표를 `Map`으로 둔다 — 「아는 값」에 물려받은 것이 섞이면 안 된다 (2026-08-20 재검증 P1)
 *
 * 처음에는 객체 리터럴에 `ORIGINS[from]` 과 `from in ORIGINS` 로 물었다. 그 둘은 **프로토타입
 * 에서 물려받은 이름까지 찾는다.** 그래서 아래가 전부 「아는 출처」로 통과했다.
 *
 *     ?from=toString&rid=abcdef      ORIGINS["toString"] → 함수(참) → origin.path 가 undefined
 *     ?from=constructor&rid=abcdef   → localePath 안 startsWith 에서 죽는다 → **HTTP 500**
 *     ?from=__proto__&rid=abcdef
 *
 * 밖으로 보내지지는 않았지만 「아는 출처만 허용」이라는 검사 자체가 우회됐고, 공개 GET 주소
 * 하나로 서버 오류를 만들 수 있었다.
 *
 * `Object.hasOwn` 으로 부르는 자리마다 막을 수도 있지만 **부르는 자리가 둘이었고, 둘이 서로
 * 다르게 물었다**(`[]` 와 `in`). 규칙이 두 벌이면 하나만 고쳐지는 날이 온다. `Map` 은 물려받는
 * 이름이 아예 없으므로 **이 결함의 갈래 자체가 사라진다.**
 */
const ORIGINS = new Map<string, { path: string; query?: string }>([
  // 글로벌 이름 → 한글 발음 표기 결과 화면. 같은 경로의 `mode=transliteration` 갈래다.
  ["transliteration", { path: "/global-to-korean/result", query: "mode=transliteration" }],
]);

/** 결과 조회 ID의 모양. 아니면 출처를 신뢰하지 않는다. */
const RESULT_ID = /^[A-Za-z0-9_-]{6,64}$/;

export type StampBackTarget = { href: string; label: string };

/**
 * 도장 신청 화면이 그릴 돌아가기 목적지.
 *
 * 출처를 모르거나 `rid`가 이상하면 **홈으로 떨어진다** — 푸터·직접 방문으로도 이 화면에
 * 올 수 있고, 그때는 돌아갈 결과가 없다.
 */
export function stampBackTarget(
  locale: Locale,
  from: string | undefined,
  resultId: string | undefined,
  labels: { previous: string; home: string },
): StampBackTarget {
  const origin = from ? ORIGINS.get(from) : undefined;
  const id = (resultId ?? "").trim();
  if (!origin || !RESULT_ID.test(id)) {
    return { href: localePath("/", locale), label: labels.home };
  }
  const query = [`id=${encodeURIComponent(id)}`, origin.query].filter(Boolean).join("&");
  return { href: localePath(origin.path, locale, query), label: labels.previous };
}

/** 도장 신청으로 가는 링크에 실을 출처. 아는 값일 때만 붙인다. */
export function stampOriginQuery(from: string, resultId: string): string | undefined {
  if (!ORIGINS.has(from)) return undefined;
  const id = resultId.trim();
  if (!RESULT_ID.test(id)) return undefined;
  return `from=${from}&rid=${encodeURIComponent(id)}`;
}
