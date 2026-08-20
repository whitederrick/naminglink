import { NextRequest, NextResponse } from "next/server";

import { hanjaMeaningDisplay } from "@/lib/hanja-meaning-display";
import { getSupabaseAdminClient } from "@/lib/supabase";

// 한글 음절 하나로 **이름에 쓸 수 있는 한자 후보**를 조회한다. 돌림자 입력 칸이 쓴다.
//
// ## 왜 만들었나 (2026-08-20)
//
// 돌림자 한자는 자유 입력 칸이었다. PC 한글 키보드는 한자 변환 키가 있어 `鐘`을 칠 수 있지만,
// **안드로이드 Gboard 한국어에는 한자 변환이 없다.** 그 이용자는 필수 입력 칸을 채울 방법이
// 없다 — 다른 앱에서 복사해 오는 것 말고는.
//
// 우리는 이미 음절을 받고 있고 공식 표도 갖고 있으므로, **골라 넣게** 하면 된다. 그러면
// 두 가지가 함께 해결된다.
//
//   · 키보드에 한자 변환이 없어도 입력할 수 있다
//   · 공식 표에 있는 글자만 고를 수 있으니 「확인 어려움」이 원천적으로 안 난다
//
// **뜻 칸이 부실한 글자도 함께 돌려준다.** 대법원 표에는 뜻 칸에 발음이 그대로 적힌 글자가
// 410자 있는데(`鐘`의 뜻 칸이 "종"), 그것은 그 글자를 쓸 수 없다는 뜻이 아니라 우리 자료에
// 뜻이 없다는 뜻이다. 빼면 그 글자를 돌림자로 쓰는 집안이 고를 수가 없다.

export const runtime = "nodejs";

/** 한글 음절 한 자. */
const SYLLABLE = /^[가-힣]$/;

/**
 * CDN 캐시. 대법원 표에서 온 참조 자료라 운영자가 표를 갈아끼울 때만 바뀐다.
 * `surname` 라우트와 같은 이유·같은 값이다.
 */
const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
} as const;

const empty = () => NextResponse.json({ ok: true, options: [] }, { headers: CACHE_HEADERS });

export async function GET(request: NextRequest) {
  const syllable = (request.nextUrl.searchParams.get("syllable") ?? "").trim();
  if (!SYLLABLE.test(syllable)) return empty();

  const supabase = getSupabaseAdminClient();
  if (!supabase) return empty();

  try {
    const { data: sources } = await supabase
      .from("official_hanja_sources")
      .select("id")
      .eq("status", "production")
      .order("effective_date", { ascending: false, nullsFirst: false })
      .limit(1);
    if (!sources?.length) return empty();

    const { data } = await supabase
      .from("official_hanja_entries")
      .select("hanja,designated_reading,meaning_ko")
      .eq("source_id", sources[0].id)
      .eq("review_status", "production")
      .eq("is_name_usable", true)
      .eq("hangul_syllable", syllable)
      .order("hanja")
      // 한 음절의 인명용 한자는 많아야 200자대다. `surname` 의 40은 성씨용이라 좁다 —
      // 여기서 자르면 뒤쪽 글자를 쓰는 집안이 자기 돌림자를 못 고른다.
      .limit(500);

    const seen = new Set<string>();
    const options = (data ?? [])
      .map((row) => {
        const hanja = String(row.hanja);
        const reading = String(row.designated_reading ?? syllable);
        const display = hanjaMeaningDisplay(
          row.meaning_ko ? String(row.meaning_ko) : "",
          reading,
        );
        return { hanja, reading, meaning: display.text, meaningKnown: display.known };
      })
      .filter((option) => {
        if (seen.has(option.hanja)) return false;
        seen.add(option.hanja);
        return true;
      });

    return NextResponse.json({ ok: true, options }, { headers: CACHE_HEADERS });
  } catch {
    return empty();
  }
}
