import "server-only";
import { loadAvoidedHanja, type AvoidedHanja } from "@/lib/avoid-hanja";
import { getSupabaseAdminClient } from "@/lib/supabase";

export type OfficialHanjaCandidate = {
  character: string;
  reading: string;
  meaning: string;
  note: string;
  element: "neutral";
  tags: string[];
  sourceStatus: "production";
  originLabel?: string;
};

function hangulSyllables(value: unknown) {
  return typeof value === "string"
    ? [...new Set([...value.trim()].filter((char) => /^[가-힣]$/u.test(char)))]
    : [];
}

function displayMeaning(value: unknown) {
  return String(value || "AI 의미 해석 대상")
    .replace(/\(\s*한\s*국\s*한\s*자\s*\)/g, "")
    .replace(/\(\s*일\s*본\s*한\s*자\s*\)/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

// 입력에 명시된 한자 글자들의 공식 지정 음가·뜻을 글자 단위로 조회한다.
// 한글→글로벌 변환에서 원 이름 분석이 동음이의 한자의 뜻으로 흐르지 않도록,
// 모델에 '이 글자의 확정된 뜻'을 데이터로 주입하는 용도.
export async function getOfficialHanjaMeanings(characters: string[]) {
  const unique = [
    ...new Set(
      characters.filter((char) => /[㐀-䶿一-鿿豈-﫿]/u.test(char)),
    ),
  ];
  const supabase = getSupabaseAdminClient();
  if (!supabase || !unique.length) return null;

  try {
    const { data: sources, error: sourceError } = await supabase
      .from("official_hanja_sources")
      .select("id")
      .eq("status", "production")
      .order("effective_date", { ascending: false, nullsFirst: false })
      .limit(1);
    if (sourceError || !sources?.length) return null;

    const { data, error } = await supabase
      .from("official_hanja_entries")
      .select("hanja,designated_reading,meaning_ko")
      .eq("source_id", sources[0].id)
      .eq("review_status", "production")
      .in("hanja", unique)
      .limit(unique.length * 8);
    if (error || !data?.length) return null;

    const byCharacter = new Map<string, { readings: Set<string>; meanings: Set<string> }>();
    for (const row of data) {
      const character = String(row.hanja);
      const entry =
        byCharacter.get(character) ?? { readings: new Set<string>(), meanings: new Set<string>() };
      entry.readings.add(String(row.designated_reading));
      entry.meanings.add(displayMeaning(row.meaning_ko));
      byCharacter.set(character, entry);
    }
    const elements = unique
      .filter((character) => byCharacter.has(character))
      .map((character) => ({
        hanja: character,
        reading: [...byCharacter.get(character)!.readings].join("·"),
        meaning: [...byCharacter.get(character)!.meanings].join(" / "),
      }));
    return elements.length ? elements : null;
  } catch {
    return null;
  }
}

export async function getOfficialHanjaCandidates(
  inputFactors: Record<string, unknown>,
  /**
   * 전통 작명에서 기피하는 한자(불용문자)를 허용 목록에서 뺄지.
   *
   * **여기서 빼는 것이 핵심이다.** 이 목록은 규칙 엔진과 LLM 프롬프트가 함께 쓰는 단일 출처라,
   * 여기서 빠지면 두 경로 모두에서 결정적으로 사라진다. 프롬프트에 "쓰지 말라"고 적는 방식은
   * 모델이 지키지 않으면 그만이다.
   */
  options?: { excludeAvoided?: boolean; includeCommonlyUsed?: boolean },
) {
  const syllables = hangulSyllables(inputFactors.givenNameHangul);
  const supabase = getSupabaseAdminClient();

  if (!supabase || !syllables.length) return null;

  try {
    const { data: sources, error: sourceError } = await supabase
      .from("official_hanja_sources")
      .select("id,source_key,version_label")
      .eq("status", "production")
      .order("effective_date", { ascending: false, nullsFirst: false })
      .limit(1);

    if (sourceError || !sources?.length) return null;

    const source = sources[0];
    // 음절별로 나눠 조회해 전체 행 제한 때문에 특정 음절의 후보가 통째로 잘리는 것을 막고,
    // hanja 2차 정렬로 같은 음절 안의 후보 순서를 결정적으로 유지한다(동점 랭킹의 재현성 보장).
    const entryResults = await Promise.all(
      syllables.map((syllable) =>
        supabase
          .from("official_hanja_entries")
          .select("hangul_syllable,hanja,designated_reading,meaning_ko,notes,metadata")
          .eq("source_id", source.id)
          .eq("review_status", "production")
          .eq("is_name_usable", true)
          .eq("hangul_syllable", syllable)
          .order("hanja")
          .limit(500),
      ),
    );
    if (entryResults.some((result) => result.error)) return null;
    const entries = entryResults.flatMap((result) => result.data ?? []);

    if (!entries.length) return null;

    // 기피 목록은 부류가 켜져 있는 것만 온다. 목록을 못 읽으면 비어 있어 아무것도 걸러지지 않는다.
    const avoided = options?.excludeAvoided
      ? await loadAvoidedHanja({ includeCommonlyUsed: options.includeCommonlyUsed })
      : new Map();
    const excluded: AvoidedHanja[] = [];

    const candidates: Record<string, OfficialHanjaCandidate[]> = {};

    for (const entry of entries) {
      const avoidedEntry = avoided.get(String(entry.hanja));
      if (avoidedEntry) {
        if (!excluded.some((item) => item.hanja === avoidedEntry.hanja)) {
          excluded.push(avoidedEntry);
        }
        continue;
      }
      const syllable = String(entry.hangul_syllable);
      const metadata =
        entry.metadata && typeof entry.metadata === "object"
          ? (entry.metadata as Record<string, unknown>)
          : {};
      const tags = Array.isArray(metadata.tags)
        ? metadata.tags.filter((tag): tag is string => typeof tag === "string")
        : [];

      (candidates[syllable] ??= []).push({
        character: String(entry.hanja),
        reading: String(entry.designated_reading),
        meaning: displayMeaning(entry.meaning_ko),
        note: String(entry.notes || "공식 인명용 한자표의 지정 발음 확인 후보입니다."),
        element: "neutral",
        tags,
        sourceStatus: "production",
        originLabel: /한\s*국\s*한\s*자/.test(
          String(metadata.officialDescription ?? entry.meaning_ko ?? ""),
        )
          ? "한국 고유 한자(국자)"
          : undefined,
      });
    }

    return {
      source: {
        sourceKey: source.source_key,
        versionLabel: source.version_label,
      },
      candidates,
      /** 기피 목록 때문에 빠진 글자들. 화면에 "왜 없는지"를 밝히는 데 쓴다. */
      excludedAvoided: excluded,
    };
  } catch {
    return null;
  }
}
