import "server-only";
import { unstable_cache } from "next/cache";

import { getSupabaseAdminClient } from "@/lib/supabase";

/**
 * 안내 문서가 쓰는 숫자.
 *
 * **본문에 숫자를 하드코딩하지 않는다.** 인명용 한자표가 갱신되면 글에 적힌 "9,938자"도
 * 함께 틀린 값이 된다. 글이 표보다 오래 남으면 안 되므로 DB에서 읽어 그린다.
 *
 * 안내 문서는 방문자가 많아질 자리이고 값이 거의 바뀌지 않으므로 하루 캐시한다.
 * 실패하면 던진다 — 폴백을 캐시에 박아 두면 잠깐의 오류가 하루 동안 남는다
 * (`site-content-server.ts`에서 같은 이유로 같은 구조를 쓴다).
 */
export type GuideCounts = {
  /** 인명용 한자 전체 글자 수 */
  hanjaTotal: number;
  /** 그 글자들이 걸쳐 있는 한글 음절 수 */
  syllableCount: number;
  /** 표의 기준일(대법원 자료의 effective_date) */
  effectiveDate: string | null;
  /** 자료를 낸 곳 */
  publisher: string | null;
  /** 자료가 밝히는 근거 규정 */
  ruleReference: string | null;
  /** 기피 한자 수(활성만) */
  avoidTotal: number;
  /** 그중 실제로 흔히 쓰이는 글자 수 */
  avoidCommonlyUsed: number;
};

async function fetchGuideCounts(): Promise<GuideCounts> {
  const supabase = getSupabaseAdminClient();
  if (!supabase) throw new Error("Supabase가 설정되지 않았습니다.");

  const source = await supabase
    .from("official_hanja_sources")
    .select("effective_date,publisher,rule_reference")
    .eq("status", "production")
    .order("effective_date", { ascending: false, nullsFirst: false })
    .limit(1)
    .maybeSingle();
  if (source.error) throw new Error(source.error.message);

  const total = await supabase
    .from("official_hanja_entries")
    .select("id", { count: "exact", head: true })
    .eq("review_status", "production");
  if (total.error) throw new Error(total.error.message);

  // 음절 수는 DISTINCT가 필요한데 PostgREST가 직접 주지 않는다. 음절 컬럼만 받아 세는데,
  // 9,938행 × 한 컬럼이라 부담이 크지 않고 하루 한 번만 돈다.
  //
  // **`limit()`으로는 안 된다.** PostgREST가 응답 행 수를 1,000으로 자르기 때문에, 큰 값을
  // 줘도 1,000행만 돌아온다. 그것을 그대로 세면 음절이 488개가 아니라 40개로 나온다
  // (실제로 그렇게 틀린 값이 화면에 나갔다). `range()`로 끝까지 넘겨받아야 한다.
  const PAGE = 1000;
  const syllableSet = new Set<string>();
  for (let from = 0; ; from += PAGE) {
    const page = await supabase
      .from("official_hanja_entries")
      .select("hangul_syllable")
      .eq("review_status", "production")
      .range(from, from + PAGE - 1);
    if (page.error) throw new Error(page.error.message);
    for (const row of page.data ?? []) syllableSet.add(String(row.hangul_syllable));
    if ((page.data?.length ?? 0) < PAGE) break;
  }

  const avoid = await supabase
    .from("naming_avoid_hanja")
    .select("commonly_used")
    .eq("is_active", true);
  if (avoid.error) throw new Error(avoid.error.message);

  return {
    hanjaTotal: total.count ?? 0,
    syllableCount: syllableSet.size,
    effectiveDate: source.data?.effective_date ?? null,
    publisher: source.data?.publisher ?? null,
    ruleReference: source.data?.rule_reference ?? null,
    avoidTotal: avoid.data?.length ?? 0,
    avoidCommonlyUsed: (avoid.data ?? []).filter((row) => row.commonly_used).length,
  };
}

const cached = unstable_cache(fetchGuideCounts, ["guide-counts"], {
  tags: ["guide-counts"],
  revalidate: 86400,
});

/** 읽기에 실패하면 null. 부르는 쪽이 숫자 없이도 글을 그릴 수 있게 한다. */
export async function getGuideCounts(): Promise<GuideCounts | null> {
  try {
    return await cached();
  } catch {
    return null;
  }
}

export function formatCount(value: number) {
  return value.toLocaleString("ko-KR");
}
