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

export async function GET(request: NextRequest) {
  const syllable = (request.nextUrl.searchParams.get("syllable") ?? "").trim();
  if (!SYLLABLE.test(syllable)) {
    return NextResponse.json({ ok: true, options: [] });
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) return NextResponse.json({ ok: true, options: [] });

  try {
    const { data: sources } = await supabase
      .from("official_hanja_sources")
      .select("id")
      .eq("status", "production")
      .order("effective_date", { ascending: false, nullsFirst: false })
      .limit(1);
    if (!sources?.length) return NextResponse.json({ ok: true, options: [] });

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

    return NextResponse.json({ ok: true, options });
  } catch {
    return NextResponse.json({ ok: true, options: [] });
  }
}
