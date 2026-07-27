import "server-only";

import { getSupabaseAdminClient } from "@/lib/supabase";

// 전통 작명에서 기피하는 한자(불용문자)를 후보에서 걸러 낸다.
//
// **거르는 자리가 중요하다.** 생성된 결과를 나중에 손보는 것이 아니라, 공식 인명용한자 허용 목록
// (`getOfficialHanjaCandidates`)에서 아예 빼 버린다. 그 목록은 규칙 엔진과 LLM 프롬프트가 함께 쓰는
// 단일 출처라, 여기서 빼면 두 경로 모두에서 결정적으로 사라진다. 프롬프트에 "쓰지 말라"고 적는
// 방식은 모델이 지키지 않으면 그만이므로 쓰지 않는다.
//
// 법적 필터(`is_name_usable`)와 성격이 다르다는 점을 잊지 말 것. 珍은 법적으로 아무 문제 없이 쓸 수
// 있는 글자이고, 여기서 빠지는 것은 **서비스가 관습을 반영하기로 한 정책** 때문이다. 그래서 무엇이
// 왜 빠졌는지를 함께 돌려주어 화면에 밝힌다.

export type AvoidCategory =
  | "treasure_object"
  | "royalty"
  | "divine"
  | "nature_sky"
  | "animal"
  | "excess"
  | "season_etc";

export type AvoidedHanja = {
  hanja: string;
  /** "보배 진"처럼 훈과 음. */
  reading: string;
  category: AvoidCategory;
  categoryLabel: string;
  reason: string;
  /** 관습상 기피 목록에 오르지만 실제로는 흔히 쓰이는 글자인가. */
  commonlyUsed: boolean;
};

const CACHE_TTL_MS = 5 * 60_000;
let cache: {
  at: number;
  key: "strict" | "all";
  byChar: Map<string, AvoidedHanja>;
} | null = null;

/**
 * 켜져 있는 부류의 기피 한자를 모아 온다.
 *
 * `includeCommonlyUsed`가 false면 **실제로 흔히 쓰이는 글자는 빼고** 돌려준다. 자료의 62자 중
 * 31자가 여기 해당하는데(圭·琳·玲·瑛·元·太·大·星·海·山 …), 이것까지 기본으로 걸러 내면 후보가
 * 절반 가까이 사라지고 이용자는 왜 흔한 글자가 없는지 알 수 없다. 자료 스스로 "논쟁적"이라고
 * 표시한 것을 기본값으로 강제하지 않는다.
 *
 * 부류가 꺼져 있으면 그 부류는 통째로 걸러 내지 않는다 — 시대에 따라 뒤집히는 판단이 섞여 있어
 * 코드가 아니라 관리자 화면에서 조정할 수 있어야 한다.
 */
export async function loadAvoidedHanja(
  options?: { includeCommonlyUsed?: boolean },
): Promise<Map<string, AvoidedHanja>> {
  const includeCommonlyUsed = options?.includeCommonlyUsed ?? false;
  const cacheKey = includeCommonlyUsed ? "all" : "strict";
  if (cache && cache.key === cacheKey && Date.now() - cache.at < CACHE_TTL_MS) {
    return cache.byChar;
  }

  const supabase = getSupabaseAdminClient();
  const byChar = new Map<string, AvoidedHanja>();
  if (!supabase) return byChar;

  try {
    let query = supabase
      .from("naming_avoid_hanja")
      .select("hanja,reading,category,reason,commonly_used")
      .eq("is_active", true);
    if (!includeCommonlyUsed) query = query.eq("commonly_used", false);

    const [{ data: categories }, { data: rows }] = await Promise.all([
      supabase
        .from("naming_avoid_categories")
        .select("category,label_ko,is_active")
        .eq("is_active", true),
      query,
    ]);

    const labels = new Map(
      (categories ?? []).map((row) => [String(row.category), String(row.label_ko)]),
    );

    for (const row of rows ?? []) {
      const category = String(row.category) as AvoidCategory;
      // 부류가 꺼져 있으면 라벨도 없다 → 걸러 내지 않는다.
      const label = labels.get(category);
      if (!label) continue;
      const hanja = String(row.hanja);
      // 한 글자가 여러 부류에 걸릴 수 있다. 먼저 온 것을 남긴다 — 이유는 하나만 보여 주면 되고,
      // 어느 쪽이든 걸러진다는 결론은 같다.
      if (byChar.has(hanja)) continue;
      byChar.set(hanja, {
        hanja,
        reading: String(row.reading),
        category,
        categoryLabel: label,
        reason: String(row.reason),
        commonlyUsed: Boolean(row.commonly_used),
      });
    }
  } catch {
    // 목록을 못 읽었다고 추천 자체가 실패하면 안 된다. 그때는 거르지 않고 진행한다.
    return byChar;
  }

  cache = { at: Date.now(), key: cacheKey, byChar };
  return byChar;
}

export function invalidateAvoidedHanjaCache() {
  cache = null;
}

/** 화면에 보여 줄 한 줄. 예: "珍(보배 진)" */
export function avoidedLabel(entry: AvoidedHanja) {
  return `${entry.hanja}(${entry.reading})`;
}
