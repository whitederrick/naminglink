import { NextRequest, NextResponse } from "next/server";

import { getSupabaseAdminClient } from "@/lib/supabase";

// 성(姓)의 한자 후보를 한글 음절 하나로 조회한다. 도장에 새길 성명을 만들 때 쓴다.
//
// **성씨 한자는 인명용한자 제한을 받지 않는다.** 이름에 쓸 수 있는 글자는 대법원 표로 정해져
// 있지만 성은 가족관계등록부를 따르므로, 이 표에 없는 성씨 한자를 쓰는 사람이 있다. 그래서 이
// 조회는 **후보를 도와주는 용도일 뿐이고, 화면에는 직접 입력하는 칸을 함께 둔다.**
//
// 표시용 조회다. 도장 문구의 최종 검증은 주문 라우트가 한다.

export const runtime = "nodejs";

/** 한글 음절 한 자. 성이 두 자인 경우(남궁·선우)는 화면에서 직접 입력받는다. */
const SYLLABLE = /^[가-힣]$/;

/**
 * CDN 캐시. **요청마다 DB를 두 번 치던 것을 막는다.**
 *
 * 이 라우트는 로그인도 레이트리밋도 없는 공개 조회라, 누구든 반복 호출로 DB 부하와 비용을
 * 키울 수 있었다. 돌려주는 것은 대법원 인명용한자 표에서 온 참조 데이터이고 운영자가 표를
 * 갈아끼울 때만 바뀌므로, 한 시간 캐시해도 화면이 틀려지지 않는다.
 *
 * 음절 하나당 한 벌씩 캐시된다. 실제로 쓰이는 성씨 음절은 수백 개 수준이라 적중률이 높다.
 * 표를 갈아끼운 직후에는 최대 한 시간 옛 값이 나갈 수 있는데, 성씨 한자 목록이라 그동안
 * 틀린 값이 보이는 것이 아니라 새 글자가 늦게 보이는 정도다.
 */
const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
} as const;

export async function GET(request: NextRequest) {
  const syllable = (request.nextUrl.searchParams.get("syllable") ?? "").trim();
  if (!SYLLABLE.test(syllable)) {
    return NextResponse.json({ ok: true, options: [] }, { headers: CACHE_HEADERS });
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) return NextResponse.json({ ok: true, options: [] }, { headers: CACHE_HEADERS });

  try {
    const { data: sources } = await supabase
      .from("official_hanja_sources")
      .select("id")
      .eq("status", "production")
      .order("effective_date", { ascending: false, nullsFirst: false })
      .limit(1);
    if (!sources?.length) return NextResponse.json({ ok: true, options: [] }, { headers: CACHE_HEADERS });

    const { data } = await supabase
      .from("official_hanja_entries")
      .select("hanja,meaning_ko")
      .eq("source_id", sources[0].id)
      .eq("review_status", "production")
      .eq("is_name_usable", true)
      .eq("hangul_syllable", syllable)
      .order("hanja")
      .limit(40);

    const seen = new Set<string>();
    const options = (data ?? [])
      .map((row) => ({
        hanja: String(row.hanja),
        meaning: row.meaning_ko ? String(row.meaning_ko).split(/[,·]/)[0].trim() : "",
      }))
      .filter((option) => {
        if (seen.has(option.hanja)) return false;
        seen.add(option.hanja);
        return true;
      });

    return NextResponse.json({ ok: true, options }, { headers: CACHE_HEADERS });
  } catch {
    return NextResponse.json({ ok: true, options: [] }, { headers: CACHE_HEADERS });
  }
}
