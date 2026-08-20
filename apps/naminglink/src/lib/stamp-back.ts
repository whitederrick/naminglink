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
 */
const ORIGINS: Record<string, { path: string; query?: string }> = {
  /** 글로벌 이름 → 한글 발음 표기 결과 화면. 같은 경로의 `mode=transliteration` 갈래다. */
  transliteration: {
    path: "/global-to-korean/result",
    query: "mode=transliteration",
  },
};

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
  const origin = from ? ORIGINS[from] : undefined;
  const id = (resultId ?? "").trim();
  if (!origin || !RESULT_ID.test(id)) {
    return { href: localePath("/", locale), label: labels.home };
  }
  const query = [`id=${encodeURIComponent(id)}`, origin.query].filter(Boolean).join("&");
  return { href: localePath(origin.path, locale, query), label: labels.previous };
}

/** 도장 신청으로 가는 링크에 실을 출처. 아는 값일 때만 붙인다. */
export function stampOriginQuery(from: string, resultId: string): string | undefined {
  if (!(from in ORIGINS)) return undefined;
  const id = resultId.trim();
  if (!RESULT_ID.test(id)) return undefined;
  return `from=${from}&rid=${encodeURIComponent(id)}`;
}
