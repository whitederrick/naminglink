import "server-only";
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

export async function getOfficialHanjaCandidates(
  inputFactors: Record<string, unknown>,
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
    const { data: entries, error: entryError } = await supabase
      .from("official_hanja_entries")
      .select("hangul_syllable,hanja,designated_reading,meaning_ko,notes,metadata")
      .eq("source_id", source.id)
      .eq("review_status", "production")
      .eq("is_name_usable", true)
      .in("hangul_syllable", syllables)
      .order("hangul_syllable")
      .limit(500);

    if (entryError || !entries?.length) return null;

    const candidates: Record<string, OfficialHanjaCandidate[]> = {};

    for (const entry of entries) {
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
    };
  } catch {
    return null;
  }
}
