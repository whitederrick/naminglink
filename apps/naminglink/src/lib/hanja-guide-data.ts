import "server-only";
import { unstable_cache } from "next/cache";

import { getSupabaseAdminClient } from "@/lib/supabase";

/**
 * 인명용 한자 전체 목록을 초성으로 묶어 돌려준다.
 *
 * **왜 초성 단위인가.** 9,938자를 한 페이지에 담으면 너무 무겁고, 음절마다 한 페이지씩
 * 만들면 평균 20자짜리 얇은 페이지가 488개가 되어 "대량 생성 콘텐츠"로 취급된다. 초성으로
 * 묶으면 페이지당 평균 700자 남짓이라 그 사이에 놓인다.
 *
 * 하루 캐시한다. 표는 대법원이 개정할 때만 바뀌므로 그보다 자주 읽을 이유가 없다.
 */
export type HanjaEntry = {
  hanja: string;
  reading: string;
  meaning: string;
};

export type SyllableGroup = {
  syllable: string;
  entries: HanjaEntry[];
};

export type ChosungGroup = {
  /** URL 조각. 한글 자모를 경로에 넣으면 인코딩된 채 돌아다녀 읽기 어려우므로 대표 음절을 쓴다. */
  slug: string;
  /** 화면에 보이는 초성. */
  jamo: string;
  syllables: SyllableGroup[];
  total: number;
};

/** 초성 → URL 조각. 대표 음절의 로마자다(ㄱ→ga). 사전 순서를 그대로 따른다. */
const CHOSUNG_SLUGS: Record<string, string> = {
  ㄱ: "ga",
  ㄲ: "gga",
  ㄴ: "na",
  ㄷ: "da",
  ㄸ: "dda",
  ㄹ: "ra",
  ㅁ: "ma",
  ㅂ: "ba",
  ㅃ: "bba",
  ㅅ: "sa",
  ㅆ: "ssa",
  ㅇ: "a",
  ㅈ: "ja",
  ㅉ: "jja",
  ㅊ: "cha",
  ㅋ: "ka",
  ㅌ: "ta",
  ㅍ: "pa",
  ㅎ: "ha",
};

const CHOSUNG_LIST = Object.keys(CHOSUNG_SLUGS);

function chosungOf(syllable: string) {
  const code = syllable.codePointAt(0);
  if (code === undefined) return null;
  const index = Math.floor((code - 0xac00) / 588);
  return CHOSUNG_LIST[index] ?? null;
}

async function fetchChosungGroups(): Promise<ChosungGroup[]> {
  const supabase = getSupabaseAdminClient();
  if (!supabase) throw new Error("Supabase가 설정되지 않았습니다.");

  // PostgREST는 응답을 1,000행에서 자른다. `limit()`으로는 더 못 받으므로 `range()`로 넘긴다
  // (이 함정으로 음절 수가 488 대신 40으로 나간 적이 있다 — `guide-data.ts` 주석 참고).
  const PAGE = 1000;
  const rows: Array<{
    hangul_syllable: string;
    hanja: string;
    designated_reading: string | null;
    meaning_ko: string | null;
  }> = [];
  for (let from = 0; ; from += PAGE) {
    const page = await supabase
      .from("official_hanja_entries")
      .select("hangul_syllable,hanja,designated_reading,meaning_ko")
      .eq("review_status", "production")
      .order("hangul_syllable")
      .range(from, from + PAGE - 1);
    if (page.error) throw new Error(page.error.message);
    rows.push(...(page.data ?? []));
    if ((page.data?.length ?? 0) < PAGE) break;
  }

  const bySyllable = new Map<string, HanjaEntry[]>();
  for (const row of rows) {
    const list = bySyllable.get(row.hangul_syllable) ?? [];
    list.push({
      hanja: row.hanja,
      reading: row.designated_reading ?? row.hangul_syllable,
      meaning: (row.meaning_ko ?? "").trim(),
    });
    bySyllable.set(row.hangul_syllable, list);
  }

  const groups = new Map<string, SyllableGroup[]>();
  for (const [syllable, entries] of [...bySyllable.entries()].sort((a, b) =>
    a[0].localeCompare(b[0], "ko"),
  )) {
    const jamo = chosungOf(syllable);
    if (!jamo) continue;
    const list = groups.get(jamo) ?? [];
    list.push({ syllable, entries });
    groups.set(jamo, list);
  }

  return CHOSUNG_LIST.filter((jamo) => groups.has(jamo)).map((jamo) => {
    const syllables = groups.get(jamo)!;
    return {
      slug: CHOSUNG_SLUGS[jamo]!,
      jamo,
      syllables,
      total: syllables.reduce((sum, item) => sum + item.entries.length, 0),
    };
  });
}

const cached = unstable_cache(fetchChosungGroups, ["hanja-chosung-groups"], {
  tags: ["hanja-chosung-groups"],
  revalidate: 86400,
});

export async function getChosungGroups(): Promise<ChosungGroup[]> {
  try {
    return await cached();
  } catch {
    return [];
  }
}

export async function getChosungGroup(slug: string) {
  const groups = await getChosungGroups();
  return groups.find((group) => group.slug === slug) ?? null;
}

/**
 * 따로 페이지를 두지 않고 목차에 펼쳐 보여줄 만큼 작은 묶음인가.
 *
 * 실측하면 ㄸ·ㅃ·ㅉ 같은 초성은 3자·3자·1자뿐이다. 그런 것까지 페이지를 만들면 **정확히
 * "얇은 페이지"**가 되어 감점 대상이 된다. 목차에서 바로 보여주는 편이 낫다.
 */
export const TINY_GROUP_LIMIT = 10;

/**
 * **페이지가 실제로 열리는 초성 슬러그.** 라우트와 sitemap이 이 하나를 함께 본다.
 *
 * `generateStaticParams`와 화면의 `notFound()`가 같은 조건(`total > TINY_GROUP_LIMIT`)을 쓰는데,
 * sitemap이 그 조건을 따로 적으면 언젠가 어긋난다 — 어긋나면 **404가 나는 주소를 색인하라고
 * 구글에 내미는 꼴**이 된다. 조건을 한 곳에 둔다.
 *
 * 조회가 실패하면 `getChosungGroups`가 빈 배열을 준다. 그때 sitemap은 이 경로들을 싣지 않는다 —
 * 없는 주소를 내미는 것보다 낫다.
 */
export async function indexableChosungSlugs(): Promise<string[]> {
  const groups = await getChosungGroups();
  return groups.filter((group) => group.total > TINY_GROUP_LIMIT).map((group) => group.slug);
}
