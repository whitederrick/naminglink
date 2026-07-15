import { createClient } from "@supabase/supabase-js";

const publish = process.argv.includes("--publish");
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !serviceRoleKey || !anonKey) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, or SUPABASE_SERVICE_ROLE_KEY.",
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});
const publicSupabase = createClient(supabaseUrl, anonKey, {
  auth: { persistSession: false },
});
const hanjaSourceKey = "scourt-personal-name-hanja-2026-07-15";
const pronunciationSourceKey = "scourt-korean-romanization-2026-07-15";

async function requiredSource(table, sourceKey, statusColumn) {
  const { data, error } = await supabase
    .from(table)
    .select(`id,${statusColumn},source_key,title,source_sha256`)
    .eq("source_key", sourceKey)
    .single();
  if (error || !data) throw new Error(`${table} source lookup failed: ${error?.message}`);
  return data;
}

async function exactCount(table, sourceId, reviewStatus) {
  let query = supabase
    .from(table)
    .select("id", { count: "exact", head: true })
    .eq("source_id", sourceId);
  if (reviewStatus) query = query.eq("review_status", reviewStatus);
  const { count, error } = await query;
  if (error) throw new Error(`${table} count failed: ${error.message}`);
  return count ?? 0;
}

const hanjaSource = await requiredSource("official_hanja_sources", hanjaSourceKey, "status");
const pronunciationSource = await requiredSource(
  "official_pronunciation_sources",
  pronunciationSourceKey,
  "extraction_status",
);
const before = {
  hanjaEntries: await exactCount("official_hanja_entries", hanjaSource.id),
  pronunciationEntries: await exactCount(
    "official_pronunciation_entries",
    pronunciationSource.id,
  ),
};

if (before.hanjaEntries !== 10380 || before.pronunciationEntries !== 2321) {
  throw new Error(`Count mismatch before publish: ${JSON.stringify(before)}`);
}

if (publish) {
  const operations = [
    supabase
      .from("official_hanja_sources")
      .update({ status: "archived", updated_at: new Date().toISOString() })
      .eq("status", "production")
      .neq("id", hanjaSource.id),
    supabase
      .from("official_pronunciation_sources")
      .update({ extraction_status: "archived", updated_at: new Date().toISOString() })
      .eq("extraction_status", "production")
      .neq("id", pronunciationSource.id),
    supabase
      .from("official_hanja_entries")
      .update({ review_status: "production", updated_at: new Date().toISOString() })
      .eq("source_id", hanjaSource.id)
      .eq("review_status", "reviewed"),
    supabase
      .from("official_pronunciation_entries")
      .update({ review_status: "production", updated_at: new Date().toISOString() })
      .eq("source_id", pronunciationSource.id)
      .eq("review_status", "reviewed"),
  ];
  const results = await Promise.all(operations);
  const failure = results.find((result) => result.error);
  if (failure?.error) throw new Error(`Publish preparation failed: ${failure.error.message}`);

  const [{ error: hanjaPublishError }, { error: pronunciationPublishError }] = await Promise.all([
    supabase
      .from("official_hanja_sources")
      .update({ status: "production", updated_at: new Date().toISOString() })
      .eq("id", hanjaSource.id),
    supabase
      .from("official_pronunciation_sources")
      .update({ extraction_status: "production", updated_at: new Date().toISOString() })
      .eq("id", pronunciationSource.id),
  ]);
  if (hanjaPublishError || pronunciationPublishError) {
    throw new Error(
      `Source publish failed: ${hanjaPublishError?.message ?? pronunciationPublishError?.message}`,
    );
  }
}

const [finalHanjaSource, finalPronunciationSource] = await Promise.all([
  requiredSource("official_hanja_sources", hanjaSourceKey, "status"),
  requiredSource("official_pronunciation_sources", pronunciationSourceKey, "extraction_status"),
]);
const after = {
  hanjaEntries: await exactCount("official_hanja_entries", hanjaSource.id),
  hanjaProductionEntries: await exactCount(
    "official_hanja_entries",
    hanjaSource.id,
    "production",
  ),
  pronunciationEntries: await exactCount(
    "official_pronunciation_entries",
    pronunciationSource.id,
  ),
  pronunciationProductionEntries: await exactCount(
    "official_pronunciation_entries",
    pronunciationSource.id,
    "production",
  ),
  hanjaSourceStatus: finalHanjaSource.status,
  pronunciationSourceStatus: finalPronunciationSource.extraction_status,
};

const expectedProduction = publish || finalHanjaSource.status === "production";
const { data: publicCandidates, error: publicCandidatesError } = await publicSupabase
  .from("official_hanja_entries")
  .select("hangul_syllable,hanja,meaning_ko")
  .in("hangul_syllable", ["남", "규"])
  .eq("review_status", "production")
  .limit(200);
if (publicCandidatesError) {
  throw new Error(`Public production lookup failed: ${publicCandidatesError.message}`);
}
after.publicNamCandidates = publicCandidates.filter(
  (entry) => entry.hangul_syllable === "남",
).length;
after.publicGyuCandidates = publicCandidates.filter(
  (entry) => entry.hangul_syllable === "규",
).length;
const ok =
  after.hanjaEntries === 10380 &&
  after.pronunciationEntries === 2321 &&
  (!expectedProduction ||
    (after.hanjaProductionEntries === 10380 &&
      after.pronunciationProductionEntries === 2321 &&
      after.hanjaSourceStatus === "production" &&
      after.pronunciationSourceStatus === "production" &&
      after.publicNamCandidates > 0 &&
      after.publicGyuCandidates > 0));

console.log(JSON.stringify({ ok, publish, before, after }, null, 2));
if (!ok) process.exit(1);
